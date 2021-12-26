const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
    return {
        entry: "./src/index.js",
        output: {
          path: path.resolve(__dirname, "./static/frontend"),
          filename: "main.js",
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
              },
            },
            {
              test: /\.css$/,
              use: [
                {
                   loader: 'style-loader',
                },
                {
                   loader: 'css-loader',
                   options: {
                      sourceMap: true,
                      modules: true,
                     }
                },
              ],
            }    
          ],
        },
        optimization: {
          minimize: true,
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV' : JSON.stringify(argv.mode)
            }),
        ],
        devServer: {
          open: true,
          
          watchOptions:{
              poll: true,
              ignored: "/node_modules/"
          }   
      }
    }
}