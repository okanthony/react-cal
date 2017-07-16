let webpack = require('webpack');

module.exports = {
    entry: ['whatwg-fetch', './src/main.js'],
    output: {
        path: `${__dirname}/build`,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { modules: true },
                    },
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                enforce: 'pre',

                loader: 'eslint-loader',
                options: {
                    fix: true
                },
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './build',
        inline: true
    }
};
