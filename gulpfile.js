var gulp = require('gulp');
var gutil = require('gulp-util');

// var spawn = require('child_process').spawn;
// var phantom = require('gulp-phantom');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');
var mochaPhantomJS = require('gulp-mocha-phantomjs');
var lcov = require('mocha-lcov-reporter');

gulp.task('test', function(cb){
  gulp.src(['./basic/**/!(*-spec.js)+(*.js)', './dom/**/!(*-spec.js)+(*.js)'])
    .pipe(istanbul())
    .on('finish', function(){
      gulp.src(['./basic/*-spec.js', './dom/*-spec.js]'])
        .pipe(mocha({reporter: 'spec'}))
        // .pipe(mochaPhantomJS({reporter: 'spec'}))
        .pipe(istanbul.writeReports())
        .on('end', cb);
    });
});

gulp.task('backbone', function(cb){
  gulp.src('./backbone/test.html')
    .pipe(mochaPhantomJS({reporter: 'spec'}));
});


gulp.task('default', ['test', 'backbone']);
