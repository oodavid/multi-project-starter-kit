// To ensure that we "work" within the right project directory
var opts = {
  cwd: null, // ie: `projects/demo`
};

// The args passed to use via CLI or prompt
var args = {
  project: null, // ie: `demo` or `my-project`
  env: null, // ie: `production` or `sandbox`
  task: null, // ie: `develop` or `build
};

module.exports.opts = opts;
module.exports.args = args;
module.exports.dest = 'build/';
