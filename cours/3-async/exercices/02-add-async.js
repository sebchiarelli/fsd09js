// Fonction un peu bête qui permet de vérifier, au bout d'une seconde, si on lui a bien passé un nombre en 1er argument...
// Si ce n'est pas le cas : elle déclenche une erreur
// Si c'est le cas : elle envoie ce nombre à la fonction callback passée en 2nd argument
const checkNumber = (number, callback) => {
	setTimeout(() => {
		if (isNaN(number)) throw new Error(`ERREUR: ${number} n'est pas un nombre`);
		callback(number);
	}, 1000);
};

// CALLBACK HELL ! L'imbrication de l'enfer ^^'
// Chaque nouvelle étape asynchrone dépend du résultat de la précédente
// En ES5, ça se traduit par des fonctions callback imbriquées et une surindentation
// C'est un point qu'on améliorera avec les syntaxes ES6 et ES6+
checkNumber(1, function (nbA) {
	checkNumber(nbA + 2, function (nbB) {
		checkNumber(nbB + 3, function (nbC) {
			checkNumber(nbC + 4, function (nbD) {
				checkNumber(nbD + 5, function (nbE) {
					console.log(nbE);
				});
			});
		});
	});
});
