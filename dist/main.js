!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){window.addEventListener("load",(function(){var e=document.querySelector("#img-container"),t=document.querySelector("#choice-container"),n=document.querySelector("#prev"),r=document.querySelector("#next"),o=e.querySelectorAll("img"),c=-500*o.length;console.log(c);var u=0;o.forEach((function(e,n){e.setAttribute("data-index",n);var r=document.createElement("button");r.setAttribute("data-index",n),r.setAttribute("class","choice-btn"),r.addEventListener("click",(function(e){var t=parseInt(this.dataset.index);i(t),d(u=-500*t)})),t.appendChild(r)}));var i=function(e){document.querySelectorAll(".choice-btn").forEach((function(t,n){n!==e?t.classList.remove("chosen"):t.classList.add("chosen")}))},a=function(e){var t=e/-500;console.log(t),i(t)},l=function(e){return e>0?c+500:e<c+500?0:e},d=function(t){e.style.transform="translate(".concat(t,"px)")};n.addEventListener("click",(function(e){a(u+=500),u=l(u),d(u),a(u)})),r.addEventListener("click",(function(e){a(u-=500),u=l(u),d(u),a(u)})),i(u)}))}]);