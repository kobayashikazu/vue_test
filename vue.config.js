module.exports = {
    devServer: {
        proxy: {
            '/services/': {
                target: 'http://svcs.ebay.com',
                pathRewrite: {'^/services/': ''},
                changeOrigin: true,
            }
        }
    }
}  