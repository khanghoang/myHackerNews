var webpack = require('webpack');
var path = require('path');

var query = {
    presets: ['es2015', 'react']
}

module.exports = {

    context: __dirname + '/app',
    entry: {
        javascript: './app.js',
        html: "./index.html"
    },

    output: {
        filename: 'app.js',
        path: __dirname + '/dist'
    },

    devtool: 'cheap-module-eval-source-map',

    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader?'+JSON.stringify(query)],
                include: path.join(__dirname, 'app')
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
            { test: /\.css$/, loader: "style-loader!css-loader?modules"},
            { test: /\.png$/, loader: "url-loader?limit=100000"},
            { test: /\.jpg$/, loader: "file-loader" }
        ]
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]

}
