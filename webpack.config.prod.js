import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';


export default {
  devtool: 'source-map',
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    // Retorna un hash para cada bundle, para que sus nombres cambien si el contenido cambia
    new WebpackMd5Hash(),

    // Opciones de carga
    new webpack.LoaderOptionsPlugin({
        debug: true,
        noInfo: false,
    }),
    // Elimina duplicados al generar el bundle
    // new webpack.optimize.DedupePlugin(),
    // Minify
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    
    // Crea un bundle separado de vendor para que las librerias
    // sean cargadas de forma separada
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    
    // Crea un archivo HTML que incluye una referencia a nuestro bundled JS
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify : {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    })
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  }
}