module.exports = (gulp) => {
    'use strict';
    var wiredep = require('wiredep').stream;

    return () => {
        return (gulp
            .src('./dev/index.html')
            .pipe(wiredep())
        ).pipe(gulp.dest('./dev'));
    };
};
