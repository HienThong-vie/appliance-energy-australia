---
name: Appliance Energy Australia
description: An independent test report on what household appliances cost to run, built on Australian Energy Rating data.
colors:
  butter: "#f8e8a5"
  butter-deep: "#f3cd6a"
  butter-soft: "#fcf4d2"
  bark: "#7d6744"
  bark-dark: "#4f3f28"
  bolt: "#c47a1e"
  bolt-ink: "#8a5210"
  ink: "#221a12"
  ink-soft: "#4d4034"
  muted: "#6b5e4e"
  paper: "#ffffff"
  line: "#e6d9bd"
  error: "#a3331a"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 6.5vw, 5rem)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 72"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 72"
  headline-panel:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.1rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 72"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 72"
  figure:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 900
    lineHeight: 0.8
    fontVariation: "\"wdth\" 72"
  figure-total:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.8rem, 5vw, 3.75rem)"
    fontWeight: 900
    lineHeight: 1
    fontVariation: "\"wdth\" 72"
  standfirst:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 1.8vw, 1.35rem)"
    fontWeight: 400
    lineHeight: 1.5
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "\"tnum\""
  table:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 700
    lineHeight: 1.6
  micro:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    lineHeight: 1.6
rounded:
  none: "0"
spacing:
  xs: "0.75rem"
  sm: "1.25rem"
  md: "1.75rem"
  lg: "2.25rem"
  xl: "3.5rem"
  section: "4.5rem"
components:
  button-primary:
    backgroundColor: "{colors.bark}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.4rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.bark-dark}"
    textColor: "{colors.paper}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.bark-dark}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.4rem"
    height: "48px"
  button-quiet-hover:
    backgroundColor: "{colors.butter-soft}"
    textColor: "{colors.ink}"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.65rem 0.75rem"
    height: "48px"
  site-header:
    backgroundColor: "{colors.butter}"
    textColor: "{colors.bark-dark}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.bark-dark}"
    rounded: "{rounded.none}"
    padding: "1.35rem 1.1rem"
  nav-link-hover:
    backgroundColor: "{colors.butter-deep}"
    textColor: "{colors.ink}"
  nav-link-current:
    backgroundColor: "{colors.bark-dark}"
    textColor: "{colors.butter}"
  report-cover:
    backgroundColor: "{colors.butter}"
    textColor: "{colors.ink}"
    padding: "4.5rem 0 5rem"
  verdict-box:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.75rem"
  method-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.75rem"
  imperative:
    backgroundColor: "{colors.butter}"
    textColor: "{colors.ink}"
    typography: "{typography.lead}"
    padding: "1rem 1.25rem"
  table-head:
    backgroundColor: "{colors.butter}"
    textColor: "{colors.ink}"
    typography: "{typography.table}"
    padding: "0.55rem 0.75rem"
  chart-bar:
    backgroundColor: "{colors.bark}"
  chart-bar-focus:
    backgroundColor: "{colors.bolt}"
  site-footer:
    backgroundColor: "{colors.bark-dark}"
    textColor: "{colors.butter-soft}"
    typography: "{typography.small}"
    padding: "2.25rem 0"
---

# Design System: Appliance Energy Australia

## Overview

**Creative North Star: "The Test Report"**

Every page reads as an independent consumer test report: the verdict first, the evidence second, the method and fine print last. The world is built from three materials: a white reading ground, whole bands of butter yellow that carry the warmth, and heavy bark-brown rules that divide the report the way a printed test sheet is ruled. Orange appears only where the reader should look. The palette is sampled from the course-provided power logo (`assets/img/PowerIcon.png`: a butter disc, an orange bolt and a brown outline), so the whole site is visibly the logo's world.

Density is that of a well-set report: generous section spacing (4.5rem), reading columns held to 68ch, and evidence set in ruled tables with tabular figures. One type family, Archivo, does all the work; its width axis sets rank, with condensed heavy for headlines and big figures and normal width for reading. Nothing is raised, rounded or glossy. Depth comes from rules and bands, never from shadows.

The system rejects the energy-site default of green gradients, leaf icons and grids of KPI cards. It also rejects a cream or warm-paper reading ground: the ground is white, and butter carries the warmth in bounded bands.

**Key Characteristics:**
- White reading ground; butter owns whole bands (masthead, report cover, table heads, imperatives, info panels).
- Heavy 3px bark rules divide the report; 1px warm hairlines divide rows.
- Bolt orange marks the one data point under discussion; nothing else is orange at rest.
- Deep bark is the voice of state: the current-page tab, focus outlines, small text on butter.
- One family, Archivo; condensed width (72) for rank, normal width for reading.
- Square corners everywhere; no shadows.
- Every chart ships a data-table alternative; small samples are dashed and labelled.

## Colors

A three-hue palette sampled from the power logo, butter, bark and bolt, set on white with warm brown-black text. Butter and bark are the logo's disc and outline exactly; bolt is the logo bolt's hue deepened for use on white.

### Primary
- **Bark Brown** (#7d6744): the logo's outline, sampled exactly. Carries structure: the heavy 3px rules, primary buttons, input and panel borders, links on white, default chart bars, score bars, finding numerals, rail counters and method-panel labels. It reaches 5.4:1 on white but only 4.4:1 on butter, so it is not used for small text on butter.
- **Deep Bark** (#4f3f28): the voice of state and of small text on butter. Fills the current-page nav tab, draws every focus outline, and colours nav links, the wordmark subtitle, info-panel labels and links, button hover fills and the footer ground. 8.2:1 against butter.

### Secondary
- **Butter Yellow** (#f8e8a5): the logo's disc, sampled exactly. Owns whole bands: the masthead, the Home report cover, inner-page report headers, table heads, imperative lines, the About info panel and the current item in the findings rail. It is also the text colour of the current nav tab and the focus outline inside the footer.
- **Deep Butter** (#f3cd6a): nav link hover fill, text selection and the divider rules inside butter panels.
- **Soft Butter** (#fcf4d2): the calculator band, quiet-button hover, footer text and the scrollbar track.

### Tertiary
- **Bolt Orange** (#c47a1e): the logo bolt (#eba746) deepened to about 3.4:1 on white so a bar stays visible; the logo colour itself is about 2:1. Fills the single data mark the prose is about (the "Large" score bar, the tallest D3 bar) and colours the text caret. Nothing else.
- **Bolt Ink** (#8a5210): the text-safe darkening of bolt, used when orange must be read as text: link and summary hover, FAQ question hover, the calculator's headline total and small-sample notes.

### Neutral
- **Report Ink** (#221a12): headings, body text, chart labels, nav hover text and the 2px chart baseline and figure rule.
- **Soft Ink** (#4d4034): standfirsts, section leads, prose paragraphs and FAQ answers.
- **Muted Bark-Grey** (#6b5e4e): captions, fine print, field hints and input units.
- **Paper White** (#ffffff): the reading ground and the inside of every boxed panel and input.
- **Warm Hairline** (#e6d9bd): 1px row dividers in tables, score lists, the label guide, the FAQ and the rail.
- **Error Rust** (#a3331a): field error text and the error border on invalid inputs.

### Named Rules
**The Logo Palette Rule.** Every colour is the logo's butter, bark or bolt, or a warm neutral derived from them. New charts and pages add no new hues without a documented reason.

**The White Ground Rule.** The reading ground is pure white. Warmth comes from bounded butter bands, never from tinting the page. No cream, ivory or warm-paper ground.

**The Bolt Means Look Here Rule.** Bolt orange fills at most one mark or group per chart: the one the adjacent sentence names. Its only other use is the text caret. It is never a focus colour, a hover underline, a resting fill for a button, panel or band, or body text (use bolt ink).

**The Dark on Butter Rule.** Small text and links on a butter band use deep bark or ink, never bark. Bark on butter is 4.4:1; deep bark is 8.2:1.

## Typography

**Display Font:** Archivo (with Helvetica Neue, Arial, sans-serif), loaded from Google Fonts as a variable font (width 62–125, weight 400–900)
**Body Font:** Archivo, same file
**Label/Mono Font:** none distinct; labels are Archivo at 700

**Character:** one family doing two jobs. Condensed and heavy it reads as a report's headline and scoreboard; at normal width it reads plainly, like the body of a consumer guide. All figures are tabular (`font-variant-numeric: tabular-nums` on the body), so numbers align in tables, scores and results.

### Hierarchy
- **Display** (900, clamp(2.6rem, 6.5vw, 5rem), 1.05, width 72): the page h1 on the cover and report headers. Balanced wrapping.
- **Headline** (800, clamp(1.8rem, 3.6vw, 2.6rem), 1.05, width 72): section and finding h2s.
- **Headline, panel** (800, clamp(1.6rem, 2.6vw, 2.1rem), 1.05, width 72): the verdict box h2; About prose h2s use the same endpoints on a 3vw slope. Method and calculator-results headings hold at the lower endpoint, 1.6rem.
- **Title** (800, 1.35rem, 1.15, width 72): h3s, label-guide terms and the info-panel heading.
- **Figure** (900, 4.5rem, 0.8, width 72): finding numerals; 3rem under 600px.
- **Figure, total** (900, clamp(2.8rem, 5vw, 3.75rem), 1, width 72): the calculator's yearly cost.
- **Standfirst** (400, clamp(1.15rem, 1.8vw, 1.35rem), 1.5): the lead paragraph under a page h1, max 56ch, soft ink.
- **Lead** (700, 1.15rem, 1.3): FAQ questions (normal width) and imperative lines.
- **Body** (400, 1.0625rem, 1.6; 1rem under 600px): reading text, max 68ch.
- **Table** (400, 0.95rem): data tables and findings-rail links.
- **Small** (400–600, 0.9rem): byline, footer, input units and field errors.
- **Label** (700, 0.85rem): definition-list terms in method and info panels. The same size at 400 carries captions, table captions, fine print and field hints. Sentence case, no letter-spacing.
- **Micro** (600–700, 0.8rem): the wordmark subtitle (uppercase, 0.08em tracking, part of the logo lockup) and small-sample notes.

### Component-specific sizes
These sizes are tied to one component each and are not ramp steps for new text:
- **1.2rem:** the wordmark "Appliance Energy" (800 condensed, uppercase) and calculator figure values (800).
- **1.1rem:** score-bar labels and findings-rail counters (700–800 condensed).
- **1.35rem, 800 condensed:** score values in the verdict box.
- **1rem, 800 normal width:** the findings-rail title.
- **0.7em, 700:** footnote superscripts.
- **22px in a 640-unit SVG viewBox:** D3 bar labels (700) and values (800), condensed. This scales with the chart.

### Named Rules
**The Width Sets Rank Rule.** Rank is expressed by width and weight, not by a second family. Condensed (width 72) at 800–900 for headlines, numerals and figures; normal width (100) for reading, questions and navigation. Do not add a display or mono face.

**The Tabular Figures Rule.** Every number on the site uses tabular figures and right-aligns in table columns.

## Layout

A single centred container (max 1120px, 1.25rem side gutters) holds every page. Sections are separated by 4.5rem of padding and a 1px warm hairline between adjacent sections (3rem padding under 600px). Reading columns are held to 68ch; standfirsts to 56ch.

Grids are asymmetric two-column splits that collapse to one column:
- Home cover: 7fr text, 5fr verdict box, 3.5rem gap.
- Section head beside content: 1fr to 2fr, 3rem gap.
- Televisions report: a 15rem sticky findings rail beside the article, 3.5rem gap; collapses at 960px and the rail becomes static.
- Findings: a 4.5rem numeral column beside the finding body; stacks under 600px.
- Calculator: 1.2fr form beside 1fr results. About: 2fr prose beside a 1fr sticky info panel.

Breakpoints are 960px (report rail), 860px (all two-column splits) and 600px (masthead stacks, nav tabs tighten, panel padding tightens to 1.25rem, field rows stack). Spacing steps in use are 0.75rem, 1.25rem, 1.75rem, 2.25rem, 3.5rem and 4.5rem.

### Named Rules
**The Report Order Rule.** Pages run verdict, evidence, method: the claim and its figures come first, the charts and tables second, the method and limitations in plain view after (or beside) them.

## Elevation & Depth

The system is flat. There are no box shadows anywhere. Depth and grouping come from three devices only: bark rules of graded weight, butter bands behind whole regions, and bordered white panels sitting on butter or white.

The rule ladder, from heaviest to lightest:
- **Verdict frame** (4px solid bark): the verdict box and calculator results only.
- **Report rule** (3px solid bark): under the masthead, cover and report header; over the footer, FAQ, label guide, findings rail, prose h2s, info panel and imperative lines.
- **Panel border** (2px solid bark): method panel, calculator form, inputs, buttons, table-head underline, the divider before the rail's extra links; 2px solid ink over chart figures.
- **Byline rule** (1px solid bark): under the cover's call to action.
- **Hairline** (1px solid warm hairline): row dividers.

### Named Rules
**The Ruled, Not Raised Rule.** Separate regions with a rule or a band, never a shadow. If something needs more emphasis, give it a heavier rule or a butter band.

**The Horizontal Rule Rule.** Coloured rules run full width along the top or bottom edge of a region. Never a coloured stripe down the left or right edge of a card, callout or list item.

## Shapes

Square corners throughout (radius 0), including inputs, where the browser default radius is explicitly removed. Boxes are full rectangles with a single border weight; rules are straight and full width. The current nav item is a solid square tab. The only drawn glyph is the FAQ toggle, a plus built from two 2.5px bars that rotates into a minus.

## Components

### Buttons
Solid, square and plain, like a form on a printed report.
- **Shape:** square corners (0), 2px bark border, minimum height 48px.
- **Primary:** bark fill, white text, weight 700, padding 0.75rem 1.4rem.
- **Hover / Focus:** fill and border deepen to deep bark over 0.2s; focus is the global 3px deep-bark outline at 3px offset.
- **Quiet:** transparent with a bark border and deep-bark text; soft-butter fill on hover. Used as the second action beside a primary.

### Inputs / Fields
- **Style:** white field, 2px bark border, square, 48px minimum height, label above in 700. Units (W, hrs, $/kWh) sit inside the right edge in muted 600; native number spinners are removed.
- **Focus:** 3px deep-bark outline at 1px offset.
- **Error:** border turns error rust and a 0.9rem 600 message in error rust appears below; empty error slots take no space.

### Focus
Every focusable element gets a 3px solid deep-bark outline at 3px offset (inputs and selects: 1px offset). Inside the deep-bark footer the outline turns butter. Focus is never bolt.

### Navigation
- **Style:** a butter masthead with a 3px bark rule beneath. The logo and the two-line wordmark ("Appliance Energy" in condensed 800 uppercase, "Australia" below in deep bark 600) sit left; links sit right as square tabs in deep bark 650, padding 1.35rem 1.1rem.
- **Hover:** the tab fills deep butter and the text turns ink, over 0.2s. No underline.
- **Current page:** a solid deep-bark tab with butter text at 800 (8.2:1). This is a confirmed user decision and binding: the current page is shown by a filled tab, not an underline.
- **Mobile:** under 600px the masthead stacks, brand above links, and tab padding tightens to 0.75rem 0.8rem.
- **Findings rail:** a sticky numbered contents list under a 3px rule. Numbers are bark condensed 800 counters; a 2px bark rule separates the numbered findings from the extra links. On wide screens the section in view gets a butter fill and bold ink text.

### Verdict Box (signature)
The report's scored summary. A white panel with a 4px bark frame and 1.75rem padding, set on the butter cover. Inside: a condensed headline verdict, a one-line lead, then score rows (label, bar, value) divided by hairlines. Bars are bark; the one being discussed is bolt. The calculator results reuse the same frame.

### Method Panel
A boxed "How we tested" panel: white, 2px bark border, 1.75rem padding, with a two-column definition list (bark labels) over hairlines and a fine-print link to the full method.

### Findings and Imperatives
Each finding is a numbered section: a condensed 900 bark numeral in its own column, then the headline, a 68ch lead, the chart, the data table and a closing imperative. The imperative is one plain instruction on a butter band with a 3px bark top rule, in the lead style (1.15rem 700 ink). Footnote numerals are small bold superscripts linking to the method panel's notes.

### Charts
- **Figure:** a 2px ink rule over the figure, the chart, then a 0.85rem muted caption naming the measure, the unit and the source.
- **Marks:** bark fill by default; the focus mark is bolt (in the built bar chart, the largest value). Value axes start at zero. A 2px ink baseline anchors bars. Labels are Archivo condensed 700 in ink; values are condensed 800 in ink, placed at the end of each bar.
- **SVG:** drawn with D3 into a responsive container (max 900px) using a viewBox, `role="img"` and a `<title>` that states every value. The KNIME PNG stays in place until D3 draws, and remains if the data fails to load.
- **Motion:** bars and score fills grow from zero once, via `transform: scaleX`, when 40% of the chart enters view, over 1.1s on the ease-out curve, staggered 0.12s. With reduced motion they appear at their final length.
- **Future charts (provisional; not yet built):** scatter, donut and histogram marks follow the same encoding: bark for the population, bolt for the one group the text names, and the focus mark also named in text or by a direct label. Distinguish additional series by direct labels and position before adding fills; if a second fill is unavoidable, draw it from the logo palette (for example deep butter with a bark stroke). Tooltips, when added, should use the panel language: white, a 2px bark border, square corners, ink text, no shadow.

### Data Tables
- **Disclosure:** every chart is followed by a "Show the data table" disclosure (bark 700 summary, 44px minimum target, bolt-ink on hover). A table that carries the finding's key figures may open by default.
- **Table:** full width, 0.95rem, a left-aligned muted caption, butter head row with a 2px bark underline, hairline rows, numbers right-aligned. Wraps in a horizontal scroller on narrow screens.
- **Small sample:** a group too small to rely on gets a 2px dashed bark rule and a bold bolt-ink label naming it (for example "(OLED: small sample)"); the caption explains the dash.

### FAQ Accordion
Questions are full-width buttons (1.15rem 700, normal width, 48px minimum) between hairlines under a 3px rule, with a plus that rotates to a minus over 0.25s. Answers are soft ink, held to 68ch.

### Footer
Deep bark ground with a 3px bark rule above, soft-butter text at 0.9rem, butter links that turn white on hover, and a butter focus outline.

### Named Rules
**The Twin Table Rule.** No chart ships without a data table carrying the same numbers. The chart is the headline; the table is the evidence.

**The Dashed Sample Rule.** Small or unreliable groups are marked by a dashed bark line and a text label together, never by colour alone.

**The Grow Once Rule.** The only authored motion is data growing from zero, once, on first view. Nothing loops, bounces or animates on load.

## Do's and Don'ts

### Do:
- **Do** keep the page ground white and put warmth in whole butter bands: masthead, cover, table heads, imperatives.
- **Do** divide the report with 3px bark rules and rows with 1px warm hairlines.
- **Do** fill the single data mark the prose is discussing with bolt orange, and every other mark with bark.
- **Do** mark the current page with a solid deep-bark tab and butter text, and nav hover with a deep-butter fill.
- **Do** use deep bark or ink for small text and links on butter.
- **Do** set headlines and big figures in Archivo condensed (width 72) at 800–900, and reading text at normal width.
- **Do** ship a data table with every chart, start value axes at zero, and name the source in the caption.
- **Do** mark small samples with a dashed bark line plus a text label.
- **Do** keep every control at least 44px tall (48px for buttons and inputs) with the 3px deep-bark focus outline (butter inside the footer).
- **Do** honour reduced motion: bars appear at full length with no transition.

### Don't:
- **Don't** use a cream, ivory or warm-paper page ground.
- **Don't** use green gradients, leaf icons or a grid of KPI cards.
- **Don't** add box shadows or rounded corners.
- **Don't** add a coloured stripe down the left or right edge of a card, callout or list item; rules run full width across the top or bottom.
- **Don't** put a small uppercase kicker or eyebrow label above headings.
- **Don't** use bolt orange for focus, hover, a resting button, panel or band fill, or body text.
- **Don't** use bark for small text on butter.
- **Don't** add a second typeface or a monospace for figures.
- **Don't** encode meaning by colour alone.
