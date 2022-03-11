const path = require('path')

module.exports = {
    entry: './_src/js/*.js',

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets/dist'),
        clean: true
    }
}