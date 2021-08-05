// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fGHvF":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "f2c9685dad4863d1";
module.bundle.HMR_BUNDLE_ID = "a644ca6c57091b90";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4bci2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _ui = require("./classes/UI");
var _uiDefault = parcelHelpers.interopDefault(_ui);
var _storage = require("./classes/Storage");
var _storageDefault = parcelHelpers.interopDefault(_storage);
var _products = require("./classes/Products");
var _productsDefault = parcelHelpers.interopDefault(_products);
var _bag = require("./classes/Bag");
var _bagDefault = parcelHelpers.interopDefault(_bag);
var _fav = require("./classes/Fav");
var _favDefault = parcelHelpers.interopDefault(_fav);
var _observer = require("./classes/Observer");
var _observerDefault = parcelHelpers.interopDefault(_observer);
document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector(".preloader").classList.add("preloader--hidden");
    const _ui1 = new _uiDefault.default();
    const _products1 = new _productsDefault.default();
    const _bag1 = new _bagDefault.default();
    const _fav1 = new _favDefault.default();
    const _observe = new _observerDefault.default();
    _ui1.SETUP_UI();
    _bag1.SETUP_BAG();
    _fav1.SETUP_FAV();
    if (!!window.IntersectionObserver) _observe.scroll_observer("collections", "intro", "footer");
    _products1.fetchProducts().then((all_products)=>{
        _storageDefault.default.saveProducts(all_products);
    }).then(()=>{
        _bag1.getAddToBagBtns();
        _fav1.getFavBtns();
        _bag1.bagLogic();
        _fav1.favLogic();
        if (!!window.IntersectionObserver) _observe.animation_observer();
        else {
            //todo dodati style za sve elemente da su vidljivi i bez transforma
            _observe.browserDontSupportObserver();
            console.log("NE PODRZAVA OBSERVER");
        }
    });
});

},{"./classes/UI":"dr0MR","./classes/Storage":"7DdqB","./classes/Products":"iU7KM","./classes/Bag":"b2tAB","./classes/Fav":"gqhCm","./classes/Observer":"5PshA","@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"dr0MR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const $navbar = document.querySelector(".navbar");
const $navmob = document.querySelector(".navmob");
const $navbarBag = document.querySelector(".navbar__bag");
const $bag = document.querySelector(".bag");
const $closeBagBtn = document.querySelector(".bag .btn-close");
const $navbarFav = document.querySelector(".navbar__favs");
const $fav = document.querySelector(".fav");
const $closeFavBtn = document.querySelector(".fav .btn-close");
const $burger = document.querySelector(".navbar__burger");
const $modal_bg = document.querySelector(".modal-bg");
class UI {
    static openBagFav(_el, _class) {
        if (!_el.classList.contains(_class)) _el.classList.add(_class);
        if (!$modal_bg.classList.contains("modal-bg--open")) $modal_bg.classList.add("modal-bg--open");
    }
    static closeBagFav(_el, _class) {
        if (_el.classList.contains(_class)) _el.classList.remove(_class);
        if ($modal_bg.classList.contains("modal-bg--open")) $modal_bg.classList.remove("modal-bg--open");
    }
    static displayNoneTitleNoItems(_selector) {
        document.querySelector(_selector).style.display = "none";
    }
    static displayBlockTitleNoItems(_selector) {
        document.querySelector(_selector).style.display = "flex";
    }
    static disableBtn(_selector) {
        document.querySelector(_selector).disabled = true;
    }
    static enableBtn(_selector) {
        document.querySelector(_selector).disabled = false;
    }
    static setStyle({ _footerEl , _noItemsTitleEl , _displayFooter , _displayNoItemsTitle ,  }) {
        _footerEl.style.display = _displayFooter;
        _noItemsTitleEl.style.display = _displayNoItemsTitle;
    }
    static setBagFavStyleEmpty(_footerEl, _noItemsTitleEl) {
        this.setStyle({
            _footerEl,
            _noItemsTitleEl,
            _displayFooter: "none",
            _displayNoItemsTitle: "block"
        });
    }
    static setBagFavStyleFilled(_footerEl, _noItemsTitleEl) {
        this.setStyle({
            _footerEl,
            _noItemsTitleEl,
            _displayFooter: "grid",
            _displayNoItemsTitle: "none"
        });
    }
    addClickListenersToNavbarIcons(_clickElOpen, _clickElClose, _el, _class) {
        _clickElOpen.addEventListener("click", ()=>{
            UI.openBagFav(_el, _class);
        });
        _clickElClose.addEventListener("click", ()=>{
            UI.closeBagFav(_el, _class);
        });
    }
    addListenerToBurger() {
        $burger.addEventListener("click", ()=>{
            if (!$burger.classList.contains("burger--opened")) {
                $burger.classList.add("burger--opened");
                $navmob.classList.add("navmob--opened");
                $navbar.classList.add("navbar--transparent");
            } else {
                $burger.classList.remove("burger--opened");
                $navmob.classList.remove("navmob--opened");
                $navbar.classList.remove("navbar--transparent");
            }
        });
    }
    addListenersToModalBg() {
        $modal_bg.addEventListener("click", ()=>{
            UI.closeBagFav($bag, "bag--open");
            UI.closeBagFav($fav, "fav--open");
        });
        window.addEventListener("keyup", (e)=>{
            e.preventDefault();
            if (e.key === "Escape" || e.key === 27 || $modal_bg.classList.contains("modal-bg--open")) {
                UI.closeBagFav($bag, "bag--open");
                UI.closeBagFav($fav, "fav--open");
            }
        });
    }
    resizeNavbarOnScroll() {
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 30 && !$navmob.classList.contains("navmob--opened")) {
                $navbar.classList.add("navbar--scrolled");
                return;
            }
            $navbar.classList.remove("navbar--scrolled");
        });
    }
    SETUP_UI() {
        this.resizeNavbarOnScroll();
        this.addClickListenersToNavbarIcons($navbarBag, $closeBagBtn, $bag, "bag--open");
        this.addClickListenersToNavbarIcons($navbarFav, $closeFavBtn, $fav, "fav--open");
        this.addListenerToBurger();
        this.addListenersToModalBg();
    }
}
exports.default = UI;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"4N8i7":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7DdqB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Storage1 {
    static saveProducts(all_products) {
        localStorage.setItem("all_products", JSON.stringify(all_products));
    }
    static getProduct(id) {
        //? static jer zelimo da koristimo i u drugim klasama?
        let arrProducts = JSON.parse(localStorage.getItem("all_products"));
        return arrProducts.find((product)=>product.id == id
        );
    }
    static getAllProducts() {
        //? static jer zelimo da koristimo i u drugim klasama?
        let arrProducts = JSON.parse(localStorage.getItem("all_products"));
        return arrProducts || [];
    }
    static saveBag(arrBag) {
        localStorage.setItem("arrBag", JSON.stringify(arrBag));
    }
    static saveFav(arrFav) {
        localStorage.setItem("arrFav", JSON.stringify(arrFav));
    }
    static getBag() {
        return localStorage.getItem("arrBag") ? JSON.parse(localStorage.getItem("arrBag")) : [];
    }
    static getFav() {
        return localStorage.getItem("arrFav") ? JSON.parse(localStorage.getItem("arrFav")) : [];
    }
}
exports.default = Storage1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"iU7KM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Products {
    async fetchProducts() {
        try {
            let apiKey = "$2b$10$sFQFGLJgCbv4X/XwgaiL2eBw5qcN4q3CvBp8f57mdLyzZnQpSBkaW";
            let configObject = {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "secret-key": apiKey
                }
            };
            let url = `https://api.jsonbin.io/b/610bf0cdd5667e403a39cbc6`;
            let response = await fetch(url, configObject);
            let data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }
}
exports.default = Products;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"b2tAB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _storage = require("./Storage");
var _storageDefault = parcelHelpers.interopDefault(_storage);
var _ui = require("./UI");
var _uiDefault = parcelHelpers.interopDefault(_ui);
var _filter = require("./Filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
var _alertNotification = require("./AlertNotification");
var _alertNotificationDefault = parcelHelpers.interopDefault(_alertNotification);
const $navbarBagCounter = document.querySelector(".navbar__bag-counter") // koliko itemsa imamo u bagu
;
const $bag = document.querySelector(".bag");
const $clearBagBtn = document.querySelector(".bag .btn-clearbag");
const $bagTotal = document.querySelector(".bag .total-price-items");
const $bagItems = document.querySelector(".bag .items");
const _AlertNotification = new _alertNotificationDefault.default();
let arrAddToBagBtns = [];
class Bag {
    constructor(){
        this._arrBag = [];
    }
    get arrBag() {
        return this._arrBag;
    }
    set arrBag(value) {
        this._arrBag = value;
    }
    getAddToBagBtns() {
        let $addToBagBtns;
        if (window.location.pathname == "/index.html" || window.location.pathname == "/") $addToBagBtns = [
            ...document.querySelectorAll(".add-to-bag")
        ];
        else if (window.location.pathname == "/allwatches.html") $addToBagBtns = [
            ...document.querySelectorAll(".btn-addtobag")
        ];
        arrAddToBagBtns = $addToBagBtns;
        $addToBagBtns.forEach((btn)=>{
            let id = btn.dataset.id;
            let itemInBag = this.arrBag.find((item)=>item.id == id
            );
            if (itemInBag && (window.location.pathname == "/" || window.location.pathname == "/index.html")) {
                btn.classList.add("btn--added");
                btn.innerHTML = "ADDED &nbsp;&#10003;";
                btn.disabled = true;
            } else if (itemInBag && window.location.pathname == "/allwatches.html") {
                btn.closest(".card").classList.add("card--added");
                btn.disabled = true;
            }
            btn.addEventListener("click", (e)=>{
                if (window.location.pathname == "/" || window.location.pathname == "/index.html") {
                    e.target.classList.add("btn--added");
                    e.target.innerHTML = "ADDED &nbsp;&#10003;";
                } else if (window.location.pathname == "/allwatches.html") e.target.closest(".card").classList.add("card--added");
                e.target.disabled = true;
                //? 1. get product from products
                let bagItem = {
                    ..._storageDefault.default.getProduct(id),
                    amount: 1
                };
                //? 2. add products to the bag
                this.arrBag = [
                    ...this.arrBag,
                    bagItem
                ];
                //? 3. save bag in ls
                _storageDefault.default.saveBag(this.arrBag);
                //? 4. set bag values
                this.setBagValues(this.arrBag);
                //? 5. display bag item
                this.addToBag(bagItem);
                _AlertNotification.addNotification({
                    display: true,
                    text: `${bagItem.title} has been added to Bag!`
                });
                //? 6. show the bag
                _uiDefault.default.openBagFav($bag, "bag--open");
            });
        });
    }
    setBagValues(_arrBag) {
        // console.log(this.arrBag);
        let total_price = 0;
        let items_counter = 0;
        _arrBag.map((item)=>{
            total_price += item.price * item.amount;
            items_counter += item.amount;
        });
        $bagTotal.innerText = `$ ${parseFloat(total_price.toFixed(2))}`;
        $navbarBagCounter.innerText = items_counter;
    }
    addToBag(bagItem) {
        let arr_obj_imgs = _filterDefault.default.arrObjImgs;
        const article = document.createElement("article");
        article.classList.add("item");
        article.innerHTML = `\n			<figure class="item__figure">\n				<img class="item__img" src=${arr_obj_imgs[bagItem.id - 1]} alt="watch-brown-white-${bagItem.title}" />\n			</figure>\n\n			<div class="item__informations">\n				<h3 class="item__title">${bagItem.title}</h3>\n				<h4 class="item__subtitle">${bagItem.brand}</h4>\n				<p class="item__price">$ ${bagItem.price}</p>\n			</div>\n\n			<div class="item__controller">\n				<div class="item__add" data-id=${bagItem.id}>+</div>\n				<div class="item__amount">${bagItem.amount}</div>\n				<div class="item__remove" data-id=${bagItem.id}>-</div>\n			</div>\n\n			<svg xmlns="http://www.w3.org/2000/svg" class="item__icon item__icon--delete" data-id=${bagItem.id} width="17.499" height="20.783" viewBox="0 0 17.499 20.783">\n				<path d="M-6386.754-2279.46a4.252,4.252,0,0,1,0-6.011,4.254,4.254,0,0,1,6.009,0,4.257,4.257,0,0,1,0,6.012,4.234,4.234,0,0,1-3,1.242A4.238,4.238,0,0,1-6386.754-2279.46Zm3.991-1.466a.315.315,0,0,0,.446,0,.318.318,0,0,0,0-.448l-1.092-1.092,1.09-1.09a.318.318,0,0,0,0-.448.32.32,0,0,0-.448,0l-1.09,1.09-1.09-1.09a.318.318,0,0,0-.448,0,.317.317,0,0,0,0,.448l1.09,1.092-1.09,1.088a.318.318,0,0,0,0,.448.317.317,0,0,0,.448,0l1.09-1.09Zm-4.863,1.21h-6.16a2.145,2.145,0,0,1-2.142-2.142v-12.858h12.856v7.549a4.776,4.776,0,0,0-.679-.048,4.755,4.755,0,0,0-4.749,4.75,4.723,4.723,0,0,0,.875,2.747v0Zm-9.374-16.07v-2.143h3.75l1.071-1.071h5.357l1.072,1.071H-6382v2.143Z" transform="translate(6397 2299)"/>\n			</svg>\n		`;
        $bagItems.appendChild(article);
        _uiDefault.default.displayNoneTitleNoItems(".bag--if-no-items");
        _uiDefault.default.enableBtn(".btn-checkout");
        _uiDefault.default.enableBtn(".btn-clearbag");
    // UI.setBagFavStyleFilled($bagFooter, $noItemsTitle);
    // this.setStyleCondition();
    }
    populateBag(_arrBag) {
        _arrBag.forEach((item)=>this.addToBag(item)
        );
    }
    bagLogic() {
        $clearBagBtn.addEventListener("click", ()=>{
            this.clearBag();
        });
        //? bag functionallity
        $bagItems.addEventListener("click", (e)=>{
            //* delete item
            if (e.target.closest(".item__icon--delete")) {
                // ! da nisam stavila pointer-events: none; u css-u za sve childove svg elementa, morala bih closest() da koristim, a ne match()
                let $deleteItemBtn = e.target;
                let itemID = $deleteItemBtn.dataset.id;
                let currItem = this.arrBag.find((item)=>item.id == itemID
                );
                $deleteItemBtn.parentElement.classList.add("item--deleted");
                _AlertNotification.addNotification({
                    text: `${currItem.title} has been removed from Bag!`,
                    alertClass: "alert__item--removed"
                });
                setTimeout(()=>{
                    this.deleteFromBag(itemID) // uklonili smo iz arrBag, ali nismo i iz DOM-a
                    ;
                    // $bagItems.removeChild(deleteItemBtn.parentElement) || $bagItems.removeChild(deleteItemBtn.parentNode); // za mozilu kao radi parentNode
                    $bagItems.removeChild($deleteItemBtn.parentElement);
                    $deleteItemBtn.parentElement.classList.remove("item--deleted");
                }, 400);
            //* add item amount
            } else if (e.target.matches(".item__add")) {
                let $increaseAmountBtn = e.target;
                let itemID = $increaseAmountBtn.dataset.id;
                let currItem = this.arrBag.find((item)=>item.id == itemID
                );
                //todo problem je sto je this.arrBag [], nema nista i onda je i currItem undefined i amount samim itm i sve ostalo
                console.table(this.arrBag) //! []
                ;
                currItem.amount = currItem.amount + 1;
                _storageDefault.default.saveBag(this.arrBag);
                this.setBagValues(this.arrBag);
                $increaseAmountBtn.nextElementSibling.innerText = currItem.amount;
            } else if (e.target.matches(".item__remove")) {
                let $decreaseAmountBtn = e.target;
                let itemID = $decreaseAmountBtn.dataset.id;
                let currItem = this.arrBag.find((item)=>item.id == itemID
                );
                currItem.amount = currItem.amount - 1;
                if (currItem.amount > 0) {
                    _storageDefault.default.saveBag(this.arrBag);
                    this.setBagValues(this.arrBag);
                    $decreaseAmountBtn.previousElementSibling.innerText = currItem.amount;
                } else {
                    $decreaseAmountBtn.parentElement.parentElement.classList.add("item--deleted");
                    _AlertNotification.addNotification({
                        // text: `${currItem.title} has been removed from Bag!`,
                        text: `Watch has been removed from the Bag!`,
                        alertClass: "alert__item--removed"
                    });
                    setTimeout(()=>{
                        $bagItems.removeChild($decreaseAmountBtn.parentElement.parentElement);
                        this.deleteFromBag(itemID);
                        $decreaseAmountBtn.parentElement.parentElement.classList.remove("item--deleted");
                    }, 400);
                }
            }
        });
    }
    clearBag() {
        // console.log(this); //* kad stavim aa addEventListener this.clearBag() on vrati da se this odnosi na UI{} dakle ono sto bi nam trebalo, a kad stavimo this.clearBAg bez zagrada, onda za referencu vraca button na koji smo kliknuli tj clearBagBtn, on kaze da je u ovim slucajevima bolje koristini () => { this.clearBtn()} nego bez () => {}
        let bagItemsIDs = this.arrBag.map((item)=>item.id
        );
        bagItemsIDs.forEach((itemID)=>this.deleteFromBag(itemID)
        );
        while($bagItems.children.length > 0)$bagItems.removeChild($bagItems.children[0]);
        _AlertNotification.addNotification({
            text: `Your Bag is empty!`,
            alertClass: "alert__item--remove"
        });
        _uiDefault.default.displayBlockTitleNoItems(".bag--if-no-items");
        _uiDefault.default.disableBtn(".btn-checkout");
        _uiDefault.default.disableBtn(".btn-clearbag");
        // UI.setBagFavStyleEmpty($bagFooter, $noItemsTitle);
        _uiDefault.default.closeBagFav($bag, "bag--open");
    }
    deleteFromBag(itemID) {
        this.arrBag = this.arrBag.filter((item)=>item.id != itemID
        );
        this.setBagValues(this.arrBag);
        _storageDefault.default.saveBag(this.arrBag);
        let ATBbtn = this.getSingleATBbtn(itemID);
        ATBbtn.disabled = false;
        if (window.location.pathname == "/" || window.location.pathname == "/index.html") {
            ATBbtn.classList.remove("btn--added");
            if (ATBbtn.parentElement.className == "feature__footer") ATBbtn.innerText = "add to bag";
            else ATBbtn.innerHTML = `\n					<svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="21.786" viewBox="0 0 16.5 21.786">\n						<path d="M-6389-2281.464a4.254,4.254,0,0,1,4.25-4.25,4.255,4.255,0,0,1,4.251,4.25,4.256,4.256,0,0,1-4.251,4.25A4.256,4.256,0,0,1-6389-2281.464Zm2,.075a.318.318,0,0,0,.318.316h1.541v1.541a.318.318,0,0,0,.316.316.317.317,0,0,0,.316-.316v-1.541h1.544a.317.317,0,0,0,.314-.316.317.317,0,0,0-.314-.318h-1.544v-1.541a.316.316,0,0,0-.316-.316.317.317,0,0,0-.316.316v1.541h-1.541A.318.318,0,0,0-6387-2281.389Zm-1.726,2.848h0Zm-5.839,0a2.382,2.382,0,0,1-1.8-.833,2.633,2.633,0,0,1-.628-1.957l1.036-11.973a.617.617,0,0,1,.607-.581h1.825v-1.278a3.753,3.753,0,0,1,3.651-3.837,3.588,3.588,0,0,1,2.584,1.122,3.914,3.914,0,0,1,1.066,2.715v1.278h1.827a.616.616,0,0,1,.605.581l.631,7.273a5.007,5.007,0,0,0-1.342-.183,5.006,5.006,0,0,0-5,5,5,5,0,0,0,.774,2.675Zm2.26-16.623v1.278h4.87v-1.278a2.609,2.609,0,0,0-.711-1.811,2.39,2.39,0,0,0-1.724-.747A2.5,2.5,0,0,0-6392.305-2295.164Z" transform="translate(6397 2299.001)"/>\n					</svg>\n					add to bag\n				`;
        } else if (window.location.pathname == "/allwatches.html") ATBbtn.closest(".card").classList.remove("card--added");
    }
    getSingleATBbtn(itemID) {
        return arrAddToBagBtns.find((btn)=>btn.dataset.id == itemID
        );
    }
    SETUP_BAG() {
        this.arrBag = _storageDefault.default.getBag();
        this.setBagValues(this.arrBag);
        this.populateBag(this.arrBag);
    }
}
exports.default = Bag;

},{"./Storage":"7DdqB","./UI":"dr0MR","./Filter":"4Rqu6","./AlertNotification":"X258i","@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"4Rqu6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _png = require("url:../../assets/products/*.png");
var _pngDefault = parcelHelpers.interopDefault(_png);
var _storage = require("./Storage");
var _storageDefault = parcelHelpers.interopDefault(_storage);
const $arrFilterWomenBtns = document.querySelectorAll(".filter--women");
const $arrFilterMenBtns = document.querySelectorAll(".filter--men");
const $arrFilterAllProductsBtns = document.querySelectorAll(".filter--all");
const $productsContainer = document.querySelector(".allwatches__cards");
const $title = document.querySelector(".allwatches__cards-section .title");
const $priceSorting = document.querySelectorAll(".price-sorting");
const $filtermobile_women = document.querySelector(".filtermobile--women");
const $filtermobile_men = document.querySelector(".filtermobile--men");
const $filtermobile_all = document.querySelector(".filtermobile--all");
const $filtermobileChb = document.querySelector("#filtermobile__chb");
class Filter {
    arrBag = _storageDefault.default.getBag();
    $cards;
    $arrWomen;
    $arrMen;
    $arrAllWatch;
    static get arrObjImgs() {
        return Object.values(_pngDefault.default);
    }
    displayProducts(products) {
        let productsRender = "";
        let arrImgs = this.constructor.arrObjImgs;
        products.forEach((product)=>{
            productsRender += `\n				<article class="card" data-gender=${product.gender} data-id=${product.id}>\n					<figure class="card__figure">\n						<img src=${arrImgs[product.id - 1]} alt="hand-watch-with-title-${product.title}" class="card__img" />\n					</figure>\n					\n					<div class="card__informations">\n						<h3 class="card__title">${product.title}</h3>\n						<h4 class="card__subtitle">${product.brand}</h4>\n						<p class="card__price" data-price=${product.price}>$ ${product.price}</p>\n					</div>\n\n					<button class="btn-addtobag" data-id=${product.id}>\n						<svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="21.786" viewBox="0 0 16.5 21.786"><path d="M-6389-2281.464a4.254,4.254,0,0,1,4.25-4.25,4.255,4.255,0,0,1,4.251,4.25,4.256,4.256,0,0,1-4.251,4.25A4.256,4.256,0,0,1-6389-2281.464Zm2,.075a.318.318,0,0,0,.318.316h1.541v1.541a.318.318,0,0,0,.316.316.317.317,0,0,0,.316-.316v-1.541h1.544a.317.317,0,0,0,.314-.316.317.317,0,0,0-.314-.318h-1.544v-1.541a.316.316,0,0,0-.316-.316.317.317,0,0,0-.316.316v1.541h-1.541A.318.318,0,0,0-6387-2281.389Zm-1.726,2.848h0Zm-5.839,0a2.382,2.382,0,0,1-1.8-.833,2.633,2.633,0,0,1-.628-1.957l1.036-11.973a.617.617,0,0,1,.607-.581h1.825v-1.278a3.753,3.753,0,0,1,3.651-3.837,3.588,3.588,0,0,1,2.584,1.122,3.914,3.914,0,0,1,1.066,2.715v1.278h1.827a.616.616,0,0,1,.605.581l.631,7.273a5.007,5.007,0,0,0-1.342-.183,5.006,5.006,0,0,0-5,5,5,5,0,0,0,.774,2.675Zm2.26-16.623v1.278h4.87v-1.278a2.609,2.609,0,0,0-.711-1.811,2.39,2.39,0,0,0-1.724-.747A2.5,2.5,0,0,0-6392.305-2295.164Z" transform="translate(6397 2299.001)"/></svg>\n					</button>\n\n					<svg xmlns="http://www.w3.org/2000/svg" data-id=${product.id} class="card__fav card-fav-btn" width="43.938" height="39.367" viewBox="0 0 43.938 39.367">\n						<path d="M38.151,3.608A11.143,11.143,0,0,0,29.863,0a10.425,10.425,0,0,0-6.511,2.247A13.321,13.321,0,0,0,20.72,5a13.314,13.314,0,0,0-2.633-2.749A10.423,10.423,0,0,0,11.576,0,11.143,11.143,0,0,0,3.287,3.608,12.953,12.953,0,0,0,0,12.453c0,3.5,1.306,6.712,4.11,10.1,2.508,3.026,6.113,6.1,10.288,9.656,1.426,1.215,3.041,2.592,4.719,4.059a2.433,2.433,0,0,0,3.2,0C24,34.8,25.615,33.42,27.042,32.2c4.174-3.557,7.779-6.629,10.287-9.656,2.8-3.383,4.11-6.591,4.11-10.1a12.951,12.951,0,0,0-3.287-8.845Zm0,0" transform="translate(1.25 1.25)"/>\n					</svg>\n				</article>\n			`;
        });
        $productsContainer.innerHTML = productsRender;
        this.$cards = document.querySelectorAll(".allwatches__cards-section .card");
        this.makeDOMarrays([
            ...this.$cards
        ]);
    }
    makeDOMarrays(_cards) {
        let arrUnisex = document.querySelectorAll(`[data-gender="unisex"]`);
        this.$arrWomen = [
            ...document.querySelectorAll(`[data-gender="female"]`),
            ...arrUnisex, 
        ];
        this.$arrMen = [
            ...document.querySelectorAll(`[data-gender="male"]`),
            ...arrUnisex, 
        ];
        this.$arrAllWatches = this.$cards;
    }
    filtering(_filterArrBtns, _arrForDisplay, _title) {
        _filterArrBtns.forEach((filterBtn)=>{
            filterBtn.addEventListener("click", ()=>{
                this.appendingChild(_arrForDisplay);
                this.changeTitle(_title);
            });
        });
    }
    filteringMobile(_filterBtn, _arrForDisplay, _title) {
        _filterBtn.addEventListener("click", ()=>{
            this.appendingChild(_arrForDisplay);
            this.changeTitle(_title);
            this.closeFiltermobileChb(false);
        });
    }
    changeTitle(title) {
        if ($title) {
            $title.innerText = title;
            if (!$title.classList.contains("title--anim")) $title.classList.add("title--anim");
            else $title.classList.remove("title--anim");
        }
    //todo dodati animaciju
    }
    priceSort() {
        $priceSorting.forEach((selectEl)=>{
            selectEl.addEventListener("change", (e)=>{
                if (e.srcElement.selectedIndex == 1) {
                    //todo fkn priceToHigh
                    this.priceToHigh();
                    this.closeFiltermobileChb(false);
                } else if (e.srcElement.selectedIndex == 2) {
                    //todo fkn priceToLow\
                    this.priceToLow();
                    this.closeFiltermobileChb(false);
                }
            });
        });
    }
    priceToHigh() {
        // const $cardsParent = document.querySelector('.allwatches__cards');
        let $arrCards = [
            ...document.querySelectorAll(".card")
        ];
        $arrCards.sort((a, b)=>{
            a = parseFloat(a.querySelector(".card__price").dataset.price);
            b = parseFloat(b.querySelector(".card__price").dataset.price);
            if (a > b) return -1;
            else if (a < b) return 1;
            else return 0;
        });
        this.appendingChild($arrCards);
    // $arrCards.forEach(card => {
    // 	$cardsParent.appendChild(card);
    // })
    }
    priceToLow() {
        // const $cardsParent = document.querySelector('.allwatches__cards');
        let $arrCards = [
            ...document.querySelectorAll(".card")
        ];
        $arrCards.sort((a, b)=>{
            a = parseFloat(a.querySelector(".card__price").dataset.price);
            b = parseFloat(b.querySelector(".card__price").dataset.price);
            if (a > b) return 1;
            else if (a < b) return -1;
            else return 0;
        });
        this.appendingChild($arrCards);
    // console.log($filtermobileChb);
    // $arrCards.forEach(card => {
    // 	$cardsParent.appendChild(card);
    // })
    }
    appendingChild(_arrForEach, _gender) {
        const $cardsParent = document.querySelector(".allwatches__cards");
        $cardsParent.innerHTML = "" // da nestanu cards koje nisu u ternutno arrayu
        ;
        _arrForEach.forEach((card)=>{
            $cardsParent.insertAdjacentElement("afterbegin", card);
        // $cardsParent.appendChild(card);
        });
    }
    closeFiltermobileChb(_isChecked) {
        $filtermobileChb.checked = _isChecked;
    }
    setup_filter() {
        this.filtering($arrFilterWomenBtns, this.$arrWomen, "for her");
        this.filtering($arrFilterMenBtns, this.$arrMen, "for him");
        this.filtering($arrFilterAllProductsBtns, this.$arrAllWatches, "all watches");
        this.filteringMobile($filtermobile_women, this.$arrWomen, "for her");
        this.filteringMobile($filtermobile_men, this.$arrMen, "for him");
        this.filteringMobile($filtermobile_all, this.$arrAllWatches, "all watches");
        this.priceSort();
        this.closeFiltermobileChb();
    }
}
exports.default = Filter;

},{"url:../../assets/products/*.png":"bnGQq","./Storage":"7DdqB","@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"bnGQq":[function(require,module,exports) {
const _temp0 = require("url:./001.png");
const _temp1 = require("url:./002.png");
const _temp2 = require("url:./003.png");
const _temp3 = require("url:./004.png");
const _temp4 = require("url:./005.png");
const _temp5 = require("url:./006.png");
const _temp6 = require("url:./007.png");
const _temp7 = require("url:./008.png");
const _temp8 = require("url:./009.png");
const _temp9 = require("url:./010.png");
const _temp10 = require("url:./011.png");
const _temp11 = require("url:./012.png");
const _temp12 = require("url:./013.png");
const _temp13 = require("url:./014.png");
const _temp14 = require("url:./015.png");
const _temp15 = require("url:./016.png");
const _temp16 = require("url:./017.png");
const _temp17 = require("url:./018.png");
const _temp18 = require("url:./019.png");
const _temp19 = require("url:./020.png");
module.exports = {
    "001": _temp0,
    "002": _temp1,
    "003": _temp2,
    "004": _temp3,
    "005": _temp4,
    "006": _temp5,
    "007": _temp6,
    "008": _temp7,
    "009": _temp8,
    "010": _temp9,
    "011": _temp10,
    "012": _temp11,
    "013": _temp12,
    "014": _temp13,
    "015": _temp14,
    "016": _temp15,
    "017": _temp16,
    "018": _temp17,
    "019": _temp18,
    "020": _temp19
};

},{"url:./001.png":"cJ5FK","url:./002.png":"giYKy","url:./003.png":"2g2gi","url:./004.png":"6Uw5U","url:./005.png":"2Wb1U","url:./006.png":"c3XdH","url:./007.png":"kKOiO","url:./008.png":"hPhuw","url:./009.png":"5VNd8","url:./010.png":"lsPb3","url:./011.png":"fi6W3","url:./012.png":"g4XuR","url:./013.png":"hrBMQ","url:./014.png":"8t1G2","url:./015.png":"gSHkI","url:./016.png":"5F2eD","url:./017.png":"4w2p2","url:./018.png":"4ryxy","url:./019.png":"g0WR5","url:./020.png":"hVMln"}],"cJ5FK":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eh2KU') + "001.1ddf2d04.png";

},{"./helpers/bundle-url":"bmzLE"}],"bmzLE":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"giYKy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eh2KU') + "002.04050690.png";

},{"./helpers/bundle-url":"bmzLE"}],"2g2gi":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eh2KU') + "003.c8cb7366.png";

},{"./helpers/bundle-url":"bmzLE"}],"6Uw5U":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eh2KU') + "004.11a807f9.png";

},{"./helpers/bundle-url":"bmzLE"}],"2Wb1U":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eh2KU') + "005.0f2dc9b6.png";

},{"./helpers/bundle-url":"bmzLE"}],"c3XdH":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eh2KU') + "006.4c30a1a8.png";

},{"./helpers/bundle-url":"bmzLE"}],"kKOiO":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eh2KU') + "007.120b9c95.png";

},{"./helpers/bundle-url":"bmzLE"}],"hPhuw":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eh2KU') + "008.f0d70d72.png";

},{"./helpers/bundle-url":"bmzLE"}],"5VNd8":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eh2KU') + "009.641c562c.png";

},{"./helpers/bundle-url":"bmzLE"}],"lsPb3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eh2KU') + "010.522ff9c2.png";

},{"./helpers/bundle-url":"bmzLE"}],"fi6W3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eh2KU') + "011.41b0a008.png";

},{"./helpers/bundle-url":"bmzLE"}],"g4XuR":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eh2KU') + "012.f8fa7776.png";

},{"./helpers/bundle-url":"bmzLE"}],"hrBMQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eh2KU') + "013.c4698b35.png";

},{"./helpers/bundle-url":"bmzLE"}],"8t1G2":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eh2KU') + "014.8d2262cd.png";

},{"./helpers/bundle-url":"bmzLE"}],"gSHkI":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eh2KU') + "015.ecf6808c.png";

},{"./helpers/bundle-url":"bmzLE"}],"5F2eD":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eh2KU') + "016.7a088d7e.png";

},{"./helpers/bundle-url":"bmzLE"}],"4w2p2":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eh2KU') + "017.929f688f.png";

},{"./helpers/bundle-url":"bmzLE"}],"4ryxy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eh2KU') + "018.e077c82e.png";

},{"./helpers/bundle-url":"bmzLE"}],"g0WR5":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eh2KU') + "019.ae2d3c4e.png";

},{"./helpers/bundle-url":"bmzLE"}],"hVMln":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eh2KU') + "020.6ea689b1.png";

},{"./helpers/bundle-url":"bmzLE"}],"X258i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class AlertNotification {
    $alertParent = document.querySelector('.alert');
    notification = {
    };
    addNotification({ text , alertClass  }) {
        let article = document.createElement('article');
        article.className = `alert__item ${alertClass}`;
        article.innerHTML = `\n			<span class="alert__icon">&#8505;</span>\n			<p class="alert__text">${text}</p>\n			<span class="alert__icon--close">&#10005;</span>\n		`;
        this.$alertParent.appendChild(article);
        setTimeout(()=>{
            article.style.display = 'none';
        }, 3000);
    }
    hideMoreThanFewAlerts() {
        const $arrAlerts = [
            ...document.querySelectorAll('.alert')
        ];
        if ($arrAlerts.length > 4) console.log('HIDE SOME');
    }
}
exports.default = AlertNotification;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"gqhCm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bag = require("./bag");
var _bagDefault = parcelHelpers.interopDefault(_bag);
var _storage = require("./Storage");
var _storageDefault = parcelHelpers.interopDefault(_storage);
var _ui = require("./UI");
var _uiDefault = parcelHelpers.interopDefault(_ui);
var _filter = require("./Filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
var _alertNotification = require("./AlertNotification");
var _alertNotificationDefault = parcelHelpers.interopDefault(_alertNotification);
const $navbarFavCounter = document.querySelector(".navbar__favs-counter");
const $fav = document.querySelector(".fav");
const $favFooter = document.querySelector(".fav__footer");
const $noItemsTitle = document.querySelector(".fav--if-no-items");
const $clearFavBtn = document.querySelector(".fav .btn-clearfav");
const $favItemsCounter = document.querySelector(".fav .total-price-items");
const $favItems = document.querySelector(".fav .items");
const _AlertNotification = new _alertNotificationDefault.default();
let arrFavBtns = [];
class Favourites extends _bagDefault.default {
    constructor(){
        super();
        this._arrFav = [];
    }
    get arrBag() {
        return this._arrBag;
    }
    set arrBag(value) {
        this._arrBag = value;
    }
    get arrFav() {
        return this._arrFav;
    }
    set arrFav(value) {
        this._arrFav = value;
    }
    getFavBtns() {
        const $favBtns = [
            ...document.querySelectorAll(".card-fav-btn")
        ];
        arrFavBtns = $favBtns;
        arrFavBtns.forEach((fav)=>{
            let itemID = fav.dataset.id;
            let itemInFav = this.arrFav.find((item)=>item.id == itemID
            );
            if (itemInFav) fav.classList.add("card-fav-btn--liked");
            fav.addEventListener("click", ()=>{
                if (!fav.classList.contains("card-fav-btn--liked")) {
                    fav.classList.add("card-fav-btn--liked");
                    let favItem = {
                        ..._storageDefault.default.getProduct(itemID),
                        amount: 1
                    };
                    this.arrFav = [
                        ...this.arrFav,
                        favItem
                    ];
                    _storageDefault.default.saveFav(this.arrFav);
                    this.setFavValues(this.arrFav);
                    this.addToFavourites(favItem);
                    //todo dodati alert notify kada dodamo item
                    _AlertNotification.addNotification({
                        text: `${favItem.title} has been added to Favourites!`,
                        alertClass: "alert__item--added"
                    });
                } else {
                    fav.classList.remove("card-fav-btn--liked");
                    this.deleteFromFavourites(itemID);
                    document.querySelectorAll(".fav .item").forEach((item)=>{
                        if (item.dataset.id == itemID) $favItems.removeChild(item);
                    });
                    this.setFavValues(this.arrFav);
                    //todo dodati alert notify kada obrisemo item
                    _AlertNotification.addNotification({
                        text: `Watch has been removed from Favourites!`,
                        alertClass: "alert__item--removed"
                    });
                }
            });
        });
    }
    getSingleFavBtn(itemID) {
        return arrFavBtns.find((fav)=>fav.dataset.id == itemID
        );
    }
    setFavValues(_arrFav) {
        let items_counter = 0;
        items_counter = _arrFav.length;
        $favItemsCounter.innerText = items_counter;
        $navbarFavCounter.innerText = items_counter;
    }
    addToFavourites(favItem) {
        let arr_obj_imgs = _filterDefault.default.arrObjImgs;
        const article = document.createElement("article");
        article.classList.add("item");
        article.setAttribute("data-id", `${favItem.id}`);
        article.innerHTML = `\n			<figure class="item__figure">\n				<img class="item__img" src=${arr_obj_imgs[favItem.id - 1]} alt="watch-brown-white-${favItem.title}" />\n			</figure>\n\n			<div class="item__informations">\n				<h3 class="item__title">${favItem.title}</h3>\n				<h4 class="item__subtitle">${favItem.brand}</h4>\n				<p class="item__price">$ ${favItem.price}</p>\n			</div>\n\n			<svg xmlns="http://www.w3.org/2000/svg" data-id=${favItem.id} class="item__icon item__icon--add-to-bag" width="16.5" height="21.786" viewBox="0 0 16.5 21.786">\n				<path d="M-6389-2281.464a4.254,4.254,0,0,1,4.25-4.25,4.255,4.255,0,0,1,4.251,4.25,4.256,4.256,0,0,1-4.251,4.25A4.256,4.256,0,0,1-6389-2281.464Zm2,.075a.318.318,0,0,0,.318.316h1.541v1.541a.318.318,0,0,0,.316.316.317.317,0,0,0,.316-.316v-1.541h1.544a.317.317,0,0,0,.314-.316.317.317,0,0,0-.314-.318h-1.544v-1.541a.316.316,0,0,0-.316-.316.317.317,0,0,0-.316.316v1.541h-1.541A.318.318,0,0,0-6387-2281.389Zm-1.726,2.848h0Zm-5.839,0a2.382,2.382,0,0,1-1.8-.833,2.633,2.633,0,0,1-.628-1.957l1.036-11.973a.617.617,0,0,1,.607-.581h1.825v-1.278a3.753,3.753,0,0,1,3.651-3.837,3.588,3.588,0,0,1,2.584,1.122,3.914,3.914,0,0,1,1.066,2.715v1.278h1.827a.616.616,0,0,1,.605.581l.631,7.273a5.007,5.007,0,0,0-1.342-.183,5.006,5.006,0,0,0-5,5,5,5,0,0,0,.774,2.675Zm2.26-16.623v1.278h4.87v-1.278a2.609,2.609,0,0,0-.711-1.811,2.39,2.39,0,0,0-1.724-.747A2.5,2.5,0,0,0-6392.305-2295.164Z" transform="translate(6397 2299.001)"/>\n			</svg>\n\n			<svg xmlns="http://www.w3.org/2000/svg" data-id=${favItem.id} class="item__icon item__icon--remove-from-fav" width="17.499" height="20.783" viewBox="0 0 17.499 20.783">\n				<path d="M-6386.754-2279.46a4.252,4.252,0,0,1,0-6.011,4.254,4.254,0,0,1,6.009,0,4.257,4.257,0,0,1,0,6.012,4.234,4.234,0,0,1-3,1.242A4.238,4.238,0,0,1-6386.754-2279.46Zm3.991-1.466a.315.315,0,0,0,.446,0,.318.318,0,0,0,0-.448l-1.092-1.092,1.09-1.09a.318.318,0,0,0,0-.448.32.32,0,0,0-.448,0l-1.09,1.09-1.09-1.09a.318.318,0,0,0-.448,0,.317.317,0,0,0,0,.448l1.09,1.092-1.09,1.088a.318.318,0,0,0,0,.448.317.317,0,0,0,.448,0l1.09-1.09Zm-4.863,1.21h-6.16a2.145,2.145,0,0,1-2.142-2.142v-12.858h12.856v7.549a4.776,4.776,0,0,0-.679-.048,4.755,4.755,0,0,0-4.749,4.75,4.723,4.723,0,0,0,.875,2.747v0Zm-9.374-16.07v-2.143h3.75l1.071-1.071h5.357l1.072,1.071H-6382v2.143Z" transform="translate(6397 2299)"/>\n			</svg>\n		`;
        $favItems.appendChild(article);
        _uiDefault.default.displayNoneTitleNoItems(".fav--if-no-items");
        _uiDefault.default.enableBtn(".btn-clearfav");
    // UI.setBagFavStyleFilled($favFooter, $noItemsTitle);
    }
    deleteFromFavourites(itemID) {
        this.arrFav = this.arrFav.filter((item)=>item.id != itemID
        );
        this.setFavValues(this.arrFav);
        _storageDefault.default.saveFav(this.arrFav);
        let favBtn = this.getSingleFavBtn(itemID);
        this.removeLikedClass(favBtn);
    }
    removeLikedClass(favBtn) {
        favBtn.classList.remove("card-fav-btn--liked");
    }
    addLikedClass(favBtn) {
        favBtn.classList.add("card-fav-btn--liked");
    }
    clearFav() {
        let favItemsIDs = this.arrFav.map((item)=>item.id
        );
        favItemsIDs.forEach((itemID)=>this.deleteFromFavourites(itemID)
        );
        while($favItems.children.length > 0)$favItems.removeChild($favItems.children[0]);
        // this.setStyle({favFooter: 'none', noItems: 'block'})
        _AlertNotification.addNotification({
            text: `Your Favourites are empty!`,
            alertClass: "alert__item--remove"
        });
        _uiDefault.default.displayBlockTitleNoItems(".fav--if-no-items");
        _uiDefault.default.disableBtn(".btn-clearbag");
        // UI.setBagFavStyleEmpty($favFooter, $noItemsTitle);
        _uiDefault.default.closeBagFav($fav, "fav--open");
    }
    populateFav(_arrFav) {
        _arrFav.forEach((item)=>this.addToFavourites(item)
        );
    }
    favLogic() {
        $clearFavBtn.addEventListener("click", ()=>{
            this.clearFav();
        });
        $favItems.addEventListener("click", (e)=>{
            if (e.target.closest(".item__icon--remove-from-fav")) {
                let $deleteItemFromFavBtn = e.target;
                let itemID = $deleteItemFromFavBtn.dataset.id;
                $deleteItemFromFavBtn.parentElement.classList.add("item--deleted");
                _AlertNotification.addNotification({
                    text: `Watch has been removed from Favourites!`,
                    alertClass: "alert__item--removed"
                });
                setTimeout(()=>{
                    this.deleteFromFavourites(itemID);
                    $favItems.removeChild($deleteItemFromFavBtn.parentElement);
                    $deleteItemFromFavBtn.parentElement.classList.remove("item--deleted");
                }, 400);
            } else if (e.target.closest(".item__icon--add-to-bag")) {
                let $addItemToBagBtn = e.target;
                let itemID = $addItemToBagBtn.dataset.id;
                let forBagItem = {
                    ..._storageDefault.default.getProduct(itemID),
                    amount: 1
                };
                let arr_bag = _storageDefault.default.getBag();
                let isAlreadyInBag = arr_bag.find((item)=>item.id == forBagItem.id
                );
                if (!isAlreadyInBag) {
                    arr_bag = [
                        ...arr_bag,
                        forBagItem
                    ];
                    super.arrBag = arr_bag;
                    _storageDefault.default.saveBag(super.arrBag);
                    super.setBagValues(super.arrBag);
                    // Storage.saveBag(arr_bag);
                    // super.setBagValues(arr_bag);
                    super.addToBag(forBagItem);
                    super.bagLogic();
                    this.arrFav = this.arrFav.filter((item)=>item.id != itemID
                    );
                    _storageDefault.default.saveFav(this.arrFav);
                    console.table(arr_bag);
                    console.table(super.arrBag);
                    $addItemToBagBtn.parentElement.classList.add("item--deleted");
                    this.deleteFromFavourites(itemID) // delete iz LS
                    ;
                    setTimeout(()=>{
                        $favItems.removeChild($addItemToBagBtn.parentElement);
                        $addItemToBagBtn.parentElement.classList.remove("item--deleted");
                    }, 400);
                    _AlertNotification.addNotification({
                        text: `${forBagItem.title} has been added to the Bag!`,
                        alertClass: "alert__item--added"
                    });
                    //! how to match btn on card and item which is added to bag from fav
                    if (window.location.pathname == "/allwatches.html") {
                        let cardAddToBagBtn = document.querySelector(".card .btn-addtobag");
                        if (cardAddToBagBtn.dataset.id == itemID) {
                            cardAddToBagBtn.closest(".card").classList.add("card--added");
                            cardAddToBagBtn.disabled = true;
                        }
                    }
                // this.bagFunctionallity();
                } else {
                    alert(`${forBagItem.title} watch is already in Bag! You can only remove this item from the Favourites.`);
                    return;
                }
            }
        });
    }
    SETUP_FAV() {
        this.arrFav = _storageDefault.default.getFav();
        this.setFavValues(this.arrFav);
        this.populateFav(this.arrFav);
    // this.setStyleCondition();
    }
}
exports.default = Favourites;

},{"./bag":"9bkL1","./Storage":"7DdqB","./UI":"dr0MR","./Filter":"4Rqu6","./AlertNotification":"X258i","@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"9bkL1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _storage = require("./Storage");
var _storageDefault = parcelHelpers.interopDefault(_storage);
var _ui = require("./UI");
var _uiDefault = parcelHelpers.interopDefault(_ui);
var _filter = require("./Filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
var _alertNotification = require("./AlertNotification");
var _alertNotificationDefault = parcelHelpers.interopDefault(_alertNotification);
const $navbarBagCounter = document.querySelector(".navbar__bag-counter") // koliko itemsa imamo u bagu
;
const $bag = document.querySelector(".bag");
const $clearBagBtn = document.querySelector(".bag .btn-clearbag");
const $bagTotal = document.querySelector(".bag .total-price-items");
const $bagItems = document.querySelector(".bag .items");
const _AlertNotification = new _alertNotificationDefault.default();
let arrAddToBagBtns = [];
class Bag {
    constructor(){
        this._arrBag = [];
    }
    get arrBag() {
        return this._arrBag;
    }
    set arrBag(value) {
        this._arrBag = value;
    }
    getAddToBagBtns() {
        let $addToBagBtns;
        if (window.location.pathname == "/index.html" || window.location.pathname == "/") $addToBagBtns = [
            ...document.querySelectorAll(".add-to-bag")
        ];
        else if (window.location.pathname == "/allwatches.html") $addToBagBtns = [
            ...document.querySelectorAll(".btn-addtobag")
        ];
        arrAddToBagBtns = $addToBagBtns;
        $addToBagBtns.forEach((btn)=>{
            let id = btn.dataset.id;
            let itemInBag = this.arrBag.find((item)=>item.id == id
            );
            if (itemInBag && (window.location.pathname == "/" || window.location.pathname == "/index.html")) {
                btn.classList.add("btn--added");
                btn.innerHTML = "ADDED &nbsp;&#10003;";
                btn.disabled = true;
            } else if (itemInBag && window.location.pathname == "/allwatches.html") {
                btn.closest(".card").classList.add("card--added");
                btn.disabled = true;
            }
            btn.addEventListener("click", (e)=>{
                if (window.location.pathname == "/" || window.location.pathname == "/index.html") {
                    e.target.classList.add("btn--added");
                    e.target.innerHTML = "ADDED &nbsp;&#10003;";
                } else if (window.location.pathname == "/allwatches.html") e.target.closest(".card").classList.add("card--added");
                e.target.disabled = true;
                //? 1. get product from products
                let bagItem = {
                    ..._storageDefault.default.getProduct(id),
                    amount: 1
                };
                //? 2. add products to the bag
                this.arrBag = [
                    ...this.arrBag,
                    bagItem
                ];
                //? 3. save bag in ls
                _storageDefault.default.saveBag(this.arrBag);
                //? 4. set bag values
                this.setBagValues(this.arrBag);
                //? 5. display bag item
                this.addToBag(bagItem);
                _AlertNotification.addNotification({
                    display: true,
                    text: `${bagItem.title} has been added to Bag!`
                });
                //? 6. show the bag
                _uiDefault.default.openBagFav($bag, "bag--open");
            });
        });
    }
    setBagValues(_arrBag) {
        // console.log(this.arrBag);
        let total_price = 0;
        let items_counter = 0;
        _arrBag.map((item)=>{
            total_price += item.price * item.amount;
            items_counter += item.amount;
        });
        $bagTotal.innerText = `$ ${parseFloat(total_price.toFixed(2))}`;
        $navbarBagCounter.innerText = items_counter;
    }
    addToBag(bagItem) {
        let arr_obj_imgs = _filterDefault.default.arrObjImgs;
        const article = document.createElement("article");
        article.classList.add("item");
        article.innerHTML = `\n			<figure class="item__figure">\n				<img class="item__img" src=${arr_obj_imgs[bagItem.id - 1]} alt="watch-brown-white-${bagItem.title}" />\n			</figure>\n\n			<div class="item__informations">\n				<h3 class="item__title">${bagItem.title}</h3>\n				<h4 class="item__subtitle">${bagItem.brand}</h4>\n				<p class="item__price">$ ${bagItem.price}</p>\n			</div>\n\n			<div class="item__controller">\n				<div class="item__add" data-id=${bagItem.id}>+</div>\n				<div class="item__amount">${bagItem.amount}</div>\n				<div class="item__remove" data-id=${bagItem.id}>-</div>\n			</div>\n\n			<svg xmlns="http://www.w3.org/2000/svg" class="item__icon item__icon--delete" data-id=${bagItem.id} width="17.499" height="20.783" viewBox="0 0 17.499 20.783">\n				<path d="M-6386.754-2279.46a4.252,4.252,0,0,1,0-6.011,4.254,4.254,0,0,1,6.009,0,4.257,4.257,0,0,1,0,6.012,4.234,4.234,0,0,1-3,1.242A4.238,4.238,0,0,1-6386.754-2279.46Zm3.991-1.466a.315.315,0,0,0,.446,0,.318.318,0,0,0,0-.448l-1.092-1.092,1.09-1.09a.318.318,0,0,0,0-.448.32.32,0,0,0-.448,0l-1.09,1.09-1.09-1.09a.318.318,0,0,0-.448,0,.317.317,0,0,0,0,.448l1.09,1.092-1.09,1.088a.318.318,0,0,0,0,.448.317.317,0,0,0,.448,0l1.09-1.09Zm-4.863,1.21h-6.16a2.145,2.145,0,0,1-2.142-2.142v-12.858h12.856v7.549a4.776,4.776,0,0,0-.679-.048,4.755,4.755,0,0,0-4.749,4.75,4.723,4.723,0,0,0,.875,2.747v0Zm-9.374-16.07v-2.143h3.75l1.071-1.071h5.357l1.072,1.071H-6382v2.143Z" transform="translate(6397 2299)"/>\n			</svg>\n		`;
        $bagItems.appendChild(article);
        _uiDefault.default.displayNoneTitleNoItems(".bag--if-no-items");
        _uiDefault.default.enableBtn(".btn-checkout");
        _uiDefault.default.enableBtn(".btn-clearbag");
    // UI.setBagFavStyleFilled($bagFooter, $noItemsTitle);
    // this.setStyleCondition();
    }
    populateBag(_arrBag) {
        _arrBag.forEach((item)=>this.addToBag(item)
        );
    }
    bagLogic() {
        $clearBagBtn.addEventListener("click", ()=>{
            this.clearBag();
        });
        //? bag functionallity
        $bagItems.addEventListener("click", (e)=>{
            //* delete item
            if (e.target.closest(".item__icon--delete")) {
                // ! da nisam stavila pointer-events: none; u css-u za sve childove svg elementa, morala bih closest() da koristim, a ne match()
                let $deleteItemBtn = e.target;
                let itemID = $deleteItemBtn.dataset.id;
                let currItem = this.arrBag.find((item)=>item.id == itemID
                );
                $deleteItemBtn.parentElement.classList.add("item--deleted");
                _AlertNotification.addNotification({
                    text: `${currItem.title} has been removed from Bag!`,
                    alertClass: "alert__item--removed"
                });
                setTimeout(()=>{
                    this.deleteFromBag(itemID) // uklonili smo iz arrBag, ali nismo i iz DOM-a
                    ;
                    // $bagItems.removeChild(deleteItemBtn.parentElement) || $bagItems.removeChild(deleteItemBtn.parentNode); // za mozilu kao radi parentNode
                    $bagItems.removeChild($deleteItemBtn.parentElement);
                    $deleteItemBtn.parentElement.classList.remove("item--deleted");
                }, 400);
            //* add item amount
            } else if (e.target.matches(".item__add")) {
                let $increaseAmountBtn = e.target;
                let itemID = $increaseAmountBtn.dataset.id;
                let currItem = this.arrBag.find((item)=>item.id == itemID
                );
                //todo problem je sto je this.arrBag [], nema nista i onda je i currItem undefined i amount samim itm i sve ostalo
                console.table(this.arrBag) //! []
                ;
                currItem.amount = currItem.amount + 1;
                _storageDefault.default.saveBag(this.arrBag);
                this.setBagValues(this.arrBag);
                $increaseAmountBtn.nextElementSibling.innerText = currItem.amount;
            } else if (e.target.matches(".item__remove")) {
                let $decreaseAmountBtn = e.target;
                let itemID = $decreaseAmountBtn.dataset.id;
                let currItem = this.arrBag.find((item)=>item.id == itemID
                );
                currItem.amount = currItem.amount - 1;
                if (currItem.amount > 0) {
                    _storageDefault.default.saveBag(this.arrBag);
                    this.setBagValues(this.arrBag);
                    $decreaseAmountBtn.previousElementSibling.innerText = currItem.amount;
                } else {
                    $decreaseAmountBtn.parentElement.parentElement.classList.add("item--deleted");
                    _AlertNotification.addNotification({
                        // text: `${currItem.title} has been removed from Bag!`,
                        text: `Watch has been removed from the Bag!`,
                        alertClass: "alert__item--removed"
                    });
                    setTimeout(()=>{
                        $bagItems.removeChild($decreaseAmountBtn.parentElement.parentElement);
                        this.deleteFromBag(itemID);
                        $decreaseAmountBtn.parentElement.parentElement.classList.remove("item--deleted");
                    }, 400);
                }
            }
        });
    }
    clearBag() {
        // console.log(this); //* kad stavim aa addEventListener this.clearBag() on vrati da se this odnosi na UI{} dakle ono sto bi nam trebalo, a kad stavimo this.clearBAg bez zagrada, onda za referencu vraca button na koji smo kliknuli tj clearBagBtn, on kaze da je u ovim slucajevima bolje koristini () => { this.clearBtn()} nego bez () => {}
        let bagItemsIDs = this.arrBag.map((item)=>item.id
        );
        bagItemsIDs.forEach((itemID)=>this.deleteFromBag(itemID)
        );
        while($bagItems.children.length > 0)$bagItems.removeChild($bagItems.children[0]);
        _AlertNotification.addNotification({
            text: `Your Bag is empty!`,
            alertClass: "alert__item--remove"
        });
        _uiDefault.default.displayBlockTitleNoItems(".bag--if-no-items");
        _uiDefault.default.disableBtn(".btn-checkout");
        _uiDefault.default.disableBtn(".btn-clearbag");
        // UI.setBagFavStyleEmpty($bagFooter, $noItemsTitle);
        _uiDefault.default.closeBagFav($bag, "bag--open");
    }
    deleteFromBag(itemID) {
        this.arrBag = this.arrBag.filter((item)=>item.id != itemID
        );
        this.setBagValues(this.arrBag);
        _storageDefault.default.saveBag(this.arrBag);
        let ATBbtn = this.getSingleATBbtn(itemID);
        ATBbtn.disabled = false;
        if (window.location.pathname == "/" || window.location.pathname == "/index.html") {
            ATBbtn.classList.remove("btn--added");
            if (ATBbtn.parentElement.className == "feature__footer") ATBbtn.innerText = "add to bag";
            else ATBbtn.innerHTML = `\n					<svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="21.786" viewBox="0 0 16.5 21.786">\n						<path d="M-6389-2281.464a4.254,4.254,0,0,1,4.25-4.25,4.255,4.255,0,0,1,4.251,4.25,4.256,4.256,0,0,1-4.251,4.25A4.256,4.256,0,0,1-6389-2281.464Zm2,.075a.318.318,0,0,0,.318.316h1.541v1.541a.318.318,0,0,0,.316.316.317.317,0,0,0,.316-.316v-1.541h1.544a.317.317,0,0,0,.314-.316.317.317,0,0,0-.314-.318h-1.544v-1.541a.316.316,0,0,0-.316-.316.317.317,0,0,0-.316.316v1.541h-1.541A.318.318,0,0,0-6387-2281.389Zm-1.726,2.848h0Zm-5.839,0a2.382,2.382,0,0,1-1.8-.833,2.633,2.633,0,0,1-.628-1.957l1.036-11.973a.617.617,0,0,1,.607-.581h1.825v-1.278a3.753,3.753,0,0,1,3.651-3.837,3.588,3.588,0,0,1,2.584,1.122,3.914,3.914,0,0,1,1.066,2.715v1.278h1.827a.616.616,0,0,1,.605.581l.631,7.273a5.007,5.007,0,0,0-1.342-.183,5.006,5.006,0,0,0-5,5,5,5,0,0,0,.774,2.675Zm2.26-16.623v1.278h4.87v-1.278a2.609,2.609,0,0,0-.711-1.811,2.39,2.39,0,0,0-1.724-.747A2.5,2.5,0,0,0-6392.305-2295.164Z" transform="translate(6397 2299.001)"/>\n					</svg>\n					add to bag\n				`;
        } else if (window.location.pathname == "/allwatches.html") ATBbtn.closest(".card").classList.remove("card--added");
    }
    getSingleATBbtn(itemID) {
        return arrAddToBagBtns.find((btn)=>btn.dataset.id == itemID
        );
    }
    SETUP_BAG() {
        this.arrBag = _storageDefault.default.getBag();
        this.setBagValues(this.arrBag);
        this.populateBag(this.arrBag);
    }
}
exports.default = Bag;

},{"./Storage":"7DdqB","./UI":"dr0MR","./Filter":"4Rqu6","./AlertNotification":"X258i","@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"5PshA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const $scrollTop = document.querySelector(".scrolltop");
const $scrollDown = document.querySelector(".scrolldown");
const $filtermobile = document.querySelector(".filtermobile");
//? ANIM
const $from_bottom = document.querySelectorAll(".anim-from-bottom");
const $from_bottom_cards = document.querySelectorAll(".anim-card-from-bottom");
const $feature_figure = document.querySelectorAll(".feature__figure");
const $feature_infos = document.querySelectorAll(".feature__infos");
const $sliders = [
    ...$feature_figure,
    ...$feature_infos
];
const $anim_text = document.querySelectorAll(".anim-text");
class Observer {
    scroll_observer(_selectorScrolltopShow, _selectorScrolltopHide, _selectorScrolldownHide) {
        const observer = new IntersectionObserver((entries, observer1)=>{
            entries.forEach((entry)=>{
                // console.log(entry.target.className);
                if (entry.isIntersecting && entry.target.className == _selectorScrolltopShow) {
                    this.showScrollTop();
                    this.showScrollDown();
                } else if (entry.isIntersecting && entry.target.className == _selectorScrolltopHide) this.hideScrollTop();
                if (entry.isIntersecting && entry.target.className == _selectorScrolldownHide) {
                    this.hideScrollDown();
                    if (window.location.pathname == "/allwatches.html") this.hideFiltermobile();
                } else if (window.location.pathname == "/allwatches.html") {
                    this.showFiltermobile();
                    this.showScrollDown();
                }
            });
        });
        let showScrolltopTriggerEl = document.querySelectorAll(`.${_selectorScrolltopShow}`);
        let hideScrolltopTriggerEl = document.querySelectorAll(`.${_selectorScrolltopHide}`);
        let hideScrolldownTriggerEl = document.querySelectorAll(`.${_selectorScrolldownHide}`);
        let arrObservingElements = [
            ...showScrolltopTriggerEl,
            ...hideScrolltopTriggerEl,
            ...hideScrolldownTriggerEl, 
        ];
        // console.log(arrObservingElements);
        arrObservingElements.forEach((el)=>{
            observer.observe(el);
        });
    }
    showScrollTop() {
        $scrollTop.classList.add("scrolltop--show");
    }
    hideScrollTop() {
        if ($scrollTop.classList.contains("scrolltop--show")) $scrollTop.classList.remove("scrolltop--show");
    }
    hideScrollDown() {
        $scrollDown.classList.add("scrolldown--hidden");
    }
    showScrollDown() {
        if ($scrollDown.classList.contains("scrolldown--hidden")) $scrollDown.classList.remove("scrolldown--hidden");
    }
    hideFiltermobile() {
        $filtermobile.classList.add("filtermobile--hidden");
        $filtermobile.style.animation = "none";
    }
    showFiltermobile() {
        if ($filtermobile.classList.contains("filtermobile--hidden")) $filtermobile.classList.remove("filtermobile--hidden");
    }
    animation_observer() {
        const appearOptions = {
            // threshold: 1, //! zelim da se uverim da je cela recimo slika u view-u pre nego sto se pojavi uopste tj fadeinuje
            threshold: 0.5,
            rootMargin: "0px 0px 0px 0px"
        };
        const appearOnScroll = new IntersectionObserver((entries, appearOnScroll1)=>{
            entries.forEach((entry)=>{
                if (!entry.isIntersecting) return;
                else {
                    entry.target.classList.add("appear");
                    appearOnScroll1.unobserve(entry.target) //! stop looking on something when you've done ur job
                    ;
                }
            });
        }, appearOptions);
        $from_bottom.forEach((bottom)=>{
            appearOnScroll.observe(bottom);
        });
        $from_bottom_cards.forEach((card)=>{
            appearOnScroll.observe(card);
        });
        $sliders.forEach((slider)=>{
            appearOnScroll.observe(slider);
        });
        $anim_text.forEach((text)=>{
            appearOnScroll.observe(text);
        });
    }
    addObserveToEls(_arrEls, _nameOfObserver) {
        _arrEls.forEach((el)=>{
            _nameOfObserver.observe(el);
        });
    }
    browserDontSupportObserver() {
        $from_bottom.forEach((bottom)=>{
            bottom.style.cssText = `\n				opacity: 1;\n				transform: translate3d(0,0,0);\n			`;
        });
        $from_bottom_cards.forEach((card)=>{
            card.style.cssText = `\n				opacity: 1;\n				transform: inherit;\n			`;
        });
        $sliders.forEach((slider)=>{
            slider.style.cssText = `\n				opacity: 1;\n				transform: translate3d(0,0,0);\n			`;
        });
        $anim_text.forEach((text)=>{
            text.style.cssText = `\n				opacity: 1;\n				letter-spacing: inherit;\n			`;
        });
    }
    SETUP_OBSERVER(_selector) {
        this.scroll_observer(_selector);
    }
}
exports.default = Observer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}]},["fGHvF","4bci2"], "4bci2", "parcelRequire3cc6")

