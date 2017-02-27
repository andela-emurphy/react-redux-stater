const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

const app = express();


app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));
app.use(express.static(path.join(__dirname, './dist/')));


app.get('*', (req, res) => {
  res.sendFile(path.resolve('./src/index.html'));
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started in port ${port}`)
});
