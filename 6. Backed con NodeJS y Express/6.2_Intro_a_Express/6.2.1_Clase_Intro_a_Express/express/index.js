const express = require('express')
const app = express()
app.use(express.json());
const fs = require('fs') 


app.get("/home", (req, res) => {
  res.send("Hello World Express Js")
})

app.get("/perfil", (req, res) => {
  res.send("Elondo Mosco")
})

app.get("/productos", (req, res) => {
  const productos = JSON.parse(fs.readFileSync("productos.json"))
  res.json(productos)
})

app.get("/usuarios", (req, res) => {
  const usuarios = JSON.parse(fs.readFileSync("usuarios.json"))
  res.json(usuarios)
})


app.post("/usuarios", (req, res) => {
  const nuevoUsuario = req.body 
  const data = fs.readFileSync("usuarios.json", 'utf8')
  const usuarios = JSON.parse(data)
  usuarios.push(nuevoUsuario)
  fs.writeFileSync("usuarios.json", JSON.stringify(usuarios, null, 2))
  res.send("usuario agregado con exito")
})

app.listen(3000, () => {
  console.log("servidor encendido en http://localhost:3000");
});