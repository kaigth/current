ProperJS App
=================

> A modular micro-framework for modern web apps.



## Getting Started


#### Clone
Clone this project to your local machine.
```shell
git clone git@github.com:ProperJS/App.git {your_project_dir}
```

Then clone the [Hobo](https://github.com/ProperJS/hobo) repository for the custom build tool.
```
cd {your_project_dir}

git clone git@github.com:ProperJS/hobo.git js_libs/hobo
```


#### Install

Local tools.
```shell
# Package dependencies
npm install

# Hobo custom build
cd js_libs/hobo

npm run build -- "eq not filter detach append remove"
```


#### Workflow
This project uses `npm` for task management. The format is `npm run [task]`. [This article](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool) is a good read on using npm as a build tool. The following are the configured tasks for this project.
```shell
# Build
build
build:js
build:css

# Watch
watch
watch:js
watch:sass

# Utility
doc:js
lint:js
```

The best way to start your day.
```shell
npm start
```



## Javascript
The information describes how aspects of the javascript application function.

#### JSDocs
The project uses [JSDoc](http://usejsdoc.org/index.html) for Javascript code documentation. To generate and browse the docs with a simple Python server perform the following.

```shell
npm run doc:js

cd js_docs

python -m SimpleHTTPServer
```

Now you can hit [localhost:8000](http://localhost:8000) to browse the docs.

#### App Emitter
Cross communication between modules is handled through a single emitter instance.
```javascript
// Import the util module
import emitter "./core/emitter";

// Bind an event
emitter.on( "app--[event]", handler );

// Fire an event
emitter.fire( "app--[event]" );

// Unbind an event
emitter.off( "app--[event]", handler );
```

These are the current application event hooks:
- app--init
- app--intro-art
- app--preload-done
- app--lazyload-done
- app--resize
- app--resize-debounced
- app--scroll {pos}
- app--scroll-up {pos}
- app--scroll-down {pos}
- app--scroll-end
- app--scroll-start
- app--pushed-route
- app--analytics-push
- app--updated-animate
- app--util--load-images


#### Page Transitions
Page transitions are handled through the use of [PageController](https://github.com/ProperJS/PageController). The [router](https://github.com/ProperJS/App/blob/master/js_src/router.js) module performs direct interaction with `PageController`, providing it the application modules that should be handled through the interface.


#### Scroll / Resize
All hooks into document scrolling and resizing utilize the app emitter instance. The [core/scrolls](https://github.com/ProperJS/App/blob/master/js_src/core/scrolls.js) and [core/resizes](https://github.com/ProperJS/App/blob/master/js_src/core/resizes.js) modules respectively are in charge of notifying the rest of the application about such events.


#### Image Loading
All image content is processed through [ImageLoader](https://github.com/ProperJS/ImageLoader). The [core/images](https://github.com/ProperJS/App/blob/master/js_src/core/images.js) module establishes a normalized interface for determining what should be loaded up front versus what can be lazy-loaded upon user interaction. A utility method is exposed in the [util](https://github.com/ProperJS/App/blob/master/js_src/core/util.js) module that provides and even more normalized interaction with `ImageLoader`.


#### Media Handling
Video and audio media is handled through [MediaBox](https://github.com/ProperJS/MediaBox) when available otherwise third-party service embeds are utilized.


#### Config / Utility
Basic utility type methods and configuration values are stored in their respective modules, [core/util](https://github.com/ProperJS/App/blob/master/js_src/core/util.js) and [core/config](https://github.com/ProperJS/App/blob/master/js_src/core/config.js).


#### API Module
The [core/api](https://github.com/ProperJS/App/blob/master/js_src/core/api.js) module provides a normalized interface for working with your site as a JSON API.



## Best Practices


#### ESLint
This project uses [ESLint](http://eslint.org/) for code consistency. The `.eslintrc` is a carefully curated set of definitions covering most all rules available.


#### Webpack, Babel & ES6
This project is using [webpack](https://webpack.github.io/) for local module dependencies as well as [babel](http://babeljs.io/) for ES6 syntax transpiling. A number of the ESLint rules establish a preference for ES6 syntax over ES5, so time to start fat-arrowing your Class no-vars :P