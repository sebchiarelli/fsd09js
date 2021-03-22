function f(x, y = 7, z = 42) {
	return x + y + z;
}

console.log(f(10)); // x = 10, y = 7, z = 42

console.log(f(10, 12)); // x = 10, y = 12, z = 42

console.log(f(10, 7, 21)); // x = 10, y = 7, z = 21



