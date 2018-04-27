var gulp = require('gulp');
var sassdoc = require('sassdoc');


var options = {
  dest: 'docs',
  verbose: true,
  display: {
    access: ['public', 'private'],
    alias: true,
    watermark: true,
  },
  groups: {
    'undefined': 'Ungrouped',
    foo: 'Foo group',
    bar: 'Bar group',
  },
  basePath: 'https://github.com/SassDoc/sassdoc',
};


gulp.task('sassdoc', function () {
  return gulp.src('path/to/source/**/*.scss')
    .pipe(sassdoc(options));
});
