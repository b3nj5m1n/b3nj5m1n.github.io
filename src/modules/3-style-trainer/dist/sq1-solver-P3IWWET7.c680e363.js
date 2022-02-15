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
})({"dnA8E":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = true;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "54523143c680e363";
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

},{}],"dVWIy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRandomSquare1ScrambleString", ()=>getRandomSquare1ScrambleString
);
var _chunkRENZB7QNJs = require("./chunk-RENZB7QN.js");
var _chunkWO2AXYFEJs = require("./chunk-WO2AXYFE.js");
// src/cubing/vendor/sq12phase/sq1-solver.js
function FullCube_copy(obj, c) {
    obj.ul = c.ul;
    obj.ur = c.ur;
    obj.dl = c.dl;
    obj.dr = c.dr;
    obj.ml = c.ml;
}
function FullCube_doMove(obj, move) {
    var temp;
    move <<= 2;
    if (move > 24) {
        move = 48 - move;
        temp = obj.ul;
        obj.ul = (~~obj.ul >> move | obj.ur << 24 - move) & 16777215;
        obj.ur = (~~obj.ur >> move | temp << 24 - move) & 16777215;
    } else if (move > 0) {
        temp = obj.ul;
        obj.ul = (obj.ul << move | ~~obj.ur >> 24 - move) & 16777215;
        obj.ur = (obj.ur << move | ~~temp >> 24 - move) & 16777215;
    } else if (move == 0) {
        temp = obj.ur;
        obj.ur = obj.dl;
        obj.dl = temp;
        obj.ml = 1 - obj.ml;
    } else if (move >= -24) {
        move = -move;
        temp = obj.dl;
        obj.dl = (obj.dl << move | ~~obj.dr >> 24 - move) & 16777215;
        obj.dr = (obj.dr << move | ~~temp >> 24 - move) & 16777215;
    } else if (move < -24) {
        move = 48 + move;
        temp = obj.dl;
        obj.dl = (~~obj.dl >> move | obj.dr << 24 - move) & 16777215;
        obj.dr = (~~obj.dr >> move | temp << 24 - move) & 16777215;
    }
}
function FullCube_getParity(obj) {
    var a, b, cnt, i, p;
    cnt = 0;
    obj.arr[0] = FullCube_pieceAt(obj, 0);
    for(i = 1; i < 24; ++i)FullCube_pieceAt(obj, i) != obj.arr[cnt] && (obj.arr[++cnt] = FullCube_pieceAt(obj, i));
    p = 0;
    for(a = 0; a < 16; ++a)for(b = a + 1; b < 16; ++b)obj.arr[a] > obj.arr[b] && (p ^= 1);
    return p;
}
function FullCube_getShapeIdx(obj) {
    var dlx, drx, ulx, urx;
    urx = obj.ur & 1118481;
    urx |= ~~urx >> 3;
    urx |= ~~urx >> 6;
    urx = urx & 15 | ~~urx >> 12 & 48;
    ulx = obj.ul & 1118481;
    ulx |= ~~ulx >> 3;
    ulx |= ~~ulx >> 6;
    ulx = ulx & 15 | ~~ulx >> 12 & 48;
    drx = obj.dr & 1118481;
    drx |= ~~drx >> 3;
    drx |= ~~drx >> 6;
    drx = drx & 15 | ~~drx >> 12 & 48;
    dlx = obj.dl & 1118481;
    dlx |= ~~dlx >> 3;
    dlx |= ~~dlx >> 6;
    dlx = dlx & 15 | ~~dlx >> 12 & 48;
    return Shape_getShape2Idx(FullCube_getParity(obj) << 24 | ulx << 18 | urx << 12 | dlx << 6 | drx);
}
function FullCube_getSquare(obj, sq) {
    var a, b;
    for(a = 0; a < 8; ++a)obj.prm[a] = ~~(~~FullCube_pieceAt(obj, a * 3 + 1) >> 1 << 24) >> 24;
    sq.cornperm = get8Perm(obj.prm);
    sq.topEdgeFirst = FullCube_pieceAt(obj, 0) == FullCube_pieceAt(obj, 1);
    a = sq.topEdgeFirst ? 2 : 0;
    for(b = 0; b < 4; a += 3, ++b)obj.prm[b] = ~~(~~FullCube_pieceAt(obj, a) >> 1 << 24) >> 24;
    sq.botEdgeFirst = FullCube_pieceAt(obj, 12) == FullCube_pieceAt(obj, 13);
    a = sq.botEdgeFirst ? 14 : 12;
    for(; b < 8; a += 3, ++b)obj.prm[b] = ~~(~~FullCube_pieceAt(obj, a) >> 1 << 24) >> 24;
    sq.edgeperm = get8Perm(obj.prm);
    sq.ml = obj.ml;
}
function FullCube_pieceAt(obj, idx) {
    var ret;
    idx < 6 ? ret = ~~obj.ul >> (5 - idx << 2) : idx < 12 ? ret = ~~obj.ur >> (11 - idx << 2) : idx < 18 ? ret = ~~obj.dl >> (17 - idx << 2) : ret = ~~obj.dr >> (23 - idx << 2);
    return ~~((ret & 15) << 24) >> 24;
}
function FullCube_setPiece(obj, idx, value) {
    if (idx < 6) {
        obj.ul &= ~(15 << (5 - idx << 2));
        obj.ul |= value << (5 - idx << 2);
    } else if (idx < 12) {
        obj.ur &= ~(15 << (11 - idx << 2));
        obj.ur |= value << (11 - idx << 2);
    } else if (idx < 18) {
        obj.dl &= ~(15 << (17 - idx << 2));
        obj.dl |= value << (17 - idx << 2);
    } else {
        obj.dr &= ~(15 << (23 - idx << 2));
        obj.dr |= value << (23 - idx << 2);
    }
}
function FullCube_FullCube__Ljava_lang_String_2V() {
    this.arr = [];
    this.prm = [];
}
async function FullCube_randomCube() {
    const randomUintBelow = await _chunkRENZB7QNJs.randomUIntBelowFactory();
    var f, i, shape, edge, corner, n_edge, n_corner, rnd, m;
    f = new FullCube_FullCube__Ljava_lang_String_2V();
    shape = Shape_ShapeIdx[randomUintBelow(3678)];
    corner = 324508639;
    edge = 38177486;
    n_corner = n_edge = 8;
    for(i = 0; i < 24; i++)if ((shape >> i & 1) == 0) {
        rnd = randomUintBelow(n_edge) << 2;
        FullCube_setPiece(f, 23 - i, edge >> rnd & 15);
        m = (1 << rnd) - 1;
        edge = (edge & m) + (edge >> 4 & ~m);
        --n_edge;
    } else {
        rnd = randomUintBelow(n_corner) << 2;
        FullCube_setPiece(f, 23 - i, corner >> rnd & 15);
        FullCube_setPiece(f, 22 - i, corner >> rnd & 15);
        m = (1 << rnd) - 1;
        corner = (corner & m) + (corner >> 4 & ~m);
        --n_corner;
        ++i;
    }
    f.ml = randomUintBelow(2);
    return f;
}
function FullCube() {
}
var _ = FullCube_FullCube__Ljava_lang_String_2V.prototype = FullCube.prototype;
_.dl = 10062778;
_.dr = 14536702;
_.ml = 0;
_.ul = 70195;
_.ur = 4544119;
function Search_init2(obj) {
    var corner, edge, i, j, ml, prun;
    FullCube_copy(obj.Search_d, obj.Search_c);
    for(i = 0; i < obj.Search_length1; ++i)FullCube_doMove(obj.Search_d, obj.Search_move[i]);
    FullCube_getSquare(obj.Search_d, obj.Search_sq);
    edge = obj.Search_sq.edgeperm;
    corner = obj.Search_sq.cornperm;
    ml = obj.Search_sq.ml;
    prun = Math.max(SquarePrun[obj.Search_sq.edgeperm << 1 | ml], SquarePrun[obj.Search_sq.cornperm << 1 | ml]);
    for(i = prun; i < obj.Search_maxlen2; ++i)if (Search_phase2(obj, edge, corner, obj.Search_sq.topEdgeFirst, obj.Search_sq.botEdgeFirst, ml, i, obj.Search_length1, 0)) {
        for(j = 0; j < i; ++j)FullCube_doMove(obj.Search_d, obj.Search_move[obj.Search_length1 + j]);
        obj.Search_sol_string = Search_move2string(obj, i + obj.Search_length1);
        return true;
    }
    return false;
}
function Search_move2string(obj, len) {
    var s = "";
    var top = 0, bottom = 0;
    for(var i = len - 1; i >= 0; i--){
        var val = obj.Search_move[i];
        if (val > 0) {
            val = 12 - val;
            top = val > 6 ? val - 12 : val;
        } else if (val < 0) {
            val = 12 + val;
            bottom = val > 6 ? val - 12 : val;
        } else {
            if (top == 0 && bottom == 0) s += " / ";
            else s += "(" + top + ", " + bottom + ") / ";
            top = bottom = 0;
        }
    }
    if (top !== 0 || bottom !== 0) s += "(" + top + ", " + bottom + ")";
    return s;
}
function Search_phase1(obj, shape, prunvalue, maxl, depth, lm) {
    var m, prunx, shapex;
    if (prunvalue == 0 && maxl < 4) return maxl == 0 && Search_init2(obj);
    if (lm != 0) {
        shapex = Shape_TwistMove[shape];
        prunx = ShapePrun[shapex];
        if (prunx < maxl) {
            obj.Search_move[depth] = 0;
            if (Search_phase1(obj, shapex, prunx, maxl - 1, depth + 1, 0)) return true;
        }
    }
    shapex = shape;
    if (lm <= 0) {
        m = 0;
        for(;;){
            m += Shape_TopMove[shapex];
            shapex = ~~m >> 4;
            m &= 15;
            if (m >= 12) break;
            prunx = ShapePrun[shapex];
            if (prunx > maxl) break;
            else if (prunx < maxl) {
                obj.Search_move[depth] = m;
                if (Search_phase1(obj, shapex, prunx, maxl - 1, depth + 1, 1)) return true;
            }
        }
    }
    shapex = shape;
    if (lm <= 1) {
        m = 0;
        for(;;){
            m += Shape_BottomMove[shapex];
            shapex = ~~m >> 4;
            m &= 15;
            if (m >= 6) break;
            prunx = ShapePrun[shapex];
            if (prunx > maxl) break;
            else if (prunx < maxl) {
                obj.Search_move[depth] = -m;
                if (Search_phase1(obj, shapex, prunx, maxl - 1, depth + 1, 2)) return true;
            }
        }
    }
    return false;
}
function Search_phase2(obj, edge, corner, topEdgeFirst, botEdgeFirst, ml, maxl, depth, lm) {
    var botEdgeFirstx, cornerx, edgex, m, prun1, prun2, topEdgeFirstx;
    if (maxl == 0 && !topEdgeFirst && botEdgeFirst) return true;
    if (lm != 0 && topEdgeFirst == botEdgeFirst) {
        edgex = Square_TwistMove[edge];
        cornerx = Square_TwistMove[corner];
        if (SquarePrun[edgex << 1 | 1 - ml] < maxl && SquarePrun[cornerx << 1 | 1 - ml] < maxl) {
            obj.Search_move[depth] = 0;
            if (Search_phase2(obj, edgex, cornerx, topEdgeFirst, botEdgeFirst, 1 - ml, maxl - 1, depth + 1, 0)) return true;
        }
    }
    if (lm <= 0) {
        topEdgeFirstx = !topEdgeFirst;
        edgex = topEdgeFirstx ? Square_TopMove[edge] : edge;
        cornerx = topEdgeFirstx ? corner : Square_TopMove[corner];
        m = topEdgeFirstx ? 1 : 2;
        prun1 = SquarePrun[edgex << 1 | ml];
        prun2 = SquarePrun[cornerx << 1 | ml];
        while(m < 12 && prun1 <= maxl && prun1 <= maxl){
            if (prun1 < maxl && prun2 < maxl) {
                obj.Search_move[depth] = m;
                if (Search_phase2(obj, edgex, cornerx, topEdgeFirstx, botEdgeFirst, ml, maxl - 1, depth + 1, 1)) return true;
            }
            topEdgeFirstx = !topEdgeFirstx;
            if (topEdgeFirstx) {
                edgex = Square_TopMove[edgex];
                prun1 = SquarePrun[edgex << 1 | ml];
                m += 1;
            } else {
                cornerx = Square_TopMove[cornerx];
                prun2 = SquarePrun[cornerx << 1 | ml];
                m += 2;
            }
        }
    }
    if (lm <= 1) {
        botEdgeFirstx = !botEdgeFirst;
        edgex = botEdgeFirstx ? Square_BottomMove[edge] : edge;
        cornerx = botEdgeFirstx ? corner : Square_BottomMove[corner];
        m = botEdgeFirstx ? 1 : 2;
        prun1 = SquarePrun[edgex << 1 | ml];
        prun2 = SquarePrun[cornerx << 1 | ml];
        while(m < (maxl > 3 ? 6 : 12) && prun1 <= maxl && prun1 <= maxl){
            if (prun1 < maxl && prun2 < maxl) {
                obj.Search_move[depth] = -m;
                if (Search_phase2(obj, edgex, cornerx, topEdgeFirst, botEdgeFirstx, ml, maxl - 1, depth + 1, 2)) return true;
            }
            botEdgeFirstx = !botEdgeFirstx;
            if (botEdgeFirstx) {
                edgex = Square_BottomMove[edgex];
                prun1 = SquarePrun[edgex << 1 | ml];
                m += 1;
            } else {
                cornerx = Square_BottomMove[cornerx];
                prun2 = SquarePrun[cornerx << 1 | ml];
                m += 2;
            }
        }
    }
    return false;
}
function Search_solution(obj, c) {
    var shape;
    obj.Search_c = c;
    shape = FullCube_getShapeIdx(c);
    for(obj.Search_length1 = ShapePrun[shape]; obj.Search_length1 < 100; ++obj.Search_length1){
        obj.Search_maxlen2 = Math.min(31 - obj.Search_length1, 17);
        if (Search_phase1(obj, shape, ShapePrun[shape], obj.Search_length1, 0, -1)) break;
    }
    return obj.Search_sol_string;
}
function Search_Search() {
    this.Search_move = [];
    this.Search_d = new FullCube_FullCube__Ljava_lang_String_2V();
    this.Search_sq = new Square_Square();
}
function Search() {
}
_ = Search_Search.prototype = Search.prototype;
_.Search_c = null;
_.Search_length1 = 0;
_.Search_maxlen2 = 0;
_.Search_sol_string = null;
var Shape_$clinit_ran = false;
function Shape_$clinit() {
    if (Shape_$clinit_ran) return;
    Shape_$clinit_ran = true;
    Shape_halflayer = [
        0,
        3,
        6,
        12,
        15,
        24,
        27,
        30,
        48,
        51,
        54,
        60,
        63
    ];
    Shape_ShapeIdx = [];
    ShapePrun = [];
    Shape_TopMove = [];
    Shape_BottomMove = [];
    Shape_TwistMove = [];
    Shape_init();
}
function Shape_bottomMove(obj) {
    var move, moveParity;
    move = 0;
    moveParity = 0;
    do {
        if ((obj.bottom & 2048) == 0) {
            move += 1;
            obj.bottom = obj.bottom << 1;
        } else {
            move += 2;
            obj.bottom = obj.bottom << 2 ^ 12291;
        }
        moveParity = 1 - moveParity;
    }while ((bitCount(obj.bottom & 63) & 1) != 0)
    (bitCount(obj.bottom) & 2) == 0 && (obj.Shape_parity ^= moveParity);
    return move;
}
function Shape_getIdx(obj) {
    var ret;
    ret = binarySearch(Shape_ShapeIdx, obj.top << 12 | obj.bottom) << 1 | obj.Shape_parity;
    return ret;
}
function Shape_setIdx(obj, idx) {
    obj.Shape_parity = idx & 1;
    obj.top = Shape_ShapeIdx[~~idx >> 1];
    obj.bottom = obj.top & 4095;
    obj.top >>= 12;
}
function Shape_topMove(obj) {
    var move, moveParity;
    move = 0;
    moveParity = 0;
    do {
        if ((obj.top & 2048) == 0) {
            move += 1;
            obj.top = obj.top << 1;
        } else {
            move += 2;
            obj.top = obj.top << 2 ^ 12291;
        }
        moveParity = 1 - moveParity;
    }while ((bitCount(obj.top & 63) & 1) != 0)
    (bitCount(obj.top) & 2) == 0 && (obj.Shape_parity ^= moveParity);
    return move;
}
function Shape_Shape() {
}
function Shape_getShape2Idx(shp) {
    var ret;
    ret = binarySearch(Shape_ShapeIdx, shp & 16777215) << 1 | ~~shp >> 24;
    return ret;
}
function Shape_init() {
    var count, depth, dl, done, done0, dr, i, idx, m, s, ul, ur, value, p1, p3, temp;
    count = 0;
    for(i = 0; i < 28561; ++i){
        dr = Shape_halflayer[i % 13];
        dl = Shape_halflayer[~~(i / 13) % 13];
        ur = Shape_halflayer[~~(~~(i / 13) / 13) % 13];
        ul = Shape_halflayer[~~(~~(~~(i / 13) / 13) / 13)];
        value = ul << 18 | ur << 12 | dl << 6 | dr;
        bitCount(value) == 16 && (Shape_ShapeIdx[count++] = value);
    }
    s = new Shape_Shape();
    for(i = 0; i < 7356; ++i){
        Shape_setIdx(s, i);
        Shape_TopMove[i] = Shape_topMove(s);
        Shape_TopMove[i] |= Shape_getIdx(s) << 4;
        Shape_setIdx(s, i);
        Shape_BottomMove[i] = Shape_bottomMove(s);
        Shape_BottomMove[i] |= Shape_getIdx(s) << 4;
        Shape_setIdx(s, i);
        temp = s.top & 63;
        p1 = bitCount(temp);
        p3 = bitCount(s.bottom & 4032);
        s.Shape_parity ^= 1 & ~~(p1 & p3) >> 1;
        s.top = s.top & 4032 | ~~s.bottom >> 6 & 63;
        s.bottom = s.bottom & 63 | temp << 6;
        Shape_TwistMove[i] = Shape_getIdx(s);
    }
    for(i = 0; i < 7536; ++i)ShapePrun[i] = -1;
    ShapePrun[Shape_getShape2Idx(14378715)] = 0;
    ShapePrun[Shape_getShape2Idx(31157686)] = 0;
    ShapePrun[Shape_getShape2Idx(23967451)] = 0;
    ShapePrun[Shape_getShape2Idx(7191990)] = 0;
    done = 4;
    done0 = 0;
    depth = -1;
    while(done != done0){
        done0 = done;
        ++depth;
        for(i = 0; i < 7536; ++i)if (ShapePrun[i] == depth) {
            m = 0;
            idx = i;
            do {
                idx = Shape_TopMove[idx];
                m += idx & 15;
                idx >>= 4;
                if (ShapePrun[idx] == -1) {
                    ++done;
                    ShapePrun[idx] = depth + 1;
                }
            }while (m != 12)
            m = 0;
            idx = i;
            do {
                idx = Shape_BottomMove[idx];
                m += idx & 15;
                idx >>= 4;
                if (ShapePrun[idx] == -1) {
                    ++done;
                    ShapePrun[idx] = depth + 1;
                }
            }while (m != 12)
            idx = Shape_TwistMove[i];
            if (ShapePrun[idx] == -1) {
                ++done;
                ShapePrun[idx] = depth + 1;
            }
        }
    }
}
function Shape() {
}
_ = Shape_Shape.prototype = Shape.prototype;
_.bottom = 0;
_.Shape_parity = 0;
_.top = 0;
var Shape_BottomMove;
var Shape_ShapeIdx;
var ShapePrun;
var Shape_TopMove;
var Shape_TwistMove;
var Shape_halflayer;
var Square_$clinit_ran = false;
function Square_$clinit() {
    if (Square_$clinit_ran) return;
    Square_$clinit_ran = true;
    SquarePrun = [];
    Square_TwistMove = [];
    Square_TopMove = [];
    Square_BottomMove = [];
    fact = [
        1,
        1,
        2,
        6,
        24,
        120,
        720,
        5040
    ];
    Cnk = [];
    for(var i = 0; i < 12; ++i)Cnk[i] = [];
    Square_init();
}
function Square_Square() {
}
function get8Perm(arr) {
    var i, idx, v, val;
    idx = 0;
    val = 1985229328;
    for(i = 0; i < 7; ++i){
        v = arr[i] << 2;
        idx = (8 - i) * idx + (~~val >> v & 7);
        val -= 286331152 << v;
    }
    return idx & 65535;
}
function Square_init() {
    var check, depth, done, find, i, idx, idxx, inv, j, m, ml, pos, temp;
    for(i = 0; i < 12; ++i){
        Cnk[i][0] = 1;
        Cnk[i][i] = 1;
        for(j = 1; j < i; ++j)Cnk[i][j] = Cnk[i - 1][j - 1] + Cnk[i - 1][j];
    }
    pos = [];
    for(i = 0; i < 40320; ++i){
        set8Perm(pos, i);
        temp = pos[2];
        pos[2] = pos[4];
        pos[4] = temp;
        temp = pos[3];
        pos[3] = pos[5];
        pos[5] = temp;
        Square_TwistMove[i] = get8Perm(pos);
        set8Perm(pos, i);
        temp = pos[0];
        pos[0] = pos[1];
        pos[1] = pos[2];
        pos[2] = pos[3];
        pos[3] = temp;
        Square_TopMove[i] = get8Perm(pos);
        set8Perm(pos, i);
        temp = pos[4];
        pos[4] = pos[5];
        pos[5] = pos[6];
        pos[6] = pos[7];
        pos[7] = temp;
        Square_BottomMove[i] = get8Perm(pos);
    }
    for(i = 0; i < 80640; ++i)SquarePrun[i] = -1;
    SquarePrun[0] = 0;
    depth = 0;
    done = 1;
    while(done < 80640){
        inv = depth >= 11;
        find = inv ? -1 : depth;
        check = inv ? depth : -1;
        ++depth;
        OUT: for(i = 0; i < 80640; ++i)if (SquarePrun[i] == find) {
            idx = ~~i >> 1;
            ml = i & 1;
            idxx = Square_TwistMove[idx] << 1 | 1 - ml;
            if (SquarePrun[idxx] == check) {
                ++done;
                SquarePrun[inv ? i : idxx] = ~~(depth << 24) >> 24;
                if (inv) continue OUT;
            }
            idxx = idx;
            for(m = 0; m < 4; ++m){
                idxx = Square_TopMove[idxx];
                if (SquarePrun[idxx << 1 | ml] == check) {
                    ++done;
                    SquarePrun[inv ? i : idxx << 1 | ml] = ~~(depth << 24) >> 24;
                    if (inv) continue OUT;
                }
            }
            for(m = 0; m < 4; ++m){
                idxx = Square_BottomMove[idxx];
                if (SquarePrun[idxx << 1 | ml] == check) {
                    ++done;
                    SquarePrun[inv ? i : idxx << 1 | ml] = ~~(depth << 24) >> 24;
                    if (inv) continue OUT;
                }
            }
        }
    }
}
function set8Perm(arr, idx) {
    var i, m, p, v, val;
    val = 1985229328;
    for(i = 0; i < 7; ++i){
        p = fact[7 - i];
        v = ~~(idx / p);
        idx -= v * p;
        v <<= 2;
        arr[i] = ~~((~~val >> v & 7) << 24) >> 24;
        m = (1 << v) - 1;
        val = (val & m) + (~~val >> 4 & ~m);
    }
    arr[7] = ~~(val << 24) >> 24;
}
function Square() {
}
_ = Square_Square.prototype = Square.prototype;
_.botEdgeFirst = false;
_.cornperm = 0;
_.edgeperm = 0;
_.ml = 0;
_.topEdgeFirst = false;
var Square_BottomMove;
var Cnk;
var SquarePrun;
var Square_TopMove;
var Square_TwistMove;
var fact;
function bitCount(x) {
    x -= ~~x >> 1 & 1431655765;
    x = (~~x >> 2 & 858993459) + (x & 858993459);
    x = (~~x >> 4) + x & 252645135;
    x += ~~x >> 8;
    x += ~~x >> 16;
    return x & 63;
}
function binarySearch(sortedArray, key) {
    var high, low, mid, midVal;
    low = 0;
    high = sortedArray.length - 1;
    while(low <= high){
        mid = low + (~~(high - low) >> 1);
        midVal = sortedArray[mid];
        if (midVal < key) low = mid + 1;
        else if (midVal > key) high = mid - 1;
        else return mid;
    }
    return -low - 1;
}
var square1Solver_initialized = false;
var square1SolverInitialize = function(doneCallback, _2, statusCallback) {
    if (!square1Solver_initialized) {
        Shape_$clinit();
        Square_$clinit();
    }
    if (statusCallback) statusCallback("Done initializing Square-1.");
    square1Solver_initialized = true;
    if (doneCallback != null) doneCallback();
};
var square1SolverGetRandomPosition = async function() {
    if (!square1Solver_initialized) square1SolverInitialize();
    return FullCube_randomCube();
};
var square1SolverGenerate = function(state) {
    var search_search = new Search_Search();
    return Search_solution(search_search, state);
};
var square1SolverGetRandomScramble = async function() {
    var randomState = await square1SolverGetRandomPosition();
    var scrambleString = square1SolverGenerate(randomState);
    return {
        state: randomState,
        scramble_string: scrambleString
    };
};
async function getRandomSquare1ScrambleString() {
    return (await square1SolverGetRandomScramble()).scramble_string;
}

},{"./chunk-RENZB7QN.js":"fdjOR","./chunk-WO2AXYFE.js":"dbeiO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["dnA8E"], null, "parcelRequire4b33")

//# sourceMappingURL=sq1-solver-P3IWWET7.c680e363.js.map
