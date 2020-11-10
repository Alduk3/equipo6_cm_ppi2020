const { Router } = require("express");
const router = Router();
const fs = require("fs");
//var app = require('express')()
const FileSalidas = fs.readFileSync("./salidas.json", "utf-8")
const JSONSalidas = JSON.parse(FileVentas)

//let FileSalidas = null
//let JSONSalidas = null

//const loadFile = (req) => {
  //const FileSalidas = fs.readFileSync(`${req.app.get('ABSOLUTE_PATH')}salidas.json`, 'utf-8');
  //const JSONVentas = JSON.parse(FileVentas);
//}


router.get("/", (req, res) => {
  res.send("API REST SALIDAS");
});

router.get("/salidas", (req, res) => {
  //loadFile(req)
  res.json(JSONSalidas);
});

router.post("/salidas", (req, res) => {
  let id = JSONSalidas.length + 1 
  //loadFile(req)
  let { valor_total,cantidad } = req.body

  let nuevaSalida = {
    "id_salidas": id,
    "valor_total" : valor_total ,
    "cantidad": cantidad
  }

  JSONSalidas.push(nuevaSalida)
  fs.writeFileSync("./salidas.json", JSON.stringify(JSONSalidas), "utf-8")
  res.status(201).json(nuevaSalida)
})

router.get("/salidas/:id", (req, res) => {
  let id = req.params.id
  //loadFile(req)
  let salidaEncontrada = JSONSalida.find
    (salida => salida.id == id)

  if (salidaEncontrada != undefined)
    res.status(201).json(salidaEncontrada)
  else
    res.status(200).json(`La salida ${id} no existe`)
})

router.put("/salidas/:id", (req, res) => {
  let id = req.params.id
  let { valor_total, cantidad } = req.body
  //loadFile(req)
  let salidaModificada = JSONSalidas.find(salida => {
    if (salida.id == id) {
      salida.valor_total = valor_total
      salida.cantidad = cantidad
      return salida
    }
  })

  if (salidaModificada != undefined) {
    fs.writeFileSync('./salidas.json', JSON.stringify(JSONSalidas), 'utf-8')
    res.status(201).json(salidaModificada)
  } else {
    res.status(200).json(`La salida ${id} no existe`)
  }
})

router.delete("/salida/:id", (req, res) => {
  let id = req.params.id
  //loadFile(req)
  let indiceSalida = JSONSalidas.findIndex
    (salida => salida.id == id)
  if (indiceSalida != -1) {
    JSONSalidas.splice(indiceSalida, 1)
    fs.writeFileSync('./salidas.json', JSON.stringify(JSONSalidas), 'utf-8')
    res.status(200).json({mensaje : `La salida ${id} fue eliminada`})
  } else {
    res.status(200).json(`La salida ${id} no existe`)
  }
})

module.exports = router;