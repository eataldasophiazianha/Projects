const json = {
	name: "Leo",
	idade: 22,
	empresa: "Creatus",
};
console.log(json.name);
console.log(json["name"]);

const { name, idade, empresa } = json;
console.log(name, idade, empresa);
