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