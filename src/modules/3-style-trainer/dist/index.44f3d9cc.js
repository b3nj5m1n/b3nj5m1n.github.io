function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},F=t.parcelRequire4b33;null==F&&((F=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var F={id:e,exports:{}};return r[e]=F,t.call(F.exports,F,F.exports),F.exports}var D=new Error("Cannot find module '"+e+"'");throw D.code="MODULE_NOT_FOUND",D}).register=function(e,t){n[e]=t},t.parcelRequire4b33=F),F.register("jrUBV",(function(e,t){F("27Lyk").register(JSON.parse('{"30J38":"index.44f3d9cc.js","bDe2m":"3x3x3-min2phase-FPRJ5PCJ.68ac9f68.js"}'))})),F.register("80rC8",(function(t,r){e(t.exports,"randomUIntBelowFactory",(()=>D)),e(t.exports,"randomChoiceFactory",(()=>a)),e(t.exports,"randomPermute",(()=>R));var n=null;var F=9007199254740992;async function D(){const e=await async function(){return globalThis?.crypto?.getRandomValues?crypto.getRandomValues.bind(crypto):(await(n??(n=import("cr-yp-to".replace(/-/g,""))))).webcrypto.getRandomValues}(),t=r=>{!function(e){if("number"!=typeof e||e<0||Math.floor(e)!==e)throw new Error("randomInt.below() not called with a positive integer value.");if(e>F)throw new Error(`Called randomInt.below() with max == ${e}, which is larger than JavaScript can handle with integer precision.`)}(r);const n=function(e){const t=new Uint32Array(2);e(t);const r=t[0],n=t[1];return Math.floor(2097152*r)+Math.floor(n/2048)}(e);return n<Math.floor(F/r)*r?n%r:t(r)};return t}async function a(){const e=await D();return t=>t[e(t.length)]}var o=D();async function R(e){for(let t=1;t<e.length;t++){const r=(await o)(t);[e[t],e[r]]=[e[r],e[t]]}}})),F.register("cKpk8",(function(t,r){e(t.exports,"countMoves",(()=>R)),e(t.exports,"countAnimatedLeaves",(()=>B));var n=F("98KNc"),D=class extends n.TraversalUp{constructor(e){super(),this.metric=e}traverseAlg(e){let t=0;for(const r of e.units())t+=this.traverseUnit(r);return t}traverseGrouping(e){const t=e.alg;return this.traverseAlg(t)*Math.abs(e.amount)}traverseMove(e){return this.metric(e)}traverseCommutator(e){return 2*(this.traverseAlg(e.A)+this.traverseAlg(e.B))}traverseConjugate(e){return 2*this.traverseAlg(e.A)+this.traverseAlg(e.B)}traversePause(e){return 0}traverseNewline(e){return 0}traverseLineComment(e){return 0}};function a(e){return"A"<=e&&e<="Z"}var o=new D((function(e){const t=e.family;return a(t[0])&&"v"===t[t.length-1]||"x"===t||"y"===t||"z"===t||"T"===t?0:1})),R=o.traverseAlg.bind(o),i=new D((function(e){const t=e.family;return a(t[0])&&"v"===t[t.length-1]||"x"===t||"y"===t||"z"===t||"T"===t?0:Math.abs(e.amount)})),s=(i.traverseAlg.bind(i),new class extends n.TraversalUp{traverseAlg(e){let t=0;for(const r of e.units())t+=this.traverseUnit(r);return t}traverseGrouping(e){return this.traverseAlg(e.alg)*Math.abs(e.amount)}traverseMove(e){return 1}traverseCommutator(e){return 2*(this.traverseAlg(e.A)+this.traverseAlg(e.B))}traverseConjugate(e){return 2*this.traverseAlg(e.A)+this.traverseAlg(e.B)}traversePause(e){return 1}traverseNewline(e){return 0}traverseLineComment(e){return 0}}),B=s.traverseAlg.bind(s)})),F.register("fHk7b",(function(t,r){e(t.exports,"setIsInsideWorker",(()=>i)),e(t.exports,"mustBeInsideWorker",(()=>s)),e(t.exports,"addOrientationSuffix",(()=>B)),e(t.exports,"solve333",(()=>w)),e(t.exports,"random333Scramble",(()=>h)),e(t.exports,"initialize333",(()=>A)),e(t.exports,"random333OrientedScramble",(()=>y)),e(t.exports,"random333FewestMovesScramble",(()=>S));var n=F("80rC8"),D=F("71WRK"),a=F("dKxIg"),o=F("98KNc"),R=!1;function i(e){R=e}function s(){if(!R)throw new Error("Must be called from inside a worker, to avoid impact on page performance. Try importing from the top level of `cubing/solve`?")}async function B(e,t){const r=new o.AlgBuilder;r.experimentalPushAlg(e);for(const e of t){const t=(await n.randomChoiceFactory())(e);null!==t&&r.push(o.Move.fromString(t))}return r.toAlg()}var L="UF UR UB UL DF DR DB DL FR FL BR BL".split(" "),l="UFR URB UBL ULF DRF DFL DLB DBR".split(" "),U="U L F R B D".split(" "),u=[[1,2,0],[0,2,0],[1,1,0],[0,3,0],[2,0,0],[0,1,0],[1,3,0],[0,0,0],[1,0,0],[1,0,2],[0,1,1],[1,1,1],[0,8,1],[2,3,0],[0,10,1],[1,4,1],[0,5,1],[1,7,2],[1,3,2],[0,0,1],[1,0,1],[0,9,0],[2,2,0],[0,8,0],[1,5,1],[0,4,1],[1,4,2],[1,5,0],[0,4,0],[1,4,0],[0,7,0],[2,5,0],[0,5,0],[1,6,0],[0,6,0],[1,7,0],[1,2,2],[0,3,1],[1,3,1],[0,11,1],[2,1,0],[0,9,1],[1,6,1],[0,7,1],[1,5,2],[1,1,2],[0,2,1],[1,2,1],[0,10,0],[2,4,0],[0,11,0],[1,7,1],[0,6,1],[1,6,2]];function c(e,t){return e.slice(t)+e.slice(0,t)}function f(e){const t=function(e){const t=[[],[]];for(let t=0;t<6;t++)if(e.stateData.CENTERS.pieces[t]!==t)throw new Error("non-oriented puzzles are not supported");for(let r=0;r<12;r++)t[0].push(c(L[e.stateData.EDGES.pieces[r]],e.stateData.EDGES.orientation[r]));for(let r=0;r<8;r++)t[1].push(c(l[e.stateData.CORNERS.pieces[r]],e.stateData.CORNERS.orientation[r]));return t.push(U),t}(e);return u.map((([e,r,n])=>t[e][r][n])).join("")}function p(e,t){const r=new a.KState(e.kpuzzle,{EDGES:e.stateData.EDGES,CORNERS:e.stateData.CORNERS,CENTERS:{pieces:e.stateData.CENTERS.pieces,orientation:new Array(6).fill(0)}}).experimentalToTransformation(),n=new a.KState(t.kpuzzle,{EDGES:t.stateData.EDGES,CORNERS:t.stateData.CORNERS,CENTERS:{pieces:t.stateData.CENTERS.pieces,orientation:new Array(6).fill(0)}}).experimentalToTransformation();return r.isIdentical(n)}var v=[["R U'","R2 B","D2 B2","D' L B'","R' U'","B","D B2","R' B","L' U","L2 B'","B2","D L B'","L U","B'","U'","R B","D' B2","L B'","U2","U L' B'","","U' L' B'","U","L' B'"],["F2 L2","F' L'","R' F L2","D' L2","F L2","F2 L'","R' F' L'","R2 F L2","R2 F2 L'","L2","F L'","D' L","D2 L2","R2 F' L'","D L","","L2 F L'","L F' L2","L F L'","F' L2","L'","D L2","D F L'","L"],["R B U2 B'","R2 B U' B'","F2 B U B'","F B2 L' B2","B2 L B2","B U' B'","R2 B U2 B'","R' B U' B'","B2 L' B2","F B U B'","B2 U' B2","B' L B","L F' B D' B'","B' U' B2 D B'","B U2 B'","R B U' B'","B2 L2 B2","D' B' L B","B U B'","F' B2 L' B2","","B2 L' B' U' B'"],["U F2 L2 U'","F' U L' U'","F2 U L' U'","U F L2 U'","U2 B2 U2","R' U' B U","D2 U L U'","D U2 B' U2","U L2 U'","F U L' U'","D U L U'","U2 B' U2","","U2 B' U' L' U'","U2 L' U2","U' B U","U L U'","D' U2 B' U2","U L' U'","U2 B U2"],["R' D' F2","F'","F2","D R F'","R D' F2","R2 F'","D' F2","R F'","F2 R' D' F2","F","D2 F2","D' R F'","R2 D' F2","R' F'","D F2","D2 R F'","","F R' D' F2"],["R' D2 F' D F","R F2 R2 F2","R2 F' D2 F","F' R2 D2 F","L D' L'","D F' D2 F","F2 R2 F2","R F' D2 F","F' R2 D' F","F' R' D2 F","F2 R' F2","L D L'","F' R D' F","F2 R F2","F' D2 F","","L D2 R D' L'","F' D2 F' R F2","D2 R2 F2 R2 F2","D F' D' F","F' D F"],["U F2 U'","R U F' U'","D R U F2 U'","U F U'","R2 U F2 U'","R' U F' U'","R U F2 U'","R2 U F' U'","","U L D L' F U'","F2 D' R D F2","D2 U F U'","R' U F2 U'","U F' U'","F2 D2 R D2 F2","D U F U'"],["R2","R' B' D B","D R'","F' R2 F","","R B' D B","R'","B' D B","D' R'","D2 F' R2 F","R","R2 B' D B","D2 R'","B' D' B"],["R2 D' R2","F' R' F R","R D' R2 D R'","D2 R2 D2 R2","R' D' F' R F","U F D F' U'","","R2 D2 B R' B' R'","R' F D' F2 R F","R2 D R2","F2 U F U' F","R' D F' R F","D R2 D2 R2","U F D' F' U'","D R' D2 F' R F","R2 D2 R2","U F D2 F' U'","R' D2 F' R F"],["B R B'","F D F' B R2 B'","D B R2 B'","D2 B R' B'","B R2 B'","D B R' B'","D' B R2 B'","B R' B'","","B R2 B' D B R' B'","D2 B R2 B'","D' B R' B'"],["","R' D R F D2 F'","R' D R","D F D' F'","R F' R' F","F D' F'","R' D' R","F D2 F'","R' D2 R","F D F'"],["","F2 D2 R F' R' D2 F' D2 F'","F2 D2 F' D' F D' F' D2 F'","F2 D F2 D F2 D2 F2","D2 F L D2 L' D2 F'","D F D2 L D2 L' F'","R' D B' D2 B D' R","R' D2 B' D2 B R","F D2 F' D F D F'","F D' L D2 L' D F'","B D' F D B' D' F'","F D2 L D2 L' F'","F D' L D L' D F'","F L D2 L' D2 F'","R' B' D2 B D2 R"],["D'","F L D L' D' F'","D2","L B D B' D' L'","D","B' L' D' L D B","","D F L D L' D' F'"],["F' D2 F D F' D F","F' D' R' D R F","F' R' D' R D F","B D R D' R' B'","","D B' D' L' D L B"],["D F D F' D F D2 F'","F' U2 B' R' B U2 F' L F' L' F'","","D2 L D L2 F L F2 D F"],["L B' L' F L B L' F'","F2 U F' D2 F U' F' D2 F'","D' F' D B D' F D B'","F L2 F R2 F' L2 F R2 F2","D B D' F' D B' D' F","R F L F' R' F L' F'","","D2 B L' U2 L B' D2 B L' U2 L B'","D2 F R' U2 R F' D2 F R' U2 R F'","R F L' F' R' F L F'","D F D' B' D F' D' B","L2 F2 L' B2 L F2 L' B2 L'"],["L B R' B' L' B R B'","R' B R F' R' B' R F","L D2 L U L' D2 L U' L2","","D2 B' D2 F D' L2 F L2 F' D2 B D' F'","D2 F' R' F R2 B' D2 B D2 R' F D2 F'","L B L' F L B' L' F'","F' D2 F' U' F D2 F' U F2","D' B' D F D' B D F'"],["","D2 F' L U2 L' F D2 F' L U2 L' F","D2 B' R U2 R' B D2 B' R U2 R' B"]];async function g(){const e=await D.puzzles["3x3x3"].kpuzzle();let t=e.startState();for(const e of v)t=t.applyAlg(o.Alg.fromString((await n.randomChoiceFactory())(e)));return function(e,t){if(p(e.startState(),t))return!1;for(const r of"ULFRBD")for(let n=1;n<4;n++)if(p(e.moveToTransformation(new o.Move(r,n)).toKState(),t))return!1;return!0}(e,t)?t:g()}var m=null;function d(){return m??(m=F("eR6PT"))}async function w(e){return s(),o.Alg.fromString((await d()).solveState(f(e)))}async function h(){return w(await g())}async function A(){(await d()).initialize()}var x=[[null,"Rw","Rw2","Rw'","Fw","Fw'"],[null,"Dw","Dw2","Dw'"]];async function y(){return B(await h(),x)}var E=new o.Alg("R' U' F");async function S(){const e=new o.AlgBuilder,t=await h();return e.experimentalPushAlg(E),e.experimentalPushAlg(t),e.experimentalPushAlg(E),e.toAlg()}})),F.register("eR6PT",(function(e,t){e.exports=import("./"+F("27Lyk").resolve("bDe2m")).then((()=>F("7i0aL")))})),F("jrUBV");
//# sourceMappingURL=index.44f3d9cc.js.map
