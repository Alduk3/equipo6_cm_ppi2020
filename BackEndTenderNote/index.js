
const express = require("express")
const path = require("path")
const morgan = require("morgan") 
const app = express()

app.use(morgan("dev"))
app.use(express.json())

app.use("/api/", require ("./routes/tendero"))

app.get("/",(req,res)=>{
res.send("API CRUD")
})

app.set("puerto", 8080)

app.listen(app.get("puerto"),()=>{
console.log("El servidor está corriendo en el puerto " + app.get("puerto"))
})

