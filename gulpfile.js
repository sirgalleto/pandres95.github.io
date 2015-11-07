/* jshint node:true */
'use strict';

var sequence    = require('gulp-sequence')
,   gulp        = require('./gulp-load')('tasks');

gulp.task('default', sequence('symlink', 'wiredep', 'inject'));
