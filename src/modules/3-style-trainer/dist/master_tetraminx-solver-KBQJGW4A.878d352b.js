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
})({"8eceP":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = true;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "83254ff8878d352b";
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

},{}],"8bYdf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "randomMasterTetraminxScrambleString", ()=>randomMasterTetraminxScrambleString
);
var _chunkRENZB7QNJs = require("./chunk-RENZB7QN.js");
var _chunkWO2AXYFEJs = require("./chunk-WO2AXYFE.js");
// src/cubing/vendor/xyzzy/master_tetraminx-solver.js
"use strict";
function factorial(n) {
    if (n < 2) return n;
    let f = 1;
    for(let i3 = 2; i3 <= n; i3++)f *= i3;
    return f;
}
function identity_permutation(n) {
    let a = Array(n);
    for(let i4 = 0; i4 < n; i4++)a[i4] = i4;
    return a;
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
        for(let i5 = 0; i5 < n; i5++){
            let x = perm[i5 + 1];
            perm[i5] = x - (x > e);
        }
        f /= n;
    }
    return ind;
}
function index_to_evenpermutation(ind, n) {
    let perm = [];
    let f = factorial(n - 1) / 2;
    let parity = 0;
    for(let i7 = 0; i7 < n - 1; i7++){
        perm[i7] = ind / f | 0;
        ind %= f;
        f /= n - 1 - i7;
    }
    perm[n - 1] = 0;
    for(let i6 = n - 2; i6 >= 0; i6--){
        for(let j1 = i6 + 1; j1 < n; j1++)if (perm[j1] >= perm[i6]) perm[j1]++;
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
var [evenpermutation12_to_index, index_to_evenpermutation12] = (()=>{
    let index_in_set_bits = new Int8Array(49152);
    let look_up_set_bits = new Int8Array(49152);
    for(let i8 = 0; i8 < 4096; i8++)for(let j2 = 0, counter = 0; j2 < 12; j2++){
        if ((i8 >>> j2 & 1) === 0) continue;
        index_in_set_bits[j2 << 12 | i8] = counter;
        look_up_set_bits[counter << 12 | i8] = j2;
        counter++;
    }
    function evenpermutation12_to_index2(perm) {
        let unused = 4095;
        let f = 19958400;
        let ind = 0;
        for(let i9 = 0; i9 < 10; i9++){
            let v = perm[i9];
            ind += index_in_set_bits[unused | v << 12] * f;
            unused &= ~(1 << v);
            f /= 11 - i9;
        }
        return ind;
    }
    function index_to_evenpermutation122(ind, perm) {
        let unused = 4095;
        let f = 19958400;
        let parity = 0;
        for(let i10 = 0; i10 < 10; i10++){
            let a = ind / f | 0;
            ind -= a * f;
            parity ^= a & 1;
            let v = look_up_set_bits[unused | a << 12];
            perm[i10] = v;
            unused &= ~(1 << v);
            f /= 11 - i10;
        }
        perm[10] = look_up_set_bits[unused | parity << 12];
        perm[11] = look_up_set_bits[unused | (parity ^ 1) << 12];
        return perm;
    }
    return [
        evenpermutation12_to_index2,
        index_to_evenpermutation122
    ];
})();
function compose(A, B) {
    let C = [];
    for(let i11 = 0; i11 < B.length; i11++)C[i11] = A[B[i11]];
    return C;
}
function invert(perm) {
    let inv = [];
    for(let i12 = 0; i12 < perm.length; i12++)inv[perm[i12]] = i12;
    return inv;
}
function permutation_from_cycle(cycle, n) {
    let perm = [];
    for(let i14 = 0; i14 < n; i14++)perm[i14] = i14;
    for(let i13 = 0; i13 < cycle.length; i13++)perm[cycle[i13]] = cycle[(i13 + 1) % cycle.length];
    return perm;
}
function permutation_from_cycles(cycles, n) {
    if (cycles.length === 0) return identity_permutation(n);
    return cycles.map((cycle)=>permutation_from_cycle(cycle, n)
    ).reduce(compose);
}
function compose_state(state1, state2) {
    let co = Array(4);
    for(let i15 = 0; i15 < 4; i15++)co[i15] = (state1.co[i15] + state2.co[i15]) % 3;
    let mp = compose(state1.mp, state2.mp);
    let wp = compose(state1.wp, state2.wp);
    let cp = compose(state1.cp, state2.cp);
    return {
        co,
        mp,
        wp,
        cp
    };
}
var solved = {
    co: [
        0,
        0,
        0,
        0
    ],
    mp: identity_permutation(12),
    wp: identity_permutation(12),
    cp: [
        0,
        1,
        2,
        3
    ]
};
var move_U = {
    co: [
        2,
        0,
        0,
        0
    ],
    mp: identity_permutation(12),
    wp: permutation_from_cycle([
        1,
        9,
        11
    ], 12),
    cp: [
        0,
        1,
        2,
        3
    ]
};
var move_L = {
    co: [
        0,
        2,
        0,
        0
    ],
    mp: identity_permutation(12),
    wp: permutation_from_cycle([
        0,
        7,
        2
    ], 12),
    cp: [
        0,
        1,
        2,
        3
    ]
};
var move_R = {
    co: [
        0,
        0,
        2,
        0
    ],
    mp: identity_permutation(12),
    wp: permutation_from_cycle([
        3,
        6,
        10
    ], 12),
    cp: [
        0,
        1,
        2,
        3
    ]
};
var move_B = {
    co: [
        0,
        0,
        0,
        2
    ],
    mp: identity_permutation(12),
    wp: permutation_from_cycle([
        4,
        8,
        5
    ], 12),
    cp: [
        0,
        1,
        2,
        3
    ]
};
var move_Uw = {
    co: [
        2,
        0,
        0,
        0
    ],
    mp: permutation_from_cycles([
        [
            1,
            9,
            11
        ],
        [
            7,
            3,
            5
        ]
    ], 12),
    wp: permutation_from_cycles([
        [
            1,
            9,
            11
        ],
        [
            7,
            3,
            5
        ]
    ], 12),
    cp: [
        0,
        2,
        3,
        1
    ]
};
var move_Lw = {
    co: [
        0,
        2,
        0,
        0
    ],
    mp: permutation_from_cycles([
        [
            0,
            7,
            2
        ],
        [
            6,
            1,
            8
        ]
    ], 12),
    wp: permutation_from_cycles([
        [
            0,
            7,
            2
        ],
        [
            6,
            1,
            8
        ]
    ], 12),
    cp: [
        3,
        1,
        0,
        2
    ]
};
var move_Rw = {
    co: [
        0,
        0,
        2,
        0
    ],
    mp: permutation_from_cycles([
        [
            3,
            6,
            10
        ],
        [
            9,
            0,
            4
        ]
    ], 12),
    wp: permutation_from_cycles([
        [
            3,
            6,
            10
        ],
        [
            9,
            0,
            4
        ]
    ], 12),
    cp: [
        1,
        3,
        2,
        0
    ]
};
var move_Bw = {
    co: [
        0,
        0,
        0,
        2
    ],
    mp: permutation_from_cycles([
        [
            4,
            8,
            5
        ],
        [
            10,
            2,
            11
        ]
    ], 12),
    wp: permutation_from_cycles([
        [
            4,
            8,
            5
        ],
        [
            10,
            2,
            11
        ]
    ], 12),
    cp: [
        2,
        0,
        1,
        3
    ]
};
var moves = [
    move_Uw,
    move_Lw,
    move_Rw,
    move_Bw,
    move_U,
    move_L,
    move_R,
    move_B
];
var move_names = [
    "u",
    "l",
    "r",
    "b",
    "U",
    "L",
    "R",
    "B"
];
var N_MOVES = 8;
var N_MOVES_PHASE2 = 4;
function moves_commute(i16, j3) {
    if (i16 >= 4 && j3 >= 4) return true;
    if (i16 < 4 && j3 < 4) return i16 === j3;
    return (i16 ^ j3) === 4;
}
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
    let co = Array(4);
    for(let i18 = 0; i18 < 4; i18++)co[i18] = randomUintBelow2(3);
    let mp = index_to_evenpermutation(randomUintBelow2(factorial(6) / 2), 6);
    for(let i17 = 0, parity = 0; i17 < 6; i17++){
        let eo = i17 === 5 ? parity : randomUintBelow2(2);
        parity ^= eo;
        mp[i17] += eo * 6;
        mp[i17 + 6] = (mp[i17] + 6) % 12;
    }
    let wp = index_to_evenpermutation(randomUintBelow2(factorial(12) / 2), 12);
    let cp = index_to_evenpermutation(randomUintBelow2(factorial(4) / 2), 4);
    return {
        co,
        mp,
        wp,
        cp
    };
}
function generate_random_state_scramble(randomUintBelow2) {
    return solve(generate_random_state(randomUintBelow2));
}
function generate_scramble_sequence(randomUintBelow2, tips = true, obfuscate_tips = false) {
    let scramble_string = stringify_move_sequence(generate_random_state_scramble(randomUintBelow2));
    if (!tips) return scramble_string;
    let tip_names = [
        "u",
        "l",
        "r",
        "b"
    ];
    let suffixes = [
        "0",
        "",
        "'"
    ];
    if (!obfuscate_tips) {
        for(let i20 = 0; i20 < 4; i20++){
            let x = randomUintBelow2(3);
            if (x !== 0) scramble_string += " " + tip_names[i20] + suffixes[x];
        }
        return scramble_string.trim();
    }
    let amount = [], amount_pre = [], amount_post = [];
    for(let i21 = 0; i21 < 4; i21++){
        amount[i21] = randomUintBelow2(3);
        amount_pre[i21] = randomUintBelow2(3);
        amount_post[i21] = (amount[i21] - amount_pre[i21] + 3) % 3;
    }
    let weight = (arr)=>arr.filter((x)=>x !== 0
        ).length
    ;
    while(!(weight(amount_pre) >= 1 && weight(amount_post) >= 1 && weight(amount_pre) + weight(amount_post) >= 4))for(let i19 = 0; i19 < 4; i19++){
        amount_pre[i19] = randomUintBelow2(3);
        amount_post[i19] = (amount[i19] - amount_pre[i19] + 3) % 3;
    }
    let prepend = amount_pre.map((x, i)=>x !== 0 ? tip_names[i] + suffixes[x] + " " : ""
    ).join("");
    let append = amount_post.map((x, i)=>x !== 0 ? " " + tip_names[i] + suffixes[x] : ""
    ).join("");
    return prepend + scramble_string + append;
}
function solve(state) {
    let phase1_indices = index_phase1(state);
    let phase2_mtables = [
        generate_phase2_permutation_mtable(),
        generate_phase2_orientation_mtable()
    ];
    let phase2_ptables = [
        generate_phase2_permutation_ptable(),
        generate_phase2_orientation_ptable()
    ];
    let phase1gen = phase1_ida_solve_gen(phase1_indices);
    let best = void 0;
    let intermediate_states = new Set();
    let start_time = performance.now();
    for(let i22 = 0; i22 < 22; i22++){
        let { value: sol1 , done  } = phase1gen.next();
        let new_state = state;
        for (let [m, r] of sol1)for(let i2 = 0; i2 < r; i2++)new_state = compose_state(new_state, moves[m]);
        let stringified_state = JSON.stringify(new_state);
        if (intermediate_states.has(stringified_state)) continue;
        else intermediate_states.add(stringified_state);
        let phase2_indices = index_phase2(new_state);
        let moves_left = best ? best.length - sol1.length - 1 : 999999;
        let sol2 = ida_solve_gen(phase2_indices, phase2_mtables, phase2_ptables, moves_left).next().value;
        if (sol2 === void 0) continue;
        if (best === void 0 || best.length > sol1.length + sol2.length) best = sol1.concat(sol2);
        if (performance.now() - start_time > 300) break;
    }
    return best;
}
function determine_V_coset(p) {
    return p[3 ^ p.indexOf(3)];
}
function index_phase1(state) {
    let w = compose(invert(state.mp), state.wp);
    let c = (state.co.reduce((x, y)=>x + y
    ) - determine_V_coset(state.cp) + 3) % 3;
    return [
        0,
        1,
        2,
        3,
        4,
        5
    ].map((i23)=>i23 + 6 * w.indexOf(i23) + 72 * w.indexOf(i23 + 6) + 864 * c
    );
}
var phase1_permtable_m = [];
var phase1_permtable_minv = [];
var phase1_permtable_w = [];
var phase1_permtable_winv = [];
for(let i = 0; i < N_MOVES; i++){
    let move = moves[i];
    phase1_permtable_m[i] = move.mp;
    phase1_permtable_minv[i] = invert(move.mp);
    phase1_permtable_w[i] = move.wp;
    phase1_permtable_winv[i] = invert(move.wp);
}
var phase1_c_update = [
    0,
    0,
    0,
    0,
    2,
    2,
    2,
    2
];
var phase1_score_ptable = [
    [
        14,
        -1,
        -1,
        11,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        6,
        4,
        5,
        5,
        3,
        4,
        4,
        2,
        3,
        4,
        3,
        -1,
        -1,
        0
    ],
    [
        13,
        -1,
        -1,
        11,
        10,
        10,
        9,
        8,
        8,
        7,
        7,
        6,
        4,
        5,
        5,
        3,
        4,
        4,
        2,
        3,
        3,
        1,
        -1,
        -1,
        6
    ]
];
var phase1_score_ptable_condensed = new Int8Array(55);
for(let i1 = 0; i1 < 25; i1++){
    phase1_score_ptable_condensed[i1] = phase1_score_ptable[0][i1];
    phase1_score_ptable_condensed[i1 + 30] = phase1_score_ptable[1][i1];
}
var phase1_coord_to_score = new Int8Array(2592);
for(let i2 = 0; i2 < 6; i2++)for(let j = 0; j < 12; j++)for(let k = 0; k < 12; k++){
    let index = i2 + 6 * j + 72 * k;
    let score = 2;
    if (j === i2) score++;
    else if (j === (i2 + 6) % 12) score--;
    if (k === (i2 + 6) % 12) score++;
    else if (k === i2) score--;
    phase1_coord_to_score[index] = score;
    phase1_coord_to_score[index + 864] = phase1_coord_to_score[index + 1728] = score + 5;
}
function* phase1_ida_solve_gen(coords) {
    let bound = 0;
    let mtable = generate_phase1_pairingc_mtable();
    let ptable = generate_phase1_pairing2c_ptable();
    while(true){
        yield* phase1_ida_search_gen(...coords, mtable, ptable, bound, -1);
        bound++;
    }
}
function* phase1_ida_search_gen(a, b, c, d, e, f, mtable, ptable, bound, last) {
    let nmoves = N_MOVES;
    let score = phase1_coord_to_score[a] + phase1_coord_to_score[b] + phase1_coord_to_score[c] + phase1_coord_to_score[d] + phase1_coord_to_score[e] + phase1_coord_to_score[f];
    let heuristic = Math.max(ptable[a % 864 + b * 864], ptable[c % 864 + b * 864], ptable[e % 864 + b * 864], ptable[a % 864 + d * 864], ptable[c % 864 + d * 864], ptable[e % 864 + d * 864], ptable[a % 864 + f * 864], ptable[c % 864 + f * 864], ptable[e % 864 + f * 864], ptable[a % 864 + c * 864], ptable[a % 864 + e * 864], ptable[c % 864 + e * 864], ptable[b % 864 + d * 864], ptable[b % 864 + f * 864], ptable[d % 864 + f * 864], phase1_score_ptable_condensed[score]);
    if (heuristic > bound) return;
    if (bound === 0) {
        yield [];
        return;
    }
    if (heuristic === 0 && bound === 1) return;
    for(let m = 0; m < nmoves; m++){
        if (m === last) continue;
        if (m < last && moves_commute(m, last)) continue;
        let A = a, B = b, C = c, D = d, E = e, F = f;
        for(let r = 1; r <= 2; r++){
            A = mtable[A][m];
            B = mtable[B][m];
            C = mtable[C][m];
            D = mtable[D][m];
            E = mtable[E][m];
            F = mtable[F][m];
            let subpath_gen = phase1_ida_search_gen(A, B, C, D, E, F, mtable, ptable, bound - 1, m);
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
        }
    }
}
function index_phase2(state) {
    let edges = state.mp;
    let ep = evenpermutation_to_index(edges.slice(0, 6).map((x)=>x % 6
    ));
    let eo = edges.slice(0, 5).map((x, i24)=>(x >= 6) * 2 ** i24
    ).reduce((x, y)=>x + y
    );
    let co = state.co.map((x, i25)=>x * 3 ** i25
    ).reduce((x, y)=>x + y
    );
    let cloc = state.cp.indexOf(0);
    return [
        ep + 360 * cloc,
        eo + 32 * co
    ];
}
var tables = {
};
function generate_phase1_pairing_mtable() {
    if (tables.phase1pm) return tables.phase1pm;
    let mtable = Array(864).fill().map(()=>Array(N_MOVES).fill(-1)
    );
    for(let midge = 0; midge < 6; midge++){
        for(let wingl = 0; wingl < 12; wingl++)for(let wingh = 0; wingh < 12; wingh++){
            if (wingl === wingh) continue;
            let index = midge + 6 * wingl + 72 * wingh;
            for(let m = 0; m < N_MOVES; m++){
                let new_midge = phase1_permtable_minv[m][midge];
                let new_wingl = phase1_permtable_winv[m][wingl];
                let new_wingh = phase1_permtable_winv[m][wingh];
                if (new_midge < 6) mtable[index][m] = new_midge + 6 * new_wingl + 72 * new_wingh;
                else mtable[index][m] = new_midge - 6 + 6 * new_wingh + 72 * new_wingl;
            }
        }
    }
    return tables.phase1pm = mtable;
}
function generate_phase1_pairingc_mtable() {
    if (tables.phase1pcm) return tables.phase1pcm;
    let mtable_pairing = generate_phase1_pairing_mtable();
    let mtable = Array(mtable_pairing.length * 3).fill().map(()=>Array(N_MOVES).fill(-1)
    );
    for(let index = 0; index < mtable_pairing.length; index++)for(let m = 0; m < N_MOVES; m++){
        let new_index = mtable_pairing[index][m];
        mtable[index][m] = new_index + 864 * phase1_c_update[m];
        mtable[index + 864][m] = new_index + 864 * ((phase1_c_update[m] + 1) % 3);
        mtable[index + 1728][m] = new_index + 864 * ((phase1_c_update[m] + 2) % 3);
    }
    return tables.phase1pcm = mtable;
}
function generate_phase1_pairing2c_ptable() {
    if (tables.phase1p2cp) return tables.phase1p2cp;
    let mtable_noc = generate_phase1_pairing_mtable();
    let mtable = generate_phase1_pairingc_mtable();
    let ptable = new Int8Array(2239488);
    ptable.fill(-1);
    let g = [
        0,
        1,
        2,
        3,
        4,
        5
    ].map((x)=>x + 6 * x + 72 * (x + 6)
    );
    for(let i26 = 0; i26 < 6; i26++)for(let j4 = 0; j4 < 6; j4++){
        if (i26 === j4) continue;
        ptable[g[i26] + 864 * g[j4]] = 0;
    }
    let dist = 0;
    while(true){
        let changed = false;
        for(let index = 0; index < ptable.length; index++){
            if (ptable[index] !== dist) continue;
            let index0 = index % 864, index1 = Math.floor(index / 864);
            for(let m = 0; m < N_MOVES; m++){
                let new_index0 = index0, new_index1 = index1;
                for(let r = 1; r <= 2; r++){
                    new_index0 = mtable_noc[new_index0][m];
                    new_index1 = mtable[new_index1][m];
                    let new_index = new_index0 + 864 * new_index1;
                    if (ptable[new_index] === -1) {
                        changed = true;
                        ptable[new_index] = dist + 1;
                    }
                }
            }
        }
        if (!changed) break;
        dist++;
    }
    return tables.phase1p2cp = ptable;
}
function generate_phase2_permutation_mtable() {
    if (tables.phase2pm) return tables.phase2pm;
    let mtable = Array(1440).fill().map(()=>Array(N_MOVES_PHASE2)
    );
    for(let ep = 0; ep < 360; ep++){
        let perm = index_to_evenpermutation(ep, 6);
        for(let i27 = 0; i27 < 6; i27++)perm[i27 + 6] = perm[i27] + 6;
        for(let m = 0; m < N_MOVES_PHASE2; m++){
            let new_perm = compose(perm, moves[m].mp);
            let new_ep = evenpermutation_to_index(new_perm.slice(0, 6).map((x)=>x % 6
            ));
            for(let new_cloc = 0; new_cloc < 4; new_cloc++){
                let cloc = moves[m].cp[new_cloc];
                mtable[ep + 360 * cloc][m] = new_ep + 360 * new_cloc;
            }
        }
    }
    return tables.phase2pm = mtable;
}
function generate_phase2_orientation_mtable() {
    if (tables.phase2om) return tables.phase2om;
    let mtable = Array(2592).fill().map(()=>Array(N_MOVES_PHASE2)
    );
    for(let eo = 0; eo < 32; eo++){
        let eo_array = [
            0,
            1,
            2,
            3,
            4
        ].map((i30)=>eo >> i30 & 1
        );
        eo_array[5] = eo_array.reduce((x, y)=>x ^ y
        );
        let perm = [];
        for(let i28 = 0; i28 < 6; i28++){
            perm[i28] = i28 + 6 * eo_array[i28];
            perm[i28 + 6] = i28 + 6 * (eo_array[i28] ^ 1);
        }
        for(let co = 0; co < 81; co++){
            let co_array = [
                0,
                1,
                2,
                3
            ].map((i31)=>Math.floor(co / 3 ** i31) % 3
            );
            for(let m = 0; m < N_MOVES_PHASE2; m++){
                let new_perm = compose(perm, moves[m].mp);
                let new_eo_array = new_perm.slice(0, 5).map((x)=>+(x >= 6)
                );
                let new_eo = 0;
                for(let i33 = 0; i33 < 5; i33++)new_eo += new_eo_array[i33] << i33;
                let new_co_array = co_array.map((x, i)=>(x + moves[m].co[i]) % 3
                );
                let new_co = 0;
                for(let i32 = 0; i32 < 4; i32++)new_co += new_co_array[i32] * 3 ** i32;
                mtable[eo + 32 * co][m] = new_eo + 32 * new_co;
            }
        }
    }
    return tables.phase2om = mtable;
}
function generate_phase2_permutation_ptable() {
    if (tables.phase2pp) return tables.phase2pp;
    return tables.phase2pp = bfs(generate_phase2_permutation_mtable(), [
        0
    ]);
}
function generate_phase2_orientation_ptable() {
    if (tables.phase2op) return tables.phase2op;
    return tables.phase2op = bfs(generate_phase2_orientation_mtable(), [
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
function* ida_solve_gen(indices, mtables, ptables, moves_left) {
    let ncoords = indices.length;
    let bound = 0;
    for(let i34 = 0; i34 < ncoords; i34++)bound = Math.max(bound, ptables[i34][indices[i34]]);
    while(bound <= moves_left){
        yield* ida_search_gen(indices, mtables, ptables, bound, -1);
        bound++;
    }
}
function* ida_search_gen(indices, mtables, ptables, bound, last) {
    let ncoords = indices.length;
    let nmoves = mtables[0][0].length;
    let heuristic = 0;
    for(let i35 = 0; i35 < ncoords; i35++)heuristic = Math.max(heuristic, ptables[i35][indices[i35]]);
    if (heuristic > bound) return;
    if (bound === 0) {
        yield [];
        return;
    }
    if (heuristic === 0 && bound === 1) return;
    for(let m = 0; m < nmoves; m++){
        if (m === last) continue;
        if (m < last && moves_commute(m, last)) continue;
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
async function randomMasterTetraminxScrambleString() {
    return generate_scramble_sequence(await randomUintBelow, false);
}

},{"./chunk-RENZB7QN.js":"fdjOR","./chunk-WO2AXYFE.js":"dbeiO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8eceP"], null, "parcelRequire4b33")

//# sourceMappingURL=master_tetraminx-solver-KBQJGW4A.878d352b.js.map
