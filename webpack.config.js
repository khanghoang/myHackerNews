// var ExtractTextPlugin = require("extract-text-webpack-plugin");
//
// var extractCSS = new ExtractTextPlugin('css/[name].css');
// var extractURL = new ExtractTextPlugin("assets/[name]");
// var extractFile = new ExtractTextPlugin("assets/[name]");

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

    devtool: 'eval',

    module: {
        loaders: [
            {
                // babel
                test: /\.js/,
                exclude: /node_modules/,
                loader: ['babel-loader'],
                query: {
                    presets: ['es2015', 'react']
                }
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

    // plugins: [
    //     extractCSS,
    //     extractURL,
    //     extractFile
    // ]

}
