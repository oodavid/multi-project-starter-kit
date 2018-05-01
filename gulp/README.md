# Multi-Project Starter Kit

Develop multiple projects with ease.

## Installation

```sh
# Install gulp globally
npm install --global gulp
# Install dependencies
npm install
```

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

## <img src="https://user-images.githubusercontent.com/46879/39442594-b121d784-4ca9-11e8-9e2a-f4f9b08dd50a.png" alt="browsersync" width="24"> [Browsersync](https://www.browsersync.io)

Develop with style and speed

* Live Reload
* CSS injection
* Cross-Device Synchronization

# Usage

Just run `gulp` or `gulp --silent`

<p align="center">
  <img src="https://user-images.githubusercontent.com/46879/39433637-47f3c77e-4c8e-11e8-9f19-c17a9b997cbc.gif" alt="Demonstrating the Multi Project Starter Kit">
</p>

# Directory Structure

* `📁 build/` - properties build to, and serve from, this folder.
* `📁 env/` - multiple environment folders, copied to the active * property before build.
* `📁 gulp/` - task runner logic.
* `📁 projects/` - multiple web properties.

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
