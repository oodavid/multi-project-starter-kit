var gulp = require('gulp');
var newer = require('gulp-newer');


var src = 'src/**/*.html';
var dest = 'build/';


// BUILD
gulp.task('html-build', function (done) {
  gulp
    .src(src)
    .pipe(gulp.dest(dest));
});


// WATCH
gulp.task('html-watch', function (done) {
  gulp.watch(src, ['html-watch-stream']);
  return createWatchStream();
});
gulp.task('html-watch-stream', createWatchStream);


function createWatchStream(){
  return gulp
    .src(src)
    .pipe(newer(dest))
    .pipe(gulp.dest(dest));
}
