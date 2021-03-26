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
		eventsModel
			.getEvents(q, date_start, sort)
			.then(({ nhits, parameters, records }) => {
				const htmlRecords = records.map(
					({
						fields: { title, date_description, cover_url, cover_alt },
					}) => `<li class="col-12 col-sm-6 col-md-4 col-lg-3 text-center">
					<img class="img-fluid" src="${cover_url}" alt="${cover_alt}" />
					<h6>${title}</h6>
					<p>${date_description}</p>
				</li>`
				);
				document.querySelector("#searchResults").innerHTML = `
			<h4 class="text-center my-3">${
				records.length
			} résultats sur ${nhits} au total</h4>
			<ul class="events-list row">${htmlRecords.join("")}</ul>
			`;
			});
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
