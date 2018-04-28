var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var config = require('./config.js');


global.browserSync = browserSync;


gulp.task('browsersync', function (done) {
  global.browserSync.init({
    port: 1337,
    server: {
      baseDir: config.dest,
    },
    watch: true,
    middleware: function(req, res, next) {
      res.setHeader("Cache-Control", "no-cache");
      next();
    }
  });
});
