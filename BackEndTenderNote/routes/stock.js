const { Router } = require("express");
const router = Router();
const fs = require("fs");
//var app = require('express')()
const FileStock = fs.readFileSync("./stock.json", "utf-8")
const JSONStock = JSON.parse(FileStock)

//let FileVentas = null
//let JSONVentas = null

//const loadFile = (req) => {
  //const FileVentas = fs.readFileSync(`${req.app.get('ABSOLUTE_PATH')}ventas.json`, 'utf-8');
  //const JSONVentas = JSON.parse(FileVentas);
//}


router.get("/", (req, res) => {
  res.send("API REST USUARIO");
});

router.get("/stock", (req, res) => {
  //loadFile(req)
  res.json(JSONStock);
});

router.post("/stock", (req, res) => {
  let id = JSONStock.length + 1 
  //loadFile(req)
  let { cantidad } = req.body

  let nuevoStock = {
    "id_stock": id,
    "cantidad": cantidad
  }

  JSONStock.push(nuevoStock)
  fs.writeFileSync("./stock.json", JSON.stringify(JSONStock), "utf-8")
  res.status(201).json(nuevoStock)
})

router.get("/stock/:id", (req, res) => {
  let id = req.params.id
  //loadFile(req)
  let stockEncontrado = JSONStock.find
    (stock => stock.id == id)

  if (stockEncontrado != undefined)
    res.status(201).json(stockEncontrado)
  else
    res.status(200).json(`El stock ${id} no existe`)
})

router.put("/stock/:id", (req, res) => {
  let id = req.params.id
  let { cantidad } = req.body
  //loadFile(req)
  let ventaModificada = JSONStock.find(stock => {
    if (stock.id == id) {
      stock.cantidad = cantidad
      return stock
    }
  })

  if (stockModificado != undefined) {
    fs.writeFileSync('./stock.json', JSON.stringify(JSONStock), 'utf-8')
    res.status(201).json(stockModificado)
  } else {
    res.status(200).json(`El stock ${id} no existe`)
  }
})

router.delete("/stock/:id", (req, res) => {
  let id = req.params.id
  //loadFile(req)
  let indiceStock = JSONStock.findIndex
    (stock => stock.id == id)
  if (indiceStock != -1) {
    JSONStock.splice(indiceStock, 1)
    fs.writeFileSync('./stock.json', JSON.stringify(JSONStock), 'utf-8')
    res.status(200).json({mensaje : `El stock ${id} fue eliminado`})
  } else {
    res.status(200).json(`El stock ${id} no existe`)
  }
})

module.exports = router;