const textWrapper = document.querySelector(".text-wrapper");

function startAnimation() {
	textWrapper.classList.add("move");
}

window.addEventListener("scroll", function () {
	if (window.scrollY > 200) {
		startAnimation();
	}
});
