// https://medium.com/@boriscoder/catching-errors-on-gulp-js-4682eee2669f


var config = require('./config.js');
const path = require('path');
const notifier = require('node-notifier');


const pluginIcons = {
  'gulp': 'gulp.png',
  'gulp-sass': 'sass.png',
  'gulp-autoprefixer': 'autoprefixer.png',
  'browser-sync': 'browsersync.png',
  'gulp-eslint': 'eslint.png',
};


function handleErrors(err){
  // Build up an object
  var notifyObject = {
    sound: 'Funk',
  };
  // Icon
  var errIcon = pluginIcons[err.plugin] || 'gulp';
  errIcon = path.join(__dirname, '../src/icons/', errIcon);
  notifyObject.appIcon = errIcon;
  // File
  var errFile = err.fileName || err.relativePath || err.filename || err.file;
  if(errFile){
    notifyObject.title = path.relative(config.opts.cwd, errFile);
  }
  // Error Line?
  var errLine = err.line || err.row;
  if(errLine){
    notifyObject.subtitle = `line ${errLine}`;
    // Error Column?
    var errCol = err.column || err.col;
    if(errCol){
      notifyObject.subtitle += ` col ${errCol}`;
    }
  }
  // Message?
  var errMessage = err.messageOriginal || err.message;
  if(errMessage){
    notifyObject.message = errMessage;
  }
  // Notify
  notifier.notify(notifyObject);
  // And Log
  console.log(notifyObject);
  console.log(err);
  // End the pipe
  this.emit('end');
}

module.exports = handleErrors;
