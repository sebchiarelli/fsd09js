function computeTTC(priceHT, tva = 20) {
	return priceHT * (1 + tva / 100);
}

console.log(computeTTC(100)); // TVA de 20% par défaut, donc résultat : 120
console.log(computeTTC(200, 5.5)); // TVA passée explicitement en 2è param, résulat: 211
