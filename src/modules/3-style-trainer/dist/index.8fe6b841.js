function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=t.parcelRequire4b33;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return r[e]=s,t.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequire4b33=s),s.register("aCV2N",(function(e,t){s("27Lyk").register(JSON.parse('{"8hzZ2":"index.8fe6b841.js","fUYHb":"3d-dynamic-DKWMBHRS.b79bc10d.js","adU6T":"index.b9099a78.js"}'))})),s.register("6N6jP",(function(t,r){e(t.exports,"StaleDropper",(()=>l)),e(t.exports,"TwistyPropSource",(()=>S)),e(t.exports,"SimpleTwistyPropSource",(()=>P)),e(t.exports,"NO_VALUE",(()=>W)),e(t.exports,"TwistyPropDerived",(()=>R)),e(t.exports,"FreshListenerManager",(()=>O)),e(t.exports,"experimentalStickerings",(()=>V)),e(t.exports,"StickeringProp",(()=>F)),e(t.exports,"hintFaceletStyles",(()=>C)),e(t.exports,"HintFaceletProp",(()=>D)),e(t.exports,"TAU",(()=>T)),e(t.exports,"DEGREES_PER_RADIAN",(()=>U)),e(t.exports,"proxy3D",(()=>j)),e(t.exports,"THREEJS",(()=>N));var i=s("cks0r"),a=class extends Promise{constructor(e){super((e=>{e()})),this._executor=e}static from(e){return new a((t=>{t(e())}))}static resolve(e){return new a((t=>{t(e)}))}static reject(e){return new a(((t,r)=>{r(e)}))}then(e,t){return this._promise=this._promise||new Promise(this._executor),this._promise.then(e,t)}catch(e){return this._promise=this._promise||new Promise(this._executor),this._promise.catch(e)}};function n(e){return new a((t=>{t(e())}))}var o,p;new WeakMap,new WeakMap;var l=class{constructor(){i.__privateAdd(this,o,0),i.__privateAdd(this,p,0)}queue(e){return new Promise((async(t,r)=>{try{const r=++i.__privateWrapper(this,o)._,s=await e;r>i.__privateGet(this,p)&&(i.__privateSet(this,p,r),t(s))}catch(e){r(e)}}))}};o=new WeakMap,p=new WeakMap;var _,c,u,h,d,v,f,m,w,x=0,L=class{constructor(){i.__privateAdd(this,u),i.__privateAdd(this,v),i.__privateAdd(this,_,new Set),this.lastSourceGeneration=0,i.__privateAdd(this,c,new Set),i.__privateAdd(this,d,!1),i.__privateAdd(this,m,new Map)}canReuse(e,t){return e===t||this.canReuseValue(e,t)}canReuseValue(e,t){return!1}debugGetChildren(){return Array.from(i.__privateGet(this,_).values())}addChild(e){i.__privateGet(this,_).add(e)}removeChild(e){i.__privateGet(this,_).delete(e)}markStale(e){if(e.detail.generation!==x)throw new Error("A TwistyProp was marked stale too late!");if(this.lastSourceGeneration!==e.detail.generation){this.lastSourceGeneration=e.detail.generation;for(const t of i.__privateGet(this,_))t.markStale(e);i.__privateMethod(this,u,h).call(this)}}addRawListener(e,t){i.__privateGet(this,c).add(e),t?.initial&&e()}removeRawListener(e){i.__privateGet(this,c).delete(e)}addFreshListener(e){const t=new l;let r=null;const s=async()=>{const i=await t.queue(this.get());null!==r&&this.canReuse(r,i)||(r=i,e(i))};i.__privateGet(this,m).set(e,s),this.addRawListener(s,{initial:!0})}removeFreshListener(e){this.removeRawListener(i.__privateGet(this,m).get(e)),i.__privateGet(this,m).delete(e)}};_=new WeakMap,c=new WeakMap,u=new WeakSet,h=function(){i.__privateGet(this,d)||(i.__privateSet(this,d,!0),setTimeout((()=>i.__privateMethod(this,v,f).call(this)),0))},d=new WeakMap,v=new WeakSet,f=function(){if(!i.__privateGet(this,d))throw new Error("Invalid dispatch state!");for(const e of i.__privateGet(this,c))e();i.__privateSet(this,d,!1)},m=new WeakMap;var S=class extends L{constructor(e){super(),i.__privateAdd(this,w,void 0),i.__privateSet(this,w,n((()=>this.getDefaultValue()))),e&&i.__privateSet(this,w,this.deriveFromPromiseOrValue(e,i.__privateGet(this,w)))}set(e){i.__privateSet(this,w,this.deriveFromPromiseOrValue(e,i.__privateGet(this,w)));const t={sourceProp:this,value:i.__privateGet(this,w),generation:++x};this.markStale(new CustomEvent("stale",{detail:t}))}async get(){return i.__privateGet(this,w)}async deriveFromPromiseOrValue(e,t){return this.derive(await e,t)}};w=new WeakMap;var g,G,y,k,b,A,E,M,P=class extends S{derive(e){return e}},W=Symbol("no value"),R=class extends L{constructor(e,t){super(),this.userVisibleErrorTracker=t,i.__privateAdd(this,k),i.__privateAdd(this,A),i.__privateAdd(this,g,void 0),i.__privateAdd(this,G,null),i.__privateAdd(this,y,null),i.__privateSet(this,g,e);for(const t of Object.values(e))t.addChild(this)}async get(){const e=this.lastSourceGeneration;if(i.__privateGet(this,y)?.generation===e)return i.__privateGet(this,y).output;const t={generation:e,output:i.__privateMethod(this,A,E).call(this,i.__privateMethod(this,k,b).call(this),e,i.__privateGet(this,G))};return i.__privateSet(this,y,t),this.userVisibleErrorTracker?.reset(),t.output}};g=new WeakMap,G=new WeakMap,y=new WeakMap,k=new WeakSet,b=async function(){const e={};for(const[t,r]of Object.entries(i.__privateGet(this,g)))e[t]=r.get();const t={};for(const r in i.__privateGet(this,g))t[r]=await e[r];return t},A=new WeakSet,E=async function(e,t,r=null){const s=await e,a=e=>(i.__privateSet(this,G,{inputs:s,output:Promise.resolve(e),generation:t}),e);if(!r)return a(await this.derive(s));const n=r.inputs;for(const e in i.__privateGet(this,g)){if(!i.__privateGet(this,g)[e].canReuse(s[e],n[e]))return a(await this.derive(s))}return r.output};var O=class{constructor(){i.__privateAdd(this,M,[])}addListener(e,t){let r=!1;const s=e=>{r||t(e)};e.addFreshListener(s),i.__privateGet(this,M).push((()=>{e.removeFreshListener(s),r=!0}))}addMultiListener(e,t){let r=!1,s=e.length-1;const a=async i=>{if(s>0)return void s--;if(r)return;const a=e.map((e=>e.get())),n=await Promise.all(a);t(n)};for(const t of e)t.addFreshListener(a);i.__privateGet(this,M).push((()=>{for(const t of e)t.removeFreshListener(a);r=!0}))}disconnect(){for(const e of i.__privateGet(this,M))e()}};M=new WeakMap;var V={full:!0,"centers-only":!0,PLL:!0,CLS:!0,OLL:!0,COLL:!0,OCLL:!0,CLL:!0,ELL:!0,ELS:!0,LL:!0,F2L:!0,ZBLL:!0,ZBLS:!0,WVLS:!0,VLS:!0,LS:!0,EO:!0,EOline:!0,EOcross:!0,CMLL:!0,L6E:!0,L6EO:!0,Daisy:!0,Cross:!0,"2x2x2":!0,"2x2x3":!0,"Void Cube":!0,invisible:!0,picture:!0,"experimental-centers-U":!0,"experimental-centers-U-D":!0,"experimental-centers-U-L-D":!0,"experimental-centers-U-L-B-D":!0,"experimental-centers":!0,"experimental-fto-fc":!0,"experimental-fto-f2t":!0,"experimental-fto-sc":!0,"experimental-fto-l2c":!0,"experimental-fto-lbt":!0,"experimental-fto-l3t":!0,"experimental-global-custom-1":!0,"experimental-global-custom-2":!0},F=class extends P{getDefaultValue(){return"full"}},C={floating:!0,none:!0},D=class extends P{getDefaultValue(){return"auto"}},T=2*Math.PI,U=360/T,H=null;async function j(){return H??(H=s("d6JGV"))}var N=n((async()=>(await j()).T3I))})),s.register("d6JGV",(function(e,t){e.exports=Promise.all([import("./"+s("27Lyk").resolve("adU6T")),import("./"+s("27Lyk").resolve("8hzZ2")),import("./"+s("27Lyk").resolve("fUYHb"))]).then((()=>s("f36qW")))})),s("aCV2N");
//# sourceMappingURL=index.8fe6b841.js.map
