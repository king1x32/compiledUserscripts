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
!function(e){"use strict";const t=(async()=>{})().constructor,n=[];let o=0;const r=new Set,c="function"==typeof WeakRef?e=>e?new WeakRef(e):null:e=>e||null,s=e=>e&&e.deref?e.deref():e;!function(i,l){let u;try{u=new Function("return [window];")()[0]}catch(f){}const a=u||e;if("function"==typeof(((a||0).navigator||0).locks||0).request&&(a.navigator.locks.query=function(){return i.log(arguments),new t(()=>{})},a.navigator.locks.request=function(){return i.log(arguments),new t(()=>{})}),"IDBFactory"===(((a||0).indexedDB||0).constructor||0).name){const d=Symbol(),h=Symbol(),g=Symbol(),m=new WeakMap;let p=0;const w=[];let y=0;const v=e=>{w.push(e)};async function b(){if(o){o=0;for(const e of[...r.values()])try{let t=e.result,n=t.name;t.close(),t=null,p--,v({databaseId:n,action:"close",time:Date.now()})}catch(e){}r.clear();for(const e of n){let[t,n,o,r]=e;e.length=0;let c=s(t);t=null,c.close(),c=null,p--,v({databaseId:n,action:"close",time:Date.now()})}n.length=0,0===p&&w.length>0&&(y>0&&(clearTimeout(y),y=0),y=setTimeout(()=>{if(y=0,0===p&&w.length>0){let e=[...w];w.length=0,e.sort((e,t)=>e.databaseId.localeCompare(t.databaseId)||e.time-t.time),l.dir(e)}},300))}}function D(e,t,r,s){o>0&&clearTimeout(o),n.push([c(e),t,r,s]),o=setTimeout(b,18e3)}function I(e,t,o){return function(c){e.call(this,arguments);const s=(c||0).target;r.delete(s)&&(D(s.result,t,o,c.type),i.log("releaseOnIdle",n.length,t))}}function k(e){return function(t,n){if(2===arguments.length&&"error"===t||"success"===t){let o=m.get(n);return o||(o=I(n,e,t),m.set(n,o)),this[d](t,o)}return this[d](...arguments)}}function T(){return function(e){const t=this[g](e);return t[d]=t.addEventListener,t.addEventListener=k(e),t[h]=t.removeEventListener,t.removeEventListener=function(e,t){if(2===arguments.length&&"error"===e||"success"===e){const n=m.get(t);return this[h](e,n||t)}return this[h](...arguments)},p++,r.add(t),o>0&&clearTimeout(o),o=setTimeout(b,18e3),v({databaseId:e,action:"open",time:Date.now()}),t}}a.indexedDB.constructor.prototype[g]=a.indexedDB.constructor.prototype.open,a.indexedDB.constructor.prototype.open=T()}}(Object.assign({},console,{log:function(){}}),console)}(this instanceof Window?this:self instanceof Window?self:window);