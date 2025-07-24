# 6. Backend con Node JS y Express

## 6.1 Introducción a Node

### 6.1.1 Clase: Introducción a Node

**Objetivo General**

- Crear una aplicacion en Node que resgistre y lea informacion en formato JSON

**Objetivos De La Clase**

1. Ejecutar scripts con Node Js desde la terminal
2. Crear archivos con el modulo File System
3. Leer archivos con el modulo File System
4. Importar y Exportar modulos en Node JS

<br>

**Por que Node JS?**

Porque Node JS nos permite usar JavaScript para crear programas que funcionan fuera del navegador, en el lado del servidor. <br><br>
Esto significa que no solo podemos hacer paginas web sino tambien crear archivos, leer datos, manejar servidores, conectarnos a bases de datos y automatizar tareas... todo usando el mismo lenguaje que ya conocemos en el FrontEnd.

<br>

**Mi Primer Script**

Antes de escribir mi primer programa con Node JS, necesito comprobar que este bien instalado <br><br>
Para hacerlo, abre la terminal y ejecuta el siguiente comando:

```bash
node --version
```
Si recibes una version como resultado por ejemplo 

```
v18.16.0
```
significa que Node JS esta instalado correctamente y ya puedo comenzar a programar

<br>

**Ejecutar JavaScript desde la Terminal**

Para ejecutar JavaScript desde la terminal podemos hacerlo con la palabra 

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

Si quieres ejecutar un archivo JavaScript desde la terminal, deberas ubicarte en la carpeta donde este el archivo y escribir

```
node <nombre del archivo.js> ejemplo script.js
```

**Hola mundo con Node JS**

Desde la carpeta donde quieras practicar vamos a crear un archivo llamado index.js o script.js

Abrelo en VSCODE y escribe lo siguiente:

```
console.log("Hola desde Node);
```
Puedes abrir una nueva terminal desde VSCODE o desde la terminal de tu PC y una vez estes sobre la capeta donde este el archivo js pones lo siguiente:
```
@carloss-macbook-pro 6. Backed con NodeJS y Express % node index.js (o script.js)
Hola desde Node --------> respuesta terminal
```
<br>

**Objetivos De La Clase Completados**

1. Ejecutar scripts con Node Js desde la terminal ✅

<br><br>

**El Modulo File System**