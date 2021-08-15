webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Carousel/Carousel.js":
/*!*****************************************!*\
  !*** ./components/Carousel/Carousel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! embla-carousel/react */ \"./node_modules/embla-carousel/react.js\");\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CarouselButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CarouselButtons */ \"./components/Carousel/CarouselButtons.js\");\n/* harmony import */ var _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/useRecursiveTimeout */ \"./lib/useRecursiveTimeout.js\");\n/* harmony import */ var _CarouselStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CarouselStyles */ \"./components/Carousel/CarouselStyles.js\");\n/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Slide */ \"./components/Carousel/Slide.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Carousel/Carousel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar AUTOPLAY_INTERVAL = 4000;\n\nvar EmblaCarousel = function EmblaCarousel(_ref) {\n  _s();\n\n  var slides = _ref.slides,\n      mediaByIndex = _ref.mediaByIndex;\n\n  // animation state\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      animation = _useState[0],\n      setAnimation = _useState[1]; // key state for slides\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      carouselRandomNumber = _useState2[0],\n      setCarouselRandomNumber = _useState2[1];\n\n  var _useEmblaCarousel = Object(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"])({\n    loop: true,\n    skipSnaps: false,\n    speed: 8\n  }),\n      _useEmblaCarousel2 = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useEmblaCarousel, 2),\n      viewportRef = _useEmblaCarousel2[0],\n      embla = _useEmblaCarousel2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      prevBtnEnabled = _useState3[0],\n      setPrevBtnEnabled = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      nextBtnEnabled = _useState4[0],\n      setNextBtnEnabled = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      selectedIndex = _useState5[0],\n      setSelectedIndex = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      scrollSnaps = _useState6[0],\n      setScrollSnaps = _useState6[1];\n\n  var autoplay = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n\n    if (embla.canScrollNext()) {\n      embla.scrollNext();\n      setCarouselRandomNumber(Math.random());\n      setAnimation(true);\n    } else {\n      embla.scrollTo(0);\n      setCarouselRandomNumber(Math.random());\n      setAnimation(true);\n    }\n  }, [embla]);\n\n  var _useRecursiveTimeout = Object(_lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_5__[\"useRecursiveTimeout\"])(autoplay, AUTOPLAY_INTERVAL),\n      play = _useRecursiveTimeout.play,\n      stop = _useRecursiveTimeout.stop;\n\n  var scrollNext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    setCarouselRandomNumber(Math.random());\n    embla.scrollNext();\n    stop();\n  }, [embla, stop]);\n  var scrollPrev = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    setCarouselRandomNumber(Math.random());\n    embla.scrollPrev();\n    stop();\n  }, [embla, stop]);\n  var scrollTo = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (index) {\n    setCarouselRandomNumber(Math.random());\n    embla && embla.scrollTo(index), [embla];\n  });\n  var onSelect = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    setSelectedIndex(embla.selectedScrollSnap());\n    seta;\n    setPrevBtnEnabled(embla.canScrollPrev());\n    setNextBtnEnabled(embla.canScrollNext());\n  }, [embla, setSelectedIndex]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!embla) return;\n    onSelect();\n    setScrollSnaps(embla.scrollSnapList());\n    embla.on('select', onSelect);\n    embla.on('pointerDown', stop);\n  }, [embla, onSelect, setScrollSnaps, stop]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    play();\n  }, [play]);\n  console.log(carouselRandomNumber);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselStyles__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"embla__viewport\",\n      ref: viewportRef,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"embla__container\",\n        children: slides.map(function (index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"embla__slide\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"embla__slide__inner\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Slide__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                mediaByIndex: mediaByIndex,\n                index: index,\n                setAnimation: setAnimation,\n                a: animation\n              }, carouselRandomNumber, false, {\n                fileName: _jsxFileName,\n                lineNumber: 89,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 15\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_4__[\"PrevButton\"], {\n      onClick: scrollPrev,\n      enabled: prevBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_4__[\"NextButton\"], {\n      onClick: scrollNext,\n      enabled: nextBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"embla__dots\",\n      children: scrollSnaps.map(function (_, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_4__[\"DotButton\"], {\n          selected: index === selectedIndex,\n          onClick: function onClick() {\n            return scrollTo(index);\n          }\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EmblaCarousel, \"SrMEdS4+7rTQxWJ+zdYVb8v2OlM=\", false, function () {\n  return [embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"], _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_5__[\"useRecursiveTimeout\"]];\n});\n\n_c = EmblaCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmblaCarousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"EmblaCarousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC9DYXJvdXNlbC5qcz9kNzYzIl0sIm5hbWVzIjpbIkFVVE9QTEFZX0lOVEVSVkFMIiwiRW1ibGFDYXJvdXNlbCIsInNsaWRlcyIsIm1lZGlhQnlJbmRleCIsInVzZVN0YXRlIiwiYW5pbWF0aW9uIiwic2V0QW5pbWF0aW9uIiwiY2Fyb3VzZWxSYW5kb21OdW1iZXIiLCJzZXRDYXJvdXNlbFJhbmRvbU51bWJlciIsInVzZUVtYmxhQ2Fyb3VzZWwiLCJsb29wIiwic2tpcFNuYXBzIiwic3BlZWQiLCJ2aWV3cG9ydFJlZiIsImVtYmxhIiwicHJldkJ0bkVuYWJsZWQiLCJzZXRQcmV2QnRuRW5hYmxlZCIsIm5leHRCdG5FbmFibGVkIiwic2V0TmV4dEJ0bkVuYWJsZWQiLCJzZWxlY3RlZEluZGV4Iiwic2V0U2VsZWN0ZWRJbmRleCIsInNjcm9sbFNuYXBzIiwic2V0U2Nyb2xsU25hcHMiLCJhdXRvcGxheSIsInVzZUNhbGxiYWNrIiwiY2FuU2Nyb2xsTmV4dCIsInNjcm9sbE5leHQiLCJNYXRoIiwicmFuZG9tIiwic2Nyb2xsVG8iLCJ1c2VSZWN1cnNpdmVUaW1lb3V0IiwicGxheSIsInN0b3AiLCJzY3JvbGxQcmV2IiwiaW5kZXgiLCJvblNlbGVjdCIsInNlbGVjdGVkU2Nyb2xsU25hcCIsInNldGEiLCJjYW5TY3JvbGxQcmV2IiwidXNlRWZmZWN0Iiwic2Nyb2xsU25hcExpc3QiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJfIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsSUFBMUI7O0FBRUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUE4QjtBQUFBOztBQUFBLE1BQTNCQyxNQUEyQixRQUEzQkEsTUFBMkI7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1COztB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QUFBQTtBQUFBO0FBQUE7QUFERixhQUFtQzJCLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGU7QUFBQSxTQUFoQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFrQkUscUVBQUMsMkRBQUQ7QUFBWSxhQUFPLEVBQUVELFVBQXJCO0FBQWlDLGFBQU8sRUFBRWxCO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkYsZUFtQkUscUVBQUMsMkRBQUQ7QUFBWSxhQUFPLEVBQUVXLFVBQXJCO0FBQWlDLGFBQU8sRUFBRVQ7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRixlQW9CRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsZ0JBQ0dJLFdBQVcsQ0FBQ3VCLEdBQVosQ0FBZ0IsVUFBQ0MsQ0FBRCxFQUFJWCxLQUFKO0FBQUEsNEJBQ2YscUVBQUMsMERBQUQ7QUFFRSxrQkFBUSxFQUFFQSxLQUFLLEtBQUtmLGFBRnRCO0FBR0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFNVSxRQUFRLENBQUNLLEtBQUQsQ0FBZDtBQUFBO0FBSFgsV0FDT0EsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURlO0FBQUEsT0FBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0NELENBeEdEOztHQUFNakMsYTtVQU15QlEscUUsRUF1Qk5xQiw0RTs7O0tBN0JuQjdCLGE7QUEwR1NBLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJvdXNlbC9DYXJvdXNlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVtYmxhQ2Fyb3VzZWwgfSBmcm9tICdlbWJsYS1jYXJvdXNlbC9yZWFjdCc7XG5pbXBvcnQgeyBEb3RCdXR0b24sIFByZXZCdXR0b24sIE5leHRCdXR0b24gfSBmcm9tICcuL0Nhcm91c2VsQnV0dG9ucyc7XG5pbXBvcnQgeyB1c2VSZWN1cnNpdmVUaW1lb3V0IH0gZnJvbSAnLi4vLi4vbGliL3VzZVJlY3Vyc2l2ZVRpbWVvdXQnO1xuaW1wb3J0IENhcm91c2VsU3R5bGVzIGZyb20gJy4vQ2Fyb3VzZWxTdHlsZXMnO1xuaW1wb3J0IFNsaWRlIGZyb20gJy4vU2xpZGUnO1xuXG5jb25zdCBBVVRPUExBWV9JTlRFUlZBTCA9IDQwMDA7XG5cbmNvbnN0IEVtYmxhQ2Fyb3VzZWwgPSAoeyBzbGlkZXMsIG1lZGlhQnlJbmRleCB9KSA9PiB7XG4gIC8vIGFuaW1hdGlvbiBzdGF0ZVxuICBjb25zdCBbYW5pbWF0aW9uLCBzZXRBbmltYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBrZXkgc3RhdGUgZm9yIHNsaWRlc1xuICBjb25zdCBbY2Fyb3VzZWxSYW5kb21OdW1iZXIsIHNldENhcm91c2VsUmFuZG9tTnVtYmVyXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgW3ZpZXdwb3J0UmVmLCBlbWJsYV0gPSB1c2VFbWJsYUNhcm91c2VsKHtcbiAgICBsb29wOiB0cnVlLFxuICAgIHNraXBTbmFwczogZmFsc2UsXG4gICAgc3BlZWQ6IDgsXG4gIH0pO1xuICBjb25zdCBbcHJldkJ0bkVuYWJsZWQsIHNldFByZXZCdG5FbmFibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW25leHRCdG5FbmFibGVkLCBzZXROZXh0QnRuRW5hYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2Nyb2xsU25hcHMsIHNldFNjcm9sbFNuYXBzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBhdXRvcGxheSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWVtYmxhKSByZXR1cm47XG4gICAgaWYgKGVtYmxhLmNhblNjcm9sbE5leHQoKSkge1xuICAgICAgZW1ibGEuc2Nyb2xsTmV4dCgpO1xuICAgICAgc2V0Q2Fyb3VzZWxSYW5kb21OdW1iZXIoTWF0aC5yYW5kb20oKSk7XG4gICAgICBzZXRBbmltYXRpb24odHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtYmxhLnNjcm9sbFRvKDApO1xuICAgICAgc2V0Q2Fyb3VzZWxSYW5kb21OdW1iZXIoTWF0aC5yYW5kb20oKSk7XG4gICAgICBzZXRBbmltYXRpb24odHJ1ZSk7XG4gICAgfVxuICB9LCBbZW1ibGFdKTtcblxuICBjb25zdCB7IHBsYXksIHN0b3AgfSA9IHVzZVJlY3Vyc2l2ZVRpbWVvdXQoYXV0b3BsYXksIEFVVE9QTEFZX0lOVEVSVkFMKTtcblxuICBjb25zdCBzY3JvbGxOZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBzZXRDYXJvdXNlbFJhbmRvbU51bWJlcihNYXRoLnJhbmRvbSgpKTtcbiAgICBlbWJsYS5zY3JvbGxOZXh0KCk7XG4gICAgc3RvcCgpO1xuICB9LCBbZW1ibGEsIHN0b3BdKTtcblxuICBjb25zdCBzY3JvbGxQcmV2ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBzZXRDYXJvdXNlbFJhbmRvbU51bWJlcihNYXRoLnJhbmRvbSgpKTtcbiAgICBlbWJsYS5zY3JvbGxQcmV2KCk7XG4gICAgc3RvcCgpO1xuICB9LCBbZW1ibGEsIHN0b3BdKTtcblxuICBjb25zdCBzY3JvbGxUbyA9IHVzZUNhbGxiYWNrKGluZGV4ID0+IHtcbiAgICBzZXRDYXJvdXNlbFJhbmRvbU51bWJlcihNYXRoLnJhbmRvbSgpKTtcbiAgICBlbWJsYSAmJiBlbWJsYS5zY3JvbGxUbyhpbmRleCksIFtlbWJsYV07XG4gIH0pO1xuXG4gIGNvbnN0IG9uU2VsZWN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBzZXRTZWxlY3RlZEluZGV4KGVtYmxhLnNlbGVjdGVkU2Nyb2xsU25hcCgpKTtcbiAgICBzZXRhXG4gICAgc2V0UHJldkJ0bkVuYWJsZWQoZW1ibGEuY2FuU2Nyb2xsUHJldigpKTtcbiAgICBzZXROZXh0QnRuRW5hYmxlZChlbWJsYS5jYW5TY3JvbGxOZXh0KCkpO1xuICB9LCBbZW1ibGEsIHNldFNlbGVjdGVkSW5kZXhdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBvblNlbGVjdCgpO1xuICAgIHNldFNjcm9sbFNuYXBzKGVtYmxhLnNjcm9sbFNuYXBMaXN0KCkpO1xuICAgIGVtYmxhLm9uKCdzZWxlY3QnLCBvblNlbGVjdCk7XG4gICAgZW1ibGEub24oJ3BvaW50ZXJEb3duJywgc3RvcCk7XG4gIH0sIFtlbWJsYSwgb25TZWxlY3QsIHNldFNjcm9sbFNuYXBzLCBzdG9wXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwbGF5KCk7XG4gIH0sIFtwbGF5XSk7XG5cbiAgY29uc29sZS5sb2coY2Fyb3VzZWxSYW5kb21OdW1iZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPENhcm91c2VsU3R5bGVzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2VtYmxhX192aWV3cG9ydCcgcmVmPXt2aWV3cG9ydFJlZn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbWJsYV9fY29udGFpbmVyJz5cbiAgICAgICAgICB7c2xpZGVzLm1hcChpbmRleCA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1ibGFfX3NsaWRlJyBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VtYmxhX19zbGlkZV9faW5uZXInPlxuICAgICAgICAgICAgICAgIDxTbGlkZVxuICAgICAgICAgICAgICAgICAga2V5PXtjYXJvdXNlbFJhbmRvbU51bWJlcn1cbiAgICAgICAgICAgICAgICAgIG1lZGlhQnlJbmRleD17bWVkaWFCeUluZGV4fVxuICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgc2V0QW5pbWF0aW9uPXtzZXRBbmltYXRpb259XG4gICAgICAgICAgICAgICAgICBhPXthbmltYXRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQcmV2QnV0dG9uIG9uQ2xpY2s9e3Njcm9sbFByZXZ9IGVuYWJsZWQ9e3ByZXZCdG5FbmFibGVkfSAvPlxuICAgICAgPE5leHRCdXR0b24gb25DbGljaz17c2Nyb2xsTmV4dH0gZW5hYmxlZD17bmV4dEJ0bkVuYWJsZWR9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1ibGFfX2RvdHMnPlxuICAgICAgICB7c2Nyb2xsU25hcHMubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxEb3RCdXR0b25cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBzZWxlY3RlZD17aW5kZXggPT09IHNlbGVjdGVkSW5kZXh9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUbyhpbmRleCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0Nhcm91c2VsU3R5bGVzPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW1ibGFDYXJvdXNlbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel/Carousel.js\n");

/***/ })

})