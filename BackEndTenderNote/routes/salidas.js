const { Router } = require('express')
const router = Router()
const { connection } = require('./../db/mysql_pool')

router.get("/salidas", (req, res) => {
    try {
    connection.query("SELECT * FROM salidas", (error, rows, fields) => {
      if (error) {
        res.status(503).json({ mensaje: "Error en el servidor.", error: true, errorDB: error })
      }
      res.json(rows)
    })
  } catch (error) {
    res.status(503).json({ mensaje: "Error en el servidor.", error: true })
  }
});

router.get('/salidas/:id',(req,res)=>{
  const {Id_salidas} = req.params;
  connection.query(`SELECT * FROM salidas WHERE Id_salidas = ?`, [Id_salidas],(err, rows, fields)=>{
    if(!err){
      res.json(rows[0])
    }else{
      console.log(err)
    }
  });
});

router.post("/salidas", (req, res) => {
    try {
    const {
      Cantidad,
      Valor_total
    } = req.body
    const SQL = `INSERT INTO salidas (Cantidad, Valor_total)VALUES(?,?)`
    const parametros = [Cantidad, Valor_total]
    connection.query(SQL, parametros, (error, results, fields) => {
      if (error) {
        console.log(error)
        res.status(502).json({ mensaje: 'Error ejecutando la consulta.' })
      } else {
        console.log(results)
        res.status(201).json({
          Id_salidas: results.insertId,
          Cantidad: Cantidad,
          Valor_total : Valor_total
        })
      }
    })
  } catch (error) {
    res.status(502).json({ mensaje: "Error en el servidor" })
  }
})

router.put("/salidas/:id", (req, res) => {
    try {
    const Id_salidas = req.params.id
    const {
      Cantidad,
      Valor_total
    } = req.body

    connection.query(`UPDATE salidas
                      SET Cantidad = ?, Valor_total = ?
                      WHERE Id_salidas = ?`, [ Cantidad, Valor_total, Id_salidas], (error, resulset, fields) => {
        if (error) {
          res.status(502).json({ mensaje: "Error en motor de base de datos." })
        } else {
          res.status(201).json({
            Id_salidas: Id_salidas,
            Cantidad: Cantidad,
            Valor_total: Valor_total
          })
        }
      }
    )
  } catch (error) {
    res.status(502).json({ mensaje: "Error en el servidor." })
  }
})

router.delete("/salidas/:id", (req, res) => {
   try {
    const { Id_salidas } = req.params
    const SQL = `DELETE FROM salidas WHERE id_salidas = ?`
    connection.query(SQL, [Id_salidas], (error, results, fields) => {
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

module.exports = router;