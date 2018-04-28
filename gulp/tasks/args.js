var gulp = require('gulp');
var argv = require('yargs').argv;
var fs = require('fs');
var config = require('./config.js');


gulp.task('args', function (done) {
  var tasks = [];
  // Project
  if(argv.project){
    config.args.project = argv.project;
    config.opts.cwd = './projects/'+argv.project;
  } else {
    tasks.push('args-project');
  }
  // Task
  if(argv.task){
    config.args.task = argv.task;
    config.args.taskPath = `./gulp/${argv.task}.js`;
  } else {
    tasks.push('args-task');
  }
  // Environment
  if(argv.env){
    config.args.env = argv.env;
    config.args.envPath = `./env/${argv.env}`;
  } else {
    tasks.push('args-env');
  }
  // Run?
  if(!tasks.length){
    argsValidate(done);
  } else {
    var runSequence = require('run-sequence');
    require('./args-prompt.js');
    tasks.push('args-dump');
    tasks.push(function(){
      argsValidate(done);
    });
    return runSequence.apply(this, tasks);
  }
});


gulp.task('args-dump', function(done){
  var cyan = '\033[0;36m';
  var norm = '\033[0m';
  var cmd = `gulp --project ${config.args.project} --task ${config.args.task} --env ${config.args.env}`;
  if(argv.silent){
    cmd += ' --silent';
  }
  console.log(`
·------------------------------------------ - -
| ${cyan}To run this without prompts, use:${norm}
| ${cmd}
·------------------------------------------ - -
`);
  done();
});


function argsValidate(done){
  // The project directory must exist
  if(!fs.existsSync(config.opts.cwd)){
    console.error(`Args: Project directory '${config.opts.cwd}' doesn't exist`);
    return;
  }
  // The task must exist
  if(!fs.existsSync(config.args.taskPath)){
    console.error(`Args: Task '${config.args.taskPath}' doesn't exist`);
    return;
  }
  // The env must exist
  if(!fs.existsSync(config.args.envPath)){
    console.error(`Args: Env '${config.args.envPath}' doesn't exist`);
    return;
  }
  // Grand
  done();
}
