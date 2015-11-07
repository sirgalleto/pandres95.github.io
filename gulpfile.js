/* jshint node:true */
'use strict';

var gulp = require('./gulp-load')('tasks');

gulp.task('default', [ 'wiredep', 'inject' ]);
