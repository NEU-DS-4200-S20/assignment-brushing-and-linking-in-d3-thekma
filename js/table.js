/* global D3 */

function table() {

  // Based on Mike Bostock's margin convention
  // https://bl.ocks.org/mbostock/3019563

  let margin = {
    top: 60,
    left: 50,
    right: 30,
    bottom: 35
  },
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom,
  xValue = d => d[0],
  yValue = d => d[1],
  xLabelText = "",
  yLabelText = "",
  yLabelOffsetPx = 0,
  xScale = d3.scalePoint(),
  yScale = d3.scaleLinear(),
  ourBrush = null,
  selectableElements = d3.select(null),
  dispatcher;

  let ourBrush = null,
    selectableElements = d3.select(null),
    dispatcher;

  // Create the chart by adding an svg to the div with the id 
  // specified by the selector using the given data

    /* global D3 */

  // Based on Mike Bostock's margin convention
  // https://bl.ocks.org/mbostock/3019563

  // Create the chart by adding an svg to the div with the id 
  // specified by the selector using the given data

 // --------------------------------------------------------

  function chart(selector, data) {

    d3.csv("texas.json", function(data) {
      d3.select("#example")
          .datum(data)
          .call(chart);
    });

    let svg = d3.select(selector)
      .append("svg")
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("viewBox", [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))
        .classed("svg-content", true);

    svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);

    var table = d3.select("body").append("table")
            .attr("style", "margin-left: 250px"),
        thead = table.append("thead"),
        tbody = table.append("tbody");

    // append the header row
    thead.append("tr")
        .selectAll("th")
        .data(columns)
        .enter()
        .append("th")
            .text(function(column) { return column; });

    // create a row for each object in the data
    var rows = tbody.selectAll("tr")
        .data(data)
        .enter()
        .append("tr");

    // create a cell in each row for each column
    var cells = rows.selectAll("td")
        .data(function(row) {
            return columns.map(function(column) {
                return {column: column, value: row[column]};
            });
        })
        .enter()
        .append("td")
        .attr("style", "font-family: Courier")
            .html(function(d) { return d.value; });
    
    return table;
}

// render the table
 var peopleTable = tabulate(data, ["date", "close"]);

 // --------------------------------------------------------

  function chart(selector, data) {

    d3.csv("data/texas.json", function(data) {
      d3.select("#example")
          .datum(data)
          .call(chart);
        });

    let table = d3.select(selector)
      .append("table")
        .classed("my-table", true);

    // Here, we grab the labels of the first item in the dataset
    //  and store them as the headers of the table.
    let tableHeaders = Object.keys(data[0]);

    // You should append these headers to the <table> element as <th> objects inside
    // a <th>
    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table

    // YOUR CODE HERE

    // Then, you add a row for each row of the data.  Within each row, you
    // add a cell for each piece of data in the row.
    // HINTS: For each piece of data, you should add a table row.
    // Then, for each table row, you add a table cell.  You can do this with
    // two different calls to enter() and data(), or with two different loops.

    // YOUR CODE HERE


    // Then, add code to allow for brushing.  Note, this is handled differently
    // than the line chart and scatter plot because we are not using an SVG.
    // Look at the readme of the assignment for hints.
    // Note: you'll also have to implement linking in the updateSelection function
    // at the bottom of this function.
    // Remember that you have to dispatch that an object was highlighted.  Look
    // in linechart.js and scatterplot.js to see how to interact with the dispatcher.

    // HINT for brushing on the table: keep track of whether the mouse is down or up, 
    // and when the mouse is down, keep track of any rows that have been mouseover'd

    // YOUR CODE HERE

    return chart;
  }

  // Gets or sets the dispatcher we use for selection events
  chart.selectionDispatcher = function (_) {
    if (!arguments.length) return dispatcher;
    dispatcher = _;
    return chart;
  };

  // Given selected data from another visualization 
  // select the relevant elements here (linking)
  chart.updateSelection = function (selectedData) {
    if (!arguments.length) return;

    // Select an element if its datum was selected
    d3.selectAll('tr').classed("selected", d => {
      return selectedData.includes(d)
    });
  };

  return chart;
}