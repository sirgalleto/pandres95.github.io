module.exports = (gulp) => {
    'use strict';
    const sequence  = require('gulp-sequence');
    const vulcanize = require('gulp-vulcanize');
    const clean     = require('gulp-clean');

    gulp.task('copy', () => [
        (gulp
            .src('./dev/lib/polymer/**')
        ).pipe(gulp.dest('./dist/lib/polymer')),
        (gulp
            .src('./dev/lib/iron-ajax/**')
        ).pipe(gulp.dest('./dist/lib/iron-ajax')),
        (gulp
            .src('./dev/lib/promise-polyfill/**')
        ).pipe(gulp.dest('./dist/lib/promise-polyfill')),
        (gulp
            .src('./src/components/**')
        ).pipe(gulp.dest('./dist/components'))
    ]);

    gulp.task('vulcanize', () => (gulp
        .src('./dist/index.html')
        .pipe(vulcanize({
            abspath: '',
            excludes: [],
            stripExcludes: false
        }))
    ).pipe(gulp.dest('./dist')));

    gulp.task('clean', () => gulp.src([
        './dist/components/**', './dist/lib/**'
    ]).pipe(clean()));

    return cb => sequence('copy', 'vulcanize', 'clean')(cb);
};
