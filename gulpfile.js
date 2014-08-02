var gulp = require('gulp');
var gutil = require('gulp-util');

var mocha = require('gulp-mocha');
// var phantom = require('gulp-phantom');

var istanbul = require('gulp-istanbul');

gulp.task('mochaTest', function(cb){
  gulp.src('./basic/**/!(*-spec.js)+(*.js)')
    .pipe(istanbul())
    .on('finish', function(){
      gulp.src(['./basic/*-spec.js'])
        .pipe(mocha({reporter: 'spec'}))
        .pipe(istanbul.writeReports())
        .on('end', cb);
    });
});


gulp.task('test', ['mochaTest']);

gulp.task('default', ['test']);
