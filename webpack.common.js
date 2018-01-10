const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
	DIST: path.resolve(__dirname, 'dist'),
	SRC: path.resolve(__dirname, 'src'),
};

module.exports = {
	entry: path.join(paths.SRC, 'index.js'),
	output: {
		path: paths.DIST,
		filename: 'bundle.js'
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(paths.SRC, 'index.html')
		})
	],
	module: {
		rules: [
			{
				test: /\.(png|jpg|jpeg|gif|ico)$/,
				use: [
					'file-loader',
				],
			},
      {
  			test: /\.(glsl|vert|frag)$/,
  			loader: 'webpack-glsl-loader'
  		},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
				{
					loader: 'babel-loader',
					options: {
						presets: [
						['es2015', { modules: false }],
						'react'
						]
					}
				}
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
}



// module.exports = {
// 	context: path.resolve(__dirname, 'src'),
// 	entry: ENTRY_PATH,
// 	output: {
// 		filename: 'bundle.js',
// 		path: OUTPUT_PATH,
// 		publicPath: 'dist/'
// 	},
// 	plugins: [
// 	],
// 	module: {
// 		rules: [{
// 			test: /\.(js|jsx)$/,
// 			exclude: /node_modules/,
// 			use: [
// 			{
// 				loader: 'babel-loader',
// 				options: {
// 					presets: [
// 					['es2015', { modules: false }]
// 					]
// 				}
// 			}
// 			]
// 		},
// 		{
// 			test: /\.scss$/,
// 			use: [
// 			'style-loader',
// 			'css-loader',
// 			'sass-loader'
// 			]
// 		},
		// {
		// 	test: /\.(glsl|vert|frag)$/,
		// 	loader: 'webpack-glsl-loader'
		// },
// 		{
// 			test: /\.(png|jpg|jpeg|gif|ico)$/,
// 				use: [
// 					'file-loader',
// 				],
// 			},
// 		]
// 	},
//   resolve: {
// 		extensions: ['.js', '.jsx'],
// 	},
// 	devtool: 'source-map'
// };
