import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
/* eslint-disable no-console */

const port     = 3000;
const app      = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Ejemplo de API local, al llamar /users desde la pagina el sistema devuelve:
app.get('/users', function(req, res){
    // Hardcoded, en el mundo real llamaria a datos desde una BD
    res.json([
        {"id": 1,"firstName":"Hector", "lastName":"Latorre", "email":"hola@hola.cl"},
        {"id": 2,"firstName":"Isidora","lastName":"Guajardo", "email":"hola@hola.cl"},
        {"id": 3,"firstName":"Micaela", "lastName":"Martinez", "email":"hola@hola.cl"}
    ]);
});

app.listen(port, function(err){
    if (err)
        console.log(err);
    else
        open('http://localhost:' + port);
});
