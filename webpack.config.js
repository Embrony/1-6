const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcss = require('postcss/lib/postcss');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
	mode, 
	target, 
	devtool, 
	devServer: {
		open: true,
		hot: true,
	},
	entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		filename: '[name].[contenthash].js',
		assetModuleFilename: 'assets/[name][ext]',
		publicPath: process.env.NODE_ENV === 'production' ? '/1-6/' : '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
        test: /\.(c|sa|sc)ss$/i,
        use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					 'css-loader',
					 {
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [require('postcss-preset-env')]
							}
						}
					 },
					 'sass-loader'
					],
      },
			{
				test: /\.(eot|ttf|woff)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]'
				}
			},
			{
				test: /\.(jpg?g|png|webp|gif|svg)?$/i,
				use: [
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
							},
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.65, 0.90],
								speed: 4
							},
							gifsicle: {
								interlaced: false,
							},
							webp: {
								quality: 75
							}
						}
					}
				],
				type: 'asset/resource',
			},
			{
				test: /\.(?:js|mjs|cjs)$/i,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env']
						]
					}
				}
			}
		]
	}
}