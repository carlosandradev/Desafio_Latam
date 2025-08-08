// node --watch script.js

const fs = require("fs");
const {data, lista} = require("./funciones");

const tareas = `
1. Pasear al perro
2. It al gym
3. Estudiar
4. Limpiar al bano
`;

fs.writeFileSync("tareas.txt", tareas);


const lenguajes = [
  {text: "JavaScript"}, 
  {text: "Java"}, 
  {text: "Python"}, 
  {text: "Typescript"}, 
];

fs.writeFileSync("lenguajes.json", JSON.stringify(lenguajes));


const lecturaJSON = fs.readFileSync("lenguajes.json", "utf-8");
console.log(lecturaJSON);

const lecturaTxt = fs.readFileSync("tareas.txt", 'utf-8');
console.log(lecturaTxt);


data("Fernando", "Martinez", 45, "Buenos Aires");

lista("teclado", "monitor", "mouse");



