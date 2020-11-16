const {Router } = require ('express');
const router = Router ();
const connection = require ('./../db/mysql');

router.get ('/notificaciones', (req,res) => {
  try{ connection.query('SELECT * FROM `Notificaciones`', (error, rows, fields) =>{
    if (!error) {
      res.status (503).json ({mensaje:"Ha ocurrido un error en el servidor"})
    }
  })

  } catch (error) {
    res.json (rows)
  }
})
