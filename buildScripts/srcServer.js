import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'

/* eslint-disable no-console */

const port     = 3000;
const app      = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res){
    // Hardcoded, en el mundo real llamaria a datos desde una BD
    res.json([
        {"id": 1,"firstname":"Hector", "lastname":"Latorre", "email":"hola@hola.cl"},
        {"id": 2,"firstname":"Isidora","lastname":"Guajardo", "email":"hola@hola.cl"},
        {"id": 3,"firstname":"Micaela", "lastname":"Martinez", "email":"hola@hola.cl"}
    ]);
});

app.listen(port, function(err){
    if (err)
        console.log(err);
    else
        open('http://localhost:' + port);
});
