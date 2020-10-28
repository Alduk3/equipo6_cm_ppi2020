const { Router } = require("express");
const router = Router();
const fs = require("fs");

const FileTendero = fs.readFileSync("./tendero.json", "utf-8");
const JSONTendero = JSON.parse(FileTendero);

router.get("/", (req, res) => {
  res.send("API REST PREFERENCIA TENDERO");
});

router.get("/tendero", (req, res) => {
  res.json(JSONTendero);
});

router.post("/tendero", (req,res)=>{
let id = JSONTendero.length + 1
let {nombre, apellidos, correo} = req.body
let nuevoUsuario = {
  "id": id,
  "nombre" : nombre,
  "apellidos" : apellidos,
  "correo" : correo
}

JSONTendero.push(nuevoUsuario)
fs.writeFileSync("./tendero.json", JSON.stringify(JSONTendero) , "utf-8")
res.status(201).json(nuevoUsuario)
})

router.get("/tendero/:id", (req,res) => {
  let id = req.params.id
  let tenderoEncontrado = JSONTendero.find
  (usuario => usuario.id == id)

  if(tenderoEncontrado != undefined)
    res.status(200).json(tenderoEncontrado)
  else
    res.json(`El ID ${id} no existe`)
})

router.put("/tendero/:id", (req,res) => {
  let id = req.params.id 
  let {nombre, apellidos, correo} = req.body

  let usuarioModificado = JSONTendero.find(usuario => {
    if(usuario.id == id){
      usuario.nombre = nombre
      usuario.apellidos = apellidos
      usuario.correo = correo
      return usuario
    }
  })

  if(usuarioModificado != undefined){
    fs.writeFileSync('./tendero.json', JSON.stringify(JSONTendero), 'utf-8')
    res.status(201).json(usuarioModificado)
  }else{
    res.status(200).json(`El ID ${id} no existe`)
  }
})

router.delete("/tendero/:id", (req, res) => {
  let id = req.params.id
  let indexUsuario = JSONTendero.findIndex
  (usuario => usuario.id == id)
  if(indexUsuario != -1){
    JSONTendero.splice(indexUsuario, 1)
    fs.writeFileSync('./tendero.json', JSON.stringify(JSONTendero), 'utf-8')
    res.status(200).json({mensaje : `Usuario ${id} fue eliminado`})
  }else{
    res.json(`El id ${id} no existe`)
  }
})

module.exports = router;
