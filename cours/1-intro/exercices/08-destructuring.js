let student = {
	name: "Alan",
	notes: [10, 16, 17],
	average: null,
};

// TODO ...
const { name, notes, average } = student;

// constantes
// attention, notes et student.notes sont 2 expressions qui accèdent au même tableau
// (on a juste fait une copie de référence)
notes.push(20);
console.log(notes);
console.log(student);
