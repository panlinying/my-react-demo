var webpack = require('webpack');

const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const PATHS = {
	app:path.join(__dirname,'app'),
	build:path.join(__dirname,'build')
};
const common = {
	entry:PATHS.app,
	resolve:{
		extensions:['','.js','.jsx']
	},
	output:{
		path:PATHS.build,
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{
				test: /\.css$/,
				loaders:['style','css'],
				include:PATHS.app
			},
			//set up jsx, accept js too thanks to RegExp
			{
				test:/\.jsx?$/,
				//enable caching for improved performance during development
				//default OS directory,cunstom:babel?cacheDirectory=<path>
				loaders:['babel?cacheDirectory'],
				//loaders:'babel',//loaders:['babel?cacheDirectory,presets[]=react,presets[]=2015,presets[]=survivejs-kanban'],
				//query:{
				//	cacheDirectory:true,
				//	presets:['react','es2015','survivejs-kanban']

				//},
				include:PATHS.app
			}
		]	
	},
	plugins:[
		new HtmlwebpackPlugin({
			template:'node_modules/html-webpack-template/index.html',
			title:'trees app',
			appMountId:'app'
		})
	]
};
if(TARGET === 'start' || !TARGET){
	module.exports = merge(common,{
		devServer:{
			historyApiFallback:true,
			hot:true,
			inline:true,
			progress:true,
			stats:'errors-only',

			host:process.env.HOST,
			port:process.env.PORT//port:3000
		},
		plugins:[
			new webpack.HotModuleReplacementPlugin()
		],
		devtool:'eval-source-map'
	});
};
if(TARGET ==='build'){
	module.exports = merge(common,{});
};