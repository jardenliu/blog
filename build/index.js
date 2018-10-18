// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"github.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getGithubArticleConfig = async url => {
  let result = {
    updatedDate: false,
    rawUrl: ''
  };
  let config = await _axios.default.get(url).then(res => {
    if (res.status == 200) {
      let pageStr = res.data;
      let rawUrlStrArr = pageStr.match(/(?<=id=\"raw-url\".*href=\").*(?=\">Raw<\/a>)/g);
      let rawUrl = rawUrlStrArr && rawUrlStrArr.length > 0 ? 'https://github.com' + rawUrlStrArr[0] : false;
      let dateTimeStrArr = pageStr.match(/(?<=datetime\=\").*(?=\">)/g);
      let updatedDate = dateTimeStrArr && dateTimeStrArr.length > 0 ? dateTimeStrArr[0] : '';

      if (dateTimeStrArr == null) {
        return getGithubArticleConfig(url);
      }

      return {
        rawUrl,
        updatedDate
      };
    }
  });
  return Object.assign({}, result, config);
};

const getGithubArticleContent = async url => {
  if (!url || typeof url !== 'string') {
    return '';
  }

  let result = await _axios.default.get(url).then(res => {
    if (res.status == 200) {
      return res.data;
    }

    return '';
  });
  return result;
};

const fetchGithubArticles = async articles => {
  for (let i = 0; i < articles.length; i++) {
    let art = articles[i];
    let cfg = await getGithubArticleConfig(art.url);
    art.content = await getGithubArticleContent(cfg.rawUrl);
    articles[i] = _objectSpread({}, art, cfg);
  }

  return articles;
};

var _default = fetchGithubArticles;
exports.default = _default;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _github = _interopRequireDefault(require("./github"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let articleConfigs = require(_path.default.join(__dirname, '..', 'articles.json'));

if (Object.prototype.toString.call(articleConfigs) !== '[object Array]') {
  process.exit(0);
}

const fetchArticles = async config => {
  let githubArticles = config.filter(art => art.type === 'github');
  let githubArts = await (0, _github.default)(githubArticles);
  let articleDatebase = [...githubArts];

  _fs.default.writeFileSync(_path.default.join(__dirname, '..', 'database.json'), JSON.stringify(articleDatebase));
};

fetchArticles(articleConfigs).catch(err => console.log(err));
},{"./github":"github.js"}]},{},["index.js"], null)
//# sourceMappingURL=/index.map