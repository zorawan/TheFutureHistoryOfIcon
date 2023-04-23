// // set the dimensions and treeMargins of the graph
const treeMargin = { top: 10, right: 10, bottom: 10, left: 10 },
	treeWidth = 445 - treeMargin.left - treeMargin.right,
	treeHeight = 445 - treeMargin.top - treeMargin.bottom;

var treeElement = document.getElementById("tree");
// append the svg object to the body of the page
var svg = d3
	.select(treeElement)
	.append("svg")
	.attr("treeWidth", treeWidth + treeMargin.left + treeMargin.right)
	.attr("treeHeight", treeHeight + treeMargin.top + treeMargin.bottom)
	.append("g")
	.attr(
		"transform",
		"translate(" + treeMargin.left + "," + treeMargin.top + ")"
	);

// read json data
d3.json(
	"https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_dendrogram_full.json",
	function (data) {
		// Give the data to this cluster layout:
		var root = d3.hierarchy(data).sum(function (d) {
			return d.value;
		}); // Here the size of each leave is given in the 'value' field in input data

		// Then d3.treemap computes the position of each element of the hierarchy
		d3.treemap().size([treeWidth, treeHeight]).padding(2)(root);

		// use this information to add rectangles:
		svg
			.selectAll("rect")
			.data(root.leaves())
			.enter()
			.append("rect")
			.attr("x", function (d) {
				return d.x0;
			})
			.attr("y", function (d) {
				return d.y0;
			})
			.attr("treeWidth", function (d) {
				return d.x1 - d.x0;
			})
			.attr("treeHeight", function (d) {
				return d.y1 - d.y0;
			})
			.style("stroke", "black")
			.style("fill", "slateblue");

		// and to add the text labels
		svg
			.selectAll("text")
			.data(root.leaves())
			.enter()
			.append("text")
			.attr("x", function (d) {
				return d.x0 + 5;
			}) // +10 to adjust position (more right)
			.attr("y", function (d) {
				return d.y0 + 20;
			}) // +20 to adjust position (lower)
			.text(function (d) {
				return d.data.name;
			})
			.attr("font-size", "15px")
			.attr("fill", "white");
	}
);
