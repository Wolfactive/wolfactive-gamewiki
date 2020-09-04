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
    freeAppUrl = "".concat(protocol, "//").concat(hostname, "wp-json/ranking-api/v1/free");
  } else if (window.location.pathname === "/wolfactive-gamewiki/") {
    freeAppUrl = "".concat(protocol, "//").concat(hostname, "/wolfactive-gamewiki/wp-json/ranking-api/v1/free");
  } else if (window.location.pathname === "/game-wiki/") {
    freeAppUrl = "".concat(protocol, "//").concat(hostname, "/game-wiki/wp-json/ranking-api/v1/free");
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

  if (window.location.pathname === "/") {
    grossingAppUrl = "".concat(protocol, "//").concat(hostname, "/wp-json/ranking-api/v1/free");
  } else if (window.location.pathname === "/wolfactive-gamewiki/") {
    grossingAppUrl = "".concat(protocol, "//").concat(hostname, "/wolfactive-gamewiki/wp-json/ranking-api/v1/free");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NoYXJlb24vZGlzdC9zaGFyZW9uLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2llbWEvZGlzdC9zaWVtYS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtbGF6eWxvYWQvZGlzdC9sYXp5bG9hZC5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvZ2FtZXdpa2ktdGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlcy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvc2luZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYXJ0dGVuL21vYmlsZUFuZFRhYmxldENoZWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yb290LmpzIl0sIm5hbWVzIjpbImUiLCJ0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsInNlbGYiLCJyIiwiaSIsIm4iLCJsIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJnZXQiLCJfX2VzTW9kdWxlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIlR5cGVFcnJvciIsInZhbHVlIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsImxlbmd0aCIsIndyaXRhYmxlIiwia2V5IiwiY29uZmlnIiwibWVyZ2VTZXR0aW5ncyIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiRXJyb3IiLCJyZXNvbHZlU2xpZGVzTnVtYmVyIiwic2VsZWN0b3JXaWR0aCIsIm9mZnNldFdpZHRoIiwiaW5uZXJFbGVtZW50cyIsInNsaWNlIiwiY2hpbGRyZW4iLCJjdXJyZW50U2xpZGUiLCJsb29wIiwic3RhcnRJbmRleCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJwZXJQYWdlIiwidHJhbnNmb3JtUHJvcGVydHkiLCJ3ZWJraXRPck5vdCIsImZvckVhY2giLCJiaW5kIiwiaW5pdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemVIYW5kbGVyIiwiZHJhZ2dhYmxlIiwicG9pbnRlckRvd24iLCJkcmFnIiwic3RhcnRYIiwiZW5kWCIsInN0YXJ0WSIsImxldEl0R28iLCJwcmV2ZW50Q2xpY2siLCJ0b3VjaHN0YXJ0SGFuZGxlciIsInRvdWNoZW5kSGFuZGxlciIsInRvdWNobW92ZUhhbmRsZXIiLCJtb3VzZWRvd25IYW5kbGVyIiwibW91c2V1cEhhbmRsZXIiLCJtb3VzZWxlYXZlSGFuZGxlciIsIm1vdXNlbW92ZUhhbmRsZXIiLCJjbGlja0hhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnRzIiwic3R5bGUiLCJvdmVyZmxvdyIsImRpcmVjdGlvbiIsInJ0bCIsImJ1aWxkU2xpZGVyRnJhbWUiLCJvbkluaXQiLCJzbGlkZXJGcmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImVuYWJsZVRyYW5zaXRpb24iLCJjdXJzb3IiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiYnVpbGRTbGlkZXJGcmFtZUl0ZW0iLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsImEiLCJpbm5lckhUTUwiLCJzbGlkZVRvQ3VycmVudCIsImNzc0Zsb2F0IiwiaW5uZXJXaWR0aCIsImFyZ3VtZW50cyIsImRpc2FibGVUcmFuc2l0aW9uIiwib25DaGFuZ2UiLCJ3ZWJraXRUcmFuc2l0aW9uIiwiZWFzaW5nIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWJzIiwibXVsdGlwbGVEcmFnIiwiY2VpbCIsInRocmVzaG9sZCIsInByZXYiLCJuZXh0IiwiaW5kZXhPZiIsInRhcmdldCIsIm5vZGVOYW1lIiwic3RvcFByb3BhZ2F0aW9uIiwidG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJ1cGRhdGVBZnRlckRyYWciLCJjbGVhckRyYWciLCJwcmV2ZW50RGVmYXVsdCIsInNwbGljZSIsImluc2VydCIsImRldGFjaEV2ZW50cyIsInJlbW92ZUF0dHJpYnV0ZSIsImRvY3VtZW50RWxlbWVudCIsInRyYW5zZm9ybSIsImFzc2lnbiIsImFwcGx5IiwibmF2aWdhdG9yIiwidGVzdCIsInVzZXJBZ2VudCIsImRldmljZVBpeGVsUmF0aW8iLCJlbGVtZW50c19zZWxlY3RvciIsImNvbnRhaW5lciIsInRocmVzaG9sZHMiLCJkYXRhX3NyYyIsImRhdGFfc3Jjc2V0IiwiZGF0YV9zaXplcyIsImRhdGFfYmciLCJkYXRhX2JnX2hpZHBpIiwiZGF0YV9iZ19tdWx0aSIsImRhdGFfYmdfbXVsdGlfaGlkcGkiLCJkYXRhX3Bvc3RlciIsImNsYXNzX2FwcGxpZWQiLCJjbGFzc19sb2FkaW5nIiwiY2xhc3NfbG9hZGVkIiwiY2xhc3NfZXJyb3IiLCJ1bm9ic2VydmVfY29tcGxldGVkIiwidW5vYnNlcnZlX2VudGVyZWQiLCJjYW5jZWxfb25fZXhpdCIsImNhbGxiYWNrX2VudGVyIiwiY2FsbGJhY2tfZXhpdCIsImNhbGxiYWNrX2FwcGxpZWQiLCJjYWxsYmFja19sb2FkaW5nIiwiY2FsbGJhY2tfbG9hZGVkIiwiY2FsbGJhY2tfZXJyb3IiLCJjYWxsYmFja19maW5pc2giLCJjYWxsYmFja19jYW5jZWwiLCJ1c2VfbmF0aXZlIiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJpbnN0YW5jZSIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImdldEF0dHJpYnV0ZSIsInUiLCJzZXRBdHRyaWJ1dGUiLCJmIiwiXyIsImciLCJ2IiwiYiIsImNsYXNzTGlzdCIsImFkZCIsImNsYXNzTmFtZSIsImgiLCJyZW1vdmUiLCJyZXBsYWNlIiwiUmVnRXhwIiwibGxUZW1wSW1hZ2UiLCJFIiwiX29ic2VydmVyIiwidW5vYnNlcnZlIiwiSSIsImxvYWRpbmdDb3VudCIsIkEiLCJ0b0xvYWRDb3VudCIsIkwiLCJ0YWdOYW1lIiwicHVzaCIsInkiLCJ3IiwiayIsImxsT3JpZ2luYWxBdHRycyIsInoiLCJzcmMiLCJzcmNzZXQiLCJzaXplcyIsIk8iLCJDIiwiTSIsIk4iLCJwYXJlbnROb2RlIiwieCIsIlIiLCJJTUciLCJJRlJBTUUiLCJWSURFTyIsImxvYWQiLCJHIiwiVCIsIkQiLCJGIiwiViIsImoiLCJQIiwiUyIsImxsRXZMaXNucnMiLCJVIiwiJCIsInEiLCJIIiwiQiIsIkoiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb25jYXQiLCJLIiwiUSIsIlciLCJIVE1MSW1hZ2VFbGVtZW50IiwiWCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJZIiwiQXJyYXkiLCJaIiwicXVlcnlTZWxlY3RvckFsbCIsInR0IiwibnQiLCJmaWx0ZXIiLCJldCIsIl9zZXR0aW5ncyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ1cGRhdGUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImxvYWRBbGwiLCJkZXN0cm95IiwicmVzZXRTdGF0dXMiLCJsYXp5TG9hZE9wdGlvbnMiLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsInRhYkl0ZW0iLCJ0YWJDb250ZW50IiwidGFiSXRlbUJvdHRvbSIsInRhYkNvbnRlbnRCb3R0b20iLCJqdGVtIiwib25jbGljayIsInRhYk5hbWUiLCJldmVudCIsInNyY0VsZW1lbnQiLCJpZCIsInRhYk5hbWVJZCIsIml0ZW0iLCJ0ZW1wIiwiY2hpbGROb2RlcyIsInBhcmVudEVsZW1lbnQiLCJ0YWJDb250ZW50T3BlbiIsImNvbnRhaW5zIiwiY29uc29sZSIsImxvZyIsInRhYkNvbnRlbnRCb3R0b21PcGVuIiwiaG9tZXBhZ2UiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsImNoaWxkQ2Fyb3VzZWxJdGVtIiwiY2hpbGRDYXJvdXNlbEJ0biIsImNhcnNvdXNlbEhvbWUiLCJTaWVtYSIsIm1vYmlsZUNoZWNrIiwibW9iaWxlQW5kVGFibGV0Q2hlY2siLCJsYXN0VmlkZW9DaGVjayIsImNhcm91c2VsVmlkZW9Ib21lSXRlbSIsImNhcm91c2VsVmlkZW9Ib21lRG90IiwiY2Fyb3VzZWxWaWRlb0hvbWVEb3RQYWdlIiwiY2Fyc291c2VsVmlkZW9Ib21lIiwiY29udGVudCIsImRvdFZpZGVvIiwiZ29UbyIsImNhcnNvdXNlbFBvc3RIb21lQnRuIiwiY2Fyb3NlbFBvc3RMaXN0IiwiY2Fyc291c2VsUG9zdEhvbWUiLCJjYXRlZ29yeUxpc3QiLCJjYXRlZ29yeSIsImFwaVVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjYXRlZ29yeVNob3ciLCJ0aHVtYm5haWwiLCJ1cmwiLCJ0aXRsZSIsImVyciIsImxvYWRtb3JlQnRuV2lraSIsImxvYWRtb3JlQnRuU2hvdyIsIm9mZnNldExvYWQiLCJsb2FkbW9yZVVybCIsImRpc3BsYXkiLCJmcmVlQXBwVXJsIiwiZnJlZUdhbWVSYW5raW5nIiwicmF0aW5nQ291bnQiLCJyb3VuZCIsInN0YXIiLCJyYXRpbmdMZWZ0IiwicmF0aW5nIiwiaW1hZ2UiLCJncm9zc2luZ0FwcFVybCIsImdyb3NzaW5nR2FtZVJhbmtpbmciLCJkb21Cb2R5IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNjcm9sbEZ1bmN0aW9uIiwicGFnZVlPZmZzZXQiLCJiYWNrVG9Ub3BCdXR0b24iLCJzZXRUaW1lb3V0Iiwic21vb3RoU2Nyb2xsQmFja1RvVG9wIiwidGFyZ2V0UG9zaXRpb24iLCJzdGFydFBvc2l0aW9uIiwiZGlzdGFuY2UiLCJzdGFydCIsInN0ZXAiLCJ0aW1lc3RhbXAiLCJwcm9ncmVzcyIsInNjcm9sbFRvIiwiZWFzZUluT3V0Q3ViaWMiLCJvbnNjcm9sbCIsInNjcm9sbEZpeGVkU2lkZUJhciIsInNpZGViYXJMZWZ0c2Nyb2xsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzaWRlYmFyUmlnaHRzY3JvbGwiLCJzaWRlYmFyTWVudVJhbmtpbmdzY3JvbGwiLCJzaWRlYmFyTWVudUxlZnRjcm9sbCIsInN0aWNreUxlZnQiLCJvZmZzZXRUb3AiLCJjaGVjayIsInN1YnN0ciIsInZlbmRvciIsIm9wZXJhIiwiaWZyYW1lIiwiaW1nIiwidmlkZW8iLCJMdXVWYW9Mb2NhbFN0b3JhZ2UiLCJuYW1lQXJyYXkiLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsImpzb25EYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldEl0ZW0iLCJMYXlMb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2UiLCJpZnJhbWVSZXNwb3NpdmUiLCJpbWdSZXNwb3NpdmUiLCJ2aWRlb1Jlc3Bvc2l2ZSIsImxhenlMb2FkSW5zdGFuY2UiLCJMYXp5TG9hZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtB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cU0sY0FBVCxHQUEwQjtBQUN0QixPQUFLLElBQUk5VyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHZ1csS0FBSyxDQUFDelUsTUFBMUIsRUFBa0N2QixDQUFDLEVBQW5DLEVBQXVDO0FBQ25DZ1csU0FBSyxDQUFDaFcsQ0FBRCxDQUFMLENBQVN3SyxTQUFULENBQW1CQyxHQUFuQixDQUF1QixNQUF2QjtBQUNIO0FBQ0o7O0FBQ0RxTCxNQUFNLEdBQUdjLGVBQWUsRUFBbEIsR0FBdUIsRUFBN0I7QUFDQWIsR0FBRyxHQUFHYyxZQUFZLEVBQWYsR0FBb0IsRUFBdkI7QUFDQWIsS0FBSyxHQUFHYyxjQUFjLEVBQWpCLEdBQXNCLEVBQTNCO0FBQ0EsSUFBSUMsZ0JBQWdCLEdBQUcsSUFBSUMsdURBQUosQ0FBYTtBQUFFalAsbUJBQWlCLEVBQUU7QUFBckIsQ0FBYixDQUF2QjtBQUNBLHdCIiwiZmlsZSI6InJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9yb290LmpzXCIpO1xuIiwiLyohXG4gKiBzaGFyZW9uIHYxLjQuMSBieSBOaWtpdGEgS2FyYW1vdlxuICogaHR0cHM6Ly9zaGFyZW9uLmpzLm9yZ1xuICovXG5cbnZhciB1cmxCdWlsZGVyTWFwID0ge2ZhY2Vib29rOihkKSA9PiBgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9JHtkLnVybH1gLGxpbmtlZGluOihkKSA9PiBgaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWUmdXJsPSR7ZC51cmx9JnRpdGxlPSR7ZC50aXRsZX1gLG1lc3NlbmdlcjooZCkgPT4gYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9kaWFsb2cvc2VuZD9hcHBfaWQ9MzYxOTAyNDU3ODE2NzYxNyZsaW5rPSR7ZC51cmx9JnJlZGlyZWN0X3VyaT0ke2QudXJsfWAsb2Rub2tsYXNzbmlraTooZCkgPT4gYGh0dHBzOi8vY29ubmVjdC5vay5ydS9vZmZlcj91cmw9JHtkLnVybH0mdGl0bGU9JHtkLnRpdGxlfSR7ZC5tZWRpYSA/IGAmaW1hZ2VVcmw9JHtkLm1lZGlhfWAgOiAnJ31gLHBpbnRlcmVzdDooZCkgPT4gYGh0dHBzOi8vcGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8/dXJsPSR7ZC51cmx9JmRlc2NyaXB0aW9uPSR7ZC50aXRsZX0ke2QubWVkaWEgPyBgJm1lZGlhPSR7ZC5tZWRpYX1gIDogJyd9YCxwb2NrZXQ6KGQpID0+IGBodHRwczovL2dldHBvY2tldC5jb20vZWRpdC5waHA/dXJsPSR7ZC51cmx9YCxyZWRkaXQ6KGQpID0+IGBodHRwczovL3d3dy5yZWRkaXQuY29tL3N1Ym1pdD90aXRsZT0ke2QudGl0bGV9JnVybD0ke2QudXJsfWAsdGVsZWdyYW06KGQpID0+IGBodHRwczovL3RlbGVncmFtLm1lL3NoYXJlL3VybD91cmw9JHtkLnVybH0ke2QudGV4dCA/IGAmdGV4dD0ke2QudGV4dH1gIDogJyd9YCx0d2l0dGVyOihkKSA9PiBgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dXJsPSR7ZC51cmx9JnRleHQ9JHtkLnRpdGxlfSR7ZC52aWEgPyBgJnZpYT0ke2QudmlhfWAgOiAnJ31gLHZpYmVyOihkKSA9PiBgdmliZXI6Ly9mb3J3YXJkP3RleHQ9JHtkLnRpdGxlfSUwRCUwQSR7ZC51cmx9JHtkLnRleHQgPyBgJTBEJTBBJTBEJTBBJHtkLnRleHR9YCA6ICcnfWAsdmtvbnRha3RlOihkKSA9PiBgaHR0cHM6Ly92ay5jb20vc2hhcmUucGhwP3VybD0ke2QudXJsfSZ0aXRsZT0ke2QudGl0bGV9JHtkLm1lZGlhID8gYCZpbWFnZT0ke2QubWVkaWF9YCA6ICcnfWAsd2hhdHNhcHA6KGQpID0+IGB3aGF0c2FwcDovL3NlbmQ/dGV4dD0ke2QudGl0bGV9JTBEJTBBJHtkLnVybH0ke2QudGV4dCA/IGAlMEQlMEElMEQlMEEke2QudGV4dH1gIDogJyd9YH07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxuXG5jb25zdCBpbml0aWFsaXplU2hhcmVvbiA9ICgpID0+IHtcbiAgY29uc3Qgc2hhcmVvbkNvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaGFyZW9uJyk7XG5cbiAgLy8gaXRlcmF0ZSBvdmVyIDxkaXYgY2xhc3M9XCJzaGFyZW9uXCI+XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hhcmVvbkNvbnRhaW5lcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAvKiogQHR5cGUgRWxlbWVudCAqL1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHNoYXJlb25Db250YWluZXJzW2ldO1xuXG4gICAgLy8gaXRlcmF0ZSBvdmVyIGNoaWxkcmVuIG9mIDxkaXYgY2xhc3M9XCJzaGFyZW9uXCI+XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIC8qKiBAdHlwZSBFbGVtZW50ICovXG4gICAgICBjb25zdCBjaGlsZCA9IGNvbnRhaW5lci5jaGlsZHJlbltqXTtcblxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTGlzdExlbmd0aCA9IGNoaWxkLmNsYXNzTGlzdC5sZW5ndGg7XG5cbiAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIGNsYXNzZXMgb2YgdGhlIGNoaWxkIGVsZW1lbnRcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBjbGFzc0xpc3RMZW5ndGg7IGsgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGNscyA9IGNoaWxkLmNsYXNzTGlzdC5pdGVtKGspO1xuXG4gICAgICAgICAgLy8gaWYgaXQncyBvbmUgb2YgdGhlIG5ldHdvcmtzXG4gICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh1cmxCdWlsZGVyTWFwLCBjbHMpKSB7XG4gICAgICAgICAgICBjb25zdCBwcmVzZXQgPSB7XG4gICAgICAgICAgICAgIHVybDogZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIGNoaWxkLmRhdGFzZXQudXJsXG4gICAgICAgICAgICAgICAgfHwgY29udGFpbmVyLmRhdGFzZXQudXJsXG4gICAgICAgICAgICAgICAgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHRpdGxlOiBlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgY2hpbGQuZGF0YXNldC50aXRsZVxuICAgICAgICAgICAgICAgIHx8IGNvbnRhaW5lci5kYXRhc2V0LnRpdGxlXG4gICAgICAgICAgICAgICAgfHwgZG9jdW1lbnQudGl0bGUsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG1lZGlhOiBlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgY2hpbGQuZGF0YXNldC5tZWRpYVxuICAgICAgICAgICAgICAgIHx8IGNvbnRhaW5lci5kYXRhc2V0Lm1lZGlhXG4gICAgICAgICAgICAgICAgfHwgJycsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHRleHQ6IGVuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBjaGlsZC5kYXRhc2V0LnRleHRcbiAgICAgICAgICAgICAgICB8fCBjb250YWluZXIuZGF0YXNldC50ZXh0XG4gICAgICAgICAgICAgICAgfHwgJycsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHZpYTogZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIGNoaWxkLmRhdGFzZXQudmlhXG4gICAgICAgICAgICAgICAgfHwgY29udGFpbmVyLmRhdGFzZXQudmlhXG4gICAgICAgICAgICAgICAgfHwgJycsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsQnVpbGRlck1hcFtjbHNdKHByZXNldCk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhJykge1xuICAgICAgICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwpO1xuICAgICAgICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub29wZW5lciBub3JlZmVycmVyJyk7XG4gICAgICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJywgJ25vb3BlbmVyLG5vcmVmZXJyZXInKS5vcGVuZXIgPSBudWxsO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7IC8vIG9uY2UgYSBuZXR3b3JrIGlzIGRldGVjdGVkIHdlIGRvbid0IHdhbnQgdG8gY2hlY2sgZnVydGhlclxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgaW5pdGlhbGl6ZVNoYXJlb24oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVTaGFyZW9uO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJTaWVtYVwiLFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuU2llbWE9dCgpOmUuU2llbWE9dCgpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChyKXtpZihpW3JdKXJldHVybiBpW3JdLmV4cG9ydHM7dmFyIG49aVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsdCksbi5sPSEwLG4uZXhwb3J0c312YXIgaT17fTtyZXR1cm4gdC5tPWUsdC5jPWksdC5kPWZ1bmN0aW9uKGUsaSxyKXt0Lm8oZSxpKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaSx7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0OnJ9KX0sdC5uPWZ1bmN0aW9uKGUpe3ZhciBpPWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiB0LmQoaSxcImFcIixpKSxpfSx0Lm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHQucD1cIlwiLHQodC5zPTApfShbZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciByPXRbaV07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxpLHIpe3JldHVybiBpJiZlKHQucHJvdG90eXBlLGkpLHImJmUodCxyKSx0fX0oKSxsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXt2YXIgaT10aGlzO2lmKHIodGhpcyxlKSx0aGlzLmNvbmZpZz1lLm1lcmdlU2V0dGluZ3ModCksdGhpcy5zZWxlY3Rvcj1cInN0cmluZ1wiPT10eXBlb2YgdGhpcy5jb25maWcuc2VsZWN0b3I/ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbmZpZy5zZWxlY3Rvcik6dGhpcy5jb25maWcuc2VsZWN0b3IsbnVsbD09PXRoaXMuc2VsZWN0b3IpdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIHdyb25nIHdpdGggeW91ciBzZWxlY3RvciDwn5itXCIpO3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuaW5uZXJFbGVtZW50cz1bXS5zbGljZS5jYWxsKHRoaXMuc2VsZWN0b3IuY2hpbGRyZW4pLHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jb25maWcuc3RhcnRJbmRleCV0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoOk1hdGgubWF4KDAsTWF0aC5taW4odGhpcy5jb25maWcuc3RhcnRJbmRleCx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSkpLHRoaXMudHJhbnNmb3JtUHJvcGVydHk9ZS53ZWJraXRPck5vdCgpLFtcInJlc2l6ZUhhbmRsZXJcIixcInRvdWNoc3RhcnRIYW5kbGVyXCIsXCJ0b3VjaGVuZEhhbmRsZXJcIixcInRvdWNobW92ZUhhbmRsZXJcIixcIm1vdXNlZG93bkhhbmRsZXJcIixcIm1vdXNldXBIYW5kbGVyXCIsXCJtb3VzZWxlYXZlSGFuZGxlclwiLFwibW91c2Vtb3ZlSGFuZGxlclwiLFwiY2xpY2tIYW5kbGVyXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7aVtlXT1pW2VdLmJpbmQoaSl9KSx0aGlzLmluaXQoKX1yZXR1cm4gcyhlLFt7a2V5OlwiYXR0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5jb25maWcuZHJhZ2dhYmxlJiYodGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLmRyYWc9e3N0YXJ0WDowLGVuZFg6MCxzdGFydFk6MCxsZXRJdEdvOm51bGwscHJldmVudENsaWNrOiExfSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy50b3VjaHN0YXJ0SGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLnRvdWNoZW5kSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy50b3VjaG1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm1vdXNlZG93bkhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm1vdXNldXBIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZWxlYXZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3VzZW1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xpY2tIYW5kbGVyKSl9fSx7a2V5OlwiZGV0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMudG91Y2hzdGFydEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy50b3VjaGVuZEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMudG91Y2htb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5tb3VzZWRvd25IYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5tb3VzZXVwSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMubW91c2VsZWF2ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMubW91c2Vtb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmNsaWNrSGFuZGxlcil9fSx7a2V5OlwiaW5pdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5hdHRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsdGhpcy5zZWxlY3Rvci5zdHlsZS5kaXJlY3Rpb249dGhpcy5jb25maWcucnRsP1wicnRsXCI6XCJsdHJcIix0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSx0aGlzLmNvbmZpZy5vbkluaXQuY2FsbCh0aGlzKX19LHtrZXk6XCJidWlsZFNsaWRlckZyYW1lXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlLHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlOnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7dGhpcy5zbGlkZXJGcmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2lkdGg9ZSp0K1wicHhcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmNvbmZpZy5kcmFnZ2FibGUmJih0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aWYodGhpcy5jb25maWcubG9vcClmb3IodmFyIHI9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2U7cjx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3IrKyl7dmFyIG49dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbcl0uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChuKX1mb3IodmFyIHM9MDtzPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cysrKXt2YXIgbD10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tzXSk7aS5hcHBlbmRDaGlsZChsKX1pZih0aGlzLmNvbmZpZy5sb29wKWZvcih2YXIgbz0wO288dGhpcy5wZXJQYWdlO28rKyl7dmFyIGE9dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbb10uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChhKX10aGlzLnNsaWRlckZyYW1lLmFwcGVuZENoaWxkKGkpLHRoaXMuc2VsZWN0b3IuaW5uZXJIVE1MPVwiXCIsdGhpcy5zZWxlY3Rvci5hcHBlbmRDaGlsZCh0aGlzLnNsaWRlckZyYW1lKSx0aGlzLnNsaWRlVG9DdXJyZW50KCl9fSx7a2V5OlwiYnVpbGRTbGlkZXJGcmFtZUl0ZW1cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiB0LnN0eWxlLmNzc0Zsb2F0PXRoaXMuY29uZmlnLnJ0bD9cInJpZ2h0XCI6XCJsZWZ0XCIsdC5zdHlsZS5mbG9hdD10aGlzLmNvbmZpZy5ydGw/XCJyaWdodFwiOlwibGVmdFwiLHQuc3R5bGUud2lkdGg9KHRoaXMuY29uZmlnLmxvb3A/MTAwLyh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlKToxMDAvdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCkrXCIlXCIsdC5hcHBlbmRDaGlsZChlKSx0fX0se2tleTpcInJlc29sdmVTbGlkZXNOdW1iZXJcIix2YWx1ZTpmdW5jdGlvbigpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0aGlzLmNvbmZpZy5wZXJQYWdlKXRoaXMucGVyUGFnZT10aGlzLmNvbmZpZy5wZXJQYWdlO2Vsc2UgaWYoXCJvYmplY3RcIj09PW4odGhpcy5jb25maWcucGVyUGFnZSkpe3RoaXMucGVyUGFnZT0xO2Zvcih2YXIgZSBpbiB0aGlzLmNvbmZpZy5wZXJQYWdlKXdpbmRvdy5pbm5lcldpZHRoPj1lJiYodGhpcy5wZXJQYWdlPXRoaXMuY29uZmlnLnBlclBhZ2VbZV0pfX19LHtrZXk6XCJwcmV2XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MSx0PWFyZ3VtZW50c1sxXTtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO2lmKHRoaXMuY29uZmlnLmxvb3Ape2lmKHRoaXMuY3VycmVudFNsaWRlLWU8MCl7dGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO3ZhciByPXRoaXMuY3VycmVudFNsaWRlK3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgsbj10aGlzLnBlclBhZ2Uscz1yK24sbD0odGhpcy5jb25maWcucnRsPzE6LTEpKnMqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLG89dGhpcy5jb25maWcuZHJhZ2dhYmxlP3RoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFg6MDt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKGwrbykrXCJweCwgMCwgMClcIix0aGlzLmN1cnJlbnRTbGlkZT1yLWV9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmN1cnJlbnRTbGlkZS1lfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9TWF0aC5tYXgodGhpcy5jdXJyZW50U2xpZGUtZSwwKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwibmV4dFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjEsdD1hcmd1bWVudHNbMV07aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTtpZih0aGlzLmNvbmZpZy5sb29wKXtpZih0aGlzLmN1cnJlbnRTbGlkZStlPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKXt0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCk7dmFyIHI9dGhpcy5jdXJyZW50U2xpZGUtdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCxuPXRoaXMucGVyUGFnZSxzPXIrbixsPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqcyoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSksbz10aGlzLmNvbmZpZy5kcmFnZ2FibGU/dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WDowO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisobCtvKStcInB4LCAwLCAwKVwiLHRoaXMuY3VycmVudFNsaWRlPXIrZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY3VycmVudFNsaWRlK2V9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT1NYXRoLm1pbih0aGlzLmN1cnJlbnRTbGlkZStlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwiZGlzYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nfX0se2tleTpcImVuYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCBcIit0aGlzLmNvbmZpZy5kdXJhdGlvbitcIm1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgXCIrdGhpcy5jb25maWcuZHVyYXRpb24rXCJtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmd9fSx7a2V5OlwiZ29Ub1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTt0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmNvbmZpZy5sb29wP2UldGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDpNYXRoLm1pbihNYXRoLm1heChlLDApLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKSxpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJzbGlkZVRvQ3VycmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsaT10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxyPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqaSoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSk7ZT9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LmVuYWJsZVRyYW5zaXRpb24oKSx0LnNsaWRlckZyYW1lLnN0eWxlW3QudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifSl9KTp0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifX0se2tleTpcInVwZGF0ZUFmdGVyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9KHRoaXMuY29uZmlnLnJ0bD8tMToxKSoodGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCksdD1NYXRoLmFicyhlKSxpPXRoaXMuY29uZmlnLm11bHRpcGxlRHJhZz9NYXRoLmNlaWwodC8odGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSkpOjEscj1lPjAmJnRoaXMuY3VycmVudFNsaWRlLWk8MCxuPWU8MCYmdGhpcy5jdXJyZW50U2xpZGUraT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZTtlPjAmJnQ+dGhpcy5jb25maWcudGhyZXNob2xkJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPnRoaXMucGVyUGFnZT90aGlzLnByZXYoaSk6ZTwwJiZ0PnRoaXMuY29uZmlnLnRocmVzaG9sZCYmdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aD50aGlzLnBlclBhZ2UmJnRoaXMubmV4dChpKSx0aGlzLnNsaWRlVG9DdXJyZW50KHJ8fG4pfX0se2tleTpcInJlc2l6ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoJiYodGhpcy5jdXJyZW50U2xpZGU9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlPzA6dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpfX0se2tleTpcImNsZWFyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5kcmFnPXtzdGFydFg6MCxlbmRYOjAsc3RhcnRZOjAsbGV0SXRHbzpudWxsLHByZXZlbnRDbGljazp0aGlzLmRyYWcucHJldmVudENsaWNrfX19LHtrZXk6XCJ0b3VjaHN0YXJ0SGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpey0xIT09W1wiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiXS5pbmRleE9mKGUudGFyZ2V0Lm5vZGVOYW1lKXx8KGUuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMCx0aGlzLmRyYWcuc3RhcnRYPWUudG91Y2hlc1swXS5wYWdlWCx0aGlzLmRyYWcuc3RhcnRZPWUudG91Y2hlc1swXS5wYWdlWSl9fSx7a2V5OlwidG91Y2hlbmRIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuZHJhZy5lbmRYJiZ0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCl9fSx7a2V5OlwidG91Y2htb3ZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUuc3RvcFByb3BhZ2F0aW9uKCksbnVsbD09PXRoaXMuZHJhZy5sZXRJdEdvJiYodGhpcy5kcmFnLmxldEl0R289TWF0aC5hYnModGhpcy5kcmFnLnN0YXJ0WS1lLnRvdWNoZXNbMF0ucGFnZVkpPE1hdGguYWJzKHRoaXMuZHJhZy5zdGFydFgtZS50b3VjaGVzWzBdLnBhZ2VYKSksdGhpcy5wb2ludGVyRG93biYmdGhpcy5kcmFnLmxldEl0R28pe2UucHJldmVudERlZmF1bHQoKSx0aGlzLmRyYWcuZW5kWD1lLnRvdWNoZXNbMF0ucGFnZVgsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlZG93bkhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXstMSE9PVtcIlRFWFRBUkVBXCIsXCJPUFRJT05cIixcIklOUFVUXCIsXCJTRUxFQ1RcIl0uaW5kZXhPZihlLnRhcmdldC5ub2RlTmFtZSl8fChlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSEwLHRoaXMuZHJhZy5zdGFydFg9ZS5wYWdlWCl9fSx7a2V5OlwibW91c2V1cEhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmRyYWcuZW5kWCYmdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpfX0se2tleTpcIm1vdXNlbW92ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlLnByZXZlbnREZWZhdWx0KCksdGhpcy5wb2ludGVyRG93bil7XCJBXCI9PT1lLnRhcmdldC5ub2RlTmFtZSYmKHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITApLHRoaXMuZHJhZy5lbmRYPWUucGFnZVgsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJiaW5nXCIsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlbGVhdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5wb2ludGVyRG93biYmKHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmRyYWcuZW5kWD1lLnBhZ2VYLHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITEsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpKX19LHtrZXk6XCJjbGlja0hhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmRyYWcucHJldmVudENsaWNrJiZlLnByZXZlbnREZWZhdWx0KCksdGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMX19LHtrZXk6XCJyZW1vdmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKGU8MHx8ZT49dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJJdGVtIHRvIHJlbW92ZSBkb2Vzbid0IGV4aXN0IPCfmK1cIik7dmFyIGk9ZTx0aGlzLmN1cnJlbnRTbGlkZSxyPXRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZS0xPT09ZTsoaXx8cikmJnRoaXMuY3VycmVudFNsaWRlLS0sdGhpcy5pbm5lckVsZW1lbnRzLnNwbGljZShlLDEpLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJpbnNlcnRcIix2YWx1ZTpmdW5jdGlvbihlLHQsaSl7aWYodDwwfHx0PnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSl0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaW5zZXQgaXQgYXQgdGhpcyBpbmRleCDwn5itXCIpO2lmKC0xIT09dGhpcy5pbm5lckVsZW1lbnRzLmluZGV4T2YoZSkpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNhbWUgaXRlbSBpbiBhIGNhcm91c2VsPyBSZWFsbHk/IE5vcGUg8J+YrVwiKTt2YXIgcj10PD10aGlzLmN1cnJlbnRTbGlkZT4wJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3RoaXMuY3VycmVudFNsaWRlPXI/dGhpcy5jdXJyZW50U2xpZGUrMTp0aGlzLmN1cnJlbnRTbGlkZSx0aGlzLmlubmVyRWxlbWVudHMuc3BsaWNlKHQsMCxlKSx0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSxpJiZpLmNhbGwodGhpcyl9fSx7a2V5OlwicHJlcGVuZFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5pbnNlcnQoZSwwKSx0JiZ0LmNhbGwodGhpcyl9fSx7a2V5OlwiYXBwZW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmluc2VydChlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImRlc3Ryb3lcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF0sdD1hcmd1bWVudHNbMV07aWYodGhpcy5kZXRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cImF1dG9cIixlKXtmb3IodmFyIGk9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHI9MDtyPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cisrKWkuYXBwZW5kQ2hpbGQodGhpcy5pbm5lckVsZW1lbnRzW3JdKTt0aGlzLnNlbGVjdG9yLmlubmVySFRNTD1cIlwiLHRoaXMuc2VsZWN0b3IuYXBwZW5kQ2hpbGQoaSksdGhpcy5zZWxlY3Rvci5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKX10JiZ0LmNhbGwodGhpcyl9fV0sW3trZXk6XCJtZXJnZVNldHRpbmdzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9e3NlbGVjdG9yOlwiLnNpZW1hXCIsZHVyYXRpb246MjAwLGVhc2luZzpcImVhc2Utb3V0XCIscGVyUGFnZToxLHN0YXJ0SW5kZXg6MCxkcmFnZ2FibGU6ITAsbXVsdGlwbGVEcmFnOiEwLHRocmVzaG9sZDoyMCxsb29wOiExLHJ0bDohMSxvbkluaXQ6ZnVuY3Rpb24oKXt9LG9uQ2hhbmdlOmZ1bmN0aW9uKCl7fX0saT1lO2Zvcih2YXIgciBpbiBpKXRbcl09aVtyXTtyZXR1cm4gdH19LHtrZXk6XCJ3ZWJraXRPck5vdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0/XCJ0cmFuc2Zvcm1cIjpcIldlYmtpdFRyYW5zZm9ybVwifX1dKSxlfSgpO3QuZGVmYXVsdD1sLGUuZXhwb3J0cz10LmRlZmF1bHR9XSl9KTsiLCIhZnVuY3Rpb24odCxuKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1uKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShuKToodD10fHxzZWxmKS5MYXp5TG9hZD1uKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCgpe3JldHVybih0PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspe3ZhciBlPWFyZ3VtZW50c1tuXTtmb3IodmFyIGkgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxpKSYmKHRbaV09ZVtpXSl9cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyxlPW4mJiEoXCJvbnNjcm9sbFwiaW4gd2luZG93KXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG5hdmlnYXRvciYmLyhnbGV8aW5nfHJvKWJvdHxjcmF3bHxzcGlkZXIvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGk9biYmXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiaW4gd2luZG93LGE9biYmXCJjbGFzc0xpc3RcImluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpLG89biYmd2luZG93LmRldmljZVBpeGVsUmF0aW8+MSxyPXtlbGVtZW50c19zZWxlY3RvcjpcIklNR1wiLGNvbnRhaW5lcjplfHxuP2RvY3VtZW50Om51bGwsdGhyZXNob2xkOjMwMCx0aHJlc2hvbGRzOm51bGwsZGF0YV9zcmM6XCJzcmNcIixkYXRhX3NyY3NldDpcInNyY3NldFwiLGRhdGFfc2l6ZXM6XCJzaXplc1wiLGRhdGFfYmc6XCJiZ1wiLGRhdGFfYmdfaGlkcGk6XCJiZy1oaWRwaVwiLGRhdGFfYmdfbXVsdGk6XCJiZy1tdWx0aVwiLGRhdGFfYmdfbXVsdGlfaGlkcGk6XCJiZy1tdWx0aS1oaWRwaVwiLGRhdGFfcG9zdGVyOlwicG9zdGVyXCIsY2xhc3NfYXBwbGllZDpcImFwcGxpZWRcIixjbGFzc19sb2FkaW5nOlwibG9hZGluZ1wiLGNsYXNzX2xvYWRlZDpcImxvYWRlZFwiLGNsYXNzX2Vycm9yOlwiZXJyb3JcIix1bm9ic2VydmVfY29tcGxldGVkOiEwLHVub2JzZXJ2ZV9lbnRlcmVkOiExLGNhbmNlbF9vbl9leGl0OiExLGNhbGxiYWNrX2VudGVyOm51bGwsY2FsbGJhY2tfZXhpdDpudWxsLGNhbGxiYWNrX2FwcGxpZWQ6bnVsbCxjYWxsYmFja19sb2FkaW5nOm51bGwsY2FsbGJhY2tfbG9hZGVkOm51bGwsY2FsbGJhY2tfZXJyb3I6bnVsbCxjYWxsYmFja19maW5pc2g6bnVsbCxjYWxsYmFja19jYW5jZWw6bnVsbCx1c2VfbmF0aXZlOiExfSxjPWZ1bmN0aW9uKG4pe3JldHVybiB0KHt9LHIsbil9LGw9ZnVuY3Rpb24odCxuKXt2YXIgZSxpPW5ldyB0KG4pO3RyeXtlPW5ldyBDdXN0b21FdmVudChcIkxhenlMb2FkOjpJbml0aWFsaXplZFwiLHtkZXRhaWw6e2luc3RhbmNlOml9fSl9Y2F0Y2godCl7KGU9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKSkuaW5pdEN1c3RvbUV2ZW50KFwiTGF6eUxvYWQ6OkluaXRpYWxpemVkXCIsITEsITEse2luc3RhbmNlOml9KX13aW5kb3cuZGlzcGF0Y2hFdmVudChlKX0scz1mdW5jdGlvbih0LG4pe3JldHVybiB0LmdldEF0dHJpYnV0ZShcImRhdGEtXCIrbil9LHU9ZnVuY3Rpb24odCxuLGUpe3ZhciBpPVwiZGF0YS1cIituO251bGwhPT1lP3Quc2V0QXR0cmlidXRlKGksZSk6dC5yZW1vdmVBdHRyaWJ1dGUoaSl9LGQ9ZnVuY3Rpb24odCl7cmV0dXJuIHModCxcImxsLXN0YXR1c1wiKX0sZj1mdW5jdGlvbih0LG4pe3JldHVybiB1KHQsXCJsbC1zdGF0dXNcIixuKX0sXz1mdW5jdGlvbih0KXtyZXR1cm4gZih0LG51bGwpfSxnPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT09ZCh0KX0sdj1mdW5jdGlvbih0KXtyZXR1cm5cIm5hdGl2ZVwiPT09ZCh0KX0sYj1mdW5jdGlvbih0LG4sZSxpKXt0JiYodm9pZCAwPT09aT92b2lkIDA9PT1lP3Qobik6dChuLGUpOnQobixlLGkpKX0scD1mdW5jdGlvbih0LG4pe2E/dC5jbGFzc0xpc3QuYWRkKG4pOnQuY2xhc3NOYW1lKz0odC5jbGFzc05hbWU/XCIgXCI6XCJcIikrbn0saD1mdW5jdGlvbih0LG4pe2E/dC5jbGFzc0xpc3QucmVtb3ZlKG4pOnQuY2xhc3NOYW1lPXQuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxzKylcIituK1wiKFxcXFxzK3wkKVwiKSxcIiBcIikucmVwbGFjZSgvXlxccysvLFwiXCIpLnJlcGxhY2UoL1xccyskLyxcIlwiKX0sbT1mdW5jdGlvbih0KXtyZXR1cm4gdC5sbFRlbXBJbWFnZX0sRT1mdW5jdGlvbih0LG4pe2lmKG4pe3ZhciBlPW4uX29ic2VydmVyO2UmJmUudW5vYnNlcnZlKHQpfX0sST1mdW5jdGlvbih0LG4pe3QmJih0LmxvYWRpbmdDb3VudCs9bil9LEE9ZnVuY3Rpb24odCxuKXt0JiYodC50b0xvYWRDb3VudD1uKX0sTD1mdW5jdGlvbih0KXtmb3IodmFyIG4sZT1bXSxpPTA7bj10LmNoaWxkcmVuW2ldO2krPTEpXCJTT1VSQ0VcIj09PW4udGFnTmFtZSYmZS5wdXNoKG4pO3JldHVybiBlfSx5PWZ1bmN0aW9uKHQsbixlKXtlJiZ0LnNldEF0dHJpYnV0ZShuLGUpfSx3PWZ1bmN0aW9uKHQsbil7dC5yZW1vdmVBdHRyaWJ1dGUobil9LGs9ZnVuY3Rpb24odCl7cmV0dXJuISF0LmxsT3JpZ2luYWxBdHRyc30sej1mdW5jdGlvbih0KXtpZighayh0KSl7dmFyIG49e307bi5zcmM9dC5nZXRBdHRyaWJ1dGUoXCJzcmNcIiksbi5zcmNzZXQ9dC5nZXRBdHRyaWJ1dGUoXCJzcmNzZXRcIiksbi5zaXplcz10LmdldEF0dHJpYnV0ZShcInNpemVzXCIpLHQubGxPcmlnaW5hbEF0dHJzPW59fSxPPWZ1bmN0aW9uKHQpe2lmKGsodCkpe3ZhciBuPXQubGxPcmlnaW5hbEF0dHJzO3kodCxcInNyY1wiLG4uc3JjKSx5KHQsXCJzcmNzZXRcIixuLnNyY3NldCkseSh0LFwic2l6ZXNcIixuLnNpemVzKX19LEM9ZnVuY3Rpb24odCxuKXt5KHQsXCJzaXplc1wiLHModCxuLmRhdGFfc2l6ZXMpKSx5KHQsXCJzcmNzZXRcIixzKHQsbi5kYXRhX3NyY3NldCkpLHkodCxcInNyY1wiLHModCxuLmRhdGFfc3JjKSl9LE09ZnVuY3Rpb24odCl7dyh0LFwic3JjXCIpLHcodCxcInNyY3NldFwiKSx3KHQsXCJzaXplc1wiKX0sTj1mdW5jdGlvbih0LG4pe3ZhciBlPXQucGFyZW50Tm9kZTtlJiZcIlBJQ1RVUkVcIj09PWUudGFnTmFtZSYmTChlKS5mb3JFYWNoKG4pfSx4PWZ1bmN0aW9uKHQsbil7TCh0KS5mb3JFYWNoKG4pfSxSPXtJTUc6ZnVuY3Rpb24odCxuKXtOKHQsKGZ1bmN0aW9uKHQpe3oodCksQyh0LG4pfSkpLHoodCksQyh0LG4pfSxJRlJBTUU6ZnVuY3Rpb24odCxuKXt5KHQsXCJzcmNcIixzKHQsbi5kYXRhX3NyYykpfSxWSURFTzpmdW5jdGlvbih0LG4pe3godCwoZnVuY3Rpb24odCl7eSh0LFwic3JjXCIscyh0LG4uZGF0YV9zcmMpKX0pKSx5KHQsXCJwb3N0ZXJcIixzKHQsbi5kYXRhX3Bvc3RlcikpLHkodCxcInNyY1wiLHModCxuLmRhdGFfc3JjKSksdC5sb2FkKCl9fSxHPWZ1bmN0aW9uKHQsbil7dmFyIGU9Ult0LnRhZ05hbWVdO2UmJmUodCxuKX0sVD1mdW5jdGlvbih0LG4sZSl7SShlLDEpLHAodCxuLmNsYXNzX2xvYWRpbmcpLGYodCxcImxvYWRpbmdcIiksYihuLmNhbGxiYWNrX2xvYWRpbmcsdCxlKX0sRD17SU1HOmZ1bmN0aW9uKHQsbil7dSh0LG4uZGF0YV9zcmMsbnVsbCksdSh0LG4uZGF0YV9zcmNzZXQsbnVsbCksdSh0LG4uZGF0YV9zaXplcyxudWxsKSxOKHQsKGZ1bmN0aW9uKHQpe3UodCxuLmRhdGFfc3Jjc2V0LG51bGwpLHUodCxuLmRhdGFfc2l6ZXMsbnVsbCl9KSl9LElGUkFNRTpmdW5jdGlvbih0LG4pe3UodCxuLmRhdGFfc3JjLG51bGwpfSxWSURFTzpmdW5jdGlvbih0LG4pe3UodCxuLmRhdGFfc3JjLG51bGwpLHUodCxuLmRhdGFfcG9zdGVyLG51bGwpLHgodCwoZnVuY3Rpb24odCl7dSh0LG4uZGF0YV9zcmMsbnVsbCl9KSl9fSxGPWZ1bmN0aW9uKHQsbil7dSh0LG4uZGF0YV9iZ19tdWx0aSxudWxsKSx1KHQsbi5kYXRhX2JnX211bHRpX2hpZHBpLG51bGwpfSxWPWZ1bmN0aW9uKHQsbil7dmFyIGU9RFt0LnRhZ05hbWVdO2U/ZSh0LG4pOmZ1bmN0aW9uKHQsbil7dSh0LG4uZGF0YV9iZyxudWxsKSx1KHQsbi5kYXRhX2JnX2hpZHBpLG51bGwpfSh0LG4pfSxqPVtcIklNR1wiLFwiSUZSQU1FXCIsXCJWSURFT1wiXSxQPWZ1bmN0aW9uKHQsbil7IW58fGZ1bmN0aW9uKHQpe3JldHVybiB0LmxvYWRpbmdDb3VudD4wfShuKXx8ZnVuY3Rpb24odCl7cmV0dXJuIHQudG9Mb2FkQ291bnQ+MH0obil8fGIodC5jYWxsYmFja19maW5pc2gsbil9LFM9ZnVuY3Rpb24odCxuLGUpe3QuYWRkRXZlbnRMaXN0ZW5lcihuLGUpLHQubGxFdkxpc25yc1tuXT1lfSxVPWZ1bmN0aW9uKHQsbixlKXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIobixlKX0sJD1mdW5jdGlvbih0KXtyZXR1cm4hIXQubGxFdkxpc25yc30scT1mdW5jdGlvbih0KXtpZigkKHQpKXt2YXIgbj10LmxsRXZMaXNucnM7Zm9yKHZhciBlIGluIG4pe3ZhciBpPW5bZV07VSh0LGUsaSl9ZGVsZXRlIHQubGxFdkxpc25yc319LEg9ZnVuY3Rpb24odCxuLGUpeyFmdW5jdGlvbih0KXtkZWxldGUgdC5sbFRlbXBJbWFnZX0odCksSShlLC0xKSxmdW5jdGlvbih0KXt0JiYodC50b0xvYWRDb3VudC09MSl9KGUpLGgodCxuLmNsYXNzX2xvYWRpbmcpLG4udW5vYnNlcnZlX2NvbXBsZXRlZCYmRSh0LGUpfSxCPWZ1bmN0aW9uKHQsbixlKXt2YXIgaT1tKHQpfHx0OyQoaSl8fGZ1bmN0aW9uKHQsbixlKXskKHQpfHwodC5sbEV2TGlzbnJzPXt9KTt2YXIgaT1cIlZJREVPXCI9PT10LnRhZ05hbWU/XCJsb2FkZWRkYXRhXCI6XCJsb2FkXCI7Uyh0LGksbiksUyh0LFwiZXJyb3JcIixlKX0oaSwoZnVuY3Rpb24oYSl7IWZ1bmN0aW9uKHQsbixlLGkpe3ZhciBhPXYobik7SChuLGUsaSkscChuLGUuY2xhc3NfbG9hZGVkKSxmKG4sXCJsb2FkZWRcIiksVihuLGUpLGIoZS5jYWxsYmFja19sb2FkZWQsbixpKSxhfHxQKGUsaSl9KDAsdCxuLGUpLHEoaSl9KSwoZnVuY3Rpb24oYSl7IWZ1bmN0aW9uKHQsbixlLGkpe3ZhciBhPXYobik7SChuLGUsaSkscChuLGUuY2xhc3NfZXJyb3IpLGYobixcImVycm9yXCIpLGIoZS5jYWxsYmFja19lcnJvcixuLGkpLGF8fFAoZSxpKX0oMCx0LG4sZSkscShpKX0pKX0sSj1mdW5jdGlvbih0LG4sZSl7IWZ1bmN0aW9uKHQpe3QubGxUZW1wSW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKX0odCksQih0LG4sZSksZnVuY3Rpb24odCxuLGUpe3ZhciBpPXModCxuLmRhdGFfYmcpLGE9cyh0LG4uZGF0YV9iZ19oaWRwaSkscj1vJiZhP2E6aTtyJiYodC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J3VybChcIicuY29uY2F0KHIsJ1wiKScpLG0odCkuc2V0QXR0cmlidXRlKFwic3JjXCIsciksVCh0LG4sZSkpfSh0LG4sZSksZnVuY3Rpb24odCxuLGUpe3ZhciBpPXModCxuLmRhdGFfYmdfbXVsdGkpLGE9cyh0LG4uZGF0YV9iZ19tdWx0aV9oaWRwaSkscj1vJiZhP2E6aTtyJiYodC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9cixmdW5jdGlvbih0LG4sZSl7cCh0LG4uY2xhc3NfYXBwbGllZCksZih0LFwiYXBwbGllZFwiKSxGKHQsbiksbi51bm9ic2VydmVfY29tcGxldGVkJiZFKHQsbiksYihuLmNhbGxiYWNrX2FwcGxpZWQsdCxlKX0odCxuLGUpKX0odCxuLGUpfSxLPWZ1bmN0aW9uKHQsbixlKXshZnVuY3Rpb24odCl7cmV0dXJuIGouaW5kZXhPZih0LnRhZ05hbWUpPi0xfSh0KT9KKHQsbixlKTpmdW5jdGlvbih0LG4sZSl7Qih0LG4sZSksRyh0LG4pLFQodCxuLGUpfSh0LG4sZSl9LFE9W1wiSU1HXCIsXCJJRlJBTUVcIl0sVz1mdW5jdGlvbih0KXtyZXR1cm4gdC51c2VfbmF0aXZlJiZcImxvYWRpbmdcImluIEhUTUxJbWFnZUVsZW1lbnQucHJvdG90eXBlfSxYPWZ1bmN0aW9uKHQsbixlKXt0LmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gdC5pc0ludGVyc2VjdGluZ3x8dC5pbnRlcnNlY3Rpb25SYXRpbz4wfSh0KT9mdW5jdGlvbih0LG4sZSxpKXtiKGUuY2FsbGJhY2tfZW50ZXIsdCxuLGkpLGZ1bmN0aW9uKHQsbixlKXtuLnVub2JzZXJ2ZV9lbnRlcmVkJiZFKHQsZSl9KHQsZSxpKSxmdW5jdGlvbih0KXtyZXR1cm4hZyh0KX0odCl8fEsodCxlLGkpfSh0LnRhcmdldCx0LG4sZSk6ZnVuY3Rpb24odCxuLGUsaSl7Zyh0KXx8KGZ1bmN0aW9uKHQsbixlLGkpe2UuY2FuY2VsX29uX2V4aXQmJmZ1bmN0aW9uKHQpe3JldHVyblwibG9hZGluZ1wiPT09ZCh0KX0odCkmJlwiSU1HXCI9PT10LnRhZ05hbWUmJihxKHQpLGZ1bmN0aW9uKHQpe04odCwoZnVuY3Rpb24odCl7TSh0KX0pKSxNKHQpfSh0KSxmdW5jdGlvbih0KXtOKHQsKGZ1bmN0aW9uKHQpe08odCl9KSksTyh0KX0odCksaCh0LGUuY2xhc3NfbG9hZGluZyksSShpLC0xKSxfKHQpLGIoZS5jYWxsYmFja19jYW5jZWwsdCxuLGkpKX0odCxuLGUsaSksYihlLmNhbGxiYWNrX2V4aXQsdCxuLGkpKX0odC50YXJnZXQsdCxuLGUpfSkpfSxZPWZ1bmN0aW9uKHQpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0KX0sWj1mdW5jdGlvbih0KXtyZXR1cm4gdC5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCh0LmVsZW1lbnRzX3NlbGVjdG9yKX0sdHQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVyblwiZXJyb3JcIj09PWQodCl9KHQpfSxudD1mdW5jdGlvbih0LG4pe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gWSh0KS5maWx0ZXIoZyl9KHR8fFoobikpfSxldD1mdW5jdGlvbih0LGUpe3ZhciBhPWModCk7dGhpcy5fc2V0dGluZ3M9YSx0aGlzLmxvYWRpbmdDb3VudD0wLGZ1bmN0aW9uKHQsbil7aSYmIVcodCkmJihuLl9vYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGZ1bmN0aW9uKGUpe1goZSx0LG4pfSksZnVuY3Rpb24odCl7cmV0dXJue3Jvb3Q6dC5jb250YWluZXI9PT1kb2N1bWVudD9udWxsOnQuY29udGFpbmVyLHJvb3RNYXJnaW46dC50aHJlc2hvbGRzfHx0LnRocmVzaG9sZCtcInB4XCJ9fSh0KSkpfShhLHRoaXMpLGZ1bmN0aW9uKHQsZSl7biYmd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIiwoZnVuY3Rpb24oKXshZnVuY3Rpb24odCxuKXt2YXIgZTsoZT1aKHQpLFkoZSkuZmlsdGVyKHR0KSkuZm9yRWFjaCgoZnVuY3Rpb24obil7aChuLHQuY2xhc3NfZXJyb3IpLF8obil9KSksbi51cGRhdGUoKX0odCxlKX0pKX0oYSx0aGlzKSx0aGlzLnVwZGF0ZShlKX07cmV0dXJuIGV0LnByb3RvdHlwZT17dXBkYXRlOmZ1bmN0aW9uKHQpe3ZhciBuLGEsbz10aGlzLl9zZXR0aW5ncyxyPW50KHQsbyk7QSh0aGlzLHIubGVuZ3RoKSwhZSYmaT9XKG8pP2Z1bmN0aW9uKHQsbixlKXt0LmZvckVhY2goKGZ1bmN0aW9uKHQpey0xIT09US5pbmRleE9mKHQudGFnTmFtZSkmJih0LnNldEF0dHJpYnV0ZShcImxvYWRpbmdcIixcImxhenlcIiksZnVuY3Rpb24odCxuLGUpe0IodCxuLGUpLEcodCxuKSxWKHQsbiksZih0LFwibmF0aXZlXCIpfSh0LG4sZSkpfSkpLEEoZSwwKX0ocixvLHRoaXMpOihhPXIsZnVuY3Rpb24odCl7dC5kaXNjb25uZWN0KCl9KG49dGhpcy5fb2JzZXJ2ZXIpLGZ1bmN0aW9uKHQsbil7bi5mb3JFYWNoKChmdW5jdGlvbihuKXt0Lm9ic2VydmUobil9KSl9KG4sYSkpOnRoaXMubG9hZEFsbChyKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuX29ic2VydmVyJiZ0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCksWih0aGlzLl9zZXR0aW5ncykuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZGVsZXRlIHQubGxPcmlnaW5hbEF0dHJzfSkpLGRlbGV0ZSB0aGlzLl9vYnNlcnZlcixkZWxldGUgdGhpcy5fc2V0dGluZ3MsZGVsZXRlIHRoaXMubG9hZGluZ0NvdW50LGRlbGV0ZSB0aGlzLnRvTG9hZENvdW50fSxsb2FkQWxsOmZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMsZT10aGlzLl9zZXR0aW5ncztudCh0LGUpLmZvckVhY2goKGZ1bmN0aW9uKHQpe0sodCxlLG4pfSkpfX0sZXQubG9hZD1mdW5jdGlvbih0LG4pe3ZhciBlPWMobik7Syh0LGUpfSxldC5yZXNldFN0YXR1cz1mdW5jdGlvbih0KXtfKHQpfSxuJiZmdW5jdGlvbih0LG4pe2lmKG4paWYobi5sZW5ndGgpZm9yKHZhciBlLGk9MDtlPW5baV07aSs9MSlsKHQsZSk7ZWxzZSBsKHQsbil9KGV0LHdpbmRvdy5sYXp5TG9hZE9wdGlvbnMpLGV0fSkpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJ2YXIgdGFiSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWItaXRlbScpO1xyXG52YXIgdGFiQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWItY29udGVudCcpO1xyXG52YXIgdGFiSXRlbUJvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1ld2lraV9fdGFiLWl0ZW0nKTtcclxudmFyIHRhYkNvbnRlbnRCb3R0b20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZXdpa2lfX3RhYi1jb250ZW50Jyk7XHJcbmlmICh0YWJJdGVtICYmIHRhYkNvbnRlbnQpIHtcclxuICAgIHRhYkl0ZW0uZm9yRWFjaCgoanRlbSwgaSkgPT4ge1xyXG4gICAgICAgIGp0ZW0ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJJdGVtLmxlbmd0aDsgaSsrKSB7IHRhYkl0ZW1baV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7IH1cclxuICAgICAgICAgICAganRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgdGFiTmFtZSA9IGV2ZW50LnNyY0VsZW1lbnQuaWQ7XHJcbiAgICAgICAgICAgIHRhYk5hbWVJZCA9IHRhYk5hbWUgKyAnQ29udGVudCc7XHJcbiAgICAgICAgICAgIHRhYkNvbnRlbnQuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSBpdGVtLmNoaWxkTm9kZXNbMF0ucGFyZW50RWxlbWVudC5pZDtcclxuICAgICAgICAgICAgICAgIGxldCB0YWJDb250ZW50T3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGFiTmFtZUlkKTtcclxuICAgICAgICAgICAgICAgIGlmICh0ZW1wID09IHRhYk5hbWVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWJDb250ZW50T3Blbi5jbGFzc0xpc3QuY29udGFpbnMoJ2QtLW5vbmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJDb250ZW50T3Blbi5jbGFzc0xpc3QucmVtb3ZlKCdkLS1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdkLS1ub25lJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdkLS1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuaWYgKHRhYkl0ZW1Cb3R0b20gJiYgdGFiQ29udGVudEJvdHRvbSkge1xyXG4gICAgdGFiSXRlbUJvdHRvbS5mb3JFYWNoKChqdGVtLCBpKSA9PiB7XHJcbiAgICAgICAganRlbS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFiSXRlbUJvdHRvbS5sZW5ndGg7IGkrKykgeyB0YWJJdGVtQm90dG9tW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpOyB9XHJcbiAgICAgICAgICAgIGp0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHRhYk5hbWUgPSBldmVudC5zcmNFbGVtZW50LmlkO1xyXG4gICAgICAgICAgICB0YWJOYW1lSWQgPSB0YWJOYW1lICsgJ0NvbnRlbnRJdGVtJztcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFiTmFtZUlkKTtcclxuICAgICAgICAgICAgdGFiQ29udGVudEJvdHRvbS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IGl0ZW0uY2hpbGROb2Rlc1swXS5wYXJlbnRFbGVtZW50LmlkO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhYkNvbnRlbnRCb3R0b21PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0YWJOYW1lSWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRlbXAgPT0gdGFiTmFtZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYkNvbnRlbnRCb3R0b21PcGVuLmNsYXNzTGlzdC5jb250YWlucygnZC0tbm9uZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkNvbnRlbnRCb3R0b21PcGVuLmNsYXNzTGlzdC5yZW1vdmUoJ2QtLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2QtLW5vbmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2QtLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSIsImltcG9ydCBTaWVtYSBmcm9tICdzaWVtYSc7XHJcbmltcG9ydCB7IG1vYmlsZUFuZFRhYmxldENoZWNrIH0gZnJvbSAnLi4vcGFydHRlbi9tb2JpbGVBbmRUYWJsZXRDaGVjayc7XHJcbnZhciBob21lcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkuaG9tZScpO1xyXG5pZiAoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIgfHwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi93b2xmYWN0aXZlLWdhbWV3aWtpL1wiIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvZ2FtZS13aWtpL1wiKSAmJiBob21lcGFnZSkge1xyXG4gICAgLypGaXJzdCBDYXJvdXNlbCovXHJcbiAgICB2YXIgcHJvdG9jb2wgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2w7XHJcbiAgICB2YXIgaG9zdG5hbWUgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XHJcbiAgICB2YXIgY2hpbGRDYXJvdXNlbEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2Fyb3VzZWxDb250YWluQmlnIC5jYXJvdXNlbF9faXRlbScpO1xyXG4gICAgdmFyIGNoaWxkQ2Fyb3VzZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2JpZy1idG4nKTtcclxuICAgIGNvbnN0IGNhcnNvdXNlbEhvbWUgPSBuZXcgU2llbWEoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnI2Nhcm91c2VsQ29udGFpbkJpZycsXHJcbiAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICBlYXNpbmc6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgcGVyUGFnZTogMSxcclxuICAgICAgICBzdGFydEluZGV4OiAwLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICBtdWx0aXBsZURyYWc6IHRydWUsXHJcbiAgICAgICAgdGhyZXNob2xkOiAyMCxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIHJ0bDogZmFsc2UsXHJcbiAgICAgICAgb25Jbml0OiAoKSA9PiB7fSxcclxuICAgICAgICBvbkNoYW5nZTogKCkgPT4ge30sXHJcbiAgICB9KTtcclxuICAgIGlmIChjaGlsZENhcm91c2VsSXRlbS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgY2hpbGRDYXJvdXNlbEJ0bi5pbm5lckhUTUwgPSBgXHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgYXJpYS1sYWJlbD1cImNhcm91c2VsLXByZXZcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnQgaWNvblwiPjwvaT48L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBhcmlhLWxhYmVsPVwiY2Fyb3VzZWwtbmV4dFwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHQgaWNvblwiPjwvaT48L2J1dHRvbj5cclxuICAgIGA7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2FyaWEtbGFiZWw9XCJjYXJvdXNlbC1wcmV2XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYXJzb3VzZWxIb21lLnByZXYoKSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2FyaWEtbGFiZWw9XCJjYXJvdXNlbC1uZXh0XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYXJzb3VzZWxIb21lLm5leHQoKSk7XHJcbiAgICB9XHJcbiAgICAvKkZpcnN0IENhcm91c2VsKi9cclxuICAgIC8qQ2Fyb3VzZWwgVmlkZW8qL1xyXG4gICAgdmFyIG1vYmlsZUNoZWNrID0gbW9iaWxlQW5kVGFibGV0Q2hlY2soKTtcclxuICAgIHZhciBsYXN0VmlkZW9DaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfdmlkZW8nKTtcclxuICAgIGlmIChtb2JpbGVDaGVjayA9PT0gZmFsc2UgJiYgbGFzdFZpZGVvQ2hlY2spIHtcclxuICAgICAgICB2YXIgY2Fyb3VzZWxWaWRlb0hvbWVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2xhdGVzdFZpZGVvIC5zbGlkZXJfdmlkZW8gLmltYWdlc19sYXRlc3RfdmlkZW8nKTtcclxuICAgICAgICB2YXIgY2Fyb3VzZWxWaWRlb0hvbWVEb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGF0ZXN0VmlkZW8gLnNsaWRlcl92aWRlby1kb3QnKTtcclxuICAgICAgICB2YXIgY2Fyb3VzZWxWaWRlb0hvbWVEb3RQYWdlID0gTWF0aC5jZWlsKGNhcm91c2VsVmlkZW9Ib21lSXRlbS5sZW5ndGggLyAzKTtcclxuICAgICAgICBjb25zdCBjYXJzb3VzZWxWaWRlb0hvbWUgPSBuZXcgU2llbWEoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJy5zbGlkZXJfdmlkZW8nLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgIHBlclBhZ2U6IDMsXHJcbiAgICAgICAgICAgIHN0YXJ0SW5kZXg6IDAsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgbXVsdGlwbGVEcmFnOiB0cnVlLFxyXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDIwLFxyXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgcnRsOiBmYWxzZSxcclxuICAgICAgICAgICAgb25Jbml0OiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgb25DaGFuZ2U6ICgpID0+IHt9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChjYXJvdXNlbFZpZGVvSG9tZURvdFBhZ2UgPiAxKSB7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gYGA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGNhcm91c2VsVmlkZW9Ib21lRG90UGFnZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ICs9IGA8c3BhbiBjbGFzcz1cImQtLWlubGluZS0tYmxvY2sgbXhyLTUgZG90VmlkZW9cIj48aSBjbGFzcz1cImZhcyBmYS1jaXJjbGVcIj48L2k+PC9zcGFuPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2Fyb3VzZWxWaWRlb0hvbWVEb3QuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICAgICAgdmFyIGRvdFZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvdFZpZGVvJyk7XHJcbiAgICAgICAgICAgIGRvdFZpZGVvWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBkb3RWaWRlby5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdFZpZGVvLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnNvdXNlbFZpZGVvSG9tZS5nb1RvKChpICsgMSkgKiAzIC0gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90VmlkZW8uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Fyc291c2VsVmlkZW9Ib21lLmdvVG8oaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChtb2JpbGVDaGVjayA9PT0gdHJ1ZSAmJiBsYXN0VmlkZW9DaGVjaykge1xyXG4gICAgICAgIHZhciBjYXJvdXNlbFZpZGVvSG9tZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbGF0ZXN0VmlkZW8gLnNsaWRlcl92aWRlbyAuaW1hZ2VzX2xhdGVzdF92aWRlbycpO1xyXG4gICAgICAgIHZhciBjYXJvdXNlbFZpZGVvSG9tZURvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXRlc3RWaWRlbyAuc2xpZGVyX3ZpZGVvLWRvdCcpO1xyXG4gICAgICAgIHZhciBjYXJvdXNlbFZpZGVvSG9tZURvdFBhZ2UgPSBNYXRoLmNlaWwoY2Fyb3VzZWxWaWRlb0hvbWVJdGVtLmxlbmd0aCAvIDEpO1xyXG4gICAgICAgIGNvbnN0IGNhcnNvdXNlbFZpZGVvSG9tZSA9IG5ldyBTaWVtYSh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLnNsaWRlcl92aWRlbycsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgcGVyUGFnZTogMSxcclxuICAgICAgICAgICAgc3RhcnRJbmRleDogMCxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBtdWx0aXBsZURyYWc6IHRydWUsXHJcbiAgICAgICAgICAgIHRocmVzaG9sZDogMjAsXHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBydGw6IGZhbHNlLFxyXG4gICAgICAgICAgICBvbkluaXQ6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogKCkgPT4ge30sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGNhcm91c2VsVmlkZW9Ib21lRG90UGFnZSA+IDEpIHtcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBgYDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gY2Fyb3VzZWxWaWRlb0hvbWVEb3RQYWdlOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgKz0gYDxzcGFuIGNsYXNzPVwiZC0taW5saW5lLS1ibG9jayBteHItNSBkb3RWaWRlb1wiPjxpIGNsYXNzPVwiZmFzIGZhLWNpcmNsZVwiPjwvaT48L3NwYW4+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXJvdXNlbFZpZGVvSG9tZURvdC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gICAgICAgICAgICB2YXIgZG90VmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG90VmlkZW8nKTtcclxuICAgICAgICAgICAgZG90VmlkZW9bMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGRvdFZpZGVvLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90VmlkZW8uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Fyc291c2VsVmlkZW9Ib21lLmdvVG8oKGkgKyAxKSAqIDMgLSAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RWaWRlby5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJzb3VzZWxWaWRlb0hvbWUuZ29UbyhpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKkNhcm91c2VsIFZpZGVvKi9cclxuICAgIC8qUG9zdCBDYXJvdXNlbCovXHJcbiAgICB2YXIgY2Fyc291c2VsUG9zdEhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdExpc3QgLnBvc3RMaXN0X19idG4nKTtcclxuICAgIHZhciBjYXJvc2VsUG9zdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9zdExpc3QgLnBvc3RMaXN0X19pdGVtJyk7XHJcbiAgICBpZiAoIW1vYmlsZUNoZWNrKSB7XHJcbiAgICAgICAgY29uc3QgY2Fyc291c2VsUG9zdEhvbWUgPSBuZXcgU2llbWEoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJy5wb3N0TGlzdF9fY29udGFpbicsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgcGVyUGFnZTogNCxcclxuICAgICAgICAgICAgc3RhcnRJbmRleDogMCxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBtdWx0aXBsZURyYWc6IHRydWUsXHJcbiAgICAgICAgICAgIHRocmVzaG9sZDogMjAsXHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBydGw6IGZhbHNlLFxyXG4gICAgICAgICAgICBvbkluaXQ6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogKCkgPT4ge30sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGNhcm9zZWxQb3N0TGlzdC5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgIGNhcnNvdXNlbFBvc3RIb21lQnRuLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1wcmV2XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0IGljb25cIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIGFyaWEtbGFiZWw9XCJwb3N0LWxpc3QtbmV4dFwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHQgaWNvblwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICBgO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1uZXh0XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYXJzb3VzZWxQb3N0SG9tZS5wcmV2KCkpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1wcmV2XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYXJzb3VzZWxQb3N0SG9tZS5uZXh0KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAobW9iaWxlQ2hlY2spIHtcclxuICAgICAgICBjb25zdCBjYXJzb3VzZWxQb3N0SG9tZSA9IG5ldyBTaWVtYSh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLnBvc3RMaXN0X19jb250YWluJyxcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICBwZXJQYWdlOiAxLFxyXG4gICAgICAgICAgICBzdGFydEluZGV4OiAwLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIG11bHRpcGxlRHJhZzogdHJ1ZSxcclxuICAgICAgICAgICAgdGhyZXNob2xkOiAyMCxcclxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgIHJ0bDogZmFsc2UsXHJcbiAgICAgICAgICAgIG9uSW5pdDogKCkgPT4ge30sXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoY2Fyb3NlbFBvc3RMaXN0Lmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgY2Fyc291c2VsUG9zdEhvbWVCdG4uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBhcmlhLWxhYmVsPVwicG9zdC1saXN0LXByZXZcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnQgaWNvblwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1uZXh0XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodCBpY29uXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblthcmlhLWxhYmVsPVwicG9zdC1saXN0LW5leHRcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhcnNvdXNlbFBvc3RIb21lLnByZXYoKSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblthcmlhLWxhYmVsPVwicG9zdC1saXN0LXByZXZcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhcnNvdXNlbFBvc3RIb21lLm5leHQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qUG9zdCBDYXJvdXNlbCovXHJcbiAgICAvKkNsaWsgc2hvdyBwb3N0IGNhdGVnb3J5Ki9cclxuICAgIHZhciBjYXRlZ29yeUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnlMaXN0IC5jYXRlZ29yeUxpc3RfX2NvbnRhaW4gLnRlcm1fX2xpbmsnKTtcclxuICAgIGNhdGVnb3J5TGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yeSA9IGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFwaVVybCA9IGBgO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcGlVcmwgPSBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9L3dwLWpzb24vYmxvZy1hcGkvdjEvYmxvZy9vZmZzZXQ9MCZjYXRlZ29yeT0ke2NhdGVnb3J5fWA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvd29sZmFjdGl2ZS1nYW1ld2lraS9cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaVVybCA9IGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vd29sZmFjdGl2ZS1nYW1ld2lraS93cC1qc29uL2Jsb2ctYXBpL3YxL2Jsb2cvb2Zmc2V0PTAmY2F0ZWdvcnk9JHtjYXRlZ29yeX1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmV0Y2goYXBpVXJsKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IGBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2F0ZWdvcnlTaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3RMaXN0IC5wb3N0TGlzdF9fY29udGFpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeVNob3cuaW5uZXJIVE1MID0gYGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCArPSBgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zdExpc3RfX2l0ZW0gZC0tYmxvY2tcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc3RMaXN0X19pdGVtLWltZ1wiPlxyXG4gICAgICAgICAgICAgICR7aXRlbS50aHVtYm5haWx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiJHtpdGVtLnVybH1cIiBjbGFzcz1cInBvc3RMaXN0X19pdGVtLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGl0bGUtLWl0ZW1cIj4ke2l0ZW0udGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeVNob3cuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtb2JpbGVDaGVjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2Fyc291c2VsUG9zdEhvbWUgPSBuZXcgU2llbWEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLnBvc3RMaXN0X19jb250YWluJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJQYWdlOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlRHJhZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ0bDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Jbml0OiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXJvc2VsUG9zdExpc3QubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnNvdXNlbFBvc3RIb21lQnRuLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1wcmV2XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0IGljb25cIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIGFyaWEtbGFiZWw9XCJwb3N0LWxpc3QtbmV4dFwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHQgaWNvblwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblthcmlhLWxhYmVsPVwicG9zdC1saXN0LW5leHRcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhcnNvdXNlbFBvc3RIb21lLnByZXYoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2FyaWEtbGFiZWw9XCJwb3N0LWxpc3QtcHJldlwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2Fyc291c2VsUG9zdEhvbWUubmV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2JpbGVDaGVjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2Fyc291c2VsUG9zdEhvbWUgPSBuZXcgU2llbWEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLnBvc3RMaXN0X19jb250YWluJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJQYWdlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlRHJhZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ0bDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Jbml0OiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXJvc2VsUG9zdExpc3QubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnNvdXNlbFBvc3RIb21lQnRuLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgYXJpYS1sYWJlbD1cInBvc3QtbGlzdC1wcmV2XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0IGljb25cIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIGFyaWEtbGFiZWw9XCJwb3N0LWxpc3QtbmV4dFwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHQgaWNvblwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblthcmlhLWxhYmVsPVwicG9zdC1saXN0LW5leHRcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhcnNvdXNlbFBvc3RIb21lLnByZXYoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2FyaWEtbGFiZWw9XCJwb3N0LWxpc3QtcHJldlwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2Fyc291c2VsUG9zdEhvbWUubmV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLypDbGljayBzaG93IHBvc3QgY2F0ZWdvcnkqL1xyXG4gICAgICAgIC8qQ2xpY2sgbG9hZG1vcmUgb24gZ2FtZSB3aWtpKi9cclxuICAgIHZhciBsb2FkbW9yZUJ0bldpa2kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9zdHJhdGVneSAuZ3RyX3NlZV9tb3JlJyk7XHJcbiAgICB2YXIgbG9hZG1vcmVCdG5TaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVfc3RyYXRlZ3kgLmdhbWVfc3RyYXRlZ3ktbGlzdCcpO1xyXG4gICAgdmFyIG9mZnNldExvYWQgPSAxMjtcclxuICAgIGxvYWRtb3JlQnRuV2lraS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBsb2FkbW9yZVVybCA9IGBgO1xyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiKSB7XHJcbiAgICAgICAgICAgIGxvYWRtb3JlVXJsID0gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfS93cC1qc29uL2dhbWV3aWtpLWFwaS92MS9nYW1ld2lraS9vZmZzZXQ9JHtvZmZzZXRMb2FkfWA7XHJcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL3dvbGZhY3RpdmUtZ2FtZXdpa2kvXCIpIHtcclxuICAgICAgICAgICAgbG9hZG1vcmVVcmwgPSBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9L3dvbGZhY3RpdmUtZ2FtZXdpa2kvd3AtanNvbi9nYW1ld2lraS1hcGkvdjEvZ2FtZXdpa2kvb2Zmc2V0PSR7b2Zmc2V0TG9hZH1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaChsb2FkbW9yZVVybClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBgYDtcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtZGl2aWRlLTIgbWMtbWcgY29sLWRpdmlkZS1zbS02IGNvbC1kaXZpZGUtbWQtM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VzX2dhbWVfc3RyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtpdGVtLnVybH1cIj4ke2l0ZW0udGh1bWJuYWlsfTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZV9nYW1lX3N0clwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7aXRlbS51cmx9XCI+JHtpdGVtLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBsb2FkbW9yZUJ0blNob3cuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggIT09IDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZG1vcmVCdG5XaWtpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5sZW5ndGggPT09IDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0TG9hZCA9IG9mZnNldExvYWQgKyAxMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHZhciBmcmVlQXBwVXJsID0gXCJcIjtcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiKSB7XHJcbiAgICAgICAgLy8gZnJlZUFwcFVybCA9YCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfS93cC1jb250ZW50L3RoZW1lcy93b2xmYWN0aXZlLWdhbWV3aWtpL2pzb24vZnJlZS1kYXRhLmpzb25gO1xyXG4gICAgICAgIGZyZWVBcHBVcmwgPSBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9d3AtanNvbi9yYW5raW5nLWFwaS92MS9mcmVlYDtcclxuICAgIH0gZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi93b2xmYWN0aXZlLWdhbWV3aWtpL1wiKSB7XHJcbiAgICAgICAgZnJlZUFwcFVybCA9IGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vd29sZmFjdGl2ZS1nYW1ld2lraS93cC1qc29uL3JhbmtpbmctYXBpL3YxL2ZyZWVgO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2dhbWUtd2lraS9cIikge1xyXG4gICAgICAgIGZyZWVBcHBVcmwgPSBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9L2dhbWUtd2lraS93cC1qc29uL3JhbmtpbmctYXBpL3YxL2ZyZWVgO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZnJlZUFwcFVybCk7XHJcbiAgICBmZXRjaChmcmVlQXBwVXJsKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBgYDtcclxuICAgICAgICAgICAgbGV0IGZyZWVHYW1lUmFua2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmcmVlR2FtZVJhbmtpbmcnKTtcclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmF0aW5nQ291bnQgPSBNYXRoLnJvdW5kKGl0ZW0uc3Rhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhdGluZ0xlZnQgPSA1IC0gTWF0aC5yb3VuZChpdGVtLnN0YXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYXRpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByYXRpbmdDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZyArPSBgPGkgY2xhc3M9XCJmYXMgZmEtc3RhclwiPjwvaT5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmF0aW5nTGVmdDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZyArPSBgPGkgY2xhc3M9XCJmYXMgZmEtc3RhciBsZWZ0XCI+PC9pPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWNvbnRhaW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWltZ1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpdGVtLmltYWdlfVwiIGFsdD1cIiR7aXRlbS51cmx9XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlLS1pdGVtXCI+JHtpdGVtLnRpdGxlfTwvcD4gXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhcHAtLXN0YXJcIj4ke3JhdGluZ308L3A+ICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWJ0blwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiJHtpdGVtLnVybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2xvdWQtZG93bmxvYWQtYWx0XCI+PC9pPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBmcmVlR2FtZVJhbmtpbmcuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICB9KVxyXG4gICAgdmFyIGdyb3NzaW5nQXBwVXJsID0gXCJcIjtcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiKSB7XHJcbiAgICAgICAgZ3Jvc3NpbmdBcHBVcmwgPSBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9L3dwLWpzb24vcmFua2luZy1hcGkvdjEvZnJlZWA7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvd29sZmFjdGl2ZS1nYW1ld2lraS9cIikge1xyXG4gICAgICAgIGdyb3NzaW5nQXBwVXJsID0gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfS93b2xmYWN0aXZlLWdhbWV3aWtpL3dwLWpzb24vcmFua2luZy1hcGkvdjEvZnJlZWA7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvZ2FtZS13aWtpL1wiKSB7XHJcbiAgICAgICAgZ3Jvc3NpbmdBcHBVcmwgPSBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9L2dhbWUtd2lraS93cC1qc29uL3JhbmtpbmctYXBpL3YxL2dyb3NzaW5nYDtcclxuICAgIH1cclxuICAgIGZldGNoKGdyb3NzaW5nQXBwVXJsKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGBgO1xyXG4gICAgICAgICAgICBsZXQgZ3Jvc3NpbmdHYW1lUmFua2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNncm9zc2luZ0dhbWVSYW5raW5nJyk7XHJcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhdGluZ0NvdW50ID0gTWF0aC5yb3VuZChpdGVtLnN0YXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYXRpbmdMZWZ0ID0gNSAtIE1hdGgucm91bmQoaXRlbS5zdGFyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmF0aW5nID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmF0aW5nQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYXRpbmcgKz0gYDxpIGNsYXNzPVwiZmFzIGZhLXN0YXJcIj48L2k+YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJhdGluZ0xlZnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYXRpbmcgKz0gYDxpIGNsYXNzPVwiZmFzIGZhLXN0YXIgbGVmdFwiPjwvaT5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ICs9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2l0ZW0tY29udGFpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aXRlbS5pbWFnZX1cIiBhbHQ9XCIke2l0ZW0udXJsfVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZS0taXRlbVwiPiR7aXRlbS50aXRsZX08L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFwcC0tc3RhclwiPiR7cmF0aW5nfTwvcD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2l0ZW0tYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtpdGVtLnVybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNsb3VkLWRvd25sb2FkLWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZ3Jvc3NpbmdHYW1lUmFua2luZy5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLypDbGljayBsb2FkbW9yZSBvbiBnYW1lIHdpa2kqL1xyXG4gICAgICAgIC8qUmVuZGVyIGFwaSBhcHAgcmFua2luZyovXHJcbn0iLCJ2YXIgZG9tQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzaW5nbGVcIik7XHJcbmlmIChkb21Cb2R5Lmxlbmd0aCAhPSAwKSB7XHJcbiAgICBjb25zdCBiYWNrVG9Ub3BCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhY2stdG8tdG9wLWJ0blwiKTtcclxuICAgIHZhciBwcm90b2NvbCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbDtcclxuICAgIHZhciBob3N0bmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEZ1bmN0aW9uKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzY3JvbGxGdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7IC8vIFNob3cgYmFja1RvVG9wQnV0dG9uXHJcbiAgICAgICAgICAgIGlmICghYmFja1RvVG9wQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImJ0bkVudHJhbmNlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrVG9Ub3BCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImJ0bkV4aXRcIik7XHJcbiAgICAgICAgICAgICAgICBiYWNrVG9Ub3BCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ0bkVudHJhbmNlXCIpO1xyXG4gICAgICAgICAgICAgICAgYmFja1RvVG9wQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgeyAvLyBIaWRlIGJhY2tUb1RvcEJ1dHRvblxyXG4gICAgICAgICAgICBpZiAoYmFja1RvVG9wQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImJ0bkVudHJhbmNlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrVG9Ub3BCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImJ0bkVudHJhbmNlXCIpO1xyXG4gICAgICAgICAgICAgICAgYmFja1RvVG9wQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG5FeGl0XCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrVG9Ub3BCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfSwgMjUwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiYWNrVG9Ub3BCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNtb290aFNjcm9sbEJhY2tUb1RvcCk7XHJcblxyXG4gICAgZnVuY3Rpb24gc21vb3RoU2Nyb2xsQmFja1RvVG9wKCkge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gMDtcclxuICAgICAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGFyZ2V0UG9zaXRpb24gLSBzdGFydFBvc2l0aW9uO1xyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gNzUwO1xyXG4gICAgICAgIGxldCBzdGFydCA9IG51bGw7XHJcblxyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAodGltZXN0YW1wKSB7XHJcbiAgICAgICAgICAgIGlmICghc3RhcnQpIHN0YXJ0ID0gdGltZXN0YW1wO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHRpbWVzdGFtcCAtIHN0YXJ0O1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgZWFzZUluT3V0Q3ViaWMocHJvZ3Jlc3MsIHN0YXJ0UG9zaXRpb24sIGRpc3RhbmNlLCBkdXJhdGlvbikpO1xyXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPCBkdXJhdGlvbikgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZWFzZUluT3V0Q3ViaWModCwgYiwgYywgZCkge1xyXG4gICAgICAgIHQgLz0gZCAvIDI7XHJcbiAgICAgICAgaWYgKHQgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKyBiO1xyXG4gICAgICAgIHQgLT0gMjtcclxuICAgICAgICByZXR1cm4gYyAvIDIgKiAodCAqIHQgKiB0ICsgMikgKyBiO1xyXG4gICAgfTtcclxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkgeyBzY3JvbGxGaXhlZFNpZGVCYXIoKSB9O1xyXG5cclxuICAgIHZhciBzaWRlYmFyTGVmdHNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZUJhckxlZnRTY3JvbGxcIik7XHJcbiAgICB2YXIgc2lkZWJhclJpZ2h0c2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyUmlnaHRzY3JvbGxcIik7XHJcbiAgICB2YXIgc2lkZWJhck1lbnVSYW5raW5nc2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyTWVudVJhbmtpbmdzY3JvbGxcIik7XHJcbiAgICB2YXIgc2lkZWJhck1lbnVMZWZ0Y3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJNZW51TGVmdGNyb2xsXCIpO1xyXG4gICAgdmFyIHN0aWNreUxlZnQgPSBzaWRlYmFyTGVmdHNjcm9sbC5vZmZzZXRUb3A7XHJcbiAgICBjb25zdCBzY3JvbGxGaXhlZFNpZGVCYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IHN0aWNreUxlZnQpIHtcclxuICAgICAgICAgICAgc2lkZWJhckxlZnRzY3JvbGwuY2xhc3NMaXN0LmFkZChcInJvbGxfc2lkZWJhclwiKTtcclxuICAgICAgICAgICAgc2lkZWJhclJpZ2h0c2Nyb2xsLmNsYXNzTGlzdC5hZGQoXCJyb2xsX3NpZGViYXJcIik7XHJcbiAgICAgICAgICAgIHNpZGViYXJNZW51UmFua2luZ3Njcm9sbC5jbGFzc0xpc3QuYWRkKFwicm9sbF9zaWRlYmFyLW1lbnVcIik7XHJcbiAgICAgICAgICAgIHNpZGViYXJNZW51TGVmdGNyb2xsLmNsYXNzTGlzdC5hZGQoXCJyb2xsX3NpZGViYXItbWVudVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaWRlYmFyTGVmdHNjcm9sbC5jbGFzc0xpc3QucmVtb3ZlKFwicm9sbF9zaWRlYmFyXCIpO1xyXG4gICAgICAgICAgICBzaWRlYmFyUmlnaHRzY3JvbGwuY2xhc3NMaXN0LnJlbW92ZShcInJvbGxfc2lkZWJhclwiKTtcclxuICAgICAgICAgICAgc2lkZWJhck1lbnVSYW5raW5nc2Nyb2xsLmNsYXNzTGlzdC5yZW1vdmUoXCJyb2xsX3NpZGViYXItbWVudVwiKTtcclxuICAgICAgICAgICAgc2lkZWJhck1lbnVMZWZ0Y3JvbGwuY2xhc3NMaXN0LnJlbW92ZShcInJvbGxfc2lkZWJhci1tZW51XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBmcmVlQXBwVXJsID0gXCJcIjtcclxuICAgIGlmIChwcm90b2NvbCA9PT0gXCJodHRwOlwiICYmIGhvc3RuYW1lID09PSBcImxvY2FsaG9zdFwiKSB7XHJcbiAgICAgICAgZnJlZUFwcFVybCA9IGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0vZ2FtZS13aWtpL3dwLWpzb24vcmFua2luZy1hcGkvdjEvZnJlZWA7XHJcbiAgICB9IGVsc2UgaWYgKHByb3RvY29sID09PSBcImh0dHBzOlwiIHx8IHByb3RvY29sID09PSBcImh0dHA6XCIpIHtcclxuICAgICAgICBmcmVlQXBwVXJsID0gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfS93cC1qc29uL3JhbmtpbmctYXBpL3YxL2ZyZWVgO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZnJlZUFwcFVybCk7XHJcbiAgICBmZXRjaChmcmVlQXBwVXJsKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBgYDtcclxuICAgICAgICAgICAgbGV0IGZyZWVHYW1lUmFua2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmcmVlR2FtZVJhbmtpbmcnKTtcclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmF0aW5nQ291bnQgPSBNYXRoLnJvdW5kKGl0ZW0uc3Rhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhdGluZ0xlZnQgPSA1IC0gTWF0aC5yb3VuZChpdGVtLnN0YXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYXRpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByYXRpbmdDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZyArPSBgPGkgY2xhc3M9XCJmYXMgZmEtc3RhclwiPjwvaT5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmF0aW5nTGVmdDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZyArPSBgPGkgY2xhc3M9XCJmYXMgZmEtc3RhciBsZWZ0XCI+PC9pPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19faXRlbVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWNvbnRhaW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWltZ1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpdGVtLmltYWdlfVwiIGFsdD1cIiR7aXRlbS51cmx9XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlLS1pdGVtXCI+JHtpdGVtLnRpdGxlfTwvcD4gXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhcHAtLXN0YXJcIj4ke3JhdGluZ308L3A+ICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWJ0blwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiJHtpdGVtLnVybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2xvdWQtZG93bmxvYWQtYWx0XCI+PC9pPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBmcmVlR2FtZVJhbmtpbmcuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICB9KVxyXG4gICAgdmFyIGdyb3NzaW5nQXBwVXJsID0gXCJcIjtcclxuICAgIGlmIChwcm90b2NvbCA9PT0gXCJodHRwOlwiICYmIGhvc3RuYW1lID09PSBcImxvY2FsaG9zdFwiKSB7XHJcbiAgICAgICAgZ3Jvc3NpbmdBcHBVcmwgPSBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9L2dhbWUtd2lraS93cC1qc29uL3JhbmtpbmctYXBpL3YxL2dyb3NzaW5nYDtcclxuICAgIH0gZWxzZSBpZiAocHJvdG9jb2wgPT09IFwiaHR0cHM6XCIgfHwgcHJvdG9jb2wgPT09IFwiaHR0cDpcIikge1xyXG4gICAgICAgIGdyb3NzaW5nQXBwVXJsID0gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfS93cC1qc29uL3JhbmtpbmctYXBpL3YxL2dyb3NzaW5nYDtcclxuICAgIH1cclxuICAgIGZldGNoKGdyb3NzaW5nQXBwVXJsKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGBgO1xyXG4gICAgICAgICAgICBsZXQgZ3Jvc3NpbmdHYW1lUmFua2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNncm9zc2luZ0dhbWVSYW5raW5nJyk7XHJcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhdGluZ0NvdW50ID0gTWF0aC5yb3VuZChpdGVtLnN0YXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYXRpbmdMZWZ0ID0gNSAtIE1hdGgucm91bmQoaXRlbS5zdGFyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmF0aW5nID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmF0aW5nQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYXRpbmcgKz0gYDxpIGNsYXNzPVwiZmFzIGZhLXN0YXJcIj48L2k+YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJhdGluZ0xlZnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYXRpbmcgKz0gYDxpIGNsYXNzPVwiZmFzIGZhLXN0YXIgbGVmdFwiPjwvaT5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ICs9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2l0ZW0tY29udGFpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1yYW5raW5nX19pdGVtLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aXRlbS5pbWFnZX1cIiBhbHQ9XCIke2l0ZW0udXJsfVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtcmFua2luZ19fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZS0taXRlbVwiPiR7aXRlbS50aXRsZX08L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFwcC0tc3RhclwiPiR7cmF0aW5nfTwvcD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXJhbmtpbmdfX2l0ZW0tYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtpdGVtLnVybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNsb3VkLWRvd25sb2FkLWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZ3Jvc3NpbmdHYW1lUmFua2luZy5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gICAgICAgIH0pXHJcbn0iLCJjb25zdCBtb2JpbGVBbmRUYWJsZXRDaGVjayA9ICgpID0+e1xyXG4gIGxldCBjaGVjayA9IGZhbHNlO1xyXG4gICAgKGZ1bmN0aW9uKGEpe1xyXG4gICAgICAgIGlmKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaS50ZXN0KGEpfHwvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsNCkpKVxyXG4gICAgICAgICAgICBjaGVjayA9IHRydWU7XHJcbiAgICB9KShuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmEpO1xyXG4gICAgcmV0dXJuIGNoZWNrO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBtb2JpbGVBbmRUYWJsZXRDaGVja1xyXG59O1xyXG4iLCJpbXBvcnQgTGF6eUxvYWQgZnJvbSBcInZhbmlsbGEtbGF6eWxvYWRcIjtcclxuaW1wb3J0ICcuL3BhZ2VzL2hvbWVwYWdlJztcclxuaW1wb3J0ICcuL3BhZ2VzL3NpbmdsZSc7XHJcbmltcG9ydCAnLi9wYWdlcy9nYW1ld2lraS10YWInO1xyXG5pbXBvcnQgJ3NoYXJlb24nXHJcbi8qVkFSSUFCTEVTKi9cclxudmFyIGlmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lmcmFtZScpO1xyXG52YXIgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XHJcbnZhciB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ZpZGVvJyk7XHJcbi8qVkFSSUFCTEVTKi9cclxuLypMb2NhbCBTdG9yYWdlKi9cclxuZnVuY3Rpb24gTHV1VmFvTG9jYWxTdG9yYWdlKEFycmF5LCBuYW1lQXJyYXkpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgdmFyIGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkoQXJyYXkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZUFycmF5LCBqc29uRGF0YSk7XHJcbn1cclxuLypuYW1lQXJyYXkgbMOgIGThuqFuZyBzdHJpbmcsIGFycmF5IGzDoCBiaeG6v24gYXJyYXkgY+G6p24gbMawdSB2w6BvKi9cclxuZnVuY3Rpb24gTGF5TG9jYWxTdG9yYWdlKG5hbWVBcnJheSwgQXJyYXkpIHtcclxuICAgIHZhciBqc29uRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWVBcnJheSk7XHJcbiAgICBpZiAoIWpzb25EYXRhKSB7IGxvY2FsU3RvcmFnZSA9IFtdOyByZXR1cm47IH1cclxuICAgIEFycmF5ID0gSlNPTi5wYXJzZShqc29uRGF0YSk7XHJcbn1cclxuLypuYW1lQXJyYXkgbMOgIGThuqFuZyBzdHJpbmcsIGFycmF5IGzDoCBiaeG6v24gYXJyYXkgY+G6p24gbMawdSBsb2NhbCB2w6BvKi9cclxuLypMb2NhbCBTdG9yYWdlKi9cclxuLyogUmVzcG9zaXZlIGxhenkgbG9hZCovXHJcbmZ1bmN0aW9uIGlmcmFtZVJlc3Bvc2l2ZSgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWZyYW1lLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWZyYW1lW2ldLmNsYXNzTGlzdC5hZGQoJ2xhenknKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW1nUmVzcG9zaXZlKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpbWdbaV0uY2xhc3NMaXN0LmFkZCgnbGF6eScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2aWRlb1Jlc3Bvc2l2ZSgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmlkZW8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2aWRlb1tpXS5jbGFzc0xpc3QuYWRkKCdsYXp5Jyk7XHJcbiAgICB9XHJcbn1cclxuaWZyYW1lID8gaWZyYW1lUmVzcG9zaXZlKCkgOiB7fTtcclxuaW1nID8gaW1nUmVzcG9zaXZlKCkgOiB7fTtcclxudmlkZW8gPyB2aWRlb1Jlc3Bvc2l2ZSgpIDoge307XHJcbnZhciBsYXp5TG9hZEluc3RhbmNlID0gbmV3IExhenlMb2FkKHsgZWxlbWVudHNfc2VsZWN0b3I6IFwiLmxhenlcIiB9KTtcclxuLyogUmVzcG9zaXZlIGxhenkgbG9hZCovIl0sInNvdXJjZVJvb3QiOiIifQ==