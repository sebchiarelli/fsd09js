const fs = require("fs");

const getJsonFromFile = (path) =>
	new Promise((resolve, reject) => {
		fs.readFile(path, { encoding: "utf8" }, (err, data) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(JSON.parse(data));
		});
	});

getJsonFromFile("./data/matrix.json").then(({ matrix }) => {
	console.log(matrix);
	// Pour chaque sous-tableau

	////// Filtrer les valeurs numériques, s'en servir pour calculer leur moyenne

	////// Générer une version "transformée" du sous-tab où les "None" sont remplacés par la moyenne

	////// Ajouter ce sous-tab transformé dans la nouvelle matrice
});
