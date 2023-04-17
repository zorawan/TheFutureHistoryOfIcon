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
	{ name: "USB", count: 8891 },
	{ name: "Refresh", count: 12176 },
	{ name: "Edit", count: 22409 },
	{ name: "Phone CallBack", count: 23 },
	{ name: "SD Card", count: 1570 },
	{ name: "Language", count: 5415 },
	{ name: "Hourglass", count: 4444 },
	{ name: "Database", count: 21468 },
	{ name: "Saving", count: 7362 },
	{ name: "Thermostat", count: 266 },
	{ name: "Folder", count: 47411 },
	{ name: "Scan", count: 8410 },
	{ name: "Attache file", count: 931 },
	{ name: "Link", count: 11322 },
	{ name: "Translate", count: 674 },
	{ name: "More", count: 10457 },
	{ name: "Accessibility", count: 1228 },
	{ name: "Bluetooth", count: 3493 },
	{ name: "Setting", count: 26449 },
];

function getMiddleItem(arr) {
	const sortedData = arr.sort((a, b) => a.count - b.count);
	console.log(sortedData);
	const middleIndex = Math.floor(sortedData.length / 2 - 1);
	return sortedData[middleIndex];
}

function getAverage(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i].count;
	}

	let average = sum / arr.length;
	return average;
}

const middleObject = getMiddleItem(data);
const meanNumber = getAverage(data);

var nounElement = document.getElementById("noun");
var svgWidth = window.innerWidth;
var svgHeight = 800;
var margin = { top: 20, right: 120, bottom: 200, left: 200 };
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
var y = d3
	.scaleBand()
	.range([margin.top, chartHeight])
	.padding(0.6)
	.domain(
		data.map(function (d) {
			return d.name;
		})
	);

var x = d3
	.scaleLinear()
	.range([0, chartWidth])
	.domain([
		0,
		d3.max(data, function (d) {
			return d.count;
		}),
	]);

// Set up the axes
var xAxis = d3.axisBottom(x).tickSize(0);
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
	.style("font-family", "Mulish")
	.attr("transform", "translate(0,10)")
	.style("text-anchor", "middle");

svg
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
	.call(yAxis)
	.selectAll("text")
	.style("font-size", "16px")
	.style("font-family", "Mulish")
	.style("text-anchor", "end");

// Add mean lines
svg
	.append("line")
	.style("stroke", "#C1DB29")
	.style("stroke-width", "2px")
	.attr("x1", x(meanNumber) + margin.left)
	.attr("y1", margin.top)
	.attr("x2", x(meanNumber) + margin.left)
	.attr("y2", svgHeight - margin.bottom);
// Draw the label for the mean
svg
	.append("text")
	.attr("text-anchor", "start")
	.style("font-size", "16px")
	.style("font-family", "Mulish")
	.attr("x", x(meanNumber) + margin.left + 10)
	.attr("y", svgHeight - margin.bottom - 10)
	// .attr("dominant-baseline", "ideographic")
	.text("Mean: " + meanNumber.toFixed(0));

// Handmade legend
svg
	.append("circle")
	.attr("cx", 200)
	.attr("cy", chartHeight + margin.top + 70)
	.attr("r", 6)
	.style("fill", "rgba(5, 23, 27, 0.5)");
svg
	.append("circle")
	.attr("cx", 200)
	.attr("cy", chartHeight + margin.top + 100)
	.attr("r", 6)
	.style("fill", "rgba(5, 23, 27)");
svg
	.append("text")
	.attr("x", 220)
	.attr("y", chartHeight + margin.top + 70)
	.text("Above the Median")
	.style("font-size", "15px")
	.attr("alignment-baseline", "middle");
svg
	.append("text")
	.attr("x", 220)
	.attr("y", chartHeight + margin.top + 100)
	.text("Below the Median")
	.style("font-size", "15px")
	.attr("alignment-baseline", "middle");

// Add the tooltip to the chart
var tooltip = d3
	.select(nounElement)
	.append("span")
	.attr("class", "tooltip")
	.style("opacity", 0)
	.style("position", "absolute")
	.style("background-color", "#fff")
	.style("padding", 20 + "px")
	.style("border-radius", 6 + "px")
	.style("border", 1 + "px" + "solid #e9eeef")
	.style("box-shadow", "0px 20px 30px rgba(5, 23, 27, 0.2)");

function showTooltip(d) {
	// Format the count value with commas
	var countWithCommas = d.count.toLocaleString();

	// Update the content of the tooltip
	tooltip
		.html(
			"<div class='barTip'>" +
				d.name +
				"</div><div class='barTipCount'>Count: " +
				countWithCommas +
				"</div>"
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
	.style("fill", function (d) {
		if (d.count >= middleObject.count) {
			return "rgba(5, 23, 27, 0.5)";
		} else {
			return "rgba(5, 23, 27, 1)";
		}
	})
	.attr("x", function (d) {
		return x(0);
	})
	.attr("y", function (d) {
		return y(d.name);
	})
	.attr("width", function (d) {
		return x(d.count);
	})
	.attr("height", y.bandwidth())
	.on("mouseover", function (d) {
		showTooltip(d);
	})
	.on("mouseout", function (d) {
		hideTooltip();
	});
