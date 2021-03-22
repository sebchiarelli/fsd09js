# Introduction

JS est un langage de script, orienté objet. Principalement exécuté dans une page Web, on le retrouve aujourd'hui dans d'autres contextes comme : Node.js, MongoDB (on peut programmer des requêtes en JS), ...

JS suit la norme **ECMAScript**, standard que suivent certains langages de script comme Javascript. Cette norme évolue. Les principaux navigateurs Web implémentent ces normes pour le JS.

Une version majeure d'ECMAScript est celle qui a été définie en 2015 : ES2015 que l'on appelle fréquemment ES6 ... Le nom de la version étant déterminé par la dernière version du standard en cours donc ES6 pour 2016 ... Aujourd'hui la dernière version officielle est EMACScript 2020.

Bien que JS soit un langage faiblement typé, le typage est partout...

Le type d'une variable peut changé dans un script, il est déterminé par son contexte d'affectation. La variable **n** est déterminé par JS de type number lors de son assignation. Nous utilisons l'opérateur typeof pour déterminer le type d'une variable.

```js
let n = 10;
console.log(typeof n); // number

// ré-assignation
n = "Hello";

console.log(typeof n); // string
```

Dans l'exemple ci-dessus le type de la variable n a changé, n est passé du type number à string.

Notons que lorsque vous définissez une variable sans lui affecter une valeur particulière, celle-ci est de type "undefined" :

```js
let username;
console.log(typeof username); // undefined
```

## Les différents types JS

On distingue les types suivants en Javascript. Attention tous les types primitifs définissent des valeurs immuables (que l'on ne peut modifier) :

### 1. Types primitifs

- boolean

```js
// On ne peut modifier un "true" ...
let flag = true;
```

- null

```js
// On ne peut modifier un "null" ...
let flag = null;
```

- undefined

- number

- bgint (un nouveau type dans ES2020 )

Il faut ajouter l'opérateur **n** pour définir des BigInt

```js
const x = 2n ** 100n;
console.log(x);
// 1267650600228229401496703205376n
```

- string

```js
// On ne peut modifier la chaîne de caractères "Hello World" ...
let message = "Hello World";
```

- symbole (type introduit à partir de la norme ES6, un peu technique pour l'instant ...)

---

### 2. Les types Objects

Et de manière un peu différente on a le type 0bject. Ils sont mutables, on peut modifier un objet. Rappelons ici qu'un objet est une valeur conservée en mémoire à laquelle on fait référence grâce à un identifant. Nous reverrons ce point qui est important dans le code lorsqu'on manipule des objets.

Dans la liste des objets vous avez :

- Les objets classiques et les fonctions (ce sont des objets ...En JS)

```js
class Model {
	constructor(name) {
		this.name = name;
	}

	get() {
		return this.name;
	}
}

const myModel = new Model();

function modelFunc(n) {
	let name = n;

	return name;
}
```

- Les objets natifs comme les dates

```js
const now = new Date();
```

- Les collections comme les tableaux

Les déclarations suivantes sont identiques :

```js
let notes = [1, 2, 3];
let newNotes = new Array(1, 2, 4);
```

- Les collections avec clés : Map, Set, ...

Un Map est une simple collection clé/valeur. Ces structures de données utilisent des clés pour référencer des valeurs, chaque clé est unique. Un Set permet de stocker un ensemble de valeurs uniques de n'importe quel type.

```js
// création d'un Map
const store = new Map();

store.set("A1", 10.6);
store.set("A2", 8.9);

console.log(store);
// {"A1" => 10.6, "A2" => 8.9}

const ensemble = new Set([1, 2, 3, 4, 5, 5]);
console.log(ensemble);
// [1, 2, 3, 4, 5] il n'y a pas de doublon
```

- Les JSON Javascript Object Notation

## Portée (ou scope en Anglais) des variables en JS

Nous n'utilisons pas le mot réservé var pour définir une variable et utiliserons à la place le mot reservé **let** qui a été introduit pour donner plus de cohérence.

Pour déclarer une variable nous utiliserons le mot réservé du langage **let** en JS.

Définition à retenir :
**La variable définie avec let a une portée scopée au niveau du bloc dans lequelle elle a été déclarée.**

_Remarque importante : lorsque vous définissez une variable à l'intérieur d'une fonction elle est scopée (portée) dans la fonction elle-même._

```js
function foo() {
	let a = 10;
	console.log(a); // affiche 10
}

foo();

// erreur du type ReferenceError pas d'effet de bord
console.log(a);
```

Si vous définissez une variable **de même nom** à l'extérieur de la fonction alors, elle n'aura pas d'effet sur la variable à l'intérieur de la fonction.

```js
let a = 11;

function foo() {
	let a = 10;
	console.log(a); // affiche 10
}

// affiche 10
foo();

// affiche 11
console.log(a);
```

Un autre exemple important :

```js
// bloc courant pour b
let b = 11;

function baz() {
	// bloc courant pour c
	let c = 9;

	// JS ne trouve pas b dans le bloc courant => il remonte les blocs ou scopes
	console.log(b, c);
}

// affiche 11 9
baz();
```

JS remontera tous les scopes pour retrouver le symbole appelé et sa valeur. Si il n'existe pas une erreur **ReferenceError** est levée.

```js
// bloc courant
let b = 11;

function baz() {
	console.log(b);

	function foo() {
		console.log("Valeur du symbole b : ", b);
	}

	foo();
}

// affiche 11
baz();
```

## Exercice scope calcul

Sans exécuter le code ci-dessous dire si celui est valide ou non ? Modifiez le code pour qu'il s'exécute dans le cas où celui-ci ne serait pas valide.

```js
let a = 1;

function calcul() {
	let a = 2 + a;

	console.log(a, "calcul");

	function sub_calcul() {
		let b = a + 1;

		console.log(b, "sub_calcul");
	}

	sub_calcul();
}

calcul();
```

## Exercice TDZ (temporal dead zone)

Est ce que le code suivant est valide ?

```js
function tdz() {
	console.log(tdz_val);

	let tdz_val = "Temporal Dead Zone";
}

tdz();
```

## Exercice for let

Est ce que le code ci-dessous va s'exécuter correctement ?

```js
let i = 10;

for (let i = 0; i < 10; i++) {
	console.log(i);
}
```

Le code suivant s'exécute-t-il correctement ? Et si oui qu'affichera t il ? Répondez sans exécuter le code :

```js
for (let j = 0; j < 10; j++) {}
console.log(j);
```

## Déclaration d'une constante

Le mot réservé du langage JS **const** permet de définir une constante, il est identique au let concernant la portée et permet de déclarer une variable à assignation unique. Notons que dans le cas d'une constante vous êtes également obligé de lui assigner une valeur lors de sa déclaration.

```js
const API_KEY = "ABf#123@";

console.log(API_KEY);
```

Une fois API_KEY définie vous ne pouvez pas re-définir cette variable ni même lui assigner une autre valeur.

Remarque importante, une constante peut contenir tout type de variable. Dans le cas d'un objet comme un tableau par exemple, les valeurs du tableau sont modifiables. En effet, une constante bloque la ré-assignation de la variable mais, ne rend pas l'objet immuable.

Vous pouvez donc effectuer les opérations suivantes sur la constante STUDENTS

```js
const STUDENTS = ["Alan", "Bernard", "Jean"];

STUDENTS.push("Sophie");

console.log(STUDENTS);
//["Alan", "Bernard", "Jean", "Sophie"]

STUDENTS.pop();

console.log(STUDENTS);
// ["Alan", "Bernard", "Jean"]
```

Par contre ce qui suit est impossible, l'erreur suivante sera levée :
TypeError: Assignment to constant variable.

```js
let newStudents = ["Alice"];

// bloqué au niveau de la référence impossible
// ré-assignation
STUDENTS = newStudents;
```

## Exercice const

1. Pouvez-vous utiliser à votre avis le mot réservé const dans la boucle suivante ?

```js
for (const j = 0; j < 10; j++) {}
```

2. Utilisez la syntaxe de boucle for of et const sur l'itérable STUDENTS et affichez (console.log) ses valeurs :

```js
const STUDENTS = ["Alan", "Bernard", "Jean"];
```

## Fonction

### Paramètres par défaut

Lorsque vous définissez une fonction avec des paramètres, vous pouvez donner des valeurs par défaut à certain(s) de ses paramètre(s).

```js
function add(a, sup = 1) {
	return a + sup;
}

add(10); // affiche 11

add(10, 0); // affiche 10
```

### Exercice ttc

Créez une fonction qui permet de calculer un prix ttc connaissant un prix HT. Donnez une valeur par défaut tva en paramètre de la fonction. Fixez cette tva par défaut à 20%.

### Exercice accumulator (\*\*)

Créez une fonction récursive (qui s'appelle elle-mêmeà, elle prendra deux arguments : un tableau de nombres et un accumulateur initialement égale à 0. Cette fonction retournera la somme des valeurs du tableau.

Utilisez la méthode shift() sur le tableau. Il permet de dépiler la première valeur du tableau. Dans votre fonction récursive définissez **une condition d'arrêt**, sinon la fonction continuera de s'appeler indéfiniment (Stack Overflow).

Voyez l'exemple suivant pour vous aider à faire cet exercice :

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// retourne la première valeur du tableau en la supprimant du tableau
numbers.shift();

function accumulator(numbers, acc = 0) {
	// Une condition d'arrêt et retourner la somme des valeurs du tableau
	// dans la fonction on ré-appelle la fonction elle-même
	// accumulator(numbers, 10);
}

console.log(accumulator(numbers)); // doit retourner 55
```

## Syntaxe par décomposition

Si vous avez une fonction avec de nombreux paramètres ou des paramètres variables, utilisez le spread operator pour passer les valeurs à la fonction

```js
function sum(x, y, z) {
	return x + y + z;
}

let numbers = [1, 2, 3];

sum(...numbers); // sum(1, 2, 3)
```

### Exercice sum spread ttc

Ecrivez une fonction sumTTC qui prend 3 nombres arbitraires de prix HT et retourne la somme de ces prix TTC, la tva sera un paramètre facultatif de la fonction. Les prix HT seront donnés dans un tableau :

```js
const pricesHT = [100, 200, 55];
```

## Fonction fléchée

Les fonctions fléchées (arrow function) permettent d'avoir une syntaxe plus courte pour définir une fonction. Contrairement aux fonctions classiques, les fonctions fléchées ne redéfinissent pas de this. Si vous vous référez dans une fonction fléchée au mot clé this, la fonction récupérera le this du contexte de définition de la fonction.

Exemples :

```js
const sum = (x, y, z) => {
	return x + y + z;
};
```

Lorsque vous avez un seul résultat à retourner, une autre syntaxe plus courte mais complétement équivalente à celle ci-dessus :

```js
// methode consise
const sum = (x, y, z) => x + y + z;

// bloc classique, retour explicite
const sum2 = (x, y) => {
	return x + y;
};
```

## Cas d'utilisations

Vous pouvez utiliser une fonction fléchée sur des collections en utilisant des fonctions comme map, filter ou reduce par exemple :

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const powerNumber = numbers.map((number) => number ** 2);
```

La fonction filter permet de filtrer des données dans un tableau en fonction d'un critère

```js
powerNumber.filter((number) => number > 10);
```

Par exemple, pour faire la somme des nombres de la variable numbers plus haut dans le cours, vous pouvez en utilisant reduce écrire le code suivant :

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const total = numbers.reduce((curr, acc) => curr + acc);

console.log(total); // affiche 55
```

Remarque, reduce possède deux paramètres **curr** : valeur courante du tableau et **acc** variable permettant d'accumuler les calculs. Un reducer produit un unique résultat sur une collection de type Array. Vous pouvez également initialiser la variable acc en donnant une valeur à la méthode reducer deuxième paramètre facultatif :

```js
numbers.reduce((curr, acc) => curr + acc, 100);
// 155
```

### Exercice fonction map

Utilisez la fonction map pour calculer le prix TTC des téléphones suivants en utilisant une fonction fléchée :

```js
const phones = [
	{ name: "iphone XX", priceHT: 900 },
	{ name: "iphone X", priceHT: 700 },
	{ name: "iphone B", priceHT: 200 },
];
```

### Exercice counter arrow

Corrigez le code (ES5) suivant afin que le compteur s'incrémente correctement.

```js
// ES5
const CounterV1 = {
	count: 0,
	counter: function counter() {
		setInterval(function () {
			this.count++;
			console.log(this.count);
		}, 1000);
	},
};
CounterV1.counter();
```

## Affectation par décomposition

Vous pouvez affecter par décomposition des variables pré-définies comme suit :

```js
let a, b;
[a, b] = [10, 20];
```

Si vous ne souhaitez affecter que quelques variables et récupérer le reste de l'assignation dans un tableau, vous devez utiliser le spread operator :

```js
let a, b, rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // [30, 40, 50]
```

Vous pouvez également sauter des arguments dans l'assignation :

```js
let a, b;
[, , a, b] = [10, 20, 11, 111];

console.log(a, b); // 11 111
```

De même vous pouvez par décomposition assigner des valeurs à des variables en fonction des clés d'un littéral, vous devez cependant dans ce cas utiliser les mêmes noms de variable que les clés du littéral :

```js
const student = { mention: "AB", note: 12 };
const { mention, note } = student;

console.log(mention); // AB
console.log(note); // 12
```

Il est parfois intéressant de renommer les clés, dans ce cas il faudra utiliser la syntaxe suivante :

```js
const student = { mention: "AB", note: 12 };
const { mention: m, notes: n } = student;

console.log(m); // AB
console.log(n); // 12
```

On peut également le faire par imbrication :

```js
const st = {
	name: "Alan",
	family: {
		mother: "Isa",
		father: "Philippe",
		sister: "Sylvie",
	},
	age: 35,
};

const {
	name,
	family: { sister },
} = st;
```

Vous pouvez également destructurer un littéral en argument d'une fonction :

```js
const student = { mention: "AB", notes: 12 };
const infoStudent = ({ mention, note }) =>
	"info : " + mention + "note : " + note;

infoStudent(student);
```

### Exercice permutation

Soient les trois variables a, b, et c suivantes permutez les valeurs dans l'ordre suivant :

- a <- b
- b <- c
- c <- a

```js
let a = 1,
	b = 2,
	c = 4;
```

### Exercice assigner par décomposition

Soit le littéral student suivant assignez les valeurs **name**, **notes** et **average** dans les constantes name, notes et average dans le script courant.

```js
let student = {
	name: "Alan",
	notes: [10, 16, 17],
	average: null,
};

// TODO ...

// constantes
console.log(name, notes, average);
```

### Exercice iterate destructuring

Soient les données suivantes affichez le nom et le nom de la soeur de chaque étudiant en utilisant une boucle for of :

// Nom : Alan soeur : Sylvie

```js
const students = [
	{
		name: "Alan",
		family: {
			mother: "Isa",
			father: "Philippe",
			syster: "Sylvie",
		},
		age: 35,
	},
	{
		name: "Bernard",
		family: {
			mother: "Particia",
			father: "Cécile",
			syster: "Annie",
		},
		age: 55,
	},
];
```

## spread operator

Vous pouvez effectuer un merge de deux tableaux en JS à l'aide de l'opérateur spread :

```js
let numbers1 = [1, 2, 3, 4, 5, 7, 8, 9, 10];
let numbers2 = [11, 12, 13];

let numMerge = [...numbers1, ...numbers2];
```

Vous pouvez également "merger" deux littéraux :

```js
let st1 = { s1: "Alan", s2: "Alice" };
let st2 = { s3: "Bernard", s4: "Sophie" };

let stMerge = { ...st1, ...st2 };
```

Le spread operator peut servir également pour "mettre à jour" une clé dans un littéral :

```js
const state = {
	name: "",
	age: 25,
	email: "alan@alan.fr",
};

const newState = { ...state, email: "sophie@sophie.fr" };
// {name: "", age: 25, email: "sophie@sophie.fr"}
```

## Exercice push value

Soient les données suivantes. Créez un tableau strNumbers et pushez chacune des valeurs de ce tableau sans créer un tableau de tableaux :

```js
const strNumbers = [];
const str1 = ["one", "two"];
const str2 = ["three", "four"];
```

## Nom de propriété calculé et décomposition

Vous pouvez utiliser une variable pour définir une clé d'un littéral, dans ce cas la syntaxe est la suivante, il faut utiliser des crochets pour que JS interprète la variable comme une clé du littéral :

```js
const state = {
	name: "",
	email: "alan@alan.fr",
};

// définition d'une clé dynamique
let name = "email";
const newState = { ...state, [name]: "bernard@bernard.fr" };
```

## Exercice populations

1. Soit les données suivantes populations, ordonnez-les par ordre croissant par rapport à la longueur des noms.

_Indications : utilisez la méthode **sort**, cette méthode modifie le tableau. Vous pouvez lui passer une fonction (fléchée) pour calculer l'ordre par rapport à une clé du tableau ou un calcul spécifique. Reportez-vous à la documentation : [sort](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort)._

2. Ajoutez une clé **lenName** aux éléments du tableau populations vous assignerez la longueur de chaque nom à cette variable.

3. Regroupez maintenant dans un nouveau tableau groupNames les noms de même longueur (même nombre de caractères).

_Indications : Imaginez une structure de données, par exemple un tableau de tableau ou un Map, vous pouvez également utiliser **filter** pour regrouper les noms de même longueur dans le nouveau tableau groupNames_

```js
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
```

## Interpolation

Vous pouvez écrire des chaînes de caractères sur plusieurs lignes et insérer des expressions JS qui seront évaluées à l'aide de backquotes (accent grave).

Intérêt la concaténation sans l'interpolation donne une expression comme suit :

```js
let a = 51;
let b = 90;
console.log("Somme " + (a + b) + " et\n multiplication " + a * b + ".");
```

Avec les backquotes on aura une expression plus facile à écrire :

```js
let a = 51;
let b = 90;
console.log(`Somme : ${a + b} et \n multiplication : ${a * b}.`);
```

On peut également intégrer des ternaires comme suit avec les cotes couchés :

```js
let isLoading = true;
const message = `Data is ${isLoading ? `loading...` : `done!`}`;
```
