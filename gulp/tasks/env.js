var gulp = require('gulp');
var replace = require('gulp-replace');
var package = require('../../package.json');
var config = require('./config.js');


gulp.task('env', function (done) {
  return gulp
    .src(`${config.args.envPath}/**/*`)
    .pipe(replace('||VERSION||', package.version))
    .pipe(replace('||PRODUCT||', config.args.product))
    .pipe(gulp.dest(`${config.opts.cwd}/env`)); // NOT to the build directory!
});
