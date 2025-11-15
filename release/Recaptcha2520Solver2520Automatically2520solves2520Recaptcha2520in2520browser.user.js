// ==UserScript==
// @name         Recaptcha Solver (Automatically solves Recaptcha in browser)
// @namespace    Recaptcha Solver
// @version      2.1
// @author       engageub
// @match        *://*/recaptcha/*
// @connect      engageub.pythonanywhere.com
// @connect      engageub1.pythonanywhere.com
// @grant        GM_xmlhttpRequest
/*

██████╗ ███████╗ ██████╗ █████╗ ██████╗ ████████╗ ██████╗██╗  ██╗ █████╗     ███████╗ ██████╗ ██╗    ██╗   ██╗███████╗██████╗
██╔══██╗██╔════╝██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██║  ██║██╔══██╗    ██╔════╝██╔═══██╗██║    ██║   ██║██╔════╝██╔══██╗
██████╔╝█████╗  ██║     ███████║██████╔╝   ██║   ██║     ███████║███████║    ███████╗██║   ██║██║    ██║   ██║█████╗  ██████╔╝
██╔══██╗██╔══╝  ██║     ██╔══██║██╔═══╝    ██║   ██║     ██╔══██║██╔══██║    ╚════██║██║   ██║██║    ╚██╗ ██╔╝██╔══╝  ██╔══██╗
██║  ██║███████╗╚██████╗██║  ██║██║        ██║   ╚██████╗██║  ██║██║  ██║    ███████║╚██████╔╝███████╗╚████╔╝ ███████╗██║  ██║
╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝        ╚═╝    ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝    ╚══════╝ ╚═════╝ ╚══════╝ ╚═══╝  ╚══════╝╚═╝  ╚═╝
/*


/** Note: This script is solely intended for the use of educational purposes only and not to abuse any website.
This script uses audio in order to solve the captcha. Use it wisely and do not abuse any website.
*/
// ==/UserScript==
!function(){"use strict";function e(e){return null===e.offsetParent}async function o(e){var o=(new Date).getTime();GM_xmlhttpRequest({method:"GET",url:e,headers:{"Content-Type":"application/x-www-form-urlencoded"},data:"",timeout:8e3,onload:function(n){var t;if(n&&n.responseText&&"0"==n.responseText){t=(new Date).getTime()-o;for(let o=0;o<s.length;o++)e==s[o]&&(a[o]=t)}},onerror:function(e){console.log(e)},ontimeout:function(){console.log("Ping Test Response Timed out for "+e)}})}function n(e){return document.querySelector(e)}var t,c,l,r,s,a,i,g=!1,u=!1,p=!1;const h=".recaptcha-checkbox-border",d="#recaptcha-audio-button",f="#audio-source",m=".rc-audiochallenge-response-field",y=".rc-audiochallenge-error-message",v="#audio-response",x="#recaptcha-reload-button",T="#recaptcha-accessible-status",b=".rc-doscaptcha-body",w="#recaptcha-verify-button";if(t=0,c=n("html").getAttribute("lang"),l="",r=n(T)?n(T).innerText:"",s=["https://engageub.pythonanywhere.com","https://engageub1.pythonanywhere.com"],a=Array(s.length).fill(1e4),n(h))n(h).click();else if(window.location.href.includes("bframe"))for(let e=0;e<s.length;e++)o(s[e]);i=setInterval(function(){try{u||!n(h)||e(n(h))||(n(h).click(),u=!0),n(T)&&n(T).innerText!=r&&(g=!0,console.log("SOLVED"),clearInterval(i)),t>5&&(console.log("Attempted Max Retries. Stopping the solver"),g=!0,clearInterval(i)),g||(n(d)&&!e(n(d))&&n("#rc-imageselect")&&n(d).click(),!p&&n(f)&&n(f).src&&n(f).src.length>0&&l==n(f).src&&n(x)||n(y)&&n(y).innerText.length>0&&n(x)&&!n(x).disabled?n(x).click():!p&&n(m)&&!e(n(m))&&!n(v).value&&n(f)&&n(f).src&&n(f).src.length>0&&l!=n(f).src&&t<=5&&(p=!0,async function(e){var o=1e5,r="";for(let e=0;e<a.length;e++)a[e]<=o&&(o=a[e],r=s[e]);t+=1,e=e.replace("recaptcha.net","google.com"),c.length<1&&(console.log("Recaptcha Language is not recognized"),c="en-US"),console.log("Recaptcha Language is "+c),GM_xmlhttpRequest({method:"POST",url:r,headers:{"Content-Type":"application/x-www-form-urlencoded"},data:"input="+encodeURIComponent(e)+"&lang="+c,timeout:6e4,onload:function(e){console.log("Response::"+e.responseText);try{if(e&&e.responseText){var o=e.responseText;"0"==o||o.includes("<")||o.includes(">")||o.length<2||o.length>50?console.log("Invalid Response. Retrying.."):n(f)&&n(f).src&&l==n(f).src&&n(v)&&!n(v).value&&"none"==n(d).style.display&&n(w)?(n(v).value=o,n(w).click()):console.log("Could not locate text input box"),p=!1}}catch(e){console.log(e.message),console.log("Exception handling response. Retrying.."),p=!1}},onerror:function(e){console.log(e),p=!1},ontimeout:function(){console.log("Response Timed out. Retrying.."),p=!1}})}(l=n(f).src))),n(b)&&n(b).innerText.length>0&&(console.log("Automated Queries Detected"),clearInterval(i))}catch(e){console.log(e.message),console.log("An error occurred while solving. Stopping the solver."),clearInterval(i)}},5e3)}();