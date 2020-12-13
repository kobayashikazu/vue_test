module.exports = {
    devServer: {
        proxy: {
            '/services/': {
                target: 'http://svcs.ebay.com',
                ws: true,
                changeOrigin: true
            }
        }
    }
}  