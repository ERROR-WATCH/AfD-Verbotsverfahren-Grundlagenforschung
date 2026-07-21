const fs = require('fs');

const htmlPath = '/home/error/AfD-Verbotsverfahren-Grundlagenforschung/index.html';
const html = fs.readFileSync(htmlPath, 'utf8');

function extractArray(name) {
  const startConst = html.indexOf(`const ${name} =`);
  if (startConst < 0) throw new Error(`${name} missing`);
  const start = html.indexOf('[', startConst);
  let depth = 0;
  let inString = false;
  let quote = '';
  let escaped = false;

  for (let i = start; i < html.length; i += 1) {
    const ch = html[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (ch === '\\') escaped = true;
      else if (ch === quote) inString = false;
      continue;
    }
    if (ch === '"' || ch === "'") {
      inString = true;
      quote = ch;
      continue;
    }
    if (ch === '[') depth += 1;
    if (ch === ']') {
      depth -= 1;
      if (depth === 0) return html.slice(start, i + 1);
    }
  }
  throw new Error(`array ${name} has no end`);
}

function deriveUrteilsart(c) {
  if (c.urteilsart) return c.urteilsart;
  const text = `${c.title || ''} ${c.category || ''} ${c.description || ''}`.toLowerCase();
  if (text.includes('verfassungsgericht') || text.includes('bundesverfassungsgericht') || text.includes('bverfg')) return 'Verfassungsgerichtliche Grundsatzentscheidung';
  if (text.includes('verwaltungsgericht') || text.includes('ovg') || text.includes('vg ') || text.includes('verfassungsschutz')) return 'Verwaltungsgerichtlicher Beschluss';
  if (text.includes('gewalt') || text.includes('körperverletzung') || text.includes('koerperverletzung') || text.includes('brand') || text.includes('angriff') || text.includes('terror')) return 'Strafurteil / Gewalt- oder Sicherheitsdelikt';
  if (text.includes('volksverhetzung') || text.includes('ns-') || text.includes('kennzeichen')) return 'Strafurteil / Volksverhetzung oder NS-Kennzeichen';
  if (text.includes('strafbefehl')) return 'Strafbefehl / akzeptierte Geldstrafe';
  if (text.includes('freispruch')) return 'Freispruch / entlastender Verfahrensstatus';
  if (text.includes('urteil') || text.includes('verurteilt') || text.includes('geldstrafe') || text.includes('tagess')) return 'Strafgerichtliches Urteil';
  return 'Gerichtliche Entscheidung';
}

const cases = JSON.parse(extractArray('cases'));
const bad = JSON.parse(extractArray('problematicOnlineUrls'));
const onlineByNumber = new Map(cases.map((c) => [c.number, c.online]));
const expectedReplacements = {
  2: 'kreiszeitung.de',
  29: 'tagesschau.de',
  34: 'fr.de',
  35: 'sueddeutsche.de',
  39: 'insuedthueringen.de',
  42: 'google.com/search',
  54: 'juris.bundesgerichtshof.de',
};

const replacementChecks = Object.fromEntries(Object.entries(expectedReplacements).map(([number, needle]) => {
  const url = onlineByNumber.get(Number(number)) || '';
  return [number, { url, ok: url.includes(needle), fallbackMarked: bad.includes(url) }];
}));

const badCoveredCaseNumbers = cases.filter((c) => bad.includes(c.online)).map((c) => c.number);
const categories = [...new Set(cases.map((c) => c.category).filter(Boolean))].sort();
const urteilsarten = [...new Set(cases.map(deriveUrteilsart))].sort();
const stale288Labels = [...html.matchAll(/288\s*Urteilsbelege|288\s*Gerichtsfälle|288\s*Fälle/g)].map((m) => m[0]);

const out = {
  caseCount: cases.length,
  maxNumber: Math.max(...cases.map((c) => c.number)),
  badSetCount: bad.length,
  badCoveredCases: badCoveredCaseNumbers.length,
  badCoveredCaseNumbers,
  replacementChecks,
  categoryCount: categories.length,
  urteilsartCount: urteilsarten.length,
  urteilsarten,
  hasGetter: html.includes('getCaseUrteilsart'),
  hasStatsFilters: html.includes('statsThemeFilter') && html.includes('renderManifestStatistics'),
  hasFavicon: html.includes('favicon.ico'),
  stale288Labels,
};

fs.writeFileSync('/home/error/AfD-Verbotsverfahren-Grundlagenforschung/reports/post-build-static-audit-20260721.json', `${JSON.stringify(out, null, 2)}\n`);
console.log(JSON.stringify(out, null, 2));
