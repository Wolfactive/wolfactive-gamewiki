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
/* harmony import */ var shareon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shareon */ "./node_modules/shareon/dist/shareon.mjs");




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NoYXJlb24vZGlzdC9zaGFyZW9uLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2llbWEvZGlzdC9zaWVtYS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtbGF6eWxvYWQvZGlzdC9sYXp5bG9hZC5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2VzL3NpbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFydHRlbi9tb2JpbGVBbmRUYWJsZXRDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcm9vdC5qcyJdLCJuYW1lcyI6WyJlIiwidCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJzZWxmIiwiciIsImkiLCJuIiwibCIsImNhbGwiLCJtIiwiYyIsImQiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX19lc01vZHVsZSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJUeXBlRXJyb3IiLCJ2YWx1ZSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJsZW5ndGgiLCJ3cml0YWJsZSIsImtleSIsImNvbmZpZyIsIm1lcmdlU2V0dGluZ3MiLCJzZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkVycm9yIiwicmVzb2x2ZVNsaWRlc051bWJlciIsInNlbGVjdG9yV2lkdGgiLCJvZmZzZXRXaWR0aCIsImlubmVyRWxlbWVudHMiLCJzbGljZSIsImNoaWxkcmVuIiwiY3VycmVudFNsaWRlIiwibG9vcCIsInN0YXJ0SW5kZXgiLCJNYXRoIiwibWF4IiwibWluIiwicGVyUGFnZSIsInRyYW5zZm9ybVByb3BlcnR5Iiwid2Via2l0T3JOb3QiLCJmb3JFYWNoIiwiYmluZCIsImluaXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVzaXplSGFuZGxlciIsImRyYWdnYWJsZSIsInBvaW50ZXJEb3duIiwiZHJhZyIsInN0YXJ0WCIsImVuZFgiLCJzdGFydFkiLCJsZXRJdEdvIiwicHJldmVudENsaWNrIiwidG91Y2hzdGFydEhhbmRsZXIiLCJ0b3VjaGVuZEhhbmRsZXIiLCJ0b3VjaG1vdmVIYW5kbGVyIiwibW91c2Vkb3duSGFuZGxlciIsIm1vdXNldXBIYW5kbGVyIiwibW91c2VsZWF2ZUhhbmRsZXIiLCJtb3VzZW1vdmVIYW5kbGVyIiwiY2xpY2tIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50cyIsInN0eWxlIiwib3ZlcmZsb3ciLCJkaXJlY3Rpb24iLCJydGwiLCJidWlsZFNsaWRlckZyYW1lIiwib25Jbml0Iiwic2xpZGVyRnJhbWUiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJlbmFibGVUcmFuc2l0aW9uIiwiY3Vyc29yIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImJ1aWxkU2xpZGVyRnJhbWVJdGVtIiwiY2xvbmVOb2RlIiwiYXBwZW5kQ2hpbGQiLCJhIiwiaW5uZXJIVE1MIiwic2xpZGVUb0N1cnJlbnQiLCJjc3NGbG9hdCIsImlubmVyV2lkdGgiLCJhcmd1bWVudHMiLCJkaXNhYmxlVHJhbnNpdGlvbiIsIm9uQ2hhbmdlIiwid2Via2l0VHJhbnNpdGlvbiIsImVhc2luZyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFicyIsIm11bHRpcGxlRHJhZyIsImNlaWwiLCJ0aHJlc2hvbGQiLCJwcmV2IiwibmV4dCIsImluZGV4T2YiLCJ0YXJnZXQiLCJub2RlTmFtZSIsInN0b3BQcm9wYWdhdGlvbiIsInRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwidXBkYXRlQWZ0ZXJEcmFnIiwiY2xlYXJEcmFnIiwicHJldmVudERlZmF1bHQiLCJzcGxpY2UiLCJpbnNlcnQiLCJkZXRhY2hFdmVudHMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkb2N1bWVudEVsZW1lbnQiLCJ0cmFuc2Zvcm0iLCJhc3NpZ24iLCJhcHBseSIsIm5hdmlnYXRvciIsInRlc3QiLCJ1c2VyQWdlbnQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiZWxlbWVudHNfc2VsZWN0b3IiLCJjb250YWluZXIiLCJ0aHJlc2hvbGRzIiwiZGF0YV9zcmMiLCJkYXRhX3NyY3NldCIsImRhdGFfc2l6ZXMiLCJkYXRhX2JnIiwiZGF0YV9iZ19oaWRwaSIsImRhdGFfYmdfbXVsdGkiLCJkYXRhX2JnX211bHRpX2hpZHBpIiwiZGF0YV9wb3N0ZXIiLCJjbGFzc19hcHBsaWVkIiwiY2xhc3NfbG9hZGluZyIsImNsYXNzX2xvYWRlZCIsImNsYXNzX2Vycm9yIiwidW5vYnNlcnZlX2NvbXBsZXRlZCIsInVub2JzZXJ2ZV9lbnRlcmVkIiwiY2FuY2VsX29uX2V4aXQiLCJjYWxsYmFja19lbnRlciIsImNhbGxiYWNrX2V4aXQiLCJjYWxsYmFja19hcHBsaWVkIiwiY2FsbGJhY2tfbG9hZGluZyIsImNhbGxiYWNrX2xvYWRlZCIsImNhbGxiYWNrX2Vycm9yIiwiY2FsbGJhY2tfZmluaXNoIiwiY2FsbGJhY2tfY2FuY2VsIiwidXNlX25hdGl2ZSIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiaW5zdGFuY2UiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJnZXRBdHRyaWJ1dGUiLCJ1Iiwic2V0QXR0cmlidXRlIiwiZiIsIl8iLCJnIiwidiIsImIiLCJjbGFzc0xpc3QiLCJhZGQiLCJjbGFzc05hbWUiLCJoIiwicmVtb3ZlIiwicmVwbGFjZSIsIlJlZ0V4cCIsImxsVGVtcEltYWdlIiwiRSIsIl9vYnNlcnZlciIsInVub2JzZXJ2ZSIsIkkiLCJsb2FkaW5nQ291bnQiLCJBIiwidG9Mb2FkQ291bnQiLCJMIiwidGFnTmFtZSIsInB1c2giLCJ5IiwidyIsImsiLCJsbE9yaWdpbmFsQXR0cnMiLCJ6Iiwic3JjIiwic3Jjc2V0Iiwic2l6ZXMiLCJPIiwiQyIsIk0iLCJOIiwicGFyZW50Tm9kZSIsIngiLCJSIiwiSU1HIiwiSUZSQU1FIiwiVklERU8iLCJsb2FkIiwiRyIsIlQiLCJEIiwiRiIsIlYiLCJqIiwiUCIsIlMiLCJsbEV2TGlzbnJzIiwiVSIsIiQiLCJxIiwiSCIsIkIiLCJKIiwiYmFja2dyb3VuZEltYWdlIiwiY29uY2F0IiwiSyIsIlEiLCJXIiwiSFRNTEltYWdlRWxlbWVudCIsIlgiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwiWSIsIkFycmF5IiwiWiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0dCIsIm50IiwiZmlsdGVyIiwiZXQiLCJfc2V0dGluZ3MiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInJvb3QiLCJyb290TWFyZ2luIiwidXBkYXRlIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJsb2FkQWxsIiwiZGVzdHJveSIsInJlc2V0U3RhdHVzIiwibGF6eUxvYWRPcHRpb25zIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJob21lcGFnZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwiY2hpbGRDYXJvdXNlbEl0ZW0iLCJjaGlsZENhcm91c2VsQnRuIiwiY2Fyc291c2VsSG9tZSIsIlNpZW1hIiwibW9iaWxlQ2hlY2siLCJtb2JpbGVBbmRUYWJsZXRDaGVjayIsImxhc3RWaWRlb0NoZWNrIiwiY2Fyb3VzZWxWaWRlb0hvbWVJdGVtIiwiY2Fyb3VzZWxWaWRlb0hvbWVEb3QiLCJjYXJvdXNlbFZpZGVvSG9tZURvdFBhZ2UiLCJjYXJzb3VzZWxWaWRlb0hvbWUiLCJjb250ZW50IiwiZG90VmlkZW8iLCJpdGVtIiwiZ29UbyIsImNhcnNvdXNlbFBvc3RIb21lQnRuIiwiY2Fyb3NlbFBvc3RMaXN0IiwiY2Fyc291c2VsUG9zdEhvbWUiLCJjYXRlZ29yeUxpc3QiLCJvbmNsaWNrIiwiY2F0ZWdvcnkiLCJhcGlVcmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0ZWdvcnlTaG93IiwidGh1bWJuYWlsIiwidXJsIiwidGl0bGUiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibG9hZG1vcmVCdG5XaWtpIiwibG9hZG1vcmVCdG5TaG93Iiwib2Zmc2V0TG9hZCIsImxvYWRtb3JlVXJsIiwiZGlzcGxheSIsImZyZWVBcHBVcmwiLCJmcmVlR2FtZVJhbmtpbmciLCJyYXRpbmdDb3VudCIsInJvdW5kIiwicmF0aW5nIiwicmF0aW5nTGVmdCIsImljb24iLCJzbHVnIiwiaWQiLCJncm9zc2luZ0FwcFVybCIsImdyb3NzaW5nR2FtZVJhbmtpbmciLCJkb21Cb2R5IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNjcm9sbEZ1bmN0aW9uIiwicGFnZVlPZmZzZXQiLCJiYWNrVG9Ub3BCdXR0b24iLCJjb250YWlucyIsInNldFRpbWVvdXQiLCJzbW9vdGhTY3JvbGxCYWNrVG9Ub3AiLCJ0YXJnZXRQb3NpdGlvbiIsInN0YXJ0UG9zaXRpb24iLCJkaXN0YW5jZSIsInN0YXJ0Iiwic3RlcCIsInRpbWVzdGFtcCIsInByb2dyZXNzIiwic2Nyb2xsVG8iLCJlYXNlSW5PdXRDdWJpYyIsIm9uc2Nyb2xsIiwic2Nyb2xsRml4ZWRTaWRlQmFyIiwic2lkZWJhckxlZnRzY3JvbGwiLCJnZXRFbGVtZW50QnlJZCIsInNpZGViYXJSaWdodHNjcm9sbCIsInNpZGViYXJNZW51UmFua2luZ3Njcm9sbCIsInNpZGViYXJNZW51TGVmdGNyb2xsIiwic3RpY2t5TGVmdCIsIm9mZnNldFRvcCIsImNoZWNrIiwic3Vic3RyIiwidmVuZG9yIiwib3BlcmEiLCJpZnJhbWUiLCJpbWciLCJ2aWRlbyIsIkx1dVZhb0xvY2FsU3RvcmFnZSIsIm5hbWVBcnJheSIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwianNvbkRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0SXRlbSIsIkxheUxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZSIsImlmcmFtZVJlc3Bvc2l2ZSIsImltZ1Jlc3Bvc2l2ZSIsInZpZGVvUmVzcG9zaXZlIiwibGF6eUxvYWRJbnN0YW5jZSIsIkxhenlMb2FkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLGdFQUFnRSxNQUFNLHlFQUF5RSxNQUFNLFNBQVMsUUFBUSx3RkFBd0YsTUFBTSxnQkFBZ0IsTUFBTSwwREFBMEQsTUFBTSxTQUFTLFFBQVEsRUFBRSx1QkFBdUIsUUFBUSxPQUFPLG1FQUFtRSxNQUFNLGVBQWUsUUFBUSxFQUFFLG9CQUFvQixRQUFRLE9BQU8sc0RBQXNELE1BQU0sdURBQXVELFFBQVEsT0FBTyxNQUFNLHVEQUF1RCxNQUFNLEVBQUUs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dUwsY0FBVCxHQUF5QjtBQUN2QixPQUFLLElBQUloVyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHa1YsS0FBSyxDQUFDM1QsTUFBMUIsRUFBa0N2QixDQUFDLEVBQW5DLEVBQXVDO0FBQ25Da1YsU0FBSyxDQUFDbFYsQ0FBRCxDQUFMLENBQVN3SyxTQUFULENBQW1CQyxHQUFuQixDQUF1QixNQUF2QjtBQUNIO0FBQ0Y7O0FBQ0R1SyxNQUFNLEdBQUdjLGVBQWUsRUFBbEIsR0FBc0IsRUFBNUI7QUFDQWIsR0FBRyxHQUFHYyxZQUFZLEVBQWYsR0FBbUIsRUFBdEI7QUFDQWIsS0FBSyxHQUFHYyxjQUFjLEVBQWpCLEdBQW9CLEVBQXpCO0FBQ0EsSUFBSUMsZ0JBQWdCLEdBQUcsSUFBSUMsdURBQUosQ0FBYTtBQUFDbk8sbUJBQWlCLEVBQUU7QUFBcEIsQ0FBYixDQUF2QjtBQUNBLHdCIiwiZmlsZSI6InJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9yb290LmpzXCIpO1xuIiwiLyohXG4gKiBzaGFyZW9uIHYxLjQuMSBieSBOaWtpdGEgS2FyYW1vdlxuICogaHR0cHM6Ly9zaGFyZW9uLmpzLm9yZ1xuICovXG5cbnZhciB1cmxCdWlsZGVyTWFwID0ge2ZhY2Vib29rOihkKSA9PiBgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9JHtkLnVybH1gLGxpbmtlZGluOihkKSA9PiBgaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWUmdXJsPSR7ZC51cmx9JnRpdGxlPSR7ZC50aXRsZX1gLG1lc3NlbmdlcjooZCkgPT4gYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9kaWFsb2cvc2VuZD9hcHBfaWQ9MzYxOTAyNDU3ODE2NzYxNyZsaW5rPSR7ZC51cmx9JnJlZGlyZWN0X3VyaT0ke2QudXJsfWAsb2Rub2tsYXNzbmlraTooZCkgPT4gYGh0dHBzOi8vY29ubmVjdC5vay5ydS9vZmZlcj91cmw9JHtkLnVybH0mdGl0bGU9JHtkLnRpdGxlfSR7ZC5tZWRpYSA/IGAmaW1hZ2VVcmw9JHtkLm1lZGlhfWAgOiAnJ31gLHBpbnRlcmVzdDooZCkgPT4gYGh0dHBzOi8vcGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8/dXJsPSR7ZC51cmx9JmRlc2NyaXB0aW9uPSR7ZC50aXRsZX0ke2QubWVkaWEgPyBgJm1lZGlhPSR7ZC5tZWRpYX1gIDogJyd9YCxwb2NrZXQ6KGQpID0+IGBodHRwczovL2dldHBvY2tldC5jb20vZWRpdC5waHA/dXJsPSR7ZC51cmx9YCxyZWRkaXQ6KGQpID0+IGBodHRwczovL3d3dy5yZWRkaXQuY29tL3N1Ym1pdD90aXRsZT0ke2QudGl0bGV9JnVybD0ke2QudXJsfWAsdGVsZWdyYW06KGQpID0+IGBodHRwczovL3RlbGVncmFtLm1lL3NoYXJlL3VybD91cmw9JHtkLnVybH0ke2QudGV4dCA/IGAmdGV4dD0ke2QudGV4dH1gIDogJyd9YCx0d2l0dGVyOihkKSA9PiBgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dXJsPSR7ZC51cmx9JnRleHQ9JHtkLnRpdGxlfSR7ZC52aWEgPyBgJnZpYT0ke2QudmlhfWAgOiAnJ31gLHZpYmVyOihkKSA9PiBgdmliZXI6Ly9mb3J3YXJkP3RleHQ9JHtkLnRpdGxlfSUwRCUwQSR7ZC51cmx9JHtkLnRleHQgPyBgJTBEJTBBJTBEJTBBJHtkLnRleHR9YCA6ICcnfWAsdmtvbnRha3RlOihkKSA9PiBgaHR0cHM6Ly92ay5jb20vc2hhcmUucGhwP3VybD0ke2QudXJsfSZ0aXRsZT0ke2QudGl0bGV9JHtkLm1lZGlhID8gYCZpbWFnZT0ke2QubWVkaWF9YCA6ICcnfWAsd2hhdHNhcHA6KGQpID0+IGB3aGF0c2FwcDovL3NlbmQ/dGV4dD0ke2QudGl0bGV9JTBEJTBBJHtkLnVybH0ke2QudGV4dCA/IGAlMEQlMEElMEQlMEEke2QudGV4dH1gIDogJyd9YH07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxuXG5jb25zdCBpbml0aWFsaXplU2hhcmVvbiA9ICgpID0+IHtcbiAgY29uc3Qgc2hhcmVvbkNvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaGFyZW9uJyk7XG5cbiAgLy8gaXRlcmF0ZSBvdmVyIDxkaXYgY2xhc3M9XCJzaGFyZW9uXCI+XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hhcmVvbkNvbnRhaW5lcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAvKiogQHR5cGUgRWxlbWVudCAqL1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHNoYXJlb25Db250YWluZXJzW2ldO1xuXG4gICAgLy8gaXRlcmF0ZSBvdmVyIGNoaWxkcmVuIG9mIDxkaXYgY2xhc3M9XCJzaGFyZW9uXCI+XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIC8qKiBAdHlwZSBFbGVtZW50ICovXG4gICAgICBjb25zdCBjaGlsZCA9IGNvbnRhaW5lci5jaGlsZHJlbltqXTtcblxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTGlzdExlbmd0aCA9IGNoaWxkLmNsYXNzTGlzdC5sZW5ndGg7XG5cbiAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIGNsYXNzZXMgb2YgdGhlIGNoaWxkIGVsZW1lbnRcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBjbGFzc0xpc3RMZW5ndGg7IGsgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGNscyA9IGNoaWxkLmNsYXNzTGlzdC5pdGVtKGspO1xuXG4gICAgICAgICAgLy8gaWYgaXQncyBvbmUgb2YgdGhlIG5ldHdvcmtzXG4gICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh1cmxCdWlsZGVyTWFwLCBjbHMpKSB7XG4gICAgICAgICAgICBjb25zdCBwcmVzZXQgPSB7XG4gICAgICAgICAgICAgIHVybDogZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIGNoaWxkLmRhdGFzZXQudXJsXG4gICAgICAgICAgICAgICAgfHwgY29udGFpbmVyLmRhdGFzZXQudXJsXG4gICAgICAgICAgICAgICAgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHRpdGxlOiBlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgY2hpbGQuZGF0YXNldC50aXRsZVxuICAgICAgICAgICAgICAgIHx8IGNvbnRhaW5lci5kYXRhc2V0LnRpdGxlXG4gICAgICAgICAgICAgICAgfHwgZG9jdW1lbnQudGl0bGUsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG1lZGlhOiBlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgY2hpbGQuZGF0YXNldC5tZWRpYVxuICAgICAgICAgICAgICAgIHx8IGNvbnRhaW5lci5kYXRhc2V0Lm1lZGlhXG4gICAgICAgICAgICAgICAgfHwgJycsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHRleHQ6IGVuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBjaGlsZC5kYXRhc2V0LnRleHRcbiAgICAgICAgICAgICAgICB8fCBjb250YWluZXIuZGF0YXNldC50ZXh0XG4gICAgICAgICAgICAgICAgfHwgJycsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHZpYTogZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIGNoaWxkLmRhdGFzZXQudmlhXG4gICAgICAgICAgICAgICAgfHwgY29udGFpbmVyLmRhdGFzZXQudmlhXG4gICAgICAgICAgICAgICAgfHwgJycsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsQnVpbGRlck1hcFtjbHNdKHByZXNldCk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhJykge1xuICAgICAgICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwpO1xuICAgICAgICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub29wZW5lciBub3JlZmVycmVyJyk7XG4gICAgICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJywgJ25vb3BlbmVyLG5vcmVmZXJyZXInKS5vcGVuZXIgPSBudWxsO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7IC8vIG9uY2UgYSBuZXR3b3JrIGlzIGRldGVjdGVkIHdlIGRvbid0IHdhbnQgdG8gY2hlY2sgZnVydGhlclxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgaW5pdGlhbGl6ZVNoYXJlb24oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVTaGFyZW9uO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJTaWVtYVwiLFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuU2llbWE9dCgpOmUuU2llbWE9dCgpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChyKXtpZihpW3JdKXJldHVybiBpW3JdLmV4cG9ydHM7dmFyIG49aVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsdCksbi5sPSEwLG4uZXhwb3J0c312YXIgaT17fTtyZXR1cm4gdC5tPWUsdC5jPWksdC5kPWZ1bmN0aW9uKGUsaSxyKXt0Lm8oZSxpKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaSx7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0OnJ9KX0sdC5uPWZ1bmN0aW9uKGUpe3ZhciBpPWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiB0LmQoaSxcImFcIixpKSxpfSx0Lm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHQucD1cIlwiLHQodC5zPTApfShbZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciByPXRbaV07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxpLHIpe3JldHVybiBpJiZlKHQucHJvdG90eXBlLGkpLHImJmUodCxyKSx0fX0oKSxsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXt2YXIgaT10aGlzO2lmKHIodGhpcyxlKSx0aGlzLmNvbmZpZz1lLm1lcmdlU2V0dGluZ3ModCksdGhpcy5zZWxlY3Rvcj1cInN0cmluZ1wiPT10eXBlb2YgdGhpcy5jb25maWcuc2VsZWN0b3I/ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbmZpZy5zZWxlY3Rvcik6dGhpcy5jb25maWcuc2VsZWN0b3IsbnVsbD09PXRoaXMuc2VsZWN0b3IpdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIHdyb25nIHdpdGggeW91ciBzZWxlY3RvciDwn5itXCIpO3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuaW5uZXJFbGVtZW50cz1bXS5zbGljZS5jYWxsKHRoaXMuc2VsZWN0b3IuY2hpbGRyZW4pLHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jb25maWcuc3RhcnRJbmRleCV0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoOk1hdGgubWF4KDAsTWF0aC5taW4odGhpcy5jb25maWcuc3RhcnRJbmRleCx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSkpLHRoaXMudHJhbnNmb3JtUHJvcGVydHk9ZS53ZWJraXRPck5vdCgpLFtcInJlc2l6ZUhhbmRsZXJcIixcInRvdWNoc3RhcnRIYW5kbGVyXCIsXCJ0b3VjaGVuZEhhbmRsZXJcIixcInRvdWNobW92ZUhhbmRsZXJcIixcIm1vdXNlZG93bkhhbmRsZXJcIixcIm1vdXNldXBIYW5kbGVyXCIsXCJtb3VzZWxlYXZlSGFuZGxlclwiLFwibW91c2Vtb3ZlSGFuZGxlclwiLFwiY2xpY2tIYW5kbGVyXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7aVtlXT1pW2VdLmJpbmQoaSl9KSx0aGlzLmluaXQoKX1yZXR1cm4gcyhlLFt7a2V5OlwiYXR0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5jb25maWcuZHJhZ2dhYmxlJiYodGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLmRyYWc9e3N0YXJ0WDowLGVuZFg6MCxzdGFydFk6MCxsZXRJdEdvOm51bGwscHJldmVudENsaWNrOiExfSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy50b3VjaHN0YXJ0SGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLnRvdWNoZW5kSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy50b3VjaG1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm1vdXNlZG93bkhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm1vdXNldXBIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZWxlYXZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3VzZW1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xpY2tIYW5kbGVyKSl9fSx7a2V5OlwiZGV0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMudG91Y2hzdGFydEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy50b3VjaGVuZEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMudG91Y2htb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5tb3VzZWRvd25IYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5tb3VzZXVwSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMubW91c2VsZWF2ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMubW91c2Vtb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmNsaWNrSGFuZGxlcil9fSx7a2V5OlwiaW5pdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5hdHRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsdGhpcy5zZWxlY3Rvci5zdHlsZS5kaXJlY3Rpb249dGhpcy5jb25maWcucnRsP1wicnRsXCI6XCJsdHJcIix0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSx0aGlzLmNvbmZpZy5vbkluaXQuY2FsbCh0aGlzKX19LHtrZXk6XCJidWlsZFNsaWRlckZyYW1lXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlLHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlOnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7dGhpcy5zbGlkZXJGcmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2lkdGg9ZSp0K1wicHhcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmNvbmZpZy5kcmFnZ2FibGUmJih0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aWYodGhpcy5jb25maWcubG9vcClmb3IodmFyIHI9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2U7cjx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3IrKyl7dmFyIG49dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbcl0uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChuKX1mb3IodmFyIHM9MDtzPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cysrKXt2YXIgbD10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tzXSk7aS5hcHBlbmRDaGlsZChsKX1pZih0aGlzLmNvbmZpZy5sb29wKWZvcih2YXIgbz0wO288dGhpcy5wZXJQYWdlO28rKyl7dmFyIGE9dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbb10uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChhKX10aGlzLnNsaWRlckZyYW1lLmFwcGVuZENoaWxkKGkpLHRoaXMuc2VsZWN0b3IuaW5uZXJIVE1MPVwiXCIsdGhpcy5zZWxlY3Rvci5hcHBlbmRDaGlsZCh0aGlzLnNsaWRlckZyYW1lKSx0aGlzLnNsaWRlVG9DdXJyZW50KCl9fSx7a2V5OlwiYnVpbGRTbGlkZXJGcmFtZUl0ZW1cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiB0LnN0eWxlLmNzc0Zsb2F0PXRoaXMuY29uZmlnLnJ0bD9cInJpZ2h0XCI6XCJsZWZ0XCIsdC5zdHlsZS5mbG9hdD10aGlzLmNvbmZpZy5ydGw/XCJyaWdodFwiOlwibGVmdFwiLHQuc3R5bGUud2lkdGg9KHRoaXMuY29uZmlnLmxvb3A/MTAwLyh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlKToxMDAvdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCkrXCIlXCIsdC5hcHBlbmRDaGlsZChlKSx0fX0se2tleTpcInJlc29sdmVTbGlkZXNOdW1iZXJcIix2YWx1ZTpmdW5jdGlvbigpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0aGlzLmNvbmZpZy5wZXJQYWdlKXRoaXMucGVyUGFnZT10aGlzLmNvbmZpZy5wZXJQYWdlO2Vsc2UgaWYoXCJvYmplY3RcIj09PW4odGhpcy5jb25maWcucGVyUGFnZSkpe3RoaXMucGVyUGFnZT0xO2Zvcih2YXIgZSBpbiB0aGlzLmNvbmZpZy5wZXJQYWdlKXdpbmRvdy5pbm5lcldpZHRoPj1lJiYodGhpcy5wZXJQYWdlPXRoaXMuY29uZmlnLnBlclBhZ2VbZV0pfX19LHtrZXk6XCJwcmV2XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MSx0PWFyZ3VtZW50c1sxXTtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO2lmKHRoaXMuY29uZmlnLmxvb3Ape2lmKHRoaXMuY3VycmVudFNsaWRlLWU8MCl7dGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO3ZhciByPXRoaXMuY3VycmVudFNsaWRlK3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgsbj10aGlzLnBlclBhZ2Uscz1yK24sbD0odGhpcy5jb25maWcucnRsPzE6LTEpKnMqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLG89dGhpcy5jb25maWcuZHJhZ2dhYmxlP3RoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFg6MDt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKGwrbykrXCJweCwgMCwgMClcIix0aGlzLmN1cnJlbnRTbGlkZT1yLWV9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmN1cnJlbnRTbGlkZS1lfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9TWF0aC5tYXgodGhpcy5jdXJyZW50U2xpZGUtZSwwKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwibmV4dFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjEsdD1hcmd1bWVudHNbMV07aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTtpZih0aGlzLmNvbmZpZy5sb29wKXtpZih0aGlzLmN1cnJlbnRTbGlkZStlPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKXt0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCk7dmFyIHI9dGhpcy5jdXJyZW50U2xpZGUtdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCxuPXRoaXMucGVyUGFnZSxzPXIrbixsPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqcyoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSksbz10aGlzLmNvbmZpZy5kcmFnZ2FibGU/dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WDowO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisobCtvKStcInB4LCAwLCAwKVwiLHRoaXMuY3VycmVudFNsaWRlPXIrZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY3VycmVudFNsaWRlK2V9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT1NYXRoLm1pbih0aGlzLmN1cnJlbnRTbGlkZStlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwiZGlzYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nfX0se2tleTpcImVuYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCBcIit0aGlzLmNvbmZpZy5kdXJhdGlvbitcIm1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgXCIrdGhpcy5jb25maWcuZHVyYXRpb24rXCJtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmd9fSx7a2V5OlwiZ29Ub1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTt0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmNvbmZpZy5sb29wP2UldGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDpNYXRoLm1pbihNYXRoLm1heChlLDApLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKSxpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJzbGlkZVRvQ3VycmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsaT10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxyPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqaSoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSk7ZT9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LmVuYWJsZVRyYW5zaXRpb24oKSx0LnNsaWRlckZyYW1lLnN0eWxlW3QudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifSl9KTp0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifX0se2tleTpcInVwZGF0ZUFmdGVyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9KHRoaXMuY29uZmlnLnJ0bD8tMToxKSoodGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCksdD1NYXRoLmFicyhlKSxpPXRoaXMuY29uZmlnLm11bHRpcGxlRHJhZz9NYXRoLmNlaWwodC8odGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSkpOjEscj1lPjAmJnRoaXMuY3VycmVudFNsaWRlLWk8MCxuPWU8MCYmdGhpcy5jdXJyZW50U2xpZGUraT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZTtlPjAmJnQ+dGhpcy5jb25maWcudGhyZXNob2xkJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPnRoaXMucGVyUGFnZT90aGlzLnByZXYoaSk6ZTwwJiZ0PnRoaXMuY29uZmlnLnRocmVzaG9sZCYmdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aD50aGlzLnBlclBhZ2UmJnRoaXMubmV4dChpKSx0aGlzLnNsaWRlVG9DdXJyZW50KHJ8fG4pfX0se2tleTpcInJlc2l6ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoJiYodGhpcy5jdXJyZW50U2xpZGU9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlPzA6dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpfX0se2tleTpcImNsZWFyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5kcmFnPXtzdGFydFg6MCxlbmRYOjAsc3RhcnRZOjAsbGV0SXRHbzpudWxsLHByZXZlbnRDbGljazp0aGlzLmRyYWcucHJldmVudENsaWNrfX19LHtrZXk6XCJ0b3VjaHN0YXJ0SGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpey0xIT09W1wiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiXS5pbmRleE9mKGUudGFyZ2V0Lm5vZGVOYW1lKXx8KGUuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMCx0aGlzLmRyYWcuc3RhcnRYPWUudG91Y2hlc1swXS5wYWdlWCx0aGlzLmRyYWcuc3RhcnRZPWUudG91Y2hlc1swXS5wYWdlWSl9fSx7a2V5OlwidG91Y2hlbmRIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuZHJhZy5lbmRYJiZ0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCl9fSx7a2V5OlwidG91Y2htb3ZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUuc3RvcFByb3BhZ2F0aW9uKCksbnVsbD09PXRoaXMuZHJhZy5sZXRJdEdvJiYodGhpcy5kcmFnLmxldEl0R289TWF0aC5hYnModGhpcy5kcmFnLnN0YXJ0WS1lLnRvdWNoZXNbMF0ucGFnZVkpPE1hdGguYWJzKHRoaXMuZHJhZy5zdGFydFgtZS50b3VjaGVzWzBdLnBhZ2VYKSksdGhpcy5wb2ludGVyRG93biYmdGhpcy5kcmFnLmxldEl0R28pe2UucHJldmVudERlZmF1bHQoKSx0aGlzLmRyYWcuZW5kWD1lLnRvdWNoZXNbMF0ucGFnZVgsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlZG93bkhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXstMSE9PVtcIlRFWFRBUkVBXCIsXCJPUFRJT05cIixcIklOUFVUXCIsXCJTRUxFQ1RcIl0uaW5kZXhPZihlLnRhcmdldC5ub2RlTmFtZSl8fChlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSEwLHRoaXMuZHJhZy5zdGFydFg9ZS5wYWdlWCl9fSx7a2V5OlwibW91c2V1cEhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmRyYWcuZW5kWCYmdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpfX0se2tleTpcIm1vdXNlbW92ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlLnByZXZlbnREZWZhdWx0KCksdGhpcy5wb2ludGVyRG93bil7XCJBXCI9PT1lLnRhcmdldC5ub2RlTmFtZSYmKHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITApLHRoaXMuZHJhZy5lbmRYPWUucGFnZVgsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJiaW5nXCIsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlbGVhdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5wb2ludGVyRG93biYmKHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmRyYWcuZW5kWD1lLnBhZ2VYLHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITEsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpKX19LHtrZXk6XCJjbGlja0hhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmRyYWcucHJldmVudENsaWNrJiZlLnByZXZlbnREZWZhdWx0KCksdGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMX19LHtrZXk6XCJyZW1vdmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKGU8MHx8ZT49dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJJdGVtIHRvIHJlbW92ZSBkb2Vzbid0IGV4aXN0IPCfmK1cIik7dmFyIGk9ZTx0aGlzLmN1cnJlbnRTbGlkZSxyPXRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZS0xPT09ZTsoaXx8cikmJnRoaXMuY3VycmVudFNsaWRlLS0sdGhpcy5pbm5lckVsZW1lbnRzLnNwbGljZShlLDEpLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJpbnNlcnRcIix2YWx1ZTpmdW5jdGlvbihlLHQsaSl7aWYodDwwfHx0PnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSl0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaW5zZXQgaXQgYXQgdGhpcyBpbmRleCDwn5itXCIpO2lmKC0xIT09dGhpcy5pbm5lckVsZW1lbnRzLmluZGV4T2YoZSkpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNhbWUgaXRlbSBpbiBhIGNhcm91c2VsPyBSZWFsbHk/IE5vcGUg8J+YrVwiKTt2YXIgcj10PD10aGlzLmN1cnJlbnRTbGlkZT4wJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3RoaXMuY3VycmVudFNsaWRlPXI/dGhpcy5jdXJyZW50U2xpZGUrMTp0aGlzLmN1cnJlbnRTbGlkZSx0aGlzLmlubmVyRWxlbWVudHMuc3BsaWNlKHQsMCxlKSx0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSxpJiZpLmNhbGwodGhpcyl9fSx7a2V5OlwicHJlcGVuZFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5pbnNlcnQoZSwwKSx0JiZ0LmNhbGwodGhpcyl9fSx7a2V5OlwiYXBwZW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmluc2VydChlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImRlc3Ryb3lcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF0sdD1hcmd1bWVudHNbMV07aWYodGhpcy5kZXRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cImF1dG9cIixlKXtmb3IodmFyIGk9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHI9MDtyPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cisrKWkuYXBwZW5kQ2hpbGQodGhpcy5pbm5lckVsZW1lbnRzW3JdKTt0aGlzLnNlbGVjdG9yLmlubmVySFRNTD1cIlwiLHRoaXMuc2VsZWN0b3IuYXBwZW5kQ2hpbGQoaSksdGhpcy5zZWxlY3Rvci5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKX10JiZ0LmNhbGwodGhpcyl9fV0sW3trZXk6XCJtZXJnZVNldHRpbmdzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9e3NlbGVjdG9yOlwiLnNpZW1hXCIsZHVyYXRpb246MjAwLGVhc2luZzpcImVhc2Utb3V0XCIscGVyUGFnZToxLHN0YXJ0SW5kZXg6MCxkcmFnZ2FibGU6ITAsbXVsdGlwbGVEcmFnOiEwLHRocmVzaG9sZDoyMCxsb29wOiExLHJ0bDohMSxvbkluaXQ6ZnVuY3Rpb24oKXt9LG9uQ2hhbmdlOmZ1bmN0aW9uKCl7fX0saT1lO2Zvcih2YXIgciBpbiBpKXRbcl09aVtyXTtyZXR1cm4gdH19LHtrZXk6XCJ3ZWJraXRPck5vdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0/XCJ0cmFuc2Zvcm1cIjpcIldlYmtpdFRyYW5zZm9ybVwifX1dKSxlfSgpO3QuZGVmYXVsdD1sLGUuZXhwb3J0cz10LmRlZmF1bHR9XSl9KTsiLCIhZnVuY3Rpb24odCxuKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1uKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShuKToodD10fHxzZWxmKS5MYXp5TG9hZD1uKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCgpe3JldHVybih0PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspe3ZhciBlPWFyZ3VtZW50c1tuXTtmb3IodmFyIGkgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxpKSYmKHRbaV09ZVtpXSl9cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyxlPW4mJiEoXCJvbnNjcm9sbFwiaW4gd2luZG93KXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG5hdmlnYXRvciYmLyhnbGV8aW5nfHJvKWJvdHxjcmF3bHxzcGlkZXIvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGk9biYmXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiaW4gd2luZG93LGE9biYmXCJjbGFzc0xpc3RcImluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpLG89biYmd2luZG93LmRldmljZVBpeGVsUmF0aW8+MSxyPXtlbGVtZW50c19zZWxlY3RvcjpcIklNR1wiLGNvbnRhaW5lcjplfHxuP2RvY3VtZW50Om51bGwsdGhyZXNob2xkOjMwMCx0aHJlc2hvbGRzOm51bGwsZGF0YV9zcmM6XCJzcmNcIixkYXRhX3NyY3NldDpcInNyY3NldFwiLGRhdGFfc2l6ZXM6XCJzaXplc1wiLGRhdGFfYmc6XCJiZ1wiLGRhdGFfYmdfaGlkcGk6XCJiZy1oaWRwaVwiLGRhdGFfYmdfbXVsdGk6XCJiZy1tdWx0aVwiLGRhdGFfYmdfbXVsdGlfaGlkcGk6XCJiZy1tdWx0aS1oaWRwaVwiLGRhdGFfcG9zdGVyOlwicG9zdGVyXCIsY2xhc3NfYXBwbGllZDpcImFwcGxpZWRcIixjbGFzc19sb2FkaW5nOlwibG9hZGluZ1wiLGNsYXNzX2xvYWRlZDpcImxvYWRlZFwiLGNsYXNzX2Vycm9yOlwiZXJyb3JcIix1bm9ic2VydmVfY29tcGxldGVkOiEwLHVub2JzZXJ2ZV9lbnRlcmVkOiExLGNhbmNlbF9vbl9leGl0OiExLGNhbGxiYWNrX2VudGVyOm51bGwsY2FsbGJhY2tfZXhpdDpudWxsLGNhbGxiYWNrX2FwcGxpZWQ6bnVsbCxjYWxsYmFja19sb2FkaW5nOm51bGwsY2FsbGJhY2tfbG9hZGVkOm51bGwsY2FsbGJhY2tfZXJyb3I6bnVsbCxjYWxsYmFja19maW5pc2g6bnVsbCxjYWxsYmFja19jYW5jZWw6bnVsbCx1c2VfbmF0aXZlOiExfSxjPWZ1bmN0aW9uKG4pe3JldHVybiB0KHt9LHIsbil9LGw9ZnVuY3Rpb24odCxuKXt2YXIgZSxpPW5ldyB0KG4pO3RyeXtlPW5ldyBDdXN0b21FdmVudChcIkxhenlMb2FkOjpJbml0aWFsaXplZFwiLHtkZXRhaWw6e2luc3RhbmNlOml9fSl9Y2F0Y2godCl7KGU9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKSkuaW5pdEN1c3RvbUV2ZW50KFwiTGF6eUxvYWQ6OkluaXRpYWxpemVkXCIsITEsITEse2luc3RhbmNlOml9KX13aW5kb3cuZGlzcGF0Y2hFdmVudChlKX0scz1mdW5jdGlvbih0LG4pe3JldHVybiB0LmdldEF0dHJpYnV0ZShcImRhdGEtXCIrbil9LHU9ZnVuY3Rpb24odCxuLGUpe3ZhciBpPVwiZGF0YS1cIituO251bGwhPT1lP3Quc2V0QXR0cmlidXRlKGksZSk6dC5yZW1vdmVBdHRyaWJ1dGUoaSl9LGQ9ZnVuY3Rpb24odCl7cmV0dXJuIHModCxcImxsLXN0YXR1c1wiKX0sZj1mdW5jdGlvbih0LG4pe3JldHVybiB1KHQsXCJsbC1zdGF0dXNcIixuKX0sXz1mdW5jdGlvbih0KXtyZXR1cm4gZih0LG51bGwpfSxnPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT09ZCh0KX0sdj1mdW5jdGlvbih0KXtyZXR1cm5cIm5hdGl2ZVwiPT09ZCh0KX0sYj1mdW5jdGlvbih0LG4sZSxpKXt0JiYodm9pZCAwPT09aT92b2lkIDA9PT1lP3Qobik6dChuLGUpOnQobixlLGkpKX0scD1mdW5jdGlvbih0LG4pe2E/dC5jbGFzc0xpc3QuYWRkKG4pOnQuY2xhc3NOYW1lKz0odC5jbGFzc05hbWU/XCIgXCI6XCJcIikrbn0saD1mdW5jdGlvbih0LG4pe2E/dC5jbGFzc0xpc3QucmVtb3ZlKG4pOnQuY2xhc3NOYW1lPXQuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxzKylcIituK1wiKFxcXFxzK3wkKVwiKSxcIiBcIikucmVwbGFjZSgvXlxccysvLFwiXCIpLnJlcGxhY2UoL1xccyskLyxcIlwiKX0sbT1mdW5jdGlvbih0KXtyZXR1cm4gdC5sbFRlbXBJbWFnZX0sRT1mdW5jdGlvbih0LG4pe2lmKG4pe3ZhciBlPW4uX29ic2VydmVyO2UmJmUudW5vYnNlcnZlKHQpfX0sST1mdW5jdGlvbih0LG4pe3QmJih0LmxvYWRpbmdDb3VudCs9bil9LEE9ZnVuY3Rpb24odCxuKXt0JiYodC50b0xvYWRDb3VudD1uKX0sTD1mdW5jdGlvbih0KXtmb3IodmFyIG4sZT1bXSxpPTA7bj10LmNoaWxkcmVuW2ldO2krPTEpXCJTT1VSQ0VcIj09PW4udGFnTmFtZSYmZS5wdXNoKG4pO3JldHVybiBlfSx5PWZ1bmN0aW9uKHQsbixlKXtlJiZ0LnNldEF0dHJpYnV0ZShuLGUpfSx3PWZ1bmN0aW9uKHQsbil7dC5yZW1vdmVBdHRyaWJ1dGUobil9LGs9ZnVuY3Rpb24odCl7cmV0dXJuISF0LmxsT3JpZ2luYWxBdHRyc30sej1mdW5jdGlvbih0KXtpZighayh0KSl7dmFyIG49e307bi5zcmM9dC5nZXRBdHRyaWJ1dGUoXCJzcmNcIiksbi5zcmNzZXQ9dC5nZXRBdHRyaWJ1dGUoXCJzcmNzZXRcIiksbi5zaXplcz10LmdldEF0dHJpYnV0ZShcInNpemVzXCIpLHQubGxPcmlnaW5hbEF0dHJzPW59fSxPPWZ1bmN0aW9uKHQpe2lmKGsodCkpe3ZhciBuPXQubGxPcmlnaW5hbEF0dHJzO3kodCxcInNyY1wiLG4uc3JjKSx5KHQsXCJzcmNzZXRcIixuLnNyY3NldCkseSh0LFwic2l6ZXNcIixuLnNpemVzKX19LEM9ZnVuY3Rpb24odCxuKXt5KHQsXCJzaXplc1wiLHModCxuLmRhdGFfc2l6ZXMpKSx5KHQsXCJzcmNzZXRcIixzKHQsbi5kYXRhX3NyY3NldCkpLHkodCxcInNyY1wiLHModCxuLmRhdGFfc3JjKSl9LE09ZnVuY3Rpb24odCl7dyh0LFwic3JjXCIpLHcodCxcInNyY3NldFwiKSx3KHQsXCJzaXplc1wiKX0sTj1mdW5jdGlvbih0LG4pe3ZhciBlPXQucGFyZW50Tm9kZTtlJiZcIlBJQ1RVUkVcIj09PWUudGFnTmFtZSYmTChlKS5mb3JFYWNoKG4pfSx4PWZ1bmN0aW9uKHQsbil7TCh0KS5mb3JFYWNoKG4pfSxSPXtJTUc6ZnVuY3Rpb24odCxuKXtOKHQsKGZ1bmN0aW9uKHQpe3oodCksQyh0LG4pfSkpLHoodCksQyh0LG4pfSxJRlJBTUU6ZnVuY3Rpb24odCxuKXt5KHQsXCJzcmNcIixzKHQsbi5kYXRhX3NyYykpfSxWSURFTzpmdW5jdGlvbih0LG4pe3godCwoZnVuY3Rpb24odCl7eSh0LFwic3JjXCIscyh0LG4uZGF0YV9zcmMpKX0pKSx5KHQsXCJwb3N0ZXJcIixzKHQsbi5kYXRhX3Bvc3RlcikpLHkodCxcInNyY1wiLHModCxuLmRhdGFfc3JjKSksdC5sb2FkKCl9fSxHPWZ1bmN0aW9uKHQsbil7dmFyIGU9Ult0LnRhZ05hbWVdO2UmJmUodCxuKX0sVD1mdW5jdGlvbih0LG4sZSl7SShlLDEpLHAodCxuLmNsYXNzX2xvYWRpbmcpLGYodCxcImxvYWRpbmdcIiksYihuLmNhbGxiYWNrX2xvYWRpbmcsdCxlKX0sRD17SU1HOmZ1bmN0aW9uKHQsbil7dSh0LG4uZGF0YV9zcmMsbnVsbCksdSh0LG4uZGF0YV9zcmNzZXQsbnVsbCksdSh0LG4uZGF0YV9zaXplcyxudWxsKSxOKHQsKGZ1bmN0aW9uKHQpe3UodCxuLmRhdGFfc3Jjc2V0LG51bGwpLHUodCxuLmRhdGFfc2l6ZXMsbnVsbCl9KSl9LElGUkFNRTpmdW5jdGlvbih0LG4pe3UodCxuLmRhdGFfc3JjLG51bGwpfSxWSURFTzpmdW5jdGlvbih0LG4pe3UodCxuLmRhdGFfc3JjLG51bGwpLHUodCxuLmRhdGFfcG9zdGVyLG51bGwpLHgodCwoZnVuY3Rpb24odCl7dSh0LG4uZGF0YV9zcmMsbnVsbCl9KSl9fSxGPWZ1bmN0aW9uKHQsbil7dSh0LG4uZGF0YV9iZ19tdWx0aSxudWxsKSx1KHQsbi5kYXRhX2JnX211bHRpX2hpZHBpLG51bGwpfSxWPWZ1bmN0aW9uKHQsbil7dmFyIGU9RFt0LnRhZ05hbWVdO2U/ZSh0LG4pOmZ1bmN0aW9uKHQsbil7dSh0LG4uZGF0YV9iZyxudWxsKSx1KHQsbi5kYXRhX2JnX2hpZHBpLG51bGwpfSh0LG4pfSxqPVtcIklNR1wiLFwiSUZSQU1FXCIsXCJWSURFT1wiXSxQPWZ1bmN0aW9uKHQsbil7IW58fGZ1bmN0aW9uKHQpe3JldHVybiB0LmxvYWRpbmdDb3VudD4wfShuKXx8ZnVuY3Rpb24odCl7cmV0dXJuIHQudG9Mb2FkQ291bnQ+MH0obil8fGIodC5jYWxsYmFja19maW5pc2gsbil9LFM9ZnVuY3Rpb24odCxuLGUpe3QuYWRkRXZlbnRMaXN0ZW5lcihuLGUpLHQubGxFdkxpc25yc1tuXT1lfSxVPWZ1bmN0aW9uKHQsbixlKXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIobixlKX0sJD1mdW5jdGlvbih0KXtyZXR1cm4hIXQubGxFdkxpc25yc30scT1mdW5jdGlvbih0KXtpZigkKHQpKXt2YXIgbj10LmxsRXZMaXNucnM7Zm9yKHZhciBlIGluIG4pe3ZhciBpPW5bZV07VSh0LGUsaSl9ZGVsZXRlIHQubGxFdkxpc25yc319LEg9ZnVuY3Rpb24odCxuLGUpeyFmdW5jdGlvbih0KXtkZWxldGUgdC5sbFRlbXBJbWFnZX0odCksSShlLC0xKSxmdW5jdGlvbih0KXt0JiYodC50b0xvYWRDb3VudC09MSl9KGUpLGgodCxuLmNsYXNzX2xvYWRpbmcpLG4udW5vYnNlcnZlX2NvbXBsZXRlZCYmRSh0LGUpfSxCPWZ1bmN0aW9uKHQsbixlKXt2YXIgaT1tKHQpfHx0OyQoaSl8fGZ1bmN0aW9uKHQsbixlKXskKHQpfHwodC5sbEV2TGlzbnJzPXt9KTt2YXIgaT1cIlZJREVPXCI9PT10LnRhZ05hbWU/XCJsb2FkZWRkYXRhXCI6XCJsb2FkXCI7Uyh0LGksbiksUyh0LFwiZXJyb3JcIixlKX0oaSwoZnVuY3Rpb24oYSl7IWZ1bmN0aW9uKHQsbixlLGkpe3ZhciBhPXYobik7SChuLGUsaSkscChuLGUuY2xhc3NfbG9hZGVkKSxmKG4sXCJsb2FkZWRcIiksVihuLGUpLGIoZS5jYWxsYmFja19sb2FkZWQsbixpKSxhfHxQKGUsaSl9KDAsdCxuLGUpLHEoaSl9KSwoZnVuY3Rpb24oYSl7IWZ1bmN0aW9uKHQsbixlLGkpe3ZhciBhPXYobik7SChuLGUsaSkscChuLGUuY2xhc3NfZXJyb3IpLGYobixcImVycm9yXCIpLGIoZS5jYWxsYmFja19lcnJvcixuLGkpLGF8fFAoZSxpKX0oMCx0LG4sZSkscShpKX0pKX0sSj1mdW5jdGlvbih0LG4sZSl7IWZ1bmN0aW9uKHQpe3QubGxUZW1wSW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKX0odCksQih0LG4sZSksZnVuY3Rpb24odCxuLGUpe3ZhciBpPXModCxuLmRhdGFfYmcpLGE9cyh0LG4uZGF0YV9iZ19oaWRwaSkscj1vJiZhP2E6aTtyJiYodC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J3VybChcIicuY29uY2F0KHIsJ1wiKScpLG0odCkuc2V0QXR0cmlidXRlKFwic3JjXCIsciksVCh0LG4sZSkpfSh0LG4sZSksZnVuY3Rpb24odCxuLGUpe3ZhciBpPXModCxuLmRhdGFfYmdfbXVsdGkpLGE9cyh0LG4uZGF0YV9iZ19tdWx0aV9oaWRwaSkscj1vJiZhP2E6aTtyJiYodC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9cixmdW5jdGlvbih0LG4sZSl7cCh0LG4uY2xhc3NfYXBwbGllZCksZih0LFwiYXBwbGllZFwiKSxGKHQsbiksbi51bm9ic2VydmVfY29tcGxldGVkJiZFKHQsbiksYihuLmNhbGxiYWNrX2FwcGxpZWQsdCxlKX0odCxuLGUpKX0odCxuLGUpfSxLPWZ1bmN0aW9uKHQsbixlKXshZnVuY3Rpb24odCl7cmV0dXJuIGouaW5kZXhPZih0LnRhZ05hbWUpPi0xfSh0KT9KKHQsbixlKTpmdW5jdGlvbih0LG4sZSl7Qih0LG4sZSksRyh0LG4pLFQodCxuLGUpfSh0LG4sZSl9LFE9W1wiSU1HXCIsXCJJRlJBTUVcIl0sVz1mdW5jdGlvbih0KXtyZXR1cm4gdC51c2VfbmF0aXZlJiZcImxvYWRpbmdcImluIEhUTUxJbWFnZUVsZW1lbnQucHJvdG90eXBlfSxYPWZ1bmN0aW9uKHQsbixlKXt0LmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gdC5pc0ludGVyc2VjdGluZ3x8dC5pbnRlcnNlY3Rpb25SYXRpbz4wfSh0KT9mdW5jdGlvbih0LG4sZSxpKXtiKGUuY2FsbGJhY2tfZW50ZXIsdCxuLGkpLGZ1bmN0aW9uKHQsbixlKXtuLnVub2JzZXJ2ZV9lbnRlcmVkJiZFKHQsZSl9KHQsZSxpKSxmdW5jdGlvbih0KXtyZXR1cm4hZyh0KX0odCl8fEsodCxlLGkpfSh0LnRhcmdldCx0LG4sZSk6ZnVuY3Rpb24odCxuLGUsaSl7Zyh0KXx8KGZ1bmN0aW9uKHQsbixlLGkpe2UuY2FuY2VsX29uX2V4aXQmJmZ1bmN0aW9uKHQpe3JldHVyblwibG9hZGluZ1wiPT09ZCh0KX0odCkmJlwiSU1HXCI9PT10LnRhZ05hbWUmJihxKHQpLGZ1bmN0aW9uKHQpe04odCwoZnVuY3Rpb24odCl7TSh0KX0pKSxNKHQpfSh0KSxmdW5jdGlvbih0KXtOKHQsKGZ1bmN0aW9uKHQpe08odCl9KSksTyh0KX0odCksaCh0LGUuY2xhc3NfbG9hZGluZyksSShpLC0xKSxfKHQpLGIoZS5jYWxsYmFja19jYW5jZWwsdCxuLGkpKX0odCxuLGUsaSksYihlLmNhbGxiYWNrX2V4aXQsdCxuLGkpKX0odC50YXJnZXQsdCxuLGUpfSkpfSxZPWZ1bmN0aW9uKHQpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0KX0sWj1mdW5jdGlvbih0KXtyZXR1cm4gdC5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCh0LmVsZW1lbnRzX3NlbGVjdG9yKX0sdHQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVyblwiZXJyb3JcIj09PWQodCl9KHQpfSxudD1mdW5jdGlvbih0LG4pe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gWSh0KS5maWx0ZXIoZyl9KHR8fFoobikpfSxldD1mdW5jdGlvbih0LGUpe3ZhciBhPWModCk7dGhpcy5fc2V0dGluZ3M9YSx0aGlzLmxvYWRpbmdDb3VudD0wLGZ1bmN0aW9uKHQsbil7aSYmIVcodCkmJihuLl9vYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGZ1bmN0aW9uKGUpe1goZSx0LG4pfSksZnVuY3Rpb24odCl7cmV0dXJue3Jvb3Q6dC5jb250YWluZXI9PT1kb2N1bWVudD9udWxsOnQuY29udGFpbmVyLHJvb3RNYXJnaW46dC50aHJlc2hvbGRzfHx0LnRocmVzaG9sZCtcInB4XCJ9fSh0KSkpfShhLHRoaXMpLGZ1bmN0aW9uKHQsZSl7biYmd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIiwoZnVuY3Rpb24oKXshZnVuY3Rpb24odCxuKXt2YXIgZTsoZT1aKHQpLFkoZSkuZmlsdGVyKHR0KSkuZm9yRWFjaCgoZnVuY3Rpb24obil7aChuLHQuY2xhc3NfZXJyb3IpLF8obil9KSksbi51cGRhdGUoKX0odCxlKX0pKX0oYSx0aGlzKSx0aGlzLnVwZGF0ZShlKX07cmV0dXJuIGV0LnByb3RvdHlwZT17dXBkYXRlOmZ1bmN0aW9uKHQpe3ZhciBuLGEsbz10aGlzLl9zZXR0aW5ncyxyPW50KHQsbyk7QSh0aGlzLHIubGVuZ3RoKSwhZSYmaT9XKG8pP2Z1bmN0aW9uKHQsbixlKXt0LmZvckVhY2goKGZ1bmN0aW9uKHQpey0xIT09US5pbmRleE9mKHQudGFnTmFtZSkmJih0LnNldEF0dHJpYnV0ZShcImxvYWRpbmdcIixcImxhenlcIiksZnVuY3Rpb24odCxuLGUpe0IodCxuLGUpLEcodCxuKSxWKHQsbiksZih0LFwibmF0aXZlXCIpfSh0LG4sZSkpfSkpLEEoZSwwKX0ocixvLHRoaXMpOihhPXIsZnVuY3Rpb24odCl7dC5kaXNjb25uZWN0KCl9KG49dGhpcy5fb2JzZXJ2ZXIpLGZ1bmN0aW9uKHQsbil7bi5mb3JFYWNoKChmdW5jdGlvbihuKXt0Lm9ic2VydmUobil9KSl9KG4sYSkpOnRoaXMubG9hZEFsbChyKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuX29ic2VydmVyJiZ0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCksWih0aGlzLl9zZXR0aW5ncykuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZGVsZXRlIHQubGxPcmlnaW5hbEF0dHJzfSkpLGRlbGV0ZSB0aGlzLl9vYnNlcnZlcixkZWxldGUgdGhpcy5fc2V0dGluZ3MsZGVsZXRlIHRoaXMubG9hZGluZ0NvdW50LGRlbGV0ZSB0aGlzLnRvTG9hZENvdW50fSxsb2FkQWxsOmZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMsZT10aGlzLl9zZXR0aW5ncztudCh0LGUpLmZvckVhY2goKGZ1bmN0aW9uKHQpe0sodCxlLG4pfSkpfX0sZXQubG9hZD1mdW5jdGlvbih0LG4pe3ZhciBlPWMobik7Syh0LGUpfSxldC5yZXNldFN0YXR1cz1mdW5jdGlvbih0KXtfKHQpfSxuJiZmdW5jdGlvbih0LG4pe2lmKG4paWYobi5sZW5ndGgpZm9yKHZhciBlLGk9MDtlPW5baV07aSs9MSlsKHQsZSk7ZWxzZSBsKHQsbil9KGV0LHdpbmRvdy5sYXp5TG9hZE9wdGlvbnMpLGV0fSkpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgU2llbWEgZnJvbSAnc2llbWEnO1xyXG5pbXBvcnQge21vYmlsZUFuZFRhYmxldENoZWNrfSBmcm9tICcuLi9wYXJ0dGVuL21vYmlsZUFuZFRhYmxldENoZWNrJztcclxudmFyICBob21lcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkuaG9tZScpO1xyXG5pZigod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIiB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL3dvbGZhY3RpdmUtZ2FtZXdpa2kvXCIpICYmIGhvbWVwYWdlKXtcclxuICAgIC8qRmlyc3QgQ2Fyb3VzZWwqL1xyXG4gIHZhciBwcm90b2NvbCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbDtcclxuICB2YXIgaG9zdG5hbWUgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XHJcbiAgdmFyIGNoaWxkQ2Fyb3VzZWxJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Nhcm91c2VsQ29udGFpbkJpZyAuY2Fyb3VzZWxfX2l0ZW0nKTtcclxuICB2YXIgY2hpbGRDYXJvdXNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fYmlnLWJ0bicpO1xyXG4gIGNvbnN0IGNhcnNvdXNlbEhvbWUgPSBuZXcgU2llbWEoe1xyXG4gIHNlbGVjdG9yOiAnI2Nhcm91c2VsQ29udGFpbkJpZycsXHJcbiAgZHVyYXRpb246IDIwMCxcclxuICBlYXNpbmc6ICdlYXNlLW91dCcsXHJcbiAgcGVyUGFnZTogMSxcclxuICBzdGFydEluZGV4OiAwLFxyXG4gIGRyYWdnYWJsZTogdHJ1ZSxcclxuICBtdWx0aXBsZURyYWc6IHRydWUsXHJcbiAgdGhyZXNob2xkOiAyMCxcclxuICBsb29wOiB0cnVlLFxyXG4gIHJ0bDogZmFsc2UsXHJcbiAgb25Jbml0OiAoKSA9PiB7fSxcclxuICBvbkNoYW5nZTogKCkgPT4ge30sXHJcbn0pO1xyXG4gIGlmKGNoaWxkQ2Fyb3VzZWxJdGVtLmxlbmd0aCA+IDEpe1xyXG4gICAgY2hpbGRDYXJvdXNlbEJ0bi5pbm5lckhUTUwgPSBgXHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgYXJpYS1sYWJlbD1cImNhcm91c2VsLXByZXZcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnQgaWNvblwiPjwvaT48L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBhcmlhLWxhYmVsPVwiY2Fyb3VzZWwtbmV4dFwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHQgaWNvblwiPjwvaT48L2J1dHRvbj5cclxuICAgIGA7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bYXJpYS1sYWJlbD1cImNhcm91c2VsLXByZXZcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhcnNvdXNlbEhvbWUucHJldigpKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblthcmlhLWxhYmVsPVwiY2Fyb3VzZWwtbmV4dFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2Fyc291c2VsSG9tZS5uZXh0KCkpO1xyXG4gIH1cclxuICAgIC8qRmlyc3QgQ2Fyb3VzZWwqL1xyXG4gICAgLypDYXJvdXNlbCBWaWRlbyovXHJcbiAgICB2YXIgbW9iaWxlQ2hlY2sgPSBtb2JpbGVBbmRUYWJsZXRDaGVjaygpO1xyXG4gICAgdmFyIGxhc3RWaWRlb0NoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcl92aWRlbycpO1xyXG4gICAgaWYobW9iaWxlQ2hlY2sgPT09IGZhbHNlICYmIGxhc3RWaWRlb0NoZWNrKXtcclxuICAgIHZhciBjYXJvdXNlbFZpZGVvSG9tZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbGF0ZXN0VmlkZW8gLnNsaWRlcl92aWRlbyAuaW1hZ2VzX2xhdGVzdF92aWRlbycpO1xyXG4gICAgdmFyIGNhcm91c2VsVmlkZW9Ib21lRG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhdGVzdFZpZGVvIC5zbGlkZXJfdmlkZW8tZG90Jyk7XHJcbiAgICB2YXIgY2Fyb3VzZWxWaWRlb0hvbWVEb3RQYWdlID0gTWF0aC5jZWlsKGNhcm91c2VsVmlkZW9Ib21lSXRlbS5sZW5ndGgvMyk7XHJcbiAgICBjb25zdCBjYXJzb3VzZWxWaWRlb0hvbWUgPSAgbmV3IFNpZW1hKHtcclxuICAgICAgc2VsZWN0b3I6ICcuc2xpZGVyX3ZpZGVvJyxcclxuICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxyXG4gICAgICBwZXJQYWdlOiAzLFxyXG4gICAgICBzdGFydEluZGV4OiAwLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgIG11bHRpcGxlRHJhZzogdHJ1ZSxcclxuICAgICAgdGhyZXNob2xkOiAyMCxcclxuICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgIHJ0bDogZmFsc2UsXHJcbiAgICAgIG9uSW5pdDogKCkgPT4ge30sXHJcbiAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmKGNhcm91c2VsVmlkZW9Ib21lRG90UGFnZSA+MSl7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPWBgO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gY2Fyb3VzZWxWaWRlb0hvbWVEb3RQYWdlOyBpKyspe1xyXG4gICAgICAgICAgY29udGVudCArPSBgPHNwYW4gY2xhc3M9XCJkLS1pbmxpbmUtLWJsb2NrIG14ci01IGRvdFZpZGVvXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2lyY2xlXCI+PC9pPjwvc3Bhbj5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXJvdXNlbFZpZGVvSG9tZURvdC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gICAgICAgIHZhciBkb3RWaWRlbyA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvdFZpZGVvJyk7XHJcbiAgICAgICAgZG90VmlkZW9bMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgZG90VmlkZW8uZm9yRWFjaCgoaXRlbSxpKT0+e1xyXG4gICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYoaSE9PTApe1xyXG4gICAgICAgICAgICAgIGRvdFZpZGVvLmZvckVhY2goKGl0ZW0pPT57XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICBjYXJzb3VzZWxWaWRlb0hvbWUuZ29UbygoaSsxKSozLTIpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICBkb3RWaWRlby5mb3JFYWNoKChpdGVtKT0+e1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgY2Fyc291c2VsVmlkZW9Ib21lLmdvVG8oaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1lbHNlIGlmKG1vYmlsZUNoZWNrID09PSB0cnVlICYmIGxhc3RWaWRlb0NoZWNrKXtcclxuICAgIHZhciBjYXJvdXNlbFZpZGVvSG9tZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbGF0ZXN0VmlkZW8gLnNsaWRlcl92aWRlbyAuaW1hZ2VzX2xhdGVzdF92aWRlbycpO1xyXG4gICAgdmFyIGNhcm91c2VsVmlkZW9Ib21lRG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhdGVzdFZpZGVvIC5zbGlkZXJfdmlkZW8tZG90Jyk7XHJcbiAgICB2YXIgY2Fyb3VzZWxWaWRlb0hvbWVEb3RQYWdlID0gTWF0aC5jZWlsKGNhcm91c2VsVmlkZW9Ib21lSXRlbS5sZW5ndGgvMSk7XHJcbiAgICBjb25zdCBjYXJzb3VzZWxWaWRlb0hvbWUgPSAgbmV3IFNpZW1hKHtcclxuICAgICAgc2VsZWN0b3I6ICcuc2xpZGVyX3ZpZGVvJyxcclxuICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxyXG4gICAgICBwZXJQYWdlOiAxLFxyXG4gICAgICBzdGFydEluZGV4OiAwLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgIG11bHRpcGxlRHJhZzogdHJ1ZSxcclxuICAgICAgdGhyZXNob2xkOiAyMCxcclxuICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgIHJ0bDogZmFsc2UsXHJcbiAgICAgIG9uSW5pdDogKCkgPT4ge30sXHJcbiAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmKGNhcm91c2VsVmlkZW9Ib21lRG90UGFnZSA+MSl7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPWBgO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gY2Fyb3VzZWxWaWRlb0hvbWVEb3RQYWdlOyBpKyspe1xyXG4gICAgICAgICAgY29udGVudCArPSBgPHNwYW4gY2xhc3M9XCJkLS1pbmxpbmUtLWJsb2NrIG14ci01IGRvdFZpZGVvXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2lyY2xlXCI+PC9pPjwvc3Bhbj5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXJvdXNlbFZpZGVvSG9tZURvdC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gICAgICAgIHZhciBkb3RWaWRlbyA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvdFZpZGVvJyk7XHJcbiAgICAgICAgZG90VmlkZW9bMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgZG90VmlkZW8uZm9yRWFjaCgoaXRlbSxpKT0+e1xyXG4gICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYoaSE9PTApe1xyXG4gICAgICAgICAgICAgIGRvdFZpZGVvLmZvckVhY2goKGl0ZW0pPT57XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICBjYXJzb3VzZWxWaWRlb0hvbWUuZ29UbygoaSsxKSozLTIpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICBkb3RWaWRlby5mb3JFYWNoKChpdGVtKT0+e1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgY2Fyc291c2VsVmlkZW9Ib21lLmdvVG8oaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAvKkNhcm91c2VsIFZpZGVvKi9cclxuICAvKlBvc3QgQ2Fyb3VzZWwqL1xyXG4gIHZhciBjYXJzb3VzZWxQb3N0SG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0TGlzdCAucG9zdExpc3RfX2J0bicpO1xyXG4gIHZhciBjYXJvc2VsUG9zdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9zdExpc3QgLnBvc3RMaXN0X19pdGVtJyk7XHJcbiAgaWYoIW1vYmlsZUNoZWNrKXtcclxuICAgIGNvbnN0IGNhcnNvdXNlbFBvc3RIb21lID0gIG5ldyBTaWVtYSh7XHJcbiAgICAgIHNlbGVjdG9yOiAnLnBvc3RMaXN0X19jb250YWluJyxcclxuICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxyXG4gICAgICBwZXJQYWdlOiA0LFxyXG4gICAgICBzdGFydEluZGV4OiAwLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgIG11bHRpcGxlRHJhZzogdHJ1ZSxcclxuICAgICAgdGhyZXNob2xkOiAyMCxcclxuICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgIHJ0bDogZmFsc2UsXHJcbiAgICAgIG9uSW5pdDogKCkgPT4ge30sXHJcbiAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcclxuICAgICAgfSk7ICAgICBcclxuICAgICAgaWYoY2Fyb3NlbFBvc3RMaXN0Lmxlbmd0aCA+IDQpe1xyXG4gICAgICAgIGNhcnNvdXNlbFBvc3RIb21lQnRuLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1wcmV2XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0IGljb25cIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIGFyaWEtbGFiZWw9XCJwb3N0LWxpc3QtbmV4dFwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHQgaWNvblwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblthcmlhLWxhYmVsPVwicG9zdC1saXN0LW5leHRcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhcnNvdXNlbFBvc3RIb21lLnByZXYoKSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2FyaWEtbGFiZWw9XCJwb3N0LWxpc3QtcHJldlwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2Fyc291c2VsUG9zdEhvbWUubmV4dCgpKTtcclxuICAgICAgfSBcclxuICB9IGVsc2UgaWYgKG1vYmlsZUNoZWNrKXtcclxuICAgIGNvbnN0IGNhcnNvdXNlbFBvc3RIb21lID0gIG5ldyBTaWVtYSh7XHJcbiAgICAgIHNlbGVjdG9yOiAnLnBvc3RMaXN0X19jb250YWluJyxcclxuICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxyXG4gICAgICBwZXJQYWdlOiAxLFxyXG4gICAgICBzdGFydEluZGV4OiAwLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgIG11bHRpcGxlRHJhZzogdHJ1ZSxcclxuICAgICAgdGhyZXNob2xkOiAyMCxcclxuICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgIHJ0bDogZmFsc2UsXHJcbiAgICAgIG9uSW5pdDogKCkgPT4ge30sXHJcbiAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcclxuICAgICAgfSk7IFxyXG4gICAgICBpZihjYXJvc2VsUG9zdExpc3QubGVuZ3RoID4gNCl7XHJcbiAgICAgICAgY2Fyc291c2VsUG9zdEhvbWVCdG4uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBhcmlhLWxhYmVsPVwicG9zdC1saXN0LXByZXZcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnQgaWNvblwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1uZXh0XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodCBpY29uXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2FyaWEtbGFiZWw9XCJwb3N0LWxpc3QtbmV4dFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2Fyc291c2VsUG9zdEhvbWUucHJldigpKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1wcmV2XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYXJzb3VzZWxQb3N0SG9tZS5uZXh0KCkpO1xyXG4gICAgICB9ICAgICBcclxuICB9XHJcbiAgXHJcbiAgLypQb3N0IENhcm91c2VsKi9cclxuICAvKkNsaWsgc2hvdyBwb3N0IGNhdGVnb3J5Ki9cclxuICB2YXIgY2F0ZWdvcnlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5TGlzdCAuY2F0ZWdvcnlMaXN0X19jb250YWluIC50ZXJtX19saW5rJyk7XHJcbiAgY2F0ZWdvcnlMaXN0LmZvckVhY2goKGl0ZW0pPT57XHJcbiAgICBpdGVtLm9uY2xpY2sgPSAoKSA9PntcclxuICAgICAgbGV0IGNhdGVnb3J5ID0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3dcIik7XHJcbiAgICAgIGxldCBhcGlVcmwgPWBgO1xyXG4gICAgICBpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiKXtcclxuICAgICAgICBhcGlVcmwgPWAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vd3AtanNvbi9ibG9nLWFwaS92MS9ibG9nL29mZnNldD0wJmNhdGVnb3J5PSR7Y2F0ZWdvcnl9YDtcclxuICAgICAgfWVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvd29sZmFjdGl2ZS1nYW1ld2lraS9cIikge1xyXG4gICAgICAgIGFwaVVybCA9YCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfS93b2xmYWN0aXZlLWdhbWV3aWtpL3dwLWpzb24vYmxvZy1hcGkvdjEvYmxvZy9vZmZzZXQ9MCZjYXRlZ29yeT0ke2NhdGVnb3J5fWA7XHJcbiAgICAgIH1cclxuICAgICAgZmV0Y2goYXBpVXJsKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgIGxldCBjb250ZW50ID1gYDtcclxuICAgICAgICBsZXQgY2F0ZWdvcnlTaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3RMaXN0IC5wb3N0TGlzdF9fY29udGFpbicpO1xyXG4gICAgICAgIGNhdGVnb3J5U2hvdy5pbm5lckhUTUwgPSBgYDtcclxuICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pPT57XHJcbiAgICAgICAgICBjb250ZW50ICs9IGBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3N0TGlzdF9faXRlbSBkLS1ibG9ja1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zdExpc3RfX2l0ZW0taW1nXCI+XHJcbiAgICAgICAgICAgICAgJHtpdGVtLnRodW1ibmFpbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIke2l0ZW0udXJsfVwiIGNsYXNzPVwicG9zdExpc3RfX2l0ZW0tdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0aXRsZS0taXRlbVwiPiR7aXRlbS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIGA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjYXRlZ29yeVNob3cuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICBpZighbW9iaWxlQ2hlY2spe1xyXG4gICAgICAgICAgY29uc3QgY2Fyc291c2VsUG9zdEhvbWUgPSAgbmV3IFNpZW1hKHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICcucG9zdExpc3RfX2NvbnRhaW4nLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgIHBlclBhZ2U6IDQsXHJcbiAgICAgICAgICAgIHN0YXJ0SW5kZXg6IDAsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgbXVsdGlwbGVEcmFnOiB0cnVlLFxyXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDIwLFxyXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgcnRsOiBmYWxzZSxcclxuICAgICAgICAgICAgb25Jbml0OiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgb25DaGFuZ2U6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICB9KTsgICAgIFxyXG4gICAgICAgICAgICBpZihjYXJvc2VsUG9zdExpc3QubGVuZ3RoID4gNCl7XHJcbiAgICAgICAgICAgICAgY2Fyc291c2VsUG9zdEhvbWVCdG4uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBhcmlhLWxhYmVsPVwicG9zdC1saXN0LXByZXZcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnQgaWNvblwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1uZXh0XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodCBpY29uXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2FyaWEtbGFiZWw9XCJwb3N0LWxpc3QtbmV4dFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2Fyc291c2VsUG9zdEhvbWUucHJldigpKTtcclxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1wcmV2XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYXJzb3VzZWxQb3N0SG9tZS5uZXh0KCkpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0gZWxzZSBpZiAobW9iaWxlQ2hlY2spe1xyXG4gICAgICAgICAgY29uc3QgY2Fyc291c2VsUG9zdEhvbWUgPSAgbmV3IFNpZW1hKHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICcucG9zdExpc3RfX2NvbnRhaW4nLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgIHBlclBhZ2U6IDEsXHJcbiAgICAgICAgICAgIHN0YXJ0SW5kZXg6IDAsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgbXVsdGlwbGVEcmFnOiB0cnVlLFxyXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDIwLFxyXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgcnRsOiBmYWxzZSxcclxuICAgICAgICAgICAgb25Jbml0OiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgb25DaGFuZ2U6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgIGlmKGNhcm9zZWxQb3N0TGlzdC5sZW5ndGggPiA0KXtcclxuICAgICAgICAgICAgICBjYXJzb3VzZWxQb3N0SG9tZUJ0bi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIGFyaWEtbGFiZWw9XCJwb3N0LWxpc3QtcHJldlwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdCBpY29uXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBhcmlhLWxhYmVsPVwicG9zdC1saXN0LW5leHRcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0IGljb25cIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1uZXh0XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYXJzb3VzZWxQb3N0SG9tZS5wcmV2KCkpO1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblthcmlhLWxhYmVsPVwicG9zdC1saXN0LXByZXZcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhcnNvdXNlbFBvc3RIb21lLm5leHQoKSk7XHJcbiAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIH1cclxuICB9KVxyXG4gIC8qQ2xpY2sgc2hvdyBwb3N0IGNhdGVnb3J5Ki9cclxuICAvKkNsaWNrIGxvYWRtb3JlIG9uIGdhbWUgd2lraSovXHJcbiAgdmFyIGxvYWRtb3JlQnRuV2lraSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX3N0cmF0ZWd5IC5ndHJfc2VlX21vcmUnKTtcclxuICB2YXIgbG9hZG1vcmVCdG5TaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVfc3RyYXRlZ3kgLmdhbWVfc3RyYXRlZ3ktbGlzdCcpO1xyXG4gIHZhciBvZmZzZXRMb2FkID0gMTI7XHJcbiAgbG9hZG1vcmVCdG5XaWtpLm9uY2xpY2sgPSAoKSA9PntcclxuICAgIHZhciBsb2FkbW9yZVVybD1gYDtcclxuICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpe1xyXG4gICAgICBsb2FkbW9yZVVybCA9YCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfS93cC1qc29uL2dhbWV3aWtpLWFwaS92MS9nYW1ld2lraS9vZmZzZXQ9JHtvZmZzZXRMb2FkfWA7XHJcbiAgICB9ZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi93b2xmYWN0aXZlLWdhbWV3aWtpL1wiKSB7XHJcbiAgICAgIGxvYWRtb3JlVXJsID1gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9L3dvbGZhY3RpdmUtZ2FtZXdpa2kvd3AtanNvbi9nYW1ld2lraS1hcGkvdjEvZ2FtZXdpa2kvb2Zmc2V0PSR7b2Zmc2V0TG9hZH1gO1xyXG4gICAgfVxyXG4gICAgZmV0Y2gobG9hZG1vcmVVcmwpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSk9PntcclxuICAgICAgbGV0IGNvbnRlbnQgPSBgYDtcclxuICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29udGVudCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1kaXZpZGUtMiBtYy1tZyBjb2wtZGl2aWRlLXNtLTYgY29sLWRpdmlkZS1tZC0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZXNfZ2FtZV9zdHJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke2l0ZW0udXJsfVwiPiR7aXRlbS50aHVtYm5haWx9PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlX2dhbWVfc3RyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtpdGVtLnVybH1cIj4ke2l0ZW0udGl0bGV9PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICB9KVxyXG4gICAgICBsb2FkbW9yZUJ0blNob3cuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XHJcbiAgICAgIGlmKGRhdGEubGVuZ3RoICE9PSAxMil7XHJcbiAgICAgICAgbG9hZG1vcmVCdG5XaWtpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfWVsc2UgaWYoZGF0YS5sZW5ndGggPT09IDEyKXtcclxuICAgICAgICAgIG9mZnNldExvYWQgPSBvZmZzZXRMb2FkICsgMTE7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIHZhciBmcmVlQXBwVXJsID1cIlwiO1xyXG4gIGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpe1xyXG4gICAgZnJlZUFwcFVybCA9YCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfS93cC1jb250ZW50L3RoZW1lcy93b2xmYWN0aXZlLWdhbWV3aWtpL2pzb24vZnJlZS1kYXRhLmpzb25gO1xyXG4gIH1lbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL3dvbGZhY3RpdmUtZ2FtZXdpa2kvXCIpIHtcclxuICAgIGZyZWVBcHBVcmwgPWAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vd29sZmFjdGl2ZS1nYW1ld2lraS93cC1jb250ZW50L3RoZW1lcy93b2xmYWN0aXZlLWdhbWV3aWtpL2pzb24vZnJlZS1kYXRhLmpzb25gO1xyXG4gIH1cclxuICBmZXRjaChmcmVlQXBwVXJsKSBcclxuICAudGhlbihyZXNwb25zZT0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAudGhlbigoZGF0YSk9PntcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgbGV0IGNvbnRlbnQgPSBgYDtcclxuICAgIGxldCBmcmVlR2FtZVJhbmtpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZnJlZUdhbWVSYW5raW5nJyk7XHJcbiAgICBkYXRhLmNvbnRlbnQuZm9yRWFjaCgoaXRlbSxpKT0+eyAgXHJcbiAgICAgIGlmKGkgPCA1KXtcclxuICAgICAgICBsZXQgcmF0aW5nQ291bnQgPSBNYXRoLnJvdW5kKGl0ZW0ucmF0aW5nKTtcclxuICAgICAgICBsZXQgcmF0aW5nTGVmdCA9IDUgLSBNYXRoLnJvdW5kKGl0ZW0ucmF0aW5nKTtcclxuICAgICAgICBsZXQgcmF0aW5nID1cIlwiO1xyXG4gICAgICAgIGZvcihpPTA7IGk8IHJhdGluZ0NvdW50IDsgaSsrKXtcclxuICAgICAgICAgIHJhdGluZyArPSBgPGkgY2xhc3M9XCJmYXMgZmEtc3RhclwiPjwvaT5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IoaT0wOyBpPCByYXRpbmdMZWZ0IDsgaSsrKXtcclxuICAgICAgICAgIHJhdGluZyArPSBgPGkgY2xhc3M9XCJmYXMgZmEtc3RhciBsZWZ0XCI+PC9pPmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRlbnQgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWNvbnRhaW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWltZ1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpdGVtLmljb259XCIgYWx0PVwiJHtpdGVtLnNsdWd9XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlLS1pdGVtXCI+JHtpdGVtLnRpdGxlfTwvcD4gXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhcHAtLXN0YXJcIj4ke3JhdGluZ308L3A+ICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWJ0blwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hcHBzLmFwcGxlLmNvbS92bi9hcHAvJHtpdGVtLnNsdWd9L2lkJHtpdGVtLmlkfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jbG91ZC1kb3dubG9hZC1hbHRcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgIH0gICAgIFxyXG4gICAgfSlcclxuICAgIGZyZWVHYW1lUmFua2luZy5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gIH0pXHJcbiAgdmFyIGdyb3NzaW5nQXBwVXJsID1cIlwiO1xyXG4gIGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpe1xyXG4gICAgZ3Jvc3NpbmdBcHBVcmwgPWAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vd3AtY29udGVudC90aGVtZXMvd29sZmFjdGl2ZS1nYW1ld2lraS9qc29uL2dyb3NzaW5nLWRhdGEuanNvbmA7XHJcbiAgfWVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvd29sZmFjdGl2ZS1nYW1ld2lraS9cIikge1xyXG4gICAgZ3Jvc3NpbmdBcHBVcmwgPWAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vd29sZmFjdGl2ZS1nYW1ld2lraS93cC1jb250ZW50L3RoZW1lcy93b2xmYWN0aXZlLWdhbWV3aWtpL2pzb24vZ3Jvc3NpbmctZGF0YS5qc29uYDtcclxuICB9XHJcbiAgZmV0Y2goZ3Jvc3NpbmdBcHBVcmwpXHJcbiAgLnRoZW4ocmVzcG9uc2U9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICBsZXQgY29udGVudCA9IGBgO1xyXG4gICAgbGV0IGdyb3NzaW5nR2FtZVJhbmtpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3Jvc3NpbmdHYW1lUmFua2luZycpO1xyXG4gICAgZGF0YS5jb250ZW50LmZvckVhY2goKGl0ZW0saSk9PnsgIFxyXG4gICAgICBpZihpIDwgNSl7XHJcbiAgICAgICAgbGV0IHJhdGluZ0NvdW50ID0gTWF0aC5yb3VuZChpdGVtLnJhdGluZyk7XHJcbiAgICAgICAgbGV0IHJhdGluZ0xlZnQgPSA1IC0gTWF0aC5yb3VuZChpdGVtLnJhdGluZyk7XHJcbiAgICAgICAgbGV0IHJhdGluZyA9XCJcIjtcclxuICAgICAgICBmb3IoaT0wOyBpPCByYXRpbmdDb3VudCA7IGkrKyl7XHJcbiAgICAgICAgICByYXRpbmcgKz0gYDxpIGNsYXNzPVwiZmFzIGZhLXN0YXJcIj48L2k+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGk9MDsgaTwgcmF0aW5nTGVmdCA7IGkrKyl7XHJcbiAgICAgICAgICByYXRpbmcgKz0gYDxpIGNsYXNzPVwiZmFzIGZhLXN0YXIgbGVmdFwiPjwvaT5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZW50ICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2l0ZW1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbS1jb250YWluXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbS1pbWdcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aXRlbS5pY29ufVwiIGFsdD1cIiR7aXRlbS5zbHVnfVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZS0taXRlbVwiPiR7aXRlbS50aXRsZX08L3A+IFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiYXBwLS1zdGFyXCI+JHtyYXRpbmd9PC9wPiAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbS1idG5cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYXBwcy5hcHBsZS5jb20vdm4vYXBwLyR7aXRlbS5zbHVnfS9pZCR7aXRlbS5pZH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2xvdWQtZG93bmxvYWQtYWx0XCI+PC9pPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICB9ICAgICBcclxuICAgIH0pXHJcbiAgICBncm9zc2luZ0dhbWVSYW5raW5nLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgfSlcclxuICAvKkNsaWNrIGxvYWRtb3JlIG9uIGdhbWUgd2lraSovICBcclxuICAvKlJlbmRlciBhcGkgYXBwIHJhbmtpbmcqL1xyXG59XHJcbiIsInZhciBkb21Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNpbmdsZVwiKTtcclxuaWYoZG9tQm9keS5sZW5ndGggIT0gMCApe1xyXG4gICAgY29uc3QgYmFja1RvVG9wQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYWNrLXRvLXRvcC1idG5cIik7XHJcbiAgICB2YXIgcHJvdG9jb2wgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2w7XHJcbiAgICB2YXIgaG9zdG5hbWUgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxGdW5jdGlvbik7XHJcblxyXG4gICAgZnVuY3Rpb24gc2Nyb2xsRnVuY3Rpb24oKSB7XHJcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7IC8vIFNob3cgYmFja1RvVG9wQnV0dG9uXHJcbiAgICAgICAgaWYoIWJhY2tUb1RvcEJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJidG5FbnRyYW5jZVwiKSkge1xyXG4gICAgICAgIGJhY2tUb1RvcEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYnRuRXhpdFwiKTtcclxuICAgICAgICBiYWNrVG9Ub3BCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ0bkVudHJhbmNlXCIpO1xyXG4gICAgICAgIGJhY2tUb1RvcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgeyAvLyBIaWRlIGJhY2tUb1RvcEJ1dHRvblxyXG4gICAgICAgIGlmKGJhY2tUb1RvcEJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJidG5FbnRyYW5jZVwiKSkge1xyXG4gICAgICAgIGJhY2tUb1RvcEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYnRuRW50cmFuY2VcIik7XHJcbiAgICAgICAgYmFja1RvVG9wQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG5FeGl0XCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGJhY2tUb1RvcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSwgMjUwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmFja1RvVG9wQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzbW9vdGhTY3JvbGxCYWNrVG9Ub3ApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNtb290aFNjcm9sbEJhY2tUb1RvcCgpIHtcclxuICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gMDtcclxuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICBjb25zdCBkaXN0YW5jZSA9IHRhcmdldFBvc2l0aW9uIC0gc3RhcnRQb3NpdGlvbjtcclxuICAgIGNvbnN0IGR1cmF0aW9uID0gNzUwO1xyXG4gICAgbGV0IHN0YXJ0ID0gbnVsbDtcclxuICAgIFxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzdGVwKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIGlmICghc3RhcnQpIHN0YXJ0ID0gdGltZXN0YW1wO1xyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gdGltZXN0YW1wIC0gc3RhcnQ7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGVhc2VJbk91dEN1YmljKHByb2dyZXNzLCBzdGFydFBvc2l0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24pKTtcclxuICAgICAgICBpZiAocHJvZ3Jlc3MgPCBkdXJhdGlvbikgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlYXNlSW5PdXRDdWJpYyh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgdCAvPSBkLzI7XHJcbiAgICAgICAgaWYgKHQgPCAxKSByZXR1cm4gYy8yKnQqdCp0ICsgYjtcclxuICAgICAgICB0IC09IDI7XHJcbiAgICAgICAgcmV0dXJuIGMvMioodCp0KnQgKyAyKSArIGI7XHJcbiAgICB9O1xyXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7c2Nyb2xsRml4ZWRTaWRlQmFyKCl9O1xyXG5cclxuICAgIHZhciBzaWRlYmFyTGVmdHNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZUJhckxlZnRTY3JvbGxcIik7XHJcbiAgICB2YXIgc2lkZWJhclJpZ2h0c2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyUmlnaHRzY3JvbGxcIik7XHJcbiAgICB2YXIgc2lkZWJhck1lbnVSYW5raW5nc2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyTWVudVJhbmtpbmdzY3JvbGxcIik7XHJcbiAgICB2YXIgc2lkZWJhck1lbnVMZWZ0Y3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJNZW51TGVmdGNyb2xsXCIpO1xyXG4gICAgdmFyIHN0aWNreUxlZnQgPSBzaWRlYmFyTGVmdHNjcm9sbC5vZmZzZXRUb3A7XHJcbiAgICBjb25zdCBzY3JvbGxGaXhlZFNpZGVCYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IHN0aWNreUxlZnQpIHtcclxuICAgICAgICAgICAgc2lkZWJhckxlZnRzY3JvbGwuY2xhc3NMaXN0LmFkZChcInJvbGxfc2lkZWJhclwiKTtcclxuICAgICAgICAgICAgc2lkZWJhclJpZ2h0c2Nyb2xsLmNsYXNzTGlzdC5hZGQoXCJyb2xsX3NpZGViYXJcIik7XHJcbiAgICAgICAgICAgIHNpZGViYXJNZW51UmFua2luZ3Njcm9sbC5jbGFzc0xpc3QuYWRkKFwicm9sbF9zaWRlYmFyLW1lbnVcIik7XHJcbiAgICAgICAgICAgIHNpZGViYXJNZW51TGVmdGNyb2xsLmNsYXNzTGlzdC5hZGQoXCJyb2xsX3NpZGViYXItbWVudVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaWRlYmFyTGVmdHNjcm9sbC5jbGFzc0xpc3QucmVtb3ZlKFwicm9sbF9zaWRlYmFyXCIpO1xyXG4gICAgICAgICAgICBzaWRlYmFyUmlnaHRzY3JvbGwuY2xhc3NMaXN0LnJlbW92ZShcInJvbGxfc2lkZWJhclwiKTtcclxuICAgICAgICAgICAgc2lkZWJhck1lbnVSYW5raW5nc2Nyb2xsLmNsYXNzTGlzdC5yZW1vdmUoXCJyb2xsX3NpZGViYXItbWVudVwiKTtcclxuICAgICAgICAgICAgc2lkZWJhck1lbnVMZWZ0Y3JvbGwuY2xhc3NMaXN0LnJlbW92ZShcInJvbGxfc2lkZWJhci1tZW51XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0gIFxyXG4gICAgdmFyIGZyZWVBcHBVcmwgPVwiXCI7XHJcbiAgICBpZiAocHJvdG9jb2wgPT09IFwiaHR0cDpcIiAmJiBob3N0bmFtZSA9PT0gXCJsb2NhbGhvc3RcIikge1xyXG4gICAgICAgIGZyZWVBcHBVcmwgPWAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vd29sZmFjdGl2ZS1nYW1ld2lraS93cC1jb250ZW50L3RoZW1lcy93b2xmYWN0aXZlLWdhbWV3aWtpL2pzb24vZnJlZS1kYXRhLmpzb25gOyB9XHJcbiAgICBlbHNlIGlmKHByb3RvY29sID09PSBcImh0dHBzOlwiIHx8IHByb3RvY29sID09PSBcImh0dHA6XCIpe1xyXG4gICAgICAgIGZyZWVBcHBVcmwgPWAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vd3AtY29udGVudC90aGVtZXMvd29sZmFjdGl2ZS1nYW1ld2lraS9qc29uL2ZyZWUtZGF0YS5qc29uYDsgIH0gXHJcbiAgZmV0Y2goZnJlZUFwcFVybClcclxuICAudGhlbihyZXNwb25zZT0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAudGhlbigoZGF0YSk9PntcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgbGV0IGNvbnRlbnQgPSBgYDtcclxuICAgIGxldCBmcmVlR2FtZVJhbmtpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZnJlZUdhbWVSYW5raW5nJyk7XHJcbiAgICBkYXRhLmNvbnRlbnQuZm9yRWFjaCgoaXRlbSxpKT0+eyAgXHJcbiAgICAgIGlmKGkgPCA1KXtcclxuICAgICAgICBsZXQgcmF0aW5nQ291bnQgPSBNYXRoLnJvdW5kKGl0ZW0ucmF0aW5nKTtcclxuICAgICAgICBsZXQgcmF0aW5nTGVmdCA9IDUgLSBNYXRoLnJvdW5kKGl0ZW0ucmF0aW5nKTtcclxuICAgICAgICBsZXQgcmF0aW5nID1cIlwiO1xyXG4gICAgICAgIGZvcihpPTA7IGk8IHJhdGluZ0NvdW50IDsgaSsrKXtcclxuICAgICAgICAgIHJhdGluZyArPSBgPGkgY2xhc3M9XCJmYXMgZmEtc3RhclwiPjwvaT5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IoaT0wOyBpPCByYXRpbmdMZWZ0IDsgaSsrKXtcclxuICAgICAgICAgIHJhdGluZyArPSBgPGkgY2xhc3M9XCJmYXMgZmEtc3RhciBsZWZ0XCI+PC9pPmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRlbnQgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWNvbnRhaW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWltZ1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpdGVtLmljb259XCIgYWx0PVwiJHtpdGVtLnNsdWd9XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlLS1pdGVtXCI+JHtpdGVtLnRpdGxlfTwvcD4gXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhcHAtLXN0YXJcIj4ke3JhdGluZ308L3A+ICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWJ0blwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hcHBzLmFwcGxlLmNvbS92bi9hcHAvJHtpdGVtLnNsdWd9L2lkJHtpdGVtLmlkfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jbG91ZC1kb3dubG9hZC1hbHRcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgIH0gICAgIFxyXG4gICAgfSlcclxuICAgIGZyZWVHYW1lUmFua2luZy5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gIH0pXHJcbiAgdmFyIGdyb3NzaW5nQXBwVXJsID1cIlwiO1xyXG4gIGlmIChwcm90b2NvbCA9PT0gXCJodHRwOlwiICYmIGhvc3RuYW1lID09PSBcImxvY2FsaG9zdFwiKSB7XHJcbiAgICBncm9zc2luZ0FwcFVybCA9YCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfS93b2xmYWN0aXZlLWdhbWV3aWtpL3dwLWNvbnRlbnQvdGhlbWVzL3dvbGZhY3RpdmUtZ2FtZXdpa2kvanNvbi9ncm9zc2luZy1kYXRhLmpzb25gO1xyXG4gIH1lbHNlIGlmKHByb3RvY29sID09PSBcImh0dHBzOlwiIHx8IHByb3RvY29sID09PSBcImh0dHA6XCIpe1xyXG4gICAgZ3Jvc3NpbmdBcHBVcmwgPWAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vd3AtY29udGVudC90aGVtZXMvd29sZmFjdGl2ZS1nYW1ld2lraS9qc29uL2dyb3NzaW5nLWRhdGEuanNvbmA7XHJcbiAgfSBcclxuICBmZXRjaChncm9zc2luZ0FwcFVybClcclxuICAudGhlbihyZXNwb25zZT0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAudGhlbigoZGF0YSk9PntcclxuICAgIGxldCBjb250ZW50ID0gYGA7XHJcbiAgICBsZXQgZ3Jvc3NpbmdHYW1lUmFua2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNncm9zc2luZ0dhbWVSYW5raW5nJyk7XHJcbiAgICBkYXRhLmNvbnRlbnQuZm9yRWFjaCgoaXRlbSxpKT0+eyAgXHJcbiAgICAgIGlmKGkgPCA1KXtcclxuICAgICAgICBsZXQgcmF0aW5nQ291bnQgPSBNYXRoLnJvdW5kKGl0ZW0ucmF0aW5nKTtcclxuICAgICAgICBsZXQgcmF0aW5nTGVmdCA9IDUgLSBNYXRoLnJvdW5kKGl0ZW0ucmF0aW5nKTtcclxuICAgICAgICBsZXQgcmF0aW5nID1cIlwiO1xyXG4gICAgICAgIGZvcihpPTA7IGk8IHJhdGluZ0NvdW50IDsgaSsrKXtcclxuICAgICAgICAgIHJhdGluZyArPSBgPGkgY2xhc3M9XCJmYXMgZmEtc3RhclwiPjwvaT5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IoaT0wOyBpPCByYXRpbmdMZWZ0IDsgaSsrKXtcclxuICAgICAgICAgIHJhdGluZyArPSBgPGkgY2xhc3M9XCJmYXMgZmEtc3RhciBsZWZ0XCI+PC9pPmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRlbnQgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWNvbnRhaW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWltZ1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpdGVtLmljb259XCIgYWx0PVwiJHtpdGVtLnNsdWd9XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlLS1pdGVtXCI+JHtpdGVtLnRpdGxlfTwvcD4gXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhcHAtLXN0YXJcIj4ke3JhdGluZ308L3A+ICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWJ0blwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hcHBzLmFwcGxlLmNvbS92bi9hcHAvJHtpdGVtLnNsdWd9L2lkJHtpdGVtLmlkfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jbG91ZC1kb3dubG9hZC1hbHRcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgIH0gICAgIFxyXG4gICAgfSlcclxuICAgIGdyb3NzaW5nR2FtZVJhbmtpbmcuaW5uZXJIVE1MID0gY29udGVudDtcclxuICB9KVxyXG59XHJcblxyXG4iLCJjb25zdCBtb2JpbGVBbmRUYWJsZXRDaGVjayA9ICgpID0+e1xyXG4gIGxldCBjaGVjayA9IGZhbHNlO1xyXG4gICAgKGZ1bmN0aW9uKGEpe1xyXG4gICAgICAgIGlmKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaS50ZXN0KGEpfHwvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsNCkpKVxyXG4gICAgICAgICAgICBjaGVjayA9IHRydWU7XHJcbiAgICB9KShuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmEpO1xyXG4gICAgcmV0dXJuIGNoZWNrO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBtb2JpbGVBbmRUYWJsZXRDaGVja1xyXG59O1xyXG4iLCJpbXBvcnQgTGF6eUxvYWQgZnJvbSBcInZhbmlsbGEtbGF6eWxvYWRcIjtcclxuaW1wb3J0ICcuL3BhZ2VzL2hvbWVwYWdlJztcclxuaW1wb3J0ICcuL3BhZ2VzL3NpbmdsZSc7XHJcbmltcG9ydCAnc2hhcmVvbidcclxuLypWQVJJQUJMRVMqL1xyXG52YXIgaWZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaWZyYW1lJyk7XHJcbnZhciBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcclxudmFyIHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndmlkZW8nKTtcclxuLypWQVJJQUJMRVMqL1xyXG4vKkxvY2FsIFN0b3JhZ2UqL1xyXG5mdW5jdGlvbiBMdXVWYW9Mb2NhbFN0b3JhZ2UoQXJyYXksbmFtZUFycmF5KSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIHZhciBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KEFycmF5KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWVBcnJheSwganNvbkRhdGEpO1xyXG59XHJcbi8qbmFtZUFycmF5IGzDoCBk4bqhbmcgc3RyaW5nLCBhcnJheSBsw6AgYmnhur9uIGFycmF5IGPhuqduIGzGsHUgdsOgbyovXHJcbmZ1bmN0aW9uIExheUxvY2FsU3RvcmFnZShuYW1lQXJyYXksQXJyYXkpIHtcclxuICAgIHZhciBqc29uRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWVBcnJheSk7XHJcbiAgICBpZiAoIWpzb25EYXRhKSB7IGxvY2FsU3RvcmFnZSA9IFtdOyByZXR1cm47fVxyXG4gICAgQXJyYXkgPSBKU09OLnBhcnNlKGpzb25EYXRhKTtcclxufVxyXG4vKm5hbWVBcnJheSBsw6AgZOG6oW5nIHN0cmluZywgYXJyYXkgbMOgIGJp4bq/biBhcnJheSBj4bqnbiBsxrB1IGxvY2FsIHbDoG8qL1xyXG4vKkxvY2FsIFN0b3JhZ2UqL1xyXG4vKiBSZXNwb3NpdmUgbGF6eSBsb2FkKi9cclxuZnVuY3Rpb24gaWZyYW1lUmVzcG9zaXZlKCl7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZnJhbWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWZyYW1lW2ldLmNsYXNzTGlzdC5hZGQoJ2xhenknKTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gaW1nUmVzcG9zaXZlKCl7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaW1nW2ldLmNsYXNzTGlzdC5hZGQoJ2xhenknKTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gdmlkZW9SZXNwb3NpdmUoKXtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHZpZGVvLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZpZGVvW2ldLmNsYXNzTGlzdC5hZGQoJ2xhenknKTtcclxuICB9XHJcbn1cclxuaWZyYW1lID8gaWZyYW1lUmVzcG9zaXZlKCk6IHt9O1xyXG5pbWcgPyBpbWdSZXNwb3NpdmUoKToge307XHJcbnZpZGVvID8gdmlkZW9SZXNwb3NpdmUoKTp7fTtcclxudmFyIGxhenlMb2FkSW5zdGFuY2UgPSBuZXcgTGF6eUxvYWQoe2VsZW1lbnRzX3NlbGVjdG9yOiBcIi5sYXp5XCJ9KTtcclxuLyogUmVzcG9zaXZlIGxhenkgbG9hZCovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=