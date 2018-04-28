var gulp = require('gulp');
var glob = require('glob');
var prompt = require('gulp-prompt');
var config = require('./config.js');


gulp.task('args-task', function (done) {
  // Get a list of tasks
  var tasks = glob.sync('./gulp/*.js');
  for(var t=0,tl=tasks.length; t<tl; t++){
    tasks[t] = tasks[t].split('/').pop().slice(0, -3);
  }
  // Prompt the user
  return gulp
    .src('') // We just need a trigger, so the src doesn't matter
    .pipe(
      prompt.prompt(
        [{
          type: 'list',
          name: 'task',
          message: 'Which task?',
          choices: tasks
        }],
        function(response){
          config.args.task = response.task;
          config.args.taskPath = `./gulp/${response.task}.js`;
        }
      )
    );
});


gulp.task('args-project', function (done) {
  // Get a list of projects
  var projects = glob.sync('./projects/*/');
  for(var p=0,pl=projects.length; p<pl; p++){
    projects[p] = projects[p].split('/')[2];
  }
  // Prompt the user
  return gulp
    .src('') // We just need a trigger, so the src doesn't matter
    .pipe(
      prompt.prompt(
        [{
          type: 'list',
          name: 'project',
          message: 'Select project',
          choices: projects
        }],
        function(response){
          config.args.project = response.project;
          config.opts.cwd = './projects/'+response.project;
        }
      )
    );
});


gulp.task('args-env', function (done) {
  // Get a list of environments
  var envs = glob.sync('./env/*');
  for(var e=0,el=envs.length; e<el; e++){
    envs[e] = envs[e].split('/').pop();
  }
  // Prompt the user
  return gulp
    .src('') // We just need a trigger, so the src doesn't matter
    .pipe(
      prompt.prompt(
        [{
          type: 'list',
          name: 'env',
          message: 'Select env',
          choices: envs
        }],
        function(response){
          config.args.env = response.env;
          config.args.envPath = `./env/${response.env}`;
        }
      )
    );
});

