var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

const PATHS = {
    app:path.join(__dirname,'app'),
    build:path.join(__dirname,'build')
};
const TARGET = process.env.npm_lifecycle_event;

var common = {
    entry:PATHS.app,
    output:{
        path:PATHS.build,
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loaders:['style','css'],
                include:PATHS.app
            }
        ]
    },
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
        //new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({title:'react-demo'})
    ]
};

if(TARGET === 'start' || !TARGET){
    module.exports = merge(common,{
        devtool:'eval-source-map',
        devserver:{
            historyApiFallback:true,
            hot:true,
            inline:true,
            progress:true,
            
            //display only errors to reduce the amount of output
            stats:'errors-only',

            //parse host and port
            host:process.env.HOST,
            port:process.env.PORT
        },
        plugins:[
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}



