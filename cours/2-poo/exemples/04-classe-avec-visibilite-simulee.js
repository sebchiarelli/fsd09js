class Rectangle {
	constructor(w, h) {
		// convention : on considèrera les propriétés dont les noms sont préfixés par _ comme privées
		this._w = w;
		this._h = h;
	}
	set w(w) {
		if (typeof w !== "number" || w < 0 || w > 100) {
			throw new Error(
				`Valeur invalide: ${w} - la largeur doit être un entier compris entre 0 et 100`
			);
		}
		this._w = w;
	}
	get w() {
		return this._w;
	}
	// setW(w) {
	// 	if (typeof w !== "number" || w < 0 || w > 100) {
	// 		throw new Error(
	// 			`Valeur invalide: ${w} - la largeur doit être un entier compris entre 0 et 100`
	// 		);
	// 	}
	// 	this._w = w;
	// }
}

const unRectangle = new Rectangle(30, 50);
const unAutreRectangle = new Rectangle(40, 60);

//unRectangle._w = 70; // l'accès direct fonctionne car tout est public en JS, mais on se l'interdit...
//unRectangle.setW(70); // un accesseur classique fonctionnerait très bien mais on va privilégier une autre convention...
unRectangle.w = 70; // on essaie d'écrire dans une "pseudo propriété" w, il n'existe pas dans la classe de propriété de ce nom mais il y a bien un accesseur en écriture correspondant (set w), il est appelé implicitement

// sur le même principe en lecture
//console.log(unRectangle._w) // on s'interdit l'accès direct à la vraie propriété _w
console.log(unRectangle.w); // appel implicite à l'accesseur get w

console.log(unRectangle);
