var treelist = [
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
	// {
	// 	id: "icon_accessibility",
	// 	regex: /accessibility/,
	// 	title: "Accessibility",
	// 	imgUrl: "listIcons/accessibility.svg",
	// },
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
	// {
	// 	id: "icon_language",
	// 	regex: /language/,
	// 	title: "Language",
	// 	imgUrl: "listIcons/language.svg",
	// },
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

function prepareAgeData(json, list) {
	var resultByAgeArray = [];
	console.log(resultByAgeArray);
	for (var i = 0; i < list.length; i++) {
		var correctCount = 0;
		var totalCount = 0;
		var ageResult = {
			regex: list[i].regex,
			id: list[i].id.slice(list[i].id.indexOf(",") + 1),
			title: list[i].title,
			imgUrl: list[i].imgUrl,
			children: [
				{
					name: "Under 24",
					regex: "Under 18, 18 - 24",
					value: 0,
					total: 0,
					color: "#8957F4",
				},
				{
					name: "25 - 34",
					regex: "25 - 34",
					value: 0,
					total: 0,
					color: "#53F4B6",
				},
				{
					name: "35 and Up",
					regex: "35 - 44, 45 - 54, 55 - 64",
					value: 0,
					total: 0,
					color: "#F899A3",
				},
			],
		};

		json.map((item) => {
			if (item.hasOwnProperty(list[i].id)) {
				totalCount++;
				var values = item[list[i].id];
				var cleanValue = values.toLowerCase();
				for (var age of ageResult.children) {
					if (age.regex.indexOf(item.age) >= 0) {
						age.total += 1;
						//add correct count by 1 for the age
						if (ageResult.regex.test(cleanValue)) {
							age.value += 1;
							correctCount++;
						}
					}
				}
			}
		});
		ageResult["correctPect"] =
			((correctCount / totalCount) * 100).toFixed(0) + "%";
		resultByAgeArray.push(ageResult);
	}

	var result = {
		name: "age result",
		children: resultByAgeArray,
	};
	console.log(result);
	return result;
}

function showTreeMap(data) {
	// set the dimensions and margins of the graph
	var margin = { top: 0, right: 120, bottom: 30, left: 120 },
		width = window.innerWidth - margin.left - margin.right,
		height = 1200 - margin.top - margin.bottom;

	// append the svg object to the body of the page
	var svg = d3
		.select("#tree")
		.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	// Give the data to this cluster layout:
	var root = d3.hierarchy(data).sum(function (d) {
		return d.value / d.total;
	}); // Here the size of each leave is given in the 'value' field in input data
	console.log(root);
	// Then d3.treemap computes the position of each element of the hierarchy
	d3
		.treemap()
		.size([width, height])
		.paddingTop(46)
		.paddingRight(12)
		.paddingInner(0)(
		// Padding between each rectangle
		//.paddingOuter(6)
		//.padding(20)
		root
	);

	// prepare a color scale
	// var color = d3
	// 	.scaleOrdinal()
	// 	.domain(["icon_edit", "icon_profile", "icon_calendar"])
	// 	.range(["#402D54"]);

	// And an opacity scale
	var opacity = d3.scaleLinear().domain([0, 1]).range([0.5, 1]);

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
		.attr("width", function (d) {
			return d.x1 - d.x0;
		})
		.attr("height", function (d) {
			return d.y1 - d.y0;
		})
		.style("stroke", "black")
		.style("fill", function (d) {
			return d.data.color;
		})
		// .style("stroke", "#383E21")
		.style("stroke-width", 0);
	// .style("opacity", function (d) {
	// 	return opacity(d.data.value / d.data.total);
	// .style("opacity", function (d) {
	// 	return opacity(d.data.value / d.data.total);
	// });

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
		.attr("font-size", "13px")
		.attr("fill", "white");

	// and to add the text labels
	svg
		.selectAll("vals")
		.data(root.leaves())
		.enter()
		.append("text")
		.attr("x", function (d) {
			return d.x0 + 5;
		}) // +10 to adjust position (more right)
		.attr("y", function (d) {
			return d.y0 + 40;
		}) // +20 to adjust position (lower)
		.text(function (d) {
			const formattedPercentage =
				((d.data.value / d.data.total) * 100).toFixed(0) + "%";
			return formattedPercentage;
		})
		.attr("font-size", "16px")
		.attr("font-weight", "800")
		.attr("fill", "white");

	// Add title for the 3 groups
	svg
		.selectAll("titles")
		.data(
			root.descendants().filter(function (d) {
				return d.depth == 1;
			})
		)
		.enter()
		.append("g")
		.attr("transform", function (d) {
			return "translate(" + d.x0 + "," + (d.y0 + 21) + ")";
		})
		.append("svg:image")
		.attr("xlink:href", function (d) {
			console.log(d.data.imgUrl);
			return d.data.imgUrl;
		})
		.attr("width", "24")
		.attr("height", "24")
		.attr("x", "0")
		.attr("y", "-6")
		.select(function () {
			return this.parentNode;
		})
		.append("text")
		.text(function (d) {
			return d.data.title + " " + d.data.correctPect;
		})
		.attr("x", "30")
		.attr("y", "10")
		.attr("font-size", "16px")
		.attr("text-anchor", "start");
}

document.addEventListener("DOMContentLoaded", function (e) {
	d3.json("survey.json", function (data) {
		var treeData = prepareAgeData(data, treelist);
		showTreeMap(treeData);
	});
});
