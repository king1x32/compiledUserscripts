// ==UserScript==
// @name                Web CPU Tamer
// @namespace           http://tampermonkey.net/
// @version             2026.100.0
// @license             MIT License
// @author              CY Fung
// @match               https://*/*
// @match               http://*/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/7b34986ad9cdf3af8766e54b0aecb394b036e970/icons/web-cpu-tamer.svg
// @supportURL          https://github.com/cyfung1031/userscript-supports

// @run-at              document-start
// @inject-into         auto
// @grant               none
// @unwrap
// @allFrames           true


// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Web20CPU20Tamer.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Web20CPU20Tamer.meta.js
// ==/UserScript==
(e=>{"use strict";function t(){T!==f&&(T=f,y=1+(7&y),w.data=1&y?"++WebCPUTamer++":"--WebCPUTamer--")}const[n,o,i,r,c,a]=e,u=queueMicrotask,s="object"==typeof window.wrappedJSObject?window.wrappedJSObject:"object"==typeof unsafeWindow?unsafeWindow:this instanceof Window?this:window,l="nzsxclvflluv";if(s[l])throw new Error("Duplicated Userscript Calling");s[l]=!0;const m=(async()=>{})().constructor;let f,d=()=>{};const p=()=>f=new m(e=>{d=e});p();const w=document.createComment("--WebCPUTamer--");let h,y=0,T=null;if("function"==typeof DocumentTimeline)h=new DocumentTimeline;else if("function"==typeof Animation){let e=Animation,t=document.documentElement;try{t&&(t=t.animate(null),"object"==typeof(t||0)&&"_animation"in t&&t.constructor===Object&&(t=t._animation),"object"==typeof(t||0)&&"timeline"in t&&"function"==typeof t.constructor&&(e=t.constructor)),h=(new e).timeline}catch(e){}}h&&Number.isFinite(h.currentTime||null)||(h=new class{constructor(){this.startTime=performance.timeOrigin||performance.now()}get currentTime(){return performance.now()-this.startTime}});const b=h;let{port1:j,port2:v}=new MessageChannel;j.onmessage=()=>{d(),p()};const A=v.postMessage.bind(v);j=v=null;let F=new MutationObserver(()=>A(!0));F.observe(w,{characterData:!0}),F=null;const g=new Set,I=new Set;g.add=I.add=Set.prototype.add,g.delete=I.delete=Set.prototype.delete;const C=async e=>{g.add(e),T!==f&&u(t),await f,T!==f&&u(t),await f},M=e=>{u(()=>{throw e})},S=2**-26,O=Reflect.apply;if(setTimeout=function(e,t,...o){if("function"!=typeof e)return O(n,this,arguments);let i,r=+t;return r>=1&&(r-=-S),i=n(function(...t){const n=this;C(i).then(()=>{g.delete(i)&&O(e,n,t)}).catch(M)},r,...o),i},setInterval=function(e,t,...n){if("function"!=typeof e)return O(o,this,arguments);let i,r=+t;return r>=1&&(r-=-S),i=o(function(...t){const n=this;C(i).then(()=>{g.delete(i)&&O(e,n,t)}).catch(M)},r,...n),i},clearTimeout=function(e){return g.delete(e),r(e)},clearInterval=function(e){return g.delete(e),c(e)},requestAnimationFrame=function(e){if("function"!=typeof e)return O(i,this,arguments);let n;const o=f;return T!==f&&u(t),n=i(function(t){const i=arguments,r=this,c=b.currentTime;(async(e,t)=>{I.add(e),await t})(n,o).then(()=>{i[0]=i[0]-(c-b.currentTime)||i[0],I.delete(n)&&O(e,r,i)}).catch(M)}),n},cancelAnimationFrame=function(e){return I.delete(e),a(e)},"object"==typeof window.wrappedJSObject&&"object"==typeof unsafeWindow&&"function"==typeof exportFunction||"object"==typeof GM&&"content"===((GM||0).info||0).injectInto){const e=(e,t)=>{"function"==typeof exportFunction?exportFunction(e,s,{defineAs:t,allowCrossOriginArguments:!0}):s[t]=e};e(setTimeout,"setTimeout"),e(setInterval,"setInterval"),e(requestAnimationFrame,"requestAnimationFrame"),e(clearTimeout,"clearTimeout"),e(clearInterval,"clearInterval"),e(cancelAnimationFrame,"cancelAnimationFrame"),e(()=>1,`webCPUTamer_${Math.floor(314159265359*Math.random()+314159265359).toString(36)}`)}})([setTimeout,setInterval,requestAnimationFrame,clearTimeout,clearInterval,cancelAnimationFrame]);