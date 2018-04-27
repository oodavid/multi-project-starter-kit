var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglifycss');



var src = 'src/**/*.scss';
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
    .src(src)
    // Transform
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(uglify())
    // Output
    .pipe(gulp.dest(dest));
});



// WATCH
gulp.task('sass-watch', function () {
  gulp.watch(src, ['sass-watch-stream']); // Note that this watches ALL scss files
  return createWatchStream();
});
gulp.task('sass-watch-stream', createWatchStream);

function createWatchStream(){
  return gulp
    .src(src)
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
