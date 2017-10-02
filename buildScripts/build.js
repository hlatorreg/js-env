/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generando build de producción, esto podria tardar debido a la minificación del bundle...'));

webpack(webpackConfig).run((err, stats) => {
    if (err){
        console.log(chalk.red(err));
        return 1;
    }
    const jsonStats = stats.toJson();
    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }
    if (jsonStats.hasWarnings) {
        console.log(chalk.yellow('Webpack genero las siguientes advertencias: '));
        jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
    }
    console.log(`Webpack estadisticas: ${stats}`);
    console.log(chalk.green('El build de producción fue generado sin problemas y escrito a /dist!'));
    return 0;
});