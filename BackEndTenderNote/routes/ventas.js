const { Router } = require("express");
const router = Router();
const fs = require("fs");
var app = require('express')()

//const FileVentas = fs.readFileSync("./ventas.json", "utf-8")
//const JSONVentas = JSON.parse(FileVentas)

let FileVentas = null
let JSONVentas = null

const loadFile = (req) => {
  const FileVentas = fs.readFileSync(`${req.app.get('ABSOLUTE_PATH')}ventas.json`, 'utf-8');
  const JSONVentas = JSON.parse(FileVentas);
}


router.get("/", (req, res) => {
  res.send("API REST USUARIO");
});

router.get("/ventas", (req, res) => {
  loadFile(req)
  res.json(JSONVentas);
});

router.get("/ventas/:id", (req, res) => {
  let id = req.params.id
  loadFile(req)
  let ventaEncontrada = JSONVentas.find
    (venta => venta.id == id)

  if (ventaEncontrada != undefined)
    res.status(200).json(ventaEncontrada)
  else
    res.status(200).json(`El ID ${id} no existe`)
})

router.post("/ventas", (req, res) => {
  let id = JSONVentas.length + 1 
  loadFile(req)
  let { cantidad } = req.body

  let nuevaVenta = {
    "id_ventas": id,
    "cantidad": cantidad
  }

  JSONVentas.push(nuevaVenta)
  fs.writeFileSync("./ventas.json", JSON.stringify(JSONVentas), "utf-8")
  res.status(200).json(nuevaVenta)
})


router.put("/ventas/:id", (req, res) => {
  let id = req.params.id
  let { cantidad } = req.body
  loadFile(req)
  let ventaModificada = JSONVentas.find(venta => {
    if (venta.id == id) {
      venta.cantidad = cantidad
      return venta
    }
  })

  if (ventaModificada != undefined) {
    fs.writeFileSync('./ventas.json', JSON.stringify(JSONVentas), 'utf-8')
    res.status(200).json(ventaModificada)
  } else {
    res.status(200).json(`La venta ${id} no existe`)
  }
})

router.delete("/ventas/:id", (req, res) => {
  let id = req.params.id
  loadFile(req)
  let indiceVenta = JSONVentas.findIndex
    (venta => venta.id == id)
  if (indiceUsuario != -1) {
    JSONVentas.splice(indiceVenta, 1)
    fs.writeFileSync('./ventas.json', JSON.stringify(JSONVentas), 'utf-8')
    res.status(200).json({mensaje : `La venta ${id} fue eliminado`})
  } else {
    res.status(200).json(`La venta ${id} no existe`)
  }
})

module.exports = router;
