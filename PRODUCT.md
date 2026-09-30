# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: Australian households choosing a new television.** They are not energy experts. They compare models in a shop or online, care about purchase price and the power bill, and want to know whether a bigger or more premium screen will noticeably raise their running costs. Every design decision serves this reader first.

**Constraint audience: COS30045 tutors.** Tutors assess the site in face-to-face interviews (Demonstration 1 in Week 4, Demonstration 2 in Week 7). They are not the reader the site is designed for, but their needs are hard constraints:
- every exercise requirement must be visibly present;
- the author (Chung Hien Thong) must be able to explain every line of code without reading comments.

## Product Purpose

A small public website that turns the Australian Government's appliance energy registration data into clear, honest visualisations. The main surface is a data story that answers one question for TV buyers: does a bigger screen, or an OLED screen, cost much more to run?

It is also the author's coursework for COS30045 Data Visualisation at Swinburne University of Technology:
- Exercise 0.2: website
- Exercise 3: data story
- Exercises 4.3 to 4.7: D3 bar chart
- later D3 exercises

**Success means:**
- a buyer leaves knowing that screen size drives running cost far more than screen type, and how to compare models;
- the author can demonstrate and justify every part in the interviews.

## Positioning

Built on the actual Energy Rating registration data: every model available in Australia in the 15 February 2026 extract, cleaned and summarised by the author in KNIME. The findings are the data's findings, not generic energy-saving advice, and the processing is documented and reproducible.

## Operating Context

- **Data pipeline:** raw CSV (`tv_2026_02_15.csv`) → KNIME workflow (clean, filter, convert, aggregate) → exported CSVs in `assets/data/` and chart images in `assets/img/charts/` → the site.
- **Development:** VS Code with Live Server. The site needs an HTTP server because D3 loads CSV files.
- **Version control:** the author's personal GitHub repository, with small, regular commits. Commit history is part of the assessment.
- **Hosting:** Swinburne's Mercury Apache server (`mercury.swin.edu.au/cos30045/s<id>/…`). Static files only, uploaded over WinSCP, with all paths relative.
- **Assessment rituals:** Canvas submissions of the site, the annotated `.knwf` file and a GenAI declaration, followed by a live interview.

## Capabilities and Constraints

- **Three pages, required by Ex 0.2:**
  - **Home:** introduction, Energy Rating Label explainer, FAQ accordion.
  - **Televisions:** the data story, D3 chart(s) and the running cost calculator.
  - **About Us:** audience, data source, processing, privacy, accuracy and limitations, ethics.
- **Fixed requirements:**
  - a top navigation on every page, with the power logo top-left linking Home, a hover effect and a clear active page;
  - a footer on every page with the current year, the author name and a GenAI acknowledgement;
  - all styling in one external CSS file, with no inline styles;
  - colours consistent with the provided power logo.
- **Stack:** plain HTML, CSS and vanilla JavaScript. D3 v7 comes from a CDN for charts. There is no build step and no framework. The calculator must stay vanilla JavaScript with no libraries.
- **D3 code** follows the structure taught in Exercises 4.3 to 4.7 (Dufour and Meeks, 2024) so it stays explainable.
- **Comments are minimal.** Each code file carries one GenAI attribution line. The unit treats heavy commenting as a sign of GenAI reliance.
- **Lifespan:** the site grows through the semester as more D3 charts are added (Weeks 5 and 6: scatter, donut, histogram, filters, tooltips), and it may become the base for the Week 13 team project website. The team project's data set and topic are **undecided**.

## Brand Commitments

- **Name:** "Appliance Energy Australia". This is the binding name; the Canvas brief's "Appliance Energy Consumption Website" is a description, not the title.
- **Logo:** the power logo provided on Canvas (`assets/img/PowerIcon.png`). Site colours must be consistent with it.
- **Voice:** plain-language, consumer-guide tone. Australian English. States examples as examples (for example, the $0.33/kWh price) and never overclaims.

## Evidence on Hand

- **Raw data:** `tv_2026_02_15.csv`, 4,724 rows, held in the KNIME workflow data folder outside the site.
- **Findings** (checked from the raw data, still to be confirmed against the author's KNIME output):
  - about 4,500 models are available in Australia;
  - average yearly cost at $0.33/kWh: small ≈ $52, medium ≈ $134, large ≈ $247;
  - OLED is not consistently more power hungry than LED at the same size;
  - Samsung, Kogan and LG hold more than half of all models.
- **Still to be supplied by the author:**
  - the logo file, the KNIME chart images and the exported CSVs;
  - the storyboard (`docs/storyboard.png`);
  - the author's own GenAI reflection text.
- **There are no testimonials, users, usage statistics or endorsements,** and none should be invented. The site must not recommend brands or models.

## Product Principles

1. **The data leads.** Every claim on the site traces back to the data set and the documented KNIME processing. When the numbers change, the words change.
2. **Honest over impressive.** State limitations, flag small samples, start bars at zero, and label example values as examples.
3. **Answer the buyer's question, then let them act.** The story moves from context to finding to a practical takeaway and the calculator.
4. **Everything must be explainable by the author.** Prefer taught patterns and readable code over clever code the author cannot defend in an interview.
5. **Built to grow.** New charts and pages should slot into the existing structure without reworking it.

## Accessibility & Inclusion

- **Unit content:** COS30045 covers chart accessibility in Week 8. Charts need text alternatives: meaningful `alt` on images, and `role="img"` with a title on SVGs.
- **Already in place:** keyboard-operable interactions, a skip link and visible focus states. These must be preserved.
- **Formal standard:** none has been set by the unit. Treat WCAG 2.1 AA as the working target (not confirmed as a requirement).
