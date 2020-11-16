/*const { Router } = require("express");
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
        "id_producto": id,
        "imagenProducto": imagenProducto,
        "nombre":nombreProducto,
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
    let { imagenProducto ,nombre, precio , cantidad ,descripcion } = req.body
    loadFile(req)
    let productoModificado = JSONProducto.find(producto => {
      if (producto.id == id) {
        producto.imagenProducto = imagenProducto
        producto.nombre = nombre
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

module.exports = router;*/

const {Router} = require('express')
const router = Router()
const {connection} = require('./../db/mysql')
//connection.connect()

router.get('/producto', (req, res) => {
  try{
    connection.query("SELECT * FROM producto", (error, rows, fields) => {
      if(error){
        res.status(503).json({mensaje : "Error en el servidor.", error : true, errorDB : error})
      }
      res.json(rows)
    })
  }catch(error){
    res.status(503).json({mensaje : "Error en el servidor.", error : true})
  }
})

router.get('/producto/:id_producto', (req, res) => {
  try{
    const id = req.params.id
    connection.query(`SELECT * 
                      FROM producto
                      WHERE producto = ?`, [id])
  }catch(error){
    res.status(503).json({mensaje : "Error en el servidor.", error : true})
  }
})

router.put('/producto/:id_producto', (req, res) => {
  try{
    const id_producto = req.params.id
    const {
      nombre,
      cantidad,
      valor,
      id_usuario
    } = req.body

    connection.query(`UPDATE producto
                      SET nombre = ?, cantidad = ?, valor = ?, id_usuario = ? WHERE id_producto = ?`,[nombre, cantidad, valor,  id_usuario, id_producto], (error, resulset, fields) => {
                        if(error){
                          res.status(502).json({mensaje: "Error en motor de base de datos."})
                        }else{
                          res.status(201).json({
                            id_producto : id_producto,
                            nombre : nombre,
                            cantidad : cantidad,
                            valor : valor,
                            id_usuario : id_usuario
                          })
                        }
                      } 
                    )

 //   console.log(id)
  }catch(error){
    res.status(502).json({mensaje : "Error en el servidor."})
  }
})

router.post('/producto', (req, res) => {
  try{
    const {
      nombre,
      cantidad,
      valor,
      id_usuario
    } = req.body    
    const SQL = `INSERT INTO producto (nombre, cantidad, valor, id_usuario) 
                       VALUES(?,?,?,?)`
    const parametros = [nombre, cantidad, valor, id_usuario]
    connection.query(SQL, parametros, (error, results, fields) => {
      if(error){
        console.log(error)
        res.status(502).json({mensaje : 'Error ejecutando la consulta.'})
      }else{
        console.log(results)
        res.status(201).json({
                              id_producto : results.insertId,
                              nombre: nombre, 
                              cantidad: cantidad,
                              valor: valor,
                              id_usuario: id_usuario})
      }
    })
  }catch(error){
    res.status(502).json({mensaje:"Error en el servidor"})
  }
})

router.delete('/producto/:id', (req, res) => {
  try{
    const {id} = req.params
    const SQL = `DELETE FROM producto WHERE id_producto = ?`
    connection.query(SQL, [id], (error, results, fields) => {
      if(error){
        res.status(502).json({mensaje : 'Error ejecutando la consulta'})
      }else{
        if(results.affectedRows > 0)
          res.json({mensaje : "Registro eliminado"})
        else
          res.json({mensaje : "El registro no existe"})
      }
    })
  }catch(error){
    res.status(502).json({mensaje:"Error en el servidor"})
  }
})
  
module.exports = router
