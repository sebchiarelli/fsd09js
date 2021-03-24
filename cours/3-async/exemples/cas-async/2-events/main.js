let box;
let btn;
let cpt = 0;

function onClickBtn(e) {
	console.log(e);
	box.classList.toggle("red");
	cpt++;
	box.innerHTML = cpt;
}

// code principal
document.addEventListener("DOMContentLoaded", function () {
	box = document.querySelector("#box");
	btn = document.querySelector("#btn");
	console.log(box);

	btn.addEventListener("click", onClickBtn);
});
