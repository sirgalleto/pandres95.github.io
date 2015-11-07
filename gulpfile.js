/* jshint node:true */
'use strict';

var sequence    = require('gulp-sequence')
,   gulp        = require('gulp-folder-load')('tasks');

gulp.task('prepare', sequence(['template', 'symlink'], ['wiredep', 'inject']));
gulp.task('default', sequence('prepare'));
gulp.task('build', sequence('prepare', ['assets', 'fonts']));
