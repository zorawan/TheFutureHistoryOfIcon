var images = [
	{ src: "listIcons/accessibility.svg", alt: "accessibility", class: "none" },
	{ src: "listIcons/profile.svg", alt: "profile", class: "uni" },
	{ src: "listIcons/attachment.svg", alt: "attachment", class: "ske ai" },
	{ src: "listIcons/bluetooth.svg", alt: "bluetooth", class: "ai" },
	{ src: "listIcons/bookmark.svg", alt: "bookmark", class: "uni ske" },
	{ src: "listIcons/message.svg", alt: "message", class: "uni" },
	{ src: "listIcons/folder.svg", alt: "folder", class: "uni ske" },
	{ src: "listIcons/hourGlass.svg", alt: "hourGlass", class: "uni ske ai" },
	{ src: "listIcons/database.svg", alt: "database", class: "none" },
	{ src: "listIcons/desktop.svg", alt: "desktop", class: "ske ai" },
	{ src: "listIcons/edit.svg", alt: "edit", class: "uni ske" },
	{ src: "listIcons/calendar.svg", alt: "calendar", class: "uni ske" },
	{ src: "listIcons/image.svg", alt: "image", class: "none" },
	{ src: "listIcons/language.svg", alt: "language", class: "ai" },
	{ src: "listIcons/link.svg", alt: "link", class: "ai" },
	{ src: "listIcons/usb.svg", alt: "usb", class: "ske ai" },
	{ src: "listIcons/more.svg", alt: "more", class: "none" },
	{
		src: "listIcons/notification.svg",
		alt: "notification",
		class: "uni ske",
	},
	{
		src: "listIcons/phone.svg",
		alt: "phone",
		class: "ske ai",
	},
	{ src: "listIcons/power.svg", alt: "power", class: "uni ai" },
	{ src: "listIcons/printer.svg", alt: "printer", class: "uni ske ai" },
	{ src: "listIcons/refresh.svg", alt: "refresh", class: "uni ai" },
	{ src: "listIcons/piggyBank.svg", alt: "piggyBank", class: "ske" },
	{ src: "listIcons/scan.svg", alt: "scan", class: "ai" },
	{ src: "listIcons/sdCard.svg", alt: "sdCard", class: "ske ai" },
	{ src: "listIcons/setting.svg", alt: "setting", class: "uni ske ai" },
	{ src: "listIcons/share.svg", alt: "share", class: "uni ai" },
	{ src: "listIcons/rate.svg", alt: "rate", class: "uni" },
	{ src: "listIcons/thermometer.svg", alt: "thermometer", class: "ske ai" },
	{ src: "listIcons/translation.svg", alt: "translation", class: "ai" },
];

// Create a variable to hold the concatenated img tags
var imgs = "";

// Loop through the array of images and add each one to the imgs variable
for (var i = 0; i < images.length; i++) {
	// Use template literals to create the img tag
	imgs += `<img src="${images[i].src}" alt="${images[i].alt}" class="${images[i].class}"/>`;
}

var imgs_g = "";

for (var i = 0; i < images.length; i++) {
	imgs_g += `<img src="${images[i].src}" alt="${images[i].alt}" class="filter-green"
			   onmouseenter="showImgTip(event, this)" 
			   onmouseout="$(this).css('background-color', '#f7f7f7'); $('.img_tooltip').hide(); $('.description_tooltip').hide();"
			/>`;
}

var currentStatus = "";
var tooltipImages = [
	"attachment",
	"bookmark",
	"calendar",
	"desktop",
	"edit",
	"folder",
	"hourGlass",
	"notification",
	"phone",
	"printer",
	"piggyBank",
	"sdCard",
	"setting",
	"thermometer",
	"usb",
];

var platformArray = [
	{
		name: "Edit",
		alt: "edit",
		desc: [
			"Google Material Icon",
			"Apple SF Symbols",
			"IBM Carbon Design",
			"Microsoft Fluent UI",
		],
	},
	{
		name: "HourGlass",
		alt: "hourGlass",
		desc: [
			"Google Material Icon",
			"Apple SF Symbols",
			"IBM Carbon Design",
			"Microsoft Fluent UI",
		],
	},
	{
		name: "message",
		alt: "message",
		desc: ["Google Material Icon", "Apple SF Symbols", "Microsoft Fluent UI"],
	},
	{
		name: "Share",
		alt: "share",
		desc: ["Google Material Icon", "IBM Carbon Design"],
	},
	{
		name: "Rate",
		alt: "rate",
		desc: ["Google Material Icon", "IBM Carbon Design"],
	},
	{
		name: "Power",
		alt: "power",
		desc: [
			"Google Material Icon",
			"Apple SF Symbols",
			"IBM Carbon Design",
			"Microsoft Fluent UI",
		],
	},
	{
		name: "Folder",
		alt: "folder",
		desc: [
			"Google Material Icon",
			"Apple SF Symbols",
			"IBM Carbon Design",
			"Microsoft Fluent UI",
		],
	},
	{
		name: "Refresh",
		alt: "refresh",
		desc: [
			"Google Material Icon",
			"Apple SF Symbols",
			"IBM Carbon Design",
			"Microsoft Fluent UI",
		],
	},
	{
		name: "Notification",
		alt: "notification",
		desc: ["Google Material Icon", "Apple SF Symbols"],
	},
	{
		name: "Setting",
		alt: "setting",
		desc: ["Google Material Icon", "IBM Carbon Design", "Microsoft Fluent UI"],
	},
	{
		name: "Calendar",
		alt: "calendar",
		desc: [
			"Google Material Icon",
			"Apple SF Symbols",
			"IBM Carbon Design",
			"Microsoft Fluent UI",
		],
	},
	{
		name: "Bookmark",
		alt: "bookmark",
		desc: [
			"Google Material Icon",
			"Apple SF Symbols",
			"IBM Carbon Design",
			"Microsoft Fluent UI",
		],
	},
	{
		name: "Printer",
		alt: "printer",
		desc: [
			"Google Material Icon",
			"Apple SF Symbols",
			"IBM Carbon Design",
			"Microsoft Fluent UI",
		],
	},
	{
		name: "Profile",
		alt: "profile",
		desc: [
			"Google Material Icon",
			"Apple SF Symbols",
			"IBM Carbon Design",
			"Microsoft Fluent UI",
		],
	},
];

var descArray = [
	{
		name: "Phone Callback",
		desc: "As more people rely on messaging and social media to communicate, traditional phone calls are becoming less common. This trend may make the phone callback icon less relevant as its purpose becomes unclear.",
		alt: "phone",
	},
	{
		name: "Hourglass",
		desc: "While the hourglass symbolizes waiting and loading, it has been supplanted by other arbitrary icons, such as spinning circles and progress bars, as noted by Jakob Nielsen. Additionally, the physical hourglass object has become less common in modern times.",
		alt: "hourGlass",
	},
	{
		name: "Bluetooth",
		desc: "Bluetooth is a specific technology that has only been around since 2000, and people only recognize it because they need to use it to connect devices. However, this technology has limitations and can be easily replaced by others like UWB, NFC, or Wi-Fi Direct. When the technology is replaced, the icon may lose meaning or be repurposed for other things.",
		alt: "bluetooth",
	},
	{
		name: "Share",
		desc: "The shape of share icons are based on device and platform, including this one from Android. Whichever we use today can easily be replaced by voice control or gesture interaction. We are stuck with so many different share icons right now, representing that there is no suitable design to stand the test of time.",
		alt: "share",
	},
	{
		name: "Language",
		desc: "Voice control and the automatic translation may make the language icon less necessary, as communication can be detected and translated automatically. For example, in the metaverse or with a 3d immersive interaction, how you communicate can be automatically detected and converted to something others can understand.",
		alt: "language",
	},
	{
		name: "Power",
		desc: "As more digital devices are left on all the time, the power icon may become less necessary. Why do we need a power icon to turn on/off things?",
		alt: "power",
	},
	{
		name: "USB",
		desc: "USB is not as popular as the floppy disk icon for saving files. Also accompanied by cloud storage, no physical saving places are needed.",
		alt: "usb",
	},
	{
		name: "SD Card",
		desc: "Like USB, SD Card is not as popular as the floppy disk icon. It is also confused by its shape with a sim card. As the primary storage for many digital devices, SD cards can be replaced by embedded or cloud storage.",
		alt: "sdCard",
	},
	{
		name: "Attach Files",
		desc: "A paper clip as an object to hold the attached files is a great reference icon. However, like the share icon, it can be replaced by voice control or gesture interaction.",
		alt: "attachment",
	},
	{
		name: "Translation",
		desc: "Same as the language icon can be replaced by voice control. It won't be necessary to be displayed in front of users.",
		alt: "translation",
	},
	{
		name: "Scan",
		desc: "The scan is so popular nowadays. However, it is based on the QR code technology that may be replaced by automatic recognition.",
		alt: "scan",
	},
	{
		name: "Refresh",
		desc: "Why refresh? The freezing and flashing result can be a jarring experience for users. With greater computing power and new technologies, the need for users to refresh a page to update data may be eliminated, making the refresh icon obsolete.",
		alt: "refresh",
	},
	{
		name: "Settings",
		desc: "Finding a specific setting element is always challenging, and people rarely do it unless necessary. Mapping what people are looking for in a single icon is not ideal. With voice control and personalization, users will need less to use the setting icon to set up their device or software platforms.",
		alt: "setting",
	},
	{
		name: "Desktop",
		desc: "As tiny and powerful chips make personal and wearable devices possible, the need for desktop computers is decreasing. There is no use case for the desktop icon unless in the computer/technology museum for exhibiting computer history.",
		alt: "desktop",
	},
	{
		name: "Link",
		desc: "The hyperlink icon was created to click and link information. Still, it may eventually become outdated as more intuitive options emerge. Alternatives like buttons or the content themselves may replace hyperlinks and make them extinct, rendering the link icon meaningless.",
		alt: "link",
	},
	{
		name: "Thermometer",
		desc: "A thermometer, an object used to measure temperature, is becoming less common in daily life. By replacing the tube with digital numbers, people can read the temperature directly without relying on the object's physical features. As a result, the thermometer's pictogram is losing meaning since the object itself is becoming obsolete.",
		alt: "thermometer",
	},
	{
		name: "Printer",
		desc: "The printer icon was designed based on the home office printer. Although people are using it. Less print-out documents are required because of environmental considerations. The digital trend also leads to the none paper environment for the next generation.",
		alt: "printer",
	},
];

// Function to show the tooltip on hover
function showImgTip(event, img) {
	if (currentStatus == "ske") {
		// Get the alt text of the hovered image
		var altText = $(img).attr("alt");
		// Find the corresponding image object in the images array
		var imageObj = images.find(function (img) {
			return img.alt === altText;
		});
		// Replace the HTML of the tooltip element with the new set of images
		var tooltipImgs = "";
		for (var j = 0; j < tooltipImages.length; j++) {
			if (imageObj.alt === tooltipImages[j]) {
				tooltipImgs += `<img src="${
					"tooltipImages/" + tooltipImages[j]
				}.png" class="${tooltipImages[j]}" id="skeTool"/>`;
			}
		}
		$(".img_tooltip").html(tooltipImgs);
		$(".img_tooltip").show();
		$(img).css("background-color", "#EBECEC");
		// get the mouse position relative to the viewport
		var mouseX = event.clientX;
		var mouseY = event.clientY;
		var tip = $(".img_tooltip")[0];
		tip.style.left = mouseX + 40 + "px";
		tip.style.top = mouseY - 250 + "px";
	} else if (currentStatus == "ai" || currentStatus == "uni") {
		$(".description_tooltip").hide();
		var altText = $(img).attr("alt");
		var array = currentStatus == "ai" ? descArray : platformArray;
		for (var descObj of array) {
			if (altText == descObj.alt) {
				var desc;
				if (currentStatus == "uni") {
					//change here for universal icon layout
					desc = `<div class="desc"><div class="tip_title"> ${descObj.name} </div><div class="highlightTag">platforms using the same shape</div><div>${descObj.desc}</div></div>`;
				} else {
					desc = `<div class="desc"><div class="tip_title">${descObj.name}</div><div class="highlightTag">Reason</div><div>${descObj.desc}</div></div>`;
				}
				$(img).css("background-color", "#EBECEC");
				$(".description_tooltip").html(desc);
				$(".description_tooltip").show();
				var tip = $(".description_tooltip")[0];
				var mouseX = event.clientX;
				var mouseY = event.clientY;
				tip.style.left = mouseX + 40 + "px";
				tip.style.top = mouseY - 250 + "px";
				break;
			}
		}
	}
}

$(document).ready(function () {
	var compensation = 100;
	// var compensation = $(window).height() / 2;
	// calculate where the sections start
	var second = $(".second").offset().top - compensation;
	var third = $(".third").offset().top - compensation;
	var fourth = $(".fourth").offset().top - compensation;
	var footer = $(".footer").offset().top - compensation;
	$(document).scroll(function () {
		//hide all tooltips
		$(".img_tooltip").hide();
		$(".description_tooltip").hide();

		var scrollPos = $(document).scrollTop();
		if (scrollPos >= second && scrollPos < third) {
			$(".section-title-underlay").text("UNIVERSAL ICONS");
			$(".section-subTitle-underlay").text("Are they universal?");
			$(".section-detail-underlay").text(
				"Highlighted icons have been identified as universally recognized by most individuals across various UX/UI research sources. This widespread recognition indicates their sustained relevance and implies that they may remain in use for a longer period than other icons. Therefore, their high level of recognition and vitality may result in an extended lifespan compared to other icons."
			);
			$(".iconGrid").empty();
			$(".iconGrid").css("position", "fixed");
			$(".iconGrid").append(imgs);
			$("img.uni").replaceWith(function () {
				var index = $(this).index("img");
				return $(imgs_g).eq(index - 1);
			});
			currentStatus = "uni";
		} else if (scrollPos >= third && scrollPos < fourth) {
			$(".section-title-underlay").text("EVERYDAY OBJECTS");
			$(".section-subTitle-underlay").text("Are they still common?");
			$(".section-detail-underlay").text(
				"The highlighted icons share a common feature of representing everyday objects. However, their significance and practical usefulness may be lost if people fail to recognize these representations. In other words, the recognition of these icons is critical to their continued effectiveness."
			);
			$(".iconGrid").empty();
			$(".iconGrid").css("position", "fixed");
			$(".iconGrid").append(imgs);
			$("img.ske").replaceWith(function () {
				var index = $(this).index("img");
				return $(imgs_g).eq(index - 1);
			});
			currentStatus = "ske";
		} else if (scrollPos > fourth && scrollPos < footer) {
			$(".section-title-underlay").text("AI & NEW TECHNOLOGIES");
			$(".section-subTitle-underlay").text("Will technology replace them?");
			$(".section-detail-underlay").text(
				"The human-computer interaction is being influenced by AI and other emerging technologies. With AI's introduction, search behavior has been altered, and we may gradually observe a reduction in the use of magnifier icons. Similarly, highlighted icons may also be at risk of losing their functionality to advanced technologies such as voice control and AI."
			);
			$(".iconGrid").empty();
			$(".iconGrid").css("position", "fixed");
			$(".iconGrid").append(imgs);
			$("img.ai").replaceWith(function () {
				var index = $(this).index("img");
				return $(imgs_g).eq(index - 1);
			});
			currentStatus = "ai";
		} else {
			$(".section-title-underlay").text("") &&
				$(".section-subTitle-underlay").text("") &&
				$(".section-detail-underlay").text("");
			$(".iconGrid").empty();
			currentStatus = "";
		}
	}); // close scroll function
}); // close document ready
