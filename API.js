const express = require("express");
const app = express();
const PORT = 2407;
const dadosJson = require("./data.json");
app.listen(PORT, () => console.log(` http://localhost:${PORT} `));
app.use(express.json());
app.get("/data", (req, res) => {
	res.status(200).send({
		dadosJson,
	});
});
