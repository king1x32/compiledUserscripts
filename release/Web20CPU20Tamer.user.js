// ==UserScript==
// @name                Web CPU Tamer
// @namespace           http://tampermonkey.net/
// @version             2025.101.7
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
// @allFrames           true


// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Web20CPU20Tamer.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Web20CPU20Tamer.meta.js
// ==/UserScript==
(e=>{"use strict";function t(){y!==f&&(y=f,b=1+(7&b),d.data=1&b?"++WebCPUTamer++":"--WebCPUTamer--")}const[n,o,i,r,c,a]=e,u=queueMicrotask,m="object"==typeof window.wrappedJSObject?window.wrappedJSObject:"object"==typeof unsafeWindow?unsafeWindow:this instanceof Window?this:window,s="nzsxclvflluv";if(m[s])throw new Error("Duplicated Userscript Calling");m[s]=!0;const l=(async()=>{})().constructor;let f,w=()=>{};const p=()=>f=new l(e=>{w=e});p();const d=document.createComment("--WebCPUTamer--");let T,b=0,y=null;if("function"==typeof DocumentTimeline)T=new DocumentTimeline;else if("function"==typeof Animation){let e=Animation,t=document.documentElement;t&&(t=t.animate(null),"object"==typeof(t||0)&&"_animation"in t&&t.constructor===Object&&(t=t._animation),"object"==typeof(t||0)&&"timeline"in t&&"function"==typeof t.constructor&&(e=t.constructor)),T=(new e).timeline}T&&Number.isFinite(T.currentTime||null)||(T=new class{constructor(){this.startTime=performance.timeOrigin||performance.now()}get currentTime(){return performance.now()-this.startTime}});const h=T;new MutationObserver(()=>{w(),p()}).observe(d,{characterData:!0});const j=new Set,v=new Set,A=async e=>(j.add(e),y!==f&&u(t),await f,y!==f&&u(t),await f,j.delete(e)),F=e=>{u(()=>{throw e})},I=2**-26;if(setTimeout=function(e,t,...o){let i;const r="function"==typeof e?(...t)=>{A(i).then(n=>{n&&e(...t)}).catch(F)}:e;return t>=1&&(t-=I),i=n(r,t,...o),i},setInterval=function(e,t,...n){let i;const r="function"==typeof e?(...t)=>{A(i).then(n=>{n&&e(...t)}).catch(F)}:e;return t>=1&&(t-=I),i=o(r,t,...n),i},clearTimeout=function(e){return j.delete(e),r(e)},clearInterval=function(e){return j.delete(e),c(e)},requestAnimationFrame=function(e){let n;const o=f;return y!==f&&u(t),n=i(t=>{const i=h.currentTime;(async(e,t)=>(v.add(e),await t,v.delete(e)))(n,o).then(n=>{n&&e(t+(h.currentTime-i))}).catch(F)}),n},cancelAnimationFrame=function(e){return v.delete(e),a(e)},"object"==typeof window.wrappedJSObject&&"object"==typeof unsafeWindow&&"function"==typeof exportFunction||"object"==typeof GM&&"content"===((GM||0).info||0).injectInto){const e=(e,t)=>{"function"==typeof exportFunction?exportFunction(e,m,{defineAs:t,allowCrossOriginArguments:!0}):m[t]=e};e(setTimeout,"setTimeout"),e(setInterval,"setInterval"),e(requestAnimationFrame,"requestAnimationFrame"),e(clearTimeout,"clearTimeout"),e(clearInterval,"clearInterval"),e(cancelAnimationFrame,"cancelAnimationFrame"),e(()=>1,`webCPUTamer_${Math.floor(314159265359*Math.random()+314159265359).toString(36)}`)}})([setTimeout,setInterval,requestAnimationFrame,clearTimeout,clearInterval,cancelAnimationFrame]);