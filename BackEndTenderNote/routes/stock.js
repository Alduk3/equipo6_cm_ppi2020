const {Router} = require ('express');
const router = Router();
const {connection} = require('./../db/mysql_pool');

router.get("/stock/:id", (req, res) => {
  try {
    const Id_stock = req.params.id
    connection.query(`SELECT * 
                      FROM stock
                      WHERE Id_stock = ?`, [Id_stock],(error, rows)=>{
                        if(!error){res.json(rows)}else{console.log(error)}
                      })
  } catch (error) {
    res.status(503).json({ mensaje: "Error en el servidor.", error: true })
  }
});

router.put("/salidas/:id", (req, res) => {
    try {
    const id_ingresos = req.params.id
    const {
      cantidad,
      valor_total
    } = req.body

    connection.query(`UPDATE stock
                      SET cantidad = ?, valor_total = ?
                      WHERE id_salidas = ?`, [ cantidad, valor_total, id_salidas], (error, resulset, fields) => {
        if (error) {
          res.status(502).json({ mensaje: "Error en motor de base de datos." })
        } else {
          res.status(201).json({
            id_salidas: id_salidas,
            cantidad: cantidad,
            valor_total: valor_total
          })
        }
      }
    )

    //   console.log(id)
  } catch (error) {
    res.status(502).json({ mensaje: "Error en el servidor." })
  }

module.exports = router;