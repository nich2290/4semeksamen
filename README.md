# 1508 Project Template Webpack
This project is targeted for CMS-integrated or static websites.

## What's new
### v0.0.4
- Webpack devServer setup changed (removed terminal info at startup)
- Jest test-library added: [jestjs.io](https://jestjs.io) (see example in `/src/components/app/app.test.js`)
- Styleguide page added `/src/views/styleguide.pug`
- postcss-preset-env upgraded to v6.2.0
- postcss-color-mod-function plugin added for color-mod CSS-function [see github](https://github.com/jonathantneal/postcss-color-mod-function)

### v0.0.3
- Upgrade to Webpack 4
- `/dist` folder changed to `/public` for similarity to Create React App setup

## Project dependencies
##### Install Node via Homebrew (Mac)
Guide: https://changelog.com/posts/install-node-js-with-homebrew-on-os-x
- Install Homebrew (from Terminal): `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
- Run `brew update`
- Run `brew install node`

##### Install Node via installer
- https://nodejs.org/en/download/

##### Install Yarn
- Run `brew install yarn`
- [Install guide](https://yarnpkg.com/en/docs/install)
- [About Yarn](https://yarnpkg.com)

## Start developing
- Run `yarn` (installs node-modules)
- Run `yarn start` (starts Webpack devServer)
- Dev site will be served from `/public` folder
- Open browser at `http://localhost:1508`

## Create a production build
Always create a production build before deploying to demo, test, QA, prod or live-site:
- Run `yarn build` (compiles all files to `/build`)
- Upload contents of the `/build` folder to your website root-folder
- Note: the `/build` folder is added to .gitignore by default to avoid git-conflicts

## Build to Web-folder (Umbraco)
To serve assets from alternate folder (i.e. `./Web`):
- Set path to your Web-folder in package.json `"webfolder": "./Web"`
- Run `yarn startweb`
- Assets will be copied to web-folder and watched for changes
- Run `yarn buildweb` for production-ready build

## VS Code setup
- Install language-postcss plugin: https://marketplace.visualstudio.com/items?itemName=cpylua.language-postcss
- Add this to your VS Code settings: 
<pre>
{
 ...
 "files.associations": {
   "*.css": "postcss"
 }
 ...
}
</pre>

## Stack
- Pug HTML-templates [pugjs.org](https://pugjs.org), info: [Getting started with Pug](https://codeburst.io/getting-started-with-pug-template-engine-e49cfa291e33)
- ES6+ syntax (via babel-compiler and [polyfill.io](https://cdn.polyfill.io))
- Custom JavaScript component-system (via `data-component="my-component"` attributes)
- PostCSS: 'postcss-preset-env' plugin, stage 0 by default ([preset-env.cssdb.org](https://preset-env.cssdb.org/features))
- Default CSS grid-system: [flexboxgrid.com](http://flexboxgrid.com)
- CSS BEM-syntax or similar "modular" containment system
- Jest JavaScript test-library: [jestjs.io](https://jestjs.io)

## Folders
<pre>
|--build <small>(production-ready files for deployment, only present after running 'yarn build')</small>
|--config <small>(webpack config files)</small>
|--node_modules <small>(npm packages, project dependencies)</small>
|--public <small>(dev-server root, static assets, images, etc)</small>
|--src <small>(all files that need processing by Webpack)</small>
    |--components <small>(for self-contained, reusable components)</small>
    |--consts <small>(keep constants in dedicated files so you can import them from anywhere)</small>
    |--json <small>(mock json-data for use in pug-templates and/or JavaScript-files)</small>
    |--styles <small>(global styles that need cascading throughout the site)</small>
    |--templates <small>(global Pug HTML-layouts that your views can extend from, mixin-functions for easy re-use of html-snippets)</small>
    |--services <small>(for javascript-functions that you need to use across multiple classes)</small>
    |--views <small>(your site's HTML-pages as Pug-templates)</small>
</pre>

## How to...
##### Add images, fonts or other static files to the project:
The `/public` folder serves as your site's root folder during development. 
It contains all files that are NOT being processed by Webpack.

To add files to your site, just put them in the root of `/public` or in sub-folders as you wish.

Example:
If `my-image.png` is placed in `/public/assets/images/my-image.png`, you could reference it in your html as `<img src="/assets/images/my-image.png"/>`

When building to production (`yarn build`), all files in `/public` folder will be copied to the `/build` folder alongside the processed files from Webpack (.html, .css, .js)

##### Add a JavaScript component:
- Open `src/index.js`
- Import your js-file at the top - i.e. `import Header from './components/Header/Header'`
- Add the imported component to the `components` array and give it a selector-name - like so:
`const components = [{Class: Header, selectorName: 'header'}]`
- To use the component, just add `data-component="header"` as an attribute to your html-element where you want your component instantiated - i.e.: `<div data-component="header"></div>`

##### Preview project on external device:
- Connect device to same wi-fi as your dev-computer
- Open config/webpack.config.dev.js and add `host: "0.0.0.0"` to the devServer config object
- Run `yarn start` and punch in your external IP-address on the device (the external IP-address is printed during `yarn start` command)

##### Prepare for launch:
- This project template contains a lot of references to '1508'. Make sure all references are changed to your site name and url. Do a global search for '1508' and replace with 'yoursitename'.
- Check
  - package.json
  - /public/assets/icons/
  - /src/templates/layout.pug
  - /src/templates/partials/meta-some.pug
  - /public/robots.txt
  - /public/sitemap.xml
  - This file...# 4semeksamen
