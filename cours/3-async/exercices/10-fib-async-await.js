const fib = (i = 1, j = 1) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([j, i + j]);
		}, 500);
	});

/**
 * Fonction asynchrone qui résout et affiche successivement les nombres de la suite de fibonacci, indéfiniment
 */

const getFibSuite = async () => {};

getFibSuite();
