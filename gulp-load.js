module.exports = function (dir) {
    'use strict';

    var fs      = require('fs')
    ,   gulp    = require('gulp')
    ,   path    = require('path')
    ,   async   = require('async')
    ,   gutil   = require('gulp-util')
    ,   gcback  = require('gulp-callback');

    function readFile(file) {
        if(path.extname(file) == '.js'){
            gulp.task(
                path.basename(file, '.js'),
                require(`./${path.join(dir, file)}`)(gulp, gutil, gcback)
            );
        }
    }

    var files = fs.readdirSync(dir);

    for(var index in files){
        readFile(files[index]);
    }

    return gulp;
};
