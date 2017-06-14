// TODO
// module loader
// https://github.com/whatwg/loader
// https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules
// https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Using
// http://eloquentjavascript.net/10_modules.html
// http://exploringjs.com/es6/ch_modules.html
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
// https://appendto.com/2016/06/the-short-history-of-javascript-module-loaders/
// https://www.sitepoint.com/understanding-es6-modules/
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/
// http://www.zsoltnagy.eu/using-es6-modules-with-webpack/
// https://github.com/shama/es6-loader
// https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.hyjm8bskp
// https://braziljs.org/blog/modulos-no-javascript-moderno/
// http://tableless.com.br/modularizacao-em-javascript/

// IIFE
// AMD
// bar.js
define(function () {
    return 'bar';
});

// app.js
require(['bar'], function(bar) {
    console.log(bar); // bar
});

// CommonJs

// ES6: export, import

// Babeljs
// es2015-modules-amd
// es2015-modules-commonjs
// es2015-modules-systemjs
// es2015-modules-umd

// Webpack
// https://webpack.github.io/
// https://github.com/babel/babel-loader

// Browserify
