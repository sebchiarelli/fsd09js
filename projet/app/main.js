//import Router from "vanilla-router";

import HomeController from "../controllers/HomeController.js";
import app /*, { API_KEY as apiKey, API_KEY_2 }*/ from "./app.js";
import config from "./config.js";

// --------------------------------------------------------------------------------------------------------------------
// INITIALISATION DE L'APPLICATION
// --------------------------------------------------------------------------------------------------------------------

function initializeRouter() {
	// Instancier ici le Vanilla Router dans l'objet "app.mvc.router"
	app.mvc.router = new Router({
		mode: "hash",
		page404: function (path) {
			console.log('"/' + path + '" Page not found');
		},
	});

	app.mvc.router.add("home", function () {
		console.log("Home page");
		const controllerInstance = new HomeController();
		// Récupérer l'URL de la vue partielle, puis son contenu (avec un fetch)
		// Mettre à jour le main avec ce contenu
		// Déclencher la méthode executeAfterDomUpdate du ctrl
	});

	app.mvc.router.add("about", function () {
		console.log("About Page");
	});

	app.mvc.router.add("search", function () {
		console.log("Search Page");
	});

	app.mvc.router.add("login", function () {
		console.log("Login Page");
	});

	// app.mvc.router.add("hello/(:any)", function (name) {
	// 	console.log("Hello, " + name);
	// });

	app.mvc.router.addUriListener();

	app.mvc.router.navigateTo("home");
}

// --------------------------------------------------------------------------------------------------------------------
// CODE PRINCIPAL
// --------------------------------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
	// Initialisation du routeur.
	initializeRouter();
});
