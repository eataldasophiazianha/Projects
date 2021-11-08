const express = require("express");
var cors = require("cors");
const app = express();

const PORT = 1234;

app.use(express.json());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); // update to match the domain you will make the request from
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

const month = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"Agust",
	"September",
	"October",
	"November",
	"December",
];

app.get("/array", (req, res) => {
	// let result = new Array();
	// let now = new Date();
	// let m = now.getMonth();
	// let a = new Date();
	// let a = now.getFullYear();

	// for (let i = 0; i < 3; i++) {
	// 	result.push({
	// 		date: month[m],
	// 		text: `Lorem ipsum dolor sit amel,
	//         consectelur adipiscing elit.
	//         Pellentesque cursus tempor enim.`,
	// 	});
	// }
	let result = new Array();
	let dt = new Date();
	for (let i = 0; i < 3; i++) {
		result.push({
			month: month[dt.getMonth()],
			year: dt.getFullYear(),
			text: "Lorem ipsum dolor sit amel, consectelur adipiscing elit. Pellentesque cursus tempor enim. ",
		});
		dt.setMonth(dt.getMonth() - 1);
	}

	res.send(result);
});
app.listen(PORT, () => console.log(`Ta no Ar em http://localhost:${PORT}`));
