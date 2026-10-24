// ==UserScript==
// @name         Youtube H.264 (updated 2020)
// @namespace    http://www.youtube.com
// @version      1.1.2
// @match        *://youtube.com/*
// @match        *://*.youtube.com/*
// @grant        none
// @run-at       document-start
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Youtube20H2642028updated20202029.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Youtube20H2642028updated20202029.meta.js
// ==/UserScript==
var e,n,i,d;i=document.createElement("video"),d=i.canPlayType.bind(i),i.__proto__.canPlayType=function(e){return void 0===e||-1!=e.indexOf("webm")||-1!=e.indexOf("vp8")||-1!=e.indexOf("vp9")||-1!==e.indexOf("av01")?"":d(e)},e=window.MediaSource,n=e.isTypeSupported.bind(e),e.isTypeSupported=function(e){return void 0===e||-1!=e.indexOf("webm")||-1!=e.indexOf("vp8")||-1!=e.indexOf("vp9")||-1!==e.indexOf("av01")?"":n(e)};