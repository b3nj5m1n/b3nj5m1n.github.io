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
})({"h7oQ3":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = true;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "664033a47beea244";
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

},{}],"fefDv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRandomKilominxScramble", ()=>getRandomKilominxScramble
);
var _chunkRENZB7QNJs = require("./chunk-RENZB7QN.js");
var _chunkEWRBHQFXJs = require("./chunk-EWRBHQFX.js");
var _chunkWO2AXYFEJs = require("./chunk-WO2AXYFE.js");
// src/cubing/vendor/xyzzy/kilosolver.js
"use strict";
var PHASE4_THRESHOLD = 7;
function factorial(n) {
    if (n < 2) return n;
    let f = 1;
    for(let i1 = 2; i1 <= n; i1++)f *= i1;
    return f;
}
function C(n, k) {
    if (k < 0 || k > n) return 0;
    if (k === 0 || k === n) return 1;
    let c = 1;
    for(let i2 = 0; i2 < k; i2++)c = c * (n - i2) / (i2 + 1) | 0;
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
        for(let i3 = 0; i3 < n; i3++){
            let x = perm[i3 + 1];
            perm[i3] = x - (x > e);
        }
        f /= n;
    }
    return ind;
}
function permutation_parity(A) {
    let n = A.length;
    let parity = 0;
    for(let i4 = 0; i4 < n - 1; i4++){
        for(let j = i4; j < n; j++)if (A[i4] > A[j]) parity ^= 1;
    }
    return parity;
}
function evenpermutation_to_index(perm) {
    return permutation_to_index(perm) >> 1;
}
var [evenpermutation10_to_index, index_to_evenpermutation10] = (()=>{
    let index_in_set_bits = new Int8Array(10240);
    let look_up_set_bits = new Int8Array(10240);
    for(let i5 = 0; i5 < 1024; i5++)for(let j = 0, counter = 0; j < 10; j++){
        if ((i5 >>> j & 1) === 0) continue;
        index_in_set_bits[j << 10 | i5] = counter;
        look_up_set_bits[counter << 10 | i5] = j;
        counter++;
    }
    function evenpermutation10_to_index2(perm) {
        let unused = 1023;
        let f = 181440;
        let ind = 0;
        for(let i6 = 0; i6 < 8; i6++){
            let v = perm[i6];
            ind += index_in_set_bits[unused | v << 10] * f;
            unused &= ~(1 << v);
            f /= 9 - i6;
        }
        return ind;
    }
    function index_to_evenpermutation102(ind, perm) {
        let unused = 1023;
        let f = 181440;
        let parity = 0;
        for(let i7 = 0; i7 < 8; i7++){
            let a = ind / f | 0;
            ind -= a * f;
            parity ^= a & 1;
            let v = look_up_set_bits[unused | a << 10];
            perm[i7] = v;
            unused &= ~(1 << v);
            f /= 9 - i7;
        }
        perm[8] = look_up_set_bits[unused | parity << 10];
        perm[9] = look_up_set_bits[unused | (parity ^ 1) << 10];
        return perm;
    }
    return [
        evenpermutation10_to_index2,
        index_to_evenpermutation102
    ];
})();
function comb_to_index(l) {
    let bits = l.length;
    let ones = 0;
    for(let i9 = 0; i9 < bits; i9++)ones += +(l[i9] === 1);
    let zeros = bits - ones;
    if (zeros === 0 || ones === 0 || bits === 1) return 0;
    let b = C(bits - 1, ones);
    let ind = 0;
    for(let i8 = 0; zeros > 0 && ones > 0 && bits > 1; i8++){
        bits--;
        if (l[i8] === 0) b = b * --zeros / bits;
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
    for(let i10 = 0; i10 < n; i10++){
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
    for(let i11 = 0; i11 < B.length; i11++)C2[i11] = A[B[i11]];
    return C2;
}
function compose_o(A, B) {
    let p = compose(A[0], B[0]);
    let o = [];
    let n = B[0].length;
    for(let i12 = 0; i12 < n; i12++)o[i12] = (A[1][B[0][i12]] + B[1][i12]) % 3;
    return [
        p,
        o
    ];
}
function permutation_from_cycle(cycle, n) {
    let perm = [];
    for(let i14 = 0; i14 < n; i14++)perm[i14] = i14;
    for(let i13 = 0; i13 < cycle.length; i13++)perm[cycle[i13]] = cycle[(i13 + 1) % cycle.length];
    return perm;
}
function unsparsify_list(d, n) {
    let l = Array(n).fill(0);
    for(let k in d)l[k] = d[k];
    return l;
}
var move_U = [
    permutation_from_cycle([
        0,
        1,
        2,
        3,
        4
    ], 20),
    unsparsify_list({
    }, 20)
];
var move_R = [
    permutation_from_cycle([
        4,
        3,
        11,
        12,
        13
    ], 20),
    unsparsify_list({
        4: 2,
        3: 1,
        11: 1,
        12: 1,
        13: 1
    }, 20)
];
var move_F = [
    permutation_from_cycle([
        3,
        2,
        9,
        10,
        11
    ], 20),
    unsparsify_list({
        3: 2,
        2: 1,
        9: 1,
        10: 1,
        11: 1
    }, 20)
];
var move_L = [
    permutation_from_cycle([
        2,
        1,
        7,
        8,
        9
    ], 20),
    unsparsify_list({
        2: 2,
        1: 1,
        7: 1,
        8: 1,
        9: 1
    }, 20)
];
var move_BL = [
    permutation_from_cycle([
        1,
        0,
        5,
        6,
        7
    ], 20),
    unsparsify_list({
        1: 2,
        0: 1,
        5: 1,
        6: 1,
        7: 1
    }, 20)
];
var move_BR = [
    permutation_from_cycle([
        0,
        4,
        13,
        14,
        5
    ], 20),
    unsparsify_list({
        0: 2,
        4: 1,
        13: 1,
        14: 1,
        5: 1
    }, 20)
];
var move_x2 = [
    [
        15,
        16,
        17,
        18,
        19,
        10,
        9,
        8,
        7,
        6,
        5,
        14,
        13,
        12,
        11,
        0,
        1,
        2,
        3,
        4
    ],
    unsparsify_list({
    }, 20)
];
var move_y = [
    [
        1,
        2,
        3,
        4,
        0,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        5,
        6,
        19,
        15,
        16,
        17,
        18
    ],
    unsparsify_list({
    }, 20)
];
var moves = [
    move_U,
    move_R,
    move_F,
    move_L,
    move_BL,
    move_BR,
    move_x2
];
var move_names = [
    "U",
    "R",
    "F",
    "L",
    "BL",
    "BR",
    "x2"
];
var id = compose_o(move_x2, move_x2);
var moves_full = [];
for(let i = 0; i < moves.length; i++){
    moves_full[i] = [
        id
    ];
    for(let j = 1; j < 5; j++)moves_full[i][j] = compose_o(moves_full[i][j - 1], moves[i]);
}
function random_state(randomUintBelow2) {
    let p = [
        0
    ];
    for(let i16 = 1; i16 < 20; i16++){
        let r = randomUintBelow2(i16 + 1);
        p[i16] = p[r];
        p[r] = i16;
    }
    if (permutation_parity(p) === 1) [p[0], p[1]] = [
        p[1],
        p[0]
    ];
    let o = Array(20).fill(0);
    for(let i15 = 0; i15 < 19; i15++){
        o[i15] = randomUintBelow2(3);
        o[19] += 3 - o[i15];
    }
    o[19] %= 3;
    return [
        p,
        o
    ];
}
function stringify_move_sequence(move_sequence) {
    let suffixes = [
        "0",
        "",
        "2",
        "2'",
        "'"
    ];
    let s = move_sequence.map(([m, r])=>move_names[m] + suffixes[r]
    );
    return s.join(" ");
}
function apply_move_sequence(state, move_sequence) {
    for (let [m, r] of move_sequence)for(let i17 = 0; i17 < r; i17++)state = compose_o(state, moves[m]);
    return state;
}
function generate_random_state_scramble(randomUintBelow2) {
    return solve(random_state(randomUintBelow2));
}
var translation_amounts;
{
    let A = Math.sin(Math.PI / 5), B = Math.cos(Math.PI / 10);
    let C2 = Math.cos(Math.PI / 5), D = Math.sin(Math.PI / 10);
    translation_amounts = {
        U: [
            0,
            0
        ],
        L: [
            -A - B,
            C2 - D
        ],
        F: [
            0,
            2 * C2
        ],
        R: [
            A + B,
            C2 - D
        ],
        BR: [
            B,
            -1 - D
        ],
        BL: [
            -B,
            -1 - D
        ],
        DBR: [
            2 * A + 2 * B,
            0
        ],
        DB: [
            3 * A + 3 * B,
            -C2 - D
        ],
        DBL: [
            4 * A + 4 * B,
            0
        ],
        DFL: [
            3 * A + 4 * B,
            1 + C2
        ],
        DFR: [
            3 * A + 2 * B,
            1 + C2
        ],
        D: [
            3 * A + 3 * B,
            C2 - D
        ]
    };
}function solve_phase1(state) {
    let p = state[0];
    if (p.slice(15, 20).every((x)=>x < 15
    )) return [];
    if (p.slice(0, 5).every((x)=>x < 15
    )) return [
        [
            6,
            1
        ]
    ];
    let flags = p.map((x)=>x >= 15
    );
    let depth = 0, sol;
    while(sol === void 0){
        depth++;
        sol = search_phase1(flags, depth, -1);
    }
    sol.push([
        6,
        1
    ]);
    return sol;
}
function search_phase1(flags, depth, last) {
    if (depth == 0) {
        if (flags.slice(0, 5).some((x)=>x
        )) return;
        return [];
    }
    for(let move_index = 0; move_index < 6; move_index++){
        if (move_index === last) continue;
        for(let r = 1; r < 5; r++){
            let new_flags = compose(flags, moves_full[move_index][r][0]);
            let sol = search_phase1(new_flags, depth - 1, move_index);
            if (sol !== void 0) return [
                [
                    move_index,
                    r
                ]
            ].concat(sol);
        }
    }
    return;
}
function index_phase2(state) {
    let p = state[0].slice(0, 15), o = state[1];
    let index_c = comb_to_index(p.map((x)=>+(x >= 15)
    ));
    let index_o = 243 * index_c;
    for(let i19 = 0, j = 0; i19 < 15; i19++){
        if (p[i19] < 15) continue;
        index_o += o[i19] * Math.pow(3, j);
        j++;
    }
    let index_p = 0;
    for(let i18 = 0; i18 < 5; i18++)index_p += p.indexOf(15 + i18) * Math.pow(15, i18);
    return [
        index_o,
        index_p
    ];
}
function solve_phase2(state) {
    let mtables = [
        generate_phase23_orientation_mtable(),
        generate_phase23_permutation_mtable()
    ];
    let ptables = [
        generate_phase2_orientation_ptable(),
        generate_phase2_permutation_ptable()
    ];
    return ida_solve(index_phase2(state), mtables, ptables).concat([
        [
            6,
            1
        ]
    ]);
}
function index_phase3(state) {
    let pieces = [
        5,
        6,
        7,
        8,
        14
    ];
    let p = state[0].slice(0, 15), o = state[1];
    let index_c = comb_to_index(p.map((x)=>+(pieces.indexOf(x) !== -1)
    ));
    let index_o = 243 * index_c;
    for(let i21 = 0, j = 0; i21 < 15; i21++){
        if (pieces.indexOf(p[i21]) === -1) continue;
        index_o += o[i21] * Math.pow(3, j);
        j++;
    }
    let index_p = 0;
    for(let i20 = 0; i20 < 5; i20++)index_p += p.indexOf(pieces[i20]) * Math.pow(15, i20);
    return [
        index_o,
        index_p
    ];
}
function solve_phase3(state) {
    let mtables = [
        generate_phase23_orientation_mtable(),
        generate_phase23_permutation_mtable()
    ];
    let ptables = [
        generate_phase3_orientation_ptable(),
        generate_phase3_permutation_ptable()
    ];
    return ida_solve(index_phase3(state), mtables, ptables);
}
function index_phase4(state) {
    let p = state[0].slice(0, 14), o = state[1];
    let index_o = 0, perm = [];
    let j = 0;
    for (let i22 of [
        0,
        1,
        2,
        3,
        4,
        9,
        10,
        11,
        12,
        13
    ]){
        if (i22 !== 13) index_o += o[i22] * Math.pow(3, j);
        perm[j] = p[i22] < 5 ? p[i22] : p[i22] - 4;
        j++;
    }
    return [
        index_o,
        evenpermutation_to_index(perm)
    ];
}
function solve_phase4_fast(state) {
    return phase4_ida_solve(index_phase4(state));
}
function solve(state) {
    let sol = [];
    for (let solver of [
        solve_phase1,
        solve_phase2,
        solve_phase3,
        solve_phase4_fast
    ]){
        let phase_sol = solver(state);
        state = apply_move_sequence(state, phase_sol);
        sol = sol.concat(phase_sol);
    }
    return sol;
}
var tables = {
};
function generate_phase23_orientation_mtable() {
    if (tables.phase23om) return tables.phase23om;
    const C15_5 = C(15, 5), THREE = [
        1,
        3,
        9,
        27,
        81,
        243
    ];
    let phase23om = Array(C(15, 5) * THREE[5]);
    tables.phase23om = phase23om;
    for(let i23 = 0; i23 < C15_5; i23++){
        let comb = index_to_comb(i23, 5, 15).concat(Array(5).fill(0));
        let new_comb_indices = [];
        for(let move_index = 0; move_index < 6; move_index++){
            let new_comb = compose(comb, moves[move_index][0]).slice(0, 15);
            new_comb_indices[move_index] = comb_to_index(new_comb);
        }
        for(let j = 0; j < THREE[5]; j++){
            phase23om[j + 243 * i23] = [];
            let orient_full = [];
            for(let k = 0, l = 0; k < 20; k++)if (comb[k] === 1) {
                orient_full[k] = (j / THREE[l] | 0) % 3;
                l++;
            } else orient_full[k] = 99;
            for(let move_index = 0; move_index < 6; move_index++){
                let move = moves[move_index];
                let new_orient_full = [];
                for(let k = 0; k < 15; k++)new_orient_full[k] = orient_full[move[0][k]] + move[1][k];
                let new_orient = new_orient_full.filter((x)=>x < 10
                );
                let J = 0;
                for(let k1 = 0; k1 < 5; k1++)J += new_orient[k1] % 3 * THREE[k1];
                phase23om[j + 243 * i23][move_index] = J + 243 * new_comb_indices[move_index];
            }
        }
    }
    return phase23om;
}
function generate_phase2_orientation_ptable() {
    if (tables.phase2op) return tables.phase2op;
    let mtable = generate_phase23_orientation_mtable();
    return tables.phase2op = bfs(mtable, [
        729486
    ]);
}
function generate_phase3_orientation_ptable() {
    if (tables.phase3op) return tables.phase3op;
    let mtable = generate_phase23_orientation_mtable();
    return tables.phase3op = bfs(mtable, [
        59778
    ]);
}
function generate_phase23_permutation_mtable() {
    if (tables.phase23pm) return tables.phase23pm;
    const FIFTEEN = [
        1,
        15,
        225,
        Math.pow(15, 3),
        Math.pow(15, 4),
        Math.pow(15, 5)
    ];
    let phase23pm = Array(FIFTEEN[5]);
    let single = Array(15);
    for(let i24 = 0; i24 < 15; i24++){
        single[i24] = Array(6);
        for(let move_index = 0; move_index < 6; move_index++)single[i24][move_index] = moves[move_index][0].indexOf(i24);
    }
    let locations = [
        0,
        0,
        0,
        0,
        0
    ];
    for(let ind = 0; ind < FIFTEEN[5]; ind++){
        phase23pm[ind] = Array(6);
        for(let move_index = 0; move_index < 6; move_index++){
            let new_ind = 0;
            for(let i25 = 0; i25 < 5; i25++)new_ind += single[locations[i25]][move_index] * FIFTEEN[i25];
            phase23pm[ind][move_index] = new_ind;
        }
        locations[0]++;
        for(let i26 = 0; i26 < 4; i26++)if (locations[i26] === 15) {
            locations[i26] = 0;
            locations[i26 + 1]++;
        }
    }
    return tables.phase23pm = phase23pm;
}
function generate_phase2_permutation_ptable() {
    if (tables.phase2pp) return tables.phase2pp;
    let mtable = generate_phase23_permutation_mtable();
    return tables.phase2pp = bfs(mtable, [
        213090
    ]);
}
function generate_phase3_permutation_ptable() {
    if (tables.phase3pp) return tables.phase3pp;
    let mtable = generate_phase23_permutation_mtable();
    return tables.phase3pp = bfs(mtable, [
        737420
    ]);
}
function generate_phase4_orientation_mtable() {
    if (tables.phase4om) return tables.phase4om;
    const THREE = [
        1,
        3,
        9,
        27,
        81,
        243,
        729,
        2187,
        6561,
        19683,
        59049
    ];
    let mtable = Array(THREE[9]);
    for(let i27 = 0; i27 < THREE[9]; i27++){
        let o = Array(14).fill(0);
        for(let j = 0; j < 9; j++){
            let J = j < 5 ? j : j + 4;
            o[J] = (i27 / THREE[j] | 0) % 3;
            o[13] -= o[J];
        }
        o[13] = (o[13] + 999) % 3;
        mtable[i27] = [];
        for(let move_index = 0; move_index < 3; move_index++){
            let move = moves[move_index];
            let new_o = [
                0,
                1,
                2,
                3,
                4,
                9,
                10,
                11,
                12,
                13
            ].map((i2)=>o[move[0][i2]] + move[1][i2]
            );
            let new_i = 0;
            for(let j = 0; j < 9; j++)new_i += new_o[j] % 3 * THREE[j];
            mtable[i27][move_index] = new_i;
        }
    }
    return tables.phase4om = mtable;
}
function generate_phase4_permutation_mtable() {
    if (tables.phase4pm) return tables.phase4pm;
    const HALFFACT10 = factorial(10) / 2, n = 10;
    let pre = [
        0,
        1,
        2,
        3,
        4,
        -1,
        -1,
        -1,
        -1,
        5,
        6,
        7,
        8,
        9
    ];
    let post = [
        0,
        1,
        2,
        3,
        4,
        9,
        10,
        11,
        12,
        13
    ];
    let move_permutations = [
        compose(pre, compose(move_U[0], post)),
        compose(pre, compose(move_R[0], post)),
        compose(pre, compose(move_F[0], post))
    ];
    let mtable = Array(HALFFACT10);
    let perm = Array(10);
    for(let i28 = 0; i28 < HALFFACT10; i28++){
        index_to_evenpermutation10(i28, perm);
        mtable[i28] = [];
        for(let move_index = 0; move_index < 3; move_index++){
            let new_perm = compose(perm, move_permutations[move_index]);
            mtable[i28][move_index] = evenpermutation10_to_index(new_perm);
        }
    }
    return tables.phase4pm = mtable;
}
function generate_phase4_orientation_ptable() {
    if (tables.phase4op) return tables.phase4op;
    let mtable = generate_phase4_orientation_mtable();
    return tables.phase4op = bfs(mtable, [
        0
    ]);
}
function generate_phase4_permutation_ptable() {
    if (tables.phase4pp) return tables.phase4pp;
    let mtable = generate_phase4_permutation_mtable();
    return tables.phase4pp = bfs(mtable, [
        0
    ]);
}
function generate_phase4_near_ptable_list(threshold) {
    if (tables.phase4np_list && tables.phase4np_list.threshold === threshold) return tables.phase4np_list;
    let mtables = [
        generate_phase4_orientation_mtable(),
        generate_phase4_permutation_mtable()
    ];
    let base = Math.pow(3, 9);
    let states = [
        0
    ];
    populate(threshold, [
        0,
        0
    ], -1);
    function populate(depth, state, last2) {
        states.push(state[0] + base * state[1]);
        if (depth === 0) return;
        let new_state = [];
        for(let move_index = 0; move_index < 3; move_index++){
            if (move_index === last2) continue;
            new_state[0] = state[0];
            new_state[1] = state[1];
            for(let r = 1; r < 5; r++){
                new_state[0] = mtables[0][new_state[0]][move_index];
                new_state[1] = mtables[1][new_state[1]][move_index];
                populate(depth - 1, new_state, move_index);
            }
        }
        return;
    }
    states.sort((x, y)=>x - y
    );
    let unique_states = [], last = -1;
    for (let state1 of states)if (state1 !== last) unique_states.push(last = state1);
    unique_states.threshold = threshold;
    return tables.phase4np_list = unique_states;
}
function binary_search(A, x) {
    let lo = 0, hi = A.length - 1;
    while(hi - lo > 1){
        let mid = lo + hi >> 1;
        if (x > A[mid]) lo = mid + 1;
        else hi = mid;
    }
    return x === A[lo] || x === A[hi];
}
function bfs(mtable, goal_states) {
    let N = mtable.length;
    let nmoves = mtable[0].length;
    let ptable = Array(N).fill(-1);
    for (let state of goal_states)ptable[state] = 0;
    let depth = 0;
    let done = false;
    while(!done){
        done = true;
        for(let state = 0; state < N; state++){
            if (ptable[state] !== depth) continue;
            for(let move_index = 0; move_index < nmoves; move_index++){
                let new_state = mtable[state][move_index];
                while(new_state !== state){
                    if (ptable[new_state] === -1) {
                        done = false;
                        ptable[new_state] = depth + 1;
                    }
                    new_state = mtable[new_state][move_index];
                }
            }
        }
        depth++;
    }
    return ptable;
}
function ida_solve(indices, mtables, ptables) {
    let ncoords = indices.length;
    let bound = 0;
    for(let i29 = 0; i29 < ncoords; i29++)bound = Math.max(bound, ptables[i29][indices[i29]]);
    while(true){
        let path = ida_search(indices, mtables, ptables, bound, -1);
        if (path !== void 0) return path;
        bound++;
    }
}
function ida_search(indices, mtables, ptables, bound, last) {
    let ncoords = indices.length;
    let nmoves = mtables[0][0].length;
    let heuristic = 0;
    for(let i30 = 0; i30 < ncoords; i30++)heuristic = Math.max(heuristic, ptables[i30][indices[i30]]);
    if (heuristic > bound) return;
    if (bound === 0 || heuristic === 0) return [];
    for(let m = 0; m < nmoves; m++){
        if (m === last) continue;
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
function phase4_ida_solve(indices) {
    let mtable_o = generate_phase4_orientation_mtable();
    let mtable_p = generate_phase4_permutation_mtable();
    let ptable_o = generate_phase4_orientation_ptable();
    let ptable_p = generate_phase4_permutation_ptable();
    let ptable_n = generate_phase4_near_ptable_list(PHASE4_THRESHOLD);
    let bound = Math.max(ptable_o[indices[0]], ptable_p[indices[1]]);
    while(true){
        let path = phase4_ida_search(indices, bound, -1, mtable_o, mtable_p, ptable_o, ptable_p, ptable_n);
        if (path !== void 0) return path;
        bound++;
    }
}
function phase4_ida_search(indices, bound, last, mtable_o, mtable_p, ptable_o, ptable_p, ptable_n) {
    let heuristic = Math.max(ptable_o[indices[0]], ptable_p[indices[1]]);
    if (heuristic > bound) return;
    if (heuristic <= PHASE4_THRESHOLD && !binary_search(ptable_n, indices[0] + 19683 * indices[1])) heuristic = PHASE4_THRESHOLD + 1;
    if (heuristic > bound) return;
    if (bound === 0 || heuristic === 0) return [];
    for(let m = 0; m < 3; m++){
        if (m === last) continue;
        let new_indices = indices.slice();
        for(let r = 1; r < 5; r++){
            new_indices[0] = mtable_o[new_indices[0]][m];
            new_indices[1] = mtable_p[new_indices[1]][m];
            let subpath = phase4_ida_search(new_indices, bound - 1, m, mtable_o, mtable_p, ptable_o, ptable_p, ptable_n);
            if (subpath !== void 0) return [
                [
                    m,
                    r
                ]
            ].concat(subpath);
        }
    }
    return;
}
var randomUintBelow = _chunkRENZB7QNJs.randomUIntBelowFactory();
async function getRandomKilominxScramble() {
    return new _chunkEWRBHQFXJs.Alg(stringify_move_sequence(generate_random_state_scramble(await randomUintBelow)));
}
getRandomKilominxScramble().then((alg)=>alg.log()
);

},{"./chunk-RENZB7QN.js":"fdjOR","./chunk-EWRBHQFX.js":"i6QEj","./chunk-WO2AXYFE.js":"dbeiO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["h7oQ3"], null, "parcelRequire4b33")

//# sourceMappingURL=kilosolver-N6JM5PUY.7beea244.js.map
