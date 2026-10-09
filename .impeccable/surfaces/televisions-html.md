---
version: 1
slug: "televisions-html"
primary_target: "televisions.html"
related_targets: ["index.html","about.html"]
---

## Scope and mode

All three pages (Home `index.html`, Televisions `televisions.html`, About `about.html`) share one visual world. Mode: **Read**. The visitor understands something: whether screen size or a low star rating drives a TV's running cost.

## Audience, job, constraints

- **Reader:** an Australian household choosing a TV, reading at home or on a phone in store, in daylight.
- **Job:** understand the finding, then check their own TV in the calculator.
- **Constraints** (see PRODUCT.md):
  - the Ex 0.2 requirements;
  - colours consistent with the power logo;
  - vanilla HTML, CSS and JS plus D3 from a CDN, explainable in a tutor interview;
  - minimal comments;
  - no brand recommendations.
- **User's stated failure mode:** a generic template look.

## Direction contract

**THESIS:** The site is an independent test report on what televisions cost to run: the verdict first, the evidence second, the method and fine print last. It refuses the energy-site default of green gradients, leaf icons and a grid of KPI cards.

**OWN-WORLD** (redesigned 8 Oct 2026 in the shadcn/ui style; see DESIGN.md):
- **Palette:** shadcn token names on a white ground with warm stone neutrals. From the power logo: deep bark is the primary (buttons, current nav tab, focus), butter is the accent (hero gradient, badges, hover, takeaway alerts), bark is the chart colour, and bolt orange appears only on the data mark under discussion.
- **Components** (shadcn equivalents recreated in CSS):
  - cards with a 1px border, 14px radius and soft shadow (verdict, rail, method, calculator, results, info panel);
  - Tabs-style navigation with a filled deep-bark current tab;
  - Accordion FAQ, Collapsible data tables, bordered Tables with tabular figures;
  - Badge finding numbers and eyebrow pills; Alert-style takeaways;
  - Progress-style score bars;
  - footnote numerals.
- **Type:** one family (Geist), weight 600 with tight negative tracking for headings, 400 for reading.

**STORY:**
1. The buyer learns that a large TV costs about five times as much to run as a small one.
2. They learn that the star rating on the label also predicts running cost, and trust it because the method and limitations sit in plain view.
3. They then enter their own numbers in the calculator.

**FIRST VIEWPORT:**
- **Home:** a sticky white header above a hero with a soft butter gradient. The left column holds an eyebrow badge, the headline ("What 4,508 TVs cost to run"), the standfirst, the primary action "Read the full test" and an outline "Check your own TV". The right column holds the verdict card: three score bars (small $52, medium $134, large $247) and a one-line verdict.
- **Televisions:** opens on a page header with the headline beside an "In this report" card listing findings 1 to 4.

**FORM:** consumer test report, position 4 of the ordered list, seed key 575543ff.
- **Raises:**
  - *Studio Dumbar:* butter carries the warmth (now as hero gradient and accents rather than whole bands).
  - *WPA poster:* each finding ends on one plain imperative.
  - *Emission-line rail:* meaning never depends on colour alone; small groups get a dashed outline and a label.
  - *Cutting bench:* the findings rail marks where the reader is.
  - *Miura fold:* every chart ships a data-table alternative.
- **Signature interaction:** the score bars grow from zero once, when they scroll into view, using CSS transform. Reduced motion shows the final state immediately.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
