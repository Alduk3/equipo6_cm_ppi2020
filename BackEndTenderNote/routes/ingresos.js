const { Router } = require('express')
const router = Router()
const { connection } = require('./../db/mysql_pool')
//connection.connect()

router.get('/ingresos', (req, res) => {
  try {
    connection.query("SELECT * FROM ingresos", (error, rows, fields) => {
      if (error) {
        res.status(503).json({ mensaje: "Error en el servidor.", error: true, errorDB: error })
      }
      res.json(rows)
    })
  } catch (error) {
    res.status(503).json({ mensaje: "Error en el servidor.", error: true })
  }
})

router.get('/ingresos/:id',(req,res)=>{
  const {id} = req.params;
  connection.query(`SELECT * FROM ingresos WHERE Id_ingresos = ?`, [id],(err, rows, fields)=>{
    if(!err){
      res.json(rows[0])
    }else{
      console.log(err)
    }
  });
});

router.put('/ingresos/:id', (req, res) => {
  try {
    const Id_ingresos = req.params.id
    const {
      Cantidad,
      Valor_und
    } = req.body

    connection.query(`UPDATE ingresos
                      SET Cantidad = ?, Valor_und = ?
                      WHERE Id_ingresos = ?`, [Cantidad, Valor_und, Id_ingresos], (error, resulset, fields) => {
        if (error) {
          res.status(502).json({ mensaje: "Error en motor de base de datos." })
        } else {
          res.status(201).json({
            Id_ingresos: Id_ingresos,
            Cantidad: Cantidad,
            Valor_und: Valor_und
          })
        }
      }
    )

    //   console.log(id)
  } catch (error) {
    res.status(502).json({ mensaje: "Error en el servidor." })
  }
})

router.post('/ingresos', (req, res) => {
  try {
    const {
      Cantidad,
      Valor_und
    } = req.body
    const SQL = `INSERT INTO ingresos (Cantidad, Valor_und) VALUES(?,?)`
    const parametros = [Cantidad, Valor_und]
    connection.query(SQL, parametros, (error, results, fields) => {
      if (error) {
        console.log(error)
        res.status(502).json({ mensaje: 'Error ejecutando la consulta.' })
      } else {
        console.log(results)
        res.status(201).json({
          Id_ingresos: results.insertId,
          Cantidad: Cantidad,
          Valor_und : Valor_und
        })
      }
    })
  } catch (error) {
    res.status(502).json({ mensaje: "Error en el servidor" })
  }
})

router.delete('/ingresos/:id', (req, res) => {
  try {
    const { id } = req.params
    const SQL = `DELETE FROM ingresos WHERE Id_ingresos = ?`
    connection.query(SQL, [id], (error, results, fields) => {
      if (error) {
        res.status(502).json({ mensaje: 'Error ejecutando la consulta' })
      } else {
        if (results.affectedRows > 0)
          res.json({ mensaje: "Registro eliminado" })
        else
          res.json({ mensaje: "El registro no existe" })
      }
    })
  } catch (error) {
    res.status(502).json({ mensaje: "Error en el servidor" })
  }
})

module.exports = router
