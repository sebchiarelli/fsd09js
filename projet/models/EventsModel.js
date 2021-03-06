const API_ENDPOINT = "https://opendata.paris.fr/api/records/1.0/search/";

class EventsModel {
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
		this._queryParameters.q = q.trim();
		this._queryParameters.sort = sort;
		if (date_start !== "") {
			// facet=date_start&refine.date_start=2020
			this._queryParameters.facet = "date_start";
			this._queryParameters["refine.date_start"] = date_start;
		}
		// la traduire sous forme de chaine de requête et renvoyer cette chaine de requête
		return Object.entries(this._queryParameters)
			.map(([key, value]) => `${key}=${value}`)
			.join("&");
	}
	/**
	 * Envoyer une requête
	 * @param {string} q terme de recherche
	 * @param {string} date_start année de recherche (peut valoir "")
	 * @param {string} sort ordre de tri
	 * @returns {Promise} promesse qui sera résolue par les données réceptionnées
	 */
	getEvents(q = "", date_start = "", sort = "date_start") {
		// construit la requete
		const queryString = this.buildQuery(q, date_start, sort);
		// envoie la requête et renvoie les résultats
		return fetch(`${API_ENDPOINT}?${queryString}`).then((res) => res.json());
	}
}

export default EventsModel;

/*
https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=jazz&rows=12&sort=-date_start&facet=date_start&refine.date_start=2020
*/
