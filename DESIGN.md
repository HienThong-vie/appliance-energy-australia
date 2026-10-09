---
name: Appliance Energy Australia
description: An independent test report on what household appliances cost to run, built on Australian Energy Rating data.
colors:
  background: "#ffffff"
  foreground: "#1c1917"
  card: "#ffffff"
  muted: "#f5f5f4"
  muted-foreground: "#6b645d"
  primary: "#4f3f28"
  primary-hover: "#3d311f"
  primary-foreground: "#ffffff"
  accent: "#fcf4d2"
  accent-strong: "#f8e8a5"
  accent-border: "#f3cd6a"
  accent-foreground: "#4f3f28"
  chart: "#7d6744"
  chart-focus: "#c47a1e"
  brand-ink: "#8a5210"
  border: "#e7e5e4"
  input: "#948d86"
  ring: "#4f3f28"
  surface: "#fafaf9"
  header-background: "rgba(255, 255, 255, 0.85)"
  destructive: "#b42318"
typography:
  family: "Geist, ui-sans-serif, system-ui, sans-serif"
  display:
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline:
    fontSize: "clamp(1.6rem, 3vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontSize: "1.125rem"
    fontWeight: 600
  body:
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "\"tnum\""
  small:
    fontSize: "0.875rem"
    fontWeight: 500
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
  full: "999px"
spacing:
  section: "5rem"
  section-mobile: "3rem"
---

# Design System: Appliance Energy Australia

## Overview

**Direction: shadcn/ui, in the logo's colours.**

The site uses the visual language of [shadcn/ui](https://ui.shadcn.com): a white page, a warm stone-grey neutral scale, rounded cards with a 1px border and a soft shadow, small medium-weight labels, and one sans-serif family (Geist). shadcn/ui itself is a React + Tailwind component library; this site stays plain HTML, one CSS file and vanilla JavaScript (a hard requirement of the unit), so the shadcn components are recreated in CSS under the same token names. A reader of `styles.css` can map each class to its shadcn counterpart (see Components).

The warmth and the brand come from the power logo (`assets/img/PowerIcon.png`): butter (the disc) is the accent, bark (the outline) is the primary colour and the chart colour, and bolt orange marks the one data point under discussion.

**Key characteristics:**
- White ground, warm stone neutrals, butter accent bands only in the hero and page header gradients.
- Cards: 1px border, 14px radius, soft shadow.
- Primary actions and the current nav tab are filled deep bark; hover states use the butter accent.
- One family, Geist, with tight negative tracking on headings and tabular figures everywhere.
- Every chart ships a data-table alternative; small samples are dashed and labelled.

## Colors

Token names follow shadcn/ui so they read the same as a shadcn theme.

- **background / card** (#ffffff): the page and every card.
- **foreground** (#1c1917): headings, body text, chart values.
- **muted** (#f5f5f4): the nav track, method tiles, score-bar tracks, rail counters. **surface** (#fafaf9) is the lighter grey for the calculator band, table heads, row hover and the footer. **header-background** is white at 85% under the sticky header's blur.
- **muted-foreground** (#6b645d): standfirsts, captions, fine print, labels. 5.8:1 on white, 5.3:1 on muted.
- **primary** (#4f3f28, the logo's deep bark): primary buttons and the current nav tab, with white text (10:1). Hover deepens to #3d311f.
- **accent** (#fcf4d2, soft butter) with **accent-border** (#f3cd6a) and **accent-foreground** (#4f3f28): hover fills, finding number badges, the takeaway alert, the eyebrow badge border, the current rail item.
- **accent-strong** (#f8e8a5, the logo's disc): the hero gradient and text selection.
- **chart** (#7d6744, the logo's outline): default bars in D3 charts and the verdict scores.
- **chart-focus** (#c47a1e, the logo bolt deepened for white): the one bar the text is about, the eyebrow dot and the dashed small-sample rule. Never used for focus.
- **ring** (#4f3f28, deep bark): the focus outline on every control. 10:1 on white, 8.2:1 on butter, 9.3:1 on the nav track.
- **brand-ink** (#8a5210): orange read as text, such as the calculator total and link hover.
- **border** (#e7e5e4): card borders and row dividers. **input** (#948d86): input borders, 3.3:1 on white so fields meet the WCAG 3:1 outline contrast.
- **destructive** (#b42318): validation errors.

**Logo Palette Rule.** Every hue is the logo's butter, bark or bolt, or a warm neutral. New charts add no new hues without a documented reason.

## Typography

**Font:** Geist (Google Fonts, variable weight 400 to 700), falling back to the system UI font.

- **Display** (600, clamp(2.25rem, 5vw, 3.5rem), tracking -0.035em): page h1.
- **Headline** (600, clamp(1.6rem, 3vw, 2rem), tracking -0.025em): section and finding h2s (findings use up to 1.875rem).
- **Card title** (600, 1.125 to 1.3rem): verdict, method, results, info panel.
- **Body** (400, 1rem, line height 1.65), reading columns max 68ch.
- **Small / label** (500, 0.8 to 0.9rem): nav, buttons, field labels, table heads, captions.
- All numbers use tabular figures and right-align in table columns.

## Layout

A centred 1120px container with 1.25rem gutters. Sections have 5rem vertical padding (3rem under 600px) and a 1px border between them. Grids:
- Home hero: 7fr text beside a 5fr verdict card.
- Section head beside content: 1fr / 2fr.
- Televisions header: headline beside the "In this report" card.
- Findings: a 2.5rem number badge column beside the body; stacks under 600px.
- Calculator: full-width form card, results card below; inside results the total and chart sit beside the figures.
- About: 2fr prose beside a 1fr sticky info card.

Breakpoints: 960px, 860px (two-column splits collapse) and 600px (header stops being sticky and stacks, nav tabs share the width, card padding tightens).

## Components (shadcn equivalent in brackets)

- **Header and nav** (Tabs): sticky white header with a blur and a bottom border. Links sit in a muted rounded track, each at least 44px tall; hover fills deep butter (#f3cd6a) and the text turns deep bark, a clear yellow-on-grey change (the Ex 0.2 hover effect); the current page is a filled deep-bark tab with white text (the user's earlier decision: a filled tab, not an underline).
- **Buttons** (Button default / outline): 44px tall, 8px radius, 0.9rem medium text. `.btn` is the filled primary; `.btn-quiet` is the outline variant, which fills soft butter on hover.
- **Eyebrow** (Badge, outline): a pill above each page title with a bolt-orange dot. Added in the 8 Oct redesign, beyond the original request, and kept after the 9 Oct review. It replaces the old "no eyebrow labels" rule. To drop it, delete the three `<p class="eyebrow">` lines; the CSS can stay.
- **Cards** (Card): verdict, findings rail, method, calculator form, results and info panel share one rule: white, 1px border, 14px radius, soft shadow.
- **Verdict scores** (Progress): rounded muted tracks with bark fills; the bar being discussed is bolt.
- **Label guide**: three small cards, each with a numbered butter badge.
- **FAQ** (Accordion): a card of question buttons divided by 1px rules, with a chevron that turns over when open. Still driven by `main.js` toggling `aria-expanded` and `hidden`.
- **Findings rail** (sidebar menu): rounded rows with numbered circle counters; the section in view gets the butter accent and a filled counter.
- **Finding number** (Badge): a 2.5rem rounded square in soft butter.
- **Takeaway** (Alert): a soft-butter rounded box with a bolt dot.
- **Chart figure**: the chart inside a card, with the caption below a 1px rule.
- **Data table** (Collapsible + Table): an outline-button "Show the data table" (44px tall) with a chevron, opening a bordered, rounded table with a muted head row and row hover. Small samples get a dashed bolt rule and a butter "(small sample)" badge.
- **Inputs and select** (Input / Select): 44px, 8px radius, stone border, units inside the right edge, custom chevron on the select. Focus turns the border deep bark and adds a 2px deep-bark outline 2px outside it. Errors turn the border red with the message below, and the focus outline turns red too.
- **Results** (Card): the yearly total in large brand-ink figures, the D3 comparison chart, and the figures list in a bordered box. Before the first calculation, a dashed empty-state box.
- **Footer**: light stone band with muted text.

## Charts

- D3 bars use `.bar` (bark) and `.bar-focus` (bolt), with 4px rounded ends, a light stone baseline, muted labels and dark values in Geist.
- Value axes start at zero. SVGs use a viewBox, `role="img"` and a `<title>` stating every value.
- Motion: bars and score fills grow from zero once when 40% in view; with reduced motion they appear at full length.
- KNIME charts are PNG images on white, shown inside chart cards.

## Rules

- **Twin Table:** no chart without a data table carrying the same numbers.
- **Dashed Sample:** small groups are marked by a dashed line and a text badge together, never by colour alone.
- **Grow Once:** the only authored motion is data growing from zero on first view.
- **Visible focus:** every control shows a 2px deep-bark outline at 2px offset on keyboard focus (inputs and selects on any focus). Never bolt orange: at 2.8:1 on butter it is too faint.
- **Touch targets:** buttons, nav links, inputs and the data-table toggle are at least 44px tall.
- **Plain stack:** no framework, no build step, no inline styles; everything lives in `assets/css/styles.css`.
