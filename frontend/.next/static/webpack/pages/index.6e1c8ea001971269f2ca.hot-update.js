webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Carousel/Carousel.js":
/*!*****************************************!*\
  !*** ./components/Carousel/Carousel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! embla-carousel/react */ \"./node_modules/embla-carousel/react.js\");\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _CarouselButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CarouselButtons */ \"./components/Carousel/CarouselButtons.js\");\n/* harmony import */ var _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/useRecursiveTimeout */ \"./lib/useRecursiveTimeout.js\");\n/* harmony import */ var _CarouselStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CarouselStyles */ \"./components/Carousel/CarouselStyles.js\");\n/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Slide */ \"./components/Carousel/Slide.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Carousel/Carousel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar AUTOPLAY_INTERVAL = 4000;\n\nvar EmblaCarousel = function EmblaCarousel(_ref) {\n  _s();\n\n  var slides = _ref.slides,\n      mediaByIndex = _ref.mediaByIndex;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      animation = _useState[0],\n      setAnimation = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setTimeout(function () {\n      setAnimation(true);\n    }, 0);\n  });\n\n  var _useEmblaCarousel = Object(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"])({\n    loop: true,\n    skipSnaps: false\n  }),\n      _useEmblaCarousel2 = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useEmblaCarousel, 2),\n      viewportRef = _useEmblaCarousel2[0],\n      embla = _useEmblaCarousel2[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      prevBtnEnabled = _useState2[0],\n      setPrevBtnEnabled = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      nextBtnEnabled = _useState3[0],\n      setNextBtnEnabled = _useState3[1];\n\n  var autoplay = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n\n    if (embla.canScrollNext()) {\n      embla.scrollNext();\n    } else {\n      embla.scrollTo(0);\n    }\n  }, [embla]);\n\n  var _useRecursiveTimeout = Object(_lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_6__[\"useRecursiveTimeout\"])(autoplay, AUTOPLAY_INTERVAL),\n      play = _useRecursiveTimeout.play,\n      stop = _useRecursiveTimeout.stop;\n\n  var scrollNext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    embla.scrollNext();\n    stop();\n  }, [embla, stop]);\n  var scrollPrev = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    embla.scrollPrev();\n    stop();\n  }, [embla, stop]);\n  var onSelect = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    setPrevBtnEnabled(embla.canScrollPrev());\n    setNextBtnEnabled(embla.canScrollNext());\n  }, [embla]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!embla) return;\n    onSelect();\n    embla.on('select', onSelect);\n    embla.on('pointerDown', stop);\n  }, [embla, onSelect, stop]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    play();\n  }, [play]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselStyles__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"embla__viewport\",\n      ref: viewportRef,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"embla__container\",\n        children: slides.map(function (index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"embla__slide\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"embla__slide__inner\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Slide__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                mediaByIndex: mediaByIndex,\n                index: index,\n                a: animation\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 15\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_5__[\"PrevButton\"], {\n      onClick: scrollPrev,\n      enabled: prevBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_5__[\"NextButton\"], {\n      onClick: scrollNext,\n      enabled: nextBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EmblaCarousel, \"nm9hzuuuoHuq6ZPqwzVEsJIUl5c=\", false, function () {\n  return [embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"], _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_6__[\"useRecursiveTimeout\"]];\n});\n\n_c = EmblaCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmblaCarousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"EmblaCarousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC9DYXJvdXNlbC5qcz9kNzYzIl0sIm5hbWVzIjpbIkFVVE9QTEFZX0lOVEVSVkFMIiwiRW1ibGFDYXJvdXNlbCIsInNsaWRlcyIsIm1lZGlhQnlJbmRleCIsInVzZVN0YXRlIiwiYW5pbWF0aW9uIiwic2V0QW5pbWF0aW9uIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsInVzZUVtYmxhQ2Fyb3VzZWwiLCJsb29wIiwic2tpcFNuYXBzIiwidmlld3BvcnRSZWYiLCJlbWJsYSIsInByZXZCdG5FbmFibGVkIiwic2V0UHJldkJ0bkVuYWJsZWQiLCJuZXh0QnRuRW5hYmxlZCIsInNldE5leHRCdG5FbmFibGVkIiwiYXV0b3BsYXkiLCJ1c2VDYWxsYmFjayIsImNhblNjcm9sbE5leHQiLCJzY3JvbGxOZXh0Iiwic2Nyb2xsVG8iLCJ1c2VSZWN1cnNpdmVUaW1lb3V0IiwicGxheSIsInN0b3AiLCJzY3JvbGxQcmV2Iiwib25TZWxlY3QiLCJjYW5TY3JvbGxQcmV2Iiwib24iLCJtYXAiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxJQUExQjs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLE1BQTJCLFFBQTNCQSxNQUEyQjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQUEsa0JBQ2hCQyxzREFBUSxDQUFDLElBQUQsQ0FEUTtBQUFBLE1BQzNDQyxTQUQyQztBQUFBLE1BQ2hDQyxZQURnQzs7QUFHakRDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxjQUFVLENBQUMsWUFBTTtBQUNmRixrQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNELEtBRlMsRUFFUCxDQUZPLENBQVY7QUFHRCxHQUpRLENBQVQ7O0FB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LFNBQWhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWdCRSxxRUFBQywyREFBRDtBQUFZLGFBQU8sRUFBRUwsVUFBckI7QUFBaUMsYUFBTyxFQUFFWjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGLGVBaUJFLHFFQUFDLDJEQUFEO0FBQVksYUFBTyxFQUFFTyxVQUFyQjtBQUFpQyxhQUFPLEVBQUVMO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0E3RUQ7O0dBQU1mLGE7VUFTeUJRLHFFLEVBZ0JOYyw0RTs7O0tBekJuQnRCLGE7QUErRVNBLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJvdXNlbC9DYXJvdXNlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVtYmxhQ2Fyb3VzZWwgfSBmcm9tICdlbWJsYS1jYXJvdXNlbC9yZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBQcmV2QnV0dG9uLCBOZXh0QnV0dG9uIH0gZnJvbSAnLi9DYXJvdXNlbEJ1dHRvbnMnO1xuaW1wb3J0IHsgdXNlUmVjdXJzaXZlVGltZW91dCB9IGZyb20gJy4uLy4uL2xpYi91c2VSZWN1cnNpdmVUaW1lb3V0JztcbmltcG9ydCBDYXJvdXNlbFN0eWxlcyBmcm9tICcuL0Nhcm91c2VsU3R5bGVzJztcbmltcG9ydCBTbGlkZSBmcm9tICcuL1NsaWRlJztcblxuY29uc3QgQVVUT1BMQVlfSU5URVJWQUwgPSA0MDAwO1xuXG5jb25zdCBFbWJsYUNhcm91c2VsID0gKHsgc2xpZGVzLCBtZWRpYUJ5SW5kZXggfSkgPT4ge1xuICBjb25zdCBbYW5pbWF0aW9uLCBzZXRBbmltYXRpb25dID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgIHNldEFuaW1hdGlvbih0cnVlKTtcbiAgICAgfSwgMCk7XG4gICB9KTtcblxuICBjb25zdCBbdmlld3BvcnRSZWYsIGVtYmxhXSA9IHVzZUVtYmxhQ2Fyb3VzZWwoe1xuICAgIGxvb3A6IHRydWUsXG4gICAgc2tpcFNuYXBzOiBmYWxzZSxcbiAgfSk7XG4gIGNvbnN0IFtwcmV2QnRuRW5hYmxlZCwgc2V0UHJldkJ0bkVuYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmV4dEJ0bkVuYWJsZWQsIHNldE5leHRCdG5FbmFibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBhdXRvcGxheSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWVtYmxhKSByZXR1cm47XG4gICAgaWYgKGVtYmxhLmNhblNjcm9sbE5leHQoKSkge1xuICAgICAgZW1ibGEuc2Nyb2xsTmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWJsYS5zY3JvbGxUbygwKTtcbiAgICB9XG4gIH0sIFtlbWJsYV0pO1xuXG4gIGNvbnN0IHsgcGxheSwgc3RvcCB9ID0gdXNlUmVjdXJzaXZlVGltZW91dChhdXRvcGxheSwgQVVUT1BMQVlfSU5URVJWQUwpO1xuXG4gIGNvbnN0IHNjcm9sbE5leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFlbWJsYSkgcmV0dXJuO1xuICAgIGVtYmxhLnNjcm9sbE5leHQoKTtcbiAgICBzdG9wKCk7XG4gIH0sIFtlbWJsYSwgc3RvcF0pO1xuXG4gIGNvbnN0IHNjcm9sbFByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFlbWJsYSkgcmV0dXJuO1xuICAgIGVtYmxhLnNjcm9sbFByZXYoKTtcbiAgICBzdG9wKCk7XG4gIH0sIFtlbWJsYSwgc3RvcF0pO1xuXG4gIGNvbnN0IG9uU2VsZWN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBzZXRQcmV2QnRuRW5hYmxlZChlbWJsYS5jYW5TY3JvbGxQcmV2KCkpO1xuICAgIHNldE5leHRCdG5FbmFibGVkKGVtYmxhLmNhblNjcm9sbE5leHQoKSk7XG4gIH0sIFtlbWJsYV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFlbWJsYSkgcmV0dXJuO1xuICAgIG9uU2VsZWN0KCk7XG4gICAgZW1ibGEub24oJ3NlbGVjdCcsIG9uU2VsZWN0KTtcbiAgICBlbWJsYS5vbigncG9pbnRlckRvd24nLCBzdG9wKTtcbiAgfSwgW2VtYmxhLCBvblNlbGVjdCwgc3RvcF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcGxheSgpO1xuICB9LCBbcGxheV0pO1xuXG4gIHJldHVybiAoXG4gICAgPENhcm91c2VsU3R5bGVzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2VtYmxhX192aWV3cG9ydCcgcmVmPXt2aWV3cG9ydFJlZn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbWJsYV9fY29udGFpbmVyJz5cbiAgICAgICAgICB7c2xpZGVzLm1hcChpbmRleCA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1ibGFfX3NsaWRlJyBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VtYmxhX19zbGlkZV9faW5uZXInPlxuICAgICAgICAgICAgICAgIDxTbGlkZVxuICAgICAgICAgICAgICAgICAgbWVkaWFCeUluZGV4PXttZWRpYUJ5SW5kZXh9XG4gICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBhPXthbmltYXRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQcmV2QnV0dG9uIG9uQ2xpY2s9e3Njcm9sbFByZXZ9IGVuYWJsZWQ9e3ByZXZCdG5FbmFibGVkfSAvPlxuICAgICAgPE5leHRCdXR0b24gb25DbGljaz17c2Nyb2xsTmV4dH0gZW5hYmxlZD17bmV4dEJ0bkVuYWJsZWR9IC8+XG4gICAgPC9DYXJvdXNlbFN0eWxlcz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVtYmxhQ2Fyb3VzZWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Carousel/Carousel.js\n");

/***/ })

})