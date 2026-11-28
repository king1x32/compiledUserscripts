// ==UserScript==
// @name        Enhanced Bing ChatAI
// @namespace   EnhancedBingChatAI
// @version     1.4.2
// @author      CriDos
// @grant       GM_setClipboard
// @match       https://*.bing.com/*
// @match       https://copilot.microsoft.com/*
// @license     MIT
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Enhanced20Bing20ChatAI.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Enhanced20Bing20ChatAI.meta.js
// ==/UserScript==
function t(t,e){let o=[];return function t(n){n.shadowRoot?(n.shadowRoot.querySelectorAll(e).forEach(t=>{o.push(t)}),n.shadowRoot.childNodes.forEach(e=>{t(e)})):n.childNodes.forEach(e=>{t(e)})}(t),o}async function e(t){await new Promise(e=>setTimeout(e,t))}window.addEventListener("wheel",t=>{t.target.className.includes("cib-serp-main")&&t.stopPropagation()}),(async()=>{const o=1e5;for(;;)try{const e=t(document.body,"#searchbox");for(let n=0;n<e.length;n++){let c=e[n];if(c.maxLength<o){console.log("Fixing input character limit to "+o),c.maxLength=o;const e=t(document.body,".letter-counter");e.length>0&&(e[0].children[0].nextSibling.nextSibling.textContent=o)}}}catch(t){console.error(t)}finally{await e(1e3)}})();