// Usa solo CommonJS y ES5, no transpila

// Registramos babel para transpilar antes de que nuestras pruebas corran
require('babel-register')();

// Deshabilita webpack ya que Mocha no lo entiende
require.extensions['.css'] = function() {};

 