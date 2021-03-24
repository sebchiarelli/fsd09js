const checkNumber = (number) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(number)) reject(new Error(`${number} n'est pas un nombre`));
			resolve(number);
		}, 1000);
	});
};
const p = checkNumber("coucou");
console.log(p); // à l'instant 0 : promesse à l'état pending
p.then((res) => {
	// une seconde plus tard, lorsque la promesse est résolue...
	console.log(res); // 3
	console.log(p); // promesse à l'état resolved
}).catch((err) => console.log(`ERREUR: ${err.message}`));
