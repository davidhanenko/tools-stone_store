webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Carousel/Carousel.js":
/*!*****************************************!*\
  !*** ./components/Carousel/Carousel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! embla-carousel/react */ \"./node_modules/embla-carousel/react.js\");\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CarouselButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CarouselButtons */ \"./components/Carousel/CarouselButtons.js\");\n/* harmony import */ var _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/useRecursiveTimeout */ \"./lib/useRecursiveTimeout.js\");\n/* harmony import */ var _CarouselStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CarouselStyles */ \"./components/Carousel/CarouselStyles.js\");\n/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Slide */ \"./components/Carousel/Slide.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Carousel/Carousel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar AUTOPLAY_INTERVAL = 4000;\n\nvar EmblaCarousel = function EmblaCarousel(_ref) {\n  _s();\n\n  var slides = _ref.slides,\n      mediaByIndex = _ref.mediaByIndex;\n\n  // animation state\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      animation = _useState[0],\n      setAnimation = _useState[1]; // key state for slides\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      carouselRandomNumber = _useState2[0],\n      setCarouselRandomNumber = _useState2[1];\n\n  var _useEmblaCarousel = Object(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"])({\n    loop: true,\n    skipSnaps: false,\n    speed: 8\n  }),\n      _useEmblaCarousel2 = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useEmblaCarousel, 2),\n      viewportRef = _useEmblaCarousel2[0],\n      embla = _useEmblaCarousel2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      prevBtnEnabled = _useState3[0],\n      setPrevBtnEnabled = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      nextBtnEnabled = _useState4[0],\n      setNextBtnEnabled = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      selectedIndex = _useState5[0],\n      setSelectedIndex = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      scrollSnaps = _useState6[0],\n      setScrollSnaps = _useState6[1];\n\n  var autoplay = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n\n    if (embla.canScrollNext()) {\n      embla.scrollNext();\n      setCarouselRandomNumber(Math.random());\n      setAnimation(true);\n    } else {\n      embla.scrollTo(0);\n      setCarouselRandomNumber(Math.random());\n      setAnimation(true);\n    }\n  }, [embla]);\n\n  var _useRecursiveTimeout = Object(_lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_5__[\"useRecursiveTimeout\"])(autoplay, AUTOPLAY_INTERVAL),\n      play = _useRecursiveTimeout.play,\n      stop = _useRecursiveTimeout.stop;\n\n  var scrollNext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    setCarouselRandomNumber(Math.random());\n    embla.scrollNext();\n    stop();\n  }, [embla, stop]);\n  var scrollPrev = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    setCarouselRandomNumber(Math.random());\n    embla.scrollPrev();\n    stop();\n  }, [embla, stop]);\n  var scrollTo = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (index) {\n    setCarouselRandomNumber(Math.random()) && embla && embla.scrollTo(index), [embla];\n  });\n  var onSelect = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    setCarouselRandomNumber(Math.random());\n    setSelectedIndex(embla.selectedScrollSnap());\n    setPrevBtnEnabled(embla.canScrollPrev());\n    setNextBtnEnabled(embla.canScrollNext());\n  }, [embla, setSelectedIndex]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!embla) return;\n    onSelect();\n    setScrollSnaps(embla.scrollSnapList());\n    embla.on('select', onSelect);\n    embla.on('pointerDown', stop);\n  }, [embla, onSelect, setScrollSnaps, stop]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    play();\n  }, [play]);\n  console.log(carouselRandomNumber);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselStyles__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"embla__viewport\",\n      ref: viewportRef,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"embla__container\",\n        children: slides.map(function (index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"embla__slide\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"embla__slide__inner\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Slide__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                mediaByIndex: mediaByIndex,\n                index: index,\n                setAnimation: setAnimation,\n                a: animation\n              }, \"\".concat(index, \"_\").concat(carouselRandomNumber), false, {\n                fileName: _jsxFileName,\n                lineNumber: 88,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 15\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_4__[\"PrevButton\"], {\n      onClick: scrollPrev,\n      enabled: prevBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_4__[\"NextButton\"], {\n      onClick: scrollNext,\n      enabled: nextBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"embla__dots\",\n      children: scrollSnaps.map(function (_, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_4__[\"DotButton\"], {\n          selected: index === selectedIndex,\n          onClick: function onClick() {\n            return scrollTo(index);\n          }\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EmblaCarousel, \"SrMEdS4+7rTQxWJ+zdYVb8v2OlM=\", false, function () {\n  return [embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"], _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_5__[\"useRecursiveTimeout\"]];\n});\n\n_c = EmblaCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmblaCarousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"EmblaCarousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC9DYXJvdXNlbC5qcz9kNzYzIl0sIm5hbWVzIjpbIkFVVE9QTEFZX0lOVEVSVkFMIiwiRW1ibGFDYXJvdXNlbCIsInNsaWRlcyIsIm1lZGlhQnlJbmRleCIsInVzZVN0YXRlIiwiYW5pbWF0aW9uIiwic2V0QW5pbWF0aW9uIiwiY2Fyb3VzZWxSYW5kb21OdW1iZXIiLCJzZXRDYXJvdXNlbFJhbmRvbU51bWJlciIsInVzZUVtYmxhQ2Fyb3VzZWwiLCJsb29wIiwic2tpcFNuYXBzIiwic3BlZWQiLCJ2aWV3cG9ydFJlZiIsImVtYmxhIiwicHJldkJ0bkVuYWJsZWQiLCJzZXRQcmV2QnRuRW5hYmxlZCIsIm5leHRCdG5FbmFibGVkIiwic2V0TmV4dEJ0bkVuYWJsZWQiLCJzZWxlY3RlZEluZGV4Iiwic2V0U2VsZWN0ZWRJbmRleCIsInNjcm9sbFNuYXBzIiwic2V0U2Nyb2xsU25hcHMiLCJhdXRvcGxheSIsInVzZUNhbGxiYWNrIiwiY2FuU2Nyb2xsTmV4dCIsInNjcm9sbE5leHQiLCJNYXRoIiwicmFuZG9tIiwic2Nyb2xsVG8iLCJ1c2VSZWN1cnNpdmVUaW1lb3V0IiwicGxheSIsInN0b3AiLCJzY3JvbGxQcmV2IiwiaW5kZXgiLCJvblNlbGVjdCIsInNlbGVjdGVkU2Nyb2xsU25hcCIsImNhblNjcm9sbFByZXYiLCJ1c2VFZmZlY3QiLCJzY3JvbGxTbmFwTGlzdCIsIm9uIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIl8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxJQUExQjs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLE1BQTJCLFFBQTNCQSxNQUEyQjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQ2xEO0FB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RFYsY0FDbUIzQixvQkFEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFtQzJCLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGU7QUFBQSxTQUFoQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFrQkUscUVBQUMsMkRBQUQ7QUFBWSxhQUFPLEVBQUVELFVBQXJCO0FBQWlDLGFBQU8sRUFBRWxCO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkYsZUFtQkUscUVBQUMsMkRBQUQ7QUFBWSxhQUFPLEVBQUVXLFVBQXJCO0FBQWlDLGFBQU8sRUFBRVQ7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRixlQW9CRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsZ0JBQ0dJLFdBQVcsQ0FBQ3NCLEdBQVosQ0FBZ0IsVUFBQ0MsQ0FBRCxFQUFJVixLQUFKO0FBQUEsNEJBQ2YscUVBQUMsMERBQUQ7QUFFRSxrQkFBUSxFQUFFQSxLQUFLLEtBQUtmLGFBRnRCO0FBR0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFNVSxRQUFRLENBQUNLLEtBQUQsQ0FBZDtBQUFBO0FBSFgsV0FDT0EsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURlO0FBQUEsT0FBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0NELENBdkdEOztHQUFNakMsYTtVQU15QlEscUUsRUF1Qk5xQiw0RTs7O0tBN0JuQjdCLGE7QUF5R1NBLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJvdXNlbC9DYXJvdXNlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVtYmxhQ2Fyb3VzZWwgfSBmcm9tICdlbWJsYS1jYXJvdXNlbC9yZWFjdCc7XG5pbXBvcnQgeyBEb3RCdXR0b24sIFByZXZCdXR0b24sIE5leHRCdXR0b24gfSBmcm9tICcuL0Nhcm91c2VsQnV0dG9ucyc7XG5pbXBvcnQgeyB1c2VSZWN1cnNpdmVUaW1lb3V0IH0gZnJvbSAnLi4vLi4vbGliL3VzZVJlY3Vyc2l2ZVRpbWVvdXQnO1xuaW1wb3J0IENhcm91c2VsU3R5bGVzIGZyb20gJy4vQ2Fyb3VzZWxTdHlsZXMnO1xuaW1wb3J0IFNsaWRlIGZyb20gJy4vU2xpZGUnO1xuXG5jb25zdCBBVVRPUExBWV9JTlRFUlZBTCA9IDQwMDA7XG5cbmNvbnN0IEVtYmxhQ2Fyb3VzZWwgPSAoeyBzbGlkZXMsIG1lZGlhQnlJbmRleCB9KSA9PiB7XG4gIC8vIGFuaW1hdGlvbiBzdGF0ZVxuICBjb25zdCBbYW5pbWF0aW9uLCBzZXRBbmltYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBrZXkgc3RhdGUgZm9yIHNsaWRlc1xuICBjb25zdCBbY2Fyb3VzZWxSYW5kb21OdW1iZXIsIHNldENhcm91c2VsUmFuZG9tTnVtYmVyXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgW3ZpZXdwb3J0UmVmLCBlbWJsYV0gPSB1c2VFbWJsYUNhcm91c2VsKHtcbiAgICBsb29wOiB0cnVlLFxuICAgIHNraXBTbmFwczogZmFsc2UsXG4gICAgc3BlZWQ6IDgsXG4gIH0pO1xuICBjb25zdCBbcHJldkJ0bkVuYWJsZWQsIHNldFByZXZCdG5FbmFibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW25leHRCdG5FbmFibGVkLCBzZXROZXh0QnRuRW5hYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2Nyb2xsU25hcHMsIHNldFNjcm9sbFNuYXBzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBhdXRvcGxheSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWVtYmxhKSByZXR1cm47XG4gICAgaWYgKGVtYmxhLmNhblNjcm9sbE5leHQoKSkge1xuICAgICAgZW1ibGEuc2Nyb2xsTmV4dCgpO1xuICAgICAgc2V0Q2Fyb3VzZWxSYW5kb21OdW1iZXIoTWF0aC5yYW5kb20oKSk7XG4gICAgICBzZXRBbmltYXRpb24odHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtYmxhLnNjcm9sbFRvKDApO1xuICAgICAgc2V0Q2Fyb3VzZWxSYW5kb21OdW1iZXIoTWF0aC5yYW5kb20oKSk7XG4gICAgICBzZXRBbmltYXRpb24odHJ1ZSk7XG4gICAgfVxuICB9LCBbZW1ibGFdKTtcblxuICBjb25zdCB7IHBsYXksIHN0b3AgfSA9IHVzZVJlY3Vyc2l2ZVRpbWVvdXQoYXV0b3BsYXksIEFVVE9QTEFZX0lOVEVSVkFMKTtcblxuICBjb25zdCBzY3JvbGxOZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBzZXRDYXJvdXNlbFJhbmRvbU51bWJlcihNYXRoLnJhbmRvbSgpKTtcbiAgICBlbWJsYS5zY3JvbGxOZXh0KCk7XG4gICAgc3RvcCgpO1xuICB9LCBbZW1ibGEsIHN0b3BdKTtcblxuICBjb25zdCBzY3JvbGxQcmV2ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBzZXRDYXJvdXNlbFJhbmRvbU51bWJlcihNYXRoLnJhbmRvbSgpKTtcbiAgICBlbWJsYS5zY3JvbGxQcmV2KCk7XG4gICAgc3RvcCgpO1xuICB9LCBbZW1ibGEsIHN0b3BdKTtcblxuICBjb25zdCBzY3JvbGxUbyA9IHVzZUNhbGxiYWNrKGluZGV4ID0+IHtcbiAgICBzZXRDYXJvdXNlbFJhbmRvbU51bWJlcihNYXRoLnJhbmRvbSgpKSAmJiBlbWJsYSAmJiBlbWJsYS5zY3JvbGxUbyhpbmRleCksIFtlbWJsYV07XG4gIH0pO1xuXG4gIGNvbnN0IG9uU2VsZWN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBzZXRDYXJvdXNlbFJhbmRvbU51bWJlcihNYXRoLnJhbmRvbSgpKTtcbiAgICBzZXRTZWxlY3RlZEluZGV4KGVtYmxhLnNlbGVjdGVkU2Nyb2xsU25hcCgpKTtcbiAgICBzZXRQcmV2QnRuRW5hYmxlZChlbWJsYS5jYW5TY3JvbGxQcmV2KCkpO1xuICAgIHNldE5leHRCdG5FbmFibGVkKGVtYmxhLmNhblNjcm9sbE5leHQoKSk7XG4gIH0sIFtlbWJsYSwgc2V0U2VsZWN0ZWRJbmRleF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFlbWJsYSkgcmV0dXJuO1xuICAgIG9uU2VsZWN0KCk7XG4gICAgc2V0U2Nyb2xsU25hcHMoZW1ibGEuc2Nyb2xsU25hcExpc3QoKSk7XG4gICAgZW1ibGEub24oJ3NlbGVjdCcsIG9uU2VsZWN0KTtcbiAgICBlbWJsYS5vbigncG9pbnRlckRvd24nLCBzdG9wKTtcbiAgfSwgW2VtYmxhLCBvblNlbGVjdCwgc2V0U2Nyb2xsU25hcHMsIHN0b3BdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHBsYXkoKTtcbiAgfSwgW3BsYXldKTtcblxuICBjb25zb2xlLmxvZyhjYXJvdXNlbFJhbmRvbU51bWJlcik7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2Fyb3VzZWxTdHlsZXM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1ibGFfX3ZpZXdwb3J0JyByZWY9e3ZpZXdwb3J0UmVmfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VtYmxhX19jb250YWluZXInPlxuICAgICAgICAgIHtzbGlkZXMubWFwKGluZGV4ID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbWJsYV9fc2xpZGUnIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1ibGFfX3NsaWRlX19pbm5lcic+XG4gICAgICAgICAgICAgICAgPFNsaWRlXG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake2luZGV4fV8ke2Nhcm91c2VsUmFuZG9tTnVtYmVyfWB9XG4gICAgICAgICAgICAgICAgICBtZWRpYUJ5SW5kZXg9e21lZGlhQnlJbmRleH1cbiAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIHNldEFuaW1hdGlvbj17c2V0QW5pbWF0aW9ufVxuICAgICAgICAgICAgICAgICAgYT17YW5pbWF0aW9ufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8UHJldkJ1dHRvbiBvbkNsaWNrPXtzY3JvbGxQcmV2fSBlbmFibGVkPXtwcmV2QnRuRW5hYmxlZH0gLz5cbiAgICAgIDxOZXh0QnV0dG9uIG9uQ2xpY2s9e3Njcm9sbE5leHR9IGVuYWJsZWQ9e25leHRCdG5FbmFibGVkfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2VtYmxhX19kb3RzJz5cbiAgICAgICAge3Njcm9sbFNuYXBzLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgICA8RG90QnV0dG9uXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e2luZGV4ID09PSBzZWxlY3RlZEluZGV4fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oaW5kZXgpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9DYXJvdXNlbFN0eWxlcz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVtYmxhQ2Fyb3VzZWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Carousel/Carousel.js\n");

/***/ })

})