const students = [
	{ name: "John Doe", notes: [10, 12, 15], age: 22 },
	{ name: "Jane Doe", notes: [12, 18, 11], age: 21 },
];

// copie de référence : firstStudent et students[0] font référence au même objet
const firstStudentRef = students[0];

// "shallow copy" : copie indépendante (mais avec des limites : on garde des copies de références des objets et tableaux imbriqués)
const firstStudentShallow = { ...students[0] };

// "deep copy" : plusieurs stratégies
// 1: vous connaissez précisément la structure de l'objet, vous écrivez un script spécifique (au delà de 3 niveaux d'imbrication c'est trop compliqué...)
const firstStudentDeepCopy1 = { ...students[0], notes: [...students[0].notes] };
// 2: bricolo mais peut dépanner : sérialiser l'objet complet au format JSON, désérialiser
const firstStudentDeepCopy2 = JSON.parse(JSON.stringify(students[0]));
// 3: utiliser des librairies qui contiennent des fonctions de deep copy (ex: lodash)

students[0].name = "Jean Michel";
students[0].notes.push(20);

console.log(students[0]);
console.log(firstStudentRef);
console.log(firstStudentShallow);
