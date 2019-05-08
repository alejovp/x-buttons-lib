const path = require('path');
const LIB_DIR = path.resolve(__dirname, 'src/components');
const BUILD_DIR = path.resolve(__dirname, 'public');
const libraryName = 'x-buttons-lib';
const outputFile = `${libraryName}.js`;


module.exports = {
	entry: {
		main: `${LIB_DIR}/index.js`
	},
	devServer: {
		contentBase: BUILD_DIR,
		publicPath: '/js/',
		historyApiFallback: true,
	},
	output: {
		filename: outputFile,
		path: `${BUILD_DIR}/js`,
		library: libraryName,
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				],
			},
			{
				test: /\.jsx?$/,
				include: [
					LIB_DIR,
				],
				loader: 'babel-loader'
			},
			{
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'base64-image-loader',
                include : LIB_DIR,
                options: {
                    name: '[name]-[sha256:hash:base64:4].[ext]',
                    publicPath: 'images/loader/',
                    outputPath: '../images/loader/'
                }
            },
		]
	},
};