webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Carousel/Carousel.js":
/*!*****************************************!*\
  !*** ./components/Carousel/Carousel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! embla-carousel/react */ \"./node_modules/embla-carousel/react.js\");\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CarouselButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CarouselButtons */ \"./components/Carousel/CarouselButtons.js\");\n/* harmony import */ var _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/useRecursiveTimeout */ \"./lib/useRecursiveTimeout.js\");\n/* harmony import */ var _CarouselStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CarouselStyles */ \"./components/Carousel/CarouselStyles.js\");\n/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Slide */ \"./components/Carousel/Slide.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Carousel/Carousel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar AUTOPLAY_INTERVAL = 4000;\n\nvar EmblaCarousel = function EmblaCarousel(_ref) {\n  _s();\n\n  var slides = _ref.slides,\n      mediaByIndex = _ref.mediaByIndex;\n\n  // animation state\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      animation = _useState[0],\n      setAnimation = _useState[1]; // key state for slides\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(Math.random()),\n      carouselRandomNumber = _useState2[0],\n      setCarouselRandomNumber = _useState2[1];\n\n  var _useEmblaCarousel = Object(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"])({\n    loop: true,\n    skipSnaps: false,\n    speed: 8\n  }),\n      _useEmblaCarousel2 = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useEmblaCarousel, 2),\n      viewportRef = _useEmblaCarousel2[0],\n      embla = _useEmblaCarousel2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      prevBtnEnabled = _useState3[0],\n      setPrevBtnEnabled = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      nextBtnEnabled = _useState4[0],\n      setNextBtnEnabled = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      selectedIndex = _useState5[0],\n      setSelectedIndex = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      scrollSnaps = _useState6[0],\n      setScrollSnaps = _useState6[1];\n\n  var autoplay = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n\n    if (embla.canScrollNext()) {\n      embla.scrollNext();\n      setCarouselRandomNumber(Math.random());\n      setAnimation(true);\n    } else {\n      embla.scrollTo(0);\n      setCarouselRandomNumber(Math.random());\n      setAnimation(true);\n    }\n  }, [embla]);\n\n  var _useRecursiveTimeout = Object(_lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_5__[\"useRecursiveTimeout\"])(autoplay, AUTOPLAY_INTERVAL),\n      play = _useRecursiveTimeout.play,\n      stop = _useRecursiveTimeout.stop;\n\n  var scrollNext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    embla.scrollNext();\n    setCarouselRandomNumber(Math.random());\n    stop();\n  }, [embla, stop]);\n  var scrollPrev = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    setCarouselRandomNumber(Math.random());\n    embla.scrollPrev();\n    stop();\n  }, [embla, stop]);\n  var scrollTo = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (index) {\n    return embla && embla.scrollTo(index);\n  }, [embla]);\n  var onSelect = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    setSelectedIndex(embla.selectedScrollSnap());\n    setPrevBtnEnabled(embla.canScrollPrev());\n    setNextBtnEnabled(embla.canScrollNext());\n  }, [embla, setSelectedIndex]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!embla) return;\n    onSelect();\n    setScrollSnaps(embla.scrollSnapList());\n    embla.on('select', onSelect); // embla.on('pointerDown', stop);\n  }, [embla, onSelect, setScrollSnaps, stop]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    play();\n  }, [play]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselStyles__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"embla__viewport\",\n      ref: viewportRef,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"embla__container\",\n        children: slides.map(function (index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"embla__slide\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"embla__slide__inner\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Slide__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                mediaByIndex: mediaByIndex,\n                index: index,\n                setAnimation: setAnimation,\n                a: animation\n              }, \"\".concat(index, \"_\").concat(carouselRandomNumber), false, {\n                fileName: _jsxFileName,\n                lineNumber: 89,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 15\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_4__[\"PrevButton\"], {\n      onClick: scrollPrev,\n      enabled: prevBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_4__[\"NextButton\"], {\n      onClick: scrollNext,\n      enabled: nextBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"embla__dots\",\n      children: scrollSnaps.map(function (_, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_4__[\"DotButton\"], {\n          selected: index === selectedIndex,\n          onClick: function onClick() {\n            return scrollTo(index);\n          }\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EmblaCarousel, \"kpQQn8dnJGGD01E2fWjx0JUxuJU=\", false, function () {\n  return [embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"], _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_5__[\"useRecursiveTimeout\"]];\n});\n\n_c = EmblaCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmblaCarousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"EmblaCarousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC9DYXJvdXNlbC5qcz9kNzYzIl0sIm5hbWVzIjpbIkFVVE9QTEFZX0lOVEVSVkFMIiwiRW1ibGFDYXJvdXNlbCIsInNsaWRlcyIsIm1lZGlhQnlJbmRleCIsInVzZVN0YXRlIiwiYW5pbWF0aW9uIiwic2V0QW5pbWF0aW9uIiwiTWF0aCIsInJhbmRvbSIsImNhcm91c2VsUmFuZG9tTnVtYmVyIiwic2V0Q2Fyb3VzZWxSYW5kb21OdW1iZXIiLCJ1c2VFbWJsYUNhcm91c2VsIiwibG9vcCIsInNraXBTbmFwcyIsInNwZWVkIiwidmlld3BvcnRSZWYiLCJlbWJsYSIsInByZXZCdG5FbmFibGVkIiwic2V0UHJldkJ0bkVuYWJsZWQiLCJuZXh0QnRuRW5hYmxlZCIsInNldE5leHRCdG5FbmFibGVkIiwic2VsZWN0ZWRJbmRleCIsInNldFNlbGVjdGVkSW5kZXgiLCJzY3JvbGxTbmFwcyIsInNldFNjcm9sbFNuYXBzIiwiYXV0b3BsYXkiLCJ1c2VDYWxsYmFjayIsImNhblNjcm9sbE5leHQiLCJzY3JvbGxOZXh0Iiwic2Nyb2xsVG8iLCJ1c2VSZWN1cnNpdmVUaW1lb3V0IiwicGxheSIsInN0b3AiLCJzY3JvbGxQcmV2IiwiaW5kZXgiLCJvblNlbGVjdCIsInNlbGVjdGVkU2Nyb2xsU25hcCIsImNhblNjcm9sbFByZXYiLCJ1c2VFZmZlY3QiLCJzY3JvbGxTbmFwTGlzdCIsIm9uIiwibWFwIiwiXyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGlCQUFpQixHQUFHLElBQTFCOztBQUVBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBOEI7QUFBQTs7QUFBQSxNQUEzQkMsTUFBMkIsUUFBM0JBLE1BQTJCO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjs7QUFDbEQ7QUFEa0Qsa0JBRWhCQyxzREFB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O0FBQUE7QUFBQTtBQUFBLGFBREYsZUFrQkUscUVBQUMsMkRBQUQ7QUFBWSxhQUFPLEVBQUVELFVBQXJCO0FBQWlDLGFBQU8sRUFBRWhCO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkYsZUFtQkUscUVBQUMsMkRBQUQ7QUFBWSxhQUFPLEVBQUVXLFVBQXJCO0FBQWlDLGFBQU8sRUFBRVQ7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRixlQW9CRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsZ0JBQ0dJLFdBQVcsQ0FBQ2tCLEdBQVosQ0FBZ0IsVUFBQ0MsQ0FBRCxFQUFJUixLQUFKO0FBQUEsNEJBQ2YscUVBQUMsMERBQUQ7QUFFRSxrQkFBUSxFQUFFQSxLQUFLLEtBQUtiLGFBRnRCO0FBR0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFNUSxRQUFRLENBQUNLLEtBQUQsQ0FBZDtBQUFBO0FBSFgsV0FDT0EsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURlO0FBQUEsT0FBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0NELENBeEdEOztHQUFNakMsYTtVQVF5QlUscUUsRUF1Qk5tQiw0RTs7O0tBL0JuQjdCLGE7QUEwR1NBLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJvdXNlbC9DYXJvdXNlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVtYmxhQ2Fyb3VzZWwgfSBmcm9tICdlbWJsYS1jYXJvdXNlbC9yZWFjdCc7XG5pbXBvcnQgeyBEb3RCdXR0b24sIFByZXZCdXR0b24sIE5leHRCdXR0b24gfSBmcm9tICcuL0Nhcm91c2VsQnV0dG9ucyc7XG5pbXBvcnQgeyB1c2VSZWN1cnNpdmVUaW1lb3V0IH0gZnJvbSAnLi4vLi4vbGliL3VzZVJlY3Vyc2l2ZVRpbWVvdXQnO1xuaW1wb3J0IENhcm91c2VsU3R5bGVzIGZyb20gJy4vQ2Fyb3VzZWxTdHlsZXMnO1xuaW1wb3J0IFNsaWRlIGZyb20gJy4vU2xpZGUnO1xuXG5jb25zdCBBVVRPUExBWV9JTlRFUlZBTCA9IDQwMDA7XG5cbmNvbnN0IEVtYmxhQ2Fyb3VzZWwgPSAoeyBzbGlkZXMsIG1lZGlhQnlJbmRleCB9KSA9PiB7XG4gIC8vIGFuaW1hdGlvbiBzdGF0ZVxuICBjb25zdCBbYW5pbWF0aW9uLCBzZXRBbmltYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBrZXkgc3RhdGUgZm9yIHNsaWRlc1xuICBjb25zdCBbY2Fyb3VzZWxSYW5kb21OdW1iZXIsIHNldENhcm91c2VsUmFuZG9tTnVtYmVyXSA9IHVzZVN0YXRlKFxuICAgIE1hdGgucmFuZG9tKClcbiAgKTtcblxuICBjb25zdCBbdmlld3BvcnRSZWYsIGVtYmxhXSA9IHVzZUVtYmxhQ2Fyb3VzZWwoe1xuICAgIGxvb3A6IHRydWUsXG4gICAgc2tpcFNuYXBzOiBmYWxzZSxcbiAgICBzcGVlZDogOCxcbiAgfSk7XG4gIGNvbnN0IFtwcmV2QnRuRW5hYmxlZCwgc2V0UHJldkJ0bkVuYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmV4dEJ0bkVuYWJsZWQsIHNldE5leHRCdG5FbmFibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzY3JvbGxTbmFwcywgc2V0U2Nyb2xsU25hcHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGF1dG9wbGF5ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBpZiAoZW1ibGEuY2FuU2Nyb2xsTmV4dCgpKSB7XG4gICAgICBlbWJsYS5zY3JvbGxOZXh0KCk7XG4gICAgICBzZXRDYXJvdXNlbFJhbmRvbU51bWJlcihNYXRoLnJhbmRvbSgpKTtcbiAgICAgIHNldEFuaW1hdGlvbih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW1ibGEuc2Nyb2xsVG8oMCk7XG4gICAgICBzZXRDYXJvdXNlbFJhbmRvbU51bWJlcihNYXRoLnJhbmRvbSgpKTtcbiAgICAgIHNldEFuaW1hdGlvbih0cnVlKTtcbiAgICB9XG4gIH0sIFtlbWJsYV0pO1xuXG4gIGNvbnN0IHsgcGxheSwgc3RvcCB9ID0gdXNlUmVjdXJzaXZlVGltZW91dChhdXRvcGxheSwgQVVUT1BMQVlfSU5URVJWQUwpO1xuXG4gIGNvbnN0IHNjcm9sbE5leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFlbWJsYSkgcmV0dXJuO1xuICAgIGVtYmxhLnNjcm9sbE5leHQoKTtcbiAgICBzZXRDYXJvdXNlbFJhbmRvbU51bWJlcihNYXRoLnJhbmRvbSgpKTtcbiAgICBzdG9wKCk7XG4gIH0sIFtlbWJsYSwgc3RvcF0pO1xuXG4gIGNvbnN0IHNjcm9sbFByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFlbWJsYSkgcmV0dXJuO1xuICAgIHNldENhcm91c2VsUmFuZG9tTnVtYmVyKE1hdGgucmFuZG9tKCkpO1xuICAgIGVtYmxhLnNjcm9sbFByZXYoKTtcbiAgICBzdG9wKCk7XG4gIH0sIFtlbWJsYSwgc3RvcF0pO1xuXG4gIGNvbnN0IHNjcm9sbFRvID0gdXNlQ2FsbGJhY2soXG4gICAgaW5kZXggPT4gZW1ibGEgJiYgZW1ibGEuc2Nyb2xsVG8oaW5kZXgpLFxuICAgIFtlbWJsYV1cbiAgKTtcblxuICBjb25zdCBvblNlbGVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWVtYmxhKSByZXR1cm47XG4gICAgc2V0U2VsZWN0ZWRJbmRleChlbWJsYS5zZWxlY3RlZFNjcm9sbFNuYXAoKSk7XG4gICAgc2V0UHJldkJ0bkVuYWJsZWQoZW1ibGEuY2FuU2Nyb2xsUHJldigpKTtcbiAgICBzZXROZXh0QnRuRW5hYmxlZChlbWJsYS5jYW5TY3JvbGxOZXh0KCkpO1xuICB9LCBbZW1ibGEsIHNldFNlbGVjdGVkSW5kZXhdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBvblNlbGVjdCgpO1xuICAgIHNldFNjcm9sbFNuYXBzKGVtYmxhLnNjcm9sbFNuYXBMaXN0KCkpO1xuICAgIGVtYmxhLm9uKCdzZWxlY3QnLCBvblNlbGVjdCk7XG4gICAgLy8gZW1ibGEub24oJ3BvaW50ZXJEb3duJywgc3RvcCk7XG4gIH0sIFtlbWJsYSwgb25TZWxlY3QsIHNldFNjcm9sbFNuYXBzLCBzdG9wXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwbGF5KCk7XG4gIH0sIFtwbGF5XSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxDYXJvdXNlbFN0eWxlcz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbWJsYV9fdmlld3BvcnQnIHJlZj17dmlld3BvcnRSZWZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1ibGFfX2NvbnRhaW5lcic+XG4gICAgICAgICAge3NsaWRlcy5tYXAoaW5kZXggPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VtYmxhX19zbGlkZScga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbWJsYV9fc2xpZGVfX2lubmVyJz5cbiAgICAgICAgICAgICAgICA8U2xpZGVcbiAgICAgICAgICAgICAgICAgIGtleT17YCR7aW5kZXh9XyR7Y2Fyb3VzZWxSYW5kb21OdW1iZXJ9YH1cbiAgICAgICAgICAgICAgICAgIG1lZGlhQnlJbmRleD17bWVkaWFCeUluZGV4fVxuICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgc2V0QW5pbWF0aW9uPXtzZXRBbmltYXRpb259XG4gICAgICAgICAgICAgICAgICBhPXthbmltYXRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQcmV2QnV0dG9uIG9uQ2xpY2s9e3Njcm9sbFByZXZ9IGVuYWJsZWQ9e3ByZXZCdG5FbmFibGVkfSAvPlxuICAgICAgPE5leHRCdXR0b24gb25DbGljaz17c2Nyb2xsTmV4dH0gZW5hYmxlZD17bmV4dEJ0bkVuYWJsZWR9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1ibGFfX2RvdHMnPlxuICAgICAgICB7c2Nyb2xsU25hcHMubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxEb3RCdXR0b25cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBzZWxlY3RlZD17aW5kZXggPT09IHNlbGVjdGVkSW5kZXh9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUbyhpbmRleCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0Nhcm91c2VsU3R5bGVzPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW1ibGFDYXJvdXNlbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel/Carousel.js\n");

/***/ })

})