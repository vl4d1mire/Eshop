const webpack = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('../paths')

module.exports = {
    entry: `${paths.src}/index.js`,
    output: {
        path: paths.dist,
        filename: 'js/[name].bundle.js',
        publicPath: '/',
        clean: true,
        crossOriginLoading: 'anonymous',
        module: true,
        environment: {
            arrowFunction: true,
            bigIntLiteral: false,
            const: true,
            destructuring: true,
            dynamicImport: false,
            forOf: true
        }
    },
    resolve: {
        // alias: {
        //     '@': `${paths.src}/modules`
        // },
        extensions: ['.js', '.jsx', '.json']
    },
    experiments: {
        topLevelAwait: true,
        outputModule: true
    },
    module: {
        rules: [
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    "postcss-loader",
                    'sass-loader'
                ]
            },
            // MD
            {
                test: /\.md$/i,
                use: ['html-loader', 'markdown-loader']
            },
            // static files
            {
                test: /\.(jpe?g|png|gif|svg|eot|ttf|woff2?)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: `${paths.public}/assets`
                }
            ]
        }),

        new HtmlWebpackPlugin({
            template: `${paths.public}/index.html`,
            filename: 'index.html'
        }),

        new webpack.ProvidePlugin({
            React: 'react'
        }),

    ]
}
