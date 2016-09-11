module.exports = (gulp) => {
    'use strict';
    var flatten = require('gulp-flatten');

    return () => {
        return (gulp
            .src('./dev/lib/open-sans-fontface/fonts/**')
        ).pipe(gulp.dest('./dist/styles/fonts'));
    };
};
