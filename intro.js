var images = [
	{ src: "listIcons/accessibility.svg", alt: "accessibility", class: "ske" },
	{ src: "listIcons/account.svg", alt: "account", class: "uni" },
	{ src: "listIcons/attach_file.svg", alt: "attach file", class: "ai_sku" },
	{ src: "listIcons/bluetooth.svg", alt: "bluetooth", class: "ske" },
	{ src: "listIcons/bookmark.svg", alt: "bookmark", class: "ske" },
	{ src: "listIcons/comment.svg", alt: "comment", class: "ske" },
	{ src: "listIcons/database.svg", alt: "database", class: "ske" },
	{ src: "listIcons/desktop.svg", alt: "desktop", class: "ske" },
	{ src: "listIcons/edit.svg", alt: "edit", class: "ske" },
	{ src: "listIcons/event.svg", alt: "event", class: "ske" },
	{ src: "listIcons/folder.svg", alt: "folder", class: "ske" },
	{ src: "listIcons/hourglass.svg", alt: "hourglass", class: "ske" },
	{ src: "listIcons/image.svg", alt: "image", class: "ske" },
	{ src: "listIcons/language.svg", alt: "language", class: "ske" },
	{ src: "listIcons/link.svg", alt: "link", class: "ske" },
	{ src: "listIcons/memory.svg", alt: "memory", class: "ske" },
	{ src: "listIcons/more.svg", alt: "more", class: "ske" },
	{ src: "listIcons/notifications.svg", alt: "notifications", class: "ske" },
	{ src: "listIcons/phone_callback.svg", alt: "phone callback", class: "ske" },
	{ src: "listIcons/power.svg", alt: "power", class: "ske" },
	{ src: "listIcons/print.svg", alt: "print", class: "ske" },
	{ src: "listIcons/refresh.svg", alt: "refresh", class: "ske" },
	{ src: "listIcons/savings.svg", alt: "savings", class: "ske" },
	{ src: "listIcons/scan.svg", alt: "scan", class: "ske" },
	{ src: "listIcons/sd_card.svg", alt: "sd card", class: "ske" },
	{ src: "listIcons/settings.svg", alt: "settings", class: "ske" },
	{ src: "listIcons/share.svg", alt: "share", class: "ske" },
	{ src: "listIcons/star.svg", alt: "star", class: "ske" },
	{ src: "listIcons/thermometer.svg", alt: "thermometer", class: "ske" },
	{ src: "listIcons/translate.svg", alt: "translate", class: "ske" },
];

// Create a variable to hold the concatenated img tags
var imgs = "";

// Loop through the array of images and add each one to the imgs variable
for (var i = 0; i < images.length; i++) {
	// Use template literals to create the img tag
	imgs += `<img src="${images[i].src}" alt="${images[i].alt}" class="ske"/>`;
}

var images_g = [
	{ src: "listIcons/accessibility_g.svg", alt: "accessibility", class: "ske" },
	{ src: "listIcons/account_g.svg", alt: "account", class: "uni" },
	{ src: "listIcons/attach_file_g.svg", alt: "attach file", class: "ai_sku" },
	{ src: "listIcons/bluetooth_g.svg", alt: "bluetooth", class: "ske" },
	{ src: "listIcons/bookmark_g.svg", alt: "bookmark", class: "ske" },
	{ src: "listIcons/comment_g.svg", alt: "comment", class: "ske" },
	{ src: "listIcons/database_g.svg", alt: "database", class: "ske" },
	{ src: "listIcons/desktop_g.svg", alt: "desktop", class: "ske" },
	{ src: "listIcons/edit_g.svg", alt: "edit", class: "ske" },
	{ src: "listIcons/event_g.svg", alt: "event", class: "ske" },
	{ src: "listIcons/folder_g.svg", alt: "folder", class: "ske" },
	{ src: "listIcons/hourglass_g.svg", alt: "hourglass", class: "ske" },
	{ src: "listIcons/image_g.svg", alt: "image", class: "ske" },
	{ src: "listIcons/language_g.svg", alt: "language", class: "ske" },
	{ src: "listIcons/link_g.svg", alt: "link", class: "ske" },
	{ src: "listIcons/memory_g.svg", alt: "memory", class: "ske" },
	{ src: "listIcons/more_g.svg", alt: "more", class: "ske" },
	{ src: "listIcons/notifications_g.svg", alt: "notifications", class: "ske" },
	{
		src: "listIcons/phone_callback_g.svg",
		alt: "phone callback",
		class: "ske",
	},
	{ src: "listIcons/power_g.svg", alt: "power", class: "ske" },
	{ src: "listIcons/print_g.svg", alt: "print", class: "ske" },
	{ src: "listIcons/refresh_g.svg", alt: "refresh", class: "ske" },
	{ src: "listIcons/savings_g.svg", alt: "savings", class: "ske" },
	{ src: "listIcons/scan_g.svg", alt: "scan", class: "ske" },
	{ src: "listIcons/sd_card_g.svg", alt: "sd card", class: "ske" },
	{ src: "listIcons/settings_g.svg", alt: "settings", class: "ske" },
	{ src: "listIcons/share_g.svg", alt: "share", class: "ske" },
	{ src: "listIcons/star_g.svg", alt: "star", class: "ske" },
	{ src: "listIcons/thermometer_g.svg", alt: "thermometer", class: "ske" },
	{ src: "listIcons/translate_g.svg", alt: "translate", class: "ske" },
];

var imgs_g = "";
for (var i = 0; i < images_g.length; i++) {
	// Use template literals to create the img tag
	imgs_g += `<img src="${images_g[i].src}" alt="${images[i].alt}"/>`;
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

		// Apply changes
		if (scrollPos >= second && scrollPos < third) {
			$(".section-title-underlay").text("UNIVERSAL ICON");
			$(".section-detail-underlay").text(
				"Highlighted icons are universal icons recognized by most people from many UX/UI research sources. This identity shows their vitality, and it means they may exist longer than other icons."
			);
			$(".iconGrid").empty();
			$(".iconGrid").css("position", "fixed");
			$(".iconGrid").append(imgs);
			$(".ske").replaceWith(imgs_g);
		} else if (scrollPos >= third && scrollPos < fourth) {
			$(".section-title-underlay").text("SKEUOMORPHISM");
			$(".section-detail-underlay").text(
				"Same as floppy disk icon, these icons share the same characteristic with their own reasons."
			);
			$(".iconGrid").empty();
			$(".iconGrid").css("position", "fixed");
			$(".iconGrid").append(imgs);
			$(".ske").css("fill", "#ffffff");
		} else if (scrollPos >= fourth && scrollPos < footer) {
			$(".section-title-underlay").text("AI & NEW TECHNOLOGIES");
			$(".section-detail-underlay").text(
				"AI is already replace the magnifier icon and has been adapt to our search habit. In the future, we may see magnifier icon less often. The highlighted icons has the same fate as magnifier icon."
			);
			$(".iconGrid").empty();
			$(".iconGrid").css("position", "fixed");
			$(".iconGrid").append(imgs);
			$(".ske").css("fill", "#ff0000");
		} else {
			$(".section-title-underlay").text("") &&
				$(".section-detail-underlay").text("");
			$(".iconGrid").empty();
			$(".iconGrid").css("position", "fixed");
			// $(".iconGrid").append(imgs);
		}
	}); // close scroll function
}); // close document ready

var tooltip = d3
	.select("body")
	.append("div")
	.attr("class", "tooltip")
	.style("opacity", 0);
// Add mouseover event listener to each rect element
d3.selectAll("rect")
	.on("mouseover", function (d) {
		// Set tooltip content and position
		tooltip
			.html("This is a " + d3.select(this).attr("fill") + " rectangle.")
			.style("left", d3.event.pageX + "px")
			.style("top", d3.event.pageY + "px")
			.style("opacity", 1);
	})
	.on("mouseout", function (d) {
		// Hide the tooltip
		tooltip.style("opacity", 0);
	});
