// ==UserScript==
// @name                Youtube dual subtitle
// @version             2.1
// @author              Coink & jk278
// @namespace           https://github.com/jk278/youtube-dual-subtitle
// @match               *://www.youtube.com/*
// @match               *://m.youtube.com/*
// @require             https://unpkg.com/ajax-hook@latest/dist/ajaxhook.min.js
// @grant               none
// @run-at              document-start
// @icon                https://www.youtube.com/s/desktop/b9bfb983/img/favicon_32x32.png
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Youtube20E58F8CE8AFADE5AD97E5B995E585A8E5B9B3E58FB0.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Youtube20E58F8CE8AFADE5AD97E5B995E585A8E5B9B3E58FB0.meta.js
// ==/UserScript==
!function(){"use strict";function e(){ah.proxy({onRequest:(e,s)=>{s.next(e)},onResponse:(e,t)=>{if(e.config.url.includes("/api/timedtext")&&!e.config.url.includes("&translate_h00ked")){let t=new XMLHttpRequest,n=e.config.url.replace(/(^|[&?])tlang=[^&]*/g,"");n=`${n}&tlang=${s}&translate_h00ked`,t.open("GET",n,!1),t.send();let o=null;if(e.response){const s=JSON.parse(e.response);s.events&&(o=s)}const f=JSON.parse(t.response);let r=!0;for(const e of o.events)if(e.segs&&e.segs.length>1){r=!1;break}if(r){for(let e=0,s=o.events.length;e<s;e++){const s=o.events[e];if(!s.segs)continue;const t=f.events[e];`${s.segs[0].utf8}`.trim()!==`${t.segs[0].utf8}`.trim()&&(s.segs[0].utf8+="\n"+t.segs[0].utf8)}e.response=JSON.stringify(o)}else{let s=f.events.filter(e=>1!==e.aAppend&&e.segs);for(const e of o.events){if(!e.segs)continue;let t=e.tStartMs,n=t+e.dDurationMs,o=s.filter(e=>t<=e.tStartMs&&e.tStartMs<n),f="";for(const e of o){for(const s of e.segs)f+=s.utf8;f+="\ufeff"}let r="";for(const s of e.segs)r+=s.utf8;e.segs[0].utf8=r+"\n"+f,e.segs=[e.segs[0]]}e.response=JSON.stringify(o)}}t.resolve(e)}})}const s=navigator.language.split("-")[0]||"en";"complete"===document.readyState?e():window.addEventListener("load",e)}();