var gulp = require('gulp');
var runSequence = require('run-sequence');


require('./tasks/clean.js');
require('./tasks/env.js');
require('./tasks/sass.js');
require('./tasks/static.js');
require('./tasks/eslint.js');
require('./tasks/browsersync.js');


gulp.task('develop', function (done) {
  return runSequence(
    'clean',
    'env',
    [
      'sass-watch',
      'static-watch',
      'eslint-watch',
    ],
    'browsersync'
  );
});
