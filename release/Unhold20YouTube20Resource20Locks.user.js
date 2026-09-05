// ==UserScript==
// @name                Unhold YouTube Resource Locks
// @name:en             Unhold YouTube Resource Locks
// @namespace           http://tampermonkey.net/
// @version             2026.05.09.0
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
!function(e){"use strict";const t=(async()=>{})().constructor,n=[];let o=0;const c=new Set,s="function"==typeof WeakRef?e=>e?new WeakRef(e):null:e=>e||null,r=e=>e&&e.deref?e.deref():e;!function(i,l){let u;try{u=document.documentElement.getRootNode().defaultView}catch(d){}const a=u||e;if("function"==typeof(((a||0).navigator||0).locks||0).request&&(a.navigator.locks.query=function(){return i.log(arguments),new t(()=>{})},a.navigator.locks.request=function(){return i.log(arguments),new t(()=>{})}),"IDBFactory"===(((a||0).indexedDB||0).constructor||0).name){const f=Symbol(),m=Symbol(),g=Symbol(),h=new WeakMap;let p=0;const y=[];let w=0;const v=e=>{y.push(e)};async function b(){if(o){o=0;for(const e of[...c.values()])try{let t=e.result,n=t.name;t.close(),t=null,p--,v({databaseId:n,action:"close",time:Date.now()})}catch(e){}c.clear();for(const e of n){let[t,n,o,c]=e;e.length=0;let s=r(t);t=null,s&&(s.close(),s=null),p--,v({databaseId:n,action:"close",time:Date.now()})}n.length=0,0===p&&y.length>0&&(w>0&&(clearTimeout(w),w=0),w=setTimeout(()=>{if(w=0,0===p&&y.length>0){let e=[...y];y.length=0,e.sort((e,t)=>e.databaseId.localeCompare(t.databaseId)||e.time-t.time),l.dir(e)}},300))}}function D(e,t,c,r){o>0&&clearTimeout(o),n.push([s(e),t,c,r]),o=setTimeout(b,18e3)}function I(e,t,o){return function(s){e.call(this,arguments);const r=(s||0).target;c.delete(r)&&(D(r.result,t,o,s.type),i.log("releaseOnIdle",n.length,t))}}function k(e){return function(t,n,...o){if(2===arguments.length&&("error"===t||"success"===t)){let o=h.get(n);return o||(o=I(n,e,t),h.set(n,o)),this[f](t,o)}return this[f](t,n,...o)}}function T(){return function(e,t){const n=this[g](e,t);return n[f]=n.addEventListener,n.addEventListener=k(e),n[m]=n.removeEventListener,n.removeEventListener=function(e,t){if(2===arguments.length&&("error"===e||"success"===e)){const n=h.get(t);return this[m](e,n||t)}return this[m](...arguments)},p++,c.add(n),o>0&&clearTimeout(o),o=setTimeout(b,18e3),v({databaseId:e,action:"open",time:Date.now()}),n}}a.indexedDB.constructor.prototype[g]=a.indexedDB.constructor.prototype.open,a.indexedDB.constructor.prototype.open=T()}}(Object.assign({},console,{log:function(){}}),console)}(this instanceof Window?this:self instanceof Window?self:window);