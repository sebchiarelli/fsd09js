function sayHello(prenom) {
	return "Bonjour " + prenom;
}

const sayHello = function (prenom) {
	return "Bonjour " + prenom;
};

const sayHello = (prenom) => {
	return "Bonjour " + prenom;
};

// quand une fonction fléchée contient uniquement un return,
// on peut se dispenser des accolades et du mot-clé return
const sayHello = (prenom) => "Bonjour " + prenom;

console.log(sayHello("John Doe"));

// quand une fonction ne fait pas de return mais contient une seule instruction
// on se dispense aussi souvent des accolades
const logHello = (prenom) => console.log("Hello " + prenom);
logHello("John Doe");
