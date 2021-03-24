const checkNumber = (number) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(number)) reject(new Error(`${number} n'est pas un nombre`));
			resolve(number);
		}, 1000);
	});
};
checkNumber(1)
	.then((nbA) => {
		console.log(nbA);
		// retourne une promesse qui devrait être résolue par la valeur 3 1sec plus tard
		return checkNumber(nbA + 2);
	})
	.then((nbB) => console.log(nbB));

//.catch((err) => console.log(`ERREUR: ${err.message}`));
