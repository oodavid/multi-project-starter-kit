var gulp = require('gulp');
var replace = require('gulp-replace');
var package = require('../../package.json');
var config = require('./config.js');
var handleErrors = require('./handleErrors.js');


gulp.task('env', function (done) {
  return gulp
    .src(`${config.args.envPath}/**/*`)
    .pipe(replace('||VERSION||', package.version)).on('error', handleErrors)
    .pipe(replace('||PRODUCT||', config.args.product)).on('error', handleErrors)
    .pipe(gulp.dest(`${config.opts.cwd}/env`)); // NOT to the build directory!
});
