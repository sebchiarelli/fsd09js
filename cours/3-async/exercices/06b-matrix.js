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
	// La procédure à appliquer pour chaque ligne n'est pas triviale
	// on n'a pas spécialement intérêt à remplacer for...of par la méthode map de Array
	// ...mais on peut le faire

	const newMatrix = matrix.map((line) => {
		// Filtrer les valeurs numériques, s'en servir pour calculer leur moyenne
		const nums = line.filter((val) => val !== "None");
		const avg =
			Math.round((100 * nums.reduce((acc, curr) => acc + curr)) / nums.length) /
			100;
		// Générer une version "transformée" du sous-tab où les "None" sont remplacés par la moyenne
		return line.map((val) => (val === "None" ? avg : val));
	});

	console.log(newMatrix);
});
