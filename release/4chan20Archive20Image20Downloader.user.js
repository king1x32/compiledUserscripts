// ==UserScript==
// @name        4chan Archive Image Downloader
// @namespace   Violentmonkey Scripts
// @match       https://archive.4plebs.org/*/thread/*
// @match       https://desuarchive.org/*/thread/*
// @match       https://boards.fireden.net/*/thread/*
// @match       https://archived.moe/*/thread/*
// @match       https://thebarchive.com/*/thread/*
// @match       https://archiveofsins.com/*/thread/*
// @match       https://archive.alice.al/*/thread/*
// @match       https://arch.b4k.co/*/thread/*
// @match       https://archive.palanq.win/*/thread/*
// @grant       GM_download
// @grant       GM_registerMenuCommand
// @version     1.4.2
// @license     The Unlicense
// @author      ImpatientImport
// @downloadURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/4chan20Archive20Image20Downloader.user.js
// @updateURL https://raw.githubusercontent.com/king1x32/compiledUserscripts/release/release/4chan20Archive20Image20Downloader.meta.js
// ==/UserScript==
!function(){"use strict";function e(e){var n,t;console.log(e),n=window.getComputedStyle(e).backgroundColor;const o={indiv_btn:"Indiv DL"},i={indiv_btn:r},a={backgroundColor:"rgb(255, 64, 64)",color:"white"},c={backgroundColor:"rgb(238, 210, 2)",color:"black"},l={backgroundColor:"rgb(46, 139, 87)",color:"white"},d={backgroundColor:i[e.id].backgroundColor,color:i[e.id].color};switch(n){case"rgba(0, 0, 0, 0)":t=a,e.innerText="Confirm?";break;case"rgb(255, 64, 64)":t=c,e.innerText="Processing";break;case"rgb(238, 210, 2)":t=l,e.innerText="Done";break;case"rgb(46, 139, 87)":t=d,e.innerText=o[e.id]}Object.assign(e.style,t)}async function n(){const n=await fetch(m),t=await n.json();console.log(t),function(n){function t(e){return new Promise(n=>setTimeout(n,e))}var i,r,a,c,l,d,s=[],m=[],g=[];const b=n[u].op.media;if(i=b.media_filename,r=null==b.media_link?b.remote_media_link:b.media_link,s.push(r),m.push(i),null!=n[u].posts){const e=n[u].posts,t=Object.keys(e),o=t.length;for(a=0;a<o;a++)null!==(c=e[t[a]].media)&&(l=null==c.media_link?c.remote_media_link:c.media_link,d=c.media_filename,s.push(l),m.push(d))}g[0]=s,g[1]=m,async function(){for(var e=0;e<s.length;e++)await t(3e3),GM_download(s[e],m[e])}(),e(o),setTimeout(e(o),3e3)}(t)}var t,o,i,r;const a=document.getElementsByClassName("post_controls")[0],c=document.URL,l=c.toString().split("/")[2],d=new URL(c).pathname.toString().split("/"),s=d[1],u=d[3],m="https://"+l+"/_/api/chan/thread/?board="+s+"&num="+u;(t=document.createElement("a")).id="indiv_btn",t.classList.add("btnr","parent"),t.innerText="Indiv DL",a.append(t),o=document.getElementById("indiv_btn"),i=window.getComputedStyle(t),r={backgroundColor:i.backgroundColor,color:i.color},GM_registerMenuCommand("Download all thread images individually",n),o.addEventListener("click",function(){e(o),setTimeout(function(){"rgb(255, 64, 64)"==window.getComputedStyle(t).backgroundColor&&(t.removeEventListener("click",e),t.addEventListener("click",n),setTimeout(function(){t.removeEventListener("click",n),t.addEventListener("click",e),Object.assign(o.style,r),t.innerText="Indiv DL"},5e3))},501)}),o.addEventListener("dblclick",n)}();