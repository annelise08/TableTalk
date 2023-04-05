const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        static: {
            publicPath: '/dist',
            directory: path.resolve(__dirname, 'dist')
        },
        proxy: {
            '/recc': 'http://localhost:3000',
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }

}