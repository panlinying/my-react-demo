var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

const PATHS = {
    app:path.join(__dirname,'app'),
    build:path.join(__dirname,'build')
};

module.exports = {
    entry:PATHS.app,
    output:{
        path:PATHS.build,
        filename:'bundle.js'
    },
    //plugins: [new HtmlWebpackPlugin()],
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true,

        //display only errors reduce the amount of output
        stats:'errors-only',

        //parse host and port from env so this is easy
        //to customize
        host:process.env.HOST,
        port:process.env.PORT
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({title:'react-demo'})
    ]
};



