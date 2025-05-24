// ==UserScript==
// @name                ChatGPT Infinity ∞
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @version             2025.5.22.3
// @license             MIT
// @icon                https://assets.chatgptinfinity.com/images/icons/infinity-symbol/circled/with-robot/icon48.png?v=8df6f33
// @icon64              https://assets.chatgptinfinity.com/images/icons/infinity-symbol/circled/with-robot/icon64.png?v=8df6f33
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          opera
// @compatible          brave
// @compatible          vivaldi
// @compatible          waterfox
// @compatible          librewolf
// @compatible          ghost
// @compatible          qq
// @compatible          whale
// @match               *://chatgpt.com/*
// @match               *://github.com/*/chatgpt-infinity*
// @connect             cdn.jsdelivr.net
// @connect             gm.chatgptinfinity.com
// @connect             raw.githubusercontent.com
// @require             https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.8.1/dist/chatgpt.min.js#sha256-/71AK4V0/J40zINYEriMeEWGIZ8qfyWMQu76ui3SBNs=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@09e04e0/chromium/extension/components/modals.js#sha256-hN+jB/TqMnrCM7EB3LuKIodb9M4604pfLWr+d3Qp/VI=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@ef34f3a/chromium/extension/components/toggles.js#sha256-dn1I3yd/2OKvgy2hNH/BYwGUcsv8de2epfj0HH0x9j4=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@62b5899/chromium/extension/lib/browser.js#sha256-7teBecqrjkazKH6oetGyxKlBkAk5U9ota/LNCB3Q+Jw=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@6fec365/chromium/extension/lib/dom.js#sha256-/X4gSHYxumIYhBjDK8WHUirB6wDwxfwJUI0MEVpCAcw=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@3372987/chromium/extension/lib/infinity.js#sha256-MN1pC8s+N3Rqqj+2TmKB3Q3DyjNMmFSmdZD/4FusqyE=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@2c83d1a/chromium/extension/lib/settings.js#sha256-RRtMNemejRgn2pn3OGZdrTFH/kYsiGVwvm2vts317+s=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@fdb7c91/chromium/extension/lib/styles.js#sha256-MTt9alQNJ4jyuFB+Lt6K/D1kLGwIvfgu5WJ628ZJ03s=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@cd1eddc/chromium/extension/lib/sync.js#sha256-DNOS9OKImSynvd5XJPab1BZwQybQTOSowkI0zyRbC4M=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@8156513/chromium/extension/lib/ui.js#sha256-2yuQbliwz+uaCxUIEeTMWIH5JADHgjDBZD4/8I2T8rE=
// @resource rpgCSS     https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@727feff/assets/styles/rising-particles/dist/gray.min.css#sha256-48sEWzNUGUOP04ur52G5VOfGZPSnZQfrF3szUr4VaRs=
// @resource rpwCSS     https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@727feff/assets/styles/rising-particles/dist/white.min.css#sha256-6xBXczm7yM1MZ/v0o1KVFfJGehHk47KJjq8oTktH4KE=
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM_getResourceText
// @grant               GM_xmlhttpRequest
// @grant               GM.xmlHttpRequest
// @noframes
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/chatgptinfinity.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/chatgptinfinity.meta.js
// @homepageURL         https://www.chatgptinfinity.com
// @supportURL          https://support.chatgptinfinity.com
// @contributionURL     https://github.com/sponsors/adamlui
// ==/UserScript==
