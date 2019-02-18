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
})({"quiz-data.json":[function(require,module,exports) {
module.exports = [{
  "title": "Volvo Trucks",
  "music": "6FLwmdmW77N1Pxb1aWsZmO",
  "video": "M7FIvfx5J10"
}, {
  "title": "Peugeot 306",
  "music": "3XYSI6H0ttRuBoXiLx7YEh",
  "video": "5Jtn-jPzpAs"
}, {
  "title": "Vodafone - How are you?",
  "music": "0yEhNqCwEfy8LHUmnZoHpP",
  "video": "YnZD2A47LbE"
}, {
  "title": "NOS - Há mais em nós",
  "music": "3INsYP1Y8GG4qJvBsKCdXC",
  "video": "ZkBsbg332AU"
}, {
  "title": "Super Bock - Momentos",
  "music": "44IeABaLLsnFVb7rjzNTzS",
  "video": "nfFZ5dcGaJw"
}, {
  "title": "ZON 4i",
  "music": "4QDbzpmRA6atTEEE2W7j7k",
  "video": "AEGlADwFjYw"
}, {
  "title": "Coca Cola Diet",
  "music": "3QnHWkNMY2mpy494Bis0ly",
  "video": "vMGQoBc4c98"
}, {
  "title": "Mars",
  "music": "551qy5vUgrUfEUc4dCNfht",
  "video": "daS00nFu1TA"
}, {
  "title": "TMN Fenómeno",
  "music": "3gj9Igckl4Pe3Lx9FnJhrU",
  "video": "vZ1lnu254k4"
}, {
  "title": "Calzedonia",
  "music": "49vrEVBNvYb425Z9fYCelI",
  "video": "Lzv1uvhH8iI"
}, {
  "title": "Optimus Aldeia Global",
  "music": "2ck8lFrYAch2GPtdhpTHe3",
  "video": "9ezN7TJJ8XQ"
}, {
  "title": "PT 4G",
  "music": "5xhQChGGhKLWqBqX4XhtYE",
  "video": "Vf90S5zQFpU"
}, {
  "title": "Jumbo Hipermercados",
  "music": "3SdTKo2uVsxFblQjpScoHy",
  "video": "5g55mlkb_a4"
}, {
  "title": "Toyota Yaris Rock in Rio",
  "music": "1FsavsOprbAOp6bQoI2JmP",
  "video": "LdM8oEiVvF0"
}, {
  "title": "Renault Clio - 2009",
  "music": "1FTSo4v6BOZH9QxKc3MbVM",
  "video": "DDOpkzj03xo"
}, {
  "title": "Santander Totta (I need a Zero)",
  "music": "7L2eFj0KFJDmHTPMUL4ZxR",
  "video": "s1q4El5zgp4"
}, {
  "title": "Vodafone - LG KU990i Viewty Lite",
  "music": "4Hbe0lRKsXtDZ2wQIovz7I",
  "video": "ALFDc8TMpN0"
}, {
  "title": "Playstation - DanceStar Party",
  "music": "3BTqZwYj9bYNbrnXWwp3uu",
  "video": "dWs_iTt0syU"
}, {
  "title": "Nike Football - Passa ao Nível Seguinte",
  "music": "32I9MdnqhFLCnAwA2wUnTz",
  "video": "WtbM9GdgUaQ"
}, {
  "title": "Opel Corsa Black Edition",
  "music": "3b41uzbEK5QDlqsoOCufag",
  "video": "a65o6kqAr2g"
}, {
  "title": "Nescafé Dolce Gusto",
  "music": "6hpmTwgNCz81H2bFEREx29",
  "video": "vjpafgYoweY"
}, {
  "title": "Chips Ahoy",
  "music": "6tyMDp7sVCjvKK1uyaOvtQ",
  "video": "BYjR6yuAMLc"
}];
},{}],"quiz-data.service.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllQuizData = getAllQuizData;
exports.getQuizData = getQuizData;

var _quizData = _interopRequireDefault(require("./quiz-data.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var musicUrl = 'https://open.spotify.com/embed/track/{id}';
var videoUrl = 'https://www.youtube.com/embed/{id}?autoplay=1';

function getAllQuizData() {
  return _quizData.default.map(function (item, index) {
    return _objectSpread({
      id: index + 1
    }, item);
  });
}

function getQuizData(index) {
  var quizItem = _quizData.default[index - 1];
  return quizItem && _objectSpread({}, quizItem, {
    music: musicUrl.replace('{id}', quizItem.music),
    video: videoUrl.replace('{id}', quizItem.video)
  });
}
},{"./quiz-data.json":"quiz-data.json"}],"helpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIframeContent = getIframeContent;
exports.getTitleContent = getTitleContent;
exports.getQuizLinks = getQuizLinks;

function getIframeContent(src) {
  var iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.frameBorder = 0;
  iframe.allowtransparency = true;
  iframe.allow = "encrypted-media";
  iframe.autoplay = true;
  return iframe;
}

function getTitleContent(title) {
  var videoTitle = document.createElement('span');
  videoTitle.innerHTML = " - ".concat(title);
  return videoTitle;
}

function getQuizLinks(items) {
  return items.map(function (_ref) {
    var id = _ref.id;
    var element = document.createElement('a');
    element.text = "Quiz ".concat(id);
    element.href = "?quiz=".concat(id);
    return element;
  });
}
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _quizData = require("./quiz-data.service");

var _helpers = require("./helpers");

var quizId = location.search.split('=')[1] || 1;
var solutionButton = document.querySelector('.btn-response');
var linksContainer = document.querySelector('.quiz-links-list');
var quizData = (0, _quizData.getAllQuizData)();
var linkElements = (0, _helpers.getQuizLinks)(quizData);
linkElements.forEach(function (link) {
  linksContainer.appendChild(link);
});
var quizItem = (0, _quizData.getQuizData)(quizId); // Add music to player

document.querySelector('.music').appendChild((0, _helpers.getIframeContent)(quizItem.music)); // On Click show movie Information

solutionButton.addEventListener('click', function (event) {
  event.target.style.display = 'none';
  document.querySelector('.video').appendChild((0, _helpers.getIframeContent)(quizItem.video));
  document.querySelector('.video h1').appendChild((0, _helpers.getTitleContent)(quizItem.title));
});
},{"./quiz-data.service":"quiz-data.service.js","./helpers":"helpers.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60882" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/app.e31bb0bc.map