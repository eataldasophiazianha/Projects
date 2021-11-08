const { response } = require("express");
const { text } = require("stream/consumers");
const { append } = require("vary");

function fetchUsers() {
	axios
		.get("http://localhost:1234/array")
		.then((response) => {
			const array = response.data;

			// let name1 = response.data[0];
			// let name2 = response.data[1];
			// let name3 = response.data[2];

			// let month = name1["month"];
			// let year = name1["year"];
			// let text = name1["text"];

			let count = 0;

			array.forEach((element) => {
				const { text } = element;
				document.getElementById(
					`index${count++}`
				).innerHTML = ` ${element.month} ${element["year"]}
                <p class="text">
                    ${text}
                </p>`;
			});
			// array.forEach(({ text, year, month }) => {
			// 	document.getElementById(
			// 		`index${count++}`
			// 	).innerHTML = ` ${month} ${year}
			//     <p class="text">
			//         ${text}
			//     </p>`;
			// });
			console.log(`GET list users`, response.data);
		})
		.catch((error) => console.error(error));
	console.log("asd");
}
fetchUsers();
