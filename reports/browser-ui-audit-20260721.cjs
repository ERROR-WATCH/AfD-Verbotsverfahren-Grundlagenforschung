const fs = require('fs');
const http = require('http');
const WebSocket = require('ws');

const outPath = '/home/error/AfD-Verbotsverfahren-Grundlagenforschung/reports/browser-ui-audit-20260721.json';

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (error) { reject(error); }
      });
    }).on('error', reject);
  });
}

async function main() {
  const tabs = await getJson('http://127.0.0.1:9226/json');
  const page = tabs.find((t) => t.type === 'page' && t.webSocketDebuggerUrl);
  if (!page) throw new Error('No Chromium page target found');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();

  ws.on('message', (raw) => {
    const msg = JSON.parse(raw);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(JSON.stringify(msg.error)));
      else resolve(msg.result);
    }
  });

  await new Promise((resolve) => ws.once('open', resolve));
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const callId = ++id;
    pending.set(callId, { resolve, reject });
    ws.send(JSON.stringify({ id: callId, method, params }));
  });

  await send('Runtime.enable');
  await send('Page.enable');
  await send('Page.navigate', { url: 'http://127.0.0.1:4183/index.html?audit=' + Date.now() });
  await send('Runtime.evaluate', {
    expression: `new Promise(resolve => {
      const done = () => resolve(true);
      if (document.readyState === 'complete') setTimeout(done, 1000);
      else window.addEventListener('load', () => setTimeout(done, 1000), { once: true });
    })`,
    awaitPromise: true,
    timeout: 10000,
  });

  const expression = `(() => {
    const errors = [];
    const click = (id) => {
      const btn = document.getElementById('btn-' + id);
      if (!btn) { errors.push('missing tab button ' + id); return false; }
      btn.click();
      const panel = document.getElementById(id);
      if (!panel || panel.classList.contains('hidden')) errors.push('tab not visible after click ' + id);
      return true;
    };
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    return (async () => {
      const tabIds = ['tab-register','tab-gruende','tab-zitate','tab-gutachten','tab-statistik','tab-vs','tab-sonstige','tab-programme','tab-quellen','tab-readme','tab-ki'];
      tabIds.forEach(click);
      click('tab-register');
      await wait(100);
      const casesInitial = document.querySelectorAll('#casesGrid .case-card').length;
      const resultInitial = document.getElementById('caseResultCount')?.textContent || '';
      const status = document.getElementById('statusFilter');
      const category = document.getElementById('categoryFilter');
      const art = document.getElementById('urteilsartFilter');
      if (!status || !category || !art) errors.push('missing case filters');
      const statusOption = [...status.options].find(o => o.value === 'DIREKT AfD');
      if (statusOption) { status.value = 'DIREKT AfD'; status.dispatchEvent(new Event('change', { bubbles: true })); }
      await wait(60);
      const statusCount = document.querySelectorAll('#casesGrid .case-card').length;
      status.value = 'ALL'; status.dispatchEvent(new Event('change', { bubbles: true }));
      const categoryOption = [...category.options].find(o => o.value !== 'ALL');
      if (categoryOption) { category.value = categoryOption.value; category.dispatchEvent(new Event('change', { bubbles: true })); }
      await wait(60);
      const categoryCount = document.querySelectorAll('#casesGrid .case-card').length;
      category.value = 'ALL'; category.dispatchEvent(new Event('change', { bubbles: true }));
      const artOption = [...art.options].find(o => o.value.includes('Gerichtliche Entscheidung')) || [...art.options].find(o => o.value !== 'ALL');
      if (artOption) { art.value = artOption.value; art.dispatchEvent(new Event('change', { bubbles: true })); }
      await wait(60);
      const artCount = document.querySelectorAll('#casesGrid .case-card').length;
      const artResult = document.getElementById('caseResultCount')?.textContent || '';
      art.value = 'ALL'; art.dispatchEvent(new Event('change', { bubbles: true }));
      await wait(60);
      const resetCount = document.querySelectorAll('#casesGrid .case-card').length;

      click('tab-statistik');
      await wait(1000);
      const theme = document.getElementById('statsThemeFilter');
      const grade = document.getElementById('statsGradeFilter');
      const statStatus = document.getElementById('statsStatusFilter');
      const statsInitial = document.querySelectorAll('#statsManifestList article').length;
      const statsInitialText = document.getElementById('statsResultCount')?.textContent || '';
      const firstTheme = theme ? [...theme.options].find(o => o.value !== 'ALL') : null;
      if (firstTheme) { theme.value = firstTheme.value; theme.dispatchEvent(new Event('change', { bubbles: true })); }
      await wait(100);
      const statsThemeCount = document.querySelectorAll('#statsManifestList article').length;
      const statsThemeText = document.getElementById('statsResultCount')?.textContent || '';
      if (theme) { theme.value = 'ALL'; theme.dispatchEvent(new Event('change', { bubbles: true })); }
      const firstGrade = grade ? [...grade.options].find(o => o.value !== 'ALL') : null;
      if (firstGrade) { grade.value = firstGrade.value; grade.dispatchEvent(new Event('change', { bubbles: true })); }
      await wait(100);
      const statsGradeCount = document.querySelectorAll('#statsManifestList article').length;
      const firstStatus = statStatus ? [...statStatus.options].find(o => o.value !== 'ALL') : null;
      if (grade) { grade.value = 'ALL'; grade.dispatchEvent(new Event('change', { bubbles: true })); }
      if (firstStatus) { statStatus.value = firstStatus.value; statStatus.dispatchEvent(new Event('change', { bubbles: true })); }
      await wait(100);
      const statsStatusCount = document.querySelectorAll('#statsManifestList article').length;
      const statOverflow = [...document.querySelectorAll('#tab-statistik .stat-mini-label')].filter(el => el.scrollWidth > el.clientWidth + 2).length;
      const overflowingCards = [...document.querySelectorAll('#casesGrid .case-card, #statsManifestList article')].filter(el => el.scrollWidth > el.clientWidth + 2).map(el => ({tag: el.tagName, cls: el.className, text: (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 180), scrollWidth: el.scrollWidth, clientWidth: el.clientWidth}));
      const cardsOverflow = overflowingCards.length;
      const fallbackCases = cases.filter(c => problematicOnlineUrls.has(c.online));
      click('tab-register');
      await wait(100);
      const directProblematicRendered = [...document.querySelectorAll('#casesGrid a[href]')].filter(a => problematicOnlineUrls.has(a.href)).map(a => a.href);
      const googleFallbackRendered = [...document.querySelectorAll('#casesGrid a[href*="google.com/search"]')].length;
      const ret = {
        tabIds,
        errors,
        casesInitial,
        resultInitial,
        statusCount,
        categoryValue: categoryOption?.value || null,
        categoryCount,
        urteilsartValue: artOption?.value || null,
        artCount,
        artResult,
        resetCount,
        statsOptions: {
          themes: theme ? theme.options.length : 0,
          grades: grade ? grade.options.length : 0,
          statuses: statStatus ? statStatus.options.length : 0
        },
        statsInitial,
        statsInitialText,
        statsThemeValue: firstTheme?.value || null,
        statsThemeCount,
        statsThemeText,
        statsGradeValue: firstGrade?.value || null,
        statsGradeCount,
        statsStatusValue: firstStatus?.value || null,
        statsStatusCount,
        statOverflow,
        cardsOverflow,
        fallbackCaseCount: fallbackCases.length,
        directProblematicRenderedCount: directProblematicRendered.length,
        googleFallbackRendered,
        overflowingCards,
      };
      if (casesInitial !== 313) errors.push('expected 313 initial case cards');
      if (resetCount !== 313) errors.push('expected 313 reset case cards');
      if (!(statusCount > 0 && statusCount < 313)) errors.push('status filter did not narrow cases');
      if (!(categoryCount > 0 && categoryCount < 313)) errors.push('category filter did not narrow cases');
      if (!(artCount > 0 && artCount < 313)) errors.push('urteilsart filter did not narrow cases');
      if (!(statsInitial > 0)) errors.push('statistics manifest did not render');
      if (!(statsThemeCount > 0 && statsThemeCount <= statsInitial)) errors.push('theme filter did not narrow/render stats');
      if (!(statsGradeCount > 0 && statsGradeCount <= statsInitial)) errors.push('grade filter did not narrow/render stats');
      if (!(statsStatusCount > 0 && statsStatusCount <= statsInitial)) errors.push('status filter did not narrow/render stats');
      if (directProblematicRendered.length > 0) errors.push('problematic direct links rendered instead of fallback');
      ret.ok = errors.length === 0;
      return ret;
    })();
  })()`;

  const result = await send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true,
    timeout: 20000,
  });
  fs.writeFileSync(outPath, `${JSON.stringify(result.result.value, null, 2)}\n`);
  console.log(JSON.stringify(result.result.value, null, 2));
  ws.close();
}

main().catch((error) => {
  const out = { ok: false, error: String(error && error.stack || error) };
  fs.writeFileSync(outPath, `${JSON.stringify(out, null, 2)}\n`);
  console.error(out.error);
  process.exit(1);
});
