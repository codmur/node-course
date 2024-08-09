const fs = require('fs');

const text = fs.readFileSync("README.md", "utf8");
console.log(text || "No se ha leido correctamente");
const alteredText = text.replace(/React/ig, 'Angular');
fs.writeFileSync("README-angular.md", alteredText);