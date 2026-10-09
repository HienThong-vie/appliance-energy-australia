# Progress Tracker: Appliance Energy Australia

**Assessment:** COS30045 Demonstration 1 (Week 4). Due **Sat 11 Oct 2026, 23:59**. No resubmission.
**Also feeds:** Demonstration 2 (Week 7) through the D3 chart (Ex 4.3–4.7).

**The website is complete when every box below is ticked.**

Last reviewed: 30 Sep 2026. **(R#)** refers to the numbered finding in that review.

**Owner:** **You** = only you can do this (KNIME, accounts, your own words, the interview). **Claude** = ask Claude to do it.

---

## 1. Ex 0.2: Website structure

- [x] Three pages: Home, Televisions, About Us
- [x] Top navigation on every page, with the power logo top-left linking to Home
- [x] Hover effect on navigation links
- [x] Current page clearly marked (filled dark-brown tab)
- [x] FAQ hidden by default, opened and closed with JavaScript (accordion)
- [x] All styling in one external CSS file, no inline styles
- [x] Colours consistent with the provided logo (tokens sampled from `PowerIcon.png`)
- [x] Footer on every page: current year (JavaScript), your name, GenAI acknowledgement
- [x] Sensible folder structure (`assets/css`, `assets/js`, `assets/img`, `assets/data`)
- [x] Logo file in place (`assets/img/PowerIcon.png`)
- [x] Optional calculator: inputs, at least two calculations, results replaced and not duplicated, validation next to each field, works after refresh. Checked against the Canvas "Optional JavaScript Challenge" brief on 3 Oct 2026; polished (typing your own wattage switches to "Other", label grammar, hours step 0.25)

## 2. Git and GitHub (Ex 0.1 / 0.2)

- [x] Public repo created: https://github.com/HienThong-vie/demonstration-1-COS30045 **(R2)**
- [x] `.gitignore` excludes `.claude-flow/` and the `.impeccable/` review, question and cache files **(R9, repo side)**
- [x] First commits made, grouped by feature (site shell, calculator, D3 chart, README, notes)
- [ ] **You:** keep making small commits after each item below
- [x] Pushed to GitHub (`main` tracks `origin/main`)

## 3. KNIME: Ex 1 and Ex 2 (the actual Demo 1 submission)

Put the data in the workflow's `data/` folder and read it "relative to current workflow data area" (see the "Read in data – data locations" slide).

- [ ] **You:** Ex 1 nodes **(R1, Critical)**:
  - [ ] CSV Reader
  - [ ] Missing Value
  - [ ] String Manipulation, merging brands: `SAMSUNG ELECTRONICS`→`SAMSUNG`, `Q.BELL`→`QBELL`, `S VISION`→`SVISION`; check HUBBL vs HUBBL GLASS
    - **Fixed 4 Oct:** String Replacer (#5) only had the Samsung rule, so `brand_count.csv` split QBELL (11) / Q.BELL (2) and SVISION (6) / S VISION (1), even though the page says brands were merged. Added String Replacers #19 (`q.bell` → `qbell`) and #20 (`s vision` → `svision`) between #5 and Case Converter #15 (lowercase because String Cleaner #4 lowercases first), re-ran, and CSV Writer #16 overwrote `assets/data/brand_count.csv`. Checked against the file: 74 brands (was 76), QBELL 13, SVISION 7, total 4,508, top 8 unchanged, so the page table and `brand-count.png` still match. `HUBBL` (1) and `HUBBL GLASS` (2) are left separate; the brief only says to check them.
    - Still open: re-export the Ex 1 `.knwf` with data. The only export on disk (`KNIME_exercise_1.knwf`) is from 1 Oct and has none of the 3 Oct–4 Oct fixes.
  - [ ] Row Filter (Available and sold in Australia)
  - [ ] Column Filter
  - [ ] GroupBy brand (count)
  - [ ] Sorter
  - [ ] Bar and pie charts
- [ ] **You:** Ex 2 nodes:
  - [ ] Histogram of screen size (check the odd sizes around 150 and 175 cm)
  - [ ] Scatter plot of size vs energy
  - [ ] Expression `screensize_inch`
  - [ ] Expression `size_category`: round inches first; Small ≤ 43, Medium 44–65, Large ≥ 66
  - [ ] GroupBy mean energy
  - [ ] Pivot Screen_Tech × size_category (built, kept in the workflow, no longer used on the page — Finding 4 changed angle, see `DECISIONS.md`)
  - [ ] GroupBy mean energy by `Star2` (new, for Finding 4 — use `Star2`, not `Star`, which is 96.7% null)
- [ ] **You:** independent analysis (for the Very Good band): Expression `yearly_cost = energy × 0.33` → GroupBy size_category
- [ ] **You:** annotation boxes on the workflow explaining *why* each step was done
- [ ] **You:** CSV Writer exports to `assets/data/`, with Quote values set to **Never** **(R12)**:
  - [x] `size_category_energy.csv`: columns `category,avg_kwh,avg_cost,models`; categories exactly `Small`, `Medium`, `Large` (values checked against the raw data on 4 Oct; the file still has quoted text, which D3 reads fine. Re-run the writer with Quote values = Never if you want it cleaner)
  - [x] `brand_count.csv`: `brand,count` (checked against the raw data on 4 Oct; sums to 4,508)
  - [x] `star_rating_energy.csv`: `star,avg_kwh,models` (replaces `tech_by_size.csv` as Finding 4's data — see `DECISIONS.md`. Checked against the raw data on 4 Oct, matches exactly)
  - [~] `tech_by_size.csv` — no longer used on the page (Finding 4 changed angle, see `DECISIONS.md`). Moved to `docs/archive/` so it isn't uploaded to Mercury. (KNIME_ex2's CSV Writer #31 still points at `assets/data/`, so re-running that branch would recreate it there; delete or disconnect #31 if you re-run.)
- [ ] **You:** chart PNGs to `assets/img/charts/` **(R12)**:
  - [x] `size-histogram.png`: axis in inches (via a new `screensize_inch` Expression node), matches the page's inch-based data table
  - [x] `size-vs-energy.png`: screensize_inch vs labelled energy, filtered to Available + sold in Australia (4,508). Worth a quick check that the Scatter Plot node's row cap is at least 4,508 so no points are silently dropped
  - [x] `size-category-cost.png`: 3 bars from the grouped table, y-axis labelled, 2196×650
  - [x] `brand-count.png`: top 5 of 72 brands shown, 2196×654
  - [ ] `star-vs-energy.png`: wired into Finding 4, but the Bar Chart node's title/axis labels were copy-pasted from Finding 3 — title still says "running cost by screen size" and the y-axis says "($)" when the values are kWh, not dollars. **Needs a relabel in KNIME and re-export** before this is accurate (see `DECISIONS.md`).
  - [~] `tech-by-size.png` — no longer used on the page (Finding 4 changed angle). Moved to `docs/archive/` so it isn't uploaded to Mercury.
- [ ] **You:** export the workflow as `.knwf` **with data**, re-import it and confirm it runs

## 4. Ex 3: Data story

- [x] Audience chosen: Australian households buying a TV
- [x] Televisions page tells the story: 4 findings, takeaways, method box, calculator
- [x] Contextual text, insight titles, captions and sources on every chart
- [x] A data-table alternative for every chart
- [x] README sections: Data Story, About the data (source, processing, privacy, accuracy and limitations, ethics)
- [x] About page covers the same data topics
- [x] Storyboard built in FigJam ([board](https://www.figma.com/board/v2rI7qZGKGD1WLEFM16USb)) and saved as `docs/storyboard.png` **(R4)**. 7 user-journey frames, grouped Beginning/Middle/End, following the reader through Home, the method and each finding to the calculator. Made with Claude; declared in the README
- [ ] **You then Claude:** check every number on the site against *your* KNIME output, and have Claude update any that differ **(R13)**. This covers:
  - [ ] Home verdict box ($52 / $134 / $247) and model count (4,508)
  - [ ] Finding text and all 5 data tables on the Televisions page, including the histogram bins (they may need to match KNIME's bins)
  - [x] Calculator TV presets: now 43 W / 111 W / 205 W, derived from `size_category_energy.csv` (avg kWh × 1000 ÷ 3,650 for the label's 10 h/day). Were 41 / 106 / 197, about 5% low
  - [ ] Brand shares ("more than half")

## 5. Ex 4.3–4.7: D3 bar chart (for Demo 2)

- [ ] **Decision pending:** `barchart.js` is switched off on the page (commented out in `televisions.html`) so the KNIME chart shows in Finding 3. Demo 1 and Demo 2 expect the D3 chart (Ex 4.6) to be visible, so turn it back on or show it on its own page before the interview. **Partly covered:** `calcchart.js` now shows a live D3 bar chart in the calculator results (same Ex 4.3–4.7 structure), so a D3 chart is visible on the page either way
- [x] `calcchart.js`: calculator comparison chart. Loads `size_category_energy.csv` with `d3.csv`, `scaleLinear` + `scaleBand`, `g` groups with `translate`, value labels at bar ends, responsive `viewBox`, redrawn on every result with no duplicate SVG. Same D3-loaded guard as R15. Checked 4 Oct: $26 / $67 / $124 at 5 h, $52 / $134 / $247 at 10 h (matches Finding 3). Labels are about 15px on a real 390px phone and about 20px on desktop; all text stays inside the chart even at the largest valid input
- [x] `barchart.js` follows the exercise structure: `d3.csv` row conversion, sort, `scaleLinear` + `scaleBand`, `g` groups with `translate`, labels
- [x] Responsive `viewBox` SVG, with an accessible title and a static-image fallback
- [x] **You:** open the Televisions page on Live Server with your real CSV and confirm the bars match your KNIME values (checked 4 Oct in a test browser: $52 / $134 / $247)
- [x] Chart labels readable on phones: about 16px at 390px wide, up from about 11px **(R14)**
- [x] `barchart.js` checks that D3 loaded; if not, it logs a warning and keeps the static image, with no uncaught error **(R15)**

## 6. Clean-up found in the review

- [x] README checklist now describes the filled-tab navigation **(R8)**
- [x] README has an explicit `## AI Declaration` section (Ex 3 wording) **(R10)**
- [ ] **Claude:** add `width`/`height` to the chart `<img>` tags once the PNGs exist. This is waiting on your KNIME PNGs. **(R16)**
- [x] Print style: bars print at full length **(R17)**
- [x] Bar grow-in stagger now covers up to 8 bars **(R17)**
- [x] Design-system font-size warnings resolved: each size is documented in DESIGN.md and recorded as an exception, so the detector is clean **(R11)**
- [x] About page no longer claims hosting that hasn't happened yet; it links the GitHub repo **(R5, text only)**
- [x] README links the GitHub repo and lists this session's prompts (your Ex 0.2 prompts are still to add) **(R3, partial)**

## 7. GenAI declaration

- [ ] **You:** list every prompt you used in the README **(R3, Critical)**:
  - [ ] your Ex 0.2 prompts
  - [ ] the build-plan prompt
  - [ ] the redesign prompt
  - [ ] the icon and nav prompt
  - [ ] the review prompt
- [ ] **You:** fill the four blanks in your own words: *What I changed*, *What I learned*, *Limitations* and the missing prompts. This part cannot be written by AI.
- [ ] **You:** write the Canvas GenAI declaration in the unit's format:
  - [ ] Introduction
  - [ ] Tool
  - [ ] Prompts
  - [ ] Outputs
  - [ ] Modifications
  - [ ] Reflection
  - [ ] Acknowledgement

## 8. Ex 0.3: Hosting on Mercury

- [ ] **You:** activate your Mercury account; use the VPN if off campus **(R5)**
- [ ] **You:** upload to `~/cos30045/www/htdocs/<lowercase-folder>/` with WinSCP. **Upload only:** `index.html`, `televisions.html`, `about.html`, `assets/`. **Do not upload:** `PRODUCT.md`, `DESIGN.md`, `PROGRESS.md`, `.impeccable/`, `.claude-flow/`.
- [ ] **You:** open the public URL in a private window and check the logo, charts, D3 chart and calculator all work
- [ ] **You:** put the Mercury URL in the README

## 9. Demo 1: Submit and interview

- [ ] **You:** submit on Canvas by 11 Oct 23:59:
  - [ ] the annotated `.knwf` file with data
  - [ ] class exercises
  - [ ] independent analysis
  - [ ] GenAI declaration
  - [ ] GitHub repo link
- [ ] **You + Claude:** walk through every file together so you can explain it without reading comments **(R6)**:
  - [ ] `main.js`
  - [ ] `calculator.js`
  - [ ] `calcchart.js`: why the averages are rescaled by hours ÷ 10, and why the SVG is rebuilt on every update
  - [ ] `barchart.js`
  - [ ] `report.js`: IntersectionObserver is not taught in Weeks 0–4, so be ready for it
  - [ ] `styles.css` tokens
- [ ] **You:** practise the likely questions:
  - [ ] why you cleaned the data this way;
  - [ ] data types, such as why inches had to become a string for the bar chart;
  - [ ] importing and exporting;
  - [ ] what each chart shows;
  - [ ] how you would change the workflow to answer a new question
- [ ] **You:** attend the on-campus interview

---

## Done log

| Date | What was completed |
|---|---|
| 30 Sep 2026 | Canvas brief and rubric reviewed; build plan approved |
| 30 Sep 2026 | Televisions page rebuilt as the Ex 3 data story; About and Home data sections; README Data Story / About the data |
| 30 Sep 2026 | D3 bar chart (`barchart.js`) built to the Ex 4.3–4.7 pattern with fallback; calculator presets based on the data |
| 30 Sep 2026 | Full visual redesign ("The Test Report"), independent finish review: all fixes resolved, verdict *ship* |
| 30 Sep 2026 | Logo added, palette matched to the logo, current-page nav changed from underline to a filled tab, focus ring made visible on yellow |
| 30 Sep 2026 | `PRODUCT.md` and `DESIGN.md` (design system for the Weeks 5–6 charts) written |
| 30 Sep 2026 | Site published to the public GitHub repo `demonstration-1-COS30045` in 5 feature commits |
| 1 Oct 2026 | Review fixes: phone chart labels, D3 load guard, print and stagger styles, README nav and AI Declaration, About hosting text, design-system warnings cleared |
| 3 Oct 2026 | Calculator checked against the Ex 0.2 optional JavaScript brief and polished |
| 3 Oct 2026 | Exercise 3 storyboard built in FigJam (7 user-journey frames) and saved to docs/storyboard.png |
| 3 Oct 2026 | First chart PNG attached (size-histogram.png); caught and fixed a cm-vs-inches mismatch in KNIME_exercise_2 |
| 3 Oct 2026 | Second chart attached (size-vs-energy.png): new filtered branch in KNIME_exercise_2 feeds a scatter plot of size vs energy |
| 4 Oct 2026 | Third chart attached (size-category-cost.png) and `size_category_energy.csv` exported from a new KNIME branch (size_category, yearly_cost, GroupBy); D3 bar chart now loads the real CSV; `width`/`height` added to the image tag |
| 4 Oct 2026 | Fourth chart attached (tech-by-size.png) and `tech_by_size.csv` exported; width/height added; Finding 3 now shows the KNIME PNG (D3 script commented out on the page by request) |
| 4 Oct 2026 | Full correctness pass: brand-count.png given width/height; found and logged the Q.BELL/QBELL and S VISION/SVISION brand-merge duplicates and the ~5% calculator wattage drift, both still open |
| 4 Oct 2026 | Finding 4 changed from screen type to star rating (DECISIONS.md): both Finding 3 and 4 were cuts of Ex 2's screensize column, not independent insight. Found `Star` is 96.7% null (use `Star2`); confirmed star rating vs energy is a clean, independent signal (−0.51 correlation, only −0.12 vs screensize). Wired star-vs-energy.png, star_rating_energy.csv, and the new Finding 4 copy/table into televisions.html, PRODUCT.md, README.md, about.html |
| 4 Oct 2026 | star-vs-energy.png relabelled in KNIME (title and y-axis no longer say "cost ($)" for kWh values) and re-exported; chart now fully correct, R16/R17-equivalent item closed |
| 4 Oct 2026 | Redesign: "In this report" moved out of the sticky left rail and into the report header banner, beside the headline (reuses the Home cover-grid pattern, styled as a verdict-frame panel so the butter current-item highlight still has contrast). No longer sticky. `report-layout` simplified to a single full-width column for the article. Updated DESIGN.md's layout and component notes to match |
| 4 Oct 2026 | Calculator comparison chart (`calcchart.js`, planned with /architect): D3 bars in the results panel compare your yearly cost with the average small, medium and large TV, rescaled to your hours and price. TV presets highlight your size; "Other" adds a "Yours" bar; computer and microwave hide the chart with a note. TV presets corrected to 43 / 111 / 205 W (R13). All 8 planned checks passed in Chrome, including no-D3 and phone width |
| 4 Oct 2026 | Calculator layout: the form is now full width (appliance beside power, hours beside price) with the results frame full width below it; inside the results, the total and chart sit beside the figures. Chart capped at 440px. Labels raised to 21px under 600px: a real 390px test showed about 13px, so the earlier "about 15px" check, which simulated a 330px chart, was too optimistic. Now about 15px. Selects and inputs set to the same 48px height. Checked in 390, 700 and 1280px frames: no horizontal scroll, all chart text fits |
| 4 Oct 2026 | Pre-Mercury review fixes:<br>- Home standfirst and FAQ 5 now ask and answer the star-rating question; the old screen-type claim is gone.<br>- About no longer says every chart is D3: findings charts are KNIME images, and the calculator chart is D3.<br>- Finding 4 captions corrected: Models column, and the dashed-rule note moved to the table.<br>- README brought in line.<br>- Unused tech-by-size files moved to `docs/archive/`.<br>- Brand-merge cause found (String Replacer #5 has only the Samsung rule); the exact KNIME fix is logged under Ex 1 |
| 4 Oct 2026 | Brand merge fixed in KNIME (String Replacers #19 and #20) and `brand_count.csv` re-exported: 74 brands, QBELL 13, SVISION 7, 4,508 total. The page's "brand names were standardised" claim is now true |
| 8 Oct 2026 | Redesign in the shadcn/ui style (shadcn skill installed globally). Kept plain HTML/CSS/vanilla JS: shadcn tokens and components recreated in `styles.css` (Card, Button, Tabs nav, Accordion FAQ, Collapsible data tables, Table, Badge, Alert takeaways, Input/Select). Archivo replaced by Geist; logo colours kept as primary, accent and chart colours; current page still a filled dark-brown tab. Small eyebrow badge added above each page title. No JS or class names changed. Checked in Chrome: no console errors, calculator still $66.85 with 3 comparison bars, no horizontal scroll at 390px, all text AA contrast, input borders 3.3:1. `DESIGN.md` rewritten to match |
| 9 Oct 2026 | /review fixes for the redesign (8 issues): nav hover now a visible deep-butter fill; focus is a 2px deep-bark outline on every control (10:1 on white; inputs also darken their border), replacing the faint orange ring; the stray divider lines in the calculator results removed (rule now only under the Home verdict scores); raw colours moved into tokens (`--surface`, `--header-background`); nav links and the data-table toggle back to 44px; DESIGN.md corrected; `.impeccable/design.json`, the surface brief and detector ignores regenerated for the new design; eyebrow badges kept and recorded in DESIGN.md |
