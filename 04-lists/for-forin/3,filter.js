const { obterPessoas } = require("./service");

/*
const item = {
    nome: 'Eric',
    idade: 12,
}
const { nome } = item
console.log(nome, idade)

*/
Array.prototype.meuFilter = function (callback) {
	const lista = [];
	for (index in this) {
		const item = this[index];
		const result = callback(item, index, this);
		// 0 , "", null, undifined == false
		if (!result) continue;
		lista.push(item);
	}
	return lista;
};

async function MediaDeviceInfo() {
	try {
		const { results } = await obterPessoas(`a`);

		// const familiaLars = results.filter(function (item) {
		// 	//por padrão precisa retornar um booleano
		// 	//para informar  se deve manter ou remover de lista
		// 	//false> remover da lista
		// 	//true > mantem
		// 	//não encontrou = -1
		// 	//encontrou = posicaoNoArray
		// 	const result = item.name.toLowerCase().indexOf(`lars`) !== -1;
		// 	return result;
		// });
		const familiaLars = results.meuFilter((item, index, lista) => {
			console.log(`index: ${index}`, lista.length);
			return item.name.toLowerCase().indexOf("lars") !== -1;
		});
		const names = familiaLars.map((pessoa) => pessoa.name);
		console.log(names);
	} catch (error) {
		console.error("DEU RUIM", error);
	}
}

MediaDeviceInfo();
