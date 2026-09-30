// Initial version generated with Claude (Anthropic), following Exercises 4.3 to 4.7. See README > AI Declaration.

const chartWidth = 640;
const chartHeight = 240;
const labelWidth = 110;
const valueSpace = 80;

const moneyFormatter = d3.format("$,.0f");

const drawBarChart = data => {
  const container = d3.select("#cost-chart");

  const svg = container
    .append("svg")
    .attr("viewBox", `0 0 ${chartWidth} ${chartHeight}`)
    .attr("role", "img")
    .attr("aria-labelledby", "cost-chart-title");

  svg.append("title")
    .attr("id", "cost-chart-title")
    .text("Average yearly running cost by screen size: " +
      data.map(d => `${d.category} ${moneyFormatter(d.cost)}`).join(", "));

  const maxCost = d3.max(data, d => d.cost);

  const xScale = d3.scaleLinear()
    .domain([0, maxCost])
    .range([0, chartWidth - labelWidth - valueSpace]);

  const yScale = d3.scaleBand()
    .domain(data.map(d => d.category))
    .range([0, chartHeight])
    .padding(0.25);

  const barAndLabel = svg
    .selectAll("g")
    .data(data)
    .join("g")
    .attr("transform", d => `translate(0, ${yScale(d.category)})`);

  barAndLabel
    .append("rect")
    .attr("class", d => d.cost === maxCost ? "bar bar-focus" : "bar")
    .attr("x", labelWidth)
    .attr("y", 0)
    .attr("width", d => xScale(d.cost))
    .attr("height", yScale.bandwidth());

  barAndLabel
    .append("text")
    .attr("class", "bar-label")
    .text(d => d.category)
    .attr("x", labelWidth - 14)
    .attr("y", yScale.bandwidth() / 2)
    .attr("dy", "0.35em")
    .attr("text-anchor", "end");

  barAndLabel
    .append("text")
    .attr("class", "bar-value")
    .text(d => moneyFormatter(d.cost))
    .attr("x", d => labelWidth + xScale(d.cost) + 10)
    .attr("y", yScale.bandwidth() / 2)
    .attr("dy", "0.35em");

  svg.append("line")
    .attr("class", "baseline")
    .attr("x1", labelWidth)
    .attr("x2", labelWidth)
    .attr("y1", 0)
    .attr("y2", chartHeight);

  container.select(".chart-img").remove();

  if (typeof observeGrow === "function") {
    observeGrow(container.node());
  }
};

d3.csv("assets/data/size_category_energy.csv", d => {
  return {
    category: d.category,
    cost: +d.avg_cost
  };
}).then(data => {
  data.sort((a, b) => a.cost - b.cost);
  drawBarChart(data);
}).catch(error => {
  console.error("Could not load the chart data, showing the static image instead.", error);
});
