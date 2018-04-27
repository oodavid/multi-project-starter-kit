var gulp = require('gulp');
var newer = require('gulp-newer');


var src = [
  'src/**/*',            // All files
  '!**/*\\.+(html|scss)' // ...ignoring those handled by other tasks
];
var dest = 'build/';


// BUILD
gulp.task('assets-build', function (done) {
  return gulp
    .src(src)
    .pipe(gulp.dest(dest));
});


// WATCH
gulp.task('assets-watch', function (done) {
  gulp.watch(src, ['assets-watch-stream']);
  return createWatchStream();
});
gulp.task('assets-watch-stream', createWatchStream);


function createWatchStream(){
  return gulp
    .src(src)
    .pipe(newer(dest))
    .pipe(gulp.dest(dest));
}
