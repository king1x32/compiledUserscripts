// ==UserScript==
// @name          Manga OnlineViewer Adult
// @author        Tago
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/MangaOnlineViewerAdult.meta.js
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/MangaOnlineViewerAdult.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @version       2025.11.03.build-1747
// @license       MIT
// @icon          https://cdn-icons-png.flaticon.com/32/9824/9824312.png
// @run-at        document-end
// @grant         unsafeWindow
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_listValues
// @grant         GM_deleteValue
// @grant         GM_xmlhttpRequest
// @grant         GM_addValueChangeListener
// @noframes      on
// @connect       *
// @require       https://cdn.jsdelivr.net/npm/colorjs.io@0.5.2/dist/color.global.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@3.13.15/dist/hotkeys.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/bowser/2.12.1/bundled.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/blob-util/2.0.2/blob-util.min.js
// @include       /https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/
// @include       /https?:\/\/(www\.)?doujins.com\/.+/
// @include       /https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/
// @include       /https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/
// @include       /https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/
// @include       /https?:\/\/(www\.)?fsicomics.com\/.+/
// @include       /https?:\/\/(www\.)?freeadultcomix.com\/.+/
// @include       /https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/
// @include       /https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//
// @include       /https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/
// @include       /https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/
// @include       /https?:\/\/(www\.)?hentaifox.com\/g\/.+/
// @include       /https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/
// @include       /https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/
// @include       /https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/
// @include       /https?:\/\/(www.)?hentalk.pw/
// @include       /https?:\/\/hitomi.la\/reader\/.+/
// @include       /https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//
// @include       /https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/
// @include       /https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/
// @include       /https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/
// @include       /https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/
// @include       /https?:\/\/(www\.)?(nhentai|lhentai).(net|xxx|com|to)\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?porncomicshd.com\/es.*/
// @include       /https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/
// @include       /https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/
// @include       /https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/
// @include       /https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/
// @include       /https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/
// @include       /https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/
// @include       /https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/
// @include       /https?:\/\/(www\.)?xlecx.one\/.+/
// @include       /https?:\/\/(www\.)?xyzcomics.com\/.+/
// @include       /https?:\/\/(www\.)?yabai.si\/g\/.+\/read/
// @include       /https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/
// ==/UserScript==
!function(){"use strict";function e(e){return null==e||void 0===e||"string"==typeof e&&""===e||Array.isArray(e)&&0===e.length||"object"==typeof e&&0===Object.keys(e).length}function n(n){return e(n)||!1===n||0===n}function t(e){return"listImages"in e&&!n(e.listImages)}function o(e){return"listPages"in e&&!n(e.listPages)}function i(e,n=document.body){return new Promise(t=>{const o=document.querySelector(e);if(o)return void t(o);const i=new MutationObserver(()=>{const n=document.querySelector(e);n&&(t(n),i.disconnect())});i.observe(n,{childList:!0,subtree:!0,attributes:!0})})}function r(e,n=250){return new Promise(t=>{const o=setInterval(()=>{e()&&(clearInterval(o),t(!0))},n)})}function a(e,n,t=document.body){return new Promise(o=>{const i=t.querySelector(e);if(i?.getAttribute(n))return void o(i.getAttribute(n)??"");const r=new MutationObserver(()=>{const i=t.querySelector(e);i?.getAttribute(n)&&(o(i.getAttribute(n)??""),r.disconnect())});r.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[n]})})}function l(e,t=document.body){return new Promise(o=>{if(!n(unsafeWindow[e]))return void o(unsafeWindow[e]);const i=new MutationObserver(()=>{n(unsafeWindow[e])||(o(unsafeWindow[e]),i.disconnect())});i.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function s(e=1e3,n){return new Promise(t=>{setTimeout(()=>t(n),e)})}async function c(e,n=1e3){const[t]=await Promise.all([e,s(n)]);return t}async function d(e,n,t,o,i="img",r="src"){const l=document.createElement("div");l.setAttribute("style","height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;"),document.body.append(l),e();const s=document.querySelector(t),d=document.querySelector(o),h=[];for(let e=1;e<=n;e+=1)h[e-1]=await c(a(i,r,d??document.body),100),d?.querySelector(i)?.removeAttribute(r),s?.dispatchEvent(new Event("click"));return h}function h(e){return/^data:image\/(png|jpg|jpeg|gif|svg)/.test(e)}function p(e){return Do.test(e)}function u(e){switch(e){case"p":return"png";case"b":return"bmp";case"g":return"gif";case"w":return"webp";default:return"jpg"}}function g(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(e=>{const n=[...e.attributes].filter(e=>/.*(src|url).*/i.test(e.name)&&!/^.*(blank|lazy|loading).*$/.test(e.value));return 0===n.length?"":n.find(e=>Uo.test(e.value))?.value??e?.getAttribute("src")??""})}function m(...e){return console.log("MangaOnlineViewer-adult: ",...e),e}function v(...e){return["dev","development"].includes("adult")&&console.info("MangaOnlineViewer: ",...e),e}function f(e){"undefined"!=typeof GM_deleteValue?GM_deleteValue(e):v("Fake Removing: ",e)}function b(e,n){const t=function(e,n){return"undefined"!=typeof GM_getValue?GM_getValue(e,n):(v("Fake Getting: ",e," = ",n),n)}(e,n);if("string"==typeof t&&""!==t.trim())try{return JSON.parse(t)}catch(t){return m("Failed to parse JSON from storage",e,t),n}return t}function w(e,n){return"undefined"!=typeof GM_setValue?(GM_setValue(e,n),m("Setting: ",e," = ",n),n.toString()):(v("Fake Setting: ",e," = ",n),String(n))}function k(e){return w(window.location.hostname,e)}async function y(e,n,t,o){void 0!==e&&(m(t),m(o,await n(e)))}function E(e,n){if(!Ei(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==gi?gi.createHTML(n):n}function x(e,n,t=e,o){if(n===Li)return n;let i=void 0!==o?t._$Co?.[o]:t._$Cl;const r=yi(n)?void 0:n._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),void 0===r?i=void 0:(i=new r(e),i._$AT(e,t,o)),void 0!==o?(t._$Co??=[])[o]=i:t._$Cl=i),void 0!==i&&(n=x(e,i._$AS(e,n.values),i,o)),n}function I(e){void 0!==this._$AN?(qi(this),this._$AM=e,Yi(this)):this._$AM=e}function A(e,n=!1,t=0){const o=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(n)if(Array.isArray(o))for(let e=t;e<o.length;e++)Qi(o[e],!1),qi(o[e]);else null!=o&&(Qi(o,!1),qi(o));else Qi(this,e)}function M(e=!0){return"mobile"===ii()||"tablet"===ii()?_.defaultsDeep(ar,{...rr,theme:e?"#29487D":"#004526"}):{...rr,theme:e?"#29487D":"#004526"}}function S(e,n,t){return"bookmarks"===t?function(e,n){if(Array.isArray(e)&&Array.isArray(n)){if(e.length!==n.length)return!1;const t=e=>`${e.url}-${e.date}`,o=[...e].sort((e,n)=>t(e).localeCompare(t(n))),i=[...n].sort((e,n)=>t(e).localeCompare(t(n)));return _.isEqual(o,i)}}(e,n):"keybinds"===t?function(e,n){if(e&&"object"==typeof e&&n&&"object"==typeof n){const t=e,o=n,i=Object.keys(t).sort((e,n)=>e.localeCompare(n)),r=Object.keys(o).sort((e,n)=>e.localeCompare(n));if(!_.isEqual(i,r))return!1;for(const e of i){const n=t[e]?[...t[e]].sort((e,n)=>e.localeCompare(n)):[],i=o[e]?[...o[e]].sort((e,n)=>e.localeCompare(n)):[];if(!_.isEqual(n,i))return!1}return!0}}(e,n):void 0}function C(e,n,t){if(e===n)return!1;if(t){const o={[t]:e},i={[t]:n};return!_.isEqualWith(o,i,S)}return!_.isEqualWith(e,n,S)}function O(e){if(e){const n=dr(e)?sr[e]:lr[e],t=hr.get()?.[e];return void(C(t,n,e)&&(hr.setKey(e,n),m("Refreshed Settings",e,n)))}for(const e in hr.get()){const n=hr.get()[e],t=dr(e)?sr[e]:lr[e];C(n,t)&&hr.setKey(e,t)}m("Refreshed All Settings")}function T(e){return hr.get()?.[e]}function L(e,n){const t=hr.get()?.[e];C(t,n,e)&&hr.setKey(e,n)}function $(e,n){C(T(e),n,e)&&(hr.setKey(e,n),dr(e)?(sr[e]=n,k(ir(sr,M(!1)))):(lr[e]=n,function(e){w("settings",e)}(ir(lr,M()))))}function D(e,n){L(e,n(T(e)))}function R(e){return ur.get()[e]}function N(e,n){const t=ur.get()[e];_.isEqual(t,n)||ur.setKey(e,n)}function z(e,n){const t=ur.get()[e],o=n(t);_.isEqual(t,o)||ur.setKey(e,o)}function P(e,n){z("images",t=>({...t,[e]:{...t?.[e],...n(t?.[e]??{})}}))}function B(e){const n=or.find(e=>e.ID===T("locale"))??or[1];return e in n?n?.[e]??or[1]?.[e]:`##MISSING_STRING_${e}##`}function H(e=!1){return sr.enabled=e,k(ir(sr,M(!1))),m("Local Settings ",e?"Enabled":"Disabled"),O(),ai.info({title:"Changed Settings to",description:cr()?"Local":"Global",duration:2e3}),cr()}function F(){cr()?(f(location.hostname),sr=M(!1),H(!1)):(f("settings"),lr=M(),O()),m("Settings Reset")}function G(e=location.href){return T("bookmarks").find(n=>n.url===e)?.page}function V(e){return function(e){return!Color.parse(e)||Color.contrast(e,"white","Lstar")>Color.contrast(e,"black","Lstar")}(e)?"#FFFFFF":"#000000"}function U(e){const n=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(n).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}function W(e,n,t="#0F1C3F",o="#ECEAD9"){const i=function(e,n,t,o){let i="";for(let n=0;n<=e;n+=5)i+=vr` <line
      x1="${n}"
      y1="0"
      x2="${n}"
      y2="${kr(n)}"
    />`,0!==n&&n%50==0&&(i+=vr` <text
        x="${n}"
        y="25"
        text-anchor="middle"
        font-size="${kr(n)}px"
      >
        ${n}
      </text>`);for(let e=0;e<=n;e+=5)i+=vr` <line
      x1="0"
      y1="${e}"
      x2="${kr(e)}"
      y2="${e}"
    />`,0!==e&&e%50==0&&(i+=vr` <text
        x="25"
        y="${e}"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="${kr(e)}px"
      >
        ${e}
      </text>`);return vr` <svg
    xmlns="http://www.w3.org/2000/svg"
    width="${e}"
    height="${n}"
    viewBox="0 0 ${e} ${n}"
  >
    <rect
      width="${e}"
      height="${n}"
      fill="${t}"
    />
    <text
      fill="${o}"
      font-family="Verdana, Arial, Helvetica, sans-serif"
      font-size="30"
      dy="10.5"
      font-weight="bold"
      x="50%"
      y="50%"
      text-anchor="middle"
    >
      ${e}x${n}
    </text>
    <g
      stroke-width="1"
      font-family="Verdana, Arial, Helvetica, sans-serif"
      font-size="10px"
      font-weight="100"
      fill="${o}"
      stroke="${o}"
    >
      ${i}
    </g>
  </svg>`}(e,n,t,o);return U(i)}function j(){const e=Math.floor(Math.random()*Er.length),n=Math.floor(Math.random()*xr.length),t=Math.floor(Math.random()*yr.length);return W(Er[e],xr[n],yr[t])}function Z(e){return Ar.includes(e.type)}function Q(e,n){Ln([{...Ir,start:"always"},{title:e,series:"?reload",pages:n.length,begin:1,prev:"#",next:"#",lazy:!1,listImages:n}]).then(()=>m("Page loaded"))}function q(e){const n=e.target,t=Array.from(n.files).filter(Z).sort((e,n)=>Sr(e.webkitRelativePath||e.name,n.webkitRelativePath||n.name));m("Local Files: ",t,t.map(e=>e.webkitRelativePath||e.name)),n.files?.[0]&&Q(n.files[0].webkitRelativePath.split("/")[0]||"Local Images",t.map(URL.createObjectURL))}function Y(e){return(n,t)=>"object"==typeof t?ta(e,n,t):((e,n,t)=>{const o=n.hasOwnProperty(t);return n.constructor.createProperty(t,e),o?Object.getOwnPropertyDescriptor(n,t):void 0})(e,n,t)}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function X(e){return Y({...e,state:!0,attribute:!1})}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
function K(e){return(n,t)=>((e,n,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&"object"!=typeof n&&Object.defineProperty(e,n,t),t))(n,t,{get(){return(n=>n.renderRoot?.querySelector(e)??null)(this)}})}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function J(e,n="steps"){const t=Color.parse(e)?new Color(e):new Color(br.navy);switch(n){case"saturation":return function(e){const n=e.to("hsl"),t=[.97,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],o=[];for(const e of t){const t=n.clone();t.set("hsl.l",100*e),e>.8?t.set("hsl.s",e=>.4*e):e>.6?t.set("hsl.s",e=>.8*e):e<.3&&t.set("hsl.s",e=>Math.min(100,1.1*e)),o.push(t.toString({format:"hex"}).toUpperCase())}return o}(t);case"lightness":return function(e){const n=[],t=[95,90,80,70,60,50,40,30,20,10,5],o=e.to("hsl");for(const e of t)n.push(o.clone().set("hsl.l",e).toString({format:"hex"}).toUpperCase());return n}(t);case"mantine":return function(e){const n=e.to("hsl"),[t,o,i]=n.coords,r=new Array(11);r[5]=e.toString({format:"hex"});for(let e=0;e<5;e++){const n=(5-e)/6,a=i+(100-i)*n,l=o-o*n;r[e]=new Color({space:"hsl",coords:[t,l,a]}).toString({format:"hex"})}for(let e=0;e<5;e++){const n=(e+1)/6,a=i-i*n,l=o+(100-o)*n;r[e+6]=new Color({space:"hsl",coords:[t,l,a]}).toString({format:"hex"})}return r}(t);case"chakra":return function(e){const n=new Array(11).fill(""),t=e.to("hsl");for(let e=1;e<=5;e++){const o=5-e,i=t.clone().set("hsl.l",n=>n+9*(e-.5)).set("hsl.h",n=>n+-2*e).set("hsl.s",n=>n+-6*e);n[o]=i.toString({format:"hex"})}n[5]=t.clone().toString({format:"hex"});for(let e=1;e<=5;e++){const o=5+e,i=t.clone().set("hsl.l",n=>n-8*(e-.5)).set("hsl.h",n=>n+2*e).set("hsl.s",n=>n+2*e);n[o]=i.toString({format:"hex"})}return n}(t);default:return function(e){const n=e.to("oklch"),t=n.get("oklch.h"),o=n.get("oklch.c"),i=n.get("oklch.l"),r=[.95,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],a=r.map(e=>new Color("oklch",[e,o,t]).toString({format:"hex"}));let l=-1,s=1/0;for(let e=0;e<r.length;e++){const n=Math.abs(r[e]-i);n<s&&(s=n,l=e)}return-1!==l&&(a[l]=e.toString({format:"hex"})),a.map(e=>e.toUpperCase())}(t)}}function ee(e){switch(e){case"image/jpeg":return"jpg";case"image/png":default:return"png";case"image/webp":return"webp";case"image/gif":return"gif";case"image/bmp":return"bmp"}}async function ne(e){if(e.blob)return m(`Got blob for page ${e.src} from cache`),e.blob;const n=await async function(e){if(!e.src)return null;if("undefined"!=typeof GM_xmlhttpRequest)return new Promise(n=>{GM_xmlhttpRequest({method:"GET",url:e.src,responseType:"blob",onload:t=>{200===t.status?(m(`Got blob for page ${e.src} from GM_xmlhttpRequest`),n(t.response)):(m(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,t.statusText),n(null))},onerror:t=>{m(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,t),n(null)}})});try{const n=await fetch(e.src);if(n.ok)return m(`Got blob for page ${e.src} from fetch`),await n.blob()}catch(n){m(`Failed to get blob for page ${e.src} from fetch`,n)}return null}(e)||await async function(e){const n=e.ref?.value;if(!n)return null;try{const t=document.createElement("canvas"),o=t.getContext("2d");if(o)return t.width=n.naturalWidth,t.height=n.naturalHeight,o.drawImage(n,0,0),await new Promise(n=>{t.toBlob(t=>{t&&m(`Got blob for page ${e.src} from canvas`),n(t)},"image/png",1)})}catch(n){m(`Failed to get blob for page ${e.src} from canvas`,n)}return null}(e);return n||m(`Failed to get blob for page ${e.src}`),n}function te(){"working"!==R("download")&&(m("Downloading Chapter"),async function(){N("download","working");const e=new JSZip,n=R("images")??{},t=R("manga"),o=Math.floor(Math.log10(t?.pages??1))+1,i=Object.entries(n).sort((e,n)=>Number(e[0])-Number(n[0])),r=[];for(const[n,t]of i)try{const i=await ne(t);if(i){const t=ee(i.type),r=`Page-${Number(n).toString().padStart(o,"0")}.${t}`;m(`${r} Added to Zip from Blob`),e.file(r,i,{createFolders:!0,compression:"DEFLATE"})}else r.push(t.src??n)}catch(e){m(`Error processing page ${n}`,e),r.push(t.src??n)}r.length>0&&m("Some images failed to download:",r),m("Generating Zip"),e.generateAsync({type:"blob"}).then(e=>{m("Download Ready");const n=`${t?.title??document.title}.zip`;gt.saveAs(e,n,{autoBom:!1})}).catch(e=>{m("Error generating zip",e)}).finally(()=>{N("download",void 0)})}().catch(e=>m("Error downloading chapter",e)))}function oe(){D("hidePageControls",e=>!e)}function ie(e){const n=e.target,t=n.getAttribute("value")??n.getAttribute("href");1===e.button||e.ctrlKey||(t&&"#"!==t?window.location.href=ht.sanitizeUrl(t):"series"===n.id&&window.history.back())}function re(){N("panel","comments")}function ae(e){const n=e.currentTarget.value;N("scrollToPage",parseInt(n,10))}function le(e){const n=()=>N("dialog",null);e.timer&&setTimeout(n,e.timer),N("dialog",{open:!0,icon:e.icon,title:e.title,content:Ti`<div style="padding: 1rem;">${ia(e.html)}</div>`,footer:Ti`
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button @click=${n}>OK</mov-button>
      </div>
    `})}function se(){return Tt||(Tt=1,Object.defineProperty(Ot,"__esModule",{value:!0}),Ot.MultiStoreController=void 0,Ot.MultiStoreController=class{constructor(e,n){this.host=e,this.atoms=n,e.addController(this)}hostConnected(){this.unsubscribes=this.atoms.map(e=>e.subscribe(()=>this.host.requestUpdate()))}hostDisconnected(){var e;null===(e=this.unsubscribes)||void 0===e||e.forEach(e=>e())}get values(){return this.atoms.map(e=>e.get())}}),Ot}function ce(){const e=R("chapter").value;if(T("viewMode").startsWith("Fluid")){const n="FluidRTL"===T("viewMode")?-1:1;e?.scrollBy({top:0,left:T("scrollHeight")*n,behavior:"smooth"}),e&&e.scrollLeft+e.clientWidth>=e.scrollWidth-2&&(N("autoScroll",!1),m("Finished auto scroll"))}else window.scrollBy({top:T("scrollHeight"),left:0,behavior:"smooth"}),window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&(N("autoScroll",!1),m("Finished auto scroll"));R("autoScroll")&&requestAnimationFrame(ce)}function de(){R("autoScroll")?(N("autoScroll",!1),m("Stopped auto scroll")):(N("autoScroll",!0),requestAnimationFrame(ce),m("Start auto scroll"))}function he(){!Fc&&R("autoScroll")&&(de(),Fc=!0),Fc&&!R("autoScroll")&&Gc()}function pe(e=window.location.href){n(G(e))||(m(`Bookmark Removed ${e}`),D("bookmarks",n=>[...n.filter(n=>n.url!==e)]))}function ue(e){const n=e.currentTarget.value;m(`Bookmark Removed ${n}`),ai.error({title:B("BOOKMARK_REMOVED"),duration:1e4}),pe(n)}function ge(){N("panel","bookmarks")}function me(){const e=R("currentPage"),n={name:R("manga")?.title??document.documentElement.title??window.location.hostname,url:window.location.href,page:e,date:(new Date).toISOString().slice(0,10)};G(n.url)?(D("bookmarks",e=>[...e.filter(e=>e.url!==n.url)]),ai.error({title:B("BOOKMARK_REMOVED"),duration:1e4})):(D("bookmarks",e=>[...e,n]),ai.success({title:B("BOOKMARK_SAVED"),description:B("BOOKMARK_MESSAGE").replace("##num##",e.toString()),duration:1e4}))}function ve(e){H("true"===e.currentTarget.value)}function fe(e){$("locale",e.currentTarget.value)}function be(e){$("loadMode",e.currentTarget.value)}function we(e){$("fitWidthIfOversize",e.detail.checked)}function ke(e){$("navbar",e.currentTarget.value)}function ye(e){$("enableComments",e.detail.checked)}function Ee(e){$("pagination",e.detail.checked)}function xe(e){const n=e.detail.checked;$("downloadZip",n),n&&le({title:B("ATTENTION"),html:B("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function Ie(e){const n=e.detail.checked;$("lazyLoadImages",n),n&&le({title:B("WARNING"),html:B("LAZY_LOAD"),icon:"warning"})}function Ae(e){const n=e.currentTarget.value;$("lazyStart",parseInt(n,10))}function Me(e){const n=parseInt(e.currentTarget.value,10);$("throttlePageLoad",n),n<100&&le({title:B("SPEED_WARNING"),html:B("SPEED_WARNING_MESSAGE"),icon:"warning"})}function Se(e){const n=e.currentTarget.value;$("zoomStep",parseInt(n,10))}function Ce(e){const n=e.currentTarget.value;(function(e,n){!function(e){document.querySelectorAll(`style[id="${e}"]`).forEach(e=>{e.remove()})}(e),function(e,n){document.querySelector(`#${e}`)||(document.head??document.querySelector("head")).appendChild(function(e,n){const t=document.createElement("style");return t.id=e,t.appendChild(document.createTextNode(n)),t}(e,n))}(e,n)})("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${n}vw;}`),$("minZoom",parseInt(n,10))}function _e(e){$("hidePageControls",e.detail.checked)}function Oe(e){$("header",e.currentTarget.value)}function Te(e){const{value:n}=e.currentTarget;$("scrollHeight",parseInt(n,10))}function Le(e){D("scrollHeight",n=>{const t=n+25*e;if(t<=0)return 0;const o=100*Math.ceil(window.innerHeight/200);return t>=o?o:t})}function $e(e,n=T("zoomMode"),t=T("zoomValue")){const o=function(){const e=T("navbar");return"left"===e||"right"===e?window.innerWidth-gr:window.innerWidth}(),i="bottom"===T("navbar")?window.innerHeight-gr:window.innerHeight;if("width"===n)e.width=o,e.height=void 0;else if("height"===n)e.width=void 0,e.height=i;else if("percent"===n){const n=e.naturalWidth??e.ref?.value?.naturalWidth;e.width=n?n*(t/100):void 0,e.height=void 0}return e}function De(e=T("zoomMode"),n=T("zoomValue")){m("Zoom",e,n),L("zoomMode",e),L("zoomValue",n),"height"===e?N("scrollToPage",R("currentPage")):O("header");const t=R("images"),o=R("manga"),i={};for(let r=o?.begin??1;r<=(o?.pages??1);r++)i[r]=$e({...t?.[r]},e,n);N("images",i)}function Re(e,n=T("zoomValue")){return()=>{De(e,n)}}function Ne(e=1){return()=>{const n=T("zoomValue")+e*T("zoomStep");n>0&&n<500&&De("percent",n)}}function ze(e){$("zoomMode",e.currentTarget.value)}function Pe(e){const n=parseInt(e.currentTarget.value,10);$("zoomValue",n),De("percent",n)}function Be(e){De("percent",parseInt(e.currentTarget.value,10))}function He(e){return()=>{L("viewMode",e),e.startsWith("Fluid")?(L("zoomMode","height"),L("header","click")):(O("zoomMode"),O("zoomValue"),O("header")),De()}}function Fe(e){const n=e.currentTarget.value;$("viewMode",n),He(n)()}function Ge(e){const n=T("viewMode"),t=T("zoomMode");m("Scrolling view",n,"zoom",t,"sign",e),n.startsWith("Fluid")?function(e){const n="FluidRTL"===T("viewMode")?-1:1;R("chapter").value?.scrollBy({left:.8*window.innerWidth*e*n,behavior:"smooth"})}(e):"height"===t?function(e){const n=R("currentPage")+e;n<0?N("scrollToPage",0):n>(R("manga")?.pages??1)||N("scrollToPage",n)}(e):function(e){window.scrollBy({top:.8*window.innerHeight*e,behavior:"smooth"})}(e)}function Ve(e){const n=R("manga")?.[e];n&&"#"!==n?location.href=ht.sanitizeUrl(n):"next"!==e&&history.back()}function Ue(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,hotkeys.unbind(),Object.keys(T("keybinds")).forEach(e=>{hotkeys(T("keybinds")[e]?.join(",")??"",_.throttle(n=>{n.preventDefault(),n.stopImmediatePropagation(),n.stopPropagation(),Vc[e]()},100))})}function We(){N("panel","none")}function je(){N("panel","settings")}function Ze(){N("panel","keybindings")}function Qe(){N("panel","keybindingsEditor")}function qe(e,n=1){return Array(e).fill(0).map((e,n)=>n+1).filter(e=>e>=n)}function Ye(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function Xe(){const e=cr()?"true":"false";return Ti` <div class="ControlLabel">
    ${B("SCOPE")}
    <segmented-control
      .value=${e}
      @change=${ve}
    >
      <segmented-control-option
        value="false"
        label=${B("GLOBAL")}
        icon="IconWorldCog"
      ></segmented-control-option>
      <segmented-control-option
        value="true"
        label=${window.location.hostname}
        icon="IconLocationCog"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function Ke(){return Ti` <div class="ControlLabel locale">
    ${B("LANGUAGE")}
    <select
      id="locale"
      @change="${fe}"
    >
      ${or.map(e=>Ti`
      <option
        value="${e.ID}"
        ?selected=${T("locale")===e.ID}
      >
        ${e.NAME}
      </option>
    `)}
    </select>
  </div>`}function Je(){return Ti`
    <div class="ControlLabel loadMode">
      ${B("DEFAULT_LOAD_MODE")}
      <select
        id="loadMode"
        @change="${be}"
      >
        <option
          value="wait"
          ?selected=${"wait"===T("loadMode")}
        >
          ${B("LOAD_MODE_NORMAL")}
        </option>
        <option
          value="always"
          ?selected=${"always"===T("loadMode")}
        >
          ${B("LOAD_MODE_ALWAYS")}
        </option>
        <option
          value="never"
          ?selected=${"never"===T("loadMode")}
        >
          ${B("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
  `}function en(){return Ti`
    <div class="ControlLabel PagesPerSecond">
      ${B("LOAD_SPEED")}
      <select
        id="PagesPerSecond"
        @change="${Me}"
      >
        <option
          value="3000"
          ?selected=${3e3===T("throttlePageLoad")}
        >
          0.3(${B("SLOWLY")})
        </option>
        <option
          value="2000"
          ?selected=${2e3===T("throttlePageLoad")}
        >
          0.5
        </option>
        <option
          value="1000"
          ?selected=${1e3===T("throttlePageLoad")}
        >
          01(${B("NORMAL")})
        </option>
        <option
          value="500"
          ?selected=${500===T("throttlePageLoad")}
        >
          02
        </option>
        <option
          value="250"
          ?selected=${250===T("throttlePageLoad")}
        >
          04(${B("FAST")})
        </option>
        <option
          value="125"
          ?selected=${125===T("throttlePageLoad")}
        >
          08
        </option>
        <option
          value="100"
          ?selected=${100===T("throttlePageLoad")}
        >
          10(${B("EXTREME")})
        </option>
        <option
          value="1"
          ?selected=${1===T("throttlePageLoad")}
        >
          ${B("ALL_PAGES")}
        </option>
      </select>
    </div>
  `}function nn(){return Ti`
    <div class="ControlLabel fitIfOversize">
      ${B("FIT_WIDTH_OVERSIZED")}
      <toggle-switch
        name="fitIfOversize"
        ?checked=${T("fitWidthIfOversize")}
        @change=${we}
      ></toggle-switch>
    </div>
    <div class="ControlLabel pagination">
      ${B("ENABLE_PAGINATION")}
      <toggle-switch
        name="pagination"
        ?checked=${T("pagination")}
        @change=${Ee}
      ></toggle-switch>
    </div>
    <div class="ControlLabel enableComments">
      ${B("ENABLE_COMMENTS")}
      <toggle-switch
        name="enableComments"
        ?checked=${T("enableComments")}
        @change=${ye}
      ></toggle-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${B("DOWNLOAD_IMAGES")}
      <toggle-switch
        name="downloadZip"
        ?checked=${T("downloadZip")}
        @change=${xe}
      ></toggle-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${B("HIDE_CONTROLS")}
      <toggle-switch
        name="hidePageControls"
        ?checked=${T("hidePageControls")}
        @change=${_e}
      ></toggle-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${B("LAZY_LOAD_IMAGES_ENABLE")}
      <toggle-switch
        name="lazyLoadImages"
        ?checked=${T("lazyLoadImages")}
        @change=${Ie}
      ></toggle-switch>
    </div>
  `}function tn(){return Ti`
    <div
      class="${Vl({ControlLabel:!0,lazyStart:!0,ControlLabelItem:!0,show:T("lazyLoadImages")})}"
    >
      <span>
        ${B("LAZY_LOAD_IMAGES")}
        <output
          id="lazyStartVal"
          for="lazyStart"
        >
          ${T("lazyStart")}
        </output>
      </span>
      <input
        type="range"
        value="${T("lazyStart")}"
        name="lazyStart"
        id="lazyStart"
        min="5"
        max="100"
        step="5"
        oninput="lazyStartVal.value = this.value"
        @change="${Ae}"
      />
    </div>
  `}function on(){return Ti`
    <div class="ControlLabel headerType">
      ${B("HEADER_TYPE")}
      <segmented-control
        .value=${T("header")}
        @change=${Oe}
        labelPosition="bottom"
      >
        <segmented-control-option
          value="hover"
          label=${B("HEADER_HOVER")}
          icon="arrows-move"
        ></segmented-control-option>
        <segmented-control-option
          value="scroll"
          label=${B("HEADER_SCROLL")}
          icon="arrows-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="click"
          label=${B("HEADER_CLICK")}
          icon="hand-click"
        ></segmented-control-option>
        <segmented-control-option
          value="fixed"
          label=${B("HEADER_FIXED")}
          icon="pin"
        ></segmented-control-option>
        <segmented-control-option
          value="simple"
          label=${B("HEADER_SIMPLE")}
          icon="box-align-top"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function rn(){return Ti`
    <div class="ControlLabel navbarType">
      ${B("NAVBAR_TYPE")}
      <segmented-control
        .value=${T("navbar")}
        @change=${ke}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="bottom"
          label=${B("NAVBAR_BOTTOM")}
          icon="layout-bottombar"
        ></segmented-control-option>
        <segmented-control-option
          value="left"
          label=${B("NAVBAR_LEFT")}
          icon="layout-sidebar"
        ></segmented-control-option>
        <segmented-control-option
          value="right"
          label=${B("NAVBAR_RIGHT")}
          icon="layout-sidebar-right"
        ></segmented-control-option>
        <segmented-control-option
          value="disabled"
          label=${B("NAVBAR_DISABLED")}
          icon="x"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function an(){return Ti`
    <div class="ControlLabel autoScroll">
      <span>
        ${B("AUTO_SCROLL_HEIGHT")}
        <output
          id="scrollHeightVal"
          for="scrollHeight"
        >
          ${T("scrollHeight")} </output
        >px
      </span>
      <input
        type="range"
        value="${T("scrollHeight")}"
        name="scrollHeight"
        id="scrollHeight"
        min="1"
        max="${100*Math.ceil(window.innerHeight/200)}"
        step="1"
        @change="${Te}"
      />
    </div>
  `}function ln(){const e="dark"===T("colorScheme");$("colorScheme",e?"light":"dark"),document.documentElement.classList.remove(e?"dark":"light"),document.documentElement.classList.add(T("colorScheme"))}function sn(e){$("theme",e instanceof CustomEvent?e.detail.value:e.currentTarget.value)}function cn(){return Ti`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${B("COLOR_SCHEME")}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${ln}
        ?active=${"dark"===T("colorScheme")}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${B("THEME_COLOR")}</label>
      <color-picker
        id="ThemeHex"
        .value="${T("theme")}"
        title="${T("theme")}"
        @input=${sn}
        .swatches=${Object.values(br)}
      ></color-picker>
    </div>
    <color-palette
      .baseColor="${T("theme")}"
      mode="steps"
      .selected=${T("theme")}
      @change="${sn}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${Object.values(br).map(e=>Ti`<color-swatch
            .color="${e}"
            .selected=${T("theme")}
            @change=${sn}
          ></color-swatch>`)}
    </span>
    <details class="ControlLabel">
      <summary>${B("THEME_HUE")} & ${B("THEME_SHADE")}</summary>
      <color-panel
        .selected=${T("theme")}
        @change=${sn}
      ></color-panel>
    </details>
  `}function dn(){return Ti` <div class="ControlLabel DefaultZoomMode">
    ${B("DEFAULT_ZOOM_MODE")}
    <segmented-control
      .value=${T("zoomMode")}
      @change=${ze}
      labelPosition="tooltip"
    >
      <segmented-control-option
        value="percent"
        label=${B("PERCENT")}
        icon="file-percent"
      ></segmented-control-option>
      <segmented-control-option
        value="width"
        label=${B("FIT_WIDTH")}
        icon="arrow-autofit-width"
      ></segmented-control-option>
      <segmented-control-option
        value="height"
        label=${B("FIT_HEIGHT")}
        icon="arrow-autofit-height"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function hn(){return Ti`
    <div
      class="${Vl({ControlLabel:!0,zoomValue:!0,ControlLabelItem:!0,show:"percent"===T("zoomMode")})}"
    >
      <span>
        ${B("DEFAULT_ZOOM")}
        <output
          id="zoomValueVal"
          class="RangeValue"
          for="zoomValue"
        >
          ${T("zoomValue")}%
        </output>
      </span>
      <input
        type="range"
        value="${T("zoomValue")}"
        name="zoomValue"
        id="zoomValue"
        min="5"
        max="200"
        step="5"
        list="zoomValueList"
        @input="${Pe}"
      />
      <datalist id="zoomValueList">
        <option value="5">5</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
        <option value="125">125</option>
        <option value="150">150</option>
        <option value="175">175</option>
        <option value="200">200</option>
      </datalist>
    </div>
  `}function pn(){return Ti`
    <div class="ControlLabel zoomStep">
      <span>
        ${B("ZOOM_STEP")}
        <output
          id="zoomStepVal"
          class="RangeValue"
          for="zoomStep"
        >
          ${T("zoomStep")}%
        </output>
      </span>
      <input
        type="range"
        value="${T("zoomStep")}"
        name="zoomStep"
        id="zoomStep"
        min="10"
        max="50"
        step="5"
        @input="${Se}"
        list="zoomStepList"
      />
      <datalist id="zoomStepList">
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </datalist>
    </div>
  `}function un(){return Ti`
    <div class="ControlLabel viewMode">
      ${B("DEFAULT_VIEW_MODE")}
      <segmented-control
        .value=${T("viewMode")}
        @change=${Fe}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="Vertical"
          label=${B("VIEW_MODE_VERTICAL")}
          icon="arrow-autofit-down"
        ></segmented-control-option>
        <segmented-control-option
          value="WebComic"
          label=${B("VIEW_MODE_WEBCOMIC")}
          icon="spacing-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidLTR"
          label=${B("VIEW_MODE_LEFT")}
          icon="arrow-autofit-right"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidRTL"
          label=${B("VIEW_MODE_RIGHT")}
          icon="arrow-autofit-left"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function gn(){const e=function(){const e=R("images");if(!e)return null;const n=T("viewMode"),t="FluidLTR"===n||"FluidRTL"===n,o="FluidRTL"===n,i=window.innerHeight/2,r=window.innerWidth/2;let a=null;for(const n in e){const l=e[n].ref?.value;if(!l)continue;const s=l?.getBoundingClientRect();let c;c=t?o?s.right:s.left:s.top,(t?c<=r:c<=i)&&(!a||c>a.edge)&&(a={index:parseInt(n,10),edge:c})}return a?a.index:R("manga")?.begin??1}();null!=e&&R("currentPage")!==e&&N("currentPage",e)}function mn(){R("chapter").value?function(){const e=_.throttle(()=>{requestAnimationFrame(gn)},100);window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),R("chapter").value?.addEventListener("scroll",e,{passive:!0}),requestAnimationFrame(gn)}():setTimeout(mn,50)}function vn(e){if(e){let n=e.trim();return n.startsWith("//")&&(n=`https:${n}`),n}return""}async function fn(e,n,t,o=0){setTimeout(async()=>{let o=vn(t);p(o)||h(o)||!e.fetchOptions||(o=await fetch(o,e.fetchOptions).then(e=>e.blob()).then(e=>blobUtil.blobToDataURL(e))),z("images",e=>({...e,[n]:{...e?.[n],src:o}})),v("Loaded Image:",n,"Source:",o)},(e.timer??T("throttlePageLoad"))*o),e.pages===n&&pe()}async function bn(e,n,t,o=0){setTimeout(async()=>{const o=await async function(e,n,t){return async function(e){return async function(e){return new Promise(n=>{m("Fetching page: ",e),fetch(e).then(async e=>e.text()).then(e=>{const t=(new DOMParser).parseFromString(e,"text/html");n(t)}).catch(e=>{m("Failed to fetch page: ",e)})})}(e)}(e).then(e=>e.querySelector(n)?.getAttribute(t))}(t,e.img,e.lazyAttr??"src");if(o){const e=vn(o);z("images",t=>({...t,[n]:{src:e}})),m("Loaded Page: ",n," Source: ",e)}},(e.timer??T("throttlePageLoad"))*o),e.pages===o&&pe()}function wn(e,n){qe(n.pages,e).filter((e,t)=>!(n.lazy??T("lazyLoadImages"))||t<=T("lazyStart")).forEach((e,t)=>{bn(n,e,n.listPages[e-1],t)})}function kn(e,n){qe(n.pages,e).filter((e,t)=>!(n.lazy??T("lazyLoadImages"))||t<=T("lazyStart")).forEach((e,t)=>{fn(n,e,n.listImages[e-1],t)})}function yn(e,n){m(`Reloading Page ${e}`,n);const t=R("images")?.[e]?.src;if(!t)return;const o=function(e){let n=1;const t=e?.match(/forceReload=(\d+)$/);return t?.at(1)&&(n=parseInt(t[1],10)+1),n}(t);o>T("maxReload")||(n?.removeAttribute("src"),h(t)||p(t)?n?.setAttribute("src",t):n?.setAttribute("src",function(e,n){const t=e.replace(/[?&]forceReload=\d+$/,""),o=t.includes("?")?"&":"?";return`${t+o}forceReload=${n}`}(t,o)))}function En(e){const n=e.currentTarget,t=parseInt(n.value,10),o=R("images")?.[t]?.ref?.value;o&&yn(t,o)}function xn(e){const n=e.currentTarget;P(parseInt(n.value,10),e=>({hide:!e.hide}))}function In(e){const n=e.currentTarget;n.classList.add("imgLoaded"),n.classList.remove("imgBroken"),P(parseInt(n.id.replace("PageImg",""),10),()=>$e({naturalWidth:n.naturalWidth,naturalHeight:n.naturalHeight})),z("loaded",e=>e+1);const t=R("manga")?.pages??1,o=R("loaded")??0,i=Math.floor(o/t*100);document.title=`(${i}%) ${R("manga")?.title}`,NProgress.configure({showSpinner:!1}).set(o/t),m(`Progress: ${i}%`),o===t&&(m("Images Loading Complete"),N("download","available"),T("downloadZip")&&te())}function An(n){const t=n.currentTarget;e(t.getAttribute("src"))||(t.classList.add("imgBroken"),yn(parseInt(t.id.replace("PageImg",""),10),t))}function Mn(e){const n=e.currentTarget,t=parseInt(n.value,10),o=R("images"),i=R("images")?.[t];i?.naturalWidth&&N("images",{...o,[t]:{...i,width:(i?.width||i?.naturalWidth)*(1+T("zoomStep")/100),height:void 0}})}function Sn(e){const n=e.currentTarget,t=parseInt(n.value,10),o=R("images"),i=R("images")?.[t];i?.naturalWidth&&N("images",{...o,[t]:{...i,width:(i?.width||i?.naturalWidth)*(1-T("zoomStep")/100),height:void 0}})}function Cn(e){const n=e.currentTarget,t=parseInt(n.value,10),o=R("images"),i=R("images")?.[t];i&&N("images",{...o,[t]:{...i,width:void 0,height:void 0}})}function _n(e){const n=e.currentTarget,t=parseInt(n.value,10),o=R("images"),i=R("images")?.[t];i&&N("images",{...o,[t]:{...i,width:window.innerWidth+("left"===T("navbar")||"right"===T("navbar")?-34:0),height:void 0}})}function On(e){const n=e.currentTarget,t=parseInt(n.value,10),o=R("images"),i=R("images")?.[t];i&&N("images",{...o,[t]:{...i,width:void 0,height:window.innerHeight+("bottom"===T("navbar")?-34:0)}})}function Tn(e){if(!e?.parentNode)return e;const n=e.cloneNode(!0);return e.parentNode.replaceChild(n,e),n}async function Ln([e,n]){m(`Found Pages: ${n.pages} in ${e?.name}`),n.title||(n.title=document.querySelector("title")?.textContent?.trim()),n.begin=G()??n.begin??1,void 0!==n.before&&(v("Executing Preparation"),await n.before(n.begin??0)),T("enableComments")&&!n.comments&&(n.comments=await async function(){if(!T("enableComments"))return null;const e=document.querySelector("#disqus_thread, #fb-comments");return e&&(m("Waiting for Comments to load",e),window.scrollTo(0,document.body.scrollHeight),await new Promise(n=>{const t=new MutationObserver(()=>{const o=e.querySelector("iframe:not(#indicator-north, #indicator-south)");"complete"===o?.contentWindow?.document.readyState&&o?.contentWindow?.document.body?.textContent?.length&&(t.disconnect(),n())});t.observe(e,{childList:!0,subtree:!0}),setTimeout(()=>{t.disconnect(),n()},1e4)}),e.children.length?m("Got Comments",e):m("Timeout Comments")),window.scrollTo(0,0),e}()),document.head.innerHTML+=function(e,n){return vr`
    <style id="${"externals"}">
      ${n}
    </style>
  `}(0,rd);const t=document.createElement("manga-online-viewer");t.loadMode=e?.start??T("loadMode"),t.manga=n,document.body.appendChild(t)}var $n,Dn,Rn,Nn,zn,Pn,Bn,Hn,Fn,Gn,Vn,Un,Wn,jn,Zn,Qn,qn,Yn,Xn,Kn,Jn,et,nt,tt,ot,it,rt,at,lt,st,ct,dt,ht,pt,ut,gt,mt,vt,ft,bt,wt,kt,yt,Et,xt,It,At,Mt,St,Ct,_t,Ot,Tt,Lt,$t,Dt,Rt,Nt,zt,Pt,Bt,Ht,Ft,Gt,Vt,Ut,Wt,jt,Zt,Qt,qt,Yt,Xt,Kt,Jt,eo,no,to,oo,io,ro,ao,lo,so,co,ho,po,uo,go,mo,vo,fo,bo=(e=>(e.ENGLISH="English",e.SPANISH="Spanish",e.PORTUGUESE="Portuguese",e.CHINESE="Chinese",e.RAW="Raw",e))(bo||{}),wo=(e=>(e.MANGA="manga",e.COMIC="comic",e.HENTAI="hentai",e))(wo||{});const ko={name:["3Hentai","HentaiVox"],url:/https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/,homepage:["https://3hentai.net/","https://hentaivox.com/"],language:[bo.ENGLISH],category:wo.HENTAI,waitVar:"readerPages",run:()=>({title:unsafeWindow.readerPages.title.replace(/- Page.+/,"").trim(),series:unsafeWindow.readerPages.baseUri.replace("%s",""),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:Object.keys(unsafeWindow.readerPages.pages).map(e=>unsafeWindow.readerPages.baseUriImg.replace("%s",unsafeWindow.readerPages.pages[e].f))})},yo={name:["8Muses.com","8Muses.io"],obs:"Slow start, bruteforce may be required",url:/https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/,homepage:["https://comics.8muses.com/","https://8muses.io/"],language:[bo.ENGLISH],category:wo.HENTAI,async run(){const e=unsafeWindow.link_images?.slice(1,unsafeWindow.link_images.length)??[],n=document.querySelector('link[rel="last"]')?.getAttribute("href")?.match(/\d+$/)?.at(0),t=e?.length??parseInt(n??"0",10),o={title:[...document.querySelectorAll(".top-menu-breadcrumb li:not(:last-child)")].map(e=>e?.textContent?.trim()).join("/"),series:document.querySelector(".top-menu-breadcrumb li:nth-last-child(2) a")?.getAttribute("href"),pages:t,prev:"#",next:"#",lazy:!1,timer:10,listImages:e,async before(){unsafeWindow.link_images?.length||(o.listImages=await d(()=>{const e=document.querySelector(".page-prev");for(;"1"!==document.querySelector(".c-dropdown-toggle")?.textContent?.match(/\d+/)?.at(0);)e?.dispatchEvent(new Event("click"))},t,".page-next",".p-picture",".photo img","src"))}};return o}},Eo={name:"9Hentai",url:/https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/,homepage:"https://9hentai.so",language:[bo.ENGLISH],category:wo.HENTAI,waitAttr:["#jumpPageModal input","max"],async run(){const e={id:parseInt(/\d+/.exec(window.location.pathname)?.at(0)??"0",10)},n={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},t=await fetch("/api/getBookByID",n).then(async e=>e.json());return{title:t.results.title,series:`/g/${t.results.id}/`,pages:t.results.total_page,prev:"#",next:"#",listImages:Array(t.results.total_page).fill(0).map((e,n)=>`${t.results.image_server.replace(".com",".so")+t.results.id}/${n+1}.jpg`)}}},xo={name:"AkumaMoe",url:/https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/,homepage:"https://akuma.moe",language:[bo.RAW],category:wo.HENTAI,waitFunc:()=>unsafeWindow.img_lst?.length===document.querySelectorAll(".reader-nav:first-child .nav-select option")?.length,run:async()=>({title:document.querySelector("h1.sr-only")?.textContent?.trim().replace(/^Reading /,""),series:`https://akuma.moe/g/${/\/g\/([^/]+)\//.exec(window.location.pathname)?.[1]}/`,pages:unsafeWindow.img_lst.length,prev:"#",next:"#",listImages:unsafeWindow.img_lst.map(e=>`${unsafeWindow.img_prt}/${e}`)})},Io={name:"BestPornComix",url:/https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/,homepage:"https://www.bestporncomix.com",language:[bo.ENGLISH],category:wo.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll("figure a")];return{title:document.querySelector("h1.entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(e=>e.getAttribute("href")??"")}}},Ao={name:"DoujinMoeNM",url:/https?:\/\/(www\.)?doujins.com\/.+/,homepage:"https://doujins.com/",language:[bo.ENGLISH],category:wo.HENTAI,waitEle:".doujin",run(){const e=[...document.querySelectorAll(".doujin")];return{title:document.querySelector(".folder-title a:last-child")?.textContent?.trim(),series:document.querySelector(".folder-title a:nth-last-child(2)")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(e=>e.getAttribute("data-file")??"")}}},Mo={name:"Dragon Translation",url:/https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/,homepage:"https://dragontranslation.net/es",language:[bo.SPANISH],category:wo.HENTAI,waitEle:"#chapter_imgs img",run(){const e=[...document.querySelectorAll("#chapter_imgs img")].map(e=>e.getAttribute("src")??"").filter(e=>e&&"/discord2.jpg"!==e);return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector("h2 + div a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".fa-chevron-circle-left")?.parentElement?.getAttribute("href"),next:document.querySelector(".fa-chevron-circle-right")?.parentElement?.getAttribute("href"),listImages:e}}},So={name:["ExHentai","e-Hentai"],url:/https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/,homepage:["https://exhentai.org/","https://e-hentai.org/"],language:[bo.ENGLISH],obs:"May get your IP Banned, use with moderation",category:wo.HENTAI,async run(){const e=parseInt(document.querySelector(".sn div span:nth-child(2)")?.textContent??"0",10),n=Math.ceil(e/20),t=document.querySelector(".sb a")?.getAttribute("href")?.replace(/\?p=\d+/,""),o=Array(n).fill(0).map(async(e,n)=>fetch(`${t}?p=${n}`).then(async e=>e.text()).then(e=>(new DOMParser).parseFromString(e,"text/html"))),i=(await Promise.all(o)).flatMap(e=>[...e.querySelectorAll("#gdt a")].map(e=>e.getAttribute("href")??""));return{title:document.querySelector("#i1 h1")?.textContent?.trim(),series:t,pages:e,begin:parseInt(document.querySelector("div#i2 span")?.textContent??"1",10),prev:"#",next:"#",listPages:i,img:"#img",lazy:!0,async reload(e){const n=`${i[e-1]}`,t=await fetch(n).then(e=>e.text()).then(e=>/nl\('([\d-]+)'\)/.exec(e)?.[1]),o=`${n}${n.indexOf("?")?"&":"?"}nl=${t}`;return fetch(o).then(e=>e.text()).then(e=>(new DOMParser)?.parseFromString(e,"text/html")?.querySelector("#img")?.getAttribute("src")??"")}}}},Co={name:"FreeAdultComix",url:/https?:\/\/(www\.)?freeadultcomix.com\/.+/,homepage:"https://www.freeadultcomix.com",language:[bo.ENGLISH],category:wo.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll(".foto img")];return{title:document.querySelector(".post-conteudo h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(e=>e.getAttribute("src")??"")}}},_o={name:"FSIComics",url:/https?:\/\/(www\.)?fsicomics.com\/.+/,homepage:"https://fsicomics.com/",language:[bo.ENGLISH],category:wo.HENTAI,run(){const e=[...document.querySelectorAll(".wp-block-gallery img")];return{title:document.querySelector(".s-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(e=>e.getAttribute("data-large-file")??"")}}},Oo={name:"GNTAI.net",url:/https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/,homepage:"https://www.gntai.net/",language:[bo.SPANISH],category:wo.HENTAI,run(){const e=document.querySelector("#main > script")?.innerHTML.match(/var pages = [^;]+/)?.at(0)?.toString().match(/https?[^"]+/g)??[];return{title:document.querySelector(".entry-header h1")?.textContent?.trim(),pages:e?.length,prev:"#",next:"#",listImages:e}}},To={name:"Hentai2Read",url:/https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//,homepage:"https://hentai2read.com/",language:[bo.ENGLISH],category:wo.HENTAI,run:()=>({title:document.querySelector(".reader-left-text")?.textContent?.trim(),series:unsafeWindow.gData.mainURL,pages:unsafeWindow.gData.images.length,prev:unsafeWindow.gData.previousURL,next:unsafeWindow.gData.nextURL,listImages:unsafeWindow.gData.images.map(e=>`https://static.hentaicdn.com/hentai${e}`)})},Lo={name:"HentaiEra",url:/https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/,homepage:"https://hentaiera.com/",language:[bo.ENGLISH],category:wo.HENTAI,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"0",10);return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".return_btn ")?.getAttribute("href"),pages:e,prev:"#",next:"#",listPages:Array(e).fill(0).map((e,n)=>window.location.href.replace(/\/\d*\/?$/,`/${n+1}`)),img:"#gimg",lazyAttr:"data-src"}}},$o={name:"HentaiForce",url:/https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/,homepage:"https://hentaiforce.net/",language:[bo.ENGLISH],category:wo.HENTAI,run:()=>({title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".reader-go-back ")?.getAttribute("href"),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:Array(unsafeWindow.readerPages.lastPage).fill(0).map((e,n)=>unsafeWindow.readerPages.baseUriImg.replace("%c",unsafeWindow.readerPages.pages[n+1].l).replace("%s",unsafeWindow.readerPages.pages[n+1].f))})},Do=/^blob:(.+?)\/(.+)$/,Ro={name:"HentaiFox",url:/https?:\/\/(www\.)?hentaifox.com\/g\/.+/,homepage:"https://www.hentaifox.com/",language:[bo.ENGLISH],category:wo.HENTAI,waitVar:"g_th",waitFunc:()=>document.querySelector("#gimg")?.classList.contains("loaded")??!1,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"",10),n=document.querySelector("#gimg")?.getAttribute("src")?.replace(/\d+.\w+$/,"")??"";return{title:document.querySelector("title")?.textContent?.replace(/ - Page .+/,"").trim(),series:document.querySelector(".browse_buttons a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:Array(e).fill(0).map((e,t)=>`${n+(t+1)}.${u(unsafeWindow.g_th[t+1][0])}`)}}},No={name:["HentaiHand","nHentai.com"],url:/https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/,homepage:["https://hentaihand.com/","https://nhentai.com"],language:[bo.ENGLISH],category:wo.HENTAI,waitEle:".reader img",run(){const e=[...document.querySelectorAll(".reader img")];return{title:document.querySelector(".reader-header h5")?.textContent?.trim(),series:document.querySelector(".reader-header h5 a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(e=>e.getAttribute("data-src")??e.getAttribute("src")??"")}}},zo={name:"HentaIHere",url:/https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/,homepage:"https://www.hentaihere.com/",language:[bo.ENGLISH],category:wo.HENTAI,waitVar:"rff_imageList",run(){const e=document.querySelector("#arf-reader-img")?.getAttribute("src")?.replace(/\d.+/,"");return{title:unsafeWindow.rff_pageTitle.replace(/.+\|/,"").trim(),series:unsafeWindow.rff_thisManga,pages:unsafeWindow.rff_imageList.length,prev:unsafeWindow.rff_previousChapter,next:unsafeWindow.rff_nextChapter,listImages:unsafeWindow.rff_imageList.map(n=>e+n)}}},Po={name:"HentaiNexus",url:/https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/,homepage:"https://hentainexus.com/",language:[bo.ENGLISH],category:wo.HENTAI,run(){const e=unsafeWindow.pageData?.map(e=>e.image)??unsafeWindow.images?.map(e=>e.url);return{title:document.querySelector("title")?.textContent?.replace(/^\[[\d/]+\]/,"").trim(),series:document.querySelector("#returnGalleryFooter a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},Bo={name:"HenTalk",url:/https?:\/\/(www.)?hentalk.pw/,homepage:"https://hentalk.pw/",language:[bo.ENGLISH],category:wo.HENTAI,async run(){const e=await fetch(`${window.location.pathname}/__data.json?x-sveltekit-trailing-slash=1&x-sveltekit-invalidated=001`).then(async e=>e.json()).then(e=>e.nodes[2].data),n=e?.[e.find(e=>e?.gallery)?.gallery],t=e?.[n?.hash]||e?.[e.find(e=>e?.hash&&e?.id).hash],o=e?.[n.images].map(n=>e[n]).map(n=>e[n.filename]);return{title:e?.[n.title],series:window.location.href.replace(/read\/.+/,""),pages:o?.length,prev:"#",next:"#",listImages:o?.map(e=>`https://hentalk.pw/image/${t}/${e}`)}}},Ho={name:"Hitomi",url:/https?:\/\/hitomi.la\/reader\/.+/,homepage:"https://hitomi.la/",language:[bo.ENGLISH],category:wo.HENTAI,waitAttr:["#comicImages img","src"],waitVar:"galleryinfo",run:()=>({title:document.querySelector("title")?.textContent?.replace("| Hitomi.la","").trim(),series:document.querySelector(".brand")?.getAttribute("href"),pages:unsafeWindow.galleryinfo.files.length,prev:"#",next:"#",listImages:unsafeWindow.galleryinfo.files.map(e=>unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo,e,"webp"))})},Fo={name:"Imhentai",url:/https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//,homepage:"https://imhentai.xxx/",language:[bo.ENGLISH],category:wo.HENTAI,waitVar:"g_th",async run(){const e=document.querySelector("#gallery_id")?.getAttribute("value"),n=document.querySelector("#image_dir")?.getAttribute("value"),t=parseInt(document.querySelector("#pages")?.getAttribute("value")??"",10),o=await l("random_server");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".return_btn")?.getAttribute("href"),pages:t,prev:"#",next:"#",listImages:Array(t).fill(0).map((t,i)=>`//${o}/${n}/${e}/${i+1}.${u(unsafeWindow.g_th[i+1][0])}`)}}},Go={name:["KingComix","Chochox","Comics18"],url:/https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/,homepage:["https://kingcomix.com/","https://chochox.com/porno/","https://comics18.org/"],language:[bo.ENGLISH,bo.SPANISH],category:wo.HENTAI,run(){const e=[...document.querySelectorAll("figure img, .entry-content img:not(a img), .wp-content img")];return{title:document.querySelector("h1.singleTitle-h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(e=>e.getAttribute("data-src")??e.getAttribute("data-full-url")??e.getAttribute("data-lazy-src")??e.getAttribute("src")??"")}}},Vo={name:"Luscious",url:/https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/,homepage:"https://luscious.net/",language:[bo.ENGLISH],category:wo.HENTAI,waitEle:".album-info div",async run(){const e=parseInt(document.querySelector('input[name="page_number"] + span')?.textContent?.match(/\d+/)?.pop()??"0",10),n=Math.ceil(e/50),t=parseInt(document.querySelector(".album-heading a")?.getAttribute("href")?.match(/\d+\//)?.toString()??"0",10),o=Array(n).fill(0).map(async(e,n)=>{const o=`https://apicdn.luscious.net/graphql/nobatch/?operationName=PictureListInsideAlbum&variables={"input":{"filters":[{"name":"album_id","value":"${t}"}],"display":"position","items_per_page":50,"page":${n+1}}}&query=%20query%20PictureListInsideAlbum(%24input%3A%20PictureListInput!)%20%7B%20picture%20%7B%20list(input%3A%20%24input)%20%7B%20info%20%7B%20...FacetCollectionInfo%20%7D%20items%20%7B%20__typename%20id%20title%20description%20created%20like_status%20number_of_comments%20number_of_favorites%20moderation_status%20width%20height%20resolution%20aspect_ratio%20url_to_original%20url_to_video%20is_animated%20position%20permissions%20url%20tags%20%7B%20category%20text%20url%20%7D%20thumbnails%20%7B%20width%20height%20size%20url%20%7D%20%7D%20%7D%20%7D%20%7D%20fragment%20FacetCollectionInfo%20on%20FacetCollectionInfo%20%7B%20page%20has_next_page%20has_previous_page%20total_items%20total_pages%20items_per_page%20url_complete%20%7D%20`;return GM.xmlHttpRequest({method:"GET",url:o}).then(e=>JSON.parse(e.responseText))}),i=(await Promise.all(o)).flatMap(e=>e.data.picture.list.items.map(e=>e.url_to_original));return{title:document.querySelector(".album-heading a")?.textContent?.trim(),series:document.querySelector(".album-heading a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:i}}},Uo=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/,Wo={name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod","Hades Scans"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/","https://lectorhades.latamtoon.com"],language:[bo.ENGLISH],obs:"Any Site that uses Madara WordPress Plugin",category:wo.MANGA,waitFunc:()=>{const e=g();return e.length>0&&e.every(e=>e&&Uo.test(e))},run(){const e=g();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}}},jo={...Wo,name:["Madara WordPress Plugin","AllPornComic","Manytoon","Manga District"],url:/https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/,homepage:["#","https://allporncomic.com/","https://manytoon.com/","https://mangadistrict.com/"],category:wo.HENTAI},Zo={name:"MultPorn",url:/https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/,homepage:"https://multporn.net/",language:[bo.ENGLISH],category:wo.HENTAI,async run(){const e=/"configUrl":"(.+?)",/.exec(document.head.textContent)?.at(1)?.replaceAll("\\","")??"",n=await fetch(e).then(async e=>e.text()).then(e=>(new DOMParser).parseFromString(e,"text/xml")),t=[...n.querySelectorAll("image")];return{title:document.querySelector("#page-title")?.textContent?.trim(),pages:t.length,prev:"#",next:"#",listImages:t.map(e=>e.getAttribute("imageURL")??"")}}},Qo={name:"MyHentaiGallery",url:/https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/,homepage:"https://www.myhentaigallery.com",language:[bo.ENGLISH],category:wo.HENTAI,run(){const e=document.getElementById("js__pagination__next")?.parentElement?.previousElementSibling?.querySelector("a"),n=parseInt(e?.textContent??"",10);return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".back-to-gallery a")?.getAttribute("href"),pages:n,prev:"#",next:"#",listPages:Array(n).fill(0).map((e,n)=>window.location.href.replace(/\/\d+$/,`/${n+1}`)),img:".gallery-slide img"}}},qo={name:["nHentai.net","nHentai.xxx","lhentai"],url:/https?:\/\/(www\.)?(nhentai|lhentai).(net|xxx|com|to)\/g\/.+\/.+/,homepage:["https://nhentai.net/","https://nhentai.xxx/","https://lhentai.com/"],language:[bo.ENGLISH],category:wo.HENTAI,run(){const e=parseInt(document.querySelector(".num-pages")?.textContent??"",10),n=document.querySelector("#image-container img")?.getAttribute("src")?.replace(/\d+.\w+$/,""),t=unsafeWindow._gallery?.images?.pages?.map(e=>u(e.t));return{title:document.querySelector("title")?.textContent?.split("- Page")[0].trim(),series:document.querySelector(".go-back")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:Array(e).fill(0).map((e,o)=>`${n}${o+1}.${t[o]}`)}}},Yo={name:"PornComicsHD",url:/https?:\/\/(www\.)?porncomicshd.com\/es.*/,homepage:"https://porncomicshd.com/es",language:[bo.SPANISH],category:wo.HENTAI,waitEle:"app-comic-reader img",async run(){const e=[...document.querySelectorAll("app-comic-reader img")];return{title:document.querySelector("h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",lazy:!1,listImages:e.map(e=>e.getAttribute("src")??"")}}},Xo={name:"Pururin",url:/https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/,homepage:"https://pururin.me/",language:[bo.ENGLISH],category:wo.HENTAI,waitAttr:[".img-viewer img","src"],run(){const e=document.querySelector(".img-viewer img")?.getAttribute("src")??"",n=[...document.querySelectorAll(".img-select option")];return{title:document.querySelector(".title")?.textContent?.trim(),series:document.querySelector(".breadcrumb-item:nth-child(4) a")?.getAttribute("href"),pages:n.length,prev:"#",next:"#",listImages:n.map((n,t)=>e.replace(/\/\d+\./,`/${t+1}.`))}}},Ko={name:"SchaleNetwork",url:/https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/,homepage:"https://schale.network/",language:[bo.ENGLISH],category:wo.HENTAI,waitEle:"nav select option",async run(){const e=history.state.memo.gallery,n=e.resolution,{base:t,entries:o}=history.state.memo.data,i=o.map(e=>`${t}/${e.path}?w=${n}`);return{title:e.title,series:`/g/${e.id}/${e.key}/`,pages:i.length,prev:"#",next:"#",fetchOptions:{method:"GET",redirect:"follow"},listImages:i}}},Jo={name:"Simply-Hentai",url:/https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/,homepage:"https://simply-hentai.com/",language:[bo.ENGLISH],category:wo.HENTAI,waitEle:"#__NEXT_DATA__",async run(){const e=JSON.parse(document.querySelector("#__NEXT_DATA__")?.innerHTML??"").props.pageProps.data.pages.map(e=>e.sizes.full);return{title:document.querySelector(".content-headline a")?.textContent?.trim(),series:document.querySelector(".content-headline a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},ei={name:"TMOHentai",url:/https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/,homepage:"https://tmohentai.com/",language:[bo.SPANISH],category:wo.HENTAI,run(){const e=[...document.querySelectorAll(".content-image")].map(e=>e.getAttribute("data-original")??e.getAttribute("src")??"");return{before(){window.location.pathname.includes("paginated")&&(window.location.pathname=window.location.pathname.replace(/paginated.*/,"cascade"))},title:document.querySelector(".reader-title")?.textContent?.trim(),series:document.querySelector(".nav-justified li a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},ni={name:"Tsumino",url:/https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/,homepage:"https://tsumino.com/",language:[bo.ENGLISH],category:wo.HENTAI,async run(){const e=document.querySelector("#image-container")?.getAttribute("data-opt"),n=document.querySelector("#image-container")?.getAttribute("data-cdn")??"",t=`https://www.tsumino.com/Read/Load?q=${e}`,o=await fetch(t).then(async e=>e.json());return{title:document.querySelector("title")?.textContent?.replace(/.+Read/,"").trim(),series:o.reader_start_url,pages:o.reader_page_total,prev:"#",next:"#",listImages:Array(o.reader_page_total).fill(0).map((e,t)=>n.replace("[PAGE]",`${t+1}`))}}},ti=[xo,Io,Ao,Mo,yo,So,_o,Co,Oo,To,Lo,$o,Ro,No,zo,Po,Bo,Ho,Fo,Go,Vo,Zo,Qo,qo,Eo,Yo,Xo,Ko,Jo,ei,ko,ni,{name:["vermangasporno","vercomicsporno"],url:/https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/,homepage:["https://vermangasporno.com/","https://vercomicsporno.com/"],language:[bo.SPANISH],category:wo.HENTAI,waitEle:'img[loading="lazy"].size-full, .comicimg picture img, .wp-content img',run(){const e=[...document.querySelectorAll('img[loading="lazy"].size-full, .comicimg picture img, .wp-content img')];return{title:document.querySelector("h1.titl, title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(e=>e.getAttribute("data-lazy-src")??e.getAttribute("data-src")??e.getAttribute("src")??"")}}},{name:"wnacg",url:/https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/,homepage:"https://wnacg.com/",language:[bo.ENGLISH,bo.RAW,bo.CHINESE],category:wo.HENTAI,run(){const e=[...document.querySelectorAll(".pageselect option")];return{title:document.querySelector(".bread a:last-of-type")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listPages:e.map(e=>window.location.pathname.replace(/\d+/,e.value)),img:"#picarea"}}},{name:"XlecxOne",url:/https?:\/\/(www\.)?xlecx.one\/.+/,homepage:"https://xlecx.one/",language:[bo.ENGLISH],category:wo.HENTAI,run(){const e=[...new Set([...document.querySelectorAll("article .page__text img , article #content-2 img")].map(e=>e.getAttribute("data-src")??e.getAttribute("data-srce")??e.closest("a")?.getAttribute("href")??e.getAttribute("src")??""))];return{title:document.querySelector("title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e}}},{name:"xyzcomics",url:/https?:\/\/(www\.)?xyzcomics.com\/.+/,homepage:"https://xyzcomics.com/",language:[bo.ENGLISH],category:wo.HENTAI,run(){const e=[...document.querySelectorAll(".jig-link")];return{title:document.querySelector(".entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(e=>e.getAttribute("href")??"")}}},{name:"Yabai",url:/https?:\/\/(www\.)?yabai.si\/g\/.+\/read/,homepage:"https://yabai.si/",language:[bo.ENGLISH],category:wo.HENTAI,async run(){const e=document.querySelectorAll("nav select option").length,n={title:document.querySelector("title")?.textContent?.trim(),series:"../",pages:e,prev:"#",next:"#",listImages:[""],async before(){n.listImages=await d(()=>{const e=document.querySelector("select option");e&&(e.selected=!0),document.querySelector("select")?.dispatchEvent(new Event("change"))},e,'button[title="Next"]',"h1 + div","img.mx-auto","src")}};return n}},jo],oi="undefined"!=typeof GM_info?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}},ii=()=>{const e=bowser.getParser(window.navigator.userAgent).getPlatformType(!0);return"mobile"===e||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":"tablet"===e||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},ri=(e,n="settings")=>{if("undefined"!=typeof GM_addValueChangeListener)try{return GM_addValueChangeListener(n,(n,t,o,i)=>{i&&e(o)})}catch(e){m("Failed to add settings listener",e)}},ai={_dispatchToast(e,n){Object.assign(n,{type:e});const t=new CustomEvent("@moaqzdev/toast",{detail:n});document.dispatchEvent(t)},success(e){this._dispatchToast("success",e)},error(e){this._dispatchToast("error",e)},warning(e){this._dispatchToast("warning",e)},info(e){this._dispatchToast("info",e)},confirm(e){this._dispatchToast("confirm",e)}};let li=[],si=0,ci=0,di=e=>{let n=[],t={get:()=>(t.lc||t.listen(()=>{})(),t.value),lc:0,listen:e=>(t.lc=n.push(e),()=>{for(let n=si+4;n<li.length;)li[n]===e?li.splice(n,4):n+=4;let o=n.indexOf(e);~o&&(n.splice(o,1),--t.lc||t.off())}),notify(e,o){ci++;let i=!li.length;for(let i of n)li.push(i,t.value,e,o);if(i){for(si=0;si<li.length;si+=4)li[si](li[si+1],li[si+2],li[si+3]);li.length=0}},off(){},set(e){let n=t.value;n!==e&&(t.value=e,t.notify(n))},subscribe(e){let n=t.listen(e);return e(t.value),n},value:e};return t},hi=(e={})=>{let n=di(e);return n.setKey=function(e,t){let o=n.value;void 0===t&&e in n.value?(n.value={...n.value},delete n.value[e],n.notify(o,e)):n.value[e]!==t&&(n.value={...n.value,[e]:t},n.notify(o,e))},n};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const pi=globalThis,ui=pi.trustedTypes,gi=ui?ui.createPolicy("lit-html",{createHTML:e=>e}):void 0,mi="$lit$",vi=`lit$${Math.random().toFixed(9).slice(2)}$`,fi="?"+vi,bi=`<${fi}>`,wi=document,ki=()=>wi.createComment(""),yi=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Ei=Array.isArray,xi="[ \t\n\f\r]",Ii=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ai=/-->/g,Mi=/>/g,Si=RegExp(`>|${xi}(?:([^\\s"'>=/]+)(${xi}*=${xi}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Ci=/'/g,_i=/"/g,Oi=/^(?:script|style|textarea|title)$/i,Ti=(e,...n)=>({_$litType$:1,strings:e,values:n}),Li=Symbol.for("lit-noChange"),$i=Symbol.for("lit-nothing"),Di=new WeakMap,Ri=wi.createTreeWalker(wi,129),Ni=(e,n)=>{const t=e.length-1,o=[];let i,r=2===n?"<svg>":3===n?"<math>":"",a=Ii;for(let n=0;n<t;n++){const t=e[n];let l,s,c=-1,d=0;for(;d<t.length&&(a.lastIndex=d,s=a.exec(t),null!==s);)d=a.lastIndex,a===Ii?"!--"===s[1]?a=Ai:void 0!==s[1]?a=Mi:void 0!==s[2]?(Oi.test(s[2])&&(i=RegExp("</"+s[2],"g")),a=Si):void 0!==s[3]&&(a=Si):a===Si?">"===s[0]?(a=i??Ii,c=-1):void 0===s[1]?c=-2:(c=a.lastIndex-s[2].length,l=s[1],a=void 0===s[3]?Si:'"'===s[3]?_i:Ci):a===_i||a===Ci?a=Si:a===Ai||a===Mi?a=Ii:(a=Si,i=void 0);const h=a===Si&&e[n+1].startsWith("/>")?" ":"";r+=a===Ii?t+bi:c>=0?(o.push(l),t.slice(0,c)+mi+t.slice(c)+vi+h):t+vi+(-2===c?n:h)}return[E(e,r+(e[t]||"<?>")+(2===n?"</svg>":3===n?"</math>":"")),o]};class zi{constructor({strings:e,_$litType$:n},t){let o;this.parts=[];let i=0,r=0;const a=e.length-1,l=this.parts,[s,c]=Ni(e,n);if(this.el=zi.createElement(s,t),Ri.currentNode=this.el.content,2===n||3===n){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=Ri.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(mi)){const n=c[r++],t=o.getAttribute(e).split(vi),a=/([.?@])?(.*)/.exec(n);l.push({type:1,index:i,name:a[2],strings:t,ctor:"."===a[1]?Fi:"?"===a[1]?Gi:"@"===a[1]?Vi:Hi}),o.removeAttribute(e)}else e.startsWith(vi)&&(l.push({type:6,index:i}),o.removeAttribute(e));if(Oi.test(o.tagName)){const e=o.textContent.split(vi),n=e.length-1;if(n>0){o.textContent=ui?ui.emptyScript:"";for(let t=0;t<n;t++)o.append(e[t],ki()),Ri.nextNode(),l.push({type:2,index:++i});o.append(e[n],ki())}}}else if(8===o.nodeType)if(o.data===fi)l.push({type:2,index:i});else{let e=-1;for(;-1!==(e=o.data.indexOf(vi,e+1));)l.push({type:7,index:i}),e+=vi.length-1}i++}}static createElement(e,n){const t=wi.createElement("template");return t.innerHTML=e,t}}class Pi{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:t}=this._$AD,o=(e?.creationScope??wi).importNode(n,!0);Ri.currentNode=o;let i=Ri.nextNode(),r=0,a=0,l=t[0];for(;void 0!==l;){if(r===l.index){let n;2===l.type?n=new Bi(i,i.nextSibling,this,e):1===l.type?n=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(n=new Ui(i,this,e)),this._$AV.push(n),l=t[++a]}r!==l?.index&&(i=Ri.nextNode(),r++)}return Ri.currentNode=wi,o}p(e){let n=0;for(const t of this._$AV)void 0!==t&&(void 0!==t.strings?(t._$AI(e,t,n),n+=t.strings.length-2):t._$AI(e[n])),n++}}class Bi{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,t,o){this.type=2,this._$AH=$i,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=t,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return void 0!==n&&11===e?.nodeType&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=x(this,e,n),yi(e)?e===$i||null==e||""===e?(this._$AH!==$i&&this._$AR(),this._$AH=$i):e!==this._$AH&&e!==Li&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>Ei(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==$i&&yi(this._$AH)?this._$AA.nextSibling.data=e:this.T(wi.createTextNode(e)),this._$AH=e}$(e){const{values:n,_$litType$:t}=e,o="number"==typeof t?this._$AC(e):(void 0===t.el&&(t.el=zi.createElement(E(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===o)this._$AH.p(n);else{const e=new Pi(o,this),t=e.u(this.options);e.p(n),this.T(t),this._$AH=e}}_$AC(e){let n=Di.get(e.strings);return void 0===n&&Di.set(e.strings,n=new zi(e)),n}k(e){Ei(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let t,o=0;for(const i of e)o===n.length?n.push(t=new Bi(this.O(ki()),this.O(ki()),this,this.options)):t=n[o],t._$AI(i),o++;o<n.length&&(this._$AR(t&&t._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Hi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,t,o,i){this.type=1,this._$AH=$i,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=i,t.length>2||""!==t[0]||""!==t[1]?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=$i}_$AI(e,n=this,t,o){const i=this.strings;let r=!1;if(void 0===i)e=x(this,e,n,0),r=!yi(e)||e!==this._$AH&&e!==Li,r&&(this._$AH=e);else{const o=e;let a,l;for(e=i[0],a=0;a<i.length-1;a++)l=x(this,o[t+a],n,a),l===Li&&(l=this._$AH[a]),r||=!yi(l)||l!==this._$AH[a],l===$i?e=$i:e!==$i&&(e+=(l??"")+i[a+1]),this._$AH[a]=l}r&&!o&&this.j(e)}j(e){e===$i?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Fi extends Hi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$i?void 0:e}}class Gi extends Hi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$i)}}class Vi extends Hi{constructor(e,n,t,o,i){super(e,n,t,o,i),this.type=5}_$AI(e,n=this){if((e=x(this,e,n,0)??$i)===Li)return;const t=this._$AH,o=e===$i&&t!==$i||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,i=e!==$i&&(t===$i||o);o&&this.element.removeEventListener(this.name,this,t),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ui{constructor(e,n,t){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(e){x(this,e)}}const Wi=pi.litHtmlPolyfillSupport;Wi?.(zi,Bi),(pi.litHtmlVersions??=[]).push("3.3.1");const ji=e=>(...n)=>({_$litDirective$:e,values:n});
/**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */let Zi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,t){this._$Ct=e,this._$AM=n,this._$Ci=t}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const Qi=(e,n)=>{const t=e._$AN;if(void 0===t)return!1;for(const e of t)e._$AO?.(n,!1),Qi(e,n);return!0},qi=e=>{let n,t;do{if(void 0===(n=e._$AM))break;t=n._$AN,t.delete(e),e=n}while(0===t?.size)},Yi=e=>{for(let n;n=e._$AM;e=n){let t=n._$AN;if(void 0===t)n._$AN=t=new Set;else if(t.has(e))break;t.add(e),Xi(n)}},Xi=e=>{2==e.type&&(e._$AP??=A,e._$AQ??=I)};let Ki=class extends Zi{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,t){super._$AT(e,n,t),Yi(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(Qi(this,e),qi(this))}setValue(e){if((()=>void 0===this._$Ct.strings)())this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}};
/**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const Ji=()=>new er;let er=class{};const nr=new WeakMap,tr=ji(class extends Ki{render(e){return $i}update(e,[n]){const t=n!==this.G;return t&&void 0!==this.G&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=n,this.ht=e.options?.host,this.rt(this.ct=e.element)),$i}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){const n=this.ht??globalThis;let t=nr.get(n);void 0===t&&(t=new WeakMap,nr.set(n,t)),void 0!==t.get(this.G)&&this.G.call(this.ht,void 0),t.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?nr.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),or=[{ID:"en_US",NAME:"English (US)",STARTING:"Starting Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_COLOR:"Color",THEME_HUE:"Color Hue",THEME_SHADE:"Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed Pages/Second",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Left to Right",VIEW_MODE_RIGHT:"Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",ENABLE_COMMENTS:"Capture Comments (When available)",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from: Page ##num## (Only ONCE per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:"\n    <h3>Supported Keys</h3>\n    Allowed modifiers: shift, option, alt, ctrl, control, command. <br/>\n    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>\n    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>\n  ",ATTENTION:"Attention",WARNING:"Warning",BUTTON_RESET_SETTINGS:"Reset Settings",SETTINGS_RESET:"Settings have been reset, reload the page to take effect",LANGUAGE_CHANGED:"Language has been changed, reload the page to take effect",AUTO_DOWNLOAD:"Next time a chapter finish loading you will be prompted to save automatically",LAZY_LOAD:"Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",LAZY_LOAD_IMAGES_ENABLE:"Enable Lazy Load Images",LAZY_LOAD_IMAGES:"Lazy Start From Page (between 5 and 100)",RETURN_CHAPTER_LIST:"Return to Chapter List",PAGES_LOADED:"Pages Loaded",GO_TO_PAGE:"Go to Page",ENLARGE:"Enlarge",RESTORE:"Restore",REDUCE:"Reduce",FIT_WIDTH:"Fit Width",FIT_HEIGHT:"Fit Height",PERCENT:"Percent",TOGGLE_CONTROLS:"Toggle page controls",ZOOM_IN:"Zoom In",ZOOM_OUT:"Zoom Out",ZOOM_RESET:"Zoom Reset",ZOOM_WIDTH:"Zoom to Width",ZOOM_HEIGHT:"Zoom to Height",HIDE:"Hide",RELOAD:"Reload",SLOWLY:"Slowly",NORMAL:"Normal",FAST:"Fast",EXTREME:"Extreme",ALL_PAGES:"All Pages",SPEED_WARNING:"Loading Speed too High",SPEED_WARNING_MESSAGE:"This speed is not recommended.<br/> It may hurt some servers or get your IP marked as DDoS attacker.<br/> Please use with caution!",SCROLL_UP:"Scroll Up",SCROLL_DOWN:"Scroll Down",CLOSE:"Close",LIST_EMPTY:"List Empty",DISPLAY_COMMENTS:"Display Comments",COMMENTS:"Comments Section",SCROLL_START:"Toggle Auto Scroll",INCREASE_SPEED:"Increase Scroll Speed",DECREASE_SPEED:"Decrease Scroll Speed",AUTO_SCROLL_HEIGHT:"Auto Scroll Speed in Pixels",VERTICAL_SEPARATOR:"Show Vertical Separators",END:"End",SCOPE:"Scope",GLOBAL:"Global",GENERAL:"General",LOADING:"Loading",ZOOM:"Zoom",OTHERS:"Others",NAVBAR_TYPE:"Change Navbar Type",NAVBAR_BOTTOM:"Bottom",NAVBAR_LEFT:"Left",NAVBAR_RIGHT:"Right",NAVBAR_DISABLED:"Disabled",ENABLE_PAGINATION:"Enable Pagination",FILE_MENU:"Main Menu",VIEW_MENU:"View Menu",ZOOM_MENU:"Zoom Menu"},{ID:"es_ES",NAME:"Español (ES)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando lectura desde la Página ",WAITING:"Por favor espere, 3 segundos...",CHOOSE_BEGINNING:"Elija la página en la que comenzar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Ajustes",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de color",THEME:"Tema",THEME_COLOR:"Color",THEME_HUE:"Matiz del color",THEME_SHADE:"Saturación del color",DEFAULT_LOAD_MODE:"Modo de carga por defecto",LOAD_MODE_NORMAL:"Normal (Espera 3s)",LOAD_MODE_ALWAYS:"Siempre (Inmediatamente)",LOAD_MODE_NEVER:"Nunca (Manualmente)",LOAD_SPEED:"Velocidad carga página/segundo",DEFAULT_ZOOM:"Zoom por defecto (entre 5 y 200)",DEFAULT_ZOOM_MODE:"Modo de zoom por defecto",MINIMUM_ZOOM:"Zoom mínimo relativo al ancho de la pantalla",ZOOM_STEP:"Paso entre cambios de zoom (entre 5 y 50)",DEFAULT_VIEW_MODE:"Modo de visualización por defecto",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Izquierda a derecha",VIEW_MODE_RIGHT:"Derecha a izquierda",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Ajustar ancho si es demasiado grande",SHOW_THUMBNAILS:"Mostrar miniaturas",ENABLE_COMMENTS:"Capturar comentarios (cuando esté disponible)",HIDE_CONTROLS:"Ocultar siempre la barra de controles",HEADER_TYPE:"Cambiar tipo de cabecera",HEADER_HOVER:"Pasar por encima",HEADER_SCROLL:"Desplazamiento",HEADER_CLICK:"Hacer click",HEADER_FIXED:"Fijo",HEADER_SIMPLE:"Sencillo",BUTTON_DOWNLOAD:"Descargar",DOWNLOAD_ZIP:"Descargar fichero Zip",DOWNLOAD_IMAGES:"Autodescargar imágenes como Zip",BUTTON_NEXT:"Siguiente",NEXT_CHAPTER:"Siguiente capítulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capítulo anterior",BOOKMARKS:"Marcadores",BOOKMARK:"Marcador",BOOKMARK_REMOVED:"Marcador eliminado",BOOKMARK_SAVED:"Marcador guardado",BOOKMARK_MESSAGE:"La próxima vez que abra este capítulo, continuará desde la página ##num## (Sólo UNA VEZ por Marcador)",KEYBINDINGS:"Atajos de teclado",EDIT_KEYBINDS:"Editar atajos",SAVE_KEYBINDS:"Guardar atajos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Guardar",KEYBIND_RULES:"\n    <h3>Teclas soportadas</h3>\n    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>\n    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>\n    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>\n  ",ATTENTION:"Atención",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Reiniciar ajustes(Reset Settings)",SETTINGS_RESET:"Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto",LANGUAGE_CHANGED:"Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto",AUTO_DOWNLOAD:"La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente",LAZY_LOAD:"La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",LAZY_LOAD_IMAGES_ENABLE:"Habilitar carga de imágenes diferida",LAZY_LOAD_IMAGES:"Empezar carga diferida a partir de la página (entre 5 y 100)",RETURN_CHAPTER_LIST:"Regresar a la lista de capítulos",PAGES_LOADED:"Páginas cargadas",GO_TO_PAGE:"Ir a página",ENLARGE:"Agrandar",RESTORE:"Restaurar",REDUCE:"Reducir",FIT_WIDTH:"Ajustar al ancho",FIT_HEIGHT:"Ajustar al alto",PERCENT:"Porcentual",TOGGLE_CONTROLS:"Alternar controles de página",ZOOM_IN:"Acercar",ZOOM_OUT:"Alejar",ZOOM_RESET:"Restablecer zoom",ZOOM_WIDTH:"Zoom al ancho",ZOOM_HEIGHT:"Zoom al alto",HIDE:"Ocultar",RELOAD:"Recargar",SLOWLY:"Lento",NORMAL:"Normal",FAST:"Rápido",EXTREME:"Extremo",ALL_PAGES:"Todas las páginas",SPEED_WARNING:"Velocidad de carga muy alta",SPEED_WARNING_MESSAGE:"No se recomienda esta velocidad.<br/> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br/> ¡Utilícelo con precaución!",SCROLL_UP:"Desplazar arriba",SCROLL_DOWN:"Desplazar abajo",CLOSE:"Cerrar",LIST_EMPTY:"Lista vacía",DISPLAY_COMMENTS:"Mostrar comentarios",COMMENTS:"Sección de comentarios",SCROLL_START:"Alternar desplazamiento automático",INCREASE_SPEED:"Aumentar la velocidad de desplazamiento",DECREASE_SPEED:"Disminuir la velocidad de desplazamiento",AUTO_SCROLL_HEIGHT:"Velocidad de desplazamiento automático en píxeles",VERTICAL_SEPARATOR:"Mostrar separadores verticales",END:"Fin",SCOPE:"Alcance",GLOBAL:"Global",GENERAL:"General",LOADING:"Carga",ZOOM:"Zoom",OTHERS:"Otros",NAVBAR_TYPE:"Cambiar el tipo de barra de navegación",NAVBAR_BOTTOM:"Abajo",NAVBAR_LEFT:"Izquierda",NAVBAR_RIGHT:"Derecha",NAVBAR_DISABLED:"Desactivado",ENABLE_PAGINATION:"Habilitar paginación",FILE_MENU:"Menú principal",VIEW_MENU:"Ver menú",ZOOM_MENU:"Menú Zoom"},{ID:"pt_BR",NAME:"Portugues (Brasil)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando leitura na Pagina ",WAITING:"Por Favor espere, 3 segundos...",CHOOSE_BEGINNING:"Escolha a pagina de onde começar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Configurações",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de Color",THEME:"Tema",THEME_COLOR:"Cor",THEME_HUE:"Tom da Cor",THEME_SHADE:"Saturação da Cor",DEFAULT_LOAD_MODE:"Forma de Carregamento Padrão",LOAD_MODE_NORMAL:"Normal(Esperando 3 sec)",LOAD_MODE_ALWAYS:"Sempre(Imediatamente)",LOAD_MODE_NEVER:"Nunca(Manualmente)",LOAD_SPEED:"Velocidade de Carregamento Paginas/Segundo",DEFAULT_ZOOM:"Zoom padrão (entre 5 e 200)",DEFAULT_ZOOM_MODE:"Modo de Zoom padrão",MINIMUM_ZOOM:"Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",ZOOM_STEP:"Precisão da Mudança do Zoom (entre 5 e 50)",DEFAULT_VIEW_MODE:"Modo de Visualização Padrão",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Esquerda para Direita",VIEW_MODE_RIGHT:"Direita para Esquerda",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Encher a tela se grande demais",SHOW_THUMBNAILS:"Mostra Miniaturas",ENABLE_COMMENTS:"Capturar comentários (quando disponível)",HIDE_CONTROLS:"Sempre esconder controles das paginas",HEADER_TYPE:"Mudar Tipo de Cabeçalho",HEADER_HOVER:"Passar por perto",HEADER_SCROLL:"Rolagem do Mouse",HEADER_CLICK:"Click",HEADER_FIXED:"Fixo",HEADER_SIMPLE:"Simples",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Baixar arquivo Zip",DOWNLOAD_IMAGES:"Download das Imagens como Zip Automaticamente",BUTTON_NEXT:"Proximo",NEXT_CHAPTER:"Proximo Capitulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capitulo Anterior",BOOKMARKS:"Marca paginas",BOOKMARK:"Marcar pagina",BOOKMARK_REMOVED:"Marca pagina Removido",BOOKMARK_SAVED:"Marca pagina Salvo",BOOKMARK_MESSAGE:"Proxima vez que abrir este capitulo continuará a partir da Pagina ##num## (Apenas UMA VEZ por marca pagina)",KEYBINDINGS:"Atalhos",EDIT_KEYBINDS:"Editar Atalhos",SAVE_KEYBINDS:"Salvar Atalhos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Salvar",KEYBIND_RULES:"\n    <h3>Teclas Suportadas</h3>\n    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>\n    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>\n    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>\n  ",ATTENTION:"Atenção",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Limpar Configurações(Reset Settings)",SETTINGS_RESET:"Configurações foram limpas, recarregue o site para efetivar a alteração",LANGUAGE_CHANGED:"Idioma foi alterado, recarregue o site para efetivar a alteração",AUTO_DOWNLOAD:"Proxima vez que abrir um capitulo download iniciara automaticamente",LAZY_LOAD:"Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",LAZY_LOAD_IMAGES_ENABLE:"Ativar Carregamento de imagens preguiçoso",LAZY_LOAD_IMAGES:"Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)",RETURN_CHAPTER_LIST:"Voltar a lista de Capitulos",PAGES_LOADED:"Paginas Carregadas",GO_TO_PAGE:"Pular para",ENLARGE:"Aumentar",RESTORE:"Restaurar",REDUCE:"Diminuir",FIT_WIDTH:"Preencher Largura",FIT_HEIGHT:"Preencher Altura ",PERCENT:"Percentual",TOGGLE_CONTROLS:"Mostar controles de pagina",ZOOM_IN:"Mais Zoom",ZOOM_OUT:"Menos Zoom",ZOOM_RESET:"Resetar Zoom",ZOOM_WIDTH:"Zoom para Largura",ZOOM_HEIGHT:"Zoom para Altura",HIDE:"Esconder",RELOAD:"Recarregar",SLOWLY:"Devagar",NORMAL:"Normal",FAST:"Rapido",EXTREME:"Extremo",ALL_PAGES:"Todas as Paginas",SPEED_WARNING:"Velocidade de Carregamento muito alta",SPEED_WARNING_MESSAGE:"Essa velocidade não é recomendada.<br/> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br/> Use com cuidado!",SCROLL_UP:"Subir Pagina",SCROLL_DOWN:"Descer Pagina",CLOSE:"Fechar",LIST_EMPTY:"Lista Vazia",DISPLAY_COMMENTS:"Mostar Comentarios",COMMENTS:"Seção de comentários",SCROLL_START:"Ativar Rolagem Automatica",INCREASE_SPEED:"Aumentar Valocidade da Rolagem",DECREASE_SPEED:"Diminuir Valocidade da Rolagem",AUTO_SCROLL_HEIGHT:"Velocidade da Rolagem Automatica em Pixels",VERTICAL_SEPARATOR:"Mostrar Separadores Verticais",END:"Fin",SCOPE:"Escopo",GLOBAL:"Global",GENERAL:"Geral",LOADING:"Carregamento",ZOOM:"Zoom",OTHERS:"Outros",NAVBAR_TYPE:"Mudar barra de navegação",NAVBAR_BOTTOM:"Embaixo",NAVBAR_LEFT:"Esquerda",NAVBAR_RIGHT:"Direita",NAVBAR_DISABLED:"Desativado",ENABLE_PAGINATION:"Ligar Paginação",FILE_MENU:"Menu Principal",VIEW_MENU:"Menu de Visualizações",ZOOM_MENU:"Menu de Zoom"},{ID:"zh_CN",NAME:"中文 (简体)",STARTING:"正在启动 Manga OnlineViewer",RESUME:"从页面继续阅读 ",WAITING:"请等待3秒钟...",CHOOSE_BEGINNING:"选择要开始的页数:",BUTTON_START:"启动Manga OnlineViewer",SETTINGS:"设置",LANGUAGE:"语言",COLOR_SCHEME:"配色方案",THEME:"主题",THEME_COLOR:"颜色",THEME_HUE:"色相",THEME_SHADE:"色度",DEFAULT_LOAD_MODE:"默认加载模式",LOAD_MODE_NORMAL:"等待模式(等待3秒自动加载 )",LOAD_MODE_ALWAYS:"自动模式(无需等待)",LOAD_MODE_NEVER:"手动模式(点击启动)",LOAD_SPEED:"加载速度页数/秒",DEFAULT_ZOOM:"默认缩放 (最小 5 最大 200)",DEFAULT_ZOOM_MODE:"默认缩放模式",MINIMUM_ZOOM:"相对于屏幕宽度的最小缩放 (最小 30 最大 100)",ZOOM_STEP:"缩放级别 (最小 5 最大 50)",DEFAULT_VIEW_MODE:"默认视图模式",VIEW_MODE_VERTICAL:"垂直有缝",VIEW_MODE_LEFT:"从左到右",VIEW_MODE_RIGHT:"从右到左",VIEW_MODE_WEBCOMIC:"垂直无缝",FIT_WIDTH_OVERSIZED:"如果尺寸过大、则适合宽度",SHOW_THUMBNAILS:"显示缩略图",ENABLE_COMMENTS:"捕获评论（如果可用）",HIDE_CONTROLS:"始终隐藏页面控件",HEADER_TYPE:"更改标题显示方式",HEADER_HOVER:"悬停",HEADER_SCROLL:"滚动",HEADER_CLICK:"点击",HEADER_FIXED:"固定",HEADER_SIMPLE:"简单",BUTTON_DOWNLOAD:"下载",DOWNLOAD_ZIP:"下载压缩文件",DOWNLOAD_IMAGES:"自动将图片下载成ZIP",BUTTON_NEXT:"下一页",NEXT_CHAPTER:"下一章",BUTTON_PREVIOUS:"上一页",PREVIOUS_CHAPTER:"上一章",BOOKMARKS:"书签",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"删除书签",BOOKMARK_SAVED:"保存书签",BOOKMARK_MESSAGE:"下次打开本章时，将从: 页码 ##num## (仅一次 每个书签)",KEYBINDINGS:"快捷键",EDIT_KEYBINDS:"编辑键绑定",SAVE_KEYBINDS:"保存键绑定",BUTTON_EDIT:"编辑",BUTTON_SAVE:"救",KEYBIND_RULES:"\n    <h3>支持的密钥</h3>\n    允许的修饰符: shift, option, alt, ctrl, control, command. <br/>\n    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>\n    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>\n  ",ATTENTION:"注意",WARNING:"警告",BUTTON_RESET_SETTINGS:"重置设置(Reset Settings)",SETTINGS_RESET:"设置已重置、重新加载页面才能生效",LANGUAGE_CHANGED:"语言已更改、重新加载页面才能生效",AUTO_DOWNLOAD:"下次章节加载完成时、系统将提示您自动保存",LAZY_LOAD:"延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",LAZY_LOAD_IMAGES_ENABLE:"启用延迟加载图像",LAZY_LOAD_IMAGES:"惰性加载从页面 (最小 5 最大 100)",RETURN_CHAPTER_LIST:"返回章节列表",PAGES_LOADED:"已加载的页数",GO_TO_PAGE:"转到页数",ENLARGE:"放大",RESTORE:"还原",REDUCE:"缩小",FIT_WIDTH:"适合宽度",FIT_HEIGHT:"适合高度",PERCENT:"百分之",TOGGLE_CONTROLS:"显示隐藏页面控件",ZOOM_IN:"放大",ZOOM_OUT:"缩小",ZOOM_RESET:"还原",ZOOM_WIDTH:"适合宽度",ZOOM_HEIGHT:"适合高度",HIDE:"显示隐藏页面控件",RELOAD:"重新加载",SLOWLY:"慢速",NORMAL:"正常",FAST:"快速",EXTREME:"极端",ALL_PAGES:"所有页面",SPEED_WARNING:"加载速度过高",SPEED_WARNING_MESSAGE:"不建议使用此速度.<br/>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br/>请谨慎使用!",SCROLL_UP:"向上滚动",SCROLL_DOWN:"向下滚动",CLOSE:"关闭",LIST_EMPTY:"没有收藏书签",DISPLAY_COMMENTS:"显示注释",COMMENTS:"评论部分",SCROLL_START:"切换自动滚动",INCREASE_SPEED:"增加滚动速度",DECREASE_SPEED:"降低滚动速度",AUTO_SCROLL_HEIGHT:"自动滚动速度（以像素为单位）",VERTICAL_SEPARATOR:"显示垂直分隔符",END:"结尾",SCOPE:"范围",GLOBAL:"全球",GENERAL:"常规",LOADING:"装载",ZOOM:"缩放",OTHERS:"别人",NAVBAR_TYPE:"更改导航栏类型",NAVBAR_BOTTOM:"底部",NAVBAR_LEFT:"左边",NAVBAR_RIGHT:"正确的",NAVBAR_DISABLED:"已禁用",ENABLE_PAGINATION:"启用分页",FILE_MENU:"主菜单",VIEW_MENU:"查看菜单",ZOOM_MENU:"缩放菜单"},{ID:"de_DE",NAME:"Deutsch",STARTING:"Starte Manga OnlineViewer",RESUME:"Fortsetzen ab Seite ",WAITING:"Bitte warten, 3 Sekunden...",CHOOSE_BEGINNING:"Wähle die Startseite:",BUTTON_START:"Manga OnlineViewer starten",SETTINGS:"Einstellungen",LANGUAGE:"Sprache",COLOR_SCHEME:"Farbschema",THEME:"Design",THEME_COLOR:"Farbe",THEME_HUE:"Farbton",THEME_SHADE:"Schattierung",DEFAULT_LOAD_MODE:"Standard-Lademodus",LOAD_MODE_NORMAL:"Normal (3 Sek. warten)",LOAD_MODE_ALWAYS:"Immer (sofort)",LOAD_MODE_NEVER:"Nie (manuell)",LOAD_SPEED:"Ladegeschwindigkeit Seiten/Sekunde",DEFAULT_ZOOM:"Standard-Zoom (zwischen 5 und 200)",DEFAULT_ZOOM_MODE:"Standard-Zoommodus",MINIMUM_ZOOM:"Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)",ZOOM_STEP:"Zoom-Schrittgröße (zwischen 5 und 50)",DEFAULT_VIEW_MODE:"Standard-Ansichtsmodus",VIEW_MODE_VERTICAL:"Vertikal",VIEW_MODE_LEFT:"Links nach Rechts",VIEW_MODE_RIGHT:"Rechts nach Links",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Breite anpassen bei Übergröße",SHOW_THUMBNAILS:"Miniaturansichten anzeigen",ENABLE_COMMENTS:"Kommentare erfassen (wenn verfügbar)",HIDE_CONTROLS:"Seitensteuerung immer ausblenden",HEADER_TYPE:"Kopfbereichstyp ändern",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scrollen",HEADER_CLICK:"Klicken",HEADER_FIXED:"Fixiert",HEADER_SIMPLE:"Einfach",BUTTON_DOWNLOAD:"Herunterladen",DOWNLOAD_ZIP:"Zip-Datei herunterladen",DOWNLOAD_IMAGES:"Bilder automatisch als Zip herunterladen",BUTTON_NEXT:"Weiter",NEXT_CHAPTER:"Nächstes Kapitel",BUTTON_PREVIOUS:"Zurück",PREVIOUS_CHAPTER:"Vorheriges Kapitel",BOOKMARKS:"Lesezeichen",BOOKMARK:"Lesezeichen",BOOKMARK_REMOVED:"Lesezeichen entfernt",BOOKMARK_SAVED:"Lesezeichen gespeichert",BOOKMARK_MESSAGE:"Beim nächsten Öffnen dieses Kapitels wird ab fortgesetzt: Seite ##num## (Nur EINMAL pro Lesezeichen)",KEYBINDINGS:"Tastenkürzel",EDIT_KEYBINDS:"Tastenkürzel bearbeiten",SAVE_KEYBINDS:"Tastenkürzel speichern",BUTTON_EDIT:"Bearbeiten",BUTTON_SAVE:"Speichern",KEYBIND_RULES:"\n    <h3>Unterstützte Tasten</h3>\n    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. <br/>\n    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>\n    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>\n  ",ATTENTION:"Achtung",WARNING:"Warnung",BUTTON_RESET_SETTINGS:"Einstellungen zurücksetzen(Reset Settings)",SETTINGS_RESET:"Die Einstellungen wurden zurückgesetzt, bitte Seite neu laden",LANGUAGE_CHANGED:"Die Sprache wurde geändert, bitte Seite neu laden",AUTO_DOWNLOAD:"Beim nächsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern möchtest",LAZY_LOAD:"Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",LAZY_LOAD_IMAGES_ENABLE:"Lazy Load Bilder aktivieren",LAZY_LOAD_IMAGES:"Lazy Start ab Seite (zwischen 5 und 100)",RETURN_CHAPTER_LIST:"Zur Kapitelübersicht zurückkehren",PAGES_LOADED:"Seiten geladen",GO_TO_PAGE:"Gehe zu Seite",ENLARGE:"Vergrößern",RESTORE:"Wiederherstellen",REDUCE:"Wiederherstellen",FIT_WIDTH:"Breite anpassen",FIT_HEIGHT:"Höhe anpassen",PERCENT:"Prozent",TOGGLE_CONTROLS:"Seitensteuerung umschalten",ZOOM_IN:"Hineinzoomen",ZOOM_OUT:"Herauszoomen",ZOOM_RESET:"Zoom zurücksetzen",ZOOM_WIDTH:"Auf Breite zoomen",ZOOM_HEIGHT:"Auf Höhe zoomen",HIDE:"Ausblenden",RELOAD:"Neu laden",SLOWLY:"Langsam",NORMAL:"Normal",FAST:"Schnell",EXTREME:"Extrem",ALL_PAGES:"Alle Seiten",SPEED_WARNING:"Ladegeschwindigkeit zu hoch",SPEED_WARNING_MESSAGE:"Diese Geschwindigkeit wird nicht empfohlen.<br/> Sie kann einige Server überlasten oder deine IP als DDoS-Angreifer markieren.<br/> Bitte mit Vorsicht verwenden!",SCROLL_UP:"Nach oben scrollen",SCROLL_DOWN:"Nach unten scrollen",CLOSE:"Schließen",LIST_EMPTY:"Liste leer",DISPLAY_COMMENTS:"Kommentare anzeigen",COMMENTS:"Kommentarbereich",SCROLL_START:"Auto-Scroll umschalten",INCREASE_SPEED:"Scrollgeschwindigkeit erhöhen",DECREASE_SPEED:"Scrollgeschwindigkeit verringern",AUTO_SCROLL_HEIGHT:"Auto-Scroll-Geschwindigkeit in Pixel",VERTICAL_SEPARATOR:"Vertikale Trenner anzeigen",END:"Ende",SCOPE:"Bereich",GLOBAL:"Global",GENERAL:"Allgemein",LOADING:"Lädt",ZOOM:"Zoom",OTHERS:"Sonstiges",NAVBAR_TYPE:"Navigationsleistentyp ändern",NAVBAR_BOTTOM:"Unten",NAVBAR_LEFT:"Links",NAVBAR_RIGHT:"Rechts",NAVBAR_DISABLED:"Deaktiviert",ENABLE_PAGINATION:"Paginierung aktivieren",FILE_MENU:"Hauptmenü",VIEW_MENU:"Menü „Ansicht“",ZOOM_MENU:"Zoom-Menü"},{ID:"fr_FR",NAME:"Français (FR)",STARTING:"Démarrage Manga OnlineViewer",RESUME:"Reprise de la lecture à partir de la Page ",WAITING:"Veuillez patienter, 3 secondes...",CHOOSE_BEGINNING:"Choisissez la page par laquelle commencer :",BUTTON_START:"Démarrer Manga OnlineViewer",SETTINGS:"Paramètres",LANGUAGE:"Langue",COLOR_SCHEME:"Palette de couleurs",THEME:"Thème",THEME_COLOR:"Couleur",THEME_HUE:"Teinte de couleur",THEME_SHADE:"Nuance de couleur",DEFAULT_LOAD_MODE:"Mode de chargement par défaut",LOAD_MODE_NORMAL:"Normal (attendre 3 s)",LOAD_MODE_ALWAYS:"Toujours (immédiatement)",LOAD_MODE_NEVER:"Jamais (manuellement)",LOAD_SPEED:"Vitesse de chargement des pages/seconde",DEFAULT_ZOOM:"Zoom par défaut (entre 5 et 200)",DEFAULT_ZOOM_MODE:"Mode de zoom par défaut",MINIMUM_ZOOM:"Zoom minimum par rapport à la largeur de l'écran (entre 30 et 100)",ZOOM_STEP:"Pas de changement de zoom (entre 5 et 50)",DEFAULT_VIEW_MODE:"Mode d'affichage par défaut",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"De gauche à droite",VIEW_MODE_RIGHT:"De droite à gauche",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Ajuster à la largeur si surdimensionné",SHOW_THUMBNAILS:"Afficher les vignettes",ENABLE_COMMENTS:"Capturer les commentaires (si disponibles)",HIDE_CONTROLS:"Toujours masquer les contrôles de page",HEADER_TYPE:"Changer le type d'en-tête",HEADER_HOVER:"Survol",HEADER_SCROLL:"Défilement",HEADER_CLICK:"Clic",HEADER_FIXED:"Fixe",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Télécharger",DOWNLOAD_ZIP:"Télécharger le fichier Zip",DOWNLOAD_IMAGES:"Télécharger les images en Zip automatiquement",BUTTON_NEXT:"Suivant",NEXT_CHAPTER:"Chapitre suivant",BUTTON_PREVIOUS:"Précédent",PREVIOUS_CHAPTER:"Chapitre précédent",BOOKMARKS:"Favoris",BOOKMARK:"Favori",BOOKMARK_REMOVED:"Favori supprimé",BOOKMARK_SAVED:"Favori enregistré",BOOKMARK_MESSAGE:"La prochaine fois que vous ouvrirez ce chapitre, il reprendra à partir de: Page ##num## (Seulement UNE FOIS par favori)",KEYBINDINGS:"Raccourcis clavier",EDIT_KEYBINDS:"Modifier les raccourcis clavier",SAVE_KEYBINDS:"Enregistrer les raccourcis clavier",BUTTON_EDIT:"Modifier",BUTTON_SAVE:"Enregistrer",KEYBIND_RULES:"\n    <h3>Touches prises en charge</h3>\n    Modificateurs autorisés : shift, option, alt, ctrl, control, command. <br/>\n    Touches spéciales : backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>\n    Exemples : <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>\n  ",ATTENTION:"Attention",WARNING:"Avertissement",BUTTON_RESET_SETTINGS:"Réinitialiser les paramètres",SETTINGS_RESET:"Les paramètres ont été réinitialisés, rechargez la page pour prendre effet",LANGUAGE_CHANGED:"La langue a été modifiée, rechargez la page pour prendre effet",AUTO_DOWNLOAD:"La prochaine fois qu'un chapitre finira de se charger, il vous sera proposé de l'enregistrer automatiquement",LAZY_LOAD:"Le chargement paresseux est incompatible avec le téléchargement zip, vous ne pourrez pas télécharger avec ce paramètre activé.<br/> Suggestion : <span style='color:red;font-weight:bold'>Désactivez les vignettes</span> pour économiser de la bande passante/mémoire.",LAZY_LOAD_IMAGES_ENABLE:"Activer le chargement paresseux des images",LAZY_LOAD_IMAGES:"Début du chargement paresseux à partir de la page (entre 5 et 100)",RETURN_CHAPTER_LIST:"Retour à la liste des chapitres",PAGES_LOADED:"Pages chargées",GO_TO_PAGE:"Aller à la page",ENLARGE:"Agrandir",RESTORE:"Restaurer",REDUCE:"Réduire",FIT_WIDTH:"Ajuster à la largeur",FIT_HEIGHT:"Ajuster à la hauteur",PERCENT:"Pourcentage",TOGGLE_CONTROLS:"Basculer les contrôles de page",ZOOM_IN:"Zoom avant",ZOOM_OUT:"Zoom arrière",ZOOM_RESET:"Réinitialiser le zoom",ZOOM_WIDTH:"Zoomer à la largeur",ZOOM_HEIGHT:"Zoomer à la hauteur",HIDE:"Masquer",RELOAD:"Recharger",SLOWLY:"Lentement",NORMAL:"Normal",FAST:"Rapide",EXTREME:"Extrême",ALL_PAGES:"Toutes les pages",SPEED_WARNING:"Vitesse de chargement trop élevée",SPEED_WARNING_MESSAGE:"Cette vitesse n'est pas recommandée.<br/> Elle peut nuire à certains serveurs ou marquer votre IP comme un attaquant DDoS.<br/> Veuillez l'utiliser avec prudence !",SCROLL_UP:"Faire défiler vers le haut",SCROLL_DOWN:"Faire défiler vers le bas",CLOSE:"Fermer",LIST_EMPTY:"Liste vide",DISPLAY_COMMENTS:"Afficher les commentaires",COMMENTS:"Section des commentaires",SCROLL_START:"Basculer le défilement automatique",INCREASE_SPEED:"Augmenter la vitesse de défilement",DECREASE_SPEED:"Diminuer la vitesse de défilement",AUTO_SCROLL_HEIGHT:"Vitesse de défilement automatique en pixels",VERTICAL_SEPARATOR:"Afficher les séparateurs verticaux",END:"Fin",SCOPE:"Portée",GLOBAL:"Global",GENERAL:"Général",LOADING:"Chargement",ZOOM:"Zoom",OTHERS:"Autres",NAVBAR_TYPE:"Changer le type de barre de navigation",NAVBAR_BOTTOM:"Bas",NAVBAR_LEFT:"Gauche",NAVBAR_RIGHT:"Droite",NAVBAR_DISABLED:"Désactivé",ENABLE_PAGINATION:"Activer la pagination",FILE_MENU:"Menu principal",VIEW_MENU:"Menu Affichage",ZOOM_MENU:"Menu Zoom"}],ir=(e,n)=>{const t=(e,n)=>_.transform(e,(e,o,i)=>{_.isEqual(o,n[i])||(_.isObject(o)&&_.isObject(n[i])&&!_.isArray(o)?e[i]=t(o,n[i]):e[i]=o)});return t(e,n)},rr={bookmarks:[],colorScheme:"dark",downloadZip:!1,enableComments:!0,enabled:!1,fitWidthIfOversize:!0,header:"scroll",hidePageControls:!1,lazyLoadImages:!1,lazyStart:50,loadMode:"wait",locale:"en_US",maxReload:5,minZoom:30,navbar:"bottom",pagination:!1,scrollHeight:25,theme:"#29487D",throttlePageLoad:1e3,viewMode:"WebComic",zoomMode:"percent",zoomStep:30,zoomValue:100,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],RETURN_CHAPTER_LIST:["backspace","del"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],SCROLL_START:["space"],INCREASE_SPEED:["."],DECREASE_SPEED:[","]}},ar={lazyLoadImages:!0,fitWidthIfOversize:!0,navbar:"disabled",viewMode:"WebComic",header:"scroll",hidePageControls:!0,pagination:!1};let lr=_.defaultsDeep(function(e){return b("settings",e)}(M()),M()),sr=_.defaultsDeep(function(e){return b(window.location.hostname,e)}(M(!1)),M(!1));const cr=()=>!0===sr?.enabled,dr=e=>cr()&&!["locale","bookmarks","keybinds"].includes(e),hr=hi(cr()?{...sr,locale:lr.locale,keybinds:lr.keybinds,bookmarks:lr.bookmarks}:lr),pr=(so=e=>or.find(n=>n.ID===e.locale)??or[1],((e,n)=>{let t,o;Array.isArray(e)||(e=[e]);let i=()=>{if(o===ci)return;o=ci;let i=e.map(e=>e.get());if(!t||i.some((e,n)=>e!==t[n])){t=i;let e=n(...i);e&&e.then&&e.t?e.then(e=>{t===i&&r.set(e)}):(r.set(e),o=ci)}},r=di(void 0),a=r.get;r.get=()=>(i(),a());let l=i;var s,c,d,h,p;return c=()=>{let n=e.map(e=>e.listen(l));return i(),()=>{for(let e of n)e()}},h=()=>{let e=c();e&&s.events[6].push(e)},p=e=>{let n=s.listen;s.listen=(...t)=>(s.lc||s.active||(s.active=!0,e()),n(...t));let t=s.off;return s.events[6]=[],s.off=()=>{t(),setTimeout(()=>{if(s.active&&!s.lc){s.active=!1;for(let e of s.events[6])e();s.events[6]=[]}},1e3)},()=>{s.listen=n,s.off=t}},(d=s=r).events=d.events||{},d.events[15]||(d.events[15]=p(e=>{d.events[5].reduceRight((e,n)=>(n(e),e),{shared:{},...e})})),d.events[5]=d.events[5]||[],d.events[5].push(h),r})(hr,so)),ur=hi({autoScroll:!1,chapter:Ji(),currentPage:0,device:ii(),loaded:0,manga:void 0,panel:"none",scrollToPage:void 0});ri(_.debounce(function(e){const t=_.defaultsDeep(e,M()),o=lr?ir(t,lr):t;if(!n(o)){m("Imported Global Settings",o),lr=t;for(const e in o)O(e)}},300),"settings"),ri(_.debounce(function(e){const t=_.defaultsDeep(e,M(!1)),o=sr?ir(t,sr):t;if(!n(o)){m("Imported Local Settings",o),sr=t;for(const e in o)O(e)}},300),location.hostname),co="MOVSettings",ho=function(e=null){v("Current Settings (Local:",cr(),") ",e?hr.get()[e]:hr.get(),"\nGlobal Settings",e?lr[e]:lr,"\nLocal Settings",e?sr[e]:sr,"\nAppState",ur.get())},"undefined"!=typeof unsafeWindow&&(unsafeWindow[co]=ho),"undefined"!=typeof window&&(window[co]=ho);const gr=34;hr.listen(_.debounce((e,n,t)=>{if(t&&!["bookmarks","zoomValue"].includes(t)){const o=n[t],i=e[t];ai.info({title:`${t} Changed`,description:`from ${JSON.stringify(o)} to ${JSON.stringify(i)}`,duration:2e3})}},300));const mr=(e,...n)=>0===n.length?e[0]:String.raw({raw:e},...n),vr=mr,fr=mr,br={navy:"#001f3f",darkblue:"#1e4f7a",blue:"#1A2F4B",darkgreen:"#062925",green:"#1A3636",grass:"#1B3C53",teal:"#044A42",darkpurple:"#1B0044",purple:"#363062",grape:"#31326F",maroon:"#44000D"},wr={dark:{50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113",950:"#000000"},slate:{50:"oklch(98.4% 0.003 247.858)",100:"oklch(96.8% 0.007 247.896)",200:"oklch(92.9% 0.013 255.508)",300:"oklch(86.9% 0.022 252.894)",400:"oklch(70.4% 0.04 256.788)",500:"oklch(55.4% 0.046 257.417)",600:"oklch(44.6% 0.043 257.281)",700:"oklch(37.2% 0.044 257.287)",800:"oklch(27.9% 0.041 260.031)",900:"oklch(20.8% 0.042 265.755)",950:"oklch(12.9% 0.042 264.695)"},gray:{50:"oklch(98.5% 0.002 247.839)",100:"oklch(96.7% 0.003 264.542)",200:"oklch(92.8% 0.006 264.531)",300:"oklch(87.2% 0.01 258.338)",400:"oklch(70.7% 0.022 261.325)",500:"oklch(55.1% 0.027 264.364)",600:"oklch(44.6% 0.03 256.802)",700:"oklch(37.3% 0.034 259.733)",800:"oklch(27.8% 0.033 256.848)",900:"oklch(21% 0.034 264.665)",950:"oklch(13% 0.028 261.692)"},zinc:{50:"oklch(98.5% 0 0)",100:"oklch(96.7% 0.001 286.375)",200:"oklch(92% 0.004 286.32)",300:"oklch(87.1% 0.006 286.286)",400:"oklch(70.5% 0.015 286.067)",500:"oklch(55.2% 0.016 285.938)",600:"oklch(44.2% 0.017 285.786)",700:"oklch(37% 0.013 285.805)",800:"oklch(27.4% 0.006 286.033)",900:"oklch(21% 0.006 285.885)",950:"oklch(14.1% 0.005 285.823)"},neutral:{50:"oklch(98.5% 0 0)",100:"oklch(97% 0 0)",200:"oklch(92.2% 0 0)",300:"oklch(87% 0 0)",400:"oklch(70.8% 0 0)",500:"oklch(55.6% 0 0)",600:"oklch(43.9% 0 0)",700:"oklch(37.1% 0 0)",800:"oklch(26.9% 0 0)",900:"oklch(20.5% 0 0)",950:"oklch(14.5% 0 0)"},stone:{50:"oklch(98.5% 0.001 106.423)",100:"oklch(97% 0.001 106.424)",200:"oklch(92.3% 0.003 48.717)",300:"oklch(86.9% 0.005 56.366)",400:"oklch(70.9% 0.01 56.259)",500:"oklch(55.3% 0.013 58.071)",600:"oklch(44.4% 0.011 73.639)",700:"oklch(37.4% 0.01 67.558)",800:"oklch(26.8% 0.007 34.298)",900:"oklch(21.6% 0.006 56.043)",950:"oklch(14.7% 0.004 49.25)"},red:{50:"oklch(97.1% 0.013 17.38)",100:"oklch(93.6% 0.032 17.717)",200:"oklch(88.5% 0.062 18.334)",300:"oklch(80.8% 0.114 19.571)",400:"oklch(70.4% 0.191 22.216)",500:"oklch(63.7% 0.237 25.331)",600:"oklch(57.7% 0.245 27.325)",700:"oklch(50.5% 0.213 27.518)",800:"oklch(44.4% 0.177 26.899)",900:"oklch(39.6% 0.141 25.723)",950:"oklch(25.8% 0.092 26.042)"},orange:{50:"oklch(98% 0.016 73.684)",100:"oklch(95.4% 0.038 75.164)",200:"oklch(90.1% 0.076 70.697)",300:"oklch(83.7% 0.128 66.29)",400:"oklch(75% 0.183 55.934)",500:"oklch(70.5% 0.213 47.604)",600:"oklch(64.6% 0.222 41.116)",700:"oklch(55.3% 0.195 38.402)",800:"oklch(47% 0.157 37.304)",900:"oklch(40.8% 0.123 38.172)",950:"oklch(26.6% 0.079 36.259)"},amber:{50:"oklch(98.7% 0.022 95.277)",100:"oklch(96.2% 0.059 95.617)",200:"oklch(92.4% 0.12 95.746)",300:"oklch(87.9% 0.169 91.605)",400:"oklch(82.8% 0.189 84.429)",500:"oklch(76.9% 0.188 70.08)",600:"oklch(66.6% 0.179 58.318)",700:"oklch(55.5% 0.163 48.998)",800:"oklch(47.3% 0.137 46.201)",900:"oklch(41.4% 0.112 45.904)",950:"oklch(27.9% 0.077 45.635)"},yellow:{50:"oklch(98.7% 0.026 102.212)",100:"oklch(97.3% 0.071 103.193)",200:"oklch(94.5% 0.129 101.54)",300:"oklch(90.5% 0.182 98.111)",400:"oklch(85.2% 0.199 91.936)",500:"oklch(79.5% 0.184 86.047)",600:"oklch(68.1% 0.162 75.834)",700:"oklch(55.4% 0.135 66.442)",800:"oklch(47.6% 0.114 61.907)",900:"oklch(42.1% 0.095 57.708)",950:"oklch(28.6% 0.066 53.813)"},lime:{50:"oklch(98.6% 0.031 120.757)",100:"oklch(96.7% 0.067 122.328)",200:"oklch(93.8% 0.127 124.321)",300:"oklch(89.7% 0.196 126.665)",400:"oklch(84.1% 0.238 128.85)",500:"oklch(76.8% 0.233 130.85)",600:"oklch(64.8% 0.2 131.684)",700:"oklch(53.2% 0.157 131.589)",800:"oklch(45.3% 0.124 130.933)",900:"oklch(40.5% 0.101 131.063)",950:"oklch(27.4% 0.072 132.109)"},green:{50:"oklch(98.2% 0.018 155.826)",100:"oklch(96.2% 0.044 156.743)",200:"oklch(92.5% 0.084 155.995)",300:"oklch(87.1% 0.15 154.449)",400:"oklch(79.2% 0.209 151.711)",500:"oklch(72.3% 0.219 149.579)",600:"oklch(62.7% 0.194 149.214)",700:"oklch(52.7% 0.154 150.069)",800:"oklch(44.8% 0.119 151.328)",900:"oklch(39.3% 0.095 152.535)",950:"oklch(26.6% 0.065 152.934)"},emerald:{50:"oklch(97.9% 0.021 166.113)",100:"oklch(95% 0.052 163.051)",200:"oklch(90.5% 0.093 164.15)",300:"oklch(84.5% 0.143 164.978)",400:"oklch(76.5% 0.177 163.223)",500:"oklch(69.6% 0.17 162.48)",600:"oklch(59.6% 0.145 163.225)",700:"oklch(50.8% 0.118 165.612)",800:"oklch(43.2% 0.095 166.913)",900:"oklch(37.8% 0.077 168.94)",950:"oklch(26.2% 0.051 172.552)"},teal:{50:"oklch(98.4% 0.014 180.72)",100:"oklch(95.3% 0.051 180.801)",200:"oklch(91% 0.096 180.426)",300:"oklch(85.5% 0.138 181.071)",400:"oklch(77.7% 0.152 181.912)",500:"oklch(70.4% 0.14 182.503)",600:"oklch(60% 0.118 184.704)",700:"oklch(51.1% 0.096 186.391)",800:"oklch(43.7% 0.078 188.216)",900:"oklch(38.6% 0.063 188.416)",950:"oklch(27.7% 0.046 192.524)"},cyan:{50:"oklch(98.4% 0.019 200.873)",100:"oklch(95.6% 0.045 203.388)",200:"oklch(91.7% 0.08 205.041)",300:"oklch(86.5% 0.127 207.078)",400:"oklch(78.9% 0.154 211.53)",500:"oklch(71.5% 0.143 215.221)",600:"oklch(60.9% 0.126 221.723)",700:"oklch(52% 0.105 223.128)",800:"oklch(45% 0.085 224.283)",900:"oklch(39.8% 0.07 227.392)",950:"oklch(30.2% 0.056 229.695)"},sky:{50:"oklch(97.7% 0.013 236.62)",100:"oklch(95.1% 0.026 236.824)",200:"oklch(90.1% 0.058 230.902)",300:"oklch(82.8% 0.111 230.318)",400:"oklch(74.6% 0.16 232.661)",500:"oklch(68.5% 0.169 237.323)",600:"oklch(58.8% 0.158 241.966)",700:"oklch(50% 0.134 242.749)",800:"oklch(44.3% 0.11 240.79)",900:"oklch(39.1% 0.09 240.876)",950:"oklch(29.3% 0.066 243.157)"},blue:{50:"oklch(97% 0.014 254.604)",100:"oklch(93.2% 0.032 255.585)",200:"oklch(88.2% 0.059 254.128)",300:"oklch(80.9% 0.105 251.813)",400:"oklch(70.7% 0.165 254.624)",500:"oklch(62.3% 0.214 259.815)",600:"oklch(54.6% 0.245 262.881)",700:"oklch(48.8% 0.243 264.376)",800:"oklch(42.4% 0.199 265.638)",900:"oklch(37.9% 0.146 265.522)",950:"oklch(28.2% 0.091 267.935)"},indigo:{50:"oklch(96.2% 0.018 272.314)",100:"oklch(93% 0.034 272.788)",200:"oklch(87% 0.065 274.039)",300:"oklch(78.5% 0.115 274.713)",400:"oklch(67.3% 0.182 276.935)",500:"oklch(58.5% 0.233 277.117)",600:"oklch(51.1% 0.262 276.966)",700:"oklch(45.7% 0.24 277.023)",800:"oklch(39.8% 0.195 277.366)",900:"oklch(35.9% 0.144 278.697)",950:"oklch(25.7% 0.09 281.288)"},violet:{50:"oklch(96.9% 0.016 293.756)",100:"oklch(94.3% 0.029 294.588)",200:"oklch(89.4% 0.057 293.283)",300:"oklch(81.1% 0.111 293.571)",400:"oklch(70.2% 0.183 293.541)",500:"oklch(60.6% 0.25 292.717)",600:"oklch(54.1% 0.281 293.009)",700:"oklch(49.1% 0.27 292.581)",800:"oklch(43.2% 0.232 292.759)",900:"oklch(38% 0.189 293.745)",950:"oklch(28.3% 0.141 291.089)"},purple:{50:"oklch(97.7% 0.014 308.299)",100:"oklch(94.6% 0.033 307.174)",200:"oklch(90.2% 0.063 306.703)",300:"oklch(82.7% 0.119 306.383)",400:"oklch(71.4% 0.203 305.504)",500:"oklch(62.7% 0.265 303.9)",600:"oklch(55.8% 0.288 302.321)",700:"oklch(49.6% 0.265 301.924)",800:"oklch(43.8% 0.218 303.724)",900:"oklch(38.1% 0.176 304.987)",950:"oklch(29.1% 0.149 302.717)"},fuchsia:{50:"oklch(97.7% 0.017 320.058)",100:"oklch(95.2% 0.037 318.852)",200:"oklch(90.3% 0.076 319.62)",300:"oklch(83.3% 0.145 321.434)",400:"oklch(74% 0.238 322.16)",500:"oklch(66.7% 0.295 322.15)",600:"oklch(59.1% 0.293 322.896)",700:"oklch(51.8% 0.253 323.949)",800:"oklch(45.2% 0.211 324.591)",900:"oklch(40.1% 0.17 325.612)",950:"oklch(29.3% 0.136 325.661)"},pink:{50:"oklch(97.1% 0.014 343.198)",100:"oklch(94.8% 0.028 342.258)",200:"oklch(89.9% 0.061 343.231)",300:"oklch(82.3% 0.12 346.018)",400:"oklch(71.8% 0.202 349.761)",500:"oklch(65.6% 0.241 354.308)",600:"oklch(59.2% 0.249 0.584)",700:"oklch(52.5% 0.223 3.958)",800:"oklch(45.9% 0.187 3.815)",900:"oklch(40.8% 0.153 2.432)",950:"oklch(28.4% 0.109 3.907)"},rose:{50:"oklch(96.9% 0.015 12.422)",100:"oklch(94.1% 0.03 12.58)",200:"oklch(89.2% 0.058 10.001)",300:"oklch(81% 0.117 11.638)",400:"oklch(71.2% 0.194 13.428)",500:"oklch(64.5% 0.246 16.439)",600:"oklch(58.6% 0.253 17.585)",700:"oklch(51.4% 0.222 16.935)",800:"oklch(45.5% 0.188 13.697)",900:"oklch(41% 0.159 10.272)",950:"oklch(27.1% 0.105 12.094)"}},kr=e=>e%100==0?15:e%50==0?10:e%25==0?5:2.5,yr=Object.values(wr).map(e=>e[900]),Er=[400,600,900,1200,1400,1600,1970],xr=[600,800,1e3,1200,1400,2e3,2600],Ir={name:"Local Files",url:/(file:\/\/\/.+(index)?.html)/,homepage:"/index.html?raw=1",language:[bo.RAW],category:wo.MANGA,run(){const e=parseInt(/\d+/.exec(window.location.search)?.toString()??"5",10),n=document.createElement("div"),t="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",o=[t,`<span style="color: white; background-color: black;">${t.substring(0,100)}</span>`,`<span style="color: black; background-color: white;">${t.substring(100,200)}</span>`,`<b>${t.substring(200,300)}</b>`,`<i>${t.substring(300,400)}</i>`];return n.innerHTML=Array(100).fill(0).map(()=>o[Math.floor(Math.random()*o.length)]).join("<br><br>"),{title:"Placeholder Manga Loaded",series:"?reload",pages:e,begin:1,prev:"?pages=50",next:"?pages=1",listImages:[W(1970,1400,"#2D1657"),W(985,1400,"#152C55"),W(985,1400,"#7A1420"),W(985,1400,"#0F5B30"),W(1970,1400,"#806D15"),...Array(e).fill(0).map(j)],comments:n}}},Ar=["image/apng","image/bmp","image/gif","image/jpeg","image/pjpeg","image/png","image/svg+xml","image/tiff","image/webp","image/x-icon"],Mr=/.(png|jpg|jpeg|gif|bmp|webp)$/i,Sr=(e,n)=>e.localeCompare(n,navigator.languages[0]||navigator.language,{numeric:!0,ignorePunctuation:!0}),Cr=e=>{const n=new Uint8Array(e),t=new Blob([n.buffer]);return URL.createObjectURL(t)},_r=globalThis,Or=_r.ShadowRoot&&(void 0===_r.ShadyCSS||_r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Tr=Symbol(),Lr=new WeakMap;let $r=class{constructor(e,n,t){if(this._$cssResult$=!0,t!==Tr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Or&&void 0===e){const t=void 0!==n&&1===n.length;t&&(e=Lr.get(n)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&Lr.set(n,e))}return e}toString(){return this.cssText}};const Dr=e=>new $r("string"==typeof e?e:e+"",void 0,Tr),Rr=(e,...n)=>{const t=1===e.length?e[0]:n.reduce((n,t,o)=>n+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+e[o+1],e[0]);return new $r(t,e,Tr)},Nr=Or?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let n="";for(const t of e.cssRules)n+=t.cssText;return Dr(n)})(e):e,{is:zr,defineProperty:Pr,getOwnPropertyDescriptor:Br,getOwnPropertyNames:Hr,getOwnPropertySymbols:Fr,getPrototypeOf:Gr}=Object,Vr=globalThis,Ur=Vr.trustedTypes,Wr=Ur?Ur.emptyScript:"",jr=Vr.reactiveElementPolyfillSupport,Zr={toAttribute(e,n){switch(n){case Boolean:e=e?Wr:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,n){let t=e;switch(n){case Boolean:t=null!==e;break;case Number:t=null===e?null:Number(e);break;case Object:case Array:try{t=JSON.parse(e)}catch(e){t=null}}return t}},Qr=(e,n)=>!zr(e,n),qr={attribute:!0,type:String,converter:Zr,reflect:!1,useDefault:!1,hasChanged:Qr};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */Symbol.metadata??=Symbol("metadata"),Vr.litPropertyMetadata??=new WeakMap;class Yr extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=qr){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){const t=Symbol(),o=this.getPropertyDescriptor(e,t,n);void 0!==o&&Pr(this.prototype,e,o)}}static getPropertyDescriptor(e,n,t){const{get:o,set:i}=Br(this.prototype,e)??{get(){return this[n]},set(e){this[n]=e}};return{get:o,set(n){const r=o?.call(this);i?.call(this,n),this.requestUpdate(e,r,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??qr}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;const e=Gr(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){const e=this.properties,n=[...Hr(e),...Fr(e)];for(const t of n)this.createProperty(t,e[t])}const e=this[Symbol.metadata];if(null!==e){const n=litPropertyMetadata.get(e);if(void 0!==n)for(const[e,t]of n)this.elementProperties.set(e,t)}this._$Eh=new Map;for(const[e,n]of this.elementProperties){const t=this._$Eu(e,n);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const t=new Set(e.flat(1/0).reverse());for(const e of t)n.unshift(Nr(e))}else void 0!==e&&n.push(Nr(e));return n}static _$Eu(e,n){const t=n.attribute;return!1===t?void 0:"string"==typeof t?t:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const t of n.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,n)=>{if(Or)e.adoptedStyleSheets=n.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of n){const n=document.createElement("style"),o=_r.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=t.cssText,e.appendChild(n)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,t){this._$AK(e,t)}_$ET(e,n){const t=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,t);if(void 0!==o&&!0===t.reflect){const i=(void 0!==t.converter?.toAttribute?t.converter:Zr).toAttribute(n,t.type);this._$Em=e,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,n){const t=this.constructor,o=t._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=t.getPropertyOptions(o),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Zr;this._$Em=o;const r=i.fromAttribute(n,e.type);this[o]=r??this._$Ej?.get(o)??r,this._$Em=null}}requestUpdate(e,n,t){if(void 0!==e){const o=this.constructor,i=this[e];if(t??=o.getPropertyOptions(e),!((t.hasChanged??Qr)(i,n)||t.useDefault&&t.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,t))))return;this.C(e,n,t)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,n,{useDefault:t,reflect:o,wrapped:i},r){t&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??n??this[e]),!0!==i||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||t||(n=void 0),this._$AL.set(e,n)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,n]of this._$Ep)this[e]=n;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[n,t]of e){const{wrapped:e}=t,o=this[n];!0!==e||this._$AL.has(n)||void 0===o||this.C(n,void 0,t,o)}}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(n)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}Yr.elementStyles=[],Yr.shadowRootOptions={mode:"open"},Yr.elementProperties=new Map,Yr.finalized=new Map,jr?.({ReactiveElement:Yr}),(Vr.reactiveElementVersions??=[]).push("2.1.1");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const Xr=globalThis;let Kr=class extends Yr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,n,t)=>{const o=t?.renderBefore??n;let i=o._$litPart$;if(void 0===i){const e=t?.renderBefore??null;o._$litPart$=i=new Bi(n.insertBefore(ki(),e),e,void 0,t??{})}return i._$AI(e),i})(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Li}};Kr._$litElement$=!0,Kr.finalized=!0,Xr.litElementHydrateSupport?.({LitElement:Kr});const Jr=Xr.litElementPolyfillSupport;Jr?.({LitElement:Kr}),(Xr.litElementVersions??=[]).push("4.2.1");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const ea=e=>(n,t)=>{void 0!==t?t.addInitializer(()=>{customElements.define(e,n)}):customElements.define(e,n)},na={attribute:!0,type:String,converter:Zr,reflect:!1,hasChanged:Qr},ta=(e=na,n,t)=>{const{kind:o,metadata:i}=t;let r=globalThis.litPropertyMetadata.get(i);if(void 0===r&&globalThis.litPropertyMetadata.set(i,r=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),r.set(t.name,e),"accessor"===o){const{name:o}=t;return{set(t){const i=n.get.call(this);n.set.call(this,t),this.requestUpdate(o,i,e)},init(n){return void 0!==n&&this.C(o,void 0,e,n),n}}}if("setter"===o){const{name:o}=t;return function(t){const i=this[o];n.call(this,t),this.requestUpdate(o,i,e)}}throw Error("Unsupported decorator location: "+o)};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */let oa=class extends Zi{constructor(e){if(super(e),this.it=$i,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===$i||null==e)return this._t=void 0,this.it=e;if(e===Li)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};oa.directiveName="unsafeHTML",oa.resultType=1;const ia=ji(oa);
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class ra extends oa{}ra.directiveName="unsafeSVG",ra.resultType=2;const aa=ji(ra),la=Object.freeze(Object.defineProperty({__proto__:null,IconAlertCircle:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />\n  <path d="M12 8v4" />\n  <path d="M12 16h.01" />\n</svg>\n',IconArrowAutofitDown:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-autofit-down"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />\n  <path d="M18 4v17" />\n  <path d="M15 18l3 3l3 -3" />\n</svg>\n',IconArrowAutofitHeight:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-autofit-height"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6" />\n  <path d="M18 14v7" />\n  <path d="M18 3v7" />\n  <path d="M15 18l3 3l3 -3" />\n  <path d="M15 6l3 -3l3 3" />\n</svg>\n',IconArrowAutofitLeft:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-autofit-left"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />\n  <path d="M20 18h-17" />\n  <path d="M6 15l-3 3l3 3" />\n</svg>\n',IconArrowAutofitRight:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-autofit-right"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8" />\n  <path d="M4 18h17" />\n  <path d="M18 15l3 3l-3 3" />\n</svg>\n',IconArrowAutofitWidth:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-autofit-width"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />\n  <path d="M10 18h-7" />\n  <path d="M21 18h-7" />\n  <path d="M6 15l-3 3l3 3" />\n  <path d="M18 15l3 3l-3 3" />\n</svg>\n',IconArrowBigLeft:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-big-left"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path\n    d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"\n  />\n</svg>\n',IconArrowBigRight:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-arrow-big-right"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path\n    d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"\n  />\n</svg>\n',IconArrowsMove:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M18 9l3 3l-3 3" />\n  <path d="M15 12h6" />\n  <path d="M6 9l-3 3l3 3" />\n  <path d="M3 12h6" />\n  <path d="M9 18l3 3l3 -3" />\n  <path d="M12 15v6" />\n  <path d="M15 6l-3 -3l-3 3" />\n  <path d="M12 3v6" />\n</svg>\n',IconArrowsMoveVertical:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M9 18l3 3l3 -3" />\n  <path d="M12 15v6" />\n  <path d="M15 6l-3 -3l-3 3" />\n  <path d="M12 3v6" />\n</svg>\n',IconArrowsVertical:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M8 7l4 -4l4 4" />\n  <path d="M8 17l4 4l4 -4" />\n  <path d="M12 3l0 18" />\n</svg>\n',IconBook:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-book"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />\n  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />\n  <path d="M3 6l0 13" />\n  <path d="M12 6l0 13" />\n  <path d="M21 6l0 13" />\n</svg>\n',IconBookReturn:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-return"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 2 -1" />\n  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />\n  <path d="M3 6l0 13" />\n  <path d="M12 6l0 13" />\n  <path d="M21 6l0 4" />\n  <g transform="rotate(-90, 19, 15)">\n    <path d="M15 16l3 -3l3 3" />\n    <path d="M18 13v9" />\n  </g>\n</svg>\n',IconBookUpload:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" />\n  <path d="M11 16h-5a2 2 0 0 0 -2 2" />\n  <path d="M15 16l3 -3l3 3" />\n  <path d="M18 13v9" />\n</svg>\n',IconBookmark:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-bookmark"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />\n</svg>\n',IconBookmarkOff:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-bookmark-off"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path\n    d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"\n  />\n  <path d="M3 3l18 18" />\n</svg>\n',IconBookmarks:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-bookmarks"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />\n  <path d="M11 3h5a3 3 0 0 1 3 3v11" />\n</svg>\n',IconBoxAlignTop:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z" />\n  <path d="M4 15.005v-.01" />\n  <path d="M4 20.005v-.01" />\n  <path d="M9 20.005v-.01" />\n  <path d="M15 20.005v-.01" />\n  <path d="M20 20.005v-.01" />\n  <path d="M20 15.005v-.01" />\n</svg>\n',IconCategory:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-category"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 4h6v6h-6z" />\n  <path d="M14 4h6v6h-6z" />\n  <path d="M4 14h6v6h-6z" />\n  <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />\n</svg>\n',IconCheck:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-check"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M5 12l5 5l10 -10" />\n</svg>\n',IconChevronRight:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M9 6l6 6l-6 6" />\n</svg>\n',IconCircleCheck:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />\n  <path d="M9 12l2 2l4 -4" />\n</svg>\n',IconCircleX:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />\n  <path d="M10 10l4 4m0 -4l-4 4" />\n</svg>\n',IconComic1:'<?xml version="1.0" encoding="UTF-8"?>\n<svg\n  xmlns="http://www.w3.org/2000/svg"\n  version="1.1"\n  id="Capa_1"\n  x="0px"\n  y="0px"\n  viewBox="0 0 512 512"\n  style="enable-background: new 0 0 512 512"\n  xml:space="preserve"\n  width="512"\n  height="512"\n>\n  <g>\n    <g>\n      <g>\n        <path\n          style="fill: #f2eff2"\n          d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"\n        />\n      </g>\n    </g>\n    <g>\n      <g>\n        <path\n          style="fill: #e1dde1"\n          d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"\n        />\n      </g>\n    </g>\n    <g>\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M334.56,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10h-54.763"\n      />\n    </g>\n    <g>\n      <path\n        style="fill: #3ad1e0"\n        d="M313.86,452.74L159.16,55.63c-0.75-1.92-2.6-3.18-4.66-3.18h-29.96c-2.76,0-5,2.24-5,5v397.1&#10;&#9;&#9;&#9;c0,2.76,2.24,5,5,5h184.67C312.72,459.55,315.14,456.01,313.86,452.74z"\n      />\n      <path\n        style="fill: #22c7db"\n        d="M309.21,459.55h-30.02c3.51,0,5.93-3.54,4.65-6.81L129.14,55.63c-0.74-1.9-2.56-3.16-4.6-3.18&#10;&#9;&#9;&#9;h29.96c2.06,0,3.91,1.26,4.66,3.18l154.7,397.11C315.14,456.01,312.72,459.55,309.21,459.55z"\n      />\n      <path\n        style="fill: #fb33a8"\n        d="M258.193,309.845c-9.05-1.894-18.424-2.909-28.037-2.909c-45.55,0-85.862,22.354-110.616,56.676&#10;&#9;&#9;&#9;v90.938c0,2.76,2.24,5,5,5h184.67c3.51,0,5.93-3.54,4.65-6.81L258.193,309.845z"\n      />\n      <path\n        style="fill: #ee2d9a"\n        d="M193.362,311.966c-5.64,10.161-16.48,17.055-28.912,17.055c-0.57,0-1.14-0.01-1.72-0.04&#10;&#9;&#9;&#9;c-4.02-0.2-6.72,3.06-6.72,6.44c0,1.66,0.65,3.35,2.12,4.67c7.27,6.57,10.91,15.56,10.91,24.55s-3.64,17.99-10.91,24.55&#10;&#9;&#9;&#9;c-4.37,3.94-1.51,11.12,4.24,11.12c0.12,0,0.24,0,0.36-0.01c19-0.97,34.76,14.2,34.76,33c0,0.57-0.01,1.14-0.04,1.72&#10;&#9;&#9;&#9;c-0.21,4.02,3.05,6.72,6.43,6.72c1.67,0,3.36-0.65,4.68-2.12c6.56-7.27,15.56-10.91,24.55-10.91c8.99,0,17.98,3.64,24.55,10.91&#10;&#9;&#9;&#9;c3.94,4.37,11.12,1.51,11.12-4.24c0-0.12,0-0.24-0.01-0.36c-0.264-5.151,0.666-10.058,2.527-14.479l12.543,32.197&#10;&#9;&#9;&#9;c1.28,3.27-1.14,6.81-4.65,6.81h30.02c3.51,0,5.93-3.54,4.65-6.81l-55.667-142.895L193.362,311.966z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M230.156,306.937c-45.55,0-85.862,22.354-110.616,56.676"\n      />\n      <path\n        style="fill: #fcb44d"\n        d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5H260.65c-2.06,0-3.91-1.26-4.66-3.18l-57.85-148.5&#10;&#9;&#9;&#9;c-1.28-3.28,1.14-6.82,4.65-6.82h184.67C390.22,52.45,392.46,54.69,392.46,57.45z"\n      />\n      <path\n        style="fill: #fb9927"\n        d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5V57.45c0-2.76-2.24-5-5-5h30.021&#10;&#9;&#9;&#9;C390.22,52.45,392.46,54.69,392.46,57.45z"\n      />\n      <g>\n        <path\n          style="fill: #ae6ad8"\n          d="M356.4,183.26v27.69h-78.45v-27.69c0-21.67,17.57-39.23,39.23-39.23&#10;&#9;&#9;&#9;&#9;c10.83,0,20.64,4.39,27.73,11.49C352.01,162.62,356.4,172.42,356.4,183.26z"\n        />\n        <path\n          style="fill: #975bbb"\n          d="M356.402,183.26v27.69h-28.38v-27.69c0-10.84-4.39-20.64-11.49-27.74&#10;&#9;&#9;&#9;&#9;c-3.82-3.82-8.42-6.86-13.54-8.84c4.4-1.71,9.19-2.65,14.19-2.65c10.83,0,20.64,4.39,27.73,11.49&#10;&#9;&#9;&#9;&#9;C352.012,162.62,356.402,172.42,356.402,183.26z"\n        />\n        <path\n          style="\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          "\n          d="&#10;&#9;&#9;&#9;&#9;M277.95,210.95v-27.69c0-21.67,17.57-39.23,39.23-39.23c10.83,0,20.64,4.39,27.73,11.49c7.1,7.1,11.49,16.9,11.49,27.74v27.69"\n        />\n        <g>\n          <circle\n            style="fill: #f2eff2"\n            cx="317.179"\n            cy="125.438"\n            r="25.456"\n          />\n\n          <circle\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n            "\n            cx="317.179"\n            cy="125.438"\n            r="25.456"\n          />\n        </g>\n      </g>\n      <path\n        style="fill: #23f1a8"\n        d="M392.46,250.95v67.96c0,2.761-2.239,5-5,5h-82.812c-2.061,0-3.911-1.265-4.659-3.185l-26.474-67.96&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,245.95,392.46,248.189,392.46,250.95z"\n      />\n      <path\n        style="fill: #27e19d"\n        d="M392.46,250.95v67.96c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-67.96c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,245.95,392.46,248.19,392.46,250.95z"\n      />\n      <path\n        style="fill: #23f1a8"\n        d="M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962&#10;&#9;&#9;&#9;c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64C316.248,362.447,318.666,358.91,322.184,358.91z"\n      />\n      <path\n        style="fill: #27e19d"\n        d="M392.46,363.91v90.64c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-90.64c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,358.91,392.46,361.15,392.46,363.91z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M119.54,242.003V454.55c0,2.761,2.239,5,5,5h184.666c3.518,0,5.936-3.537,4.659-6.815l-154.704-397.1&#10;&#9;&#9;&#9;c-0.748-1.92-2.598-3.185-4.659-3.185H124.54c-2.761,0-5,2.239-5,5v151.391"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M392.46,57.45v148.5c0,2.761-2.239,5-5,5H260.648c-2.061,0-3.911-1.265-4.659-3.185l-57.854-148.5&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,52.45,392.46,54.689,392.46,57.45z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M306.627,245.95h-28.454c-3.518,0-5.936,3.537-4.659,6.815l26.474,67.96c0.748,1.92,2.598,3.185,4.659,3.185h82.812&#10;&#9;&#9;&#9;c2.761,0,5-2.239,5-5v-67.96c0-2.761-2.239-5-5-5h-47.67"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64&#10;&#9;&#9;&#9;C316.248,362.447,318.666,358.91,322.184,358.91z"\n      />\n    </g>\n    <g>\n      <path\n        style="fill: #fdef63"\n        d="M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24&#10;&#9;&#9;&#9;c-6.57-7.27-15.56-10.91-24.55-10.91c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72&#10;&#9;&#9;&#9;c0.03-0.58,0.04-1.15,0.04-1.72c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12&#10;&#9;&#9;&#9;c7.27-6.56,10.91-15.56,10.91-24.55s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44&#10;&#9;&#9;&#9;c0.58,0.03,1.15,0.04,1.72,0.04c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25&#10;&#9;&#9;&#9;c6.56,7.27,15.56,10.91,24.55,10.91c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"\n      />\n      <path\n        style="fill: #f3d730"\n        d="M268.151,412.468c0.394-0.814,0.629-1.738,0.629-2.758c0-0.12,0-0.24-0.01-0.36&#10;&#9;&#9;&#9;c-0.66-12.89,6.11-24.28,16.39-30.28l-41.28-105.96c-3.48,1.19-7.12,1.79-10.77,1.79c-7.758,0-15.52-2.717-21.718-8.132&#10;&#9;&#9;&#9;L268.151,412.468z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24c-6.57-7.27-15.56-10.91-24.55-10.91&#10;&#9;&#9;&#9;c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72c0.03-0.58,0.04-1.15,0.04-1.72&#10;&#9;&#9;&#9;c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12c7.27-6.56,10.91-15.56,10.91-24.55&#10;&#9;&#9;&#9;s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44c0.58,0.03,1.15,0.04,1.72,0.04&#10;&#9;&#9;&#9;c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25c6.56,7.27,15.56,10.91,24.55,10.91&#10;&#9;&#9;&#9;c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"\n      />\n    </g>\n    <g>\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="230.156"\n        y1="339.714"\n        x2="230.156"\n        y2="311.299"\n      />\n\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="230.156"\n        y1="364.644"\n        x2="230.156"\n        y2="366.646"\n      />\n    </g>\n    <g>\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="240.429"\n        y1="83.83"\n        x2="258.124"\n        y2="83.83"\n      />\n\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="248.276"\n        y1="107.911"\n        x2="265.97"\n        y2="107.911"\n      />\n    </g>\n  </g>\n</svg>\n',IconComic1Flat:'<svg\n  id="Capa_1"\n  enable-background="new 0 0 512 512"\n  height="512"\n  viewBox="0 0 512 512"\n  width="512"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <g>\n    <g>\n      <g>\n        <path\n          d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z"\n          fill="#f2eff2"\n        />\n      </g>\n    </g>\n    <path\n      d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z"\n      fill="#e1dde1"\n    />\n    <g>\n      <path\n        d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z"\n        fill="#3ad1e0"\n      />\n      <path\n        d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z"\n        fill="#22c7db"\n      />\n      <path\n        d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z"\n        fill="#fb33a8"\n      />\n      <path\n        d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z"\n        fill="#fb33a8"\n      />\n      <path\n        d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z"\n        fill="#fcb44d"\n      />\n      <path\n        d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z"\n        fill="#fb9927"\n      />\n      <g>\n        <path\n          d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z"\n          fill="#ae6ad8"\n        />\n        <path\n          d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z"\n          fill="#975bbb"\n        />\n        <g>\n          <g>\n            <circle\n              cx="319.023"\n              cy="121.497"\n              fill="#f2eff2"\n              r="26.224"\n            />\n          </g>\n        </g>\n      </g>\n      <path\n        d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z"\n        fill="#23f1a8"\n      />\n      <path\n        d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z"\n        fill="#27e19d"\n      />\n      <path\n        d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z"\n        fill="#23f1a8"\n      />\n      <path\n        d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z"\n        fill="#27e19d"\n      />\n    </g>\n    <g>\n      <path\n        d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z"\n        fill="#fdef63"\n      />\n      <path\n        d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z"\n        fill="#f3d730"\n      />\n    </g>\n    <g>\n      <g>\n        <path\n          d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z"\n          fill="#554e55"\n        />\n      </g>\n      <g>\n        <path\n          d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z"\n          fill="#554e55"\n        />\n      </g>\n    </g>\n    <g>\n      <g>\n        <path\n          d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z"\n          fill="#f2eff2"\n        />\n      </g>\n      <g>\n        <path\n          d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z"\n          fill="#f2eff2"\n        />\n      </g>\n    </g>\n  </g>\n</svg>\n',IconComic2:'<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n\x3c!-- Created with Inkscape (http://www.inkscape.org/) --\x3e\n\n<svg\n  version="1.1"\n  id="svg5007"\n  xml:space="preserve"\n  width="682.66669"\n  height="682.66669"\n  viewBox="0 0 682.66669 682.66669"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <defs id="defs5011">\n    <clipPath\n      clipPathUnits="userSpaceOnUse"\n      id="clipPath5021"\n    >\n      <path\n        d="M 0,512 H 512 V 0 H 0 Z"\n        id="path5019"\n      />\n    </clipPath>\n  </defs>\n  <g\n    id="g5013"\n    transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"\n  >\n    <g id="g5015">\n      <g\n        id="g5017"\n        clip-path="url(#clipPath5021)"\n      >\n        <g\n          id="g5023"\n          transform="translate(446,7.5)"\n        >\n          <path\n            d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0"\n            style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5025"\n          />\n        </g>\n        <g\n          id="g5027"\n          transform="translate(465.9996,47.5)"\n        >\n          <path\n            d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z"\n            style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5029"\n          />\n        </g>\n        <g\n          id="g5031"\n          transform="translate(236,199.8333)"\n        >\n          <path\n            d="M 0,0 H 190 V 264.667 H 80 Z"\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5033"\n          />\n        </g>\n        <g\n          id="g5035"\n          transform="translate(236,199.8333)"\n        >\n          <path\n            d="M 0,0 H 190 V 264.667 H 80 Z"\n            style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5037"\n          />\n        </g>\n        <g\n          id="g5039"\n          transform="translate(86,199.8333)"\n        >\n          <path\n            d="m 0,0 h 110 l 80,264.667 H 0 Z"\n            style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5041"\n          />\n        </g>\n        <g\n          id="g5043"\n          transform="translate(86,427.4996)"\n        >\n          <path\n            d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0"\n            style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5045"\n          />\n        </g>\n        <path\n          d="M 426,47.5 H 86 v 112.333 h 340 z"\n          style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n          id="path5047"\n        />\n        <g\n          id="g5049"\n          transform="translate(196.2775,159.8334)"\n        >\n          <path\n            d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0"\n            style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5051"\n          />\n        </g>\n        <g\n          id="g5053"\n          transform="translate(214.5152,99.0695)"\n        >\n          <path\n            d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0"\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5055"\n          />\n        </g>\n        <g\n          id="g5057"\n          transform="translate(297.4848,99.0695)"\n        >\n          <path\n            d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0"\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5059"\n          />\n        </g>\n        <g\n          id="g5061"\n          transform="translate(204.3949,127.5815)"\n        >\n          <path\n            d="M 0,0 V -9.916"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path5063"\n          />\n        </g>\n        <g\n          id="g5065"\n          transform="translate(307.605,127.5815)"\n        >\n          <path\n            d="M 0,0 V -9.916"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path5067"\n          />\n        </g>\n        <g\n          id="g5069"\n          transform="translate(242.3946,117.9604)"\n        >\n          <path\n            d="m 0,0 c 3.308,-3.796 8.175,-6.198 13.605,-6.198 5.431,0 10.298,2.402 13.606,6.198"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path5071"\n          />\n        </g>\n        <g\n          id="g5073"\n          transform="translate(153.1665,442.2645)"\n        >\n          <path\n            d="m 0,0 32.456,22.235 h -99.623 v -156.568 l 20.756,70.454 58.203,-44.799 -24.62,69.199 73.42,-2.032 z"\n            style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5075"\n          />\n        </g>\n        <g\n          id="g5077"\n          transform="translate(86,427.4996)"\n        >\n          <path\n            d="m 0,0 v -119.568 l 9.825,33.351 C 3.399,-58.516 0,-29.655 0,0"\n            style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5079"\n          />\n        </g>\n        <g\n          id="g5081"\n          transform="translate(426,270.6974)"\n        >\n          <path\n            d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939 Z"\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path5083"\n          />\n        </g>\n        <g\n          id="g5085"\n          transform="translate(446,7.5)"\n        >\n          <path\n            d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0 Z"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path5087"\n          />\n        </g>\n        <g\n          id="g5089"\n          transform="translate(426,346.167)"\n        >\n          <path\n            d="m 0,0 v 118.333 h -110 l -80,-264.667 H 0 V -28"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path5091"\n          />\n        </g>\n        <g\n          id="g5093"\n          transform="translate(86,199.8333)"\n        >\n          <path\n            d="m 0,0 h 110 l 80,264.667 H 0 Z"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path5095"\n          />\n        </g>\n        <g\n          id="g5097"\n          transform="translate(154.0172,159.8334)"\n        >\n          <path\n            d="m 0,0 h 271.983 v -112.333 h -340 V 0 H -28"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path5099"\n          />\n        </g>\n        <g\n          id="g5101"\n          transform="translate(86,307.9314)"\n        >\n          <path\n            d="m 0,0 20.756,70.454 58.203,-44.799 -24.62,69.199 73.419,-2.032 -60.591,41.511 32.455,22.236"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path5103"\n          />\n        </g>\n        <g\n          id="g5105"\n          transform="translate(426,270.6974)"\n        >\n          <path\n            d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path5107"\n          />\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n',IconComic2Flat:'<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n\x3c!-- Created with Inkscape (http://www.inkscape.org/) --\x3e\n\n<svg\n  version="1.1"\n  id="svg3390"\n  xml:space="preserve"\n  width="682.66669"\n  height="682.66669"\n  viewBox="0 0 682.66669 682.66669"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <defs id="defs3394">\n    <clipPath\n      clipPathUnits="userSpaceOnUse"\n      id="clipPath3404"\n    >\n      <path\n        d="M 0,512 H 512 V 0 H 0 Z"\n        id="path3402"\n      />\n    </clipPath>\n  </defs>\n  <g\n    id="g3396"\n    transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"\n  >\n    <g id="g3398">\n      <g\n        id="g3400"\n        clip-path="url(#clipPath3404)"\n      >\n        <g\n          id="g3406"\n          transform="translate(451.7344)"\n        >\n          <path\n            d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0"\n            style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3408"\n          />\n        </g>\n        <g\n          id="g3410"\n          transform="translate(472.3376,41.2072)"\n        >\n          <path\n            d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z"\n            style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3412"\n          />\n        </g>\n        <g\n          id="g3414"\n          transform="translate(235.3964,198.1382)"\n        >\n          <path\n            d="M 0,0 H 195.734 V 272.655 H 82.414 Z"\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3416"\n          />\n        </g>\n        <g\n          id="g3418"\n          transform="translate(235.3964,198.1382)"\n        >\n          <path\n            d="M 0,0 H 195.734 V 272.655 H 82.414 Z"\n            style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3420"\n          />\n        </g>\n        <g\n          id="g3422"\n          transform="translate(80.8692,198.1382)"\n        >\n          <path\n            d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z"\n            style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3424"\n          />\n        </g>\n        <g\n          id="g3426"\n          transform="translate(80.8692,432.6757)"\n        >\n          <path\n            d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0"\n            style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3428"\n          />\n        </g>\n        <path\n          d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z"\n          style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n          id="path3430"\n        />\n        <g\n          id="g3432"\n          transform="translate(194.475,156.931)"\n        >\n          <path\n            d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0"\n            style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3434"\n          />\n        </g>\n        <g\n          id="g3436"\n          transform="translate(213.2632,94.3332)"\n        >\n          <path\n            d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0"\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3438"\n          />\n        </g>\n        <g\n          id="g3440"\n          transform="translate(298.7368,94.3332)"\n        >\n          <path\n            d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0"\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3442"\n          />\n        </g>\n        <g\n          id="g3444"\n          transform="translate(202.8374,123.7057)"\n        >\n          <path\n            d="M 0,0 V -10.216"\n            style="\n              fill: none;\n              stroke: #3d4751;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path3446"\n          />\n        </g>\n        <g\n          id="g3448"\n          transform="translate(309.1625,123.7057)"\n        >\n          <path\n            d="M 0,0 V -10.216"\n            style="\n              fill: none;\n              stroke: #3d4751;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path3450"\n          />\n        </g>\n        <g\n          id="g3452"\n          transform="translate(241.984,113.7942)"\n        >\n          <path\n            d="m 0,0 c 3.408,-3.911 8.421,-6.385 14.016,-6.385 5.595,0 10.608,2.474 14.016,6.385"\n            style="\n              fill: none;\n              stroke: #3d4751;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            "\n            id="path3454"\n          />\n        </g>\n        <g\n          id="g3456"\n          transform="translate(150.0629,447.8862)"\n        >\n          <path\n            d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z"\n            style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3458"\n          />\n        </g>\n        <g\n          id="g3460"\n          transform="translate(80.8692,432.6757)"\n        >\n          <path\n            d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0"\n            style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3462"\n          />\n        </g>\n        <g\n          id="g3464"\n          transform="translate(431.1308,271.141)"\n        >\n          <path\n            d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z"\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\n            id="path3466"\n          />\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n',IconComic3:'<?xml version="1.0" encoding="UTF-8"?>\n<svg\n  xmlns="http://www.w3.org/2000/svg"\n  version="1.1"\n  id="Capa_1"\n  x="0px"\n  y="0px"\n  viewBox="0 0 512 512"\n  style="enable-background: new 0 0 512 512"\n  xml:space="preserve"\n  width="512"\n  height="512"\n>\n  <g>\n    <g>\n      <g>\n        <path\n          style="fill: #f2eff2"\n          d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"\n        />\n      </g>\n    </g>\n    <g>\n      <g>\n        <path\n          style="fill: #e1dde1"\n          d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"\n        />\n      </g>\n    </g>\n    <g>\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M158.639,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10H191.801"\n      />\n    </g>\n    <path\n      style="fill: #3ad1e0"\n      d="M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;h145.617C390.244,47.5,392.482,49.739,392.482,52.5z"\n    />\n    <path\n      style="fill: #20bfd5"\n      d="M392.482,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;C390.242,47.5,392.482,49.74,392.482,52.5z"\n    />\n    <path\n      style="fill: #26d192"\n      d="M280.6,47.5h-38.735c-2.761,0-5,2.239-5,5v83.99c0,2.761,2.239,5,5,5H280.6V47.5z"\n    />\n\n    <line\n      style="\n        fill: none;\n        stroke: #000000;\n        stroke-width: 15;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-miterlimit: 10;\n      "\n      x1="280.6"\n      y1="141.49"\n      x2="280.6"\n      y2="47.5"\n    />\n    <path\n      style="fill: #23f1a8"\n      d="M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99&#10;&#9;&#9;c2.126,3.328-0.264,7.692-4.214,7.692H124.512c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"\n    />\n    <g>\n      <path\n        style="fill: #ae6ad8"\n        d="M227.87,437.622V464.5h-76.148v-26.878c0-21.034,17.054-38.079,38.079-38.079&#10;&#9;&#9;&#9;c10.512,0,20.034,4.261,26.916,11.153C223.609,417.588,227.87,427.1,227.87,437.622z"\n      />\n      <path\n        style="fill: #975bbb"\n        d="M227.872,437.62v26.88h-28.21v-26.88c0-10.52-4.26-20.03-11.15-26.92&#10;&#9;&#9;&#9;c-3.62-3.63-7.97-6.53-12.82-8.46c4.36-1.74,9.13-2.7,14.11-2.7c10.51,0,20.03,4.26,26.92,11.16&#10;&#9;&#9;&#9;C223.612,417.59,227.872,427.1,227.872,437.62z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M151.722,464.5v-26.878c0-21.034,17.054-38.079,38.079-38.079c10.512,0,20.034,4.261,26.916,11.153&#10;&#9;&#9;&#9;c6.892,6.892,11.153,16.404,11.153,26.926V464.5"\n      />\n    </g>\n    <path\n      style="fill: #27e19d"\n      d="M303.302,464.5h-30.02c3.95,0,6.34-4.36,4.22-7.69l-53.65-83.99c-0.92-1.44-2.51-2.31-4.22-2.31&#10;&#9;&#9;h30.02c1.71,0,3.3,0.87,4.22,2.31l53.65,83.99C309.642,460.14,307.252,464.5,303.302,464.5z"\n    />\n    <path\n      style="fill: #ae6ad8"\n      d="M387.482,370.51h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-83.99C392.482,372.749,390.244,370.51,387.482,370.51z"\n    />\n    <path\n      style="fill: #975bbb"\n      d="M392.482,375.51v83.99c0,2.76-2.24,5-5,5h-25.08c-0.88,0-1.72-0.23-2.46-0.66&#10;&#9;&#9;c1.51-0.86,2.52-2.48,2.52-4.34v-83.99c0-2.76-2.24-5-5-5h30.02C390.242,370.51,392.482,372.75,392.482,375.51z"\n    />\n    <path\n      style="\n        fill: none;\n        stroke: #000000;\n        stroke-width: 15;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-miterlimit: 10;\n      "\n      d="&#10;&#9;&#9;M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h145.617&#10;&#9;&#9;C390.244,47.5,392.482,49.739,392.482,52.5z"\n    />\n    <g>\n      <path\n        style="fill: #3ad1e0"\n        d="M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;&#9;h67.862C195.135,47.5,197.374,49.739,197.374,52.5z"\n      />\n      <path\n        style="fill: #20bfd5"\n        d="M197.372,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;&#9;C195.132,47.5,197.372,49.74,197.372,52.5z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h67.862&#10;&#9;&#9;&#9;C195.135,47.5,197.374,49.739,197.374,52.5z"\n      />\n    </g>\n    <g>\n      <path\n        style="fill: #fb54b6"\n        d="M124.512,181.49h262.97c2.761,0,5,2.239,5,5v139.02c0,2.761-2.239,5-5,5h-262.97&#10;&#9;&#9;&#9;c-2.761,0-5-2.239-5-5V186.49C119.512,183.729,121.751,181.49,124.512,181.49z"\n      />\n    </g>\n    <path\n      style="fill: #fb9927"\n      d="M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465H154.537z"\n    />\n    <path\n      style="fill: #f98824"\n      d="M357.462,330.51h-34.36c0-50.18-36.42-91.84-84.28-100.01c5.58-0.95,11.32-1.45,17.18-1.45&#10;&#9;&#9;C312.042,229.05,357.462,274.47,357.462,330.51z"\n    />\n    <path\n      style="\n        fill: none;\n        stroke: #000000;\n        stroke-width: 15;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-miterlimit: 10;\n      "\n      d="&#10;&#9;&#9;M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465"\n    />\n    <g>\n      <path\n        style="fill: #fb33a8"\n        d="M392.482,186.49v139.02c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V186.49c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.02C390.242,181.49,392.482,183.73,392.482,186.49z"\n      />\n    </g>\n    <g>\n      <g>\n        <path\n          style="fill: #fdef63"\n          d="M342.812,247.29c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39&#10;&#9;&#9;&#9;&#9;s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11&#10;&#9;&#9;&#9;&#9;c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13&#10;&#9;&#9;&#9;&#9;c0-7.68-2.16-15.35-6.49-22.02h170.24c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13&#10;&#9;&#9;&#9;&#9;C353.382,238.48,349.872,247.29,342.812,247.29z"\n        />\n        <g>\n          <line\n            id="XMLID_00000127012381744132405410000009872483291948348836_"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n            "\n            x1="279.433"\n            y1="224.908"\n            x2="279.433"\n            y2="224.805"\n          />\n\n          <line\n            id="XMLID_00000080918978500845250090000017315552773041050031_"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n            "\n            x1="256.002"\n            y1="224.908"\n            x2="256.002"\n            y2="224.805"\n          />\n\n          <line\n            id="XMLID_00000140711681861242238370000008769002181148908969_"\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n            "\n            x1="232.572"\n            y1="224.908"\n            x2="232.572"\n            y2="224.805"\n          />\n        </g>\n        <path\n          style="fill: #f3d730"\n          d="M342.812,247.3c-0.15,0-0.29,0-0.43-0.02c-23.33-1.19-42.66,17.43-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.01,1.39,0.05,2.11c0.25,4.93-3.75,8.25-7.89,8.25c-2.06,0-4.13-0.8-5.75-2.61c-6.75-7.46-15.58-11.81-24.76-13.03&#10;&#9;&#9;&#9;&#9;c29.09-14.37,49.1-44.34,49.1-78.98c0-7.61-0.97-14.99-2.78-22.03h33.42c-4.32,6.67-6.48,14.35-6.48,22.02&#10;&#9;&#9;&#9;&#9;c0,11.04,4.47,22.09,13.38,30.14C353.382,238.47,349.882,247.3,342.812,247.3z"\n        />\n      </g>\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M341.122,181.49c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13c5.36,4.84,1.85,13.65-5.21,13.65&#10;&#9;&#9;&#9;c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24&#10;&#9;&#9;&#9;c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6&#10;&#9;&#9;&#9;c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01&#10;&#9;&#9;&#9;c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13c0-7.68-2.16-15.35-6.49-22.02"\n      />\n    </g>\n    <g>\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M208.726,181.49h-84.213c-2.761,0-5,2.239-5,5v139.02c0,2.761,2.239,5,5,5h262.97c2.761,0,5-2.239,5-5V186.49c0-2.761-2.239-5-5-5&#10;&#9;&#9;&#9;H241.888"\n      />\n    </g>\n    <path\n      style="\n        fill: none;\n        stroke: #000000;\n        stroke-width: 15;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-miterlimit: 10;\n      "\n      d="&#10;&#9;&#9;M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99c2.126,3.328-0.264,7.692-4.214,7.692H124.512&#10;&#9;&#9;c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"\n    />\n    <path\n      style="\n        fill: none;\n        stroke: #000000;\n        stroke-width: 15;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-miterlimit: 10;\n      "\n      d="&#10;&#9;&#9;M392.482,397.976V375.51c0-2.761-2.239-5-5-5h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-28.362"\n    />\n    <g>\n      <g>\n        <g>\n          <circle\n            style="fill: #d8b2ec"\n            cx="189.8"\n            cy="381.497"\n            r="24.709"\n          />\n\n          <circle\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n            "\n            cx="189.8"\n            cy="381.497"\n            r="24.709"\n          />\n        </g>\n      </g>\n    </g>\n    <g>\n      <line\n        id="XMLID_00000028301319025648580530000009457246182494066313_"\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="314.674"\n        y1="108.185"\n        x2="354.689"\n        y2="108.075"\n      />\n\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="333.566"\n        y1="80.805"\n        x2="354.689"\n        y2="80.805"\n      />\n    </g>\n  </g>\n</svg>\n',IconComic3Flat:'<svg\n  id="Capa_1"\n  enable-background="new 0 0 512 512"\n  height="512"\n  viewBox="0 0 512 512"\n  width="512"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <g>\n    <g>\n      <g>\n        <path\n          d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z"\n          fill="#f2eff2"\n        />\n      </g>\n    </g>\n    <path\n      d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z"\n      fill="#e1dde1"\n    />\n    <path\n      d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z"\n      fill="#3ad1e0"\n    />\n    <path\n      d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"\n      fill="#20bfd5"\n    />\n    <path\n      d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z"\n      fill="#23f1a8"\n    />\n    <path\n      d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z"\n      fill="#23f1a8"\n    />\n    <g>\n      <path\n        d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z"\n        fill="#ae6ad8"\n      />\n      <path\n        d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z"\n        fill="#975bbb"\n      />\n    </g>\n    <path\n      d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z"\n      fill="#27e19d"\n    />\n    <path\n      d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z"\n      fill="#ae6ad8"\n    />\n    <path\n      d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"\n      fill="#975bbb"\n    />\n    <g>\n      <path\n        d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z"\n        fill="#3ad1e0"\n      />\n      <path\n        d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"\n        fill="#20bfd5"\n      />\n    </g>\n    <g>\n      <path\n        d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z"\n        fill="#fb54b6"\n      />\n    </g>\n    <path\n      d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z"\n      fill="#fb9927"\n    />\n    <path\n      d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z"\n      fill="#f98824"\n    />\n    <g>\n      <path\n        d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"\n        fill="#fb33a8"\n      />\n    </g>\n    <g>\n      <g>\n        <path\n          d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z"\n          fill="#fdef63"\n        />\n        <g>\n          <g id="XMLID_00000127012381744132405410000009872483291948348836_">\n            <path\n              d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z"\n              fill="#554e55"\n            />\n          </g>\n          <g id="XMLID_00000080918978500845250090000017315552773041050031_">\n            <path\n              d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z"\n              fill="#554e55"\n            />\n          </g>\n          <g id="XMLID_00000140711681861242238370000008769002181148908969_">\n            <path\n              d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z"\n              fill="#554e55"\n            />\n          </g>\n        </g>\n        <path\n          d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z"\n          fill="#f3d730"\n        />\n      </g>\n    </g>\n    <g>\n      <g>\n        <g>\n          <circle\n            cx="187.8"\n            cy="385.284"\n            fill="#d8b2ec"\n            r="25.455"\n          />\n        </g>\n      </g>\n    </g>\n    <g>\n      <g id="XMLID_00000028301319025648580530000009457246182494066313_">\n        <path\n          d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z"\n          fill="#f2eff2"\n        />\n      </g>\n      <g>\n        <path\n          d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z"\n          fill="#f2eff2"\n        />\n      </g>\n    </g>\n  </g>\n</svg>\n',IconDeviceFloppy:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-device-floppy"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />\n  <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\n  <path d="M14 4l0 4l-6 0l0 -4" />\n</svg>\n',IconDotsVertical:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\n  <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\n  <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\n</svg>\n',IconEReader1:'<svg\n  version="1.1"\n  id="Capa_1"\n  xmlns="http://www.w3.org/2000/svg"\n  x="0px"\n  y="0px"\n  viewBox="0 0 512 512"\n  style="enable-background: new 0 0 512 512"\n  xml:space="preserve"\n>\n  <g>\n    <path\n      style="fill: #636978"\n      d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"\n    />\n    <path\n      style="fill: #555a66"\n      d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"\n    />\n    <path\n      style="fill: #96e8ff"\n      d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"\n    />\n    <path\n      style="fill: #80dbff"\n      d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"\n    />\n    <path\n      style="fill: #ffffff"\n      d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"\n    />\n    <path\n      style="fill: #f5fafc"\n      d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"\n    />\n    <path\n      style="fill: #e1f1fa"\n      d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"\n    />\n    <g>\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220c44.183,0,80,35.817,80,80v337&#10;&#9;&#9;&#9;C446,468.683,410.183,504.5,366,504.5z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M126,398.01v16.49c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20v-327c0-11.046-8.954-20-20-20H146&#10;&#9;&#9;&#9;c-11.046,0-20,8.954-20,20v280.51"\n      />\n\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="176"\n        y1="281.01"\n        x2="336"\n        y2="281.01"\n      />\n\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="176"\n        y1="321.01"\n        x2="336"\n        y2="321.01"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M286.144,109.53c-10.033,0.992-20.075,2.987-30.144,5.986c-26.85-7.998-53.509-8.858-80.318-2.577&#10;&#9;&#9;&#9;c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768&#10;&#9;&#9;&#9;c23.172-5.058,46.241-4.777,69.425,0.841c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841&#10;&#9;&#9;&#9;c6.227,1.359,12.113-3.395,12.113-9.768c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18&#10;&#9;&#9;&#9;c-6.702-1.57-13.395-2.694-20.084-3.372"\n      />\n\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="256"\n        y1="115.517"\n        x2="256"\n        y2="229.706"\n      />\n      <g>\n        <line\n          style="\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          "\n          x1="193.551"\n          y1="362.07"\n          x2="193.551"\n          y2="374.07"\n        />\n\n        <line\n          style="\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          "\n          x1="318.449"\n          y1="362.07"\n          x2="318.449"\n          y2="374.07"\n        />\n        <path\n          style="\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          "\n          d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"\n        />\n      </g>\n    </g>\n  </g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n</svg>\n',IconEReader1Flat:'<svg\n  id="Capa_1"\n  enable-background="new 0 0 512 512"\n  viewBox="0 0 512 512"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <g>\n    <g>\n      <path\n        d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z"\n        fill="#636978"\n      />\n    </g>\n    <g>\n      <path\n        d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z"\n        fill="#555a66"\n      />\n    </g>\n    <g>\n      <path\n        d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z"\n        fill="#96e8ff"\n      />\n    </g>\n    <g>\n      <path\n        d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z"\n        fill="#80dbff"\n      />\n    </g>\n    <g>\n      <path\n        d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z"\n        fill="#fff"\n      />\n    </g>\n    <g>\n      <path\n        d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z"\n        fill="#f5fafc"\n      />\n    </g>\n    <g>\n      <path\n        d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z"\n        fill="#e1f1fa"\n      />\n    </g>\n    <g>\n      <g>\n        <path\n          d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"\n          fill="#19cffc"\n        />\n      </g>\n      <g>\n        <path\n          d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"\n          fill="#19cffc"\n        />\n      </g>\n      <g>\n        <g>\n          <path\n            d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z"\n            fill="#495560"\n          />\n        </g>\n        <g>\n          <path\n            d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z"\n            fill="#495560"\n          />\n        </g>\n        <g>\n          <path\n            d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z"\n            fill="#495560"\n          />\n        </g>\n      </g>\n    </g>\n  </g>\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n  <g />\n</svg>\n',IconEReader2:'<?xml version="1.0" encoding="UTF-8"?>\n<svg\n  xmlns="http://www.w3.org/2000/svg"\n  version="1.1"\n  id="Capa_1"\n  x="0px"\n  y="0px"\n  viewBox="0 0 511.941 511.941"\n  style="enable-background: new 0 0 511.941 511.941"\n  xml:space="preserve"\n  width="512"\n  height="512"\n>\n  <g>\n    <g>\n      <path\n        style="fill: #808fa4"\n        d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"\n      />\n      <path\n        style="fill: #64768e"\n        d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"\n      />\n      <path\n        style="fill: #c5ced6"\n        d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"\n      />\n      <polygon\n        style="fill: #abb6c4"\n        points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"\n      />\n      <path\n        style="fill: #9ca9ba"\n        d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"\n      />\n      <polygon\n        style="fill: #c5ced6"\n        points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"\n      />\n      <path\n        style="fill: #abb6c4"\n        d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"\n      />\n      <path\n        style="fill: #64768e"\n        d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"\n      />\n      <path\n        style="fill: #64768e"\n        d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"\n      />\n      <path\n        style="fill: #e8ecf9"\n        d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"\n      />\n      <rect\n        x="97.85"\n        y="210.79"\n        style="fill: #d7ddf5"\n        width="63.97"\n        height="30.12"\n      />\n    </g>\n    <g>\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M384.206,504.441H127.735c-33.137,0-60-26.863-60-60V67.5c0-33.137,26.863-60,60-60h256.471c33.137,0,60,26.863,60,60v376.941&#10;&#9;&#9;&#9;C444.206,477.578,417.343,504.441,384.206,504.441z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M384.088,414.088H127.853c-16.569,0-30-13.431-30-30V67.618c0-16.569,13.431-30,30-30h256.235c16.569,0,30,13.431,30,30v316.471&#10;&#9;&#9;&#9;C414.088,400.657,400.657,414.088,384.088,414.088z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059c0-8.317,6.742-15.059,15.059-15.059h60.235&#10;&#9;&#9;&#9;c8.317,0,15.059,6.742,15.059,15.059C301.147,467.581,294.405,474.324,286.088,474.324z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M100.85,210.79h103.811c6.523,0,12.298-4.215,14.286-10.428L270.56,39.09"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M293.62,410.091v-154.18c0-8.284-6.716-15-15-15H100.85"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M411.091,240.911h-72.36c-8.284,0-15,6.716-15,15v154.18"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M300.616,39.291l-48.622,151.927c-3.098,9.679,4.124,19.572,14.286,19.572h144.81"\n      />\n      <g>\n        <line\n          style="\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          "\n          x1="133.2"\n          y1="310.695"\n          x2="133.2"\n          y2="322.695"\n        />\n\n        <line\n          style="\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          "\n          x1="258.098"\n          y1="310.695"\n          x2="258.098"\n          y2="322.695"\n        />\n        <g>\n          <path\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-miterlimit: 10;\n            "\n            d="M195.831,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"\n          />\n          <path\n            style="\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-miterlimit: 10;\n            "\n            d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"\n          />\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n',IconEReader2Flat:'<svg\n  id="Capa_1"\n  enable-background="new 0 0 512 512"\n  height="512"\n  viewBox="0 0 512 512"\n  width="512"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <g>\n    <path\n      d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z"\n      fill="#808fa4"\n    />\n    <path\n      d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z"\n      fill="#64768e"\n    />\n    <path\n      d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z"\n      fill="#c5ced6"\n    />\n    <path\n      d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z"\n      fill="#abb6c4"\n    />\n    <path\n      d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z"\n      fill="#9ca9ba"\n    />\n    <path\n      d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z"\n      fill="#c5ced6"\n    />\n    <path\n      d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z"\n      fill="#abb6c4"\n    />\n    <path\n      d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z"\n      fill="#64768e"\n    />\n    <path\n      d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z"\n      fill="#64768e"\n    />\n    <path\n      d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z"\n      fill="#e8ecf9"\n    />\n    <path\n      d="m93.088 209.451h65.909v31.033h-65.909z"\n      fill="#d7ddf5"\n    />\n    <g>\n      <g>\n        <path\n          d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z"\n          fill="#495560"\n        />\n      </g>\n      <g>\n        <path\n          d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z"\n          fill="#495560"\n        />\n      </g>\n      <path\n        d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z"\n        fill="#495560"\n      />\n    </g>\n  </g>\n</svg>\n',IconExternalLink:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-external-link"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />\n  <path d="M11 13l9 -9" />\n  <path d="M15 4h5v5" />\n</svg>\n',IconEye:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-eye"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />\n  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />\n</svg>\n',IconEyeOff:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-eye-off"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />\n  <path\n    d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"\n  />\n  <path d="M3 3l18 18" />\n</svg>\n',IconFileDownload:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-file-download"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M14 3v4a1 1 0 0 0 1 1h4" />\n  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />\n  <path d="M12 17v-6" />\n  <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />\n</svg>\n',IconFilePercent:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M10 17l4 -4" />\n  <path d="M14 3v4a1 1 0 0 0 1 1h4" />\n  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />\n  <path d="M10 13h.01" />\n  <path d="M14 17h.01" />\n</svg>\n',IconHandClick:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />\n  <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" />\n  <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />\n  <path\n    d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"\n  />\n  <path d="M5 3l-1 -1" />\n  <path d="M4 7h-1" />\n  <path d="M14 3l1 -1" />\n  <path d="M15 6h1" />\n</svg>\n',IconHelp:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-help"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />\n  <path d="M12 17l0 .01" />\n  <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />\n</svg>\n',IconInfoCircle:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />\n  <path d="M12 9h.01" />\n  <path d="M11 12h1v4h1" />\n</svg>\n',IconKeyboard:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-keyboard"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />\n  <path d="M6 10l0 .01" />\n  <path d="M10 10l0 .01" />\n  <path d="M14 10l0 .01" />\n  <path d="M18 10l0 .01" />\n  <path d="M6 14l0 .01" />\n  <path d="M18 14l0 .01" />\n  <path d="M10 14l4 .01" />\n</svg>\n',IconLayoutBottombar:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />\n  <path d="M4 15l16 0" />\n</svg>\n',IconLayoutBottombarInactive:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />\n  <path d="M4 15h1" />\n  <path d="M19 15h1" />\n  <path d="M9 15h1" />\n  <path d="M14 15h1" />\n</svg>\n',IconLayoutSidebar:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />\n  <path d="M9 4l0 16" />\n</svg>\n',IconLayoutSidebarInactive:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />\n  <path d="M9 4v1" />\n  <path d="M9 9v1" />\n  <path d="M9 14v1" />\n  <path d="M9 19v1" />\n</svg>\n',IconLayoutSidebarRight:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />\n  <path d="M15 4l0 16" />\n</svg>\n',IconLayoutSidebarRightInactive:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />\n  <path d="M15 4v1" />\n  <path d="M15 9v1" />\n  <path d="M15 14v1" />\n  <path d="M15 19v1" />\n</svg>\n',IconListNumbers:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-list-numbers"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M11 6h9" />\n  <path d="M11 12h9" />\n  <path d="M12 18h8" />\n  <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />\n  <path d="M6 10v-6l-2 2" />\n</svg>\n',IconLoader2:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-loader-2"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 3a9 9 0 1 0 9 9" />\n</svg>\n',IconLocationCog:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697" />\n  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\n  <path d="M19.001 15.5v1.5" />\n  <path d="M19.001 21v1.5" />\n  <path d="M22.032 17.25l-1.299 .75" />\n  <path d="M17.27 20l-1.3 .75" />\n  <path d="M15.97 17.25l1.3 .75" />\n  <path d="M20.733 20l1.3 .75" />\n</svg>\n',IconMenu2:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-menu-2"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 6l16 0" />\n  <path d="M4 12l16 0" />\n  <path d="M4 18l16 0" />\n</svg>\n',IconMenuDeep:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 6h16" />\n  <path d="M7 12h13" />\n  <path d="M10 18h10" />\n</svg>\n',IconMessage:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-message"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M8 9h8" />\n  <path d="M8 13h6" />\n  <path\n    d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"\n  />\n</svg>\n',IconMoon:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-moon"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />\n</svg>\n',IconPage:'<?xml version="1.0" encoding="UTF-8"?>\n<svg\n  xmlns="http://www.w3.org/2000/svg"\n  version="1.1"\n  id="Capa_1"\n  x="0px"\n  y="0px"\n  viewBox="0 0 511.94 511.94"\n  style="enable-background: new 0 0 511.94 511.94"\n  xml:space="preserve"\n  width="512"\n  height="512"\n>\n  <g>\n    <g>\n      <path\n        style="fill: #e8ecf9"\n        d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"\n      />\n      <path\n        style="fill: #d7ddf5"\n        d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"\n      />\n      <path\n        style="fill: #c5ced6"\n        d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"\n      />\n      <path\n        style="fill: #abb6c4"\n        d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"\n      />\n      <path\n        style="fill: #c5ced6"\n        d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"\n      />\n      <path\n        style="fill: #abb6c4"\n        d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"\n      />\n      <polygon\n        style="fill: #c5ced6"\n        points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"\n      />\n      <polygon\n        style="fill: #abb6c4"\n        points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"\n      />\n      <path\n        style="fill: #808fa4"\n        d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"\n      />\n      <path\n        style="fill: #64768e"\n        d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"\n      />\n      <path\n        style="fill: #808fa4"\n        d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"\n      />\n      <path\n        style="fill: #64768e"\n        d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"\n      />\n      <path\n        style="fill: #808fa4"\n        d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"\n      />\n      <path\n        style="fill: #abb6c4"\n        d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"\n      />\n      <path\n        style="fill: #c5ced6"\n        d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"\n      />\n      <g>\n        <g>\n          <ellipse\n            style="fill: #ffffff"\n            cx="175.162"\n            cy="150.402"\n            rx="29.816"\n            ry="23.744"\n          />\n          <ellipse\n            style="fill: #ffffff"\n            cx="336.778"\n            cy="150.402"\n            rx="29.816"\n            ry="23.744"\n          />\n        </g>\n      </g>\n    </g>\n    <g>\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M67.73,402.54v41.9c0,33.14,26.87,60,60,60h256.48c33.13,0,60-26.86,60-60V67.5c0-33.14-26.87-60-60-60H127.73&#10;&#9;&#9;&#9;c-33.13,0-60,26.86-60,60v300.04"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M359,52.68h25.03c8.28,0,15,6.71,15,15v135.64c0,8.29-6.72,15-15,15H127.91c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H324&#10;&#9;&#9;&#9;"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M203.323,459.264h-75.412c-8.284,0-15-6.716-15-15V278.499c0-8.284,6.716-15,15-15h75.412c8.284,0,15,6.716,15,15v165.765&#10;&#9;&#9;&#9;C218.323,452.548,211.607,459.264,203.323,459.264z"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M399.03,278.5v165.76c0,8.29-6.72,15-15,15H278.5c-8.28,0-15-6.71-15-15V278.5c0-8.28,6.72-15,15-15h105.53&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"\n      />\n\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="264.641"\n        y1="367.54"\n        x2="327.14"\n        y2="324.275"\n      />\n\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="335.24"\n        y1="420"\n        x2="317.58"\n        y2="458.04"\n      />\n\n      <line\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        x1="365.42"\n        y1="354.99"\n        x2="349.98"\n        y2="388.25"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M337.07,266.11c-14.481,16.226-16.955,38.907-8.48,57.16c12.198,26.365,43.179,37.557,69.06,26.13"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M114.09,339.63c4.39-1.26,8.16-4.51,9.91-9.1c2.29-6,8.01-9.69,14.07-9.69c4.907,0,5.826,2,10.76,2&#10;&#9;&#9;&#9;c6.016,0,11.752-3.643,14.06-9.68c2.29-6,8-9.69,14.07-9.69c3.551,0,5.135,1.068,7.09,1.54c7.171,1.837,14.948-1.942,17.73-9.23&#10;&#9;&#9;&#9;c2.653-6.632,8.993-10.222,15.36-9.63"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M114.09,382.66c0.973,0.288,2.952,1.28,6.18,1.28c6.07,0,11.78-3.69,14.07-9.69c2.29-6,8.01-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.605,0,5.534,1.709,9.85,1.97c6.213,0.414,12.476-3.218,14.97-9.65c2.891-7.576,11.422-11.716,19.44-8.69&#10;&#9;&#9;&#9;c7.75,2.977,16.481-0.911,19.45-8.69c1.05-2.75,2.82-5.02,5.02-6.66"\n      />\n      <path\n        style="\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        "\n        d="&#10;&#9;&#9;&#9;M114.09,428.31c3.44-1.43,7.41-1.59,11.15-0.16c7.75,2.977,16.481-0.911,19.45-8.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.886,0,5.854,2,10.74,2c6.07,0,11.78-3.69,14.07-9.69c2.29-5.99,8.01-9.68,14.07-9.68c4.907,0,5.856,2,10.75,2&#10;&#9;&#9;&#9;c3.118,0,6.213-0.998,8.75-2.81"\n      />\n      <g>\n        <g>\n          <g>\n            <path\n              style="\n                fill: none;\n                stroke: #000000;\n                stroke-width: 15;\n                stroke-linecap: round;\n                stroke-miterlimit: 10;\n              "\n              d="M255.97,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"\n            />\n            <path\n              style="\n                fill: none;\n                stroke: #000000;\n                stroke-width: 15;\n                stroke-linecap: round;\n                stroke-miterlimit: 10;\n              "\n              d="M284.881,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"\n            />\n          </g>\n        </g>\n        <path\n          style="\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          "\n          d="&#10;&#9;&#9;&#9;&#9;M208.213,117.501c0-7.602-6.163-13.765-13.765-13.765c-7.602,0-13.765,6.163-13.765,13.765"\n        />\n        <path\n          style="\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          "\n          d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"\n        />\n      </g>\n    </g>\n  </g>\n</svg>\n',IconPageFlat:'<svg\n  id="Capa_1"\n  enable-background="new 0 0 512 512"\n  height="512"\n  viewBox="0 0 512 512"\n  width="512"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <g>\n    <path\n      d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z"\n      fill="#e8ecf9"\n    />\n    <path\n      d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z"\n      fill="#d7ddf5"\n    />\n    <path\n      d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z"\n      fill="#c5ced6"\n    />\n    <path\n      d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z"\n      fill="#abb6c4"\n    />\n    <path\n      d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z"\n      fill="#c5ced6"\n    />\n    <path\n      d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z"\n      fill="#abb6c4"\n    />\n    <path\n      d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z"\n      fill="#c5ced6"\n    />\n    <path\n      d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z"\n      fill="#abb6c4"\n    />\n    <path\n      d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z"\n      fill="#808fa4"\n    />\n    <path\n      d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z"\n      fill="#64768e"\n    />\n    <path\n      d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z"\n      fill="#808fa4"\n    />\n    <path\n      d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z"\n      fill="#64768e"\n    />\n    <path\n      d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z"\n      fill="#808fa4"\n    />\n    <path\n      d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z"\n      fill="#abb6c4"\n    />\n    <path\n      d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z"\n      fill="#c5ced6"\n    />\n    <g>\n      <g>\n        <ellipse\n          cx="172.744"\n          cy="147.233"\n          fill="#fff"\n          rx="30.72"\n          ry="24.464"\n        />\n        <ellipse\n          cx="339.256"\n          cy="147.233"\n          fill="#fff"\n          rx="30.72"\n          ry="24.464"\n        />\n        <path\n          d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z"\n          fill="#495560"\n        />\n      </g>\n      <g>\n        <path\n          d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z"\n          fill="#495560"\n        />\n      </g>\n      <g>\n        <path\n          d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z"\n          fill="#495560"\n        />\n      </g>\n    </g>\n  </g>\n</svg>\n',IconPalette:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-palette"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path\n    d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"\n  />\n  <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\n  <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\n  <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\n</svg>\n',IconPencil:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-pencil"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />\n  <path d="M13.5 6.5l4 4" />\n</svg>\n',IconPencilCog:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />\n  <path d="M13.5 6.5l4 4" />\n  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\n  <path d="M19.001 15.5v1.5" />\n  <path d="M19.001 21v1.5" />\n  <path d="M22.032 17.25l-1.299 .75" />\n  <path d="M17.27 20l-1.3 .75" />\n  <path d="M15.97 17.25l1.3 .75" />\n  <path d="M20.733 20l1.3 .75" />\n</svg>\n',IconPhoto:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-photo"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M15 8h.01" />\n  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />\n  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />\n  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />\n</svg>\n',IconPhotoOff:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-photo-off"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M15 8h.01" />\n  <path\n    d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"\n  />\n  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />\n  <path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3" />\n  <path\n    d="M3 3l18 18"\n    color="orange"\n  />\n</svg>\n',IconPin:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-pin"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />\n  <path d="M9 15l-4.5 4.5" />\n  <path d="M14.5 4l5.5 5.5" />\n</svg>\n',IconPlayerPause:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-player-pause"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />\n  <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />\n</svg>\n',IconPlayerPlay:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-player-play"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M7 4v16l13 -8z" />\n</svg>\n',IconRefresh:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-refresh"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />\n  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />\n</svg>\n',IconSettings:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-settings"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path\n    d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"\n  />\n  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />\n</svg>\n',IconSettingsOff:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path\n    d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"\n  />\n  <path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415" />\n  <path d="M3 3l18 18" />\n</svg>\n',IconSpacingVertical:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-spacing-vertical"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2" />\n  <path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />\n  <path d="M16 12h-8" />\n</svg>\n',IconSun:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-sun"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />\n  <path\n    d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"\n  />\n</svg>\n',IconTrash:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-trash"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M4 7l16 0" />\n  <path d="M10 11l0 6" />\n  <path d="M14 11l0 6" />\n  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />\n  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />\n</svg>\n',IconWorldCog:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M21 12a9 9 0 1 0 -8.979 9" />\n  <path d="M3.6 9h16.8" />\n  <path d="M3.6 15h8.9" />\n  <path d="M11.5 3a17 17 0 0 0 0 18" />\n  <path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376" />\n  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\n  <path d="M19.001 15.5v1.5" />\n  <path d="M19.001 21v1.5" />\n  <path d="M22.032 17.25l-1.299 .75" />\n  <path d="M17.27 20l-1.3 .75" />\n  <path d="M15.97 17.25l1.3 .75" />\n  <path d="M20.733 20l1.3 .75" />\n</svg>\n',IconX:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-x"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M18 6l-12 12" />\n  <path d="M6 6l12 12" />\n</svg>\n',IconZoom:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-zoom"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\n  <path d="M21 21l-6 -6" />\n</svg>\n',IconZoomCancel:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-zoom-cancel"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\n  <path d="M8 8l4 4" />\n  <path d="M12 8l-4 4" />\n  <path d="M21 21l-6 -6" />\n</svg>\n',IconZoomIn:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-zoom-in"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\n  <path d="M7 10l6 0" />\n  <path d="M10 7l0 6" />\n  <path d="M21 21l-6 -6" />\n</svg>\n',IconZoomInArea:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-zoom-in-area"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M15 13v4" />\n  <path d="M13 15h4" />\n  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />\n  <path d="M22 22l-3 -3" />\n  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />\n  <path d="M3 11v-1" />\n  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />\n  <path d="M10 3h1" />\n  <path d="M15 3h1a2 2 0 0 1 2 2v1" />\n</svg>\n',IconZoomOut:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-zoom-out"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\n  <path d="M7 10l6 0" />\n  <path d="M21 21l-6 -6" />\n</svg>\n',IconZoomOutArea:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-zoom-out-area"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M13 15h4" />\n  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />\n  <path d="M22 22l-3 -3" />\n  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />\n  <path d="M3 11v-1" />\n  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />\n  <path d="M10 3h1" />\n  <path d="M15 3h1a2 2 0 0 1 2 2v1" />\n</svg>\n',IconZoomPan:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  class="icon icon-tabler icon-tabler-zoom-pan"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  stroke-width="2"\n  stroke="currentColor"\n  fill="none"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path\n    stroke="none"\n    d="M0 0h24v24H0z"\n    fill="none"\n  />\n  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />\n  <path d="M17 17l-2.5 -2.5" />\n  <path d="M10 5l2 -2l2 2" />\n  <path d="M19 10l2 2l-2 2" />\n  <path d="M5 10l-2 2l2 2" />\n  <path d="M10 19l2 2l2 -2" />\n</svg>\n'},Symbol.toStringTag,{value:"Module"})),sa=[...".icon-tabler-file-download > :nth-child(n + 4) {\n  color: gold;\n}\n\n.icon-tabler-arrow-autofit-width > :nth-child(n + 3) {\n  color: yellow;\n}\n\n.icon-tabler-arrow-autofit-height > :nth-child(n + 3) {\n  color: yellow;\n}\n\n.icon-tabler-zoom-in-area > :nth-child(2),\n.icon-tabler-zoom-in-area > :nth-child(3) {\n  color: lime;\n}\n\n.icon-tabler-zoom-out-area > :nth-child(2) {\n  color: red;\n}\n\n.icon-tabler-zoom-pan > :nth-child(n + 4) {\n  color: #9966ff;\n}\n\n.icon-tabler-arrow-autofit-down > :nth-child(n + 3) {\n  color: #28ffbf;\n}\n\n.icon-tabler-arrow-autofit-left > :nth-child(n + 3) {\n  color: #28ffbf;\n}\n\n.icon-tabler-arrow-autofit-right > :nth-child(n + 3) {\n  color: #28ffbf;\n}\n\n.icon-tabler-spacing-vertical > :nth-child(4) {\n  color: fuchsia;\n}\n\n.icon-tabler-list-numbers > :nth-child(n + 5) {\n  color: #e48900;\n}\n\n.icon-tabler-bookmarks > :nth-child(n + 2) {\n  color: orange;\n}\n\n.icon-tabler-bookmark > :nth-child(2) {\n  color: orange;\n}\n\n.icon-tabler-bookmark-off > :nth-child(2) {\n  color: orange;\n}\n\n.icon-tabler-bookmark-off > :nth-child(3) {\n  color: red;\n}\n\n.icon-tabler-eye-off > :nth-child(4) {\n  color: red;\n}\n\n.icon-tabler-zoom-cancel > :nth-child(3),\n.icon-tabler-zoom-cancel > :nth-child(4) {\n  color: #9966ff;\n}\n\n.icon-tabler-zoom-in > :nth-child(3),\n.icon-tabler-zoom-in > :nth-child(4) {\n  color: lime;\n}\n\n.icon-tabler-zoom-out > :nth-child(3) {\n  color: red;\n}\n\n.icon-tabler-refresh > :nth-child(n + 2) {\n  color: cyan;\n}\n\n.icon-tabler-photo > :nth-child(n + 2) {\n  color: silver;\n}\n\n.icon-tabler-photo-off > :nth-child(n + 2) {\n  color: silver;\n}\n\n.icon-tabler-photo-off > :nth-child(6) {\n  color: orange;\n}\n\n.icon-tabler-message > :nth-child(2),\n.icon-tabler-message > :nth-child(3) {\n  color: greenyellow;\n}\n\n.icon-tabler-book-return > g {\n  color: greenyellow;\n}\n\n.icon-tabler-file-percent > :nth-child(2),\n.icon-tabler-file-percent > :nth-child(5),\n.icon-tabler-file-percent > :nth-child(6) {\n  color: yellow;\n}\n\n.icon-tabler-settings-off > :nth-child(4) {\n  color: red;\n}\n".matchAll(/([^{}]+)\s*\{([^}]+)\}/g)].map(e=>{const n=e[1].trim(),t=e[2],o=/color:\s*([^;]+)/.exec(t);if(o){const e=o[1].trim(),t=n.split(",").map(e=>e.trim().replace(/\s\s+/g," "));return{selectors:t,color:e}}return null}).filter(e=>null!==e),ca=new Map;for(const e of sa)for(const n of e.selectors){const t=n.match(/^\s*\.([^ ]+)\s*(.*)$/);if(!t)continue;const[,o,i]=t;let r=i.trim();r.startsWith(">")&&(r=r.substring(1).trim()),""===r&&(r="*"),ca.has(o)||ca.set(o,[]),ca.get(o)?.push({subSelector:r,color:e.color})}const da=new DOMParser,ha=new XMLSerializer,pa=Object.fromEntries(Object.keys(la).map(e=>{const n=e.replace(/^Icon/,"").replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),t=function(e,n){const t=ca.get(n);if(!t?.length)return e;const o=da.parseFromString(e,"image/svg+xml").documentElement;if(o.querySelector("parsererror"))return console.error(`Error parsing SVG for ${n}`),e;for(const{subSelector:e,color:i}of t)try{o.querySelectorAll(e).forEach(e=>{e.setAttribute("stroke",i)})}catch(t){console.error(`Invalid selector "${e}" for ${n}`,t)}return ha.serializeToString(o)}(la[e],`icon-tabler-${n}`);return[e,t]})),{IconArrowAutofitDown:ua,IconArrowAutofitHeight:ga,IconArrowAutofitLeft:ma,IconArrowAutofitRight:va,IconArrowAutofitWidth:fa,IconArrowBigLeft:ba,IconArrowBigRight:wa,IconArrowsMove:ka,IconArrowsMoveVertical:ya,IconArrowsVertical:Ea,IconBook:xa,IconBookReturn:Ia,IconBookUpload:Aa,IconBookmark:Ma,IconBookmarkOff:Sa,IconBookmarks:Ca,IconBoxAlignTop:_a,IconCategory:Oa,IconCheck:Ta,IconChevronRight:La,IconAlertCircle:$a,IconCircleCheck:Da,IconCircleX:Ra,IconHelp:Na,IconInfoCircle:za,IconComic1:Pa,IconComic1Flat:Ba,IconComic2:Ha,IconComic2Flat:Fa,IconComic3:Ga,IconComic3Flat:Va,IconDeviceFloppy:Ua,IconDotsVertical:Wa,IconEReader1:ja,IconEReader1Flat:Za,IconEReader2:Qa,IconEReader2Flat:qa,IconExternalLink:Ya,IconEye:Xa,IconEyeOff:Ka,IconFileDownload:Ja,IconFilePercent:el,IconHandClick:nl,IconKeyboard:tl,IconLayoutBottombar:ol,IconLayoutBottombarInactive:il,IconLayoutSidebar:rl,IconLayoutSidebarInactive:al,IconLayoutSidebarRight:ll,IconLayoutSidebarRightInactive:sl,IconListNumbers:cl,IconLoader2:dl,IconLocationCog:hl,IconMenu2:pl,IconMenuDeep:ul,IconMessage:gl,IconMoon:ml,IconPage:vl,IconPageFlat:fl,IconPalette:bl,IconPencil:wl,IconPencilCog:kl,IconPhoto:yl,IconPhotoOff:El,IconPin:xl,IconPlayerPause:Il,IconPlayerPlay:Al,IconRefresh:Ml,IconSettings:Sl,IconSettingsOff:Cl,IconSpacingVertical:_l,IconSun:Ol,IconTrash:Tl,IconWorldCog:Ll,IconX:$l,IconZoom:Dl,IconZoomCancel:Rl,IconZoomIn:Nl,IconZoomInArea:zl,IconZoomOut:Pl,IconZoomOutArea:Bl,IconZoomPan:Hl}=pa,Fl=Object.freeze(Object.defineProperty({__proto__:null,IconAlertCircle:$a,IconArrowAutofitDown:ua,IconArrowAutofitHeight:ga,IconArrowAutofitLeft:ma,IconArrowAutofitRight:va,IconArrowAutofitWidth:fa,IconArrowBigLeft:ba,IconArrowBigRight:wa,IconArrowsMove:ka,IconArrowsMoveVertical:ya,IconArrowsVertical:Ea,IconBook:xa,IconBookReturn:Ia,IconBookUpload:Aa,IconBookmark:Ma,IconBookmarkOff:Sa,IconBookmarks:Ca,IconBoxAlignTop:_a,IconCategory:Oa,IconCheck:Ta,IconChevronRight:La,IconCircleCheck:Da,IconCircleX:Ra,IconComic1:Pa,IconComic1Flat:Ba,IconComic2:Ha,IconComic2Flat:Fa,IconComic3:Ga,IconComic3Flat:Va,IconDeviceFloppy:Ua,IconDotsVertical:Wa,IconEReader1:ja,IconEReader1Flat:Za,IconEReader2:Qa,IconEReader2Flat:qa,IconExternalLink:Ya,IconEye:Xa,IconEyeOff:Ka,IconFileDownload:Ja,IconFilePercent:el,IconHandClick:nl,IconHelp:Na,IconInfoCircle:za,IconKeyboard:tl,IconLayoutBottombar:ol,IconLayoutBottombarInactive:il,IconLayoutSidebar:rl,IconLayoutSidebarInactive:al,IconLayoutSidebarRight:ll,IconLayoutSidebarRightInactive:sl,IconListNumbers:cl,IconLoader2:dl,IconLocationCog:hl,IconMenu2:pl,IconMenuDeep:ul,IconMessage:gl,IconMoon:ml,IconPage:vl,IconPageFlat:fl,IconPalette:bl,IconPencil:wl,IconPencilCog:kl,IconPhoto:yl,IconPhotoOff:El,IconPin:xl,IconPlayerPause:Il,IconPlayerPlay:Al,IconRefresh:Ml,IconSettings:Sl,IconSettingsOff:Cl,IconSpacingVertical:_l,IconSun:Ol,IconTrash:Tl,IconWorldCog:Ll,IconX:$l,IconZoom:Dl,IconZoomCancel:Rl,IconZoomIn:Nl,IconZoomInArea:zl,IconZoomOut:Pl,IconZoomOutArea:Bl,IconZoomPan:Hl},Symbol.toStringTag,{value:"Module"}));$n=Object.defineProperty,Dn=Object.getOwnPropertyDescriptor,Rn=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?Dn(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(n,t,a):r(a))||a);return o&&a&&$n(n,t,a),a};let Gl=class extends Kr{constructor(){super(...arguments),this.name="",this.label="",this.size=""}render(){const e=!(n=this.name).startsWith("Icon")||n.includes("-")||n.includes("_")?`Icon${(n.startsWith("Icon")?n.substring(4):n).split(/[-_]/).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join("")}`:n;var n;const t=Fl[e],o=this.size?`--mov-icon-size: ${this.size};`:"";return Ti`<span
      role=${this.label?"img":$i}
      aria-label=${this.label||$i}
      aria-hidden=${this.label?$i:"true"}
      style=${o}
      >${aa(t)}</span
    >`}};Gl.styles=Rr`
    :host {
      --mov-icon-size: 1rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      line-height: 1;
    }
    :host([hidden]) {
      display: none;
    }
    svg {
      width: var(--mov-icon-size, 1rem);
      height: var(--mov-icon-size, 1rem);
      display: block;
      color: inherit; /* This will inherit from the host element */
    }
  `,Rn([Y({type:String})],Gl.prototype,"name",2),Rn([Y({type:String})],Gl.prototype,"label",2),Rn([Y({type:String})],Gl.prototype,"size",2),Gl=Rn([ea("mov-icon")],Gl);
/**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const Vl=ji(class extends Zi{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(n=>e[n]).join(" ")+" "}update(e,[n]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in n)n[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(n)}const t=e.element.classList;for(const e of this.st)e in n||(t.remove(e),this.st.delete(e));for(const e in n){const o=!!n[e];o===this.st.has(e)||this.nt?.has(e)||(o?(t.add(e),this.st.add(e)):(t.remove(e),this.st.delete(e)))}return Li}}),Ul=e=>e??$i;
/**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */Nn=Object.defineProperty,zn=Object.getOwnPropertyDescriptor,Pn=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?zn(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(n,t,a):r(a))||a);return o&&a&&Nn(n,t,a),a};let Wl=class extends Kr{constructor(){super(...arguments),this.isIconButton=!1,this.hasLabel=!1,this.hasStart=!1,this.hasEnd=!1,this.title="",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button",this.form=null}handleClick(e){(this.disabled||this.loading)&&(e.preventDefault(),e.stopPropagation())}click(){this.button?.click()}focus(e){this.button?.focus(e)}blur(){this.button?.blur()}render(){const e=!!this.href,n={button:!0,"with-caret":this.withCaret,disabled:this.disabled,loading:this.loading,pill:this.pill,"has-label":this.hasLabel,"has-start":this.hasStart,"has-end":this.hasEnd,"is-icon-button":this.isIconButton},t=Ti`
      <slot
        name="start"
        @slotchange=${this.handleLabelSlotChange}
        part="start"
        class="start"
      ></slot>
      <slot
        @slotchange=${this.handleLabelSlotChange}
        part="label"
        class="label"
      ></slot>
      <slot
        name="end"
        @slotchange=${this.handleLabelSlotChange}
        part="end"
        class="end"
      ></slot>
      ${this.withCaret?Ti`<mov-icon
            part="caret"
            class="caret"
            name="IconChevronRight"
            style="transform: rotate(90deg)"
          ></mov-icon>`:""}
      ${this.loading?Ti`<span
            part="spinner"
            class="spinner"
          ></span>`:""}
    `;return e?Ti`
        <a
          part="base"
          class=${Vl(n)}
          href=${Ul(this.href)}
          target=${Ul(this.target)}
          title=${Ul(this.title)}
          role="button"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          download=${Ul(this.download)}
          @click=${this.handleClick}
        >
          ${t}
        </a>
      `:Ti`
        <button
          part="base"
          class=${Vl(n)}
          ?disabled=${this.disabled||this.loading}
          type=${Ul(this.type)}
          title=${Ul(this.title)}
          name=${Ul(this.name)}
          value=${Ul(this.value)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
        >
          ${t}
        </button>
      `}handleLabelSlotChange(){const e=this.labelSlot?.assignedNodes({flatten:!0})??[],n=e.filter(e=>e.nodeType===Node.ELEMENT_NODE),t=e.filter(e=>e.nodeType===Node.TEXT_NODE&&""!==e.textContent?.trim()),o=n.some(e=>["wa-icon","mov-icon","svg"].includes(e.localName));this.isIconButton=0===t.length&&o}};Wl.styles=[Dr(':host {\n  display: inline-block;\n  --mov-font-size-scale: 1;\n  --mov-font-size-m: calc(1rem * var(--mov-font-size-scale));\n  --mov-font-size-s: round(calc(var(--mov-font-size-m) / 1.125), 1px);\n  --mov-font-size-l: round(calc(var(--mov-font-size-m) * 1.125 * 1.125), 1px);\n  --mov-border-width-s: 0.0625rem;\n  --mov-border-radius-m: 0.375rem;\n  --mov-border-radius-pill: 9999px;\n  --mov-transition-fast: 75ms;\n  --mov-font-weight-action: 500;\n  --mov-focus-ring: solid 0.1875rem var(--mov-color-fill-loud);\n  --mov-focus-ring-offset: 0.0625rem;\n  --mov-line-height-condensed: 1.2;\n  --mov-form-control-padding-block: 0.75em;\n  --mov-form-control-padding-inline: 1em;\n  --mov-form-control-height: round(\n    calc(2 * var(--mov-form-control-padding-block) + 1em * var(--mov-line-height-condensed)),\n    1px\n  );\n}\n\n:host([size="small"]) {\n  font-size: var(--mov-font-size-s);\n}\n:host([size="medium"]) {\n  font-size: var(--mov-font-size-m);\n}\n:host([size="large"]) {\n  font-size: var(--mov-font-size-l);\n}\n\n.button {\n  box-sizing: border-box;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  user-select: none;\n  white-space: nowrap;\n  vertical-align: middle;\n  transition-property: background, border, box-shadow, color;\n  transition-duration: var(--mov-transition-fast);\n  cursor: pointer;\n  padding: 0 var(--mov-form-control-padding-inline);\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: var(--mov-font-weight-action);\n  line-height: calc(var(--mov-form-control-height) - var(--mov-border-width-s) * 2);\n  height: var(--mov-form-control-height);\n  border-radius: var(--mov-border-radius-m);\n  border-style: solid;\n  border-width: var(--mov-border-width-s);\n  background-color: var(--mov-color-fill-loud);\n  color: var(--mov-color-on-loud);\n  border-color: transparent;\n}\n\n/* Appearance modifiers */\n:host([appearance~="plain"]) {\n  .button {\n    color: var(--mov-color-on-quiet);\n    background-color: transparent;\n    border-color: transparent;\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      color: var(--mov-color-on-quiet);\n      background-color: var(--mov-color-fill-quiet);\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    color: var(--mov-color-on-quiet);\n    background-color: color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active));\n  }\n}\n\n:host([appearance~="outlined"]) {\n  .button {\n    color: var(--mov-color-on-quiet);\n    background-color: transparent;\n    border-color: var(--mov-color-border-loud);\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      color: var(--mov-color-on-quiet);\n      background-color: var(--mov-color-fill-quiet);\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    color: var(--mov-color-on-quiet);\n    background-color: color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active));\n  }\n}\n\n:host([appearance~="filled"]) {\n  .button {\n    color: var(--mov-color-on-normal);\n    background-color: var(--mov-color-fill-normal);\n    border-color: transparent;\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      color: var(--mov-color-on-normal);\n      background-color: color-mix(\n        in oklab,\n        var(--mov-color-fill-normal),\n        var(--mov-color-mix-hover)\n      );\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    color: var(--mov-color-on-normal);\n    background-color: color-mix(\n      in oklab,\n      var(--mov-color-fill-normal),\n      var(--mov-color-mix-active)\n    );\n  }\n}\n\n:host([appearance~="filled"][appearance~="outlined"]) .button {\n  border-color: var(--mov-color-border-normal);\n}\n\n:host([appearance~="accent"]) {\n  .button {\n    color: var(--mov-color-on-loud);\n    background-color: var(--mov-color-fill-loud);\n    border-color: transparent;\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      background-color: color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-hover));\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    background-color: color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-active));\n  }\n}\n/* Focus states */\n.button:focus {\n  outline: none;\n}\n.button:focus-visible {\n  outline: var(--mov-focus-ring);\n  outline-offset: var(--mov-focus-ring-offset);\n}\n\n/* Disabled state */\n.button.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.button.disabled * {\n  pointer-events: none;\n}\n\n/* Icon buttons */\n.button.is-icon-button {\n  outline-offset: 2px;\n  width: var(--mov-form-control-height);\n  aspect-ratio: 1;\n}\n\n/* Pill modifier */\n:host([pill]) .button {\n  border-radius: var(--mov-border-radius-pill);\n}\n\n.start,\n.end {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  pointer-events: none;\n}\n\n.label {\n  display: inline-block;\n}\n.is-icon-button .label {\n  display: flex;\n}\n\nmov-icon[part~="caret"] {\n  display: flex;\n  align-self: center;\n  align-items: center;\n}\nmov-icon[part~="caret"]::part(svg) {\n  width: 0.875em;\n  height: 0.875em;\n}\n\n.loading {\n  position: relative;\n  cursor: wait;\n}\n.loading .start,\n.loading .label,\n.loading .end,\n.loading .caret {\n  visibility: hidden;\n}\n\n.spinner {\n  --indicator-color: currentColor;\n  --track-color: color-mix(in oklab, currentColor, transparent 90%);\n  position: absolute;\n  font-size: 1em;\n  height: 1em;\n  width: 1em;\n  top: calc(50% - 0.5em);\n  left: calc(50% - 0.5em);\n  border-radius: 50%;\n  border: 2px solid var(--track-color);\n  border-top-color: var(--indicator-color);\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\nslot[name="start"]::slotted(*) {\n  margin-inline-end: 0.75em;\n}\nslot[name="end"]::slotted(*),\n.button:not(.visually-hidden-label) [part~="caret"] {\n  margin-inline-start: 0.75em;\n}\n')],Pn([K(".button")],Wl.prototype,"button",2),Pn([K("slot:not([name])")],Wl.prototype,"labelSlot",2),Pn([X()],Wl.prototype,"isIconButton",2),Pn([X()],Wl.prototype,"hasLabel",2),Pn([X()],Wl.prototype,"hasStart",2),Pn([X()],Wl.prototype,"hasEnd",2),Pn([Y()],Wl.prototype,"title",2),Pn([Y({reflect:!0})],Wl.prototype,"appearance",2),Pn([Y({reflect:!0})],Wl.prototype,"size",2),Pn([Y({attribute:"with-caret",type:Boolean,reflect:!0})],Wl.prototype,"withCaret",2),Pn([Y({type:Boolean,reflect:!0})],Wl.prototype,"disabled",2),Pn([Y({type:Boolean,reflect:!0})],Wl.prototype,"loading",2),Pn([Y({type:Boolean,reflect:!0})],Wl.prototype,"pill",2),Pn([Y()],Wl.prototype,"type",2),Pn([Y({reflect:!0})],Wl.prototype,"name",2),Pn([Y({reflect:!0})],Wl.prototype,"value",2),Pn([Y({reflect:!0})],Wl.prototype,"href",2),Pn([Y()],Wl.prototype,"target",2),Pn([Y()],Wl.prototype,"rel",2),Pn([Y()],Wl.prototype,"download",2),Pn([Y({reflect:!0})],Wl.prototype,"form",2),Wl=Pn([ea("mov-button")],Wl),Bn=Object.defineProperty,Hn=Object.getOwnPropertyDescriptor,Fn=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?Hn(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(n,t,a):r(a))||a);return o&&a&&Bn(n,t,a),a};let jl=class extends Kr{constructor(){super(...arguments),this.mode="menu",this.active=!1,this.label="",this.icon="",this.activeIcon="",this.appearance="accent",this.size="medium",this.disabled=!1,this.loading=!1}connectedCallback(){super.connectedCallback(),this.label||(this.label=this._getDefaultLabel())}render(){const e=this.active?this.activeLabel??this.label:this.label,n={"two-icon-mode":["menu","custom","theme"].includes(this.mode),"single-icon-mode":["chevron","expand","play-pause"].includes(this.mode)};return Ti`
      <mov-button
        @click=${this._onClick}
        .appearance=${Ul(this.appearance)}
        .size=${Ul(this.size)}
        ?disabled=${Ul(this.disabled)}
        ?loading=${Ul(this.loading)}
        .title=${Ul(this.title)}
        class=${Vl(n)}
        title=${e}
        aria-label=${e}
        aria-pressed=${this.active?"true":"false"}
        icon-only
      >
        ${this._renderIcons()}
      </mov-button>
    `}_getDefaultLabel(){switch(this.mode){case"menu":return"Toggle menu";case"chevron":case"expand":return"Toggle expand";case"theme":return"Toggle theme";case"play-pause":return"Toggle play";default:return"Toggle"}}_getIcons(){switch(this.mode){case"menu":return{inactive:"menu-2",active:"x"};case"chevron":return{inactive:"chevron-right",active:"chevron-right"};case"theme":return{inactive:"moon",active:"sun"};case"play-pause":return{inactive:"player-play",active:"player-pause"};case"expand":return{inactive:"arrow-autofit-down",active:"arrow-autofit-down"};case"custom":return{inactive:this.icon,active:this.activeIcon};default:return{inactive:"",active:""}}}_renderIcons(){const e=this._getIcons();return e.inactive?"chevron"===this.mode?Ti`<mov-icon
        class="chevron-icon"
        name=${e.inactive}
      ></mov-icon>`:"expand"===this.mode?Ti`<mov-icon
        class="expand-icon"
        name=${e.inactive}
      ></mov-icon>`:"play-pause"===this.mode?Ti`<mov-icon
        class="play-pause-icon"
        name=${this.active?e.active:e.inactive}
      ></mov-icon>`:Ti`
      <mov-icon
        class="inactive-icon"
        name=${e.inactive}
      ></mov-icon>
      <mov-icon
        class="active-icon"
        name=${e.active}
      ></mov-icon>
    `:$i}_onClick(){if(this.disabled||this.loading)return;const e=this.active;this.active=!this.active,this.dispatchEvent(new CustomEvent("toggle",{detail:{value:this.active,oldValue:e,mode:this.mode},bubbles:!0,composed:!0}))}toggle(){this._onClick()}setActive(e){this.active=e}};jl.styles=Rr`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }

    /* Base button styling */
    mov-button {
      position: relative;
    }

    /* Single icon modes - simple rotation in place */
    .single-icon-mode mov-icon {
      transition: transform 0.3s ease;
      display: block;
    }

    .chevron-icon {
      transform: rotate(0deg);
    }

    :host([active]) .chevron-icon {
      transform: rotate(90deg);
    }

    .expand-icon {
      transform: rotate(0deg);
    }

    :host([active]) .expand-icon {
      transform: rotate(180deg);
    }

    /* Two icon modes - positioned for smooth swap */
    .two-icon-mode {
      position: relative;
    }

    .two-icon-mode mov-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition:
        opacity 0.25s ease,
        transform 0.3s ease;
    }

    /* Default state: inactive visible, active hidden */
    .inactive-icon {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    .active-icon {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }

    /* Active state: inactive hidden, active visible */
    :host([active]) .inactive-icon {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }

    :host([active]) .active-icon {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    /* Play-pause uses single icon swap without positioning issues */
    .play-pause-icon {
      transition: opacity 0.2s ease;
      display: block;
    }

    /* Simple click feedback without disrupting layout */
    mov-button:active {
      transform: scale(0.96);
    }

    /* Loading state */
    :host([loading]) mov-icon {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    /* Hover effects */
    mov-button:hover:not(:disabled) {
      filter: brightness(1.05);
    }

    /* Focus visible enhancement */
    mov-button:focus-visible {
      outline: 2px solid var(--mov-color-fill-loud, currentColor);
      outline-offset: 2px;
    }

    /* Ensure proper centering for all modes */
    mov-button.single-icon-mode {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Fix icon sizing consistency */
    mov-icon {
      flex-shrink: 0;
    }
  `,Fn([Y({type:String})],jl.prototype,"mode",2),Fn([Y({type:Boolean,reflect:!0})],jl.prototype,"active",2),Fn([Y({type:String})],jl.prototype,"label",2),Fn([Y({type:String})],jl.prototype,"activeLabel",2),Fn([Y({type:String})],jl.prototype,"icon",2),Fn([Y({type:String})],jl.prototype,"activeIcon",2),Fn([Y({type:String,reflect:!0})],jl.prototype,"appearance",2),Fn([Y({type:String,reflect:!0})],jl.prototype,"size",2),Fn([Y({type:Boolean})],jl.prototype,"disabled",2),Fn([Y({type:Boolean,reflect:!0})],jl.prototype,"loading",2),jl=Fn([ea("toggle-button")],jl);
/**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const Zl="important",Ql=" !"+Zl,ql=ji(class extends Zi{constructor(e){if(super(e),1!==e.type||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((n,t)=>{const o=e[t];return null==o?n:n+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[n]){const{style:t}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(n)),this.render(n);for(const e of this.ft)null==n[e]&&(this.ft.delete(e),e.includes("-")?t.removeProperty(e):t[e]=null);for(const e in n){const o=n[e];if(null!=o){this.ft.add(e);const n="string"==typeof o&&o.endsWith(Ql);e.includes("-")||n?t.setProperty(e,n?o.slice(0,-11):o,n?Zl:""):t[e]=o}}return Li}}),Yl=Object.fromEntries(Object.entries(Fl).map(([e,n])=>[e,aa(n)])),{IconArrowAutofitDown:Xl,IconArrowAutofitHeight:Kl,IconArrowAutofitLeft:Jl,IconArrowAutofitRight:es,IconArrowAutofitWidth:ns,IconArrowBigLeft:ts,IconArrowBigRight:os,IconArrowsMove:is,IconArrowsMoveVertical:rs,IconArrowsVertical:as,IconBook:ls,IconBookReturn:ss,IconBookUpload:cs,IconBookmark:ds,IconBookmarkOff:hs,IconBookmarks:ps,IconBoxAlignTop:us,IconCategory:gs,IconCheck:ms,IconChevronRight:vs,IconAlertCircle:fs,IconCircleCheck:bs,IconCircleX:ws,IconHelp:ks,IconInfoCircle:ys,IconComic1:Es,IconComic1Flat:xs,IconComic2:Is,IconComic2Flat:As,IconComic3:Ms,IconComic3Flat:Ss,IconDeviceFloppy:Cs,IconDotsVertical:_s,IconEReader1:Os,IconEReader1Flat:Ts,IconEReader2:Ls,IconEReader2Flat:$s,IconExternalLink:Ds,IconEye:Rs,IconEyeOff:Ns,IconFileDownload:zs,IconFilePercent:Ps,IconHandClick:Bs,IconKeyboard:Hs,IconLayoutBottombar:Fs,IconLayoutBottombarInactive:Gs,IconLayoutSidebar:Vs,IconLayoutSidebarInactive:Us,IconLayoutSidebarRight:Ws,IconLayoutSidebarRightInactive:js,IconListNumbers:Zs,IconLoader2:Qs,IconLocationCog:qs,IconMenu2:Ys,IconMenuDeep:Xs,IconMessage:Ks,IconMoon:Js,IconPage:ec,IconPageFlat:nc,IconPalette:tc,IconPencil:oc,IconPencilCog:ic,IconPhoto:rc,IconPhotoOff:ac,IconPin:lc,IconPlayerPause:sc,IconPlayerPlay:cc,IconRefresh:dc,IconSettings:hc,IconSettingsOff:pc,IconSpacingVertical:uc,IconSun:gc,IconTrash:mc,IconWorldCog:vc,IconX:fc,IconZoom:bc,IconZoomCancel:wc,IconZoomIn:kc,IconZoomInArea:yc,IconZoomOut:Ec,IconZoomOutArea:xc,IconZoomPan:Ic}=Yl;Gn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,Un=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?Vn(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(n,t,a):r(a))||a);return o&&a&&Gn(n,t,a),a};let Ac=class extends Kr{constructor(){super(...arguments),this.color="#000000",this.size=26,this.radius="50%",this.contrastColor="#FFFFFF",this.checked=!1}willUpdate(e){e.has("color")&&(this.contrastColor=V(this.color)),e.has("selected")&&(this.checked=this.color.toLowerCase()===this.selected?.toLowerCase())}handleClick(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.color},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.color},bubbles:!0,composed:!0}))}render(){const e={width:`${this.size}px`,height:`${this.size}px`},n={"--radius":"number"==typeof this.radius?`${this.radius}px`:this.radius,"--color":this.color,"--contrast-color":this.contrastColor};return Ti`
      <div style=${ql(e)}>
        <div
          class="swatch"
          style=${ql(n)}
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${ms} </span>
        </div>
      </div>
    `}};Ac.styles=Rr`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    .swatch {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: var(--radius);
      background-color: var(--color);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.15s ease;
      box-sizing: border-box;
      border: 1px solid var(--theme-border-color, rgba(0, 0, 0, 0.1));
      color: var(--contrast-color);
    }

    :host(:hover) .swatch {
      transform: scale(1.1);
    }

    ::slotted(*) {
      width: 60%;
      height: 60%;
    }

    .check-icon {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      color: var(--contrast-color);
      opacity: 0;
      transition: opacity 0.15s ease;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
    }

    .check-icon svg {
      width: 60%;
      height: 60%;
    }

    :host([checked]) .check-icon {
      opacity: 1;
    }
  `,Un([Y({type:String})],Ac.prototype,"color",2),Un([Y({type:String})],Ac.prototype,"selected",2),Un([Y({type:Number})],Ac.prototype,"size",2),Un([Y({type:String})],Ac.prototype,"radius",2),Un([Y({state:!0})],Ac.prototype,"contrastColor",2),Un([Y({type:Boolean,reflect:!0})],Ac.prototype,"checked",2),Ac=Un([ea("color-swatch")],Ac),Wn=Object.defineProperty,jn=Object.getOwnPropertyDescriptor,Zn=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?jn(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(n,t,a):r(a))||a);return o&&a&&Wn(n,t,a),a};let Mc=class extends Kr{constructor(){super(...arguments),this.baseColor="#228be6",this.mode="steps",this.orientation="horizontal",this.value="",this.gradient=[]}willUpdate(e){(e.has("baseColor")||e.has("mode"))&&(this.gradient=J(this.baseColor,this.mode)??[])}handleSwatchClick(e){this.value=e,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return Ti`
      ${this.gradient.map(e=>{const n=this.selected&&e.toLowerCase()===this.selected.toLowerCase(),t=V(e);return Ti`
          <div
            class="swatch"
            ?checked=${n}
            title=${e}
            @click=${()=>this.handleSwatchClick(e)}
          >
            <div
              class="swatch-inner"
              style="--color: ${e}; --text-color: ${t}"
            >
              <span class="checkmark">${ms}</span>
            </div>
          </div>
        `})}
    `}};Mc.styles=Rr`
    :host {
      display: flex;
      gap: var(--palette-gap, 4px);
      align-items: center;
      justify-content: center;
    }

    .swatch {
      width: var(--swatch-size, 22px);
      height: var(--swatch-size, 22px);
      border-radius: var(--swatch-radius, 4px);
      border: 1px solid var(--theme-border-color, #ccc);
      transition: transform 0.15s ease;
      cursor: pointer;
      background-clip: content-box;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
    .swatch-inner {
      width: 100%;
      height: 100%;
      border-radius: var(--swatch-radius, 4px);
      background-color: var(--color);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      transition: opacity 0.15s ease;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
      color: var(--text-color);
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
    }

    .checkmark svg {
      width: 60%;
      height: 60%;
    }
    .swatch[checked] .checkmark {
      opacity: 1;
    }
    .swatch:hover {
      transform: scale(1.1);
    }
  `,Zn([Y({type:String})],Mc.prototype,"baseColor",2),Zn([Y({type:String})],Mc.prototype,"mode",2),Zn([Y({type:String,reflect:!0})],Mc.prototype,"orientation",2),Zn([Y({type:String})],Mc.prototype,"selected",2),Zn([Y({type:String,reflect:!0})],Mc.prototype,"value",2),Zn([X()],Mc.prototype,"gradient",2),Mc=Zn([ea("color-palette")],Mc),Qn=Object.defineProperty,qn=Object.getOwnPropertyDescriptor,Yn=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?qn(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(n,t,a):r(a))||a);return o&&a&&Qn(n,t,a),a};let Sc=class extends Kr{constructor(){super(...arguments),this.value=""}handleColorClick(e){this.value=e.currentTarget.title,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const e=Object.keys(wr).filter(e=>!["dark","gray","zinc","neutral","stone"].includes(e)),n=[200,300,400,500,600,700,800,900,950];return e.map(e=>{const t=n.map(n=>{const t=wr[e][n],o=V(t),i=this.selected?.toLowerCase()===t.toLowerCase();return Ti`
          <span
            title="${t}"
            class="${Vl({ThemeRadio:!0,selected:i})}"
            style="background-color: ${t}; color: ${o}"
            @click=${this.handleColorClick}
          >
            ${ms}
          </span>
        `});return Ti` <div class="SwatchGroup">
        <span class="ColorName">${e}</span>
        <div class="Swatches">${t}</div>
      </div>`})}};Sc.styles=Rr`
    :host {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
    }
    .SwatchGroup {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      column-gap: 8px;
    }
    .ColorName {
      font-size: 12px;
      color: var(--theme-text-color);
      text-transform: capitalize;
      min-width: 64px;
    }
    .Swatches {
      display: grid;
      grid-template-columns: repeat(9, 16px);
      gap: 8px;
      align-items: center;
    }
    .ThemeRadio {
      color: var(--mov-color-on-loud);
      height: 20px;
      width: 20px;
      border-radius: 3px;
      margin: 0;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    }
    .ThemeRadio:hover,
    .ThemeRadio:focus-visible {
      outline: 2px solid var(--theme-border-color);
      outline-offset: 1px;
    }
    .ThemeRadio.selected {
      box-shadow:
        0 0 0 2px var(--theme-body-background),
        0 0 0 3px var(--theme-text-color);
    }
    .ThemeRadio svg {
      width: 10px;
      height: 10px;
    }
    .ThemeRadio.selected .icon-tabler-check {
      display: inline;
    }
    .ThemeRadio:not(.selected) .icon-tabler-check {
      display: none;
    }
  `,Yn([Y({type:String,reflect:!0})],Sc.prototype,"value",2),Yn([Y({type:String})],Sc.prototype,"selected",2),Sc=Yn([ea("color-panel")],Sc),Xn=Object.defineProperty,Kn=Object.getOwnPropertyDescriptor,Jn=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?Kn(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(n,t,a):r(a))||a);return o&&a&&Xn(n,t,a),a};let Cc=class extends Kr{constructor(){super(...arguments),this.value="#228be6",this.swatches=null,this.mode="popup",this.opened=!1,this.popupDirection="left",this.sourceSpace="srgb",this.hsv={h:0,s:0,v:0},this.saturationThumbPosition={x:0,y:0},this.hueThumbPosition=0,this.isDraggingSaturation=!1,this.isDraggingHue=!1}connectedCallback(){super.connectedCallback(),this.updateStateFromValue(this.value),window.addEventListener("mousemove",this.handleDrag.bind(this)),window.addEventListener("mouseup",this.handleDragEnd.bind(this)),window.addEventListener("touchmove",this.handleDrag.bind(this),{passive:!1}),window.addEventListener("touchend",this.handleDragEnd.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this.handleDrag.bind(this)),window.removeEventListener("mouseup",this.handleDragEnd.bind(this)),window.removeEventListener("touchmove",this.handleDrag.bind(this)),window.removeEventListener("touchend",this.handleDragEnd.bind(this)),window.removeEventListener("click",this.handleClickOutside.bind(this))}updated(e){e.has("mode")&&("popup"===this.mode?window.addEventListener("click",this.handleClickOutside.bind(this)):window.removeEventListener("click",this.handleClickOutside.bind(this)))}willUpdate(e){e.has("value")&&this.updateStateFromValue(this.value),e.has("mode")&&"inline"===this.mode&&(this.opened=!1)}handleClickOutside(e){this.opened&&!e.composedPath().includes(this)&&(this.opened=!1)}togglePopup(){if("popup"===this.mode){if(!this.opened){const e=this.getBoundingClientRect(),n=250;let t;const o=this.closest("mov-drawer");if(o?.shadowRoot){const e=o.shadowRoot.querySelector("dialog");t=e?e.getBoundingClientRect():{left:0,right:window.innerWidth}}else t={left:0,right:window.innerWidth};e.left+n>t.right&&e.right-n>t.left?this.popupDirection="right":this.popupDirection="left"}this.opened=!this.opened}}isSameColor(e,n){return!(!e||!n)&&Color.deltaE(e,n,{method:"2000"})<1}renderCheckIcon(e){return Ti`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${ql({stroke:V(e)})}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `}renderPickerBody(){const e={backgroundColor:`hsl(${this.hsv.h}, 100%, 50%)`},n={h:this.hsv.h,s:100*this.hsv.s,v:100*this.hsv.v},t={top:`${this.saturationThumbPosition.y}%`,left:`${this.saturationThumbPosition.x}%`,backgroundColor:new Color({space:"hsv",coords:[n.h,n.s,n.v]}).toString({format:"hex"})},o={left:`${this.hueThumbPosition}%`};return Ti`
      <div
        class="saturation-panel"
        style=${ql(e)}
        @mousedown=${this.handleSaturationDragStart.bind(this)}
        @touchstart=${this.handleSaturationDragStart.bind(this)}
      >
        <div class="saturation-overlay-1"></div>
        <div class="saturation-overlay-2"></div>
        <div
          class="saturation-thumb"
          style=${ql(t)}
        ></div>
      </div>

      <div class="sliders">
        <div
          class="hue-slider"
          @mousedown=${this.handleHueDragStart.bind(this)}
          @touchstart=${this.handleHueDragStart.bind(this)}
        >
          <div
            class="hue-thumb"
            style=${ql(o)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${(this.swatches||Object.entries(wr).filter(([e])=>!["dark","gray","zinc","neutral","stone"].includes(e)).map(([,e])=>e[600])).map(e=>Ti`
            <button
              class="swatch"
              title=${e}
              style=${ql({backgroundColor:e})}
              @click=${()=>this.selectSwatch(e)}
            >
              ${this.isSameColor(this.value,e)?this.renderCheckIcon(e):""}
            </button>
          `)}
      </div>
    `}render(){const e={"picker-container":!0,popup:"popup"===this.mode,right:"right"===this.popupDirection},n=this.renderPickerBody();return"popup"===this.mode?Ti`
        <div
          class="popup-trigger"
          @click=${this.togglePopup}
        >
          <div
            class="preview"
            style=${ql({backgroundColor:this.value})}
          ></div>
        </div>
        ${this.opened?Ti`<div class=${Vl(e)}>${n}</div>`:""}
      `:Ti`<div class=${Vl(e)}>${n}</div>`}parseColor(e){try{return new Color(e)}catch(n){return console.error(`[color-picker] Invalid color value: "${e}"`,n),null}}colorToHsv(e){const n=e.to("srgb").to("hsv");let[t,o,i]=n.coords;return Number.isNaN(t)&&(t=this.hsv.h||0,o=0),o=Math.max(0,Math.min(100,o))/100,i=Math.max(0,Math.min(100,i))/100,{h:t,s:o,v:i}}updateStateFromValue(e){const n=this.parseColor(e);if(!n)return;this.sourceSpace=n.space.id;const t=this.colorToHsv(n);t.h===this.hsv.h&&t.s===this.hsv.s&&t.v===this.hsv.v||(this.hsv=t,this.updateThumbPositions())}dispatchInput(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}))}dispatchChange(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}updateValueFromHsv(){const e={h:this.hsv.h,s:100*this.hsv.s,v:100*this.hsv.v},n=new Color({space:"hsv",coords:[e.h,e.s,e.v]});let t;try{const e=["srgb","hsl","hsv"];t=!this.sourceSpace||e.includes(this.sourceSpace)?n.to("srgb").toString({format:"hex"}):n.to(this.sourceSpace).toString({precision:5})}catch(e){console.error(`[color-picker] Could not convert color to space ${this.sourceSpace}`,e),t=n.to("srgb").toString({format:"hex"})}this.value!==t&&(this.value=t,this.dispatchInput())}updateThumbPositions(){this.saturationThumbPosition={x:100*this.hsv.s,y:100*(1-this.hsv.v)},this.hueThumbPosition=this.hsv.h/360*100}handleSaturationDragStart(e){e.preventDefault(),this.isDraggingSaturation=!0,this.saturationPanel=this.shadowRoot?.querySelector(".saturation-panel"),this.updateSaturation(e)}handleHueDragStart(e){e.preventDefault(),this.isDraggingHue=!0,this.hueSlider=this.shadowRoot?.querySelector(".hue-slider"),this.updateHue(e)}handleDrag(e){this.isDraggingSaturation&&this.updateSaturation(e),this.isDraggingHue&&this.updateHue(e)}handleDragEnd(){(this.isDraggingSaturation||this.isDraggingHue)&&this.dispatchChange(),this.isDraggingSaturation=!1,this.isDraggingHue=!1}getEventPosition(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}updateSaturation(e){if(!this.saturationPanel)return;const{clientX:n,clientY:t}=this.getEventPosition(e),o=this.saturationPanel.getBoundingClientRect(),i=Math.max(0,Math.min(n-o.left,o.width)),r=Math.max(0,Math.min(t-o.top,o.height));this.hsv.s=i/o.width,this.hsv.v=1-r/o.height,this.updateValueFromHsv(),this.updateThumbPositions()}updateHue(e){if(!this.hueSlider)return;const{clientX:n}=this.getEventPosition(e),t=this.hueSlider.getBoundingClientRect(),o=Math.max(0,Math.min(n-t.left,t.width));this.hsv.h=o/t.width*360,this.updateValueFromHsv(),this.updateThumbPositions()}selectSwatch(e){this.value=e,this.dispatchInput(),this.dispatchChange()}};Cc.styles=Rr`
    :host {
      display: inline-block;
      position: relative;
    }

    .picker-container {
      width: 250px;
      box-sizing: border-box;
    }

    .picker-container.popup {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      z-index: 10;
      border: 1px solid var(--theme-border-color);
      border-radius: 8px;
      background: var(--theme-background-color);
      padding: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .picker-container.popup.right {
      left: auto;
      right: 0;
    }

    .saturation-panel {
      position: relative;
      width: 100%;
      height: 180px;
      border-radius: 8px;
      cursor: crosshair;
      -webkit-tap-highlight-color: transparent;
    }

    .saturation-overlay-1,
    .saturation-overlay-2 {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
    }

    .saturation-overlay-1 {
      background: linear-gradient(to right, #fff, transparent);
    }

    .saturation-overlay-2 {
      background: linear-gradient(to top, #000, transparent);
    }

    .saturation-thumb {
      position: absolute;
      width: 16px;
      height: 16px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      transform: translate(-8px, -8px);
      pointer-events: none;
    }

    .sliders {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 12px;
    }

    .hue-slider {
      position: relative;
      width: 100%;
      height: 10px;
      border-radius: 5px;
      background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
      cursor: pointer;
    }

    .hue-thumb {
      position: absolute;
      top: 50%;
      width: 16px;
      height: 16px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      transform: translate(-8px, -50%);
      pointer-events: none;
    }

    .swatches {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      gap: 8px;
      margin-top: 12px;
    }

    .swatch {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 4px;
      border: 1px solid #dee2e6;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      transition: transform 0.1s;
    }

    .swatch:hover {
      transform: scale(1.1);
    }

    .popup-trigger {
      width: 96px;
      height: 32px;
      border-radius: 4px;
      border: 1px solid var(--theme-background-color);
      padding: 4px;
      box-sizing: border-box;
      cursor: pointer;
      background-color: var(--theme-hightlight-color);
    }

    .preview {
      width: 100%;
      height: 100%;
      border-radius: 2px;
    }
  `,Jn([Y({type:String})],Cc.prototype,"value",2),Jn([Y({type:Array})],Cc.prototype,"swatches",2),Jn([Y({type:String})],Cc.prototype,"mode",2),Jn([X()],Cc.prototype,"opened",2),Jn([X()],Cc.prototype,"popupDirection",2),Jn([X()],Cc.prototype,"sourceSpace",2),Jn([X()],Cc.prototype,"hsv",2),Jn([X()],Cc.prototype,"saturationThumbPosition",2),Jn([X()],Cc.prototype,"hueThumbPosition",2),Cc=Jn([ea("color-picker")],Cc);
/**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const _c=(e,n,t)=>{for(const t of n)if(t[0]===e)return(0,t[1])();return t?.()};et=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,tt=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?nt(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(n,t,a):r(a))||a);return o&&a&&et(n,t,a),a};let Oc=class extends Kr{constructor(){super(...arguments),this.value="",this.labelPosition="side",this.size="medium",this._options=[],this.resizeObserver=new ResizeObserver(()=>this.updateThumbPosition())}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}handleClick(e,n){this.value=n,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}handleSlotChange(){this._options=this._slotEl.assignedNodes({flatten:!0}).filter(e=>"SEGMENTED-CONTROL-OPTION"===e.nodeName).map(e=>({value:e.getAttribute("value")??"",label:e.getAttribute("label")??"",icon:e.getAttribute("icon")??void 0}))}firstUpdated(){this.handleSlotChange(),this.updateComplete.then(()=>this.updateThumbPosition())}updated(e){super.updated(e),(e.has("value")||e.has("_options")||e.has("labelPosition")||e.has("size"))&&Promise.resolve().then(()=>this.updateThumbPosition())}updateThumbPosition(){if(!this.thumb)return;const e=this.shadowRoot?.querySelector(".button.selected");if(e){const{offsetWidth:n,offsetHeight:t}=e,o=e.getBoundingClientRect(),i=this.shadowRoot?.querySelector(".segmented-control")?.getBoundingClientRect(),r=o.left-(i?.left??0),a=o.top-(i?.top??0);this.thumb.style.transform=`translate(${r}px, ${a}px)`,this.thumb.style.width=`${n}px`,this.thumb.style.height=`${t}px`}else this.thumb.style.width="0px",this.thumb.style.height="0px"}render(){return Ti`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(e=>Ti`
            <div
              class="option"
              title="${"tooltip"===this.labelPosition?e.label:$i}"
            >
              <button
                class="${Vl({button:!0,selected:this.value===e.value,bottom:"bottom"===this.labelPosition,small:"small"===this.size,medium:"medium"===this.size,large:"large"===this.size})}"
                @click=${n=>this.handleClick(n,e.value)}
                role="radio"
                aria-checked="${this.value===e.value}"
              >
                ${e.icon?Ti`<mov-icon
                      name="${e.icon}"
                      .size=${_c(this.size,[["small",()=>"16px"],["medium",()=>"24px"],["large",()=>"36px"]],()=>this.size)}
                    ></mov-icon>`:$i}
                ${"tooltip"!==this.labelPosition?Ti`<span>${e.label}</span>`:$i}
              </button>
            </div>
          `)}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Oc.styles=Rr`
    :host {
      width: 100%;
      display: block;
    }
    .segmented-control {
      position: relative;
      display: flex;
      gap: 0.25rem;
      border-radius: 0.5rem;
      background-color: var(--theme-border-color);
      padding: 0.25rem;
      flex-wrap: wrap;
    }
    .thumb {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 0.5rem;
      background-color: var(--mov-color-fill-loud);
      transition:
        transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1;
    }
    .option {
      flex: 1;
      text-align: center;
      z-index: 2; /* Ensure button is above thumb */
      position: relative; /* Needed to correctly position the button */
    }

    .button {
      /* The button now acts as the interactive label */
      width: 100%;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      border: none;
      /* Default colors when not selected */
      color: var(--theme-text-color);
      background-color: transparent;
      transition: color 0.15s ease-in-out;
      flex-direction: row;
      gap: 0.25rem;
      padding: 0.5rem 0.75rem; /* Default padding (medium) */
      font-size: 1rem; /* Default font-size (medium) */
      box-sizing: border-box; /* Include padding/border in element's total width/height */
    }

    /* Selected State Styles - Driven by the 'selected' class */
    .button.selected {
      color: var(--mov-color-on-loud);
      font-weight: 600;
    }

    /* Size Variations */
    .button.small {
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
    }
    .button.large {
      padding: 0.75rem 1rem;
      font-size: 1.125rem;
    }

    /* Label Position Variations */
    .button.bottom {
      flex-direction: column;
    }
    .button.bottom.small {
      padding: 0.25rem;
    }
    .button.bottom.medium {
      padding: 0.5rem;
    }
    .button.bottom.large {
      padding: 0.75rem;
    }
  `,tt([Y({type:String,reflect:!0})],Oc.prototype,"value",2),tt([Y({type:String})],Oc.prototype,"labelPosition",2),tt([Y({type:String})],Oc.prototype,"size",2),tt([X()],Oc.prototype,"_options",2),tt([K(".thumb")],Oc.prototype,"thumb",2),tt([K("slot")],Oc.prototype,"_slotEl",2),Oc=tt([ea("segmented-control")],Oc);let Tc=class extends Kr{constructor(){super(...arguments),this.value="",this.label=""}createRenderRoot(){return this}};tt([Y({type:String,reflect:!0})],Tc.prototype,"value",2),tt([Y({type:String,reflect:!0})],Tc.prototype,"label",2),tt([Y({type:String,reflect:!0})],Tc.prototype,"icon",2),Tc=tt([ea("segmented-control-option")],Tc),ot=Object.defineProperty,it=Object.getOwnPropertyDescriptor,rt=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?it(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(n,t,a):r(a))||a);return o&&a&&ot(n,t,a),a};let Lc=class extends Kr{constructor(){super(...arguments),this.name="",this.checked=!1,this.disabled=!1,this.design="graphical",this.textOn="ON",this.textOff="OFF"}toggleChecked(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked}})))}render(){let e;return e="graphical"===this.design?Ti`${this.checked?ms:fc}`:Ti`<span class="text">${this.checked?this.textOn:this.textOff}</span>`,Ti`
      <input
        type="checkbox"
        id="${this.name}"
        name="${this.name}"
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        @click=${this.toggleChecked}
      />
      <label
        for="${this.name}"
        class="${Vl({switch:!0,[this.design]:!0})}"
      >
        <div class="knob">${e}</div>
      </label>
    `}};Lc.styles=Rr`
    :host {
      --switch-width: 3rem;
      --switch-height: 1.5rem;
      --knob-size: 1.25rem;
      display: inline-block;
    }

    input {
      display: none;
    }

    .switch {
      display: inline-block;
      position: relative;
      width: var(--switch-width);
      height: var(--switch-height);
      border-radius: var(--switch-height);
      background-color: #d7062a;
      border: 1px solid #d7062a;
      transition:
        background-color 0.3s,
        border-color 0.3s;
      cursor: pointer;
    }

    input:checked + .switch {
      background-color: #50ac5d;
      border-color: #50ac5d;
    }

    .switch.textual {
      background-color: var(--mov-color-on-loud);
      border-color: var(--mov-color-on-loud);
    }

    input:checked + .switch.textual {
      background-color: var(--mov-color-fill-loud);
      border-color: var(--mov-color-fill-loud);
    }

    input:disabled + .switch {
      background-color: #eee;
      border-color: #ccc;
      cursor: not-allowed;
    }

    .knob {
      position: absolute;
      top: 50%;
      left: 2px;
      transform: translateY(-50%);
      width: var(--knob-size);
      height: var(--knob-size);
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      transition: left 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: bold;
      font-family: Arial;
      color: #333;
    }

    input:checked + .switch .knob {
      left: calc(100% - var(--knob-size) - 2px);
    }

    .switch:focus {
      outline: 2px solid #0a6ed1;
      outline-offset: 2px;
    }

    .icon {
      width: 1rem;
      height: 1rem;
      fill: none;
    }

    .text {
      font-size: 0.75rem;
      font-weight: bold;
      color: #333;
    }
  `,rt([Y({type:String})],Lc.prototype,"name",2),rt([Y({type:Boolean,reflect:!0})],Lc.prototype,"checked",2),rt([Y({type:Boolean,reflect:!0})],Lc.prototype,"disabled",2),rt([Y({type:String,reflect:!0})],Lc.prototype,"design",2),rt([Y({type:String})],Lc.prototype,"textOn",2),rt([Y({type:String})],Lc.prototype,"textOff",2),Lc=rt([ea("toggle-switch")],Lc),at="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},lt={},st={},ht=function(){function e(e){return e.replace(t.ctrlCharactersRegex,"").replace(t.htmlEntitiesRegex,function(e,n){return String.fromCharCode(n)})}function n(e){try{return decodeURIComponent(e)}catch(n){return e}}if(dt)return lt;dt=1,Object.defineProperty(lt,"__esModule",{value:!0}),lt.sanitizeUrl=void 0;var t=(ct||(ct=1,Object.defineProperty(st,"__esModule",{value:!0}),st.BLANK_URL=st.relativeFirstCharacters=st.whitespaceEscapeCharsRegex=st.urlSchemeRegex=st.ctrlCharactersRegex=st.htmlCtrlEntityRegex=st.htmlEntitiesRegex=st.invalidProtocolRegex=void 0,st.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,st.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,st.htmlCtrlEntityRegex=/&(newline|tab);/gi,st.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,st.urlSchemeRegex=/^.+(:|&colon;)/gim,st.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,st.relativeFirstCharacters=[".","/"],st.BLANK_URL="about:blank"),st);return lt.sanitizeUrl=function(o){var i,r,a,l,s,c,d,h;if(!o)return t.BLANK_URL;r=n(o.trim());do{i=(r=n(r=e(r).replace(t.htmlCtrlEntityRegex,"").replace(t.ctrlCharactersRegex,"").replace(t.whitespaceEscapeCharsRegex,"").trim())).match(t.ctrlCharactersRegex)||r.match(t.htmlEntitiesRegex)||r.match(t.htmlCtrlEntityRegex)||r.match(t.whitespaceEscapeCharsRegex)}while(i&&i.length>0);return(a=r)?function(e){return t.relativeFirstCharacters.indexOf(e[0])>-1}(a)?a:(s=(l=a.trimStart()).match(t.urlSchemeRegex))?(c=s[0].toLowerCase().trim(),t.invalidProtocolRegex.test(c)?t.BLANK_URL:(d=l.replace(/\\/g,"/"),"mailto:"===c||c.includes("://")?d:"http:"===c||"https:"===c?function(e){return URL.canParse(e)}(d)?((h=new URL(d)).protocol=h.protocol.toLowerCase(),h.hostname=h.hostname.toLowerCase(),h.toString()):t.BLANK_URL:d)):a:t.BLANK_URL},lt}(),pt={exports:{}},ut||(ut=1,po=pt,function(){function e(e,n,t){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){r(o.response,n,t)},o.onerror=function(){console.error("could not download file")},o.send()}function n(e){var n=new XMLHttpRequest;n.open("HEAD",e,!1);try{n.send()}catch(e){}return 200<=n.status&&299>=n.status}function t(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof at&&at.global===at?at:void 0,i=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),r=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(i,r,a){var l=o.URL||o.webkitURL,s=document.createElement("a");r=r||i.name||"download",s.download=r,s.rel="noopener","string"==typeof i?(s.href=i,s.origin===location.origin?t(s):n(s.href)?e(i,r,a):t(s,s.target="_blank")):(s.href=l.createObjectURL(i),setTimeout(function(){l.revokeObjectURL(s.href)},4e4),setTimeout(function(){t(s)},0))}:"msSaveOrOpenBlob"in navigator?function(o,i,r){if(i=i||o.name||"download","string"!=typeof o)navigator.msSaveOrOpenBlob(function(e,n){return void 0===n?n={autoBom:!1}:"object"!=typeof n&&(console.warn("Deprecated: Expected third argument to be a object"),n={autoBom:!n}),n.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(o,r),i);else if(n(o))e(o,i,r);else{var a=document.createElement("a");a.href=o,a.target="_blank",setTimeout(function(){t(a)})}}:function(n,t,r,a){var l,s,c,d,h,p;if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof n)return e(n,t,r);l="application/octet-stream"===n.type,s=/constructor/i.test(o.HTMLElement)||o.safari,((c=/CriOS\/[\d]+/.test(navigator.userAgent))||l&&s||i)&&"undefined"!=typeof FileReader?((d=new FileReader).onloadend=function(){var e=d.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},d.readAsDataURL(n)):(h=o.URL||o.webkitURL,p=h.createObjectURL(n),a?a.location=p:location.href=p,a=null,setTimeout(function(){h.revokeObjectURL(p)},4e4))});o.saveAs=r.saveAs=r,po.exports=r}()),gt=pt.exports,ur.listen((e,n,t)=>{var o;"scrollToPage"===t&&void 0!==e.scrollToPage&&(e.scrollToPage<=0?window.scrollTo(0,0):(o=R("images")?.[e.scrollToPage]?.ref?.value,T("viewMode").startsWith("Fluid")?R("chapter").value?.scroll(o?.offsetLeft??0,o?.offsetTop??0):window?.scroll(o?.offsetLeft??0,o?.offsetTop??0)),setTimeout(()=>N("scrollToPage",void 0),10))}),mt=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,ft=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?vt(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(n,t,a):r(a))||a);return o&&a&&mt(n,t,a),a};let $c=class extends Kr{constructor(){super(...arguments),this.mode=!1,this.currentPage=1,this.totalPages=1,this.startPage=1}render(){return this.mode?Ti`
      <button
        class="pagination-button"
        @click=${ie}
        value="${this.prev}"
        ?disabled=${n(this.prev)||"#"===this.prev}
      >
        <svg viewBox="0 0 24 24">
          <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" />
        </svg>
        <div class="tooltip">Previous Chapter</div>
      </button>

      <button
        class="pagination-button"
        @click=${this.goToPreviousPage}
        ?disabled=${this.currentPage<=this.startPage}
      >
        <svg viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
        <div class="tooltip">Previous Page</div>
      </button>

      <div class="slider-container">
        <input
          type="range"
          class="pagination-slider"
          min="${this.startPage}"
          max="${this.totalPages}"
          .value="${this.currentPage.toString()}"
          @input="${ae}"
        />
        <div class="slider-tooltip">${this.currentPage} / ${this.totalPages}</div>
      </div>

      <button
        class="pagination-button"
        @click=${this.goToNextPage}
        ?disabled="${this.currentPage===this.totalPages-(this.startPage-1)}"
      >
        <svg viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
        <div class="tooltip">Next Page</div>
      </button>

      <button
        class="pagination-button"
        @click=${ie}
        value="${this.next}"
        ?disabled=${n(this.next)||"#"===this.next}
      >
        <svg viewBox="0 0 24 24">
          <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" />
        </svg>
        <div class="tooltip">Next Chapter</div>
      </button>
    `:$i}goToPreviousPage(){this.goToPage(this.currentPage-1)}goToNextPage(){this.goToPage(this.currentPage+1)}goToPage(e){N("scrollToPage",e)}};$c.styles=Rr`
    :host {
      display: flex;
      position: fixed;
      bottom: 30px;
      left: 0;
      right: 0;
      background-color: transparent;
      justify-content: center;
      align-items: center;
      gap: 3px;
      width: 100%;
      font-family:
        system-ui,
        -apple-system,
        sans-serif;
      max-width: 100%;
    }

    .pagination-button {
      background: var(--mov-color-fill-loud);
      border: 1px solid var(--mov-color-fill-loud);
      color: var(--mov-color-on-loud);
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 36px;
      height: 36px;
    }

    .pagination-button:hover:not(:disabled) {
      opacity: 0.8;
      transform: translateY(-1px);
    }

    .pagination-button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .pagination-button svg {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }

    .slider-container {
      position: relative;
      max-width: 1000px;
      width: inherit;
      margin: 0 5px;
    }

    .pagination-slider {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 4px;
      background: var(--mov-color-fill-loud);
      opacity: 0.5;
      border-radius: 2px;
      outline: none;
      cursor: pointer;
    }

    .pagination-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      border: 1px solid var(--mov-color-fill-loud);
    }

    .pagination-slider::-moz-range-thumb {
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      border: 1px solid var(--mov-color-fill-loud);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .slider-tooltip {
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.9);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
    }

    .slider-container:hover .slider-tooltip {
      opacity: 1;
    }

    .tooltip {
      position: absolute;
      bottom: 45px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--theme-body-background);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
      z-index: 1001;
    }

    .pagination-button:hover .tooltip {
      opacity: 1;
    }
  `,ft([Y({type:Boolean})],$c.prototype,"mode",2),ft([Y({type:Number})],$c.prototype,"currentPage",2),ft([Y({type:Number})],$c.prototype,"totalPages",2),ft([Y({type:Number})],$c.prototype,"startPage",2),ft([Y({type:String})],$c.prototype,"next",2),ft([Y({type:String})],$c.prototype,"prev",2),$c=ft([ea("manga-pagination")],$c),bt=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,kt=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?wt(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(n,t,a):r(a))||a);return o&&a&&bt(n,t,a),a};let Dc=class extends Kr{constructor(){super(...arguments),this.open=!1,this.placement="end"}close(){this.open=!1}handleCancel(e){e.preventDefault(),this.close()}handleClick(e){e.target===this.dialog&&this.close()}updated(e){e.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0}))):!0===e.get("open")&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close()},300)))}render(){return Ti`
      <div
        class="backdrop"
        @click=${this.close}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        <div
          class="header-bar"
          part="header-bar"
        >
          <div class="action-item">
            <slot name="header-actions"></slot>
          </div>
          <div class="header-content">
            <slot name="label"></slot>
          </div>
          <div
            class="close-button-container"
            part="close-button-container"
          >
            <button
              class="close-button"
              part="close-button"
              @click=${this.close}
              aria-label="Close"
            >
              ${fc}
            </button>
          </div>
        </div>
        <slot class="content-slot"></slot>
      </dialog>
    `}};Dc.styles=Rr`
    :host {
      --panel-overlay-transition: opacity linear 0.25s;
      --panel-overlay-opacity: 0.5;
      --panel-z-index: 1000;
      --panel-transition: transform 0.25s ease-out;
    }

    .backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background-color: #000;
      opacity: 0;
      transition: var(--panel-overlay-transition);
      z-index: var(--panel-z-index);
    }

    :host([open]) .backdrop {
      display: block;
      opacity: var(--panel-overlay-opacity);
    }

    dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      z-index: calc(var(--panel-z-index) + 1);
      position: fixed;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      visibility: hidden;
      max-width: 100vw;
      max-height: 100vh;
      width: 350px;
      top: 0;
      bottom: 0;
      height: 100%;
      transition: var(--panel-transition);
    }

    :host([open]) dialog,
    .closing {
      visibility: visible;
    }

    /* Header Styles */
    .header-bar {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--theme-border-color, #e0e0e0);
      flex-shrink: 0;
    }
    .action-item {
      order: 1;
    }
    .header-content {
      order: 2;
      flex-grow: 1;
      text-align: center;
      font-weight: bold;
    }
    .close-button-container {
      order: 3;
      display: flex;
      justify-content: flex-end;
    }
    .action-item,
    .close-button-container {
      min-width: 40px;
    }
    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      line-height: 1;
      padding: 0;
      color: inherit;
    }
    .content-slot {
      display: block;
      padding: 1rem;
      overflow-y: auto;
      flex-grow: 1;
    }

    :host([placement='start']) dialog {
      left: 0;
      transform: translateX(-100%);
    }
    :host([placement='end']) dialog {
      right: 0;
      transform: translateX(100%);
    }
    :host([open]) dialog {
      transform: none;
    }
    :host([placement='end']) .action-item {
      order: 3;
    }
    :host([placement='end']) .header-content {
      order: 2;
    }
    :host([placement='end']) .close-button-container {
      order: 1;
      justify-content: flex-start;
    }
  `,kt([Y({type:Boolean,reflect:!0})],Dc.prototype,"open",2),kt([Y({type:String,reflect:!0})],Dc.prototype,"placement",2),kt([K("dialog")],Dc.prototype,"dialog",2),Dc=kt([ea("mov-drawer")],Dc),yt=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,xt=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?Et(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(n,t,a):r(a))||a);return o&&a&&yt(n,t,a),a};let Rc=class extends Kr{constructor(){super(...arguments),this.open=!1,this.mode="dialog",this.fullscreen=!1}static getIconName(e){switch(e){case"info":return"info-circle";case"warning":return"alert-circle";case"success":return"circle-check";case"error":return"circle-x";case"question":return"help";default:return""}}close(){this.open=!1}handleCancel(e){e.preventDefault(),this.close()}handleClick(e){"inline"!==this.mode&&e.target===this.dialog&&this.close()}updated(e){"inline"!==this.mode&&e.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0}))):!0===e.get("open")&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close()},300)))}render(){return Ti`
      <div
        class="backdrop"
        @click=${this.close}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        <div
          class="header-bar"
          part="header-bar"
        >
          <div class="action-item">
            <slot name="header-actions"></slot>
          </div>
          <div class="header-content">
            <slot name="label"></slot>
          </div>
          <div
            class="close-button-container"
            part="close-button-container"
          >
            <button
              class="close-button"
              part="close-button"
              @click=${this.close}
              aria-label="Close"
            >
              ${fc}
            </button>
          </div>
        </div>
        <div class="content-slot">
          ${this.icon?Ti`
                <div class="icon-container">
                  <mov-icon
                    .name=${Rc.getIconName(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              `:""}
          <slot></slot>
        </div>
        <slot name="footer"></slot>
      </dialog>
    `}};Rc.styles=Rr`
    :host {
      --panel-overlay-transition: opacity linear 0.25s;
      --panel-overlay-opacity: 0.5;
      --panel-z-index: 1000;
    }

    .backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background-color: #000;
      opacity: 0;
      transition: var(--panel-overlay-transition);
      z-index: var(--panel-z-index);
    }

    :host([open]) .backdrop {
      display: block;
      opacity: var(--panel-overlay-opacity);
    }

    dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      z-index: calc(var(--panel-z-index) + 1);
      position: fixed;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      visibility: hidden;
      max-width: 100vw;
      max-height: 100vh;
    }

    :host([open]:not([mode='inline'])) dialog,
    .closing {
      visibility: visible;
    }

    /* Header Styles */
    .header-bar {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--theme-border-color, #e0e0e0);
      flex-shrink: 0;
    }
    .action-item {
      order: 1;
    }
    .header-content {
      order: 2;
      flex-grow: 1;
      text-align: center;
      font-weight: bold;
    }
    .close-button-container {
      order: 3;
      display: flex;
      justify-content: flex-end;
    }
    .action-item,
    .close-button-container {
      min-width: 40px;
    }
    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      line-height: 1;
      padding: 0;
      color: inherit;
    }
    .content-slot {
      display: block;
      padding: 1rem;
      overflow-y: auto;
      flex-grow: 1;
    }

    .icon-container {
      display: flex;
      justify-content: center;
      padding-block-end: 1rem;
      text-align: center;
    }
    :host([icon='success']) .icon-container mov-icon {
      color: var(--theme-color-success, #28a745);
    }
    :host([icon='error']) .icon-container mov-icon {
      color: var(--theme-color-danger, #dc3545);
    }
    :host([icon='warning']) .icon-container mov-icon {
      color: var(--theme-color-warning, #ffc107);
    }
    :host([icon='info']) .icon-container mov-icon {
      color: var(--theme-color-info, #17a2b8);
    }
    :host([icon='question']) .icon-container mov-icon {
      color: var(--theme-color-secondary, #6c757d);
    }

    /* --- MODE: INLINE --- */
    :host([mode='inline']) {
      display: block;
      width: 500px;
      max-width: 100%;
    }
    :host([mode='inline']) dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      box-shadow: none;
      display: flex;
      flex-direction: column;
      visibility: visible;
      position: relative;
      width: 500px;
      max-width: 100%;
      border: 1px solid var(--theme-border-color, #e0e0e0);
      border-radius: 12px;
    }
    :host([mode='inline']) .backdrop {
      display: none;
    }
    :host([mode='inline']) .close-button {
      display: none; /* No close button in inline mode */
    }

    /* --- MODE: DIALOG --- */
    :host([mode='dialog']) {
      --panel-transition: transform 0.15s ease-out, opacity 0.15s ease-out;
    }
    :host([mode='dialog']) dialog {
      opacity: 0;
      transition: var(--panel-transition);
    }
    :host([mode='dialog'][open]) dialog {
      opacity: 1;
    }
    :host([mode='dialog']:not([fullscreen])) dialog {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.9);
      border-radius: 12px;
      width: var(--dialog-width, 700px);
    }
    :host([mode='dialog']:not([fullscreen])[open]) dialog {
      transform: translate(-50%, -50%) scale(1);
    }
    :host([fullscreen]) {
      --panel-overlay-transition: none;
    }
    :host([fullscreen]) dialog {
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      transform: translateY(2rem);
      border-radius: 0;
    }
    :host([fullscreen][open]) dialog {
      transform: translateY(0);
    }
  `,xt([Y({type:Boolean,reflect:!0})],Rc.prototype,"open",2),xt([Y({type:String,reflect:!0})],Rc.prototype,"mode",2),xt([Y({type:Boolean,reflect:!0})],Rc.prototype,"fullscreen",2),xt([Y({type:String,reflect:!0})],Rc.prototype,"icon",2),xt([K("dialog")],Rc.prototype,"dialog",2),Rc=xt([ea("mov-dialog")],Rc),It=Object.defineProperty,At=Object.getOwnPropertyDescriptor,Mt=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?At(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(n,t,a):r(a))||a);return o&&a&&It(n,t,a),a};let Nc=class extends Kr{constructor(){super(),this.open=!1,this.checkable=!1,this.boundClickHandler=this.handleClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.boundClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.boundClickHandler)}handleClickOutside(e){this.open&&!e.composedPath().includes(this)&&(this.open=!1)}toggle(){this.open=!this.open}render(){return Ti`
      <div
        @click=${this.toggle}
        class="trigger-wrapper"
      >
        <slot name="trigger"></slot>
      </div>
      <div class="dropdown-content">
        <slot></slot>
      </div>
    `}};Nc.styles=Rr`
    :host {
      position: relative;
      display: inline-block;
    }
    :host([checkable]) {
      --mov-dropdown-item-checkmark-display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: var(--theme-background-color, #f9f9f9);
      min-width: 160px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 1;
      list-style: none;
      padding: 0;
      margin: 0;
      border: 1px solid var(--theme-border-color, #ccc);
      border-radius: 5px;
    }
    :host([open]) .dropdown-content {
      display: block;
    }
  `,Mt([Y({type:Boolean,reflect:!0})],Nc.prototype,"open",2),Mt([Y({type:Boolean,reflect:!0})],Nc.prototype,"checkable",2),Nc=Mt([ea("mov-dropdown")],Nc);let zc=class extends Kr{constructor(){super(...arguments),this.selected=!1}render(){return Ti`
      <div class="item">
        <div class="item-content">
          <mov-icon
            class="check-icon"
            name="IconCheck"
          ></mov-icon>
          <slot name="icon"></slot>
          <slot></slot>
        </div>
        <slot name="details"></slot>
      </div>
    `}};zc.styles=Rr`
    :host {
      display: block;
    }
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      cursor: pointer;
      color: var(--theme-body-text-color);
      background-color: var(--theme-background-color);
      gap: 10px;
    }
    .item:hover {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    :host([selected]) .item {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    .item-content {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .check-icon {
      display: var(--mov-dropdown-item-checkmark-display, none);
      visibility: hidden;
      width: 1.2em;
      height: 1.2em;
    }
    :host([selected]) .check-icon {
      visibility: visible;
    }
    ::slotted([slot='details']) {
      font-size: 0.9em;
      opacity: 0.7;
    }
  `,Mt([Y({type:Boolean,reflect:!0})],zc.prototype,"selected",2),zc=Mt([ea("mov-dropdown-item")],zc);const Pc='/**\r\n * KEYS.css\r\n *\r\n * A simple stylesheet for rendering beautiful keyboard-style elements.\r\n *\r\n * Author:  Michael Hüneburg\r\n * Website: http://michaelhue.com/keyscss\r\n * License: MIT License (see LICENSE.txt)\r\n */\r\n\r\nkbd,\r\n.key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #505050;\r\n  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r\n  color: #fafafa;\r\n  text-shadow: -1px -1px 0 #464646;\r\n  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n  font-size: .85em;\r\n  line-height: 1;\r\n  cursor: default;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\nkbd[title],\r\n.key[title] {\r\n  cursor: help;\r\n}\r\nkbd.dark,\r\n.dark-keys kbd,\r\n.key.dark,\r\n.dark-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #505050;\r\n  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r\n  color: #fafafa;\r\n  text-shadow: -1px -1px 0 #464646;\r\n  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n}\r\nkbd.light,\r\n.light-keys kbd,\r\n.key.light,\r\n.light-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #fafafa;\r\n  background-color: gradient(linear, left top, left bottom, from(#d2d2d2), to(#ffffff));\r\n  color: #323232;\r\n  text-shadow: 0 0 2px #ffffff;\r\n  -webkit-box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r\n          box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r\n}\r\nkbd.so,\r\n.so-keys kbd,\r\n.key.so,\r\n.so-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  margin: 0 .1em;\r\n  padding: .1em .6em;\r\n  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;\r\n  line-height: 1.4;\r\n  color: #242729;\r\n  text-shadow: 0 1px 0 #FFF;\r\n  background-color: #e1e3e5;\r\n  border: 1px solid #adb3b9;\r\n  border-radius: 0.27272727em;\r\n  -webkit-box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r\n          box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r\n}\r\nkbd.github,\r\n.github-keys kbd,\r\n.key.github,\r\n.github-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  padding: 0.27272727em 0.45454545em;\r\n  font-size: 68.75%;\r\n  line-height: 0.90909091;\r\n  color: #444d56;\r\n  vertical-align: middle;\r\n  background-color: #fafbfc;\r\n  border: solid 1px #c6cbd1;\r\n  border-bottom-color: #959da5;\r\n  border-radius: 0.27272727em;\r\n  -webkit-box-shadow: inset 0 -1px 0 #959da5;\r\n          box-shadow: inset 0 -1px 0 #959da5;\r\n  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  text-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHNGQUFzRjtFQUN0RixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLDhIQUFzSDtVQUF0SCxzSEFBc0g7RUFDdEgsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQWtCO0tBQWxCLHVCQUFrQjtNQUFsQixzQkFBa0I7VUFBbEIsa0JBQWtCO0NBQ25CO0FBQ0Q7O0VBRUUsYUFBYTtDQUNkO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyw4SEFBc0g7VUFBdEgsc0hBQXNIO0NBQ3ZIO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLDZCQUE2QjtFQUM3Qix3SkFBZ0o7VUFBaEosZ0pBQWdKO0NBQ2pKO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNERBQTREO0VBQzVELGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHdFQUFnRTtVQUFoRSxnRUFBZ0U7Q0FDakU7QUFDRDs7OztFQUlFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxzRkFBc0Y7RUFDdEYsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoidG1wMi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJrYmQsXG4ua2V5IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1pbi13aWR0aDogMWVtO1xuICBwYWRkaW5nOiAuM2VtIC40ZW0gLjJlbSAuM2VtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBHcmFuZGVcIiwgTHVjaWRhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IC4zZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzNjM2MzYyksIHRvKCM1MDUwNTApKTtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjNDY0NjQ2O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICM5Njk2OTYsIGluc2V0IDAgLTAuMDVlbSAwLjRlbSAjNTA1MDUwLCAwIDAuMWVtIDAgIzFlMWUxZSwgMCAwLjFlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxua2JkW3RpdGxlXSxcbi5rZXlbdGl0bGVdIHtcbiAgY3Vyc29yOiBoZWxwO1xufVxua2JkLmRhcmssXG4uZGFyay1rZXlzIGtiZCxcbi5rZXkuZGFyayxcbi5kYXJrLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMzYzNjM2MpLCB0bygjNTA1MDUwKSk7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzQ2NDY0NjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjOTY5Njk2LCBpbnNldCAwIC0wLjA1ZW0gMC40ZW0gIzUwNTA1MCwgMCAwLjFlbSAwICMxZTFlMWUsIDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxua2JkLmxpZ2h0LFxuLmxpZ2h0LWtleXMga2JkLFxuLmtleS5saWdodCxcbi5saWdodC1rZXlzIC5rZXkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLXdpZHRoOiAxZW07XG4gIHBhZGRpbmc6IC4zZW0gLjRlbSAuMmVtIC4zZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiLCBMdWNpZGEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogLjNlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZDJkMmQyKSwgdG8oI2ZmZmZmZikpO1xuICBjb2xvcjogIzMyMzIzMjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjZmZmZmZmLCBpbnNldCAwIDAgMC40ZW0gI2M4YzhjOCwgMCAwLjFlbSAwICM4MjgyODIsIDAgMC4xMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjQpLCAwIDAuMWVtIDAuMTFlbSByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5rYmQuc28sXG4uc28ta2V5cyBrYmQsXG4ua2V5LnNvLFxuLnNvLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMCAuMWVtO1xuICBwYWRkaW5nOiAuMWVtIC42ZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMjQyNzI5O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlM2U1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWRiM2I5O1xuICBib3JkZXItcmFkaXVzOiAwLjI3MjcyNzI3ZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxMiwgMTMsIDE0LCAwLjIpLCAwIDAgMCAycHggI0ZGRiBpbnNldDtcbn1cbmtiZC5naXRodWIsXG4uZ2l0aHViLWtleXMga2JkLFxuLmtleS5naXRodWIsXG4uZ2l0aHViLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuMjcyNzI3MjdlbSAwLjQ1NDU0NTQ1ZW07XG4gIGZvbnQtc2l6ZTogNjguNzUlO1xuICBsaW5lLWhlaWdodDogMC45MDkwOTA5MTtcbiAgY29sb3I6ICM0NDRkNTY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjNmNiZDE7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5NTlkYTU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjcyNzI3MjdlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgIzk1OWRhNTtcbiAgZm9udC1mYW1pbHk6IFwiU0ZNb25vLVJlZ3VsYXJcIiwgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuIl19 */';St={},Ct={},Ot={},Lt={},Dt={},Nt||(Nt=1,uo=St,Object.defineProperty(uo,"__esModule",{value:!0}),uo.withStores=uo.useStores=uo.MultiStoreController=uo.StoreController=void 0,_t||(_t=1,Object.defineProperty(Ct,"__esModule",{value:!0}),Ct.StoreController=void 0,Ct.StoreController=class{constructor(e,n){this.host=e,this.atom=n,e.addController(this)}hostConnected(){this.unsubscribe=this.atom.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;null===(e=this.unsubscribe)||void 0===e||e.call(this)}get value(){return this.atom.get()}}),go=Ct,Object.defineProperty(uo,"StoreController",{enumerable:!0,get:function(){return go.StoreController}}),mo=se(),Object.defineProperty(uo,"MultiStoreController",{enumerable:!0,get:function(){return mo.MultiStoreController}}),vo=function(){if($t)return Lt;$t=1,Object.defineProperty(Lt,"__esModule",{value:!0}),Lt.useStores=void 0;const e=se();return Lt.useStores=function(...n){return t=>class extends t{constructor(...t){super(...t),new e.MultiStoreController(this,n)}}},Lt}(),Object.defineProperty(uo,"useStores",{enumerable:!0,get:function(){return vo.useStores}}),fo=function(){if(Rt)return Dt;Rt=1,Object.defineProperty(Dt,"__esModule",{value:!0}),Dt.withStores=void 0;const e=se();return Dt.withStores=(n,t)=>class extends n{constructor(...n){super(...n),new e.MultiStoreController(this,t)}},Dt}(),Object.defineProperty(uo,"withStores",{enumerable:!0,get:function(){return fo.withStores}})),zt=St;class Bc{constructor(e){this.prevOffset=0,this.headroom="top",this.headerVisible=!0,this.handleScroll=_.throttle(()=>{if(this.isAnyDropdownOpen())return void(this.prevOffset=window.scrollY);const e=T("header"),{scrollY:n}=window;let t="none";"height"!==T("zoomMode")&&n+window.innerHeight+100>document.body.scrollHeight?t="end":n>this.prevOffset&&n>49?t="hide":"scroll"===e&&n<this.prevOffset&&n>49?t="show":"click"!==e&&n<=49&&(t="top");let o=!1;if(this.headroom!==t&&(this.headroom=t,o=!0),"scroll"===e){const e="hide"!==t;this.headerVisible!==e&&(this.headerVisible=e,o=!0)}o&&this.host.requestUpdate(),this.prevOffset=n},300),this.handleMouseMove=_.throttle(e=>{if(this.isAnyDropdownOpen())this.headerVisible||(this.headerVisible=!0,this.host.requestUpdate());else if(["hover","scroll"].includes(T("header"))){const n=Bc.isMouseInsideRegion(e,window.innerWidth,73.5);this.headerVisible!==n&&(this.headerVisible=n,this.host.requestUpdate())}},300),this.toggleHeaderVisibility=()=>{"click"===T("header")&&(this.headerVisible=!this.headerVisible,this.host.requestUpdate())},this.host=e,e.addController(this)}hostConnected(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousemove",this.handleMouseMove),this.handleScroll()}hostDisconnected(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove)}isAnyDropdownOpen(){if(!this.host.shadowRoot)return!1;const e=this.host.shadowRoot.querySelectorAll("mov-dropdown");for(const n of e)if(n.open)return!0;return!1}static isMouseInsideRegion(e,n,t){return e.clientX>=0&&e.clientX<=n&&e.clientY>=0&&e.clientY<=t}}class Hc{constructor(e){this.canvasContext=null,this.host=e,e.addController(this);const n=document.createElement("canvas");this.canvasContext=n.getContext("2d"),this.resizeObserver=new ResizeObserver(()=>this.update())}hostConnected(){}hostDisconnected(){this.resizeObserver.disconnect()}observe(e,n){e&&n&&(this.element=e,this.text=n,this.resizeObserver.disconnect(),this.resizeObserver.observe(this.element),this.update())}update(){if(!this.element||!this.text||!this.canvasContext)return this.value=this.text,void this.host.requestUpdate();const e=window.getComputedStyle(this.element);this.canvasContext.font=`${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;const n=this.text,t=this.element.clientWidth;if(this.canvasContext.measureText(n).width<=t)return this.value=n,void this.host.requestUpdate();const o=t-this.canvasContext.measureText("...").width;let i="",r="";for(let e=1;e<n.length;e++){const t=n.substring(0,e),a=n.substring(n.length-e);if(this.canvasContext.measureText(t).width+this.canvasContext.measureText(a).width>o)break;i=t,r=a}this.value=`${i}...${r}`,this.host.requestUpdate()}}let Fc=!1;const Gc=_.debounce(()=>{de(),Fc=!1},500),Vc={SCROLL_UP(){Ge(-1)},SCROLL_DOWN(){Ge(1)},NEXT_CHAPTER(){Ve("next")},PREVIOUS_CHAPTER(){Ve("prev")},RETURN_CHAPTER_LIST(){Ve("series")},ENLARGE(){Ne(1)()},REDUCE(){Ne(-1)()},RESTORE(){Re("percent",100)()},FIT_WIDTH(){Re("width")()},FIT_HEIGHT(){Re("height")()},SETTINGS(){z("panel",e=>"none"===e?"settings":"none")},VIEW_MODE_WEBCOMIC(){He("WebComic")()},VIEW_MODE_VERTICAL(){He("Vertical")()},VIEW_MODE_LEFT(){He("FluidRTL")()},VIEW_MODE_RIGHT(){He("FluidLTR")()},SCROLL_START(){de()},INCREASE_SPEED(){Le(1)},DECREASE_SPEED(){Le(-1)}},Uc="#Header.mobile,\n#Header.tablet {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.mobile #ViewerTitle,\n.tablet #ViewerTitle {\n  order: 4;\n  min-height: auto;\n}\n\n.mobile #GlobalFunctions,\n.tablet #GlobalFunctions {\n  order: 2;\n  width: auto;\n  padding: 5px;\n}\n\n.mobile #GlobalFunctions span {\n  flex-direction: column;\n}\n\n.mobile #ZoomControl,\n.tablet #ZoomControl {\n  order: 3;\n}\n\n.mobile #Toolbar,\n.tabler #Toolbar {\n  order: 1;\n}\n\n#Header.mobile {\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n#Header.mobile.click + #Chapter:not(.webcomic, .vertical) {\n  position: sticky;\n}\n\n.tablet #MangaTitle,\n.mobile #MangaTitle {\n  max-width: 90vw;\n}\n\n.mobile #ViewerTitle {\n  order: 3;\n  margin-top: 0;\n  height: auto;\n  padding: 0;\n}\n\n.mobile #GlobalFunctions {\n  order: 2;\n  padding: 0;\n  width: auto;\n  gap: 0;\n}\n\n.mobile mov-button::part(base) {\n  border-radius: 0;\n}\n\n.mobile #FileDropdown mov-button:first-of-type::part(base) {\n  border-radius: 5px 0 0 5px;\n}\n\n.mobile #GlobalFunctions mov-button:last-of-type::part(base) {\n  border-radius: 0 5px 5px 0;\n}\n\n.mobile .PageFunctions {\n  padding: 0;\n}\n\n.mobile .PageFunctions .PageButton.Bookmark {\n  opacity: 1;\n}\n\n.mobile #GlobalFunctions #ZoomSlider,\n.tablet #GlobalFunctions #ZoomSlider,\n.mobile .PageFunctions .PageButton:not(.Bookmark),\n.tablet #Counters,\n.mobile #ZoomControl,\n.mobile #ZoomDropdown,\n.mobile #ViewDropdown,\n.mobile #FileDropdown :where(:nth-child(3), :nth-child(4)) {\n  display: none;\n}\n";Pt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,Ht=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?Bt(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(n,t,a):r(a))||a);return o&&a&&Pt(n,t,a),a};let Wc=class extends Kr{constructor(){super(),this.headroomController=new Bc(this),this.titleController=new Hc(this)}updated(e){super.updated(e),e.has("manga")&&this.manga&&requestAnimationFrame(()=>{this.manga&&this.titleController.observe(this.mangaTitleElement,this.manga?.title??"Manga Online Viewer")})}render(){if(!this.manga)return Ti``;const{headroom:e,headerVisible:n}=this.headroomController,t=T("keybinds"),o=e=>{if("desktop"!==R("device"))return $i;const n=t[e];return n&&0!==n.length?n.map(e=>Ti`<kbd slot="details">${e}</kbd>`):$i};return Ti`
      <mov-button
        id="menu"
        class="${Vl({[T("header")]:!0,hide:["top","end"].includes(e)})}"
        @click=${this.headroomController.toggleHeaderVisibility}
      >
        <mov-icon name="IconMenu2"></mov-icon>
      </mov-button>
      <header
        id="Header"
        class="${Vl({[T("header")]:!0,[`headroom-${e}`]:!0,visible:n&&["hide","none"].includes(e),[R("device")]:!0})}"
      >
        <div
          id="Toolbar"
          class="button-group"
        >
          <mov-dropdown id="FileDropdown">
            <mov-button
              slot="trigger"
              title="${B("FILE_MENU")}"
            >
              <mov-icon
                label="File"
                name="IconDotsVertical"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="settings"
              @click=${je}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${B("SETTINGS")} ${o("SETTINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${Ze}
            >
              <mov-icon
                slot="icon"
                name="IconKeyboard"
              ></mov-icon>
              ${B("KEYBINDINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="AutoScroll"
              class="${Vl({running:R("autoScroll")})}"
              @click=${de}
            >
              <mov-icon
                slot="icon"
                name="${R("autoScroll")?"IconPlayerPause":"IconPlayerPlay"}"
              ></mov-icon>
              ${B("SCROLL_START")} ${o("SCROLL_START")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${ge}
            >
              <mov-icon
                slot="icon"
                name="IconBookmarks"
              ></mov-icon>
              ${B("BOOKMARKS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${oe}"
              ?selected=${T("hidePageControls")}
            >
              <mov-icon
                slot="icon"
                name="IconListNumbers"
              ></mov-icon>
              ${B("TOGGLE_CONTROLS")}
            </mov-dropdown-item>
          </mov-dropdown>

          <mov-dropdown
            id="ViewDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${B("VIEW_MENU")}"
            >
              <mov-icon
                label="View"
                name="IconBook"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="webComic"
              class="tablets"
              @click="${He("WebComic")}"
              ?selected=${"WebComic"===T("viewMode")}
            >
              <mov-icon
                slot="icon"
                name="IconSpacingVertical"
              ></mov-icon>
              ${B("VIEW_MODE_WEBCOMIC")} ${o("VIEW_MODE_WEBCOMIC")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="verticalMode"
              class="tablets"
              @click="${He("Vertical")}"
              ?selected=${"Vertical"===T("viewMode")}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></mov-icon>
              ${B("VIEW_MODE_VERTICAL")} ${o("VIEW_MODE_VERTICAL")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="ltrMode"
              @click="${He("FluidLTR")}"
              ?selected=${"FluidLTR"===T("viewMode")}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${B("VIEW_MODE_LEFT")} ${o("VIEW_MODE_LEFT")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${He("FluidRTL")}"
              ?selected=${"FluidRTL"===T("viewMode")}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></mov-icon>
              ${B("VIEW_MODE_RIGHT")} ${o("VIEW_MODE_RIGHT")}
            </mov-dropdown-item>
          </mov-dropdown>
          <mov-dropdown
            id="ZoomDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${B("ZOOM_MENU")}"
            >
              <mov-icon
                label="Zoom"
                name="IconZoom"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="enlarge"
              @click="${Ne()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${B("ENLARGE")} ${o("ENLARGE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${Re("percent",100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${B("RESTORE")} ${o("RESTORE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${Ne(-1)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomOutArea"
              ></mov-icon>
              ${B("REDUCE")} ${o("REDUCE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitWidth"
              @click="${Re("width")}"
              ?selected=${"width"===T("zoomMode")}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${B("FIT_WIDTH")} ${o("FIT_WIDTH")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${Re("height")}"
              ?selected=${"height"===T("zoomMode")}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></mov-icon>
              ${B("FIT_HEIGHT")} ${o("FIT_HEIGHT")}
            </mov-dropdown-item>
          </mov-dropdown>
        </div>
        <div id="ViewerTitle">
          <h1
            id="MangaTitle"
            title="${this.manga.title}"
          >
            ${this.titleController.value??this.manga.title}
          </h1>
        </div>
        <div id="ZoomControl">
          <input
            type="range"
            id="Zoom"
            .value="${T("zoomValue")}"
            min="${T("minZoom")}"
            max="200"
            @input=${Be}
          />
          <span id="ZoomVal">
            Zoom:
            ${"percent"===T("zoomMode")?`${T("zoomValue")}%`:T("zoomMode")}</span
          >
        </div>
        <div
          id="GlobalFunctions"
          class="button-group"
        >
          <mov-button
            id="series"
            href="${this.manga.series??$i}"
            @click=${ie}
            title="${B("RETURN_CHAPTER_LIST")}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBookReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="CommentsButton"
            title="${B("DISPLAY_COMMENTS")}"
            @click=${re}
            ?disabled=${!this.manga.comments}
          >
            <mov-icon name="IconMessage"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${B("DOWNLOAD_ZIP")}"
            @click=${te}
            ?disabled=${"available"!==R("download")}
            ?loading=${"working"===R("download")}
          >
            <mov-icon
              name="${"working"===R("download")?"IconLoader2":"IconFileDownload"}"
            ></mov-icon>
          </mov-button>
          <mov-button
            id="prev"
            href="${this.manga.prev??$i}"
            title="${B("PREVIOUS_CHAPTER")}"
            @click=${ie}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next??$i}"
            title="${B("NEXT_CHAPTER")}"
            @click=${ie}
            ?disabled=${!this.manga.next}
          >
            <mov-icon name="IconArrowBigRight"></mov-icon>
          </mov-button>
        </div>
      </header>
    `}};Wc.styles=[Dr("#Header {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-flow: row nowrap;\n  transition: transform 0.3s ease-in;\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: var(--theme-background-color);\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);\n  z-index: 900;\n}\n\n#Header.click {\n  padding-left: 40px;\n}\n\n@keyframes headroom {\n  from {\n    transform: translateY(-100%);\n  }\n  to {\n    transform: translateY(0%);\n  }\n}\n\n#Header:not(.visible, .headroom-top, .fixed, .simple) {\n  animation: headroom 0.3s ease-in reverse;\n  transform: translateY(-100%);\n  position: sticky;\n  top: 0;\n}\n\n#Header.scroll.headroom-hide:not(.visible) {\n  animation: none;\n  transform: translateY(-100%);\n  position: sticky;\n  top: 0;\n}\n\n#Header.scroll.headroom-show,\n#Header.headroom-end,\n#Header.visible {\n  animation: headroom 0.3s ease-in;\n  transform: translateY(0%);\n  position: sticky;\n  top: 0;\n}\n\n#Header.headroom-top {\n  animation: none;\n}\n\n#Header.fixed {\n  position: sticky;\n  animation: none;\n  top: 0;\n  transform: translateY(0%);\n}\n\n#Header.simple {\n  position: static;\n  animation: none;\n  top: 0;\n  transform: translateY(0%);\n}\n\n#menu {\n  position: fixed;\n  z-index: 1;\n  color: var(--theme-body-text-color);\n  height: 40px;\n  width: 40px;\n}\n\n#menu:not(.click),\n#menu.hide {\n  display: none;\n}\n\n#menu.click {\n  z-index: 901;\n}\n\n#MangaTitle {\n  padding: 2px;\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 400;\n  word-wrap: anywhere;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 200px;\n  max-width: 40vw;\n}\n\n#GlobalFunctions {\n  display: flex;\n  gap: 3px;\n  padding: 3px 3px 3px 0;\n  flex-wrap: wrap;\n  z-index: 100;\n}\n\n#ZoomControl {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 3px;\n  padding: 10px 5px;\n}\n"),Dr(Uc),Dr(Pc),Rr``],Ht([K("#MangaTitle")],Wc.prototype,"mangaTitleElement",2),Ht([Y({type:Object})],Wc.prototype,"manga",2),Wc=Ht([ea("reader-header"),zt.useStores(hr,pr,ur)],Wc),Ft=Object.getOwnPropertyDescriptor,Gt=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?Ft(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=r(a)||a);return a};let jc=class extends Kr{listBookmarks(){return e(T("bookmarks"))?[B("LIST_EMPTY")]:T("bookmarks").map((e,n)=>Ti`
        <div
          id="Bookmark${n+1}"
          class="bookmark-item"
        >
          <div class="bookmark-info">
            <div class="bookmark-name">${e.name}</div>
            <a
              class="bookmark-url"
              href="${e.url}"
              target="_blank"
              >${e.url}</a
            >
          </div>
          <div class="bookmark-details">
            <div class="bookmark-date">${new Date(e.date).toISOString().slice(0,10)}</div>
            <div class="bookmark-page">Page: ${e.page}</div>
          </div>
          <div class="bookmark-actions">
            <a
              href="${e.url}"
              target="_blank"
            >
              <mov-button
                title="Open Bookmark"
                size="small"
              >
                <mov-icon
                  name="IconExternalLink"
                  size="16px"
                ></mov-icon>
              </mov-button>
            </a>
            <mov-button
              title="Delete Bookmark"
              size="small"
              value="${e.url}"
              @click=${ue}
            >
              <mov-icon
                name="IconTrash"
                size="16px"
              ></mov-icon>
            </mov-button>
          </div>
        </div>
      `)}render(){return Ti`
      <mov-dialog
        id="BookmarksPanel"
        ?open=${"bookmarks"===R("panel")}
        @close=${We}
      >
        <mov-button
          class="Bookmark"
          title="${B("BOOKMARK")}"
          @click=${me}
          slot="header-actions"
        >
          <mov-icon
            name="${void 0===G()?"IconBookmark":"IconBookmarkOff"}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${B("BOOKMARKS")}</h2>
        <h2 slot="label">${B("BOOKMARKS")}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-dialog>
    `}};jc.styles=[Dr("#BookmarksPanel {\n  text-align: center;\n  --width: 100vw;\n}\n\n#BookmarksList {\n  padding: 0 5px;\n  overflow: auto;\n  max-height: 60vh;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.bookmark-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  border-radius: 5px;\n  transition: background-color 150ms ease-in-out;\n  text-align: left;\n}\n\n.bookmark-item:hover {\n  background-color: var(--mov-color-fill-quiet, rgba(128, 128, 128, 0.1));\n}\n\n.bookmark-info {\n  flex-grow: 1;\n  min-width: 0;\n}\n\n.bookmark-name {\n  font-weight: 500;\n}\n\n.bookmark-url {\n  font-size: 0.875rem;\n  text-decoration: none;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: color-mix(in oklab, var(--theme-body-text-color), transparent 30%);\n}\n.bookmark-url:hover {\n  text-decoration: underline;\n}\n\n.bookmark-details {\n  flex-shrink: 0;\n  width: 90px;\n  font-size: 0.875rem;\n  text-align: right;\n  color: color-mix(in oklab, var(--theme-body-text-color), transparent 30%);\n}\n.bookmark-details > div {\n  padding: 2px 0;\n}\n\n.bookmark-actions {\n  flex-shrink: 0;\n  display: flex;\n  gap: 0.5rem;\n}\n")],jc=Gt([ea("bookmark-panel"),zt.useStores(hr,pr,ur)],jc),Vt=Object.getOwnPropertyDescriptor,Ut=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?Vt(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=r(a)||a);return a};let Zc=class extends Kr{constructor(){super(...arguments),this.keybindsRefs=Object.keys(T("keybinds")).reduce((e,n)=>(e[n]=Ji(),e),{})}keybindList(){const e=T("keybinds");return Object.keys(e).map(n=>{const t=e[n]?.length?
/**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
function*(e){if(void 0!==e){let n=-1;for(const t of e)n>-1&&(yield" / "),n++,yield t}}(e[n]?.map(e=>Ti`<kbd class="dark">${e}</kbd>`)):"";return Ti`<span>${B(n)}:</span> <span>${t}</span>`})}keybindEditor(){const e=T("keybinds");return Object.keys(e).map(n=>Ti`<label for="${n}">${B(n)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${n}"
            name="${n}"
            value="${e[n]?.join(" , ")??$i}"
            ${tr(this.keybindsRefs[n])}
          />`)}render(){return Ti`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${R("panel").startsWith("keybindings")}
        placement="end"
        @close=${We}
      >
        <h2 slot="label">${B("KEYBINDINGS")}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${"keybindingsEditor"===R("panel")?Ti` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${B("SAVE_KEYBINDS")}"
                @click=${()=>function(e){const n={};Object.keys(e).forEach(t=>{const o=e[t].value;if(o){const e=o.value.split(",").map(e=>e.trim()).filter(e=>""!==e);n[t]=e.length>0?e:void 0}}),$("keybinds",n),N("panel","keybindings"),Ue()}(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${B("BUTTON_SAVE")}
              </mov-button>`:Ti` <mov-button
                id="EditKeybindings"
                type="button"
                title="${B("EDIT_KEYBINDS")}"
                @click=${Qe}
              >
                <mov-icon
                  name="IconPencil"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${B("BUTTON_EDIT")}
              </mov-button>`}
        </div>
        <div id="KeybindingsList">
          ${"keybindingsEditor"===R("panel")?this.keybindEditor():this.keybindList()}
        </div>
        <div id="HotKeysRules">${ia(B("KEYBIND_RULES"))}</div>
      </mov-drawer>
    `}};Zc.styles=[Dr("#KeybindingsPanel div {\n  line-height: 1.5em;\n}\n\n#KeybindingsPanel #KeybindingsList {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 5px;\n}\n\n#KeybindingsPanel .ControlButton {\n  margin-left: 3px;\n  justify-content: center;\n  align-items: center;\n  padding: 5px 10px;\n  gap: 0.5em;\n}\n\n#KeybindingsPanel label {\n  display: ruby;\n}\n\n#KeybindingsPanel input {\n  display: inline-block;\n  width: 100%;\n}\n\n#KeybindingsPanel #HotKeysRules {\n  grid-column: span 2;\n}\n"),Dr(Pc)],Zc=Ut([ea("keybindings-panel"),zt.useStores(hr,pr,ur)],Zc),Wt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,Zt=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?jt(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(n,t,a):r(a))||a);return o&&a&&Wt(n,t,a),a};let Qc=class extends Kr{constructor(){super(...arguments),this.mode="bottom",this.forceExpanded=!1,this.isHiding=!1}willUpdate(e){e.has("mode")&&(this.isHiding=!0)}updated(e){e.has("mode")&&this.isHiding&&setTimeout(()=>{this.isHiding=!1},50)}render(){if("disabled"===this.mode)return $i;const e=R("manga"),n={horizontal:"bottom"===this.mode,vertical:"bottom"!==this.mode,left:"left"===this.mode,right:"right"===this.mode,bottom:"bottom"===this.mode,hiding:this.isHiding};return Ti`
      <nav
        id="Navigation"
        class="${Vl(n)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${gs}
          <i>${R("loaded")}</i> /
          <b> ${(e?.pages??1)-((e?.begin??1)-1)} </b>
          ${B("PAGES_LOADED")}
          <span>: ${R("currentPage")}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${"bottom"===this.mode?Ye:null}
        >
          ${
/**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
function*(e,n){if(void 0!==e){let t=0;for(const o of e)yield n(o,t++)}}(qe(e?.pages??1,e?.begin??1),e=>Ti` <figure
                id="Thumbnail${e}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${e}"
                @click=${()=>{N("scrollToPage",e)}}
              >
                <img
                  id="ThumbnailImg${e}"
                  alt=""
                  class="ThumbnailImg"
                  src=${R("images")?.[e]?.src??$i}
                />
                <figcaption class="ThumbnailIndex">${e}</figcaption>
              </figure>`)}
        </div>
      </nav>
    `}};Qc.styles=[Dr(":host {\n  --nav-collapsed-size: 34px;\n  --nav-expanded-size: 200px;\n  --header-height: 80px;\n}\n#Navigation {\n  color: var(--theme-text-color);\n  background-color: var(--theme-hightlight-color);\n  overflow: hidden;\n  display: flex;\n  box-sizing: border-box;\n  gap: 5px;\n  white-space: nowrap;\n  text-align: center;\n  line-height: 0;\n  transition: all 0.3s ease;\n  position: fixed;\n  z-index: 1000;\n}\n#Thumbnails {\n  flex-grow: 1;\n  display: flex;\n  gap: 5px;\n  justify-content: flex-start;\n}\n#Navigation.horizontal #Thumbnails {\n  flex-direction: row;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n#Navigation.vertical #Thumbnails {\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  justify-content: flex-start;\n}\n#Navigation.left #Thumbnails {\n  direction: rtl;\n}\n:host(:not([forceExpanded])) #Navigation:not(:hover) #Thumbnails {\n  display: none;\n}\n#NavigationCounters {\n  flex-shrink: 0; /* Prevent this from shrinking */\n  padding: 5px;\n  line-height: 1rem;\n  text-align: center;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n/* == Horizontal Orientation (for top/bottom position) == */\n#Navigation.horizontal {\n  flex-direction: column;\n  height: var(--nav-collapsed-size);\n  width: 100%;\n  left: 0;\n  right: 0;\n}\n:host([forceExpanded]) #Navigation.horizontal,\n#Navigation.horizontal:hover {\n  height: var(--nav-expanded-size);\n}\n#Navigation.bottom {\n  bottom: 0;\n}\n/* == Vertical Orientation (for left/right position) == */\n#Navigation.vertical {\n  flex-direction: row;\n  width: var(--nav-collapsed-size);\n  height: 100%;\n  bottom: 0;\n  transition:\n    top 0.3s ease,\n    height 0.3s ease,\n    width 0.3s ease;\n}\n:host([forceExpanded]) #Navigation.vertical,\n#Navigation.vertical:hover {\n  width: var(--nav-expanded-size);\n}\n#Navigation.left {\n  left: 0;\n  flex-direction: row-reverse;\n}\n#Navigation.right {\n  right: 0;\n}\n#Navigation.vertical #NavigationCounters {\n  writing-mode: vertical-rl;\n  transform: rotate(180deg);\n}\n#Navigation.right #NavigationCounters {\n  transform: rotate(0deg);\n}\n/* Adjust for header visibility */\n#Navigation.vertical.header {\n  top: var(--header-height);\n  height: calc(100% - var(--header-height));\n}\n\n#Navigation .Thumbnail {\n  display: inline-flex;\n  height: 150px;\n  width: 150px;\n  margin: 0 5px;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n}\n\n.ThumbnailIndex {\n  color: var(--mov-color-on-loud);\n  background-color: var(--mov-color-fill-loud);\n  display: block;\n  opacity: 0.9;\n  position: absolute;\n  left: 0;\n  bottom: 30%;\n  width: 100%;\n  line-height: 1.2rem;\n  text-align: center;\n  font-weight: 600;\n  z-index: 1;\n}\n.ThumbnailImg {\n  cursor: pointer;\n  display: inline-block;\n  max-height: 150px;\n  min-height: 150px;\n  min-width: 80px;\n  max-width: 150px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 48px 48px;\n}\n"),Rr`
      #Navigation {
        transition: opacity 0.2s ease-in-out;
      }
      #Navigation.hiding {
        opacity: 0;
        /* Disable transition during position change to avoid animating the hide */
        transition: none;
      }

      .Thumbnail .ThumbnailImg[src=''],
      .Thumbnail .ThumbnailImg:not([src]) {
        background-image: url('${Dr(U(yl))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${Dr(U(El))}');
      }
    `],Zt([Y({type:String})],Qc.prototype,"mode",2),Zt([Y({type:Boolean})],Qc.prototype,"forceExpanded",2),Zt([X()],Qc.prototype,"isHiding",2),Qc=Zt([ea("navbar-thumbnails"),zt.useStores(hr,pr,ur)],Qc);const qc=(e="#MangaOnlineViewer",n=T("theme"))=>{const t=J(n),o=V(n),i="dark"===T("colorScheme")?t[8]:t[2],r=V(i);return fr`
    :where(:root),
    ${e}, .dark,
    ${e}.dark {
      --theme-primary-color: ${n};
      --theme-primary-text-color: ${o};
      --theme-secondary-color: ${i};
      --theme-secondary-text-color: ${r};

      color-scheme: dark;
      --theme-body-background: ${wr.dark[600]};
      --theme-body-text-color: ${wr.dark[50]};
      --theme-text-color: ${wr.dark[50]};
      --theme-background-color: ${wr.dark[600]};
      --theme-hightlight-color: ${wr.dark[500]};
      --theme-border-color: ${wr.dark[400]};

      --mov-color-fill-quiet: ${t[9]};
      --mov-color-fill-normal: var(--theme-secondary-color, ${t[8]});
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${t[8]};
      --mov-color-border-normal: ${t[7]};
      --mov-color-border-loud: ${t[6]};
      --mov-color-on-quiet: ${t[4]};
      --mov-color-on-normal: var(--theme-secondary-text-color, ${t[3]});
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 8%;
      --mov-color-mix-active: black 16%;
    }

    .light,
    ${e}.light {
      color-scheme: light;
      --theme-body-background: ${wr.gray[50]};
      --theme-body-text-color: ${wr.gray[900]};
      --theme-text-color: ${wr.gray[900]};
      --theme-background-color: ${wr.gray[50]};
      --theme-hightlight-color: ${wr.gray[500]};
      --theme-border-color: ${wr.gray[100]};

      --mov-color-fill-quiet: ${t[0]};
      --mov-color-fill-normal: var(--theme-secondary-color, ${t[1]});
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${t[1]};
      --mov-color-border-normal: ${t[2]};
      --mov-color-border-loud: ${t[4]};
      --mov-color-on-quiet: ${t[6]};
      --mov-color-on-normal: var(--theme-secondary-text-color, ${t[3]});
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 10%;
      --mov-color-mix-active: black 20%;
    }
  `};Qt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,Yt=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?qt(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(n,t,a):r(a))||a);return o&&a&&Qt(n,t,a),a};let Yc=class extends Kr{constructor(){super(...arguments),this.colorScheme=T("colorScheme")}render(){return Ti`
      <mov-dialog
        id="CommentsPanel"
        ?open=${"comments"===R("panel")}
        fullscreen
        @close=${We}
      >
        <h2 slot="label">${B("COMMENTS")}</h2>
        <div
          id="CommentsArea"
          class="${this.colorScheme}"
        >
          ${R("manga")?.comments}
        </div>
        <toggle-button
          id="CommentsColorScheme"
          mode="theme"
          @click=${this.changeCommentsColor}
          slot="header-actions"
          ?active=${"dark"===this.colorScheme}
        >
        </toggle-button>
      </mov-dialog>
    `}changeCommentsColor(){this.colorScheme="dark"===this.colorScheme?"light":"dark"}};Yc.styles=[Dr("#CommentsPanel {\n  text-align: center;\n  --width: 100vw;\n}\n\n#CommentsArea {\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  height: 100%;\n  width: 100%;\n  background-color: var(--theme-body-background);\n}\n"),Dr(qc(":host"))],Yt([X()],Yc.prototype,"colorScheme",2),Yc=Yt([ea("comments-panel"),zt.useStores(hr,pr,ur)],Yc),Xt=Object.getOwnPropertyDescriptor,Kt=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?Xt(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=r(a)||a);return a};let Xc=class extends Kr{render(){return Ti`
      <mov-drawer
        id="SettingsPanel"
        ?open=${"settings"===R("panel")}
        @close=${We}
        placement="start"
        class="${R("device")}"
      >
        <h2 slot="label">${B("SETTINGS")}</h2>
        <mov-button
          id="ResetSettings"
          @click="${F}"
          title="${B("BUTTON_RESET_SETTINGS")}"
        >
          <mov-icon
            name="IconSettingsOff"
            size="20px"
            slot="start"
          ></mov-icon>
          ${B("BUTTON_RESET_SETTINGS")}
        </mov-button>
        <div class="content">
          <fieldset id="SettingsPanelGeneral">
            <legend>${B("GENERAL")}</legend>
            ${Ti`${Xe()} ${Ke()}`}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${B("THEME")}</legend>
            ${cn()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${B("LOADING")}</legend>
            ${Ti`${Je()} ${en()}`}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${B("ZOOM")}</legend>
            ${Ti`${dn()} ${hn()} ${Ti`
    <div class="ControlLabel minZoom">
      <span>
        ${B("MINIMUM_ZOOM")}
        <output
          id="minZoomVal"
          class="RangeValue"
          for="minZoom"
        >
          ${T("minZoom")}%
        </output>
      </span>
      <input
        type="range"
        value="${T("minZoom")}"
        name="minZoom"
        id="minZoom"
        min="25"
        max="100"
        step="5"
        @input="${Ce}"
        list="minZoomList"
      />
      <datalist id="minZoomList">
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
      </datalist>
    </div>
  `} ${pn()} ${un()}`}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${B("OTHERS")}</legend>
            ${Ti`${nn()} ${tn()} ${on()} ${rn()} ${an()}`}
          </fieldset>
        </div>
      </mov-drawer>
    `}};Xc.styles=[Rr`
      #SettingsPanel.mobile #SettingsPanelZoom,
      #SettingsPanel.mobile .fitIfOversize,
      #SettingsPanel.mobile .showThumbnails,
      #SettingsPanel.mobile .lazyLoadImages,
      #SettingsPanel.mobile .downloadZip,
      #SettingsPanel.mobile .minZoom,
      #SettingsPanel.mobile .zoomStep,
      #SettingsPanel.mobile .headerType,
      #SettingsPanel.mobile .navbarType,
      #SettingsPanel.mobile .autoScroll {
        display: none;
      }
    `,Dr('#SettingsPanel {\n  color: var(--theme-text-color);\n}\n\n#SettingsPanel fieldset {\n  border: 1px solid var(--theme-body-text-color);\n  padding: 3px;\n  border-radius: 10px;\n}\n\n#SettingsPanel .ControlLabel {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px;\n}\n\n#SettingsPanel .ControlLabelItem {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#SettingsPanel .ControlLabelItem:not(.show) {\n  display: none;\n}\n\n#SettingsPanel input[type="range"] {\n  width: 100%;\n}\n\n#SettingsPanel .RangeValue {\n  display: inline-block;\n  color: var(--mov-color-on-loud);\n  line-height: 20px;\n  text-align: center;\n  border-radius: 3px;\n  background: var(--mov-color-fill-loud);\n  padding: 2px 5px;\n  margin-left: 8px;\n}\n\n#SettingsPanel datalist {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n\n#SettingsPanel datalist option {\n  padding: 0;\n  writing-mode: vertical-lr;\n}\n\n#ThemeSelector {\n  width: 110px;\n}\n\n#ColorRecommendations {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 2px;\n}\n#Chapter:not(.Vertical) ~ #SettingsPanel .verticalSeparator {\n  display: none;\n}\n\n#ColorScheme {\n  padding: 5px;\n  min-height: 28px;\n  min-width: 28px;\n}\n\n#ResetSettings,\n#ResetSettings::part(base) {\n  width: 100%;\n}\n')],Xc=Kt([ea("settings-panel"),zt.useStores(hr,pr,ur)],Xc);const Kc=(e,n)=>qe(e,n).map(n=>(R("images")?.[n]?.ref||P(n,()=>({ref:Ji()})),Ti`
      <div
        id="Page${n}"
        class="${Vl({MangaPage:!0,hide:!!R("images")?.[n].hide})}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${B("BOOKMARK")}"
            @click=${me}
            value="${n}"
          >
            ${G()?hs:ds}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${B("ZOOM_IN")}"
            @click=${Mn}
            value="${n}"
          >
            ${kc}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${B("ZOOM_RESET")}"
            @click=${Cn}
            value="${n}"
          >
            ${wc}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${B("ZOOM_OUT")}"
            @click=${Sn}
            value="${n}"
          >
            ${Ec}
          </button>
          <button
            class="ZoomWidth PageButton"
            title="${B("ZOOM_WIDTH")}"
            @click=${_n}
            value="${n}"
          >
            ${ns}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${B("ZOOM_HEIGHT")}"
            @click=${On}
            value="${n}"
          >
            ${Kl}
          </button>
          <button
            class="Hide PageButton"
            title="${B("HIDE")}"
            @click=${xn}
            value="${n}"
          >
            ${R("images")?.[n].hide?Rs:Ns}
          </button>
          <button
            class="Reload PageButton"
            title="${B("RELOAD")}"
            @click=${En}
            value="${n}"
          >
            ${dc}
          </button>
          <span class="PageIndex">${n}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${n}"
            alt="Page ${n}"
            class="PageImg"
            src=${R("images")?.[n]?.src??$i}
            style="${ql(function(e){const n=R("images")?.[e];let t;return t=T("viewMode").startsWith("Fluid")?`${window.innerHeight+("bottom"===T("navbar")?-34:0)}px`:void 0,{width:n?.width?`${n.width}px`:"auto",height:n?.height?`${n.height}px`:"auto","max-height":t,"min-width":`${T("minZoom")}vw`}}(n))}"
            @load=${In}
            @error=${An}
            ${tr(R("images")?.[n].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${n===e?B("END"):`${n} / ${e}`} ]
      </div>
    `)),Jc=fr`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${U(yl)}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${U(El)}');
  }

  ${'/*  Simple Normalizer */\nhtml {\n  font-size: 100%;\n}\n\nbody {\n  margin: 0;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--theme-body-text-color);\n  background-color: var(--theme-body-background);\n  padding: 0;\n}\n\na,\na:link,\na:visited,\na:active,\na:focus {\n  color: var(--theme-body-text-color);\n  text-decoration: none;\n}\n\nimg {\n  height: auto;\n  vertical-align: middle;\n  border: 0 none;\n}\n'}
  ${":root:not(.light, .dark) {\n  --theme-body-background: #25262b;\n  --theme-body-text-color: #c1c2c5;\n  --theme-text-color: #c1c2c5;\n  --theme-primary-color: #1a1b1e;\n  --theme-primary-text-color: #c1c2c5;\n  --theme-background-color: #25262b;\n  --theme-hightlight-color: #2c2e33;\n  --theme-border-color: #373a40;\n  --theme-secondary-color: #2c2e33;\n  --theme-secondary-text-color: #c1c2c5;\n}\n\n:host {\n  box-sizing: border-box;\n}\n\n#MangaOnlineViewer {\n  text-decoration: none;\n  color: var(--theme-body-text-color);\n  background-color: var(--theme-body-background);\n  box-sizing: border-box;\n  min-height: 100vh;\n}\n\n#Chapter {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  min-width: 225px;\n  box-sizing: border-box;\n}\n\n#Chapter.Vertical:has(+ #Navigation:not(.disabled)),\n#Chapter.WebComic:has(+ #Navigation:not(.disabled)) {\n  padding-bottom: 31px;\n}\n\n#Chapter.Vertical .PageContent {\n  margin-bottom: 8px;\n  margin-top: 8px;\n}\n\n.closeButton {\n  width: fit-content;\n  height: fit-content;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.overlay {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 950;\n  cursor: pointer;\n}\n\n.overlay.visible {\n  display: block;\n}\n\nselect {\n  height: 20px;\n  margin: 2px;\n}\n\n:not(.FluidRTL, .FluidLTR).fitWidthIfOversize .PageContent .PageImg {\n  max-width: 100%;\n  object-fit: contain;\n}\n\n.hideControls .PageFunctions {\n  visibility: hidden;\n}\n"}
  ${'.PageButton .icon-tabler {\n  height: 1rem;\n  width: 1rem;\n  vertical-align: sub;\n}\n\n.PageButton,\n.PageButton:visited,\n.PageButton:link {\n  cursor: pointer;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  padding: 2px;\n  min-height: 32px;\n  color: var(--mov-color-on-loud);\n  background-color: var(--mov-color-fill-loud);\n  border-color: var(--theme-border-color);\n  text-decoration: none;\n}\n\n.PageButton:active,\n.PageButton:hover {\n  opacity: 0.8;\n}\n\n.PageButton[selected] {\n  background-color: var(--mov-color-fill-normal);\n  color: var(--mov-color-on-normal);\n  border: 1px solid var(--theme-border-color);\n}\n\n.PageButton.hidden {\n  display: none;\n}\n\n.MangaPage {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  line-height: 0;\n  min-height: 22px;\n  min-width: 100%;\n}\n\n.PageContent {\n  text-align: center;\n  display: inline-block;\n  overflow-x: auto;\n  max-width: 100%;\n  transition: all 0.3s ease-in-out;\n  height: 100%;\n  overflow-y: hidden;\n}\n\n.MangaPage.hide .PageContent {\n  height: 0;\n}\n\n.PageContent .PageImg[src=""],\n.PageContent .PageImg:not([src]),\n.PageContent .PageImg.imgBroken {\n  width: 40vw;\n  height: 80vh;\n  display: inline-block;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 20%;\n  background-color: var(--theme-hightlight-color);\n  position: relative;\n  text-align: center;\n  line-height: 80vh;\n  vertical-align: top;\n  color: var(--theme-text-color);\n  font-size: 1rem;\n  min-width: 40vw;\n  min-height: 50vh;\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0;\n}\n\n.PageContent .PageImg[src=""]:before,\n.PageContent .PageImg:not([src]):before,\n.PageContent .PageImg.imgBroken:before {\n  content: attr(alt);\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  white-space: pre-wrap;\n  text-align: center;\n  color: var(--theme-text-color);\n  font-size: 1rem;\n}\n\n.PageFunctions {\n  font-family: monospace;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  gap: 3px;\n  position: absolute;\n  right: 0;\n}\n\n.PageFunctions > .PageIndex {\n  background-color: var(--mov-color-fill-loud);\n  color: var(--mov-color-on-loud);\n  min-width: 20px;\n  text-align: center;\n  display: inline-block;\n  padding: 3px 5px;\n  line-height: 1rem;\n  border-radius: 5px;\n}\n\n.PageFunctions .PageButton {\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  border-width: 0;\n  min-height: auto;\n  opacity: 0.5;\n}\n\n.PageFunctions:hover .PageButton {\n  opacity: 1;\n}\n\n.PageFunctions .PageButton:hover {\n  opacity: 0.9;\n}\n\n#Chapter.Vertical .separator {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  font-style: italic;\n}\n\n#Chapter.Vertical .separator::before,\n#Chapter.Vertical .separator::after {\n  content: "";\n  flex: 1;\n  border-bottom: 1px solid var(--theme-text-color);\n}\n\n#Chapter.Vertical.separator:not(:empty)::before {\n  margin-right: 0.25em;\n}\n\n#Chapter.Vertical.separator:not(:empty)::after {\n  margin-left: 0.25em;\n}\n\n#Chapter:not(.separator) .separator,\n#Chapter:not(.Vertical) .separator {\n  display: none;\n}\n'}
  ${"#Chapter.FluidLTR,\n#Chapter.FluidRTL {\n  display: flex;\n  overflow-x: auto;\n  min-width: auto;\n\n  .ZoomWidth {\n    display: none;\n  }\n\n  .PageImg {\n    min-width: unset;\n  }\n\n  .MangaPage {\n    width: initial;\n    min-width: fit-content;\n    position: relative;\n  }\n\n  .MangaPage.DoublePage {\n    grid-column: span 2;\n  }\n}\n\n#Chapter.FluidLTR {\n  flex-direction: row;\n\n  .MangaPage .PageFunctions {\n    right: auto;\n    left: 0;\n    direction: rtl;\n  }\n}\n\n#Chapter.FluidRTL {\n  flex-direction: row-reverse;\n}\n"}
  ${Uc}
  ${"@-webkit-keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes spin-reverse {\n  0% {\n    transform: rotate(360deg);\n  }\n\n  to {\n    transform: rotate(0);\n  }\n}\n\n@keyframes spin-reverse {\n  0% {\n    transform: rotate(360deg);\n  }\n\n  to {\n    transform: rotate(0);\n  }\n}\n\n.icon-tabler-loader-2,\n.animate-spin {\n  -webkit-animation: spin 1s linear infinite;\n  animation: spin 1s linear infinite;\n}\n\n.animate-spin-reverse {\n  -webkit-animation: spin-reverse 1s linear infinite;\n  animation: spin-reverse 1s linear infinite;\n}\n"}
`;(()=>{var e,n,t=e=>null!=e&&("boolean"==typeof e?e:"true"===e.trim().toLowerCase());window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[],e="#1E293B",n=()=>{let n,o,i=null,r=null,a=null,l=!1,s=e,c="",d=null,h=null,p=null,u=[],g=e=>{let n=document.createElement("label");return n.className=e,n.setAttribute("for","range-slider"),n},m=()=>{for(let e of u)!e||e.remove();null==h||h.remove(),null==p||p.remove(),null==d||d.remove(),u=[]},v=e=>{l=e,l?((()=>{var e;let n=null==(e=null==i?void 0:i.shadowRoot)?void 0:e.querySelector(".range-slider-box");d=document.createElement("div"),d.classList.add("labels-row"),n.prepend(d)})(),(()=>{h=g("min-label"),h.textContent=k(null==a?void 0:a.getTextMin(),c),p=g("max-label"),p.textContent=k(null==a?void 0:a.getTextMax(),c),null==r||r.before(h),null==r||r.after(p);let e=null==a?void 0:a.getValues();if(e)for(let n=0;n<e.length;n++){let t=g(`value${n+1}-label generated-label`);t.textContent=k(e[n],c),u.push(t),null==d||d.append(t)}})()):m()},f=n=>{s=n;for(let n of u)!n||(n.style.color=null!=s?s:e);h&&(h.style.color=null!=s?s:e),p&&(p.style.color=null!=s?s:e)},b=e=>{c=e,n&&n()},w=()=>{!a||!d||d.classList.toggle("is-reversed",a.isRightToLeft()||a.isBottomToTop())},k=(e,n)=>{let t=`${(null!=e?e:"").toString()}${n}`;return o&&"function"==typeof o?o(e):t};return{get name(){return"Generated Labels"},init:(o,l,d,h)=>{var p,u,g;i=o,a=h,r=null==(p=o.shadowRoot)?void 0:p.getElementById("range-slider"),n=l,s=null!=(u=i.getAttribute("generate-labels-text-color"))?u:e,c=null!=(g=i.getAttribute("generate-labels-units"))?g:"",v(t(i.getAttribute("generate-labels"))),w(),f(s)},update:e=>{if(l&&e.values){w();for(let n=0;n<e.values.length;n++){let t=e.values[n],o=u[n];if(void 0===t&&o)o.remove(),u[n]=void 0;else{if(void 0!==t&&!o){let o=g(`value${n+1}-label generated-label`);if(o.textContent=k(t,c),u[n]=o,e.values.length<=0)null==d||d.append(o);else if(0===n)null==d||d.append(o);else{let e=u[n-1];null==e||e.after(o)}continue}!o||(o.textContent=k(t,c))}}h&&(h.textContent=k(e.textMin,c)),p&&(p.textContent=k(e.textMax,c)),f(s)}},onAttrChange:(e,n)=>{"generate-labels"===e&&v(t(n)),"generate-labels-text-color"===e&&f(n),"generate-labels-units"===e&&b(n)},gettersAndSetters:[{name:"generateLabels",attributes:{get:()=>null!=l&&l,set:e=>{v(t(e))}}},{name:"textColor",attributes:{get:()=>null!=s?s:"",set:e=>{f(e)}}},{name:"generateLabelsTextColor",attributes:{get:()=>null!=s?s:"",set:e=>{f(e)}}},{name:"units",attributes:{get:()=>null!=c?c:"",set:e=>{b(e)}}},{name:"generateLabelsUnits",attributes:{get:()=>null!=c?c:"",set:e=>{b(e)}}},{name:"generateLabelsFormat",attributes:{get:()=>o,set:e=>{o=e,n&&n()}}}],css:"\n    .labels-row{\n      text-align: center;\n      display: flex;\n      justify-content: center;\n    }\n    \n    .is-reversed,\n    .is-reversed + .row{\n      flex-direction: row-reverse;\n    }\n    \n    .type-vertical{\n      position: relative;\n    }\n    \n    .type-vertical .labels-row{\n      flex-direction: column;\n      position: absolute;\n      top: 50%;\n      right: -100%;\n      transform: translateY(-50%);\n    }\n    \n    .type-vertical .is-reversed,\n    .type-vertical .is-reversed + .row{\n      flex-direction: column-reverse;\n    }\n    \n    .max-label,\n    .min-label{\n      margin: 0 1rem;\n      width: 2rem;\n      text-align: center;\n      white-space: nowrap;\n    }\n    \n    .generated-label{\n      text-align: center;\n      margin: 0 0.5rem;\n      white-space: nowrap;\n    }\n    ",destroy:m}},window.tcRangeSliderPlugins.push(n)})(),(()=>{var e,n,t=(e,n,t,o,i)=>{let r=n-e;return 0===r?t:(o-t)*(i-e)/r+t},o=(e,n)=>(e=>!isNaN(parseFloat(e))&&isFinite(e))(e)?Number(e):n,i=e=>null!=e&&("boolean"==typeof e?e:"true"===e.trim().toLowerCase());window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[],e=11,n=()=>{let n=null,r=null,a=null,l=null,s=null,c=!1,d=e,h=11,p=()=>{var e;let t=null==(e=null==n?void 0:n.shadowRoot)?void 0:e.querySelector("#range-slider");a=document.createElement("div"),a.classList.add("marks"),l=document.createElement("div"),l.classList.add("mark-points"),a.append(l),s=document.createElement("div"),s.classList.add("mark-values"),a.append(s),t.append(a)},u=()=>{!r||!a||a.classList.toggle("is-reversed",r.isRightToLeft()||r.isBottomToTop())},g=()=>{var e;if(!a||!r)return;let n=r.getMin(),o=r.getMax(),i="vertical"===r.getType(),c=r.isRightToLeft()||r.isBottomToTop();for(let e=0;e<d;e++){let n=document.createElement("div");n.classList.add("mark",`mark-${e}`);let t=0===d?0:100*e/(d-1);i?n.style.top=c?100-t+"%":`${t}%`:n.style.left=c?100-t+"%":`${t}%`,null==l||l.append(n)}let p=r.getData();for(let r=0;r<h;r++){let a=document.createElement("div");a.classList.add("mark-value",`mark-value-${r}`);let l=0===h?0:100*r/(h-1),d=t(0,h-1,n,o,r);a.textContent=(p?null!=(e=p[Math.round(d)])?e:"":d).toString(),i?a.style.top=c?100-l+"%":`${l}%`:a.style.left=c?100-l+"%":`${l}%`,null==s||s.append(a)}},m=(n,t)=>{w(),d=n,h=t,d<=0&&(d=e),h<=0&&(h=11),p(),g(),u()},v=e=>{c=e,c?(p(),g(),u()):w()},f=e=>{!a||a.style.setProperty("--marks-color",e)},b=e=>{!a||a.style.setProperty("--values-color",e)},w=()=>{null==a||a.remove()};return{get name(){return"Marks"},init:(t,a,l,s)=>{var d,h;r=s,n=t,c=i(n.getAttribute("marks")),c&&(m(o(n.getAttribute("marks-count"),e),o(n.getAttribute("marks-values-count"),11)),f(null!=(d=n.getAttribute("marks-color"))?d:"#cbd5e1"),b(null!=(h=n.getAttribute("marks-values-color"))?h:"#475569"))},onAttrChange:(n,t)=>{"marks"===n&&v(i(t)),"marks-count"===n&&m(o(t,e),h),"marks-values-count"===n&&m(d,o(t,11)),"marks-color"===n&&f(t),"marks-values-color"===n&&b(t)},gettersAndSetters:[{name:"marksEnabled",attributes:{get:()=>null!=c&&c,set:e=>{v(i(e))}}},{name:"marksCount",attributes:{get:()=>null!=d?d:e,set:n=>{m(o(n,e),h)}}},{name:"marksValuesCount",attributes:{get:()=>null!=d?d:e,set:e=>{m(d,o(e,11))}}},{name:"marksColor",attributes:{get:()=>null==a?void 0:a.style.getPropertyValue("--marks-color"),set:e=>{f(e)}}},{name:"markValuesColor",attributes:{get:()=>null==a?void 0:a.style.getPropertyValue("--values-color"),set:e=>{b(e)}}}],destroy:w,css:"\n:root{\n  --marks-color: #cbd5e1;\n  --values-color: #475569;\n}\n  \n.marks{\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  top: 100%;\n  left: 0;\n  color: var(--values-color, #475569);\n}\n\n.type-vertical .marks{\n  width: auto;\n  height: 100%;\n  top: 0;\n  left: 100%;\n  flex-direction: row;\n}\n    \n.mark-points{\n  width: 100%;\n  height: 1rem;\n  position: relative;\n  margin-top: 5px;\n}  \n\n.type-vertical .mark-points {\n  width: 1rem;\n  height: 100%;\n  margin-top: 0;\n  margin-left: 5px;\n}\n\n.mark-values{\n  width: 100%;\n  height: 1rem;\n  position: relative;\n}\n\n.type-vertical .mark-values {\n  width: 1rem;\n  height: 100%;\n  margin-left: 0.7rem;\n}\n\n.mark{\n  background: var(--marks-color, #cbd5e1);\n  width: 2px;\n  height: 5px;\n  position: absolute;\n  transform: translateX(-50%);\n}  \n\n.type-vertical .mark {\n    width: 5px;\n    height: 2px;\n    transform: translateY(-50%);\n}\n\n.mark-value{\n  position: absolute;\n  transform: translateX(-50%);\n}\n\n.type-vertical .mark-value{\n    transform: translateY(-50%);\n}\n    "}},window.tcRangeSliderPlugins.push(n)})(),(()=>{var e=Object.defineProperty,n=Math.pow,t=(n,t,o)=>(((n,t,o)=>{t in n?e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o})(n,"symbol"!=typeof t?t+"":t,o),o),o="pointers-overlap",i="pointers-min-distance",r="pointers-max-distance",a="range-dragging",l="data",s="step",c="round",d="type",h="theme",p="disabled",u="keyboard-disabled",g="mousewheel-disabled",m="animate-onclick",v="vertical",f="horizontal",b=(e,n,t,o,i)=>{let r=n-e;return 0===r?t:(o-t)*(i-e)/r+t},w=e=>!isNaN(parseFloat(e))&&isFinite(e),k=(e,n)=>w(e)?Number(e):n,y=(e,n)=>0===n?0:Math.round(e/n)*n,E=e=>null!=e&&("boolean"==typeof e?e:"true"===e.trim().toLowerCase()),x=(e,n,t)=>{let o,i,r,a,l=0,s=!1,c=n=>{if(!s){switch(n.key){case"ArrowLeft":n.preventDefault(),"function"==typeof o&&o(t);break;case"ArrowRight":n.preventDefault(),"function"==typeof i&&i(t);break;case"ArrowUp":n.preventDefault(),"function"==typeof r&&r(t);break;case"ArrowDown":n.preventDefault(),"function"==typeof a&&a(t)}((e,n)=>{e.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:n}}))})(e,n)}},d=()=>{s||((e,n)=>{e.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:n}}))})(e,n)};return n.className=`pointer pointer-${t}`,n.addEventListener("keydown",c),n.addEventListener("click",d),{$pointer:n,get percent(){return l},get disabled(){return s},set disabled(e){(e=>{s=e,n.classList.toggle("disabled",s),s?n.setAttribute("aria-disabled","true"):n.hasAttribute("aria-disabled")&&n.removeAttribute("aria-disabled")})(e)},updatePosition:(e,t,o,i,r,a)=>{let s=l;void 0!==o&&e>o&&(e=o),void 0!==t&&e<t&&(e=t),l=e;let c=l;return(i===v&&a||i===f&&r)&&(c=100-c),i===v?n.style.top=`${c}%`:n.style.left=`${c}%`,s!==l},isClicked:e=>e===n||n.contains(e),setCallbacks:(e,n,t,l)=>{o=e,i=n,r=t,a=l},setAttr:(e,t)=>{null==t?n.removeAttribute(e):n.setAttribute(e,t)},getAttr:e=>n.getAttribute(e),destroy:()=>{n.removeEventListener("keydown",c),n.removeEventListener("click",d),n.remove()}}},I="--animate-onclick",A=(e,n,t)=>{let o=new Map;for(let i of e.attributes){let e=i.nodeName.trim().toLowerCase();if(!n.test(e))continue;let r=e.replace(/\D/g,"").trim(),a=""===r||"0"===r||"1"===r?0:k(r,0)-1,l=t&&"function"==typeof t?t(i.value):i.value;o.set(a,l)}return o},M=[["--width","slider-width","sliderWidth",null],["--height","slider-height","sliderHeight",null],["--panel-bg-border-radius","slider-radius","sliderRadius",null],["--panel-bg","slider-bg","sliderBg",null],["--panel-bg-hover","slider-bg-hover","sliderBgHover",null],["--panel-bg-fill","slider-bg-fill","sliderBgFill",null],["--pointer-width","pointer-width","pointer#Width",/^pointer([0-9]*)-width$/],["--pointer-height","pointer-height","pointer#Height",/^pointer([0-9]*)-height$/],["--pointer-border-radius","pointer-radius","pointer#Radius",/^pointer([0-9]*)-radius$/],["--pointer-bg","pointer-bg","pointer#Bg",/^pointer([0-9]*)-bg$/],["--pointer-bg-hover","pointer-bg-hover","pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],["--pointer-bg-focus","pointer-bg-focus","pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],["--pointer-shadow","pointer-shadow","pointer#Shadow",/^pointer([0-9]*)-shadow$/],["--pointer-shadow-hover","pointer-shadow-hover","pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],["--pointer-shadow-focus","pointer-shadow-focus","pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],["--pointer-border","pointer-border","pointer#Border",/^pointer([0-9]*)-border$/],["--pointer-border-hover","pointer-border-hover","pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],["--pointer-border-focus","pointer-border-focus","pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],S="animate-on-click",C="range-dragging",_=(e,n,t,o,i,r,a)=>{try{Object.defineProperty(e,o,{configurable:!0,get(){if(!n)return;let e=n.pointers[t];if(!e)return;let o=n.getTextValue(e.percent);return w(o)?k(o,o):o},set:e=>{n.pointers[t]?null==n||n.setValue(e,t):null==n||n.addPointer(e)}}),Object.defineProperty(e,i,{configurable:!0,get(){var e,o;return null!=(o=null==(e=null==n?void 0:n.pointers[t])?void 0:e.getAttr("aria-label"))?o:void 0},set:e=>{!n||n.setAriaLabel(t,e)}}),Object.defineProperty(e,r,{configurable:!0,get(){var e,o;return null!=(o=null==(e=null==n?void 0:n.styles)?void 0:e.pointerShapes[t])?o:null},set:e=>{!n||!n.styles||n.styles.setPointerShape(t,e)}}),Object.defineProperty(e,a,{configurable:!0,get(){var e;return null!=(e=null==n?void 0:n.pointers[t].disabled)&&e},set:e=>{if(!n)return;let o=null==n?void 0:n.pointers[t];!o||(o.disabled=e)}})}catch(e){console.error(e)}},O=(e,n,t)=>{var o;let i=null==(o=t.shadowRoot)?void 0:o.querySelector(".container");if(i)for(let t of e)n?i.prepend(t.$pointer):i.append(t.$pointer)},T=100,L="0.3s",$=class extends HTMLElement{constructor(){super(),t(this,"slider"),t(this,"_externalCSSList",[]),t(this,"_observer",null),this.attachShadow({mode:"open"})}set step(e){this.slider&&this.slider.setStep(e)}get step(){var e;return null==(e=this.slider)?void 0:e.step}set disabled(e){this.slider&&(this.slider.disabled=e)}get disabled(){var e,n;return null!=(n=null==(e=this.slider)?void 0:e.disabled)&&n}set data(e){var n;null==(n=this.slider)||n.setData(e)}get data(){var e;return null==(e=this.slider)?void 0:e.data}set min(e){var n;null==(n=this.slider)||n.setMin(e)}get min(){var e;return null==(e=this.slider)?void 0:e.min}set max(e){var n;null==(n=this.slider)||n.setMax(e)}get max(){var e;return null==(e=this.slider)?void 0:e.max}set round(e){!this.slider||(this.slider.round=e)}get round(){var e,n;return null!=(n=null==(e=this.slider)?void 0:e.round)?n:2}set type(e){!this.slider||(this.slider.type=null!=e?e:f)}get type(){var e;return(null==(e=this.slider)?void 0:e.type)||f}set pointersOverlap(e){!this.slider||(this.slider.pointersOverlap=e)}get pointersOverlap(){var e,n;return null!=(n=null==(e=this.slider)?void 0:e.pointersOverlap)&&n}set pointersMinDistance(e){!this.slider||(this.slider.pointersMinDistance=e)}get pointersMinDistance(){var e,n;return null!=(n=null==(e=this.slider)?void 0:e.pointersMinDistance)?n:0}set pointersMaxDistance(e){!this.slider||(this.slider.pointersMaxDistance=e)}get pointersMaxDistance(){var e,n;return null!=(n=null==(e=this.slider)?void 0:e.pointersMaxDistance)?n:1/0}set theme(e){!this.slider||!this.slider.styles||(this.slider.styles.theme=e)}get theme(){var e,n,t;return null!=(t=null==(n=null==(e=this.slider)?void 0:e.styles)?void 0:n.theme)?t:null}set rtl(e){!this.slider||(this.slider.rightToLeft=e)}get rtl(){var e,n;return null!=(n=null==(e=this.slider)?void 0:e.rightToLeft)&&n}set btt(e){!this.slider||(this.slider.bottomToTop=e)}get btt(){var e,n;return null!=(n=null==(e=this.slider)?void 0:e.bottomToTop)&&n}set keyboardDisabled(e){!this.slider||(this.slider.keyboardDisabled=e)}get keyboardDisabled(){var e,n;return null!=(n=null==(e=this.slider)?void 0:e.keyboardDisabled)&&n}set mousewheelDisabled(e){!this.slider||(this.slider.mousewheelDisabled=e)}get mousewheelDisabled(){var e,n;return null!=(n=null==(e=this.slider)?void 0:e.mousewheelDisabled)&&n}set animateOnClick(e){!this.slider||(this.slider.animateOnClick=e)}get animateOnClick(){var e;return null==(e=this.slider)?void 0:e.animateOnClick}get rangeDragging(){var e,n;return null!=(n=null==(e=this.slider)?void 0:e.rangeDragging)&&n}set rangeDragging(e){this.slider&&(this.slider.rangeDragging=E(e))}get externalCSSList(){return this._externalCSSList}addPointer(e){var n,t;if(!this.slider)return;let o=null!=(t=null==(n=this.slider)?void 0:n.addPointer(e))?t:0;_(this,this.slider,o,`value${o+1}`,`ariaLabel${o+1}`,`pointerShape${o+1}`,`pointer${o+1}Disabled`)}removePointer(){var e;!this.slider||null==(e=this.slider)||e.removePointer()}addCSS(e){if(!this.shadowRoot)return;let n=document.createElement("style");n.textContent=e,this.shadowRoot.appendChild(n)}connectedCallback(){var e,t;if(!this.shadowRoot)return;this._externalCSSList=(e=>{if(!e)return null;let n=e.getAttribute("css-links");if(!n)return null;let t=n.split(";"),o=[];for(let e of t)""!==e.trim()&&o.push(e.trim());return o})(this),this.shadowRoot.innerHTML=((e,n)=>` ${n&&n.length>0?n.map(e=>`<link rel="stylesheet" href="${e}" />`).join(""):""} <style> :host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`)(0,this._externalCSSList);let $=null==(e=this.shadowRoot)?void 0:e.querySelector(".pointer");if(!$)return;let D=null==(t=this.shadowRoot)?void 0:t.getElementById("range-slider");if(!D)return;let R=((e,n)=>{let t=new Map,o=/^value([0-9]*)$/;for(let n of e.attributes){let e=n.nodeName.trim().toLowerCase();if(!o.test(e))continue;let i=e.replace("value","").trim(),r=""===i||"0"===i||"1"===i?0:k(i,0)-1,a=w(n.value)?k(n.value,0):n.value;t.set(r,a)}let i=Math.max(...Array.from(t.keys())),r=[];r.push([x(e,n,0),t.get(0)]);let a=n;for(let o=1;o<=i;o++){let i=n.cloneNode(!0);a.after(i),a=i,r.push([x(e,i,o),t.get(o)])}return r})(this,$);this.slider=((e,t,_)=>{let $,D,R,N,z=_.map(e=>e[0]),P=null,B=null,H=null,F=null,G=0,V=T,U=f,W=2,j=!1,Z=!1,Q=!1,q=0,Y=1/0,X=!1,K=!1,J=!1,ee=!1,ne=L,te=[],oe=n=>{K||(n.preventDefault&&n.preventDefault(),ae(n),window.addEventListener("mousemove",ae),window.addEventListener("mouseup",ie),((e,n)=>{e.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:n}}))})(e,n))},ie=n=>{K||(R=void 0,N=void 0,window.removeEventListener("mousemove",ae),window.removeEventListener("mouseup",ie),ne&&t.classList.add(S),((e,n)=>{e.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:n}}))})(e,n))},re=()=>z.findIndex(e=>P===e&&!e.disabled),ae=e=>{let n;if(U===v){let{height:o,top:i}=t.getBoundingClientRect(),r=-1!==e.type.indexOf("mouse")?e.clientY:e.touches[0].clientY;n=100*Math.min(Math.max(0,r-i),o)/o}else{let{width:o,left:i}=t.getBoundingClientRect(),r=-1!==e.type.indexOf("mouse")?e.clientX:e.touches[0].clientX;n=100*Math.min(Math.max(0,r-i),o)/o}if((j||Z)&&(n=100-n),P=((e,n)=>{if(z.length<=0)return;if(1===z.length)return z[0].isClicked(e)&&ne&&t.classList.remove(S),z[0];let o=ue(e);if(X){let e=n,i=be(e);void 0!==i&&(e=y(e,i)),o?(R=e,N=0,ne&&t.classList.remove(S)):void 0!==R&&(N=e-R,R=e)}if(!pe(e)&&!o){for(let n of z)if(n.isClicked(e)&&!n.disabled)return ne&&t.classList.remove(S),n;for(let e of z)if(P===e)return e}let i=1/0,r=null;for(let e of z){if(e.disabled)continue;let t=Math.abs(n-e.percent);t<i&&(i=t,r=e)}return r})(e.target,n),P&&((e,n)=>{if(n&&!(e.length<=1)){for(let n of e)n.$pointer.style.zIndex=20..toString();n.$pointer.style.zIndex=40..toString()}})(z,P),X&&z.length>1&&void 0!==N){let e=z[0],n=z[z.length-1],t=e.percent+N<0,o=n.percent+N>100;if(t||o)return;for(let e=0;e<z.length;e++)Ge(e,z[e].percent+N);return}let o=re();-1!==o&&(Ge(o,n),null==P||P.$pointer.focus())},le=n=>{if(K||document.activeElement!==e||(null==P?void 0:P.disabled))return;n.stopPropagation(),n.preventDefault();let t=n.deltaY<0,o=j||Z,i=t?!o:o,r=re();-1!==r&&(i?ge(r,z[r].percent):me(r,z[r].percent))},se=e=>{K||J||(U===v?Ge(e,Z?100:0):j?me(e,z[e].percent):ge(e,z[e].percent))},ce=e=>{K||J||(U===v?Ge(e,Z?0:100):j?ge(e,z[e].percent):me(e,z[e].percent))},de=e=>{K||J||(U===v?Z?me(e,z[e].percent):ge(e,z[e].percent):Ge(e,j?100:0))},he=e=>{K||J||(U===v?Z?ge(e,z[e].percent):me(e,z[e].percent):Ge(e,j?0:100))},pe=e=>e.classList.contains("panel"),ue=e=>e.classList.contains("panel-fill"),ge=(e,n)=>{if(void 0===n)return;let t=be(n);null==t&&(t=1),(n-=t)<0&&(n=0),Ge(e,n)},me=(e,n)=>{if(void 0===n)return;let t=be(n);null==t&&(t=1),(n+=t)>100&&(n=100),Ge(e,n)},ve=()=>{!F||F.update({percents:Ae(),values:Me(),$pointers:Se(),min:Ce(),max:_e(),data:Oe(),step:Ee(),round:Le(),type:Te(),textMin:ke(),textMax:ye(),rightToLeft:Re(),bottomToTop:Ne(),pointersOverlap:He(),pointersMinDistance:$e(),pointersMaxDistance:De(),rangeDragging:Fe(),disabled:ze(),keyboardDisabled:Pe(),mousewheelDisabled:Be()})},fe=()=>{ve()},be=e=>{let n;if("function"==typeof $){let t=b(0,100,G,V,e);n=$(t,e)}else n=$;if(w(n)){let e=V-G;return n=0===e?0:100*n/e,n}},we=e=>{if(void 0===e)return;let t=b(0,100,G,V,e);return void 0!==D?D[Math.round(t)]:((e,t=1/0)=>{if(t===1/0)return e;let o=n(10,t);return Math.round(e*o)/o})(t,W)},ke=()=>void 0!==D?D[G]:G,ye=()=>void 0!==D?D[V]:V,Ee=()=>$,xe=e=>{var n;return e<=0||Q?ke():null!=(n=we(z[e-1].percent))?n:""},Ie=e=>{var n;return z.length<=1||e>=z.length-1||Q?ye():null!=(n=we(z[e+1].percent))?n:""},Ae=()=>z.map(e=>e.percent),Me=()=>z.map(e=>we(e.percent)),Se=()=>z.map(e=>e.$pointer),Ce=()=>G,_e=()=>V,Oe=()=>D,Te=()=>U,Le=()=>W,$e=()=>q,De=()=>Y,Re=()=>j,Ne=()=>Z,ze=()=>K,Pe=()=>J,Be=()=>ee,He=()=>Q,Fe=()=>X,Ge=(n,t)=>{if(void 0===t)return;let o=be(t);void 0!==o&&(t=y(t,o));let i=z[n];if(!i)return;let r=i.updatePosition(t,(e=>{if(!(Q||z.length<=1||V===G)){if(0===e){let n=100*Y/(V-G);return Math.max(0,z[e+1].percent-n)}{let n=100*q/(V-G);return Math.min(z[e-1].percent+n,100)}}})(n),(e=>{if(!(Q||z.length<=1||V===G)){if(e===z.length-1){let n=100*Y/(V-G);return Math.min(z[e-1].percent+n,100)}{let n=100*q/(V-G);return Math.max(0,z[e+1].percent-n)}}})(n),U,j,Z);null==B||B.updatePosition(U,z.map(e=>e.percent),j,Z),ve();for(let e of z){let n=we(e.percent);void 0!==n&&(e.setAttr("aria-valuenow",n.toString()),e.setAttr("aria-valuetext",n.toString()))}Ue(),r&&((e,n)=>{if(!n||n.length<=0)return;let t=n.map(e=>w(e)?k(e,e):e),o={values:t||[]};o.value=t[0],o.value0=t[0],o.value1=t[0];for(let e=1;e<t.length;e++)o[`value${e+1}`]=t[e];e.dispatchEvent(new CustomEvent("change",{detail:o}))})(e,z.map(e=>we(e.percent)))},Ve=()=>{for(let e=0;e<z.length;e++)Ge(e,z[e].percent)},Ue=()=>{var e,n;for(let t=0;t<z.length;t++){let o=z[t];o.setAttr("aria-valuemin",(null!=(e=xe(t))?e:"").toString()),o.setAttr("aria-valuemax",(null!=(n=Ie(t))?n:"").toString())}},We=e=>{G=k(e,0),G>V&&(V=G+T),Ve()},je=e=>{V=k(e,T),V<G&&(V=G+T),Ve()},Ze=e=>{Q=!0;for(let n=0;n<e.length;n++)Qe(e[n],n);Q=!1;for(let n=0;n<e.length;n++)Qe(e[n],n)},Qe=(e,n)=>{let t;void 0!==D?(t=null==e?0:((e,n)=>n?n.findIndex(n=>n===e||n.toString().trim()===e.toString().trim()):-1)(e,D),-1===t&&(t=0)):(t=k(e,G),t<G&&(t=G),t>V&&(t=V));let o=b(G,V,0,100,t);Ge(n,o)},qe=e=>{if(null!=e){if("function"==typeof e)return $=e,void Ve();if(w(e)){$=k(e,1);let n=Math.abs(V-G);return $>n&&($=void 0),void Ve()}$=void 0}else $=void 0},Ye=e=>{Q=e,Ve()},Xe=e=>{(!w(e)||e<0)&&(e=0),q=e},Ke=e=>{(!w(e)||e<0)&&(e=1/0),Y=e},Je=e=>{K=e,t.classList.toggle("disabled",K),K?t.setAttribute("aria-disabled","true"):t.hasAttribute("aria-disabled")&&t.removeAttribute("aria-disabled")},en=e=>{J=e},nn=e=>{ee=e,ee?document.removeEventListener("wheel",le):document.addEventListener("wheel",le,{passive:!1})},tn=e=>{null!=e?(D=(e=>{if(null==e)return;if(Array.isArray(e))return e;if(""===e.trim())return;let n=e.split(","),t=[],o=!0;for(let e=0;e<n.length;e++){let i=n[e].trim();""!==i&&(t.push(i),w(i)||(o=!1))}return o?t.map(e=>Number(e)):t})(e),void 0===D||D.length<=0?D=void 0:(We(0),je(D.length-1),void 0===$&&qe(1))):D=void 0},on=n=>{var t;U="string"==typeof n&&n.trim().toLowerCase()===v?v:f;let o=null==(t=e.shadowRoot)?void 0:t.querySelector(".range-slider-box");if(!o)return;o.className=`range-slider-box type-${U}`,Ve();let i=U===v?"vertical":"horizontal";for(let e of z)e.setAttr("aria-orientation",i)},rn=n=>{j=n,z.length>1&&O(z,j,e),Ve(),ve()},an=n=>{Z=n,z.length>1&&O(z,Z,e),Ve(),ve()},ln=e=>{W=k(e,2),W<0&&(W=2),ve()},sn=e=>{null==e||"false"===e.toString().trim().toLowerCase()?(ne=void 0,t.style.removeProperty(I),t.classList.remove(S)):(ne=e.toString(),t.style.setProperty(I,ne),t.classList.add(S))},cn=(e,n)=>{let t=z[e];!t||(t.setAttr("aria-label",n),te[e]=n)},dn=e=>{if(R=void 0,z.length<=1)return X=!1,void t.classList.remove(C);X=e,t.classList.toggle(C,X)};return(()=>{var n,f;for(let e of z)e.setCallbacks(se,ce,de,he);let b=null==(n=e.shadowRoot)?void 0:n.querySelector(".panel-fill");b&&(B=(e=>({updatePosition:(n,t,o,i)=>{if(t.length<=0)return;let r=1===t.length,a=t[0],l=t[t.length-1];n===v?(e.style.removeProperty("width"),e.style.removeProperty("right"),e.style.removeProperty("left"),e.style.height=r?`${a}%`:`${Math.abs(a-l)}%`,i?(e.style.bottom="0%",e.style.top=r?"auto":`${Math.min(100-l,100-a)}%`):(e.style.bottom="auto",e.style.top=r?"0%":`${Math.min(a,l)}%`)):(e.style.removeProperty("height"),e.style.removeProperty("top"),e.style.removeProperty("bottom"),e.style.width=r?`${a}%`:`${Math.abs(a-l)}%`,o?(e.style.right="0%",e.style.left=r?"auto":`${Math.min(100-l,100-a)}%`):(e.style.right="auto",e.style.left=r?"0%":`${Math.min(a,l)}%`))}}))(b)),on(e.getAttribute(d)),rn(E(e.getAttribute("rtl"))),an(E(e.getAttribute("btt"))),((e,n)=>{G=void 0!==D?0:k(e,0),V=void 0!==D?D.length-1:k(n,T),We(G),je(V)})(e.getAttribute("min"),e.getAttribute("max")),qe(e.getAttribute(s)),tn(e.getAttribute(l)),Ze(_.map(e=>e[1])),Ye(E(e.getAttribute(o))),Xe(k(e.getAttribute(i),0)),Ke(k(e.getAttribute(r),1/0)),dn(E(e.getAttribute(a))),ln(k(e.getAttribute(c),2)),(()=>{Je(E(e.getAttribute(p))),J=E(e.getAttribute(u)),ee=E(e.getAttribute(g));let n=A(e,/^pointer([0-9]*)-disabled$/,e=>E(e));for(let e of n){let n=e[0];!z[n]||(z[n].disabled=e[1])}})(),(()=>{let n=A(e,/^aria-label([0-9]*)$/);for(let e of n){let n=e[0];cn(n,e[1])}})(),H=((e,n,t)=>{let o=null,i=[],r=new Map,a=(e,t=n)=>{let o=[...t.classList];for(let t of o)t.startsWith(e)&&n.classList.remove(t)},l=()=>{a("shape");let e=n.querySelectorAll(".pointer");for(let n of e)a("shape",n)},s=e=>{o=e,a("theme-"),"string"==typeof e&&n.classList.add(`theme-${e}`)},c=()=>{if(l(),!(i.length<=0)){n.classList.add("shape",`shape-${i[0]}`);for(let e=1;e<i.length;e++){let t=i[e];if(!t)continue;let o=n.querySelector(`.pointer-${e}`);!o||o.classList.add("shape",`shape-${t}`)}}},d=(e,n)=>`${e}-${n}`,p=(e,o,i)=>{let a=t[i];if(!a)return;let l=0===i?n:a.$pointer;if(null==o)return r.has(d(e,i))&&r.delete(d(e,i)),void l.style.removeProperty(e);r.set(d(e,i),o),l.style.setProperty(e,o)},u=(e,n)=>r.get(d(e,n));return(()=>{for(let n of M){let[o,i,r,a]=n;if(a){let n=A(e,a);for(let e of n){let n=e[0],t=e[1];p(o,t,n)}}else{let n=e.getAttribute(i);p(o,n,0)}let l=[];if(-1===r.indexOf("#"))l.push([r,0]);else{l.push([r.replace("#",""),0]),l.push([r.replace("#","0"),0]),l.push([r.replace("#","1"),0]);for(let e=1;e<t.length;e++)l.push([r.replace("#",(e+1).toString()),e])}for(let n of l)try{let t=n[0],i=n[1];Object.prototype.hasOwnProperty.call(e,t)||Object.defineProperty(e,t,{get:()=>u(o,i),set:e=>{p(o,e,i)}})}catch(e){console.error(e)}}s(e.getAttribute(h)),(()=>{l();let n=A(e,/^pointer([0-9]*)-shape$/);if(!(n.size<=0)){for(let e of n){let n=e[0];i[n]=e[1]}c()}})()})(),{setStyle:p,getStyle:u,get theme(){return o},set theme(e){s(e)},get pointerShapes(){return i},setPointerShape:(e,n)=>{i[e]=n,c()}}})(e,t,z),sn(null!=(f=e.getAttribute(m))?f:L),t.addEventListener("mousedown",oe),t.addEventListener("mouseup",ie),t.addEventListener("touchmove",ae),t.addEventListener("touchstart",ae),ee||document.addEventListener("wheel",le,{passive:!1}),F=((e,n,t,o)=>{let i=[],r=n=>{if(n.gettersAndSetters)for(let t of n.gettersAndSetters)if(t.name&&t.attributes)try{Object.prototype.hasOwnProperty.call(e,t.name)||Object.defineProperty(e,t.name,t.attributes)}catch(e){console.error("defineSettersGetters error:",e)}},a=n=>{var t;if(!n.css)return;let o=null==(t=e.shadowRoot)?void 0:t.querySelector("style");!o||(o.innerHTML+=n.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let l of window.tcRangeSliderPlugins){let s=l();i.push(s),s.init&&"function"==typeof s.init&&(s.init(e,n,t,o),r(s),a(s))}},update:e=>{for(let n of i)n.update&&"function"==typeof n.update&&n.update(e)},onAttrChange:(e,n)=>{for(let t of i)t.onAttrChange&&"function"==typeof t.onAttrChange&&t.onAttrChange(e,n)},destroy:()=>{for(let e of i)e.destroy&&"function"==typeof e.destroy&&e.destroy()}}})(e,fe,{setValues:Ze,setMin:We,setMax:je,setStep:qe,setPointersOverlap:Ye,setPointersMinDistance:Xe,setPointersMaxDistance:Ke,setDisabled:Je,setType:on,setRightToLeft:rn,setBottomToTop:an,setRound:ln,setKeyboardDisabled:en,setMousewheelDisabled:nn,setRangeDragging:dn,setData:tn},{getPercents:Ae,getValues:Me,getPointerElements:Se,getMin:Ce,getMax:_e,getStep:Ee,getData:Oe,getType:Te,getRound:Le,getTextMin:ke,getTextMax:ye,isRightToLeft:Re,isBottomToTop:Ne,isDisabled:ze,isKeyboardDisabled:Pe,isMousewheelDisabled:Be,isPointersOverlap:He,isRangeDraggingEnabled:Fe,getPointersMinDistance:$e,getPointersMaxDistance:De}),F.init()})(),{get pointers(){return z},get styles(){return H},get pluginsManager(){return F},get min(){return ke()},get max(){return ye()},get step(){return Ee()},get pointersOverlap(){return He()},set pointersOverlap(e){Ye(e)},get pointersMinDistance(){return $e()},set pointersMinDistance(e){Xe(e)},get pointersMaxDistance(){return De()},set pointersMaxDistance(e){Ke(e)},get disabled(){return ze()},set disabled(e){Je(e)},get data(){return Oe()},get type(){return Te()},set type(e){on(e)},get rightToLeft(){return Re()},set rightToLeft(e){rn(e)},get bottomToTop(){return Ne()},set bottomToTop(e){an(e)},get round(){return Le()},set round(e){ln(e)},get animateOnClick(){return ne},set animateOnClick(e){sn(e)},get keyboardDisabled(){return Pe()},set keyboardDisabled(e){en(e)},get mousewheelDisabled(){return Be()},set mousewheelDisabled(e){nn(e)},get rangeDragging(){return Fe()},set rangeDragging(e){dn(e)},setMin:We,setMax:je,setValue:Qe,setStep:qe,setData:tn,getTextValue:we,setAriaLabel:cn,getAriaLabel:e=>te[e],addPointer:n=>{let t=z.length,o=z[t-1].$pointer,i=o.cloneNode(!0);o.after(i);let r=x(e,i,t);return r.setCallbacks(se,ce,de,he),z.push(r),Qe(n,t),Ve(),ve(),t},removePointer:()=>{let e=z.length,n=z[e-1];return n?(n.destroy(),z.pop(),z.length<=1&&dn(!1),Ve(),ve(),e-1):-1},destroy:()=>{t.removeEventListener("mousedown",oe),t.removeEventListener("mouseup",ie),t.removeEventListener("touchmove",ae),t.removeEventListener("touchstart",ae),document.removeEventListener("wheel",le);for(let e of z)e.destroy();null==F||F.destroy()}}})(this,D,R),((e,n)=>{let t=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let e=2;e<10;e++)t.push([`value${e}`,`ariaLabel${e}`,`pointer${e}Shape`,`pointer${e}Disabled`,e-1]);for(let o of t)_(e,n,o[4],o[0],o[1],o[2],o[3])})(this,this.slider),this._observer=new MutationObserver(e=>{e.forEach(e=>{var n;if(!this.slider||"attributes"!==e.type)return;let t=e.attributeName;!t||((e,n,t)=>{let v=M.find(([e,t,o,i])=>t.replace("#","")===n.replace(/\d+/g,""));if(v&&e.styles){let[o,i,r,a]=v,l=n.replace(/\D/g,"").trim(),s=""===l||"0"===l||"1"===l?0:k(l,0)-1;return void e.styles.setStyle(o,t,s)}switch(e&&e.pluginsManager&&e.pluginsManager.onAttrChange(n,t),n){case"min":e.setMin(t);break;case"max":e.setMax(t);break;case s:e.setStep(t);break;case o:e.pointersOverlap=E(t);break;case i:e.pointersMinDistance=k(t,0);break;case a:e.rangeDragging=E(t);break;case r:e.pointersMaxDistance=k(t,1/0);break;case p:e.disabled=E(t);break;case u:e.keyboardDisabled=E(t);break;case g:e.mousewheelDisabled=E(t);break;case l:e.setData(t);break;case d:e.type=t;break;case"rtl":e.rightToLeft=E(t);break;case"btt":e.bottomToTop=E(t);break;case c:e.round=k(t,2);break;case h:e.styles&&(e.styles.theme=t);break;case m:e.animateOnClick=t}let f=null;if(/^value([0-9]*)$/.test(n)&&(f="value"),/^pointer([0-9]*)-disabled$/.test(n)&&(f="pointer-disabled"),/^aria-label([0-9]*)$/.test(n)&&(f="aria-label"),/^pointer([0-9]*)-shape$/.test(n)&&(f="pointer-shape"),!f)return;let b=n.replace(/\D/g,"").trim(),w=""===b||"0"===b||"1"===b?0:k(b,0)-1;switch(f){case"value":e.setValue(t,w);break;case"pointer-disabled":{let n=null==e?void 0:e.pointers[w];if(!n)return;n.disabled=E(t);break}case"aria-label":e.setAriaLabel(w,t);break;case"pointer-shape":e.styles&&e.styles.setPointerShape(w,t)}})(this.slider,t,null!=(n=this.getAttribute(t))?n:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},D=$;window.tcRangeSlider=D,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",D),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends D{})})(),Jt=Object.defineProperty,eo=Object.getOwnPropertyDescriptor,no=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?eo(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(n,t,a):r(a))||a);return o&&a&&Jt(n,t,a),a};let ed=class extends Kr{constructor(){super(...arguments),this.mangaPages=0,this.begin=1,this.timeoutMs=3e3,this.status="initial-prompt"}connectedCallback(){super.connectedCallback(),"initial-prompt"===this.status&&(this.timeoutId=window.setTimeout(()=>{this.handleStart()},this.timeoutMs))}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this.timeoutId)}handleStart(){window.clearTimeout(this.timeoutId),this.dispatchEvent(new CustomEvent("start",{detail:null}))}handleLateStart(e,n){this.dispatchEvent(new CustomEvent("start",{detail:{begin:e,end:n}}))}handleButtonCLick(){this.status="late-start-prompt"}handleDialogClose(e){e.stopPropagation(),window.clearTimeout(this.timeoutId),this.status="late-start-button"}render(){switch(this.status){case"late-start-button":return this.renderLateStartButton();case"late-start-prompt":return this.renderLateStartPrompt();default:return this.renderInitialPrompt()}}renderInitialPrompt(){return Ti`
      <mov-dialog
        ?open=${"initial-prompt"===this.status}
        icon="info"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${B("STARTING")}</span>
        <div style="padding: 1rem;">${B("WAITING")}</div>
        <div
          slot="footer"
          style="display: flex; justify-content: space-between; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${wr.red[700]}; --mov-color-on-loud: white;"
          >
            Cancel
          </mov-button>
          <mov-button
            @click=${this.handleStart}
            style="--mov-color-fill-loud: ${wr.green[700]}; --mov-color-on-loud: white;"
          >
            Start Now
          </mov-button>
        </div>
      </mov-dialog>
    `}renderLateStartButton(){return Ti`
      <button
        id="StartMOV"
        @click=${this.handleButtonCLick}
      >
        ${B("BUTTON_START")}
      </button>
    `}renderLateStartPrompt(){let e=this.begin,n=this.mangaPages;return Ti`
      <mov-dialog
        ?open=${"late-start-prompt"===this.status}
        icon="question"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${B("STARTING")}</span>
        <div style="padding: 1rem;">
          ${B("CHOOSE_BEGINNING")}
          <div
            id="pageInputGroup"
            style="padding: 1rem 0;"
          >
            <tc-range-slider
              id="pagesSlider"
              theme="glass"
              css-links="https://cdn.jsdelivr.net/npm/toolcool-range-slider@4.0.28/dist/plugins/tcrs-themes.min.css"
              min="1"
              max="${this.mangaPages}"
              round="0"
              step="1"
              value1="${e}"
              value2="${n}"
              data="${qe(this.mangaPages).join(", ")}"
              marks="true"
              marks-count="11"
              marks-values-count="11"
              generate-labels="true"
              slider-width="100%"
              pointers-overlap="false"
              generate-labels-text-color="var(--mov-color-on-loud)"
              @change=${t=>{[e,n]=[t.detail.value1,t.detail.value2]}}
            ></tc-range-slider>
          </div>
        </div>
        <div
          slot="footer"
          style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${wr.red[700]}; --mov-color-on-loud: white;"
          >
            Close
          </mov-button>
          <mov-button
            @click=${()=>this.handleLateStart(e,n)}
            style="--mov-color-fill-loud: ${wr.green[700]}; --mov-color-on-loud: white;"
          >
            Run
          </mov-button>
        </div>
      </mov-dialog>
    `}};ed.styles=[Dr("#StartMOV {\n  all: revert;\n  backface-visibility: hidden;\n  font-size: 2rem;\n  color: #fff;\n  cursor: pointer;\n  margin: 0 auto;\n  padding: 0.5rem 1rem;\n  text-align: center;\n  border: none;\n  border-radius: 10px;\n  min-height: 50px;\n  width: 80%;\n  position: fixed;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 105000;\n  transition: all 0.4s ease-in-out;\n  background-size: 300% 100%;\n  background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);\n  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\n}\n\n#StartMOV:hover {\n  background-position: 100% 0;\n  transition: all 0.4s ease-in-out;\n}\n\n#StartMOV:focus {\n  outline: none;\n}\n")],no([Y({type:Number,reflect:!0})],ed.prototype,"mangaPages",2),no([Y({type:Number,reflect:!0})],ed.prototype,"begin",2),no([Y({type:Number})],ed.prototype,"timeoutMs",2),no([Y({type:String,reflect:!0})],ed.prototype,"status",2),ed=no([ea("script-startup")],ed);const nd=e=>{e.getAttributeNames().forEach(n=>{e?.removeAttribute(n)})};to=Object.freeze,oo=Object.defineProperty,io=Object.getOwnPropertyDescriptor,ro=(e,n,t,o)=>{var i,r,a=o>1?void 0:o?io(n,t):n;for(i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o?r(n,t,a):r(a))||a);return o&&a&&oo(n,t,a),a},ao=e=>to(oo(e,"raw",{value:to(e.slice())}));let td=class extends Kr{constructor(){super(...arguments),this.loadMode="wait"}async start(e,n){this.manga&&(((...e)=>{e?.forEach(nd),e?.forEach(Tn)})(document.documentElement,document.head,document.body),window.scrollTo(0,0),N("manga",{...this.manga,begin:e??this.manga.begin,pages:n??this.manga.pages}),document.documentElement.setAttribute("mov",""))}firstUpdated(){"always"===this.loadMode&&this.start(),async function(){await r(()=>void 0!==R("manga")),Ue(),window.addEventListener("resize",()=>{N("device",ii())}),window.addEventListener("wheel",_.throttle(he,500)),mn()}(),async function(){await r(()=>void 0!==R("manga"));const e=R("manga"),i=e.begin??1;v("Loading Images"),v(`Intervals: ${e.timer??T("throttlePageLoad")??"Default(1000)"}`),v(`Lazy: ${e.lazy??T("lazyLoadImages")}, Starting from: ${T("lazyStart")}`),De(),t(e)?(v("Method: Images:",e.listImages),kn(i,e)):o(e)?(v("Method: Pages:",e.listPages),wn(i,e)):function(e){return"bruteForce"in e&&!n(e.bruteForce)}(e)?(v("Method: Brute Force"),e.bruteForce({begin:i,addImg:fn,loadImages(n){kn(i,{...e,listImages:n})},loadPages(n,t,o){wn(i,{...e,listPages:n,img:t,lazyAttr:o})},wait:T("throttlePageLoad")})):m("No Loading Method Found"),ur.listen((n,i,r)=>{if("currentPage"===r&&n.currentPage>i.currentPage)for(let i=n.currentPage;i<n.currentPage+5;i++)void 0===n.images?.[i]?.src&&(t(e)?fn(e,i,e.listImages[i-1]):o(e)&&bn(e,i,e.listPages[i-1]))})}()}render(){const e=R("manga"),n=R("dialog");return Ti`
      <style>
        ${qc()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${Vl({[T("colorScheme")]:!0,hideControls:T("hidePageControls"),bookmarked:!!G(),[R("device")]:!0})}"
        style="${ql({[`padding-${T("navbar")}`]:"34px"})}"
        .locale="${T("locale")}"
      >
        ${e?Ti`
              <reader-header .manga=${e}></reader-header>
              ${(e=>Ti`
  <main
    id="Chapter"
    ${tr(R("chapter"))}
    class="${Vl({fitWidthIfOversize:T("fitWidthIfOversize"),[T("viewMode")]:!0,separator:"Vertical"===T("viewMode")})}"
    @wheel=${e=>{var n;"FluidLTR"===T("viewMode")?Ye(e):"FluidRTL"===T("viewMode")&&(n=e).deltaY&&(n.currentTarget.scrollLeft-=n.deltaY-n.deltaX,n.preventDefault())}}
  >
    ${Kc(e.pages,e.begin??0)}
  </main>
`)(e)}
              <navbar-thumbnails
                      .mode=${T("navbar")}
                    ></navbar-thumbnails>
              <manga-pagination
                        .mode="${T("pagination")}"
                      .startPage=${e.begin}
                      .totalPages=${e.pages}
                      .currentPage=${R("currentPage")}
                      .next=${e.next}
                      .prev=${e.prev}
                    ></manga-pagination>
              <comments-panel></comments-panel>
              <keybindings-panel></keybindings-panel>
              <bookmark-panel></bookmark-panel>
              <settings-panel></settings-panel>
              <moaqz-toaster dismissable></moaqz-toaster>
              </div>`:Ti(lo||(lo=ao([' <script-startup\n              .mangaPages="','"\n              begin="','"\n              initialStatus="','"\n              @start=',"\n            ></script-startup>"])),this.manga?.pages,this.manga?.begin,_c(this.loadMode,[["wait",()=>"initial-prompt"],["never",()=>"late-start-button"]]),e=>{this.start(e.detail?.begin,e.detail?.end)})}
        ${n?Ti`
              <mov-dialog
                open
                .icon=${n.icon}
                @close=${()=>N("dialog",null)}
              >
                <span slot="label">${n.title}</span>
                ${n.content} ${n.footer}
              </mov-dialog>
            `:""}
      </div>
    `}};td.styles=[Rr``,Dr(Jc)],ro([Y({type:String,reflect:!0})],td.prototype,"loadMode",2),ro([Y({type:Object})],td.prototype,"manga",2),td=ro([ea("manga-online-viewer"),zt.useStores(hr,pr,ur)],td);const od="@moaqzdev/toast";class id extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static#e=3e3;parseDuration(e){if("none"===e||Number.isInteger(e)&&e>id.#e)return e;const n=this.getAttribute("duration");if(n){const e=Number.parseInt(n);if(!Number.isNaN(e))return e}return id.#e}async createToast({title:e,type:n,description:t,onConfirm:o,onCancel:i,confirmText:r="✅",cancelText:a="❌",duration:l}){const s=this.shadowRoot.querySelector("#toast-tmpl").content.cloneNode(!0),c={container:s.querySelector("[data-toast]"),title:s.querySelector("[data-title]"),description:s.querySelector("[data-description]"),actions:s.querySelector("[data-actions]"),confirmBtn:s.querySelector("button[data-action-type='confirm']"),cancelBtn:s.querySelector("button[data-action-type='cancel']"),closeBtn:s.querySelector("[data-close-button]")};l=this.parseDuration(l),c.title.textContent=e||"",c.container.setAttribute("data-type",n),null==t?c.description?.remove():c.description.textContent=t;const d=()=>this.removeToast(c.container);if("confirm"===n?(c.confirmBtn.textContent=r,c.confirmBtn.addEventListener("click",()=>{o?.(),d()},{once:!0}),c.cancelBtn.textContent=a,c.cancelBtn.addEventListener("click",()=>{i?.(),d()},{once:!0})):c.actions?.remove(),this.hasAttribute("dismissable")?c.closeBtn.addEventListener("click",d,{once:!0}):c.closeBtn?.remove(),this.shadowRoot.querySelector("[data-toaster]").appendChild(s),"none"!==l){const e=new AbortController,n=Date.now();let t=null,o=0;const i=()=>{e.abort(),d()};let r=setTimeout(i,l);const a=()=>{null==t&&(clearTimeout(r),t=Date.now())},s=()=>{null!=t&&(o=t-n,t=null,r=setTimeout(i,Math.max(l-o,0)))};["focusin","pointerenter","mouseenter"].forEach(n=>{c.container.addEventListener(n,a,{signal:e.signal})}),["focusout","pointerleave","mouseleave"].forEach(n=>{c.container.addEventListener(n,s,{signal:e.signal})})}}removeToast(e){e.animate([{opacity:1},{opacity:0}],{duration:300,easing:"ease",fill:"forwards"}).finished.then(()=>e.remove())}handleEvent(e){if(e instanceof CustomEvent&&e.type===od){const n=e.detail;this.createToast(n)}}connectedCallback(){this.render(),document.addEventListener(od,this)}disconnectedCallback(){document.removeEventListener(od,this)}render(){this.shadowRoot.innerHTML=`\n    <style>${id.STYLES}</style>\n\n    <template id="toast-tmpl">\n      <li data-toast tabindex="0">\n        <button data-close-button aria-label="Close">\n          <svg \n            xmlns="http://www.w3.org/2000/svg" \n            width="14" \n            height="14" \n            viewBox="0 0 24 24" \n            fill="none" \n            stroke="currentColor" \n            stroke-width="2" \n            stroke-linecap="round" \n            stroke-linejoin="round"\n            aria-hidden="true"\n          >\n            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>\n          </svg>\n        </button>\n        <p data-title></p>\n        <p data-description></p>\n        <div data-actions>\n          <button type="button" data-action-type="confirm"></button>\n          <button type="button" data-action-type="cancel"></button>\n        </div>\n      </li>\n    </template>\n\n    <ol data-toaster tabindex="-1"></ol>`}static STYLES='\n  * {\n    box-sizing: border-box;\n  }\n\n  :host {\n    --_travel-distance: var(--toast-travel-distance, 5vh);\n\n    --_toast-background: var(--toast-background, #FCFCFC);\n    --_toast-border: var(--toast-border, #00000026);\n    --_toast-title: var(--toast-title, #000000DF);\n    --_toast-description: var(--toast-description, #0000009B);\n\n    --_toast-success: var(--toast-success, #00924BA4);\n    --_toast-error: var(--toast-error, #D2000571);\n    --_toast-warning: var(--toast-warning, #E35F00AA);\n    --_toast-info: var(--toast-info, #0084E6A1);\n    --_toast-confirm: var(--toast-confirm, #6600C06C);\n\n    --_toast-actions-direction: var(--toast-actions-direction, row);\n    --_toast-actions-justify: var(--toast-actions-justify, flex-end);\n    --_toast-actions-gap: var(--toast-actions-gap, 0.25rem);\n\n    --_toast-actions-confirm-text-color: var(--toast-actions-confirm-text-color, white);\n    --_toast-actions-confirm-background-color: var(--toast-actions-confirm-background-color, #00713FDE);\n    --_toast-actions-cancel-text-color: var(--toast-actions-cancel-text-color, white);\n    --_toast-actions-cancel-background-color: var(--toast-actions-cancel-background-color, #C40006D3);\n  }\n\n  @media (prefers-color-scheme: dark) {\n    :host {\n      --_toast-background: var(--toast-background, #111111);\n      --_toast-border: var(--toast-border,  #FFFFFF2C);\n      --_toast-title: var(--toast-title, #FFFFFFED);\n      --_toast-description: var(--toast-description, #FFFFFFAF);\n  \n      --_toast-success: var(--toast-success, #54FFAD73);\n      --_toast-error: var(--toast-error, #FF5D61B0);\n      --_toast-warning: var(--toast-warning, #FE84389D);\n      --_toast-info: var(--toast-info, #3094FEB9);\n      --_toast-confirm: var(--toast-confirm, #C47EFFA4);\n\n      --_toast-actions-confirm-text-color: var(--toast-actions-confirm-text-color, white);\n      --_toast-actions-confirm-background-color: var(--toast-actions-confirm-background-color, #54FFAD73);\n      --_toast-actions-cancel-text-color: var(--toast-actions-cancel-text-color, white);\n      --_toast-actions-cancel-background-color: var(--toast-actions-cancel-background-color, #FF5D61B0);\n    }\n  }\n\n  @keyframes slide-in {\n    from { \n      transform: translateY(var(--_travel-distance)) \n    }\n  }\n\n  @keyframes fade-in {\n    from { opacity: 0 }\n    to { opacity: 1 }\n  }\n\n  [data-toaster] {\n    --container-width: 20rem;\n\n    position: fixed;\n    z-index: 999;\n    width: var(--container-width);\n    height: 100dvh;\n    max-height: 100dvh;\n    overflow: hidden;\n    top: 0;\n    right: 0;\n    pointer-events: none;\n    margin: 0;\n    padding: 1rem;\n    display: flex;\n    flex-direction: column-reverse;\n    gap: 0.5rem;\n  }\n\n  :host([position="bottom-right"]) [data-toaster] {\n    top: 0;\n    right: 0;\n  }\n  \n  :host([position="bottom-left"]) [data-toaster] {\n    top: 0;\n    left: 0;\n  }\n\n  :host([position="bottom-center"]) [data-toaster] {\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  \n  :host([position="top-right"]) [data-toaster] {\n    top: 0;\n    right: 0;\n    flex-direction: column;\n  }\n  \n  :host([position="top-left"]) [data-toaster] {\n    top: 0;\n    left: 0;\n    flex-direction: column;\n  }\n\n  :host([position="top-center"]) [data-toaster] {\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    flex-direction: column;\n  }\n\n  [data-toast] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n    position: relative;\n\n    pointer-events: none;\n    user-select: none;\n\n    list-style: none;\n    background-color: var(--_toast-background);\n    padding: 1rem;\n    border: 1px solid var(--_toast-border);\n    border-radius: 0.25rem;\n    pointer-events: all;\n\n    will-change: transform;\n    animation: fade-in .3s ease, slide-in .3s ease;\n\n    @media (prefers-reduced-motion: reduce){\n      --_travel-distance: 0;\n    }\n  \n    &[data-type="success"] {\n      border-top: 4px solid var(--_toast-success);\n    }\n  \n    &[data-type="error"] {\n      border-top: 4px solid var(--_toast-error);\n    }\n  \n    &[data-type="info"] {\n      border-top: 4px solid var(--_toast-info)\n    }\n\n    &[data-type="warning"] {\n      border-top: 4px solid var(--_toast-warning)\n    }\n\n    &[data-type="confirm"] {\n      border-top: 4px solid var(--_toast-confirm);\n    }\n  }\n\n  [data-close-button] {\n    --size: 1.5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: var(--size);\n    height: var(--size);\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: var(--_toast-title);\n    background-color: var(--_toast-background);\n    border-radius: 50%;\n    border: 1px solid var(--_toast-border);\n    padding: 0.125rem;\n    translate: -35% -35%;\n    cursor: pointer;\n  }\n\n  [data-actions] {\n    display: flex;\n    flex-direction: var(--_toast-actions-direction);\n    justify-content: var(--_toast-actions-justify);\n    gap: var(--_toast-actions-gap);\n    margin-top: 0.5rem;\n  }\n\n  button[data-action-type="confirm"],\n  button[data-action-type="cancel"] {\n    padding: 0.5rem;\n    border: none;\n    border-radius: 0.25rem;\n    cursor: pointer;\n    transition-property: opacity;\n    transition-duration: 200ms;\n\n    &:hover,\n    &:focus {\n      opacity: 0.8;\n    }\n  }\n      \n  button[data-action-type="confirm"] {\n    color: var(--_toast-actions-confirm-text-color);\n    font-weight: 600;\n    background-color: var(--_toast-actions-confirm-background-color);\n  }\n\n  button[data-action-type="cancel"] {\n    color: var(--_toast-actions-cancel-text-color);\n    font-weight: 600;\n    background-color:var(--_toast-actions-cancel-background-color);\n  }\n  \n  [data-title], [data-description] {\n    margin: 0;\n    all: initial; \n    font-family: inherit;\n    line-height: 1.5;\n  }\n\n  [data-title] {\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--_toast-title);\n  }\n\n  [data-description] {\n    font-size: 0.875rem;\n    color: var(--_toast-description);\n    text-wrap: pretty;\n  }'}customElements.define("moaqz-toaster",id);const rd=['/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',"/* Make clicks pass-through */\n#nprogress {\n  pointer-events: none;\n}\n\n#nprogress .bar {\n  background: #29d;\n\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 2px;\n}\n\n/* Fancy blur effect */\n#nprogress .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n  opacity: 1.0;\n\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n          transform: rotate(3deg) translate(0px, -4px);\n}\n\n/* Remove these to get rid of the spinner */\n#nprogress .spinner {\n  display: block;\n  position: fixed;\n  z-index: 1031;\n  top: 15px;\n  right: 15px;\n}\n\n#nprogress .spinner-icon {\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n\n  border: solid 2px transparent;\n  border-top-color: #29d;\n  border-left-color: #29d;\n  border-radius: 50%;\n\n  -webkit-animation: nprogress-spinner 400ms linear infinite;\n          animation: nprogress-spinner 400ms linear infinite;\n}\n\n.nprogress-custom-parent {\n  overflow: hidden;\n  position: relative;\n}\n\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n  position: absolute;\n}\n\n@-webkit-keyframes nprogress-spinner {\n  0%   { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n@keyframes nprogress-spinner {\n  0%   { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n","#nprogress .bar {\n  background: #29d;\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n}\n\nhtml[mov] body > *:not(manga-online-viewer, #nprogress) {\n  /* biome-ignore lint/complexity/noImportantStyles: requirement */\n  display: none !important;\n}\n\nhtml[mov] {\n  all: unset;\n  font-size: 16px;\n}\n"].join("\n");(async function(e){if(m(`Starting ${oi.script.name} ${oi.script.version} on ${ii()} ${function(){const e=bowser.getParser(window.navigator.userAgent).getBrowser();return`${e.name} ${e.version}`}()} with ${oi.scriptHandler??"Greasemonkey"}`),Ir.url.test(window.location.href)&&(document.querySelector("#MangaOnlineViewer, #LocalTest")&&(document.querySelector("#LocalTest")?.setAttribute("style","display:none"),document.querySelector("#file")?.addEventListener("change",e=>{const n=e.target;n.files?.[0]&&async function(e){const n=await async function(e){const n=await JSZip.loadAsync(e),t=n.filter((e,n)=>!n.dir&&Mr.test(n.name)).sort((e,n)=>Sr(e.name,n.name));return m("Files in zip:",n.files),Promise.all(t.map(e=>e.async("arraybuffer").then(Cr)))}(e);Q("string"==typeof e?e:e.name,n)}(n.files[0])}),document.querySelector("#folder")?.addEventListener("change",q),document.querySelector("#images")?.addEventListener("change",q),m("Waiting for zip/images upload")),1))return;m(e.length,"Known Manga Sites:",e);const n=e.filter(e=>e.url.test(window.location.href));m(n.length,"Found sites:",n);const t=n.map(async e=>{m(`Testing site: ${e.name}`),await async function(e){await y(e.waitAttr,e=>a(e?.[0],e?.[1]),`Waiting for Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]}`,`Found Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]} =`),await y(e.waitEle,i,`Waiting for Element ${e.waitEle}`,"Found Element"),await y(e.waitVar,l,`Waiting for Variable ${e.waitVar}`,"Found Variable"),await y(e.waitFunc,r,`Waiting to pass Function check ${e.waitFunc}`,"Found Function check"),await y(e.waitTime,e=>new Promise(n=>setTimeout(n,e)),`Waiting for ${e.waitTime} milliseconds`,"Continuing after timer")}(e);const n=await e.run();if(n.pages>0)return[e,n];throw new Error(`${e.name} found ${n.pages} pages`)});try{Ln(await Promise.any(t))}catch(e){if(e instanceof AggregateError){m("All sites failed to run:");for(const n of e.errors)m(n.message)}else m("An unexpected error occurred:",e)}})(ti).catch(m)}();