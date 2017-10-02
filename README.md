# js-dev-env

Version contorl
    Git
    Github/Bitbucket

Editor
    VS Code
    Editorconfig: Misma configuracion para distintos editores. (.editorconfig)

Package Management / Security
    NPM
    NSP (Node security platform, checks packages for security issues)

Automation
    Node Scripts (scripts:package.json)

Web Server Desarrollo
    Express (srcServer.js)

Transpiling ( Permite ocupar nuevos estandares de JS "transpilando" el nuevo al anterior )
    Babel (.babelrc)

Bundling
    ES6 (Modulos, require...)
    Webpack:
        Agrupa nuestro codigo en 1 solo archivo, dando mas eficacia a la carga de archivos, ademas
        usa treeshacking para eliminar codigo sin utilizar (de nuestros paquetes), lo que efecticamente
        disminuye el tamaño del archivo final presentado. (webpack.config.dev.js)

Linting
    ESLint: Nos avisa de errores sintaxicos al momento de guardar un archivo, facil configuracion en .eslintrc.json

Testing
    Mocha framework para unit e integration testing
    Assertion library:
        Chai, permite describir pruebas en un lenguaje mas natural
    Helpers:
        JSDOM, "headless" browser for testing

Continous Integration
    Travis CI, conecta con github, prueba si el build del ultimo push corre.
    Appveyor (Windows)

HTTP Calls
    Herramienta (fetch, request, http, otros paquetes de node, axiom como solucion mas completa)
    Centralizar nuestras llamadas, orden y consistencia.
    