# Memory — Appliance Energy Australia (COS30045 Demo 1), pre-Mercury state

Last updated: 2026-10-04, evening

## What was built

- **All 5 KNIME chart PNGs and 3 CSVs are in and wired** (`assets/img/charts/`, `assets/data/`): size-histogram, size-vs-energy, size-category-cost, star-vs-energy, brand-count; `size_category_energy.csv`, `star_rating_energy.csv`, `brand_count.csv`. All sum to 4,508 models.
- **Finding 4 changed from screen type to star rating.** Reason and full rationale are in `DECISIONS.md`. Finding 3 (cost by size) was kept because the Home verdict box and the calculator are built on its numbers. The old `tech-by-size.png` and `tech_by_size.csv` are in `docs/archive/` (kept, not uploaded).
- **Televisions page redesign:** "In this report" moved out of the sticky left rail into the report banner, beside the headline (reuses `.cover-grid`, styled as a white verdict-frame panel so the butter current-item highlight stays visible). `.report-layout` is now a single full-width column.
- **Calculator:** form is full width (appliance + power on one row, hours + price on the next), results panel below it; inside results, total + chart beside the figures. New `assets/js/calcchart.js` draws a D3 bar chart of the user's yearly cost vs the average Small/Medium/Large TV, rescaled by `hours ÷ 10 × price`. TV presets show 3 bars with the user's size highlighted; "Other" adds a "Yours" bar; computer and microwave hide the chart with a note. TV presets corrected to 43 / 111 / 205 W. Planned with `/architect`; plan file is in `~/.claude/plans/`.
- **Pre-Mercury review fixes:** Home standfirst and FAQ 5, About audience and "how it is built" text, Finding 4 captions, README lines, PRODUCT.md, all updated to match the new findings.
- **Brand merge fixed in KNIME Ex 1:** String Replacers #19 (`q.bell`→`qbell`) and #20 (`s vision`→`svision`) added between #5 and Case Converter #15; `brand_count.csv` re-exported: 74 brands, QBELL 13, SVISION 7.
- **Docs kept in sync:** `DECISIONS.md` (new), `DESIGN.md`, `PRODUCT.md`, `README.md`, `PROGRESS.md` (Done log has every item above).
- **Git:** 3 new local commits (`37fa0f3` assets, `b1bcc56` site code, `8bdb40e` docs) on top of 4 earlier unpushed ones. **Nothing has been pushed.** `memory.md` is deliberately untracked.

## Decisions made

- **Every size chart uses the filtered base** (Available + SoldIn contains Australia = 4,508 rows) and inches (`screensize × 0.393701`). Small ≤ 43", Medium 44–65", Large ≥ 66".
- **Use `Star2`, never `Star`** — `Star` is 96.7% null; `Star2` is complete (half-star scale 1–8). Correlation with energy −0.51, with screen size only −0.12.
- **`barchart.js` is switched off on the page** (script tag commented out in `televisions.html`) so Finding 3 shows the KNIME PNG. Left as a pending decision in `PROGRESS.md` (Demo 2 expects a D3 chart; the calculator chart partly covers this).
- **KNIME work is the user's** (PROGRESS.md "You" items). Claude verifies exports against the raw CSV but doesn't hand-edit exported CSVs, so the page's claims stay traceable to the workflow.
- **`memory.md` is not committed** (public repo, private handoff notes).
- **Mercury upload set:** `index.html`, `televisions.html`, `about.html`, `assets/`. Never upload `PRODUCT.md`, `DESIGN.md`, `PROGRESS.md`, `DECISIONS.md`, `docs/`, `.impeccable/`, `.claude-flow/`.

## Problems solved

- **Stale CSS in the test browser:** hard reload (Ctrl+Shift+R) after CSS edits; it looked like the change had no effect.
- **`d3.csv` fails over `file://`:** the page must be served (`python -m http.server`), or the chart falls back silently.
- **Brand merge didn't take effect twice:** first only the Samsung rule existed; then both new patterns had a leading space. Rules must be lowercase (String Cleaner lowercases first) and sit before Case Converter.
- **Mobile label size:** a simulated 330px chart overstated the size; a real 390px frame gave about 13px. Fixed (21px under 600px, about 15px rendered).
- **Select vs number inputs were 3px different heights side by side:** fixed with `line-height: 1.25` on inputs and selects.
- **Browser-resize tool doesn't resize the window here:** test widths with iframes of set width instead.

## Current state

- **Works, verified in Chrome:** all three pages load with every request 200 and no console errors; all files referenced with exact case (Mercury is case-sensitive); no root-absolute paths; no duplicate IDs; no horizontal scroll at 390px; calculator and its chart correct ($66.85 total, bars $26 / $67 / $124 at 5 h, matching Finding 3 at 10 h).
- **Pre-Mercury review: all 6 issues closed.**
- **Known and left alone:** `size-histogram.png` is built on the unfiltered 4,724 rows (not visible on the page); `HUBBL` and `HUBBL GLASS` kept separate; Scatter Plot row cap vs 4,508 unconfirmed.

## Next session starts with

1. **Push to GitHub** when the user says so (7 commits ahead of `origin/main`).
2. **Re-export the KNIME workflows with data** — `KNIME_exercise_1.knwf` is from 1 Oct and has none of this week's fixes; no `.knwf` exists yet for Ex 2 (`KNIME_ex2`; there is also a `KNIME_ex2_finding4_star` folder). Check annotation boxes on both.
3. **Mercury (Ex 0.3):** activate the account (VPN off campus), upload the set above with WinSCP, open the public URL in a private window, then add the URL to the README.
4. **GenAI declaration and README own-words sections** (What I changed / learned / Limitations, and the user's own Ex 0.2 prompts) — must be the user's words, not Claude's.
5. **Interview prep:** walk through `main.js`, `calculator.js`, `calcchart.js`, `barchart.js`, `report.js` (IntersectionObserver is not taught), `styles.css` tokens, and the "why did you clean it this way" questions.

## Open questions

- The "in-class check-in" was the next day (5 Oct); the Canvas submission and interview are due **Sat 11 Oct 2026, 23:59**. Was the check-in fine, and is anything from it still to change?
- Turn `barchart.js` back on (or give it its own page) before the Demo 2 / interview?
- Merge `HUBBL` into `HUBBL GLASS`, or leave them separate?
- Fix the histogram's filtering (4,724 → 4,508 rows) or leave it, since the difference isn't visible on the page?
