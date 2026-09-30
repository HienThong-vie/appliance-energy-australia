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
- [x] Optional calculator: inputs, at least two calculations, results replaced and not duplicated, validation next to each field, works after refresh

## 2. Git and GitHub (Ex 0.1 / 0.2)

- [ ] **You:** create or clone your personal GitHub repo and move the site files to its root **(R2, Critical)**
- [ ] **Claude:** add a `.gitignore` that excludes `.claude-flow/` and `.impeccable/review/` **(R9)**
- [ ] **You:** first commit (the site as it stands), then small commits after each item below
- [ ] **You:** push to GitHub and check the repo shows a real commit history

## 3. KNIME: Ex 1 and Ex 2 (the actual Demo 1 submission)

Put the data in the workflow's `data/` folder and read it "relative to current workflow data area" (see the "Read in data – data locations" slide).

- [ ] **You:** Ex 1 nodes **(R1, Critical)**:
  - [ ] CSV Reader
  - [ ] Missing Value
  - [ ] String Manipulation, merging brands: `SAMSUNG ELECTRONICS`→`SAMSUNG`, `Q.BELL`→`QBELL`, `S VISION`→`SVISION`; check HUBBL vs HUBBL GLASS
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
  - [ ] Pivot Screen_Tech × size_category
- [ ] **You:** independent analysis (for the Very Good band): Expression `yearly_cost = energy × 0.33` → GroupBy size_category (+ tech)
- [ ] **You:** annotation boxes on the workflow explaining *why* each step was done
- [ ] **You:** CSV Writer exports to `assets/data/`, with Quote values set to **Never** **(R12)**:
  - [ ] `size_category_energy.csv`: columns `category,avg_kwh,avg_cost,models`; categories exactly `Small`, `Medium`, `Large`
  - [ ] `brand_count.csv`: `brand,count`
  - [ ] `tech_by_size.csv`: `category,lcd,lcd_led,oled`
- [ ] **You:** chart PNGs to `assets/img/charts/` **(R12)**:
  - [ ] `size-histogram.png`
  - [ ] `size-vs-energy.png`
  - [ ] `size-category-cost.png`
  - [ ] `tech-by-size.png`
  - [ ] `brand-count.png`
- [ ] **You:** export the workflow as `.knwf` **with data**, re-import it and confirm it runs

## 4. Ex 3: Data story

- [x] Audience chosen: Australian households buying a TV
- [x] Televisions page tells the story: 4 findings, takeaways, method box, calculator
- [x] Contextual text, insight titles, captions and sources on every chart
- [x] A data-table alternative for every chart
- [x] README sections: Data Story, About the data (source, processing, privacy, accuracy and limitations, ethics)
- [x] About page covers the same data topics
- [ ] **You:** draw the storyboard (FigJam, draw.io or PowerPoint) and save it as `docs/storyboard.png` **(R4)**
- [ ] **You then Claude:** check every number on the site against *your* KNIME output, and have Claude update any that differ **(R13)**. This covers:
  - [ ] Home verdict box ($52 / $134 / $247) and model count (4,508)
  - [ ] Finding text and all 5 data tables on the Televisions page, including the histogram bins (they may need to match KNIME's bins)
  - [ ] Calculator TV presets (41 W / 106 W / 197 W)
  - [ ] Brand shares ("more than half")

## 5. Ex 4.3–4.7: D3 bar chart (for Demo 2)

- [x] `barchart.js` follows the exercise structure: `d3.csv` row conversion, sort, `scaleLinear` + `scaleBand`, `g` groups with `translate`, labels
- [x] Responsive `viewBox` SVG, with an accessible title and a static-image fallback
- [ ] **You:** open the Televisions page on Live Server with your real CSV and confirm the bars match your KNIME values
- [ ] **Claude:** make the chart labels readable on phones; they are about 11px now **(R14)**
- [ ] **Claude:** stop `barchart.js` throwing an error when the D3 CDN fails to load **(R15)**

## 6. Clean-up found in the review

- [ ] **Claude:** README line 40 still says the nav uses "an underline"; update it to the filled tab **(R8)**
- [ ] **Claude:** add an explicit `## AI Declaration` heading to the README (Ex 3 wording) **(R10)**
- [ ] **Claude:** add `width`/`height` to the chart `<img>` tags once the PNGs exist **(R16)**
- [ ] **Claude (optional):**
  - [ ] a print style so the grow-in bars are not empty on paper **(R17)**
  - [ ] extend the bar stagger beyond 3 bars **(R17)**
  - [ ] resolve the design-system font-size warnings **(R11)**

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
