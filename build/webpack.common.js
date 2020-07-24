
const path = require('path')

module.exports = {
    mode: 'production',
    entry: '../src/index.js',
    output: {
        filename: '123.js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: []
}