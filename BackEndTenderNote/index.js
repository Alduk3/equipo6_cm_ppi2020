const express = require("express")
const path = require("path")
const morgan = require("morgan") 
const app = express()


//Middelwares
app.use(morgan("dev"))
app.use(express.json())

//Routes
app.use("/api/", require ("./routes/producto"))
app.use("/api/", require ("./routes/usuario"))
app.use("/api/", require ("./routes/ventas"))
app.use("/api/", require ("./routes/almacenamiento"))

app.get("/",(req,res)=>{
res.send("API CRUD")
})

app.set("ABSOLUTE_PATH", `${__dirname}/`)
app.set("puerto", 8080)

app.listen(app.get("puerto"),()=>{
console.log("El servidor está corriendo en el puerto " + app.get("puerto"))
})

