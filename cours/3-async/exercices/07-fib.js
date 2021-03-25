const fib = (i = 1, j = 1) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			//return fib(j, i + j);
			resolve([j, i + j]);
		}, 500);
	});

fib()
	.then(([x, y]) => {
		console.log(x);
		return fib(x, y);
	})
	.then(([x, y]) => {
		console.log(x);
		return fib(x, y);
	})
	.then(([x, y]) => {
		console.log(x);
		return fib(x, y);
	})
	.then(([x, y]) => {
		console.log(x);
		return fib(x, y);
	})
	.then(([x, y]) => {
		console.log(x);
		return fib(x, y);
	});
