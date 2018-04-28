var gulp = require('gulp');
var runSequence = require('run-sequence');


require('./tasks/clean.js');
require('./tasks/env.js');
require('./tasks/sass.js');
require('./tasks/static.js');


gulp.task('build', function (done) {
  return runSequence(
    'clean',
    'env',
    [
      'sass-build',
      'static-build'
    ],
    done
  );
});
