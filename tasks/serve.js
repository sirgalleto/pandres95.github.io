module.exports = (gulp) => {
    'use strict';
    const   server  = require('browser-sync')
    ,       spa     = require('browser-sync-spa');
    const httpProxy = require('http-proxy');

    let proxy = httpProxy.createProxyServer({
        target: 'https://pandres95.me', changeOrigin: true, secure: true
    });

    return () => {
        server.use(spa());

        server.init({
            server: {
                baseDir: 'dev'
            },
            middleware: function (req, res, next) {
                if (req.url.match(/^\/api/)) {
                    proxy.web(req, res);
                } else next();
            },
            startPath: 'index.html',
            ghostMode: false,
            notify: false,
            debounce: 200,
            port: 8000
        });

        gulp.watch('dev/index.html').on('change', server.reload);
    };
};
