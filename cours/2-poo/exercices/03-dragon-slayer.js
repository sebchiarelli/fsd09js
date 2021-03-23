class Player {
	constructor(name, life, force) {
		this._name = name;
		this._life = life;
		this._force = force;
		this._shot = 0;
	}
}

class Dragon extends Player {}

class Knight extends Player {}

class Game {
	constructor(p1, p2) {
		this._player1 = p1;
		this._player2 = p2;
	}
	run() {}
}

const knight = new Knight("Lancelot", 100, 10);
const dragon = new Dragon("Smaug", 100, 10);

const game = new Game(knight, dragon);

game.run();
