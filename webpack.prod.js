const webpack = require("webpack");
const merge = require("webpack-merge");
// const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ClosureCompilerPlugin = require("webpack-closure-compiler");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  plugins: [
    // new UglifyJSPlugin()
    new ClosureCompilerPlugin({
      compiler: {
        // jar: "path/to/your/custom/compiler.jar", //optional
        language_in: "ECMASCRIPT6",
        language_out: "ECMASCRIPT5",
        compilation_level: "ADVANCED"
      },
      concurrency: 3
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
});
