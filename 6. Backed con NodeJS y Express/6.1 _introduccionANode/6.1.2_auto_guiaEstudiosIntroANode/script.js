const fs = require("fs");
const { text } = require("stream/consumers");

const contenido = `
"Node es genial"
`
fs.writeFileSync("test.docx", contenido);


const archivo =
`"Node Js \t Express JS"
`
fs.writeFileSync("test.xls", archivo);

const autos = [
  {
    marca: 'Suzuki',
    modelo: 'Kicks',
  },
  {
    marca: 'Toyota',
    modelo: 'Corola',
  },
  {
    marca: 'GAC',
    modelo: 'GS4',
  },
  {
    marca: 'Chevrolet',
    modelo: 'Tracker',
  }
]

fs.writeFileSync("autos.json", JSON.stringify(autos));


const tareas = [
  {text: 'Ir al Gimnasio'},
  {text: 'Ir por los nios al colegio'},
  {text: 'Pagar los gastos comunes'},
  {text: 'Cargar becina'},
  {text: 'Comprar play 5'}
]

fs.writeFileSync("tareas.json", JSON.stringify(tareas))

fs.readFileSync('tareas.json', 'utf8')
console.log(tareas);



