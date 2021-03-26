class EventsModel {
	static API_ENDPOINT = "https://opendata.paris.fr/api/records/1.0/search/";
	constructor(rows = 12) {
		this._queryParameters = {
			dataset: "que-faire-a-paris-",
			rows: rows,
		};
	}
	/**
	 * Construit une chaine de requete
	 * @param {string} q terme de recherche
	 * @param {string} date_start année de recherche (peut valoir "")
	 * @param {string} sort ordre de tri
	 * @returns {string} chaine de requête complete
	 */
	buildQuery(q = "", date_start = "", sort = "date_start") {
		console.log(q, date_start, sort);
		// completer la propriété queryParameters
		// la traduire sous forme de chaine de requête et renvoyer cette chaine de requête
	}
	/**
	 * Envoyer une requête
	 * @param {string} q terme de recherche
	 * @param {string} date_start année de recherche (peut valoir "")
	 * @param {string} sort ordre de tri
	 */
	getEvents(q = "", date_start = "", sort = "date_start") {
		console.log(q, date_start, sort);
		// construit la requete
		const queryString = this.buildQuery(q, date_start, sort);
		// envoie la requête
		// récupère les résultats
	}
}

export default EventsModel;

/*
https://opendata.paris.fr/api/records/1.0/search/?
dataset=que-faire-a-paris-&
q=jazz&
rows=12&
sort=-date_start&
facet=date_start&refine.date_start=2020
*/
