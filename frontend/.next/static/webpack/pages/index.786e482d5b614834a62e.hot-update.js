webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Carousel/Carousel.js":
/*!*****************************************!*\
  !*** ./components/Carousel/Carousel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! embla-carousel/react */ \"./node_modules/embla-carousel/react.js\");\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CarouselButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CarouselButtons */ \"./components/Carousel/CarouselButtons.js\");\n/* harmony import */ var _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/useRecursiveTimeout */ \"./lib/useRecursiveTimeout.js\");\n/* harmony import */ var _CarouselStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CarouselStyles */ \"./components/Carousel/CarouselStyles.js\");\n/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Slide */ \"./components/Carousel/Slide.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Carousel/Carousel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar AUTOPLAY_INTERVAL = 4000;\n\nvar EmblaCarousel = function EmblaCarousel(_ref) {\n  _s();\n\n  var slides = _ref.slides,\n      mediaByIndex = _ref.mediaByIndex;\n\n  // animation state\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      animation = _useState[0],\n      setAnimation = _useState[1]; // key state for slides\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      carouselRandomNumber = _useState2[0],\n      setCarouselRandomNumber = _useState2[1];\n\n  var _useEmblaCarousel = Object(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"])({\n    loop: true,\n    skipSnaps: false,\n    speed: 8\n  }),\n      _useEmblaCarousel2 = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useEmblaCarousel, 2),\n      viewportRef = _useEmblaCarousel2[0],\n      embla = _useEmblaCarousel2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      prevBtnEnabled = _useState3[0],\n      setPrevBtnEnabled = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      nextBtnEnabled = _useState4[0],\n      setNextBtnEnabled = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      selectedIndex = _useState5[0],\n      setSelectedIndex = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      scrollSnaps = _useState6[0],\n      setScrollSnaps = _useState6[1];\n\n  var autoplay = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n\n    if (embla.canScrollNext()) {\n      embla.scrollNext();\n      setCarouselRandomNumber(Math.random());\n      setAnimation(true);\n    } else {\n      embla.scrollTo(0);\n      setCarouselRandomNumber(Math.random());\n      setAnimation(true);\n    }\n  }, [embla]);\n\n  var _useRecursiveTimeout = Object(_lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_5__[\"useRecursiveTimeout\"])(autoplay, AUTOPLAY_INTERVAL),\n      play = _useRecursiveTimeout.play,\n      stop = _useRecursiveTimeout.stop;\n\n  var scrollNext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    setCarouselRandomNumber(Math.random());\n    embla.scrollNext();\n    stop();\n  }, [embla, stop]);\n  var scrollPrev = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    setCarouselRandomNumber(Math.random());\n    embla.scrollPrev();\n    stop();\n  }, [embla, stop]);\n  var scrollTo = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (index) {\n    embla && embla.scrollTo(index), [embla];\n    setCarouselRandomNumber(Math.random());\n  });\n  var onSelect = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    setSelectedIndex(embla.selectedScrollSnap());\n    setPrevBtnEnabled(embla.canScrollPrev());\n    setNextBtnEnabled(embla.canScrollNext());\n  }, [embla, setSelectedIndex]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!embla) return;\n    onSelect();\n    setScrollSnaps(embla.scrollSnapList());\n    embla.on('select', onSelect);\n    embla.on('pointerDown', onSelect);\n  }, [embla, onSelect, setScrollSnaps, stop]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    play();\n  }, [play]);\n  console.log(carouselRandomNumber);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselStyles__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"embla__viewport\",\n      ref: viewportRef,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"embla__container\",\n        children: slides.map(function (index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"embla__slide\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"embla__slide__inner\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Slide__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                mediaByIndex: mediaByIndex,\n                index: index,\n                setAnimation: setAnimation,\n                animation: animation\n              }, \"\".concat(index, \"_\").concat(carouselRandomNumber), false, {\n                fileName: _jsxFileName,\n                lineNumber: 88,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 15\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_4__[\"PrevButton\"], {\n      onClick: scrollPrev,\n      enabled: prevBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_4__[\"NextButton\"], {\n      onClick: scrollNext,\n      enabled: nextBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"embla__dots\",\n      children: scrollSnaps.map(function (_, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_4__[\"DotButton\"], {\n          selected: index === selectedIndex,\n          onClick: function onClick() {\n            return scrollTo(index);\n          }\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EmblaCarousel, \"SrMEdS4+7rTQxWJ+zdYVb8v2OlM=\", false, function () {\n  return [embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"], _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_5__[\"useRecursiveTimeout\"]];\n});\n\n_c = EmblaCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmblaCarousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"EmblaCarousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC9DYXJvdXNlbC5qcz9kNzYzIl0sIm5hbWVzIjpbIkFVVE9QTEFZX0lOVEVSVkFMIiwiRW1ibGFDYXJvdXNlbCIsInNsaWRlcyIsIm1lZGlhQnlJbmRleCIsInVzZVN0YXRlIiwiYW5pbWF0aW9uIiwic2V0QW5pbWF0aW9uIiwiY2Fyb3VzZWxSYW5kb21OdW1iZXIiLCJzZXRDYXJvdXNlbFJhbmRvbU51bWJlciIsInVzZUVtYmxhQ2Fyb3VzZWwiLCJsb29wIiwic2tpcFNuYXBzIiwic3BlZWQiLCJ2aWV3cG9ydFJlZiIsImVtYmxhIiwicHJldkJ0bkVuYWJsZWQiLCJzZXRQcmV2QnRuRW5hYmxlZCIsIm5leHRCdG5FbmFibGVkIiwic2V0TmV4dEJ0bkVuYWJsZWQiLCJzZWxlY3RlZEluZGV4Iiwic2V0U2VsZWN0ZWRJbmRleCIsInNjcm9sbFNuYXBzIiwic2V0U2Nyb2xsU25hcHMiLCJhdXRvcGxheSIsInVzZUNhbGxiYWNrIiwiY2FuU2Nyb2xsTmV4dCIsInNjcm9sbE5leHQiLCJNYXRoIiwicmFuZG9tIiwic2Nyb2xsVG8iLCJ1c2VSZWN1cnNpdmVUaW1lb3V0IiwicGxheSIsInN0b3AiLCJzY3JvbGxQcmV2IiwiaW5kZXgiLCJvblNlbGVjdCIsInNlbGVjdGVkU2Nyb2xsU25hcCIsImNhblNjcm9sbFByZXYiLCJ1c2VFZmZlY3QiLCJzY3JvbGxTbmFwTGlzdCIsIm9uIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIl8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxJQUExQjs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLE1BQTJCLFFBQTNCQSxNQUEyQjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQ2xEO0FB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O0FBQUE7QUFBQTtBQURGLGFBQW1DMkIsS0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZTtBQUFBLFNBQWhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWtCRSxxRUFBQywyREFBRDtBQUFZLGFBQU8sRUFBRUQsVUFBckI7QUFBaUMsYUFBTyxFQUFFbEI7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRixlQW1CRSxxRUFBQywyREFBRDtBQUFZLGFBQU8sRUFBRVcsVUFBckI7QUFBaUMsYUFBTyxFQUFFVDtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJGLGVBb0JFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSxnQkFDR0ksV0FBVyxDQUFDc0IsR0FBWixDQUFnQixVQUFDQyxDQUFELEVBQUlWLEtBQUo7QUFBQSw0QkFDZixxRUFBQywwREFBRDtBQUVFLGtCQUFRLEVBQUVBLEtBQUssS0FBS2YsYUFGdEI7QUFHRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1VLFFBQVEsQ0FBQ0ssS0FBRCxDQUFkO0FBQUE7QUFIWCxXQUNPQSxLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGU7QUFBQSxPQUFoQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQ0QsQ0F2R0Q7O0dBQU1qQyxhO1VBTXlCUSxxRSxFQXVCTnFCLDRFOzs7S0E3Qm5CN0IsYTtBQXlHU0EsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsL0Nhcm91c2VsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRW1ibGFDYXJvdXNlbCB9IGZyb20gJ2VtYmxhLWNhcm91c2VsL3JlYWN0JztcbmltcG9ydCB7IERvdEJ1dHRvbiwgUHJldkJ1dHRvbiwgTmV4dEJ1dHRvbiB9IGZyb20gJy4vQ2Fyb3VzZWxCdXR0b25zJztcbmltcG9ydCB7IHVzZVJlY3Vyc2l2ZVRpbWVvdXQgfSBmcm9tICcuLi8uLi9saWIvdXNlUmVjdXJzaXZlVGltZW91dCc7XG5pbXBvcnQgQ2Fyb3VzZWxTdHlsZXMgZnJvbSAnLi9DYXJvdXNlbFN0eWxlcyc7XG5pbXBvcnQgU2xpZGUgZnJvbSAnLi9TbGlkZSc7XG5cbmNvbnN0IEFVVE9QTEFZX0lOVEVSVkFMID0gNDAwMDtcblxuY29uc3QgRW1ibGFDYXJvdXNlbCA9ICh7IHNsaWRlcywgbWVkaWFCeUluZGV4IH0pID0+IHtcbiAgLy8gYW5pbWF0aW9uIHN0YXRlXG4gIGNvbnN0IFthbmltYXRpb24sIHNldEFuaW1hdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGtleSBzdGF0ZSBmb3Igc2xpZGVzXG4gIGNvbnN0IFtjYXJvdXNlbFJhbmRvbU51bWJlciwgc2V0Q2Fyb3VzZWxSYW5kb21OdW1iZXJdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBbdmlld3BvcnRSZWYsIGVtYmxhXSA9IHVzZUVtYmxhQ2Fyb3VzZWwoe1xuICAgIGxvb3A6IHRydWUsXG4gICAgc2tpcFNuYXBzOiBmYWxzZSxcbiAgICBzcGVlZDogOCxcbiAgfSk7XG4gIGNvbnN0IFtwcmV2QnRuRW5hYmxlZCwgc2V0UHJldkJ0bkVuYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmV4dEJ0bkVuYWJsZWQsIHNldE5leHRCdG5FbmFibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzY3JvbGxTbmFwcywgc2V0U2Nyb2xsU25hcHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGF1dG9wbGF5ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBpZiAoZW1ibGEuY2FuU2Nyb2xsTmV4dCgpKSB7XG4gICAgICBlbWJsYS5zY3JvbGxOZXh0KCk7XG4gICAgICBzZXRDYXJvdXNlbFJhbmRvbU51bWJlcihNYXRoLnJhbmRvbSgpKTtcbiAgICAgIHNldEFuaW1hdGlvbih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW1ibGEuc2Nyb2xsVG8oMCk7XG4gICAgICBzZXRDYXJvdXNlbFJhbmRvbU51bWJlcihNYXRoLnJhbmRvbSgpKTtcbiAgICAgIHNldEFuaW1hdGlvbih0cnVlKTtcbiAgICB9XG4gIH0sIFtlbWJsYV0pO1xuXG4gIGNvbnN0IHsgcGxheSwgc3RvcCB9ID0gdXNlUmVjdXJzaXZlVGltZW91dChhdXRvcGxheSwgQVVUT1BMQVlfSU5URVJWQUwpO1xuXG4gIGNvbnN0IHNjcm9sbE5leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFlbWJsYSkgcmV0dXJuO1xuICAgIHNldENhcm91c2VsUmFuZG9tTnVtYmVyKE1hdGgucmFuZG9tKCkpO1xuICAgIGVtYmxhLnNjcm9sbE5leHQoKTtcbiAgICBzdG9wKCk7XG4gIH0sIFtlbWJsYSwgc3RvcF0pO1xuXG4gIGNvbnN0IHNjcm9sbFByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFlbWJsYSkgcmV0dXJuO1xuICAgIHNldENhcm91c2VsUmFuZG9tTnVtYmVyKE1hdGgucmFuZG9tKCkpO1xuICAgIGVtYmxhLnNjcm9sbFByZXYoKTtcbiAgICBzdG9wKCk7XG4gIH0sIFtlbWJsYSwgc3RvcF0pO1xuXG4gIGNvbnN0IHNjcm9sbFRvID0gdXNlQ2FsbGJhY2soaW5kZXggPT4ge1xuICAgIGVtYmxhICYmIGVtYmxhLnNjcm9sbFRvKGluZGV4KSwgW2VtYmxhXTtcbiAgICBzZXRDYXJvdXNlbFJhbmRvbU51bWJlcihNYXRoLnJhbmRvbSgpKTtcbiAgfSk7XG5cbiAgY29uc3Qgb25TZWxlY3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFlbWJsYSkgcmV0dXJuO1xuICAgIHNldFNlbGVjdGVkSW5kZXgoZW1ibGEuc2VsZWN0ZWRTY3JvbGxTbmFwKCkpO1xuICAgIHNldFByZXZCdG5FbmFibGVkKGVtYmxhLmNhblNjcm9sbFByZXYoKSk7XG4gICAgc2V0TmV4dEJ0bkVuYWJsZWQoZW1ibGEuY2FuU2Nyb2xsTmV4dCgpKTtcbiAgfSwgW2VtYmxhLCBzZXRTZWxlY3RlZEluZGV4XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWVtYmxhKSByZXR1cm47XG4gICAgb25TZWxlY3QoKTtcbiAgICBzZXRTY3JvbGxTbmFwcyhlbWJsYS5zY3JvbGxTbmFwTGlzdCgpKTtcbiAgICBlbWJsYS5vbignc2VsZWN0Jywgb25TZWxlY3QpO1xuICAgIGVtYmxhLm9uKCdwb2ludGVyRG93bicsIG9uU2VsZWN0KTtcbiAgfSwgW2VtYmxhLCBvblNlbGVjdCwgc2V0U2Nyb2xsU25hcHMsIHN0b3BdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHBsYXkoKTtcbiAgfSwgW3BsYXldKTtcblxuICBjb25zb2xlLmxvZyhjYXJvdXNlbFJhbmRvbU51bWJlcik7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2Fyb3VzZWxTdHlsZXM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1ibGFfX3ZpZXdwb3J0JyByZWY9e3ZpZXdwb3J0UmVmfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VtYmxhX19jb250YWluZXInPlxuICAgICAgICAgIHtzbGlkZXMubWFwKGluZGV4ID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbWJsYV9fc2xpZGUnIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1ibGFfX3NsaWRlX19pbm5lcic+XG4gICAgICAgICAgICAgICAgPFNsaWRlXG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake2luZGV4fV8ke2Nhcm91c2VsUmFuZG9tTnVtYmVyfWB9XG4gICAgICAgICAgICAgICAgICBtZWRpYUJ5SW5kZXg9e21lZGlhQnlJbmRleH1cbiAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIHNldEFuaW1hdGlvbj17c2V0QW5pbWF0aW9ufVxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPXthbmltYXRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQcmV2QnV0dG9uIG9uQ2xpY2s9e3Njcm9sbFByZXZ9IGVuYWJsZWQ9e3ByZXZCdG5FbmFibGVkfSAvPlxuICAgICAgPE5leHRCdXR0b24gb25DbGljaz17c2Nyb2xsTmV4dH0gZW5hYmxlZD17bmV4dEJ0bkVuYWJsZWR9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1ibGFfX2RvdHMnPlxuICAgICAgICB7c2Nyb2xsU25hcHMubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxEb3RCdXR0b25cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBzZWxlY3RlZD17aW5kZXggPT09IHNlbGVjdGVkSW5kZXh9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUbyhpbmRleCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0Nhcm91c2VsU3R5bGVzPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW1ibGFDYXJvdXNlbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel/Carousel.js\n");

/***/ })

})