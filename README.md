<p align="center">
  <img src="gulp/src/banner.png" alt="Multi-Project Starter Kit">
  <br>
  <a href="https://github.com/oodavid/multi-project-starter-kit">Multi-Project Starter Kit</a> by <a href="https://github.com/oodavid">oodavid</a>.
</p>

<p align="center">
  Develop multiple projects with a single task runner.
</p>

# Quick Start

[Download the starter kit](releases/latest) or clone the repository.

Then install the dependencies:

```sh
npm install --global gulp
npm install
```

Now run `gulp` or `gulp --silent` to start developing

<p align="center">
  <img src="gulp/src/terminal.gif" alt="Demonstrating the Multi Project Starter Kit" width="550" height="443">
</p>

# Features

## <img src="https://user-images.githubusercontent.com/46879/39443536-d7027898-4cac-11e8-9370-19377f9a5ceb.png" alt="gulp" width="24"> <img src="https://user-images.githubusercontent.com/46879/39443641-264241ea-4cad-11e8-820c-506b42fab90b.png" alt="magic" width="24"> Gulp + Magic

Just run `gulp` and be prompted for:

* The project in your `/projects` directory
* The environment from your `/env` directory - _production, sandbox, etc._
* And the task to run - _develop, build, etc._

## <img src="https://user-images.githubusercontent.com/46879/39443152-9abd172c-4cab-11e8-9f34-e32baa0cb1ca.png" alt="css" width="24"> <img src="https://user-images.githubusercontent.com/46879/39442963-fce263fe-4caa-11e8-8ce8-c3882964592d.png" alt="css" width="24"> CSS + SASS

Works out of the box with:

* [SASS](http://sass-lang.com/)
* [Minify and Uglify](https://en.wikipedia.org/wiki/Minification_(programming))
* [Sourcemaps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps)

## <img src="https://user-images.githubusercontent.com/46879/39442453-1eddb5d2-4ca9-11e8-8a0d-4c8b25e8b230.png" alt="javascript" width="24"> <img src="https://user-images.githubusercontent.com/46879/39442598-b2fcd432-4ca9-11e8-9534-26144de59273.png" alt="eslint" width="24"> Javascript + ESLint

Promote best practices and use the latest features

* [ESlint](https://eslint.org)
    * Root Config File
    * Automatic Linting during development
* ✋ [VSCode Extension](https://github.com/Microsoft/vscode-eslint)
* ✋ [Sublime Plugin](https://github.com/SublimeLinter/SublimeLinter-eslint)

## <img src="https://user-images.githubusercontent.com/46879/39467619-d5fe361a-4d26-11e8-9f7d-24223235f5ef.png" alt="HTML" width="24"> <img src="https://user-images.githubusercontent.com/46879/39442594-b121d784-4ca9-11e8-9e2a-f4f9b08dd50a.png" alt="browsersync" width="24"> HTML + BrowserSync

Local development with style and speed

* [Browsersync](https://www.browsersync.io)
    * Live Reload
    * CSS injection
    * Cross-Device Synchronization

# Directory Structure

* `📁 projects/` - create your web projects here, one directory each
* `📁 env/` - create your environment directories here (they're copied to the active project before build)
* `📁 build/` - projects build to, and serve from, this folder
* `📁 gulp/` - task runner logic

# Todo

* README
    * Link to Udemy Course
    * ✋ See [Accredible Readme](https://github.com/accredible/accredible-frontend/blob/master/README.md)
    * ✋ See [Google Web Starter Kit](https://github.com/google/web-starter-kit/)
* Consider adding Service-Worker pre caching. See: [web-starter-kit](https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js)

#### References

* [Google Web Starter Kit](https://github.com/google/web-starter-kit) - uses `babel-register`, which is nice, but also slow
* [BrowserSync + Gulp js](https://browsersync.io/docs/gulp)
* [Simple Gulp'y Workflow for SASS](https://www.sitepoint.com/simple-gulpy-workflow-sass/)
* [How to Organize your Gulp.js Development Builds for Multiple Environments](https://www.freshconsulting.com/how-to-organize-your-gulp-js-development-builds-for-multiple-environments/)
* [angular-seed](https://github.com/angular/angular-seed)
* [angular-seed-es6](https://github.com/gusgard/angular-seed-es6)
* [angularjs-gulp-browserify-boilerplate](https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate)

# Attribution

When using the Multi-Project Starter Kit, you must include the following attribution in your **README** file:

<p align="center">
  <a href="https://github.com/oodavid/multi-project-starter-kit">
    <img src="gulp/src/banner.png" alt="Multi-Project Starter Kit">
  </a>
  <br>
  Built with the <a href="https://github.com/oodavid/multi-project-starter-kit">Multi-Project Starter Kit</a> by <a href="https://github.com/oodavid">oodavid</a>.
</p>
