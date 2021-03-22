const CounterV1 = {
	count: 0,
	counter: function counter() {
		// définir une fonction callback sous forme fléchée
		// nous assure qu'on garde le même contexte this que dans le scope parent
		setInterval(() => {
			this.count++;
			console.log(this.count);
		}, 1000);
	},
};
CounterV1.counter();
