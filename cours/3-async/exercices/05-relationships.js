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

// TODO Faire une promesse globale qui est résolue quand on obtient les contenus désérialisés des 2 fichiers
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
