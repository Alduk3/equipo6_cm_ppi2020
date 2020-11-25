const { Router } = require('express')
const router = Router()
const path = require('path')
const multer = require('multer')
const { v4: uuidv4 } = require('uuid')
const { connection } = require('./../db/mysql_pool')
//connection.connect()

const cargador = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../public/uploads'))
    },
    filename: (req, file, cb) => {
      cb(null, uuidv4() + path.extname(file.originalname));
    }
  })
})

router.get('/producto', (req, res) => {
  try {
    connection.query("SELECT * FROM producto", (error, rows, fields) => {
      if (error) {
        res.status(503).json({ mensaje: "Error en el servidor.", error: true, errorDB: error })
      }
      res.json(rows)
    })
  } catch (error) {
    res.status(503).json({ mensaje: "Error en el servidor.", error: true })
  }
})

router.get('/producto/:id', (req, res) => {
  const { id } = req.params;
  connection.query(`SELECT * FROM producto WHERE Id_producto = ?`, [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0])
    } else {
      console.log(err)
    }
  });
});

router.put('/producto/:id', (req, res) => {
  try {
    const Id_producto = req.params.id
    const {
      Nombre,
      Cantidad,
      Valor,
      Id_usuario
    } = req.body

    connection.query(`UPDATE producto
                      SET Nombre = ?, Cantidad = ?, Valor = ?, Id_usuario = ? WHERE Id_producto = ?`, [Nombre, Cantidad, Valor, Id_usuario, Id_producto], (error, resulset, fields) => {
      if (error) {
        res.status(502).json({ mensaje: "Error en motor de base de datos." })
      } else {
        res.status(201).json({
          Id_producto: Id_producto,
          Nombre: Nombre,
          Cantidad: Cantidad,
          Valor: Valor,
          Id_usuario: Id_usuario
        })
      }
    }
    )

    //   console.log(id)
  } catch (error) {
    res.status(502).json({ mensaje: "Error en el servidor." })
  }
})

router.post('/producto', (req, res) => {
  try {
    const {
      Nombre,
      Cantidad,
      Valor,
      Id_usuario
    } = req.body
    const SQL = `INSERT INTO producto (Nombre, Cantidad, Valor, Id_usuario) 
                       VALUES(?,?,?,?)`
    const parametros = [Nombre, Cantidad, Valor, Id_usuario]
    connection.query(SQL, parametros, (error, results, fields) => {
      if (error) {
        console.log(error)
        res.status(502).json({ mensaje: 'Error ejecutando la consulta.' })
      } else {
        console.log(results)
        res.status(201).json({
          Id_producto: results.insertId,
          Nombre: Nombre,
          Cantidad: Cantidad,
          Valor: Valor,
          Id_usuario: Id_usuario
        })
      }
    })
  } catch (error) {
    res.status(502).json({ mensaje: "Error en el servidor" })
  }
})

router.delete('/producto/:id', (req, res) => {
  try {
    const { id } = req.params
    const SQL = `DELETE FROM producto WHERE Id_producto = ?`
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

router.post('/producto/imagen-producto', cargador.single('imagen_producto'), async (req, res) => {
  if (req.file) {
    const { id_producto } = req.body
    const response = await connection.query(`UPDATE producto SET Img_producto = ? WHERE Id_producto = ?`, [JSON.stringify(req.file), id_producto])
    res.json({ mensaje: "El archivo fue cargado exitosamente", archivo: { ruta: 'uploads/' + req.file.filename } })
  } else {
    res.json({ mensaje: "El archivo no se cargo" })
  }

})

module.exports = router
