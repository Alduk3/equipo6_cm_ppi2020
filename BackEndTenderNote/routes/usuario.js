const {Router} = require('express')
const router = Router()
const {connection} = require('./../db/mysql_pool')

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

router.get('/usuario/:id',(req,res)=>{
  const {id} = req.params;
  connection.query(`SELECT * FROM usuario WHERE Id_usuario = ?`, [id],(err, rows, fields)=>{
    if(!err){
      res.json(rows[0])
    }else{
      console.log(err)
    }
  });
});

router.put('/usuario/:id', (req, res) => {
  try{
    const Id_usuario = req.params.id
    const {
      Nombre,
      Apellido,
      Correo
    } = req.body

    connection.query(`UPDATE usuario
                      SET Nombre = ?, Apellido = ?,
                      Correo = ? WHERE Id_usuario = ?`,[Nombre, Apellido, Correo, Id_usuario], (error, resulset, fields) => {
                        if(error){
                          res.status(502).json({mensaje: "Error en motor de base de datos."})
                        }else{
                          res.status(201).json({
                            Id_usuario : Id_usuario,
                            Nombre : Nombre,
                            Apellido : Apellido,
                            Correo : Correo
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
      Nombre,
      Apellido,
      Correo
    } = req.body    
    const SQL = `INSERT INTO usuario (Nombre, Apellido,Correo) VALUES(?,?,?)`
    const parametros = [Nombre, Apellido, Correo]
    connection.query(SQL, parametros, (error, results, fields) => {
      if(error){
        console.log(error)
        res.status(502).json({mensaje : 'Error ejecutando la consulta.'})
      }else{
        console.log(results)
        res.status(201).json({
                              Id_usuario : results.insertId,
                              Nombre : Nombre,
                              Apellido : Apellido,
                              Correo : Correo})
                              }
    })
  }catch(error){
    res.status(502).json({mensaje:"Error en el servidor"})
  }
})

router.delete('/usuario/:id', (req, res) => {
  try{
    const {id} = req.params
    const SQL = `DELETE FROM usuario WHERE Id_usuario = ?`
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