module.exports = (gulp) => {
    'use strict';
    var useref  = require('gulp-useref');

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
