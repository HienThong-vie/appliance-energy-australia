# Memory — Appliance Energy Australia (COS30045 Demo 1): shadcn/ui redesign

Last updated: 2026-10-09

## What was built

- **shadcn skill installed globally** for Claude Code: `~/.claude/skills/shadcn` (also copied to `~/.agents/skills/shadcn`), from `shadcn-ui/ui` via `npx skills add shadcn-ui/ui --skill shadcn -g -a claude-code -y`. It is not user-invocable (no `/shadcn`); it auto-loads for shadcn work. The repo's other skill, `migrate-radix-to-base`, was not installed.
- **Redesign in the shadcn/ui style** (8 Oct), then **8 `/review` fixes** (9 Oct). Files changed, all uncommitted:
  - `assets/css/styles.css`: fully rewritten. shadcn token names in `:root` (background, foreground, card, muted, muted-foreground, primary, accent, accent-strong, accent-border, chart, chart-focus, brand-ink, border, input, ring, surface, header-background, destructive, radius scale, shadows). Cards, Tabs-style nav, Accordion FAQ, Collapsible data tables, Table, Badge finding numbers, Alert takeaways, Input/Select. Font changed from Archivo to Geist. **No class names or JS changed.**
  - `index.html`, `televisions.html`, `about.html`: only changes are the Google Fonts link (Geist) and one `<p class="eyebrow">` badge above each h1.
  - `DESIGN.md`: rewritten for the new system (maps each part to its shadcn component).
  - `.impeccable/design.json`: regenerated with the same schema (generator script was in the session scratchpad, not the repo). `.impeccable/surfaces/televisions-html.md` updated. `.impeccable/config.json`: stale font-size ignores removed (kept 1rem and 30px).
  - `README.md`: nav hover line, GenAI "Design and finishing" bullet, and the two prompts from this session added. `PROGRESS.md`: Done-log rows for 8 Oct and 9 Oct.

## Decisions made

- **shadcn look in plain CSS, not real shadcn/React.** The user chose this explicitly. PRODUCT.md forbids frameworks and build steps, and the author must be able to explain the code.
- **Current nav page stays a filled deep-bark tab** (the user's earlier binding decision), not shadcn's white pill. Hover is a deep-butter `#f3cd6a` fill (the Ex 0.2 hover requirement).
- **Focus is a 2px deep-bark (`--ring: #4f3f28`) outline at 2px offset on every control.** Never bolt orange, which is only 2.8:1 on butter.
- **Logo colours kept:** deep bark is primary, butter is accent, bark `#7d6744` is chart, bolt `#c47a1e` marks only the discussed data mark. Input border `#948d86` (3.3:1).
- **Eyebrow badges kept** after review. They weren't originally requested; to drop them, delete the three `<p class="eyebrow">` lines.
- **Light mode only**, because the KNIME chart PNGs have white backgrounds.
- Carried over: `memory.md` is never committed. The Mercury upload set is `index.html`, `televisions.html`, `about.html` and `assets/` only. Use `Star2`, never `Star`. `barchart.js` is switched off on the page.

## Problems solved

- **The Chrome extension's screenshots are unreliable here** (partial or mis-scaled frames, one timeout). Use headless Chrome instead: `"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --screenshot=... --window-size=W,H --virtual-time-budget=4000 URL`. It has a minimum width of about 500px, so check phone width with 390px iframes via the extension's `javascript_tool`.
- **Focus can't be tested from the extension**, because the document isn't focused (`document.hasFocus()` is false). Use a same-origin headless test page that iframes a copy of the site and calls `.focus()`.
- **`sed` replacement text containing `&middot;` breaks**, because `&` inserts the whole match. Escape it as `\&` or use Python.

## Current state

- **Verified in Chrome:** no console errors; calculator $66.85 with 3 comparison bars; no horizontal scroll at 390px on all 3 pages; nav links and the data-table toggle 44px; focus outline renders on the input and buttons; all text at least AA (muted 5.8:1).
- **Not visually verified:** the nav hover colour. It is checked by computed values only; the user was asked to hover once.
- **Git:** `main` matches `origin/main` (0 unpushed commits). All redesign and review-fix files above are **uncommitted**.
- Submission and interview are due **Sat 11 Oct 2026, 23:59**.

## Next session starts with

1. Ask whether to **commit** the redesign plus review fixes (suggested: one commit "Redesign in shadcn/ui style and apply review fixes"), then push when the user says so.
2. Remind the user to hover the nav once to confirm the hover state.
3. Then the remaining Demo 1 items carried over from 4 Oct. **Their status is unverified** (commits "final commit" and "final chart commit" landed after that note). Check `PROGRESS.md` before acting:
   - re-export the KNIME `.knwf` workflows with data and annotations;
   - Mercury upload (Ex 0.3), then add the URL to the README;
   - the user's own words in the README GenAI sections (What I changed / learned / Limitations, Ex 0.2 prompts);
   - interview prep, now including explaining the new CSS tokens and the shadcn mapping in `DESIGN.md`.

## Open questions

- Keep or drop the eyebrow badges? (Kept for now.)
- Carried over from 4 Oct, possibly resolved since:
  - turn `barchart.js` back on for Demo 2?
  - merge `HUBBL` into `HUBBL GLASS`?
  - fix the histogram's 4,724 vs 4,508 row filtering?
