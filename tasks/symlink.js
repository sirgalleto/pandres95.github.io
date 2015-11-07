module.exports = (gulp, util) => {
    'use strict';
    var symlink = require('gulp-symlink');

    return () => {
        return (gulp
            .src([
                './src/js',
                './src/lib',
                './src/img',
                './src/fonts',
                './src/styles',
                './src/components',
            ], { read: false })
        ).pipe(symlink([
            'dev/js',
            'dev/lib',
            'dev/img',
            'dev/fonts',
            'dev/styles',
            'dev/components'
        ], { force: true }));

    };
};
