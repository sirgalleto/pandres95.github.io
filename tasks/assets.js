module.exports = (gulp) => {
    'use strict';

    return () => {
        return (gulp
            .src([ './assets/**/*' ])
        ).pipe(gulp.dest('./dist'));

    };
};
