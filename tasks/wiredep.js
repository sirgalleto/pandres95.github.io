module.exports = (gulp, util, callback) => {
    'use strict';
    var wiredep = require('wiredep').stream;

    return () => {
        return (gulp
            .src('./src/index.html', { read: false })
            .pipe(wiredep())
        ).pipe(gulp.dest('./dev'));
    };
};
