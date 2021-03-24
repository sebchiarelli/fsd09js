const fib = (i = 1, j = 1) => {
	setTimeout(() => {
		console.log(i);
		return fib(j, i + j);
	}, 500);
};

fib();
