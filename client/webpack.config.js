const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

let mode = 'development';
let target = "web";
const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
        template: './public/index.html'
    }),
];

if (process.env.NODE_ENV === "production") {
    mode = "production";
    // Temporary workaround for 'browserslist' bug that is being patched in the near future
    target = "browserslist";
}

if (process.env.SERVE) {
    plugins.push(new ReactRefreshWebpackPlugin())
}

const config = {
    mode: mode,
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: ""},
                    },
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                /**
                 * The `type` setting replaces the need for "url-loader"
                 * and "file-loader" in Webpack 5.
                 *
                 * setting `type` to "asset" will automatically pick between
                 * outputing images to a file, or inlining them in the bundle as base64
                 * with a default max inline size of 8kb
                 */
                type: "asset/resource",

                /**
                 * If you want to inline larger images, you can set
                 * a custom `maxSize` for inline like so:
                 */
                parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024,
                    },
                },
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    // without additional settings, this will reference .babelrc
                    loader: "babel-loader",
                    options: {
                        /**
                         * From the docs: When set, the given directory will be used
                         * to cache the results of the loader. Future webpack builds
                         * will attempt to read from the cache to avoid needing to run
                         * the potentially expensive Babel recompilation process on each run.
                         */
                        cacheDirectory: true,
                    },
                },
            },
        ]
    },
    plugins: plugins,

    resolve: {
        extensions: [".js", ".jsx"]
    },

    target: target,

    devtool: "source-map",

    devServer: {
        hot: true,
        historyApiFallback: true,
        allowedHosts: ['.gitpod.io']
    },
};

module.exports = config;
