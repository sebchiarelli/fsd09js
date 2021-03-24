let cpt = 0;

// appel à une fonction déclarée précédemment
/*
function incrementAndDisplay() {
  cpt++;
  console.log(cpt);
}

setInterval(incrementAndDisplay, 1000);
*/

// appel à une fonction anonyme

let timerID = setInterval(function () {
	cpt++;
	console.log(cpt);
}, 1000);

setTimeout(() => {
	console.log("5 secondes écoulées");
	clearInterval(timerID);
}, 5000);
