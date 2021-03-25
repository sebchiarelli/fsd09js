const checkNumber = (number) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(number)) {
				reject(new Error(`${number} n'est pas un nombre`));
				return;
			}
			resolve(number);
		}, 1000);
	});
};
const add5Numbers = async () => {
	try {
		let sum = await checkNumber(1);
		sum = await checkNumber(sum + "coucou");
		sum = await checkNumber(sum + 3);
		sum = await checkNumber(sum + 4);
		sum = await checkNumber(sum + 5);
		//console.log(sum);
		return sum;
	} catch (e) {
		console.log(`ERREUR: ${e.message}`);
		// reforcer une erreur pour la promesse globale renvoyée par la fonction échoue à son tour
		throw new Error("erreur dans la chaine de promesses");
	}
};

/* Attention : une fonction async retourne toujours une promesse
   Ici depuis le code principal je rebascule sur la syntaxe then pour attendre la résolution de cette promesse
   et logger la valeur de résolution */
add5Numbers()
	.then((res) => console.log(res))
	.catch((err) => console.log(`ERREUR PROMESSE GLOBALE: ${err.message}`));
