const path = require('path');

module.exports = {
    entry: './assets/src/index.js',
    mode: "production", // "production" | "development" | "none"
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'assets/js'),
    },
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        },
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
        }
    }
};