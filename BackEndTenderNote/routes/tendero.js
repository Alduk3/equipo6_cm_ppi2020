const { Router } = require("express");
const router = Router();
const fs = require("fs");
var app = require('express')()

let FileTendero = null
let JSONTendero = null

const loadFile = (req) => {
  const FileTendero = fs.readFileSync(`${req.app.get('ABSOLUTE_PATH')}tendero.json`, 'utf-8');
  const JSONTendero = JSON.parse(FileTendero);
}


router.get("/", (req, res) => {
  res.send("API REST PREFERENCIA TENDERO");
});

router.get("/tendero", (req, res) => {
  loadFile(req)
  res.json(JSONTendero);
});

router.post("/tendero", (req, res) => {
  let id = JSONTendero.length + 1
  loadFile(req)
  let {
    nombre,
    apellidos,
    correo
  } = req.body

  let nuevoUsuario = {
    "id": id,
    "nombre": nombre,
    "apellidos": apellidos,
    "correo": correo
  }

  JSONTendero.push(nuevoUsuario)
  fs.writeFileSync("./tendero.json", JSON.stringify(JSONTendero), "utf-8")
  res.status(200).json(nuevoUsuario)
})

router.get("/tendero/:id", (req, res) => {
  let id = req.params.id
  loadFile(req)
  let tenderoEncontrado = JSONTendero.find
    (usuario => usuario.id == id)

  if (tenderoEncontrado != undefined)
    res.status(200).json(tenderoEncontrado)
  else
    res.status(200).json({})
})

router.put("/tendero/:id", (req, res) => {
  let id = req.params.id
  let { nombre, apellidos, correo } = req.body
  loadFile(req)
  let usuarioModificado = JSONTendero.find(usuario => {
    if (usuario.id == id) {
      usuario.nombre = nombre
      usuario.apellidos = apellidos
      usuario.correo = correo
      return usuario
    }
  })

  if (usuarioModificado != undefined) {
    fs.writeFileSync('./tendero.json', JSON.stringify(JSONTendero), 'utf-8')
    res.status(200).json(usuarioModificado)
  } else {
    res.status(200).json(`El tendero no existe`)
  }
})

router.delete("/tendero/:id", (req, res) => {
  let id = req.params.id
  loadFile(req)
  let indexUsuario = JSONTendero.findIndex
    (usuario => usuario.id == id)
  if (indexUsuario != -1) {
    JSONTendero.splice(indexUsuario, 1)
    fs.writeFileSync('./tendero.json', JSON.stringify(JSONTendero), 'utf-8')
    res.status(200).json(indexUsuario + 1)
  } else {
    res.status(200).json(`El tendero no existe`)
  }
})

module.exports = router;
