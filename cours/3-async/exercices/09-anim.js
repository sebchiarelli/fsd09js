/**
 * Génère une chaine aléatoire de 2 caractères (un chiffre de 1 à 9 et une lettre comprise entre A à X)
 * Pas d'entrée
 * @returns la PROMESSE de la chaine de caractères
 */

const anim = () =>
	new Promise((resolve) => {
		setTimeout(() => {
			const letters = "ABCDEFGHIJKLMNOPQRSTUVWX";
			const digit = Math.ceil(Math.random() * 9);
			const letter = letters[Math.floor(Math.random() * 24)];
			resolve(`${digit}${letter}`);
		}, 500);
	});

/**
 * Fonction asynchrone qui génère une secret key en appelant 10 fois de suite anim et en concaténant les résultats
 * @returns la promesse de la clé secrete
 */
const generateSecretKey = async () => {};

// CP: générer la secret key
generateSecretKey();
