// ==UserScript==
// @name        Visited Lite
// @namespace   iFantz7E.VisitedLite
// @version     0.23
// @include     http*
// @icon        https://addons.cdn.mozilla.net/user-media/addon_icons/359/359581-64.png
// @run-at      document-start
// @grant       none
// @copyright	2015, 7-elephant
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Visited20Lite.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Visited20Lite.meta.js
// ==/UserScript==
!function(){var e;const t="visited-lite-7e-style";e=function(){var e=document.documentURI,n="";n+=" a:visited, a:visited * { color: %COLOR% !important; } ".replace(/%COLOR%/gi,"LightCoral"),function(e,t){var n,i,l,d,o=e.split(",");for(n=0;n<o.length;n++)if(0!=(l=i=o[n].replace(/\s/gi,"")).indexOf(".")&&0!=l.indexOf("/")&&(l="."+l),0!=(d=i).indexOf("://")&&(d="://"+d),""!=i&&(t.indexOf(l)>-1||t.indexOf(d)>-1))return!0;return!1}("mail.live.com,",e)||function(e){var n,i,l=document.getElementById(t);null==l&&null!=(n=document.getElementsByTagName("head"))&&n.length>0&&(i=n[0],null!=(l=document.createElement("style"))&&(l.setAttribute("id",t),l.setAttribute("type","text/css"),i.appendChild(l))),null!=l&&(l.textContent=String(e))}(n)},document.addEventListener("DOMContentLoaded",function(){e()})}();