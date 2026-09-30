# Appliance Energy Australia

A three-page website about household appliance energy use in Australia, built for COS30045 Data Visualisation. It started as Exercise 0.2, was extended into the Exercise 3 data story about television running costs, and includes the Week 4 D3 bar chart (Exercises 4.3 to 4.7).

Author: Chung Hien Thong

## Pages

| Page | File | What it contains |
| --- | --- | --- |
| Home | `index.html` | Introduction, a running-cost example from the data, how to read the Energy Rating Label, FAQ accordion |
| Televisions | `televisions.html` | Data story in four steps (size distribution, size vs energy, D3 cost chart, screen type), takeaways, brand context, Appliance Energy Calculator |
| About Us | `about.html` | Audience, data source, processing, privacy, accuracy and limitations, ethics |

## Folder structure

```
/
  index.html
  televisions.html
  about.html
  assets/
    css/styles.css       all styling (one external stylesheet)
    js/main.js           footer year + FAQ accordion (all pages)
    js/barchart.js       D3 bar chart of yearly cost by screen size (Televisions page)
    js/report.js         bars grow in when scrolled into view; findings rail marks the current finding
    js/calculator.js     Appliance Energy Calculator (Televisions page)
    data/                CSV files exported from KNIME for the D3 chart
    img/PowerIcon.png    power logo provided on Canvas
    img/charts/          chart images exported from KNIME
  docs/storyboard.png    Exercise 3 storyboard
  README.md
```

## Requirements checklist

Exercise 0.2
- Three pages with a top navigation bar on every page
- Power logo top-left, links back to Home
- Hover effect on navigation links; current page marked with `aria-current="page"` and an underline
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

The D3 chart loads a CSV file, so the pages need to be served over HTTP. Use the Live Server extension in VS Code (or `python -m http.server` in this folder) and open `index.html`. All paths are relative, so the same files work when uploaded to Mercury (see Exercise 0.3).

## Data Story

**Audience:** Australian households choosing a new television. They are not energy experts. They compare models in a shop or online, and care about the purchase price and the power bill.

**What they want to know:**
1. Does a bigger screen cost noticeably more to run?
2. Are premium OLED screens more power hungry than LED screens?
3. How can they compare models when they buy?

**How the story is told:** The Televisions page moves from context to answer to action.
1. What sizes are on the market (histogram)
2. Energy use rises with size (scatter plot)
3. What that means in dollars per year for small, medium and large TVs (D3 bar chart)
4. Screen type matters much less than size (grouped bar chart)
5. Three takeaways, then the calculator so readers can try their own numbers

Each chart has a title that states the finding, a sentence or two of context, and a caption with the source.

**Storyboard:** see `docs/storyboard.png`.

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
- GroupBy and Pivot to get averages by size category and screen technology
- CSV Writer (quote values: never) to export the tables in `assets/data/`

**Privacy:** The data describes products, not people. There is no personal information, only brand and model details submitted by registrants.

**Accuracy and limitations:**
- Labelled energy comes from a standard test assuming 10 hours of viewing a day; real use varies.
- Standby power is not included in running costs.
- Some screen sizes (around 150 and 175 cm) may be misclassified; see the KNIME annotations for how these were checked.
- The data counts models, not sales.
- The electricity price is an example; tariffs vary by state and retailer.

**Ethics:** No brand or model is recommended. Bar charts start at zero. Small groups (for example, 17 small OLED models) are flagged so averages are not over-read.

## Generative AI Reflection

This section is also the AI Declaration for Exercise 3.

**Introduction:** I used GenAI to speed up building the website so I could spend more time on the data processing and the story.

**Tool used:** Claude (Anthropic), through the Claude desktop app and Claude Code.

**What I used it for:**
- **Exercise 0.2:** I gave Claude the Exercise 0.2 requirements and asked it to build the whole site, including the optional calculator, with a professional look. It produced the HTML pages, the stylesheet and both JavaScript files. It also tested the pages in a headless browser and fixed a grammar error in a validation message and a layout issue with the number input spinners.
- **Exercise 3 and Week 4:**
  - I asked Claude Code to review the Canvas requirements and rubric and plan the build.
  - It restructured the Televisions page into a data story and wrote `barchart.js` following the structure of Exercises 4.3 to 4.7.
  - It updated the About page and this README.
- Each code file starts with a comment saying it was generated with Claude.

**Prompts:**
- "in this week 4 assignment, i have to build a website involved around exercised in previous weeks, there is already prototype of this website, can you review the canvas requirement again for this website and /architect the build-plan for this website to its fullest and match with all requirement, rubrics that are required in this assignment"
- _Add the Exercise 0.2 prompts here (copy them from the chat)._

**Outputs received:** the HTML, CSS and JavaScript files listed above, a build plan, and draft wording for the data story and data sections.

**What I changed or adapted after generation:** _Write what you changed yourself, e.g. checked the story numbers against my KNIME output, chart colours, wording, presets._

**What I learned:** _In your own words: e.g. how `aria-expanded` and `hidden` drive the accordion, how the calculator reads and validates DOM values, how `scaleBand` and `scaleLinear` position the D3 bars._

**Limitations or issues:** _e.g. the electricity price is an example, standby power is not included, anything that did not work first time._

**Acknowledgement:** Parts of the code and text in this repository were generated with Claude and are not entirely my original work. I have reviewed and can explain all of it.
