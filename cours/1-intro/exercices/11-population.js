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

// [TODO] Récupérer toutes les longueurs de prénom dispo dans le tableau
// Algo : générer un tableau des longueurs [3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 9]
// se débarrasser des doublons en l'envoyant au constructeur de Set

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
