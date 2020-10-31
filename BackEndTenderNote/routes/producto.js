const { Router } = require("express");
const router = Router();
const fs = require("fs");
var app = require('express')()

let FileProduto = null
let JSONProducto = null

const loadFile = (req) => {
  const FileProducto = fs.readFileSync(`${req.app.get('ABSOLUTE_PATH')}producto.json`, 'utf-8');
  const JSONProducto = JSON.parse(FileProducto);
}
router.get("/", (req, res) => {
    res.send("API REST PRODUCTO");
  });
  
  router.get("/producto", (req, res) => {
    loadFile(req)
    res.json(JSONProducto);
  });
  
  router.post("/producto", (req, res) => {
    let id = JSONProducto.length + 1
    loadFile(req)
    let {
        imagenProducto,
        nombreProducto,
        precio,
        cantidad,
        descripcion
    } = req.body
  
    let nuevoProducto = {
        "id": id,
        "imagenProducto": imagenProducto,
        "nombreProducto":nombreProducto,
        "precio": precio,
        "cantidad": cantidad,
        "descripcion": descripcion
    }
  
    JSONProducto.push(nuevoProducto)
    fs.writeFileSync("./producto.json", JSON.stringify(JSONProducto), "utf-8")
    res.status(200).json(nuevoProducto)
  })
  
  router.get("/producto/:id", (req, res) => {
    let id = req.params.id
    loadFile(req)
    let productoEncontrado = JSONProducto.find
      (producto => producto.id == id)
  
    if (productoEncontrado != undefined)
      res.status(200).json(productoEncontrado)
    else
      res.status(200).json({})
  })
  
  router.put("/producto/:id", (req, res) => {
    let id = req.params.id
    let { imagenProducto ,nombreProducto, precio , cantidad ,descripcion } = req.body
    loadFile(req)
    let productoModificado = JSONProducto.find(producto => {
      if (producto.id == id) {
        producto.imagenProducto = imagenProducto
        producto.nombreProducto = nombreProducto
        producto.precio = precio
        producto.cantidad = cantidad
        producto.descripcion = descripcion
        return producto
      }
    })
  
    if (productoModificado != undefined) {
      fs.writeFileSync('./producto.json', JSON.stringify(JSONProducto), 'utf-8')
      res.status(200).json(productoModificado)
    } else {
      res.status(200).json(`El producto no existe`)
    }
  })
  
  router.delete("/producto/:id", (req, res) => {
    let id = req.params.id
    loadFile(req)
    let indiceProducto = JSONProducto.findIndex
      (producto => producto.id == id)
    if (indiceProducto != -1) {
      JSONProducto.splice(indiceProducto, 1)
      fs.writeFileSync('./producto.json', JSON.stringify(JSONProducto), 'utf-8')
      res.status(200).json(indiceProducto + 1)
    } else {
      res.status(200).json(`El producto no existe`)
    }
  })

module.exports = router;