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
		} else if (scrollPos >= third && scrollPos < fourth) {
			$(".section-title-underlay").text("SKEUOMORPHISM");
		} else if (scrollPos >= fourth && scrollPos < footer) {
			$(".section-title-underlay").text("AI & NEW TECHNOLOGIES");
		} else {
			$(".section-title-underlay").text("");
		}
	}); // close scroll function
}); // close document ready
