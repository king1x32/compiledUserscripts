// ==UserScript==
// @name        PreventPageVisibilityAuto
// @namespace   PreventPageVisibilityAuto
// @match       *://*/*
// @run-at      document-start
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_registerMenuCommand
// @version     1.1
// @author      -
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/PreventPageVisibilityAuto.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/PreventPageVisibilityAuto.meta.js
// ==/UserScript==
function e(){if(!1!==n)return;let e=["visibilitychange","webkitvisibilitychange","mozvisibilitychange","hasFocus","blur","focus","mouseleave"];for(event_name of e)document.addEventListener(event_name,function(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()},!0);for(event_name of e)window.addEventListener(event_name,function(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()},!0);document.hasFocus=function(){return!0},document.onvisibilitychange=null,Object.defineProperty(document,"visibilityState",{value:"visible"}),Object.defineProperty(document,"hidden",{value:!1}),Object.defineProperty(document,"mozHidden",{value:!1}),Object.defineProperty(document,"webkitHidden",{value:!1}),Object.defineProperty(document,"webkitVisibilityState",{value:"visible"}),n=!0}var n,t,o="none",i="PreventPageVisibilityAuto",a="autoinject"+i,u=GM_getValue("value"+i+document.domain,o);console.log(u),n=!1,t=[];try{t=JSON.parse(GM_getValue(a,"[]")),"number"==typeof u&&(GM_registerMenuCommand("+",function(){var e=GM_getValue("value"+i+document.domain,o);GM_setValue("value"+i+document.domain,e+1)}),GM_registerMenuCommand("-",function(){var e=GM_getValue("value"+i+document.domain,o);GM_setValue("value"+i+document.domain,e-1)})),GM_registerMenuCommand("Set "+i,function(){var e=window.prompt("Enter "+i+document.domain+" value",o);if(null==(e=parseInt(e)))return!1;GM_setValue("value"+i+document.domain,e)}),t.includes(location.hostname)?(e(),n=!0,GM_registerMenuCommand("Stop Auto-Injecting "+i,function(){var e=t.indexOf(location.hostname);e>-1&&(t.splice(e,1),GM_setValue(a,JSON.stringify(t)))})):(GM_registerMenuCommand("Inject "+i,e),GM_registerMenuCommand("Auto-Inject on "+location.hostname,function(){t.push(location.hostname),GM_setValue(a,JSON.stringify(t))}))}catch(e){console.log("Error adding Inject menu items: "+i),console.log(e)}