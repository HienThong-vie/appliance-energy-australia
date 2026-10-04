// Initial version generated with Claude (Anthropic). See README > AI Declaration.

const compareWidth = 400;
const compareRowHeight = 46;
const compareLabelWidth = 90;
const compareValueSpace = 90;

const TV_SIZES = { tvSmall: "Small", tvMedium: "Medium", tvLarge: "Large" };

let tvAverages = null;
let pendingComparison = null;

function drawComparison(result, values, appliance) {
  pendingComparison = { result, values, appliance };

  if (tvAverages) {
    renderComparison(pendingComparison);
  }
}

function renderComparison({ result, values, appliance }) {
  const figure = document.getElementById("calc-chart");
  const note = document.getElementById("calc-chart-note");

  if (appliance !== "custom" && !TV_SIZES[appliance]) {
    figure.hidden = true;
    note.hidden = false;
    return;
  }

  // The labelled kWh assumes 10 hours a day, so rescale each average to the user's hours and price.
  const rows = tvAverages.map(d => {
    const isYou = TV_SIZES[appliance] === d.category;
    return {
      label: d.category,
      cost: isYou ? result.yearlyCost : d.avgKwh * (values.hours / 10) * values.price,
      isYou
    };
  });

  if (appliance === "custom") {
    rows.unshift({ label: "Yours", cost: result.yearlyCost, isYou: true });
  }

  const moneyFormatter = d3.format("$,.0f");
  const height = rows.length * compareRowHeight;
  const container = d3.select("#calc-chart-svg");

  container.select("svg").remove();

  const svg = container
    .append("svg")
    .attr("viewBox", `0 0 ${compareWidth} ${height}`)
    .attr("role", "img")
    .attr("aria-labelledby", "calc-chart-title");

  svg.append("title")
    .attr("id", "calc-chart-title")
    .text("Yearly running cost compared with average TVs: " +
      rows.map(d => `${d.label}${d.isYou ? " (yours)" : ""} ${moneyFormatter(d.cost)}`).join(", "));

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(rows, d => d.cost)])
    .range([0, compareWidth - compareLabelWidth - compareValueSpace]);

  const yScale = d3.scaleBand()
    .domain(rows.map(d => d.label))
    .range([0, height])
    .padding(0.25);

  const row = svg
    .selectAll("g")
    .data(rows)
    .join("g")
    .attr("transform", d => `translate(0, ${yScale(d.label)})`);

  row.append("rect")
    .attr("class", d => d.isYou ? "bar bar-focus" : "bar")
    .attr("x", compareLabelWidth)
    .attr("y", 0)
    .attr("width", d => xScale(d.cost))
    .attr("height", yScale.bandwidth());

  row.append("text")
    .attr("class", "bar-label")
    .text(d => d.label)
    .attr("x", compareLabelWidth - 10)
    .attr("y", yScale.bandwidth() / 2)
    .attr("dy", "0.35em")
    .attr("text-anchor", "end");

  row.append("text")
    .attr("class", "bar-value")
    .text(d => moneyFormatter(d.cost))
    .attr("x", d => compareLabelWidth + xScale(d.cost) + 8)
    .attr("y", yScale.bandwidth() / 2)
    .attr("dy", "0.35em");

  svg.append("line")
    .attr("class", "baseline")
    .attr("x1", compareLabelWidth)
    .attr("x2", compareLabelWidth)
    .attr("y1", 0)
    .attr("y2", height);

  figure.hidden = false;
  note.hidden = true;
}

if (typeof d3 === "undefined") {
  console.warn("D3 did not load, so the cost comparison chart is not shown.");
} else {
  d3.csv("assets/data/size_category_energy.csv", d => {
    return {
      category: d.category,
      avgKwh: +d.avg_kwh
    };
  }).then(data => {
    tvAverages = data;
    if (pendingComparison) {
      renderComparison(pendingComparison);
    }
  }).catch(error => {
    console.error("Could not load the TV averages, so the comparison chart is not shown.", error);
  });
}
