// ==UserScript==
// @name         YouTube Minimal on PC
// @version      0.6
// @namespace    http://tampermonkey.net/
// @author       CY Fung
// @license      MIT
// @supportURL   https://github.com/cyfung1031/userscript-supports
// @run-at       document-start
// @match        https://www.youtube.com/*
// @match        https://m.youtube.com/*
// @icon         https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/youtube-minimal.png
// @grant        GM_registerMenuCommand
// @require      https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/YouTube20Minimal20on20PC.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/YouTube20Minimal20on20PC.meta.js
// ==/UserScript==
"use strict";!function(){function e(){return location.href.replace(/(?<=[&?])(persist_app|app)=\w+(&|$)/g,"").replace(/[?&]$/,"")}function t(t,o,u){GM_registerMenuCommand(t,function(){if(m){let t=e();t=u?t.replace("https://www.youtube.com/","https://m.youtube.com/"):t.replace("https://m.youtube.com/","https://www.youtube.com/"),Cookies.set("userjs-ym-url",t,{domain:"youtube.com",secure:!0})}location.replace(o)})}let o=Cookies.get("userjs-ym-url",{domain:"youtube.com",secure:!0});if(o)return Cookies.remove("userjs-ym-url",{domain:"youtube.com",secure:!0}),u=o,p="app="+("w"===o.charAt(8)?"desktop":"m"),"string"==typeof u&&(u+=(u.indexOf("?")>0?"&":"?")+p),o=u,void location.replace(o);var u,p;let s=e()||"",r=s.charAt(8)||"",c="w"===r,i="m"===r,m=!1;(s.indexOf(".youtube.com/watch")>=0||s.endsWith("youtube.com/"))&&(m=!0),c?(t("Switch to YouTube Mobile persistently","https://m.youtube.com/?persist_app=1&app=m",!0),t("Switch to YouTube Moble temporarily","https://m.youtube.com/?persist_app=0&app=m",!0)):i&&(t("Switch to YouTube Dekstop persistently","http://www.youtube.com/?persist_app=1&app=desktop",!1),t("Switch to YouTube Dekstop temporarily","http://www.youtube.com/?persist_app=0&app=desktop",!1)),t=null}();