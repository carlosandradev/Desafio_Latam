# 💻 6. Backend con Node JS y Express

## 🚀 6.1 Introducción a Node

## 📚 6.1.1 Clase: Introducción a Node

## 🎯 Objetivo General

- Crear una aplicacion en Node que resgistre y lea informacion en formato JSON

<br>

## 🗂️ Objetivos De La Clase

1. Ejecutar scripts con Node Js desde la terminal
2. Crear archivos con el modulo File System
3. Leer archivos con el modulo File System
4. Importar y Exportar modulos en Node JS

<br>

## ❓ Por que Node JS?

- Porque Node JS nos permite usar JavaScript para crear programas que funcionan fuera del navegador, en el lado del servidor.

- Esto significa que no solo podemos hacer paginas web sino tambien crear archivos, leer datos, manejar servidores, conectarnos a bases de datos y automatizar tareas... todo usando el mismo lenguaje que ya conocemos en el FrontEnd.

<br>

## 📝 Mi Primer Script

- Antes de escribir mi primer programa con Node JS, necesito comprobar que este bien instalado
Para hacerlo, abre la terminal y ejecuta el siguiente comando:

```bash
node --version
```
- Si recibes una version como resultado por ejemplo 

```
v18.16.0
```
- significa que Node JS esta instalado correctamente y ya puedo comenzar a programar

<br>

## 🖥️ Ejecutar JavaScript desde la Terminal

- Para ejecutar JavaScript desde la terminal podemos hacerlo con la palabra 

```
node
```
```
carl_andrade13 ~ % node -------> (Inicia el entorno de Node JS)
Welcome to Node.js v16.14.2.
Type ".help" for more information.
> new Date() ------------------> Aqui ya podemos escrbir JavaScript
2022-04-14T13:47:13.057Z ------> Respuesta
```

- Si quieres ejecutar un archivo JavaScript desde la terminal, deberas ubicarte en la carpeta donde este el archivo y escribir

```
node <nombre del archivo.js> ejemplo script.js
```

<br>

## 👋 Hola mundo con Node JS

- Desde la carpeta donde quieras practicar vamos a crear un archivo llamado index.js o script.js

- Abrelo en VSCODE y escribe lo siguiente:

```
console.log("Hola desde Node);
```
- Puedes abrir una nueva terminal desde VSCODE o desde la terminal de tu PC y una vez estes sobre la capeta donde este el archivo js pones lo siguiente:
```
@carloss-macbook-pro 6. Backed con NodeJS y Express % node index.js (o script.js)
Hola desde Node --------> respuesta terminal
```
<br>

## ✅ Objetivos De La Clase Completados

1. Ejecutar scripts con Node Js desde la terminal ✅

<br>

## 📦 El Modulo File System

- Al instalar Node JS se agregan una galeria de modulos como *File System* que es uno de los mas populares

- Es un modulo que viene por defecto y nos permite operaciones en el sistema de archivos de nuestro computador como:
  - Leer Archivos
  - Crear Archivos
  - Editar Archivos
  - Eliminar Archivos

-  Al ser un modulo de node debemos importar o requerir 

```js
const fs = require("fs");
```

- ```require("fs"):``` trae el modulo *File System*
- ```fs``` es el nombre convencional que se le asigna, pero podria llamarse de otra forma aunque por convencion se deja como ```fs```
- Se usa ```const``` porque no tenemos intencion de reasingnarlo

<br>

## Crear un archivo con fs.writeFileSync

```js
const fs = require('fs');

const tareas = `
1. Pasear al perro
2. Ir al gym
3. Estudiar
`;

fs.writeFileSync('tareas.txt'. tareas);
```
<br>

## 🧠 _Explicacion del Ejemplo_

```js
 const tareas = ...
```
- Creamos una constante que guarda un String multilinea con nuestras tareas

```js
fs.writeFileSync('tareas.txt', tareas);
```
- Usa el metodo writeFileSync para crear (o sobreescribir) un archivo llamado tareas.txt y escribir alli el contenido de la variable tareas.

```
@carloss-macbook-pro ~ % node script.js -----> Ejecutamos el archivo en la terminal usado node
```
- cuando ejecutas ```node``` y el nombre del archivo donde esta el codigo por ejemplo ```script.js``` si bien puede que no recibas una respuesta en la terminal se crea un archivo llamado ```tareas.txt``` en la misma carpeta.

- Dentro del archivo ```tareas.txt``` queda el contenido exacto de la constante tareas.

<br>

## ❓ Y si cambio el texto de la variable tareas?

- Si editas el archivo script.js y cambias
```js
const tareas = `
1. Pasear al perro
2. Ir al gym
3. Leer 10 Paginas
`;
```
- y Ejecutamos 
```
node script.js
```
- el archivo tareas.txt se actualizara con ese nuevo contenido

<br>

## 🧩 Anatomía del método `writeFileSync`

- El metodo writeFileSync tiene la siguiente anatomia:
```js
fs.writeFileSync( <Nombre del archivo>, <Contenido del archivo>);
```
- Necesita de **dos argumentos**;

- Ambas deben estar en foramto string

<br>

## 🧠 ¿Qué significa eso?

- Que el ```Nombre del Archivo``` que se va a crear o sobreescribir debe ser un **String** entre comillas: Como por ejemplo ```tareas.txt```

- Que el texto que quieres guardar dentro del archivo tambien debe ser un String, por Ejemplo. 
```js
"Hola desde Node"
```
<br>

## ⚠️ ¡Ojo! si no es String, va a fallar
- Si intentas guardar un objeto o un arreglo directamente, el archivo no se va a guardar correctamente. Primero se debe covertir a String de la siguiente forma:
```js
JSON.stringify(miDato);
```

<br>

## 🧪 Ejemplo basico correcto
```js
fs.writeFileSync("saludo.txt", "Hola mundo");
```
- Con esto se crea un archivo ```saludo.txt``` con este texto

<br>

## ❌ Ejemplo incorrecto (objeto stringify)
```js
const persona = {nombre: "Carlos" };
fs.writeFileSync ("persona.txt", persona); // ❌ No funciona bien
```

<br>

## ✅ Ejemplo correcto usando JSON.stringify
```js
const persona = {nombre: "Carlos" };
fs.writeFileSync("persona.txt", JSON.stringify(persona));
```
- Ahora si, guarda el contenido en formato string:
```js
{"nombre":"Carlos"}
```

<br>

## 📖 Leer un archivo con `fs.readFileSync`

- Despue de haber creado un archivo con `fs.writeFileSync`, ahora vamos a **leer su contenido** con el metodo `readFileSync`.

- Este metodo tambien viene del modulo `fs` y su **anatomia es simple**:

```js
fs.readFileSync(nombreDelArchivo);
```

<br>
 
## 🧠 ¿Que devuelve?
- Por defecto, este metodo devuelve un tipo especial de dato llamado Buffer
```js
const resultado = fs.readFileSync("tareas.txt");
console.log(resultado);
```

<br>

## Resultado en la terminal
```
<Buffer 31 2e 20 50 61 73 65 61 72 20 61 6c 20 70 65 72 72 6f 0a 32 2e ...>
```

<br>

## 🤔 Que es Buffer?

- Un Buffer es una representacion de datos en binario (en hexadecimal).
- Node.js lo usa internamente para trabajar con archivos de formas rapida y eficiente.
- Pero no es legible como text humano

<br>

## ✅ Como lo convierto a texto?
- Para ver el contenido en formato legible, debemos usar el metodo.toString() sobre el resultado:
```js
const resultado = fs.readFileSync("tareas.txt");
console.log(resultado.toString());
```

<br>

## 💬 Resultado esperando en terminal
```js
1. Pasear al perro
2. Ir al Gym
3. Estudiar
4. Limpiar el bano
```

<br>

## 🔄 Relacion con writeFileSync
- Este metodo lee exactamente lo que escribimos antes
- Si modificamos el contenido de la constante tareas en el archivo.js y volvemos a ejecutar ```writeFileSync```, se sobreescribira el archivo
- Luego, al usar readFileSync, obtendremos el contenido actualizado

<br>

## 🧪 Ejemplo completo
```js
const fs = require("fs"):

const tareas = `
1. Pasear al perro
2. Ir al Gym
3. Estudiar
`;

fs.writeFileSync("tareas.txt", tareas);

const resultado = fs.readFileSync("tareas.txt");
console.log(resultado.toString());
```

<br>

## 🔁 Importar y Exportar modulos propios en Node.js

### 🧠 ¿Para qué sirve?

- En Node JS podemos dividir el codigo en archivos diferentes. Esto nos permite tener un codigo mas ordenado, reutilizable y facil de mantener.

- Por ejemplo si tenemos las funciones `saludar`, `sumar`, o `mostrarLista`, podemos escribirlas en un archivo separado y luego **importarlas** en el archivo principal.

<br>

## 🗂️ Paso 1: Crear archivo `funciones.js`

- Aqui definimos dos funciones y las exportamos:

```js
function data(nombre, apellido, edad, ciudad) {
  console.log(
    `Hola soy ${nombre} ${apellido}, tengo ${edad} anos y vivo en ${ciudad}`
  );
}

function lista(uno, dos, tres)  {
  console.log(`
    1.${uno}
    2.${dos}
    3.${tres}
  `);
}


module.exports = {data, lista};

```
<br>  

- ```function data(...)``` --> Muestra un mensaje personalizado
- ```function lista(...)``` --> Imprime una lista numerada
- ```module.exports = {data, lista} ---> exporta ambas funciones como objeto

<br>

## 💻 Paso 2: Crear un archivo script.js y usar lo que exportamos

```js
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

```

<br>

## 🧪 Resultado en la terminal:

```
1. Pasear al perro
2. Ir al gym
3. Estudiar
4. Limpiar el baño

[{"text":"JavaScript"},{"text":"Java"},{"text":"Python"},{"text":"Typescript"}]

Hola soy Fernando Martinez, tengo 45 años y vivo en Buenos Aires

1. teclado
2. monitor
3. mouse
```