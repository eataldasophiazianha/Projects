const month = new Array();
month[0] = "January";
month[1] = "Februery";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

const d = new Date();
//const bata = month[d.getMonth()];

console.log(month[d.getMonth()]);

/*
console.log(d.getFullYear());
console.log(d.getHours());

Date.prototype.addHours = function (h) {
	this.setHours(this.getHours() + h);
	return this;
};
*/

//d.addHours(3);

d.setMonth(8);

console.log(month[d.getMonth()]);
