webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Carousel/Carousel.js":
/*!*****************************************!*\
  !*** ./components/Carousel/Carousel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! embla-carousel/react */ \"./node_modules/embla-carousel/react.js\");\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _CarouselButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CarouselButtons */ \"./components/Carousel/CarouselButtons.js\");\n/* harmony import */ var _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/useRecursiveTimeout */ \"./lib/useRecursiveTimeout.js\");\n/* harmony import */ var _CarouselStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CarouselStyles */ \"./components/Carousel/CarouselStyles.js\");\n/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Slide */ \"./components/Carousel/Slide.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Carousel/Carousel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n // import { mediaByIndex } from './media';\n\n\nvar AUTOPLAY_INTERVAL = 3000;\n\nvar EmblaCarousel = function EmblaCarousel(_ref) {\n  _s();\n\n  var slides = _ref.slides,\n      mediaByIndex = _ref.mediaByIndex;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      a = _useState[0],\n      setA = _useState[1];\n\n  var _useEmblaCarousel = Object(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"])({\n    loop: true,\n    skipSnaps: false\n  }),\n      _useEmblaCarousel2 = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useEmblaCarousel, 2),\n      viewportRef = _useEmblaCarousel2[0],\n      embla = _useEmblaCarousel2[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      prevBtnEnabled = _useState2[0],\n      setPrevBtnEnabled = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      nextBtnEnabled = _useState3[0],\n      setNextBtnEnabled = _useState3[1];\n\n  var autoplay = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n\n    if (embla.canScrollNext()) {\n      embla.scrollNext();\n      setA(!a);\n    } else {\n      setA(!a);\n      embla.scrollTo(0);\n    }\n  }, [embla]);\n\n  var _useRecursiveTimeout = Object(_lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_6__[\"useRecursiveTimeout\"])(autoplay, AUTOPLAY_INTERVAL),\n      play = _useRecursiveTimeout.play,\n      stop = _useRecursiveTimeout.stop;\n\n  var scrollNext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    embla.scrollNext();\n    setA(!a);\n    stop();\n  }, [embla, stop]);\n  var scrollPrev = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    embla.scrollPrev();\n    setA(!a);\n    stop();\n  }, [embla, stop]);\n  var onSelect = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    setPrevBtnEnabled(embla.canScrollPrev());\n    setNextBtnEnabled(embla.canScrollNext());\n  }, [embla]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!embla) return;\n    onSelect();\n    embla.on('select', onSelect);\n    embla.on('pointerDown', stop);\n  }, [embla, onSelect, stop]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    play();\n  }, [play]);\n  console.log(a);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselStyles__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"embla__viewport\",\n      ref: viewportRef,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"embla__container\",\n        children: slides.map(function (index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"embla__slide\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"embla__slide__inner\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {\n                className: \"embla__slide__img\",\n                src: mediaByIndex(index),\n                objectFit: \"cover\",\n                layout: \"fill\",\n                alt: \"\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Slide__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                index: index,\n                a: a\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 81,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 15\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_5__[\"PrevButton\"], {\n      onClick: scrollPrev,\n      enabled: prevBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_5__[\"NextButton\"], {\n      onClick: scrollNext,\n      enabled: nextBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EmblaCarousel, \"+JyI2vPyUd0EHa74ZjKv3gcIDEU=\", false, function () {\n  return [embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"], _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_6__[\"useRecursiveTimeout\"]];\n});\n\n_c = EmblaCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmblaCarousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"EmblaCarousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC9DYXJvdXNlbC5qcz9kNzYzIl0sIm5hbWVzIjpbIkFVVE9QTEFZX0lOVEVSVkFMIiwiRW1ibGFDYXJvdXNlbCIsInNsaWRlcyIsIm1lZGlhQnlJbmRleCIsInVzZVN0YXRlIiwiYSIsInNldEEiLCJ1c2VFbWJsYUNhcm91c2VsIiwibG9vcCIsInNraXBTbmFwcyIsInZpZXdwb3J0UmVmIiwiZW1ibGEiLCJwcmV2QnRuRW5hYmxlZCIsInNldFByZXZCdG5FbmFibGVkIiwibmV4dEJ0bkVuYWJsZWQiLCJzZXROZXh0QnRuRW5hYmxlZCIsImF1dG9wbGF5IiwidXNlQ2FsbGJhY2siLCJjYW5TY3JvbGxOZXh0Iiwic2Nyb2xsTmV4dCIsInNjcm9sbFRvIiwidXNlUmVjdXJzaXZlVGltZW91dCIsInBsYXkiLCJzdG9wIiwic2Nyb2xsUHJldiIsIm9uU2VsZWN0IiwiY2FuU2Nyb2xsUHJldiIsInVzZUVmZmVjdCIsIm9uIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxJQUExQjs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLE1BQTJCLFFBQTNCQSxNQUEyQjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQUEsa0JBQ2xDQyxzREFBUSxDQUFDLEtBQUQsQ0FEMEI7QUFBQSxNQUM3Q0MsQ0FENkM7QUFBQSxNQUMxQ0MsSUFEMEM7O0FBQUEsMEJBR3JCQyw2RUFBZ0IsQ0FBQztBQUM1Q0MsUUFBSSxFQUFFLElBRHNDO0FBRTVDQyxhQUFTLEVBQUU7QUFGaUMsR0FBRCxDQUhLO0FBQUE7QUFBQSxNQUczQ0MsV0FIMkM7QUFBQSxNQUc5QkMsS0FIOEI7O0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFRRSxxRUFBRSw4Q0FBRjtBQUFRLHFCQUFLLEVBQUVBLEtBQWY7QUFBc0IsaUJBQUMsRUFBRTNCO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBbUMyQixLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURlO0FBQUEsU0FBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBbUJFLHFFQUFDLDJEQUFEO0FBQVksYUFBTyxFQUFFUixVQUFyQjtBQUFpQyxhQUFPLEVBQUVaO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQkYsZUFvQkUscUVBQUMsMkRBQUQ7QUFBWSxhQUFPLEVBQUVPLFVBQXJCO0FBQWlDLGFBQU8sRUFBRUw7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdCRCxDQS9FRDs7R0FBTWIsYTtVQUd5Qk0scUUsRUFrQk5jLDRFOzs7S0FyQm5CcEIsYTtBQWlGU0EsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsL0Nhcm91c2VsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRW1ibGFDYXJvdXNlbCB9IGZyb20gJ2VtYmxhLWNhcm91c2VsL3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IFByZXZCdXR0b24sIE5leHRCdXR0b24gfSBmcm9tICcuL0Nhcm91c2VsQnV0dG9ucyc7XG5pbXBvcnQgeyB1c2VSZWN1cnNpdmVUaW1lb3V0IH0gZnJvbSAnLi4vLi4vbGliL3VzZVJlY3Vyc2l2ZVRpbWVvdXQnO1xuaW1wb3J0IENhcm91c2VsU3R5bGVzIGZyb20gJy4vQ2Fyb3VzZWxTdHlsZXMnO1xuLy8gaW1wb3J0IHsgbWVkaWFCeUluZGV4IH0gZnJvbSAnLi9tZWRpYSc7XG5pbXBvcnQgU2xpZGUgZnJvbSAnLi9TbGlkZSc7XG5cbmNvbnN0IEFVVE9QTEFZX0lOVEVSVkFMID0gMzAwMDtcblxuY29uc3QgRW1ibGFDYXJvdXNlbCA9ICh7IHNsaWRlcywgbWVkaWFCeUluZGV4IH0pID0+IHtcbmNvbnN0IFthLCBzZXRBXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbdmlld3BvcnRSZWYsIGVtYmxhXSA9IHVzZUVtYmxhQ2Fyb3VzZWwoe1xuICAgIGxvb3A6IHRydWUsXG4gICAgc2tpcFNuYXBzOiBmYWxzZSxcbiAgfSk7XG4gIGNvbnN0IFtwcmV2QnRuRW5hYmxlZCwgc2V0UHJldkJ0bkVuYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmV4dEJ0bkVuYWJsZWQsIHNldE5leHRCdG5FbmFibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBhdXRvcGxheSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWVtYmxhKSByZXR1cm47XG4gICAgaWYgKGVtYmxhLmNhblNjcm9sbE5leHQoKSkge1xuICAgICAgZW1ibGEuc2Nyb2xsTmV4dCgpO1xuICAgICAgc2V0QSghYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEEoIWEpO1xuICAgICAgZW1ibGEuc2Nyb2xsVG8oMCk7XG4gICAgfVxuICB9LCBbZW1ibGFdKTtcblxuICBjb25zdCB7IHBsYXksIHN0b3AgfSA9IHVzZVJlY3Vyc2l2ZVRpbWVvdXQoYXV0b3BsYXksIEFVVE9QTEFZX0lOVEVSVkFMKTtcblxuICBjb25zdCBzY3JvbGxOZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBlbWJsYS5zY3JvbGxOZXh0KCk7XG4gICAgc2V0QSghYSk7XG4gICAgc3RvcCgpO1xuICB9LCBbZW1ibGEsIHN0b3BdKTtcblxuICBjb25zdCBzY3JvbGxQcmV2ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBlbWJsYS5zY3JvbGxQcmV2KCk7XG4gICAgc2V0QSghYSk7XG4gICAgc3RvcCgpO1xuICB9LCBbZW1ibGEsIHN0b3BdKTtcblxuICBjb25zdCBvblNlbGVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWVtYmxhKSByZXR1cm47XG4gICAgc2V0UHJldkJ0bkVuYWJsZWQoZW1ibGEuY2FuU2Nyb2xsUHJldigpKTtcbiAgICBzZXROZXh0QnRuRW5hYmxlZChlbWJsYS5jYW5TY3JvbGxOZXh0KCkpO1xuICB9LCBbZW1ibGFdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBvblNlbGVjdCgpO1xuICAgIGVtYmxhLm9uKCdzZWxlY3QnLCBvblNlbGVjdCk7XG4gICAgZW1ibGEub24oJ3BvaW50ZXJEb3duJywgc3RvcCk7XG4gIH0sIFtlbWJsYSwgb25TZWxlY3QsIHN0b3BdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHBsYXkoKTtcbiAgfSwgW3BsYXldKTtcblxuICBjb25zb2xlLmxvZyhhKTtcbiAgcmV0dXJuIChcbiAgICA8Q2Fyb3VzZWxTdHlsZXM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1ibGFfX3ZpZXdwb3J0JyByZWY9e3ZpZXdwb3J0UmVmfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VtYmxhX19jb250YWluZXInPlxuICAgICAgICAgIHtzbGlkZXMubWFwKGluZGV4ID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbWJsYV9fc2xpZGUnIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1ibGFfX3NsaWRlX19pbm5lcic+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2VtYmxhX19zbGlkZV9faW1nJ1xuICAgICAgICAgICAgICAgICAgc3JjPXttZWRpYUJ5SW5kZXgoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PSdjb3ZlcidcbiAgICAgICAgICAgICAgICAgIGxheW91dD0nZmlsbCdcbiAgICAgICAgICAgICAgICAgIGFsdD0nJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPCBTbGlkZSBpbmRleD17aW5kZXh9IGE9e2F9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8UHJldkJ1dHRvbiBvbkNsaWNrPXtzY3JvbGxQcmV2fSBlbmFibGVkPXtwcmV2QnRuRW5hYmxlZH0gLz5cbiAgICAgIDxOZXh0QnV0dG9uIG9uQ2xpY2s9e3Njcm9sbE5leHR9IGVuYWJsZWQ9e25leHRCdG5FbmFibGVkfSAvPlxuICAgIDwvQ2Fyb3VzZWxTdHlsZXM+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbWJsYUNhcm91c2VsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Carousel/Carousel.js\n");

/***/ })

})