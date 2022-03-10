const path = require('path')

module.exports = {
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets/dist'),
        clean: true
    }
}