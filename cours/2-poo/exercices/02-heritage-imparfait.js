class Rectangle {
	constructor(w, h) {
		this._w = w;
		this._h = h;
	}
	set w(w) {
		this._w = w;
	}
	set h(h) {
		this._h = h;
	}
	get area() {
		return this._w * this._h;
	}
	get perimeter() {
		return 2 * (this._w + this._h);
	}
}

class Square extends Rectangle {
	constructor(size) {
		super(size, size);
	}
	set w(w) {
		this._w = w;
		this._h = w;
	}
	set h(h) {
		this._h = h;
		this._w = h;
	}
}

const square1 = new Square(50);
square1.w = 40;

/* On est obligé de faire des bricolages malheureux pour que les propriétés w et h restent
   égales pour les instances de Square... il aurait été préférable de ne pas mettre en place
   d'héritage ici.
   C'est un exemple d'école de violation du principe de Liskov : https://fr.wikipedia.org/wiki/Principe_de_substitution_de_Liskov
*/
