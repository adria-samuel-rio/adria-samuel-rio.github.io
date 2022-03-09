const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: "production", // "production" | "development" | "none"
    entry: './assets/src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'assets/js'),
    }
}