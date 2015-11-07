module.exports = (gulp, util, callback) => {
    'use strict';

    return () => {
        return (gulp
            .src('./src/index.html')
        ).pipe(gulp.dest('./dev'));

    };
};
