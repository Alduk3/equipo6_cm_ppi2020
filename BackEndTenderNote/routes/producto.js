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
  connection.query(`SELECT * FROM producto WHERE id_producto = ?`, [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0])
    } else {
      console.log(err)
    }
  });
});

router.put('/producto/:id', (req, res) => {
  try {
    const id_producto = req.params.id
    const {
      nombre,
      cantidad,
      valor,
      id_usuario
    } = req.body

    connection.query(`UPDATE producto
                      SET nombre = ?, cantidad = ?, valor = ?, id_usuario = ? WHERE id_producto = ?`, [nombre, cantidad, valor, id_usuario, id_producto], (error, resulset, fields) => {
      if (error) {
        res.status(502).json({ mensaje: "Error en motor de base de datos." })
      } else {
        res.status(201).json({
          id_producto: id_producto,
          nombre: nombre,
          cantidad: cantidad,
          valor: valor,
          id_usuario: id_usuario
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
      nombre,
      cantidad,
      valor,
      id_usuario
    } = req.body
    const SQL = `INSERT INTO producto (nombre, cantidad, valor, id_usuario) 
                       VALUES(?,?,?,?)`
    const parametros = [nombre, cantidad, valor, id_usuario]
    connection.query(SQL, parametros, (error, results, fields) => {
      if (error) {
        console.log(error)
        res.status(502).json({ mensaje: 'Error ejecutando la consulta.' })
      } else {
        console.log(results)
        res.status(201).json({
          id_producto: results.insertId,
          nombre: nombre,
          cantidad: cantidad,
          valor: valor,
          id_usuario: id_usuario
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
    const SQL = `DELETE FROM producto WHERE id_producto = ?`
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
    const response = await connection.query(`UPDATE producto SET img_producto = ? WHERE id_producto = ?`, [JSON.stringify(req.file), id_producto])
    res.json({ mensaje: "El archivo fue cargado exitosamente", archivo: { ruta: 'uploads/' + req.file.filename } })
  } else {
    res.json({ mensaje: "El archivo no se cargo" })
  }

})

module.exports = router
