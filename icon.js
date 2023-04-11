// const { text } = require("express");

let canvas;
function setup() {
	canvas = document.getElementById("myCanvas");
	var rander = createCanvas(windowWidth, 600);
	rander.parent("canvas-container");
	// resizeCanvas(windowWidth, 800);
	rectMode(CENTER);
	ellipseMode(CENTER);
	colorMode(HSL);
}

function draw() {
	background("#f7f7f7");
	var left = 20;
	var top = 20;
	var gap = 320;
	drawBlock(left, top, windowWidth / 50, 30);

	fill("#05171b");
	textSize(72);
	textStyle(BOLD);
	textFont("Mulish");
	text("The Future History Of Icon", 120, height - 300);

	// stroke("#fff");
	// strokeWeight(6);
}

// drawBlock draws a a grid of animated shapes
// left: left side of grid in pixels
// top: top side of grid in pixels
// cols: colCount of animated shapes
// rows: rowCount of animated shapes

function drawBlock(left, top, colCount, rowCount) {
	push();
	translate(left, top);
	for (var x = 0; x < colCount; x++) {
		for (var y = 0; y < rowCount; y++) {
			noStroke();
			fill(
				random(frameCount / 2 + 360),
				88,
				65

				// noise(frameCount / 100 + x * colCount + y) * 100,
				// noise(frameCount / 100 + x * colCount + y) * 100
			);
			rect(
				80 * x,
				80 * y,
				noise(frameCount / 10 + x * colCount + y) * 20, // width
				noise(frameCount / 10 + x * colCount + y) * 20, // height
				noise(frameCount / 50 + x * colCount + y) * 20 // corner radius
			);
		}
	}
	pop();
}
