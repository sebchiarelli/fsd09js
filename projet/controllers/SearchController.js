class SearchController {
	constructor() {
		this.viewPath = "views/search.html";
	}

	fillYears() {
		// Generer les balises option en fonction de l'année courante
		const currentYear = new Date().getFullYear();
		const options = ["<option>-- Choisir --</option>"];
		for (let y = currentYear + 1; y >= currentYear - 2; y--) {
			options.push(`<option value="${y}">${y}</option>`);
		}
		// MAJ le select
		document.querySelector("#date_start").innerHTML = options.join("");
	}

	executeAfterDomUpdate() {
		console.log("Search OK");
		// Remplir la liste déroulante des années
		this.fillYears();
	}
}

export default SearchController;
