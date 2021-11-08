const assert = require("assert");
const { obterPessoas } = require("./service");

const nock = require("nock");

describe("Star Wars Tests", function () {
	this.beforeEache(() => {
		const response = {};
	});

	it("deve buscar o rd2d com o formato correto", async () => {
		const expected = [
			{
				nome: "R2-D2",
				peso: "96",
			},
		];
		const nomeBase = `r2-d2`;
		const resultado = await obterPessoas(nomeBase);
		console.log("res", resultado);
		assert.deepEqual(resultado, expected);
	});
});
