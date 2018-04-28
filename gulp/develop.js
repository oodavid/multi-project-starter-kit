var gulp = require('gulp');
var runSequence = require('run-sequence');


require('./parsers/clean.js');
require('./parsers/env.js');
require('./parsers/sass.js');
require('./parsers/assets.js');
require('./parsers/browsersync.js');


gulp.task('develop', function (done) {
  return runSequence(
    'clean',
    'env',
    [
      'sass-watch',
      'assets-watch'
    ],
    'browsersync'
  );
});
