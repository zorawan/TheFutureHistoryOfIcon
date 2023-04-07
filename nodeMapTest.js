document.addEventListener("DOMContentLoaded", function (e) {
	// set the dimensions and margins of the graph
	var margin = { top: 20, right: 120, bottom: 40, left: 120 },
		width = window.innerWidth - margin.left - margin.right,
		height = 600 - margin.top - margin.bottom;

	// append the svg object to the body of the page
	var svg = d3
		.select("#my_dataviz")
		.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g");
	// .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	d3.json("survey_refine.json", function (data) {
		console.log(data);
		// Initialize the links
		var link = svg
			.selectAll("line")
			.data(data.links)
			.enter()
			.append("line")
			.style("stroke", "#aaa");

		var totalSize = d3.sum(data.Edits, function (d) {
			return d.id == 1 ? +0 : +d.size;
		});

		data.Edits.forEach(function (d) {
			d.normalizedSize = (+d.size / totalSize) * 100;
		});

		// Initialize the Edits
		var node = svg
			.selectAll("circle")
			.data(data.Edits)
			.enter()
			.append("g")
			.attr("class", "node");
		node
			.append("circle")
			.attr("r", function (d) {
				if (d.id == 1) {
					return 20;
				}
				return d.normalizedSize;
			})
			.style("fill", "#21383E");
		node
			.append("text")
			.attr("dx", function (d) {
				return d.normalizedSize + 5;
			})
			.attr("dy", ".35em")
			.text(function (d) {
				return d.name;
			})
			.style("font-size", "24px");

		// Let's list the force we wanna apply on the network
		var simulation = d3
			.forceSimulation(data.Edits) // Force algorithm is applied to data.Edits
			.force(
				"link",
				d3
					.forceLink() // This force provides links between Edits
					.id(function (d) {
						return d.id;
					}) // This provide  the id of a node
					.links(data.links) // and this the list of links
			)
			.force("charge", d3.forceManyBody().strength(-1000)) // This adds repulsion between Edits. Play with the -400 for the repulsion strength
			.force("center", d3.forceCenter(width / 2, height / 2)) // This force attracts Edits to the center of the svg area
			.on("end", ticked);

		// This function is run at each iteration of the force algorithm, updating the Edits position.
		function ticked() {
			link
				.attr("x1", function (d) {
					return d.source.x;
				})
				.attr("y1", function (d) {
					return d.source.y;
				})
				.attr("x2", function (d) {
					return d.target.x;
				})
				.attr("y2", function (d) {
					return d.target.y;
				});

			node.attr("transform", function (d) {
				return "translate(" + d.x + "," + d.y + ")";
			});
		}
	});
});
