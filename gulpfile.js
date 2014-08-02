var gulp = require('gulp');
var gutil = require('gulp-util');

// var spawn = require('child_process').spawn;
// var phantom = require('gulp-phantom');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');
var mochaPhantomJS = require('gulp-mocha-phantomjs');
var lcov = require('mocha-lcov-reporter');

var testDirs = ['./basic', './dom', './backbone'];

var notSpec = function ( dir ) {
  return dir + '/**/!(*-spec.js)+(*.js)';
};

gulp.task('test', function(cb){
  gulp.src( testDirs.map( notSpec ) )
    .pipe(istanbul())
    .on('finish', function(){
      gulp.src([
        './basic/*-spec.js',
        './dom/*-spec.js',
        // './backbone/test.html'
      ])
        .pipe(mocha({reporter: 'spec'}))
        // .pipe(mochaPhantomJS({reporter: 'spec'}))
        .pipe(istanbul.writeReports())
        .on('end', cb);
    });
});

// gulp.task('backbone', function(cb){
//   gulp.src('./backbone/test.html')
//     .pipe(mochaPhantomJS({reporter: 'spec'}))
//     .pipe(istanbul.writeReports())
//     .on('end', cb);
// });


gulp.task('default', ['test']);
