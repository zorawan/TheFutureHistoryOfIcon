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

var list = [
	{
		id: "icon_edit",
		name: "Edits",
	},
	{
		id: "icon_profile",
		name: "Profile",
	},
];

document.addEventListener("DOMContentLoaded", function (e) {
	var width = 200,
		height = 200;

	d3.json("survey.json", function (data) {
		var container = d3.select("#main_node");

		var tooltip = container
			.append("div")
			.attr("class", "node_tooltip")
			.style("opacity", 0);

		for (var i = 0; i < list.length; i++) {
			var svg = container
				.append("svg")
				.attr("width", width)
				.attr("height", height);
			var editResult = prepareData(data, list[i].id, list[i].name);
			console.log(editResult);
			var nodes = editResult[list[i].name]
				.sort(function (a, b) {
					return b.size - a.size; // sort nodes by size in descending order
				})
				.map(function (d) {
					return { radius: d.size * 2, name: d.name };
				});
			var simulation = d3
				.forceSimulation(nodes)
				.force("charge", d3.forceManyBody().strength(5))

				.force("center", d3.forceCenter(width / 2, height / 2))
				.force(
					"collision",
					d3.forceCollide().radius(function (d) {
						return d.radius;
					})
				)
				.on("tick", ticked);

			var circles = svg
				.selectAll("circle")
				.data(nodes)
				.enter()
				.append("circle")
				.attr("r", function (d) {
					return d.radius;
				})
				.attr("fill", function (d, i) {
					return i === 0 ? "#21383E" : d3.hsl(Math.random() * 360, 0.8, 0.65);
				})

				.on("mouseover", function (d) {
					// show tooltip on mouseover
					tooltip.transition().duration(200).style("opacity", 0.9);
					tooltip

						.html(d.name)
						.style("left", d3.event.pageX + 10 + "px")
						.style("top", d3.event.pageY - 28 + "px");
				})

				.on("mouseout", function (d) {
					// hide tooltip on mouseout
					tooltip.transition().duration(500).style("opacity", 0);
				});

			function ticked() {
				circles
					.attr("cx", function (d) {
						return d.x;
					})
					.attr("cy", function (d) {
						return d.y;
					});
			}
		}
	});
});
