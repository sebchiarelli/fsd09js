function sumTTCPrices(prixHT1, prixHT2, prixHT3, TVA = 20) {
	return (prixHT1 + prixHT2 + prixHT3) * (1 + TVA / 100);
}

const pricesHT = [100, 200, 55];

//console.log(sumTTCPrices()); // calculer la somme avec une TVA par défaut de 20%, res 426
//console.log(); // avec une TVA de 5.5%, res 374,525
