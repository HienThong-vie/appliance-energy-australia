---
version: 1
slug: "televisions-html"
primary_target: "televisions.html"
related_targets: ["index.html","about.html"]
---

## Scope and mode

All three pages (Home `index.html`, Televisions `televisions.html`, About `about.html`) share one visual world. Mode: **Read**. The visitor understands something: whether screen size or screen type drives a TV's running cost.

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

**OWN-WORLD:**
- **Palette:** taken from the power logo. Butter yellow owns whole bands: the report cover, verdict panels and table heads. Bark brown carries rules, headings and links. Bolt orange appears only on the data mark under discussion. The reading ground is white and butter owns the warmth. This changed from warm paper because the detector flagged the cream ground and the craft floor warns against cream drift.
- **Components:**
  - heavy 3px bark rules;
  - ruled evidence tables with tabular figures;
  - boxed "How we tested" method panels;
  - a thick-bordered verdict box;
  - numbered findings;
  - footnote numerals;
  - score bars.
- **Type:** one family (Archivo). The width axis sets rank: condensed heavy for headlines and big figures, normal width for reading.

**STORY:**
1. The buyer learns that a large TV costs about five times as much to run as a small one.
2. They learn that screen type barely changes that, and trust it because the method and limitations sit in plain view.
3. They then enter their own numbers in the calculator.

**FIRST VIEWPORT:**
- **Home:** the masthead sits on a full-bleed butter cover band. The left column holds a report kicker, a condensed headline ("What 4,508 TVs cost to run"), the standfirst and the primary action "Read the full test". The right column holds the verdict box: three score bars (small $52, medium $134, large $247) and a one-line verdict.
- **Televisions:** opens on a report header with a numbered findings rail (01–04).

**FORM:** consumer test report, position 4 of the ordered list, seed key 575543ff.
- **Raises:**
  - *Studio Dumbar:* butter yellow owns whole bands.
  - *WPA poster:* each finding ends on one plain imperative.
  - *Emission-line rail:* meaning never depends on colour alone; small groups get a dashed outline and a label.
  - *Cutting bench:* the findings rail marks where the reader is.
  - *Miura fold:* every chart ships a data-table alternative.
- **Signature interaction:** the score bars grow from zero once, when they scroll into view, using CSS transform. Reduced motion shows the final state immediately.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
