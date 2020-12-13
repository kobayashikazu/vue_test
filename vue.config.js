module.exports = {
    devServer: {
      proxy: process.env.USE_LOCAL_SERVER ? 'http://svcs.ebay.com' : 'http://svcs.ebay.com',
    }
  };