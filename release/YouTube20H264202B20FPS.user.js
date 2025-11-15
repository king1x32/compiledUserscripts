// ==UserScript==
// @name YouTube H.264 + FPS
// @namespace https://www.youtube.com
// @version 2023.11.20.2
// @match *://*.youtube.com/*
// @match *://*.youtube-nocookie.com/*
// @match *://*.youtubekids.com/*
// @license MIT
// @grant none
// @run-at document-start
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/YouTube20H264202B20FPS.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/YouTube20H264202B20FPS.meta.js
// ==/UserScript==
const e=/webm|vp8|vp9|av01/i,t=/framerate=(\d+)/;!function(){const r=window.MediaSource;if(!r)return;const n=r.isTypeSupported.bind(r);r.isTypeSupported=r=>{if("string"!=typeof r)return!1;if(e.test(r))return!1;const i=t.exec(r);return!(i&&i[1]>30)&&n(r)}}();