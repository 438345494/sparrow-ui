'use strict'

const PATH = require('path')

module.exports = {
    mode: 'production',
    entry: PATH.resolve(__dirname, '../packages/index.js'),
    output: {
        filename: '[name].js',
        path: PATH.resolve(__dirname, '../dist')
    }
}