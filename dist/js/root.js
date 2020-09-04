/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/root.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/shareon/dist/shareon.mjs":
/*!***********************************************!*\
  !*** ./node_modules/shareon/dist/shareon.mjs ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * shareon v1.4.1 by Nikita Karamov
 * https://shareon.js.org
 */

var urlBuilderMap = {facebook:(d) => `https://www.facebook.com/sharer/sharer.php?u=${d.url}`,linkedin:(d) => `https://www.linkedin.com/shareArticle?mini=true&url=${d.url}&title=${d.title}`,messenger:(d) => `https://www.facebook.com/dialog/send?app_id=3619024578167617&link=${d.url}&redirect_uri=${d.url}`,odnoklassniki:(d) => `https://connect.ok.ru/offer?url=${d.url}&title=${d.title}${d.media ? `&imageUrl=${d.media}` : ''}`,pinterest:(d) => `https://pinterest.com/pin/create/button/?url=${d.url}&description=${d.title}${d.media ? `&media=${d.media}` : ''}`,pocket:(d) => `https://getpocket.com/edit.php?url=${d.url}`,reddit:(d) => `https://www.reddit.com/submit?title=${d.title}&url=${d.url}`,telegram:(d) => `https://telegram.me/share/url?url=${d.url}${d.text ? `&text=${d.text}` : ''}`,twitter:(d) => `https://twitter.com/intent/tweet?url=${d.url}&text=${d.title}${d.via ? `&via=${d.via}` : ''}`,viber:(d) => `viber://forward?text=${d.title}%0D%0A${d.url}${d.text ? `%0D%0A%0D%0A${d.text}` : ''}`,vkontakte:(d) => `https://vk.com/share.php?url=${d.url}&title=${d.title}${d.media ? `&image=${d.media}` : ''}`,whatsapp:(d) => `whatsapp://send?text=${d.title}%0D%0A${d.url}${d.text ? `%0D%0A%0D%0A${d.text}` : ''}`};

// eslint-disable-next-line import/no-unresolved

const initializeShareon = () => {
  const shareonContainers = document.getElementsByClassName('shareon');

  // iterate over <div class="shareon">
  for (let i = 0; i < shareonContainers.length; i += 1) {
    /** @type Element */
    const container = shareonContainers[i];

    // iterate over children of <div class="shareon">
    for (let j = 0; j < container.children.length; j += 1) {
      /** @type Element */
      const child = container.children[j];

      if (child) {
        const classListLength = child.classList.length;

        // iterate over classes of the child element
        for (let k = 0; k < classListLength; k += 1) {
          const cls = child.classList.item(k);

          // if it's one of the networks
          if (Object.prototype.hasOwnProperty.call(urlBuilderMap, cls)) {
            const preset = {
              url: encodeURIComponent(
                child.dataset.url
                || container.dataset.url
                || window.location.href,
              ),
              title: encodeURIComponent(
                child.dataset.title
                || container.dataset.title
                || document.title,
              ),
              media: encodeURIComponent(
                child.dataset.media
                || container.dataset.media
                || '',
              ),
              text: encodeURIComponent(
                child.dataset.text
                || container.dataset.text
                || '',
              ),
              via: encodeURIComponent(
                child.dataset.via
                || container.dataset.via
                || '',
              ),
            };
            const url = urlBuilderMap[cls](preset);

            if (child.tagName.toLowerCase() === 'a') {
              child.setAttribute('href', url);
              child.setAttribute('rel', 'noopener noreferrer');
              child.setAttribute('target', '_blank');
            } else {
              child.addEventListener('click', () => {
                window.open(url, '_blank', 'noopener,noreferrer').opener = null;
              });
            }

            break; // once a network is detected we don't want to check further
          }
        }
      }
    }
  }
};

window.onload = () => {
  initializeShareon();
};

/* harmony default export */ __webpack_exports__["default"] = (initializeShareon);


/***/ }),

/***/ "./node_modules/siema/dist/siema.min.js":
/*!**********************************************!*\
  !*** ./node_modules/siema/dist/siema.min.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    function t(r) {
      if (i[r]) return i[r].exports;
      var n = i[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(n.exports, n, n.exports, t), n.l = !0, n.exports;
    }

    var i = {};
    return t.m = e, t.c = i, t.d = function (e, i, r) {
      t.o(e, i) || Object.defineProperty(e, i, {
        configurable: !1,
        enumerable: !0,
        get: r
      });
    }, t.n = function (e) {
      var i = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return t.d(i, "a", i), i;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 0);
  }([function (e, t, i) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    },
        s = function () {
      function e(e, t) {
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }

      return function (t, i, r) {
        return i && e(t.prototype, i), r && e(t, r), t;
      };
    }(),
        l = function () {
      function e(t) {
        var i = this;
        if (r(this, e), this.config = e.mergeSettings(t), this.selector = "string" == typeof this.config.selector ? document.querySelector(this.config.selector) : this.config.selector, null === this.selector) throw new Error("Something wrong with your selector 😭");
        this.resolveSlidesNumber(), this.selectorWidth = this.selector.offsetWidth, this.innerElements = [].slice.call(this.selector.children), this.currentSlide = this.config.loop ? this.config.startIndex % this.innerElements.length : Math.max(0, Math.min(this.config.startIndex, this.innerElements.length - this.perPage)), this.transformProperty = e.webkitOrNot(), ["resizeHandler", "touchstartHandler", "touchendHandler", "touchmoveHandler", "mousedownHandler", "mouseupHandler", "mouseleaveHandler", "mousemoveHandler", "clickHandler"].forEach(function (e) {
          i[e] = i[e].bind(i);
        }), this.init();
      }

      return s(e, [{
        key: "attachEvents",
        value: function value() {
          window.addEventListener("resize", this.resizeHandler), this.config.draggable && (this.pointerDown = !1, this.drag = {
            startX: 0,
            endX: 0,
            startY: 0,
            letItGo: null,
            preventClick: !1
          }, this.selector.addEventListener("touchstart", this.touchstartHandler), this.selector.addEventListener("touchend", this.touchendHandler), this.selector.addEventListener("touchmove", this.touchmoveHandler), this.selector.addEventListener("mousedown", this.mousedownHandler), this.selector.addEventListener("mouseup", this.mouseupHandler), this.selector.addEventListener("mouseleave", this.mouseleaveHandler), this.selector.addEventListener("mousemove", this.mousemoveHandler), this.selector.addEventListener("click", this.clickHandler));
        }
      }, {
        key: "detachEvents",
        value: function value() {
          window.removeEventListener("resize", this.resizeHandler), this.selector.removeEventListener("touchstart", this.touchstartHandler), this.selector.removeEventListener("touchend", this.touchendHandler), this.selector.removeEventListener("touchmove", this.touchmoveHandler), this.selector.removeEventListener("mousedown", this.mousedownHandler), this.selector.removeEventListener("mouseup", this.mouseupHandler), this.selector.removeEventListener("mouseleave", this.mouseleaveHandler), this.selector.removeEventListener("mousemove", this.mousemoveHandler), this.selector.removeEventListener("click", this.clickHandler);
        }
      }, {
        key: "init",
        value: function value() {
          this.attachEvents(), this.selector.style.overflow = "hidden", this.selector.style.direction = this.config.rtl ? "rtl" : "ltr", this.buildSliderFrame(), this.config.onInit.call(this);
        }
      }, {
        key: "buildSliderFrame",
        value: function value() {
          var e = this.selectorWidth / this.perPage,
              t = this.config.loop ? this.innerElements.length + 2 * this.perPage : this.innerElements.length;
          this.sliderFrame = document.createElement("div"), this.sliderFrame.style.width = e * t + "px", this.enableTransition(), this.config.draggable && (this.selector.style.cursor = "-webkit-grab");
          var i = document.createDocumentFragment();
          if (this.config.loop) for (var r = this.innerElements.length - this.perPage; r < this.innerElements.length; r++) {
            var n = this.buildSliderFrameItem(this.innerElements[r].cloneNode(!0));
            i.appendChild(n);
          }

          for (var s = 0; s < this.innerElements.length; s++) {
            var l = this.buildSliderFrameItem(this.innerElements[s]);
            i.appendChild(l);
          }

          if (this.config.loop) for (var o = 0; o < this.perPage; o++) {
            var a = this.buildSliderFrameItem(this.innerElements[o].cloneNode(!0));
            i.appendChild(a);
          }
          this.sliderFrame.appendChild(i), this.selector.innerHTML = "", this.selector.appendChild(this.sliderFrame), this.slideToCurrent();
        }
      }, {
        key: "buildSliderFrameItem",
        value: function value(e) {
          var t = document.createElement("div");
          return t.style.cssFloat = this.config.rtl ? "right" : "left", t.style["float"] = this.config.rtl ? "right" : "left", t.style.width = (this.config.loop ? 100 / (this.innerElements.length + 2 * this.perPage) : 100 / this.innerElements.length) + "%", t.appendChild(e), t;
        }
      }, {
        key: "resolveSlidesNumber",
        value: function value() {
          if ("number" == typeof this.config.perPage) this.perPage = this.config.perPage;else if ("object" === n(this.config.perPage)) {
            this.perPage = 1;

            for (var e in this.config.perPage) {
              window.innerWidth >= e && (this.perPage = this.config.perPage[e]);
            }
          }
        }
      }, {
        key: "prev",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
              t = arguments[1];

          if (!(this.innerElements.length <= this.perPage)) {
            var i = this.currentSlide;

            if (this.config.loop) {
              if (this.currentSlide - e < 0) {
                this.disableTransition();
                var r = this.currentSlide + this.innerElements.length,
                    n = this.perPage,
                    s = r + n,
                    l = (this.config.rtl ? 1 : -1) * s * (this.selectorWidth / this.perPage),
                    o = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
                this.sliderFrame.style[this.transformProperty] = "translate3d(" + (l + o) + "px, 0, 0)", this.currentSlide = r - e;
              } else this.currentSlide = this.currentSlide - e;
            } else this.currentSlide = Math.max(this.currentSlide - e, 0);

            i !== this.currentSlide && (this.slideToCurrent(this.config.loop), this.config.onChange.call(this), t && t.call(this));
          }
        }
      }, {
        key: "next",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
              t = arguments[1];

          if (!(this.innerElements.length <= this.perPage)) {
            var i = this.currentSlide;

            if (this.config.loop) {
              if (this.currentSlide + e > this.innerElements.length - this.perPage) {
                this.disableTransition();
                var r = this.currentSlide - this.innerElements.length,
                    n = this.perPage,
                    s = r + n,
                    l = (this.config.rtl ? 1 : -1) * s * (this.selectorWidth / this.perPage),
                    o = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
                this.sliderFrame.style[this.transformProperty] = "translate3d(" + (l + o) + "px, 0, 0)", this.currentSlide = r + e;
              } else this.currentSlide = this.currentSlide + e;
            } else this.currentSlide = Math.min(this.currentSlide + e, this.innerElements.length - this.perPage);

            i !== this.currentSlide && (this.slideToCurrent(this.config.loop), this.config.onChange.call(this), t && t.call(this));
          }
        }
      }, {
        key: "disableTransition",
        value: function value() {
          this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
        }
      }, {
        key: "enableTransition",
        value: function value() {
          this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing;
        }
      }, {
        key: "goTo",
        value: function value(e, t) {
          if (!(this.innerElements.length <= this.perPage)) {
            var i = this.currentSlide;
            this.currentSlide = this.config.loop ? e % this.innerElements.length : Math.min(Math.max(e, 0), this.innerElements.length - this.perPage), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this));
          }
        }
      }, {
        key: "slideToCurrent",
        value: function value(e) {
          var t = this,
              i = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide,
              r = (this.config.rtl ? 1 : -1) * i * (this.selectorWidth / this.perPage);
          e ? requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              t.enableTransition(), t.sliderFrame.style[t.transformProperty] = "translate3d(" + r + "px, 0, 0)";
            });
          }) : this.sliderFrame.style[this.transformProperty] = "translate3d(" + r + "px, 0, 0)";
        }
      }, {
        key: "updateAfterDrag",
        value: function value() {
          var e = (this.config.rtl ? -1 : 1) * (this.drag.endX - this.drag.startX),
              t = Math.abs(e),
              i = this.config.multipleDrag ? Math.ceil(t / (this.selectorWidth / this.perPage)) : 1,
              r = e > 0 && this.currentSlide - i < 0,
              n = e < 0 && this.currentSlide + i > this.innerElements.length - this.perPage;
          e > 0 && t > this.config.threshold && this.innerElements.length > this.perPage ? this.prev(i) : e < 0 && t > this.config.threshold && this.innerElements.length > this.perPage && this.next(i), this.slideToCurrent(r || n);
        }
      }, {
        key: "resizeHandler",
        value: function value() {
          this.resolveSlidesNumber(), this.currentSlide + this.perPage > this.innerElements.length && (this.currentSlide = this.innerElements.length <= this.perPage ? 0 : this.innerElements.length - this.perPage), this.selectorWidth = this.selector.offsetWidth, this.buildSliderFrame();
        }
      }, {
        key: "clearDrag",
        value: function value() {
          this.drag = {
            startX: 0,
            endX: 0,
            startY: 0,
            letItGo: null,
            preventClick: this.drag.preventClick
          };
        }
      }, {
        key: "touchstartHandler",
        value: function value(e) {
          -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.target.nodeName) || (e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.touches[0].pageX, this.drag.startY = e.touches[0].pageY);
        }
      }, {
        key: "touchendHandler",
        value: function value(e) {
          e.stopPropagation(), this.pointerDown = !1, this.enableTransition(), this.drag.endX && this.updateAfterDrag(), this.clearDrag();
        }
      }, {
        key: "touchmoveHandler",
        value: function value(e) {
          if (e.stopPropagation(), null === this.drag.letItGo && (this.drag.letItGo = Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX)), this.pointerDown && this.drag.letItGo) {
            e.preventDefault(), this.drag.endX = e.touches[0].pageX, this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
            var t = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide,
                i = t * (this.selectorWidth / this.perPage),
                r = this.drag.endX - this.drag.startX,
                n = this.config.rtl ? i + r : i - r;
            this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.config.rtl ? 1 : -1) * n + "px, 0, 0)";
          }
        }
      }, {
        key: "mousedownHandler",
        value: function value(e) {
          -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.target.nodeName) || (e.preventDefault(), e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.pageX);
        }
      }, {
        key: "mouseupHandler",
        value: function value(e) {
          e.stopPropagation(), this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.enableTransition(), this.drag.endX && this.updateAfterDrag(), this.clearDrag();
        }
      }, {
        key: "mousemoveHandler",
        value: function value(e) {
          if (e.preventDefault(), this.pointerDown) {
            "A" === e.target.nodeName && (this.drag.preventClick = !0), this.drag.endX = e.pageX, this.selector.style.cursor = "-webkit-grabbing", this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
            var t = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide,
                i = t * (this.selectorWidth / this.perPage),
                r = this.drag.endX - this.drag.startX,
                n = this.config.rtl ? i + r : i - r;
            this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.config.rtl ? 1 : -1) * n + "px, 0, 0)";
          }
        }
      }, {
        key: "mouseleaveHandler",
        value: function value(e) {
          this.pointerDown && (this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.drag.endX = e.pageX, this.drag.preventClick = !1, this.enableTransition(), this.updateAfterDrag(), this.clearDrag());
        }
      }, {
        key: "clickHandler",
        value: function value(e) {
          this.drag.preventClick && e.preventDefault(), this.drag.preventClick = !1;
        }
      }, {
        key: "remove",
        value: function value(e, t) {
          if (e < 0 || e >= this.innerElements.length) throw new Error("Item to remove doesn't exist 😭");
          var i = e < this.currentSlide,
              r = this.currentSlide + this.perPage - 1 === e;
          (i || r) && this.currentSlide--, this.innerElements.splice(e, 1), this.buildSliderFrame(), t && t.call(this);
        }
      }, {
        key: "insert",
        value: function value(e, t, i) {
          if (t < 0 || t > this.innerElements.length + 1) throw new Error("Unable to inset it at this index 😭");
          if (-1 !== this.innerElements.indexOf(e)) throw new Error("The same item in a carousel? Really? Nope 😭");
          var r = t <= this.currentSlide > 0 && this.innerElements.length;
          this.currentSlide = r ? this.currentSlide + 1 : this.currentSlide, this.innerElements.splice(t, 0, e), this.buildSliderFrame(), i && i.call(this);
        }
      }, {
        key: "prepend",
        value: function value(e, t) {
          this.insert(e, 0), t && t.call(this);
        }
      }, {
        key: "append",
        value: function value(e, t) {
          this.insert(e, this.innerElements.length + 1), t && t.call(this);
        }
      }, {
        key: "destroy",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = arguments[1];

          if (this.detachEvents(), this.selector.style.cursor = "auto", e) {
            for (var i = document.createDocumentFragment(), r = 0; r < this.innerElements.length; r++) {
              i.appendChild(this.innerElements[r]);
            }

            this.selector.innerHTML = "", this.selector.appendChild(i), this.selector.removeAttribute("style");
          }

          t && t.call(this);
        }
      }], [{
        key: "mergeSettings",
        value: function value(e) {
          var t = {
            selector: ".siema",
            duration: 200,
            easing: "ease-out",
            perPage: 1,
            startIndex: 0,
            draggable: !0,
            multipleDrag: !0,
            threshold: 20,
            loop: !1,
            rtl: !1,
            onInit: function onInit() {},
            onChange: function onChange() {}
          },
              i = e;

          for (var r in i) {
            t[r] = i[r];
          }

          return t;
        }
      }, {
        key: "webkitOrNot",
        value: function value() {
          return "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform";
        }
      }]), e;
    }();

    t["default"] = l, e.exports = t["default"];
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/vanilla-lazyload/dist/lazyload.min.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-lazyload/dist/lazyload.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, n) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = n() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function t() {
    return (t = Object.assign || function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var e = arguments[n];

        for (var i in e) {
          Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        }
      }

      return t;
    }).apply(this, arguments);
  }

  var n = "undefined" != typeof window,
      e = n && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
      i = n && "IntersectionObserver" in window,
      a = n && "classList" in document.createElement("p"),
      o = n && window.devicePixelRatio > 1,
      r = {
    elements_selector: "IMG",
    container: e || n ? document : null,
    threshold: 300,
    thresholds: null,
    data_src: "src",
    data_srcset: "srcset",
    data_sizes: "sizes",
    data_bg: "bg",
    data_bg_hidpi: "bg-hidpi",
    data_bg_multi: "bg-multi",
    data_bg_multi_hidpi: "bg-multi-hidpi",
    data_poster: "poster",
    class_applied: "applied",
    class_loading: "loading",
    class_loaded: "loaded",
    class_error: "error",
    unobserve_completed: !0,
    unobserve_entered: !1,
    cancel_on_exit: !1,
    callback_enter: null,
    callback_exit: null,
    callback_applied: null,
    callback_loading: null,
    callback_loaded: null,
    callback_error: null,
    callback_finish: null,
    callback_cancel: null,
    use_native: !1
  },
      c = function c(n) {
    return t({}, r, n);
  },
      l = function l(t, n) {
    var e,
        i = new t(n);

    try {
      e = new CustomEvent("LazyLoad::Initialized", {
        detail: {
          instance: i
        }
      });
    } catch (t) {
      (e = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
        instance: i
      });
    }

    window.dispatchEvent(e);
  },
      s = function s(t, n) {
    return t.getAttribute("data-" + n);
  },
      u = function u(t, n, e) {
    var i = "data-" + n;
    null !== e ? t.setAttribute(i, e) : t.removeAttribute(i);
  },
      d = function d(t) {
    return s(t, "ll-status");
  },
      f = function f(t, n) {
    return u(t, "ll-status", n);
  },
      _ = function _(t) {
    return f(t, null);
  },
      g = function g(t) {
    return null === d(t);
  },
      v = function v(t) {
    return "native" === d(t);
  },
      b = function b(t, n, e, i) {
    t && (void 0 === i ? void 0 === e ? t(n) : t(n, e) : t(n, e, i));
  },
      p = function p(t, n) {
    a ? t.classList.add(n) : t.className += (t.className ? " " : "") + n;
  },
      h = function h(t, n) {
    a ? t.classList.remove(n) : t.className = t.className.replace(new RegExp("(^|\\s+)" + n + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
  },
      m = function m(t) {
    return t.llTempImage;
  },
      E = function E(t, n) {
    if (n) {
      var e = n._observer;
      e && e.unobserve(t);
    }
  },
      I = function I(t, n) {
    t && (t.loadingCount += n);
  },
      A = function A(t, n) {
    t && (t.toLoadCount = n);
  },
      L = function L(t) {
    for (var n, e = [], i = 0; n = t.children[i]; i += 1) {
      "SOURCE" === n.tagName && e.push(n);
    }

    return e;
  },
      y = function y(t, n, e) {
    e && t.setAttribute(n, e);
  },
      w = function w(t, n) {
    t.removeAttribute(n);
  },
      k = function k(t) {
    return !!t.llOriginalAttrs;
  },
      z = function z(t) {
    if (!k(t)) {
      var n = {};
      n.src = t.getAttribute("src"), n.srcset = t.getAttribute("srcset"), n.sizes = t.getAttribute("sizes"), t.llOriginalAttrs = n;
    }
  },
      O = function O(t) {
    if (k(t)) {
      var n = t.llOriginalAttrs;
      y(t, "src", n.src), y(t, "srcset", n.srcset), y(t, "sizes", n.sizes);
    }
  },
      C = function C(t, n) {
    y(t, "sizes", s(t, n.data_sizes)), y(t, "srcset", s(t, n.data_srcset)), y(t, "src", s(t, n.data_src));
  },
      M = function M(t) {
    w(t, "src"), w(t, "srcset"), w(t, "sizes");
  },
      N = function N(t, n) {
    var e = t.parentNode;
    e && "PICTURE" === e.tagName && L(e).forEach(n);
  },
      x = function x(t, n) {
    L(t).forEach(n);
  },
      R = {
    IMG: function IMG(t, n) {
      N(t, function (t) {
        z(t), C(t, n);
      }), z(t), C(t, n);
    },
    IFRAME: function IFRAME(t, n) {
      y(t, "src", s(t, n.data_src));
    },
    VIDEO: function VIDEO(t, n) {
      x(t, function (t) {
        y(t, "src", s(t, n.data_src));
      }), y(t, "poster", s(t, n.data_poster)), y(t, "src", s(t, n.data_src)), t.load();
    }
  },
      G = function G(t, n) {
    var e = R[t.tagName];
    e && e(t, n);
  },
      T = function T(t, n, e) {
    I(e, 1), p(t, n.class_loading), f(t, "loading"), b(n.callback_loading, t, e);
  },
      D = {
    IMG: function IMG(t, n) {
      u(t, n.data_src, null), u(t, n.data_srcset, null), u(t, n.data_sizes, null), N(t, function (t) {
        u(t, n.data_srcset, null), u(t, n.data_sizes, null);
      });
    },
    IFRAME: function IFRAME(t, n) {
      u(t, n.data_src, null);
    },
    VIDEO: function VIDEO(t, n) {
      u(t, n.data_src, null), u(t, n.data_poster, null), x(t, function (t) {
        u(t, n.data_src, null);
      });
    }
  },
      F = function F(t, n) {
    u(t, n.data_bg_multi, null), u(t, n.data_bg_multi_hidpi, null);
  },
      V = function V(t, n) {
    var e = D[t.tagName];
    e ? e(t, n) : function (t, n) {
      u(t, n.data_bg, null), u(t, n.data_bg_hidpi, null);
    }(t, n);
  },
      j = ["IMG", "IFRAME", "VIDEO"],
      P = function P(t, n) {
    !n || function (t) {
      return t.loadingCount > 0;
    }(n) || function (t) {
      return t.toLoadCount > 0;
    }(n) || b(t.callback_finish, n);
  },
      S = function S(t, n, e) {
    t.addEventListener(n, e), t.llEvLisnrs[n] = e;
  },
      U = function U(t, n, e) {
    t.removeEventListener(n, e);
  },
      $ = function $(t) {
    return !!t.llEvLisnrs;
  },
      q = function q(t) {
    if ($(t)) {
      var n = t.llEvLisnrs;

      for (var e in n) {
        var i = n[e];
        U(t, e, i);
      }

      delete t.llEvLisnrs;
    }
  },
      H = function H(t, n, e) {
    !function (t) {
      delete t.llTempImage;
    }(t), I(e, -1), function (t) {
      t && (t.toLoadCount -= 1);
    }(e), h(t, n.class_loading), n.unobserve_completed && E(t, e);
  },
      B = function B(t, n, e) {
    var i = m(t) || t;
    $(i) || function (t, n, e) {
      $(t) || (t.llEvLisnrs = {});
      var i = "VIDEO" === t.tagName ? "loadeddata" : "load";
      S(t, i, n), S(t, "error", e);
    }(i, function (a) {
      !function (t, n, e, i) {
        var a = v(n);
        H(n, e, i), p(n, e.class_loaded), f(n, "loaded"), V(n, e), b(e.callback_loaded, n, i), a || P(e, i);
      }(0, t, n, e), q(i);
    }, function (a) {
      !function (t, n, e, i) {
        var a = v(n);
        H(n, e, i), p(n, e.class_error), f(n, "error"), b(e.callback_error, n, i), a || P(e, i);
      }(0, t, n, e), q(i);
    });
  },
      J = function J(t, n, e) {
    !function (t) {
      t.llTempImage = document.createElement("IMG");
    }(t), B(t, n, e), function (t, n, e) {
      var i = s(t, n.data_bg),
          a = s(t, n.data_bg_hidpi),
          r = o && a ? a : i;
      r && (t.style.backgroundImage = 'url("'.concat(r, '")'), m(t).setAttribute("src", r), T(t, n, e));
    }(t, n, e), function (t, n, e) {
      var i = s(t, n.data_bg_multi),
          a = s(t, n.data_bg_multi_hidpi),
          r = o && a ? a : i;
      r && (t.style.backgroundImage = r, function (t, n, e) {
        p(t, n.class_applied), f(t, "applied"), F(t, n), n.unobserve_completed && E(t, n), b(n.callback_applied, t, e);
      }(t, n, e));
    }(t, n, e);
  },
      K = function K(t, n, e) {
    !function (t) {
      return j.indexOf(t.tagName) > -1;
    }(t) ? J(t, n, e) : function (t, n, e) {
      B(t, n, e), G(t, n), T(t, n, e);
    }(t, n, e);
  },
      Q = ["IMG", "IFRAME"],
      W = function W(t) {
    return t.use_native && "loading" in HTMLImageElement.prototype;
  },
      X = function X(t, n, e) {
    t.forEach(function (t) {
      return function (t) {
        return t.isIntersecting || t.intersectionRatio > 0;
      }(t) ? function (t, n, e, i) {
        b(e.callback_enter, t, n, i), function (t, n, e) {
          n.unobserve_entered && E(t, e);
        }(t, e, i), function (t) {
          return !g(t);
        }(t) || K(t, e, i);
      }(t.target, t, n, e) : function (t, n, e, i) {
        g(t) || (function (t, n, e, i) {
          e.cancel_on_exit && function (t) {
            return "loading" === d(t);
          }(t) && "IMG" === t.tagName && (q(t), function (t) {
            N(t, function (t) {
              M(t);
            }), M(t);
          }(t), function (t) {
            N(t, function (t) {
              O(t);
            }), O(t);
          }(t), h(t, e.class_loading), I(i, -1), _(t), b(e.callback_cancel, t, n, i));
        }(t, n, e, i), b(e.callback_exit, t, n, i));
      }(t.target, t, n, e);
    });
  },
      Y = function Y(t) {
    return Array.prototype.slice.call(t);
  },
      Z = function Z(t) {
    return t.container.querySelectorAll(t.elements_selector);
  },
      tt = function tt(t) {
    return function (t) {
      return "error" === d(t);
    }(t);
  },
      nt = function nt(t, n) {
    return function (t) {
      return Y(t).filter(g);
    }(t || Z(n));
  },
      et = function et(t, e) {
    var a = c(t);
    this._settings = a, this.loadingCount = 0, function (t, n) {
      i && !W(t) && (n._observer = new IntersectionObserver(function (e) {
        X(e, t, n);
      }, function (t) {
        return {
          root: t.container === document ? null : t.container,
          rootMargin: t.thresholds || t.threshold + "px"
        };
      }(t)));
    }(a, this), function (t, e) {
      n && window.addEventListener("online", function () {
        !function (t, n) {
          var e;
          (e = Z(t), Y(e).filter(tt)).forEach(function (n) {
            h(n, t.class_error), _(n);
          }), n.update();
        }(t, e);
      });
    }(a, this), this.update(e);
  };

  return et.prototype = {
    update: function update(t) {
      var n,
          a,
          o = this._settings,
          r = nt(t, o);
      A(this, r.length), !e && i ? W(o) ? function (t, n, e) {
        t.forEach(function (t) {
          -1 !== Q.indexOf(t.tagName) && (t.setAttribute("loading", "lazy"), function (t, n, e) {
            B(t, n, e), G(t, n), V(t, n), f(t, "native");
          }(t, n, e));
        }), A(e, 0);
      }(r, o, this) : (a = r, function (t) {
        t.disconnect();
      }(n = this._observer), function (t, n) {
        n.forEach(function (n) {
          t.observe(n);
        });
      }(n, a)) : this.loadAll(r);
    },
    destroy: function destroy() {
      this._observer && this._observer.disconnect(), Z(this._settings).forEach(function (t) {
        delete t.llOriginalAttrs;
      }), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount;
    },
    loadAll: function loadAll(t) {
      var n = this,
          e = this._settings;
      nt(t, e).forEach(function (t) {
        K(t, e, n);
      });
    }
  }, et.load = function (t, n) {
    var e = c(n);
    K(t, e);
  }, et.resetStatus = function (t) {
    _(t);
  }, n && function (t, n) {
    if (n) if (n.length) for (var e, i = 0; e = n[i]; i += 1) {
      l(t, e);
    } else l(t, n);
  }(et, window.lazyLoadOptions), et;
});

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/js/pages/gamewiki-tab.js":
/*!**************************************!*\
  !*** ./src/js/pages/gamewiki-tab.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var tabItem = document.querySelectorAll('.tab-item');
var tabContent = document.querySelectorAll('.tab-content');
var tabItemBottom = document.querySelectorAll('.gamewiki__tab-item');
var tabContentBottom = document.querySelectorAll('.gamewiki__tab-content');

if (tabItem && tabContent) {
  tabItem.forEach(function (jtem, i) {
    jtem.onclick = function () {
      for (var _i = 0; _i < tabItem.length; _i++) {
        tabItem[_i].classList.remove('active');
      }

      jtem.classList.add('active');
      tabName = event.srcElement.id;
      tabNameId = tabName + 'Content';
      tabContent.forEach(function (item, i) {
        var temp = item.childNodes[0].parentElement.id;
        var tabContentOpen = document.querySelector('#' + tabNameId);

        if (temp == tabNameId) {
          if (tabContentOpen.classList.contains('d--none')) {
            tabContentOpen.classList.remove('d--none');
          }
        } else {
          if (!item.classList.contains('d--none')) {
            item.classList.add('d--none');
          }
        }
      });
    };
  });
}

if (tabItemBottom && tabContentBottom) {
  tabItemBottom.forEach(function (jtem, i) {
    jtem.onclick = function () {
      console.log(event);

      for (var _i2 = 0; _i2 < tabItemBottom.length; _i2++) {
        tabItemBottom[_i2].classList.remove('active');
      }

      jtem.classList.add('active');
      tabName = event.srcElement.id;
      tabNameId = tabName + 'ContentItem';
      console.log(tabNameId);
      tabContentBottom.forEach(function (item, i) {
        var temp = item.childNodes[0].parentElement.id;
        var tabContentBottomOpen = document.querySelector('#' + tabNameId);

        if (temp == tabNameId) {
          if (tabContentBottomOpen.classList.contains('d--none')) {
            tabContentBottomOpen.classList.remove('d--none');
          }
        } else {
          if (!item.classList.contains('d--none')) {
            item.classList.add('d--none');
          }
        }
      });
    };
  });
}

/***/ }),

/***/ "./src/js/pages/homepage.js":
/*!**********************************!*\
  !*** ./src/js/pages/homepage.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var siema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! siema */ "./node_modules/siema/dist/siema.min.js");
/* harmony import */ var siema__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(siema__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partten_mobileAndTabletCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partten/mobileAndTabletCheck */ "./src/js/partten/mobileAndTabletCheck.js");
/* harmony import */ var _partten_mobileAndTabletCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_partten_mobileAndTabletCheck__WEBPACK_IMPORTED_MODULE_1__);


var homepage = document.querySelector('body.home');

if ((window.location.pathname === "/" || window.location.pathname === "/wolfactive-gamewiki/" || window.location.pathname === "/game-wiki/") && homepage) {
  /*First Carousel*/
  var protocol = window.location.protocol;
  var hostname = window.location.hostname;
  var childCarouselItem = document.querySelectorAll('#carouselContainBig .carousel__item');
  var childCarouselBtn = document.querySelector('.carousel__big-btn');
  var carsouselHome = new siema__WEBPACK_IMPORTED_MODULE_0___default.a({
    selector: '#carouselContainBig',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    onInit: function onInit() {},
    onChange: function onChange() {}
  });

  if (childCarouselItem.length > 1) {
    childCarouselBtn.innerHTML = "\n    <button class=\"btn\" aria-label=\"carousel-prev\"><i class=\"fas fa-chevron-left icon\"></i></button>\n    <button class=\"btn\" aria-label=\"carousel-next\"><i class=\"fas fa-chevron-right icon\"></i></button>\n    ";
    document.querySelector('button[aria-label="carousel-prev"]').addEventListener('click', function () {
      return carsouselHome.prev();
    });
    document.querySelector('button[aria-label="carousel-next"]').addEventListener('click', function () {
      return carsouselHome.next();
    });
  }
  /*First Carousel*/

  /*Carousel Video*/


  var mobileCheck = Object(_partten_mobileAndTabletCheck__WEBPACK_IMPORTED_MODULE_1__["mobileAndTabletCheck"])();
  var lastVideoCheck = document.querySelector('.slider_video');

  if (mobileCheck === false && lastVideoCheck) {
    var carouselVideoHomeItem = document.querySelectorAll('#latestVideo .slider_video .images_latest_video');
    var carouselVideoHomeDot = document.querySelector('#latestVideo .slider_video-dot');
    var carouselVideoHomeDotPage = Math.ceil(carouselVideoHomeItem.length / 3);
    var carsouselVideoHome = new siema__WEBPACK_IMPORTED_MODULE_0___default.a({
      selector: '.slider_video',
      duration: 200,
      easing: 'ease-out',
      perPage: 3,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: false,
      rtl: false,
      onInit: function onInit() {},
      onChange: function onChange() {}
    });

    if (carouselVideoHomeDotPage > 1) {
      var content = "";

      for (var i = 1; i <= carouselVideoHomeDotPage; i++) {
        content += "<span class=\"d--inline--block mxr-5 dotVideo\"><i class=\"fas fa-circle\"></i></span>";
      }

      carouselVideoHomeDot.innerHTML = content;
      var dotVideo = document.querySelectorAll('.dotVideo');
      dotVideo[0].classList.add('active');
      dotVideo.forEach(function (item, i) {
        item.addEventListener('click', function () {
          if (i !== 0) {
            dotVideo.forEach(function (item) {
              item.classList.remove('active');
            });
            item.classList.add('active');
            carsouselVideoHome.goTo((i + 1) * 3 - 2);
          } else {
            dotVideo.forEach(function (item) {
              item.classList.remove('active');
            });
            item.classList.add('active');
            carsouselVideoHome.goTo(i);
          }
        });
      });
    }
  } else if (mobileCheck === true && lastVideoCheck) {
    var carouselVideoHomeItem = document.querySelectorAll('#latestVideo .slider_video .images_latest_video');
    var carouselVideoHomeDot = document.querySelector('#latestVideo .slider_video-dot');
    var carouselVideoHomeDotPage = Math.ceil(carouselVideoHomeItem.length / 1);

    var _carsouselVideoHome = new siema__WEBPACK_IMPORTED_MODULE_0___default.a({
      selector: '.slider_video',
      duration: 200,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: false,
      rtl: false,
      onInit: function onInit() {},
      onChange: function onChange() {}
    });

    if (carouselVideoHomeDotPage > 1) {
      var _content = "";

      for (var _i = 1; _i <= carouselVideoHomeDotPage; _i++) {
        _content += "<span class=\"d--inline--block mxr-5 dotVideo\"><i class=\"fas fa-circle\"></i></span>";
      }

      carouselVideoHomeDot.innerHTML = _content;
      var dotVideo = document.querySelectorAll('.dotVideo');
      dotVideo[0].classList.add('active');
      dotVideo.forEach(function (item, i) {
        item.addEventListener('click', function () {
          if (i !== 0) {
            dotVideo.forEach(function (item) {
              item.classList.remove('active');
            });
            item.classList.add('active');

            _carsouselVideoHome.goTo((i + 1) * 3 - 2);
          } else {
            dotVideo.forEach(function (item) {
              item.classList.remove('active');
            });
            item.classList.add('active');

            _carsouselVideoHome.goTo(i);
          }
        });
      });
    }
  }
  /*Carousel Video*/

  /*Post Carousel*/


  var carsouselPostHomeBtn = document.querySelector('.postList .postList__btn');
  var caroselPostList = document.querySelectorAll('.postList .postList__item');

  if (!mobileCheck) {
    var carsouselPostHome = new siema__WEBPACK_IMPORTED_MODULE_0___default.a({
      selector: '.postList__contain',
      duration: 200,
      easing: 'ease-out',
      perPage: 4,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: false,
      rtl: false,
      onInit: function onInit() {},
      onChange: function onChange() {}
    });

    if (caroselPostList.length > 4) {
      carsouselPostHomeBtn.innerHTML = "\n        <button class=\"btn\" aria-label=\"post-list-prev\"><i class=\"fas fa-chevron-left icon\"></i></button>\n        <button class=\"btn\" aria-label=\"post-list-next\"><i class=\"fas fa-chevron-right icon\"></i></button>\n        ";
      document.querySelector('button[aria-label="post-list-next"]').addEventListener('click', function () {
        return carsouselPostHome.prev();
      });
      document.querySelector('button[aria-label="post-list-prev"]').addEventListener('click', function () {
        return carsouselPostHome.next();
      });
    }
  } else if (mobileCheck) {
    var _carsouselPostHome = new siema__WEBPACK_IMPORTED_MODULE_0___default.a({
      selector: '.postList__contain',
      duration: 200,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: false,
      rtl: false,
      onInit: function onInit() {},
      onChange: function onChange() {}
    });

    if (caroselPostList.length > 4) {
      carsouselPostHomeBtn.innerHTML = "\n        <button class=\"btn\" aria-label=\"post-list-prev\"><i class=\"fas fa-chevron-left icon\"></i></button>\n        <button class=\"btn\" aria-label=\"post-list-next\"><i class=\"fas fa-chevron-right icon\"></i></button>\n        ";
      document.querySelector('button[aria-label="post-list-next"]').addEventListener('click', function () {
        return _carsouselPostHome.prev();
      });
      document.querySelector('button[aria-label="post-list-prev"]').addEventListener('click', function () {
        return _carsouselPostHome.next();
      });
    }
  }
  /*Post Carousel*/

  /*Clik show post category*/


  var categoryList = document.querySelectorAll('.categoryList .categoryList__contain .term__link');
  categoryList.forEach(function (item) {
    item.onclick = function () {
      var category = item.getAttribute("data-show");
      var apiUrl = "";

      if (window.location.pathname === "/") {
        apiUrl = "".concat(protocol, "//").concat(hostname, "/wp-json/blog-api/v1/blog/offset=0&category=").concat(category);
      } else if (window.location.pathname === "/wolfactive-gamewiki/") {
        apiUrl = "".concat(protocol, "//").concat(hostname, "/wolfactive-gamewiki/wp-json/blog-api/v1/blog/offset=0&category=").concat(category);
      }

      fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (data) {
        var content = "";
        var categoryShow = document.querySelector('.postList .postList__contain');
        categoryShow.innerHTML = "";
        data.forEach(function (item) {
          content += "\n          <div class=\"postList__item d--block\">\n            <div class=\"postList__item-img\">\n              ".concat(item.thumbnail, "\n            </div>\n            <a href=\"").concat(item.url, "\" class=\"postList__item-title\">\n              <h3 class=\"title--item\">").concat(item.title, "</h3>\n            </a>\n          </div>\n          ");
        });
        categoryShow.innerHTML = content;

        if (!mobileCheck) {
          var _carsouselPostHome2 = new siema__WEBPACK_IMPORTED_MODULE_0___default.a({
            selector: '.postList__contain',
            duration: 200,
            easing: 'ease-out',
            perPage: 4,
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            loop: false,
            rtl: false,
            onInit: function onInit() {},
            onChange: function onChange() {}
          });

          if (caroselPostList.length > 4) {
            carsouselPostHomeBtn.innerHTML = "\n              <button class=\"btn\" aria-label=\"post-list-prev\"><i class=\"fas fa-chevron-left icon\"></i></button>\n              <button class=\"btn\" aria-label=\"post-list-next\"><i class=\"fas fa-chevron-right icon\"></i></button>\n              ";
            document.querySelector('button[aria-label="post-list-next"]').addEventListener('click', function () {
              return _carsouselPostHome2.prev();
            });
            document.querySelector('button[aria-label="post-list-prev"]').addEventListener('click', function () {
              return _carsouselPostHome2.next();
            });
          }
        } else if (mobileCheck) {
          var _carsouselPostHome3 = new siema__WEBPACK_IMPORTED_MODULE_0___default.a({
            selector: '.postList__contain',
            duration: 200,
            easing: 'ease-out',
            perPage: 1,
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            loop: false,
            rtl: false,
            onInit: function onInit() {},
            onChange: function onChange() {}
          });

          if (caroselPostList.length > 4) {
            carsouselPostHomeBtn.innerHTML = "\n              <button class=\"btn\" aria-label=\"post-list-prev\"><i class=\"fas fa-chevron-left icon\"></i></button>\n              <button class=\"btn\" aria-label=\"post-list-next\"><i class=\"fas fa-chevron-right icon\"></i></button>\n              ";
            document.querySelector('button[aria-label="post-list-next"]').addEventListener('click', function () {
              return _carsouselPostHome3.prev();
            });
            document.querySelector('button[aria-label="post-list-prev"]').addEventListener('click', function () {
              return _carsouselPostHome3.next();
            });
          }
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    };
  });
  /*Click show post category*/

  /*Click loadmore on game wiki*/

  var loadmoreBtnWiki = document.querySelector('.game_strategy .gtr_see_more');
  var loadmoreBtnShow = document.querySelector('.game_strategy .game_strategy-list');
  var offsetLoad = 12;

  loadmoreBtnWiki.onclick = function () {
    var loadmoreUrl = "";

    if (window.location.pathname === "/") {
      loadmoreUrl = "".concat(protocol, "//").concat(hostname, "/wp-json/gamewiki-api/v1/gamewiki/offset=").concat(offsetLoad);
    } else if (window.location.pathname === "/wolfactive-gamewiki/") {
      loadmoreUrl = "".concat(protocol, "//").concat(hostname, "/wolfactive-gamewiki/wp-json/gamewiki-api/v1/gamewiki/offset=").concat(offsetLoad);
    }

    fetch(loadmoreUrl).then(function (response) {
      return response.json();
    }).then(function (data) {
      var content = "";
      data.forEach(function (item) {
        content += "\n        <div class=\"col-divide-2 mc-mg col-divide-sm-6 col-divide-md-3\">\n            <div class=\"images_game_str\">\n                <a href=\"".concat(item.url, "\">").concat(item.thumbnail, "</a>\n            </div>\n            <div class=\"title_game_str\">\n                <a href=\"").concat(item.url, "\">").concat(item.title, "</a>\n            </div>\n        </div>\n        ");
      });
      loadmoreBtnShow.innerHTML += content;

      if (data.length !== 12) {
        loadmoreBtnWiki.style.display = "none";
      } else if (data.length === 12) {
        offsetLoad = offsetLoad + 11;
      }
    });
  };

  var freeAppUrl = "";

  if (window.location.pathname === "/") {
    // freeAppUrl =`${protocol}//${hostname}/wp-content/themes/wolfactive-gamewiki/json/free-data.json`;
    freeAppUrl = "".concat(protocol, "//").concat(hostname, "/wp-json/ranking-api/v1/free");
  } else if (window.location.pathname === "/wolfactive-gamewiki/") {
    freeAppUrl = "".concat(protocol, "//").concat(hostname, "/wolfactive-gamewiki/wp-json/ranking-api/v1/free");
  } else if (window.location.pathname === "/game-wiki/") {
    freeAppUrl = "".concat(protocol, "//").concat(hostname, "/game-wiki/wp-json/ranking-api/v1/free");
  } //console.log(freeAppUrl);


  fetch(freeAppUrl).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    var content = "";
    var freeGameRanking = document.querySelector('#freeGameRanking');
    data.forEach(function (item, i) {
      if (i < 5) {
        var ratingCount = Math.round(item.star);
        var ratingLeft = 5 - Math.round(item.star);
        var rating = "";

        for (i = 0; i < ratingCount; i++) {
          rating += "<i class=\"fas fa-star\"></i>";
        }

        for (i = 0; i < ratingLeft; i++) {
          rating += "<i class=\"fas fa-star left\"></i>";
        }

        content += "\n        <div class=\"app-ranking__item\">\n          <div class=\"app-ranking__item-contain\">\n            <div class=\"app-ranking__item-img\">\n              <img src=\"".concat(item.image, "\" alt=\"").concat(item.url, "\" />\n            </div>\n            <div class=\"app-ranking__description\">\n              <p class=\"title--item\">").concat(item.title, "</p> \n              <p class=\"app--star\">").concat(rating, "</p>    \n            </div>\n          </div>\n          <div class=\"app-ranking__item-btn\">\n            <a href=\"").concat(item.url, "\" target=\"_blank\" rel=\"noopener noreferrer\">\n              <i class=\"fas fa-cloud-download-alt\"></i>\n            </a>\n          </div>\n        </div>\n        ");
      }
    });
    freeGameRanking.innerHTML = content;
  });
  var grossingAppUrl = "";

  if (window.location.pathname === "/") {
    grossingAppUrl = "".concat(protocol, "//").concat(hostname, "/wp-json/ranking-api/v1/grossing");
  } else if (window.location.pathname === "/wolfactive-gamewiki/") {
    grossingAppUrl = "".concat(protocol, "//").concat(hostname, "/wolfactive-gamewiki/wp-json/ranking-api/v1/grossing");
  } else if (window.location.pathname === "/game-wiki/") {
    grossingAppUrl = "".concat(protocol, "//").concat(hostname, "/game-wiki/wp-json/ranking-api/v1/grossing");
  }

  fetch(grossingAppUrl).then(function (response) {
    return response.json();
  }).then(function (data) {
    var content = "";
    var grossingGameRanking = document.querySelector('#grossingGameRanking');
    data.forEach(function (item, i) {
      if (i < 5) {
        var ratingCount = Math.round(item.star);
        var ratingLeft = 5 - Math.round(item.star);
        var rating = "";

        for (i = 0; i < ratingCount; i++) {
          rating += "<i class=\"fas fa-star\"></i>";
        }

        for (i = 0; i < ratingLeft; i++) {
          rating += "<i class=\"fas fa-star left\"></i>";
        }

        content += "\n                    <div class=\"app-ranking__item\">\n                    <div class=\"app-ranking__item-contain\">\n                      <div class=\"app-ranking__item-img\">\n                        <img src=\"".concat(item.image, "\" alt=\"").concat(item.url, "\" />\n                      </div>\n                      <div class=\"app-ranking__description\">\n                        <p class=\"title--item\">").concat(item.title, "</p> \n                        <p class=\"app--star\">").concat(rating, "</p>    \n                      </div>\n                    </div>\n                    <div class=\"app-ranking__item-btn\">\n                      <a href=\"").concat(item.url, "\" target=\"_blank\" rel=\"noopener noreferrer\">\n                        <i class=\"fas fa-cloud-download-alt\"></i>\n                      </a>\n                    </div>\n                  </div>\n        ");
      }
    });
    grossingGameRanking.innerHTML = content;
  });
  /*Click loadmore on game wiki*/

  /*Render api app ranking*/
}

/***/ }),

/***/ "./src/js/pages/scroll-section.js":
/*!****************************************!*\
  !*** ./src/js/pages/scroll-section.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var itemScrollTo = document.querySelectorAll('.gamewiki__table-title a');
itemScrollTo.forEach(function (item, i) {
  item.onclick = function () {
    scrollTo = item.getAttribute('target-scroll');
    document.getElementById(scrollTo).scrollIntoView({
      behavior: 'smooth'
    });
  };
});

/***/ }),

/***/ "./src/js/pages/single.js":
/*!********************************!*\
  !*** ./src/js/pages/single.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var domBody = document.getElementsByClassName("single");

if (domBody.length != 0) {
  var scrollFunction = function scrollFunction() {
    if (window.pageYOffset > 300) {
      // Show backToTopButton
      if (!backToTopButton.classList.contains("btnEntrance")) {
        backToTopButton.classList.remove("btnExit");
        backToTopButton.classList.add("btnEntrance");
        backToTopButton.style.display = "block";
      }
    } else {
      // Hide backToTopButton
      if (backToTopButton.classList.contains("btnEntrance")) {
        backToTopButton.classList.remove("btnEntrance");
        backToTopButton.classList.add("btnExit");
        setTimeout(function () {
          backToTopButton.style.display = "none";
        }, 250);
      }
    }
  };

  var smoothScrollBackToTop = function smoothScrollBackToTop() {
    var targetPosition = 0;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 750;
    var start = null;
    window.requestAnimationFrame(step);

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }
  };

  var easeInOutCubic = function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  };

  var backToTopButton = document.querySelector("#back-to-top-btn");
  var protocol = window.location.protocol;
  var hostname = window.location.hostname;
  window.addEventListener("scroll", scrollFunction);
  backToTopButton.addEventListener("click", smoothScrollBackToTop);
  ;

  window.onscroll = function () {
    scrollFixedSideBar();
  };

  var sidebarLeftscroll = document.getElementById("sideBarLeftScroll");
  var sidebarRightscroll = document.getElementById("sidebarRightscroll");
  var sidebarMenuRankingscroll = document.getElementById("sidebarMenuRankingscroll");
  var sidebarMenuLeftcroll = document.getElementById("sidebarMenuLeftcroll");
  var stickyLeft = sidebarLeftscroll.offsetTop;

  var scrollFixedSideBar = function scrollFixedSideBar() {
    if (window.pageYOffset > stickyLeft) {
      sidebarLeftscroll.classList.add("roll_sidebar");
      sidebarRightscroll.classList.add("roll_sidebar");
      sidebarMenuRankingscroll.classList.add("roll_sidebar-menu");
      sidebarMenuLeftcroll.classList.add("roll_sidebar-menu");
    } else {
      sidebarLeftscroll.classList.remove("roll_sidebar");
      sidebarRightscroll.classList.remove("roll_sidebar");
      sidebarMenuRankingscroll.classList.remove("roll_sidebar-menu");
      sidebarMenuLeftcroll.classList.remove("roll_sidebar-menu");
    }
  };

  var freeAppUrl = "";

  if (protocol === "http:" && hostname === "localhost") {
    freeAppUrl = "".concat(protocol, "//").concat(hostname, "/game-wiki/wp-json/ranking-api/v1/free");
  } else if (protocol === "https:" || protocol === "http:") {
    freeAppUrl = "".concat(protocol, "//").concat(hostname, "/wp-json/ranking-api/v1/free");
  }

  console.log(freeAppUrl);
  fetch(freeAppUrl).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    var content = "";
    var freeGameRanking = document.querySelector('#freeGameRanking');
    data.forEach(function (item, i) {
      if (i < 5) {
        var ratingCount = Math.round(item.star);
        var ratingLeft = 5 - Math.round(item.star);
        var rating = "";

        for (i = 0; i < ratingCount; i++) {
          rating += "<i class=\"fas fa-star\"></i>";
        }

        for (i = 0; i < ratingLeft; i++) {
          rating += "<i class=\"fas fa-star left\"></i>";
        }

        content += "\n        <div class=\"app-ranking__item\">\n          <div class=\"app-ranking__item-contain\">\n            <div class=\"app-ranking__item-img\">\n              <img src=\"".concat(item.image, "\" alt=\"").concat(item.url, "\" />\n            </div>\n            <div class=\"app-ranking__description\">\n              <p class=\"title--item\">").concat(item.title, "</p> \n              <p class=\"app--star\">").concat(rating, "</p>    \n            </div>\n          </div>\n          <div class=\"app-ranking__item-btn\">\n            <a href=\"").concat(item.url, "\" target=\"_blank\" rel=\"noopener noreferrer\">\n              <i class=\"fas fa-cloud-download-alt\"></i>\n            </a>\n          </div>\n        </div>\n        ");
      }
    });
    freeGameRanking.innerHTML = content;
  });
  var grossingAppUrl = "";

  if (protocol === "http:" && hostname === "localhost") {
    grossingAppUrl = "".concat(protocol, "//").concat(hostname, "/game-wiki/wp-json/ranking-api/v1/grossing");
  } else if (protocol === "https:" || protocol === "http:") {
    grossingAppUrl = "".concat(protocol, "//").concat(hostname, "/wp-json/ranking-api/v1/grossing");
  }

  fetch(grossingAppUrl).then(function (response) {
    return response.json();
  }).then(function (data) {
    var content = "";
    var grossingGameRanking = document.querySelector('#grossingGameRanking');
    data.forEach(function (item, i) {
      if (i < 5) {
        var ratingCount = Math.round(item.star);
        var ratingLeft = 5 - Math.round(item.star);
        var rating = "";

        for (i = 0; i < ratingCount; i++) {
          rating += "<i class=\"fas fa-star\"></i>";
        }

        for (i = 0; i < ratingLeft; i++) {
          rating += "<i class=\"fas fa-star left\"></i>";
        }

        content += "\n                    <div class=\"app-ranking__item\">\n                    <div class=\"app-ranking__item-contain\">\n                      <div class=\"app-ranking__item-img\">\n                        <img src=\"".concat(item.image, "\" alt=\"").concat(item.url, "\" />\n                      </div>\n                      <div class=\"app-ranking__description\">\n                        <p class=\"title--item\">").concat(item.title, "</p> \n                        <p class=\"app--star\">").concat(rating, "</p>    \n                      </div>\n                    </div>\n                    <div class=\"app-ranking__item-btn\">\n                      <a href=\"").concat(item.url, "\" target=\"_blank\" rel=\"noopener noreferrer\">\n                        <i class=\"fas fa-cloud-download-alt\"></i>\n                      </a>\n                    </div>\n                  </div>\n        ");
      }
    });
    grossingGameRanking.innerHTML = content;
  });
}

/***/ }),

/***/ "./src/js/partten/mobileAndTabletCheck.js":
/*!************************************************!*\
  !*** ./src/js/partten/mobileAndTabletCheck.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var mobileAndTabletCheck = function mobileAndTabletCheck() {
  var check = false;

  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);

  return check;
};

module.exports = {
  mobileAndTabletCheck: mobileAndTabletCheck
};

/***/ }),

/***/ "./src/js/root.js":
/*!************************!*\
  !*** ./src/js/root.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/homepage */ "./src/js/pages/homepage.js");
/* harmony import */ var _pages_single__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/single */ "./src/js/pages/single.js");
/* harmony import */ var _pages_single__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_single__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_gamewiki_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/gamewiki-tab */ "./src/js/pages/gamewiki-tab.js");
/* harmony import */ var _pages_gamewiki_tab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_gamewiki_tab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_scroll_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/scroll-section */ "./src/js/pages/scroll-section.js");
/* harmony import */ var _pages_scroll_section__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pages_scroll_section__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shareon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shareon */ "./node_modules/shareon/dist/shareon.mjs");






/*VARIABLES*/

var iframe = document.querySelectorAll('iframe');
var img = document.querySelectorAll('img');
var video = document.querySelectorAll('video');
/*VARIABLES*/

/*Local Storage*/

function LuuVaoLocalStorage(Array, nameArray) {
  localStorage.clear();
  var jsonData = JSON.stringify(Array);
  localStorage.setItem(nameArray, jsonData);
}
/*nameArray là dạng string, array là biến array cần lưu vào*/


function LayLocalStorage(nameArray, Array) {
  var jsonData = localStorage.getItem(nameArray);

  if (!jsonData) {
    localStorage = [];
    return;
  }

  Array = JSON.parse(jsonData);
}
/*nameArray là dạng string, array là biến array cần lưu local vào*/

/*Local Storage*/

/* Resposive lazy load*/


function iframeResposive() {
  for (var i = 0; i < iframe.length; i++) {
    iframe[i].classList.add('lazy');
  }
}

function imgResposive() {
  for (var i = 0; i < img.length; i++) {
    img[i].classList.add('lazy');
  }
}

function videoResposive() {
  for (var i = 0; i < video.length; i++) {
    video[i].classList.add('lazy');
  }
}

iframe ? iframeResposive() : {};
img ? imgResposive() : {};
video ? videoResposive() : {};
var lazyLoadInstance = new vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0___default.a({
  elements_selector: ".lazy"
});
/* Resposive lazy load*/

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NoYXJlb24vZGlzdC9zaGFyZW9uLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2llbWEvZGlzdC9zaWVtYS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtbGF6eWxvYWQvZGlzdC9sYXp5bG9hZC5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvZ2FtZXdpa2ktdGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlcy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvc2Nyb2xsLXNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2VzL3NpbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFydHRlbi9tb2JpbGVBbmRUYWJsZXRDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcm9vdC5qcyJdLCJuYW1lcyI6WyJlIiwidCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJzZWxmIiwiciIsImkiLCJuIiwibCIsImNhbGwiLCJtIiwiYyIsImQiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX19lc01vZHVsZSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJUeXBlRXJyb3IiLCJ2YWx1ZSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJsZW5ndGgiLCJ3cml0YWJsZSIsImtleSIsImNvbmZpZyIsIm1lcmdlU2V0dGluZ3MiLCJzZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkVycm9yIiwicmVzb2x2ZVNsaWRlc051bWJlciIsInNlbGVjdG9yV2lkdGgiLCJvZmZzZXRXaWR0aCIsImlubmVyRWxlbWVudHMiLCJzbGljZSIsImNoaWxkcmVuIiwiY3VycmVudFNsaWRlIiwibG9vcCIsInN0YXJ0SW5kZXgiLCJNYXRoIiwibWF4IiwibWluIiwicGVyUGFnZSIsInRyYW5zZm9ybVByb3BlcnR5Iiwid2Via2l0T3JOb3QiLCJmb3JFYWNoIiwiYmluZCIsImluaXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVzaXplSGFuZGxlciIsImRyYWdnYWJsZSIsInBvaW50ZXJEb3duIiwiZHJhZyIsInN0YXJ0WCIsImVuZFgiLCJzdGFydFkiLCJsZXRJdEdvIiwicHJldmVudENsaWNrIiwidG91Y2hzdGFydEhhbmRsZXIiLCJ0b3VjaGVuZEhhbmRsZXIiLCJ0b3VjaG1vdmVIYW5kbGVyIiwibW91c2Vkb3duSGFuZGxlciIsIm1vdXNldXBIYW5kbGVyIiwibW91c2VsZWF2ZUhhbmRsZXIiLCJtb3VzZW1vdmVIYW5kbGVyIiwiY2xpY2tIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50cyIsInN0eWxlIiwib3ZlcmZsb3ciLCJkaXJlY3Rpb24iLCJydGwiLCJidWlsZFNsaWRlckZyYW1lIiwib25Jbml0Iiwic2xpZGVyRnJhbWUiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJlbmFibGVUcmFuc2l0aW9uIiwiY3Vyc29yIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImJ1aWxkU2xpZGVyRnJhbWVJdGVtIiwiY2xvbmVOb2RlIiwiYXBwZW5kQ2hpbGQiLCJhIiwiaW5uZXJIVE1MIiwic2xpZGVUb0N1cnJlbnQiLCJjc3NGbG9hdCIsImlubmVyV2lkdGgiLCJhcmd1bWVudHMiLCJkaXNhYmxlVHJhbnNpdGlvbiIsIm9uQ2hhbmdlIiwid2Via2l0VHJhbnNpdGlvbiIsImVhc2luZyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFicyIsIm11bHRpcGxlRHJhZyIsImNlaWwiLCJ0aHJlc2hvbGQiLCJwcmV2IiwibmV4dCIsImluZGV4T2YiLCJ0YXJnZXQiLCJub2RlTmFtZSIsInN0b3BQcm9wYWdhdGlvbiIsInRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwidXBkYXRlQWZ0ZXJEcmFnIiwiY2xlYXJEcmFnIiwicHJldmVudERlZmF1bHQiLCJzcGxpY2UiLCJpbnNlcnQiLCJkZXRhY2hFdmVudHMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkb2N1bWVudEVsZW1lbnQiLCJ0cmFuc2Zvcm0iLCJhc3NpZ24iLCJhcHBseSIsIm5hdmlnYXRvciIsInRlc3QiLCJ1c2VyQWdlbnQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiZWxlbWVudHNfc2VsZWN0b3IiLCJjb250YWluZXIiLCJ0aHJlc2hvbGRzIiwiZGF0YV9zcmMiLCJkYXRhX3NyY3NldCIsImRhdGFfc2l6ZXMiLCJkYXRhX2JnIiwiZGF0YV9iZ19oaWRwaSIsImRhdGFfYmdfbXVsdGkiLCJkYXRhX2JnX211bHRpX2hpZHBpIiwiZGF0YV9wb3N0ZXIiLCJjbGFzc19hcHBsaWVkIiwiY2xhc3NfbG9hZGluZyIsImNsYXNzX2xvYWRlZCIsImNsYXNzX2Vycm9yIiwidW5vYnNlcnZlX2NvbXBsZXRlZCIsInVub2JzZXJ2ZV9lbnRlcmVkIiwiY2FuY2VsX29uX2V4aXQiLCJjYWxsYmFja19lbnRlciIsImNhbGxiYWNrX2V4aXQiLCJjYWxsYmFja19hcHBsaWVkIiwiY2FsbGJhY2tfbG9hZGluZyIsImNhbGxiYWNrX2xvYWRlZCIsImNhbGxiYWNrX2Vycm9yIiwiY2FsbGJhY2tfZmluaXNoIiwiY2FsbGJhY2tfY2FuY2VsIiwidXNlX25hdGl2ZSIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiaW5zdGFuY2UiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJnZXRBdHRyaWJ1dGUiLCJ1Iiwic2V0QXR0cmlidXRlIiwiZiIsIl8iLCJnIiwidiIsImIiLCJjbGFzc0xpc3QiLCJhZGQiLCJjbGFzc05hbWUiLCJoIiwicmVtb3ZlIiwicmVwbGFjZSIsIlJlZ0V4cCIsImxsVGVtcEltYWdlIiwiRSIsIl9vYnNlcnZlciIsInVub2JzZXJ2ZSIsIkkiLCJsb2FkaW5nQ291bnQiLCJBIiwidG9Mb2FkQ291bnQiLCJMIiwidGFnTmFtZSIsInB1c2giLCJ5IiwidyIsImsiLCJsbE9yaWdpbmFsQXR0cnMiLCJ6Iiwic3JjIiwic3Jjc2V0Iiwic2l6ZXMiLCJPIiwiQyIsIk0iLCJOIiwicGFyZW50Tm9kZSIsIngiLCJSIiwiSU1HIiwiSUZSQU1FIiwiVklERU8iLCJsb2FkIiwiRyIsIlQiLCJEIiwiRiIsIlYiLCJqIiwiUCIsIlMiLCJsbEV2TGlzbnJzIiwiVSIsIiQiLCJxIiwiSCIsIkIiLCJKIiwiYmFja2dyb3VuZEltYWdlIiwiY29uY2F0IiwiSyIsIlEiLCJXIiwiSFRNTEltYWdlRWxlbWVudCIsIlgiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwiWSIsIkFycmF5IiwiWiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0dCIsIm50IiwiZmlsdGVyIiwiZXQiLCJfc2V0dGluZ3MiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInJvb3QiLCJyb290TWFyZ2luIiwidXBkYXRlIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJsb2FkQWxsIiwiZGVzdHJveSIsInJlc2V0U3RhdHVzIiwibGF6eUxvYWRPcHRpb25zIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJ0YWJJdGVtIiwidGFiQ29udGVudCIsInRhYkl0ZW1Cb3R0b20iLCJ0YWJDb250ZW50Qm90dG9tIiwianRlbSIsIm9uY2xpY2siLCJ0YWJOYW1lIiwiZXZlbnQiLCJzcmNFbGVtZW50IiwiaWQiLCJ0YWJOYW1lSWQiLCJpdGVtIiwidGVtcCIsImNoaWxkTm9kZXMiLCJwYXJlbnRFbGVtZW50IiwidGFiQ29udGVudE9wZW4iLCJjb250YWlucyIsImNvbnNvbGUiLCJsb2ciLCJ0YWJDb250ZW50Qm90dG9tT3BlbiIsImhvbWVwYWdlIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJjaGlsZENhcm91c2VsSXRlbSIsImNoaWxkQ2Fyb3VzZWxCdG4iLCJjYXJzb3VzZWxIb21lIiwiU2llbWEiLCJtb2JpbGVDaGVjayIsIm1vYmlsZUFuZFRhYmxldENoZWNrIiwibGFzdFZpZGVvQ2hlY2siLCJjYXJvdXNlbFZpZGVvSG9tZUl0ZW0iLCJjYXJvdXNlbFZpZGVvSG9tZURvdCIsImNhcm91c2VsVmlkZW9Ib21lRG90UGFnZSIsImNhcnNvdXNlbFZpZGVvSG9tZSIsImNvbnRlbnQiLCJkb3RWaWRlbyIsImdvVG8iLCJjYXJzb3VzZWxQb3N0SG9tZUJ0biIsImNhcm9zZWxQb3N0TGlzdCIsImNhcnNvdXNlbFBvc3RIb21lIiwiY2F0ZWdvcnlMaXN0IiwiY2F0ZWdvcnkiLCJhcGlVcmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0ZWdvcnlTaG93IiwidGh1bWJuYWlsIiwidXJsIiwidGl0bGUiLCJlcnIiLCJsb2FkbW9yZUJ0bldpa2kiLCJsb2FkbW9yZUJ0blNob3ciLCJvZmZzZXRMb2FkIiwibG9hZG1vcmVVcmwiLCJkaXNwbGF5IiwiZnJlZUFwcFVybCIsImZyZWVHYW1lUmFua2luZyIsInJhdGluZ0NvdW50Iiwicm91bmQiLCJzdGFyIiwicmF0aW5nTGVmdCIsInJhdGluZyIsImltYWdlIiwiZ3Jvc3NpbmdBcHBVcmwiLCJncm9zc2luZ0dhbWVSYW5raW5nIiwiaXRlbVNjcm9sbFRvIiwic2Nyb2xsVG8iLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJkb21Cb2R5IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNjcm9sbEZ1bmN0aW9uIiwicGFnZVlPZmZzZXQiLCJiYWNrVG9Ub3BCdXR0b24iLCJzZXRUaW1lb3V0Iiwic21vb3RoU2Nyb2xsQmFja1RvVG9wIiwidGFyZ2V0UG9zaXRpb24iLCJzdGFydFBvc2l0aW9uIiwiZGlzdGFuY2UiLCJzdGFydCIsInN0ZXAiLCJ0aW1lc3RhbXAiLCJwcm9ncmVzcyIsImVhc2VJbk91dEN1YmljIiwib25zY3JvbGwiLCJzY3JvbGxGaXhlZFNpZGVCYXIiLCJzaWRlYmFyTGVmdHNjcm9sbCIsInNpZGViYXJSaWdodHNjcm9sbCIsInNpZGViYXJNZW51UmFua2luZ3Njcm9sbCIsInNpZGViYXJNZW51TGVmdGNyb2xsIiwic3RpY2t5TGVmdCIsIm9mZnNldFRvcCIsImNoZWNrIiwic3Vic3RyIiwidmVuZG9yIiwib3BlcmEiLCJpZnJhbWUiLCJpbWciLCJ2aWRlbyIsIkx1dVZhb0xvY2FsU3RvcmFnZSIsIm5hbWVBcnJheSIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwianNvbkRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0SXRlbSIsIkxheUxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZSIsImlmcmFtZVJlc3Bvc2l2ZSIsImltZ1Jlc3Bvc2l2ZSIsInZpZGVvUmVzcG9zaXZlIiwibGF6eUxvYWRJbnN0YW5jZSIsIkxhenlMb2FkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMs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RDs7QUFDQTs7QUFDQTs7O0FBQ0EsU0FBU08sZUFBVCxHQUEyQjtBQUN2QixPQUFLLElBQUkvVyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaVcsTUFBTSxDQUFDMVUsTUFBM0IsRUFBbUN2QixDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDaVcsVUFBTSxDQUFDalcsQ0FBRCxDQUFOLENBQVV3SyxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixNQUF4QjtBQUNIO0FBQ0o7O0FBRUQsU0FBU3VNLFlBQVQsR0FBd0I7QUFDcEIsT0FBSyxJQUFJaFgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2tXLEdBQUcsQ0FBQzNVLE1BQXhCLEVBQWdDdkIsQ0FBQyxFQUFqQyxFQUFxQztBQUNqQ2tXLE9BQUcsQ0FBQ2xXLENBQUQsQ0FBSCxDQUFPd0ssU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsTUFBckI7QUFDSDtBQUNKOztBQUVELFNBQVN3TSxjQUFULEdBQTBCO0FBQ3RCLE9BQUssSUFBSWpYLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdtVyxLQUFLLENBQUM1VSxNQUExQixFQUFrQ3ZCLENBQUMsRUFBbkMsRUFBdUM7QUFDbkNtVyxTQUFLLENBQUNuVyxDQUFELENBQUwsQ0FBU3dLLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLE1BQXZCO0FBQ0g7QUFDSjs7QUFDRHdMLE1BQU0sR0FBR2MsZUFBZSxFQUFsQixHQUF1QixFQUE3QjtBQUNBYixHQUFHLEdBQUdjLFlBQVksRUFBZixHQUFvQixFQUF2QjtBQUNBYixLQUFLLEdBQUdjLGNBQWMsRUFBakIsR0FBc0IsRUFBM0I7QUFDQSxJQUFJQyxnQkFBZ0IsR0FBRyxJQUFJQyx1REFBSixDQUFhO0FBQUVwUCxtQkFBaUIsRUFBRTtBQUFyQixDQUFiLENBQXZCO0FBQ0Esd0IiLCJmaWxlIjoicm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL3Jvb3QuanNcIik7XG4iLCIvKiFcbiAqIHNoYXJlb24gdjEuNC4xIGJ5IE5pa2l0YSBLYXJhbW92XG4gKiBodHRwczovL3NoYXJlb24uanMub3JnXG4gKi9cblxudmFyIHVybEJ1aWxkZXJNYXAgPSB7ZmFjZWJvb2s6KGQpID0+IGBodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT0ke2QudXJsfWAsbGlua2VkaW46KGQpID0+IGBodHRwczovL3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP21pbmk9dHJ1ZSZ1cmw9JHtkLnVybH0mdGl0bGU9JHtkLnRpdGxlfWAsbWVzc2VuZ2VyOihkKSA9PiBgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2RpYWxvZy9zZW5kP2FwcF9pZD0zNjE5MDI0NTc4MTY3NjE3Jmxpbms9JHtkLnVybH0mcmVkaXJlY3RfdXJpPSR7ZC51cmx9YCxvZG5va2xhc3NuaWtpOihkKSA9PiBgaHR0cHM6Ly9jb25uZWN0Lm9rLnJ1L29mZmVyP3VybD0ke2QudXJsfSZ0aXRsZT0ke2QudGl0bGV9JHtkLm1lZGlhID8gYCZpbWFnZVVybD0ke2QubWVkaWF9YCA6ICcnfWAscGludGVyZXN0OihkKSA9PiBgaHR0cHM6Ly9waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYnV0dG9uLz91cmw9JHtkLnVybH0mZGVzY3JpcHRpb249JHtkLnRpdGxlfSR7ZC5tZWRpYSA/IGAmbWVkaWE9JHtkLm1lZGlhfWAgOiAnJ31gLHBvY2tldDooZCkgPT4gYGh0dHBzOi8vZ2V0cG9ja2V0LmNvbS9lZGl0LnBocD91cmw9JHtkLnVybH1gLHJlZGRpdDooZCkgPT4gYGh0dHBzOi8vd3d3LnJlZGRpdC5jb20vc3VibWl0P3RpdGxlPSR7ZC50aXRsZX0mdXJsPSR7ZC51cmx9YCx0ZWxlZ3JhbTooZCkgPT4gYGh0dHBzOi8vdGVsZWdyYW0ubWUvc2hhcmUvdXJsP3VybD0ke2QudXJsfSR7ZC50ZXh0ID8gYCZ0ZXh0PSR7ZC50ZXh0fWAgOiAnJ31gLHR3aXR0ZXI6KGQpID0+IGBodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD91cmw9JHtkLnVybH0mdGV4dD0ke2QudGl0bGV9JHtkLnZpYSA/IGAmdmlhPSR7ZC52aWF9YCA6ICcnfWAsdmliZXI6KGQpID0+IGB2aWJlcjovL2ZvcndhcmQ/dGV4dD0ke2QudGl0bGV9JTBEJTBBJHtkLnVybH0ke2QudGV4dCA/IGAlMEQlMEElMEQlMEEke2QudGV4dH1gIDogJyd9YCx2a29udGFrdGU6KGQpID0+IGBodHRwczovL3ZrLmNvbS9zaGFyZS5waHA/dXJsPSR7ZC51cmx9JnRpdGxlPSR7ZC50aXRsZX0ke2QubWVkaWEgPyBgJmltYWdlPSR7ZC5tZWRpYX1gIDogJyd9YCx3aGF0c2FwcDooZCkgPT4gYHdoYXRzYXBwOi8vc2VuZD90ZXh0PSR7ZC50aXRsZX0lMEQlMEEke2QudXJsfSR7ZC50ZXh0ID8gYCUwRCUwQSUwRCUwQSR7ZC50ZXh0fWAgOiAnJ31gfTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXG5cbmNvbnN0IGluaXRpYWxpemVTaGFyZW9uID0gKCkgPT4ge1xuICBjb25zdCBzaGFyZW9uQ29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NoYXJlb24nKTtcblxuICAvLyBpdGVyYXRlIG92ZXIgPGRpdiBjbGFzcz1cInNoYXJlb25cIj5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGFyZW9uQ29udGFpbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIC8qKiBAdHlwZSBFbGVtZW50ICovXG4gICAgY29uc3QgY29udGFpbmVyID0gc2hhcmVvbkNvbnRhaW5lcnNbaV07XG5cbiAgICAvLyBpdGVyYXRlIG92ZXIgY2hpbGRyZW4gb2YgPGRpdiBjbGFzcz1cInNoYXJlb25cIj5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgLyoqIEB0eXBlIEVsZW1lbnQgKi9cbiAgICAgIGNvbnN0IGNoaWxkID0gY29udGFpbmVyLmNoaWxkcmVuW2pdO1xuXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY29uc3QgY2xhc3NMaXN0TGVuZ3RoID0gY2hpbGQuY2xhc3NMaXN0Lmxlbmd0aDtcblxuICAgICAgICAvLyBpdGVyYXRlIG92ZXIgY2xhc3NlcyBvZiB0aGUgY2hpbGQgZWxlbWVudFxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGNsYXNzTGlzdExlbmd0aDsgayArPSAxKSB7XG4gICAgICAgICAgY29uc3QgY2xzID0gY2hpbGQuY2xhc3NMaXN0Lml0ZW0oayk7XG5cbiAgICAgICAgICAvLyBpZiBpdCdzIG9uZSBvZiB0aGUgbmV0d29ya3NcbiAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHVybEJ1aWxkZXJNYXAsIGNscykpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXNldCA9IHtcbiAgICAgICAgICAgICAgdXJsOiBlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgY2hpbGQuZGF0YXNldC51cmxcbiAgICAgICAgICAgICAgICB8fCBjb250YWluZXIuZGF0YXNldC51cmxcbiAgICAgICAgICAgICAgICB8fCB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgdGl0bGU6IGVuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBjaGlsZC5kYXRhc2V0LnRpdGxlXG4gICAgICAgICAgICAgICAgfHwgY29udGFpbmVyLmRhdGFzZXQudGl0bGVcbiAgICAgICAgICAgICAgICB8fCBkb2N1bWVudC50aXRsZSxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbWVkaWE6IGVuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBjaGlsZC5kYXRhc2V0Lm1lZGlhXG4gICAgICAgICAgICAgICAgfHwgY29udGFpbmVyLmRhdGFzZXQubWVkaWFcbiAgICAgICAgICAgICAgICB8fCAnJyxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgdGV4dDogZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIGNoaWxkLmRhdGFzZXQudGV4dFxuICAgICAgICAgICAgICAgIHx8IGNvbnRhaW5lci5kYXRhc2V0LnRleHRcbiAgICAgICAgICAgICAgICB8fCAnJyxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgdmlhOiBlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgY2hpbGQuZGF0YXNldC52aWFcbiAgICAgICAgICAgICAgICB8fCBjb250YWluZXIuZGF0YXNldC52aWFcbiAgICAgICAgICAgICAgICB8fCAnJyxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxCdWlsZGVyTWFwW2Nsc10ocHJlc2V0KTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2EnKSB7XG4gICAgICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XG4gICAgICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgncmVsJywgJ25vb3BlbmVyIG5vcmVmZXJyZXInKTtcbiAgICAgICAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnLCAnbm9vcGVuZXIsbm9yZWZlcnJlcicpLm9wZW5lciA9IG51bGw7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhazsgLy8gb25jZSBhIG5ldHdvcmsgaXMgZGV0ZWN0ZWQgd2UgZG9uJ3Qgd2FudCB0byBjaGVjayBmdXJ0aGVyXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBpbml0aWFsaXplU2hhcmVvbigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVNoYXJlb247XG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIlNpZW1hXCIsW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5TaWVtYT10KCk6ZS5TaWVtYT10KCl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHIpe2lmKGlbcl0pcmV0dXJuIGlbcl0uZXhwb3J0czt2YXIgbj1pW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtyXS5jYWxsKG4uZXhwb3J0cyxuLG4uZXhwb3J0cyx0KSxuLmw9ITAsbi5leHBvcnRzfXZhciBpPXt9O3JldHVybiB0Lm09ZSx0LmM9aSx0LmQ9ZnVuY3Rpb24oZSxpLHIpe3QubyhlLGkpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxpLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6cn0pfSx0Lm49ZnVuY3Rpb24oZSl7dmFyIGk9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHQuZChpLFwiYVwiLGkpLGl9LHQubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sdC5wPVwiXCIsdCh0LnM9MCl9KFtmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0scz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKyl7dmFyIHI9dFtpXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXJldHVybiBmdW5jdGlvbih0LGkscil7cmV0dXJuIGkmJmUodC5wcm90b3R5cGUsaSksciYmZSh0LHIpLHR9fSgpLGw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3ZhciBpPXRoaXM7aWYocih0aGlzLGUpLHRoaXMuY29uZmlnPWUubWVyZ2VTZXR0aW5ncyh0KSx0aGlzLnNlbGVjdG9yPVwic3RyaW5nXCI9PXR5cGVvZiB0aGlzLmNvbmZpZy5zZWxlY3Rvcj9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29uZmlnLnNlbGVjdG9yKTp0aGlzLmNvbmZpZy5zZWxlY3RvcixudWxsPT09dGhpcy5zZWxlY3Rvcil0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGhpbmcgd3Jvbmcgd2l0aCB5b3VyIHNlbGVjdG9yIPCfmK1cIik7dGhpcy5yZXNvbHZlU2xpZGVzTnVtYmVyKCksdGhpcy5zZWxlY3RvcldpZHRoPXRoaXMuc2VsZWN0b3Iub2Zmc2V0V2lkdGgsdGhpcy5pbm5lckVsZW1lbnRzPVtdLnNsaWNlLmNhbGwodGhpcy5zZWxlY3Rvci5jaGlsZHJlbiksdGhpcy5jdXJyZW50U2xpZGU9dGhpcy5jb25maWcubG9vcD90aGlzLmNvbmZpZy5zdGFydEluZGV4JXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg6TWF0aC5tYXgoMCxNYXRoLm1pbih0aGlzLmNvbmZpZy5zdGFydEluZGV4LHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKSksdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eT1lLndlYmtpdE9yTm90KCksW1wicmVzaXplSGFuZGxlclwiLFwidG91Y2hzdGFydEhhbmRsZXJcIixcInRvdWNoZW5kSGFuZGxlclwiLFwidG91Y2htb3ZlSGFuZGxlclwiLFwibW91c2Vkb3duSGFuZGxlclwiLFwibW91c2V1cEhhbmRsZXJcIixcIm1vdXNlbGVhdmVIYW5kbGVyXCIsXCJtb3VzZW1vdmVIYW5kbGVyXCIsXCJjbGlja0hhbmRsZXJcIl0uZm9yRWFjaChmdW5jdGlvbihlKXtpW2VdPWlbZV0uYmluZChpKX0pLHRoaXMuaW5pdCgpfXJldHVybiBzKGUsW3trZXk6XCJhdHRhY2hFdmVudHNcIix2YWx1ZTpmdW5jdGlvbigpe3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZXNpemVIYW5kbGVyKSx0aGlzLmNvbmZpZy5kcmFnZ2FibGUmJih0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuZHJhZz17c3RhcnRYOjAsZW5kWDowLHN0YXJ0WTowLGxldEl0R286bnVsbCxwcmV2ZW50Q2xpY2s6ITF9LHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIix0aGlzLnRvdWNoc3RhcnRIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLHRoaXMudG91Y2hlbmRIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLnRvdWNobW92ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMubW91c2Vkb3duSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMubW91c2V1cEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm1vdXNlbGVhdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm1vdXNlbW92ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5jbGlja0hhbmRsZXIpKX19LHtrZXk6XCJkZXRhY2hFdmVudHNcIix2YWx1ZTpmdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZXNpemVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy50b3VjaHN0YXJ0SGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLnRvdWNoZW5kSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy50b3VjaG1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm1vdXNlZG93bkhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm1vdXNldXBIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZWxlYXZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3VzZW1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xpY2tIYW5kbGVyKX19LHtrZXk6XCJpbml0XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmF0dGFjaEV2ZW50cygpLHRoaXMuc2VsZWN0b3Iuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIix0aGlzLnNlbGVjdG9yLnN0eWxlLmRpcmVjdGlvbj10aGlzLmNvbmZpZy5ydGw/XCJydGxcIjpcImx0clwiLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLHRoaXMuY29uZmlnLm9uSW5pdC5jYWxsKHRoaXMpfX0se2tleTpcImJ1aWxkU2xpZGVyRnJhbWVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UsdD10aGlzLmNvbmZpZy5sb29wP3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMip0aGlzLnBlclBhZ2U6dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDt0aGlzLnNsaWRlckZyYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53aWR0aD1lKnQrXCJweFwiLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuY29uZmlnLmRyYWdnYWJsZSYmKHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiLXdlYmtpdC1ncmFiXCIpO3ZhciBpPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtpZih0aGlzLmNvbmZpZy5sb29wKWZvcih2YXIgcj10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZTtyPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cisrKXt2YXIgbj10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tyXS5jbG9uZU5vZGUoITApKTtpLmFwcGVuZENoaWxkKG4pfWZvcih2YXIgcz0wO3M8dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDtzKyspe3ZhciBsPXRoaXMuYnVpbGRTbGlkZXJGcmFtZUl0ZW0odGhpcy5pbm5lckVsZW1lbnRzW3NdKTtpLmFwcGVuZENoaWxkKGwpfWlmKHRoaXMuY29uZmlnLmxvb3ApZm9yKHZhciBvPTA7bzx0aGlzLnBlclBhZ2U7bysrKXt2YXIgYT10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tvXS5jbG9uZU5vZGUoITApKTtpLmFwcGVuZENoaWxkKGEpfXRoaXMuc2xpZGVyRnJhbWUuYXBwZW5kQ2hpbGQoaSksdGhpcy5zZWxlY3Rvci5pbm5lckhUTUw9XCJcIix0aGlzLnNlbGVjdG9yLmFwcGVuZENoaWxkKHRoaXMuc2xpZGVyRnJhbWUpLHRoaXMuc2xpZGVUb0N1cnJlbnQoKX19LHtrZXk6XCJidWlsZFNsaWRlckZyYW1lSXRlbVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIHQuc3R5bGUuY3NzRmxvYXQ9dGhpcy5jb25maWcucnRsP1wicmlnaHRcIjpcImxlZnRcIix0LnN0eWxlLmZsb2F0PXRoaXMuY29uZmlnLnJ0bD9cInJpZ2h0XCI6XCJsZWZ0XCIsdC5zdHlsZS53aWR0aD0odGhpcy5jb25maWcubG9vcD8xMDAvKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMip0aGlzLnBlclBhZ2UpOjEwMC90aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKStcIiVcIix0LmFwcGVuZENoaWxkKGUpLHR9fSx7a2V5OlwicmVzb2x2ZVNsaWRlc051bWJlclwiLHZhbHVlOmZ1bmN0aW9uKCl7aWYoXCJudW1iZXJcIj09dHlwZW9mIHRoaXMuY29uZmlnLnBlclBhZ2UpdGhpcy5wZXJQYWdlPXRoaXMuY29uZmlnLnBlclBhZ2U7ZWxzZSBpZihcIm9iamVjdFwiPT09bih0aGlzLmNvbmZpZy5wZXJQYWdlKSl7dGhpcy5wZXJQYWdlPTE7Zm9yKHZhciBlIGluIHRoaXMuY29uZmlnLnBlclBhZ2Upd2luZG93LmlubmVyV2lkdGg+PWUmJih0aGlzLnBlclBhZ2U9dGhpcy5jb25maWcucGVyUGFnZVtlXSl9fX0se2tleTpcInByZXZcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXToxLHQ9YXJndW1lbnRzWzFdO2lmKCEodGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlKSl7dmFyIGk9dGhpcy5jdXJyZW50U2xpZGU7aWYodGhpcy5jb25maWcubG9vcCl7aWYodGhpcy5jdXJyZW50U2xpZGUtZTwwKXt0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCk7dmFyIHI9dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCxuPXRoaXMucGVyUGFnZSxzPXIrbixsPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqcyoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSksbz10aGlzLmNvbmZpZy5kcmFnZ2FibGU/dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WDowO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisobCtvKStcInB4LCAwLCAwKVwiLHRoaXMuY3VycmVudFNsaWRlPXItZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY3VycmVudFNsaWRlLWV9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT1NYXRoLm1heCh0aGlzLmN1cnJlbnRTbGlkZS1lLDApO2khPT10aGlzLmN1cnJlbnRTbGlkZSYmKHRoaXMuc2xpZGVUb0N1cnJlbnQodGhpcy5jb25maWcubG9vcCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJuZXh0XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MSx0PWFyZ3VtZW50c1sxXTtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO2lmKHRoaXMuY29uZmlnLmxvb3Ape2lmKHRoaXMuY3VycmVudFNsaWRlK2U+dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2Upe3RoaXMuZGlzYWJsZVRyYW5zaXRpb24oKTt2YXIgcj10aGlzLmN1cnJlbnRTbGlkZS10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLG49dGhpcy5wZXJQYWdlLHM9cituLGw9KHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpzKih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxvPXRoaXMuY29uZmlnLmRyYWdnYWJsZT90aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYOjA7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiKyhsK28pK1wicHgsIDAsIDApXCIsdGhpcy5jdXJyZW50U2xpZGU9citlfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9dGhpcy5jdXJyZW50U2xpZGUrZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPU1hdGgubWluKHRoaXMuY3VycmVudFNsaWRlK2UsdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpO2khPT10aGlzLmN1cnJlbnRTbGlkZSYmKHRoaXMuc2xpZGVUb0N1cnJlbnQodGhpcy5jb25maWcubG9vcCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJkaXNhYmxlVHJhbnNpdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmd9fSx7a2V5OlwiZW5hYmxlVHJhbnNpdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIFwiK3RoaXMuY29uZmlnLmR1cmF0aW9uK1wibXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCBcIit0aGlzLmNvbmZpZy5kdXJhdGlvbitcIm1zIFwiK3RoaXMuY29uZmlnLmVhc2luZ319LHtrZXk6XCJnb1RvXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO3RoaXMuY3VycmVudFNsaWRlPXRoaXMuY29uZmlnLmxvb3A/ZSV0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoOk1hdGgubWluKE1hdGgubWF4KGUsMCksdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpLGkhPT10aGlzLmN1cnJlbnRTbGlkZSYmKHRoaXMuc2xpZGVUb0N1cnJlbnQoKSx0aGlzLmNvbmZpZy5vbkNoYW5nZS5jYWxsKHRoaXMpLHQmJnQuY2FsbCh0aGlzKSl9fX0se2tleTpcInNsaWRlVG9DdXJyZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxpPXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlOnRoaXMuY3VycmVudFNsaWRlLHI9KHRoaXMuY29uZmlnLnJ0bD8xOi0xKSppKih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKTtlP3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3QuZW5hYmxlVHJhbnNpdGlvbigpLHQuc2xpZGVyRnJhbWUuc3R5bGVbdC50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIityK1wicHgsIDAsIDApXCJ9KX0pOnRoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIityK1wicHgsIDAsIDApXCJ9fSx7a2V5OlwidXBkYXRlQWZ0ZXJEcmFnXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT0odGhpcy5jb25maWcucnRsPy0xOjEpKih0aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYKSx0PU1hdGguYWJzKGUpLGk9dGhpcy5jb25maWcubXVsdGlwbGVEcmFnP01hdGguY2VpbCh0Lyh0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSk6MSxyPWU+MCYmdGhpcy5jdXJyZW50U2xpZGUtaTwwLG49ZTwwJiZ0aGlzLmN1cnJlbnRTbGlkZStpPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlO2U+MCYmdD50aGlzLmNvbmZpZy50aHJlc2hvbGQmJnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg+dGhpcy5wZXJQYWdlP3RoaXMucHJldihpKTplPDAmJnQ+dGhpcy5jb25maWcudGhyZXNob2xkJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPnRoaXMucGVyUGFnZSYmdGhpcy5uZXh0KGkpLHRoaXMuc2xpZGVUb0N1cnJlbnQocnx8bil9fSx7a2V5OlwicmVzaXplSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5yZXNvbHZlU2xpZGVzTnVtYmVyKCksdGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgmJih0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2U/MDp0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSksdGhpcy5zZWxlY3RvcldpZHRoPXRoaXMuc2VsZWN0b3Iub2Zmc2V0V2lkdGgsdGhpcy5idWlsZFNsaWRlckZyYW1lKCl9fSx7a2V5OlwiY2xlYXJEcmFnXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmRyYWc9e3N0YXJ0WDowLGVuZFg6MCxzdGFydFk6MCxsZXRJdEdvOm51bGwscHJldmVudENsaWNrOnRoaXMuZHJhZy5wcmV2ZW50Q2xpY2t9fX0se2tleTpcInRvdWNoc3RhcnRIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7LTEhPT1bXCJURVhUQVJFQVwiLFwiT1BUSU9OXCIsXCJJTlBVVFwiLFwiU0VMRUNUXCJdLmluZGV4T2YoZS50YXJnZXQubm9kZU5hbWUpfHwoZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSEwLHRoaXMuZHJhZy5zdGFydFg9ZS50b3VjaGVzWzBdLnBhZ2VYLHRoaXMuZHJhZy5zdGFydFk9ZS50b3VjaGVzWzBdLnBhZ2VZKX19LHtrZXk6XCJ0b3VjaGVuZEhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy5kcmFnLmVuZFgmJnRoaXMudXBkYXRlQWZ0ZXJEcmFnKCksdGhpcy5jbGVhckRyYWcoKX19LHtrZXk6XCJ0b3VjaG1vdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoZS5zdG9wUHJvcGFnYXRpb24oKSxudWxsPT09dGhpcy5kcmFnLmxldEl0R28mJih0aGlzLmRyYWcubGV0SXRHbz1NYXRoLmFicyh0aGlzLmRyYWcuc3RhcnRZLWUudG91Y2hlc1swXS5wYWdlWSk8TWF0aC5hYnModGhpcy5kcmFnLnN0YXJ0WC1lLnRvdWNoZXNbMF0ucGFnZVgpKSx0aGlzLnBvaW50ZXJEb3duJiZ0aGlzLmRyYWcubGV0SXRHbyl7ZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuZHJhZy5lbmRYPWUudG91Y2hlc1swXS5wYWdlWCx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZzt2YXIgdD10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxpPXQqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLHI9dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCxuPXRoaXMuY29uZmlnLnJ0bD9pK3I6aS1yO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisodGhpcy5jb25maWcucnRsPzE6LTEpKm4rXCJweCwgMCwgMClcIn19fSx7a2V5OlwibW91c2Vkb3duSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpey0xIT09W1wiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiXS5pbmRleE9mKGUudGFyZ2V0Lm5vZGVOYW1lKXx8KGUucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITAsdGhpcy5kcmFnLnN0YXJ0WD1lLnBhZ2VYKX19LHtrZXk6XCJtb3VzZXVwSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuZHJhZy5lbmRYJiZ0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCl9fSx7a2V5OlwibW91c2Vtb3ZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUucHJldmVudERlZmF1bHQoKSx0aGlzLnBvaW50ZXJEb3duKXtcIkFcIj09PWUudGFyZ2V0Lm5vZGVOYW1lJiYodGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMCksdGhpcy5kcmFnLmVuZFg9ZS5wYWdlWCx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYmJpbmdcIix0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZzt2YXIgdD10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxpPXQqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLHI9dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCxuPXRoaXMuY29uZmlnLnJ0bD9pK3I6aS1yO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisodGhpcy5jb25maWcucnRsPzE6LTEpKm4rXCJweCwgMCwgMClcIn19fSx7a2V5OlwibW91c2VsZWF2ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnBvaW50ZXJEb3duJiYodGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiLHRoaXMuZHJhZy5lbmRYPWUucGFnZVgsdGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMSx0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCkpfX0se2tleTpcImNsaWNrSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuZHJhZy5wcmV2ZW50Q2xpY2smJmUucHJldmVudERlZmF1bHQoKSx0aGlzLmRyYWcucHJldmVudENsaWNrPSExfX0se2tleTpcInJlbW92ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoZTwwfHxlPj10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkl0ZW0gdG8gcmVtb3ZlIGRvZXNuJ3QgZXhpc3Qg8J+YrVwiKTt2YXIgaT1lPHRoaXMuY3VycmVudFNsaWRlLHI9dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlLTE9PT1lOyhpfHxyKSYmdGhpcy5jdXJyZW50U2xpZGUtLSx0aGlzLmlubmVyRWxlbWVudHMuc3BsaWNlKGUsMSksdGhpcy5idWlsZFNsaWRlckZyYW1lKCksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImluc2VydFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxpKXtpZih0PDB8fHQ+dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCsxKXRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBpbnNldCBpdCBhdCB0aGlzIGluZGV4IPCfmK1cIik7aWYoLTEhPT10aGlzLmlubmVyRWxlbWVudHMuaW5kZXhPZihlKSl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc2FtZSBpdGVtIGluIGEgY2Fyb3VzZWw/IFJlYWxseT8gTm9wZSDwn5itXCIpO3ZhciByPXQ8PXRoaXMuY3VycmVudFNsaWRlPjAmJnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7dGhpcy5jdXJyZW50U2xpZGU9cj90aGlzLmN1cnJlbnRTbGlkZSsxOnRoaXMuY3VycmVudFNsaWRlLHRoaXMuaW5uZXJFbGVtZW50cy5zcGxpY2UodCwwLGUpLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLGkmJmkuY2FsbCh0aGlzKX19LHtrZXk6XCJwcmVwZW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmluc2VydChlLDApLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJhcHBlbmRcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMuaW5zZXJ0KGUsdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCsxKSx0JiZ0LmNhbGwodGhpcyl9fSx7a2V5OlwiZGVzdHJveVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXSx0PWFyZ3VtZW50c1sxXTtpZih0aGlzLmRldGFjaEV2ZW50cygpLHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiYXV0b1wiLGUpe2Zvcih2YXIgaT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkscj0wO3I8dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDtyKyspaS5hcHBlbmRDaGlsZCh0aGlzLmlubmVyRWxlbWVudHNbcl0pO3RoaXMuc2VsZWN0b3IuaW5uZXJIVE1MPVwiXCIsdGhpcy5zZWxlY3Rvci5hcHBlbmRDaGlsZChpKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpfXQmJnQuY2FsbCh0aGlzKX19XSxbe2tleTpcIm1lcmdlU2V0dGluZ3NcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD17c2VsZWN0b3I6XCIuc2llbWFcIixkdXJhdGlvbjoyMDAsZWFzaW5nOlwiZWFzZS1vdXRcIixwZXJQYWdlOjEsc3RhcnRJbmRleDowLGRyYWdnYWJsZTohMCxtdWx0aXBsZURyYWc6ITAsdGhyZXNob2xkOjIwLGxvb3A6ITEscnRsOiExLG9uSW5pdDpmdW5jdGlvbigpe30sb25DaGFuZ2U6ZnVuY3Rpb24oKXt9fSxpPWU7Zm9yKHZhciByIGluIGkpdFtyXT1pW3JdO3JldHVybiB0fX0se2tleTpcIndlYmtpdE9yTm90XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybT9cInRyYW5zZm9ybVwiOlwiV2Via2l0VHJhbnNmb3JtXCJ9fV0pLGV9KCk7dC5kZWZhdWx0PWwsZS5leHBvcnRzPXQuZGVmYXVsdH1dKX0pOyIsIiFmdW5jdGlvbih0LG4pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPW4oKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKG4pOih0PXR8fHNlbGYpLkxhenlMb2FkPW4oKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KCl7cmV0dXJuKHQ9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl7dmFyIGU9YXJndW1lbnRzW25dO2Zvcih2YXIgaSBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLGkpJiYodFtpXT1lW2ldKX1yZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgbj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93LGU9biYmIShcIm9uc2Nyb2xsXCJpbiB3aW5kb3cpfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiYvKGdsZXxpbmd8cm8pYm90fGNyYXdsfHNwaWRlci9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaT1uJiZcIkludGVyc2VjdGlvbk9ic2VydmVyXCJpbiB3aW5kb3csYT1uJiZcImNsYXNzTGlzdFwiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIiksbz1uJiZ3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbz4xLHI9e2VsZW1lbnRzX3NlbGVjdG9yOlwiSU1HXCIsY29udGFpbmVyOmV8fG4/ZG9jdW1lbnQ6bnVsbCx0aHJlc2hvbGQ6MzAwLHRocmVzaG9sZHM6bnVsbCxkYXRhX3NyYzpcInNyY1wiLGRhdGFfc3Jjc2V0Olwic3Jjc2V0XCIsZGF0YV9zaXplczpcInNpemVzXCIsZGF0YV9iZzpcImJnXCIsZGF0YV9iZ19oaWRwaTpcImJnLWhpZHBpXCIsZGF0YV9iZ19tdWx0aTpcImJnLW11bHRpXCIsZGF0YV9iZ19tdWx0aV9oaWRwaTpcImJnLW11bHRpLWhpZHBpXCIsZGF0YV9wb3N0ZXI6XCJwb3N0ZXJcIixjbGFzc19hcHBsaWVkOlwiYXBwbGllZFwiLGNsYXNzX2xvYWRpbmc6XCJsb2FkaW5nXCIsY2xhc3NfbG9hZGVkOlwibG9hZGVkXCIsY2xhc3NfZXJyb3I6XCJlcnJvclwiLHVub2JzZXJ2ZV9jb21wbGV0ZWQ6ITAsdW5vYnNlcnZlX2VudGVyZWQ6ITEsY2FuY2VsX29uX2V4aXQ6ITEsY2FsbGJhY2tfZW50ZXI6bnVsbCxjYWxsYmFja19leGl0Om51bGwsY2FsbGJhY2tfYXBwbGllZDpudWxsLGNhbGxiYWNrX2xvYWRpbmc6bnVsbCxjYWxsYmFja19sb2FkZWQ6bnVsbCxjYWxsYmFja19lcnJvcjpudWxsLGNhbGxiYWNrX2ZpbmlzaDpudWxsLGNhbGxiYWNrX2NhbmNlbDpudWxsLHVzZV9uYXRpdmU6ITF9LGM9ZnVuY3Rpb24obil7cmV0dXJuIHQoe30scixuKX0sbD1mdW5jdGlvbih0LG4pe3ZhciBlLGk9bmV3IHQobik7dHJ5e2U9bmV3IEN1c3RvbUV2ZW50KFwiTGF6eUxvYWQ6OkluaXRpYWxpemVkXCIse2RldGFpbDp7aW5zdGFuY2U6aX19KX1jYXRjaCh0KXsoZT1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpKS5pbml0Q3VzdG9tRXZlbnQoXCJMYXp5TG9hZDo6SW5pdGlhbGl6ZWRcIiwhMSwhMSx7aW5zdGFuY2U6aX0pfXdpbmRvdy5kaXNwYXRjaEV2ZW50KGUpfSxzPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1cIituKX0sdT1mdW5jdGlvbih0LG4sZSl7dmFyIGk9XCJkYXRhLVwiK247bnVsbCE9PWU/dC5zZXRBdHRyaWJ1dGUoaSxlKTp0LnJlbW92ZUF0dHJpYnV0ZShpKX0sZD1mdW5jdGlvbih0KXtyZXR1cm4gcyh0LFwibGwtc3RhdHVzXCIpfSxmPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHUodCxcImxsLXN0YXR1c1wiLG4pfSxfPWZ1bmN0aW9uKHQpe3JldHVybiBmKHQsbnVsbCl9LGc9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PT1kKHQpfSx2PWZ1bmN0aW9uKHQpe3JldHVyblwibmF0aXZlXCI9PT1kKHQpfSxiPWZ1bmN0aW9uKHQsbixlLGkpe3QmJih2b2lkIDA9PT1pP3ZvaWQgMD09PWU/dChuKTp0KG4sZSk6dChuLGUsaSkpfSxwPWZ1bmN0aW9uKHQsbil7YT90LmNsYXNzTGlzdC5hZGQobik6dC5jbGFzc05hbWUrPSh0LmNsYXNzTmFtZT9cIiBcIjpcIlwiKStufSxoPWZ1bmN0aW9uKHQsbil7YT90LmNsYXNzTGlzdC5yZW1vdmUobik6dC5jbGFzc05hbWU9dC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXHMrKVwiK24rXCIoXFxcXHMrfCQpXCIpLFwiIFwiKS5yZXBsYWNlKC9eXFxzKy8sXCJcIikucmVwbGFjZSgvXFxzKyQvLFwiXCIpfSxtPWZ1bmN0aW9uKHQpe3JldHVybiB0LmxsVGVtcEltYWdlfSxFPWZ1bmN0aW9uKHQsbil7aWYobil7dmFyIGU9bi5fb2JzZXJ2ZXI7ZSYmZS51bm9ic2VydmUodCl9fSxJPWZ1bmN0aW9uKHQsbil7dCYmKHQubG9hZGluZ0NvdW50Kz1uKX0sQT1mdW5jdGlvbih0LG4pe3QmJih0LnRvTG9hZENvdW50PW4pfSxMPWZ1bmN0aW9uKHQpe2Zvcih2YXIgbixlPVtdLGk9MDtuPXQuY2hpbGRyZW5baV07aSs9MSlcIlNPVVJDRVwiPT09bi50YWdOYW1lJiZlLnB1c2gobik7cmV0dXJuIGV9LHk9ZnVuY3Rpb24odCxuLGUpe2UmJnQuc2V0QXR0cmlidXRlKG4sZSl9LHc9ZnVuY3Rpb24odCxuKXt0LnJlbW92ZUF0dHJpYnV0ZShuKX0saz1mdW5jdGlvbih0KXtyZXR1cm4hIXQubGxPcmlnaW5hbEF0dHJzfSx6PWZ1bmN0aW9uKHQpe2lmKCFrKHQpKXt2YXIgbj17fTtuLnNyYz10LmdldEF0dHJpYnV0ZShcInNyY1wiKSxuLnNyY3NldD10LmdldEF0dHJpYnV0ZShcInNyY3NldFwiKSxuLnNpemVzPXQuZ2V0QXR0cmlidXRlKFwic2l6ZXNcIiksdC5sbE9yaWdpbmFsQXR0cnM9bn19LE89ZnVuY3Rpb24odCl7aWYoayh0KSl7dmFyIG49dC5sbE9yaWdpbmFsQXR0cnM7eSh0LFwic3JjXCIsbi5zcmMpLHkodCxcInNyY3NldFwiLG4uc3Jjc2V0KSx5KHQsXCJzaXplc1wiLG4uc2l6ZXMpfX0sQz1mdW5jdGlvbih0LG4pe3kodCxcInNpemVzXCIscyh0LG4uZGF0YV9zaXplcykpLHkodCxcInNyY3NldFwiLHModCxuLmRhdGFfc3Jjc2V0KSkseSh0LFwic3JjXCIscyh0LG4uZGF0YV9zcmMpKX0sTT1mdW5jdGlvbih0KXt3KHQsXCJzcmNcIiksdyh0LFwic3Jjc2V0XCIpLHcodCxcInNpemVzXCIpfSxOPWZ1bmN0aW9uKHQsbil7dmFyIGU9dC5wYXJlbnROb2RlO2UmJlwiUElDVFVSRVwiPT09ZS50YWdOYW1lJiZMKGUpLmZvckVhY2gobil9LHg9ZnVuY3Rpb24odCxuKXtMKHQpLmZvckVhY2gobil9LFI9e0lNRzpmdW5jdGlvbih0LG4pe04odCwoZnVuY3Rpb24odCl7eih0KSxDKHQsbil9KSkseih0KSxDKHQsbil9LElGUkFNRTpmdW5jdGlvbih0LG4pe3kodCxcInNyY1wiLHModCxuLmRhdGFfc3JjKSl9LFZJREVPOmZ1bmN0aW9uKHQsbil7eCh0LChmdW5jdGlvbih0KXt5KHQsXCJzcmNcIixzKHQsbi5kYXRhX3NyYykpfSkpLHkodCxcInBvc3RlclwiLHModCxuLmRhdGFfcG9zdGVyKSkseSh0LFwic3JjXCIscyh0LG4uZGF0YV9zcmMpKSx0LmxvYWQoKX19LEc9ZnVuY3Rpb24odCxuKXt2YXIgZT1SW3QudGFnTmFtZV07ZSYmZSh0LG4pfSxUPWZ1bmN0aW9uKHQsbixlKXtJKGUsMSkscCh0LG4uY2xhc3NfbG9hZGluZyksZih0LFwibG9hZGluZ1wiKSxiKG4uY2FsbGJhY2tfbG9hZGluZyx0LGUpfSxEPXtJTUc6ZnVuY3Rpb24odCxuKXt1KHQsbi5kYXRhX3NyYyxudWxsKSx1KHQsbi5kYXRhX3NyY3NldCxudWxsKSx1KHQsbi5kYXRhX3NpemVzLG51bGwpLE4odCwoZnVuY3Rpb24odCl7dSh0LG4uZGF0YV9zcmNzZXQsbnVsbCksdSh0LG4uZGF0YV9zaXplcyxudWxsKX0pKX0sSUZSQU1FOmZ1bmN0aW9uKHQsbil7dSh0LG4uZGF0YV9zcmMsbnVsbCl9LFZJREVPOmZ1bmN0aW9uKHQsbil7dSh0LG4uZGF0YV9zcmMsbnVsbCksdSh0LG4uZGF0YV9wb3N0ZXIsbnVsbCkseCh0LChmdW5jdGlvbih0KXt1KHQsbi5kYXRhX3NyYyxudWxsKX0pKX19LEY9ZnVuY3Rpb24odCxuKXt1KHQsbi5kYXRhX2JnX211bHRpLG51bGwpLHUodCxuLmRhdGFfYmdfbXVsdGlfaGlkcGksbnVsbCl9LFY9ZnVuY3Rpb24odCxuKXt2YXIgZT1EW3QudGFnTmFtZV07ZT9lKHQsbik6ZnVuY3Rpb24odCxuKXt1KHQsbi5kYXRhX2JnLG51bGwpLHUodCxuLmRhdGFfYmdfaGlkcGksbnVsbCl9KHQsbil9LGo9W1wiSU1HXCIsXCJJRlJBTUVcIixcIlZJREVPXCJdLFA9ZnVuY3Rpb24odCxuKXshbnx8ZnVuY3Rpb24odCl7cmV0dXJuIHQubG9hZGluZ0NvdW50PjB9KG4pfHxmdW5jdGlvbih0KXtyZXR1cm4gdC50b0xvYWRDb3VudD4wfShuKXx8Yih0LmNhbGxiYWNrX2ZpbmlzaCxuKX0sUz1mdW5jdGlvbih0LG4sZSl7dC5hZGRFdmVudExpc3RlbmVyKG4sZSksdC5sbEV2TGlzbnJzW25dPWV9LFU9ZnVuY3Rpb24odCxuLGUpe3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihuLGUpfSwkPWZ1bmN0aW9uKHQpe3JldHVybiEhdC5sbEV2TGlzbnJzfSxxPWZ1bmN0aW9uKHQpe2lmKCQodCkpe3ZhciBuPXQubGxFdkxpc25ycztmb3IodmFyIGUgaW4gbil7dmFyIGk9bltlXTtVKHQsZSxpKX1kZWxldGUgdC5sbEV2TGlzbnJzfX0sSD1mdW5jdGlvbih0LG4sZSl7IWZ1bmN0aW9uKHQpe2RlbGV0ZSB0LmxsVGVtcEltYWdlfSh0KSxJKGUsLTEpLGZ1bmN0aW9uKHQpe3QmJih0LnRvTG9hZENvdW50LT0xKX0oZSksaCh0LG4uY2xhc3NfbG9hZGluZyksbi51bm9ic2VydmVfY29tcGxldGVkJiZFKHQsZSl9LEI9ZnVuY3Rpb24odCxuLGUpe3ZhciBpPW0odCl8fHQ7JChpKXx8ZnVuY3Rpb24odCxuLGUpeyQodCl8fCh0LmxsRXZMaXNucnM9e30pO3ZhciBpPVwiVklERU9cIj09PXQudGFnTmFtZT9cImxvYWRlZGRhdGFcIjpcImxvYWRcIjtTKHQsaSxuKSxTKHQsXCJlcnJvclwiLGUpfShpLChmdW5jdGlvbihhKXshZnVuY3Rpb24odCxuLGUsaSl7dmFyIGE9dihuKTtIKG4sZSxpKSxwKG4sZS5jbGFzc19sb2FkZWQpLGYobixcImxvYWRlZFwiKSxWKG4sZSksYihlLmNhbGxiYWNrX2xvYWRlZCxuLGkpLGF8fFAoZSxpKX0oMCx0LG4sZSkscShpKX0pLChmdW5jdGlvbihhKXshZnVuY3Rpb24odCxuLGUsaSl7dmFyIGE9dihuKTtIKG4sZSxpKSxwKG4sZS5jbGFzc19lcnJvciksZihuLFwiZXJyb3JcIiksYihlLmNhbGxiYWNrX2Vycm9yLG4saSksYXx8UChlLGkpfSgwLHQsbixlKSxxKGkpfSkpfSxKPWZ1bmN0aW9uKHQsbixlKXshZnVuY3Rpb24odCl7dC5sbFRlbXBJbWFnZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpfSh0KSxCKHQsbixlKSxmdW5jdGlvbih0LG4sZSl7dmFyIGk9cyh0LG4uZGF0YV9iZyksYT1zKHQsbi5kYXRhX2JnX2hpZHBpKSxyPW8mJmE/YTppO3ImJih0LnN0eWxlLmJhY2tncm91bmRJbWFnZT0ndXJsKFwiJy5jb25jYXQociwnXCIpJyksbSh0KS5zZXRBdHRyaWJ1dGUoXCJzcmNcIixyKSxUKHQsbixlKSl9KHQsbixlKSxmdW5jdGlvbih0LG4sZSl7dmFyIGk9cyh0LG4uZGF0YV9iZ19tdWx0aSksYT1zKHQsbi5kYXRhX2JnX211bHRpX2hpZHBpKSxyPW8mJmE/YTppO3ImJih0LnN0eWxlLmJhY2tncm91bmRJbWFnZT1yLGZ1bmN0aW9uKHQsbixlKXtwKHQsbi5jbGFzc19hcHBsaWVkKSxmKHQsXCJhcHBsaWVkXCIpLEYodCxuKSxuLnVub2JzZXJ2ZV9jb21wbGV0ZWQmJkUodCxuKSxiKG4uY2FsbGJhY2tfYXBwbGllZCx0LGUpfSh0LG4sZSkpfSh0LG4sZSl9LEs9ZnVuY3Rpb24odCxuLGUpeyFmdW5jdGlvbih0KXtyZXR1cm4gai5pbmRleE9mKHQudGFnTmFtZSk+LTF9KHQpP0oodCxuLGUpOmZ1bmN0aW9uKHQsbixlKXtCKHQsbixlKSxHKHQsbiksVCh0LG4sZSl9KHQsbixlKX0sUT1bXCJJTUdcIixcIklGUkFNRVwiXSxXPWZ1bmN0aW9uKHQpe3JldHVybiB0LnVzZV9uYXRpdmUmJlwibG9hZGluZ1wiaW4gSFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGV9LFg9ZnVuY3Rpb24odCxuLGUpe3QuZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiB0LmlzSW50ZXJzZWN0aW5nfHx0LmludGVyc2VjdGlvblJhdGlvPjB9KHQpP2Z1bmN0aW9uKHQsbixlLGkpe2IoZS5jYWxsYmFja19lbnRlcix0LG4saSksZnVuY3Rpb24odCxuLGUpe24udW5vYnNlcnZlX2VudGVyZWQmJkUodCxlKX0odCxlLGkpLGZ1bmN0aW9uKHQpe3JldHVybiFnKHQpfSh0KXx8Syh0LGUsaSl9KHQudGFyZ2V0LHQsbixlKTpmdW5jdGlvbih0LG4sZSxpKXtnKHQpfHwoZnVuY3Rpb24odCxuLGUsaSl7ZS5jYW5jZWxfb25fZXhpdCYmZnVuY3Rpb24odCl7cmV0dXJuXCJsb2FkaW5nXCI9PT1kKHQpfSh0KSYmXCJJTUdcIj09PXQudGFnTmFtZSYmKHEodCksZnVuY3Rpb24odCl7Tih0LChmdW5jdGlvbih0KXtNKHQpfSkpLE0odCl9KHQpLGZ1bmN0aW9uKHQpe04odCwoZnVuY3Rpb24odCl7Tyh0KX0pKSxPKHQpfSh0KSxoKHQsZS5jbGFzc19sb2FkaW5nKSxJKGksLTEpLF8odCksYihlLmNhbGxiYWNrX2NhbmNlbCx0LG4saSkpfSh0LG4sZSxpKSxiKGUuY2FsbGJhY2tfZXhpdCx0LG4saSkpfSh0LnRhcmdldCx0LG4sZSl9KSl9LFk9ZnVuY3Rpb24odCl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHQpfSxaPWZ1bmN0aW9uKHQpe3JldHVybiB0LmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHQuZWxlbWVudHNfc2VsZWN0b3IpfSx0dD1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuXCJlcnJvclwiPT09ZCh0KX0odCl9LG50PWZ1bmN0aW9uKHQsbil7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBZKHQpLmZpbHRlcihnKX0odHx8WihuKSl9LGV0PWZ1bmN0aW9uKHQsZSl7dmFyIGE9Yyh0KTt0aGlzLl9zZXR0aW5ncz1hLHRoaXMubG9hZGluZ0NvdW50PTAsZnVuY3Rpb24odCxuKXtpJiYhVyh0KSYmKG4uX29ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZnVuY3Rpb24oZSl7WChlLHQsbil9KSxmdW5jdGlvbih0KXtyZXR1cm57cm9vdDp0LmNvbnRhaW5lcj09PWRvY3VtZW50P251bGw6dC5jb250YWluZXIscm9vdE1hcmdpbjp0LnRocmVzaG9sZHN8fHQudGhyZXNob2xkK1wicHhcIn19KHQpKSl9KGEsdGhpcyksZnVuY3Rpb24odCxlKXtuJiZ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLChmdW5jdGlvbigpeyFmdW5jdGlvbih0LG4pe3ZhciBlOyhlPVoodCksWShlKS5maWx0ZXIodHQpKS5mb3JFYWNoKChmdW5jdGlvbihuKXtoKG4sdC5jbGFzc19lcnJvciksXyhuKX0pKSxuLnVwZGF0ZSgpfSh0LGUpfSkpfShhLHRoaXMpLHRoaXMudXBkYXRlKGUpfTtyZXR1cm4gZXQucHJvdG90eXBlPXt1cGRhdGU6ZnVuY3Rpb24odCl7dmFyIG4sYSxvPXRoaXMuX3NldHRpbmdzLHI9bnQodCxvKTtBKHRoaXMsci5sZW5ndGgpLCFlJiZpP1cobyk/ZnVuY3Rpb24odCxuLGUpe3QuZm9yRWFjaCgoZnVuY3Rpb24odCl7LTEhPT1RLmluZGV4T2YodC50YWdOYW1lKSYmKHQuc2V0QXR0cmlidXRlKFwibG9hZGluZ1wiLFwibGF6eVwiKSxmdW5jdGlvbih0LG4sZSl7Qih0LG4sZSksRyh0LG4pLFYodCxuKSxmKHQsXCJuYXRpdmVcIil9KHQsbixlKSl9KSksQShlLDApfShyLG8sdGhpcyk6KGE9cixmdW5jdGlvbih0KXt0LmRpc2Nvbm5lY3QoKX0obj10aGlzLl9vYnNlcnZlciksZnVuY3Rpb24odCxuKXtuLmZvckVhY2goKGZ1bmN0aW9uKG4pe3Qub2JzZXJ2ZShuKX0pKX0obixhKSk6dGhpcy5sb2FkQWxsKHIpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5fb2JzZXJ2ZXImJnRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKSxaKHRoaXMuX3NldHRpbmdzKS5mb3JFYWNoKChmdW5jdGlvbih0KXtkZWxldGUgdC5sbE9yaWdpbmFsQXR0cnN9KSksZGVsZXRlIHRoaXMuX29ic2VydmVyLGRlbGV0ZSB0aGlzLl9zZXR0aW5ncyxkZWxldGUgdGhpcy5sb2FkaW5nQ291bnQsZGVsZXRlIHRoaXMudG9Mb2FkQ291bnR9LGxvYWRBbGw6ZnVuY3Rpb24odCl7dmFyIG49dGhpcyxlPXRoaXMuX3NldHRpbmdzO250KHQsZSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7Syh0LGUsbil9KSl9fSxldC5sb2FkPWZ1bmN0aW9uKHQsbil7dmFyIGU9YyhuKTtLKHQsZSl9LGV0LnJlc2V0U3RhdHVzPWZ1bmN0aW9uKHQpe18odCl9LG4mJmZ1bmN0aW9uKHQsbil7aWYobilpZihuLmxlbmd0aClmb3IodmFyIGUsaT0wO2U9bltpXTtpKz0xKWwodCxlKTtlbHNlIGwodCxuKX0oZXQsd2luZG93LmxhenlMb2FkT3B0aW9ucyksZXR9KSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsInZhciB0YWJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1pdGVtJyk7XHJcbnZhciB0YWJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1jb250ZW50Jyk7XHJcbnZhciB0YWJJdGVtQm90dG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWV3aWtpX190YWItaXRlbScpO1xyXG52YXIgdGFiQ29udGVudEJvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1ld2lraV9fdGFiLWNvbnRlbnQnKTtcclxuaWYgKHRhYkl0ZW0gJiYgdGFiQ29udGVudCkge1xyXG4gICAgdGFiSXRlbS5mb3JFYWNoKChqdGVtLCBpKSA9PiB7XHJcbiAgICAgICAganRlbS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYkl0ZW0ubGVuZ3RoOyBpKyspIHsgdGFiSXRlbVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTsgfVxyXG4gICAgICAgICAgICBqdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB0YWJOYW1lID0gZXZlbnQuc3JjRWxlbWVudC5pZDtcclxuICAgICAgICAgICAgdGFiTmFtZUlkID0gdGFiTmFtZSArICdDb250ZW50JztcclxuICAgICAgICAgICAgdGFiQ29udGVudC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IGl0ZW0uY2hpbGROb2Rlc1swXS5wYXJlbnRFbGVtZW50LmlkO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhYkNvbnRlbnRPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0YWJOYW1lSWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRlbXAgPT0gdGFiTmFtZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYkNvbnRlbnRPcGVuLmNsYXNzTGlzdC5jb250YWlucygnZC0tbm9uZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkNvbnRlbnRPcGVuLmNsYXNzTGlzdC5yZW1vdmUoJ2QtLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2QtLW5vbmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2QtLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5pZiAodGFiSXRlbUJvdHRvbSAmJiB0YWJDb250ZW50Qm90dG9tKSB7XHJcbiAgICB0YWJJdGVtQm90dG9tLmZvckVhY2goKGp0ZW0sIGkpID0+IHtcclxuICAgICAgICBqdGVtLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJJdGVtQm90dG9tLmxlbmd0aDsgaSsrKSB7IHRhYkl0ZW1Cb3R0b21baV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7IH1cclxuICAgICAgICAgICAganRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgdGFiTmFtZSA9IGV2ZW50LnNyY0VsZW1lbnQuaWQ7XHJcbiAgICAgICAgICAgIHRhYk5hbWVJZCA9IHRhYk5hbWUgKyAnQ29udGVudEl0ZW0nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YWJOYW1lSWQpO1xyXG4gICAgICAgICAgICB0YWJDb250ZW50Qm90dG9tLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gaXRlbS5jaGlsZE5vZGVzWzBdLnBhcmVudEVsZW1lbnQuaWQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFiQ29udGVudEJvdHRvbU9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRhYk5hbWVJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGVtcCA9PSB0YWJOYW1lSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFiQ29udGVudEJvdHRvbU9wZW4uY2xhc3NMaXN0LmNvbnRhaW5zKCdkLS1ub25lJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiQ29udGVudEJvdHRvbU9wZW4uY2xhc3NMaXN0LnJlbW92ZSgnZC0tbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnZC0tbm9uZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnZC0tbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IFNpZW1hIGZyb20gJ3NpZW1hJztcclxuaW1wb3J0IHsgbW9iaWxlQW5kVGFibGV0Q2hlY2sgfSBmcm9tICcuLi9wYXJ0dGVuL21vYmlsZUFuZFRhYmxldENoZWNrJztcclxudmFyIGhvbWVwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keS5ob21lJyk7XHJcbmlmICgod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIiB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL3dvbGZhY3RpdmUtZ2FtZXdpa2kvXCIgfHwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9nYW1lLXdpa2kvXCIpICYmIGhvbWVwYWdlKSB7XHJcbiAgICAvKkZpcnN0IENhcm91c2VsKi9cclxuICAgIHZhciBwcm90b2NvbCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbDtcclxuICAgIHZhciBob3N0bmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcclxuICAgIHZhciBjaGlsZENhcm91c2VsSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYXJvdXNlbENvbnRhaW5CaWcgLmNhcm91c2VsX19pdGVtJyk7XHJcbiAgICB2YXIgY2hpbGRDYXJvdXNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fYmlnLWJ0bicpO1xyXG4gICAgY29uc3QgY2Fyc291c2VsSG9tZSA9IG5ldyBTaWVtYSh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICcjY2Fyb3VzZWxDb250YWluQmlnJyxcclxuICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0JyxcclxuICAgICAgICBwZXJQYWdlOiAxLFxyXG4gICAgICAgIHN0YXJ0SW5kZXg6IDAsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIG11bHRpcGxlRHJhZzogdHJ1ZSxcclxuICAgICAgICB0aHJlc2hvbGQ6IDIwLFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgcnRsOiBmYWxzZSxcclxuICAgICAgICBvbkluaXQ6ICgpID0+IHt9LFxyXG4gICAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcclxuICAgIH0pO1xyXG4gICAgaWYgKGNoaWxkQ2Fyb3VzZWxJdGVtLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBjaGlsZENhcm91c2VsQnRuLmlubmVySFRNTCA9IGBcclxuICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBhcmlhLWxhYmVsPVwiY2Fyb3VzZWwtcHJldlwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdCBpY29uXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIGFyaWEtbGFiZWw9XCJjYXJvdXNlbC1uZXh0XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodCBpY29uXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgYDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bYXJpYS1sYWJlbD1cImNhcm91c2VsLXByZXZcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhcnNvdXNlbEhvbWUucHJldigpKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bYXJpYS1sYWJlbD1cImNhcm91c2VsLW5leHRcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhcnNvdXNlbEhvbWUubmV4dCgpKTtcclxuICAgIH1cclxuICAgIC8qRmlyc3QgQ2Fyb3VzZWwqL1xyXG4gICAgLypDYXJvdXNlbCBWaWRlbyovXHJcbiAgICB2YXIgbW9iaWxlQ2hlY2sgPSBtb2JpbGVBbmRUYWJsZXRDaGVjaygpO1xyXG4gICAgdmFyIGxhc3RWaWRlb0NoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcl92aWRlbycpO1xyXG4gICAgaWYgKG1vYmlsZUNoZWNrID09PSBmYWxzZSAmJiBsYXN0VmlkZW9DaGVjaykge1xyXG4gICAgICAgIHZhciBjYXJvdXNlbFZpZGVvSG9tZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbGF0ZXN0VmlkZW8gLnNsaWRlcl92aWRlbyAuaW1hZ2VzX2xhdGVzdF92aWRlbycpO1xyXG4gICAgICAgIHZhciBjYXJvdXNlbFZpZGVvSG9tZURvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXRlc3RWaWRlbyAuc2xpZGVyX3ZpZGVvLWRvdCcpO1xyXG4gICAgICAgIHZhciBjYXJvdXNlbFZpZGVvSG9tZURvdFBhZ2UgPSBNYXRoLmNlaWwoY2Fyb3VzZWxWaWRlb0hvbWVJdGVtLmxlbmd0aCAvIDMpO1xyXG4gICAgICAgIGNvbnN0IGNhcnNvdXNlbFZpZGVvSG9tZSA9IG5ldyBTaWVtYSh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLnNsaWRlcl92aWRlbycsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgcGVyUGFnZTogMyxcclxuICAgICAgICAgICAgc3RhcnRJbmRleDogMCxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBtdWx0aXBsZURyYWc6IHRydWUsXHJcbiAgICAgICAgICAgIHRocmVzaG9sZDogMjAsXHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBydGw6IGZhbHNlLFxyXG4gICAgICAgICAgICBvbkluaXQ6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogKCkgPT4ge30sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGNhcm91c2VsVmlkZW9Ib21lRG90UGFnZSA+IDEpIHtcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBgYDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gY2Fyb3VzZWxWaWRlb0hvbWVEb3RQYWdlOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgKz0gYDxzcGFuIGNsYXNzPVwiZC0taW5saW5lLS1ibG9jayBteHItNSBkb3RWaWRlb1wiPjxpIGNsYXNzPVwiZmFzIGZhLWNpcmNsZVwiPjwvaT48L3NwYW4+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXJvdXNlbFZpZGVvSG9tZURvdC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gICAgICAgICAgICB2YXIgZG90VmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG90VmlkZW8nKTtcclxuICAgICAgICAgICAgZG90VmlkZW9bMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGRvdFZpZGVvLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90VmlkZW8uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Fyc291c2VsVmlkZW9Ib21lLmdvVG8oKGkgKyAxKSAqIDMgLSAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RWaWRlby5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJzb3VzZWxWaWRlb0hvbWUuZ29UbyhpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKG1vYmlsZUNoZWNrID09PSB0cnVlICYmIGxhc3RWaWRlb0NoZWNrKSB7XHJcbiAgICAgICAgdmFyIGNhcm91c2VsVmlkZW9Ib21lSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNsYXRlc3RWaWRlbyAuc2xpZGVyX3ZpZGVvIC5pbWFnZXNfbGF0ZXN0X3ZpZGVvJyk7XHJcbiAgICAgICAgdmFyIGNhcm91c2VsVmlkZW9Ib21lRG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhdGVzdFZpZGVvIC5zbGlkZXJfdmlkZW8tZG90Jyk7XHJcbiAgICAgICAgdmFyIGNhcm91c2VsVmlkZW9Ib21lRG90UGFnZSA9IE1hdGguY2VpbChjYXJvdXNlbFZpZGVvSG9tZUl0ZW0ubGVuZ3RoIC8gMSk7XHJcbiAgICAgICAgY29uc3QgY2Fyc291c2VsVmlkZW9Ib21lID0gbmV3IFNpZW1hKHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICcuc2xpZGVyX3ZpZGVvJyxcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICBwZXJQYWdlOiAxLFxyXG4gICAgICAgICAgICBzdGFydEluZGV4OiAwLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIG11bHRpcGxlRHJhZzogdHJ1ZSxcclxuICAgICAgICAgICAgdGhyZXNob2xkOiAyMCxcclxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgIHJ0bDogZmFsc2UsXHJcbiAgICAgICAgICAgIG9uSW5pdDogKCkgPT4ge30sXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoY2Fyb3VzZWxWaWRlb0hvbWVEb3RQYWdlID4gMSkge1xyXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGBgO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBjYXJvdXNlbFZpZGVvSG9tZURvdFBhZ2U7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29udGVudCArPSBgPHNwYW4gY2xhc3M9XCJkLS1pbmxpbmUtLWJsb2NrIG14ci01IGRvdFZpZGVvXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2lyY2xlXCI+PC9pPjwvc3Bhbj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhcm91c2VsVmlkZW9Ib21lRG90LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgIHZhciBkb3RWaWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb3RWaWRlbycpO1xyXG4gICAgICAgICAgICBkb3RWaWRlb1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgZG90VmlkZW8uZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RWaWRlby5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJzb3VzZWxWaWRlb0hvbWUuZ29UbygoaSArIDEpICogMyAtIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdFZpZGVvLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnNvdXNlbFZpZGVvSG9tZS5nb1RvKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qQ2Fyb3VzZWwgVmlkZW8qL1xyXG4gICAgLypQb3N0IENhcm91c2VsKi9cclxuICAgIHZhciBjYXJzb3VzZWxQb3N0SG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0TGlzdCAucG9zdExpc3RfX2J0bicpO1xyXG4gICAgdmFyIGNhcm9zZWxQb3N0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3N0TGlzdCAucG9zdExpc3RfX2l0ZW0nKTtcclxuICAgIGlmICghbW9iaWxlQ2hlY2spIHtcclxuICAgICAgICBjb25zdCBjYXJzb3VzZWxQb3N0SG9tZSA9IG5ldyBTaWVtYSh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLnBvc3RMaXN0X19jb250YWluJyxcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICBwZXJQYWdlOiA0LFxyXG4gICAgICAgICAgICBzdGFydEluZGV4OiAwLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIG11bHRpcGxlRHJhZzogdHJ1ZSxcclxuICAgICAgICAgICAgdGhyZXNob2xkOiAyMCxcclxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgIHJ0bDogZmFsc2UsXHJcbiAgICAgICAgICAgIG9uSW5pdDogKCkgPT4ge30sXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoY2Fyb3NlbFBvc3RMaXN0Lmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgY2Fyc291c2VsUG9zdEhvbWVCdG4uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBhcmlhLWxhYmVsPVwicG9zdC1saXN0LXByZXZcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnQgaWNvblwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1uZXh0XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodCBpY29uXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblthcmlhLWxhYmVsPVwicG9zdC1saXN0LW5leHRcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhcnNvdXNlbFBvc3RIb21lLnByZXYoKSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblthcmlhLWxhYmVsPVwicG9zdC1saXN0LXByZXZcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhcnNvdXNlbFBvc3RIb21lLm5leHQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChtb2JpbGVDaGVjaykge1xyXG4gICAgICAgIGNvbnN0IGNhcnNvdXNlbFBvc3RIb21lID0gbmV3IFNpZW1hKHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICcucG9zdExpc3RfX2NvbnRhaW4nLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgIHBlclBhZ2U6IDEsXHJcbiAgICAgICAgICAgIHN0YXJ0SW5kZXg6IDAsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgbXVsdGlwbGVEcmFnOiB0cnVlLFxyXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDIwLFxyXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgcnRsOiBmYWxzZSxcclxuICAgICAgICAgICAgb25Jbml0OiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgb25DaGFuZ2U6ICgpID0+IHt9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChjYXJvc2VsUG9zdExpc3QubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICBjYXJzb3VzZWxQb3N0SG9tZUJ0bi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIGFyaWEtbGFiZWw9XCJwb3N0LWxpc3QtcHJldlwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdCBpY29uXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBhcmlhLWxhYmVsPVwicG9zdC1saXN0LW5leHRcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0IGljb25cIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgYDtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2FyaWEtbGFiZWw9XCJwb3N0LWxpc3QtbmV4dFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2Fyc291c2VsUG9zdEhvbWUucHJldigpKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2FyaWEtbGFiZWw9XCJwb3N0LWxpc3QtcHJldlwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2Fyc291c2VsUG9zdEhvbWUubmV4dCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLypQb3N0IENhcm91c2VsKi9cclxuICAgIC8qQ2xpayBzaG93IHBvc3QgY2F0ZWdvcnkqL1xyXG4gICAgdmFyIGNhdGVnb3J5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlZ29yeUxpc3QgLmNhdGVnb3J5TGlzdF9fY29udGFpbiAudGVybV9fbGluaycpO1xyXG4gICAgY2F0ZWdvcnlMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhdGVnb3J5ID0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3dcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXBpVXJsID0gYGA7XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaVVybCA9IGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vd3AtanNvbi9ibG9nLWFwaS92MS9ibG9nL29mZnNldD0wJmNhdGVnb3J5PSR7Y2F0ZWdvcnl9YDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi93b2xmYWN0aXZlLWdhbWV3aWtpL1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpVXJsID0gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfS93b2xmYWN0aXZlLWdhbWV3aWtpL3dwLWpzb24vYmxvZy1hcGkvdjEvYmxvZy9vZmZzZXQ9MCZjYXRlZ29yeT0ke2NhdGVnb3J5fWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmZXRjaChhcGlVcmwpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gYGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yeVNob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdExpc3QgLnBvc3RMaXN0X19jb250YWluJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5U2hvdy5pbm5lckhUTUwgPSBgYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ICs9IGBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3N0TGlzdF9faXRlbSBkLS1ibG9ja1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zdExpc3RfX2l0ZW0taW1nXCI+XHJcbiAgICAgICAgICAgICAgJHtpdGVtLnRodW1ibmFpbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIke2l0ZW0udXJsfVwiIGNsYXNzPVwicG9zdExpc3RfX2l0ZW0tdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0aXRsZS0taXRlbVwiPiR7aXRlbS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5U2hvdy5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1vYmlsZUNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJzb3VzZWxQb3N0SG9tZSA9IG5ldyBTaWVtYSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcucG9zdExpc3RfX2NvbnRhaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlclBhZ2U6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRJbmRleDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVEcmFnOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnRsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkluaXQ6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhcm9zZWxQb3N0TGlzdC5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fyc291c2VsUG9zdEhvbWVCdG4uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBhcmlhLWxhYmVsPVwicG9zdC1saXN0LXByZXZcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnQgaWNvblwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1uZXh0XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodCBpY29uXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2FyaWEtbGFiZWw9XCJwb3N0LWxpc3QtbmV4dFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2Fyc291c2VsUG9zdEhvbWUucHJldigpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1wcmV2XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYXJzb3VzZWxQb3N0SG9tZS5uZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vYmlsZUNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJzb3VzZWxQb3N0SG9tZSA9IG5ldyBTaWVtYSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcucG9zdExpc3RfX2NvbnRhaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlclBhZ2U6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRJbmRleDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVEcmFnOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnRsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkluaXQ6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhcm9zZWxQb3N0TGlzdC5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fyc291c2VsUG9zdEhvbWVCdG4uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBhcmlhLWxhYmVsPVwicG9zdC1saXN0LXByZXZcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnQgaWNvblwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1uZXh0XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodCBpY29uXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2FyaWEtbGFiZWw9XCJwb3N0LWxpc3QtbmV4dFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2Fyc291c2VsUG9zdEhvbWUucHJldigpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1wcmV2XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYXJzb3VzZWxQb3N0SG9tZS5uZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvKkNsaWNrIHNob3cgcG9zdCBjYXRlZ29yeSovXHJcbiAgICAgICAgLypDbGljayBsb2FkbW9yZSBvbiBnYW1lIHdpa2kqL1xyXG4gICAgdmFyIGxvYWRtb3JlQnRuV2lraSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX3N0cmF0ZWd5IC5ndHJfc2VlX21vcmUnKTtcclxuICAgIHZhciBsb2FkbW9yZUJ0blNob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9zdHJhdGVneSAuZ2FtZV9zdHJhdGVneS1saXN0Jyk7XHJcbiAgICB2YXIgb2Zmc2V0TG9hZCA9IDEyO1xyXG4gICAgbG9hZG1vcmVCdG5XaWtpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIGxvYWRtb3JlVXJsID0gYGA7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpIHtcclxuICAgICAgICAgICAgbG9hZG1vcmVVcmwgPSBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9L3dwLWpzb24vZ2FtZXdpa2ktYXBpL3YxL2dhbWV3aWtpL29mZnNldD0ke29mZnNldExvYWR9YDtcclxuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvd29sZmFjdGl2ZS1nYW1ld2lraS9cIikge1xyXG4gICAgICAgICAgICBsb2FkbW9yZVVybCA9IGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vd29sZmFjdGl2ZS1nYW1ld2lraS93cC1qc29uL2dhbWV3aWtpLWFwaS92MS9nYW1ld2lraS9vZmZzZXQ9JHtvZmZzZXRMb2FkfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZldGNoKGxvYWRtb3JlVXJsKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IGBgO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1kaXZpZGUtMiBtYy1tZyBjb2wtZGl2aWRlLXNtLTYgY29sLWRpdmlkZS1tZC0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZXNfZ2FtZV9zdHJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke2l0ZW0udXJsfVwiPiR7aXRlbS50aHVtYm5haWx9PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlX2dhbWVfc3RyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtpdGVtLnVybH1cIj4ke2l0ZW0udGl0bGV9PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGxvYWRtb3JlQnRuU2hvdy5pbm5lckhUTUwgKz0gY29udGVudDtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCAhPT0gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkbW9yZUJ0bldpa2kuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLmxlbmd0aCA9PT0gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRMb2FkID0gb2Zmc2V0TG9hZCArIDExO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgdmFyIGZyZWVBcHBVcmwgPSBcIlwiO1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpIHtcclxuICAgICAgICAvLyBmcmVlQXBwVXJsID1gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9L3dwLWNvbnRlbnQvdGhlbWVzL3dvbGZhY3RpdmUtZ2FtZXdpa2kvanNvbi9mcmVlLWRhdGEuanNvbmA7XHJcbiAgICAgICAgZnJlZUFwcFVybCA9IGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vd3AtanNvbi9yYW5raW5nLWFwaS92MS9mcmVlYDtcclxuICAgIH0gZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi93b2xmYWN0aXZlLWdhbWV3aWtpL1wiKSB7XHJcbiAgICAgICAgZnJlZUFwcFVybCA9IGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vd29sZmFjdGl2ZS1nYW1ld2lraS93cC1qc29uL3JhbmtpbmctYXBpL3YxL2ZyZWVgO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2dhbWUtd2lraS9cIikge1xyXG4gICAgICAgIGZyZWVBcHBVcmwgPSBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9L2dhbWUtd2lraS93cC1qc29uL3JhbmtpbmctYXBpL3YxL2ZyZWVgO1xyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyhmcmVlQXBwVXJsKTtcclxuICAgIGZldGNoKGZyZWVBcHBVcmwpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGBgO1xyXG4gICAgICAgICAgICBsZXQgZnJlZUdhbWVSYW5raW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZyZWVHYW1lUmFua2luZycpO1xyXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYXRpbmdDb3VudCA9IE1hdGgucm91bmQoaXRlbS5zdGFyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmF0aW5nTGVmdCA9IDUgLSBNYXRoLnJvdW5kKGl0ZW0uc3Rhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhdGluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJhdGluZ0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nICs9IGA8aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+PC9pPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByYXRpbmdMZWZ0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nICs9IGA8aSBjbGFzcz1cImZhcyBmYS1zdGFyIGxlZnRcIj48L2k+YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2l0ZW0tY29udGFpblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2l0ZW0taW1nXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2l0ZW0uaW1hZ2V9XCIgYWx0PVwiJHtpdGVtLnVybH1cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGUtLWl0ZW1cIj4ke2l0ZW0udGl0bGV9PC9wPiBcclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImFwcC0tc3RhclwiPiR7cmF0aW5nfTwvcD4gICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2l0ZW0tYnRuXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIke2l0ZW0udXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jbG91ZC1kb3dubG9hZC1hbHRcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGZyZWVHYW1lUmFua2luZy5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gICAgICAgIH0pXHJcbiAgICB2YXIgZ3Jvc3NpbmdBcHBVcmwgPSBcIlwiO1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpIHtcclxuICAgICAgICBncm9zc2luZ0FwcFVybCA9IGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vd3AtanNvbi9yYW5raW5nLWFwaS92MS9ncm9zc2luZ2A7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvd29sZmFjdGl2ZS1nYW1ld2lraS9cIikge1xyXG4gICAgICAgIGdyb3NzaW5nQXBwVXJsID0gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfS93b2xmYWN0aXZlLWdhbWV3aWtpL3dwLWpzb24vcmFua2luZy1hcGkvdjEvZ3Jvc3NpbmdgO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2dhbWUtd2lraS9cIikge1xyXG4gICAgICAgIGdyb3NzaW5nQXBwVXJsID0gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfS9nYW1lLXdpa2kvd3AtanNvbi9yYW5raW5nLWFwaS92MS9ncm9zc2luZ2A7XHJcbiAgICB9XHJcbiAgICBmZXRjaChncm9zc2luZ0FwcFVybClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBgYDtcclxuICAgICAgICAgICAgbGV0IGdyb3NzaW5nR2FtZVJhbmtpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3Jvc3NpbmdHYW1lUmFua2luZycpO1xyXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYXRpbmdDb3VudCA9IE1hdGgucm91bmQoaXRlbS5zdGFyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmF0aW5nTGVmdCA9IDUgLSBNYXRoLnJvdW5kKGl0ZW0uc3Rhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhdGluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJhdGluZ0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nICs9IGA8aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+PC9pPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByYXRpbmdMZWZ0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nICs9IGA8aSBjbGFzcz1cImZhcyBmYS1zdGFyIGxlZnRcIj48L2k+YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWNvbnRhaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbS1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2l0ZW0uaW1hZ2V9XCIgYWx0PVwiJHtpdGVtLnVybH1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGUtLWl0ZW1cIj4ke2l0ZW0udGl0bGV9PC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhcHAtLXN0YXJcIj4ke3JhdGluZ308L3A+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7aXRlbS51cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jbG91ZC1kb3dubG9hZC1hbHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGdyb3NzaW5nR2FtZVJhbmtpbmcuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8qQ2xpY2sgbG9hZG1vcmUgb24gZ2FtZSB3aWtpKi9cclxuICAgICAgICAvKlJlbmRlciBhcGkgYXBwIHJhbmtpbmcqL1xyXG59IiwidmFyIGl0ZW1TY3JvbGxUbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1ld2lraV9fdGFibGUtdGl0bGUgYScpO1xyXG5cclxuaXRlbVNjcm9sbFRvLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgIGl0ZW0ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBzY3JvbGxUbyA9IGl0ZW0uZ2V0QXR0cmlidXRlKCd0YXJnZXQtc2Nyb2xsJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2Nyb2xsVG8pLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pIiwidmFyIGRvbUJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2luZ2xlXCIpO1xyXG5pZiAoZG9tQm9keS5sZW5ndGggIT0gMCkge1xyXG4gICAgY29uc3QgYmFja1RvVG9wQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYWNrLXRvLXRvcC1idG5cIik7XHJcbiAgICB2YXIgcHJvdG9jb2wgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2w7XHJcbiAgICB2YXIgaG9zdG5hbWUgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxGdW5jdGlvbik7XHJcblxyXG4gICAgZnVuY3Rpb24gc2Nyb2xsRnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDMwMCkgeyAvLyBTaG93IGJhY2tUb1RvcEJ1dHRvblxyXG4gICAgICAgICAgICBpZiAoIWJhY2tUb1RvcEJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJidG5FbnRyYW5jZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgYmFja1RvVG9wQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJidG5FeGl0XCIpO1xyXG4gICAgICAgICAgICAgICAgYmFja1RvVG9wQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG5FbnRyYW5jZVwiKTtcclxuICAgICAgICAgICAgICAgIGJhY2tUb1RvcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHsgLy8gSGlkZSBiYWNrVG9Ub3BCdXR0b25cclxuICAgICAgICAgICAgaWYgKGJhY2tUb1RvcEJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJidG5FbnRyYW5jZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgYmFja1RvVG9wQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJidG5FbnRyYW5jZVwiKTtcclxuICAgICAgICAgICAgICAgIGJhY2tUb1RvcEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuRXhpdFwiKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja1RvVG9wQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH0sIDI1MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmFja1RvVG9wQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzbW9vdGhTY3JvbGxCYWNrVG9Ub3ApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNtb290aFNjcm9sbEJhY2tUb1RvcCgpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRhcmdldFBvc2l0aW9uIC0gc3RhcnRQb3NpdGlvbjtcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IDc1MDtcclxuICAgICAgICBsZXQgc3RhcnQgPSBudWxsO1xyXG5cclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHRpbWVzdGFtcCkge1xyXG4gICAgICAgICAgICBpZiAoIXN0YXJ0KSBzdGFydCA9IHRpbWVzdGFtcDtcclxuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSB0aW1lc3RhbXAgLSBzdGFydDtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGVhc2VJbk91dEN1YmljKHByb2dyZXNzLCBzdGFydFBvc2l0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24pKTtcclxuICAgICAgICAgICAgaWYgKHByb2dyZXNzIDwgZHVyYXRpb24pIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVhc2VJbk91dEN1YmljKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICB0IC89IGQgLyAyO1xyXG4gICAgICAgIGlmICh0IDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKiB0ICsgYjtcclxuICAgICAgICB0IC09IDI7XHJcbiAgICAgICAgcmV0dXJuIGMgLyAyICogKHQgKiB0ICogdCArIDIpICsgYjtcclxuICAgIH07XHJcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHsgc2Nyb2xsRml4ZWRTaWRlQmFyKCkgfTtcclxuXHJcbiAgICB2YXIgc2lkZWJhckxlZnRzY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGVCYXJMZWZ0U2Nyb2xsXCIpO1xyXG4gICAgdmFyIHNpZGViYXJSaWdodHNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclJpZ2h0c2Nyb2xsXCIpO1xyXG4gICAgdmFyIHNpZGViYXJNZW51UmFua2luZ3Njcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhck1lbnVSYW5raW5nc2Nyb2xsXCIpO1xyXG4gICAgdmFyIHNpZGViYXJNZW51TGVmdGNyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyTWVudUxlZnRjcm9sbFwiKTtcclxuICAgIHZhciBzdGlja3lMZWZ0ID0gc2lkZWJhckxlZnRzY3JvbGwub2Zmc2V0VG9wO1xyXG4gICAgY29uc3Qgc2Nyb2xsRml4ZWRTaWRlQmFyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBzdGlja3lMZWZ0KSB7XHJcbiAgICAgICAgICAgIHNpZGViYXJMZWZ0c2Nyb2xsLmNsYXNzTGlzdC5hZGQoXCJyb2xsX3NpZGViYXJcIik7XHJcbiAgICAgICAgICAgIHNpZGViYXJSaWdodHNjcm9sbC5jbGFzc0xpc3QuYWRkKFwicm9sbF9zaWRlYmFyXCIpO1xyXG4gICAgICAgICAgICBzaWRlYmFyTWVudVJhbmtpbmdzY3JvbGwuY2xhc3NMaXN0LmFkZChcInJvbGxfc2lkZWJhci1tZW51XCIpO1xyXG4gICAgICAgICAgICBzaWRlYmFyTWVudUxlZnRjcm9sbC5jbGFzc0xpc3QuYWRkKFwicm9sbF9zaWRlYmFyLW1lbnVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2lkZWJhckxlZnRzY3JvbGwuY2xhc3NMaXN0LnJlbW92ZShcInJvbGxfc2lkZWJhclwiKTtcclxuICAgICAgICAgICAgc2lkZWJhclJpZ2h0c2Nyb2xsLmNsYXNzTGlzdC5yZW1vdmUoXCJyb2xsX3NpZGViYXJcIik7XHJcbiAgICAgICAgICAgIHNpZGViYXJNZW51UmFua2luZ3Njcm9sbC5jbGFzc0xpc3QucmVtb3ZlKFwicm9sbF9zaWRlYmFyLW1lbnVcIik7XHJcbiAgICAgICAgICAgIHNpZGViYXJNZW51TGVmdGNyb2xsLmNsYXNzTGlzdC5yZW1vdmUoXCJyb2xsX3NpZGViYXItbWVudVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgZnJlZUFwcFVybCA9IFwiXCI7XHJcbiAgICBpZiAocHJvdG9jb2wgPT09IFwiaHR0cDpcIiAmJiBob3N0bmFtZSA9PT0gXCJsb2NhbGhvc3RcIikge1xyXG4gICAgICAgIGZyZWVBcHBVcmwgPSBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9L2dhbWUtd2lraS93cC1qc29uL3JhbmtpbmctYXBpL3YxL2ZyZWVgO1xyXG4gICAgfSBlbHNlIGlmIChwcm90b2NvbCA9PT0gXCJodHRwczpcIiB8fCBwcm90b2NvbCA9PT0gXCJodHRwOlwiKSB7XHJcbiAgICAgICAgZnJlZUFwcFVybCA9IGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vd3AtanNvbi9yYW5raW5nLWFwaS92MS9mcmVlYDtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGZyZWVBcHBVcmwpO1xyXG4gICAgZmV0Y2goZnJlZUFwcFVybClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gYGA7XHJcbiAgICAgICAgICAgIGxldCBmcmVlR2FtZVJhbmtpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZnJlZUdhbWVSYW5raW5nJyk7XHJcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhdGluZ0NvdW50ID0gTWF0aC5yb3VuZChpdGVtLnN0YXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYXRpbmdMZWZ0ID0gNSAtIE1hdGgucm91bmQoaXRlbS5zdGFyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmF0aW5nID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmF0aW5nQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYXRpbmcgKz0gYDxpIGNsYXNzPVwiZmFzIGZhLXN0YXJcIj48L2k+YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJhdGluZ0xlZnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYXRpbmcgKz0gYDxpIGNsYXNzPVwiZmFzIGZhLXN0YXIgbGVmdFwiPjwvaT5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2l0ZW1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbS1jb250YWluXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbS1pbWdcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aXRlbS5pbWFnZX1cIiBhbHQ9XCIke2l0ZW0udXJsfVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZS0taXRlbVwiPiR7aXRlbS50aXRsZX08L3A+IFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiYXBwLS1zdGFyXCI+JHtyYXRpbmd9PC9wPiAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbS1idG5cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiR7aXRlbS51cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNsb3VkLWRvd25sb2FkLWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZnJlZUdhbWVSYW5raW5nLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgfSlcclxuICAgIHZhciBncm9zc2luZ0FwcFVybCA9IFwiXCI7XHJcbiAgICBpZiAocHJvdG9jb2wgPT09IFwiaHR0cDpcIiAmJiBob3N0bmFtZSA9PT0gXCJsb2NhbGhvc3RcIikge1xyXG4gICAgICAgIGdyb3NzaW5nQXBwVXJsID0gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfS9nYW1lLXdpa2kvd3AtanNvbi9yYW5raW5nLWFwaS92MS9ncm9zc2luZ2A7XHJcbiAgICB9IGVsc2UgaWYgKHByb3RvY29sID09PSBcImh0dHBzOlwiIHx8IHByb3RvY29sID09PSBcImh0dHA6XCIpIHtcclxuICAgICAgICBncm9zc2luZ0FwcFVybCA9IGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vd3AtanNvbi9yYW5raW5nLWFwaS92MS9ncm9zc2luZ2A7XHJcbiAgICB9XHJcbiAgICBmZXRjaChncm9zc2luZ0FwcFVybClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBgYDtcclxuICAgICAgICAgICAgbGV0IGdyb3NzaW5nR2FtZVJhbmtpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3Jvc3NpbmdHYW1lUmFua2luZycpO1xyXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYXRpbmdDb3VudCA9IE1hdGgucm91bmQoaXRlbS5zdGFyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmF0aW5nTGVmdCA9IDUgLSBNYXRoLnJvdW5kKGl0ZW0uc3Rhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhdGluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJhdGluZ0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nICs9IGA8aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+PC9pPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByYXRpbmdMZWZ0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nICs9IGA8aSBjbGFzcz1cImZhcyBmYS1zdGFyIGxlZnRcIj48L2k+YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWNvbnRhaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbS1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2l0ZW0uaW1hZ2V9XCIgYWx0PVwiJHtpdGVtLnVybH1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGUtLWl0ZW1cIj4ke2l0ZW0udGl0bGV9PC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhcHAtLXN0YXJcIj4ke3JhdGluZ308L3A+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7aXRlbS51cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jbG91ZC1kb3dubG9hZC1hbHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGdyb3NzaW5nR2FtZVJhbmtpbmcuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICB9KVxyXG59IiwiY29uc3QgbW9iaWxlQW5kVGFibGV0Q2hlY2sgPSAoKSA9PntcclxuICBsZXQgY2hlY2sgPSBmYWxzZTtcclxuICAgIChmdW5jdGlvbihhKXtcclxuICAgICAgICBpZigvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2kudGVzdChhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLDQpKSlcclxuICAgICAgICAgICAgY2hlY2sgPSB0cnVlO1xyXG4gICAgfSkobmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8d2luZG93Lm9wZXJhKTtcclxuICAgIHJldHVybiBjaGVjaztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgbW9iaWxlQW5kVGFibGV0Q2hlY2tcclxufTtcclxuIiwiaW1wb3J0IExhenlMb2FkIGZyb20gXCJ2YW5pbGxhLWxhenlsb2FkXCI7XHJcbmltcG9ydCAnLi9wYWdlcy9ob21lcGFnZSc7XHJcbmltcG9ydCAnLi9wYWdlcy9zaW5nbGUnO1xyXG5pbXBvcnQgJy4vcGFnZXMvZ2FtZXdpa2ktdGFiJztcclxuaW1wb3J0ICcuL3BhZ2VzL3Njcm9sbC1zZWN0aW9uJztcclxuaW1wb3J0ICdzaGFyZW9uJ1xyXG4vKlZBUklBQkxFUyovXHJcbnZhciBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpZnJhbWUnKTtcclxudmFyIGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpO1xyXG52YXIgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd2aWRlbycpO1xyXG4vKlZBUklBQkxFUyovXHJcbi8qTG9jYWwgU3RvcmFnZSovXHJcbmZ1bmN0aW9uIEx1dVZhb0xvY2FsU3RvcmFnZShBcnJheSwgbmFtZUFycmF5KSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIHZhciBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KEFycmF5KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWVBcnJheSwganNvbkRhdGEpO1xyXG59XHJcbi8qbmFtZUFycmF5IGzDoCBk4bqhbmcgc3RyaW5nLCBhcnJheSBsw6AgYmnhur9uIGFycmF5IGPhuqduIGzGsHUgdsOgbyovXHJcbmZ1bmN0aW9uIExheUxvY2FsU3RvcmFnZShuYW1lQXJyYXksIEFycmF5KSB7XHJcbiAgICB2YXIganNvbkRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lQXJyYXkpO1xyXG4gICAgaWYgKCFqc29uRGF0YSkgeyBsb2NhbFN0b3JhZ2UgPSBbXTsgcmV0dXJuOyB9XHJcbiAgICBBcnJheSA9IEpTT04ucGFyc2UoanNvbkRhdGEpO1xyXG59XHJcbi8qbmFtZUFycmF5IGzDoCBk4bqhbmcgc3RyaW5nLCBhcnJheSBsw6AgYmnhur9uIGFycmF5IGPhuqduIGzGsHUgbG9jYWwgdsOgbyovXHJcbi8qTG9jYWwgU3RvcmFnZSovXHJcbi8qIFJlc3Bvc2l2ZSBsYXp5IGxvYWQqL1xyXG5mdW5jdGlvbiBpZnJhbWVSZXNwb3NpdmUoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlmcmFtZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmcmFtZVtpXS5jbGFzc0xpc3QuYWRkKCdsYXp5Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGltZ1Jlc3Bvc2l2ZSgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaW1nW2ldLmNsYXNzTGlzdC5hZGQoJ2xhenknKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmlkZW9SZXNwb3NpdmUoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpZGVvLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmlkZW9baV0uY2xhc3NMaXN0LmFkZCgnbGF6eScpO1xyXG4gICAgfVxyXG59XHJcbmlmcmFtZSA/IGlmcmFtZVJlc3Bvc2l2ZSgpIDoge307XHJcbmltZyA/IGltZ1Jlc3Bvc2l2ZSgpIDoge307XHJcbnZpZGVvID8gdmlkZW9SZXNwb3NpdmUoKSA6IHt9O1xyXG52YXIgbGF6eUxvYWRJbnN0YW5jZSA9IG5ldyBMYXp5TG9hZCh7IGVsZW1lbnRzX3NlbGVjdG9yOiBcIi5sYXp5XCIgfSk7XHJcbi8qIFJlc3Bvc2l2ZSBsYXp5IGxvYWQqLyJdLCJzb3VyY2VSb290IjoiIn0=