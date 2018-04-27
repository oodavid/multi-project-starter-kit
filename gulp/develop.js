var gulp = require('gulp');
var runSequence = require('run-sequence');


require('./subtasks/browsersync.js');
require('./subtasks/clean.js');
require('./subtasks/sass.js');
require('./subtasks/html.js');
require('./subtasks/assets.js');


gulp.task('develop', function (done) {
  return runSequence(
    'clean',
    [
      'sass-watch',
      'html-watch',
      'assets-watch'
    ],
    'browsersync'
  );
});
