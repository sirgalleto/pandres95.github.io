module.exports = (gulp) => {
    'use strict';
    var symlink = require('gulp-symlink');

    return () => {
        return (gulp
            .src([
                './assets/img',
                './assets/fonts',
                './src/js',
                './src/styles',
                './src/components',
            ], { read: false })
        ).pipe(symlink([
            'dev/img',
            'dev/fonts',
            'dev/js',
            'dev/styles',
            'dev/components'
        ], { force: true }));

    };
};
