webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Carousel/Carousel.js":
/*!*****************************************!*\
  !*** ./components/Carousel/Carousel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! embla-carousel/react */ \"./node_modules/embla-carousel/react.js\");\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _CarouselButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CarouselButtons */ \"./components/Carousel/CarouselButtons.js\");\n/* harmony import */ var _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/useRecursiveTimeout */ \"./lib/useRecursiveTimeout.js\");\n/* harmony import */ var _CarouselStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CarouselStyles */ \"./components/Carousel/CarouselStyles.js\");\n/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Slide */ \"./components/Carousel/Slide.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Carousel/Carousel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar AUTOPLAY_INTERVAL = 5000;\n\nvar EmblaCarousel = function EmblaCarousel(_ref) {\n  _s();\n\n  var slides = _ref.slides,\n      mediaByIndex = _ref.mediaByIndex;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      animation = _useState[0],\n      setAnimation = _useState[1];\n\n  var _useEmblaCarousel = Object(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"])({\n    loop: true,\n    skipSnaps: false\n  }),\n      _useEmblaCarousel2 = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useEmblaCarousel, 2),\n      viewportRef = _useEmblaCarousel2[0],\n      embla = _useEmblaCarousel2[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      prevBtnEnabled = _useState2[0],\n      setPrevBtnEnabled = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      nextBtnEnabled = _useState3[0],\n      setNextBtnEnabled = _useState3[1];\n\n  var autoplay = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n\n    if (embla.canScrollNext()) {\n      embla.scrollNext();\n    } else {\n      embla.scrollTo(0);\n    }\n  }, [embla]);\n\n  var _useRecursiveTimeout = Object(_lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_6__[\"useRecursiveTimeout\"])(autoplay, AUTOPLAY_INTERVAL),\n      play = _useRecursiveTimeout.play,\n      stop = _useRecursiveTimeout.stop;\n\n  var scrollNext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    embla.scrollNext();\n    stop();\n  }, [embla, stop]);\n  var scrollPrev = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    embla.scrollPrev();\n    stop();\n  }, [embla, stop]);\n  var onSelect = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    setPrevBtnEnabled(embla.canScrollPrev());\n    setNextBtnEnabled(embla.canScrollNext());\n  }, [embla]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!embla) return;\n    onSelect();\n    embla.on('select', onSelect);\n    embla.on('pointerDown', stop);\n  }, [embla, onSelect, stop]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    play();\n  }, [play]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setAnimation(true);\n  }, [embla]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselStyles__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"embla__viewport\",\n      ref: viewportRef,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"embla__container\",\n        children: slides.map(function (index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"embla__slide\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"embla__slide__inner\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Slide__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                mediaByIndex: mediaByIndex,\n                index: index,\n                a: animation\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 73,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 15\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_5__[\"PrevButton\"], {\n      onClick: scrollPrev,\n      enabled: prevBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_5__[\"NextButton\"], {\n      onClick: scrollNext,\n      enabled: nextBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EmblaCarousel, \"F8oc23HwAnt7VkgvA9S2MuEmvXM=\", false, function () {\n  return [embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"], _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_6__[\"useRecursiveTimeout\"]];\n});\n\n_c = EmblaCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmblaCarousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"EmblaCarousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC9DYXJvdXNlbC5qcz9kNzYzIl0sIm5hbWVzIjpbIkFVVE9QTEFZX0lOVEVSVkFMIiwiRW1ibGFDYXJvdXNlbCIsInNsaWRlcyIsIm1lZGlhQnlJbmRleCIsInVzZVN0YXRlIiwiYW5pbWF0aW9uIiwic2V0QW5pbWF0aW9uIiwidXNlRW1ibGFDYXJvdXNlbCIsImxvb3AiLCJza2lwU25hcHMiLCJ2aWV3cG9ydFJlZiIsImVtYmxhIiwicHJldkJ0bkVuYWJsZWQiLCJzZXRQcmV2QnRuRW5hYmxlZCIsIm5leHRCdG5FbmFibGVkIiwic2V0TmV4dEJ0bkVuYWJsZWQiLCJhdXRvcGxheSIsInVzZUNhbGxiYWNrIiwiY2FuU2Nyb2xsTmV4dCIsInNjcm9sbE5leHQiLCJzY3JvbGxUbyIsInVzZVJlY3Vyc2l2ZVRpbWVvdXQiLCJwbGF5Iiwic3RvcCIsInNjcm9sbFByZXYiLCJvblNlbGVjdCIsImNhblNjcm9sbFByZXYiLCJ1c2VFZmZlY3QiLCJvbiIsIm1hcCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGlCQUFpQixHQUFHLElBQTFCOztBQUVBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBOEI7QUFBQTs7QUFBQSxNQUEzQkMsTUFBMkIsUUFBM0JBLE1BQTJCO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjs7QUFBQSxrQkFDaEJDLHNEQUFRLENBQUMsSUFBRCxDQURRO0FBQUEsTUFDM0NDLFNBRDJDO0FBQUEsTUFDaENDLFlBRGdDOztBQUFBLDBCQUdyQkMsNkVBQWdCLENBQUM7QUFDNUNDLFFBQUksRUFBRSxJQURzQztBQUU1Q0MsYUFBUyxFQUFFO0FBRmlDLEdBQUQsQ0FISztBQUFBO0FBQUEsTUFHM0NDLFdBSDJDO0FBQUEsTUFHOUJDLEtBSDhCOztBQUFB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QUFBQTtBQUFBO0FBQUEsYUFERixlQWdCRSxxRUFBQywyREFBRDtBQUFZLGFBQU8sRUFBRU4sVUFBckI7QUFBaUMsYUFBTyxFQUFFWjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGLGVBaUJFLHFFQUFDLDJEQUFEO0FBQVksYUFBTyxFQUFFTyxVQUFyQjtBQUFpQyxhQUFPLEVBQUVMO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0E1RUQ7O0dBQU1iLGE7VUFHeUJNLHFFLEVBZ0JOYyw0RTs7O0tBbkJuQnBCLGE7QUE4RVNBLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJvdXNlbC9DYXJvdXNlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVtYmxhQ2Fyb3VzZWwgfSBmcm9tICdlbWJsYS1jYXJvdXNlbC9yZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBQcmV2QnV0dG9uLCBOZXh0QnV0dG9uIH0gZnJvbSAnLi9DYXJvdXNlbEJ1dHRvbnMnO1xuaW1wb3J0IHsgdXNlUmVjdXJzaXZlVGltZW91dCB9IGZyb20gJy4uLy4uL2xpYi91c2VSZWN1cnNpdmVUaW1lb3V0JztcbmltcG9ydCBDYXJvdXNlbFN0eWxlcyBmcm9tICcuL0Nhcm91c2VsU3R5bGVzJztcbmltcG9ydCBTbGlkZSBmcm9tICcuL1NsaWRlJztcblxuY29uc3QgQVVUT1BMQVlfSU5URVJWQUwgPSA1MDAwO1xuXG5jb25zdCBFbWJsYUNhcm91c2VsID0gKHsgc2xpZGVzLCBtZWRpYUJ5SW5kZXggfSkgPT4ge1xuICBjb25zdCBbYW5pbWF0aW9uLCBzZXRBbmltYXRpb25dID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgW3ZpZXdwb3J0UmVmLCBlbWJsYV0gPSB1c2VFbWJsYUNhcm91c2VsKHtcbiAgICBsb29wOiB0cnVlLFxuICAgIHNraXBTbmFwczogZmFsc2UsXG4gIH0pO1xuICBjb25zdCBbcHJldkJ0bkVuYWJsZWQsIHNldFByZXZCdG5FbmFibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW25leHRCdG5FbmFibGVkLCBzZXROZXh0QnRuRW5hYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgYXV0b3BsYXkgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFlbWJsYSkgcmV0dXJuO1xuICAgIGlmIChlbWJsYS5jYW5TY3JvbGxOZXh0KCkpIHtcbiAgICAgIGVtYmxhLnNjcm9sbE5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW1ibGEuc2Nyb2xsVG8oMCk7XG4gICAgfVxuICB9LCBbZW1ibGFdKTtcblxuICBjb25zdCB7IHBsYXksIHN0b3AgfSA9IHVzZVJlY3Vyc2l2ZVRpbWVvdXQoYXV0b3BsYXksIEFVVE9QTEFZX0lOVEVSVkFMKTtcblxuICBjb25zdCBzY3JvbGxOZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBlbWJsYS5zY3JvbGxOZXh0KCk7XG4gICAgc3RvcCgpO1xuICB9LCBbZW1ibGEsIHN0b3BdKTtcblxuICBjb25zdCBzY3JvbGxQcmV2ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBlbWJsYS5zY3JvbGxQcmV2KCk7XG4gICAgc3RvcCgpO1xuICB9LCBbZW1ibGEsIHN0b3BdKTtcblxuICBjb25zdCBvblNlbGVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWVtYmxhKSByZXR1cm47XG4gICAgc2V0UHJldkJ0bkVuYWJsZWQoZW1ibGEuY2FuU2Nyb2xsUHJldigpKTtcbiAgICBzZXROZXh0QnRuRW5hYmxlZChlbWJsYS5jYW5TY3JvbGxOZXh0KCkpO1xuICB9LCBbZW1ibGFdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBvblNlbGVjdCgpO1xuICAgIGVtYmxhLm9uKCdzZWxlY3QnLCBvblNlbGVjdCk7XG4gICAgZW1ibGEub24oJ3BvaW50ZXJEb3duJywgc3RvcCk7XG4gIH0sIFtlbWJsYSwgb25TZWxlY3QsIHN0b3BdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHBsYXkoKTtcbiAgfSwgW3BsYXldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEFuaW1hdGlvbih0cnVlKTtcbiAgfSwgW2VtYmxhXSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxDYXJvdXNlbFN0eWxlcz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbWJsYV9fdmlld3BvcnQnIHJlZj17dmlld3BvcnRSZWZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1ibGFfX2NvbnRhaW5lcic+XG4gICAgICAgICAge3NsaWRlcy5tYXAoaW5kZXggPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VtYmxhX19zbGlkZScga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbWJsYV9fc2xpZGVfX2lubmVyJz5cbiAgICAgICAgICAgICAgICA8U2xpZGVcbiAgICAgICAgICAgICAgICAgIG1lZGlhQnlJbmRleD17bWVkaWFCeUluZGV4fVxuICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgYT17YW5pbWF0aW9ufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8UHJldkJ1dHRvbiBvbkNsaWNrPXtzY3JvbGxQcmV2fSBlbmFibGVkPXtwcmV2QnRuRW5hYmxlZH0gLz5cbiAgICAgIDxOZXh0QnV0dG9uIG9uQ2xpY2s9e3Njcm9sbE5leHR9IGVuYWJsZWQ9e25leHRCdG5FbmFibGVkfSAvPlxuICAgIDwvQ2Fyb3VzZWxTdHlsZXM+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbWJsYUNhcm91c2VsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Carousel/Carousel.js\n");

/***/ })

})