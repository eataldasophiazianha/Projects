const { readFile } = require("fs");
const { promisify } = require("util");

// const dadosJson = require('./data.json')
const readFileAsync = promisify(readFile);
class Database {
	constructor() {
		this.NOME_ARQUIVO = "data.json";
	}
	async obterDadosArquivo() {
		const arquivo = await readFileAsync(this.NOME_ARQUIVO, "utf-8");
		return JSON.parse(arquivo.toString());
	}
	// escreverArquivo() {}
	// async listar(id) {
	// 	const dados = await this.obterDadosArquivo();
	// }
}
module.exports = new Database();
