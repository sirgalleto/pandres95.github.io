module.exports = (gulp, util) => {
    'use strict';
    var flatten = require('gulp-flatten');

    return () => {
        return (gulp
            .src(['./dev/lib/**/fonts/**'])
            .pipe(flatten())
        ).pipe(gulp.dest('./dist/fonts'));
    };
};
