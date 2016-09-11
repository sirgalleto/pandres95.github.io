module.exports = (gulp) => {
    'use strict';
    var flatten = require('gulp-flatten');

    return () => {
        return (gulp
            .src('./dev/lib/open-sans-fontface/fonts/**')
        ).pipe(gulp.dest('./dist/styles/fonts')),
        (gulp
            .src([
                './dev/lib/**/fonts/**', '!./dev/lib/open-sans-fontface',
                '!./dev/lib/open-sans-fontface/fonts/**'
            ])
            .pipe(flatten())
        ).pipe(gulp.dest('./dist/fonts'));
    };
};
