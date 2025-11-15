// ==UserScript==
// @name         Auto Click Cloudflare CAPTCHA
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @author       Zaw (based on NWater)
// @match        https://challenges.cloudflare.com/cdn-cgi/challenge-platform/*
// @grant        none
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Auto20Click20Cloudflare20CAPTCHA.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Auto20Click20Cloudflare20CAPTCHA.meta.js
// ==/UserScript==
!function(){"use strict";function t(t,e=2e4){return new Promise((o,c)=>{const a=Date.now(),n=setInterval(()=>{const l=document.querySelector(t);l&&null!==l.offsetParent&&!l.disabled?(clearInterval(n),o(l)):Date.now()-a>e&&(clearInterval(n),c("Timeout waiting for "+t))},300)})}async function e(){try{console.log("[AutoCaptcha] Waiting for checkbox..."),(await t("input[type='checkbox']")).click(),console.log("[AutoCaptcha] Checkbox clicked."),(await t("span.mark")).click(),console.log("[AutoCaptcha] Mark clicked.")}catch(t){console.warn("[AutoCaptcha] Failed:",t)}}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()}();