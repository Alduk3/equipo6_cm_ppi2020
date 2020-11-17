const {Router} = require ('express');
const router = Router();
const {connection} = require('./../db/mysql');

/*router.get('/notificaciones', (req,res) => {
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
})*/

router.get('/notificaciones/:id', (req, res) => {
  const {id} = req.params;
  connection.query('SELECT * FROM notificaciones WHERE Id_notificaciones = ?',[id],(err, rows, fields) => {
      if(err){
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

router.post('/notificaciones', (req, res)=> {
  const {descripcion}=req.body;
  let datanotificacion = [descripcion];
  let newnotificacion = `INSERT INTO notificaciones (Descripcion) VALUES (?)`;
  connection.query(newnotificacion, datanotificacion, (err, results, fields)=> {
    if(err){
      return console.error(err.message)
    }
    res.json
  })
})

module.exports = router






