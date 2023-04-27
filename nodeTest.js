let width = window.innerWidth;
let height = 2600;
let iconHeight = 36;
let margins = { top: 100, right: 100, bottom: 100, left: 100 };
let totalWidth = width;
let totalHeight = height - margins.top - margins.bottom;
let nodeUnitX = totalWidth / 5;
let nodeUnitY = totalHeight / 6;

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
				var row = Math.floor(i / 5);
				var col = i % 5;

				return {
					count: d.size,
					radius: Math.sqrt(d.size) * 6,
					name: d.name,
					startX: nodeUnitX * col + nodeUnitX / 2,
					startY: margins.top - 20 + nodeUnitY * row + (nodeUnitY - 36) / 2,
				};
			});
		nodes[0].primary = true;
		result = result.concat(nodes);
	}
	return result;
}

function prepareAgeData(json, list) {
	var resultByAgeArray = [];

	for (var i = 0; i < list.length; i++) {
		var ageResult = {
			regex: list[i].regex,
			id: list[i].id.slice(list[i].id.indexOf(",") + 1),
			children: [
				{
					name: "Under 24",
					regex: "Under 18, 18 - 24",
					value: 0,
					total: 0,
				},
				{
					name: "25 - 34",
					regex: "25 - 34",
					value: 0,
					total: 0,
				},
				{
					name: "35 and Up",
					regex: "35 - 44, 45 - 54, 55 - 64",
					value: 0,
					total: 0,
				},
			],
		};

		json.map((item) => {
			if (item.hasOwnProperty(list[i].id)) {
				var values = item[list[i].id];
				var cleanValue = values.toLowerCase();
				for (var age of ageResult.children) {
					if (age.regex.indexOf(item.age) >= 0) {
						age.total += 1;
						//add correct count by 1 for the age
						if (ageResult.regex.test(cleanValue)) {
							age.value += 1;
						}
					}
				}
			}
		});
		resultByAgeArray.push(ageResult);
	}

	console.log(resultByAgeArray);
	return resultByAgeArray;
}

var list = [
	{
		id: "icon_edit",
		regex: /edit|editing|pen|pencil|write|writing/,
		title: "Edit",
		imgUrl: "listIcons/edit.svg",
	},
	{
		id: "icon_profile",
		regex: /person|profile|user|account/,
		title: "Profile",
		imgUrl: "listIcons/profile.svg",
	},
	{
		id: "icon_calendar",
		regex: /calendar|schedule/,
		title: "Calendar",
		imgUrl: "listIcons/calendar.svg",
	},
	{
		id: "icon_attachment",
		regex: /attachment|attach|clip|paperclip/,
		title: "Attachment",
		imgUrl: "listIcons/attachment.svg",
	},
	{
		id: "icon_accessibility",
		regex: /accessibility/,
		title: "Accessibility",
		imgUrl: "listIcons/accessibility.svg",
	},
	{
		id: "icon_folder",
		regex: /folder/,
		title: "Folder",
		imgUrl: "listIcons/folder.svg",
	},
	{
		id: "icon_hourGlass",
		regex: /hourglass|hour glass|loading|wait|waiting|load time/,
		title: "Hourglass",
		imgUrl: "listIcons/hourGlass.svg",
	},
	{
		id: "icon_image",
		regex: /image|photo|photos|picture|pictures|images|pics/,
		title: "Image",
		imgUrl: "listIcons/image.svg",
	},
	{
		id: "icon_language",
		regex: /language/,
		title: "Language",
		imgUrl: "listIcons/language.svg",
	},
	{
		id: "icon_more",
		regex: /more|three dots|dots|Menu/,
		title: "More",
		imgUrl: "listIcons/more.svg",
	},
	{
		id: "icon_notification",
		regex: /notification|bell|alert|alarm/,
		title: "Notification",
		imgUrl: "listIcons/notification.svg",
	},
	{
		id: "icon_phone",
		regex: /phone|call|call back/,
		title: "Notification",
		imgUrl: "listIcons/phone.svg",
	},
	{
		id: "icon_printer",
		regex: /printer|print|printing/,
		title: "Printer",
		imgUrl: "listIcons/printer.svg",
	},
	{
		id: "icon_refresh",
		regex: /refresh|refreshing|reload|re-load/,
		title: "Refresh",
		imgUrl: "listIcons/refresh.svg",
	},
	{
		id: "icon_piggyBank",
		regex: /piggyBank|save money|saving|money/,
		title: "Piggy Bank",
		imgUrl: "listIcons/piggyBank.svg",
	},
	{
		id: "icon_scan",
		regex: /scan|scanning|rq code/,
		title: "Scan",
		imgUrl: "listIcons/scan.svg",
	},
	{
		id: "icon_sdCard",
		regex: /sd card|memory|save/i,
		title: "SD Card",
		imgUrl: "listIcons/sdCard.svg",
	},
	{
		id: "icon_translation",
		regex: /translation|translate|translating/,
		title: "Translation",
		imgUrl: "listIcons/translation.svg",
	},
	{
		id: "icon_link",
		regex: /link/,
		title: "Link",
		imgUrl: "listIcons/link.svg",
	},
	{
		id: "icon_bluetooth",
		regex: /bluetooth/,
		title: "Bluetooth",
		imgUrl: "listIcons/bluetooth.svg",
	},
	{
		id: "icon_usb",
		regex: /usb|flash drive/,
		title: "USB",
		imgUrl: "listIcons/usb.svg",
	},
	{
		id: "icon_thermometer",
		regex: /thermometer|temperature/,
		title: "Thermometer",
		imgUrl: "listIcons/thermometer.svg",
	},
	{
		id: "icon_database",
		regex: /database|data|storage/,
		title: "Database",
		imgUrl: "listIcons/database.svg",
	},
	{
		id: "icon_message",
		regex: /message|messages|messaging/,
		title: "Message",
		imgUrl: "listIcons/message.svg",
	},
	{
		id: "icon_bookmark",
		regex: /bookmark|save/,
		title: "Bookmark",
		imgUrl: "listIcons/bookmark.svg",
	},
	{
		id: "icon_rate",
		regex: /rate|rating/,
		title: "Rate",
		imgUrl: "listIcons/rate.svg",
	},
	{
		id: "icon_power",
		regex: /power|power on|power off|power on\/off/,
		title: "Power",
		imgUrl: "listIcons/power.svg",
	},
	{
		id: "icon_setting",
		regex: /setting|gear|tool|settings/,
		title: "Settings",
		imgUrl: "listIcons/setting.svg",
	},
	{
		id: "icon_share",
		regex: /share/,
		title: "Share",
		imgUrl: "listIcons/share.svg",
	},
	{
		id: "icon_desktop",
		regex: /desktop|computer|pc/i,
		title: "Desktop",
		imgUrl: "listIcons/desktop.svg",
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
			var row = Math.floor(i / 5);
			var col = i % 5;

			return {
				id: d.id,
				name: d.name,
				startX: nodeUnitX * col,
				startY: margins.top + nodeUnitY * row,
				imageUrl: "listIcons/" + d.id.slice(d.id.indexOf("_") + 1) + ".svg",
				imageWidth: nodeUnitX,
				imageHeight: 36,
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
				return d.startX;
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

		prepareAgeData(data, list);
		var simulation = d3
			.forceSimulation(nodes)
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
				return d.primary ? "#21383E" : d3.hsl(Math.random() * 360, 1, 0.8);
				// return d.primary ? "#21383E" : d3.hsl(68, 1, Math.random() + 0.1);
			})

			.on("mouseover", function (d) {
				// show tooltip on mouseover
				tooltip.transition().duration(200).style("opacity", 1);
				tooltip
					.html(
						d.name.charAt(0).toUpperCase() +
							d.name.slice(1) +
							"<br><span style='font-weight:500'>Answer Count: " +
							d.count +
							"</span>"
					)

					.style("left", d3.event.pageX + 10 + "px")
					.style("top", d3.event.pageY - 60 + "px");
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
