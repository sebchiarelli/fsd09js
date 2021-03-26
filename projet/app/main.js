import Router from "vanilla-router";
import firebase from "firebase/app";

import HomeController from "../controllers/HomeController.js";
import SearchController from "../controllers/SearchController.js";
import LoginController from "../controllers/LoginController.js";
import AboutController from "../controllers/AboutController.js";

import app /*, { API_KEY as apiKey, API_KEY_2 }*/ from "./app.js";
import config from "./config.js";

import "../static/css/main.css";

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
		app.mvc.dispatchRoute(new HomeController());
	});

	app.mvc.router.add("about", function () {
		app.mvc.dispatchRoute(new AboutController());
	});

	app.mvc.router.add("search", function () {
		app.mvc.dispatchRoute(new SearchController());
	});

	app.mvc.router.add("login", function () {
		app.mvc.dispatchRoute(new LoginController());
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

// const sayHello = ({ firstName = "visiteur", lastName = "" }) => {
// 	console.log(`Bienvenue ${firstName} ${lastName} !`);
// };

document.addEventListener("DOMContentLoaded", function () {
	// Initialisation du routeur.
	initializeRouter();

	//Test ES6
	//sayHello({ firstName: "John", lastName: "Doe" });

	// Initialize Firebase
	firebase.initializeApp(config.firebase);
});
