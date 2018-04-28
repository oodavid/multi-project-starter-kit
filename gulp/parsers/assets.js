var gulp = require('gulp');
var newer = require('gulp-newer');


var opts = {
  cwd: global.config.cwd,
};
var src = [
  '**/*',           // All files
  '!**/*\\.+(scss)' // ...ignoring those handled by other tasks
];
var dest = 'build/';


// BUILD
gulp.task('assets-build', function (done) {
  return gulp
    .src(src, opts)
    .pipe(gulp.dest(dest));
});


// WATCH
gulp.task('assets-watch', function (done) {
  gulp.watch(src, opts, ['assets-watch-stream']);
  return getWatchStream();
});
gulp.task('assets-watch-stream', getWatchStream);


function getWatchStream(){
  return gulp
    .src(src, opts)
    .pipe(newer(dest))
    .pipe(gulp.dest(dest));
}
