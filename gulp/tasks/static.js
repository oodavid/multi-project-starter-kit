var gulp = require('gulp');
var newer = require('gulp-newer');
var config = require('./config.js');


var src = [ '**/*' ]; // Files handled by other tasks may be added to this. See: `ignoreSrc`

// BUILD
gulp.task('static-build', function (done) {
  return gulp
    .src(src, config.opts)
    .pipe(gulp.dest(config.dest));
});


// WATCH
gulp.task('static-watch', function (done) {
  gulp.watch(src, config.opts, ['static-watch-stream']);
  return getWatchStream();
});
gulp.task('static-watch-stream', getWatchStream);
function getWatchStream(){
  return gulp
    .src(src, config.opts)
    .pipe(newer(config.dest))
    .pipe(gulp.dest(config.dest));
}


// Other parsers notify us which globs they handle
function ignoreSrc(ignoreGlob){
  src.push('!'+ignoreGlob);
}
module.exports.ignoreSrc = ignoreSrc;
