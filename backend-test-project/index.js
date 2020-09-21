const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hola, bienvenido a TenderNote</h1>');
});

app.get('/integrantes', (req, res) => {
    res.send(`
            <h2>Los integrantes son:</h2>
            <p>Jerson Álvarez Ramirez</p>
            <p>Juan Pablo Bolívar Marín</p>
            <p>Alejandro Duque Florez</p>
            <p>Sebastian Gallego Londoño</p>`)
});

app.listen(5057, function () {
    console.log("El servidor está activo en el puerto 5057");
});
