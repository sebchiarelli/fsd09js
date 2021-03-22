let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((acc, currentValue) => acc + currentValue);
console.log(sum);

/*
// retourne la première valeur du tableau en la supprimant du tableau
// numbers.shift();

function accumulator(numbers, acc = 0) {
	// retourner la première valeur du tableau, la supprimer du tableau, l'additionner à l'accumulateur
	acc += numbers.shift();
	//console.log(acc);
	//console.log(numbers);
	// Une condition d'arrêt et retourner la somme des valeurs du tableau
	// dans la fonction on ré-appelle la fonction elle-même, en lui passant le nouveau tableau et la nouvelle valeur de l'accumulateur
	if (numbers.length > 0) {
		return accumulator(numbers, acc);
	} else {
		return acc;
	}
}

console.log(accumulator(numbers)); // doit retourner 55
*/
