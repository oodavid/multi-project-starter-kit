# Multi-Project Starter Kit

Develop multiple projects using a single task runner.

<p align="center">
  <img src="https://user-images.githubusercontent.com/46879/39433637-47f3c77e-4c8e-11e8-9f19-c17a9b997cbc.gif" alt="Demonstrating the Multi Project Starter Kit">
</p>

## Installation

```sh
# Install gulp globally
npm install --global gulp
# Install dependencies
npm install
```

# Directory Structure

* `📁 build/` - properties build to, and serve from, this folder.
* `📁 env/` - multiple environment folders, copied to the active * property before build.
* `📁 gulp/` - task runner logic.
* `📁 projects/` - multiple web properties.

### Features

* [x] Local Development
    * [x] [Browsersync](https://www.browsersync.io)
* [x] CSS
    * [x] [SASS](http://sass-lang.com/)
    * [x] Minify
    * [x] Uglify
    * [x] Sourcemaps
* [x] ENV
* [x] Static Files
    * [x] Other tasks to add a glob to the blacklist
* [x] Command Line Prompt
    * [x] ...with validation
* [x] ESLint (Code Quality)
    * [x] Root Config File
    * [x] Gulp task
    * [VSCode Extension](https://github.com/Microsoft/vscode-eslint)
    * [Sublime Plugin](https://github.com/SublimeLinter/SublimeLinter-eslint)

### Features - Todo

* [ ] README
    * [ ] Link to Udemy Course
    * See [Accredible Readme](https://github.com/accredible/accredible-frontend/blob/master/README.md)
    * See [Google Web Starter Kit](https://github.com/google/web-starter-kit/)
* [ ] Consider adding Service-Worker pre caching. See: [web-starter-kit](https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js)

#### References

* [Google Web Starter Kit](https://github.com/google/web-starter-kit) - uses `babel-register`, which is nice, but also slow
* [BrowserSync + Gulp js](https://browsersync.io/docs/gulp)
* [Simple Gulp'y Workflow for SASS](https://www.sitepoint.com/simple-gulpy-workflow-sass/)
* [How to Organize your Gulp.js Development Builds for Multiple Environments](https://www.freshconsulting.com/how-to-organize-your-gulp-js-development-builds-for-multiple-environments/)
* [angular-seed](https://github.com/angular/angular-seed)
* [angular-seed-es6](https://github.com/gusgard/angular-seed-es6)
* [angularjs-gulp-browserify-boilerplate](https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate)
