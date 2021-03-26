const fetch = require("node-fetch");

fetch("https://jsonplaceholder.typicode.com/users")
	//.then((response) => response.text())
	/*.then((jsonString) => {
		const data = JSON.parse(jsonString);
		console.log(data);
	});*/
	//.then((jsonString) => JSON.parse(jsonString))
	.then((response) => response.json())
	.then((users) => {
		console.log(users);
	});
    // // npm i serve -g