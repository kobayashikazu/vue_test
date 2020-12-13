module.exports = {
  devServer: {
    proxy: {
      "/services/": {
        target:  process.env.USE_LOCAL_SERVER ? 'https://stoic-kare-a632f2.netlify.app' : 'http://svcs.ebay.com',
      }
    }
  }
};