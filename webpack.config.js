var path = require("path");
module.exports = {
    entry:[
	'webpack/hot/only-dev-server',
      	'webpack-dev-server/client?http:/127.0.0.1:3000',
	path.resolve(__dirname,"./main.jsx")
    ],
    output:{
	path:path.resolve(__dirname,"build/"),
	publicPath:"/react/",
	filename:'bundle.js'
    },
    module: {
  	loaders: [
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' }
    	//{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      //{ test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader!jsx-loader?harmony"}
       //{ test: /\.jsx?$/, loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/ }
  	]
    }
    //resolve: {
    //extensions: ['', '.js', '.jsx']
    //}
}
