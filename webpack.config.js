var path = require("path");
module.exports = {
    entry:[
	'webpack/hot/dev-server',
      	'webpack-dev-server/client?http://localhost:8080',
	path.resolve(__dirname,"./main.jsx")
    ],
    output:{
	path:path.resolve(__dirname,"build"),
	//publicPath:"/react/",
	filename:'bundle.js'
    },
    module: {
    loaders:[
      { test: /\.js$/, loader: 'jsx-loader?harmony' }
    ]
  }
}
