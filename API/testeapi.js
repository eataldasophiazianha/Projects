const axios = require("axios");
const URL = `http://localhost:8881/array`;

const url = `${URL}/?search=${nome}&format=json`;
const response = await axios.get(url);
return response.data;
