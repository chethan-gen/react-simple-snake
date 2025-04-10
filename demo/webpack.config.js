var path = require('path');
const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        static: path.resolve(__dirname, 'public'), // Updated from "contentBase"
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true,
        hot: true, // Enable Hot Module Replacement
        liveReload: true, // Enable live reloading
    },
    devtool: 'inline-source-map',
};
