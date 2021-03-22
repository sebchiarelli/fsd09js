function computeTTC(priceHT, tva = 20) {
	return priceHT * (1 + tva / 100);
}

const phones = [
	{ name: "iphone XX", priceHT: 900 },
	{ name: "iphone X", priceHT: 700 },
	{ name: "iphone B", priceHT: 200 },
];

const pricesTTC = phones.map(/* ... */);

console.log(pricesTTC); // attendu : [1080, 840, 240]
