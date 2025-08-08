const fs = require('fs');

const contenidoHTML = fs.readFileSync("index.html", "utf8");
console.log(contenidoHTML);