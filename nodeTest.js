// Define the data
var data = [
	"connect",
	"save life",
	"an individual",
	"accessibility",
	"i don't know, maybe accessibility?",
	"i don't know ",
	"hug",
	"giving a hug?",
	"person, help",
	"hug",
	"help,men's toilet",
	"hug",
	"person",
	"hug me",
	"person open arms",
	"?",
	"not sure",
	"person",
	"accessibility ",
	"person",
	"people",
	"i don't know lolll",
	"man",
	"people",
	"accssible",
	"hug",
	"people",
	"adults and kids ",
	"account",
	"more information",
	"people",
	"user",
	"human, hug, community",
	"i did not see the icon before ",
	"hug",
	"person",
	"people ",
	"people",
	"a guy",
	"parental guide?, for kids?",
	"profile",
	"accessibility",
	"not sure, guessing (profile page button), men’s bathroom ",
	"i don’t know",
	"person, user, friend ",
	"stop ",
	"-",
	"不知道😂 no idea",
	"little man",
	"person",
	"team?",
	"no idea",
	"夜色下的人、陽光下的人 person",
	"gymnastics",
	"ballet stand",
	"user ",
	"person",
	"potentially accessibility but usually see with a circle",
	"person, represents user,profile",
	"person",
	"person",
	"person? hug?",
	"profile",
	"-",
	"i don't know",
	"hug",
	"i don't know",
	"accessibility",
	"accessibility?",
	"child",
	"hug",
	"hug",
	"child? parent?",
	"accessibility",
	"? ",
	"safe space",
	"human",
	"all the things, forum of people, hugz",
	"hug?",
	"hug",
	"i don't know",
	"child",
	"person",
	"people",
];

// Define a dictionary to keep track of the word count
var count = {};

// Loop through the data and count the number of times each word appears
data.forEach(function (word) {
	if (count[word]) {
		count[word]++;
	} else {
		count[word] = 1;
	}
});

// Define the width and height of the SVG element
var width = 600;
var height = 400;

// Define the color scale for the nodes
var color = d3.scaleOrdinal(d3.schemeCategory10);

// Define the force simulation
var simulation = d3
	.forceSimulation()
	.force(
		"link",
		d3.forceLink().id(function (d) {
			return d.id;
		})
	)
	.force("charge", d3.forceManyBody().strength(-100))
	.force("center", d3.forceCenter(width / 2, height / 2));

// Create the SVG element
var svg = d3
	.select("body")
	.append("svg")
	.attr("width", width)
	.attr("height", height);

// Create the nodes from the word count dictionary
var nodes = d3.entries(count).map(function (d) {
	return {
		id: d.key,
		count: d.value,
	};
});

// Create the links between the nodes
var links = d3.range(nodes.length - 1).map(function (d) {
	return {
		source: d,
		target: d + 1,
	};
});

// Create the link elements
var link = svg.selectAll(".link").data(links);
