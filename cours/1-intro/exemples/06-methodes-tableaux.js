const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const powerNumbers = numbers.map((number) => number ** 2);
// console.log(powerNumbers);
// const filteredPowerNumbers = powerNumbers.filter((number) => number > 10);
// console.log(filteredPowerNumbers);
// const sumFilteredPowerNumbers = filteredPowerNumbers.reduce((acc, currentValue) => acc + currentValue);
// console.log(sumFilteredPowerNumbers);

const sumFilteredPowerNumbers = numbers
	.map((number) => number ** 2)
	.filter((number) => number > 10)
	.reduce((acc, currentValue) => acc + currentValue);
console.log(sumFilteredPowerNumbers);
