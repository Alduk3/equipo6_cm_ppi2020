const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hola, bienvenido a TenderNote</h1>");
});

app.get("/integrantes", (req, res) => {
  res.send(`
            <h2>Los integrantes son:</h2>
            <p>Jerson Álvarez Ramirez</p>
            <p>Juan Pablo Bolívar Marín</p>
            <p>Alejandro Duque Florez</p>
            <p>Sebastian Gallego Londoño</p>`);
});

app.get("/descripcion", (req, res) => {
  res.send(`<h1>TenderNote</h1>
            <p>Aplicativo móvil para los tenderos independientes sobre el manejo y el control del inventario que estos llevan a sus locales. La aplicación cuenta con un registro de usuario (tendero) donde posteriormente esta información será guardada en una base de datos, al ingresar el usuario al aplicativo, podrá visualizar sus productos en una imagen con sus respectivos precios y cantidades y dará la opción de controlar su inventario sea porque se reciben productos de parte de su proveedor o se venden a sus clientes.</p>`);
});

app.listen(5057, function () {
  console.log("El servidor está activo en el puerto 5057");
});

app.get("/sobre_nosotros", (req, res) => {
  res.send(`<p><a href = "https://www.facebook.com/profile.php?id=100010175615706"> Jerson Álvarez Ramírez </a></p><p><a href = "https://www.facebook.com/juanpablo.bolivarmarin.7"> Juan Pablo Bolívar Marín</a></p>
   <p><a href = "https://www.facebook.com/alejandro.duqueflorez" > Alejandro Duque Florez </a></p> <p><a href = "https://www.facebook.com/juan.londono.376043"> Sebastián Gallago Londoño</a></p>`);
});
