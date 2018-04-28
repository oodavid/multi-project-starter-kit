var gulp = require('gulp');
var config = require('./gulp/tasks/config.js');
require('./gulp/tasks/args.js');


dumpMessage(`
∇   ____   ∇
| :      : |  ·---------------------------- - -
{| ♥    ♥ |}  | Multi-Project Build System
 |___==___|   |   oodavid 2018
/          \\  ·---------------------------- - -
`);


gulp.task('default', [ 'args' ], function (done) {
  // Start the selected task
  require(config.args.taskPath);
  var runSequence = require('run-sequence');
  return runSequence(
    config.args.task,
    'joy',
    done
  );
});


gulp.task('joy', function (done) {
  dumpMessage('♥ Joy! ♥');
  done();
});


function dumpMessage(msg){
  var red = '\033[0;31m';
  var norm = '\033[0m';
  msg = msg.replace(/([∇♥])/g, `${red}$1${norm}`)
  console.log(msg);
}
