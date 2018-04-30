var gulp = require('gulp');
var eslint = require('gulp-eslint');
var changedInPlace = require('gulp-changed-in-place');
var config = require('./config.js');


var src = '**/*.js';
var eslintOptions = { };


// BUILD
gulp.task('eslint-build', function () {
  gulp
    .src(src, config.opts)
    .pipe(eslint(eslintOptions))
    .pipe(eslint.format());
});


// WATCH
gulp.task('eslint-watch', function () {
  gulp.watch(src, config.opts, ['eslint-watch-stream']);
  return createWatchStream();
});
gulp.task('eslint-watch-stream', createWatchStream);


function createWatchStream(){
  gulp
    .src(src, config.opts)
    .pipe(changedInPlace())
    .pipe(eslint(eslintOptions))
    .pipe(eslint.format());
}
