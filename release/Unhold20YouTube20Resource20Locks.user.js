// ==UserScript==
// @name                Unhold YouTube Resource Locks
// @name:en             Unhold YouTube Resource Locks
// @namespace           http://tampermonkey.net/
// @version             2024.03.27.0
// @license             MIT License
// @author              CY Fung
// @match               https://www.youtube.com/*
// @match               https://www.youtube.com/embed/*
// @match               https://www.youtube-nocookie.com/embed/*
// @exclude             https://www.youtube.com/live_chat*
// @exclude             https://www.youtube.com/live_chat_replay*
// @match               https://music.youtube.com/*
// @match               https://m.youtube.com/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/youtube-unlock-indexedDB.png
// @supportURL          https://github.com/cyfung1031/userscript-supports

// @compatible          edge
// @compatible          chrome
// @compatible          firefox
// @compatible          opera

// @run-at              document-start
// @grant               none
// @unwrap
// @allFrames           true
// @inject-into         page
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Unhold20YouTube20Resource20Locks.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Unhold20YouTube20Resource20Locks.meta.js
// ==/UserScript==
!function(e){"use strict";const t=(async()=>{})().constructor,n=[];let o=0;const r=new Set,c="function"==typeof WeakRef?e=>e?new WeakRef(e):null:e=>e||null;!function(s,i){let l;try{l=new Function("return [window];")()[0]}catch(u){}const a=l||e;if("function"==typeof(((a||0).navigator||0).locks||0).request&&(a.navigator.locks.query=function(){return s.log(arguments),new t((()=>{}))},a.navigator.locks.request=function(){return s.log(arguments),new t((()=>{}))}),"IDBFactory"===(((a||0).indexedDB||0).constructor||0).name){const f=Symbol(),d=Symbol(),h=Symbol(),g=new WeakMap;let m=0;const p=[];let w=0;const y=e=>{p.push(e)};async function v(){if(o){o=0;for(const e of[...r.values()])try{let t=e.result,n=t.name;t.close(),t=null,m--,y({databaseId:n,action:"close",time:Date.now()})}catch(e){}r.clear();for(const t of n){let[n,o,r,c]=t;t.length=0;let s=(e=n)&&e.deref?e.deref():e;n=null,s.close(),s=null,m--,y({databaseId:o,action:"close",time:Date.now()})}var e;n.length=0,0===m&&p.length>0&&(w>0&&(clearTimeout(w),w=0),w=setTimeout((()=>{if(w=0,0===m&&p.length>0){let e=[...p];p.length=0,e.sort(((e,t)=>e.databaseId.localeCompare(t.databaseId)||e.time-t.time)),i.dir(e)}}),300))}}function b(e,t,r,s){o>0&&clearTimeout(o),n.push([c(e),t,r,s]),o=setTimeout(v,18e3)}function D(e,t,o){return function(c){e.call(this,arguments);const i=(c||0).target;r.delete(i)&&(b(i.result,t,o,c.type),s.log("releaseOnIdle",n.length,t))}}function I(e){return function(t,n){if(2===arguments.length&&"error"===t||"success"===t){let o=g.get(n);return o||(o=D(n,e,t),g.set(n,o)),this[f](t,o)}return this[f](...arguments)}}function k(){return function(e){const t=this[h](e);return t[f]=t.addEventListener,t.addEventListener=I(e),t[d]=t.removeEventListener,t.removeEventListener=function(e,t){if(2===arguments.length&&"error"===e||"success"===e){const n=g.get(t);return this[d](e,n||t)}return this[d](...arguments)},m++,r.add(t),o>0&&clearTimeout(o),o=setTimeout(v,18e3),y({databaseId:e,action:"open",time:Date.now()}),t}}a.indexedDB.constructor.prototype[h]=a.indexedDB.constructor.prototype.open,a.indexedDB.constructor.prototype.open=k()}}(Object.assign({},console,{log:function(){}}),console)}(this instanceof Window?this:self instanceof Window?self:window);