'use strict';
var webpack = require('webpack')
var path = require('path')
var fs = require('fs')

const debug = process.argv.indexOf('-d') !== -1
let plugins = [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: debug,
        },
        output: {
            comments: false,
        },
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/) // Ignore all optional deps of moment.js
  ]

module.exports = {
    entry: {
      "container.android": "./src/container.android.js",
      "container.ios":"./src/container.ios.js",
      "Home": "./src/Home.js",
      "Person": "./src/Person.js",
    },
    output: {
        path: `./lib`,
        filename: "[name].js",
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        { test: /\.json$/, loader: "json-loader" },
      ]
    },
    plugins: plugins,
};
