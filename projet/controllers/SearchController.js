import EventsModel from "../models/EventsModel.js";

class SearchController {
	constructor() {
		this.viewPath = "views/search.html";
	}

	fillYears() {
		// Generer les balises option en fonction de l'année courante
		const currentYear = new Date().getFullYear();
		const options = ['<option value="">-- Choisir --</option>'];
		for (let y = currentYear + 1; y >= currentYear - 2; y--) {
			options.push(`<option value="${y}">${y}</option>`);
		}
		// MAJ le select
		document.querySelector("#date_start").innerHTML = options.join("");
	}

	/* Cette méthode est appelée en callback de addEventListener, ce qui pourrait modifier la signification de this.
	   C'est pour garder le this du contexte parent (this = instance du controleur, dans la méthode executeAfterDomUpdate
		 où l'appel est fait) qu'on écrit onSubmitForm sous forme de fonction fléchée.
		 Seule différence fonctionnelle entre une fonction classique et une fonction fléchée : la fonction fléchée ne
		 modifie jamais la valeur de this.
	*/
	onSubmitForm = (e) => {
		e.preventDefault();
		// récupérer les valeurs saisies dans le formulaire
		const q = document.querySelector("#q").value;
		const date_start = document.querySelector("#date_start").value;
		const sort = document.querySelector("#sort").value;
		// envoyer la requête
		const eventsModel = new EventsModel();
		eventsModel.getEvents(q, date_start, sort);
	};

	executeAfterDomUpdate() {
		// Remplir la liste déroulante des années
		this.fillYears();
		// Surveiller le submit du formulaire
		document
			.querySelector("#searchForm")
			.addEventListener("submit", this.onSubmitForm);
	}
}

export default SearchController;
