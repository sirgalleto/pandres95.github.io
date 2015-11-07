/* jshint node:true */
'use strict';

var sequence    = require('gulp-sequence')
,   gulp        = require('./gulp-load')('tasks');

gulp.task('prepare', sequence('symlink', 'wiredep', 'inject'));
gulp.task('default', sequence('prepare'));
