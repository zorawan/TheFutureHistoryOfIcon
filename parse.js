const fs = require("fs");
const csv = require("csv-parser");

const results = [];
const correctResult = {
	edit: 0,
	calendar: 0,
	attachment: 0,
	accessibility: 0,
	folder: 0,
	hourGlass: 0,
	image: 0,
	language: 0,
	more: 0,
	notification: 0,
	phone: 0,
	printer: 0,
	refresh: 0,
	piggyBank: 0,
	scan: 0,
	sdCard: 0,
	translation: 0,
	profile: 0,
	link: 0,
	bluetooth: 0,
	usb: 0,
	thermometer: 0,
	database: 0,
	message: 0,
	bookmark: 0,
	rate: 0,
	power: 0,
	setting: 0,
	share: 0,
	desktop: 0,
};

fs.createReadStream("survey.csv")
	.pipe(csv())
	.on("data", (data) => {
		results.push(data);
		if (/edit|editing|pen|pencil/i.test(data.icon_edit)) {
			correctResult["edit"] += 1;
		}
		if (/calendar/i.test(data.icon_calendar)) {
			correctResult["calendar"] += 1;
		}
		if (/attachment/i.test(data.icon_attachment)) {
			correctResult["attachment"] += 1;
		}
		if (/accessibility/i.test(data.icon_accessibility)) {
			correctResult["accessibility"] += 1;
		}
		if (/folder/i.test(data.icon_folder)) {
			correctResult["folder"] += 1;
		}
		if (/hourglass|loading/i.test(data.icon_hourGlass)) {
			correctResult["hourGlass"] += 1;
		}
		if (/(image|photo|picture)/i.test(data.icon_image)) {
			correctResult["image"] += 1;
		}
		if (/(language)/i.test(data.icon_language)) {
			correctResult["language"] += 1;
		}
		if (/(more|three dots|3 dots)/i.test(data.icon_more)) {
			correctResult["more"] += 1;
		}
		if (/(notification|bell)/i.test(data.icon_notification)) {
			correctResult["notification"] += 1;
		}
		if (/(phone|call|call back)/i.test(data.icon_phone)) {
			correctResult["phone"] += 1;
		}
		if (/(printer|print|printing)/i.test(data.icon_printer)) {
			correctResult["printer"] += 1;
		}
		if (/(refresh|refreshing|reload|reset)/i.test(data.icon_refresh)) {
			correctResult["refresh"] += 1;
		}
		if (/(piggyBank|save money|saving)/i.test(data.icon_piggyBank)) {
			correctResult["piggyBank"] += 1;
		}
		if (/(scan|scanning)/i.test(data.icon_scan)) {
			correctResult["scan"] += 1;
		}
		if (/(sd card|memory)/i.test(data.icon_sdCard)) {
			correctResult["sdCard"] += 1;
		}
		if (/(translation|translate|translating)/i.test(data.icon_translation)) {
			correctResult["translation"] += 1;
		}
	})
	.on("end", () => {
		console.log(correctResult) + "," + correctResult;
		const totalCount = results.length;
		for (const key in correctResult) {
			var percentage = (correctResult[key] / totalCount) * 100;
			console.log(key + ": " + percentage);
		}
	});

// survey2
fs.createReadStream("survey2.csv")
	.pipe(csv())
	.on("data", (data) => {
		results.push(data);
		if (/profile/i.test(data.icon_profile)) {
			correctResult["profile"] += 1;
		}
		if (/link/i.test(data.icon_link)) {
			correctResult["link"] += 1;
		}
		if (/bluetooth/i.test(data.icon_bluetooth)) {
			correctResult["bluetooth"] += 1;
		}
		if (/usb/i.test(data.icon_usb)) {
			correctResult["usb"] += 1;
		}
		if (/thermometer/i.test(data.icon_thermometer)) {
			correctResult["thermometer"] += 1;
		}
		if (/database|data/i.test(data.icon_database)) {
			correctResult["database"] += 1;
		}
		if (/(message|chat)/i.test(data.icon_message)) {
			correctResult["message"] += 1;
		}
		if (/(bookmark)/i.test(data.icon_bookmark)) {
			correctResult["bookmark"] += 1;
		}
		if (/(rate|rating)/i.test(data.icon_rate)) {
			correctResult["rate"] += 1;
		}
		if (/(power|power on|power off)/i.test(data.icon_power)) {
			correctResult["power"] += 1;
		}
		if (/(setting|gear|tool)/i.test(data.icon_setting)) {
			correctResult["setting"] += 1;
		}
		if (/(share)/i.test(data.icon_share)) {
			correctResult["share"] += 1;
		}
		if (/(desktop|computer)/i.test(data.icon_desktop)) {
			correctResult["desktop"] += 1;
		}
	})
	.on("end", () => {
		console.log(correctResult) + "," + correctResult;
		const totalCount = results.length;
		for (const key in correctResult) {
			var percentage = (correctResult[key] / totalCount) * 100;
			console.log(key + ": " + percentage);
		}
	});
