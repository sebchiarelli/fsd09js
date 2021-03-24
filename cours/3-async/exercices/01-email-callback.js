const login = (email, password, callback) => {
	setTimeout(() => {
		callback(email);
	}, 1000);
};

// avec une fonction nommée
function doSomethingWithEmail(verifiedEmail) {
	console.log(verifiedEmail);
}
login("alan@alan.fr", 1234567890, doSomethingWithEmail);

// avec une fonction anonyme
// login("alan@alan.fr", 1234567890, (verifiedEmail) =>
// 	console.log(verifiedEmail)
// );
