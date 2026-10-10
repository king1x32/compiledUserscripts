// ==UserScript==
// @name        Lazyloadfier Userscript
// @namespace   Lazyloadfier Userscript - Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @run-at      document-start
// @author      -
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Lazyloadfier20Userscript.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Lazyloadfier20Userscript.meta.js
// ==/UserScript==
function t(t){return g.has(t.tagName)&&function(t){const e=t.getBoundingClientRect();return e.bottom<0||e.top>innerHeight||e.left<0||e.right>innerWidth}(t)&&"lazy"!=t.loading}function e(t){const e=n(t,"src"),i=n(t,a),s=n(t,c),A=new IntersectionObserver((n,A)=>function(t,e,n,i){const s=t[0];s&&s.intersectionRatio>0&&(function(t,e){o(t,r,e.src),m.has(t.tagName)&&o(t,a,e.srcset),E.has(t.tagName)&&o(t,c,e.poster)}(e,i),n.disconnect())}(n,t,A,{src:e,srcset:i,poster:s}),{rootMargin:"100% 0px 100% 0px"});A.observe(t.tagName==d?t.parentElement:t)}function n(t,e){const n=t[e];if(n)return t[e]=M.get(t.tagName),n}function o(t,e,n){t[e]==M.get(t.tagName)&&(n?t[e]=n:(t.removeAttribute(e),0===t.readyState&&t.load()))}const r="src",a="srcset",c="poster",i="IMG",s="VIDEO",A="AUDIO",d="SOURCE",u="IFRAME",f="FRAME",l="EMBED",g=new Set([i,s,A,d,u,f,l]),m=new Set([i,d]),E=new Set([s]),h=Array.from(g).join(","),p="data:,",w="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",b="data:text/plain,",M=new Map([[s,p],[A,p],[d,w],[i,w],[u,b],[f,b],[l,b]]),O={childList:!0,subtree:!0};!function(){function n(){!function(t,e){e.id&&clearTimeout(e.id),e.id=setTimeout(()=>t.disconnect(),2500)}(r,o)}const o={},r=new MutationObserver(o=>function(n,o){const r=function(e){const n=[];return e.forEach(e=>{const o=new Set(e.addedNodes);o.forEach(t=>{t.querySelectorAll&&t.querySelectorAll(h).forEach(t=>o.add(t))}),n.splice(0,0,...Array.from(o).filter(t))}),n}(n);r.length&&(r.forEach(e),o(r))}(o,n));r.observe(document,O),addEventListener("DOMContentLoaded",n)}();