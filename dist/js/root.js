!function(n){var i={};function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/js/root.js")}({"./node_modules/shareon/dist/shareon.cjs":function(e,t,n){"use strict";var a={facebook:function(e){return"https://www.facebook.com/sharer/sharer.php?u="+e.url},messenger:function(e){return"https://www.facebook.com/dialog/send?app_id=3619024578167617&link="+e.url+"&redirect_uri="+e.url},odnoklassniki:function(e){return"https://connect.ok.ru/offer?url="+e.url+"&title="+e.title+(e.extra.media?"&imageUrl="+e.extra.media:"")},pinterest:function(e){return"https://pinterest.com/pin/create/button/?url="+e.url+"&description="+e.title+(e.extra.media?"&media="+e.extra.media:"")},telegram:function(e){return"https://telegram.me/share/url?url="+e.url+(e.extra.text?"&text="+e.extra.text:"")},twitter:function(e){return"https://twitter.com/intent/tweet?url="+e.url+"&text="+e.title+(e.extra.via?"&via="+e.extra.via:"")},vkontakte:function(e){return"https://vk.com/share.php?url="+e.url+"&title="+e.title+(e.extra.media?"&image="+e.extra.media:"")},whatsapp:function(e){return"whatsapp://send?text="+e.title+"%0D%0A"+e.url+(e.extra.text?"%0D%0A%0D%0A"+e.extra.text:"")}};window.onload=function(){for(var e=document.getElementsByClassName("shareon"),t=0;t<e.length;t+=1)for(var n=e[t],i=0;i<n.children.length;i+=1){var r=n.children[i];!function(n,i){n&&n.classList.forEach(function(e){var t;Object.prototype.hasOwnProperty.call(a,e)&&(t=a[e](i),"a"===n.tagName.toLowerCase()?(n.setAttribute("href",t),n.setAttribute("rel","noopener noreferrer"),n.setAttribute("target","_blank")):n.addEventListener("click",function(){window.open(t,"_blank","noopener,noreferrer").opener=null}))})}(r,{url:encodeURIComponent(r.dataset.url||n.dataset.url||window.location.href),title:encodeURIComponent(r.dataset.title||n.dataset.title||document.title||""),extra:{media:encodeURIComponent(r.dataset.media||n.dataset.media||""),text:encodeURIComponent(r.dataset.text||n.dataset.text||""),via:encodeURIComponent(r.dataset.via||n.dataset.via||"")}})}}},"./node_modules/siema/dist/siema.min.js":function(e,a,t){(function(e){var t,n,i,r;function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r=function(){return r={},i.m=n=[function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==s(Symbol.iterator)?function(e){return s(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":s(e)},r=(function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}(a,[{key:"attachEvents",value:function(){window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:!1},this.selector.addEventListener("touchstart",this.touchstartHandler),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler),this.selector.addEventListener("click",this.clickHandler))}},{key:"detachEvents",value:function(){window.removeEventListener("resize",this.resizeHandler),this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),this.selector.removeEventListener("click",this.clickHandler)}},{key:"init",value:function(){this.attachEvents(),this.selector.style.overflow="hidden",this.selector.style.direction=this.config.rtl?"rtl":"ltr",this.buildSliderFrame(),this.config.onInit.call(this)}},{key:"buildSliderFrame",value:function(){var e=this.selectorWidth/this.perPage,t=this.config.loop?this.innerElements.length+2*this.perPage:this.innerElements.length;this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=e*t+"px",this.enableTransition(),this.config.draggable&&(this.selector.style.cursor="-webkit-grab");var n=document.createDocumentFragment();if(this.config.loop)for(var i=this.innerElements.length-this.perPage;i<this.innerElements.length;i++){var r=this.buildSliderFrameItem(this.innerElements[i].cloneNode(!0));n.appendChild(r)}for(var a=0;a<this.innerElements.length;a++){var o=this.buildSliderFrameItem(this.innerElements[a]);n.appendChild(o)}if(this.config.loop)for(var s=0;s<this.perPage;s++){var l=this.buildSliderFrameItem(this.innerElements[s].cloneNode(!0));n.appendChild(l)}this.sliderFrame.appendChild(n),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"buildSliderFrameItem",value:function(e){var t=document.createElement("div");return t.style.cssFloat=this.config.rtl?"right":"left",t.style.float=this.config.rtl?"right":"left",t.style.width=(this.config.loop?100/(this.innerElements.length+2*this.perPage):100/this.innerElements.length)+"%",t.appendChild(e),t}},{key:"resolveSlidesNumber",value:function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===i(this.config.perPage))for(var e in this.perPage=1,this.config.perPage)window.innerWidth>=e&&(this.perPage=this.config.perPage[e])}},{key:"prev",value:function(e,t){var n,i,r,a,o,s=0<arguments.length&&void 0!==e?e:1,l=t;this.innerElements.length<=this.perPage||(n=this.currentSlide,this.config.loop?this.currentSlide-s<0?(this.disableTransition(),r=(i=this.currentSlide+this.innerElements.length)+this.perPage,a=(this.config.rtl?1:-1)*r*(this.selectorWidth/this.perPage),o=this.config.draggable?this.drag.endX-this.drag.startX:0,this.sliderFrame.style[this.transformProperty]="translate3d("+(a+o)+"px, 0, 0)",this.currentSlide=i-s):this.currentSlide=this.currentSlide-s:this.currentSlide=Math.max(this.currentSlide-s,0),n!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),l&&l.call(this)))}},{key:"next",value:function(e,t){var n,i,r,a,o,s=0<arguments.length&&void 0!==e?e:1,l=t;this.innerElements.length<=this.perPage||(n=this.currentSlide,this.config.loop?this.currentSlide+s>this.innerElements.length-this.perPage?(this.disableTransition(),r=(i=this.currentSlide-this.innerElements.length)+this.perPage,a=(this.config.rtl?1:-1)*r*(this.selectorWidth/this.perPage),o=this.config.draggable?this.drag.endX-this.drag.startX:0,this.sliderFrame.style[this.transformProperty]="translate3d("+(a+o)+"px, 0, 0)",this.currentSlide=i+s):this.currentSlide=this.currentSlide+s:this.currentSlide=Math.min(this.currentSlide+s,this.innerElements.length-this.perPage),n!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),l&&l.call(this)))}},{key:"disableTransition",value:function(){this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing}},{key:"enableTransition",value:function(){this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing}},{key:"goTo",value:function(e,t){var n;this.innerElements.length<=this.perPage||(n=this.currentSlide,this.currentSlide=this.config.loop?e%this.innerElements.length:Math.min(Math.max(e,0),this.innerElements.length-this.perPage),n!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this)))}},{key:"slideToCurrent",value:function(e){var t=this,n=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,i=(this.config.rtl?1:-1)*n*(this.selectorWidth/this.perPage);e?requestAnimationFrame(function(){requestAnimationFrame(function(){t.enableTransition(),t.sliderFrame.style[t.transformProperty]="translate3d("+i+"px, 0, 0)"})}):this.sliderFrame.style[this.transformProperty]="translate3d("+i+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var e=(this.config.rtl?-1:1)*(this.drag.endX-this.drag.startX),t=Math.abs(e),n=this.config.multipleDrag?Math.ceil(t/(this.selectorWidth/this.perPage)):1,i=0<e&&this.currentSlide-n<0,r=e<0&&this.currentSlide+n>this.innerElements.length-this.perPage;0<e&&t>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(n):e<0&&t>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(n),this.slideToCurrent(i||r)}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.currentSlide+this.perPage>this.innerElements.length&&(this.currentSlide=this.innerElements.length<=this.perPage?0:this.innerElements.length-this.perPage),this.selectorWidth=this.selector.offsetWidth,this.buildSliderFrame()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:this.drag.preventClick}}},{key:"touchstartHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.touches[0].pageX,this.drag.startY=e.touches[0].pageY)}},{key:"touchendHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(e){var t,n,i;e.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX)),this.pointerDown&&this.drag.letItGo&&(e.preventDefault(),this.drag.endX=e.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,t=(this.config.loop?this.currentSlide+this.perPage:this.currentSlide)*(this.selectorWidth/this.perPage),n=this.drag.endX-this.drag.startX,i=this.config.rtl?t+n:t-n,this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*i+"px, 0, 0)")}},{key:"mousedownHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.pageX)}},{key:"mouseupHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(e){var t,n,i;e.preventDefault(),this.pointerDown&&("A"===e.target.nodeName&&(this.drag.preventClick=!0),this.drag.endX=e.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,t=(this.config.loop?this.currentSlide+this.perPage:this.currentSlide)*(this.selectorWidth/this.perPage),n=this.drag.endX-this.drag.startX,i=this.config.rtl?t+n:t-n,this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*i+"px, 0, 0)")}},{key:"mouseleaveHandler",value:function(e){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=e.pageX,this.drag.preventClick=!1,this.enableTransition(),this.updateAfterDrag(),this.clearDrag())}},{key:"clickHandler",value:function(e){this.drag.preventClick&&e.preventDefault(),this.drag.preventClick=!1}},{key:"remove",value:function(e,t){if(e<0||e>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");var n=e<this.currentSlide,i=this.currentSlide+this.perPage-1===e;(n||i)&&this.currentSlide--,this.innerElements.splice(e,1),this.buildSliderFrame(),t&&t.call(this)}},{key:"insert",value:function(e,t,n){if(t<0||t>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(-1!==this.innerElements.indexOf(e))throw new Error("The same item in a carousel? Really? Nope 😭");var i=0<(t<=this.currentSlide)&&this.innerElements.length;this.currentSlide=i?this.currentSlide+1:this.currentSlide,this.innerElements.splice(t,0,e),this.buildSliderFrame(),n&&n.call(this)}},{key:"prepend",value:function(e,t){this.insert(e,0),t&&t.call(this)}},{key:"append",value:function(e,t){this.insert(e,this.innerElements.length+1),t&&t.call(this)}},{key:"destroy",value:function(e,t){var n=0<arguments.length&&void 0!==e&&e,i=t;if(this.detachEvents(),this.selector.style.cursor="auto",n){for(var r=document.createDocumentFragment(),a=0;a<this.innerElements.length;a++)r.appendChild(this.innerElements[a]);this.selector.innerHTML="",this.selector.appendChild(r),this.selector.removeAttribute("style")}i&&i.call(this)}}],[{key:"mergeSettings",value:function(e){var t={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:function(){},onChange:function(){}},n=e;for(var i in n)t[i]=n[i];return t}},{key:"webkitOrNot",value:function(){return"string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform"}}]),a);function a(e){var t=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),this.config=a.mergeSettings(e),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,null===this.selector)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.loop?this.config.startIndex%this.innerElements.length:Math.max(0,Math.min(this.config.startIndex,this.innerElements.length-this.perPage)),this.transformProperty=a.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler","clickHandler"].forEach(function(e){t[e]=t[e].bind(t)}),this.init()}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}t.default=r,e.exports=t.default}],i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0);function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}var n,r},"object"==s(a)&&"object"==s(e)?e.exports=r():(n=[],void 0===(i="function"==typeof(t=r)?t.apply(a,n):t)||(e.exports=i))}).call(this,t("./node_modules/webpack/buildin/module.js")(e))},"./node_modules/vanilla-lazyload/dist/lazyload.min.js":function(e,t,n){var i,r,a;function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a=function(){"use strict";function t(){return(t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function s(e){return t({},$,e)}function r(e,t){var n,i=new e(t);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:i}})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:i})}window.dispatchEvent(n)}function _(e,t){return e.getAttribute("data-"+t)}function w(e,t,n){var i="data-"+t;null!==n?e.setAttribute(i,n):e.removeAttribute(i)}function g(e){return _(e,"ll-status")}function k(e,t){return w(e,"ll-status",t)}function v(e){return k(e,null),0}function b(e){return null===g(e)}function o(e){return"native"===g(e)}function E(e,t,n,i){e&&(void 0===i?void 0===n?e(t):e(t,n):e(t,n,i))}function S(e,t){Y?e.classList.add(t):e.className+=(e.className?" ":"")+t}function y(e,t){Y?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")}function L(e){return e.llTempImage}function x(e,t){var n;!t||(n=t._observer)&&n.unobserve(e)}function P(e,t){e&&(e.loadingCount+=t)}function l(e,t){e&&(e.toLoadCount=t)}function i(e){for(var t,n=[],i=0;t=e.children[i];i+=1)"SOURCE"===t.tagName&&n.push(t);return n}function n(e,t,n){n&&e.setAttribute(t,n)}function a(e,t){e.removeAttribute(t)}function c(e){return!!e.llOriginalAttrs}function d(e){var t;c(e)||((t={}).src=e.getAttribute("src"),t.srcset=e.getAttribute("srcset"),t.sizes=e.getAttribute("sizes"),e.llOriginalAttrs=t)}function I(e){var t;c(e)&&(t=e.llOriginalAttrs,n(e,"src",t.src),n(e,"srcset",t.srcset),n(e,"sizes",t.sizes))}function u(e,t){n(e,"sizes",_(e,t.data_sizes)),n(e,"srcset",_(e,t.data_srcset)),n(e,"src",_(e,t.data_src))}function j(e){a(e,"src"),a(e,"srcset"),a(e,"sizes")}function T(e,t){var n=e.parentNode;n&&"PICTURE"===n.tagName&&i(n).forEach(t)}function h(e,t){i(e).forEach(t)}function f(e,t){var n=J[e.tagName];n&&n(e,t)}function C(e,t,n){P(n,1),S(e,t.class_loading),k(e,"loading"),E(t.callback_loading,e,n)}function m(e,t){var n,i,r=K[e.tagName];r?r(e,t):(w(n=e,(i=t).data_bg,null),w(n,i.data_bg_hidpi,null))}function p(e,t){!t||0<t.loadingCount||0<t.toLoadCount||E(e.callback_finish,t)}function A(e,t,n){e.addEventListener(t,n),e.llEvLisnrs[t]=n}function H(e){return!!e.llEvLisnrs}function M(e){if(H(e)){var t=e.llEvLisnrs;for(var n in t){var i=t[n];r=n,a=i,e.removeEventListener(r,a)}delete e.llEvLisnrs}var r,a}function O(e,t,n){delete e.llTempImage,P(n,-1),n&&--n.toLoadCount,y(e,t.class_loading),t.unobserve_completed&&x(e,n)}function q(n,i,r){var a=L(n)||n;H(a)||function(e){H(e)||(e.llEvLisnrs={});var t="VIDEO"===e.tagName?"loadeddata":"load";A(e,t,function(e){!function(e,t,n,i){var r=o(t);O(t,n,i),S(t,n.class_loaded),k(t,"loaded"),m(t,n),E(n.callback_loaded,t,i),r||p(n,i)}(0,n,i,r),M(a)}),A(e,"error",function(e){!function(e,t,n,i){var r=o(t);O(t,n,i),S(t,n.class_error),k(t,"error"),E(n.callback_error,t,i),r||p(n,i)}(0,n,i,r),M(a)})}(a)}function z(e,t,n){var i,r,a,o,s,l,c,d,u,h,f,m,p,g,v,b,y;e.llTempImage=document.createElement("IMG"),q(e,t,n),g=n,v=_(m=e,(p=t).data_bg),b=_(m,p.data_bg_hidpi),(y=Z&&b?b:v)&&(m.style.backgroundImage='url("'.concat(y,'")'),L(m).setAttribute("src",y),C(m,p,g)),a=n,u=_(i=e,(r=t).data_bg_multi),h=_(i,r.data_bg_multi_hidpi),(f=Z&&h?h:u)&&(i.style.backgroundImage=f,l=a,S(o=i,(s=r).class_applied),k(o,"applied"),w(c=o,(d=s).data_bg_multi,null),w(c,d.data_bg_multi_hidpi,null),s.unobserve_completed&&x(o,s),E(s.callback_applied,o,l))}function D(e,t,n){var i,r,a;-1<Q.indexOf(e.tagName)?(q(i=e,r=t,a=n),f(i,r),C(i,r,a)):z(e,t,n)}function F(e){return e.use_native&&"loading"in HTMLImageElement.prototype}function N(e,m,p){e.forEach(function(e){return e.isIntersecting||0<e.intersectionRatio?(u=e.target,f=p,E((h=m).callback_enter,u,e,f),h.unobserve_entered&&x(u,f),void(b(u)&&D(u,h,f))):(t=e.target,n=e,i=m,r=p,void(b(t)||(a=t,o=n,l=r,(s=i).cancel_on_exit&&"loading"===g(a)&&"IMG"===a.tagName&&(M(a),T(d=a,function(e){j(e)}),j(d),T(c=a,function(e){I(e)}),I(c),y(a,s.class_loading),P(l,-1),v(a),E(s.callback_cancel,a,o,l)),E(i.callback_exit,t,n,r))));var t,n,i,r,a,o,s,l,c,d,u,h,f})}function X(e){return Array.prototype.slice.call(e)}function R(e){return e.container.querySelectorAll(e.elements_selector)}function W(e){return"error"===g(e)}function G(e,t){return n=e||R(t),X(n).filter(b);var n}function e(e,t){var i,r,n,a,o=s(e);this._settings=o,this.loadingCount=0,n=o,a=this,B&&!F(n)&&(a._observer=new IntersectionObserver(function(e){N(e,n,a)},{root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"})),i=o,r=this,V&&window.addEventListener("online",function(){var t,e,n;e=r,n=R(t=i),X(n).filter(W).forEach(function(e){y(e,t.class_error),v(e)}),e.update()}),this.update(t)}var V="undefined"!=typeof window,U=V&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),B=V&&"IntersectionObserver"in window,Y=V&&"classList"in document.createElement("p"),Z=V&&1<window.devicePixelRatio,$={elements_selector:"IMG",container:U||V?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!1,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},J={IMG:function(e,t){T(e,function(e){d(e),u(e,t)}),d(e),u(e,t)},IFRAME:function(e,t){n(e,"src",_(e,t.data_src))},VIDEO:function(e,t){h(e,function(e){n(e,"src",_(e,t.data_src))}),n(e,"poster",_(e,t.data_poster)),n(e,"src",_(e,t.data_src)),e.load()}},K={IMG:function(e,t){w(e,t.data_src,null),w(e,t.data_srcset,null),w(e,t.data_sizes,null),T(e,function(e){w(e,t.data_srcset,null),w(e,t.data_sizes,null)})},IFRAME:function(e,t){w(e,t.data_src,null)},VIDEO:function(e,t){w(e,t.data_src,null),w(e,t.data_poster,null),h(e,function(e){w(e,t.data_src,null)})}},Q=["IMG","IFRAME","VIDEO"],ee=["IMG","IFRAME"];return e.prototype={update:function(e){var t,n,i,r,a,o=this._settings,s=G(e,o);l(this,s.length),!U&&B?F(o)?(r=o,a=this,s.forEach(function(e){var t,n;-1!==ee.indexOf(e.tagName)&&(e.setAttribute("loading","lazy"),q(t=e,n=r,a),f(t,n),m(t,n),k(t,"native"))}),l(a,0)):(n=s,(t=this._observer).disconnect(),i=t,n.forEach(function(e){i.observe(e)})):this.loadAll(s)},destroy:function(){this._observer&&this._observer.disconnect(),R(this._settings).forEach(function(e){delete e.llOriginalAttrs}),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(e){var t=this,n=this._settings;G(e,n).forEach(function(e){D(e,n,t)})}},e.load=function(e,t){var n=s(t);D(e,n)},e.resetStatus=function(e){v(e)},V&&function(e,t){if(t)if(t.length)for(var n,i=0;n=t[i];i+=1)r(e,n);else r(e,t)}(e,window.lazyLoadOptions),e},"object"==o(t)&&void 0!==e?e.exports=a():void 0===(r="function"==typeof(i=a)?i.call(t,n,t,e):i)||(e.exports=r)},"./node_modules/webpack/buildin/module.js":function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"./src/js/pages/homepage.js":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/siema/dist/siema.min.js"),a=n.n(i),r=n("./src/js/partten/mobileAndTabletCheck.js");if("/"===window.location.pathname||"/wolfactive-gamewiki/"===window.location.pathname){var o=window.location.protocol,s=window.location.hostname,l=document.querySelectorAll("#carouselContainBig .carousel__item"),c=document.querySelector(".carousel__big-btn"),d=new a.a({selector:"#carouselContainBig",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!0,rtl:!1,onInit:function(){},onChange:function(){}});1<l.length&&(c.innerHTML='\n    <button class="btn" aria-label="carousel-prev"><i class="fas fa-chevron-left icon"></i></button>\n    <button class="btn" aria-label="carousel-next"><i class="fas fa-chevron-right icon"></i></button>\n    ',document.querySelector('button[aria-label="carousel-prev"]').addEventListener("click",function(){return d.prev()}),document.querySelector('button[aria-label="carousel-next"]').addEventListener("click",function(){return d.next()}));var u=Object(r.mobileAndTabletCheck)();if(!1===u){var h=document.querySelectorAll("#latestVideo .slider_video .images_latest_video"),f=document.querySelector("#latestVideo .slider_video-dot"),m=Math.ceil(h.length/3),p=new a.a({selector:".slider_video",duration:200,easing:"ease-out",perPage:3,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:function(){},onChange:function(){}});if(1<m){for(var g="",v=1;v<=m;v++)g+='<span class="d--inline--block mxr-5 dotVideo"><i class="fas fa-circle"></i></span>';f.innerHTML=g,(y=document.querySelectorAll(".dotVideo"))[0].classList.add("active"),y.forEach(function(e,t){e.addEventListener("click",function(){0!==t?(y.forEach(function(e){e.classList.remove("active")}),e.classList.add("active"),p.goTo(3*(t+1)-2)):(y.forEach(function(e){e.classList.remove("active")}),e.classList.add("active"),p.goTo(t))})})}}else if(!0===u){var h=document.querySelectorAll("#latestVideo .slider_video .images_latest_video"),f=document.querySelector("#latestVideo .slider_video-dot"),m=Math.ceil(+h.length),b=new a.a({selector:".slider_video",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:function(){},onChange:function(){}});if(1<m){for(var y,_="",w=1;w<=m;w++)_+='<span class="d--inline--block mxr-5 dotVideo"><i class="fas fa-circle"></i></span>';f.innerHTML=_,(y=document.querySelectorAll(".dotVideo"))[0].classList.add("active"),y.forEach(function(e,t){e.addEventListener("click",function(){0!==t?(y.forEach(function(e){e.classList.remove("active")}),e.classList.add("active"),b.goTo(3*(t+1)-2)):(y.forEach(function(e){e.classList.remove("active")}),e.classList.add("active"),b.goTo(t))})})}}var k,E,S=document.querySelector(".postList .postList__btn"),L=document.querySelectorAll(".postList .postList__item");u?u&&(k=new a.a({selector:".postList__contain",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:function(){},onChange:function(){}}),4<L.length&&(S.innerHTML='\n        <button class="btn" aria-label="post-list-prev"><i class="fas fa-chevron-left icon"></i></button>\n        <button class="btn" aria-label="post-list-next"><i class="fas fa-chevron-right icon"></i></button>\n        ',document.querySelector('button[aria-label="post-list-next"]').addEventListener("click",function(){return k.prev()}),document.querySelector('button[aria-label="post-list-prev"]').addEventListener("click",function(){return k.next()}))):(E=new a.a({selector:".postList__contain",duration:200,easing:"ease-out",perPage:4,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:function(){},onChange:function(){}}),4<L.length&&(S.innerHTML='\n        <button class="btn" aria-label="post-list-prev"><i class="fas fa-chevron-left icon"></i></button>\n        <button class="btn" aria-label="post-list-next"><i class="fas fa-chevron-right icon"></i></button>\n        ',document.querySelector('button[aria-label="post-list-next"]').addEventListener("click",function(){return E.prev()}),document.querySelector('button[aria-label="post-list-prev"]').addEventListener("click",function(){return E.next()}))),document.querySelectorAll(".categoryList .categoryList__contain .term__link").forEach(function(n){n.onclick=function(){var e=n.getAttribute("data-show"),t="";"/"===window.location.pathname?t="".concat(o,"//").concat(s,"/wp-json/blog-api/v1/blog/offset=0&category=").concat(e):"/wolfactive-gamewiki/"===window.location.pathname&&(t="".concat(o,"//").concat(s,"/wolfactive-gamewiki/wp-json/blog-api/v1/blog/offset=0&category=").concat(e)),fetch(t).then(function(e){return e.json()}).then(function(e){var t,n,i="",r=document.querySelector(".postList .postList__contain");r.innerHTML="",e.forEach(function(e){i+='\n          <div class="postList__item d--block">\n            <div class="postList__item-img">\n              '.concat(e.thumbnail,'\n            </div>\n            <a href="').concat(e.url,'" class="postList__item-title">\n              <h3 class="title--item">').concat(e.title,"</h3>\n            </a>\n          </div>\n          ")}),r.innerHTML=i,u?u&&(t=new a.a({selector:".postList__contain",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:function(){},onChange:function(){}}),4<L.length&&(S.innerHTML='\n              <button class="btn" aria-label="post-list-prev"><i class="fas fa-chevron-left icon"></i></button>\n              <button class="btn" aria-label="post-list-next"><i class="fas fa-chevron-right icon"></i></button>\n              ',document.querySelector('button[aria-label="post-list-next"]').addEventListener("click",function(){return t.prev()}),document.querySelector('button[aria-label="post-list-prev"]').addEventListener("click",function(){return t.next()}))):(n=new a.a({selector:".postList__contain",duration:200,easing:"ease-out",perPage:4,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:function(){},onChange:function(){}}),4<L.length&&(S.innerHTML='\n              <button class="btn" aria-label="post-list-prev"><i class="fas fa-chevron-left icon"></i></button>\n              <button class="btn" aria-label="post-list-next"><i class="fas fa-chevron-right icon"></i></button>\n              ',document.querySelector('button[aria-label="post-list-next"]').addEventListener("click",function(){return n.prev()}),document.querySelector('button[aria-label="post-list-prev"]').addEventListener("click",function(){return n.next()})))}).catch(function(e){return console.log(e)})}});var x=document.querySelector(".game_strategy .gtr_see_more"),P=document.querySelector(".game_strategy .game_strategy-list"),I=12;x.onclick=function(){var e="";"/"===window.location.pathname?e="".concat(o,"//").concat(s,"/wp-json/gamewiki-api/v1/gamewiki/offset=").concat(I):"/wolfactive-gamewiki/"===window.location.pathname&&(e="".concat(o,"//").concat(s,"/wolfactive-gamewiki/wp-json/gamewiki-api/v1/gamewiki/offset=").concat(I)),fetch(e).then(function(e){return e.json()}).then(function(e){var t="";e.forEach(function(e){t+='\n        <div class="col-divide-2 mc-mg col-divide-sm-6 col-divide-md-3">\n            <div class="images_game_str">\n                <a href="'.concat(e.url,'">').concat(e.thumbnail,'</a>\n            </div>\n            <div class="title_game_str">\n                <a href="').concat(e.url,'">').concat(e.title,"</a>\n            </div>\n        </div>\n        ")}),P.innerHTML+=t,12!==e.length?x.style.display="none":12===e.length&&(I+=11)})},fetch("http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topfreeapplications/genre=6014/limit=5/json?s=143471").then(function(e){return e.json()}).then(function(e){console.log(e.feed.entry);var t="",n=document.querySelector("#freeGameRanking");e.feed.entry.forEach(function(e){t+='\n      <div class="app-ranking__item">\n        <div class="app-ranking__item-contain">\n          <div class="app-ranking__item-img">\n            <img src="'.concat(e["im:image"][0].label,'" alt="').concat(e["im:name"].label,'" />\n          </div>\n          <div class="app-ranking__description">\n            <p class="title--item">').concat(e.title.label,'</p>          \n          </div>\n        </div>\n        <div class="app-ranking__item-btn">\n          <a href="').concat(e.id.label,'" target="_blank" rel="noopener noreferrer">\n            <i class="fas fa-cloud-download-alt"></i>\n          </a>\n        </div>\n      </div>\n      ')}),n.innerHTML=t}),fetch("http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topgrossingapplications/genre=6014/limit=5/json?s=143471").then(function(e){return e.json()}).then(function(e){console.log(e.feed.entry);var t="",n=document.querySelector("#grossingGameRanking");e.feed.entry.forEach(function(e){t+='\n      <div class="app-ranking__item">\n        <div class="app-ranking__item-contain">\n          <div class="app-ranking__item-img">\n            <img src="'.concat(e["im:image"][0].label,'" alt="').concat(e["im:name"].label,'" />\n          </div>\n          <div class="app-ranking__description">\n            <p class="title--item">').concat(e.title.label,'</p>          \n          </div>\n        </div>\n        <div class="app-ranking__item-btn">\n          <a href="').concat(e.id.label,'" target="_blank" rel="noopener noreferrer">\n            <i class="fas fa-cloud-download-alt"></i>\n          </a>\n        </div>\n      </div>\n      ')}),n.innerHTML=t})}},"./src/js/pages/single.js":function(e,t){var s,n,i,r,a,o,l,c;0!=document.getElementsByClassName("single").length&&(s=function(e,t,n,i){return(e/=i/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},n=document.querySelector("#back-to-top-btn"),window.addEventListener("scroll",function(){300<window.pageYOffset?n.classList.contains("btnEntrance")||(n.classList.remove("btnExit"),n.classList.add("btnEntrance"),n.style.display="block"):n.classList.contains("btnEntrance")&&(n.classList.remove("btnEntrance"),n.classList.add("btnExit"),setTimeout(function(){n.style.display="none"},250))}),n.addEventListener("click",function(){var i=window.pageYOffset,r=0-i,a=750,o=null;window.requestAnimationFrame(function e(t){o=o||t;var n=t-o;window.scrollTo(0,s(n,i,r,a));n<a&&window.requestAnimationFrame(e)})}),window.onscroll=function(){c()},i=document.getElementById("sideBarLeftScroll"),r=document.getElementById("sidebarRightscroll"),a=document.getElementById("sidebarMenuRankingscroll"),o=document.getElementById("sidebarMenuLeftcroll"),l=i.offsetTop,c=function(){window.pageYOffset>l?(i.classList.add("roll_sidebar"),r.classList.add("roll_sidebar"),a.classList.add("roll_sidebar-menu"),o.classList.add("roll_sidebar-menu")):(i.classList.remove("roll_sidebar"),r.classList.remove("roll_sidebar"),a.classList.remove("roll_sidebar-menu"),o.classList.remove("roll_sidebar-menu"))},fetch("http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topfreeapplications/genre=6014/limit=5/json?s=143471").then(function(e){return e.json()}).then(function(e){console.log(e.feed.entry);var t="",n=document.querySelector("#freeGameRanking");e.feed.entry.forEach(function(e){t+='\n        <div class="app-ranking__item">\n        <div class="app-ranking__item-contain">\n            <div class="app-ranking__item-img">\n            <img src="'.concat(e["im:image"][0].label,'" alt="').concat(e["im:name"].label,'" />\n            </div>\n            <div class="app-ranking__description">\n            <p class="title--item">').concat(e.title.label,'</p>          \n            </div>\n        </div>\n        <div class="app-ranking__item-btn">\n            <a href="').concat(e.id.label,'" target="_blank" rel="noopener noreferrer">\n            <i class="fas fa-cloud-download-alt"></i>\n            </a>\n        </div>\n        </div>\n        ')}),n.innerHTML=t}),fetch("http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topgrossingapplications/genre=6014/limit=5/json?s=143471").then(function(e){return e.json()}).then(function(e){console.log(e.feed.entry);var t="",n=document.querySelector("#grossingGameRanking");e.feed.entry.forEach(function(e){t+='\n        <div class="app-ranking__item">\n        <div class="app-ranking__item-contain">\n            <div class="app-ranking__item-img">\n            <img src="'.concat(e["im:image"][0].label,'" alt="').concat(e["im:name"].label,'" />\n            </div>\n            <div class="app-ranking__description">\n            <p class="title--item">').concat(e.title.label,'</p>          \n            </div>\n        </div>\n        <div class="app-ranking__item-btn">\n            <a href="').concat(e.id.label,'" target="_blank" rel="noopener noreferrer">\n            <i class="fas fa-cloud-download-alt"></i>\n            </a>\n        </div>\n        </div>\n        ')}),n.innerHTML=t}))},"./src/js/partten/mobileAndTabletCheck.js":function(e,t){e.exports={mobileAndTabletCheck:function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t}}},"./src/js/root.js":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/vanilla-lazyload/dist/lazyload.min.js"),r=n.n(i),a=(n("./src/js/pages/homepage.js"),n("./src/js/pages/single.js"),n("./node_modules/shareon/dist/shareon.cjs"),document.querySelectorAll("iframe")),o=document.querySelectorAll("img"),s=document.querySelectorAll("video");a&&function(){for(var e=0;e<a.length;e++)a[e].classList.add("lazy")}(),o&&function(){for(var e=0;e<o.length;e++)o[e].classList.add("lazy")}(),s&&function(){for(var e=0;e<s.length;e++)s[e].classList.add("lazy")}();new r.a({elements_selector:".lazy"})}});