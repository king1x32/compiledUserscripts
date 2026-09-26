// ==UserScript==
// @name     Cobalt Tools Video Downloader
// @version  1.0.3
// @author       yodaluca23
// @license      GNU GPLv3
// @grant    GM_registerMenuCommand
// @grant     GM_openInTab
// @run-at   document-idle
// @inject-into content
// @match *://*cobalt.tools/*
// @match *://*.bilibili.com/*
// @match *://app.bsky.social/*
// @match *://www.dailymotion.com/*
// @match *://*.facebook.com/*
// @match *://fb.watch/*
// @match *://*.instagram.com/*
// @match *://ddinstagram.com/*
// @match *://www.loom.com/*
// @match *://ok.ru/*
// @match *://www.pinterest.com/*
// @match *://*.reddit.com/*
// @match *://rutube.ru/*
// @match *://*.snapchat.com/*
// @match *://soundcloud.com/*
// @match *://streamable.com/*
// @match *://*.tiktok.com/*
// @match *://*.tumblr.com/*
// @match *://*.twitch.tv/*
// @match *://twitter.com/*
// @match *://mobile.twitter.com/*
// @match *://x.com/*
// @match *://vxtwitter.com/*
// @match *://fixvx.com/*
// @match *://vine.co/*
// @match *://vimeo.com/*
// @match *://*.vk.com/*
// @match *://www.youtube.com/*
// @match *://music.youtube.com/*
// @match *://m.youtube.com/*
// @match *://*.xiaohongshu.com/*
// @match *://*.xhslink.com/*
// @namespace https://greasyfork.org/users/1315976
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Cobalt20Tools20Video20Downloader.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Cobalt20Tools20Video20Downloader.meta.js
// ==/UserScript==
window.location.href.includes("cobalt.tools")&&setTimeout(()=>{new Promise(e=>{const o=setInterval(()=>{const t=document.querySelector("#input-icons");t&&!t.className.includes("loading")&&(clearInterval(o),e())},100)}).then(()=>{window.document.getElementById("link-area").value.length>5&&(document.getElementById("download-button").click(),new Promise(e=>{const o=setInterval(()=>{document.querySelector("#button-save-download")&&(clearInterval(o),e())},100)}).then(()=>{document.querySelector("#button-save-download").click(),setTimeout(()=>{window.close()},1e3)}))})},2e3),GM_registerMenuCommand("Download this video with Cobalt Tools",function(){GM_openInTab("https://cobalt.tools/#"+window.location.href,!0),alert("Loading, please wait... \nOpening cobalt tools website and automating download actions.")});