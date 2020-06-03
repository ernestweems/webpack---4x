const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({mode}) => {
  //log mode variables you can remove this log if you like :)
    console.log("enviroment mode: "+mode);
    return {
        mode,
        output:{
         filename:"bundle.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack demo",
      }),
    ],
     devServer: {
    // Display only errors to reduce the amount of output.
    stats: "errors-only",
    // Parse host and port from env to allow customization.
    //
    // If you use Docker, Vagrant or Cloud9, set
    // host: "0.0.0.0";
    //
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host: process.env.HOST, // Defaults to `localhost` process.env.HOST
    port: process.env.PORT , // Defaults to 8080 process.env.PORT
    open: true, // Open the page in browser
  }  
  };  
};



