let width = window.innerWidth;
let height = 2600;
let margins = { top: 100, right: 60, bottom: 100, left: 60 };
let totalWidth = width - margins.left - margins.right;
let totalHeight = height - margins.top - margins.bottom;

function prepareData(json, list) {
	var result = [];
	for (var i = 0; i < list.length; i++) {
		var answers = [];
		json.map((item) => {
			if (item.hasOwnProperty(list[i].id)) {
				var values = item[list[i].id];
				var valueArr = values.toLowerCase().split(",");
				for (var value of valueArr) {
					var cleanValue = value.trim();
					var found = false;
					for (let i = 0; i < answers.length; i++) {
						//change this line to aggeregate similar answers
						if (answers[i].name === cleanValue) {
							answers[i].size += 1;
							found = true;
							break;
						}
					}
					if (!found) {
						var newItem = {
							name: cleanValue,
							size: 1,
						};
						answers.push(newItem);
					}
				}
			}
		});

		var nodes = answers
			.sort(function (a, b) {
				return b.size - a.size; // sort nodes by size in descending order
			})
			.map(function (d) {
				var nodeUnitX = totalWidth / 5;
				var nodeUnitY = totalHeight / 6;
				var row = Math.floor(i / 5);
				var col = i % 5;
				return {
					radius: Math.sqrt(d.size) * 6,
					name: d.name,
					startX: 200 + nodeUnitX * col,
					startY: 100 + nodeUnitY * row,
				};
			});
		nodes[0].primary = true;
		result = result.concat(nodes);
	}

	return result;
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
	{
		id: "icon_calendar",
		name: "Calendar",
	},
	{
		id: "icon_attachment",
		name: "Save",
	},
	{
		id: "icon_accessibility",
		name: "Accessibility",
	},
	{
		id: "icon_folder",
		name: "Folder",
	},
	{
		id: "icon_hourGlass",
		name: "HourGlass",
	},
	{
		id: "icon_image",
		name: "Image",
	},
	{
		id: "icon_language",
		name: "Language",
	},
	{
		id: "icon_more",
		name: "More",
	},
	{
		id: "icon_notification",
		name: "Notification",
	},
	{
		id: "icon_phone",
		name: "Phone",
	},
	{
		id: "icon_printer",
		name: "Printer",
	},
	{
		id: "icon_refresh",
		name: "Refresh",
	},
	{
		id: "icon_piggyBank",
		name: "PiggyBank",
	},
	{
		id: "icon_scan",
		name: "Scan",
	},
	{
		id: "icon_sdCard",
		name: "SdCard",
	},
	{
		id: "icon_translation",
		name: "Translation",
	},
	{
		id: "icon_link",
		name: "Link",
	},
	{
		id: "icon_bluetooth",
		name: "Bluetooth",
	},
	{
		id: "icon_usb",
		name: "Usb",
	},
	{
		id: "icon_thermometer",
		name: "Thermometer",
	},
	{
		id: "icon_database",
		name: "Database",
	},
	{
		id: "icon_message",
		name: "Message",
	},
	{
		id: "icon_bookmark",
		name: "Bookmark",
	},
	{
		id: "icon_rate",
		name: "Rate",
	},
	{
		id: "icon_power",
		name: "Power",
	},
	{
		id: "icon_setting",
		name: "Setting",
	},
	{
		id: "icon_share",
		name: "Share",
	},
	{
		id: "icon_desktop",
		name: "Desktop",
	},
];

document.addEventListener("DOMContentLoaded", function (e) {
	d3.json("survey.json", function (data) {
		var container = d3.select("#main_node");

		var tooltip = container
			.append("div")
			.attr("class", "node_tooltip")
			.style("opacity", 0);

		var svg = container
			.append("svg")
			.attr("width", totalWidth)
			.attr("height", totalHeight);

		var imageNodes = list.map(function (d, i) {
			var nodeUnitX = window.innerWidth / 5;
			var nodeUnitY = 2600 / 6;
			var row = Math.floor(i / 5);
			var col = i % 5;
			console.log("row: " + row + ": col: " + col);
			return {
				id: d.id,
				name: d.name,
				startX: 150 + nodeUnitX * col,
				startY: 50 + nodeUnitY * row,
				imageUrl: "listIcons/" + d.id.slice(d.id.indexOf("_") + 1) + ".svg",
				imageWidth: nodeUnitX,
				imageHeight: 50,
			};
		});

		var images = svg
			.selectAll("image")
			.data(imageNodes)
			.enter()
			.append("image")
			.attr("xlink:href", function (d) {
				return d.imageUrl;
			})
			.attr("x", function (d, i) {
				return d.startX - d.imageWidth / 2;
			})
			.attr("y", function (d, i) {
				return d.startY;
			})
			.attr("width", function (d) {
				return d.imageWidth;
			})
			.attr("height", function (d) {
				return d.imageHeight;
			});

		var nodes = prepareData(data, list);
		console.log(nodes);

		var simulation = d3
			.forceSimulation(nodes)
			.force("charge", d3.forceManyBody().strength(10))

			.force(
				"x",
				d3.forceX().x(function (d) {
					return d.startX;
				})
			)
			.force(
				"y",
				d3.forceY().y(function (d) {
					return d.startY;
				})
			)
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
				return d.primary ? "#21383E" : d3.hsl(Math.random() * 360, 0.8, 0.7);
			})

			.on("mouseover", function (d) {
				// show tooltip on mouseover
				tooltip.transition().duration(200).style("opacity", 0.9);
				tooltip
					.html(d.name.charAt(0).toUpperCase() + d.name.slice(1))

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
	});
});
