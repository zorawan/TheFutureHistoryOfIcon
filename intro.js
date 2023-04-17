var images = [
	{ src: "listIcons/accessibility.svg", alt: "accessibility", class: "none" },
	{ src: "listIcons/account.svg", alt: "account", class: "uni" },
	{ src: "listIcons/attach_file.svg", alt: "attach_file", class: "ske ai" },
	{ src: "listIcons/bluetooth.svg", alt: "bluetooth", class: "ai" },
	{ src: "listIcons/bookmark.svg", alt: "bookmark", class: "uni ske" },
	{ src: "listIcons/comment.svg", alt: "comment", class: "uni" },
	{ src: "listIcons/database.svg", alt: "database", class: "none" },
	{ src: "listIcons/desktop.svg", alt: "desktop", class: "ske ai" },
	{ src: "listIcons/edit.svg", alt: "edit", class: "uni ske" },
	{ src: "listIcons/calendar.svg", alt: "calendar", class: "uni ske" },
	{ src: "listIcons/folder.svg", alt: "folder", class: "uni ske" },
	{ src: "listIcons/hourglass.svg", alt: "hourglass", class: "uni ske ai" },
	{ src: "listIcons/image.svg", alt: "image", class: "none" },
	{ src: "listIcons/language.svg", alt: "language", class: "ai" },
	{ src: "listIcons/link.svg", alt: "link", class: "ai" },
	{ src: "listIcons/usb.svg", alt: "usb", class: "ske ai" },
	{ src: "listIcons/more.svg", alt: "more", class: "none" },
	{
		src: "listIcons/notifications.svg",
		alt: "notifications",
		class: "uni ske",
	},
	{
		src: "listIcons/phone_callback.svg",
		alt: "phone_callback",
		class: "ske ai",
	},
	{ src: "listIcons/power.svg", alt: "power", class: "uni ai" },
	{ src: "listIcons/print.svg", alt: "print", class: "uni ske ai" },
	{ src: "listIcons/refresh.svg", alt: "refresh", class: "uni ai" },
	{ src: "listIcons/savings.svg", alt: "savings", class: "ske" },
	{ src: "listIcons/scan.svg", alt: "scan", class: "ai" },
	{ src: "listIcons/sd_card.svg", alt: "sd_card", class: "ske ai" },
	{ src: "listIcons/settings.svg", alt: "settings", class: "uni ske ai" },
	{ src: "listIcons/share.svg", alt: "share", class: "uni ai" },
	{ src: "listIcons/star.svg", alt: "star", class: "uni" },
	{ src: "listIcons/thermometer.svg", alt: "thermometer", class: "ske ai" },
	{ src: "listIcons/translate.svg", alt: "translate", class: "ai" },
];

// Create a variable to hold the concatenated img tags
var imgs = "";

// Loop through the array of images and add each one to the imgs variable
for (var i = 0; i < images.length; i++) {
	// Use template literals to create the img tag
	imgs += `<img src="${images[i].src}" alt="${images[i].alt}" class="${images[i].class}"/>`;
}

var images_g = [
	{ src: "listIcons/accessibility_g.svg", alt: "accessibility" },
	{ src: "listIcons/account_g.svg", alt: "account" },
	{ src: "listIcons/attach_file_g.svg", alt: "attach_file" },
	{ src: "listIcons/bluetooth_g.svg", alt: "bluetooth" },
	{ src: "listIcons/bookmark_g.svg", alt: "bookmark" },
	{ src: "listIcons/comment_g.svg", alt: "comment" },
	{ src: "listIcons/database_g.svg", alt: "database" },
	{ src: "listIcons/desktop_g.svg", alt: "desktop" },
	{ src: "listIcons/edit_g.svg", alt: "edit" },
	{ src: "listIcons/calendar_g.svg", alt: "calendar" },
	{ src: "listIcons/folder_g.svg", alt: "folder" },
	{ src: "listIcons/hourglass_g.svg", alt: "hourglass" },
	{ src: "listIcons/image_g.svg", alt: "image" },
	{ src: "listIcons/language_g.svg", alt: "language" },
	{ src: "listIcons/link_g.svg", alt: "link" },
	{ src: "listIcons/usb_g.svg", alt: "usb" },
	{ src: "listIcons/more_g.svg", alt: "more" },
	{ src: "listIcons/notifications_g.svg", alt: "notifications" },
	{ src: "listIcons/phone_callback_g.svg", alt: "phone_callback" },
	{ src: "listIcons/power_g.svg", alt: "power" },
	{ src: "listIcons/print_g.svg", alt: "print" },
	{ src: "listIcons/refresh_g.svg", alt: "refresh" },
	{ src: "listIcons/savings_g.svg", alt: "savings" },
	{ src: "listIcons/scan_g.svg", alt: "scan" },
	{ src: "listIcons/sd_card_g.svg", alt: "sd_card" },
	{ src: "listIcons/settings_g.svg", alt: "settings" },
	{ src: "listIcons/share_g.svg", alt: "share" },
	{ src: "listIcons/star_g.svg", alt: "star" },
	{ src: "listIcons/thermometer_g.svg", alt: "thermometer" },
	{ src: "listIcons/translate_g.svg", alt: "translate" },
];

var imgs_g = "";
for (var i = 0; i < images_g.length; i++) {
	imgs_g += `<img src="${images_g[i].src}" alt="${images_g[i].alt}"  
			   onmouseenter="showImgTip(event, this)" 
			   onmouseout="$(this).css('background-color', '#f7f7f7'); $('.img_tooltip').hide(); $('.description_tooltip').hide();"
			/>`;
}

var currentStatus = "";
var tooltipImages = [
	"attach_file",
	"bookmark",
	"calendar",
	"desktop",
	"edit",
	"folder",
	"hourglass",
	"notifications",
	"phone_callback",
	"print",
	"savings",
	"sd_card",
	"settings",
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
		name: "Hourglass",
		alt: "hourglass",
		desc: [
			"Google Material Icon",
			"Apple SF Symbols",
			"IBM Carbon Design",
			"Microsoft Fluent UI",
		],
	},
	{ name: "Comment", alt: "comment", desc: ["Google Material Icon"] },
	{
		name: "Share",
		alt: "share",
		desc: ["Google Material Icon", "IBM Carbon Design"],
	},
	{
		name: "Rate",
		alt: "star",
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
		name: "Notifications",
		alt: "notifications",
		desc: ["Google Material Icon", "Apple SF Symbols"],
	},
	{
		name: "Settings",
		alt: "settings",
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
		name: "Print",
		alt: "print",
		desc: [
			"Google Material Icon",
			"Apple SF Symbols",
			"IBM Carbon Design",
			"Microsoft Fluent UI",
		],
	},
	{
		name: "User Profile",
		alt: "account",
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
		alt: "phone_callback",
	},
	{
		name: "Hourglass",
		desc: "The hourglass symbolizes waiting and loading, but it has been replaced by other arbitrary icons (Jakob Nielsen), like spinning circles and progress bars, which I think is more related to the ideogram from Six Methods of forming Chinese characters. The physical object has also become less commonly seen, replaced by digital interfaces.",
		alt: "hourglass",
	},
	{
		name: "Bluetooth",
		desc: "Bluetooth is a specific technology that has only been around since 2000, and people only recognize it because they need to use it to connect devices. However, this technology has limitations and can be easily replaced by others like UWB, NFC, or Wi-Fi Direct. When the technology is replaced, the icon may lose meaning or be repurposed for other things.",
		alt: "bluetooth",
	},
	{
		name: "Share",
		desc: "The share iconography world is divided. Many share icons are based on device and platform, including this one from Android. Whatever share icon we use today can easily be replaced by voice control or gesture interaction. We are stuck with so many different share icons right now, representing that there is no suitable design to stand the test of time",
		alt: "share",
	},
	{
		name: "Language",
		desc: "Voice control and the automatic translation may make the language icon less necessary, as communication can be detected and translated automatically. For example, in the metaverse or with a 3d immersive interaction, how you communicate can be automatically detected and converted to something others can understand.",
		alt: "language",
	},
	{
		name: "Power",
		desc: "As more digital devices are left on all the time, the power icon may become less necessary. Why do we need a power icon to turn on/off for things?",
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
		alt: "sd_card",
	},
	{
		name: "Attach Files",
		desc: "A paper clip as an object to hold the attached files is a great reference icon. However, like the share icon, it can be replaced by voice control or gesture interaction. To be smarter in online communication, attached files should be done stilly.",
		alt: "attach_file",
	},
	{
		name: "Translate",
		desc: "Same as the language icon can be replaced by voice control. It won't be necessary to be displayed in front of users.",
		alt: "translate",
	},
	{
		name: "Scan",
		desc: "The scan is so popular nowadays. However, it is based on the QR code technology that will be replaced by automatic recognition. On the other hand, if scanning the QR code becomes permanent, people won't need an icon to trigger their actions. When they see a legend, they immediately know what to do.",
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
		alt: "settings",
	},
	{
		name: "Desktop",
		desc: "As tiny and powerful chips make personal and wearable devices possible, the need for desktop computers is decreasing. There is no use case for the desktop icon unless in the computer/technology museum for exhibiting computer history.",
		Link: "The hyperlink icon, designed for clicking and linking information, may become obsolete as new, more intuitive options emerge. The majority job for the link icon is to provide a attach option for other pieces of information. The hyperlink may disappear when users use more intuitive options like a button or the object itself. This may make the link icon either lose its meaning or become extinct.",
		alt: "desktop",
	},
	{
		name: "Link",
		desc: "The hyperlink icon, designed for clicking and linking information, may become obsolete as new, more intuitive options emerge. The majority job for the link icon is to provide a attach option for other pieces of information. The hyperlink may disappear when users use more intuitive options like a button or the object itself. This may make the link icon either lose its meaning or become extinct.",
		alt: "link",
	},
	{
		name: "Thermometer",
		desc: "A thermometer is an obsolete object becoming less commonly seen in daily life. The icon is a resemblance icon (Pictograms) to represent the oldest alcohol or mercury thermometer. The digital number replaced the tube, and people read the number directly. When the object loses its function, the pictograms also forfeit its meaning.",
		alt: "thermometer",
	},
	{
		name: "Print",
		desc: "The print icon was designed based on the home office printer. Although people are using it. Less print-out documents are required because of environmental considerations. The digital trend also leads to the none paper environment for the next generation.",
		alt: "print",
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
	var compensation = 0;
	// var compensation = $(window).height() / 2;
	// calculate where the sections start
	var second = $(".second").offset().top - compensation + 100;
	var third = $(".third").offset().top - compensation;
	var fourth = $(".fourth").offset().top - compensation;
	var footer = $("footer").offset().top - compensation;
	$(document).scroll(function () {
		//hide all tooltips
		$(".img_tooltip").hide();
		$(".description_tooltip").hide();

		var scrollPos = $(document).scrollTop();
		if (scrollPos >= second && scrollPos < third) {
			$(".section-title-underlay").text("UNIVERSAL ICON");
			$(".section-detail-underlay").text(
				"Highlighted icons are universal icons recognized by most people from many UX/UI research sources. This identity shows their vitality, and it means they may exist longer than other icons."
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
			$(".section-title-underlay").text("SKEUOMORPHISM");
			$(".section-detail-underlay").text(
				"Same as floppy disk icon, these icons share the same characteristic with their own reasons."
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
			$(".section-detail-underlay").text(
				"AI is already replace the magnifier icon and has been adapt to our search habit. In the future, we may see magnifier icon less often. The highlighted icons has the same fate as magnifier icon."
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
				$(".section-detail-underlay").text("");
			$(".iconGrid").empty();
			currentStatus = "";
		}
	}); // close scroll function
}); // close document ready
