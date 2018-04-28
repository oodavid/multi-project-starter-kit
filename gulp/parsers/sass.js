var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglifycss');



var opts = {
  cwd: global.config.cwd,
};
var src = '**/*.scss';
var dest = 'build/';



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
    .src(src, opts)
    // Transform
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(uglify())
    // Output
    .pipe(gulp.dest(dest));
});



// WATCH
gulp.task('sass-watch', function () {
  gulp.watch(src, opts, ['sass-watch-stream']); // Note that this watches ALL scss files
  return getWatchStream();
});
gulp.task('sass-watch-stream', getWatchStream);

function getWatchStream(){
  return gulp
    .src(src, opts)
    .pipe(sourcemaps.init())
    // Transform
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    // Output
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest));
}


// REFERENCES
//    https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js#L86
//    https://www.sitepoint.com/simple-gulpy-workflow-sass/
