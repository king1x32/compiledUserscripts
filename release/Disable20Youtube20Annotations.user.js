// ==UserScript==
// @name     Disable Youtube Annotations
// @version  1
// @match    https://www.youtube.com/*
// @namespace https://greasyfork.org/users/396494
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Disable20Youtube20Annotations.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Disable20Youtube20Annotations.meta.js
// ==/UserScript==
var e,t,c,l;setInterval(()=>{e||(e=document.getElementsByClassName("ytp-settings-button")[0])&&(e.click(),e.click(),t=document.getElementsByClassName("ytp-menuitem")[1],c=!0,l=!1,t.onclick=()=>{l?l=!1:c^=!0})},1e3),setInterval(()=>{c&&"true"===t.getAttribute("aria-checked")&&(l=!0,t.click())},1e3);