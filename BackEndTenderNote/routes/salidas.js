const { Router } = require('express')
const router = Router()
const { connection } = require('./../db/mysql_pool')

/*const { Router } = require("express");
const router = Router();
const fs = require("fs");
//var app = require('express')()
const FileSalidas = fs.readFileSync("./salidas.json", "utf-8")
const JSONSalidas = JSON.parse(FileVentas)*/

//let FileSalidas = null
//let JSONSalidas = null

//const loadFile = (req) => {
  //const FileSalidas = fs.readFileSync(`${req.app.get('ABSOLUTE_PATH')}salidas.json`, 'utf-8');
  //const JSONVentas = JSON.parse(FileVentas);
//}


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

router.get("/salidas/:id", (req, res) => {
  try {
    const id_salidas = req.params.id
    connection.query(`SELECT * 
                      FROM salidas
                      WHERE id_salidas = ?`, [id_salidas])
  } catch (error) {
    res.status(503).json({ mensaje: "Error en el servidor.", error: true })
  }
});

router.post("/salidas", (req, res) => {
    try {
    const {
      cantidad,
      valor_total
    } = req.body
    const SQL = `INSERT INTO salidas (cantidad, valor_total) 
                       VALUES(?,?)`
    const parametros = [cantidad, valor_total]
    connection.query(SQL, parametros, (error, results, fields) => {
      if (error) {
        console.log(error)
        res.status(502).json({ mensaje: 'Error ejecutando la consulta.' })
      } else {
        console.log(results)
        res.status(201).json({
          id_salidas: results.insertId,
          cantidad,
          valor_total
        })
      }
    })
  } catch (error) {
    res.status(502).json({ mensaje: "Error en el servidor" })
  }
  /*let id = JSONSalidas.length + 1 
  //loadFile(req)
  let { valor_total,cantidad } = req.body

  let nuevaSalida = {
    "id_salidas": id,
    "valor_total" : valor_total ,
    "cantidad": cantidad
  }

  JSONSalidas.push(nuevaSalida)
  fs.writeFileSync("./salidas.json", JSON.stringify(JSONSalidas), "utf-8")
  res.status(201).json(nuevaSalida)*/
})

/*router.get("/salidas/:id", (req, res) => {
  let id = req.params.id
  //loadFile(req)
  let salidaEncontrada = JSONSalida.find
    (salida => salida.id == id)

  if (salidaEncontrada != undefined)
    res.status(201).json(salidaEncontrada)
  else
    res.status(200).json(`La salida ${id} no existe`)
})*/

router.put("/salidas/:id", (req, res) => {
    try {
    const id_ingresos = req.params.id
    const {
      cantidad,
      valor_total
    } = req.body

    connection.query(`UPDATE salidas
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
  /*let id = req.params.id
  let { valor_total, cantidad } = req.body
  //loadFile(req)
  let salidaModificada = JSONSalidas.find(salida => {
    if (salida.id == id) {
      salida.valor_total = valor_total
      salida.cantidad = cantidad
      return salida
    }
  })

  if (salidaModificada != undefined) {
    fs.writeFileSync('./salidas.json', JSON.stringify(JSONSalidas), 'utf-8')
    res.status(201).json(salidaModificada)
  } else {
    res.status(200).json(`La salida ${id} no existe`)
  }*/
})

router.delete("/salida/:id", (req, res) => {
   try {
    const { id } = req.params
    const SQL = `DELETE FROM ingresos WHERE id_salidas = ?`
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
 /* let id = req.params.id
  //loadFile(req)
  let indiceSalida = JSONSalidas.findIndex
    (salida => salida.id == id)
  if (indiceSalida != -1) {
    JSONSalidas.splice(indiceSalida, 1)
    fs.writeFileSync('./salidas.json', JSON.stringify(JSONSalidas), 'utf-8')
    res.status(200).json({mensaje : `La salida ${id} fue eliminada`})
  } else {
    res.status(200).json(`La salida ${id} no existe`)
  }*/
})

module.exports = router;