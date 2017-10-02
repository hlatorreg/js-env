/*
 * Genera data de prueba para desarrollo local,
 * de esta forma no es necesario llamar a una verdadera API
 * y disfrutar de data realstica y generada al azar,
 * ademas de rapidez debido a la carga local.
 */

 /* eslint-disable no-console */

 import jsf from 'json-schema-faker';
 import {schema} from './mockDataSchema';
 import fs from 'fs';
 import chalk from 'chalk';

 const json = JSON.stringify(jsf(schema));

 fs.writeFile("./src/api/db.json", json, function(err){
    if (err)
        return console.log(chalk.red(err));
    else {
        console.log(chalk.green("Data al azar generada."));
    }
 });