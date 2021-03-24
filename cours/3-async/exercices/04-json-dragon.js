const fs = require("fs");

const getJsonFromFile = (path) =>
	new Promise((resolve, reject) => {
		//setTimeout(() => {
		fs.readFile(path, { encoding: "utf8" }, (err, data) => {
			// impossible de lire le fichier
			if (err) {
				reject(err);
				return;
			}
			// success
			// JSON.parse permet de transformer un fichier JSON en un objet JSON JS
			//console.log("File data:", JSON.parse(data));
			resolve(JSON.parse(data));
		});
		//}, 1000);
	});

getJsonFromFile("./data/dragons.json")
	.then(({ dragons }) => {
		console.log(dragons);
		// Trier par âge décroissant
		dragons.sort((a, b) => b.age - a.age);
		console.log(dragons);
		// nom du plus vieux
		console.log(dragons[0].name); // Dalinda
		// nom du plus jeune
		console.log(dragons[dragons.length - 1].name); // Nuri
	})
	.catch((err) => console.log(`ERREUR: ${err.message}`));
