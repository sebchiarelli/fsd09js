const fs = require("fs");

fs.readFile("./data/dragons.json", { encoding: "utf8" }, (err, data) => {
	// impossible de lire le fichier
	if (err) {
		console.log("File read failed:", err);
		return;
	}
	// success
	// JSON.parse permet de transformer un fichier JSON en un objet JSON JS
	console.log("File data:", JSON.parse(data));
});
