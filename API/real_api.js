// const express = require("express");
// const app = express();
// const PORT = 8888;

// app.listen(PORT, () => console.log(`Ta no ar http://localhost:${PORT}`));
// app.use(express.json());

// app.get("/array", (req, res)=>){
//     res.status(200)
// }
const express = require("express");
const app = express();
const PORT = 8881;

app.listen(PORT, () => console.log(`ta no ar em http://localhost:${PORT}`));
app.use(express.json());

const month = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

app.get("/array", (req, res) => {
	let result = new Array();
	let m = new Date();
	m = m.getMonth();

	for (let i = 0; i < 3; i++) {
		result.push({
			month: month[m],
			text: `Estou no mês ${month[m]}`,
		});
		m -= 1;
		if (m == -1) {
			m = 11;
			// a = a - 1
		}
	}

	res.status(400).send(result);
});
