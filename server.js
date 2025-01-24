const express = require("express");
const port = process.env.PORT || 3000; 
const app = express(); //objeto instancia del constructor express
const api = require('./api');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//pone a la escucha en el puerto de red el servidor
app.listen(port, function () {
    console.log("Server is listening at port: " + port);
});

app.get('/', function (req, res) {
    res.send("hello world");
});

app.use('/api', api);
