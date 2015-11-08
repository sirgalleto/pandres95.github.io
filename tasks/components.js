module.exports = (gulp) => {
    'use strict';
    var sequence    = require('gulp-sequence');

    gulp.task('copy-polymer', () => {
        return (gulp
            .src('./dev/lib/polymer/**')
        ).pipe(gulp.dest('./dist/lib/polymer'));
    });
    gulp.task('copy-components', () => {
        return (gulp
            .src('./src/components/**')
        ).pipe(gulp.dest('./dist/components'));
    });
    gulp.task('vulcanize', () => {
        var action = require('gulp-vulcanize');
        return (gulp
            .src(['./dist/index.html'])
            .pipe(action({
                abspath: '',
                excludes: [],
                stripExcludes: false
            }))
        ).pipe(gulp.dest('./dist'));
    });
    gulp.task('clean', () => {
        var action = require('gulp-clean');
        return gulp.src([
            './dist/components/**', './dist/lib/**'
        ]).pipe(action());
    });

    return (cb) => {
        sequence('copy-polymer', 'copy-components', 'vulcanize', 'clean')(cb);
    };
};
