!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).VueSnip=t()}(this,(function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){u=!0,l=e},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw l}}}}var s=function(e){var t=window.getComputedStyle(e),n=parseFloat(t.height),r="normal"===t.lineHeight?1.2*parseFloat(t.fontSize):parseFloat(t.lineHeight);return 0===n&&0===r?0:Math.ceil(n/r)},u=new WeakMap,c=function(e){return u.get(e)},a=function(e,t){u.set(e,t)},f=function(e){return{hasEllipsis:c(e).hasEllipsis}},p=function(e){var t=n({},c(e));(null==t?void 0:t.observer)&&(null==t||t.observer.disconnect()),(null==t?void 0:t.observer)&&(null==t||delete t.prevWidth),(null==t?void 0:t.observer)&&(null==t||delete t.prevHeight),(null==t?void 0:t.observer)&&(null==t||delete t.observer),a(e,t)},d={mode:"css",lines:3,ellipsis:". . .",midWord:!0},v=function(e){if("number"==typeof e)return parseInt(e.toString());if("string"==typeof e){var t=parseInt(e);if(!isNaN(t))return t}return d.lines},b=function(e){return"undefined"!=typeof CSS&&CSS.supports("display","-webkit-box")&&CSS.supports("-webkit-line-clamp","3")&&CSS.supports("-webkit-box-orient","vertical")?"css"===e||"js"===e?e:d.mode:"js"},y=function(e){return"string"==typeof e?e:"number"==typeof e?e.toString():d.ellipsis},m=function(e){return"boolean"==typeof e?e:d.midWord},h=function(e){var t,n=c(e);e.textContent=null!==(t=null==n?void 0:n.fullText)&&void 0!==t?t:e.textContent,e.style.display="",e.style.webkitLineClamp="",e.style.webkitBoxOrient="",e.style.overflow=""},g=function(e,t,o){var i=!function(e){return u.has(e)}(e),g=c(e);a(e,n(n(n({},g),function(e){if("object"!==r(e)||null===e)return d;var t=e,n=t.mode,o=t.lines,i=t.ellipsis,l=t.midWord;return{mode:b(n),lines:v(o),ellipsis:y(i),midWord:m(l)}}(t)),{},{hasEllipsis:!i&&(null==g?void 0:g.hasEllipsis),fullText:i?e.textContent:null==g?void 0:g.fullText}));var w=function(){var t=f(e),r=c(e);h(e);var i=s(e);if("css"===r.mode&&function(e,t){var n=t.lines,r=t.fullText;e.textContent=r,e.style.display="-webkit-box",e.style.webkitLineClamp=n.toString(),e.style.webkitBoxOrient="vertical",e.style.overflow="hidden"}(e,r),"js"===r.mode&&function(e,t){var n=t.lines,r=t.midWord,o=t.fullText,i=t.ellipsis,u=r?[". ",", "," ",""]:[". ",", "," "];if(e.textContent=o,e.style.display="",e.style.webkitLineClamp="",e.style.webkitBoxOrient="",e.style.overflow="",!(n<=0||s(e)<=n)){var c={unprocessed:o,processed:""};u.forEach((function(t){var r,o=l(c.unprocessed.split(t));try{for(o.s();!(r=o.n()).done;){var u=r.value;if(e.textContent="".concat(c.processed).concat(u).concat(t).concat(i),s(e)>n){c.unprocessed=u;break}c.processed="".concat(c.processed).concat(u).concat(t)}}catch(e){o.e(e)}finally{o.f()}})),e.textContent="".concat(c.processed.trim()).concat(i)}}(e,r),a(e,n(n({},r),{},{hasEllipsis:s(e)<i})),o){var u=f(e);o(u,t)}};if("undefined"!=typeof ResizeObserver)return p(e),void function(e,t){var r=c(e),o=r.observer||new ResizeObserver((function(){var r=c(e);if(e.clientWidth!==r.prevWidth||e.clientHeight!==r.prevHeight){t();var o=n({},r);o.prevWidth=e.clientWidth,o.prevHeight=e.clientHeight,a(e,o)}}));o.observe(e),a(e,n(n({},r),{},{observer:o}))}(e,w);w()},w=function(e,t){var n=t.value,r=t.arg;g(e,{lines:n,mode:r})},O=function(e,t){var n=t.value,r=t.arg;g(e,{lines:n,mode:r})},S=function(e){!function(e){h(e),p(e),function(e){u.delete(e)}(e)}(e)};return{install:function(t){var n,r=parseFloat(t.version[0])>2;t.directive("snip",(e(n={},r?"mounted":"inserted",w),e(n,r?"updated":"update",O),e(n,r?"unmounted":"unbind",S),n))}}}));
