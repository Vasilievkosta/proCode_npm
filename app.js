const fs = require('fs');
const axios = require('axios').default;
const moment = require('moment');

let fileName = String(moment().unix());

let getPlanet = axios.get('https://swapi.dev/api/planets/3');

getPlanet.then(async(elem) => {
	let result = JSON.stringify(elem.data);
	await fs.writeFile(`${fileName}.log`, `${result}`, function(error){ 
    if(error) throw error; // if error
    console.log("Асинхронная запись файла завершена.");
	let read = fs.readFileSync(`${fileName}.log`, "utf8");
    console.log(JSON.parse(read));  // output read data
	});
});



