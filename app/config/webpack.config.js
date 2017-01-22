var rootPath = __dirname + '/..'
var publicPath = rootPath + '/public'

module.exports = {
    entry: rootPath + '/bootstrap.webpack.js',
    output: {
        path: publicPath + '/compiled',
        filename: "bundle.js"
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.common.js'
      }
    },
    module: {
        loaders: [
            {
              test: /\.css$/, loader: "style!css"
            },
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
            },
        ]
    }
};
