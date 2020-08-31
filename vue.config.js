module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-arbotect/' : '/',
  configureWebpack: {
    devtool: 'source-map'
  }
};
