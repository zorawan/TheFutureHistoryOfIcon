// var NounProject = require("the-noun-project"),
// 	nounProject = new NounProject({
// 		key: "3408dfacebf94462bd367d1bf329216c",
// 		secret: "3e8eb6412bbc4361bad1ce154b948911",
// 	});

// nounProject.getIconsByTerm("folder", function (err, data) {
// 	if (!err) {
// 		console.log(data.icons.length);
// 	}
// });

// Data for the chart
var data = [
	{ name: "Print", count: 10907 },
	{ name: "Notification", count: 22539 },
	{ name: "Bookmark", count: 14375 },
	{ name: "Share", count: 22869 },
	{ name: "Image", count: 26323 },
	{ name: "Calendar", count: 10419 },
	{ name: "Power", count: 42011 },
	{ name: "Rate", count: 9407 },
	{ name: "Profile", count: 39200 },
	{ name: "Comment", count: 13393 },
	{ name: "Desktop", count: 12222 },
	{ name: "Memory", count: 7511 },
	{ name: "Refresh", count: 12176 },
	{ name: "Edit", count: 22229 },
	{ name: "Phone CallBack", count: 23 },
	{ name: "SD Card", count: 1570 },
	{ name: "Language", count: 5388 },
	{ name: "Hourglass", count: 4444 },
	{ name: "Database", count: 21468 },
	{ name: "Saving", count: 7362 },
	{ name: "Thermostat", count: 266 },
	{ name: "Folder", count: 47411 },
	{ name: "Scan", count: 8410 },
	{ name: "Attache file", count: 931 },
	{ name: "Link", count: 11322 },
	{ name: "Translate", count: 674 },
	{ name: "Language", count: 10907 },
	{ name: "Accessibility", count: 1228 },
	{ name: "Bluetooth", count: 3493 },
	{ name: "Setting", count: 26449 },
];

var nounElement = document.getElementById("noun");
var svgWidth = window.innerWidth;
var svgHeight = 460;
var margin = { top: 20, right: 120, bottom: 100, left: 120 };
var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;
// Set up the SVG element and chart dimensions
var svg = d3
	.select(nounElement)
	.append("svg")
	.attr("width", svgWidth)
	.attr("height", svgHeight);

var chart = svg
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// sort data
data.sort(function (b, a) {
	return a.count - b.count;
});

// Set up the scales
var x = d3
	.scaleBand()
	.range([0, chartWidth])
	.padding(0.3)
	.domain(
		data.map(function (d) {
			return d.name;
		})
	);

var y = d3
	.scaleLinear()
	.range([chartHeight, 0])
	.domain([
		0,
		d3.max(data, function (d) {
			return d.count;
		}),
	]);

// Set up the axes
var xAxis = d3.axisBottom(x);
var yAxis = d3.axisLeft(y);

// Add the axes to the chart
svg
	.append("g")
	.attr(
		"transform",
		"translate(" + margin.left + "," + (chartHeight + margin.top) + ")"
	)
	.call(xAxis)
	.selectAll("text")
	.style("font-size", "16px")
	.attr("transform", "translate(-10,0)rotate(-45)")
	.style("text-anchor", "end");

svg
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
	.call(yAxis)
	.selectAll("text")
	.style("font-size", "16px");

// Add the tooltip to the chart
var tooltip = d3
	.select(nounElement)
	.append("span")
	.attr("class", "tooltip")
	.style("opacity", 0)
	.style("position", "absolute")
	.style("background-color", "#f7f7f7")
	.style("padding", 20 + "px")
	.style("border-radius", 4 + "px");

// Define the tooltip function
function showTooltip(d) {
	// Update the content of the tooltip
	tooltip
		.html(
			"<strong>Count:</strong> <span style='color:#102B32'>" +
				d.count +
				"</span>"
		)
		.style("left", d3.event.pageX + 25 + "px")
		.style("top", d3.event.pageY - 25 + "px")
		.transition()
		.duration(200)
		.style("opacity", 1);
}

function hideTooltip() {
	// Hide the tooltip
	tooltip.transition().duration(200).style("opacity", 0);
}

chart
	.selectAll(".bar")
	.data(data)
	.enter()
	.append("rect")
	.attr("class", "bar")
	.style("fill", "#102B32")
	.attr("x", function (d) {
		return x(d.name);
	})
	.attr("y", function (d) {
		return y(d.count);
	})
	.attr("height", function (d) {
		return chartHeight - y(d.count);
	})
	.attr("width", x.bandwidth())
	.on("mouseover", function (d) {
		showTooltip(d);
	})
	.on("mouseout", function (d) {
		hideTooltip();
	});
