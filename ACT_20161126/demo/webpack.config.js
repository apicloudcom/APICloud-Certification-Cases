'use strict';
const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

const debug = process.argv.indexOf('-d') !== -1

let plugins = [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: debug,
        },
        output: {
            comments: false,
        },
    })
  ]

module.exports = {
    entry:{
       index:["babel-polyfill","./src/index.js"]
      },
    output: {
        path: `./lib`,
        filename: "[name].js",
        library:"apiready",
        libraryTarget:"window",
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      ]
    },
    plugins: plugins,
};
