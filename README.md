# Appliance Energy Australia

A three-page website about household appliance energy use in Australia, built for COS30045 Data Visualisation. It started as Exercise 0.2, was extended into the Exercise 3 data story about television running costs, and includes D3 bar charts built with the Week 4 pattern (Exercises 4.3 to 4.7).

Author: Chung Hien Thong

Built with: HTML, CSS, vanilla JavaScript, D3.js, KNIME (data cleaning and analysis)

Repository: https://github.com/HienThong-vie/applianceenergyaustralia

Live site (Mercury): https://mercury.swin.edu.au/cos30045/s106212681/appliance-energy-website/about.html

## Pages

| Page | File | What it contains |
| --- | --- | --- |
| Home | `index.html` | Introduction, a running-cost example from the data, how to read the Energy Rating Label, FAQ accordion |
| Televisions | `televisions.html` | Data story in four steps (size distribution, size vs energy, cost by size group, star rating), takeaways, brand context, Appliance Energy Calculator |
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
- Footer on every page with the current year (set by JavaScript), and author name
- Optional extension: Appliance Energy Calculator in vanilla JavaScript
  - Inputs: appliance (TV presets use the average power of each size group), power rating (W), hours per day, electricity price ($/kWh)
  - Outputs: daily, monthly and yearly energy (kWh), monthly and yearly cost
  - Results shown in a panel on the page and replaced on each update, not duplicated
  - Validation messages next to each input; results hidden until inputs are valid
  - After the first Calculate, results update as inputs change

Exercise 3
- Audience and data story described below
- Televisions page tells the story with text that puts each chart in context
- README sections: Data Story, About the data

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
