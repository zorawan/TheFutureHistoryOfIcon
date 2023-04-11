function prepareData(json, key, iconName) {
	var result = [
		{
			id: 1,
			name: iconName,
			size: 0,
		},
	];
	var index = 1;
	var total = 0;
	json.map((item) => {
		if (item.hasOwnProperty(key)) {
			var values = item[key];
			var valueArr = values.toLowerCase().split(",");
			for (var value of valueArr) {
				var cleanValue = value.trim();
				var found = false;
				for (let i = 0; i < result.length; i++) {
					//change this line to aggeregate similar answers
					if (result[i].name === cleanValue) {
						result[i].size += 1;
						found = true;
						break;
					}
				}
				if (!found) {
					index++;
					var newItem = {
						id: index,
						name: cleanValue,
						size: 1,
					};
					result.push(newItem);
				}
			}
			total++;
		}
	});
	var formattedResult = { total: total };
	formattedResult[iconName] = result;
	var links = [];
	for (var i = 1; i < index + 1; i++) {
		var link = {
			source: 1,
			target: i,
		};
		links.push(link);
	}
	formattedResult["links"] = links;
	return formattedResult;
}

document.addEventListener("DOMContentLoaded", function (e) {
	// set the dimensions and margins of the graph
	var margin = { top: 20, right: 120, bottom: 40, left: 120 },
		width = window.innerWidth - margin.left - margin.right,
		height = 800 - margin.top - margin.bottom;

	// append the svg object to the body of the page
	var svg = d3
		.select("#my_dataviz")
		.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g");
	// .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	d3.json("survey.json", function (data) {
		// console.log(data);
		var editResult = prepareData(data, "icon_calendar", "Edits");
		console.log(editResult);

		// Initialize the links
		var link = svg
			.selectAll("line")
			.data(editResult.links)
			.enter()
			.append("line")
			.style("stroke", "#aaa");

		var totalSize = d3.sum(editResult.Edits, function (d) {
			return d.id == 1 ? +0 : +d.size;
		});

		editResult.Edits.forEach(function (d) {
			d.normalizedSize = (+d.size / totalSize) * 100;
		});

		// Initialize the Edits
		var node = svg
			.selectAll("circle")
			.data(editResult.Edits)
			.enter()
			.append("g")
			.attr("class", "node");
		node
			.append("circle")
			.attr("r", function (d) {
				if (d.id == 1) {
					return 20;
				}
				return 5 + d.normalizedSize * 2;
			})
			.attr("stroke", "#2378ae")
			.attr("stroke-width", "3")
			.style("fill", "#21383E");
		node
			.append("text")
			.attr("dx", function (d) {
				return d.normalizedSize + 5;
			})
			.attr("dy", "1.5em")
			.text(function (d) {
				return d.name;
			})
			.style("font-size", function (d) {
				return d.normalizedSize + 12 + "px";
			});

		// Let's list the force we wanna apply on the network
		var simulation = d3
			.forceSimulation(editResult.Edits) // Force algorithm is applied to data.Edits
			.force(
				"link",
				d3
					.forceLink() // This force provides links between Edits
					.id(function (d) {
						return d.id;
					}) // This provide  the id of a node
					.links(editResult.links) // and this the list of links
			)
			.force("charge", d3.forceManyBody().strength(-2000)) // This adds repulsion between Edits. Play with the -400 for the repulsion strength
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
