const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                loader: "css-loader",
                options: {
                    minimize: true
                }
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name]-[md5:contenthash:base26:5].css'
        })
    ]
};