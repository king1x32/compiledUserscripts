// ==UserScript==
// @name           Facebook & Instagram - Chặn "Đã xem" Story
// @name:en        Facebook & Instagram - Block "Seen" Story
// @namespace      http://tampermonkey.net/
// @version        2025.08.15
// @author         King1x32
// @match          https://*.facebook.com/*
// @match          https://*.messenger.com/*
// @match          https://*.instagram.com/*
// @grant          unsafeWindow
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_registerMenuCommand
// @run-at         document-start
// @license        MIT
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Facebook2020Instagram2020ChE1BAB7n2022C490C3A320xem2220Story.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Facebook2020Instagram2020ChE1BAB7n2022C490C3A320xem2220Story.meta.js
// ==/UserScript==
!function(){"use strict";function n(){t={blockFbStorySeen:GM_getValue("blockFbStorySeen",!0),blockInstaStorySeen:GM_getValue("blockInstaStorySeen",!0)}}let t={};n(),function(){const o=(o,e)=>{const r=t[o];GM_registerMenuCommand(`${r?"✅":"❌"} ${e}`,()=>{!function(t,o){GM_setValue(t,o),n()}(o,!r),alert(`Đã ${r?"tắt":"bật"} tính năng "${e}".\nVui lòng tải lại trang để áp dụng thay đổi.`),location.reload()})};o("blockFbStorySeen",'Chặn "Đã xem" Story Facebook'),o("blockInstaStorySeen",'Chặn "Đã xem" Story Instagram')}();const o=[],e=[],r=[];let s=!1;try{!function({onBeforeOpen:n,onBeforeSend:t,onAfterSend:c}={}){s||(function(){const n=unsafeWindow.XMLHttpRequest;unsafeWindow.XMLHttpRequest=new Proxy(n,{construct(n,t){const s=new n(...t);let c;const i=s.open;s.open=async function(n,t,e,r,s){c={method:n,url:t,async:e,user:r,password:s};for(const{fn:n}of o)try{const t=await(n?.(c));if(t&&(c=t),null===t)return}catch(n){console.error("Userscript Error in onBeforeOpenXHR:",n)}return i.apply(this,[c.method,c.url,c.async,c.user,c.password])};const a=s.send;return s.send=async function(n){for(const{fn:t}of e)try{const o=await(t?.(c,n));if(void 0!==o&&(n=o),null===n)return}catch(n){console.error("Userscript Error in onBeforeSendXHR:",n)}return s.addEventListener("load",function(){for(const{fn:t}of r)try{t?.(c,n,s.response)}catch(n){console.error("Userscript Error in onAfterSendXHR:",n)}}),a.apply(this,arguments)},s}})}(),s=!0),function(n=[]){const t=[];for(const{fn:o,arr:e}of n){if("function"!=typeof o||!Array.isArray(e))continue;const n=Math.random().toString(36).slice(2);e.push({fn:o,id:n}),t.push(()=>{const t=e.findIndex(t=>t.id===n);-1!==t&&e.splice(t,1)})}}([{fn:n,arr:o},{fn:t,arr:e},{fn:c,arr:r}])}({onBeforeSend:(n,o)=>{if("POST"!==n.method)return o;const e=o?.toString?.();return e?t.blockFbStorySeen&&e.includes("storiesUpdateSeenStateMutation")?(console.log("ĐÃ CHẶN YÊU CẦU 'ĐÃ XEM' STORY FACEBOOK (theo cài đặt)."),null):t.blockInstaStorySeen&&(e.includes("viewSeenAt")||e.includes("SeenMutation"))?(console.log("ĐÃ CHẶN YÊU CẦU 'ĐÃ XEM' STORY INSTAGRAM (theo cài đặt)."),null):o:o}})}catch(n){console.error("Userscript đã gặp lỗi:",n)}}();