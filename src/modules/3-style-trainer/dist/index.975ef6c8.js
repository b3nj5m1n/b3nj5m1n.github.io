// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3vMS6":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = true;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
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
            it = it.call(o);
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
            if (typeof document !== 'undefined') removeErrorOverlay();
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
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
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
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
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
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
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

},{}],"8lqZg":[function(require,module,exports) {
var _mainElm = require("./Main.elm");
var _alg = require("cubing/alg");
var _puzzles = require("cubing/puzzles");
var _search = require("cubing/search");
var _twisty = require("cubing/twisty");
const data = require("../3-Style/3STYLE.json");
var app = _mainElm.Elm.Main.init({
    node: document.getElementById("root"),
    flags: {
        "data": data,
        "settings": JSON.parse(localStorage.getItem('settings'))
    }
});
function createTwistyPlayer() {
    var player = document.getElementById('twisty-player');
    if (typeof player != 'undefined' && player != null) return;
    player = new _twisty.TwistyPlayer({
        puzzle: "3x3x3",
        hintFacelets: "none",
        backView: "none",
        background: "none",
        controlPanel: "none",
        foundationDisplay: "opaque"
    });
    player.id = "twisty-player";
    player.classList.add("h-full");
    player.classList.add("w-full");
    document.getElementById("twisty-player-container").appendChild(player);
}
document.addEventListener('DOMContentLoaded', (event)=>{
    createTwistyPlayer();
});
app.ports.newCommMessage.subscribe(async function(message) {
    try {
        var alg = new _alg.Alg(message);
        await _puzzles.puzzles["3x3x3"].kpuzzle().then(async (kpuzzle)=>{
            await _search.experimentalSolve3x3x3IgnoringCenters(kpuzzle.algToTransformation(alg.expand()).toKState()).then(async (solution)=>{
                app.ports.newCommReceiver.send(solution.simplify().toString());
                createTwistyPlayer();
                document.getElementById("twisty-player").alg = alg.invert();
            });
        });
    } catch  {
        console.log("Error parsing '" + message + "' to alg.");
        document.getElementById("twisty-player").alg = "";
        app.ports.newCommReceiver.send(message);
    }
});
app.ports.newSettingsMessage.subscribe(function(message) {
    localStorage.setItem('settings', JSON.stringify(message));
});

},{"./Main.elm":"4XkAe","cubing/alg":"1Xyl7","cubing/puzzles":"fhe6d","cubing/search":"gxQg6","cubing/twisty":"c5IZo","../3-Style/3STYLE.json":"2uAkP"}],"4XkAe":[function(require,module,exports) {
(function(scope) {
    function F(arity, fun, wrapper) {
        wrapper.a = arity;
        wrapper.f = fun;
        return wrapper;
    }
    function F2(fun) {
        return F(2, fun, function(a) {
            return function(b) {
                return fun(a, b);
            };
        });
    }
    function F3(fun) {
        return F(3, fun, function(a) {
            return function(b) {
                return function(c) {
                    return fun(a, b, c);
                };
            };
        });
    }
    function F4(fun) {
        return F(4, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return fun(a, b, c, d);
                    };
                };
            };
        });
    }
    function F5(fun) {
        return F(5, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return fun(a, b, c, d, e);
                        };
                    };
                };
            };
        });
    }
    function F6(fun) {
        return F(6, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return function(f) {
                                return fun(a, b, c, d, e, f);
                            };
                        };
                    };
                };
            };
        });
    }
    function F7(fun) {
        return F(7, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return function(f) {
                                return function(g) {
                                    return fun(a, b, c, d, e, f, g);
                                };
                            };
                        };
                    };
                };
            };
        });
    }
    function F8(fun) {
        return F(8, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return function(f) {
                                return function(g) {
                                    return function(h) {
                                        return fun(a, b, c, d, e, f, g, h);
                                    };
                                };
                            };
                        };
                    };
                };
            };
        });
    }
    function F9(fun) {
        return F(9, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return function(f) {
                                return function(g) {
                                    return function(h) {
                                        return function(i) {
                                            return fun(a, b, c, d, e, f, g, h, i);
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        });
    }
    function A2(fun, a, b) {
        return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
    }
    function A3(fun, a, b, c) {
        return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
    }
    function A4(fun, a, b, c, d) {
        return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
    }
    function A5(fun, a, b, c, d, e) {
        return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
    }
    function A6(fun, a, b, c, d, e, f) {
        return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
    }
    function A7(fun, a, b, c, d, e, f, g) {
        return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
    }
    function A8(fun, a, b, c, d, e, f, g, h) {
        return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
    }
    function A9(fun, a, b, c, d, e, f, g, h, i) {
        return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
    }
    console.warn('Compiled in DEBUG mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');
    // EQUALITY
    function _Utils_eq(x, y) {
        for(var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack));
        return isEqual;
    }
    function _Utils_eqHelp(x, y, depth, stack) {
        if (x === y) return true;
        if (typeof x !== 'object' || x === null || y === null) {
            typeof x === 'function' && _Debug_crash(5);
            return false;
        }
        if (depth > 100) {
            stack.push(_Utils_Tuple2(x, y));
            return true;
        }
        /**/ if (x.$ === 'Set_elm_builtin') {
            x = $elm$core$Set$toList(x);
            y = $elm$core$Set$toList(y);
        }
        if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin') {
            x = $elm$core$Dict$toList(x);
            y = $elm$core$Dict$toList(y);
        }
        //*/
        /**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/ for(var key in x){
            if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) return false;
        }
        return true;
    }
    var _Utils_equal = F2(_Utils_eq);
    var _Utils_notEqual = F2(function(a, b) {
        return !_Utils_eq(a, b);
    });
    // COMPARISONS
    // Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
    // the particular integer values assigned to LT, EQ, and GT.
    function _Utils_cmp(x, y, ord) {
        if (typeof x !== 'object') return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
        /**/ if (x instanceof String) {
            var a = x.valueOf();
            var b = y.valueOf();
            return a === b ? 0 : a < b ? -1 : 1;
        }
        //*/
        /**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/ /**/ if (x.$[0] === '#') return (ord = _Utils_cmp(x.a, y.a)) ? ord : (ord = _Utils_cmp(x.b, y.b)) ? ord : _Utils_cmp(x.c, y.c);
        // traverse conses until end of a list or a mismatch
        for(; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b); // WHILE_CONSES
        return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
    }
    var _Utils_lt = F2(function(a, b) {
        return _Utils_cmp(a, b) < 0;
    });
    var _Utils_le = F2(function(a, b) {
        return _Utils_cmp(a, b) < 1;
    });
    var _Utils_gt = F2(function(a, b) {
        return _Utils_cmp(a, b) > 0;
    });
    var _Utils_ge = F2(function(a, b) {
        return _Utils_cmp(a, b) >= 0;
    });
    var _Utils_compare = F2(function(x, y) {
        var n = _Utils_cmp(x, y);
        return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
    });
    // COMMON VALUES
    var _Utils_Tuple0_UNUSED = 0;
    var _Utils_Tuple0 = {
        $: '#0'
    };
    function _Utils_Tuple2_UNUSED(a, b) {
        return {
            a: a,
            b: b
        };
    }
    function _Utils_Tuple2(a, b) {
        return {
            $: '#2',
            a: a,
            b: b
        };
    }
    function _Utils_Tuple3_UNUSED(a, b, c) {
        return {
            a: a,
            b: b,
            c: c
        };
    }
    function _Utils_Tuple3(a, b, c) {
        return {
            $: '#3',
            a: a,
            b: b,
            c: c
        };
    }
    function _Utils_chr_UNUSED(c) {
        return c;
    }
    function _Utils_chr(c) {
        return new String(c);
    }
    // RECORDS
    function _Utils_update(oldRecord, updatedFields) {
        var newRecord = {
        };
        for(var key in oldRecord)newRecord[key] = oldRecord[key];
        for(var key in updatedFields)newRecord[key] = updatedFields[key];
        return newRecord;
    }
    // APPEND
    var _Utils_append = F2(_Utils_ap);
    function _Utils_ap(xs, ys) {
        // append Strings
        if (typeof xs === 'string') return xs + ys;
        // append Lists
        if (!xs.b) return ys;
        var root = _List_Cons(xs.a, ys);
        xs = xs.b;
        for(var curr = root; xs.b; xs = xs.b)curr = curr.b = _List_Cons(xs.a, ys);
        return root;
    }
    var _List_Nil_UNUSED = {
        $: 0
    };
    var _List_Nil = {
        $: '[]'
    };
    function _List_Cons_UNUSED(hd, tl) {
        return {
            $: 1,
            a: hd,
            b: tl
        };
    }
    function _List_Cons(hd, tl) {
        return {
            $: '::',
            a: hd,
            b: tl
        };
    }
    var _List_cons = F2(_List_Cons);
    function _List_fromArray(arr) {
        var out = _List_Nil;
        for(var i = arr.length; i--;)out = _List_Cons(arr[i], out);
        return out;
    }
    function _List_toArray(xs) {
        for(var out = []; xs.b; xs = xs.b)out.push(xs.a);
        return out;
    }
    var _List_map2 = F3(function(f, xs, ys) {
        for(var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b)arr.push(A2(f, xs.a, ys.a));
        return _List_fromArray(arr);
    });
    var _List_map3 = F4(function(f, xs, ys, zs) {
        for(var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b)arr.push(A3(f, xs.a, ys.a, zs.a));
        return _List_fromArray(arr);
    });
    var _List_map4 = F5(function(f, ws, xs, ys, zs) {
        for(var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b)arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
        return _List_fromArray(arr);
    });
    var _List_map5 = F6(function(f, vs, ws, xs, ys, zs) {
        for(var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b)arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
        return _List_fromArray(arr);
    });
    var _List_sortBy = F2(function(f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
            return _Utils_cmp(f(a), f(b));
        }));
    });
    var _List_sortWith = F2(function(f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
            var ord = A2(f, a, b);
            return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
        }));
    });
    var _JsArray_empty = [];
    function _JsArray_singleton(value) {
        return [
            value
        ];
    }
    function _JsArray_length(array) {
        return array.length;
    }
    var _JsArray_initialize = F3(function(size, offset, func) {
        var result = new Array(size);
        for(var i = 0; i < size; i++)result[i] = func(offset + i);
        return result;
    });
    var _JsArray_initializeFromList = F2(function(max, ls) {
        var result = new Array(max);
        for(var i = 0; i < max && ls.b; i++){
            result[i] = ls.a;
            ls = ls.b;
        }
        result.length = i;
        return _Utils_Tuple2(result, ls);
    });
    var _JsArray_unsafeGet = F2(function(index, array) {
        return array[index];
    });
    var _JsArray_unsafeSet = F3(function(index, value, array) {
        var length = array.length;
        var result = new Array(length);
        for(var i = 0; i < length; i++)result[i] = array[i];
        result[index] = value;
        return result;
    });
    var _JsArray_push = F2(function(value, array) {
        var length = array.length;
        var result = new Array(length + 1);
        for(var i = 0; i < length; i++)result[i] = array[i];
        result[length] = value;
        return result;
    });
    var _JsArray_foldl = F3(function(func, acc, array) {
        var length = array.length;
        for(var i = 0; i < length; i++)acc = A2(func, array[i], acc);
        return acc;
    });
    var _JsArray_foldr = F3(function(func, acc, array) {
        for(var i = array.length - 1; i >= 0; i--)acc = A2(func, array[i], acc);
        return acc;
    });
    var _JsArray_map = F2(function(func, array) {
        var length = array.length;
        var result = new Array(length);
        for(var i = 0; i < length; i++)result[i] = func(array[i]);
        return result;
    });
    var _JsArray_indexedMap = F3(function(func, offset, array) {
        var length = array.length;
        var result = new Array(length);
        for(var i = 0; i < length; i++)result[i] = A2(func, offset + i, array[i]);
        return result;
    });
    var _JsArray_slice = F3(function(from, to, array) {
        return array.slice(from, to);
    });
    var _JsArray_appendN = F3(function(n, dest, source) {
        var destLen = dest.length;
        var itemsToCopy = n - destLen;
        if (itemsToCopy > source.length) itemsToCopy = source.length;
        var size = destLen + itemsToCopy;
        var result = new Array(size);
        for(var i = 0; i < destLen; i++)result[i] = dest[i];
        for(var i = 0; i < itemsToCopy; i++)result[i + destLen] = source[i];
        return result;
    });
    // LOG
    var _Debug_log_UNUSED = F2(function(tag, value) {
        return value;
    });
    var _Debug_log = F2(function(tag, value) {
        console.log(tag + ': ' + _Debug_toString(value));
        return value;
    });
    // TODOS
    function _Debug_todo(moduleName, region) {
        return function(message) {
            _Debug_crash(8, moduleName, region, message);
        };
    }
    function _Debug_todoCase(moduleName, region, value) {
        return function(message) {
            _Debug_crash(9, moduleName, region, value, message);
        };
    }
    // TO STRING
    function _Debug_toString_UNUSED(value) {
        return '<internals>';
    }
    function _Debug_toString(value) {
        return _Debug_toAnsiString(false, value);
    }
    function _Debug_toAnsiString(ansi, value) {
        if (typeof value === 'function') return _Debug_internalColor(ansi, '<function>');
        if (typeof value === 'boolean') return _Debug_ctorColor(ansi, value ? 'True' : 'False');
        if (typeof value === 'number') return _Debug_numberColor(ansi, value + '');
        if (value instanceof String) return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
        if (typeof value === 'string') return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
        if (typeof value === 'object' && '$' in value) {
            var tag = value.$;
            if (typeof tag === 'number') return _Debug_internalColor(ansi, '<internals>');
            if (tag[0] === '#') {
                var output = [];
                for(var k in value){
                    if (k === '$') continue;
                    output.push(_Debug_toAnsiString(ansi, value[k]));
                }
                return '(' + output.join(',') + ')';
            }
            if (tag === 'Set_elm_builtin') return _Debug_ctorColor(ansi, 'Set') + _Debug_fadeColor(ansi, '.fromList') + ' ' + _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
            if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin') return _Debug_ctorColor(ansi, 'Dict') + _Debug_fadeColor(ansi, '.fromList') + ' ' + _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
            if (tag === 'Array_elm_builtin') return _Debug_ctorColor(ansi, 'Array') + _Debug_fadeColor(ansi, '.fromList') + ' ' + _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
            if (tag === '::' || tag === '[]') {
                var output = '[';
                value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b);
                for(; value.b; value = value.b)output += ',' + _Debug_toAnsiString(ansi, value.a);
                return output + ']';
            }
            var output = '';
            for(var i in value){
                if (i === '$') continue;
                var str = _Debug_toAnsiString(ansi, value[i]);
                var c0 = str[0];
                var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
                output += ' ' + (parenless ? str : '(' + str + ')');
            }
            return _Debug_ctorColor(ansi, tag) + output;
        }
        if (typeof DataView === 'function' && value instanceof DataView) return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
        if (typeof File !== 'undefined' && value instanceof File) return _Debug_internalColor(ansi, '<' + value.name + '>');
        if (typeof value === 'object') {
            var output = [];
            for(var key in value){
                var field = key[0] === '_' ? key.slice(1) : key;
                output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
            }
            if (output.length === 0) return '{}';
            return '{ ' + output.join(', ') + ' }';
        }
        return _Debug_internalColor(ansi, '<internals>');
    }
    function _Debug_addSlashes(str, isChar) {
        var s = str.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\r/g, '\\r').replace(/\v/g, '\\v').replace(/\0/g, '\\0');
        if (isChar) return s.replace(/\'/g, '\\\'');
        else return s.replace(/\"/g, '\\"');
    }
    function _Debug_ctorColor(ansi, string) {
        return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
    }
    function _Debug_numberColor(ansi, string) {
        return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
    }
    function _Debug_stringColor(ansi, string) {
        return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
    }
    function _Debug_charColor(ansi, string) {
        return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
    }
    function _Debug_fadeColor(ansi, string) {
        return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
    }
    function _Debug_internalColor(ansi, string) {
        return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
    }
    function _Debug_toHexDigit(n) {
        return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
    }
    // CRASH
    function _Debug_crash_UNUSED(identifier) {
        throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
    }
    function _Debug_crash(identifier, fact1, fact2, fact3, fact4) {
        switch(identifier){
            case 0:
                throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');
            case 1:
                throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');
            case 2:
                var jsonErrorString = fact1;
                throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);
            case 3:
                var portName = fact1;
                throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');
            case 4:
                var portName = fact1;
                var problem = fact2;
                throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);
            case 5:
                throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');
            case 6:
                var moduleName = fact1;
                throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');
            case 8:
                var moduleName = fact1;
                var region = fact2;
                var message = fact3;
                throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);
            case 9:
                var moduleName = fact1;
                var region = fact2;
                var value = fact3;
                var message = fact4;
                throw new Error('TODO in module `' + moduleName + '` from the `case` expression ' + _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    ' + _Debug_toString(value).replace('\n', '\n    ') + '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    '));
            case 10:
                throw new Error('Bug in https://github.com/elm/virtual-dom/issues');
            case 11:
                throw new Error('Cannot perform mod 0. Division by zero error.');
        }
    }
    function _Debug_regionToString(region) {
        if (region.start.line === region.end.line) return 'on line ' + region.start.line;
        return 'on lines ' + region.start.line + ' through ' + region.end.line;
    }
    // MATH
    var _Basics_add = F2(function(a, b) {
        return a + b;
    });
    var _Basics_sub = F2(function(a, b) {
        return a - b;
    });
    var _Basics_mul = F2(function(a, b) {
        return a * b;
    });
    var _Basics_fdiv = F2(function(a, b) {
        return a / b;
    });
    var _Basics_idiv = F2(function(a, b) {
        return a / b | 0;
    });
    var _Basics_pow = F2(Math.pow);
    var _Basics_remainderBy = F2(function(b, a) {
        return a % b;
    });
    // https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
    var _Basics_modBy = F2(function(modulus, x) {
        var answer = x % modulus;
        return modulus === 0 ? _Debug_crash(11) : answer > 0 && modulus < 0 || answer < 0 && modulus > 0 ? answer + modulus : answer;
    });
    // TRIGONOMETRY
    var _Basics_pi = Math.PI;
    var _Basics_e = Math.E;
    var _Basics_cos = Math.cos;
    var _Basics_sin = Math.sin;
    var _Basics_tan = Math.tan;
    var _Basics_acos = Math.acos;
    var _Basics_asin = Math.asin;
    var _Basics_atan = Math.atan;
    var _Basics_atan2 = F2(Math.atan2);
    // MORE MATH
    function _Basics_toFloat(x) {
        return x;
    }
    function _Basics_truncate(n) {
        return n | 0;
    }
    function _Basics_isInfinite(n) {
        return n === Infinity || n === -Infinity;
    }
    var _Basics_ceiling = Math.ceil;
    var _Basics_floor = Math.floor;
    var _Basics_round = Math.round;
    var _Basics_sqrt = Math.sqrt;
    var _Basics_log = Math.log;
    var _Basics_isNaN = isNaN;
    // BOOLEANS
    function _Basics_not(bool) {
        return !bool;
    }
    var _Basics_and = F2(function(a, b) {
        return a && b;
    });
    var _Basics_or = F2(function(a, b) {
        return a || b;
    });
    var _Basics_xor = F2(function(a, b) {
        return a !== b;
    });
    var _String_cons = F2(function(chr, str) {
        return chr + str;
    });
    function _String_uncons(string) {
        var word = string.charCodeAt(0);
        return !isNaN(word) ? $elm$core$Maybe$Just(55296 <= word && word <= 56319 ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2)) : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))) : $elm$core$Maybe$Nothing;
    }
    var _String_append = F2(function(a, b) {
        return a + b;
    });
    function _String_length(str) {
        return str.length;
    }
    var _String_map = F2(function(func, string) {
        var len = string.length;
        var array = new Array(len);
        var i = 0;
        while(i < len){
            var word = string.charCodeAt(i);
            if (55296 <= word && word <= 56319) {
                array[i] = func(_Utils_chr(string[i] + string[i + 1]));
                i += 2;
                continue;
            }
            array[i] = func(_Utils_chr(string[i]));
            i++;
        }
        return array.join('');
    });
    var _String_filter = F2(function(isGood, str) {
        var arr = [];
        var len = str.length;
        var i = 0;
        while(i < len){
            var char = str[i];
            var word = str.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += str[i];
                i++;
            }
            if (isGood(_Utils_chr(char))) arr.push(char);
        }
        return arr.join('');
    });
    function _String_reverse(str) {
        var len = str.length;
        var arr = new Array(len);
        var i = 0;
        while(i < len){
            var word = str.charCodeAt(i);
            if (55296 <= word && word <= 56319) {
                arr[len - i] = str[i + 1];
                i++;
                arr[len - i] = str[i - 1];
                i++;
            } else {
                arr[len - i] = str[i];
                i++;
            }
        }
        return arr.join('');
    }
    var _String_foldl = F3(function(func, state, string) {
        var len = string.length;
        var i = 0;
        while(i < len){
            var char = string[i];
            var word = string.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += string[i];
                i++;
            }
            state = A2(func, _Utils_chr(char), state);
        }
        return state;
    });
    var _String_foldr = F3(function(func, state, string) {
        var i = string.length;
        while(i--){
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            state = A2(func, _Utils_chr(char), state);
        }
        return state;
    });
    var _String_split = F2(function(sep, str) {
        return str.split(sep);
    });
    var _String_join = F2(function(sep, strs) {
        return strs.join(sep);
    });
    var _String_slice = F3(function(start, end, str) {
        return str.slice(start, end);
    });
    function _String_trim(str) {
        return str.trim();
    }
    function _String_trimLeft(str) {
        return str.replace(/^\s+/, '');
    }
    function _String_trimRight(str) {
        return str.replace(/\s+$/, '');
    }
    function _String_words(str) {
        return _List_fromArray(str.trim().split(/\s+/g));
    }
    function _String_lines(str) {
        return _List_fromArray(str.split(/\r\n|\r|\n/g));
    }
    function _String_toUpper(str) {
        return str.toUpperCase();
    }
    function _String_toLower(str) {
        return str.toLowerCase();
    }
    var _String_any = F2(function(isGood, string) {
        var i = string.length;
        while(i--){
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            if (isGood(_Utils_chr(char))) return true;
        }
        return false;
    });
    var _String_all = F2(function(isGood, string) {
        var i = string.length;
        while(i--){
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            if (!isGood(_Utils_chr(char))) return false;
        }
        return true;
    });
    var _String_contains = F2(function(sub, str) {
        return str.indexOf(sub) > -1;
    });
    var _String_startsWith = F2(function(sub, str) {
        return str.indexOf(sub) === 0;
    });
    var _String_endsWith = F2(function(sub, str) {
        return str.length >= sub.length && str.lastIndexOf(sub) === str.length - sub.length;
    });
    var _String_indexes = F2(function(sub, str) {
        var subLen = sub.length;
        if (subLen < 1) return _List_Nil;
        var i = 0;
        var is = [];
        while((i = str.indexOf(sub, i)) > -1){
            is.push(i);
            i = i + subLen;
        }
        return _List_fromArray(is);
    });
    // TO STRING
    function _String_fromNumber(number) {
        return number + '';
    }
    // INT CONVERSIONS
    function _String_toInt(str) {
        var total = 0;
        var code0 = str.charCodeAt(0);
        var start = code0 == 43 /* + */  || code0 == 45 /* - */  ? 1 : 0;
        for(var i = start; i < str.length; ++i){
            var code = str.charCodeAt(i);
            if (code < 48 || 57 < code) return $elm$core$Maybe$Nothing;
            total = 10 * total + code - 48;
        }
        return i == start ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(code0 == 45 ? -total : total);
    }
    // FLOAT CONVERSIONS
    function _String_toFloat(s) {
        // check if it is a hex, octal, or binary number
        if (s.length === 0 || /[\sxbo]/.test(s)) return $elm$core$Maybe$Nothing;
        var n = +s;
        // faster isNaN check
        return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
    }
    function _String_fromList(chars) {
        return _List_toArray(chars).join('');
    }
    function _Char_toCode(char) {
        var code = char.charCodeAt(0);
        if (55296 <= code && code <= 56319) return (code - 55296) * 1024 + char.charCodeAt(1) - 56320 + 65536;
        return code;
    }
    function _Char_fromCode(code) {
        return _Utils_chr(code < 0 || 1114111 < code ? '\uFFFD' : code <= 65535 ? String.fromCharCode(code) : (code -= 65536, String.fromCharCode(Math.floor(code / 1024) + 55296, code % 1024 + 56320)));
    }
    function _Char_toUpper(char) {
        return _Utils_chr(char.toUpperCase());
    }
    function _Char_toLower(char) {
        return _Utils_chr(char.toLowerCase());
    }
    function _Char_toLocaleUpper(char) {
        return _Utils_chr(char.toLocaleUpperCase());
    }
    function _Char_toLocaleLower(char) {
        return _Utils_chr(char.toLocaleLowerCase());
    }
    /**/ function _Json_errorToString(error) {
        return $elm$json$Json$Decode$errorToString(error);
    }
    //*/
    // CORE DECODERS
    function _Json_succeed(msg) {
        return {
            $: 0,
            a: msg
        };
    }
    function _Json_fail(msg) {
        return {
            $: 1,
            a: msg
        };
    }
    function _Json_decodePrim(decoder) {
        return {
            $: 2,
            b: decoder
        };
    }
    var _Json_decodeInt = _Json_decodePrim(function(value) {
        return typeof value !== 'number' ? _Json_expecting('an INT', value) : -2147483647 < value && value < 2147483647 && (value | 0) === value ? $elm$core$Result$Ok(value) : isFinite(value) && !(value % 1) ? $elm$core$Result$Ok(value) : _Json_expecting('an INT', value);
    });
    var _Json_decodeBool = _Json_decodePrim(function(value) {
        return typeof value === 'boolean' ? $elm$core$Result$Ok(value) : _Json_expecting('a BOOL', value);
    });
    var _Json_decodeFloat = _Json_decodePrim(function(value) {
        return typeof value === 'number' ? $elm$core$Result$Ok(value) : _Json_expecting('a FLOAT', value);
    });
    var _Json_decodeValue = _Json_decodePrim(function(value) {
        return $elm$core$Result$Ok(_Json_wrap(value));
    });
    var _Json_decodeString = _Json_decodePrim(function(value) {
        return typeof value === 'string' ? $elm$core$Result$Ok(value) : value instanceof String ? $elm$core$Result$Ok(value + '') : _Json_expecting('a STRING', value);
    });
    function _Json_decodeList(decoder) {
        return {
            $: 3,
            b: decoder
        };
    }
    function _Json_decodeArray(decoder) {
        return {
            $: 4,
            b: decoder
        };
    }
    function _Json_decodeNull(value) {
        return {
            $: 5,
            c: value
        };
    }
    var _Json_decodeField = F2(function(field, decoder) {
        return {
            $: 6,
            d: field,
            b: decoder
        };
    });
    var _Json_decodeIndex = F2(function(index, decoder) {
        return {
            $: 7,
            e: index,
            b: decoder
        };
    });
    function _Json_decodeKeyValuePairs(decoder) {
        return {
            $: 8,
            b: decoder
        };
    }
    function _Json_mapMany(f, decoders) {
        return {
            $: 9,
            f: f,
            g: decoders
        };
    }
    var _Json_andThen = F2(function(callback, decoder) {
        return {
            $: 10,
            b: decoder,
            h: callback
        };
    });
    function _Json_oneOf(decoders) {
        return {
            $: 11,
            g: decoders
        };
    }
    // DECODING OBJECTS
    var _Json_map1 = F2(function(f, d1) {
        return _Json_mapMany(f, [
            d1
        ]);
    });
    var _Json_map2 = F3(function(f, d1, d2) {
        return _Json_mapMany(f, [
            d1,
            d2
        ]);
    });
    var _Json_map3 = F4(function(f, d1, d2, d3) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3
        ]);
    });
    var _Json_map4 = F5(function(f, d1, d2, d3, d4) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3,
            d4
        ]);
    });
    var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3,
            d4,
            d5
        ]);
    });
    var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3,
            d4,
            d5,
            d6
        ]);
    });
    var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3,
            d4,
            d5,
            d6,
            d7
        ]);
    });
    var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3,
            d4,
            d5,
            d6,
            d7,
            d8
        ]);
    });
    // DECODE
    var _Json_runOnString = F2(function(decoder, string) {
        try {
            var value = JSON.parse(string);
            return _Json_runHelp(decoder, value);
        } catch (e) {
            return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
        }
    });
    var _Json_run = F2(function(decoder, value) {
        return _Json_runHelp(decoder, _Json_unwrap(value));
    });
    function _Json_runHelp(decoder, value) {
        switch(decoder.$){
            case 2:
                return decoder.b(value);
            case 5:
                return value === null ? $elm$core$Result$Ok(decoder.c) : _Json_expecting('null', value);
            case 3:
                if (!_Json_isArray(value)) return _Json_expecting('a LIST', value);
                return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);
            case 4:
                if (!_Json_isArray(value)) return _Json_expecting('an ARRAY', value);
                return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);
            case 6:
                var field = decoder.d;
                if (typeof value !== 'object' || value === null || !(field in value)) return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
                var result = _Json_runHelp(decoder.b, value[field]);
                return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));
            case 7:
                var index = decoder.e;
                if (!_Json_isArray(value)) return _Json_expecting('an ARRAY', value);
                if (index >= value.length) return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
                var result = _Json_runHelp(decoder.b, value[index]);
                return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));
            case 8:
                if (typeof value !== 'object' || value === null || _Json_isArray(value)) return _Json_expecting('an OBJECT', value);
                var keyValuePairs = _List_Nil;
                // TODO test perf of Object.keys and switch when support is good enough
                for(var key in value)if (value.hasOwnProperty(key)) {
                    var result = _Json_runHelp(decoder.b, value[key]);
                    if (!$elm$core$Result$isOk(result)) return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
                    keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
                }
                return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));
            case 9:
                var answer = decoder.f;
                var decoders = decoder.g;
                for(var i = 0; i < decoders.length; i++){
                    var result = _Json_runHelp(decoders[i], value);
                    if (!$elm$core$Result$isOk(result)) return result;
                    answer = answer(result.a);
                }
                return $elm$core$Result$Ok(answer);
            case 10:
                var result = _Json_runHelp(decoder.b, value);
                return !$elm$core$Result$isOk(result) ? result : _Json_runHelp(decoder.h(result.a), value);
            case 11:
                var errors = _List_Nil;
                for(var temp = decoder.g; temp.b; temp = temp.b){
                    var result = _Json_runHelp(temp.a, value);
                    if ($elm$core$Result$isOk(result)) return result;
                    errors = _List_Cons(result.a, errors);
                }
                return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));
            case 1:
                return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));
            case 0:
                return $elm$core$Result$Ok(decoder.a);
        }
    }
    function _Json_runArrayDecoder(decoder, value, toElmValue) {
        var len = value.length;
        var array = new Array(len);
        for(var i = 0; i < len; i++){
            var result = _Json_runHelp(decoder, value[i]);
            if (!$elm$core$Result$isOk(result)) return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
            array[i] = result.a;
        }
        return $elm$core$Result$Ok(toElmValue(array));
    }
    function _Json_isArray(value) {
        return Array.isArray(value) || typeof FileList === 'function' && value instanceof FileList;
    }
    function _Json_toElmArray(array) {
        return A2($elm$core$Array$initialize, array.length, function(i) {
            return array[i];
        });
    }
    function _Json_expecting(type, value) {
        return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
    }
    // EQUALITY
    function _Json_equality(x, y) {
        if (x === y) return true;
        if (x.$ !== y.$) return false;
        switch(x.$){
            case 0:
            case 1:
                return x.a === y.a;
            case 2:
                return x.b === y.b;
            case 5:
                return x.c === y.c;
            case 3:
            case 4:
            case 8:
                return _Json_equality(x.b, y.b);
            case 6:
                return x.d === y.d && _Json_equality(x.b, y.b);
            case 7:
                return x.e === y.e && _Json_equality(x.b, y.b);
            case 9:
                return x.f === y.f && _Json_listEquality(x.g, y.g);
            case 10:
                return x.h === y.h && _Json_equality(x.b, y.b);
            case 11:
                return _Json_listEquality(x.g, y.g);
        }
    }
    function _Json_listEquality(aDecoders, bDecoders) {
        var len = aDecoders.length;
        if (len !== bDecoders.length) return false;
        for(var i = 0; i < len; i++){
            if (!_Json_equality(aDecoders[i], bDecoders[i])) return false;
        }
        return true;
    }
    // ENCODE
    var _Json_encode = F2(function(indentLevel, value) {
        return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
    });
    function _Json_wrap(value) {
        return {
            $: 0,
            a: value
        };
    }
    function _Json_unwrap(value) {
        return value.a;
    }
    function _Json_wrap_UNUSED(value) {
        return value;
    }
    function _Json_unwrap_UNUSED(value) {
        return value;
    }
    function _Json_emptyArray() {
        return [];
    }
    function _Json_emptyObject() {
        return {
        };
    }
    var _Json_addField = F3(function(key, value, object) {
        object[key] = _Json_unwrap(value);
        return object;
    });
    function _Json_addEntry(func) {
        return F2(function(entry, array) {
            array.push(_Json_unwrap(func(entry)));
            return array;
        });
    }
    var _Json_encodeNull = _Json_wrap(null);
    // TASKS
    function _Scheduler_succeed(value) {
        return {
            $: 0,
            a: value
        };
    }
    function _Scheduler_fail(error) {
        return {
            $: 1,
            a: error
        };
    }
    function _Scheduler_binding(callback) {
        return {
            $: 2,
            b: callback,
            c: null
        };
    }
    var _Scheduler_andThen = F2(function(callback, task) {
        return {
            $: 3,
            b: callback,
            d: task
        };
    });
    var _Scheduler_onError = F2(function(callback, task) {
        return {
            $: 4,
            b: callback,
            d: task
        };
    });
    function _Scheduler_receive(callback) {
        return {
            $: 5,
            b: callback
        };
    }
    // PROCESSES
    var _Scheduler_guid = 0;
    function _Scheduler_rawSpawn(task) {
        var proc = {
            $: 0,
            e: _Scheduler_guid++,
            f: task,
            g: null,
            h: []
        };
        _Scheduler_enqueue(proc);
        return proc;
    }
    function _Scheduler_spawn(task) {
        return _Scheduler_binding(function(callback) {
            callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
        });
    }
    function _Scheduler_rawSend(proc, msg) {
        proc.h.push(msg);
        _Scheduler_enqueue(proc);
    }
    var _Scheduler_send = F2(function(proc, msg) {
        return _Scheduler_binding(function(callback) {
            _Scheduler_rawSend(proc, msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    });
    function _Scheduler_kill(proc) {
        return _Scheduler_binding(function(callback) {
            var task = proc.f;
            if (task.$ === 2 && task.c) task.c();
            proc.f = null;
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }
    /* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/ var _Scheduler_working = false;
    var _Scheduler_queue = [];
    function _Scheduler_enqueue(proc) {
        _Scheduler_queue.push(proc);
        if (_Scheduler_working) return;
        _Scheduler_working = true;
        while(proc = _Scheduler_queue.shift())_Scheduler_step(proc);
        _Scheduler_working = false;
    }
    function _Scheduler_step(proc) {
        while(proc.f){
            var rootTag = proc.f.$;
            if (rootTag === 0 || rootTag === 1) {
                while(proc.g && proc.g.$ !== rootTag)proc.g = proc.g.i;
                if (!proc.g) return;
                proc.f = proc.g.b(proc.f.a);
                proc.g = proc.g.i;
            } else if (rootTag === 2) {
                proc.f.c = proc.f.b(function(newRoot) {
                    proc.f = newRoot;
                    _Scheduler_enqueue(proc);
                });
                return;
            } else if (rootTag === 5) {
                if (proc.h.length === 0) return;
                proc.f = proc.f.b(proc.h.shift());
            } else {
                proc.g = {
                    $: rootTag === 3 ? 0 : 1,
                    b: proc.f.b,
                    i: proc.g
                };
                proc.f = proc.f.d;
            }
        }
    }
    function _Process_sleep(time) {
        return _Scheduler_binding(function(callback) {
            var id = setTimeout(function() {
                callback(_Scheduler_succeed(_Utils_Tuple0));
            }, time);
            return function() {
                clearTimeout(id);
            };
        });
    }
    // PROGRAMS
    var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.init, impl.update, impl.subscriptions, function() {
            return function() {
            };
        });
    });
    // INITIALIZE A PROGRAM
    function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
        var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
        $elm$core$Result$isOk(result) || _Debug_crash(2 /**/ , _Json_errorToString(result.a));
        var managers = {
        };
        result = init(result.a);
        var model = result.a;
        var stepper = stepperBuilder(sendToApp, model);
        var ports = _Platform_setupEffects(managers, sendToApp);
        function sendToApp(msg, viewMetadata) {
            result = A2(update, msg, model);
            stepper(model = result.a, viewMetadata);
            _Platform_enqueueEffects(managers, result.b, subscriptions(model));
        }
        _Platform_enqueueEffects(managers, result.b, subscriptions(model));
        return ports ? {
            ports: ports
        } : {
        };
    }
    // TRACK PRELOADS
    //
    // This is used by code in elm/browser and elm/http
    // to register any HTTP requests that are triggered by init.
    //
    var _Platform_preload;
    function _Platform_registerPreload(url) {
        _Platform_preload.add(url);
    }
    // EFFECT MANAGERS
    var _Platform_effectManagers = {
    };
    function _Platform_setupEffects(managers, sendToApp) {
        var ports;
        // setup all necessary effect managers
        for(var key in _Platform_effectManagers){
            var manager = _Platform_effectManagers[key];
            if (manager.a) {
                ports = ports || {
                };
                ports[key] = manager.a(key, sendToApp);
            }
            managers[key] = _Platform_instantiateManager(manager, sendToApp);
        }
        return ports;
    }
    function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
        return {
            b: init,
            c: onEffects,
            d: onSelfMsg,
            e: cmdMap,
            f: subMap
        };
    }
    function _Platform_instantiateManager(info, sendToApp) {
        var router = {
            g: sendToApp,
            h: undefined
        };
        var onEffects = info.c;
        var onSelfMsg = info.d;
        var cmdMap = info.e;
        var subMap = info.f;
        function loop(state) {
            return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg) {
                var value = msg.a;
                if (msg.$ === 0) return A3(onSelfMsg, router, value, state);
                return cmdMap && subMap ? A4(onEffects, router, value.i, value.j, state) : A3(onEffects, router, cmdMap ? value.i : value.j, state);
            }));
        }
        return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
    }
    // ROUTING
    var _Platform_sendToApp = F2(function(router, msg) {
        return _Scheduler_binding(function(callback) {
            router.g(msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    });
    var _Platform_sendToSelf = F2(function(router, msg) {
        return A2(_Scheduler_send, router.h, {
            $: 0,
            a: msg
        });
    });
    // BAGS
    function _Platform_leaf(home) {
        return function(value) {
            return {
                $: 1,
                k: home,
                l: value
            };
        };
    }
    function _Platform_batch(list) {
        return {
            $: 2,
            m: list
        };
    }
    var _Platform_map = F2(function(tagger, bag) {
        return {
            $: 3,
            n: tagger,
            o: bag
        };
    });
    // PIPE BAGS INTO EFFECT MANAGERS
    //
    // Effects must be queued!
    //
    // Say your init contains a synchronous command, like Time.now or Time.here
    //
    //   - This will produce a batch of effects (FX_1)
    //   - The synchronous task triggers the subsequent `update` call
    //   - This will produce a batch of effects (FX_2)
    //
    // If we just start dispatching FX_2, subscriptions from FX_2 can be processed
    // before subscriptions from FX_1. No good! Earlier versions of this code had
    // this problem, leading to these reports:
    //
    //   https://github.com/elm/core/issues/980
    //   https://github.com/elm/core/pull/981
    //   https://github.com/elm/compiler/issues/1776
    //
    // The queue is necessary to avoid ordering issues for synchronous commands.
    // Why use true/false here? Why not just check the length of the queue?
    // The goal is to detect "are we currently dispatching effects?" If we
    // are, we need to bail and let the ongoing while loop handle things.
    //
    // Now say the queue has 1 element. When we dequeue the final element,
    // the queue will be empty, but we are still actively dispatching effects.
    // So you could get queue jumping in a really tricky category of cases.
    //
    var _Platform_effectsQueue = [];
    var _Platform_effectsActive = false;
    function _Platform_enqueueEffects(managers, cmdBag, subBag) {
        _Platform_effectsQueue.push({
            p: managers,
            q: cmdBag,
            r: subBag
        });
        if (_Platform_effectsActive) return;
        _Platform_effectsActive = true;
        for(var fx; fx = _Platform_effectsQueue.shift();)_Platform_dispatchEffects(fx.p, fx.q, fx.r);
        _Platform_effectsActive = false;
    }
    function _Platform_dispatchEffects(managers, cmdBag, subBag) {
        var effectsDict = {
        };
        _Platform_gatherEffects(true, cmdBag, effectsDict, null);
        _Platform_gatherEffects(false, subBag, effectsDict, null);
        for(var home in managers)_Scheduler_rawSend(managers[home], {
            $: 'fx',
            a: effectsDict[home] || {
                i: _List_Nil,
                j: _List_Nil
            }
        });
    }
    function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
        switch(bag.$){
            case 1:
                var home = bag.k;
                var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
                effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
                return;
            case 2:
                for(var list = bag.m; list.b; list = list.b)_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
                return;
            case 3:
                _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
                    s: bag.n,
                    t: taggers
                });
                return;
        }
    }
    function _Platform_toEffect(isCmd, home, taggers, value) {
        function applyTaggers(x) {
            for(var temp = taggers; temp; temp = temp.t)x = temp.s(x);
            return x;
        }
        var map = isCmd ? _Platform_effectManagers[home].e : _Platform_effectManagers[home].f;
        return A2(map, applyTaggers, value);
    }
    function _Platform_insert(isCmd, newEffect, effects) {
        effects = effects || {
            i: _List_Nil,
            j: _List_Nil
        };
        isCmd ? effects.i = _List_Cons(newEffect, effects.i) : effects.j = _List_Cons(newEffect, effects.j);
        return effects;
    }
    // PORTS
    function _Platform_checkPortName(name) {
        if (_Platform_effectManagers[name]) _Debug_crash(3, name);
    }
    // OUTGOING PORTS
    function _Platform_outgoingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
            e: _Platform_outgoingPortMap,
            u: converter,
            a: _Platform_setupOutgoingPort
        };
        return _Platform_leaf(name);
    }
    var _Platform_outgoingPortMap = F2(function(tagger, value) {
        return value;
    });
    function _Platform_setupOutgoingPort(name) {
        var subs = [];
        var converter = _Platform_effectManagers[name].u;
        // CREATE MANAGER
        var init = _Process_sleep(0);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function(router, cmdList, state) {
            for(; cmdList.b; cmdList = cmdList.b){
                // grab a separate reference to subs in case unsubscribe is called
                var currentSubs = subs;
                var value = _Json_unwrap(converter(cmdList.a));
                for(var i = 0; i < currentSubs.length; i++)currentSubs[i](value);
            }
            return init;
        });
        // PUBLIC API
        function subscribe(callback) {
            subs.push(callback);
        }
        function unsubscribe(callback) {
            // copy subs into a new array in case unsubscribe is called within a
            // subscribed callback
            subs = subs.slice();
            var index = subs.indexOf(callback);
            if (index >= 0) subs.splice(index, 1);
        }
        return {
            subscribe: subscribe,
            unsubscribe: unsubscribe
        };
    }
    // INCOMING PORTS
    function _Platform_incomingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
            f: _Platform_incomingPortMap,
            u: converter,
            a: _Platform_setupIncomingPort
        };
        return _Platform_leaf(name);
    }
    var _Platform_incomingPortMap = F2(function(tagger, finalTagger) {
        return function(value) {
            return tagger(finalTagger(value));
        };
    });
    function _Platform_setupIncomingPort(name, sendToApp) {
        var subs = _List_Nil;
        var converter = _Platform_effectManagers[name].u;
        // CREATE MANAGER
        var init = _Scheduler_succeed(null);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function(router, subList, state) {
            subs = subList;
            return init;
        });
        // PUBLIC API
        function send(incomingValue) {
            var result = A2(_Json_run, converter, _Json_wrap(incomingValue));
            $elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);
            var value = result.a;
            for(var temp = subs; temp.b; temp = temp.b)sendToApp(temp.a(value));
        }
        return {
            send: send
        };
    }
    // EXPORT ELM MODULES
    //
    // Have DEBUG and PROD versions so that we can (1) give nicer errors in
    // debug mode and (2) not pay for the bits needed for that in prod mode.
    //
    function _Platform_export_UNUSED(exports) {
        scope['Elm'] ? _Platform_mergeExportsProd(scope['Elm'], exports) : scope['Elm'] = exports;
    }
    function _Platform_mergeExportsProd(obj, exports) {
        for(var name in exports)name in obj ? name == 'init' ? _Debug_crash(6) : _Platform_mergeExportsProd(obj[name], exports[name]) : obj[name] = exports[name];
    }
    function _Platform_export(exports) {
        scope['Elm'] ? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports) : scope['Elm'] = exports;
    }
    function _Platform_mergeExportsDebug(moduleName, obj, exports) {
        for(var name in exports)name in obj ? name == 'init' ? _Debug_crash(6, moduleName) : _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name]) : obj[name] = exports[name];
    }
    // HELPERS
    var _VirtualDom_divertHrefToApp;
    var _VirtualDom_doc = typeof document !== 'undefined' ? document : {
    };
    function _VirtualDom_appendChild(parent, child) {
        parent.appendChild(child);
    }
    var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args) {
        // NOTE: this function needs _Platform_export available to work
        /**_UNUSED/
	var node = args['node'];
	//*/ /**/ var node = args && args['node'] ? args['node'] : _Debug_crash(0);
        //*/
        node.parentNode.replaceChild(_VirtualDom_render(virtualNode, function() {
        }), node);
        return {
        };
    });
    // TEXT
    function _VirtualDom_text(string) {
        return {
            $: 0,
            a: string
        };
    }
    // NODE
    var _VirtualDom_nodeNS = F2(function(namespace, tag) {
        return F2(function(factList, kidList) {
            for(var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b){
                var kid = kidList.a;
                descendantsCount += kid.b || 0;
                kids.push(kid);
            }
            descendantsCount += kids.length;
            return {
                $: 1,
                c: tag,
                d: _VirtualDom_organizeFacts(factList),
                e: kids,
                f: namespace,
                b: descendantsCount
            };
        });
    });
    var _VirtualDom_node = _VirtualDom_nodeNS(undefined);
    // KEYED NODE
    var _VirtualDom_keyedNodeNS = F2(function(namespace, tag) {
        return F2(function(factList, kidList) {
            for(var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b){
                var kid = kidList.a;
                descendantsCount += kid.b.b || 0;
                kids.push(kid);
            }
            descendantsCount += kids.length;
            return {
                $: 2,
                c: tag,
                d: _VirtualDom_organizeFacts(factList),
                e: kids,
                f: namespace,
                b: descendantsCount
            };
        });
    });
    var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);
    // CUSTOM
    function _VirtualDom_custom(factList, model, render, diff) {
        return {
            $: 3,
            d: _VirtualDom_organizeFacts(factList),
            g: model,
            h: render,
            i: diff
        };
    }
    // MAP
    var _VirtualDom_map = F2(function(tagger, node) {
        return {
            $: 4,
            j: tagger,
            k: node,
            b: 1 + (node.b || 0)
        };
    });
    // LAZY
    function _VirtualDom_thunk(refs, thunk) {
        return {
            $: 5,
            l: refs,
            m: thunk,
            k: undefined
        };
    }
    var _VirtualDom_lazy = F2(function(func, a) {
        return _VirtualDom_thunk([
            func,
            a
        ], function() {
            return func(a);
        });
    });
    var _VirtualDom_lazy2 = F3(function(func, a, b) {
        return _VirtualDom_thunk([
            func,
            a,
            b
        ], function() {
            return A2(func, a, b);
        });
    });
    var _VirtualDom_lazy3 = F4(function(func, a, b, c) {
        return _VirtualDom_thunk([
            func,
            a,
            b,
            c
        ], function() {
            return A3(func, a, b, c);
        });
    });
    var _VirtualDom_lazy4 = F5(function(func, a, b, c, d) {
        return _VirtualDom_thunk([
            func,
            a,
            b,
            c,
            d
        ], function() {
            return A4(func, a, b, c, d);
        });
    });
    var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e) {
        return _VirtualDom_thunk([
            func,
            a,
            b,
            c,
            d,
            e
        ], function() {
            return A5(func, a, b, c, d, e);
        });
    });
    var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f) {
        return _VirtualDom_thunk([
            func,
            a,
            b,
            c,
            d,
            e,
            f
        ], function() {
            return A6(func, a, b, c, d, e, f);
        });
    });
    var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g) {
        return _VirtualDom_thunk([
            func,
            a,
            b,
            c,
            d,
            e,
            f,
            g
        ], function() {
            return A7(func, a, b, c, d, e, f, g);
        });
    });
    var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h) {
        return _VirtualDom_thunk([
            func,
            a,
            b,
            c,
            d,
            e,
            f,
            g,
            h
        ], function() {
            return A8(func, a, b, c, d, e, f, g, h);
        });
    });
    // FACTS
    var _VirtualDom_on = F2(function(key, handler) {
        return {
            $: 'a0',
            n: key,
            o: handler
        };
    });
    var _VirtualDom_style = F2(function(key, value) {
        return {
            $: 'a1',
            n: key,
            o: value
        };
    });
    var _VirtualDom_property = F2(function(key, value) {
        return {
            $: 'a2',
            n: key,
            o: value
        };
    });
    var _VirtualDom_attribute = F2(function(key, value) {
        return {
            $: 'a3',
            n: key,
            o: value
        };
    });
    var _VirtualDom_attributeNS = F3(function(namespace, key, value) {
        return {
            $: 'a4',
            n: key,
            o: {
                f: namespace,
                o: value
            }
        };
    });
    // XSS ATTACK VECTOR CHECKS
    function _VirtualDom_noScript(tag) {
        return tag == 'script' ? 'p' : tag;
    }
    function _VirtualDom_noOnOrFormAction(key) {
        return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
    }
    function _VirtualDom_noInnerHtmlOrFormAction(key) {
        return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
    }
    function _VirtualDom_noJavaScriptUri_UNUSED(value) {
        return /^javascript:/i.test(value.replace(/\s/g, '')) ? '' : value;
    }
    function _VirtualDom_noJavaScriptUri(value) {
        return /^javascript:/i.test(value.replace(/\s/g, '')) ? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")' : value;
    }
    function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value) {
        return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
    }
    function _VirtualDom_noJavaScriptOrHtmlUri(value) {
        return /^\s*(javascript:|data:text\/html)/i.test(value) ? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")' : value;
    }
    // MAP FACTS
    var _VirtualDom_mapAttribute = F2(function(func, attr) {
        return attr.$ === 'a0' ? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o)) : attr;
    });
    function _VirtualDom_mapHandler(func, handler) {
        var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);
        // 0 = Normal
        // 1 = MayStopPropagation
        // 2 = MayPreventDefault
        // 3 = Custom
        return {
            $: handler.$,
            a: !tag ? A2($elm$json$Json$Decode$map, func, handler.a) : A3($elm$json$Json$Decode$map2, tag < 3 ? _VirtualDom_mapEventTuple : _VirtualDom_mapEventRecord, $elm$json$Json$Decode$succeed(func), handler.a)
        };
    }
    var _VirtualDom_mapEventTuple = F2(function(func, tuple) {
        return _Utils_Tuple2(func(tuple.a), tuple.b);
    });
    var _VirtualDom_mapEventRecord = F2(function(func, record) {
        return {
            message: func(record.message),
            stopPropagation: record.stopPropagation,
            preventDefault: record.preventDefault
        };
    });
    // ORGANIZE FACTS
    function _VirtualDom_organizeFacts(factList) {
        for(var facts = {
        }; factList.b; factList = factList.b){
            var entry = factList.a;
            var tag = entry.$;
            var key = entry.n;
            var value = entry.o;
            if (tag === 'a2') {
                key === 'className' ? _VirtualDom_addClass(facts, key, _Json_unwrap(value)) : facts[key] = _Json_unwrap(value);
                continue;
            }
            var subFacts = facts[tag] || (facts[tag] = {
            });
            tag === 'a3' && key === 'class' ? _VirtualDom_addClass(subFacts, key, value) : subFacts[key] = value;
        }
        return facts;
    }
    function _VirtualDom_addClass(object, key, newClass) {
        var classes = object[key];
        object[key] = classes ? classes + ' ' + newClass : newClass;
    }
    // RENDER
    function _VirtualDom_render(vNode, eventNode) {
        var tag = vNode.$;
        if (tag === 5) return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
        if (tag === 0) return _VirtualDom_doc.createTextNode(vNode.a);
        if (tag === 4) {
            var subNode = vNode.k;
            var tagger = vNode.j;
            while(subNode.$ === 4){
                typeof tagger !== 'object' ? tagger = [
                    tagger,
                    subNode.j
                ] : tagger.push(subNode.j);
                subNode = subNode.k;
            }
            var subEventRoot = {
                j: tagger,
                p: eventNode
            };
            var domNode = _VirtualDom_render(subNode, subEventRoot);
            domNode.elm_event_node_ref = subEventRoot;
            return domNode;
        }
        if (tag === 3) {
            var domNode = vNode.h(vNode.g);
            _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
            return domNode;
        }
        // at this point `tag` must be 1 or 2
        var domNode = vNode.f ? _VirtualDom_doc.createElementNS(vNode.f, vNode.c) : _VirtualDom_doc.createElement(vNode.c);
        if (_VirtualDom_divertHrefToApp && vNode.c == 'a') domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
        _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
        for(var kids = vNode.e, i = 0; i < kids.length; i++)_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
        return domNode;
    }
    // APPLY FACTS
    function _VirtualDom_applyFacts(domNode, eventNode, facts) {
        for(var key in facts){
            var value = facts[key];
            key === 'a1' ? _VirtualDom_applyStyles(domNode, value) : key === 'a0' ? _VirtualDom_applyEvents(domNode, eventNode, value) : key === 'a3' ? _VirtualDom_applyAttrs(domNode, value) : key === 'a4' ? _VirtualDom_applyAttrsNS(domNode, value) : (key !== 'value' && key !== 'checked' || domNode[key] !== value) && (domNode[key] = value);
        }
    }
    // APPLY STYLES
    function _VirtualDom_applyStyles(domNode, styles) {
        var domNodeStyle = domNode.style;
        for(var key in styles)domNodeStyle[key] = styles[key];
    }
    // APPLY ATTRS
    function _VirtualDom_applyAttrs(domNode, attrs) {
        for(var key in attrs){
            var value = attrs[key];
            typeof value !== 'undefined' ? domNode.setAttribute(key, value) : domNode.removeAttribute(key);
        }
    }
    // APPLY NAMESPACED ATTRS
    function _VirtualDom_applyAttrsNS(domNode, nsAttrs) {
        for(var key in nsAttrs){
            var pair = nsAttrs[key];
            var namespace = pair.f;
            var value = pair.o;
            typeof value !== 'undefined' ? domNode.setAttributeNS(namespace, key, value) : domNode.removeAttributeNS(namespace, key);
        }
    }
    // APPLY EVENTS
    function _VirtualDom_applyEvents(domNode, eventNode, events) {
        var allCallbacks = domNode.elmFs || (domNode.elmFs = {
        });
        for(var key in events){
            var newHandler = events[key];
            var oldCallback = allCallbacks[key];
            if (!newHandler) {
                domNode.removeEventListener(key, oldCallback);
                allCallbacks[key] = undefined;
                continue;
            }
            if (oldCallback) {
                var oldHandler = oldCallback.q;
                if (oldHandler.$ === newHandler.$) {
                    oldCallback.q = newHandler;
                    continue;
                }
                domNode.removeEventListener(key, oldCallback);
            }
            oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
            domNode.addEventListener(key, oldCallback, _VirtualDom_passiveSupported && {
                passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2
            });
            allCallbacks[key] = oldCallback;
        }
    }
    // PASSIVE EVENTS
    var _VirtualDom_passiveSupported;
    try {
        window.addEventListener('t', null, Object.defineProperty({
        }, 'passive', {
            get: function() {
                _VirtualDom_passiveSupported = true;
            }
        }));
    } catch (e1) {
    }
    // EVENT HANDLERS
    function _VirtualDom_makeCallback(eventNode, initialHandler) {
        function callback(event) {
            var handler = callback.q;
            var result = _Json_runHelp(handler.a, event);
            if (!$elm$core$Result$isOk(result)) return;
            var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);
            // 0 = Normal
            // 1 = MayStopPropagation
            // 2 = MayPreventDefault
            // 3 = Custom
            var value = result.a;
            var message = !tag ? value : tag < 3 ? value.a : value.message;
            var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
            var currentEventNode = (stopPropagation && event.stopPropagation(), (tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(), eventNode);
            var tagger;
            var i;
            while(tagger = currentEventNode.j){
                if (typeof tagger == 'function') message = tagger(message);
                else for(var i = tagger.length; i--;)message = tagger[i](message);
                currentEventNode = currentEventNode.p;
            }
            currentEventNode(message, stopPropagation); // stopPropagation implies isSync
        }
        callback.q = initialHandler;
        return callback;
    }
    function _VirtualDom_equalEvents(x, y) {
        return x.$ == y.$ && _Json_equality(x.a, y.a);
    }
    // DIFF
    // TODO: Should we do patches like in iOS?
    //
    // type Patch
    //   = At Int Patch
    //   | Batch (List Patch)
    //   | Change ...
    //
    // How could it not be better?
    //
    function _VirtualDom_diff(x, y) {
        var patches = [];
        _VirtualDom_diffHelp(x, y, patches, 0);
        return patches;
    }
    function _VirtualDom_pushPatch(patches, type, index, data) {
        var patch = {
            $: type,
            r: index,
            s: data,
            t: undefined,
            u: undefined
        };
        patches.push(patch);
        return patch;
    }
    function _VirtualDom_diffHelp(x, y, patches, index) {
        if (x === y) return;
        var xType = x.$;
        var yType = y.$;
        // Bail if you run into different types of nodes. Implies that the
        // structure has changed significantly and it's not worth a diff.
        if (xType !== yType) {
            if (xType === 1 && yType === 2) {
                y = _VirtualDom_dekey(y);
                yType = 1;
            } else {
                _VirtualDom_pushPatch(patches, 0, index, y);
                return;
            }
        }
        // Now we know that both nodes are the same $.
        switch(yType){
            case 5:
                var xRefs = x.l;
                var yRefs = y.l;
                var i = xRefs.length;
                var same = i === yRefs.length;
                while(same && i--)same = xRefs[i] === yRefs[i];
                if (same) {
                    y.k = x.k;
                    return;
                }
                y.k = y.m();
                var subPatches = [];
                _VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
                subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
                return;
            case 4:
                // gather nested taggers
                var xTaggers = x.j;
                var yTaggers = y.j;
                var nesting = false;
                var xSubNode = x.k;
                while(xSubNode.$ === 4){
                    nesting = true;
                    typeof xTaggers !== 'object' ? xTaggers = [
                        xTaggers,
                        xSubNode.j
                    ] : xTaggers.push(xSubNode.j);
                    xSubNode = xSubNode.k;
                }
                var ySubNode = y.k;
                while(ySubNode.$ === 4){
                    nesting = true;
                    typeof yTaggers !== 'object' ? yTaggers = [
                        yTaggers,
                        ySubNode.j
                    ] : yTaggers.push(ySubNode.j);
                    ySubNode = ySubNode.k;
                }
                // Just bail if different numbers of taggers. This implies the
                // structure of the virtual DOM has changed.
                if (nesting && xTaggers.length !== yTaggers.length) {
                    _VirtualDom_pushPatch(patches, 0, index, y);
                    return;
                }
                // check if taggers are "the same"
                if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers) _VirtualDom_pushPatch(patches, 2, index, yTaggers);
                // diff everything below the taggers
                _VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
                return;
            case 0:
                if (x.a !== y.a) _VirtualDom_pushPatch(patches, 3, index, y.a);
                return;
            case 1:
                _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
                return;
            case 2:
                _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
                return;
            case 3:
                if (x.h !== y.h) {
                    _VirtualDom_pushPatch(patches, 0, index, y);
                    return;
                }
                var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
                factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
                var patch = y.i(x.g, y.g);
                patch && _VirtualDom_pushPatch(patches, 5, index, patch);
                return;
        }
    }
    // assumes the incoming arrays are the same length
    function _VirtualDom_pairwiseRefEqual(as, bs) {
        for(var i = 0; i < as.length; i++){
            if (as[i] !== bs[i]) return false;
        }
        return true;
    }
    function _VirtualDom_diffNodes(x, y, patches, index, diffKids) {
        // Bail if obvious indicators have changed. Implies more serious
        // structural changes such that it's not worth it to diff.
        if (x.c !== y.c || x.f !== y.f) {
            _VirtualDom_pushPatch(patches, 0, index, y);
            return;
        }
        var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
        factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
        diffKids(x, y, patches, index);
    }
    // DIFF FACTS
    // TODO Instead of creating a new diff object, it's possible to just test if
    // there *is* a diff. During the actual patch, do the diff again and make the
    // modifications directly. This way, there's no new allocations. Worth it?
    function _VirtualDom_diffFacts(x, y, category) {
        var diff;
        // look for changes and removals
        for(var xKey in x){
            if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4') {
                var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {
                }, xKey);
                if (subDiff) {
                    diff = diff || {
                    };
                    diff[xKey] = subDiff;
                }
                continue;
            }
            // remove if not in the new facts
            if (!(xKey in y)) {
                diff = diff || {
                };
                diff[xKey] = !category ? typeof x[xKey] === 'string' ? '' : null : category === 'a1' ? '' : category === 'a0' || category === 'a3' ? undefined : {
                    f: x[xKey].f,
                    o: undefined
                };
                continue;
            }
            var xValue = x[xKey];
            var yValue = y[xKey];
            // reference equal, so don't worry about it
            if (xValue === yValue && xKey !== 'value' && xKey !== 'checked' || category === 'a0' && _VirtualDom_equalEvents(xValue, yValue)) continue;
            diff = diff || {
            };
            diff[xKey] = yValue;
        }
        // add new stuff
        for(var yKey in y)if (!(yKey in x)) {
            diff = diff || {
            };
            diff[yKey] = y[yKey];
        }
        return diff;
    }
    // DIFF KIDS
    function _VirtualDom_diffKids(xParent, yParent, patches, index) {
        var xKids = xParent.e;
        var yKids = yParent.e;
        var xLen = xKids.length;
        var yLen = yKids.length;
        // FIGURE OUT IF THERE ARE INSERTS OR REMOVALS
        if (xLen > yLen) _VirtualDom_pushPatch(patches, 6, index, {
            v: yLen,
            i: xLen - yLen
        });
        else if (xLen < yLen) _VirtualDom_pushPatch(patches, 7, index, {
            v: xLen,
            e: yKids
        });
        // PAIRWISE DIFF EVERYTHING ELSE
        for(var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++){
            var xKid = xKids[i];
            _VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
            index += xKid.b || 0;
        }
    }
    // KEYED DIFF
    function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex) {
        var localPatches = [];
        var changes = {
        }; // Dict String Entry
        var inserts = []; // Array { index : Int, entry : Entry }
        // type Entry = { tag : String, vnode : VNode, index : Int, data : _ }
        var xKids = xParent.e;
        var yKids = yParent.e;
        var xLen = xKids.length;
        var yLen = yKids.length;
        var xIndex = 0;
        var yIndex = 0;
        var index = rootIndex;
        while(xIndex < xLen && yIndex < yLen){
            var x = xKids[xIndex];
            var y = yKids[yIndex];
            var xKey = x.a;
            var yKey = y.a;
            var xNode = x.b;
            var yNode = y.b;
            var newMatch = undefined;
            var oldMatch = undefined;
            // check if keys match
            if (xKey === yKey) {
                index++;
                _VirtualDom_diffHelp(xNode, yNode, localPatches, index);
                index += xNode.b || 0;
                xIndex++;
                yIndex++;
                continue;
            }
            // look ahead 1 to detect insertions and removals.
            var xNext = xKids[xIndex + 1];
            var yNext = yKids[yIndex + 1];
            if (xNext) {
                var xNextKey = xNext.a;
                var xNextNode = xNext.b;
                oldMatch = yKey === xNextKey;
            }
            if (yNext) {
                var yNextKey = yNext.a;
                var yNextNode = yNext.b;
                newMatch = xKey === yNextKey;
            }
            // swap x and y
            if (newMatch && oldMatch) {
                index++;
                _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
                _VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
                index += xNode.b || 0;
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 2;
                continue;
            }
            // insert y
            if (newMatch) {
                index++;
                _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
                _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
                index += xNode.b || 0;
                xIndex += 1;
                yIndex += 2;
                continue;
            }
            // remove x
            if (oldMatch) {
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
                index += xNode.b || 0;
                index++;
                _VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 1;
                continue;
            }
            // remove x, insert y
            if (xNext && xNextKey === yNextKey) {
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
                _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
                index += xNode.b || 0;
                index++;
                _VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 2;
                continue;
            }
            break;
        }
        // eat up any remaining nodes with removeNode and insertNode
        while(xIndex < xLen){
            index++;
            var x = xKids[xIndex];
            var xNode = x.b;
            _VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
            index += xNode.b || 0;
            xIndex++;
        }
        while(yIndex < yLen){
            var endInserts = endInserts || [];
            var y = yKids[yIndex];
            _VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
            yIndex++;
        }
        if (localPatches.length > 0 || inserts.length > 0 || endInserts) _VirtualDom_pushPatch(patches, 8, rootIndex, {
            w: localPatches,
            x: inserts,
            y: endInserts
        });
    }
    // CHANGES FROM KEYED DIFF
    var _VirtualDom_POSTFIX = '_elmW6BL';
    function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts) {
        var entry = changes[key];
        // never seen this key before
        if (!entry) {
            entry = {
                c: 0,
                z: vnode,
                r: yIndex,
                s: undefined
            };
            inserts.push({
                r: yIndex,
                A: entry
            });
            changes[key] = entry;
            return;
        }
        // this key was removed earlier, a match!
        if (entry.c === 1) {
            inserts.push({
                r: yIndex,
                A: entry
            });
            entry.c = 2;
            var subPatches = [];
            _VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
            entry.r = yIndex;
            entry.s.s = {
                w: subPatches,
                A: entry
            };
            return;
        }
        // this key has already been inserted or moved, a duplicate!
        _VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
    }
    function _VirtualDom_removeNode(changes, localPatches, key, vnode, index) {
        var entry = changes[key];
        // never seen this key before
        if (!entry) {
            var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);
            changes[key] = {
                c: 1,
                z: vnode,
                r: index,
                s: patch
            };
            return;
        }
        // this key was inserted earlier, a match!
        if (entry.c === 0) {
            entry.c = 2;
            var subPatches = [];
            _VirtualDom_diffHelp(vnode, entry.z, subPatches, index);
            _VirtualDom_pushPatch(localPatches, 9, index, {
                w: subPatches,
                A: entry
            });
            return;
        }
        // this key has already been removed or moved, a duplicate!
        _VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
    }
    // ADD DOM NODES
    //
    // Each DOM node has an "index" assigned in order of traversal. It is important
    // to minimize our crawl over the actual DOM, so these indexes (along with the
    // descendantsCount of virtual nodes) let us skip touching entire subtrees of
    // the DOM if we know there are no patches there.
    function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode) {
        _VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
    }
    // assumes `patches` is non-empty and indexes increase monotonically.
    function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode) {
        var patch = patches[i];
        var index = patch.r;
        while(index === low){
            var patchType = patch.$;
            if (patchType === 1) _VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
            else if (patchType === 8) {
                patch.t = domNode;
                patch.u = eventNode;
                var subPatches = patch.s.w;
                if (subPatches.length > 0) _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
            } else if (patchType === 9) {
                patch.t = domNode;
                patch.u = eventNode;
                var data = patch.s;
                if (data) {
                    data.A.s = domNode;
                    var subPatches = data.w;
                    if (subPatches.length > 0) _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
                }
            } else {
                patch.t = domNode;
                patch.u = eventNode;
            }
            i++;
            if (!(patch = patches[i]) || (index = patch.r) > high) return i;
        }
        var tag = vNode.$;
        if (tag === 4) {
            var subNode = vNode.k;
            while(subNode.$ === 4)subNode = subNode.k;
            return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
        }
        // tag must be 1 or 2 at this point
        var vKids = vNode.e;
        var childNodes = domNode.childNodes;
        for(var j = 0; j < vKids.length; j++){
            low++;
            var vKid = tag === 1 ? vKids[j] : vKids[j].b;
            var nextLow = low + (vKid.b || 0);
            if (low <= index && index <= nextLow) {
                i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
                if (!(patch = patches[i]) || (index = patch.r) > high) return i;
            }
            low = nextLow;
        }
        return i;
    }
    // APPLY PATCHES
    function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode) {
        if (patches.length === 0) return rootDomNode;
        _VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
        return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
    }
    function _VirtualDom_applyPatchesHelp(rootDomNode, patches) {
        for(var i = 0; i < patches.length; i++){
            var patch = patches[i];
            var localDomNode = patch.t;
            var newNode = _VirtualDom_applyPatch(localDomNode, patch);
            if (localDomNode === rootDomNode) rootDomNode = newNode;
        }
        return rootDomNode;
    }
    function _VirtualDom_applyPatch(domNode, patch) {
        switch(patch.$){
            case 0:
                return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);
            case 4:
                _VirtualDom_applyFacts(domNode, patch.u, patch.s);
                return domNode;
            case 3:
                domNode.replaceData(0, domNode.length, patch.s);
                return domNode;
            case 1:
                return _VirtualDom_applyPatchesHelp(domNode, patch.s);
            case 2:
                if (domNode.elm_event_node_ref) domNode.elm_event_node_ref.j = patch.s;
                else domNode.elm_event_node_ref = {
                    j: patch.s,
                    p: patch.u
                };
                return domNode;
            case 6:
                var data = patch.s;
                for(var i = 0; i < data.i; i++)domNode.removeChild(domNode.childNodes[data.v]);
                return domNode;
            case 7:
                var data = patch.s;
                var kids = data.e;
                var i = data.v;
                var theEnd = domNode.childNodes[i];
                for(; i < kids.length; i++)domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
                return domNode;
            case 9:
                var data = patch.s;
                if (!data) {
                    domNode.parentNode.removeChild(domNode);
                    return domNode;
                }
                var entry = data.A;
                if (typeof entry.r !== 'undefined') domNode.parentNode.removeChild(domNode);
                entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
                return domNode;
            case 8:
                return _VirtualDom_applyPatchReorder(domNode, patch);
            case 5:
                return patch.s(domNode);
            default:
                _Debug_crash(10); // 'Ran into an unknown patch!'
        }
    }
    function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode) {
        var parentNode = domNode.parentNode;
        var newNode = _VirtualDom_render(vNode, eventNode);
        if (!newNode.elm_event_node_ref) newNode.elm_event_node_ref = domNode.elm_event_node_ref;
        if (parentNode && newNode !== domNode) parentNode.replaceChild(newNode, domNode);
        return newNode;
    }
    function _VirtualDom_applyPatchReorder(domNode, patch) {
        var data = patch.s;
        // remove end inserts
        var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);
        // removals
        domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);
        // inserts
        var inserts = data.x;
        for(var i = 0; i < inserts.length; i++){
            var insert = inserts[i];
            var entry = insert.A;
            var node = entry.c === 2 ? entry.s : _VirtualDom_render(entry.z, patch.u);
            domNode.insertBefore(node, domNode.childNodes[insert.r]);
        }
        // add end inserts
        if (frag) _VirtualDom_appendChild(domNode, frag);
        return domNode;
    }
    function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch) {
        if (!endInserts) return;
        var frag = _VirtualDom_doc.createDocumentFragment();
        for(var i = 0; i < endInserts.length; i++){
            var insert = endInserts[i];
            var entry = insert.A;
            _VirtualDom_appendChild(frag, entry.c === 2 ? entry.s : _VirtualDom_render(entry.z, patch.u));
        }
        return frag;
    }
    function _VirtualDom_virtualize(node) {
        // TEXT NODES
        if (node.nodeType === 3) return _VirtualDom_text(node.textContent);
        // WEIRD NODES
        if (node.nodeType !== 1) return _VirtualDom_text('');
        // ELEMENT NODES
        var attrList = _List_Nil;
        var attrs = node.attributes;
        for(var i = attrs.length; i--;){
            var attr = attrs[i];
            var name = attr.name;
            var value = attr.value;
            attrList = _List_Cons(A2(_VirtualDom_attribute, name, value), attrList);
        }
        var tag = node.tagName.toLowerCase();
        var kidList = _List_Nil;
        var kids = node.childNodes;
        for(var i = kids.length; i--;)kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
        return A3(_VirtualDom_node, tag, attrList, kidList);
    }
    function _VirtualDom_dekey(keyedNode) {
        var keyedKids = keyedNode.e;
        var len = keyedKids.length;
        var kids = new Array(len);
        for(var i = 0; i < len; i++)kids[i] = keyedKids[i].b;
        return {
            $: 1,
            c: keyedNode.c,
            d: keyedNode.d,
            e: kids,
            f: keyedNode.f,
            b: keyedNode.b
        };
    }
    var _Bitwise_and = F2(function(a, b) {
        return a & b;
    });
    var _Bitwise_or = F2(function(a, b) {
        return a | b;
    });
    var _Bitwise_xor = F2(function(a, b) {
        return a ^ b;
    });
    function _Bitwise_complement(a) {
        return ~a;
    }
    var _Bitwise_shiftLeftBy = F2(function(offset, a) {
        return a << offset;
    });
    var _Bitwise_shiftRightBy = F2(function(offset, a) {
        return a >> offset;
    });
    var _Bitwise_shiftRightZfBy = F2(function(offset, a) {
        return a >>> offset;
    });
    // HELPERS
    function _Debugger_unsafeCoerce(value) {
        return value;
    }
    // PROGRAMS
    var _Debugger_element = F4(function(impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, A3($elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init), $elm$browser$Debugger$Main$wrapUpdate(impl.update), $elm$browser$Debugger$Main$wrapSubs(impl.subscriptions), function(sendToApp, initialModel) {
            var view = impl.view;
            var title = _VirtualDom_doc.title;
            var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
            var currNode = _VirtualDom_virtualize(domNode);
            var currBlocker = $elm$browser$Debugger$Main$toBlockerType(initialModel);
            var currPopout;
            var cornerNode = _VirtualDom_doc.createElement('div');
            domNode.parentNode.insertBefore(cornerNode, domNode.nextSibling);
            var cornerCurr = _VirtualDom_virtualize(cornerNode);
            initialModel.popout.a = sendToApp;
            return _Browser_makeAnimator(initialModel, function(model) {
                var nextNode = A2(_VirtualDom_map, $elm$browser$Debugger$Main$UserMsg, view($elm$browser$Debugger$Main$getUserModel(model)));
                var patches = _VirtualDom_diff(currNode, nextNode);
                domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
                currNode = nextNode;
                // update blocker
                var nextBlocker = $elm$browser$Debugger$Main$toBlockerType(model);
                _Debugger_updateBlocker(currBlocker, nextBlocker);
                currBlocker = nextBlocker;
                // view corner
                var cornerNext = $elm$browser$Debugger$Main$cornerView(model);
                var cornerPatches = _VirtualDom_diff(cornerCurr, cornerNext);
                cornerNode = _VirtualDom_applyPatches(cornerNode, cornerCurr, cornerPatches, sendToApp);
                cornerCurr = cornerNext;
                if (!model.popout.b) {
                    currPopout = undefined;
                    return;
                }
                // view popout
                _VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
                currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
                var nextPopout = $elm$browser$Debugger$Main$popoutView(model);
                var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
                _VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
                currPopout = nextPopout;
                _VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
            });
        });
    });
    var _Debugger_document = F4(function(impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, A3($elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init), $elm$browser$Debugger$Main$wrapUpdate(impl.update), $elm$browser$Debugger$Main$wrapSubs(impl.subscriptions), function(sendToApp, initialModel) {
            var divertHrefToApp = impl.setup && impl.setup(function(x) {
                return sendToApp($elm$browser$Debugger$Main$UserMsg(x));
            });
            var view = impl.view;
            var title = _VirtualDom_doc.title;
            var bodyNode = _VirtualDom_doc.body;
            var currNode = _VirtualDom_virtualize(bodyNode);
            var currBlocker = $elm$browser$Debugger$Main$toBlockerType(initialModel);
            var currPopout;
            initialModel.popout.a = sendToApp;
            return _Browser_makeAnimator(initialModel, function(model) {
                _VirtualDom_divertHrefToApp = divertHrefToApp;
                var doc = view($elm$browser$Debugger$Main$getUserModel(model));
                var nextNode = _VirtualDom_node('body')(_List_Nil)(_Utils_ap(A2($elm$core$List$map, _VirtualDom_map($elm$browser$Debugger$Main$UserMsg), doc.body), _List_Cons($elm$browser$Debugger$Main$cornerView(model), _List_Nil)));
                var patches = _VirtualDom_diff(currNode, nextNode);
                bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
                currNode = nextNode;
                _VirtualDom_divertHrefToApp = 0;
                title !== doc.title && (_VirtualDom_doc.title = title = doc.title);
                // update blocker
                var nextBlocker = $elm$browser$Debugger$Main$toBlockerType(model);
                _Debugger_updateBlocker(currBlocker, nextBlocker);
                currBlocker = nextBlocker;
                // view popout
                if (!model.popout.b) {
                    currPopout = undefined;
                    return;
                }
                _VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
                currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
                var nextPopout = $elm$browser$Debugger$Main$popoutView(model);
                var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
                _VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
                currPopout = nextPopout;
                _VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
            });
        });
    });
    function _Debugger_popout() {
        return {
            b: undefined,
            a: undefined
        };
    }
    function _Debugger_isOpen(popout) {
        return !!popout.b;
    }
    function _Debugger_open(popout) {
        return _Scheduler_binding(function(callback) {
            _Debugger_openWindow(popout);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }
    function _Debugger_openWindow(popout) {
        var w = $elm$browser$Debugger$Main$initialWindowWidth, h = $elm$browser$Debugger$Main$initialWindowHeight, x = screen.width - w, y = screen.height - h;
        var debuggerWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);
        var doc = debuggerWindow.document;
        doc.title = 'Elm Debugger';
        // handle arrow keys
        doc.addEventListener('keydown', function(event) {
            event.metaKey && event.which === 82 && window.location.reload();
            event.key === 'ArrowUp' && (popout.a($elm$browser$Debugger$Main$Up), event.preventDefault());
            event.key === 'ArrowDown' && (popout.a($elm$browser$Debugger$Main$Down), event.preventDefault());
        });
        // handle window close
        window.addEventListener('unload', close);
        debuggerWindow.addEventListener('unload', function() {
            popout.b = undefined;
            popout.a($elm$browser$Debugger$Main$NoOp);
            window.removeEventListener('unload', close);
        });
        function close() {
            popout.b = undefined;
            popout.a($elm$browser$Debugger$Main$NoOp);
            debuggerWindow.close();
        }
        // register new window
        popout.b = doc;
    }
    // SCROLL
    function _Debugger_scroll(popout) {
        return _Scheduler_binding(function(callback) {
            if (popout.b) {
                var msgs = popout.b.getElementById('elm-debugger-sidebar');
                if (msgs && msgs.scrollTop !== 0) msgs.scrollTop = 0;
            }
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }
    var _Debugger_scrollTo = F2(function(id, popout) {
        return _Scheduler_binding(function(callback) {
            if (popout.b) {
                var msg = popout.b.getElementById(id);
                if (msg) msg.scrollIntoView(false);
            }
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    });
    // UPLOAD
    function _Debugger_upload(popout) {
        return _Scheduler_binding(function(callback) {
            var doc = popout.b || document;
            var element = doc.createElement('input');
            element.setAttribute('type', 'file');
            element.setAttribute('accept', 'text/json');
            element.style.display = 'none';
            element.addEventListener('change', function(event) {
                var fileReader = new FileReader();
                fileReader.onload = function(e) {
                    callback(_Scheduler_succeed(e.target.result));
                };
                fileReader.readAsText(event.target.files[0]);
                doc.body.removeChild(element);
            });
            doc.body.appendChild(element);
            element.click();
        });
    }
    // DOWNLOAD
    var _Debugger_download = F2(function(historyLength, json) {
        return _Scheduler_binding(function(callback) {
            var fileName = 'history-' + historyLength + '.txt';
            var jsonString = JSON.stringify(json);
            var mime = 'text/plain;charset=utf-8';
            var done = _Scheduler_succeed(_Utils_Tuple0);
            // for IE10+
            if (navigator.msSaveBlob) {
                navigator.msSaveBlob(new Blob([
                    jsonString
                ], {
                    type: mime
                }), fileName);
                return callback(done);
            }
            // for HTML5
            var element = document.createElement('a');
            element.setAttribute('href', 'data:' + mime + ',' + encodeURIComponent(jsonString));
            element.setAttribute('download', fileName);
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
            callback(done);
        });
    });
    // POPOUT CONTENT
    function _Debugger_messageToString(value) {
        if (typeof value === 'boolean') return value ? 'True' : 'False';
        if (typeof value === 'number') return value + '';
        if (typeof value === 'string') return '"' + _Debugger_addSlashes(value, false) + '"';
        if (value instanceof String) return "'" + _Debugger_addSlashes(value, true) + "'";
        if (typeof value !== 'object' || value === null || !('$' in value)) return '…';
        if (typeof value.$ === 'number') return '…';
        var code = value.$.charCodeAt(0);
        if (code === 35 /* # */  || /* a */ 97 <= code && code <= 122 /* z */ ) return '…';
        if ([
            'Array_elm_builtin',
            'Set_elm_builtin',
            'RBNode_elm_builtin',
            'RBEmpty_elm_builtin'
        ].indexOf(value.$) >= 0) return '…';
        var keys = Object.keys(value);
        switch(keys.length){
            case 1:
                return value.$;
            case 2:
                return value.$ + ' ' + _Debugger_messageToString(value.a);
            default:
                return value.$ + ' … ' + _Debugger_messageToString(value[keys[keys.length - 1]]);
        }
    }
    function _Debugger_init(value) {
        if (typeof value === 'boolean') return A3($elm$browser$Debugger$Expando$Constructor, $elm$core$Maybe$Just(value ? 'True' : 'False'), true, _List_Nil);
        if (typeof value === 'number') return $elm$browser$Debugger$Expando$Primitive(value + '');
        if (typeof value === 'string') return $elm$browser$Debugger$Expando$S('"' + _Debugger_addSlashes(value, false) + '"');
        if (value instanceof String) return $elm$browser$Debugger$Expando$S("'" + _Debugger_addSlashes(value, true) + "'");
        if (typeof value === 'object' && '$' in value) {
            var tag = value.$;
            if (tag === '::' || tag === '[]') return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$ListSeq, true, A2($elm$core$List$map, _Debugger_init, value));
            if (tag === 'Set_elm_builtin') return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$SetSeq, true, A3($elm$core$Set$foldr, _Debugger_initCons, _List_Nil, value));
            if (tag === 'RBNode_elm_builtin' || tag == 'RBEmpty_elm_builtin') return A2($elm$browser$Debugger$Expando$Dictionary, true, A3($elm$core$Dict$foldr, _Debugger_initKeyValueCons, _List_Nil, value));
            if (tag === 'Array_elm_builtin') return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$ArraySeq, true, A3($elm$core$Array$foldr, _Debugger_initCons, _List_Nil, value));
            if (typeof tag === 'number') return $elm$browser$Debugger$Expando$Primitive('<internals>');
            var char = tag.charCodeAt(0);
            if (char === 35 || 65 <= char && char <= 90) {
                var list = _List_Nil;
                for(var i in value){
                    if (i === '$') continue;
                    list = _List_Cons(_Debugger_init(value[i]), list);
                }
                return A3($elm$browser$Debugger$Expando$Constructor, char === 35 ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(tag), true, $elm$core$List$reverse(list));
            }
            return $elm$browser$Debugger$Expando$Primitive('<internals>');
        }
        if (typeof value === 'object') {
            var dict = $elm$core$Dict$empty;
            for(var i in value)dict = A3($elm$core$Dict$insert, i, _Debugger_init(value[i]), dict);
            return A2($elm$browser$Debugger$Expando$Record, true, dict);
        }
        return $elm$browser$Debugger$Expando$Primitive('<internals>');
    }
    var _Debugger_initCons = F2(function initConsHelp(value, list) {
        return _List_Cons(_Debugger_init(value), list);
    });
    var _Debugger_initKeyValueCons = F3(function(key, value, list) {
        return _List_Cons(_Utils_Tuple2(_Debugger_init(key), _Debugger_init(value)), list);
    });
    function _Debugger_addSlashes(str, isChar) {
        var s = str.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\r/g, '\\r').replace(/\v/g, '\\v').replace(/\0/g, '\\0');
        if (isChar) return s.replace(/\'/g, '\\\'');
        else return s.replace(/\"/g, '\\"');
    }
    // BLOCK EVENTS
    function _Debugger_updateBlocker(oldBlocker, newBlocker) {
        if (oldBlocker === newBlocker) return;
        var oldEvents = _Debugger_blockerToEvents(oldBlocker);
        var newEvents = _Debugger_blockerToEvents(newBlocker);
        // remove old blockers
        for(var i = 0; i < oldEvents.length; i++)document.removeEventListener(oldEvents[i], _Debugger_blocker, true);
        // add new blockers
        for(var i = 0; i < newEvents.length; i++)document.addEventListener(newEvents[i], _Debugger_blocker, true);
    }
    function _Debugger_blocker(event) {
        if (event.type === 'keydown' && event.metaKey && event.which === 82) return;
        var isScroll = event.type === 'scroll' || event.type === 'wheel';
        for(var node = event.target; node; node = node.parentNode){
            if (isScroll ? node.id === 'elm-debugger-details' : node.id === 'elm-debugger-overlay') return;
        }
        event.stopPropagation();
        event.preventDefault();
    }
    function _Debugger_blockerToEvents(blocker) {
        return blocker === $elm$browser$Debugger$Overlay$BlockNone ? [] : blocker === $elm$browser$Debugger$Overlay$BlockMost ? _Debugger_mostEvents : _Debugger_allEvents;
    }
    var _Debugger_mostEvents = [
        'click',
        'dblclick',
        'mousemove',
        'mouseup',
        'mousedown',
        'mouseenter',
        'mouseleave',
        'touchstart',
        'touchend',
        'touchcancel',
        'touchmove',
        'pointerdown',
        'pointerup',
        'pointerover',
        'pointerout',
        'pointerenter',
        'pointerleave',
        'pointermove',
        'pointercancel',
        'dragstart',
        'drag',
        'dragend',
        'dragenter',
        'dragover',
        'dragleave',
        'drop',
        'keyup',
        'keydown',
        'keypress',
        'input',
        'change',
        'focus',
        'blur'
    ];
    var _Debugger_allEvents = _Debugger_mostEvents.concat('wheel', 'scroll');
    // ELEMENT
    var _Debugger_element;
    var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.init, impl.update, impl.subscriptions, function(sendToApp, initialModel) {
            var view = impl.view;
            /**_UNUSED/
			var domNode = args['node'];
			//*/ /**/ var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
            //*/
            var currNode = _VirtualDom_virtualize(domNode);
            return _Browser_makeAnimator(initialModel, function(model) {
                var nextNode = view(model);
                var patches = _VirtualDom_diff(currNode, nextNode);
                domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
                currNode = nextNode;
            });
        });
    });
    // DOCUMENT
    var _Debugger_document;
    var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.init, impl.update, impl.subscriptions, function(sendToApp, initialModel) {
            var divertHrefToApp = impl.setup && impl.setup(sendToApp);
            var view = impl.view;
            var title = _VirtualDom_doc.title;
            var bodyNode = _VirtualDom_doc.body;
            var currNode = _VirtualDom_virtualize(bodyNode);
            return _Browser_makeAnimator(initialModel, function(model) {
                _VirtualDom_divertHrefToApp = divertHrefToApp;
                var doc = view(model);
                var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
                var patches = _VirtualDom_diff(currNode, nextNode);
                bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
                currNode = nextNode;
                _VirtualDom_divertHrefToApp = 0;
                title !== doc.title && (_VirtualDom_doc.title = title = doc.title);
            });
        });
    });
    // ANIMATION
    var _Browser_cancelAnimationFrame = typeof cancelAnimationFrame !== 'undefined' ? cancelAnimationFrame : function(id) {
        clearTimeout(id);
    };
    var _Browser_requestAnimationFrame = typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame : function(callback) {
        return setTimeout(callback, 1000 / 60);
    };
    function _Browser_makeAnimator(model, draw) {
        draw(model);
        var state = 0;
        function updateIfNeeded() {
            state = state === 1 ? 0 : (_Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1);
        }
        return function(nextModel, isSync) {
            model = nextModel;
            isSync ? (draw(model), state === 2 && (state = 1)) : (state === 0 && _Browser_requestAnimationFrame(updateIfNeeded), state = 2);
        };
    }
    // APPLICATION
    function _Browser_application(impl) {
        var onUrlChange = impl.onUrlChange;
        var onUrlRequest = impl.onUrlRequest;
        var key = function() {
            key.a(onUrlChange(_Browser_getUrl()));
        };
        key['elm-hot-nav-key'] = true;
        return _Browser_document({
            setup: function(sendToApp) {
                key.a = sendToApp;
                _Browser_window.addEventListener('popstate', key);
                _Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);
                return F2(function(domNode, event) {
                    if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download')) {
                        event.preventDefault();
                        var href = domNode.href;
                        var curr = _Browser_getUrl();
                        var next = $elm$url$Url$fromString(href).a;
                        sendToApp(onUrlRequest(next && curr.protocol === next.protocol && curr.host === next.host && curr.port_.a === next.port_.a ? $elm$browser$Browser$Internal(next) : $elm$browser$Browser$External(href)));
                    }
                });
            },
            init: function(flags) {
                return A3(impl.init, flags, _Browser_getUrl(), key);
            },
            view: impl.view,
            update: impl.update,
            subscriptions: impl.subscriptions
        });
    }
    function _Browser_getUrl() {
        return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
    }
    var _Browser_go = F2(function(key, n) {
        return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
            n && history.go(n);
            key();
        }));
    });
    var _Browser_pushUrl = F2(function(key, url) {
        return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
            history.pushState({
            }, '', url);
            key();
        }));
    });
    var _Browser_replaceUrl = F2(function(key, url) {
        return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
            history.replaceState({
            }, '', url);
            key();
        }));
    });
    // GLOBAL EVENTS
    var _Browser_fakeNode = {
        addEventListener: function() {
        },
        removeEventListener: function() {
        }
    };
    var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
    var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;
    var _Browser_on = F3(function(node, eventName, sendToSelf) {
        return _Scheduler_spawn(_Scheduler_binding(function(callback) {
            function handler(event) {
                _Scheduler_rawSpawn(sendToSelf(event));
            }
            node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && {
                passive: true
            });
            return function() {
                node.removeEventListener(eventName, handler);
            };
        }));
    });
    var _Browser_decodeEvent = F2(function(decoder, event) {
        var result = _Json_runHelp(decoder, event);
        return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
    });
    // PAGE VISIBILITY
    function _Browser_visibilityInfo() {
        return typeof _VirtualDom_doc.hidden !== 'undefined' ? {
            hidden: 'hidden',
            change: 'visibilitychange'
        } : typeof _VirtualDom_doc.mozHidden !== 'undefined' ? {
            hidden: 'mozHidden',
            change: 'mozvisibilitychange'
        } : typeof _VirtualDom_doc.msHidden !== 'undefined' ? {
            hidden: 'msHidden',
            change: 'msvisibilitychange'
        } : typeof _VirtualDom_doc.webkitHidden !== 'undefined' ? {
            hidden: 'webkitHidden',
            change: 'webkitvisibilitychange'
        } : {
            hidden: 'hidden',
            change: 'visibilitychange'
        };
    }
    // ANIMATION FRAMES
    function _Browser_rAF() {
        return _Scheduler_binding(function(callback) {
            var id = _Browser_requestAnimationFrame(function() {
                callback(_Scheduler_succeed(Date.now()));
            });
            return function() {
                _Browser_cancelAnimationFrame(id);
            };
        });
    }
    function _Browser_now() {
        return _Scheduler_binding(function(callback) {
            callback(_Scheduler_succeed(Date.now()));
        });
    }
    // DOM STUFF
    function _Browser_withNode(id, doStuff) {
        return _Scheduler_binding(function(callback) {
            _Browser_requestAnimationFrame(function() {
                var node = document.getElementById(id);
                callback(node ? _Scheduler_succeed(doStuff(node)) : _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id)));
            });
        });
    }
    function _Browser_withWindow(doStuff) {
        return _Scheduler_binding(function(callback) {
            _Browser_requestAnimationFrame(function() {
                callback(_Scheduler_succeed(doStuff()));
            });
        });
    }
    // FOCUS and BLUR
    var _Browser_call = F2(function(functionName, id) {
        return _Browser_withNode(id, function(node) {
            node[functionName]();
            return _Utils_Tuple0;
        });
    });
    // WINDOW VIEWPORT
    function _Browser_getViewport() {
        return {
            scene: _Browser_getScene(),
            viewport: {
                x: _Browser_window.pageXOffset,
                y: _Browser_window.pageYOffset,
                width: _Browser_doc.documentElement.clientWidth,
                height: _Browser_doc.documentElement.clientHeight
            }
        };
    }
    function _Browser_getScene() {
        var body = _Browser_doc.body;
        var elem = _Browser_doc.documentElement;
        return {
            width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
            height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
        };
    }
    var _Browser_setViewport = F2(function(x, y) {
        return _Browser_withWindow(function() {
            _Browser_window.scroll(x, y);
            return _Utils_Tuple0;
        });
    });
    // ELEMENT VIEWPORT
    function _Browser_getViewportOf(id) {
        return _Browser_withNode(id, function(node) {
            return {
                scene: {
                    width: node.scrollWidth,
                    height: node.scrollHeight
                },
                viewport: {
                    x: node.scrollLeft,
                    y: node.scrollTop,
                    width: node.clientWidth,
                    height: node.clientHeight
                }
            };
        });
    }
    var _Browser_setViewportOf = F3(function(id, x, y) {
        return _Browser_withNode(id, function(node) {
            node.scrollLeft = x;
            node.scrollTop = y;
            return _Utils_Tuple0;
        });
    });
    // ELEMENT
    function _Browser_getElement(id) {
        return _Browser_withNode(id, function(node) {
            var rect = node.getBoundingClientRect();
            var x = _Browser_window.pageXOffset;
            var y = _Browser_window.pageYOffset;
            return {
                scene: _Browser_getScene(),
                viewport: {
                    x: x,
                    y: y,
                    width: _Browser_doc.documentElement.clientWidth,
                    height: _Browser_doc.documentElement.clientHeight
                },
                element: {
                    x: x + rect.left,
                    y: y + rect.top,
                    width: rect.width,
                    height: rect.height
                }
            };
        });
    }
    // LOAD and RELOAD
    function _Browser_reload(skipCache) {
        return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback) {
            _VirtualDom_doc.location.reload(skipCache);
        }));
    }
    function _Browser_load(url) {
        return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback) {
            try {
                _Browser_window.location = url;
            } catch (err) {
                // Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
                // Other browsers reload the page, so let's be consistent about that.
                _VirtualDom_doc.location.reload(false);
            }
        }));
    }
    function _Time_now(millisToPosix) {
        return _Scheduler_binding(function(callback) {
            callback(_Scheduler_succeed(millisToPosix(Date.now())));
        });
    }
    var _Time_setInterval = F2(function(interval, task) {
        return _Scheduler_binding(function(callback) {
            var id = setInterval(function() {
                _Scheduler_rawSpawn(task);
            }, interval);
            return function() {
                clearInterval(id);
            };
        });
    });
    function _Time_here() {
        return _Scheduler_binding(function(callback) {
            callback(_Scheduler_succeed(A2($elm$time$Time$customZone, -new Date().getTimezoneOffset(), _List_Nil)));
        });
    }
    function _Time_getZoneName() {
        return _Scheduler_binding(function(callback) {
            try {
                var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
            } catch (e) {
                var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
            }
            callback(_Scheduler_succeed(name));
        });
    }
    var $author$project$Main$LinkClicked = function(a) {
        return {
            $: 'LinkClicked',
            a: a
        };
    };
    var $author$project$Main$UrlChanged = function(a) {
        return {
            $: 'UrlChanged',
            a: a
        };
    };
    var $elm$core$Basics$EQ = {
        $: 'EQ'
    };
    var $elm$core$Basics$GT = {
        $: 'GT'
    };
    var $elm$core$Basics$LT = {
        $: 'LT'
    };
    var $elm$core$List$cons = _List_cons;
    var $elm$core$Dict$foldr = F3(function(func, acc, t) {
        foldr: while(true){
            if (t.$ === 'RBEmpty_elm_builtin') return acc;
            else {
                var key = t.b;
                var value = t.c;
                var left = t.d;
                var right = t.e;
                var $temp$func = func, $temp$acc = A3(func, key, value, A3($elm$core$Dict$foldr, func, acc, right)), $temp$t = left;
                func = $temp$func;
                acc = $temp$acc;
                t = $temp$t;
                continue foldr;
            }
        }
    });
    var $elm$core$Dict$toList = function(dict) {
        return A3($elm$core$Dict$foldr, F3(function(key, value, list) {
            return A2($elm$core$List$cons, _Utils_Tuple2(key, value), list);
        }), _List_Nil, dict);
    };
    var $elm$core$Dict$keys = function(dict) {
        return A3($elm$core$Dict$foldr, F3(function(key, value, keyList) {
            return A2($elm$core$List$cons, key, keyList);
        }), _List_Nil, dict);
    };
    var $elm$core$Set$toList = function(_v0) {
        var dict = _v0.a;
        return $elm$core$Dict$keys(dict);
    };
    var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
    var $elm$core$Array$foldr = F3(function(func, baseCase, _v0) {
        var tree = _v0.c;
        var tail = _v0.d;
        var helper = F2(function(node, acc) {
            if (node.$ === 'SubTree') {
                var subTree = node.a;
                return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
            } else {
                var values = node.a;
                return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
            }
        });
        return A3($elm$core$Elm$JsArray$foldr, helper, A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail), tree);
    });
    var $elm$core$Array$toList = function(array) {
        return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
    };
    var $elm$core$Result$Err = function(a) {
        return {
            $: 'Err',
            a: a
        };
    };
    var $elm$json$Json$Decode$Failure = F2(function(a, b) {
        return {
            $: 'Failure',
            a: a,
            b: b
        };
    });
    var $elm$json$Json$Decode$Field = F2(function(a, b) {
        return {
            $: 'Field',
            a: a,
            b: b
        };
    });
    var $elm$json$Json$Decode$Index = F2(function(a, b) {
        return {
            $: 'Index',
            a: a,
            b: b
        };
    });
    var $elm$core$Result$Ok = function(a) {
        return {
            $: 'Ok',
            a: a
        };
    };
    var $elm$json$Json$Decode$OneOf = function(a) {
        return {
            $: 'OneOf',
            a: a
        };
    };
    var $elm$core$Basics$False = {
        $: 'False'
    };
    var $elm$core$Basics$add = _Basics_add;
    var $elm$core$Maybe$Just = function(a) {
        return {
            $: 'Just',
            a: a
        };
    };
    var $elm$core$Maybe$Nothing = {
        $: 'Nothing'
    };
    var $elm$core$String$all = _String_all;
    var $elm$core$Basics$and = _Basics_and;
    var $elm$core$Basics$append = _Utils_append;
    var $elm$json$Json$Encode$encode = _Json_encode;
    var $elm$core$String$fromInt = _String_fromNumber;
    var $elm$core$String$join = F2(function(sep, chunks) {
        return A2(_String_join, sep, _List_toArray(chunks));
    });
    var $elm$core$String$split = F2(function(sep, string) {
        return _List_fromArray(A2(_String_split, sep, string));
    });
    var $elm$json$Json$Decode$indent = function(str) {
        return A2($elm$core$String$join, '\n    ', A2($elm$core$String$split, '\n', str));
    };
    var $elm$core$List$foldl = F3(function(func, acc, list) {
        foldl: while(true){
            if (!list.b) return acc;
            else {
                var x = list.a;
                var xs = list.b;
                var $temp$func = func, $temp$acc = A2(func, x, acc), $temp$list = xs;
                func = $temp$func;
                acc = $temp$acc;
                list = $temp$list;
                continue foldl;
            }
        }
    });
    var $elm$core$List$length = function(xs) {
        return A3($elm$core$List$foldl, F2(function(_v0, i) {
            return i + 1;
        }), 0, xs);
    };
    var $elm$core$List$map2 = _List_map2;
    var $elm$core$Basics$le = _Utils_le;
    var $elm$core$Basics$sub = _Basics_sub;
    var $elm$core$List$rangeHelp = F3(function(lo, hi, list) {
        rangeHelp: while(true){
            if (_Utils_cmp(lo, hi) < 1) {
                var $temp$lo = lo, $temp$hi = hi - 1, $temp$list = A2($elm$core$List$cons, hi, list);
                lo = $temp$lo;
                hi = $temp$hi;
                list = $temp$list;
                continue rangeHelp;
            } else return list;
        }
    });
    var $elm$core$List$range = F2(function(lo, hi) {
        return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
    });
    var $elm$core$List$indexedMap = F2(function(f, xs) {
        return A3($elm$core$List$map2, f, A2($elm$core$List$range, 0, $elm$core$List$length(xs) - 1), xs);
    });
    var $elm$core$Char$toCode = _Char_toCode;
    var $elm$core$Char$isLower = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return 97 <= code && code <= 122;
    };
    var $elm$core$Char$isUpper = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return code <= 90 && 65 <= code;
    };
    var $elm$core$Basics$or = _Basics_or;
    var $elm$core$Char$isAlpha = function(_char) {
        return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
    };
    var $elm$core$Char$isDigit = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return code <= 57 && 48 <= code;
    };
    var $elm$core$Char$isAlphaNum = function(_char) {
        return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char);
    };
    var $elm$core$List$reverse = function(list) {
        return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
    };
    var $elm$core$String$uncons = _String_uncons;
    var $elm$json$Json$Decode$errorOneOf = F2(function(i, error) {
        return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent($elm$json$Json$Decode$errorToString(error))));
    });
    var $elm$json$Json$Decode$errorToString = function(error) {
        return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
    };
    var $elm$json$Json$Decode$errorToStringHelp = F2(function(error, context) {
        errorToStringHelp: while(true)switch(error.$){
            case 'Field':
                var f = error.a;
                var err = error.b;
                var isSimple = function() {
                    var _v1 = $elm$core$String$uncons(f);
                    if (_v1.$ === 'Nothing') return false;
                    else {
                        var _v2 = _v1.a;
                        var _char = _v2.a;
                        var rest = _v2.b;
                        return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
                    }
                }();
                var fieldName = isSimple ? '.' + f : '[\'' + (f + '\']');
                var $temp$error = err, $temp$context = A2($elm$core$List$cons, fieldName, context);
                error = $temp$error;
                context = $temp$context;
                continue errorToStringHelp;
            case 'Index':
                var i = error.a;
                var err = error.b;
                var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
                var $temp$error = err, $temp$context = A2($elm$core$List$cons, indexName, context);
                error = $temp$error;
                context = $temp$context;
                continue errorToStringHelp;
            case 'OneOf':
                var errors = error.a;
                if (!errors.b) return 'Ran into a Json.Decode.oneOf with no possibilities' + (function() {
                    if (!context.b) return '!';
                    else return ' at json' + A2($elm$core$String$join, '', $elm$core$List$reverse(context));
                })();
                else if (!errors.b.b) {
                    var err = errors.a;
                    var $temp$error = err, $temp$context = context;
                    error = $temp$error;
                    context = $temp$context;
                    continue errorToStringHelp;
                } else {
                    var starter = function() {
                        if (!context.b) return 'Json.Decode.oneOf';
                        else return 'The Json.Decode.oneOf at json' + A2($elm$core$String$join, '', $elm$core$List$reverse(context));
                    }();
                    var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt($elm$core$List$length(errors)) + ' ways:'));
                    return A2($elm$core$String$join, '\n\n', A2($elm$core$List$cons, introduction, A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
                }
            default:
                var msg = error.a;
                var json = error.b;
                var introduction = function() {
                    if (!context.b) return 'Problem with the given value:\n\n';
                    else return 'Problem with the value at json' + (A2($elm$core$String$join, '', $elm$core$List$reverse(context)) + ':\n\n    ');
                }();
                return introduction + ($elm$json$Json$Decode$indent(A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
        }
    });
    var $elm$core$Array$branchFactor = 32;
    var $elm$core$Array$Array_elm_builtin = F4(function(a, b, c, d) {
        return {
            $: 'Array_elm_builtin',
            a: a,
            b: b,
            c: c,
            d: d
        };
    });
    var $elm$core$Elm$JsArray$empty = _JsArray_empty;
    var $elm$core$Basics$ceiling = _Basics_ceiling;
    var $elm$core$Basics$fdiv = _Basics_fdiv;
    var $elm$core$Basics$logBase = F2(function(base, number) {
        return _Basics_log(number) / _Basics_log(base);
    });
    var $elm$core$Basics$toFloat = _Basics_toFloat;
    var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
    var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
    var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
    var $elm$core$Array$Leaf = function(a) {
        return {
            $: 'Leaf',
            a: a
        };
    };
    var $elm$core$Basics$apL = F2(function(f, x) {
        return f(x);
    });
    var $elm$core$Basics$apR = F2(function(x, f) {
        return f(x);
    });
    var $elm$core$Basics$eq = _Utils_equal;
    var $elm$core$Basics$floor = _Basics_floor;
    var $elm$core$Elm$JsArray$length = _JsArray_length;
    var $elm$core$Basics$gt = _Utils_gt;
    var $elm$core$Basics$max = F2(function(x, y) {
        return _Utils_cmp(x, y) > 0 ? x : y;
    });
    var $elm$core$Basics$mul = _Basics_mul;
    var $elm$core$Array$SubTree = function(a) {
        return {
            $: 'SubTree',
            a: a
        };
    };
    var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
    var $elm$core$Array$compressNodes = F2(function(nodes, acc) {
        compressNodes: while(true){
            var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
            var node = _v0.a;
            var remainingNodes = _v0.b;
            var newAcc = A2($elm$core$List$cons, $elm$core$Array$SubTree(node), acc);
            if (!remainingNodes.b) return $elm$core$List$reverse(newAcc);
            else {
                var $temp$nodes = remainingNodes, $temp$acc = newAcc;
                nodes = $temp$nodes;
                acc = $temp$acc;
                continue compressNodes;
            }
        }
    });
    var $elm$core$Tuple$first = function(_v0) {
        var x = _v0.a;
        return x;
    };
    var $elm$core$Array$treeFromBuilder = F2(function(nodeList, nodeListSize) {
        treeFromBuilder: while(true){
            var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
            if (newNodeSize === 1) return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
            else {
                var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil), $temp$nodeListSize = newNodeSize;
                nodeList = $temp$nodeList;
                nodeListSize = $temp$nodeListSize;
                continue treeFromBuilder;
            }
        }
    });
    var $elm$core$Array$builderToArray = F2(function(reverseNodeList, builder) {
        if (!builder.nodeListSize) return A4($elm$core$Array$Array_elm_builtin, $elm$core$Elm$JsArray$length(builder.tail), $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, builder.tail);
        else {
            var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
            var depth = $elm$core$Basics$floor(A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
            var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
            var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
            return A4($elm$core$Array$Array_elm_builtin, $elm$core$Elm$JsArray$length(builder.tail) + treeLen, A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep), tree, builder.tail);
        }
    });
    var $elm$core$Basics$idiv = _Basics_idiv;
    var $elm$core$Basics$lt = _Utils_lt;
    var $elm$core$Array$initializeHelp = F5(function(fn, fromIndex, len, nodeList, tail) {
        initializeHelp: while(true){
            if (fromIndex < 0) return A2($elm$core$Array$builderToArray, false, {
                nodeList: nodeList,
                nodeListSize: len / $elm$core$Array$branchFactor | 0,
                tail: tail
            });
            else {
                var leaf = $elm$core$Array$Leaf(A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
                var $temp$fn = fn, $temp$fromIndex = fromIndex - $elm$core$Array$branchFactor, $temp$len = len, $temp$nodeList = A2($elm$core$List$cons, leaf, nodeList), $temp$tail = tail;
                fn = $temp$fn;
                fromIndex = $temp$fromIndex;
                len = $temp$len;
                nodeList = $temp$nodeList;
                tail = $temp$tail;
                continue initializeHelp;
            }
        }
    });
    var $elm$core$Basics$remainderBy = _Basics_remainderBy;
    var $elm$core$Array$initialize = F2(function(len, fn) {
        if (len <= 0) return $elm$core$Array$empty;
        else {
            var tailLen = len % $elm$core$Array$branchFactor;
            var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
            var initialFromIndex = len - tailLen - $elm$core$Array$branchFactor;
            return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
        }
    });
    var $elm$core$Basics$True = {
        $: 'True'
    };
    var $elm$core$Result$isOk = function(result) {
        if (result.$ === 'Ok') return true;
        else return false;
    };
    var $elm$json$Json$Decode$map = _Json_map1;
    var $elm$json$Json$Decode$map2 = _Json_map2;
    var $elm$json$Json$Decode$succeed = _Json_succeed;
    var $elm$virtual_dom$VirtualDom$toHandlerInt = function(handler) {
        switch(handler.$){
            case 'Normal':
                return 0;
            case 'MayStopPropagation':
                return 1;
            case 'MayPreventDefault':
                return 2;
            default:
                return 3;
        }
    };
    var $elm$browser$Debugger$Expando$ArraySeq = {
        $: 'ArraySeq'
    };
    var $elm$browser$Debugger$Overlay$BlockMost = {
        $: 'BlockMost'
    };
    var $elm$browser$Debugger$Overlay$BlockNone = {
        $: 'BlockNone'
    };
    var $elm$browser$Debugger$Expando$Constructor = F3(function(a, b, c) {
        return {
            $: 'Constructor',
            a: a,
            b: b,
            c: c
        };
    });
    var $elm$browser$Debugger$Expando$Dictionary = F2(function(a, b) {
        return {
            $: 'Dictionary',
            a: a,
            b: b
        };
    });
    var $elm$browser$Debugger$Main$Down = {
        $: 'Down'
    };
    var $elm$browser$Debugger$Expando$ListSeq = {
        $: 'ListSeq'
    };
    var $elm$browser$Debugger$Main$NoOp = {
        $: 'NoOp'
    };
    var $elm$browser$Debugger$Expando$Primitive = function(a) {
        return {
            $: 'Primitive',
            a: a
        };
    };
    var $elm$browser$Debugger$Expando$Record = F2(function(a, b) {
        return {
            $: 'Record',
            a: a,
            b: b
        };
    });
    var $elm$browser$Debugger$Expando$S = function(a) {
        return {
            $: 'S',
            a: a
        };
    };
    var $elm$browser$Debugger$Expando$Sequence = F3(function(a, b, c) {
        return {
            $: 'Sequence',
            a: a,
            b: b,
            c: c
        };
    });
    var $elm$browser$Debugger$Expando$SetSeq = {
        $: 'SetSeq'
    };
    var $elm$browser$Debugger$Main$Up = {
        $: 'Up'
    };
    var $elm$browser$Debugger$Main$UserMsg = function(a) {
        return {
            $: 'UserMsg',
            a: a
        };
    };
    var $elm$browser$Debugger$Main$Export = {
        $: 'Export'
    };
    var $elm$browser$Debugger$Main$Import = {
        $: 'Import'
    };
    var $elm$browser$Debugger$Main$Open = {
        $: 'Open'
    };
    var $elm$browser$Debugger$Main$OverlayMsg = function(a) {
        return {
            $: 'OverlayMsg',
            a: a
        };
    };
    var $elm$browser$Debugger$Main$Resume = {
        $: 'Resume'
    };
    var $elm$browser$Debugger$Main$isPaused = function(state) {
        if (state.$ === 'Running') return false;
        else return true;
    };
    var $elm$browser$Debugger$History$size = function(history) {
        return history.numMessages;
    };
    var $elm$browser$Debugger$Overlay$Accept = function(a) {
        return {
            $: 'Accept',
            a: a
        };
    };
    var $elm$browser$Debugger$Overlay$Choose = F2(function(a, b) {
        return {
            $: 'Choose',
            a: a,
            b: b
        };
    });
    var $elm$html$Html$div = _VirtualDom_node('div');
    var $elm$json$Json$Encode$string = _Json_wrap;
    var $elm$html$Html$Attributes$stringProperty = F2(function(key, string) {
        return A2(_VirtualDom_property, key, $elm$json$Json$Encode$string(string));
    });
    var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
    var $elm$virtual_dom$VirtualDom$Normal = function(a) {
        return {
            $: 'Normal',
            a: a
        };
    };
    var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
    var $elm$html$Html$Events$on = F2(function(event, decoder) {
        return A2($elm$virtual_dom$VirtualDom$on, event, $elm$virtual_dom$VirtualDom$Normal(decoder));
    });
    var $elm$html$Html$Events$onClick = function(msg) {
        return A2($elm$html$Html$Events$on, 'click', $elm$json$Json$Decode$succeed(msg));
    };
    var $elm$html$Html$span = _VirtualDom_node('span');
    var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
    var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
    var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
    var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
    var $elm$html$Html$a = _VirtualDom_node('a');
    var $elm$browser$Debugger$Overlay$goodNews1 = '\nThe good news is that having values like this in your message type is not\nso great in the long run. You are better off using simpler data, like\n';
    var $elm$browser$Debugger$Overlay$goodNews2 = '\nfunction can pattern match on that data and call whatever functions, JSON\ndecoders, etc. you need. This makes the code much more explicit and easy to\nfollow for other readers (or you in a few months!)\n';
    var $elm$html$Html$Attributes$href = function(url) {
        return A2($elm$html$Html$Attributes$stringProperty, 'href', _VirtualDom_noJavaScriptUri(url));
    };
    var $elm$core$List$foldrHelper = F4(function(fn, acc, ctr, ls) {
        if (!ls.b) return acc;
        else {
            var a = ls.a;
            var r1 = ls.b;
            if (!r1.b) return A2(fn, a, acc);
            else {
                var b = r1.a;
                var r2 = r1.b;
                if (!r2.b) return A2(fn, a, A2(fn, b, acc));
                else {
                    var c = r2.a;
                    var r3 = r2.b;
                    if (!r3.b) return A2(fn, a, A2(fn, b, A2(fn, c, acc)));
                    else {
                        var d = r3.a;
                        var r4 = r3.b;
                        var res = ctr > 500 ? A3($elm$core$List$foldl, fn, acc, $elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
                        return A2(fn, a, A2(fn, b, A2(fn, c, A2(fn, d, res))));
                    }
                }
            }
        }
    });
    var $elm$core$List$foldr = F3(function(fn, acc, ls) {
        return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
    });
    var $elm$core$List$map = F2(function(f, xs) {
        return A3($elm$core$List$foldr, F2(function(x, acc) {
            return A2($elm$core$List$cons, f(x), acc);
        }), _List_Nil, xs);
    });
    var $elm$html$Html$p = _VirtualDom_node('p');
    var $elm$html$Html$ul = _VirtualDom_node('ul');
    var $elm$html$Html$code = _VirtualDom_node('code');
    var $elm$browser$Debugger$Overlay$viewCode = function(name) {
        return A2($elm$html$Html$code, _List_Nil, _List_fromArray([
            $elm$html$Html$text(name)
        ]));
    };
    var $elm$browser$Debugger$Overlay$addCommas = function(items) {
        if (!items.b) return '';
        else {
            if (!items.b.b) {
                var item = items.a;
                return item;
            } else if (!items.b.b.b) {
                var item1 = items.a;
                var _v1 = items.b;
                var item2 = _v1.a;
                return item1 + (' and ' + item2);
            } else {
                var lastItem = items.a;
                var otherItems = items.b;
                return A2($elm$core$String$join, ', ', _Utils_ap(otherItems, _List_fromArray([
                    ' and ' + lastItem
                ])));
            }
        }
    };
    var $elm$html$Html$li = _VirtualDom_node('li');
    var $elm$browser$Debugger$Overlay$problemToString = function(problem) {
        switch(problem.$){
            case 'Function':
                return 'functions';
            case 'Decoder':
                return 'JSON decoders';
            case 'Task':
                return 'tasks';
            case 'Process':
                return 'processes';
            case 'Socket':
                return 'web sockets';
            case 'Request':
                return 'HTTP requests';
            case 'Program':
                return 'programs';
            default:
                return 'virtual DOM values';
        }
    };
    var $elm$browser$Debugger$Overlay$viewProblemType = function(_v0) {
        var name = _v0.name;
        var problems = _v0.problems;
        return A2($elm$html$Html$li, _List_Nil, _List_fromArray([
            $elm$browser$Debugger$Overlay$viewCode(name),
            $elm$html$Html$text(' can contain ' + ($elm$browser$Debugger$Overlay$addCommas(A2($elm$core$List$map, $elm$browser$Debugger$Overlay$problemToString, problems)) + '.'))
        ]));
    };
    var $elm$browser$Debugger$Overlay$viewBadMetadata = function(_v0) {
        var message = _v0.message;
        var problems = _v0.problems;
        return _List_fromArray([
            A2($elm$html$Html$p, _List_Nil, _List_fromArray([
                $elm$html$Html$text('The '),
                $elm$browser$Debugger$Overlay$viewCode(message),
                $elm$html$Html$text(' type of your program cannot be reliably serialized for history files.')
            ])),
            A2($elm$html$Html$p, _List_Nil, _List_fromArray([
                $elm$html$Html$text('Functions cannot be serialized, nor can values that contain functions. This is a problem in these places:')
            ])),
            A2($elm$html$Html$ul, _List_Nil, A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewProblemType, problems)),
            A2($elm$html$Html$p, _List_Nil, _List_fromArray([
                $elm$html$Html$text($elm$browser$Debugger$Overlay$goodNews1),
                A2($elm$html$Html$a, _List_fromArray([
                    $elm$html$Html$Attributes$href('https://guide.elm-lang.org/types/custom_types.html')
                ]), _List_fromArray([
                    $elm$html$Html$text('custom types')
                ])),
                $elm$html$Html$text(', in your messages. From there, your '),
                $elm$browser$Debugger$Overlay$viewCode('update'),
                $elm$html$Html$text($elm$browser$Debugger$Overlay$goodNews2)
            ]))
        ]);
    };
    var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
    var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
    var $elm$browser$Debugger$Overlay$Cancel = {
        $: 'Cancel'
    };
    var $elm$browser$Debugger$Overlay$Proceed = {
        $: 'Proceed'
    };
    var $elm$html$Html$button = _VirtualDom_node('button');
    var $elm$browser$Debugger$Overlay$viewButtons = function(buttons) {
        var btn = F2(function(msg, string) {
            return A2($elm$html$Html$button, _List_fromArray([
                A2($elm$html$Html$Attributes$style, 'margin-right', '20px'),
                $elm$html$Html$Events$onClick(msg)
            ]), _List_fromArray([
                $elm$html$Html$text(string)
            ]));
        });
        var buttonNodes = function() {
            if (buttons.$ === 'Accept') {
                var proceed = buttons.a;
                return _List_fromArray([
                    A2(btn, $elm$browser$Debugger$Overlay$Proceed, proceed)
                ]);
            } else {
                var cancel = buttons.a;
                var proceed = buttons.b;
                return _List_fromArray([
                    A2(btn, $elm$browser$Debugger$Overlay$Cancel, cancel),
                    A2(btn, $elm$browser$Debugger$Overlay$Proceed, proceed)
                ]);
            }
        }();
        return A2($elm$html$Html$div, _List_fromArray([
            A2($elm$html$Html$Attributes$style, 'height', '60px'),
            A2($elm$html$Html$Attributes$style, 'line-height', '60px'),
            A2($elm$html$Html$Attributes$style, 'text-align', 'right'),
            A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
        ]), buttonNodes);
    };
    var $elm$browser$Debugger$Overlay$viewMessage = F4(function(config, title, details, buttons) {
        return A2($elm$html$Html$div, _List_fromArray([
            $elm$html$Html$Attributes$id('elm-debugger-overlay'),
            A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
            A2($elm$html$Html$Attributes$style, 'top', '0'),
            A2($elm$html$Html$Attributes$style, 'left', '0'),
            A2($elm$html$Html$Attributes$style, 'width', '100vw'),
            A2($elm$html$Html$Attributes$style, 'height', '100vh'),
            A2($elm$html$Html$Attributes$style, 'color', 'white'),
            A2($elm$html$Html$Attributes$style, 'pointer-events', 'none'),
            A2($elm$html$Html$Attributes$style, 'font-family', '\'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif'),
            A2($elm$html$Html$Attributes$style, 'z-index', '2147483647')
        ]), _List_fromArray([
            A2($elm$html$Html$div, _List_fromArray([
                A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
                A2($elm$html$Html$Attributes$style, 'width', '600px'),
                A2($elm$html$Html$Attributes$style, 'height', '100vh'),
                A2($elm$html$Html$Attributes$style, 'padding-left', 'calc(50% - 300px)'),
                A2($elm$html$Html$Attributes$style, 'padding-right', 'calc(50% - 300px)'),
                A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(200, 200, 200, 0.7)'),
                A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto')
            ]), _List_fromArray([
                A2($elm$html$Html$div, _List_fromArray([
                    A2($elm$html$Html$Attributes$style, 'font-size', '36px'),
                    A2($elm$html$Html$Attributes$style, 'height', '80px'),
                    A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)'),
                    A2($elm$html$Html$Attributes$style, 'padding-left', '22px'),
                    A2($elm$html$Html$Attributes$style, 'vertical-align', 'middle'),
                    A2($elm$html$Html$Attributes$style, 'line-height', '80px')
                ]), _List_fromArray([
                    $elm$html$Html$text(title)
                ])),
                A2($elm$html$Html$div, _List_fromArray([
                    $elm$html$Html$Attributes$id('elm-debugger-details'),
                    A2($elm$html$Html$Attributes$style, 'padding', ' 8px 20px'),
                    A2($elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
                    A2($elm$html$Html$Attributes$style, 'max-height', 'calc(100vh - 156px)'),
                    A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)')
                ]), details),
                A2($elm$html$Html$map, config.wrap, $elm$browser$Debugger$Overlay$viewButtons(buttons))
            ]))
        ]));
    });
    var $elm$virtual_dom$VirtualDom$attribute = F2(function(key, value) {
        return A2(_VirtualDom_attribute, _VirtualDom_noOnOrFormAction(key), _VirtualDom_noJavaScriptOrHtmlUri(value));
    });
    var $elm$core$Basics$negate = function(n) {
        return -n;
    };
    var $elm$virtual_dom$VirtualDom$nodeNS = function(tag) {
        return _VirtualDom_nodeNS(_VirtualDom_noScript(tag));
    };
    var $elm$core$String$fromFloat = _String_fromNumber;
    var $elm$browser$Debugger$Overlay$viewShape = F4(function(x, y, angle, coordinates) {
        return A4($elm$virtual_dom$VirtualDom$nodeNS, 'http://www.w3.org/2000/svg', 'polygon', _List_fromArray([
            A2($elm$virtual_dom$VirtualDom$attribute, 'points', coordinates),
            A2($elm$virtual_dom$VirtualDom$attribute, 'transform', 'translate(' + ($elm$core$String$fromFloat(x) + (' ' + ($elm$core$String$fromFloat(y) + (') rotate(' + ($elm$core$String$fromFloat(-angle) + ')'))))))
        ]), _List_Nil);
    });
    var $elm$browser$Debugger$Overlay$elmLogo = A4($elm$virtual_dom$VirtualDom$nodeNS, 'http://www.w3.org/2000/svg', 'svg', _List_fromArray([
        A2($elm$virtual_dom$VirtualDom$attribute, 'viewBox', '-300 -300 600 600'),
        A2($elm$virtual_dom$VirtualDom$attribute, 'xmlns', 'http://www.w3.org/2000/svg'),
        A2($elm$virtual_dom$VirtualDom$attribute, 'fill', 'currentColor'),
        A2($elm$virtual_dom$VirtualDom$attribute, 'width', '24px'),
        A2($elm$virtual_dom$VirtualDom$attribute, 'height', '24px')
    ]), _List_fromArray([
        A4($elm$virtual_dom$VirtualDom$nodeNS, 'http://www.w3.org/2000/svg', 'g', _List_fromArray([
            A2($elm$virtual_dom$VirtualDom$attribute, 'transform', 'scale(1 -1)')
        ]), _List_fromArray([
            A4($elm$browser$Debugger$Overlay$viewShape, 0, -210, 0, '-280,-90 0,190 280,-90'),
            A4($elm$browser$Debugger$Overlay$viewShape, -210, 0, 90, '-280,-90 0,190 280,-90'),
            A4($elm$browser$Debugger$Overlay$viewShape, 207, 207, 45, '-198,-66 0,132 198,-66'),
            A4($elm$browser$Debugger$Overlay$viewShape, 150, 0, 0, '-130,0 0,-130 130,0 0,130'),
            A4($elm$browser$Debugger$Overlay$viewShape, -89, 239, 0, '-191,61 69,61 191,-61 -69,-61'),
            A4($elm$browser$Debugger$Overlay$viewShape, 0, 106, 180, '-130,-44 0,86  130,-44'),
            A4($elm$browser$Debugger$Overlay$viewShape, 256, -150, 270, '-130,-44 0,86  130,-44')
        ]))
    ]));
    var $elm$core$String$length = _String_length;
    var $elm$browser$Debugger$Overlay$viewMiniControls = F2(function(config, numMsgs) {
        var string = $elm$core$String$fromInt(numMsgs);
        var width = $elm$core$String$fromInt(2 + $elm$core$String$length(string));
        return A2($elm$html$Html$div, _List_fromArray([
            A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
            A2($elm$html$Html$Attributes$style, 'bottom', '2em'),
            A2($elm$html$Html$Attributes$style, 'right', '2em'),
            A2($elm$html$Html$Attributes$style, 'width', 'calc(42px + ' + (width + 'ch)')),
            A2($elm$html$Html$Attributes$style, 'height', '36px'),
            A2($elm$html$Html$Attributes$style, 'background-color', '#1293D8'),
            A2($elm$html$Html$Attributes$style, 'color', 'white'),
            A2($elm$html$Html$Attributes$style, 'font-family', 'monospace'),
            A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto'),
            A2($elm$html$Html$Attributes$style, 'z-index', '2147483647'),
            A2($elm$html$Html$Attributes$style, 'display', 'flex'),
            A2($elm$html$Html$Attributes$style, 'justify-content', 'center'),
            A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
            A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
            $elm$html$Html$Events$onClick(config.open)
        ]), _List_fromArray([
            $elm$browser$Debugger$Overlay$elmLogo,
            A2($elm$html$Html$span, _List_fromArray([
                A2($elm$html$Html$Attributes$style, 'padding-left', 'calc(1ch + 6px)'),
                A2($elm$html$Html$Attributes$style, 'padding-right', '1ch')
            ]), _List_fromArray([
                $elm$html$Html$text(string)
            ]))
        ]));
    });
    var $elm$browser$Debugger$Overlay$explanationBad = '\nThe messages in this history do not match the messages handled by your\nprogram. I noticed changes in the following types:\n';
    var $elm$browser$Debugger$Overlay$explanationRisky = '\nThis history seems old. It will work with this program, but some\nmessages have been added since the history was created:\n';
    var $elm$core$List$intersperse = F2(function(sep, xs) {
        if (!xs.b) return _List_Nil;
        else {
            var hd = xs.a;
            var tl = xs.b;
            var step = F2(function(x, rest) {
                return A2($elm$core$List$cons, sep, A2($elm$core$List$cons, x, rest));
            });
            var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
            return A2($elm$core$List$cons, hd, spersed);
        }
    });
    var $elm$browser$Debugger$Overlay$viewMention = F2(function(tags, verbed) {
        var _v0 = A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewCode, $elm$core$List$reverse(tags));
        if (!_v0.b) return $elm$html$Html$text('');
        else {
            if (!_v0.b.b) {
                var tag = _v0.a;
                return A2($elm$html$Html$li, _List_Nil, _List_fromArray([
                    $elm$html$Html$text(verbed),
                    tag,
                    $elm$html$Html$text('.')
                ]));
            } else if (!_v0.b.b.b) {
                var tag2 = _v0.a;
                var _v1 = _v0.b;
                var tag1 = _v1.a;
                return A2($elm$html$Html$li, _List_Nil, _List_fromArray([
                    $elm$html$Html$text(verbed),
                    tag1,
                    $elm$html$Html$text(' and '),
                    tag2,
                    $elm$html$Html$text('.')
                ]));
            } else {
                var lastTag = _v0.a;
                var otherTags = _v0.b;
                return A2($elm$html$Html$li, _List_Nil, A2($elm$core$List$cons, $elm$html$Html$text(verbed), _Utils_ap(A2($elm$core$List$intersperse, $elm$html$Html$text(', '), $elm$core$List$reverse(otherTags)), _List_fromArray([
                    $elm$html$Html$text(', and '),
                    lastTag,
                    $elm$html$Html$text('.')
                ]))));
            }
        }
    });
    var $elm$browser$Debugger$Overlay$viewChange = function(change) {
        return A2($elm$html$Html$li, _List_fromArray([
            A2($elm$html$Html$Attributes$style, 'margin', '8px 0')
        ]), function() {
            if (change.$ === 'AliasChange') {
                var name = change.a;
                return _List_fromArray([
                    A2($elm$html$Html$span, _List_fromArray([
                        A2($elm$html$Html$Attributes$style, 'font-size', '1.5em')
                    ]), _List_fromArray([
                        $elm$browser$Debugger$Overlay$viewCode(name)
                    ]))
                ]);
            } else {
                var name = change.a;
                var removed = change.b.removed;
                var changed = change.b.changed;
                var added = change.b.added;
                var argsMatch = change.b.argsMatch;
                return _List_fromArray([
                    A2($elm$html$Html$span, _List_fromArray([
                        A2($elm$html$Html$Attributes$style, 'font-size', '1.5em')
                    ]), _List_fromArray([
                        $elm$browser$Debugger$Overlay$viewCode(name)
                    ])),
                    A2($elm$html$Html$ul, _List_fromArray([
                        A2($elm$html$Html$Attributes$style, 'list-style-type', 'disc'),
                        A2($elm$html$Html$Attributes$style, 'padding-left', '2em')
                    ]), _List_fromArray([
                        A2($elm$browser$Debugger$Overlay$viewMention, removed, 'Removed '),
                        A2($elm$browser$Debugger$Overlay$viewMention, changed, 'Changed '),
                        A2($elm$browser$Debugger$Overlay$viewMention, added, 'Added ')
                    ])),
                    argsMatch ? $elm$html$Html$text('') : $elm$html$Html$text('This may be due to the fact that the type variable names changed.')
                ]);
            }
        }());
    };
    var $elm$browser$Debugger$Overlay$viewReport = F2(function(isBad, report) {
        switch(report.$){
            case 'CorruptHistory':
                return _List_fromArray([
                    $elm$html$Html$text('Looks like this history file is corrupt. I cannot understand it.')
                ]);
            case 'VersionChanged':
                var old = report.a;
                var _new = report.b;
                return _List_fromArray([
                    $elm$html$Html$text('This history was created with Elm ' + (old + (', but you are using Elm ' + (_new + ' right now.'))))
                ]);
            case 'MessageChanged':
                var old = report.a;
                var _new = report.b;
                return _List_fromArray([
                    $elm$html$Html$text("To import some other history, the overall message type must be the same. The old history has "),
                    $elm$browser$Debugger$Overlay$viewCode(old),
                    $elm$html$Html$text(' messages, but the new program works with '),
                    $elm$browser$Debugger$Overlay$viewCode(_new),
                    $elm$html$Html$text(' messages.')
                ]);
            default:
                var changes = report.a;
                return _List_fromArray([
                    A2($elm$html$Html$p, _List_Nil, _List_fromArray([
                        $elm$html$Html$text(isBad ? $elm$browser$Debugger$Overlay$explanationBad : $elm$browser$Debugger$Overlay$explanationRisky)
                    ])),
                    A2($elm$html$Html$ul, _List_fromArray([
                        A2($elm$html$Html$Attributes$style, 'list-style-type', 'none'),
                        A2($elm$html$Html$Attributes$style, 'padding-left', '20px')
                    ]), A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewChange, changes))
                ]);
        }
    });
    var $elm$browser$Debugger$Overlay$view = F5(function(config, isPaused, isOpen, numMsgs, state) {
        switch(state.$){
            case 'None':
                return isOpen ? $elm$html$Html$text('') : isPaused ? A2($elm$html$Html$div, _List_fromArray([
                    $elm$html$Html$Attributes$id('elm-debugger-overlay'),
                    A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
                    A2($elm$html$Html$Attributes$style, 'top', '0'),
                    A2($elm$html$Html$Attributes$style, 'left', '0'),
                    A2($elm$html$Html$Attributes$style, 'width', '100vw'),
                    A2($elm$html$Html$Attributes$style, 'height', '100vh'),
                    A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
                    A2($elm$html$Html$Attributes$style, 'display', 'flex'),
                    A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
                    A2($elm$html$Html$Attributes$style, 'justify-content', 'center'),
                    A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto'),
                    A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(200, 200, 200, 0.7)'),
                    A2($elm$html$Html$Attributes$style, 'color', 'white'),
                    A2($elm$html$Html$Attributes$style, 'font-family', '\'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif'),
                    A2($elm$html$Html$Attributes$style, 'z-index', '2147483646'),
                    $elm$html$Html$Events$onClick(config.resume)
                ]), _List_fromArray([
                    A2($elm$html$Html$span, _List_fromArray([
                        A2($elm$html$Html$Attributes$style, 'font-size', '80px')
                    ]), _List_fromArray([
                        $elm$html$Html$text('Click to Resume')
                    ])),
                    A2($elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs)
                ])) : A2($elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs);
            case 'BadMetadata':
                var badMetadata_ = state.a;
                return A4($elm$browser$Debugger$Overlay$viewMessage, config, 'Cannot use Import or Export', $elm$browser$Debugger$Overlay$viewBadMetadata(badMetadata_), $elm$browser$Debugger$Overlay$Accept('Ok'));
            case 'BadImport':
                var report = state.a;
                return A4($elm$browser$Debugger$Overlay$viewMessage, config, 'Cannot Import History', A2($elm$browser$Debugger$Overlay$viewReport, true, report), $elm$browser$Debugger$Overlay$Accept('Ok'));
            default:
                var report = state.a;
                return A4($elm$browser$Debugger$Overlay$viewMessage, config, 'Warning', A2($elm$browser$Debugger$Overlay$viewReport, false, report), A2($elm$browser$Debugger$Overlay$Choose, 'Cancel', 'Import Anyway'));
        }
    });
    var $elm$browser$Debugger$Main$cornerView = function(model) {
        return A5($elm$browser$Debugger$Overlay$view, {
            exportHistory: $elm$browser$Debugger$Main$Export,
            importHistory: $elm$browser$Debugger$Main$Import,
            open: $elm$browser$Debugger$Main$Open,
            resume: $elm$browser$Debugger$Main$Resume,
            wrap: $elm$browser$Debugger$Main$OverlayMsg
        }, $elm$browser$Debugger$Main$isPaused(model.state), _Debugger_isOpen(model.popout), $elm$browser$Debugger$History$size(model.history), model.overlay);
    };
    var $elm$core$Dict$RBEmpty_elm_builtin = {
        $: 'RBEmpty_elm_builtin'
    };
    var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
    var $elm$core$Set$foldr = F3(function(func, initialState, _v0) {
        var dict = _v0.a;
        return A3($elm$core$Dict$foldr, F3(function(key, _v1, state) {
            return A2(func, key, state);
        }), initialState, dict);
    });
    var $elm$browser$Debugger$Main$getCurrentModel = function(state) {
        if (state.$ === 'Running') {
            var model = state.a;
            return model;
        } else {
            var model = state.b;
            return model;
        }
    };
    var $elm$browser$Debugger$Main$getUserModel = function(model) {
        return $elm$browser$Debugger$Main$getCurrentModel(model.state);
    };
    var $elm$browser$Debugger$Main$initialWindowHeight = 420;
    var $elm$browser$Debugger$Main$initialWindowWidth = 900;
    var $elm$core$Dict$Black = {
        $: 'Black'
    };
    var $elm$core$Dict$RBNode_elm_builtin = F5(function(a, b, c, d, e) {
        return {
            $: 'RBNode_elm_builtin',
            a: a,
            b: b,
            c: c,
            d: d,
            e: e
        };
    });
    var $elm$core$Dict$Red = {
        $: 'Red'
    };
    var $elm$core$Dict$balance = F5(function(color, key, value, left, right) {
        if (right.$ === 'RBNode_elm_builtin' && right.a.$ === 'Red') {
            var _v1 = right.a;
            var rK = right.b;
            var rV = right.c;
            var rLeft = right.d;
            var rRight = right.e;
            if (left.$ === 'RBNode_elm_builtin' && left.a.$ === 'Red') {
                var _v3 = left.a;
                var lK = left.b;
                var lV = left.c;
                var lLeft = left.d;
                var lRight = left.e;
                return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
            } else return A5($elm$core$Dict$RBNode_elm_builtin, color, rK, rV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft), rRight);
        } else {
            if (left.$ === 'RBNode_elm_builtin' && left.a.$ === 'Red' && left.d.$ === 'RBNode_elm_builtin' && left.d.a.$ === 'Red') {
                var _v5 = left.a;
                var lK = left.b;
                var lV = left.c;
                var _v6 = left.d;
                var _v7 = _v6.a;
                var llK = _v6.b;
                var llV = _v6.c;
                var llLeft = _v6.d;
                var llRight = _v6.e;
                var lRight = left.e;
                return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
            } else return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
        }
    });
    var $elm$core$Basics$compare = _Utils_compare;
    var $elm$core$Dict$insertHelp = F3(function(key, value, dict) {
        if (dict.$ === 'RBEmpty_elm_builtin') return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
        else {
            var nColor = dict.a;
            var nKey = dict.b;
            var nValue = dict.c;
            var nLeft = dict.d;
            var nRight = dict.e;
            var _v1 = A2($elm$core$Basics$compare, key, nKey);
            switch(_v1.$){
                case 'LT':
                    return A5($elm$core$Dict$balance, nColor, nKey, nValue, A3($elm$core$Dict$insertHelp, key, value, nLeft), nRight);
                case 'EQ':
                    return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
                default:
                    return A5($elm$core$Dict$balance, nColor, nKey, nValue, nLeft, A3($elm$core$Dict$insertHelp, key, value, nRight));
            }
        }
    });
    var $elm$core$Dict$insert = F3(function(key, value, dict) {
        var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
        if (_v0.$ === 'RBNode_elm_builtin' && _v0.a.$ === 'Red') {
            var _v1 = _v0.a;
            var k = _v0.b;
            var v = _v0.c;
            var l = _v0.d;
            var r = _v0.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
        } else {
            var x = _v0;
            return x;
        }
    });
    var $elm$browser$Debugger$Main$cachedHistory = function(model) {
        var _v0 = model.state;
        if (_v0.$ === 'Running') return model.history;
        else {
            var history = _v0.e;
            return history;
        }
    };
    var $elm$virtual_dom$VirtualDom$node = function(tag) {
        return _VirtualDom_node(_VirtualDom_noScript(tag));
    };
    var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
    var $elm$browser$Debugger$Main$DragEnd = {
        $: 'DragEnd'
    };
    var $elm$browser$Debugger$Main$getDragStatus = function(layout) {
        if (layout.$ === 'Horizontal') {
            var status = layout.a;
            return status;
        } else {
            var status = layout.a;
            return status;
        }
    };
    var $elm$browser$Debugger$Main$Drag = function(a) {
        return {
            $: 'Drag',
            a: a
        };
    };
    var $elm$browser$Debugger$Main$DragInfo = F5(function(x, y, down, width, height) {
        return {
            down: down,
            height: height,
            width: width,
            x: x,
            y: y
        };
    });
    var $elm$json$Json$Decode$field = _Json_decodeField;
    var $elm$json$Json$Decode$at = F2(function(fields, decoder) {
        return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
    });
    var $elm$json$Json$Decode$float = _Json_decodeFloat;
    var $elm$browser$Debugger$Main$decodeDimension = function(field) {
        return A2($elm$json$Json$Decode$at, _List_fromArray([
            'currentTarget',
            'ownerDocument',
            'defaultView',
            field
        ]), $elm$json$Json$Decode$float);
    };
    var $elm$json$Json$Decode$int = _Json_decodeInt;
    var $elm$json$Json$Decode$map5 = _Json_map5;
    var $elm$browser$Debugger$Main$onMouseMove = A2($elm$html$Html$Events$on, 'mousemove', A2($elm$json$Json$Decode$map, $elm$browser$Debugger$Main$Drag, A6($elm$json$Json$Decode$map5, $elm$browser$Debugger$Main$DragInfo, A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float), A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float), A2($elm$json$Json$Decode$field, 'buttons', A2($elm$json$Json$Decode$map, function(v) {
        return v === 1;
    }, $elm$json$Json$Decode$int)), $elm$browser$Debugger$Main$decodeDimension('innerWidth'), $elm$browser$Debugger$Main$decodeDimension('innerHeight'))));
    var $elm$html$Html$Events$onMouseUp = function(msg) {
        return A2($elm$html$Html$Events$on, 'mouseup', $elm$json$Json$Decode$succeed(msg));
    };
    var $elm$browser$Debugger$Main$toDragListeners = function(layout) {
        var _v0 = $elm$browser$Debugger$Main$getDragStatus(layout);
        if (_v0.$ === 'Static') return _List_Nil;
        else return _List_fromArray([
            $elm$browser$Debugger$Main$onMouseMove,
            $elm$html$Html$Events$onMouseUp($elm$browser$Debugger$Main$DragEnd)
        ]);
    };
    var $elm$browser$Debugger$Main$toFlexDirection = function(layout) {
        if (layout.$ === 'Horizontal') return 'row';
        else return 'column-reverse';
    };
    var $elm$browser$Debugger$Main$DragStart = {
        $: 'DragStart'
    };
    var $elm$html$Html$Events$onMouseDown = function(msg) {
        return A2($elm$html$Html$Events$on, 'mousedown', $elm$json$Json$Decode$succeed(msg));
    };
    var $elm$browser$Debugger$Main$toPercent = function(fraction) {
        return $elm$core$String$fromFloat(100 * fraction) + '%';
    };
    var $elm$browser$Debugger$Main$viewDragZone = function(layout) {
        if (layout.$ === 'Horizontal') {
            var x = layout.b;
            return A2($elm$html$Html$div, _List_fromArray([
                A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
                A2($elm$html$Html$Attributes$style, 'top', '0'),
                A2($elm$html$Html$Attributes$style, 'left', $elm$browser$Debugger$Main$toPercent(x)),
                A2($elm$html$Html$Attributes$style, 'margin-left', '-5px'),
                A2($elm$html$Html$Attributes$style, 'width', '10px'),
                A2($elm$html$Html$Attributes$style, 'height', '100%'),
                A2($elm$html$Html$Attributes$style, 'cursor', 'col-resize'),
                $elm$html$Html$Events$onMouseDown($elm$browser$Debugger$Main$DragStart)
            ]), _List_Nil);
        } else {
            var y = layout.c;
            return A2($elm$html$Html$div, _List_fromArray([
                A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
                A2($elm$html$Html$Attributes$style, 'top', $elm$browser$Debugger$Main$toPercent(y)),
                A2($elm$html$Html$Attributes$style, 'left', '0'),
                A2($elm$html$Html$Attributes$style, 'margin-top', '-5px'),
                A2($elm$html$Html$Attributes$style, 'width', '100%'),
                A2($elm$html$Html$Attributes$style, 'height', '10px'),
                A2($elm$html$Html$Attributes$style, 'cursor', 'row-resize'),
                $elm$html$Html$Events$onMouseDown($elm$browser$Debugger$Main$DragStart)
            ]), _List_Nil);
        }
    };
    var $elm$browser$Debugger$Main$TweakExpandoModel = function(a) {
        return {
            $: 'TweakExpandoModel',
            a: a
        };
    };
    var $elm$browser$Debugger$Main$TweakExpandoMsg = function(a) {
        return {
            $: 'TweakExpandoMsg',
            a: a
        };
    };
    var $elm$browser$Debugger$Main$toExpandoPercents = function(layout) {
        if (layout.$ === 'Horizontal') {
            var x = layout.b;
            return _Utils_Tuple2($elm$browser$Debugger$Main$toPercent(1 - x), '100%');
        } else {
            var y = layout.c;
            return _Utils_Tuple2('100%', $elm$browser$Debugger$Main$toPercent(y));
        }
    };
    var $elm$browser$Debugger$Main$toMouseBlocker = function(layout) {
        var _v0 = $elm$browser$Debugger$Main$getDragStatus(layout);
        if (_v0.$ === 'Static') return 'auto';
        else return 'none';
    };
    var $elm$browser$Debugger$Expando$Field = F2(function(a, b) {
        return {
            $: 'Field',
            a: a,
            b: b
        };
    });
    var $elm$browser$Debugger$Expando$Index = F3(function(a, b, c) {
        return {
            $: 'Index',
            a: a,
            b: b,
            c: c
        };
    });
    var $elm$browser$Debugger$Expando$Key = {
        $: 'Key'
    };
    var $elm$browser$Debugger$Expando$None = {
        $: 'None'
    };
    var $elm$browser$Debugger$Expando$Toggle = {
        $: 'Toggle'
    };
    var $elm$browser$Debugger$Expando$Value = {
        $: 'Value'
    };
    var $elm$browser$Debugger$Expando$blue = A2($elm$html$Html$Attributes$style, 'color', 'rgb(28, 0, 207)');
    var $elm$core$Basics$composeL = F3(function(g, f, x) {
        return g(f(x));
    });
    var $elm$browser$Debugger$Expando$leftPad = function(maybeKey) {
        if (maybeKey.$ === 'Nothing') return _List_Nil;
        else return _List_fromArray([
            A2($elm$html$Html$Attributes$style, 'padding-left', '4ch')
        ]);
    };
    var $elm$browser$Debugger$Expando$makeArrow = function(arrow) {
        return A2($elm$html$Html$span, _List_fromArray([
            A2($elm$html$Html$Attributes$style, 'color', '#777'),
            A2($elm$html$Html$Attributes$style, 'padding-left', '2ch'),
            A2($elm$html$Html$Attributes$style, 'width', '2ch'),
            A2($elm$html$Html$Attributes$style, 'display', 'inline-block')
        ]), _List_fromArray([
            $elm$html$Html$text(arrow)
        ]));
    };
    var $elm$browser$Debugger$Expando$purple = A2($elm$html$Html$Attributes$style, 'color', 'rgb(136, 19, 145)');
    var $elm$browser$Debugger$Expando$lineStarter = F3(function(maybeKey, maybeIsClosed, description) {
        var arrow = function() {
            if (maybeIsClosed.$ === 'Nothing') return $elm$browser$Debugger$Expando$makeArrow('');
            else {
                if (maybeIsClosed.a) return $elm$browser$Debugger$Expando$makeArrow('▸');
                else return $elm$browser$Debugger$Expando$makeArrow('▾');
            }
        }();
        if (maybeKey.$ === 'Nothing') return A2($elm$core$List$cons, arrow, description);
        else {
            var key = maybeKey.a;
            return A2($elm$core$List$cons, arrow, A2($elm$core$List$cons, A2($elm$html$Html$span, _List_fromArray([
                $elm$browser$Debugger$Expando$purple
            ]), _List_fromArray([
                $elm$html$Html$text(key)
            ])), A2($elm$core$List$cons, $elm$html$Html$text(' = '), description)));
        }
    });
    var $elm$browser$Debugger$Expando$red = A2($elm$html$Html$Attributes$style, 'color', 'rgb(196, 26, 22)');
    var $elm$core$Tuple$second = function(_v0) {
        var y = _v0.b;
        return y;
    };
    var $elm$browser$Debugger$Expando$seqTypeToString = F2(function(n, seqType) {
        switch(seqType.$){
            case 'ListSeq':
                return 'List(' + ($elm$core$String$fromInt(n) + ')');
            case 'SetSeq':
                return 'Set(' + ($elm$core$String$fromInt(n) + ')');
            default:
                return 'Array(' + ($elm$core$String$fromInt(n) + ')');
        }
    });
    var $elm$core$String$slice = _String_slice;
    var $elm$core$String$left = F2(function(n, string) {
        return n < 1 ? '' : A3($elm$core$String$slice, 0, n, string);
    });
    var $elm$core$String$right = F2(function(n, string) {
        return n < 1 ? '' : A3($elm$core$String$slice, -n, $elm$core$String$length(string), string);
    });
    var $elm$browser$Debugger$Expando$elideMiddle = function(str) {
        return $elm$core$String$length(str) <= 18 ? str : A2($elm$core$String$left, 8, str) + ('...' + A2($elm$core$String$right, 8, str));
    };
    var $elm$core$Dict$isEmpty = function(dict) {
        if (dict.$ === 'RBEmpty_elm_builtin') return true;
        else return false;
    };
    var $elm$browser$Debugger$Expando$viewExtraTinyRecord = F3(function(length, starter, entries) {
        if (!entries.b) return _Utils_Tuple2(length + 1, _List_fromArray([
            $elm$html$Html$text('}')
        ]));
        else {
            var field = entries.a;
            var rest = entries.b;
            var nextLength = length + $elm$core$String$length(field) + 1;
            if (nextLength > 18) return _Utils_Tuple2(length + 2, _List_fromArray([
                $elm$html$Html$text('…}')
            ]));
            else {
                var _v1 = A3($elm$browser$Debugger$Expando$viewExtraTinyRecord, nextLength, ',', rest);
                var finalLength = _v1.a;
                var otherHtmls = _v1.b;
                return _Utils_Tuple2(finalLength, A2($elm$core$List$cons, $elm$html$Html$text(starter), A2($elm$core$List$cons, A2($elm$html$Html$span, _List_fromArray([
                    $elm$browser$Debugger$Expando$purple
                ]), _List_fromArray([
                    $elm$html$Html$text(field)
                ])), otherHtmls)));
            }
        }
    });
    var $elm$browser$Debugger$Expando$viewTinyHelp = function(str) {
        return _Utils_Tuple2($elm$core$String$length(str), _List_fromArray([
            $elm$html$Html$text(str)
        ]));
    };
    var $elm$core$Maybe$withDefault = F2(function(_default, maybe) {
        if (maybe.$ === 'Just') {
            var value = maybe.a;
            return value;
        } else return _default;
    });
    var $elm$browser$Debugger$Expando$viewExtraTiny = function(value) {
        if (value.$ === 'Record') {
            var record = value.b;
            return A3($elm$browser$Debugger$Expando$viewExtraTinyRecord, 0, '{', $elm$core$Dict$keys(record));
        } else return $elm$browser$Debugger$Expando$viewTiny(value);
    };
    var $elm$browser$Debugger$Expando$viewTiny = function(value) {
        switch(value.$){
            case 'S':
                var stringRep = value.a;
                var str = $elm$browser$Debugger$Expando$elideMiddle(stringRep);
                return _Utils_Tuple2($elm$core$String$length(str), _List_fromArray([
                    A2($elm$html$Html$span, _List_fromArray([
                        $elm$browser$Debugger$Expando$red
                    ]), _List_fromArray([
                        $elm$html$Html$text(str)
                    ]))
                ]));
            case 'Primitive':
                var stringRep = value.a;
                return _Utils_Tuple2($elm$core$String$length(stringRep), _List_fromArray([
                    A2($elm$html$Html$span, _List_fromArray([
                        $elm$browser$Debugger$Expando$blue
                    ]), _List_fromArray([
                        $elm$html$Html$text(stringRep)
                    ]))
                ]));
            case 'Sequence':
                var seqType = value.a;
                var valueList = value.c;
                return $elm$browser$Debugger$Expando$viewTinyHelp(A2($elm$browser$Debugger$Expando$seqTypeToString, $elm$core$List$length(valueList), seqType));
            case 'Dictionary':
                var keyValuePairs = value.b;
                return $elm$browser$Debugger$Expando$viewTinyHelp('Dict(' + ($elm$core$String$fromInt($elm$core$List$length(keyValuePairs)) + ')'));
            case 'Record':
                var record = value.b;
                return $elm$browser$Debugger$Expando$viewTinyRecord(record);
            default:
                if (!value.c.b) {
                    var maybeName = value.a;
                    return $elm$browser$Debugger$Expando$viewTinyHelp(A2($elm$core$Maybe$withDefault, 'Unit', maybeName));
                } else {
                    var maybeName = value.a;
                    var valueList = value.c;
                    return $elm$browser$Debugger$Expando$viewTinyHelp(function() {
                        if (maybeName.$ === 'Nothing') return 'Tuple(' + ($elm$core$String$fromInt($elm$core$List$length(valueList)) + ')');
                        else {
                            var name = maybeName.a;
                            return name + ' …';
                        }
                    }());
                }
        }
    };
    var $elm$browser$Debugger$Expando$viewTinyRecord = function(record) {
        return $elm$core$Dict$isEmpty(record) ? _Utils_Tuple2(2, _List_fromArray([
            $elm$html$Html$text('{}')
        ])) : A3($elm$browser$Debugger$Expando$viewTinyRecordHelp, 0, '{ ', $elm$core$Dict$toList(record));
    };
    var $elm$browser$Debugger$Expando$viewTinyRecordHelp = F3(function(length, starter, entries) {
        if (!entries.b) return _Utils_Tuple2(length + 2, _List_fromArray([
            $elm$html$Html$text(' }')
        ]));
        else {
            var _v1 = entries.a;
            var field = _v1.a;
            var value = _v1.b;
            var rest = entries.b;
            var fieldLen = $elm$core$String$length(field);
            var _v2 = $elm$browser$Debugger$Expando$viewExtraTiny(value);
            var valueLen = _v2.a;
            var valueHtmls = _v2.b;
            var newLength = length + fieldLen + valueLen + 5;
            if (newLength > 60) return _Utils_Tuple2(length + 4, _List_fromArray([
                $elm$html$Html$text(', … }')
            ]));
            else {
                var _v3 = A3($elm$browser$Debugger$Expando$viewTinyRecordHelp, newLength, ', ', rest);
                var finalLength = _v3.a;
                var otherHtmls = _v3.b;
                return _Utils_Tuple2(finalLength, A2($elm$core$List$cons, $elm$html$Html$text(starter), A2($elm$core$List$cons, A2($elm$html$Html$span, _List_fromArray([
                    $elm$browser$Debugger$Expando$purple
                ]), _List_fromArray([
                    $elm$html$Html$text(field)
                ])), A2($elm$core$List$cons, $elm$html$Html$text(' = '), A2($elm$core$List$cons, A2($elm$html$Html$span, _List_Nil, valueHtmls), otherHtmls)))));
            }
        }
    });
    var $elm$browser$Debugger$Expando$view = F2(function(maybeKey, expando) {
        switch(expando.$){
            case 'S':
                var stringRep = expando.a;
                return A2($elm$html$Html$div, $elm$browser$Debugger$Expando$leftPad(maybeKey), A3($elm$browser$Debugger$Expando$lineStarter, maybeKey, $elm$core$Maybe$Nothing, _List_fromArray([
                    A2($elm$html$Html$span, _List_fromArray([
                        $elm$browser$Debugger$Expando$red
                    ]), _List_fromArray([
                        $elm$html$Html$text(stringRep)
                    ]))
                ])));
            case 'Primitive':
                var stringRep = expando.a;
                return A2($elm$html$Html$div, $elm$browser$Debugger$Expando$leftPad(maybeKey), A3($elm$browser$Debugger$Expando$lineStarter, maybeKey, $elm$core$Maybe$Nothing, _List_fromArray([
                    A2($elm$html$Html$span, _List_fromArray([
                        $elm$browser$Debugger$Expando$blue
                    ]), _List_fromArray([
                        $elm$html$Html$text(stringRep)
                    ]))
                ])));
            case 'Sequence':
                var seqType = expando.a;
                var isClosed = expando.b;
                var valueList = expando.c;
                return A4($elm$browser$Debugger$Expando$viewSequence, maybeKey, seqType, isClosed, valueList);
            case 'Dictionary':
                var isClosed = expando.a;
                var keyValuePairs = expando.b;
                return A3($elm$browser$Debugger$Expando$viewDictionary, maybeKey, isClosed, keyValuePairs);
            case 'Record':
                var isClosed = expando.a;
                var valueDict = expando.b;
                return A3($elm$browser$Debugger$Expando$viewRecord, maybeKey, isClosed, valueDict);
            default:
                var maybeName = expando.a;
                var isClosed = expando.b;
                var valueList = expando.c;
                return A4($elm$browser$Debugger$Expando$viewConstructor, maybeKey, maybeName, isClosed, valueList);
        }
    });
    var $elm$browser$Debugger$Expando$viewConstructor = F4(function(maybeKey, maybeName, isClosed, valueList) {
        var tinyArgs = A2($elm$core$List$map, A2($elm$core$Basics$composeL, $elm$core$Tuple$second, $elm$browser$Debugger$Expando$viewExtraTiny), valueList);
        var description = function() {
            var _v7 = _Utils_Tuple2(maybeName, tinyArgs);
            if (_v7.a.$ === 'Nothing') {
                if (!_v7.b.b) {
                    var _v8 = _v7.a;
                    return _List_fromArray([
                        $elm$html$Html$text('()')
                    ]);
                } else {
                    var _v9 = _v7.a;
                    var _v10 = _v7.b;
                    var x = _v10.a;
                    var xs = _v10.b;
                    return A2($elm$core$List$cons, $elm$html$Html$text('( '), A2($elm$core$List$cons, A2($elm$html$Html$span, _List_Nil, x), A3($elm$core$List$foldr, F2(function(args, rest) {
                        return A2($elm$core$List$cons, $elm$html$Html$text(', '), A2($elm$core$List$cons, A2($elm$html$Html$span, _List_Nil, args), rest));
                    }), _List_fromArray([
                        $elm$html$Html$text(' )')
                    ]), xs)));
                }
            } else if (!_v7.b.b) {
                var name = _v7.a.a;
                return _List_fromArray([
                    $elm$html$Html$text(name)
                ]);
            } else {
                var name = _v7.a.a;
                var _v11 = _v7.b;
                var x = _v11.a;
                var xs = _v11.b;
                return A2($elm$core$List$cons, $elm$html$Html$text(name + ' '), A2($elm$core$List$cons, A2($elm$html$Html$span, _List_Nil, x), A3($elm$core$List$foldr, F2(function(args, rest) {
                    return A2($elm$core$List$cons, $elm$html$Html$text(' '), A2($elm$core$List$cons, A2($elm$html$Html$span, _List_Nil, args), rest));
                }), _List_Nil, xs)));
            }
        }();
        var _v4 = function() {
            if (!valueList.b) return _Utils_Tuple2($elm$core$Maybe$Nothing, A2($elm$html$Html$div, _List_Nil, _List_Nil));
            else {
                if (!valueList.b.b) {
                    var entry = valueList.a;
                    switch(entry.$){
                        case 'S':
                            return _Utils_Tuple2($elm$core$Maybe$Nothing, A2($elm$html$Html$div, _List_Nil, _List_Nil));
                        case 'Primitive':
                            return _Utils_Tuple2($elm$core$Maybe$Nothing, A2($elm$html$Html$div, _List_Nil, _List_Nil));
                        case 'Sequence':
                            var subValueList = entry.c;
                            return _Utils_Tuple2($elm$core$Maybe$Just(isClosed), isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2($elm$html$Html$map, A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0), $elm$browser$Debugger$Expando$viewSequenceOpen(subValueList)));
                        case 'Dictionary':
                            var keyValuePairs = entry.b;
                            return _Utils_Tuple2($elm$core$Maybe$Just(isClosed), isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2($elm$html$Html$map, A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0), $elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)));
                        case 'Record':
                            var record = entry.b;
                            return _Utils_Tuple2($elm$core$Maybe$Just(isClosed), isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2($elm$html$Html$map, A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0), $elm$browser$Debugger$Expando$viewRecordOpen(record)));
                        default:
                            var subValueList = entry.c;
                            return _Utils_Tuple2($elm$core$Maybe$Just(isClosed), isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2($elm$html$Html$map, A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0), $elm$browser$Debugger$Expando$viewConstructorOpen(subValueList)));
                    }
                } else return _Utils_Tuple2($elm$core$Maybe$Just(isClosed), isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : $elm$browser$Debugger$Expando$viewConstructorOpen(valueList));
            }
        }();
        var maybeIsClosed = _v4.a;
        var openHtml = _v4.b;
        return A2($elm$html$Html$div, $elm$browser$Debugger$Expando$leftPad(maybeKey), _List_fromArray([
            A2($elm$html$Html$div, _List_fromArray([
                $elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
            ]), A3($elm$browser$Debugger$Expando$lineStarter, maybeKey, maybeIsClosed, description)),
            openHtml
        ]));
    });
    var $elm$browser$Debugger$Expando$viewConstructorEntry = F2(function(index, value) {
        return A2($elm$html$Html$map, A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, index), A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Just($elm$core$String$fromInt(index)), value));
    });
    var $elm$browser$Debugger$Expando$viewConstructorOpen = function(valueList) {
        return A2($elm$html$Html$div, _List_Nil, A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewConstructorEntry, valueList));
    };
    var $elm$browser$Debugger$Expando$viewDictionary = F3(function(maybeKey, isClosed, keyValuePairs) {
        var starter = 'Dict(' + ($elm$core$String$fromInt($elm$core$List$length(keyValuePairs)) + ')');
        return A2($elm$html$Html$div, $elm$browser$Debugger$Expando$leftPad(maybeKey), _List_fromArray([
            A2($elm$html$Html$div, _List_fromArray([
                $elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
            ]), A3($elm$browser$Debugger$Expando$lineStarter, maybeKey, $elm$core$Maybe$Just(isClosed), _List_fromArray([
                $elm$html$Html$text(starter)
            ]))),
            isClosed ? $elm$html$Html$text('') : $elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)
        ]));
    });
    var $elm$browser$Debugger$Expando$viewDictionaryEntry = F2(function(index, _v2) {
        var key = _v2.a;
        var value = _v2.b;
        switch(key.$){
            case 'S':
                var stringRep = key.a;
                return A2($elm$html$Html$map, A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index), A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Just(stringRep), value));
            case 'Primitive':
                var stringRep = key.a;
                return A2($elm$html$Html$map, A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index), A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Just(stringRep), value));
            default:
                return A2($elm$html$Html$div, _List_Nil, _List_fromArray([
                    A2($elm$html$Html$map, A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Key, index), A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Just('key'), key)),
                    A2($elm$html$Html$map, A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index), A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Just('value'), value))
                ]));
        }
    });
    var $elm$browser$Debugger$Expando$viewDictionaryOpen = function(keyValuePairs) {
        return A2($elm$html$Html$div, _List_Nil, A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewDictionaryEntry, keyValuePairs));
    };
    var $elm$browser$Debugger$Expando$viewRecord = F3(function(maybeKey, isClosed, record) {
        var _v1 = isClosed ? _Utils_Tuple3($elm$browser$Debugger$Expando$viewTinyRecord(record).b, $elm$html$Html$text(''), $elm$html$Html$text('')) : _Utils_Tuple3(_List_fromArray([
            $elm$html$Html$text('{')
        ]), $elm$browser$Debugger$Expando$viewRecordOpen(record), A2($elm$html$Html$div, $elm$browser$Debugger$Expando$leftPad($elm$core$Maybe$Just(_Utils_Tuple0)), _List_fromArray([
            $elm$html$Html$text('}')
        ])));
        var start = _v1.a;
        var middle = _v1.b;
        var end = _v1.c;
        return A2($elm$html$Html$div, $elm$browser$Debugger$Expando$leftPad(maybeKey), _List_fromArray([
            A2($elm$html$Html$div, _List_fromArray([
                $elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
            ]), A3($elm$browser$Debugger$Expando$lineStarter, maybeKey, $elm$core$Maybe$Just(isClosed), start)),
            middle,
            end
        ]));
    });
    var $elm$browser$Debugger$Expando$viewRecordEntry = function(_v0) {
        var field = _v0.a;
        var value = _v0.b;
        return A2($elm$html$Html$map, $elm$browser$Debugger$Expando$Field(field), A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Just(field), value));
    };
    var $elm$browser$Debugger$Expando$viewRecordOpen = function(record) {
        return A2($elm$html$Html$div, _List_Nil, A2($elm$core$List$map, $elm$browser$Debugger$Expando$viewRecordEntry, $elm$core$Dict$toList(record)));
    };
    var $elm$browser$Debugger$Expando$viewSequence = F4(function(maybeKey, seqType, isClosed, valueList) {
        var starter = A2($elm$browser$Debugger$Expando$seqTypeToString, $elm$core$List$length(valueList), seqType);
        return A2($elm$html$Html$div, $elm$browser$Debugger$Expando$leftPad(maybeKey), _List_fromArray([
            A2($elm$html$Html$div, _List_fromArray([
                $elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
            ]), A3($elm$browser$Debugger$Expando$lineStarter, maybeKey, $elm$core$Maybe$Just(isClosed), _List_fromArray([
                $elm$html$Html$text(starter)
            ]))),
            isClosed ? $elm$html$Html$text('') : $elm$browser$Debugger$Expando$viewSequenceOpen(valueList)
        ]));
    });
    var $elm$browser$Debugger$Expando$viewSequenceOpen = function(values) {
        return A2($elm$html$Html$div, _List_Nil, A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewConstructorEntry, values));
    };
    var $elm$browser$Debugger$Main$viewExpando = F3(function(expandoMsg, expandoModel, layout) {
        var block = $elm$browser$Debugger$Main$toMouseBlocker(layout);
        var _v0 = $elm$browser$Debugger$Main$toExpandoPercents(layout);
        var w = _v0.a;
        var h = _v0.b;
        return A2($elm$html$Html$div, _List_fromArray([
            A2($elm$html$Html$Attributes$style, 'display', 'block'),
            A2($elm$html$Html$Attributes$style, 'width', 'calc(' + (w + ' - 4em)')),
            A2($elm$html$Html$Attributes$style, 'height', 'calc(' + (h + ' - 4em)')),
            A2($elm$html$Html$Attributes$style, 'padding', '2em'),
            A2($elm$html$Html$Attributes$style, 'margin', '0'),
            A2($elm$html$Html$Attributes$style, 'overflow', 'auto'),
            A2($elm$html$Html$Attributes$style, 'pointer-events', block),
            A2($elm$html$Html$Attributes$style, '-webkit-user-select', block),
            A2($elm$html$Html$Attributes$style, '-moz-user-select', block),
            A2($elm$html$Html$Attributes$style, '-ms-user-select', block),
            A2($elm$html$Html$Attributes$style, 'user-select', block)
        ]), _List_fromArray([
            A2($elm$html$Html$div, _List_fromArray([
                A2($elm$html$Html$Attributes$style, 'color', '#ccc'),
                A2($elm$html$Html$Attributes$style, 'padding', '0 0 1em 0')
            ]), _List_fromArray([
                $elm$html$Html$text('-- MESSAGE')
            ])),
            A2($elm$html$Html$map, $elm$browser$Debugger$Main$TweakExpandoMsg, A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Nothing, expandoMsg)),
            A2($elm$html$Html$div, _List_fromArray([
                A2($elm$html$Html$Attributes$style, 'color', '#ccc'),
                A2($elm$html$Html$Attributes$style, 'padding', '1em 0')
            ]), _List_fromArray([
                $elm$html$Html$text('-- MODEL')
            ])),
            A2($elm$html$Html$map, $elm$browser$Debugger$Main$TweakExpandoModel, A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Nothing, expandoModel))
        ]));
    });
    var $elm$browser$Debugger$Main$Jump = function(a) {
        return {
            $: 'Jump',
            a: a
        };
    };
    var $elm$virtual_dom$VirtualDom$lazy = _VirtualDom_lazy;
    var $elm$html$Html$Lazy$lazy = $elm$virtual_dom$VirtualDom$lazy;
    var $elm$browser$Debugger$Main$toHistoryPercents = function(layout) {
        if (layout.$ === 'Horizontal') {
            var x = layout.b;
            return _Utils_Tuple2($elm$browser$Debugger$Main$toPercent(x), '100%');
        } else {
            var y = layout.c;
            return _Utils_Tuple2('100%', $elm$browser$Debugger$Main$toPercent(1 - y));
        }
    };
    var $elm$virtual_dom$VirtualDom$lazy3 = _VirtualDom_lazy3;
    var $elm$html$Html$Lazy$lazy3 = $elm$virtual_dom$VirtualDom$lazy3;
    var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
    var $elm$browser$Debugger$History$idForMessageIndex = function(index) {
        return 'msg-' + $elm$core$String$fromInt(index);
    };
    var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
    var $elm$browser$Debugger$History$viewMessage = F3(function(currentIndex, index, msg) {
        var messageName = _Debugger_messageToString(msg);
        var className = _Utils_eq(currentIndex, index) ? 'elm-debugger-entry elm-debugger-entry-selected' : 'elm-debugger-entry';
        return A2($elm$html$Html$div, _List_fromArray([
            $elm$html$Html$Attributes$id($elm$browser$Debugger$History$idForMessageIndex(index)),
            $elm$html$Html$Attributes$class(className),
            $elm$html$Html$Events$onClick(index)
        ]), _List_fromArray([
            A2($elm$html$Html$span, _List_fromArray([
                $elm$html$Html$Attributes$title(messageName),
                $elm$html$Html$Attributes$class('elm-debugger-entry-content')
            ]), _List_fromArray([
                $elm$html$Html$text(messageName)
            ])),
            A2($elm$html$Html$span, _List_fromArray([
                $elm$html$Html$Attributes$class('elm-debugger-entry-index')
            ]), _List_fromArray([
                $elm$html$Html$text($elm$core$String$fromInt(index))
            ]))
        ]));
    });
    var $elm$browser$Debugger$History$consMsg = F3(function(currentIndex, msg, _v0) {
        var index = _v0.a;
        var rest = _v0.b;
        return _Utils_Tuple2(index + 1, A2($elm$core$List$cons, _Utils_Tuple2($elm$core$String$fromInt(index), A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewMessage, currentIndex, index, msg)), rest));
    });
    var $elm$core$Array$length = function(_v0) {
        var len = _v0.a;
        return len;
    };
    var $elm$core$Basics$neq = _Utils_notEqual;
    var $elm$virtual_dom$VirtualDom$keyedNode = function(tag) {
        return _VirtualDom_keyedNode(_VirtualDom_noScript(tag));
    };
    var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
    var $elm$browser$Debugger$History$maxSnapshotSize = 31;
    var $elm$browser$Debugger$History$showMoreButton = function(numMessages) {
        var nextIndex = numMessages - 1 - $elm$browser$Debugger$History$maxSnapshotSize * 2;
        var labelText = 'View more messages';
        return A2($elm$html$Html$div, _List_fromArray([
            $elm$html$Html$Attributes$class('elm-debugger-entry'),
            $elm$html$Html$Events$onClick(nextIndex)
        ]), _List_fromArray([
            A2($elm$html$Html$span, _List_fromArray([
                $elm$html$Html$Attributes$title(labelText),
                $elm$html$Html$Attributes$class('elm-debugger-entry-content')
            ]), _List_fromArray([
                $elm$html$Html$text(labelText)
            ])),
            A2($elm$html$Html$span, _List_fromArray([
                $elm$html$Html$Attributes$class('elm-debugger-entry-index')
            ]), _List_Nil)
        ]));
    };
    var $elm$browser$Debugger$History$styles = A3($elm$html$Html$node, 'style', _List_Nil, _List_fromArray([
        $elm$html$Html$text('\n\n.elm-debugger-entry {\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 8px;\n}\n\n.elm-debugger-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.elm-debugger-entry-selected, .elm-debugger-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.elm-debugger-entry-content {\n  width: calc(100% - 40px);\n  padding: 0 5px;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.elm-debugger-entry-index {\n  color: #666;\n  width: 40px;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n')
    ]));
    var $elm$core$Basics$ge = _Utils_ge;
    var $elm$browser$Debugger$History$viewSnapshot = F3(function(selectedIndex, index, _v0) {
        var messages = _v0.messages;
        return A3($elm$html$Html$Keyed$node, 'div', _List_Nil, A3($elm$core$Array$foldr, $elm$browser$Debugger$History$consMsg(selectedIndex), _Utils_Tuple2(index, _List_Nil), messages).b);
    });
    var $elm$browser$Debugger$History$consSnapshot = F3(function(selectedIndex, snapshot, _v0) {
        var index = _v0.a;
        var rest = _v0.b;
        var nextIndex = index + $elm$core$Array$length(snapshot.messages);
        var selectedIndexHelp = _Utils_cmp(nextIndex, selectedIndex) > 0 && _Utils_cmp(selectedIndex, index) > -1 ? selectedIndex : -1;
        return _Utils_Tuple2(nextIndex, A2($elm$core$List$cons, A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewSnapshot, selectedIndexHelp, index, snapshot), rest));
    });
    var $elm$core$Elm$JsArray$foldl = _JsArray_foldl;
    var $elm$core$Array$foldl = F3(function(func, baseCase, _v0) {
        var tree = _v0.c;
        var tail = _v0.d;
        var helper = F2(function(node, acc) {
            if (node.$ === 'SubTree') {
                var subTree = node.a;
                return A3($elm$core$Elm$JsArray$foldl, helper, acc, subTree);
            } else {
                var values = node.a;
                return A3($elm$core$Elm$JsArray$foldl, func, acc, values);
            }
        });
        return A3($elm$core$Elm$JsArray$foldl, func, A3($elm$core$Elm$JsArray$foldl, helper, baseCase, tree), tail);
    });
    var $elm$browser$Debugger$History$viewAllSnapshots = F3(function(selectedIndex, startIndex, snapshots) {
        return A2($elm$html$Html$div, _List_Nil, A3($elm$core$Array$foldl, $elm$browser$Debugger$History$consSnapshot(selectedIndex), _Utils_Tuple2(startIndex, _List_Nil), snapshots).b);
    });
    var $elm$core$Array$fromListHelp = F3(function(list, nodeList, nodeListSize) {
        fromListHelp: while(true){
            var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
            var jsArray = _v0.a;
            var remainingItems = _v0.b;
            if (_Utils_cmp($elm$core$Elm$JsArray$length(jsArray), $elm$core$Array$branchFactor) < 0) return A2($elm$core$Array$builderToArray, true, {
                nodeList: nodeList,
                nodeListSize: nodeListSize,
                tail: jsArray
            });
            else {
                var $temp$list = remainingItems, $temp$nodeList = A2($elm$core$List$cons, $elm$core$Array$Leaf(jsArray), nodeList), $temp$nodeListSize = nodeListSize + 1;
                list = $temp$list;
                nodeList = $temp$nodeList;
                nodeListSize = $temp$nodeListSize;
                continue fromListHelp;
            }
        }
    });
    var $elm$core$Array$fromList = function(list) {
        if (!list.b) return $elm$core$Array$empty;
        else return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
    };
    var $elm$core$Bitwise$and = _Bitwise_and;
    var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
    var $elm$core$Array$bitMask = 4294967295 >>> 32 - $elm$core$Array$shiftStep;
    var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
    var $elm$core$Array$getHelp = F3(function(shift, index, tree) {
        getHelp: while(true){
            var pos = $elm$core$Array$bitMask & index >>> shift;
            var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
            if (_v0.$ === 'SubTree') {
                var subTree = _v0.a;
                var $temp$shift = shift - $elm$core$Array$shiftStep, $temp$index = index, $temp$tree = subTree;
                shift = $temp$shift;
                index = $temp$index;
                tree = $temp$tree;
                continue getHelp;
            } else {
                var values = _v0.a;
                return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
            }
        }
    });
    var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
    var $elm$core$Array$tailIndex = function(len) {
        return len >>> 5 << 5;
    };
    var $elm$core$Array$get = F2(function(index, _v0) {
        var len = _v0.a;
        var startShift = _v0.b;
        var tree = _v0.c;
        var tail = _v0.d;
        return index < 0 || _Utils_cmp(index, len) > -1 ? $elm$core$Maybe$Nothing : _Utils_cmp(index, $elm$core$Array$tailIndex(len)) > -1 ? $elm$core$Maybe$Just(A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(A3($elm$core$Array$getHelp, startShift, index, tree));
    });
    var $elm$core$Elm$JsArray$appendN = _JsArray_appendN;
    var $elm$core$Elm$JsArray$slice = _JsArray_slice;
    var $elm$core$Array$appendHelpBuilder = F2(function(tail, builder) {
        var tailLen = $elm$core$Elm$JsArray$length(tail);
        var notAppended = $elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(builder.tail) - tailLen;
        var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, builder.tail, tail);
        return notAppended < 0 ? {
            nodeList: A2($elm$core$List$cons, $elm$core$Array$Leaf(appended), builder.nodeList),
            nodeListSize: builder.nodeListSize + 1,
            tail: A3($elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
        } : !notAppended ? {
            nodeList: A2($elm$core$List$cons, $elm$core$Array$Leaf(appended), builder.nodeList),
            nodeListSize: builder.nodeListSize + 1,
            tail: $elm$core$Elm$JsArray$empty
        } : {
            nodeList: builder.nodeList,
            nodeListSize: builder.nodeListSize,
            tail: appended
        };
    });
    var $elm$core$List$drop = F2(function(n, list) {
        drop: while(true){
            if (n <= 0) return list;
            else {
                if (!list.b) return list;
                else {
                    var x = list.a;
                    var xs = list.b;
                    var $temp$n = n - 1, $temp$list = xs;
                    n = $temp$n;
                    list = $temp$list;
                    continue drop;
                }
            }
        }
    });
    var $elm$core$Array$sliceLeft = F2(function(from, array) {
        var len = array.a;
        var tree = array.c;
        var tail = array.d;
        if (!from) return array;
        else {
            if (_Utils_cmp(from, $elm$core$Array$tailIndex(len)) > -1) return A4($elm$core$Array$Array_elm_builtin, len - from, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, A3($elm$core$Elm$JsArray$slice, from - $elm$core$Array$tailIndex(len), $elm$core$Elm$JsArray$length(tail), tail));
            else {
                var skipNodes = from / $elm$core$Array$branchFactor | 0;
                var helper = F2(function(node, acc) {
                    if (node.$ === 'SubTree') {
                        var subTree = node.a;
                        return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
                    } else {
                        var leaf = node.a;
                        return A2($elm$core$List$cons, leaf, acc);
                    }
                });
                var leafNodes = A3($elm$core$Elm$JsArray$foldr, helper, _List_fromArray([
                    tail
                ]), tree);
                var nodesToInsert = A2($elm$core$List$drop, skipNodes, leafNodes);
                if (!nodesToInsert.b) return $elm$core$Array$empty;
                else {
                    var head = nodesToInsert.a;
                    var rest = nodesToInsert.b;
                    var firstSlice = from - skipNodes * $elm$core$Array$branchFactor;
                    var initialBuilder = {
                        nodeList: _List_Nil,
                        nodeListSize: 0,
                        tail: A3($elm$core$Elm$JsArray$slice, firstSlice, $elm$core$Elm$JsArray$length(head), head)
                    };
                    return A2($elm$core$Array$builderToArray, true, A3($elm$core$List$foldl, $elm$core$Array$appendHelpBuilder, initialBuilder, rest));
                }
            }
        }
    });
    var $elm$core$Array$fetchNewTail = F4(function(shift, end, treeEnd, tree) {
        fetchNewTail: while(true){
            var pos = $elm$core$Array$bitMask & treeEnd >>> shift;
            var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
            if (_v0.$ === 'SubTree') {
                var sub = _v0.a;
                var $temp$shift = shift - $elm$core$Array$shiftStep, $temp$end = end, $temp$treeEnd = treeEnd, $temp$tree = sub;
                shift = $temp$shift;
                end = $temp$end;
                treeEnd = $temp$treeEnd;
                tree = $temp$tree;
                continue fetchNewTail;
            } else {
                var values = _v0.a;
                return A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, values);
            }
        }
    });
    var $elm$core$Array$hoistTree = F3(function(oldShift, newShift, tree) {
        hoistTree: while(true){
            if (_Utils_cmp(oldShift, newShift) < 1 || !$elm$core$Elm$JsArray$length(tree)) return tree;
            else {
                var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, 0, tree);
                if (_v0.$ === 'SubTree') {
                    var sub = _v0.a;
                    var $temp$oldShift = oldShift - $elm$core$Array$shiftStep, $temp$newShift = newShift, $temp$tree = sub;
                    oldShift = $temp$oldShift;
                    newShift = $temp$newShift;
                    tree = $temp$tree;
                    continue hoistTree;
                } else return tree;
            }
        }
    });
    var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
    var $elm$core$Array$sliceTree = F3(function(shift, endIdx, tree) {
        var lastPos = $elm$core$Array$bitMask & endIdx >>> shift;
        var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, lastPos, tree);
        if (_v0.$ === 'SubTree') {
            var sub = _v0.a;
            var newSub = A3($elm$core$Array$sliceTree, shift - $elm$core$Array$shiftStep, endIdx, sub);
            return !$elm$core$Elm$JsArray$length(newSub) ? A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree) : A3($elm$core$Elm$JsArray$unsafeSet, lastPos, $elm$core$Array$SubTree(newSub), A3($elm$core$Elm$JsArray$slice, 0, lastPos + 1, tree));
        } else return A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree);
    });
    var $elm$core$Array$sliceRight = F2(function(end, array) {
        var len = array.a;
        var startShift = array.b;
        var tree = array.c;
        var tail = array.d;
        if (_Utils_eq(end, len)) return array;
        else {
            if (_Utils_cmp(end, $elm$core$Array$tailIndex(len)) > -1) return A4($elm$core$Array$Array_elm_builtin, end, startShift, tree, A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, tail));
            else {
                var endIdx = $elm$core$Array$tailIndex(end);
                var depth = $elm$core$Basics$floor(A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, A2($elm$core$Basics$max, 1, endIdx - 1)));
                var newShift = A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep);
                return A4($elm$core$Array$Array_elm_builtin, end, newShift, A3($elm$core$Array$hoistTree, startShift, newShift, A3($elm$core$Array$sliceTree, startShift, endIdx, tree)), A4($elm$core$Array$fetchNewTail, startShift, end, endIdx, tree));
            }
        }
    });
    var $elm$core$Array$translateIndex = F2(function(index, _v0) {
        var len = _v0.a;
        var posIndex = index < 0 ? len + index : index;
        return posIndex < 0 ? 0 : _Utils_cmp(posIndex, len) > 0 ? len : posIndex;
    });
    var $elm$core$Array$slice = F3(function(from, to, array) {
        var correctTo = A2($elm$core$Array$translateIndex, to, array);
        var correctFrom = A2($elm$core$Array$translateIndex, from, array);
        return _Utils_cmp(correctFrom, correctTo) > 0 ? $elm$core$Array$empty : A2($elm$core$Array$sliceLeft, correctFrom, A2($elm$core$Array$sliceRight, correctTo, array));
    });
    var $elm$browser$Debugger$History$viewRecentSnapshots = F3(function(selectedIndex, recentMessagesNum, snapshots) {
        var messagesToFill = $elm$browser$Debugger$History$maxSnapshotSize - recentMessagesNum;
        var arrayLength = $elm$core$Array$length(snapshots);
        var snapshotsToRender = function() {
            var _v0 = _Utils_Tuple2(A2($elm$core$Array$get, arrayLength - 2, snapshots), A2($elm$core$Array$get, arrayLength - 1, snapshots));
            if (_v0.a.$ === 'Just' && _v0.b.$ === 'Just') {
                var fillerSnapshot = _v0.a.a;
                var recentSnapshot = _v0.b.a;
                return $elm$core$Array$fromList(_List_fromArray([
                    {
                        messages: A3($elm$core$Array$slice, 0, messagesToFill, fillerSnapshot.messages),
                        model: fillerSnapshot.model
                    },
                    recentSnapshot
                ]));
            } else return snapshots;
        }();
        var startingIndex = arrayLength * $elm$browser$Debugger$History$maxSnapshotSize - $elm$browser$Debugger$History$maxSnapshotSize - messagesToFill;
        return A3($elm$browser$Debugger$History$viewAllSnapshots, selectedIndex, startingIndex, snapshotsToRender);
    });
    var $elm$browser$Debugger$History$view = F2(function(maybeIndex, _v0) {
        var snapshots = _v0.snapshots;
        var recent = _v0.recent;
        var numMessages = _v0.numMessages;
        var recentMessageStartIndex = numMessages - recent.numMessages;
        var index = A2($elm$core$Maybe$withDefault, -1, maybeIndex);
        var newStuff = A3($elm$html$Html$Keyed$node, 'div', _List_Nil, A3($elm$core$List$foldr, $elm$browser$Debugger$History$consMsg(index), _Utils_Tuple2(recentMessageStartIndex, _List_Nil), recent.messages).b);
        var onlyRenderRecentMessages = !_Utils_eq(index, -1) || $elm$core$Array$length(snapshots) < 2;
        var oldStuff = onlyRenderRecentMessages ? A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewAllSnapshots, index, 0, snapshots) : A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewRecentSnapshots, index, recent.numMessages, snapshots);
        return A2($elm$html$Html$div, _List_fromArray([
            $elm$html$Html$Attributes$id('elm-debugger-sidebar'),
            A2($elm$html$Html$Attributes$style, 'width', '100%'),
            A2($elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
            A2($elm$html$Html$Attributes$style, 'height', 'calc(100% - 72px)')
        ]), A2($elm$core$List$cons, $elm$browser$Debugger$History$styles, A2($elm$core$List$cons, newStuff, A2($elm$core$List$cons, oldStuff, onlyRenderRecentMessages ? _List_Nil : _List_fromArray([
            $elm$browser$Debugger$History$showMoreButton(numMessages)
        ])))));
    });
    var $elm$browser$Debugger$Main$SwapLayout = {
        $: 'SwapLayout'
    };
    var $elm$browser$Debugger$Main$toHistoryIcon = function(layout) {
        if (layout.$ === 'Horizontal') return 'M13 1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M13 3h-10a1 1 0 0 0-1 1v5h12v-5a1 1 0 0 0-1-1z M14 10h-12v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z';
        else return 'M0 4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3z M2 4v8a1 1 0 0 0 1 1h2v-10h-2a1 1 0 0 0-1 1z M6 3v10h7a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z';
    };
    var $elm$browser$Debugger$Main$icon = function(path) {
        return A4($elm$virtual_dom$VirtualDom$nodeNS, 'http://www.w3.org/2000/svg', 'svg', _List_fromArray([
            A2($elm$virtual_dom$VirtualDom$attribute, 'viewBox', '0 0 16 16'),
            A2($elm$virtual_dom$VirtualDom$attribute, 'xmlns', 'http://www.w3.org/2000/svg'),
            A2($elm$virtual_dom$VirtualDom$attribute, 'fill', 'currentColor'),
            A2($elm$virtual_dom$VirtualDom$attribute, 'width', '16px'),
            A2($elm$virtual_dom$VirtualDom$attribute, 'height', '16px')
        ]), _List_fromArray([
            A4($elm$virtual_dom$VirtualDom$nodeNS, 'http://www.w3.org/2000/svg', 'path', _List_fromArray([
                A2($elm$virtual_dom$VirtualDom$attribute, 'd', path)
            ]), _List_Nil)
        ]));
    };
    var $elm$browser$Debugger$Main$viewHistoryButton = F3(function(label, msg, path) {
        return A2($elm$html$Html$button, _List_fromArray([
            A2($elm$html$Html$Attributes$style, 'display', 'flex'),
            A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
            A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
            A2($elm$html$Html$Attributes$style, 'background', 'none'),
            A2($elm$html$Html$Attributes$style, 'border', 'none'),
            A2($elm$html$Html$Attributes$style, 'color', 'inherit'),
            A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
            $elm$html$Html$Events$onClick(msg)
        ]), _List_fromArray([
            $elm$browser$Debugger$Main$icon(path),
            A2($elm$html$Html$span, _List_fromArray([
                A2($elm$html$Html$Attributes$style, 'padding-left', '6px')
            ]), _List_fromArray([
                $elm$html$Html$text(label)
            ]))
        ]));
    });
    var $elm$browser$Debugger$Main$viewHistoryOptions = function(layout) {
        return A2($elm$html$Html$div, _List_fromArray([
            A2($elm$html$Html$Attributes$style, 'width', '100%'),
            A2($elm$html$Html$Attributes$style, 'height', '36px'),
            A2($elm$html$Html$Attributes$style, 'display', 'flex'),
            A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
            A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
            A2($elm$html$Html$Attributes$style, 'justify-content', 'space-between'),
            A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
        ]), _List_fromArray([
            A3($elm$browser$Debugger$Main$viewHistoryButton, 'Swap Layout', $elm$browser$Debugger$Main$SwapLayout, $elm$browser$Debugger$Main$toHistoryIcon(layout)),
            A2($elm$html$Html$div, _List_fromArray([
                A2($elm$html$Html$Attributes$style, 'display', 'flex'),
                A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
                A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
                A2($elm$html$Html$Attributes$style, 'justify-content', 'space-between')
            ]), _List_fromArray([
                A3($elm$browser$Debugger$Main$viewHistoryButton, 'Import', $elm$browser$Debugger$Main$Import, 'M5 1a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1a1 1 0 0 1 2 0a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M10 2a1 1 0 0 0 -2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-3.586l4.293-4.293a1 1 0 0 0-1.414-1.414l-4.293 4.293z'),
                A3($elm$browser$Debugger$Main$viewHistoryButton, 'Export', $elm$browser$Debugger$Main$Export, 'M5 1a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1 a1 1 0 0 1 2 0a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M9 3a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-3.586l-5.293 5.293 a1 1 0 0 1-1.414-1.414l5.293 -5.293z')
            ]))
        ]));
    };
    var $elm$browser$Debugger$Main$SliderJump = function(a) {
        return {
            $: 'SliderJump',
            a: a
        };
    };
    var $elm$core$Basics$composeR = F3(function(f, g, x) {
        return g(f(x));
    });
    var $elm$html$Html$input = _VirtualDom_node('input');
    var $elm$browser$Debugger$Main$isPlaying = function(maybeIndex) {
        if (maybeIndex.$ === 'Nothing') return true;
        else return false;
    };
    var $elm$html$Html$Attributes$max = $elm$html$Html$Attributes$stringProperty('max');
    var $elm$html$Html$Attributes$min = $elm$html$Html$Attributes$stringProperty('min');
    var $elm$html$Html$Events$alwaysStop = function(x) {
        return _Utils_Tuple2(x, true);
    };
    var $elm$virtual_dom$VirtualDom$MayStopPropagation = function(a) {
        return {
            $: 'MayStopPropagation',
            a: a
        };
    };
    var $elm$html$Html$Events$stopPropagationOn = F2(function(event, decoder) {
        return A2($elm$virtual_dom$VirtualDom$on, event, $elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
    });
    var $elm$json$Json$Decode$string = _Json_decodeString;
    var $elm$html$Html$Events$targetValue = A2($elm$json$Json$Decode$at, _List_fromArray([
        'target',
        'value'
    ]), $elm$json$Json$Decode$string);
    var $elm$html$Html$Events$onInput = function(tagger) {
        return A2($elm$html$Html$Events$stopPropagationOn, 'input', A2($elm$json$Json$Decode$map, $elm$html$Html$Events$alwaysStop, A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
    };
    var $elm$core$String$toInt = _String_toInt;
    var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
    var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
    var $elm$browser$Debugger$Main$viewPlayButton = function(playing) {
        return A2($elm$html$Html$button, _List_fromArray([
            A2($elm$html$Html$Attributes$style, 'background', '#1293D8'),
            A2($elm$html$Html$Attributes$style, 'border', 'none'),
            A2($elm$html$Html$Attributes$style, 'color', 'white'),
            A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
            A2($elm$html$Html$Attributes$style, 'width', '36px'),
            A2($elm$html$Html$Attributes$style, 'height', '36px'),
            $elm$html$Html$Events$onClick($elm$browser$Debugger$Main$Resume)
        ]), _List_fromArray([
            playing ? $elm$browser$Debugger$Main$icon('M2 2h4v12h-4v-12z M10 2h4v12h-4v-12z') : $elm$browser$Debugger$Main$icon('M2 2l12 7l-12 7z')
        ]));
    };
    var $elm$browser$Debugger$Main$viewHistorySlider = F2(function(history, maybeIndex) {
        var lastIndex = $elm$browser$Debugger$History$size(history) - 1;
        var selectedIndex = A2($elm$core$Maybe$withDefault, lastIndex, maybeIndex);
        return A2($elm$html$Html$div, _List_fromArray([
            A2($elm$html$Html$Attributes$style, 'display', 'flex'),
            A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
            A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
            A2($elm$html$Html$Attributes$style, 'width', '100%'),
            A2($elm$html$Html$Attributes$style, 'height', '36px'),
            A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
        ]), _List_fromArray([
            A2($elm$html$Html$Lazy$lazy, $elm$browser$Debugger$Main$viewPlayButton, $elm$browser$Debugger$Main$isPlaying(maybeIndex)),
            A2($elm$html$Html$input, _List_fromArray([
                $elm$html$Html$Attributes$type_('range'),
                A2($elm$html$Html$Attributes$style, 'width', 'calc(100% - 56px)'),
                A2($elm$html$Html$Attributes$style, 'height', '36px'),
                A2($elm$html$Html$Attributes$style, 'margin', '0 10px'),
                $elm$html$Html$Attributes$min('0'),
                $elm$html$Html$Attributes$max($elm$core$String$fromInt(lastIndex)),
                $elm$html$Html$Attributes$value($elm$core$String$fromInt(selectedIndex)),
                $elm$html$Html$Events$onInput(A2($elm$core$Basics$composeR, $elm$core$String$toInt, A2($elm$core$Basics$composeR, $elm$core$Maybe$withDefault(lastIndex), $elm$browser$Debugger$Main$SliderJump)))
            ]), _List_Nil)
        ]));
    });
    var $elm$browser$Debugger$Main$viewHistory = F3(function(maybeIndex, history, layout) {
        var block = $elm$browser$Debugger$Main$toMouseBlocker(layout);
        var _v0 = $elm$browser$Debugger$Main$toHistoryPercents(layout);
        var w = _v0.a;
        var h = _v0.b;
        return A2($elm$html$Html$div, _List_fromArray([
            A2($elm$html$Html$Attributes$style, 'width', w),
            A2($elm$html$Html$Attributes$style, 'height', h),
            A2($elm$html$Html$Attributes$style, 'display', 'flex'),
            A2($elm$html$Html$Attributes$style, 'flex-direction', 'column'),
            A2($elm$html$Html$Attributes$style, 'color', '#DDDDDD'),
            A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)'),
            A2($elm$html$Html$Attributes$style, 'pointer-events', block),
            A2($elm$html$Html$Attributes$style, 'user-select', block)
        ]), _List_fromArray([
            A2($elm$browser$Debugger$Main$viewHistorySlider, history, maybeIndex),
            A2($elm$html$Html$map, $elm$browser$Debugger$Main$Jump, A2($elm$browser$Debugger$History$view, maybeIndex, history)),
            A2($elm$html$Html$Lazy$lazy, $elm$browser$Debugger$Main$viewHistoryOptions, layout)
        ]));
    });
    var $elm$browser$Debugger$Main$popoutView = function(model) {
        var maybeIndex = function() {
            var _v0 = model.state;
            if (_v0.$ === 'Running') return $elm$core$Maybe$Nothing;
            else {
                var index = _v0.a;
                return $elm$core$Maybe$Just(index);
            }
        }();
        var historyToRender = $elm$browser$Debugger$Main$cachedHistory(model);
        return A3($elm$html$Html$node, 'body', _Utils_ap($elm$browser$Debugger$Main$toDragListeners(model.layout), _List_fromArray([
            A2($elm$html$Html$Attributes$style, 'margin', '0'),
            A2($elm$html$Html$Attributes$style, 'padding', '0'),
            A2($elm$html$Html$Attributes$style, 'width', '100%'),
            A2($elm$html$Html$Attributes$style, 'height', '100%'),
            A2($elm$html$Html$Attributes$style, 'font-family', 'monospace'),
            A2($elm$html$Html$Attributes$style, 'display', 'flex'),
            A2($elm$html$Html$Attributes$style, 'flex-direction', $elm$browser$Debugger$Main$toFlexDirection(model.layout))
        ])), _List_fromArray([
            A3($elm$browser$Debugger$Main$viewHistory, maybeIndex, historyToRender, model.layout),
            $elm$browser$Debugger$Main$viewDragZone(model.layout),
            A3($elm$browser$Debugger$Main$viewExpando, model.expandoMsg, model.expandoModel, model.layout)
        ]));
    };
    var $elm$browser$Debugger$Overlay$BlockAll = {
        $: 'BlockAll'
    };
    var $elm$browser$Debugger$Overlay$toBlockerType = F2(function(isPaused, state) {
        switch(state.$){
            case 'None':
                return isPaused ? $elm$browser$Debugger$Overlay$BlockAll : $elm$browser$Debugger$Overlay$BlockNone;
            case 'BadMetadata':
                return $elm$browser$Debugger$Overlay$BlockMost;
            case 'BadImport':
                return $elm$browser$Debugger$Overlay$BlockMost;
            default:
                return $elm$browser$Debugger$Overlay$BlockMost;
        }
    });
    var $elm$browser$Debugger$Main$toBlockerType = function(model) {
        return A2($elm$browser$Debugger$Overlay$toBlockerType, $elm$browser$Debugger$Main$isPaused(model.state), model.overlay);
    };
    var $elm$browser$Debugger$Main$Horizontal = F3(function(a, b, c) {
        return {
            $: 'Horizontal',
            a: a,
            b: b,
            c: c
        };
    });
    var $elm$browser$Debugger$Main$Running = function(a) {
        return {
            $: 'Running',
            a: a
        };
    };
    var $elm$browser$Debugger$Main$Static = {
        $: 'Static'
    };
    var $elm$browser$Debugger$Metadata$Error = F2(function(message, problems) {
        return {
            message: message,
            problems: problems
        };
    });
    var $elm$json$Json$Decode$decodeValue = _Json_run;
    var $elm$browser$Debugger$Metadata$Metadata = F2(function(versions, types) {
        return {
            types: types,
            versions: versions
        };
    });
    var $elm$browser$Debugger$Metadata$Types = F3(function(message, aliases, unions) {
        return {
            aliases: aliases,
            message: message,
            unions: unions
        };
    });
    var $elm$browser$Debugger$Metadata$Alias = F2(function(args, tipe) {
        return {
            args: args,
            tipe: tipe
        };
    });
    var $elm$json$Json$Decode$list = _Json_decodeList;
    var $elm$browser$Debugger$Metadata$decodeAlias = A3($elm$json$Json$Decode$map2, $elm$browser$Debugger$Metadata$Alias, A2($elm$json$Json$Decode$field, 'args', $elm$json$Json$Decode$list($elm$json$Json$Decode$string)), A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$string));
    var $elm$browser$Debugger$Metadata$Union = F2(function(args, tags) {
        return {
            args: args,
            tags: tags
        };
    });
    var $elm$core$Dict$fromList = function(assocs) {
        return A3($elm$core$List$foldl, F2(function(_v0, dict) {
            var key = _v0.a;
            var value = _v0.b;
            return A3($elm$core$Dict$insert, key, value, dict);
        }), $elm$core$Dict$empty, assocs);
    };
    var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
    var $elm$json$Json$Decode$dict = function(decoder) {
        return A2($elm$json$Json$Decode$map, $elm$core$Dict$fromList, $elm$json$Json$Decode$keyValuePairs(decoder));
    };
    var $elm$browser$Debugger$Metadata$decodeUnion = A3($elm$json$Json$Decode$map2, $elm$browser$Debugger$Metadata$Union, A2($elm$json$Json$Decode$field, 'args', $elm$json$Json$Decode$list($elm$json$Json$Decode$string)), A2($elm$json$Json$Decode$field, 'tags', $elm$json$Json$Decode$dict($elm$json$Json$Decode$list($elm$json$Json$Decode$string))));
    var $elm$json$Json$Decode$map3 = _Json_map3;
    var $elm$browser$Debugger$Metadata$decodeTypes = A4($elm$json$Json$Decode$map3, $elm$browser$Debugger$Metadata$Types, A2($elm$json$Json$Decode$field, 'message', $elm$json$Json$Decode$string), A2($elm$json$Json$Decode$field, 'aliases', $elm$json$Json$Decode$dict($elm$browser$Debugger$Metadata$decodeAlias)), A2($elm$json$Json$Decode$field, 'unions', $elm$json$Json$Decode$dict($elm$browser$Debugger$Metadata$decodeUnion)));
    var $elm$browser$Debugger$Metadata$Versions = function(elm) {
        return {
            elm: elm
        };
    };
    var $elm$browser$Debugger$Metadata$decodeVersions = A2($elm$json$Json$Decode$map, $elm$browser$Debugger$Metadata$Versions, A2($elm$json$Json$Decode$field, 'elm', $elm$json$Json$Decode$string));
    var $elm$browser$Debugger$Metadata$decoder = A3($elm$json$Json$Decode$map2, $elm$browser$Debugger$Metadata$Metadata, A2($elm$json$Json$Decode$field, 'versions', $elm$browser$Debugger$Metadata$decodeVersions), A2($elm$json$Json$Decode$field, 'types', $elm$browser$Debugger$Metadata$decodeTypes));
    var $elm$browser$Debugger$Metadata$ProblemType = F2(function(name, problems) {
        return {
            name: name,
            problems: problems
        };
    });
    var $elm$core$List$maybeCons = F3(function(f, mx, xs) {
        var _v0 = f(mx);
        if (_v0.$ === 'Just') {
            var x = _v0.a;
            return A2($elm$core$List$cons, x, xs);
        } else return xs;
    });
    var $elm$core$List$filterMap = F2(function(f, xs) {
        return A3($elm$core$List$foldr, $elm$core$List$maybeCons(f), _List_Nil, xs);
    });
    var $elm$core$String$contains = _String_contains;
    var $elm$browser$Debugger$Metadata$hasProblem = F2(function(tipe, _v0) {
        var problem = _v0.a;
        var token = _v0.b;
        return A2($elm$core$String$contains, token, tipe) ? $elm$core$Maybe$Just(problem) : $elm$core$Maybe$Nothing;
    });
    var $elm$browser$Debugger$Metadata$Decoder = {
        $: 'Decoder'
    };
    var $elm$browser$Debugger$Metadata$Function = {
        $: 'Function'
    };
    var $elm$browser$Debugger$Metadata$Process = {
        $: 'Process'
    };
    var $elm$browser$Debugger$Metadata$Program = {
        $: 'Program'
    };
    var $elm$browser$Debugger$Metadata$Request = {
        $: 'Request'
    };
    var $elm$browser$Debugger$Metadata$Socket = {
        $: 'Socket'
    };
    var $elm$browser$Debugger$Metadata$Task = {
        $: 'Task'
    };
    var $elm$browser$Debugger$Metadata$VirtualDom = {
        $: 'VirtualDom'
    };
    var $elm$browser$Debugger$Metadata$problemTable = _List_fromArray([
        _Utils_Tuple2($elm$browser$Debugger$Metadata$Function, '->'),
        _Utils_Tuple2($elm$browser$Debugger$Metadata$Decoder, 'Json.Decode.Decoder'),
        _Utils_Tuple2($elm$browser$Debugger$Metadata$Task, 'Task.Task'),
        _Utils_Tuple2($elm$browser$Debugger$Metadata$Process, 'Process.Id'),
        _Utils_Tuple2($elm$browser$Debugger$Metadata$Socket, 'WebSocket.LowLevel.WebSocket'),
        _Utils_Tuple2($elm$browser$Debugger$Metadata$Request, 'Http.Request'),
        _Utils_Tuple2($elm$browser$Debugger$Metadata$Program, 'Platform.Program'),
        _Utils_Tuple2($elm$browser$Debugger$Metadata$VirtualDom, 'VirtualDom.Node'),
        _Utils_Tuple2($elm$browser$Debugger$Metadata$VirtualDom, 'VirtualDom.Attribute')
    ]);
    var $elm$browser$Debugger$Metadata$findProblems = function(tipe) {
        return A2($elm$core$List$filterMap, $elm$browser$Debugger$Metadata$hasProblem(tipe), $elm$browser$Debugger$Metadata$problemTable);
    };
    var $elm$browser$Debugger$Metadata$collectBadAliases = F3(function(name, _v0, list) {
        var tipe = _v0.tipe;
        var _v1 = $elm$browser$Debugger$Metadata$findProblems(tipe);
        if (!_v1.b) return list;
        else {
            var problems = _v1;
            return A2($elm$core$List$cons, A2($elm$browser$Debugger$Metadata$ProblemType, name, problems), list);
        }
    });
    var $elm$core$List$append = F2(function(xs, ys) {
        if (!ys.b) return xs;
        else return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
    });
    var $elm$core$List$concat = function(lists) {
        return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
    };
    var $elm$core$List$concatMap = F2(function(f, list) {
        return $elm$core$List$concat(A2($elm$core$List$map, f, list));
    });
    var $elm$core$Dict$values = function(dict) {
        return A3($elm$core$Dict$foldr, F3(function(key, value, valueList) {
            return A2($elm$core$List$cons, value, valueList);
        }), _List_Nil, dict);
    };
    var $elm$browser$Debugger$Metadata$collectBadUnions = F3(function(name, _v0, list) {
        var tags = _v0.tags;
        var _v1 = A2($elm$core$List$concatMap, $elm$browser$Debugger$Metadata$findProblems, $elm$core$List$concat($elm$core$Dict$values(tags)));
        if (!_v1.b) return list;
        else {
            var problems = _v1;
            return A2($elm$core$List$cons, A2($elm$browser$Debugger$Metadata$ProblemType, name, problems), list);
        }
    });
    var $elm$core$Dict$foldl = F3(function(func, acc, dict) {
        foldl: while(true){
            if (dict.$ === 'RBEmpty_elm_builtin') return acc;
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var $temp$func = func, $temp$acc = A3(func, key, value, A3($elm$core$Dict$foldl, func, acc, left)), $temp$dict = right;
                func = $temp$func;
                acc = $temp$acc;
                dict = $temp$dict;
                continue foldl;
            }
        }
    });
    var $elm$browser$Debugger$Metadata$isPortable = function(_v0) {
        var types = _v0.types;
        var badAliases = A3($elm$core$Dict$foldl, $elm$browser$Debugger$Metadata$collectBadAliases, _List_Nil, types.aliases);
        var _v1 = A3($elm$core$Dict$foldl, $elm$browser$Debugger$Metadata$collectBadUnions, badAliases, types.unions);
        if (!_v1.b) return $elm$core$Maybe$Nothing;
        else {
            var problems = _v1;
            return $elm$core$Maybe$Just(A2($elm$browser$Debugger$Metadata$Error, types.message, problems));
        }
    };
    var $elm$browser$Debugger$Metadata$decode = function(value) {
        var _v0 = A2($elm$json$Json$Decode$decodeValue, $elm$browser$Debugger$Metadata$decoder, value);
        if (_v0.$ === 'Err') return $elm$core$Result$Err(A2($elm$browser$Debugger$Metadata$Error, 'The compiler is generating bad metadata. This is a compiler bug!', _List_Nil));
        else {
            var metadata = _v0.a;
            var _v1 = $elm$browser$Debugger$Metadata$isPortable(metadata);
            if (_v1.$ === 'Nothing') return $elm$core$Result$Ok(metadata);
            else {
                var error = _v1.a;
                return $elm$core$Result$Err(error);
            }
        }
    };
    var $elm$browser$Debugger$History$History = F3(function(snapshots, recent, numMessages) {
        return {
            numMessages: numMessages,
            recent: recent,
            snapshots: snapshots
        };
    });
    var $elm$browser$Debugger$History$RecentHistory = F3(function(model, messages, numMessages) {
        return {
            messages: messages,
            model: model,
            numMessages: numMessages
        };
    });
    var $elm$browser$Debugger$History$empty = function(model) {
        return A3($elm$browser$Debugger$History$History, $elm$core$Array$empty, A3($elm$browser$Debugger$History$RecentHistory, model, _List_Nil, 0), 0);
    };
    var $elm$core$Dict$map = F2(function(func, dict) {
        if (dict.$ === 'RBEmpty_elm_builtin') return $elm$core$Dict$RBEmpty_elm_builtin;
        else {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, color, key, A2(func, key, value), A2($elm$core$Dict$map, func, left), A2($elm$core$Dict$map, func, right));
        }
    });
    var $elm$core$Dict$sizeHelp = F2(function(n, dict) {
        sizeHelp: while(true){
            if (dict.$ === 'RBEmpty_elm_builtin') return n;
            else {
                var left = dict.d;
                var right = dict.e;
                var $temp$n = A2($elm$core$Dict$sizeHelp, n + 1, right), $temp$dict = left;
                n = $temp$n;
                dict = $temp$dict;
                continue sizeHelp;
            }
        }
    });
    var $elm$core$Dict$size = function(dict) {
        return A2($elm$core$Dict$sizeHelp, 0, dict);
    };
    var $elm$browser$Debugger$Expando$initHelp = F2(function(isOuter, expando) {
        switch(expando.$){
            case 'S':
                return expando;
            case 'Primitive':
                return expando;
            case 'Sequence':
                var seqType = expando.a;
                var isClosed = expando.b;
                var items = expando.c;
                return isOuter ? A3($elm$browser$Debugger$Expando$Sequence, seqType, false, A2($elm$core$List$map, $elm$browser$Debugger$Expando$initHelp(false), items)) : $elm$core$List$length(items) <= 8 ? A3($elm$browser$Debugger$Expando$Sequence, seqType, false, items) : expando;
            case 'Dictionary':
                var isClosed = expando.a;
                var keyValuePairs = expando.b;
                return isOuter ? A2($elm$browser$Debugger$Expando$Dictionary, false, A2($elm$core$List$map, function(_v1) {
                    var k = _v1.a;
                    var v = _v1.b;
                    return _Utils_Tuple2(k, A2($elm$browser$Debugger$Expando$initHelp, false, v));
                }, keyValuePairs)) : $elm$core$List$length(keyValuePairs) <= 8 ? A2($elm$browser$Debugger$Expando$Dictionary, false, keyValuePairs) : expando;
            case 'Record':
                var isClosed = expando.a;
                var entries = expando.b;
                return isOuter ? A2($elm$browser$Debugger$Expando$Record, false, A2($elm$core$Dict$map, F2(function(_v2, v) {
                    return A2($elm$browser$Debugger$Expando$initHelp, false, v);
                }), entries)) : $elm$core$Dict$size(entries) <= 4 ? A2($elm$browser$Debugger$Expando$Record, false, entries) : expando;
            default:
                var maybeName = expando.a;
                var isClosed = expando.b;
                var args = expando.c;
                return isOuter ? A3($elm$browser$Debugger$Expando$Constructor, maybeName, false, A2($elm$core$List$map, $elm$browser$Debugger$Expando$initHelp(false), args)) : $elm$core$List$length(args) <= 4 ? A3($elm$browser$Debugger$Expando$Constructor, maybeName, false, args) : expando;
        }
    });
    var $elm$browser$Debugger$Expando$init = function(value) {
        return A2($elm$browser$Debugger$Expando$initHelp, true, _Debugger_init(value));
    };
    var $elm$core$Platform$Cmd$map = _Platform_map;
    var $elm$browser$Debugger$Overlay$None = {
        $: 'None'
    };
    var $elm$browser$Debugger$Overlay$none = $elm$browser$Debugger$Overlay$None;
    var $elm$browser$Debugger$Main$wrapInit = F4(function(metadata, popout, init, flags) {
        var _v0 = init(flags);
        var userModel = _v0.a;
        var userCommands = _v0.b;
        return _Utils_Tuple2({
            expandoModel: $elm$browser$Debugger$Expando$init(userModel),
            expandoMsg: $elm$browser$Debugger$Expando$init(_Utils_Tuple0),
            history: $elm$browser$Debugger$History$empty(userModel),
            layout: A3($elm$browser$Debugger$Main$Horizontal, $elm$browser$Debugger$Main$Static, 0.3, 0.5),
            metadata: $elm$browser$Debugger$Metadata$decode(metadata),
            overlay: $elm$browser$Debugger$Overlay$none,
            popout: popout,
            state: $elm$browser$Debugger$Main$Running(userModel)
        }, A2($elm$core$Platform$Cmd$map, $elm$browser$Debugger$Main$UserMsg, userCommands));
    });
    var $elm$browser$Debugger$Main$getLatestModel = function(state) {
        if (state.$ === 'Running') {
            var model = state.a;
            return model;
        } else {
            var model = state.c;
            return model;
        }
    };
    var $elm$core$Platform$Sub$map = _Platform_map;
    var $elm$browser$Debugger$Main$wrapSubs = F2(function(subscriptions, model) {
        return A2($elm$core$Platform$Sub$map, $elm$browser$Debugger$Main$UserMsg, subscriptions($elm$browser$Debugger$Main$getLatestModel(model.state)));
    });
    var $elm$browser$Debugger$Main$Moving = {
        $: 'Moving'
    };
    var $elm$browser$Debugger$Main$Paused = F5(function(a, b, c, d, e) {
        return {
            $: 'Paused',
            a: a,
            b: b,
            c: c,
            d: d,
            e: e
        };
    });
    var $elm$browser$Debugger$History$Snapshot = F2(function(model, messages) {
        return {
            messages: messages,
            model: model
        };
    });
    var $elm$browser$Debugger$History$addRecent = F3(function(msg, newModel, _v0) {
        var model = _v0.model;
        var messages = _v0.messages;
        var numMessages = _v0.numMessages;
        return _Utils_eq(numMessages, $elm$browser$Debugger$History$maxSnapshotSize) ? _Utils_Tuple2($elm$core$Maybe$Just(A2($elm$browser$Debugger$History$Snapshot, model, $elm$core$Array$fromList(messages))), A3($elm$browser$Debugger$History$RecentHistory, newModel, _List_fromArray([
            msg
        ]), 1)) : _Utils_Tuple2($elm$core$Maybe$Nothing, A3($elm$browser$Debugger$History$RecentHistory, model, A2($elm$core$List$cons, msg, messages), numMessages + 1));
    });
    var $elm$core$Elm$JsArray$push = _JsArray_push;
    var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
    var $elm$core$Array$insertTailInTree = F4(function(shift, index, tail, tree) {
        var pos = $elm$core$Array$bitMask & index >>> shift;
        if (_Utils_cmp(pos, $elm$core$Elm$JsArray$length(tree)) > -1) {
            if (shift === 5) return A2($elm$core$Elm$JsArray$push, $elm$core$Array$Leaf(tail), tree);
            else {
                var newSub = $elm$core$Array$SubTree(A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$empty));
                return A2($elm$core$Elm$JsArray$push, newSub, tree);
            }
        } else {
            var value = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
            if (value.$ === 'SubTree') {
                var subTree = value.a;
                var newSub = $elm$core$Array$SubTree(A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, subTree));
                return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
            } else {
                var newSub = $elm$core$Array$SubTree(A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$singleton(value)));
                return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
            }
        }
    });
    var $elm$core$Array$unsafeReplaceTail = F2(function(newTail, _v0) {
        var len = _v0.a;
        var startShift = _v0.b;
        var tree = _v0.c;
        var tail = _v0.d;
        var originalTailLen = $elm$core$Elm$JsArray$length(tail);
        var newTailLen = $elm$core$Elm$JsArray$length(newTail);
        var newArrayLen = len + (newTailLen - originalTailLen);
        if (_Utils_eq(newTailLen, $elm$core$Array$branchFactor)) {
            var overflow = _Utils_cmp(newArrayLen >>> $elm$core$Array$shiftStep, 1 << startShift) > 0;
            if (overflow) {
                var newShift = startShift + $elm$core$Array$shiftStep;
                var newTree = A4($elm$core$Array$insertTailInTree, newShift, len, newTail, $elm$core$Elm$JsArray$singleton($elm$core$Array$SubTree(tree)));
                return A4($elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, $elm$core$Elm$JsArray$empty);
            } else return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, A4($elm$core$Array$insertTailInTree, startShift, len, newTail, tree), $elm$core$Elm$JsArray$empty);
        } else return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
    });
    var $elm$core$Array$push = F2(function(a, array) {
        var tail = array.d;
        return A2($elm$core$Array$unsafeReplaceTail, A2($elm$core$Elm$JsArray$push, a, tail), array);
    });
    var $elm$browser$Debugger$History$add = F3(function(msg, model, _v0) {
        var snapshots = _v0.snapshots;
        var recent = _v0.recent;
        var numMessages = _v0.numMessages;
        var _v1 = A3($elm$browser$Debugger$History$addRecent, msg, model, recent);
        if (_v1.a.$ === 'Just') {
            var snapshot = _v1.a.a;
            var newRecent = _v1.b;
            return A3($elm$browser$Debugger$History$History, A2($elm$core$Array$push, snapshot, snapshots), newRecent, numMessages + 1);
        } else {
            var _v2 = _v1.a;
            var newRecent = _v1.b;
            return A3($elm$browser$Debugger$History$History, snapshots, newRecent, numMessages + 1);
        }
    });
    var $elm$core$Basics$always = F2(function(a, _v0) {
        return a;
    });
    var $elm$browser$Debugger$Overlay$BadImport = function(a) {
        return {
            $: 'BadImport',
            a: a
        };
    };
    var $elm$browser$Debugger$Overlay$RiskyImport = F2(function(a, b) {
        return {
            $: 'RiskyImport',
            a: a,
            b: b
        };
    });
    var $elm$browser$Debugger$Report$VersionChanged = F2(function(a, b) {
        return {
            $: 'VersionChanged',
            a: a,
            b: b
        };
    });
    var $elm$browser$Debugger$Report$MessageChanged = F2(function(a, b) {
        return {
            $: 'MessageChanged',
            a: a,
            b: b
        };
    });
    var $elm$browser$Debugger$Report$SomethingChanged = function(a) {
        return {
            $: 'SomethingChanged',
            a: a
        };
    };
    var $elm$browser$Debugger$Report$AliasChange = function(a) {
        return {
            $: 'AliasChange',
            a: a
        };
    };
    var $elm$browser$Debugger$Metadata$checkAlias = F4(function(name, old, _new, changes) {
        return _Utils_eq(old.tipe, _new.tipe) && _Utils_eq(old.args, _new.args) ? changes : A2($elm$core$List$cons, $elm$browser$Debugger$Report$AliasChange(name), changes);
    });
    var $elm$browser$Debugger$Report$UnionChange = F2(function(a, b) {
        return {
            $: 'UnionChange',
            a: a,
            b: b
        };
    });
    var $elm$browser$Debugger$Metadata$addTag = F3(function(tag, _v0, changes) {
        return _Utils_update(changes, {
            added: A2($elm$core$List$cons, tag, changes.added)
        });
    });
    var $elm$browser$Debugger$Metadata$checkTag = F4(function(tag, old, _new, changes) {
        return _Utils_eq(old, _new) ? changes : _Utils_update(changes, {
            changed: A2($elm$core$List$cons, tag, changes.changed)
        });
    });
    var $elm$browser$Debugger$Report$TagChanges = F4(function(removed, changed, added, argsMatch) {
        return {
            added: added,
            argsMatch: argsMatch,
            changed: changed,
            removed: removed
        };
    });
    var $elm$browser$Debugger$Report$emptyTagChanges = function(argsMatch) {
        return A4($elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, argsMatch);
    };
    var $elm$browser$Debugger$Report$hasTagChanges = function(tagChanges) {
        return _Utils_eq(tagChanges, A4($elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, true));
    };
    var $elm$core$Dict$merge = F6(function(leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
        var stepState = F3(function(rKey, rValue, _v0) {
            stepState: while(true){
                var list = _v0.a;
                var result = _v0.b;
                if (!list.b) return _Utils_Tuple2(list, A3(rightStep, rKey, rValue, result));
                else {
                    var _v2 = list.a;
                    var lKey = _v2.a;
                    var lValue = _v2.b;
                    var rest = list.b;
                    if (_Utils_cmp(lKey, rKey) < 0) {
                        var $temp$rKey = rKey, $temp$rValue = rValue, $temp$_v0 = _Utils_Tuple2(rest, A3(leftStep, lKey, lValue, result));
                        rKey = $temp$rKey;
                        rValue = $temp$rValue;
                        _v0 = $temp$_v0;
                        continue stepState;
                    } else {
                        if (_Utils_cmp(lKey, rKey) > 0) return _Utils_Tuple2(list, A3(rightStep, rKey, rValue, result));
                        else return _Utils_Tuple2(rest, A4(bothStep, lKey, lValue, rValue, result));
                    }
                }
            }
        });
        var _v3 = A3($elm$core$Dict$foldl, stepState, _Utils_Tuple2($elm$core$Dict$toList(leftDict), initialResult), rightDict);
        var leftovers = _v3.a;
        var intermediateResult = _v3.b;
        return A3($elm$core$List$foldl, F2(function(_v4, result) {
            var k = _v4.a;
            var v = _v4.b;
            return A3(leftStep, k, v, result);
        }), intermediateResult, leftovers);
    });
    var $elm$browser$Debugger$Metadata$removeTag = F3(function(tag, _v0, changes) {
        return _Utils_update(changes, {
            removed: A2($elm$core$List$cons, tag, changes.removed)
        });
    });
    var $elm$browser$Debugger$Metadata$checkUnion = F4(function(name, old, _new, changes) {
        var tagChanges = A6($elm$core$Dict$merge, $elm$browser$Debugger$Metadata$removeTag, $elm$browser$Debugger$Metadata$checkTag, $elm$browser$Debugger$Metadata$addTag, old.tags, _new.tags, $elm$browser$Debugger$Report$emptyTagChanges(_Utils_eq(old.args, _new.args)));
        return $elm$browser$Debugger$Report$hasTagChanges(tagChanges) ? changes : A2($elm$core$List$cons, A2($elm$browser$Debugger$Report$UnionChange, name, tagChanges), changes);
    });
    var $elm$browser$Debugger$Metadata$ignore = F3(function(key, value, report) {
        return report;
    });
    var $elm$browser$Debugger$Metadata$checkTypes = F2(function(old, _new) {
        return !_Utils_eq(old.message, _new.message) ? A2($elm$browser$Debugger$Report$MessageChanged, old.message, _new.message) : $elm$browser$Debugger$Report$SomethingChanged(A6($elm$core$Dict$merge, $elm$browser$Debugger$Metadata$ignore, $elm$browser$Debugger$Metadata$checkUnion, $elm$browser$Debugger$Metadata$ignore, old.unions, _new.unions, A6($elm$core$Dict$merge, $elm$browser$Debugger$Metadata$ignore, $elm$browser$Debugger$Metadata$checkAlias, $elm$browser$Debugger$Metadata$ignore, old.aliases, _new.aliases, _List_Nil)));
    });
    var $elm$browser$Debugger$Metadata$check = F2(function(old, _new) {
        return !_Utils_eq(old.versions.elm, _new.versions.elm) ? A2($elm$browser$Debugger$Report$VersionChanged, old.versions.elm, _new.versions.elm) : A2($elm$browser$Debugger$Metadata$checkTypes, old.types, _new.types);
    });
    var $elm$browser$Debugger$Report$CorruptHistory = {
        $: 'CorruptHistory'
    };
    var $elm$browser$Debugger$Overlay$corruptImport = $elm$browser$Debugger$Overlay$BadImport($elm$browser$Debugger$Report$CorruptHistory);
    var $elm$json$Json$Decode$decodeString = _Json_runOnString;
    var $elm$browser$Debugger$Report$Fine = {
        $: 'Fine'
    };
    var $elm$browser$Debugger$Report$Impossible = {
        $: 'Impossible'
    };
    var $elm$browser$Debugger$Report$Risky = {
        $: 'Risky'
    };
    var $elm$core$Basics$not = _Basics_not;
    var $elm$core$List$isEmpty = function(xs) {
        if (!xs.b) return true;
        else return false;
    };
    var $elm$browser$Debugger$Report$some = function(list) {
        return !$elm$core$List$isEmpty(list);
    };
    var $elm$browser$Debugger$Report$evaluateChange = function(change) {
        if (change.$ === 'AliasChange') return $elm$browser$Debugger$Report$Impossible;
        else {
            var removed = change.b.removed;
            var changed = change.b.changed;
            var added = change.b.added;
            var argsMatch = change.b.argsMatch;
            return !argsMatch || $elm$browser$Debugger$Report$some(changed) || $elm$browser$Debugger$Report$some(removed) ? $elm$browser$Debugger$Report$Impossible : $elm$browser$Debugger$Report$some(added) ? $elm$browser$Debugger$Report$Risky : $elm$browser$Debugger$Report$Fine;
        }
    };
    var $elm$browser$Debugger$Report$worstCase = F2(function(status, statusList) {
        worstCase: while(true){
            if (!statusList.b) return status;
            else switch(statusList.a.$){
                case 'Impossible':
                    var _v1 = statusList.a;
                    return $elm$browser$Debugger$Report$Impossible;
                case 'Risky':
                    var _v2 = statusList.a;
                    var rest = statusList.b;
                    var $temp$status = $elm$browser$Debugger$Report$Risky, $temp$statusList = rest;
                    status = $temp$status;
                    statusList = $temp$statusList;
                    continue worstCase;
                default:
                    var _v3 = statusList.a;
                    var rest = statusList.b;
                    var $temp$status = status, $temp$statusList = rest;
                    status = $temp$status;
                    statusList = $temp$statusList;
                    continue worstCase;
            }
        }
    });
    var $elm$browser$Debugger$Report$evaluate = function(report) {
        switch(report.$){
            case 'CorruptHistory':
                return $elm$browser$Debugger$Report$Impossible;
            case 'VersionChanged':
                return $elm$browser$Debugger$Report$Impossible;
            case 'MessageChanged':
                return $elm$browser$Debugger$Report$Impossible;
            default:
                var changes = report.a;
                return A2($elm$browser$Debugger$Report$worstCase, $elm$browser$Debugger$Report$Fine, A2($elm$core$List$map, $elm$browser$Debugger$Report$evaluateChange, changes));
        }
    };
    var $elm$json$Json$Decode$value = _Json_decodeValue;
    var $elm$browser$Debugger$Overlay$uploadDecoder = A3($elm$json$Json$Decode$map2, F2(function(x, y) {
        return _Utils_Tuple2(x, y);
    }), A2($elm$json$Json$Decode$field, 'metadata', $elm$browser$Debugger$Metadata$decoder), A2($elm$json$Json$Decode$field, 'history', $elm$json$Json$Decode$value));
    var $elm$browser$Debugger$Overlay$assessImport = F2(function(metadata, jsonString) {
        var _v0 = A2($elm$json$Json$Decode$decodeString, $elm$browser$Debugger$Overlay$uploadDecoder, jsonString);
        if (_v0.$ === 'Err') return $elm$core$Result$Err($elm$browser$Debugger$Overlay$corruptImport);
        else {
            var _v1 = _v0.a;
            var foreignMetadata = _v1.a;
            var rawHistory = _v1.b;
            var report = A2($elm$browser$Debugger$Metadata$check, foreignMetadata, metadata);
            var _v2 = $elm$browser$Debugger$Report$evaluate(report);
            switch(_v2.$){
                case 'Impossible':
                    return $elm$core$Result$Err($elm$browser$Debugger$Overlay$BadImport(report));
                case 'Risky':
                    return $elm$core$Result$Err(A2($elm$browser$Debugger$Overlay$RiskyImport, report, rawHistory));
                default:
                    return $elm$core$Result$Ok(rawHistory);
            }
        }
    });
    var $elm$core$Platform$Cmd$batch = _Platform_batch;
    var $elm$browser$Debugger$Overlay$close = F2(function(msg, state) {
        switch(state.$){
            case 'None':
                return $elm$core$Maybe$Nothing;
            case 'BadMetadata':
                return $elm$core$Maybe$Nothing;
            case 'BadImport':
                return $elm$core$Maybe$Nothing;
            default:
                var rawHistory = state.b;
                if (msg.$ === 'Cancel') return $elm$core$Maybe$Nothing;
                else return $elm$core$Maybe$Just(rawHistory);
        }
    });
    var $elm$browser$Debugger$History$elmToJs = A2($elm$core$Basics$composeR, _Json_wrap, _Debugger_unsafeCoerce);
    var $elm$browser$Debugger$History$encodeHelp = F2(function(snapshot, allMessages) {
        return A3($elm$core$Array$foldl, $elm$core$List$cons, allMessages, snapshot.messages);
    });
    var $elm$json$Json$Encode$list = F2(function(func, entries) {
        return _Json_wrap(A3($elm$core$List$foldl, _Json_addEntry(func), _Json_emptyArray(_Utils_Tuple0), entries));
    });
    var $elm$browser$Debugger$History$encode = function(_v0) {
        var snapshots = _v0.snapshots;
        var recent = _v0.recent;
        return A2($elm$json$Json$Encode$list, $elm$browser$Debugger$History$elmToJs, A3($elm$core$Array$foldr, $elm$browser$Debugger$History$encodeHelp, $elm$core$List$reverse(recent.messages), snapshots));
    };
    var $elm$json$Json$Encode$object = function(pairs) {
        return _Json_wrap(A3($elm$core$List$foldl, F2(function(_v0, obj) {
            var k = _v0.a;
            var v = _v0.b;
            return A3(_Json_addField, k, v, obj);
        }), _Json_emptyObject(_Utils_Tuple0), pairs));
    };
    var $elm$browser$Debugger$Metadata$encodeAlias = function(_v0) {
        var args = _v0.args;
        var tipe = _v0.tipe;
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2('args', A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, args)),
            _Utils_Tuple2('type', $elm$json$Json$Encode$string(tipe))
        ]));
    };
    var $elm$browser$Debugger$Metadata$encodeDict = F2(function(f, dict) {
        return $elm$json$Json$Encode$object($elm$core$Dict$toList(A2($elm$core$Dict$map, F2(function(key, value) {
            return f(value);
        }), dict)));
    });
    var $elm$browser$Debugger$Metadata$encodeUnion = function(_v0) {
        var args = _v0.args;
        var tags = _v0.tags;
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2('args', A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, args)),
            _Utils_Tuple2('tags', A2($elm$browser$Debugger$Metadata$encodeDict, $elm$json$Json$Encode$list($elm$json$Json$Encode$string), tags))
        ]));
    };
    var $elm$browser$Debugger$Metadata$encodeTypes = function(_v0) {
        var message = _v0.message;
        var unions = _v0.unions;
        var aliases = _v0.aliases;
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2('message', $elm$json$Json$Encode$string(message)),
            _Utils_Tuple2('aliases', A2($elm$browser$Debugger$Metadata$encodeDict, $elm$browser$Debugger$Metadata$encodeAlias, aliases)),
            _Utils_Tuple2('unions', A2($elm$browser$Debugger$Metadata$encodeDict, $elm$browser$Debugger$Metadata$encodeUnion, unions))
        ]));
    };
    var $elm$browser$Debugger$Metadata$encodeVersions = function(_v0) {
        var elm = _v0.elm;
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2('elm', $elm$json$Json$Encode$string(elm))
        ]));
    };
    var $elm$browser$Debugger$Metadata$encode = function(_v0) {
        var versions = _v0.versions;
        var types = _v0.types;
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2('versions', $elm$browser$Debugger$Metadata$encodeVersions(versions)),
            _Utils_Tuple2('types', $elm$browser$Debugger$Metadata$encodeTypes(types))
        ]));
    };
    var $elm$core$Basics$identity = function(x) {
        return x;
    };
    var $elm$core$Task$Perform = function(a) {
        return {
            $: 'Perform',
            a: a
        };
    };
    var $elm$core$Task$succeed = _Scheduler_succeed;
    var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
    var $elm$core$Task$andThen = _Scheduler_andThen;
    var $elm$core$Task$map = F2(function(func, taskA) {
        return A2($elm$core$Task$andThen, function(a) {
            return $elm$core$Task$succeed(func(a));
        }, taskA);
    });
    var $elm$core$Task$map2 = F3(function(func, taskA, taskB) {
        return A2($elm$core$Task$andThen, function(a) {
            return A2($elm$core$Task$andThen, function(b) {
                return $elm$core$Task$succeed(A2(func, a, b));
            }, taskB);
        }, taskA);
    });
    var $elm$core$Task$sequence = function(tasks) {
        return A3($elm$core$List$foldr, $elm$core$Task$map2($elm$core$List$cons), $elm$core$Task$succeed(_List_Nil), tasks);
    };
    var $elm$core$Platform$sendToApp = _Platform_sendToApp;
    var $elm$core$Task$spawnCmd = F2(function(router, _v0) {
        var task = _v0.a;
        return _Scheduler_spawn(A2($elm$core$Task$andThen, $elm$core$Platform$sendToApp(router), task));
    });
    var $elm$core$Task$onEffects = F3(function(router, commands, state) {
        return A2($elm$core$Task$map, function(_v0) {
            return _Utils_Tuple0;
        }, $elm$core$Task$sequence(A2($elm$core$List$map, $elm$core$Task$spawnCmd(router), commands)));
    });
    var $elm$core$Task$onSelfMsg = F3(function(_v0, _v1, _v2) {
        return $elm$core$Task$succeed(_Utils_Tuple0);
    });
    var $elm$core$Task$cmdMap = F2(function(tagger, _v0) {
        var task = _v0.a;
        return $elm$core$Task$Perform(A2($elm$core$Task$map, tagger, task));
    });
    _Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
    var $elm$core$Task$command = _Platform_leaf('Task');
    var $elm$core$Task$perform = F2(function(toMessage, task) {
        return $elm$core$Task$command($elm$core$Task$Perform(A2($elm$core$Task$map, toMessage, task)));
    });
    var $elm$browser$Debugger$Main$download = F2(function(metadata, history) {
        var historyLength = $elm$browser$Debugger$History$size(history);
        return A2($elm$core$Task$perform, function(_v0) {
            return $elm$browser$Debugger$Main$NoOp;
        }, A2(_Debugger_download, historyLength, _Json_unwrap($elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2('metadata', $elm$browser$Debugger$Metadata$encode(metadata)),
            _Utils_Tuple2('history', $elm$browser$Debugger$History$encode(history))
        ])))));
    });
    var $elm$browser$Debugger$Main$Vertical = F3(function(a, b, c) {
        return {
            $: 'Vertical',
            a: a,
            b: b,
            c: c
        };
    });
    var $elm$browser$Debugger$Main$drag = F2(function(info, layout) {
        if (layout.$ === 'Horizontal') {
            var status = layout.a;
            var y = layout.c;
            return A3($elm$browser$Debugger$Main$Horizontal, status, info.x / info.width, y);
        } else {
            var status = layout.a;
            var x = layout.b;
            return A3($elm$browser$Debugger$Main$Vertical, status, x, info.y / info.height);
        }
    });
    var $elm$browser$Debugger$History$Stepping = F2(function(a, b) {
        return {
            $: 'Stepping',
            a: a,
            b: b
        };
    });
    var $elm$browser$Debugger$History$Done = F2(function(a, b) {
        return {
            $: 'Done',
            a: a,
            b: b
        };
    });
    var $elm$browser$Debugger$History$getHelp = F3(function(update, msg, getResult) {
        if (getResult.$ === 'Done') return getResult;
        else {
            var n = getResult.a;
            var model = getResult.b;
            return !n ? A2($elm$browser$Debugger$History$Done, msg, A2(update, msg, model).a) : A2($elm$browser$Debugger$History$Stepping, n - 1, A2(update, msg, model).a);
        }
    });
    var $elm$browser$Debugger$History$undone = function(getResult) {
        undone: while(true)if (getResult.$ === 'Done') {
            var msg = getResult.a;
            var model = getResult.b;
            return _Utils_Tuple2(model, msg);
        } else {
            var $temp$getResult = getResult;
            getResult = $temp$getResult;
            continue undone;
        }
    };
    var $elm$browser$Debugger$History$get = F3(function(update, index, history) {
        get: while(true){
            var recent = history.recent;
            var snapshotMax = history.numMessages - recent.numMessages;
            if (_Utils_cmp(index, snapshotMax) > -1) return $elm$browser$Debugger$History$undone(A3($elm$core$List$foldr, $elm$browser$Debugger$History$getHelp(update), A2($elm$browser$Debugger$History$Stepping, index - snapshotMax, recent.model), recent.messages));
            else {
                var _v0 = A2($elm$core$Array$get, index / $elm$browser$Debugger$History$maxSnapshotSize | 0, history.snapshots);
                if (_v0.$ === 'Nothing') {
                    var $temp$update = update, $temp$index = index, $temp$history = history;
                    update = $temp$update;
                    index = $temp$index;
                    history = $temp$history;
                    continue get;
                } else {
                    var model = _v0.a.model;
                    var messages = _v0.a.messages;
                    return $elm$browser$Debugger$History$undone(A3($elm$core$Array$foldr, $elm$browser$Debugger$History$getHelp(update), A2($elm$browser$Debugger$History$Stepping, index % $elm$browser$Debugger$History$maxSnapshotSize, model), messages));
                }
            }
        }
    });
    var $elm$browser$Debugger$History$getRecentMsg = function(history) {
        getRecentMsg: while(true){
            var _v0 = history.recent.messages;
            if (!_v0.b) {
                var $temp$history = history;
                history = $temp$history;
                continue getRecentMsg;
            } else {
                var first = _v0.a;
                return first;
            }
        }
    };
    var $elm$core$Dict$get = F2(function(targetKey, dict) {
        get: while(true){
            if (dict.$ === 'RBEmpty_elm_builtin') return $elm$core$Maybe$Nothing;
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var _v1 = A2($elm$core$Basics$compare, targetKey, key);
                switch(_v1.$){
                    case 'LT':
                        var $temp$targetKey = targetKey, $temp$dict = left;
                        targetKey = $temp$targetKey;
                        dict = $temp$dict;
                        continue get;
                    case 'EQ':
                        return $elm$core$Maybe$Just(value);
                    default:
                        var $temp$targetKey = targetKey, $temp$dict = right;
                        targetKey = $temp$targetKey;
                        dict = $temp$dict;
                        continue get;
                }
            }
        }
    });
    var $elm$browser$Debugger$Expando$mergeDictHelp = F3(function(oldDict, key, value) {
        var _v12 = A2($elm$core$Dict$get, key, oldDict);
        if (_v12.$ === 'Nothing') return value;
        else {
            var oldValue = _v12.a;
            return A2($elm$browser$Debugger$Expando$mergeHelp, oldValue, value);
        }
    });
    var $elm$browser$Debugger$Expando$mergeHelp = F2(function(old, _new) {
        var _v3 = _Utils_Tuple2(old, _new);
        _v3$6: while(true)switch(_v3.b.$){
            case 'S':
                return _new;
            case 'Primitive':
                return _new;
            case 'Sequence':
                if (_v3.a.$ === 'Sequence') {
                    var _v4 = _v3.a;
                    var isClosed = _v4.b;
                    var oldValues = _v4.c;
                    var _v5 = _v3.b;
                    var seqType = _v5.a;
                    var newValues = _v5.c;
                    return A3($elm$browser$Debugger$Expando$Sequence, seqType, isClosed, A2($elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues));
                } else break _v3$6;
            case 'Dictionary':
                if (_v3.a.$ === 'Dictionary') {
                    var _v6 = _v3.a;
                    var isClosed = _v6.a;
                    var _v7 = _v3.b;
                    var keyValuePairs = _v7.b;
                    return A2($elm$browser$Debugger$Expando$Dictionary, isClosed, keyValuePairs);
                } else break _v3$6;
            case 'Record':
                if (_v3.a.$ === 'Record') {
                    var _v8 = _v3.a;
                    var isClosed = _v8.a;
                    var oldDict = _v8.b;
                    var _v9 = _v3.b;
                    var newDict = _v9.b;
                    return A2($elm$browser$Debugger$Expando$Record, isClosed, A2($elm$core$Dict$map, $elm$browser$Debugger$Expando$mergeDictHelp(oldDict), newDict));
                } else break _v3$6;
            default:
                if (_v3.a.$ === 'Constructor') {
                    var _v10 = _v3.a;
                    var isClosed = _v10.b;
                    var oldValues = _v10.c;
                    var _v11 = _v3.b;
                    var maybeName = _v11.a;
                    var newValues = _v11.c;
                    return A3($elm$browser$Debugger$Expando$Constructor, maybeName, isClosed, A2($elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues));
                } else break _v3$6;
        }
        return _new;
    });
    var $elm$browser$Debugger$Expando$mergeListHelp = F2(function(olds, news) {
        var _v0 = _Utils_Tuple2(olds, news);
        if (!_v0.a.b) return news;
        else {
            if (!_v0.b.b) return news;
            else {
                var _v1 = _v0.a;
                var x = _v1.a;
                var xs = _v1.b;
                var _v2 = _v0.b;
                var y = _v2.a;
                var ys = _v2.b;
                return A2($elm$core$List$cons, A2($elm$browser$Debugger$Expando$mergeHelp, x, y), A2($elm$browser$Debugger$Expando$mergeListHelp, xs, ys));
            }
        }
    });
    var $elm$browser$Debugger$Expando$merge = F2(function(value, expando) {
        return A2($elm$browser$Debugger$Expando$mergeHelp, expando, _Debugger_init(value));
    });
    var $elm$browser$Debugger$Main$jumpUpdate = F3(function(update, index, model) {
        var history = $elm$browser$Debugger$Main$cachedHistory(model);
        var currentMsg = $elm$browser$Debugger$History$getRecentMsg(history);
        var currentModel = $elm$browser$Debugger$Main$getLatestModel(model.state);
        var _v0 = A3($elm$browser$Debugger$History$get, update, index, history);
        var indexModel = _v0.a;
        var indexMsg = _v0.b;
        return _Utils_update(model, {
            expandoModel: A2($elm$browser$Debugger$Expando$merge, indexModel, model.expandoModel),
            expandoMsg: A2($elm$browser$Debugger$Expando$merge, indexMsg, model.expandoMsg),
            state: A5($elm$browser$Debugger$Main$Paused, index, indexModel, currentModel, currentMsg, history)
        });
    });
    var $elm$browser$Debugger$History$jsToElm = A2($elm$core$Basics$composeR, _Json_unwrap, _Debugger_unsafeCoerce);
    var $elm$browser$Debugger$History$decoder = F2(function(initialModel, update) {
        var addMessage = F2(function(rawMsg, _v0) {
            var model = _v0.a;
            var history = _v0.b;
            var msg = $elm$browser$Debugger$History$jsToElm(rawMsg);
            return _Utils_Tuple2(A2(update, msg, model), A3($elm$browser$Debugger$History$add, msg, model, history));
        });
        var updateModel = function(rawMsgs) {
            return A3($elm$core$List$foldl, addMessage, _Utils_Tuple2(initialModel, $elm$browser$Debugger$History$empty(initialModel)), rawMsgs);
        };
        return A2($elm$json$Json$Decode$map, updateModel, $elm$json$Json$Decode$list($elm$json$Json$Decode$value));
    });
    var $elm$browser$Debugger$History$getInitialModel = function(_v0) {
        var snapshots = _v0.snapshots;
        var recent = _v0.recent;
        var _v1 = A2($elm$core$Array$get, 0, snapshots);
        if (_v1.$ === 'Just') {
            var model = _v1.a.model;
            return model;
        } else return recent.model;
    };
    var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
    var $elm$browser$Debugger$Main$loadNewHistory = F3(function(rawHistory, update, model) {
        var pureUserUpdate = F2(function(msg, userModel) {
            return A2(update, msg, userModel).a;
        });
        var initialUserModel = $elm$browser$Debugger$History$getInitialModel(model.history);
        var decoder = A2($elm$browser$Debugger$History$decoder, initialUserModel, pureUserUpdate);
        var _v0 = A2($elm$json$Json$Decode$decodeValue, decoder, rawHistory);
        if (_v0.$ === 'Err') return _Utils_Tuple2(_Utils_update(model, {
            overlay: $elm$browser$Debugger$Overlay$corruptImport
        }), $elm$core$Platform$Cmd$none);
        else {
            var _v1 = _v0.a;
            var latestUserModel = _v1.a;
            var newHistory = _v1.b;
            return _Utils_Tuple2(_Utils_update(model, {
                expandoModel: $elm$browser$Debugger$Expando$init(latestUserModel),
                expandoMsg: $elm$browser$Debugger$Expando$init($elm$browser$Debugger$History$getRecentMsg(newHistory)),
                history: newHistory,
                overlay: $elm$browser$Debugger$Overlay$none,
                state: $elm$browser$Debugger$Main$Running(latestUserModel)
            }), $elm$core$Platform$Cmd$none);
        }
    });
    var $elm$browser$Debugger$Main$scroll = function(popout) {
        return A2($elm$core$Task$perform, $elm$core$Basics$always($elm$browser$Debugger$Main$NoOp), _Debugger_scroll(popout));
    };
    var $elm$browser$Debugger$Main$scrollTo = F2(function(id, popout) {
        return A2($elm$core$Task$perform, $elm$core$Basics$always($elm$browser$Debugger$Main$NoOp), A2(_Debugger_scrollTo, id, popout));
    });
    var $elm$browser$Debugger$Main$setDragStatus = F2(function(status, layout) {
        if (layout.$ === 'Horizontal') {
            var x = layout.b;
            var y = layout.c;
            return A3($elm$browser$Debugger$Main$Horizontal, status, x, y);
        } else {
            var x = layout.b;
            var y = layout.c;
            return A3($elm$browser$Debugger$Main$Vertical, status, x, y);
        }
    });
    var $elm$browser$Debugger$Main$swapLayout = function(layout) {
        if (layout.$ === 'Horizontal') {
            var s = layout.a;
            var x = layout.b;
            var y = layout.c;
            return A3($elm$browser$Debugger$Main$Vertical, s, x, y);
        } else {
            var s = layout.a;
            var x = layout.b;
            var y = layout.c;
            return A3($elm$browser$Debugger$Main$Horizontal, s, x, y);
        }
    };
    var $elm$core$Dict$getMin = function(dict) {
        getMin: while(true){
            if (dict.$ === 'RBNode_elm_builtin' && dict.d.$ === 'RBNode_elm_builtin') {
                var left = dict.d;
                var $temp$dict = left;
                dict = $temp$dict;
                continue getMin;
            } else return dict;
        }
    };
    var $elm$core$Dict$moveRedLeft = function(dict) {
        if (dict.$ === 'RBNode_elm_builtin' && dict.d.$ === 'RBNode_elm_builtin' && dict.e.$ === 'RBNode_elm_builtin') {
            if (dict.e.d.$ === 'RBNode_elm_builtin' && dict.e.d.a.$ === 'Red') {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v1 = dict.d;
                var lClr = _v1.a;
                var lK = _v1.b;
                var lV = _v1.c;
                var lLeft = _v1.d;
                var lRight = _v1.e;
                var _v2 = dict.e;
                var rClr = _v2.a;
                var rK = _v2.b;
                var rV = _v2.c;
                var rLeft = _v2.d;
                var _v3 = rLeft.a;
                var rlK = rLeft.b;
                var rlV = rLeft.c;
                var rlL = rLeft.d;
                var rlR = rLeft.e;
                var rRight = _v2.e;
                return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rlK, rlV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight), rlL), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
            } else {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v4 = dict.d;
                var lClr = _v4.a;
                var lK = _v4.b;
                var lV = _v4.c;
                var lLeft = _v4.d;
                var lRight = _v4.e;
                var _v5 = dict.e;
                var rClr = _v5.a;
                var rK = _v5.b;
                var rV = _v5.c;
                var rLeft = _v5.d;
                var rRight = _v5.e;
                if (clr.$ === 'Black') return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
                else return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
            }
        } else return dict;
    };
    var $elm$core$Dict$moveRedRight = function(dict) {
        if (dict.$ === 'RBNode_elm_builtin' && dict.d.$ === 'RBNode_elm_builtin' && dict.e.$ === 'RBNode_elm_builtin') {
            if (dict.d.d.$ === 'RBNode_elm_builtin' && dict.d.d.a.$ === 'Red') {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v1 = dict.d;
                var lClr = _v1.a;
                var lK = _v1.b;
                var lV = _v1.c;
                var _v2 = _v1.d;
                var _v3 = _v2.a;
                var llK = _v2.b;
                var llV = _v2.c;
                var llLeft = _v2.d;
                var llRight = _v2.e;
                var lRight = _v1.e;
                var _v4 = dict.e;
                var rClr = _v4.a;
                var rK = _v4.b;
                var rV = _v4.c;
                var rLeft = _v4.d;
                var rRight = _v4.e;
                return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, lRight, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
            } else {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v5 = dict.d;
                var lClr = _v5.a;
                var lK = _v5.b;
                var lV = _v5.c;
                var lLeft = _v5.d;
                var lRight = _v5.e;
                var _v6 = dict.e;
                var rClr = _v6.a;
                var rK = _v6.b;
                var rV = _v6.c;
                var rLeft = _v6.d;
                var rRight = _v6.e;
                if (clr.$ === 'Black') return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
                else return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
            }
        } else return dict;
    };
    var $elm$core$Dict$removeHelpPrepEQGT = F7(function(targetKey, dict, color, key, value, left, right) {
        if (left.$ === 'RBNode_elm_builtin' && left.a.$ === 'Red') {
            var _v1 = left.a;
            var lK = left.b;
            var lV = left.c;
            var lLeft = left.d;
            var lRight = left.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, color, lK, lV, lLeft, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
        } else {
            _v2$2: while(true){
                if (right.$ === 'RBNode_elm_builtin' && right.a.$ === 'Black') {
                    if (right.d.$ === 'RBNode_elm_builtin') {
                        if (right.d.a.$ === 'Black') {
                            var _v3 = right.a;
                            var _v4 = right.d;
                            var _v5 = _v4.a;
                            return $elm$core$Dict$moveRedRight(dict);
                        } else break _v2$2;
                    } else {
                        var _v6 = right.a;
                        var _v7 = right.d;
                        return $elm$core$Dict$moveRedRight(dict);
                    }
                } else break _v2$2;
            }
            return dict;
        }
    });
    var $elm$core$Dict$removeMin = function(dict) {
        if (dict.$ === 'RBNode_elm_builtin' && dict.d.$ === 'RBNode_elm_builtin') {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var lColor = left.a;
            var lLeft = left.d;
            var right = dict.e;
            if (lColor.$ === 'Black') {
                if (lLeft.$ === 'RBNode_elm_builtin' && lLeft.a.$ === 'Red') {
                    var _v3 = lLeft.a;
                    return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, $elm$core$Dict$removeMin(left), right);
                } else {
                    var _v4 = $elm$core$Dict$moveRedLeft(dict);
                    if (_v4.$ === 'RBNode_elm_builtin') {
                        var nColor = _v4.a;
                        var nKey = _v4.b;
                        var nValue = _v4.c;
                        var nLeft = _v4.d;
                        var nRight = _v4.e;
                        return A5($elm$core$Dict$balance, nColor, nKey, nValue, $elm$core$Dict$removeMin(nLeft), nRight);
                    } else return $elm$core$Dict$RBEmpty_elm_builtin;
                }
            } else return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, $elm$core$Dict$removeMin(left), right);
        } else return $elm$core$Dict$RBEmpty_elm_builtin;
    };
    var $elm$core$Dict$removeHelp = F2(function(targetKey, dict) {
        if (dict.$ === 'RBEmpty_elm_builtin') return $elm$core$Dict$RBEmpty_elm_builtin;
        else {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            if (_Utils_cmp(targetKey, key) < 0) {
                if (left.$ === 'RBNode_elm_builtin' && left.a.$ === 'Black') {
                    var _v4 = left.a;
                    var lLeft = left.d;
                    if (lLeft.$ === 'RBNode_elm_builtin' && lLeft.a.$ === 'Red') {
                        var _v6 = lLeft.a;
                        return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, A2($elm$core$Dict$removeHelp, targetKey, left), right);
                    } else {
                        var _v7 = $elm$core$Dict$moveRedLeft(dict);
                        if (_v7.$ === 'RBNode_elm_builtin') {
                            var nColor = _v7.a;
                            var nKey = _v7.b;
                            var nValue = _v7.c;
                            var nLeft = _v7.d;
                            var nRight = _v7.e;
                            return A5($elm$core$Dict$balance, nColor, nKey, nValue, A2($elm$core$Dict$removeHelp, targetKey, nLeft), nRight);
                        } else return $elm$core$Dict$RBEmpty_elm_builtin;
                    }
                } else return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, A2($elm$core$Dict$removeHelp, targetKey, left), right);
            } else return A2($elm$core$Dict$removeHelpEQGT, targetKey, A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
        }
    });
    var $elm$core$Dict$removeHelpEQGT = F2(function(targetKey, dict) {
        if (dict.$ === 'RBNode_elm_builtin') {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            if (_Utils_eq(targetKey, key)) {
                var _v1 = $elm$core$Dict$getMin(right);
                if (_v1.$ === 'RBNode_elm_builtin') {
                    var minKey = _v1.b;
                    var minValue = _v1.c;
                    return A5($elm$core$Dict$balance, color, minKey, minValue, left, $elm$core$Dict$removeMin(right));
                } else return $elm$core$Dict$RBEmpty_elm_builtin;
            } else return A5($elm$core$Dict$balance, color, key, value, left, A2($elm$core$Dict$removeHelp, targetKey, right));
        } else return $elm$core$Dict$RBEmpty_elm_builtin;
    });
    var $elm$core$Dict$remove = F2(function(key, dict) {
        var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
        if (_v0.$ === 'RBNode_elm_builtin' && _v0.a.$ === 'Red') {
            var _v1 = _v0.a;
            var k = _v0.b;
            var v = _v0.c;
            var l = _v0.d;
            var r = _v0.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
        } else {
            var x = _v0;
            return x;
        }
    });
    var $elm$core$Dict$update = F3(function(targetKey, alter, dictionary) {
        var _v0 = alter(A2($elm$core$Dict$get, targetKey, dictionary));
        if (_v0.$ === 'Just') {
            var value = _v0.a;
            return A3($elm$core$Dict$insert, targetKey, value, dictionary);
        } else return A2($elm$core$Dict$remove, targetKey, dictionary);
    });
    var $elm$browser$Debugger$Expando$updateIndex = F3(function(n, func, list) {
        if (!list.b) return _List_Nil;
        else {
            var x = list.a;
            var xs = list.b;
            return n <= 0 ? A2($elm$core$List$cons, func(x), xs) : A2($elm$core$List$cons, x, A3($elm$browser$Debugger$Expando$updateIndex, n - 1, func, xs));
        }
    });
    var $elm$browser$Debugger$Expando$update = F2(function(msg, value) {
        switch(value.$){
            case 'S':
                return value;
            case 'Primitive':
                return value;
            case 'Sequence':
                var seqType = value.a;
                var isClosed = value.b;
                var valueList = value.c;
                switch(msg.$){
                    case 'Toggle':
                        return A3($elm$browser$Debugger$Expando$Sequence, seqType, !isClosed, valueList);
                    case 'Index':
                        if (msg.a.$ === 'None') {
                            var _v3 = msg.a;
                            var index = msg.b;
                            var subMsg = msg.c;
                            return A3($elm$browser$Debugger$Expando$Sequence, seqType, isClosed, A3($elm$browser$Debugger$Expando$updateIndex, index, $elm$browser$Debugger$Expando$update(subMsg), valueList));
                        } else return value;
                    default:
                        return value;
                }
            case 'Dictionary':
                var isClosed = value.a;
                var keyValuePairs = value.b;
                switch(msg.$){
                    case 'Toggle':
                        return A2($elm$browser$Debugger$Expando$Dictionary, !isClosed, keyValuePairs);
                    case 'Index':
                        var redirect = msg.a;
                        var index = msg.b;
                        var subMsg = msg.c;
                        switch(redirect.$){
                            case 'None':
                                return value;
                            case 'Key':
                                return A2($elm$browser$Debugger$Expando$Dictionary, isClosed, A3($elm$browser$Debugger$Expando$updateIndex, index, function(_v6) {
                                    var k = _v6.a;
                                    var v = _v6.b;
                                    return _Utils_Tuple2(A2($elm$browser$Debugger$Expando$update, subMsg, k), v);
                                }, keyValuePairs));
                            default:
                                return A2($elm$browser$Debugger$Expando$Dictionary, isClosed, A3($elm$browser$Debugger$Expando$updateIndex, index, function(_v7) {
                                    var k = _v7.a;
                                    var v = _v7.b;
                                    return _Utils_Tuple2(k, A2($elm$browser$Debugger$Expando$update, subMsg, v));
                                }, keyValuePairs));
                        }
                    default:
                        return value;
                }
            case 'Record':
                var isClosed = value.a;
                var valueDict = value.b;
                switch(msg.$){
                    case 'Toggle':
                        return A2($elm$browser$Debugger$Expando$Record, !isClosed, valueDict);
                    case 'Index':
                        return value;
                    default:
                        var field = msg.a;
                        var subMsg = msg.b;
                        return A2($elm$browser$Debugger$Expando$Record, isClosed, A3($elm$core$Dict$update, field, $elm$browser$Debugger$Expando$updateField(subMsg), valueDict));
                }
            default:
                var maybeName = value.a;
                var isClosed = value.b;
                var valueList = value.c;
                switch(msg.$){
                    case 'Toggle':
                        return A3($elm$browser$Debugger$Expando$Constructor, maybeName, !isClosed, valueList);
                    case 'Index':
                        if (msg.a.$ === 'None') {
                            var _v10 = msg.a;
                            var index = msg.b;
                            var subMsg = msg.c;
                            return A3($elm$browser$Debugger$Expando$Constructor, maybeName, isClosed, A3($elm$browser$Debugger$Expando$updateIndex, index, $elm$browser$Debugger$Expando$update(subMsg), valueList));
                        } else return value;
                    default:
                        return value;
                }
        }
    });
    var $elm$browser$Debugger$Expando$updateField = F2(function(msg, maybeExpando) {
        if (maybeExpando.$ === 'Nothing') return maybeExpando;
        else {
            var expando = maybeExpando.a;
            return $elm$core$Maybe$Just(A2($elm$browser$Debugger$Expando$update, msg, expando));
        }
    });
    var $elm$browser$Debugger$Main$Upload = function(a) {
        return {
            $: 'Upload',
            a: a
        };
    };
    var $elm$browser$Debugger$Main$upload = function(popout) {
        return A2($elm$core$Task$perform, $elm$browser$Debugger$Main$Upload, _Debugger_upload(popout));
    };
    var $elm$browser$Debugger$Overlay$BadMetadata = function(a) {
        return {
            $: 'BadMetadata',
            a: a
        };
    };
    var $elm$browser$Debugger$Overlay$badMetadata = $elm$browser$Debugger$Overlay$BadMetadata;
    var $elm$browser$Debugger$Main$withGoodMetadata = F2(function(model, func) {
        var _v0 = model.metadata;
        if (_v0.$ === 'Ok') {
            var metadata = _v0.a;
            return func(metadata);
        } else {
            var error = _v0.a;
            return _Utils_Tuple2(_Utils_update(model, {
                overlay: $elm$browser$Debugger$Overlay$badMetadata(error)
            }), $elm$core$Platform$Cmd$none);
        }
    });
    var $elm$browser$Debugger$Main$wrapUpdate = F3(function(update, msg, model) {
        wrapUpdate: while(true)switch(msg.$){
            case 'NoOp':
                return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
            case 'UserMsg':
                var userMsg = msg.a;
                var userModel = $elm$browser$Debugger$Main$getLatestModel(model.state);
                var newHistory = A3($elm$browser$Debugger$History$add, userMsg, userModel, model.history);
                var _v1 = A2(update, userMsg, userModel);
                var newUserModel = _v1.a;
                var userCmds = _v1.b;
                var commands = A2($elm$core$Platform$Cmd$map, $elm$browser$Debugger$Main$UserMsg, userCmds);
                var _v2 = model.state;
                if (_v2.$ === 'Running') return _Utils_Tuple2(_Utils_update(model, {
                    expandoModel: A2($elm$browser$Debugger$Expando$merge, newUserModel, model.expandoModel),
                    expandoMsg: A2($elm$browser$Debugger$Expando$merge, userMsg, model.expandoMsg),
                    history: newHistory,
                    state: $elm$browser$Debugger$Main$Running(newUserModel)
                }), $elm$core$Platform$Cmd$batch(_List_fromArray([
                    commands,
                    $elm$browser$Debugger$Main$scroll(model.popout)
                ])));
                else {
                    var index = _v2.a;
                    var indexModel = _v2.b;
                    var history = _v2.e;
                    return _Utils_Tuple2(_Utils_update(model, {
                        history: newHistory,
                        state: A5($elm$browser$Debugger$Main$Paused, index, indexModel, newUserModel, userMsg, history)
                    }), commands);
                }
            case 'TweakExpandoMsg':
                var eMsg = msg.a;
                return _Utils_Tuple2(_Utils_update(model, {
                    expandoMsg: A2($elm$browser$Debugger$Expando$update, eMsg, model.expandoMsg)
                }), $elm$core$Platform$Cmd$none);
            case 'TweakExpandoModel':
                var eMsg = msg.a;
                return _Utils_Tuple2(_Utils_update(model, {
                    expandoModel: A2($elm$browser$Debugger$Expando$update, eMsg, model.expandoModel)
                }), $elm$core$Platform$Cmd$none);
            case 'Resume':
                var _v3 = model.state;
                if (_v3.$ === 'Running') return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
                else {
                    var userModel = _v3.c;
                    var userMsg = _v3.d;
                    return _Utils_Tuple2(_Utils_update(model, {
                        expandoModel: A2($elm$browser$Debugger$Expando$merge, userModel, model.expandoModel),
                        expandoMsg: A2($elm$browser$Debugger$Expando$merge, userMsg, model.expandoMsg),
                        state: $elm$browser$Debugger$Main$Running(userModel)
                    }), $elm$browser$Debugger$Main$scroll(model.popout));
                }
            case 'Jump':
                var index = msg.a;
                return _Utils_Tuple2(A3($elm$browser$Debugger$Main$jumpUpdate, update, index, model), $elm$core$Platform$Cmd$none);
            case 'SliderJump':
                var index = msg.a;
                return _Utils_Tuple2(A3($elm$browser$Debugger$Main$jumpUpdate, update, index, model), A2($elm$browser$Debugger$Main$scrollTo, $elm$browser$Debugger$History$idForMessageIndex(index), model.popout));
            case 'Open':
                return _Utils_Tuple2(model, A2($elm$core$Task$perform, $elm$core$Basics$always($elm$browser$Debugger$Main$NoOp), _Debugger_open(model.popout)));
            case 'Up':
                var _v4 = model.state;
                if (_v4.$ === 'Running') return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
                else {
                    var i = _v4.a;
                    var history = _v4.e;
                    var targetIndex = i + 1;
                    if (_Utils_cmp(targetIndex, $elm$browser$Debugger$History$size(history)) < 0) {
                        var $temp$update = update, $temp$msg = $elm$browser$Debugger$Main$SliderJump(targetIndex), $temp$model = model;
                        update = $temp$update;
                        msg = $temp$msg;
                        model = $temp$model;
                        continue wrapUpdate;
                    } else {
                        var $temp$update = update, $temp$msg = $elm$browser$Debugger$Main$Resume, $temp$model = model;
                        update = $temp$update;
                        msg = $temp$msg;
                        model = $temp$model;
                        continue wrapUpdate;
                    }
                }
            case 'Down':
                var _v5 = model.state;
                if (_v5.$ === 'Running') {
                    var $temp$update = update, $temp$msg = $elm$browser$Debugger$Main$Jump($elm$browser$Debugger$History$size(model.history) - 1), $temp$model = model;
                    update = $temp$update;
                    msg = $temp$msg;
                    model = $temp$model;
                    continue wrapUpdate;
                } else {
                    var index = _v5.a;
                    if (index > 0) {
                        var $temp$update = update, $temp$msg = $elm$browser$Debugger$Main$SliderJump(index - 1), $temp$model = model;
                        update = $temp$update;
                        msg = $temp$msg;
                        model = $temp$model;
                        continue wrapUpdate;
                    } else return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
                }
            case 'Import':
                return A2($elm$browser$Debugger$Main$withGoodMetadata, model, function(_v6) {
                    return _Utils_Tuple2(model, $elm$browser$Debugger$Main$upload(model.popout));
                });
            case 'Export':
                return A2($elm$browser$Debugger$Main$withGoodMetadata, model, function(metadata) {
                    return _Utils_Tuple2(model, A2($elm$browser$Debugger$Main$download, metadata, model.history));
                });
            case 'Upload':
                var jsonString = msg.a;
                return A2($elm$browser$Debugger$Main$withGoodMetadata, model, function(metadata) {
                    var _v7 = A2($elm$browser$Debugger$Overlay$assessImport, metadata, jsonString);
                    if (_v7.$ === 'Err') {
                        var newOverlay = _v7.a;
                        return _Utils_Tuple2(_Utils_update(model, {
                            overlay: newOverlay
                        }), $elm$core$Platform$Cmd$none);
                    } else {
                        var rawHistory = _v7.a;
                        return A3($elm$browser$Debugger$Main$loadNewHistory, rawHistory, update, model);
                    }
                });
            case 'OverlayMsg':
                var overlayMsg = msg.a;
                var _v8 = A2($elm$browser$Debugger$Overlay$close, overlayMsg, model.overlay);
                if (_v8.$ === 'Nothing') return _Utils_Tuple2(_Utils_update(model, {
                    overlay: $elm$browser$Debugger$Overlay$none
                }), $elm$core$Platform$Cmd$none);
                else {
                    var rawHistory1 = _v8.a;
                    return A3($elm$browser$Debugger$Main$loadNewHistory, rawHistory1, update, model);
                }
            case 'SwapLayout':
                return _Utils_Tuple2(_Utils_update(model, {
                    layout: $elm$browser$Debugger$Main$swapLayout(model.layout)
                }), $elm$core$Platform$Cmd$none);
            case 'DragStart':
                return _Utils_Tuple2(_Utils_update(model, {
                    layout: A2($elm$browser$Debugger$Main$setDragStatus, $elm$browser$Debugger$Main$Moving, model.layout)
                }), $elm$core$Platform$Cmd$none);
            case 'Drag':
                var info = msg.a;
                return _Utils_Tuple2(_Utils_update(model, {
                    layout: A2($elm$browser$Debugger$Main$drag, info, model.layout)
                }), $elm$core$Platform$Cmd$none);
            default:
                return _Utils_Tuple2(_Utils_update(model, {
                    layout: A2($elm$browser$Debugger$Main$setDragStatus, $elm$browser$Debugger$Main$Static, model.layout)
                }), $elm$core$Platform$Cmd$none);
        }
    });
    var $elm$browser$Browser$External = function(a) {
        return {
            $: 'External',
            a: a
        };
    };
    var $elm$browser$Browser$Internal = function(a) {
        return {
            $: 'Internal',
            a: a
        };
    };
    var $elm$browser$Browser$Dom$NotFound = function(a) {
        return {
            $: 'NotFound',
            a: a
        };
    };
    var $elm$url$Url$Http = {
        $: 'Http'
    };
    var $elm$url$Url$Https = {
        $: 'Https'
    };
    var $elm$url$Url$Url = F6(function(protocol, host, port_, path, query, fragment) {
        return {
            fragment: fragment,
            host: host,
            path: path,
            port_: port_,
            protocol: protocol,
            query: query
        };
    });
    var $elm$core$String$dropLeft = F2(function(n, string) {
        return n < 1 ? string : A3($elm$core$String$slice, n, $elm$core$String$length(string), string);
    });
    var $elm$core$String$indexes = _String_indexes;
    var $elm$core$String$isEmpty = function(string) {
        return string === '';
    };
    var $elm$url$Url$chompBeforePath = F5(function(protocol, path, params, frag, str) {
        if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) return $elm$core$Maybe$Nothing;
        else {
            var _v0 = A2($elm$core$String$indexes, ':', str);
            if (!_v0.b) return $elm$core$Maybe$Just(A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
            else {
                if (!_v0.b.b) {
                    var i = _v0.a;
                    var _v1 = $elm$core$String$toInt(A2($elm$core$String$dropLeft, i + 1, str));
                    if (_v1.$ === 'Nothing') return $elm$core$Maybe$Nothing;
                    else {
                        var port_ = _v1;
                        return $elm$core$Maybe$Just(A6($elm$url$Url$Url, protocol, A2($elm$core$String$left, i, str), port_, path, params, frag));
                    }
                } else return $elm$core$Maybe$Nothing;
            }
        }
    });
    var $elm$url$Url$chompBeforeQuery = F4(function(protocol, params, frag, str) {
        if ($elm$core$String$isEmpty(str)) return $elm$core$Maybe$Nothing;
        else {
            var _v0 = A2($elm$core$String$indexes, '/', str);
            if (!_v0.b) return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
            else {
                var i = _v0.a;
                return A5($elm$url$Url$chompBeforePath, protocol, A2($elm$core$String$dropLeft, i, str), params, frag, A2($elm$core$String$left, i, str));
            }
        }
    });
    var $elm$url$Url$chompBeforeFragment = F3(function(protocol, frag, str) {
        if ($elm$core$String$isEmpty(str)) return $elm$core$Maybe$Nothing;
        else {
            var _v0 = A2($elm$core$String$indexes, '?', str);
            if (!_v0.b) return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
            else {
                var i = _v0.a;
                return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Just(A2($elm$core$String$dropLeft, i + 1, str)), frag, A2($elm$core$String$left, i, str));
            }
        }
    });
    var $elm$url$Url$chompAfterProtocol = F2(function(protocol, str) {
        if ($elm$core$String$isEmpty(str)) return $elm$core$Maybe$Nothing;
        else {
            var _v0 = A2($elm$core$String$indexes, '#', str);
            if (!_v0.b) return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
            else {
                var i = _v0.a;
                return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Just(A2($elm$core$String$dropLeft, i + 1, str)), A2($elm$core$String$left, i, str));
            }
        }
    });
    var $elm$core$String$startsWith = _String_startsWith;
    var $elm$url$Url$fromString = function(str) {
        return A2($elm$core$String$startsWith, 'http://', str) ? A2($elm$url$Url$chompAfterProtocol, $elm$url$Url$Http, A2($elm$core$String$dropLeft, 7, str)) : A2($elm$core$String$startsWith, 'https://', str) ? A2($elm$url$Url$chompAfterProtocol, $elm$url$Url$Https, A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing;
    };
    var $elm$core$Basics$never = function(_v0) {
        never: while(true){
            var nvr = _v0.a;
            var $temp$_v0 = nvr;
            _v0 = $temp$_v0;
            continue never;
        }
    };
    var $elm$browser$Browser$application = _Browser_application;
    var $author$project$Main$Error = {
        $: 'Error'
    };
    var $author$project$Main$GenerateCurrentComms = {
        $: 'GenerateCurrentComms'
    };
    var $author$project$Main$Loaded = function(a) {
        return {
            $: 'Loaded',
            a: a
        };
    };
    var $author$project$Main$Data = F6(function(uf, ufr, parity, two_flips, two_twists, three_twists) {
        return {
            parity: parity,
            three_twists: three_twists,
            two_flips: two_flips,
            two_twists: two_twists,
            uf: uf,
            ufr: ufr
        };
    });
    var $author$project$Main$Comm2Flip = F3(function(comm, piece1, piece2) {
        return {
            comm: comm,
            piece1: piece1,
            piece2: piece2
        };
    });
    var $author$project$Main$decoderComm2Flip = A4($elm$json$Json$Decode$map3, $author$project$Main$Comm2Flip, A2($elm$json$Json$Decode$field, 'comm', $elm$json$Json$Decode$string), A2($elm$json$Json$Decode$field, 'piece_1', $elm$json$Json$Decode$string), A2($elm$json$Json$Decode$field, 'piece_2', $elm$json$Json$Decode$string));
    var $author$project$Main$Comm2Twist = F3(function(comm, piece1, piece2) {
        return {
            comm: comm,
            piece1: piece1,
            piece2: piece2
        };
    });
    var $author$project$Main$decoderComm2Twist = A4($elm$json$Json$Decode$map3, $author$project$Main$Comm2Twist, A2($elm$json$Json$Decode$field, 'comm', $elm$json$Json$Decode$string), A2($elm$json$Json$Decode$field, 'piece_1', $elm$json$Json$Decode$string), A2($elm$json$Json$Decode$field, 'piece_2', $elm$json$Json$Decode$string));
    var $author$project$Main$Comm3Twist = F3(function(comm, piece1, piece2) {
        return {
            comm: comm,
            piece1: piece1,
            piece2: piece2
        };
    });
    var $author$project$Main$decoderComm3Twist = A4($elm$json$Json$Decode$map3, $author$project$Main$Comm3Twist, A2($elm$json$Json$Decode$field, 'comm', $elm$json$Json$Decode$string), A2($elm$json$Json$Decode$field, 'piece_1', $elm$json$Json$Decode$string), A2($elm$json$Json$Decode$field, 'piece_2', $elm$json$Json$Decode$string));
    var $author$project$Main$CommParity = F2(function(piece, comm) {
        return {
            comm: comm,
            piece: piece
        };
    });
    var $author$project$Main$decoderCommParity = A3($elm$json$Json$Decode$map2, $author$project$Main$CommParity, A2($elm$json$Json$Decode$field, 'piece', $elm$json$Json$Decode$string), A2($elm$json$Json$Decode$field, 'comm', $elm$json$Json$Decode$string));
    var $author$project$Main$CommUF = F4(function(comm, piece1, piece2, comm_type) {
        return {
            comm: comm,
            comm_type: comm_type,
            piece1: piece1,
            piece2: piece2
        };
    });
    var $elm$json$Json$Decode$map4 = _Json_map4;
    var $author$project$Main$decoderCommUF = A5($elm$json$Json$Decode$map4, $author$project$Main$CommUF, A2($elm$json$Json$Decode$field, 'comm', $elm$json$Json$Decode$string), A2($elm$json$Json$Decode$field, 'piece_1', $elm$json$Json$Decode$string), A2($elm$json$Json$Decode$field, 'piece_2', $elm$json$Json$Decode$string), A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$string));
    var $author$project$Main$CommUFR = F4(function(comm, piece1, piece2, comm_type) {
        return {
            comm: comm,
            comm_type: comm_type,
            piece1: piece1,
            piece2: piece2
        };
    });
    var $author$project$Main$decoderCommUFR = A5($elm$json$Json$Decode$map4, $author$project$Main$CommUFR, A2($elm$json$Json$Decode$field, 'comm', $elm$json$Json$Decode$string), A2($elm$json$Json$Decode$field, 'piece_1', $elm$json$Json$Decode$string), A2($elm$json$Json$Decode$field, 'piece_2', $elm$json$Json$Decode$string), A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$string));
    var $elm$json$Json$Decode$map6 = _Json_map6;
    var $author$project$Main$decoderData = A2($elm$json$Json$Decode$field, 'data', A7($elm$json$Json$Decode$map6, $author$project$Main$Data, A2($elm$json$Json$Decode$field, 'UF', $elm$json$Json$Decode$list($author$project$Main$decoderCommUF)), A2($elm$json$Json$Decode$field, 'UFR', $elm$json$Json$Decode$list($author$project$Main$decoderCommUFR)), A2($elm$json$Json$Decode$field, 'PARITY', $elm$json$Json$Decode$list($author$project$Main$decoderCommParity)), A2($elm$json$Json$Decode$field, '2FLIPS', $elm$json$Json$Decode$list($author$project$Main$decoderComm2Flip)), A2($elm$json$Json$Decode$field, '2TWISTS', $elm$json$Json$Decode$list($author$project$Main$decoderComm2Twist)), A2($elm$json$Json$Decode$field, '3TWISTS', $elm$json$Json$Decode$list($author$project$Main$decoderComm3Twist))));
    var $author$project$Main$Settings = F4(function(toggled_types, comm_visible, comm_type_visible, letters_visible) {
        return {
            comm_type_visible: comm_type_visible,
            comm_visible: comm_visible,
            letters_visible: letters_visible,
            toggled_types: toggled_types
        };
    });
    var $elm$json$Json$Decode$bool = _Json_decodeBool;
    var $author$project$Main$ToggledTypes = F6(function(uf, ufr, parity, two_flips, two_twists, three_twists) {
        return {
            parity: parity,
            three_twists: three_twists,
            two_flips: two_flips,
            two_twists: two_twists,
            uf: uf,
            ufr: ufr
        };
    });
    var $author$project$Main$decoderToggledTypes = A7($elm$json$Json$Decode$map6, $author$project$Main$ToggledTypes, A2($elm$json$Json$Decode$field, 'uf', $elm$json$Json$Decode$bool), A2($elm$json$Json$Decode$field, 'ufr', $elm$json$Json$Decode$bool), A2($elm$json$Json$Decode$field, 'parity', $elm$json$Json$Decode$bool), A2($elm$json$Json$Decode$field, 'two_flips', $elm$json$Json$Decode$bool), A2($elm$json$Json$Decode$field, 'two_twists', $elm$json$Json$Decode$bool), A2($elm$json$Json$Decode$field, 'three_twists', $elm$json$Json$Decode$bool));
    var $author$project$Main$decoderSettings = A2($elm$json$Json$Decode$field, 'settings', A5($elm$json$Json$Decode$map4, $author$project$Main$Settings, A2($elm$json$Json$Decode$field, 'toggled_types', $author$project$Main$decoderToggledTypes), A2($elm$json$Json$Decode$field, 'comm_visible', $elm$json$Json$Decode$bool), A2($elm$json$Json$Decode$field, 'comm_type_visible', $elm$json$Json$Decode$bool), A2($elm$json$Json$Decode$field, 'letters_visible', $elm$json$Json$Decode$bool)));
    var $author$project$Main$send = function(msg) {
        return A2($elm$core$Task$perform, $elm$core$Basics$identity, $elm$core$Task$succeed(msg));
    };
    var $author$project$Main$init = F3(function(flags, url, key) {
        var _v0 = A2($elm$json$Json$Decode$decodeValue, $author$project$Main$decoderData, flags);
        if (_v0.$ === 'Ok') {
            var decodedData = _v0.a;
            var _v1 = A2($elm$json$Json$Decode$decodeValue, $author$project$Main$decoderSettings, flags);
            if (_v1.$ === 'Ok') {
                var decodedSettings = _v1.a;
                return _Utils_Tuple2($author$project$Main$Loaded({
                    current_comm: $elm$core$Maybe$Nothing,
                    current_comms: _List_Nil,
                    current_setup_alg: $elm$core$Maybe$Nothing,
                    data: decodedData,
                    settings: decodedSettings
                }), $author$project$Main$send($author$project$Main$GenerateCurrentComms));
            } else {
                var err = _v1.a;
                return _Utils_Tuple2($author$project$Main$Loaded({
                    current_comm: $elm$core$Maybe$Nothing,
                    current_comms: _List_Nil,
                    current_setup_alg: $elm$core$Maybe$Nothing,
                    data: decodedData,
                    settings: {
                        comm_type_visible: false,
                        comm_visible: false,
                        letters_visible: false,
                        toggled_types: {
                            parity: false,
                            three_twists: false,
                            two_flips: false,
                            two_twists: false,
                            uf: false,
                            ufr: false
                        }
                    }
                }), $elm$core$Platform$Cmd$none);
            }
        } else {
            var err = _v0.a;
            return _Utils_Tuple2($author$project$Main$Error, $elm$core$Platform$Cmd$none);
        }
    });
    var $author$project$Main$GeneratedNewComm = function(a) {
        return {
            $: 'GeneratedNewComm',
            a: a
        };
    };
    var $author$project$Main$newCommReceiver = _Platform_incomingPort('newCommReceiver', $elm$json$Json$Decode$string);
    var $author$project$Main$subscriptions = function(_v0) {
        return $author$project$Main$newCommReceiver($author$project$Main$GeneratedNewComm);
    };
    var $author$project$Main$getComm = function(c) {
        _v0$6: while(true){
            if (c.$ === 'Just') switch(c.a.$){
                case 'UF':
                    if (c.a.a.$ === 'Just') {
                        var comm = c.a.a.a;
                        return $elm$core$Maybe$Just(comm.comm);
                    } else break _v0$6;
                case 'UFR':
                    if (c.a.a.$ === 'Just') {
                        var comm = c.a.a.a;
                        return $elm$core$Maybe$Just(comm.comm);
                    } else break _v0$6;
                case 'Parity':
                    if (c.a.a.$ === 'Just') {
                        var comm = c.a.a.a;
                        return $elm$core$Maybe$Just(comm.comm);
                    } else break _v0$6;
                case 'TwoFlips':
                    if (c.a.a.$ === 'Just') {
                        var comm = c.a.a.a;
                        return $elm$core$Maybe$Just(comm.comm);
                    } else break _v0$6;
                case 'TwoTwists':
                    if (c.a.a.$ === 'Just') {
                        var comm = c.a.a.a;
                        return $elm$core$Maybe$Just(comm.comm);
                    } else break _v0$6;
                default:
                    if (c.a.a.$ === 'Just') {
                        var comm = c.a.a.a;
                        return $elm$core$Maybe$Just(comm.comm);
                    } else break _v0$6;
            }
            else break _v0$6;
        }
        return $elm$core$Maybe$Nothing;
    };
    var $elm$core$List$head = function(list) {
        if (list.b) {
            var x = list.a;
            var xs = list.b;
            return $elm$core$Maybe$Just(x);
        } else return $elm$core$Maybe$Nothing;
    };
    var $author$project$Main$UpdateComm = function(a) {
        return {
            $: 'UpdateComm',
            a: a
        };
    };
    var $elm$random$Random$Generate = function(a) {
        return {
            $: 'Generate',
            a: a
        };
    };
    var $elm$random$Random$Seed = F2(function(a, b) {
        return {
            $: 'Seed',
            a: a,
            b: b
        };
    });
    var $elm$random$Random$next = function(_v0) {
        var state0 = _v0.a;
        var incr = _v0.b;
        return A2($elm$random$Random$Seed, state0 * 1664525 + incr >>> 0, incr);
    };
    var $elm$random$Random$initialSeed = function(x) {
        var _v0 = $elm$random$Random$next(A2($elm$random$Random$Seed, 0, 1013904223));
        var state1 = _v0.a;
        var incr = _v0.b;
        var state2 = state1 + x >>> 0;
        return $elm$random$Random$next(A2($elm$random$Random$Seed, state2, incr));
    };
    var $elm$time$Time$Name = function(a) {
        return {
            $: 'Name',
            a: a
        };
    };
    var $elm$time$Time$Offset = function(a) {
        return {
            $: 'Offset',
            a: a
        };
    };
    var $elm$time$Time$Zone = F2(function(a, b) {
        return {
            $: 'Zone',
            a: a,
            b: b
        };
    });
    var $elm$time$Time$customZone = $elm$time$Time$Zone;
    var $elm$time$Time$Posix = function(a) {
        return {
            $: 'Posix',
            a: a
        };
    };
    var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
    var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
    var $elm$time$Time$posixToMillis = function(_v0) {
        var millis = _v0.a;
        return millis;
    };
    var $elm$random$Random$init = A2($elm$core$Task$andThen, function(time) {
        return $elm$core$Task$succeed($elm$random$Random$initialSeed($elm$time$Time$posixToMillis(time)));
    }, $elm$time$Time$now);
    var $elm$random$Random$step = F2(function(_v0, seed) {
        var generator = _v0.a;
        return generator(seed);
    });
    var $elm$random$Random$onEffects = F3(function(router, commands, seed) {
        if (!commands.b) return $elm$core$Task$succeed(seed);
        else {
            var generator = commands.a.a;
            var rest = commands.b;
            var _v1 = A2($elm$random$Random$step, generator, seed);
            var value = _v1.a;
            var newSeed = _v1.b;
            return A2($elm$core$Task$andThen, function(_v2) {
                return A3($elm$random$Random$onEffects, router, rest, newSeed);
            }, A2($elm$core$Platform$sendToApp, router, value));
        }
    });
    var $elm$random$Random$onSelfMsg = F3(function(_v0, _v1, seed) {
        return $elm$core$Task$succeed(seed);
    });
    var $elm$random$Random$Generator = function(a) {
        return {
            $: 'Generator',
            a: a
        };
    };
    var $elm$random$Random$map = F2(function(func, _v0) {
        var genA = _v0.a;
        return $elm$random$Random$Generator(function(seed0) {
            var _v1 = genA(seed0);
            var a = _v1.a;
            var seed1 = _v1.b;
            return _Utils_Tuple2(func(a), seed1);
        });
    });
    var $elm$random$Random$cmdMap = F2(function(func, _v0) {
        var generator = _v0.a;
        return $elm$random$Random$Generate(A2($elm$random$Random$map, func, generator));
    });
    _Platform_effectManagers['Random'] = _Platform_createManager($elm$random$Random$init, $elm$random$Random$onEffects, $elm$random$Random$onSelfMsg, $elm$random$Random$cmdMap);
    var $elm$random$Random$command = _Platform_leaf('Random');
    var $elm$random$Random$generate = F2(function(tagger, generator) {
        return $elm$random$Random$command($elm$random$Random$Generate(A2($elm$random$Random$map, tagger, generator)));
    });
    var $elm$core$Bitwise$xor = _Bitwise_xor;
    var $elm$random$Random$peel = function(_v0) {
        var state = _v0.a;
        var word = (state ^ state >>> (state >>> 28) + 4) * 277803737;
        return (word >>> 22 ^ word) >>> 0;
    };
    var $elm$random$Random$int = F2(function(a, b) {
        return $elm$random$Random$Generator(function(seed0) {
            var _v0 = _Utils_cmp(a, b) < 0 ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
            var lo = _v0.a;
            var hi = _v0.b;
            var range = hi - lo + 1;
            if (!(range - 1 & range)) return _Utils_Tuple2(((range - 1 & $elm$random$Random$peel(seed0)) >>> 0) + lo, $elm$random$Random$next(seed0));
            else {
                var threshhold = (-range >>> 0) % range >>> 0;
                var accountForBias = function(seed) {
                    accountForBias: while(true){
                        var x = $elm$random$Random$peel(seed);
                        var seedN = $elm$random$Random$next(seed);
                        if (_Utils_cmp(x, threshhold) < 0) {
                            var $temp$seed = seedN;
                            seed = $temp$seed;
                            continue accountForBias;
                        } else return _Utils_Tuple2(x % range + lo, seedN);
                    }
                };
                return accountForBias(seed0);
            }
        });
    });
    var $author$project$Main$randomIndexGenerator = function(list) {
        return A2($elm$random$Random$int, 0, $elm$core$List$length(list));
    };
    var $author$project$Main$newComm = function(list) {
        return A2($elm$random$Random$generate, $author$project$Main$UpdateComm, $author$project$Main$randomIndexGenerator(list));
    };
    var $elm$core$Maybe$destruct = F3(function(_default, func, maybe) {
        if (maybe.$ === 'Just') {
            var a = maybe.a;
            return func(a);
        } else return _default;
    });
    var $elm$json$Json$Encode$null = _Json_encodeNull;
    var $author$project$Main$newCommMessage = _Platform_outgoingPort('newCommMessage', function($) {
        return A3($elm$core$Maybe$destruct, $elm$json$Json$Encode$null, $elm$json$Json$Encode$string, $);
    });
    var $author$project$Main$setCommTypeVisible = F2(function(new_val, settings) {
        return _Utils_update(settings, {
            comm_type_visible: new_val
        });
    });
    var $author$project$Main$setCommVisible = F2(function(new_val, settings) {
        return _Utils_update(settings, {
            comm_visible: new_val
        });
    });
    var $author$project$Main$setCurrentComms = F2(function(new_current_comms, model) {
        if (model.$ === 'Loaded') {
            var state = model.a;
            return $author$project$Main$Loaded(_Utils_update(state, {
                current_comms: new_current_comms
            }));
        } else return model;
    });
    var $author$project$Main$setLettersVisible = F2(function(new_val, settings) {
        return _Utils_update(settings, {
            letters_visible: new_val
        });
    });
    var $author$project$Main$setSettings = F2(function(settings, model) {
        if (model.$ === 'Loaded') {
            var state = model.a;
            return $author$project$Main$Loaded(_Utils_update(state, {
                settings: settings
            }));
        } else return model;
    });
    var $author$project$Main$setToggledTypes = F2(function(new_toggled_types, settings) {
        return _Utils_update(settings, {
            toggled_types: new_toggled_types
        });
    });
    var $author$project$Main$TwoFlips = function(a) {
        return {
            $: 'TwoFlips',
            a: a
        };
    };
    var $author$project$Main$toCommType2Flip = function(comm) {
        return $author$project$Main$TwoFlips($elm$core$Maybe$Just(comm));
    };
    var $author$project$Main$TwoTwists = function(a) {
        return {
            $: 'TwoTwists',
            a: a
        };
    };
    var $author$project$Main$toCommType2Twist = function(comm) {
        return $author$project$Main$TwoTwists($elm$core$Maybe$Just(comm));
    };
    var $author$project$Main$ThreeTwists = function(a) {
        return {
            $: 'ThreeTwists',
            a: a
        };
    };
    var $author$project$Main$toCommType3Twist = function(comm) {
        return $author$project$Main$ThreeTwists($elm$core$Maybe$Just(comm));
    };
    var $author$project$Main$Parity = function(a) {
        return {
            $: 'Parity',
            a: a
        };
    };
    var $author$project$Main$toCommTypeParity = function(comm) {
        return $author$project$Main$Parity($elm$core$Maybe$Just(comm));
    };
    var $author$project$Main$UF = function(a) {
        return {
            $: 'UF',
            a: a
        };
    };
    var $author$project$Main$toCommTypeUF = function(comm) {
        return $author$project$Main$UF($elm$core$Maybe$Just(comm));
    };
    var $author$project$Main$UFR = function(a) {
        return {
            $: 'UFR',
            a: a
        };
    };
    var $author$project$Main$toCommTypeUFR = function(comm) {
        return $author$project$Main$UFR($elm$core$Maybe$Just(comm));
    };
    var $author$project$Main$toggleType = F2(function(type_to_toggle, current) {
        switch(type_to_toggle.$){
            case 'UF':
                return _Utils_update(current, {
                    uf: !current.uf
                });
            case 'UFR':
                return _Utils_update(current, {
                    ufr: !current.ufr
                });
            case 'Parity':
                return _Utils_update(current, {
                    parity: !current.parity
                });
            case 'TwoFlips':
                return _Utils_update(current, {
                    two_flips: !current.two_flips
                });
            case 'TwoTwists':
                return _Utils_update(current, {
                    two_twists: !current.two_twists
                });
            default:
                return _Utils_update(current, {
                    three_twists: !current.three_twists
                });
        }
    });
    var $elm$json$Json$Encode$bool = _Json_wrap;
    var $author$project$Main$newSettingsMessage = _Platform_outgoingPort('newSettingsMessage', function($1) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2('comm_type_visible', $elm$json$Json$Encode$bool($1.comm_type_visible)),
            _Utils_Tuple2('comm_visible', $elm$json$Json$Encode$bool($1.comm_visible)),
            _Utils_Tuple2('letters_visible', $elm$json$Json$Encode$bool($1.letters_visible)),
            _Utils_Tuple2('toggled_types', function($) {
                return $elm$json$Json$Encode$object(_List_fromArray([
                    _Utils_Tuple2('parity', $elm$json$Json$Encode$bool($.parity)),
                    _Utils_Tuple2('three_twists', $elm$json$Json$Encode$bool($.three_twists)),
                    _Utils_Tuple2('two_flips', $elm$json$Json$Encode$bool($.two_flips)),
                    _Utils_Tuple2('two_twists', $elm$json$Json$Encode$bool($.two_twists)),
                    _Utils_Tuple2('uf', $elm$json$Json$Encode$bool($.uf)),
                    _Utils_Tuple2('ufr', $elm$json$Json$Encode$bool($.ufr))
                ]));
            }($1.toggled_types))
        ]));
    });
    var $author$project$Main$updateSettings = function(settings) {
        return $author$project$Main$newSettingsMessage(settings);
    };
    var $author$project$Main$update = F2(function(msg, model) {
        var _v0 = _Utils_Tuple2(msg, model);
        _v0$11: while(true)switch(_v0.a.$){
            case 'NoOp':
                var _v1 = _v0.a;
                return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
            case 'LinkClicked':
                return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
            case 'UrlChanged':
                return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
            case 'ToggleType':
                if (_v0.b.$ === 'Loaded') {
                    var type_to_toggle = _v0.a.a;
                    var state = _v0.b.a;
                    var new_types = A2($author$project$Main$toggleType, type_to_toggle, state.settings.toggled_types);
                    var new_settings = A2($author$project$Main$setToggledTypes, A2($author$project$Main$toggleType, type_to_toggle, state.settings.toggled_types), state.settings);
                    return _Utils_Tuple2(A2($author$project$Main$setSettings, new_settings, $author$project$Main$Loaded(state)), $author$project$Main$send($author$project$Main$GenerateCurrentComms));
                } else break _v0$11;
            case 'GenerateCurrentComms':
                if (_v0.b.$ === 'Loaded') {
                    var _v2 = _v0.a;
                    var state = _v0.b.a;
                    var new_comms = $elm$core$List$concat(_List_fromArray([
                        state.settings.toggled_types.uf ? A2($elm$core$List$map, $author$project$Main$toCommTypeUF, state.data.uf) : _List_Nil,
                        state.settings.toggled_types.ufr ? A2($elm$core$List$map, $author$project$Main$toCommTypeUFR, state.data.ufr) : _List_Nil,
                        state.settings.toggled_types.parity ? A2($elm$core$List$map, $author$project$Main$toCommTypeParity, state.data.parity) : _List_Nil,
                        state.settings.toggled_types.two_flips ? A2($elm$core$List$map, $author$project$Main$toCommType2Flip, state.data.two_flips) : _List_Nil,
                        state.settings.toggled_types.two_twists ? A2($elm$core$List$map, $author$project$Main$toCommType2Twist, state.data.two_twists) : _List_Nil,
                        state.settings.toggled_types.three_twists ? A2($elm$core$List$map, $author$project$Main$toCommType3Twist, state.data.three_twists) : _List_Nil
                    ]));
                    return _Utils_Tuple2(A2($author$project$Main$setCurrentComms, new_comms, $author$project$Main$Loaded(state)), $author$project$Main$newComm(state.current_comms));
                } else break _v0$11;
            case 'GenerateNewComm':
                if (_v0.b.$ === 'Loaded') {
                    var _v3 = _v0.a;
                    var state = _v0.b.a;
                    return _Utils_Tuple2(model, $author$project$Main$newComm(state.current_comms));
                } else break _v0$11;
            case 'UpdateComm':
                if (_v0.b.$ === 'Loaded') {
                    var index = _v0.a.a;
                    var state = _v0.b.a;
                    var new_comm = $elm$core$List$head(A2($elm$core$List$drop, index - 1, state.current_comms));
                    return _Utils_Tuple2($author$project$Main$Loaded(_Utils_update(state, {
                        current_comm: new_comm
                    })), $author$project$Main$newCommMessage($author$project$Main$getComm(new_comm)));
                } else break _v0$11;
            case 'GeneratedNewComm':
                if (_v0.b.$ === 'Loaded') {
                    var alg = _v0.a.a;
                    var state = _v0.b.a;
                    var new_settings = A2($author$project$Main$setCommVisible, false, state.settings);
                    var new_state = $author$project$Main$Loaded(_Utils_update(state, {
                        current_setup_alg: $elm$core$Maybe$Just(alg),
                        settings: new_settings
                    }));
                    return _Utils_Tuple2(new_state, $author$project$Main$updateSettings(new_settings));
                } else break _v0$11;
            case 'ToggleCommVisible':
                if (_v0.b.$ === 'Loaded') {
                    var _v4 = _v0.a;
                    var state = _v0.b.a;
                    var new_settings = A2($author$project$Main$setCommVisible, !state.settings.comm_visible, state.settings);
                    var new_state = $author$project$Main$Loaded(_Utils_update(state, {
                        settings: new_settings
                    }));
                    return _Utils_Tuple2(new_state, $author$project$Main$updateSettings(new_settings));
                } else break _v0$11;
            case 'ToggleCommTypeVisible':
                if (_v0.b.$ === 'Loaded') {
                    var _v5 = _v0.a;
                    var state = _v0.b.a;
                    var new_settings = A2($author$project$Main$setCommTypeVisible, !state.settings.comm_type_visible, state.settings);
                    var new_state = $author$project$Main$Loaded(_Utils_update(state, {
                        settings: new_settings
                    }));
                    return _Utils_Tuple2(new_state, $author$project$Main$updateSettings(new_settings));
                } else break _v0$11;
            default:
                if (_v0.b.$ === 'Loaded') {
                    var _v6 = _v0.a;
                    var state = _v0.b.a;
                    var new_settings = A2($author$project$Main$setLettersVisible, !state.settings.letters_visible, state.settings);
                    var new_state = $author$project$Main$Loaded(_Utils_update(state, {
                        settings: new_settings
                    }));
                    return _Utils_Tuple2(new_state, $author$project$Main$updateSettings(new_settings));
                } else break _v0$11;
        }
        return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
    });
    var $author$project$Main$GenerateNewComm = {
        $: 'GenerateNewComm'
    };
    var $author$project$Main$ToggleCommVisible = {
        $: 'ToggleCommVisible'
    };
    var $elm$html$Html$h1 = _VirtualDom_node('h1');
    var $elm$html$Html$h2 = _VirtualDom_node('h2');
    var $author$project$Main$ToggleCommTypeVisible = {
        $: 'ToggleCommTypeVisible'
    };
    var $author$project$Main$ToggleLettersVisible = {
        $: 'ToggleLettersVisible'
    };
    var $author$project$Main$viewComm = F2(function(c, settings) {
        return A2($elm$html$Html$div, _List_fromArray([
            $elm$html$Html$Attributes$class('text-5xl text-white font-bold text-center')
        ]), function() {
            if (c.$ === 'UF' && c.a.$ === 'Just') {
                var comm = c.a.a;
                return _List_fromArray([
                    A2($elm$html$Html$span, _List_fromArray([
                        $elm$html$Html$Attributes$class(settings.comm_type_visible ? '' : 'blur-lg'),
                        $elm$html$Html$Events$onClick($author$project$Main$ToggleCommTypeVisible)
                    ]), _List_fromArray([
                        $elm$html$Html$text(comm.comm_type + ': ')
                    ])),
                    A2($elm$html$Html$span, _List_fromArray([
                        $elm$html$Html$Attributes$class(settings.letters_visible ? '' : 'blur-md'),
                        $elm$html$Html$Events$onClick($author$project$Main$ToggleLettersVisible)
                    ]), _List_fromArray([
                        $elm$html$Html$text(comm.piece1 + (' -> ' + comm.piece2))
                    ]))
                ]);
            } else return _List_fromArray([
                A2($elm$html$Html$span, _List_Nil, _List_fromArray([
                    $elm$html$Html$text(': ')
                ]))
            ]);
        }());
    });
    var $author$project$Main$ToggleType = function(a) {
        return {
            $: 'ToggleType',
            a: a
        };
    };
    var $author$project$Main$viewToggleButton = F3(function(content, type_to_toggle, toggled) {
        return A2($elm$html$Html$button, _List_fromArray([
            $elm$html$Html$Attributes$class('mr-auto hover:bg-emerald-700 ease-in-out duration-75 text-white font-bold py-2 px-4 rounded w-1/2 mb-2'),
            $elm$html$Html$Attributes$class(!toggled ? 'bg-emerald-400' : 'bg-emerald-600'),
            $elm$html$Html$Events$onClick($author$project$Main$ToggleType(type_to_toggle))
        ]), _List_fromArray([
            $elm$html$Html$text(content)
        ]));
    });
    var $author$project$Main$view = function(model) {
        return {
            body: _List_fromArray([
                A2($elm$html$Html$div, _List_fromArray([
                    $elm$html$Html$Attributes$class('bg-zinc-900 h-screen w-screen')
                ]), _List_fromArray([
                    function() {
                        if (model.$ === 'Loaded') {
                            var state = model.a;
                            return A2($elm$html$Html$div, _List_fromArray([
                                $elm$html$Html$Attributes$class('h-full w-full flex flex-col justify-center items-center')
                            ]), _List_fromArray([
                                A2($elm$html$Html$div, _List_fromArray([
                                    $elm$html$Html$Attributes$class('h-1/2 w-3/4 flex flex-row justify-center')
                                ]), _List_fromArray([
                                    A2($elm$html$Html$div, _List_fromArray([
                                        $elm$html$Html$Attributes$class('h-full w-1/6 rounded-lg drop-shadow-xl m-2 flex flex-col')
                                    ]), _List_fromArray([
                                        A2($elm$html$Html$button, _List_fromArray([
                                            $elm$html$Html$Attributes$class('ml-auto bg-emerald-400 hover:bg-emerald-700 ease-in-out duration-75 text-white font-bold py-2 px-4 rounded w-1/2 mb-2'),
                                            $elm$html$Html$Events$onClick($author$project$Main$GenerateNewComm)
                                        ]), _List_fromArray([
                                            $elm$html$Html$text('Skip')
                                        ]))
                                    ])),
                                    A2($elm$html$Html$div, _List_fromArray([
                                        $elm$html$Html$Attributes$class('h-full w-4/6 bg-cyan-200 rounded-lg drop-shadow-xl m-2')
                                    ]), _List_fromArray([
                                        A2($elm$html$Html$div, _List_fromArray([
                                            $elm$html$Html$Attributes$class('h-full w-full text-center p-6 text-white text-2xl font-bold'),
                                            $elm$html$Html$Attributes$id('twisty-player-container')
                                        ]), _List_fromArray([
                                            function() {
                                                var _v1 = state.current_setup_alg;
                                                if (_v1.$ === 'Just') {
                                                    var current_setup_alg = _v1.a;
                                                    return $elm$html$Html$text(current_setup_alg);
                                                } else return $elm$html$Html$text('No setup alg.');
                                            }()
                                        ]))
                                    ])),
                                    A2($elm$html$Html$div, _List_fromArray([
                                        $elm$html$Html$Attributes$class('h-full w-1/6 rounded-lg drop-shadow-xl m-2 flex flex-col')
                                    ]), _List_fromArray([
                                        A3($author$project$Main$viewToggleButton, 'UF', $author$project$Main$UF($elm$core$Maybe$Nothing), state.settings.toggled_types.uf),
                                        A3($author$project$Main$viewToggleButton, 'UFR', $author$project$Main$UFR($elm$core$Maybe$Nothing), state.settings.toggled_types.ufr),
                                        A3($author$project$Main$viewToggleButton, 'Parity', $author$project$Main$Parity($elm$core$Maybe$Nothing), state.settings.toggled_types.parity),
                                        A3($author$project$Main$viewToggleButton, '2 Flips', $author$project$Main$TwoFlips($elm$core$Maybe$Nothing), state.settings.toggled_types.two_flips),
                                        A3($author$project$Main$viewToggleButton, '2 Twists', $author$project$Main$TwoTwists($elm$core$Maybe$Nothing), state.settings.toggled_types.two_twists),
                                        A3($author$project$Main$viewToggleButton, '3 Twists', $author$project$Main$ThreeTwists($elm$core$Maybe$Nothing), state.settings.toggled_types.three_twists)
                                    ]))
                                ])),
                                A2($elm$html$Html$div, _List_fromArray([
                                    $elm$html$Html$Attributes$class('border h-1/3 w-1/2 mt-10 p-5')
                                ]), _List_fromArray([
                                    function() {
                                        var _v2 = _Utils_Tuple2(state.current_comm, $author$project$Main$getComm(state.current_comm));
                                        if (_v2.a.$ === 'Just' && _v2.b.$ === 'Just') {
                                            var current_comm_obj = _v2.a.a;
                                            var current_comm = _v2.b.a;
                                            return A2($elm$html$Html$div, _List_fromArray([
                                                $elm$html$Html$Attributes$class('h-full w-full flex flex-col justify-center place-content-center p-10')
                                            ]), _List_fromArray([
                                                A2($author$project$Main$viewComm, current_comm_obj, state.settings),
                                                A2($elm$html$Html$div, _List_fromArray([
                                                    $elm$html$Html$Attributes$class('text-3xl text-white font-bold w-3/4 m-auto text-center'),
                                                    $elm$html$Html$Attributes$class(state.settings.comm_visible ? '' : 'blur'),
                                                    $elm$html$Html$Events$onClick($author$project$Main$ToggleCommVisible)
                                                ]), _List_fromArray([
                                                    $elm$html$Html$text(current_comm)
                                                ]))
                                            ]));
                                        } else return A2($elm$html$Html$h1, _List_fromArray([
                                            $elm$html$Html$Attributes$class('text-5xl text-white font-bold text-center')
                                        ]), _List_fromArray([
                                            $elm$html$Html$text('No active comm')
                                        ]));
                                    }()
                                ]))
                            ]));
                        } else return A2($elm$html$Html$div, _List_fromArray([
                            $elm$html$Html$Attributes$class('h-full w-full flex flex-col justify-center items-center')
                        ]), _List_fromArray([
                            A2($elm$html$Html$div, _List_fromArray([
                                $elm$html$Html$Attributes$class('h-1/2 w-1/2 bg-red-400 rounded-lg drop-shadow-xl p-10'),
                                $elm$html$Html$Attributes$class('flex flex-col justify-center items-center')
                            ]), _List_fromArray([
                                A2($elm$html$Html$h1, _List_fromArray([
                                    $elm$html$Html$Attributes$class('text-9xl text-center text-white')
                                ]), _List_fromArray([
                                    $elm$html$Html$text('ERROR')
                                ])),
                                A2($elm$html$Html$h2, _List_fromArray([
                                    $elm$html$Html$Attributes$class('text-5xl text-center')
                                ]), _List_fromArray([
                                    $elm$html$Html$text('An error occured')
                                ]))
                            ]))
                        ]));
                    }()
                ]))
            ]),
            title: '3-Style'
        };
    };
    var $author$project$Main$main = $elm$browser$Browser$application({
        init: $author$project$Main$init,
        onUrlChange: $author$project$Main$UrlChanged,
        onUrlRequest: $author$project$Main$LinkClicked,
        subscriptions: $author$project$Main$subscriptions,
        update: $author$project$Main$update,
        view: $author$project$Main$view
    });
    _Platform_export({
        'Main': {
            'init': $author$project$Main$main($elm$json$Json$Decode$value)({
                "versions": {
                    "elm": "0.19.1"
                },
                "types": {
                    "message": "Main.Msg",
                    "aliases": {
                        "Url.Url": {
                            "args": [],
                            "type": "{ protocol : Url.Protocol, host : String.String, port_ : Maybe.Maybe Basics.Int, path : String.String, query : Maybe.Maybe String.String, fragment : Maybe.Maybe String.String }"
                        },
                        "Main.Comm2Flip": {
                            "args": [],
                            "type": "{ comm : String.String, piece1 : String.String, piece2 : String.String }"
                        },
                        "Main.Comm2Twist": {
                            "args": [],
                            "type": "{ comm : String.String, piece1 : String.String, piece2 : String.String }"
                        },
                        "Main.Comm3Twist": {
                            "args": [],
                            "type": "{ comm : String.String, piece1 : String.String, piece2 : String.String }"
                        },
                        "Main.CommParity": {
                            "args": [],
                            "type": "{ piece : String.String, comm : String.String }"
                        },
                        "Main.CommUF": {
                            "args": [],
                            "type": "{ comm : String.String, piece1 : String.String, piece2 : String.String, comm_type : String.String }"
                        },
                        "Main.CommUFR": {
                            "args": [],
                            "type": "{ comm : String.String, piece1 : String.String, piece2 : String.String, comm_type : String.String }"
                        }
                    },
                    "unions": {
                        "Main.Msg": {
                            "args": [],
                            "tags": {
                                "NoOp": [],
                                "LinkClicked": [
                                    "Browser.UrlRequest"
                                ],
                                "UrlChanged": [
                                    "Url.Url"
                                ],
                                "ToggleType": [
                                    "Main.CommType"
                                ],
                                "GenerateNewComm": [],
                                "UpdateComm": [
                                    "Basics.Int"
                                ],
                                "GeneratedNewComm": [
                                    "String.String"
                                ],
                                "GenerateCurrentComms": [],
                                "ToggleCommVisible": [],
                                "ToggleCommTypeVisible": [],
                                "ToggleLettersVisible": []
                            }
                        },
                        "Main.CommType": {
                            "args": [],
                            "tags": {
                                "UF": [
                                    "Maybe.Maybe Main.CommUF"
                                ],
                                "UFR": [
                                    "Maybe.Maybe Main.CommUFR"
                                ],
                                "Parity": [
                                    "Maybe.Maybe Main.CommParity"
                                ],
                                "TwoFlips": [
                                    "Maybe.Maybe Main.Comm2Flip"
                                ],
                                "TwoTwists": [
                                    "Maybe.Maybe Main.Comm2Twist"
                                ],
                                "ThreeTwists": [
                                    "Maybe.Maybe Main.Comm3Twist"
                                ]
                            }
                        },
                        "Basics.Int": {
                            "args": [],
                            "tags": {
                                "Int": []
                            }
                        },
                        "Maybe.Maybe": {
                            "args": [
                                "a"
                            ],
                            "tags": {
                                "Just": [
                                    "a"
                                ],
                                "Nothing": []
                            }
                        },
                        "Url.Protocol": {
                            "args": [],
                            "tags": {
                                "Http": [],
                                "Https": []
                            }
                        },
                        "String.String": {
                            "args": [],
                            "tags": {
                                "String": []
                            }
                        },
                        "Browser.UrlRequest": {
                            "args": [],
                            "tags": {
                                "Internal": [
                                    "Url.Url"
                                ],
                                "External": [
                                    "String.String"
                                ]
                            }
                        }
                    }
                }
            })
        }
    });
    //////////////////// HMR BEGIN ////////////////////
    /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Original Author: Flux Xu @fluxxu
*/ /*
    A note about the environment that this code runs in...

    assumed globals:
        - `module` (from Node.js module system and webpack)

    assumed in scope after injection into the Elm IIFE:
        - `scope` (has an 'Elm' property which contains the public Elm API)
        - various functions defined by Elm which we have to hook such as `_Platform_initialize` and `_Scheduler_binding`
 */ if (module.hot) {
        (function() {
            //polyfill for IE: https://github.com/fluxxu/elm-hot-loader/issues/16
            if (typeof Object.assign != 'function') Object.assign = function(target) {
                if (target == null) throw new TypeError('Cannot convert undefined or null to object');
                target = Object(target);
                for(var index = 1; index < arguments.length; index++){
                    var source = arguments[index];
                    if (source != null) {
                        for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                    }
                }
                return target;
            };
            // Elm 0.19.1 introduced a '$' prefix at the beginning of the symbols it emits,
            // and we check for `Maybe.Just` because we expect it to be present in all Elm programs.
            var elmVersion;
            if (typeof elm$core$Maybe$Just !== 'undefined') elmVersion = '0.19.0';
            else if (typeof $elm$core$Maybe$Just !== 'undefined') elmVersion = '0.19.1';
            else throw new Error("Could not determine Elm version");
            function elmSymbol(symbol) {
                try {
                    switch(elmVersion){
                        case '0.19.0':
                            return eval(symbol);
                        case '0.19.1':
                            return eval('$' + symbol);
                        default:
                            throw new Error('Cannot resolve ' + symbol + '. Elm version unknown!');
                    }
                } catch (e) {
                    if (e instanceof ReferenceError) return undefined;
                    else throw e;
                }
            }
            var instances = module.hot.data ? module.hot.data.instances || {
            } : {
            };
            var uid = module.hot.data ? module.hot.data.uid || 0 : 0;
            if (Object.keys(instances).length === 0) log("[elm-hot] Enabled");
            var cancellers = [];
            // These 2 variables act as dynamically-scoped variables which are set only when the
            // Elm module's hooked init function is called.
            var initializingInstance = null;
            var swappingInstance = null;
            module.hot.accept();
            module.hot.dispose(function(data) {
                data.instances = instances;
                data.uid = uid;
                // Cleanup pending async tasks
                // First, make sure that no new tasks can be started until we finish replacing the code
                _Scheduler_binding = function() {
                    return _Scheduler_fail(new Error('[elm-hot] Inactive Elm instance.'));
                };
                // Second, kill pending tasks belonging to the old instance
                if (cancellers.length) {
                    log('[elm-hot] Killing ' + cancellers.length + ' running processes...');
                    try {
                        cancellers.forEach(function(cancel) {
                            cancel();
                        });
                    } catch (e) {
                        console.warn('[elm-hot] Kill process error: ' + e.message);
                    }
                }
            });
            function log(message) {
                if (module.hot.verbose) console.log(message);
            }
            function getId() {
                return ++uid;
            }
            function findPublicModules(parent, path) {
                var modules = [];
                for(var key in parent){
                    var child = parent[key];
                    var currentPath = path ? path + '.' + key : key;
                    if ('init' in child) modules.push({
                        path: currentPath,
                        module: child
                    });
                    else modules = modules.concat(findPublicModules(child, currentPath));
                }
                return modules;
            }
            function registerInstance(domNode, flags, path, portSubscribes, portSends) {
                var id = getId();
                var instance = {
                    id: id,
                    path: path,
                    domNode: domNode,
                    flags: flags,
                    portSubscribes: portSubscribes,
                    portSends: portSends,
                    lastState: null // last Elm app state (root model)
                };
                return instances[id] = instance;
            }
            function isFullscreenApp() {
                // Returns true if the Elm app will take over the entire DOM body.
                return typeof elmSymbol("elm$browser$Browser$application") !== 'undefined' || typeof elmSymbol("elm$browser$Browser$document") !== 'undefined';
            }
            function wrapDomNode(node) {
                // When embedding an Elm app into a specific DOM node, Elm will replace the provided
                // DOM node with the Elm app's content. When the Elm app is compiled normally, the
                // original DOM node is reused (its attributes and content changes, but the object
                // in memory remains the same). But when compiled using `--debug`, Elm will completely
                // destroy the original DOM node and instead replace it with 2 brand new nodes: one
                // for your Elm app's content and the other for the Elm debugger UI. In this case,
                // if you held a reference to the DOM node provided for embedding, it would be orphaned
                // after Elm module initialization.
                //
                // So in order to make both cases consistent and isolate us from changes in how Elm
                // does this, we will insert a dummy node to wrap the node for embedding and hold
                // a reference to the dummy node.
                //
                // We will also put a tag on the dummy node so that the Elm developer knows who went
                // behind their back and rudely put stuff in their DOM.
                var dummyNode = document.createElement("div");
                dummyNode.setAttribute("data-elm-hot", "true");
                dummyNode.style.height = "inherit";
                var parentNode = node.parentNode;
                parentNode.replaceChild(dummyNode, node);
                dummyNode.appendChild(node);
                return dummyNode;
            }
            function wrapPublicModule(path, module) {
                var originalInit = module.init;
                if (originalInit) module.init = function(args) {
                    var elm;
                    var portSubscribes = {
                    };
                    var portSends = {
                    };
                    var domNode = null;
                    var flags = null;
                    if (typeof args !== 'undefined') {
                        // normal case
                        domNode = args['node'] && !isFullscreenApp() ? wrapDomNode(args['node']) : document.body;
                        flags = args['flags'];
                    } else {
                        // rare case: Elm allows init to be called without any arguments at all
                        domNode = document.body;
                        flags = undefined;
                    }
                    initializingInstance = registerInstance(domNode, flags, path, portSubscribes, portSends);
                    elm = originalInit(args);
                    wrapPorts(elm, portSubscribes, portSends);
                    initializingInstance = null;
                    return elm;
                };
                else console.error("Could not find a public module to wrap at path " + path);
            }
            function swap(Elm, instance) {
                log('[elm-hot] Hot-swapping module: ' + instance.path);
                swappingInstance = instance;
                // remove from the DOM everything that had been created by the old Elm app
                var containerNode = instance.domNode;
                while(containerNode.lastChild)containerNode.removeChild(containerNode.lastChild);
                var m = getAt(instance.path.split('.'), Elm);
                var elm;
                if (m) {
                    // prepare to initialize the new Elm module
                    var args = {
                        flags: instance.flags
                    };
                    if (containerNode === document.body) ;
                    else {
                        // embed case: provide a new node for Elm to use
                        var nodeForEmbed = document.createElement("div");
                        containerNode.appendChild(nodeForEmbed);
                        args['node'] = nodeForEmbed;
                    }
                    elm = m.init(args);
                    Object.keys(instance.portSubscribes).forEach(function(portName) {
                        if (portName in elm.ports && 'subscribe' in elm.ports[portName]) {
                            var handlers = instance.portSubscribes[portName];
                            if (!handlers.length) return;
                            log('[elm-hot] Reconnect ' + handlers.length + ' handler(s) to port \'' + portName + '\' (' + instance.path + ').');
                            handlers.forEach(function(handler) {
                                elm.ports[portName].subscribe(handler);
                            });
                        } else {
                            delete instance.portSubscribes[portName];
                            log('[elm-hot] Port was removed: ' + portName);
                        }
                    });
                    Object.keys(instance.portSends).forEach(function(portName) {
                        if (portName in elm.ports && 'send' in elm.ports[portName]) {
                            log('[elm-hot] Replace old port send with the new send');
                            instance.portSends[portName] = elm.ports[portName].send;
                        } else {
                            delete instance.portSends[portName];
                            log('[elm-hot] Port was removed: ' + portName);
                        }
                    });
                } else log('[elm-hot] Module was removed: ' + instance.path);
                swappingInstance = null;
            }
            function wrapPorts(elm, portSubscribes, portSends) {
                var portNames = Object.keys(elm.ports || {
                });
                //hook ports
                if (portNames.length) {
                    // hook outgoing ports
                    portNames.filter(function(name) {
                        return 'subscribe' in elm.ports[name];
                    }).forEach(function(portName) {
                        var port = elm.ports[portName];
                        var subscribe = port.subscribe;
                        var unsubscribe = port.unsubscribe;
                        elm.ports[portName] = Object.assign(port, {
                            subscribe: function(handler) {
                                log('[elm-hot] ports.' + portName + '.subscribe called.');
                                if (!portSubscribes[portName]) portSubscribes[portName] = [
                                    handler
                                ];
                                else //TODO handle subscribing to single handler more than once?
                                portSubscribes[portName].push(handler);
                                return subscribe.call(port, handler);
                            },
                            unsubscribe: function(handler) {
                                log('[elm-hot] ports.' + portName + '.unsubscribe called.');
                                var list = portSubscribes[portName];
                                if (list && list.indexOf(handler) !== -1) list.splice(list.lastIndexOf(handler), 1);
                                else console.warn('[elm-hot] ports.' + portName + '.unsubscribe: handler not subscribed');
                                return unsubscribe.call(port, handler);
                            }
                        });
                    });
                    // hook incoming ports
                    portNames.filter(function(name) {
                        return 'send' in elm.ports[name];
                    }).forEach(function(portName) {
                        var port = elm.ports[portName];
                        portSends[portName] = port.send;
                        elm.ports[portName] = Object.assign(port, {
                            send: function(val) {
                                return portSends[portName].call(port, val);
                            }
                        });
                    });
                }
                return portSubscribes;
            }
            /*
        Breadth-first search for a `Browser.Navigation.Key` in the user's app model.
        Returns the key and keypath or null if not found.
        */ function findNavKey(rootModel) {
                var queue = [];
                if (isDebuggerModel(rootModel)) /*
                 Extract the user's app model from the Elm Debugger's model. The Elm debugger
                 can hold multiple references to the user's model (e.g. in its "history"). So
                 we must be careful to only search within the "state" part of the Debugger.
                */ queue.push({
                    value: rootModel['state'],
                    keypath: [
                        'state'
                    ]
                });
                else queue.push({
                    value: rootModel,
                    keypath: []
                });
                while(queue.length !== 0){
                    var item = queue.shift();
                    if (typeof item.value === "undefined" || item.value === null) continue;
                    // The nav key is identified by a runtime tag added by the elm-hot injector.
                    if (item.value.hasOwnProperty("elm-hot-nav-key")) // found it!
                    return item;
                    if (typeof item.value !== "object") continue;
                    for(var propName in item.value){
                        if (!item.value.hasOwnProperty(propName)) continue;
                        var newKeypath = item.keypath.slice();
                        newKeypath.push(propName);
                        queue.push({
                            value: item.value[propName],
                            keypath: newKeypath
                        });
                    }
                }
                return null;
            }
            function isDebuggerModel(model) {
                // Up until elm/browser 1.0.2, the Elm debugger could be identified by a
                // property named "expando". But in version 1.0.2 that was renamed to "expandoModel"
                return model && (model.hasOwnProperty("expando") || model.hasOwnProperty("expandoModel")) && model.hasOwnProperty("state");
            }
            function getAt(keyPath, obj) {
                return keyPath.reduce(function(xs, x) {
                    return xs && xs[x] ? xs[x] : null;
                }, obj);
            }
            function removeNavKeyListeners(navKey) {
                window.removeEventListener('popstate', navKey.value);
                window.navigator.userAgent.indexOf('Trident') < 0 || window.removeEventListener('hashchange', navKey.value);
            }
            // hook program creation
            var initialize = _Platform_initialize;
            _Platform_initialize = function(flagDecoder, args1, init, update, subscriptions, stepperBuilder) {
                var instance = initializingInstance || swappingInstance;
                var tryFirstRender = !!swappingInstance;
                var hookedInit = function(args) {
                    var initialStateTuple = init(args);
                    if (swappingInstance) {
                        var oldModel = swappingInstance.lastState;
                        var newModel = initialStateTuple.a;
                        if (typeof elmSymbol("elm$browser$Browser$application") !== 'undefined') {
                            var oldKeyLoc = findNavKey(oldModel);
                            // attempt to find the Browser.Navigation.Key in the newly-constructed model
                            // and bring it along with the rest of the old data.
                            var newKeyLoc = findNavKey(newModel);
                            var error = null;
                            if (newKeyLoc === null) error = "could not find Browser.Navigation.Key in the new app model";
                            else if (oldKeyLoc === null) error = "could not find Browser.Navigation.Key in the old app model.";
                            else if (newKeyLoc.keypath.toString() !== oldKeyLoc.keypath.toString()) error = "the location of the Browser.Navigation.Key in the model has changed.";
                            else {
                                // remove event listeners attached to the old nav key
                                removeNavKeyListeners(oldKeyLoc.value);
                                // insert the new nav key into the old model in the exact same location
                                var parentKeyPath = oldKeyLoc.keypath.slice(0, -1);
                                var lastSegment = oldKeyLoc.keypath.slice(-1)[0];
                                var oldParent = getAt(parentKeyPath, oldModel);
                                oldParent[lastSegment] = newKeyLoc.value;
                            }
                            if (error !== null) {
                                console.error("[elm-hot] Hot-swapping " + instance.path + " not possible: " + error);
                                oldModel = newModel;
                            }
                        }
                        // the heart of the app state hot-swap
                        initialStateTuple.a = oldModel;
                        // ignore any Cmds returned by the init during hot-swap
                        initialStateTuple.b = elmSymbol("elm$core$Platform$Cmd$none");
                    } else // capture the initial state for later
                    initializingInstance.lastState = initialStateTuple.a;
                    return initialStateTuple;
                };
                var hookedStepperBuilder = function(sendToApp, model) {
                    var result;
                    // first render may fail if shape of model changed too much
                    if (tryFirstRender) {
                        tryFirstRender = false;
                        try {
                            result = stepperBuilder(sendToApp, model);
                        } catch (e) {
                            throw new Error('[elm-hot] Hot-swapping ' + instance.path + ' is not possible, please reload page. Error: ' + e.message);
                        }
                    } else result = stepperBuilder(sendToApp, model);
                    return function(nextModel, isSync) {
                        if (instance) // capture the state after every step so that later we can restore from it during a hot-swap
                        instance.lastState = nextModel;
                        return result(nextModel, isSync);
                    };
                };
                return initialize(flagDecoder, args1, hookedInit, update, subscriptions, hookedStepperBuilder);
            };
            // hook process creation
            var originalBinding = _Scheduler_binding;
            _Scheduler_binding = function(originalCallback) {
                return originalBinding(function() {
                    // start the scheduled process, which may return a cancellation function.
                    var cancel = originalCallback.apply(this, arguments);
                    if (cancel) {
                        cancellers.push(cancel);
                        return function() {
                            cancellers.splice(cancellers.indexOf(cancel), 1);
                            return cancel();
                        };
                    }
                    return cancel;
                });
            };
            scope['_elm_hot_loader_init'] = function(Elm) {
                // swap instances
                var removedInstances = [];
                for(var id in instances){
                    var instance = instances[id];
                    if (instance.domNode.parentNode) swap(Elm, instance);
                    else removedInstances.push(id);
                }
                removedInstances.forEach(function(id) {
                    delete instance[id];
                });
                // wrap all public modules
                var publicModules = findPublicModules(Elm);
                publicModules.forEach(function(m) {
                    wrapPublicModule(m.path, m.module);
                });
            };
        })();
        scope['_elm_hot_loader_init'](scope['Elm']);
    }
//////////////////// HMR END ////////////////////
})(this);

},{}],"1Xyl7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Alg", ()=>_chunkEWRBHQFXJs.Alg
);
parcelHelpers.export(exports, "AlgBuilder", ()=>_chunkEWRBHQFXJs.AlgBuilder
);
parcelHelpers.export(exports, "Commutator", ()=>_chunkEWRBHQFXJs.Commutator
);
parcelHelpers.export(exports, "Conjugate", ()=>_chunkEWRBHQFXJs.Conjugate
);
parcelHelpers.export(exports, "Example", ()=>_chunkEWRBHQFXJs.Example
);
parcelHelpers.export(exports, "ExperimentalIterationDirection", ()=>_chunkEWRBHQFXJs.IterationDirection
);
parcelHelpers.export(exports, "Grouping", ()=>_chunkEWRBHQFXJs.Grouping
);
parcelHelpers.export(exports, "LineComment", ()=>_chunkEWRBHQFXJs.LineComment
);
parcelHelpers.export(exports, "Move", ()=>_chunkEWRBHQFXJs.Move
);
parcelHelpers.export(exports, "Newline", ()=>_chunkEWRBHQFXJs.Newline
);
parcelHelpers.export(exports, "Pause", ()=>_chunkEWRBHQFXJs.Pause
);
parcelHelpers.export(exports, "QuantumMove", ()=>_chunkEWRBHQFXJs.QuantumMove
);
parcelHelpers.export(exports, "TraversalDownUp", ()=>_chunkEWRBHQFXJs.TraversalDownUp
);
parcelHelpers.export(exports, "TraversalUp", ()=>_chunkEWRBHQFXJs.TraversalUp
);
parcelHelpers.export(exports, "algCubingNetLink", ()=>_chunkEWRBHQFXJs.algCubingNetLink
);
parcelHelpers.export(exports, "experimentalAppendMove", ()=>_chunkEWRBHQFXJs.experimentalAppendMove
);
parcelHelpers.export(exports, "experimentalDirect", ()=>_chunkEWRBHQFXJs.direct
);
parcelHelpers.export(exports, "experimentalDirectedGenerator", ()=>_chunkEWRBHQFXJs.directedGenerator
);
parcelHelpers.export(exports, "experimentalIs", ()=>_chunkEWRBHQFXJs.experimentalIs
);
parcelHelpers.export(exports, "keyToMove", ()=>_chunkEWRBHQFXJs.keyToMove
);
var _chunkEWRBHQFXJs = require("../chunk-EWRBHQFX.js");
var _chunkWO2AXYFEJs = require("../chunk-WO2AXYFE.js");

},{"../chunk-EWRBHQFX.js":"i6QEj","../chunk-WO2AXYFE.js":"dbeiO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6QEj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IterationDirection", ()=>IterationDirection
);
parcelHelpers.export(exports, "direct", ()=>direct
);
parcelHelpers.export(exports, "directedGenerator", ()=>directedGenerator
);
parcelHelpers.export(exports, "AlgBuilder", ()=>AlgBuilder
);
parcelHelpers.export(exports, "Commutator", ()=>Commutator
);
parcelHelpers.export(exports, "Conjugate", ()=>Conjugate
);
parcelHelpers.export(exports, "LineComment", ()=>LineComment
);
parcelHelpers.export(exports, "Newline", ()=>Newline
);
parcelHelpers.export(exports, "Pause", ()=>Pause
);
parcelHelpers.export(exports, "QuantumMove", ()=>QuantumMove
);
parcelHelpers.export(exports, "Move", ()=>Move
);
parcelHelpers.export(exports, "Grouping", ()=>Grouping
);
parcelHelpers.export(exports, "experimentalIs", ()=>experimentalIs
);
parcelHelpers.export(exports, "TraversalDownUp", ()=>TraversalDownUp
);
parcelHelpers.export(exports, "TraversalUp", ()=>TraversalUp
);
parcelHelpers.export(exports, "Alg", ()=>Alg
);
parcelHelpers.export(exports, "Example", ()=>Example
);
parcelHelpers.export(exports, "keyToMove", ()=>keyToMove
);
parcelHelpers.export(exports, "algCubingNetLink", ()=>algCubingNetLink
);
parcelHelpers.export(exports, "experimentalAppendMove", ()=>experimentalAppendMove
);
var _chunkWO2AXYFEJs = require("./chunk-WO2AXYFE.js");
// src/cubing/alg/common.ts
var writeAlgDebugField = false;
var Comparable = class {
    is(c) {
        return this instanceof c;
    }
    as(c) {
        return this instanceof c ? this : null;
    }
};
var AlgCommon = class extends Comparable {
    constructor(){
        super();
        if (writeAlgDebugField) Object.defineProperty(this, "_debugStr", {
            get: ()=>{
                return this.toString();
            }
        });
    }
    get log() {
        return console.log.bind(console, this, this.toString());
    }
};
// src/cubing/alg/iteration.ts
var IterationDirection;
(function(IterationDirection3) {
    IterationDirection3[IterationDirection3["Forwards"] = 1] = "Forwards";
    IterationDirection3[IterationDirection3["Backwards"] = -1] = "Backwards";
})(IterationDirection || (IterationDirection = {
}));
function toggleDirection(iterationDirection, flip = true) {
    if (!flip) return iterationDirection;
    switch(iterationDirection){
        case 1:
            return -1;
        case -1:
            return 1;
    }
}
function direct(g, iterDir) {
    return iterDir === -1 ? Array.from(g).reverse() : g;
}
function reverse(g) {
    return Array.from(g).reverse();
}
function* directedGenerator(g, direction) {
    direction === -1 ? yield* reverseGenerator(g) : yield* g;
}
function* reverseGenerator(g) {
    for (const t of Array.from(g).reverse())yield t;
}
// src/cubing/alg/limits.ts
var MAX_INT = 2147483647;
var MAX_INT_DESCRIPTION = "2^31 - 1";
var MIN_INT = -2147483648;
// src/cubing/alg/AlgBuilder.ts
var _units;
var AlgBuilder = class {
    constructor(){
        _chunkWO2AXYFEJs.__privateAdd(this, _units, []);
    }
    push(u) {
        _chunkWO2AXYFEJs.__privateGet(this, _units).push(u);
    }
    experimentalPushAlg(alg) {
        for (const u of alg.units())this.push(u);
    }
    experimentalNumUnits() {
        return _chunkWO2AXYFEJs.__privateGet(this, _units).length;
    }
    toAlg() {
        return new Alg(_chunkWO2AXYFEJs.__privateGet(this, _units));
    }
    reset() {
        _chunkWO2AXYFEJs.__privateSet(this, _units, []);
    }
};
_units = new WeakMap();
// src/cubing/alg/units/containers/Commutator.ts
var _A, _B;
var _Commutator = class extends AlgCommon {
    constructor(aSource, bSource){
        super();
        _chunkWO2AXYFEJs.__privateAdd(this, _A, void 0);
        _chunkWO2AXYFEJs.__privateAdd(this, _B, void 0);
        _chunkWO2AXYFEJs.__privateSet(this, _A, experimentalEnsureAlg(aSource));
        _chunkWO2AXYFEJs.__privateSet(this, _B, experimentalEnsureAlg(bSource));
    }
    get A() {
        return _chunkWO2AXYFEJs.__privateGet(this, _A);
    }
    get B() {
        return _chunkWO2AXYFEJs.__privateGet(this, _B);
    }
    isIdentical(other) {
        const otherAsCommutator = other.as(_Commutator);
        return !!(otherAsCommutator?.A.isIdentical(this.A) && otherAsCommutator?.B.isIdentical(this.B));
    }
    invert() {
        return new _Commutator(_chunkWO2AXYFEJs.__privateGet(this, _B), _chunkWO2AXYFEJs.__privateGet(this, _A));
    }
    *experimentalExpand(iterDir = IterationDirection.Forwards, depth) {
        depth ?? (depth = Infinity);
        if (depth === 0) yield iterDir === IterationDirection.Forwards ? this : this.invert();
        else if (iterDir === IterationDirection.Forwards) {
            yield* this.A.experimentalExpand(IterationDirection.Forwards, depth - 1);
            yield* this.B.experimentalExpand(IterationDirection.Forwards, depth - 1);
            yield* this.A.experimentalExpand(IterationDirection.Backwards, depth - 1);
            yield* this.B.experimentalExpand(IterationDirection.Backwards, depth - 1);
        } else {
            yield* this.B.experimentalExpand(IterationDirection.Forwards, depth - 1);
            yield* this.A.experimentalExpand(IterationDirection.Forwards, depth - 1);
            yield* this.B.experimentalExpand(IterationDirection.Backwards, depth - 1);
            yield* this.A.experimentalExpand(IterationDirection.Backwards, depth - 1);
        }
    }
    toString() {
        return `[${_chunkWO2AXYFEJs.__privateGet(this, _A).toString()}, ${_chunkWO2AXYFEJs.__privateGet(this, _B).toString()}]`;
    }
};
var Commutator = _Commutator;
_A = new WeakMap();
_B = new WeakMap();
// src/cubing/alg/units/containers/Conjugate.ts
var _A2, _B2;
var _Conjugate = class extends AlgCommon {
    constructor(aSource, bSource){
        super();
        _chunkWO2AXYFEJs.__privateAdd(this, _A2, void 0);
        _chunkWO2AXYFEJs.__privateAdd(this, _B2, void 0);
        _chunkWO2AXYFEJs.__privateSet(this, _A2, experimentalEnsureAlg(aSource));
        _chunkWO2AXYFEJs.__privateSet(this, _B2, experimentalEnsureAlg(bSource));
    }
    get A() {
        return _chunkWO2AXYFEJs.__privateGet(this, _A2);
    }
    get B() {
        return _chunkWO2AXYFEJs.__privateGet(this, _B2);
    }
    isIdentical(other) {
        const otherAsConjugate = other.as(_Conjugate);
        return !!(otherAsConjugate?.A.isIdentical(this.A) && otherAsConjugate?.B.isIdentical(this.B));
    }
    invert() {
        return new _Conjugate(_chunkWO2AXYFEJs.__privateGet(this, _A2), _chunkWO2AXYFEJs.__privateGet(this, _B2).invert());
    }
    *experimentalExpand(iterDir, depth) {
        depth ?? (depth = Infinity);
        if (depth === 0) yield iterDir === IterationDirection.Forwards ? this : this.invert();
        else {
            yield* this.A.experimentalExpand(IterationDirection.Forwards, depth - 1);
            yield* this.B.experimentalExpand(iterDir, depth - 1);
            yield* this.A.experimentalExpand(IterationDirection.Backwards, depth - 1);
        }
    }
    toString() {
        return `[${this.A}: ${this.B}]`;
    }
};
var Conjugate = _Conjugate;
_A2 = new WeakMap();
_B2 = new WeakMap();
// src/cubing/alg/units/leaves/LineComment.ts
var _text;
var _LineComment = class extends AlgCommon {
    constructor(commentText){
        super();
        _chunkWO2AXYFEJs.__privateAdd(this, _text, void 0);
        if (commentText.includes("\n") || commentText.includes("\r")) throw new Error("LineComment cannot contain newline");
        _chunkWO2AXYFEJs.__privateSet(this, _text, commentText);
    }
    get text() {
        return _chunkWO2AXYFEJs.__privateGet(this, _text);
    }
    isIdentical(other) {
        const otherAsLineComment = other;
        return other.is(_LineComment) && _chunkWO2AXYFEJs.__privateGet(this, _text) === _chunkWO2AXYFEJs.__privateGet(otherAsLineComment, _text);
    }
    invert() {
        return this;
    }
    *experimentalExpand(_iterDir = IterationDirection.Forwards, _depth = Infinity) {
        yield this;
    }
    toString() {
        return `//${_chunkWO2AXYFEJs.__privateGet(this, _text)}`;
    }
};
var LineComment = _LineComment;
_text = new WeakMap();
// src/cubing/alg/units/leaves/Newline.ts
var Newline = class extends AlgCommon {
    toString() {
        return `
`;
    }
    isIdentical(other) {
        return other.is(Newline);
    }
    invert() {
        return this;
    }
    *experimentalExpand(_iterDir = IterationDirection.Forwards, _depth = Infinity) {
        yield this;
    }
};
// src/cubing/alg/units/leaves/Pause.ts
var Pause = class extends AlgCommon {
    toString() {
        return `.`;
    }
    isIdentical(other) {
        return other.is(Pause);
    }
    invert() {
        return this;
    }
    *experimentalExpand(_iterDir = IterationDirection.Forwards, _depth = Infinity) {
        yield this;
    }
};
// src/cubing/alg/parse.ts
function parseIntWithEmptyFallback(n, emptyFallback) {
    return n ? parseInt(n) : emptyFallback;
}
var amountRegex = /^(\d+)?('?)/;
var moveStartRegex = /^[_\dA-Za-z]/;
var quantumMoveRegex = /^((([1-9]\d*)-)?([1-9]\d*))?([_A-Za-z]+)?/;
var commentTextRegex = /^[^\n]*/;
var square1PairStart = /^(-?\d+), ?/;
var square1PairEnd = /^(-?\d+)\)/;
function parseAlg(s) {
    return new AlgParser().parseAlg(s);
}
function parseMove(s) {
    return new AlgParser().parseMove(s);
}
function parseQuantumMove(s) {
    return new AlgParser().parseQuantumMove(s);
}
function addCharIndices(t, startCharIndex, endCharIndex) {
    const parsedT = t;
    parsedT.startCharIndex = startCharIndex;
    parsedT.endCharIndex = endCharIndex;
    return parsedT;
}
function transferCharIndex(from, to) {
    if ("startCharIndex" in from) to.startCharIndex = from.startCharIndex;
    if ("endCharIndex" in from) to.endCharIndex = from.endCharIndex;
    return to;
}
var _input, _idx;
var AlgParser = class {
    constructor(){
        _chunkWO2AXYFEJs.__privateAdd(this, _input, "");
        _chunkWO2AXYFEJs.__privateAdd(this, _idx, 0);
    }
    parseAlg(input) {
        _chunkWO2AXYFEJs.__privateSet(this, _input, input);
        _chunkWO2AXYFEJs.__privateSet(this, _idx, 0);
        const alg = this.parseAlgWithStopping([]);
        this.mustBeAtEndOfInput();
        return alg;
    }
    parseMove(input) {
        _chunkWO2AXYFEJs.__privateSet(this, _input, input);
        _chunkWO2AXYFEJs.__privateSet(this, _idx, 0);
        const move = this.parseMoveImpl();
        this.mustBeAtEndOfInput();
        return move;
    }
    parseQuantumMove(input) {
        _chunkWO2AXYFEJs.__privateSet(this, _input, input);
        _chunkWO2AXYFEJs.__privateSet(this, _idx, 0);
        const quantumMove = this.parseQuantumMoveImpl();
        this.mustBeAtEndOfInput();
        return quantumMove;
    }
    mustBeAtEndOfInput() {
        if (_chunkWO2AXYFEJs.__privateGet(this, _idx) !== _chunkWO2AXYFEJs.__privateGet(this, _input).length) throw new Error("parsing unexpectedly ended early");
    }
    parseAlgWithStopping(stopBefore) {
        let algStartIdx = _chunkWO2AXYFEJs.__privateGet(this, _idx);
        let algEndIdx = _chunkWO2AXYFEJs.__privateGet(this, _idx);
        const algBuilder = new AlgBuilder();
        let crowded = false;
        const mustNotBeCrowded = (idx)=>{
            if (crowded) throw new Error(`Unexpected character at index ${idx}. Are you missing a space?`);
        };
        mainLoop: while(_chunkWO2AXYFEJs.__privateGet(this, _idx) < _chunkWO2AXYFEJs.__privateGet(this, _input).length){
            const savedCharIndex = _chunkWO2AXYFEJs.__privateGet(this, _idx);
            if (stopBefore.includes(_chunkWO2AXYFEJs.__privateGet(this, _input)[_chunkWO2AXYFEJs.__privateGet(this, _idx)])) return addCharIndices(algBuilder.toAlg(), algStartIdx, algEndIdx);
            if (this.tryConsumeNext(" ")) {
                crowded = false;
                if (algBuilder.experimentalNumUnits() === 0) algStartIdx = _chunkWO2AXYFEJs.__privateGet(this, _idx);
                continue mainLoop;
            } else if (moveStartRegex.test(_chunkWO2AXYFEJs.__privateGet(this, _input)[_chunkWO2AXYFEJs.__privateGet(this, _idx)])) {
                mustNotBeCrowded(savedCharIndex);
                const move = this.parseMoveImpl();
                algBuilder.push(move);
                crowded = true;
                algEndIdx = _chunkWO2AXYFEJs.__privateGet(this, _idx);
                continue mainLoop;
            } else if (this.tryConsumeNext("(")) {
                mustNotBeCrowded(savedCharIndex);
                const sq1PairStartMatch = this.tryRegex(square1PairStart);
                if (sq1PairStartMatch) {
                    const topAmountString = sq1PairStartMatch[1];
                    const savedCharIndexD = _chunkWO2AXYFEJs.__privateGet(this, _idx);
                    const sq1PairEndMatch = this.parseRegex(square1PairEnd);
                    const uMove = addCharIndices(new Move(new QuantumMove("U_SQ_"), parseInt(topAmountString)), savedCharIndex + 1, savedCharIndex + 1 + topAmountString.length);
                    const dMove = addCharIndices(new Move(new QuantumMove("D_SQ_"), parseInt(sq1PairEndMatch[1])), savedCharIndexD, _chunkWO2AXYFEJs.__privateGet(this, _idx) - 1);
                    const alg = addCharIndices(new Alg([
                        uMove,
                        dMove
                    ]), savedCharIndex + 1, _chunkWO2AXYFEJs.__privateGet(this, _idx) - 1);
                    algBuilder.push(addCharIndices(new Grouping(alg), savedCharIndex, _chunkWO2AXYFEJs.__privateGet(this, _idx)));
                    crowded = true;
                    algEndIdx = _chunkWO2AXYFEJs.__privateGet(this, _idx);
                    continue mainLoop;
                } else {
                    const alg = this.parseAlgWithStopping([
                        ")"
                    ]);
                    this.mustConsumeNext(")");
                    const amount = this.parseAmount();
                    algBuilder.push(addCharIndices(new Grouping(alg, amount), savedCharIndex, _chunkWO2AXYFEJs.__privateGet(this, _idx)));
                    crowded = true;
                    algEndIdx = _chunkWO2AXYFEJs.__privateGet(this, _idx);
                    continue mainLoop;
                }
            } else if (this.tryConsumeNext("[")) {
                mustNotBeCrowded(savedCharIndex);
                const A = this.parseAlgWithStopping([
                    ",",
                    ":"
                ]);
                const separator = this.popNext();
                const B = this.parseAlgWithStopping([
                    "]"
                ]);
                this.mustConsumeNext("]");
                switch(separator){
                    case ":":
                        algBuilder.push(addCharIndices(new Conjugate(A, B), savedCharIndex, _chunkWO2AXYFEJs.__privateGet(this, _idx)));
                        crowded = true;
                        algEndIdx = _chunkWO2AXYFEJs.__privateGet(this, _idx);
                        continue mainLoop;
                    case ",":
                        algBuilder.push(addCharIndices(new Commutator(A, B), savedCharIndex, _chunkWO2AXYFEJs.__privateGet(this, _idx)));
                        crowded = true;
                        algEndIdx = _chunkWO2AXYFEJs.__privateGet(this, _idx);
                        continue mainLoop;
                    default:
                        throw "unexpected parsing error";
                }
            } else if (this.tryConsumeNext("\n")) {
                algBuilder.push(addCharIndices(new Newline(), savedCharIndex, _chunkWO2AXYFEJs.__privateGet(this, _idx)));
                crowded = false;
                algEndIdx = _chunkWO2AXYFEJs.__privateGet(this, _idx);
                continue mainLoop;
            } else if (this.tryConsumeNext("/")) {
                if (this.tryConsumeNext("/")) {
                    mustNotBeCrowded(savedCharIndex);
                    const [text] = this.parseRegex(commentTextRegex);
                    algBuilder.push(addCharIndices(new LineComment(text), savedCharIndex, _chunkWO2AXYFEJs.__privateGet(this, _idx)));
                    crowded = false;
                    algEndIdx = _chunkWO2AXYFEJs.__privateGet(this, _idx);
                    continue mainLoop;
                } else {
                    algBuilder.push(addCharIndices(new Move("_SLASH_"), savedCharIndex, _chunkWO2AXYFEJs.__privateGet(this, _idx)));
                    crowded = true;
                    algEndIdx = _chunkWO2AXYFEJs.__privateGet(this, _idx);
                    continue mainLoop;
                }
            } else if (this.tryConsumeNext(".")) {
                mustNotBeCrowded(savedCharIndex);
                algBuilder.push(addCharIndices(new Pause(), savedCharIndex, _chunkWO2AXYFEJs.__privateGet(this, _idx)));
                crowded = true;
                algEndIdx = _chunkWO2AXYFEJs.__privateGet(this, _idx);
                continue mainLoop;
            } else throw new Error(`Unexpected character: ${this.popNext()}`);
        }
        if (_chunkWO2AXYFEJs.__privateGet(this, _idx) !== _chunkWO2AXYFEJs.__privateGet(this, _input).length) throw new Error("did not finish parsing?");
        if (stopBefore.length > 0) throw new Error("expected stopping");
        return addCharIndices(algBuilder.toAlg(), algStartIdx, algEndIdx);
    }
    parseQuantumMoveImpl() {
        const [, , , outerLayerStr, innerLayerStr, family] = this.parseRegex(quantumMoveRegex);
        return new QuantumMove(family, parseIntWithEmptyFallback(innerLayerStr, void 0), parseIntWithEmptyFallback(outerLayerStr, void 0));
    }
    parseMoveImpl() {
        const savedCharIndex = _chunkWO2AXYFEJs.__privateGet(this, _idx);
        if (this.tryConsumeNext("/")) return addCharIndices(new Move("_SLASH_"), savedCharIndex, _chunkWO2AXYFEJs.__privateGet(this, _idx));
        let quantumMove = this.parseQuantumMoveImpl();
        let [amount, hadEmptyAbsAmount] = this.parseAmountAndTrackEmptyAbsAmount();
        const suffix = this.parseMoveSuffix();
        if (suffix) {
            if (amount < 0) throw new Error("uh-oh");
            if ((suffix === "++" || suffix === "--") && amount !== 1) throw new Error("Pochmann ++ or -- moves cannot have an amount other than 1.");
            if ((suffix === "++" || suffix === "--") && !hadEmptyAbsAmount) throw new Error("Pochmann ++ or -- moves cannot have an amount written as a number.");
            if ((suffix === "+" || suffix === "-") && hadEmptyAbsAmount) throw new Error("Clock dial moves must have an amount written as a natural number followed by + or -.");
            if (suffix.startsWith("+")) quantumMove = quantumMove.modified({
                family: `${quantumMove.family}_${suffix === "+" ? "PLUS" : "PLUSPLUS"}_`
            });
            if (suffix.startsWith("-")) {
                quantumMove = quantumMove.modified({
                    family: `${quantumMove.family}_${suffix === "-" ? "PLUS" : "PLUSPLUS"}_`
                });
                amount *= -1;
            }
        }
        const move = addCharIndices(new Move(quantumMove, amount), savedCharIndex, _chunkWO2AXYFEJs.__privateGet(this, _idx));
        return move;
    }
    parseMoveSuffix() {
        if (this.tryConsumeNext("+")) {
            if (this.tryConsumeNext("+")) return "++";
            return "+";
        }
        if (this.tryConsumeNext("-")) {
            if (this.tryConsumeNext("-")) return "--";
            return "-";
        }
        return null;
    }
    parseAmountAndTrackEmptyAbsAmount() {
        const savedIdx = _chunkWO2AXYFEJs.__privateGet(this, _idx);
        const [, absAmountStr, primeStr] = this.parseRegex(amountRegex);
        if (absAmountStr?.startsWith("0") && absAmountStr !== "0") throw new Error(`Error at char index ${savedIdx}: An amount can only start with 0 if it's exactly the digit 0.`);
        return [
            parseIntWithEmptyFallback(absAmountStr, 1) * (primeStr === "'" ? -1 : 1),
            !absAmountStr
        ];
    }
    parseAmount() {
        const savedIdx = _chunkWO2AXYFEJs.__privateGet(this, _idx);
        const [, absAmountStr, primeStr] = this.parseRegex(amountRegex);
        if (absAmountStr?.startsWith("0") && absAmountStr !== "0") throw new Error(`Error at char index ${savedIdx}: An amount number can only start with 0 if it's exactly the digit 0.`);
        return parseIntWithEmptyFallback(absAmountStr, 1) * (primeStr === "'" ? -1 : 1);
    }
    parseRegex(regex) {
        const arr = regex.exec(this.remaining());
        if (arr === null) throw new Error("internal parsing error");
        _chunkWO2AXYFEJs.__privateSet(this, _idx, _chunkWO2AXYFEJs.__privateGet(this, _idx) + arr[0].length);
        return arr;
    }
    tryRegex(regex) {
        const arr = regex.exec(this.remaining());
        if (arr === null) return null;
        _chunkWO2AXYFEJs.__privateSet(this, _idx, _chunkWO2AXYFEJs.__privateGet(this, _idx) + arr[0].length);
        return arr;
    }
    remaining() {
        return _chunkWO2AXYFEJs.__privateGet(this, _input).slice(_chunkWO2AXYFEJs.__privateGet(this, _idx));
    }
    popNext() {
        const next = _chunkWO2AXYFEJs.__privateGet(this, _input)[_chunkWO2AXYFEJs.__privateGet(this, _idx)];
        _chunkWO2AXYFEJs.__privateWrapper(this, _idx)._++;
        return next;
    }
    tryConsumeNext(expected) {
        if (_chunkWO2AXYFEJs.__privateGet(this, _input)[_chunkWO2AXYFEJs.__privateGet(this, _idx)] === expected) {
            _chunkWO2AXYFEJs.__privateWrapper(this, _idx)._++;
            return true;
        }
        return false;
    }
    mustConsumeNext(expected) {
        const next = this.popNext();
        if (next !== expected) throw new Error(`expected \`${expected}\` while parsing, encountered ${next}`);
        return next;
    }
};
_input = new WeakMap();
_idx = new WeakMap();
// src/cubing/alg/warnOnce.ts
var warned = new Set();
function warnOnce(s) {
    if (!warned.has(s)) {
        console.warn(s);
        warned.add(s);
    }
}
// src/cubing/alg/units/QuantumWithAmount.ts
var QuantumWithAmount = class {
    constructor(quantum, amount = 1){
        this.quantum = quantum;
        this.amount = amount;
        if (!Number.isInteger(this.amount) || this.amount < MIN_INT || this.amount > MAX_INT) throw new Error(`Unit amount absolute value must be a non-negative integer from ${MAX_INT_DESCRIPTION} to ${MAX_INT_DESCRIPTION}.`);
    }
    suffix() {
        let s = "";
        const absAmount = Math.abs(this.amount);
        if (absAmount !== 1) s += absAmount;
        if (this.amount < 0) s += "'";
        return s;
    }
    isIdentical(other) {
        return this.quantum.isIdentical(other.quantum) && this.amount === other.amount;
    }
    *experimentalExpand(iterDir, depth) {
        const absAmount = Math.abs(this.amount);
        const newIterDir = toggleDirection(iterDir, this.amount < 0);
        for(let i = 0; i < absAmount; i++)yield* this.quantum.experimentalExpand(newIterDir, depth);
    }
};
// src/cubing/alg/units/leaves/Move.ts
var _family, _innerLayer, _outerLayer;
var _QuantumMove = class extends Comparable {
    constructor(family, innerLayer, outerLayer){
        super();
        _chunkWO2AXYFEJs.__privateAdd(this, _family, void 0);
        _chunkWO2AXYFEJs.__privateAdd(this, _innerLayer, void 0);
        _chunkWO2AXYFEJs.__privateAdd(this, _outerLayer, void 0);
        _chunkWO2AXYFEJs.__privateSet(this, _family, family);
        _chunkWO2AXYFEJs.__privateSet(this, _innerLayer, innerLayer ?? null);
        _chunkWO2AXYFEJs.__privateSet(this, _outerLayer, outerLayer ?? null);
        Object.freeze(this);
        if (_chunkWO2AXYFEJs.__privateGet(this, _innerLayer) !== null && (!Number.isInteger(_chunkWO2AXYFEJs.__privateGet(this, _innerLayer)) || _chunkWO2AXYFEJs.__privateGet(this, _innerLayer) < 1 || _chunkWO2AXYFEJs.__privateGet(this, _innerLayer) > MAX_INT)) throw new Error(`QuantumMove inner layer must be a positive integer below ${MAX_INT_DESCRIPTION}.`);
        if (_chunkWO2AXYFEJs.__privateGet(this, _outerLayer) !== null && (!Number.isInteger(_chunkWO2AXYFEJs.__privateGet(this, _outerLayer)) || _chunkWO2AXYFEJs.__privateGet(this, _outerLayer) < 1 || _chunkWO2AXYFEJs.__privateGet(this, _outerLayer) > MAX_INT)) throw new Error(`QuantumMove outer layer must be a positive integer below ${MAX_INT_DESCRIPTION}.`);
        if (_chunkWO2AXYFEJs.__privateGet(this, _outerLayer) !== null && _chunkWO2AXYFEJs.__privateGet(this, _innerLayer) !== null && _chunkWO2AXYFEJs.__privateGet(this, _innerLayer) <= _chunkWO2AXYFEJs.__privateGet(this, _outerLayer)) throw new Error("QuantumMove outer layer must be smaller than inner layer.");
        if (_chunkWO2AXYFEJs.__privateGet(this, _outerLayer) !== null && _chunkWO2AXYFEJs.__privateGet(this, _innerLayer) === null) throw new Error("QuantumMove with an outer layer must have an inner layer");
    }
    static fromString(s) {
        return parseQuantumMove(s);
    }
    modified(modifications) {
        return new _QuantumMove(modifications.family ?? _chunkWO2AXYFEJs.__privateGet(this, _family), modifications.innerLayer ?? _chunkWO2AXYFEJs.__privateGet(this, _innerLayer), modifications.outerLayer ?? _chunkWO2AXYFEJs.__privateGet(this, _outerLayer));
    }
    isIdentical(other) {
        const otherAsQuantumMove = other;
        return other.is(_QuantumMove) && _chunkWO2AXYFEJs.__privateGet(this, _family) === _chunkWO2AXYFEJs.__privateGet(otherAsQuantumMove, _family) && _chunkWO2AXYFEJs.__privateGet(this, _innerLayer) === _chunkWO2AXYFEJs.__privateGet(otherAsQuantumMove, _innerLayer) && _chunkWO2AXYFEJs.__privateGet(this, _outerLayer) === _chunkWO2AXYFEJs.__privateGet(otherAsQuantumMove, _outerLayer);
    }
    get family() {
        return _chunkWO2AXYFEJs.__privateGet(this, _family);
    }
    get outerLayer() {
        return _chunkWO2AXYFEJs.__privateGet(this, _outerLayer);
    }
    get innerLayer() {
        return _chunkWO2AXYFEJs.__privateGet(this, _innerLayer);
    }
    experimentalExpand() {
        throw new Error("experimentalExpand() cannot be called on a `QuantumMove` directly.");
    }
    toString() {
        let s = _chunkWO2AXYFEJs.__privateGet(this, _family);
        if (_chunkWO2AXYFEJs.__privateGet(this, _innerLayer) !== null) {
            s = String(_chunkWO2AXYFEJs.__privateGet(this, _innerLayer)) + s;
            if (_chunkWO2AXYFEJs.__privateGet(this, _outerLayer) !== null) s = String(_chunkWO2AXYFEJs.__privateGet(this, _outerLayer)) + "-" + s;
        }
        return s;
    }
};
var QuantumMove = _QuantumMove;
_family = new WeakMap();
_innerLayer = new WeakMap();
_outerLayer = new WeakMap();
var _quantumWithAmount;
var _Move = class extends AlgCommon {
    constructor(...args){
        super();
        _chunkWO2AXYFEJs.__privateAdd(this, _quantumWithAmount, void 0);
        if (typeof args[0] === "string") {
            if (args[1] ?? null) {
                _chunkWO2AXYFEJs.__privateSet(this, _quantumWithAmount, new QuantumWithAmount(QuantumMove.fromString(args[0]), args[1]));
                return;
            } else return _Move.fromString(args[0]);
        }
        _chunkWO2AXYFEJs.__privateSet(this, _quantumWithAmount, new QuantumWithAmount(args[0], args[1]));
    }
    isIdentical(other) {
        const otherAsMove = other.as(_Move);
        return !!otherAsMove && _chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount).isIdentical(_chunkWO2AXYFEJs.__privateGet(otherAsMove, _quantumWithAmount));
    }
    invert() {
        return transferCharIndex(this, new _Move(_chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount).quantum, -this.amount));
    }
    *experimentalExpand(iterDir = IterationDirection.Forwards) {
        if (iterDir === IterationDirection.Forwards) yield this;
        else yield this.modified({
            amount: -this.amount
        });
    }
    get quantum() {
        return _chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount).quantum;
    }
    modified(modifications) {
        return new _Move(_chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount).quantum.modified(modifications), modifications.amount ?? this.amount);
    }
    static fromString(s) {
        return parseMove(s);
    }
    get amount() {
        return _chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount).amount;
    }
    get type() {
        warnOnce("deprecated: type");
        return "blockMove";
    }
    get family() {
        return _chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount).quantum.family ?? void 0;
    }
    get outerLayer() {
        return _chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount).quantum.outerLayer ?? void 0;
    }
    get innerLayer() {
        return _chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount).quantum.innerLayer ?? void 0;
    }
    toString() {
        if (this.family === "_SLASH_") return "/";
        if (this.family.endsWith("_PLUS_")) return _chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount).quantum.toString().slice(0, -6) + Math.abs(this.amount) + (this.amount < 0 ? "-" : "+");
        if (this.family.endsWith("_PLUSPLUS_")) {
            const absAmount = Math.abs(this.amount);
            return _chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount).quantum.toString().slice(0, -10) + (absAmount === 1 ? "" : absAmount) + (this.amount < 0 ? "--" : "++");
        }
        return _chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount).quantum.toString() + _chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount).suffix();
    }
};
var Move = _Move;
_quantumWithAmount = new WeakMap();
// src/cubing/alg/units/containers/Grouping.ts
var Square1TupleFormatter = class {
    constructor(){
        this.quantumU_SQ_ = null;
        this.quantumD_SQ_ = null;
    }
    format(grouping) {
        const amounts = this.tuple(grouping);
        if (!amounts) return null;
        return `(${amounts.map((move)=>move.amount
        ).join(", ")})`;
    }
    tuple(grouping) {
        this.quantumU_SQ_ || (this.quantumU_SQ_ = new QuantumMove("U_SQ_"));
        this.quantumD_SQ_ || (this.quantumD_SQ_ = new QuantumMove("D_SQ_"));
        const quantumAlg = grouping.alg;
        if (quantumAlg.experimentalNumUnits() === 2) {
            const [U, D] = quantumAlg.units();
            if (U.as(Move)?.quantum.isIdentical(this.quantumU_SQ_) && D.as(Move)?.quantum.isIdentical(this.quantumD_SQ_)) {
                if (grouping.amount !== 1) throw new Error("Square-1 tuples cannot have an amount other than 1.");
                return [
                    U,
                    D
                ];
            }
        }
        return null;
    }
};
var square1TupleFormatterInstance = new Square1TupleFormatter();
var _quantumWithAmount2;
var _Grouping = class extends AlgCommon {
    constructor(algSource, amount){
        super();
        _chunkWO2AXYFEJs.__privateAdd(this, _quantumWithAmount2, void 0);
        const alg = experimentalEnsureAlg(algSource);
        _chunkWO2AXYFEJs.__privateSet(this, _quantumWithAmount2, new QuantumWithAmount(alg, amount));
    }
    isIdentical(other) {
        const otherAsGrouping = other;
        return other.is(_Grouping) && _chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount2).isIdentical(_chunkWO2AXYFEJs.__privateGet(otherAsGrouping, _quantumWithAmount2));
    }
    get alg() {
        return _chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount2).quantum;
    }
    get amount() {
        return _chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount2).amount;
    }
    get experimentalRepetitionSuffix() {
        return _chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount2).suffix();
    }
    invert() {
        return new _Grouping(_chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount2).quantum, -_chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount2).amount);
    }
    *experimentalExpand(iterDir = IterationDirection.Forwards, depth) {
        depth ?? (depth = Infinity);
        if (depth === 0) yield iterDir === IterationDirection.Forwards ? this : this.invert();
        else yield* _chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount2).experimentalExpand(iterDir, depth - 1);
    }
    static fromString() {
        throw new Error("unimplemented");
    }
    toString() {
        return square1TupleFormatterInstance.format(this) ?? `(${_chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount2).quantum.toString()})${_chunkWO2AXYFEJs.__privateGet(this, _quantumWithAmount2).suffix()}`;
    }
    experimentalAsSquare1Tuple() {
        return square1TupleFormatterInstance.tuple(this);
    }
};
var Grouping = _Grouping;
_quantumWithAmount2 = new WeakMap();
// src/cubing/alg/is.ts
function experimentalIs(v, c) {
    return v instanceof c;
}
function experimentalIsUnit(v) {
    return experimentalIs(v, Grouping) || experimentalIs(v, LineComment) || experimentalIs(v, Commutator) || experimentalIs(v, Conjugate) || experimentalIs(v, Move) || experimentalIs(v, Newline) || experimentalIs(v, Pause);
}
// src/cubing/alg/traversal.ts
function dispatch(t, unit, dataDown) {
    if (unit.is(Grouping)) return t.traverseGrouping(unit, dataDown);
    if (unit.is(Move)) return t.traverseMove(unit, dataDown);
    if (unit.is(Commutator)) return t.traverseCommutator(unit, dataDown);
    if (unit.is(Conjugate)) return t.traverseConjugate(unit, dataDown);
    if (unit.is(Pause)) return t.traversePause(unit, dataDown);
    if (unit.is(Newline)) return t.traverseNewline(unit, dataDown);
    if (unit.is(LineComment)) return t.traverseLineComment(unit, dataDown);
    throw new Error(`unknown unit`);
}
function assertIsUnit(t) {
    if (t.is(Grouping) || t.is(Move) || t.is(Commutator) || t.is(Conjugate) || t.is(Pause) || t.is(Newline) || t.is(LineComment)) return t;
    throw "internal error: expected unit";
}
var TraversalDownUp = class {
    traverseUnit(unit, dataDown) {
        return dispatch(this, unit, dataDown);
    }
    traverseIntoUnit(unit, dataDown) {
        return assertIsUnit(this.traverseUnit(unit, dataDown));
    }
};
var TraversalUp = class extends TraversalDownUp {
    traverseUnit(unit) {
        return dispatch(this, unit, void 0);
    }
    traverseIntoUnit(unit) {
        return assertIsUnit(this.traverseUnit(unit));
    }
};
var _newAmount, newAmount_fn;
var _Simplify = class extends TraversalDownUp {
    *traverseAlg(alg, options) {
        if (options.depth === 0) {
            yield* alg.units();
            return;
        }
        const newUnits = [];
        let lastUnit = null;
        const collapseMoves = options?.collapseMoves ?? true;
        function appendMoveWithNewAmount(move, deltaAmount) {
            var _a;
            const newAmount = _chunkWO2AXYFEJs.__privateMethod(_a = _Simplify, _newAmount, newAmount_fn).call(_a, move, deltaAmount, options);
            if (newAmount === 0) return false;
            const newMove = new Move(move.quantum, newAmount);
            newUnits.push(newMove);
            lastUnit = newMove;
            return true;
        }
        function appendCollapsed(newUnit) {
            if (collapseMoves && lastUnit?.is(Move) && newUnit.is(Move) && lastUnit.quantum.isIdentical(newUnit.quantum)) {
                newUnits.pop();
                if (!appendMoveWithNewAmount(lastUnit, newUnit.amount)) lastUnit = newUnits.slice(-1)[0];
            } else if (newUnit.is(Move)) appendMoveWithNewAmount(newUnit, 0);
            else {
                newUnits.push(newUnit);
                lastUnit = newUnit;
            }
        }
        const newOptions = {
            depth: options.depth ? options.depth - 1 : null
        };
        for (const unit of alg.units())for (const ancestorUnit of this.traverseUnit(unit, newOptions))appendCollapsed(ancestorUnit);
        for (const unit1 of newUnits)yield unit1;
    }
    *traverseGrouping(grouping, options) {
        if (options.depth === 0) {
            yield grouping;
            return;
        }
        const newOptions = {
            depth: options.depth ? options.depth - 1 : null
        };
        yield new Grouping(this.traverseAlg(grouping.alg, newOptions));
    }
    *traverseMove(move, _options) {
        yield move;
    }
    *traverseCommutator(commutator, options) {
        if (options.depth === 0) {
            yield commutator;
            return;
        }
        const newOptions = {
            depth: options.depth ? options.depth - 1 : null
        };
        yield new Commutator(this.traverseAlg(commutator.A, newOptions), this.traverseAlg(commutator.B, newOptions));
    }
    *traverseConjugate(conjugate, options) {
        if (options.depth === 0) {
            yield conjugate;
            return;
        }
        const newOptions = {
            depth: options.depth ? options.depth - 1 : null
        };
        yield new Conjugate(this.traverseAlg(conjugate.A, newOptions), this.traverseAlg(conjugate.B, newOptions));
    }
    *traversePause(pause, _options) {
        yield pause;
    }
    *traverseNewline(newline, _options) {
        yield newline;
    }
    *traverseLineComment(comment, _options) {
        yield comment;
    }
};
var Simplify = _Simplify;
_newAmount = new WeakSet();
newAmount_fn = function(move, deltaAmount, options) {
    let newAmount = move.amount + deltaAmount;
    if (options?.quantumMoveOrder) {
        const order = options.quantumMoveOrder(move.quantum);
        const min = Math.floor(order / 2) + 1 - order;
        newAmount = (newAmount % order + order - min) % order + min;
    }
    return newAmount;
};
_chunkWO2AXYFEJs.__privateAdd(Simplify, _newAmount);
var simplifyInstance = new Simplify();
var simplify = simplifyInstance.traverseAlg.bind(simplifyInstance);
// src/cubing/alg/Alg.ts
function toIterable(input) {
    if (!input) return [];
    if (experimentalIs(input, Alg)) return input.units();
    if (typeof input === "string") return parseAlg(input).units();
    const iter = input;
    if (typeof iter[Symbol.iterator] === "function") return iter;
    throw "Invalid unit";
}
function experimentalEnsureAlg(alg) {
    if (experimentalIs(alg, Alg)) return alg;
    return new Alg(alg);
}
var _units2;
var _Alg = class extends AlgCommon {
    constructor(alg){
        super();
        _chunkWO2AXYFEJs.__privateAdd(this, _units2, void 0);
        _chunkWO2AXYFEJs.__privateSet(this, _units2, Array.from(toIterable(alg)));
        for (const unit of _chunkWO2AXYFEJs.__privateGet(this, _units2)){
            if (!experimentalIsUnit(unit)) throw new Error("An alg can only contain units.");
        }
    }
    isIdentical(other) {
        const otherAsAlg = other;
        if (!other.is(_Alg)) return false;
        const l1 = Array.from(_chunkWO2AXYFEJs.__privateGet(this, _units2));
        const l2 = Array.from(_chunkWO2AXYFEJs.__privateGet(otherAsAlg, _units2));
        if (l1.length !== l2.length) return false;
        for(let i = 0; i < l1.length; i++){
            if (!l1[i].isIdentical(l2[i])) return false;
        }
        return true;
    }
    invert() {
        return new _Alg(reverse(Array.from(_chunkWO2AXYFEJs.__privateGet(this, _units2)).map((u)=>u.invert()
        )));
    }
    *experimentalExpand(iterDir = IterationDirection.Forwards, depth) {
        depth ?? (depth = Infinity);
        for (const unit of direct(_chunkWO2AXYFEJs.__privateGet(this, _units2), iterDir))yield* unit.experimentalExpand(iterDir, depth);
    }
    expand(options) {
        return new _Alg(this.experimentalExpand(IterationDirection.Forwards, options?.depth ?? Infinity));
    }
    *experimentalLeafMoves() {
        for (const leaf of this.experimentalExpand())if (leaf.is(Move)) yield leaf;
    }
    concat(input) {
        return new _Alg(Array.from(_chunkWO2AXYFEJs.__privateGet(this, _units2)).concat(Array.from(toIterable(input))));
    }
    experimentalIsEmpty() {
        for (const _ of _chunkWO2AXYFEJs.__privateGet(this, _units2))return false;
        return true;
    }
    static fromString(s) {
        return parseAlg(s);
    }
    *units() {
        for (const unit of _chunkWO2AXYFEJs.__privateGet(this, _units2))yield unit;
    }
    experimentalNumUnits() {
        return Array.from(_chunkWO2AXYFEJs.__privateGet(this, _units2)).length;
    }
    get type() {
        warnOnce("deprecated: type");
        return "sequence";
    }
    toString() {
        let output = "";
        let previousUnit = null;
        for (const unit of _chunkWO2AXYFEJs.__privateGet(this, _units2)){
            if (previousUnit) output += spaceBetween(previousUnit, unit);
            output += unit.toString();
            previousUnit = unit;
        }
        return output;
    }
    simplify(options) {
        return new _Alg(simplify(this, options ?? {
        }));
    }
};
var Alg = _Alg;
_units2 = new WeakMap();
function spaceBetween(u1, u2) {
    if (u1.is(Newline) || u2.is(Newline)) return "";
    if (u1.is(LineComment) && !u2.is(Newline)) return "\n";
    return " ";
}
// src/cubing/alg/example.ts
var Example = {
    Sune: new Alg([
        new Move("R", 1),
        new Move("U", 1),
        new Move("R", -1),
        new Move("U", 1),
        new Move("R", 1),
        new Move("U", -2),
        new Move("R", -1)
    ]),
    AntiSune: new Alg([
        new Move("R", 1),
        new Move("U", 2),
        new Move("R", -1),
        new Move("U", -1),
        new Move("R", 1),
        new Move("U", -1),
        new Move("R", -1)
    ]),
    SuneCommutator: new Alg([
        new Commutator(new Alg([
            new Move("R", 1),
            new Move("U", 1),
            new Move("R", -2)
        ]), new Alg([
            new Conjugate(new Alg([
                new Move("R", 1)
            ]), new Alg([
                new Move("U", 1)
            ]))
        ]))
    ]),
    Niklas: new Alg([
        new Move("R", 1),
        new Move("U", -1),
        new Move("L", -1),
        new Move("U", 1),
        new Move("R", -1),
        new Move("U", -1),
        new Move("L", 1),
        new Move("U", 1)
    ]),
    EPerm: new Alg([
        new Move("x", -1),
        new Commutator(new Alg([
            new Conjugate(new Alg([
                new Move("R", 1)
            ]), new Alg([
                new Move("U", -1)
            ]))
        ]), new Alg([
            new Move("D", 1)
        ])),
        new Commutator(new Alg([
            new Conjugate(new Alg([
                new Move("R", 1)
            ]), new Alg([
                new Move("U", 1)
            ]))
        ]), new Alg([
            new Move("D", 1)
        ])),
        new Move("x", 1)
    ]),
    FURURFCompact: new Alg([
        new Conjugate(new Alg([
            new Move("F", 1)
        ]), new Alg([
            new Commutator(new Alg([
                new Move("U", 1)
            ]), new Alg([
                new Move("R", 1)
            ]))
        ]))
    ]),
    APermCompact: new Alg([
        new Conjugate(new Alg([
            new Move("R", 2)
        ]), new Alg([
            new Commutator(new Alg([
                new Move("F", 2)
            ]), new Alg([
                new Move("R", -1),
                new Move("B", -1),
                new Move("R", 1)
            ]))
        ]))
    ]),
    FURURFMoves: new Alg([
        new Move("F", 1),
        new Move("U", 1),
        new Move("R", 1),
        new Move("U", -1),
        new Move("R", -1),
        new Move("F", -1)
    ]),
    TPerm: new Alg([
        new Move("R", 1),
        new Move("U", 1),
        new Move("R", -1),
        new Move("U", -1),
        new Move("R", -1),
        new Move("F", 1),
        new Move("R", 2),
        new Move("U", -1),
        new Move("R", -1),
        new Move("U", -1),
        new Move("R", 1),
        new Move("U", 1),
        new Move("R", -1),
        new Move("F", -1)
    ]),
    HeadlightSwaps: new Alg([
        new Conjugate(new Alg([
            new Move("F", 1)
        ]), new Alg([
            new Grouping(new Alg([
                new Commutator(new Alg([
                    new Move("R", 1)
                ]), new Alg([
                    new Move("U", 1)
                ]))
            ]), 3)
        ]))
    ]),
    TriplePause: new Alg([
        new Pause(),
        new Pause(),
        new Pause()
    ])
};
// src/cubing/alg/keyboard.ts
var cubeKeyMapping = {
    73: new Move("R"),
    75: new Move("R'"),
    87: new Move("B"),
    79: new Move("B'"),
    83: new Move("D"),
    76: new Move("D'"),
    68: new Move("L"),
    69: new Move("L'"),
    74: new Move("U"),
    70: new Move("U'"),
    72: new Move("F"),
    71: new Move("F'"),
    78: new Move("x'"),
    67: new Move("l"),
    82: new Move("l'"),
    85: new Move("r"),
    77: new Move("r'"),
    88: new Move("d"),
    188: new Move("d'"),
    84: new Move("x"),
    89: new Move("x"),
    66: new Move("x'"),
    186: new Move("y"),
    59: new Move("y"),
    65: new Move("y'"),
    80: new Move("z"),
    81: new Move("z'"),
    90: new Move("M'"),
    190: new Move("M'")
};
function keyToMove(e) {
    if (e.altKey || e.ctrlKey) return null;
    return cubeKeyMapping[e.keyCode] || null;
}
// src/cubing/alg/url.ts
function serializeURLParam(a) {
    let escaped = a.toString();
    escaped = escaped.replace(/_/g, "&#95;").replace(/ /g, "_");
    escaped = escaped.replace(/\+/g, "&#2b;");
    escaped = escaped.replace(/-/g, "&#45;").replace(/'/g, "-");
    return escaped;
}
function algCubingNetLink(options) {
    const url = new URL("https://alg.cubing.net");
    if (!options.alg) throw new Error("An alg parameter is required.");
    url.searchParams.set("alg", serializeURLParam(options.alg));
    if (options.setup) url.searchParams.set("setup", serializeURLParam(options.setup));
    if (options.title) url.searchParams.set("title", options.title);
    if (options.puzzle) {
        if (![
            "1x1x1",
            "2x2x2",
            "3x3x3",
            "4x4x4",
            "5x5x5",
            "6x6x6",
            "7x7x7",
            "8x8x8",
            "9x9x9",
            "10x10x10",
            "11x11x11",
            "12x12x12",
            "13x13x13",
            "14x14x14",
            "16x16x16",
            "17x17x17"
        ].includes(options.puzzle)) throw new Error(`Invalid puzzle parameter: ${options.puzzle}`);
        url.searchParams.set("puzzle", options.puzzle);
    }
    if (options.stage) {
        if (![
            "full",
            "cross",
            "F2L",
            "LL",
            "OLL",
            "PLL",
            "CLS",
            "ELS",
            "L6E",
            "CMLL",
            "WV",
            "ZBLL",
            "void"
        ].includes(options.stage)) throw new Error(`Invalid stage parameter: ${options.stage}`);
        url.searchParams.set("stage", options.stage);
    }
    if (options.view) {
        if (![
            "editor",
            "playback",
            "fullscreen"
        ].includes(options.view)) throw new Error(`Invalid view parameter: ${options.view}`);
        url.searchParams.set("view", options.view);
    }
    if (options.type) {
        if (![
            "moves",
            "reconstruction",
            "alg",
            "reconstruction-end-with-setup"
        ].includes(options.type)) throw new Error(`Invalid type parameter: ${options.type}`);
        url.searchParams.set("type", options.type);
    }
    return url.toString();
}
// src/cubing/alg/operation.ts
function experimentalAppendMove(alg, newMove, options) {
    const oldUnits = Array.from(alg.units());
    const oldLastMove = oldUnits[oldUnits.length - 1];
    if (options?.coalesce && oldLastMove && oldLastMove.quantum && oldLastMove.quantum.isIdentical(newMove.quantum)) {
        const newUnits = oldUnits.slice(0, oldUnits.length - 1);
        let newAmount = oldLastMove.amount + newMove.amount;
        const mod = options?.mod;
        if (mod) {
            newAmount = (newAmount % mod + mod) % mod;
            if (newAmount * 2 > mod) newAmount -= mod;
        }
        if (newAmount !== 0) newUnits.push(oldLastMove.modified({
            amount: newAmount
        }));
        return new Alg(newUnits);
    } else return new Alg([
        ...oldUnits,
        newMove
    ]);
}

},{"./chunk-WO2AXYFE.js":"dbeiO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dbeiO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__privateGet", ()=>__privateGet
);
parcelHelpers.export(exports, "__privateAdd", ()=>__privateAdd
);
parcelHelpers.export(exports, "__privateSet", ()=>__privateSet
);
parcelHelpers.export(exports, "__privateWrapper", ()=>__privateWrapper
);
parcelHelpers.export(exports, "__privateMethod", ()=>__privateMethod
);
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var __privateWrapper = (obj, member, setter, getter)=>{
    return {
        set _ (value){
            __privateSet(obj, member, value, setter);
        },
        get _ () {
            return __privateGet(obj, member, getter);
        }
    };
};
var __privateMethod = (obj, member, method)=>{
    __accessCheck(obj, member, "access private method");
    return method;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"fhe6d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cube2x2x2", ()=>_chunkBOKO2BWTJs.cube2x2x2
);
parcelHelpers.export(exports, "cube3x3x3", ()=>_chunkBOKO2BWTJs.cube3x3x3
);
parcelHelpers.export(exports, "eventInfo", ()=>_chunkBOKO2BWTJs.eventInfo
);
parcelHelpers.export(exports, "experimental3x3x3KPuzzle", ()=>_chunkFE3HTWQKJs.experimental3x3x3KPuzzle
);
parcelHelpers.export(exports, "experimentalCubeAppearance", ()=>_chunkBOKO2BWTJs.cubeAppearance
);
parcelHelpers.export(exports, "experimentalCustomPGPuzzleLoader", ()=>_chunkBOKO2BWTJs.customPGPuzzleLoader
);
parcelHelpers.export(exports, "experimentalGetFaceletAppearance", ()=>_chunkBOKO2BWTJs.getFaceletAppearance
);
parcelHelpers.export(exports, "puzzles", ()=>_chunkBOKO2BWTJs.puzzles
);
parcelHelpers.export(exports, "wcaEventInfo", ()=>_chunkBOKO2BWTJs.wcaEventInfo
);
var _chunkBOKO2BWTJs = require("../chunk-BOKO2BWT.js");
var _chunkFE3HTWQKJs = require("../chunk-FE3HTWQK.js");
var _chunkEWRBHQFXJs = require("../chunk-EWRBHQFX.js");
var _chunkWO2AXYFEJs = require("../chunk-WO2AXYFE.js");

},{"../chunk-BOKO2BWT.js":"abt9g","../chunk-FE3HTWQK.js":"jNiOS","../chunk-EWRBHQFX.js":"i6QEj","../chunk-WO2AXYFE.js":"dbeiO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"abt9g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "customPGPuzzleLoader", ()=>customPGPuzzleLoader
);
parcelHelpers.export(exports, "wcaEventInfo", ()=>wcaEventInfo
);
parcelHelpers.export(exports, "eventInfo", ()=>eventInfo
);
parcelHelpers.export(exports, "getFaceletAppearance", ()=>getFaceletAppearance
);
parcelHelpers.export(exports, "cubeAppearance", ()=>cubeAppearance
);
parcelHelpers.export(exports, "cube2x2x2", ()=>cube2x2x2
);
parcelHelpers.export(exports, "cube3x3x3", ()=>cube3x3x3
);
parcelHelpers.export(exports, "puzzles", ()=>puzzles
);
var _chunkFE3HTWQKJs = require("./chunk-FE3HTWQK.js");
var _chunkWO2AXYFEJs = require("./chunk-WO2AXYFE.js");
// src/cubing/puzzles/customPGPuzzleLoader.ts
async function descAsyncGetPuzzleGeometry(desc) {
    const puzzleGeometry = await require("affae084a693c1a0");
    return puzzleGeometry.getPuzzleGeometryByDesc(desc, {
        allMoves: true,
        orientCenters: true,
        addRotations: true
    });
}
async function asyncGetKPuzzle(desc) {
    const pg = await descAsyncGetPuzzleGeometry(desc);
    const kpuzzleDefinition = pg.getKPuzzleDefinition(true);
    kpuzzleDefinition.name = `description: ${desc}`;
    const puzzleGeometry = await require("affae084a693c1a0");
    const pgNotation = new puzzleGeometry.ExperimentalPGNotation(pg, pg.getOrbitsDef(true));
    return new _chunkFE3HTWQKJs.KPuzzle(kpuzzleDefinition, {
        experimentalPGNotation: pgNotation
    });
}
var nextCustomID = 1;
function customPGPuzzleLoader(desc, info) {
    const customID = nextCustomID++;
    let cachedKPuzzle = null;
    const puzzleLoader = {
        id: `custom-${customID}`,
        fullName: info?.fullName ?? `Custom Puzzle (instance #${customID})`,
        kpuzzle: async ()=>{
            return cachedKPuzzle ?? (cachedKPuzzle = asyncGetKPuzzle(desc));
        },
        svg: async ()=>{
            const pg = await descAsyncGetPuzzleGeometry(desc);
            return pg.generatesvg();
        },
        pg: async ()=>{
            return descAsyncGetPuzzleGeometry(desc);
        }
    };
    if (info?.inventedBy) puzzleLoader.inventedBy = info.inventedBy;
    if (info?.inventionYear) puzzleLoader.inventionYear = info.inventionYear;
    return puzzleLoader;
}
// src/cubing/puzzles/events.ts
var wcaEvents = {
    "333": {
        puzzleID: "3x3x3",
        eventName: "3x3x3 Cube"
    },
    "222": {
        puzzleID: "2x2x2",
        eventName: "2x2x2 Cube"
    },
    "444": {
        puzzleID: "4x4x4",
        eventName: "4x4x4 Cube"
    },
    "555": {
        puzzleID: "5x5x5",
        eventName: "5x5x5 Cube"
    },
    "666": {
        puzzleID: "6x6x6",
        eventName: "6x6x6 Cube"
    },
    "777": {
        puzzleID: "7x7x7",
        eventName: "7x7x7 Cube"
    },
    "333bf": {
        puzzleID: "3x3x3",
        eventName: "3x3x3 Blindfolded"
    },
    "333fm": {
        puzzleID: "3x3x3",
        eventName: "3x3x3 Fewest Moves"
    },
    "333oh": {
        puzzleID: "3x3x3",
        eventName: "3x3x3 One-Handed"
    },
    "clock": {
        puzzleID: "clock",
        eventName: "Clock"
    },
    "minx": {
        puzzleID: "megaminx",
        eventName: "Megaminx"
    },
    "pyram": {
        puzzleID: "pyraminx",
        eventName: "Pyraminx"
    },
    "skewb": {
        puzzleID: "skewb",
        eventName: "Skewb"
    },
    "sq1": {
        puzzleID: "square1",
        eventName: "Square-1"
    },
    "444bf": {
        puzzleID: "4x4x4",
        eventName: "4x4x4 Blindfolded"
    },
    "555bf": {
        puzzleID: "5x5x5",
        eventName: "5x5x5 Blindfolded"
    },
    "333mb": {
        puzzleID: "3x3x3",
        eventName: "3x3x3 Multi-Blind"
    }
};
function wcaEventInfo(event) {
    return wcaEvents[event] ?? null;
}
var events = {
    ...wcaEvents,
    fto: {
        puzzleID: "fto",
        eventName: "Face-Turning Octahedron"
    },
    master_tetraminx: {
        puzzleID: "master_tetraminx",
        eventName: "Master Tetraminx"
    },
    kilominx: {
        puzzleID: "kilominx",
        eventName: "Kilominx"
    },
    redi_cube: {
        puzzleID: "redi_cube",
        eventName: "Redi Cube"
    }
};
function eventInfo(event) {
    return events[event] ?? null;
}
// src/cubing/puzzles/stickerings/appearance.ts
function getFaceletAppearance(appearance, orbitName, pieceIdx, faceletIdx, hint) {
    const orbitAppearance = appearance.orbits[orbitName];
    const pieceAppearance = orbitAppearance.pieces[pieceIdx];
    if (pieceAppearance === null) return regular;
    const faceletAppearance = pieceAppearance.facelets[faceletIdx];
    if (faceletAppearance === null) return regular;
    if (typeof faceletAppearance === "string") return faceletAppearance;
    if (hint) return faceletAppearance.hintAppearance ?? faceletAppearance.appearance;
    return faceletAppearance.appearance;
}
var PieceStickering;
(function(PieceStickering2) {
    PieceStickering2["Regular"] = "Regular";
    PieceStickering2["Dim"] = "Dim";
    PieceStickering2["Ignored"] = "Ignored";
    PieceStickering2["OrientationStickers"] = "OrientationStickers";
    PieceStickering2["Invisible"] = "Invisible";
    PieceStickering2["Ignoriented"] = "Ignoriented";
    PieceStickering2["IgnoreNonPrimary"] = "IgnoreNonPrimary";
    PieceStickering2["PermuteNonPrimary"] = "PermuteNonPrimary";
    PieceStickering2["OrientationWithoutPermutation"] = "OrientationWithoutPermutation";
})(PieceStickering || (PieceStickering = {
}));
var PieceAnnotation = class {
    constructor(kpuzzle, defaultValue){
        this.stickerings = new Map();
        for (const [orbitName, orbitDef] of Object.entries(kpuzzle.definition.orbits))this.stickerings.set(orbitName, new Array(orbitDef.numPieces).fill(defaultValue));
    }
};
var regular = "regular";
var ignored = "ignored";
var oriented = "oriented";
var invisible = "invisible";
var dim = "dim";
var r = {
    facelets: [
        regular,
        regular,
        regular,
        regular,
        regular
    ]
};
var i = {
    facelets: [
        ignored,
        ignored,
        ignored,
        ignored,
        ignored
    ]
};
var o = {
    facelets: [
        oriented,
        oriented,
        oriented,
        oriented,
        oriented
    ]
};
var invisiblePiece = {
    facelets: [
        invisible,
        invisible,
        invisible,
        invisible
    ]
};
var riiii = {
    facelets: [
        regular,
        ignored,
        ignored,
        ignored,
        ignored
    ]
};
var drrrr = {
    facelets: [
        dim,
        regular,
        regular,
        regular,
        regular
    ]
};
var d = {
    facelets: [
        dim,
        dim,
        dim,
        dim,
        dim
    ]
};
var diiii = {
    facelets: [
        dim,
        ignored,
        ignored,
        ignored,
        ignored
    ]
};
var oiiii = {
    facelets: [
        oriented,
        ignored,
        ignored,
        ignored,
        ignored
    ]
};
function getPieceAppearance(pieceStickering) {
    switch(pieceStickering){
        case PieceStickering.Regular:
            return r;
        case PieceStickering.Dim:
            return d;
        case PieceStickering.Ignored:
            return i;
        case PieceStickering.OrientationStickers:
            return o;
        case PieceStickering.Invisible:
            return invisiblePiece;
        case PieceStickering.IgnoreNonPrimary:
            return riiii;
        case PieceStickering.PermuteNonPrimary:
            return drrrr;
        case PieceStickering.Ignoriented:
            return diiii;
        case PieceStickering.OrientationWithoutPermutation:
            return oiiii;
    }
}
var PuzzleStickering = class extends PieceAnnotation {
    constructor(kpuzzle){
        super(kpuzzle, PieceStickering.Regular);
    }
    set(pieceSet, pieceStickering) {
        for (const [orbitName, pieces] of this.stickerings.entries()){
            for(let i2 = 0; i2 < pieces.length; i2++)if (pieceSet.stickerings.get(orbitName)[i2]) pieces[i2] = pieceStickering;
        }
        return this;
    }
    toAppearance() {
        const appearance = {
            orbits: {
            }
        };
        for (const [orbitName, pieceStickerings] of this.stickerings.entries()){
            const pieces = [];
            const orbitAppearance = {
                pieces
            };
            appearance.orbits[orbitName] = orbitAppearance;
            for (const pieceStickering of pieceStickerings)pieces.push(getPieceAppearance(pieceStickering));
        }
        return appearance;
    }
};
var StickeringManager = class {
    constructor(kpuzzle){
        this.kpuzzle = kpuzzle;
    }
    and(pieceSets) {
        const newPieceSet = new PieceAnnotation(this.kpuzzle, false);
        for (const [orbitName, orbitDef] of Object.entries(this.kpuzzle.definition.orbits))pieceLoop: for(let i2 = 0; i2 < orbitDef.numPieces; i2++){
            newPieceSet.stickerings.get(orbitName)[i2] = true;
            for (const pieceSet of pieceSets)if (!pieceSet.stickerings.get(orbitName)[i2]) {
                newPieceSet.stickerings.get(orbitName)[i2] = false;
                continue pieceLoop;
            }
        }
        return newPieceSet;
    }
    or(pieceSets) {
        const newPieceSet = new PieceAnnotation(this.kpuzzle, false);
        for (const [orbitName, orbitDef] of Object.entries(this.kpuzzle.definition.orbits))pieceLoop: for(let i2 = 0; i2 < orbitDef.numPieces; i2++){
            newPieceSet.stickerings.get(orbitName)[i2] = false;
            for (const pieceSet of pieceSets)if (pieceSet.stickerings.get(orbitName)[i2]) {
                newPieceSet.stickerings.get(orbitName)[i2] = true;
                continue pieceLoop;
            }
        }
        return newPieceSet;
    }
    not(pieceSet) {
        const newPieceSet = new PieceAnnotation(this.kpuzzle, false);
        for (const [orbitName, orbitDef] of Object.entries(this.kpuzzle.definition.orbits))for(let i2 = 0; i2 < orbitDef.numPieces; i2++)newPieceSet.stickerings.get(orbitName)[i2] = !pieceSet.stickerings.get(orbitName)[i2];
        return newPieceSet;
    }
    all() {
        return this.and(this.moves([]));
    }
    move(moveSource) {
        const transformation = this.kpuzzle.moveToTransformation(moveSource);
        const newPieceSet = new PieceAnnotation(this.kpuzzle, false);
        for (const [orbitName, orbitDef] of Object.entries(this.kpuzzle.definition.orbits)){
            for(let i2 = 0; i2 < orbitDef.numPieces; i2++)if (transformation.transformationData[orbitName].permutation[i2] !== i2 || transformation.transformationData[orbitName].orientation[i2] !== 0) newPieceSet.stickerings.get(orbitName)[i2] = true;
        }
        return newPieceSet;
    }
    moves(moveSources) {
        return moveSources.map((moveSource)=>this.move(moveSource)
        );
    }
};
// src/cubing/puzzles/stickerings/global-custom-stickering-hack.ts
var globalCustomStickerer = ()=>{
};
function setGlobalCustomStickerer(stickerer) {
    (async ()=>{
        globalCustomStickerer = stickerer;
        const players = Array.from(document.body.querySelectorAll("twisty-player"));
        console.log(`Setting the custom stickering for ${players.length} players!`);
        const successPromises = [];
        for (const player of players)successPromises.push((async ()=>{
            const stickering = await player.experimentalModel.stickering.get();
            player.experimentalStickering = stickering === "experimental-global-custom-1" ? "experimental-global-custom-2" : "experimental-global-custom-1";
        })());
        await Promise.all(successPromises);
        console.log("Success!");
    })();
}
function useGlobalCustomStickerer(puzzleStickering, m) {
    globalCustomStickerer(puzzleStickering, m);
}
if (globalThis.location && new URL(location.href).searchParams.get("global-custom-stickerer") === "true") {
    window.setGlobalCustomStickerer = setGlobalCustomStickerer;
    window.PieceStickering = PieceStickering;
    console.log("Global custom stickerer enabled! (using: global-custom-stickerer=true)");
    console.log("Look here for inspiration:", "https://github.com/cubing/cubing.js/blob/81b5cab3e27d8defb39dd1e0a10bc9e8ba894d26/src/cubing/puzzles/stickerings/cube-stickerings.ts#L67");
}
// src/cubing/puzzles/stickerings/cube-stickerings.ts
async function cubeAppearance(puzzleLoader, stickering) {
    const kpuzzle = await puzzleLoader.kpuzzle();
    const puzzleStickering = new PuzzleStickering(kpuzzle);
    const m = new StickeringManager(kpuzzle);
    const LL = ()=>m.move("U")
    ;
    const orUD = ()=>m.or(m.moves([
            "U",
            "D"
        ]))
    ;
    const E = ()=>m.not(orUD())
    ;
    const orLR = ()=>m.or(m.moves([
            "L",
            "R"
        ]))
    ;
    const M = ()=>m.not(orLR())
    ;
    const orFB = ()=>m.or(m.moves([
            "F",
            "B"
        ]))
    ;
    const S = ()=>m.not(orFB())
    ;
    const F2L = ()=>m.not(LL())
    ;
    const centerU = ()=>m.and([
            LL(),
            M(),
            S()
        ])
    ;
    const edgeFR = ()=>m.and([
            m.and(m.moves([
                "F",
                "R"
            ])),
            m.not(orUD())
        ])
    ;
    const cornerDFR = ()=>m.and(m.moves([
            "D",
            "R",
            "F"
        ]))
    ;
    const slotFR = ()=>m.or([
            cornerDFR(),
            edgeFR()
        ])
    ;
    const CENTERS = ()=>m.or([
            m.and([
                M(),
                E()
            ]),
            m.and([
                M(),
                S()
            ]),
            m.and([
                E(),
                S()
            ])
        ])
    ;
    const EDGES = ()=>m.or([
            m.and([
                M(),
                orUD(),
                orFB()
            ]),
            m.and([
                E(),
                orLR(),
                orFB()
            ]),
            m.and([
                S(),
                orUD(),
                orLR()
            ])
        ])
    ;
    const CORNERS = ()=>m.not(m.or([
            CENTERS(),
            EDGES()
        ]))
    ;
    const L6E = ()=>m.or([
            M(),
            m.and([
                LL(),
                EDGES()
            ])
        ])
    ;
    function dimF2L() {
        puzzleStickering.set(F2L(), PieceStickering.Dim);
    }
    function setPLL() {
        puzzleStickering.set(LL(), PieceStickering.PermuteNonPrimary);
        puzzleStickering.set(centerU(), PieceStickering.Dim);
    }
    function setOLL() {
        puzzleStickering.set(LL(), PieceStickering.IgnoreNonPrimary);
        puzzleStickering.set(centerU(), PieceStickering.Regular);
    }
    function dimOLL() {
        puzzleStickering.set(LL(), PieceStickering.Ignoriented);
        puzzleStickering.set(centerU(), PieceStickering.Dim);
    }
    switch(stickering){
        case "full":
            break;
        case "PLL":
            dimF2L();
            setPLL();
            break;
        case "CLS":
            dimF2L();
            puzzleStickering.set(m.and(m.moves([
                "D",
                "R",
                "F"
            ])), PieceStickering.Regular);
            puzzleStickering.set(LL(), PieceStickering.Ignoriented);
            puzzleStickering.set(m.and([
                LL(),
                M(),
                S()
            ]), PieceStickering.Dim);
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), PieceStickering.IgnoreNonPrimary);
            break;
        case "OLL":
            dimF2L();
            setOLL();
            break;
        case "COLL":
            dimF2L();
            setPLL();
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), PieceStickering.Regular);
            break;
        case "OCLL":
            dimF2L();
            dimOLL();
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), PieceStickering.IgnoreNonPrimary);
            break;
        case "CLL":
            dimF2L();
            puzzleStickering.set(m.not(m.and([
                CORNERS(),
                LL()
            ])), PieceStickering.Dim);
            break;
        case "ELL":
            dimF2L();
            puzzleStickering.set(LL(), PieceStickering.Dim);
            puzzleStickering.set(m.and([
                LL(),
                EDGES()
            ]), PieceStickering.Regular);
            break;
        case "ELS":
            dimF2L();
            setOLL();
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), PieceStickering.Ignored);
            puzzleStickering.set(edgeFR(), PieceStickering.Regular);
            puzzleStickering.set(cornerDFR(), PieceStickering.Ignored);
            break;
        case "LL":
            dimF2L();
            break;
        case "F2L":
            puzzleStickering.set(LL(), PieceStickering.Ignored);
            break;
        case "ZBLL":
            dimF2L();
            puzzleStickering.set(LL(), PieceStickering.PermuteNonPrimary);
            puzzleStickering.set(centerU(), PieceStickering.Dim);
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), PieceStickering.Regular);
            break;
        case "ZBLS":
            dimF2L();
            puzzleStickering.set(slotFR(), PieceStickering.Regular);
            setOLL();
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), PieceStickering.Ignored);
            break;
        case "WVLS":
        case "VLS":
            dimF2L();
            puzzleStickering.set(slotFR(), PieceStickering.Regular);
            setOLL();
            break;
        case "LS":
            dimF2L();
            puzzleStickering.set(slotFR(), PieceStickering.Regular);
            puzzleStickering.set(LL(), PieceStickering.Ignored);
            puzzleStickering.set(centerU(), PieceStickering.Dim);
            break;
        case "EO":
            puzzleStickering.set(CORNERS(), PieceStickering.Ignored);
            puzzleStickering.set(EDGES(), PieceStickering.OrientationWithoutPermutation);
            break;
        case "EOline":
            puzzleStickering.set(CORNERS(), PieceStickering.Ignored);
            puzzleStickering.set(EDGES(), PieceStickering.OrientationWithoutPermutation);
            puzzleStickering.set(m.and(m.moves([
                "D",
                "M"
            ])), PieceStickering.Regular);
            break;
        case "EOcross":
            puzzleStickering.set(EDGES(), PieceStickering.OrientationWithoutPermutation);
            puzzleStickering.set(m.move("D"), PieceStickering.Regular);
            puzzleStickering.set(CORNERS(), PieceStickering.Ignored);
            break;
        case "CMLL":
            puzzleStickering.set(F2L(), PieceStickering.Dim);
            puzzleStickering.set(L6E(), PieceStickering.Ignored);
            puzzleStickering.set(m.and([
                LL(),
                CORNERS()
            ]), PieceStickering.Regular);
            break;
        case "L6E":
            puzzleStickering.set(m.not(L6E()), PieceStickering.Dim);
            break;
        case "L6EO":
            puzzleStickering.set(m.not(L6E()), PieceStickering.Dim);
            puzzleStickering.set(L6E(), PieceStickering.OrientationWithoutPermutation);
            puzzleStickering.set(m.and([
                CENTERS(),
                orUD()
            ]), PieceStickering.OrientationStickers);
            break;
        case "Daisy":
            puzzleStickering.set(m.all(), PieceStickering.Ignored);
            puzzleStickering.set(CENTERS(), PieceStickering.Dim);
            puzzleStickering.set(m.and([
                m.move("D"),
                CENTERS()
            ]), PieceStickering.Regular);
            puzzleStickering.set(m.and([
                m.move("U"),
                EDGES()
            ]), PieceStickering.IgnoreNonPrimary);
            break;
        case "Cross":
            puzzleStickering.set(m.all(), PieceStickering.Ignored);
            puzzleStickering.set(CENTERS(), PieceStickering.Dim);
            puzzleStickering.set(m.and([
                m.move("D"),
                CENTERS()
            ]), PieceStickering.Regular);
            puzzleStickering.set(m.and([
                m.move("D"),
                EDGES()
            ]), PieceStickering.Regular);
            break;
        case "2x2x2":
            puzzleStickering.set(m.or(m.moves([
                "U",
                "F",
                "R"
            ])), PieceStickering.Ignored);
            puzzleStickering.set(m.and([
                m.or(m.moves([
                    "U",
                    "F",
                    "R"
                ])),
                CENTERS()
            ]), PieceStickering.Dim);
            break;
        case "2x2x3":
            puzzleStickering.set(m.all(), PieceStickering.Dim);
            puzzleStickering.set(m.or(m.moves([
                "U",
                "F",
                "R"
            ])), PieceStickering.Ignored);
            puzzleStickering.set(m.and([
                m.or(m.moves([
                    "U",
                    "F",
                    "R"
                ])),
                CENTERS()
            ]), PieceStickering.Dim);
            puzzleStickering.set(m.and([
                m.move("F"),
                m.not(m.or(m.moves([
                    "U",
                    "R"
                ])))
            ]), PieceStickering.Regular);
            break;
        case "Void Cube":
            puzzleStickering.set(CENTERS(), PieceStickering.Invisible);
            break;
        case "picture":
        case "invisible":
            puzzleStickering.set(m.all(), PieceStickering.Invisible);
            break;
        case "centers-only":
            puzzleStickering.set(m.not(CENTERS()), PieceStickering.Ignored);
            break;
        case "experimental-global-custom-1":
        case "experimental-global-custom-2":
            useGlobalCustomStickerer(puzzleStickering, m);
            break;
        default:
            console.warn(`Unsupported stickering for ${puzzleLoader.id}: ${stickering}. Setting all pieces to dim.`);
            puzzleStickering.set(m.and(m.moves([])), PieceStickering.Dim);
    }
    return puzzleStickering.toAppearance();
}
async function cubeStickerings() {
    return [
        "full",
        "PLL",
        "CLS",
        "OLL",
        "COLL",
        "OCLL",
        "ELL",
        "ELS",
        "LL",
        "F2L",
        "ZBLL",
        "ZBLS",
        "WVLS",
        "VLS",
        "LS",
        "EO",
        "EOline",
        "EOcross",
        "CMLL",
        "L6E",
        "L6EO",
        "Daisy",
        "Cross",
        "2x2x2",
        "2x2x3",
        "Void Cube",
        "picture",
        "invisible",
        "centers-only"
    ];
}
// src/cubing/puzzles/async/lazy-cached.ts
function getCached(getValue) {
    let cachedPromise = null;
    return ()=>{
        return cachedPromise ?? (cachedPromise = getValue());
    };
}
// src/cubing/puzzles/async/async-pg3d.ts
async function asyncGetPuzzleGeometry(puzzleName) {
    const puzzleGeometry = await require("affae084a693c1a0");
    return puzzleGeometry.getPuzzleGeometryByName(puzzleName, {
        allMoves: true,
        orientCenters: true,
        addRotations: true
    });
}
async function asyncGetKPuzzle2(pgPromise, puzzleName) {
    const pg = await pgPromise;
    const kpuzzleDefinition = pg.getKPuzzleDefinition(true);
    kpuzzleDefinition.name = puzzleName;
    const puzzleGeometry = await require("affae084a693c1a0");
    const pgNotation = new puzzleGeometry.ExperimentalPGNotation(pg, pg.getOrbitsDef(true));
    return new _chunkFE3HTWQKJs.KPuzzle(kpuzzleDefinition, {
        experimentalPGNotation: pgNotation
    });
}
var _cachedPG, _cachedKPuzzle, _cachedSVG;
var PGPuzzleLoader = class {
    constructor(info){
        _chunkWO2AXYFEJs.__privateAdd(this, _cachedPG, void 0);
        _chunkWO2AXYFEJs.__privateAdd(this, _cachedKPuzzle, void 0);
        _chunkWO2AXYFEJs.__privateAdd(this, _cachedSVG, void 0);
        this.pgId = info.pgID;
        this.id = info.id;
        this.fullName = info.fullName;
        this.inventedBy = info.inventedBy;
        this.inventionYear = info.inventionYear;
    }
    pg() {
        return _chunkWO2AXYFEJs.__privateGet(this, _cachedPG) ?? _chunkWO2AXYFEJs.__privateSet(this, _cachedPG, asyncGetPuzzleGeometry(this.pgId ?? this.id));
    }
    kpuzzle() {
        return _chunkWO2AXYFEJs.__privateGet(this, _cachedKPuzzle) ?? _chunkWO2AXYFEJs.__privateSet(this, _cachedKPuzzle, asyncGetKPuzzle2(this.pg(), this.id));
    }
    svg() {
        return _chunkWO2AXYFEJs.__privateGet(this, _cachedSVG) ?? _chunkWO2AXYFEJs.__privateSet(this, _cachedSVG, (async ()=>(await this.pg()).generatesvg()
        )());
    }
};
_cachedPG = new WeakMap();
_cachedKPuzzle = new WeakMap();
_cachedSVG = new WeakMap();
var CubePGPuzzleLoader = class extends PGPuzzleLoader {
    constructor(){
        super(...arguments);
        this.stickerings = cubeStickerings;
    }
    appearance(stickering) {
        return cubeAppearance(this, stickering);
    }
};
// src/cubing/puzzles/implementations/2x2x2/index.ts
var cube2x2x2 = {
    id: "2x2x2",
    fullName: "2\xD72\xD72 Cube",
    kpuzzle: getCached(async ()=>new _chunkFE3HTWQKJs.KPuzzle((await require("f68b32b1cab16fb1")).cube2x2x2KPuzzleDefinition)
    ),
    svg: async ()=>{
        return (await require("6d00c4ad32023e09")).default;
    },
    pg: getCached(async ()=>{
        return asyncGetPuzzleGeometry("2x2x2");
    }),
    appearance: (stickering)=>cubeAppearance(cube2x2x2, stickering)
    ,
    stickerings: cubeStickerings
};
// src/cubing/puzzles/implementations/3x3x3/index.ts
var cube3x3x3 = {
    id: "3x3x3",
    fullName: "3\xD73\xD73 Cube",
    inventedBy: [
        "Ern\u0151 Rubik"
    ],
    inventionYear: 1974,
    kpuzzle: getCached(async ()=>{
        return _chunkFE3HTWQKJs.experimental3x3x3KPuzzle;
    }),
    svg: getCached(async ()=>{
        return (await require("3718a3efd6ff58b9")).default;
    }),
    llSVG: getCached(async ()=>{
        return (await require("c9d334c8743db504")).default;
    }),
    pg: getCached(async ()=>{
        return asyncGetPuzzleGeometry("3x3x3");
    }),
    appearance: (stickering)=>cubeAppearance(cube3x3x3, stickering)
    ,
    stickerings: cubeStickerings
};
// src/cubing/puzzles/implementations/clock/index.ts
var clock = {
    id: "clock",
    fullName: "Clock",
    inventedBy: [
        "Christopher C. Wiggs",
        "Christopher J. Taylor"
    ],
    inventionYear: 1988,
    kpuzzle: getCached(async ()=>new _chunkFE3HTWQKJs.KPuzzle((await require("7cb18a2e87b511b4")).clockKPuzzleDefinition)
    ),
    svg: getCached(async ()=>{
        return (await require("4037b9d39455d786")).default;
    })
};
// src/cubing/puzzles/stickerings/fto-stickerings.ts
async function ftoStickering(puzzleLoader, stickering) {
    const kpuzzle = await puzzleLoader.kpuzzle();
    const puzzleStickering = new PuzzleStickering(kpuzzle);
    const m = new StickeringManager(kpuzzle);
    const experimentalFTO_FC = ()=>m.and([
            m.move("U"),
            m.not(m.or(m.moves([
                "F",
                "BL",
                "BR"
            ])))
        ])
    ;
    const experimentalFTO_F2T = ()=>m.and([
            m.move("U"),
            m.not(m.move("F"))
        ])
    ;
    const experimentalFTO_SC = ()=>m.or([
            experimentalFTO_F2T(),
            m.and([
                m.move("F"),
                m.not(m.or(m.moves([
                    "U",
                    "BL",
                    "BR"
                ])))
            ])
        ])
    ;
    const experimentalFTO_L2C = ()=>m.not(m.or([
            m.and([
                m.move("U"),
                m.move("F")
            ]),
            m.and([
                m.move("F"),
                m.move("BL")
            ]),
            m.and([
                m.move("F"),
                m.move("BR")
            ]),
            m.and([
                m.move("BL"),
                m.move("BR")
            ])
        ]))
    ;
    const experimentalFTO_LBT = ()=>m.not(m.or([
            m.and([
                m.move("F"),
                m.move("BL")
            ]),
            m.and([
                m.move("F"),
                m.move("BR")
            ]),
            m.and([
                m.move("BL"),
                m.move("BR")
            ])
        ]))
    ;
    switch(stickering){
        case "full":
            break;
        case "experimental-fto-fc":
            puzzleStickering.set(m.not(experimentalFTO_FC()), PieceStickering.Ignored);
            break;
        case "experimental-fto-f2t":
            puzzleStickering.set(m.not(experimentalFTO_F2T()), PieceStickering.Ignored);
            puzzleStickering.set(experimentalFTO_FC(), PieceStickering.Dim);
            break;
        case "experimental-fto-sc":
            puzzleStickering.set(m.not(experimentalFTO_SC()), PieceStickering.Ignored);
            puzzleStickering.set(experimentalFTO_F2T(), PieceStickering.Dim);
            break;
        case "experimental-fto-l2c":
            puzzleStickering.set(m.not(experimentalFTO_L2C()), PieceStickering.Ignored);
            puzzleStickering.set(experimentalFTO_SC(), PieceStickering.Dim);
            break;
        case "experimental-fto-lbt":
            puzzleStickering.set(m.not(experimentalFTO_LBT()), PieceStickering.Ignored);
            puzzleStickering.set(experimentalFTO_L2C(), PieceStickering.Dim);
            break;
        case "experimental-fto-l3t":
            puzzleStickering.set(experimentalFTO_LBT(), PieceStickering.Dim);
            break;
        default:
            console.warn(`Unsupported stickering for ${puzzleLoader.id}: ${stickering}. Setting all pieces to dim.`);
            puzzleStickering.set(m.and(m.moves([])), PieceStickering.Dim);
    }
    return puzzleStickering.toAppearance();
}
async function ftoStickerings() {
    return [
        "full",
        "experimental-fto-fc",
        "experimental-fto-f2t",
        "experimental-fto-sc",
        "experimental-fto-l2c",
        "experimental-fto-lbt",
        "experimental-fto-l3t"
    ];
}
// src/cubing/puzzles/implementations/fto/index.ts
var FTOPuzzleLoader = class extends PGPuzzleLoader {
    constructor(){
        super({
            pgID: "FTO",
            id: "fto",
            fullName: "Face-Turning Octahedron",
            inventedBy: [
                "Karl Rohrbach",
                "David Pitcher"
            ],
            inventionYear: 1983
        });
        this.stickerings = ftoStickerings;
    }
    appearance(stickering) {
        return ftoStickering(this, stickering);
    }
};
var fto = new FTOPuzzleLoader();
// src/cubing/puzzles/stickerings/megaminx-stickerings.ts
async function megaminxAppearance(puzzleLoader, stickering) {
    switch(stickering){
        case "full":
        case "F2L":
        case "LL":
            return cubeAppearance(puzzleLoader, stickering);
        default:
            console.warn(`Unsupported stickering for ${puzzleLoader.id}: ${stickering}. Setting all pieces to dim.`);
    }
    return cubeAppearance(puzzleLoader, "full");
}
async function megaminxStickerings() {
    return [
        "full",
        "F2L",
        "LL"
    ];
}
// src/cubing/puzzles/implementations/megaminx/index.ts
var MegaminxPuzzleLoader = class extends PGPuzzleLoader {
    constructor(){
        super({
            id: "megaminx",
            fullName: "Megaminx",
            inventionYear: 1981
        });
        this.stickerings = megaminxStickerings;
    }
    appearance(stickering) {
        return megaminxAppearance(this, stickering);
    }
};
var megaminx = new MegaminxPuzzleLoader();
// src/cubing/puzzles/implementations/pyraminx/index.ts
var PyraminxPuzzleLoader = class extends PGPuzzleLoader {
    constructor(){
        super({
            id: "pyraminx",
            fullName: "Pyraminx",
            inventedBy: [
                "Uwe Meffert"
            ]
        });
        this.svg = getCached(async ()=>{
            return (await require("d28b1d0e3ceb8bc5")).default;
        });
    }
};
var pyraminx = new PyraminxPuzzleLoader();
// src/cubing/puzzles/implementations/square1/index.ts
var square1 = {
    id: "square1",
    fullName: "Square-1",
    inventedBy: [
        "Karel Hr\u0161el",
        "Vojtech Kopsk\xFD"
    ],
    inventionYear: 1990,
    kpuzzle: getCached(async ()=>new _chunkFE3HTWQKJs.KPuzzle((await require("19511fa79ffc1679")).sq1HyperOrbitKPuzzleDefinition)
    ),
    svg: getCached(async ()=>{
        return (await require("ae6b860b9a3fe199")).default;
    })
};
// src/cubing/puzzles/implementations/kilominx/index.ts
var kilominx = {
    id: "kilominx",
    fullName: "Kilominx",
    kpuzzle: getCached(async ()=>{
        const pg = await asyncGetPuzzleGeometry("megaminx + chopasaurus");
        const kpuzzleDefinition = JSON.parse(JSON.stringify(pg.getKPuzzleDefinition(true)));
        delete kpuzzleDefinition.orbits.CENTERS;
        delete kpuzzleDefinition.orbits.CENTERS2;
        delete kpuzzleDefinition.startStateData.CENTERS;
        delete kpuzzleDefinition.startStateData.CENTERS2;
        for (const moveDefinition of Object.values(kpuzzleDefinition.moves)){
            delete moveDefinition.CENTERS;
            delete moveDefinition.CENTERS2;
        }
        kpuzzleDefinition.name = "kilominx";
        delete kpuzzleDefinition.experimentalPuzzleDescription;
        const puzzleGeometry = await require("affae084a693c1a0");
        const pgNotation = new puzzleGeometry.ExperimentalPGNotation(pg, pg.getOrbitsDef(true));
        const kpuzzle = new _chunkFE3HTWQKJs.KPuzzle(kpuzzleDefinition, {
            experimentalPGNotation: {
                lookupMove: (move)=>{
                    if (move.toString() === "x2" || move.toString() === "x2'") return x2Transformation.transformationData;
                    return pgNotation.lookupMove(move);
                }
            }
        });
        const x2Transformation = kpuzzle.algToTransformation("Rv2 Fv Uv'");
        kpuzzleDefinition.moves["x2"] = x2Transformation;
        return kpuzzle;
    }),
    svg: getCached(async ()=>{
        return (await require("7168a6da28c5c323")).kilominxSVG;
    })
};
// src/cubing/puzzles/implementations/redi-cube/index.ts
var rediCube = {
    id: "redi_cube",
    fullName: "Redi Cube",
    inventedBy: [
        "Oskar van Deventer"
    ],
    inventionYear: 2009,
    kpuzzle: getCached(async ()=>new _chunkFE3HTWQKJs.KPuzzle((await require("f87abeea6356e1db")).rediCubeKPuzzleDefinition)
    ),
    svg: async ()=>{
        return (await require("98d9af7ef02397e4")).rediCubeSVG;
    }
};
// src/cubing/puzzles/index.ts
var puzzles = {
    "3x3x3": cube3x3x3,
    "2x2x2": cube2x2x2,
    "4x4x4": new CubePGPuzzleLoader({
        id: "4x4x4",
        fullName: "4\xD74\xD74 Cube"
    }),
    "5x5x5": new CubePGPuzzleLoader({
        id: "5x5x5",
        fullName: "5\xD75\xD75 Cube"
    }),
    "6x6x6": new CubePGPuzzleLoader({
        id: "6x6x6",
        fullName: "6\xD76\xD76 Cube"
    }),
    "7x7x7": new CubePGPuzzleLoader({
        id: "7x7x7",
        fullName: "7\xD77\xD77 Cube"
    }),
    "40x40x40": new CubePGPuzzleLoader({
        id: "40x40x40",
        fullName: "40\xD740\xD740 Cube"
    }),
    clock,
    "megaminx": megaminx,
    pyraminx,
    "skewb": new PGPuzzleLoader({
        id: "skewb",
        fullName: "Skewb",
        inventedBy: [
            "Tony Durham"
        ]
    }),
    square1,
    "fto": fto,
    "gigaminx": new PGPuzzleLoader({
        id: "gigaminx",
        fullName: "Gigaminx",
        inventedBy: [
            "Tyler Fox"
        ],
        inventionYear: 2006
    }),
    "master_tetraminx": new PGPuzzleLoader({
        pgID: "master tetraminx",
        id: "master_tetraminx",
        fullName: "Master Tetraminx",
        inventedBy: [
            "Katsuhiko Okamoto"
        ],
        inventionYear: 2002
    }),
    kilominx,
    "redi_cube": rediCube
};

},{"./chunk-FE3HTWQK.js":"jNiOS","./chunk-WO2AXYFE.js":"dbeiO","affae084a693c1a0":"oRh2V","f68b32b1cab16fb1":"9mykz","6d00c4ad32023e09":"c6W7A","3718a3efd6ff58b9":"9r8F1","c9d334c8743db504":"knD3M","7cb18a2e87b511b4":"kdvyk","4037b9d39455d786":"eXc1K","d28b1d0e3ceb8bc5":"a0YLO","19511fa79ffc1679":"6SC5V","ae6b860b9a3fe199":"79u0L","7168a6da28c5c323":"4i5qr","f87abeea6356e1db":"knD25","98d9af7ef02397e4":"fP2ak","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jNiOS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KState", ()=>KState
);
parcelHelpers.export(exports, "KTransformation", ()=>KTransformation
);
parcelHelpers.export(exports, "KPuzzle", ()=>KPuzzle
);
parcelHelpers.export(exports, "experimental3x3x3KPuzzle", ()=>experimental3x3x3KPuzzle
);
var _chunkEWRBHQFXJs = require("./chunk-EWRBHQFX.js");
var _chunkWO2AXYFEJs = require("./chunk-WO2AXYFE.js");
// src/cubing/kpuzzle/combine.ts
function combineTransformationData(definition, transformationData1, transformationData2) {
    const newTransformationData = {
    };
    for(const orbitName in definition.orbits){
        const orbitDefinition = definition.orbits[orbitName];
        const orbit1 = transformationData1[orbitName];
        const orbit2 = transformationData2[orbitName];
        if (isOrbitTransformationDataIdentityUncached(orbitDefinition.numOrientations, orbit2)) newTransformationData[orbitName] = orbit1;
        else if (isOrbitTransformationDataIdentityUncached(orbitDefinition.numOrientations, orbit1)) newTransformationData[orbitName] = orbit2;
        else {
            const newPerm = new Array(orbitDefinition.numPieces);
            if (orbitDefinition.numOrientations === 1) {
                for(let idx = 0; idx < orbitDefinition.numPieces; idx++)newPerm[idx] = orbit1.permutation[orbit2.permutation[idx]];
                newTransformationData[orbitName] = {
                    permutation: newPerm,
                    orientation: orbit1.orientation
                };
            } else {
                const newOri = new Array(orbitDefinition.numPieces);
                for(let idx = 0; idx < orbitDefinition.numPieces; idx++){
                    newOri[idx] = (orbit1.orientation[orbit2.permutation[idx]] + orbit2.orientation[idx]) % orbitDefinition.numOrientations;
                    newPerm[idx] = orbit1.permutation[orbit2.permutation[idx]];
                }
                newTransformationData[orbitName] = {
                    permutation: newPerm,
                    orientation: newOri
                };
            }
        }
    }
    return newTransformationData;
}
function applyTransformationDataToStateData(definition, stateData, transformationData) {
    const newStateData = {
    };
    for(const orbitName in definition.orbits){
        const orbitDefinition = definition.orbits[orbitName];
        const orbit1 = stateData[orbitName];
        const orbit2 = transformationData[orbitName];
        if (isOrbitTransformationDataIdentityUncached(orbitDefinition.numOrientations, orbit2)) newStateData[orbitName] = orbit1;
        else {
            const newPieces = new Array(orbitDefinition.numPieces);
            if (orbitDefinition.numOrientations === 1) {
                for(let idx = 0; idx < orbitDefinition.numPieces; idx++)newPieces[idx] = orbit1.pieces[orbit2.permutation[idx]];
                newStateData[orbitName] = {
                    pieces: newPieces,
                    orientation: orbit1.orientation
                };
            } else {
                const newOri = new Array(orbitDefinition.numPieces);
                for(let idx = 0; idx < orbitDefinition.numPieces; idx++){
                    newOri[idx] = (orbit1.orientation[orbit2.permutation[idx]] + orbit2.orientation[idx]) % orbitDefinition.numOrientations;
                    newPieces[idx] = orbit1.pieces[orbit2.permutation[idx]];
                }
                newStateData[orbitName] = {
                    pieces: newPieces,
                    orientation: newOri
                };
            }
        }
    }
    return newStateData;
}
// src/cubing/kpuzzle/construct.ts
var FREEZE = false;
var identityOrbitCache = new Map();
function constructIdentityOrbitTransformation(numPieces) {
    const cached = identityOrbitCache.get(numPieces);
    if (cached) return cached;
    const newPermutation = new Array(numPieces);
    const newOrientation = new Array(numPieces);
    for(let i = 0; i < numPieces; i++){
        newPermutation[i] = i;
        newOrientation[i] = 0;
    }
    const orbitTransformation = {
        permutation: newPermutation,
        orientation: newOrientation
    };
    if (FREEZE) {
        Object.freeze(newPermutation);
        Object.freeze(newOrientation);
        Object.freeze(orbitTransformation);
    }
    identityOrbitCache.set(numPieces, orbitTransformation);
    return orbitTransformation;
}
function constructIdentityTransformationDataUncached(definition) {
    const transformation = {
    };
    for (const [orbitName, orbitDefinition] of Object.entries(definition.orbits))transformation[orbitName] = constructIdentityOrbitTransformation(orbitDefinition.numPieces);
    if (FREEZE) Object.freeze(transformation);
    return transformation;
}
function moveToTransformationUncached(kpuzzle, move) {
    const quantumKey = move.quantum.toString();
    let quantumMoveDefinition = kpuzzle.definition.moves[quantumKey];
    if (!quantumMoveDefinition) {
        const derivedFrom = kpuzzle.definition.experimentalDerivedMoves?.[quantumKey];
        if (derivedFrom) quantumMoveDefinition = kpuzzle.algToTransformation(derivedFrom).transformationData;
    }
    if (quantumMoveDefinition) return repeatTransformationUncached(kpuzzle, quantumMoveDefinition, move.amount);
    const moveDefinition = kpuzzle.definition.moves[move.toString()];
    if (moveDefinition) return moveDefinition;
    const inverseMoveDefinition = kpuzzle.definition.moves[move.invert().toString()];
    if (inverseMoveDefinition) return repeatTransformationUncached(kpuzzle, inverseMoveDefinition, -1);
    throw new Error(`Invalid move for KPuzzle (${kpuzzle.name()}): ${move}`);
}
// src/cubing/kpuzzle/KState.ts
var KState = class {
    constructor(kpuzzle, stateData){
        this.kpuzzle = kpuzzle;
        this.stateData = stateData;
    }
    static fromTransformation(transformation) {
        const newStateData = applyTransformationDataToStateData(transformation.kpuzzle.definition, transformation.kpuzzle.definition.startStateData, transformation.transformationData);
        return new KState(transformation.kpuzzle, newStateData);
    }
    apply(source) {
        return this.applyTransformation(this.kpuzzle.toTransformation(source));
    }
    applyTransformation(transformation) {
        if (transformation.isIdentityTransformation()) return new KState(this.kpuzzle, this.stateData);
        const newStateData = applyTransformationDataToStateData(this.kpuzzle.definition, this.stateData, transformation.transformationData);
        return new KState(this.kpuzzle, newStateData);
    }
    applyMove(move) {
        return this.applyTransformation(this.kpuzzle.moveToTransformation(move));
    }
    applyAlg(alg) {
        return this.applyTransformation(this.kpuzzle.algToTransformation(alg));
    }
    experimentalToTransformation() {
        if (!this.kpuzzle.canConvertStateToUniqueTransformation()) return null;
        const transformationData = {
        };
        for (const [orbitName, stateOrbitData] of Object.entries(this.stateData)){
            const transformationOrbit = {
                permutation: stateOrbitData.pieces,
                orientation: stateOrbitData.orientation
            };
            transformationData[orbitName] = transformationOrbit;
        }
        return new KTransformation(this.kpuzzle, transformationData);
    }
};
// src/cubing/kpuzzle/KTransformation.ts
var _cachedIsIdentity;
var _KTransformation = class {
    constructor(kpuzzle, transformationData){
        this.kpuzzle = kpuzzle;
        this.transformationData = transformationData;
        _chunkWO2AXYFEJs.__privateAdd(this, _cachedIsIdentity, void 0);
    }
    invert() {
        return new _KTransformation(this.kpuzzle, invertTransformation(this.kpuzzle, this.transformationData));
    }
    isIdentityTransformation() {
        return _chunkWO2AXYFEJs.__privateGet(this, _cachedIsIdentity) ?? _chunkWO2AXYFEJs.__privateSet(this, _cachedIsIdentity, this.isIdentical(this.kpuzzle.identityTransformation()));
    }
    static experimentalConstructIdentity(kpuzzle) {
        const transformation = new _KTransformation(kpuzzle, constructIdentityTransformationDataUncached(kpuzzle.definition));
        _chunkWO2AXYFEJs.__privateSet(transformation, _cachedIsIdentity, true);
        return transformation;
    }
    isIdentical(t2) {
        return isTransformationDataIdentical(this.kpuzzle, this.transformationData, t2.transformationData);
    }
    apply(source) {
        return this.applyTransformation(this.kpuzzle.toTransformation(source));
    }
    applyTransformation(t2) {
        if (this.kpuzzle !== t2.kpuzzle) throw new Error(`Tried to apply a transformation for a KPuzzle (${t2.kpuzzle.name()}) to a different KPuzzle (${this.kpuzzle.name()}).`);
        if (_chunkWO2AXYFEJs.__privateGet(this, _cachedIsIdentity)) return new _KTransformation(this.kpuzzle, t2.transformationData);
        if (_chunkWO2AXYFEJs.__privateGet(t2, _cachedIsIdentity)) return new _KTransformation(this.kpuzzle, this.transformationData);
        return new _KTransformation(this.kpuzzle, combineTransformationData(this.kpuzzle.definition, this.transformationData, t2.transformationData));
    }
    applyMove(move) {
        return this.applyTransformation(this.kpuzzle.moveToTransformation(move));
    }
    applyAlg(alg) {
        return this.applyTransformation(this.kpuzzle.algToTransformation(alg));
    }
    toKState() {
        return KState.fromTransformation(this);
    }
    repetitionOrder() {
        return transformationRepetitionOrder(this.kpuzzle.definition, this);
    }
    selfMultiply(amount) {
        return new _KTransformation(this.kpuzzle, repeatTransformationUncached(this.kpuzzle, this.transformationData, amount));
    }
};
var KTransformation = _KTransformation;
_cachedIsIdentity = new WeakMap();
// src/cubing/kpuzzle/calculate.ts
function isOrbitTransformationDataIdentityUncached(numOrientations, orbitTransformationData) {
    const { permutation  } = orbitTransformationData;
    const numPieces = permutation.length;
    for(let idx = 0; idx < numPieces; idx++){
        if (permutation[idx] !== idx) return false;
    }
    if (numOrientations > 1) {
        const { orientation  } = orbitTransformationData;
        for(let idx = 0; idx < numPieces; idx++){
            if (orientation[idx] !== 0) return false;
        }
    }
    return true;
}
function isOrbitTransformationDataIdentical(orbitDefinition, orbitTransformationData1, orbitTransformationData2, options = {
}) {
    for(let idx = 0; idx < orbitDefinition.numPieces; idx++){
        if (!options?.ignoreOrientation && orbitTransformationData1.orientation[idx] !== orbitTransformationData2.orientation[idx]) return false;
        if (!options?.ignorePermutation && orbitTransformationData1.permutation[idx] !== orbitTransformationData2.permutation[idx]) return false;
    }
    return true;
}
function isTransformationDataIdentical(kpuzzle, transformationData1, transformationData2) {
    for (const [orbitName, orbitDefinition] of Object.entries(kpuzzle.definition.orbits)){
        if (!isOrbitTransformationDataIdentical(orbitDefinition, transformationData1[orbitName], transformationData2[orbitName])) return false;
    }
    return true;
}
function invertTransformation(kpuzzle, transformationData) {
    const newTransformationData = {
    };
    for(const orbitName in kpuzzle.definition.orbits){
        const orbitDefinition = kpuzzle.definition.orbits[orbitName];
        const orbitTransformationData = transformationData[orbitName];
        if (isOrbitTransformationDataIdentityUncached(orbitDefinition.numOrientations, orbitTransformationData)) newTransformationData[orbitName] = orbitTransformationData;
        else if (orbitDefinition.numOrientations === 1) {
            const newPerm = new Array(orbitDefinition.numPieces);
            for(let idx = 0; idx < orbitDefinition.numPieces; idx++)newPerm[orbitTransformationData.permutation[idx]] = idx;
            newTransformationData[orbitName] = {
                permutation: newPerm,
                orientation: orbitTransformationData.orientation
            };
        } else {
            const newPerm = new Array(orbitDefinition.numPieces);
            const newOri = new Array(orbitDefinition.numPieces);
            for(let idx = 0; idx < orbitDefinition.numPieces; idx++){
                const fromIdx = orbitTransformationData.permutation[idx];
                newPerm[fromIdx] = idx;
                newOri[fromIdx] = (orbitDefinition.numOrientations - orbitTransformationData.orientation[idx] + orbitDefinition.numOrientations) % orbitDefinition.numOrientations;
            }
            newTransformationData[orbitName] = {
                permutation: newPerm,
                orientation: newOri
            };
        }
    }
    return newTransformationData;
}
function repeatTransformationUncached(kpuzzle, transformationData, amount) {
    if (amount === 1) return transformationData;
    if (amount < 0) return repeatTransformationUncached(kpuzzle, invertTransformation(kpuzzle, transformationData), -amount);
    if (amount === 0) {
        const { transformationData: transformationData2  } = kpuzzle.identityTransformation();
        return transformationData2;
    }
    let halfish = transformationData;
    if (amount !== 2) halfish = repeatTransformationUncached(kpuzzle, transformationData, Math.floor(amount / 2));
    const twiceHalfish = combineTransformationData(kpuzzle.definition, halfish, halfish);
    if (amount % 2 === 0) return twiceHalfish;
    else return combineTransformationData(kpuzzle.definition, transformationData, twiceHalfish);
}
var AlgToTransformationTraversal = class extends _chunkEWRBHQFXJs.TraversalDownUp {
    traverseAlg(alg, kpuzzle) {
        let transformation = null;
        for (const unit of alg.units())if (transformation) transformation = transformation.applyTransformation(this.traverseUnit(unit, kpuzzle));
        else transformation = this.traverseUnit(unit, kpuzzle);
        return transformation ?? kpuzzle.identityTransformation();
    }
    traverseGrouping(grouping, kpuzzle) {
        const algTransformation = this.traverseAlg(grouping.alg, kpuzzle);
        return new KTransformation(kpuzzle, repeatTransformationUncached(kpuzzle, algTransformation.transformationData, grouping.amount));
    }
    traverseMove(move, kpuzzle) {
        return kpuzzle.moveToTransformation(move);
    }
    traverseCommutator(commutator, kpuzzle) {
        const aTransformation = this.traverseAlg(commutator.A, kpuzzle);
        const bTransformation = this.traverseAlg(commutator.B, kpuzzle);
        return aTransformation.applyTransformation(bTransformation).applyTransformation(aTransformation.invert()).applyTransformation(bTransformation.invert());
    }
    traverseConjugate(conjugate, kpuzzle) {
        const aTransformation = this.traverseAlg(conjugate.A, kpuzzle);
        const bTransformation = this.traverseAlg(conjugate.B, kpuzzle);
        return aTransformation.applyTransformation(bTransformation).applyTransformation(aTransformation.invert());
    }
    traversePause(_, kpuzzle) {
        return kpuzzle.identityTransformation();
    }
    traverseNewline(_, kpuzzle) {
        return kpuzzle.identityTransformation();
    }
    traverseLineComment(_, kpuzzle) {
        return kpuzzle.identityTransformation();
    }
};
var algToTransformationInstance = new AlgToTransformationTraversal();
var algToTransformation = algToTransformationInstance.traverseAlg.bind(algToTransformationInstance);
function gcd(a, b) {
    if (b) return gcd(b, a % b);
    return a;
}
function transformationRepetitionOrder(definition, transformation) {
    let order = 1;
    for(const orbitName in definition.orbits){
        const orbitDefinition = definition.orbits[orbitName];
        const transformationOrbit = transformation.transformationData[orbitName];
        const orbitPieces = new Array(orbitDefinition.numPieces);
        for(let startIdx = 0; startIdx < orbitDefinition.numPieces; startIdx++)if (!orbitPieces[startIdx]) {
            let currentIdx = startIdx;
            let orientationSum = 0;
            let cycleLength = 0;
            for(;;){
                orbitPieces[currentIdx] = true;
                orientationSum = orientationSum + transformationOrbit.orientation[currentIdx];
                cycleLength = cycleLength + 1;
                currentIdx = transformationOrbit.permutation[currentIdx];
                if (currentIdx === startIdx) break;
            }
            if (orientationSum !== 0) cycleLength = cycleLength * orbitDefinition.numOrientations / gcd(orbitDefinition.numOrientations, orientationSum);
            order = order * cycleLength / gcd(order, cycleLength);
        }
    }
    return order;
}
// src/cubing/kpuzzle/KPuzzle.ts
var _moveToTransformationDataCache, _cachedCanConvertStateToUniqueTransformation;
var KPuzzle = class {
    constructor(definition, options){
        this.definition = definition;
        _chunkWO2AXYFEJs.__privateAdd(this, _moveToTransformationDataCache, new Map());
        _chunkWO2AXYFEJs.__privateAdd(this, _cachedCanConvertStateToUniqueTransformation, void 0);
        this.experimentalPGNotation = options?.experimentalPGNotation;
    }
    name() {
        return this.definition.name;
    }
    identityTransformation() {
        return KTransformation.experimentalConstructIdentity(this);
    }
    moveToTransformation(move) {
        if (typeof move === "string") move = new _chunkEWRBHQFXJs.Move(move);
        const cacheKey = move.toString();
        const cachedTransformationData = _chunkWO2AXYFEJs.__privateGet(this, _moveToTransformationDataCache).get(cacheKey);
        if (cachedTransformationData) return new KTransformation(this, cachedTransformationData);
        if (this.experimentalPGNotation) {
            const transformationData2 = this.experimentalPGNotation.lookupMove(move);
            if (!transformationData2) throw new Error(`could not map to internal move: ${move}`);
            _chunkWO2AXYFEJs.__privateGet(this, _moveToTransformationDataCache).set(cacheKey, transformationData2);
            return new KTransformation(this, transformationData2);
        }
        const transformationData = moveToTransformationUncached(this, move);
        _chunkWO2AXYFEJs.__privateGet(this, _moveToTransformationDataCache).set(cacheKey, transformationData);
        return new KTransformation(this, transformationData);
    }
    algToTransformation(alg) {
        if (typeof alg === "string") alg = new _chunkEWRBHQFXJs.Alg(alg);
        return algToTransformation(alg, this);
    }
    toTransformation(source) {
        if (typeof source === "string") return this.algToTransformation(source);
        else if (source?.is?.(_chunkEWRBHQFXJs.Alg)) return this.algToTransformation(source);
        else if (source?.is?.(_chunkEWRBHQFXJs.Move)) return this.moveToTransformation(source);
        else return source;
    }
    startState() {
        return new KState(this, this.definition.startStateData);
    }
    canConvertStateToUniqueTransformation() {
        return _chunkWO2AXYFEJs.__privateGet(this, _cachedCanConvertStateToUniqueTransformation) ?? _chunkWO2AXYFEJs.__privateSet(this, _cachedCanConvertStateToUniqueTransformation, (()=>{
            for (const [orbitName, orbitDefinition] of Object.entries(this.definition.orbits)){
                const pieces = new Array(orbitDefinition.numPieces).fill(false);
                for (const piece of this.definition.startStateData[orbitName].pieces)pieces[piece] = true;
                for (const piece1 of pieces){
                    if (!piece1) return false;
                }
            }
            return true;
        })());
    }
    get state() {
        throw new Error("KPuzzle is now a different (stateless) class.");
    }
    reset() {
        throw new Error("KPuzzle is now a different (stateless) class.");
    }
    applyMove(_move) {
        throw new Error("KPuzzle is now a different class. Try `.moveToTransformation()` to get the transformation for a move.");
    }
    applyAlg(_alg) {
        throw new Error("KPuzzle is now a different class. Try `.algToTransformation()` to get the transformation for an alg.");
    }
};
_moveToTransformationDataCache = new WeakMap();
_cachedCanConvertStateToUniqueTransformation = new WeakMap();
// src/cubing/kpuzzle/3x3x3/3x3x3.kpuzzle.json.ts
var cube3x3x3KPuzzleDefinition = {
    name: "3x3x3",
    orbits: {
        EDGES: {
            numPieces: 12,
            numOrientations: 2
        },
        CORNERS: {
            numPieces: 8,
            numOrientations: 3
        },
        CENTERS: {
            numPieces: 6,
            numOrientations: 4
        }
    },
    startStateData: {
        EDGES: {
            pieces: [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11
            ],
            orientation: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        },
        CORNERS: {
            pieces: [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7
            ],
            orientation: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        },
        CENTERS: {
            pieces: [
                0,
                1,
                2,
                3,
                4,
                5
            ],
            orientation: [
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    },
    moves: {
        U: {
            EDGES: {
                permutation: [
                    1,
                    2,
                    3,
                    0,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    1,
                    2,
                    3,
                    0,
                    4,
                    5,
                    6,
                    7
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                orientation: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        y: {
            EDGES: {
                permutation: [
                    1,
                    2,
                    3,
                    0,
                    5,
                    6,
                    7,
                    4,
                    10,
                    8,
                    11,
                    9
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    1,
                    2,
                    3,
                    0,
                    7,
                    4,
                    5,
                    6
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    2,
                    3,
                    4,
                    1,
                    5
                ],
                orientation: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    3
                ]
            }
        },
        x: {
            EDGES: {
                permutation: [
                    4,
                    8,
                    0,
                    9,
                    6,
                    10,
                    2,
                    11,
                    5,
                    7,
                    1,
                    3
                ],
                orientation: [
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    4,
                    0,
                    3,
                    5,
                    7,
                    6,
                    2,
                    1
                ],
                orientation: [
                    2,
                    1,
                    2,
                    1,
                    1,
                    2,
                    1,
                    2
                ]
            },
            CENTERS: {
                permutation: [
                    2,
                    1,
                    5,
                    3,
                    0,
                    4
                ],
                orientation: [
                    0,
                    3,
                    0,
                    1,
                    2,
                    2
                ]
            }
        },
        L: {
            EDGES: {
                permutation: [
                    0,
                    1,
                    2,
                    11,
                    4,
                    5,
                    6,
                    9,
                    8,
                    3,
                    10,
                    7
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    6,
                    2,
                    4,
                    3,
                    5,
                    7
                ],
                orientation: [
                    0,
                    0,
                    2,
                    1,
                    0,
                    2,
                    1,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                orientation: [
                    0,
                    1,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        F: {
            EDGES: {
                permutation: [
                    9,
                    1,
                    2,
                    3,
                    8,
                    5,
                    6,
                    7,
                    0,
                    4,
                    10,
                    11
                ],
                orientation: [
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    1,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    3,
                    1,
                    2,
                    5,
                    0,
                    4,
                    6,
                    7
                ],
                orientation: [
                    1,
                    0,
                    0,
                    2,
                    2,
                    1,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                orientation: [
                    0,
                    0,
                    1,
                    0,
                    0,
                    0
                ]
            }
        },
        R: {
            EDGES: {
                permutation: [
                    0,
                    8,
                    2,
                    3,
                    4,
                    10,
                    6,
                    7,
                    5,
                    9,
                    1,
                    11
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    4,
                    0,
                    2,
                    3,
                    7,
                    5,
                    6,
                    1
                ],
                orientation: [
                    2,
                    1,
                    0,
                    0,
                    1,
                    0,
                    0,
                    2
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                orientation: [
                    0,
                    0,
                    0,
                    1,
                    0,
                    0
                ]
            }
        },
        B: {
            EDGES: {
                permutation: [
                    0,
                    1,
                    10,
                    3,
                    4,
                    5,
                    11,
                    7,
                    8,
                    9,
                    6,
                    2
                ],
                orientation: [
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    7,
                    1,
                    3,
                    4,
                    5,
                    2,
                    6
                ],
                orientation: [
                    0,
                    2,
                    1,
                    0,
                    0,
                    0,
                    2,
                    1
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    1,
                    0
                ]
            }
        },
        D: {
            EDGES: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    7,
                    4,
                    5,
                    6,
                    8,
                    9,
                    10,
                    11
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    4
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            }
        },
        z: {
            EDGES: {
                permutation: [
                    9,
                    3,
                    11,
                    7,
                    8,
                    1,
                    10,
                    5,
                    0,
                    4,
                    2,
                    6
                ],
                orientation: [
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    3,
                    2,
                    6,
                    5,
                    0,
                    4,
                    7,
                    1
                ],
                orientation: [
                    1,
                    2,
                    1,
                    2,
                    2,
                    1,
                    2,
                    1
                ]
            },
            CENTERS: {
                permutation: [
                    1,
                    5,
                    2,
                    0,
                    4,
                    3
                ],
                orientation: [
                    1,
                    1,
                    1,
                    1,
                    3,
                    1
                ]
            }
        },
        M: {
            EDGES: {
                permutation: [
                    2,
                    1,
                    6,
                    3,
                    0,
                    5,
                    4,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                orientation: [
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    4,
                    1,
                    0,
                    3,
                    5,
                    2
                ],
                orientation: [
                    2,
                    0,
                    0,
                    0,
                    2,
                    0
                ]
            }
        },
        E: {
            EDGES: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    9,
                    11,
                    8,
                    10
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    4,
                    1,
                    2,
                    3,
                    5
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        S: {
            EDGES: {
                permutation: [
                    0,
                    3,
                    2,
                    7,
                    4,
                    1,
                    6,
                    5,
                    8,
                    9,
                    10,
                    11
                ],
                orientation: [
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    1,
                    5,
                    2,
                    0,
                    4,
                    3
                ],
                orientation: [
                    1,
                    1,
                    0,
                    1,
                    0,
                    1
                ]
            }
        },
        u: {
            EDGES: {
                permutation: [
                    1,
                    2,
                    3,
                    0,
                    4,
                    5,
                    6,
                    7,
                    10,
                    8,
                    11,
                    9
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    1,
                    2,
                    3,
                    0,
                    4,
                    5,
                    6,
                    7
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    2,
                    3,
                    4,
                    1,
                    5
                ],
                orientation: [
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        },
        l: {
            EDGES: {
                permutation: [
                    2,
                    1,
                    6,
                    11,
                    0,
                    5,
                    4,
                    9,
                    8,
                    3,
                    10,
                    7
                ],
                orientation: [
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    6,
                    2,
                    4,
                    3,
                    5,
                    7
                ],
                orientation: [
                    0,
                    0,
                    2,
                    1,
                    0,
                    2,
                    1,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    4,
                    1,
                    0,
                    3,
                    5,
                    2
                ],
                orientation: [
                    2,
                    1,
                    0,
                    0,
                    2,
                    0
                ]
            }
        },
        f: {
            EDGES: {
                permutation: [
                    9,
                    3,
                    2,
                    7,
                    8,
                    1,
                    6,
                    5,
                    0,
                    4,
                    10,
                    11
                ],
                orientation: [
                    1,
                    1,
                    0,
                    1,
                    1,
                    1,
                    0,
                    1,
                    1,
                    1,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    3,
                    1,
                    2,
                    5,
                    0,
                    4,
                    6,
                    7
                ],
                orientation: [
                    1,
                    0,
                    0,
                    2,
                    2,
                    1,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    1,
                    5,
                    2,
                    0,
                    4,
                    3
                ],
                orientation: [
                    1,
                    1,
                    1,
                    1,
                    0,
                    1
                ]
            }
        },
        r: {
            EDGES: {
                permutation: [
                    4,
                    8,
                    0,
                    3,
                    6,
                    10,
                    2,
                    7,
                    5,
                    9,
                    1,
                    11
                ],
                orientation: [
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CORNERS: {
                permutation: [
                    4,
                    0,
                    2,
                    3,
                    7,
                    5,
                    6,
                    1
                ],
                orientation: [
                    2,
                    1,
                    0,
                    0,
                    1,
                    0,
                    0,
                    2
                ]
            },
            CENTERS: {
                permutation: [
                    2,
                    1,
                    5,
                    3,
                    0,
                    4
                ],
                orientation: [
                    0,
                    0,
                    0,
                    1,
                    2,
                    2
                ]
            }
        },
        b: {
            EDGES: {
                permutation: [
                    0,
                    5,
                    10,
                    1,
                    4,
                    7,
                    11,
                    3,
                    8,
                    9,
                    6,
                    2
                ],
                orientation: [
                    0,
                    1,
                    1,
                    1,
                    0,
                    1,
                    1,
                    1,
                    0,
                    0,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    7,
                    1,
                    3,
                    4,
                    5,
                    2,
                    6
                ],
                orientation: [
                    0,
                    2,
                    1,
                    0,
                    0,
                    0,
                    2,
                    1
                ]
            },
            CENTERS: {
                permutation: [
                    3,
                    0,
                    2,
                    5,
                    4,
                    1
                ],
                orientation: [
                    3,
                    3,
                    0,
                    3,
                    1,
                    3
                ]
            }
        },
        d: {
            EDGES: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    7,
                    4,
                    5,
                    6,
                    9,
                    11,
                    8,
                    10
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    1
                ]
            },
            CORNERS: {
                permutation: [
                    0,
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    4
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            CENTERS: {
                permutation: [
                    0,
                    4,
                    1,
                    2,
                    3,
                    5
                ],
                orientation: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ]
            }
        }
    }
};
cube3x3x3KPuzzleDefinition.moves["Uw"] = cube3x3x3KPuzzleDefinition.moves["u"];
cube3x3x3KPuzzleDefinition.moves["Lw"] = cube3x3x3KPuzzleDefinition.moves["l"];
cube3x3x3KPuzzleDefinition.moves["Fw"] = cube3x3x3KPuzzleDefinition.moves["f"];
cube3x3x3KPuzzleDefinition.moves["Rw"] = cube3x3x3KPuzzleDefinition.moves["r"];
cube3x3x3KPuzzleDefinition.moves["Bw"] = cube3x3x3KPuzzleDefinition.moves["b"];
cube3x3x3KPuzzleDefinition.moves["Dw"] = cube3x3x3KPuzzleDefinition.moves["d"];
cube3x3x3KPuzzleDefinition.moves["Rv"] = cube3x3x3KPuzzleDefinition.moves["x"];
cube3x3x3KPuzzleDefinition.moves["Uv"] = cube3x3x3KPuzzleDefinition.moves["y"];
cube3x3x3KPuzzleDefinition.moves["Fv"] = cube3x3x3KPuzzleDefinition.moves["z"];
cube3x3x3KPuzzleDefinition.moves["Lv"] = {
    EDGES: {
        permutation: [
            2,
            10,
            6,
            11,
            0,
            8,
            4,
            9,
            1,
            3,
            5,
            7
        ],
        orientation: [
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            0,
            0,
            0,
            0
        ]
    },
    CORNERS: {
        permutation: [
            1,
            7,
            6,
            2,
            0,
            3,
            5,
            4
        ],
        orientation: [
            2,
            1,
            2,
            1,
            1,
            2,
            1,
            2
        ]
    },
    CENTERS: {
        permutation: [
            4,
            1,
            0,
            3,
            5,
            2
        ],
        orientation: [
            2,
            1,
            0,
            3,
            2,
            0
        ]
    }
};
cube3x3x3KPuzzleDefinition.moves["Dv"] = {
    EDGES: {
        permutation: [
            3,
            0,
            1,
            2,
            7,
            4,
            5,
            6,
            9,
            11,
            8,
            10
        ],
        orientation: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            1
        ]
    },
    CORNERS: {
        permutation: [
            3,
            0,
            1,
            2,
            5,
            6,
            7,
            4
        ],
        orientation: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    CENTERS: {
        permutation: [
            0,
            4,
            1,
            2,
            3,
            5
        ],
        orientation: [
            3,
            0,
            0,
            0,
            0,
            1
        ]
    }
};
cube3x3x3KPuzzleDefinition.moves["Bv"] = {
    EDGES: {
        permutation: [
            8,
            5,
            10,
            1,
            9,
            7,
            11,
            3,
            4,
            0,
            6,
            2
        ],
        orientation: [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },
    CORNERS: {
        permutation: [
            4,
            7,
            1,
            0,
            5,
            3,
            2,
            6
        ],
        orientation: [
            1,
            2,
            1,
            2,
            2,
            1,
            2,
            1
        ]
    },
    CENTERS: {
        permutation: [
            3,
            0,
            2,
            5,
            4,
            1
        ],
        orientation: [
            3,
            3,
            3,
            3,
            1,
            3
        ]
    }
};
// src/cubing/kpuzzle/index.ts
var experimental3x3x3KPuzzle = new KPuzzle(cube3x3x3KPuzzleDefinition);

},{"./chunk-EWRBHQFX.js":"i6QEj","./chunk-WO2AXYFE.js":"dbeiO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"oRh2V":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "puzzle-geometry.236a2f2a.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('6pAN0')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require('../cacheLoader');
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName('script');
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var script1 = document.createElement('script');
        script1.async = true;
        script1.type = 'text/javascript';
        script1.charset = 'utf-8';
        script1.src = bundle;
        script1.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script1.onerror = script1.onload = null;
            script1.remove();
            reject(error);
        };
        script1.onload = function() {
            script1.onerror = script1.onload = null;
            resolve();
        };
        document.getElementsByTagName('head')[0].appendChild(script1);
    });
});

},{"../cacheLoader":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {
};
var cachedPreloads = {
};
var cachedPrefetches = {
};
function getCache(type) {
    switch(type){
        case 'preload':
            return cachedPreloads;
        case 'prefetch':
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
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

},{}],"9mykz":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "2x2x2.kpuzzle.json-RUB44MJV.740622c2.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('6jQLl')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"c6W7A":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "2x2x2.kpuzzle.svg-CQF2FTV7.c8dfe401.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('5zSJg')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"9r8F1":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "3x3x3.kpuzzle.svg-ERSSH66P.632fd32a.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('4XU2e')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"knD3M":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "3x3x3-ll.kpuzzle.svg-53CBPG5O.b3c7f06a.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('CiwFQ')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"kdvyk":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "clock.kpuzzle.json-BQKNKV3G.79092c2d.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('iU40I')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"eXc1K":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "clock.kpuzzle.svg-B7TMN3SY.659ca477.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('eR7Sx')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"a0YLO":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "pyraminx.kpuzzle.svg-QBBMZVDY.73448edf.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('XLKEm')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"6SC5V":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "sq1-hyperorbit.kpuzzle.json-4XS5YACO.68cd2e9f.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('kcNmO')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"79u0L":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "sq1-hyperorbit.kpuzzle.svg-ID57EER7.dc9c849f.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('28fLo')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"4i5qr":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "kilominx.kpuzzle.svg-7XJBOKFU.edeeb53d.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('kkVVp')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"knD25":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "redi_cube.kpuzzle.json-EPBKWOMV.bf0bfd11.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('4J5wM')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"fP2ak":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "redi_cube.kpuzzle.svg-BSHCMC2Z.9b7ed9da.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('6Phrp')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"gxQg6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "experimentalRandomScrambleForEvent", ()=>_chunkT2BDGTK3Js.randomScrambleForEvent
);
parcelHelpers.export(exports, "experimentalSolve2x2x2", ()=>_chunkT2BDGTK3Js.experimentalSolve2x2x2
);
parcelHelpers.export(exports, "experimentalSolve3x3x3IgnoringCenters", ()=>_chunkT2BDGTK3Js.experimentalSolve3x3x3IgnoringCenters
);
parcelHelpers.export(exports, "random333State", ()=>_chunkME2QTCHNJs.random333State
);
parcelHelpers.export(exports, "setDebug", ()=>_chunkT2BDGTK3Js.setDebug
);
parcelHelpers.export(exports, "solveMegaminx", ()=>_chunkT2BDGTK3Js.solveMegaminx
);
parcelHelpers.export(exports, "solvePyraminx", ()=>_chunkT2BDGTK3Js.solvePyraminx
);
parcelHelpers.export(exports, "solveSkewb", ()=>_chunkT2BDGTK3Js.solveSkewb
);
var _chunkT2BDGTK3Js = require("../chunk-T2BDGTK3.js");
var _chunkBEXHMXCTJs = require("../chunk-BEXHMXCT.js");
var _chunkIVQ4ITE2Js = require("../chunk-IVQ4ITE2.js");
var _chunkME2QTCHNJs = require("../chunk-ME2QTCHN.js");
var _chunkRENZB7QNJs = require("../chunk-RENZB7QN.js");
var _chunkBOKO2BWTJs = require("../chunk-BOKO2BWT.js");
var _chunkFE3HTWQKJs = require("../chunk-FE3HTWQK.js");
var _chunkEWRBHQFXJs = require("../chunk-EWRBHQFX.js");
var _chunkWO2AXYFEJs = require("../chunk-WO2AXYFE.js");

},{"../chunk-T2BDGTK3.js":"3Jvzv","../chunk-BEXHMXCT.js":"3TmGo","../chunk-IVQ4ITE2.js":"7rQmr","../chunk-ME2QTCHN.js":"dS4p9","../chunk-RENZB7QN.js":"fdjOR","../chunk-BOKO2BWT.js":"abt9g","../chunk-FE3HTWQK.js":"jNiOS","../chunk-EWRBHQFX.js":"i6QEj","../chunk-WO2AXYFE.js":"dbeiO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Jvzv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "randomScrambleForEvent", ()=>randomScrambleForEvent
);
parcelHelpers.export(exports, "experimentalSolve3x3x3IgnoringCenters", ()=>experimentalSolve3x3x3IgnoringCenters
);
parcelHelpers.export(exports, "experimentalSolve2x2x2", ()=>experimentalSolve2x2x2
);
parcelHelpers.export(exports, "solveSkewb", ()=>solveSkewb
);
parcelHelpers.export(exports, "solvePyraminx", ()=>solvePyraminx
);
parcelHelpers.export(exports, "solveMegaminx", ()=>solveMegaminx
);
parcelHelpers.export(exports, "setDebug", ()=>setDebug
);
var _chunkBEXHMXCTJs = require("./chunk-BEXHMXCT.js");
var _chunkIVQ4ITE2Js = require("./chunk-IVQ4ITE2.js");
var _chunkRENZB7QNJs = require("./chunk-RENZB7QN.js");
var _chunkEWRBHQFXJs = require("./chunk-EWRBHQFX.js");
// src/cubing/vendor/comlink-everywhere/outside/index.ts
var _comlink = require("comlink");
// src/cubing/search/inside/solve/puzzles/clock.ts
var pins = [
    "UR",
    "DR",
    "DL",
    "UL"
];
var backMoves = [
    "U",
    "R",
    "D",
    "L",
    "ALL"
];
var frontMoves = pins.concat(backMoves);
var randomUIntBelowPromise = _chunkRENZB7QNJs.randomUIntBelowFactory();
async function randomClockScrambleString() {
    const randomUIntBelow = await randomUIntBelowPromise;
    let filteringMoveCount = 0;
    async function randomSuffix(randomUIntBelow2) {
        const amount = randomUIntBelow2(12);
        if (amount !== 0) filteringMoveCount++;
        if (amount <= 6) return `${amount}+`;
        else return `${12 - amount}-`;
    }
    const moves = [];
    async function side(families) {
        for (const family of families)moves.push(`${family}${await randomSuffix(randomUIntBelow)}`);
    }
    await side(frontMoves);
    moves.push("y2");
    await side(backMoves);
    if (filteringMoveCount < 2) return randomClockScrambleString();
    for (const pin of pins)if (randomUIntBelow(2) === 0) moves.push(pin);
    return moves.join(" ");
}
// src/cubing/search/inside/solve/puzzles/wca-minx.ts
var randomUIntBelowPromise2 = _chunkRENZB7QNJs.randomUIntBelowFactory();
var suffixes = [
    "++",
    "--"
];
async function randomMegaminxScrambleString() {
    const randomUIntBelow = await randomUIntBelowPromise2;
    function rdPair() {
        return `R${suffixes[randomUIntBelow(2)]} D${suffixes[randomUIntBelow(2)]}`;
    }
    function randomU() {
        return `U${[
            "",
            "'"
        ][randomUIntBelow(2)]}`;
    }
    function row() {
        const chunks2 = [];
        for(let i = 0; i < 5; i++)chunks2.push(rdPair());
        chunks2.push(randomU());
        return chunks2.join(" ");
    }
    const chunks = [];
    for(let i1 = 0; i1 < 6; i1++)chunks.push(row());
    return chunks.join("\n");
}
var worker_threads_mangled = "w-orker-_threa-ds";
var worker_threads_unmangled = ()=>worker_threads_mangled.replace(/-/g, "")
;
var useNodeWorkarounds = typeof globalThis.Worker === "undefined" && typeof globalThis.WorkerNavigator === "undefined";
async function nodeWorker(source, options) {
    const { Worker: NodeWorker  } = await require(worker_threads_unmangled());
    const worker = new NodeWorker(source, options);
    worker.unref();
    return _chunkIVQ4ITE2Js.node_adapter_default(worker);
}
async function constructWorker(source, options) {
    let worker;
    if (useNodeWorkarounds) return nodeWorker(source, {
        eval: options?.eval
    });
    else {
        if (options?.eval) {
            const blob = new Blob([
                source
            ], {
                type: "application/javascript"
            });
            source = URL.createObjectURL(blob);
        }
        worker = new globalThis.Worker(source, {
            type: options ? options.type : void 0
        });
    }
    return worker;
}
// src/cubing/search/inside/search-worker-ts-entry-path-getter.ts
_chunkBEXHMXCTJs.exposeAPI.expose = false;
async function getWorkerEntryFileURL() {
    return (await require("741694a14ce69903")).WORKER_ENTRY_FILE_URL;
}
// src/cubing/search/instantiator.ts
var MODULE_WORKER_TIMEOUT_MILLISECONDS = 5000;
async function instantiateModuleWorker() {
    return new Promise(async (resolve, reject)=>{
        const timeoutID = setTimeout(()=>{
            reject(new Error("module instantiation timeout"));
        }, MODULE_WORKER_TIMEOUT_MILLISECONDS);
        try {
            const workerEntryFileURL = await getWorkerEntryFileURL();
            if (!workerEntryFileURL) reject(new Error("Could not get worker entry file URL."));
            let url;
            if (globalThis.Blob) {
                const importSrc = `import "${workerEntryFileURL}";`;
                const blob = new Blob([
                    importSrc
                ], {
                    type: "text/javascript"
                });
                url = URL.createObjectURL(blob);
            } else url = new URL(workerEntryFileURL);
            const worker = await constructWorker(url, {
                type: "module"
            });
            const onError = (e)=>{
                if (e.message?.startsWith("SyntaxError")) reject(e);
            };
            const onFirstMessage = (messageData)=>{
                if (messageData === "comlink-exposed") {
                    clearTimeout(timeoutID);
                    resolve(_comlink.wrap(worker));
                } else reject(new Error("wrong module instantiation message " + messageData));
            };
            if (worker.nodeWorker) worker.nodeWorker.once("message", onFirstMessage);
            else {
                worker.addEventListener("error", onError, {
                    once: true
                });
                worker.addEventListener("message", (e)=>onFirstMessage(e.data)
                , {
                    once: true
                });
            }
        } catch (e) {
            reject(e);
        }
    });
}
async function instantiateWorker() {
    try {
        return await instantiateModuleWorker();
    } catch (e) {
        console.warn("Could not instantiate module worker (this is expected in Firefox and `bundle-global`). Falling back to string worker.", e);
        const { workerSource  } = await require("67cbcba9194242c9");
        const worker = await constructWorker(workerSource, {
            eval: true
        });
        return _comlink.wrap(worker);
    }
}
// src/cubing/search/outside.ts
var cachedWorkerInstance = null;
async function getCachedWorkerInstance() {
    return await (cachedWorkerInstance ?? (cachedWorkerInstance = instantiateWorker()));
}
async function randomScrambleForEvent(eventID) {
    switch(eventID){
        case "clock":
            return _chunkEWRBHQFXJs.Alg.fromString(await randomClockScrambleString());
        case "minx":
            return _chunkEWRBHQFXJs.Alg.fromString(await randomMegaminxScrambleString());
    }
    const prom = _randomScrambleStringForEvent(eventID);
    const wat = await prom;
    return _chunkEWRBHQFXJs.Alg.fromString(wat);
}
async function _randomScrambleStringForEvent(eventID) {
    const cwi = await getCachedWorkerInstance();
    return cwi.randomScrambleStringForEvent(eventID);
}
async function experimentalSolve3x3x3IgnoringCenters(state) {
    const cwi = await getCachedWorkerInstance();
    return _chunkEWRBHQFXJs.Alg.fromString(await cwi.solve333ToString(state.stateData));
}
async function experimentalSolve2x2x2(state) {
    const cwi = await getCachedWorkerInstance();
    return _chunkEWRBHQFXJs.Alg.fromString(await cwi.solve222ToString(state.stateData));
}
async function solveSkewb(state) {
    const cwi = await getCachedWorkerInstance();
    return _chunkEWRBHQFXJs.Alg.fromString(await cwi.solveSkewbToString(state.stateData));
}
async function solvePyraminx(state) {
    const cwi = await getCachedWorkerInstance();
    return _chunkEWRBHQFXJs.Alg.fromString(await cwi.solvePyraminxToString(state.stateData));
}
async function solveMegaminx(state) {
    const cwi = await getCachedWorkerInstance();
    return _chunkEWRBHQFXJs.Alg.fromString(await cwi.solveMegaminxToString(state.stateData));
}
function setDebug(options) {
    const { logPerf  } = options;
    if (typeof logPerf !== "undefined") getCachedWorkerInstance().then((cwi)=>cwi.setDebugMeasurePerf(logPerf)
    );
}

},{"./chunk-BEXHMXCT.js":"3TmGo","./chunk-IVQ4ITE2.js":"7rQmr","./chunk-RENZB7QN.js":"fdjOR","./chunk-EWRBHQFX.js":"i6QEj","comlink":"jUFlY","741694a14ce69903":"1Vw3v","67cbcba9194242c9":"4n5dW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3TmGo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "exposeAPI", ()=>exposeAPI
);
// src/cubing/search/inside/worker-guard.ts
var exposeAPI = {
    expose: true
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7rQmr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "node_adapter_default", ()=>node_adapter_default
);
// src/cubing/vendor/comlink-everywhere/node-adapter.ts
function nodeEndpoint(nep) {
    const listeners = new WeakMap();
    return {
        postMessage: nep.postMessage.bind(nep),
        addEventListener: (_, eh)=>{
            const l = (data)=>{
                if ("handleEvent" in eh) eh.handleEvent({
                    data
                });
                else eh({
                    data
                });
            };
            nep.on("message", l);
            listeners.set(eh, l);
        },
        removeEventListener: (_, eh)=>{
            const l = listeners.get(eh);
            if (!l) return;
            nep.off("message", l);
            listeners.delete(eh);
        },
        nodeWorker: nep
    };
}
var node_adapter_default = nodeEndpoint;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fdjOR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "randomUIntBelowFactory", ()=>randomUIntBelowFactory
);
parcelHelpers.export(exports, "randomChoiceFactory", ()=>randomChoiceFactory
);
parcelHelpers.export(exports, "randomPermute", ()=>randomPermute
);
// src/cubing/vendor/random-uint-below/get-random-values.ts
var cryptoPromise = null;
var cryptoMangled = "cr-yp-to";
var cryptoUnmangled = ()=>cryptoMangled.replace(/-/g, "")
;
async function getRandomValuesFactory() {
    if (!globalThis?.crypto?.getRandomValues) {
        const nodeWebcrypto = (await (cryptoPromise ?? (cryptoPromise = require(cryptoUnmangled())))).webcrypto;
        return nodeWebcrypto.getRandomValues;
    } else return crypto.getRandomValues.bind(crypto);
}
// src/cubing/vendor/random-uint-below/random53BitValue.ts
var MAX_JS_PRECISE_INT = 9007199254740992;
var UPPER_HALF_MULTIPLIER = 2097152;
var LOWER_HALF_DIVIDER = 2048;
function random53BitValue(getRandomValues) {
    const arr = new Uint32Array(2);
    getRandomValues(arr);
    const upper = arr[0];
    const lower = arr[1];
    return Math.floor(upper * UPPER_HALF_MULTIPLIER) + Math.floor(lower / LOWER_HALF_DIVIDER);
}
function validateMax(max) {
    if (typeof max !== "number" || max < 0 || Math.floor(max) !== max) throw new Error("randomInt.below() not called with a positive integer value.");
    if (max > MAX_JS_PRECISE_INT) throw new Error(`Called randomInt.below() with max == ${max}, which is larger than JavaScript can handle with integer precision.`);
}
async function randomUIntBelowFactory() {
    const getRandomValues = await getRandomValuesFactory();
    const randomUIntBelow = (max)=>{
        validateMax(max);
        const val = random53BitValue(getRandomValues);
        const maxUniformSamplingRange = Math.floor(MAX_JS_PRECISE_INT / max) * max;
        if (val < maxUniformSamplingRange) return val % max;
        else return randomUIntBelow(max);
    };
    return randomUIntBelow;
}
// src/cubing/vendor/random-uint-below/random-choice.ts
async function randomChoiceFactory() {
    const randomUIntBelow = await randomUIntBelowFactory();
    return (arr)=>arr[randomUIntBelow(arr.length)]
    ;
}
// src/cubing/vendor/random-uint-below/index.ts
var randomUIntBelowPromise = randomUIntBelowFactory();
async function randomPermute(list) {
    for(let i = 1; i < list.length; i++){
        const j = (await randomUIntBelowPromise)(i);
        [list[i], list[j]] = [
            list[j],
            list[i]
        ];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jUFlY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createEndpoint", ()=>createEndpoint
);
parcelHelpers.export(exports, "expose", ()=>expose
);
parcelHelpers.export(exports, "proxy", ()=>proxy
);
parcelHelpers.export(exports, "proxyMarker", ()=>proxyMarker
);
parcelHelpers.export(exports, "releaseProxy", ()=>releaseProxy
);
parcelHelpers.export(exports, "transfer", ()=>transfer
);
parcelHelpers.export(exports, "transferHandlers", ()=>transferHandlers
);
parcelHelpers.export(exports, "windowEndpoint", ()=>windowEndpoint
);
parcelHelpers.export(exports, "wrap", ()=>wrap
);
/**
 * Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const proxyMarker = Symbol("Comlink.proxy");
const createEndpoint = Symbol("Comlink.endpoint");
const releaseProxy = Symbol("Comlink.releaseProxy");
const throwMarker = Symbol("Comlink.thrown");
const isObject = (val)=>typeof val === "object" && val !== null || typeof val === "function"
;
/**
 * Internal transfer handle to handle objects marked to proxy.
 */ const proxyTransferHandler = {
    canHandle: (val)=>isObject(val) && val[proxyMarker]
    ,
    serialize (obj) {
        const { port1 , port2  } = new MessageChannel();
        expose(obj, port1);
        return [
            port2,
            [
                port2
            ]
        ];
    },
    deserialize (port) {
        port.start();
        return wrap(port);
    }
};
/**
 * Internal transfer handler to handle thrown exceptions.
 */ const throwTransferHandler = {
    canHandle: (value)=>isObject(value) && throwMarker in value
    ,
    serialize ({ value  }) {
        let serialized;
        if (value instanceof Error) serialized = {
            isError: true,
            value: {
                message: value.message,
                name: value.name,
                stack: value.stack
            }
        };
        else serialized = {
            isError: false,
            value
        };
        return [
            serialized,
            []
        ];
    },
    deserialize (serialized) {
        if (serialized.isError) throw Object.assign(new Error(serialized.value.message), serialized.value);
        throw serialized.value;
    }
};
/**
 * Allows customizing the serialization of certain values.
 */ const transferHandlers = new Map([
    [
        "proxy",
        proxyTransferHandler
    ],
    [
        "throw",
        throwTransferHandler
    ], 
]);
function expose(obj1, ep = self) {
    ep.addEventListener("message", function callback(ev) {
        if (!ev || !ev.data) return;
        const { id , type , path  } = Object.assign({
            path: []
        }, ev.data);
        const argumentList = (ev.data.argumentList || []).map(fromWireValue);
        let returnValue1;
        try {
            const parent = path.slice(0, -1).reduce((obj, prop)=>obj[prop]
            , obj1);
            const rawValue = path.reduce((obj, prop)=>obj[prop]
            , obj1);
            switch(type){
                case "GET" /* GET */ :
                    returnValue1 = rawValue;
                    break;
                case "SET" /* SET */ :
                    parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
                    returnValue1 = true;
                    break;
                case "APPLY" /* APPLY */ :
                    returnValue1 = rawValue.apply(parent, argumentList);
                    break;
                case "CONSTRUCT" /* CONSTRUCT */ :
                    {
                        const value = new rawValue(...argumentList);
                        returnValue1 = proxy(value);
                    }
                    break;
                case "ENDPOINT" /* ENDPOINT */ :
                    {
                        const { port1 , port2  } = new MessageChannel();
                        expose(obj1, port2);
                        returnValue1 = transfer(port1, [
                            port1
                        ]);
                    }
                    break;
                case "RELEASE" /* RELEASE */ :
                    returnValue1 = undefined;
                    break;
                default:
                    return;
            }
        } catch (value1) {
            returnValue1 = {
                value: value1,
                [throwMarker]: 0
            };
        }
        Promise.resolve(returnValue1).catch((value)=>{
            return {
                value,
                [throwMarker]: 0
            };
        }).then((returnValue)=>{
            const [wireValue, transferables] = toWireValue(returnValue);
            ep.postMessage(Object.assign(Object.assign({
            }, wireValue), {
                id
            }), transferables);
            if (type === "RELEASE" /* RELEASE */ ) {
                // detach and deactive after sending release response above.
                ep.removeEventListener("message", callback);
                closeEndPoint(ep);
            }
        });
    });
    if (ep.start) ep.start();
}
function isMessagePort(endpoint) {
    return endpoint.constructor.name === "MessagePort";
}
function closeEndPoint(endpoint) {
    if (isMessagePort(endpoint)) endpoint.close();
}
function wrap(ep, target) {
    return createProxy(ep, [], target);
}
function throwIfProxyReleased(isReleased) {
    if (isReleased) throw new Error("Proxy has been released and is not useable");
}
function createProxy(ep, path = [], target = function() {
}) {
    let isProxyReleased = false;
    const proxy1 = new Proxy(target, {
        get (_target, prop) {
            throwIfProxyReleased(isProxyReleased);
            if (prop === releaseProxy) return ()=>{
                return requestResponseMessage(ep, {
                    type: "RELEASE" /* RELEASE */ ,
                    path: path.map((p)=>p.toString()
                    )
                }).then(()=>{
                    closeEndPoint(ep);
                    isProxyReleased = true;
                });
            };
            if (prop === "then") {
                if (path.length === 0) return {
                    then: ()=>proxy1
                };
                const r = requestResponseMessage(ep, {
                    type: "GET" /* GET */ ,
                    path: path.map((p)=>p.toString()
                    )
                }).then(fromWireValue);
                return r.then.bind(r);
            }
            return createProxy(ep, [
                ...path,
                prop
            ]);
        },
        set (_target, prop, rawValue) {
            throwIfProxyReleased(isProxyReleased);
            // FIXME: ES6 Proxy Handler `set` methods are supposed to return a
            // boolean. To show good will, we return true asynchronously ¯\_(ツ)_/¯
            const [value, transferables] = toWireValue(rawValue);
            return requestResponseMessage(ep, {
                type: "SET" /* SET */ ,
                path: [
                    ...path,
                    prop
                ].map((p)=>p.toString()
                ),
                value
            }, transferables).then(fromWireValue);
        },
        apply (_target, _thisArg, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const last = path[path.length - 1];
            if (last === createEndpoint) return requestResponseMessage(ep, {
                type: "ENDPOINT" /* ENDPOINT */ 
            }).then(fromWireValue);
            // We just pretend that `bind()` didn’t happen.
            if (last === "bind") return createProxy(ep, path.slice(0, -1));
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, {
                type: "APPLY" /* APPLY */ ,
                path: path.map((p)=>p.toString()
                ),
                argumentList
            }, transferables).then(fromWireValue);
        },
        construct (_target, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, {
                type: "CONSTRUCT" /* CONSTRUCT */ ,
                path: path.map((p)=>p.toString()
                ),
                argumentList
            }, transferables).then(fromWireValue);
        }
    });
    return proxy1;
}
function myFlat(arr) {
    return Array.prototype.concat.apply([], arr);
}
function processArguments(argumentList) {
    const processed = argumentList.map(toWireValue);
    return [
        processed.map((v)=>v[0]
        ),
        myFlat(processed.map((v)=>v[1]
        ))
    ];
}
const transferCache = new WeakMap();
function transfer(obj, transfers) {
    transferCache.set(obj, transfers);
    return obj;
}
function proxy(obj) {
    return Object.assign(obj, {
        [proxyMarker]: true
    });
}
function windowEndpoint(w, context = self, targetOrigin = "*") {
    return {
        postMessage: (msg, transferables)=>w.postMessage(msg, targetOrigin, transferables)
        ,
        addEventListener: context.addEventListener.bind(context),
        removeEventListener: context.removeEventListener.bind(context)
    };
}
function toWireValue(value) {
    for (const [name, handler] of transferHandlers)if (handler.canHandle(value)) {
        const [serializedValue, transferables] = handler.serialize(value);
        return [
            {
                type: "HANDLER" /* HANDLER */ ,
                name,
                value: serializedValue
            },
            transferables, 
        ];
    }
    return [
        {
            type: "RAW" /* RAW */ ,
            value
        },
        transferCache.get(value) || [], 
    ];
}
function fromWireValue(value) {
    switch(value.type){
        case "HANDLER" /* HANDLER */ :
            return transferHandlers.get(value.name).deserialize(value.value);
        case "RAW" /* RAW */ :
            return value.value;
    }
}
function requestResponseMessage(ep, msg, transfers) {
    return new Promise((resolve)=>{
        const id = generateUUID();
        ep.addEventListener("message", function l(ev) {
            if (!ev.data || !ev.data.id || ev.data.id !== id) return;
            ep.removeEventListener("message", l);
            resolve(ev.data);
        });
        if (ep.start) ep.start();
        ep.postMessage(Object.assign({
            id
        }, msg), transfers);
    });
}
function generateUUID() {
    return new Array(4).fill(0).map(()=>Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)
    ).join("-");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Vw3v":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "search-worker-ts-entry-3B5U6XER.b68a9417.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('klc5F')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"4n5dW":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "worker-inside-generated-string-AHMSHHSF.84699f12.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('lHe99')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"dS4p9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setIsInsideWorker", ()=>setIsInsideWorker
);
parcelHelpers.export(exports, "mustBeInsideWorker", ()=>mustBeInsideWorker
);
parcelHelpers.export(exports, "addOrientationSuffix", ()=>addOrientationSuffix
);
parcelHelpers.export(exports, "random333State", ()=>random333State
);
parcelHelpers.export(exports, "solve333", ()=>solve333
);
parcelHelpers.export(exports, "random333Scramble", ()=>random333Scramble
);
parcelHelpers.export(exports, "initialize333", ()=>initialize333
);
parcelHelpers.export(exports, "random333OrientedScramble", ()=>random333OrientedScramble
);
parcelHelpers.export(exports, "random333FewestMovesScramble", ()=>random333FewestMovesScramble
);
var _chunkRENZB7QNJs = require("./chunk-RENZB7QN.js");
var _chunkBOKO2BWTJs = require("./chunk-BOKO2BWT.js");
var _chunkFE3HTWQKJs = require("./chunk-FE3HTWQK.js");
var _chunkEWRBHQFXJs = require("./chunk-EWRBHQFX.js");
// src/cubing/search/inside/inside-worker.ts
var isInsideWorker = false;
function setIsInsideWorker(inside) {
    isInsideWorker = inside;
}
function mustBeInsideWorker() {
    if (!isInsideWorker) throw new Error("Must be called from inside a worker, to avoid impact on page performance. Try importing from the top level of `cubing/solve`?");
}
// src/cubing/search/inside/solve/addOrientationSuffix.ts
async function addOrientationSuffix(alg, suffixSpec) {
    const algBuilder = new _chunkEWRBHQFXJs.AlgBuilder();
    algBuilder.experimentalPushAlg(alg);
    for (const suffix of suffixSpec){
        const choice = (await _chunkRENZB7QNJs.randomChoiceFactory())(suffix);
        if (choice !== null) algBuilder.push(_chunkEWRBHQFXJs.Move.fromString(choice));
    }
    return algBuilder.toAlg();
}
// src/cubing/search/inside/solve/puzzles/3x3x3/convert.ts
var reidEdgeOrder = "UF UR UB UL DF DR DB DL FR FL BR BL".split(" ");
var reidCornerOrder = "UFR URB UBL ULF DRF DFL DLB DBR".split(" ");
var centerOrder = "U L F R B D".split(" ");
var map = [
    [
        1,
        2,
        0
    ],
    [
        0,
        2,
        0
    ],
    [
        1,
        1,
        0
    ],
    [
        0,
        3,
        0
    ],
    [
        2,
        0,
        0
    ],
    [
        0,
        1,
        0
    ],
    [
        1,
        3,
        0
    ],
    [
        0,
        0,
        0
    ],
    [
        1,
        0,
        0
    ],
    [
        1,
        0,
        2
    ],
    [
        0,
        1,
        1
    ],
    [
        1,
        1,
        1
    ],
    [
        0,
        8,
        1
    ],
    [
        2,
        3,
        0
    ],
    [
        0,
        10,
        1
    ],
    [
        1,
        4,
        1
    ],
    [
        0,
        5,
        1
    ],
    [
        1,
        7,
        2
    ],
    [
        1,
        3,
        2
    ],
    [
        0,
        0,
        1
    ],
    [
        1,
        0,
        1
    ],
    [
        0,
        9,
        0
    ],
    [
        2,
        2,
        0
    ],
    [
        0,
        8,
        0
    ],
    [
        1,
        5,
        1
    ],
    [
        0,
        4,
        1
    ],
    [
        1,
        4,
        2
    ],
    [
        1,
        5,
        0
    ],
    [
        0,
        4,
        0
    ],
    [
        1,
        4,
        0
    ],
    [
        0,
        7,
        0
    ],
    [
        2,
        5,
        0
    ],
    [
        0,
        5,
        0
    ],
    [
        1,
        6,
        0
    ],
    [
        0,
        6,
        0
    ],
    [
        1,
        7,
        0
    ],
    [
        1,
        2,
        2
    ],
    [
        0,
        3,
        1
    ],
    [
        1,
        3,
        1
    ],
    [
        0,
        11,
        1
    ],
    [
        2,
        1,
        0
    ],
    [
        0,
        9,
        1
    ],
    [
        1,
        6,
        1
    ],
    [
        0,
        7,
        1
    ],
    [
        1,
        5,
        2
    ],
    [
        1,
        1,
        2
    ],
    [
        0,
        2,
        1
    ],
    [
        1,
        2,
        1
    ],
    [
        0,
        10,
        0
    ],
    [
        2,
        4,
        0
    ],
    [
        0,
        11,
        0
    ],
    [
        1,
        7,
        1
    ],
    [
        0,
        6,
        1
    ],
    [
        1,
        6,
        2
    ]
];
function rotateLeft(s, i) {
    return s.slice(i) + s.slice(0, i);
}
function toReid333Struct(state) {
    const output = [
        [],
        []
    ];
    for(let i = 0; i < 6; i++){
        if (state.stateData["CENTERS"].pieces[i] !== i) throw new Error("non-oriented puzzles are not supported");
    }
    for(let i1 = 0; i1 < 12; i1++)output[0].push(rotateLeft(reidEdgeOrder[state.stateData["EDGES"].pieces[i1]], state.stateData["EDGES"].orientation[i1]));
    for(let i2 = 0; i2 < 8; i2++)output[1].push(rotateLeft(reidCornerOrder[state.stateData["CORNERS"].pieces[i2]], state.stateData["CORNERS"].orientation[i2]));
    output.push(centerOrder);
    return output;
}
function toMin2PhaseState(state) {
    const reid = toReid333Struct(state);
    return map.map(([orbit, perm, ori])=>reid[orbit][perm][ori]
    ).join("");
}
// src/cubing/search/inside/solve/puzzles/3x3x3/filter.ts
function isEquivalentTranformationIgnoringCENTERS(t1, t2) {
    const t1NoCenterOri = new _chunkFE3HTWQKJs.KState(t1.kpuzzle, {
        EDGES: t1.stateData.EDGES,
        CORNERS: t1.stateData.CORNERS,
        CENTERS: {
            pieces: t1.stateData.CENTERS.pieces,
            orientation: new Array(6).fill(0)
        }
    }).experimentalToTransformation();
    const t2NoCenterOri = new _chunkFE3HTWQKJs.KState(t2.kpuzzle, {
        EDGES: t2.stateData.EDGES,
        CORNERS: t2.stateData.CORNERS,
        CENTERS: {
            pieces: t2.stateData.CENTERS.pieces,
            orientation: new Array(6).fill(0)
        }
    }).experimentalToTransformation();
    return t1NoCenterOri.isIdentical(t2NoCenterOri);
}
function passesFilter(kpuzzle, state) {
    if (isEquivalentTranformationIgnoringCENTERS(kpuzzle.startState(), state)) return false;
    for (const face of "ULFRBD")for(let amount = 1; amount < 4; amount++){
        const transformation = kpuzzle.moveToTransformation(new _chunkEWRBHQFXJs.Move(face, amount)).toKState();
        if (isEquivalentTranformationIgnoringCENTERS(transformation, state)) return false;
    }
    return true;
}
// src/cubing/search/inside/solve/puzzles/3x3x3/legacy-sgs.ts
var sgs3x3x3 = [
    [
        "R U'",
        "R2 B",
        "D2 B2",
        "D' L B'",
        "R' U'",
        "B",
        "D B2",
        "R' B",
        "L' U",
        "L2 B'",
        "B2",
        "D L B'",
        "L U",
        "B'",
        "U'",
        "R B",
        "D' B2",
        "L B'",
        "U2",
        "U L' B'",
        "",
        "U' L' B'",
        "U",
        "L' B'"
    ],
    [
        "F2 L2",
        "F' L'",
        "R' F L2",
        "D' L2",
        "F L2",
        "F2 L'",
        "R' F' L'",
        "R2 F L2",
        "R2 F2 L'",
        "L2",
        "F L'",
        "D' L",
        "D2 L2",
        "R2 F' L'",
        "D L",
        "",
        "L2 F L'",
        "L F' L2",
        "L F L'",
        "F' L2",
        "L'",
        "D L2",
        "D F L'",
        "L"
    ],
    [
        "R B U2 B'",
        "R2 B U' B'",
        "F2 B U B'",
        "F B2 L' B2",
        "B2 L B2",
        "B U' B'",
        "R2 B U2 B'",
        "R' B U' B'",
        "B2 L' B2",
        "F B U B'",
        "B2 U' B2",
        "B' L B",
        "L F' B D' B'",
        "B' U' B2 D B'",
        "B U2 B'",
        "R B U' B'",
        "B2 L2 B2",
        "D' B' L B",
        "B U B'",
        "F' B2 L' B2",
        "",
        "B2 L' B' U' B'"
    ],
    [
        "U F2 L2 U'",
        "F' U L' U'",
        "F2 U L' U'",
        "U F L2 U'",
        "U2 B2 U2",
        "R' U' B U",
        "D2 U L U'",
        "D U2 B' U2",
        "U L2 U'",
        "F U L' U'",
        "D U L U'",
        "U2 B' U2",
        "",
        "U2 B' U' L' U'",
        "U2 L' U2",
        "U' B U",
        "U L U'",
        "D' U2 B' U2",
        "U L' U'",
        "U2 B U2"
    ],
    [
        "R' D' F2",
        "F'",
        "F2",
        "D R F'",
        "R D' F2",
        "R2 F'",
        "D' F2",
        "R F'",
        "F2 R' D' F2",
        "F",
        "D2 F2",
        "D' R F'",
        "R2 D' F2",
        "R' F'",
        "D F2",
        "D2 R F'",
        "",
        "F R' D' F2"
    ],
    [
        "R' D2 F' D F",
        "R F2 R2 F2",
        "R2 F' D2 F",
        "F' R2 D2 F",
        "L D' L'",
        "D F' D2 F",
        "F2 R2 F2",
        "R F' D2 F",
        "F' R2 D' F",
        "F' R' D2 F",
        "F2 R' F2",
        "L D L'",
        "F' R D' F",
        "F2 R F2",
        "F' D2 F",
        "",
        "L D2 R D' L'",
        "F' D2 F' R F2",
        "D2 R2 F2 R2 F2",
        "D F' D' F",
        "F' D F"
    ],
    [
        "U F2 U'",
        "R U F' U'",
        "D R U F2 U'",
        "U F U'",
        "R2 U F2 U'",
        "R' U F' U'",
        "R U F2 U'",
        "R2 U F' U'",
        "",
        "U L D L' F U'",
        "F2 D' R D F2",
        "D2 U F U'",
        "R' U F2 U'",
        "U F' U'",
        "F2 D2 R D2 F2",
        "D U F U'"
    ],
    [
        "R2",
        "R' B' D B",
        "D R'",
        "F' R2 F",
        "",
        "R B' D B",
        "R'",
        "B' D B",
        "D' R'",
        "D2 F' R2 F",
        "R",
        "R2 B' D B",
        "D2 R'",
        "B' D' B"
    ],
    [
        "R2 D' R2",
        "F' R' F R",
        "R D' R2 D R'",
        "D2 R2 D2 R2",
        "R' D' F' R F",
        "U F D F' U'",
        "",
        "R2 D2 B R' B' R'",
        "R' F D' F2 R F",
        "R2 D R2",
        "F2 U F U' F",
        "R' D F' R F",
        "D R2 D2 R2",
        "U F D' F' U'",
        "D R' D2 F' R F",
        "R2 D2 R2",
        "U F D2 F' U'",
        "R' D2 F' R F"
    ],
    [
        "B R B'",
        "F D F' B R2 B'",
        "D B R2 B'",
        "D2 B R' B'",
        "B R2 B'",
        "D B R' B'",
        "D' B R2 B'",
        "B R' B'",
        "",
        "B R2 B' D B R' B'",
        "D2 B R2 B'",
        "D' B R' B'"
    ],
    [
        "",
        "R' D R F D2 F'",
        "R' D R",
        "D F D' F'",
        "R F' R' F",
        "F D' F'",
        "R' D' R",
        "F D2 F'",
        "R' D2 R",
        "F D F'"
    ],
    [
        "",
        "F2 D2 R F' R' D2 F' D2 F'",
        "F2 D2 F' D' F D' F' D2 F'",
        "F2 D F2 D F2 D2 F2",
        "D2 F L D2 L' D2 F'",
        "D F D2 L D2 L' F'",
        "R' D B' D2 B D' R",
        "R' D2 B' D2 B R",
        "F D2 F' D F D F'",
        "F D' L D2 L' D F'",
        "B D' F D B' D' F'",
        "F D2 L D2 L' F'",
        "F D' L D L' D F'",
        "F L D2 L' D2 F'",
        "R' B' D2 B D2 R"
    ],
    [
        "D'",
        "F L D L' D' F'",
        "D2",
        "L B D B' D' L'",
        "D",
        "B' L' D' L D B",
        "",
        "D F L D L' D' F'"
    ],
    [
        "F' D2 F D F' D F",
        "F' D' R' D R F",
        "F' R' D' R D F",
        "B D R D' R' B'",
        "",
        "D B' D' L' D L B"
    ],
    [
        "D F D F' D F D2 F'",
        "F' U2 B' R' B U2 F' L F' L' F'",
        "",
        "D2 L D L2 F L F2 D F"
    ],
    [
        "L B' L' F L B L' F'",
        "F2 U F' D2 F U' F' D2 F'",
        "D' F' D B D' F D B'",
        "F L2 F R2 F' L2 F R2 F2",
        "D B D' F' D B' D' F",
        "R F L F' R' F L' F'",
        "",
        "D2 B L' U2 L B' D2 B L' U2 L B'",
        "D2 F R' U2 R F' D2 F R' U2 R F'",
        "R F L' F' R' F L F'",
        "D F D' B' D F' D' B",
        "L2 F2 L' B2 L F2 L' B2 L'"
    ],
    [
        "L B R' B' L' B R B'",
        "R' B R F' R' B' R F",
        "L D2 L U L' D2 L U' L2",
        "",
        "D2 B' D2 F D' L2 F L2 F' D2 B D' F'",
        "D2 F' R' F R2 B' D2 B D2 R' F D2 F'",
        "L B L' F L B' L' F'",
        "F' D2 F' U' F D2 F' U F2",
        "D' B' D F D' B D F'"
    ],
    [
        "",
        "D2 F' L U2 L' F D2 F' L U2 L' F",
        "D2 B' R U2 R' B D2 B' R U2 R' B"
    ]
];
// src/cubing/search/inside/solve/puzzles/3x3x3/index.ts
async function random333State() {
    const kpuzzle = await _chunkBOKO2BWTJs.puzzles["3x3x3"].kpuzzle();
    let state = kpuzzle.startState();
    for (const piece of sgs3x3x3)state = state.applyAlg(_chunkEWRBHQFXJs.Alg.fromString((await _chunkRENZB7QNJs.randomChoiceFactory())(piece)));
    if (!passesFilter(kpuzzle, state)) return random333State();
    return state;
}
var cachedImport = null;
function dynamicMin2phaseGWT() {
    return cachedImport ?? (cachedImport = require("4e25ee2079eb7744"));
}
async function solve333(s) {
    mustBeInsideWorker();
    return _chunkEWRBHQFXJs.Alg.fromString((await dynamicMin2phaseGWT()).solveState(toMin2PhaseState(s)));
}
async function random333Scramble() {
    return solve333(await random333State());
}
async function initialize333() {
    (await dynamicMin2phaseGWT()).initialize();
}
var randomSuffixes = [
    [
        null,
        "Rw",
        "Rw2",
        "Rw'",
        "Fw",
        "Fw'"
    ],
    [
        null,
        "Dw",
        "Dw2",
        "Dw'"
    ]
];
async function random333OrientedScramble() {
    return addOrientationSuffix(await random333Scramble(), randomSuffixes);
}
var extraBit = new _chunkEWRBHQFXJs.Alg("R' U' F");
async function random333FewestMovesScramble() {
    const algBuilder = new _chunkEWRBHQFXJs.AlgBuilder();
    const unorientedScramble = await random333Scramble();
    algBuilder.experimentalPushAlg(extraBit);
    algBuilder.experimentalPushAlg(unorientedScramble);
    algBuilder.experimentalPushAlg(extraBit);
    return algBuilder.toAlg();
}

},{"./chunk-RENZB7QN.js":"fdjOR","./chunk-BOKO2BWT.js":"abt9g","./chunk-FE3HTWQK.js":"jNiOS","./chunk-EWRBHQFX.js":"i6QEj","4e25ee2079eb7744":"jpNi9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jpNi9":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "3x3x3-min2phase-FPRJ5PCJ.0b6a6fbd.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('97OEN')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"c5IZo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EXPERIMENTAL_PROP_NO_VALUE", ()=>_chunkTG5KP5ILJs.NO_VALUE
);
parcelHelpers.export(exports, "ExperimentalKPuzzleSVGWrapper", ()=>KPuzzleSVGWrapper
);
parcelHelpers.export(exports, "SimpleAlgIndexer", ()=>SimpleAlgIndexer
);
parcelHelpers.export(exports, "TreeAlgIndexer", ()=>TreeAlgIndexer
);
parcelHelpers.export(exports, "TwistyAlgEditor", ()=>TwistyAlgEditor
);
parcelHelpers.export(exports, "TwistyAlgViewer", ()=>TwistyAlgViewer
);
parcelHelpers.export(exports, "TwistyPlayer", ()=>TwistyPlayer
);
parcelHelpers.export(exports, "TwizzleLink", ()=>TwizzleLink
);
parcelHelpers.export(exports, "backViewLayouts", ()=>backViewLayouts
);
parcelHelpers.export(exports, "experimentalDebugShowRenderStats", ()=>debugShowRenderStats
);
parcelHelpers.export(exports, "experimentalForceNewRendererSharing", ()=>experimentalForceNewRendererSharing
);
var _chunkTG5KP5ILJs = require("../chunk-TG5KP5IL.js");
var _chunkU2TSTTDGJs = require("../chunk-U2TSTTDG.js");
var _chunkBOKO2BWTJs = require("../chunk-BOKO2BWT.js");
var _chunkFE3HTWQKJs = require("../chunk-FE3HTWQK.js");
var _chunkEWRBHQFXJs = require("../chunk-EWRBHQFX.js");
var _chunkWO2AXYFEJs = require("../chunk-WO2AXYFE.js");
// src/cubing/twisty/controllers/AnimationTypes.ts
var Direction;
(function(Direction2) {
    Direction2[Direction2["Forwards"] = 1] = "Forwards";
    Direction2[Direction2["Paused"] = 0] = "Paused";
    Direction2[Direction2["Backwards"] = -1] = "Backwards";
})(Direction || (Direction = {
}));
function directionScalar(direction) {
    return direction;
}
var BoundaryType;
(function(BoundaryType2) {
    BoundaryType2["Move"] = "move";
    BoundaryType2["EntireTimeline"] = "entire-timeline";
})(BoundaryType || (BoundaryType = {
}));
// src/cubing/twisty/controllers/RenderScheduler.ts
var RenderScheduler = class {
    constructor(callback){
        this.callback = callback;
        this.animFrameID = null;
        this.animFrame = this.animFrameWrapper.bind(this);
    }
    requestAnimFrame() {
        if (!this.animFrameID) this.animFrameID = requestAnimationFrame(this.animFrame);
    }
    cancelAnimFrame() {
        if (this.animFrameID) {
            cancelAnimationFrame(this.animFrameID);
            this.animFrameID = 0;
        }
    }
    animFrameWrapper(timestamp) {
        this.animFrameID = 0;
        this.callback(timestamp);
    }
};
// src/cubing/twisty/model/helpers.ts
function arrayEquals(a, b) {
    if (a === b) return true;
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++){
        if (a[i] !== b[i]) return false;
    }
    return true;
}
function arrayEqualsCompare(a, b, compare) {
    if (a === b) return true;
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++){
        if (!compare(a[i], b[i])) return false;
    }
    return true;
}
function mod(v, m, offset = 0) {
    return (v % m + m + offset) % m - offset;
}
function modIntoRange(v, rangeMin, rangeMax) {
    return mod(v - rangeMin, rangeMax - rangeMin) + rangeMin;
}
// src/cubing/twisty/controllers/TwistyAnimationController.ts
var CatchUpHelper = class {
    constructor(model){
        this.model = model;
        this.catchingUp = false;
        this.pendingFrame = false;
        this.scheduler = new RenderScheduler(this.animFrame.bind(this));
        this.catchUpMs = 500;
        this.lastTimestamp = 0;
    }
    start() {
        if (!this.catchingUp) this.lastTimestamp = performance.now();
        this.catchingUp = true;
        this.pendingFrame = true;
        this.scheduler.requestAnimFrame();
    }
    stop() {
        this.catchingUp = false;
        this.scheduler.cancelAnimFrame();
    }
    animFrame(timestamp) {
        this.scheduler.requestAnimFrame();
        const delta = (timestamp - this.lastTimestamp) / this.catchUpMs;
        this.lastTimestamp = timestamp;
        this.model.catchUpMove.set((async ()=>{
            const previousCatchUpMove = await this.model.catchUpMove.get();
            if (previousCatchUpMove.move === null) return previousCatchUpMove;
            const amount = previousCatchUpMove.amount + delta;
            if (amount >= 1) {
                this.pendingFrame = true;
                this.stop();
                this.model.timestampRequest.set("end");
                return {
                    move: null,
                    amount: 0
                };
            }
            this.pendingFrame = false;
            return {
                move: previousCatchUpMove.move,
                amount
            };
        })());
    }
};
var _effectiveTimestampMilliseconds, effectiveTimestampMilliseconds_fn, _animFrameEffectiveTimestampStaleDropper;
var TwistyAnimationController = class {
    constructor(model, delegate){
        this.delegate = delegate;
        _chunkWO2AXYFEJs.__privateAdd(this, _effectiveTimestampMilliseconds);
        this.playing = false;
        this.direction = Direction.Forwards;
        this.lastDatestamp = 0;
        this.scheduler = new RenderScheduler(this.animFrame.bind(this));
        _chunkWO2AXYFEJs.__privateAdd(this, _animFrameEffectiveTimestampStaleDropper, new _chunkTG5KP5ILJs.StaleDropper());
        this.model = model;
        this.lastTimestampPromise = _chunkWO2AXYFEJs.__privateMethod(this, _effectiveTimestampMilliseconds, effectiveTimestampMilliseconds_fn).call(this);
        this.model.playingInfo.addFreshListener(this.onPlayingProp.bind(this));
        this.catchUpHelper = new CatchUpHelper(this.model);
        this.model.catchUpMove.addFreshListener(this.onCatchUpMoveProp.bind(this));
    }
    async onPlayingProp(playingInfo) {
        if (playingInfo.playing !== this.playing) playingInfo.playing ? this.play(playingInfo) : this.pause();
    }
    async onCatchUpMoveProp(catchUpMove) {
        const catchingUp = catchUpMove.move !== null;
        if (catchingUp !== this.catchUpHelper.catchingUp) catchingUp ? this.catchUpHelper.start() : this.catchUpHelper.stop();
        this.scheduler.requestAnimFrame();
    }
    jumpToStart(options) {
        this.model.timestampRequest.set("start");
        this.pause();
        if (options?.flash) this.delegate.flash();
    }
    jumpToEnd(options) {
        this.model.timestampRequest.set("end");
        this.pause();
        if (options?.flash) this.delegate.flash();
    }
    playPause() {
        if (this.playing) this.pause();
        else this.play();
    }
    async play(options) {
        const direction = options?.direction ?? Direction.Forwards;
        const coarseTimelineInfo = await this.model.coarseTimelineInfo.get();
        if (options?.autoSkipToOtherEndIfStartingAtBoundary ?? true) {
            if (direction === Direction.Forwards && coarseTimelineInfo.atEnd) {
                this.model.timestampRequest.set("start");
                this.delegate.flash();
            }
            if (direction === Direction.Backwards && coarseTimelineInfo.atStart) {
                this.model.timestampRequest.set("end");
                this.delegate.flash();
            }
        }
        this.model.playingInfo.set({
            playing: true,
            direction,
            untilBoundary: options?.untilBoundary ?? BoundaryType.EntireTimeline,
            loop: options?.loop ?? false
        });
        this.playing = true;
        this.lastDatestamp = performance.now();
        this.lastTimestampPromise = _chunkWO2AXYFEJs.__privateMethod(this, _effectiveTimestampMilliseconds, effectiveTimestampMilliseconds_fn).call(this);
        this.scheduler.requestAnimFrame();
    }
    pause() {
        this.playing = false;
        this.scheduler.cancelAnimFrame();
        this.model.playingInfo.set({
            playing: false,
            untilBoundary: BoundaryType.EntireTimeline
        });
    }
    async animFrame(frameDatestamp) {
        if (this.playing) this.scheduler.requestAnimFrame();
        const lastDatestamp = this.lastDatestamp;
        const freshenerResult = await _chunkWO2AXYFEJs.__privateGet(this, _animFrameEffectiveTimestampStaleDropper).queue(Promise.all([
            this.model.playingInfo.get(),
            this.lastTimestampPromise,
            this.model.timeRange.get(),
            this.model.tempoScale.get(),
            this.model.currentMoveInfo.get()
        ]));
        const [playingInfo, lastTimestamp, timeRange, tempoScale, currentMoveInfo] = freshenerResult;
        if (!playingInfo.playing) {
            this.playing = false;
            return;
        }
        let end = currentMoveInfo.earliestEnd;
        if (currentMoveInfo.currentMoves.length === 0 || playingInfo.untilBoundary === BoundaryType.EntireTimeline) end = timeRange.end;
        let start = currentMoveInfo.latestStart;
        if (currentMoveInfo.currentMoves.length === 0 || playingInfo.untilBoundary === BoundaryType.EntireTimeline) start = timeRange.start;
        let delta = (frameDatestamp - lastDatestamp) * directionScalar(this.direction) * tempoScale;
        delta = Math.max(delta, 1);
        delta *= playingInfo.direction;
        let newTimestamp = lastTimestamp + delta;
        let newSmartTimestampRequest = null;
        if (newTimestamp >= end) {
            if (playingInfo.loop) newTimestamp = modIntoRange(newTimestamp, timeRange.start, timeRange.end);
            else {
                if (newTimestamp === timeRange.end) newSmartTimestampRequest = "end";
                else newTimestamp = end;
                this.playing = false;
                this.model.playingInfo.set({
                    playing: false
                });
            }
        } else if (newTimestamp <= start) {
            if (playingInfo.loop) newTimestamp = modIntoRange(newTimestamp, timeRange.start, timeRange.end);
            else {
                if (newTimestamp === timeRange.start) newSmartTimestampRequest = "start";
                else newTimestamp = start;
                this.playing = false;
                this.model.playingInfo.set({
                    playing: false
                });
            }
        }
        this.lastDatestamp = frameDatestamp;
        this.lastTimestampPromise = Promise.resolve(newTimestamp);
        this.model.timestampRequest.set(newSmartTimestampRequest ?? newTimestamp);
    }
};
_effectiveTimestampMilliseconds = new WeakSet();
effectiveTimestampMilliseconds_fn = async function() {
    return (await this.model.detailedTimelineInfo.get()).timestamp;
};
_animFrameEffectiveTimestampStaleDropper = new WeakMap();
// src/cubing/twisty/controllers/TwistyPlayerController.ts
var TwistyPlayerController = class {
    constructor(model, delegate){
        this.model = model;
        this.animationController = new TwistyAnimationController(model, delegate);
    }
    jumpToStart(options) {
        this.animationController.jumpToStart(options);
    }
    jumpToEnd(options) {
        this.animationController.jumpToEnd(options);
    }
    togglePlay(play) {
        if (typeof play === "undefined") this.animationController.playPause();
        play ? this.animationController.play() : this.animationController.pause();
    }
    async visitTwizzleLink() {
        const a = document.createElement("a");
        a.href = await this.model.twizzleLink();
        a.target = "_blank";
        a.click();
    }
};
// src/cubing/twisty/model/props/viewer/ControlPanelProp.ts
var controlsLocations = {
    "bottom-row": true,
    "none": true
};
var ControlPanelProp = class extends _chunkTG5KP5ILJs.SimpleTwistyPropSource {
    getDefaultValue() {
        return "auto";
    }
};
// src/cubing/twisty/views/node-custom-element-shims.ts
var HTMLElementStub = class {
};
var HTMLElementShim;
if (globalThis.HTMLElement) HTMLElementShim = HTMLElement;
else HTMLElementShim = HTMLElementStub;
var CustomElementsStub = class {
    define() {
    }
};
var customElementsShim;
if (globalThis.customElements) customElementsShim = customElements;
else customElementsShim = new CustomElementsStub();
// src/cubing/twisty/views/ManagedCustomElement.ts
var CSSSource = class {
    constructor(sourceText){
        this.sourceText = sourceText;
    }
    getAsString() {
        return this.sourceText;
    }
};
var _cssSourceMap;
var ManagedCustomElement = class extends HTMLElementShim {
    constructor(options){
        super();
        _chunkWO2AXYFEJs.__privateAdd(this, _cssSourceMap, new Map());
        this.shadow = this.attachShadow({
            mode: options?.mode ?? "closed"
        });
        this.contentWrapper = document.createElement("div");
        this.contentWrapper.classList.add("wrapper");
        this.shadow.appendChild(this.contentWrapper);
    }
    addCSS(cssSource) {
        const existing = _chunkWO2AXYFEJs.__privateGet(this, _cssSourceMap).get(cssSource);
        if (existing) return existing;
        const cssElem = document.createElement("style");
        cssElem.textContent = cssSource.getAsString();
        _chunkWO2AXYFEJs.__privateGet(this, _cssSourceMap).set(cssSource, cssElem);
        this.shadow.appendChild(cssElem);
        return cssElem;
    }
    removeCSS(cssSource) {
        const cssElem = _chunkWO2AXYFEJs.__privateGet(this, _cssSourceMap).get(cssSource);
        if (!cssElem) return;
        this.shadow.removeChild(cssElem);
        _chunkWO2AXYFEJs.__privateGet(this, _cssSourceMap).delete(cssSource);
    }
    addElement(element) {
        return this.contentWrapper.appendChild(element);
    }
    prependElement(element) {
        this.contentWrapper.prepend(element);
    }
    removeElement(element) {
        return this.contentWrapper.removeChild(element);
    }
};
_cssSourceMap = new WeakMap();
customElementsShim.define("twisty-managed-custom-element", ManagedCustomElement);
// src/cubing/twisty/views/TwistyViewerWrapper.css.ts
var twistyViewerWrapperCSS = new CSSSource(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.wrapper > * {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.wrapper.back-view-side-by-side {
  grid-template-columns: 1fr 1fr;
}

.wrapper.back-view-top-right {
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 3fr;
}

.wrapper.back-view-top-right > :nth-child(1) {
  grid-row: 1 / 3;
  grid-column: 1 / 3;
}

.wrapper.back-view-top-right > :nth-child(2) {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
}
`);
// src/cubing/twisty/views/2D/Twisty2DPuzzle.css.ts
var twisty2DSVGCSS = new CSSSource(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.svg-wrapper,
twisty-2d-svg,
svg {
  width: 100%;
  height: 100%;
  display: grid;
  min-height: 0;
}

svg {
  animation: fade-in 0.25s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
`);
// src/cubing/twisty/views/2D/KPuzzleSVGWrapper.ts
var xmlns = "http://www.w3.org/2000/svg";
var svgCounter = 0;
function nextSVGID() {
    svgCounter += 1;
    return "svg" + svgCounter.toString();
}
var colorMaps = {
    dim: {
        "white": "#dddddd",
        "orange": "#884400",
        "limegreen": "#008800",
        "red": "#660000",
        "rgb(34, 102, 255)": "#000088",
        "yellow": "#888800"
    },
    oriented: {
        "white": "#44ddcc",
        "orange": "#44ddcc",
        "limegreen": "#44ddcc",
        "red": "#44ddcc",
        "rgb(34, 102, 255)": "#44ddcc",
        "yellow": "#44ddcc"
    },
    ignored: {
        "white": "#444444",
        "orange": "#444444",
        "limegreen": "#444444",
        "red": "#444444",
        "rgb(34, 102, 255)": "#444444",
        "yellow": "#444444"
    },
    invisible: {
        "white": "#00000000",
        "orange": "#00000000",
        "limegreen": "#00000000",
        "red": "#00000000",
        "rgb(34, 102, 255)": "#00000000",
        "yellow": "#00000000"
    }
};
var KPuzzleSVGWrapper = class {
    constructor(kpuzzle, svgSource, experimentalAppearance){
        this.kpuzzle = kpuzzle;
        this.originalColors = {
        };
        this.gradients = {
        };
        if (!svgSource) throw new Error(`No SVG definition for puzzle type: ${kpuzzle.name()}`);
        this.svgID = nextSVGID();
        this.element = document.createElement("div");
        this.element.classList.add("svg-wrapper");
        this.element.innerHTML = svgSource;
        const svgElem = this.element.querySelector("svg");
        if (!svgElem) throw new Error("Could not get SVG element");
        if (xmlns !== svgElem.namespaceURI) throw new Error("Unexpected XML namespace");
        svgElem.style.maxWidth = "100%";
        svgElem.style.maxHeight = "100%";
        this.gradientDefs = document.createElementNS(xmlns, "defs");
        svgElem.insertBefore(this.gradientDefs, svgElem.firstChild);
        for(const orbitName in kpuzzle.definition.orbits){
            const orbitDefinition = kpuzzle.definition.orbits[orbitName];
            for(let idx = 0; idx < orbitDefinition.numPieces; idx++)for(let orientation = 0; orientation < orbitDefinition.numOrientations; orientation++){
                const id = this.elementID(orbitName, idx, orientation);
                const elem = this.elementByID(id);
                let originalColor = elem.style.fill;
                if (experimentalAppearance) (()=>{
                    const a = experimentalAppearance.orbits;
                    if (!a) return;
                    const orbitAppearance = a[orbitName];
                    if (!orbitAppearance) return;
                    const pieceAppearance = orbitAppearance.pieces[idx];
                    if (!pieceAppearance) return;
                    const faceletAppearance = pieceAppearance.facelets[orientation];
                    if (!faceletAppearance) return;
                    const appearance = typeof faceletAppearance === "string" ? faceletAppearance : faceletAppearance?.appearance;
                    const colorMap = colorMaps[appearance];
                    if (colorMap) originalColor = colorMap[originalColor];
                })();
                else originalColor = elem.style.fill;
                this.originalColors[id] = originalColor;
                this.gradients[id] = this.newGradient(id, originalColor);
                this.gradientDefs.appendChild(this.gradients[id]);
                elem.setAttribute("style", `fill: url(#grad-${this.svgID}-${id})`);
            }
        }
    }
    drawState(state, nextState, fraction) {
        this.draw(state, nextState, fraction);
    }
    draw(state, nextState, fraction) {
        const transformation = state.experimentalToTransformation();
        const nextTransformation = nextState?.experimentalToTransformation();
        if (!transformation) throw new Error("Distinguishable pieces are not handled for SVG yet!");
        for(const orbitName in transformation.kpuzzle.definition.orbits){
            const orbitDefinition = transformation.kpuzzle.definition.orbits[orbitName];
            const curTransformationOrbit = transformation.transformationData[orbitName];
            const nextTransformationOrbit = nextTransformation ? nextTransformation.transformationData[orbitName] : null;
            for(let idx = 0; idx < orbitDefinition.numPieces; idx++)for(let orientation = 0; orientation < orbitDefinition.numOrientations; orientation++){
                const id = this.elementID(orbitName, idx, orientation);
                const fromCur = this.elementID(orbitName, curTransformationOrbit.permutation[idx], (orbitDefinition.numOrientations - curTransformationOrbit.orientation[idx] + orientation) % orbitDefinition.numOrientations);
                let singleColor = false;
                if (nextTransformationOrbit) {
                    const fromNext = this.elementID(orbitName, nextTransformationOrbit.permutation[idx], (orbitDefinition.numOrientations - nextTransformationOrbit.orientation[idx] + orientation) % orbitDefinition.numOrientations);
                    if (fromCur === fromNext) singleColor = true;
                    fraction = fraction || 0;
                    const easedBackwardsPercent = 100 * (1 - fraction * fraction * (2 - fraction * fraction));
                    this.gradients[id].children[0].setAttribute("stop-color", this.originalColors[fromCur]);
                    this.gradients[id].children[1].setAttribute("stop-color", this.originalColors[fromCur]);
                    this.gradients[id].children[1].setAttribute("offset", `${Math.max(easedBackwardsPercent - 5, 0)}%`);
                    this.gradients[id].children[2].setAttribute("offset", `${Math.max(easedBackwardsPercent - 5, 0)}%`);
                    this.gradients[id].children[3].setAttribute("offset", `${easedBackwardsPercent}%`);
                    this.gradients[id].children[4].setAttribute("offset", `${easedBackwardsPercent}%`);
                    this.gradients[id].children[4].setAttribute("stop-color", this.originalColors[fromNext]);
                    this.gradients[id].children[5].setAttribute("stop-color", this.originalColors[fromNext]);
                } else singleColor = true;
                if (singleColor) {
                    this.gradients[id].children[0].setAttribute("stop-color", this.originalColors[fromCur]);
                    this.gradients[id].children[1].setAttribute("stop-color", this.originalColors[fromCur]);
                    this.gradients[id].children[1].setAttribute("offset", `100%`);
                    this.gradients[id].children[2].setAttribute("offset", `100%`);
                    this.gradients[id].children[3].setAttribute("offset", `100%`);
                    this.gradients[id].children[4].setAttribute("offset", `100%`);
                }
            }
        }
    }
    newGradient(id, originalColor) {
        const grad = document.createElementNS(xmlns, "radialGradient");
        grad.setAttribute("id", `grad-${this.svgID}-${id}`);
        grad.setAttribute("r", `70.7107%`);
        const stopDefs = [
            {
                offset: 0,
                color: originalColor
            },
            {
                offset: 0,
                color: originalColor
            },
            {
                offset: 0,
                color: "black"
            },
            {
                offset: 0,
                color: "black"
            },
            {
                offset: 0,
                color: originalColor
            },
            {
                offset: 100,
                color: originalColor
            }
        ];
        for (const stopDef of stopDefs){
            const stop = document.createElementNS(xmlns, "stop");
            stop.setAttribute("offset", `${stopDef.offset}%`);
            stop.setAttribute("stop-color", stopDef.color);
            stop.setAttribute("stop-opacity", "1");
            grad.appendChild(stop);
        }
        return grad;
    }
    elementID(orbitName, idx, orientation) {
        return orbitName + "-l" + idx + "-o" + orientation;
    }
    elementByID(id) {
        return this.element.querySelector("#" + id);
    }
};
// src/cubing/twisty/views/2D/Twisty2DPuzzle.ts
var _cachedPosition, _freshListenerManager;
var Twisty2DPuzzle = class extends ManagedCustomElement {
    constructor(model, kpuzzle, svgSource, options, puzzleLoader){
        super();
        this.model = model;
        this.kpuzzle = kpuzzle;
        this.svgSource = svgSource;
        this.options = options;
        this.puzzleLoader = puzzleLoader;
        this.scheduler = new RenderScheduler(this.render.bind(this));
        _chunkWO2AXYFEJs.__privateAdd(this, _cachedPosition, null);
        _chunkWO2AXYFEJs.__privateAdd(this, _freshListenerManager, new _chunkTG5KP5ILJs.FreshListenerManager());
        this.addCSS(twisty2DSVGCSS);
        this.resetSVG();
        _chunkWO2AXYFEJs.__privateGet(this, _freshListenerManager).addListener(this.model.puzzleID, (puzzleID)=>{
            if (puzzleLoader?.id !== puzzleID) this.disconnect();
        });
        _chunkWO2AXYFEJs.__privateGet(this, _freshListenerManager).addListener(this.model.legacyPosition, this.onPositionChange.bind(this));
        if (this.options?.experimentalStickering) this.experimentalSetStickering(this.options.experimentalStickering);
    }
    disconnect() {
        _chunkWO2AXYFEJs.__privateGet(this, _freshListenerManager).disconnect();
    }
    onPositionChange(position) {
        try {
            if (position.movesInProgress.length > 0) {
                const move = position.movesInProgress[0].move;
                let partialMove = move;
                if (position.movesInProgress[0].direction === Direction.Backwards) partialMove = move.invert();
                const newState = position.state.applyMove(partialMove);
                this.svg.draw(position.state, newState, position.movesInProgress[0].fraction);
            } else {
                this.svg.draw(position.state);
                _chunkWO2AXYFEJs.__privateSet(this, _cachedPosition, position);
            }
        } catch (e) {
            console.warn("Bad position (this doesn't necessarily mean something is wrong). Pre-emptively disconnecting:", this.puzzleLoader?.id, e);
            this.disconnect();
        }
    }
    scheduleRender() {
        this.scheduler.requestAnimFrame();
    }
    experimentalSetStickering(stickering) {
        (async ()=>{
            if (!this.puzzleLoader?.appearance) return;
            const appearance = await this.puzzleLoader.appearance(stickering);
            this.resetSVG(appearance);
        })();
    }
    resetSVG(appearance) {
        if (this.svg) this.removeElement(this.svg.element);
        if (!this.kpuzzle) return;
        this.svg = new KPuzzleSVGWrapper(this.kpuzzle, this.svgSource, appearance);
        this.addElement(this.svg.element);
        if (_chunkWO2AXYFEJs.__privateGet(this, _cachedPosition)) this.onPositionChange(_chunkWO2AXYFEJs.__privateGet(this, _cachedPosition));
    }
    render() {
    }
};
_cachedPosition = new WeakMap();
_freshListenerManager = new WeakMap();
customElementsShim.define("twisty-2d-puzzle", Twisty2DPuzzle);
// src/cubing/twisty/views/2D/Twisty2DPuzzleWrapper.ts
var _freshListenerManager2, _cachedTwisty2DPuzzle;
var Twisty2DPuzzleWrapper = class {
    constructor(model, schedulable, puzzleLoader, effectiveVisualization){
        this.model = model;
        this.schedulable = schedulable;
        this.puzzleLoader = puzzleLoader;
        this.effectiveVisualization = effectiveVisualization;
        _chunkWO2AXYFEJs.__privateAdd(this, _freshListenerManager2, new _chunkTG5KP5ILJs.FreshListenerManager());
        _chunkWO2AXYFEJs.__privateAdd(this, _cachedTwisty2DPuzzle, null);
        this.twisty2DPuzzle();
        _chunkWO2AXYFEJs.__privateGet(this, _freshListenerManager2).addListener(this.model.stickering, async (stickering)=>{
            (await this.twisty2DPuzzle()).experimentalSetStickering(stickering);
        });
    }
    disconnect() {
        _chunkWO2AXYFEJs.__privateGet(this, _freshListenerManager2).disconnect();
    }
    scheduleRender() {
    }
    async twisty2DPuzzle() {
        return _chunkWO2AXYFEJs.__privateGet(this, _cachedTwisty2DPuzzle) ?? _chunkWO2AXYFEJs.__privateSet(this, _cachedTwisty2DPuzzle, (async ()=>{
            const svgPromise = this.effectiveVisualization === "experimental-2D-LL" ? this.puzzleLoader.llSVG() : this.puzzleLoader.svg();
            return new Twisty2DPuzzle(this.model, await this.puzzleLoader.kpuzzle(), await svgPromise, {
            }, this.puzzleLoader);
        })());
    }
};
_freshListenerManager2 = new WeakMap();
_cachedTwisty2DPuzzle = new WeakMap();
// src/cubing/twisty/views/2D/Twisty2DSceneWrapper.ts
var _freshListenerManager3, _cachedScene, _currentTwisty2DPuzzleWrapper;
var Twisty2DSceneWrapper = class extends ManagedCustomElement {
    constructor(model, effectiveVisualization){
        super();
        this.model = model;
        this.effectiveVisualization = effectiveVisualization;
        _chunkWO2AXYFEJs.__privateAdd(this, _freshListenerManager3, new _chunkTG5KP5ILJs.FreshListenerManager());
        _chunkWO2AXYFEJs.__privateAdd(this, _cachedScene, void 0);
        _chunkWO2AXYFEJs.__privateAdd(this, _currentTwisty2DPuzzleWrapper, null);
    }
    disconnect() {
        _chunkWO2AXYFEJs.__privateGet(this, _freshListenerManager3).disconnect();
    }
    async connectedCallback() {
        this.addCSS(twistyViewerWrapperCSS);
        if (this.model) _chunkWO2AXYFEJs.__privateGet(this, _freshListenerManager3).addListener(this.model.puzzleLoader, this.onPuzzleLoader.bind(this));
    }
    async scene() {
        return _chunkWO2AXYFEJs.__privateGet(this, _cachedScene) ?? _chunkWO2AXYFEJs.__privateSet(this, _cachedScene, (async ()=>new (await _chunkTG5KP5ILJs.THREEJS).Scene()
        )());
    }
    scheduleRender() {
        _chunkWO2AXYFEJs.__privateGet(this, _currentTwisty2DPuzzleWrapper)?.scheduleRender();
    }
    currentTwisty2DPuzzleWrapper() {
        return _chunkWO2AXYFEJs.__privateGet(this, _currentTwisty2DPuzzleWrapper);
    }
    async setCurrentTwisty2DPuzzleWrapper(twisty2DPuzzleWrapper) {
        const old = _chunkWO2AXYFEJs.__privateGet(this, _currentTwisty2DPuzzleWrapper);
        _chunkWO2AXYFEJs.__privateSet(this, _currentTwisty2DPuzzleWrapper, twisty2DPuzzleWrapper);
        old?.disconnect();
        const twisty2DPuzzlePromise = twisty2DPuzzleWrapper.twisty2DPuzzle();
        this.contentWrapper.textContent = "";
        this.addElement(await twisty2DPuzzlePromise);
    }
    async onPuzzleLoader(puzzleLoader) {
        _chunkWO2AXYFEJs.__privateGet(this, _currentTwisty2DPuzzleWrapper)?.disconnect();
        const twisty2DPuzzleWrapper = new Twisty2DPuzzleWrapper(this.model, this, puzzleLoader, this.effectiveVisualization);
        this.setCurrentTwisty2DPuzzleWrapper(twisty2DPuzzleWrapper);
    }
};
_freshListenerManager3 = new WeakMap();
_cachedScene = new WeakMap();
_currentTwisty2DPuzzleWrapper = new WeakMap();
customElementsShim.define("twisty-2d-scene-wrapper", Twisty2DSceneWrapper);
// src/cubing/twisty/views/ClassListManager.ts
var _currentClassName;
var ClassListManager = class {
    constructor(elem, prefix, validSuffixes){
        this.elem = elem;
        this.prefix = prefix;
        this.validSuffixes = validSuffixes;
        _chunkWO2AXYFEJs.__privateAdd(this, _currentClassName, null);
    }
    clearValue() {
        if (_chunkWO2AXYFEJs.__privateGet(this, _currentClassName)) this.elem.contentWrapper.classList.remove(_chunkWO2AXYFEJs.__privateGet(this, _currentClassName));
        _chunkWO2AXYFEJs.__privateSet(this, _currentClassName, null);
    }
    setValue(suffix) {
        if (!this.validSuffixes.includes(suffix)) throw new Error(`Invalid suffix: ${suffix}`);
        const newClassName = `${this.prefix}${suffix}`;
        const changed = _chunkWO2AXYFEJs.__privateGet(this, _currentClassName) !== newClassName;
        if (changed) {
            this.clearValue();
            this.elem.contentWrapper.classList.add(newClassName);
            _chunkWO2AXYFEJs.__privateSet(this, _currentClassName, newClassName);
        }
        return changed;
    }
};
_currentClassName = new WeakMap();
// src/cubing/twisty/views/3D/Twisty3DPuzzleWrapper.ts
var _freshListenerManager4, _cachedTwisty3DPuzzle;
var Twisty3DPuzzleWrapper = class {
    constructor(model, schedulable, puzzleLoader, visualizationStrategy){
        this.model = model;
        this.schedulable = schedulable;
        this.puzzleLoader = puzzleLoader;
        this.visualizationStrategy = visualizationStrategy;
        _chunkWO2AXYFEJs.__privateAdd(this, _freshListenerManager4, new _chunkTG5KP5ILJs.FreshListenerManager());
        _chunkWO2AXYFEJs.__privateAdd(this, _cachedTwisty3DPuzzle, null);
        this.twisty3DPuzzle();
        _chunkWO2AXYFEJs.__privateGet(this, _freshListenerManager4).addListener(this.model.puzzleLoader, (puzzleLoader2)=>{
            if (this.puzzleLoader.id !== puzzleLoader2.id) this.disconnect();
        });
        _chunkWO2AXYFEJs.__privateGet(this, _freshListenerManager4).addListener(this.model.legacyPosition, async (position)=>{
            try {
                (await this.twisty3DPuzzle()).onPositionChange(position);
                this.scheduleRender();
            } catch (e) {
                this.disconnect();
            }
        });
        _chunkWO2AXYFEJs.__privateGet(this, _freshListenerManager4).addListener(this.model.hintFacelet, async (hintFaceletStyle)=>{
            (await this.twisty3DPuzzle()).experimentalUpdateOptions({
                hintFacelets: hintFaceletStyle === "auto" ? "floating" : hintFaceletStyle
            });
            this.scheduleRender();
        });
        _chunkWO2AXYFEJs.__privateGet(this, _freshListenerManager4).addListener(this.model.foundationDisplay, async (foundationDisplay)=>{
            (await this.twisty3DPuzzle()).experimentalUpdateOptions({
                showFoundation: foundationDisplay !== "none"
            });
            this.scheduleRender();
        });
        _chunkWO2AXYFEJs.__privateGet(this, _freshListenerManager4).addListener(this.model.stickering, async (stickering)=>{
            if ("setStickering" in await this.twisty3DPuzzle()) {
                (await this.twisty3DPuzzle()).setStickering(stickering);
                this.scheduleRender();
            } else {
                if ([
                    "experimental-global-custom-1",
                    "experimental-global-custom-2"
                ].includes(stickering)) {
                    const [twisty3D] = await Promise.all([
                        this.twisty3DPuzzle()
                    ]);
                    twisty3D.experimentalSetAppearance(await _chunkBOKO2BWTJs.cubeAppearance(this.puzzleLoader, stickering));
                    this.scheduleRender();
                    return;
                }
                if ("appearance" in this.puzzleLoader) {
                    const [twisty3D, appearancePromise] = await Promise.all([
                        this.twisty3DPuzzle(),
                        this.puzzleLoader.appearance(stickering ?? "full")
                    ]);
                    twisty3D.experimentalSetAppearance(appearancePromise);
                    this.scheduleRender();
                }
            }
        });
        _chunkWO2AXYFEJs.__privateGet(this, _freshListenerManager4).addMultiListener([
            this.model.foundationStickerSprite,
            this.model.hintStickerSprite
        ], async (inputs)=>{
            if ("experimentalUpdateTexture" in await this.twisty3DPuzzle()) {
                (await this.twisty3DPuzzle()).experimentalUpdateTexture(true, ...inputs);
                this.scheduleRender();
            }
        });
    }
    disconnect() {
        _chunkWO2AXYFEJs.__privateGet(this, _freshListenerManager4).disconnect();
    }
    scheduleRender() {
        this.schedulable.scheduleRender();
    }
    async twisty3DPuzzle() {
        return _chunkWO2AXYFEJs.__privateGet(this, _cachedTwisty3DPuzzle) ?? _chunkWO2AXYFEJs.__privateSet(this, _cachedTwisty3DPuzzle, (async ()=>{
            const proxyPromise = _chunkTG5KP5ILJs.proxy3D();
            if (this.puzzleLoader.id === "3x3x3" && this.visualizationStrategy === "Cube3D") {
                const [foundationSprite, hintSprite, experimentalStickering] = await Promise.all([
                    this.model.foundationStickerSprite.get(),
                    this.model.hintStickerSprite.get(),
                    this.model.stickering.get()
                ]);
                return (await proxyPromise).cube3DShim({
                    foundationSprite,
                    hintSprite,
                    experimentalStickering
                });
            } else {
                const [hintFacelets, foundationSprite, hintSprite] = await Promise.all([
                    this.model.hintFacelet.get(),
                    this.model.foundationStickerSprite.get(),
                    this.model.hintStickerSprite.get()
                ]);
                const pg3d = (await proxyPromise).pg3dShim(this.puzzleLoader, hintFacelets === "auto" ? "floating" : hintFacelets);
                pg3d.then((p)=>p.experimentalUpdateTexture(true, foundationSprite ?? void 0, hintSprite ?? void 0)
                );
                return pg3d;
            }
        })());
    }
    async raycastMove(raycasterPromise, transformations) {
        const puzzle = await this.twisty3DPuzzle();
        if (!("experimentalGetControlTargets" in puzzle)) {
            console.info("not PG3D! skipping raycast");
            return;
        }
        const targets = puzzle.experimentalGetControlTargets();
        const [raycaster] = await Promise.all([
            raycasterPromise
        ]);
        const intersects = raycaster.intersectObjects(targets);
        if (intersects.length > 0) {
            const closestMove = puzzle.getClosestMoveToAxis(intersects[0].point, transformations);
            if (closestMove) this.model.experimentalAddMove(closestMove.move, {
                coalesce: true,
                mod: closestMove.order
            });
            else console.info("Skipping move!");
        }
    }
};
_freshListenerManager4 = new WeakMap();
_cachedTwisty3DPuzzle = new WeakMap();
// src/cubing/vendor/three/examples/jsm/libs/stats.modified.module.ts
var performance2 = globalThis.performance;
var Stats = class {
    constructor(){
        this.mode = 0;
        this.dom = document.createElement("div");
        this.beginTime = (performance2 || Date).now();
        this.prevTime = this.beginTime;
        this.frames = 0;
        this.fpsPanel = this.addPanel(new StatsPanel("FPS", "#0ff", "#002"));
        this.msPanel = this.addPanel(new StatsPanel("MS", "#0f0", "#020"));
        this.memPanel = performance2?.memory ? this.addPanel(new StatsPanel("MB", "#f08", "#201")) : null;
        this.REVISION = 16;
        this.dom.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
        this.dom.addEventListener("click", (event)=>{
            event.preventDefault();
            this.showPanel(++this.mode % this.dom.children.length);
        }, false);
        this.showPanel(0);
    }
    addPanel(panel) {
        this.dom.appendChild(panel.dom);
        return panel;
    }
    showPanel(id) {
        for(let i = 0; i < this.dom.children.length; i++)this.dom.children[i].style.display = i === id ? "block" : "none";
        this.mode = id;
    }
    begin() {
        this.beginTime = (performance2 || Date).now();
    }
    end() {
        this.frames++;
        const time = (performance2 || Date).now();
        this.msPanel.update(time - this.beginTime, 200);
        if (time >= this.prevTime + 1000) {
            this.fpsPanel.update(this.frames * 1000 / (time - this.prevTime), 100);
            this.prevTime = time;
            this.frames = 0;
            if (this.memPanel) {
                const memory = performance2.memory;
                this.memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576);
            }
        }
        return time;
    }
    update() {
        this.beginTime = this.end();
    }
};
var PR = Math.round(globalThis?.window?.devicePixelRatio ?? 1);
var WIDTH = 80 * PR;
var HEIGHT = 48 * PR;
var TEXT_X = 3 * PR;
var TEXT_Y = 2 * PR;
var GRAPH_X = 3 * PR;
var GRAPH_Y = 15 * PR;
var GRAPH_WIDTH = 74 * PR;
var GRAPH_HEIGHT = 30 * PR;
var StatsPanel = class {
    constructor(name, fg, bg){
        this.name = name;
        this.fg = fg;
        this.bg = bg;
        this.min = Infinity;
        this.max = 0;
        this.dom = document.createElement("canvas");
        this.context = this.dom.getContext("2d");
        this.dom.width = WIDTH;
        this.dom.height = HEIGHT;
        this.dom.style.cssText = "width:80px;height:48px";
        this.context.font = `bold ${9 * PR}px Helvetica,Arial,sans-serif`;
        this.context.textBaseline = "top";
        this.context.fillStyle = bg;
        this.context.fillRect(0, 0, WIDTH, HEIGHT);
        this.context.fillStyle = fg;
        this.context.fillText(name, TEXT_X, TEXT_Y);
        this.context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
        this.context.fillStyle = bg;
        this.context.globalAlpha = 0.9;
        this.context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
    }
    update(value, maxValue) {
        this.min = Math.min(this.min, value);
        this.max = Math.max(this.max, value);
        this.context.fillStyle = this.bg;
        this.context.globalAlpha = 1;
        this.context.fillRect(0, 0, WIDTH, GRAPH_Y);
        this.context.fillStyle = this.fg;
        this.context.fillText(Math.round(value) + " " + this.name + " (" + Math.round(this.min) + "-" + Math.round(this.max) + ")", TEXT_X, TEXT_Y);
        this.context.drawImage(this.dom, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT);
        this.context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT);
        this.context.fillStyle = this.bg;
        this.context.globalAlpha = 0.9;
        this.context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, Math.round((1 - value / maxValue) * GRAPH_HEIGHT));
    }
};
// src/cubing/twisty/views/canvas.ts
var globalPixelRatioOverride = null;
function pixelRatio() {
    return globalPixelRatioOverride ?? (devicePixelRatio || 1);
}
// src/cubing/twisty/views/3D/Twisty3DVantage.css.ts
var twisty3DVantageCSS = new CSSSource(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  place-content: center;
}

.loading {
  width: 4em;
  height: 4em;
  border-radius: 2.5em;
  border: 0.5em solid rgba(0, 0, 0, 0);
  border-top: 0.5em solid rgba(0, 0, 0, 0.7);
  border-right: 0.5em solid rgba(0, 0, 0, 0.7);
  animation: fade-in-delayed 4s, rotate 1s linear infinite;
}

@keyframes fade-in-delayed {
  0% { opacity: 0; }
  25% {opacity: 0; }
  100% { opacity: 1; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* TODO: This is due to stats hack. Replace with \`canvas\`. */
.wrapper > canvas {
  max-width: 100%;
  max-height: 100%;
  cursor: grab;
  animation: fade-in 0.25s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.wrapper > canvas:active {
  cursor: grabbing;
}

.wrapper.invisible {
  opacity: 0;
}
`);
// src/cubing/twisty/views/3D/DragTracker.ts
var MOVEMENT_EPSILON = 0.1;
var _dragInfoMap, _lazyListenersRegistered, _registerLazyListeners, registerLazyListeners_fn, _clear, clear_fn, _trackDrag, trackDrag_fn;
var DragTracker = class extends EventTarget {
    constructor(target){
        super();
        this.target = target;
        _chunkWO2AXYFEJs.__privateAdd(this, _registerLazyListeners);
        _chunkWO2AXYFEJs.__privateAdd(this, _clear);
        _chunkWO2AXYFEJs.__privateAdd(this, _trackDrag);
        _chunkWO2AXYFEJs.__privateAdd(this, _dragInfoMap, new Map());
        _chunkWO2AXYFEJs.__privateAdd(this, _lazyListenersRegistered, false);
        target.addEventListener("pointerdown", this.onPointerDown.bind(this));
        this.target.addEventListener("contextmenu", (e)=>{
            e.preventDefault();
        });
        this.target.addEventListener("touchmove", (e)=>e.preventDefault()
        );
        this.target.addEventListener("dblclick", (e)=>e.preventDefault()
        );
    }
    onPointerDown(e) {
        _chunkWO2AXYFEJs.__privateMethod(this, _registerLazyListeners, registerLazyListeners_fn).call(this);
        const newDragInfo = {
            attachedInfo: {
            },
            hasMoved: false,
            lastClientX: e.clientX,
            lastClientY: e.clientY,
            lastTimeStamp: e.timeStamp
        };
        _chunkWO2AXYFEJs.__privateGet(this, _dragInfoMap).set(e.pointerId, newDragInfo);
        this.target.setPointerCapture(e.pointerId);
    }
    onPointerMove(e) {
        const movementInfo = _chunkWO2AXYFEJs.__privateMethod(this, _trackDrag, trackDrag_fn).call(this, e).movementInfo;
        if (movementInfo) {
            e.preventDefault();
            this.dispatchEvent(new CustomEvent("move", {
                detail: movementInfo
            }));
        }
    }
    onPointerUp(e) {
        const trackDragResult = _chunkWO2AXYFEJs.__privateMethod(this, _trackDrag, trackDrag_fn).call(this, e);
        const existing = _chunkWO2AXYFEJs.__privateGet(this, _dragInfoMap).get(e.pointerId);
        _chunkWO2AXYFEJs.__privateMethod(this, _clear, clear_fn).call(this, e);
        this.target.releasePointerCapture(e.pointerId);
        let event;
        if (trackDragResult.hasMoved) event = new CustomEvent("up", {
            detail: {
                attachedInfo: existing.attachedInfo
            }
        });
        else {
            const { altKey , ctrlKey , metaKey , shiftKey  } = e;
            event = new CustomEvent("press", {
                detail: {
                    normalizedX: e.offsetX / this.target.offsetWidth * 2 - 1,
                    normalizedY: 1 - e.offsetY / this.target.offsetHeight * 2,
                    rightClick: !!(e.button & 2),
                    keys: {
                        altKey,
                        ctrlOrMetaKey: ctrlKey || metaKey,
                        shiftKey
                    }
                }
            });
        }
        this.dispatchEvent(event);
    }
};
_dragInfoMap = new WeakMap();
_lazyListenersRegistered = new WeakMap();
_registerLazyListeners = new WeakSet();
registerLazyListeners_fn = function() {
    if (_chunkWO2AXYFEJs.__privateGet(this, _lazyListenersRegistered)) return;
    this.target.addEventListener("pointermove", this.onPointerMove.bind(this));
    this.target.addEventListener("pointerup", this.onPointerUp.bind(this));
    _chunkWO2AXYFEJs.__privateSet(this, _lazyListenersRegistered, true);
};
_clear = new WeakSet();
clear_fn = function(e) {
    _chunkWO2AXYFEJs.__privateGet(this, _dragInfoMap).delete(e.pointerId);
};
_trackDrag = new WeakSet();
trackDrag_fn = function(e) {
    const existing = _chunkWO2AXYFEJs.__privateGet(this, _dragInfoMap).get(e.pointerId);
    if (!existing) return {
        movementInfo: null,
        hasMoved: false
    };
    let movementInfo;
    if ((e.movementX ?? 0) !== 0 || (e.movementY ?? 0) !== 0) movementInfo = {
        attachedInfo: existing.attachedInfo,
        movementX: e.movementX,
        movementY: e.movementY,
        elapsedMs: e.timeStamp - existing.lastTimeStamp
    };
    else movementInfo = {
        attachedInfo: existing.attachedInfo,
        movementX: e.clientX - existing.lastClientX,
        movementY: e.clientY - existing.lastClientY,
        elapsedMs: e.timeStamp - existing.lastTimeStamp
    };
    existing.lastClientX = e.clientX;
    existing.lastClientY = e.clientY;
    existing.lastTimeStamp = e.timeStamp;
    if (Math.abs(movementInfo.movementX) < MOVEMENT_EPSILON && Math.abs(movementInfo.movementY) < MOVEMENT_EPSILON) return {
        movementInfo: null,
        hasMoved: existing.hasMoved
    };
    else {
        existing.hasMoved = true;
        return {
            movementInfo,
            hasMoved: existing.hasMoved
        };
    }
};
// src/cubing/twisty/views/3D/RendererPool.ts
var renderers = [];
async function renderPooled(width, height, canvas, scene, camera) {
    if (width === 0 || height === 0) return;
    if (renderers.length === 0) renderers.push(newRenderer());
    const renderer = await renderers[0];
    renderer.setSize(width, height);
    renderer.render(scene, camera);
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(renderer.domElement, 0, 0);
}
async function newRenderer() {
    const rendererConstructor = (await _chunkTG5KP5ILJs.THREEJS).WebGLRenderer;
    const renderer = new rendererConstructor({
        antialias: true,
        alpha: true
    });
    renderer.setPixelRatio(pixelRatio());
    return renderer;
}
// src/cubing/twisty/views/3D/TwistyOrbitControls.ts
var INERTIA_DEFAULT = true;
var INERTIA_DURATION_MS = 500;
var INERTIA_TIMEOUT_MS = 50;
var VERTICAL_MOVEMENT_BASE_SCALE = 0.75;
function momentumScale(progress) {
    return (Math.exp(1 - progress) - (1 - progress)) / (1 - Math.E) + 1;
}
var Inertia = class {
    constructor(startTimestamp, momentumX, momentumY, callback){
        this.startTimestamp = startTimestamp;
        this.momentumX = momentumX;
        this.momentumY = momentumY;
        this.callback = callback;
        this.scheduler = new RenderScheduler(this.render.bind(this));
        this.scheduler.requestAnimFrame();
        this.lastTimestamp = startTimestamp;
    }
    render(now) {
        const progressBefore = (this.lastTimestamp - this.startTimestamp) / INERTIA_DURATION_MS;
        const progressAfter = Math.min(1, (now - this.startTimestamp) / INERTIA_DURATION_MS);
        if (progressBefore === 0 && progressAfter > INERTIA_TIMEOUT_MS / INERTIA_DURATION_MS) return;
        const delta = momentumScale(progressAfter) - momentumScale(progressBefore);
        this.callback(this.momentumX * delta * 1000, this.momentumY * delta * 1000);
        if (progressAfter < 1) this.scheduler.requestAnimFrame();
        this.lastTimestamp = now;
    }
};
var TwistyOrbitControls = class {
    constructor(model, mirror, canvas, dragTracker){
        this.model = model;
        this.mirror = mirror;
        this.canvas = canvas;
        this.dragTracker = dragTracker;
        this.experimentalInertia = INERTIA_DEFAULT;
        this.onMovementBound = this.onMovement.bind(this);
        this.experimentalHasBeenMoved = false;
        this.dragTracker.addEventListener("move", this.onMove.bind(this));
        this.dragTracker.addEventListener("up", this.onUp.bind(this));
    }
    temperMovement(f) {
        return Math.sign(f) * Math.log(Math.abs(f * 10) + 1) / 6;
    }
    onMove(e) {
        var _a;
        (_a = e.detail).attachedInfo ?? (_a.attachedInfo = {
        });
        const { temperedX , temperedY  } = this.onMovement(e.detail.movementX, e.detail.movementY);
        const attachedInfo = e.detail.attachedInfo;
        attachedInfo.lastTemperedX = temperedX * 10;
        attachedInfo.lastTemperedY = temperedY * 10;
        attachedInfo.timestamp = e.timeStamp;
    }
    onMovement(movementX, movementY) {
        const scale = this.mirror ? -1 : 1;
        const minDim = Math.min(this.canvas.offsetWidth, this.canvas.offsetHeight);
        const temperedX = this.temperMovement(movementX / minDim);
        const temperedY = this.temperMovement(movementY / minDim * VERTICAL_MOVEMENT_BASE_SCALE);
        this.model.orbitCoordinatesRequest.set((async ()=>{
            const prevCoords = await this.model.orbitCoordinates.get();
            const newCoords = {
                latitude: prevCoords.latitude + 2 * temperedY * _chunkTG5KP5ILJs.DEGREES_PER_RADIAN * scale,
                longitude: prevCoords.longitude - 2 * temperedX * _chunkTG5KP5ILJs.DEGREES_PER_RADIAN
            };
            return newCoords;
        })());
        return {
            temperedX,
            temperedY
        };
    }
    onUp(e) {
        e.preventDefault();
        if ("lastTemperedX" in e.detail.attachedInfo && "lastTemperedY" in e.detail.attachedInfo && "timestamp" in e.detail.attachedInfo && e.timeStamp - e.detail.attachedInfo.timestamp < 60) new Inertia(e.timeStamp, e.detail.attachedInfo.lastTemperedX, e.detail.attachedInfo.lastTemperedY, this.onMovementBound);
    }
};
// src/cubing/twisty/views/3D/Twisty3DVantage.ts
var SHOW_STATS = false;
function debugShowRenderStats(enable) {
    SHOW_STATS = enable;
}
async function setCameraFromOrbitCoordinates(camera, orbitCoordinates, backView = false) {
    const spherical = new (await _chunkTG5KP5ILJs.THREEJS).Spherical(orbitCoordinates.distance, (90 - (backView ? -1 : 1) * orbitCoordinates.latitude) / _chunkTG5KP5ILJs.DEGREES_PER_RADIAN, ((backView ? 180 : 0) + orbitCoordinates.longitude) / _chunkTG5KP5ILJs.DEGREES_PER_RADIAN);
    spherical.makeSafe();
    camera.position.setFromSpherical(spherical);
    camera.lookAt(0, 0, 0);
}
var shareAllNewRenderers = null;
function experimentalForceNewRendererSharing(share) {
    shareAllNewRenderers = share;
}
var dedicatedRenderersSoFar = 0;
var DEFAULT_MAX_DEDICATED_RENDERERS = 2;
function shareRenderer() {
    if (shareAllNewRenderers !== null) {
        if (!shareAllNewRenderers) dedicatedRenderersSoFar++;
        return shareAllNewRenderers;
    }
    if (dedicatedRenderersSoFar < DEFAULT_MAX_DEDICATED_RENDERERS) {
        dedicatedRenderersSoFar++;
        return false;
    } else return true;
}
var _setupBasicPresses, setupBasicPresses_fn, _onResizeStaleDropper, _width, _height, _onResize, onResize_fn, _cachedRenderer, _cachedCanvas, _cachedDragTracker, _dragTracker, dragTracker_fn, _cachedCamera, _cachedOrbitControls, _disconnectionFunctions, _scheduler;
var Twisty3DVantage = class extends ManagedCustomElement {
    constructor(model, scene, options){
        super();
        this.model = model;
        this.options = options;
        _chunkWO2AXYFEJs.__privateAdd(this, _setupBasicPresses);
        _chunkWO2AXYFEJs.__privateAdd(this, _onResize);
        _chunkWO2AXYFEJs.__privateAdd(this, _dragTracker);
        this.scene = null;
        this.stats = null;
        this.rendererIsShared = shareRenderer();
        this.loadingElement = null;
        _chunkWO2AXYFEJs.__privateAdd(this, _onResizeStaleDropper, new _chunkTG5KP5ILJs.StaleDropper());
        _chunkWO2AXYFEJs.__privateAdd(this, _width, 0);
        _chunkWO2AXYFEJs.__privateAdd(this, _height, 0);
        _chunkWO2AXYFEJs.__privateAdd(this, _cachedRenderer, null);
        _chunkWO2AXYFEJs.__privateAdd(this, _cachedCanvas, null);
        _chunkWO2AXYFEJs.__privateAdd(this, _cachedDragTracker, null);
        _chunkWO2AXYFEJs.__privateAdd(this, _cachedCamera, null);
        _chunkWO2AXYFEJs.__privateAdd(this, _cachedOrbitControls, null);
        _chunkWO2AXYFEJs.__privateAdd(this, _disconnectionFunctions, []);
        _chunkWO2AXYFEJs.__privateAdd(this, _scheduler, new RenderScheduler(this.render.bind(this)));
        this.scene = scene ?? null;
        this.loadingElement = this.addElement(document.createElement("div"));
        this.loadingElement.classList.add("loading");
        if (SHOW_STATS) {
            this.stats = new Stats();
            this.stats.dom.style.position = "absolute";
            this.contentWrapper.appendChild(this.stats.dom);
        }
    }
    async connectedCallback() {
        this.addCSS(twisty3DVantageCSS);
        this.addElement((await this.canvasInfo()).canvas);
        _chunkWO2AXYFEJs.__privateMethod(this, _onResize, onResize_fn).call(this);
        const observer = new ResizeObserver(_chunkWO2AXYFEJs.__privateMethod(this, _onResize, onResize_fn).bind(this));
        observer.observe(this.contentWrapper);
        this.orbitControls();
        _chunkWO2AXYFEJs.__privateMethod(this, _setupBasicPresses, setupBasicPresses_fn).call(this);
        this.scheduleRender();
    }
    async clearCanvas() {
        if (this.rendererIsShared) {
            const canvasInfo = await this.canvasInfo();
            canvasInfo.context.clearRect(0, 0, canvasInfo.canvas.width, canvasInfo.canvas.height);
        } else {
            const renderer = await this.renderer();
            const context = renderer.getContext();
            context.clear(context.COLOR_BUFFER_BIT);
        }
    }
    async renderer() {
        if (this.rendererIsShared) throw new Error("renderer expected to be shared.");
        return _chunkWO2AXYFEJs.__privateGet(this, _cachedRenderer) ?? _chunkWO2AXYFEJs.__privateSet(this, _cachedRenderer, newRenderer());
    }
    async canvasInfo() {
        return _chunkWO2AXYFEJs.__privateGet(this, _cachedCanvas) ?? _chunkWO2AXYFEJs.__privateSet(this, _cachedCanvas, (async ()=>{
            let canvas;
            if (this.rendererIsShared) canvas = this.addElement(document.createElement("canvas"));
            else {
                const renderer = await this.renderer();
                canvas = this.addElement(renderer.domElement);
            }
            this.loadingElement?.remove();
            const context = canvas.getContext("2d");
            return {
                canvas,
                context
            };
        })());
    }
    async camera() {
        return _chunkWO2AXYFEJs.__privateGet(this, _cachedCamera) ?? _chunkWO2AXYFEJs.__privateSet(this, _cachedCamera, (async ()=>{
            const camera = new (await _chunkTG5KP5ILJs.THREEJS).PerspectiveCamera(20, 1, 0.1, 20);
            camera.position.copy(new (await _chunkTG5KP5ILJs.THREEJS).Vector3(2, 4, 4).multiplyScalar(this.options?.backView ? -1 : 1));
            camera.lookAt(0, 0, 0);
            return camera;
        })());
    }
    async orbitControls() {
        return _chunkWO2AXYFEJs.__privateGet(this, _cachedOrbitControls) ?? _chunkWO2AXYFEJs.__privateSet(this, _cachedOrbitControls, (async ()=>{
            const orbitControls = new TwistyOrbitControls(this.model, !!this.options?.backView, (await this.canvasInfo()).canvas, await _chunkWO2AXYFEJs.__privateMethod(this, _dragTracker, dragTracker_fn).call(this));
            if (this.model) this.addListener(this.model.orbitCoordinates, async (orbitCoordinates)=>{
                const camera = await this.camera();
                setCameraFromOrbitCoordinates(camera, orbitCoordinates, this.options?.backView);
                this.scheduleRender();
            });
            return orbitControls;
        })());
    }
    addListener(prop, listener) {
        prop.addFreshListener(listener);
        _chunkWO2AXYFEJs.__privateGet(this, _disconnectionFunctions).push(()=>{
            prop.removeFreshListener(listener);
        });
    }
    disconnect() {
        for (const fn of _chunkWO2AXYFEJs.__privateGet(this, _disconnectionFunctions))fn();
        _chunkWO2AXYFEJs.__privateSet(this, _disconnectionFunctions, []);
    }
    async render() {
        if (!this.scene) throw new Error("Attempted to render without a scene");
        this.stats?.begin();
        const [scene, camera, canvas] = await Promise.all([
            this.scene.scene(),
            this.camera(),
            this.canvasInfo()
        ]);
        if (this.rendererIsShared) renderPooled(_chunkWO2AXYFEJs.__privateGet(this, _width), _chunkWO2AXYFEJs.__privateGet(this, _height), canvas.canvas, scene, camera);
        else (await this.renderer()).render(scene, camera);
        this.stats?.end();
    }
    scheduleRender() {
        _chunkWO2AXYFEJs.__privateGet(this, _scheduler).requestAnimFrame();
    }
};
_setupBasicPresses = new WeakSet();
setupBasicPresses_fn = async function() {
    const dragTracker = await _chunkWO2AXYFEJs.__privateMethod(this, _dragTracker, dragTracker_fn).call(this);
    dragTracker.addEventListener("press", async (e)=>{
        const movePressInput = await this.model.movePressInput.get();
        if (movePressInput !== "basic") return;
        this.dispatchEvent(new CustomEvent("press", {
            detail: {
                pressInfo: e.detail,
                cameraPromise: this.camera()
            }
        }));
    });
};
_onResizeStaleDropper = new WeakMap();
_width = new WeakMap();
_height = new WeakMap();
_onResize = new WeakSet();
onResize_fn = async function() {
    const camera = await _chunkWO2AXYFEJs.__privateGet(this, _onResizeStaleDropper).queue(this.camera());
    const w = this.contentWrapper.clientWidth;
    const h = this.contentWrapper.clientHeight;
    _chunkWO2AXYFEJs.__privateSet(this, _width, w);
    _chunkWO2AXYFEJs.__privateSet(this, _height, h);
    const off = 0;
    let yoff = 0;
    let excess = 0;
    if (h > w) {
        excess = h - w;
        yoff = -Math.floor(0.5 * excess);
    }
    camera.aspect = w / h;
    camera.setViewOffset(w, h - excess, off, yoff, w, h);
    camera.updateProjectionMatrix();
    this.clearCanvas();
    if (this.rendererIsShared) {
        const canvasInfo = await this.canvasInfo();
        canvasInfo.canvas.width = w * pixelRatio();
        canvasInfo.canvas.height = h * pixelRatio();
        canvasInfo.canvas.style.width = w.toString();
        canvasInfo.canvas.style.height = w.toString();
    } else {
        const renderer = await this.renderer();
        renderer.setSize(w, h, true);
    }
    this.scheduleRender();
};
_cachedRenderer = new WeakMap();
_cachedCanvas = new WeakMap();
_cachedDragTracker = new WeakMap();
_dragTracker = new WeakSet();
dragTracker_fn = async function() {
    return _chunkWO2AXYFEJs.__privateGet(this, _cachedDragTracker) ?? _chunkWO2AXYFEJs.__privateSet(this, _cachedDragTracker, (async ()=>{
        return new DragTracker((await this.canvasInfo()).canvas);
    })());
};
_cachedCamera = new WeakMap();
_cachedOrbitControls = new WeakMap();
_disconnectionFunctions = new WeakMap();
_scheduler = new WeakMap();
customElementsShim.define("twisty-3d-vantage", Twisty3DVantage);
// src/cubing/twisty/views/3D/Twisty3DSceneWrapper.ts
var _backViewClassListManager, _freshListenerManager5, _backViewVantage, _cachedScene2, _vantages, _currentTwisty3DPuzzleWrapper, _twisty3DStaleDropper;
var Twisty3DSceneWrapper = class extends ManagedCustomElement {
    constructor(model){
        super();
        this.model = model;
        _chunkWO2AXYFEJs.__privateAdd(this, _backViewClassListManager, new ClassListManager(this, "back-view-", [
            "auto",
            "none",
            "side-by-side",
            "top-right"
        ]));
        _chunkWO2AXYFEJs.__privateAdd(this, _freshListenerManager5, new _chunkTG5KP5ILJs.FreshListenerManager());
        _chunkWO2AXYFEJs.__privateAdd(this, _backViewVantage, null);
        _chunkWO2AXYFEJs.__privateAdd(this, _cachedScene2, void 0);
        _chunkWO2AXYFEJs.__privateAdd(this, _vantages, new Set());
        _chunkWO2AXYFEJs.__privateAdd(this, _currentTwisty3DPuzzleWrapper, null);
        _chunkWO2AXYFEJs.__privateAdd(this, _twisty3DStaleDropper, new _chunkTG5KP5ILJs.StaleDropper());
    }
    disconnect() {
        _chunkWO2AXYFEJs.__privateGet(this, _freshListenerManager5).disconnect();
    }
    async connectedCallback() {
        this.addCSS(twistyViewerWrapperCSS);
        const vantage = new Twisty3DVantage(this.model, this);
        this.addVantage(vantage);
        if (this.model) {
            _chunkWO2AXYFEJs.__privateGet(this, _freshListenerManager5).addMultiListener([
                this.model.puzzleLoader,
                this.model.visualizationStrategy
            ], this.onPuzzle.bind(this));
            _chunkWO2AXYFEJs.__privateGet(this, _freshListenerManager5).addListener(this.model.backView, this.onBackView.bind(this));
        }
        this.scheduleRender();
    }
    setBackView(backView) {
        const shouldHaveBackView = [
            "side-by-side",
            "top-right"
        ].includes(backView);
        const hasBackView = _chunkWO2AXYFEJs.__privateGet(this, _backViewVantage) !== null;
        _chunkWO2AXYFEJs.__privateGet(this, _backViewClassListManager).setValue(backView);
        if (shouldHaveBackView) {
            if (!hasBackView) {
                _chunkWO2AXYFEJs.__privateSet(this, _backViewVantage, new Twisty3DVantage(this.model, this, {
                    backView: true
                }));
                this.addVantage(_chunkWO2AXYFEJs.__privateGet(this, _backViewVantage));
                this.scheduleRender();
            }
        } else if (_chunkWO2AXYFEJs.__privateGet(this, _backViewVantage)) {
            this.removeVantage(_chunkWO2AXYFEJs.__privateGet(this, _backViewVantage));
            _chunkWO2AXYFEJs.__privateSet(this, _backViewVantage, null);
        }
    }
    onBackView(backView) {
        this.setBackView(backView);
    }
    async onPress(e) {
        const twisty3DPuzzleWrapper = _chunkWO2AXYFEJs.__privateGet(this, _currentTwisty3DPuzzleWrapper);
        if (!twisty3DPuzzleWrapper) {
            console.info("no wrapper; skipping scene wrapper press!");
            return;
        }
        const raycasterPromise = (async ()=>{
            const [camera, three] = await Promise.all([
                e.detail.cameraPromise,
                _chunkTG5KP5ILJs.THREEJS
            ]);
            const raycaster = new three.Raycaster();
            const mouse = new (await _chunkTG5KP5ILJs.THREEJS).Vector2(e.detail.pressInfo.normalizedX, e.detail.pressInfo.normalizedY);
            raycaster.setFromCamera(mouse, camera);
            return raycaster;
        })();
        twisty3DPuzzleWrapper.raycastMove(raycasterPromise, {
            invert: !e.detail.pressInfo.rightClick,
            depth: e.detail.pressInfo.keys.ctrlOrMetaKey ? "rotation" : e.detail.pressInfo.keys.shiftKey ? "secondSlice" : "none"
        });
    }
    async scene() {
        return _chunkWO2AXYFEJs.__privateGet(this, _cachedScene2) ?? _chunkWO2AXYFEJs.__privateSet(this, _cachedScene2, (async ()=>new (await _chunkTG5KP5ILJs.THREEJS).Scene()
        )());
    }
    addVantage(vantage) {
        vantage.addEventListener("press", this.onPress.bind(this));
        _chunkWO2AXYFEJs.__privateGet(this, _vantages).add(vantage);
        this.contentWrapper.appendChild(vantage);
    }
    removeVantage(vantage) {
        _chunkWO2AXYFEJs.__privateGet(this, _vantages).delete(vantage);
        vantage.remove();
        vantage.disconnect();
        _chunkWO2AXYFEJs.__privateGet(this, _currentTwisty3DPuzzleWrapper)?.disconnect();
    }
    experimentalVantages() {
        return _chunkWO2AXYFEJs.__privateGet(this, _vantages).values();
    }
    scheduleRender() {
        for (const vantage of _chunkWO2AXYFEJs.__privateGet(this, _vantages))vantage.scheduleRender();
    }
    async setCurrentTwisty3DPuzzleWrapper(scene, twisty3DPuzzleWrapper) {
        const old = _chunkWO2AXYFEJs.__privateGet(this, _currentTwisty3DPuzzleWrapper);
        try {
            _chunkWO2AXYFEJs.__privateSet(this, _currentTwisty3DPuzzleWrapper, twisty3DPuzzleWrapper);
            old?.disconnect();
            scene.add(await twisty3DPuzzleWrapper.twisty3DPuzzle());
        } finally{
            if (old) scene.remove(await old.twisty3DPuzzle());
        }
    }
    async onPuzzle(inputs) {
        if (inputs[1] === "2D") return;
        _chunkWO2AXYFEJs.__privateGet(this, _currentTwisty3DPuzzleWrapper)?.disconnect();
        const [scene, twisty3DPuzzleWrapper] = await _chunkWO2AXYFEJs.__privateGet(this, _twisty3DStaleDropper).queue(Promise.all([
            this.scene(),
            new Twisty3DPuzzleWrapper(this.model, this, inputs[0], inputs[1])
        ]));
        this.setCurrentTwisty3DPuzzleWrapper(scene, twisty3DPuzzleWrapper);
    }
};
_backViewClassListManager = new WeakMap();
_freshListenerManager5 = new WeakMap();
_backViewVantage = new WeakMap();
_cachedScene2 = new WeakMap();
_vantages = new WeakMap();
_currentTwisty3DPuzzleWrapper = new WeakMap();
_twisty3DStaleDropper = new WeakMap();
customElementsShim.define("twisty-3d-scene-wrapper", Twisty3DSceneWrapper);
// src/cubing/twisty/views/control-panel/TwistyButtons.css.ts
var buttonGridCSS = new CSSSource(`
:host {
  width: 384px;
  height: 24px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.wrapper {
  grid-auto-flow: column;
}

.viewer-link-none .twizzle-link-button {
  display: none;
}

.wrapper twisty-button,
.wrapper twisty-control-button {
  width: inherit;
  height: inherit;
}
`);
var buttonCSS = new CSSSource(`
:host:not([hidden]) {
  display: grid;
}

:host {
  width: 48px;
  height: 24px;
}

.wrapper {
  width: 100%;
  height: 100%;
}

button {
  width: 100%;
  height: 100%;
  border: none;
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  background-color: rgba(196, 196, 196, 0.75);
}

button:enabled {
  background-color: rgba(196, 196, 196, 0.75)
}

button:disabled {
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0.25;
  pointer-events: none;
}

button:enabled:hover {
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

/* TODO: fullscreen icons have too much padding?? */
.svg-skip-to-start button,
button.svg-skip-to-start {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjQzIDEwMzdxMTktMTkgMzItMTN0MTMgMzJ2MTQ3MnEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djcxMHEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djY3OHEwIDI2LTE5IDQ1dC00NSAxOUg5NjBxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWgxMjhxMjYgMCA0NSAxOXQxOSA0NXY2NzhxNC0xMSAxMy0xOWw3MTAtNzEwcTE5LTE5IDMyLTEzdDEzIDMydjcxMHE0LTExIDEzLTE5eiIvPjwvc3ZnPg==");
}

.svg-skip-to-end button,
button.svg-skip-to-end {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik05NDEgMjU0N3EtMTkgMTktMzIgMTN0LTEzLTMyVjEwNTZxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTggOCAxMyAxOXYtNzEwcTAtMjYgMTMtMzJ0MzIgMTNsNzEwIDcxMHE4IDggMTMgMTl2LTY3OHEwLTI2IDE5LTQ1dDQ1LTE5aDEyOHEyNiAwIDQ1IDE5dDE5IDQ1djE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTEyOHEtMjYgMC00NS0xOXQtMTktNDV2LTY3OHEtNSAxMC0xMyAxOWwtNzEwIDcxMHEtMTkgMTktMzIgMTN0LTEzLTMydi03MTBxLTUgMTAtMTMgMTl6Ii8+PC9zdmc+");
}

.svg-step-forward button,
button.svg-step-forward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDE1NjhxMCAyNi0xOSA0NWwtNTEyIDUxMnEtMTkgMTktNDUgMTl0LTQ1LTE5cS0xOS0xOS0xOS00NXYtMjU2aC0yMjRxLTk4IDAtMTc1LjUgNnQtMTU0IDIxLjVxLTc2LjUgMTUuNS0xMzMgNDIuNXQtMTA1LjUgNjkuNXEtNDkgNDIuNS04MCAxMDF0LTQ4LjUgMTM4LjVxLTE3LjUgODAtMTcuNSAxODEgMCA1NSA1IDEyMyAwIDYgMi41IDIzLjV0Mi41IDI2LjVxMCAxNS04LjUgMjV0LTIzLjUgMTBxLTE2IDAtMjgtMTctNy05LTEzLTIydC0xMy41LTMwcS03LjUtMTctMTAuNS0yNC0xMjctMjg1LTEyNy00NTEgMC0xOTkgNTMtMzMzIDE2Mi00MDMgODc1LTQwM2gyMjR2LTI1NnEwLTI2IDE5LTQ1dDQ1LTE5cTI2IDAgNDUgMTlsNTEyIDUxMnExOSAxOSAxOSA0NXoiLz48L3N2Zz4=");
}

.svg-step-backward button,
button.svg-step-backward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDIwNDhxMCAxNjYtMTI3IDQ1MS0zIDctMTAuNSAyNHQtMTMuNSAzMHEtNiAxMy0xMyAyMi0xMiAxNy0yOCAxNy0xNSAwLTIzLjUtMTB0LTguNS0yNXEwLTkgMi41LTI2LjV0Mi41LTIzLjVxNS02OCA1LTEyMyAwLTEwMS0xNy41LTE4MXQtNDguNS0xMzguNXEtMzEtNTguNS04MC0xMDF0LTEwNS41LTY5LjVxLTU2LjUtMjctMTMzLTQyLjV0LTE1NC0yMS41cS03Ny41LTYtMTc1LjUtNmgtMjI0djI1NnEwIDI2LTE5IDQ1dC00NSAxOXEtMjYgMC00NS0xOWwtNTEyLTUxMnEtMTktMTktMTktNDV0MTktNDVsNTEyLTUxMnExOS0xOSA0NS0xOXQ0NSAxOXExOSAxOSAxOSA0NXYyNTZoMjI0cTcxMyAwIDg3NSA0MDMgNTMgMTM0IDUzIDMzM3oiLz48L3N2Zz4=");
}

.svg-pause button,
button.svg-pause {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNTYwIDEwODh2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NVYxMDg4cTAtMjYgMTktNDV0NDUtMTloNTEycTI2IDAgNDUgMTl0MTkgNDV6bS04OTYgMHYxNDA4cTAgMjYtMTkgNDV0LTQ1IDE5aC01MTJxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXoiLz48L3N2Zz4=");
}

.svg-play button,
button.svg-play {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNDcyLjUgMTgyM2wtMTMyOCA3MzhxLTIzIDEzLTM5LjUgM3QtMTYuNS0zNlYxMDU2cTAtMjYgMTYuNS0zNnQzOS41IDNsMTMyOCA3MzhxMjMgMTMgMjMgMzF0LTIzIDMxeiIvPjwvc3ZnPg==");
}

.svg-enter-fullscreen button,
button.svg-enter-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkgMTZIN3Y1aDV2LTJIOXYtM3ptLTItNGgyVjloM1Y3SDd2NXptMTIgN2gtM3YyaDV2LTVoLTJ2M3pNMTYgN3YyaDN2M2gyVjdoLTV6Ii8+PC9zdmc+");
}

.svg-exit-fullscreen button,
button.svg-exit-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTcgMThoM3YzaDJ2LTVIN3Yyem0zLThIN3YyaDVWN2gtMnYzem02IDExaDJ2LTNoM3YtMmgtNXY1em0yLTExVjdoLTJ2NWg1di0yaC0zeiIvPjwvc3ZnPg==");
}

.svg-twizzle-tw button,
button.svg-twizzle-tw {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODY0IiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzk3LjU4MSAxNTEuMTh2NTcuMDg0aC04OS43MDN2MjQwLjM1MmgtNjYuOTU1VjIwOC4yNjRIMTUxLjIydi01Ny4wODNoMjQ2LjM2MXptNTQuMzEgNzEuNjc3bDcuNTEyIDMzLjY5MmMyLjcxOCAxMi4xNiA1LjU4IDI0LjY4IDguNTg0IDM3LjU1NWEyMTgwLjc3NSAyMTgwLjc3NSAwIDAwOS40NDIgMzguODQzIDEyNjYuMyAxMjY2LjMgMCAwMDEwLjA4NiAzNy41NTVjMy43Mi0xMi41OSA3LjM2OC0yNS40NjYgMTAuOTQ1LTM4LjYyOCAzLjU3Ni0xMy4xNjIgNy4wMS0yNi4xMSAxMC4zLTM4Ljg0M2w1Ljc2OS0yMi40NTZjMS4yNDgtNC44ODcgMi40NzItOS43MDUgMy42NzQtMTQuNDU1IDMuMDA0LTExLjg3NSA1LjY1MS0yMi45NjIgNy45NC0zMy4yNjNoNDYuMzU0bDIuMzg0IDEwLjU2M2EyMDAwLjc3IDIwMDAuNzcgMCAwMDMuOTM1IDE2LjgyOGw2LjcxMSAyNy43MWMxLjIxMyA0Ljk1NiAyLjQ1IDkuOTggMy43MDkgMTUuMDczYTMxMTkuNzc3IDMxMTkuNzc3IDAgMDA5Ljg3MSAzOC44NDMgMTI0OS4yMjcgMTI0OS4yMjcgMCAwMDEwLjczIDM4LjYyOCAxOTA3LjYwNSAxOTA3LjYwNSAwIDAwMTAuMzAxLTM3LjU1NSAxMzk3Ljk0IDEzOTcuOTQgMCAwMDkuNjU3LTM4Ljg0M2w0LjQtMTkuMDQ2Yy43MTUtMy4xMyAxLjQyMS02LjIzNiAyLjExOC05LjMyMWw5LjU3Ny00Mi44OGg2Ni41MjZhMjk4OC43MTggMjk4OC43MTggMCAwMS0xOS41MjkgNjYuMzExbC01LjcyOCAxOC40ODJhMzIzNy40NiAzMjM3LjQ2IDAgMDEtMTQuMDE1IDQzLjc1MmMtNi40MzggMTkuNi0xMi43MzMgMzcuNjk4LTE4Ljg4NSA1NC4yOTRsLTMuMzA2IDguODI1Yy00Ljg4NCAxMi44OTgtOS40MzMgMjQuMjYzLTEzLjY0NyAzNC4wOTVoLTQ5Ljc4N2E4NDE3LjI4OSA4NDE3LjI4OSAwIDAxLTIxLjAzMS02NC44MDkgMTI4OC42ODYgMTI4OC42ODYgMCAwMS0xOC44ODUtNjQuODEgMTk3Mi40NDQgMTk3Mi40NDQgMCAwMS0xOC4yNCA2NC44MSAyNTc5LjQxMiAyNTc5LjQxMiAwIDAxLTIwLjM4OCA2NC44MWgtNDkuNzg3Yy00LjY4Mi0xMC45MjYtOS43Mi0yMy43NDMtMTUuMTEtMzguNDUxbC0xLjYyOS00LjQ3Yy01LjI1OC0xNC41MjEtMTAuNjgtMzAuMTkyLTE2LjI2Ni00Ny4wMTRsLTIuNDA0LTcuMjhjLTYuNDM4LTE5LjYtMTMuMDItNDAuMzQ0LTE5Ljc0My02Mi4yMzRhMjk4OC43MDcgMjk4OC43MDcgMCAwMS0xOS41MjktNjYuMzExaDY3LjM4NXoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==");
}
`);
// src/cubing/twisty/views/document.ts
var globalSafeDocument = typeof document === "undefined" ? null : document;
// src/cubing/twisty/views/control-panel/webkit-fullscreen.ts
var fullscreenEnabled = globalSafeDocument?.fullscreenEnabled || !!globalSafeDocument?.webkitFullscreenEnabled;
function documentExitFullscreen() {
    if (document.exitFullscreen) return document.exitFullscreen();
    else return document.webkitExitFullscreen();
}
function documentFullscreenElement() {
    if (document.fullscreenElement) return document.fullscreenElement;
    else return document.webkitFullscreenElement ?? null;
}
function requestFullscreen(element) {
    if (element.requestFullscreen) return element.requestFullscreen();
    else return element.webkitRequestFullscreen();
}
// src/cubing/twisty/model/props/viewer/ButtonAppearanceProp.ts
var buttonIcons = [
    "skip-to-start",
    "skip-to-end",
    "step-forward",
    "step-backward",
    "pause",
    "play",
    "enter-fullscreen",
    "exit-fullscreen",
    "twizzle-tw"
];
var ButtonAppearanceProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    derive(inputs) {
        const buttonAppearances = {
            "fullscreen": {
                enabled: fullscreenEnabled,
                icon: document.fullscreenElement === null ? "enter-fullscreen" : "exit-fullscreen",
                title: "Enter fullscreen"
            },
            "jump-to-start": {
                enabled: !inputs.coarseTimelineInfo.atStart,
                icon: "skip-to-start",
                title: "Restart"
            },
            "play-step-backwards": {
                enabled: !inputs.coarseTimelineInfo.atStart,
                icon: "step-backward",
                title: "Step backward"
            },
            "play-pause": {
                enabled: !(inputs.coarseTimelineInfo.atStart && inputs.coarseTimelineInfo.atEnd),
                icon: inputs.coarseTimelineInfo.playing ? "pause" : "play",
                title: inputs.coarseTimelineInfo.playing ? "Pause" : "Play"
            },
            "play-step": {
                enabled: !inputs.coarseTimelineInfo.atEnd,
                icon: "step-forward",
                title: "Step forward"
            },
            "jump-to-end": {
                enabled: !inputs.coarseTimelineInfo.atEnd,
                icon: "skip-to-end",
                title: "Skip to End"
            },
            "twizzle-link": {
                enabled: true,
                icon: "twizzle-tw",
                title: "View at Twizzle",
                hidden: inputs.viewerLink === "none"
            }
        };
        return buttonAppearances;
    }
};
// src/cubing/twisty/views/control-panel/TwistyButtons.ts
var buttonCommands = {
    "fullscreen": true,
    "jump-to-start": true,
    "play-step-backwards": true,
    "play-pause": true,
    "play-step": true,
    "jump-to-end": true,
    "twizzle-link": true
};
var _onCommand, onCommand_fn;
var TwistyButtons = class extends ManagedCustomElement {
    constructor(model, controller, fullscreenElement){
        super();
        this.model = model;
        this.controller = controller;
        this.fullscreenElement = fullscreenElement;
        _chunkWO2AXYFEJs.__privateAdd(this, _onCommand);
        this.buttons = null;
    }
    connectedCallback() {
        this.addCSS(buttonGridCSS);
        const buttons = {
        };
        for(const command in buttonCommands){
            const button = new TwistyButton();
            buttons[command] = button;
            button.addEventListener("click", ()=>_chunkWO2AXYFEJs.__privateMethod(this, _onCommand, onCommand_fn).call(this, command)
            );
            this.addElement(button);
        }
        this.buttons = buttons;
        this.model?.buttonAppearance.addFreshListener(this.update.bind(this));
    }
    async onFullscreenButton() {
        if (!this.fullscreenElement) throw new Error("Attempted to go fullscreen without an element.");
        if (documentFullscreenElement() === this.fullscreenElement) documentExitFullscreen();
        else {
            this.buttons?.fullscreen.setIcon("exit-fullscreen");
            requestFullscreen(this.fullscreenElement);
            const onFullscreen = ()=>{
                if (documentFullscreenElement() !== this.fullscreenElement) {
                    this.buttons?.fullscreen.setIcon("enter-fullscreen");
                    window.removeEventListener("fullscreenchange", onFullscreen);
                }
            };
            window.addEventListener("fullscreenchange", onFullscreen);
        }
    }
    async update(buttonAppearances) {
        for(const command in buttonCommands){
            const button = this.buttons[command];
            const info = buttonAppearances[command];
            button.button.disabled = !info.enabled;
            button.button.title = info.title;
            button.setIcon(info.icon);
            button.hidden = !!info.hidden;
        }
    }
};
_onCommand = new WeakSet();
onCommand_fn = function(command) {
    switch(command){
        case "fullscreen":
            this.onFullscreenButton();
            break;
        case "jump-to-start":
            this.controller?.jumpToStart({
                flash: true
            });
            break;
        case "play-step-backwards":
            this.controller?.animationController.play({
                direction: Direction.Backwards,
                untilBoundary: BoundaryType.Move
            });
            break;
        case "play-pause":
            this.controller?.togglePlay();
            break;
        case "play-step":
            this.controller?.animationController.play({
                direction: Direction.Forwards,
                untilBoundary: BoundaryType.Move
            });
            break;
        case "jump-to-end":
            this.controller?.jumpToEnd({
                flash: true
            });
            break;
        case "twizzle-link":
            this.controller?.visitTwizzleLink();
            break;
        default:
            throw new Error("Missing command");
    }
};
customElementsShim.define("twisty-buttons", TwistyButtons);
var _iconManager;
var TwistyButton = class extends ManagedCustomElement {
    constructor(){
        super(...arguments);
        this.button = document.createElement("button");
        _chunkWO2AXYFEJs.__privateAdd(this, _iconManager, new ClassListManager(this, "svg-", buttonIcons));
    }
    connectedCallback() {
        this.addCSS(buttonCSS);
        this.addElement(this.button);
    }
    setIcon(iconName) {
        _chunkWO2AXYFEJs.__privateGet(this, _iconManager).setValue(iconName);
    }
};
_iconManager = new WeakMap();
customElementsShim.define("twisty-button", TwistyButton);
// src/cubing/twisty/views/control-panel/TwistyScrubber.css.ts
var twistyScrubberCSS = new CSSSource(`
:host {
  width: 384px;
  height: 16px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background: rgba(196, 196, 196, 0.75)
}

input:not(:disabled) {
  cursor: ew-resize;
}
`);
// src/cubing/twisty/views/control-panel/TwistyScrubber.ts
var SLOW_DOWN_SCRUBBING = false;
var isMouseDown = false;
globalSafeDocument?.addEventListener("mousedown", function(event) {
    if (event.which) isMouseDown = true;
}, true);
globalSafeDocument?.addEventListener("mouseup", function(event) {
    if (event.which) isMouseDown = false;
}, true);
var y = 0;
var clickNum = 0;
globalSafeDocument?.addEventListener("mousedown", ()=>{
    clickNum++;
}, false);
globalSafeDocument?.addEventListener("mousemove", onMouseUpdate, false);
globalSafeDocument?.addEventListener("mouseenter", onMouseUpdate, false);
function onMouseUpdate(e) {
    y = e.pageY;
}
var lastVal = 0;
var lastPreval = 0;
var scaling = false;
var currentClickNum = 0;
var _inputElem;
var TwistyScrubber = class extends ManagedCustomElement {
    constructor(model){
        super();
        this.model = model;
        _chunkWO2AXYFEJs.__privateAdd(this, _inputElem, null);
    }
    async onDetailedTimelineInfo(detailedTimelineInfo) {
        const inputElem = await this.inputElem();
        inputElem.min = detailedTimelineInfo.timeRange.start.toString();
        inputElem.max = detailedTimelineInfo.timeRange.end.toString();
        inputElem.disabled = inputElem.min === inputElem.max;
        inputElem.value = detailedTimelineInfo.timestamp.toString();
    }
    async connectedCallback() {
        this.addCSS(twistyScrubberCSS);
        this.addElement(await this.inputElem());
    }
    async inputElem() {
        return _chunkWO2AXYFEJs.__privateGet(this, _inputElem) ?? _chunkWO2AXYFEJs.__privateSet(this, _inputElem, (async ()=>{
            const elem = document.createElement("input");
            elem.type = "range";
            elem.disabled = true;
            this.model?.detailedTimelineInfo.addFreshListener(this.onDetailedTimelineInfo.bind(this));
            elem.addEventListener("input", this.onInput.bind(this));
            return elem;
        })());
    }
    async onInput(e) {
        if (scaling) return;
        const inputElem = await this.inputElem();
        await this.slowDown(e, inputElem);
        const value = parseInt(inputElem.value);
        this.model?.playingInfo.set({
            playing: false
        });
        this.model?.timestampRequest.set(value);
    }
    async slowDown(e, inputElem) {
        if (!SLOW_DOWN_SCRUBBING) return;
        if (isMouseDown) {
            const rect = inputElem.getBoundingClientRect();
            const sliderY = rect.top + rect.height / 2;
            console.log(sliderY, e, y, isMouseDown);
            const yDist = Math.abs(sliderY - y);
            let scale = 1;
            if (yDist > 64) scale = Math.max(Math.pow(2, -(yDist - 64) / 64), 1 / 32);
            const preVal = parseInt(inputElem.value);
            console.log("cl", currentClickNum, clickNum, preVal);
            if (currentClickNum === clickNum) {
                const delta = (preVal - lastPreval) * scale;
                console.log("delta", delta, yDist);
                scaling = true;
                let newVal = preVal;
                newVal = lastVal + delta * scale + (preVal - lastVal) * Math.min(1, Math.pow(0.5, yDist * yDist / 64));
                inputElem.value = newVal.toString();
                console.log(scale);
                scaling = false;
                this.contentWrapper.style.opacity = scale.toString();
            } else currentClickNum = clickNum;
            lastPreval = preVal;
        }
    }
};
_inputElem = new WeakMap();
customElementsShim.define("twisty-scrubber", TwistyScrubber);
// src/cubing/twisty/views/screenshot.ts
var cachedCamera = null;
async function screenshot(model, options) {
    const width = options?.width ?? 2048;
    const height = options?.height ?? 2048;
    const aspectRatio = width / height;
    const camera = cachedCamera ?? (cachedCamera = await (async ()=>{
        return new (await _chunkTG5KP5ILJs.THREEJS).PerspectiveCamera(20, aspectRatio, 0.1, 20);
    })());
    const scene = new (await _chunkTG5KP5ILJs.THREEJS).Scene();
    const twisty3DWrapper = new Twisty3DPuzzleWrapper(model, {
        scheduleRender: ()=>{
        }
    }, await model.puzzleLoader.get(), await model.visualizationStrategy.get());
    await model.stickering.get();
    await new Promise((resolve)=>setTimeout(resolve, 1000)
    );
    await model.legacyPosition.get();
    scene.add(await twisty3DWrapper.twisty3DPuzzle());
    const orbitCoordinates = await model.orbitCoordinates.get();
    await setCameraFromOrbitCoordinates(camera, orbitCoordinates);
    const renderer = new (await _chunkTG5KP5ILJs.THREEJS).WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(width, height);
    renderer.render(scene, camera);
    const dataURL = renderer.domElement.toDataURL();
    const defaultFilename = await getDefaultFilename(model);
    return {
        dataURL,
        download: async (filename)=>{
            downloadURL(dataURL, filename ?? defaultFilename);
        }
    };
}
async function getDefaultFilename(model) {
    const [puzzleID, algWithIssues] = await Promise.all([
        model.puzzleID.get(),
        model.alg.get()
    ]);
    return `[${puzzleID}]${algWithIssues.alg.experimentalNumUnits() === 0 ? "" : " " + algWithIssues.alg.toString()}`;
}
function downloadURL(url, name, extension = "png") {
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name}.${extension}`;
    a.click();
}
// src/cubing/twisty/views/TwistyPlayer.css.ts
var twistyPlayerCSS = new CSSSource(`
:host {
  width: 384px;
  height: 256px;
  display: grid;

  -webkit-user-select: none;
  user-select: none;
}

.wrapper {
  display: grid;
  overflow: hidden;
  grid-template-rows: 7fr minmax(1.5em, 0.5fr) minmax(2em, 1fr);
}

.wrapper > * {
  width: inherit;
  height: inherit;
  overflow: hidden;
}

.wrapper.controls-none {
  grid-template-rows: 7fr;
}

.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-control-button-panel ,
.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-buttons {
  display: none;
}

twisty-scrubber {
  background: rgba(196, 196, 196, 0.5);
}

.wrapper.checkered {
  background-color: #EAEAEA;
  background-image: linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD),
    linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD);
  background-size: 32px 32px;
  background-position: 0 0, 16px 16px;
}

.visualization-wrapper > * {
  width: 100%;
  height: 100%;
}

.error-elem {
  width: 100%;
  height: 100%;
  display: none;
  place-content: center;
  font-family: sans-serif;
  box-shadow: inset 0 0 2em rgb(255, 0, 0);
  color: red;
  text-shadow: 0 0 0.2em white;
  background: rgba(255, 255, 255, 0.25);
}

.wrapper.error .visualization-wrapper {
  display: none;
}

.wrapper.error .error-elem {
  display: grid;
}
`);
// src/cubing/twisty/model/props/puzzle/state/AlgProp.ts
var AlgIssues = class {
    constructor(issues){
        this.warnings = Object.freeze(issues?.warnings ?? []);
        this.errors = Object.freeze(issues?.errors ?? []);
        Object.freeze(this);
    }
    add(issues) {
        return new AlgIssues({
            warnings: this.warnings.concat(issues?.warnings ?? []),
            errors: this.errors.concat(issues?.errors ?? [])
        });
    }
    log() {
        if (this.errors.length > 0) console.error(`\u{1F6A8} ${this.errors[0]}`);
        else if (this.warnings.length > 0) console.warn(`\u26A0\uFE0F ${this.warnings[0]}`);
        else console.info("\u{1F60E} No issues!");
    }
};
function algWithIssuesFromString(s) {
    try {
        const alg = _chunkEWRBHQFXJs.Alg.fromString(s);
        const warnings = [];
        if (alg.toString() !== s) warnings.push(`Alg is non-canonical!`);
        return {
            alg,
            issues: new AlgIssues({
                warnings
            })
        };
    } catch (e) {
        return {
            alg: new _chunkEWRBHQFXJs.Alg(),
            issues: new AlgIssues({
                errors: [
                    `Malformed alg: ${e.toString()}`
                ]
            })
        };
    }
}
function algWithIssuesEquals(a1, a2) {
    return a1.alg.isIdentical(a2.alg) && arrayEquals(a1.issues.warnings, a2.issues.warnings) && arrayEquals(a1.issues.errors, a2.issues.errors);
}
var AlgProp = class extends _chunkTG5KP5ILJs.TwistyPropSource {
    getDefaultValue() {
        return {
            alg: new _chunkEWRBHQFXJs.Alg(),
            issues: new AlgIssues()
        };
    }
    canReuseValue(v1, v2) {
        return algWithIssuesEquals(v1, v2);
    }
    async derive(newAlg) {
        if (typeof newAlg === "string") return algWithIssuesFromString(newAlg);
        else return {
            alg: newAlg,
            issues: new AlgIssues()
        };
    }
};
// src/cubing/twisty/model/props/viewer/BackgroundProp.ts
var BackgroundProp = class extends _chunkTG5KP5ILJs.SimpleTwistyPropSource {
    getDefaultValue() {
        return "auto";
    }
};
// src/cubing/twisty/model/props/viewer/BackViewProp.ts
var backViewLayouts = {
    "none": true,
    "side-by-side": true,
    "top-right": true
};
var BackViewProp = class extends _chunkTG5KP5ILJs.SimpleTwistyPropSource {
    getDefaultValue() {
        return "auto";
    }
};
// src/cubing/twisty/model/props/puzzle/state/IndexerConstructorRequestProp.ts
var IndexerConstructorRequestProp = class extends _chunkTG5KP5ILJs.SimpleTwistyPropSource {
    getDefaultValue() {
        return "auto";
    }
};
// src/cubing/twisty/model/props/viewer/LatitudeLimit.ts
var DEFAULT_LATITUDE_LIMIT = 35;
var LatitudeLimitProp = class extends _chunkTG5KP5ILJs.SimpleTwistyPropSource {
    getDefaultValue() {
        return DEFAULT_LATITUDE_LIMIT;
    }
};
// src/cubing/twisty/model/props/viewer/OrbitCoordinatesRequestProp.ts
function orbitCoordinatesEqual(c1, c2) {
    return c1.latitude === c2.latitude && c1.longitude === c2.longitude && c1.distance === c2.distance;
}
var OrbitCoordinatesRequestProp = class extends _chunkTG5KP5ILJs.TwistyPropSource {
    getDefaultValue() {
        return "auto";
    }
    canReuseValue(v1, v2) {
        return v1 === v2 || orbitCoordinatesEqual(v1, v2);
    }
    async derive(newCoordinates, oldValuePromise) {
        if (newCoordinates === "auto") return "auto";
        let oldValue = await oldValuePromise;
        if (oldValue === "auto") oldValue = {
        };
        const newValue = Object.assign({
        }, oldValue);
        Object.assign(newValue, newCoordinates);
        if (typeof newValue.latitude !== "undefined") newValue.latitude = Math.min(Math.max(newValue.latitude, -90), 90);
        if (typeof newValue.longitude !== "undefined") newValue.longitude = mod(newValue.longitude, 360, 180);
        return newValue;
    }
};
// src/cubing/twisty/model/props/timeline/PlayingInfoProp.ts
var PlayingInfoProp = class extends _chunkTG5KP5ILJs.TwistyPropSource {
    async getDefaultValue() {
        return {
            direction: Direction.Forwards,
            playing: false,
            untilBoundary: BoundaryType.EntireTimeline,
            loop: false
        };
    }
    async derive(newInfo, oldValuePromise) {
        const oldValue = await oldValuePromise;
        const newValue = Object.assign({
        }, oldValue);
        Object.assign(newValue, newInfo);
        return newValue;
    }
    canReuseValue(v1, v2) {
        return v1.direction === v2.direction && v1.playing === v2.playing && v1.untilBoundary === v2.untilBoundary && v1.loop === v2.loop;
    }
};
// src/cubing/twisty/model/props/puzzle/structure/PuzzleDescriptionProp.ts
var PGPuzzleDescriptionStringProp = class extends _chunkTG5KP5ILJs.SimpleTwistyPropSource {
    getDefaultValue() {
        return _chunkTG5KP5ILJs.NO_VALUE;
    }
};
// src/cubing/twisty/model/props/puzzle/structure/PuzzleIDRequestProp.ts
var PuzzleIDRequestProp = class extends _chunkTG5KP5ILJs.SimpleTwistyPropSource {
    getDefaultValue() {
        return _chunkTG5KP5ILJs.NO_VALUE;
    }
};
// src/cubing/twisty/model/props/puzzle/structure/PuzzleLoaderProp.ts
var PuzzleLoaderProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    derive(inputs) {
        if (inputs.puzzleIDRequest && inputs.puzzleIDRequest !== _chunkTG5KP5ILJs.NO_VALUE) {
            const puzzleLoader = _chunkBOKO2BWTJs.puzzles[inputs.puzzleIDRequest];
            if (!puzzleLoader) this.userVisibleErrorTracker.set({
                errors: [
                    `Invalid puzzle ID: ${inputs.puzzleIDRequest}`
                ]
            });
            return puzzleLoader;
        }
        if (inputs.puzzleDescriptionRequest && inputs.puzzleDescriptionRequest !== _chunkTG5KP5ILJs.NO_VALUE) return _chunkBOKO2BWTJs.customPGPuzzleLoader(inputs.puzzleDescriptionRequest);
        return _chunkBOKO2BWTJs.cube3x3x3;
    }
};
// src/cubing/twisty/model/props/puzzle/state/SetupAnchorProp.ts
var SetupAnchorProp = class extends _chunkTG5KP5ILJs.SimpleTwistyPropSource {
    getDefaultValue() {
        return "start";
    }
};
// src/cubing/twisty/model/props/timeline/TempoScaleProp.ts
var TempoScaleProp = class extends _chunkTG5KP5ILJs.TwistyPropSource {
    getDefaultValue() {
        return 1;
    }
    derive(v) {
        return v < 0 ? 1 : v;
    }
};
// src/cubing/twisty/model/props/timeline/TimestampRequestProp.ts
var smartTimestamps = {
    "start": true,
    "end": true,
    "anchor": true,
    "opposite-anchor": true
};
var TimestampRequestProp = class extends _chunkTG5KP5ILJs.SimpleTwistyPropSource {
    getDefaultValue() {
        return "opposite-anchor";
    }
    set(v) {
        if (!this.validInput(v)) return;
        super.set(v);
    }
    validInput(v) {
        if (typeof v === "number") return true;
        if (smartTimestamps[v]) return true;
        return false;
    }
};
// src/cubing/twisty/model/props/general/URLProp.ts
var URLProp = class extends _chunkTG5KP5ILJs.TwistyPropSource {
    getDefaultValue() {
        return null;
    }
    derive(input) {
        if (typeof input === "string") return new URL(input, location.href);
        return input;
    }
};
// src/cubing/twisty/model/props/viewer/ViewerLinkProp.ts
var ViewerLinkProp = class extends _chunkTG5KP5ILJs.SimpleTwistyPropSource {
    getDefaultValue() {
        return "auto";
    }
};
// src/cubing/twisty/model/props/viewer/VisualizationProp.ts
var VisualizationFormatProp = class extends _chunkTG5KP5ILJs.SimpleTwistyPropSource {
    getDefaultValue() {
        return "auto";
    }
};
// src/cubing/twisty/model/props/viewer/OrbitCoordinatesProp.ts
var OrbitCoordinatesProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    canReuseValue(v1, v2) {
        return orbitCoordinatesEqual(v1, v2);
    }
    async derive(inputs) {
        if (inputs.orbitCoordinatesRequest === "auto") return defaultCameraOrbitCoordinates(inputs.puzzleID, inputs.strategy);
        const req = Object.assign(Object.assign({
        }, defaultCameraOrbitCoordinates(inputs.puzzleID, inputs.strategy), inputs.orbitCoordinatesRequest));
        if (Math.abs(req.latitude) <= inputs.latitudeLimit) return req;
        else {
            const { latitude , longitude , distance  } = req;
            return {
                latitude: inputs.latitudeLimit * Math.sign(latitude),
                longitude,
                distance
            };
        }
    }
};
var centeredCameraOrbitCoordinates = {
    latitude: 31.717474411461005,
    longitude: 0,
    distance: 5.877852522924731
};
var cubeCube3DCameraOrbitCoordinates = {
    latitude: 35,
    longitude: 30,
    distance: 6
};
var cubePG3DCameraOrbitCoordinates = {
    latitude: 35,
    longitude: 30,
    distance: 6.25
};
var megaminxCameraOrbitCoordinates = {
    latitude: Math.atan(0.5) * _chunkTG5KP5ILJs.DEGREES_PER_RADIAN,
    longitude: 0,
    distance: 6.7
};
var pyraminxCameraOrbitCoordinates = {
    latitude: 26.56505117707799,
    longitude: 0,
    distance: 6
};
function defaultCameraOrbitCoordinates(puzzleID, strategy) {
    if (puzzleID[1] === "x") {
        if (strategy === "Cube3D") return cubeCube3DCameraOrbitCoordinates;
        else return cubePG3DCameraOrbitCoordinates;
    } else switch(puzzleID){
        case "megaminx":
        case "gigaminx":
            return megaminxCameraOrbitCoordinates;
        case "pyraminx":
        case "master_tetraminx":
            return pyraminxCameraOrbitCoordinates;
        case "skewb":
            return cubePG3DCameraOrbitCoordinates;
        default:
            return centeredCameraOrbitCoordinates;
    }
}
// src/cubing/twisty/model/props/puzzle/structure/PuzzleIDProp.ts
var PuzzleIDProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    async derive(inputs) {
        return inputs.puzzleLoader.id;
    }
};
// src/cubing/twisty/model/props/puzzle/display/SpriteProp.ts
var cachedLoader = null;
async function loader() {
    return cachedLoader ?? (cachedLoader = new (await _chunkTG5KP5ILJs.THREEJS).TextureLoader());
}
var SpriteProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    async derive(inputs) {
        const { spriteURL: textureURL  } = inputs;
        if (textureURL === null) return null;
        return new Promise(async (resolve, _reject)=>{
            const onLoadingError = ()=>{
                console.warn("Could not load sprite:", textureURL.toString());
                resolve(null);
            };
            try {
                (await loader()).load(textureURL.toString(), resolve, onLoadingError, onLoadingError);
            } catch (e) {
                onLoadingError();
            }
        });
    }
};
// src/cubing/twisty/model/props/viewer/VisualizationStrategyProp.ts
var VisualizationStrategyProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    derive(inputs) {
        switch(inputs.puzzleID){
            case "clock":
            case "square1":
            case "kilominx":
            case "redi_cube":
                return "2D";
            case "3x3x3":
                switch(inputs.visualizationRequest){
                    case "auto":
                    case "3D":
                        return "Cube3D";
                    default:
                        return inputs.visualizationRequest;
                }
            default:
                switch(inputs.visualizationRequest){
                    case "auto":
                    case "3D":
                        return "PG3D";
                    case "experimental-2D-LL":
                        return "2D";
                    default:
                        return inputs.visualizationRequest;
                }
        }
    }
};
// src/cubing/twisty/controllers/indexer/AlgDuration.ts
function defaultDurationForAmount(amount) {
    switch(Math.abs(amount)){
        case 0:
            return 0;
        case 1:
            return 1000;
        case 2:
            return 1500;
        default:
            return 2000;
    }
}
var AlgDuration = class extends _chunkEWRBHQFXJs.TraversalUp {
    constructor(durationForAmount = defaultDurationForAmount){
        super();
        this.durationForAmount = durationForAmount;
    }
    traverseAlg(alg) {
        let total = 0;
        for (const unit of alg.units())total += this.traverseUnit(unit);
        return total;
    }
    traverseGrouping(grouping) {
        return grouping.amount * this.traverseAlg(grouping.alg);
    }
    traverseMove(move) {
        return this.durationForAmount(move.amount);
    }
    traverseCommutator(commutator) {
        return 2 * (this.traverseAlg(commutator.A) + this.traverseAlg(commutator.B));
    }
    traverseConjugate(conjugate) {
        return 2 * this.traverseAlg(conjugate.A) + this.traverseAlg(conjugate.B);
    }
    traversePause(_pause) {
        return this.durationForAmount(1);
    }
    traverseNewline(_newline) {
        return this.durationForAmount(1);
    }
    traverseLineComment(_comment) {
        return this.durationForAmount(0);
    }
};
// src/cubing/twisty/controllers/indexer/SimpleAlgIndexer.ts
var SimpleAlgIndexer = class {
    constructor(kpuzzle, alg){
        this.kpuzzle = kpuzzle;
        this.durationFn = new AlgDuration(defaultDurationForAmount);
        this.moves = new _chunkEWRBHQFXJs.Alg(alg.experimentalExpand());
    }
    getAnimLeaf(index) {
        return Array.from(this.moves.units())[index];
    }
    indexToMoveStartTimestamp(index) {
        const alg = new _chunkEWRBHQFXJs.Alg(Array.from(this.moves.units()).slice(0, index));
        return this.durationFn.traverseAlg(alg);
    }
    timestampToIndex(timestamp) {
        let cumulativeTime = 0;
        let i;
        for(i = 0; i < this.numAnimatedLeaves(); i++){
            cumulativeTime += this.durationFn.traverseMove(this.getAnimLeaf(i));
            if (cumulativeTime >= timestamp) return i;
        }
        return i;
    }
    stateAtIndex(index) {
        return this.kpuzzle.startState().applyTransformation(this.transformationAtIndex(index));
    }
    transformationAtIndex(index) {
        let state = this.kpuzzle.identityTransformation();
        for (const move of Array.from(this.moves.units()).slice(0, index))state = state.applyMove(move);
        return state;
    }
    algDuration() {
        return this.durationFn.traverseAlg(this.moves);
    }
    numAnimatedLeaves() {
        return _chunkU2TSTTDGJs.countAnimatedLeaves(this.moves);
    }
    moveDuration(index) {
        return this.durationFn.traverseMove(this.getAnimLeaf(index));
    }
};
// src/cubing/twisty/controllers/indexer/simultaneous-moves/simul-moves.ts
var axisLookup = {
    u: "y",
    l: "x",
    f: "z",
    r: "x",
    b: "z",
    d: "y",
    m: "x",
    e: "y",
    s: "z",
    x: "x",
    y: "y",
    z: "z"
};
function isSameAxis(move1, move2) {
    return axisLookup[move1.family[0].toLowerCase()] === axisLookup[move2.family[0].toLowerCase()];
}
var LocalSimulMoves = class extends _chunkEWRBHQFXJs.TraversalUp {
    traverseAlg(alg) {
        const processed = [];
        for (const nestedUnit of alg.units())processed.push(this.traverseUnit(nestedUnit));
        return Array.prototype.concat(...processed);
    }
    traverseGroupingOnce(alg) {
        if (alg.experimentalIsEmpty()) return [];
        for (const unit of alg.units()){
            if (!unit.is(_chunkEWRBHQFXJs.Move)) return this.traverseAlg(alg);
        }
        const moves = Array.from(alg.units());
        let maxSimulDur = defaultDurationForAmount(moves[0].amount);
        for(let i = 0; i < moves.length - 1; i++){
            for(let j = 1; j < moves.length; j++){
                if (!isSameAxis(moves[i], moves[j])) return this.traverseAlg(alg);
            }
            maxSimulDur = Math.max(maxSimulDur, defaultDurationForAmount(moves[i].amount));
        }
        const localMovesWithRange = moves.map((blockMove)=>{
            return {
                animLeafUnit: blockMove,
                msUntilNext: 0,
                duration: maxSimulDur
            };
        });
        localMovesWithRange[localMovesWithRange.length - 1].msUntilNext = maxSimulDur;
        return localMovesWithRange;
    }
    traverseGrouping(grouping) {
        const processed = [];
        const segmentOnce = grouping.amount > 0 ? grouping.alg : grouping.alg.invert();
        for(let i = 0; i < Math.abs(grouping.amount); i++)processed.push(this.traverseGroupingOnce(segmentOnce));
        return Array.prototype.concat(...processed);
    }
    traverseMove(move) {
        const duration = defaultDurationForAmount(move.amount);
        return [
            {
                animLeafUnit: move,
                msUntilNext: duration,
                duration
            }
        ];
    }
    traverseCommutator(commutator) {
        const processed = [];
        const segmentsOnce = [
            commutator.A,
            commutator.B,
            commutator.A.invert(),
            commutator.B.invert()
        ];
        for (const segment of segmentsOnce)processed.push(this.traverseGroupingOnce(segment));
        return Array.prototype.concat(...processed);
    }
    traverseConjugate(conjugate) {
        const processed = [];
        const segmentsOnce = [
            conjugate.A,
            conjugate.B,
            conjugate.A.invert()
        ];
        for (const segment of segmentsOnce)processed.push(this.traverseGroupingOnce(segment));
        return Array.prototype.concat(...processed);
    }
    traversePause(pause) {
        const duration = defaultDurationForAmount(1);
        return [
            {
                animLeafUnit: pause,
                msUntilNext: duration,
                duration
            }
        ];
    }
    traverseNewline(_newline) {
        return [];
    }
    traverseLineComment(_comment) {
        return [];
    }
};
var localSimulMovesInstance = new LocalSimulMoves();
var localSimulMoves = localSimulMovesInstance.traverseAlg.bind(localSimulMovesInstance);
function simulMoves(a) {
    let timestamp = 0;
    const l = localSimulMoves(a).map((localSimulMove)=>{
        const leafWithRange = {
            animLeaf: localSimulMove.animLeafUnit,
            start: timestamp,
            end: timestamp + localSimulMove.duration
        };
        timestamp += localSimulMove.msUntilNext;
        return leafWithRange;
    });
    return l;
}
// src/cubing/twisty/controllers/indexer/simultaneous-moves/SimultaneousMoveIndexer.ts
var demos = {
    "y' y' U' E D R2 r2 F2 B2 U E D' R2 L2' z2 S2 U U D D S2 F2' B2": [
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("y", -1),
            start: 0,
            end: 1000
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("y", -1),
            start: 1000,
            end: 2000
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("U", -1),
            start: 1000,
            end: 1600
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("E", 1),
            start: 1200,
            end: 1800
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("D"),
            start: 1400,
            end: 2000
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("R", 2),
            start: 2000,
            end: 3500
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("r", 2),
            start: 2000,
            end: 3500
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("F", 2),
            start: 3500,
            end: 4200
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("B", 2),
            start: 3800,
            end: 4500
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("U", 1),
            start: 4500,
            end: 5500
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("E", 1),
            start: 4500,
            end: 5500
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("D", -1),
            start: 4500,
            end: 5500
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("R", 2),
            start: 5500,
            end: 6500
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("L", -2),
            start: 5500,
            end: 6500
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("z", 2),
            start: 5500,
            end: 6500
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("S", 2),
            start: 6500,
            end: 7500
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("U"),
            start: 7500,
            end: 8000
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("D"),
            start: 7750,
            end: 8250
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("U"),
            start: 8000,
            end: 8500
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("D"),
            start: 8250,
            end: 8750
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("S", 2),
            start: 8750,
            end: 9250
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("F", -2),
            start: 8750,
            end: 10000
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("B", 2),
            start: 8750,
            end: 10000
        }
    ],
    "M' R' U' D' M R": [
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("M", -1),
            start: 0,
            end: 1000
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("R", -1),
            start: 0,
            end: 1000
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("U", -1),
            start: 1000,
            end: 2000
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("D", -1),
            start: 1000,
            end: 2000
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("M"),
            start: 2000,
            end: 3000
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("R"),
            start: 2000,
            end: 3000
        }
    ],
    "U' E' r E r2' E r U E": [
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("U", -1),
            start: 0,
            end: 1000
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("E", -1),
            start: 0,
            end: 1000
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("r"),
            start: 1000,
            end: 2500
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("E"),
            start: 2500,
            end: 3500
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("r", -2),
            start: 3500,
            end: 5000
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("E"),
            start: 5000,
            end: 6000
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("r"),
            start: 6000,
            end: 7000
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("U"),
            start: 7000,
            end: 8000
        },
        {
            animLeaf: new _chunkEWRBHQFXJs.Move("E"),
            start: 7000,
            end: 8000
        }
    ]
};
var SimultaneousMoveIndexer = class {
    constructor(kpuzzle, alg){
        this.kpuzzle = kpuzzle;
        this.animLeaves = demos[alg.toString()] ?? simulMoves(alg);
    }
    getAnimLeaf(index) {
        return this.animLeaves[Math.min(index, this.animLeaves.length - 1)]?.animLeaf ?? null;
    }
    getAnimLeafWithRange(index) {
        return this.animLeaves[Math.min(index, this.animLeaves.length - 1)];
    }
    indexToMoveStartTimestamp(index) {
        let start = 0;
        if (this.animLeaves.length > 0) start = this.animLeaves[Math.min(index, this.animLeaves.length - 1)].start;
        return start;
    }
    timestampToIndex(timestamp) {
        let i = 0;
        for(i = 0; i < this.animLeaves.length; i++){
            if (this.animLeaves[i].start >= timestamp) return Math.max(0, i - 1);
        }
        return Math.max(0, i - 1);
    }
    timestampToPosition(timestamp, startState) {
        const currentMoveInfo = this.currentMoveInfo(timestamp);
        let state = startState ?? this.kpuzzle.identityTransformation().toKState();
        for (const leafWithRange of this.animLeaves.slice(0, currentMoveInfo.stateIndex)){
            const move = leafWithRange.animLeaf.as(_chunkEWRBHQFXJs.Move);
            if (move !== null) state = state.applyMove(move);
        }
        return {
            state,
            movesInProgress: currentMoveInfo.currentMoves
        };
    }
    currentMoveInfo(timestamp) {
        let windowEarliestTimestamp = Infinity;
        for (const leafWithRange of this.animLeaves){
            if (leafWithRange.start <= timestamp && leafWithRange.end >= timestamp) windowEarliestTimestamp = Math.min(windowEarliestTimestamp, leafWithRange.start);
            else if (leafWithRange.start > timestamp) break;
        }
        const currentMoves = [];
        const movesStarting = [];
        const movesFinishing = [];
        const movesFinished = [];
        let latestStart = -Infinity;
        let earliestEnd = Infinity;
        let stateIndex = 0;
        for (const leafWithRange1 of this.animLeaves){
            if (leafWithRange1.end <= windowEarliestTimestamp) stateIndex++;
            else if (leafWithRange1.start > timestamp) break;
            else {
                const move = leafWithRange1.animLeaf.as(_chunkEWRBHQFXJs.Move);
                if (move !== null) {
                    let fraction = (timestamp - leafWithRange1.start) / (leafWithRange1.end - leafWithRange1.start);
                    let moveFinished = false;
                    if (fraction > 1) {
                        fraction = 1;
                        moveFinished = true;
                    }
                    const currentMove = {
                        move,
                        direction: Direction.Forwards,
                        fraction,
                        startTimestamp: leafWithRange1.start,
                        endTimestamp: leafWithRange1.end
                    };
                    switch(fraction){
                        case 0:
                            movesStarting.push(currentMove);
                            break;
                        case 1:
                            if (moveFinished) movesFinished.push(currentMove);
                            else movesFinishing.push(currentMove);
                            break;
                        default:
                            currentMoves.push(currentMove);
                            latestStart = Math.max(latestStart, leafWithRange1.start);
                            earliestEnd = Math.min(earliestEnd, leafWithRange1.end);
                    }
                }
            }
        }
        return {
            stateIndex,
            currentMoves,
            latestStart,
            earliestEnd,
            movesStarting,
            movesFinishing,
            movesFinished
        };
    }
    stateAtIndex(index, startState) {
        let state = startState ?? this.kpuzzle.startState();
        for(let i = 0; i < this.animLeaves.length && i < index; i++){
            const leafWithRange = this.animLeaves[i];
            const move = leafWithRange.animLeaf.as(_chunkEWRBHQFXJs.Move);
            if (move !== null) state = state.applyMove(move);
        }
        return state;
    }
    transformationAtIndex(index) {
        let transformation = this.kpuzzle.identityTransformation();
        for (const leafWithRange of this.animLeaves.slice(0, index)){
            const move = leafWithRange.animLeaf.as(_chunkEWRBHQFXJs.Move);
            if (move !== null) transformation = transformation.applyMove(move);
        }
        return transformation;
    }
    algDuration() {
        let max = 0;
        for (const leafWithRange of this.animLeaves)max = Math.max(max, leafWithRange.end);
        return max;
    }
    numAnimatedLeaves() {
        return this.animLeaves.length;
    }
    moveDuration(index) {
        const move = this.getAnimLeafWithRange(index);
        return move.end - move.start;
    }
};
// src/cubing/twisty/controllers/indexer/tree/AlgWalker.ts
var AlgPartDecoration = class {
    constructor(moveCount, duration, forward, backward, children = []){
        this.moveCount = moveCount;
        this.duration = duration;
        this.forward = forward;
        this.backward = backward;
        this.children = children;
    }
};
var DecoratorConstructor = class extends _chunkEWRBHQFXJs.TraversalUp {
    constructor(kpuzzle){
        super();
        this.kpuzzle = kpuzzle;
        this.durationFn = new AlgDuration(defaultDurationForAmount);
        this.cache = {
        };
        this.identity = kpuzzle.identityTransformation();
        this.dummyLeaf = new AlgPartDecoration(0, 0, this.identity, this.identity, []);
    }
    traverseAlg(alg) {
        let moveCount = 0;
        let duration = 0;
        let transformation = this.identity;
        const child = [];
        for (const unit of alg.units()){
            const apd = this.traverseUnit(unit);
            moveCount += apd.moveCount;
            duration += apd.duration;
            if (transformation === this.identity) transformation = apd.forward;
            else transformation = transformation.applyTransformation(apd.forward);
            child.push(apd);
        }
        return new AlgPartDecoration(moveCount, duration, transformation, transformation.invert(), child);
    }
    traverseGrouping(grouping) {
        const dec = this.traverseAlg(grouping.alg);
        return this.mult(dec, grouping.amount, [
            dec
        ]);
    }
    traverseMove(move) {
        const key = move.toString();
        let r = this.cache[key];
        if (r) return r;
        const transformation = this.kpuzzle.moveToTransformation(move);
        r = new AlgPartDecoration(1, this.durationFn.traverseUnit(move), transformation, transformation.invert());
        this.cache[key] = r;
        return r;
    }
    traverseCommutator(commutator) {
        const decA = this.traverseAlg(commutator.A);
        const decB = this.traverseAlg(commutator.B);
        const AB = decA.forward.applyTransformation(decB.forward);
        const ApBp = decA.backward.applyTransformation(decB.backward);
        const ABApBp = AB.applyTransformation(ApBp);
        const dec = new AlgPartDecoration(2 * (decA.moveCount + decB.moveCount), 2 * (decA.duration + decB.duration), ABApBp, ABApBp.invert(), [
            decA,
            decB
        ]);
        return this.mult(dec, 1, [
            dec,
            decA,
            decB
        ]);
    }
    traverseConjugate(conjugate) {
        const decA = this.traverseAlg(conjugate.A);
        const decB = this.traverseAlg(conjugate.B);
        const AB = decA.forward.applyTransformation(decB.forward);
        const ABAp = AB.applyTransformation(decA.backward);
        const dec = new AlgPartDecoration(2 * decA.moveCount + decB.moveCount, 2 * decA.duration + decB.duration, ABAp, ABAp.invert(), [
            decA,
            decB
        ]);
        return this.mult(dec, 1, [
            dec,
            decA,
            decB
        ]);
    }
    traversePause(pause) {
        return new AlgPartDecoration(1, this.durationFn.traverseUnit(pause), this.identity, this.identity);
    }
    traverseNewline(_newline) {
        return this.dummyLeaf;
    }
    traverseLineComment(_comment) {
        return this.dummyLeaf;
    }
    mult(apd, n, child) {
        const absn = Math.abs(n);
        const st = apd.forward.selfMultiply(n);
        return new AlgPartDecoration(apd.moveCount * absn, apd.duration * absn, st, st.invert(), child);
    }
};
var WalkerDown = class {
    constructor(apd, back){
        this.apd = apd;
        this.back = back;
    }
};
var AlgWalker = class extends _chunkEWRBHQFXJs.TraversalDownUp {
    constructor(kpuzzle, algOrUnit, apd){
        super();
        this.kpuzzle = kpuzzle;
        this.algOrUnit = algOrUnit;
        this.apd = apd;
        this.i = -1;
        this.dur = -1;
        this.goali = -1;
        this.goaldur = -1;
        this.move = void 0;
        this.back = false;
        this.moveDuration = 0;
        this.st = this.kpuzzle.identityTransformation();
        this.root = new WalkerDown(this.apd, false);
    }
    moveByIndex(loc) {
        if (this.i >= 0 && this.i === loc) return this.move !== void 0;
        return this.dosearch(loc, Infinity);
    }
    moveByDuration(dur) {
        if (this.dur >= 0 && this.dur < dur && this.dur + this.moveDuration >= dur) return this.move !== void 0;
        return this.dosearch(Infinity, dur);
    }
    dosearch(loc, dur) {
        this.goali = loc;
        this.goaldur = dur;
        this.i = 0;
        this.dur = 0;
        this.move = void 0;
        this.moveDuration = 0;
        this.back = false;
        this.st = this.kpuzzle.identityTransformation();
        const r = this.algOrUnit.is(_chunkEWRBHQFXJs.Alg) ? this.traverseAlg(this.algOrUnit, this.root) : this.traverseUnit(this.algOrUnit, this.root);
        return r;
    }
    traverseAlg(alg, wd) {
        if (!this.firstcheck(wd)) return false;
        let i = wd.back ? alg.experimentalNumUnits() - 1 : 0;
        for (const unit of _chunkEWRBHQFXJs.directedGenerator(alg.units(), wd.back ? _chunkEWRBHQFXJs.IterationDirection.Backwards : _chunkEWRBHQFXJs.IterationDirection.Forwards)){
            if (this.traverseUnit(unit, new WalkerDown(wd.apd.children[i], wd.back))) return true;
            i += wd.back ? -1 : 1;
        }
        return false;
    }
    traverseGrouping(grouping, wd) {
        if (!this.firstcheck(wd)) return false;
        const back = this.domult(wd, grouping.amount);
        return this.traverseAlg(grouping.alg, new WalkerDown(wd.apd.children[0], back));
    }
    traverseMove(move, wd) {
        if (!this.firstcheck(wd)) return false;
        this.move = move;
        this.moveDuration = wd.apd.duration;
        this.back = wd.back;
        return true;
    }
    traverseCommutator(commutator, wd) {
        if (!this.firstcheck(wd)) return false;
        const back = this.domult(wd, 1);
        if (back) return this.traverseAlg(commutator.B, new WalkerDown(wd.apd.children[2], !back)) || this.traverseAlg(commutator.A, new WalkerDown(wd.apd.children[1], !back)) || this.traverseAlg(commutator.B, new WalkerDown(wd.apd.children[2], back)) || this.traverseAlg(commutator.A, new WalkerDown(wd.apd.children[1], back));
        else return this.traverseAlg(commutator.A, new WalkerDown(wd.apd.children[1], back)) || this.traverseAlg(commutator.B, new WalkerDown(wd.apd.children[2], back)) || this.traverseAlg(commutator.A, new WalkerDown(wd.apd.children[1], !back)) || this.traverseAlg(commutator.B, new WalkerDown(wd.apd.children[2], !back));
    }
    traverseConjugate(conjugate, wd) {
        if (!this.firstcheck(wd)) return false;
        const back = this.domult(wd, 1);
        if (back) return this.traverseAlg(conjugate.A, new WalkerDown(wd.apd.children[1], !back)) || this.traverseAlg(conjugate.B, new WalkerDown(wd.apd.children[2], back)) || this.traverseAlg(conjugate.A, new WalkerDown(wd.apd.children[1], back));
        else return this.traverseAlg(conjugate.A, new WalkerDown(wd.apd.children[1], back)) || this.traverseAlg(conjugate.B, new WalkerDown(wd.apd.children[2], back)) || this.traverseAlg(conjugate.A, new WalkerDown(wd.apd.children[1], !back));
    }
    traversePause(pause, wd) {
        if (!this.firstcheck(wd)) return false;
        this.move = pause;
        this.moveDuration = wd.apd.duration;
        this.back = wd.back;
        return true;
    }
    traverseNewline(_newline, _wd) {
        return false;
    }
    traverseLineComment(_lineComment, _wd) {
        return false;
    }
    firstcheck(wd) {
        if (wd.apd.moveCount + this.i <= this.goali && wd.apd.duration + this.dur < this.goaldur) return this.keepgoing(wd);
        return true;
    }
    domult(wd, amount) {
        let back = wd.back;
        if (amount === 0) return back;
        if (amount < 0) {
            back = !back;
            amount = -amount;
        }
        const base = wd.apd.children[0];
        const full = Math.min(Math.floor((this.goali - this.i) / base.moveCount), Math.ceil((this.goaldur - this.dur) / base.duration - 1));
        if (full > 0) this.keepgoing(new WalkerDown(base, back), full);
        return back;
    }
    keepgoing(wd, mul = 1) {
        this.i += mul * wd.apd.moveCount;
        this.dur += mul * wd.apd.duration;
        if (mul !== 1) {
            if (wd.back) this.st = this.st.applyTransformation(wd.apd.backward.selfMultiply(mul));
            else this.st = this.st.applyTransformation(wd.apd.forward.selfMultiply(mul));
        } else if (wd.back) this.st = this.st.applyTransformation(wd.apd.backward);
        else this.st = this.st.applyTransformation(wd.apd.forward);
        return false;
    }
};
// src/cubing/twisty/controllers/indexer/tree/chunkAlgs.ts
var MIN_CHUNKING_THRESHOLD = 16;
function chunkifyAlg(alg, chunkMaxLength) {
    const mainAlgBuilder = new _chunkEWRBHQFXJs.AlgBuilder();
    const chunkAlgBuilder = new _chunkEWRBHQFXJs.AlgBuilder();
    for (const unit of alg.units()){
        chunkAlgBuilder.push(unit);
        if (chunkAlgBuilder.experimentalNumUnits() >= chunkMaxLength) {
            mainAlgBuilder.push(new _chunkEWRBHQFXJs.Grouping(chunkAlgBuilder.toAlg()));
            chunkAlgBuilder.reset();
        }
    }
    mainAlgBuilder.push(new _chunkEWRBHQFXJs.Grouping(chunkAlgBuilder.toAlg()));
    return mainAlgBuilder.toAlg();
}
var ChunkAlgs = class extends _chunkEWRBHQFXJs.TraversalUp {
    traverseAlg(alg) {
        const algLength = alg.experimentalNumUnits();
        if (algLength < MIN_CHUNKING_THRESHOLD) return alg;
        return chunkifyAlg(alg, Math.ceil(Math.sqrt(algLength)));
    }
    traverseGrouping(grouping) {
        return new _chunkEWRBHQFXJs.Grouping(this.traverseAlg(grouping.alg), grouping.amount);
    }
    traverseMove(move) {
        return move;
    }
    traverseCommutator(commutator) {
        return new _chunkEWRBHQFXJs.Conjugate(this.traverseAlg(commutator.A), this.traverseAlg(commutator.B));
    }
    traverseConjugate(conjugate) {
        return new _chunkEWRBHQFXJs.Conjugate(this.traverseAlg(conjugate.A), this.traverseAlg(conjugate.B));
    }
    traversePause(pause) {
        return pause;
    }
    traverseNewline(newline) {
        return newline;
    }
    traverseLineComment(comment) {
        return comment;
    }
};
var chunkAlgsInstance = new ChunkAlgs();
var chunkAlgs = chunkAlgsInstance.traverseAlg.bind(chunkAlgsInstance);
// src/cubing/twisty/controllers/indexer/tree/TreeAlgIndexer.ts
var TreeAlgIndexer = class {
    constructor(kpuzzle, alg){
        this.kpuzzle = kpuzzle;
        const deccon = new DecoratorConstructor(this.kpuzzle);
        const chunkedAlg = chunkAlgs(alg);
        this.decoration = deccon.traverseAlg(chunkedAlg);
        this.walker = new AlgWalker(this.kpuzzle, chunkedAlg, this.decoration);
    }
    getAnimLeaf(index) {
        if (this.walker.moveByIndex(index)) {
            if (!this.walker.move) throw new Error("`this.walker.mv` missing");
            const move = this.walker.move;
            if (this.walker.back) return move.invert();
            return move;
        }
        return null;
    }
    indexToMoveStartTimestamp(index) {
        if (this.walker.moveByIndex(index) || this.walker.i === index) return this.walker.dur;
        throw new Error(`Out of algorithm: index ${index}`);
    }
    indexToMovesInProgress(index) {
        if (this.walker.moveByIndex(index) || this.walker.i === index) return this.walker.dur;
        throw new Error(`Out of algorithm: index ${index}`);
    }
    stateAtIndex(index, startState) {
        this.walker.moveByIndex(index);
        return (startState ?? this.kpuzzle.startState()).applyTransformation(this.walker.st);
    }
    transformationAtIndex(index) {
        this.walker.moveByIndex(index);
        return this.walker.st;
    }
    numAnimatedLeaves() {
        return this.decoration.moveCount;
    }
    timestampToIndex(timestamp) {
        this.walker.moveByDuration(timestamp);
        return this.walker.i;
    }
    algDuration() {
        return this.decoration.duration;
    }
    moveDuration(index) {
        this.walker.moveByIndex(index);
        return this.walker.moveDuration;
    }
};
// src/cubing/twisty/model/props/puzzle/state/IndexerConstructorProp.ts
var IndexerConstructorProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    derive(inputs) {
        switch(inputs.indexerConstructorRequest){
            case "auto":
                if (_chunkU2TSTTDGJs.countMoves(inputs.alg.alg) < 100 && inputs.puzzle === "3x3x3" && inputs.visualizationStrategy === "Cube3D") return SimultaneousMoveIndexer;
                else return TreeAlgIndexer;
            case "tree":
                return TreeAlgIndexer;
            case "simple":
                return SimpleAlgIndexer;
            case "simultaneous":
                return SimultaneousMoveIndexer;
            default:
                throw new Error("Invalid indexer request!");
        }
    }
};
// src/cubing/twisty/model/props/puzzle/state/PuzzleAlgProp.ts
var validate = true;
var PuzzleAlgProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    async derive(inputs) {
        try {
            if (validate) inputs.kpuzzle.algToTransformation(inputs.algWithIssues.alg);
            return inputs.algWithIssues;
        } catch (e) {
            return {
                alg: new _chunkEWRBHQFXJs.Alg(),
                issues: new AlgIssues({
                    errors: [
                        `Invalid alg for puzzle: ${e.toString()}`
                    ]
                })
            };
        }
    }
};
// src/cubing/twisty/model/props/puzzle/state/AlgTransformationProp.ts
var AlgTransformationProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    derive(input) {
        return input.kpuzzle.algToTransformation(input.setupAlg.alg);
    }
};
// src/cubing/twisty/model/props/puzzle/state/IndexerProp.ts
var IndexerProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    derive(input) {
        return new input.indexerConstructor(input.kpuzzle, input.algWithIssues.alg);
    }
};
// src/cubing/twisty/model/props/puzzle/state/AnchorTransformationProp.ts
var AnchorTransformationProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    derive(inputs) {
        if (inputs.setupTransformation) return inputs.setupTransformation;
        switch(inputs.setupAnchor){
            case "start":
                return inputs.setupAlgTransformation;
            case "end":
                {
                    const algTransformation = inputs.indexer.transformationAtIndex(inputs.indexer.numAnimatedLeaves());
                    const inverseAlgTransformation = algTransformation.invert();
                    return inputs.setupAlgTransformation.applyTransformation(inverseAlgTransformation);
                }
            default:
                throw new Error("Unimplemented!");
        }
    }
};
// src/cubing/twisty/model/props/viewer/TimeRangeProp.ts
var TimeRangeProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    derive(inputs) {
        return {
            start: 0,
            end: inputs.indexer.algDuration()
        };
    }
};
// src/cubing/twisty/model/props/timeline/DetailedTimelineInfoProp.ts
var _requestedTimestampToMilliseconds, requestedTimestampToMilliseconds_fn;
var DetailedTimelineInfoProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    constructor(){
        super(...arguments);
        _chunkWO2AXYFEJs.__privateAdd(this, _requestedTimestampToMilliseconds);
    }
    derive(inputs) {
        let timestamp = _chunkWO2AXYFEJs.__privateMethod(this, _requestedTimestampToMilliseconds, requestedTimestampToMilliseconds_fn).call(this, inputs);
        let atStart = false;
        let atEnd = false;
        if (timestamp >= inputs.timeRange.end) {
            atEnd = true;
            timestamp = Math.min(inputs.timeRange.end, timestamp);
        }
        if (timestamp <= inputs.timeRange.start) {
            atStart = true;
            timestamp = Math.max(inputs.timeRange.start, timestamp);
        }
        return {
            timestamp,
            timeRange: inputs.timeRange,
            atStart,
            atEnd
        };
    }
    canReuse(v1, v2) {
        return v1.timestamp === v2.timestamp && v1.timeRange.start === v2.timeRange.start && v1.timeRange.end === v2.timeRange.end && v1.atStart === v2.atStart && v1.atEnd === v2.atEnd;
    }
};
_requestedTimestampToMilliseconds = new WeakSet();
requestedTimestampToMilliseconds_fn = function(inputs) {
    switch(inputs.timestampRequest){
        case "start":
            return inputs.timeRange.start;
        case "end":
            return inputs.timeRange.end;
        case "anchor":
            return inputs.setupAnchor === "start" ? inputs.timeRange.start : inputs.timeRange.end;
        case "opposite-anchor":
            return inputs.setupAnchor === "start" ? inputs.timeRange.end : inputs.timeRange.start;
        default:
            return inputs.timestampRequest;
    }
};
// src/cubing/twisty/model/props/timeline/CoarseTimelineInfoProp.ts
var CoarseTimelineInfoProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    derive(inputs) {
        return {
            playing: inputs.playingInfo.playing,
            atStart: inputs.detailedTimelineInfo.atStart,
            atEnd: inputs.detailedTimelineInfo.atEnd
        };
    }
    canReuseValue(v1, v2) {
        return v1.playing === v2.playing && v1.atStart === v2.atStart && v1.atEnd === v2.atEnd;
    }
};
// src/cubing/twisty/model/props/puzzle/state/CurrentMoveInfoProp.ts
var CurrentMoveInfoProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    derive(inputs) {
        function addCatchUpMove(currentMoveInfo) {
            if (inputs.detailedTimelineInfo.atEnd && inputs.catchUpMove.move !== null) currentMoveInfo.currentMoves.push({
                move: inputs.catchUpMove.move,
                direction: Direction.Backwards,
                fraction: 1 - inputs.catchUpMove.amount,
                startTimestamp: -1,
                endTimestamp: -1
            });
            return currentMoveInfo;
        }
        if (inputs.indexer.currentMoveInfo) return addCatchUpMove(inputs.indexer.currentMoveInfo(inputs.detailedTimelineInfo.timestamp));
        else {
            const idx = inputs.indexer.timestampToIndex(inputs.detailedTimelineInfo.timestamp);
            const currentMoveInfo = {
                stateIndex: idx,
                currentMoves: [],
                movesFinishing: [],
                movesFinished: [],
                movesStarting: [],
                latestStart: -Infinity,
                earliestEnd: Infinity
            };
            if (inputs.indexer.numAnimatedLeaves() > 0) {
                const move = inputs.indexer.getAnimLeaf(idx)?.as(_chunkEWRBHQFXJs.Move);
                if (!move) return addCatchUpMove(currentMoveInfo);
                const start = inputs.indexer.indexToMoveStartTimestamp(idx);
                const duration = inputs.indexer.moveDuration(idx);
                const fraction = (inputs.detailedTimelineInfo.timestamp - start) / duration;
                const end = start + duration;
                const currentMove = {
                    move,
                    direction: Direction.Forwards,
                    fraction,
                    startTimestamp: start,
                    endTimestamp: end
                };
                if (fraction === 0) currentMoveInfo.movesStarting.push(currentMove);
                else if (fraction === 1) currentMoveInfo.movesFinishing.push(currentMove);
                else {
                    currentMoveInfo.currentMoves.push(currentMove);
                    currentMoveInfo.latestStart = Math.max(currentMoveInfo.latestStart, start);
                    currentMoveInfo.earliestEnd = Math.min(currentMoveInfo.earliestEnd, end);
                }
            }
            return addCatchUpMove(currentMoveInfo);
        }
    }
};
// src/cubing/twisty/model/props/puzzle/state/CurrentLeavesSimplified.ts
var CurrentLeavesSimplifiedProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    derive(inputs) {
        return {
            stateIndex: inputs.currentMoveInfo.stateIndex,
            movesFinishing: inputs.currentMoveInfo.movesFinishing.map((currentMoveInfo)=>currentMoveInfo.move
            ),
            movesFinished: inputs.currentMoveInfo.movesFinished.map((currentMoveInfo)=>currentMoveInfo.move
            )
        };
    }
    canReuse(v1, v2) {
        return v1.stateIndex === v2.stateIndex && arrayEqualsCompare(v1.movesFinishing, v2.movesFinishing, (m1, m2)=>m1.isIdentical(m2)
        ) && arrayEqualsCompare(v1.movesFinished, v2.movesFinished, (m1, m2)=>m1.isIdentical(m2)
        );
    }
};
// src/cubing/twisty/model/props/puzzle/state/CurrentStateProp.ts
var CurrentStateProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    derive(inputs) {
        let transformation = inputs.indexer.transformationAtIndex(inputs.currentLeavesSimplified.stateIndex);
        transformation = inputs.anchoredStart.applyTransformation(transformation);
        for (const finishingMove of inputs.currentLeavesSimplified.movesFinishing)transformation = transformation.applyMove(finishingMove);
        for (const finishedMove of inputs.currentLeavesSimplified.movesFinished)transformation = transformation.applyMove(finishedMove);
        return transformation.toKState();
    }
};
// src/cubing/twisty/model/props/puzzle/state/LegacyPositionProp.ts
var LegacyPositionProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    derive(inputs) {
        return {
            state: inputs.state,
            movesInProgress: inputs.currentMoveInfo.currentMoves
        };
    }
};
// src/cubing/twisty/model/props/puzzle/structure/KPuzzleProp.ts
var KPuzzleProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    async derive(inputs) {
        return inputs.puzzleLoader.kpuzzle();
    }
};
// src/cubing/twisty/model/UserVisibleErrorTracker.ts
var EMPTY_ERRORS = {
    errors: []
};
var UserVisibleErrorTracker = class extends _chunkTG5KP5ILJs.SimpleTwistyPropSource {
    getDefaultValue() {
        return EMPTY_ERRORS;
    }
    reset() {
        this.set(this.getDefaultValue());
    }
    canReuseValue(_v1, _v2) {
        return arrayEquals(_v1.errors, _v2.errors);
    }
};
// src/cubing/twisty/model/props/puzzle/state/CatchUpMoveProp.ts
var CatchUpMoveProp = class extends _chunkTG5KP5ILJs.SimpleTwistyPropSource {
    getDefaultValue() {
        return {
            move: null,
            amount: 0
        };
    }
    canReuseValue(v1, v2) {
        return v1.move === v2.move && v1.amount === v2.amount;
    }
};
// src/cubing/twisty/model/props/puzzle/state/NaiveMoveCountProp.ts
var NaiveMoveCountProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    derive(inputs) {
        if (inputs.alg.issues.errors.length > 0) return null;
        return _chunkU2TSTTDGJs.countMoves(inputs.alg.alg);
    }
};
// src/cubing/twisty/model/props/puzzle/state/MovePressInputProp.ts
var MovePressInputProp = class extends _chunkTG5KP5ILJs.SimpleTwistyPropSource {
    getDefaultValue() {
        return "auto";
    }
};
// src/cubing/twisty/model/props/puzzle/display/FoundationDisplayProp.ts
var FoundationDisplayProp = class extends _chunkTG5KP5ILJs.SimpleTwistyPropSource {
    getDefaultValue() {
        return "auto";
    }
};
// src/cubing/twisty/model/props/puzzle/state/SetupTransformationProp.ts
var SetupTransformationProp = class extends _chunkTG5KP5ILJs.SimpleTwistyPropSource {
    getDefaultValue() {
        return null;
    }
};
// src/cubing/twisty/model/props/general/ArbitraryStringProp.ts
var ArbitraryStringProp = class extends _chunkTG5KP5ILJs.SimpleTwistyPropSource {
    getDefaultValue() {
        return null;
    }
};
// src/cubing/twisty/model/TwistyPlayerModel.ts
var TwistyPlayerModel = class {
    constructor(){
        this.userVisibleErrorTracker = new UserVisibleErrorTracker();
        this.alg = new AlgProp();
        this.background = new BackgroundProp();
        this.backView = new BackViewProp();
        this.controlPanel = new ControlPanelProp();
        this.catchUpMove = new CatchUpMoveProp();
        this.foundationDisplay = new FoundationDisplayProp();
        this.foundationStickerSpriteURL = new URLProp();
        this.hintFacelet = new _chunkTG5KP5ILJs.HintFaceletProp();
        this.hintStickerSpriteURL = new URLProp();
        this.indexerConstructorRequest = new IndexerConstructorRequestProp();
        this.latitudeLimit = new LatitudeLimitProp();
        this.movePressInput = new MovePressInputProp();
        this.orbitCoordinatesRequest = new OrbitCoordinatesRequestProp();
        this.playingInfo = new PlayingInfoProp();
        this.puzzleDescriptionRequest = new PGPuzzleDescriptionStringProp();
        this.puzzleIDRequest = new PuzzleIDRequestProp();
        this.setupAnchor = new SetupAnchorProp();
        this.setupAlg = new AlgProp();
        this.setupTransformation = new SetupTransformationProp();
        this.stickering = new _chunkTG5KP5ILJs.StickeringProp();
        this.tempoScale = new TempoScaleProp();
        this.timestampRequest = new TimestampRequestProp();
        this.viewerLink = new ViewerLinkProp();
        this.visualizationFormat = new VisualizationFormatProp();
        this.title = new ArbitraryStringProp();
        this.videoURL = new URLProp();
        this.competitionID = new ArbitraryStringProp();
        this.foundationStickerSprite = new SpriteProp({
            spriteURL: this.foundationStickerSpriteURL
        });
        this.hintStickerSprite = new SpriteProp({
            spriteURL: this.hintStickerSpriteURL
        });
        this.puzzleLoader = new PuzzleLoaderProp({
            puzzleIDRequest: this.puzzleIDRequest,
            puzzleDescriptionRequest: this.puzzleDescriptionRequest
        }, this.userVisibleErrorTracker);
        this.kpuzzle = new KPuzzleProp({
            puzzleLoader: this.puzzleLoader
        });
        this.puzzleID = new PuzzleIDProp({
            puzzleLoader: this.puzzleLoader
        });
        this.puzzleAlg = new PuzzleAlgProp({
            algWithIssues: this.alg,
            kpuzzle: this.kpuzzle
        });
        this.puzzleSetupAlg = new PuzzleAlgProp({
            algWithIssues: this.setupAlg,
            kpuzzle: this.kpuzzle
        });
        this.visualizationStrategy = new VisualizationStrategyProp({
            visualizationRequest: this.visualizationFormat,
            puzzleID: this.puzzleID
        });
        this.indexerConstructor = new IndexerConstructorProp({
            alg: this.alg,
            puzzle: this.puzzleID,
            visualizationStrategy: this.visualizationStrategy,
            indexerConstructorRequest: this.indexerConstructorRequest
        });
        this.moveCount = new NaiveMoveCountProp({
            alg: this.puzzleAlg
        });
        this.orbitCoordinates = new OrbitCoordinatesProp({
            orbitCoordinatesRequest: this.orbitCoordinatesRequest,
            latitudeLimit: this.latitudeLimit,
            puzzleID: this.puzzleID,
            strategy: this.visualizationStrategy
        });
        this.setupAlgTransformation = new AlgTransformationProp({
            setupAlg: this.puzzleSetupAlg,
            kpuzzle: this.kpuzzle
        });
        this.indexer = new IndexerProp({
            indexerConstructor: this.indexerConstructor,
            algWithIssues: this.puzzleAlg,
            kpuzzle: this.kpuzzle
        });
        this.anchorTransformation = new AnchorTransformationProp({
            setupTransformation: this.setupTransformation,
            setupAnchor: this.setupAnchor,
            setupAlgTransformation: this.setupAlgTransformation,
            indexer: this.indexer
        });
        this.timeRange = new TimeRangeProp({
            indexer: this.indexer
        });
        this.detailedTimelineInfo = new DetailedTimelineInfoProp({
            timestampRequest: this.timestampRequest,
            timeRange: this.timeRange,
            setupAnchor: this.setupAnchor
        });
        this.coarseTimelineInfo = new CoarseTimelineInfoProp({
            detailedTimelineInfo: this.detailedTimelineInfo,
            playingInfo: this.playingInfo
        });
        this.currentMoveInfo = new CurrentMoveInfoProp({
            indexer: this.indexer,
            detailedTimelineInfo: this.detailedTimelineInfo,
            catchUpMove: this.catchUpMove
        });
        this.buttonAppearance = new ButtonAppearanceProp({
            coarseTimelineInfo: this.coarseTimelineInfo,
            viewerLink: this.viewerLink
        });
        this.currentLeavesSimplified = new CurrentLeavesSimplifiedProp({
            currentMoveInfo: this.currentMoveInfo
        });
        this.currentState = new CurrentStateProp({
            anchoredStart: this.anchorTransformation,
            currentLeavesSimplified: this.currentLeavesSimplified,
            indexer: this.indexer
        });
        this.legacyPosition = new LegacyPositionProp({
            currentMoveInfo: this.currentMoveInfo,
            state: this.currentState
        });
    }
    async twizzleLink() {
        const [viewerLink, puzzleID, puzzleDescription, alg, setup, anchor, experimentalStickering] = await Promise.all([
            this.viewerLink.get(),
            this.puzzleID.get(),
            this.puzzleDescriptionRequest.get(),
            this.alg.get(),
            this.setupAlg.get(),
            this.setupAnchor.get(),
            this.stickering.get()
        ]);
        const isExplorer = viewerLink === "experimental-twizzle-explorer";
        console.log({
            isExplorer,
            viewerLink
        });
        const url = new URL(`https://alpha.twizzle.net/${isExplorer ? "explore" : "edit"}/`);
        if (!alg.alg.experimentalIsEmpty()) url.searchParams.set("alg", alg.alg.toString());
        if (!setup.alg.experimentalIsEmpty()) url.searchParams.set("setup-alg", setup.alg.toString());
        if (anchor !== "start") url.searchParams.set("setup-anchor", anchor);
        if (experimentalStickering !== "full") url.searchParams.set("experimental-stickering", experimentalStickering);
        if (isExplorer && puzzleDescription !== _chunkTG5KP5ILJs.NO_VALUE) url.searchParams.set("puzzle-description", puzzleDescription);
        else if (puzzleID !== "3x3x3") url.searchParams.set("puzzle", puzzleID);
        return url.toString();
    }
    experimentalAddMove(flexibleMove, options = {
    }) {
        const move = typeof flexibleMove === "string" ? new _chunkEWRBHQFXJs.Move(flexibleMove) : flexibleMove;
        (async ()=>{
            const alg = (await this.alg.get()).alg;
            const newAlg = _chunkEWRBHQFXJs.experimentalAppendMove(alg, move, {
                coalesce: options?.coalesce,
                mod: options?.mod
            });
            this.alg.set(newAlg);
            this.timestampRequest.set("end");
            this.catchUpMove.set({
                move,
                amount: 0
            });
        })();
    }
    get playingInfoProp() {
        console.warn("Using deprecated prop: `playingInfoProp`. Please switch to: `playingInfo`");
        return this.playingInfo;
    }
};
// src/cubing/twisty/views/TwistyPlayerSettable.ts
function err(propName) {
    return new Error(`Cannot get \`.${propName}\` directly from a \`TwistyPlayer\`.`);
}
var TwistyPlayerSettable = class extends ManagedCustomElement {
    constructor(){
        super(...arguments);
        this.experimentalModel = new TwistyPlayerModel();
        this.experimentalGet = new ExperimentalGetters(this.experimentalModel);
    }
    set alg(newAlg) {
        this.experimentalModel.alg.set(newAlg);
    }
    get alg() {
        throw err("alg");
    }
    set experimentalSetupAlg(newSetup) {
        this.experimentalModel.setupAlg.set(newSetup);
    }
    get experimentalSetupAlg() {
        throw err("setup");
    }
    set experimentalSetupAnchor(anchor) {
        this.experimentalModel.setupAnchor.set(anchor);
    }
    get experimentalSetupAnchor() {
        throw err("anchor");
    }
    set puzzle(puzzleID) {
        this.experimentalModel.puzzleIDRequest.set(puzzleID);
    }
    get puzzle() {
        throw err("puzzle");
    }
    set experimentalPuzzleDescription(puzzleDescription) {
        this.experimentalModel.puzzleDescriptionRequest.set(puzzleDescription);
    }
    get experimentalPuzzleDescription() {
        throw err("experimentalPuzzleDescription");
    }
    set timestamp(timestamp) {
        this.experimentalModel.timestampRequest.set(timestamp);
    }
    get timestamp() {
        throw err("timestamp");
    }
    set hintFacelets(hintFaceletStyle) {
        this.experimentalModel.hintFacelet.set(hintFaceletStyle);
    }
    get hintFacelets() {
        throw err("hintFacelets");
    }
    set experimentalStickering(stickering) {
        this.experimentalModel.stickering.set(stickering);
    }
    get experimentalStickering() {
        throw err("stickering");
    }
    set backView(backView) {
        this.experimentalModel.backView.set(backView);
    }
    get backView() {
        throw err("backView");
    }
    set background(backgroundTheme) {
        this.experimentalModel.background.set(backgroundTheme);
    }
    get background() {
        throw err("background");
    }
    set controlPanel(newControlPanel) {
        this.experimentalModel.controlPanel.set(newControlPanel);
    }
    get controlPanel() {
        throw err("controlPanel");
    }
    set visualization(visualizationFormat) {
        this.experimentalModel.visualizationFormat.set(visualizationFormat);
    }
    get visualization() {
        throw err("visualization");
    }
    set experimentalTitle(title) {
        this.experimentalModel.title.set(title);
    }
    get experimentalTitle() {
        throw err("experimentalTitle");
    }
    set experimentalVideoURL(videoURL) {
        this.experimentalModel.videoURL.set(videoURL);
    }
    get experimentalVideoURL() {
        throw err("experimentalVideoURL");
    }
    set experimentalCompetitionID(competitionID) {
        this.experimentalModel.competitionID.set(competitionID);
    }
    get experimentalCompetitionID() {
        throw err("experimentalCompetitionID");
    }
    set viewerLink(viewerLinkPage) {
        this.experimentalModel.viewerLink.set(viewerLinkPage);
    }
    get viewerLink() {
        throw err("viewerLink");
    }
    set experimentalMovePressInput(movePressInput) {
        this.experimentalModel.movePressInput.set(movePressInput);
    }
    get experimentalMovePressInput() {
        throw err("experimentalMovePressInput");
    }
    set cameraLatitude(latitude) {
        this.experimentalModel.orbitCoordinatesRequest.set({
            latitude
        });
    }
    get cameraLatitude() {
        throw err("cameraLatitude");
    }
    set cameraLongitude(longitude) {
        this.experimentalModel.orbitCoordinatesRequest.set({
            longitude
        });
    }
    get cameraLongitude() {
        throw err("cameraLongitude");
    }
    set cameraDistance(distance) {
        this.experimentalModel.orbitCoordinatesRequest.set({
            distance
        });
    }
    get cameraDistance() {
        throw err("cameraDistance");
    }
    set cameraLatitudeLimit(latitudeLimit) {
        this.experimentalModel.latitudeLimit.set(latitudeLimit);
    }
    get cameraLatitudeLimit() {
        throw err("cameraLatitudeLimit");
    }
    set indexer(indexer) {
        this.experimentalModel.indexerConstructorRequest.set(indexer);
    }
    get indexer() {
        throw err("indexer");
    }
    set tempoScale(newTempoScale) {
        this.experimentalModel.tempoScale.set(newTempoScale);
    }
    get tempoScale() {
        throw err("tempoScale");
    }
    set experimentalSprite(url) {
        this.experimentalModel.foundationStickerSpriteURL.set(url);
    }
    get experimentalSprite() {
        throw err("experimentalSprite");
    }
    set experimentalHintSprite(url) {
        this.experimentalModel.hintStickerSpriteURL.set(url);
    }
    get experimentalHintSprite() {
        throw err("experimentalHintSprite");
    }
};
var ExperimentalGetters = class {
    constructor(model){
        this.model = model;
    }
    async alg() {
        return (await this.model.alg.get()).alg;
    }
    async setupAlg() {
        return (await this.model.setupAlg.get()).alg;
    }
    puzzleID() {
        return this.model.puzzleID.get();
    }
    async timestamp() {
        return (await this.model.detailedTimelineInfo.get()).timestamp;
    }
};
// src/cubing/twisty/views/TwistyPlayer.ts
var twistyPlayerAttributeMap = {
    "alg": "alg",
    "experimental-setup-alg": "experimentalSetupAlg",
    "experimental-setup-anchor": "experimentalSetupAnchor",
    "puzzle": "puzzle",
    "experimental-puzzle-description": "experimentalPuzzleDescription",
    "visualization": "visualization",
    "hint-facelets": "hintFacelets",
    "experimental-stickering": "experimentalStickering",
    "background": "background",
    "control-panel": "controlPanel",
    "back-view": "backView",
    "viewer-link": "viewerLink",
    "experimental-move-press-input": "experimentalMovePressInput",
    "experimental-title": "experimentalTitle",
    "experimental-video-url": "experimentalVideoURL",
    "experimental-competition-id": "experimentalCompetitionID",
    "camera-latitude": "cameraLatitude",
    "camera-longitude": "cameraLongitude",
    "camera-distance": "cameraDistance",
    "camera-latitude-limit": "cameraLatitudeLimit",
    "tempo-scale": "tempoScale",
    "experimental-sprite": "experimentalSprite",
    "experimental-hint-sprite": "experimentalHintSprite"
};
var configKeys = Object.fromEntries(Object.values(twistyPlayerAttributeMap).map((s)=>[
        s,
        true
    ]
));
var _controlsManager, _visualizationWrapperElem, _errorElem, _alreadyConnected, _visualizationWrapper, _visualizationStrategy, _setVisualizationWrapper, setVisualizationWrapper_fn;
var TwistyPlayer = class extends TwistyPlayerSettable {
    constructor(config = {
    }){
        super();
        _chunkWO2AXYFEJs.__privateAdd(this, _setVisualizationWrapper);
        this.controller = new TwistyPlayerController(this.experimentalModel, this);
        this.experimentalCanvasClickCallback = ()=>{
        };
        _chunkWO2AXYFEJs.__privateAdd(this, _controlsManager, new ClassListManager(this, "controls-", [
            "auto"
        ].concat(Object.keys(controlsLocations))));
        _chunkWO2AXYFEJs.__privateAdd(this, _visualizationWrapperElem, document.createElement("div"));
        _chunkWO2AXYFEJs.__privateAdd(this, _errorElem, document.createElement("div"));
        _chunkWO2AXYFEJs.__privateAdd(this, _alreadyConnected, false);
        _chunkWO2AXYFEJs.__privateAdd(this, _visualizationWrapper, null);
        _chunkWO2AXYFEJs.__privateAdd(this, _visualizationStrategy, null);
        for (const [propName, value] of Object.entries(config)){
            if (!configKeys[propName]) {
                console.warn(`Invalid config passed to TwistyPlayer: ${propName}`);
                break;
            }
            this[propName] = value;
        }
    }
    async connectedCallback() {
        if (_chunkWO2AXYFEJs.__privateGet(this, _alreadyConnected)) return;
        _chunkWO2AXYFEJs.__privateSet(this, _alreadyConnected, true);
        this.addCSS(twistyPlayerCSS);
        this.addElement(_chunkWO2AXYFEJs.__privateGet(this, _visualizationWrapperElem)).classList.add("visualization-wrapper");
        this.addElement(_chunkWO2AXYFEJs.__privateGet(this, _errorElem)).classList.add("error-elem");
        _chunkWO2AXYFEJs.__privateGet(this, _errorElem).textContent = "Error";
        this.experimentalModel.userVisibleErrorTracker.addFreshListener((userVisibleError)=>{
            const errorString = userVisibleError.errors[0] ?? null;
            this.contentWrapper.classList.toggle("error", !!errorString);
            if (errorString) _chunkWO2AXYFEJs.__privateGet(this, _errorElem).textContent = errorString;
        });
        const scrubber = new TwistyScrubber(this.experimentalModel);
        this.contentWrapper.appendChild(scrubber);
        this.buttons = new TwistyButtons(this.experimentalModel, this.controller, this);
        this.contentWrapper.appendChild(this.buttons);
        this.experimentalModel.background.addFreshListener((backgroundTheme)=>{
            this.contentWrapper.classList.toggle("checkered", backgroundTheme !== "none");
        });
        this.experimentalModel.controlPanel.addFreshListener((controlPanel)=>{
            _chunkWO2AXYFEJs.__privateGet(this, _controlsManager).setValue(controlPanel);
        });
        this.experimentalModel.visualizationStrategy.addFreshListener(_chunkWO2AXYFEJs.__privateMethod(this, _setVisualizationWrapper, setVisualizationWrapper_fn).bind(this));
        this.experimentalModel.puzzleID.addFreshListener(this.flash.bind(this));
    }
    flash() {
        _chunkWO2AXYFEJs.__privateGet(this, _visualizationWrapper)?.animate([
            {
                opacity: 0.25
            },
            {
                opacity: 1
            }
        ], {
            duration: 250
        });
    }
    async experimentalCurrentCanvases() {
        this.connectedCallback();
        const wrapper = _chunkWO2AXYFEJs.__privateGet(this, _visualizationWrapper);
        const canvases = [];
        if (wrapper instanceof Twisty3DSceneWrapper) {
            const vantages = wrapper.experimentalVantages();
            for (const vantage of vantages)canvases.push((await vantage.canvasInfo()).canvas);
        }
        return canvases;
    }
    async experimentalPG3D() {
        this.connectedCallback();
        const wrapper = _chunkWO2AXYFEJs.__privateGet(this, _visualizationWrapper);
        return null;
    }
    jumpToStart(options) {
        this.controller.jumpToStart(options);
    }
    jumpToEnd(options) {
        this.controller.jumpToEnd(options);
    }
    play() {
        this.controller.togglePlay(true);
    }
    pause() {
        this.controller.togglePlay(false);
    }
    togglePlay(play) {
        this.controller.togglePlay(play);
    }
    experimentalAddMove(flexibleMove, options = {
    }) {
        this.experimentalModel.experimentalAddMove(flexibleMove, options);
    }
    static get observedAttributes() {
        return Object.keys(twistyPlayerAttributeMap);
    }
    attributeChangedCallback(attributeName, _oldValue, newValue) {
        const setterName = twistyPlayerAttributeMap[attributeName];
        if (!setterName) return;
        this[setterName] = newValue;
    }
    async experimentalScreenshot(options) {
        return (await screenshot(this.experimentalModel, options)).dataURL;
    }
    async experimentalDownloadScreenshot(filename) {
        if ([
            "2D",
            "experimental-2D-LL"
        ].includes(await this.experimentalModel.visualizationStrategy.get())) {
            const wrapper2D = _chunkWO2AXYFEJs.__privateGet(this, _visualizationWrapper);
            const twisty2DPuzzle = await wrapper2D.currentTwisty2DPuzzleWrapper().twisty2DPuzzle();
            const str = new XMLSerializer().serializeToString(twisty2DPuzzle.svg.element);
            const url = URL.createObjectURL(new Blob([
                str
            ]));
            downloadURL(url, filename ?? await getDefaultFilename(this.experimentalModel), "svg");
        } else await (await screenshot(this.experimentalModel)).download(filename);
    }
};
_controlsManager = new WeakMap();
_visualizationWrapperElem = new WeakMap();
_errorElem = new WeakMap();
_alreadyConnected = new WeakMap();
_visualizationWrapper = new WeakMap();
_visualizationStrategy = new WeakMap();
_setVisualizationWrapper = new WeakSet();
setVisualizationWrapper_fn = function(strategy) {
    if (strategy !== _chunkWO2AXYFEJs.__privateGet(this, _visualizationStrategy)) {
        _chunkWO2AXYFEJs.__privateGet(this, _visualizationWrapper)?.remove();
        _chunkWO2AXYFEJs.__privateGet(this, _visualizationWrapper)?.disconnect();
        let newWrapper;
        switch(strategy){
            case "2D":
            case "experimental-2D-LL":
                newWrapper = new Twisty2DSceneWrapper(this.experimentalModel, strategy);
                break;
            case "Cube3D":
            case "PG3D":
                newWrapper = new Twisty3DSceneWrapper(this.experimentalModel);
                break;
            default:
                throw new Error("Invalid visualization");
        }
        _chunkWO2AXYFEJs.__privateGet(this, _visualizationWrapperElem).appendChild(newWrapper);
        _chunkWO2AXYFEJs.__privateSet(this, _visualizationWrapper, newWrapper);
        _chunkWO2AXYFEJs.__privateSet(this, _visualizationStrategy, strategy);
    }
};
customElementsShim.define("twisty-player", TwistyPlayer);
// src/cubing/twisty/views/TwistyAlgViewer.css.ts
var twistyAlgViewerCSS = new CSSSource(`
:host {
  display: inline-grid;
}

a:not(:hover) {
  color: inherit;
  text-decoration: none;
}

twisty-alg-leaf-elem.twisty-alg-comment {
  color: rgba(0, 0, 0, 0.4);
}

.wrapper.current-move {
  background: rgba(66, 133, 244, 0.3);
  margin-left: -0.1em;
  margin-right: -0.1em;
  padding-left: 0.1em;
  padding-right: 0.1em;
  border-radius: 0.1em;
}
`);
// src/cubing/twisty/views/TwistyAlgViewer.ts
var DEFAULT_OFFSET_MS = 250;
var TwistyAlgLeafElem = class extends ManagedCustomElement {
    constructor(className, text, dataDown, algOrUnit, offsetIntoMove, clickable){
        super({
            mode: "open"
        });
        this.algOrUnit = algOrUnit;
        this.classList.add(className);
        this.addCSS(twistyAlgViewerCSS);
        if (clickable) {
            const anchor = this.contentWrapper.appendChild(document.createElement("a"));
            anchor.href = "#";
            anchor.textContent = text;
            anchor.addEventListener("click", (e)=>{
                e.preventDefault();
                dataDown.twistyAlgViewer.jumpToIndex(dataDown.earliestMoveIndex, offsetIntoMove);
            });
        } else this.contentWrapper.appendChild(document.createElement("span")).textContent = text;
    }
    pathToIndex(_index) {
        return [];
    }
    setCurrentMove(current) {
        this.contentWrapper.classList.toggle("current-move", current);
    }
};
customElementsShim.define("twisty-alg-leaf-elem", TwistyAlgLeafElem);
var TwistyAlgWrapperElem = class extends HTMLElementShim {
    constructor(className, algOrUnit){
        super();
        this.algOrUnit = algOrUnit;
        this.queue = [];
        this.classList.add(className);
    }
    addString(str) {
        this.queue.push(document.createTextNode(str));
    }
    addElem(dataUp) {
        this.queue.push(dataUp.element);
        return dataUp.moveCount;
    }
    flushQueue(direction = _chunkEWRBHQFXJs.IterationDirection.Forwards) {
        for (const node of maybeReverseList(this.queue, direction))this.append(node);
        this.queue = [];
    }
    pathToIndex(_index) {
        return [];
    }
};
customElementsShim.define("twisty-alg-wrapper-elem", TwistyAlgWrapperElem);
function oppositeDirection(direction) {
    return direction === _chunkEWRBHQFXJs.IterationDirection.Forwards ? _chunkEWRBHQFXJs.IterationDirection.Backwards : _chunkEWRBHQFXJs.IterationDirection.Forwards;
}
function updateDirectionByAmount(currentDirection, amount) {
    return amount < 0 ? oppositeDirection(currentDirection) : currentDirection;
}
function maybeReverseList(l, direction) {
    if (direction === _chunkEWRBHQFXJs.IterationDirection.Forwards) return l;
    const copy = Array.from(l);
    copy.reverse();
    return copy;
}
var AlgToDOMTree = class extends _chunkEWRBHQFXJs.TraversalDownUp {
    traverseAlg(alg, dataDown) {
        let moveCount = 0;
        const element = new TwistyAlgWrapperElem("twisty-alg-alg", alg);
        let first = true;
        for (const unit of _chunkEWRBHQFXJs.direct(alg.units(), dataDown.direction)){
            if (!first) element.addString(" ");
            first = false;
            moveCount += element.addElem(this.traverseUnit(unit, {
                earliestMoveIndex: dataDown.earliestMoveIndex + moveCount,
                twistyAlgViewer: dataDown.twistyAlgViewer,
                direction: dataDown.direction
            }));
        }
        element.flushQueue(dataDown.direction);
        return {
            moveCount,
            element
        };
    }
    traverseGrouping(grouping, dataDown) {
        const square1Tuple = grouping.experimentalAsSquare1Tuple();
        const direction = updateDirectionByAmount(dataDown.direction, grouping.amount);
        let moveCount = 0;
        const element = new TwistyAlgWrapperElem("twisty-alg-grouping", grouping);
        element.addString("(");
        if (square1Tuple) {
            moveCount += element.addElem({
                moveCount: 1,
                element: new TwistyAlgLeafElem("twisty-alg-move", square1Tuple[0].amount.toString(), dataDown, square1Tuple[0], true, true)
            });
            element.addString(", ");
            moveCount += element.addElem({
                moveCount: 1,
                element: new TwistyAlgLeafElem("twisty-alg-move", square1Tuple[1].amount.toString(), dataDown, square1Tuple[1], true, true)
            });
        } else moveCount += element.addElem(this.traverseAlg(grouping.alg, {
            earliestMoveIndex: dataDown.earliestMoveIndex + moveCount,
            twistyAlgViewer: dataDown.twistyAlgViewer,
            direction
        }));
        element.addString(")" + grouping.experimentalRepetitionSuffix);
        element.flushQueue();
        return {
            moveCount: moveCount * Math.abs(grouping.amount),
            element
        };
    }
    traverseMove(move, dataDown) {
        const element = new TwistyAlgLeafElem("twisty-alg-move", move.toString(), dataDown, move, true, true);
        dataDown.twistyAlgViewer.highlighter.addMove(move.startCharIndex, element);
        return {
            moveCount: 1,
            element
        };
    }
    traverseCommutator(commutator, dataDown) {
        let moveCount = 0;
        const element = new TwistyAlgWrapperElem("twisty-alg-commutator", commutator);
        element.addString("[");
        element.flushQueue();
        const [first, second] = maybeReverseList([
            commutator.A,
            commutator.B
        ], dataDown.direction);
        moveCount += element.addElem(this.traverseAlg(first, {
            earliestMoveIndex: dataDown.earliestMoveIndex + moveCount,
            twistyAlgViewer: dataDown.twistyAlgViewer,
            direction: dataDown.direction
        }));
        element.addString(", ");
        moveCount += element.addElem(this.traverseAlg(second, {
            earliestMoveIndex: dataDown.earliestMoveIndex + moveCount,
            twistyAlgViewer: dataDown.twistyAlgViewer,
            direction: dataDown.direction
        }));
        element.flushQueue(dataDown.direction);
        element.addString("]");
        element.flushQueue();
        return {
            moveCount: moveCount * 2,
            element
        };
    }
    traverseConjugate(conjugate, dataDown) {
        let moveCount = 0;
        const element = new TwistyAlgWrapperElem("twisty-alg-conjugate", conjugate);
        element.addString("[");
        const aLen = element.addElem(this.traverseAlg(conjugate.A, {
            earliestMoveIndex: dataDown.earliestMoveIndex + moveCount,
            twistyAlgViewer: dataDown.twistyAlgViewer,
            direction: dataDown.direction
        }));
        moveCount += aLen;
        element.addString(": ");
        moveCount += element.addElem(this.traverseAlg(conjugate.B, {
            earliestMoveIndex: dataDown.earliestMoveIndex + moveCount,
            twistyAlgViewer: dataDown.twistyAlgViewer,
            direction: dataDown.direction
        }));
        element.addString("]");
        element.flushQueue();
        return {
            moveCount: moveCount + aLen,
            element
        };
    }
    traversePause(pause, dataDown) {
        return {
            moveCount: 1,
            element: new TwistyAlgLeafElem("twisty-alg-pause", ".", dataDown, pause, true, true)
        };
    }
    traverseNewline(newline, _dataDown) {
        const element = new TwistyAlgWrapperElem("twisty-alg-newline", newline);
        element.append(document.createElement("br"));
        return {
            moveCount: 0,
            element
        };
    }
    traverseLineComment(lineComment, dataDown) {
        return {
            moveCount: 0,
            element: new TwistyAlgLeafElem("twisty-alg-line-comment", `//${lineComment.text}`, dataDown, lineComment, false, false)
        };
    }
};
var algToDOMTreeInstance = new AlgToDOMTree();
var algToDOMTree = algToDOMTreeInstance.traverseAlg.bind(algToDOMTreeInstance);
var MoveHighlighter = class {
    constructor(){
        this.moveCharIndexMap = new Map();
        this.currentElem = null;
    }
    addMove(charIndex, elem) {
        this.moveCharIndexMap.set(charIndex, elem);
    }
    set(move) {
        const newElem = move ? this.moveCharIndexMap.get(move.startCharIndex) ?? null : null;
        if (this.currentElem === newElem) return;
        this.currentElem?.classList.remove("twisty-alg-current-move");
        this.currentElem?.setCurrentMove(false);
        newElem?.classList.add("twisty-alg-current-move");
        newElem?.setCurrentMove(true);
        this.currentElem = newElem;
    }
};
var _domTree;
var TwistyAlgViewer = class extends HTMLElementShim {
    constructor(options){
        super();
        this.highlighter = new MoveHighlighter();
        _chunkWO2AXYFEJs.__privateAdd(this, _domTree, void 0);
        this.twistyPlayer = null;
        this.lastClickTimestamp = null;
        if (options?.twistyPlayer) this.setTwistyPlayer(options?.twistyPlayer);
    }
    connectedCallback() {
    }
    setAlg(alg) {
        _chunkWO2AXYFEJs.__privateSet(this, _domTree, algToDOMTree(alg, {
            earliestMoveIndex: 0,
            twistyAlgViewer: this,
            direction: _chunkEWRBHQFXJs.IterationDirection.Forwards
        }).element);
        this.textContent = "";
        this.appendChild(_chunkWO2AXYFEJs.__privateGet(this, _domTree));
    }
    async setTwistyPlayer(twistyPlayer) {
        if (this.twistyPlayer) {
            console.warn("twisty-player reassignment is not supported");
            return;
        }
        this.twistyPlayer = twistyPlayer;
        this.twistyPlayer.experimentalModel.alg.addFreshListener((algWithIssues)=>{
            this.setAlg(algWithIssues.alg);
        });
        const sourceAlg = (await this.twistyPlayer.experimentalModel.alg.get()).alg;
        const parsedAlg = "startCharIndex" in sourceAlg ? sourceAlg : _chunkEWRBHQFXJs.Alg.fromString(sourceAlg.toString());
        this.setAlg(parsedAlg);
        twistyPlayer.experimentalModel.currentMoveInfo.addFreshListener((currentMoveInfo)=>{
            let moveInfo = currentMoveInfo.currentMoves[0];
            moveInfo ?? (moveInfo = currentMoveInfo.movesStarting[0]);
            moveInfo ?? (moveInfo = currentMoveInfo.movesFinishing[0]);
            if (!moveInfo) this.highlighter.set(null);
            else {
                const mainCurrentMove = moveInfo.move;
                this.highlighter.set(mainCurrentMove);
            }
        });
        twistyPlayer.experimentalModel.detailedTimelineInfo.addFreshListener((detailedTimelineInfo)=>{
            if (detailedTimelineInfo.timestamp !== this.lastClickTimestamp) this.lastClickTimestamp = null;
        });
    }
    async jumpToIndex(index, offsetIntoMove) {
        const twistyPlayer = this.twistyPlayer;
        if (twistyPlayer) {
            twistyPlayer.pause();
            const timestampPromise = (async ()=>{
                const indexer = await twistyPlayer.experimentalModel.indexer.get();
                const offset = offsetIntoMove ? DEFAULT_OFFSET_MS : 0;
                return (indexer.indexToMoveStartTimestamp(index) ?? -offset) + offset;
            })();
            twistyPlayer.experimentalModel.timestampRequest.set(await timestampPromise);
            if (this.lastClickTimestamp === await timestampPromise) {
                twistyPlayer.play();
                this.lastClickTimestamp = null;
            } else this.lastClickTimestamp = await timestampPromise;
        }
    }
    async attributeChangedCallback(attributeName, _oldValue, newValue) {
        if (attributeName === "for") {
            const elem = document.getElementById(newValue);
            if (!elem) {
                console.warn("for= elem does not exist");
                return;
            }
            await customElements.whenDefined("twisty-player");
            if (!(elem instanceof TwistyPlayer)) {
                console.warn("for= elem is not a twisty-player");
                return;
            }
            this.setTwistyPlayer(elem);
        }
    }
    static get observedAttributes() {
        return [
            "for"
        ];
    }
};
_domTree = new WeakMap();
customElementsShim.define("twisty-alg-viewer", TwistyAlgViewer);
// src/cubing/twisty/views/TwistyAlgEditor/LeafTokens.ts
var LeafTokens = class extends _chunkEWRBHQFXJs.TraversalDownUp {
    traverseAlg(alg, dataDown) {
        const unitArrays = [];
        let numMovesInside = 0;
        for (const unit of alg.units()){
            const dataUp = this.traverseUnit(unit, {
                numMovesSofar: dataDown.numMovesSofar + numMovesInside
            });
            unitArrays.push(dataUp.tokens);
            numMovesInside += dataUp.numLeavesInside;
        }
        return {
            tokens: Array.prototype.concat(...unitArrays),
            numLeavesInside: numMovesInside
        };
    }
    traverseGrouping(grouping, dataDown) {
        const dataUp = this.traverseAlg(grouping.alg, dataDown);
        return {
            tokens: dataUp.tokens,
            numLeavesInside: dataUp.numLeavesInside * grouping.amount
        };
    }
    traverseMove(move, dataDown) {
        return {
            tokens: [
                {
                    leaf: move,
                    idx: dataDown.numMovesSofar
                }
            ],
            numLeavesInside: 1
        };
    }
    traverseCommutator(commutator, dataDown) {
        const dataUpA = this.traverseAlg(commutator.A, dataDown);
        const dataUpB = this.traverseAlg(commutator.B, {
            numMovesSofar: dataDown.numMovesSofar + dataUpA.numLeavesInside
        });
        return {
            tokens: dataUpA.tokens.concat(dataUpB.tokens),
            numLeavesInside: dataUpA.numLeavesInside * 2 + dataUpB.numLeavesInside
        };
    }
    traverseConjugate(conjugate, dataDown) {
        const dataUpA = this.traverseAlg(conjugate.A, dataDown);
        const dataUpB = this.traverseAlg(conjugate.B, {
            numMovesSofar: dataDown.numMovesSofar + dataUpA.numLeavesInside
        });
        return {
            tokens: dataUpA.tokens.concat(dataUpB.tokens),
            numLeavesInside: dataUpA.numLeavesInside * 2 + dataUpB.numLeavesInside * 2
        };
    }
    traversePause(pause, dataDown) {
        return {
            tokens: [
                {
                    leaf: pause,
                    idx: dataDown.numMovesSofar
                }
            ],
            numLeavesInside: 1
        };
    }
    traverseNewline(_newline, _dataDown) {
        return {
            tokens: [],
            numLeavesInside: 0
        };
    }
    traverseLineComment(_comment, _dataDown) {
        return {
            tokens: [],
            numLeavesInside: 0
        };
    }
};
var leafTokensInstance = new LeafTokens();
var leafTokens = leafTokensInstance.traverseAlg.bind(leafTokensInstance);
// src/cubing/twisty/views/TwistyAlgEditor/model.ts
var TwistyAlgEditorValueProp = class extends _chunkTG5KP5ILJs.SimpleTwistyPropSource {
    getDefaultValue() {
        return "";
    }
};
var AlgEditorAlgWithIssuesProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    derive(input) {
        return algWithIssuesFromString(input.value);
    }
};
var TwistyAlgEditorSelectionProp = class extends _chunkTG5KP5ILJs.TwistyPropSource {
    getDefaultValue() {
        return {
            selectionStart: 0,
            selectionEnd: 0,
            endChangedMostRecently: false
        };
    }
    async derive(input, oldValue) {
        const { selectionStart , selectionEnd  } = input;
        const lastResult = await oldValue;
        const endChangedMostRecently = input.selectionStart === lastResult.selectionStart && input.selectionEnd !== (await oldValue).selectionEnd;
        return {
            selectionStart,
            selectionEnd,
            endChangedMostRecently
        };
    }
};
var TargetCharProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    derive(inputs) {
        return inputs.selectionInfo.endChangedMostRecently ? inputs.selectionInfo.selectionEnd : inputs.selectionInfo.selectionStart;
    }
};
var LeafTokensProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    derive(inputs) {
        return leafTokens(inputs.algWithIssues.alg, {
            numMovesSofar: 0
        }).tokens;
    }
};
var LeafToHighlightProp = class extends _chunkTG5KP5ILJs.TwistyPropDerived {
    derive(inputs) {
        function withWhere(leafInfo) {
            if (leafInfo === null) return null;
            let where;
            if (inputs.targetChar < leafInfo.leaf.startCharIndex) where = "before";
            else if (inputs.targetChar === leafInfo.leaf.startCharIndex) where = "start";
            else if (inputs.targetChar < leafInfo.leaf.endCharIndex) where = "inside";
            else if (inputs.targetChar === leafInfo.leaf.endCharIndex) where = "end";
            else where = "after";
            return {
                leafInfo,
                where
            };
        }
        let lastLeafInfo = null;
        for (const leafInfo1 of inputs.leafTokens){
            if (inputs.targetChar < leafInfo1.leaf.startCharIndex && lastLeafInfo !== null) return withWhere(lastLeafInfo);
            if (inputs.targetChar <= leafInfo1.leaf.endCharIndex) return withWhere(leafInfo1);
            lastLeafInfo = leafInfo1;
        }
        return withWhere(lastLeafInfo);
    }
};
var TwistyAlgEditorModel = class {
    constructor(){
        this.valueProp = new TwistyAlgEditorValueProp();
        this.selectionProp = new TwistyAlgEditorSelectionProp();
        this.targetCharProp = new TargetCharProp({
            selectionInfo: this.selectionProp
        });
        this.algEditorAlgWithIssues = new AlgEditorAlgWithIssuesProp({
            value: this.valueProp
        });
        this.leafTokensProp = new LeafTokensProp({
            algWithIssues: this.algEditorAlgWithIssues
        });
        this.leafToHighlight = new LeafToHighlightProp({
            leafTokens: this.leafTokensProp,
            targetChar: this.targetCharProp
        });
    }
};
// src/cubing/twisty/views/TwistyAlgEditor/TwistyAlgEditor.css.ts
var twistyAlgEditorCSS = new CSSSource(`
:host {
  width: 384px;
  display: grid;
}

.wrapper {
  /*overflow: hidden;
  resize: horizontal;*/

  background: var(--background, none);
  display: grid;
}

textarea, .carbon-copy {
  grid-area: 1 / 1 / 2 / 2;

  width: 100%;
  font-family: sans-serif;
  line-height: 1.2em;

  font-size: var(--font-size, inherit);
  font-family: var(--font-family, sans-serif);

  box-sizing: border-box;

  padding: var(--padding, 0.5em);
  /* Prevent horizontal growth. */
  overflow-x: hidden;
}

textarea {
  resize: none;
  background: none;
  z-index: 2;
  overflow: hidden;
  border: 1px solid var(--border-color, rgba(0, 0, 0, 0.25));
}

.carbon-copy {
  white-space: pre-wrap;
  word-wrap: break-word;
  color: transparent;
  user-select: none;
  pointer-events: none;

  z-index: 1;
}

.carbon-copy .highlight {
  background: var(--highlight-color, rgba(255, 128, 0, 0.5));
  padding: 0.1em 0.2em;
  margin: -0.1em -0.2em;
  border-radius: 0.2em;
}

.wrapper.issue-warning textarea,
.wrapper.valid-for-puzzle-warning textarea {
  outline: none;
  border: 1px solid rgba(200, 200, 0, 0.5);
  background: rgba(255, 255, 0, 0.1);
}

.wrapper.issue-error textarea,
.wrapper.valid-for-puzzle-error textarea {
  outline: none;
  border: 1px solid red;
  background: rgba(255, 0, 0, 0.1);
}
`);
// src/cubing/twisty/views/TwistyAlgEditor/TwistyAlgEditor.ts
var ATTRIBUTE_FOR_TWISTY_PLAYER = "for-twisty-player";
var ATTRIBUTE_PLACEHOLDER = "placeholder";
var ATTRIBUTE_TWISTY_PLAYER_PROP = "twisty-player-prop";
var _textarea, _carbonCopy, _carbonCopyPrefix, _carbonCopyHighlight, _carbonCopySuffix, _textareaClassListValidForPuzzleManager, _twistyPlayer, _twistyPlayerProp, _algProp, algProp_get, _onInputHasFired, _padSuffix, padSuffix_fn, _highlightedLeaf;
var TwistyAlgEditor = class extends ManagedCustomElement {
    constructor(options){
        super();
        _chunkWO2AXYFEJs.__privateAdd(this, _algProp);
        _chunkWO2AXYFEJs.__privateAdd(this, _padSuffix);
        this.model = new TwistyAlgEditorModel();
        _chunkWO2AXYFEJs.__privateAdd(this, _textarea, document.createElement("textarea"));
        _chunkWO2AXYFEJs.__privateAdd(this, _carbonCopy, document.createElement("div"));
        _chunkWO2AXYFEJs.__privateAdd(this, _carbonCopyPrefix, document.createElement("span"));
        _chunkWO2AXYFEJs.__privateAdd(this, _carbonCopyHighlight, document.createElement("span"));
        _chunkWO2AXYFEJs.__privateAdd(this, _carbonCopySuffix, document.createElement("span"));
        _chunkWO2AXYFEJs.__privateAdd(this, _textareaClassListValidForPuzzleManager, new ClassListManager(this, "valid-for-puzzle-", [
            "none",
            "warning",
            "error"
        ]));
        _chunkWO2AXYFEJs.__privateAdd(this, _twistyPlayer, null);
        _chunkWO2AXYFEJs.__privateAdd(this, _twistyPlayerProp, void 0);
        this.debugNeverRequestTimestamp = false;
        _chunkWO2AXYFEJs.__privateAdd(this, _onInputHasFired, false);
        _chunkWO2AXYFEJs.__privateAdd(this, _highlightedLeaf, null);
        _chunkWO2AXYFEJs.__privateGet(this, _carbonCopy).classList.add("carbon-copy");
        this.addElement(_chunkWO2AXYFEJs.__privateGet(this, _carbonCopy));
        _chunkWO2AXYFEJs.__privateGet(this, _textarea).rows = 1;
        this.addElement(_chunkWO2AXYFEJs.__privateGet(this, _textarea));
        _chunkWO2AXYFEJs.__privateGet(this, _carbonCopyPrefix).classList.add("prefix");
        _chunkWO2AXYFEJs.__privateGet(this, _carbonCopy).appendChild(_chunkWO2AXYFEJs.__privateGet(this, _carbonCopyPrefix));
        _chunkWO2AXYFEJs.__privateGet(this, _carbonCopyHighlight).classList.add("highlight");
        _chunkWO2AXYFEJs.__privateGet(this, _carbonCopy).appendChild(_chunkWO2AXYFEJs.__privateGet(this, _carbonCopyHighlight));
        _chunkWO2AXYFEJs.__privateGet(this, _carbonCopySuffix).classList.add("suffix");
        _chunkWO2AXYFEJs.__privateGet(this, _carbonCopy).appendChild(_chunkWO2AXYFEJs.__privateGet(this, _carbonCopySuffix));
        _chunkWO2AXYFEJs.__privateGet(this, _textarea).placeholder = "Alg";
        _chunkWO2AXYFEJs.__privateGet(this, _textarea).setAttribute("spellcheck", "false");
        this.addCSS(twistyAlgEditorCSS);
        _chunkWO2AXYFEJs.__privateGet(this, _textarea).addEventListener("input", ()=>{
            _chunkWO2AXYFEJs.__privateSet(this, _onInputHasFired, true);
            this.onInput();
        });
        _chunkWO2AXYFEJs.__privateGet(this, _textarea).addEventListener("blur", ()=>this.onBlur()
        );
        document.addEventListener("selectionchange", ()=>this.onSelectionChange()
        );
        if (options?.twistyPlayer) this.twistyPlayer = options.twistyPlayer;
        _chunkWO2AXYFEJs.__privateSet(this, _twistyPlayerProp, options?.twistyPlayerProp ?? "alg");
        if (options?.twistyPlayerProp === "alg") this.model.leafToHighlight.addFreshListener((highlightInfo)=>{
            if (highlightInfo) this.highlightLeaf(highlightInfo.leafInfo.leaf);
        });
    }
    set algString(s) {
        _chunkWO2AXYFEJs.__privateGet(this, _textarea).value = s;
        this.onInput();
    }
    get algString() {
        return _chunkWO2AXYFEJs.__privateGet(this, _textarea).value;
    }
    set placeholder(placeholderText) {
        _chunkWO2AXYFEJs.__privateGet(this, _textarea).placeholder = placeholderText;
    }
    onInput() {
        _chunkWO2AXYFEJs.__privateGet(this, _carbonCopyHighlight).hidden = true;
        this.highlightLeaf(null);
        const endTrimmed = _chunkWO2AXYFEJs.__privateGet(this, _textarea).value.trimEnd();
        this.model.valueProp.set(endTrimmed);
        _chunkWO2AXYFEJs.__privateGet(this, _algProp, algProp_get)?.set(endTrimmed);
    }
    async onSelectionChange() {
        if (document.activeElement !== this || this.shadow.activeElement !== _chunkWO2AXYFEJs.__privateGet(this, _textarea)) return;
        if (_chunkWO2AXYFEJs.__privateGet(this, _twistyPlayerProp) !== "alg") return;
        const { selectionStart , selectionEnd  } = _chunkWO2AXYFEJs.__privateGet(this, _textarea);
        this.model.selectionProp.set({
            selectionStart,
            selectionEnd
        });
    }
    async onBlur() {
    }
    setAlgIssueClassForPuzzle(issues) {
        _chunkWO2AXYFEJs.__privateGet(this, _textareaClassListValidForPuzzleManager).setValue(issues);
    }
    highlightLeaf(leaf) {
        if (_chunkWO2AXYFEJs.__privateGet(this, _twistyPlayerProp) !== "alg") return;
        if (leaf === null) {
            _chunkWO2AXYFEJs.__privateGet(this, _carbonCopyPrefix).textContent = "";
            _chunkWO2AXYFEJs.__privateGet(this, _carbonCopyHighlight).textContent = "";
            _chunkWO2AXYFEJs.__privateGet(this, _carbonCopySuffix).textContent = _chunkWO2AXYFEJs.__privateMethod(this, _padSuffix, padSuffix_fn).call(this, _chunkWO2AXYFEJs.__privateGet(this, _textarea).value);
            return;
        }
        if (leaf === _chunkWO2AXYFEJs.__privateGet(this, _highlightedLeaf)) return;
        _chunkWO2AXYFEJs.__privateSet(this, _highlightedLeaf, leaf);
        _chunkWO2AXYFEJs.__privateGet(this, _carbonCopyPrefix).textContent = _chunkWO2AXYFEJs.__privateGet(this, _textarea).value.slice(0, leaf.startCharIndex);
        _chunkWO2AXYFEJs.__privateGet(this, _carbonCopyHighlight).textContent = _chunkWO2AXYFEJs.__privateGet(this, _textarea).value.slice(leaf.startCharIndex, leaf.endCharIndex);
        _chunkWO2AXYFEJs.__privateGet(this, _carbonCopySuffix).textContent = _chunkWO2AXYFEJs.__privateMethod(this, _padSuffix, padSuffix_fn).call(this, _chunkWO2AXYFEJs.__privateGet(this, _textarea).value.slice(leaf.endCharIndex));
        _chunkWO2AXYFEJs.__privateGet(this, _carbonCopyHighlight).hidden = false;
    }
    get twistyPlayer() {
        return _chunkWO2AXYFEJs.__privateGet(this, _twistyPlayer);
    }
    set twistyPlayer(twistyPlayer) {
        if (_chunkWO2AXYFEJs.__privateGet(this, _twistyPlayer)) {
            console.warn("twisty-player reassignment/clearing is not supported");
            return;
        }
        _chunkWO2AXYFEJs.__privateSet(this, _twistyPlayer, twistyPlayer);
        if (!twistyPlayer) return;
        (async ()=>{
            this.algString = _chunkWO2AXYFEJs.__privateGet(this, _algProp, algProp_get) ? (await _chunkWO2AXYFEJs.__privateGet(this, _algProp, algProp_get).get()).alg.toString() : "";
        })();
        if (_chunkWO2AXYFEJs.__privateGet(this, _twistyPlayerProp) === "alg") {
            _chunkWO2AXYFEJs.__privateGet(this, _twistyPlayer)?.experimentalModel.puzzleAlg.addFreshListener((algWithIssues)=>{
                if (algWithIssues.issues.errors.length === 0) {
                    this.setAlgIssueClassForPuzzle(algWithIssues.issues.warnings.length === 0 ? "none" : "warning");
                    const newAlg = algWithIssues.alg;
                    const oldAlg = _chunkEWRBHQFXJs.Alg.fromString(this.algString);
                    if (!newAlg.isIdentical(oldAlg)) {
                        this.algString = newAlg.toString();
                        this.onInput();
                    }
                } else this.setAlgIssueClassForPuzzle("error");
            });
            this.model.leafToHighlight.addFreshListener(async (highlightInfo)=>{
                if (highlightInfo === null) return;
                const [indexer, timestampRequest] = await Promise.all([
                    await twistyPlayer.experimentalModel.indexer.get(),
                    await twistyPlayer.experimentalModel.timestampRequest.get()
                ]);
                if (timestampRequest === "opposite-anchor" && !_chunkWO2AXYFEJs.__privateGet(this, _onInputHasFired)) return;
                const moveStartTimestamp = indexer.indexToMoveStartTimestamp(highlightInfo.leafInfo.idx);
                const duration = indexer.moveDuration(highlightInfo.leafInfo.idx);
                let newTimestamp;
                switch(highlightInfo.where){
                    case "before":
                        newTimestamp = moveStartTimestamp;
                        break;
                    case "start":
                    case "inside":
                        newTimestamp = moveStartTimestamp + duration / 4;
                        break;
                    case "end":
                    case "after":
                        newTimestamp = moveStartTimestamp + duration;
                        break;
                    default:
                        console.log("invalid where");
                        throw new Error("Invalid where!");
                }
                if (!this.debugNeverRequestTimestamp) twistyPlayer.experimentalModel.timestampRequest.set(newTimestamp);
            });
            twistyPlayer.experimentalModel.currentLeavesSimplified.addFreshListener(async (currentLeavesSimplified)=>{
                const indexer = await twistyPlayer.experimentalModel.indexer.get();
                const leaf = indexer.getAnimLeaf(currentLeavesSimplified.stateIndex);
                this.highlightLeaf(leaf);
            });
        }
    }
    attributeChangedCallback(attributeName, _oldValue, newValue) {
        switch(attributeName){
            case ATTRIBUTE_FOR_TWISTY_PLAYER:
                {
                    const elem = document.getElementById(newValue);
                    if (!elem) {
                        console.warn(`${ATTRIBUTE_FOR_TWISTY_PLAYER}= elem does not exist`);
                        return;
                    }
                    if (!(elem instanceof TwistyPlayer)) {
                        console.warn(`${ATTRIBUTE_FOR_TWISTY_PLAYER}=is not a twisty-player`);
                        return;
                    }
                    this.twistyPlayer = elem;
                    return;
                }
            case ATTRIBUTE_PLACEHOLDER:
                this.placeholder = newValue;
                return;
            case ATTRIBUTE_TWISTY_PLAYER_PROP:
                if (_chunkWO2AXYFEJs.__privateGet(this, _twistyPlayer)) {
                    console.log("cannot set prop");
                    throw new Error("cannot set prop after twisty player");
                }
                _chunkWO2AXYFEJs.__privateSet(this, _twistyPlayerProp, newValue);
                return;
        }
    }
    static get observedAttributes() {
        return [
            ATTRIBUTE_FOR_TWISTY_PLAYER,
            ATTRIBUTE_PLACEHOLDER,
            ATTRIBUTE_TWISTY_PLAYER_PROP
        ];
    }
};
_textarea = new WeakMap();
_carbonCopy = new WeakMap();
_carbonCopyPrefix = new WeakMap();
_carbonCopyHighlight = new WeakMap();
_carbonCopySuffix = new WeakMap();
_textareaClassListValidForPuzzleManager = new WeakMap();
_twistyPlayer = new WeakMap();
_twistyPlayerProp = new WeakMap();
_algProp = new WeakSet();
algProp_get = function() {
    if (_chunkWO2AXYFEJs.__privateGet(this, _twistyPlayer) === null) return null;
    else return _chunkWO2AXYFEJs.__privateGet(this, _twistyPlayer).experimentalModel[_chunkWO2AXYFEJs.__privateGet(this, _twistyPlayerProp)];
};
_onInputHasFired = new WeakMap();
_padSuffix = new WeakSet();
padSuffix_fn = function(s) {
    return s.endsWith("\n") ? s + " " : s;
};
_highlightedLeaf = new WeakMap();
customElementsShim.define("twisty-alg-editor", TwistyAlgEditor);
// src/cubing/twisty/views/twizzle/TwizzleLink.css.ts
var twizzleLinkCSS = new CSSSource(`
.wrapper {
  background: rgb(255, 245, 235);
  display: grid;
  grid-template-columns: 1fr;
  border: 1px solid rgba(0, 0, 0, 0.25);
}

.setup-alg, twisty-alg-viewer {
  padding: 0.5em 1em;
}

.heading {
  background: rgba(255, 230, 210, 1);
  font-weight: bold;
  padding: 0.25em 0.5em;
}

.heading.title {
  background: rgb(255, 245, 235);
  font-size: 150%;
  white-space: pre;
}

twisty-player {
  width: 100%;
  resize: vertical;
  overflow-y: hidden;
}

twisty-player + .heading {
  padding-top: 0.5em;
}
`);
// src/cubing/twisty/views/twizzle/url-params.ts
function updateURL(url) {
    window.history.replaceState("", "", url.toString());
}
var _prefix;
var URLParamUpdater = class {
    constructor(model, options){
        _chunkWO2AXYFEJs.__privateAdd(this, _prefix, void 0);
        _chunkWO2AXYFEJs.__privateSet(this, _prefix, options?.prefix ?? "");
        this.listenToAlgProp(model.alg, "alg");
        this.listenToAlgProp(model.setupAlg, "setup-alg");
        this.listenToStringSourceProp(model.stickering, "stickering");
        this.listenToStringSourceProp(model.setupAnchor, "setup-anchor");
        this.listenToStringOrNoValueProp(model.puzzleIDRequest, "puzzle", _chunkTG5KP5ILJs.NO_VALUE);
        this.listenToStringOrNoValueProp(model.puzzleDescriptionRequest, "puzzle-description", _chunkTG5KP5ILJs.NO_VALUE);
    }
    setURLParam(unprefixedKey, value, defaultString) {
        const prefixedKey = _chunkWO2AXYFEJs.__privateGet(this, _prefix) + unprefixedKey;
        const url = new URL(location.href);
        if (value === defaultString) url.searchParams.delete(prefixedKey);
        else url.searchParams.set(prefixedKey, value);
        updateURL(url);
    }
    async listenToStringSourceProp(prop, key, defaultString) {
        const actualDefaultString = defaultString ?? await prop.getDefaultValue();
        prop.addFreshListener((s)=>{
            this.setURLParam(key, s, actualDefaultString);
        });
    }
    async listenToStringOrNoValueProp(prop, key, defaultString) {
        prop.addFreshListener((s)=>{
            if (s === _chunkTG5KP5ILJs.NO_VALUE) s = defaultString;
            if (s === _chunkTG5KP5ILJs.NO_VALUE) this.setURLParam(key, "", "");
            else this.setURLParam(key, s, "");
        });
    }
    listenToAlgProp(prop, key) {
        prop.addFreshListener((algWithIssues)=>{
            this.setURLParam(key, algWithIssues.alg.toString(), "");
        });
    }
};
_prefix = new WeakMap();
function getConfigFromURL(prefix = "", url = location.href) {
    const paramMapping = {
        "alg": "alg",
        "setup-alg": "experimental-setup-alg",
        "setup-anchor": "experimental-setup-anchor",
        "puzzle": "puzzle",
        "stickering": "experimental-stickering",
        "puzzle-description": "experimental-puzzle-description",
        "title": "experimental-title",
        "video-url": "experimental-video-url",
        "competition": "experimental-competition-id"
    };
    const params = new URL(url).searchParams;
    const config = {
    };
    for (const [ourParam, twistyPlayerParam] of Object.entries(paramMapping)){
        const paramValue = params.get(prefix + ourParam);
        if (paramValue !== null) {
            const configKey = twistyPlayerAttributeMap[twistyPlayerParam];
            config[configKey] = paramValue;
        }
    }
    return config;
}
// src/cubing/twisty/views/twizzle/TwizzleLink.ts
var _cssElem;
var TwizzleLink = class extends ManagedCustomElement {
    constructor(){
        super({
            mode: "open"
        });
        this.twistyPlayer = null;
        this.a = null;
        _chunkWO2AXYFEJs.__privateAdd(this, _cssElem, void 0);
    }
    fallback() {
        this.contentWrapper.textContent = "";
        if (this.a) {
            const span = this.contentWrapper.appendChild(document.createElement("span"));
            span.textContent = "\u2757\uFE0F";
            span.title = "Could not show a player for link";
            this.addElement(this.a);
        }
        if (_chunkWO2AXYFEJs.__privateGet(this, _cssElem)) _chunkWO2AXYFEJs.__privateGet(this, _cssElem).remove();
    }
    async connectedCallback() {
        _chunkWO2AXYFEJs.__privateSet(this, _cssElem, this.addCSS(twizzleLinkCSS));
        this.a = this.querySelector("a");
        if (!this.a) return;
        const config = getConfigFromURL("", this.a.href);
        const href = this.a?.href;
        const { hostname , pathname  } = new URL(href);
        if (hostname !== "alpha.twizzle.net") {
            this.fallback();
            return;
        }
        if ([
            "/edit/",
            "/explore/"
        ].includes(pathname)) {
            const isExplorer = pathname === "/explore/";
            if (config.puzzle && !(config.puzzle in _chunkBOKO2BWTJs.puzzles)) {
                const puzzleDescription = (await require("bd25620693ce8080")).getPuzzleDescriptionString(config.puzzle);
                delete config.puzzle;
                config.experimentalPuzzleDescription = puzzleDescription;
            }
            this.twistyPlayer = this.addElement(new TwistyPlayer({
                ...config,
                viewerLink: isExplorer ? "experimental-twizzle-explorer" : "auto"
            }));
            if (config.experimentalTitle) this.addHeading(config.experimentalTitle).classList.add("title");
            if (config.experimentalSetupAlg) {
                this.addHeading("Setup");
                const setupAlgDiv = this.addElement(document.createElement("div"));
                setupAlgDiv.classList.add("setup-alg");
                setupAlgDiv.textContent = new _chunkEWRBHQFXJs.Alg(config.experimentalSetupAlg).toString();
            }
            this.addHeading("Moves");
            const twistyAlgViewer = this.addElement(new TwistyAlgViewer({
                twistyPlayer: this.twistyPlayer
            }));
            twistyAlgViewer.part.add("twisty-alg-viewer");
        } else this.fallback();
    }
    addHeading(text) {
        const headingDiv = this.addElement(document.createElement("div"));
        headingDiv.classList.add("heading");
        headingDiv.textContent = text;
        return headingDiv;
    }
};
_cssElem = new WeakMap();
customElementsShim.define("twizzle-link", TwizzleLink);

},{"../chunk-TG5KP5IL.js":"8ziGA","../chunk-U2TSTTDG.js":"98U7N","../chunk-BOKO2BWT.js":"abt9g","../chunk-FE3HTWQK.js":"jNiOS","../chunk-EWRBHQFX.js":"i6QEj","../chunk-WO2AXYFE.js":"dbeiO","bd25620693ce8080":"oRh2V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ziGA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StaleDropper", ()=>StaleDropper
);
parcelHelpers.export(exports, "TwistyPropSource", ()=>TwistyPropSource
);
parcelHelpers.export(exports, "SimpleTwistyPropSource", ()=>SimpleTwistyPropSource
);
parcelHelpers.export(exports, "NO_VALUE", ()=>NO_VALUE
);
parcelHelpers.export(exports, "TwistyPropDerived", ()=>TwistyPropDerived
);
parcelHelpers.export(exports, "FreshListenerManager", ()=>FreshListenerManager
);
parcelHelpers.export(exports, "hintFaceletStyles", ()=>hintFaceletStyles
);
parcelHelpers.export(exports, "HintFaceletProp", ()=>HintFaceletProp
);
parcelHelpers.export(exports, "experimentalStickerings", ()=>experimentalStickerings
);
parcelHelpers.export(exports, "StickeringProp", ()=>StickeringProp
);
parcelHelpers.export(exports, "TAU", ()=>TAU
);
parcelHelpers.export(exports, "DEGREES_PER_RADIAN", ()=>DEGREES_PER_RADIAN
);
parcelHelpers.export(exports, "proxy3D", ()=>proxy3D
);
parcelHelpers.export(exports, "THREEJS", ()=>THREEJS
);
var _chunkWO2AXYFEJs = require("./chunk-WO2AXYFE.js");
// src/cubing/vendor/p-lazy/p-lazy.ts
var PLazy = class extends Promise {
    constructor(executor){
        super((resolve)=>{
            resolve();
        });
        this._executor = executor;
    }
    static from(function_) {
        return new PLazy((resolve)=>{
            resolve(function_());
        });
    }
    static resolve(value) {
        return new PLazy((resolve)=>{
            resolve(value);
        });
    }
    static reject(error) {
        return new PLazy((_resolve, reject)=>{
            reject(error);
        });
    }
    then(onFulfilled, onRejected) {
        this._promise = this._promise || new Promise(this._executor);
        return this._promise.then(onFulfilled, onRejected);
    }
    catch(onRejected) {
        this._promise = this._promise || new Promise(this._executor);
        return this._promise.catch(onRejected);
    }
};
function from(function_) {
    return new PLazy((resolve)=>{
        resolve(function_());
    });
}
// src/cubing/twisty/model/PromiseFreshener.ts
var _latestAssignedIdx, _latestResolvedIdx;
var PromiseFreshener = class {
    constructor(){
        _chunkWO2AXYFEJs.__privateAdd(this, _latestAssignedIdx, 0);
        _chunkWO2AXYFEJs.__privateAdd(this, _latestResolvedIdx, 0);
    }
    async queue(p) {
        const idx = ++_chunkWO2AXYFEJs.__privateWrapper(this, _latestAssignedIdx)._;
        const result = await p;
        if (idx > _chunkWO2AXYFEJs.__privateGet(this, _latestResolvedIdx)) {
            _chunkWO2AXYFEJs.__privateSet(this, _latestResolvedIdx, idx);
            return {
                fresh: true,
                result
            };
        } else return {
            fresh: false
        };
    }
};
_latestAssignedIdx = new WeakMap();
_latestResolvedIdx = new WeakMap();
var _latestAssignedIdx2, _latestResolvedIdx2;
var StaleDropper = class {
    constructor(){
        _chunkWO2AXYFEJs.__privateAdd(this, _latestAssignedIdx2, 0);
        _chunkWO2AXYFEJs.__privateAdd(this, _latestResolvedIdx2, 0);
    }
    queue(p) {
        return new Promise(async (resolve, reject)=>{
            try {
                const idx = ++_chunkWO2AXYFEJs.__privateWrapper(this, _latestAssignedIdx2)._;
                const result = await p;
                if (idx > _chunkWO2AXYFEJs.__privateGet(this, _latestResolvedIdx2)) {
                    _chunkWO2AXYFEJs.__privateSet(this, _latestResolvedIdx2, idx);
                    resolve(result);
                }
            } catch (e) {
                reject(e);
            }
        });
    }
};
_latestAssignedIdx2 = new WeakMap();
_latestResolvedIdx2 = new WeakMap();
// src/cubing/twisty/model/props/TwistyProp.ts
var globalSourceGeneration = 0;
var _children, _rawListeners, _scheduleRawDispatch, scheduleRawDispatch_fn, _rawDispatchPending, _dispatchRawListeners, dispatchRawListeners_fn, _freshListeners;
var TwistyPropParent = class {
    constructor(){
        _chunkWO2AXYFEJs.__privateAdd(this, _scheduleRawDispatch);
        _chunkWO2AXYFEJs.__privateAdd(this, _dispatchRawListeners);
        _chunkWO2AXYFEJs.__privateAdd(this, _children, new Set());
        this.lastSourceGeneration = 0;
        _chunkWO2AXYFEJs.__privateAdd(this, _rawListeners, new Set());
        _chunkWO2AXYFEJs.__privateAdd(this, _rawDispatchPending, false);
        _chunkWO2AXYFEJs.__privateAdd(this, _freshListeners, new Map());
    }
    canReuse(v1, v2) {
        return v1 === v2 || this.canReuseValue(v1, v2);
    }
    canReuseValue(_v1, _v2) {
        return false;
    }
    debugGetChildren() {
        return Array.from(_chunkWO2AXYFEJs.__privateGet(this, _children).values());
    }
    addChild(child) {
        _chunkWO2AXYFEJs.__privateGet(this, _children).add(child);
    }
    removeChild(child) {
        _chunkWO2AXYFEJs.__privateGet(this, _children).delete(child);
    }
    markStale(sourceEvent) {
        if (sourceEvent.detail.generation !== globalSourceGeneration) throw new Error("A TwistyProp was marked stale too late!");
        if (this.lastSourceGeneration === sourceEvent.detail.generation) return;
        this.lastSourceGeneration = sourceEvent.detail.generation;
        for (const child of _chunkWO2AXYFEJs.__privateGet(this, _children))child.markStale(sourceEvent);
        _chunkWO2AXYFEJs.__privateMethod(this, _scheduleRawDispatch, scheduleRawDispatch_fn).call(this);
    }
    addRawListener(listener, options) {
        _chunkWO2AXYFEJs.__privateGet(this, _rawListeners).add(listener);
        if (options?.initial) listener();
    }
    removeRawListener(listener) {
        _chunkWO2AXYFEJs.__privateGet(this, _rawListeners).delete(listener);
    }
    addFreshListener(listener) {
        const staleDropper = new StaleDropper();
        let lastResult = null;
        const callback = async ()=>{
            const result = await staleDropper.queue(this.get());
            if (lastResult !== null && this.canReuse(lastResult, result)) return;
            lastResult = result;
            listener(result);
        };
        _chunkWO2AXYFEJs.__privateGet(this, _freshListeners).set(listener, callback);
        this.addRawListener(callback, {
            initial: true
        });
    }
    removeFreshListener(listener) {
        this.removeRawListener(_chunkWO2AXYFEJs.__privateGet(this, _freshListeners).get(listener));
        _chunkWO2AXYFEJs.__privateGet(this, _freshListeners).delete(listener);
    }
};
_children = new WeakMap();
_rawListeners = new WeakMap();
_scheduleRawDispatch = new WeakSet();
scheduleRawDispatch_fn = function() {
    if (!_chunkWO2AXYFEJs.__privateGet(this, _rawDispatchPending)) {
        _chunkWO2AXYFEJs.__privateSet(this, _rawDispatchPending, true);
        setTimeout(()=>_chunkWO2AXYFEJs.__privateMethod(this, _dispatchRawListeners, dispatchRawListeners_fn).call(this)
        , 0);
    }
};
_rawDispatchPending = new WeakMap();
_dispatchRawListeners = new WeakSet();
dispatchRawListeners_fn = function() {
    if (!_chunkWO2AXYFEJs.__privateGet(this, _rawDispatchPending)) throw new Error("Invalid dispatch state!");
    for (const listener of _chunkWO2AXYFEJs.__privateGet(this, _rawListeners))listener();
    _chunkWO2AXYFEJs.__privateSet(this, _rawDispatchPending, false);
};
_freshListeners = new WeakMap();
var _value;
var TwistyPropSource = class extends TwistyPropParent {
    constructor(initialValue){
        super();
        _chunkWO2AXYFEJs.__privateAdd(this, _value, void 0);
        _chunkWO2AXYFEJs.__privateSet(this, _value, from(()=>this.getDefaultValue()
        ));
        if (initialValue) _chunkWO2AXYFEJs.__privateSet(this, _value, this.deriveFromPromiseOrValue(initialValue, _chunkWO2AXYFEJs.__privateGet(this, _value)));
    }
    set(input) {
        _chunkWO2AXYFEJs.__privateSet(this, _value, this.deriveFromPromiseOrValue(input, _chunkWO2AXYFEJs.__privateGet(this, _value)));
        const sourceEventDetail = {
            sourceProp: this,
            value: _chunkWO2AXYFEJs.__privateGet(this, _value),
            generation: ++globalSourceGeneration
        };
        this.markStale(new CustomEvent("stale", {
            detail: sourceEventDetail
        }));
    }
    async get() {
        return _chunkWO2AXYFEJs.__privateGet(this, _value);
    }
    async deriveFromPromiseOrValue(input, oldValuePromise) {
        return this.derive(await input, oldValuePromise);
    }
};
_value = new WeakMap();
var SimpleTwistyPropSource = class extends TwistyPropSource {
    derive(input) {
        return input;
    }
};
var NO_VALUE = Symbol("no value");
var _parents, _cachedLastSuccessfulCalculation, _cachedLatestGenerationCalculation, _getParents, getParents_fn, _cacheDerive, cacheDerive_fn;
var TwistyPropDerived = class extends TwistyPropParent {
    constructor(parents, userVisibleErrorTracker){
        super();
        this.userVisibleErrorTracker = userVisibleErrorTracker;
        _chunkWO2AXYFEJs.__privateAdd(this, _getParents);
        _chunkWO2AXYFEJs.__privateAdd(this, _cacheDerive);
        _chunkWO2AXYFEJs.__privateAdd(this, _parents, void 0);
        _chunkWO2AXYFEJs.__privateAdd(this, _cachedLastSuccessfulCalculation, null);
        _chunkWO2AXYFEJs.__privateAdd(this, _cachedLatestGenerationCalculation, null);
        _chunkWO2AXYFEJs.__privateSet(this, _parents, parents);
        for (const parent of Object.values(parents))parent.addChild(this);
    }
    async get() {
        const generation = this.lastSourceGeneration;
        if (_chunkWO2AXYFEJs.__privateGet(this, _cachedLatestGenerationCalculation)?.generation === generation) return _chunkWO2AXYFEJs.__privateGet(this, _cachedLatestGenerationCalculation).output;
        const latestGenerationCalculation = {
            generation,
            output: _chunkWO2AXYFEJs.__privateMethod(this, _cacheDerive, cacheDerive_fn).call(this, _chunkWO2AXYFEJs.__privateMethod(this, _getParents, getParents_fn).call(this), generation, _chunkWO2AXYFEJs.__privateGet(this, _cachedLastSuccessfulCalculation))
        };
        _chunkWO2AXYFEJs.__privateSet(this, _cachedLatestGenerationCalculation, latestGenerationCalculation);
        this.userVisibleErrorTracker?.reset();
        return latestGenerationCalculation.output;
    }
};
_parents = new WeakMap();
_cachedLastSuccessfulCalculation = new WeakMap();
_cachedLatestGenerationCalculation = new WeakMap();
_getParents = new WeakSet();
getParents_fn = async function() {
    const inputValuePromises = {
    };
    for (const [key, parent] of Object.entries(_chunkWO2AXYFEJs.__privateGet(this, _parents)))inputValuePromises[key] = parent.get();
    const inputs = {
    };
    for(const key1 in _chunkWO2AXYFEJs.__privateGet(this, _parents))inputs[key1] = await inputValuePromises[key1];
    return inputs;
};
_cacheDerive = new WeakSet();
cacheDerive_fn = async function(inputsPromise, generation, cachedLatestGenerationCalculation = null) {
    const inputs = await inputsPromise;
    const cache = (output)=>{
        _chunkWO2AXYFEJs.__privateSet(this, _cachedLastSuccessfulCalculation, {
            inputs,
            output: Promise.resolve(output),
            generation
        });
        return output;
    };
    if (!cachedLatestGenerationCalculation) return cache(await this.derive(inputs));
    const cachedInputs = cachedLatestGenerationCalculation.inputs;
    for(const key in _chunkWO2AXYFEJs.__privateGet(this, _parents)){
        const parent = _chunkWO2AXYFEJs.__privateGet(this, _parents)[key];
        if (!parent.canReuse(inputs[key], cachedInputs[key])) return cache(await this.derive(inputs));
    }
    return cachedLatestGenerationCalculation.output;
};
var _disconnectionFunctions;
var FreshListenerManager = class {
    constructor(){
        _chunkWO2AXYFEJs.__privateAdd(this, _disconnectionFunctions, []);
    }
    addListener(prop, listener) {
        let disconnected = false;
        const wrappedListener = (value)=>{
            if (disconnected) return;
            listener(value);
        };
        prop.addFreshListener(wrappedListener);
        _chunkWO2AXYFEJs.__privateGet(this, _disconnectionFunctions).push(()=>{
            prop.removeFreshListener(wrappedListener);
            disconnected = true;
        });
    }
    addMultiListener(props, listener) {
        let disconnected = false;
        let initialIgnoresLeft = props.length - 1;
        const wrappedListener = async (_)=>{
            if (initialIgnoresLeft > 0) {
                initialIgnoresLeft--;
                return;
            }
            if (disconnected) return;
            const promises = props.map((prop)=>prop.get()
            );
            const values = await Promise.all(promises);
            listener(values);
        };
        for (const prop1 of props)prop1.addFreshListener(wrappedListener);
        _chunkWO2AXYFEJs.__privateGet(this, _disconnectionFunctions).push(()=>{
            for (const prop of props)prop.removeFreshListener(wrappedListener);
            disconnected = true;
        });
    }
    disconnect() {
        for (const disconnectionFunction of _chunkWO2AXYFEJs.__privateGet(this, _disconnectionFunctions))disconnectionFunction();
    }
};
_disconnectionFunctions = new WeakMap();
// src/cubing/twisty/model/props/puzzle/display/StickeringProp.ts
var experimentalStickerings = {
    "full": true,
    "centers-only": true,
    "PLL": true,
    "CLS": true,
    "OLL": true,
    "COLL": true,
    "OCLL": true,
    "CLL": true,
    "ELL": true,
    "ELS": true,
    "LL": true,
    "F2L": true,
    "ZBLL": true,
    "ZBLS": true,
    "WVLS": true,
    "VLS": true,
    "LS": true,
    "EO": true,
    "EOline": true,
    "EOcross": true,
    "CMLL": true,
    "L6E": true,
    "L6EO": true,
    "Daisy": true,
    "Cross": true,
    "2x2x2": true,
    "2x2x3": true,
    "Void Cube": true,
    "invisible": true,
    "picture": true,
    "experimental-centers-U": true,
    "experimental-centers-U-D": true,
    "experimental-centers-U-L-D": true,
    "experimental-centers-U-L-B-D": true,
    "experimental-centers": true,
    "experimental-fto-fc": true,
    "experimental-fto-f2t": true,
    "experimental-fto-sc": true,
    "experimental-fto-l2c": true,
    "experimental-fto-lbt": true,
    "experimental-fto-l3t": true,
    "experimental-global-custom-1": true,
    "experimental-global-custom-2": true
};
var StickeringProp = class extends SimpleTwistyPropSource {
    getDefaultValue() {
        return "full";
    }
};
// src/cubing/twisty/model/props/puzzle/display/HintFaceletProp.ts
var hintFaceletStyles = {
    floating: true,
    none: true
};
var HintFaceletProp = class extends SimpleTwistyPropSource {
    getDefaultValue() {
        return "auto";
    }
};
// src/cubing/twisty/views/3D/TAU.ts
var TAU = Math.PI * 2;
var DEGREES_PER_RADIAN = 360 / TAU;
// src/cubing/twisty/heavy-code-imports/3d.ts
var cachedConstructorProxy = null;
async function proxy3D() {
    return cachedConstructorProxy ?? (cachedConstructorProxy = require("a75f8af05fca36da"));
}
var THREEJS = from(async ()=>(await proxy3D()).T3I
);

},{"./chunk-WO2AXYFE.js":"dbeiO","a75f8af05fca36da":"iEqkP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iEqkP":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('bLxZJ') + "3d-dynamic-DKWMBHRS.c0fc9c55.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('gZiWM')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"98U7N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "countMoves", ()=>countMoves
);
parcelHelpers.export(exports, "countQuantumMoves", ()=>countQuantumMoves
);
parcelHelpers.export(exports, "countAnimatedLeaves", ()=>countAnimatedLeaves
);
var _chunkEWRBHQFXJs = require("./chunk-EWRBHQFX.js");
// src/cubing/notation/CountMoves.ts
var CountMoves = class extends _chunkEWRBHQFXJs.TraversalUp {
    constructor(metric){
        super();
        this.metric = metric;
    }
    traverseAlg(alg) {
        let r = 0;
        for (const unit of alg.units())r += this.traverseUnit(unit);
        return r;
    }
    traverseGrouping(grouping) {
        const alg = grouping.alg;
        return this.traverseAlg(alg) * Math.abs(grouping.amount);
    }
    traverseMove(move) {
        return this.metric(move);
    }
    traverseCommutator(commutator) {
        return 2 * (this.traverseAlg(commutator.A) + this.traverseAlg(commutator.B));
    }
    traverseConjugate(conjugate) {
        return 2 * this.traverseAlg(conjugate.A) + this.traverseAlg(conjugate.B);
    }
    traversePause(_pause) {
        return 0;
    }
    traverseNewline(_newLine) {
        return 0;
    }
    traverseLineComment(_comment) {
        return 0;
    }
};
function isCharUppercase(c) {
    return "A" <= c && c <= "Z";
}
function baseMetric(move) {
    const fam = move.family;
    if (isCharUppercase(fam[0]) && fam[fam.length - 1] === "v" || fam === "x" || fam === "y" || fam === "z" || fam === "T") return 0;
    else return 1;
}
function quantumMetric(move) {
    const fam = move.family;
    if (isCharUppercase(fam[0]) && fam[fam.length - 1] === "v" || fam === "x" || fam === "y" || fam === "z" || fam === "T") return 0;
    else return Math.abs(move.amount);
}
var countMovesInstance = new CountMoves(baseMetric);
var countMoves = countMovesInstance.traverseAlg.bind(countMovesInstance);
var countQuantumMovesInstance = new CountMoves(quantumMetric);
var countQuantumMoves = countQuantumMovesInstance.traverseAlg.bind(countQuantumMovesInstance);
// src/cubing/notation/CountAnimatedLeaves.ts
var CountAnimatedLeaves = class extends _chunkEWRBHQFXJs.TraversalUp {
    traverseAlg(alg) {
        let total = 0;
        for (const part of alg.units())total += this.traverseUnit(part);
        return total;
    }
    traverseGrouping(grouping) {
        return this.traverseAlg(grouping.alg) * Math.abs(grouping.amount);
    }
    traverseMove(_move) {
        return 1;
    }
    traverseCommutator(commutator) {
        return 2 * (this.traverseAlg(commutator.A) + this.traverseAlg(commutator.B));
    }
    traverseConjugate(conjugate) {
        return 2 * this.traverseAlg(conjugate.A) + this.traverseAlg(conjugate.B);
    }
    traversePause(_pause) {
        return 1;
    }
    traverseNewline(_newline) {
        return 0;
    }
    traverseLineComment(_comment) {
        return 0;
    }
};
var countAnimatedLeavesInstance = new CountAnimatedLeaves();
var countAnimatedLeaves = countAnimatedLeavesInstance.traverseAlg.bind(countAnimatedLeavesInstance);

},{"./chunk-EWRBHQFX.js":"i6QEj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2uAkP":[function(require,module,exports) {
module.exports = JSON.parse("{\"UF\":[{\"comm\":\"[R2 U' : [S , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"A\",\"piece_2\":\"B\"},{\"comm\":\"[L2' U : [S' , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"A\",\"piece_2\":\"D\"},{\"comm\":\"[U' M U' : [M' , U2]]\",\"type\":\"4-Mover\",\"piece_1\":\"A\",\"piece_2\":\"E\"},{\"comm\":\"[U' : [R' E R , U2]]\",\"type\":\"U-Swap\",\"piece_1\":\"A\",\"piece_2\":\"F\"},{\"comm\":\"[U : [L' E' L , U2']]\",\"type\":\"U-Swap\",\"piece_1\":\"A\",\"piece_2\":\"G\"},{\"comm\":\"[U' : [R E' R' , U2]]\",\"type\":\"U-Swap\",\"piece_1\":\"A\",\"piece_2\":\"H\"},{\"comm\":\"[R' U' : [S , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"A\",\"piece_2\":\"J\"},{\"comm\":\"[R' F' : [R U R' , E]]\",\"type\":\"E-Swap\",\"piece_1\":\"A\",\"piece_2\":\"K\"},{\"comm\":\"[L U : [S' , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"A\",\"piece_2\":\"L\"},{\"comm\":\"[U M U : [M' , U2']]\",\"type\":\"4-Mover\",\"piece_1\":\"A\",\"piece_2\":\"M\"},{\"comm\":\"[U : [L' E L , U2']]\",\"type\":\"U-Swap\",\"piece_1\":\"A\",\"piece_2\":\"N\"},{\"comm\":\"[U' : [R E R' , U2]]\",\"type\":\"U-Swap\",\"piece_1\":\"A\",\"piece_2\":\"O\"},{\"comm\":\"[U : [L E' L' , U2']]\",\"type\":\"U-Swap\",\"piece_1\":\"A\",\"piece_2\":\"P\"},{\"comm\":\"[L' U' : [L2 , S']]\",\"type\":\"4-Mover\",\"piece_1\":\"A\",\"piece_2\":\"R\"},{\"comm\":\"[U' R' B R : [S , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"A\",\"piece_2\":\"S\"},{\"comm\":\"[R U : [R2' , S]]\",\"type\":\"4-Mover\",\"piece_1\":\"A\",\"piece_2\":\"T\"},{\"comm\":\"[U2 , M']\",\"type\":\"4-Mover\",\"piece_1\":\"A\",\"piece_2\":\"U\"},{\"comm\":\"[U' : [S , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"A\",\"piece_2\":\"V\"},{\"comm\":\"[M , U2]\",\"type\":\"4-Mover\",\"piece_1\":\"A\",\"piece_2\":\"W\"},{\"comm\":\"[U : [S' , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"A\",\"piece_2\":\"X\"},{\"comm\":\"[R2 U' : [R2' , S]]\",\"type\":\"4-Mover\",\"piece_1\":\"B\",\"piece_2\":\"A\"},{\"comm\":\"[M2' U : [M , U2']]\",\"type\":\"4-Mover\",\"piece_1\":\"B\",\"piece_2\":\"D\"},{\"comm\":\"[S' , L F' L']\",\"type\":\"S-Swap\",\"piece_1\":\"B\",\"piece_2\":\"E\"},{\"comm\":\"[U' , R' E R]\",\"type\":\"U-Swap\",\"piece_1\":\"B\",\"piece_2\":\"F\"},{\"comm\":\"[U : [L' E' L , U]]\",\"type\":\"U-Swap\",\"piece_1\":\"B\",\"piece_2\":\"G\"},{\"comm\":\"[U' , R E' R']\",\"type\":\"U-Swap\",\"piece_1\":\"B\",\"piece_2\":\"H\"},{\"comm\":\"[E' : [U' , R' E R]]\",\"type\":\"U-Swap\",\"piece_1\":\"B\",\"piece_2\":\"J\"},{\"comm\":\"[r : [U' R' U , M]]\",\"type\":\"M-Swap\",\"piece_1\":\"B\",\"piece_2\":\"K\"},{\"comm\":\"[U' , R E2 R']\",\"type\":\"U-Swap\",\"piece_1\":\"B\",\"piece_2\":\"L\"},{\"comm\":\"[U : [L' E L , U]]\",\"type\":\"U-Swap\",\"piece_1\":\"B\",\"piece_2\":\"N\"},{\"comm\":\"[U' , R E R']\",\"type\":\"U-Swap\",\"piece_1\":\"B\",\"piece_2\":\"O\"},{\"comm\":\"[U : [L E' L' , U]]\",\"type\":\"U-Swap\",\"piece_1\":\"B\",\"piece_2\":\"P\"},{\"comm\":\"[r' : [U' R U , M']]\",\"type\":\"M-Swap\",\"piece_1\":\"B\",\"piece_2\":\"Q\"},{\"comm\":\"[U' , R' E2 R]\",\"type\":\"U-Swap\",\"piece_1\":\"B\",\"piece_2\":\"R\"},{\"comm\":\"(U M U M')2\",\"type\":\"Alg\",\"piece_1\":\"B\",\"piece_2\":\"S\"},{\"comm\":\"[u' : [R E' R' , U]]\",\"type\":\"U-Swap\",\"piece_1\":\"B\",\"piece_2\":\"T\"},{\"comm\":\"[L F : [L' S' L , F2']]\",\"type\":\"F-Swap\",\"piece_1\":\"B\",\"piece_2\":\"U\"},{\"comm\":\"[R' U R' : [S , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"B\",\"piece_2\":\"V\"},{\"comm\":\"[r M' : [U' R' U , M2']]\",\"type\":\"M-Swap\",\"piece_1\":\"B\",\"piece_2\":\"W\"},{\"comm\":\"U' L' U' L U L U L U' L'\",\"type\":\"Alg\",\"piece_1\":\"B\",\"piece_2\":\"X\"},{\"comm\":\"[L2' U : [L2 , S']]\",\"type\":\"4-Mover\",\"piece_1\":\"D\",\"piece_2\":\"A\"},{\"comm\":\"[M2' U' : [M , U2]]\",\"type\":\"4-Mover\",\"piece_1\":\"D\",\"piece_2\":\"B\"},{\"comm\":\"[U' : [R' E R , U']]\",\"type\":\"U-Swap\",\"piece_1\":\"D\",\"piece_2\":\"F\"},{\"comm\":\"[U , L' E' L]\",\"type\":\"U-Swap\",\"piece_1\":\"D\",\"piece_2\":\"G\"},{\"comm\":\"[U' : [R E' R' , U']]\",\"type\":\"U-Swap\",\"piece_1\":\"D\",\"piece_2\":\"H\"},{\"comm\":\"[U , L' E2' L]\",\"type\":\"U-Swap\",\"piece_1\":\"D\",\"piece_2\":\"J\"},{\"comm\":\"[l' : [U L U' , M]]\",\"type\":\"M-Swap\",\"piece_1\":\"D\",\"piece_2\":\"K\"},{\"comm\":\"[U' : [R E2 R' , U']]\",\"type\":\"U-Swap\",\"piece_1\":\"D\",\"piece_2\":\"L\"},{\"comm\":\"[S , R' F R]\",\"type\":\"S-Swap\",\"piece_1\":\"D\",\"piece_2\":\"M\"},{\"comm\":\"[U , L' E L]\",\"type\":\"U-Swap\",\"piece_1\":\"D\",\"piece_2\":\"N\"},{\"comm\":\"[U' : [R E R' , U']]\",\"type\":\"U-Swap\",\"piece_1\":\"D\",\"piece_2\":\"O\"},{\"comm\":\"[U , L E' L']\",\"type\":\"U-Swap\",\"piece_1\":\"D\",\"piece_2\":\"P\"},{\"comm\":\"[L : [M , U L' U']]\",\"type\":\"M-Swap\",\"piece_1\":\"D\",\"piece_2\":\"Q\"},{\"comm\":\"[U' : [R E2 R' , U']]\",\"type\":\"U-Swap\",\"piece_1\":\"D\",\"piece_2\":\"R\"},{\"comm\":\"(U' M U' M')2\",\"type\":\"Alg\",\"piece_1\":\"D\",\"piece_2\":\"S\"},{\"comm\":\"[U , L E2' L']\",\"type\":\"U-Swap\",\"piece_1\":\"D\",\"piece_2\":\"T\"},{\"comm\":\"[R' F' : [R S R' , F2]]\",\"type\":\"F-Swap\",\"piece_1\":\"D\",\"piece_2\":\"U\"},{\"comm\":\"U R U R' U' R' U' R' U R\",\"type\":\"Alg\",\"piece_1\":\"D\",\"piece_2\":\"V\"},{\"comm\":\"[l' M' : [U L U' , M2']]\",\"type\":\"M-Swap\",\"piece_1\":\"D\",\"piece_2\":\"W\"},{\"comm\":\"[L U' L : [S' , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"D\",\"piece_2\":\"X\"},{\"comm\":\"[U' M U : [M' , U2]]\",\"type\":\"4-Mover\",\"piece_1\":\"E\",\"piece_2\":\"A\"},{\"comm\":\"[L F' L' , S']\",\"type\":\"S-Swap\",\"piece_1\":\"E\",\"piece_2\":\"B\"},{\"comm\":\"[S : [U' , R' E R]]\",\"type\":\"U-Swap\",\"piece_1\":\"E\",\"piece_2\":\"F\"},{\"comm\":\"[l' U L' : [S' , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"E\",\"piece_2\":\"G\"},{\"comm\":\"[S : [U' , R E' R']]\",\"type\":\"U-Swap\",\"piece_1\":\"E\",\"piece_2\":\"H\"},{\"comm\":\"[M' : [U' , R S' R']]\",\"type\":\"U-Swap\",\"piece_1\":\"E\",\"piece_2\":\"J\"},{\"comm\":\"[l' : [M' , U' L U]]\",\"type\":\"M-Swap\",\"piece_1\":\"E\",\"piece_2\":\"K\"},{\"comm\":\"[L' U2 : [L S L' , U]]\",\"type\":\"U-Swap\",\"piece_1\":\"E\",\"piece_2\":\"L\"},{\"comm\":\"[M U : [M' , U2']]\",\"type\":\"4-Mover\",\"piece_1\":\"E\",\"piece_2\":\"M\"},{\"comm\":\"[L' F' : [E , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"E\",\"piece_2\":\"N\"},{\"comm\":\"[R' F R : [S , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"E\",\"piece_2\":\"O\"},{\"comm\":\"[R M U : [M' , U2]]\",\"type\":\"4-Mover\",\"piece_1\":\"E\",\"piece_2\":\"P\"},{\"comm\":\"[L' : [U' L U , M']]\",\"type\":\"M-Swap\",\"piece_1\":\"E\",\"piece_2\":\"Q\"},{\"comm\":\"[U' R F : [R2' , E']]\",\"type\":\"4-Mover\",\"piece_1\":\"E\",\"piece_2\":\"R\"},{\"comm\":\"[M' : (U M' U M)2]\",\"type\":\"Alg\",\"piece_1\":\"E\",\"piece_2\":\"S\"},{\"comm\":\"[M' : [U' , L' E L]]\",\"type\":\"U-Swap\",\"piece_1\":\"E\",\"piece_2\":\"T\"},{\"comm\":\"[L' F' : [L2 , E']]\",\"type\":\"4-Mover\",\"piece_1\":\"E\",\"piece_2\":\"U\"},{\"comm\":\"[L2 : [L' F' L , S]]\",\"type\":\"S-Swap\",\"piece_1\":\"E\",\"piece_2\":\"V\"},{\"comm\":\"[L' M : [U' L U , M2']]\",\"type\":\"M-Swap\",\"piece_1\":\"E\",\"piece_2\":\"W\"},{\"comm\":\"[L F' L' , S]\",\"type\":\"S-Swap\",\"piece_1\":\"E\",\"piece_2\":\"X\"},{\"comm\":\"[U : [R' E R , U2]]\",\"type\":\"U-Swap\",\"piece_1\":\"F\",\"piece_2\":\"A\"},{\"comm\":\"[R' E R , U']\",\"type\":\"U-Swap\",\"piece_1\":\"F\",\"piece_2\":\"B\"},{\"comm\":\"[U2 : [R' E R , U]]\",\"type\":\"U-Swap\",\"piece_1\":\"F\",\"piece_2\":\"D\"},{\"comm\":\"[S : [R' E R , U']]\",\"type\":\"U-Swap\",\"piece_1\":\"F\",\"piece_2\":\"E\"},{\"comm\":\"[L , U S' U']\",\"type\":\"S-Insert\",\"piece_1\":\"F\",\"piece_2\":\"G\"},{\"comm\":\"[M' U L : [S' , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"F\",\"piece_2\":\"H\"},{\"comm\":\"[E , R U' R']\",\"type\":\"E-Swap\",\"piece_1\":\"F\",\"piece_2\":\"J\"},{\"comm\":\"[M2' : [U' L' U , M]]\",\"type\":\"M-Swap\",\"piece_1\":\"F\",\"piece_2\":\"K\"},{\"comm\":\"[M L' U : [M' , U2']]\",\"type\":\"4-Mover\",\"piece_1\":\"F\",\"piece_2\":\"M\"},{\"comm\":\"[r U R' : [E , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"F\",\"piece_2\":\"N\"},{\"comm\":\"[M' U R' : [E , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"F\",\"piece_2\":\"O\"},{\"comm\":\"[U E R' : [S , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"F\",\"piece_2\":\"P\"},{\"comm\":\"[U' L' U , M']\",\"type\":\"M-Swap\",\"piece_1\":\"F\",\"piece_2\":\"Q\"},{\"comm\":\"[E' , L U L']\",\"type\":\"E-Swap\",\"piece_1\":\"F\",\"piece_2\":\"R\"},{\"comm\":\"[U' r' : [R U R' , E]]\",\"type\":\"E-Swap\",\"piece_1\":\"F\",\"piece_2\":\"S\"},{\"comm\":\"[R2' : [E , R U' R']]\",\"type\":\"E-Swap\",\"piece_1\":\"F\",\"piece_2\":\"T\"},{\"comm\":\"[U R' F2 : [R S R' , F]]\",\"type\":\"F-Swap\",\"piece_1\":\"F\",\"piece_2\":\"U\"},{\"comm\":\"[U' E' R : [E' , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"F\",\"piece_2\":\"V\"},{\"comm\":\"[M : [U' L' U , M2']]\",\"type\":\"M-Swap\",\"piece_1\":\"F\",\"piece_2\":\"W\"},{\"comm\":\"[U E L : [E' , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"F\",\"piece_2\":\"X\"},{\"comm\":\"[U' : [L' E' L , U2']]\",\"type\":\"U-Swap\",\"piece_1\":\"G\",\"piece_2\":\"A\"},{\"comm\":\"[U2' : [L' E' L , U']]\",\"type\":\"U-Swap\",\"piece_1\":\"G\",\"piece_2\":\"B\"},{\"comm\":\"[L' E' L , U]\",\"type\":\"U-Swap\",\"piece_1\":\"G\",\"piece_2\":\"D\"},{\"comm\":\"[l' U L : [S' , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"G\",\"piece_2\":\"E\"},{\"comm\":\"[U S' U' , L]\",\"type\":\"S-Insert\",\"piece_1\":\"G\",\"piece_2\":\"F\"},{\"comm\":\"[U S U' , L']\",\"type\":\"S-Insert\",\"piece_1\":\"G\",\"piece_2\":\"H\"},{\"comm\":\"[L' E' : [L U L' , E']]\",\"type\":\"E-Swap\",\"piece_1\":\"G\",\"piece_2\":\"J\"},{\"comm\":\"[U : [L F L' , S]]\",\"type\":\"S-Swap\",\"piece_1\":\"G\",\"piece_2\":\"K\"},{\"comm\":\"[L f' L' : [S , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"G\",\"piece_2\":\"L\"},{\"comm\":\"[L F' L : [S' , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"G\",\"piece_2\":\"M\"},{\"comm\":\"[L F' : [E , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"G\",\"piece_2\":\"N\"},{\"comm\":\"[R' F R' : [S' , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"G\",\"piece_2\":\"O\"},{\"comm\":\"[M' U' L' : [E' , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"G\",\"piece_2\":\"P\"},{\"comm\":\"[L' : [U' L' U , M']]\",\"type\":\"M-Swap\",\"piece_1\":\"G\",\"piece_2\":\"Q\"},{\"comm\":\"[S' U' R' : [E' , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"G\",\"piece_2\":\"R\"},{\"comm\":\"[U l : [L' U' L , E]]\",\"type\":\"E-Swap\",\"piece_1\":\"G\",\"piece_2\":\"S\"},{\"comm\":\"[L E : [L' U L , E]]\",\"type\":\"E-Swap\",\"piece_1\":\"G\",\"piece_2\":\"T\"},{\"comm\":\"[L F' : [L2' , E']]\",\"type\":\"4-Mover\",\"piece_1\":\"G\",\"piece_2\":\"U\"},{\"comm\":\"[L' F' L , S]\",\"type\":\"S-Swap\",\"piece_1\":\"G\",\"piece_2\":\"V\"},{\"comm\":\"[U : [S' , L B' L']]\",\"type\":\"S-Swap\",\"piece_1\":\"G\",\"piece_2\":\"W\"},{\"comm\":\"[U : [R E' R' , U2]]\",\"type\":\"U-Swap\",\"piece_1\":\"H\",\"piece_2\":\"A\"},{\"comm\":\"[R E' R' , U']\",\"type\":\"U-Swap\",\"piece_1\":\"H\",\"piece_2\":\"B\"},{\"comm\":\"[U2 : [R E' R' , U]]\",\"type\":\"U-Swap\",\"piece_1\":\"H\",\"piece_2\":\"D\"},{\"comm\":\"[S : [R E' R' , U']]\",\"type\":\"U-Swap\",\"piece_1\":\"H\",\"piece_2\":\"E\"},{\"comm\":\"[M' U L' : [S' , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"H\",\"piece_2\":\"F\"},{\"comm\":\"[L' , U S' U']\",\"type\":\"S-Insert\",\"piece_1\":\"H\",\"piece_2\":\"G\"},{\"comm\":\"[R2 : [E' , R' U' R]]\",\"type\":\"E-Swap\",\"piece_1\":\"H\",\"piece_2\":\"J\"},{\"comm\":\"[M' : [M' , U' L U]]\",\"type\":\"M-Swap\",\"piece_1\":\"H\",\"piece_2\":\"K\"},{\"comm\":\"[E , L' U L]\",\"type\":\"E-Swap\",\"piece_1\":\"H\",\"piece_2\":\"L\"},{\"comm\":\"[R F : [R2' , E']]\",\"type\":\"4-Mover\",\"piece_1\":\"H\",\"piece_2\":\"M\"},{\"comm\":\"[u' L : [S' , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"H\",\"piece_2\":\"N\"},{\"comm\":\"[R' F : [R2 , E']]\",\"type\":\"4-Mover\",\"piece_1\":\"H\",\"piece_2\":\"O\"},{\"comm\":\"[l' U' L' : [E' , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"H\",\"piece_2\":\"P\"},{\"comm\":\"[U' L U , M']\",\"type\":\"M-Swap\",\"piece_1\":\"H\",\"piece_2\":\"Q\"},{\"comm\":\"[U' M : [U , L S L']]\",\"type\":\"U-Swap\",\"piece_1\":\"H\",\"piece_2\":\"S\"},{\"comm\":\"[E' , R' U' R]\",\"type\":\"E-Swap\",\"piece_1\":\"H\",\"piece_2\":\"T\"},{\"comm\":\"[l' U : [S' , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"H\",\"piece_2\":\"U\"},{\"comm\":\"[u' R' : [E , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"H\",\"piece_2\":\"V\"},{\"comm\":\"[M : [U' L U , M2']]\",\"type\":\"M-Swap\",\"piece_1\":\"H\",\"piece_2\":\"W\"},{\"comm\":\"[u L' : [E , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"H\",\"piece_2\":\"X\"},{\"comm\":\"[R' U : [S , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"J\",\"piece_2\":\"A\"},{\"comm\":\"[E' : [R' E R , U']]\",\"type\":\"U-Swap\",\"piece_1\":\"J\",\"piece_2\":\"B\"},{\"comm\":\"[L' E2' L , U]\",\"type\":\"U-Swap\",\"piece_1\":\"J\",\"piece_2\":\"D\"},{\"comm\":\"[M' : [R S' R' , U']]\",\"type\":\"U-Swap\",\"piece_1\":\"J\",\"piece_2\":\"E\"},{\"comm\":\"[R U' R' , E]\",\"type\":\"E-Swap\",\"piece_1\":\"J\",\"piece_2\":\"F\"},{\"comm\":\"[L' E2' : [L U L' , E]]\",\"type\":\"E-Swap\",\"piece_1\":\"J\",\"piece_2\":\"G\"},{\"comm\":\"[R2 : [R' U' R , E']]\",\"type\":\"E-Swap\",\"piece_1\":\"J\",\"piece_2\":\"H\"},{\"comm\":\"[M' , U' R U]\",\"type\":\"M-Swap\",\"piece_1\":\"J\",\"piece_2\":\"K\"},{\"comm\":\"[R' U' R : [E , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"J\",\"piece_2\":\"L\"},{\"comm\":\"[R U : [R' S' R , U]]\",\"type\":\"U-Swap\",\"piece_1\":\"J\",\"piece_2\":\"M\"},{\"comm\":\"[R U' R' , E']\",\"type\":\"E-Swap\",\"piece_1\":\"J\",\"piece_2\":\"N\"},{\"comm\":\"[R' f R' : [S' , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"J\",\"piece_2\":\"O\"},{\"comm\":\"[M , U' R U]\",\"type\":\"M-Swap\",\"piece_1\":\"J\",\"piece_2\":\"Q\"},{\"comm\":\"[R' U' R' : [E' , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"J\",\"piece_2\":\"R\"},{\"comm\":\"[U2 : [M , U R U']]\",\"type\":\"M-Swap\",\"piece_1\":\"J\",\"piece_2\":\"S\"},{\"comm\":\"[U R' : [S , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"J\",\"piece_2\":\"T\"},{\"comm\":\"[D' U L : [E' , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"J\",\"piece_2\":\"U\"},{\"comm\":\"U R' U' R' U R U R U R' U2\",\"type\":\"Alg\",\"piece_1\":\"J\",\"piece_2\":\"V\"},{\"comm\":\"[M2' , U' R U]\",\"type\":\"M-Swap\",\"piece_1\":\"J\",\"piece_2\":\"W\"},{\"comm\":\"[U L : [E' , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"J\",\"piece_2\":\"X\"},{\"comm\":\"[R' F' : [E , R U R']]\",\"type\":\"E-Swap\",\"piece_1\":\"K\",\"piece_2\":\"A\"},{\"comm\":\"[R : [U' R' U , M']]\",\"type\":\"M-Swap\",\"piece_1\":\"K\",\"piece_2\":\"B\"},{\"comm\":\"[L' : [U L U' , M']]\",\"type\":\"M-Swap\",\"piece_1\":\"K\",\"piece_2\":\"D\"},{\"comm\":\"[l' : [U' L U , M']]\",\"type\":\"M-Swap\",\"piece_1\":\"K\",\"piece_2\":\"E\"},{\"comm\":\"[M' : [U' L' U , M']]\",\"type\":\"M-Swap\",\"piece_1\":\"K\",\"piece_2\":\"F\"},{\"comm\":\"[U : [S , L F L']]\",\"type\":\"S-Swap\",\"piece_1\":\"K\",\"piece_2\":\"G\"},{\"comm\":\"[M' : [U' L U , M']]\",\"type\":\"M-Swap\",\"piece_1\":\"K\",\"piece_2\":\"H\"},{\"comm\":\"[U' R U , M']\",\"type\":\"M-Swap\",\"piece_1\":\"K\",\"piece_2\":\"J\"},{\"comm\":\"[U L' U' , M']\",\"type\":\"M-Swap\",\"piece_1\":\"K\",\"piece_2\":\"L\"},{\"comm\":\"[r : [U R' U' , M']]\",\"type\":\"M-Swap\",\"piece_1\":\"K\",\"piece_2\":\"M\"},{\"comm\":\"[M' : [U R' U' , M']]\",\"type\":\"M-Swap\",\"piece_1\":\"K\",\"piece_2\":\"N\"},{\"comm\":\"[U' : [S' , R' F' R]]\",\"type\":\"S-Swap\",\"piece_1\":\"K\",\"piece_2\":\"O\"},{\"comm\":\"[M' : [U R U' , M']]\",\"type\":\"M-Swap\",\"piece_1\":\"K\",\"piece_2\":\"P\"},{\"comm\":\"[U' : [S , R' F' R]]\",\"type\":\"S-Swap\",\"piece_1\":\"K\",\"piece_2\":\"Q\"},{\"comm\":\"[U L U' , M']\",\"type\":\"M-Swap\",\"piece_1\":\"K\",\"piece_2\":\"R\"},{\"comm\":\"U M' U' M U2 M U M' U\",\"type\":\"Alg\",\"piece_1\":\"K\",\"piece_2\":\"S\"},{\"comm\":\"[U' R' U , M']\",\"type\":\"M-Swap\",\"piece_1\":\"K\",\"piece_2\":\"T\"},{\"comm\":\"[U R' F' R' : [S , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"K\",\"piece_2\":\"V\"},{\"comm\":\"[D : [R F R' , S']]\",\"type\":\"S-Swap\",\"piece_1\":\"K\",\"piece_2\":\"W\"},{\"comm\":\"[U' L F L : [S' , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"K\",\"piece_2\":\"X\"},{\"comm\":\"[L U' : [S' , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"L\",\"piece_2\":\"A\"},{\"comm\":\"[R E2 R' , U']\",\"type\":\"U-Swap\",\"piece_1\":\"L\",\"piece_2\":\"B\"},{\"comm\":\"[U2 : [R E2 R' , U]]\",\"type\":\"U-Swap\",\"piece_1\":\"L\",\"piece_2\":\"D\"},{\"comm\":\"[L' U' : [L S L' , U']]\",\"type\":\"U-Swap\",\"piece_1\":\"L\",\"piece_2\":\"E\"},{\"comm\":\"[L f' L : [S , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"L\",\"piece_2\":\"G\"},{\"comm\":\"[L' U L , E]\",\"type\":\"E-Swap\",\"piece_1\":\"L\",\"piece_2\":\"H\"},{\"comm\":\"[R' U' R' : [E , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"L\",\"piece_2\":\"J\"},{\"comm\":\"[M' , U L' U']\",\"type\":\"M-Swap\",\"piece_1\":\"L\",\"piece_2\":\"K\"},{\"comm\":\"[M' : [L' S L , U]]\",\"type\":\"U-Swap\",\"piece_1\":\"L\",\"piece_2\":\"M\"},{\"comm\":\"[L' : [U , L' E L]]\",\"type\":\"U-Swap\",\"piece_1\":\"L\",\"piece_2\":\"N\"},{\"comm\":\"[R E2 : [R' U' R , E']]\",\"type\":\"E-Swap\",\"piece_1\":\"L\",\"piece_2\":\"O\"},{\"comm\":\"[L' U L , E']\",\"type\":\"E-Swap\",\"piece_1\":\"L\",\"piece_2\":\"P\"},{\"comm\":\"[M , U L' U']\",\"type\":\"M-Swap\",\"piece_1\":\"L\",\"piece_2\":\"Q\"},{\"comm\":\"[U' L : [S' , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"L\",\"piece_2\":\"R\"},{\"comm\":\"[U' R' B : [E , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"L\",\"piece_2\":\"S\"},{\"comm\":\"[R U' R' : [E , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"L\",\"piece_2\":\"T\"},{\"comm\":\"[U' D R' : [E , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"L\",\"piece_2\":\"U\"},{\"comm\":\"[U' R' : [E , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"L\",\"piece_2\":\"V\"},{\"comm\":\"[M2' , U L' U']\",\"type\":\"M-Swap\",\"piece_1\":\"L\",\"piece_2\":\"W\"},{\"comm\":\"U' L U L U' L' U' L' U' L U2'\",\"type\":\"Alg\",\"piece_1\":\"L\",\"piece_2\":\"X\"},{\"comm\":\"[U M U' : [M , U2]]\",\"type\":\"4-Mover\",\"piece_1\":\"M\",\"piece_2\":\"A\"},{\"comm\":\"[R' F R , S]\",\"type\":\"S-Swap\",\"piece_1\":\"M\",\"piece_2\":\"D\"},{\"comm\":\"[M U' : [M' , U2]]\",\"type\":\"4-Mover\",\"piece_1\":\"M\",\"piece_2\":\"E\"},{\"comm\":\"[M L' U' : [M' , U2']]\",\"type\":\"4-Mover\",\"piece_1\":\"M\",\"piece_2\":\"F\"},{\"comm\":\"[L F' L' : [S' , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"M\",\"piece_2\":\"G\"},{\"comm\":\"[R F : [E' , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"M\",\"piece_2\":\"H\"},{\"comm\":\"[R U2' : [R' S' R , U']]\",\"type\":\"U-Swap\",\"piece_1\":\"M\",\"piece_2\":\"J\"},{\"comm\":\"[r : [M' , U R' U']]\",\"type\":\"M-Swap\",\"piece_1\":\"M\",\"piece_2\":\"K\"},{\"comm\":\"[M' : [U , L' S L]]\",\"type\":\"U-Swap\",\"piece_1\":\"M\",\"piece_2\":\"L\"},{\"comm\":\"[S' : [U , L' E L]]\",\"type\":\"U-Swap\",\"piece_1\":\"M\",\"piece_2\":\"N\"},{\"comm\":\"[r U' R : [S , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"M\",\"piece_2\":\"O\"},{\"comm\":\"[S' : [U , L E' L']]\",\"type\":\"U-Swap\",\"piece_1\":\"M\",\"piece_2\":\"P\"},{\"comm\":\"[R : [U R' U' , M']]\",\"type\":\"M-Swap\",\"piece_1\":\"M\",\"piece_2\":\"Q\"},{\"comm\":\"[M' : [U , R E' R']]\",\"type\":\"U-Swap\",\"piece_1\":\"M\",\"piece_2\":\"R\"},{\"comm\":\"[M' : (U' M' U' M)2]\",\"type\":\"Alg\",\"piece_1\":\"M\",\"piece_2\":\"S\"},{\"comm\":\"[U L' F' : [L2 , E]]\",\"type\":\"4-Mover\",\"piece_1\":\"M\",\"piece_2\":\"T\"},{\"comm\":\"[R F : [R2' , E]]\",\"type\":\"4-Mover\",\"piece_1\":\"M\",\"piece_2\":\"U\"},{\"comm\":\"[R' F R , S']\",\"type\":\"S-Swap\",\"piece_1\":\"M\",\"piece_2\":\"V\"},{\"comm\":\"[R M : [U R' U' , M2']]\",\"type\":\"M-Swap\",\"piece_1\":\"M\",\"piece_2\":\"W\"},{\"comm\":\"[R2' : [R F R' , S']]\",\"type\":\"S-Swap\",\"piece_1\":\"M\",\"piece_2\":\"X\"},{\"comm\":\"[U' : [L' E L , U2']]\",\"type\":\"U-Swap\",\"piece_1\":\"N\",\"piece_2\":\"A\"},{\"comm\":\"[U2' : [L' E L , U']]\",\"type\":\"U-Swap\",\"piece_1\":\"N\",\"piece_2\":\"B\"},{\"comm\":\"[L' E L , U]\",\"type\":\"U-Swap\",\"piece_1\":\"N\",\"piece_2\":\"D\"},{\"comm\":\"[L' F' : [E , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"N\",\"piece_2\":\"E\"},{\"comm\":\"[r U R : [E , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"N\",\"piece_2\":\"F\"},{\"comm\":\"[L F' : [L2' , E]]\",\"type\":\"4-Mover\",\"piece_1\":\"N\",\"piece_2\":\"G\"},{\"comm\":\"[u R' : [S , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"N\",\"piece_2\":\"H\"},{\"comm\":\"[E' , R U' R']\",\"type\":\"E-Swap\",\"piece_1\":\"N\",\"piece_2\":\"J\"},{\"comm\":\"[M2' : [U R' U' , M]]\",\"type\":\"M-Swap\",\"piece_1\":\"N\",\"piece_2\":\"K\"},{\"comm\":\"[L2' : [E , L U' L']]\",\"type\":\"E-Swap\",\"piece_1\":\"N\",\"piece_2\":\"L\"},{\"comm\":\"[S' : [L' E L , U]]\",\"type\":\"U-Swap\",\"piece_1\":\"N\",\"piece_2\":\"M\"},{\"comm\":\"[R , U' S U]\",\"type\":\"S-Insert\",\"piece_1\":\"N\",\"piece_2\":\"O\"},{\"comm\":\"[M' U' R : [S , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"N\",\"piece_2\":\"P\"},{\"comm\":\"[U R' U' , M']\",\"type\":\"M-Swap\",\"piece_1\":\"N\",\"piece_2\":\"Q\"},{\"comm\":\"[E , L U L']\",\"type\":\"E-Swap\",\"piece_1\":\"N\",\"piece_2\":\"R\"},{\"comm\":\"[U M : [U' , l' E l]]\",\"type\":\"U-Swap\",\"piece_1\":\"N\",\"piece_2\":\"S\"},{\"comm\":\"[r U' : [S , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"N\",\"piece_2\":\"U\"},{\"comm\":\"[u' R : [E' , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"N\",\"piece_2\":\"V\"},{\"comm\":\"[M : [U R' U' , M2']]\",\"type\":\"M-Swap\",\"piece_1\":\"N\",\"piece_2\":\"W\"},{\"comm\":\"[u L : [E' , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"N\",\"piece_2\":\"X\"},{\"comm\":\"[U : [R E R' , U2]]\",\"type\":\"U-Swap\",\"piece_1\":\"O\",\"piece_2\":\"A\"},{\"comm\":\"[R E R' , U']\",\"type\":\"U-Swap\",\"piece_1\":\"O\",\"piece_2\":\"B\"},{\"comm\":\"[U2 : [R E R' , U]]\",\"type\":\"U-Swap\",\"piece_1\":\"O\",\"piece_2\":\"D\"},{\"comm\":\"[R' F R' : [S , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"O\",\"piece_2\":\"E\"},{\"comm\":\"[M' U R : [E , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"O\",\"piece_2\":\"F\"},{\"comm\":\"[L F' L : [S , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"O\",\"piece_2\":\"G\"},{\"comm\":\"[R' F : [E' , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"O\",\"piece_2\":\"H\"},{\"comm\":\"[R' f R : [S' , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"O\",\"piece_2\":\"J\"},{\"comm\":\"[U' : [R' F' R , S']]\",\"type\":\"S-Swap\",\"piece_1\":\"O\",\"piece_2\":\"K\"},{\"comm\":\"[R E : [R' U' R , E]]\",\"type\":\"E-Swap\",\"piece_1\":\"O\",\"piece_2\":\"L\"},{\"comm\":\"[r U' R' : [S , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"O\",\"piece_2\":\"M\"},{\"comm\":\"[U' S U , R]\",\"type\":\"S-Insert\",\"piece_1\":\"O\",\"piece_2\":\"N\"},{\"comm\":\"[U' S U , R']\",\"type\":\"S-Insert\",\"piece_1\":\"O\",\"piece_2\":\"P\"},{\"comm\":\"[R : [U R U' , M']]\",\"type\":\"M-Swap\",\"piece_1\":\"O\",\"piece_2\":\"Q\"},{\"comm\":\"[R' E' : [R U' R' , E']]\",\"type\":\"E-Swap\",\"piece_1\":\"O\",\"piece_2\":\"R\"},{\"comm\":\"[U' r' : [R U R' , E']]\",\"type\":\"E-Swap\",\"piece_1\":\"O\",\"piece_2\":\"S\"},{\"comm\":\"[S U L : [E , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"O\",\"piece_2\":\"T\"},{\"comm\":\"[R' F : [E , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"O\",\"piece_2\":\"U\"},{\"comm\":\"[U' : [S , R' B R]]\",\"type\":\"S-Swap\",\"piece_1\":\"O\",\"piece_2\":\"W\"},{\"comm\":\"[R F R' , S']\",\"type\":\"S-Swap\",\"piece_1\":\"O\",\"piece_2\":\"X\"},{\"comm\":\"[U' : [L E' L' , U2']]\",\"type\":\"U-Swap\",\"piece_1\":\"P\",\"piece_2\":\"A\"},{\"comm\":\"[U2' : [L E' L' , U']]\",\"type\":\"U-Swap\",\"piece_1\":\"P\",\"piece_2\":\"B\"},{\"comm\":\"[L E' L' , U]\",\"type\":\"U-Swap\",\"piece_1\":\"P\",\"piece_2\":\"D\"},{\"comm\":\"[R M U' : [M' , U2]]\",\"type\":\"4-Mover\",\"piece_1\":\"P\",\"piece_2\":\"E\"},{\"comm\":\"[U' E' L : [S' , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"P\",\"piece_2\":\"F\"},{\"comm\":\"[M' U' L : [E' , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"P\",\"piece_2\":\"G\"},{\"comm\":\"[l' U' L : [E' , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"P\",\"piece_2\":\"H\"},{\"comm\":\"[M2' : [U R U' , M]]\",\"type\":\"M-Swap\",\"piece_1\":\"P\",\"piece_2\":\"K\"},{\"comm\":\"[E' , L' U L]\",\"type\":\"E-Swap\",\"piece_1\":\"P\",\"piece_2\":\"L\"},{\"comm\":\"[S' : [L E' L' , U]]\",\"type\":\"U-Swap\",\"piece_1\":\"P\",\"piece_2\":\"M\"},{\"comm\":\"[M' U' R' : [S , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"P\",\"piece_2\":\"N\"},{\"comm\":\"[R' , U' S U]\",\"type\":\"S-Insert\",\"piece_1\":\"P\",\"piece_2\":\"O\"},{\"comm\":\"[U R U' , M']\",\"type\":\"M-Swap\",\"piece_1\":\"P\",\"piece_2\":\"Q\"},{\"comm\":\"[L2 : [E' , L' U L]]\",\"type\":\"E-Swap\",\"piece_1\":\"P\",\"piece_2\":\"R\"},{\"comm\":\"[U l : [L' U' L , E']]\",\"type\":\"E-Swap\",\"piece_1\":\"P\",\"piece_2\":\"S\"},{\"comm\":\"[E , R' U' R]\",\"type\":\"E-Swap\",\"piece_1\":\"P\",\"piece_2\":\"T\"},{\"comm\":\"[U' L F2' : [L' S' L , F']]\",\"type\":\"F-Swap\",\"piece_1\":\"P\",\"piece_2\":\"U\"},{\"comm\":\"[U' E' R' : [E , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"P\",\"piece_2\":\"V\"},{\"comm\":\"[M : [U R U' , M2']]\",\"type\":\"M-Swap\",\"piece_1\":\"P\",\"piece_2\":\"W\"},{\"comm\":\"[U E L' : [E , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"P\",\"piece_2\":\"X\"},{\"comm\":\"[R' : [U' R U , M]]\",\"type\":\"M-Swap\",\"piece_1\":\"Q\",\"piece_2\":\"B\"},{\"comm\":\"[L : [U L' U' , M]]\",\"type\":\"M-Swap\",\"piece_1\":\"Q\",\"piece_2\":\"D\"},{\"comm\":\"[l' : [U' L U , M]]\",\"type\":\"M-Swap\",\"piece_1\":\"Q\",\"piece_2\":\"E\"},{\"comm\":\"[M' , U' L' U]\",\"type\":\"M-Swap\",\"piece_1\":\"Q\",\"piece_2\":\"F\"},{\"comm\":\"[l' : [U' L' U , M]]\",\"type\":\"M-Swap\",\"piece_1\":\"Q\",\"piece_2\":\"G\"},{\"comm\":\"[M' , U' L U]\",\"type\":\"M-Swap\",\"piece_1\":\"Q\",\"piece_2\":\"H\"},{\"comm\":\"[U' R U , M]\",\"type\":\"M-Swap\",\"piece_1\":\"Q\",\"piece_2\":\"J\"},{\"comm\":\"[U' : [R' F' R , S]]\",\"type\":\"S-Swap\",\"piece_1\":\"Q\",\"piece_2\":\"K\"},{\"comm\":\"[U L' U' , M]\",\"type\":\"M-Swap\",\"piece_1\":\"Q\",\"piece_2\":\"L\"},{\"comm\":\"[r : [U R' U' , M]]\",\"type\":\"M-Swap\",\"piece_1\":\"Q\",\"piece_2\":\"M\"},{\"comm\":\"[M' , U R' U']\",\"type\":\"M-Swap\",\"piece_1\":\"Q\",\"piece_2\":\"N\"},{\"comm\":\"[r : [U R U' , M]]\",\"type\":\"M-Swap\",\"piece_1\":\"Q\",\"piece_2\":\"O\"},{\"comm\":\"[M' , U R U']\",\"type\":\"M-Swap\",\"piece_1\":\"Q\",\"piece_2\":\"P\"},{\"comm\":\"[U L U' , M]\",\"type\":\"M-Swap\",\"piece_1\":\"Q\",\"piece_2\":\"R\"},{\"comm\":\"[U' : [R B R' , S]]\",\"type\":\"S-Swap\",\"piece_1\":\"Q\",\"piece_2\":\"S\"},{\"comm\":\"[U' R' U , M]\",\"type\":\"M-Swap\",\"piece_1\":\"Q\",\"piece_2\":\"T\"},{\"comm\":\"[U : [S , R' F' R]]\",\"type\":\"S-Swap\",\"piece_1\":\"Q\",\"piece_2\":\"U\"},{\"comm\":\"[R' : [U' R' U , M]]\",\"type\":\"M-Swap\",\"piece_1\":\"Q\",\"piece_2\":\"V\"},{\"comm\":\"[U : [S , R B R']]\",\"type\":\"S-Swap\",\"piece_1\":\"Q\",\"piece_2\":\"W\"},{\"comm\":\"[L : [U L U' , M]]\",\"type\":\"M-Swap\",\"piece_1\":\"Q\",\"piece_2\":\"X\"},{\"comm\":\"[L' U : [L2 , S']]\",\"type\":\"4-Mover\",\"piece_1\":\"R\",\"piece_2\":\"A\"},{\"comm\":\"[R' E2 R , U']\",\"type\":\"U-Swap\",\"piece_1\":\"R\",\"piece_2\":\"B\"},{\"comm\":\"[U2 : [R' E2 R , U]]\",\"type\":\"U-Swap\",\"piece_1\":\"R\",\"piece_2\":\"D\"},{\"comm\":\"[U' R F : [E' , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"R\",\"piece_2\":\"E\"},{\"comm\":\"[L U L' , E']\",\"type\":\"E-Swap\",\"piece_1\":\"R\",\"piece_2\":\"F\"},{\"comm\":\"[S' U' R : [E' , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"R\",\"piece_2\":\"G\"},{\"comm\":\"[R' U' R : [E' , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"R\",\"piece_2\":\"J\"},{\"comm\":\"[M' , U L U']\",\"type\":\"M-Swap\",\"piece_1\":\"R\",\"piece_2\":\"K\"},{\"comm\":\"[U' L' : [S' , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"R\",\"piece_2\":\"L\"},{\"comm\":\"[M' : [R E' R' , U]]\",\"type\":\"U-Swap\",\"piece_1\":\"R\",\"piece_2\":\"M\"},{\"comm\":\"[L U L' , E]\",\"type\":\"E-Swap\",\"piece_1\":\"R\",\"piece_2\":\"N\"},{\"comm\":\"[R' E2 : [R U' R' , E]]\",\"type\":\"E-Swap\",\"piece_1\":\"R\",\"piece_2\":\"O\"},{\"comm\":\"[L2 : [L' U L , E']]\",\"type\":\"E-Swap\",\"piece_1\":\"R\",\"piece_2\":\"P\"},{\"comm\":\"[M , U L U']\",\"type\":\"M-Swap\",\"piece_1\":\"R\",\"piece_2\":\"Q\"},{\"comm\":\"[U2' : [M , U' L U]]\",\"type\":\"M-Swap\",\"piece_1\":\"R\",\"piece_2\":\"S\"},{\"comm\":\"[R U' R : [E' , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"R\",\"piece_2\":\"T\"},{\"comm\":\"[D U' R : [E' , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"R\",\"piece_2\":\"U\"},{\"comm\":\"[U' R : [E' , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"R\",\"piece_2\":\"V\"},{\"comm\":\"[M2 , U L U']\",\"type\":\"M-Swap\",\"piece_1\":\"R\",\"piece_2\":\"W\"},{\"comm\":\"U' L' U' L' U L U L U L'\",\"type\":\"Alg\",\"piece_1\":\"R\",\"piece_2\":\"X\"},{\"comm\":\"[U R' B R : [S , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"S\",\"piece_2\":\"A\"},{\"comm\":\"(M U' M' U')2\",\"type\":\"Alg\",\"piece_1\":\"S\",\"piece_2\":\"B\"},{\"comm\":\"(M U M' U)2\",\"type\":\"Alg\",\"piece_1\":\"S\",\"piece_2\":\"D\"},{\"comm\":\"[M2' : (U' M U' M')2]\",\"type\":\"Alg\",\"piece_1\":\"S\",\"piece_2\":\"E\"},{\"comm\":\"[U' r' : [E , R U R']]\",\"type\":\"E-Swap\",\"piece_1\":\"S\",\"piece_2\":\"F\"},{\"comm\":\"[U l : [E , L' U' L]]\",\"type\":\"E-Swap\",\"piece_1\":\"S\",\"piece_2\":\"G\"},{\"comm\":\"[U' M : [L S L' , U]]\",\"type\":\"U-Swap\",\"piece_1\":\"S\",\"piece_2\":\"H\"},{\"comm\":\"[U2' : [U R U' , M]]\",\"type\":\"M-Swap\",\"piece_1\":\"S\",\"piece_2\":\"J\"},{\"comm\":\"U M U M' U2 M' U' M U\",\"type\":\"Alg\",\"piece_1\":\"S\",\"piece_2\":\"K\"},{\"comm\":\"[U' R' B : [R2 , E]]\",\"type\":\"4-Mover\",\"piece_1\":\"S\",\"piece_2\":\"L\"},{\"comm\":\"[M2' : (U M U M')2]\",\"type\":\"Alg\",\"piece_1\":\"S\",\"piece_2\":\"M\"},{\"comm\":\"[U M : [R' S' R , U']]\",\"type\":\"U-Swap\",\"piece_1\":\"S\",\"piece_2\":\"N\"},{\"comm\":\"[U' r' : [E' , R U R']]\",\"type\":\"E-Swap\",\"piece_1\":\"S\",\"piece_2\":\"O\"},{\"comm\":\"[U l : [E' , L' U' L]]\",\"type\":\"E-Swap\",\"piece_1\":\"S\",\"piece_2\":\"P\"},{\"comm\":\"[U' : [S , R B R']]\",\"type\":\"S-Swap\",\"piece_1\":\"S\",\"piece_2\":\"Q\"},{\"comm\":\"[U2 : [U' L U , M]]\",\"type\":\"M-Swap\",\"piece_1\":\"S\",\"piece_2\":\"R\"},{\"comm\":\"[U2' : [U R' U' , M]]\",\"type\":\"M-Swap\",\"piece_1\":\"S\",\"piece_2\":\"T\"},{\"comm\":\"[D' : [R F R' , S']]\",\"type\":\"S-Swap\",\"piece_1\":\"S\",\"piece_2\":\"U\"},{\"comm\":\"[U L B' L' : [S , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"S\",\"piece_2\":\"V\"},{\"comm\":\"[U' R' B R : [S' , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"S\",\"piece_2\":\"X\"},{\"comm\":\"[R U' : [R2' , S]]\",\"type\":\"4-Mover\",\"piece_1\":\"T\",\"piece_2\":\"A\"},{\"comm\":\"[E : [R E' R' , U']]\",\"type\":\"U-Swap\",\"piece_1\":\"T\",\"piece_2\":\"B\"},{\"comm\":\"[L E2' L' , U]\",\"type\":\"U-Swap\",\"piece_1\":\"T\",\"piece_2\":\"D\"},{\"comm\":\"[l' : [E , L U' L']]\",\"type\":\"E-Swap\",\"piece_1\":\"T\",\"piece_2\":\"E\"},{\"comm\":\"[R2' : [R U' R' , E]]\",\"type\":\"E-Swap\",\"piece_1\":\"T\",\"piece_2\":\"F\"},{\"comm\":\"[L E2' : [L' U L , E']]\",\"type\":\"E-Swap\",\"piece_1\":\"T\",\"piece_2\":\"G\"},{\"comm\":\"[R' U' R , E']\",\"type\":\"E-Swap\",\"piece_1\":\"T\",\"piece_2\":\"H\"},{\"comm\":\"[U R : [S , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"T\",\"piece_2\":\"J\"},{\"comm\":\"[M' , U' R' U]\",\"type\":\"M-Swap\",\"piece_1\":\"T\",\"piece_2\":\"K\"},{\"comm\":\"[R U' R : [E , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"T\",\"piece_2\":\"L\"},{\"comm\":\"[R u' R' : [E' , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"T\",\"piece_2\":\"M\"},{\"comm\":\"[S U L' : [E , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"T\",\"piece_2\":\"O\"},{\"comm\":\"[R' U' R , E]\",\"type\":\"E-Swap\",\"piece_1\":\"T\",\"piece_2\":\"P\"},{\"comm\":\"[M , U' R' U]\",\"type\":\"M-Swap\",\"piece_1\":\"T\",\"piece_2\":\"Q\"},{\"comm\":\"[R U' R' : [E' , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"T\",\"piece_2\":\"R\"},{\"comm\":\"[U2 : [M , U R' U']]\",\"type\":\"M-Swap\",\"piece_1\":\"T\",\"piece_2\":\"S\"},{\"comm\":\"[U R' U : [M' , U2]]\",\"type\":\"4-Mover\",\"piece_1\":\"T\",\"piece_2\":\"U\"},{\"comm\":\"U R U R U' R' U' R' U' R\",\"type\":\"Alg\",\"piece_1\":\"T\",\"piece_2\":\"V\"},{\"comm\":\"[M2' , U' R' U]\",\"type\":\"M-Swap\",\"piece_1\":\"T\",\"piece_2\":\"W\"},{\"comm\":\"[U L' : [E , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"T\",\"piece_2\":\"X\"},{\"comm\":\"[M' , U2]\",\"type\":\"4-Mover\",\"piece_1\":\"U\",\"piece_2\":\"A\"},{\"comm\":\"[L F' : [L' S' L , F2']]\",\"type\":\"F-Swap\",\"piece_1\":\"U\",\"piece_2\":\"B\"},{\"comm\":\"[R' F : [R S R' , F2]]\",\"type\":\"F-Swap\",\"piece_1\":\"U\",\"piece_2\":\"D\"},{\"comm\":\"[L' F' : [E' , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"U\",\"piece_2\":\"E\"},{\"comm\":\"[U R' F' : [R S R' , F']]\",\"type\":\"F-Swap\",\"piece_1\":\"U\",\"piece_2\":\"F\"},{\"comm\":\"[L F' : [E' , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"U\",\"piece_2\":\"G\"},{\"comm\":\"[l' U : [L2 , S']]\",\"type\":\"4-Mover\",\"piece_1\":\"U\",\"piece_2\":\"H\"},{\"comm\":\"[U R U' : [M' , U2]]\",\"type\":\"4-Mover\",\"piece_1\":\"U\",\"piece_2\":\"J\"},{\"comm\":\"[U' D R : [E , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"U\",\"piece_2\":\"L\"},{\"comm\":\"[R F : [E , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"U\",\"piece_2\":\"M\"},{\"comm\":\"[r U' : [R2' , S]]\",\"type\":\"4-Mover\",\"piece_1\":\"U\",\"piece_2\":\"N\"},{\"comm\":\"[R' F : [E , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"U\",\"piece_2\":\"O\"},{\"comm\":\"[U' L F : [L' S' L , F]]\",\"type\":\"F-Swap\",\"piece_1\":\"U\",\"piece_2\":\"P\"},{\"comm\":\"[U : [R' F' R , S]]\",\"type\":\"S-Swap\",\"piece_1\":\"U\",\"piece_2\":\"Q\"},{\"comm\":\"[U' L U : [M' , U2']]\",\"type\":\"4-Mover\",\"piece_1\":\"U\",\"piece_2\":\"R\"},{\"comm\":\"[D' : [S' , R F R']]\",\"type\":\"S-Swap\",\"piece_1\":\"U\",\"piece_2\":\"S\"},{\"comm\":\"[U R' U' : [M' , U2]]\",\"type\":\"4-Mover\",\"piece_1\":\"U\",\"piece_2\":\"T\"},{\"comm\":\"[R' F : [R S' R' , F2]]\",\"type\":\"F-Swap\",\"piece_1\":\"U\",\"piece_2\":\"V\"},{\"comm\":\"u2 M' u2 M'\",\"type\":\"Alg\",\"piece_1\":\"U\",\"piece_2\":\"W\"},{\"comm\":\"[L F' : [L' S L , F2']]\",\"type\":\"F-Swap\",\"piece_1\":\"U\",\"piece_2\":\"X\"},{\"comm\":\"[U : [S , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"V\",\"piece_2\":\"A\"},{\"comm\":\"[R U R' : [S , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"V\",\"piece_2\":\"B\"},{\"comm\":\"R' U' R U R U R U R U' R' U'\",\"type\":\"Alg\",\"piece_1\":\"V\",\"piece_2\":\"D\"},{\"comm\":\"[L2 : [S , L' F' L]]\",\"type\":\"S-Swap\",\"piece_1\":\"V\",\"piece_2\":\"E\"},{\"comm\":\"[U' E' R' : [E' , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"V\",\"piece_2\":\"F\"},{\"comm\":\"[S , L' F' L]\",\"type\":\"S-Swap\",\"piece_1\":\"V\",\"piece_2\":\"G\"},{\"comm\":\"[u' R : [E , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"V\",\"piece_2\":\"H\"},{\"comm\":\"U2 R U' R' U' R' U' R U R U'\",\"type\":\"Alg\",\"piece_1\":\"V\",\"piece_2\":\"J\"},{\"comm\":\"[U R' F' R : [S , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"V\",\"piece_2\":\"K\"},{\"comm\":\"[U' R : [E , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"V\",\"piece_2\":\"L\"},{\"comm\":\"[S' , R' F R]\",\"type\":\"S-Swap\",\"piece_1\":\"V\",\"piece_2\":\"M\"},{\"comm\":\"[u' R' : [E' , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"V\",\"piece_2\":\"N\"},{\"comm\":\"[U' E' R : [E , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"V\",\"piece_2\":\"P\"},{\"comm\":\"[r' : [U' R' U , M']]\",\"type\":\"M-Swap\",\"piece_1\":\"V\",\"piece_2\":\"Q\"},{\"comm\":\"[U' R' : [E' , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"V\",\"piece_2\":\"R\"},{\"comm\":\"[U L B' L : [S , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"V\",\"piece_2\":\"S\"},{\"comm\":\"R' U R U R U R' U' R' U'\",\"type\":\"Alg\",\"piece_1\":\"V\",\"piece_2\":\"T\"},{\"comm\":\"[R' F' : [R S' R' , F2]]\",\"type\":\"F-Swap\",\"piece_1\":\"V\",\"piece_2\":\"U\"},{\"comm\":\"[D' R' F : [R S' R' , F2]]\",\"type\":\"F-Swap\",\"piece_1\":\"V\",\"piece_2\":\"W\"},{\"comm\":\"[U' : [S' , R2']]\",\"type\":\"4-Mover\",\"piece_1\":\"V\",\"piece_2\":\"X\"},{\"comm\":\"[U2 , M]\",\"type\":\"4-Mover\",\"piece_1\":\"W\",\"piece_2\":\"A\"},{\"comm\":\"[R : [U' R' U , M2']]\",\"type\":\"M-Swap\",\"piece_1\":\"W\",\"piece_2\":\"B\"},{\"comm\":\"[l' M' : [U L U' , M2']]\",\"type\":\"M-Swap\",\"piece_1\":\"W\",\"piece_2\":\"D\"},{\"comm\":\"[l' : [U' L U , M2']]\",\"type\":\"M-Swap\",\"piece_1\":\"W\",\"piece_2\":\"E\"},{\"comm\":\"[M' : [U' L' U , M2']]\",\"type\":\"M-Swap\",\"piece_1\":\"W\",\"piece_2\":\"F\"},{\"comm\":\"[U : [L B' L' , S']]\",\"type\":\"S-Swap\",\"piece_1\":\"W\",\"piece_2\":\"G\"},{\"comm\":\"[M' : [U' L U , M2']]\",\"type\":\"M-Swap\",\"piece_1\":\"W\",\"piece_2\":\"H\"},{\"comm\":\"[U' R U , M2']\",\"type\":\"M-Swap\",\"piece_1\":\"W\",\"piece_2\":\"J\"},{\"comm\":\"[D : [S' , R F R']]\",\"type\":\"S-Swap\",\"piece_1\":\"W\",\"piece_2\":\"K\"},{\"comm\":\"[U L' U' , M2']\",\"type\":\"M-Swap\",\"piece_1\":\"W\",\"piece_2\":\"L\"},{\"comm\":\"[r : [U R' U' , M2']]\",\"type\":\"M-Swap\",\"piece_1\":\"W\",\"piece_2\":\"M\"},{\"comm\":\"[M' : [U R' U' , M2']]\",\"type\":\"M-Swap\",\"piece_1\":\"W\",\"piece_2\":\"N\"},{\"comm\":\"[U' : [R' B R , S]]\",\"type\":\"S-Swap\",\"piece_1\":\"W\",\"piece_2\":\"O\"},{\"comm\":\"[M' : [U R U' , M2']]\",\"type\":\"M-Swap\",\"piece_1\":\"W\",\"piece_2\":\"P\"},{\"comm\":\"[U : [R B R' , S]]\",\"type\":\"S-Swap\",\"piece_1\":\"W\",\"piece_2\":\"Q\"},{\"comm\":\"[U L U' , M2']\",\"type\":\"M-Swap\",\"piece_1\":\"W\",\"piece_2\":\"R\"},{\"comm\":\"[U' R' U , M2']\",\"type\":\"M-Swap\",\"piece_1\":\"W\",\"piece_2\":\"T\"},{\"comm\":\"M' U2 M' U2 M2'\",\"type\":\"Alg\",\"piece_1\":\"W\",\"piece_2\":\"U\"},{\"comm\":\"[D' R' F' : [R S' R' , F2]]\",\"type\":\"F-Swap\",\"piece_1\":\"W\",\"piece_2\":\"V\"},{\"comm\":\"[D L F : [L' S L , F2']]\",\"type\":\"F-Swap\",\"piece_1\":\"W\",\"piece_2\":\"X\"},{\"comm\":\"[U' : [S' , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"X\",\"piece_2\":\"A\"},{\"comm\":\"L U L' U' L' U' L' U L U\",\"type\":\"Alg\",\"piece_1\":\"X\",\"piece_2\":\"B\"},{\"comm\":\"[L' U' L : [S' , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"X\",\"piece_2\":\"D\"},{\"comm\":\"[S , L F' L']\",\"type\":\"S-Swap\",\"piece_1\":\"X\",\"piece_2\":\"E\"},{\"comm\":\"[U E L' : [E' , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"X\",\"piece_2\":\"F\"},{\"comm\":\"[u L : [E , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"X\",\"piece_2\":\"H\"},{\"comm\":\"[U L' : [E' , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"X\",\"piece_2\":\"J\"},{\"comm\":\"[U' L F L' : [S' , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"X\",\"piece_2\":\"K\"},{\"comm\":\"U2' L' U L U L U L' U' L' U\",\"type\":\"Alg\",\"piece_1\":\"X\",\"piece_2\":\"L\"},{\"comm\":\"[R2' : [S' , R F R']]\",\"type\":\"S-Swap\",\"piece_1\":\"X\",\"piece_2\":\"M\"},{\"comm\":\"[u L' : [E' , L2]]\",\"type\":\"4-Mover\",\"piece_1\":\"X\",\"piece_2\":\"N\"},{\"comm\":\"[S' , R F R']\",\"type\":\"S-Swap\",\"piece_1\":\"X\",\"piece_2\":\"O\"},{\"comm\":\"[U E L : [E , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"X\",\"piece_2\":\"P\"},{\"comm\":\"[l : [U L U' , M']]\",\"type\":\"M-Swap\",\"piece_1\":\"X\",\"piece_2\":\"Q\"},{\"comm\":\"L U' L' U' L' U' L U L U\",\"type\":\"Alg\",\"piece_1\":\"X\",\"piece_2\":\"R\"},{\"comm\":\"[U' R' B R' : [S' , R2]]\",\"type\":\"4-Mover\",\"piece_1\":\"X\",\"piece_2\":\"S\"},{\"comm\":\"[U L : [E , L2']]\",\"type\":\"4-Mover\",\"piece_1\":\"X\",\"piece_2\":\"T\"},{\"comm\":\"[L F : [L' S L , F2']]\",\"type\":\"F-Swap\",\"piece_1\":\"X\",\"piece_2\":\"U\"},{\"comm\":\"[U' : [R2' , S']]\",\"type\":\"4-Mover\",\"piece_1\":\"X\",\"piece_2\":\"V\"},{\"comm\":\"[D L F' : [L' S L , F2']]\",\"type\":\"F-Swap\",\"piece_1\":\"X\",\"piece_2\":\"W\"}],\"UFR\":[{\"comm\":\"[R' B' R : [R D R' , U']]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"A\",\"piece_2\":\"B\"},{\"comm\":\"[R' D R U2 : [R' D' R , U]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"A\",\"piece_2\":\"D\"},{\"comm\":\"[F : [U2 , F' R F R']]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"A\",\"piece_2\":\"F\"},{\"comm\":\"[R' D R , U2]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"A\",\"piece_2\":\"G\"},{\"comm\":\"[U' : [R D' R' , U2]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"A\",\"piece_2\":\"H\"},{\"comm\":\"[r D' U : [R D R' , U2]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"A\",\"piece_2\":\"I\"},{\"comm\":\"[D U' : [R D R' , U2]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"A\",\"piece_2\":\"K\"},{\"comm\":\"[D : [R' D' R , U2]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"A\",\"piece_2\":\"L\"},{\"comm\":\"[R' U D R2 : [U' , R' D' R]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"A\",\"piece_2\":\"N\"},{\"comm\":\"[U' : [R D R' , U2]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"A\",\"piece_2\":\"O\"},{\"comm\":\"[R' D' R , U2]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"A\",\"piece_2\":\"P\"},{\"comm\":\"[R' U D : [R D R' , U2]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"A\",\"piece_2\":\"Q\"},{\"comm\":\"[D' U' : [R D R' , U2]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"A\",\"piece_2\":\"S\"},{\"comm\":\"[D U' : [R D' R' , U2]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"A\",\"piece_2\":\"T\"},{\"comm\":\"[R F' R' U' : [R D R' , U2]]\",\"type\":\"U-Top / D-Bottom\",\"piece_1\":\"A\",\"piece_2\":\"U\"},{\"comm\":\"[R' D R U' R D' R' , U2]\",\"type\":\"Special\",\"piece_1\":\"A\",\"piece_2\":\"V\"},{\"comm\":\"[R D' R' : [R' D R , U2]]\",\"type\":\"U-Top / D-Bottom\",\"piece_1\":\"A\",\"piece_2\":\"W\"},{\"comm\":\"[R' U' D' R : [R U' R' , D]]\",\"type\":\"Special\",\"piece_1\":\"A\",\"piece_2\":\"X\"},{\"comm\":\"[R' B' R : [U' , R D R']]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"B\",\"piece_2\":\"A\"},{\"comm\":\"[R F' R' : [R' D R, U]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"B\",\"piece_2\":\"D\"},{\"comm\":\"[R : [U , R D R']]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"B\",\"piece_2\":\"E\"},{\"comm\":\"[R2 : [D' , R U' R']]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"B\",\"piece_2\":\"F\"},{\"comm\":\"[R' D R , U]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"B\",\"piece_2\":\"G\"},{\"comm\":\"[U' , R D' R']\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"B\",\"piece_2\":\"H\"},{\"comm\":\"[R2 U' : [D' , R U R']]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"B\",\"piece_2\":\"I\"},{\"comm\":\"[D' : [R' D R , U]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"B\",\"piece_2\":\"K\"},{\"comm\":\"[D : [R' D' R , U]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"B\",\"piece_2\":\"L\"},{\"comm\":\"[U' , R D R']\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"B\",\"piece_2\":\"O\"},{\"comm\":\"[R' D' R , U]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"B\",\"piece_2\":\"P\"},{\"comm\":\"[R2 U : [R' U' R , D]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"B\",\"piece_2\":\"R\"},{\"comm\":\"[D' : [U' , R D R']]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"B\",\"piece_2\":\"S\"},{\"comm\":\"[D : [U' , R D' R']]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"B\",\"piece_2\":\"T\"},{\"comm\":\"[R F' : [R' U' R , D]]\",\"type\":\"U-Top / D-Bottom\",\"piece_1\":\"B\",\"piece_2\":\"U\"},{\"comm\":\"[R' D R U' R D' R' , U]\",\"type\":\"Special\",\"piece_1\":\"B\",\"piece_2\":\"V\"},{\"comm\":\"[U' , R D' R' U R' D R]\",\"type\":\"Special\",\"piece_1\":\"B\",\"piece_2\":\"W\"},{\"comm\":\"[R' B : [D' , R U R']]\",\"type\":\"U-Top / D-Bottom\",\"piece_1\":\"B\",\"piece_2\":\"X\"},{\"comm\":\"[R' D R U' : [R' D' R , U']]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"D\",\"piece_2\":\"A\"},{\"comm\":\"[R F' R' : [U , R' D R]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"D\",\"piece_2\":\"B\"},{\"comm\":\"[U' R2 : [D , R' U2 R]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"D\",\"piece_2\":\"E\"},{\"comm\":\"[R' D R , U']\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"D\",\"piece_2\":\"G\"},{\"comm\":\"[U' : [R D' R' , U']]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"D\",\"piece_2\":\"H\"},{\"comm\":\"[D' : [R' D R , U']]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"D\",\"piece_2\":\"K\"},{\"comm\":\"[D : [R' D' R , U']]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"D\",\"piece_2\":\"L\"},{\"comm\":\"[U' R' : [U2 , R' D' R]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"D\",\"piece_2\":\"N\"},{\"comm\":\"[U' : [R D R' , U']]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"D\",\"piece_2\":\"O\"},{\"comm\":\"[R' D' R , U']\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"D\",\"piece_2\":\"P\"},{\"comm\":\"[R' D' : [U' , R' D R]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"D\",\"piece_2\":\"Q\"},{\"comm\":\"[U' R' : [U' , R' D' R]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"D\",\"piece_2\":\"R\"},{\"comm\":\"[D : [R' D R , U']]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"D\",\"piece_2\":\"S\"},{\"comm\":\"[D' : [R' D' R , U']]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"D\",\"piece_2\":\"T\"},{\"comm\":\"[R' U' R : [F2' , R' U R U']]\",\"type\":\"Special\",\"piece_1\":\"D\",\"piece_2\":\"U\"},{\"comm\":\"[R' D R U' R D' R' , U']\",\"type\":\"Special\",\"piece_1\":\"D\",\"piece_2\":\"V\"},{\"comm\":\"[R D' R' : [R' D R , U']]\",\"type\":\"U-Top / D-Bottom\",\"piece_1\":\"D\",\"piece_2\":\"W\"},{\"comm\":\"[R' D' R : [R U' R' , D]]\",\"type\":\"Special\",\"piece_1\":\"D\",\"piece_2\":\"X\"},{\"comm\":\"[R2 : [D , R' U R]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"E\",\"piece_2\":\"B\"},{\"comm\":\"[U' R : [U2 , R D R']]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"E\",\"piece_2\":\"D\"},{\"comm\":\"[U' R' F : [D , R U R']]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"E\",\"piece_2\":\"F\"},{\"comm\":\"[U R' : [U' , R' D R]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"E\",\"piece_2\":\"G\"},{\"comm\":\"[R D' : [R D R' , U]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"E\",\"piece_2\":\"H\"},{\"comm\":\"[l' U : [R D' R' , U2]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"E\",\"piece_2\":\"I\"},{\"comm\":\"[U D' R' : [U' , R' D R]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"E\",\"piece_2\":\"K\"},{\"comm\":\"[R U : [R' D R , U]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"E\",\"piece_2\":\"L\"},{\"comm\":\"[R' D R2 D' R2' : [U , R2 D R2' D' R2]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"E\",\"piece_2\":\"N\"},{\"comm\":\"[U' R : [R U' R' , D']]\",\"type\":\"Special\",\"piece_1\":\"E\",\"piece_2\":\"O\"},{\"comm\":\"[U R' U2 : [R D R' , U]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"E\",\"piece_2\":\"P\"},{\"comm\":\"[R' , F' L F]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"E\",\"piece_2\":\"Q\"},{\"comm\":\"[U D R' : [U' , R' D R]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"E\",\"piece_2\":\"S\"},{\"comm\":\"[R U : [R' D' R , U]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"E\",\"piece_2\":\"T\"},{\"comm\":\"[D' R : [R D' R' , U]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"E\",\"piece_2\":\"U\"},{\"comm\":\"[U R' D' : [U' , R' D' R]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"E\",\"piece_2\":\"V\"},{\"comm\":\"[D R : [R D' R', U]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"E\",\"piece_2\":\"W\"},{\"comm\":\"[R : [R D' R' , U]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"E\",\"piece_2\":\"X\"},{\"comm\":\"[F : [R' D' R , U2]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"F\",\"piece_2\":\"A\"},{\"comm\":\"[R' : [U' , R' D' R]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"F\",\"piece_2\":\"B\"},{\"comm\":\"[U' R' U , L]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"F\",\"piece_2\":\"E\"},{\"comm\":\"[R' U' : [D , R U R']]\",\"type\":\"LUF / D-Any\",\"piece_1\":\"F\",\"piece_2\":\"G\"},{\"comm\":\"[U' R U' : [D' , R' U R]]\",\"type\":\"LUF / D-Any\",\"piece_1\":\"F\",\"piece_2\":\"H\"},{\"comm\":\"[R : [F , R' U R U']]\",\"type\":\"Special\",\"piece_1\":\"F\",\"piece_2\":\"K\"},{\"comm\":\"[D R' U' : [D' , R U R']]\",\"type\":\"LUF / D-Any\",\"piece_1\":\"F\",\"piece_2\":\"L\"},{\"comm\":\"[R U' D' R' : [D , R' U R]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"F\",\"piece_2\":\"N\"},{\"comm\":\"[D' R : [F , R' U R U']]\",\"type\":\"Special\",\"piece_1\":\"F\",\"piece_2\":\"O\"},{\"comm\":\"[R' U' : [D' , R U R']]\",\"type\":\"LUF / D-Any\",\"piece_1\":\"F\",\"piece_2\":\"P\"},{\"comm\":\"[R' F : [R U R' , D]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"F\",\"piece_2\":\"Q\"},{\"comm\":\"[l U' l' , F]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"F\",\"piece_2\":\"R\"},{\"comm\":\"[l U2 l' , F]\",\"type\":\"Special\",\"piece_1\":\"F\",\"piece_2\":\"S\"},{\"comm\":\"[D' R' U' : [D' , R U R']]\",\"type\":\"LUF / D-Any\",\"piece_1\":\"F\",\"piece_2\":\"T\"},{\"comm\":\"[U' R' U : [R U' R' , D]]\",\"type\":\"LUF / D-Any\",\"piece_1\":\"F\",\"piece_2\":\"U\"},{\"comm\":\"[U' D' R' U : [R U' R' , D]]\",\"type\":\"LUF / D-Any\",\"piece_1\":\"F\",\"piece_2\":\"V\"},{\"comm\":\"[R U' R' : [D , R' U R]]\",\"type\":\"Special\",\"piece_1\":\"F\",\"piece_2\":\"W\"},{\"comm\":\"[U' D R' U : [R U' R' , D]]\",\"type\":\"LUF / D-Any\",\"piece_1\":\"F\",\"piece_2\":\"X\"},{\"comm\":\"[U2 , R' D R]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"G\",\"piece_2\":\"A\"},{\"comm\":\"[U , R' D R]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"G\",\"piece_2\":\"B\"},{\"comm\":\"[U' , R' D R]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"G\",\"piece_2\":\"D\"},{\"comm\":\"[U R' : [R' D R , U']]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"G\",\"piece_2\":\"E\"},{\"comm\":\"[R' U' : [R U R' , D]]\",\"type\":\"LUF / D-Any\",\"piece_1\":\"G\",\"piece_2\":\"F\"},{\"comm\":\"[D R' : [F' , R D' R']]\",\"type\":\"Special\",\"piece_1\":\"G\",\"piece_2\":\"H\"},{\"comm\":\"[D R' : [F2 , R D' R' D]]\",\"type\":\"Special\",\"piece_1\":\"G\",\"piece_2\":\"I\"},{\"comm\":\"[U : [D , R U' R']]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"G\",\"piece_2\":\"K\"},{\"comm\":\"[U R U : [R' D R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"G\",\"piece_2\":\"N\"},{\"comm\":\"[U D : [R U' R' , D2]]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"G\",\"piece_2\":\"O\"},{\"comm\":\"[U R' D : [R U' R' , D2]]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"G\",\"piece_2\":\"P\"},{\"comm\":\"[R' U : [R U' R' , D]]\",\"type\":\"BUR / D-Any\",\"piece_1\":\"G\",\"piece_2\":\"Q\"},{\"comm\":\"[R B' R' : [R' D R , U]]\",\"type\":\"Special\",\"piece_1\":\"G\",\"piece_2\":\"R\"},{\"comm\":\"[U D : [R U' R' , D]]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"G\",\"piece_2\":\"S\"},{\"comm\":\"[R' D R : [D' , R U R']]\",\"type\":\"Special\",\"piece_1\":\"G\",\"piece_2\":\"T\"},{\"comm\":\"[U D R D' : [U' , R' D R]]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"G\",\"piece_2\":\"V\"},{\"comm\":\"[U R : [D , R U' R']]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"G\",\"piece_2\":\"W\"},{\"comm\":\"[D U R U' : [F2' , U R' U' R]]\",\"type\":\"Special\",\"piece_1\":\"G\",\"piece_2\":\"X\"},{\"comm\":\"[U : [R D' R' , U2]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"H\",\"piece_2\":\"A\"},{\"comm\":\"[R D' R' , U']\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"H\",\"piece_2\":\"B\"},{\"comm\":\"[U2 : [R D' R' , U]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"H\",\"piece_2\":\"D\"},{\"comm\":\"[R D' : [U , R D R']]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"H\",\"piece_2\":\"E\"},{\"comm\":\"[U' R U' : [R' U R , D']]\",\"type\":\"LUF / D-Any\",\"piece_1\":\"H\",\"piece_2\":\"F\"},{\"comm\":\"[R' D : [F' , D' R D R']]\",\"type\":\"Special\",\"piece_1\":\"H\",\"piece_2\":\"G\"},{\"comm\":\"[R U' D : [R' D R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"H\",\"piece_2\":\"I\"},{\"comm\":\"[l' U : [D , R U' R']]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"H\",\"piece_2\":\"K\"},{\"comm\":\"[D2 : [R U R' , D']]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"H\",\"piece_2\":\"L\"},{\"comm\":\"[U R : [R D' R' , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"H\",\"piece_2\":\"N\"},{\"comm\":\"[R D' : [R' U' R , D2]]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"H\",\"piece_2\":\"O\"},{\"comm\":\"[D2 , R U R']\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"H\",\"piece_2\":\"P\"},{\"comm\":\"[U' L U , R]\",\"type\":\"Special\",\"piece_1\":\"H\",\"piece_2\":\"Q\"},{\"comm\":\"[U D R' F' : [D , R U' R']]\",\"type\":\"Special\",\"piece_1\":\"H\",\"piece_2\":\"R\"},{\"comm\":\"[D2 : [R U R' , D]]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"H\",\"piece_2\":\"T\"},{\"comm\":\"[D R U' R' : [R' D R , U2]]\",\"type\":\"Special\",\"piece_1\":\"H\",\"piece_2\":\"U\"},{\"comm\":\"[R U' D R' : [R' D R , U2]]\",\"type\":\"Special\",\"piece_1\":\"H\",\"piece_2\":\"V\"},{\"comm\":\"[R D' R' : [R' D R , U]]\",\"type\":\"Special\",\"piece_1\":\"H\",\"piece_2\":\"W\"},{\"comm\":\"[R' D R U' R : [F , R' U R U']]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"I\",\"piece_2\":\"A\"},{\"comm\":\"[R2 U' : [R U R' , D']]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"I\",\"piece_2\":\"B\"},{\"comm\":\"[l' U' : [R D' R' , U2]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"I\",\"piece_2\":\"E\"},{\"comm\":\"[R' D : [F2 , D' R D R']]\",\"type\":\"Special\",\"piece_1\":\"I\",\"piece_2\":\"G\"},{\"comm\":\"[R U D : [R' D R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"I\",\"piece_2\":\"H\"},{\"comm\":\"[D' R' D : [F2 , D' R D R']]\",\"type\":\"Special\",\"piece_1\":\"I\",\"piece_2\":\"K\"},{\"comm\":\"[R U : [R' D R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"I\",\"piece_2\":\"L\"},{\"comm\":\"[R' F' R D U : [U2 , R' D' R]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"I\",\"piece_2\":\"N\"},{\"comm\":\"[R D' U : [R' D R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"I\",\"piece_2\":\"O\"},{\"comm\":\"[D R U : [R' D' R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"I\",\"piece_2\":\"P\"},{\"comm\":\"[R U D' : [R' D' R , U2]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"I\",\"piece_2\":\"Q\"},{\"comm\":\"[R U R' U D : [R D R' , U2]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"I\",\"piece_2\":\"R\"},{\"comm\":\"[D R' D : [F2 , D' R D R']]\",\"type\":\"Special\",\"piece_1\":\"I\",\"piece_2\":\"S\"},{\"comm\":\"[R U : [R' D' R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"I\",\"piece_2\":\"T\"},{\"comm\":\"[D' R : [R D' R' , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"I\",\"piece_2\":\"U\"},{\"comm\":\"[R U' R' D' : [R' D R , U2]]\",\"type\":\"Special\",\"piece_1\":\"I\",\"piece_2\":\"V\"},{\"comm\":\"[D R : [R D' R' , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"I\",\"piece_2\":\"W\"},{\"comm\":\"[R : [R D' R' , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"I\",\"piece_2\":\"X\"},{\"comm\":\"[U D : [R D R' , U2]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"K\",\"piece_2\":\"A\"},{\"comm\":\"[D' : [U , R' D R]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"K\",\"piece_2\":\"B\"},{\"comm\":\"[D' : [U' , R' D R]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"K\",\"piece_2\":\"D\"},{\"comm\":\"[D' U R' : [R' D R , U']]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"K\",\"piece_2\":\"E\"},{\"comm\":\"[U R U' : [F , U R' U' R]]\",\"type\":\"Special\",\"piece_1\":\"K\",\"piece_2\":\"F\"},{\"comm\":\"[U : [R U' R' , D]]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"K\",\"piece_2\":\"G\"},{\"comm\":\"[l' U : [R U' R' , D]]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"K\",\"piece_2\":\"H\"},{\"comm\":\"[R' : [F2 , R D' R' D]]\",\"type\":\"Special\",\"piece_1\":\"K\",\"piece_2\":\"I\"},{\"comm\":\"[R' : [F' , R D' R' D]]\",\"type\":\"Special\",\"piece_1\":\"K\",\"piece_2\":\"L\"},{\"comm\":\"[U' R' U : [R D R' , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"K\",\"piece_2\":\"N\"},{\"comm\":\"[U : [R U' R' , D']]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"K\",\"piece_2\":\"O\"},{\"comm\":\"[D' R' U : [R U' R' , D]]\",\"type\":\"BUR / D-Any\",\"piece_1\":\"K\",\"piece_2\":\"Q\"},{\"comm\":\"[U' R' U2 : [R D R' , U]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"K\",\"piece_2\":\"R\"},{\"comm\":\"[U : [R U' R' , D2]]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"K\",\"piece_2\":\"S\"},{\"comm\":\"[R U R' U' : [D' , R U R']]\",\"type\":\"Special\",\"piece_1\":\"K\",\"piece_2\":\"T\"},{\"comm\":\"[U R U' : [F2' , U R' U' R]]\",\"type\":\"Special\",\"piece_1\":\"K\",\"piece_2\":\"U\"},{\"comm\":\"[U R' D' : [U' , R' D R]]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"K\",\"piece_2\":\"W\"},{\"comm\":\"[R' D' R : [R U R' , D]]\",\"type\":\"Special\",\"piece_1\":\"K\",\"piece_2\":\"X\"},{\"comm\":\"[D' U : [R D' R' , U2]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"L\",\"piece_2\":\"A\"},{\"comm\":\"[D : [U , R' D' R]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"L\",\"piece_2\":\"B\"},{\"comm\":\"[D : [U' , R' D' R]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"L\",\"piece_2\":\"D\"},{\"comm\":\"[R U2 : [R' D R , U']]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"L\",\"piece_2\":\"E\"},{\"comm\":\"[D R' U' : [R U R' , D']]\",\"type\":\"LUF / D-Any\",\"piece_1\":\"L\",\"piece_2\":\"F\"},{\"comm\":\"[D : [R U R' , D]]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"L\",\"piece_2\":\"H\"},{\"comm\":\"[R U' : [R' D R , U U]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"L\",\"piece_2\":\"I\"},{\"comm\":\"[D' R' D : [F' , D' R D R']]\",\"type\":\"Special\",\"piece_1\":\"L\",\"piece_2\":\"K\"},{\"comm\":\"[U R U D : [R' D' R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"L\",\"piece_2\":\"N\"},{\"comm\":\"[R D2 : [R' U' R , D']]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"L\",\"piece_2\":\"O\"},{\"comm\":\"[D , R U R']\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"L\",\"piece_2\":\"P\"},{\"comm\":\"[R' F : [R U' R' , D]]\",\"type\":\"Special\",\"piece_1\":\"L\",\"piece_2\":\"Q\"},{\"comm\":\"[D R' : [D , R' U R]]\",\"type\":\"Special\",\"piece_1\":\"L\",\"piece_2\":\"R\"},{\"comm\":\"[D' R D' : [R' U' R , D2]]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"L\",\"piece_2\":\"S\"},{\"comm\":\"[D : [R U R' , D2]]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"L\",\"piece_2\":\"T\"},{\"comm\":\"[R U' R' : [R' D R , U2]]\",\"type\":\"Special\",\"piece_1\":\"L\",\"piece_2\":\"V\"},{\"comm\":\"[D R : [R D' R' , U']]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"L\",\"piece_2\":\"W\"},{\"comm\":\"[D R D : [U , R' D' R]]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"L\",\"piece_2\":\"X\"},{\"comm\":\"[R' U D R : [D' , R U' R']]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"N\",\"piece_2\":\"A\"},{\"comm\":\"[U' R2' : [D' , R U2 R']]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"N\",\"piece_2\":\"D\"},{\"comm\":\"[R : [U , R2 D R2 D' R2]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"N\",\"piece_2\":\"E\"},{\"comm\":\"[R U' D' R' : [R' U R , D]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"N\",\"piece_2\":\"F\"},{\"comm\":\"[U R U' : [R' D R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"N\",\"piece_2\":\"G\"},{\"comm\":\"[U R : [U2 , R D' R']]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"N\",\"piece_2\":\"H\"},{\"comm\":\"[R' F' R D U : [R' D' R , U2]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"N\",\"piece_2\":\"I\"},{\"comm\":\"[U' R' U' : [R D R' , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"N\",\"piece_2\":\"K\"},{\"comm\":\"[U R U' D : [R' D' R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"N\",\"piece_2\":\"L\"},{\"comm\":\"[U R U' : [R' D' R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"N\",\"piece_2\":\"O\"},{\"comm\":\"[U' R' D U' : [R D' R' , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"N\",\"piece_2\":\"P\"},{\"comm\":\"[U R2 U' : [D' , R U R']]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"N\",\"piece_2\":\"R\"},{\"comm\":\"[U' R' U' : [R D' R' , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"N\",\"piece_2\":\"S\"},{\"comm\":\"[R' F' R D' U : [R' D R , U2]]\",\"type\":\"Special\",\"piece_1\":\"N\",\"piece_2\":\"T\"},{\"comm\":\"[U' R' : [R' D R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"N\",\"piece_2\":\"U\"},{\"comm\":\"[D' U' R' : [R' D R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"N\",\"piece_2\":\"V\"},{\"comm\":\"[U R U' D' : [R' D R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"N\",\"piece_2\":\"W\"},{\"comm\":\"[D U' R' : [R' D R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"N\",\"piece_2\":\"X\"},{\"comm\":\"[U : [R D R' , U2]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"O\",\"piece_2\":\"A\"},{\"comm\":\"[R D R' , U']\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"O\",\"piece_2\":\"B\"},{\"comm\":\"[U2 : [R D R' , U]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"O\",\"piece_2\":\"D\"},{\"comm\":\"[U' R' F R : [R D R' , U']]\",\"type\":\"Special\",\"piece_1\":\"O\",\"piece_2\":\"E\"},{\"comm\":\"[D' R : [R' U R U' , F]]\",\"type\":\"Special\",\"piece_1\":\"O\",\"piece_2\":\"F\"},{\"comm\":\"[U D' : [R U' R' , D2]]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"O\",\"piece_2\":\"G\"},{\"comm\":\"[R D : [R' U' R , D2]]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"O\",\"piece_2\":\"H\"},{\"comm\":\"[R D' U' : [R' D R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"O\",\"piece_2\":\"I\"},{\"comm\":\"[U : [D' , R U' R']]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"O\",\"piece_2\":\"K\"},{\"comm\":\"[R D : [R' U' R , D]]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"O\",\"piece_2\":\"L\"},{\"comm\":\"[U R U : [R' D' R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"O\",\"piece_2\":\"N\"},{\"comm\":\"[R D' : [R' D R , U]]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"O\",\"piece_2\":\"P\"},{\"comm\":\"[U' R U : [R' U' R , D]]\",\"type\":\"BUR / D-Any\",\"piece_1\":\"O\",\"piece_2\":\"Q\"},{\"comm\":\"[R B' : [R' U' R , D]]\",\"type\":\"Special\",\"piece_1\":\"O\",\"piece_2\":\"R\"},{\"comm\":\"[U' : [R' U' R , D']]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"O\",\"piece_2\":\"S\"},{\"comm\":\"[U' R' : [R' D R , U]]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"O\",\"piece_2\":\"U\"},{\"comm\":\"[D' U R U' : [F2 , U R' U' R]]\",\"type\":\"Special\",\"piece_1\":\"O\",\"piece_2\":\"V\"},{\"comm\":\"[U D' R D' : [U' , R' D R]]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"O\",\"piece_2\":\"X\"},{\"comm\":\"[U2 , R' D' R]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"P\",\"piece_2\":\"A\"},{\"comm\":\"[U , R' D' R]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"P\",\"piece_2\":\"B\"},{\"comm\":\"[U' , R' D' R]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"P\",\"piece_2\":\"D\"},{\"comm\":\"[U R' U' : [R D R' , U']]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"P\",\"piece_2\":\"E\"},{\"comm\":\"[R' U' : [R U R' , D']]\",\"type\":\"LUF / D-Any\",\"piece_1\":\"P\",\"piece_2\":\"F\"},{\"comm\":\"[U R' D' : [R U' R' , D2]]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"P\",\"piece_2\":\"G\"},{\"comm\":\"[R U R' , D2]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"P\",\"piece_2\":\"H\"},{\"comm\":\"[D R U' : [R' D' R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"P\",\"piece_2\":\"I\"},{\"comm\":\"[R U R' , D]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"P\",\"piece_2\":\"L\"},{\"comm\":\"[U' R' D U : [R D' R' , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"P\",\"piece_2\":\"N\"},{\"comm\":\"[R D' : [U , R' D R]]\",\"type\":\"Special\",\"piece_1\":\"P\",\"piece_2\":\"O\"},{\"comm\":\"[R' U : [R U' R' , D']]\",\"type\":\"BUR / D-Any\",\"piece_1\":\"P\",\"piece_2\":\"Q\"},{\"comm\":\"[R' : [D , R' U R]]\",\"type\":\"Special\",\"piece_1\":\"P\",\"piece_2\":\"R\"},{\"comm\":\"[U R' D' : [R U' R' , D']]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"P\",\"piece_2\":\"S\"},{\"comm\":\"[R U R' , D']\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"P\",\"piece_2\":\"T\"},{\"comm\":\"[R D : [U , R' D' R]]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"P\",\"piece_2\":\"U\"},{\"comm\":\"[D' R U' R' : [R' D R , U2]]\",\"type\":\"Special\",\"piece_1\":\"P\",\"piece_2\":\"W\"},{\"comm\":\"[R : [R D' R' , U']]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"P\",\"piece_2\":\"X\"},{\"comm\":\"[R' U' D : [R D R' , U2]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"Q\",\"piece_2\":\"A\"},{\"comm\":\"[R' D' : [R' D R , U']]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"Q\",\"piece_2\":\"D\"},{\"comm\":\"[F' L F , R']\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"Q\",\"piece_2\":\"E\"},{\"comm\":\"[R' F : [D , R U R']]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"Q\",\"piece_2\":\"F\"},{\"comm\":\"[R' U : [D , R U' R']]\",\"type\":\"BUR / D-Any\",\"piece_1\":\"Q\",\"piece_2\":\"G\"},{\"comm\":\"[R , U' L U]\",\"type\":\"Special\",\"piece_1\":\"Q\",\"piece_2\":\"H\"},{\"comm\":\"[R D' U' : [R' D' R , U2]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"Q\",\"piece_2\":\"I\"},{\"comm\":\"[D' R' U : [D , R U' R']]\",\"type\":\"BUR / D-Any\",\"piece_1\":\"Q\",\"piece_2\":\"K\"},{\"comm\":\"[R' F : [D , R U' R']]\",\"type\":\"Special\",\"piece_1\":\"Q\",\"piece_2\":\"L\"},{\"comm\":\"[U' R U : [D , R' U' R]]\",\"type\":\"BUR / D-Any\",\"piece_1\":\"Q\",\"piece_2\":\"O\"},{\"comm\":\"[R' U : [D' , R U' R']]\",\"type\":\"BUR / D-Any\",\"piece_1\":\"Q\",\"piece_2\":\"P\"},{\"comm\":\"[R , U' L' U]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"Q\",\"piece_2\":\"R\"},{\"comm\":\"[D R' U : [D , R U' R']]\",\"type\":\"BUR / D-Any\",\"piece_1\":\"Q\",\"piece_2\":\"S\"},{\"comm\":\"[R U' : [R' U R , D]]\",\"type\":\"Special\",\"piece_1\":\"Q\",\"piece_2\":\"T\"},{\"comm\":\"[D' R U' : [R' U R , D']]\",\"type\":\"BUR / D-Any\",\"piece_1\":\"Q\",\"piece_2\":\"U\"},{\"comm\":\"[U R' U' : [R U R' , D']]\",\"type\":\"Special\",\"piece_1\":\"Q\",\"piece_2\":\"V\"},{\"comm\":\"[D R U' : [R' U R , D']]\",\"type\":\"BUR / D-Any\",\"piece_1\":\"Q\",\"piece_2\":\"W\"},{\"comm\":\"[R U' : [R' U R , D']]\",\"type\":\"BUR / D-Any\",\"piece_1\":\"Q\",\"piece_2\":\"X\"},{\"comm\":\"[R2 U : [D , R' U' R]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"R\",\"piece_2\":\"B\"},{\"comm\":\"[U' R2' : [D' , R U' R']]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"R\",\"piece_2\":\"D\"},{\"comm\":\"[F , l U' l']\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"R\",\"piece_2\":\"F\"},{\"comm\":\"[R B' R' : [U , R' D R]]\",\"type\":\"Special\",\"piece_1\":\"R\",\"piece_2\":\"G\"},{\"comm\":\"[U D R' F' : [R U' R' , D]]\",\"type\":\"Special\",\"piece_1\":\"R\",\"piece_2\":\"H\"},{\"comm\":\"[R U R' D' : [R' D R , U2]]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"R\",\"piece_2\":\"I\"},{\"comm\":\"[U' R' U' : [R D R' , U']]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"R\",\"piece_2\":\"K\"},{\"comm\":\"[D R' : [R' U R , D]]\",\"type\":\"Special\",\"piece_1\":\"R\",\"piece_2\":\"L\"},{\"comm\":\"[U R2 U' : [R U R' , D']]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"R\",\"piece_2\":\"N\"},{\"comm\":\"[R B' : [D , R' U' R]]\",\"type\":\"Special\",\"piece_1\":\"R\",\"piece_2\":\"O\"},{\"comm\":\"[R2' : [U , R D R']]\",\"type\":\"Special\",\"piece_1\":\"R\",\"piece_2\":\"P\"},{\"comm\":\"[U' L' U , R]\",\"type\":\"U-Any / U-Any\",\"piece_1\":\"R\",\"piece_2\":\"Q\"},{\"comm\":\"[U' R' U' : [R D' R' , U']]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"R\",\"piece_2\":\"S\"},{\"comm\":\"[D' R2' : [U , R D R']]\",\"type\":\"Special\",\"piece_1\":\"R\",\"piece_2\":\"T\"},{\"comm\":\"[U' R' : [R' D R , U']]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"R\",\"piece_2\":\"U\"},{\"comm\":\"[D' U' R' : [R' D R , U']]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"R\",\"piece_2\":\"V\"},{\"comm\":\"[U R : [D' , R U' R']]\",\"type\":\"Special\",\"piece_1\":\"R\",\"piece_2\":\"W\"},{\"comm\":\"[R2 U : [D' , R' U' R]]\",\"type\":\"Special\",\"piece_1\":\"R\",\"piece_2\":\"X\"},{\"comm\":\"[U D' : [R D R' , U2]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"S\",\"piece_2\":\"A\"},{\"comm\":\"[D' : [R D R' , U']]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"S\",\"piece_2\":\"B\"},{\"comm\":\"[D : [U' , R' D R]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"S\",\"piece_2\":\"D\"},{\"comm\":\"[D U R' : [R' D R , U']]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"S\",\"piece_2\":\"E\"},{\"comm\":\"[F , l U2 l']\",\"type\":\"Special\",\"piece_1\":\"S\",\"piece_2\":\"F\"},{\"comm\":\"[U D2 : [R U' R' , D']]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"S\",\"piece_2\":\"G\"},{\"comm\":\"[D R' D : [F2 , D' R D R']]\",\"type\":\"Special\",\"piece_1\":\"S\",\"piece_2\":\"I\"},{\"comm\":\"[U : [D2 , R U' R']]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"S\",\"piece_2\":\"K\"},{\"comm\":\"[D' R D : [R' U' R , D2]]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"S\",\"piece_2\":\"L\"},{\"comm\":\"[U' R' U : [R D' R' , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"S\",\"piece_2\":\"N\"},{\"comm\":\"[U' : [D' , R' U' R]]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"S\",\"piece_2\":\"O\"},{\"comm\":\"[U R' D' : [D' , R U' R']]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"S\",\"piece_2\":\"P\"},{\"comm\":\"[D R' U : [R U' R' , D]]\",\"type\":\"BUR / D-Any\",\"piece_1\":\"S\",\"piece_2\":\"Q\"},{\"comm\":\"[U' R' U2 : [R D' R' , U]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"S\",\"piece_2\":\"R\"},{\"comm\":\"[D2' R' : [F' , R D' R' D]]\",\"type\":\"Special\",\"piece_1\":\"S\",\"piece_2\":\"T\"},{\"comm\":\"[U' D' R' D' : [U' , R D R']]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"S\",\"piece_2\":\"U\"},{\"comm\":\"[U' D' R' : [R' D R , U]]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"S\",\"piece_2\":\"V\"},{\"comm\":\"[U R : [D2 , R U' R']]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"S\",\"piece_2\":\"W\"},{\"comm\":\"[U D : [R D' R' , U2]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"T\",\"piece_2\":\"A\"},{\"comm\":\"[D : [R D' R' , U']]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"T\",\"piece_2\":\"B\"},{\"comm\":\"[D' : [U' , R' D' R]]\",\"type\":\"U-Top / D-Side\",\"piece_1\":\"T\",\"piece_2\":\"D\"},{\"comm\":\"[R U2 : [R' D' R , U']]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"T\",\"piece_2\":\"E\"},{\"comm\":\"[D' R' U' : [R U R' , D']]\",\"type\":\"LUF / D-Any\",\"piece_1\":\"T\",\"piece_2\":\"F\"},{\"comm\":\"[R' D R2 : [U , R' D' R]]\",\"type\":\"Special\",\"piece_1\":\"T\",\"piece_2\":\"G\"},{\"comm\":\"[D' : [R U R' , D']]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"T\",\"piece_2\":\"H\"},{\"comm\":\"[R U' : [R' D' R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"T\",\"piece_2\":\"I\"},{\"comm\":\"[R U R' U' : [R U R' , D']]\",\"type\":\"Special\",\"piece_1\":\"T\",\"piece_2\":\"K\"},{\"comm\":\"[D' : [R U R' , D2]]\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"T\",\"piece_2\":\"L\"},{\"comm\":\"[R' F' R D' U' : [R' D R , U2]]\",\"type\":\"Special\",\"piece_1\":\"T\",\"piece_2\":\"N\"},{\"comm\":\"[D' , R U R']\",\"type\":\"D-Side / D-Side\",\"piece_1\":\"T\",\"piece_2\":\"P\"},{\"comm\":\"[R U' : [D , R' U R]]\",\"type\":\"Special\",\"piece_1\":\"T\",\"piece_2\":\"Q\"},{\"comm\":\"[D' R' : [D , R' U R]]\",\"type\":\"Special\",\"piece_1\":\"T\",\"piece_2\":\"R\"},{\"comm\":\"[D R' D : [F' , D' R D R']]\",\"type\":\"Special\",\"piece_1\":\"T\",\"piece_2\":\"S\"},{\"comm\":\"[D' R : [R D' R' , U']]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"T\",\"piece_2\":\"U\"},{\"comm\":\"[D' R D : [U , R' D' R]]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"T\",\"piece_2\":\"V\"},{\"comm\":\"[R U' D : [R' U R , D2]]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"T\",\"piece_2\":\"X\"},{\"comm\":\"[R F' R' U : [R D R' , U2]]\",\"type\":\"U-Top / D-Bottom\",\"piece_1\":\"U\",\"piece_2\":\"A\"},{\"comm\":\"[R F' : [D , R' U' R]]\",\"type\":\"U-Top / D-Bottom\",\"piece_1\":\"U\",\"piece_2\":\"B\"},{\"comm\":\"[U' : [F2' , U R' U' R]]\",\"type\":\"Special\",\"piece_1\":\"U\",\"piece_2\":\"D\"},{\"comm\":\"[D' R : [U , R D' R']]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"U\",\"piece_2\":\"E\"},{\"comm\":\"[U' R' U : [D , R U' R']]\",\"type\":\"LUF / D-Any\",\"piece_1\":\"U\",\"piece_2\":\"F\"},{\"comm\":\"[D R U' R' : [U2 , R' D R]]\",\"type\":\"Special\",\"piece_1\":\"U\",\"piece_2\":\"H\"},{\"comm\":\"[R D U' : [R' D' R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"U\",\"piece_2\":\"I\"},{\"comm\":\"[R : [F2 , R' U R U']]\",\"type\":\"Special\",\"piece_1\":\"U\",\"piece_2\":\"K\"},{\"comm\":\"[U' R' : [U2 , R' D R]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"U\",\"piece_2\":\"N\"},{\"comm\":\"[U' R' : [U , R' D R]]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"U\",\"piece_2\":\"O\"},{\"comm\":\"[R D : [R' D' R , U]]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"U\",\"piece_2\":\"P\"},{\"comm\":\"[D' R U' : [D' , R' U R]]\",\"type\":\"BUR / D-Any\",\"piece_1\":\"U\",\"piece_2\":\"Q\"},{\"comm\":\"[U' R' : [U' , R' D R]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"U\",\"piece_2\":\"R\"},{\"comm\":\"[U' D' R' D' : [R D R' , U']]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"U\",\"piece_2\":\"S\"},{\"comm\":\"[D' R : [U' , R D' R']]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"U\",\"piece_2\":\"T\"},{\"comm\":\" \",\"type\":\" \",\"piece_1\":\"U\",\"piece_2\":\"U\"},{\"comm\":\"[U' R' U R : [D , R U' R']]\",\"type\":\"D-Bottom / D-Bottom\",\"piece_1\":\"U\",\"piece_2\":\"V\"},{\"comm\":\"[R U' D2 : [R' U R , D]]\",\"type\":\"D-Bottom / D-Bottom\",\"piece_1\":\"U\",\"piece_2\":\"X\"},{\"comm\":\"[U2 , R' D R U' R D' R']\",\"type\":\"Special\",\"piece_1\":\"V\",\"piece_2\":\"A\"},{\"comm\":\"[U , R' D R U' R D' R']\",\"type\":\"Special\",\"piece_1\":\"V\",\"piece_2\":\"B\"},{\"comm\":\"[U' , R' D R U' R D' R']\",\"type\":\"Special\",\"piece_1\":\"V\",\"piece_2\":\"D\"},{\"comm\":\"[U R' D' : [R' D' R , U']]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"V\",\"piece_2\":\"E\"},{\"comm\":\"[U' D' R' U : [D , R U' R']]\",\"type\":\"LUF / D-Any\",\"piece_1\":\"V\",\"piece_2\":\"F\"},{\"comm\":\"[U D R D' : [R' D R , U']]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"V\",\"piece_2\":\"G\"},{\"comm\":\"[R U' D R' : [U2 , R' D R]]\",\"type\":\"Special\",\"piece_1\":\"V\",\"piece_2\":\"H\"},{\"comm\":\"[R U' R' U D : [R D R' , U2]]\",\"type\":\"Special\",\"piece_1\":\"V\",\"piece_2\":\"I\"},{\"comm\":\"[R U' R' : [U2 , R' D R]]\",\"type\":\"Special\",\"piece_1\":\"V\",\"piece_2\":\"L\"},{\"comm\":\"[U' D' R' : [U2 , R' D R]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"V\",\"piece_2\":\"N\"},{\"comm\":\"[D' R : [F2 , R' U R U']]\",\"type\":\"Special\",\"piece_1\":\"V\",\"piece_2\":\"O\"},{\"comm\":\"[U R' U' : [D' , R U R']]\",\"type\":\"Special\",\"piece_1\":\"V\",\"piece_2\":\"Q\"},{\"comm\":\"[D' U' R' : [U' , R' D R]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"V\",\"piece_2\":\"R\"},{\"comm\":\"[U' D' R' : [U , R' D R]]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"V\",\"piece_2\":\"S\"},{\"comm\":\"[D' R D : [R' D' R , U]]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"V\",\"piece_2\":\"T\"},{\"comm\":\"[U' R' U R : [R U' R' , D]]\",\"type\":\"D-Bottom / D-Bottom\",\"piece_1\":\"V\",\"piece_2\":\"U\"},{\"comm\":\"[D R U' R' : [R' U R , D']]\",\"type\":\"D-Bottom / D-Bottom\",\"piece_1\":\"V\",\"piece_2\":\"W\"},{\"comm\":\"[R U' R' U : [R D' R' , U2]]\",\"type\":\"D-Bottom / D-Bottom\",\"piece_1\":\"V\",\"piece_2\":\"X\"},{\"comm\":\"[R D' R' : [U2 , R' D R]]\",\"type\":\"U-Top / D-Bottom\",\"piece_1\":\"W\",\"piece_2\":\"A\"},{\"comm\":\"[R D' R' U R' D R , U']\",\"type\":\"Special\",\"piece_1\":\"W\",\"piece_2\":\"B\"},{\"comm\":\"[R D' R' : [U' , R' D R]]\",\"type\":\"U-Top / D-Bottom\",\"piece_1\":\"W\",\"piece_2\":\"D\"},{\"comm\":\"[D R : [U , R D' R']]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"W\",\"piece_2\":\"E\"},{\"comm\":\"[R U' R2' : [U , R D R']]\",\"type\":\"Special\",\"piece_1\":\"W\",\"piece_2\":\"F\"},{\"comm\":\"[U R2 : [U' , R' D R]]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"W\",\"piece_2\":\"G\"},{\"comm\":\"[R D' R' : [U , R' D R]]\",\"type\":\"Special\",\"piece_1\":\"W\",\"piece_2\":\"H\"},{\"comm\":\"[D R : [U2 , R D' R']]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"W\",\"piece_2\":\"I\"},{\"comm\":\"[U R D' : [R' D R , U']]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"W\",\"piece_2\":\"K\"},{\"comm\":\"[D' R2 : [R' U' R , D']]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"W\",\"piece_2\":\"L\"},{\"comm\":\"[U R U D' : [R' D R , U2]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"W\",\"piece_2\":\"N\"},{\"comm\":\"[D' R U' R' : [U2 , R' D R]]\",\"type\":\"Special\",\"piece_1\":\"W\",\"piece_2\":\"P\"},{\"comm\":\"[D R U' : [D' , R' U R]]\",\"type\":\"BUR / D-Any\",\"piece_1\":\"W\",\"piece_2\":\"Q\"},{\"comm\":\"[U R2 : [U' , R' D' R]]\",\"type\":\"Special\",\"piece_1\":\"W\",\"piece_2\":\"R\"},{\"comm\":\"[U R2 : [U' , R' D2 R]]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"W\",\"piece_2\":\"S\"},{\"comm\":\"[U' R2' : [D , R2 U R2' U' R2]]\",\"type\":\"D-Bottom / D-Bottom\",\"piece_1\":\"W\",\"piece_2\":\"U\"},{\"comm\":\"[D R U' R' : [D' , R' U R]]\",\"type\":\"D-Bottom / D-Bottom\",\"piece_1\":\"W\",\"piece_2\":\"V\"},{\"comm\":\"[R U' R' : [R' U R , D']]\",\"type\":\"D-Bottom / D-Bottom\",\"piece_1\":\"W\",\"piece_2\":\"X\"},{\"comm\":\"[R' U' D' R : [D , R U' R']]\",\"type\":\"Special\",\"piece_1\":\"X\",\"piece_2\":\"A\"},{\"comm\":\"[R' B : [R U R' , D']]\",\"type\":\"U-Top / D-Bottom\",\"piece_1\":\"X\",\"piece_2\":\"B\"},{\"comm\":\"[R' D' R : [D , R U' R']]\",\"type\":\"Special\",\"piece_1\":\"X\",\"piece_2\":\"D\"},{\"comm\":\"[R : [U , R D' R']]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"X\",\"piece_2\":\"E\"},{\"comm\":\"[U' D R' U : [D , R U' R']]\",\"type\":\"LUF / D-Any\",\"piece_1\":\"X\",\"piece_2\":\"F\"},{\"comm\":\"[D R : [F2 , R' U R U']]\",\"type\":\"Special\",\"piece_1\":\"X\",\"piece_2\":\"G\"},{\"comm\":\"[R2 U : [R' U R , D']]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"X\",\"piece_2\":\"I\"},{\"comm\":\"[R' D' R : [D ,R U R']]\",\"type\":\"Special\",\"piece_1\":\"X\",\"piece_2\":\"K\"},{\"comm\":\"[D R D : [R' D' R , U]]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"X\",\"piece_2\":\"L\"},{\"comm\":\"[D U' R' : [U2 , R' D R]]\",\"type\":\"U-Side / D-Any\",\"piece_1\":\"X\",\"piece_2\":\"N\"},{\"comm\":\"[U D' R D' : [R' D R , U']]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"X\",\"piece_2\":\"O\"},{\"comm\":\"[R2 : [R' U' R , D']]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"X\",\"piece_2\":\"P\"},{\"comm\":\"[R U' : [D' , R' U R]]\",\"type\":\"BUR / D-Any\",\"piece_1\":\"X\",\"piece_2\":\"Q\"},{\"comm\":\"[R2 U : [R' U' R , D']]\",\"type\":\"Special\",\"piece_1\":\"X\",\"piece_2\":\"R\"},{\"comm\":\"[R U' D' : [R' U R , D2]]\",\"type\":\"D-Side / D-Bottom\",\"piece_1\":\"X\",\"piece_2\":\"T\"},{\"comm\":\"[R U' D' : [R' U R , D']]\",\"type\":\"D-Bottom / D-Bottom\",\"piece_1\":\"X\",\"piece_2\":\"U\"},{\"comm\":\"[R U' R' U' : [R D' R' , U2]]\",\"type\":\"D-Bottom / D-Bottom\",\"piece_1\":\"X\",\"piece_2\":\"V\"},{\"comm\":\"[R U' R' : [D' , R' U R]]\",\"type\":\"D-Bottom / D-Bottom\",\"piece_1\":\"X\",\"piece_2\":\"W\"}],\"PARITY\":[{\"piece\":\"A (UBL)\",\"comm\":\"R' U2' R' F' R2 U' R' F' U' F R U R' F U2' R\"},{\"piece\":\"B (UBR)\",\"comm\":\"R U R' F' R U R' U' R' F R2 U' R' U'\"},{\"piece\":\"D (UFL)\",\"comm\":\"U L' U' L F L' U' L U L F' L2 U L\"},{\"piece\":\"E (LUB)\",\"comm\":\"[U R' U' : [UBR (B) Parity]]\"},{\"piece\":\"F (LUF)\",\"comm\":\"U2' R' U R U2' R' L' U R U' L\"},{\"piece\":\"G (LDF)\",\"comm\":\"[D U R U' : [UBR (B) Parity]]\"},{\"piece\":\"H (LDB)\",\"comm\":\"[R D' R' : [UBR (B) Parity]]\"},{\"piece\":\"I (FUL)\",\"comm\":\"[L : [DFL (U) Parity]]\"},{\"piece\":\"K (FDR)\",\"comm\":\"[U R U' : [UBR (B) Parity]]\"},{\"piece\":\"L (FDL)\",\"comm\":\"[D : [RDF (P) Parity]]\"},{\"piece\":\"N (RUB)\",\"comm\":\"U x' R' F R F' U L' U L U2' R U' R' U\"},{\"piece\":\"O (RDB)\",\"comm\":\"[D' U R U' : [UBR (B) Parity]]\"},{\"piece\":\"P (RDF)\",\"comm\":\"U2 R' F R2 U' R' U' R U R' F' R U R' U\"},{\"piece\":\"Q (BUR)\",\"comm\":\"U R U' R' U2 L R U' R' U L' U\"},{\"piece\":\"R (BUL)\",\"comm\":\"[L : [UFL (D) Parity]]\"},{\"piece\":\"S (BDL)\",\"comm\":\"[U' L U : [UBR (B) Parity]]\"},{\"piece\":\"T (BDR)\",\"comm\":\"[D' : [RDF (P) Parity]]\"},{\"piece\":\"U (DFL)\",\"comm\":\"U' x U2' R2' F R F' R U2' r' U r x' U\"},{\"piece\":\"V (DFR)\",\"comm\":\"[D U R2 U' : [UBR (B) Parity]]\"},{\"piece\":\"W (DBR)\",\"comm\":\"[U R2 U' : [UBR (B) Parity]]\"},{\"piece\":\"X (DBL)\",\"comm\":\"[D' U R2 U' : [UBR (B) Parity]]\"}],\"2FLIPS\":[{\"comm\":\"U' S R' F' R S' R' F R U' M' U2 M\",\"piece_1\":\"UF\",\"piece_2\":\"UB\"},{\"comm\":\"R' F R U' M' U2 M U' S R' F' R S'\",\"piece_1\":\"UF\",\"piece_2\":\"UR\"},{\"comm\":\"L F' L' U M' U2' M U S' L F L' S\",\"piece_1\":\"UF\",\"piece_2\":\"UL\"},{\"comm\":\"[R' E R : U'] [R E2 R' : U]\",\"piece_1\":\"UF\",\"piece_2\":\"LF\"},{\"comm\":\"[R E' R' : U'] [R' E2 R : U]\",\"piece_1\":\"UF\",\"piece_2\":\"LB\"},{\"comm\":\"[L E' L' : U] [L' E2' L : U']\",\"piece_1\":\"UF\",\"piece_2\":\"RF\"},{\"comm\":\"[L' E L : U] [L E2' L' : U']\",\"piece_1\":\"UF\",\"piece_2\":\"RB\"},{\"comm\":\"U [R E R' : U2] [S , R2'] U\",\"piece_1\":\"UF\",\"piece_2\":\"DR\"},{\"comm\":\"U' [L' E' L : U2'] [S' , L2] U'\",\"piece_1\":\"UF\",\"piece_2\":\"DL\"},{\"comm\":\"U2 M' U2 M U' S R' F' R S' R' F R U\",\"piece_1\":\"UF\",\"piece_2\":\"DF\"},{\"comm\":\"U2 M U' S R' F' R S' R' F R U' M'\",\"piece_1\":\"UF\",\"piece_2\":\"DB\"},{\"comm\":\"[M : R' F R U' M' U2 M U' S R' F' R S']\",\"piece_1\":\"UB\",\"piece_2\":\"UR\"},{\"comm\":\"[M : L F' L' U M' U2' M U S' L F L' S]\",\"piece_1\":\"UB\",\"piece_2\":\"UL\"},{\"comm\":\"[R' E R : U] [R E2 R' : U']\",\"piece_1\":\"UB\",\"piece_2\":\"LF\"},{\"comm\":\"[R E' R' : U] [R' E2 R : U']\",\"piece_1\":\"UB\",\"piece_2\":\"LB\"},{\"comm\":\"[L E' L' : U'] [L' E2' L : U]\",\"piece_1\":\"UB\",\"piece_2\":\"RF\"},{\"comm\":\"[L' E L : U'] [L E2' L' : U]\",\"piece_1\":\"UB\",\"piece_2\":\"RB\"},{\"comm\":\"U' [R E R' : U2] [S , R2'] U'\",\"piece_1\":\"UB\",\"piece_2\":\"DR\"},{\"comm\":\"U [L' E' L : U2'] [S' , L2] U\",\"piece_1\":\"UB\",\"piece_2\":\"DL\"},{\"comm\":\"M' U2 M U' S R' F' R S' R' F R U'\",\"piece_1\":\"UB\",\"piece_2\":\"DF\"},{\"comm\":\"M U' S R' F' R S' R' F R U' M' U2\",\"piece_1\":\"UB\",\"piece_2\":\"DB\"},{\"comm\":\"S R' F' R S' R' F R U' M' U2 M U'\",\"piece_1\":\"UR\",\"piece_2\":\"UL\"},{\"comm\":\"U [R' E R : U'] [R E2 R' : U] U'\",\"piece_1\":\"UR\",\"piece_2\":\"LF\"},{\"comm\":\"U [R E' R' : U'] [R' E2 R : U] U'\",\"piece_1\":\"UR\",\"piece_2\":\"LB\"},{\"comm\":\"[L E' L' : U2'] [L' E2' L : U2']\",\"piece_1\":\"UR\",\"piece_2\":\"RF\"},{\"comm\":\"[L' E L : U2'] [L E2' L' : U2']\",\"piece_1\":\"UR\",\"piece_2\":\"RB\"},{\"comm\":\"[U2 , R E R'] [S , R2']\",\"piece_1\":\"UR\",\"piece_2\":\"DR\"},{\"comm\":\"[L' E' L : U2'] [S' , L2] U2'\",\"piece_1\":\"UR\",\"piece_2\":\"DL\"},{\"comm\":\"U' M' U2 M U' S R' F' R S' R' F R\",\"piece_1\":\"UR\",\"piece_2\":\"DF\"},{\"comm\":\"U' M U' S R' F' R S' R' F R U' M' U'\",\"piece_1\":\"UR\",\"piece_2\":\"DB\"},{\"comm\":\"[R' E R : U2] [R E2 R' : U2]\",\"piece_1\":\"UL\",\"piece_2\":\"LF\"},{\"comm\":\"[R E' R' : U2] [R' E2 R : U2]\",\"piece_1\":\"UL\",\"piece_2\":\"LB\"},{\"comm\":\"U' [L E' L' : U] [L' E2' L : U'] U\",\"piece_1\":\"UL\",\"piece_2\":\"RF\"},{\"comm\":\"U' [L' E L : U] [L E2' L' : U'] U\",\"piece_1\":\"UL\",\"piece_2\":\"RB\"},{\"comm\":\"[R E R' : U2] [S , R2'] U2\",\"piece_1\":\"UL\",\"piece_2\":\"DR\"},{\"comm\":\"[U2 , L' E' L] [S' , L2]\",\"piece_1\":\"UL\",\"piece_2\":\"DL\"},{\"comm\":\"U M' U2 M U' S R' F' R S' R' F R U2\",\"piece_1\":\"UL\",\"piece_2\":\"DF\"},{\"comm\":\"U M U' S R' F' R S' R' F R U' M' U\",\"piece_1\":\"UL\",\"piece_2\":\"DB\"},{\"comm\":\"[L2' , E'] [L' S L , F2']\",\"piece_1\":\"LF\",\"piece_2\":\"LB\"},{\"comm\":\"R S R' [E , R2] F2 R S' R' F2\",\"piece_1\":\"LF\",\"piece_2\":\"RF\"},{\"comm\":\"[E , R2] [F2 , R S' R']\",\"piece_1\":\"LF\",\"piece_2\":\"RB\"},{\"comm\":\"[R' : [E , R2]] [R' F2 R , S']\",\"piece_1\":\"LF\",\"piece_2\":\"DR\"},{\"comm\":\"[S' : [R' : [E , R2]] [R' F2 R , S']]\",\"piece_1\":\"LF\",\"piece_2\":\"DL\"},{\"comm\":\"[M' : [R' E R : U'] [R E2 R' : U]]\",\"piece_1\":\"LF\",\"piece_2\":\"DF\"},{\"comm\":\"[M : [R' E R : U] [R E2 R' : U']]\",\"piece_1\":\"LF\",\"piece_2\":\"DB\"},{\"comm\":\"[E' , L2'] [F2' , L' S L]\",\"piece_1\":\"LB\",\"piece_2\":\"RF\"},{\"comm\":\"R2' E' [R S' R' , F2] R2 E'\",\"piece_1\":\"LB\",\"piece_2\":\"RB\"},{\"comm\":\"[R: [E', R2']] [R B2' R', S']\",\"piece_1\":\"LB\",\"piece_2\":\"DR\"},{\"comm\":\"[S' : [R: [E', R2']] [R B2' R', S']]\",\"piece_1\":\"LB\",\"piece_2\":\"DL\"},{\"comm\":\"[M' : [R E' R' : U'] [R' E2 R : U]]\",\"piece_1\":\"LB\",\"piece_2\":\"DF\"},{\"comm\":\"[M : [R E' R' : U] [R' E2 R : U']]\",\"piece_1\":\"LB\",\"piece_2\":\"DB\"},{\"comm\":\"[R2, E] [R S' R', F2]\",\"piece_1\":\"RF\",\"piece_2\":\"RB\"},{\"comm\":\"[S : [L : [E' , L2']] [L F2' L' , S]]\",\"piece_1\":\"RF\",\"piece_2\":\"DR\"},{\"comm\":\"[L : [E' , L2']] [L F2' L' , S]\",\"piece_1\":\"RF\",\"piece_2\":\"DL\"},{\"comm\":\"[M' : [L E' L' : U] [L' E2' L : U']]\",\"piece_1\":\"RF\",\"piece_2\":\"DF\"},{\"comm\":\"[M : [L E' L' : U'] [L' E2' L : U]]\",\"piece_1\":\"RF\",\"piece_2\":\"DB\"},{\"comm\":\"[S : [L': [E, L2]] [L' B2 L, S]]\",\"piece_1\":\"RB\",\"piece_2\":\"DR\"},{\"comm\":\"[L': [E, L2]] [L' B2 L, S]\",\"piece_1\":\"RB\",\"piece_2\":\"DL\"},{\"comm\":\"[M' : [L' E L : U] [L E2' L' : U']]\",\"piece_1\":\"RB\",\"piece_2\":\"DF\"},{\"comm\":\"[M : [L' E L : U'] [L E2' L' : U]]\",\"piece_1\":\"RB\",\"piece_2\":\"DB\"},{\"comm\":\"[U' : [R2' , S']] [R F R' , S']\",\"piece_1\":\"DR\",\"piece_2\":\"DL\"},{\"comm\":\"[R' F' R , S'] [R F' R' , S]\",\"piece_1\":\"DR\",\"piece_2\":\"DF\"},{\"comm\":\"S2' L' B' L S2' L2' S L B L' S' L2\",\"piece_1\":\"DR\",\"piece_2\":\"DB\"},{\"comm\":\"[L F L', S] [L' F L , S']\",\"piece_1\":\"DL\",\"piece_2\":\"DF\"},{\"comm\":\"S2 R B R' S2 R2 S' R' B' R S R2'\",\"piece_1\":\"DL\",\"piece_2\":\"DB\"},{\"comm\":\"[M2' : U' S R' F' R S' R' F R U' M' U2 M]\",\"piece_1\":\"DF\",\"piece_2\":\"DB\"}],\"2TWISTS\":[{\"comm\":\"[U , R' D R D' R' D R]\",\"piece_1\":\"RUF/FUR\",\"piece_2\":\"RUB\"},{\"comm\":\"[R' D R D' R' D R , U]\",\"piece_1\":\"RUF/FUR\",\"piece_2\":\"BUR\"},{\"comm\":\"[U2 , R' D R D' R' D R]\",\"piece_1\":\"RUF/FUR\",\"piece_2\":\"BUL\"},{\"comm\":\"[R' D R D' R' D R , U2]\",\"piece_1\":\"RUF/FUR\",\"piece_2\":\"LUB\"},{\"comm\":\"[U' , R' D R D' R' D R]\",\"piece_1\":\"RUF/FUR\",\"piece_2\":\"LUF\"},{\"comm\":\"[R' D R D' R' D R , U']\",\"piece_1\":\"RUF/FUR\",\"piece_2\":\"FUL\"},{\"comm\":\"Letters [PB] [BK]\",\"piece_1\":\"RUF/FUR\",\"piece_2\":\"FDR\"},{\"comm\":\"Letters [KB] [BP]\",\"piece_1\":\"RUF/FUR\",\"piece_2\":\"RDF\"},{\"comm\":\"Letters [TB] [BO]\",\"piece_1\":\"RUF/FUR\",\"piece_2\":\"RDB\"},{\"comm\":\"Letters [OB] [BT]\",\"piece_1\":\"RUF/FUR\",\"piece_2\":\"BDR\"},{\"comm\":\"Letters [HB] [BS]\",\"piece_1\":\"RUF/FUR\",\"piece_2\":\"BDL\"},{\"comm\":\"Letters [SB] [BH]\",\"piece_1\":\"RUF/FUR\",\"piece_2\":\"LDB\"},{\"comm\":\"Letters [LB] [BG]\",\"piece_1\":\"RUF/FUR\",\"piece_2\":\"LDF\"},{\"comm\":\"Letters [GB] [BL]\",\"piece_1\":\"RUF/FUR\",\"piece_2\":\"FDL\"},{\"comm\":\"[U2 : [R' D R D' R' D R , U']]\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"BUL\"},{\"comm\":\"[U : [R' D R D' R' D R , U]]\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"LUB\"},{\"comm\":\"[U' : [R' D R D' R' D R , U2]]\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"LUF\"},{\"comm\":\"[U : [R' D R D' R' D R , U2]]\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"FUL\"},{\"comm\":\"[R' D' R : U] [D' R' D R : U']\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"FDR\"},{\"comm\":\"[D' R' D R : U] [R' D' R : U']\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"RDF\"},{\"comm\":\"[U' : [D R D' R' : U] [R D R' : U']]\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"RDB\"},{\"comm\":\"[U' : [R D R' : U] [D R D' R' : U']]\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"BDR\"},{\"comm\":\"[U' : [R D' R' : U] [D' R D R' : U']]\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"BDL\"},{\"comm\":\"[U' : [D' R D R' : U] [R D' R' : U']]\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"LDB\"},{\"comm\":\"[D R' D' R : U] [R' D R : U']\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"LDF\"},{\"comm\":\"[R' D R : U] [D R' D' R : U']\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"FDL\"},{\"comm\":\"[U' : [R' D R D' R' D R , U']]\",\"piece_1\":\"LUB/BUL\",\"piece_2\":\"LUF\"},{\"comm\":\"[U2 : [R' D R D' R' D R , U]]\",\"piece_1\":\"LUB/BUL\",\"piece_2\":\"FUL\"},{\"comm\":\"[R' D' R : U2] [D' R' D R : U2]\",\"piece_1\":\"LUB/BUL\",\"piece_2\":\"FDR\"},{\"comm\":\"[D' R' D R : U2] [R' D' R : U2]\",\"piece_1\":\"LUB/BUL\",\"piece_2\":\"RDF\"},{\"comm\":\"[D R D' R' : U] [R D R' : U']\",\"piece_1\":\"LUB/BUL\",\"piece_2\":\"RDB\"},{\"comm\":\"[R D R' : U] [D R D' R' : U']\",\"piece_1\":\"LUB/BUL\",\"piece_2\":\"BDR\"},{\"comm\":\"[R D' R' : U] [D' R D R' : U']\",\"piece_1\":\"LUB/BUL\",\"piece_2\":\"BDL\"},{\"comm\":\"[D' R D R' : U] [R D' R' : U']\",\"piece_1\":\"LUB/BUL\",\"piece_2\":\"LDB\"},{\"comm\":\"[D R' D' R : U2] [R' D R : U2]\",\"piece_1\":\"LUB/BUL\",\"piece_2\":\"LDF\"},{\"comm\":\"[R' D R : U2] [D R' D' R : U2]\",\"piece_1\":\"LUB/BUL\",\"piece_2\":\"FDL\"},{\"comm\":\"[R' D' R : U'] [D' R' D R : U]\",\"piece_1\":\"LUF/FUL\",\"piece_2\":\"FDR\"},{\"comm\":\"[D' R' D R : U'] [R' D' R : U]\",\"piece_1\":\"LUF/FUL\",\"piece_2\":\"RDF\"},{\"comm\":\"[D R D' R' : U2] [R D R' : U2]\",\"piece_1\":\"LUF/FUL\",\"piece_2\":\"RDB\"},{\"comm\":\"[R D R' : U2] [D R D' R' : U2]\",\"piece_1\":\"LUF/FUL\",\"piece_2\":\"BDR\"},{\"comm\":\"[R D' R' : U2] [D' R D R' : U2]\",\"piece_1\":\"LUF/FUL\",\"piece_2\":\"BDL\"},{\"comm\":\"[D' R D R' : U2] [R D' R' : U2]\",\"piece_1\":\"LUF/FUL\",\"piece_2\":\"LDB\"},{\"comm\":\"[D R' D' R : U'] [R' D R : U]\",\"piece_1\":\"LUF/FUL\",\"piece_2\":\"LDF\"},{\"comm\":\"[R' D R : U'] [D R' D' R : U]\",\"piece_1\":\"LUF/FUL\",\"piece_2\":\"FDL\"},{\"comm\":\"[D' , R U' R' U R U' R']\",\"piece_1\":\"RDF/FDR\",\"piece_2\":\"RDB\"},{\"comm\":\"[R U' R' U R U' R' , D']\",\"piece_1\":\"RDF/FDR\",\"piece_2\":\"BDR\"},{\"comm\":\"[D2 , R U' R' U R U' R']\",\"piece_1\":\"RDF/FDR\",\"piece_2\":\"BDL\"},{\"comm\":\"[R U' R' U R U' R' , D2]\",\"piece_1\":\"RDF/FDR\",\"piece_2\":\"LDB\"},{\"comm\":\"[D , R U' R' U R U' R']\",\"piece_1\":\"RDF/FDR\",\"piece_2\":\"LDF\"},{\"comm\":\"[R U' R' U R U' R' , D]\",\"piece_1\":\"RDF/FDR\",\"piece_2\":\"FDL\"},{\"comm\":\"[D2 : [R U' R' U R U' R' , D]]\",\"piece_1\":\"RDB/BDR\",\"piece_2\":\"BDL\"},{\"comm\":\"[D' : [R U' R' U R U' R' , D']]\",\"piece_1\":\"RDB/BDR\",\"piece_2\":\"LDB\"},{\"comm\":\"[D : [R U' R' U R U' R' , D2]]\",\"piece_1\":\"RDB/BDR\",\"piece_2\":\"LDF\"},{\"comm\":\"[D' : [R U' R' U R U' R' , D2]]\",\"piece_1\":\"RDB/BDR\",\"piece_2\":\"FDL\"},{\"comm\":\"[D : [R U' R' U R U' R' , D]]\",\"piece_1\":\"LDB/BDL\",\"piece_2\":\"LDF\"},{\"comm\":\"[D2 : [R U' R' U R U' R' , D']]\",\"piece_1\":\"LDB/BDL\",\"piece_2\":\"FDL\"}],\"3TWISTS\":[{\"comm\":\"(R U R' U R U2' R') U (R U R' U R' U' R2 U' R' U R' U R) U'\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"BUL\"},{\"comm\":\"U + [FUL/BUR]\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"LUB\"},{\"comm\":\"U' + [BUL/RUB]\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"LUF\"},{\"comm\":\"(R' U' R U' R' U2 R) U' (R2' U R U R' U' R3 U' R' U R') U'\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"FUL\"},{\"comm\":\"Letters [BP] [KQ]\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"FDR\"},{\"comm\":\"Letters [BK] [PN]\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"RDF\"},{\"comm\":\"Letters [BT] [OQ]\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"RDB\"},{\"comm\":\"Letters [BO] [TN]\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"BDR\"},{\"comm\":\"Letters [BH] [SQ]\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"BDL\"},{\"comm\":\"Letters [BS] [HN]\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"LDB\"},{\"comm\":\"Letters [BL] [GQ]\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"LDF\"},{\"comm\":\"Letters [BG] [LN]\",\"piece_1\":\"RUB/BUR\",\"piece_2\":\"FDL\"},{\"comm\":\"U2 + [BUL/RUB]\",\"piece_1\":\"LUB/BUL\",\"piece_2\":\"LUF\"},{\"comm\":\"U' + [FUL/BUR]\",\"piece_1\":\"LUB/BUL\",\"piece_2\":\"FUL\"},{\"comm\":\"Letters [AP] [KE]\",\"piece_1\":\"LUB/BUL\",\"piece_2\":\"FDR\"},{\"comm\":\"Letters [AK] [PR]\",\"piece_1\":\"LUB/BUL\",\"piece_2\":\"RDF\"},{\"comm\":\"Letters [AT] [OE]\",\"piece_1\":\"LUB/BUL\",\"piece_2\":\"RDB\"},{\"comm\":\"Letters [AO] [TR]\",\"piece_1\":\"LUB/BUL\",\"piece_2\":\"BDR\"},{\"comm\":\"Letters [AH] [SE]\",\"piece_1\":\"LUB/BUL\",\"piece_2\":\"BDL\"},{\"comm\":\"Letters [AS] [HR]\",\"piece_1\":\"LUB/BUL\",\"piece_2\":\"LDB\"},{\"comm\":\"Letters [AL] [GE]\",\"piece_1\":\"LUB/BUL\",\"piece_2\":\"LDF\"},{\"comm\":\"Letters [AG] [LR]\",\"piece_1\":\"LUB/BUL\",\"piece_2\":\"FDL\"},{\"comm\":\"Letters [DP] [KI]\",\"piece_1\":\"LUF/FUL\",\"piece_2\":\"FDR\"},{\"comm\":\"Letters [DK] [PF]\",\"piece_1\":\"LUF/FUL\",\"piece_2\":\"RDF\"},{\"comm\":\"Letters [DT] [OI]\",\"piece_1\":\"LUF/FUL\",\"piece_2\":\"RDB\"},{\"comm\":\"Letters [DO] [TF]\",\"piece_1\":\"LUF/FUL\",\"piece_2\":\"BDR\"},{\"comm\":\"Letters [DH] [SI]\",\"piece_1\":\"LUF/FUL\",\"piece_2\":\"BDL\"},{\"comm\":\"Letters [DS] [HF]\",\"piece_1\":\"LUF/FUL\",\"piece_2\":\"LDB\"},{\"comm\":\"Letters [DL] [GI]\",\"piece_1\":\"LUF/FUL\",\"piece_2\":\"LDF\"},{\"comm\":\"Letters [DG] [LF]\",\"piece_1\":\"LUF/FUL\",\"piece_2\":\"FDL\"},{\"comm\":\"Letters [KO] [WP]\",\"piece_1\":\"RDF/FDR\",\"piece_2\":\"RDB\"},{\"comm\":\"Letters [PT] [WK]\",\"piece_1\":\"RDF/FDR\",\"piece_2\":\"BDR\"},{\"comm\":\"Letters [KS] [XP]\",\"piece_1\":\"RDF/FDR\",\"piece_2\":\"BDL\"},{\"comm\":\"Letters [PH] [XK]\",\"piece_1\":\"RDF/FDR\",\"piece_2\":\"LDB\"},{\"comm\":\"Letters [KG] [UP]\",\"piece_1\":\"RDF/FDR\",\"piece_2\":\"LDF\"},{\"comm\":\"Letters [PL] [UK]\",\"piece_1\":\"RDF/FDR\",\"piece_2\":\"FDL\"},{\"comm\":\"Letters [OS] [XT]\",\"piece_1\":\"RDB/BDR\",\"piece_2\":\"BDL\"},{\"comm\":\"Letters [TH] [XO]\",\"piece_1\":\"RDB/BDR\",\"piece_2\":\"LDB\"},{\"comm\":\"Letters [OG] [UT]\",\"piece_1\":\"RDB/BDR\",\"piece_2\":\"LDF\"},{\"comm\":\"Letters [TL] [UO]\",\"piece_1\":\"RDB/BDR\",\"piece_2\":\"FDL\"},{\"comm\":\"Letters [GS] [XL]\",\"piece_1\":\"LDB/BDL\",\"piece_2\":\"LDF\"},{\"comm\":\"Letters [LH] [XG]\",\"piece_1\":\"LDB/BDL\",\"piece_2\":\"FDL\"}]}");

},{}]},["3vMS6","8lqZg"], "8lqZg", "parcelRequire4b33")

//# sourceMappingURL=index.975ef6c8.js.map
