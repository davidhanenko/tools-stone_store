webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Carousel/Carousel.js":
/*!*****************************************!*\
  !*** ./components/Carousel/Carousel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! embla-carousel/react */ \"./node_modules/embla-carousel/react.js\");\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _CarouselButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CarouselButtons */ \"./components/Carousel/CarouselButtons.js\");\n/* harmony import */ var _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/useRecursiveTimeout */ \"./lib/useRecursiveTimeout.js\");\n/* harmony import */ var _CarouselStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CarouselStyles */ \"./components/Carousel/CarouselStyles.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Carousel/Carousel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n // import { mediaByIndex } from './media';\n\nvar AUTOPLAY_INTERVAL = 3000;\n\nvar EmblaCarousel = function EmblaCarousel(_ref) {\n  _s();\n\n  var slides = _ref.slides,\n      mediaByIndex = _ref.mediaByIndex;\n\n  var _useEmblaCarousel = Object(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"])({\n    loop: true,\n    skipSnaps: false\n  }),\n      _useEmblaCarousel2 = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useEmblaCarousel, 2),\n      viewportRef = _useEmblaCarousel2[0],\n      embla = _useEmblaCarousel2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      prevBtnEnabled = _useState[0],\n      setPrevBtnEnabled = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      nextBtnEnabled = _useState2[0],\n      setNextBtnEnabled = _useState2[1];\n\n  var autoplay = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n\n    if (embla.canScrollNext()) {\n      embla.scrollNext();\n    } else {\n      embla.scrollTo(0);\n    }\n  }, [embla]);\n\n  var _useRecursiveTimeout = Object(_lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_6__[\"useRecursiveTimeout\"])(autoplay, AUTOPLAY_INTERVAL),\n      play = _useRecursiveTimeout.play,\n      stop = _useRecursiveTimeout.stop;\n\n  var scrollNext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    embla.scrollNext();\n    stop();\n  }, [embla, stop]);\n  var scrollPrev = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    embla.scrollPrev();\n    stop();\n  }, [embla, stop]);\n  var onSelect = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    setPrevBtnEnabled(embla.canScrollPrev());\n    setNextBtnEnabled(embla.canScrollNext());\n  }, [embla]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!embla) return;\n    onSelect();\n    embla.on('select', onSelect);\n    embla.on('pointerDown', stop);\n  }, [embla, onSelect, stop]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    play();\n  }, [play]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselStyles__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"embla__viewport\",\n      ref: viewportRef,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"embla__container\",\n        children: slides.map(function (index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"embla__slide\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"embla__slide__inner\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {\n                className: \"embla__slide__img\",\n                src: mediaByIndex(index),\n                alt: \"\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 66,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 15\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_5__[\"PrevButton\"], {\n      onClick: scrollPrev,\n      enabled: prevBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_5__[\"NextButton\"], {\n      onClick: scrollNext,\n      enabled: nextBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EmblaCarousel, \"CnPYJdIQBJlgn4QrPVIqL0LRPIg=\", false, function () {\n  return [embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"], _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_6__[\"useRecursiveTimeout\"]];\n});\n\n_c = EmblaCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmblaCarousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"EmblaCarousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC9DYXJvdXNlbC5qcz9kNzYzIl0sIm5hbWVzIjpbIkFVVE9QTEFZX0lOVEVSVkFMIiwiRW1ibGFDYXJvdXNlbCIsInNsaWRlcyIsIm1lZGlhQnlJbmRleCIsInVzZUVtYmxhQ2Fyb3VzZWwiLCJsb29wIiwic2tpcFNuYXBzIiwidmlld3BvcnRSZWYiLCJlbWJsYSIsInVzZVN0YXRlIiwicHJldkJ0bkVuYWJsZWQiLCJzZXRQcmV2QnRuRW5hYmxlZCIsIm5leHRCdG5FbmFibGVkIiwic2V0TmV4dEJ0bkVuYWJsZWQiLCJhdXRvcGxheSIsInVzZUNhbGxiYWNrIiwiY2FuU2Nyb2xsTmV4dCIsInNjcm9sbE5leHQiLCJzY3JvbGxUbyIsInVzZVJlY3Vyc2l2ZVRpbWVvdXQiLCJwbGF5Iiwic3RvcCIsInNjcm9sbFByZXYiLCJvblNlbGVjdCIsImNhblNjcm9sbFByZXYiLCJ1c2VFZmZlY3QiLCJvbiIsIm1hcCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxJQUExQjs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLE1BQTJCLFFBQTNCQSxNQUEyQjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQUEsMEJBQ3JCQyw2RUFBZ0IsQ0FBQztBQUM1Q0MsUUFBSSxFQUFFLElBRHNDO0FBRTVDQyxhQUFTLEVBQUU7QUFGaUMsR0FBRCxDQURLO0FBQUE7QUFBQSxNQUMzQ0MsV0FEMkM7QUFBQSxNQUM5QkMsS0FEOEI7O0FBQUEsa0JBS05DLHNEQUFRLENBQUMsS0FBRCxDQUxGO0FBQUEsTUFLM0NDLGNBTDJDO0FBQUEsTUFLM0JDLGlCQUwyQjs7QUFBQSxtQkFNTkYsc0RBQVEsQ0FBQyxLQUFELENBTkY7QUFB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QUFBQTtBQUFBO0FBQUEsYUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0FyRUQ7O0dBQU1YLGE7VUFDeUJHLHFFLEVBZ0JOZSw0RTs7O0tBakJuQmxCLGE7QUF1RVNBLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJvdXNlbC9DYXJvdXNlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVtYmxhQ2Fyb3VzZWwgfSBmcm9tICdlbWJsYS1jYXJvdXNlbC9yZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBQcmV2QnV0dG9uLCBOZXh0QnV0dG9uIH0gZnJvbSAnLi9DYXJvdXNlbEJ1dHRvbnMnO1xuaW1wb3J0IHsgdXNlUmVjdXJzaXZlVGltZW91dCB9IGZyb20gJy4uLy4uL2xpYi91c2VSZWN1cnNpdmVUaW1lb3V0JztcbmltcG9ydCBDYXJvdXNlbFN0eWxlcyBmcm9tICcuL0Nhcm91c2VsU3R5bGVzJztcbi8vIGltcG9ydCB7IG1lZGlhQnlJbmRleCB9IGZyb20gJy4vbWVkaWEnO1xuXG5jb25zdCBBVVRPUExBWV9JTlRFUlZBTCA9IDMwMDA7XG5cbmNvbnN0IEVtYmxhQ2Fyb3VzZWwgPSAoeyBzbGlkZXMsIG1lZGlhQnlJbmRleCB9KSA9PiB7XG4gIGNvbnN0IFt2aWV3cG9ydFJlZiwgZW1ibGFdID0gdXNlRW1ibGFDYXJvdXNlbCh7XG4gICAgbG9vcDogdHJ1ZSxcbiAgICBza2lwU25hcHM6IGZhbHNlLFxuICB9KTtcbiAgY29uc3QgW3ByZXZCdG5FbmFibGVkLCBzZXRQcmV2QnRuRW5hYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtuZXh0QnRuRW5hYmxlZCwgc2V0TmV4dEJ0bkVuYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGF1dG9wbGF5ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBpZiAoZW1ibGEuY2FuU2Nyb2xsTmV4dCgpKSB7XG4gICAgICBlbWJsYS5zY3JvbGxOZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtYmxhLnNjcm9sbFRvKDApO1xuICAgIH1cbiAgfSwgW2VtYmxhXSk7XG5cbiAgY29uc3QgeyBwbGF5LCBzdG9wIH0gPSB1c2VSZWN1cnNpdmVUaW1lb3V0KGF1dG9wbGF5LCBBVVRPUExBWV9JTlRFUlZBTCk7XG5cbiAgY29uc3Qgc2Nyb2xsTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWVtYmxhKSByZXR1cm47XG4gICAgZW1ibGEuc2Nyb2xsTmV4dCgpO1xuICAgIHN0b3AoKTtcbiAgfSwgW2VtYmxhLCBzdG9wXSk7XG5cbiAgY29uc3Qgc2Nyb2xsUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWVtYmxhKSByZXR1cm47XG4gICAgZW1ibGEuc2Nyb2xsUHJldigpO1xuICAgIHN0b3AoKTtcbiAgfSwgW2VtYmxhLCBzdG9wXSk7XG5cbiAgY29uc3Qgb25TZWxlY3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFlbWJsYSkgcmV0dXJuO1xuICAgIHNldFByZXZCdG5FbmFibGVkKGVtYmxhLmNhblNjcm9sbFByZXYoKSk7XG4gICAgc2V0TmV4dEJ0bkVuYWJsZWQoZW1ibGEuY2FuU2Nyb2xsTmV4dCgpKTtcbiAgfSwgW2VtYmxhXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWVtYmxhKSByZXR1cm47XG4gICAgb25TZWxlY3QoKTtcbiAgICBlbWJsYS5vbignc2VsZWN0Jywgb25TZWxlY3QpO1xuICAgIGVtYmxhLm9uKCdwb2ludGVyRG93bicsIHN0b3ApO1xuICB9LCBbZW1ibGEsIG9uU2VsZWN0LCBzdG9wXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwbGF5KCk7XG4gIH0sIFtwbGF5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2Fyb3VzZWxTdHlsZXM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmxhX192aWV3cG9ydFwiIHJlZj17dmlld3BvcnRSZWZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmxhX19jb250YWluZXJcIj5cbiAgICAgICAgICB7c2xpZGVzLm1hcCgoaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1ibGFfX3NsaWRlXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1ibGFfX3NsaWRlX19pbm5lclwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZW1ibGFfX3NsaWRlX19pbWdcIlxuICAgICAgICAgICAgICAgICAgc3JjPXttZWRpYUJ5SW5kZXgoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFByZXZCdXR0b24gb25DbGljaz17c2Nyb2xsUHJldn0gZW5hYmxlZD17cHJldkJ0bkVuYWJsZWR9IC8+XG4gICAgICA8TmV4dEJ1dHRvbiBvbkNsaWNrPXtzY3JvbGxOZXh0fSBlbmFibGVkPXtuZXh0QnRuRW5hYmxlZH0gLz5cbiAgICA8L0Nhcm91c2VsU3R5bGVzPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW1ibGFDYXJvdXNlbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel/Carousel.js\n");

/***/ })

})