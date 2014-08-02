var gulp = require('gulp');
var gutil = require('gulp-util');

// var spawn = require('child_process').spawn;
// var phantom = require('gulp-phantom');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');
var ghostCoffee = require('gulp-mocha-phantomjs');

gulp.task('test', function(cb){
  gulp.src(['./basic/**/!(*-spec.js)+(*.js)', './dom/**/!(*-spec.js)+(*.js)', './backbone/**/!(*-spec.js)+(*.js)'])
    .pipe(istanbul())
    .on('finish', function(){
      gulp.src(['./basic/*-spec.js', './dom/*-spec.js]'])
        .pipe(mocha({reporter: 'spec'}))
        .pipe(ghostCoffee({reporter: 'spec'}))
        .pipe(istanbul.writeReports())
        .on('end', cb);
    });
});



gulp.task('default', ['test']);
