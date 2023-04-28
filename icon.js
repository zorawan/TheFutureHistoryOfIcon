// // const { text } = require("express");

// let canvas;
// function setup() {
// 	canvas = document.getElementById("myCanvas");
// 	var rander = createCanvas(windowWidth, 600, WEBGL);
// 	rander.parent("canvas-container");
// 	rectMode(CENTER);
// 	ellipseMode(CENTER);
// 	colorMode(HSL);
// }

// function draw() {
// 	background("#f7f7f7");
// 	textStyle(BOLD);
// 	textFont("Mulish");
// 	fill("#05171b");
// 	textSize(120);
// 	text("The Future History Of Icon", 200, 200);

// 	drawBlock(0, 0, width / 50, 30);

// 	push();
// 	normalMaterial();
// 	rotateZ(frameCount * 0.1);
// 	rotateX(frameCount * 0.1);
// 	rotateY(frameCount * 0.1);
// 	box(70, 70, 70);
// 	pop();
// }

// // drawBlock draws a a grid of animated shapes
// // left: left side of grid in pixels
// // top: top side of grid in pixels
// // cols: colCount of animated shapes
// // rows: rowCount of animated shapes

// function drawBlock(left, top, colCount, rowCount) {
// 	push();
// 	// Translate to the top-left corner of the canvas
// 	translate(-width / 2, -height / 2);
// 	translate(left, top);
// 	for (var x = 0; x < colCount; x++) {
// 		for (var y = 0; y < rowCount; y++) {
// 			noStroke();
// 			fill(random(360), 88, 65);
// 			rect(
// 				80 * x,
// 				80 * y,
// 				noise(frameCount / 10 + x * colCount + y) * 20, // width
// 				noise(frameCount / 10 + x * colCount + y) * 20, // height
// 				noise(frameCount / 50 + x * colCount + y) * 20 // corner radius
// 			);
// 		}
// 	}
// 	pop();
// }
const fontSize = 70,
	scaleRate = 6,
	message = "ICONS。",
	inpactRange = 120;
let canvas;
let rander;
let textData = [];
let dotsCordinate = [];
let particles = [];

class Particle {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.r = 3;
		this.originalX = x;
		this.originalY = y;
		this.color = Math.floor(Math.random() * 360);
		this.density = Math.random() * 30 + 10;
		// console.log(this.fillStyle);
	}

	draw() {
		fill(this.color, 100, 70);
		circle(this.x, this.y, this.r * 2);
		// if(Math.abs(this.x - this.originalX) > 400){
		//     ctx.beginPath();
		//     ctx.moveTo(this.x, this.y);
		//     ctx.lineTo(this.originalX, this.originalY);
		//     ctx.strokeStyle = this.fillStyle;
		//     ctx.stroke();
		// }
	}

	update() {
		let distanceFromMouse = Math.sqrt(
			(this.x - mouseX) ** 2 + (this.y - mouseY) ** 2
		);
		let distanceToOrigin = Math.sqrt(
			(this.originalX - this.x) ** 2 + (this.originalY - this.y) ** 2
		);

		if (distanceFromMouse < inpactRange) {
			let repulsionAngle = Math.atan2(this.y - mouseY, this.x - mouseX);
			let repulsionForce =
				((inpactRange - distanceFromMouse) / inpactRange) * this.density; // < 1
			this.x += Math.cos(repulsionAngle) * repulsionForce;
			this.y += Math.sin(repulsionAngle) * repulsionForce;
			// this.x -= Math.cos(repulsionAngle) * repulsionForce;
			// this.y -= Math.sin(repulsionAngle) * repulsionForce;
		} else {
			let attractionAngle = Math.atan2(
				this.originalY - this.y,
				this.originalX - this.x
			);
			let attractionForce = Math.abs(distanceToOrigin) / this.density;
			this.x += Math.cos(attractionAngle) * attractionForce;
			this.y += Math.sin(attractionAngle) * attractionForce;
		}
		// if(this.x !== this.originalX){
		//     this.x += Math.cos(attractionAngle) * attractionForce;
		// }
		// if(this.y !== this.originalY){
		//     this.y += Math.sin(attractionAngle) * attractionForce;
		// }
	}
}

// **************************************

// function preload() {
// }

// function windowResized() {
// 	resizeCanvas(window.innerWidth, window.innerHeight);
// 	setup();
// 	draw();
// }

function setup() {
	frameRate(30);
	canvas = document.getElementById("myCanvas");
	rander = createCanvas(window.innerWidth, 600);
	rander.parent("canvas-container");
	colorMode(HSL);
	noStroke();
	background("#f7f7f7");
	fill("#21383E");
	textFont("Nunito");
	textFont("sans-serif");
	textStyle(BOLD);
	textSize(fontSize);
	textAlign(LEFT, TOP);
	textData = getTextData(message);
	// console.log(textData);
	dotCordinate = getCordinates();
	particles = createParticles(scaleRate, 50, 50);
	// console.log(dotsCordinate)
	// console.log(particles)
}

function draw() {
	// noLoop();
	background("#f7f7f7");
	updating();
	drawParticles();
	fill("#05171b");
	textFont("Nunito", [60]);
	textStyle(BOLD);
	text("The Future History Of", window.innerWidth / 2 - 300, 200);
}

function mouseDragged() {}

function getTextData(message) {
	const data = [];
	text(message, 0, 0); // draw once and get data
	for (let y = 0; y < textAscent(message); y++) {
		let row = [];
		for (let x = 0; x < textWidth(message); x++) {
			row.push(rander.get(x, y)); // get data, [r, g, b, a]
		}
		data.push(row);
	}
	return data;
}

function getCordinates() {
	const cordinate = [];
	for (let y = 0; y < textData.length; y++) {
		let row = [];
		for (let x = 0; x < textData[0].length; x++) {
			let red = textData[y][x][0]; // the data equals [0, 0, 0, 255] or [255, 255,255, 255]. So pick up red value and judge
			if (red < 128) {
				// if < 128, regard the pixel as 'black'(1);
				row.push(1);
			} else {
				row.push(0);
			}
		}
		dotsCordinate.push(row);
	}
	return cordinate;
}

function createParticles(scaleRate, marginX, marginY) {
	const particles = [];
	for (let y = 0; y < dotsCordinate.length; y++) {
		for (let x = 0; x < dotsCordinate[0].length; x++) {
			if (dotsCordinate[y][x] === 1) {
				let particle = new Particle(
					x * scaleRate + marginX,
					y * scaleRate + marginY
				);
				particles.push(particle);
			}
		}
	}
	return particles;
}

function drawParticles() {
	particles.forEach((p) => {
		p.draw();
	});
}

function updating() {
	particles.forEach((p) => {
		p.update();
	});
}
