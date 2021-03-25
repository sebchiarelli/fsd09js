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
	const newMatrix = [];
	// Pour chaque sous-tableau
	for (const line of matrix) {
		// Filtrer les valeurs numériques, s'en servir pour calculer leur moyenne
		const nums = line.filter((val) => val !== "None");
		const avg =
			Math.round((100 * nums.reduce((acc, curr) => acc + curr)) / nums.length) /
			100;
		// Générer une version "transformée" du sous-tab où les "None" sont remplacés par la moyenne
		const newLine = line.map((val) => (val === "None" ? avg : val));

		// Ajouter ce sous-tab transformé dans la nouvelle matrice
		newMatrix.push(newLine);
	}
	console.log(newMatrix);
});
