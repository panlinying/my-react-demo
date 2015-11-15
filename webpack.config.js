var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: [
	//'webpack/hot/only-dev-server',
      	'webpack-dev-server/client?http:/127.0.0.1:3000',
        path.resolve(__dirname,"main.jsx")
    ],
    output: {
	path: path.resolve(__dirname, "build"),
	//publicPath: "../react/",
        filename: "bundle.js"
    },
    module: {

        loaders: [{test: /\.jsx$/,loader: 'babel-loader',exclude: [nodeModulesPath]},
            {test: /\.less$/, loader: "style!css!less"},
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    //plugins: [
    //   new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    //],

    //devServer: {
     //   proxy:       [{
            // proxy all requests not containing ".hot-update.js"
            //path:   /\/api(.*)/,
         //   target:  'http://example:8080'
       // }]
    //}
};
