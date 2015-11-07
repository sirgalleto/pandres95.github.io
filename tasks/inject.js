module.exports = (gulp, util, callback) => {
    'use strict';
    var inject = require('gulp-inject');

    return () => {
        var sources = gulp.src([
            './dev/js/*.js',
            './dev/styles/**/*.css',
            './dev/components/*.html',
        ], { read: false });

        return (gulp
            .src('./dev/index.html')
            .pipe(inject(sources, {
                relative: true
            }))
        ).pipe(gulp.dest('./dev'));

    };
};
