const fs = require("fs");

const getJsonFromFile = (path) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
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
		}, 1000);
	});

getJsonFromFile("./data/dragons.json")
	.then((res) => console.log(res))
	.catch((err) => console.log(`ERREUR: ${err.message}`));
