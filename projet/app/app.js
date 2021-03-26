import firebase from "firebase/app";
import "firebase/auth";

let app = {
	// ----------------------------------------------------------------------------------------------------------------
	// MANIPULATION DU DOM DE L'APPLICATION
	// ----------------------------------------------------------------------------------------------------------------
	dom: {},

	// ----------------------------------------------------------------------------------------------------------------
	// AUTHENTIFICATION
	// ----------------------------------------------------------------------------------------------------------------
	auth: {
		loginWithGithub: () => {
			const provider = new firebase.auth.GithubAuthProvider();
			firebase
				.auth()
				.signInWithPopup(provider)
				.then((result) => {
					console.log(result);
				})
				.catch((error) => {
					console.error(`ERREUR: ${error.message}`);
				});
		},
	},

	// ----------------------------------------------------------------------------------------------------------------
	// ARCHITECTURE MVC DE L'APPLICATION
	// ----------------------------------------------------------------------------------------------------------------
	mvc: {
		router: null,
		dispatchRoute: (controllerInstance) => {
			// Récupérer l'URL de la vue partielle, puis son contenu
			fetch(controllerInstance.viewPath)
				.then((res) => res.text())
				.then((htmlString) => {
					// Mettre à jour l'élément main de la page avec ce contenu
					document.querySelector("main").innerHTML = htmlString;
					// Déclencher la méthode executeAfterDomUpdate du ctrl
					controllerInstance.executeAfterDomUpdate();
				});
		},
	},
};

//export const API_KEY = "RGNHCQEV34534534";
//export const API_KEY_2 = "VRFGR345435TRFHG";

// L'application est exportée afin d'être accessible par d'autres modules.
export default app;
