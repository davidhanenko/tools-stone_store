webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Carousel/Carousel.js":
/*!*****************************************!*\
  !*** ./components/Carousel/Carousel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! embla-carousel/react */ \"./node_modules/embla-carousel/react.js\");\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CarouselButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CarouselButtons */ \"./components/Carousel/CarouselButtons.js\");\n/* harmony import */ var _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/useRecursiveTimeout */ \"./lib/useRecursiveTimeout.js\");\n/* harmony import */ var _CarouselStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CarouselStyles */ \"./components/Carousel/CarouselStyles.js\");\n/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Slide */ \"./components/Carousel/Slide.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Carousel/Carousel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar AUTOPLAY_INTERVAL = 4000;\n\nvar EmblaCarousel = function EmblaCarousel(_ref) {\n  _s();\n\n  var slides = _ref.slides,\n      mediaByIndex = _ref.mediaByIndex;\n\n  // animation state\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      animation = _useState[0],\n      setAnimation = _useState[1]; // key state for slides\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(Math.random()),\n      carouselRandomNumber = _useState2[0],\n      setCarouselRandomNumber = _useState2[1];\n\n  var _useEmblaCarousel = Object(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"])({\n    loop: true,\n    skipSnaps: false,\n    speed: 8\n  }),\n      _useEmblaCarousel2 = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useEmblaCarousel, 2),\n      viewportRef = _useEmblaCarousel2[0],\n      embla = _useEmblaCarousel2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      prevBtnEnabled = _useState3[0],\n      setPrevBtnEnabled = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      nextBtnEnabled = _useState4[0],\n      setNextBtnEnabled = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      selectedIndex = _useState5[0],\n      setSelectedIndex = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      scrollSnaps = _useState6[0],\n      setScrollSnaps = _useState6[1];\n\n  var autoplay = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n\n    if (embla.canScrollNext()) {\n      embla.scrollNext();\n      setCarouselRandomNumber(Math.random());\n      setAnimation(true);\n    } else {\n      embla.scrollTo(0);\n      setAnimation(true);\n    }\n  }, [embla]);\n\n  var _useRecursiveTimeout = Object(_lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_5__[\"useRecursiveTimeout\"])(autoplay, AUTOPLAY_INTERVAL),\n      play = _useRecursiveTimeout.play,\n      stop = _useRecursiveTimeout.stop;\n\n  var scrollNext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    embla.scrollNext();\n    stop();\n  }, [embla, stop]);\n  var scrollPrev = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    embla.scrollPrev();\n    stop();\n  }, [embla, stop]);\n  var scrollTo = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (index) {\n    return embla && embla.scrollTo(index);\n  }, [embla]);\n  var onSelect = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    setSelectedIndex(embla.selectedScrollSnap());\n    setPrevBtnEnabled(embla.canScrollPrev());\n    setNextBtnEnabled(embla.canScrollNext());\n  }, [embla, setSelectedIndex]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!embla) return;\n    onSelect();\n    setScrollSnaps(embla.scrollSnapList());\n    embla.on('select', onSelect); // embla.on('pointerDown', stop);\n  }, [embla, onSelect, setScrollSnaps, stop]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    play();\n  }, [play]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselStyles__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"embla__viewport\",\n      ref: viewportRef,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"embla__container\",\n        children: slides.map(function (index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"embla__slide\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"embla__slide__inner\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Slide__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                mediaByIndex: mediaByIndex,\n                index: index,\n                setAnimation: setAnimation,\n                a: animation\n              }, \"\".concat(index, \"_\").concat(carouselRandomNumber), false, {\n                fileName: _jsxFileName,\n                lineNumber: 87,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 15\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_4__[\"PrevButton\"], {\n      onClick: scrollPrev,\n      enabled: prevBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_4__[\"NextButton\"], {\n      onClick: scrollNext,\n      enabled: nextBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"embla__dots\",\n      children: scrollSnaps.map(function (_, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_4__[\"DotButton\"], {\n          selected: index === selectedIndex,\n          onClick: function onClick() {\n            return scrollTo(index);\n          }\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EmblaCarousel, \"kpQQn8dnJGGD01E2fWjx0JUxuJU=\", false, function () {\n  return [embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"], _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_5__[\"useRecursiveTimeout\"]];\n});\n\n_c = EmblaCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmblaCarousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"EmblaCarousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC9DYXJvdXNlbC5qcz9kNzYzIl0sIm5hbWVzIjpbIkFVVE9QTEFZX0lOVEVSVkFMIiwiRW1ibGFDYXJvdXNlbCIsInNsaWRlcyIsIm1lZGlhQnlJbmRleCIsInVzZVN0YXRlIiwiYW5pbWF0aW9uIiwic2V0QW5pbWF0aW9uIiwiTWF0aCIsInJhbmRvbSIsImNhcm91c2VsUmFuZG9tTnVtYmVyIiwic2V0Q2Fyb3VzZWxSYW5kb21OdW1iZXIiLCJ1c2VFbWJsYUNhcm91c2VsIiwibG9vcCIsInNraXBTbmFwcyIsInNwZWVkIiwidmlld3BvcnRSZWYiLCJlbWJsYSIsInByZXZCdG5FbmFibGVkIiwic2V0UHJldkJ0bkVuYWJsZWQiLCJuZXh0QnRuRW5hYmxlZCIsInNldE5leHRCdG5FbmFibGVkIiwic2VsZWN0ZWRJbmRleCIsInNldFNlbGVjdGVkSW5kZXgiLCJzY3JvbGxTbmFwcyIsInNldFNjcm9sbFNuYXBzIiwiYXV0b3BsYXkiLCJ1c2VDYWxsYmFjayIsImNhblNjcm9sbE5leHQiLCJzY3JvbGxOZXh0Iiwic2Nyb2xsVG8iLCJ1c2VSZWN1cnNpdmVUaW1lb3V0IiwicGxheSIsInN0b3AiLCJzY3JvbGxQcmV2IiwiaW5kZXgiLCJvblNlbGVjdCIsInNlbGVjdGVkU2Nyb2xsU25hcCIsImNhblNjcm9sbFByZXYiLCJ1c2VFZmZlY3QiLCJzY3JvbGxTbmFwTGlzdCIsIm9uIiwibWFwIiwiXyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGlCQUFpQixHQUFHLElBQTFCOztBQUVBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBOEI7QUFBQTs7QUFBQSxNQUEzQkMsTUFBMkIsUUFBM0JBLE1BQTJCO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjs7QUFDbEQ7QUFEa0Qsa0JBRWhCQyxzREFB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QUFFVyxVQUFyQjtBQUFpQyxhQUFPLEVBQUVUO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQkYsZUFvQkU7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLGdCQUNHSSxXQUFXLENBQUNrQixHQUFaLENBQWdCLFVBQUNDLENBQUQsRUFBSVIsS0FBSjtBQUFBLDRCQUNmLHFFQUFDLDBEQUFEO0FBRUUsa0JBQVEsRUFBRUEsS0FBSyxLQUFLYixhQUZ0QjtBQUdFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVEsUUFBUSxDQUFDSyxLQUFELENBQWQ7QUFBQTtBQUhYLFdBQ09BLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZTtBQUFBLE9BQWhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdDRCxDQXRHRDs7R0FBTWpDLGE7VUFReUJVLHFFLEVBc0JObUIsNEU7OztLQTlCbkI3QixhO0FBd0dTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2Fyb3VzZWwvQ2Fyb3VzZWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VFbWJsYUNhcm91c2VsIH0gZnJvbSAnZW1ibGEtY2Fyb3VzZWwvcmVhY3QnO1xuaW1wb3J0IHsgRG90QnV0dG9uLCBQcmV2QnV0dG9uLCBOZXh0QnV0dG9uIH0gZnJvbSAnLi9DYXJvdXNlbEJ1dHRvbnMnO1xuaW1wb3J0IHsgdXNlUmVjdXJzaXZlVGltZW91dCB9IGZyb20gJy4uLy4uL2xpYi91c2VSZWN1cnNpdmVUaW1lb3V0JztcbmltcG9ydCBDYXJvdXNlbFN0eWxlcyBmcm9tICcuL0Nhcm91c2VsU3R5bGVzJztcbmltcG9ydCBTbGlkZSBmcm9tICcuL1NsaWRlJztcblxuY29uc3QgQVVUT1BMQVlfSU5URVJWQUwgPSA0MDAwO1xuXG5jb25zdCBFbWJsYUNhcm91c2VsID0gKHsgc2xpZGVzLCBtZWRpYUJ5SW5kZXggfSkgPT4ge1xuICAvLyBhbmltYXRpb24gc3RhdGVcbiAgY29uc3QgW2FuaW1hdGlvbiwgc2V0QW5pbWF0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8ga2V5IHN0YXRlIGZvciBzbGlkZXNcbiAgY29uc3QgW2Nhcm91c2VsUmFuZG9tTnVtYmVyLCBzZXRDYXJvdXNlbFJhbmRvbU51bWJlcl0gPSB1c2VTdGF0ZShcbiAgICBNYXRoLnJhbmRvbSgpXG4gICk7XG5cbiAgY29uc3QgW3ZpZXdwb3J0UmVmLCBlbWJsYV0gPSB1c2VFbWJsYUNhcm91c2VsKHtcbiAgICBsb29wOiB0cnVlLFxuICAgIHNraXBTbmFwczogZmFsc2UsXG4gICAgc3BlZWQ6IDgsXG4gIH0pO1xuICBjb25zdCBbcHJldkJ0bkVuYWJsZWQsIHNldFByZXZCdG5FbmFibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW25leHRCdG5FbmFibGVkLCBzZXROZXh0QnRuRW5hYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2Nyb2xsU25hcHMsIHNldFNjcm9sbFNuYXBzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBhdXRvcGxheSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWVtYmxhKSByZXR1cm47XG4gICAgaWYgKGVtYmxhLmNhblNjcm9sbE5leHQoKSkge1xuICAgICAgZW1ibGEuc2Nyb2xsTmV4dCgpO1xuICAgICAgc2V0Q2Fyb3VzZWxSYW5kb21OdW1iZXIoTWF0aC5yYW5kb20oKSk7XG4gICAgICBzZXRBbmltYXRpb24odHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtYmxhLnNjcm9sbFRvKDApO1xuICAgICAgc2V0QW5pbWF0aW9uKHRydWUpO1xuICAgIH1cbiAgfSwgW2VtYmxhXSk7XG5cbiAgY29uc3QgeyBwbGF5LCBzdG9wIH0gPSB1c2VSZWN1cnNpdmVUaW1lb3V0KGF1dG9wbGF5LCBBVVRPUExBWV9JTlRFUlZBTCk7XG5cbiAgY29uc3Qgc2Nyb2xsTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWVtYmxhKSByZXR1cm47XG4gICAgZW1ibGEuc2Nyb2xsTmV4dCgpO1xuICAgIHN0b3AoKTtcbiAgfSwgW2VtYmxhLCBzdG9wXSk7XG5cbiAgY29uc3Qgc2Nyb2xsUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWVtYmxhKSByZXR1cm47XG4gICAgZW1ibGEuc2Nyb2xsUHJldigpO1xuICAgIHN0b3AoKTtcbiAgfSwgW2VtYmxhLCBzdG9wXSk7XG5cbiAgY29uc3Qgc2Nyb2xsVG8gPSB1c2VDYWxsYmFjayhcbiAgICBpbmRleCA9PiBlbWJsYSAmJiBlbWJsYS5zY3JvbGxUbyhpbmRleCksXG4gICAgW2VtYmxhXVxuICApO1xuXG4gIGNvbnN0IG9uU2VsZWN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBzZXRTZWxlY3RlZEluZGV4KGVtYmxhLnNlbGVjdGVkU2Nyb2xsU25hcCgpKTtcbiAgICBzZXRQcmV2QnRuRW5hYmxlZChlbWJsYS5jYW5TY3JvbGxQcmV2KCkpO1xuICAgIHNldE5leHRCdG5FbmFibGVkKGVtYmxhLmNhblNjcm9sbE5leHQoKSk7XG4gIH0sIFtlbWJsYSwgc2V0U2VsZWN0ZWRJbmRleF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFlbWJsYSkgcmV0dXJuO1xuICAgIG9uU2VsZWN0KCk7XG4gICAgc2V0U2Nyb2xsU25hcHMoZW1ibGEuc2Nyb2xsU25hcExpc3QoKSk7XG4gICAgZW1ibGEub24oJ3NlbGVjdCcsIG9uU2VsZWN0KTtcbiAgICAvLyBlbWJsYS5vbigncG9pbnRlckRvd24nLCBzdG9wKTtcbiAgfSwgW2VtYmxhLCBvblNlbGVjdCwgc2V0U2Nyb2xsU25hcHMsIHN0b3BdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHBsYXkoKTtcbiAgfSwgW3BsYXldKTtcblxuXG4gIFxuICByZXR1cm4gKFxuICAgIDxDYXJvdXNlbFN0eWxlcz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbWJsYV9fdmlld3BvcnQnIHJlZj17dmlld3BvcnRSZWZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1ibGFfX2NvbnRhaW5lcic+XG4gICAgICAgICAge3NsaWRlcy5tYXAoaW5kZXggPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VtYmxhX19zbGlkZScga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbWJsYV9fc2xpZGVfX2lubmVyJz5cbiAgICAgICAgICAgICAgICA8U2xpZGVcbiAgICAgICAgICAgICAgICAgIGtleT17YCR7aW5kZXh9XyR7Y2Fyb3VzZWxSYW5kb21OdW1iZXJ9YH1cbiAgICAgICAgICAgICAgICAgIG1lZGlhQnlJbmRleD17bWVkaWFCeUluZGV4fVxuICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgc2V0QW5pbWF0aW9uPXtzZXRBbmltYXRpb259XG4gICAgICAgICAgICAgICAgICBhPXthbmltYXRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQcmV2QnV0dG9uIG9uQ2xpY2s9e3Njcm9sbFByZXZ9IGVuYWJsZWQ9e3ByZXZCdG5FbmFibGVkfSAvPlxuICAgICAgPE5leHRCdXR0b24gb25DbGljaz17c2Nyb2xsTmV4dH0gZW5hYmxlZD17bmV4dEJ0bkVuYWJsZWR9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1ibGFfX2RvdHMnPlxuICAgICAgICB7c2Nyb2xsU25hcHMubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxEb3RCdXR0b25cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBzZWxlY3RlZD17aW5kZXggPT09IHNlbGVjdGVkSW5kZXh9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUbyhpbmRleCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0Nhcm91c2VsU3R5bGVzPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW1ibGFDYXJvdXNlbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel/Carousel.js\n");

/***/ })

})