const {Router} = require ('express');
const router = Router();
const {connection} = require('./../db/mysql_pool');

router.get('/notificaciones', (req,res) => {
try{
connection.query('SELECT * FROM `notificaciones`',(err, row, fields)=>{
  if(err){
  res.status(503).json({mensje:"Error"})
  }
  res.json(row)
})
}catch(error){
res.status(502).json({mensaje:"La bd offline"})
}
})

router.get('/notificaciones/:id',(req,res)=>{
  const {id} = req.params;
  connection.query(`SELECT * FROM notificaciones WHERE Id_notificaciones = ?`, [id],(err, rows, fields)=>{
    if(!err){
      res.json(rows[0])
    }else{
      console.log(err)
    }
  });
});

router.post('/notificaciones', (req, res) => {
  try {
    const {
      Descripcion
    } = req.body
    const SQL = `INSERT INTO notificaciones (Descripcion) VALUES(?)`
    const parametros = [{Descripcion}]
    connection.query(SQL, parametros, (error, results, fields) => {
      if (error) {
        console.log(error)
        res.status(502).json({ mensaje: 'Error en la bd.' })
      } else {
        console.log(results)
        res.status(201).json({
          Id_notificaciones: results.insertId,
          Descripcion: Descripcion,
       
        })
      }
    })
  } catch (error) {
    res.status(502).json({ mensaje: "Error en el servidor" })
  }
})

module.exports = router






