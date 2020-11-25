const {Router} = require ('express');
const router = Router();
const {connection} = require('./../db/mysql_pool');


router.get('/stock', (req, res) => {
  try{
    connection.query("SELECT * FROM stock", (error, rows, fields) => {
      if(error){
        res.status(503).json({mensaje : "Error en el servidor.", error : true, errorDB : error})
      }
      res.json(rows)
    })
  }catch(error){
    res.status(503).json({mensaje : "Error en el servidor.", error : true})
  }
})

router.get('/stock/:id',(req,res)=>{
  const {id} = req.params;
  connection.query(`SELECT * FROM stock WHERE Id_stock = ?`, [id],(err, rows, fields)=>{
    if(!err){
      res.json(rows[0])
    }else{
      console.log(err)
    }
  });
});

router.put('/stock/:id', (req, res) => {
  try{
    const Id_stock = req.params.id
    const {
      Cantidad
    } = req.body

    connection.query(`UPDATE stock
                      SET Cantidad = ? WHERE Id_stock = ?`,[Cantidad, Id_stock], (error, resulset, fields) => {
                        if(error){
                          res.status(502).json({mensaje: "Error en motor de base de datos."})
                        }else{
                          res.status(201).json({
                            Id_stock : Id_stock,
                            Cantidad : Cantidad
                          })
                        }
                      } 
                    )

 //   console.log(id)
  }catch(error){
    res.status(502).json({mensaje : "Error en el servidor."})
  }
})

module.exports = router;