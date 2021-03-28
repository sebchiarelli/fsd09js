const fs = require("fs");
const fetch = require("node-fetch");

fetch("https://jsonplaceholder.typicode.com/users")
	.then((response) => response.json())
	.then((users) => {
		/*
    const userMap = new Map();
		for (const {
			name,
			address: { geo },
		} of users) {
			userMap.set(name, geo);
		}
		console.log(userMap);
    */
		//const usersSlim = users.map(({ name, address: { geo } }) => [name, geo]);
		const userMap = new Map(
			users.map(({ name, address: { geo } }) => [name, geo])
		);
		console.log(userMap);

		// transformer la Map en tableau pour la stringifier, utiliser de l'indentation pour que le string obtenu soit facilement lisible
		const jsonString = JSON.stringify(Array.from(userMap), null, 2);
		console.log(jsonString);

		// écrire un fichier contenant ce string
		fs.writeFile("./data/users.json", jsonString, (err) => {
			if (err) throw err;
			console.log("The file has been saved!");
		});
	});
