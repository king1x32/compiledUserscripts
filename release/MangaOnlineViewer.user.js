// ==UserScript==
// @name          Manga OnlineViewer
// @author        Tago
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/MangaOnlineViewer.meta.js
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/MangaOnlineViewer.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @version       2026.08.28.build-2003
// @license       MIT
// @icon          https://cdn-icons-png.flaticon.com/32/2281/2281832.png
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
// @require       https://cdn.jsdelivr.net/npm/colorjs.io@0.7.1/dist/color.global.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdn.jsdelivr.net/npm/lodash@4.18.1/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@4.0.7/dist/hotkeys-js.min.js
// @require       https://cdn.jsdelivr.net/npm/bowser@2.14.1/bundled.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/blob-util/2.0.2/blob-util.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @include       /https?:\/\/(www.)?(asurascans|asuracomics).(com|net)\/.+/
// @include       /https?:\/\/(?:www\.)?(?:fto|jto|hto|dto|mto|wto|bato|battwo|batotwo|comiko|batocomic|readtoto|zbato|xbato|mangatoto)\.(?:to|com|net|org)\/(chapter|title).*/
// @include       /https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/
// @include       /https?:\/\/(www\.)?comick.io\/.+/
// @include       /https?:\/\/comix\.to\/(title|comic)\/.+\/.+/
// @include       /https?:\/\/(www\.)?demonicscans\.org\/(title\/.+\/chapter\/.+|chaptered\.php\?manga=\d+&chapter=.+)/
// @include       /https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/
// @include       /https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/
// @include       /https?:\/\/(visorikigai|visualikigai).(ajaco|eltanews|foodib|jobswu).(com|net|site)\/capitulo\/\d+/
// @include       /https:\/\/(www\.)?kagane\.org\/series\/.+\/reader\/.+/
// @include       /https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/
// @include       /https?:\/\/(www.)?leercapitulo.co\/leer\/.+/
// @include       /https?:\/\/(www\.)?lectorxd\.com\/.+\/leer\/.+/
// @include       /https?:\/\/(www\.)?lhtranslation.net\/read.+/
// @include       /(file:\/\/\/.+(index)?.html)/
// @include       /https?:\/\/(www\.)?m440.in\/manga\/.+\/.+\/\d+/
// @include       /https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/
// @include       /https?:\/\/(www\.)?mangadex.org/
// @include       /https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//
// @include       /https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/
// @include       /https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/
// @include       /https?:\/\/(www\.)?(read|chap)?(nelomanga|mangakakalot|natomanga|manganato|mangabats|mangakakalove).(com|gg|net).*\/(chapter|manga)\/.+\/.+/
// @include       /https?:\/\/mangaball\.net\/chapter-detail\/.+/
// @include       /https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/
// @include       /https?:\/\/(www\.)?(mangapark|mpark|comicpark|readpark|parkmanga).(com|me|org|net|io|to)\/title\/.+\/.+/
// @include       /https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/
// @include       /https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/
// @include       /https?:\/\/www\.mangatown\.com\/manga\/.+\/.+\//
// @include       /https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/
// @include       /https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/
// @include       /https?:\/\/(www\.)?nineanime.com\/chapter\/.+/
// @include       /https?:\/\/(www\.)?olympusxyz.com\/capitulo\/\d+\/.+/
// @include       /https?:\/\/(www\.)?qimanga\.com\/series\/[^/]+\/chapter-.+/
// @include       /https?:\/\/qimanhwa\.com\/series\/[^/]+\/chapter-.+/
// @include       /https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/
// @include       /https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/
// @include       /https?:\/\/(www\.)?reimanga\.com\/manga\/[^/]+-\d+\/\d+/
// @include       /https?:\/\/(www\.)?zonatmo\.(com|org|app)\/(viewer|news|view_uploads|reader|library)\/.+/
// @include       /https?:\/\/(www\.)?webnovel.com\/comic\/.+/
// @include       /https?:\/\/(www\.)?webtoons.com\/.+viewer.+/
// @include       /https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/
// @include       /https?:\/\/(www\.)?weebdex\.org\/.+/
// @include       /https?:\/\/(www.)?(vortexscans).(org)\/.+/
// @include       /https?:\/\/(www\.)?zscans.com\/comics\/.+/
// @include       /https?:\/\/[^/]*(scans?|comic|realm|rizz|hivetoon|tresdaos|zonamiau|ntrgod|threedaos)[^/]*\/.+/
// @include       /^(?!.*jaiminisbox).*\/read\/.+/
// @include       /https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/
// @exclude       /https?:\/\/(www\.)?tsumino.com\/.+/
// @exclude       /https?:\/\/(www\.)?pururin.io\/.+/
// ==/UserScript==
!function(){function e(...e){return console.log("MangaOnlineViewer-main: ",...e),e}function t(...e){return["dev","development"].includes("main")&&console.info("MangaOnlineViewer: ",...e),e}function o(e){"undefined"!=typeof GM_deleteValue?GM_deleteValue(e):t("Fake Removing: ",e)}function n(o,n){const r=function(e,o){return"undefined"!=typeof GM_getValue?GM_getValue(e,o):(t("Fake Getting: ",e," = ",o),o)}(o,n);if("string"==typeof r&&""!==r.trim())try{return JSON.parse(r)}catch(t){return e("Failed to parse JSON from storage",o,t),n}return r}function r(o,n){return"undefined"!=typeof GM_setValue?(GM_setValue(o,n),e("Setting: ",o," = ",n),n.toString()):(t("Fake Setting: ",o," = ",n),String(n))}function i(e){return r(window.location.hostname,e)}function a(e){return _.isEmpty(e)||_.isNil(e)}function l(e){return a(e)||!1===e||0===e}function s(e,t=document.body){return new Promise(o=>{const n=document.querySelector(e);if(n)return void o(n);const r=new MutationObserver(()=>{const t=document.querySelector(e);t&&(o(t),r.disconnect())});r.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function c(e,t=250){return new Promise(o=>{const n=setInterval(()=>{e()&&(clearInterval(n),o(!0))},t)})}function h(e,t=document.body){return new Promise(o=>{if(!l(unsafeWindow[e]))return void o(unsafeWindow[e]);const n=new MutationObserver(()=>{l(unsafeWindow[e])||(o(unsafeWindow[e]),n.disconnect())});n.observe(t,{childList:!0,subtree:!0,attributes:!0})})}async function p(t,o,n,r){void 0!==t&&(e(n),e(r,await o(t)))}function u(e,t){if(!Ii(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==fi?fi.createHTML(t):t}function m(e,t,o=e,n){if(t===zi)return t;let r=void 0!==n?o._$Co?.[n]:o._$Cl;const i=xi(t)?void 0:t._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),void 0===i?r=void 0:(r=new i(e),r._$AT(e,o,n)),void 0!==n?(o._$Co??=[])[n]=r:o._$Cl=r),void 0!==r&&(t=m(e,r._$AS(e,t.values),r,n)),t}function g(e){void 0!==this._$AN?(Nt(this),this._$AM=e,Rt(this)):this._$AM=e}function v(e,t=!1,o=0){const n=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(n))for(let e=o;e<n.length;e++)$t(n[e],!1),Nt(n[e]);else null!=n&&($t(n,!1),Nt(n));else $t(this,e)}function f(e){return"listImages"in e&&!l(e.listImages)}function b(e){return"listPages"in e&&!l(e.listPages)}function w(e){return(t,o)=>"object"==typeof o?lo(e,t,o):((e,t,o)=>{const n=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}
/**
	* @license
	* Copyright 2017 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/function k(e){return w({...e,state:!0,attribute:!1})}
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
function y(e,t){return(o,n,r)=>{const i=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof n?o:r??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return so(o,n,{get(){let o=e.call(this);return void 0===o&&(o=i(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return so(o,n,{get(){return i(this)}})}}
/**
	* @license
	* Copyright 2018 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/function E(e){if(e.startsWith("Icon")&&!e.includes("-")&&!e.includes("_"))return e;const t=e.startsWith("Icon")?e.substring(4):e;return`Icon${_.upperFirst(_.camelCase(t))}`}function A(e,t,o,n){var r,i,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(i=e.length-1;i>=0;i--)(r=e[i])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l}function x(e,t){document.querySelector(`#${e}`)||(document.head??document.querySelector("head")).appendChild(function(e,t){const o=document.createElement("style");return o.id=e,o.appendChild(document.createTextNode(t)),o}(e,t))}function I(e=!0){const t={..._o,theme:e?"#29487D":"#004526"};let o=Qr()?_.defaultsDeep(So,t):t;return Yr()&&(o=_.defaultsDeep(Co,o)),o}function M(e,t,o){return"bookmarks"===o?function(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const o=e=>`${e.url}-${e.date}`,n=[...e].sort((e,t)=>o(e).localeCompare(o(t))),r=[...t].sort((e,t)=>o(e).localeCompare(o(t)));return _.isEqual(n,r)}}(e,t):"keybinds"===o?function(e,t){if(e&&"object"==typeof e&&t&&"object"==typeof t){const o=e,n=t,r=_.keys(o).sort((e,t)=>e.localeCompare(t)),i=_.keys(n).sort((e,t)=>e.localeCompare(t));if(!_.isEqual(r,i))return!1;for(const e of r){const t=o[e]?[...o[e]].sort((e,t)=>e.localeCompare(t)):[],r=n[e]?[...n[e]].sort((e,t)=>e.localeCompare(t)):[];if(!_.isEqual(t,r))return!1}return!0}}(e,t):void 0}function S(e,t,o){if(e===t)return!1;if(o){const n={[o]:e},r={[o]:t};return!_.isEqualWith(n,r,M)}return!_.isEqualWith(e,t,M)}function C(e=T("deviceMode")){return"auto"===e?qr():e}function O(t){if(t){const o=Do(t)?To[t]:Oo[t],n=$o.get()?.[t];return void(S(n,o,t)&&($o.setKey(t,o),e("Refreshed Settings",t,o)))}for(const e in $o.get()){const t=$o.get()[e],o=Do(e)?To[e]:Oo[e];S(t,o)&&$o.setKey(e,o)}e("Refreshed All Settings")}function T(e){return $o.get()?.[e]}function L(e,t){const o=$o.get()?.[e];S(o,t,e)&&$o.setKey(e,t)}function D(e,t){S(T(e),t,e)&&($o.setKey(e,t),Do(e)?(To[e]=t,i(Mo(To,I(!1)))):(Oo[e]=t,function(e){r("settings",e)}(Mo(Oo,I()))))}function $(e,t){L(e,t(T(e)))}function N(e){return Ro.get()[e]}function R(e,t){const o=Ro.get()[e];_.isEqual(o,t)||Ro.setKey(e,t)}function z(e,t){const o=Ro.get()[e],n=t(o);_.isEqual(o,n)||Ro.setKey(e,n)}function P(e,t){z("images",o=>({...o,[e]:{...o?.[e],...t(o?.[e]??{})}}))}function B(e){const t=Ft.find(e=>e.ID===T("locale"))??Ft[1];return e in t?t?.[e]??Ft[1]?.[e]:`##MISSING_STRING_${e}##`}function G(t=!1){return To.enabled=t,i(Mo(To,I(!1))),e("Local Settings ",t?"Enabled":"Disabled"),Io.info({title:"Changed Settings to",description:Lo()?"Local":"Global",duration:2e3}),Lo()}function H(){Lo()?(o(location.hostname),To=I(!1),G(!1)):(o("settings"),Oo=I(),O()),e("Settings Reset")}function V(e=location.href){return T("bookmarks").find(t=>t.url===e)?.page}function F(e){return function(e){try{Color.get(e)}catch(e){return!0}return Color.contrast(e,"white","Lstar")>Color.contrast(e,"black","Lstar")}(e)?"#FFFFFF":"#000000"}function W(e,t="steps"){let o;try{o=Color.get(e)}catch(e){o=Color.get(Vo.navy)}switch(t){case"saturation":return function(e){const t=e.to("hsl"),o=[.97,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],n=[];for(const e of o){const o=t.clone();o.coords[2]=100*e;const r=o.coords[1]??0;e>.8?o.coords[1]=.4*r:e>.6?o.coords[1]=.8*r:e<.3&&(o.coords[1]=Math.min(100,1.1*r)),n.push(o.toString({format:"hex"}).toUpperCase())}return n}(o);case"lightness":return function(e){const t=[],o=[95,90,80,70,60,50,40,30,20,10,5],n=e.to("hsl");for(const e of o){const o=n.clone();o.coords[2]=e,t.push(o.toString({format:"hex"}).toUpperCase())}return t}(o);case"mantine":return function(e){const[t,o,n]=e.to("hsl").coords.map(e=>e??0),r=new Array(11);r[5]=e.toString({format:"hex"});for(let e=0;e<5;e++){const i=(5-e)/6,a=n+(100-n)*i,l=o-o*i;r[e]=new Color("hsl",[t,l,a]).toString({format:"hex"})}for(let e=0;e<5;e++){const i=(e+1)/6,a=n-n*i,l=o+(100-o)*i;r[e+6]=new Color("hsl",[t,l,a]).toString({format:"hex"})}return r}(o);case"chakra":return function(e){const t=new Array(11).fill(""),o=e.to("hsl");for(let e=1;e<=5;e++){const n=5-e,r=o.clone();r.coords[2]=(r.coords[2]??0)+9*(e-.5),r.coords[0]=(r.coords[0]??0)+-2*e,r.coords[1]=(r.coords[1]??0)+-6*e,t[n]=r.toString({format:"hex"})}t[5]=o.clone().toString({format:"hex"});for(let e=1;e<=5;e++){const n=5+e,r=o.clone();r.coords[2]=(r.coords[2]??0)-8*(e-.5),r.coords[0]=(r.coords[0]??0)+2*e,r.coords[1]=(r.coords[1]??0)+2*e,t[n]=r.toString({format:"hex"})}return t}(o);default:return function(e){const[t,o,n]=e.to("oklch").coords.map(e=>e??0),r=[.95,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],i=r.map(e=>new Color("oklch",[e,o,n]).toString({format:"hex"}));let a=-1,l=1/0;for(let e=0;e<r.length;e++){const o=Math.abs(r[e]-t);o<l&&(l=o,a=e)}return-1!==a&&(i[a]=e.toString({format:"hex"})),i.map(e=>e.toUpperCase())}(o)}}function U(e){switch(e){case"image/jpeg":return"jpg";case"image/png":default:return"png";case"image/webp":return"webp";case"image/gif":return"gif";case"image/bmp":return"bmp"}}async function Z(t){if(t.blob)return e(`Got blob for page ${t.src} from cache`),t.blob;const o=await async function(t){if(!t.src)return null;try{const o=await fetch(t.src);if(o.ok)return e(`Got blob for page ${t.src} from fetch`),await o.blob()}catch(o){e(`Failed to get blob for page ${t.src} from fetch`,o)}return"undefined"!=typeof GM_xmlhttpRequest?new Promise(o=>{GM_xmlhttpRequest({method:"GET",url:t.src,responseType:"blob",onload:n=>{200===n.status?(e(`Got blob for page ${t.src} from GM_xmlhttpRequest`),o(n.response)):(e(`Failed to get blob for page ${t.src} from GM_xmlhttpRequest`,n.statusText),o(null))},onerror:n=>{e(`Failed to get blob for page ${t.src} from GM_xmlhttpRequest`,n),o(null)}})}):null}(t)||await async function(t){const o=t.ref?.value;if(!o)return null;try{const n=document.createElement("canvas"),r=n.getContext("2d");if(r)return n.width=o.naturalWidth,n.height=o.naturalHeight,r.drawImage(o,0,0),await new Promise(o=>{n.toBlob(n=>{n&&e(`Got blob for page ${t.src} from canvas`),o(n)},"image/png",1)})}catch(o){e(`Failed to get blob for page ${t.src} from canvas`,o)}return null}(t);return o||e(`Failed to get blob for page ${t.src}`),o}function j(){"working"!==N("download")&&(e("Downloading Chapter"),async function(){R("download","working");const t=new JSZip,o=N("images")??{},n=N("manga"),r=n?.pages??0,i=Math.floor(Math.log10(r||1))+1,a=_.sortBy(_.entries(o),([e])=>Number(e)),l=[],s=e=>{R("dialog",{open:!0,title:B("BUTTON_DOWNLOAD"),content:Ri`
        <div style='display: flex; flex-direction: column; gap: 10px;'>
          <p>${B("DOWNLOAD_PROGRESS").replace("##num##",e.toString()).replace("##total##",r.toString())}</p>
          <progress value='${e}' max='${r}' style='width: 100%; height: 20px;'></progress>
        </div>
      `,footer:Ri`
        <mov-button @click=${()=>R("download","cancelled")}>
          ${B("CANCEL")}
        </mov-button>
      `})};s(0);let c=0;for(const[o,n]of a){if("cancelled"===N("download"))return e("Download cancelled"),R("dialog",null),void R("download",void 0);try{const r=await Z(n);if(r){const n=U(r.type),a=`Page-${Number(o).toString().padStart(i,"0")}.${n}`;e(`${a} Added to Zip from Blob`),t.file(a,r,{createFolders:!0,compression:"DEFLATE"})}else l.push(n.src??o)}catch(t){e(`Error processing page ${o}`,t),l.push(n.src??o)}finally{c+=1,s(c)}}R("dialog",{open:!0,title:B("BUTTON_DOWNLOAD"),content:Ri`
      <div style='display: flex; flex-direction: column; gap: 10px;'>
        <p>${B("GENERATING_ZIP")}</p>
        <progress style='width: 100%; height: 20px;'></progress>
      </div>
    `,footer:Ri``}),l.length>0&&(e("Some images failed to download:",l),t.file("failed_pages.txt",l.join("\n"))),e("Generating Zip"),t.generateAsync({type:"blob"}).then(t=>{e("Download Ready");const o=`${n?.title??document.title}.zip`;window.saveAs(t,o,{autoBom:!1}),l.length>0?R("dialog",{open:!0,title:B("DOWNLOAD_INCOMPLETE"),icon:"warning",content:Ri`<p>${B("DOWNLOAD_INCOMPLETE_MESSAGE")}</p>`,footer:Ri`<mov-button @click=${()=>R("dialog",null)}>
            ${B("CLOSE")}
          </mov-button>`}):R("dialog",null)}).catch(t=>{e("Error generating zip",t),R("dialog",{open:!0,title:B("WARNING"),icon:"error",content:Ri`<p>Error generating zip: ${t.message}</p>`,footer:Ri`<mov-button @click=${()=>R("dialog",null)}>
          ${B("CLOSE")}
        </mov-button>`})}).finally(()=>{R("download",void 0)})}().catch(t=>e("Error downloading chapter",t)))}function q(){$("hidePageControls",e=>!e)}function Q(e){const t=e.currentTarget||e.target,o=t.getAttribute("value")??t.getAttribute("href");1===e.button||e.ctrlKey||(o&&"#"!==o?window.location.href=(0,en.sanitizeUrl)(o):"series"===t.id&&(Yr()?window.location.href=window.location.pathname:window.history.back()))}function Y(e){const t=e.detail.value;R("scrollToPage","string"==typeof t?parseInt(t,10):t)}function X(){const t=N("chapter").value;if(T("viewMode").startsWith("Fluid")){const o="FluidRTL"===T("viewMode")?-1:1;t?.scrollBy({top:0,left:T("scrollHeight")*o,behavior:"smooth"}),t&&t.scrollLeft+t.clientWidth>=t.scrollWidth-2&&(R("autoScroll",!1),e("Finished auto scroll"))}else window.scrollBy({top:T("scrollHeight"),left:0,behavior:"smooth"}),window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&(R("autoScroll",!1),e("Finished auto scroll"));N("autoScroll")&&requestAnimationFrame(X)}function K(){N("autoScroll")?(R("autoScroll",!1),e("Stopped auto scroll")):(R("autoScroll",!0),requestAnimationFrame(X),e("Start auto scroll"))}function J(){!tn&&N("autoScroll")&&(K(),tn=!0),tn&&!N("autoScroll")&&on()}function ee(e){const t=()=>R("dialog",null);e.timer&&setTimeout(t,e.timer),R("dialog",{open:!0,icon:e.icon,title:e.title,content:Ri`<div style="padding: 1rem;">${po(e.html)}</div>`,footer:Ri`
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button @click=${t}>OK</mov-button>
      </div>
    `})}function te(e){G("true"===e.currentTarget.value)}function oe(e){D("locale",e.currentTarget.value)}function ne(e){D("loadMode",e.currentTarget.value)}function re(e){D("fitWidthIfOversize",e.detail.checked)}function ie(e){D("navbar",e.currentTarget.value)}function ae(e){D("pagination",e.currentTarget.value)}function le(e){const t=e.detail.checked;D("downloadZip",t),t&&ee({title:B("ATTENTION"),html:B("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function se(e){const t=e.detail.checked;D("lazyLoadImages",t),t&&ee({title:B("WARNING"),html:B("LAZY_LOAD"),icon:"warning"})}function ce(e){const t=e.detail.value;D("lazyStart","string"==typeof t?parseInt(t,10):t)}function de(e){const t=e.currentTarget.value;D("loadSpeed",t),["Extreme","All"].includes(t)&&ee({title:B("SPEED_WARNING"),html:B("SPEED_WARNING_MESSAGE"),icon:"warning"})}function he(e){const t=e.detail.value;D("zoomStep","string"==typeof t?parseInt(t,10):t)}function pe(e){const t=e.detail.value,o="string"==typeof t?parseInt(t,10):t;(function(e,t){!function(e){document.querySelectorAll(`style[id="${e}"]`).forEach(e=>{e.remove()})}(e),x(e,t)})("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${o}vw;}`),D("minZoom",o)}function ue(e){D("hidePageControls",e.detail.checked)}function me(e){D("header",e.currentTarget.value)}function ge(e){const t=e.detail.value;D("scrollHeight","string"==typeof t?parseInt(t,10):t)}function ve(e){$("scrollHeight",t=>{const o=t+25*e;if(o<=0)return 0;const n=100*Math.ceil(window.innerHeight/200);return o>=n?n:o})}function fe(e){const t=e.currentTarget.value;D("deviceMode",t),R("device",C(t))}function be(e,t=T("zoomMode"),o=T("zoomValue")){const n=function(){const e=T("navbar");return"left"===e||"right"===e?window.innerWidth-34:window.innerWidth}(),r="bottom"===T("navbar")?window.innerHeight-34:window.innerHeight;if("width"===t)e.width=n,e.height=void 0;else if("height"===t)e.width=void 0,e.height=r;else if("percent"===t){const t=e.naturalWidth??e.ref?.value?.naturalWidth;e.width=t?t*(o/100):void 0,e.height=void 0}return e}function we(t=T("zoomMode"),o=T("zoomValue")){e("Zoom",t,o),L("zoomMode",t),L("zoomValue",o),"height"===t?R("scrollToPage",N("currentPage")):O("header");const n=N("images"),r=N("manga"),i={};for(let e=r?.begin??1;e<=(r?.pages??1);e++)i[e]=be({...n?.[e]},t,o);R("images",i)}function ke(e,t=T("zoomValue")){return()=>{we(e,t)}}function ye(e=1){return()=>{const t=T("zoomValue")+e*T("zoomStep");t>0&&t<500&&we("percent",t)}}function Ee(e){D("zoomMode",e.currentTarget.value)}function Ae(e){const t=e.detail.value,o="string"==typeof t?parseInt(t,10):t;D("zoomValue",o),we("percent",o)}function xe(e){const t=e.detail.value;we("percent","string"==typeof t?parseInt(t,10):t)}function Ie(e){return()=>{L("viewMode",e),["FluidLTR","FluidRTL","Book","Manga"].includes(e)?(L("zoomMode","height"),L("header","click"),we("height")):(O("zoomMode"),O("zoomValue"),O("header")),we()}}function Me(e){const t=e.currentTarget.value;D("viewMode",t),Ie(t)()}function _e(t){const o=T("viewMode"),n=T("zoomMode");e("Scrolling view",o,"zoom",n,"sign",t),o.match(/^(Book|Manga)$/)&&"height"===n?function(e){const t=N("currentPage"),o=N("manga");if(!o)return;const n=N("images")??{},r=o.begin??1,i=o.pages??1,a=e=>{if(e<r||e>i)return!1;if(n[e]?.doublePage)return!0;let t=0;for(let o=e-1;o>=r&&!n[o]?.doublePage;o--)t++;return t%2==0};let l;if(1===e)for(l=t+1;l<=i&&!a(l);)l++;else if(a(t))for(l=t-1;l>r&&!a(l);)l--;else for(l=t;l>r&&!a(l);)l--;R("scrollToPage",l<r?0:l>i?i:l)}(t):o.startsWith("Fluid")?function(e){const t="FluidRTL"===T("viewMode")?-1:1;N("chapter").value?.scrollBy({left:.8*window.innerWidth*e*t,behavior:"smooth"})}(t):"height"===n?function(e){const t=N("currentPage")+e;t<0?R("scrollToPage",0):t>(N("manga")?.pages??1)||R("scrollToPage",t)}(t):function(e){window.scrollBy({top:.8*window.innerHeight*e,behavior:"smooth"})}(t)}function Se(e){const t=N("manga")?.[e];t&&"#"!==t?window.location.href=(0,en.sanitizeUrl)(t):"series"===e&&(Yr()?window.location.href=window.location.pathname:window.history.back())}function Ce(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,hotkeys.unbind(),_.keys(T("keybinds")).forEach(e=>{hotkeys(T("keybinds")[e]?.join(",")??"",_.throttle(t=>{"keybindingsEditor"!==N("panel")&&(t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),rn[e]())},100))})}function Oe(t=window.location.href){l(V(t))||(e(`Bookmark Removed ${t}`),$("bookmarks",e=>[...e.filter(e=>e.url!==t)]))}function Te(t){const o=t.currentTarget.value;e(`Bookmark Removed ${o}`),Io.error({title:B("BOOKMARK_REMOVED"),duration:1e4}),Oe(o)}function Le(){R("panel","bookmarks")}function De(){const e=N("currentPage"),t={name:N("manga")?.title??document.documentElement.title??window.location.hostname,url:window.location.href,page:e,date:(new Date).toISOString().slice(0,10)};V(t.url)?($("bookmarks",e=>[...e.filter(e=>e.url!==t.url)]),Io.error({title:B("BOOKMARK_REMOVED"),duration:1e4})):($("bookmarks",e=>[...e,t]),Io.success({title:B("BOOKMARK_SAVED"),description:B("BOOKMARK_MESSAGE").replace("##num##",e.toString()),duration:1e4}))}function $e(){R("panel","none")}function Ne(){R("panel","settings")}function Re(){R("panel","keybindings")}function ze(){R("panel","keybindingsEditor")}function Pe(e,t=1){return Array(e).fill(0).map((e,t)=>t+1).filter(e=>e>=t)}function Be(e){const t=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}function Ge(e,t,o="#0F1C3F",n="#ECEAD9"){return Be(function(e,t,o,n){let r="";for(let t=0;t<=e;t+=5)r+=Eo` <line
      x1="${t}"
      y1="0"
      x2="${t}"
      y2="${xn(t)}"
    />`,0!==t&&t%50==0&&(r+=Eo` <text
        x="${t}"
        y="25"
        text-anchor="middle"
        font-size="${xn(t)}px"
      >
        ${t}
      </text>`);for(let e=0;e<=t;e+=5)r+=Eo` <line
      x1="0"
      y1="${e}"
      x2="${xn(e)}"
      y2="${e}"
    />`,0!==e&&e%50==0&&(r+=Eo` <text
        x="25"
        y="${e}"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="${xn(e)}px"
      >
        ${e}
      </text>`);return Eo` <svg
    xmlns="http://www.w3.org/2000/svg"
    width="${e}"
    height="${t}"
    viewBox="0 0 ${e} ${t}"
  >
    <rect
      width="${e}"
      height="${t}"
      fill="${o}"
    />
    <text
      fill="${n}"
      font-family="Verdana, Arial, Helvetica, sans-serif"
      font-size="30"
      dy="10.5"
      font-weight="bold"
      x="50%"
      y="50%"
      text-anchor="middle"
    >
      ${e}x${t}
    </text>
    <g
      stroke-width="1"
      font-family="Verdana, Arial, Helvetica, sans-serif"
      font-size="10px"
      font-weight="100"
      fill="${n}"
      stroke="${n}"
    >
      ${r}
    </g>
  </svg>`}(e,t,o,n))}function He(){const e=Math.floor(Math.random()*Mn.length),t=Math.floor(Math.random()*_n.length),o=Math.floor(Math.random()*In.length);return Ge(Mn[e],_n[t],In[o])}function Ve(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function Fe(){const e=Lo()?"true":"false";return Ri` <div class="ControlLabel">
    ${B("SCOPE")}
    <segmented-control
      .value=${e}
      @change=${te}
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
  </div>`}function We(){return Ri` <div class="ControlLabel locale">
    ${B("LANGUAGE")}
    <select
      id="locale"
      @change="${oe}"
    >
      ${Ft.map(e=>Ri`
      <option
        value="${e.ID}"
        ?selected=${T("locale")===e.ID}
      >
        ${e.NAME}
      </option>
    `)}
    </select>
  </div>`}function Ue(){const e=T("deviceMode");return Ri` <div class="ControlLabel">
    ${B("DEVICE_MODE")}
    <segmented-control
      .value=${e}
      @change=${fe}
    >
      <segmented-control-option
        value="auto"
        label=${B("DEVICE_MODE_AUTO")}
        icon="IconAdjustmentsHorizontal"
      ></segmented-control-option>
      <segmented-control-option
        value="desktop"
        label=${B("DEVICE_MODE_DESKTOP")}
        icon="IconDeviceDesktop"
      ></segmented-control-option>
      <segmented-control-option
        value="tablet"
        label=${B("DEVICE_MODE_TABLET")}
        icon="IconDeviceTablet"
      ></segmented-control-option>
      <segmented-control-option
        value="mobile"
        label=${B("DEVICE_MODE_MOBILE")}
        icon="IconDeviceMobile"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function Ze(){return Ri`
    <div class="ControlLabel loadMode">
      ${B("DEFAULT_LOAD_MODE")}
      <select
        id="loadMode"
        @change="${ne}"
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
  `}function je(){return Ri`
    <div class="ControlLabel PagesPerSecond">
      ${B("LOAD_SPEED")}
      <select
        id="PagesPerSecond"
        @change="${de}"
      >
        <option
          value="Safe"
          ?selected=${"Safe"===T("loadSpeed")}
        >
          ${B("SLOWLY")} (Safe)
        </option>
        <option
          value="Standard"
          ?selected=${"Standard"===T("loadSpeed")}
        >
          ${B("NORMAL")} (Standard)
        </option>
        <option
          value="Faster"
          ?selected=${"Faster"===T("loadSpeed")}
        >
          ${B("FAST")} (Faster)
        </option>
        <option
          value="Extreme"
          ?selected=${"Extreme"===T("loadSpeed")}
        >
          ${B("EXTREME")} (Extreme)
        </option>
        <option
          value="All"
          ?selected=${"All"===T("loadSpeed")}
        >
          ${B("ALL_PAGES")} (All)
        </option>
      </select>
    </div>
  `}function qe(){return Ri`
    <div class="ControlLabel fitIfOversize">
      ${B("FIT_WIDTH_OVERSIZED")}
      <mov-switch
        name="fitIfOversize"
        ?checked=${T("fitWidthIfOversize")}
        @change=${re}
      ></mov-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${B("DOWNLOAD_IMAGES")}
      <mov-switch
        name="downloadZip"
        ?checked=${T("downloadZip")}
        @change=${le}
      ></mov-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${B("HIDE_CONTROLS")}
      <mov-switch
        name="hidePageControls"
        ?checked=${T("hidePageControls")}
        @change=${ue}
      ></mov-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${B("LAZY_LOAD_IMAGES_ENABLE")}
      <mov-switch
        name="lazyLoadImages"
        ?checked=${T("lazyLoadImages")}
        @change=${se}
      ></mov-switch>
    </div>
  `}function Qe(){return Ri`
    <div
      class="${co({ControlLabel:!0,lazyStart:!0,ControlLabelItem:!0,show:T("lazyLoadImages")})}"
    >
      <span>
        ${B("LAZY_LOAD_IMAGES")}
        <output
          id="lazyStartVal"
          class="RangeValue"
          for="lazyStart"
        >
          ${T("lazyStart")}
        </output>
      </span>
      <mov-slider
        name="lazyStart"
        id="lazyStart"
        .value="${T("lazyStart")}"
        min="5"
        max="100"
        step="5"
        show-tooltip
        show-ticks
        tick-count="3"
        @input="${ce}"
      ></mov-slider>
    </div>
  `}function Ye(){return Ri`
    <div class="ControlLabel headerType">
      ${B("HEADER_TYPE")}
      <segmented-control
        .value=${T("header")}
        @change=${me}
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
  `}function Xe(){return Ri`
    <div class="ControlLabel pagination">
      ${B("PAGINATION_TYPE")}
      <segmented-control
        .value=${T("pagination")}
        @change=${ae}
        labelPosition="side"
      >
        <segmented-control-option
          value="disabled"
          label=${B("PAGINATION_DISABLED")}
          icon="x"
        ></segmented-control-option>
        <segmented-control-option
          value="slider"
          label=${B("PAGINATION_SLIDER")}
          icon="adjustments-horizontal"
        ></segmented-control-option>
        <segmented-control-option
          value="side-arrows"
          label=${B("PAGINATION_ARROWS")}
          icon="arrows-left-right"
        ></segmented-control-option>
        <segmented-control-option
          value="both"
          label=${B("PAGINATION_BOTH")}
          icon="arrows-horizontal"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function Ke(){return Ri`
    <div class="ControlLabel navbarType">
      ${B("NAVBAR_TYPE")}
      <segmented-control
        .value=${T("navbar")}
        @change=${ie}
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
  `}function Je(){return Ri`
    <div class="ControlLabel autoScroll">
      <span>
        ${B("AUTO_SCROLL_HEIGHT")}
        <output
          id="scrollHeightVal"
          class="RangeValue"
          for="scrollHeight"
        >
          ${T("scrollHeight")}px
        </output>
      </span>
      <mov-slider
        name="scrollHeight"
        id="scrollHeight"
        .value="${T("scrollHeight")}"
        min="1"
        max="${100*Math.ceil(window.innerHeight/200)}"
        step="1"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${ge}"
      ></mov-slider>
    </div>
  `}function et(){const e="dark"===T("colorScheme");D("colorScheme",e?"light":"dark"),document.documentElement.classList.remove(e?"dark":"light"),document.documentElement.classList.add(T("colorScheme"))}function tt(e){D("theme",e instanceof CustomEvent?e.detail.value:e.currentTarget.value)}function ot(){return Ri`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${B("COLOR_SCHEME")}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${et}
        ?active=${"dark"===T("colorScheme")}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${B("THEME_COLOR")}</label>
      <mov-color-picker
        id="ThemeHex"
        .value="${T("theme")}"
        title="${T("theme")}"
        @input=${tt}
        .swatches=${_.values(Vo)}
      ></mov-color-picker>
    </div>
    <color-palette
      .baseColor="${T("theme")}"
      mode="steps"
      .selected=${T("theme")}
      @change="${tt}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${_.values(Vo).map(e=>Ri`<color-swatch
            .color="${e}"
            .selected=${T("theme")}
            @change=${tt}
          ></color-swatch>`)}
    </span>
    <details class="ControlLabel">
      <summary>${B("THEME_HUE")} & ${B("THEME_SHADE")}</summary>
      <color-panel
        .selected=${T("theme")}
        @change=${tt}
      ></color-panel>
    </details>
  `}function nt(){return Ri` <div class="ControlLabel DefaultZoomMode">
    ${B("DEFAULT_ZOOM_MODE")}
    <segmented-control
      .value=${T("zoomMode")}
      @change=${Ee}
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
  </div>`}function rt(){return Ri`
    <div
      class="${co({ControlLabel:!0,zoomValue:!0,ControlLabelItem:!0,show:"percent"===T("zoomMode")})}"
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
      <mov-slider
        name="zoomValue"
        id="zoomValue"
        .value="${T("zoomValue")}"
        min="5"
        max="200"
        step="5"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${Ae}"
      ></mov-slider>
    </div>
  `}function it(){return Ri`
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
      <mov-slider
        name="zoomStep"
        id="zoomStep"
        .value="${T("zoomStep")}"
        min="10"
        max="50"
        step="5"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${he}"
      ></mov-slider>
    </div>
  `}function at(){return Ri`
    <div class="ControlLabel viewMode">
      ${B("DEFAULT_VIEW_MODE")}
      <segmented-control
        .value=${T("viewMode")}
        @change=${Me}
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
        <segmented-control-option
            value="Book"
            label=${B("VIEW_MODE_BOOK")}
            icon="IconBookArrowRight"
        ></segmented-control-option>
        <segmented-control-option
            value="Manga"
            label=${B("VIEW_MODE_MANGA")}
            icon="IconBookArrowLeft"
        ></segmented-control-option>
        <segmented-control-option
            value="Gallery"
            label=${B("VIEW_MODE_GALLERY")}
            icon="IconLayoutDashboard"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}async function lt(o,n,r){const i=N("images")?.[n];i?.status&&"pending"!==i.status||(P(n,()=>({status:"loading"})),Nn.add(async()=>{let i,a=function(e){if(e){let t=e.trim();return t.startsWith("//")&&(t=`https:${t}`),t}return""}(r);try{const t=await fetch(a,o.fetchOptions);if(t.ok){const o=t.headers.get("content-type");o?.startsWith("image/")?(i=await t.blob(),a=await blobUtil.blobToDataURL(i)):e("Fetched content is not an image",o)}else e("Fetch failed with status",t.status)}catch(t){e("Failed to fetch image",t)}P(n,()=>({src:a,blob:i,status:"loaded"})),t("Loaded Image:",n,"Source:",a)}),o.pages===n&&Oe())}async function st(t,o,n){const r=N("images")?.[o];r?.status&&"pending"!==r.status||(P(o,()=>({status:"loading"})),Nn.add(async()=>{try{const r=await async function(t,o,n){try{return(await async function(t){return async function(t){e("Fetching page: ",t);try{const e=await(await fetch(t)).text();return(new DOMParser).parseFromString(e,"text/html")}catch(t){throw e("Failed to fetch page: ",t),t}}(t)}(t)).querySelector(o)?.getAttribute(n)}catch(t){return e("Failed to get element attribute: ",t),null}}(n,t.img,t.lazyAttr??"src");r?(P(o,()=>({status:"pending"})),await lt(t,o,r)):P(o,()=>({status:"error"}))}catch(t){e("Failed to get page attribute",t),P(o,()=>({status:"error"}))}}))}function ct(e,t){Pe(t.pages,e).filter((e,o)=>!(t.lazy??T("lazyLoadImages"))||o<=T("lazyStart")).forEach(e=>{st(t,e,t.listPages[e-1])})}function dt(e,t){Pe(t.pages,e).filter((e,o)=>!(t.lazy??T("lazyLoadImages"))||o<=T("lazyStart")).forEach(e=>{lt(t,e,t.listImages[e-1])})}function ht(){const e=function(){const e=N("images");if(!e)return null;const t=T("viewMode"),o="FluidLTR"===t||"FluidRTL"===t,n="FluidRTL"===t,r=window.innerHeight/2,i=window.innerWidth/2;let a=null;for(const t in e){const l=e[t].ref?.value;if(!l)continue;const s=l?.getBoundingClientRect();let c;c=o?n?s.right:s.left:s.top,(o?c<=i:c<=r)&&(!a||c>a.edge)&&(a={index:parseInt(t,10),edge:c})}return a?a.index:N("manga")?.begin??1}();null!=e&&N("currentPage")!==e&&R("currentPage",e)}function pt(){N("chapter").value?function(){const e=_.throttle(()=>{requestAnimationFrame(ht)},100);window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),N("chapter").value?.addEventListener("scroll",e,{passive:!0}),requestAnimationFrame(ht)}():setTimeout(pt,50)}function ut(t,o){const n=N("images")?.[t];if(!n?.src)return;const r=(n.reload??0)+1;var i,a;if(r>T("maxReload"))e(`Stopped reloading Page ${t} after ${r} attempts`);else if(e(`Reloading Page ${t} (Attempt ${r})`,o),o?.removeAttribute("src"),a=n.src,/^data:image\/(png|jpg|jpeg|gif|svg)/.test(a)||(i=n.src,zn.test(i)))P(t,()=>({reload:r})),o?.setAttribute("src",n.src);else{const e=function(e,t){const o=e.replace(/[?&]forceReload=\d+$/,"");return`${o+(o.includes("?")?"&":"?")}forceReload=${t}`}(n.src,r);P(t,()=>({reload:r,src:e})),o?.setAttribute("src",e)}}function mt(e){const t=e.currentTarget,o=parseInt(t.value,10),n=N("images")?.[o]?.ref?.value;n&&ut(o,n)}function gt(e){const t=e.currentTarget;P(parseInt(t.value,10),e=>({hide:!e.hide}))}function vt(t){const o=t.currentTarget;P(parseInt(o.id.replace("PageImg",""),10),()=>({...be({naturalWidth:o.naturalWidth,naturalHeight:o.naturalHeight}),status:"loaded",doublePage:o.naturalWidth>o.naturalHeight}));const n=N("manga"),r=N("images")||{},i=_.keys(r).filter(e=>{const t=parseInt(e,10);return t>=(n?.begin??1)&&t<=(n?.pages??1)&&"loaded"===r[t]?.status}).length,a=(n?.pages??1)-((n?.begin??1)-1),l=Math.floor(i/a*100);document.title=`(${l}%) ${N("manga")?.title}`,NProgress.configure({showSpinner:!1}).set(i/a),e(`Progress: ${l}%`),i===a&&(e("Images Loading Complete"),R("download","available"),T("downloadZip")&&j())}function ft(e){const t=e.currentTarget;if(a(t.getAttribute("src")))return;const o=parseInt(t.id.replace("PageImg",""),10);P(o,()=>({status:"error"})),ut(o,t)}function bt(e){const t=e.currentTarget,o=parseInt(t.value,10),n=N("images"),r=N("images")?.[o];r?.naturalWidth&&R("images",{...n,[o]:{...r,width:(r?.width||r?.naturalWidth)*(1+T("zoomStep")/100),height:void 0}})}function wt(e){const t=e.currentTarget,o=parseInt(t.value,10),n=N("images"),r=N("images")?.[o];r?.naturalWidth&&R("images",{...n,[o]:{...r,width:(r?.width||r?.naturalWidth)*(1-T("zoomStep")/100),height:void 0}})}function kt(e){const t=e.currentTarget,o=parseInt(t.value,10),n=N("images"),r=N("images")?.[o];r&&R("images",{...n,[o]:{...r,width:void 0,height:void 0}})}function yt(e){const t=e.currentTarget,o=parseInt(t.value,10),n=N("images"),r=N("images")?.[o];r&&R("images",{...n,[o]:{...r,width:window.innerWidth+("left"===T("navbar")||"right"===T("navbar")?-34:0),height:void 0}})}function Et(e){const t=e.currentTarget,o=parseInt(t.value,10),n=N("images"),r=N("images")?.[o];r&&R("images",{...n,[o]:{...r,width:void 0,height:window.innerHeight+("bottom"===T("navbar")?-34:0)}})}function At(e){if(!e?.parentNode)return e;const t=e.cloneNode(!0);return e.parentNode.replaceChild(t,e),t}function xt(e,t,o){const n=qn[o];if(!n)throw new Error(`Invalid matcherKey: ${o}`);return[...document.querySelectorAll(e)].filter(e=>_.castArray(t).some(t=>n(e,t)))}function It(e,t,o,n="a"){return function(e,t,o){return xt(e,t,o)?.[0]}(e,t,o)?.closest(n)??null}function Mt(){const e=document.querySelector("#app-root");if(!e)return null;const t=Object.keys(e).find(e=>e.startsWith("__reactContainer")||e.startsWith("__reactFiber"));if(!t)return null;const o=[e[t]];for(;o.length>0;){const e=o.pop();if(e){if(e.stateNode?.props){const t=e.stateNode.props.client;if(t&&"function"==typeof t.getQueryCache){const e=t.getQueryCache().getAll();for(const t of e){const e=t.state.data;if(e?.result?.pages)return e.result.pages}}}if(e.memoizedProps){const t=e.memoizedProps.client||e.memoizedProps.value;if(t&&"function"==typeof t.getQueryCache){const e=t.getQueryCache().getAll();for(const t of e){const e=t.state.data;if(e?.result?.pages)return e.result.pages}}}e.child&&o.push(e.child),e.sibling&&o.push(e.sibling)}}return null}function _t(){const e=document.querySelector("#app-root");if(!e)return null;const t=Object.keys(e).find(e=>e.startsWith("__reactContainer")||e.startsWith("__reactFiber"));if(!t)return null;const o=[e[t]];for(;o.length>0;){const e=o.pop();if(!e)continue;const t=e=>{if(e&&"function"==typeof e.getQueryCache){const t=e.getQueryCache().getAll();for(const e of t){const t=e.state.data;if(t){if(Array.isArray(t)&&t.length>0&&(void 0!==t[0].chapterNumber||void 0!==t[0].number))return t;if(t.result&&Array.isArray(t.result.items)&&t.result.items.length>0){const e=t.result.items[0];if(void 0!==e.chapterNumber||void 0!==e.number||void 0!==e.mangaId)return t.result.items}}}}return null};if(e.stateNode?.props){const o=t(e.stateNode.props.client);if(o)return o}if(e.memoizedProps){const o=t(e.memoizedProps.client||e.memoizedProps.value);if(o)return o}e.child&&o.push(e.child),e.sibling&&o.push(e.sibling)}return null}function St(e){if(!e.closest("#app-root")&&!e.closest(".rpage-body"))return!1;const t=e.src||e.getAttribute("src")||"";if(!t)return!1;if(t.includes("avatar")||t.includes("logo")||t.includes("icon")||t.includes("placeholder"))return!1;if(t.startsWith("data:image/svg+xml"))return!1;const o=e.naturalWidth||e.width||0;return!(o>0&&o<250)}function Ct(e){return!!e&&!(e.includes("placeholder")||e.startsWith("data:image/svg+xml")||e.includes("loading"))&&(e.startsWith("data:")||e.startsWith("blob:")||e.includes("comix.to")||e.includes("static.comix.to")||e.includes("wowpic"))}async function Ot(e){const t=document.querySelector(".reader-content"),o=new Set;if(!t)return console.error("Error: '.reader-content' container not found."),[];let n=0;for(;o.size<e&&n<200;){t.scrollTop+=2e3,n++,await dr(300);const r=document.querySelectorAll(".reader-page img");for(const e of r){const t=e.getAttribute("src");t&&t.length>0&&o.add(t)}if(console.log(`Attempt ${n}: Collected ${o.size} of ${e} sources.`),t.scrollHeight-t.clientHeight<=t.scrollTop&&o.size<e){console.warn(`Reached end of scrollable content. Stopping with ${o.size} sources.`);break}}return Array.from(o)}function Tt(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(e=>{const t=[...e.attributes].filter(e=>/.*(src|url).*/i.test(e.name)&&!/^.*(blank|lazy|loading).*$/.test(e.value));return 0===t.length?"":t.find(e=>br.test(e.value))?.value??e?.getAttribute("src")??""})}var Lt,Dt,$t,Nt,Rt,zt,Pt,Bt,Gt,Ht,Vt,Ft,Wt,Ut,Zt,jt,qt,Qt,Yt,Xt,Kt,Jt,eo,to,oo,no,ro,io,ao,lo,so,co,ho,po,uo,mo,go,vo,fo,bo,wo,ko,yo,Eo,Ao,xo,Io,Mo,_o,So,Co,Oo,To,Lo,Do,$o,No,Ro,zo,Po,Bo,Go,Ho,Vo,Fo,Wo,Uo,Zo,jo,qo,Qo,Yo,Xo,Ko,Jo,en,tn,on,nn,rn,an,ln,sn,cn,dn,hn,pn,un,mn,gn,vn,fn,bn,wn,kn,yn,En,An,xn,In,Mn,_n,Sn,Cn,On,Tn,Ln,Dn,$n,Nn,Rn,zn,Pn,Bn,Gn,Hn,Vn,Fn,Wn,Un,Zn,jn,qn,Qn,Yn,Xn,Kn,Jn,er,tr,or,nr,rr,ir,ar,lr,sr,cr,dr,hr,pr,ur,mr,gr,vr,fr,br,wr,kr,yr,Er,Ar,xr,Ir,Mr,_r,Sr,Cr,Or,Tr,Lr,Dr,$r,Nr,Rr,zr,Pr,Br,Gr,Hr,Vr,Fr,Wr=Object.defineProperty,Ur=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),Zr=(e,t)=>{let o={};for(var n in e)Wr(o,n,{get:e[n],enumerable:!0});return t||Wr(o,Symbol.toStringTag,{value:"Module"}),o},jr="undefined"!=typeof GM_info?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}},qr=()=>{const e=bowser.getParser(window.navigator.userAgent).getPlatformType(!0);return"mobile"===e||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":"tablet"===e||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},Qr=()=>"mobile"===qr()||"tablet"===qr(),Yr=()=>"file:"===window.location.protocol||window.location.pathname.endsWith("Manga_Local_Viewer.html"),Xr=(t,o="settings")=>{if("undefined"!=typeof GM_addValueChangeListener)try{return GM_addValueChangeListener(o,(e,o,n,r)=>{r&&t(n)})}catch(t){e("Failed to add settings listener",t)}},Kr=[],Jr=0,ei=null,ti=4,oi=globalThis.nanostoresGlobal||={epoch:0},ni=()=>{let e;for(Jr=0;Jr<Kr.length;Jr+=ti)try{Kr[Jr](Kr[Jr+1].value,Kr[Jr+2],Kr[Jr+3])}catch(t){e=t}if(Kr.length=0,e)throw e},ri=e=>{let t=[],o={eq:Object.is,get:()=>(o.lc||o.listen(()=>{})(),o.value),init:e,lc:0,listen:e=>(o.lc=t.push(e),()=>{for(let t=Jr+ti;t<Kr.length;)Kr[t]===e?Kr.splice(t,ti):t+=ti;let n=t.indexOf(e);~n&&(t.splice(n,1),--o.lc||o.off())}),notify(e,n){oi.epoch++;let r=!Kr.length&&!ei;for(let r of t)ei?.has(r)||(ei?.add(r),Kr.push(r,o,e,ei?void 0:n));r&&ni()},off(){},set(e){let t=o.value;o.eq(t,e)||(o.value=e,o.notify(t))},subscribe(e){let t=o.listen(e);return e(o.value),t},value:e};return o},ii=5,ai=6,li=10,si=(e,t,o,n)=>(e.events=e.events||{},e.events[o+li]||(e.events[o+li]=n(t=>{e.events[o].reduceRight((e,t)=>(t(e),e),{shared:{},...t})})),e.events[o]=e.events[o]||[],e.events[o].push(t),()=>{let n=e.events[o],r=n.indexOf(t);n.splice(r,1),n.length||(delete e.events[o],e.events[o+li](),delete e.events[o+li])}),ci=1e3,di=(e,t)=>si(e,o=>{let n=t(o);n&&e.events[ai].push(n)},ii,t=>{let o=e.listen;e.listen=(...n)=>(e.lc||e.active||(e.active=!0,t()),o(...n));let n=e.off;return e.events[ai]=[],e.off=()=>{n(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let t of e.events[ai])t();e.events[ai]=[]}},ci)},()=>{e.listen=o,e.off=n}}),hi=(e,t,o)=>{let n,r;Array.isArray(e)||(e=[e]);let i,a=()=>{if(r===oi.epoch)return;r=oi.epoch;let o=e.map(e=>e.get());if(!n||o.some((e,t)=>e!==n[t])){n=o;let e=t(...o);e&&e.then&&e.t?e.then(e=>{n===o&&l.set(e)}):(l.set(e),r=oi.epoch)}},l=ri(void 0),s=l.get;l.get=()=>(a(),s());let c=o?()=>{clearTimeout(i),i=setTimeout(a)}:a;return di(l,()=>{let t=e.map(e=>e.listen(c));return a(),()=>{for(let e of t)e()}}),l},pi=(e,t)=>hi(e,t),ui=(e={})=>{let t=ri(e);return t.eqKey=Object.is,t.setKey=function(e,o){let n=t.value;void 0===o&&e in t.value?(t.value={...t.value},delete t.value[e],t.notify(n,e)):t.eqKey(t.value[e],o,e)||(t.value={...t.value,[e]:o},t.notify(n,e))},t},mi=globalThis,gi=e=>e,vi=mi.trustedTypes,fi=vi?vi.createPolicy("lit-html",{createHTML:e=>e}):void 0,bi="$lit$",wi=`lit$${Math.random().toFixed(9).slice(2)}$`,ki="?"+wi,yi=`<${ki}>`,Ei=document,Ai=()=>Ei.createComment(""),xi=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Ii=Array.isArray,Mi=e=>Ii(e)||"function"==typeof e?.[Symbol.iterator],_i="[ \t\n\f\r]",Si=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ci=/-->/g,Oi=/>/g,Ti=RegExp(`>|${_i}(?:([^\\s"'>=/]+)(${_i}*=${_i}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Li=/'/g,Di=/"/g,$i=/^(?:script|style|textarea|title)$/i,Ni=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),Ri=Ni(1),zi=Symbol.for("lit-noChange"),Pi=Symbol.for("lit-nothing"),Bi=new WeakMap,Gi=Ei.createTreeWalker(Ei,129),Hi=(e,t)=>{const o=e.length-1,n=[];let r,i=2===t?"<svg>":3===t?"<math>":"",a=Si;for(let t=0;t<o;t++){const o=e[t];let l,s,c=-1,d=0;for(;d<o.length&&(a.lastIndex=d,s=a.exec(o),null!==s);)d=a.lastIndex,a===Si?"!--"===s[1]?a=Ci:void 0!==s[1]?a=Oi:void 0!==s[2]?($i.test(s[2])&&(r=RegExp("</"+s[2],"g")),a=Ti):void 0!==s[3]&&(a=Ti):a===Ti?">"===s[0]?(a=r??Si,c=-1):void 0===s[1]?c=-2:(c=a.lastIndex-s[2].length,l=s[1],a=void 0===s[3]?Ti:'"'===s[3]?Di:Li):a===Di||a===Li?a=Ti:a===Ci||a===Oi?a=Si:(a=Ti,r=void 0);const h=a===Ti&&e[t+1].startsWith("/>")?" ":"";i+=a===Si?o+yi:c>=0?(n.push(l),o.slice(0,c)+bi+o.slice(c)+wi+h):o+wi+(-2===c?t:h)}return[u(e,i+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]},Vi=class e{constructor({strings:t,_$litType$:o},n){let r;this.parts=[];let i=0,a=0;const l=t.length-1,s=this.parts,[c,d]=Hi(t,o);if(this.el=e.createElement(c,n),Gi.currentNode=this.el.content,2===o||3===o){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=Gi.nextNode())&&s.length<l;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(bi)){const t=d[a++],o=r.getAttribute(e).split(wi),n=/([.?@])?(.*)/.exec(t);s.push({type:1,index:i,name:n[2],strings:o,ctor:"."===n[1]?Zi:"?"===n[1]?ji:"@"===n[1]?qi:Ui}),r.removeAttribute(e)}else e.startsWith(wi)&&(s.push({type:6,index:i}),r.removeAttribute(e));if($i.test(r.tagName)){const e=r.textContent.split(wi),t=e.length-1;if(t>0){r.textContent=vi?vi.emptyScript:"";for(let o=0;o<t;o++)r.append(e[o],Ai()),Gi.nextNode(),s.push({type:2,index:++i});r.append(e[t],Ai())}}}else if(8===r.nodeType)if(r.data===ki)s.push({type:2,index:i});else{let e=-1;for(;-1!==(e=r.data.indexOf(wi,e+1));)s.push({type:7,index:i}),e+=wi.length-1}i++}}static createElement(e,t){const o=Ei.createElement("template");return o.innerHTML=e,o}},Fi=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??Ei).importNode(t,!0);Gi.currentNode=n;let r=Gi.nextNode(),i=0,a=0,l=o[0];for(;void 0!==l;){if(i===l.index){let t;2===l.type?t=new Wi(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new Qi(r,this,e)),this._$AV.push(t),l=o[++a]}i!==l?.index&&(r=Gi.nextNode(),i++)}return Gi.currentNode=Ei,n}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},Wi=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=Pi,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=m(this,e,t),xi(e)?e===Pi||null==e||""===e?(this._$AH!==Pi&&this._$AR(),this._$AH=Pi):e!==this._$AH&&e!==zi&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):Mi(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Pi&&xi(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ei.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Vi.createElement(u(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new Fi(n,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=Bi.get(e.strings);return void 0===t&&Bi.set(e.strings,t=new Vi(e)),t}k(t){Ii(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let n,r=0;for(const i of t)r===o.length?o.push(n=new e(this.O(Ai()),this.O(Ai()),this,this.options)):n=o[r],n._$AI(i),r++;r<o.length&&(this._$AR(n&&n._$AB.nextSibling,r),o.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=gi(e).nextSibling;gi(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}},Ui=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,r){this.type=1,this._$AH=Pi,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Pi}_$AI(e,t=this,o,n){const r=this.strings;let i=!1;if(void 0===r)e=m(this,e,t,0),i=!xi(e)||e!==this._$AH&&e!==zi,i&&(this._$AH=e);else{const n=e;let a,l;for(e=r[0],a=0;a<r.length-1;a++)l=m(this,n[o+a],t,a),l===zi&&(l=this._$AH[a]),i||=!xi(l)||l!==this._$AH[a],l===Pi?e=Pi:e!==Pi&&(e+=(l??"")+r[a+1]),this._$AH[a]=l}i&&!n&&this.j(e)}j(e){e===Pi?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Zi=class extends Ui{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Pi?void 0:e}},ji=class extends Ui{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Pi)}},qi=class extends Ui{constructor(e,t,o,n,r){super(e,t,o,n,r),this.type=5}_$AI(e,t=this){if((e=m(this,e,t,0)??Pi)===zi)return;const o=this._$AH,n=e===Pi&&o!==Pi||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==Pi&&(o===Pi||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Qi=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){m(this,e)}},Yi={M:bi,P:wi,A:ki,C:1,L:Hi,R:Fi,D:Mi,V:m,I:Wi,H:Ui,N:ji,U:qi,B:Zi,F:Qi},Xi=mi.litHtmlPolyfillSupport;Xi?.(Vi,Wi),(mi.litHtmlVersions??=[]).push("3.3.3");var{I:Ki}=Yi;
/**
	* @license
	* Copyright 2020 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/
/**
	* @license
	* Copyright 2017 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/Lt=e=>(...t)=>({_$litDirective$:e,values:t}),Dt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},$t=(e,t)=>{const o=e._$AN;if(void 0===o)return!1;for(const e of o)e._$AO?.(t,!1),$t(e,t);return!0},Nt=e=>{let t,o;do{if(void 0===(t=e._$AM))break;o=t._$AN,o.delete(e),e=t}while(0===o?.size)},Rt=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(void 0===o)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),zt(t)}},zt=e=>{2==e.type&&(e._$AP??=v,e._$AQ??=g)},Pt=class extends Dt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),Rt(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&($t(this,e),Nt(this))}setValue(e){if((()=>void 0===this._$Ct.strings)())this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Bt=()=>new Gt,Gt=class{},Ht=new WeakMap,Vt=Lt(class extends Pt{render(e){return Pi}update(e,[t]){const o=t!==this.G;return o&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),Pi}rt(e){if(void 0!==this.G)if(this.isConnected||(e=void 0),"function"==typeof this.G){const t=this.ht??globalThis;let o=Ht.get(t);void 0===o&&(o=new WeakMap,Ht.set(t,o)),void 0!==o.get(this.G)&&this.G.call(this.ht,void 0),o.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?Ht.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Ft=[{ID:"en_US",NAME:"English (US)",STARTING:"Starting Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_COLOR:"Color",THEME_HUE:"Color Hue",THEME_SHADE:"Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",DEVICE_MODE:"Device Mode",DEVICE_MODE_AUTO:"Auto",DEVICE_MODE_DESKTOP:"Desktop",DEVICE_MODE_TABLET:"Tablet",DEVICE_MODE_MOBILE:"Mobile",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Left to Right",VIEW_MODE_RIGHT:"Horizontal - Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Book - Left to Right",VIEW_MODE_MANGA:"Manga - Right to Left",VIEW_MODE_GALLERY:"Gallery",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",DOWNLOAD_PROGRESS:"Downloading: ##num## of ##total##",GENERATING_ZIP:"Generating Zip file...",DOWNLOAD_INCOMPLETE:"Download Incomplete",DOWNLOAD_INCOMPLETE_MESSAGE:"Some pages failed to download and were skipped. A list of failed pages has been added to the ZIP file.",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from: Page ##num## (Only ONCE per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:"\n    <h3>Supported Keys</h3>\n    Allowed modifiers: shift, option, alt, ctrl, control, command. <br/>\n    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>\n    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>\n  ",ATTENTION:"Attention",WARNING:"Warning",BUTTON_RESET_SETTINGS:"Reset Settings",SETTINGS_RESET:"Settings have been reset, reload the page to take effect",LANGUAGE_CHANGED:"Language has been changed, reload the page to take effect",AUTO_DOWNLOAD:"Next time a chapter finish loading you will be prompted to save automatically",LAZY_LOAD:"Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",LAZY_LOAD_IMAGES_ENABLE:"Enable Lazy Load Images",LAZY_LOAD_IMAGES:"Lazy Start From Page (between 5 and 100)",RETURN_CHAPTER_LIST:"Return to Chapter List",PAGES_LOADED:"Pages Loaded",GO_TO_PAGE:"Go to Page",ENLARGE:"Enlarge",RESTORE:"Restore",REDUCE:"Reduce",FIT_WIDTH:"Fit Width",FIT_HEIGHT:"Fit Height",PERCENT:"Percent",TOGGLE_CONTROLS:"Toggle page controls",ZOOM_IN:"Zoom In",ZOOM_OUT:"Zoom Out",ZOOM_RESET:"Zoom Reset",ZOOM_WIDTH:"Zoom to Width",ZOOM_HEIGHT:"Zoom to Height",HIDE:"Hide",RELOAD:"Reload",SLOWLY:"Slowly",NORMAL:"Normal",FAST:"Fast",EXTREME:"Extreme",ALL_PAGES:"All Pages",SPEED_WARNING:"Loading Speed too High",SPEED_WARNING_MESSAGE:"This speed is not recommended.<br/> It may hurt some servers or get your IP marked as DDoS attacker.<br/> Please use with caution!",SCROLL_UP:"Scroll Up",SCROLL_DOWN:"Scroll Down",CLOSE:"Close",CANCEL:"Cancel",LIST_EMPTY:"List Empty",SCROLL_START:"Toggle Auto Scroll",INCREASE_SPEED:"Increase Scroll Speed",DECREASE_SPEED:"Decrease Scroll Speed",AUTO_SCROLL_HEIGHT:"Auto Scroll Speed in Pixels",VERTICAL_SEPARATOR:"Show Vertical Separators",END:"End",SCOPE:"Scope",GLOBAL:"Global",GENERAL:"General",LOADING:"Loading",ZOOM:"Zoom",OTHERS:"Others",NAVBAR_TYPE:"Change Navbar Type",NAVBAR_BOTTOM:"Bottom",NAVBAR_LEFT:"Left",NAVBAR_RIGHT:"Right",NAVBAR_DISABLED:"Disabled",PAGINATION_TYPE:"Pagination Type",PAGINATION_DISABLED:"Disabled",PAGINATION_SLIDER:"Slider",PAGINATION_ARROWS:"Side Arrows",PAGINATION_BOTH:"Both",FILE_MENU:"Main Menu",VIEW_MENU:"View Menu",ZOOM_MENU:"Zoom Menu",DOUBLE_PAGE:"Toggle Double Page",CHOOSE_FILE:"Choose File",NO_FILES_SELECTED:"No files selected"},{ID:"es_ES",NAME:"Español (ES)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando lectura desde la Página ",WAITING:"Por favor espere, 3 segundos...",CHOOSE_BEGINNING:"Elija la página en la que comenzar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Ajustes",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de color",THEME:"Tema",THEME_COLOR:"Color",THEME_HUE:"Matiz del color",THEME_SHADE:"Saturación del color",DEFAULT_LOAD_MODE:"Modo de carga por defecto",DEVICE_MODE:"Modo de dispositivo",DEVICE_MODE_AUTO:"Automático",DEVICE_MODE_DESKTOP:"Escritorio",DEVICE_MODE_TABLET:"Tableta",DEVICE_MODE_MOBILE:"Móvil",LOAD_MODE_NORMAL:"Normal (Espera 3s)",LOAD_MODE_ALWAYS:"Siempre (Inmediatamente)",LOAD_MODE_NEVER:"Nunca (Manualmente)",LOAD_SPEED:"Velocidad carga",DEFAULT_ZOOM:"Zoom por defecto (entre 5 y 200)",DEFAULT_ZOOM_MODE:"Modo de zoom por defecto",MINIMUM_ZOOM:"Zoom mínimo relativo al ancho de la pantalla",ZOOM_STEP:"Paso entre cambios de zoom (entre 5 y 50)",DEFAULT_VIEW_MODE:"Modo de visualización por defecto",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Izquierda a derecha",VIEW_MODE_RIGHT:"Horizontal - Derecha a izquierda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Libro - Izquierda a derecha",VIEW_MODE_MANGA:"Manga - Derecha a izquierda",VIEW_MODE_GALLERY:"Galería",FIT_WIDTH_OVERSIZED:"Ajustar ancho si es demasiado grande",SHOW_THUMBNAILS:"Mostrar miniaturas",HIDE_CONTROLS:"Ocultar siempre la barra de controles",HEADER_TYPE:"Cambiar tipo de cabecera",HEADER_HOVER:"Pasar por encima",HEADER_SCROLL:"Desplazamiento",HEADER_CLICK:"Hacer click",HEADER_FIXED:"Fijo",HEADER_SIMPLE:"Sencillo",BUTTON_DOWNLOAD:"Descargar",DOWNLOAD_ZIP:"Descargar fichero Zip",DOWNLOAD_IMAGES:"Autodescargar imágenes como Zip",DOWNLOAD_PROGRESS:"Descargando: ##num## de ##total##",GENERATING_ZIP:"Generando archivo Zip...",DOWNLOAD_INCOMPLETE:"Descarga Incompleta",DOWNLOAD_INCOMPLETE_MESSAGE:"Algunas páginas no se pudieron descargar y se saltaron. Se ha añadido una lista de páginas fallidas al archivo ZIP.",BUTTON_NEXT:"Siguiente",NEXT_CHAPTER:"Siguiente capítulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capítulo anterior",BOOKMARKS:"Marcadores",BOOKMARK:"Marcador",BOOKMARK_REMOVED:"Marcador eliminado",BOOKMARK_SAVED:"Marcador guardado",BOOKMARK_MESSAGE:"La próxima vez que abra este capítulo, continuará desde la página ##num## (Sólo UNA VEZ por Marcador)",KEYBINDINGS:"Atajos de teclado",EDIT_KEYBINDS:"Editar atajos",SAVE_KEYBINDS:"Guardar atajos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Guardar",KEYBIND_RULES:"\n    <h3>Teclas soportadas</h3>\n    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>\n    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>\n    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>\n  ",ATTENTION:"Atención",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Reiniciar ajustes(Reset Settings)",SETTINGS_RESET:"Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto",LANGUAGE_CHANGED:"Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto",AUTO_DOWNLOAD:"La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente",LAZY_LOAD:"La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",LAZY_LOAD_IMAGES_ENABLE:"Habilitar carga de imágenes diferida",LAZY_LOAD_IMAGES:"Empezar carga diferida a partir de la página (entre 5 y 100)",RETURN_CHAPTER_LIST:"Regresar a la lista de capítulos",PAGES_LOADED:"Páginas cargadas",GO_TO_PAGE:"Ir a página",ENLARGE:"Agrandar",RESTORE:"Restaurar",REDUCE:"Reducir",FIT_WIDTH:"Ajustar al ancho",FIT_HEIGHT:"Ajustar al alto",PERCENT:"Porcentual",TOGGLE_CONTROLS:"Alternar controles de página",ZOOM_IN:"Acercar",ZOOM_OUT:"Alejar",ZOOM_RESET:"Restablecer zoom",ZOOM_WIDTH:"Zoom al ancho",ZOOM_HEIGHT:"Zoom al alto",HIDE:"Ocultar",RELOAD:"Recargar",SLOWLY:"Lento",NORMAL:"Normal",FAST:"Rápido",EXTREME:"Extremo",ALL_PAGES:"Todas las páginas",SPEED_WARNING:"Velocidad de carga muy alta",SPEED_WARNING_MESSAGE:"No se recomienda esta velocidad.<br/> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br/> ¡Utilícelo con precaución!",SCROLL_UP:"Desplazar arriba",SCROLL_DOWN:"Desplazarse hacia abajo",CLOSE:"Cerrar",CANCEL:"Cancelar",LIST_EMPTY:"Lista vacía",SCROLL_START:"Alternar desplazamiento automático",INCREASE_SPEED:"Aumentar la velocidad de desplazamiento",DECREASE_SPEED:"Disminuir la velocidad de desplazamiento",AUTO_SCROLL_HEIGHT:"Velocidad de desplazamiento automático en píxeles",VERTICAL_SEPARATOR:"Mostrar separadores verticales",END:"Fin",SCOPE:"Alcance",GLOBAL:"Global",GENERAL:"General",LOADING:"Carga",ZOOM:"Zoom",OTHERS:"Otros",NAVBAR_TYPE:"Cambiar el tipo de barra de navegación",NAVBAR_BOTTOM:"Abajo",NAVBAR_LEFT:"Izquierda",NAVBAR_RIGHT:"Derecha",NAVBAR_DISABLED:"Desactivado",PAGINATION_TYPE:"Tipo de paginación",PAGINATION_DISABLED:"Desactivado",PAGINATION_SLIDER:"Control deslizante",PAGINATION_ARROWS:"Flechas laterales",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menú principal",VIEW_MENU:"Ver menú",ZOOM_MENU:"Menú Zoom",DOUBLE_PAGE:"Alternar Página Doble",CHOOSE_FILE:"Elegir archivo",NO_FILES_SELECTED:"No se han seleccionado archivos"},{ID:"pt_BR",NAME:"Portugues (Brasil)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando leitura na Pagina ",WAITING:"Por Favor espere, 3 segundos...",CHOOSE_BEGINNING:"Escolha a pagina de onde começar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Configurações",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de Color",THEME:"Tema",THEME_COLOR:"Cor",THEME_HUE:"Tom da Cor",THEME_SHADE:"Saturação da Cor",DEFAULT_LOAD_MODE:"Forma de Carregamento Padrão",DEVICE_MODE:"Modo de Dispositivo",DEVICE_MODE_AUTO:"Automático",DEVICE_MODE_DESKTOP:"Desktop",DEVICE_MODE_TABLET:"Tablet",DEVICE_MODE_MOBILE:"Celular",LOAD_MODE_NORMAL:"Normal(Esperando 3 sec)",LOAD_MODE_ALWAYS:"Sempre(Imediatamente)",LOAD_MODE_NEVER:"Nunca(Manualmente)",LOAD_SPEED:"Velocidade de Carregamento",DEFAULT_ZOOM:"Zoom padrão (entre 5 e 200)",DEFAULT_ZOOM_MODE:"Modo de Zoom padrão",MINIMUM_ZOOM:"Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",ZOOM_STEP:"Precisão da Mudança do Zoom (entre 5 e 50)",DEFAULT_VIEW_MODE:"Modo de Visualização Padrão",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Esquerda para Direita",VIEW_MODE_RIGHT:"Horizontal - Direita para Esquerda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livro - Esquerda para Direita",VIEW_MODE_MANGA:"Mangá - Direita para Esquerda",VIEW_MODE_GALLERY:"Galeria",FIT_WIDTH_OVERSIZED:"Encher a tela se grande demais",SHOW_THUMBNAILS:"Mostra Miniaturas",HIDE_CONTROLS:"Sempre esconder controles das paginas",HEADER_TYPE:"Mudar Tipo de Cabeçalho",HEADER_HOVER:"Passar por perto",HEADER_SCROLL:"Rolagem do Mouse",HEADER_CLICK:"Click",HEADER_FIXED:"Fixo",HEADER_SIMPLE:"Simples",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Baixar arquivo Zip",DOWNLOAD_IMAGES:"Download das Imagens como Zip Automaticamente",DOWNLOAD_PROGRESS:"Baixando: ##num## de ##total##",GENERATING_ZIP:"Gerando arquivo Zip...",DOWNLOAD_INCOMPLETE:"Download Incompleto",DOWNLOAD_INCOMPLETE_MESSAGE:"Algumas páginas falharam ao baixar e foram puladas. Uma lista de páginas que falharam foi adicionada ao arquivo ZIP.",BUTTON_NEXT:"Proximo",NEXT_CHAPTER:"Proximo Capitulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capitulo Anterior",BOOKMARKS:"Marca paginas",BOOKMARK:"Marcar pagina",BOOKMARK_REMOVED:"Marca pagina Removido",BOOKMARK_SAVED:"Marca pagina Salvo",BOOKMARK_MESSAGE:"Proxima vez que abrir este capitulo continuará a partir da Pagina ##num## (Apenas UMA VEZ por marca pagina)",KEYBINDINGS:"Atalhos",EDIT_KEYBINDS:"Editar Atalhos",SAVE_KEYBINDS:"Salvar Atalhos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Salvar",KEYBIND_RULES:"\n    <h3>Teclas Suportadas</h3>\n    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>\n    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>\n    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>\n  ",ATTENTION:"Atenção",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Limpar Configurações(Reset Settings)",SETTINGS_RESET:"Configurações foram limpas, recarregue o site para efetivar a alteração",LANGUAGE_CHANGED:"Idioma foi alterado, recarregue o site para efetivar a alteração",AUTO_DOWNLOAD:"Proxima vez que abrir um capitulo download iniciara automaticamente",LAZY_LOAD:"Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",LAZY_LOAD_IMAGES_ENABLE:"Ativar Carregamento de imagens preguiçoso",LAZY_LOAD_IMAGES:"Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)",RETURN_CHAPTER_LIST:"Voltar a lista de Capitulos",PAGES_LOADED:"Paginas Carregadas",GO_TO_PAGE:"Pular para",ENLARGE:"Aumentar",RESTORE:"Restaurar",REDUCE:"Diminuir",FIT_WIDTH:"Preencher Largura",FIT_HEIGHT:"Preencher Altura ",PERCENT:"Percentual",TOGGLE_CONTROLS:"Mostar controles de pagina",ZOOM_IN:"Mais Zoom",ZOOM_OUT:"Menos Zoom",ZOOM_RESET:"Resetar Zoom",ZOOM_WIDTH:"Zoom para Largura",ZOOM_HEIGHT:"Zoom para Altura",HIDE:"Esconder",RELOAD:"Recarregar",SLOWLY:"Devagar",NORMAL:"Normal",FAST:"Rapido",EXTREME:"Extremo",ALL_PAGES:"Todas as Paginas",SPEED_WARNING:"Velocidade de Carregamento muito alta",SPEED_WARNING_MESSAGE:"Essa velocidade não é recomendada.<br/> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br/> Use com cuidado!",SCROLL_UP:"Subir Pagina",SCROLL_DOWN:"Descer Pagina",CLOSE:"Fechar",CANCEL:"Cancelar",LIST_EMPTY:"Lista Vazia",SCROLL_START:"Ativar Rolagem Automatica",INCREASE_SPEED:"Aumentar Valocidade da Rolagem",DECREASE_SPEED:"Diminuir Valocidade da Rolagem",AUTO_SCROLL_HEIGHT:"Velocidade da Rolagem Automatica em Pixels",VERTICAL_SEPARATOR:"Mostrar Separadores Verticais",END:"Fin",SCOPE:"Escopo",GLOBAL:"Global",GENERAL:"Geral",LOADING:"Carregamento",ZOOM:"Zoom",OTHERS:"Outros",NAVBAR_TYPE:"Mudar barra de navegação",NAVBAR_BOTTOM:"Embaixo",NAVBAR_LEFT:"Esquerda",NAVBAR_RIGHT:"Direita",NAVBAR_DISABLED:"Desativado",PAGINATION_TYPE:"Tipo de Paginação",PAGINATION_DISABLED:"Desativado",PAGINATION_SLIDER:"Controle deslizante",PAGINATION_ARROWS:"Setas Laterais",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menu Principal",VIEW_MENU:"Menu de Visualizações",ZOOM_MENU:"Menu de Zoom",DOUBLE_PAGE:"Alternar Página Dupla",CHOOSE_FILE:"Escolher arquivo",NO_FILES_SELECTED:"Nenhum arquivo selecionado"},{ID:"zh_CN",NAME:"中文 (简体)",STARTING:"正在启动 Manga OnlineViewer",RESUME:"从页面继续阅读 ",WAITING:"请等待3秒钟...",CHOOSE_BEGINNING:"选择要开始的页数:",BUTTON_START:"启动Manga OnlineViewer",SETTINGS:"设置",LANGUAGE:"语言",COLOR_SCHEME:"配色方案",THEME:"主题",THEME_COLOR:"颜色",THEME_HUE:"色相",THEME_SHADE:"色度",DEFAULT_LOAD_MODE:"默认加载模式",DEVICE_MODE:"设备模式",DEVICE_MODE_AUTO:"自动",DEVICE_MODE_DESKTOP:"桌面",DEVICE_MODE_TABLET:"平板",DEVICE_MODE_MOBILE:"手机",LOAD_MODE_NORMAL:"等待模式(等待3秒自动加载 )",LOAD_MODE_ALWAYS:"自动模式(无需等待)",LOAD_MODE_NEVER:"手动模式(点击启动)",LOAD_SPEED:"加载速度",DEFAULT_ZOOM:"默认缩放 (最小 5 最大 200)",DEFAULT_ZOOM_MODE:"默认缩放模式",MINIMUM_ZOOM:"相对于屏幕宽度的最小缩放 (最小 30 最大 100)",ZOOM_STEP:"缩放级别 (最小 5 最大 50)",DEFAULT_VIEW_MODE:"默认视图模式",VIEW_MODE_VERTICAL:"垂直有缝",VIEW_MODE_LEFT:"横向 - 从左到右",VIEW_MODE_RIGHT:"横向 - 从右到左",VIEW_MODE_WEBCOMIC:"垂直无缝",VIEW_MODE_BOOK:"书籍 - 从左到右",VIEW_MODE_MANGA:"漫画 - 从右到左",VIEW_MODE_GALLERY:"图库",FIT_WIDTH_OVERSIZED:"如果尺寸过大、则适合宽度",SHOW_THUMBNAILS:"显示缩略图",HIDE_CONTROLS:"始终隐藏页面控件",HEADER_TYPE:"更改标题显示方式",HEADER_HOVER:"悬停",HEADER_SCROLL:"滚动",HEADER_CLICK:"点击",HEADER_FIXED:"固定",HEADER_SIMPLE:"简单",BUTTON_DOWNLOAD:"下载",DOWNLOAD_ZIP:"下载压缩文件",DOWNLOAD_IMAGES:"自动将图片下载成ZIP",DOWNLOAD_PROGRESS:"正在下载：第 ##num## 页，共 ##total## 页",GENERATING_ZIP:"正在生成 Zip 文件...",DOWNLOAD_INCOMPLETE:"下载不完整",DOWNLOAD_INCOMPLETE_MESSAGE:"部分页面下载失败并已跳过。失败页面列表已添加到 ZIP 文件中。",BUTTON_NEXT:"下一页",NEXT_CHAPTER:"下一章",BUTTON_PREVIOUS:"上一页",PREVIOUS_CHAPTER:"上一章",BOOKMARKS:"书签",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"删除书签",BOOKMARK_SAVED:"保存书签",BOOKMARK_MESSAGE:"下次打开本章时，将从: 页码 ##num## (仅一次 每个书签)",KEYBINDINGS:"快捷键",EDIT_KEYBINDS:"编辑键绑定",SAVE_KEYBINDS:"保存键绑定",BUTTON_EDIT:"编辑",BUTTON_SAVE:"救",KEYBIND_RULES:"\n    <h3>支持的密钥</h3>\n    允许的修饰符: shift, option, alt, ctrl, control, command. <br/>\n    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>\n    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>\n  ",ATTENTION:"注意",WARNING:"警告",BUTTON_RESET_SETTINGS:"重置设置(Reset Settings)",SETTINGS_RESET:"设置已重置、重新加载页面才能生效",LANGUAGE_CHANGED:"语言已更改、重新加载页面才能生效",AUTO_DOWNLOAD:"下次章节加载完成时、系统将提示您自动保存",LAZY_LOAD:"延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",LAZY_LOAD_IMAGES_ENABLE:"启用延迟加载图像",LAZY_LOAD_IMAGES:"惰性加载从页面 (最小 5 最大 100)",RETURN_CHAPTER_LIST:"返回章节列表",PAGES_LOADED:"已加载的页数",GO_TO_PAGE:"转到页数",ENLARGE:"放大",RESTORE:"还原",REDUCE:"缩小",FIT_WIDTH:"适合宽度",FIT_HEIGHT:"适合高度",PERCENT:"百分之",TOGGLE_CONTROLS:"显示隐藏页面控件",ZOOM_IN:"放大",ZOOM_OUT:"缩小",ZOOM_RESET:"还原",ZOOM_WIDTH:"适合宽度",ZOOM_HEIGHT:"适合高度",HIDE:"显示隐藏页面控件",RELOAD:"重新加载",SLOWLY:"慢速",NORMAL:"正常",FAST:"快速",EXTREME:"极端",ALL_PAGES:"所有页面",SPEED_WARNING:"加载速度过高",SPEED_WARNING_MESSAGE:"不建议使用此速度.<br/>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br/>请谨慎使用!",SCROLL_UP:"向上滚动",SCROLL_DOWN:"向下滚动",CLOSE:"关闭",CANCEL:"取消",LIST_EMPTY:"没有收藏书签",SCROLL_START:"切换自动滚动",INCREASE_SPEED:"增加滚动速度",DECREASE_SPEED:"降低滚动速度",AUTO_SCROLL_HEIGHT:"自动滚动速度（以像素为单位）",VERTICAL_SEPARATOR:"显示垂直分隔符",END:"结尾",SCOPE:"范围",GLOBAL:"全球",GENERAL:"常规",LOADING:"装载",ZOOM:"缩放",OTHERS:"别人",NAVBAR_TYPE:"更改导航栏类型",NAVBAR_BOTTOM:"底部",NAVBAR_LEFT:"左边",NAVBAR_RIGHT:"正确的",NAVBAR_DISABLED:"已禁用",PAGINATION_TYPE:"分页类型",PAGINATION_DISABLED:"已禁用",PAGINATION_SLIDER:"滑块",PAGINATION_ARROWS:"侧边箭头",PAGINATION_BOTH:"两者",FILE_MENU:"主菜单",VIEW_MENU:"查看菜单",ZOOM_MENU:"缩放菜单",DOUBLE_PAGE:"切换双页",CHOOSE_FILE:"选择文件",NO_FILES_SELECTED:"未选择任何文件"},{ID:"de_DE",NAME:"Deutsch",STARTING:"Starte Manga OnlineViewer",RESUME:"Fortsetzen ab Seite ",WAITING:"Bitte warten, 3 Sekunden...",CHOOSE_BEGINNING:"Wähle die Startseite:",BUTTON_START:"Manga OnlineViewer starten",SETTINGS:"Einstellungen",LANGUAGE:"Sprache",COLOR_SCHEME:"Farbschema",THEME:"Design",THEME_COLOR:"Farbe",THEME_HUE:"Farbton",THEME_SHADE:"Schattierung",DEFAULT_LOAD_MODE:"Standard-Lademodus",DEVICE_MODE:"Gerätemodus",DEVICE_MODE_AUTO:"Automatisch",DEVICE_MODE_DESKTOP:"Desktop",DEVICE_MODE_TABLET:"Tablet",DEVICE_MODE_MOBILE:"Mobil",LOAD_MODE_NORMAL:"Normal (3 Sek. warten)",LOAD_MODE_ALWAYS:"Immer (sofort)",LOAD_MODE_NEVER:"Nie (manuell)",LOAD_SPEED:"Ladegeschwindigkeit",DEFAULT_ZOOM:"Standard-Zoom (zwischen 5 und 200)",DEFAULT_ZOOM_MODE:"Standard-Zoommodus",MINIMUM_ZOOM:"Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)",ZOOM_STEP:"Zoom-Schrittgröße (zwischen 5 und 50)",DEFAULT_VIEW_MODE:"Standard-Ansichtsmodus",VIEW_MODE_VERTICAL:"Vertikal",VIEW_MODE_LEFT:"Horizontal - Links nach Rechts",VIEW_MODE_RIGHT:"Horizontal - Rechts nach Links",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Buch - Links nach Rechts",VIEW_MODE_MANGA:"Manga - Rechts nach Links",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Breite anpassen bei Übergröße",SHOW_THUMBNAILS:"Miniaturansichten anzeigen",HIDE_CONTROLS:"Seitensteuerung immer ausblenden",HEADER_TYPE:"Kopfbereichstyp ändern",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scrollen",HEADER_CLICK:"Klicken",HEADER_FIXED:"Fixiert",HEADER_SIMPLE:"Einfach",BUTTON_DOWNLOAD:"Herunterladen",DOWNLOAD_ZIP:"Zip-Datei herunterladen",DOWNLOAD_IMAGES:"Bilder automatisch als Zip herunterladen",DOWNLOAD_PROGRESS:"Herunterladen: ##num## von ##total##",GENERATING_ZIP:"Zip-Datei wird erstellt...",DOWNLOAD_INCOMPLETE:"Download unvollständig",DOWNLOAD_INCOMPLETE_MESSAGE:"Einige Seiten konnten nicht heruntergeladen werden und wurden übersprungen. Eine Liste der fehlgeschlagenen Seiten wurde der ZIP-Datei hinzugefügt.",BUTTON_NEXT:"Weiter",NEXT_CHAPTER:"Nächstes Kapitel",BUTTON_PREVIOUS:"Zurück",PREVIOUS_CHAPTER:"Vorheriges Kapitel",BOOKMARKS:"Lesezeichen",BOOKMARK:"Lesezeichen",BOOKMARK_REMOVED:"Lesezeichen entfernt",BOOKMARK_SAVED:"Lesezeichen gespeichert",BOOKMARK_MESSAGE:"Beim nächsten Öffnen dieses Kapitels wird ab fortgesetzt: Seite ##num## (Nur EINMAL pro Lesezeichen)",KEYBINDINGS:"Tastenkürzel",EDIT_KEYBINDS:"Tastenkürzel bearbeiten",SAVE_KEYBINDS:"Tastenkürzel speichern",BUTTON_EDIT:"Bearbeiten",BUTTON_SAVE:"Speichern",KEYBIND_RULES:"\n    <h3>Unterstützte Tasten</h3>\n    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. <br/>\n    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>\n    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>\n  ",ATTENTION:"Achtung",WARNING:"Warnung",BUTTON_RESET_SETTINGS:"Einstellungen zurücksetzen(Reset Settings)",SETTINGS_RESET:"Die Einstellungen wurden zurückgesetzt, bitte Seite neu laden",LANGUAGE_CHANGED:"Die Sprache wurde geändert, bitte Seite neu laden",AUTO_DOWNLOAD:"Beim nächsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern möchtest",LAZY_LOAD:"Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",LAZY_LOAD_IMAGES_ENABLE:"Lazy Load Bilder aktivieren",LAZY_LOAD_IMAGES:"Lazy Start ab Seite (zwischen 5 und 100)",RETURN_CHAPTER_LIST:"Zur Kapitelübersicht zurückkehren",PAGES_LOADED:"Seiten geladen",GO_TO_PAGE:"Gehe zu Seite",ENLARGE:"Vergrößern",RESTORE:"Wiederherstellen",REDUCE:"Wiederherstellen",FIT_WIDTH:"Breite anpassen",FIT_HEIGHT:"Höhe anpassen",PERCENT:"Prozent",TOGGLE_CONTROLS:"Seitensteuerung umschalten",ZOOM_IN:"Hineinzoomen",ZOOM_OUT:"Herauszoomen",ZOOM_RESET:"Zoom zurücksetzen",ZOOM_WIDTH:"Auf Breite zoomen",ZOOM_HEIGHT:"Auf Höhe zoomen",HIDE:"Ausblenden",RELOAD:"Neu laden",SLOWLY:"Langsam",NORMAL:"Normal",FAST:"Schnell",EXTREME:"Extrem",ALL_PAGES:"Alle Seiten",SPEED_WARNING:"Ladegeschwindigkeit zu hoch",SPEED_WARNING_MESSAGE:"Diese Geschwindigkeit wird nicht empfohlen.<br/> Sie kann einige Server überlasten oder deine IP als DDoS-Angreifer markieren.<br/> Bitte mit Vorsicht verwenden!",SCROLL_UP:"Nach oben scrollen",SCROLL_DOWN:"Nach unten scrollen",CLOSE:"Schließen",CANCEL:"Abbrechen",LIST_EMPTY:"Liste leer",SCROLL_START:"Auto-Scroll umschalten",INCREASE_SPEED:"Scrollgeschwindigkeit erhöhen",DECREASE_SPEED:"Scrollgeschwindigkeit verringern",AUTO_SCROLL_HEIGHT:"Auto-Scroll-Geschwindigkeit in Pixel",VERTICAL_SEPARATOR:"Vertikale Trenner anzeigen",END:"Ende",SCOPE:"Bereich",GLOBAL:"Global",GENERAL:"Allgemein",LOADING:"Lädt",ZOOM:"Zoom",OTHERS:"Sonstiges",NAVBAR_TYPE:"Navigationsleistentyp ändern",NAVBAR_BOTTOM:"Unten",NAVBAR_LEFT:"Links",NAVBAR_RIGHT:"Rechts",NAVBAR_DISABLED:"Deaktiviert",PAGINATION_TYPE:"Paginierungstyp",PAGINATION_DISABLED:"Deaktiviert",PAGINATION_SLIDER:"Schieberegler",PAGINATION_ARROWS:"Seitenpfeile",PAGINATION_BOTH:"Beides",FILE_MENU:"Hauptmenü",VIEW_MENU:"Menü „Ansicht“",ZOOM_MENU:"Zoom-Menü",DOUBLE_PAGE:"Doppelseite umschalten",CHOOSE_FILE:"Datei auswählen",NO_FILES_SELECTED:"Keine Dateien ausgewählt"},{ID:"fr_FR",NAME:"Français (FR)",STARTING:"Démarrage Manga OnlineViewer",RESUME:"Reprise de la lecture à partir de la Page ",WAITING:"Veuillez patienter, 3 secondes...",CHOOSE_BEGINNING:"Choisissez la page par laquelle commencer :",BUTTON_START:"Démarrer Manga OnlineViewer",SETTINGS:"Paramètres",LANGUAGE:"Langue",COLOR_SCHEME:"Palette de couleurs",THEME:"Thème",THEME_COLOR:"Couleur",THEME_HUE:"Teinte de couleur",THEME_SHADE:"Nuance de couleur",DEFAULT_LOAD_MODE:"Mode de chargement par défaut",DEVICE_MODE:"Mode d'appareil",DEVICE_MODE_AUTO:"Automatique",DEVICE_MODE_DESKTOP:"Bureau",DEVICE_MODE_TABLET:"Tablette",DEVICE_MODE_MOBILE:"Mobile",LOAD_MODE_NORMAL:"Normal (attendre 3 s)",LOAD_MODE_ALWAYS:"Toujours (immédiatement)",LOAD_MODE_NEVER:"Jamais (manuellement)",LOAD_SPEED:"Vitesse de chargement",DEFAULT_ZOOM:"Zoom par défaut (entre 5 et 200)",DEFAULT_ZOOM_MODE:"Mode de zoom par défaut",MINIMUM_ZOOM:"Zoom minimum par rapport à la largeur de l'écran (entre 30 et 100)",ZOOM_STEP:"Pas de changement de zoom (entre 5 et 50)",DEFAULT_VIEW_MODE:"Mode d'affichage par défaut",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - De gauche à droite",VIEW_MODE_RIGHT:"Horizontal - De droite à gauche",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livre - De gauche à droite",VIEW_MODE_MANGA:"Manga - De droite à gauche",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Ajuster à la largeur si surdimensionné",SHOW_THUMBNAILS:"Afficher les vignettes",HIDE_CONTROLS:"Toujours masquer les contrôles de page",HEADER_TYPE:"Changer le type d'en-tête",HEADER_HOVER:"Survol",HEADER_SCROLL:"Défilement",HEADER_CLICK:"Clic",HEADER_FIXED:"Fixe",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Télécharger",DOWNLOAD_ZIP:"Télécharger le fichier Zip",DOWNLOAD_IMAGES:"Télécharger les images en Zip automatiquement",DOWNLOAD_PROGRESS:"Téléchargement : ##num## sur ##total##",GENERATING_ZIP:"Génération du fichier Zip...",DOWNLOAD_INCOMPLETE:"Téléchargement incomplet",DOWNLOAD_INCOMPLETE_MESSAGE:"Certaines pages n'ont pas pu être téléchargées et ont été ignorées. Une liste des pages concernées a été ajoutée au fichier ZIP.",BUTTON_NEXT:"Suivant",NEXT_CHAPTER:"Chapitre suivant",BUTTON_PREVIOUS:"Précédent",PREVIOUS_CHAPTER:"Chapitre précédent",BOOKMARKS:"Favoris",BOOKMARK:"Favori",BOOKMARK_REMOVED:"Favori supprimé",BOOKMARK_SAVED:"Favori enregistré",BOOKMARK_MESSAGE:"La prochaine fois que vous ouvrirez ce chapitre, il reprendra à partir de: Page ##num## (Seulement UNE FOIS par favori)",KEYBINDINGS:"Raccourcis clavier",EDIT_KEYBINDS:"Modifier les raccourcis clavier",SAVE_KEYBINDS:"Enregistrer les raccourcis clavier",BUTTON_EDIT:"Modifier",BUTTON_SAVE:"Enregistrer",KEYBIND_RULES:"\n    <h3>Touches prises en charge</h3>\n    Modificateurs autorisés : shift, option, alt, ctrl, control, command. <br/>\n    Touches spéciales : backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>\n    Exemples : <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>\n  ",ATTENTION:"Attention",WARNING:"Avertissement",BUTTON_RESET_SETTINGS:"Réinitialiser les paramètres",SETTINGS_RESET:"Les paramètres ont été réinitialisés, rechargez la page pour prendre effet",LANGUAGE_CHANGED:"La langue a été modifiée, rechargez la page pour prendre effet",AUTO_DOWNLOAD:"La prochaine fois qu'un chapitre finira de se charger, il vous sera proposé de l'enregistrer automatiquement",LAZY_LOAD:"Le chargement paresseux est incompatible avec le téléchargement zip, vous ne pourrez pas télécharger avec ce paramètre activé.<br/> Suggestion : <span style='color:red;font-weight:bold'>Désactivez les vignettes</span> pour économiser de la bande passante/mémoire.",LAZY_LOAD_IMAGES_ENABLE:"Activer le chargement paresseux des images",LAZY_LOAD_IMAGES:"Début du chargement paresseux à partir de la page (entre 5 et 100)",RETURN_CHAPTER_LIST:"Retour à la liste des chapitres",PAGES_LOADED:"Pages chargées",GO_TO_PAGE:"Aller à la page",ENLARGE:"Agrandir",RESTORE:"Restaurer",REDUCE:"Réduire",FIT_WIDTH:"Ajuster à la largeur",FIT_HEIGHT:"Ajuster à la hauteur",PERCENT:"Pourcentage",TOGGLE_CONTROLS:"Basculer les contrôles de page",ZOOM_IN:"Zoom avant",ZOOM_OUT:"Zoom arrière",ZOOM_RESET:"Réinitialiser le zoom",ZOOM_WIDTH:"Zoomer à la largeur",ZOOM_HEIGHT:"Zoomer à la hauteur",HIDE:"Masquer",RELOAD:"Recharger",SLOWLY:"Lentement",NORMAL:"Normal",FAST:"Rapide",EXTREME:"Extrême",ALL_PAGES:"Toutes les pages",SPEED_WARNING:"Vitesse de chargement trop élevée",SPEED_WARNING_MESSAGE:"Cette vitesse n'est pas recommandée.<br/> Elle peut nuire à certains serveurs ou marquer votre IP comme un attaquant DDoS.<br/> Veuillez l'utiliser avec prudence !",SCROLL_UP:"Faire défiler vers le haut",SCROLL_DOWN:"Faire défiler vers le bas",CLOSE:"Fermer",CANCEL:"Annuler",LIST_EMPTY:"Liste vide",SCROLL_START:"Basculer le défilement automatique",INCREASE_SPEED:"Augmenter la vitesse de défilement",DECREASE_SPEED:"Diminuer la vitesse de défilement",AUTO_SCROLL_HEIGHT:"Vitesse de défilement automatique en pixels",VERTICAL_SEPARATOR:"Afficher les séparateurs verticaux",END:"Fin",SCOPE:"Portée",GLOBAL:"Global",GENERAL:"Général",LOADING:"Chargement",ZOOM:"Zoom",OTHERS:"Autres",NAVBAR_TYPE:"Changer le type de barre de navigation",NAVBAR_BOTTOM:"Bas",NAVBAR_LEFT:"Gauche",NAVBAR_RIGHT:"Droite",NAVBAR_DISABLED:"Désactivé",PAGINATION_TYPE:"Type de pagination",PAGINATION_DISABLED:"Désactivé",PAGINATION_SLIDER:"Curseur",PAGINATION_ARROWS:"Flèches latérales",PAGINATION_BOTH:"Les deux",FILE_MENU:"Menu principal",VIEW_MENU:"Menu Affichage",ZOOM_MENU:"Menu Zoom",DOUBLE_PAGE:"Basculer Double Page",CHOOSE_FILE:"Choisir un fichier",NO_FILES_SELECTED:"Aucun fichier sélectionné"}],Wt=function(e){return e.ENGLISH="English",e.SPANISH="Spanish",e.PORTUGUESE="Portuguese",e.CHINESE="Chinese",e.RAW="Raw",e}({}),Ut=function(e){return e.MANGA="manga",e.COMIC="comic",e.HENTAI="hentai",e}({}),Zt=globalThis,jt=Zt.ShadowRoot&&(void 0===Zt.ShadyCSS||Zt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qt=Symbol(),Qt=new WeakMap,Yt=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==qt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(jt&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=Qt.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Qt.set(t,e))}return e}toString(){return this.cssText}},Xt=e=>new Yt("string"==typeof e?e:e+"",void 0,qt),Kt=(e,...t)=>new Yt(1===e.length?e[0]:t.reduce((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]),e,qt),Jt=(e,t)=>{if(jt)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const o of t){const t=document.createElement("style"),n=Zt.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=o.cssText,e.appendChild(t)}},eo=jt?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return Xt(t)})(e):e;
/**
	* @license
	* Copyright 2017 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/
var{is:Ji,defineProperty:ea,getOwnPropertyDescriptor:ta,getOwnPropertyNames:oa,getOwnPropertySymbols:na,getPrototypeOf:ra}=Object,ia=globalThis,aa=ia.trustedTypes,la=aa?aa.emptyScript:"",sa=ia.reactiveElementPolyfillSupport,ca={toAttribute(e,t){switch(t){case Boolean:e=e?la:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},da=(e,t)=>!Ji(e,t),ha={attribute:!0,type:String,converter:ca,reflect:!1,useDefault:!1,hasChanged:da};Symbol.metadata??=Symbol("metadata"),ia.litPropertyMetadata??=new WeakMap,to=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ha){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&ea(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:r}=ta(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:n,set(t){const i=n?.call(this);r?.call(this,t),this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ha}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;const e=ra(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){const e=this.properties,t=[...oa(e),...na(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(eo(e))}else void 0!==e&&t.push(eo(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Jt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:ca).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=o.getPropertyOptions(n),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:ca;this._$Em=n;const i=r.fromAttribute(t,e.type);this[n]=i??this._$Ej?.get(n)??i,this._$Em=null}}requestUpdate(e,t,o,n=!1,r){if(void 0!==e){const i=this.constructor;if(!1===n&&(r=this[e]),o??=i.getPropertyOptions(e),!((o.hasChanged??da)(r,t)||o.useDefault&&o.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:n,wrapped:r},i){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),!0!==r||void 0!==i)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===n&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,n=this[t];!0!==e||this._$AL.has(t)||void 0===n||this.C(t,void 0,o,n)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}},to.elementStyles=[],to.shadowRootOptions={mode:"open"},to.elementProperties=new Map,to.finalized=new Map,sa?.({ReactiveElement:to}),(ia.reactiveElementVersions??=[]).push("2.1.2"),oo=globalThis,no=class extends to{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const n=o?.renderBefore??t;let r=n._$litPart$;if(void 0===r){const e=o?.renderBefore??null;n._$litPart$=r=new Wi(t.insertBefore(Ai(),e),e,void 0,o??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return zi}},no._$litElement$=!0,no.finalized=!0,oo.litElementHydrateSupport?.({LitElement:no}),ro=oo.litElementPolyfillSupport,ro?.({LitElement:no}),(oo.litElementVersions??=[]).push("4.2.2"),io=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},ao={attribute:!0,type:String,converter:ca,reflect:!1,hasChanged:da},lo=(e=ao,t,o)=>{const{kind:n,metadata:r}=o;let i=globalThis.litPropertyMetadata.get(r);if(void 0===i&&globalThis.litPropertyMetadata.set(r,i=new Map),"setter"===n&&((e=Object.create(e)).wrapped=!0),i.set(o.name,e),"accessor"===n){const{name:n}=o;return{set(o){const r=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,r,e,!0,o)},init(t){return void 0!==t&&this.C(n,void 0,e,t),t}}}if("setter"===n){const{name:n}=o;return function(o){const r=this[n];t.call(this,o),this.requestUpdate(n,r,e,!0,o)}}throw Error("Unsupported decorator location: "+n)},so=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o),co=Lt(class extends Dt{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const n=!!t[e];n===this.st.has(e)||this.nt?.has(e)||(n?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return zi}}),ho=class extends Dt{constructor(e){if(super(e),this.it=Pi,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Pi||null==e)return this._t=void 0,this.it=e;if(e===zi)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}},ho.directiveName="unsafeHTML",ho.resultType=1,po=Lt(ho),(uo=class extends ho{}).directiveName="unsafeSVG",uo.resultType=2,mo=Lt(uo),go=Zr({IconAdjustmentsHorizontal:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 6l8 0"/><path d="M16 6l4 0"/><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 12l2 0"/><path d="M10 12l10 0"/><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 18l11 0"/><path d="M19 18l1 0"/></svg>',IconAlertCircle:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',IconApiBook:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-api-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',IconArrowAutofitDown:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"/><path d="M18 4v17"/><path d="M15 18l3 3l3 -3"/></svg>',IconArrowAutofitHeight:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"/><path d="M18 14v7"/><path d="M18 3v7"/><path d="M15 18l3 3l3 -3"/><path d="M15 6l3 -3l3 3"/></svg>',IconArrowAutofitLeft:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"/><path d="M20 18h-17"/><path d="M6 15l-3 3l3 3"/></svg>',IconArrowAutofitRight:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8"/><path d="M4 18h17"/><path d="M18 15l3 3l-3 3"/></svg>',IconArrowAutofitWidth:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"/><path d="M10 18h-7"/><path d="M21 18h-7"/><path d="M6 15l-3 3l3 3"/><path d="M18 15l3 3l-3 3"/></svg>',IconArrowBigLeft:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"/></svg>',IconArrowBigRight:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"/></svg>',IconArrowsHorizontal:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4"/><path d="M17 8l4 4l-4 4"/><path d="M3 12l18 0"/></svg>',IconArrowsLeftRight:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-left-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 17l-18 0"/><path d="M6 10l-3 -3l3 -3"/><path d="M3 7l18 0"/><path d="M18 20l3 -3l-3 -3"/></svg>',IconArrowsMove:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9l3 3l-3 3"/><path d="M15 12h6"/><path d="M6 9l-3 3l3 3"/><path d="M3 12h6"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',IconArrowsMoveVertical:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',IconArrowsVertical:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7l4 -4l4 4"/><path d="M8 17l4 4l4 -4"/><path d="M12 3l0 18"/></svg>',IconBook:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/></svg>',IconBookArrowLeft:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',IconBookArrowRight:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l3 3l-3 3"/></svg>',IconBookOff:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096"/><path d="M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v2m0 4v7"/><path d="M21 6v11"/><path d="M3 3l18 18"/></svg>',IconBookUpload:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5"/><path d="M11 16h-5a2 2 0 0 0 -2 2"/><path d="M15 16l3 -3l3 3"/><path d="M18 13v9"/></svg>',IconBookmark:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"/></svg>',IconBookmarkOff:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"/><path d="M3 3l18 18"/></svg>',IconBookmarks:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z"/><path d="M11 3h5a3 3 0 0 1 3 3v11"/></svg>',IconBooksReturn:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-books-return"><defs><mask id="arrow-mask"><rect width="24" height="24" fill="white"/><rect x="15" y="15" width="8" height="8" fill="black"/></mask></defs><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M5 8h4"/><path d="M9 16h4"/><g mask="url(#arrow-mask)"><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041"/><path d="M14 9l4 -1"/><path d="M16 16l3.923 -.98"/></g><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',IconBoxAlignTop:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z"/><path d="M4 15.005v-.01"/><path d="M4 20.005v-.01"/><path d="M9 20.005v-.01"/><path d="M15 20.005v-.01"/><path d="M20 20.005v-.01"/><path d="M20 15.005v-.01"/></svg>',IconCategory:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h6v6h-6z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6h-6z"/><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/></svg>',IconCheck:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10"/></svg>',IconChevronLeft:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6"/></svg>',IconChevronRight:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6"/></svg>',IconCircleCheck:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 12l2 2l4 -4"/></svg>',IconCircleX:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M10 10l4 4m0 -4l-4 4"/></svg>',IconComic1:()=>'<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M334.56,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10h-54.763"/></g><g><path style="fill: #3ad1e0" d="M313.86,452.74L159.16,55.63c-0.75-1.92-2.6-3.18-4.66-3.18h-29.96c-2.76,0-5,2.24-5,5v397.1&#10;&#9;&#9;&#9;c0,2.76,2.24,5,5,5h184.67C312.72,459.55,315.14,456.01,313.86,452.74z"/><path style="fill: #22c7db" d="M309.21,459.55h-30.02c3.51,0,5.93-3.54,4.65-6.81L129.14,55.63c-0.74-1.9-2.56-3.16-4.6-3.18&#10;&#9;&#9;&#9;h29.96c2.06,0,3.91,1.26,4.66,3.18l154.7,397.11C315.14,456.01,312.72,459.55,309.21,459.55z"/><path style="fill: #fb33a8" d="M258.193,309.845c-9.05-1.894-18.424-2.909-28.037-2.909c-45.55,0-85.862,22.354-110.616,56.676&#10;&#9;&#9;&#9;v90.938c0,2.76,2.24,5,5,5h184.67c3.51,0,5.93-3.54,4.65-6.81L258.193,309.845z"/><path style="fill: #ee2d9a" d="M193.362,311.966c-5.64,10.161-16.48,17.055-28.912,17.055c-0.57,0-1.14-0.01-1.72-0.04&#10;&#9;&#9;&#9;c-4.02-0.2-6.72,3.06-6.72,6.44c0,1.66,0.65,3.35,2.12,4.67c7.27,6.57,10.91,15.56,10.91,24.55s-3.64,17.99-10.91,24.55&#10;&#9;&#9;&#9;c-4.37,3.94-1.51,11.12,4.24,11.12c0.12,0,0.24,0,0.36-0.01c19-0.97,34.76,14.2,34.76,33c0,0.57-0.01,1.14-0.04,1.72&#10;&#9;&#9;&#9;c-0.21,4.02,3.05,6.72,6.43,6.72c1.67,0,3.36-0.65,4.68-2.12c6.56-7.27,15.56-10.91,24.55-10.91c8.99,0,17.98,3.64,24.55,10.91&#10;&#9;&#9;&#9;c3.94,4.37,11.12,1.51,11.12-4.24c0-0.12,0-0.24-0.01-0.36c-0.264-5.151,0.666-10.058,2.527-14.479l12.543,32.197&#10;&#9;&#9;&#9;c1.28,3.27-1.14,6.81-4.65,6.81h30.02c3.51,0,5.93-3.54,4.65-6.81l-55.667-142.895L193.362,311.966z"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M230.156,306.937c-45.55,0-85.862,22.354-110.616,56.676"/><path style="fill: #fcb44d" d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5H260.65c-2.06,0-3.91-1.26-4.66-3.18l-57.85-148.5&#10;&#9;&#9;&#9;c-1.28-3.28,1.14-6.82,4.65-6.82h184.67C390.22,52.45,392.46,54.69,392.46,57.45z"/><path style="fill: #fb9927" d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5V57.45c0-2.76-2.24-5-5-5h30.021&#10;&#9;&#9;&#9;C390.22,52.45,392.46,54.69,392.46,57.45z"/><g><path style="fill: #ae6ad8" d="M356.4,183.26v27.69h-78.45v-27.69c0-21.67,17.57-39.23,39.23-39.23&#10;&#9;&#9;&#9;&#9;c10.83,0,20.64,4.39,27.73,11.49C352.01,162.62,356.4,172.42,356.4,183.26z"/><path style="fill: #975bbb" d="M356.402,183.26v27.69h-28.38v-27.69c0-10.84-4.39-20.64-11.49-27.74&#10;&#9;&#9;&#9;&#9;c-3.82-3.82-8.42-6.86-13.54-8.84c4.4-1.71,9.19-2.65,14.19-2.65c10.83,0,20.64,4.39,27.73,11.49&#10;&#9;&#9;&#9;&#9;C352.012,162.62,356.402,172.42,356.402,183.26z"/><path style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          " d="&#10;&#9;&#9;&#9;&#9;M277.95,210.95v-27.69c0-21.67,17.57-39.23,39.23-39.23c10.83,0,20.64,4.39,27.73,11.49c7.1,7.1,11.49,16.9,11.49,27.74v27.69"/><g><circle style="fill: #f2eff2" cx="317.179" cy="125.438" r="25.456"/><circle style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n            " cx="317.179" cy="125.438" r="25.456"/></g></g><path style="fill: #23f1a8" d="M392.46,250.95v67.96c0,2.761-2.239,5-5,5h-82.812c-2.061,0-3.911-1.265-4.659-3.185l-26.474-67.96&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,245.95,392.46,248.189,392.46,250.95z"/><path style="fill: #27e19d" d="M392.46,250.95v67.96c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-67.96c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,245.95,392.46,248.19,392.46,250.95z"/><path style="fill: #23f1a8" d="M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962&#10;&#9;&#9;&#9;c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64C316.248,362.447,318.666,358.91,322.184,358.91z"/><path style="fill: #27e19d" d="M392.46,363.91v90.64c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-90.64c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,358.91,392.46,361.15,392.46,363.91z"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M119.54,242.003V454.55c0,2.761,2.239,5,5,5h184.666c3.518,0,5.936-3.537,4.659-6.815l-154.704-397.1&#10;&#9;&#9;&#9;c-0.748-1.92-2.598-3.185-4.659-3.185H124.54c-2.761,0-5,2.239-5,5v151.391"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M392.46,57.45v148.5c0,2.761-2.239,5-5,5H260.648c-2.061,0-3.911-1.265-4.659-3.185l-57.854-148.5&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,52.45,392.46,54.689,392.46,57.45z"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M306.627,245.95h-28.454c-3.518,0-5.936,3.537-4.659,6.815l26.474,67.96c0.748,1.92,2.598,3.185,4.659,3.185h82.812&#10;&#9;&#9;&#9;c2.761,0,5-2.239,5-5v-67.96c0-2.761-2.239-5-5-5h-47.67"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64&#10;&#9;&#9;&#9;C316.248,362.447,318.666,358.91,322.184,358.91z"/></g><g><path style="fill: #fdef63" d="M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24&#10;&#9;&#9;&#9;c-6.57-7.27-15.56-10.91-24.55-10.91c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72&#10;&#9;&#9;&#9;c0.03-0.58,0.04-1.15,0.04-1.72c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12&#10;&#9;&#9;&#9;c7.27-6.56,10.91-15.56,10.91-24.55s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44&#10;&#9;&#9;&#9;c0.58,0.03,1.15,0.04,1.72,0.04c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25&#10;&#9;&#9;&#9;c6.56,7.27,15.56,10.91,24.55,10.91c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"/><path style="fill: #f3d730" d="M268.151,412.468c0.394-0.814,0.629-1.738,0.629-2.758c0-0.12,0-0.24-0.01-0.36&#10;&#9;&#9;&#9;c-0.66-12.89,6.11-24.28,16.39-30.28l-41.28-105.96c-3.48,1.19-7.12,1.79-10.77,1.79c-7.758,0-15.52-2.717-21.718-8.132&#10;&#9;&#9;&#9;L268.151,412.468z"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24c-6.57-7.27-15.56-10.91-24.55-10.91&#10;&#9;&#9;&#9;c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72c0.03-0.58,0.04-1.15,0.04-1.72&#10;&#9;&#9;&#9;c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12c7.27-6.56,10.91-15.56,10.91-24.55&#10;&#9;&#9;&#9;s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44c0.58,0.03,1.15,0.04,1.72,0.04&#10;&#9;&#9;&#9;c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25c6.56,7.27,15.56,10.91,24.55,10.91&#10;&#9;&#9;&#9;c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"/></g><g><line style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " x1="230.156" y1="339.714" x2="230.156" y2="311.299"/><line style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " x1="230.156" y1="364.644" x2="230.156" y2="366.646"/></g><g><line style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " x1="240.429" y1="83.83" x2="258.124" y2="83.83"/><line style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " x1="248.276" y1="107.911" x2="265.97" y2="107.911"/></g></g></svg>',IconComic1Flat:()=>'<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><g><path d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#3ad1e0"/><path d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#22c7db"/><path d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z" fill="#fcb44d"/><path d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z" fill="#fb9927"/><g><path d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z" fill="#ae6ad8"/><path d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z" fill="#975bbb"/><g><g><circle cx="319.023" cy="121.497" fill="#f2eff2" r="26.224"/></g></g></g><path d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z" fill="#23f1a8"/><path d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z" fill="#27e19d"/><path d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z" fill="#23f1a8"/><path d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z" fill="#27e19d"/></g><g><path d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z" fill="#fdef63"/><path d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z" fill="#f3d730"/></g><g><g><path d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g><path d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><g><g><path d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z" fill="#f2eff2"/></g><g><path d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z" fill="#f2eff2"/></g></g></g></svg>',IconComic2:()=>'<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg5007" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs5011"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath5021"><path d="M 0,512 H 512 V 0 H 0 Z" id="path5019"/></clipPath></defs><g id="g5013" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g5015"><g id="g5017" clip-path="url(#clipPath5021)"><g id="g5023" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5025"/></g><g id="g5027" transform="translate(465.9996,47.5)"><path d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5029"/></g><g id="g5031" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5033"/></g><g id="g5035" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5037"/></g><g id="g5039" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5041"/></g><g id="g5043" transform="translate(86,427.4996)"><path d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5045"/></g><path d="M 426,47.5 H 86 v 112.333 h 340 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5047"/><g id="g5049" transform="translate(196.2775,159.8334)"><path d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5051"/></g><g id="g5053" transform="translate(214.5152,99.0695)"><path d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5055"/></g><g id="g5057" transform="translate(297.4848,99.0695)"><path d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5059"/></g><g id="g5061" transform="translate(204.3949,127.5815)"><path d="M 0,0 V -9.916" style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            " id="path5063"/></g><g id="g5065" transform="translate(307.605,127.5815)"><path d="M 0,0 V -9.916" style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            " id="path5067"/></g><g id="g5069" transform="translate(242.3946,117.9604)"><path d="m 0,0 c 3.308,-3.796 8.175,-6.198 13.605,-6.198 5.431,0 10.298,2.402 13.606,6.198" style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            " id="path5071"/></g><g id="g5073" transform="translate(153.1665,442.2645)"><path d="m 0,0 32.456,22.235 h -99.623 v -156.568 l 20.756,70.454 58.203,-44.799 -24.62,69.199 73.42,-2.032 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5075"/></g><g id="g5077" transform="translate(86,427.4996)"><path d="m 0,0 v -119.568 l 9.825,33.351 C 3.399,-58.516 0,-29.655 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5079"/></g><g id="g5081" transform="translate(426,270.6974)"><path d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5083"/></g><g id="g5085" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0 Z" style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            " id="path5087"/></g><g id="g5089" transform="translate(426,346.167)"><path d="m 0,0 v 118.333 h -110 l -80,-264.667 H 0 V -28" style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            " id="path5091"/></g><g id="g5093" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            " id="path5095"/></g><g id="g5097" transform="translate(154.0172,159.8334)"><path d="m 0,0 h 271.983 v -112.333 h -340 V 0 H -28" style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            " id="path5099"/></g><g id="g5101" transform="translate(86,307.9314)"><path d="m 0,0 20.756,70.454 58.203,-44.799 -24.62,69.199 73.419,-2.032 -60.591,41.511 32.455,22.236" style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            " id="path5103"/></g><g id="g5105" transform="translate(426,270.6974)"><path d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939" style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            " id="path5107"/></g></g></g></g></svg>',IconComic2Flat:()=>'<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg3390" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs3394"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath3404"><path d="M 0,512 H 512 V 0 H 0 Z" id="path3402"/></clipPath></defs><g id="g3396" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g3398"><g id="g3400" clip-path="url(#clipPath3404)"><g id="g3406" transform="translate(451.7344)"><path d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3408"/></g><g id="g3410" transform="translate(472.3376,41.2072)"><path d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3412"/></g><g id="g3414" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3416"/></g><g id="g3418" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3420"/></g><g id="g3422" transform="translate(80.8692,198.1382)"><path d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3424"/></g><g id="g3426" transform="translate(80.8692,432.6757)"><path d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3428"/></g><path d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3430"/><g id="g3432" transform="translate(194.475,156.931)"><path d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3434"/></g><g id="g3436" transform="translate(213.2632,94.3332)"><path d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3438"/></g><g id="g3440" transform="translate(298.7368,94.3332)"><path d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3442"/></g><g id="g3444" transform="translate(202.8374,123.7057)"><path d="M 0,0 V -10.216" style="\r\n              fill: none;\r\n              stroke: #3d4751;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            " id="path3446"/></g><g id="g3448" transform="translate(309.1625,123.7057)"><path d="M 0,0 V -10.216" style="\r\n              fill: none;\r\n              stroke: #3d4751;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            " id="path3450"/></g><g id="g3452" transform="translate(241.984,113.7942)"><path d="m 0,0 c 3.408,-3.911 8.421,-6.385 14.016,-6.385 5.595,0 10.608,2.474 14.016,6.385" style="\r\n              fill: none;\r\n              stroke: #3d4751;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            " id="path3454"/></g><g id="g3456" transform="translate(150.0629,447.8862)"><path d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3458"/></g><g id="g3460" transform="translate(80.8692,432.6757)"><path d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3462"/></g><g id="g3464" transform="translate(431.1308,271.141)"><path d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3466"/></g></g></g></g></svg>',IconComic3:()=>'<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M158.639,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10H191.801"/></g><path style="fill: #3ad1e0" d="M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;h145.617C390.244,47.5,392.482,49.739,392.482,52.5z"/><path style="fill: #20bfd5" d="M392.482,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;C390.242,47.5,392.482,49.74,392.482,52.5z"/><path style="fill: #26d192" d="M280.6,47.5h-38.735c-2.761,0-5,2.239-5,5v83.99c0,2.761,2.239,5,5,5H280.6V47.5z"/><line style="\r\n        fill: none;\r\n        stroke: #000000;\r\n        stroke-width: 15;\r\n        stroke-linecap: round;\r\n        stroke-linejoin: round;\r\n        stroke-miterlimit: 10;\r\n      " x1="280.6" y1="141.49" x2="280.6" y2="47.5"/><path style="fill: #23f1a8" d="M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99&#10;&#9;&#9;c2.126,3.328-0.264,7.692-4.214,7.692H124.512c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"/><g><path style="fill: #ae6ad8" d="M227.87,437.622V464.5h-76.148v-26.878c0-21.034,17.054-38.079,38.079-38.079&#10;&#9;&#9;&#9;c10.512,0,20.034,4.261,26.916,11.153C223.609,417.588,227.87,427.1,227.87,437.622z"/><path style="fill: #975bbb" d="M227.872,437.62v26.88h-28.21v-26.88c0-10.52-4.26-20.03-11.15-26.92&#10;&#9;&#9;&#9;c-3.62-3.63-7.97-6.53-12.82-8.46c4.36-1.74,9.13-2.7,14.11-2.7c10.51,0,20.03,4.26,26.92,11.16&#10;&#9;&#9;&#9;C223.612,417.59,227.872,427.1,227.872,437.62z"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M151.722,464.5v-26.878c0-21.034,17.054-38.079,38.079-38.079c10.512,0,20.034,4.261,26.916,11.153&#10;&#9;&#9;&#9;c6.892,6.892,11.153,16.404,11.153,26.926V464.5"/></g><path style="fill: #27e19d" d="M303.302,464.5h-30.02c3.95,0,6.34-4.36,4.22-7.69l-53.65-83.99c-0.92-1.44-2.51-2.31-4.22-2.31&#10;&#9;&#9;h30.02c1.71,0,3.3,0.87,4.22,2.31l53.65,83.99C309.642,460.14,307.252,464.5,303.302,464.5z"/><path style="fill: #ae6ad8" d="M387.482,370.51h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-83.99C392.482,372.749,390.244,370.51,387.482,370.51z"/><path style="fill: #975bbb" d="M392.482,375.51v83.99c0,2.76-2.24,5-5,5h-25.08c-0.88,0-1.72-0.23-2.46-0.66&#10;&#9;&#9;c1.51-0.86,2.52-2.48,2.52-4.34v-83.99c0-2.76-2.24-5-5-5h30.02C390.242,370.51,392.482,372.75,392.482,375.51z"/><path style="\r\n        fill: none;\r\n        stroke: #000000;\r\n        stroke-width: 15;\r\n        stroke-linecap: round;\r\n        stroke-linejoin: round;\r\n        stroke-miterlimit: 10;\r\n      " d="&#10;&#9;&#9;M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h145.617&#10;&#9;&#9;C390.244,47.5,392.482,49.739,392.482,52.5z"/><g><path style="fill: #3ad1e0" d="M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;&#9;h67.862C195.135,47.5,197.374,49.739,197.374,52.5z"/><path style="fill: #20bfd5" d="M197.372,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;&#9;C195.132,47.5,197.372,49.74,197.372,52.5z"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h67.862&#10;&#9;&#9;&#9;C195.135,47.5,197.374,49.739,197.374,52.5z"/></g><g><path style="fill: #fb54b6" d="M124.512,181.49h262.97c2.761,0,5,2.239,5,5v139.02c0,2.761-2.239,5-5,5h-262.97&#10;&#9;&#9;&#9;c-2.761,0-5-2.239-5-5V186.49C119.512,183.729,121.751,181.49,124.512,181.49z"/></g><path style="fill: #fb9927" d="M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465H154.537z"/><path style="fill: #f98824" d="M357.462,330.51h-34.36c0-50.18-36.42-91.84-84.28-100.01c5.58-0.95,11.32-1.45,17.18-1.45&#10;&#9;&#9;C312.042,229.05,357.462,274.47,357.462,330.51z"/><path style="\r\n        fill: none;\r\n        stroke: #000000;\r\n        stroke-width: 15;\r\n        stroke-linecap: round;\r\n        stroke-linejoin: round;\r\n        stroke-miterlimit: 10;\r\n      " d="&#10;&#9;&#9;M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465"/><g><path style="fill: #fb33a8" d="M392.482,186.49v139.02c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V186.49c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.02C390.242,181.49,392.482,183.73,392.482,186.49z"/></g><g><g><path style="fill: #fdef63" d="M342.812,247.29c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39&#10;&#9;&#9;&#9;&#9;s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11&#10;&#9;&#9;&#9;&#9;c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13&#10;&#9;&#9;&#9;&#9;c0-7.68-2.16-15.35-6.49-22.02h170.24c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13&#10;&#9;&#9;&#9;&#9;C353.382,238.48,349.872,247.29,342.812,247.29z"/><g><line id="XMLID_00000127012381744132405410000009872483291948348836_" style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n            " x1="279.433" y1="224.908" x2="279.433" y2="224.805"/><line id="XMLID_00000080918978500845250090000017315552773041050031_" style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n            " x1="256.002" y1="224.908" x2="256.002" y2="224.805"/><line id="XMLID_00000140711681861242238370000008769002181148908969_" style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n            " x1="232.572" y1="224.908" x2="232.572" y2="224.805"/></g><path style="fill: #f3d730" d="M342.812,247.3c-0.15,0-0.29,0-0.43-0.02c-23.33-1.19-42.66,17.43-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.01,1.39,0.05,2.11c0.25,4.93-3.75,8.25-7.89,8.25c-2.06,0-4.13-0.8-5.75-2.61c-6.75-7.46-15.58-11.81-24.76-13.03&#10;&#9;&#9;&#9;&#9;c29.09-14.37,49.1-44.34,49.1-78.98c0-7.61-0.97-14.99-2.78-22.03h33.42c-4.32,6.67-6.48,14.35-6.48,22.02&#10;&#9;&#9;&#9;&#9;c0,11.04,4.47,22.09,13.38,30.14C353.382,238.47,349.882,247.3,342.812,247.3z"/></g><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M341.122,181.49c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13c5.36,4.84,1.85,13.65-5.21,13.65&#10;&#9;&#9;&#9;c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24&#10;&#9;&#9;&#9;c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6&#10;&#9;&#9;&#9;c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01&#10;&#9;&#9;&#9;c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13c0-7.68-2.16-15.35-6.49-22.02"/></g><g><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M208.726,181.49h-84.213c-2.761,0-5,2.239-5,5v139.02c0,2.761,2.239,5,5,5h262.97c2.761,0,5-2.239,5-5V186.49c0-2.761-2.239-5-5-5&#10;&#9;&#9;&#9;H241.888"/></g><path style="\r\n        fill: none;\r\n        stroke: #000000;\r\n        stroke-width: 15;\r\n        stroke-linecap: round;\r\n        stroke-linejoin: round;\r\n        stroke-miterlimit: 10;\r\n      " d="&#10;&#9;&#9;M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99c2.126,3.328-0.264,7.692-4.214,7.692H124.512&#10;&#9;&#9;c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"/><path style="\r\n        fill: none;\r\n        stroke: #000000;\r\n        stroke-width: 15;\r\n        stroke-linecap: round;\r\n        stroke-linejoin: round;\r\n        stroke-miterlimit: 10;\r\n      " d="&#10;&#9;&#9;M392.482,397.976V375.51c0-2.761-2.239-5-5-5h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-28.362"/><g><g><g><circle style="fill: #d8b2ec" cx="189.8" cy="381.497" r="24.709"/><circle style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n            " cx="189.8" cy="381.497" r="24.709"/></g></g></g><g><line id="XMLID_00000028301319025648580530000009457246182494066313_" style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " x1="314.674" y1="108.185" x2="354.689" y2="108.075"/><line style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " x1="333.566" y1="80.805" x2="354.689" y2="80.805"/></g></g></svg>',IconComic3Flat:()=>'<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><path d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z" fill="#3ad1e0"/><path d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/><path d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z" fill="#23f1a8"/><path d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z" fill="#23f1a8"/><g><path d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z" fill="#ae6ad8"/><path d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z" fill="#975bbb"/></g><path d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z" fill="#27e19d"/><path d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z" fill="#ae6ad8"/><path d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#975bbb"/><g><path d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z" fill="#3ad1e0"/><path d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/></g><g><path d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z" fill="#fb54b6"/></g><path d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z" fill="#fb9927"/><path d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z" fill="#f98824"/><g><path d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#fb33a8"/></g><g><g><path d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z" fill="#fdef63"/><g><g id="XMLID_00000127012381744132405410000009872483291948348836_"><path d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000080918978500845250090000017315552773041050031_"><path d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000140711681861242238370000008769002181148908969_"><path d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><path d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z" fill="#f3d730"/></g></g><g><g><g><circle cx="187.8" cy="385.284" fill="#d8b2ec" r="25.455"/></g></g></g><g><g id="XMLID_00000028301319025648580530000009457246182494066313_"><path d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z" fill="#f2eff2"/></g><g><path d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z" fill="#f2eff2"/></g></g></g></svg>',IconDeviceDesktop:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"/><path d="M7 20h10"/><path d="M9 16v4"/><path d="M15 16v4"/></svg>\r\n',IconDeviceFloppy:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"/><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M14 4l0 4l-6 0l0 -4"/></svg>',IconDeviceMobile:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"/><path d="M11 4h2"/><path d="M12 17v.01"/></svg>\r\n',IconDeviceTablet:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-tablet" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"/><path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/></svg>\r\n',IconDotsVertical:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',IconEReader1:()=>'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><path style="fill: #636978" d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"/><path style="fill: #555a66" d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"/><path style="fill: #96e8ff" d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"/><path style="fill: #80dbff" d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"/><path style="fill: #ffffff" d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"/><path style="fill: #f5fafc" d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"/><path style="fill: #e1f1fa" d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"/><g><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220c44.183,0,80,35.817,80,80v337&#10;&#9;&#9;&#9;C446,468.683,410.183,504.5,366,504.5z"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M126,398.01v16.49c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20v-327c0-11.046-8.954-20-20-20H146&#10;&#9;&#9;&#9;c-11.046,0-20,8.954-20,20v280.51"/><line style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " x1="176" y1="281.01" x2="336" y2="281.01"/><line style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " x1="176" y1="321.01" x2="336" y2="321.01"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M286.144,109.53c-10.033,0.992-20.075,2.987-30.144,5.986c-26.85-7.998-53.509-8.858-80.318-2.577&#10;&#9;&#9;&#9;c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768&#10;&#9;&#9;&#9;c23.172-5.058,46.241-4.777,69.425,0.841c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841&#10;&#9;&#9;&#9;c6.227,1.359,12.113-3.395,12.113-9.768c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18&#10;&#9;&#9;&#9;c-6.702-1.57-13.395-2.694-20.084-3.372"/><line style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " x1="256" y1="115.517" x2="256" y2="229.706"/><g><line style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          " x1="193.551" y1="362.07" x2="193.551" y2="374.07"/><line style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          " x1="318.449" y1="362.07" x2="318.449" y2="374.07"/><path style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          " d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"/></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>',IconEReader1Flat:()=>'<svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z" fill="#636978"/></g><g><path d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z" fill="#555a66"/></g><g><path d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z" fill="#96e8ff"/></g><g><path d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z" fill="#80dbff"/></g><g><path d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z" fill="#fff"/></g><g><path d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z" fill="#f5fafc"/></g><g><path d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z" fill="#e1f1fa"/></g><g><g><path d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><path d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><g><path d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z" fill="#495560"/></g></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>',IconEReader2:()=>'<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.941 511.941" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #808fa4" d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"/><path style="fill: #64768e" d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"/><path style="fill: #c5ced6" d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"/><polygon style="fill: #abb6c4" points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #9ca9ba" d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"/><polygon style="fill: #c5ced6" points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"/><path style="fill: #abb6c4" d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"/><path style="fill: #64768e" d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"/><path style="fill: #64768e" d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="fill: #e8ecf9" d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"/><rect x="97.85" y="210.79" style="fill: #d7ddf5" width="63.97" height="30.12"/></g><g><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M384.206,504.441H127.735c-33.137,0-60-26.863-60-60V67.5c0-33.137,26.863-60,60-60h256.471c33.137,0,60,26.863,60,60v376.941&#10;&#9;&#9;&#9;C444.206,477.578,417.343,504.441,384.206,504.441z"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M384.088,414.088H127.853c-16.569,0-30-13.431-30-30V67.618c0-16.569,13.431-30,30-30h256.235c16.569,0,30,13.431,30,30v316.471&#10;&#9;&#9;&#9;C414.088,400.657,400.657,414.088,384.088,414.088z"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059c0-8.317,6.742-15.059,15.059-15.059h60.235&#10;&#9;&#9;&#9;c8.317,0,15.059,6.742,15.059,15.059C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M100.85,210.79h103.811c6.523,0,12.298-4.215,14.286-10.428L270.56,39.09"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M293.62,410.091v-154.18c0-8.284-6.716-15-15-15H100.85"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M411.091,240.911h-72.36c-8.284,0-15,6.716-15,15v154.18"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M300.616,39.291l-48.622,151.927c-3.098,9.679,4.124,19.572,14.286,19.572h144.81"/><g><line style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          " x1="133.2" y1="310.695" x2="133.2" y2="322.695"/><line style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          " x1="258.098" y1="310.695" x2="258.098" y2="322.695"/><g><path style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-miterlimit: 10;\r\n            " d="M195.831,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/><path style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-miterlimit: 10;\r\n            " d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/></g></g></g></g></svg>',IconEReader2Flat:()=>'<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z" fill="#808fa4"/><path d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z" fill="#64768e"/><path d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z" fill="#c5ced6"/><path d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z" fill="#abb6c4"/><path d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z" fill="#9ca9ba"/><path d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z" fill="#c5ced6"/><path d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z" fill="#abb6c4"/><path d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z" fill="#64768e"/><path d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z" fill="#64768e"/><path d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z" fill="#e8ecf9"/><path d="m93.088 209.451h65.909v31.033h-65.909z" fill="#d7ddf5"/><g><g><path d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z" fill="#495560"/></g><g><path d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z" fill="#495560"/></g><path d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z" fill="#495560"/></g></g></svg>',IconExternalLink:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/><path d="M11 13l9 -9"/><path d="M15 4h5v5"/></svg>',IconEye:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/></svg>',IconEyeOff:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/><path d="M3 3l18 18"/></svg>',IconFileDownload:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M12 17v-6"/><path d="M9.5 14.5l2.5 2.5l2.5 -2.5"/></svg>',IconFilePercent:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 17l4 -4"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M10 13h.01"/><path d="M14 17h.01"/></svg>',IconFolderOpen:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-folder-open"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2" /></svg>',IconHandClick:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"/><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"/><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"/><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"/><path d="M5 3l-1 -1"/><path d="M4 7h-1"/><path d="M14 3l1 -1"/><path d="M15 6h1"/></svg>',IconHelp:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-help"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 17l0 .01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"/></svg>',IconInfoCircle:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg>',IconKeyboard:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"/><path d="M6 10l0 .01"/><path d="M10 10l0 .01"/><path d="M14 10l0 .01"/><path d="M18 10l0 .01"/><path d="M6 14l0 .01"/><path d="M18 14l0 .01"/><path d="M10 14l4 .01"/></svg>',IconLayoutBottombar:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M4 15l16 0"/></svg>',IconLayoutBottombarInactive:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M4 15h1"/><path d="M19 15h1"/><path d="M9 15h1"/><path d="M14 15h1"/></svg>',IconLayoutDashboard:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /><path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /></svg>',IconLayoutSidebar:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M9 4l0 16"/></svg>',IconLayoutSidebarInactive:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M9 4v1"/><path d="M9 9v1"/><path d="M9 14v1"/><path d="M9 19v1"/></svg>',IconLayoutSidebarRight:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M15 4l0 16"/></svg>',IconLayoutSidebarRightInactive:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M15 4v1"/><path d="M15 9v1"/><path d="M15 14v1"/><path d="M15 19v1"/></svg>',IconListNumbers:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9"/><path d="M11 12h9"/><path d="M12 18h8"/><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"/><path d="M6 10v-6l-2 2"/></svg>',IconLoader2:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9"/></svg>',IconLocationCog:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',IconMenu2:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/></svg>',IconMenuDeep:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16"/><path d="M7 12h13"/><path d="M10 18h10"/></svg>',IconMessage:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8"/><path d="M8 13h6"/><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/></svg>',IconMoon:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/></svg>',IconPage:()=>'<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.94 511.94" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #e8ecf9" d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"/><path style="fill: #d7ddf5" d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"/><path style="fill: #c5ced6" d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"/><path style="fill: #abb6c4" d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"/><path style="fill: #c5ced6" d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"/><path style="fill: #abb6c4" d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"/><polygon style="fill: #c5ced6" points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"/><polygon style="fill: #abb6c4" points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #808fa4" d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"/><path style="fill: #64768e" d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"/><path style="fill: #808fa4" d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"/><path style="fill: #64768e" d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"/><path style="fill: #808fa4" d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"/><path style="fill: #abb6c4" d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"/><path style="fill: #c5ced6" d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><g><g><ellipse style="fill: #ffffff" cx="175.162" cy="150.402" rx="29.816" ry="23.744"/><ellipse style="fill: #ffffff" cx="336.778" cy="150.402" rx="29.816" ry="23.744"/></g></g></g><g><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M67.73,402.54v41.9c0,33.14,26.87,60,60,60h256.48c33.13,0,60-26.86,60-60V67.5c0-33.14-26.87-60-60-60H127.73&#10;&#9;&#9;&#9;c-33.13,0-60,26.86-60,60v300.04"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M359,52.68h25.03c8.28,0,15,6.71,15,15v135.64c0,8.29-6.72,15-15,15H127.91c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H324&#10;&#9;&#9;&#9;"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M203.323,459.264h-75.412c-8.284,0-15-6.716-15-15V278.499c0-8.284,6.716-15,15-15h75.412c8.284,0,15,6.716,15,15v165.765&#10;&#9;&#9;&#9;C218.323,452.548,211.607,459.264,203.323,459.264z"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M399.03,278.5v165.76c0,8.29-6.72,15-15,15H278.5c-8.28,0-15-6.71-15-15V278.5c0-8.28,6.72-15,15-15h105.53&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><line style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " x1="264.641" y1="367.54" x2="327.14" y2="324.275"/><line style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " x1="335.24" y1="420" x2="317.58" y2="458.04"/><line style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " x1="365.42" y1="354.99" x2="349.98" y2="388.25"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M337.07,266.11c-14.481,16.226-16.955,38.907-8.48,57.16c12.198,26.365,43.179,37.557,69.06,26.13"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M114.09,339.63c4.39-1.26,8.16-4.51,9.91-9.1c2.29-6,8.01-9.69,14.07-9.69c4.907,0,5.826,2,10.76,2&#10;&#9;&#9;&#9;c6.016,0,11.752-3.643,14.06-9.68c2.29-6,8-9.69,14.07-9.69c3.551,0,5.135,1.068,7.09,1.54c7.171,1.837,14.948-1.942,17.73-9.23&#10;&#9;&#9;&#9;c2.653-6.632,8.993-10.222,15.36-9.63"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M114.09,382.66c0.973,0.288,2.952,1.28,6.18,1.28c6.07,0,11.78-3.69,14.07-9.69c2.29-6,8.01-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.605,0,5.534,1.709,9.85,1.97c6.213,0.414,12.476-3.218,14.97-9.65c2.891-7.576,11.422-11.716,19.44-8.69&#10;&#9;&#9;&#9;c7.75,2.977,16.481-0.911,19.45-8.69c1.05-2.75,2.82-5.02,5.02-6.66"/><path style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        " d="&#10;&#9;&#9;&#9;M114.09,428.31c3.44-1.43,7.41-1.59,11.15-0.16c7.75,2.977,16.481-0.911,19.45-8.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.886,0,5.854,2,10.74,2c6.07,0,11.78-3.69,14.07-9.69c2.29-5.99,8.01-9.68,14.07-9.68c4.907,0,5.856,2,10.75,2&#10;&#9;&#9;&#9;c3.118,0,6.213-0.998,8.75-2.81"/><g><g><g><path style="\r\n                fill: none;\r\n                stroke: #000000;\r\n                stroke-width: 15;\r\n                stroke-linecap: round;\r\n                stroke-miterlimit: 10;\r\n              " d="M255.97,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"/><path style="\r\n                fill: none;\r\n                stroke: #000000;\r\n                stroke-width: 15;\r\n                stroke-linecap: round;\r\n                stroke-miterlimit: 10;\r\n              " d="M284.881,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"/></g></g><path style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          " d="&#10;&#9;&#9;&#9;&#9;M208.213,117.501c0-7.602-6.163-13.765-13.765-13.765c-7.602,0-13.765,6.163-13.765,13.765"/><path style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          " d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"/></g></g></g></svg>',IconPageFlat:()=>'<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z" fill="#e8ecf9"/><path d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z" fill="#d7ddf5"/><path d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z" fill="#c5ced6"/><path d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z" fill="#abb6c4"/><path d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><path d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z" fill="#abb6c4"/><path d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z" fill="#c5ced6"/><path d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z" fill="#abb6c4"/><path d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z" fill="#808fa4"/><path d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z" fill="#64768e"/><path d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z" fill="#808fa4"/><path d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z" fill="#64768e"/><path d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z" fill="#808fa4"/><path d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z" fill="#abb6c4"/><path d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><g><g><ellipse cx="172.744" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><ellipse cx="339.256" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><path d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z" fill="#495560"/></g><g><path d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g><g><path d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g></g></g></svg>',IconPalette:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"/><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',IconPencil:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/></svg>',IconPencilCog:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',IconPhoto:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/></svg>',IconPhotoOff:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"/><path d="M3 3l18 18" color="orange"/></svg>',IconPin:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4"/><path d="M9 15l-4.5 4.5"/><path d="M14.5 4l5.5 5.5"/></svg>',IconPlayerPause:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/></svg>',IconPlayerPlay:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z"/></svg>',IconRefresh:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',IconSettings:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/></svg>',IconSettingsOff:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"/><path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415"/><path d="M3 3l18 18"/></svg>',IconSpacingHorizontal:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-spacing-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2"/><path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M12 8v8"/></svg>',IconSpacingVertical:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2"/><path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M16 12h-8"/></svg>',IconSun:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/></svg>',IconTrash:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>',IconWorldCog:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -8.979 9"/><path d="M3.6 9h16.8"/><path d="M3.6 15h8.9"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',IconX:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>',IconZoom:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-zoom"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg>',IconZoomCancel:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M8 8l4 4"/><path d="M12 8l-4 4"/><path d="M21 21l-6 -6"/></svg>',IconZoomIn:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M10 7l0 6"/><path d="M21 21l-6 -6"/></svg>',IconZoomInArea:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 13v4"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',IconZoomOut:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M21 21l-6 -6"/></svg>',IconZoomOutArea:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',IconZoomPan:()=>'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M17 17l-2.5 -2.5"/><path d="M10 5l2 -2l2 2"/><path d="M19 10l2 2l-2 2"/><path d="M5 10l-2 2l2 2"/><path d="M10 19l2 2l2 -2"/></svg>'}),vo=Zr({IconAdjustmentsHorizontal:()=>ma,IconAlertCircle:()=>Va,IconApiBook:()=>ga,IconArrowAutofitDown:()=>ba,IconArrowAutofitHeight:()=>wa,IconArrowAutofitLeft:()=>ka,IconArrowAutofitRight:()=>ya,IconArrowAutofitWidth:()=>Ea,IconArrowBigLeft:()=>Aa,IconArrowBigRight:()=>xa,IconArrowsHorizontal:()=>va,IconArrowsLeftRight:()=>fa,IconArrowsMove:()=>Ia,IconArrowsMoveVertical:()=>Ma,IconArrowsVertical:()=>_a,IconBook:()=>Sa,IconBookArrowLeft:()=>Oa,IconBookArrowRight:()=>Ta,IconBookOff:()=>Ca,IconBookUpload:()=>Da,IconBookmark:()=>$a,IconBookmarkOff:()=>Na,IconBookmarks:()=>Ra,IconBooksReturn:()=>La,IconBoxAlignTop:()=>za,IconCategory:()=>Pa,IconCheck:()=>Ba,IconChevronLeft:()=>Ga,IconChevronRight:()=>Ha,IconCircleCheck:()=>Fa,IconCircleX:()=>Wa,IconComic1:()=>ja,IconComic1Flat:()=>qa,IconComic2:()=>Qa,IconComic2Flat:()=>Ya,IconComic3:()=>Xa,IconComic3Flat:()=>Ka,IconDeviceDesktop:()=>Ja,IconDeviceFloppy:()=>el,IconDeviceMobile:()=>tl,IconDeviceTablet:()=>ol,IconDotsVertical:()=>nl,IconEReader1:()=>rl,IconEReader1Flat:()=>il,IconEReader2:()=>al,IconEReader2Flat:()=>ll,IconExternalLink:()=>sl,IconEye:()=>cl,IconEyeOff:()=>dl,IconFileDownload:()=>hl,IconFilePercent:()=>pl,IconFolderOpen:()=>ul,IconHandClick:()=>ml,IconHelp:()=>Ua,IconInfoCircle:()=>Za,IconKeyboard:()=>gl,IconLayoutBottombar:()=>fl,IconLayoutBottombarInactive:()=>bl,IconLayoutDashboard:()=>vl,IconLayoutSidebar:()=>wl,IconLayoutSidebarInactive:()=>kl,IconLayoutSidebarRight:()=>yl,IconLayoutSidebarRightInactive:()=>El,IconListNumbers:()=>Al,IconLoader2:()=>xl,IconLocationCog:()=>Il,IconMenu2:()=>Ml,IconMenuDeep:()=>_l,IconMessage:()=>Sl,IconMoon:()=>Cl,IconPage:()=>Ol,IconPageFlat:()=>Tl,IconPalette:()=>Ll,IconPencil:()=>Dl,IconPencilCog:()=>$l,IconPhoto:()=>Nl,IconPhotoOff:()=>Rl,IconPin:()=>zl,IconPlayerPause:()=>Pl,IconPlayerPlay:()=>Bl,IconRefresh:()=>Gl,IconSettings:()=>Hl,IconSettingsOff:()=>Vl,IconSpacingHorizontal:()=>Fl,IconSpacingVertical:()=>Wl,IconSun:()=>Ul,IconTrash:()=>Zl,IconWorldCog:()=>jl,IconX:()=>ql,IconZoom:()=>Ql,IconZoomCancel:()=>Yl,IconZoomIn:()=>Xl,IconZoomInArea:()=>Kl,IconZoomOut:()=>Jl,IconZoomOutArea:()=>es,IconZoomPan:()=>ts}),fo=[...".icon-tabler-file-download > :nth-child(n + 4) {\r\n  color: gold;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-width > :nth-child(n + 3) {\r\n  color: yellow;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-height > :nth-child(n + 3) {\r\n  color: yellow;\r\n}\r\n\r\n.icon-tabler-zoom-in-area > :nth-child(2),\r\n.icon-tabler-zoom-in-area > :nth-child(3) {\r\n  color: lime;\r\n}\r\n\r\n.icon-tabler-zoom-out-area > :nth-child(2) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-zoom-pan > :nth-child(n + 4) {\r\n  color: #9966ff;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-down > :nth-child(n + 3) {\r\n  color: #28ffbf;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-left > :nth-child(n + 3) {\r\n  color: #28ffbf;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-right > :nth-child(n + 3) {\r\n  color: #28ffbf;\r\n}\r\n\r\n.icon-tabler-spacing-vertical > :nth-child(4) {\r\n  color: fuchsia;\r\n}\r\n\r\n.icon-tabler-spacing-horizontal > :nth-child(4) {\r\n  color: fuchsia;\r\n}\r\n\r\n.icon-tabler-list-numbers > :nth-child(n + 5) {\r\n  color: #e48900;\r\n}\r\n\r\n.icon-tabler-bookmarks > :nth-child(n + 2) {\r\n  color: orange;\r\n}\r\n\r\n.icon-tabler-bookmark > :nth-child(2) {\r\n  color: orange;\r\n}\r\n\r\n.icon-tabler-bookmark-off > :nth-child(2) {\r\n  color: orange;\r\n}\r\n\r\n.icon-tabler-bookmark-off > :nth-child(3) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-eye-off > :nth-child(4) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-zoom-cancel > :nth-child(3),\r\n.icon-tabler-zoom-cancel > :nth-child(4) {\r\n  color: #9966ff;\r\n}\r\n\r\n.icon-tabler-zoom-in > :nth-child(3),\r\n.icon-tabler-zoom-in > :nth-child(4) {\r\n  color: lime;\r\n}\r\n\r\n.icon-tabler-zoom-out > :nth-child(3) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-refresh > :nth-child(n + 2) {\r\n  color: cyan;\r\n}\r\n\r\n.icon-tabler-photo > :nth-child(n + 2) {\r\n  color: silver;\r\n}\r\n\r\n.icon-tabler-photo-off > :nth-child(n + 2) {\r\n  color: silver;\r\n}\r\n\r\n.icon-tabler-photo-off > :nth-child(6) {\r\n  color: orange;\r\n}\r\n\r\n.icon-tabler-message > :nth-child(2),\r\n.icon-tabler-message > :nth-child(3) {\r\n  color: greenyellow;\r\n}\r\n\r\n.icon-tabler-book-arrow-left > :nth-child(7),\r\n.icon-tabler-book-arrow-left > :nth-child(8),\r\n.icon-tabler-book-arrow-right > :nth-child(7),\r\n.icon-tabler-book-arrow-right > :nth-child(8),\r\n.icon-tabler-books-return > :nth-child(8),\r\n.icon-tabler-books-return > :nth-child(9) {\r\n  color: greenyellow;\r\n}\r\n\r\n.icon-tabler-file-percent > :nth-child(2),\r\n.icon-tabler-file-percent > :nth-child(5),\r\n.icon-tabler-file-percent > :nth-child(6) {\r\n  color: yellow;\r\n}\r\n\r\n.icon-tabler-settings-off > :nth-child(4) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-book-off > :nth-child(7) {\r\n  color: red;\r\n}\r\n".matchAll(/([^{}]+)\s*\{([^}]+)\}/g)].map(e=>{const t=e[1].trim(),o=e[2],n=/color:\s*([^;]+)/.exec(o);if(n){const e=n[1].trim();return{selectors:t.split(",").map(e=>e.trim().replace(/\s\s+/g," ")),color:e}}return null}).filter(e=>null!==e),bo=new Map;for(const e of fo)for(const t of e.selectors){const o=t.match(/^\s*\.([^ ]+)\s*(.*)$/);if(!o)continue;const[,n,r]=o;let i=r.trim();i.startsWith(">")&&(i=i.substring(1).trim()),""===i&&(i="*"),bo.has(n)||bo.set(n,[]),bo.get(n)?.push({subSelector:i,color:e.color})}wo=new DOMParser,ko=new XMLSerializer;var pa,ua,{IconAdjustmentsHorizontal:ma,IconApiBook:ga,IconArrowsHorizontal:va,IconArrowsLeftRight:fa,IconArrowAutofitDown:ba,IconArrowAutofitHeight:wa,IconArrowAutofitLeft:ka,IconArrowAutofitRight:ya,IconArrowAutofitWidth:Ea,IconArrowBigLeft:Aa,IconArrowBigRight:xa,IconArrowsMove:Ia,IconArrowsMoveVertical:Ma,IconArrowsVertical:_a,IconBook:Sa,IconBookOff:Ca,IconBookArrowLeft:Oa,IconBookArrowRight:Ta,IconBooksReturn:La,IconBookUpload:Da,IconBookmark:$a,IconBookmarkOff:Na,IconBookmarks:Ra,IconBoxAlignTop:za,IconCategory:Pa,IconCheck:Ba,IconChevronLeft:Ga,IconChevronRight:Ha,IconAlertCircle:Va,IconCircleCheck:Fa,IconCircleX:Wa,IconHelp:Ua,IconInfoCircle:Za,IconComic1:ja,IconComic1Flat:qa,IconComic2:Qa,IconComic2Flat:Ya,IconComic3:Xa,IconComic3Flat:Ka,IconDeviceDesktop:Ja,IconDeviceFloppy:el,IconDeviceMobile:tl,IconDeviceTablet:ol,IconDotsVertical:nl,IconEReader1:rl,IconEReader1Flat:il,IconEReader2:al,IconEReader2Flat:ll,IconExternalLink:sl,IconEye:cl,IconEyeOff:dl,IconFileDownload:hl,IconFilePercent:pl,IconFolderOpen:ul,IconHandClick:ml,IconKeyboard:gl,IconLayoutDashboard:vl,IconLayoutBottombar:fl,IconLayoutBottombarInactive:bl,IconLayoutSidebar:wl,IconLayoutSidebarInactive:kl,IconLayoutSidebarRight:yl,IconLayoutSidebarRightInactive:El,IconListNumbers:Al,IconLoader2:xl,IconLocationCog:Il,IconMenu2:Ml,IconMenuDeep:_l,IconMessage:Sl,IconMoon:Cl,IconPage:Ol,IconPageFlat:Tl,IconPalette:Ll,IconPencil:Dl,IconPencilCog:$l,IconPhoto:Nl,IconPhotoOff:Rl,IconPin:zl,IconPlayerPause:Pl,IconPlayerPlay:Bl,IconRefresh:Gl,IconSettings:Hl,IconSettingsOff:Vl,IconSpacingHorizontal:Fl,IconSpacingVertical:Wl,IconSun:Ul,IconTrash:Zl,IconWorldCog:jl,IconX:ql,IconZoom:Ql,IconZoomCancel:Yl,IconZoomIn:Xl,IconZoomInArea:Kl,IconZoomOut:Jl,IconZoomOutArea:es,IconZoomPan:ts}=_.mapValues(go,(e,t)=>function(e,t){const o=bo.get(t);if(!o?.length)return e;const n=wo.parseFromString(e,"image/svg+xml").documentElement;if(n.querySelector("parsererror"))return console.error(`Error parsing SVG for ${t}`),e;for(const{subSelector:e,color:r}of o)try{n.querySelectorAll(e).forEach(e=>{e.setAttribute("stroke",r)})}catch(o){console.error(`Invalid selector "${e}" for ${t}`,o)}return ko.serializeToString(n)}(e,`icon-tabler-${_.kebabCase(t.replace(/^Icon/,""))}`));yo=class extends no{constructor(...e){super(...e),this.name="",this.variant="regular",this.family="classic",this.label="",this.size=""}static{this.styles=Kt`
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
  `}updated(e){super.updated(e),e.has("name")&&(vo[E(this.name)]?(this.dispatchEvent(new CustomEvent("load",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-load",{bubbles:!0,composed:!0}))):(this.dispatchEvent(new CustomEvent("error",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-error",{bubbles:!0,composed:!0}))))}render(){const e=vo[E(this.name)];if(!e)return Pi;const t=this.size?`--mov-icon-size: ${this.size};`:"";return Ri`<span
      role=${this.label?"img":Pi}
      aria-label=${this.label||Pi}
      aria-hidden=${this.label?Pi:"true"}
      style=${t}
      >${mo(e)}</span
    >`}},A([w({type:String})],yo.prototype,"name",void 0),A([w({type:String,reflect:!0})],yo.prototype,"variant",void 0),A([w({type:String,reflect:!0})],yo.prototype,"family",void 0),A([w({type:String})],yo.prototype,"label",void 0),A([w({type:String})],yo.prototype,"size",void 0),yo=A([io("mov-icon")],yo),Eo=(e,...t)=>0===t.length?e[0]:String.raw({raw:e},...t),Ao='.mov-toast-stack {\r\n  position: fixed;\r\n  z-index: 2000;\r\n  width: 350px;\r\n  max-width: 100vw;\r\n  max-height: 100vh;\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  pointer-events: none;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Placements */\r\n.mov-toast-stack-top-start {\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.mov-toast-stack-top-center {\r\n  top: 0;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  align-items: center;\r\n}\r\n.mov-toast-stack-top-end {\r\n  top: 0;\r\n  right: 0;\r\n}\r\n.mov-toast-stack-bottom-start {\r\n  bottom: 0;\r\n  left: 0;\r\n  flex-direction: column-reverse;\r\n}\r\n.mov-toast-stack-bottom-center {\r\n  bottom: 0;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  align-items: center;\r\n  flex-direction: column-reverse;\r\n}\r\n.mov-toast-stack-bottom-end {\r\n  bottom: 0;\r\n  right: 0;\r\n  flex-direction: column-reverse;\r\n}\r\n\r\n:host {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.mov-toast {\r\n  pointer-events: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--theme-background-color);\r\n  color: var(--theme-text-color);\r\n  border: 1px solid var(--theme-border-color);\r\n  border-radius: 0.5rem;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\r\n  overflow: hidden;\r\n  transition:\r\n    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),\r\n    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),\r\n    visibility 0.3s cubic-bezier(0.4, 0, 0.2, 1);\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  width: 100%;\r\n}\r\n\r\n/* Animation directions based on placement property */\r\n:host([placement$="-end"]) .mov-toast {\r\n  transform: translateX(110%);\r\n}\r\n\r\n:host([placement$="-start"]) .mov-toast {\r\n  transform: translateX(-110%);\r\n}\r\n\r\n:host([placement="top-center"]) .mov-toast {\r\n  transform: translateY(-110%);\r\n}\r\n\r\n:host([placement="bottom-center"]) .mov-toast {\r\n  transform: translateY(110%);\r\n}\r\n\r\n:host([open]) .mov-toast {\r\n  transform: translate(0, 0);\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\n.mov-toast-body {\r\n  display: flex;\r\n  padding: 0.75rem 1rem;\r\n  gap: 0.75rem;\r\n  align-items: flex-start;\r\n}\r\n\r\n.mov-toast-icon {\r\n  flex-shrink: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 20px;\r\n  margin-top: 0.125rem;\r\n}\r\n\r\n.mov-toast-icon mov-icon {\r\n  --mov-icon-size: 1.25rem;\r\n}\r\n\r\n.mov-toast-content {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.125rem;\r\n}\r\n\r\n.mov-toast-title {\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  line-height: 1.25;\r\n}\r\n\r\n.mov-toast-description {\r\n  font-size: 13px;\r\n  opacity: 0.8;\r\n  line-height: 1.4;\r\n}\r\n\r\n.mov-toast-close {\r\n  flex-shrink: 0;\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding: 0.25rem;\r\n  color: inherit;\r\n  opacity: 0.5;\r\n  transition: opacity 0.2s;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-right: -0.25rem;\r\n}\r\n\r\n.mov-toast-close:hover {\r\n  opacity: 1;\r\n}\r\n\r\n/* Variants */\r\n.mov-toast-variant-primary .mov-toast-icon {\r\n  color: var(--mov-color-fill-loud);\r\n}\r\n.mov-toast-variant-success .mov-toast-icon {\r\n  color: #28a745;\r\n}\r\n.mov-toast-variant-warning .mov-toast-icon {\r\n  color: #ffc107;\r\n}\r\n.mov-toast-variant-danger .mov-toast-icon {\r\n  color: #dc3545;\r\n}\r\n.mov-toast-variant-neutral .mov-toast-icon {\r\n  color: var(--theme-text-color);\r\n}\r\n\r\n.mov-toast-variant-primary {\r\n  border-left: 4px solid var(--mov-color-fill-loud);\r\n}\r\n.mov-toast-variant-success {\r\n  border-left: 4px solid #28a745;\r\n}\r\n.mov-toast-variant-warning {\r\n  border-left: 4px solid #ffc107;\r\n}\r\n.mov-toast-variant-danger {\r\n  border-left: 4px solid #dc3545;\r\n}\r\n.mov-toast-variant-neutral {\r\n  border-left: 4px solid var(--theme-border-color);\r\n}\r\n',xo=class extends no{constructor(...e){super(...e),this.open=!1,this.variant="primary",this.duration=3e3,this.closable=!1,this.title="",this.description="",this.placement="bottom-end"}static{this.styles=[Xt(Ao)]}async show(){if(!this.open)return await this.updateComplete,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),this.open=!0,this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration)),new Promise(e=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0})),e()},300)})}async hide(){if(this.open)return window.clearTimeout(this.autoHideTimeout),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.open=!1,new Promise(e=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0})),this.remove(),e()},300)})}handleCloseClick(){this.hide()}getDefaultIcon(){if(this.icon)return this.icon;switch(this.variant){case"success":return"IconCircleCheck";case"warning":return"IconAlertCircle";case"danger":return"IconCircleX";default:return"IconInfoCircle"}}render(){return Ri`
      <div
        part="base"
        class=${co({"mov-toast":!0,[`mov-toast-variant-${this.variant}`]:!0})}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open?"false":"true"}
      >
        <div class="mov-toast-body" part="body">
          <div class="mov-toast-icon" part="icon">
            <slot name="icon">
              <mov-icon name=${this.getDefaultIcon()}></mov-icon>
            </slot>
          </div>

          <div class="mov-toast-content" part="content">
            ${this.title?Ri`<div class="mov-toast-title" part="title">${this.title}</div>`:""}
            <div class="mov-toast-description" part="description">
              <slot>${this.description}</slot>
            </div>
          </div>

          <slot name="action"></slot>

          ${this.closable?Ri`
                <button
                  type="button"
                  class="mov-toast-close"
                  part="close-button"
                  @click=${this.handleCloseClick}
                  aria-label="Close"
                >
                  <mov-icon name="IconX"></mov-icon>
                </button>
              `:""}
        </div>
      </div>
    `}},A([w({type:Boolean,reflect:!0})],xo.prototype,"open",void 0),A([w({reflect:!0})],xo.prototype,"variant",void 0),A([w({type:Number})],xo.prototype,"duration",void 0),A([w({type:Boolean})],xo.prototype,"closable",void 0),A([w()],xo.prototype,"title",void 0),A([w()],xo.prototype,"description",void 0),A([w()],xo.prototype,"icon",void 0),A([w({reflect:!0})],xo.prototype,"placement",void 0),xo=A([io("mov-toast")],xo),(Io=e=>{const t=e.placement||"bottom-end",o=`mov-toast-stack-${t}`;let n=document.querySelector(`.mov-toast-stack.${o}`);const r=Ao.indexOf(":host");x("mov-toast-stack-styles",r>-1?Ao.substring(0,r).trim():Ao),n||(n=document.createElement("div"),n.className=`mov-toast-stack ${o}`,document.body.appendChild(n));const i=document.createElement("mov-toast");let a=e.variant||"primary";return"info"===a&&(a="primary"),"error"===a&&(a="danger"),i.variant=a,i.title=e.title||"",i.description=e.description||e.message||"",i.duration=e.duration??3e3,i.closable=e.closable??!0,i.placement=t,e.icon&&(i.icon=e.icon),n.appendChild(i),requestAnimationFrame(()=>{i.show()}),i}).info=e=>Io({...e,variant:"primary"}),Io.success=e=>Io({...e,variant:"success"}),Io.warning=e=>Io({...e,variant:"warning"}),Io.error=e=>Io({...e,variant:"danger"}),Mo=(e,t)=>{const o=(e,t)=>_.transform(e,(e,n,r)=>{_.isEqual(n,t[r])||(_.isObject(n)&&_.isObject(t[r])&&!_.isArray(n)?e[r]=o(n,t[r]):e[r]=n)});return o(e,t)},_o={bookmarks:[],colorScheme:"dark",deviceMode:"auto",downloadZip:!1,enabled:!1,fitWidthIfOversize:!0,header:"scroll",hidePageControls:!1,lazyLoadImages:!1,lazyStart:50,loadMode:"wait",locale:"en_US",maxReload:5,minZoom:30,navbar:"bottom",pagination:"disabled",scrollHeight:25,theme:"#29487D",loadSpeed:"Extreme",viewMode:"WebComic",zoomMode:"percent",zoomStep:30,zoomValue:100,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],RETURN_CHAPTER_LIST:["backspace","del","num_decimal"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H","num_0"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],VIEW_MODE_GALLERY:["G"],SCROLL_START:["space"],INCREASE_SPEED:["."],DECREASE_SPEED:[","],TOGGLE_CONTROLS:["L"]}},So={lazyLoadImages:!0,fitWidthIfOversize:!0,navbar:"disabled",viewMode:"WebComic",header:"scroll",hidePageControls:!0,pagination:"disabled"},Co={loadSpeed:"All",lazyLoadImages:!1,downloadZip:!1,theme:"oklch(44.6% 0.043 257.281)"},Oo=_.defaultsDeep(function(e){return n("settings",e)}(I()),I()),To=_.defaultsDeep(function(e){return n(window.location.hostname,e)}(I(!1)),I(!1)),Do=e=>Lo()&&!["locale","bookmarks","keybinds"].includes(e),No=pi($o=ui((Lo=()=>!0===To?.enabled)()?{...To,locale:Oo.locale,keybinds:Oo.keybinds,bookmarks:Oo.bookmarks}:Oo),e=>Ft.find(t=>t.ID===e.locale)??Ft[1]),Ro=ui({autoScroll:!1,chapter:Bt(),currentPage:0,device:C(),manga:void 0,panel:"none",scrollToPage:void 0}),Xr(_.debounce(function(t){const o=_.defaultsDeep(t,I()),n=Oo?Mo(o,Oo):o;if(!l(n)){e("Imported Global Settings",n),Oo=o;for(const e in n)O(e)}},300),"settings"),Xr(_.debounce(function(t){const o=_.defaultsDeep(t,I(!1)),n=To?Mo(o,To):o;if(!l(n)){e("Imported Local Settings",n),To=o;for(const e in n)O(e)}},300),location.hostname),pa="MOVSettings",ua=function(e=null){t("Current Settings (Local:",Lo(),") ",e?$o.get()[e]:$o.get(),"\nGlobal Settings",e?Oo[e]:Oo,"\nLocal Settings",e?To[e]:To,"\nAppState",Ro.get())},"undefined"!=typeof unsafeWindow&&(unsafeWindow[pa]=ua),"undefined"!=typeof window&&(window[pa]=ua),zo=(e,t,o)=>{if(o&&!["bookmarks","zoomValue"].includes(o)){const n=t[o],r=e[o];Io.info({title:`${o} Changed`,description:`from ${JSON.stringify(n)} to ${JSON.stringify(r)}`,duration:2e3})}},$o.listen(_.debounce(zo,300)),Po=e=>e??Pi,Bo=class extends no{constructor(...e){super(...e),this.isIconButton=!1,this.hasLabel=!1,this.hasStart=!1,this.hasEnd=!1,this.title="",this.appearance="accent",this.variant="brand",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static{this.styles=[Xt(':host {\r\n  display: inline-block;\r\n  --mov-font-size-scale: 1;\r\n  --mov-font-size-m: calc(16px * var(--mov-font-size-scale));\r\n  --mov-font-size-s: round(calc(var(--mov-font-size-m) / 1.125), 1px);\r\n  --mov-font-size-l: round(calc(var(--mov-font-size-m) * 1.125 * 1.125), 1px);\r\n  --mov-border-width-s: 0.0625rem;\r\n  --mov-border-radius-pill: 9999px;\r\n  --mov-transition-fast: 75ms;\r\n  --mov-font-weight-action: 500;\r\n  --mov-focus-ring: solid 0.1875rem var(--mov-color-fill-loud);\r\n  --mov-focus-ring-offset: 0.0625rem;\r\n  --mov-line-height-condensed: 1.2;\r\n  --mov-form-control-padding-block: 0.75em;\r\n  --mov-form-control-padding-inline: 1em;\r\n  --mov-form-control-height: round(\r\n    calc(2 * var(--mov-form-control-padding-block) + 1em * var(--mov-line-height-condensed)),\r\n    1px\r\n  );\r\n}\r\n\r\n:host([size="small"]) {\r\n  font-size: var(--mov-font-size-s);\r\n}\r\n:host([size="medium"]) {\r\n  font-size: var(--mov-font-size-m);\r\n}\r\n:host([size="large"]) {\r\n  font-size: var(--mov-font-size-l);\r\n}\r\n\r\n.button {\r\n  box-sizing: border-box;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-decoration: none;\r\n  user-select: none;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  transition-property: background, border, box-shadow, color;\r\n  transition-duration: var(--mov-transition-fast);\r\n  cursor: pointer;\r\n  padding: 0 var(--mov-form-control-padding-inline);\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  font-weight: var(--mov-font-weight-action);\r\n  line-height: calc(var(--mov-form-control-height) - var(--mov-border-width-s) * 2);\r\n  height: var(--mov-form-control-height);\r\n  border-radius: var(--mov-border-radius-m, 0.375rem);\r\n  border-style: solid;\r\n  border-width: var(--mov-border-width-s);\r\n  background-color: var(--mov-color-fill-loud);\r\n  color: var(--mov-color-on-loud);\r\n  border-color: transparent;\r\n}\r\n\r\n/* Appearance modifiers */\r\n:host([appearance~="plain"]) {\r\n  .button {\r\n    color: var(--mov-color-on-quiet);\r\n    background-color: transparent;\r\n    border-color: transparent;\r\n  }\r\n  @media (hover: hover) {\r\n    .button:not(.disabled):not(.loading):hover {\r\n      color: var(--mov-color-on-quiet);\r\n      background-color: var(--mov-color-fill-quiet);\r\n    }\r\n  }\r\n  .button:not(.disabled):not(.loading):active {\r\n    color: var(--mov-color-on-quiet);\r\n    background-color: color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active));\r\n  }\r\n}\r\n\r\n:host([appearance~="outlined"]) {\r\n  .button {\r\n    color: var(--mov-color-on-quiet);\r\n    background-color: transparent;\r\n    border-color: var(--mov-color-border-loud);\r\n  }\r\n  @media (hover: hover) {\r\n    .button:not(.disabled):not(.loading):hover {\r\n      color: var(--mov-color-on-quiet);\r\n      background-color: var(--mov-color-fill-quiet);\r\n    }\r\n  }\r\n  .button:not(.disabled):not(.loading):active {\r\n    color: var(--mov-color-on-quiet);\r\n    background-color: color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active));\r\n  }\r\n}\r\n\r\n:host([appearance~="filled"]) {\r\n  .button {\r\n    color: var(--mov-color-on-normal);\r\n    background-color: var(--mov-color-fill-normal);\r\n    border-color: transparent;\r\n  }\r\n  @media (hover: hover) {\r\n    .button:not(.disabled):not(.loading):hover {\r\n      color: var(--mov-color-on-normal);\r\n      background-color: color-mix(\r\n        in oklab,\r\n        var(--mov-color-fill-normal),\r\n        var(--mov-color-mix-hover)\r\n      );\r\n    }\r\n  }\r\n  .button:not(.disabled):not(.loading):active {\r\n    color: var(--mov-color-on-normal);\r\n    background-color: color-mix(\r\n      in oklab,\r\n      var(--mov-color-fill-normal),\r\n      var(--mov-color-mix-active)\r\n    );\r\n  }\r\n}\r\n\r\n:host([appearance~="filled"][appearance~="outlined"]) .button {\r\n  border-color: var(--mov-color-border-normal);\r\n}\r\n\r\n:host([appearance~="accent"]) {\r\n  .button {\r\n    color: var(--mov-color-on-loud);\r\n    background-color: var(--mov-color-fill-loud);\r\n    border-color: transparent;\r\n  }\r\n  @media (hover: hover) {\r\n    .button:not(.disabled):not(.loading):hover {\r\n      background-color: color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-hover));\r\n    }\r\n  }\r\n  .button:not(.disabled):not(.loading):active {\r\n    background-color: color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-active));\r\n  }\r\n}\r\n/* Focus states */\r\n.button:focus {\r\n  outline: none;\r\n}\r\n.button:focus-visible {\r\n  outline: var(--mov-focus-ring);\r\n  outline-offset: var(--mov-focus-ring-offset);\r\n}\r\n\r\n/* Disabled state */\r\n.button.disabled {\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}\r\n.button.disabled * {\r\n  pointer-events: none;\r\n}\r\n\r\n/* Icon buttons */\r\n.button.is-icon-button {\r\n  outline-offset: 2px;\r\n  width: var(--mov-form-control-height);\r\n  aspect-ratio: 1;\r\n}\r\n\r\n/* Pill modifier */\r\n:host([pill]) .button {\r\n  border-radius: var(--mov-border-radius-pill);\r\n}\r\n\r\n.start,\r\n.end {\r\n  flex: 0 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n  pointer-events: none;\r\n}\r\n\r\n.label {\r\n  display: inline-block;\r\n}\r\n.is-icon-button .label {\r\n  display: flex;\r\n}\r\n\r\nmov-icon[part~="caret"] {\r\n  display: flex;\r\n  align-self: center;\r\n  align-items: center;\r\n}\r\nmov-icon[part~="caret"]::part(svg) {\r\n  width: 0.875em;\r\n  height: 0.875em;\r\n}\r\n\r\n.loading {\r\n  position: relative;\r\n  cursor: wait;\r\n}\r\n.loading .start,\r\n.loading .label,\r\n.loading .end,\r\n.loading .caret {\r\n  visibility: hidden;\r\n}\r\n\r\n.spinner {\r\n  --indicator-color: currentColor;\r\n  --track-color: color-mix(in oklab, currentColor, transparent 90%);\r\n  position: absolute;\r\n  font-size: 1em;\r\n  height: 1em;\r\n  width: 1em;\r\n  top: calc(50% - 0.5em);\r\n  left: calc(50% - 0.5em);\r\n  border-radius: 50%;\r\n  border: 2px solid var(--track-color);\r\n  border-top-color: var(--indicator-color);\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\nslot[name="start"]::slotted(*) {\r\n  margin-inline-end: 0.75em;\r\n}\r\nslot[name="end"]::slotted(*),\r\n.button:not(.visually-hidden-label) [part~="caret"] {\r\n  margin-inline-start: 0.75em;\r\n}\r\n')]}handleClick(e){(this.disabled||this.loading)&&(e.preventDefault(),e.stopPropagation())}click(){this.button?.click()}focus(e){this.button?.focus(e)}blur(){this.button?.blur()}render(){const e=!!this.href,t={button:!0,"with-caret":this.withCaret,disabled:this.disabled,loading:this.loading,pill:this.pill,"has-label":this.hasLabel,"has-start":this.hasStart,"has-end":this.hasEnd,"is-icon-button":this.isIconButton},o=Ri`
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
      ${this.withCaret?Ri`<mov-icon
            part="caret"
            class="caret"
            name="IconChevronRight"
            style="transform: rotate(90deg)"
          ></mov-icon>`:""}
      ${this.loading?Ri`<span
            part="spinner"
            class="spinner"
          ></span>`:""}
    `;return e?Ri`
        <a
          part="base"
          class=${co(t)}
          href=${Po(this.href)}
          target=${Po(this.target)}
          title=${Po(this.title)}
          role="button"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          download=${Po(this.download)}
          @click=${this.handleClick}
        >
          ${o}
        </a>
      `:Ri`
        <button
          part="base"
          class=${co(t)}
          ?disabled=${this.disabled||this.loading}
          type=${Po(this.type)}
          title=${Po(this.title)}
          name=${Po(this.name)}
          value=${Po(this.value)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
        >
          ${o}
        </button>
      `}handleLabelSlotChange(){const e=this.labelSlot?.assignedNodes({flatten:!0})??[],t=e.filter(e=>e.nodeType===Node.ELEMENT_NODE),o=e.filter(e=>e.nodeType===Node.TEXT_NODE&&""!==e.textContent?.trim()),n=t.some(e=>["wa-icon","mov-icon","svg"].includes(e.localName));this.isIconButton=0===o.length&&n}},A([y(".button")],Bo.prototype,"button",void 0),A([y("slot:not([name])")],Bo.prototype,"labelSlot",void 0),A([k()],Bo.prototype,"isIconButton",void 0),A([k()],Bo.prototype,"hasLabel",void 0),A([k()],Bo.prototype,"hasStart",void 0),A([k()],Bo.prototype,"hasEnd",void 0),A([w()],Bo.prototype,"title",void 0),A([w({reflect:!0})],Bo.prototype,"appearance",void 0),A([w({reflect:!0})],Bo.prototype,"variant",void 0),A([w({reflect:!0})],Bo.prototype,"size",void 0),A([w({attribute:"with-caret",type:Boolean,reflect:!0})],Bo.prototype,"withCaret",void 0),A([w({type:Boolean,reflect:!0})],Bo.prototype,"disabled",void 0),A([w({type:Boolean,reflect:!0})],Bo.prototype,"loading",void 0),A([w({type:Boolean,reflect:!0})],Bo.prototype,"pill",void 0),A([w()],Bo.prototype,"type",void 0),A([w({reflect:!0})],Bo.prototype,"name",void 0),A([w({reflect:!0})],Bo.prototype,"value",void 0),A([w({reflect:!0})],Bo.prototype,"href",void 0),A([w()],Bo.prototype,"target",void 0),A([w({reflect:!0})],Bo.prototype,"rel",void 0),A([w()],Bo.prototype,"download",void 0),A([w({reflect:!0})],Bo.prototype,"form",void 0),Bo=A([io("mov-button")],Bo),Go=class extends no{constructor(...e){super(...e),this.mode="burger",this.active=!1,this.label="",this.icon="",this.activeIcon="",this.appearance="accent",this.size="medium",this.disabled=!1,this.loading=!1}static{this.styles=Kt`
    :host {
      display: inline-flex;
      vertical-align: middle;
      --burger-size: 1.25rem;
      --burger-line-height: 2px;
      --burger-line-color: currentColor;
      --burger-transition-duration: 0.3s;
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

    /* Burger Mode Styling */
    .burger-mode {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: var(--burger-size);
      height: var(--burger-size);
      position: relative;
    }

    .burger-line {
      width: 100%;
      height: var(--burger-line-height);
      background-color: var(--burger-line-color);
      border-radius: var(--burger-line-height);
      transition: transform var(--burger-transition-duration) ease,
                  opacity var(--burger-transition-duration) ease;
      position: absolute;
    }

    .burger-line:nth-child(1) { transform: translateY(-6px); }
    .burger-line:nth-child(2) { transform: translateY(0); }
    .burger-line:nth-child(3) { transform: translateY(6px); }

    :host([active]) .burger-line:nth-child(1) {
      transform: translateY(0) rotate(45deg);
    }

    :host([active]) .burger-line:nth-child(2) {
      opacity: 0;
      transform: translateX(4px);
    }

    :host([active]) .burger-line:nth-child(3) {
      transform: translateY(0) rotate(-45deg);
    }

    /* Size adjustments for burger */
    :host([size="small"]) { --burger-size: 1rem; }
    :host([size="large"]) { --burger-size: 1.5rem; }

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
  `}connectedCallback(){super.connectedCallback(),this.label||(this.label=this._getDefaultLabel())}render(){const e=this.active?this.activeLabel??this.label:this.label,t={"two-icon-mode":["custom","theme"].includes(this.mode),"single-icon-mode":["chevron","expand","play-pause"].includes(this.mode),"burger-mode-active":"burger"===this.mode};return Ri`
      <mov-button
        @click=${this._onClick}
        .appearance=${Po(this.appearance)}
        .size=${Po(this.size)}
        ?disabled=${Po(this.disabled)}
        ?loading=${Po(this.loading)}
        .title=${Po(this.title)}
        class=${co(t)}
        title=${e}
        aria-label=${e}
        aria-pressed=${this.active?"true":"false"}
        icon-only
      >
        ${this._renderIcons()}
      </mov-button>
    `}_getDefaultLabel(){switch(this.mode){case"burger":return"Toggle menu";case"chevron":case"expand":return"Toggle expand";case"theme":return"Toggle theme";case"play-pause":return"Toggle play";default:return"Toggle"}}_getIcons(){switch(this.mode){case"chevron":return{inactive:"chevron-right",active:"chevron-right"};case"theme":return{inactive:"moon",active:"sun"};case"play-pause":return{inactive:"player-play",active:"player-pause"};case"expand":return{inactive:"arrow-autofit-down",active:"arrow-autofit-down"};case"custom":return{inactive:this.icon,active:this.activeIcon};default:return{inactive:"",active:""}}}_renderIcons(){if("burger"===this.mode)return Ri`
        <div class="burger-mode">
          <div class="burger-line"></div>
          <div class="burger-line"></div>
          <div class="burger-line"></div>
        </div>
      `;const e=this._getIcons();return e.inactive?"chevron"===this.mode?Ri`<mov-icon
        class="chevron-icon"
        name=${e.inactive}
      ></mov-icon>`:"expand"===this.mode?Ri`<mov-icon
        class="expand-icon"
        name=${e.inactive}
      ></mov-icon>`:"play-pause"===this.mode?Ri`<mov-icon
        class="play-pause-icon"
        name=${this.active?e.active:e.inactive}
      ></mov-icon>`:Ri`
      <mov-icon
        class="inactive-icon"
        name=${e.inactive}
      ></mov-icon>
      <mov-icon
        class="active-icon"
        name=${e.active}
      ></mov-icon>
    `:Pi}_onClick(){if(this.disabled||this.loading)return;const e=this.active;this.active=!this.active,this.dispatchEvent(new CustomEvent("toggle",{detail:{value:this.active,oldValue:e,mode:this.mode},bubbles:!0,composed:!0}))}toggle(){this._onClick()}setActive(e){this.active=e}},A([w({type:String})],Go.prototype,"mode",void 0),A([w({type:Boolean,reflect:!0})],Go.prototype,"active",void 0),A([w({type:String})],Go.prototype,"label",void 0),A([w({type:String})],Go.prototype,"activeLabel",void 0),A([w({type:String})],Go.prototype,"icon",void 0),A([w({type:String})],Go.prototype,"activeIcon",void 0),A([w({type:String,reflect:!0})],Go.prototype,"appearance",void 0),A([w({type:String,reflect:!0})],Go.prototype,"size",void 0),A([w({type:Boolean})],Go.prototype,"disabled",void 0),A([w({type:Boolean,reflect:!0})],Go.prototype,"loading",void 0),Go=A([io("toggle-button")],Go),Ho=Lt(class extends Dt{constructor(e){if(super(e),1!==e.type||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,o)=>{const n=e[o];return null==n?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:o}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)t[e]??(this.ft.delete(e),e.includes("-")?o.removeProperty(e):o[e]=null);for(const e in t){const n=t[e];if(null!=n){this.ft.add(e);const t="string"==typeof n&&n.endsWith(" !important");e.includes("-")||t?o.setProperty(e,t?n.slice(0,-11):n,t?"important":""):o[e]=n}}return zi}}),Vo={navy:"#001f3f",darkblue:"#1e4f7a",blue:"#1A2F4B",darkgreen:"#062925",green:"#1A3636",grass:"#1B3C53",teal:"#044A42",darkpurple:"#1B0044",purple:"#363062",grape:"#31326F",maroon:"#44000D"},Fo={dark:{50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113",950:"#000000"},slate:{50:"oklch(98.4% 0.003 247.858)",100:"oklch(96.8% 0.007 247.896)",200:"oklch(92.9% 0.013 255.508)",300:"oklch(86.9% 0.022 252.894)",400:"oklch(70.4% 0.04 256.788)",500:"oklch(55.4% 0.046 257.417)",600:"oklch(44.6% 0.043 257.281)",700:"oklch(37.2% 0.044 257.287)",800:"oklch(27.9% 0.041 260.031)",900:"oklch(20.8% 0.042 265.755)",950:"oklch(12.9% 0.042 264.695)"},gray:{50:"oklch(98.5% 0.002 247.839)",100:"oklch(96.7% 0.003 264.542)",200:"oklch(92.8% 0.006 264.531)",300:"oklch(87.2% 0.01 258.338)",400:"oklch(70.7% 0.022 261.325)",500:"oklch(55.1% 0.027 264.364)",600:"oklch(44.6% 0.03 256.802)",700:"oklch(37.3% 0.034 259.733)",800:"oklch(27.8% 0.033 256.848)",900:"oklch(21% 0.034 264.665)",950:"oklch(13% 0.028 261.692)"},zinc:{50:"oklch(98.5% 0 0)",100:"oklch(96.7% 0.001 286.375)",200:"oklch(92% 0.004 286.32)",300:"oklch(87.1% 0.006 286.286)",400:"oklch(70.5% 0.015 286.067)",500:"oklch(55.2% 0.016 285.938)",600:"oklch(44.2% 0.017 285.786)",700:"oklch(37% 0.013 285.805)",800:"oklch(27.4% 0.006 286.033)",900:"oklch(21% 0.006 285.885)",950:"oklch(14.1% 0.005 285.823)"},neutral:{50:"oklch(98.5% 0 0)",100:"oklch(97% 0 0)",200:"oklch(92.2% 0 0)",300:"oklch(87% 0 0)",400:"oklch(70.8% 0 0)",500:"oklch(55.6% 0 0)",600:"oklch(43.9% 0 0)",700:"oklch(37.1% 0 0)",800:"oklch(26.9% 0 0)",900:"oklch(20.5% 0 0)",950:"oklch(14.5% 0 0)"},stone:{50:"oklch(98.5% 0.001 106.423)",100:"oklch(97% 0.001 106.424)",200:"oklch(92.3% 0.003 48.717)",300:"oklch(86.9% 0.005 56.366)",400:"oklch(70.9% 0.01 56.259)",500:"oklch(55.3% 0.013 58.071)",600:"oklch(44.4% 0.011 73.639)",700:"oklch(37.4% 0.01 67.558)",800:"oklch(26.8% 0.007 34.298)",900:"oklch(21.6% 0.006 56.043)",950:"oklch(14.7% 0.004 49.25)"},red:{50:"oklch(97.1% 0.013 17.38)",100:"oklch(93.6% 0.032 17.717)",200:"oklch(88.5% 0.062 18.334)",300:"oklch(80.8% 0.114 19.571)",400:"oklch(70.4% 0.191 22.216)",500:"oklch(63.7% 0.237 25.331)",600:"oklch(57.7% 0.245 27.325)",700:"oklch(50.5% 0.213 27.518)",800:"oklch(44.4% 0.177 26.899)",900:"oklch(39.6% 0.141 25.723)",950:"oklch(25.8% 0.092 26.042)"},orange:{50:"oklch(98% 0.016 73.684)",100:"oklch(95.4% 0.038 75.164)",200:"oklch(90.1% 0.076 70.697)",300:"oklch(83.7% 0.128 66.29)",400:"oklch(75% 0.183 55.934)",500:"oklch(70.5% 0.213 47.604)",600:"oklch(64.6% 0.222 41.116)",700:"oklch(55.3% 0.195 38.402)",800:"oklch(47% 0.157 37.304)",900:"oklch(40.8% 0.123 38.172)",950:"oklch(26.6% 0.079 36.259)"},amber:{50:"oklch(98.7% 0.022 95.277)",100:"oklch(96.2% 0.059 95.617)",200:"oklch(92.4% 0.12 95.746)",300:"oklch(87.9% 0.169 91.605)",400:"oklch(82.8% 0.189 84.429)",500:"oklch(76.9% 0.188 70.08)",600:"oklch(66.6% 0.179 58.318)",700:"oklch(55.5% 0.163 48.998)",800:"oklch(47.3% 0.137 46.201)",900:"oklch(41.4% 0.112 45.904)",950:"oklch(27.9% 0.077 45.635)"},yellow:{50:"oklch(98.7% 0.026 102.212)",100:"oklch(97.3% 0.071 103.193)",200:"oklch(94.5% 0.129 101.54)",300:"oklch(90.5% 0.182 98.111)",400:"oklch(85.2% 0.199 91.936)",500:"oklch(79.5% 0.184 86.047)",600:"oklch(68.1% 0.162 75.834)",700:"oklch(55.4% 0.135 66.442)",800:"oklch(47.6% 0.114 61.907)",900:"oklch(42.1% 0.095 57.708)",950:"oklch(28.6% 0.066 53.813)"},lime:{50:"oklch(98.6% 0.031 120.757)",100:"oklch(96.7% 0.067 122.328)",200:"oklch(93.8% 0.127 124.321)",300:"oklch(89.7% 0.196 126.665)",400:"oklch(84.1% 0.238 128.85)",500:"oklch(76.8% 0.233 130.85)",600:"oklch(64.8% 0.2 131.684)",700:"oklch(53.2% 0.157 131.589)",800:"oklch(45.3% 0.124 130.933)",900:"oklch(40.5% 0.101 131.063)",950:"oklch(27.4% 0.072 132.109)"},green:{50:"oklch(98.2% 0.018 155.826)",100:"oklch(96.2% 0.044 156.743)",200:"oklch(92.5% 0.084 155.995)",300:"oklch(87.1% 0.15 154.449)",400:"oklch(79.2% 0.209 151.711)",500:"oklch(72.3% 0.219 149.579)",600:"oklch(62.7% 0.194 149.214)",700:"oklch(52.7% 0.154 150.069)",800:"oklch(44.8% 0.119 151.328)",900:"oklch(39.3% 0.095 152.535)",950:"oklch(26.6% 0.065 152.934)"},emerald:{50:"oklch(97.9% 0.021 166.113)",100:"oklch(95% 0.052 163.051)",200:"oklch(90.5% 0.093 164.15)",300:"oklch(84.5% 0.143 164.978)",400:"oklch(76.5% 0.177 163.223)",500:"oklch(69.6% 0.17 162.48)",600:"oklch(59.6% 0.145 163.225)",700:"oklch(50.8% 0.118 165.612)",800:"oklch(43.2% 0.095 166.913)",900:"oklch(37.8% 0.077 168.94)",950:"oklch(26.2% 0.051 172.552)"},teal:{50:"oklch(98.4% 0.014 180.72)",100:"oklch(95.3% 0.051 180.801)",200:"oklch(91% 0.096 180.426)",300:"oklch(85.5% 0.138 181.071)",400:"oklch(77.7% 0.152 181.912)",500:"oklch(70.4% 0.14 182.503)",600:"oklch(60% 0.118 184.704)",700:"oklch(51.1% 0.096 186.391)",800:"oklch(43.7% 0.078 188.216)",900:"oklch(38.6% 0.063 188.416)",950:"oklch(27.7% 0.046 192.524)"},cyan:{50:"oklch(98.4% 0.019 200.873)",100:"oklch(95.6% 0.045 203.388)",200:"oklch(91.7% 0.08 205.041)",300:"oklch(86.5% 0.127 207.078)",400:"oklch(78.9% 0.154 211.53)",500:"oklch(71.5% 0.143 215.221)",600:"oklch(60.9% 0.126 221.723)",700:"oklch(52% 0.105 223.128)",800:"oklch(45% 0.085 224.283)",900:"oklch(39.8% 0.07 227.392)",950:"oklch(30.2% 0.056 229.695)"},sky:{50:"oklch(97.7% 0.013 236.62)",100:"oklch(95.1% 0.026 236.824)",200:"oklch(90.1% 0.058 230.902)",300:"oklch(82.8% 0.111 230.318)",400:"oklch(74.6% 0.16 232.661)",500:"oklch(68.5% 0.169 237.323)",600:"oklch(58.8% 0.158 241.966)",700:"oklch(50% 0.134 242.749)",800:"oklch(44.3% 0.11 240.79)",900:"oklch(39.1% 0.09 240.876)",950:"oklch(29.3% 0.066 243.157)"},blue:{50:"oklch(97% 0.014 254.604)",100:"oklch(93.2% 0.032 255.585)",200:"oklch(88.2% 0.059 254.128)",300:"oklch(80.9% 0.105 251.813)",400:"oklch(70.7% 0.165 254.624)",500:"oklch(62.3% 0.214 259.815)",600:"oklch(54.6% 0.245 262.881)",700:"oklch(48.8% 0.243 264.376)",800:"oklch(42.4% 0.199 265.638)",900:"oklch(37.9% 0.146 265.522)",950:"oklch(28.2% 0.091 267.935)"},indigo:{50:"oklch(96.2% 0.018 272.314)",100:"oklch(93% 0.034 272.788)",200:"oklch(87% 0.065 274.039)",300:"oklch(78.5% 0.115 274.713)",400:"oklch(67.3% 0.182 276.935)",500:"oklch(58.5% 0.233 277.117)",600:"oklch(51.1% 0.262 276.966)",700:"oklch(45.7% 0.24 277.023)",800:"oklch(39.8% 0.195 277.366)",900:"oklch(35.9% 0.144 278.697)",950:"oklch(25.7% 0.09 281.288)"},violet:{50:"oklch(96.9% 0.016 293.756)",100:"oklch(94.3% 0.029 294.588)",200:"oklch(89.4% 0.057 293.283)",300:"oklch(81.1% 0.111 293.571)",400:"oklch(70.2% 0.183 293.541)",500:"oklch(60.6% 0.25 292.717)",600:"oklch(54.1% 0.281 293.009)",700:"oklch(49.1% 0.27 292.581)",800:"oklch(43.2% 0.232 292.759)",900:"oklch(38% 0.189 293.745)",950:"oklch(28.3% 0.141 291.089)"},purple:{50:"oklch(97.7% 0.014 308.299)",100:"oklch(94.6% 0.033 307.174)",200:"oklch(90.2% 0.063 306.703)",300:"oklch(82.7% 0.119 306.383)",400:"oklch(71.4% 0.203 305.504)",500:"oklch(62.7% 0.265 303.9)",600:"oklch(55.8% 0.288 302.321)",700:"oklch(49.6% 0.265 301.924)",800:"oklch(43.8% 0.218 303.724)",900:"oklch(38.1% 0.176 304.987)",950:"oklch(29.1% 0.149 302.717)"},fuchsia:{50:"oklch(97.7% 0.017 320.058)",100:"oklch(95.2% 0.037 318.852)",200:"oklch(90.3% 0.076 319.62)",300:"oklch(83.3% 0.145 321.434)",400:"oklch(74% 0.238 322.16)",500:"oklch(66.7% 0.295 322.15)",600:"oklch(59.1% 0.293 322.896)",700:"oklch(51.8% 0.253 323.949)",800:"oklch(45.2% 0.211 324.591)",900:"oklch(40.1% 0.17 325.612)",950:"oklch(29.3% 0.136 325.661)"},pink:{50:"oklch(97.1% 0.014 343.198)",100:"oklch(94.8% 0.028 342.258)",200:"oklch(89.9% 0.061 343.231)",300:"oklch(82.3% 0.12 346.018)",400:"oklch(71.8% 0.202 349.761)",500:"oklch(65.6% 0.241 354.308)",600:"oklch(59.2% 0.249 0.584)",700:"oklch(52.5% 0.223 3.958)",800:"oklch(45.9% 0.187 3.815)",900:"oklch(40.8% 0.153 2.432)",950:"oklch(28.4% 0.109 3.907)"},rose:{50:"oklch(96.9% 0.015 12.422)",100:"oklch(94.1% 0.03 12.58)",200:"oklch(89.2% 0.058 10.001)",300:"oklch(81% 0.117 11.638)",400:"oklch(71.2% 0.194 13.428)",500:"oklch(64.5% 0.246 16.439)",600:"oklch(58.6% 0.253 17.585)",700:"oklch(51.4% 0.222 16.935)",800:"oklch(45.5% 0.188 13.697)",900:"oklch(41% 0.159 10.272)",950:"oklch(27.1% 0.105 12.094)"}};var{IconAdjustmentsHorizontal:os,IconApiBook:ns,IconArrowsHorizontal:rs,IconArrowsLeftRight:is,IconArrowAutofitDown:as,IconArrowAutofitHeight:ls,IconArrowAutofitLeft:ss,IconArrowAutofitRight:cs,IconArrowAutofitWidth:ds,IconArrowBigLeft:hs,IconArrowBigRight:ps,IconArrowsMove:us,IconArrowsMoveVertical:ms,IconArrowsVertical:gs,IconBook:vs,IconBookOff:fs,IconBookArrowLeft:bs,IconBookArrowRight:ws,IconBooksReturn:ks,IconBookUpload:ys,IconBookmark:Es,IconBookmarkOff:As,IconBookmarks:xs,IconBoxAlignTop:Is,IconCategory:Ms,IconCheck:_s,IconChevronLeft:Ss,IconChevronRight:Cs,IconAlertCircle:Os,IconCircleCheck:Ts,IconCircleX:Ls,IconHelp:Ds,IconInfoCircle:$s,IconComic1:Ns,IconComic1Flat:Rs,IconComic2:zs,IconComic2Flat:Ps,IconComic3:Bs,IconComic3Flat:Gs,IconDeviceDesktop:Hs,IconDeviceFloppy:Vs,IconDeviceMobile:Fs,IconDeviceTablet:Ws,IconDotsVertical:Us,IconEReader1:Zs,IconEReader1Flat:js,IconEReader2:qs,IconEReader2Flat:Qs,IconExternalLink:Ys,IconEye:Xs,IconEyeOff:Ks,IconFileDownload:Js,IconFilePercent:ec,IconFolderOpen:tc,IconHandClick:oc,IconKeyboard:nc,IconLayoutDashboard:rc,IconLayoutBottombar:ic,IconLayoutBottombarInactive:ac,IconLayoutSidebar:lc,IconLayoutSidebarInactive:sc,IconLayoutSidebarRight:cc,IconLayoutSidebarRightInactive:dc,IconListNumbers:hc,IconLoader2:pc,IconLocationCog:uc,IconMenu2:mc,IconMenuDeep:gc,IconMessage:vc,IconMoon:fc,IconPage:bc,IconPageFlat:wc,IconPalette:kc,IconPencil:yc,IconPencilCog:Ec,IconPhoto:Ac,IconPhotoOff:xc,IconPin:Ic,IconPlayerPause:Mc,IconPlayerPlay:_c,IconRefresh:Sc,IconSettings:Cc,IconSettingsOff:Oc,IconSpacingHorizontal:Tc,IconSpacingVertical:Lc,IconSun:Dc,IconTrash:$c,IconWorldCog:Nc,IconX:Rc,IconZoom:zc,IconZoomCancel:Pc,IconZoomIn:Bc,IconZoomInArea:Gc,IconZoomOut:Hc,IconZoomOutArea:Vc,IconZoomPan:Fc}=_.fromPairs(_.entries(vo).map(([e,t])=>[e,mo(t)]));if(Wo=class extends no{constructor(...e){super(...e),this.color="#000000",this.size=26,this.radius="50%",this.contrastColor="#FFFFFF",this.checked=!1}static{this.styles=Kt`
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
  `}willUpdate(e){e.has("color")&&(this.contrastColor=F(this.color)),e.has("selected")&&(this.checked=this.color.toLowerCase()===this.selected?.toLowerCase())}handleClick(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.color},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.color},bubbles:!0,composed:!0}))}render(){const e={width:`${this.size}px`,height:`${this.size}px`},t={"--radius":"number"==typeof this.radius?`${this.radius}px`:this.radius,"--color":this.color,"--contrast-color":this.contrastColor};return Ri`
      <div style=${Ho(e)}>
        <div
          class="swatch"
          style=${Ho(t)}
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${_s} </span>
        </div>
      </div>
    `}},A([w({type:String})],Wo.prototype,"color",void 0),A([w({type:String})],Wo.prototype,"selected",void 0),A([w({type:Number})],Wo.prototype,"size",void 0),A([w({type:String})],Wo.prototype,"radius",void 0),A([w({state:!0})],Wo.prototype,"contrastColor",void 0),A([w({type:Boolean,reflect:!0})],Wo.prototype,"checked",void 0),Wo=A([io("color-swatch")],Wo),Uo=class extends no{constructor(...e){super(...e),this.baseColor="#228be6",this.mode="steps",this.orientation="horizontal",this.value="",this.gradient=[]}static{this.styles=Kt`
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
  `}willUpdate(e){(e.has("baseColor")||e.has("mode"))&&(this.gradient=W(this.baseColor,this.mode)??[])}handleSwatchClick(e){this.value=e,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return Ri`
      ${this.gradient.map(e=>Ri`
          <div
            class="swatch"
            ?checked=${this.selected&&e.toLowerCase()===this.selected.toLowerCase()}
            title=${e}
            @click=${()=>this.handleSwatchClick(e)}
          >
            <div
              class="swatch-inner"
              style="--color: ${e}; --text-color: ${F(e)}"
            >
              <span class="checkmark">${_s}</span>
            </div>
          </div>
        `)}
    `}},A([w({type:String})],Uo.prototype,"baseColor",void 0),A([w({type:String})],Uo.prototype,"mode",void 0),A([w({type:String,reflect:!0})],Uo.prototype,"orientation",void 0),A([w({type:String})],Uo.prototype,"selected",void 0),A([w({type:String,reflect:!0})],Uo.prototype,"value",void 0),A([k()],Uo.prototype,"gradient",void 0),Uo=A([io("color-palette")],Uo),Zo=class extends no{constructor(...e){super(...e),this.value=""}static{this.styles=Kt`
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
  `}handleColorClick(e){this.value=e.currentTarget.title,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const e=_.keys(Fo).filter(e=>!["dark","gray","zinc","neutral","stone"].includes(e)),t=[200,300,400,500,600,700,800,900,950];return e.map(e=>Ri` <div class="SwatchGroup">
        <span class="ColorName">${e}</span>
        <div class="Swatches">${t.map(t=>{const o=Fo[e][t],n=F(o);return Ri`
          <span
            title="${o}"
            class="${co({ThemeRadio:!0,selected:this.selected?.toLowerCase()===o.toLowerCase()})}"
            style="background-color: ${o}; color: ${n}"
            @click=${this.handleColorClick}
          >
            ${_s}
          </span>
        `})}</div>
      </div>`)}},A([w({type:String,reflect:!0})],Zo.prototype,"value",void 0),A([w({type:String})],Zo.prototype,"selected",void 0),Zo=A([io("color-panel")],Zo),jo=class extends no{constructor(...e){super(...e),this.value="#228be6",this.defaultValue="#228be6",this.label="",this.hint="",this.name="",this.disabled=!1,this.size="medium",this.swatches=null,this.mode="popup",this.opened=!1,this.popupDirection="left",this.sourceSpace="srgb",this.hsv={h:0,s:0,v:0},this.saturationThumbPosition={x:0,y:0},this.hueThumbPosition=0,this.isDraggingSaturation=!1,this.isDraggingHue=!1}static{this.styles=Kt`
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
  `}connectedCallback(){super.connectedCallback(),this.updateStateFromValue(this.value),window.addEventListener("mousemove",this.handleDrag.bind(this)),window.addEventListener("mouseup",this.handleDragEnd.bind(this)),window.addEventListener("touchmove",this.handleDrag.bind(this),{passive:!1}),window.addEventListener("touchend",this.handleDragEnd.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this.handleDrag.bind(this)),window.removeEventListener("mouseup",this.handleDragEnd.bind(this)),window.removeEventListener("touchmove",this.handleDrag.bind(this)),window.removeEventListener("touchend",this.handleDragEnd.bind(this)),window.removeEventListener("click",this.handleClickOutside.bind(this))}updated(e){e.has("mode")&&("popup"===this.mode?window.addEventListener("click",this.handleClickOutside.bind(this)):window.removeEventListener("click",this.handleClickOutside.bind(this)))}willUpdate(e){e.has("value")&&this.updateStateFromValue(this.value),e.has("mode")&&"inline"===this.mode&&(this.opened=!1)}handleClickOutside(e){this.opened&&!e.composedPath().includes(this)&&this.hide()}show(){this.disabled||this.opened||(this.opened=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.opened&&(this.opened=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}togglePopup(){if("popup"===this.mode)if(this.opened)this.hide();else{const e=this.getBoundingClientRect(),t=250;let o;const n=this.closest("mov-drawer");if(n?.shadowRoot){const e=n.shadowRoot.querySelector("dialog");o=e?e.getBoundingClientRect():{left:0,right:window.innerWidth}}else o={left:0,right:window.innerWidth};e.left+t>o.right&&e.right-t>o.left?this.popupDirection="right":this.popupDirection="left",this.show()}}isSameColor(e,t){return!(!e||!t)&&Color.deltaE(e,t,{method:"2000"})<1}renderCheckIcon(e){return Ri`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${Ho({stroke:F(e)})}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `}renderPickerBody(){const e={backgroundColor:`hsl(${this.hsv.h}, 100%, 50%)`},t={h:this.hsv.h,s:100*this.hsv.s,v:100*this.hsv.v},o={top:`${this.saturationThumbPosition.y}%`,left:`${this.saturationThumbPosition.x}%`,backgroundColor:new Color("hsv",[t.h,t.s,t.v]).toString({format:"hex"})},n={left:`${this.hueThumbPosition}%`};return Ri`
      <div
        class="saturation-panel"
        style=${Ho(e)}
        @mousedown=${this.handleSaturationDragStart.bind(this)}
        @touchstart=${this.handleSaturationDragStart.bind(this)}
      >
        <div class="saturation-overlay-1"></div>
        <div class="saturation-overlay-2"></div>
        <div
          class="saturation-thumb"
          style=${Ho(o)}
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
            style=${Ho(n)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${(this.swatches||_.entries(Fo).filter(([e])=>!["dark","gray","zinc","neutral","stone"].includes(e)).map(([,e])=>e[600])).map(e=>Ri`
            <button
              class="swatch"
              title=${e}
              style=${Ho({backgroundColor:e})}
              @click=${()=>this.selectSwatch(e)}
            >
              ${this.isSameColor(this.value,e)?this.renderCheckIcon(e):""}
            </button>
          `)}
      </div>
    `}render(){const e={"picker-container":!0,popup:"popup"===this.mode,right:"right"===this.popupDirection},t=this.renderPickerBody();return"popup"===this.mode?Ri`
        <div
          class="popup-trigger"
          @click=${this.togglePopup}
        >
          <div
            class="preview"
            style=${Ho({backgroundColor:this.value})}
          ></div>
        </div>
        ${this.opened?Ri`<div class=${co(e)}>${t}</div>`:""}
      `:Ri`<div class=${co(e)}>${t}</div>`}parseColor(e){try{return Color.get(e)}catch(t){return console.error(`[mov-color-picker] Invalid color value: "${e}"`,t),null}}colorToHsv(e){let[t,o,n]=e.to("srgb").to("hsv").coords.map(e=>e??0);return Number.isNaN(t)&&(t=this.hsv.h||0,o=0),o=Math.max(0,Math.min(100,o))/100,n=Math.max(0,Math.min(100,n))/100,{h:t,s:o,v:n}}updateStateFromValue(e){const t=this.parseColor(e);if(!t)return;this.sourceSpace=t.space.id;const o=this.colorToHsv(t);o.h===this.hsv.h&&o.s===this.hsv.s&&o.v===this.hsv.v||(this.hsv=o,this.updateThumbPositions())}dispatchInput(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}))}dispatchChange(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}updateValueFromHsv(){const e={h:this.hsv.h,s:100*this.hsv.s,v:100*this.hsv.v},t=new Color("hsv",[e.h,e.s,e.v]);let o;try{o=!this.sourceSpace||["srgb","hsl","hsv"].includes(this.sourceSpace)?t.to("srgb").toString({format:"hex"}):t.to(this.sourceSpace).toString({precision:5})}catch(e){console.error(`[mov-color-picker] Could not convert color to space ${this.sourceSpace}`,e),o=t.to("srgb").toString({format:"hex"})}this.value!==o&&(this.value=o,this.dispatchInput())}updateThumbPositions(){this.saturationThumbPosition={x:100*this.hsv.s,y:100*(1-this.hsv.v)},this.hueThumbPosition=this.hsv.h/360*100}handleSaturationDragStart(e){e.preventDefault(),this.isDraggingSaturation=!0,this.saturationPanel=this.shadowRoot?.querySelector(".saturation-panel"),this.updateSaturation(e)}handleHueDragStart(e){e.preventDefault(),this.isDraggingHue=!0,this.hueSlider=this.shadowRoot?.querySelector(".hue-slider"),this.updateHue(e)}handleDrag(e){this.isDraggingSaturation&&this.updateSaturation(e),this.isDraggingHue&&this.updateHue(e)}handleDragEnd(){(this.isDraggingSaturation||this.isDraggingHue)&&this.dispatchChange(),this.isDraggingSaturation=!1,this.isDraggingHue=!1}getEventPosition(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}updateSaturation(e){if(!this.saturationPanel)return;const{clientX:t,clientY:o}=this.getEventPosition(e),n=this.saturationPanel.getBoundingClientRect(),r=Math.max(0,Math.min(t-n.left,n.width)),i=Math.max(0,Math.min(o-n.top,n.height));this.hsv.s=r/n.width,this.hsv.v=1-i/n.height,this.updateValueFromHsv(),this.updateThumbPositions()}updateHue(e){if(!this.hueSlider)return;const{clientX:t}=this.getEventPosition(e),o=this.hueSlider.getBoundingClientRect(),n=Math.max(0,Math.min(t-o.left,o.width));this.hsv.h=n/o.width*360,this.updateValueFromHsv(),this.updateThumbPositions()}selectSwatch(e){this.value=e,this.dispatchInput(),this.dispatchChange()}},A([w({type:String})],jo.prototype,"value",void 0),A([w({type:String,attribute:"default-value"})],jo.prototype,"defaultValue",void 0),A([w({type:String})],jo.prototype,"label",void 0),A([w({type:String})],jo.prototype,"hint",void 0),A([w({type:String})],jo.prototype,"name",void 0),A([w({type:Boolean,reflect:!0})],jo.prototype,"disabled",void 0),A([w({type:String,reflect:!0})],jo.prototype,"size",void 0),A([w({type:Array})],jo.prototype,"swatches",void 0),A([w({type:String})],jo.prototype,"mode",void 0),A([k()],jo.prototype,"opened",void 0),A([k()],jo.prototype,"popupDirection",void 0),A([k()],jo.prototype,"sourceSpace",void 0),A([k()],jo.prototype,"hsv",void 0),A([k()],jo.prototype,"saturationThumbPosition",void 0),A([k()],jo.prototype,"hueThumbPosition",void 0),jo=A([io("mov-color-picker")],jo),qo=(e,t,o)=>{for(const o of t)if(o[0]===e)return(0,o[1])();return o?.()},Qo=class extends no{constructor(...e){super(...e),this.value="",this.labelPosition="side",this.size="medium",this._options=[],this.resizeObserver=new ResizeObserver(()=>this.updateThumbPosition())}static{this.styles=Kt`
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
      font-size: 16px; /* Default font-size (medium) */
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
      font-size: 14px;
    }
    .button.large {
      padding: 0.75rem 1rem;
      font-size: 18px;
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
  `}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}handleClick(e,t){this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}handleSlotChange(){this._options=this._slotEl.assignedNodes({flatten:!0}).filter(e=>"SEGMENTED-CONTROL-OPTION"===e.nodeName).map(e=>({value:e.getAttribute("value")??"",label:e.getAttribute("label")??"",icon:e.getAttribute("icon")??void 0}))}firstUpdated(){this.handleSlotChange(),this.updateComplete.then(()=>this.updateThumbPosition())}updated(e){super.updated(e),(e.has("value")||e.has("_options")||e.has("labelPosition")||e.has("size"))&&Promise.resolve().then(()=>this.updateThumbPosition())}updateThumbPosition(){if(!this.thumb)return;const e=this.shadowRoot?.querySelector(".button.selected");if(e){const{offsetWidth:t,offsetHeight:o}=e,n=e.getBoundingClientRect(),r=this.shadowRoot?.querySelector(".segmented-control")?.getBoundingClientRect(),i=n.left-(r?.left??0),a=n.top-(r?.top??0);this.thumb.style.transform=`translate(${i}px, ${a}px)`,this.thumb.style.width=`${t}px`,this.thumb.style.height=`${o}px`}else this.thumb.style.width="0px",this.thumb.style.height="0px"}render(){return Ri`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(e=>Ri`
            <div
              class="option"
              title="${"tooltip"===this.labelPosition?e.label:Pi}"
            >
              <button
                class="${co({button:!0,selected:this.value===e.value,bottom:"bottom"===this.labelPosition,small:"small"===this.size,medium:"medium"===this.size,large:"large"===this.size})}"
                @click=${t=>this.handleClick(t,e.value)}
                role="radio"
                aria-checked="${this.value===e.value}"
              >
                ${e.icon?Ri`<mov-icon
                      name="${e.icon}"
                      .size=${qo(this.size,[["small",()=>"16px"],["medium",()=>"24px"],["large",()=>"36px"]],()=>this.size)}
                    ></mov-icon>`:Pi}
                ${"tooltip"!==this.labelPosition?Ri`<span>${e.label}</span>`:Pi}
              </button>
            </div>
          `)}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}},A([w({type:String,reflect:!0})],Qo.prototype,"value",void 0),A([w({type:String})],Qo.prototype,"labelPosition",void 0),A([w({type:String})],Qo.prototype,"size",void 0),A([k()],Qo.prototype,"_options",void 0),A([y(".thumb")],Qo.prototype,"thumb",void 0),A([y("slot")],Qo.prototype,"_slotEl",void 0),Qo=A([io("segmented-control")],Qo),Yo=class extends no{constructor(...e){super(...e),this.value="",this.label=""}createRenderRoot(){return this}},A([w({type:String,reflect:!0})],Yo.prototype,"value",void 0),A([w({type:String,reflect:!0})],Yo.prototype,"label",void 0),A([w({type:String,reflect:!0})],Yo.prototype,"icon",void 0),Yo=A([io("segmented-control-option")],Yo),Xo=class extends no{constructor(...e){super(...e),this.name="",this.value="on",this.checked=!1,this.defaultChecked=!1,this.disabled=!1,this.required=!1,this.size="medium",this.hint="",this.design="graphical",this.textOn="ON",this.textOff="OFF"}static{this.styles=Kt`
    :host {
      --switch-width: 3rem;
      --switch-height: 1.5rem;
      --knob-size: 1.25rem;
      display: inline-block;
    }

    :host([size='small']) {
      --switch-width: 2.5rem;
      --switch-height: 1.25rem;
      --knob-size: 16px;
    }

    :host([size='large']) {
      --switch-width: 4rem;
      --switch-height: 2rem;
      --knob-size: 1.75rem;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
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
      top: 1px;
      left: 1px;
      width: var(--knob-size);
      height: var(--knob-size);
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
      transition: left 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: bold;
      font-family: Arial;
      color: #333;
    }

    input:checked + .switch .knob {
      left: calc(100% - var(--knob-size) - 1px);
    }

    .switch:focus {
      outline: 2px solid #0a6ed1;
      outline-offset: 2px;
    }

    .icon {
      width: 16px;
      height: 16px;
      fill: none;
    }

    .text {
      font-size: 12px;
      font-weight: bold;
      color: #333;
    }

    .hint {
      font-size: 13px;
      opacity: 0.7;
      margin-top: 0.25rem;
    }
  `}handleChange(e){this.disabled||(this.checked=e.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("input",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){const e=this.design.toLowerCase();let t;return t="graphical"===e?Ri`${this.checked?_s:Rc}`:Ri`<span class="text">${this.checked?this.textOn:this.textOff}</span>`,Ri`
      <div class="base">
        <label class="label">
          <slot></slot>
          <input
            type="checkbox"
            .name="${this.name}"
            .value="${this.value}"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @change=${this.handleChange}
          />
          <div
            class="${co({switch:!0,[e]:!0})}"
          >
            <div class="knob">${t}</div>
          </div>
        </label>
        <div class="hint">
          <slot name="hint">${this.hint}</slot>
        </div>
      </div>
    `}},A([w({type:String})],Xo.prototype,"name",void 0),A([w({type:String})],Xo.prototype,"value",void 0),A([w({type:Boolean,reflect:!0})],Xo.prototype,"checked",void 0),A([w({type:Boolean,reflect:!0,attribute:"default-checked"})],Xo.prototype,"defaultChecked",void 0),A([w({type:Boolean,reflect:!0})],Xo.prototype,"disabled",void 0),A([w({type:Boolean,reflect:!0})],Xo.prototype,"required",void 0),A([w({type:String,reflect:!0})],Xo.prototype,"size",void 0),A([w({type:String})],Xo.prototype,"hint",void 0),A([w({type:String,reflect:!0})],Xo.prototype,"design",void 0),A([w({type:String})],Xo.prototype,"textOn",void 0),A([w({type:String})],Xo.prototype,"textOff",void 0),Xo=A([io("mov-switch")],Xo),Ko=class extends no{static{this.styles=[Xt(':host {\r\n  display: block;\r\n  --mov-slider-track-height: 6px;\r\n  --mov-slider-thumb-size: 18px;\r\n  --mov-slider-tooltip-offset: 24px;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n  touch-action: none;\r\n  width: 100%;\r\n}\r\n\r\n:host([vertical]) {\r\n  display: inline-block;\r\n}\r\n\r\n/* Container */\r\n.mov-slider__container {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  min-height: 24px;\r\n}\r\n\r\n:host([vertical]) .mov-slider__container {\r\n  flex-direction: column;\r\n  min-height: auto;\r\n  min-width: 24px;\r\n}\r\n\r\n/* Track */\r\n.mov-slider__track {\r\n  position: relative;\r\n  flex: 1;\r\n  height: var(--mov-slider-track-height);\r\n  background: var(--theme-border-color, #ccc);\r\n  border-radius: 9999px;\r\n  cursor: pointer;\r\n}\r\n\r\n:host([vertical]) .mov-slider__track {\r\n  width: var(--mov-slider-track-height);\r\n  height: 100%;\r\n  min-height: 8rem;\r\n}\r\n\r\n/* Progress */\r\n.mov-slider__progress {\r\n  position: absolute;\r\n  height: 100%;\r\n  background: var(--mov-color-fill-loud);\r\n  border-radius: 9999px;\r\n  pointer-events: none;\r\n  transition: background-color 150ms;\r\n}\r\n\r\n.mov-slider__progress--min-gap {\r\n  background: #f59e0b; /* warning color */\r\n  animation: pulse-gap 2s ease-in-out infinite;\r\n}\r\n\r\n@keyframes pulse-gap {\r\n  0%,\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n  50% {\r\n    opacity: 0.7;\r\n  }\r\n}\r\n\r\n:host([vertical]) .mov-slider__progress {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n/* Thumb */\r\n.mov-slider__thumb {\r\n  position: absolute;\r\n  width: var(--mov-slider-thumb-size);\r\n  height: var(--mov-slider-thumb-size);\r\n  background: white;\r\n  border: 3px solid var(--mov-color-fill-loud);\r\n  border-radius: 9999px;\r\n  cursor: grab;\r\n  transform: translate(-50%, -50%);\r\n  top: 50%;\r\n  transition:\r\n    transform 150ms,\r\n    border-color 150ms,\r\n    box-shadow 150ms;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  touch-action: none;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.mov-slider__thumb:active {\r\n  cursor: grabbing;\r\n  transform: translate(-50%, -50%) scale(1.1);\r\n}\r\n\r\n:host([vertical]) .mov-slider__thumb {\r\n  transform: translate(-50%, 50%);\r\n  inset-inline-start: 50%;\r\n  top: auto;\r\n}\r\n\r\n:host([vertical]) .mov-slider__thumb:active {\r\n  transform: translate(-50%, 50%) scale(1.1);\r\n}\r\n\r\n.mov-slider__thumb:hover {\r\n  border-color: var(--mov-color-fill-loud);\r\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n/* Visual focus state */\r\n.mov-slider__thumb--focused {\r\n  outline: 3px solid var(--mov-color-fill-loud);\r\n  outline-offset: 2px;\r\n}\r\n\r\n/* Active drag state */\r\n.mov-slider__thumb--active {\r\n  transform: translate(-50%, -50%) scale(1.1);\r\n  z-index: 1;\r\n}\r\n\r\n:host([vertical]) .mov-slider__thumb--active {\r\n  transform: translate(-50%, 50%) scale(1.1);\r\n}\r\n\r\n/* Readonly state */\r\n:host([readonly]) .mov-slider__thumb {\r\n  cursor: default;\r\n  border-color: var(--theme-border-color);\r\n}\r\n\r\n:host([readonly]) .mov-slider__thumb:active {\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n/* Input (hidden but accessible) */\r\n.mov-slider__input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n/* Tooltip */\r\n.mov-slider__tooltip {\r\n  position: absolute;\r\n  bottom: var(--mov-slider-tooltip-offset);\r\n  inset-inline-start: 50%;\r\n  transform: translateX(-50%);\r\n  background: var(--theme-hightlight-color, #333);\r\n  color: white;\r\n  padding: 2px 8px;\r\n  border-radius: 4px;\r\n  font-size: 14px;\r\n  white-space: nowrap;\r\n  pointer-events: none;\r\n  opacity: 0;\r\n  transition: opacity 150ms;\r\n  z-index: 2;\r\n}\r\n\r\n.mov-slider__thumb:hover .mov-slider__tooltip,\r\n.mov-slider__thumb--focused .mov-slider__tooltip,\r\n.mov-slider__thumb--active .mov-slider__tooltip {\r\n  opacity: 1;\r\n}\r\n\r\n:host([vertical]) .mov-slider__tooltip {\r\n  bottom: auto;\r\n  inset-inline-start: var(--mov-slider-tooltip-offset);\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n/* Ticks */\r\n.mov-slider__ticks {\r\n  position: absolute;\r\n  top: 50%;\r\n  inset-inline: 0;\r\n  height: 8px;\r\n  pointer-events: none;\r\n}\r\n\r\n:host([vertical]) .mov-slider__ticks {\r\n  top: 0;\r\n  bottom: 0;\r\n  inset-inline-start: 50%;\r\n  width: 8px;\r\n  height: auto;\r\n}\r\n\r\n.mov-slider__tick {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 8px;\r\n  background: var(--theme-border-color);\r\n  transform: translateX(-50%);\r\n}\r\n\r\n:host([vertical]) .mov-slider__tick {\r\n  width: 8px;\r\n  height: 1px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.mov-slider__tick-label {\r\n  position: absolute;\r\n  top: 12px;\r\n  font-size: 12px;\r\n  color: var(--theme-text-color);\r\n  opacity: 0.7;\r\n  transform: translateX(-50%);\r\n  white-space: nowrap;\r\n}\r\n\r\n:host([vertical]) .mov-slider__tick-label {\r\n  top: auto;\r\n  inset-inline-start: 12px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n/* Sizes */\r\n:host([size="small"]) {\r\n  --mov-slider-track-height: 4px;\r\n  --mov-slider-thumb-size: 14px;\r\n}\r\n\r\n:host([size="large"]) {\r\n  --mov-slider-track-height: 10px;\r\n  --mov-slider-thumb-size: 22px;\r\n}\r\n\r\n/* States */\r\n:host([disabled]) {\r\n  opacity: 0.6;\r\n  pointer-events: none;\r\n}\r\n\r\n:host([disabled]) .mov-slider__thumb {\r\n  cursor: not-allowed;\r\n  border-color: var(--theme-border-color);\r\n  background: #f3f4f6;\r\n}\r\n\r\n:host([invalid]) .mov-slider__progress {\r\n  background: #ef4444; /* danger color */\r\n}\r\n\r\n/* Help & Error Text */\r\n.mov-form-control__label {\r\n  display: block;\r\n  margin-bottom: 0.5rem;\r\n  color: var(--theme-text-color);\r\n}\r\n\r\n.mov-form-control__helper,\r\n.mov-form-control__error {\r\n  margin-top: 0.5rem;\r\n  font-size: 14px;\r\n}\r\n\r\n.mov-form-control__helper {\r\n  color: var(--theme-text-color);\r\n  opacity: 0.8;\r\n}\r\n\r\n.mov-form-control__error {\r\n  color: #ef4444;\r\n}\r\n\r\n.mov-slider__live-region {\r\n  position: absolute;\r\n  overflow: hidden;\r\n  clip: rect(0 0 0 0);\r\n  height: 1px;\r\n  width: 1px;\r\n  margin: -1px;\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n:host([show-ticks]) {\r\n  padding-bottom: 15px;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n}\r\n\r\n/* Filled variant */\r\n:host([filled]) .mov-slider__thumb {\r\n  background: var(--mov-color-fill-loud);\r\n  border-color: var(--mov-color-fill-loud);\r\n}\r\n')]}constructor(){super(),this.label="",this.helpText="",this.errorMessage="",this.min=0,this.max=100,this.step=1,this.value=0,this.dual=!1,this.vertical=!1,this.filled=!1,this.size="medium",this.disabled=!1,this.readonly=!1,this.invalid=!1,this.showTooltip=!1,this.showTicks=!1,this.tickStep=0,this.tickCount=0,this.focusedThumb=null,this.draggingThumb=null,this.activeDrag=null,this._handlePointerMove=this._handlePointerMove.bind(this),this._handlePointerUp=this._handlePointerUp.bind(this)}get values(){return Array.isArray(this.value)?this.value:[this.min,this.value]}getPercentage(e){return(e-this.min)/(this.max-this.min)*100}getValueFromPercentage(e){const t=this.min+e/100*(this.max-this.min);return this.step?Math.round(t/this.step)*this.step:t}getValueFromPointer(e,t,o){let n;return n=this.vertical?(o.bottom-t)/o.height*100:(e-o.left)/o.width*100,n=Math.max(0,Math.min(100,n)),this.getValueFromPercentage(n)}clampValue(e){let t=Math.max(this.min,Math.min(this.max,e));return this.step&&(t=Math.round(t/this.step)*this.step),Number(t.toFixed(10))}handleThumbPointerDown(e,t){this.disabled||this.readonly||!this.track||(e.preventDefault(),e.stopPropagation(),e.currentTarget.setPointerCapture(e.pointerId),this.activeDrag={thumb:t,trackRect:this.track.getBoundingClientRect()},this.draggingThumb=t,document.addEventListener("pointermove",this._handlePointerMove),document.addEventListener("pointerup",this._handlePointerUp),document.addEventListener("pointercancel",this._handlePointerUp))}_handlePointerMove(e){if(!this.activeDrag||this.disabled||this.readonly)return;const{thumb:t,trackRect:o}=this.activeDrag,n=this.getValueFromPointer(e.clientX,e.clientY,o);if(this.dual){const e=this.values;if("min"===t){const t=Math.min(n,e[1]-(this.step||1));this.updateValue([t,e[1]],"input")}else{const t=Math.max(n,e[0]+(this.step||1));this.updateValue([e[0],t],"input")}}else this.updateValue(n,"input")}_handlePointerUp(e){this.activeDrag&&((this.shadowRoot?.querySelector(".mov-slider__thumb--active"))?.releasePointerCapture(e.pointerId),this.updateValue(this.value,"change"),this.activeDrag=null,this.draggingThumb=null,document.removeEventListener("pointermove",this._handlePointerMove),document.removeEventListener("pointerup",this._handlePointerUp),document.removeEventListener("pointercancel",this._handlePointerUp))}updateValue(e,t="change"){this.readonly||this.disabled||(this.dual&&Array.isArray(e)?(e=[this.clampValue(e[0]),this.clampValue(e[1])])[0]>e[1]&&(e=[e[1],e[0]]):this.dual||"number"!=typeof e||(e=this.clampValue(e)),this.value=e,this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:{value:e}})))}handleTrackClick(e){if(this.disabled||this.readonly||!this.track)return;const t=this.track.getBoundingClientRect(),o=this.getValueFromPointer(e.clientX,e.clientY,t);if(this.dual){const e=this.values;Math.abs(o-e[0])<Math.abs(o-e[1])?this.updateValue([o,e[1]]):this.updateValue([e[0],o])}else this.updateValue(o)}renderTicks(){if(!this.showTicks)return null;const e=new Set;e.add(this.min),e.add(this.max);let t=this.tickStep;if(this.tickCount>1&&(t=Math.round((this.max-this.min)/(this.tickCount-1))),t>0){const o=Math.floor((this.max-this.min)/t);if(o<=100)for(let n=1;n<=o;n++){const o=this.min+n*t;o<this.max&&e.add(Number(o.toFixed(10)))}}return Ri`<div class="mov-slider__ticks">${Array.from(e).sort((e,t)=>e-t).map(e=>{const t=this.getPercentage(e);return Ri`
        <div class="mov-slider__tick" style="${this.vertical?`bottom: ${t}%`:`inset-inline-start: ${t}%`}">
          <div class="mov-slider__tick-label">${e}</div>
        </div>
      `})}</div>`}renderThumb(e,t){const o=this.getPercentage(e),n=this.focusedThumb===t,r=this.draggingThumb===t,i=this.vertical?`bottom: ${o}%`:`inset-inline-start: ${o}%`;return Ri`
      <div
        class="mov-slider__thumb ${n?"mov-slider__thumb--focused":""} ${r?"mov-slider__thumb--active":""}"
        style="${i}"
        @pointerdown=${e=>this.handleThumbPointerDown(e,t)}
      >
        ${this.showTooltip?Ri`<div class="mov-slider__tooltip">${e}</div>`:""}
      </div>
    `}renderProgress(){const e=this.values;if(this.dual){const t=this.getPercentage(e[0]),o=this.getPercentage(e[1]);return Ri`<div
        class="mov-slider__progress"
        style="${this.vertical?`bottom: ${t}%; height: ${o-t}%`:`left: ${t}%; width: ${o-t}%`}"
      ></div>`}const t=this.getPercentage(e[1]);return Ri`<div
      class="mov-slider__progress"
      style="${this.vertical?`bottom: 0; height: ${t}%`:`left: 0; width: ${t}%`}"
    ></div>`}render(){const e=this.values;return Ri`
      <div
        class="mov-slider"
        part="base"
      >
        ${this.label?Ri`<label class="mov-form-control__label">${this.label}</label>`:""}
        <div
          class="mov-slider__container"
          @click=${this.handleTrackClick}
        >
          <div class="mov-slider__track">
            ${this.renderProgress()} ${this.renderTicks()}
            ${this.dual?Ri`${this.renderThumb(e[0],"min")}${this.renderThumb(e[1],"max")}`:this.renderThumb(e[1],"single")}
          </div>
        </div>
        ${this.helpText&&!this.invalid?Ri`<div class="mov-form-control__helper">${this.helpText}</div>`:""}
        ${this.invalid&&this.errorMessage?Ri`<div class="mov-form-control__error">${this.errorMessage}</div>`:""}
      </div>
    `}},A([w({type:String})],Ko.prototype,"label",void 0),A([w({attribute:"help-text"})],Ko.prototype,"helpText",void 0),A([w({attribute:"error-message"})],Ko.prototype,"errorMessage",void 0),A([w({type:Number})],Ko.prototype,"min",void 0),A([w({type:Number})],Ko.prototype,"max",void 0),A([w({type:Number})],Ko.prototype,"step",void 0),A([w({type:Object})],Ko.prototype,"value",void 0),A([w({type:Boolean,reflect:!0})],Ko.prototype,"dual",void 0),A([w({type:Boolean,reflect:!0})],Ko.prototype,"vertical",void 0),A([w({type:Boolean,reflect:!0})],Ko.prototype,"filled",void 0),A([w({reflect:!0})],Ko.prototype,"size",void 0),A([w({type:Boolean,reflect:!0})],Ko.prototype,"disabled",void 0),A([w({type:Boolean,reflect:!0})],Ko.prototype,"readonly",void 0),A([w({type:Boolean,reflect:!0})],Ko.prototype,"invalid",void 0),A([w({type:Boolean,attribute:"show-tooltip"})],Ko.prototype,"showTooltip",void 0),A([w({type:Boolean,attribute:"show-ticks"})],Ko.prototype,"showTicks",void 0),A([w({type:Number,attribute:"tick-step"})],Ko.prototype,"tickStep",void 0),A([w({type:Number,attribute:"tick-count"})],Ko.prototype,"tickCount",void 0),A([k()],Ko.prototype,"focusedThumb",void 0),A([k()],Ko.prototype,"draggingThumb",void 0),A([y(".mov-slider__track")],Ko.prototype,"track",void 0),Ko=A([io("mov-slider")],Ko),Jo=Ur(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BLANK_URL=e.relativeFirstCharacters=e.whitespaceEscapeCharsRegex=e.urlSchemeRegex=e.ctrlCharactersRegex=e.htmlCtrlEntityRegex=e.htmlEntitiesRegex=e.invalidProtocolRegex=void 0,e.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,e.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,e.htmlCtrlEntityRegex=/&(newline|tab);/gi,e.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,e.urlSchemeRegex=/^.+(:|&colon;)/gim,e.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,e.relativeFirstCharacters=[".","/"],e.BLANK_URL="about:blank"}),en=Ur(e=>{function t(e){return e.replace(n.ctrlCharactersRegex,"").replace(n.htmlEntitiesRegex,function(e,t){return String.fromCharCode(t)})}function o(e){try{return decodeURIComponent(e)}catch(t){return e}}Object.defineProperty(e,"__esModule",{value:!0}),e.sanitizeUrl=function(e){var r,i,a,l,s,c,d,h;if(!e)return n.BLANK_URL;i=o(e.trim());do{r=(i=o(i=t(i).replace(n.htmlCtrlEntityRegex,"").replace(n.ctrlCharactersRegex,"").replace(n.whitespaceEscapeCharsRegex,"").trim())).match(n.ctrlCharactersRegex)||i.match(n.htmlEntitiesRegex)||i.match(n.htmlCtrlEntityRegex)||i.match(n.whitespaceEscapeCharsRegex)}while(r&&r.length>0);return(a=i)?function(e){return n.relativeFirstCharacters.indexOf(e[0])>-1}(a)?a:(s=(l=a.trimStart()).match(n.urlSchemeRegex))?(c=s[0].toLowerCase().trim(),n.invalidProtocolRegex.test(c)?n.BLANK_URL:(d=l.replace(/\\/g,"/"),"mailto:"===c||c.includes("://")?d:"http:"===c||"https:"===c?function(e){return URL.canParse(e)}(d)?((h=new URL(d)).protocol=h.protocol.toLowerCase(),h.hostname=h.hostname.toLowerCase(),h.toString()):n.BLANK_URL:d)):a:n.BLANK_URL};var n=Jo()})(),Ro.listen((e,t,o)=>{"scrollToPage"===o&&void 0!==e.scrollToPage&&(e.scrollToPage<=0?window.scrollTo(0,0):function(e){if(e)if(T("viewMode").startsWith("Fluid")){const t=N("chapter").value;if(t){const o=e.getBoundingClientRect(),n=t.getBoundingClientRect();t.scrollBy({left:o.left-n.left,top:o.top-n.top,behavior:"instant"})}}else{const t=e.getBoundingClientRect();window.scrollTo({top:t.top+window.scrollY,left:t.left+window.scrollX,behavior:"instant"})}}(N("images")?.[e.scrollToPage]?.ref?.value),setTimeout(()=>R("scrollToPage",void 0),10))}),tn=!1,on=_.debounce(()=>{K(),tn=!1},500),nn=class extends no{constructor(...e){super(...e),this.open=!1,this.mode="dialog",this.fullscreen=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=Kt`
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
      font-size: 24px;
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
  `}close(){this.open=!1}handleCancel(e){e.preventDefault(),this.close()}handleBackdropClick(){"inline"!==this.mode&&this.lightDismiss&&this.close()}handleClick(e){"inline"!==this.mode&&this.lightDismiss&&e.target===this.dialog&&this.close()}updated(e){"inline"!==this.mode&&e.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150)):!0===e.get("open")&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return Ri`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${this.withoutHeader?"":Ri`
          <div
            class="header-bar"
            part="header-bar"
          >
            <div class="action-item">
              <slot name="header-actions"></slot>
            </div>
            <div class="header-content" part="title">
              <slot name="label">${this.label}</slot>
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
                ${Rc}
              </button>
            </div>
          </div>
        `}
        <div class="content-slot" part="body">
          ${this.icon?Ri`
                <div class="icon-container">
                  <mov-icon
                    .name=${function(e){switch(e){case"info":return"info-circle";case"warning":return"alert-circle";case"success":return"circle-check";case"error":return"circle-x";case"question":return"help";default:return""}}(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              `:""}
          <slot></slot>
        </div>
        <slot name="footer" part="footer"></slot>
      </dialog>
    `}},A([w({type:Boolean,reflect:!0})],nn.prototype,"open",void 0),A([w({type:String,reflect:!0})],nn.prototype,"mode",void 0),A([w({type:Boolean,reflect:!0})],nn.prototype,"fullscreen",void 0),A([w({type:String,reflect:!0})],nn.prototype,"label",void 0),A([w({type:Boolean,reflect:!0,attribute:"without-header"})],nn.prototype,"withoutHeader",void 0),A([w({type:Boolean,reflect:!0,attribute:"light-dismiss"})],nn.prototype,"lightDismiss",void 0),A([w({type:String,reflect:!0})],nn.prototype,"icon",void 0),A([y("dialog")],nn.prototype,"dialog",void 0),nn=A([io("mov-dialog")],nn),rn={SCROLL_UP(){_e(-1)},SCROLL_DOWN(){_e(1)},NEXT_CHAPTER(){Se("next")},PREVIOUS_CHAPTER(){Se("prev")},RETURN_CHAPTER_LIST(){Se("series")},ENLARGE(){ye(1)()},REDUCE(){ye(-1)()},RESTORE(){ke("percent",100)()},FIT_WIDTH(){ke("width")()},FIT_HEIGHT(){ke("height")()},SETTINGS(){z("panel",e=>"none"===e?"settings":"none")},VIEW_MODE_WEBCOMIC(){Ie("WebComic")()},VIEW_MODE_VERTICAL(){Ie("Vertical")()},VIEW_MODE_LEFT(){Ie("FluidRTL")()},VIEW_MODE_RIGHT(){Ie("FluidLTR")()},VIEW_MODE_GALLERY(){Ie("Gallery")()},SCROLL_START(){K()},INCREASE_SPEED(){ve(1)},DECREASE_SPEED(){ve(-1)},TOGGLE_CONTROLS(){$("hidePageControls",e=>!e)}},an=class extends no{constructor(...e){super(...e),this.mode="disabled",this.currentPage=1,this.totalPages=1,this.startPage=1}static{this.styles=Kt`
    :host {
      display: contents; /* Use contents to not interfere with layout */
      font-family:
        system-ui,
        -apple-system,
        sans-serif;
    }

    .slider-pagination {
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
      max-width: 100%;
      z-index: 100;
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

    .pagination-button mov-icon {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }

    .slider-container {
      position: relative;
      max-width: 1000px;
      width: inherit;
      margin: 0 5px;
      --mov-slider-track-height: 4px;
      --mov-slider-thumb-size: 16px;
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

    .side-arrow {
      position: fixed;
      top: var(--header-height, 50px);
      bottom: 0;
      width: 10vw;
      height: calc(100vh - var(--header-height, 50px));
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 99;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
      -webkit-tap-highlight-color: transparent;
    }

    .side-arrow:hover {
      background-color: var(--mov-color-primary-alpha-10);
      opacity: 1;
    }

    .side-arrow.left {
      left: 0;
    }

    .side-arrow.right {
      right: 0;
    }

    .side-arrow:active {
      background-color: var(--mov-color-primary-alpha-20);
    }

    .side-arrow mov-icon {
      width: 48px;
      height: 48px;
      fill: var(--mov-color-on-primary);
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
    }

    .side-arrow:disabled {
      display: none;
    }
  `}get isFirstPage(){return this.currentPage<=this.startPage}get isLastPage(){return this.currentPage>=this.totalPages-(1-this.startPage)}renderSlider(){return Ri`
      <div class="slider-pagination">
        <button
          class="pagination-button"
          @click=${Q}
          value="${this.prev}"
          ?disabled=${l(this.prev)||"#"===this.prev}
        >
          <mov-icon name="arrow-big-left"></mov-icon>
          <div class="tooltip">Previous Chapter</div>
        </button>

        <button
          class="pagination-button"
          @click=${this.goToPreviousPage}
          ?disabled=${this.isFirstPage}
        >
          <mov-icon name="chevron-left"></mov-icon>
          <div class="tooltip">Previous Page</div>
        </button>

        <div class="slider-container">
          <mov-slider
            class="pagination-slider"
            min="${this.startPage}"
            max="${this.totalPages}"
            .value="${this.currentPage}"
            show-tooltip
            @input="${Y}"
          ></mov-slider>
        </div>

        <button class="pagination-button" @click=${this.goToNextPage} ?disabled=${this.isLastPage}>
          <mov-icon name="chevron-right"></mov-icon>
          <div class="tooltip">Next Page</div>
        </button>

        <button
          class="pagination-button"
          @click=${Q}
          value="${this.next}"
          ?disabled=${l(this.next)||"#"===this.next}
        >
          <mov-icon name="arrow-big-right"></mov-icon>
          <div class="tooltip">Next Chapter</div>
        </button>
      </div>
    `}renderSideArrows(){return Ri`
      <div class="arrows-pagination">
        <button
          class="side-arrow left"
          @click=${this.handleLeftArrowClick}
          ?disabled=${this.isFirstPage&&(l(this.prev)||"#"===this.prev)}
        >
          <mov-icon name="chevron-left"></mov-icon>
        </button>
        <button
          class="side-arrow right"
          @click=${this.handleRightArrowClick}
          ?disabled=${this.isLastPage&&(l(this.next)||"#"===this.next)}
        >
          <mov-icon name="chevron-right"></mov-icon>
        </button>
      </div>
    `}render(){if("disabled"===this.mode)return Pi;const e="slider"===this.mode||"both"===this.mode,t="side-arrows"===this.mode||"both"===this.mode;return Ri`
      ${e?this.renderSlider():Pi} ${t?this.renderSideArrows():Pi}
    `}handleLeftArrowClick(){this.isFirstPage?Se("prev"):this.goToPreviousPage()}handleRightArrowClick(){this.isLastPage?Se("next"):this.goToNextPage()}goToPreviousPage(){this.goToPage(this.currentPage-1)}goToNextPage(){this.goToPage(this.currentPage+1)}goToPage(e){R("scrollToPage",e)}},A([w({type:String})],an.prototype,"mode",void 0),A([w({type:Number})],an.prototype,"currentPage",void 0),A([w({type:Number})],an.prototype,"totalPages",void 0),A([w({type:Number})],an.prototype,"startPage",void 0),A([w({type:String})],an.prototype,"next",void 0),A([w({type:String})],an.prototype,"prev",void 0),an=A([io("manga-pagination")],an),ln=class extends no{constructor(...e){super(...e),this.open=!1,this.placement="end",this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=Kt`
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
      font-size: 24px;
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
    :host([placement='top']) dialog {
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      transform: translateY(-100%);
    }
    :host([placement='bottom']) dialog {
      bottom: 0;
      left: 0;
      width: 100%;
      height: auto;
      top: auto;
      transform: translateY(100%);
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
    .footer-slot {
      display: block;
      padding: 1rem;
      border-top: 1px solid var(--theme-border-color, #e0e0e0);
    }
  `}close(){this.open=!1}handleCancel(e){e.preventDefault(),this.close()}handleBackdropClick(){this.lightDismiss&&this.close()}handleClick(e){this.lightDismiss&&e.target===this.dialog&&this.close()}updated(e){e.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},250)):!0===e.get("open")&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return Ri`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${this.withoutHeader?"":Ri`
          <div
            class="header-bar"
            part="header-bar"
          >
            <div class="action-item">
              <slot name="header-actions"></slot>
            </div>
            <div class="header-content" part="title">
              <slot name="label">${this.label}</slot>
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
                ${Rc}
              </button>
            </div>
          </div>
        `}
        <slot class="content-slot" part="body"></slot>
        <slot name="footer" class="footer-slot" part="footer"></slot>
      </dialog>
    `}},A([w({type:Boolean,reflect:!0})],ln.prototype,"open",void 0),A([w({type:String,reflect:!0})],ln.prototype,"placement",void 0),A([w({type:String,reflect:!0})],ln.prototype,"label",void 0),A([w({type:Boolean,reflect:!0,attribute:"without-header"})],ln.prototype,"withoutHeader",void 0),A([w({type:Boolean,reflect:!0,attribute:"light-dismiss"})],ln.prototype,"lightDismiss",void 0),A([y("dialog")],ln.prototype,"dialog",void 0),ln=A([io("mov-drawer")],ln),sn=class extends no{static{this.styles=Kt`
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
      top: 100%;
      left: 0;
      background-color: var(--theme-background-color, #f9f9f9);
      min-width: 160px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 100;
      list-style: none;
      padding: 0;
      margin: 4px 0 0;
      border: 1px solid var(--theme-border-color, #ccc);
      border-radius: 5px;
    }
    :host([placement^='top']) .dropdown-content {
      top: auto;
      bottom: 100%;
      margin: 0 0 4px;
    }
    :host([placement$='end']) .dropdown-content {
      left: auto;
      right: 0;
    }
    :host([open]) .dropdown-content {
      display: block;
    }
  `}constructor(){super(),this.open=!1,this.checkable=!1,this.distance=0,this.skidding=0,this.placement="bottom-start",this.boundClickHandler=this.handleClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.boundClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.boundClickHandler)}handleClickOutside(e){this.open&&!e.composedPath().includes(this)&&this.hide()}show(){this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}toggle(){this.open?this.hide():this.show()}render(){return Ri`
      <div
        @click=${this.toggle}
        class="trigger-wrapper"
        part="trigger"
      >
        <slot name="trigger"></slot>
      </div>
      <div
        class="dropdown-content"
        part="menu"
      >
        <slot></slot>
      </div>
    `}},A([w({type:Boolean,reflect:!0})],sn.prototype,"open",void 0),A([w({type:Boolean,reflect:!0})],sn.prototype,"checkable",void 0),A([w({type:Number})],sn.prototype,"distance",void 0),A([w({type:Number})],sn.prototype,"skidding",void 0),A([w({type:String})],sn.prototype,"placement",void 0),sn=A([io("mov-dropdown")],sn),cn=class extends no{constructor(...e){super(...e),this.selected=!1,this.checked=!1,this.disabled=!1,this.value="",this.variant="default",this.type="normal"}static{this.styles=Kt`
    :host {
      display: block;
      min-width: max-content;
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
    :host([selected]) .item,
    :host([checked]) .item {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    :host([disabled]) .item {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([variant='danger']) .item {
      color: var(--theme-color-danger, #dc3545);
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
    :host([selected]) .check-icon,
    :host([checked]) .check-icon {
      visibility: visible;
    }
    ::slotted([slot='details']) {
      font-size: 0.9em;
      opacity: 0.7;
    }
  `}handleSelect(){this.disabled||this.dispatchEvent(new CustomEvent("wa-select",{detail:{item:this},bubbles:!0,composed:!0}))}render(){return Ri`
      <div
        class="item"
        @click=${this.handleSelect}
        part="base"
      >
        <div
          class="item-content"
          part="label"
        >
          <mov-icon
            class="check-icon"
            name="IconCheck"
            part="checkmark"
          ></mov-icon>
          <slot
            name="icon"
            part="icon"
          ></slot>
          <slot></slot>
        </div>
        <slot
          name="details"
          part="details"
        ></slot>
      </div>
    `}},A([w({type:Boolean,reflect:!0})],cn.prototype,"selected",void 0),A([w({type:Boolean,reflect:!0})],cn.prototype,"checked",void 0),A([w({type:Boolean,reflect:!0})],cn.prototype,"disabled",void 0),A([w({type:String})],cn.prototype,"value",void 0),A([w({type:String,reflect:!0})],cn.prototype,"variant",void 0),A([w({type:String,reflect:!0})],cn.prototype,"type",void 0),cn=A([io("mov-dropdown-item")],cn),dn=class extends no{constructor(...e){super(...e),this.orientation="horizontal"}static{this.styles=Kt`
    :host {
      display: block;
    }
    :host([orientation='horizontal']) .divider {
      border-top: 1px solid var(--theme-border-color, #ccc);
      margin: 4px 0;
    }
    :host([orientation='vertical']) .divider {
      border-left: 1px solid var(--theme-border-color, #ccc);
      height: 100%;
      margin: 0 4px;
      display: inline-block;
    }
  `}render(){return Ri`<div
      class="divider"
      role="separator"
    ></div>`}},A([w({type:String,reflect:!0})],dn.prototype,"orientation",void 0),dn=A([io("mov-divider")],dn),hn='/**\r\n * KEYS.css\r\n *\r\n * A simple stylesheet for rendering beautiful keyboard-style elements.\r\n *\r\n * Author:  Michael Hüneburg\r\n * Website: http://michaelhue.com/keyscss\r\n * License: MIT License (see LICENSE.txt)\r\n */\r\n\r\nkbd,\r\n.key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #505050;\r\n  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r\n  color: #fafafa;\r\n  text-shadow: -1px -1px 0 #464646;\r\n  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n  font-size: .85em;\r\n  line-height: 1;\r\n  cursor: default;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\nkbd[title],\r\n.key[title] {\r\n  cursor: help;\r\n}\r\nkbd.dark,\r\n.dark-keys kbd,\r\n.key.dark,\r\n.dark-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #505050;\r\n  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r\n  color: #fafafa;\r\n  text-shadow: -1px -1px 0 #464646;\r\n  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n}\r\nkbd.light,\r\n.light-keys kbd,\r\n.key.light,\r\n.light-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #fafafa;\r\n  background-color: gradient(linear, left top, left bottom, from(#d2d2d2), to(#ffffff));\r\n  color: #323232;\r\n  text-shadow: 0 0 2px #ffffff;\r\n  -webkit-box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r\n          box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r\n}\r\nkbd.so,\r\n.so-keys kbd,\r\n.key.so,\r\n.so-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  margin: 0 .1em;\r\n  padding: .1em .6em;\r\n  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;\r\n  line-height: 1.4;\r\n  color: #242729;\r\n  text-shadow: 0 1px 0 #FFF;\r\n  background-color: #e1e3e5;\r\n  border: 1px solid #adb3b9;\r\n  border-radius: 0.27272727em;\r\n  -webkit-box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r\n          box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r\n}\r\nkbd.github,\r\n.github-keys kbd,\r\n.key.github,\r\n.github-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  padding: 0.27272727em 0.45454545em;\r\n  font-size: 68.75%;\r\n  line-height: 0.90909091;\r\n  color: #444d56;\r\n  vertical-align: middle;\r\n  background-color: #fafbfc;\r\n  border: solid 1px #c6cbd1;\r\n  border-bottom-color: #959da5;\r\n  border-radius: 0.27272727em;\r\n  -webkit-box-shadow: inset 0 -1px 0 #959da5;\r\n          box-shadow: inset 0 -1px 0 #959da5;\r\n  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  text-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHNGQUFzRjtFQUN0RixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLDhIQUFzSDtVQUF0SCxzSEFBc0g7RUFDdEgsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQWtCO0tBQWxCLHVCQUFrQjtNQUFsQixzQkFBa0I7VUFBbEIsa0JBQWtCO0NBQ25CO0FBQ0Q7O0VBRUUsYUFBYTtDQUNkO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyw4SEFBc0g7VUFBdEgsc0hBQXNIO0NBQ3ZIO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLDZCQUE2QjtFQUM3Qix3SkFBZ0o7VUFBaEosZ0pBQWdKO0NBQ2pKO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNERBQTREO0VBQzVELGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHdFQUFnRTtVQUFoRSxnRUFBZ0U7Q0FDakU7QUFDRDs7OztFQUlFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxzRkFBc0Y7RUFDdEYsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoidG1wMi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJrYmQsXG4ua2V5IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1pbi13aWR0aDogMWVtO1xuICBwYWRkaW5nOiAuM2VtIC40ZW0gLjJlbSAuM2VtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBHcmFuZGVcIiwgTHVjaWRhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IC4zZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzNjM2MzYyksIHRvKCM1MDUwNTApKTtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjNDY0NjQ2O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICM5Njk2OTYsIGluc2V0IDAgLTAuMDVlbSAwLjRlbSAjNTA1MDUwLCAwIDAuMWVtIDAgIzFlMWUxZSwgMCAwLjFlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxua2JkW3RpdGxlXSxcbi5rZXlbdGl0bGVdIHtcbiAgY3Vyc29yOiBoZWxwO1xufVxua2JkLmRhcmssXG4uZGFyay1rZXlzIGtiZCxcbi5rZXkuZGFyayxcbi5kYXJrLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMzYzNjM2MpLCB0bygjNTA1MDUwKSk7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzQ2NDY0NjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjOTY5Njk2LCBpbnNldCAwIC0wLjA1ZW0gMC40ZW0gIzUwNTA1MCwgMCAwLjFlbSAwICMxZTFlMWUsIDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxua2JkLmxpZ2h0LFxuLmxpZ2h0LWtleXMga2JkLFxuLmtleS5saWdodCxcbi5saWdodC1rZXlzIC5rZXkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLXdpZHRoOiAxZW07XG4gIHBhZGRpbmc6IC4zZW0gLjRlbSAuMmVtIC4zZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiLCBMdWNpZGEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogLjNlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZDJkMmQyKSwgdG8oI2ZmZmZmZikpO1xuICBjb2xvcjogIzMyMzIzMjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjZmZmZmZmLCBpbnNldCAwIDAgMC40ZW0gI2M4YzhjOCwgMCAwLjFlbSAwICM4MjgyODIsIDAgMC4xMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjQpLCAwIDAuMWVtIDAuMTFlbSByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5rYmQuc28sXG4uc28ta2V5cyBrYmQsXG4ua2V5LnNvLFxuLnNvLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMCAuMWVtO1xuICBwYWRkaW5nOiAuMWVtIC42ZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMjQyNzI5O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlM2U1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWRiM2I5O1xuICBib3JkZXItcmFkaXVzOiAwLjI3MjcyNzI3ZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxMiwgMTMsIDE0LCAwLjIpLCAwIDAgMCAycHggI0ZGRiBpbnNldDtcbn1cbmtiZC5naXRodWIsXG4uZ2l0aHViLWtleXMga2JkLFxuLmtleS5naXRodWIsXG4uZ2l0aHViLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuMjcyNzI3MjdlbSAwLjQ1NDU0NTQ1ZW07XG4gIGZvbnQtc2l6ZTogNjguNzUlO1xuICBsaW5lLWhlaWdodDogMC45MDkwOTA5MTtcbiAgY29sb3I6ICM0NDRkNTY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjNmNiZDE7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5NTlkYTU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjcyNzI3MjdlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgIzk1OWRhNTtcbiAgZm9udC1mYW1pbHk6IFwiU0ZNb25vLVJlZ3VsYXJcIiwgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuIl19 */',pn=Ur(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StoreController=void 0,e.StoreController=class{constructor(e,t){this.host=e,this.atom=t,e.addController(this)}hostConnected(){this.unsubscribe=this.atom.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;null===(e=this.unsubscribe)||void 0===e||e.call(this)}get value(){return this.atom.get()}}}),un=Ur(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MultiStoreController=void 0,e.MultiStoreController=class{constructor(e,t){this.host=e,this.atoms=t,e.addController(this)}hostConnected(){this.unsubscribes=this.atoms.map(e=>e.subscribe(()=>this.host.requestUpdate()))}hostDisconnected(){var e;null===(e=this.unsubscribes)||void 0===e||e.forEach(e=>e())}get values(){return this.atoms.map(e=>e.get())}}}),mn=Ur(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.useStores=void 0;var t=un();e.useStores=function(...e){return o=>class extends o{constructor(...o){super(...o),new t.MultiStoreController(this,e)}}}}),gn=Ur(e=>{var t,o;Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=void 0,t=un(),o=(e,o)=>class extends e{constructor(...e){super(...e),new t.MultiStoreController(this,o)}},e.withStores=o}),vn=Ur(e=>{var t,o,n,r;Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=e.useStores=e.MultiStoreController=e.StoreController=void 0,t=pn(),Object.defineProperty(e,"StoreController",{enumerable:!0,get:function(){return t.StoreController}}),o=un(),Object.defineProperty(e,"MultiStoreController",{enumerable:!0,get:function(){return o.MultiStoreController}}),n=mn(),Object.defineProperty(e,"useStores",{enumerable:!0,get:function(){return n.useStores}}),r=gn(),Object.defineProperty(e,"withStores",{enumerable:!0,get:function(){return r.withStores}})})(),fn=class extends no{static{this.styles=Kt`
    :host {
      display: inline-flex;
      vertical-align: middle;
      z-index: 100;
    }

    :host(:has(mov-dropdown[open])) {
      z-index: 110;
    }

    .button-group {
      display: flex;
      flex-wrap: wrap;
    }

    ::slotted(mov-button),
    ::slotted(mov-dropdown) {
      margin-inline-start: -1px;
      --mov-border-radius-m: 0;
    }

    ::slotted(mov-button:first-child),
    ::slotted(mov-dropdown:first-child) {
      margin-inline-start: 0;
      --mov-border-radius-m: 0.375rem 0 0 0.375rem;
    }

    ::slotted(mov-button:last-child),
    ::slotted(mov-dropdown:last-child) {
      --mov-border-radius-m: 0 0.375rem 0.375rem 0;
    }

    ::slotted(mov-button:first-child:last-child),
    ::slotted(mov-dropdown:first-child:last-child) {
      --mov-border-radius-m: 0.375rem;
    }

    /* Handling adjacent button groups visual merge */
    :host(.button-group-merged-start) {
      margin-inline-start: -1px;
    }
    :host(.button-group-merged-start) ::slotted(mov-button:first-child),
    :host(.button-group-merged-start) ::slotted(mov-dropdown:first-child) {
      --mov-border-radius-m: 0 0 0 0;
    }

    :host(.button-group-merged-end) ::slotted(mov-button:last-child),
    :host(.button-group-merged-end) ::slotted(mov-dropdown:last-child) {
      --mov-border-radius-m: 0 0 0 0;
    }

    ::slotted(mov-dropdown) {
      display: flex;
    }
  `}render(){return Ri`
      <div
        class="button-group"
        role="group"
      >
        <slot></slot>
      </div>
    `}},fn=A([io("mov-button-group")],fn),bn=class e{constructor(t){this.prevOffset=0,this.headroom="top",this.headerVisible=!0,this.handleScroll=_.throttle(()=>{if(this.isAnyDropdownOpen())return void(this.prevOffset=window.scrollY);const e=T("header"),{scrollY:t}=window;let o="none";"height"!==T("zoomMode")&&t+window.innerHeight+100>document.body.scrollHeight?o="end":t>this.prevOffset&&t>49?o="hide":"scroll"===e&&t<this.prevOffset&&t>49?o="show":"click"!==e&&t<=49&&(o="top");let n=!1;if(this.headroom!==o&&(this.headroom=o,n=!0),"scroll"===e){const e="hide"!==o;this.headerVisible!==e&&(this.headerVisible=e,n=!0)}n&&this.host.requestUpdate(),this.prevOffset=t},300),this.handleMouseMove=_.throttle(t=>{if(this.isAnyDropdownOpen())this.headerVisible||(this.headerVisible=!0,this.host.requestUpdate());else if(["hover","scroll"].includes(T("header"))){const o=e.isMouseInsideRegion(t,window.innerWidth,73.5);this.headerVisible!==o&&(this.headerVisible=o,this.host.requestUpdate())}},300),this.toggleHeaderVisibility=()=>{"click"===T("header")&&(this.headerVisible=!this.headerVisible,this.host.requestUpdate())},this.host=t,t.addController(this);const o=T("header");"height"===T("zoomMode")&&["click","hover"].includes(o)&&(this.headerVisible=!1)}hostConnected(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousemove",this.handleMouseMove)}hostDisconnected(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove)}isAnyDropdownOpen(){if(!this.host.shadowRoot)return!1;const e=this.host.shadowRoot.querySelectorAll("mov-dropdown");for(const t of e)if(t.open)return!0;return!1}static isMouseInsideRegion(e,t,o){return e.clientX>=0&&e.clientX<=t&&e.clientY>=0&&e.clientY<=o}},wn=class{constructor(e){this.canvasContext=null,this.host=e,e.addController(this);const t=document.createElement("canvas");this.canvasContext=t.getContext("2d"),this.resizeObserver=new ResizeObserver(()=>this.update())}hostConnected(){}hostDisconnected(){this.resizeObserver.disconnect()}observe(e,t){e&&t&&(this.element=e,this.text=t,this.resizeObserver.disconnect(),this.resizeObserver.observe(this.element),this.update())}update(){if(!this.element||!this.text||!this.canvasContext)return this.value=this.text,void this.host.requestUpdate();const e=window.getComputedStyle(this.element);this.canvasContext.font=`${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;const t=this.text,o=this.element.clientWidth;if(this.canvasContext.measureText(t).width<=o)return this.value=t,void this.host.requestUpdate();const n=o-this.canvasContext.measureText("...").width;let r="",i="";for(let e=1;e<t.length;e++){const o=t.substring(0,e),a=t.substring(t.length-e);if(this.canvasContext.measureText(o).width+this.canvasContext.measureText(a).width>n)break;r=o,i=a}this.value=`${r}...${i}`,this.host.requestUpdate()}},kn="#Header.mobile,\r\n#Header.tablet {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 0;\r\n  justify-content: center;\r\n}\r\n\r\n.mobile #ViewerTitle,\r\n.tablet #ViewerTitle {\r\n  order: 4;\r\n  min-height: auto;\r\n}\r\n\r\n.mobile #GlobalFunctions,\r\n.tablet #GlobalFunctions {\r\n  order: 2;\r\n}\r\n\r\n.mobile #Toolbar,\r\n.tablet #Toolbar {\r\n  order: 1;\r\n}\r\n\r\n#Header.mobile {\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#Header.mobile.click + #Chapter:not(.webcomic, .vertical) {\r\n  position: sticky;\r\n}\r\n\r\n.tablet #MangaTitle,\r\n.mobile #MangaTitle {\r\n  max-width: 90vw;\r\n}\r\n\r\n.mobile #ViewerTitle {\r\n  order: 3;\r\n  margin-top: 0;\r\n  height: auto;\r\n  padding: 0;\r\n}\r\n\r\n.mobile #GlobalFunctions,\r\n.tablet #GlobalFunctions {\r\n  order: 2;\r\n}\r\n\r\n.mobile .PageFunctions {\r\n  padding: 0;\r\n}\r\n\r\n.mobile .PageFunctions .PageButton.Bookmark {\r\n  opacity: 1;\r\n}\r\n\r\n.mobile #GlobalFunctions #ZoomSlider,\r\n.tablet #GlobalFunctions #ZoomSlider,\r\n.mobile .PageFunctions .PageButton:not(.Bookmark),\r\n.tablet #Counters,\r\n.mobile #ZoomControl,\r\n.mobile #ZoomDropdown,\r\n.mobile #ViewDropdown,\r\n.mobile #FileDropdown :where(:nth-child(3), :nth-child(4)),\r\n.mobile #BookMode,\r\n.mobile #MangaMode,\r\n.tablet #BookMode,\r\n.tablet #MangaMode {\r\n  display: none;\r\n}\r\n",yn=class extends no{static{this.styles=[Xt("#Header {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-flow: row nowrap;\r\n  gap: 10px;\r\n  padding: 0 20px;\r\n  transition: transform 0.3s ease-in;\r\n  position: sticky;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: var(--theme-background-color);\r\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);\r\n  z-index: 900;\r\n}\r\n\r\n#Header.click {\r\n  padding-left: 60px;\r\n}\r\n\r\n@keyframes headroom {\r\n  from {\r\n    transform: translateY(-100%);\r\n  }\r\n  to {\r\n    transform: translateY(0%);\r\n  }\r\n}\r\n\r\n#Header:not(.visible, .headroom-top, .fixed, .simple) {\r\n  animation: headroom 0.3s ease-in reverse;\r\n  transform: translateY(-100%);\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n#Header.scroll.headroom-hide:not(.visible) {\r\n  animation: none;\r\n  transform: translateY(-100%);\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n#Header.scroll.headroom-show,\r\n#Header.headroom-end,\r\n#Header.visible {\r\n  animation: headroom 0.3s ease-in;\r\n  transform: translateY(0%);\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n#Header.headroom-top {\r\n  animation: none;\r\n}\r\n\r\n#Header.fixed {\r\n  position: sticky;\r\n  animation: none;\r\n  top: 0;\r\n  transform: translateY(0%);\r\n}\r\n\r\n#Header.simple {\r\n  position: static;\r\n  animation: none;\r\n  top: 0;\r\n  transform: translateY(0%);\r\n}\r\n\r\n#menu {\r\n  position: fixed;\r\n  z-index: 1;\r\n  color: var(--theme-body-text-color);\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n#menu:not(.click),\r\n#menu.hide {\r\n  display: none;\r\n}\r\n\r\n#menu.click {\r\n  z-index: 901;\r\n  top: 25px;\r\n  left: 5px;\r\n  opacity: 0.8;\r\n}\r\n\r\n#Toolbar {\r\n  order: 1;\r\n}\r\n\r\n#GlobalFunctions {\r\n  order: 4;\r\n}\r\n\r\n#ViewerTitle {\r\n  order: 2;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n#ZoomControl {\r\n  order: 3;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 3px;\r\n  padding: 10px 5px;\r\n  min-width: 100px;\r\n}\r\n\r\n#MangaTitle {\r\n  padding: 2px;\r\n  margin: 0;\r\n  font-size: 19px;\r\n  font-weight: 400;\r\n  word-wrap: anywhere;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  min-width: 200px;\r\n  max-width: 40vw;\r\n}\r\n"),Xt(kn),Xt(hn),Kt``]}constructor(){super(),this.headroomController=new bn(this),this.titleController=new wn(this)}updated(e){super.updated(e),e.has("manga")&&this.manga&&requestAnimationFrame(()=>{this.manga&&this.titleController.observe(this.mangaTitleElement,this.manga?.title??"Manga Online Viewer")})}render(){if(!this.manga)return Ri``;const{headroom:e,headerVisible:t}=this.headroomController,o=T("keybinds"),n=e=>{if("desktop"!==N("device"))return Pi;const t=o[e];return t&&0!==t.length?t.map(e=>Ri`<kbd slot="details">${e}</kbd>`):Pi};return Ri`
      <toggle-button
        id="menu"
        mode="burger"
        class="${co({[T("header")]:!0,hide:["top","end"].includes(e)})}"
        ?active=${t}
        @toggle=${this.headroomController.toggleHeaderVisibility}
      >
      </toggle-button>
      <header
        id="Header"
        class="${co({[T("header")]:!0,[`headroom-${e}`]:!0,visible:t&&["hide","none"].includes(e),[N("device")]:!0})}"
      >
        <mov-button-group
          id="Toolbar"
          class="${co({"button-group-merged-end":["mobile","tablet"].includes(N("device"))})}"
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
              @click=${Ne}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${B("SETTINGS")} ${n("SETTINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${Re}
            >
              <mov-icon
                slot="icon"
                name="IconKeyboard"
              ></mov-icon>
              ${B("KEYBINDINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${Le}
            >
              <mov-icon
                slot="icon"
                name="IconBookmarks"
              ></mov-icon>
              ${B("BOOKMARKS")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="AutoScroll"
              class="${co({running:N("autoScroll")})}"
              @click=${K}
            >
              <mov-icon
                slot="icon"
                name="${N("autoScroll")?"IconPlayerPause":"IconPlayerPlay"}"
              ></mov-icon>
              ${B("SCROLL_START")} ${n("SCROLL_START")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${q}"
              ?selected=${T("hidePageControls")}
            >
              <mov-icon
                slot="icon"
                name="IconListNumbers"
              ></mov-icon>
              ${B("TOGGLE_CONTROLS")} ${n("TOGGLE_CONTROLS")}
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
                name="IconApiBook"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="webComic"
              class="tablets"
              @click="${Ie("WebComic")}"
              ?selected=${"WebComic"===T("viewMode")}
            >
              <mov-icon
                slot="icon"
                name="IconSpacingVertical"
              ></mov-icon>
              ${B("VIEW_MODE_WEBCOMIC")} ${n("VIEW_MODE_WEBCOMIC")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="verticalMode"
              class="tablets"
              @click="${Ie("Vertical")}"
              ?selected=${"Vertical"===T("viewMode")}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></mov-icon>
              ${B("VIEW_MODE_VERTICAL")} ${n("VIEW_MODE_VERTICAL")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="ltrMode"
              @click="${Ie("FluidLTR")}"
              ?selected=${"FluidLTR"===T("viewMode")}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${B("VIEW_MODE_LEFT")} ${n("VIEW_MODE_LEFT")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${Ie("FluidRTL")}"
              ?selected=${"FluidRTL"===T("viewMode")}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></mov-icon>
              ${B("VIEW_MODE_RIGHT")} ${n("VIEW_MODE_RIGHT")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="BookMode"
              @click="${Ie("Book")}"
              ?selected=${"Book"===T("viewMode")}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowRight"
              ></mov-icon>
              ${B("VIEW_MODE_BOOK")} ${n("VIEW_MODE_BOOK")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="MangaMode"
              @click="${Ie("Manga")}"
              ?selected=${"Manga"===T("viewMode")}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowLeft"
              ></mov-icon>
              ${B("VIEW_MODE_MANGA")} ${n("VIEW_MODE_MANGA")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="GalleryMode"
              @click="${Ie("Gallery")}"
              ?selected=${"Gallery"===T("viewMode")}
            >
              <mov-icon
                slot="icon"
                name="IconLayoutDashboard"
              ></mov-icon>
              ${B("VIEW_MODE_GALLERY")} ${n("VIEW_MODE_GALLERY")}
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
              @click="${ye()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${B("ENLARGE")} ${n("ENLARGE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${ke("percent",100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${B("RESTORE")} ${n("RESTORE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${ye(-1)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomOutArea"
              ></mov-icon>
              ${B("REDUCE")} ${n("REDUCE")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="fitWidth"
              @click="${ke("width")}"
              ?selected=${"width"===T("zoomMode")}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${B("FIT_WIDTH")} ${n("FIT_WIDTH")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${ke("height")}"
              ?selected=${"height"===T("zoomMode")}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></mov-icon>
              ${B("FIT_HEIGHT")} ${n("FIT_HEIGHT")}
            </mov-dropdown-item>
          </mov-dropdown>
        </mov-button-group>
        <mov-button-group
          id="GlobalFunctions"
          class="${co({"button-group-merged-start":["mobile","tablet"].includes(N("device"))})}"
        >
          <mov-button
            id="series"
            href="${this.manga.series??Pi}"
            @click=${Q}
            title="${B("RETURN_CHAPTER_LIST")}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBooksReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${B("DOWNLOAD_ZIP")}"
            @click=${j}
            ?disabled=${"available"!==N("download")}
            ?loading=${"working"===N("download")}
          >
            <mov-icon
              name="${"working"===N("download")?"IconLoader2":"IconFileDownload"}"
            ></mov-icon>
          </mov-button>
          <mov-button
            id="prev"
            href="${this.manga.prev??Pi}"
            title="${B("PREVIOUS_CHAPTER")}"
            @click=${Q}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next??Pi}"
            title="${B("NEXT_CHAPTER")}"
            @click=${Q}
            ?disabled=${!this.manga.next}
          >
            <mov-icon name="IconArrowBigRight"></mov-icon>
          </mov-button>
        </mov-button-group>
        <div id="ViewerTitle">
          <h1
            id="MangaTitle"
            title="${this.manga.title}"
          >
            ${this.titleController.value??this.manga.title}
          </h1>
        </div>
        <div id="ZoomControl">
          <output id="ZoomVal">
            Zoom:
            ${"percent"===T("zoomMode")?`${T("zoomValue")}%`:T("zoomMode")}
          </output>
          <mov-slider
            id="Zoom"
            name="Zoom"
            .value="${T("zoomValue")}"
            min="${T("minZoom")}"
            max="200"
            show-tooltip
            @input=${xe}
          ></mov-slider>
        </div>
      </header>
    `}},A([y("#MangaTitle")],yn.prototype,"mangaTitleElement",void 0),A([w({type:Object})],yn.prototype,"manga",void 0),yn=A([io("reader-header"),(0,vn.useStores)($o,No,Ro)],yn),En=class extends no{static{this.styles=[Xt("#BookmarksPanel {\r\n  text-align: center;\r\n  --width: 100vw;\r\n}\r\n\r\n#BookmarksList {\r\n  padding: 0 5px;\r\n  overflow: auto;\r\n  max-height: 60vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.bookmark-item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 0.75rem 1rem;\r\n  border-radius: 5px;\r\n  transition: background-color 150ms ease-in-out;\r\n  text-align: left;\r\n}\r\n\r\n.bookmark-item:hover {\r\n  background-color: var(--mov-color-fill-quiet, rgba(128, 128, 128, 0.1));\r\n}\r\n\r\n.bookmark-info {\r\n  flex-grow: 1;\r\n  min-width: 0;\r\n}\r\n\r\n.bookmark-name {\r\n  font-weight: 500;\r\n}\r\n\r\n.bookmark-url {\r\n  font-size: 14px;\r\n  text-decoration: none;\r\n  display: block;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  color: color-mix(in oklab, var(--theme-body-text-color), transparent 30%);\r\n}\r\n.bookmark-url:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.bookmark-details {\r\n  flex-shrink: 0;\r\n  width: 90px;\r\n  font-size: 14px;\r\n  text-align: right;\r\n  color: color-mix(in oklab, var(--theme-body-text-color), transparent 30%);\r\n}\r\n.bookmark-details > div {\r\n  padding: 2px 0;\r\n}\r\n\r\n.bookmark-actions {\r\n  flex-shrink: 0;\r\n  display: flex;\r\n  gap: 0.5rem;\r\n}\r\n")]}listBookmarks(){return a(T("bookmarks"))?[B("LIST_EMPTY")]:T("bookmarks").map((e,t)=>Ri`
        <div
          id="Bookmark${t+1}"
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
              @click=${Te}
            >
              <mov-icon
                name="IconTrash"
                size="16px"
              ></mov-icon>
            </mov-button>
          </div>
        </div>
      `)}render(){return Ri`
      <mov-dialog
        id="BookmarksPanel"
        ?open=${"bookmarks"===N("panel")}
        light-dismiss
        @close=${$e}
      >
        <mov-button
          class="Bookmark"
          title="${B("BOOKMARK")}"
          @click=${De}
          slot="header-actions"
        >
          <mov-icon
            name="${void 0===V()?"IconBookmark":"IconBookmarkOff"}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${B("BOOKMARKS")}</h2>
        <h2 slot="label">${B("BOOKMARKS")}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-dialog>
    `}},En=A([io("bookmark-panel"),(0,vn.useStores)($o,No,Ro)],En),An=class extends no{constructor(...e){super(...e),this.keybindsRefs=_.keys(T("keybinds")).reduce((e,t)=>(e[t]=Bt(),e),{})}static{this.styles=[Xt("#KeybindingsPanel div {\r\n  line-height: 1.5em;\r\n}\r\n\r\n#KeybindingsPanel #KeybindingsList {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n  gap: 5px;\r\n}\r\n\r\n#KeybindingsPanel .ControlButton {\r\n  margin-left: 3px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 5px 10px;\r\n  gap: 0.5em;\r\n}\r\n\r\n#KeybindingsPanel label {\r\n  display: ruby;\r\n}\r\n\r\n#KeybindingsPanel input {\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n\r\n#KeybindingsPanel #HotKeysRules {\r\n  grid-column: span 2;\r\n}\r\n"),Xt(hn)]}keybindList(){const e=T("keybinds");return _.keys(e).map(t=>{const o=e[t]?.length?
/**
	* @license
	* Copyright 2021 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/
function*(e){if(void 0!==e){let t=-1;for(const o of e)t>-1&&(yield" / "),t++,yield o}}(e[t]?.map(e=>Ri`<kbd class="dark">${e}</kbd>`)):"";return Ri`<span>${B(t)}:</span> <span>${o}</span>`})}keybindEditor(){const e=T("keybinds");return _.keys(e).map(t=>Ri`<label for="${t}">${B(t)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${t}"
            name="${t}"
            value="${e[t]?.join(" , ")??Pi}"
            ${Vt(this.keybindsRefs[t])}
          />`)}render(){return Ri`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${N("panel").startsWith("keybindings")}
        placement="end"
        @close=${$e}
      >
        <h2 slot="label">${B("KEYBINDINGS")}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${"keybindingsEditor"===N("panel")?Ri` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${B("SAVE_KEYBINDS")}"
                @click=${()=>function(e){const t={};_.keys(e).forEach(o=>{const n=e[o].value;if(n){const e=n.value.split(",").map(e=>e.trim()).filter(e=>""!==e);t[o]=e.length>0?e:void 0}}),D("keybinds",t),R("panel","keybindings"),Ce()}(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${B("BUTTON_SAVE")}
              </mov-button>`:Ri` <mov-button
                id="EditKeybindings"
                type="button"
                title="${B("EDIT_KEYBINDS")}"
                @click=${ze}
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
          ${"keybindingsEditor"===N("panel")?this.keybindEditor():this.keybindList()}
        </div>
        <div id="HotKeysRules">${po(B("KEYBIND_RULES"))}</div>
      </mov-drawer>
    `}},An=A([io("keybindings-panel"),(0,vn.useStores)($o,No,Ro)],An),xn=e=>e%100==0?15:e%50==0?10:e%25==0?5:2.5,In=_.values(Fo).map(e=>e[900]),Mn=[400,600,900,1200,1400,1600,1970],_n=[600,800,1e3,1200,1400,2e3,2600],Sn=class extends no{constructor(...e){super(...e),this.mode="bottom",this.forceExpanded=!1,this.isHiding=!1}static{this.styles=[Xt(":host {\r\n  --nav-collapsed-size: 34px;\r\n  --nav-expanded-size: 200px;\r\n  --header-height: 80px;\r\n}\r\n#Navigation {\r\n  color: var(--theme-text-color);\r\n  background-color: var(--theme-hightlight-color);\r\n  overflow: hidden;\r\n  display: flex;\r\n  box-sizing: border-box;\r\n  gap: 5px;\r\n  white-space: nowrap;\r\n  text-align: center;\r\n  line-height: 0;\r\n  transition: all 0.3s ease;\r\n  position: fixed;\r\n  z-index: 1000;\r\n}\r\n#Thumbnails {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  gap: 5px;\r\n  justify-content: flex-start;\r\n}\r\n#Navigation.horizontal #Thumbnails {\r\n  flex-direction: row;\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n}\r\n#Navigation.vertical #Thumbnails {\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  justify-content: flex-start;\r\n}\r\n#Navigation.left #Thumbnails {\r\n  direction: rtl;\r\n}\r\n:host(:not([forceExpanded])) #Navigation:not(:hover) #Thumbnails {\r\n  display: none;\r\n}\r\n#NavigationCounters {\r\n  flex-shrink: 0; /* Prevent this from shrinking */\r\n  padding: 5px;\r\n  line-height: 1rem;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.5rem;\r\n}\r\n/* == Horizontal Orientation (for top/bottom position) == */\r\n#Navigation.horizontal {\r\n  flex-direction: column;\r\n  height: var(--nav-collapsed-size);\r\n  width: 100%;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n:host([forceExpanded]) #Navigation.horizontal,\r\n#Navigation.horizontal:hover {\r\n  height: var(--nav-expanded-size);\r\n}\r\n#Navigation.bottom {\r\n  bottom: 0;\r\n}\r\n/* == Vertical Orientation (for left/right position) == */\r\n#Navigation.vertical {\r\n  flex-direction: row;\r\n  width: var(--nav-collapsed-size);\r\n  height: 100%;\r\n  bottom: 0;\r\n  transition:\r\n    top 0.3s ease,\r\n    height 0.3s ease,\r\n    width 0.3s ease;\r\n}\r\n:host([forceExpanded]) #Navigation.vertical,\r\n#Navigation.vertical:hover {\r\n  width: var(--nav-expanded-size);\r\n}\r\n#Navigation.left {\r\n  left: 0;\r\n  flex-direction: row-reverse;\r\n}\r\n#Navigation.right {\r\n  right: 0;\r\n}\r\n#Navigation.vertical #NavigationCounters {\r\n  writing-mode: vertical-rl;\r\n  transform: rotate(180deg);\r\n}\r\n#Navigation.right #NavigationCounters {\r\n  transform: rotate(0deg);\r\n}\r\n/* Adjust for header visibility */\r\n#Navigation.vertical.header {\r\n  top: var(--header-height);\r\n  height: calc(100% - var(--header-height));\r\n}\r\n\r\n#Navigation .Thumbnail {\r\n  display: inline-flex;\r\n  height: 150px;\r\n  width: 150px;\r\n  margin: 0 5px;\r\n  position: relative;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.ThumbnailIndex {\r\n  color: var(--mov-color-on-loud);\r\n  background-color: var(--mov-color-fill-loud);\r\n  display: block;\r\n  opacity: 0.9;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 30%;\r\n  width: 100%;\r\n  line-height: 1.2rem;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  z-index: 1;\r\n}\r\n.ThumbnailImg {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  max-height: 150px;\r\n  min-height: 150px;\r\n  min-width: 80px;\r\n  max-width: 150px;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 48px 48px;\r\n}\r\n"),Kt`
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
        background-image: url('${Xt(Be(Nl))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${Xt(Be(Rl))}');
      }
    `]}willUpdate(e){e.has("mode")&&(this.isHiding=!0)}updated(e){e.has("mode")&&this.isHiding&&setTimeout(()=>{this.isHiding=!1},50)}render(){if("disabled"===this.mode)return Pi;const e=N("manga"),t={horizontal:"bottom"===this.mode,vertical:"bottom"!==this.mode,left:"left"===this.mode,right:"right"===this.mode,bottom:"bottom"===this.mode,hiding:this.isHiding},o=N("images")||{},n=_.keys(o).filter(t=>{const n=parseInt(t,10);return n>=(e?.begin??1)&&n<=(e?.pages??1)&&"loaded"===o[n]?.status}).length;return Ri`
      <nav
        id="Navigation"
        class="${co(t)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${Ms}
          <i>${n}</i> /
          <b> ${(e?.pages??1)-((e?.begin??1)-1)} </b>
          ${B("PAGES_LOADED")}
          <span>: ${N("currentPage")}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${"bottom"===this.mode?Ve:null}
        >
          ${
/**
	* @license
	* Copyright 2021 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/
function*(e,t){if(void 0!==e){let o=0;for(const n of e)yield t(n,o++)}}(Pe(e?.pages??1,e?.begin??1),e=>Ri` <figure
                id="Thumbnail${e}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${e}"
                @click=${()=>{R("scrollToPage",e)}}
              >
                <img
                  id="ThumbnailImg${e}"
                  alt=""
                  class="ThumbnailImg"
                  src=${N("images")?.[e]?.src??Pi}
                />
                <figcaption class="ThumbnailIndex">${e}</figcaption>
              </figure>`)}
        </div>
      </nav>
    `}},A([w({type:String})],Sn.prototype,"mode",void 0),A([w({type:Boolean})],Sn.prototype,"forceExpanded",void 0),A([k()],Sn.prototype,"isHiding",void 0),Sn=A([io("navbar-thumbnails"),(0,vn.useStores)($o,No,Ro)],Sn),Cn=()=>Ri`${Fe()} ${Ue()} ${We()}`,On=()=>Ri`${Ze()} ${je()}`,Tn=()=>Ri`${qe()} ${Xe()} ${Qe()} ${Ye()} ${Ke()} ${Je()}`,Ln=()=>Ri`${nt()} ${rt()} ${Ri`
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
      <mov-slider
        name="minZoom"
        id="minZoom"
        .value="${T("minZoom")}"
        min="25"
        max="100"
        step="5"
        show-tooltip
        show-ticks
        tick-count="4"
        @input="${pe}"
      ></mov-slider>
    </div>
  `} ${it()} ${at()}`,Dn=class extends no{static{this.styles=[Kt`
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
    `,Xt('#SettingsPanel {\r\n  color: var(--theme-text-color);\r\n}\r\n\r\n#SettingsPanel fieldset {\r\n  border: 1px solid var(--theme-body-text-color);\r\n  padding: 3px;\r\n  border-radius: 10px;\r\n}\r\n\r\n#SettingsPanel .ControlLabel {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 2px;\r\n}\r\n\r\n#SettingsPanel .ControlLabelItem {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n#SettingsPanel .ControlLabelItem:not(.show) {\r\n  display: none;\r\n}\r\n\r\n#SettingsPanel input[type="range"] {\r\n  width: 100%;\r\n}\r\n\r\n#SettingsPanel .RangeValue {\r\n  display: inline-block;\r\n  color: var(--mov-color-on-loud);\r\n  line-height: 20px;\r\n  text-align: center;\r\n  border-radius: 3px;\r\n  background: var(--mov-color-fill-loud);\r\n  padding: 2px 5px;\r\n  margin-left: 8px;\r\n}\r\n\r\n#SettingsPanel datalist {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n#SettingsPanel datalist option {\r\n  padding: 0;\r\n  writing-mode: vertical-lr;\r\n}\r\n\r\n#ThemeSelector {\r\n  width: 110px;\r\n}\r\n\r\n#ColorRecommendations {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 2px;\r\n}\r\n#Chapter:not(.Vertical) ~ #SettingsPanel .verticalSeparator {\r\n  display: none;\r\n}\r\n\r\n#ColorScheme {\r\n  padding: 5px;\r\n  min-height: 28px;\r\n  min-width: 28px;\r\n}\r\n\r\n#ResetSettings,\r\n#ResetSettings::part(base) {\r\n  width: 100%;\r\n}\r\n')]}render(){return Ri`
      <mov-drawer
        id="SettingsPanel"
        ?open=${"settings"===N("panel")}
        @close=${$e}
        placement="start"
        class="${N("device")}"
      >
        <h2 slot="label">${B("SETTINGS")}</h2>
        <mov-button
          id="ResetSettings"
          @click="${H}"
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
            ${Cn()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${B("THEME")}</legend>
            ${ot()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${B("LOADING")}</legend>
            ${On()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${B("ZOOM")}</legend>
            ${Ln()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${B("OTHERS")}</legend>
            ${Tn()}
          </fieldset>
        </div>
      </mov-drawer>
    `}},Dn=A([io("settings-panel"),(0,vn.useStores)($o,No,Ro)],Dn),$n=class{constructor(e,t){this.queue=[],this.activeCount=0,this.lastRunTime=0;const o={Safe:{concurrency:5,delay:1e3},Standard:{concurrency:5,delay:500},Faster:{concurrency:10,delay:500},Extreme:{concurrency:10,delay:250},All:{concurrency:20,delay:50}}[e];this.maxConcurrency=o.concurrency,this.minDelay=t??o.delay}add(e){this.queue.push(e),this.runNext()}async runNext(){if(this.activeCount>=this.maxConcurrency||0===this.queue.length)return;const e=Date.now()-this.lastRunTime;if(e<this.minDelay)return void setTimeout(()=>this.runNext(),this.minDelay-e);const t=this.queue.shift();if(t){this.activeCount+=1,this.lastRunTime=Date.now();try{await t()}finally{this.activeCount-=1,this.runNext()}}}},Rn=_.debounce(()=>{R("device",C()),we()},200),zn=/^blob:(.+?)\/(.+)$/,Pn=(e,t)=>Pe(e,t).map(o=>{N("images")?.[o]?.ref||P(o,()=>({ref:Bt()}));let n=0;for(let e=o-1;e>=t&&!N("images")?.[e].doublePage;e--)N("images")?.[e].doublePage||n++;const r=N("images")?.[o].doublePage??!1,i="Book"===T("viewMode"),a=!r&&(i?n%2==0:n%2==1),l=!r&&(i?n%2==1:n%2==0);return Ri`
      <div
        id="Page${o}"
        class="${co({MangaPage:!0,hide:!!N("images")?.[o].hide,DoublePage:r,LeftPage:a&&!r,RightPage:l&&!r})}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${B("BOOKMARK")}"
            @click=${De}
            value="${o}"
          >
            ${V()?As:Es}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${B("ZOOM_IN")}"
            @click=${bt}
            value="${o}"
          >
            ${Bc}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${B("ZOOM_RESET")}"
            @click=${kt}
            value="${o}"
          >
            ${Pc}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${B("ZOOM_OUT")}"
            @click=${wt}
            value="${o}"
          >
            ${Hc}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${B("ZOOM_HEIGHT")}"
            @click=${Et}
            value="${o}"
          >
            ${ls}
          </button>
          ${T("viewMode").match(/^(Book|Manga)$/)?Ri`
            <button
              class="DoublePage PageButton"
              title="${B("DOUBLE_PAGE")}"
              @click=${()=>{P(o,e=>({doublePage:!e.doublePage}))}}
              value="${o}"
            >
              ${Tc}
            </button>`:Ri`
              <button
                class="ZoomWidth PageButton"
                title="${B("ZOOM_WIDTH")}"
                @click=${yt}
                value="${o}"
              >
                ${ds}
              </button>`}
          <button
            class="Hide PageButton"
            title="${B("HIDE")}"
            @click=${gt}
            value="${o}"
          >
            ${N("images")?.[o].hide?Xs:Ks}
          </button>
          <button
            class="Reload PageButton"
            title="${B("RELOAD")}"
            @click=${mt}
            value="${o}"
          >
            ${Sc}
          </button>
          <span class="PageIndex">${o}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${o}"
            alt="Page ${o}"
            class="${co({PageImg:!0,imgBroken:"error"===N("images")?.[o]?.status})}"
            src=${N("images")?.[o]?.src??Pi}
            style="${Ho(function(e){const t=N("images")?.[e],o=T("viewMode").match(/^(Book|Manga)$/),n="Gallery"===T("viewMode"),r=T("viewMode").startsWith("Fluid"),i="bottom"===T("navbar");return{width:t?.width?`${t.width}px`:"auto",height:t?.height?`${t.height}px`:"auto","max-height":r?`${window.innerHeight+(i?-34:0)}px`:void 0,"min-width":o||n?void 0:`${T("minZoom")}vw`}}(o))}"
            @load=${vt}
            @error=${ft}
            ${Vt(N("images")?.[o].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${o===e?B("END"):`${o} / ${e}`} ]
      </div>
    `}),Bn=e=>Ri`
  <main
    id="Chapter"
    ${Vt(N("chapter"))}
    class="${co({fitWidthIfOversize:T("fitWidthIfOversize"),[T("viewMode")]:!0,separator:"Vertical"===T("viewMode")})}"
    @wheel=${e=>{var t;"FluidLTR"===T("viewMode")?Ve(e):"FluidRTL"===T("viewMode")&&(t=e).deltaY&&(t.currentTarget.scrollLeft-=t.deltaY-t.deltaX,t.preventDefault())}}
  >
    ${Pn(e.pages,e.begin??0)}
  </main>
`,Gn=Kt`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${Xt(Be(Nl))}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${Xt(Be(Rl))}');
  }

  ${Xt(":root {\r\n  /* Theme Colors */\r\n  --theme-primary-color: #007bff; /* Example primary color */\r\n  --theme-primary-text-color: #ffffff; /* Example primary text color */\r\n  --theme-secondary-color: #6c757d; /* Example secondary color */\r\n  --theme-secondary-text-color: #ffffff; /* Example secondary text color */\r\n\r\n  /* Dark Theme */\r\n  --theme-body-background: #212529;\r\n  --theme-body-text-color: #f8f9fa;\r\n  --theme-text-color: #f8f9fa;\r\n  --theme-background-color: #212529;\r\n  --theme-hightlight-color: #343a40;\r\n  --theme-border-color: #495057;\r\n\r\n  /* Custom Color Scales (based on gradient) */\r\n  --mov-color-fill-quiet: #ced4da;\r\n  --mov-color-fill-normal: #adb5bd;\r\n  --mov-color-fill-loud: #007bff;\r\n  --mov-color-border-quiet: #adb5bd;\r\n  --mov-color-border-normal: #6c757d;\r\n  --mov-color-border-loud: #495057;\r\n  --mov-color-on-quiet: #343a40;\r\n  --mov-color-on-normal: #ffffff;\r\n  --mov-color-on-loud: #ffffff;\r\n\r\n  --mov-color-mix-hover: rgba(0, 0, 0, 0.08);\r\n  --mov-color-mix-active: rgba(0, 0, 0, 0.16);\r\n}\r\n\r\n.light {\r\n  /* Light Theme */\r\n  --theme-body-background: #f8f9fa;\r\n  --theme-body-text-color: #212529;\r\n  --theme-text-color: #212529;\r\n  --theme-background-color: #f8f9fa;\r\n  --theme-hightlight-color: #e9ecef;\r\n  --theme-border-color: #dee2e6;\r\n\r\n  /* Custom Color Scales (based on gradient) */\r\n  --mov-color-fill-quiet: #f8f9fa;\r\n  --mov-color-fill-normal: #e9ecef;\r\n  --mov-color-fill-loud: #007bff;\r\n  --mov-color-border-quiet: #e9ecef;\r\n  --mov-color-border-normal: #dee2e6;\r\n  --mov-color-border-loud: #adb5bd;\r\n  --mov-color-on-quiet: #6c757d;\r\n  --mov-color-on-normal: #ffffff;\r\n  --mov-color-on-loud: #ffffff;\r\n\r\n  --mov-color-mix-hover: rgba(0, 0, 0, 0.1);\r\n  --mov-color-mix-active: rgba(0, 0, 0, 0.2);\r\n}\r\n")}
  ${Xt('/*  Simple Normalizer */\r\n#MangaOnlineViewer {\r\n  margin: 0;\r\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n  font-size: 16px;\r\n  line-height: 20px;\r\n  color: var(--theme-body-text-color);\r\n  background-color: var(--theme-body-background);\r\n  padding: 0;\r\n}\r\n\r\na,\r\na:link,\r\na:visited,\r\na:active,\r\na:focus {\r\n  color: var(--theme-body-text-color);\r\n  text-decoration: none;\r\n}\r\n\r\nimg {\r\n  height: auto;\r\n  vertical-align: middle;\r\n  border: 0 none;\r\n}\r\n')}
  ${Xt(":root:not(.light, .dark) {\r\n  --theme-body-background: #25262b;\r\n  --theme-body-text-color: #c1c2c5;\r\n  --theme-text-color: #c1c2c5;\r\n  --theme-primary-color: #1a1b1e;\r\n  --theme-primary-text-color: #c1c2c5;\r\n  --theme-background-color: #25262b;\r\n  --theme-hightlight-color: #2c2e33;\r\n  --theme-border-color: #373a40;\r\n  --theme-secondary-color: #2c2e33;\r\n  --theme-secondary-text-color: #c1c2c5;\r\n}\r\n\r\n:host {\r\n  all: initial;\r\n  display: block;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#MangaOnlineViewer {\r\n  text-decoration: none;\r\n  color: var(--theme-body-text-color);\r\n  background-color: var(--theme-body-background);\r\n  box-sizing: border-box;\r\n  min-height: 100vh;\r\n  --mov-font-size-m: 16px;\r\n}\r\n\r\n#Chapter {\r\n  display: grid;\r\n  grid-template-columns: repeat(1, 1fr);\r\n  min-width: 225px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#Chapter.Vertical:has(+ #Navigation:not(.disabled)),\r\n#Chapter.WebComic:has(+ #Navigation:not(.disabled)) {\r\n  padding-bottom: 31px;\r\n}\r\n\r\n#Chapter.Vertical .PageContent {\r\n  margin-bottom: 8px;\r\n  margin-top: 8px;\r\n}\r\n\r\n.closeButton {\r\n  width: fit-content;\r\n  height: fit-content;\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 10px;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 950;\r\n  cursor: pointer;\r\n}\r\n\r\n.overlay.visible {\r\n  display: block;\r\n}\r\n\r\nselect {\r\n  height: 20px;\r\n  margin: 2px;\r\n}\r\n\r\n:not(.FluidRTL, .FluidLTR).fitWidthIfOversize .PageContent .PageImg {\r\n  max-width: 100%;\r\n  object-fit: contain;\r\n}\r\n\r\n.hideControls .PageFunctions {\r\n  visibility: hidden;\r\n}\r\n")}
  ${Xt('.PageButton .icon-tabler {\r\n  height: 1rem;\r\n  width: 1rem;\r\n  vertical-align: sub;\r\n}\r\n\r\n.PageButton,\r\n.PageButton:visited,\r\n.PageButton:link {\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  padding: 2px;\r\n  min-height: 32px;\r\n  color: var(--mov-color-on-loud);\r\n  background-color: var(--mov-color-fill-loud);\r\n  border-color: var(--theme-border-color);\r\n  text-decoration: none;\r\n}\r\n\r\n.PageButton:active,\r\n.PageButton:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.PageButton[selected] {\r\n  background-color: var(--mov-color-fill-normal);\r\n  color: var(--mov-color-on-normal);\r\n  border: 1px solid var(--theme-border-color);\r\n}\r\n\r\n.PageButton.hidden {\r\n  display: none;\r\n}\r\n\r\n.MangaPage {\r\n  width: 100%;\r\n  display: inline-block;\r\n  text-align: center;\r\n  line-height: 0;\r\n  min-height: 22px;\r\n  min-width: 100%;\r\n}\r\n\r\n.PageContent {\r\n  text-align: center;\r\n  display: inline-block;\r\n  overflow-x: auto;\r\n  max-width: 100%;\r\n  transition: all 0.3s ease-in-out;\r\n  height: 100%;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.MangaPage.hide .PageContent {\r\n  height: 0;\r\n}\r\n\r\n.PageContent .PageImg[src=""],\r\n.PageContent .PageImg:not([src]),\r\n.PageContent .PageImg.imgBroken {\r\n  width: 40vw;\r\n  height: 80vh;\r\n  display: inline-block;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 20%;\r\n  background-color: var(--theme-hightlight-color);\r\n  position: relative;\r\n  text-align: center;\r\n  line-height: 80vh;\r\n  vertical-align: top;\r\n  color: var(--theme-text-color);\r\n  font-size: 16px;\r\n  min-width: 40vw;\r\n  min-height: 50vh;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  margin: 0;\r\n}\r\n\r\n.PageContent .PageImg[src=""]:before,\r\n.PageContent .PageImg:not([src]):before,\r\n.PageContent .PageImg.imgBroken:before {\r\n  content: attr(alt);\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  white-space: pre-wrap;\r\n  text-align: center;\r\n  color: var(--theme-text-color);\r\n  font-size: 16px;\r\n}\r\n\r\n.PageFunctions {\r\n  font-family: monospace;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  gap: 3px;\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n\r\n.PageFunctions > .PageIndex {\r\n  background-color: var(--mov-color-fill-loud);\r\n  color: var(--mov-color-on-loud);\r\n  min-width: 20px;\r\n  text-align: center;\r\n  display: inline-block;\r\n  padding: 3px 5px;\r\n  line-height: 1rem;\r\n  border-radius: 5px;\r\n}\r\n\r\n.PageFunctions .PageButton {\r\n  padding: 3px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0;\r\n  border-width: 0;\r\n  min-height: auto;\r\n  opacity: 0.5;\r\n}\r\n\r\n.PageFunctions:hover .PageButton {\r\n  opacity: 1;\r\n}\r\n\r\n.PageFunctions .PageButton:hover {\r\n  opacity: 0.9;\r\n}\r\n\r\n#Chapter.Vertical .separator {\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-style: italic;\r\n}\r\n\r\n#Chapter.Vertical .separator::before,\r\n#Chapter.Vertical .separator::after {\r\n  content: "";\r\n  flex: 1;\r\n  border-bottom: 1px solid var(--theme-text-color);\r\n}\r\n\r\n#Chapter.Vertical.separator:not(:empty)::before {\r\n  margin-right: 0.25em;\r\n}\r\n\r\n#Chapter.Vertical.separator:not(:empty)::after {\r\n  margin-left: 0.25em;\r\n}\r\n\r\n#Chapter:not(.separator) .separator,\r\n#Chapter:not(.Vertical) .separator {\r\n  display: none;\r\n}\r\n')}
  ${Xt("#Chapter.FluidLTR,\r\n#Chapter.FluidRTL {\r\n  display: flex;\r\n  overflow-x: auto;\r\n  min-width: auto;\r\n\r\n  .ZoomWidth {\r\n    display: none;\r\n  }\r\n\r\n  .PageImg {\r\n    min-width: unset;\r\n  }\r\n\r\n  .MangaPage {\r\n    width: initial;\r\n    min-width: fit-content;\r\n    position: relative;\r\n  }\r\n\r\n  .MangaPage.DoublePage {\r\n    grid-column: span 2;\r\n  }\r\n}\r\n\r\n#Chapter.FluidLTR {\r\n  flex-direction: row;\r\n\r\n  .MangaPage .PageFunctions {\r\n    right: auto;\r\n    left: 0;\r\n    direction: rtl;\r\n  }\r\n}\r\n\r\n#Chapter.FluidRTL {\r\n  flex-direction: row-reverse;\r\n}\r\n")}
  ${Xt("/* Book mode - Left to Right (Western comic/manga style) */\r\n#Chapter:where(.Book, .Manga) {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-auto-flow: row;\r\n  width: 100%;\r\n  min-width: auto;\r\n  gap: 0;\r\n}\r\n\r\n#Chapter:where(.Book, .Manga) .MangaPage {\r\n  width: 100%;\r\n  display: block;\r\n  position: relative;\r\n  min-height: 22px;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Default positioning for all controls in Book mode - top right */\r\n#Chapter:where(.Book, .Manga) .MangaPage .PageFunctions {\r\n  top: 0;\r\n  right: 0;\r\n  left: auto;\r\n  flex-direction: row;\r\n  border-radius: 0 0 0 4px;\r\n}\r\n\r\n/* Left-side images - controls at top left with reversed order */\r\n#Chapter:where(.Book, .Manga) .MangaPage.LeftPage .PageFunctions {\r\n  right: auto;\r\n  left: 0;\r\n  flex-direction: row-reverse;\r\n  border-radius: 0 0 4px 0;\r\n}\r\n\r\n#Chapter:where(.Book, .Manga) .MangaPage.DoublePage {\r\n  grid-column: span 2;\r\n}\r\n\r\n#Chapter:where(.Book, .Manga) .MangaPage .PageContent {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-shrink: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Left page - align image to the right (toward middle) */\r\n#Chapter:where(.Book, .Manga) .MangaPage.LeftPage .PageContent {\r\n  justify-content: flex-end;\r\n  padding-right: 0;\r\n}\r\n\r\n/* Right page - align image to the left (toward middle) */\r\n#Chapter:where(.Book, .Manga) .MangaPage.RightPage .PageContent {\r\n  justify-content: flex-start;\r\n  padding-left: 0;\r\n}\r\n\r\n/* Double page - center the image */\r\n#Chapter:where(.Book, .Manga) .MangaPage.DoublePage .PageContent {\r\n  justify-content: center;\r\n}\r\n\r\n/* Manga mode - Right to Left (Traditional manga/comic style) */\r\n#Chapter.Manga {\r\n  direction: rtl;\r\n}\r\n\r\n#Chapter.Manga .MangaPage {\r\n  direction: ltr; /* Reset text direction for page contents */\r\n}\r\n")}
  ${Xt("#Chapter.Gallery {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  padding: 10px;\r\n}\r\n\r\n.Gallery .MangaPage {\r\n  width: auto;\r\n  min-width: unset;\r\n  flex: 0 1 auto;\r\n}\r\n\r\n.Gallery .MangaPage .PageContent .PageImg {\r\n  min-width: unset;\r\n}\r\n\r\n.Gallery .PageFunctions,\r\n.Gallery .separator {\r\n  display: none;\r\n}\r\n")}
  ${Xt(kn)}
  ${Xt("@-webkit-keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes spin-reverse {\r\n  0% {\r\n    transform: rotate(360deg);\r\n  }\r\n\r\n  to {\r\n    transform: rotate(0);\r\n  }\r\n}\r\n\r\n@keyframes spin-reverse {\r\n  0% {\r\n    transform: rotate(360deg);\r\n  }\r\n\r\n  to {\r\n    transform: rotate(0);\r\n  }\r\n}\r\n\r\n.icon-tabler-loader-2,\r\n.animate-spin {\r\n  -webkit-animation: spin 1s linear infinite;\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n.animate-spin-reverse {\r\n  -webkit-animation: spin-reverse 1s linear infinite;\r\n  animation: spin-reverse 1s linear infinite;\r\n}\r\n")}
`,Hn=(e="#MangaOnlineViewer",t=T("theme"))=>{const o=W(t),n=F(t),r="dark"===T("colorScheme")?o[8]:o[2],i=F(r);return Kt`
    :where(:root),
    ${Xt(e)}, .dark,
    ${Xt(e)}.dark {
      --theme-primary-color: ${Xt(t)};;
      --theme-primary-text-color: ${Xt(n)};;
      --theme-secondary-color: ${Xt(r)};;
      --theme-secondary-text-color: ${Xt(i)};;

      color-scheme: dark;
      --theme-body-background: ${Xt(Fo.dark[600])};;
      --theme-body-text-color: ${Xt(Fo.dark[50])};;
      --theme-text-color: ${Xt(Fo.dark[50])};;
      --theme-background-color: ${Xt(Fo.dark[600])};;
      --theme-hightlight-color: ${Xt(Fo.dark[500])};;
      --theme-border-color: ${Xt(Fo.dark[400])};;

      --mov-color-fill-quiet: ${Xt(o[9])};;
      --mov-color-fill-normal: var(--theme-secondary-color, ${Xt(o[8])};);
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${Xt(o[8])};;
      --mov-color-border-normal: ${Xt(o[7])};;
      --mov-color-border-loud: ${Xt(o[6])};;
      --mov-color-on-quiet: ${Xt(o[4])};;
      --mov-color-on-normal: var(--theme-secondary-text-color, ${Xt(o[3])};);
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 8%;
      --mov-color-mix-active: black 16%;
    }

    .light,
    ${Xt(e)};.light {
      color-scheme: light;
      --theme-body-background: ${Xt(Fo.gray[50])};;
      --theme-body-text-color: ${Xt(Fo.gray[900])};;
      --theme-text-color: ${Xt(Fo.gray[900])};;
      --theme-background-color: ${Xt(Fo.gray[50])};;
      --theme-hightlight-color: ${Xt(Fo.gray[500])};;
      --theme-border-color: ${Xt(Fo.gray[100])};;

      --mov-color-fill-quiet: ${Xt(o[0])};;
      --mov-color-fill-normal: var(--theme-secondary-color, ${Xt(o[1])};);
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${Xt(o[1])};;
      --mov-color-border-normal: ${Xt(o[2])};;
      --mov-color-border-loud: ${Xt(o[4])};;
      --mov-color-on-quiet: ${Xt(o[6])};;
      --mov-color-on-normal: var(--theme-secondary-text-color, ${Xt(o[3])};);
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 10%;
      --mov-color-mix-active: black 20%;
    }
  `},Vn=class extends no{constructor(...e){super(...e),this.mangaPages=0,this.begin=1,this.timeoutMs=3e3,this.status="initial-prompt"}static{this.styles=[Xt("#StartMOV {\r\n  all: revert;\r\n  backface-visibility: hidden;\r\n  font-size: 32px;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  margin: 0 auto;\r\n  padding: 0.5rem 1rem;\r\n  text-align: center;\r\n  border: none;\r\n  border-radius: 10px;\r\n  min-height: 50px;\r\n  width: 80%;\r\n  position: fixed;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  z-index: 105000;\r\n  transition: all 0.4s ease-in-out;\r\n  background-size: 300% 100%;\r\n  background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);\r\n  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n}\r\n\r\n#StartMOV:hover {\r\n  background-position: 100% 0;\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n#StartMOV:focus {\r\n  outline: none;\r\n}\r\n\r\n#pagesSliderVal {\r\n  display: block;\r\n  text-align: center;\r\n  margin-top: 15px;\r\n  font-weight: bold;\r\n}\r\n")]}connectedCallback(){super.connectedCallback(),"initial-prompt"===this.status&&(this.timeoutId=window.setTimeout(()=>{this.handleStart()},this.timeoutMs))}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this.timeoutId)}handleStart(){window.clearTimeout(this.timeoutId),this.dispatchEvent(new CustomEvent("start",{detail:null}))}handleLateStart(e,t){this.dispatchEvent(new CustomEvent("start",{detail:{begin:e,end:t}}))}handleButtonCLick(){this.status="late-start-prompt"}handleDialogClose(e){e.stopPropagation(),window.clearTimeout(this.timeoutId),this.status="late-start-button"}render(){switch(this.status){case"late-start-button":return this.renderLateStartButton();case"late-start-prompt":return this.renderLateStartPrompt();default:return this.renderInitialPrompt()}}renderInitialPrompt(){return Ri`
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
            style="--mov-color-fill-loud: ${Fo.red[700]}; --mov-color-on-loud: white;"
          >
            Cancel
          </mov-button>
          <mov-button
            @click=${this.handleStart}
            style="--mov-color-fill-loud: ${Fo.green[700]}; --mov-color-on-loud: white;"
          >
            Start Now
          </mov-button>
        </div>
      </mov-dialog>
    `}renderLateStartButton(){return Ri`
      <button
        id="StartMOV"
        @click=${this.handleButtonCLick}
      >
        ${B("BUTTON_START")}
      </button>
    `}renderLateStartPrompt(){return this.beginPage??=this.begin,this.endPage??=this.mangaPages,Ri`
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
            <mov-slider
              id="pagesSlider"
              dual
              show-tooltip
              show-ticks
              tick-count="10"
              step="1"
              .value=${[this.beginPage,this.endPage]}
              min="0"
              max="${this.mangaPages}"
              @input=${e=>{this.beginPage=e.detail.value[0],this.endPage=e.detail.value[1]}}
            ></mov-slider>
            <output
              id="pagesSliderVal"
              class="RangeValue"
              for="pagesSlider"
            >
              [${String(this.beginPage).padStart(3,"0")} ,
              ${String(this.endPage).padStart(3,"0")}]
            </output>
          </div>
        </div>
        <div
          slot="footer"
          style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${Fo.red[700]}; --mov-color-on-loud: white;"
          >
            Close
          </mov-button>
          <mov-button
            @click=${()=>this.handleLateStart(this.beginPage??0,this.endPage??this.mangaPages)}
            style="--mov-color-fill-loud: ${Fo.green[700]}; --mov-color-on-loud: white;"
          >
            Run
          </mov-button>
        </div>
      </mov-dialog>
    `}},A([w({type:Number,reflect:!0})],Vn.prototype,"mangaPages",void 0),A([w({type:Number,reflect:!0})],Vn.prototype,"begin",void 0),A([w({type:Number})],Vn.prototype,"timeoutMs",void 0),A([w({type:String,reflect:!0})],Vn.prototype,"status",void 0),A([k()],Vn.prototype,"beginPage",void 0),A([k()],Vn.prototype,"endPage",void 0),Vn=A([io("script-startup")],Vn),Fn=e=>{e.getAttributeNames().forEach(t=>{e?.removeAttribute(t)})},Wn=(...e)=>{e?.forEach(Fn),e?.forEach(At)},Zn=class extends no{constructor(...e){super(...e),this.loadMode="wait"}static{this.styles=[Kt``,Xt(Gn)]}async start(e,t){this.manga&&(document.documentElement.hasAttribute("mov")||(Wn(document.documentElement,document.head,document.body),document.documentElement.setAttribute("mov","")),window.scrollTo(0,0),R("manga",{...this.manga,begin:e??this.manga.begin,pages:t??this.manga.pages}))}firstUpdated(){"always"===this.loadMode&&this.start(),async function(){await c(()=>void 0!==N("manga")),Ce(),window.addEventListener("resize",Rn),window.addEventListener("orientationchange",Rn),window.addEventListener("wheel",_.throttle(J,500)),pt()}(),async function(){await c(()=>void 0!==N("manga"));const o=N("manga"),n=o.begin??1;Nn=new $n(T("loadSpeed"),o.timer),t("Loading Images"),t(`Speed: ${T("loadSpeed")}`),t(`Lazy: ${o.lazy??T("lazyLoadImages")}, Starting from: ${T("lazyStart")}`),we(),f(o)?(t("Method: Images:",o.listImages),dt(n,o)):b(o)?(t("Method: Pages:",o.listPages),ct(n,o)):function(e){return"bruteForce"in e&&!l(e.bruteForce)}(o)?(t("Method: Brute Force"),o.bruteForce({begin:n,addImg:lt,loadImages(e){dt(n,{...o,listImages:e})},loadPages(e,t,r){ct(n,{...o,listPages:e,img:t,lazyAttr:r})},wait:0})):e("No Loading Method Found"),Ro.listen((e,t,n)=>{if("currentPage"===n&&e.currentPage>t.currentPage)for(let t=e.currentPage;t<Math.min(e.currentPage+5,o.pages+1);t++)void 0===e.images?.[t]?.src&&"loading"!==e.images?.[t]?.status&&(f(o)?lt(o,t,o.listImages[t-1]):b(o)&&st(o,t,o.listPages[t-1]))})}()}render(){const e=N("manga"),t=N("dialog");return Ri`
      <style>
        ${Hn()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${co({[T("colorScheme")]:!0,hideControls:T("hidePageControls"),bookmarked:!!V(),[N("device")]:!0})}"
        style="${Ho({[`padding-${T("navbar")}`]:"34px"})}"
        .locale="${T("locale")}"
      >
        ${e?Ri` <reader-header .manga=${e}></reader-header>
              ${Bn(e)}
              <navbar-thumbnails .mode=${T("navbar")}></navbar-thumbnails>
              <manga-pagination
                .mode="${T("pagination")}"
                .startPage=${e.begin}
                .totalPages=${e.pages}
                .currentPage=${N("currentPage")}
                .next=${e.next}
                .prev=${e.prev}
              ></manga-pagination>
              <keybindings-panel></keybindings-panel>
              <bookmark-panel></bookmark-panel>
              <settings-panel></settings-panel>
              <moaqz-toaster dismissable></moaqz-toaster>`:Ri(Un||(Un=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}([' <script-startup\n              .mangaPages="','"\n              begin="','"\n              status="','"\n              @start=',"\n            ></script-startup>"])),this.manga?.pages,this.manga?.begin,"never"===this.loadMode?"late-start-button":"initial-prompt",e=>{this.start(e.detail?.begin,e.detail?.end)})}
        ${t?Ri`
              <mov-dialog
                open
                .icon=${t.icon}
                @close=${()=>R("dialog",null)}
              >
                <span slot="label">${t.title}</span>
                ${t.content} ${t.footer}
              </mov-dialog>
            `:""}
      </div>
    `}},A([w({type:String,reflect:!0})],Zn.prototype,"loadMode",void 0),A([w({type:Object})],Zn.prototype,"manga",void 0),Zn=A([io("manga-online-viewer"),(0,vn.useStores)($o,No,Ro)],Zn),jn=['/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',"/* Make clicks pass-through */\n#nprogress {\n  pointer-events: none;\n}\n\n#nprogress .bar {\n  background: #29d;\n\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 2px;\n}\n\n/* Fancy blur effect */\n#nprogress .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n  opacity: 1.0;\n\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n          transform: rotate(3deg) translate(0px, -4px);\n}\n\n/* Remove these to get rid of the spinner */\n#nprogress .spinner {\n  display: block;\n  position: fixed;\n  z-index: 1031;\n  top: 15px;\n  right: 15px;\n}\n\n#nprogress .spinner-icon {\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n\n  border: solid 2px transparent;\n  border-top-color: #29d;\n  border-left-color: #29d;\n  border-radius: 50%;\n\n  -webkit-animation: nprogress-spinner 400ms linear infinite;\n          animation: nprogress-spinner 400ms linear infinite;\n}\n\n.nprogress-custom-parent {\n  overflow: hidden;\n  position: relative;\n}\n\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n  position: absolute;\n}\n\n@-webkit-keyframes nprogress-spinner {\n  0%   { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n@keyframes nprogress-spinner {\n  0%   { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n","#nprogress .bar {\r\n  background: #29d;\r\n  position: fixed;\r\n  z-index: 1031;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 4px;\r\n}\r\n\r\nhtml[mov] body > *:not(manga-online-viewer, #nprogress) {\r\n  /* biome-ignore lint/complexity/noImportantStyles: requirement */\r\n  display: none !important;\r\n}\r\n\r\nhtml[mov] {\r\n  all: unset;\r\n  font-size: 16px;\r\n}\r\n"].join("\n"),qn={eq:(e,t)=>e.textContent?.trim()===t,starts:(e,t)=>!!e.textContent?.trim()?.startsWith(t),ends:(e,t)=>!!e.textContent?.trim()?.endsWith(t)},Qn=(e,t)=>xt(e,t,"eq"),Yn=(e,t,o="a")=>It(e,t,"eq",o),Xn=(e,t,o="a")=>It(e,t,"starts",o),Kn=(e,t,o="a")=>It(e,t,"ends",o),Jn={name:"Asura Scans",url:/https?:\/\/(www.)?(asurascans|asuracomics).(com|net)\/.+/,homepage:"https://asurascans.com/",language:[Wt.ENGLISH],category:Ut.MANGA,waitEle:'astro-island[component-url*="ChapterReader"]',run(){const e=document.querySelector('astro-island[component-url*="ChapterReader"]'),t=JSON.parse(e?.getAttribute("props")||"{}"),o=t.seriesSlug?.[1],n=(t.pages?.[1]||[]).map(e=>e[1]?.url?.[1]).filter(Boolean);return{title:`${t.seriesName?.[1]} - Chapter ${t.chapterName?.[1]}`,series:`/comics/${o}`,pages:n.length,prev:Yn("span","Prev","a")?.getAttribute("href")||document.querySelector('link[rel="prev"]')?.getAttribute("href")||void 0,next:Yn("span","Next","a")?.getAttribute("href")||document.querySelector('link[rel="next"]')?.getAttribute("href")||void 0,listImages:n}}},er={name:"Batoto",url:/https?:\/\/(?:www\.)?(?:fto|jto|hto|dto|mto|wto|bato|battwo|batotwo|comiko|batocomic|readtoto|zbato|xbato|mangatoto)\.(?:to|com|net|org)\/(chapter|title).*/,homepage:"https://rentry.co/batoto",language:[Wt.ENGLISH],category:Ut.MANGA,waitEle:'div[name="image-item"] img, .page-img',run(){if(window.location.pathname.startsWith("/title")){"?load=2"!==window.location.search&&(window.location.search="?load=2");const e=[...document.querySelectorAll('div[name="image-item"] img')];return{title:document.querySelector("h6")?.textContent?.trim(),series:document.querySelector("h3 a")?.getAttribute("href"),pages:e.length,prev:Kn("span","Prev Chapter","a")?.getAttribute("href"),next:Xn("span","Next Chapter","a")?.getAttribute("href"),listImages:e.map(e=>e.getAttribute("src")??"")}}const e=[...document.querySelectorAll(".page-img")];return{title:document.querySelector(".nav-title a")?.textContent?.trim(),series:document.querySelector(".nav-title a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".nav-prev a")?.getAttribute("href"),next:document.querySelector(".nav-next a")?.getAttribute("href"),listImages:e.map(e=>e.getAttribute("src")??"")}}},tr={name:"BilibiliComics",url:/https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/,homepage:"https://www.bilibilicomics.net/",language:[Wt.ENGLISH],category:Ut.MANGA,waitEle:"#__NUXT_DATA__",async run(){const e=JSON.parse(document.querySelector("#__NUXT_DATA__")?.innerHTML??"").filter(e=>"string"==typeof e&&/.(png|jpg|jpeg|gif|bmp|webp)$/i.exec(e));return{title:document.querySelector(".chapterTitle")?.textContent?.trim(),series:document.querySelector(".book-name")?.getAttribute("href"),pages:e.length,prev:document.querySelectorAll(".pre-next-btns").item(0)?.getAttribute("href"),next:document.querySelectorAll(".pre-next-btns").item(2)?.getAttribute("href"),listImages:e.map(e=>`https://static.comicfans.io/${e}`)}}},or={name:"Comick",url:/https?:\/\/(www\.)?comick.io\/.+/,homepage:"https://comick.io/",language:[Wt.ENGLISH],category:Ut.MANGA,waitFunc:()=>/\/([^/]+)-chapter.+$/.test(window.location.pathname),waitEle:"#__NEXT_DATA__",waitTime:3e3,run(){const e=JSON.parse(document.getElementById("__NEXT_DATA__")?.innerHTML??"")?.props?.pageProps,t=e?.chapter?.md_images?.map(e=>`https://meo.comick.pictures/${e?.b2key}`);return{title:e?.seoTitle??`${e.chapter?.md_comics?.title} ${e?.chapter?.chap}`,series:`/comic/${e?.chapter?.md_comics?.slug}`,pages:t?.length,prev:e?.prev?.href,next:e?.next?.href,listImages:t}}},nr=null,"undefined"!=typeof window&&window.location.hostname.includes("comix.to")){const t=JSON.parse;JSON.parse=(o,n)=>{const r=t(o,n);try{r?.result?.pages&&e("Intercepted chapter pages data from JSON.parse",nr=r.result.pages)}catch(e){}return r}}rr={name:"Comix.to",homepage:"https://comix.to/",url:/https?:\/\/comix\.to\/(title|comic)\/.+\/.+/,language:Wt.ENGLISH,category:Ut.MANGA,async run(){let t=0,o=null,n=null;for(;t<5e3&&(o||(o=Mt()),n||(n=_t()),!o||!n);)await new Promise(e=>setTimeout(e,100)),t+=100;!o&&nr&&(o=nr);let r=o?.items?.length||0;0===r&&(r=function(){const e=document.querySelector('select[aria-label*="page" i], select[class*="page" i], select[id*="page" i]');return e?e.querySelectorAll("option").length:0}()),0===r&&(r=function(){const e=[...document.querySelectorAll("span, div, button, option")];for(const t of e){const e=t.textContent||"",o=/^\s*1\s*(?:\/|of)\s*(\d+)\s*$/i.exec(e.trim());if(o){const e=parseInt(o[1],10);if(e>0&&e<500)return e}}return 0}()),0===r&&(r=[...document.querySelectorAll("#app-root img, .rpage-body img")].filter(St).length||40),e(`Identified expected page count: ${r}`);const i=await async function(t,o,n){const r=document.createElement("div");r.style.cssText="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(33, 37, 41, 0.95); z-index: 999999; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; font-family: sans-serif; font-size: 20px;",r.innerHTML='\n    <div style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">MangaOnlineViewer</div>\n    <div id="mov-loading-text">Preparing pages...</div>\n    <div style="margin-top: 20px; width: 200px; height: 6px; background: #495057; border-radius: 3px; overflow: hidden;">\n      <div id="mov-loading-bar" style="width: 0; height: 100%; background: #37b24d; transition: width 0.1s;"></div>\n    </div>\n  ',document.body.appendChild(r);const i=(e,t)=>{const o=t>0?Math.round(e/t*100):0,n=document.getElementById("mov-loading-text"),r=document.getElementById("mov-loading-bar");n&&(n.textContent=`Scrolling and waiting for pages to load: ${e} / ${t||"?"}`),r&&(r.style.width=t>0?`${o}%`:"50%")};i(0,t);const a=window.scrollY,l=[];try{for(let r=0;r<t;r++){let a=null,s=0;for(;s<5e3;){const e=[...document.querySelectorAll("img")].filter(o);if(e[r]){a=e[r];break}await new Promise(e=>setTimeout(e,100)),s+=100}if(!a){e(`Failed to find image element for page ${r+1}`);continue}a.scrollIntoView({behavior:"auto",block:"center"});let c=0,d="";for(;c<5e3;){const e=a.src||a.getAttribute("src")||"";if(e&&n(e)&&(a.naturalWidth>250||a.complete)){const t=a.naturalWidth||a.width||0;if(0===t||t>=250){d=e;break}}await new Promise(e=>setTimeout(e,100)),c+=100}d?l.push(d):(e(`Timeout waiting for image ${r+1} to load`),l.push(a.src||a.getAttribute("src")||"")),i(l.length,t)}}finally{window.scrollTo(0,a),r.remove()}if(0===l.length)throw new Error("No images collected from the page");return await Promise.all(l.map(async e=>e.startsWith("blob:")?await async function(e){try{const t=await(await fetch(e)).blob();return new Promise((e,o)=>{const n=new FileReader;n.onloadend=()=>e(n.result),n.onerror=o,n.readAsDataURL(t)})}catch(t){return console.error(`Failed to convert blob URL ${e} to data URL:`,t),e}}(e):e))}(r,St,Ct),a=document.getElementById("initial-data"),l=a?JSON.parse(a.textContent||"{}"):{};let s="",c="";if(l.queries)for(const e of Object.keys(l.queries)){const t=l.queries[e];if(t?.title&&t.url){s=t.title,c=t.url;break}}s||(s=document.querySelector("title")?.textContent?.trim()||""),c||(c=document.querySelector('a[href^="/title/"]:not([href*="-chapter-"])')?.getAttribute("href")||"");let d=null,h=null;const p=/\/title\/([^/]+)/.exec(window.location.pathname),u=p?p[1]:"",m=/\/(\d+)-chapter-/.exec(window.location.pathname),g=m?parseInt(m[1],10):0;if(n&&g&&u){const e=e=>parseFloat(e.number??e.chapterNumber??"0"),t=[...n].sort((t,o)=>e(t)-e(o)),o=t.findIndex(e=>parseInt(e.id,10)===g);if(-1!==o){if(o>0){const e=t[o-1],n=e.number??e.chapterNumber;d=`/title/${u}/${e.id}-chapter-${n}`}if(o<t.length-1){const e=t[o+1],n=e.number??e.chapterNumber;h=`/title/${u}/${e.id}-chapter-${n}`}}}if(!d&&!h){const e=function(){const{prev:e,next:t}=function(){const e=[...document.querySelectorAll("a")];let t=null,o=null;for(const n of e){const e=n.getAttribute("href");if(!e?.includes("/title/")||!/\/\d+-chapter-/.test(e))continue;const r=(n.textContent||"").toLowerCase().trim(),i=(n.getAttribute("aria-label")||"").toLowerCase();(r.includes("next")||i.includes("next")||n.querySelector('[class*="next"]')||n.querySelector('[class*="right"]'))&&(t=e),(r.includes("prev")||r.includes("previous")||i.includes("prev")||i.includes("previous")||n.querySelector('[class*="prev"]')||n.querySelector('[class*="left"]'))&&(o=e)}return{prev:o,next:t}}();return e||t?{prev:e,next:t}:function(){const e=[...document.querySelectorAll("a")],t=[];for(const o of e){const e=o.getAttribute("href");if(!e?.includes("/title/")||!/\/\d+-chapter-/.test(e))continue;const n=/-chapter-(\d+(\.\d+)?)/.exec(e);n&&t.push({href:e,num:parseFloat(n[1])})}if(0===t.length)return{prev:null,next:null};const o=new Set,n=t.filter(e=>{const t=e.href.split("#")[0].split("?")[0];return!o.has(t)&&(o.add(t),!0)});n.sort((e,t)=>e.num-t.num);const r=window.location.pathname.split("#")[0].split("?")[0],i=n.findIndex(e=>e.href.includes(r)||r.includes(e.href));let a=null,l=null;return-1!==i&&(i>0&&(a=n[i-1].href),i<n.length-1&&(l=n[i+1].href)),{prev:a,next:l}}()}();d=e.prev,h=e.next}return{title:s,series:c,pages:i.length,prev:d,next:h,listImages:i}}},ir={name:"DemonicScans",url:/https?:\/\/(www\.)?demonicscans\.org\/(title\/.+\/chapter\/.+|chaptered\.php\?manga=\d+&chapter=.+)/,homepage:"https://demonicscans.org/",language:[Wt.ENGLISH],category:Ut.MANGA,waitEle:'img.imgholder[src*="cdn.demoniclibs.com"]',async run(){const e=[...document.querySelectorAll('img.imgholder[src*="cdn.demoniclibs.com"]')].map(e=>e.getAttribute("data-src")||e.getAttribute("src")||"");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("h1 a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prevchap")?.getAttribute("href"),next:document.querySelector(".nextchap")?.getAttribute("href"),listImages:e}}},ar={name:"Dynasty-Scans",url:/https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/,homepage:"https://dynasty-scans.com/",language:[Wt.ENGLISH],category:Ut.MANGA,run:()=>({title:document.querySelector("#chapter-title")?.textContent?.trim(),series:document.querySelector("#chapter-title a")?.getAttribute("href"),pages:unsafeWindow.pages.length,prev:document.querySelector("#prev_link")?.getAttribute("href"),next:document.querySelector("#next_link")?.getAttribute("href"),listImages:unsafeWindow.pages.map(e=>e.image)})},lr={name:"Flame Comics",url:/https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/,homepage:"https://flamecomics.xyz/",language:[Wt.ENGLISH],category:Ut.MANGA,run(){const e=JSON.parse(document.getElementById("__NEXT_DATA__")?.innerHTML??""),t=e?.props?.pageProps?.chapter,o=_.keys(t?.images).map(e=>`https://cdn.flamecomics.xyz/uploads/images/series/${t?.series_id}/${t?.token}/${t?.images?.[e]?.name}?${t?.unix_timestamp}`);return{title:`${t?.title} ${t?.chapter}`,series:`../${t?.series_id}`,pages:o.length,prev:e?.props?.pageProps?.previous,next:e?.props?.pageProps?.next,listImages:o}}},sr={name:["FoOlSlide","Kireicake"],url:/^(?!.*jaiminisbox).*\/read\/.+/,homepage:["https://github.com/saintly2k/FoOlSlideX","https://reader.kireicake.com"],language:[Wt.ENGLISH],obs:"Any Site that uses FoOLSlide",category:Ut.MANGA,waitEle:"img.open",run(){const e=[...document.querySelectorAll(".topbar_left .dropdown_parent:last-of-type li")],t=e.findIndex(e=>{const t=e.querySelector("a")?.getAttribute("href");return!!t&&window.location.href.startsWith(t)}),o=[...document.querySelectorAll(".topbar_right .dropdown li")],n=[...document.querySelectorAll(".inner img:not(.open)")],r=n.length>1?n.length:o.length,i={title:e.at(t)?.querySelector("a")?.textContent?.trim()??document.querySelector("title")?.textContent?.trim(),series:document.querySelector("div.tbtitle div.text a")?.getAttribute("href"),pages:r,prev:e.at(t+1)?.querySelector("a")?.getAttribute("href"),next:e.at(t-1)?.querySelector("a")?.getAttribute("href")};return n.length>1?{...i,listImages:n.map(e=>e.getAttribute("src")??"")}:{...i,listPages:Array(r).fill(0).map((e,t)=>`${window.location.href.replace(/\/\d+$/,"")}/${t+1}`),img:"img.open"}}},cr={name:["Ikigai Mangas - EltaNews","Ikigai Mangas - Ajaco"],url:/https?:\/\/(visorikigai|visualikigai).(ajaco|eltanews|foodib|jobswu).(com|net|site)\/capitulo\/\d+/,homepage:["https://visorikigai.eltanews.com/","https://visorikigai.ajaco.net/"],language:[Wt.SPANISH],category:Ut.MANGA,run(){const e=document.querySelector('script[type="qwik/json"]')?.textContent?.match(/http[^'"]+webp/gi)??[];return{title:document.querySelector("title")?.text.replace(" — Manga en línea | MangaOni",""),pages:e?.length,prev:Yn("span","Siguiente")?.getAttribute("href"),next:Yn("span","Anterior")?.getAttribute("href"),listImages:e}}},dr=e=>new Promise(t=>setTimeout(t,e)),hr={name:"Kagane",homepage:"https://kagane.org/",url:/https:\/\/(www\.)?kagane\.org\/series\/.+\/reader\/.+/,language:Wt.ENGLISH,category:Ut.MANGA,waitEle:".reader-page img",async run(){const e=window.location.href,t=e.match(/series\/([^/]+)/)?.[1],o=e.match(/reader\/([^/]+)/)?.[1],n=localStorage.getItem("rsch_did"),r={};n&&(r["X-Rsch-Did"]=n);const i=await fetch(`https://api.kagane.org/api/v1/series/${t}`,{headers:r}).then(e=>e.json()),a=(await fetch(`https://api.kagane.org/api/v1/books/${t}`,{headers:r}).then(e=>e.json())).data.content,l=a.find(e=>e.id===o),s=a.findIndex(e=>e.id===o),c=a[s+1],d=a[s-1];return{title:`${i.data.name} - ${l?.metadata?.title}`,series:`/series/${t}`,pages:l?.media?.pagesCount??0,prev:c?`/series/${t}/books/${c.id}`:void 0,next:d?`/series/${t}/books/${d.id}`:void 0,listImages:await Ot(l?.media?.pagesCount??0)}}},pr={name:"KuManga",url:/https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/,homepage:"https://www.kumanga.com/",language:[Wt.SPANISH],category:Ut.MANGA,run(){const e=document.querySelectorAll("select").item(1).querySelector("option[selected]");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("h2 a")?.getAttribute("href"),pages:unsafeWindow.pUrl.length,prev:`/manga/leer/${e?.previousElementSibling?.getAttribute("value")}`,next:`/manga/leer/${e?.nextElementSibling?.getAttribute("value")}`,listImages:unsafeWindow.pUrl.map(e=>e.imgURL)}}},ur={name:"LectorXD",url:/https?:\/\/(www\.)?lectorxd\.com\/.+\/leer\/.+/,homepage:"https://lectorxd.com/",language:[Wt.SPANISH],category:Ut.MANGA,waitEle:".page-container img, img.page-image, .page-container, astro-island",run(){let e=[...document.querySelectorAll('.page-container img, img.page-image, .page-image img, div[class*="page-container"] img')].map(e=>e.getAttribute("data-src")||e.getAttribute("src")||"").filter(e=>e.trim().length>0).map(e=>e.startsWith("http")?e:new URL(e,window.location.href).href);if(0===e.length){const t=document.querySelector("astro-island")?.getAttribute("props");if(t){const o=t.match(/https?:\/\/[^"'\s\\]+\.(jpg|jpeg|png|webp|avif)[^"'\s\\]*/gi);o&&(e=o)}}return{title:document.querySelector("h1")?.textContent?.trim()||document.title?.replace(/\s*[-|]\s*Lector\s*XD.*$/i,"")?.trim()||void 0,series:document.querySelector('a[href*="/manga/"], a[href*="/manhwa/"], a[href*="/manhua/"], a[href*="/comic/"], a[href*="/series/"]')?.getAttribute("href")||window.location.pathname.replace(/\/leer\/.*/,""),pages:e.length,prev:document.querySelector('a[title*="Anterior" i], a[aria-label*="Anterior" i], a[name*="anterior" i]')?.getAttribute("href")||Xn("a, span, button","Anterior")?.getAttribute("href")||document.querySelector('link[rel="prev"]')?.getAttribute("href")||void 0,next:document.querySelector('a[title*="Siguiente" i], a[aria-label*="Siguiente" i], a[name*="siguiente" i]')?.getAttribute("href")||Xn("a, span, button","Siguiente")?.getAttribute("href")||document.querySelector('link[rel="next"]')?.getAttribute("href")||void 0,listImages:e}}},mr={name:"LeerCapitulo",url:/https?:\/\/(www.)?leercapitulo.co\/leer\/.+/,homepage:"https://www.leercapitulo.co/",language:[Wt.SPANISH],category:Ut.MANGA,waitEle:"#page_select",run(){const e=[...document.querySelectorAll("#page_select option")].map(e=>e.getAttribute("value")??"");return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector(".chapter-title a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".pre")?.getAttribute("href"),next:document.querySelector(".next")?.getAttribute("href"),listImages:e}}},gr={name:"LHTranslation",url:/https?:\/\/(www\.)?lhtranslation.net\/read.+/,homepage:"https://lhtranslation.net/",language:[Wt.ENGLISH],category:Ut.MANGA,run(){const e=document.querySelector(".form-control option:checked"),t=[...document.querySelectorAll("img.chapter-img")];return{title:document.querySelector(".chapter-img.tieude font")?.textContent?.trim(),series:document.querySelector(".navbar-brand.manga-name")?.getAttribute("href"),pages:t.length,prev:e?.nextElementSibling?.getAttribute("value"),next:e?.previousElementSibling?.getAttribute("value"),listImages:t.map(e=>e.getAttribute("src")??"")}}},vr={name:"Local Files",url:/(file:\/\/\/.+(index)?.html)/,homepage:"/index.html?raw=1",language:[Wt.RAW],category:Ut.MANGA,run(e){const t=e??parseInt(/\d+/.exec(window.location.search)?.toString()??"5",10);return{title:"Placeholder Manga Loaded",series:"?reload",pages:"MangaOnlineViewer Script"===document.title?t:0,begin:1,prev:"?pages=50",next:"?pages=1",listImages:[Ge(1970,1400,"#2D1657"),Ge(985,1400,"#152C55"),Ge(985,1400,"#7A1420"),Ge(1970,1400,"#806D15"),Ge(985,1400,"#0F5B30"),Ge(1970,1400,"#1a3e3c"),Ge(985,1400,"#480f5b"),Ge(985,1400,"#a9bf7a"),Ge(985,1400,"#147a56"),Ge(1970,1400,"#190343"),Ge(985,1400,"#d5b91e"),Ge(985,1400,"#836ecd"),Ge(985,1400,"#bf19b2"),Ge(985,1400,"#152055"),...Array(t).fill(0).map(He)]}}},fr={name:"M440",url:/https?:\/\/(www\.)?m440.in\/manga\/.+\/.+\/\d+/,homepage:"https://m440.in/",language:[Wt.SPANISH],category:Ut.MANGA,run(){const e=[...document.querySelectorAll("#all img")],t=document.querySelector("#chapter-list li.active");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("#navbar-collapse-1 ul:nth-child(2) a")?.getAttribute("href"),pages:e.length,prev:t?.nextElementSibling?.firstElementChild?.getAttribute("href"),next:t?.previousElementSibling?.firstElementChild?.getAttribute("href"),listImages:e.map(e=>e.getAttribute("data-src")??"")}}},br=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/,wr={name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod","Hades Scans"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/","https://lectorhades.latamtoon.com"],language:[Wt.ENGLISH],obs:"Any Site that uses Madara WordPress Plugin",category:Ut.MANGA,waitFunc:()=>{const e=Tt();return e.length>0&&e.every(e=>e&&br.test(e))},run(){const e=Tt();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}}},kr={name:"MangaBall",homepage:"https://mangaball.net/",url:/https?:\/\/mangaball\.net\/chapter-detail\/.+/,language:Wt.ENGLISH,category:Ut.MANGA,run:async()=>{const e=[...document.querySelectorAll("script")].find(e=>e.textContent?.includes("chapterImages"))?.textContent;if(!e)return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector('a[href*="/title-detail/"]')?.getAttribute("href")??document.querySelector('a[href*="/manga-detail/"]')?.getAttribute("href"),pages:0,listImages:[]};const t=e.match(/titleId\s*=\s*[`'"](.+?)[`'"]/)?.[1],o=e.match(/chapterNumber\s*=\s*[`'"](.+?)[`'"]/)?.[1],n=e.match(/chapterVolume\s*=\s*[`'"](.+?)[`'"]/)?.[1],r=e.match(/chapterLanguage\s*=\s*[`'"](.+?)[`'"]/)?.[1],i=JSON.parse(e.match(/chapterImages\s*=\s*JSON\.parse\(\s*[`'"](.+?)[`'"]\s*\)/)?.[1]??e.match(/chapterImages\s*=.*(\[.*?\])/)?.[1]??"[]"),a=document.querySelector('meta[name="csrf-token"]')?.getAttribute("content")||"",l=((await(await fetch("/api/v1/chapter/chapter-listing-by-title-id/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRF-TOKEN":a},body:`title_id=${t}&lang=${r}`})).json()).ALL_CHAPTERS||[]).sort((e,t)=>t.number_float-e.number_float),s=e=>{const t=parseFloat(o||"0"),i=l.findIndex(e=>e.number_float===t);if(-1===i)return;const a="next"===e?-1:1,s=i+a,c=String(n);for(let e=s;e>=0&&e<l.length;e+=a){const t=l[e].translations.find(e=>e.language===r&&String(e.volume)===c);if(t)return t.url}};return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector(`a[href*="${t}"]`)?.getAttribute("href")??document.querySelector('a[href*="/title-detail/"]')?.getAttribute("href")??document.querySelector('a[href*="/manga-detail/"]')?.getAttribute("href"),pages:i.length,prev:s("prev"),next:s("next"),listImages:i}}},yr={name:"MangaBuddy",url:/https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/,homepage:"https://mangabuddy.com/",language:[Wt.ENGLISH],category:Ut.MANGA,waitVar:"chapImages",run(){const e=unsafeWindow.chapImages.split(",").map(e=>new URL(e).pathname.replace("/res/","https://sb.mbcdn.xyz/"));return{title:document.querySelector(".chapter-info")?.textContent?.trim(),series:document.querySelector("#breadcrumbs-container div:nth-child(2) a")?.getAttribute("href"),pages:e.length,prev:document.querySelector("a.prev")?.getAttribute("href"),next:document.querySelector("a.next")?.getAttribute("href"),listImages:e}}},Er={name:"MangaDex",url:/https?:\/\/(www\.)?mangadex.org/,homepage:"https://mangadex.org/",language:[Wt.ENGLISH],category:Ut.MANGA,waitEle:"#chapter-selector a",async run(){const e=`https://api.mangadex.org/at-home/server/${/\/chapter\/([^/]+)(\/\d+)?/.exec(window.location.pathname)?.at(1)}`,t=await fetch(e).then(async e=>e.json()),o=t.chapter.data,n=document.querySelectorAll("#chapter-selector a");return{title:document.querySelector("title")?.text.replace(" - MangaDex",""),series:document.querySelector("a.text-primary[href^='/title/']")?.getAttribute("href"),pages:o.length,prev:n?.item(0)?.getAttribute("href"),next:n?.item(1)?.getAttribute("href"),listImages:o.map(e=>`${t.baseUrl}/data/${t.chapter.hash}/${e}`)}}},Ar={name:["MangaFox","MangaHere"],url:/https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//,homepage:["https://fanfox.net/","https://www.mangahere.cc/"],language:[Wt.ENGLISH],category:Ut.MANGA,waitVar:"chapterid",async run(){const e=document.querySelector("#dm5_key")?.getAttribute("value"),t={method:"GET",headers:{"Content-Type":"text/plain"}},o=Array(unsafeWindow.imagecount).fill(0).map(async(o,n)=>{const r=`chapterfun.ashx?cid=${unsafeWindow.chapterid??unsafeWindow.chapter_id}&page=${n}&key=${e}`,i=await fetch(r,t).then(async e=>e.text());return(0,eval)(i),d}),n=await Promise.all(o);return{title:document.querySelector(".reader-header-title div")?.textContent?.trim(),series:document.querySelector(".reader-header-title a")?.getAttribute("href"),pages:unsafeWindow.imagecount,prev:unsafeWindow.prechapterurl,next:unsafeWindow.nextchapterurl,listImages:n.map((e,t)=>e[0===t?0:1])}}},xr={name:"Mangago",url:/https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/,homepage:"https://www.mangago.me/",language:[Wt.ENGLISH],category:Ut.MANGA,waitVar:"imgsrcs",run(){const e=CryptoJS.enc.Hex.parse("e11adc3949ba59abbe56e057f20f883e"),t={iv:CryptoJS.enc.Hex.parse("1234567890abcdef1234567890abcdef"),padding:CryptoJS.pad.ZeroPadding},o=CryptoJS.AES.decrypt(unsafeWindow.imgsrcs,e,t).toString(CryptoJS.enc.Utf8).split(",");return{title:`${unsafeWindow.manga_name} ${unsafeWindow.chapter_name}`,series:unsafeWindow.mid,pages:unsafeWindow.total_pages,prev:document.querySelector(".recom p:nth-child(5) a")?.getAttribute("href"),next:unsafeWindow.next_c_url,listImages:o,before(){o.some(e=>""===e)&&document.querySelector("#nform")?.submit()}}}},Ir={name:"MangaHub",url:/https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/,homepage:"https://mangahub.io/",language:[Wt.ENGLISH],category:Ut.MANGA,waitEle:"#select-chapter",async run(){const e={query:`{chapter(x:m01,slug:"${unsafeWindow.CURRENT_MANGA_SLUG??window.location.pathname.split("/")[2]}",number:${window.location.pathname.split("/")[3].replace("chapter-","")}){pages}}`},t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json","x-mhub-access":function(){const e=new RegExp("mhub_access=([^;]+)").exec(document.cookie);return null!=e?decodeURIComponent(e[1]):null}()??""}},o=await fetch("https://api.mghcdn.com/graphql",t).then(async e=>e.json()),n=JSON.parse(o?.data.chapter.pages.toString());return{title:document.querySelector("#mangareader h3")?.textContent?.trim(),series:document.querySelector("#mangareader a")?.getAttribute("href"),pages:n.i.length,prev:document.querySelector(".previous a")?.getAttribute("href"),next:document.querySelector(".next a")?.getAttribute("href"),listImages:n.i.map(e=>`https://imgx.mghcdn.com/${n.p+e}`)}}},Mr={name:["MangaKakalot","NeloManga ","MangaNato","NatoManga","MangaBats"],url:/https?:\/\/(www\.)?(read|chap)?(nelomanga|mangakakalot|natomanga|manganato|mangabats|mangakakalove).(com|gg|net).*\/(chapter|manga)\/.+\/.+/,homepage:["https://mangakakalot.gg/","https://www.nelomanga.com/","https://www.manganato.gg/","https://www.natomanga.com/","https://www.mangabats.com/"],language:[Wt.ENGLISH],category:Ut.MANGA,waitEle:".navi-change-chapter-btn-prev, .next, .navi-change-chapter-btn-next, .back",run(){const e=[...document.querySelectorAll("#vungdoc img, .container-chapter-reader img")];return{title:document.querySelector(".info-top-chapter h2, .imageOptions-chapter-info-top h1, .panel-chapter-info-top h1")?.textContent?.trim(),series:document.querySelectorAll("span a[title]").item(1).getAttribute("href"),pages:e.length,prev:document.querySelector(".navi-change-chapter-btn-prev, .next")?.getAttribute("href"),next:document.querySelector(".navi-change-chapter-btn-next, .back")?.getAttribute("href"),listImages:e.map(e=>e.getAttribute("src")??"")}}},_r={name:"MangaOni",url:/https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/,homepage:"https://manga-oni.com/",language:[Wt.SPANISH],category:Ut.MANGA,run(){document.querySelector("#c_list")?.dispatchEvent(new Event("mouseover"));const e=document.querySelector("#c_list option:checked"),t=[...document.querySelectorAll("#slider img")];return{title:document.querySelector("title")?.text.replace(" — Manga en línea | MangaOni",""),pages:t?.length,prev:e?.nextElementSibling?.getAttribute("value"),next:e?.previousElementSibling?.getAttribute("value"),listImages:t.map(e=>e.getAttribute("data-src")??e.getAttribute("src")??"")}}},Sr={name:"MangaPark",url:/https?:\/\/(www\.)?(mangapark|mpark|comicpark|readpark|parkmanga).(com|me|org|net|io|to)\/title\/.+\/.+/,homepage:"https://mangapark.net/",language:[Wt.ENGLISH],category:Ut.MANGA,waitEle:"main div div a.btn-primary",run(){const e=[...document.querySelectorAll("main div div > img.w-full")];return{title:[...document.querySelectorAll(".comic-detail h3 a, .comic-detail h6 span")].map(e=>e.textContent?.trim()).join(" "),series:document.querySelector(".comic-detail a")?.getAttribute("href"),pages:e.length,prev:document.querySelectorAll("main div div a.btn-primary")?.item(0)?.getAttribute("href"),next:document.querySelectorAll("main div div a.btn-primary")?.item(1)?.getAttribute("href"),listImages:e.map(e=>e.getAttribute("src")??"")}}},Cr={name:"MangaReader",url:/https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/,homepage:"https://mangareader.to",language:[Wt.ENGLISH],category:Ut.MANGA,obs:"Some galleries will not be usable",waitEle:".ds-image, .iv-card",async run(){const e=document.querySelector(".chapter-item.active"),t=[...document.querySelectorAll(".ds-image[data-url], .iv-card[data-url]")].map(async e=>{const t=e.getAttribute("data-url")??"";return t&&e.classList.contains("shuffled")?(await imgReverser(t)).toDataURL():t});return{title:document.querySelector(".hr-manga h2")?.textContent?.trim(),series:document.querySelector(".hr-manga")?.getAttribute("href"),pages:t.length,prev:e?.nextElementSibling?.querySelector("a")?.getAttribute("href"),next:e?.previousElementSibling?.querySelector("a")?.getAttribute("href"),listImages:await Promise.all(t)}}},Or={name:["MangaStream WordPress Plugin","Realm Oasis","Voids-Scans","Luminous Scans","Shimada Scans","Night Scans","Manhwa-Freak","OzulScansEn","CypherScans","MangaGalaxy","LuaScans","Drake Scans","Rizzfables","NovatoScans","TresDaos","Lectormiau","NTRGod","Threedaos"],url:/https?:\/\/[^/]*(scans?|comic|realm|rizz|hivetoon|tresdaos|zonamiau|ntrgod|threedaos)[^/]*\/.+/,homepage:["https://themesia.com/mangastream-wordpress-theme/","https://realmoasis.com/","https://void-scans.com/","https://luminous-scans.com/","https://shimadascans.com/","https://night-scans.com/","https://freakcomic.com/","https://ozulscansen.com/","https://cypherscans.xyz/","https://mangagalaxy.me/","https://luascans.com/","https://drake-scans.com/","https://rizzfables.com/","https://www.novatoscans.top/","https://tresdaos.com","https://zonamiau.com/","https://ntrgod.com/","https://threedaos.zdrz.xyz/"],language:[Wt.ENGLISH,Wt.SPANISH],category:Ut.MANGA,waitEle:':where(#readerarea, .check-box, #viewer-img) img:not(.asurascans):not([src*="loader"]):not([src*="chevron"]),:where(.nextprev, .inner_nPL)',run(){const e=[...document.querySelectorAll(this.waitEle??"")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(":where(.allc, .tac) a")?.getAttribute("href")??document.querySelectorAll('[class*="breadcrumb"] a').item(1)?.getAttribute("href"),pages:e.length,prev:Qn(":where(.nextprev, .inner_nPL) a",["Prev","Anterior"])?.[0]?.getAttribute("href"),next:Qn(":where(.nextprev, .inner_nPL) a",["Next","Siguiente"])?.[0]?.getAttribute("href"),listImages:e.map(e=>e.getAttribute("data-src")??e.getAttribute("data-lazy-src")??e.getAttribute("src")??"")}}},Tr={name:"MangaToons",url:/https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/,homepage:"https://mangatoon.mobi/",language:[Wt.ENGLISH],category:Ut.MANGA,waitEle:".pictures img:not(.cover)",run(){const e=[...document.querySelectorAll(".pictures img:not(.cover)")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".top-left a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".page-icons-prev")?.getAttribute("href"),next:document.querySelector(".page-icons-next")?.getAttribute("href"),listImages:e.map(e=>e.getAttribute("data-src")??"")}}},Lr={name:"MangaTown",url:/https?:\/\/www\.mangatown\.com\/manga\/.+\/.+\//,homepage:"https://www.mangatown.com/",language:[Wt.ENGLISH],category:Ut.MANGA,waitEle:"div.page_select select option, .read_img .image",run(){const e=document.querySelector("div.page_select select")?.querySelectorAll("option"),t=[...document.querySelectorAll(".read_img .image")].map(e=>e.getAttribute("src")??""),o=[...e??[]].map(e=>e.value).filter(e=>!e.endsWith("featured.html")).map(e=>new URL(e,window.location.href).href);return{title:document.querySelector("div.title h1")?.textContent?.trim(),series:document.querySelector("div.title a")?.getAttribute("href"),pages:unsafeWindow.total_pages||o.length,prev:document.querySelector(".chapter_select option:checked")?.previousElementSibling?.getAttribute("value"),next:document.querySelector(".chapter_select option:checked")?.nextElementSibling?.getAttribute("value"),...t.length>1?{listImages:t}:{listPages:o,img:"#image"}}}},Dr={name:"ManhwaWeb",url:/https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/,homepage:"https://manhwaweb.com/",language:[Wt.SPANISH],category:Ut.MANGA,async run(){const e=window.location.pathname.replace("/leer",""),t=await fetch(`https://manhwawebbackend-production.up.railway.app/chapters/see${e}`).then(async e=>e.json()),o=await fetch(`https://manhwawebbackend-production.up.railway.app/chapters/seeprevpost${e}`).then(async e=>e.json());return{title:`${t.name} ${t.chapter.chapter}`,series:[...document.querySelectorAll("div")].filter(e=>"Episodios"===e.textContent)?.[0]?.parentElement?.getAttribute("href"),pages:t.chapter.img.length,prev:o.chapterAnterior.replace(t._id,t.real_id),next:o.chapterSiguiente.replace(t._id,t.real_id),listImages:t.chapter.img}}},$r={name:["MangaGeko.com","MangaGeko.cc"],url:/https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/,homepage:["https://www.mgeko.com/","https://www.mgeko.cc/"],language:[Wt.ENGLISH],category:Ut.MANGA,run(){const e=[...document.querySelectorAll('img[id^="image-"]')];return{title:document.querySelector(".titles")?.textContent?.trim(),series:document.querySelector(".titles a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".chnav.prev:not(.isDisabled)")?.getAttribute("href"),next:document.querySelector(".chnav.next:not(.isDisabled)")?.getAttribute("href"),listImages:e.map(e=>e.getAttribute("src")??"")}}},Nr={name:"NineAnime",url:/https?:\/\/(www\.)?nineanime.com\/chapter\/.+/,homepage:"https://www.nineanime.com/",language:[Wt.ENGLISH],category:Ut.MANGA,run(){const e=[...document.querySelectorAll(".sl-page option")],t=document.querySelector(".mangaread-pagenav select option[selected]");return{title:`${document.querySelector(".title h1")?.textContent?.trim()}/${document.querySelector(".title h2")?.textContent?.trim()}`,series:document.querySelector(".title a:has(h2)")?.getAttribute("href"),pages:e.length,prev:t?.nextElementSibling?.getAttribute("value"),next:t?.previousElementSibling?.getAttribute("value"),listPages:e.map(e=>e.getAttribute("value")??""),img:".manga_pic"}}},Rr={name:"Olympus",url:/https?:\/\/(www\.)?olympusxyz.com\/capitulo\/\d+\/.+/,homepage:"https://olympusxyz.com/",language:[Wt.SPANISH],category:Ut.MANGA,run(){const e=[...document.querySelectorAll("section img.w-full.h-full")];return{title:document.querySelector("title")?.textContent?.replace(/\|.+/,"").trim(),series:document.querySelector("h1")?.closest("a")?.getAttribute("href"),pages:e.length,prev:document.querySelector('a[name="capitulo anterior"]')?.getAttribute("href"),next:document.querySelector('a[name="capitulo siguiente"]')?.getAttribute("href"),listImages:e.map(e=>e.getAttribute("src")??"")}}},zr={name:"Qi Manga",url:/https?:\/\/(www\.)?qimanga\.com\/series\/[^/]+\/chapter-.+/,homepage:"https://qimanga.com/",language:[Wt.ENGLISH],category:Ut.MANGA,waitEle:"img.r-page-img",run(){const e=[...document.querySelectorAll("img.r-page-img")],t=document.querySelector(".r-page-counter")?.textContent??"",o=Number.parseInt(t.split("/").pop()?.trim()??"",10)||e.length,n=document.querySelector("#ng-state")?.textContent??"",r=/"navigation":\{"prev":\{"slug":"([^"]+)"[\s\S]*?"next":\{"slug":"([^"]+)"/.exec(n),i=document.querySelector(".r-back")?.getAttribute("href"),a=e=>i?`${i}/${e}`:void 0;return{title:document.querySelector("h1.sr-only")?.textContent?.trim(),series:i,pages:o,prev:r?a(r[1]):void 0,next:r?a(r[2]):void 0,listImages:e.map(e=>e.getAttribute("src")??"")}}},Pr={name:"QiManhwa",url:/https?:\/\/qimanhwa\.com\/series\/[^/]+\/chapter-.+/,homepage:"https://qimanhwa.com/",language:[Wt.ENGLISH],category:Ut.MANGA,waitEle:'img[alt*="Chapter"]',run(){const e=[...document.querySelectorAll('img[alt*="Chapter"]')];return{title:document.querySelector("h1")?.textContent?.trim(),series:Yn("button","Home","a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".lucide-chevron-left")?.closest("a")?.getAttribute("href"),next:document.querySelector(".lucide-chevron-right")?.closest("a")?.getAttribute("href"),listImages:e.map(e=>e.getAttribute("src")??"")}}},Br={name:"ReadComicsOnline",url:/https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/,homepage:"https://readcomicsonline.ru/",language:[Wt.ENGLISH],category:Ut.COMIC,run(){const e=[...document.querySelectorAll("#all img")];return{title:unsafeWindow.title.replace(/ - Page \d+/,""),series:document.querySelector("div.pager-cnt a")?.getAttribute("href"),pages:unsafeWindow.pages.length,prev:unsafeWindow.prev_chapter,next:unsafeWindow.next_chapter,listImages:e.map(e=>e.getAttribute("data-src")??"")}}},Gr={name:"ReaperScans",url:/https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/,homepage:"https://reaperscans.com/",language:[Wt.ENGLISH],category:Ut.MANGA,waitEle:"#content .container img:not(.rounded)",run(){const e=[...document.querySelectorAll("#content .container img:not(.rounded)")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("button .fa-house")?.closest("a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".fa-chevron-left")?.closest("a")?.getAttribute("href"),next:document.querySelector(".fa-chevron-right")?.closest("a")?.getAttribute("href"),listImages:e.map(e=>(e.getAttribute("data-src")||e.getAttribute("src"))??"")}}},Hr={name:"ReiManga",url:/https?:\/\/(www\.)?reimanga\.com\/manga\/[^/]+-\d+\/\d+/,homepage:"https://reimanga.com/",language:[Wt.ENGLISH],category:Ut.MANGA,waitEle:"img",run(){const e=document.getElementById("__NEXT_DATA__"),t=e?JSON.parse(e.textContent??"{}")?.props?.pageProps??null:null,o=t?.chapter?.images??t?.chapter?.img??null,n=Array.isArray(o)?o.map(e=>"string"==typeof e?e:e?.url??e?.src??""):[...document.querySelectorAll("img")].filter(e=>{const t=e.getAttribute("src")??"";return/\/(manga|chapter|uploads?|files?|images?)\//i.test(t)||/(cdn|media|img|static)/i.test(t)}).map(e=>e.getAttribute("src")??"").filter(e=>e.startsWith("http")),r=window.location.pathname.split("/").filter(Boolean),i=r.length>1?`/${r.slice(0,2).join("/")}`:void 0,a=void 0!==t?.series?.slug?`/manga/${t.series.slug}`:document.querySelector('a[href*="/manga/"]')?.getAttribute("href")??i,l=document.querySelector('select[aria-label="Jump to chapter"]'),s=l?[...l.options]:[],c=l?.selectedIndex??-1,d=c+1<s.length?s[c+1]?.value:void 0,h=c-1>=0?s[c-1]?.value:void 0,p=e=>e&&a?`${a}/${e}`:void 0;return{title:t?.title??(`${t?.chapters?.[0]?.series_name??t?.manga?.name??t?.series?.name??""} ${t?.chapters?.[0]?.name??t?.chapter?.name??t?.chapter?.number??""}`.trim()||document.title.replace(/ –.*| -.*| \|.*/,"").trim()),series:a,pages:n.length,prev:p(d),next:p(h),listImages:n}}},Vr={name:"TuMangaOnline",url:/https?:\/\/(www\.)?zonatmo\.(com|org|app)\/(viewer|news|view_uploads|reader|library)\/.+/,homepage:"https://zonatmo.org/",language:[Wt.SPANISH],category:Ut.MANGA,run(){const e=[...document.querySelectorAll(".img-container img, .viewer-container img, .content-image, .viewer-image, .img-fluid, .reader-img-wrap img, .viewer-img, #viewer-container img, .viewer-page")],t=[...document.querySelectorAll("div.container:nth-child(4) select#viewer-pages-select option, #viewer-pages-select option, select#chapter-pages option, select#pages option")],o=e.length>1?e.length:t.length;return{title:document.querySelector("title")?.textContent?.trim(),series:(document.querySelector('a[title="Volver"]')??document.querySelector(".breadcrumb-item:nth-child(2) a")??document.querySelector(".book-name a")??document.querySelector(".breadcrumb-item a"))?.getAttribute("href"),pages:o||1,prev:(document.querySelector(".chapter-prev a")??document.querySelector(".prev_page")??document.querySelector("a.prev-chapter")??document.querySelector(".chapter-prev-btn"))?.getAttribute("href"),next:(document.querySelector(".chapter-next a")??document.querySelector(".next_page")??document.querySelector("a.next-chapter")??document.querySelector(".chapter-next-btn"))?.getAttribute("href"),...e.length<=1&&t.length>1?{listPages:Array(t.length).fill(0).map((e,t)=>`${window.location.href.replace(/\/\d+$/,"")}/${t+1}`)}:{listImages:e.map(e=>e.getAttribute("data-src")??e.getAttribute("data-original")??e.getAttribute("src")??"")},img:"#viewer-container img, .viewer-page, .img-container img, .content-image, .viewer-image, .reader-img-wrap img, .viewer-img",before(){if(window.location.pathname.includes("paginated")&&(window.location.pathname=window.location.pathname.replace(/paginated.*/,"cascade")),window.location.pathname.includes("view_uploads")){const e=document.querySelector("a.btn.btn-primary, .btn-primary a, a.btn-block");e&&e.click()}}}}},Fr={name:"Vortex Scans",url:/https?:\/\/(www.)?(vortexscans).(org)\/.+/,homepage:"https://vortexscans.org/",language:[Wt.ENGLISH],category:Ut.MANGA,waitVar:"__next_f",waitFunc:()=>unsafeWindow.__next_f.find(e=>/images/.test(e?.[1]))?.length>0,run(){const e=unsafeWindow.__next_f.find(e=>/images/.test(e?.[1]))?.[1],t=e.slice(e.indexOf("images")).match(/http[^"]+\.(png|gif|jpg|jpeg|webp)/g)??[];return{title:document.querySelector("time")?.closest("div")?.querySelector("div")?.textContent?.trim(),series:document.querySelector("time")?.closest("a")?.getAttribute("href"),pages:t?.length,prev:Yn("button","Prev","a")?.getAttribute("href"),next:Yn("button","Next","a")?.getAttribute("href"),listImages:t}}},async function(o){e(`Starting ${jr.script.name} ${jr.script.version} on ${qr()} ${function(){const e=bowser.getParser(window.navigator.userAgent).getBrowser();return`${e.name} ${e.version}`}()} with ${jr.scriptHandler??"Greasemonkey"}`),e(o.length,"Known Manga Sites:",o);const n=o.filter(e=>e.url.test(window.location.href));e(n.length,"Found sites:",n);const r=n.map(async o=>{e(`Testing site: ${o.name}`),await async function(e){await p(e.waitAttr,e=>function(e,t,o=document.body){return new Promise(n=>{const r=o.querySelector(e);if(r?.getAttribute(t))return void n(r.getAttribute(t)??"");const i=new MutationObserver(()=>{const r=o.querySelector(e);r?.getAttribute(t)&&(n(r.getAttribute(t)??""),i.disconnect())});i.observe(o,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[t]})})}(e?.[0],e?.[1]),`Waiting for Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]}`,`Found Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]} =`),await p(e.waitEle,s,`Waiting for Element ${e.waitEle}`,"Found Element"),await p(e.waitVar,h,`Waiting for Variable ${e.waitVar}`,"Found Variable"),await p(e.waitFunc,c,`Waiting to pass Function check ${e.waitFunc}`,"Found Function check"),await p(e.waitTime,e=>new Promise(t=>setTimeout(t,e)),`Waiting for ${e.waitTime} milliseconds`,"Continuing after timer")}(o),t(o.name,"Passed");const n=await o.run();if(t("Processed site:",o,n),n.pages>0)return[o,n];throw new Error(`${o.name} found ${n.pages} pages`)});try{const o=await Promise.any(r);t("Going with",o[0].name),async function([o,n]){e(`Found Pages: ${n.pages} in ${o?.name}`),n.title||(n.title=document.querySelector("title")?.textContent?.trim()),n.begin=V()??n.begin??1,void 0!==n.before&&(t("Executing Preparation"),await n.before(n.begin??0)),document.head.innerHTML+=Eo`
    <style id="${"externals"}">
      ${jn}
    </style>
  `,async function(e,t=5e3){const o=new Promise((e,o)=>{setTimeout(()=>o(new Error(`Timeout after ${t} ms`)),t)});return Promise.race([e,o])}(unsafeWindow.customElements.whenDefined("manga-online-viewer"),1e4).then(()=>{const t=document.createElement("manga-online-viewer");t.loadMode=o?.start??T("loadMode"),t.manga=n,document.body.appendChild(t),e("Viewer Ready",t)}).catch(t=>e("Define WebComponent failed",t))}(o)}catch(t){if(t instanceof AggregateError){e("All sites failed to run:");for(const o of t.errors)e(o.message)}else e("An unexpected error occurred:",t)}}([Jn,er,tr,or,rr,ir,ar,lr,cr,hr,pr,mr,ur,gr,vr,fr,yr,Er,Ar,xr,Ir,Mr,kr,_r,Sr,Cr,Tr,Lr,Dr,$r,Nr,Rr,zr,Pr,Br,Gr,Hr,Vr,{name:"WebNovel",url:/https?:\/\/(www\.)?webnovel.com\/comic\/.+/,homepage:"https://www.webnovel.com/",language:[Wt.ENGLISH],category:Ut.MANGA,waitVar:"g_data",run(){const e=unsafeWindow.g_data.chapter.chapterInfo.chapterPage.map(e=>e.url);return{title:document.querySelector("title")?.textContent?.trim(),series:"./",pages:e.length,prev:`${unsafeWindow.g_data.chapter.chapterInfo.preChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.preChapterId}`,next:`${unsafeWindow.g_data.chapter.chapterInfo.nextChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.nextChapterId}`,listImages:e}}},{name:"WebToons",url:/https?:\/\/(www\.)?webtoons.com\/.+viewer.+/,homepage:"https://www.webtoons.com/",language:[Wt.ENGLISH],category:Ut.MANGA,run(){const e=[...document.querySelectorAll("#_imageList img")];return{title:document.querySelector(".subj_info")?.textContent?.trim(),series:document.querySelector(".subj_info a")?.getAttribute("href"),pages:e.length,prev:document.querySelector("._prevEpisode")?.getAttribute("href"),next:document.querySelector("._nextEpisode")?.getAttribute("href"),listImages:e.map(e=>e.getAttribute("data-url")??e.getAttribute("data-src")??e.getAttribute("src")??"")}}},{name:"WeebCentral",url:/https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/,homepage:"https://weebcentral.com/",language:[Wt.ENGLISH],category:Ut.MANGA,waitEle:'section[hx-get*="/images"]',async run(){if(document.documentElement.hasAttribute("mov"))return{pages:0,listImages:[]};const e=document.querySelector('section[hx-get*="/images"]')?.getAttribute("hx-get");if(!e)throw new Error("Images HTMX endpoint not found");const t=`${e.replace(/&amp;/g,"&")}&reading_style=long_strip`,o=await fetch(t,{headers:{"HX-Request":"true"}}).then(e=>e.text()),n=new DOMParser,r=[...n.parseFromString(o,"text/html").querySelectorAll("img")].map(e=>e.getAttribute("src")||e.getAttribute("data-src")||"").filter(e=>e&&!e.includes("broken_image")).map(e=>e.startsWith("http")?e:new URL(e,window.location.origin).href),i=[...new Set(r)].sort((e,t)=>{const o=e.match(/-(\d+)\.[^.]+$/),n=t.match(/-(\d+)\.[^.]+$/);return(o?parseInt(o[1],10):0)-(n?parseInt(n[1],10):0)}),a=document.querySelector('button[hx-get*="chapter-select"]')?.getAttribute("hx-get"),l=await fetch(a??"",{headers:{"HX-Request":"true"}}).then(e=>e.text()),s=n.parseFromString(l,"text/html").querySelector("#selected_chapter"),c=e=>e?e.startsWith("http")?e:new URL(e,window.location.origin).href:null;return{title:document.title.split(" - ")[0].trim(),series:c(document.querySelector("main section a.btn-ghost")?.getAttribute("href")),pages:i.length,prev:c(s?.nextElementSibling?.getAttribute("href")),next:c(s?.previousElementSibling?.getAttribute("href")),listImages:i,fetchOptions:{headers:{"HX-Request":"true",Referer:window.location.href}}}}},{name:"WeebDex",url:/https?:\/\/(www\.)?weebdex\.org\/.+/,homepage:"https://weebdex.org/",language:Wt.ENGLISH,category:Ut.MANGA,waitEle:'a[href^="/title/"]',async run(){const e=/\/chapter\/([^/]+)/.exec(window.location.pathname)?.at(1),t=`https://api.weebdex.org/chapter/${e}`,o=await fetch(t).then(async e=>e.json()),n=document.querySelector('a[href^="/title/"]'),r=`https://api.weebdex.org/manga/${o.relationships.manga.id}/aggregate?lang=${o.language}`,i=(await fetch(r).then(async e=>e.json())).chapters||[],a=i.findIndex(e=>e.chapter===o.chapter);return{title:document.querySelector("title")?.textContent?.trim().replace(/Page \d+:/,""),series:n?.getAttribute("href"),pages:o.data.length,prev:i[a+1]?`/chapter/${_.keys(i[a+1].entries)[0]}`:void 0,next:i[a-1]?`/chapter/${_.keys(i[a-1].entries)[0]}`:void 0,listImages:o.data.map(t=>`${o.node}/data/${e}/${t.name}`)}}},Fr,{name:"ZeroScans",url:/https?:\/\/(www\.)?zscans.com\/comics\/.+/,homepage:"https://zscans.com/",language:[Wt.ENGLISH],category:Ut.MANGA,waitVar:"__ZEROSCANS__",run(){const e=unsafeWindow.__ZEROSCANS__.data.at(0).current_chapter.high_quality,t=document.querySelectorAll(".v-btn--router");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".v-breadcrumbs li:nth-child(2) + a")?.getAttribute("href"),pages:e.length,prev:t[0]?.getAttribute("href"),next:t[1]?.getAttribute("href"),listImages:e}}},Or,sr,wr]).catch(e)}();