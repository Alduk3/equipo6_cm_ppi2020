const {Router} = require('express')
const router = Router()
const {connection} = require('./../db/mysql')
//connection.connect()

router.get('/usuario', (req, res) => {
  try{
    connection.query("SELECT * FROM usuario", (error, rows, fields) => {
      if(error){
        res.status(503).json({mensaje : "Error en el servidor.", error : true, errorDB : error})
      }
      res.json(rows)
    })
  }catch(error){
    res.status(503).json({mensaje : "Error en el servidor.", error : true})
  }
})

router.get('/usuario/:id_usuario', (req, res) => {
  try{
    const id = req.params.id
    connection.query(`SELECT * 
                      FROM usuario
                      WHERE id_usuario = ?`, [id])
  }catch(error){
    res.status(503).json({mensaje : "Error en el servidor.", error : true})
  }
})

router.put('/usuario/:id_usuario', (req, res) => {
  try{
    const id_usuario = req.params.id
    const {
      nombre,
      apellido,
      correo
    } = req.body

    connection.query(`UPDATE usuario
                      SET nombre = ?, apellido = ?,
                      correo = ? WHERE id_usuario = ?`,[nombre, apellido, correo, id_usuario], (error, resulset, fields) => {
                        if(error){
                          res.status(502).json({mensaje: "Error en motor de base de datos."})
                        }else{
                          res.status(201).json({
                            id_usuario : id_usuario,
                            nombre : nombre,
                            apellido : apellido,
                            correo : correo
                          })
                        }
                      } 
                    )

 //   console.log(id)
  }catch(error){
    res.status(502).json({mensaje : "Error en el servidor."})
  }
})

router.post('/usuario', (req, res) => {
  try{
    const {
      nombre,
      apellido,
      correo
    } = req.body    
    const SQL = `INSERT INTO usuario (nombre, apellido,correo) 
                       VALUES(?,?,?)`
    const parametros = [nombre, apellido, correo]
    connection.query(SQL, parametros, (error, results, fields) => {
      if(error){
        console.log(error)
        res.status(502).json({mensaje : 'Error ejecutando la consulta.'})
      }else{
        console.log(results)
        res.status(201).json({
                              id_usuario : results.insertId,
                              nombre : nombre,
                              apellido : apellido,
                              correo : correo})
      }
    })
  }catch(error){
    res.status(502).json({mensaje:"Error en el servidor"})
  }
})

router.delete('/usuario/:id', (req, res) => {
  try{
    const {id} = req.params
    const SQL = `DELETE FROM usuario WHERE id_usuario = ?`
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
