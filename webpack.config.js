const path = require('path')

module.exports = {
    entry: {
        "index": path.resolve(__dirname, './src/main/index.js'),
        "login": path.resolve(__dirname, './src/main/login.js'),
        "register": path.resolve(__dirname, './src/main/register.js'),
        "list": path.resolve(__dirname, './src/main/list.js'),
        "details": path.resolve(__dirname, './src/main/details.js'),
        "shopcar": path.resolve(__dirname, './src/main/shopcar.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        }]
    }
}