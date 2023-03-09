var NounProject = require("the-noun-project"),
	nounProject = new NounProject({
		key: "3408dfacebf94462bd367d1bf329216c",
		secret: "3e8eb6412bbc4361bad1ce154b948911",
	});

nounProject.getIconsByTerm("folder", function (err, data) {
	if (!err) {
		console.log(data.icons.length);
	}
});
