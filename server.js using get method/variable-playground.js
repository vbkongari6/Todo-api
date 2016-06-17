var person = {
	name: "vijay",
	age: 24
};

function updatePerson (obj) {
	/*obj = {
		name: "vijay",
		age: 25
	}*/
	obj.age = 25;
}

updatePerson(person);
console.log(person);

// array example
var ar_grades = [15, 37];
function addGrades (grades) {
	//grades = [12, 33, 27];
	grades.push(55);
	//debugger;
}
addGrades(ar_grades);
console.log(ar_grades);