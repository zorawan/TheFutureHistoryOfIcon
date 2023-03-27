var images = [
	{ src: "listIcons/accessibility.svg", alt: "accessibility" },
	{ src: "listIcons/account.svg", alt: "account" },
	{ src: "listIcons/attach_file.svg", alt: "attach file" },
	{ src: "listIcons/bluetooth.svg", alt: "bluetooth" },
	{ src: "listIcons/bookmark.svg", alt: "bookmark" },
	{ src: "listIcons/comment.svg", alt: "comment" },
	{ src: "listIcons/database.svg", alt: "database" },
	{ src: "listIcons/desktop.svg", alt: "desktop" },
	{ src: "listIcons/edit.svg", alt: "edit" },
	{ src: "listIcons/event.svg", alt: "event" },
	{ src: "listIcons/folder.svg", alt: "folder" },
	{ src: "listIcons/hourglass.svg", alt: "hourglass" },
	{ src: "listIcons/image.svg", alt: "image" },
	{ src: "listIcons/language.svg", alt: "language" },
	{ src: "listIcons/link.svg", alt: "link" },
	{ src: "listIcons/memory.svg", alt: "memory" },
	{ src: "listIcons/more.svg", alt: "more" },
	{ src: "listIcons/notifications.svg", alt: "notifications" },
	{ src: "listIcons/phone_callback.svg", alt: "phone callback" },
	{ src: "listIcons/power.svg", alt: "power" },
	{ src: "listIcons/print.svg", alt: "print" },
	{ src: "listIcons/refresh.svg", alt: "refresh" },
	{ src: "listIcons/savings.svg", alt: "savings" },
	{ src: "listIcons/scan.svg", alt: "scan" },
	{ src: "listIcons/sd_card.svg", alt: "sd card" },
	{ src: "listIcons/settings.svg", alt: "settings" },
	{ src: "listIcons/share.svg", alt: "share" },
	{ src: "listIcons/star.svg", alt: "star" },
	{ src: "listIcons/thermometer.svg", alt: "thermometer" },
	{ src: "listIcons/translate.svg", alt: "translate" },
];

// Create a variable to hold the concatenated img tags
var imgs = "";

// Loop through the array of images and add each one to the imgs variable
for (var i = 0; i < images.length; i++) {
	// Use template literals to create the img tag
	imgs += `<img src="${images[i].src}" alt="${images[i].alt}" class="my-svg"/>`;
}
// Concatenate the img tags together

$(document).ready(function () {
	$(document).scroll(function () {
		// calculate half the viewport
		var compensation = $(window).height() / 2;
		// calculate where the sections start
		var home = $(".universial").offset().top - compensation;
		var second = $(".skeuomorphism").offset().top - compensation;
		var third = $(".ai").offset().top - compensation;
		var fourth = $(".fourth").offset().top - compensation;
		// var knowmore = $(".know-more-about").offset().top - compensation;
		var footer = $("footer").offset().top - compensation;
		var scrollPos = $(document).scrollTop();

		// Apply text changes
		if (scrollPos >= second && scrollPos < third) {
			$(".section-title-underlay").text("UNIVERSAL ICON");
			$(".section-detail-underlay").text(
				"Highlighted icons are universal icons recognized by most people from many UX/UI research sources. This identity shows their vitality, and it means they may exist longer than other icons."
			);
			$(".iconGrid").empty();
			$(".iconGrid").css("position", "fixed");
			$(".iconGrid").append(imgs);
		} else if (scrollPos >= third && scrollPos < fourth) {
			$(".section-title-underlay").text("SKEUOMORPHISM");
			$(".section-detail-underlay").text(
				"Same as floppy disk icon, these icons share the same characteristic with their own reasons."
			);
			$(".iconGrid").empty();
			$(".iconGrid").css("position", "fixed");
			$(".iconGrid").append(imgs);
		} else if (scrollPos >= fourth && scrollPos < footer) {
			$(".section-title-underlay").text("AI & NEW TECHNOLOGIES");
			$(".section-detail-underlay").text(
				"AI is already replace the magnifier icon and has been adapt to our search habit. In the future, we may see magnifier icon less often. The highlighted icons has the same fate as magnifier icon."
			);
			$(".iconGrid").empty();
			$(".iconGrid").css("position", "fixed");
			$(".iconGrid").append(imgs);
		} else {
			$(".section-title-underlay").text("") &&
				$(".section-detail-underlay").text("");
			// $(".iconGrid").empty();
			$(".iconGrid").css("position", "fixed");
			$(".iconGrid").append(imgs);
		}
	}); // close scroll function
}); // close document ready
