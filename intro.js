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
	{ src: "listIcons/hourglass.svg", alt: "hourglass", class: "ske ai" },
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
	{ src: "listIcons/usb.svg", alt: "usb" },
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
// for (var i = 0; i < images_g.length; i++) {
// 	imgs_g += `<img src="${images_g[i].src}" alt="${images_g[i].alt}"  onmouseenter="showImgTip(this)"/>`;
// }
for (var i = 0; i < images_g.length; i++) {
	imgs_g += `<img src="${images_g[i].src}" alt="${images_g[i].alt}"  
			   onmouseenter="showImgTip(this)"
			   onmouseleave="hideImgTip()"/>`;
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
var tooltipNames = ["phone_callback", "hourglass", "bluetooth"];
// Function to show the tooltip on hover
function showImgTip(img) {
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
				}.png" class="${tooltipImages[j]}"/>`;
			}
		}
		$(".img_tooltip").html(tooltipImgs);
		var parentOffset = $(this).offset();
		var relX = e.pageX - parentOffset.left;
		var relY = e.pageY - parentOffset.top;
		return $(".img_tooltip").css("left", "relX", "top", "relY");
	} else if (currentStatus == "ai") {
		var altText = $(img).attr("alt");
		var imageObj = images.find(function (img) {
			return img.alt === altText;
		});
		var nameT = "";

		for (var j = 0; j < tooltipNames.length; j++) {
			if (imageObj.alt === tooltipNames[j]) {
				nameT += `<p> ${tooltipNames[j]}  <p/>`;
			}
		}
		console.log(nameT);
		$(".img_tooltip").html(nameT);
	}
}
function hideImgTip() {
	// Find the existing image tooltip element
	var tooltipImgs = "";
	for (var j = 0; j < tooltipImages.length; j++) {
		if (imageObj.alt === tooltipImages[j]) {
			tooltipImgs += `<img src="${
				"tooltipImages/" + tooltipImages[j]
			}.png" class="${tooltipImages[j]}"/>`;
		}
	}

	// If the tooltip exists, hide it
	if (tooltipImgs) {
		tooltip.style.display = "none";
	}
}

$(document).ready(function () {
	var compensation = $(window).height() / 2;
	// calculate where the sections start
	var second = $(".second").offset().top - compensation;
	var third = $(".third").offset().top - compensation;
	var fourth = $(".fourth").offset().top - compensation;
	var footer = $("footer").offset().top - compensation;
	$(document).scroll(function () {
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
				return $(imgs_g).eq(index);
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
				return $(imgs_g).eq(index);
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
				return $(imgs_g).eq(index);
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
