const express = require("express");
const path = require ("path")
const morgan = require ("morgan")
const app = express();

//Middelwares
app.use(morgan("dev"))
app.use(express.json())

//routes

app.use("/api/", require("./routes/tendero.js"))


app.get("/", (req, res) => {
  res.send("<h1>Hola, bienvenido a TenderNote</h1>");
});

app.set("puerto", 8081)

app.listen(app.get("puerto"), ()=>{
  console.log("El servidor está activo en el puerto " + app.get("puerto"));
});

