UOIT Next Steps microsite
=========================

This repository contains the source code for the UOIT Next Steps microsite, featured at [https://uoit.ca/nextsteps](https://uoit.ca/nextsteps). This readme can is intended as a guide for UOIT Webteam members in setting up a local copy of the microsite for content editing and development.

---

### The simple 🐻 necessities

#### Setup

1. Clone this repo and make it your working directory:
	```sh
	git clone https://github.com/wosevision/uoit-nextsteps.git
	cd uoit-nextsteps
	```
2. Run a package installer from the root directory. You have two options to choose from:
	```sh
	npm install # slow, womp womp
	# or
	yarn install # FAST! / hipster npm install
	yarn # also works too
	```

#### Tasks

1. **For development:**
	```sh
	npm run dev
	# or
	yarn dev
	```
	Your browser will automatically be opened and directed to the Browsersync proxy address.
2. **For production:**
	```sh
	npm run build
	# or 
	yarn build
	```
	This task does not start a server or Browsersync, but instead just prepares assets for production.

When the `dev` task is running, the app is serving files from the `/build` directory. Any changes in the `/app` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.

**NOTE:** The `<base href="...">` in `index.html` needs to be set differently for development and production; there are example values with notes commented out in the document's `<head>`.

### Project structure

```sh
nextsteps
├── app
│   ├── components
│   │   ├── bg-video
│   │   │   └── ...
│   │   ├── checklist
│   │   │   └── ...
│   │   ├── common
│   │   │   └── ... # generated template file ends up here
│   │   ├── notification
│   │   │   └── ...
│   │   ├── page-nav
│   │   │   └── ...
│   │   ├── page-section
│   │   │   └── ...
│   │   ├── parallax
│   │   │   └── ...
│   │   └── partials
│   │   │   └── ... # get auto-included in generated file
│   ├── data
│   ├── images
│   └── styles
├── build
├── gulp
```

### Resources

---

#### Project notes

##### Dependency injection

Dependency injection is carried out with the `ng-annotate` library. In order to take advantage of this, a simple annotation of the format:

```js
class MyService {
  constructor($http) {
    'ngInject';
    ...
  }
}
```

needs to be added at the very beginning of any injectable functions (including constructor functions, as shown above). The Gulp tasks will then take care of adding any dependency injection, requiring you to only specify the dependencies within the function parameters and nothing more.

##### HTML partials

When any changes are made to the `index.html` file, the new file is simply copied to the `/build/` directory without any changes occurring.

HTML Files inside `/app/components/`, on the other hand, go through a slightly more complex process. The `gulp-angular-templatecache` module is used to process partials, which generates the `templatecache.run.js` file found in `/app/components/common/`. This file will contain all compiled HTML partials in escaped Javascript format, fully bootstrapped into Angular's `$templateCache` service. This allows their inclusion in the Javascript minification process as well as reduces the HTTP requests for templates.

##### Pre-compressing text assets

The `build` task generates a pre-compressed file for every uncompressed text asset file (.html.gz, .js.gz, css.gz). This enables web servers to serve compressed content without having to compress it on the fly. Pre-compression is handled by `gzip` task.

---

#### Original boilerplate

**[angularjs-gulp-browserify-boilerplate](https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate)** by jakemmarsh

A boilerplate using AngularJS, SASS, Gulp, and Browserify that also utilizes [these best AngularJS practices](https://github.com/toddmotto/angularjs-styleguide)  and Gulp best practices from [this resource](https://github.com/greypants/gulp-starter).

---
