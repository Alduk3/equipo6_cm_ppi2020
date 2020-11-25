const express = require("express")
const path = require("path")
const morgan = require("morgan") 
const app = express()
require('dotenv').config();

//Middelwares
app.use(morgan("dev"))
app.use(express.json())
app.use(express.static('public'));

//Routes
app.use("/api/", require ("./routes/producto"))
app.use("/api/", require ("./routes/usuario"))
app.use("/api/", require ("./routes/ventas"))
//app.use("/api/", require ("./routes/almacenamiento"))
app.use("/api/", require ("./routes/ingresos"))
app.use("/api/", require ("./routes/salidas"))
app.use("/api/", require ("./routes/producto"))
app.use("/api/", require ("./routes/notificaciones"))
app.use("/api/", require ("./routes/stock"))

app.get("/",(req,res)=>{
res.send("API EQUIPO 6")
})

/* app.set("ABSOLUTE_PATH", `${__dirname}/`) */
app.set("port", process.env.PORT || 5000)

app.listen(app.get("port"),()=>{
console.log("El servidor está corriendo en el puerto " + app.get("port"))
})

