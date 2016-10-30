var PathRewriterPlugin = require('webpack-path-rewriter');
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        'freeven.app': './app/app'
    },
    output: {
        path: 'dist/production',
        filename: '[name].[chunkhash].js',
        publicPath: '../dist/production/'
    },
    module: {
        loaders: [
            {
                test: /[.]jade$/,
                loader: PathRewriterPlugin.rewriteAndEmit({
                    //name: '[path][name].html',
                    name: '../../index.html', //generate index.html on root folder
                    loader: 'jade-html?' + JSON.stringify({pretty: true})
                })
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html'
            },
            {
                test: /\.(png|jpg|gif)(\?.*$|$)/,
                exclude: /node_modules/,
                loader: 'file-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /.json/,
                exclude: /node_modules/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new PathRewriterPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'moment': 'moment'
        })
    ],

    /**
     * Webpack Development Server configuration
     * Description: The webpack-dev-server is a little node.js Express server.
     * The server emits information about the compilation state to the client,
     * which reacts to those events.
     *
     * See: https://webpack.github.io/docs/webpack-dev-server.html
     */
    devServer: {
        port: 3000,
        host: 'localhost',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        proxy: {
            "/api*": {
                target: 'https://freeven-srv-dev.herokuapp.com',
                secure: false
            }
        }
    }
};
