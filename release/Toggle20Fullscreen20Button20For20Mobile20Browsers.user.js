// ==UserScript==
// @name        Toggle Fullscreen Button For Mobile Browsers
// @namespace   Toggle Fullscreen Button For Mobile Browsers Scripts
// @include       http*://*/*
// @grant       none
// @version     1.5
// @author      -
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Toggle20Fullscreen20Button20For20Mobile20Browsers.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Toggle20Fullscreen20Button20For20Mobile20Browsers.meta.js
// ==/UserScript==
!function(){function e(){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT),this.parentNode.style.display="none"}function n(n){var t=document.createElement("div"),l=document.createElement("button");t.style.position="fixed",t.style.opacity="0",t.style.zIndex="999999",t.style.left=(n.clientX-20).toString()+"px",t.style.top=(n.clientY-10).toString()+"px",l.innerHTML="Fullscreen",l.addEventListener("click",e),t.appendChild(l),document.body.appendChild(t)}window.addEventListener("dblclick",function(e){n(e)}),window.addEventListener("touchstart",t=>{3==t.touches.length&&(e(),n(t))})}();