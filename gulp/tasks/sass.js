var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglifycss');
var config = require('./config.js');
var static = require('./static.js');
var handleErrors = require('./handleErrors.js');



var src = '**/*.scss';
static.ignoreSrc(src); // Inform the static parser to ignore this src



var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%'],
};
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded', // outputStyle: 'compressed'
  precision: 10,
};



// BUILD
gulp.task('sass-build', function () {
  return gulp
    .src(src, config.opts)
    // Transform
    .pipe(sass(sassOptions)).on('error', handleErrors)
    .pipe(autoprefixer(autoprefixerOptions)).on('error', handleErrors)
    .pipe(uglify()).on('error', handleErrors)
    // Output
    .pipe(gulp.dest(config.dest));
});



// WATCH
gulp.task('sass-watch', function () {
  gulp.watch(src, config.opts, ['sass-watch-stream']);
  return getWatchStream();
});
gulp.task('sass-watch-stream', getWatchStream);

function getWatchStream(){
  return gulp
    .src(src, config.opts)
    .pipe(sourcemaps.init()).on('error', handleErrors)
    // Transform
    .pipe(sass(sassOptions)).on('error', handleErrors)
    .pipe(autoprefixer(autoprefixerOptions)).on('error', handleErrors)
    // Output
    .pipe(sourcemaps.write('.')).on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
}
