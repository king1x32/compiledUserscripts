// ==UserScript==
// @name         Auto Click "I'm not a robot"
// @namespace    http://tampermonkey.net/
// @version      0.9
// @author       JJJ
// @match        *://*/*
// @icon         https://pngimg.com/uploads/robot/robot_PNG96.png
// @grant        none
// @license      MIT
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Auto20Click2022I27m20not20a20robot22.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Auto20Click2022I27m20not20a20robot22.meta.js
// ==/UserScript==
!function(){"use strict";function e(e){return null===e.offsetParent}function t(){new MutationObserver(e=>{for(const t of e)"childList"===t.type&&t.addedNodes.length>0&&s.solve()}).observe(document.body,{childList:!0,subtree:!0})}function c(){s.solve(),setInterval(()=>{s.solve()},1e3)}const o="aria-checked",n={findCheckboxElement:()=>document.querySelector(".recaptcha-checkbox-border")||document.querySelector('[role="checkbox"][aria-labelledby="recaptcha-anchor-label"]')||document.querySelector("#checkbox"),solve(){const t=this.findCheckboxElement();t&&!e(t)&&"true"!==t.getAttribute(o)&&t.click()}},l={findCallbackFunction(){if("undefined"!=typeof ___grecaptcha_cfg){const e=Object.keys(___grecaptcha_cfg.clients).filter(e=>"load"!==e);for(const t of e){const e=___grecaptcha_cfg.clients[t];if(e&&"function"==typeof e.hl?.l?.callback)return e.hl.l.callback}}return null},solve(){const e=this.findCallbackFunction();"function"==typeof e&&e()}},r={findEnterpriseCheckboxElement:()=>document.querySelector(".enterprise-checkbox")||document.querySelector('[aria-labelledby="recaptcha-accessible-status"]'),solve(){const t=this.findEnterpriseCheckboxElement();t&&!e(t)&&"true"!==t.getAttribute(o)&&t.click()}},a={findCheckboxElement:()=>document.querySelector(".hcaptcha-checkbox")||document.querySelector('[aria-labelledby="hcaptcha-anchor-label"]'),solve(){const t=this.findCheckboxElement();t&&!e(t)&&"true"!==t.getAttribute(o)&&t.click()}},s={solve(){n.solve(),l.solve(),r.solve(),a.solve()}};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",()=>{t(),c()}):(t(),c());const i=navigator.userAgent.toLowerCase(),u=["chrome","edg","brave","firefox"].some(e=>i.includes(e));console.log(u?"Running on a compatible browser":"Running on an unsupported browser")}();