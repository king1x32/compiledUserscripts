// ==UserScript==
// @name                  Tabview Youtube
// @name:en               Tabview Youtube




// @version               4.73.41
// @resource              contentCSS        https://raw.githubusercontent.com/cyfung1031/Tabview-Youtube/d066d967b779d8bf9a53917929af0277ff31a56b/css/style_content.css
// @resource              chatCSS           https://raw.githubusercontent.com/cyfung1031/Tabview-Youtube/d066d967b779d8bf9a53917929af0277ff31a56b/css/style_chat.css
// @resource              controlCSS        https://raw.githubusercontent.com/cyfung1031/Tabview-Youtube/d066d967b779d8bf9a53917929af0277ff31a56b/css/style_control.css
// @resource              injectionJS1      https://raw.githubusercontent.com/cyfung1031/Tabview-Youtube/d066d967b779d8bf9a53917929af0277ff31a56b/js/injection_script_1.js
// @require               https://greasyfork.org/scripts/465421-vanilla-js-dialog/code/Vanilla%20JS%20Dialog.js?version=1188332

// @namespace             http://tampermonkey.net/
// @author                CY Fung
// @license               MIT
// @supportURL            https://github.com/cyfung1031/Tabview-Youtube
// @run-at                document-start
// @match                 https://www.youtube.com/*
// @exclude               /^https?://\w+\.youtube\.com\/live_chat.*$/
// @exclude               /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                  https://raw.githubusercontent.com/cyfung1031/Tabview-Youtube/main/images/icon128p.png

// @compatible            edge Edge [Blink] >= 79;                      Tampermonkey (Beta) / Violentmonkey
// @compatible            chrome Chrome >= 54;                          Tampermonkey (Beta) / Violentmonkey
// @compatible            firefox FireFox / Waterfox (Classic) >= 55;   Tampermonkey / Violentmonkey
// @compatible            opera Opera >= 41;                            Tampermonkey (Beta) / Violentmonkey
// @compatible            safari Safari >= 12.1

// @grant                 GM_getResourceText
// @grant                 GM.getResourceText
// @grant                 GM_registerMenuCommand
// @noframes
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Tabview20Youtube.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/Tabview20Youtube.meta.js
// ==/UserScript==
