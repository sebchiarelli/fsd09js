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
		const namedRelationships = relationships.map((rel) => ({
			name: dragons.find((d) => d.id === rel.id).name,
			friendNames: rel.relation.map(
				(friendId) => dragons.find((d) => d.id === friendId).name
			),
		}));
		console.log(namedRelationships);
	})
	.catch((err) => console.log(`ERREUR: ${err.message}`));

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
