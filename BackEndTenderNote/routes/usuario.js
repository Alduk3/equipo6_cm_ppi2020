//const { Router } = require("express");
//const router = Router();
//const fs = require("fs");
//var app = require('express')()
//const FileTendero = fs.readFileSync("./usuario.json", "utf-8")
//const JSONTendero = JSON.parse(FileTendero)

//let FileTendero = null
//let JSONTendero = null

//const loadFile = (req) => {
  //const FileTendero = fs.readFileSync(`${req.app.get('ABSOLUTE_PATH')}usuario.json`, 'utf-8');
  //const JSONTendero = JSON.parse(FileTendero);
//}


//router.get("/", (req, res) => {
  //res.send("API REST USUARIO");
//});

//router.get("/usuario", (req, res) => {
  //loadFile(req)
  //res.json(JSONTendero);
//});

//router.post("/usuario", (req, res) => {
  //let id = JSONTendero.length + 1 
  //loadFile(req)
  //let {
    //nombre,
    //apellidos,
    //correo
  //} = req.body

  //let nuevoUsuario = {
    //"id_usuario": id,
    //"nombre": nombre,
    //"apellidos": apellidos,
    //"correo": correo
  //}

  //JSONTendero.push(nuevoUsuario)
  //fs.writeFileSync("./usuario.json", JSON.stringify(JSONTendero), "utf-8")
  //res.status(200).json(nuevoUsuario)
//})

//router.get("/usuario/:id", (req, res) => {
  //let id = req.params.id
  //loadFile(req)
  //let tenderoEncontrado = JSONTendero.find
    //(usuario => usuario.id == id)

  //if (tenderoEncontrado != undefined)
    //res.status(200).json(tenderoEncontrado)
  //else
    //res.status(200).json({})
//})

//router.put("/usuario/:id", (req, res) => {
  //let id = req.params.id
  //let { nombre, apellidos, correo } = req.body
  //loadFile(req)
  //let usuarioModificado = JSONTendero.find(usuario => {
    //if (usuario.id == id) {
      //usuario.nombre = nombre
      //usuario.apellidos = apellidos
      //usuario.correo = correo
      //return usuario
    //}
  //})

  //if (usuarioModificado != undefined) {
    //fs.writeFileSync('./usuario.json', JSON.stringify(JSONTendero), 'utf-8')
    //res.status(200).json(usuarioModificado)
  //} else {
    //res.status(200).json(`El tendero no existe`)
  //}
//})

//router.delete("/usuario/:id", (req, res) => {
  //let id = req.params.id
  //loadFile(req)
  //let indiceUsuario = JSONTendero.findIndex
    //(usuario => usuario.id == id)
  //if (indiceUsuario != -1) {
    //JSONTendero.splice(indiceUsuario, 1)
    //fs.writeFileSync('./usuario.json', JSON.stringify(JSONTendero), 'utf-8')
    //res.status(200).json(indiceUsuario + 1)
  //} else {
    //res.status(200).json(`El tendero no existe`)
  //}
//})

//module.exports = router;

const { Router } = require("express")
const router = Router()
const {connection} = require('../db/mysql')
    
router.get("/usuario", (req, res) => {
    //connection.connect()
    connection.query('SELECT * FROM usuario',  (error, rows, fields) => {
        if(!error){
          connection.end()
          res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

  
module.exports = router
