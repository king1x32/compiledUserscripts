// ==UserScript==
// @name         Anti Anti-debugger
// @namespace    https://greasyfork.org/en/users/670188-hacker09?sort=daily_installs
// @version      4
// @author       hacker09
// @include      *
// @grant        unsafeWindow
// @run-at       document-start
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Anti20Antidebugger.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Anti20Antidebugger.meta.js
// ==/UserScript==
(function(){var n,o=setInterval(function(){unsafeWindow.console.clear=()=>{}},0);window.onload=function(){clearInterval(o)},null===location.href.match(/vidstream.pro|mcloud.to/)&&(n=unsafeWindow.Function.prototype.constructor,unsafeWindow.Function.prototype.constructor=function(o){var t,e,r=o;return r&&r.includes("debugger")?(t=Function.prototype.constructor.caller,e=t.toString(),"string"==typeof e&&e.includes("debugger")&&(e=e.replace(/\bdebugger\b/gi,""),eval("caller = "+e)),function(){}):n.apply(this,arguments)})})();