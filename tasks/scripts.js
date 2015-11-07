module.exports = (gulp) => {
    'use strict';
    var useref  = require('gulp-useref')
    ,   minify  = require('gulp-minify')
    ,   _if     = require('gulp-if');

    return () => {
        var assets = useref.assets();

        return (gulp
            .src('./dev/index.html')
            .pipe(assets)
            .pipe(assets.restore())
            .pipe(useref())
        ).pipe(gulp.dest('./dist'));
    };

};
