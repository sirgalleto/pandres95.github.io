module.exports = function (dir) {
    'use strict';

    var fs      = require('fs')
    ,   gulp    = require('gulp')
    ,   path    = require('path')
    ,   async   = require('async')
    ,   gutil   = require('gulp-util')
    ,   plugins = require('gulp-load-plugins');

    function readFile(file) {
        if(path.extname(file) == '.js'){
            gutil.log(`Loading ${path.basename(file, '.js')} script`);
            gulp.task(
                path.basename(file, '.js'),
                require(`./${path.join(dir, file)}`)(gulp, plugins, gutil)
            );
        }
    }

    var files = fs.readdirSync(dir);

    for(var index in files){
        readFile(files[index]);
    }

    return gulp;
};
