var gulp = require('gulp');
var del = require('del');
var config = require('./config.js');


gulp.task('clean', function (done) {
  return del([`${config.dest}*`]);
});
