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
})({"eAxEY":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = true;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b9f8bfa97b24fd43";
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

},{}],"9hlsR":[function(require,module,exports) {
var _chunkL73RWUDGJs = require("./chunk-L73RWUDG.js");
var _chunkWDJDRVZZJs = require("./chunk-WDJDRVZZ.js");
var _chunkLZGPOT2VJs = require("./chunk-LZGPOT2V.js");
var _chunkHTPDDD3QJs = require("./chunk-HTPDDD3Q.js");
var _chunk27KJGD3SJs = require("./chunk-27KJGD3S.js");
var _chunkU2TSTTDGJs = require("./chunk-U2TSTTDG.js");
var _chunkF5WNHV7VJs = require("./chunk-F5WNHV7V.js");
var _chunkIVQ4ITE2Js = require("./chunk-IVQ4ITE2.js");
var _chunkME2QTCHNJs = require("./chunk-ME2QTCHN.js");
var _chunkRENZB7QNJs = require("./chunk-RENZB7QN.js");
var _chunkBOKO2BWTJs = require("./chunk-BOKO2BWT.js");
var _chunkFE3HTWQKJs = require("./chunk-FE3HTWQK.js");
var _chunkEWRBHQFXJs = require("./chunk-EWRBHQFX.js");
var _chunkWO2AXYFEJs = require("./chunk-WO2AXYFE.js");
// src/cubing/search/inside/solve/tremble.ts
var DEFAULT_STAGE1_DEPTH_LIMIT = 2;
var DOUBLECHECK_PLACED_PIECES = true;
var DEBUG = false;
function calculateMoves(kpuzzle, moveNames) {
    const searchMoves = [];
    moveNames.forEach(function(moveName) {
        const rootMove = new _chunkEWRBHQFXJs.Move(moveName);
        if (rootMove.amount !== 1) throw new Error("SGS cannot handle def moves with an amount other than 1 yet.");
        let transformation = kpuzzle.identityTransformation();
        for(let i = 1;; i++){
            transformation = transformation.applyMove(rootMove);
            if (transformation.isIdentityTransformation()) break;
            searchMoves.push({
                move: rootMove.modified({
                    amount: i
                }),
                transformation
            });
        }
    });
    return searchMoves;
}
var TrembleSolver = class {
    constructor(kpuzzle, sgs, trembleMoveNames){
        this.kpuzzle = kpuzzle;
        this.sgs = sgs;
        this.searchMoves = calculateMoves(this.kpuzzle, trembleMoveNames ?? Object.keys(this.kpuzzle.definition.moves));
    }
    async solve(state, stage1DepthLimit = DEFAULT_STAGE1_DEPTH_LIMIT, quantumMoveOrder) {
        const transformation = state.experimentalToTransformation();
        if (!transformation) throw new Error("distinguishable pieces are not supported in tremble solver yt");
        let bestAlg = null;
        let bestLen = 1000000;
        const recur = (recursiveTransformation, togo, sofar)=>{
            if (togo === 0) {
                const sgsAlg = this.sgsPhaseSolve(recursiveTransformation, bestLen);
                if (!sgsAlg) return;
                const newAlg = sofar.concat(sgsAlg).simplify({
                    collapseMoves: true,
                    quantumMoveOrder
                });
                const len = _chunkU2TSTTDGJs.countMoves(newAlg);
                if (bestAlg === null || len < bestLen) {
                    if (DEBUG) {
                        console.log(`New best (${len} moves): ${newAlg.toString()}`);
                        console.log(`Tremble moves are: ${sofar.toString()}`);
                    }
                    bestAlg = newAlg;
                    bestLen = len;
                }
                return;
            }
            for (const searchMove of this.searchMoves)recur(recursiveTransformation.applyTransformation(searchMove.transformation), togo - 1, sofar.concat([
                searchMove.move
            ]));
        };
        for(let d = 0; d <= stage1DepthLimit; d++)recur(transformation, d, new _chunkEWRBHQFXJs.Alg());
        if (bestAlg === null) throw new Error("SGS search failed.");
        return bestAlg;
    }
    sgsPhaseSolve(initialTransformation, bestLenSofar) {
        const algBuilder = new _chunkEWRBHQFXJs.AlgBuilder();
        let transformation = initialTransformation;
        for (const step of this.sgs.ordering){
            const cubieSeq = step.pieceOrdering;
            let key = "";
            const inverseTransformation = transformation.invert();
            for(let i = 0; i < cubieSeq.length; i++){
                const loc = cubieSeq[i];
                const orbitName = loc.orbitName;
                const idx = loc.permutationIdx;
                key += ` ${inverseTransformation.transformationData[orbitName].permutation[idx]} ${inverseTransformation.transformationData[orbitName].orientation[idx]}`;
            }
            const info = step.lookup[key];
            if (!info) throw new Error("Missing algorithm in sgs or esgs?");
            algBuilder.experimentalPushAlg(info.alg);
            if (algBuilder.experimentalNumUnits() >= bestLenSofar) return null;
            transformation = transformation.applyTransformation(info.transformation);
            if (DOUBLECHECK_PLACED_PIECES) for(let i1 = 0; i1 < cubieSeq.length; i1++){
                const location = cubieSeq[i1];
                const orbitName = location.orbitName;
                const idx = location.permutationIdx;
                if (transformation.transformationData[orbitName].permutation[idx] !== idx || transformation.transformationData[orbitName].orientation[idx] !== 0) throw new Error("bad SGS :-(");
            }
        }
        return algBuilder.toAlg();
    }
};
async function randomStateFromSGS(kpuzzle, sgs) {
    const randomChoice = await _chunkRENZB7QNJs.randomChoiceFactory();
    let transformation = kpuzzle.identityTransformation();
    for (const step of sgs.ordering){
        const sgsAction = randomChoice(Object.values(step.lookup));
        transformation = transformation.applyTransformation(sgsAction.transformation);
    }
    return transformation.toKState();
}
// src/cubing/search/inside/solve/puzzles/2x2x2.ts
var TREMBLE_DEPTH = 3;
var cachedTrembleSolver = null;
async function getCachedTrembleSolver() {
    return cachedTrembleSolver || (cachedTrembleSolver = (async ()=>{
        const sgsCachedData = await (await require("dcee7b75e56a4896")).cachedData222();
        return new TrembleSolver(await _chunkBOKO2BWTJs.puzzles["2x2x2"].kpuzzle(), sgsCachedData, "URFLBD".split(""));
    })());
}
async function preInitialize222() {
    await getCachedTrembleSolver();
}
async function solve222(state) {
    _chunkME2QTCHNJs.mustBeInsideWorker();
    const trembleSolver = await getCachedTrembleSolver();
    const alg = await trembleSolver.solve(state, TREMBLE_DEPTH, ()=>4
    );
    return alg;
}
async function mutatingRandomizeOrbit(kpuzzle, orbitName, state, options) {
    const randomUIntBelow = await _chunkRENZB7QNJs.randomUIntBelowFactory();
    await _chunkRENZB7QNJs.randomPermute(state.stateData[orbitName].pieces);
    const orbitDef = kpuzzle.definition.orbits[orbitName];
    const ori = state.stateData[orbitName].orientation;
    let sum = 0;
    for(let i = 0; i < orbitDef.numPieces; i++){
        const o = randomUIntBelow(orbitDef.numOrientations);
        ori[i] = o;
        sum += o;
    }
    if (options && "orientationSum" in options) ori[0] = ((ori[0] + options.orientationSum - sum) % orbitDef.numOrientations + orbitDef.numOrientations) % orbitDef.numOrientations;
}
async function random222State() {
    const kpuzzle = await _chunkBOKO2BWTJs.puzzles["2x2x2"].kpuzzle();
    const stateCopy = new _chunkFE3HTWQKJs.KState(kpuzzle, JSON.parse(JSON.stringify(kpuzzle.startState().stateData)));
    await mutatingRandomizeOrbit(kpuzzle, "CORNERS", stateCopy, {
        orientationSum: 0
    });
    return stateCopy;
}
async function random222Scramble() {
    return await solve222(await random222State());
}
// src/cubing/search/inside/solve/puzzles/4x4x4.ts
var randomSuffixes = [
    [
        null,
        "x",
        "x2",
        "x'",
        "z",
        "z'"
    ],
    [
        null,
        "y",
        "y2",
        "y'"
    ]
];
var cachedImport = null;
function dynamicScramble444() {
    return cachedImport ?? (cachedImport = require("166c7371a0da1f83"));
}
async function initialize444() {
    return (await dynamicScramble444()).initialize();
}
async function random444Scramble() {
    return (await dynamicScramble444()).random444Scramble();
}
async function random444OrientedScramble() {
    return _chunkME2QTCHNJs.addOrientationSuffix(await random444Scramble(), randomSuffixes);
}
// src/cubing/search/inside/solve/puzzles/big-cubes.ts
function numMoves(n) {
    switch(n){
        case 5:
            return 60;
        case 6:
            return 80;
        default:
            return 100;
    }
}
var axesFaces = [
    [
        "U",
        "D"
    ],
    [
        "L",
        "R"
    ],
    [
        "F",
        "B"
    ]
];
var axesMovesCache = new Map();
function cachedAxesMoves(n) {
    const existing = axesMovesCache.get(n);
    if (existing) return existing;
    const axesMoves = [];
    for (const faces of axesFaces){
        const axisMoveFamilies = [];
        axesMoves.push(axisMoveFamilies);
        for (const face of faces){
            axisMoveFamilies.push(new _chunkEWRBHQFXJs.QuantumMove(face));
            if (n > 3) axisMoveFamilies.push(new _chunkEWRBHQFXJs.QuantumMove(`${face}w`));
            for(let i = 3; i <= n / 2; i++)axisMoveFamilies.push(new _chunkEWRBHQFXJs.QuantumMove(`${face}w`, i));
        }
    }
    axesMovesCache.set(n, axesMoves);
    return axesMoves;
}
async function bigCubeRandomMoves(n) {
    const randomUintBelow = await _chunkRENZB7QNJs.randomUIntBelowFactory();
    const randomChoice = await _chunkRENZB7QNJs.randomChoiceFactory();
    const randomNumChoice = randomChoice;
    const axesMoves = cachedAxesMoves(n);
    const cachedNumMoves = numMoves(n);
    const algBuilder = new _chunkEWRBHQFXJs.AlgBuilder();
    let currentAxisIdx = 0;
    const currentAxisQuantumMoves = new Set();
    while(algBuilder.experimentalNumUnits() < cachedNumMoves){
        const newAxisIdx = randomUintBelow(3);
        if (newAxisIdx !== currentAxisIdx) currentAxisQuantumMoves.clear();
        currentAxisIdx = newAxisIdx;
        const quantumMove = randomChoice(axesMoves[currentAxisIdx]);
        const quantumMoveStr = quantumMove.toString();
        if (currentAxisQuantumMoves.has(quantumMoveStr)) continue;
        currentAxisQuantumMoves.add(quantumMoveStr);
        algBuilder.push(new _chunkEWRBHQFXJs.Move(quantumMove, randomNumChoice([
            1,
            2,
            -1
        ])));
    }
    return algBuilder.toAlg();
}
// src/cubing/search/inside/solve/puzzles/5x5x5.ts
var randomSuffixes2 = [
    [
        null,
        "3Rw",
        "3Rw2",
        "3Rw'",
        "3Fw",
        "3Fw'"
    ],
    [
        null,
        "3Dw",
        "3Dw2",
        "3Dw'"
    ]
];
async function oriented555RandomMoves() {
    return _chunkME2QTCHNJs.addOrientationSuffix(await bigCubeRandomMoves(5), randomSuffixes2);
}
// src/cubing/search/inside/solve/puzzles/fto.ts
async function randomFTOScramble() {
    _chunkME2QTCHNJs.mustBeInsideWorker();
    const { randomFTOScrambleString  } = await require("d814863f8d044e6a");
    return new _chunkEWRBHQFXJs.Alg(await randomFTOScrambleString());
}
// src/cubing/search/inside/solve/puzzles/kilominx.ts
async function randomKilominxScramble() {
    _chunkME2QTCHNJs.mustBeInsideWorker();
    const { getRandomKilominxScramble  } = await require("61ed505581376ead");
    return getRandomKilominxScramble();
}
// src/cubing/search/inside/solve/puzzles/master_tetraminx.ts
async function randomMasterTetraminxScramble() {
    const { randomMasterTetraminxScrambleString  } = await require("22fe276707625d13");
    _chunkME2QTCHNJs.mustBeInsideWorker();
    return new _chunkEWRBHQFXJs.Alg(await randomMasterTetraminxScrambleString());
}
// src/cubing/search/inside/solve/puzzles/megaminx.ts
var TREMBLE_DEPTH2 = 2;
var cachedTrembleSolver2 = null;
async function getCachedTrembleSolver2() {
    return cachedTrembleSolver2 || (cachedTrembleSolver2 = (async ()=>{
        const sgs = await require("fe350911c602fa7e");
        const json = await sgs.cachedSGSDataMegaminx();
        return new TrembleSolver(await _chunkLZGPOT2VJs.cachedMegaminxKPuzzleWithoutMO(), json, [
            "U",
            "R",
            "F",
            "L",
            "BR",
            "BL",
            "FR",
            "FL",
            "DR",
            "DL",
            "B",
            "D"
        ]);
    })());
}
async function solveMegaminx(state) {
    _chunkME2QTCHNJs.mustBeInsideWorker();
    const trembleSolver = await getCachedTrembleSolver2();
    const stateDataWithoutMO = JSON.parse(JSON.stringify(state.stateData));
    stateDataWithoutMO.CENTERS.orientation = new Array(12).fill(0);
    const stateWithoutMO = new _chunkFE3HTWQKJs.KState(await _chunkLZGPOT2VJs.cachedMegaminxKPuzzleWithoutMO(), stateDataWithoutMO);
    const alg = await trembleSolver.solve(stateWithoutMO, TREMBLE_DEPTH2, ()=>5
    );
    return alg;
}
// src/cubing/search/inside/solve/puzzles/pyraminx.ts
var TREMBLE_DEPTH3 = 3;
var cachedTrembleSolver3 = null;
async function getCachedTrembleSolver3() {
    return cachedTrembleSolver3 || (cachedTrembleSolver3 = (async ()=>{
        const sgs = await require("3828028c7bb75b1f");
        const json = await sgs.sgsDataPyraminx();
        return new TrembleSolver(await _chunkBOKO2BWTJs.puzzles.pyraminx.kpuzzle(), json, "RLUB".split(""));
    })());
}
async function solvePyraminx(state) {
    _chunkME2QTCHNJs.mustBeInsideWorker();
    const trembleSolver = await getCachedTrembleSolver3();
    const alg = await trembleSolver.solve(state, TREMBLE_DEPTH3, ()=>3
    );
    return alg;
}
async function randomPyraminxStateFixedOrientation() {
    _chunkME2QTCHNJs.mustBeInsideWorker();
    return randomStateFromSGS(await _chunkBOKO2BWTJs.puzzles.pyraminx.kpuzzle(), await _chunkHTPDDD3QJs.sgsDataPyraminxFixedOrientation());
}
async function randomPyraminxScrambleFixedOrientation() {
    return solvePyraminx(await randomPyraminxStateFixedOrientation());
}
// src/cubing/search/inside/solve/puzzles/redi_cube.ts
async function randomRediCubeScramble() {
    _chunkME2QTCHNJs.mustBeInsideWorker();
    const { getRandomRediCubeScramble  } = await require("f9ce0593518d8fe9");
    return getRandomRediCubeScramble();
}
// src/cubing/search/inside/solve/puzzles/skewb.ts
var TREMBLE_DEPTH4 = 3;
var cachedTrembleSolver4 = null;
async function getCachedTrembleSolver4() {
    return cachedTrembleSolver4 || (cachedTrembleSolver4 = (async ()=>{
        const sgs = await require("6ff8dbe90920d181");
        const json = await sgs.sgsDataSkewb();
        return new TrembleSolver(await sgs.skewbKPuzzleWithoutMOCached(), json, "RLUB".split(""));
    })());
}
function resetCenterOrientation(state) {
    return new _chunkFE3HTWQKJs.KState(state.kpuzzle, {
        CORNERS: state.stateData.CORNERS,
        CENTERS: {
            pieces: state.stateData.CENTERS.pieces,
            orientation: new Array(6).fill(0)
        }
    });
}
async function solveSkewb(state) {
    _chunkME2QTCHNJs.mustBeInsideWorker();
    const trembleSolver = await getCachedTrembleSolver4();
    const alg = await trembleSolver.solve(resetCenterOrientation(state), TREMBLE_DEPTH4, (quantumMove)=>quantumMove.family === "y" ? 4 : 3
    );
    return alg;
}
async function randomSkewbFixedCornerState() {
    return randomStateFromSGS(await _chunkL73RWUDGJs.skewbKPuzzleWithoutMOCached(), await _chunkL73RWUDGJs.sgsDataSkewbFixedCorner());
}
async function randomSkewbFixedCornerScramble() {
    return solveSkewb(await randomSkewbFixedCornerState());
}
// src/cubing/search/inside/solve/puzzles/sq1.ts
var cachedImport2 = null;
function dynamicScrambleSq1() {
    return cachedImport2 ?? (cachedImport2 = require("b15210cd34476cb8"));
}
async function getRandomSquare1Scramble() {
    return _chunkEWRBHQFXJs.Alg.fromString(await (await dynamicScrambleSq1()).getRandomSquare1ScrambleString());
}
// src/cubing/search/inside/api.ts
_chunkME2QTCHNJs.setIsInsideWorker(true);
var DEBUG_MEASURE_PERF = true;
function setDebugMeasurePerf(newDebugMeasurePerf) {
    DEBUG_MEASURE_PERF = newDebugMeasurePerf;
}
function now() {
    return (typeof performance === "undefined" ? Date : performance).now();
}
async function measurePerf(name, f) {
    if (!DEBUG_MEASURE_PERF) return f();
    const start = now();
    const result = f();
    if (result?.then) await result;
    const end = now();
    console.warn(`${name}: ${Math.round(end - start)}ms`);
    return result;
}
var insideAPI = {
    initialize: async (eventID)=>{
        switch(eventID){
            case "222":
                return measurePerf("preInitialize222", preInitialize222);
            case "333":
            case "333oh":
            case "333ft":
                return measurePerf("initialize333", _chunkME2QTCHNJs.initialize333);
            case "444":
                return measurePerf("initialize444", initialize444);
            default:
                throw new Error(`unsupported event: ${eventID}`);
        }
    },
    randomScrambleForEvent: async (eventID)=>{
        switch(eventID){
            case "222":
                return measurePerf("random222Scramble", random222Scramble);
            case "333":
            case "333oh":
            case "333ft":
                return measurePerf("random333Scramble", _chunkME2QTCHNJs.random333Scramble);
            case "333fm":
                return measurePerf("random333FewestMovesScramble", _chunkME2QTCHNJs.random333FewestMovesScramble);
            case "333bf":
            case "333mb":
                return measurePerf("random333OrientedScramble", _chunkME2QTCHNJs.random333OrientedScramble);
            case "444":
                return measurePerf("random444Scramble", random444Scramble);
            case "444bf":
                return measurePerf("random444OrientedScramble", random444OrientedScramble);
            case "555":
                return measurePerf("bigCubeScramble(5)", bigCubeRandomMoves.bind(bigCubeRandomMoves, 5));
            case "555bf":
                return measurePerf("oriented555RandomMoves", oriented555RandomMoves);
            case "666":
                return measurePerf("bigCubeScramble(6)", bigCubeRandomMoves.bind(bigCubeRandomMoves, 6));
            case "777":
                return measurePerf("bigCubeScramble(7)", bigCubeRandomMoves.bind(bigCubeRandomMoves, 7));
            case "skewb":
                return measurePerf("randomSkewbFixedCornerScramble", randomSkewbFixedCornerScramble);
            case "pyram":
                return measurePerf("randomPyraminxScrambleFixedOrientation", randomPyraminxScrambleFixedOrientation);
            case "sq1":
                return measurePerf("getRandomSquare1Scramble", getRandomSquare1Scramble);
            case "fto":
                return measurePerf("randomFTOScramble", randomFTOScramble);
            case "master_tetraminx":
                return measurePerf("randomMasterTetraminxScramble", randomMasterTetraminxScramble);
            case "kilominx":
                return measurePerf("randomKilominxScramble", randomKilominxScramble);
            case "redi_cube":
                return measurePerf("randomRediCubeScramble", randomRediCubeScramble);
            default:
                throw new Error(`unsupported event: ${eventID}`);
        }
    },
    randomScrambleStringForEvent: async (eventID)=>{
        return (await insideAPI.randomScrambleForEvent(eventID)).toString();
    },
    solve333ToString: async (stateData)=>{
        const state = new _chunkFE3HTWQKJs.KState(await _chunkBOKO2BWTJs.puzzles["3x3x3"].kpuzzle(), stateData);
        return (await _chunkME2QTCHNJs.solve333(state)).toString();
    },
    solve222ToString: async (stateData)=>{
        const state = new _chunkFE3HTWQKJs.KState(await _chunkBOKO2BWTJs.puzzles["2x2x2"].kpuzzle(), stateData);
        return (await solve222(state)).toString();
    },
    solveSkewbToString: async (stateData)=>{
        const state = new _chunkFE3HTWQKJs.KState(await _chunkBOKO2BWTJs.puzzles["skewb"].kpuzzle(), stateData);
        return (await solveSkewb(state)).toString();
    },
    solvePyraminxToString: async (stateData)=>{
        const state = new _chunkFE3HTWQKJs.KState(await _chunkBOKO2BWTJs.puzzles["pyraminx"].kpuzzle(), stateData);
        return (await solvePyraminx(state)).toString();
    },
    solveMegaminxToString: async (stateData)=>{
        const state = new _chunkFE3HTWQKJs.KState(await _chunkBOKO2BWTJs.puzzles["megaminx"].kpuzzle(), stateData);
        return (await solveMegaminx(state)).toString();
    },
    setDebugMeasurePerf: async (measure)=>{
        setDebugMeasurePerf(measure);
    }
};
// src/cubing/search/inside/search-worker-js-entry.js
_chunkWDJDRVZZJs.expose(insideAPI);

},{"./chunk-L73RWUDG.js":"gd6dL","./chunk-WDJDRVZZ.js":"kx22r","./chunk-LZGPOT2V.js":"hbCkY","./chunk-HTPDDD3Q.js":"5xcVJ","./chunk-27KJGD3S.js":"1TkI5","./chunk-U2TSTTDG.js":"98U7N","./chunk-F5WNHV7V.js":"70ozd","./chunk-IVQ4ITE2.js":"7rQmr","./chunk-ME2QTCHN.js":"dS4p9","./chunk-RENZB7QN.js":"fdjOR","./chunk-BOKO2BWT.js":"abt9g","./chunk-FE3HTWQK.js":"jNiOS","./chunk-EWRBHQFX.js":"i6QEj","./chunk-WO2AXYFE.js":"dbeiO","dcee7b75e56a4896":"3N4Hm","166c7371a0da1f83":"exsqI","d814863f8d044e6a":"f40sg","61ed505581376ead":"ifZOy","22fe276707625d13":"k9lT8","fe350911c602fa7e":"aK1j4","3828028c7bb75b1f":"7XztY","f9ce0593518d8fe9":"75Xcs","6ff8dbe90920d181":"abwcE","b15210cd34476cb8":"exH4F"}],"gd6dL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "skewbKPuzzleWithoutMOCached", ()=>skewbKPuzzleWithoutMOCached
);
parcelHelpers.export(exports, "sgsDataSkewb", ()=>sgsDataSkewb
);
parcelHelpers.export(exports, "sgsDataSkewbFixedCorner", ()=>sgsDataSkewbFixedCorner
);
var _chunk27KJGD3SJs = require("./chunk-27KJGD3S.js");
var _chunkF5WNHV7VJs = require("./chunk-F5WNHV7V.js");
var _chunkFE3HTWQKJs = require("./chunk-FE3HTWQK.js");
// src/cubing/search/inside/solve/puzzles/skewb.sgs.json.ts
async function skewbKPuzzleWithoutMO() {
    const pg = _chunkF5WNHV7VJs.getPuzzleGeometryByName("skewb", {
        allMoves: true,
        addRotations: true
    });
    return new _chunkFE3HTWQKJs.KPuzzle(pg.getKPuzzleDefinition(true), {
        experimentalPGNotation: new _chunkF5WNHV7VJs.PGNotation(pg, pg.getOrbitsDef(true))
    });
}
var defCache = null;
async function skewbKPuzzleWithoutMOCached() {
    return defCache ?? (defCache = skewbKPuzzleWithoutMO());
}
var cachedData = null;
async function sgsDataSkewb() {
    return cachedData ?? (cachedData = uncachedSGSDataSkewb());
}
async function sgsDataSkewbFixedCorner() {
    return {
        ordering: (await sgsDataSkewb()).ordering.slice(1)
    };
}
async function uncachedSGSDataSkewb() {
    return _chunk27KJGD3SJs.parseSGS(await skewbKPuzzleWithoutMOCached(), `SubgroupSizes 24 6 5 12 9 3 4 9 3 3

Alg y
Alg y2
Alg y'
Alg F
Alg F'
Alg y U
Alg y U'
Alg y L
Alg y L'
Alg y F
Alg y F'
Alg y2 U
Alg y2 U'
Alg y2 B
Alg y2 B'
Alg y' U
Alg y' F'
Alg y U L'
Alg y U B
Alg y2 U B
Alg y2 U B'
Alg y2 U' B
Alg y2 U' B'

Alg U
Alg U'
Alg U L
Alg U L'
Alg U' R'

Alg R
Alg R'
Alg R B
Alg R' L'

Alg U B' U
Alg U' L U
Alg U' L' U
Alg U' B U'
Alg R L R'
Alg R B' R
Alg U B L U'
Alg U B' U B'
Alg U B' L' U
Alg U' L B U'
Alg R' B L' R'

Alg L
Alg L'
Alg L B
Alg L B'
Alg L B L
Alg L B L'
Alg L B' L
Alg L B' L'

Alg B
Alg B'

Alg L' B L
Alg L' B' L
Alg R' L' B L R

Alg B L' B L B'
Alg B L' B' L B'
Alg U L U B U' L' U'
Alg R L R' B' R L' R'
Alg U B' R L R' B' U B
Alg U' B U L U' B' U L'
Alg L U' B U L' U' B' U
Alg R B' U R B L U' B

Alg U L U' B' U L' U' B
Alg U' B L U L B' U' L'

Alg U R' U' L B R' B' R
Alg R' U' R U B' U' B L`);
}

},{"./chunk-27KJGD3S.js":"1TkI5","./chunk-F5WNHV7V.js":"70ozd","./chunk-FE3HTWQK.js":"jNiOS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1TkI5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseSGS", ()=>parseSGS
);
var _chunkEWRBHQFXJs = require("./chunk-EWRBHQFX.js");
// src/cubing/search/inside/solve/parseSGS.ts
function parseSGS(kpuzzle, sgs) {
    const subgroupSizes = [];
    const sgsActions = [];
    for (const line of sgs.split("\n")){
        const lineTokens = line.split(" ");
        if (line.startsWith("SetOrder ")) ;
        else if (line.startsWith("Alg ")) {
            const alg = _chunkEWRBHQFXJs.Alg.fromString(line.substring(4));
            sgsActions.push({
                alg,
                transformation: kpuzzle.algToTransformation(alg)
            });
        } else if (line.startsWith("SubgroupSizes ")) for(let j = 1; j < lineTokens.length; j++)subgroupSizes.push(parseInt(lineTokens[j]));
    }
    const sgsCachedData = {
        ordering: new Array(subgroupSizes.length)
    };
    const subgroupAlgOffsets = [];
    let sum = 0;
    subgroupAlgOffsets.push(0);
    const emptyAlg = _chunkEWRBHQFXJs.Alg.fromString("");
    const identity = kpuzzle.identityTransformation();
    for(let i = 0; i < subgroupSizes.length; i++){
        sum += subgroupSizes[i];
        subgroupAlgOffsets.push(sum);
        sgsActions.splice(sum - 1, 0, {
            alg: emptyAlg,
            transformation: identity
        });
    }
    if (sgsActions.length !== sum) throw Error(`Bad sgs; expected ${sum - subgroupSizes.length} algs but saw ${sgsActions.length - subgroupSizes.length}`);
    const processedPieces = {
    };
    for(const orbitName in kpuzzle.definition.orbits){
        const orbitDefinition = kpuzzle.definition.orbits[orbitName];
        processedPieces[orbitName] = new Array(orbitDefinition.numPieces).fill(false);
    }
    for(let i1 = subgroupSizes.length - 1; i1 >= 0; i1--){
        const pieceOrdering = [];
        for(let j = subgroupAlgOffsets[i1]; j < subgroupAlgOffsets[i1 + 1]; j++){
            const transformation = sgsActions[j].transformation;
            for(const orbitName in kpuzzle.definition.orbits){
                const orbitDefinition = kpuzzle.definition.orbits[orbitName];
                for(let idx = 0; idx < orbitDefinition.numPieces; idx++){
                    if (transformation.transformationData[orbitName].permutation[idx] !== idx || transformation.transformationData[orbitName].orientation[idx] !== 0) {
                        if (!processedPieces[orbitName][idx]) {
                            pieceOrdering.push({
                                orbitName,
                                permutationIdx: idx
                            });
                            processedPieces[orbitName][idx] = true;
                        }
                    }
                }
            }
        }
        const lookup = {
        };
        for(let j1 = subgroupAlgOffsets[i1]; j1 < subgroupAlgOffsets[i1 + 1]; j1++){
            const transformation = sgsActions[j1].transformation.invert();
            let key = "";
            for(let k = 0; k < pieceOrdering.length; k++){
                const loc = pieceOrdering[k];
                key = `${key} ${transformation.transformationData[loc.orbitName].permutation[loc.permutationIdx]} ${transformation.transformationData[loc.orbitName].orientation[loc.permutationIdx]}`;
            }
            lookup[key] = sgsActions[j1];
            sgsActions[j1].alg = sgsActions[j1].alg.invert();
            sgsActions[j1].transformation = sgsActions[j1].transformation.invert();
        }
        sgsCachedData.ordering[i1] = {
            pieceOrdering,
            lookup
        };
    }
    return sgsCachedData;
}

},{"./chunk-EWRBHQFX.js":"i6QEj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"70ozd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseOptions", ()=>parseOptions
);
parcelHelpers.export(exports, "Quat", ()=>Quat
);
parcelHelpers.export(exports, "schreierSims", ()=>schreierSims
);
parcelHelpers.export(exports, "getPG3DNamedPuzzles", ()=>getPG3DNamedPuzzles
);
parcelHelpers.export(exports, "getPuzzleDescriptionString", ()=>getPuzzleDescriptionString
);
parcelHelpers.export(exports, "parsePuzzleDescription", ()=>parsePuzzleDescription
);
parcelHelpers.export(exports, "getPuzzleGeometryByDesc", ()=>getPuzzleGeometryByDesc
);
parcelHelpers.export(exports, "getPuzzleGeometryByName", ()=>getPuzzleGeometryByName
);
parcelHelpers.export(exports, "PuzzleGeometry", ()=>PuzzleGeometry
);
parcelHelpers.export(exports, "PGNotation", ()=>PGNotation
);
var _chunkEWRBHQFXJs = require("./chunk-EWRBHQFX.js");
// src/cubing/puzzle-geometry/FaceNameSwizzler.ts
var FaceNameSwizzler = class {
    constructor(facenames, gripnames_arg){
        this.facenames = facenames;
        this.prefixFree = true;
        this.gripnames = [];
        if (gripnames_arg) this.gripnames = gripnames_arg;
        for(let i = 0; this.prefixFree && i < facenames.length; i++){
            for(let j = 0; this.prefixFree && j < facenames.length; j++)if (i !== j && facenames[i].startsWith(facenames[j])) this.prefixFree = false;
        }
    }
    setGripNames(names) {
        this.gripnames = names;
    }
    splitByFaceNames(s) {
        const r = [];
        let at = 0;
        while(at < s.length){
            if (at > 0 && at < s.length && s[at] === "_") at++;
            let currentMatch = -1;
            for(let i = 0; i < this.facenames.length; i++)if (s.substr(at).startsWith(this.facenames[i]) && (currentMatch < 0 || this.facenames[i].length > this.facenames[currentMatch].length)) currentMatch = i;
            if (currentMatch >= 0) {
                r.push(currentMatch);
                at += this.facenames[currentMatch].length;
            } else throw new Error("Could not split " + s + " into face names.");
        }
        return r;
    }
    joinByFaceIndices(list) {
        let sep = "";
        const r = [];
        for(let i = 0; i < list.length; i++){
            r.push(sep);
            r.push(this.facenames[list[i]]);
            if (!this.prefixFree) sep = "_";
        }
        return r.join("");
    }
    spinmatch(userinput, longname) {
        if (userinput === longname) return true;
        try {
            const e1 = this.splitByFaceNames(userinput);
            const e2 = this.splitByFaceNames(longname);
            if (e1.length !== e2.length && e1.length < 3) return false;
            for(let i = 0; i < e1.length; i++){
                for(let j = 0; j < i; j++){
                    if (e1[i] === e1[j]) return false;
                }
                let found = false;
                for(let j1 = 0; j1 < e2.length; j1++)if (e1[i] === e2[j1]) {
                    found = true;
                    break;
                }
                if (!found) return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    }
    spinmatchv(userinput, longname) {
        if (userinput.endsWith("v") && longname.endsWith("v")) return this.spinmatch(userinput.slice(0, userinput.length - 1), longname.slice(0, longname.length - 1));
        else return this.spinmatch(userinput, longname);
    }
    unswizzle(s) {
        if ((s.endsWith("v") || s.endsWith("w")) && s[0] <= "Z") s = s.slice(0, s.length - 1);
        const upperCaseGrip = s.toUpperCase();
        for(let i = 0; i < this.gripnames.length; i++){
            const g = this.gripnames[i];
            if (this.spinmatch(upperCaseGrip, g)) return g;
        }
        return s;
    }
};
// src/cubing/puzzle-geometry/notation-mapping/NullMapper.ts
var NullMapper = class {
    notationToInternal(move) {
        return move;
    }
    notationToExternal(move) {
        return move;
    }
};
// src/cubing/puzzle-geometry/notation-mapping/FTONotationMapper.ts
var FTONotationMapper = class {
    constructor(child, sw){
        this.child = child;
        this.sw = sw;
    }
    notationToInternal(move) {
        if (move.family === "T" && move.innerLayer === void 0 && move.outerLayer === void 0) return new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove("FLRv", move.innerLayer, move.outerLayer), move.amount);
        else {
            const r = this.child.notationToInternal(move);
            return r;
        }
    }
    notationToExternal(move) {
        let fam = move.family;
        if (fam.length > 0 && fam[fam.length - 1] === "v") fam = fam.substring(0, fam.length - 1);
        if (this.sw.spinmatch(fam, "FLUR")) return new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove("T", move.innerLayer, move.outerLayer), move.amount);
        return this.child.notationToExternal(move);
    }
};
// src/cubing/puzzle-geometry/notation-mapping/FaceRenamingMapper.ts
var FaceRenamingMapper = class {
    constructor(internalNames, externalNames){
        this.internalNames = internalNames;
        this.externalNames = externalNames;
    }
    convertString(grip, a, b) {
        let suffix = "";
        if ((grip.endsWith("v") || grip.endsWith("v")) && grip <= "_") {
            suffix = grip.slice(grip.length - 1);
            grip = grip.slice(0, grip.length - 1);
        }
        const upper = grip.toUpperCase();
        let isLowerCase = false;
        if (grip !== upper) {
            isLowerCase = true;
            grip = upper;
        }
        grip = b.joinByFaceIndices(a.splitByFaceNames(grip));
        if (isLowerCase) grip = grip.toLowerCase();
        return grip + suffix;
    }
    convert(move, a, b) {
        const grip = move.family;
        const ngrip = this.convertString(grip, a, b);
        if (grip === ngrip) return move;
        else return new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove(ngrip, move.innerLayer, move.outerLayer), move.amount);
    }
    notationToInternal(move) {
        const r = this.convert(move, this.externalNames, this.internalNames);
        return r;
    }
    notationToExternal(move) {
        return this.convert(move, this.internalNames, this.externalNames);
    }
};
// src/cubing/puzzle-geometry/notation-mapping/MegaminxScramblingNotationMapper.ts
var MegaminxScramblingNotationMapper = class {
    constructor(child){
        this.child = child;
    }
    notationToInternal(move) {
        if (move.innerLayer === void 0 && move.outerLayer === void 0) {
            if (Math.abs(move.amount) === 1) {
                if (move.family === "R++") return new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove("L", 3, 2), -2 * move.amount);
                else if (move.family === "R--") return new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove("L", 3, 2), 2 * move.amount);
                else if (move.family === "D++") return new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove("U", 3, 2), -2 * move.amount);
                else if (move.family === "D--") return new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove("U", 3, 2), 2 * move.amount);
                if (move.family === "R_PLUSPLUS_") return new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove("L", 3, 2), -2 * move.amount);
                else if (move.family === "D_PLUSPLUS_") return new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove("U", 3, 2), -2 * move.amount);
            }
            if (move.family === "y") return new _chunkEWRBHQFXJs.Move("Uv", move.amount);
        }
        return this.child.notationToInternal(move);
    }
    notationToExternal(move) {
        if (move.family === "Uv") return new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove("y", move.innerLayer, move.outerLayer), move.amount);
        if (move.family === "Dv") return new _chunkEWRBHQFXJs.Move("y", -move.amount);
        return this.child.notationToExternal(move);
    }
};
// src/cubing/puzzle-geometry/notation-mapping/NxNxNCubeMapper.ts
var NxNxNCubeMapper = class {
    constructor(slices){
        this.slices = slices;
    }
    notationToInternal(move) {
        const grip = move.family;
        if (!move.innerLayer && !move.outerLayer) {
            if (grip === "x") move = new _chunkEWRBHQFXJs.Move("Rv", move.amount);
            else if (grip === "y") move = new _chunkEWRBHQFXJs.Move("Uv", move.amount);
            else if (grip === "z") move = new _chunkEWRBHQFXJs.Move("Fv", move.amount);
            if ((this.slices & 1) === 1) {
                if (grip === "E") move = new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove("D", (this.slices + 1) / 2), move.amount);
                else if (grip === "M") move = new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove("L", (this.slices + 1) / 2), move.amount);
                else if (grip === "S") move = new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove("F", (this.slices + 1) / 2), move.amount);
            }
            if (this.slices > 2) {
                if (grip === "e") move = new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove("D", this.slices - 1, 2), move.amount);
                else if (grip === "m") move = new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove("L", this.slices - 1, 2), move.amount);
                else if (grip === "s") move = new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove("F", this.slices - 1, 2), move.amount);
            }
        }
        return move;
    }
    notationToExternal(move) {
        const grip = move.family;
        if (!move.innerLayer && !move.outerLayer) {
            if (grip === "Rv") return new _chunkEWRBHQFXJs.Move("x", move.amount);
            else if (grip === "Uv") return new _chunkEWRBHQFXJs.Move("y", move.amount);
            else if (grip === "Fv") return new _chunkEWRBHQFXJs.Move("z", move.amount);
            else if (grip === "Lv") return new _chunkEWRBHQFXJs.Move("x", -move.amount);
            else if (grip === "Dv") return new _chunkEWRBHQFXJs.Move("y", -move.amount);
            else if (grip === "Bv") return new _chunkEWRBHQFXJs.Move("z", -move.amount);
        }
        return move;
    }
};
// src/cubing/puzzle-geometry/notation-mapping/PyraminxNotationMapper.ts
var pyraminxFamilyMap = {
    U: "frl",
    L: "fld",
    R: "fdr",
    B: "dlr",
    u: "FRL",
    l: "FLD",
    r: "FDR",
    b: "DLR",
    Uv: "FRLv",
    Lv: "FLDv",
    Rv: "FDRv",
    Bv: "DLRv",
    D: "D",
    F: "F",
    BL: "L",
    BR: "R"
};
var tetraminxFamilyMap = {
    U: "FRL",
    L: "FLD",
    R: "FDR",
    B: "DLR",
    u: "frl",
    l: "fld",
    r: "fdr",
    b: "dlr",
    Uv: "FRLv",
    Lv: "FLDv",
    Rv: "FDRv",
    Bv: "DLRv",
    D: "D",
    F: "F",
    BL: "L",
    BR: "R",
    d: "d",
    f: "f",
    bl: "l",
    br: "r"
};
var pyraminxFamilyMapWCA = {
    U: "FRL",
    L: "FLD",
    R: "FDR",
    B: "DLR"
};
var pyraminxExternalQuantumY = new _chunkEWRBHQFXJs.QuantumMove("y");
var pyraminxInternalQuantumY = new _chunkEWRBHQFXJs.QuantumMove("Dv");
var PyraminxNotationMapper = class {
    constructor(child){
        this.child = child;
        this.wcaHack = false;
        this.map = pyraminxFamilyMap;
    }
    notationToInternal(move) {
        if (this.wcaHack && move.innerLayer === 2 && move.outerLayer === null) {
            const newFamilyWCA = pyraminxFamilyMapWCA[move.family];
            if (newFamilyWCA) return new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove(newFamilyWCA, move.innerLayer, move.outerLayer), move.amount);
        }
        const newFamily = this.map[move.family];
        if (newFamily) return new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove(newFamily, move.innerLayer, move.outerLayer), move.amount);
        else if (pyraminxExternalQuantumY.isIdentical(move.quantum)) return new _chunkEWRBHQFXJs.Move(pyraminxInternalQuantumY, -move.amount);
        else return null;
    }
    notationToExternal(move) {
        if (this.wcaHack && move.innerLayer === 2 && move.outerLayer === null) for (const [external, internal] of Object.entries(pyraminxFamilyMapWCA)){
            if (this.child.spinmatch(move.family, internal)) return new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove(external, move.innerLayer, move.outerLayer), move.amount);
        }
        for (const [external1, internal1] of Object.entries(this.map)){
            if (this.child.spinmatch(move.family, internal1)) return new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove(external1, move.innerLayer, move.outerLayer), move.amount);
        }
        if (pyraminxInternalQuantumY.isIdentical(move.quantum)) return new _chunkEWRBHQFXJs.Move(pyraminxExternalQuantumY, -move.amount);
        else return null;
    }
};
var TetraminxNotationMapper = class extends PyraminxNotationMapper {
    constructor(child){
        super(child);
        this.map = tetraminxFamilyMap;
    }
};
// src/cubing/puzzle-geometry/notation-mapping/SkewbNotationMapper.ts
var skewbFamilyMap = {
    U: "UBL",
    UL: "ULF",
    F: "UFR",
    UR: "URB",
    B: "DBL",
    D: "DFR",
    L: "DLF",
    R: "DRB",
    Uv: "UBLv",
    ULv: "ULFv",
    Fv: "UFRv",
    URv: "URBv",
    Bv: "DBLv",
    Dv: "DFRv",
    Lv: "DLFv",
    Rv: "DRBv"
};
var skewbExternalQuantumX = new _chunkEWRBHQFXJs.QuantumMove("x");
var skewbInternalQuantumX = new _chunkEWRBHQFXJs.QuantumMove("Rv");
var skewbInternalQuantumXPrime = new _chunkEWRBHQFXJs.QuantumMove("Lv");
var skewbExternalQuantumY = new _chunkEWRBHQFXJs.QuantumMove("y");
var skewbInternalQuantumY = new _chunkEWRBHQFXJs.QuantumMove("Uv");
var skewbInternalQuantumYPrime = new _chunkEWRBHQFXJs.QuantumMove("Dv");
var skewbExternalQuantumZ = new _chunkEWRBHQFXJs.QuantumMove("z");
var skewbInternalQuantumZ = new _chunkEWRBHQFXJs.QuantumMove("Fv");
var skewbInternalQuantumZPrime = new _chunkEWRBHQFXJs.QuantumMove("Bv");
var SkewbNotationMapper = class {
    constructor(child){
        this.child = child;
    }
    notationToInternal(move) {
        if (move.innerLayer || move.outerLayer) return null;
        const newFamily = skewbFamilyMap[move.family];
        if (newFamily) return new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove(newFamily, move.outerLayer, move.innerLayer), move.amount);
        if (skewbExternalQuantumX.isIdentical(move.quantum)) return new _chunkEWRBHQFXJs.Move(skewbInternalQuantumX, move.amount);
        if (skewbExternalQuantumY.isIdentical(move.quantum)) return new _chunkEWRBHQFXJs.Move(skewbInternalQuantumY, move.amount);
        if (skewbExternalQuantumZ.isIdentical(move.quantum)) return new _chunkEWRBHQFXJs.Move(skewbInternalQuantumZ, move.amount);
        return null;
    }
    notationToExternal(move) {
        for (const [external, internal] of Object.entries(skewbFamilyMap)){
            if (this.child.spinmatchv(move.family, internal)) return new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove(external, move.innerLayer, move.outerLayer), move.amount);
        }
        if (skewbInternalQuantumX.isIdentical(move.quantum)) return new _chunkEWRBHQFXJs.Move(skewbExternalQuantumX, move.amount);
        if (skewbInternalQuantumXPrime.isIdentical(move.quantum)) return new _chunkEWRBHQFXJs.Move(skewbExternalQuantumX, -move.amount);
        if (skewbInternalQuantumY.isIdentical(move.quantum)) return new _chunkEWRBHQFXJs.Move(skewbExternalQuantumY, move.amount);
        if (skewbInternalQuantumYPrime.isIdentical(move.quantum)) return new _chunkEWRBHQFXJs.Move(skewbExternalQuantumY, -move.amount);
        if (skewbInternalQuantumZ.isIdentical(move.quantum)) return new _chunkEWRBHQFXJs.Move(skewbExternalQuantumZ, move.amount);
        if (skewbInternalQuantumZPrime.isIdentical(move.quantum)) return new _chunkEWRBHQFXJs.Move(skewbExternalQuantumZ, -move.amount);
        return null;
    }
};
// src/cubing/puzzle-geometry/Options.ts
function parseOptions(argv) {
    let argp = 0;
    const options = {
    };
    while(argp < argv.length && argv[argp][0] === "-"){
        const option = argv[argp++];
        if (option === "--rotations") options.addRotations = true;
        else if (option === "--allmoves") options.allMoves = true;
        else if (option === "--outerblockmoves") options.outerBlockMoves = true;
        else if (option === "--vertexmoves") options.vertexMoves = true;
        else if (option === "--nocorners") options.includeCornerOrbits = false;
        else if (option === "--noedges") options.includeEdgeOrbits = false;
        else if (option === "--noorientation") options.fixedOrientation = true;
        else if (option === "--nocenters") options.includeCenterOrbits = false;
        else if (option === "--omit") {
            options.excludeOrbits = argv[argp].split(",");
            argp++;
        } else if (option === "--moves") {
            options.moveList = argv[argp].split(",");
            argp++;
        } else if (option === "--optimize") options.optimizeOrbits = true;
        else if (option === "--scramble") options.scrambleAmount = 100;
        else if (option === "--fixcorner") options.fixedPieceType = "v";
        else if (option === "--fixedge") options.fixedPieceType = "e";
        else if (option === "--fixcenter") options.fixedPieceType = "f";
        else if (option === "--orientcenters") options.orientCenters = true;
        else if (option === "--puzzleorientation") {
            options.puzzleOrientation = JSON.parse(argv[argp]);
            argp++;
        } else throw new Error("Bad option: " + option);
    }
    const puzzleDescription = parsePuzzleDescription(argv.slice(argp).join(" "));
    return {
        puzzleDescription,
        options
    };
}
var PuzzleGeometryFullOptions = class {
    constructor(options = {
    }){
        this.verbosity = 0;
        this.allMoves = false;
        this.vertexMoves = false;
        this.addRotations = false;
        this.moveList = null;
        this.fixedOrientation = false;
        this.fixedPieceType = null;
        this.orientCenters = false;
        this.includeCornerOrbits = true;
        this.includeCenterOrbits = true;
        this.includeEdgeOrbits = true;
        this.excludeOrbits = [];
        this.optimizeOrbits = false;
        this.grayCorners = false;
        this.grayCenters = false;
        this.grayEdges = false;
        this.puzzleOrientation = null;
        this.puzzleOrientations = null;
        this.scrambleAmount = 0;
        Object.assign(this, options);
    }
};
// src/cubing/puzzle-geometry/Perm.ts
var zeroCache = [];
var iotaCache = [];
function zeros(n) {
    if (!zeroCache[n]) {
        const c = Array(n);
        for(let i = 0; i < n; i++)c[i] = 0;
        zeroCache[n] = c;
    }
    return zeroCache[n];
}
function iota(n) {
    if (!iotaCache[n]) {
        const c = Array(n);
        for(let i = 0; i < n; i++)c[i] = i;
        iotaCache[n] = c;
    }
    return iotaCache[n];
}
function identity(n) {
    return new Perm(iota(n));
}
function factorial(a) {
    let r = 1;
    while(a > 1){
        r *= a;
        a--;
    }
    return r;
}
function gcd(a, b) {
    if (a > b) {
        const t = a;
        a = b;
        b = t;
    }
    while(a > 0){
        const m = b % a;
        b = a;
        a = m;
    }
    return b;
}
function lcm(a, b) {
    return a / gcd(a, b) * b;
}
var Perm = class {
    constructor(a){
        this.n = a.length;
        this.p = a;
    }
    toString() {
        return "Perm[" + this.p.join(" ") + "]";
    }
    mul(p2) {
        const c = Array(this.n);
        for(let i = 0; i < this.n; i++)c[i] = p2.p[this.p[i]];
        return new Perm(c);
    }
    rmul(p2) {
        const c = Array(this.n);
        for(let i = 0; i < this.n; i++)c[i] = this.p[p2.p[i]];
        return new Perm(c);
    }
    inv() {
        const c = Array(this.n);
        for(let i = 0; i < this.n; i++)c[this.p[i]] = i;
        return new Perm(c);
    }
    compareTo(p2) {
        for(let i = 0; i < this.n; i++){
            if (this.p[i] !== p2.p[i]) return this.p[i] - p2.p[i];
        }
        return 0;
    }
    toGap() {
        const cyc = new Array();
        const seen = new Array(this.n);
        for(let i = 0; i < this.p.length; i++){
            if (seen[i] || this.p[i] === i) continue;
            const incyc = new Array();
            for(let j = i; !seen[j]; j = this.p[j]){
                incyc.push(1 + j);
                seen[j] = true;
            }
            cyc.push("(" + incyc.join(",") + ")");
        }
        return cyc.join("");
    }
    order() {
        let r = 1;
        const seen = new Array(this.n);
        for(let i = 0; i < this.p.length; i++){
            if (seen[i] || this.p[i] === i) continue;
            let cs = 0;
            for(let j = i; !seen[j]; j = this.p[j]){
                cs++;
                seen[j] = true;
            }
            r = lcm(r, cs);
        }
        return r;
    }
};
// src/cubing/puzzle-geometry/PermOriSet.ts
var PGOrbitDef = class {
    constructor(size, mod){
        this.size = size;
        this.mod = mod;
    }
    reassemblySize() {
        return factorial(this.size) * Math.pow(this.mod, this.size);
    }
};
var lastGlobalDefinitionCounter = 0;
function externalName(mapper, moveString) {
    const mv = _chunkEWRBHQFXJs.Move.fromString(moveString);
    const mv2 = mapper.notationToExternal(mv);
    if (mv2 === null || mv === mv2) return moveString;
    return mv2.toString();
}
var PGOrbitsDef = class {
    constructor(orbitnames, orbitdefs, solved, movenames, moveops){
        this.orbitnames = orbitnames;
        this.orbitdefs = orbitdefs;
        this.solved = solved;
        this.movenames = movenames;
        this.moveops = moveops;
    }
    transformToKTransformationData(t) {
        const mp = {
        };
        for(let j = 0; j < this.orbitnames.length; j++)mp[this.orbitnames[j]] = t.orbits[j].toKPuzzle();
        return mp;
    }
    static transformToKTransformationData(orbitnames, t) {
        const mp = {
        };
        for(let j = 0; j < orbitnames.length; j++)mp[orbitnames[j]] = t.orbits[j].toKPuzzle();
        return mp;
    }
    toKsolve(name, mapper = new NullMapper()) {
        const result = [];
        result.push("Name " + name);
        result.push("");
        for(let i = 0; i < this.orbitnames.length; i++)result.push(`Set ${this.orbitnames[i]} ${this.orbitdefs[i].size} ${this.orbitdefs[i].mod}`);
        result.push("");
        result.push("Solved");
        for(let i1 = 0; i1 < this.orbitnames.length; i1++)this.solved.orbits[i1].appendDefinition(result, this.orbitnames[i1], false, false);
        result.push("End");
        for(let i2 = 0; i2 < this.movenames.length; i2++){
            result.push("");
            let name2 = externalName(mapper, this.movenames[i2]);
            let doinv = false;
            if (name2[name2.length - 1] === "'") {
                doinv = true;
                name2 = name2.substring(0, name2.length - 1);
            }
            result.push("Move " + name2);
            for(let j = 0; j < this.orbitnames.length; j++)if (doinv) this.moveops[i2].orbits[j].inv().appendDefinition(result, this.orbitnames[j], true);
            else this.moveops[i2].orbits[j].appendDefinition(result, this.orbitnames[j], true);
            result.push("End");
        }
        return result;
    }
    toKPuzzleDefinition(includemoves) {
        const orbits = {
        };
        const start = {
        };
        for(let i = 0; i < this.orbitnames.length; i++){
            orbits[this.orbitnames[i]] = {
                numPieces: this.orbitdefs[i].size,
                numOrientations: this.orbitdefs[i].mod
            };
            const startTransformation = this.solved.orbits[i].toKPuzzle();
            start[this.orbitnames[i]] = {
                pieces: startTransformation.permutation,
                orientation: startTransformation.orientation
            };
        }
        const moves = {
        };
        if (includemoves) for(let i3 = 0; i3 < this.movenames.length; i3++)moves[this.movenames[i3]] = this.transformToKTransformationData(this.moveops[i3]);
        return {
            name: `PG3D #${++lastGlobalDefinitionCounter}`,
            orbits,
            startStateData: start,
            moves
        };
    }
    optimize() {
        const neworbitnames = [];
        const neworbitdefs = [];
        const newsolved = [];
        const newmoveops = [];
        for(let j = 0; j < this.moveops.length; j++)newmoveops.push([]);
        for(let i = 0; i < this.orbitdefs.length; i++){
            const om = this.orbitdefs[i].mod;
            const n = this.orbitdefs[i].size;
            const du = new DisjointUnion(n);
            const changed = new Array(this.orbitdefs[i].size);
            for(let k = 0; k < n; k++)changed[k] = false;
            for(let j = 0; j < this.moveops.length; j++){
                for(let k = 0; k < n; k++)if (this.moveops[j].orbits[i].perm[k] !== k || this.moveops[j].orbits[i].ori[k] !== 0) {
                    changed[k] = true;
                    du.union(k, this.moveops[j].orbits[i].perm[k]);
                }
            }
            let keepori = true;
            if (om > 1) {
                keepori = false;
                const duo = new DisjointUnion(this.orbitdefs[i].size * om);
                for(let j = 0; j < this.moveops.length; j++)for(let k = 0; k < n; k++){
                    if (this.moveops[j].orbits[i].perm[k] !== k || this.moveops[j].orbits[i].ori[k] !== 0) for(let o = 0; o < om; o++)duo.union(k * om + o, this.moveops[j].orbits[i].perm[k] * om + (o + this.moveops[j].orbits[i].ori[k]) % om);
                }
                for(let j4 = 0; !keepori && j4 < n; j4++){
                    for(let o = 1; o < om; o++)if (duo.find(j4 * om) === duo.find(j4 * om + o)) keepori = true;
                }
                for(let j5 = 0; !keepori && j5 < n; j5++){
                    for(let k = 0; k < j5; k++)if (this.solved.orbits[i].perm[j5] === this.solved.orbits[i].perm[k]) keepori = true;
                }
            }
            let nontriv = -1;
            let multiple = false;
            for(let j2 = 0; j2 < this.orbitdefs[i].size; j2++)if (changed[j2]) {
                const h = du.find(j2);
                if (nontriv < 0) nontriv = h;
                else if (nontriv !== h) multiple = true;
            }
            for(let j3 = 0; j3 < this.orbitdefs[i].size; j3++){
                if (!changed[j3]) continue;
                const h = du.find(j3);
                if (h !== j3) continue;
                const no = [];
                const on = [];
                let nv = 0;
                for(let k = 0; k < this.orbitdefs[i].size; k++)if (du.find(k) === j3) {
                    no[nv] = k;
                    on[k] = nv;
                    nv++;
                }
                if (multiple) neworbitnames.push(`${this.orbitnames[i]}_p${j3}`);
                else neworbitnames.push(this.orbitnames[i]);
                if (keepori) {
                    neworbitdefs.push(new PGOrbitDef(nv, this.orbitdefs[i].mod));
                    newsolved.push(this.solved.orbits[i].remapVS(no, nv));
                    for(let k = 0; k < this.moveops.length; k++)newmoveops[k].push(this.moveops[k].orbits[i].remap(no, on, nv));
                } else {
                    neworbitdefs.push(new PGOrbitDef(nv, 1));
                    newsolved.push(this.solved.orbits[i].remapVS(no, nv).killOri());
                    for(let k = 0; k < this.moveops.length; k++)newmoveops[k].push(this.moveops[k].orbits[i].remap(no, on, nv).killOri());
                }
            }
        }
        return new PGOrbitsDef(neworbitnames, neworbitdefs, new VisibleState(newsolved), this.movenames, newmoveops.map((_)=>new PGTransform(_)
        ));
    }
    scramble(n) {
        this.solved = this.solved.mul(this.getScrambleTransformation(n));
    }
    getScrambleTransformation(n) {
        if (n < 100) n = 100;
        const pool = [];
        for(let i = 0; i < this.moveops.length; i++)pool[i] = this.moveops[i];
        for(let i4 = 0; i4 < pool.length; i4++){
            const j = Math.floor(Math.random() * pool.length);
            const t = pool[i4];
            pool[i4] = pool[j];
            pool[j] = t;
        }
        if (n < pool.length) n = pool.length;
        for(let i5 = 0; i5 < n; i5++){
            const ri = Math.floor(Math.random() * pool.length);
            const rj = Math.floor(Math.random() * pool.length);
            const rm = Math.floor(Math.random() * this.moveops.length);
            pool[ri] = pool[ri].mul(pool[rj]).mul(this.moveops[rm]);
            if (Math.random() < 0.1) pool[ri] = pool[ri].mul(this.moveops[rm]);
        }
        let s = pool[0];
        for(let i6 = 1; i6 < pool.length; i6++)s = s.mul(pool[i6]);
        return s;
    }
    reassemblySize() {
        let n = 1;
        for(let i = 0; i < this.orbitdefs.length; i++)n *= this.orbitdefs[i].reassemblySize();
        return n;
    }
};
var _PGOrbit = class {
    constructor(perm, ori, orimod){
        this.perm = perm;
        this.ori = ori;
        this.orimod = orimod;
    }
    static e(n, mod) {
        return new _PGOrbit(iota(n), zeros(n), mod);
    }
    mul(b) {
        const n = this.perm.length;
        const newPerm = new Array(n);
        if (this.orimod === 1) {
            for(let i = 0; i < n; i++)newPerm[i] = this.perm[b.perm[i]];
            return new _PGOrbit(newPerm, this.ori, this.orimod);
        } else {
            const newOri = new Array(n);
            for(let i = 0; i < n; i++){
                newPerm[i] = this.perm[b.perm[i]];
                newOri[i] = (this.ori[b.perm[i]] + b.ori[i]) % this.orimod;
            }
            return new _PGOrbit(newPerm, newOri, this.orimod);
        }
    }
    inv() {
        const n = this.perm.length;
        const newPerm = new Array(n);
        const newOri = new Array(n);
        for(let i = 0; i < n; i++){
            newPerm[this.perm[i]] = i;
            newOri[this.perm[i]] = (this.orimod - this.ori[i]) % this.orimod;
        }
        return new _PGOrbit(newPerm, newOri, this.orimod);
    }
    equal(b) {
        const n = this.perm.length;
        for(let i = 0; i < n; i++){
            if (this.perm[i] !== b.perm[i] || this.ori[i] !== b.ori[i]) return false;
        }
        return true;
    }
    killOri() {
        const n = this.perm.length;
        for(let i = 0; i < n; i++)this.ori[i] = 0;
        this.orimod = 1;
        return this;
    }
    toPerm() {
        const o = this.orimod;
        if (o === 1) return new Perm(this.perm);
        const n = this.perm.length;
        const newPerm = new Array(n * o);
        for(let i = 0; i < n; i++)for(let j = 0; j < o; j++)newPerm[i * o + j] = o * this.perm[i] + (this.ori[i] + j) % o;
        return new Perm(newPerm);
    }
    identicalPieces() {
        const done = [];
        const n = this.perm.length;
        const r = [];
        for(let i = 0; i < n; i++){
            const v = this.perm[i];
            if (done[v] === void 0) {
                const s = [
                    i
                ];
                done[v] = true;
                for(let j = i + 1; j < n; j++)if (this.perm[j] === v) s.push(j);
                r.push(s);
            }
        }
        return r;
    }
    order() {
        return this.toPerm().order();
    }
    isIdentity() {
        const n = this.perm.length;
        if (this.perm === iota(n) && this.ori === zeros(n)) return true;
        for(let i = 0; i < n; i++){
            if (this.perm[i] !== i || this.ori[i] !== 0) return false;
        }
        return true;
    }
    zeroOris() {
        const n = this.perm.length;
        if (this.ori === zeros(n)) return true;
        for(let i = 0; i < n; i++){
            if (this.ori[i] !== 0) return false;
        }
        return true;
    }
    remap(no, on, nv) {
        const newPerm = new Array(nv);
        const newOri = new Array(nv);
        for(let i = 0; i < nv; i++){
            newPerm[i] = on[this.perm[no[i]]];
            newOri[i] = this.ori[no[i]];
        }
        return new _PGOrbit(newPerm, newOri, this.orimod);
    }
    remapVS(no, nv) {
        const newPerm = new Array(nv);
        const newOri = new Array(nv);
        let nextNew = 0;
        const reassign = [];
        for(let i = 0; i < nv; i++){
            const ov = this.perm[no[i]];
            if (reassign[ov] === void 0) reassign[ov] = nextNew++;
            newPerm[i] = reassign[ov];
            newOri[i] = this.ori[no[i]];
        }
        return new _PGOrbit(newPerm, newOri, this.orimod);
    }
    appendDefinition(result, name, useVS, concise = true) {
        if (concise && this.isIdentity()) return;
        result.push(name);
        result.push(this.perm.map((_)=>_ + 1
        ).join(" "));
        if (!this.zeroOris()) {
            if (useVS) {
                const newori = new Array(this.ori.length);
                for(let i = 0; i < newori.length; i++)newori[this.perm[i]] = this.ori[i];
                result.push(newori.join(" "));
            } else result.push(this.ori.join(" "));
        }
    }
    toKPuzzle() {
        const n = this.perm.length;
        if (this.isIdentity()) {
            if (!_PGOrbit.kcache[n]) _PGOrbit.kcache[n] = {
                permutation: iota(n),
                orientation: zeros(n)
            };
            return _PGOrbit.kcache[n];
        } else return {
            permutation: this.perm,
            orientation: this.ori
        };
    }
};
var PGOrbit = _PGOrbit;
PGOrbit.kcache = [];
var PGTransformBase = class {
    constructor(orbits){
        this.orbits = orbits;
    }
    internalMul(b) {
        const newOrbits = [];
        for(let i = 0; i < this.orbits.length; i++)newOrbits.push(this.orbits[i].mul(b.orbits[i]));
        return newOrbits;
    }
    internalInv() {
        const newOrbits = [];
        for (const orbit of this.orbits)newOrbits.push(orbit.inv());
        return newOrbits;
    }
    equal(b) {
        for(let i = 0; i < this.orbits.length; i++){
            if (!this.orbits[i].equal(b.orbits[i])) return false;
        }
        return true;
    }
    killOri() {
        for (const orbit of this.orbits)orbit.killOri();
        return this;
    }
    toPerm() {
        const perms = new Array();
        let n = 0;
        for (const orbit of this.orbits){
            const p = orbit.toPerm();
            perms.push(p);
            n += p.n;
        }
        const newPerm = new Array(n);
        n = 0;
        for (const p of perms){
            for(let j = 0; j < p.n; j++)newPerm[n + j] = n + p.p[j];
            n += p.n;
        }
        return new Perm(newPerm);
    }
    identicalPieces() {
        const r = [];
        let n = 0;
        for (const orbit of this.orbits){
            const o = orbit.orimod;
            const s = orbit.identicalPieces();
            for(let j = 0; j < s.length; j++)r.push(s[j].map((_)=>_ * o + n
            ));
            n += o * orbit.perm.length;
        }
        return r;
    }
    order() {
        let r = 1;
        for (const orbit of this.orbits)r = lcm(r, orbit.order());
        return r;
    }
};
var PGTransform = class extends PGTransformBase {
    constructor(orbits){
        super(orbits);
    }
    mul(b) {
        return new PGTransform(this.internalMul(b));
    }
    mulScalar(n) {
        if (n === 0) return this.e();
        let t = this;
        if (n < 0) {
            t = t.inv();
            n = -n;
        }
        while((n & 1) === 0){
            t = t.mul(t);
            n >>= 1;
        }
        if (n === 1) return t;
        let s = t;
        let r = this.e();
        while(n > 0){
            if (n & 1) r = r.mul(s);
            if (n > 1) s = s.mul(s);
            n >>= 1;
        }
        return r;
    }
    inv() {
        return new PGTransform(this.internalInv());
    }
    e() {
        return new PGTransform(this.orbits.map((_)=>PGOrbit.e(_.perm.length, _.orimod)
        ));
    }
};
var VisibleState = class extends PGTransformBase {
    constructor(orbits){
        super(orbits);
    }
    mul(b) {
        return new VisibleState(this.internalMul(b));
    }
};
var DisjointUnion = class {
    constructor(n){
        this.n = n;
        this.heads = new Array(n);
        for(let i = 0; i < n; i++)this.heads[i] = i;
    }
    find(v) {
        let h = this.heads[v];
        if (this.heads[h] === h) return h;
        h = this.find(this.heads[h]);
        this.heads[v] = h;
        return h;
    }
    union(a, b) {
        const ah = this.find(a);
        const bh = this.find(b);
        if (ah < bh) this.heads[bh] = ah;
        else if (ah > bh) this.heads[ah] = bh;
    }
};
function showcanon(g, disp) {
    const n = g.moveops.length;
    if (n > 30) throw new Error("Canon info too big for bitmask");
    const orders = [];
    const commutes = [];
    for(let i = 0; i < n; i++){
        const permA = g.moveops[i];
        orders.push(permA.order());
        let bits = 0;
        for(let j = 0; j < n; j++){
            if (j === i) continue;
            const permB = g.moveops[j];
            if (permA.mul(permB).equal(permB.mul(permA))) bits |= 1 << j;
        }
        commutes.push(bits);
    }
    let curlev = {
    };
    curlev[0] = 1;
    for(let d = 0; d < 100; d++){
        let sum = 0;
        const nextlev = {
        };
        let uniq = 0;
        for(const sti in curlev){
            const st = +sti;
            const cnt = curlev[st];
            sum += cnt;
            uniq++;
            for(let mv = 0; mv < orders.length; mv++)if ((st >> mv & 1) === 0 && (st & commutes[mv] & (1 << mv) - 1) === 0) {
                const nst = st & commutes[mv] | 1 << mv;
                if (nextlev[nst] === void 0) nextlev[nst] = 0;
                nextlev[nst] += (orders[mv] - 1) * cnt;
            }
        }
        disp(`${d}: canonseq ${sum} states ${uniq}`);
        curlev = nextlev;
    }
}
// src/cubing/puzzle-geometry/PGPuzzles.ts
var PGPuzzles = {
    "2x2x2": "c f 0",
    "3x3x3": "c f 0.333333333333333",
    "4x4x4": "c f 0.5 f 0",
    "5x5x5": "c f 0.6 f 0.2",
    "6x6x6": "c f 0.666666666666667 f 0.333333333333333 f 0",
    "7x7x7": "c f 0.714285714285714 f 0.428571428571429 f 0.142857142857143",
    "8x8x8": "c f 0.75 f 0.5 f 0.25 f 0",
    "9x9x9": "c f 0.777777777777778 f 0.555555555555556 f 0.333333333333333 f 0.111111111111111",
    "10x10x10": "c f 0.8 f 0.6 f 0.4 f 0.2 f 0",
    "11x11x11": "c f 0.818181818181818 f 0.636363636363636 f 0.454545454545455 f 0.272727272727273 f 0.0909090909090909",
    "12x12x12": "c f 0.833333333333333 f 0.666666666666667 f 0.5 f 0.333333333333333 f 0.166666666666667 f 0",
    "13x13x13": "c f 0.846153846153846 f 0.692307692307692 f 0.538461538461538 f 0.384615384615385 f 0.230769230769231 f 0.0769230769230769",
    "20x20x20": "c f 0 f .1 f .2 f .3 f .4 f .5 f .6 f .7 f .8 f .9",
    "30x30x30": "c f 0 f .066667 f .133333 f .2 f .266667 f .333333 f .4 f .466667 f .533333 f .6 f .666667 f .733333 f .8 f .866667 f .933333",
    "40x40x40": "c f 0 f .05 f .1 f .15 f .2 f .25 f .3 f .35 f .4 f .45 f .5 f .55 f .6 f .65 f .7 f .75 f .8 f .85 f .9 f .95",
    "skewb": "c v 0",
    "master skewb": "c v 0.275",
    "professor skewb": "c v 0 v 0.38",
    "compy cube": "c v 0.915641442663986",
    "helicopter": "c e 0.707106781186547",
    "curvy copter": "c e 0.83",
    "dino": "c v 0.577350269189626",
    "little chop": "c e 0",
    "pyramorphix": "t e 0",
    "mastermorphix": "t e 0.346184634065199",
    "pyraminx": "t v 0.333333333333333 v 1.66666666666667",
    "tetraminx": "t v 0.333333333333333",
    "master pyraminx": "t v 0 v 1 v 2",
    "master tetraminx": "t v 0 v 1",
    "professor pyraminx": "t v -0.2 v 0.6 v 1.4 v 2.2",
    "professor tetraminx": "t v -0.2 v 0.6 v 1.4",
    "Jing pyraminx": "t f 0",
    "master pyramorphix": "t e 0.866025403784437",
    "megaminx": "d f 0.7",
    "gigaminx": "d f 0.64 f 0.82",
    "teraminx": "d f 0.64 f 0.76 f 0.88",
    "petaminx": "d f 0.64 f 0.73 f 0.82 f 0.91",
    "examinx": "d f 0.64 f 0.712 f 0.784 f 0.856 f 0.928",
    "zetaminx": "d f 0.64 f 0.7 f 0.76 f 0.82 f 0.88 f 0.94",
    "yottaminx": "d f 0.64 f 0.6914 f 0.7429 f 0.7943 f 0.8457 f 0.8971 f 0.9486",
    "pentultimate": "d f 0",
    "master pentultimate": "d f 0.1",
    "elite pentultimate": "d f 0 f 0.145905",
    "starminx": "d v 0.937962370425399",
    "starminx 2": "d f 0.23606797749979",
    "pyraminx crystal": "d f 0.447213595499989",
    "chopasaurus": "d v 0",
    "big chop": "d e 0",
    "skewb diamond": "o f 0",
    "FTO": "o f 0.333333333333333",
    "master FTO": "o f 0.5 f 0",
    "Christopher's jewel": "o v 0.577350269189626",
    "octastar": "o e 0",
    "Trajber's octahedron": "o v 0.433012701892219",
    "radio chop": "i f 0",
    "icosamate": "i v 0",
    "icosahedron 2": "i v 0.18759247376021",
    "icosahedron 3": "i v 0.18759247376021 e 0",
    "icosahedron static faces": "i v 0.84",
    "icosahedron moving faces": "i v 0.73",
    "Eitan's star": "i f 0.61803398874989",
    "2x2x2 + dino": "c f 0 v 0.577350269189626",
    "2x2x2 + little chop": "c f 0 e 0",
    "dino + little chop": "c v 0.577350269189626 e 0",
    "2x2x2 + dino + little chop": "c f 0 v 0.577350269189626 e 0",
    "megaminx + chopasaurus": "d f 0.61803398875 v 0",
    "starminx combo": "d f 0.23606797749979 v 0.937962370425399"
};
// src/cubing/puzzle-geometry/Quat.ts
var eps = 0.000000001;
function centermassface(face) {
    let s = new Quat(0, 0, 0, 0);
    for(let i = 0; i < face.length; i++)s = s.sum(face[i]);
    return s.smul(1 / face.length);
}
function solvethreeplanes(p1, p2, p3, planes) {
    const p = planes[p1].intersect3(planes[p2], planes[p3]);
    if (!p) return p;
    for(let i = 0; i < planes.length; i++)if (i !== p1 && i !== p2 && i !== p3) {
        const dt = planes[i].b * p.b + planes[i].c * p.c + planes[i].d * p.d;
        if (planes[i].a > 0 && dt > planes[i].a || planes[i].a < 0 && dt < planes[i].a) return false;
    }
    return p;
}
var Quat = class {
    constructor(a, b, c, d){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    mul(q) {
        return new Quat(this.a * q.a - this.b * q.b - this.c * q.c - this.d * q.d, this.a * q.b + this.b * q.a + this.c * q.d - this.d * q.c, this.a * q.c - this.b * q.d + this.c * q.a + this.d * q.b, this.a * q.d + this.b * q.c - this.c * q.b + this.d * q.a);
    }
    toString() {
        return `Q[${this.a},${this.b},${this.c},${this.d}]`;
    }
    dist(q) {
        return Math.hypot(this.a - q.a, this.b - q.b, this.c - q.c, this.d - q.d);
    }
    len() {
        return Math.hypot(this.a, this.b, this.c, this.d);
    }
    cross(q) {
        return new Quat(0, this.c * q.d - this.d * q.c, this.d * q.b - this.b * q.d, this.b * q.c - this.c * q.b);
    }
    dot(q) {
        return this.b * q.b + this.c * q.c + this.d * q.d;
    }
    normalize() {
        const d = Math.sqrt(this.dot(this));
        return new Quat(this.a / d, this.b / d, this.c / d, this.d / d);
    }
    makenormal() {
        return new Quat(0, this.b, this.c, this.d).normalize();
    }
    normalizeplane() {
        const d = Math.hypot(this.b, this.c, this.d);
        return new Quat(this.a / d, this.b / d, this.c / d, this.d / d);
    }
    smul(m) {
        return new Quat(this.a * m, this.b * m, this.c * m, this.d * m);
    }
    sum(q) {
        return new Quat(this.a + q.a, this.b + q.b, this.c + q.c, this.d + q.d);
    }
    sub(q) {
        return new Quat(this.a - q.a, this.b - q.b, this.c - q.c, this.d - q.d);
    }
    angle() {
        return 2 * Math.acos(this.a);
    }
    invrot() {
        return new Quat(this.a, -this.b, -this.c, -this.d);
    }
    det3x3(a00, a01, a02, a10, a11, a12, a20, a21, a22) {
        return a00 * (a11 * a22 - a12 * a21) + a01 * (a12 * a20 - a10 * a22) + a02 * (a10 * a21 - a11 * a20);
    }
    rotateplane(q) {
        const t = q.mul(new Quat(0, this.b, this.c, this.d)).mul(q.invrot());
        t.a = this.a;
        return t;
    }
    orthogonal() {
        const ab = Math.abs(this.b);
        const ac = Math.abs(this.c);
        const ad = Math.abs(this.d);
        if (ab < ac && ab < ad) return this.cross(new Quat(0, 1, 0, 0)).normalize();
        else if (ac < ab && ac < ad) return this.cross(new Quat(0, 0, 1, 0)).normalize();
        else return this.cross(new Quat(0, 0, 0, 1)).normalize();
    }
    pointrotation(b) {
        const a = this.normalize();
        b = b.normalize();
        if (a.sub(b).len() < eps) return new Quat(1, 0, 0, 0);
        let h = a.sum(b);
        if (h.len() < eps) h = h.orthogonal();
        else h = h.normalize();
        const r = a.cross(h);
        r.a = a.dot(h);
        return r;
    }
    unproject(b) {
        return this.sum(b.smul(-this.dot(b) / (this.len() * b.len())));
    }
    rotatepoint(q) {
        return q.mul(this).mul(q.invrot());
    }
    rotateface(face) {
        return face.map((_)=>_.rotatepoint(this)
        );
    }
    intersect3(p2, p3) {
        const det = this.det3x3(this.b, this.c, this.d, p2.b, p2.c, p2.d, p3.b, p3.c, p3.d);
        if (Math.abs(det) < eps) return false;
        return new Quat(0, this.det3x3(this.a, this.c, this.d, p2.a, p2.c, p2.d, p3.a, p3.c, p3.d) / det, this.det3x3(this.b, this.a, this.d, p2.b, p2.a, p2.d, p3.b, p3.a, p3.d) / det, this.det3x3(this.b, this.c, this.a, p2.b, p2.c, p2.a, p3.b, p3.c, p3.a) / det);
    }
    side(x) {
        if (x > eps) return 1;
        if (x < -eps) return -1;
        return 0;
    }
    cutface(face) {
        const d = this.a;
        let seen = 0;
        let r = null;
        for(let i = 0; i < face.length; i++)seen |= 1 << this.side(face[i].dot(this) - d) + 1;
        if ((seen & 5) === 5) {
            r = [];
            const inout = face.map((_)=>this.side(_.dot(this) - d)
            );
            for(let s = -1; s <= 1; s += 2){
                const nface = [];
                for(let k = 0; k < face.length; k++){
                    if (inout[k] === s || inout[k] === 0) nface.push(face[k]);
                    const kk = (k + 1) % face.length;
                    if (inout[k] + inout[kk] === 0 && inout[k] !== 0) {
                        const vk = face[k].dot(this) - d;
                        const vkk = face[kk].dot(this) - d;
                        const r2 = vk / (vk - vkk);
                        const pt = face[k].smul(1 - r2).sum(face[kk].smul(r2));
                        nface.push(pt);
                    }
                }
                r.push(nface);
            }
        }
        return r;
    }
    cutfaces(faces) {
        const nfaces = [];
        for(let j = 0; j < faces.length; j++){
            const face = faces[j];
            const t = this.cutface(face);
            if (t) {
                nfaces.push(t[0]);
                nfaces.push(t[1]);
            } else nfaces.push(face);
        }
        return nfaces;
    }
    faceside(face) {
        const d = this.a;
        for(let i = 0; i < face.length; i++){
            const s = this.side(face[i].dot(this) - d);
            if (s !== 0) return s;
        }
        throw new Error("Could not determine side of plane in faceside");
    }
    sameplane(p) {
        const a = this.normalize();
        const b = p.normalize();
        return a.dist(b) < eps || a.dist(b.smul(-1)) < eps;
    }
    makecut(r) {
        return new Quat(r, this.b, this.c, this.d);
    }
};
// src/cubing/puzzle-geometry/PlatonicGenerator.ts
var eps2 = 0.000000001;
function cube() {
    const s5 = Math.sqrt(0.5);
    return [
        new Quat(s5, s5, 0, 0),
        new Quat(s5, 0, s5, 0)
    ];
}
function tetrahedron() {
    return [
        new Quat(0.5, 0.5, 0.5, 0.5),
        new Quat(0.5, 0.5, 0.5, -0.5)
    ];
}
function dodecahedron() {
    const d36 = 2 * Math.PI / 10;
    let dx = 0.5 + 0.3 * Math.sqrt(5);
    let dy = 0.5 + 0.1 * Math.sqrt(5);
    const dd = Math.sqrt(dx * dx + dy * dy);
    dx /= dd;
    dy /= dd;
    return [
        new Quat(Math.cos(d36), dx * Math.sin(d36), dy * Math.sin(d36), 0),
        new Quat(0.5, 0.5, 0.5, 0.5)
    ];
}
function icosahedron() {
    let dx = 1 / 6 + Math.sqrt(5) / 6;
    let dy = 2 / 3 + Math.sqrt(5) / 3;
    const dd = Math.sqrt(dx * dx + dy * dy);
    dx /= dd;
    dy /= dd;
    const ang = 2 * Math.PI / 6;
    return [
        new Quat(Math.cos(ang), dx * Math.sin(ang), dy * Math.sin(ang), 0),
        new Quat(Math.cos(ang), -dx * Math.sin(ang), dy * Math.sin(ang), 0)
    ];
}
function octahedron() {
    const s5 = Math.sqrt(0.5);
    return [
        new Quat(0.5, 0.5, 0.5, 0.5),
        new Quat(s5, 0, 0, s5)
    ];
}
function closure(g) {
    const q = [
        new Quat(1, 0, 0, 0)
    ];
    for(let i = 0; i < q.length; i++)for(let j = 0; j < g.length; j++){
        const ns = g[j].mul(q[i]);
        const negns = ns.smul(-1);
        let wasseen = false;
        for(let k = 0; k < q.length; k++)if (ns.dist(q[k]) < eps2 || negns.dist(q[k]) < eps2) {
            wasseen = true;
            break;
        }
        if (!wasseen) q.push(ns);
    }
    return q;
}
function uniqueplanes(p, g) {
    const planes = [];
    const planerot = [];
    for(let i = 0; i < g.length; i++){
        const p2 = p.rotateplane(g[i]);
        let wasseen = false;
        for(let j = 0; j < planes.length; j++)if (p2.dist(planes[j]) < eps2) {
            wasseen = true;
            break;
        }
        if (!wasseen) {
            planes.push(p2);
            planerot.push(g[i]);
        }
    }
    return planerot;
}
function getface(planes) {
    const face = [];
    for(let i = 1; i < planes.length; i++)for(let j = i + 1; j < planes.length; j++){
        const p = solvethreeplanes(0, i, j, planes);
        if (p) {
            let wasseen = false;
            for(let k = 0; k < face.length; k++)if (p.dist(face[k]) < eps2) {
                wasseen = true;
                break;
            }
            if (!wasseen) face.push(p);
        }
    }
    for(;;){
        let changed = false;
        for(let i = 0; i < face.length; i++){
            const j = (i + 1) % face.length;
            if (planes[0].dot(face[i].cross(face[j])) < 0) {
                const t = face[i];
                face[i] = face[j];
                face[j] = t;
                changed = true;
            }
        }
        if (!changed) break;
    }
    return face;
}
// src/cubing/puzzle-geometry/SchreierSims.ts
var FactoredNumber = class {
    constructor(){
        this.mult = [];
    }
    multiply(n) {
        for(let f = 2; f * f <= n; f++)while(n % f === 0){
            if (this.mult[f] !== void 0) this.mult[f]++;
            else this.mult[f] = 1;
            n /= f;
        }
        if (n > 1) {
            if (this.mult[n] !== void 0) this.mult[n]++;
            else this.mult[n] = 1;
        }
    }
    toString() {
        let r = "";
        for(let i = 0; i < this.mult.length; i++)if (this.mult[i] !== void 0) {
            if (r !== "") r += "*";
            r += i;
            if (this.mult[i] > 1) r += `^${this.mult[i]}`;
        }
        return r;
    }
};
function schreierSims(g, disp) {
    const n = g[0].p.length;
    const e = identity(n);
    let sgs = [];
    let sgsi = [];
    let sgslen = [];
    let Tk = [];
    let Tklen = [];
    function resolve(p) {
        for(let i = p.p.length - 1; i >= 0; i--){
            const j = p.p[i];
            if (j !== i) {
                if (!sgs[i][j]) return false;
                p = p.mul(sgsi[i][j]);
            }
        }
        return true;
    }
    function knutha(k, p, len) {
        Tk[k].push(p);
        Tklen[k].push(len);
        for(let i = 0; i < sgs[k].length; i++)if (sgs[k][i]) knuthb(k, sgs[k][i].mul(p), len + sgslen[k][i]);
    }
    function knuthb(k, p, len) {
        const j = p.p[k];
        if (!sgs[k][j]) {
            sgs[k][j] = p;
            sgsi[k][j] = p.inv();
            sgslen[k][j] = len;
            for(let i = 0; i < Tk[k].length; i++)knuthb(k, p.mul(Tk[k][i]), len + Tklen[k][i]);
            return;
        }
        const p2 = p.mul(sgsi[k][j]);
        if (!resolve(p2)) knutha(k - 1, p2, len + sgslen[k][j]);
    }
    function getsgs() {
        sgs = [];
        sgsi = [];
        Tk = [];
        sgslen = [];
        Tklen = [];
        for(let i = 0; i < n; i++){
            sgs.push([]);
            sgsi.push([]);
            sgslen.push([]);
            Tk.push([]);
            Tklen.push([]);
            sgs[i][i] = e;
            sgsi[i][i] = e;
            sgslen[i][i] = 0;
        }
        let none = 0;
        let sz = 1;
        for(let i7 = 0; i7 < g.length; i7++){
            knutha(n - 1, g[i7], 1);
            sz = 1;
            let tks = 0;
            let sollen = 0;
            const avgs = [];
            const mults = new FactoredNumber();
            for(let j = 0; j < n; j++){
                let cnt = 0;
                let lensum = 0;
                for(let k = 0; k < n; k++)if (sgs[j][k]) {
                    cnt++;
                    lensum += sgslen[j][k];
                    if (j !== k) none++;
                }
                tks += Tk[j].length;
                sz *= cnt;
                if (cnt > 1) mults.multiply(cnt);
                const avg = lensum / cnt;
                avgs.push(avg);
                sollen += avg;
            }
            disp(`${i7}: sz ${sz} T ${tks} sol ${sollen} none ${none} mults ${mults.toString()}`);
        }
        return sz;
    }
    return getsgs();
}
// src/cubing/puzzle-geometry/PuzzleGeometry.ts
function tstart(s) {
    return s;
}
function tend(_) {
}
var Face = class {
    constructor(q){
        this.coords = new Array(q.length * 3);
        for(let i = 0; i < q.length; i++){
            this.coords[3 * i] = q[i].b;
            this.coords[3 * i + 1] = q[i].c;
            this.coords[3 * i + 2] = q[i].d;
        }
        this.length = q.length;
    }
    get(off) {
        return new Quat(0, this.coords[3 * off], this.coords[3 * off + 1], this.coords[3 * off + 2]);
    }
    centermass() {
        let sx = 0;
        let sy = 0;
        let sz = 0;
        for(let i = 0; i < this.length; i++){
            sx += this.coords[3 * i];
            sy += this.coords[3 * i + 1];
            sz += this.coords[3 * i + 2];
        }
        return new Quat(0, sx / this.length, sy / this.length, sz / this.length);
    }
    rotate(q) {
        const a = [];
        for(let i = 0; i < this.length; i++)a.push(this.get(i).rotatepoint(q));
        return new Face(a);
    }
    rotateforward() {
        const a = [];
        for(let i = 1; i < this.length; i++)a.push(this.get(i));
        a.push(this.get(0));
        return new Face(a);
    }
};
var FaceTree = class {
    constructor(face, left, right){
        this.face = face;
        this.left = left;
        this.right = right;
    }
    split(q) {
        const t = q.cutface(this.face);
        if (t !== null) {
            if (this.left === void 0) {
                this.left = new FaceTree(t[0]);
                this.right = new FaceTree(t[1]);
            } else {
                this.left = this.left?.split(q);
                this.right = this.right?.split(q);
            }
        }
        return this;
    }
    collect(arr, leftfirst) {
        if (this.left === void 0) arr.push(new Face(this.face));
        else if (leftfirst) {
            this.left?.collect(arr, false);
            this.right?.collect(arr, true);
        } else {
            this.right?.collect(arr, false);
            this.left?.collect(arr, true);
        }
        return arr;
    }
};
function expandfaces(rots, faces) {
    const nfaces = [];
    for (const rot of rots)for (const face of faces)nfaces.push(face.rotate(rot));
    return nfaces;
}
var eps3 = 0.000000001;
var copyright = "PuzzleGeometry 0.1 Copyright 2018 Tomas Rokicki.";
var permissivieMoveParsing = false;
function defaultnets() {
    return {
        4: [
            [
                "F",
                "D",
                "L",
                "R"
            ]
        ],
        6: [
            [
                "F",
                "D",
                "L",
                "U",
                "R"
            ],
            [
                "R",
                "F",
                "",
                "B",
                ""
            ]
        ],
        8: [
            [
                "F",
                "D",
                "L",
                "R"
            ],
            [
                "D",
                "F",
                "BR",
                ""
            ],
            [
                "BR",
                "D",
                "",
                "BB"
            ],
            [
                "BB",
                "BR",
                "U",
                "BL"
            ]
        ],
        12: [
            [
                "U",
                "F",
                "",
                "",
                "",
                ""
            ],
            [
                "F",
                "U",
                "R",
                "C",
                "A",
                "L"
            ],
            [
                "R",
                "F",
                "",
                "",
                "E",
                ""
            ],
            [
                "E",
                "R",
                "",
                "BF",
                "",
                ""
            ],
            [
                "BF",
                "E",
                "BR",
                "BL",
                "I",
                "D"
            ]
        ],
        20: [
            [
                "R",
                "C",
                "F",
                "E"
            ],
            [
                "F",
                "R",
                "L",
                "U"
            ],
            [
                "L",
                "F",
                "A",
                ""
            ],
            [
                "E",
                "R",
                "G",
                "I"
            ],
            [
                "I",
                "E",
                "S",
                "H"
            ],
            [
                "S",
                "I",
                "J",
                "B"
            ],
            [
                "B",
                "S",
                "K",
                "D"
            ],
            [
                "K",
                "B",
                "M",
                "O"
            ],
            [
                "O",
                "K",
                "P",
                "N"
            ],
            [
                "P",
                "O",
                "Q",
                ""
            ]
        ]
    };
}
function defaultcolors() {
    return {
        4: {
            F: "#00ff00",
            D: "#ffff00",
            L: "#ff0000",
            R: "#0000ff"
        },
        6: {
            U: "#ffffff",
            F: "#00ff00",
            R: "#ff0000",
            D: "#ffff00",
            B: "#0000ff",
            L: "#ff8000"
        },
        8: {
            U: "#ffffff",
            F: "#ff0000",
            R: "#00bb00",
            D: "#ffff00",
            BB: "#1122ff",
            L: "#9524c5",
            BL: "#ff8800",
            BR: "#aaaaaa"
        },
        12: {
            U: "#ffffff",
            F: "#006633",
            R: "#ff0000",
            C: "#ffffd0",
            A: "#3399ff",
            L: "#660099",
            E: "#ff66cc",
            BF: "#99ff00",
            BR: "#0000ff",
            BL: "#ffff00",
            I: "#ff6633",
            D: "#999999"
        },
        20: {
            R: "#db69f0",
            C: "#178fde",
            F: "#23238b",
            E: "#9cc726",
            L: "#2c212d",
            U: "#177fa7",
            A: "#e0de7f",
            G: "#2b57c0",
            I: "#41126b",
            S: "#4b8c28",
            H: "#7c098d",
            J: "#7fe7b4",
            B: "#85fb74",
            K: "#3f4bc3",
            D: "#0ff555",
            M: "#f1c2c8",
            O: "#58d340",
            P: "#c514f2",
            N: "#14494e",
            Q: "#8b1be1"
        }
    };
}
function defaultfaceorders() {
    return {
        4: [
            "F",
            "D",
            "L",
            "R"
        ],
        6: [
            "U",
            "D",
            "F",
            "B",
            "L",
            "R"
        ],
        8: [
            "F",
            "BB",
            "D",
            "U",
            "BR",
            "L",
            "R",
            "BL"
        ],
        12: [
            "L",
            "E",
            "F",
            "BF",
            "R",
            "I",
            "U",
            "D",
            "BR",
            "A",
            "BL",
            "C"
        ],
        20: [
            "L",
            "S",
            "E",
            "O",
            "F",
            "B",
            "I",
            "P",
            "R",
            "K",
            "U",
            "D",
            "J",
            "A",
            "Q",
            "H",
            "G",
            "N",
            "M",
            "C"
        ]
    };
}
function defaultOrientations() {
    return {
        4: [
            [
                "FLR",
                [
                    0,
                    1,
                    0
                ]
            ],
            [
                "F",
                [
                    0,
                    0,
                    1
                ]
            ]
        ],
        6: [
            [
                "U",
                [
                    0,
                    1,
                    0
                ]
            ],
            [
                "F",
                [
                    0,
                    0,
                    1
                ]
            ]
        ],
        8: [
            [
                "U",
                [
                    0,
                    1,
                    0
                ]
            ],
            [
                "F",
                [
                    0,
                    0,
                    1
                ]
            ]
        ],
        12: [
            [
                "U",
                [
                    0,
                    1,
                    0
                ]
            ],
            [
                "F",
                [
                    0,
                    0,
                    1
                ]
            ]
        ],
        20: [
            [
                "GUQMJ",
                [
                    0,
                    1,
                    0
                ]
            ],
            [
                "F",
                [
                    0,
                    0,
                    1
                ]
            ]
        ]
    };
}
function findelement(a, p) {
    for(let i = 0; i < a.length; i++){
        if (a[i][0].dist(p) < eps3) return i;
    }
    throw new Error("Element not found");
}
function getPG3DNamedPuzzles() {
    return PGPuzzles;
}
function getPuzzleDescriptionString(puzzleName) {
    return PGPuzzles[puzzleName];
}
function parsePuzzleDescription(s) {
    const a = s.split(/ /).filter(Boolean);
    if (a.length % 2 === 0) return null;
    const shape = a[0];
    if (shape !== "o" && shape !== "c" && shape !== "i" && shape !== "d" && shape !== "t") return null;
    const cuts = [];
    for(let i = 1; i < a.length; i += 2){
        if (a[i] !== "f" && a[i] !== "v" && a[i] !== "e") return null;
        cuts.push({
            cutType: a[i],
            distance: parseFloat(a[i + 1])
        });
    }
    return {
        shape,
        cuts
    };
}
function getPuzzleGeometryByDesc(desc, options = {
}) {
    const parsed = parsePuzzleDescription(desc);
    if (parsed === null) throw new Error("Could not parse the puzzle description");
    const pg = new PuzzleGeometry(parsed, Object.assign({
    }, {
        allMoves: true
    }, options));
    pg.allstickers();
    pg.genperms();
    return pg;
}
function getPuzzleGeometryByName(puzzleName, options) {
    return getPuzzleGeometryByDesc(PGPuzzles[puzzleName], options);
}
function getmovename(geo, bits, slices) {
    let inverted = false;
    if (slices - bits[1] < bits[0]) {
        geo = [
            geo[2],
            geo[3],
            geo[0],
            geo[1]
        ];
        bits = [
            slices - bits[1],
            slices - bits[0]
        ];
        inverted = true;
    }
    let movenameFamily = geo[0];
    let movenamePrefix = "";
    if (bits[0] === 0 && bits[1] === slices) movenameFamily = movenameFamily + "v";
    else if (bits[0] === bits[1]) {
        if (bits[1] > 0) movenamePrefix = String(bits[1] + 1);
    } else if (bits[0] === 0) {
        movenameFamily = movenameFamily.toLowerCase();
        if (bits[1] > 1) movenamePrefix = String(bits[1] + 1);
    } else throw `We only support slice and outer block moves right now. ${bits}`;
    return [
        movenamePrefix + movenameFamily,
        inverted
    ];
}
function splitByFaceNames(s, facenames) {
    const r = [];
    let at = 0;
    while(at < s.length){
        if (at > 0 && at < s.length && s[at] === "_") at++;
        let currentMatch = "";
        for (const facename of facenames)if (s.substr(at).startsWith(facename[1]) && facename[1].length > currentMatch.length) currentMatch = facename[1];
        if (currentMatch !== "") {
            r.push(currentMatch);
            at += currentMatch.length;
        } else throw new Error("Could not split " + s + " into face names.");
    }
    return r;
}
function toCoords(q, maxdist) {
    return [
        q.b / maxdist,
        -q.c / maxdist,
        q.d / maxdist
    ];
}
function toFaceCoords(q, maxdist) {
    const r = [];
    const n = q.length;
    for(let i = 0; i < n; i++){
        const pt = toCoords(q.get(n - i - 1), maxdist);
        r[3 * i] = pt[0];
        r[3 * i + 1] = pt[1];
        r[3 * i + 2] = pt[2];
    }
    return r;
}
var PuzzleGeometry = class {
    constructor(puzzleDescription, options){
        this.puzzleDescription = puzzleDescription;
        this.cmovesbyslice = [];
        this.duplicatedFaces = [];
        this.duplicatedCubies = [];
        this.fixedCubie = -1;
        this.net = [];
        this.colors = [];
        this.faceorder = [];
        this.faceprecedence = [];
        this.notationMapper = new NullMapper();
        this.addNotationMapper = "";
        this.setReidOrder = false;
        const t1 = tstart("genperms");
        this.options = new PuzzleGeometryFullOptions(options);
        if (this.options.verbosity > 0) console.log(this.header("# "));
        this.create(puzzleDescription);
        tend(t1);
    }
    create(puzzleDescription) {
        const { shape , cuts  } = puzzleDescription;
        this.moveplanes = [];
        this.moveplanes2 = [];
        this.faces = [];
        this.cubies = [];
        let g = null;
        switch(shape){
            case "c":
                g = cube();
                break;
            case "o":
                g = octahedron();
                break;
            case "i":
                g = icosahedron();
                break;
            case "t":
                g = tetrahedron();
                break;
            case "d":
                g = dodecahedron();
                break;
            default:
                throw new Error("Bad shape argument: " + shape);
        }
        this.rotations = closure(g);
        if (this.options.verbosity) console.log("# Rotations: " + this.rotations.length);
        const baseplane = g[0];
        this.baseplanerot = uniqueplanes(baseplane, this.rotations);
        const baseplanes = this.baseplanerot.map((_)=>baseplane.rotateplane(_)
        );
        this.baseplanes = baseplanes;
        this.baseFaceCount = baseplanes.length;
        const net = defaultnets()[baseplanes.length];
        this.net = net;
        this.colors = defaultcolors()[baseplanes.length];
        this.faceorder = defaultfaceorders()[baseplanes.length];
        if (this.options.verbosity > 0) console.log("# Base planes: " + baseplanes.length);
        const baseface = getface(baseplanes);
        const zero = new Quat(0, 0, 0, 0);
        if (this.options.verbosity > 0) console.log("# Face vertices: " + baseface.length);
        const facenormal = baseplanes[0].makenormal();
        const edgenormal = baseface[0].sum(baseface[1]).makenormal();
        const vertexnormal = baseface[0].makenormal();
        const boundary = new Quat(1, facenormal.b, facenormal.c, facenormal.d);
        if (this.options.verbosity > 0) console.log("# Boundary is " + boundary);
        const planerot = uniqueplanes(boundary, this.rotations);
        const planes = planerot.map((_)=>boundary.rotateplane(_)
        );
        const firstface = getface(planes);
        this.edgedistance = firstface[0].sum(firstface[1]).smul(0.5).dist(zero);
        this.vertexdistance = firstface[0].dist(zero);
        const cutplanes = [];
        const intersects = [];
        let sawface = false;
        let sawedge = false;
        let sawvertex = false;
        for (const cut of cuts){
            let normal = null;
            let distance = 0;
            switch(cut.cutType){
                case "f":
                    normal = facenormal;
                    distance = 1;
                    sawface = true;
                    break;
                case "v":
                    normal = vertexnormal;
                    distance = this.vertexdistance;
                    sawvertex = true;
                    break;
                case "e":
                    normal = edgenormal;
                    distance = this.edgedistance;
                    sawedge = true;
                    break;
                default:
                    throw new Error("Bad cut argument: " + cut.cutType);
            }
            cutplanes.push(normal.makecut(cut.distance));
            intersects.push(cut.distance < distance);
        }
        if (this.options.addRotations) {
            if (!sawface) cutplanes.push(facenormal.makecut(10));
            if (!sawvertex) cutplanes.push(vertexnormal.makecut(10));
            if (!sawedge) cutplanes.push(edgenormal.makecut(10));
        }
        this.basefaces = [];
        for (const baseplanerot of this.baseplanerot){
            const face = baseplanerot.rotateface(firstface);
            this.basefaces.push(new Face(face));
        }
        const facenames = [];
        const faceplanes = [];
        const vertexnames = [];
        const edgenames = [];
        const edgesperface = firstface.length;
        function searchaddelement(a, p, name) {
            for (const el of a)if (el[0].dist(p) < eps3) {
                el.push(name);
                return;
            }
            a.push([
                p,
                name
            ]);
        }
        for(let i = 0; i < this.baseplanerot.length; i++){
            const face = this.baseplanerot[i].rotateface(firstface);
            for(let j = 0; j < face.length; j++){
                const jj = (j + 1) % face.length;
                const midpoint = face[j].sum(face[jj]).smul(0.5);
                searchaddelement(edgenames, midpoint, i);
            }
        }
        const otherfaces = [];
        for(let i8 = 0; i8 < this.baseplanerot.length; i8++){
            const face = this.baseplanerot[i8].rotateface(firstface);
            const facelist = [];
            for(let j = 0; j < face.length; j++){
                const jj = (j + 1) % face.length;
                const midpoint = face[j].sum(face[jj]).smul(0.5);
                const el = edgenames[findelement(edgenames, midpoint)];
                if (i8 === el[1]) facelist.push(el[2]);
                else if (i8 === el[2]) facelist.push(el[1]);
                else throw new Error("Could not find edge");
            }
            otherfaces.push(facelist);
        }
        const facenametoindex = {
        };
        const faceindextoname = [];
        faceindextoname.push(net[0][0]);
        facenametoindex[net[0][0]] = 0;
        faceindextoname[otherfaces[0][0]] = net[0][1];
        facenametoindex[net[0][1]] = otherfaces[0][0];
        for (const neti of net){
            const f0 = neti[0];
            const fi = facenametoindex[f0];
            if (fi === void 0) throw new Error("Bad edge description; first edge not connected");
            let ii = -1;
            for(let j = 0; j < otherfaces[fi].length; j++){
                const fn2 = faceindextoname[otherfaces[fi][j]];
                if (fn2 !== void 0 && fn2 === neti[1]) {
                    ii = j;
                    break;
                }
            }
            if (ii < 0) throw new Error("First element of a net not known");
            for(let j6 = 2; j6 < neti.length; j6++){
                if (neti[j6] === "") continue;
                const of = otherfaces[fi][(j6 + ii - 1) % edgesperface];
                const fn2 = faceindextoname[of];
                if (fn2 !== void 0 && fn2 !== neti[j6]) throw new Error("Face mismatch in net");
                faceindextoname[of] = neti[j6];
                facenametoindex[neti[j6]] = of;
            }
        }
        for(let i9 = 0; i9 < faceindextoname.length; i9++){
            let found = false;
            for(let j = 0; j < this.faceorder.length; j++)if (faceindextoname[i9] === this.faceorder[j]) {
                this.faceprecedence[i9] = j;
                found = true;
                break;
            }
            if (!found) throw new Error("Could not find face " + faceindextoname[i9] + " in face order list " + this.faceorder);
        }
        for(let i10 = 0; i10 < this.baseplanerot.length; i10++){
            const face = this.baseplanerot[i10].rotateface(firstface);
            const faceplane = boundary.rotateplane(this.baseplanerot[i10]);
            const facename = faceindextoname[i10];
            facenames.push([
                face,
                facename
            ]);
            faceplanes.push([
                faceplane,
                facename
            ]);
        }
        for(let i11 = 0; i11 < this.baseplanerot.length; i11++){
            const face = this.baseplanerot[i11].rotateface(firstface);
            const facename = faceindextoname[i11];
            for(let j = 0; j < face.length; j++){
                const jj = (j + 1) % face.length;
                const midpoint = face[j].sum(face[jj]).smul(0.5);
                const jjj = (j + 2) % face.length;
                const midpoint2 = face[jj].sum(face[jjj]).smul(0.5);
                const e1 = findelement(edgenames, midpoint);
                const e2 = findelement(edgenames, midpoint2);
                searchaddelement(vertexnames, face[jj], [
                    facename,
                    e2,
                    e1
                ]);
            }
        }
        this.swizzler = new FaceNameSwizzler(facenames.map((_)=>_[1]
        ));
        const sep = this.swizzler.prefixFree ? "" : "_";
        for(let i12 = 0; i12 < edgenames.length; i12++){
            if (edgenames[i12].length !== 3) throw new Error("Bad length in edge names " + edgenames[i12]);
            let c1 = faceindextoname[edgenames[i12][1]];
            const c2 = faceindextoname[edgenames[i12][2]];
            if (this.faceprecedence[edgenames[i12][1]] < this.faceprecedence[edgenames[i12][2]]) c1 = c1 + sep + c2;
            else c1 = c2 + sep + c1;
            edgenames[i12] = [
                edgenames[i12][0],
                c1
            ];
        }
        for(let i13 = 0; i13 < vertexnames.length; i13++){
            if (vertexnames[i13].length < 4) throw new Error("Bad length in vertex names");
            let st = 1;
            for(let j = 2; j < vertexnames[i13].length; j++)if (this.faceprecedence[facenametoindex[vertexnames[i13][j][0]]] < this.faceprecedence[facenametoindex[vertexnames[i13][st][0]]]) st = j;
            let r = "";
            for(let j7 = 1; j7 < vertexnames[i13].length; j7++){
                if (j7 === 1) r = vertexnames[i13][st][0];
                else r = r + sep + vertexnames[i13][st][0];
                for(let k = 1; k < vertexnames[i13].length; k++)if (vertexnames[i13][st][1] === vertexnames[i13][k][2]) {
                    st = k;
                    break;
                }
            }
            vertexnames[i13] = [
                vertexnames[i13][0],
                r
            ];
        }
        if (this.options.verbosity > 1) {
            console.log("# Face precedence list: " + this.faceorder.join(" "));
            console.log("# Face names: " + facenames.map((_)=>_[1]
            ).join(" "));
            console.log("# Edge names: " + edgenames.map((_)=>_[1]
            ).join(" "));
            console.log("# Vertex names: " + vertexnames.map((_)=>_[1]
            ).join(" "));
        }
        const geonormals = [];
        for (const faceplane of faceplanes)geonormals.push([
            faceplane[0].makenormal(),
            faceplane[1],
            "f"
        ]);
        for (const edgename of edgenames)geonormals.push([
            edgename[0].makenormal(),
            edgename[1],
            "e"
        ]);
        for (const vertexname of vertexnames)geonormals.push([
            vertexname[0].makenormal(),
            vertexname[1],
            "v"
        ]);
        this.facenames = facenames;
        this.faceplanes = faceplanes;
        this.edgenames = edgenames;
        this.vertexnames = vertexnames;
        this.geonormals = geonormals;
        const geonormalnames = geonormals.map((_)=>_[1]
        );
        this.swizzler.setGripNames(geonormalnames);
        if (this.options.verbosity > 0) console.log("# Distances: face 1 edge " + this.edgedistance + " vertex " + this.vertexdistance);
        for(let c = 0; c < cutplanes.length; c++)for (const rotation of this.rotations){
            const q = cutplanes[c].rotateplane(rotation);
            let wasseen = false;
            for (const moveplane of this.moveplanes)if (q.sameplane(moveplane)) {
                wasseen = true;
                break;
            }
            if (!wasseen) {
                this.moveplanes.push(q);
                if (intersects[c]) this.moveplanes2.push(q);
            }
        }
        let ft = new FaceTree(firstface);
        const tar = this.moveplanes2.slice();
        let rval = 31;
        for(let i14 = 0; i14 < tar.length; i14++){
            const j = i14 + Math.floor((tar.length - i14) * (rval / 65536));
            ft = ft.split(tar[j]);
            tar[j] = tar[i14];
            rval = (rval * 1657 + 101) % 65536;
        }
        const faces = ft.collect([], true);
        this.faces = faces;
        if (this.options.verbosity > 0) console.log("# Faces is now " + faces.length);
        this.stickersperface = faces.length;
        const simplerot = [];
        const cm = centermassface(firstface);
        for (const rotation1 of this.rotations){
            const f = rotation1.rotateface(firstface);
            if (cm.dist(centermassface(f)) < eps3) simplerot.push(rotation1);
        }
        const finished = new Array(faces.length);
        const sortme = [];
        for(let i15 = 0; i15 < faces.length; i15++){
            const cm2 = faces[i15].centermass();
            sortme.push([
                cm.dist(cm2),
                cm2,
                i15
            ]);
        }
        sortme.sort((a, b)=>a[0] - b[0]
        );
        for(let ii = 0; ii < faces.length; ii++){
            const i = sortme[ii][2];
            if (!finished[i]) {
                finished[i] = true;
                for (const rot of simplerot){
                    const f2 = faces[i].rotate(rot);
                    const cm2 = f2.centermass();
                    for(let kk = ii + 1; kk < faces.length; kk++){
                        if (sortme[kk][0] - sortme[ii][0] > eps3) break;
                        const k = sortme[kk][2];
                        if (!finished[k] && cm2.dist(sortme[kk][1]) < eps3) {
                            finished[k] = true;
                            faces[k] = f2;
                            break;
                        }
                    }
                }
            }
        }
        this.shortedge = 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
        for (const face of faces)for(let j = 0; j < face.length; j++){
            const k = (j + 1) % face.length;
            const t = face.get(j).dist(face.get(k));
            if (t < this.shortedge) this.shortedge = t;
        }
        if (this.options.verbosity > 0) console.log("# Short edge is " + this.shortedge);
        if (shape === "c" && sawface && !sawedge && !sawvertex) {
            this.addNotationMapper = "NxNxNCubeMapper";
            this.setReidOrder = true;
        }
        if (shape === "c" && sawvertex && !sawface && !sawedge) this.addNotationMapper = "SkewbMapper";
        if (shape === "t" && (sawvertex || sawface) && !sawedge) this.addNotationMapper = "PyraminxOrTetraminxMapper";
        if (shape === "o" && sawface) {
            this.notationMapper = new FaceRenamingMapper(this.swizzler, new FaceNameSwizzler([
                "F",
                "D",
                "L",
                "BL",
                "R",
                "U",
                "BR",
                "B"
            ]));
            if (!sawedge && !sawvertex) this.addNotationMapper = "FTOMapper";
        }
        if (shape === "d" && sawface) {
            this.addNotationMapper = "MegaminxMapper";
            this.notationMapper = new FaceRenamingMapper(this.swizzler, new FaceNameSwizzler([
                "U",
                "F",
                "L",
                "BL",
                "BR",
                "R",
                "FR",
                "FL",
                "DL",
                "B",
                "DR",
                "D"
            ]));
        }
    }
    keyface(face) {
        return this.keyface2(face.centermass());
    }
    keyface2(cm) {
        let s = "";
        const sfcc = String.fromCharCode;
        for (const moveplaneset of this.moveplanesets)if (moveplaneset.length > 0) {
            const dv = cm.dot(moveplaneset[0]);
            let t = 0;
            let b = 1;
            while(b * 2 <= moveplaneset.length)b *= 2;
            for(; b > 0; b >>= 1)if (t + b <= moveplaneset.length && dv > moveplaneset[t + b - 1].a) t += b;
            if (t < 47) s = s + sfcc(33 + t);
            else if (t < 2256) s = s + sfcc(80 + Math.floor(t / 47) - 1) + sfcc(33 + t % 47);
            else if (t < 106079) s = s + sfcc(80 + Math.floor((t - 47) / 2209 - 1)) + sfcc(80 + Math.floor((t - 47) / 47) % 47) + sfcc(33 + t % 47);
            else throw Error("Too many slices for cubie encoding");
        }
        return s;
    }
    keyface3(face) {
        const cm = face.centermass();
        const r = [];
        for (const moveplaneset of this.moveplanesets)if (moveplaneset.length > 0) {
            const dv = cm.dot(moveplaneset[0]);
            let t = 0;
            let b = 1;
            while(b * 2 <= moveplaneset.length)b *= 2;
            for(; b > 0; b >>= 1)if (t + b <= moveplaneset.length && dv > moveplaneset[t + b - 1].a) t += b;
            r.push(t);
        }
        return r;
    }
    findface(cm) {
        const key = this.keyface2(cm);
        const arr = this.facelisthash.get(key);
        if (arr.length === 1) return arr[0];
        for(let i = 0; i + 1 < arr.length; i++){
            const face2 = this.facelisthash.get(key)[i];
            if (Math.abs(cm.dist(this.facecentermass[face2])) < eps3) return face2;
        }
        return arr[arr.length - 1];
    }
    project2d(facen, edgen, targvec) {
        const face = this.facenames[facen][0];
        const edgen2 = (edgen + 1) % face.length;
        const plane = this.baseplanes[facen];
        let x0 = face[edgen2].sub(face[edgen]);
        const olen = x0.len();
        x0 = x0.normalize();
        const y0 = x0.cross(plane).normalize();
        let delta = targvec[1].sub(targvec[0]);
        const len = delta.len() / olen;
        delta = delta.normalize();
        const cosr = delta.b;
        const sinr = delta.c;
        const x1 = x0.smul(cosr).sub(y0.smul(sinr)).smul(len);
        const y1 = y0.smul(cosr).sum(x0.smul(sinr)).smul(len);
        const off = new Quat(0, targvec[0].b - x1.dot(face[edgen]), targvec[0].c - y1.dot(face[edgen]), 0);
        return [
            x1,
            y1,
            off
        ];
    }
    allstickers() {
        const t1 = tstart("allstickers");
        this.faces = expandfaces(this.baseplanerot, this.faces);
        if (this.options.verbosity > 0) console.log("# Total stickers is now " + this.faces.length);
        this.facecentermass = new Array(this.faces.length);
        for(let i = 0; i < this.faces.length; i++)this.facecentermass[i] = this.faces[i].centermass();
        const moveplanesets = [];
        const moveplanenormals = [];
        for (const q of this.moveplanes){
            const qnormal = q.makenormal();
            let wasseen = false;
            for (const moveplanenormal of moveplanenormals)if (qnormal.sameplane(moveplanenormal.makenormal())) wasseen = true;
            if (!wasseen) {
                moveplanenormals.push(qnormal);
                moveplanesets.push([]);
            }
        }
        for (const q1 of this.moveplanes2){
            const qnormal = q1.makenormal();
            for(let j = 0; j < moveplanenormals.length; j++)if (qnormal.sameplane(moveplanenormals[j])) {
                moveplanesets[j].push(q1);
                break;
            }
        }
        for(let i16 = 0; i16 < moveplanesets.length; i16++){
            const q = moveplanesets[i16].map((_)=>_.normalizeplane()
            );
            const goodnormal = moveplanenormals[i16];
            for(let j = 0; j < q.length; j++)if (q[j].makenormal().dist(goodnormal) > eps3) q[j] = q[j].smul(-1);
            q.sort((a, b)=>a.a - b.a
            );
            moveplanesets[i16] = q;
        }
        this.moveplanesets = moveplanesets;
        this.moveplanenormals = moveplanenormals;
        const sizes = moveplanesets.map((_)=>_.length
        );
        if (this.options.verbosity > 0) console.log("# Move plane sets: " + sizes);
        const moverotations = [];
        for(let i17 = 0; i17 < moveplanesets.length; i17++)moverotations.push([]);
        for (const q2 of this.rotations){
            if (Math.abs(Math.abs(q2.a) - 1) < eps3) continue;
            const qnormal = q2.makenormal();
            for(let j = 0; j < moveplanesets.length; j++)if (qnormal.sameplane(moveplanenormals[j])) {
                moverotations[j].push(q2);
                break;
            }
        }
        this.moverotations = moverotations;
        for(let i18 = 0; i18 < moverotations.length; i18++){
            const r = moverotations[i18];
            const goodnormal = r[0].makenormal();
            for(let j = 0; j < r.length; j++)if (goodnormal.dist(r[j].makenormal()) > eps3) r[j] = r[j].smul(-1);
            r.sort((a, b)=>a.angle() - b.angle()
            );
            if (moverotations[i18][0].dot(moveplanenormals[i18]) < 0) r.reverse();
        }
        const sizes2 = moverotations.map((_)=>1 + _.length
        );
        this.movesetorders = sizes2;
        const movesetgeos = [];
        let gtype = "?";
        for(let i19 = 0; i19 < moveplanesets.length; i19++){
            const p0 = moveplanenormals[i19];
            let neg = null;
            let pos = null;
            for (const geonormal of this.geonormals){
                const d = p0.dot(geonormal[0]);
                if (Math.abs(d - 1) < eps3) {
                    pos = [
                        geonormal[1],
                        geonormal[2]
                    ];
                    gtype = geonormal[2];
                } else if (Math.abs(d + 1) < eps3) {
                    neg = [
                        geonormal[1],
                        geonormal[2]
                    ];
                    gtype = geonormal[2];
                }
            }
            if (pos === null || neg === null) throw new Error("Saw positive or negative sides as null");
            movesetgeos.push([
                pos[0],
                pos[1],
                neg[0],
                neg[1],
                1 + moveplanesets[i19].length
            ]);
            if (this.addNotationMapper === "NxNxNCubeMapper" && gtype === "f") {
                this.notationMapper = new NxNxNCubeMapper(1 + moveplanesets[i19].length);
                this.addNotationMapper = "";
            }
            if (this.addNotationMapper === "SkewbMapper" && moveplanesets[0].length === 1) {
                this.notationMapper = new SkewbNotationMapper(this.swizzler);
                this.addNotationMapper = "";
            }
            if (this.addNotationMapper === "PyraminxOrTetraminxMapper") {
                if (moveplanesets[0].length === 2 && moveplanesets[0][0].a === 0.333333333333333 && moveplanesets[0][1].a === 1.66666666666667) {
                    this.notationMapper = new PyraminxNotationMapper(this.swizzler);
                    this.addNotationMapper = "";
                } else {
                    this.notationMapper = new TetraminxNotationMapper(this.swizzler);
                    this.addNotationMapper = "";
                }
            }
            if (this.addNotationMapper === "MegaminxMapper" && gtype === "f") {
                if (1 + moveplanesets[i19].length === 3) this.notationMapper = new MegaminxScramblingNotationMapper(this.notationMapper);
                this.addNotationMapper = "";
            }
            if (this.addNotationMapper === "FTOMapper" && gtype === "f") {
                if (1 + moveplanesets[i19].length === 3) this.notationMapper = new FTONotationMapper(this.notationMapper, this.swizzler);
                this.addNotationMapper = "";
            }
        }
        this.movesetgeos = movesetgeos;
        const facelisthash = new Map();
        const faces = this.faces;
        for(let i20 = 0; i20 < faces.length; i20++){
            const face = faces[i20];
            const s = this.keyface(face);
            if (!facelisthash.get(s)) facelisthash.set(s, [
                i20
            ]);
            else {
                const arr = facelisthash.get(s);
                arr.push(i20);
                if (arr.length === this.baseFaceCount) {
                    if (this.options.verbosity > 0) console.log("# Splitting core.");
                    for(let suff = 0; suff < arr.length; suff++){
                        const s2 = s + " " + suff;
                        facelisthash.set(s2, [
                            arr[suff]
                        ]);
                    }
                }
            }
        }
        this.facelisthash = facelisthash;
        if (this.options.verbosity > 0) console.log("# Cubies: " + facelisthash.size);
        const cubies = [];
        const facetocubie = [];
        const facetoord = [];
        for (const facelist of facelisthash.values()){
            if (facelist.length === this.baseFaceCount) continue;
            if (facelist.length > 1) {
                const cm = facelist.map((_)=>faces[_].centermass()
                );
                const cmall = centermassface(cm);
                for(let looplimit = 0; facelist.length > 2; looplimit++){
                    let changed = false;
                    for(let i = 0; i < facelist.length; i++){
                        const j = (i + 1) % facelist.length;
                        if (cmall.dot(cm[i].cross(cm[j])) < 0) {
                            const u = cm[i];
                            cm[i] = cm[j];
                            cm[j] = u;
                            const v = facelist[i];
                            facelist[i] = facelist[j];
                            facelist[j] = v;
                            changed = true;
                        }
                    }
                    if (!changed) break;
                    if (looplimit > 1000) throw new Error("Bad epsilon math; too close to border");
                }
                let mini = 0;
                let minf = facelist[mini];
                for(let i = 1; i < facelist.length; i++){
                    const temp = facelist[i];
                    if (this.faceprecedence[this.getfaceindex(temp)] < this.faceprecedence[this.getfaceindex(minf)]) {
                        mini = i;
                        minf = temp;
                    }
                }
                if (mini !== 0) {
                    const ofacelist = facelist.slice();
                    for(let i = 0; i < facelist.length; i++)facelist[i] = ofacelist[(mini + i) % facelist.length];
                }
            }
            for(let j = 0; j < facelist.length; j++){
                const k = facelist[j];
                facetocubie[k] = cubies.length;
                facetoord[k] = j;
            }
            cubies.push(facelist);
        }
        this.cubies = cubies;
        this.facetocubie = facetocubie;
        this.facetoord = facetoord;
        const typenames = [
            "?",
            "CENTERS",
            "EDGES",
            "CORNERS",
            "C4RNER",
            "C5RNER"
        ];
        const cubiesetnames = [];
        const cubietypecounts = [
            0,
            0,
            0,
            0,
            0,
            0
        ];
        const orbitoris = [];
        const seen = [];
        let cubiesetnum = 0;
        const cubiesetnums = [];
        const cubieordnums = [];
        const cubieords = [];
        const cubievaluemap = [];
        const getcolorkey = (cubienum)=>{
            return cubies[cubienum].map((_)=>this.getfaceindex(_)
            ).join(" ");
        };
        const cubiesetcubies = [];
        for(let i21 = 0; i21 < cubies.length; i21++){
            if (seen[i21]) continue;
            const cubie = cubies[i21];
            if (cubie.length === 0) continue;
            const cubiekeymap = {
            };
            let cubievalueid = 0;
            cubieords.push(0);
            cubiesetcubies.push([]);
            const facecnt = cubie.length;
            const typectr = cubietypecounts[facecnt]++;
            let typename = typenames[facecnt];
            if (typename === void 0 || facecnt === this.baseFaceCount) typename = "CORE";
            typename = typename + (typectr === 0 ? "" : typectr + 1);
            cubiesetnames[cubiesetnum] = typename;
            orbitoris[cubiesetnum] = facecnt;
            const queue = [
                i21
            ];
            let qg = 0;
            seen[i21] = true;
            while(qg < queue.length){
                const cind = queue[qg++];
                const cubiecolorkey = getcolorkey(cind);
                if (cubie.length > 1 || cubiekeymap[cubiecolorkey] === void 0) cubiekeymap[cubiecolorkey] = cubievalueid++;
                cubievaluemap[cind] = cubiekeymap[cubiecolorkey];
                cubiesetnums[cind] = cubiesetnum;
                cubiesetcubies[cubiesetnum].push(cind);
                cubieordnums[cind] = cubieords[cubiesetnum]++;
                if (queue.length < this.rotations.length) {
                    const cm = this.facecentermass[cubies[cind][0]];
                    for (const moverotation of moverotations){
                        const tq = this.facetocubie[this.findface(cm.rotatepoint(moverotation[0]))];
                        if (!seen[tq]) {
                            queue.push(tq);
                            seen[tq] = true;
                        }
                    }
                }
            }
            cubiesetnum++;
        }
        if (this.setReidOrder && 4 <= this.stickersperface && this.stickersperface <= 9) {
            const reidorder = [
                [
                    "UF",
                    "UR",
                    "UB",
                    "UL",
                    "DF",
                    "DR",
                    "DB",
                    "DL",
                    "FR",
                    "FL",
                    "BR",
                    "BL"
                ],
                [
                    "UFR",
                    "URB",
                    "UBL",
                    "ULF",
                    "DRF",
                    "DFL",
                    "DLB",
                    "DBR"
                ],
                [
                    "U",
                    "L",
                    "F",
                    "R",
                    "B",
                    "D"
                ]
            ];
            const reidmap = {
            };
            for (const cubie of reidorder)for(let j = 0; j < cubie.length; j++){
                let mask = 0;
                for(let k = 0; k < cubie[j].length; k++)mask |= 1 << cubie[j].charCodeAt(k) - 65;
                reidmap[mask] = j;
            }
            for (const cubieset of cubiesetcubies)for (const cubienum of cubieset){
                let mask = 0;
                for (const cubie of cubies[cubienum])mask |= 1 << this.facenames[this.getfaceindex(cubie)][1].charCodeAt(0) - 65;
                cubieordnums[cubienum] = reidmap[mask];
            }
        }
        this.cubiesetnums = cubiesetnums;
        this.cubieordnums = cubieordnums;
        this.cubiesetnames = cubiesetnames;
        this.cubieords = cubieords;
        this.orbitoris = orbitoris;
        this.cubievaluemap = cubievaluemap;
        this.cubiesetcubies = cubiesetcubies;
        if (this.options.fixedPieceType !== null) {
            for(let i = 0; i < cubies.length; i++)if (this.options.fixedPieceType === "v" && cubies[i].length > 2 || this.options.fixedPieceType === "e" && cubies[i].length === 2 || this.options.fixedPieceType === "f" && cubies[i].length === 1) {
                this.fixedCubie = i;
                break;
            }
            if (this.fixedCubie < 0) throw new Error("Could not find a cubie of type " + this.options.fixedPieceType + " to fix.");
        }
        if (this.options.verbosity > 0) console.log("# Cubie orbit sizes " + cubieords);
        tend(t1);
    }
    unswizzle(mv) {
        const newmv = this.notationMapper.notationToInternal(mv);
        if (newmv === null) return "";
        return this.swizzler.unswizzle(newmv.family);
    }
    stringToBlockMove(mv) {
        const re = RegExp("^(([0-9]+)-)?([0-9]+)?([^0-9]+)([0-9]+'?)?$");
        const p = mv.match(re);
        if (p === null) throw new Error("Bad move passed " + mv);
        const grip = p[4];
        let loslice = void 0;
        let hislice = void 0;
        if (p[2] !== void 0) {
            if (p[3] === void 0) throw new Error("Missing second number in range");
            loslice = parseInt(p[2], 10);
        }
        if (p[3] !== void 0) hislice = parseInt(p[3], 10);
        let amountstr = "1";
        let amount = 1;
        if (p[5] !== void 0) {
            amountstr = p[5];
            if (amountstr[0] === "'") amountstr = "-" + amountstr.substring(1);
            amount = parseInt(amountstr, 10);
        }
        return new _chunkEWRBHQFXJs.Move(new _chunkEWRBHQFXJs.QuantumMove(grip, hislice, loslice), amount);
    }
    parseMove(move) {
        const bm = this.notationMapper.notationToInternal(move);
        if (bm === null) throw new Error("Bad move " + move.family);
        move = bm;
        let grip = move.family;
        let fullrotation = false;
        if (grip.endsWith("v") && grip[0] <= "Z") {
            if (move.innerLayer !== void 0 || move.outerLayer !== void 0) throw new Error("Cannot use a prefix with full cube rotations");
            grip = grip.slice(0, -1);
            fullrotation = true;
        }
        if (grip.endsWith("w") && grip[0] <= "Z") grip = grip.slice(0, -1).toLowerCase();
        let geo;
        let msi = -1;
        const geoname = this.swizzler.unswizzle(grip);
        let firstgrip = false;
        for(let i = 0; i < this.movesetgeos.length; i++){
            const g = this.movesetgeos[i];
            if (geoname === g[0]) {
                firstgrip = true;
                geo = g;
                msi = i;
            }
            if (geoname === g[2]) {
                firstgrip = false;
                geo = g;
                msi = i;
            }
        }
        let loslice = 1;
        let hislice = 1;
        if (grip.toUpperCase() !== grip) hislice = 2;
        if (geo === void 0) throw new Error("Bad grip in move " + move.family);
        if (move.outerLayer !== void 0) loslice = move.outerLayer;
        if (move.innerLayer !== void 0) {
            if (move.outerLayer === void 0) {
                hislice = move.innerLayer;
                if (grip <= "Z") loslice = hislice;
                else loslice = 1;
            } else hislice = move.innerLayer;
        }
        loslice--;
        hislice--;
        if (fullrotation) {
            loslice = 0;
            hislice = this.moveplanesets[msi].length;
        }
        if (loslice < 0 || loslice > this.moveplanesets[msi].length || hislice < 0 || hislice > this.moveplanesets[msi].length) throw new Error("Bad slice spec " + loslice + " " + hislice + " vs " + this.moveplanesets[msi].length);
        if (!permissivieMoveParsing && loslice === 0 && hislice === this.moveplanesets[msi].length && !fullrotation) throw new Error("! full puzzle rotations must be specified with v suffix.");
        return [
            void 0,
            msi,
            loslice,
            hislice,
            firstgrip,
            move.amount
        ];
    }
    parsemove(mv) {
        const r = this.parseMove(this.stringToBlockMove(mv));
        r[0] = mv;
        return r;
    }
    genperms() {
        const t1 = tstart("genperms");
        if (this.cmovesbyslice.length > 0) return;
        const cmovesbyslice = [];
        if (this.options.orientCenters) {
            for(let k = 0; k < this.cubies.length; k++)if (this.cubies[k].length === 1) {
                const kk = this.cubies[k][0];
                const i = this.getfaceindex(kk);
                if (this.basefaces[i].centermass().dist(this.facecentermass[kk]) < eps3) {
                    const o = this.basefaces[i].length;
                    for(let m = 1; m < o; m++)this.cubies[k].push(this.cubies[k][m - 1]);
                    this.duplicatedFaces[kk] = o;
                    this.duplicatedCubies[k] = o;
                    this.orbitoris[this.cubiesetnums[k]] = o;
                }
            }
        }
        for(let k = 0; k < this.moveplanesets.length; k++){
            const moveplaneset = this.moveplanesets[k];
            const slicenum = [];
            const slicecnts = [
                moveplaneset.length + 1,
                0
            ];
            let bhi = 1;
            while(bhi * 2 <= moveplaneset.length)bhi *= 2;
            for(let i = 0; i < this.faces.length; i++){
                let t = 0;
                if (moveplaneset.length > 0) {
                    const dv = this.facecentermass[i].dot(moveplaneset[0]);
                    for(let b = bhi; b > 0; b >>= 1)if (t + b <= moveplaneset.length && dv > moveplaneset[t + b - 1].a) t += b;
                    t = moveplaneset.length - t;
                }
                slicenum.push(t);
                while(slicecnts.length <= t)slicecnts.push(0);
                slicecnts[t]++;
            }
            const axiscmoves = new Array(slicecnts.length);
            for(let sc = 0; sc < slicecnts.length; sc++)axiscmoves[sc] = [];
            const cubiedone = [];
            for(let i22 = 0; i22 < this.faces.length; i22++){
                if (slicenum[i22] < 0) continue;
                const b = [
                    this.facetocubie[i22],
                    this.facetoord[i22]
                ];
                let cm = this.facecentermass[i22];
                const ocm = cm;
                let fi2 = i22;
                const sc = slicenum[fi2];
                for(;;){
                    slicenum[fi2] = -1;
                    const cm2 = cm.rotatepoint(this.moverotations[k][0]);
                    if (cm2.dist(ocm) < eps3) break;
                    fi2 = this.findface(cm2);
                    b.push(this.facetocubie[fi2], this.facetoord[fi2]);
                    cm = cm2;
                }
                if (b.length > 2 && this.options.orientCenters && (this.cubies[b[0]].length === 1 || this.duplicatedCubies[b[0]] > 1)) {
                    if (this.facecentermass[i22].dist(this.basefaces[this.getfaceindex(i22)].centermass()) < eps3) {
                        let face1 = this.faces[this.cubies[b[0]][0]];
                        for(let ii = 0; ii < b.length; ii += 2){
                            const face0 = this.faces[this.cubies[b[ii]][0]];
                            let o = -1;
                            for(let jj = 0; jj < face1.length; jj++)if (face0.get(jj).dist(face1.get(0)) < eps3) {
                                o = jj;
                                break;
                            }
                            if (o < 0) throw new Error("Couldn't find rotation of center faces; ignoring for now.");
                            else {
                                b[ii + 1] = o;
                                face1 = face1.rotate(this.moverotations[k][0]);
                            }
                        }
                    }
                }
                if (b.length === 2 && this.options.orientCenters) {
                    for(let ii = 1; ii < this.movesetorders[k]; ii++)if (sc === 0) b.push(b[0], ii);
                    else b.push(b[0], (this.movesetorders[k] - ii) % this.movesetorders[k]);
                }
                if (b.length > 2 && !cubiedone[b[0]]) {
                    if (b.length !== 2 * this.movesetorders[k]) throw new Error("Bad length in perm gen");
                    for (const v of b)axiscmoves[sc].push(v);
                }
                for(let j = 0; j < b.length; j += 2)cubiedone[b[j]] = true;
            }
            for(let kk = 0; kk < axiscmoves.length; kk++)axiscmoves[kk] = axiscmoves[kk].slice();
            cmovesbyslice.push(axiscmoves);
        }
        this.cmovesbyslice = cmovesbyslice;
        if (this.options.moveList) {
            const parsedmovelist = [];
            for (const moveString of this.options.moveList)parsedmovelist.push(this.parsemove(moveString));
            this.parsedmovelist = parsedmovelist;
        }
        this.facelisthash.clear();
        this.facecentermass = [];
        tend(t1);
    }
    getboundarygeometry() {
        return {
            baseplanes: this.baseplanes,
            facenames: this.facenames,
            faceplanes: this.faceplanes,
            vertexnames: this.vertexnames,
            edgenames: this.edgenames,
            geonormals: this.geonormals
        };
    }
    getmovesets(k) {
        const slices = this.moveplanesets[k].length;
        let r = [];
        if (this.parsedmovelist !== void 0) for (const parsedmove of this.parsedmovelist){
            if (parsedmove[1] !== k) continue;
            if (parsedmove[4]) r.push([
                parsedmove[2],
                parsedmove[3]
            ]);
            else r.push([
                slices - parsedmove[3],
                slices - parsedmove[2]
            ]);
            r.push(parsedmove[5]);
        }
        else if (this.options.vertexMoves && !this.options.allMoves) {
            const msg = this.movesetgeos[k];
            if (msg[1] !== msg[3]) {
                for(let i = 0; i < slices; i++)if (msg[1] !== "v") {
                    if (this.options.outerBlockMoves) r.push([
                        i + 1,
                        slices
                    ]);
                    else r.push([
                        i + 1
                    ]);
                    r.push(1);
                } else {
                    if (this.options.outerBlockMoves) r.push([
                        0,
                        i
                    ]);
                    else r.push([
                        i,
                        i
                    ]);
                    r.push(1);
                }
            }
        } else for(let i = 0; i <= slices; i++){
            if (!this.options.allMoves && i + i === slices) continue;
            if (this.options.outerBlockMoves) {
                if (i + i > slices) r.push([
                    i,
                    slices
                ]);
                else r.push([
                    0,
                    i
                ]);
            } else r.push([
                i,
                i
            ]);
            r.push(1);
        }
        if (this.fixedCubie >= 0) {
            const dep = this.keyface3(this.faces[this.cubies[this.fixedCubie][0]])[k];
            const newr = [];
            for(let i = 0; i < r.length; i += 2){
                let o = r[i];
                if (dep >= o[0] && dep <= o[1]) {
                    if (o[0] === 0) o = [
                        o[1] + 1,
                        slices
                    ];
                    else if (slices === o[1]) o = [
                        0,
                        o[0] - 1
                    ];
                    else throw Error("fixed cubie option would disconnect move");
                }
                let found = false;
                for(let j = 0; j < newr.length; j += 2)if (newr[j][0] === o[0] && newr[j][1] === o[1] && newr[j + 1] === r[i + 1]) {
                    found = true;
                    break;
                }
                if (!found) {
                    newr.push(o);
                    newr.push(r[i + 1]);
                }
            }
            r = newr;
        }
        return r;
    }
    graybyori(cubie) {
        let ori = this.cubies[cubie].length;
        if (this.duplicatedCubies[cubie]) ori = 1;
        return ori === 1 && (this.options.grayCenters || !this.options.includeCenterOrbits) || ori === 2 && (this.options.grayEdges || !this.options.includeEdgeOrbits) || ori > 2 && (this.options.grayCorners || !this.options.includeCornerOrbits);
    }
    skipbyori(cubie) {
        let ori = this.cubies[cubie].length;
        if (this.duplicatedCubies[cubie]) ori = 1;
        return ori === 1 && !this.options.includeCenterOrbits || ori === 2 && !this.options.includeEdgeOrbits || ori > 2 && !this.options.includeCornerOrbits;
    }
    skipcubie(fi) {
        return this.skipbyori(fi);
    }
    header(comment) {
        return comment + copyright + "\n" + comment + "\n";
    }
    writegap() {
        const os = this.getOrbitsDef(false);
        const r = [];
        const mvs = [];
        for(let i = 0; i < os.moveops.length; i++){
            let movename = "M_" + externalName(this.notationMapper, os.movenames[i]);
            let doinv = false;
            if (movename[movename.length - 1] === "'") {
                movename = movename.substring(0, movename.length - 1);
                doinv = true;
            }
            mvs.push(movename);
            if (doinv) r.push(movename + ":=" + os.moveops[i].toPerm().inv().toGap() + ";");
            else r.push(movename + ":=" + os.moveops[i].toPerm().toGap() + ";");
        }
        r.push("Gen:=[");
        r.push(mvs.join(","));
        r.push("];");
        const ip = os.solved.identicalPieces();
        r.push("ip:=[" + ip.map((_)=>"[" + _.map((__)=>__ + 1
            ).join(",") + "]"
        ).join(",") + "];");
        r.push("# Size(Group(Gen));");
        r.push("# Size(Stabilizer(Group(Gen), ip, OnTuplesSets));");
        r.push("");
        return this.header("# ") + r.join("\n");
    }
    writeksolve(name = "PuzzleGeometryPuzzle") {
        const od = this.getOrbitsDef(false);
        return this.header("# ") + od.toKsolve(name, this.notationMapper).join("\n");
    }
    getKPuzzleDefinition(fortwisty = true, includemoves = true) {
        const od = this.getOrbitsDef(fortwisty, includemoves);
        const internalDefinition = od.toKPuzzleDefinition(includemoves);
        internalDefinition.experimentalPuzzleDescription = this.puzzleDescription;
        if (!internalDefinition) throw new Error("Missing definition!");
        return internalDefinition;
    }
    getMoveFromBits(moverange, amount, inverted, axiscmoves, setmoves, movesetorder) {
        const moveorbits = [];
        const perms = [];
        const oris = [];
        for (const len of this.cubieords){
            perms.push(iota(len));
            oris.push(zeros(len));
        }
        for(let m = moverange[0]; m <= moverange[1]; m++){
            const slicecmoves = axiscmoves[m];
            for(let j = 0; j < slicecmoves.length; j += 2 * movesetorder){
                const mperm = slicecmoves.slice(j, j + 2 * movesetorder);
                const setnum = this.cubiesetnums[mperm[0]];
                for(let ii = 0; ii < mperm.length; ii += 2)mperm[ii] = this.cubieordnums[mperm[ii]];
                let inc = 2;
                let oinc = 3;
                if (inverted) {
                    inc = mperm.length - 2;
                    oinc = mperm.length - 1;
                }
                if (perms[setnum] === iota(this.cubieords[setnum])) {
                    perms[setnum] = perms[setnum].slice();
                    if (this.orbitoris[setnum] > 1 && !this.options.fixedOrientation) oris[setnum] = oris[setnum].slice();
                }
                for(let ii1 = 0; ii1 < mperm.length; ii1 += 2){
                    perms[setnum][mperm[(ii1 + inc) % mperm.length]] = mperm[ii1];
                    if (this.orbitoris[setnum] > 1 && !this.options.fixedOrientation) oris[setnum][mperm[ii1]] = (mperm[(ii1 + oinc) % mperm.length] - mperm[(ii1 + 1) % mperm.length] + 2 * this.orbitoris[setnum]) % this.orbitoris[setnum];
                }
            }
        }
        let lastId = new PGOrbit(iota(24), zeros(24), 1);
        for(let ii = 0; ii < this.cubiesetnames.length; ii++){
            if (setmoves && !setmoves[ii]) continue;
            if (this.orbitoris[ii] === 1 || this.options.fixedOrientation) {
                if (perms[ii] === iota(lastId.perm.length)) {
                    if (perms[ii] !== lastId.perm) lastId = new PGOrbit(perms[ii], oris[ii], 1);
                    moveorbits.push(lastId);
                } else moveorbits.push(new PGOrbit(perms[ii], oris[ii], 1));
            } else {
                const no = new Array(oris[ii].length);
                for(let jj = 0; jj < perms[ii].length; jj++)no[jj] = oris[ii][perms[ii][jj]];
                moveorbits.push(new PGOrbit(perms[ii], no, this.orbitoris[ii]));
            }
        }
        let mv = new PGTransform(moveorbits);
        if (amount !== 1) mv = mv.mulScalar(amount);
        return mv;
    }
    omitSet(name) {
        for (const excludedSet of this.options.excludeOrbits){
            if (excludedSet === name) return true;
        }
        return false;
    }
    diffmvsets(a, b, slices, neg) {
        for(let i = 0; i < a.length; i += 2){
            let found = false;
            for(let j = 0; !found && j < b.length; j += 2){
                if (neg) {
                    if (a[i][0] + b[j][1] === slices && a[i][1] + b[j][0] === slices && a[i + 1] === b[j + 1]) found = true;
                } else if (a[i][0] === b[j][0] && a[i][1] === b[j][1] && a[i + 1] === b[j + 1]) found = true;
            }
            if (!found) return true;
        }
        return false;
    }
    getOrbitsDef(fortwisty, includemoves = true) {
        const setmoves = [];
        if (fortwisty) for(let i = 0; i < this.cubiesetnames.length; i++)setmoves.push(1);
        const setnames = [];
        const setdefs = [];
        const mps = [];
        const addrot = [];
        for(let k = 0; k < this.moveplanesets.length; k++){
            const moveset = this.getmovesets(k);
            mps.push(moveset);
            if (this.options.addRotations) addrot.push(1);
            else addrot.push(0);
        }
        if (this.options.moveList && this.options.addRotations) {
            for(let i = 0; i < this.moverotations.length; i++)addrot[i] = 0;
            for(let k = 0; k < this.moveplanesets.length; k++)for(let i25 = 0; i25 < this.moverotations.length; i25++){
                let nn = this.moveplanenormals[k];
                for(let ii = 1; ii * 2 <= this.movesetorders[i25]; ii++){
                    nn = nn.rotatepoint(this.moverotations[i25][0]);
                    if (addrot[i25] & ii) continue;
                    let found = -1;
                    let neg = false;
                    for(let j = 0; j < this.moveplanenormals.length; j++){
                        if (nn.dist(this.moveplanenormals[j]) < eps3) {
                            found = j;
                            break;
                        } else if (nn.dist(this.moveplanenormals[j].smul(-1)) < eps3) {
                            found = j;
                            neg = true;
                            break;
                        }
                    }
                    if (found < 0) throw new Error("Could not find rotation");
                    const cmp = mps[found];
                    if (cmp.length !== mps[k].length || this.moveplanesets[k].length !== this.moveplanesets[found].length || this.diffmvsets(cmp, mps[k], this.moveplanesets[found].length, neg)) addrot[i25] |= ii;
                }
            }
            for(let i26 = 0; i26 < this.moverotations.length; i26++){
                if (addrot[i26] === 0) addrot[i26] = 1;
                else if (addrot[i26] === 1) {
                    if (this.movesetorders[i26] > 3) addrot[i26] = 2;
                    else addrot[i26] = 0;
                } else if (addrot[i26] === 3) addrot[i26] = 0;
                else throw new Error("Impossible addrot val");
            }
        }
        for(let k1 = 0; k1 < this.moveplanesets.length; k1++)if (addrot[k1] !== 0) {
            mps[k1].push([
                0,
                this.moveplanesets[k1].length
            ]);
            mps[k1].push(addrot[k1]);
        }
        for(let k2 = 0; k2 < this.moveplanesets.length; k2++){
            const moveset = mps[k2];
            const movesetorder = this.movesetorders[k2];
            for(let i = 0; i < moveset.length; i += 2)for(let j = 0; j < i; j += 2){
                if (moveset[i] === moveset[j] && moveset[i + 1] === moveset[j + 1]) throw new Error("Redundant moves in moveset.");
            }
            const allbits = [];
            for(let i27 = 0; i27 < moveset.length; i27 += 2)for(let j8 = moveset[i27][0]; j8 <= moveset[i27][1]; j8++)allbits[j8] = 1;
            const axiscmoves = this.cmovesbyslice[k2];
            for(let i28 = 0; i28 < axiscmoves.length; i28++){
                if (allbits[i28] !== 1) continue;
                const slicecmoves = axiscmoves[i28];
                for(let j = 0; j < slicecmoves.length; j += 2 * movesetorder){
                    if (this.skipcubie(slicecmoves[j])) continue;
                    const ind = this.cubiesetnums[slicecmoves[j]];
                    setmoves[ind] = 1;
                }
            }
        }
        for(let i23 = 0; i23 < this.cubiesetnames.length; i23++){
            if (!setmoves[i23]) continue;
            if (this.omitSet(this.cubiesetnames[i23])) {
                setmoves[i23] = 0;
                continue;
            }
            setnames.push(this.cubiesetnames[i23]);
            setdefs.push(new PGOrbitDef(this.cubieords[i23], this.options.fixedOrientation ? 1 : this.orbitoris[i23]));
        }
        const solved = [];
        for(let i24 = 0; i24 < this.cubiesetnames.length; i24++){
            if (!setmoves[i24]) continue;
            if (this.omitSet(this.cubiesetnames[i24])) continue;
            const p = [];
            const o = [];
            for(let j = 0; j < this.cubieords[i24]; j++){
                if (fortwisty) p.push(j);
                else {
                    const cubie = this.cubiesetcubies[i24][j];
                    p.push(this.cubievaluemap[cubie]);
                }
                o.push(0);
            }
            solved.push(new PGOrbit(p, o, this.options.fixedOrientation ? 1 : this.orbitoris[i24]));
        }
        const movenames = [];
        const moves = [];
        if (includemoves) for(let k3 = 0; k3 < this.moveplanesets.length; k3++){
            const moveplaneset = this.moveplanesets[k3];
            const slices = moveplaneset.length;
            const moveset = mps[k3];
            const movesetgeo = this.movesetgeos[k3];
            for(let i = 0; i < moveset.length; i += 2){
                const movebits = moveset[i];
                const mna = getmovename(movesetgeo, movebits, slices);
                const movename = mna[0];
                const inverted = mna[1];
                if (moveset[i + 1] === 1) movenames.push(movename);
                else movenames.push(movename + moveset[i + 1]);
                const mv = this.getMoveFromBits(movebits, moveset[i + 1], inverted, this.cmovesbyslice[k3], setmoves, this.movesetorders[k3]);
                moves.push(mv);
            }
        }
        let r = new PGOrbitsDef(setnames, setdefs, new VisibleState(solved), movenames, moves);
        if (this.options.optimizeOrbits) r = r.optimize();
        if (this.options.scrambleAmount !== 0) r.scramble(this.options.scrambleAmount);
        return r;
    }
    getScramble(n = 0) {
        const od = this.getOrbitsDef(false);
        return od.transformToKTransformationData(od.getScrambleTransformation(n));
    }
    getMovesAsPerms() {
        return this.getOrbitsDef(false).moveops.map((_)=>_.toPerm()
        );
    }
    showcanon(disp) {
        showcanon(this.getOrbitsDef(false), disp);
    }
    getsolved() {
        const r = [];
        for(let i = 0; i < this.baseFaceCount; i++)for(let j = 0; j < this.stickersperface; j++)r.push(i);
        return new Perm(r);
    }
    getOrientationRotation(desiredRotation) {
        const [feature1name, [x1, y1, z1]] = desiredRotation[0];
        const direction1 = new Quat(0, x1, -y1, z1);
        const [feature2name, [x2, y2, z2]] = desiredRotation[1];
        const direction2 = new Quat(0, x2, -y2, z2);
        let feature1 = null;
        let feature2 = null;
        const feature1geoname = this.swizzler.unswizzle(feature1name);
        const feature2geoname = this.swizzler.unswizzle(feature2name);
        for (const gn of this.geonormals){
            if (feature1geoname === gn[1]) feature1 = gn[0];
            if (feature2geoname === gn[1]) feature2 = gn[0];
        }
        if (!feature1) throw new Error("Could not find feature " + feature1name);
        if (!feature2) throw new Error("Could not find feature " + feature2name);
        const r1 = feature1.pointrotation(direction1);
        const feature2rot = feature2.rotatepoint(r1);
        const r2 = feature2rot.unproject(direction1).pointrotation(direction2.unproject(direction1));
        return r2.mul(r1);
    }
    getInitial3DRotation() {
        const basefacecount = this.baseFaceCount;
        let orientationDescription = null;
        if (this.options.puzzleOrientation) orientationDescription = this.options.puzzleOrientation;
        else if (this.options.puzzleOrientations) orientationDescription = this.options.puzzleOrientations[basefacecount];
        if (!orientationDescription) orientationDescription = defaultOrientations()[basefacecount];
        if (!orientationDescription) throw new Error("No default orientation?");
        return this.getOrientationRotation(orientationDescription);
    }
    generate2dmapping(w = 800, h = 500, trim = 10, threed = false, twodshrink = 0.92) {
        w -= 2 * trim;
        h -= 2 * trim;
        function extendedges(a, n) {
            let dx = a[1][0] - a[0][0];
            let dy = a[1][1] - a[0][1];
            const ang = 2 * Math.PI / n;
            const cosa = Math.cos(ang);
            const sina = Math.sin(ang);
            for(let i = 2; i < n; i++){
                const ndx = dx * cosa + dy * sina;
                dy = dy * cosa - dx * sina;
                dx = ndx;
                a.push([
                    a[i - 1][0] + dx,
                    a[i - 1][1] + dy
                ]);
            }
        }
        this.genperms();
        const boundarygeo = this.getboundarygeometry();
        const face0 = boundarygeo.facenames[0][0];
        const polyn = face0.length;
        const net = this.net;
        if (net === null) throw new Error("No net?");
        const edges = {
        };
        let minx = 0;
        let miny = 0;
        let maxx = 1;
        let maxy = 0;
        edges[net[0][0]] = [
            [
                1,
                0
            ],
            [
                0,
                0
            ]
        ];
        extendedges(edges[net[0][0]], polyn);
        for (const neti of net){
            const f0 = neti[0];
            if (!edges[f0]) throw new Error("Bad edge description; first edge not connected.");
            for(let j = 1; j < neti.length; j++){
                const f1 = neti[j];
                if (f1 === "" || edges[f1]) continue;
                edges[f1] = [
                    edges[f0][j % polyn],
                    edges[f0][(j + polyn - 1) % polyn]
                ];
                extendedges(edges[f1], polyn);
            }
        }
        for(const f in edges){
            const es = edges[f];
            for (const esi of es){
                minx = Math.min(minx, esi[0]);
                maxx = Math.max(maxx, esi[0]);
                miny = Math.min(miny, esi[1]);
                maxy = Math.max(maxy, esi[1]);
            }
        }
        const sc = Math.min(w / (maxx - minx), h / (maxy - miny));
        const xoff = 0.5 * (w - sc * (maxx + minx));
        const yoff = 0.5 * (h - sc * (maxy + miny));
        const geos = {
        };
        const bg = this.getboundarygeometry();
        const edges2 = {
        };
        const initv = [
            [
                sc + xoff,
                yoff
            ],
            [
                xoff,
                yoff
            ]
        ];
        edges2[net[0][0]] = initv;
        extendedges(edges2[net[0][0]], polyn);
        geos[this.facenames[0][1]] = this.project2d(0, 0, [
            new Quat(0, initv[0][0], initv[0][1], 0),
            new Quat(0, initv[1][0], initv[1][1], 0)
        ]);
        const connectat = [];
        connectat[0] = 0;
        for (const neti1 of net){
            const f0 = neti1[0];
            if (!edges2[f0]) throw new Error("Bad edge description; first edge not connected.");
            let gfi = -1;
            for(let j = 0; j < bg.facenames.length; j++)if (f0 === bg.facenames[j][1]) {
                gfi = j;
                break;
            }
            if (gfi < 0) throw new Error("Could not find first face name " + f0);
            const thisface = bg.facenames[gfi][0];
            for(let j9 = 1; j9 < neti1.length; j9++){
                const f1 = neti1[j9];
                if (f1 === "" || edges2[f1]) continue;
                edges2[f1] = [
                    edges2[f0][j9 % polyn],
                    edges2[f0][(j9 + polyn - 1) % polyn]
                ];
                extendedges(edges2[f1], polyn);
                const caf0 = connectat[gfi];
                const mp = thisface[(caf0 + j9) % polyn].sum(thisface[(caf0 + j9 + polyn - 1) % polyn]).smul(0.5);
                const epi = findelement(bg.edgenames, mp);
                const edgename = bg.edgenames[epi][1];
                const el = splitByFaceNames(edgename, this.facenames);
                const gf1 = el[f0 === el[0] ? 1 : 0];
                let gf1i = -1;
                for(let k = 0; k < bg.facenames.length; k++)if (gf1 === bg.facenames[k][1]) {
                    gf1i = k;
                    break;
                }
                if (gf1i < 0) throw new Error("Could not find second face name");
                const otherface = bg.facenames[gf1i][0];
                for(let k4 = 0; k4 < otherface.length; k4++){
                    const mp2 = otherface[k4].sum(otherface[(k4 + 1) % polyn]).smul(0.5);
                    if (mp2.dist(mp) <= eps3) {
                        const p1 = edges2[f0][(j9 + polyn - 1) % polyn];
                        const p2 = edges2[f0][j9 % polyn];
                        connectat[gf1i] = k4;
                        geos[gf1] = this.project2d(gf1i, k4, [
                            new Quat(0, p2[0], p2[1], 0),
                            new Quat(0, p1[0], p1[1], 0)
                        ]);
                        break;
                    }
                }
            }
        }
        let hix = 0;
        let hiy = 0;
        const rot = this.getInitial3DRotation();
        for (let face of this.faces){
            if (threed) face = face.rotate(rot);
            for(let j = 0; j < face.length; j++){
                hix = Math.max(hix, Math.abs(face.get(j).b));
                hiy = Math.max(hiy, Math.abs(face.get(j).c));
            }
        }
        const sc2 = Math.min(h / hiy / 2, (w - trim) / hix / 4);
        const mappt2d = (fn, q)=>{
            if (threed) {
                q = q.rotatepoint(rot);
                const xoff2 = 0.5 * trim + 0.25 * w;
                const xmul = this.baseplanes[fn].rotateplane(rot).d < 0 ? 1 : -1;
                return [
                    trim + w * 0.5 + xmul * (xoff2 - q.b * sc2),
                    trim + h * 0.5 + q.c * sc2
                ];
            } else {
                const g = geos[this.facenames[fn][1]];
                return [
                    trim + twodshrink * q.dot(g[0]) + g[2].b,
                    trim + h - twodshrink * q.dot(g[1]) - g[2].c
                ];
            }
        };
        return mappt2d;
    }
    generatesvg(w = 800, h = 500, trim = 10, threed = false) {
        const mappt2d = this.generate2dmapping(w, h, trim, threed);
        function drawedges(id, pts, color) {
            return '<polygon id="' + id + '" class="sticker" style="fill: ' + color + '" points="' + pts.map((p)=>p[0] + " " + p[1]
            ).join(" ") + '"/>\n';
        }
        const pos = this.getsolved();
        const colormap = [];
        const facegeo = [];
        for(let i = 0; i < this.baseFaceCount; i++)colormap[i] = this.colors[this.facenames[i][1]];
        for(let i29 = 0; i29 < this.faces.length; i29++){
            const face = this.faces[i29];
            const facenum = Math.floor(i29 / this.stickersperface);
            const fg = [];
            for(let j = 0; j < face.length; j++)fg.push(mappt2d(facenum, face.get(j)));
            facegeo.push(fg);
        }
        const svg = [];
        for(let j = 0; j < this.baseFaceCount; j++){
            svg.push("<g>");
            svg.push("<title>" + this.facenames[j][1] + "</title>\n");
            for(let ii = 0; ii < this.stickersperface; ii++){
                const i = j * this.stickersperface + ii;
                const cubie = this.facetocubie[i];
                const cubieori = this.facetoord[i];
                const cubiesetnum = this.cubiesetnums[cubie];
                const cubieord = this.cubieordnums[cubie];
                const color = this.graybyori(cubie) ? "#808080" : colormap[pos.p[i]];
                let id = this.cubiesetnames[cubiesetnum] + "-l" + cubieord + "-o" + cubieori;
                svg.push(drawedges(id, facegeo[i], color));
                if (this.duplicatedFaces[i]) for(let jj = 1; jj < this.duplicatedFaces[i]; jj++){
                    id = this.cubiesetnames[cubiesetnum] + "-l" + cubieord + "-o" + jj;
                    svg.push(drawedges(id, facegeo[i], color));
                }
            }
            svg.push("</g>");
        }
        const html = '<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 500">\n<style type="text/css"><![CDATA[.sticker { stroke: #000000; stroke-width: 1px; }]]></style>\n' + svg.join("") + "</svg>";
        return html;
    }
    get3d(options) {
        const stickers = [];
        const rot = this.getInitial3DRotation();
        const faces = [];
        const maxdist = 0.52 * this.basefaces[0].get(0).len();
        for(let i = 0; i < this.basefaces.length; i++){
            const coords = this.basefaces[i].rotate(rot);
            const name = this.facenames[i][1];
            faces.push({
                coords: toFaceCoords(coords, maxdist),
                name
            });
        }
        for(let i30 = 0; i30 < this.faces.length; i30++){
            const facenum = Math.floor(i30 / this.stickersperface);
            const cubie = this.facetocubie[i30];
            const cubieori = this.facetoord[i30];
            const cubiesetnum = this.cubiesetnums[cubie];
            const cubieord = this.cubieordnums[cubie];
            let color = this.graybyori(cubie) ? "#808080" : this.colors[this.facenames[facenum][1]];
            if (options?.stickerColors) color = options.stickerColors[i30];
            const coords = this.faces[i30].rotate(rot);
            stickers.push({
                coords: toFaceCoords(coords, maxdist),
                color,
                orbit: this.cubiesetnames[cubiesetnum],
                ord: cubieord,
                ori: cubieori,
                face: facenum
            });
            let fcoords = coords;
            if (this.duplicatedFaces[i30]) {
                const rotdist = fcoords.length / this.duplicatedFaces[i30];
                for(let jj = 1; jj < this.duplicatedFaces[i30]; jj++){
                    for(let k = 0; k < rotdist; k++)fcoords = fcoords.rotateforward();
                    stickers.push({
                        coords: toFaceCoords(fcoords, maxdist),
                        color,
                        orbit: this.cubiesetnames[cubiesetnum],
                        ord: cubieord,
                        ori: jj,
                        face: facenum,
                        isDup: true
                    });
                }
            }
        }
        const grips = [];
        for(let i31 = 0; i31 < this.movesetgeos.length; i31++){
            const msg = this.movesetgeos[i31];
            const order = this.movesetorders[i31];
            for (const gn of this.geonormals)if (msg[0] === gn[1] && msg[1] === gn[2]) {
                grips.push({
                    coordinates: toCoords(gn[0].rotatepoint(rot), 1),
                    quantumMove: new _chunkEWRBHQFXJs.Move(msg[0]),
                    order
                });
                grips.push({
                    coordinates: toCoords(gn[0].rotatepoint(rot).smul(-1), 1),
                    quantumMove: new _chunkEWRBHQFXJs.Move(msg[2]),
                    order
                });
            }
        }
        const twodmapper = this.generate2dmapping(2880, 2160, 0, false, 1);
        const g = (function() {
            const irot = rot.invrot();
            return function(facenum, coords) {
                let q = new Quat(0, coords[0] * maxdist, -coords[1] * maxdist, coords[2] * maxdist);
                q = q.rotatepoint(irot);
                const x = twodmapper(facenum, q);
                x[0] /= 2880;
                x[1] = 1 - x[1] / 2160;
                return x;
            };
        })().bind(this);
        return {
            stickers,
            faces,
            axis: grips,
            unswizzle: this.unswizzle.bind(this),
            notationMapper: this.notationMapper,
            textureMapper: {
                getuv: g
            }
        };
    }
    getGeoNormal(geoname) {
        const rot = this.getInitial3DRotation();
        const grip = this.swizzler.unswizzle(geoname);
        for (const gn of this.geonormals)if (grip === gn[1]) {
            const r = toCoords(gn[0].rotatepoint(rot), 1);
            if (Math.abs(r[0]) < eps3 && Math.abs(r[2]) < eps3) {
                r[0] = 0;
                r[2] = 0.000001;
            }
            return r;
        }
        return void 0;
    }
    getfaceindex(facenum) {
        const divid = this.stickersperface;
        return Math.floor(facenum / divid);
    }
    textForTwizzleExplorer() {
        return `Faces ${this.baseplanerot.length}
Stickers per face ${this.stickersperface}
Short edge ${this.shortedge}
Cubies ${this.cubies.length}
Edge distance ${this.edgedistance}
Vertex distance ${this.vertexdistance}`;
    }
    writeSchreierSims(tw) {
        const os = this.getOrbitsDef(false);
        const as = os.reassemblySize();
        tw(`Reassembly size is ${as}`);
        const ss = schreierSims(this.getMovesAsPerms(), tw);
        const r = as / ss;
        tw(`Ratio is ${r}`);
    }
};
var PGNotation = class {
    constructor(pg, od){
        this.pg = pg;
        this.orbitNames = od.orbitnames;
    }
    lookupMove(move) {
        const mv = this.pg.parseMove(move);
        if (this.pg.parsedmovelist) {
            let found = false;
            for (const parsedmove of this.pg.parsedmovelist)if (parsedmove[1] === mv[1] && parsedmove[2] === mv[2] && parsedmove[3] === mv[3] && parsedmove[4] === mv[4]) found = true;
            if (!found) return null;
        }
        let bits = [
            mv[2],
            mv[3]
        ];
        if (!mv[4]) {
            const slices = this.pg.moveplanesets[mv[1]].length;
            bits = [
                slices - mv[3],
                slices - mv[2]
            ];
        }
        const pgmv = this.pg.getMoveFromBits(bits, mv[5], !mv[4], this.pg.cmovesbyslice[mv[1]], void 0, this.pg.movesetorders[mv[1]]);
        const r = PGOrbitsDef.transformToKTransformationData(this.orbitNames, pgmv);
        return r;
    }
};

},{"./chunk-EWRBHQFX.js":"i6QEj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbCkY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cachedMegaminxKPuzzleWithoutMO", ()=>cachedMegaminxKPuzzleWithoutMO
);
parcelHelpers.export(exports, "cachedSGSDataMegaminx", ()=>cachedSGSDataMegaminx
);
parcelHelpers.export(exports, "sgsDataMegaminx", ()=>sgsDataMegaminx
);
var _chunk27KJGD3SJs = require("./chunk-27KJGD3S.js");
var _chunkF5WNHV7VJs = require("./chunk-F5WNHV7V.js");
var _chunkFE3HTWQKJs = require("./chunk-FE3HTWQK.js");
// src/cubing/search/inside/solve/puzzles/megaminx.sgs.json.ts
async function megaminxKPuzzleWithoutMO() {
    const pg = _chunkF5WNHV7VJs.getPuzzleGeometryByName("megaminx", {
        allMoves: true,
        addRotations: true
    });
    const kpuzzle = new _chunkFE3HTWQKJs.KPuzzle(pg.getKPuzzleDefinition(true), {
        experimentalPGNotation: new _chunkF5WNHV7VJs.PGNotation(pg, pg.getOrbitsDef(true))
    });
    kpuzzle.definition.name = "megaminx";
    return kpuzzle;
}
var defCache = null;
async function cachedMegaminxKPuzzleWithoutMO() {
    return defCache ?? (defCache = megaminxKPuzzleWithoutMO());
}
var cachedData = null;
async function cachedSGSDataMegaminx() {
    return cachedData ?? (cachedData = sgsDataMegaminx());
}
async function sgsDataMegaminx() {
    return _chunk27KJGD3SJs.parseSGS(await cachedMegaminxKPuzzleWithoutMO(), `SubgroupSizes 12 5 60 58 60 56 54 57 52 50 54 48 46 51 44 42 48 40 45 38 36 42 34 32 39 30 36 28 26 33 24 30 22 20 27 18 24 16 14 21 12 18 10 15 8 6 2 12 9 3

Alg Rv
Alg Rv2
Alg Rv2'
Alg Rv'
Alg Lv'
Alg Lv2
Alg Lv2'
Alg Fv
Alg Fv'
Alg BRv2
Alg Lv2 Rv'

Alg Uv
Alg Uv2
Alg Uv2'
Alg Uv'

Alg D
Alg D2
Alg D2'
Alg D'
Alg B
Alg B2
Alg B2'
Alg B'
Alg D DL
Alg D DL2
Alg D DL2'
Alg D DL'
Alg D2 FL
Alg D2 FL2
Alg D2 FL2'
Alg D2 FL'
Alg D2' FR
Alg D2' FR2
Alg D2' FR2'
Alg D2' FR'
Alg D' DR
Alg D' DR2
Alg D' DR2'
Alg D' DR'
Alg B DR
Alg B DR2'
Alg B DR'
Alg B2 BR2
Alg B2 BR2'
Alg B2 BR'
Alg B2' BL
Alg B2' BL2
Alg B2' BL2'
Alg B' DL
Alg B' DL2
Alg B' DL'
Alg D DL B
Alg D DL B2'
Alg D DL B'
Alg D DL2' L
Alg D DL2' L2
Alg D DL2' L2'
Alg D DL' FL
Alg D DL' FL2
Alg D DL' FL'
Alg D2 FL2' F
Alg D2 FL2' F2
Alg D2 FL2' F2'
Alg D2 FL' FR
Alg D2 FL' FR2
Alg D2 FL' FR'
Alg D2' FR2' R
Alg D2' FR2' R2
Alg D2' FR2' R2'
Alg B DR2' R2'
Alg B DR' BR2
Alg B2 BR' BL
Alg B2' BL2' L
Alg D DL2' L2' F
Alg DL
Alg DL2
Alg DL2'
Alg DL'
Alg DL BL
Alg DL BL2
Alg DL BL2'
Alg DL BL'
Alg DL2 L
Alg DL2 L2
Alg DL2 L2'
Alg DL2 L'
Alg DL2' FL
Alg DL2' FL2
Alg DL2' FL2'
Alg DL2' FL'
Alg D B D'
Alg D B2 D'
Alg D B2' D'
Alg D B' D'
Alg D2 B D2'
Alg D2 DL' D2'
Alg D2' DL' D2
Alg D' B D
Alg D' DL' D
Alg B2 DR2 B2'
Alg B2 DR2' B2'
Alg B2 DR' B2'
Alg B2' BR B2
Alg B2' BR2 B2
Alg B2' BR2' B2
Alg B' BL B
Alg B' BL2 B
Alg B' BL' B
Alg DL BL2' U
Alg DL BL2' U2
Alg DL BL2' U2'
Alg DL BL' L
Alg DL BL' L2
Alg DL BL' L'
Alg DL2 L2' F
Alg DL2 L2' F2
Alg DL2 L2' F2'
Alg DL2 L' FL
Alg DL2 L' FL2
Alg DL2 L' FL'
Alg DL2' FL2' FR
Alg DL2' FL2' FR2
Alg DL2' FL2' FR2'
Alg D B D' DR2
Alg D B D' DR'
Alg D2 B D2' FR2'
Alg D' B D DL
Alg B2 DR' B2' BR
Alg B2 DR' B2' BR'
Alg B2' BR2' B2 U
Alg DL BL2' U2' F
Alg D FL D'
Alg D FL2 D'
Alg D FL2' D'
Alg D FL' D'
Alg D2 FR D2'
Alg D2 FR2 D2'
Alg D2 FR2' D2'
Alg D2' DR D2
Alg D2' DR2 D2
Alg D2' DR2' D2
Alg DL2 BL DL2'
Alg DL2 BL2 DL2'
Alg DL2 BL2' DL2'
Alg DL2 BL' DL2'
Alg DL2' L2 DL2
Alg DL2' L2' DL2
Alg DL' FL2 DL
Alg DL' FL' DL
Alg D FL D' FL2'
Alg D FL L D'
Alg D FL L2 D'
Alg D FL L2' D'
Alg D FL2 F D'
Alg D FL2 F2 D'
Alg D FL2 F2' D'
Alg D FL2 L D'
Alg D FL2 L2 D'
Alg D FL2' D' FR
Alg D FL2' D' FR2
Alg D FL2' D' FR2'
Alg D FL2' F D'
Alg D FL2' F2' D'
Alg D FL2' FR2' D'
Alg D FL2' FR' D'
Alg D FL' D' FL
Alg D FL' FR D'
Alg D2 FR D2' FR2'
Alg D2 FR2 R D2'
Alg D2 FR2 R2 D2'
Alg D2 FR2 R2' D2'
Alg D2 FR2' D2' DR
Alg D2 FR2' D2' DR2
Alg D2 FR2' D2' DR2'
Alg D2 FR2' D2' DR'
Alg D2 FR2' R2' D2'
Alg D2 FR' DR2' D2'
Alg D2' DR D2 DR2'
Alg D2' DR2 BR D2
Alg D2' DR2 BR2' D2
Alg D2' DR2' BR2' D2
Alg D2' DR2' BR' D2
Alg DL2 BL2 DL2' BL'
Alg DL2 BL2 DL2' BR'
Alg DL2 BL' DL2' L'
Alg DL2' L2 DL2 BL2
Alg D FL L2 BL2 D'
Alg D FL L' FL2' D'
Alg D FL2 L FL' D'
Alg D FL2' D' FR2 DR2'
Alg B DL B'
Alg B DL2 B'
Alg B DL2' B'
Alg B DL' B'
Alg B2 D B2'
Alg B2 D2 B2'
Alg B2 D2' B2'
Alg B2 D' B2'
Alg B2 DL B2'
Alg B2' D' B2
Alg B2' DL B2
Alg B' D' B
Alg B DL B' BL
Alg B DL B' BL2
Alg B DL B' BL2'
Alg B DL B' BL'
Alg B DL2 B' BL2
Alg B DL2 B' BL2'
Alg B DL2 B' BL'
Alg B DL2' L2 B'
Alg B DL2' L2' B'
Alg B DL2' L' B'
Alg B DL' FL B'
Alg B DL' FL2 B'
Alg B DL' FL2' B'
Alg B DL' FL' B'
Alg B2 D FL B2'
Alg B2 D FL2' B2'
Alg B2 D FL' B2'
Alg B2 D2 FR2 B2'
Alg B2 D2 FR2' B2'
Alg B2 D2 FR' B2'
Alg B2 D2' B2' DR
Alg B2 D2' B2' DR2
Alg B2 D2' B2' DR2'
Alg B2 DL B2' BR
Alg B2 DL B2' BR2
Alg B2 DL B2' BR2'
Alg B2' D' B2 BR2
Alg B2' D' B2 BR2'
Alg B' D' B DR
Alg B' D' B DR2'
Alg D FL' D FR D2'
Alg D DL FL DL' D'
Alg D2' FR DR FR' D2
Alg B DL B D B2'
Alg B DL B D2' B2'
Alg B DL B' BL2 U2
Alg B DL B' BL2 U2'
Alg B DL B' BL2 U'
Alg B DL2 B' BL2' U2
Alg B DL2 B' BL2' U2'
Alg B DL2 B' BL' L2
Alg B DL2' L2' B' F2
Alg B2 D FL2' B2' F2'
Alg DR
Alg DR2
Alg DR2'
Alg DR'
Alg DR2 FR
Alg DR2 FR2
Alg DR2 FR2'
Alg DR2 FR'
Alg DR2' R
Alg DR2' R2
Alg DR2' R2'
Alg DR2' R'
Alg DR' BR
Alg DR' BR2
Alg DR' BR2'
Alg DR' BR'
Alg D DR D'
Alg D2 DR D2'
Alg B BR B'
Alg B BR2' B'
Alg B BR' B'
Alg B2 BL2 B2'
Alg B2 BL2' B2'
Alg B2 BL' B2'
Alg DR2 FR2 FL2
Alg DR2 FR2 FL2'
Alg DR2 FR2 FL'
Alg DR2 FR2' F
Alg DR2 FR2' F2
Alg DR2 FR2' F2'
Alg DR2 FR' R
Alg DR2 FR' R2
Alg DR2 FR' R'
Alg DR2' R FR
Alg DR2' R FR2'
Alg DR2' R FR'
Alg DR2' R2' U
Alg DR2' R2' U2
Alg DR2' R2' U2'
Alg DR2' R' BR2'
Alg DR' BR2' BL'
Alg D DR2 FR D'
Alg B BR B' DR
Alg B BR B' DR2
Alg B BR2' B' U2'
Alg B BR' B' BL2
Alg B BR' B' BL2'
Alg B BR' B' BL'
Alg B2 BL2' L' B2'
Alg DR2 FR2 FL' F
Alg DR2 FR2' F FL2'
Alg DR2 FR2' F FL'
Alg B BR2' U2' L2' B'
Alg D2' FL D2
Alg D2' FL2 D2
Alg D2' FL2' D2
Alg D2' FL' D2
Alg D' FR2 D
Alg D' FR2' D
Alg D' FR' D
Alg DR FR DR'
Alg DR FR2' DR'
Alg DR FR' DR'
Alg DR2 R2 DR2'
Alg DR2 R2' DR2'
Alg DR2' BR DR2
Alg DR2' BR2 DR2
Alg DR2' BR2' DR2
Alg D DR2 D' DR2'
Alg D DR2' D' DR2
Alg D2' FL D2 FR'
Alg D2' FL2 D2 FL2'
Alg D2' FL2 D2 FL'
Alg D2' FL2 L D2
Alg D2' FL2 L2 D2
Alg D2' FL2 L2' D2
Alg D2' FL2 L' D2
Alg D2' FL2' F D2
Alg D2' FL2' F2 D2
Alg D2' FL2' F2' D2
Alg D2' FL2' L D2
Alg D2' FL2' L2 D2
Alg D2' FL2' L2' D2
Alg D2' FL2' L' D2
Alg D2' FL' F D2
Alg D2' FL' F2' D2
Alg D' FR FL' D
Alg D' FR2 D FR'
Alg D' FR2 D FL2
Alg D' FR2 D FL2'
Alg D' FR2 FL D
Alg D' FR2' R2' D
Alg D' FR' R2' D
Alg DR2 R2 DR2' U2'
Alg DR2 R2' DR2' BR
Alg DR2 R2' DR2' BR2
Alg DR2 R2' DR2' BR2'
Alg DR2 R2' DR2' BR'
Alg DR2 R' BR2' DR2'
Alg DR2' BR DR2 BR2'
Alg DR2' BR2 BL DR2
Alg DR2' BR2 BL2' DR2
Alg DR2' BR2' BL' DR2
Alg D B2' BL2' B2 D'
Alg D2 B2 DL2 B2' D2'
Alg D2' FL2 L' FL2 D2
Alg D2' FL2' L D2 FL'
Alg D2' FL2' L FL2' D2
Alg D2' FL2' L2' BL2 D2
Alg B2' DR B2
Alg B2' DR2 B2
Alg B2' DR2' B2
Alg B2' DR' B2
Alg B' DR' B
Alg B2' DR FR B2
Alg B2' DR FR2 B2
Alg B2' DR FR2' B2
Alg B2' DR FR' B2
Alg B2' DR2 R B2
Alg B2' DR2 R2 B2
Alg B2' DR2 R2' B2
Alg B2' DR2 R' B2
Alg B2' DR2' B2 BR
Alg B2' DR2' B2 BR2
Alg B2' DR2' B2 BR2'
Alg B2' DR2' B2 BR'
Alg B2' DR' B2 BL2
Alg B2' DR' B2 BL2'
Alg B2' DR' B2 BL'
Alg B' DR2' BR' B
Alg B' DR' B BR
Alg B' DR' B BR2'
Alg B' DR' B BR'
Alg D2' FR2' FL FR2 D2
Alg D2' FR2' FL2 FR2 D2
Alg D2' FR2' FL2' FR2 D2
Alg D' DR2' FR DR2 D
Alg D' DR2' FR2 DR2 D
Alg D' DR' FR' DR D
Alg D' FR D' FL' D2
Alg B2 D2 DL2 D2' B2'
Alg B2 D2 DL2' D2' B2'
Alg B2 D2 DL' D2' B2'
Alg B2 D' FR' D B2'
Alg B2 DL D2' DL' B2'
Alg B2 DL D' DL' B2'
Alg B2' DR FR2' B2 F2
Alg B2' DR FR2' B2 F2'
Alg B2' DR FR' R B2
Alg B2' DR FR' R2 B2
Alg B2' DR2 R2' B2 U
Alg B2' DR2 R2' B2 U2
Alg B2' DR2 R2' B2 U2'
Alg B2' DR' B2 BL2 U'
Alg B' DR2' BR' B BL2'
Alg DR D FR D' DR'
Alg DL2' B D B' DL2
Alg D2' FR2' FL2' FR2 F D2
Alg D' DR2' FR DR2 D FL2'
Alg B2 D B D' DR B2
Alg FR
Alg FR2
Alg FR2'
Alg FR'
Alg FR2 FL
Alg FR2 FL2
Alg FR2 FL2'
Alg FR2 FL'
Alg FR2' F
Alg FR2' F2
Alg FR2' F2'
Alg FR2' F'
Alg FR' R
Alg FR' R2
Alg FR' R2'
Alg FR' R'
Alg D FR D'
Alg DR R DR'
Alg DR R2' DR'
Alg DR R' DR'
Alg DR2 BR2 DR2'
Alg DR2 BR2' DR2'
Alg DR2 BR' DR2'
Alg FR2 FL2' L
Alg FR2 FL2' L2
Alg FR2 FL2' L2'
Alg FR2 FL' F
Alg FR2 FL' F2
Alg FR2 FL' F'
Alg FR2' F FL
Alg FR2' F FL2'
Alg FR2' F FL'
Alg FR2' F2' U
Alg FR2' F2' U2
Alg FR2' F2' U2'
Alg FR2' F' R2'
Alg FR' R2' BR'
Alg DR R DR' FR
Alg DR R DR' FR2
Alg DR R2' DR' U2'
Alg DR R' DR' BR2
Alg DR R' DR' BR2'
Alg DR R' DR' BR'
Alg DR2 BR2' BL2' DR2'
Alg DR2 BR2' BL' DR2'
Alg FR2 FL' F L2
Alg FR2 FL' F L2'
Alg B' DR2 BR' DR2' B
Alg DR R2' U2' BL2 DR'
Alg D' FL D
Alg D' FL2 D
Alg D' FL2' D
Alg D' FL' D
Alg FR FL FR'
Alg FR FL2 FR'
Alg FR FL2' FR'
Alg FR FL' FR'
Alg FR2 F2 FR2'
Alg FR2 F2' FR2'
Alg FR2' R FR2
Alg FR2' R2 FR2
Alg FR2' R2' FR2
Alg D FR2 D' FR2'
Alg D FR2' D' FR2
Alg D' FL D FL'
Alg D' FL2 D FL'
Alg D' FL2 L D
Alg D' FL2 L2 D
Alg D' FL2 L2' D
Alg D' FL2 L' D
Alg D' FL2' F2' D
Alg D' FL2' L2 D
Alg D' FL2' L2' D
Alg D' FL2' L' D
Alg D' FL' F2' D
Alg FR FL2' F' FR'
Alg FR FL2' FR' L
Alg FR FL2' FR' L2
Alg FR FL2' FR' L2'
Alg FR2 F2 FR2' U2
Alg FR2 F2 FR2' U2'
Alg FR2 F2' FR2' U2'
Alg FR2 F2' FR2' R
Alg FR2 F2' FR2' R2
Alg FR2 F2' FR2' R2'
Alg FR2 F2' FR2' R'
Alg FR2 F' R2' FR2'
Alg FR2' R FR2 R2'
Alg FR2' R2 BR FR2
Alg FR2' R2 BR2 FR2
Alg FR2' R2 BR2' FR2
Alg FR2' R2' BR2' FR2
Alg FR2' R2' BR' FR2
Alg D DR2' BR2' DR2 D'
Alg D FR2' D' FR2 FL2
Alg D2' B DL B' D2
Alg D2' B2' D' B2 D2'
Alg D' FL2 L BL D
Alg D' FL2 L' FL2 D
Alg D' FL2' F2' R' D
Alg D' FL2' L FL2' D
Alg D' FL2' L2' BL2 D
Alg DR2' FR DR2
Alg DR2' FR2 DR2
Alg DR2' FR2' DR2
Alg DR2' FR' DR2
Alg DR' FR' DR
Alg DR2' FR FL DR2
Alg DR2' FR FL2 DR2
Alg DR2' FR FL2' DR2
Alg DR2' FR FL' DR2
Alg DR2' FR2 DR2 F
Alg DR2' FR2 DR2 F2
Alg DR2' FR2 DR2 F2'
Alg DR2' FR2 DR2 F'
Alg DR2' FR2' DR2 R
Alg DR2' FR2' DR2 R2
Alg DR2' FR2' DR2 R2'
Alg DR2' FR2' DR2 R'
Alg DR2' FR' DR2 BR2
Alg DR2' FR' DR2 BR2'
Alg DR2' FR' DR2 BR'
Alg DR' FR2' R' DR
Alg DR' FR' DR R
Alg DR' FR' DR R2'
Alg DR' FR' DR R'
Alg D' FR2' FL FR2 D
Alg D' FR2' FL2 FR2 D
Alg D' FR' FL' FR D
Alg B2' DR2 FR' DR2' B2
Alg B' DR2 FR' DR2' B
Alg DR2 D' FL' D DR2'
Alg DR2' FR FL2' DR2 L
Alg DR2' FR FL2' DR2 L2
Alg DR2' FR FL2' DR2 L2'
Alg DR2' FR FL' DR2 F
Alg DR2' FR FL' DR2 F2
Alg DR2' FR2 F FL2 DR2
Alg DR2' FR2 DR2 F2' U
Alg DR2' FR2 DR2 F2' U2
Alg DR2' FR2 DR2 F2' U2'
Alg DR2' FR' DR2 BR2 U'
Alg DR2' FR' DR2 BR2' BL2'
Alg DR' FR2' R' DR BR2'
Alg D' FR2' FL2 FR2 L D
Alg D' FR2' FL2 FR2 L2 D
Alg B2' DR2' FR2' R' DR2 B2
Alg DR2 D DR D' FR DR2
Alg DR2' FR' DR2 BR2 U' BL2
Alg FL
Alg FL2
Alg FL2'
Alg FL'
Alg FL L
Alg FL L2
Alg FL L2'
Alg FL L'
Alg FL2 F
Alg FL2 F2
Alg FL2 F2'
Alg FL2 F'
Alg FR2' FL2' FR2
Alg FR' FL2' FR
Alg FL L2 BL
Alg FL L2 BL2
Alg FL L2 BL2'
Alg FL L2 BL'
Alg FL L2' U
Alg FL L2' U2
Alg FL L2' U2'
Alg FL L' F
Alg FL L' F2
Alg FL L' F'
Alg FL2 F L
Alg FL2 F L2
Alg FL2 F L2'
Alg FL2 F L'
Alg FL2 F2' R
Alg FL2 F2' R2
Alg FL2 F2' R2'
Alg FR' FL2 F' FR
Alg FL L2 BL2' BR
Alg FL L2 BL2' BR2
Alg FL L2 BL' U
Alg FL L2' U BL2
Alg FL L2' U BL2'
Alg FL L2' U BL'
Alg FL L2' U2' R
Alg FL L2' U2' R2
Alg FL L' F' FL
Alg FL L' F' FL2
Alg FL L' F' FL2'
Alg B DL2' BL DL2 B'
Alg FL L2 BL' U BR2'
Alg FL2 L FL2'
Alg FL2 L2 FL2'
Alg FL2 L2' FL2'
Alg FL2 L' FL2'
Alg FL2' F2 FL2
Alg FL2' F2' FL2
Alg FL2' F' FL2
Alg FR2' FL' FR2 FL
Alg FL2 L2 FL2' L2'
Alg FL2 L2 FL2' L'
Alg FL2 L2 FL2' BL
Alg FL2 L2 FL2' BL2
Alg FL2 L2 FL2' BL2'
Alg FL2 L2 FL2' BL'
Alg FL2 L2' FL2' U
Alg FL2 L2' FL2' U2
Alg FL2 L2' FL2' U2'
Alg FL2 L2' FL2' BL
Alg FL2 L2' FL2' BL2
Alg FL2 L2' FL2' BL2'
Alg FL2 L2' FL2' BL'
Alg FL2 L' FL2' U
Alg FL2 L' FL2' U2'
Alg FL2 L' FL2' F
Alg FL2 L' FL2' F2
Alg FL2 L' FL2' F2'
Alg FL2 L' FL2' F'
Alg FL2' F L FL2
Alg FL2' F L' FL2
Alg FL2' F2 L FL2
Alg FL2' F2 L2 FL2
Alg FL2' F2 L2' FL2
Alg FL2' F2 FL2 F'
Alg FL2' F2 FL2 L2
Alg FL2' F2' R FL2
Alg FL2' F2' R2 FL2
Alg FL2' F2' R2' FL2
Alg FL2' F' R2' FL2
Alg FL2' F' R' FL2
Alg FL' FR2' FL FR2
Alg D DR2' FR2' DR2 D'
Alg D FR2' R' FR2 D'
Alg D' DL2 BL2 DL2' D
Alg B2 D2' B D2 B2
Alg DR2 D2 DR D2' DR2
Alg FR2 D FR D' FR2
Alg FL2 L2 BL' L2 FL2'
Alg FL2 L2 FL2' BL2 BR
Alg FL2 L2' BL L2' FL2'
Alg FL2 L2' FL2' BL L'
Alg DL FL DL'
Alg DL FL2 DL'
Alg DL FL2' DL'
Alg DL FL' DL'
Alg DL2 FL DL2'
Alg DL FL DL' L
Alg DL FL DL' L2
Alg DL FL DL' L2'
Alg DL FL DL' L'
Alg DL FL2 L DL'
Alg DL FL2 L2 DL'
Alg DL FL2 L2' DL'
Alg DL FL2 L' DL'
Alg DL FL2 DL' L
Alg DL FL2' DL' F2
Alg DL FL2' DL' F2'
Alg DL FL2' DL' F'
Alg DL2 FL DL2' BL
Alg DL2 FL DL2' BL2
Alg DL2 FL DL2' BL2'
Alg B DL2' FL DL2 B'
Alg B2 DL2' FL DL2 B2'
Alg FL2 F2 L' F2' FL2'
Alg FL2 F2' L' F2 FL2'
Alg FL2 F' L' F FL2'
Alg FL2' FR2' FL FR2 FL2
Alg FL2' FR' F' FR FL2
Alg DL FL DL' L BL2'
Alg DL FL DL' L BL'
Alg DL FL DL' L2 U2
Alg DL FL DL' L2 U2'
Alg DL FL2 L2' DL' U2
Alg DL FL2 L2' DL' U2'
Alg DL FL2 L' DL' F'
Alg DL FL2' DL' F2' R2
Alg DL FL2' DL' F2' R2'
Alg DL2 FL DL2' BL2 BR2
Alg B DL2 FL DL2' BL B'
Alg FL2 F2' L' F2 R2 FL2'
Alg FL2 F2' L' F2 R2' FL2'
Alg FL2' FR' F FR L FL2
Alg DL FL DL' L BL2' BR2
Alg DL FL2 L DL FL' DL2'
Alg FR F FR'
Alg FR F2 FR'
Alg FR F2' FR'
Alg FR F' FR'
Alg FR2 R FR2'
Alg FR2 R2 FR2'
Alg FR2 R2' FR2'
Alg FR2 R' FR2'
Alg FL2' L FL2
Alg FL2' L2 FL2
Alg FL2' L2' FL2
Alg FL' F FL
Alg FL' F2 FL
Alg FL' F' FL
Alg FR F FR' F'
Alg FR F2 FR' L
Alg FR F2' FR' U
Alg FR F2' FR' U2
Alg FR F2' FR' U2'
Alg FR F' FR' R
Alg FR F' FR' R2
Alg FR F' FR' R2'
Alg FR F' FR' R'
Alg FR2 R FR2' F2
Alg FR2 R FR2' R'
Alg FR2 R2' BR FR2'
Alg FR2 R2' BR2 FR2'
Alg FR2 R2' BR2' FR2'
Alg FR2 R2' BR' FR2'
Alg FL2' L2 FL2 BL
Alg FL2' L2 FL2 BL2
Alg FL2' L2' FL2 U
Alg FL' F L2 FL
Alg FL' F L2' FL
Alg FL' F FL L
Alg DR' FR2 R' FR2' DR
Alg FR F2' U2' BR FR'
Alg FR F2' U2' BR2 FR'
Alg FR F' FR R' FR2'
Alg FL2' L2' FL2 U BL2
Alg FL2' L2' FL2 U BL2'
Alg FR F L F' FR'
Alg FR F L2 F' FR'
Alg FR F L2' F' FR'
Alg FR F L' F' FR'
Alg FR F2 U F2' FR'
Alg FR F2 U2 F2' FR'
Alg FR F2 U2' F2' FR'
Alg FR F2' R F2 FR'
Alg FR F2' R2 F2 FR'
Alg FR F2' R2' F2 FR'
Alg FR FL' L FL FR'
Alg FR FL' L2 FL FR'
Alg FR FL' L' FL FR'
Alg FR2 F2' L F2 FR2'
Alg FR2 F2' L2 F2 FR2'
Alg FR2 F' U2 F FR2'
Alg FR2 F' U2' F FR2'
Alg FR2 R U R' FR2'
Alg FR2 R U' R' FR2'
Alg FR2 R2 BR2 R2' FR2'
Alg FR2 R2 BR2' R2' FR2'
Alg FR2' DR BR DR' FR2
Alg FR2' R2' U R2 FR2
Alg FR2' R2' U2 R2 FR2
Alg FR2' R' BR2 R FR2
Alg FR2' R' BR2' R FR2
Alg FR2' R' BR' R FR2
Alg FL2 L BL L' FL2'
Alg FL2 L2 U2' L2' FL2'
Alg FL2 DL' BL2 DL FL2'
Alg FL2' F2 R2' F2' FL2
Alg FL2' L2' BL2 L2 FL2
Alg FL' F2 L F2' FL
Alg FL' F2 L2 F2' FL
Alg FL' F' R' F FL
Alg FL' FR R' FR' FL
Alg FR F L2' F' FR' BL
Alg FR F L2' F' FR' BL2
Alg FR F L' F' FR' F'
Alg FR F2 U2 BR2 F2' FR'
Alg FR F2 U2 BR2' F2' FR'
Alg FR F2' R F2 R2' FR'
Alg FR F2' R2' F2 FR' R'
Alg FR FL' L FL FR' F'
Alg FR2 F' U2 F FR2' L2'
Alg FR F L2 BL' L2 F' FR'
Alg FR F L2' F U' F2' FR'
Alg R
Alg R2
Alg R2'
Alg R'
Alg R2 F
Alg R2 F2
Alg R2 F2'
Alg R2 F'
Alg R2' U
Alg R2' U2
Alg R2' U2'
Alg R2' U'
Alg R' BR
Alg R' BR2
Alg R' BR2'
Alg R' BR'
Alg DR BR DR'
Alg DR BR2' DR'
Alg DR BR' DR'
Alg FR R FR'
Alg R2 F2' L
Alg R2 F2' L2
Alg R2 F2' L2'
Alg R2 F' U
Alg R2 F' U2
Alg R2 F' U'
Alg R2' U F
Alg R2' U F2'
Alg R2' U F'
Alg R2' U2' BL
Alg R2' U2' BL2
Alg R2' U2' BL2'
Alg R2' U' BR2'
Alg DR BR DR' R
Alg DR BR DR' R2
Alg DR BR2' BL2' DR'
Alg DR BR2' BL' DR'
Alg R2 F' U L2
Alg R2 F' U L2'
Alg FR' F FR
Alg FR' F2 FR
Alg FR' F2' FR
Alg FR' F' FR
Alg R F R'
Alg R F2 R'
Alg R F2' R'
Alg R F' R'
Alg R2 U2 R2'
Alg R2 U2' R2'
Alg R2' BR R2
Alg R2' BR2 R2
Alg R2' BR2' R2
Alg FR R2 FR' R2'
Alg FR R2' FR' R2
Alg FR' F FR F'
Alg FR' F2 FR F'
Alg FR' F2 FR L
Alg FR' F2 FR L2
Alg FR' F2 FR L2'
Alg FR' F2 FR L'
Alg FR' F2' FR U2'
Alg FR' F2' FR L2
Alg FR' F2' FR L2'
Alg FR' F2' FR L'
Alg FR' F' FR U2'
Alg R F2' U' R'
Alg R F2' R' L
Alg R F2' R' L2
Alg R F2' R' L2'
Alg R2 U2 R2' BL2
Alg R2 U2 R2' BL2'
Alg R2 U2' BR R2'
Alg R2 U2' BR2 R2'
Alg R2 U2' R2' BL2'
Alg R2 U2' R2' BR2'
Alg R2 U2' R2' BR'
Alg R2 U' BR2' R2'
Alg R2' BR R2 BR2'
Alg DR BR2 BL2' BR2' DR'
Alg FR R2' FR' R2 F2
Alg FR' F2 L' F2 FR
Alg FR' F2' U2' BR' FR
Alg FR' F2' L F2' FR
Alg DR' R DR
Alg DR' R2 DR
Alg DR' R2' DR
Alg DR' R' DR
Alg DR' R DR F
Alg DR' R DR F2
Alg DR' R DR F2'
Alg DR' R DR F'
Alg DR' R2 DR U
Alg DR' R2 DR U2
Alg DR' R2 DR U2'
Alg DR' R2 DR U'
Alg DR' R2' DR BR
Alg DR' R2' DR BR2
Alg DR' R2' DR BR2'
Alg DR' R2' DR BR'
Alg DR' R' DR BR
Alg DR' R' DR BR2'
Alg DR' R' DR BR'
Alg B2' DR2' R' DR2 B2
Alg DR2' FR' F FR DR2
Alg DR2' FR' F2 FR DR2
Alg DR2' FR' F' FR DR2
Alg DR' R DR F2' L
Alg DR' R DR F2' L2
Alg DR' R DR F2' L2'
Alg DR' R DR F' U
Alg DR' R DR F' U2
Alg DR' R DR F' U'
Alg DR' R2 U2' BL DR
Alg DR' R2 U2' BL2 DR
Alg DR' R2 U2' BL2' DR
Alg DR' R2 DR U F2
Alg DR' R' DR BR2' BL2'
Alg DR2' FR' F2 FR DR2 L
Alg DR2' FR' F2 FR DR2 L2
Alg DR' FR' F' FR R' DR
Alg BR
Alg BR2
Alg BR2'
Alg BR'
Alg BR2' U
Alg BR2' U2
Alg BR2' U2'
Alg BR2' U'
Alg BR' BL
Alg BR' BL2
Alg BR' BL2'
Alg BR' BL'
Alg B BL B'
Alg B BL2' B'
Alg B BL' B'
Alg BR2' U2 F
Alg BR2' U2 F2
Alg BR2' U2 F2'
Alg BR2' U2 F'
Alg BR2' U2' L
Alg BR2' U2' L2
Alg BR2' U2' L2'
Alg BR2' U' BL2'
Alg BR' BL U
Alg BR' BL U2
Alg BR' BL U2'
Alg BR' BL U'
Alg B BL B' BR
Alg B BL B' BR2
Alg B BL B' BR2'
Alg B BL2' L2' B'
Alg B BL2' L' B'
Alg BR2' U2' L F2
Alg BR2' U2' L F2'
Alg BR2' U2' L F'
Alg BR2 U BR2'
Alg BR2 U2 BR2'
Alg BR2 U2' BR2'
Alg BR2 U' BR2'
Alg BR2' BL BR2
Alg BR2' BL2 BR2
Alg BR2' BL2' BR2
Alg BR R BR' R'
Alg BR2 U BR2' U2'
Alg BR2 U BR2' U'
Alg BR2 U BR2' F
Alg BR2 U BR2' F2
Alg BR2 U BR2' F2'
Alg BR2 U BR2' F'
Alg BR2 U2 BR2' F
Alg BR2 U2 BR2' F2
Alg BR2 U2 BR2' F2'
Alg BR2 U2 BR2' F'
Alg BR2 U2 BR2' L
Alg BR2 U2 BR2' L2
Alg BR2 U2 BR2' L2'
Alg BR2 U2' BL BR2'
Alg BR2 U2' BL2 BR2'
Alg BR2 U2' BL' BR2'
Alg BR2 U2' BR2' L
Alg BR2 U2' BR2' L2'
Alg BR2 U2' BR2' BL2'
Alg BR2 U2' BR2' BL'
Alg BR2 U' BL BR2'
Alg BR2 U' BL2' BR2'
Alg BR2 U' BL' BR2'
Alg BR2' BL BR2 U2
Alg BR2' BL BR2 U2'
Alg BR2' BL BR2 BL2'
Alg BR2' BL BR2 BL'
Alg B BL2 L2' BL2' B'
Alg DR' R2 F R2' DR
Alg BR2 U F' U2' BR2'
Alg BR2 U BR2' U2' BL'
Alg BR2 U2 F U' BR2'
Alg BR2 U2 BR2' L F2'
Alg B' BR B
Alg B' BR2 B
Alg B' BR2' B
Alg B' BR' B
Alg B' BR2 B U
Alg B' BR2 B U2
Alg B' BR2 B U2'
Alg B' BR2 B U'
Alg B' BR2' B BL
Alg B' BR2' B BL2
Alg B' BR2' B BL2'
Alg B' BR2' B BL'
Alg B' BR' B BL
Alg B' BR' B BL2'
Alg B' BR' B BL'
Alg B' BR2 U2' L B
Alg B' BR2 U2' L2 B
Alg B' BR2 U2' L2' B
Alg B' BR2 B U2 F
Alg B' BR2 B U2 F2
Alg B' BR2 B U2 F2'
Alg B' BR2 B U2 F'
Alg B' BR2' B BL U
Alg B' BR2' B BL U2
Alg B' BR2' B BL U2'
Alg B' BR2' B BL U'
Alg B' BR' B BL2' L2'
Alg B' BR' B BL2' L'
Alg BR2 R U R' BR2'
Alg B' BR2 U2' L B F2'
Alg B' BR2 U2' L B F'
Alg B' BR' B BR2 BL BR2'
Alg B' BR2 U R BR' R' B
Alg BR U BR'
Alg BR U2 BR'
Alg BR U2' BR'
Alg BR U' BR'
Alg BR2 BL BR2'
Alg BR2 BL2 BR2'
Alg BR2 BL2' BR2'
Alg BR2 BL' BR2'
Alg R2' F R2
Alg R2' F2 R2
Alg R2' F2' R2
Alg R' U R
Alg R' U2 R
Alg R' U' R
Alg BR U BR' U'
Alg BR U2 BR' F
Alg BR U2' BR' L
Alg BR U2' BR' L2
Alg BR U2' BR' L2'
Alg BR U' BL BR'
Alg BR U' BL2 BR'
Alg BR U' BL2' BR'
Alg BR U' BR' BL'
Alg BR2 BL BR2' U2
Alg BR2 BL BR2' BL'
Alg R2' F2' R2 L
Alg R2' F2' R2 L2
Alg R' U F2 R
Alg R' U F2' R
Alg R' U R F
Alg BR U' BR BL' BR2'
Alg BR U F U' BR'
Alg BR U F2 U' BR'
Alg BR U F2' U' BR'
Alg BR U F' U' BR'
Alg BR U2 L U2' BR'
Alg BR U2 L2 U2' BR'
Alg BR U2 L2' U2' BR'
Alg BR U2' BL U2 BR'
Alg BR U2' BL2 U2 BR'
Alg BR U2' BL2' U2 BR'
Alg BR R' F R BR'
Alg BR R' F2 R BR'
Alg BR R' F' R BR'
Alg BR2 U2' F U2 BR2'
Alg BR2 U2' F2 U2 BR2'
Alg BR2 U' L2 U BR2'
Alg BR2 U' L2' U BR2'
Alg BR2 BL L BL' BR2'
Alg BR2 BL L' BL' BR2'
Alg BR2' BL2' L BL2 BR2
Alg BR2' BL2' L2 BL2 BR2
Alg R2 F2 L F2' R2'
Alg R2 F2 L2 F2' R2'
Alg R2 F2 L2' F2' R2'
Alg R2' U2 BL2' U2' R2
Alg R' U2 F U2' R
Alg R' U2 F2 U2' R
Alg R' U' BL' U R
Alg R' BR BL' BR' R
Alg BR U F' U' BR' U'
Alg BR U2 L' BL2 U2' BR'
Alg BR U2' BL U2 BL2' BR'
Alg BR U2' BL2' U2 BR' BL'
Alg BR R' F R BR' U'
Alg BR2 U' L2 U BR2' F2'
Alg BR2 U' L2 U BR2' F'
Alg BR U F2' U L' U2' BR'
Alg BR U F2' L' F U' BR'
Alg F
Alg F2
Alg F2'
Alg F'
Alg F L
Alg F L2
Alg F L2'
Alg F L'
Alg F2 U
Alg F2 U2
Alg F2 U2'
Alg F2 U'
Alg F L2' BL
Alg F L2' BL2
Alg F L2' BL2'
Alg F L' U
Alg F L' U2
Alg F L' U2'
Alg F L' U'
Alg F2 U L
Alg F2 U L2
Alg F2 U L2'
Alg F2 U L'
Alg F L' U BL2
Alg F L' U BL2'
Alg F L' U BL'
Alg F L' U' F
Alg F L' U' F2
Alg F L' U' F2'
Alg F2 L F2'
Alg F2 L2 F2'
Alg F2 L2' F2'
Alg F2 L' F2'
Alg F2' U2 F2
Alg F2' U2' F2
Alg F2' U' F2
Alg F2 L2 F2' L2'
Alg F2 L2 F2' L'
Alg F2 L2' BL F2'
Alg F2 L2' BL2 F2'
Alg F2 L2' BL2' F2'
Alg F2 L' F2' U
Alg F2 L' F2' U2
Alg F2 L' F2' U2'
Alg F2 L' F2' U'
Alg F2 L' BL F2'
Alg F2 L' BL2 F2'
Alg F2 L' BL2' F2'
Alg F2' U L F2
Alg F2' U L2 F2
Alg F2' U L' F2
Alg F2' U2 F2 U2'
Alg F2' U2 F2 U'
Alg F2' U2 F2 L2
Alg F2' U2 F2 L2'
Alg F2' U2 F2 L'
Alg F2' U2 L F2
Alg F' R' F R
Alg F L2 BL L2' F'
Alg F L2 BL2 L2' F'
Alg F2 L2 F2' L2' U2'
Alg F2 L2' BL' L F2'
Alg F2 L' F U2' F2
Alg F2 L' F' U' F'
Alg FL F FL'
Alg FL F2 FL'
Alg FL F2' FL'
Alg FL F' FL'
Alg FL F FL' L
Alg FL F FL' L2
Alg FL F FL' L2'
Alg FL F FL' L'
Alg FL F2 FL' L
Alg FL F2 FL' L2
Alg FL F2 FL' L2'
Alg FL F2 FL' L'
Alg FL F2' FL' U2
Alg FL F2' FL' U2'
Alg FL F2' FL' U'
Alg F2 U2 L' U2' F2'
Alg F2 U2' L' U2 F2'
Alg F2 U' L' U F2'
Alg FL F FL' L2 BL
Alg FL F FL' L2 BL2
Alg FL F FL' L2 BL2'
Alg FL F2 FL' L2' BL
Alg FL F2 FL' L2' BL2
Alg FL F2 FL' L2' BL2'
Alg FL F2 FL' L' U'
Alg FL F FL' F2' L' F2
Alg F2 U F U L U2' F2'
Alg F2' L F2
Alg F2' L2 F2
Alg F2' L2' F2
Alg F2' L' F2
Alg F' U F
Alg F' U2 F
Alg F' U2' F
Alg F' U' F
Alg R U R'
Alg R U2' R'
Alg R U' R'
Alg F R' F' R
Alg F2' L F2 L'
Alg F2' L2' BL F2
Alg F2' L2' BL2 F2
Alg F2' L2' BL2' F2
Alg F' U F U'
Alg F' U F L
Alg F' U F L2
Alg F' U F L2'
Alg F' U F L'
Alg R U2' R' BL2
Alg R U2' R' BL2'
Alg R U2' R' BL'
Alg F2' L' F U' F
Alg F2 L2 BL L2' F2'
Alg F2 L2 BL2 L2' F2'
Alg F2 L2 BL2' L2' F2'
Alg F2 L2 BL' L2' F2'
Alg F2' U BL U' F2
Alg F2' U BL' U' F2
Alg F2' L' BL L F2
Alg F2' L' BL2 L F2
Alg F2' L' BL2' L F2
Alg F2' L' BL' L F2
Alg F' U2 L U2' F
Alg F' U2 L2 U2' F
Alg F' U2 L2' U2' F
Alg F' U2' BL2 U2 F
Alg R U L U' R'
Alg R U L' U' R'
Alg R F' L F R'
Alg R2 U2' L2 U2 R2'
Alg R2 U' BL2 U R2'
Alg R2 U' BL2' U R2'
Alg R2 U' BL' U R2'
Alg R2 BR BL' BR' R2'
Alg F2 L2 BL2' L2' F2' U2
Alg F2' U BL U' F2 L
Alg F2' U BL' U' F2 L2
Alg F2' U BL' U' F2 L2'
Alg F2' L' BL L F2 U2
Alg F2' L' BL L F2 U2'
Alg F2' L' BL' L F2 U
Alg F2' L' BL' L F2 U2
Alg F' U2 L' U BL2' U2 F
Alg F' U2' BL L' BL2' U2 F
Alg U
Alg U2
Alg U2'
Alg U'
Alg U L
Alg U L2
Alg U L2'
Alg U L'
Alg U2 BL
Alg U2 BL2
Alg U2 BL2'
Alg U2 BL'
Alg U L' BL
Alg U L' BL2
Alg U L' BL2'
Alg U L' BL'
Alg U2 BL L
Alg U2 BL L2
Alg U2 BL L2'
Alg U2 BL L'
Alg U F' L F
Alg U L' BL' U
Alg U L' BL' U2
Alg U2 L U2'
Alg U2 L2 U2'
Alg U2 L2' U2'
Alg U2 L' U2'
Alg U2' BL2 U2
Alg U2' BL2' U2
Alg U2' BL' U2
Alg U2 L2 U2' L2'
Alg U2 L2 U2' L'
Alg U2 L' U2' BL
Alg U2 L' U2' BL2
Alg U2 L' U2' BL2'
Alg U2 L' U2' BL'
Alg U2' BL L U2
Alg U2' BL L2 U2
Alg U2' BL L2' U2
Alg U2' BL L' U2
Alg U2' BL2 U2 L2
Alg U2' BL2 U2 L2'
Alg U2' BL2 U2 L'
Alg U2' BL2 U2 BL2'
Alg U2' BL2 U2 BL'
Alg U2' BL2 L U2
Alg U' BR' U BR
Alg U2 L' U BL2' U2
Alg U2 L2' U2' L2 BL2
Alg U2 L2' U2' L2 BL2'
Alg U2 L' U' BL' U'
Alg U2' BL2 U' L U2'
Alg F U F'
Alg F U2 F'
Alg F U2' F'
Alg F U' F'
Alg F U F' L
Alg F U F' L2
Alg F U F' L2'
Alg F U F' L'
Alg F U2 F' L
Alg F U2 F' L2
Alg F U2 F' L2'
Alg F U2 F' L'
Alg F U2' BL2 F'
Alg F U2' BL2' F'
Alg F U2' BL' F'
Alg U2 BL2 L' BL2' U2'
Alg U2 BL' L' BL U2'
Alg U2 BL2' L' BL2 U2'
Alg F U2 F' L' BL'
Alg F U F' U2' L' U2
Alg U2 L U2 L2' U' BL' U2
Alg U2' L U2
Alg U2' L2 U2
Alg U2' L2' U2
Alg U2' L' U2
Alg U' BL U
Alg U' BL2 U
Alg U' BL2' U
Alg U' BL' U
Alg BR BL BR'
Alg BR BL2' BR'
Alg BR BL' BR'
Alg U BR' U' BR
Alg U2' L U2 L'
Alg U' BL U L
Alg U' BL U L2
Alg U' BL U L2'
Alg U' BL U L'
Alg U' BL U BL'
Alg U2' L' U BL' U
Alg U' BL2 L BL2' U
Alg U' BL2 L2 BL2' U
Alg U' BL2 L2' BL2' U
Alg U' BL2 L' BL2' U
Alg BR U' L U BR'
Alg BR U' L2 U BR'
Alg BR U' L2' U BR'
Alg BR U' L' U BR'
Alg BR BL L BL' BR'
Alg BR BL L' BL' BR'
Alg BR2 BL2' L BL2 BR2'
Alg BR2 BL2' L2 BL2 BR2'
Alg U2' L BL2' L' BL2 U2
Alg U2' L2 F' L2' F U2
Alg U2' L' DL L DL' U2
Alg U2' BL2' L BL2 L' U2
Alg U2' BL2' L2 BL2 L2' U2
Alg U' BL2 L BL2' U BL
Alg U' BL2 L2 BL2' U L
Alg U' BL2 L2 BL2' U BL2'
Alg U' BL2 L2 BL2' U BL'
Alg U' BL2 L2 BL2' L2' U
Alg BR BL L' BL' BR' BL2'
Alg BR BL L' BL' BR' BL'
Alg U' BL U BL U' L2' BL2' U
Alg U' BL2 U' L2 U L' BL2' U
Alg L
Alg L2
Alg L2'
Alg L'
Alg L' BL
Alg L' BL2
Alg L' BL2'
Alg L' BL'
Alg U BL U'
Alg U BL2 U'
Alg U BL2' U'
Alg U BL' U'
Alg U BL U' L
Alg U BL U' L2
Alg U BL U' L2'
Alg U BL U' L'
Alg U BL U' BL'
Alg L2' BL L2
Alg L2' BL2 L2
Alg L2' BL2' L2
Alg L2' BL' L2
Alg L2 DL L2' DL'
Alg L2' BL L2 BL2'
Alg L2' BL L2 BL'
Alg F' L2 BL L2' F
Alg F' L2 BL2 L2' F
Alg F' L2 BL2' L2' F
Alg F' L2 BL' L2' F
Alg L2 DL L' DL' L'
Alg L2' U BL2' U' L2
Alg L2' BL L2' BL2' L'
Alg L2' BL L' BL2' L2'
Alg L2' DL L' DL' L2
Alg L' U' L' U L2
Alg U L' DL L DL' U'
Alg F' L2 BL L2' BL2' F
Alg L2 DL' BL DL2 L2' DL'
Alg L2' U BL2' U' BL L2
Alg L2' BL' U BL' U' L2
Alg L2' BL' L2 U' L' U
Alg U' L U
Alg U' L2 U
Alg U' L2' U
Alg U' L' U
Alg U' L2' U BL
Alg U' L2' U BL2
Alg U' L2' U BL2'
Alg U' L2' U BL'
Alg U' L' U BL
Alg U' L' U BL2
Alg U' L' U BL2'
Alg U' L' U BL'
Alg U' L' U L BL L'
Alg U' L' U L2 BL L2'
Alg U' L' U BL U' L2 U
Alg L2 BL L2'
Alg L2 BL2 L2'
Alg L2 BL2' L2'
Alg L2 BL' L2'
Alg L2 BL L2' BL'
Alg L DL L' DL'
Alg DL L DL' L'
Alg L U' L2 U L2
Alg L DL' BL DL L'
Alg L DL' BL2 DL L'
Alg L DL' BL' DL L'
Alg DL L DL' L' BL'
Alg L2 BL L' DL L' DL'
Alg FL' L BL L' FL
Alg FL' L BL2 L' FL
Alg FL' L BL2' L' FL
Alg FL' L BL' L' FL
Alg FL' DL' BL DL FL
Alg FL' DL' BL2 DL FL
Alg FL' DL' BL2' DL FL
Alg FL' DL' BL' DL FL
Alg L2 BL2' U BL2 U' L2'
Alg FL' L BL L' FL BL2'
Alg FL' L BL' L' FL BL
Alg U' F U BL U' F' U
Alg U' F U BL2 U' F' U
Alg U' F U BL2' U' F' U
Alg F' FL2' DL' BL' DL FL2 F
Alg L2' BL2 L2' BL' L2 BL' L2
Alg DL L DL2' BL' DL2 L' DL'
Alg DL2 FL2' DL2 BL' DL2' FL2 DL2'
Alg FL' L U BL2' U' BL L' FL
Alg FL' L2 U' L' U BL2 L' FL
Alg L BL L'
Alg L BL2 L'
Alg L BL2' L'
Alg L BL' L'
Alg DL' BL DL
Alg DL' BL2 DL
Alg DL' BL2' DL
Alg DL' BL' DL
Alg L BL L' BL'
Alg L' DL L DL'
Alg L BL2 L' DL' BL' DL
Alg L U BL2' U' BL2 L'
Alg L BL2' U BL2 U' L'
Alg DL' B' BL2 B BL2' DL
Alg DL' BL2 B' BL2' B DL
Alg U BL2' DL2' BL2 U' BL2' DL2
Alg B' BL2 L2 BL2' B BL2 L2'
Alg L U BL2' U' BL2 L' BL2'
Alg L U BL2' U' BL2 L' BL'
Alg L BL B BL' L' BL B'
Alg L BL2' U BL2 U' L' BL2
Alg L BL' U BL2 U' BL L'
Alg L BL' U BL2' U' BL L'
Alg L BL' U BL' U' BL L'
Alg L2 BL2 L2' BL' L2 BL' L2'
Alg DL' BL B' BL2' B BL' DL
Alg L BL2' L U2 BR' U' BR U' L2'
Alg L BL2' L BL L' BL L BL2' L2'
Alg BL
Alg BL2
Alg BL2'
Alg BL'
Alg U BR BL2 BR' BL2' U'
Alg B BL DL BL' DL' B'
Alg L' BL2' DL' BL2 DL L
Alg BR B BL B' BL' BR'
Alg U BR BL2 BR' BL2' U' BL2
Alg U BL BR BL' BR' U'
Alg U BR BL BR' BL' U'
Alg U' L' BL2' L BL2 U
Alg B' BR' BL2' BR BL2 B
Alg L BL2 U BL2' U' L'
Alg BR B BL2 B' BL2' BR'
Alg U BL2 U' BL' U BL' U'
Alg B BL DL BL DL' BL2' B'
Alg B BL2 DL BL' DL' BL' B'
Alg B' BL' B BL2' B' BL2' B
Alg U BL U' BL2 U BL2 U' BL2
Alg U BR2 B' BR2' U' BR B BR'
Alg BL2 BR B DL' B DL B2' BR'
Alg B BL2' B2' BR B BR' B BL2 B'
Alg U' BL' L' BL L U BL
Alg B' BL2 B BL B' BL2 B
Alg B' BL2' B BL' B' BL2' B
Alg B' BL' BR' BL' BR BL2 B
Alg B' BL2' BR' BL BR BL B
Alg U' BL' L' BL' L BL2 U BL'
Alg L' BL' L' DL L DL' BL L BL
Alg L U BL U' BL' L'
Alg L BL U BL' U' L'
Alg BR' U' BL' U BL BR
Alg L U2 BR' U' BR U' L'
Alg U BL U2' L U L2' BL L BL2'
Alg U' L2 F' L' F2 U' F' U2 L'
Alg U BR' U' L U BR U' L'
Alg U BR B BR' U' BR B' BR'
Alg U' L U BR' U' L' U BR
Alg B DL' B' BR B DL B' BR'
Alg L' DL' B DL L DL' B' DL
Alg BR B BR' U BR B' BR' U'
Alg BR B DL' B' BR' B DL B'
Alg U BR2' U2 L2 U2' BR2 U2 L2' U2
Alg U2' L2 U2' BR2' U2 L2' U2' BR2 U'
Alg U BL' B' BL U' L U2 BL' B BL U2' L'
Alg U BR' U' L F' L2' U BR U' L2 F L'
Alg U BR U' L U BR' U' L'
Alg U' BL2 B BL2' U BL2 B' BL2'
Alg L U BR U' L' U BR' U'
Alg L BL2' B' BL2 L' BL2' B BL2
Alg U BR' U2 L2 U2' BR U2 L2' U2
Alg L' BL2 L2' F' L2 BL2' L2' F L2'
Alg U BL2' U R U' BL2 U' L U2 R' U2' L'
Alg U BR U' L2 F L' U BR' U' L F' L2'
Alg U L' BL2 L' FL' L BL2' L U' L2' FL L2
Alg U BR2' U R' U2' L U2 R U' BR2 U' L'`);
}

},{"./chunk-27KJGD3S.js":"1TkI5","./chunk-F5WNHV7V.js":"70ozd","./chunk-FE3HTWQK.js":"jNiOS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5xcVJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sgsDataPyraminx", ()=>sgsDataPyraminx
);
parcelHelpers.export(exports, "sgsDataPyraminxFixedOrientation", ()=>sgsDataPyraminxFixedOrientation
);
var _chunk27KJGD3SJs = require("./chunk-27KJGD3S.js");
var _chunkBOKO2BWTJs = require("./chunk-BOKO2BWT.js");
// src/cubing/search/inside/solve/puzzles/pyraminx.sgs.json.ts
var cachedData = null;
async function sgsDataPyraminx() {
    return cachedData ?? (cachedData = uncachedSGSDataPyraminx());
}
async function sgsDataPyraminxFixedOrientation() {
    return {
        ordering: (await sgsDataPyraminx()).ordering.slice(2)
    };
}
async function uncachedSGSDataPyraminx() {
    return _chunk27KJGD3SJs.parseSGS(await _chunkBOKO2BWTJs.puzzles.pyraminx.kpuzzle(), `SubgroupSizes 12 9 12 3 10 3 8 6 2 3 3 3 3

Alg B
Alg B'
Alg y
Alg B y
Alg B' y
Alg y'
Alg B y'
Alg B' y'
Alg BR'
Alg B BR'
Alg B' BR'

Alg L
Alg L'
Alg L F
Alg L' F
Alg F
Alg L F'
Alg L' F'
Alg F'

Alg L B' U L' B
Alg L U L'
Alg L U' L'
Alg L U L' U'
Alg B' U B
Alg B' U' B
Alg B' U' B U
Alg L U' L' R
Alg L U' L' R'
Alg L' R' L
Alg L' R' L R

Alg R
Alg R'

Alg R' U R
Alg R' U' R
Alg R' U R U'
Alg B U B'
Alg B U' B'
Alg R B' R' B
Alg L R L' R U' R
Alg R L R' L'
Alg L' R' U R L

Alg U
Alg U'

Alg R U R' U'
Alg U R U' R'
Alg L' U' L U
Alg U' L' U L
Alg U L R' L' R U'
Alg U' R' L R L' U
Alg L' U' L U' R U' R'

Alg R U' R' U
Alg L' U L U'
Alg U' R U R'
Alg U L' U' L
Alg L R' L' R L' U L U'

Alg L' U L U' L R' L' R

Alg b
Alg b'

Alg l
Alg l'

Alg r
Alg r'

Alg u
Alg u'`);
}

},{"./chunk-27KJGD3S.js":"1TkI5","./chunk-BOKO2BWT.js":"abt9g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3N4Hm":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('fXVdt') + "2x2x2.sgs.json-GQVTWF7L.f8128b05.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('9mtgN')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"exsqI":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('fXVdt') + "444-solver-ZBJQH3QR.b7e53b54.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('fNMzI')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"f40sg":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('fXVdt') + "fto.dynamic-ZH5IVUKX.89c2bee4.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('2WRBq')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"ifZOy":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('fXVdt') + "kilosolver-N6JM5PUY.7beea244.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('fefDv')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"k9lT8":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('fXVdt') + "master_tetraminx-solver-KBQJGW4A.878d352b.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('8bYdf')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"aK1j4":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('fXVdt') + "megaminx.sgs.json-JXXOXGQE.7b3ba2ff.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('gAb1o')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"7XztY":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('fXVdt') + "pyraminx.sgs.json-EHYGSC7B.45d9ae96.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('ecqvm')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"75Xcs":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('fXVdt') + "redi_cube-E5F64NIQ.b0d0dc66.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('lX6GT')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"abwcE":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('fXVdt') + "skewb.sgs.json-F5FL7533.1e28b20e.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('e8ZiK')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"exH4F":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('fXVdt') + "sq1-solver-P3IWWET7.c680e363.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('dVWIy')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}]},["eAxEY"], null, "parcelRequire4b33")

//# sourceMappingURL=search-worker-js-entry-BDMABBZV.7b24fd43.js.map
