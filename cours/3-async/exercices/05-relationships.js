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

// Faire une promesse globale qui est résolue quand on obtient les contenus désérialisés des 2 fichiers
Promise.all([
	getJsonFromFile("./data/dragons.json"),
	getJsonFromFile("./data/relationships.json"),
])
	// double destructuring : la valeur de résolution est un tableau à 2 éléments (les valeurs de résolution de chaque promesse de départ)
	// ces 2 éléments sont eux-mêmes des objets dans lesquels une seule propriété nous intéresse (dragons dans le 1er, relationships dans le 2nd)
	.then(([{ dragons }, { relationships }]) => {
		console.log(dragons);
		console.log(relationships);
	})
	.catch((err) => console.log(`ERREUR: ${err.message}`));

// Après résolution, créer une structure de données contenant des relations nommées

/* Exemple de structure souhaitée */
/*
  [
		{
			name: "Common Welsh Green",
			friendNames: ["Hebridean Black", "Kayda"]
		},
		{
      name : ....,
      friendNames: [......]
		},
    .......
	]
*/
