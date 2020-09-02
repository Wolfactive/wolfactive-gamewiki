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

if ((window.location.pathname === "/" || window.location.pathname === "/wolfactive-gamewiki/") && homepage) {
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
    freeAppUrl = "".concat(protocol, "//").concat(hostname, "/wp-content/themes/wolfactive-gamewiki/json/free-data.json");
  } else if (window.location.pathname === "/wolfactive-gamewiki/") {
    freeAppUrl = "".concat(protocol, "//").concat(hostname, "/wolfactive-gamewiki/wp-content/themes/wolfactive-gamewiki/json/free-data.json");
  }

  fetch(freeAppUrl).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    var content = "";
    var freeGameRanking = document.querySelector('#freeGameRanking');
    data.content.forEach(function (item, i) {
      if (i < 5) {
        var ratingCount = Math.round(item.rating);
        var ratingLeft = 5 - Math.round(item.rating);
        var rating = "";

        for (i = 0; i < ratingCount; i++) {
          rating += "<i class=\"fas fa-star\"></i>";
        }

        for (i = 0; i < ratingLeft; i++) {
          rating += "<i class=\"fas fa-star left\"></i>";
        }

        content += "\n        <div class=\"app-ranking__item\">\n          <div class=\"app-ranking__item-contain\">\n            <div class=\"app-ranking__item-img\">\n              <img src=\"".concat(item.icon, "\" alt=\"").concat(item.slug, "\" />\n            </div>\n            <div class=\"app-ranking__description\">\n              <p class=\"title--item\">").concat(item.title, "</p> \n              <p class=\"app--star\">").concat(rating, "</p>    \n            </div>\n          </div>\n          <div class=\"app-ranking__item-btn\">\n            <a href=\"https://apps.apple.com/vn/app/").concat(item.slug, "/id").concat(item.id, "\" target=\"_blank\" rel=\"noopener noreferrer\">\n              <i class=\"fas fa-cloud-download-alt\"></i>\n            </a>\n          </div>\n        </div>\n        ");
      }
    });
    freeGameRanking.innerHTML = content;
  });
  var grossingAppUrl = "";

  if (window.location.pathname === "/") {
    grossingAppUrl = "".concat(protocol, "//").concat(hostname, "/wp-content/themes/wolfactive-gamewiki/json/grossing-data.json");
  } else if (window.location.pathname === "/wolfactive-gamewiki/") {
    grossingAppUrl = "".concat(protocol, "//").concat(hostname, "/wolfactive-gamewiki/wp-content/themes/wolfactive-gamewiki/json/grossing-data.json");
  }

  fetch(grossingAppUrl).then(function (response) {
    return response.json();
  }).then(function (data) {
    var content = "";
    var grossingGameRanking = document.querySelector('#grossingGameRanking');
    data.content.forEach(function (item, i) {
      if (i < 5) {
        var ratingCount = Math.round(item.rating);
        var ratingLeft = 5 - Math.round(item.rating);
        var rating = "";

        for (i = 0; i < ratingCount; i++) {
          rating += "<i class=\"fas fa-star\"></i>";
        }

        for (i = 0; i < ratingLeft; i++) {
          rating += "<i class=\"fas fa-star left\"></i>";
        }

        content += "\n        <div class=\"app-ranking__item\">\n          <div class=\"app-ranking__item-contain\">\n            <div class=\"app-ranking__item-img\">\n              <img src=\"".concat(item.icon, "\" alt=\"").concat(item.slug, "\" />\n            </div>\n            <div class=\"app-ranking__description\">\n              <p class=\"title--item\">").concat(item.title, "</p> \n              <p class=\"app--star\">").concat(rating, "</p>    \n            </div>\n          </div>\n          <div class=\"app-ranking__item-btn\">\n            <a href=\"https://apps.apple.com/vn/app/").concat(item.slug, "/id").concat(item.id, "\" target=\"_blank\" rel=\"noopener noreferrer\">\n              <i class=\"fas fa-cloud-download-alt\"></i>\n            </a>\n          </div>\n        </div>\n        ");
      }
    });
    grossingGameRanking.innerHTML = content;
  });
  /*Click loadmore on game wiki*/

  /*Render api app ranking*/
}

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
    freeAppUrl = "".concat(protocol, "//").concat(hostname, "/wolfactive-gamewiki/wp-content/themes/wolfactive-gamewiki/json/free-data.json");
  } else if (protocol === "https:" || protocol === "http:") {
    freeAppUrl = "".concat(protocol, "//").concat(hostname, "/wp-content/themes/wolfactive-gamewiki/json/free-data.json");
  }

  fetch(freeAppUrl).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    var content = "";
    var freeGameRanking = document.querySelector('#freeGameRanking');
    data.content.forEach(function (item, i) {
      if (i < 5) {
        var ratingCount = Math.round(item.rating);
        var ratingLeft = 5 - Math.round(item.rating);
        var rating = "";

        for (i = 0; i < ratingCount; i++) {
          rating += "<i class=\"fas fa-star\"></i>";
        }

        for (i = 0; i < ratingLeft; i++) {
          rating += "<i class=\"fas fa-star left\"></i>";
        }

        content += "\n        <div class=\"app-ranking__item\">\n          <div class=\"app-ranking__item-contain\">\n            <div class=\"app-ranking__item-img\">\n              <img src=\"".concat(item.icon, "\" alt=\"").concat(item.slug, "\" />\n            </div>\n            <div class=\"app-ranking__description\">\n              <p class=\"title--item\">").concat(item.title, "</p> \n              <p class=\"app--star\">").concat(rating, "</p>    \n            </div>\n          </div>\n          <div class=\"app-ranking__item-btn\">\n            <a href=\"https://apps.apple.com/vn/app/").concat(item.slug, "/id").concat(item.id, "\" target=\"_blank\" rel=\"noopener noreferrer\">\n              <i class=\"fas fa-cloud-download-alt\"></i>\n            </a>\n          </div>\n        </div>\n        ");
      }
    });
    freeGameRanking.innerHTML = content;
  });
  var grossingAppUrl = "";

  if (protocol === "http:" && hostname === "localhost") {
    grossingAppUrl = "".concat(protocol, "//").concat(hostname, "/wolfactive-gamewiki/wp-content/themes/wolfactive-gamewiki/json/grossing-data.json");
  } else if (protocol === "https:" || protocol === "http:") {
    grossingAppUrl = "".concat(protocol, "//").concat(hostname, "/wp-content/themes/wolfactive-gamewiki/json/grossing-data.json");
  }

  fetch(grossingAppUrl).then(function (response) {
    return response.json();
  }).then(function (data) {
    var content = "";
    var grossingGameRanking = document.querySelector('#grossingGameRanking');
    data.content.forEach(function (item, i) {
      if (i < 5) {
        var ratingCount = Math.round(item.rating);
        var ratingLeft = 5 - Math.round(item.rating);
        var rating = "";

        for (i = 0; i < ratingCount; i++) {
          rating += "<i class=\"fas fa-star\"></i>";
        }

        for (i = 0; i < ratingLeft; i++) {
          rating += "<i class=\"fas fa-star left\"></i>";
        }

        content += "\n        <div class=\"app-ranking__item\">\n          <div class=\"app-ranking__item-contain\">\n            <div class=\"app-ranking__item-img\">\n              <img src=\"".concat(item.icon, "\" alt=\"").concat(item.slug, "\" />\n            </div>\n            <div class=\"app-ranking__description\">\n              <p class=\"title--item\">").concat(item.title, "</p> \n              <p class=\"app--star\">").concat(rating, "</p>    \n            </div>\n          </div>\n          <div class=\"app-ranking__item-btn\">\n            <a href=\"https://apps.apple.com/vn/app/").concat(item.slug, "/id").concat(item.id, "\" target=\"_blank\" rel=\"noopener noreferrer\">\n              <i class=\"fas fa-cloud-download-alt\"></i>\n            </a>\n          </div>\n        </div>\n        ");
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
/* harmony import */ var shareon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shareon */ "./node_modules/shareon/dist/shareon.mjs");





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NoYXJlb24vZGlzdC9zaGFyZW9uLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2llbWEvZGlzdC9zaWVtYS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtbGF6eWxvYWQvZGlzdC9sYXp5bG9hZC5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvZ2FtZXdpa2ktdGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlcy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvc2luZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYXJ0dGVuL21vYmlsZUFuZFRhYmxldENoZWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yb290LmpzIl0sIm5hbWVzIjpbImUiLCJ0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsInNlbGYiLCJyIiwiaSIsIm4iLCJsIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJnZXQiLCJfX2VzTW9kdWxlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIlR5cGVFcnJvciIsInZhbHVlIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsImxlbmd0aCIsIndyaXRhYmxlIiwia2V5IiwiY29uZmlnIiwibWVyZ2VTZXR0aW5ncyIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiRXJyb3IiLCJyZXNvbHZlU2xpZGVzTnVtYmVyIiwic2VsZWN0b3JXaWR0aCIsIm9mZnNldFdpZHRoIiwiaW5uZXJFbGVtZW50cyIsInNsaWNlIiwiY2hpbGRyZW4iLCJjdXJyZW50U2xpZGUiLCJsb29wIiwic3RhcnRJbmRleCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJwZXJQYWdlIiwidHJhbnNmb3JtUHJvcGVydHkiLCJ3ZWJraXRPck5vdCIsImZvckVhY2giLCJiaW5kIiwiaW5pdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemVIYW5kbGVyIiwiZHJhZ2dhYmxlIiwicG9pbnRlckRvd24iLCJkcmFnIiwic3RhcnRYIiwiZW5kWCIsInN0YXJ0WSIsImxldEl0R28iLCJwcmV2ZW50Q2xpY2siLCJ0b3VjaHN0YXJ0SGFuZGxlciIsInRvdWNoZW5kSGFuZGxlciIsInRvdWNobW92ZUhhbmRsZXIiLCJtb3VzZWRvd25IYW5kbGVyIiwibW91c2V1cEhhbmRsZXIiLCJtb3VzZWxlYXZlSGFuZGxlciIsIm1vdXNlbW92ZUhhbmRsZXIiLCJjbGlja0hhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnRzIiwic3R5bGUiLCJvdmVyZmxvdyIsImRpcmVjdGlvbiIsInJ0bCIsImJ1aWxkU2xpZGVyRnJhbWUiLCJvbkluaXQiLCJzbGlkZXJGcmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImVuYWJsZVRyYW5zaXRpb24iLCJjdXJzb3IiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiYnVpbGRTbGlkZXJGcmFtZUl0ZW0iLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsImEiLCJpbm5lckhUTUwiLCJzbGlkZVRvQ3VycmVudCIsImNzc0Zsb2F0IiwiaW5uZXJXaWR0aCIsImFyZ3VtZW50cyIsImRpc2FibGVUcmFuc2l0aW9uIiwib25DaGFuZ2UiLCJ3ZWJraXRUcmFuc2l0aW9uIiwiZWFzaW5nIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWJzIiwibXVsdGlwbGVEcmFnIiwiY2VpbCIsInRocmVzaG9sZCIsInByZXYiLCJuZXh0IiwiaW5kZXhPZiIsInRhcmdldCIsIm5vZGVOYW1lIiwic3RvcFByb3BhZ2F0aW9uIiwidG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJ1cGRhdGVBZnRlckRyYWciLCJjbGVhckRyYWciLCJwcmV2ZW50RGVmYXVsdCIsInNwbGljZSIsImluc2VydCIsImRldGFjaEV2ZW50cyIsInJlbW92ZUF0dHJpYnV0ZSIsImRvY3VtZW50RWxlbWVudCIsInRyYW5zZm9ybSIsImFzc2lnbiIsImFwcGx5IiwibmF2aWdhdG9yIiwidGVzdCIsInVzZXJBZ2VudCIsImRldmljZVBpeGVsUmF0aW8iLCJlbGVtZW50c19zZWxlY3RvciIsImNvbnRhaW5lciIsInRocmVzaG9sZHMiLCJkYXRhX3NyYyIsImRhdGFfc3Jjc2V0IiwiZGF0YV9zaXplcyIsImRhdGFfYmciLCJkYXRhX2JnX2hpZHBpIiwiZGF0YV9iZ19tdWx0aSIsImRhdGFfYmdfbXVsdGlfaGlkcGkiLCJkYXRhX3Bvc3RlciIsImNsYXNzX2FwcGxpZWQiLCJjbGFzc19sb2FkaW5nIiwiY2xhc3NfbG9hZGVkIiwiY2xhc3NfZXJyb3IiLCJ1bm9ic2VydmVfY29tcGxldGVkIiwidW5vYnNlcnZlX2VudGVyZWQiLCJjYW5jZWxfb25fZXhpdCIsImNhbGxiYWNrX2VudGVyIiwiY2FsbGJhY2tfZXhpdCIsImNhbGxiYWNrX2FwcGxpZWQiLCJjYWxsYmFja19sb2FkaW5nIiwiY2FsbGJhY2tfbG9hZGVkIiwiY2FsbGJhY2tfZXJyb3IiLCJjYWxsYmFja19maW5pc2giLCJjYWxsYmFja19jYW5jZWwiLCJ1c2VfbmF0aXZlIiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJpbnN0YW5jZSIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImdldEF0dHJpYnV0ZSIsInUiLCJzZXRBdHRyaWJ1dGUiLCJmIiwiXyIsImciLCJ2IiwiYiIsImNsYXNzTGlzdCIsImFkZCIsImNsYXNzTmFtZSIsImgiLCJyZW1vdmUiLCJyZXBsYWNlIiwiUmVnRXhwIiwibGxUZW1wSW1hZ2UiLCJFIiwiX29ic2VydmVyIiwidW5vYnNlcnZlIiwiSSIsImxvYWRpbmdDb3VudCIsIkEiLCJ0b0xvYWRDb3VudCIsIkwiLCJ0YWdOYW1lIiwicHVzaCIsInkiLCJ3IiwiayIsImxsT3JpZ2luYWxBdHRycyIsInoiLCJzcmMiLCJzcmNzZXQiLCJzaXplcyIsIk8iLCJDIiwiTSIsIk4iLCJwYXJlbnROb2RlIiwieCIsIlIiLCJJTUciLCJJRlJBTUUiLCJWSURFTyIsImxvYWQiLCJHIiwiVCIsIkQiLCJGIiwiViIsImoiLCJQIiwiUyIsImxsRXZMaXNucnMiLCJVIiwiJCIsInEiLCJIIiwiQiIsIkoiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb25jYXQiLCJLIiwiUSIsIlciLCJIVE1MSW1hZ2VFbGVtZW50IiwiWCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJZIiwiQXJyYXkiLCJaIiwicXVlcnlTZWxlY3RvckFsbCIsInR0IiwibnQiLCJmaWx0ZXIiLCJldCIsIl9zZXR0aW5ncyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ1cGRhdGUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImxvYWRBbGwiLCJkZXN0cm95IiwicmVzZXRTdGF0dXMiLCJsYXp5TG9hZE9wdGlvbnMiLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsInRhYkl0ZW0iLCJ0YWJDb250ZW50IiwianRlbSIsIm9uY2xpY2siLCJ0YWJOYW1lIiwiZXZlbnQiLCJzcmNFbGVtZW50IiwiaWQiLCJ0YWJOYW1lSWQiLCJpdGVtIiwidGVtcCIsImNoaWxkTm9kZXMiLCJwYXJlbnRFbGVtZW50IiwidGFiQ29udGVudE9wZW4iLCJjb250YWlucyIsImhvbWVwYWdlIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJjaGlsZENhcm91c2VsSXRlbSIsImNoaWxkQ2Fyb3VzZWxCdG4iLCJjYXJzb3VzZWxIb21lIiwiU2llbWEiLCJtb2JpbGVDaGVjayIsIm1vYmlsZUFuZFRhYmxldENoZWNrIiwibGFzdFZpZGVvQ2hlY2siLCJjYXJvdXNlbFZpZGVvSG9tZUl0ZW0iLCJjYXJvdXNlbFZpZGVvSG9tZURvdCIsImNhcm91c2VsVmlkZW9Ib21lRG90UGFnZSIsImNhcnNvdXNlbFZpZGVvSG9tZSIsImNvbnRlbnQiLCJkb3RWaWRlbyIsImdvVG8iLCJjYXJzb3VzZWxQb3N0SG9tZUJ0biIsImNhcm9zZWxQb3N0TGlzdCIsImNhcnNvdXNlbFBvc3RIb21lIiwiY2F0ZWdvcnlMaXN0IiwiY2F0ZWdvcnkiLCJhcGlVcmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0ZWdvcnlTaG93IiwidGh1bWJuYWlsIiwidXJsIiwidGl0bGUiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibG9hZG1vcmVCdG5XaWtpIiwibG9hZG1vcmVCdG5TaG93Iiwib2Zmc2V0TG9hZCIsImxvYWRtb3JlVXJsIiwiZGlzcGxheSIsImZyZWVBcHBVcmwiLCJmcmVlR2FtZVJhbmtpbmciLCJyYXRpbmdDb3VudCIsInJvdW5kIiwicmF0aW5nIiwicmF0aW5nTGVmdCIsImljb24iLCJzbHVnIiwiZ3Jvc3NpbmdBcHBVcmwiLCJncm9zc2luZ0dhbWVSYW5raW5nIiwiZG9tQm9keSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzY3JvbGxGdW5jdGlvbiIsInBhZ2VZT2Zmc2V0IiwiYmFja1RvVG9wQnV0dG9uIiwic2V0VGltZW91dCIsInNtb290aFNjcm9sbEJhY2tUb1RvcCIsInRhcmdldFBvc2l0aW9uIiwic3RhcnRQb3NpdGlvbiIsImRpc3RhbmNlIiwic3RhcnQiLCJzdGVwIiwidGltZXN0YW1wIiwicHJvZ3Jlc3MiLCJzY3JvbGxUbyIsImVhc2VJbk91dEN1YmljIiwib25zY3JvbGwiLCJzY3JvbGxGaXhlZFNpZGVCYXIiLCJzaWRlYmFyTGVmdHNjcm9sbCIsImdldEVsZW1lbnRCeUlkIiwic2lkZWJhclJpZ2h0c2Nyb2xsIiwic2lkZWJhck1lbnVSYW5raW5nc2Nyb2xsIiwic2lkZWJhck1lbnVMZWZ0Y3JvbGwiLCJzdGlja3lMZWZ0Iiwib2Zmc2V0VG9wIiwiY2hlY2siLCJzdWJzdHIiLCJ2ZW5kb3IiLCJvcGVyYSIsImlmcmFtZSIsImltZyIsInZpZGVvIiwiTHV1VmFvTG9jYWxTdG9yYWdlIiwibmFtZUFycmF5IiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJqc29uRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwiTGF5TG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlIiwiaWZyYW1lUmVzcG9zaXZlIiwiaW1nUmVzcG9zaXZlIiwidmlkZW9SZXNwb3NpdmUiLCJsYXp5TG9hZEluc3RhbmNlIiwiTGF6eUxvYWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsZ0VBQWdFLE1BQU0seUVBQXlFLE1BQU0sU0FB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QVNPLGVBQVQsR0FBMkI7QUFDdkIsT0FBSyxJQUFJelcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzJWLE1BQU0sQ0FBQ3BVLE1BQTNCLEVBQW1DdkIsQ0FBQyxFQUFwQyxFQUF3QztBQUNwQzJWLFVBQU0sQ0FBQzNWLENBQUQsQ0FBTixDQUFVd0ssU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsTUFBeEI7QUFDSDtBQUNKOztBQUVELFNBQVNpTSxZQUFULEdBQXdCO0FBQ3BCLE9BQUssSUFBSTFXLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc0VixHQUFHLENBQUNyVSxNQUF4QixFQUFnQ3ZCLENBQUMsRUFBakMsRUFBcUM7QUFDakM0VixPQUFHLENBQUM1VixDQUFELENBQUgsQ0FBT3dLLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLE1BQXJCO0FBQ0g7QUFDSjs7QUFFRCxTQUFTa00sY0FBVCxHQUEwQjtBQUN0QixPQUFLLElBQUkzVyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNlYsS0FBSyxDQUFDdFUsTUFBMUIsRUFBa0N2QixDQUFDLEVBQW5DLEVBQXVDO0FBQ25DNlYsU0FBSyxDQUFDN1YsQ0FBRCxDQUFMLENBQVN3SyxTQUFULENBQW1CQyxHQUFuQixDQUF1QixNQUF2QjtBQUNIO0FBQ0o7O0FBQ0RrTCxNQUFNLEdBQUdjLGVBQWUsRUFBbEIsR0FBdUIsRUFBN0I7QUFDQWIsR0FBRyxHQUFHYyxZQUFZLEVBQWYsR0FBb0IsRUFBdkI7QUFDQWIsS0FBSyxHQUFHYyxjQUFjLEVBQWpCLEdBQXNCLEVBQTNCO0FBQ0EsSUFBSUMsZ0JBQWdCLEdBQUcsSUFBSUMsdURBQUosQ0FBYTtBQUFFOU8sbUJBQWlCLEVBQUU7QUFBckIsQ0FBYixDQUF2QjtBQUNBLHdCIiwiZmlsZSI6InJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9yb290LmpzXCIpO1xuIiwiLyohXG4gKiBzaGFyZW9uIHYxLjQuMSBieSBOaWtpdGEgS2FyYW1vdlxuICogaHR0cHM6Ly9zaGFyZW9uLmpzLm9yZ1xuICovXG5cbnZhciB1cmxCdWlsZGVyTWFwID0ge2ZhY2Vib29rOihkKSA9PiBgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9JHtkLnVybH1gLGxpbmtlZGluOihkKSA9PiBgaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWUmdXJsPSR7ZC51cmx9JnRpdGxlPSR7ZC50aXRsZX1gLG1lc3NlbmdlcjooZCkgPT4gYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9kaWFsb2cvc2VuZD9hcHBfaWQ9MzYxOTAyNDU3ODE2NzYxNyZsaW5rPSR7ZC51cmx9JnJlZGlyZWN0X3VyaT0ke2QudXJsfWAsb2Rub2tsYXNzbmlraTooZCkgPT4gYGh0dHBzOi8vY29ubmVjdC5vay5ydS9vZmZlcj91cmw9JHtkLnVybH0mdGl0bGU9JHtkLnRpdGxlfSR7ZC5tZWRpYSA/IGAmaW1hZ2VVcmw9JHtkLm1lZGlhfWAgOiAnJ31gLHBpbnRlcmVzdDooZCkgPT4gYGh0dHBzOi8vcGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8/dXJsPSR7ZC51cmx9JmRlc2NyaXB0aW9uPSR7ZC50aXRsZX0ke2QubWVkaWEgPyBgJm1lZGlhPSR7ZC5tZWRpYX1gIDogJyd9YCxwb2NrZXQ6KGQpID0+IGBodHRwczovL2dldHBvY2tldC5jb20vZWRpdC5waHA/dXJsPSR7ZC51cmx9YCxyZWRkaXQ6KGQpID0+IGBodHRwczovL3d3dy5yZWRkaXQuY29tL3N1Ym1pdD90aXRsZT0ke2QudGl0bGV9JnVybD0ke2QudXJsfWAsdGVsZWdyYW06KGQpID0+IGBodHRwczovL3RlbGVncmFtLm1lL3NoYXJlL3VybD91cmw9JHtkLnVybH0ke2QudGV4dCA/IGAmdGV4dD0ke2QudGV4dH1gIDogJyd9YCx0d2l0dGVyOihkKSA9PiBgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dXJsPSR7ZC51cmx9JnRleHQ9JHtkLnRpdGxlfSR7ZC52aWEgPyBgJnZpYT0ke2QudmlhfWAgOiAnJ31gLHZpYmVyOihkKSA9PiBgdmliZXI6Ly9mb3J3YXJkP3RleHQ9JHtkLnRpdGxlfSUwRCUwQSR7ZC51cmx9JHtkLnRleHQgPyBgJTBEJTBBJTBEJTBBJHtkLnRleHR9YCA6ICcnfWAsdmtvbnRha3RlOihkKSA9PiBgaHR0cHM6Ly92ay5jb20vc2hhcmUucGhwP3VybD0ke2QudXJsfSZ0aXRsZT0ke2QudGl0bGV9JHtkLm1lZGlhID8gYCZpbWFnZT0ke2QubWVkaWF9YCA6ICcnfWAsd2hhdHNhcHA6KGQpID0+IGB3aGF0c2FwcDovL3NlbmQ/dGV4dD0ke2QudGl0bGV9JTBEJTBBJHtkLnVybH0ke2QudGV4dCA/IGAlMEQlMEElMEQlMEEke2QudGV4dH1gIDogJyd9YH07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxuXG5jb25zdCBpbml0aWFsaXplU2hhcmVvbiA9ICgpID0+IHtcbiAgY29uc3Qgc2hhcmVvbkNvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaGFyZW9uJyk7XG5cbiAgLy8gaXRlcmF0ZSBvdmVyIDxkaXYgY2xhc3M9XCJzaGFyZW9uXCI+XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hhcmVvbkNvbnRhaW5lcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAvKiogQHR5cGUgRWxlbWVudCAqL1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHNoYXJlb25Db250YWluZXJzW2ldO1xuXG4gICAgLy8gaXRlcmF0ZSBvdmVyIGNoaWxkcmVuIG9mIDxkaXYgY2xhc3M9XCJzaGFyZW9uXCI+XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIC8qKiBAdHlwZSBFbGVtZW50ICovXG4gICAgICBjb25zdCBjaGlsZCA9IGNvbnRhaW5lci5jaGlsZHJlbltqXTtcblxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTGlzdExlbmd0aCA9IGNoaWxkLmNsYXNzTGlzdC5sZW5ndGg7XG5cbiAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIGNsYXNzZXMgb2YgdGhlIGNoaWxkIGVsZW1lbnRcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBjbGFzc0xpc3RMZW5ndGg7IGsgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGNscyA9IGNoaWxkLmNsYXNzTGlzdC5pdGVtKGspO1xuXG4gICAgICAgICAgLy8gaWYgaXQncyBvbmUgb2YgdGhlIG5ldHdvcmtzXG4gICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh1cmxCdWlsZGVyTWFwLCBjbHMpKSB7XG4gICAgICAgICAgICBjb25zdCBwcmVzZXQgPSB7XG4gICAgICAgICAgICAgIHVybDogZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIGNoaWxkLmRhdGFzZXQudXJsXG4gICAgICAgICAgICAgICAgfHwgY29udGFpbmVyLmRhdGFzZXQudXJsXG4gICAgICAgICAgICAgICAgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHRpdGxlOiBlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgY2hpbGQuZGF0YXNldC50aXRsZVxuICAgICAgICAgICAgICAgIHx8IGNvbnRhaW5lci5kYXRhc2V0LnRpdGxlXG4gICAgICAgICAgICAgICAgfHwgZG9jdW1lbnQudGl0bGUsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG1lZGlhOiBlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgY2hpbGQuZGF0YXNldC5tZWRpYVxuICAgICAgICAgICAgICAgIHx8IGNvbnRhaW5lci5kYXRhc2V0Lm1lZGlhXG4gICAgICAgICAgICAgICAgfHwgJycsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHRleHQ6IGVuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBjaGlsZC5kYXRhc2V0LnRleHRcbiAgICAgICAgICAgICAgICB8fCBjb250YWluZXIuZGF0YXNldC50ZXh0XG4gICAgICAgICAgICAgICAgfHwgJycsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHZpYTogZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIGNoaWxkLmRhdGFzZXQudmlhXG4gICAgICAgICAgICAgICAgfHwgY29udGFpbmVyLmRhdGFzZXQudmlhXG4gICAgICAgICAgICAgICAgfHwgJycsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsQnVpbGRlck1hcFtjbHNdKHByZXNldCk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhJykge1xuICAgICAgICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwpO1xuICAgICAgICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub29wZW5lciBub3JlZmVycmVyJyk7XG4gICAgICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJywgJ25vb3BlbmVyLG5vcmVmZXJyZXInKS5vcGVuZXIgPSBudWxsO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7IC8vIG9uY2UgYSBuZXR3b3JrIGlzIGRldGVjdGVkIHdlIGRvbid0IHdhbnQgdG8gY2hlY2sgZnVydGhlclxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgaW5pdGlhbGl6ZVNoYXJlb24oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVTaGFyZW9uO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJTaWVtYVwiLFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuU2llbWE9dCgpOmUuU2llbWE9dCgpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChyKXtpZihpW3JdKXJldHVybiBpW3JdLmV4cG9ydHM7dmFyIG49aVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsdCksbi5sPSEwLG4uZXhwb3J0c312YXIgaT17fTtyZXR1cm4gdC5tPWUsdC5jPWksdC5kPWZ1bmN0aW9uKGUsaSxyKXt0Lm8oZSxpKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaSx7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0OnJ9KX0sdC5uPWZ1bmN0aW9uKGUpe3ZhciBpPWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiB0LmQoaSxcImFcIixpKSxpfSx0Lm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHQucD1cIlwiLHQodC5zPTApfShbZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciByPXRbaV07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxpLHIpe3JldHVybiBpJiZlKHQucHJvdG90eXBlLGkpLHImJmUodCxyKSx0fX0oKSxsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXt2YXIgaT10aGlzO2lmKHIodGhpcyxlKSx0aGlzLmNvbmZpZz1lLm1lcmdlU2V0dGluZ3ModCksdGhpcy5zZWxlY3Rvcj1cInN0cmluZ1wiPT10eXBlb2YgdGhpcy5jb25maWcuc2VsZWN0b3I/ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbmZpZy5zZWxlY3Rvcik6dGhpcy5jb25maWcuc2VsZWN0b3IsbnVsbD09PXRoaXMuc2VsZWN0b3IpdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIHdyb25nIHdpdGggeW91ciBzZWxlY3RvciDwn5itXCIpO3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuaW5uZXJFbGVtZW50cz1bXS5zbGljZS5jYWxsKHRoaXMuc2VsZWN0b3IuY2hpbGRyZW4pLHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jb25maWcuc3RhcnRJbmRleCV0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoOk1hdGgubWF4KDAsTWF0aC5taW4odGhpcy5jb25maWcuc3RhcnRJbmRleCx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSkpLHRoaXMudHJhbnNmb3JtUHJvcGVydHk9ZS53ZWJraXRPck5vdCgpLFtcInJlc2l6ZUhhbmRsZXJcIixcInRvdWNoc3RhcnRIYW5kbGVyXCIsXCJ0b3VjaGVuZEhhbmRsZXJcIixcInRvdWNobW92ZUhhbmRsZXJcIixcIm1vdXNlZG93bkhhbmRsZXJcIixcIm1vdXNldXBIYW5kbGVyXCIsXCJtb3VzZWxlYXZlSGFuZGxlclwiLFwibW91c2Vtb3ZlSGFuZGxlclwiLFwiY2xpY2tIYW5kbGVyXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7aVtlXT1pW2VdLmJpbmQoaSl9KSx0aGlzLmluaXQoKX1yZXR1cm4gcyhlLFt7a2V5OlwiYXR0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5jb25maWcuZHJhZ2dhYmxlJiYodGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLmRyYWc9e3N0YXJ0WDowLGVuZFg6MCxzdGFydFk6MCxsZXRJdEdvOm51bGwscHJldmVudENsaWNrOiExfSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy50b3VjaHN0YXJ0SGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLnRvdWNoZW5kSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy50b3VjaG1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm1vdXNlZG93bkhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm1vdXNldXBIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZWxlYXZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3VzZW1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xpY2tIYW5kbGVyKSl9fSx7a2V5OlwiZGV0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMudG91Y2hzdGFydEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy50b3VjaGVuZEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMudG91Y2htb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5tb3VzZWRvd25IYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5tb3VzZXVwSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMubW91c2VsZWF2ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMubW91c2Vtb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmNsaWNrSGFuZGxlcil9fSx7a2V5OlwiaW5pdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5hdHRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsdGhpcy5zZWxlY3Rvci5zdHlsZS5kaXJlY3Rpb249dGhpcy5jb25maWcucnRsP1wicnRsXCI6XCJsdHJcIix0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSx0aGlzLmNvbmZpZy5vbkluaXQuY2FsbCh0aGlzKX19LHtrZXk6XCJidWlsZFNsaWRlckZyYW1lXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlLHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlOnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7dGhpcy5zbGlkZXJGcmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2lkdGg9ZSp0K1wicHhcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmNvbmZpZy5kcmFnZ2FibGUmJih0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aWYodGhpcy5jb25maWcubG9vcClmb3IodmFyIHI9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2U7cjx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3IrKyl7dmFyIG49dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbcl0uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChuKX1mb3IodmFyIHM9MDtzPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cysrKXt2YXIgbD10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tzXSk7aS5hcHBlbmRDaGlsZChsKX1pZih0aGlzLmNvbmZpZy5sb29wKWZvcih2YXIgbz0wO288dGhpcy5wZXJQYWdlO28rKyl7dmFyIGE9dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbb10uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChhKX10aGlzLnNsaWRlckZyYW1lLmFwcGVuZENoaWxkKGkpLHRoaXMuc2VsZWN0b3IuaW5uZXJIVE1MPVwiXCIsdGhpcy5zZWxlY3Rvci5hcHBlbmRDaGlsZCh0aGlzLnNsaWRlckZyYW1lKSx0aGlzLnNsaWRlVG9DdXJyZW50KCl9fSx7a2V5OlwiYnVpbGRTbGlkZXJGcmFtZUl0ZW1cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiB0LnN0eWxlLmNzc0Zsb2F0PXRoaXMuY29uZmlnLnJ0bD9cInJpZ2h0XCI6XCJsZWZ0XCIsdC5zdHlsZS5mbG9hdD10aGlzLmNvbmZpZy5ydGw/XCJyaWdodFwiOlwibGVmdFwiLHQuc3R5bGUud2lkdGg9KHRoaXMuY29uZmlnLmxvb3A/MTAwLyh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlKToxMDAvdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCkrXCIlXCIsdC5hcHBlbmRDaGlsZChlKSx0fX0se2tleTpcInJlc29sdmVTbGlkZXNOdW1iZXJcIix2YWx1ZTpmdW5jdGlvbigpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0aGlzLmNvbmZpZy5wZXJQYWdlKXRoaXMucGVyUGFnZT10aGlzLmNvbmZpZy5wZXJQYWdlO2Vsc2UgaWYoXCJvYmplY3RcIj09PW4odGhpcy5jb25maWcucGVyUGFnZSkpe3RoaXMucGVyUGFnZT0xO2Zvcih2YXIgZSBpbiB0aGlzLmNvbmZpZy5wZXJQYWdlKXdpbmRvdy5pbm5lcldpZHRoPj1lJiYodGhpcy5wZXJQYWdlPXRoaXMuY29uZmlnLnBlclBhZ2VbZV0pfX19LHtrZXk6XCJwcmV2XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MSx0PWFyZ3VtZW50c1sxXTtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO2lmKHRoaXMuY29uZmlnLmxvb3Ape2lmKHRoaXMuY3VycmVudFNsaWRlLWU8MCl7dGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO3ZhciByPXRoaXMuY3VycmVudFNsaWRlK3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgsbj10aGlzLnBlclBhZ2Uscz1yK24sbD0odGhpcy5jb25maWcucnRsPzE6LTEpKnMqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLG89dGhpcy5jb25maWcuZHJhZ2dhYmxlP3RoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFg6MDt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKGwrbykrXCJweCwgMCwgMClcIix0aGlzLmN1cnJlbnRTbGlkZT1yLWV9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmN1cnJlbnRTbGlkZS1lfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9TWF0aC5tYXgodGhpcy5jdXJyZW50U2xpZGUtZSwwKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwibmV4dFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjEsdD1hcmd1bWVudHNbMV07aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTtpZih0aGlzLmNvbmZpZy5sb29wKXtpZih0aGlzLmN1cnJlbnRTbGlkZStlPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKXt0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCk7dmFyIHI9dGhpcy5jdXJyZW50U2xpZGUtdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCxuPXRoaXMucGVyUGFnZSxzPXIrbixsPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqcyoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSksbz10aGlzLmNvbmZpZy5kcmFnZ2FibGU/dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WDowO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisobCtvKStcInB4LCAwLCAwKVwiLHRoaXMuY3VycmVudFNsaWRlPXIrZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY3VycmVudFNsaWRlK2V9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT1NYXRoLm1pbih0aGlzLmN1cnJlbnRTbGlkZStlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwiZGlzYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nfX0se2tleTpcImVuYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCBcIit0aGlzLmNvbmZpZy5kdXJhdGlvbitcIm1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgXCIrdGhpcy5jb25maWcuZHVyYXRpb24rXCJtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmd9fSx7a2V5OlwiZ29Ub1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTt0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmNvbmZpZy5sb29wP2UldGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDpNYXRoLm1pbihNYXRoLm1heChlLDApLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKSxpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJzbGlkZVRvQ3VycmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsaT10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxyPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqaSoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSk7ZT9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LmVuYWJsZVRyYW5zaXRpb24oKSx0LnNsaWRlckZyYW1lLnN0eWxlW3QudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifSl9KTp0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifX0se2tleTpcInVwZGF0ZUFmdGVyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9KHRoaXMuY29uZmlnLnJ0bD8tMToxKSoodGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCksdD1NYXRoLmFicyhlKSxpPXRoaXMuY29uZmlnLm11bHRpcGxlRHJhZz9NYXRoLmNlaWwodC8odGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSkpOjEscj1lPjAmJnRoaXMuY3VycmVudFNsaWRlLWk8MCxuPWU8MCYmdGhpcy5jdXJyZW50U2xpZGUraT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZTtlPjAmJnQ+dGhpcy5jb25maWcudGhyZXNob2xkJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPnRoaXMucGVyUGFnZT90aGlzLnByZXYoaSk6ZTwwJiZ0PnRoaXMuY29uZmlnLnRocmVzaG9sZCYmdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aD50aGlzLnBlclBhZ2UmJnRoaXMubmV4dChpKSx0aGlzLnNsaWRlVG9DdXJyZW50KHJ8fG4pfX0se2tleTpcInJlc2l6ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoJiYodGhpcy5jdXJyZW50U2xpZGU9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlPzA6dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpfX0se2tleTpcImNsZWFyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5kcmFnPXtzdGFydFg6MCxlbmRYOjAsc3RhcnRZOjAsbGV0SXRHbzpudWxsLHByZXZlbnRDbGljazp0aGlzLmRyYWcucHJldmVudENsaWNrfX19LHtrZXk6XCJ0b3VjaHN0YXJ0SGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpey0xIT09W1wiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiXS5pbmRleE9mKGUudGFyZ2V0Lm5vZGVOYW1lKXx8KGUuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMCx0aGlzLmRyYWcuc3RhcnRYPWUudG91Y2hlc1swXS5wYWdlWCx0aGlzLmRyYWcuc3RhcnRZPWUudG91Y2hlc1swXS5wYWdlWSl9fSx7a2V5OlwidG91Y2hlbmRIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuZHJhZy5lbmRYJiZ0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCl9fSx7a2V5OlwidG91Y2htb3ZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUuc3RvcFByb3BhZ2F0aW9uKCksbnVsbD09PXRoaXMuZHJhZy5sZXRJdEdvJiYodGhpcy5kcmFnLmxldEl0R289TWF0aC5hYnModGhpcy5kcmFnLnN0YXJ0WS1lLnRvdWNoZXNbMF0ucGFnZVkpPE1hdGguYWJzKHRoaXMuZHJhZy5zdGFydFgtZS50b3VjaGVzWzBdLnBhZ2VYKSksdGhpcy5wb2ludGVyRG93biYmdGhpcy5kcmFnLmxldEl0R28pe2UucHJldmVudERlZmF1bHQoKSx0aGlzLmRyYWcuZW5kWD1lLnRvdWNoZXNbMF0ucGFnZVgsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlZG93bkhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXstMSE9PVtcIlRFWFRBUkVBXCIsXCJPUFRJT05cIixcIklOUFVUXCIsXCJTRUxFQ1RcIl0uaW5kZXhPZihlLnRhcmdldC5ub2RlTmFtZSl8fChlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSEwLHRoaXMuZHJhZy5zdGFydFg9ZS5wYWdlWCl9fSx7a2V5OlwibW91c2V1cEhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmRyYWcuZW5kWCYmdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpfX0se2tleTpcIm1vdXNlbW92ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlLnByZXZlbnREZWZhdWx0KCksdGhpcy5wb2ludGVyRG93bil7XCJBXCI9PT1lLnRhcmdldC5ub2RlTmFtZSYmKHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITApLHRoaXMuZHJhZy5lbmRYPWUucGFnZVgsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJiaW5nXCIsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlbGVhdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5wb2ludGVyRG93biYmKHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmRyYWcuZW5kWD1lLnBhZ2VYLHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITEsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpKX19LHtrZXk6XCJjbGlja0hhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmRyYWcucHJldmVudENsaWNrJiZlLnByZXZlbnREZWZhdWx0KCksdGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMX19LHtrZXk6XCJyZW1vdmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKGU8MHx8ZT49dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJJdGVtIHRvIHJlbW92ZSBkb2Vzbid0IGV4aXN0IPCfmK1cIik7dmFyIGk9ZTx0aGlzLmN1cnJlbnRTbGlkZSxyPXRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZS0xPT09ZTsoaXx8cikmJnRoaXMuY3VycmVudFNsaWRlLS0sdGhpcy5pbm5lckVsZW1lbnRzLnNwbGljZShlLDEpLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJpbnNlcnRcIix2YWx1ZTpmdW5jdGlvbihlLHQsaSl7aWYodDwwfHx0PnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSl0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaW5zZXQgaXQgYXQgdGhpcyBpbmRleCDwn5itXCIpO2lmKC0xIT09dGhpcy5pbm5lckVsZW1lbnRzLmluZGV4T2YoZSkpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNhbWUgaXRlbSBpbiBhIGNhcm91c2VsPyBSZWFsbHk/IE5vcGUg8J+YrVwiKTt2YXIgcj10PD10aGlzLmN1cnJlbnRTbGlkZT4wJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3RoaXMuY3VycmVudFNsaWRlPXI/dGhpcy5jdXJyZW50U2xpZGUrMTp0aGlzLmN1cnJlbnRTbGlkZSx0aGlzLmlubmVyRWxlbWVudHMuc3BsaWNlKHQsMCxlKSx0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSxpJiZpLmNhbGwodGhpcyl9fSx7a2V5OlwicHJlcGVuZFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5pbnNlcnQoZSwwKSx0JiZ0LmNhbGwodGhpcyl9fSx7a2V5OlwiYXBwZW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmluc2VydChlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImRlc3Ryb3lcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF0sdD1hcmd1bWVudHNbMV07aWYodGhpcy5kZXRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cImF1dG9cIixlKXtmb3IodmFyIGk9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHI9MDtyPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cisrKWkuYXBwZW5kQ2hpbGQodGhpcy5pbm5lckVsZW1lbnRzW3JdKTt0aGlzLnNlbGVjdG9yLmlubmVySFRNTD1cIlwiLHRoaXMuc2VsZWN0b3IuYXBwZW5kQ2hpbGQoaSksdGhpcy5zZWxlY3Rvci5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKX10JiZ0LmNhbGwodGhpcyl9fV0sW3trZXk6XCJtZXJnZVNldHRpbmdzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9e3NlbGVjdG9yOlwiLnNpZW1hXCIsZHVyYXRpb246MjAwLGVhc2luZzpcImVhc2Utb3V0XCIscGVyUGFnZToxLHN0YXJ0SW5kZXg6MCxkcmFnZ2FibGU6ITAsbXVsdGlwbGVEcmFnOiEwLHRocmVzaG9sZDoyMCxsb29wOiExLHJ0bDohMSxvbkluaXQ6ZnVuY3Rpb24oKXt9LG9uQ2hhbmdlOmZ1bmN0aW9uKCl7fX0saT1lO2Zvcih2YXIgciBpbiBpKXRbcl09aVtyXTtyZXR1cm4gdH19LHtrZXk6XCJ3ZWJraXRPck5vdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0/XCJ0cmFuc2Zvcm1cIjpcIldlYmtpdFRyYW5zZm9ybVwifX1dKSxlfSgpO3QuZGVmYXVsdD1sLGUuZXhwb3J0cz10LmRlZmF1bHR9XSl9KTsiLCIhZnVuY3Rpb24odCxuKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1uKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShuKToodD10fHxzZWxmKS5MYXp5TG9hZD1uKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCgpe3JldHVybih0PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspe3ZhciBlPWFyZ3VtZW50c1tuXTtmb3IodmFyIGkgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxpKSYmKHRbaV09ZVtpXSl9cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyxlPW4mJiEoXCJvbnNjcm9sbFwiaW4gd2luZG93KXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG5hdmlnYXRvciYmLyhnbGV8aW5nfHJvKWJvdHxjcmF3bHxzcGlkZXIvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGk9biYmXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiaW4gd2luZG93LGE9biYmXCJjbGFzc0xpc3RcImluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpLG89biYmd2luZG93LmRldmljZVBpeGVsUmF0aW8+MSxyPXtlbGVtZW50c19zZWxlY3RvcjpcIklNR1wiLGNvbnRhaW5lcjplfHxuP2RvY3VtZW50Om51bGwsdGhyZXNob2xkOjMwMCx0aHJlc2hvbGRzOm51bGwsZGF0YV9zcmM6XCJzcmNcIixkYXRhX3NyY3NldDpcInNyY3NldFwiLGRhdGFfc2l6ZXM6XCJzaXplc1wiLGRhdGFfYmc6XCJiZ1wiLGRhdGFfYmdfaGlkcGk6XCJiZy1oaWRwaVwiLGRhdGFfYmdfbXVsdGk6XCJiZy1tdWx0aVwiLGRhdGFfYmdfbXVsdGlfaGlkcGk6XCJiZy1tdWx0aS1oaWRwaVwiLGRhdGFfcG9zdGVyOlwicG9zdGVyXCIsY2xhc3NfYXBwbGllZDpcImFwcGxpZWRcIixjbGFzc19sb2FkaW5nOlwibG9hZGluZ1wiLGNsYXNzX2xvYWRlZDpcImxvYWRlZFwiLGNsYXNzX2Vycm9yOlwiZXJyb3JcIix1bm9ic2VydmVfY29tcGxldGVkOiEwLHVub2JzZXJ2ZV9lbnRlcmVkOiExLGNhbmNlbF9vbl9leGl0OiExLGNhbGxiYWNrX2VudGVyOm51bGwsY2FsbGJhY2tfZXhpdDpudWxsLGNhbGxiYWNrX2FwcGxpZWQ6bnVsbCxjYWxsYmFja19sb2FkaW5nOm51bGwsY2FsbGJhY2tfbG9hZGVkOm51bGwsY2FsbGJhY2tfZXJyb3I6bnVsbCxjYWxsYmFja19maW5pc2g6bnVsbCxjYWxsYmFja19jYW5jZWw6bnVsbCx1c2VfbmF0aXZlOiExfSxjPWZ1bmN0aW9uKG4pe3JldHVybiB0KHt9LHIsbil9LGw9ZnVuY3Rpb24odCxuKXt2YXIgZSxpPW5ldyB0KG4pO3RyeXtlPW5ldyBDdXN0b21FdmVudChcIkxhenlMb2FkOjpJbml0aWFsaXplZFwiLHtkZXRhaWw6e2luc3RhbmNlOml9fSl9Y2F0Y2godCl7KGU9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKSkuaW5pdEN1c3RvbUV2ZW50KFwiTGF6eUxvYWQ6OkluaXRpYWxpemVkXCIsITEsITEse2luc3RhbmNlOml9KX13aW5kb3cuZGlzcGF0Y2hFdmVudChlKX0scz1mdW5jdGlvbih0LG4pe3JldHVybiB0LmdldEF0dHJpYnV0ZShcImRhdGEtXCIrbil9LHU9ZnVuY3Rpb24odCxuLGUpe3ZhciBpPVwiZGF0YS1cIituO251bGwhPT1lP3Quc2V0QXR0cmlidXRlKGksZSk6dC5yZW1vdmVBdHRyaWJ1dGUoaSl9LGQ9ZnVuY3Rpb24odCl7cmV0dXJuIHModCxcImxsLXN0YXR1c1wiKX0sZj1mdW5jdGlvbih0LG4pe3JldHVybiB1KHQsXCJsbC1zdGF0dXNcIixuKX0sXz1mdW5jdGlvbih0KXtyZXR1cm4gZih0LG51bGwpfSxnPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT09ZCh0KX0sdj1mdW5jdGlvbih0KXtyZXR1cm5cIm5hdGl2ZVwiPT09ZCh0KX0sYj1mdW5jdGlvbih0LG4sZSxpKXt0JiYodm9pZCAwPT09aT92b2lkIDA9PT1lP3Qobik6dChuLGUpOnQobixlLGkpKX0scD1mdW5jdGlvbih0LG4pe2E/dC5jbGFzc0xpc3QuYWRkKG4pOnQuY2xhc3NOYW1lKz0odC5jbGFzc05hbWU/XCIgXCI6XCJcIikrbn0saD1mdW5jdGlvbih0LG4pe2E/dC5jbGFzc0xpc3QucmVtb3ZlKG4pOnQuY2xhc3NOYW1lPXQuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxzKylcIituK1wiKFxcXFxzK3wkKVwiKSxcIiBcIikucmVwbGFjZSgvXlxccysvLFwiXCIpLnJlcGxhY2UoL1xccyskLyxcIlwiKX0sbT1mdW5jdGlvbih0KXtyZXR1cm4gdC5sbFRlbXBJbWFnZX0sRT1mdW5jdGlvbih0LG4pe2lmKG4pe3ZhciBlPW4uX29ic2VydmVyO2UmJmUudW5vYnNlcnZlKHQpfX0sST1mdW5jdGlvbih0LG4pe3QmJih0LmxvYWRpbmdDb3VudCs9bil9LEE9ZnVuY3Rpb24odCxuKXt0JiYodC50b0xvYWRDb3VudD1uKX0sTD1mdW5jdGlvbih0KXtmb3IodmFyIG4sZT1bXSxpPTA7bj10LmNoaWxkcmVuW2ldO2krPTEpXCJTT1VSQ0VcIj09PW4udGFnTmFtZSYmZS5wdXNoKG4pO3JldHVybiBlfSx5PWZ1bmN0aW9uKHQsbixlKXtlJiZ0LnNldEF0dHJpYnV0ZShuLGUpfSx3PWZ1bmN0aW9uKHQsbil7dC5yZW1vdmVBdHRyaWJ1dGUobil9LGs9ZnVuY3Rpb24odCl7cmV0dXJuISF0LmxsT3JpZ2luYWxBdHRyc30sej1mdW5jdGlvbih0KXtpZighayh0KSl7dmFyIG49e307bi5zcmM9dC5nZXRBdHRyaWJ1dGUoXCJzcmNcIiksbi5zcmNzZXQ9dC5nZXRBdHRyaWJ1dGUoXCJzcmNzZXRcIiksbi5zaXplcz10LmdldEF0dHJpYnV0ZShcInNpemVzXCIpLHQubGxPcmlnaW5hbEF0dHJzPW59fSxPPWZ1bmN0aW9uKHQpe2lmKGsodCkpe3ZhciBuPXQubGxPcmlnaW5hbEF0dHJzO3kodCxcInNyY1wiLG4uc3JjKSx5KHQsXCJzcmNzZXRcIixuLnNyY3NldCkseSh0LFwic2l6ZXNcIixuLnNpemVzKX19LEM9ZnVuY3Rpb24odCxuKXt5KHQsXCJzaXplc1wiLHModCxuLmRhdGFfc2l6ZXMpKSx5KHQsXCJzcmNzZXRcIixzKHQsbi5kYXRhX3NyY3NldCkpLHkodCxcInNyY1wiLHModCxuLmRhdGFfc3JjKSl9LE09ZnVuY3Rpb24odCl7dyh0LFwic3JjXCIpLHcodCxcInNyY3NldFwiKSx3KHQsXCJzaXplc1wiKX0sTj1mdW5jdGlvbih0LG4pe3ZhciBlPXQucGFyZW50Tm9kZTtlJiZcIlBJQ1RVUkVcIj09PWUudGFnTmFtZSYmTChlKS5mb3JFYWNoKG4pfSx4PWZ1bmN0aW9uKHQsbil7TCh0KS5mb3JFYWNoKG4pfSxSPXtJTUc6ZnVuY3Rpb24odCxuKXtOKHQsKGZ1bmN0aW9uKHQpe3oodCksQyh0LG4pfSkpLHoodCksQyh0LG4pfSxJRlJBTUU6ZnVuY3Rpb24odCxuKXt5KHQsXCJzcmNcIixzKHQsbi5kYXRhX3NyYykpfSxWSURFTzpmdW5jdGlvbih0LG4pe3godCwoZnVuY3Rpb24odCl7eSh0LFwic3JjXCIscyh0LG4uZGF0YV9zcmMpKX0pKSx5KHQsXCJwb3N0ZXJcIixzKHQsbi5kYXRhX3Bvc3RlcikpLHkodCxcInNyY1wiLHModCxuLmRhdGFfc3JjKSksdC5sb2FkKCl9fSxHPWZ1bmN0aW9uKHQsbil7dmFyIGU9Ult0LnRhZ05hbWVdO2UmJmUodCxuKX0sVD1mdW5jdGlvbih0LG4sZSl7SShlLDEpLHAodCxuLmNsYXNzX2xvYWRpbmcpLGYodCxcImxvYWRpbmdcIiksYihuLmNhbGxiYWNrX2xvYWRpbmcsdCxlKX0sRD17SU1HOmZ1bmN0aW9uKHQsbil7dSh0LG4uZGF0YV9zcmMsbnVsbCksdSh0LG4uZGF0YV9zcmNzZXQsbnVsbCksdSh0LG4uZGF0YV9zaXplcyxudWxsKSxOKHQsKGZ1bmN0aW9uKHQpe3UodCxuLmRhdGFfc3Jjc2V0LG51bGwpLHUodCxuLmRhdGFfc2l6ZXMsbnVsbCl9KSl9LElGUkFNRTpmdW5jdGlvbih0LG4pe3UodCxuLmRhdGFfc3JjLG51bGwpfSxWSURFTzpmdW5jdGlvbih0LG4pe3UodCxuLmRhdGFfc3JjLG51bGwpLHUodCxuLmRhdGFfcG9zdGVyLG51bGwpLHgodCwoZnVuY3Rpb24odCl7dSh0LG4uZGF0YV9zcmMsbnVsbCl9KSl9fSxGPWZ1bmN0aW9uKHQsbil7dSh0LG4uZGF0YV9iZ19tdWx0aSxudWxsKSx1KHQsbi5kYXRhX2JnX211bHRpX2hpZHBpLG51bGwpfSxWPWZ1bmN0aW9uKHQsbil7dmFyIGU9RFt0LnRhZ05hbWVdO2U/ZSh0LG4pOmZ1bmN0aW9uKHQsbil7dSh0LG4uZGF0YV9iZyxudWxsKSx1KHQsbi5kYXRhX2JnX2hpZHBpLG51bGwpfSh0LG4pfSxqPVtcIklNR1wiLFwiSUZSQU1FXCIsXCJWSURFT1wiXSxQPWZ1bmN0aW9uKHQsbil7IW58fGZ1bmN0aW9uKHQpe3JldHVybiB0LmxvYWRpbmdDb3VudD4wfShuKXx8ZnVuY3Rpb24odCl7cmV0dXJuIHQudG9Mb2FkQ291bnQ+MH0obil8fGIodC5jYWxsYmFja19maW5pc2gsbil9LFM9ZnVuY3Rpb24odCxuLGUpe3QuYWRkRXZlbnRMaXN0ZW5lcihuLGUpLHQubGxFdkxpc25yc1tuXT1lfSxVPWZ1bmN0aW9uKHQsbixlKXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIobixlKX0sJD1mdW5jdGlvbih0KXtyZXR1cm4hIXQubGxFdkxpc25yc30scT1mdW5jdGlvbih0KXtpZigkKHQpKXt2YXIgbj10LmxsRXZMaXNucnM7Zm9yKHZhciBlIGluIG4pe3ZhciBpPW5bZV07VSh0LGUsaSl9ZGVsZXRlIHQubGxFdkxpc25yc319LEg9ZnVuY3Rpb24odCxuLGUpeyFmdW5jdGlvbih0KXtkZWxldGUgdC5sbFRlbXBJbWFnZX0odCksSShlLC0xKSxmdW5jdGlvbih0KXt0JiYodC50b0xvYWRDb3VudC09MSl9KGUpLGgodCxuLmNsYXNzX2xvYWRpbmcpLG4udW5vYnNlcnZlX2NvbXBsZXRlZCYmRSh0LGUpfSxCPWZ1bmN0aW9uKHQsbixlKXt2YXIgaT1tKHQpfHx0OyQoaSl8fGZ1bmN0aW9uKHQsbixlKXskKHQpfHwodC5sbEV2TGlzbnJzPXt9KTt2YXIgaT1cIlZJREVPXCI9PT10LnRhZ05hbWU/XCJsb2FkZWRkYXRhXCI6XCJsb2FkXCI7Uyh0LGksbiksUyh0LFwiZXJyb3JcIixlKX0oaSwoZnVuY3Rpb24oYSl7IWZ1bmN0aW9uKHQsbixlLGkpe3ZhciBhPXYobik7SChuLGUsaSkscChuLGUuY2xhc3NfbG9hZGVkKSxmKG4sXCJsb2FkZWRcIiksVihuLGUpLGIoZS5jYWxsYmFja19sb2FkZWQsbixpKSxhfHxQKGUsaSl9KDAsdCxuLGUpLHEoaSl9KSwoZnVuY3Rpb24oYSl7IWZ1bmN0aW9uKHQsbixlLGkpe3ZhciBhPXYobik7SChuLGUsaSkscChuLGUuY2xhc3NfZXJyb3IpLGYobixcImVycm9yXCIpLGIoZS5jYWxsYmFja19lcnJvcixuLGkpLGF8fFAoZSxpKX0oMCx0LG4sZSkscShpKX0pKX0sSj1mdW5jdGlvbih0LG4sZSl7IWZ1bmN0aW9uKHQpe3QubGxUZW1wSW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKX0odCksQih0LG4sZSksZnVuY3Rpb24odCxuLGUpe3ZhciBpPXModCxuLmRhdGFfYmcpLGE9cyh0LG4uZGF0YV9iZ19oaWRwaSkscj1vJiZhP2E6aTtyJiYodC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J3VybChcIicuY29uY2F0KHIsJ1wiKScpLG0odCkuc2V0QXR0cmlidXRlKFwic3JjXCIsciksVCh0LG4sZSkpfSh0LG4sZSksZnVuY3Rpb24odCxuLGUpe3ZhciBpPXModCxuLmRhdGFfYmdfbXVsdGkpLGE9cyh0LG4uZGF0YV9iZ19tdWx0aV9oaWRwaSkscj1vJiZhP2E6aTtyJiYodC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9cixmdW5jdGlvbih0LG4sZSl7cCh0LG4uY2xhc3NfYXBwbGllZCksZih0LFwiYXBwbGllZFwiKSxGKHQsbiksbi51bm9ic2VydmVfY29tcGxldGVkJiZFKHQsbiksYihuLmNhbGxiYWNrX2FwcGxpZWQsdCxlKX0odCxuLGUpKX0odCxuLGUpfSxLPWZ1bmN0aW9uKHQsbixlKXshZnVuY3Rpb24odCl7cmV0dXJuIGouaW5kZXhPZih0LnRhZ05hbWUpPi0xfSh0KT9KKHQsbixlKTpmdW5jdGlvbih0LG4sZSl7Qih0LG4sZSksRyh0LG4pLFQodCxuLGUpfSh0LG4sZSl9LFE9W1wiSU1HXCIsXCJJRlJBTUVcIl0sVz1mdW5jdGlvbih0KXtyZXR1cm4gdC51c2VfbmF0aXZlJiZcImxvYWRpbmdcImluIEhUTUxJbWFnZUVsZW1lbnQucHJvdG90eXBlfSxYPWZ1bmN0aW9uKHQsbixlKXt0LmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gdC5pc0ludGVyc2VjdGluZ3x8dC5pbnRlcnNlY3Rpb25SYXRpbz4wfSh0KT9mdW5jdGlvbih0LG4sZSxpKXtiKGUuY2FsbGJhY2tfZW50ZXIsdCxuLGkpLGZ1bmN0aW9uKHQsbixlKXtuLnVub2JzZXJ2ZV9lbnRlcmVkJiZFKHQsZSl9KHQsZSxpKSxmdW5jdGlvbih0KXtyZXR1cm4hZyh0KX0odCl8fEsodCxlLGkpfSh0LnRhcmdldCx0LG4sZSk6ZnVuY3Rpb24odCxuLGUsaSl7Zyh0KXx8KGZ1bmN0aW9uKHQsbixlLGkpe2UuY2FuY2VsX29uX2V4aXQmJmZ1bmN0aW9uKHQpe3JldHVyblwibG9hZGluZ1wiPT09ZCh0KX0odCkmJlwiSU1HXCI9PT10LnRhZ05hbWUmJihxKHQpLGZ1bmN0aW9uKHQpe04odCwoZnVuY3Rpb24odCl7TSh0KX0pKSxNKHQpfSh0KSxmdW5jdGlvbih0KXtOKHQsKGZ1bmN0aW9uKHQpe08odCl9KSksTyh0KX0odCksaCh0LGUuY2xhc3NfbG9hZGluZyksSShpLC0xKSxfKHQpLGIoZS5jYWxsYmFja19jYW5jZWwsdCxuLGkpKX0odCxuLGUsaSksYihlLmNhbGxiYWNrX2V4aXQsdCxuLGkpKX0odC50YXJnZXQsdCxuLGUpfSkpfSxZPWZ1bmN0aW9uKHQpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0KX0sWj1mdW5jdGlvbih0KXtyZXR1cm4gdC5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCh0LmVsZW1lbnRzX3NlbGVjdG9yKX0sdHQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVyblwiZXJyb3JcIj09PWQodCl9KHQpfSxudD1mdW5jdGlvbih0LG4pe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gWSh0KS5maWx0ZXIoZyl9KHR8fFoobikpfSxldD1mdW5jdGlvbih0LGUpe3ZhciBhPWModCk7dGhpcy5fc2V0dGluZ3M9YSx0aGlzLmxvYWRpbmdDb3VudD0wLGZ1bmN0aW9uKHQsbil7aSYmIVcodCkmJihuLl9vYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGZ1bmN0aW9uKGUpe1goZSx0LG4pfSksZnVuY3Rpb24odCl7cmV0dXJue3Jvb3Q6dC5jb250YWluZXI9PT1kb2N1bWVudD9udWxsOnQuY29udGFpbmVyLHJvb3RNYXJnaW46dC50aHJlc2hvbGRzfHx0LnRocmVzaG9sZCtcInB4XCJ9fSh0KSkpfShhLHRoaXMpLGZ1bmN0aW9uKHQsZSl7biYmd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIiwoZnVuY3Rpb24oKXshZnVuY3Rpb24odCxuKXt2YXIgZTsoZT1aKHQpLFkoZSkuZmlsdGVyKHR0KSkuZm9yRWFjaCgoZnVuY3Rpb24obil7aChuLHQuY2xhc3NfZXJyb3IpLF8obil9KSksbi51cGRhdGUoKX0odCxlKX0pKX0oYSx0aGlzKSx0aGlzLnVwZGF0ZShlKX07cmV0dXJuIGV0LnByb3RvdHlwZT17dXBkYXRlOmZ1bmN0aW9uKHQpe3ZhciBuLGEsbz10aGlzLl9zZXR0aW5ncyxyPW50KHQsbyk7QSh0aGlzLHIubGVuZ3RoKSwhZSYmaT9XKG8pP2Z1bmN0aW9uKHQsbixlKXt0LmZvckVhY2goKGZ1bmN0aW9uKHQpey0xIT09US5pbmRleE9mKHQudGFnTmFtZSkmJih0LnNldEF0dHJpYnV0ZShcImxvYWRpbmdcIixcImxhenlcIiksZnVuY3Rpb24odCxuLGUpe0IodCxuLGUpLEcodCxuKSxWKHQsbiksZih0LFwibmF0aXZlXCIpfSh0LG4sZSkpfSkpLEEoZSwwKX0ocixvLHRoaXMpOihhPXIsZnVuY3Rpb24odCl7dC5kaXNjb25uZWN0KCl9KG49dGhpcy5fb2JzZXJ2ZXIpLGZ1bmN0aW9uKHQsbil7bi5mb3JFYWNoKChmdW5jdGlvbihuKXt0Lm9ic2VydmUobil9KSl9KG4sYSkpOnRoaXMubG9hZEFsbChyKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuX29ic2VydmVyJiZ0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCksWih0aGlzLl9zZXR0aW5ncykuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZGVsZXRlIHQubGxPcmlnaW5hbEF0dHJzfSkpLGRlbGV0ZSB0aGlzLl9vYnNlcnZlcixkZWxldGUgdGhpcy5fc2V0dGluZ3MsZGVsZXRlIHRoaXMubG9hZGluZ0NvdW50LGRlbGV0ZSB0aGlzLnRvTG9hZENvdW50fSxsb2FkQWxsOmZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMsZT10aGlzLl9zZXR0aW5ncztudCh0LGUpLmZvckVhY2goKGZ1bmN0aW9uKHQpe0sodCxlLG4pfSkpfX0sZXQubG9hZD1mdW5jdGlvbih0LG4pe3ZhciBlPWMobik7Syh0LGUpfSxldC5yZXNldFN0YXR1cz1mdW5jdGlvbih0KXtfKHQpfSxuJiZmdW5jdGlvbih0LG4pe2lmKG4paWYobi5sZW5ndGgpZm9yKHZhciBlLGk9MDtlPW5baV07aSs9MSlsKHQsZSk7ZWxzZSBsKHQsbil9KGV0LHdpbmRvdy5sYXp5TG9hZE9wdGlvbnMpLGV0fSkpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJ2YXIgdGFiSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWItaXRlbScpO1xyXG52YXIgdGFiQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWItY29udGVudCcpO1xyXG5pZiAodGFiSXRlbSAmJiB0YWJDb250ZW50KSB7XHJcbiAgICB0YWJJdGVtLmZvckVhY2goKGp0ZW0sIGkpID0+IHtcclxuICAgICAgICBqdGVtLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFiSXRlbS5sZW5ndGg7IGkrKykgeyB0YWJJdGVtW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpOyB9XHJcbiAgICAgICAgICAgIGp0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHRhYk5hbWUgPSBldmVudC5zcmNFbGVtZW50LmlkO1xyXG4gICAgICAgICAgICB0YWJOYW1lSWQgPSB0YWJOYW1lICsgJ0NvbnRlbnQnO1xyXG4gICAgICAgICAgICB0YWJDb250ZW50LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gaXRlbS5jaGlsZE5vZGVzWzBdLnBhcmVudEVsZW1lbnQuaWQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFiQ29udGVudE9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRhYk5hbWVJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGVtcCA9PSB0YWJOYW1lSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFiQ29udGVudE9wZW4uY2xhc3NMaXN0LmNvbnRhaW5zKCdkLS1ub25lJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiQ29udGVudE9wZW4uY2xhc3NMaXN0LnJlbW92ZSgnZC0tbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnZC0tbm9uZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnZC0tbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IFNpZW1hIGZyb20gJ3NpZW1hJztcclxuaW1wb3J0IHttb2JpbGVBbmRUYWJsZXRDaGVja30gZnJvbSAnLi4vcGFydHRlbi9tb2JpbGVBbmRUYWJsZXRDaGVjayc7XHJcbnZhciAgaG9tZXBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5LmhvbWUnKTtcclxuaWYoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIgfHwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi93b2xmYWN0aXZlLWdhbWV3aWtpL1wiKSAmJiBob21lcGFnZSl7XHJcbiAgICAvKkZpcnN0IENhcm91c2VsKi9cclxuICB2YXIgcHJvdG9jb2wgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2w7XHJcbiAgdmFyIGhvc3RuYW1lID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xyXG4gIHZhciBjaGlsZENhcm91c2VsSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYXJvdXNlbENvbnRhaW5CaWcgLmNhcm91c2VsX19pdGVtJyk7XHJcbiAgdmFyIGNoaWxkQ2Fyb3VzZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2JpZy1idG4nKTtcclxuICBjb25zdCBjYXJzb3VzZWxIb21lID0gbmV3IFNpZW1hKHtcclxuICBzZWxlY3RvcjogJyNjYXJvdXNlbENvbnRhaW5CaWcnLFxyXG4gIGR1cmF0aW9uOiAyMDAsXHJcbiAgZWFzaW5nOiAnZWFzZS1vdXQnLFxyXG4gIHBlclBhZ2U6IDEsXHJcbiAgc3RhcnRJbmRleDogMCxcclxuICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgbXVsdGlwbGVEcmFnOiB0cnVlLFxyXG4gIHRocmVzaG9sZDogMjAsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBydGw6IGZhbHNlLFxyXG4gIG9uSW5pdDogKCkgPT4ge30sXHJcbiAgb25DaGFuZ2U6ICgpID0+IHt9LFxyXG59KTtcclxuICBpZihjaGlsZENhcm91c2VsSXRlbS5sZW5ndGggPiAxKXtcclxuICAgIGNoaWxkQ2Fyb3VzZWxCdG4uaW5uZXJIVE1MID0gYFxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIGFyaWEtbGFiZWw9XCJjYXJvdXNlbC1wcmV2XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0IGljb25cIj48L2k+PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgYXJpYS1sYWJlbD1cImNhcm91c2VsLW5leHRcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0IGljb25cIj48L2k+PC9idXR0b24+XHJcbiAgICBgO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2FyaWEtbGFiZWw9XCJjYXJvdXNlbC1wcmV2XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYXJzb3VzZWxIb21lLnByZXYoKSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bYXJpYS1sYWJlbD1cImNhcm91c2VsLW5leHRcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhcnNvdXNlbEhvbWUubmV4dCgpKTtcclxuICB9XHJcbiAgICAvKkZpcnN0IENhcm91c2VsKi9cclxuICAgIC8qQ2Fyb3VzZWwgVmlkZW8qL1xyXG4gICAgdmFyIG1vYmlsZUNoZWNrID0gbW9iaWxlQW5kVGFibGV0Q2hlY2soKTtcclxuICAgIHZhciBsYXN0VmlkZW9DaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfdmlkZW8nKTtcclxuICAgIGlmKG1vYmlsZUNoZWNrID09PSBmYWxzZSAmJiBsYXN0VmlkZW9DaGVjayl7XHJcbiAgICB2YXIgY2Fyb3VzZWxWaWRlb0hvbWVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2xhdGVzdFZpZGVvIC5zbGlkZXJfdmlkZW8gLmltYWdlc19sYXRlc3RfdmlkZW8nKTtcclxuICAgIHZhciBjYXJvdXNlbFZpZGVvSG9tZURvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXRlc3RWaWRlbyAuc2xpZGVyX3ZpZGVvLWRvdCcpO1xyXG4gICAgdmFyIGNhcm91c2VsVmlkZW9Ib21lRG90UGFnZSA9IE1hdGguY2VpbChjYXJvdXNlbFZpZGVvSG9tZUl0ZW0ubGVuZ3RoLzMpO1xyXG4gICAgY29uc3QgY2Fyc291c2VsVmlkZW9Ib21lID0gIG5ldyBTaWVtYSh7XHJcbiAgICAgIHNlbGVjdG9yOiAnLnNsaWRlcl92aWRlbycsXHJcbiAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgIGVhc2luZzogJ2Vhc2Utb3V0JyxcclxuICAgICAgcGVyUGFnZTogMyxcclxuICAgICAgc3RhcnRJbmRleDogMCxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICBtdWx0aXBsZURyYWc6IHRydWUsXHJcbiAgICAgIHRocmVzaG9sZDogMjAsXHJcbiAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICBydGw6IGZhbHNlLFxyXG4gICAgICBvbkluaXQ6ICgpID0+IHt9LFxyXG4gICAgICBvbkNoYW5nZTogKCkgPT4ge30sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZihjYXJvdXNlbFZpZGVvSG9tZURvdFBhZ2UgPjEpe1xyXG4gICAgICAgIGxldCBjb250ZW50ID1gYDtcclxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDw9IGNhcm91c2VsVmlkZW9Ib21lRG90UGFnZTsgaSsrKXtcclxuICAgICAgICAgIGNvbnRlbnQgKz0gYDxzcGFuIGNsYXNzPVwiZC0taW5saW5lLS1ibG9jayBteHItNSBkb3RWaWRlb1wiPjxpIGNsYXNzPVwiZmFzIGZhLWNpcmNsZVwiPjwvaT48L3NwYW4+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2Fyb3VzZWxWaWRlb0hvbWVEb3QuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICB2YXIgZG90VmlkZW8gPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb3RWaWRlbycpO1xyXG4gICAgICAgIGRvdFZpZGVvWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGRvdFZpZGVvLmZvckVhY2goKGl0ZW0saSk9PntcclxuICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGkhPT0wKXtcclxuICAgICAgICAgICAgICBkb3RWaWRlby5mb3JFYWNoKChpdGVtKT0+e1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgY2Fyc291c2VsVmlkZW9Ib21lLmdvVG8oKGkrMSkqMy0yKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgZG90VmlkZW8uZm9yRWFjaCgoaXRlbSk9PntcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgIGNhcnNvdXNlbFZpZGVvSG9tZS5nb1RvKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9ZWxzZSBpZihtb2JpbGVDaGVjayA9PT0gdHJ1ZSAmJiBsYXN0VmlkZW9DaGVjayl7XHJcbiAgICB2YXIgY2Fyb3VzZWxWaWRlb0hvbWVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2xhdGVzdFZpZGVvIC5zbGlkZXJfdmlkZW8gLmltYWdlc19sYXRlc3RfdmlkZW8nKTtcclxuICAgIHZhciBjYXJvdXNlbFZpZGVvSG9tZURvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXRlc3RWaWRlbyAuc2xpZGVyX3ZpZGVvLWRvdCcpO1xyXG4gICAgdmFyIGNhcm91c2VsVmlkZW9Ib21lRG90UGFnZSA9IE1hdGguY2VpbChjYXJvdXNlbFZpZGVvSG9tZUl0ZW0ubGVuZ3RoLzEpO1xyXG4gICAgY29uc3QgY2Fyc291c2VsVmlkZW9Ib21lID0gIG5ldyBTaWVtYSh7XHJcbiAgICAgIHNlbGVjdG9yOiAnLnNsaWRlcl92aWRlbycsXHJcbiAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgIGVhc2luZzogJ2Vhc2Utb3V0JyxcclxuICAgICAgcGVyUGFnZTogMSxcclxuICAgICAgc3RhcnRJbmRleDogMCxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICBtdWx0aXBsZURyYWc6IHRydWUsXHJcbiAgICAgIHRocmVzaG9sZDogMjAsXHJcbiAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICBydGw6IGZhbHNlLFxyXG4gICAgICBvbkluaXQ6ICgpID0+IHt9LFxyXG4gICAgICBvbkNoYW5nZTogKCkgPT4ge30sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZihjYXJvdXNlbFZpZGVvSG9tZURvdFBhZ2UgPjEpe1xyXG4gICAgICAgIGxldCBjb250ZW50ID1gYDtcclxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDw9IGNhcm91c2VsVmlkZW9Ib21lRG90UGFnZTsgaSsrKXtcclxuICAgICAgICAgIGNvbnRlbnQgKz0gYDxzcGFuIGNsYXNzPVwiZC0taW5saW5lLS1ibG9jayBteHItNSBkb3RWaWRlb1wiPjxpIGNsYXNzPVwiZmFzIGZhLWNpcmNsZVwiPjwvaT48L3NwYW4+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2Fyb3VzZWxWaWRlb0hvbWVEb3QuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICB2YXIgZG90VmlkZW8gPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb3RWaWRlbycpO1xyXG4gICAgICAgIGRvdFZpZGVvWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGRvdFZpZGVvLmZvckVhY2goKGl0ZW0saSk9PntcclxuICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGkhPT0wKXtcclxuICAgICAgICAgICAgICBkb3RWaWRlby5mb3JFYWNoKChpdGVtKT0+e1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgY2Fyc291c2VsVmlkZW9Ib21lLmdvVG8oKGkrMSkqMy0yKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgZG90VmlkZW8uZm9yRWFjaCgoaXRlbSk9PntcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgIGNhcnNvdXNlbFZpZGVvSG9tZS5nb1RvKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgLypDYXJvdXNlbCBWaWRlbyovXHJcbiAgLypQb3N0IENhcm91c2VsKi9cclxuICB2YXIgY2Fyc291c2VsUG9zdEhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdExpc3QgLnBvc3RMaXN0X19idG4nKTtcclxuICB2YXIgY2Fyb3NlbFBvc3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvc3RMaXN0IC5wb3N0TGlzdF9faXRlbScpO1xyXG4gIGlmKCFtb2JpbGVDaGVjayl7XHJcbiAgICBjb25zdCBjYXJzb3VzZWxQb3N0SG9tZSA9ICBuZXcgU2llbWEoe1xyXG4gICAgICBzZWxlY3RvcjogJy5wb3N0TGlzdF9fY29udGFpbicsXHJcbiAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgIGVhc2luZzogJ2Vhc2Utb3V0JyxcclxuICAgICAgcGVyUGFnZTogNCxcclxuICAgICAgc3RhcnRJbmRleDogMCxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICBtdWx0aXBsZURyYWc6IHRydWUsXHJcbiAgICAgIHRocmVzaG9sZDogMjAsXHJcbiAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICBydGw6IGZhbHNlLFxyXG4gICAgICBvbkluaXQ6ICgpID0+IHt9LFxyXG4gICAgICBvbkNoYW5nZTogKCkgPT4ge30sXHJcbiAgICAgIH0pOyAgICAgXHJcbiAgICAgIGlmKGNhcm9zZWxQb3N0TGlzdC5sZW5ndGggPiA0KXtcclxuICAgICAgICBjYXJzb3VzZWxQb3N0SG9tZUJ0bi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIGFyaWEtbGFiZWw9XCJwb3N0LWxpc3QtcHJldlwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdCBpY29uXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBhcmlhLWxhYmVsPVwicG9zdC1saXN0LW5leHRcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0IGljb25cIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1uZXh0XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYXJzb3VzZWxQb3N0SG9tZS5wcmV2KCkpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblthcmlhLWxhYmVsPVwicG9zdC1saXN0LXByZXZcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhcnNvdXNlbFBvc3RIb21lLm5leHQoKSk7XHJcbiAgICAgIH0gXHJcbiAgfSBlbHNlIGlmIChtb2JpbGVDaGVjayl7XHJcbiAgICBjb25zdCBjYXJzb3VzZWxQb3N0SG9tZSA9ICBuZXcgU2llbWEoe1xyXG4gICAgICBzZWxlY3RvcjogJy5wb3N0TGlzdF9fY29udGFpbicsXHJcbiAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgIGVhc2luZzogJ2Vhc2Utb3V0JyxcclxuICAgICAgcGVyUGFnZTogMSxcclxuICAgICAgc3RhcnRJbmRleDogMCxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICBtdWx0aXBsZURyYWc6IHRydWUsXHJcbiAgICAgIHRocmVzaG9sZDogMjAsXHJcbiAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICBydGw6IGZhbHNlLFxyXG4gICAgICBvbkluaXQ6ICgpID0+IHt9LFxyXG4gICAgICBvbkNoYW5nZTogKCkgPT4ge30sXHJcbiAgICAgIH0pOyBcclxuICAgICAgaWYoY2Fyb3NlbFBvc3RMaXN0Lmxlbmd0aCA+IDQpe1xyXG4gICAgICAgIGNhcnNvdXNlbFBvc3RIb21lQnRuLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1wcmV2XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0IGljb25cIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIGFyaWEtbGFiZWw9XCJwb3N0LWxpc3QtbmV4dFwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHQgaWNvblwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblthcmlhLWxhYmVsPVwicG9zdC1saXN0LW5leHRcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhcnNvdXNlbFBvc3RIb21lLnByZXYoKSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2FyaWEtbGFiZWw9XCJwb3N0LWxpc3QtcHJldlwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2Fyc291c2VsUG9zdEhvbWUubmV4dCgpKTtcclxuICAgICAgfSAgICAgXHJcbiAgfVxyXG4gIFxyXG4gIC8qUG9zdCBDYXJvdXNlbCovXHJcbiAgLypDbGlrIHNob3cgcG9zdCBjYXRlZ29yeSovXHJcbiAgdmFyIGNhdGVnb3J5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlZ29yeUxpc3QgLmNhdGVnb3J5TGlzdF9fY29udGFpbiAudGVybV9fbGluaycpO1xyXG4gIGNhdGVnb3J5TGlzdC5mb3JFYWNoKChpdGVtKT0+e1xyXG4gICAgaXRlbS5vbmNsaWNrID0gKCkgPT57XHJcbiAgICAgIGxldCBjYXRlZ29yeSA9IGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93XCIpO1xyXG4gICAgICBsZXQgYXBpVXJsID1gYDtcclxuICAgICAgaWYod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIil7XHJcbiAgICAgICAgYXBpVXJsID1gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9L3dwLWpzb24vYmxvZy1hcGkvdjEvYmxvZy9vZmZzZXQ9MCZjYXRlZ29yeT0ke2NhdGVnb3J5fWA7XHJcbiAgICAgIH1lbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL3dvbGZhY3RpdmUtZ2FtZXdpa2kvXCIpIHtcclxuICAgICAgICBhcGlVcmwgPWAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vd29sZmFjdGl2ZS1nYW1ld2lraS93cC1qc29uL2Jsb2ctYXBpL3YxL2Jsb2cvb2Zmc2V0PTAmY2F0ZWdvcnk9JHtjYXRlZ29yeX1gO1xyXG4gICAgICB9XHJcbiAgICAgIGZldGNoKGFwaVVybClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSk9PntcclxuICAgICAgICBsZXQgY29udGVudCA9YGA7XHJcbiAgICAgICAgbGV0IGNhdGVnb3J5U2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0TGlzdCAucG9zdExpc3RfX2NvbnRhaW4nKTtcclxuICAgICAgICBjYXRlZ29yeVNob3cuaW5uZXJIVE1MID0gYGA7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKT0+e1xyXG4gICAgICAgICAgY29udGVudCArPSBgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zdExpc3RfX2l0ZW0gZC0tYmxvY2tcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc3RMaXN0X19pdGVtLWltZ1wiPlxyXG4gICAgICAgICAgICAgICR7aXRlbS50aHVtYm5haWx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiJHtpdGVtLnVybH1cIiBjbGFzcz1cInBvc3RMaXN0X19pdGVtLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGl0bGUtLWl0ZW1cIj4ke2l0ZW0udGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBgO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY2F0ZWdvcnlTaG93LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgaWYoIW1vYmlsZUNoZWNrKXtcclxuICAgICAgICAgIGNvbnN0IGNhcnNvdXNlbFBvc3RIb21lID0gIG5ldyBTaWVtYSh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLnBvc3RMaXN0X19jb250YWluJyxcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICBwZXJQYWdlOiA0LFxyXG4gICAgICAgICAgICBzdGFydEluZGV4OiAwLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIG11bHRpcGxlRHJhZzogdHJ1ZSxcclxuICAgICAgICAgICAgdGhyZXNob2xkOiAyMCxcclxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgIHJ0bDogZmFsc2UsXHJcbiAgICAgICAgICAgIG9uSW5pdDogKCkgPT4ge30sXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgfSk7ICAgICBcclxuICAgICAgICAgICAgaWYoY2Fyb3NlbFBvc3RMaXN0Lmxlbmd0aCA+IDQpe1xyXG4gICAgICAgICAgICAgIGNhcnNvdXNlbFBvc3RIb21lQnRuLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1wcmV2XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0IGljb25cIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIGFyaWEtbGFiZWw9XCJwb3N0LWxpc3QtbmV4dFwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHQgaWNvblwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblthcmlhLWxhYmVsPVwicG9zdC1saXN0LW5leHRcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhcnNvdXNlbFBvc3RIb21lLnByZXYoKSk7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2FyaWEtbGFiZWw9XCJwb3N0LWxpc3QtcHJldlwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2Fyc291c2VsUG9zdEhvbWUubmV4dCgpKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9IGVsc2UgaWYgKG1vYmlsZUNoZWNrKXtcclxuICAgICAgICAgIGNvbnN0IGNhcnNvdXNlbFBvc3RIb21lID0gIG5ldyBTaWVtYSh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLnBvc3RMaXN0X19jb250YWluJyxcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICBwZXJQYWdlOiAxLFxyXG4gICAgICAgICAgICBzdGFydEluZGV4OiAwLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIG11bHRpcGxlRHJhZzogdHJ1ZSxcclxuICAgICAgICAgICAgdGhyZXNob2xkOiAyMCxcclxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgIHJ0bDogZmFsc2UsXHJcbiAgICAgICAgICAgIG9uSW5pdDogKCkgPT4ge30sXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICBpZihjYXJvc2VsUG9zdExpc3QubGVuZ3RoID4gNCl7XHJcbiAgICAgICAgICAgICAgY2Fyc291c2VsUG9zdEhvbWVCdG4uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBhcmlhLWxhYmVsPVwicG9zdC1saXN0LXByZXZcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnQgaWNvblwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1uZXh0XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodCBpY29uXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2FyaWEtbGFiZWw9XCJwb3N0LWxpc3QtbmV4dFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2Fyc291c2VsUG9zdEhvbWUucHJldigpKTtcclxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1wcmV2XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYXJzb3VzZWxQb3N0SG9tZS5uZXh0KCkpO1xyXG4gICAgICAgICAgICB9ICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICB9XHJcbiAgfSlcclxuICAvKkNsaWNrIHNob3cgcG9zdCBjYXRlZ29yeSovXHJcbiAgLypDbGljayBsb2FkbW9yZSBvbiBnYW1lIHdpa2kqL1xyXG4gIHZhciBsb2FkbW9yZUJ0bldpa2kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9zdHJhdGVneSAuZ3RyX3NlZV9tb3JlJyk7XHJcbiAgdmFyIGxvYWRtb3JlQnRuU2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX3N0cmF0ZWd5IC5nYW1lX3N0cmF0ZWd5LWxpc3QnKTtcclxuICB2YXIgb2Zmc2V0TG9hZCA9IDEyO1xyXG4gIGxvYWRtb3JlQnRuV2lraS5vbmNsaWNrID0gKCkgPT57XHJcbiAgICB2YXIgbG9hZG1vcmVVcmw9YGA7XHJcbiAgICBpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiKXtcclxuICAgICAgbG9hZG1vcmVVcmwgPWAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vd3AtanNvbi9nYW1ld2lraS1hcGkvdjEvZ2FtZXdpa2kvb2Zmc2V0PSR7b2Zmc2V0TG9hZH1gO1xyXG4gICAgfWVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvd29sZmFjdGl2ZS1nYW1ld2lraS9cIikge1xyXG4gICAgICBsb2FkbW9yZVVybCA9YCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfS93b2xmYWN0aXZlLWdhbWV3aWtpL3dwLWpzb24vZ2FtZXdpa2ktYXBpL3YxL2dhbWV3aWtpL29mZnNldD0ke29mZnNldExvYWR9YDtcclxuICAgIH1cclxuICAgIGZldGNoKGxvYWRtb3JlVXJsKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgIGxldCBjb250ZW50ID0gYGA7XHJcbiAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtZGl2aWRlLTIgbWMtbWcgY29sLWRpdmlkZS1zbS02IGNvbC1kaXZpZGUtbWQtM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VzX2dhbWVfc3RyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtpdGVtLnVybH1cIj4ke2l0ZW0udGh1bWJuYWlsfTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZV9nYW1lX3N0clwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7aXRlbS51cmx9XCI+JHtpdGVtLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgfSlcclxuICAgICAgbG9hZG1vcmVCdG5TaG93LmlubmVySFRNTCArPSBjb250ZW50O1xyXG4gICAgICBpZihkYXRhLmxlbmd0aCAhPT0gMTIpe1xyXG4gICAgICAgIGxvYWRtb3JlQnRuV2lraS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIH1lbHNlIGlmKGRhdGEubGVuZ3RoID09PSAxMil7XHJcbiAgICAgICAgICBvZmZzZXRMb2FkID0gb2Zmc2V0TG9hZCArIDExO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICB2YXIgZnJlZUFwcFVybCA9XCJcIjtcclxuICBpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiKXtcclxuICAgIGZyZWVBcHBVcmwgPWAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vd3AtY29udGVudC90aGVtZXMvd29sZmFjdGl2ZS1nYW1ld2lraS9qc29uL2ZyZWUtZGF0YS5qc29uYDtcclxuICB9ZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi93b2xmYWN0aXZlLWdhbWV3aWtpL1wiKSB7XHJcbiAgICBmcmVlQXBwVXJsID1gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9L3dvbGZhY3RpdmUtZ2FtZXdpa2kvd3AtY29udGVudC90aGVtZXMvd29sZmFjdGl2ZS1nYW1ld2lraS9qc29uL2ZyZWUtZGF0YS5qc29uYDtcclxuICB9XHJcbiAgZmV0Y2goZnJlZUFwcFVybCkgXHJcbiAgLnRoZW4ocmVzcG9uc2U9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGxldCBjb250ZW50ID0gYGA7XHJcbiAgICBsZXQgZnJlZUdhbWVSYW5raW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZyZWVHYW1lUmFua2luZycpO1xyXG4gICAgZGF0YS5jb250ZW50LmZvckVhY2goKGl0ZW0saSk9PnsgIFxyXG4gICAgICBpZihpIDwgNSl7XHJcbiAgICAgICAgbGV0IHJhdGluZ0NvdW50ID0gTWF0aC5yb3VuZChpdGVtLnJhdGluZyk7XHJcbiAgICAgICAgbGV0IHJhdGluZ0xlZnQgPSA1IC0gTWF0aC5yb3VuZChpdGVtLnJhdGluZyk7XHJcbiAgICAgICAgbGV0IHJhdGluZyA9XCJcIjtcclxuICAgICAgICBmb3IoaT0wOyBpPCByYXRpbmdDb3VudCA7IGkrKyl7XHJcbiAgICAgICAgICByYXRpbmcgKz0gYDxpIGNsYXNzPVwiZmFzIGZhLXN0YXJcIj48L2k+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGk9MDsgaTwgcmF0aW5nTGVmdCA7IGkrKyl7XHJcbiAgICAgICAgICByYXRpbmcgKz0gYDxpIGNsYXNzPVwiZmFzIGZhLXN0YXIgbGVmdFwiPjwvaT5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZW50ICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2l0ZW1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbS1jb250YWluXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbS1pbWdcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aXRlbS5pY29ufVwiIGFsdD1cIiR7aXRlbS5zbHVnfVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZS0taXRlbVwiPiR7aXRlbS50aXRsZX08L3A+IFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiYXBwLS1zdGFyXCI+JHtyYXRpbmd9PC9wPiAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbS1idG5cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYXBwcy5hcHBsZS5jb20vdm4vYXBwLyR7aXRlbS5zbHVnfS9pZCR7aXRlbS5pZH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2xvdWQtZG93bmxvYWQtYWx0XCI+PC9pPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICB9ICAgICBcclxuICAgIH0pXHJcbiAgICBmcmVlR2FtZVJhbmtpbmcuaW5uZXJIVE1MID0gY29udGVudDtcclxuICB9KVxyXG4gIHZhciBncm9zc2luZ0FwcFVybCA9XCJcIjtcclxuICBpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiKXtcclxuICAgIGdyb3NzaW5nQXBwVXJsID1gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9L3dwLWNvbnRlbnQvdGhlbWVzL3dvbGZhY3RpdmUtZ2FtZXdpa2kvanNvbi9ncm9zc2luZy1kYXRhLmpzb25gO1xyXG4gIH1lbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL3dvbGZhY3RpdmUtZ2FtZXdpa2kvXCIpIHtcclxuICAgIGdyb3NzaW5nQXBwVXJsID1gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9L3dvbGZhY3RpdmUtZ2FtZXdpa2kvd3AtY29udGVudC90aGVtZXMvd29sZmFjdGl2ZS1nYW1ld2lraS9qc29uL2dyb3NzaW5nLWRhdGEuanNvbmA7XHJcbiAgfVxyXG4gIGZldGNoKGdyb3NzaW5nQXBwVXJsKVxyXG4gIC50aGVuKHJlc3BvbnNlPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gIC50aGVuKChkYXRhKT0+e1xyXG4gICAgbGV0IGNvbnRlbnQgPSBgYDtcclxuICAgIGxldCBncm9zc2luZ0dhbWVSYW5raW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dyb3NzaW5nR2FtZVJhbmtpbmcnKTtcclxuICAgIGRhdGEuY29udGVudC5mb3JFYWNoKChpdGVtLGkpPT57ICBcclxuICAgICAgaWYoaSA8IDUpe1xyXG4gICAgICAgIGxldCByYXRpbmdDb3VudCA9IE1hdGgucm91bmQoaXRlbS5yYXRpbmcpO1xyXG4gICAgICAgIGxldCByYXRpbmdMZWZ0ID0gNSAtIE1hdGgucm91bmQoaXRlbS5yYXRpbmcpO1xyXG4gICAgICAgIGxldCByYXRpbmcgPVwiXCI7XHJcbiAgICAgICAgZm9yKGk9MDsgaTwgcmF0aW5nQ291bnQgOyBpKyspe1xyXG4gICAgICAgICAgcmF0aW5nICs9IGA8aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+PC9pPmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihpPTA7IGk8IHJhdGluZ0xlZnQgOyBpKyspe1xyXG4gICAgICAgICAgcmF0aW5nICs9IGA8aSBjbGFzcz1cImZhcyBmYS1zdGFyIGxlZnRcIj48L2k+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGVudCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2l0ZW0tY29udGFpblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2l0ZW0taW1nXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2l0ZW0uaWNvbn1cIiBhbHQ9XCIke2l0ZW0uc2x1Z31cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGUtLWl0ZW1cIj4ke2l0ZW0udGl0bGV9PC9wPiBcclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImFwcC0tc3RhclwiPiR7cmF0aW5nfTwvcD4gICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2l0ZW0tYnRuXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FwcHMuYXBwbGUuY29tL3ZuL2FwcC8ke2l0ZW0uc2x1Z30vaWQke2l0ZW0uaWR9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNsb3VkLWRvd25sb2FkLWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgfSAgICAgXHJcbiAgICB9KVxyXG4gICAgZ3Jvc3NpbmdHYW1lUmFua2luZy5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gIH0pXHJcbiAgLypDbGljayBsb2FkbW9yZSBvbiBnYW1lIHdpa2kqLyAgXHJcbiAgLypSZW5kZXIgYXBpIGFwcCByYW5raW5nKi9cclxufVxyXG4iLCJ2YXIgZG9tQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzaW5nbGVcIik7XHJcbmlmKGRvbUJvZHkubGVuZ3RoICE9IDAgKXtcclxuICAgIGNvbnN0IGJhY2tUb1RvcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFjay10by10b3AtYnRuXCIpO1xyXG4gICAgdmFyIHByb3RvY29sID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sO1xyXG4gICAgdmFyIGhvc3RuYW1lID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsRnVuY3Rpb24pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNjcm9sbEZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDMwMCkgeyAvLyBTaG93IGJhY2tUb1RvcEJ1dHRvblxyXG4gICAgICAgIGlmKCFiYWNrVG9Ub3BCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuRW50cmFuY2VcIikpIHtcclxuICAgICAgICBiYWNrVG9Ub3BCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImJ0bkV4aXRcIik7XHJcbiAgICAgICAgYmFja1RvVG9wQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG5FbnRyYW5jZVwiKTtcclxuICAgICAgICBiYWNrVG9Ub3BCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHsgLy8gSGlkZSBiYWNrVG9Ub3BCdXR0b25cclxuICAgICAgICBpZihiYWNrVG9Ub3BCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuRW50cmFuY2VcIikpIHtcclxuICAgICAgICBiYWNrVG9Ub3BCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImJ0bkVudHJhbmNlXCIpO1xyXG4gICAgICAgIGJhY2tUb1RvcEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuRXhpdFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBiYWNrVG9Ub3BCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0sIDI1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJhY2tUb1RvcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc21vb3RoU2Nyb2xsQmFja1RvVG9wKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzbW9vdGhTY3JvbGxCYWNrVG9Ub3AoKSB7XHJcbiAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IDA7XHJcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgY29uc3QgZGlzdGFuY2UgPSB0YXJnZXRQb3NpdGlvbiAtIHN0YXJ0UG9zaXRpb247XHJcbiAgICBjb25zdCBkdXJhdGlvbiA9IDc1MDtcclxuICAgIGxldCBzdGFydCA9IG51bGw7XHJcbiAgICBcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RlcCh0aW1lc3RhbXApIHtcclxuICAgICAgICBpZiAoIXN0YXJ0KSBzdGFydCA9IHRpbWVzdGFtcDtcclxuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHRpbWVzdGFtcCAtIHN0YXJ0O1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBlYXNlSW5PdXRDdWJpYyhwcm9ncmVzcywgc3RhcnRQb3NpdGlvbiwgZGlzdGFuY2UsIGR1cmF0aW9uKSk7XHJcbiAgICAgICAgaWYgKHByb2dyZXNzIDwgZHVyYXRpb24pIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZWFzZUluT3V0Q3ViaWModCwgYiwgYywgZCkge1xyXG4gICAgICAgIHQgLz0gZC8yO1xyXG4gICAgICAgIGlmICh0IDwgMSkgcmV0dXJuIGMvMip0KnQqdCArIGI7XHJcbiAgICAgICAgdCAtPSAyO1xyXG4gICAgICAgIHJldHVybiBjLzIqKHQqdCp0ICsgMikgKyBiO1xyXG4gICAgfTtcclxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge3Njcm9sbEZpeGVkU2lkZUJhcigpfTtcclxuXHJcbiAgICB2YXIgc2lkZWJhckxlZnRzY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGVCYXJMZWZ0U2Nyb2xsXCIpO1xyXG4gICAgdmFyIHNpZGViYXJSaWdodHNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclJpZ2h0c2Nyb2xsXCIpO1xyXG4gICAgdmFyIHNpZGViYXJNZW51UmFua2luZ3Njcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhck1lbnVSYW5raW5nc2Nyb2xsXCIpO1xyXG4gICAgdmFyIHNpZGViYXJNZW51TGVmdGNyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyTWVudUxlZnRjcm9sbFwiKTtcclxuICAgIHZhciBzdGlja3lMZWZ0ID0gc2lkZWJhckxlZnRzY3JvbGwub2Zmc2V0VG9wO1xyXG4gICAgY29uc3Qgc2Nyb2xsRml4ZWRTaWRlQmFyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBzdGlja3lMZWZ0KSB7XHJcbiAgICAgICAgICAgIHNpZGViYXJMZWZ0c2Nyb2xsLmNsYXNzTGlzdC5hZGQoXCJyb2xsX3NpZGViYXJcIik7XHJcbiAgICAgICAgICAgIHNpZGViYXJSaWdodHNjcm9sbC5jbGFzc0xpc3QuYWRkKFwicm9sbF9zaWRlYmFyXCIpO1xyXG4gICAgICAgICAgICBzaWRlYmFyTWVudVJhbmtpbmdzY3JvbGwuY2xhc3NMaXN0LmFkZChcInJvbGxfc2lkZWJhci1tZW51XCIpO1xyXG4gICAgICAgICAgICBzaWRlYmFyTWVudUxlZnRjcm9sbC5jbGFzc0xpc3QuYWRkKFwicm9sbF9zaWRlYmFyLW1lbnVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2lkZWJhckxlZnRzY3JvbGwuY2xhc3NMaXN0LnJlbW92ZShcInJvbGxfc2lkZWJhclwiKTtcclxuICAgICAgICAgICAgc2lkZWJhclJpZ2h0c2Nyb2xsLmNsYXNzTGlzdC5yZW1vdmUoXCJyb2xsX3NpZGViYXJcIik7XHJcbiAgICAgICAgICAgIHNpZGViYXJNZW51UmFua2luZ3Njcm9sbC5jbGFzc0xpc3QucmVtb3ZlKFwicm9sbF9zaWRlYmFyLW1lbnVcIik7XHJcbiAgICAgICAgICAgIHNpZGViYXJNZW51TGVmdGNyb2xsLmNsYXNzTGlzdC5yZW1vdmUoXCJyb2xsX3NpZGViYXItbWVudVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9ICBcclxuICAgIHZhciBmcmVlQXBwVXJsID1cIlwiO1xyXG4gICAgaWYgKHByb3RvY29sID09PSBcImh0dHA6XCIgJiYgaG9zdG5hbWUgPT09IFwibG9jYWxob3N0XCIpIHtcclxuICAgICAgICBmcmVlQXBwVXJsID1gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9L3dvbGZhY3RpdmUtZ2FtZXdpa2kvd3AtY29udGVudC90aGVtZXMvd29sZmFjdGl2ZS1nYW1ld2lraS9qc29uL2ZyZWUtZGF0YS5qc29uYDsgfVxyXG4gICAgZWxzZSBpZihwcm90b2NvbCA9PT0gXCJodHRwczpcIiB8fCBwcm90b2NvbCA9PT0gXCJodHRwOlwiKXtcclxuICAgICAgICBmcmVlQXBwVXJsID1gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9L3dwLWNvbnRlbnQvdGhlbWVzL3dvbGZhY3RpdmUtZ2FtZXdpa2kvanNvbi9mcmVlLWRhdGEuanNvbmA7ICB9IFxyXG4gIGZldGNoKGZyZWVBcHBVcmwpXHJcbiAgLnRoZW4ocmVzcG9uc2U9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGxldCBjb250ZW50ID0gYGA7XHJcbiAgICBsZXQgZnJlZUdhbWVSYW5raW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZyZWVHYW1lUmFua2luZycpO1xyXG4gICAgZGF0YS5jb250ZW50LmZvckVhY2goKGl0ZW0saSk9PnsgIFxyXG4gICAgICBpZihpIDwgNSl7XHJcbiAgICAgICAgbGV0IHJhdGluZ0NvdW50ID0gTWF0aC5yb3VuZChpdGVtLnJhdGluZyk7XHJcbiAgICAgICAgbGV0IHJhdGluZ0xlZnQgPSA1IC0gTWF0aC5yb3VuZChpdGVtLnJhdGluZyk7XHJcbiAgICAgICAgbGV0IHJhdGluZyA9XCJcIjtcclxuICAgICAgICBmb3IoaT0wOyBpPCByYXRpbmdDb3VudCA7IGkrKyl7XHJcbiAgICAgICAgICByYXRpbmcgKz0gYDxpIGNsYXNzPVwiZmFzIGZhLXN0YXJcIj48L2k+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGk9MDsgaTwgcmF0aW5nTGVmdCA7IGkrKyl7XHJcbiAgICAgICAgICByYXRpbmcgKz0gYDxpIGNsYXNzPVwiZmFzIGZhLXN0YXIgbGVmdFwiPjwvaT5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZW50ICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2l0ZW1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbS1jb250YWluXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbS1pbWdcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aXRlbS5pY29ufVwiIGFsdD1cIiR7aXRlbS5zbHVnfVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZS0taXRlbVwiPiR7aXRlbS50aXRsZX08L3A+IFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiYXBwLS1zdGFyXCI+JHtyYXRpbmd9PC9wPiAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbS1idG5cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYXBwcy5hcHBsZS5jb20vdm4vYXBwLyR7aXRlbS5zbHVnfS9pZCR7aXRlbS5pZH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2xvdWQtZG93bmxvYWQtYWx0XCI+PC9pPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICB9ICAgICBcclxuICAgIH0pXHJcbiAgICBmcmVlR2FtZVJhbmtpbmcuaW5uZXJIVE1MID0gY29udGVudDtcclxuICB9KVxyXG4gIHZhciBncm9zc2luZ0FwcFVybCA9XCJcIjtcclxuICBpZiAocHJvdG9jb2wgPT09IFwiaHR0cDpcIiAmJiBob3N0bmFtZSA9PT0gXCJsb2NhbGhvc3RcIikge1xyXG4gICAgZ3Jvc3NpbmdBcHBVcmwgPWAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vd29sZmFjdGl2ZS1nYW1ld2lraS93cC1jb250ZW50L3RoZW1lcy93b2xmYWN0aXZlLWdhbWV3aWtpL2pzb24vZ3Jvc3NpbmctZGF0YS5qc29uYDtcclxuICB9ZWxzZSBpZihwcm90b2NvbCA9PT0gXCJodHRwczpcIiB8fCBwcm90b2NvbCA9PT0gXCJodHRwOlwiKXtcclxuICAgIGdyb3NzaW5nQXBwVXJsID1gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9L3dwLWNvbnRlbnQvdGhlbWVzL3dvbGZhY3RpdmUtZ2FtZXdpa2kvanNvbi9ncm9zc2luZy1kYXRhLmpzb25gO1xyXG4gIH0gXHJcbiAgZmV0Y2goZ3Jvc3NpbmdBcHBVcmwpXHJcbiAgLnRoZW4ocmVzcG9uc2U9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICBsZXQgY29udGVudCA9IGBgO1xyXG4gICAgbGV0IGdyb3NzaW5nR2FtZVJhbmtpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3Jvc3NpbmdHYW1lUmFua2luZycpO1xyXG4gICAgZGF0YS5jb250ZW50LmZvckVhY2goKGl0ZW0saSk9PnsgIFxyXG4gICAgICBpZihpIDwgNSl7XHJcbiAgICAgICAgbGV0IHJhdGluZ0NvdW50ID0gTWF0aC5yb3VuZChpdGVtLnJhdGluZyk7XHJcbiAgICAgICAgbGV0IHJhdGluZ0xlZnQgPSA1IC0gTWF0aC5yb3VuZChpdGVtLnJhdGluZyk7XHJcbiAgICAgICAgbGV0IHJhdGluZyA9XCJcIjtcclxuICAgICAgICBmb3IoaT0wOyBpPCByYXRpbmdDb3VudCA7IGkrKyl7XHJcbiAgICAgICAgICByYXRpbmcgKz0gYDxpIGNsYXNzPVwiZmFzIGZhLXN0YXJcIj48L2k+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGk9MDsgaTwgcmF0aW5nTGVmdCA7IGkrKyl7XHJcbiAgICAgICAgICByYXRpbmcgKz0gYDxpIGNsYXNzPVwiZmFzIGZhLXN0YXIgbGVmdFwiPjwvaT5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZW50ICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2l0ZW1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbS1jb250YWluXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbS1pbWdcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aXRlbS5pY29ufVwiIGFsdD1cIiR7aXRlbS5zbHVnfVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZS0taXRlbVwiPiR7aXRlbS50aXRsZX08L3A+IFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiYXBwLS1zdGFyXCI+JHtyYXRpbmd9PC9wPiAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbS1idG5cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYXBwcy5hcHBsZS5jb20vdm4vYXBwLyR7aXRlbS5zbHVnfS9pZCR7aXRlbS5pZH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2xvdWQtZG93bmxvYWQtYWx0XCI+PC9pPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICB9ICAgICBcclxuICAgIH0pXHJcbiAgICBncm9zc2luZ0dhbWVSYW5raW5nLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgfSlcclxufVxyXG5cclxuIiwiY29uc3QgbW9iaWxlQW5kVGFibGV0Q2hlY2sgPSAoKSA9PntcclxuICBsZXQgY2hlY2sgPSBmYWxzZTtcclxuICAgIChmdW5jdGlvbihhKXtcclxuICAgICAgICBpZigvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2kudGVzdChhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLDQpKSlcclxuICAgICAgICAgICAgY2hlY2sgPSB0cnVlO1xyXG4gICAgfSkobmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8d2luZG93Lm9wZXJhKTtcclxuICAgIHJldHVybiBjaGVjaztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgbW9iaWxlQW5kVGFibGV0Q2hlY2tcclxufTtcclxuIiwiaW1wb3J0IExhenlMb2FkIGZyb20gXCJ2YW5pbGxhLWxhenlsb2FkXCI7XHJcbmltcG9ydCAnLi9wYWdlcy9ob21lcGFnZSc7XHJcbmltcG9ydCAnLi9wYWdlcy9zaW5nbGUnO1xyXG5pbXBvcnQgJy4vcGFnZXMvZ2FtZXdpa2ktdGFiJztcclxuaW1wb3J0ICdzaGFyZW9uJ1xyXG4vKlZBUklBQkxFUyovXHJcbnZhciBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpZnJhbWUnKTtcclxudmFyIGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpO1xyXG52YXIgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd2aWRlbycpO1xyXG4vKlZBUklBQkxFUyovXHJcbi8qTG9jYWwgU3RvcmFnZSovXHJcbmZ1bmN0aW9uIEx1dVZhb0xvY2FsU3RvcmFnZShBcnJheSwgbmFtZUFycmF5KSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIHZhciBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KEFycmF5KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWVBcnJheSwganNvbkRhdGEpO1xyXG59XHJcbi8qbmFtZUFycmF5IGzDoCBk4bqhbmcgc3RyaW5nLCBhcnJheSBsw6AgYmnhur9uIGFycmF5IGPhuqduIGzGsHUgdsOgbyovXHJcbmZ1bmN0aW9uIExheUxvY2FsU3RvcmFnZShuYW1lQXJyYXksIEFycmF5KSB7XHJcbiAgICB2YXIganNvbkRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lQXJyYXkpO1xyXG4gICAgaWYgKCFqc29uRGF0YSkgeyBsb2NhbFN0b3JhZ2UgPSBbXTsgcmV0dXJuOyB9XHJcbiAgICBBcnJheSA9IEpTT04ucGFyc2UoanNvbkRhdGEpO1xyXG59XHJcbi8qbmFtZUFycmF5IGzDoCBk4bqhbmcgc3RyaW5nLCBhcnJheSBsw6AgYmnhur9uIGFycmF5IGPhuqduIGzGsHUgbG9jYWwgdsOgbyovXHJcbi8qTG9jYWwgU3RvcmFnZSovXHJcbi8qIFJlc3Bvc2l2ZSBsYXp5IGxvYWQqL1xyXG5mdW5jdGlvbiBpZnJhbWVSZXNwb3NpdmUoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlmcmFtZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmcmFtZVtpXS5jbGFzc0xpc3QuYWRkKCdsYXp5Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGltZ1Jlc3Bvc2l2ZSgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaW1nW2ldLmNsYXNzTGlzdC5hZGQoJ2xhenknKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmlkZW9SZXNwb3NpdmUoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpZGVvLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmlkZW9baV0uY2xhc3NMaXN0LmFkZCgnbGF6eScpO1xyXG4gICAgfVxyXG59XHJcbmlmcmFtZSA/IGlmcmFtZVJlc3Bvc2l2ZSgpIDoge307XHJcbmltZyA/IGltZ1Jlc3Bvc2l2ZSgpIDoge307XHJcbnZpZGVvID8gdmlkZW9SZXNwb3NpdmUoKSA6IHt9O1xyXG52YXIgbGF6eUxvYWRJbnN0YW5jZSA9IG5ldyBMYXp5TG9hZCh7IGVsZW1lbnRzX3NlbGVjdG9yOiBcIi5sYXp5XCIgfSk7XHJcbi8qIFJlc3Bvc2l2ZSBsYXp5IGxvYWQqLyJdLCJzb3VyY2VSb290IjoiIn0=