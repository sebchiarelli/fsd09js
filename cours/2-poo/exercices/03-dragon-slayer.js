class Player {
	constructor(name, life, force) {
		this._name = name;
		this._life = life;
		this._force = force;
		this._shot = 0;
	}
	get name() {
		return this._name;
	}
	computeDamage() {
		return Math.round(100 * Math.random() * this._force) / 100;
	}
	decrementLife(dmg) {
		this._life = Math.round(100 * (this._life - dmg)) / 100;
	}
	incrementShot() {
		this._shot++;
	}
	isAlive() {
		return this._life > 0;
	}
}

class Dragon extends Player {}

class Knight extends Player {}

class Game {
	constructor(p1, p2) {
		this._player1 = p1;
		this._player2 = p2;
	}
	run() {
		while (this._player1.isAlive() && this._player2.isAlive()) {
			const [assaillant, victim] =
				Math.random() < 0.5
					? [this._player1, this._player2]
					: [this._player2, this._player1];
			// l'assaillant détermine les points de dommage
			const dmg = assaillant.computeDamage();
			// on retire ce dommage des PV de la victime
			victim.decrementLife(dmg);
			// incrémenter le compteur de shots de l'assaillant
			assaillant.incrementShot();
			/*
			if (Math.random() < 0.5) {
				// l'assaillant détermine les points de dommage
				const dmg = this._player1.computeDamage();
				// on retire ce dommage des PV de la victime
				this._player2.decrementLife(dmg);
				// incrémenter le compteur de shots de l'assaillant
				this._player1.incrementShot();
			} else {
				// l'assaillant détermine les points de dommage
				const dmg = this._player2.computeDamage();
				// on retire ce dommage des PV de la victime
				this._player1.decrementLife(dmg);
				// incrémenter le compteur de shots de l'assaillant
				this._player2.incrementShot();
			}
      */
		}
		this.displayResults();
	}
	displayResults() {
		console.log(
			`Le vainqueur est ${
				this._player1.isAlive() ? this._player1.name : this._player2.name
			}`
		);
		console.log(this);
	}
}

const knight = new Knight("Lancelot", 100, 10);
const dragon = new Dragon("Smaug", 100, 10);

const game = new Game(knight, dragon);

game.run();
