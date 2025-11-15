// ==UserScript==
// @name         Prev Next Page on Screen
// @namespace    Violentmonkey Scripts
// @version      1.0
// @author       king1x32
// @match        https://voz.vn/*
// @grant        none
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Prev20Next20Page20on20Screen.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Prev20Next20Page20on20Screen.meta.js
// ==/UserScript==
!function(){"use strict";window.addEventListener("load",function(){const t=document.querySelector(".block-outer-main");if(t){const o=t.cloneNode(!0);Object.assign(o.style,{position:"fixed",bottom:"25px",left:"50%",transform:"translateX(-50%)",width:"auto",zIndex:"2147483647",backgroundColor:"transparent"}),document.body.appendChild(o)}})}();