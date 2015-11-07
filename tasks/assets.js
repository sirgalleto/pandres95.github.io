module.exports = (gulp) => {
    'use strict';
    var symlink = require('gulp-symlink');

    return () => {
        return (gulp
            .src([ './assets/**/*' ])
        ).pipe(gulp.dest('./dist'));

    };
};
