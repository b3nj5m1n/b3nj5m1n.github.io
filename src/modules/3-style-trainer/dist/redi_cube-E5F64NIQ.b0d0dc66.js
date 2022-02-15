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
})({"5Sgdq":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = true;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "40871f1bb0d0dc66";
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

},{}],"lX6GT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRandomRediCubeScramble", ()=>getRandomRediCubeScramble
);
var _chunkRENZB7QNJs = require("./chunk-RENZB7QN.js");
var _chunkEWRBHQFXJs = require("./chunk-EWRBHQFX.js");
var _chunkWO2AXYFEJs = require("./chunk-WO2AXYFE.js");
// src/cubing/vendor/xyzzy/redi_cube.js
"use strict";
function factorial(n) {
    if (n < 2) return n;
    let f = 1;
    for(let i = 2; i <= n; i++)f *= i;
    return f;
}
function C(n, k) {
    if (k < 0 || k > n) return 0;
    if (k === 0 || k === n) return 1;
    let c = 1;
    for(let i = 0; i < k; i++)c = c * (n - i) / (i + 1) | 0;
    return c;
}
function permutation_to_index(perm) {
    perm = perm.slice();
    let n = perm.length;
    let f = factorial(n - 1);
    let ind = 0;
    while(n > 1){
        n--;
        let e = perm[0];
        ind += e * f;
        for(let i = 0; i < n; i++){
            let x = perm[i + 1];
            perm[i] = x - (x > e);
        }
        f /= n;
    }
    return ind;
}
function index_to_permutation(ind, n) {
    let perm = [];
    let f = factorial(n - 1);
    for(let i = 0; i < n; i++){
        perm[i] = ind / f | 0;
        ind %= f;
        f /= n - 1 - i;
    }
    for(let i1 = n - 2; i1 >= 0; i1--)for(let j = i1 + 1; j < n; j++)perm[j] += +(perm[j] >= perm[i1]);
    return perm;
}
function permutation_parity(A) {
    let n = A.length;
    let parity = 0;
    for(let i = 0; i < n - 1; i++){
        for(let j = i; j < n; j++)if (A[i] > A[j]) parity ^= 1;
    }
    return parity;
}
function index_to_evenpermutation(ind, n) {
    let perm = [];
    let f = factorial(n - 1) / 2;
    let parity = 0;
    for(let i = 0; i < n - 1; i++){
        perm[i] = ind / f | 0;
        ind %= f;
        f /= n - 1 - i;
    }
    perm[n - 1] = 0;
    for(let i2 = n - 2; i2 >= 0; i2--){
        for(let j = i2 + 1; j < n; j++)if (perm[j] >= perm[i2]) perm[j]++;
        else parity ^= 1;
    }
    if (parity === 1) [perm[n - 2], perm[n - 1]] = [
        perm[n - 1],
        perm[n - 2]
    ];
    return perm;
}
function evenpermutation_to_index(perm) {
    return permutation_to_index(perm) >> 1;
}
function comb_to_index(l) {
    let bits = l.length;
    let ones = 0;
    for(let i = 0; i < bits; i++)ones += +(l[i] === 1);
    let zeros = bits - ones;
    if (zeros === 0 || ones === 0 || bits === 1) return 0;
    let b = C(bits - 1, ones);
    let ind = 0;
    for(let i3 = 0; zeros > 0 && ones > 0 && bits > 1; i3++){
        bits--;
        if (l[i3] === 0) b = b * --zeros / bits;
        else {
            ind += b;
            b = b * ones-- / bits;
        }
    }
    return ind;
}
function index_to_comb(ind, ones, bits) {
    let zeros = bits - ones;
    let b = C(bits - 1, ones);
    let l = [];
    let n = bits - 1;
    for(let i = 0; i < n; i++){
        bits--;
        if (ind < b) {
            l.push(0);
            b = b * --zeros / bits;
        } else {
            l.push(1);
            ind -= b;
            b = b * ones-- / bits;
        }
    }
    l.push(ones);
    return l;
}
function compose(A, B) {
    let C2 = [];
    for(let i = 0; i < B.length; i++)C2[i] = A[B[i]];
    return C2;
}
function permutation_from_cycle(cycle, n) {
    let perm = [];
    for(let i = 0; i < n; i++)perm[i] = i;
    for(let i4 = 0; i4 < cycle.length; i4++)perm[cycle[i4]] = cycle[(i4 + 1) % cycle.length];
    return perm;
}
function unsparsify_list(d, n) {
    let l = Array(n).fill(0);
    for(let k in d)l[k] = d[k];
    return l;
}
function compose_state(state1, state2) {
    let o = Array(8).fill(0);
    for(let i = 0; i < 8; i++)o[i] = (state1[1][i] + state2[1][i]) % 3;
    return [
        compose(state1[0], state2[0]),
        o
    ];
}
var move_UL = [
    permutation_from_cycle([
        0,
        1,
        4
    ], 12),
    unsparsify_list({
        0: 2
    }, 8)
];
var move_U = [
    permutation_from_cycle([
        1,
        2,
        5
    ], 12),
    unsparsify_list({
        1: 2
    }, 8)
];
var move_UR = [
    permutation_from_cycle([
        2,
        3,
        6
    ], 12),
    unsparsify_list({
        2: 2
    }, 8)
];
var move_F = [
    permutation_from_cycle([
        3,
        0,
        7
    ], 12),
    unsparsify_list({
        3: 2
    }, 8)
];
var move_L = [
    permutation_from_cycle([
        9,
        8,
        4
    ], 12),
    unsparsify_list({
        4: 2
    }, 8)
];
var move_B = [
    permutation_from_cycle([
        10,
        9,
        5
    ], 12),
    unsparsify_list({
        5: 2
    }, 8)
];
var move_R = [
    permutation_from_cycle([
        11,
        10,
        6
    ], 12),
    unsparsify_list({
        6: 2
    }, 8)
];
var move_D = [
    permutation_from_cycle([
        8,
        11,
        7
    ], 12),
    unsparsify_list({
        7: 2
    }, 8)
];
var solved = [
    index_to_permutation(0, 12),
    Array(8).fill(0)
];
var moves = [
    move_UL,
    move_U,
    move_UR,
    move_F,
    move_L,
    move_B,
    move_R,
    move_D
];
var move_names = [
    "UL",
    "U",
    "UR",
    "F",
    "L",
    "B",
    "R",
    "D"
];
var tetrad = [
    0,
    1,
    0,
    1,
    1,
    0,
    1,
    0
];
function stringify_move_sequence(move_sequence) {
    let suffixes = [
        "0",
        "",
        "'"
    ];
    let s = move_sequence.map(([m, r])=>move_names[m] + suffixes[r]
    );
    return s.join(" ");
}
function generate_random_state(randomUintBelow2) {
    let p = index_to_evenpermutation(Math.floor(randomUintBelow2(factorial(12)) / 2), 12);
    let o = Array(8);
    for(let i = 0; i < 8; i++)o[i] = randomUintBelow2(3);
    return [
        p,
        o
    ];
}
function generate_random_state_scramble(randomUintBelow2) {
    return solve(generate_random_state(randomUintBelow2));
}
function solve(state) {
    let phase1_indices = index_phase1(state);
    let phase1_mtables = [
        generate_phase1_edge_mtable(),
        generate_phase1_separate_mtable()
    ];
    let phase1_ptables = [
        generate_phase1_edge_ptable(),
        generate_phase1_separate_ptable()
    ];
    let phase2_mtables = [
        generate_phase2_edge_mtable(),
        generate_phase2_corner_mtable()
    ];
    let phase2_ptables = [
        generate_phase2_edge_ptable(),
        generate_phase1_corner_ptable()
    ];
    let phase1gen = ida_solve_gen(phase1_indices, phase1_mtables, phase1_ptables);
    let best = void 0;
    let intermediate_states = new Set();
    let start_time = +new Date();
    for(let i = 0; i < 25; i++){
        let { value: sol1 , done  } = phase1gen.next();
        let new_state = state;
        for (let [m, r] of sol1)for(let i2 = 0; i2 < r; i2++)new_state = compose_state(new_state, moves[m]);
        if (intermediate_states.has(new_state.toString())) continue;
        else intermediate_states.add(new_state.toString());
        let edge_ind = evenpermutation_to_index(new_state[0].slice(0, 8));
        let corner_ind = 0;
        for(let i21 = 0; i21 < 4; i21++)corner_ind += new_state[1][i21] * 3 ** i21;
        let phase2_indices = [
            edge_ind,
            corner_ind
        ];
        let moves_left = best ? best.length - sol1.length - 1 : 999999;
        let sol2 = ida_solve(phase2_indices, phase2_mtables, phase2_ptables, moves_left);
        if (sol2 === void 0) continue;
        if (best === void 0 || best.length > sol1.length + sol2.length) best = sol1.concat(sol2);
        if (new Date() - start_time > 300) break;
    }
    return best;
}
function index_phase1(state) {
    let edge_ind = 0;
    for(let i = 0; i < 4; i++)edge_ind += state[0].indexOf(i + 8) * 12 ** i;
    let corner_ind = 0;
    for(let i5 = 0; i5 < 4; i5++)corner_ind += state[1][i5 + 4] * 3 ** i5;
    let filtered = state[0].map((x)=>Math.max(-1, x - 8)
    );
    let separate_ind = comb_to_index(filtered.map((x)=>+(x >= 0)
    )) * 2 + permutation_parity(filtered.filter((x)=>x >= 0
    ));
    return [
        edge_ind,
        corner_ind + 81 * separate_ind
    ];
}
var tables = {
};
function generate_phase1_corner_mtable() {
    if (tables.phase1cm) return tables.phase1cm;
    let mtable = [];
    for(let i = 0; i < 81; i++){
        mtable[i] = Array(8);
        let o = [
            i % 3,
            Math.floor(i / 3) % 3,
            Math.floor(i / 9) % 3,
            Math.floor(i / 27)
        ];
        mtable[i][0] = mtable[i][1] = mtable[i][2] = mtable[i][3] = i;
        for(let j = 0; j < 4; j++){
            o[j] = (o[j] + 2) % 3;
            mtable[i][4 + j] = o[0] + o[1] * 3 + o[2] * 9 + o[3] * 27;
            o[j] = (o[j] + 1) % 3;
        }
    }
    return tables.phase1cm = mtable;
}
function generate_phase1_corner_ptable() {
    if (tables.phase1cp) return tables.phase1cp;
    let ptable = Array(81);
    for(let i = 0; i < 81; i++){
        let o = [
            i % 3,
            Math.floor(i / 3) % 3,
            Math.floor(i / 9) % 3,
            Math.floor(i / 27)
        ];
        ptable[i] = (o[0] !== 0) + (o[1] !== 0) + (o[2] !== 0) + (o[3] !== 0);
    }
    return tables.phase1cp = ptable;
}
function generate_phase1_edge_mtable() {
    if (tables.phase1em) return tables.phase1em;
    let mtable_single = [];
    for(let i = 0; i < 12; i++){
        mtable_single[i] = [];
        for(let m = 0; m < 8; m++)mtable_single[i][m] = moves[m][0].indexOf(i);
    }
    let mtable = Array(20736);
    for(let i6 = 0; i6 < 20736; i6++){
        mtable[i6] = Array(8);
        for(let m = 0; m < 8; m++){
            let I = 0;
            for(let j = 0; j < 4; j++)I += mtable_single[Math.floor(i6 / 12 ** j) % 12][m] * 12 ** j;
            mtable[i6][m] = I;
        }
    }
    return tables.phase1em = mtable;
}
function generate_phase1_edge_ptable() {
    if (tables.phase1ep) return tables.phase1ep;
    return tables.phase1ep = bfs(generate_phase1_edge_mtable(), [
        20564
    ]);
}
function generate_phase1_separate_mtable() {
    if (tables.phase1sm) return tables.phase1sm;
    const C12_4 = C(12, 4);
    let mtable_c = [];
    for(let i = 0; i < C12_4; i++){
        mtable_c[i] = [];
        let comb = index_to_comb(i, 4, 12), perm = [];
        for(let j = 0, k = 0; j < 12; j++)if (comb[j] === 0) perm[j] = -1;
        else perm[j] = k++;
        for(let m = 0; m < 8; m++){
            let new_perm = compose(perm, moves[m][0]);
            let new_comb = compose(comb, moves[m][0]);
            let parity = permutation_parity(new_perm.filter((x)=>x >= 0
            ));
            mtable_c[i][m] = comb_to_index(new_comb) * 2 + parity;
        }
    }
    let mtable_co = generate_phase1_corner_mtable();
    let mtable = [];
    for(let j = 0; j < C12_4; j++)for(let i7 = 0; i7 < 81; i7++){
        let m0 = mtable[i7 + 81 * (2 * j)] = [];
        let m1 = mtable[i7 + 81 * (2 * j + 1)] = [];
        for(let m = 0; m < 8; m++){
            m0[m] = mtable_co[i7][m] + 81 * mtable_c[j][m];
            m1[m] = mtable_co[i7][m] + 81 * (mtable_c[j][m] ^ 1);
        }
    }
    return tables.phase1sm = mtable;
}
function generate_phase1_separate_ptable() {
    if (tables.phase1sp) return tables.phase1sp;
    return tables.phase1sp = bfs(generate_phase1_separate_mtable(), [
        0
    ]);
}
function generate_phase2_corner_mtable() {
    if (tables.phase2cm) return tables.phase2cm;
    let phase1_mtable = generate_phase1_corner_mtable();
    let mtable = Array(81);
    for(let i = 0; i < 81; i++)mtable[i] = phase1_mtable[i].slice(4, 8);
    return tables.phase2cm = mtable;
}
function generate_phase2_edge_mtable() {
    if (tables.phase2em) return tables.phase2em;
    const n = 8;
    const HALFFACT8 = factorial(n) / 2;
    let mtable = Array(HALFFACT8);
    let perm = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
    ];
    for(let i = 0; i < HALFFACT8; i++){
        mtable[i] = Array(4);
        for(let m = 0; m < 4; m++){
            let new_perm = compose(perm, moves[m][0].slice(0, 8));
            mtable[i][m] = evenpermutation_to_index(new_perm);
        }
        if (i === HALFFACT8 - 1) break;
        let parity = 0;
        do for(let k = n - 2; k >= 0; k--){
            if (perm[k] > perm[k + 1]) continue;
            let l = k + 1;
            for(let L = l; L < n; L++)if (perm[L] > perm[k]) l = L;
            [perm[k], perm[l]] = [
                perm[l],
                perm[k]
            ];
            parity ^= 1;
            for(let j = 0; k + 1 + j < n - 1 - j; j++, parity ^= 1)[perm[k + 1 + j], perm[n - 1 - j]] = [
                perm[n - 1 - j],
                perm[k + 1 + j]
            ];
            break;
        }
        while (parity !== 0)
    }
    return tables.phase2em = mtable;
}
function generate_phase2_edge_ptable() {
    if (tables.phase2ep) return tables.phase2ep;
    return tables.phase2ep = bfs(generate_phase2_edge_mtable(), [
        0
    ]);
}
function bfs(mtable, goal_states) {
    let N = mtable.length;
    let nmoves = mtable[0].length;
    let ptable = Array(N).fill(-1);
    let queue = goal_states.slice(), new_queue = [];
    let depth = 0;
    while(queue.length > 0){
        new_queue.length = 0;
        for (let state of queue){
            if (ptable[state] !== -1) continue;
            ptable[state] = depth;
            for(let move_index = 0; move_index < nmoves; move_index++){
                let new_state = mtable[state][move_index];
                while(new_state != state){
                    new_queue.push(new_state);
                    new_state = mtable[new_state][move_index];
                }
            }
        }
        [queue, new_queue] = [
            new_queue,
            queue
        ];
        depth += 1;
    }
    return ptable;
}
function ida_solve(indices, mtables, ptables, max_bound) {
    max_bound = max_bound || 999999;
    let ncoords = indices.length;
    let bound = 0;
    for(let i = 0; i < ncoords; i++)bound = Math.max(bound, ptables[i][indices[i]]);
    while(bound <= max_bound){
        let path = ida_search(indices, mtables, ptables, bound, -1);
        if (path !== void 0) return path;
        bound++;
    }
}
function ida_search(indices, mtables, ptables, bound, last) {
    let ncoords = indices.length;
    let nmoves = mtables[0][0].length;
    let heuristic = 0;
    for(let i = 0; i < ncoords; i++)heuristic = Math.max(heuristic, ptables[i][indices[i]]);
    if (heuristic > bound) return;
    if (bound === 0) return [];
    if (heuristic === 0 && bound === 1) return;
    for(let m = 0; m < nmoves; m++){
        if (m === last) continue;
        if (m < last && tetrad[m] == tetrad[last]) continue;
        let new_indices = indices.slice();
        for(let c = 0; c < ncoords; c++)new_indices[c] = mtables[c][indices[c]][m];
        let r = 1;
        while(indices.some((_, i)=>indices[i] != new_indices[i]
        )){
            let subpath = ida_search(new_indices, mtables, ptables, bound - 1, m);
            if (subpath !== void 0) return [
                [
                    m,
                    r
                ]
            ].concat(subpath);
            for(let c = 0; c < ncoords; c++)new_indices[c] = mtables[c][new_indices[c]][m];
            r++;
        }
    }
    return;
}
function* ida_solve_gen(indices, mtables, ptables) {
    let ncoords = indices.length;
    let bound = 0;
    for(let i = 0; i < ncoords; i++)bound = Math.max(bound, ptables[i][indices[i]]);
    while(true){
        yield* ida_search_gen(indices, mtables, ptables, bound, -1);
        bound++;
    }
}
function* ida_search_gen(indices, mtables, ptables, bound, last) {
    let ncoords = indices.length;
    let nmoves = mtables[0][0].length;
    let heuristic = 0;
    for(let i = 0; i < ncoords; i++)heuristic = Math.max(heuristic, ptables[i][indices[i]]);
    if (heuristic > bound) return;
    if (bound === 0) {
        yield [];
        return;
    }
    if (heuristic === 0 && bound === 1) return;
    for(let m = 0; m < nmoves; m++){
        if (m === last) continue;
        if (m < last && tetrad[m] == tetrad[last]) continue;
        let new_indices = indices.slice();
        for(let c = 0; c < ncoords; c++)new_indices[c] = mtables[c][indices[c]][m];
        let r = 1;
        while(indices.some((_, i)=>indices[i] != new_indices[i]
        )){
            let subpath_gen = ida_search_gen(new_indices, mtables, ptables, bound - 1, m);
            while(true){
                let { value: subpath , done  } = subpath_gen.next();
                if (done) break;
                yield [
                    [
                        m,
                        r
                    ]
                ].concat(subpath);
            }
            for(let c = 0; c < ncoords; c++)new_indices[c] = mtables[c][new_indices[c]][m];
            r++;
        }
    }
}
var randomUintBelow = _chunkRENZB7QNJs.randomUIntBelowFactory();
async function getRandomRediCubeScramble() {
    return new _chunkEWRBHQFXJs.Alg(stringify_move_sequence(generate_random_state_scramble(await randomUintBelow)));
}

},{"./chunk-RENZB7QN.js":"fdjOR","./chunk-EWRBHQFX.js":"i6QEj","./chunk-WO2AXYFE.js":"dbeiO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["5Sgdq"], null, "parcelRequire4b33")

//# sourceMappingURL=redi_cube-E5F64NIQ.b0d0dc66.js.map
