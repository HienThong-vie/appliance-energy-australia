# Appliance Energy Australia

A three-page website about household appliance energy use in Australia, built for COS30045 Data Visualisation. It started as Exercise 0.2, was extended into the Exercise 3 data story about television running costs, and includes D3 bar charts built with the Week 4 pattern (Exercises 4.3 to 4.7).

Author: Chung Hien Thong

Repository: https://github.com/HienThong-vie/demonstration-1-COS30045

Live site (Mercury): https://mercury.swin.edu.au/cos30045/s106212681/appliance-energy-website/about.html

## Pages

| Page | File | What it contains |
| --- | --- | --- |
| Home | `index.html` | Introduction, a running-cost example from the data, how to read the Energy Rating Label, FAQ accordion |
| Televisions | `televisions.html` | Data story in four steps (size distribution, size vs energy, cost by size group, star rating), takeaways, brand context, Appliance Energy Calculator |
| About Us | `about.html` | Audience, data source, processing, privacy, accuracy and limitations, ethics, full Generative AI declaration |

## Folder structure

```
/
  index.html
  televisions.html
  about.html
  assets/
    css/styles.css       all styling (one external stylesheet)
    js/main.js           footer year + FAQ accordion (all pages)
    js/barchart.js       D3 bar chart of yearly cost by screen size; switched off on the page (Finding 3 shows the KNIME image)
    js/report.js         bars grow in when scrolled into view; findings rail marks the current finding
    js/calcchart.js      D3 chart in the calculator results: your cost beside the average small, medium and large TV
    js/calculator.js     Appliance Energy Calculator (Televisions page)
    data/                CSV files exported from KNIME for the D3 charts
    img/PowerIcon.png    power logo provided on Canvas
    img/charts/          chart images exported from KNIME
  docs/storyboard.png    Exercise 3 storyboard
  README.md
```

## Requirements checklist

Exercise 0.2
- Three pages with a top navigation bar on every page
- Power logo top-left, links back to Home
- Hover effect on navigation links (deep butter fill); current page marked with `aria-current="page"` and a filled dark-brown tab
- FAQ hidden by default, opened and closed with JavaScript (accordion)
- All styling in `assets/css/styles.css`, no inline styles
- Footer on every page with the current year (set by JavaScript), author name and GenAI acknowledgement
- Optional extension: Appliance Energy Calculator in vanilla JavaScript
  - Inputs: appliance (TV presets use the average power of each size group), power rating (W), hours per day, electricity price ($/kWh)
  - Outputs: daily, monthly and yearly energy (kWh), monthly and yearly cost
  - Results shown in a panel on the page and replaced on each update, not duplicated
  - Validation messages next to each input; results hidden until inputs are valid
  - After the first Calculate, results update as inputs change

Exercise 3
- Audience and data story described below
- Televisions page tells the story with text that puts each chart in context
- README sections: Data Story, About the data, AI Declaration

Exercises 4.3 to 4.7
- `d3.csv()` with a row conversion function so numbers are typed correctly
- Data bound to SVG groups with `selectAll().data().join()`
- `scaleLinear` for bar length and `scaleBand` for bar position and thickness
- Category and value labels in each group; responsive SVG using `viewBox`
- Replaces the static KNIME image, which stays visible if the data cannot load

## Running locally

The calculator's D3 chart loads a CSV file, so the pages need to be served over HTTP. Use the Live Server extension in VS Code (or `python -m http.server` in this folder) and open `index.html`. All paths are relative, so the same files work when uploaded to Mercury (see Exercise 0.3).

## Data Story

**Audience:** Australian households choosing a new television. They are not energy experts. They compare models in a shop or online, and care about the purchase price and the power bill.

**What they want to know:**
1. Does a bigger screen cost noticeably more to run?
2. Does the star rating on the label actually predict running cost?
3. How can they compare models when they buy?

**How the story is told:** The Televisions page moves from context to answer to action.
1. What sizes are on the market (histogram)
2. Energy use rises with size (scatter plot)
3. What that means in dollars per year for small, medium and large TVs (bar chart made in KNIME)
4. The star rating is a reliable guide to running cost (line chart made in KNIME)
5. Three takeaways, then the calculator so readers can try their own numbers, with a D3 chart comparing their cost with the average TVs

Each chart has a title that states the finding, a sentence or two of context, and a caption with the source.

**Storyboard:** see `docs/storyboard.png`, 7 frames following the reader through the Home page, the method, each finding and the calculator. Editable board: [FigJam](https://www.figma.com/board/v2rI7qZGKGD1WLEFM16USb).

## About the data

**Source:** Energy Rating registration data for televisions, published by the Australian Government ([energyrating.gov.au](https://www.energyrating.gov.au/)), extract `tv_2026_02_15.csv` (4,724 rows). Each row is one registered model. Column meanings come from the data dictionary provided on Canvas.

**Processing (KNIME):**
- CSV Reader (data stored in the workflow data area so the exported workflow includes it)
- Missing Value check, and String Manipulation to trim and standardise brand names (for example `SAMSUNG ELECTRONICS` to `SAMSUNG`)
- Row Filter to keep models that are Available and sold in Australia
- Column Filter
- GroupBy brand, then Sorter (brand counts)
- Expression nodes to convert screen size from cm to inches and create a size category (small ≤ 43", medium 44 to 65", large ≥ 66")
- Expression node for an example yearly cost (labelled kWh × $0.33)
- GroupBy to get averages by size category, and by star rating (`Star2`; the `Star` column is almost empty)
- CSV Writer (quote values: never) to export the tables in `assets/data/`

**Privacy:** The data describes products, not people. There is no personal information, only brand and model details submitted by registrants.

**Accuracy and limitations:**
- Labelled energy comes from a standard test assuming 10 hours of viewing a day; real use varies.
- Standby power is not included in running costs.
- Some screen sizes (around 150 and 175 cm) may be misclassified; see the KNIME annotations for how these were checked.
- The data counts models, not sales.
- The electricity price is an example; tariffs vary by state and retailer.

**Ethics:** No brand or model is recommended. Bar charts start at zero. Small groups (for example, 8 models at 8 stars) are flagged so averages are not over-read.

## AI Declaration

GenAI Declaration for Demonstration 1, COS30045 Data Visualisation, Chung Hien Thong (106212681), dated 9 October 2026. The same text is published on the site's [About Us page](about.html#ai-declaration). The full PDF submitted to Canvas is `GenAI_Declaration_COS30045_Demo1_ChungHienThong_106212681.pdf`.

### Introduction and tool

I used generative AI to speed up building the website, the D3 code, the GitHub setup, parts of the KNIME work and the submission packaging, so I could spend more time on the data and the story. I reviewed everything it produced and can explain it without reading comments.

**Tool:** Claude (Anthropic), through the Claude desktop app (Cowork) and Claude Code.

**Skills used inside Claude:** ui-ux-pro-max (design review), shadcn/ui (visual style), and FigJam through Claude (storyboard).

### How GenAI was used, per exercise

| Exercise | How GenAI was used |
| --- | --- |
| 0.1 GitHub | Claude created the public repo and pushed the first commits grouped by feature, at my request. |
| 0.2 Website | From the Exercise 0.2 brief, Claude generated the three HTML pages, `styles.css`, `main.js` (footer year, FAQ accordion) and the optional calculator (`calculator.js`). It later redesigned the look twice ("Test Report" style, then shadcn/ui style in plain CSS) and fixed issues found in reviews. Each code file starts with a comment saying it was generated with Claude. |
| 1 Data processing (KNIME) | Claude explained the steps and helped find a cleaning bug: the brand merge only had the Samsung rule, so Q.Bell and S Vision were counted twice. Two String Replacer rules were added to fix it. |
| 2 Exploration (KNIME) | Claude helped catch a cm-vs-inches mismatch in the histogram, and later split my exercise workflow into one workflow per website chart (KNIME_web_1 to _5). |
| 3 Communicating insights | Claude restructured the Televisions page into a four-finding data story, drafted the About the data text and README sections, and built the storyboard in FigJam from the site's story. |
| Independent analysis | Claude checked that the original Finding 4 (screen type) was just another cut of screen size, and suggested star rating instead (Star2, because Star is 96.7% empty). It built the first version of that KNIME workflow by copying my Ex 2 node settings. |
| 4.3-4.7 D3 | Claude wrote `barchart.js` and `calcchart.js` following the Week 4 exercise structure (`d3.csv`, `scaleLinear`, `scaleBand`, `g` groups, labels). |
| Submission | Claude merged the per-chart workflows into one annotated `.knwf` with the data included and drafted the first versions of this declaration and the cover sheet. I then rewrote the reflection and the acknowledgement in my own words. |

### Prompts used

The main prompts, copied as I typed them, in order.

1. "in this week 4 assignment, i have to build a website involved around exercised in previous weeks, there is already prototype of this website, can you review the canvas requirement again for this website and /architect the build-plan for this website to its fullest and match with all requirement, rubrics that are required in this assignment"
2. "please /review this and make a progress tracker file what have done, what still open, once all items in this progress checker is tick, the website is complete"
3. "have you push this website on its own repo ?"
4. "please make a new one: 1. demonstration-1-COS30045, 2. public, 3.few commits"
5. "for all the found issues above, fix all that you can fix right now, issues that need my action like KNIME or genAI declaration can left open for later"
6. "please pull this skill https://github.com/shadcn-ui/ui globally that apply for this project and every project in the future"
7. "alright, now please use this skill set and redesign the website for cleaner, modern"
8. "now that i have complete the demonstration, let wrap up and prepare everything for the submission"

### Outputs received

- **Code:** `index.html`, `televisions.html`, `about.html`, `styles.css`, `main.js`, `calculator.js`, `calcchart.js`, `barchart.js`, `report.js`.
- **Text:** build plan, data story and About the data wording, README sections, `PRODUCT.md`, `DESIGN.md`, `PROGRESS.md`, `DECISIONS.md`.
- **GitHub:** the public repo and the first commits, grouped by feature.
- **KNIME:** help finding the brand-merge bug and the cm-vs-inches mismatch, the first version of the star-rating workflow, the rebuilt Exercise 1 and 2 workflows, and the merged, annotated `.knwf`.
- **Storyboard:** `docs/storyboard.png` (7 frames, FigJam).
- **Submission drafts:** first versions of this declaration and the cover sheet (I rewrote the reflection and acknowledgement myself).

### Modifications and reflection

**What I changed or adapted after generation:** After generating the website, I ran all the KNIME workflows and exported the charts for the website. I changed star rating, shown as line plot and limited the brand chart to the top 10 brands to make the results easier to understand. I also checked the numbers shown on the website against my KNIME output to make sure they were consistent. During this process, I dealt with some issues involving duplicate brand names, CSV exports, and chart labels.

**What I learned:** I learned how to use KNIME to clean, filter, and group data before creating visualisations. I also learned that the way data is filtered and grouped can affect the results and the conclusions drawn from a chart. Another thing I learned was the importance of checking chart labels and exported data carefully because small mistakes can make the information misleading. Overall, this project helped me understand how data processing and visualisation work together to communicate findings clearly.

**What helped and what misled me:** KNIME helped me organise the television data and generate the results needed for the website. However, duplicate brand names made the brand analysis more difficult, and CSV export settings sometimes affected how the data was read. I also found that chart labels needed to be checked carefully to ensure that the titles and units matched the actual data being displayed. These issues taught me not to rely on generated outputs without checking them first.

**Limitations:** The electricity price of $0.33/kWh used in the calculator is only an example, so actual running costs may be different depending on the user's electricity tariff. The dataset contains registered television models rather than actual sales figures, so the number of models cannot be used to determine which brands are the most popular. Actual electricity costs also depend on viewing habits, including how many hours the television is used each day. Therefore, the results should be treated as estimates for comparison rather than exact predictions of household electricity bills.

### Acknowledgement

I used Claude to help generate and improve parts of the code, written content, and KNIME workflows for this project. I reviewed the generated work, made changes where needed, and checked the results against my own KNIME output. Although AI assisted me during development, I took responsibility for reviewing the final submission and understanding how its main components work.
