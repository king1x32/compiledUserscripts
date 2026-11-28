// ==UserScript==
// @name        Reject serviceWorker Auto
// @namespace   rejectserviceWorkerAuto
// @match       *://*/*
// @run-at      document-start
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_registerMenuCommand
// @version     1.3
// @author      -
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Reject20serviceWorker20Auto.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Reject20serviceWorker20Auto.meta.js
// ==/UserScript==
function e(){!1===n&&(navigator.serviceWorker&&(navigator.serviceWorker.register=()=>new Promise((e,n)=>n("This method is not allowed!"))),n=!0)}var n,o,t="none",a="rejectserviceWorkerAuto",i="autoinject"+a,r=GM_getValue("value"+a+document.domain,t);console.log(r),n=!1,o=[];try{o=JSON.parse(GM_getValue(i,"[]")),"number"==typeof r&&(GM_registerMenuCommand("+",function(){var e=GM_getValue("value"+a+document.domain,t);GM_setValue("value"+a+document.domain,e+1)}),GM_registerMenuCommand("-",function(){var e=GM_getValue("value"+a+document.domain,t);GM_setValue("value"+a+document.domain,e-1)})),o.includes(location.hostname)?(GM_registerMenuCommand("Inject "+a,e),GM_registerMenuCommand("Auto-Inject on "+location.hostname,function(){var e=o.indexOf(location.hostname);e>-1&&(o.splice(e,1),GM_setValue(i,JSON.stringify(o)))})):(e(),n=!0,GM_registerMenuCommand("Stop Auto-Injecting "+a,function(){o.push(location.hostname),GM_setValue(i,JSON.stringify(o))}))}catch(e){console.log("Error adding Inject menu items: "+a),console.log(e)}