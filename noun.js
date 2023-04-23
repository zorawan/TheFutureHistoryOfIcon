// Data for the chart
var data = [
	{ name: "Printer", count: 10381 },
	{ name: "Notification", count: 22839 },
	{ name: "Bookmark", count: 14538 },
	{ name: "Share", count: 23158 },
	{ name: "Image", count: 26752 },
	{ name: "Calendar", count: 39501 },
	{ name: "Power", count: 42862 },
	{ name: "Rate", count: 9593 },
	{ name: "Profile", count: 39602 },
	{ name: "Message", count: 79651 },
	{ name: "Desktop", count: 12416 },
	{ name: "USB", count: 8947 },
	{ name: "Refresh", count: 12255 },
	{ name: "Edit", count: 22587 },
	{ name: "Phone CallBack", count: 23 },
	{ name: "SD Card", count: 1591 },
	{ name: "Language", count: 5437 },
	{ name: "Hourglass", count: 4552 },
	{ name: "Database", count: 21949 },
	{ name: "Piggy Bank", count: 3075 },
	{ name: "Thermometer", count: 7998 },
	{ name: "Folder", count: 48056 },
	{ name: "Scan", count: 8610 },
	{ name: "Attachment", count: 4905 },
	{ name: "Link", count: 11475 },
	{ name: "Translation", count: 537 },
	{ name: "More", count: 10506 },
	{ name: "Accessibility", count: 1248 },
	{ name: "Bluetooth", count: 3550 },
	{ name: "Settings", count: 32262 },
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
var margin = { top: 20, right: 160, bottom: 200, left: 320 };
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
	.padding(0.5)
	.domain(
		data.map(function (d) {
			return d.name;
		})
	);

var x = d3
	.scaleLinear()
	.range([10, chartWidth])
	.domain([
		10,
		d3.max(data, function (d) {
			return d.count;
		}),
	]);

// Set up the axes
var xAxis = d3.axisBottom(x).tickSize(0);
var yAxis = d3.axisLeft(y).tickSize(0);

// Add the axes to the chart
svg
	.append("g")
	.attr(
		"transform",
		"translate(" + margin.left + "," + (chartHeight + margin.top) + ")"
	)
	.call(xAxis)
	.select(".domain")
	.remove();

svg
	.selectAll("text")
	.style("font-size", "16px")
	.style("font-family", "Nunito")
	.attr("transform", "translate(0,10)")
	.style("text-anchor", "middle");

svg
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
	.call(yAxis)
	.select(".domain")
	.remove();
svg
	.selectAll("text")
	.style("font-size", "16px")
	.style("font-family", "Nunito")
	.style("text-anchor", "end")
	.style("fill", "#21383E");

// Add mean lines
svg
	.append("line")
	.style("stroke", "#C1DB29")
	.style("stroke-width", "1px")
	.attr("x1", x(meanNumber) + margin.left)
	.attr("y1", margin.top + 20)
	.attr("x2", x(meanNumber) + margin.left)
	.attr("y2", svgHeight - margin.bottom);
// Draw the label for the mean
svg
	.append("text")
	.attr("text-anchor", "start")
	.style("font-size", "16px")
	.style("font-family", "Nunito")
	.attr("x", x(meanNumber) + margin.left + 10)
	.attr("y", svgHeight - margin.bottom - 10)
	// .attr("dominant-baseline", "ideographic")
	.text("Mean: " + meanNumber.toFixed(0));

// Handmade legend
svg
	.append("circle")
	.attr("cx", 200)
	.attr("cy", chartHeight + margin.top + 64)
	.attr("r", 6)
	.style("fill", "rgba(5, 23, 27, 0.5)");
svg
	.append("circle")
	.attr("cx", 400)
	.attr("cy", chartHeight + margin.top + 64)
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
	.attr("x", 420)
	.attr("y", chartHeight + margin.top + 70)
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
	.style("border-radius", 20 + "px")
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
		.style("line-height", 13 + "px")
		.style("left", d3.event.pageX - 50 + "px")
		.style("top", d3.event.pageY - 150 + "px")
		.style("opacity", 1)
		.transition()
		.duration(200)
		.style("opacity", 1)
		.style("left", d3.event.pageX - 50 + "px")
		.style("top", d3.event.pageY - 120 + "px");
}

function hideTooltip() {
	// Hide the tooltip
	tooltip
		.transition()
		.duration(200)
		.style("opacity", 0)
		.style("left", d3.event.pageX - 50 + "px")
		.style("top", d3.event.pageY - 150 + "px");
}

chart
	.selectAll(".bar")
	.data(data)
	.enter()
	.append("rect")
	.attr("rx", 4)
	.attr("class", "bar")
	.style("fill", function (d) {
		if (d.count >= middleObject.count) {
			return "rgba(33, 56, 62, 0.5)";
		} else {
			return "rgba(33, 56, 62, 1)";
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
