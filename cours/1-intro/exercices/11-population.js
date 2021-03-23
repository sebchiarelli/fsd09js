const populations = [
	{ id: 0, name: "Alan" },
	{ id: 1, name: "Albert" },
	{ id: 2, name: "Jhon" },
	{ id: 3, name: "Brice" },
	{ id: 4, name: "Alexendra" },
	{ id: 5, name: "Brad" },
	{ id: 6, name: "Carl" },
	{ id: 7, name: "Dallas" },
	{ id: 8, name: "Dennis" },
	{ id: 9, name: "Edgar" },
	{ id: 10, name: "Erika" },
	{ id: 11, name: "Isaac" },
	{ id: 12, name: "Ian" },
];

// Trier les personnes par longueur de prénom
populations.sort((a, b) => a.name.length - b.name.length);

// Ajouter la propriété lenName à chaque objet
for (const person of populations) {
	person.lenName = person.name.length;
}

console.log(populations);

// Récupérer toutes les longueurs de prénom dispo dans le tableau
// Algo : générer un tableau des longueurs [3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 9]
// se débarrasser des doublons en l'envoyant au constructeur de Set
const lenNames = new Set(populations.map((person) => person.lenName));
console.log(lenNames);

// Algo pour tableau de tableaux, non optimisé
/*
const groupedPopulation = [];
for (const lenName of lenNames) {
	const filteredPersons = [];
	for (const person of populations) {
		if (person.lenName === lenName) {
			filteredPersons.push(person);
		}
	}
	groupedPopulation.push(filteredPersons);
}
console.log(groupedPopulation);
*/

// Même algo, optimisé avec filter (à mon avis version optimale)
const groupedPopulation = [];
for (const lenName of lenNames) {
	const filteredPersons = populations.filter(
		(person) => person.lenName === lenName
	);
	groupedPopulation.push(filteredPersons);
}
console.log(groupedPopulation);

// Même algo avec map (hyper succint mais moins lisible !)
/*
const groupedPopulation = [...lenNames].map((lenName) =>
	populations.filter((person) => person.lenName === lenName)
);
console.log(groupedPopulation);
*/

// Algo pour le tableau de tableaux clé/valeur
const groupedPopulationV2 = [];
for (const lenName of lenNames) {
	const filteredPersons = populations.filter(
		(person) => person.lenName === lenName
	);
	groupedPopulationV2.push([lenName, filteredPersons]);
}
console.log(groupedPopulationV2);

// Algo pour une map

// v1 : on peut passer au constructeur de Map un tableau de tableaux clé/valeur
// const mapPopulation = new Map(groupedPopulationV2);
// console.log(mapPopulation);

// v2 'from scratch'
const mapPopulation = new Map();
for (const lenName of lenNames) {
	const filteredPersons = populations.filter(
		(person) => person.lenName === lenName
	);
	mapPopulation.set(lenName, filteredPersons);
}
console.log(mapPopulation);

/* STRUCTURES DE DONNEES POSSIBLES */

// 1 Tableau de tableaux
/*
[
  [
    { id: 12, name: 'Ian' },
  ],
  [
    { id: 0, name: 'Alan' },
    { id: 2, name: 'Jhon' },
    { id: 5, name: 'Brad' },
    { id: 6, name: 'Carl' },
  ],
  [
    { id: 3, name: 'Brice' },
    { id: 9, name: 'Edgar' },
    { id: 10, name: 'Erika' },
    { id: 11, name: 'Isaac' },
  ],
  [
    { id: 1, name: 'Albert' },
    { id: 7, name: 'Dallas' },
    { id: 8, name: 'Dennis' },
  ],
  [
    { id: 4, name: 'Alexendra' }
  ]
]
*/

// 2 Tableau de tableaux "clé/valeur"

/*
[
  [
    3,
    [
      { id: 12, name: 'Ian' },
    ],
  ],
  [
    4,
    [
      { id: 0, name: 'Alan' },
      { id: 2, name: 'Jhon' },
      { id: 5, name: 'Brad' },
      { id: 6, name: 'Carl' },
    ],
  ],
  [
    5,
    [
      { id: 3, name: 'Brice' },
      { id: 9, name: 'Edgar' },
      { id: 10, name: 'Erika' },
      { id: 11, name: 'Isaac' },
    ],
  ],
  [
    6,
    [
      { id: 1, name: 'Albert' },
      { id: 7, name: 'Dallas' },
      { id: 8, name: 'Dennis' },
    ],
  ]
  [
    9,
    [
      { id: 4, name: 'Alexendra' }
    ]
  ]
]
*/

// 3 Objet Map avec les longueurs en clé, les tableaux de personnes en valeurs
/*
Map(
  3 => [
    { id: 12, name: 'Ian' },
  ],
  4 => [
    { id: 0, name: 'Alan' },
    { id: 2, name: 'Jhon' },
    { id: 5, name: 'Brad' },
    { id: 6, name: 'Carl' },
  ],
  5 => [
    { id: 3, name: 'Brice' },
    { id: 9, name: 'Edgar' },
    { id: 10, name: 'Erika' },
    { id: 11, name: 'Isaac' },
  ],
  6 => [
    { id: 1, name: 'Albert' },
    { id: 7, name: 'Dallas' },
    { id: 8, name: 'Dennis' },
  ],
  9 => [
    { id: 4, name: 'Alexendra' }
  ]
)
*/
