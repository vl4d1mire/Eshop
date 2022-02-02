const webpack = require('webpack')
const { merge } = require('webpack-merge')

const common = require('./common')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        compress: true,
        static: './',
        historyApiFallback: true,
        open: true,
        port: 8080,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
})
