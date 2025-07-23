# 6. Backend con Node JS y Express

## 6.1 Introducción a Node

### 6.1.1 Clase: Introducción a Node

<font color="#21eb1f">**Objetivo General**</font>

- Crear una aplicacion en Node que resgistre y lea informacion en formato JSON

<font color="#21eb1f">**Objetivos De La Clase**</font>

1. Ejecutar scripts con Node Js desde la terminal
2. Crear archivos con el modulo File System
3. Leer archivos con el modulo File System
4. Importar y Exportar modulos en Node JS

<br>

<font color="#21eb1f">**Por que Node JS?**</font>

Porque Node JS nos permite usar JavaScript para crear programas que funcionan fuera del navegador, en el lado del servidor. <br><br>
Esto significa que no solo podemos hacer paginas web sino tambien crear archivos, leer datos, manejar servidores, conectarnos a bases de datos y automatizar tareas... todo usando el mismo lenguaje que ya conocemos en el FrontEnd.

<br>

<font color="#21eb1f">**Mi Primer Script**</font>

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

<font color="#21eb1f">**Ejecutar JavaScript desde la Terminal**</font>

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

<font color="#21eb1f">**Hola mundo con Node JS**</font>

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

<font color="#21eb1f">**Objetivos De La Clase Completados**</font>

1. Ejecutar scripts con Node Js desde la terminal ✅

<br><br>

<font color="#21eb1f">**El Modulo File System**</font>