webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Carousel/Carousel.js":
/*!*****************************************!*\
  !*** ./components/Carousel/Carousel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! embla-carousel/react */ \"./node_modules/embla-carousel/react.js\");\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _CarouselButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CarouselButtons */ \"./components/Carousel/CarouselButtons.js\");\n/* harmony import */ var _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/useRecursiveTimeout */ \"./lib/useRecursiveTimeout.js\");\n/* harmony import */ var _CarouselStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CarouselStyles */ \"./components/Carousel/CarouselStyles.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Carousel/Carousel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n // import { mediaByIndex } from './media';\n\nvar AUTOPLAY_INTERVAL = 3000;\n\nvar EmblaCarousel = function EmblaCarousel(_ref) {\n  _s();\n\n  var slides = _ref.slides,\n      mediaByIndex = _ref.mediaByIndex;\n\n  var _useEmblaCarousel = Object(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"])({\n    loop: true,\n    skipSnaps: false\n  }),\n      _useEmblaCarousel2 = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useEmblaCarousel, 2),\n      viewportRef = _useEmblaCarousel2[0],\n      embla = _useEmblaCarousel2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      prevBtnEnabled = _useState[0],\n      setPrevBtnEnabled = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      nextBtnEnabled = _useState2[0],\n      setNextBtnEnabled = _useState2[1];\n\n  var autoplay = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n\n    if (embla.canScrollNext()) {\n      embla.scrollNext();\n    } else {\n      embla.scrollTo(0);\n    }\n  }, [embla]);\n\n  var _useRecursiveTimeout = Object(_lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_6__[\"useRecursiveTimeout\"])(autoplay, AUTOPLAY_INTERVAL),\n      play = _useRecursiveTimeout.play,\n      stop = _useRecursiveTimeout.stop;\n\n  var scrollNext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    embla.scrollNext();\n    stop();\n  }, [embla, stop]);\n  var scrollPrev = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    embla.scrollPrev();\n    stop();\n  }, [embla, stop]);\n  var onSelect = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    setPrevBtnEnabled(embla.canScrollPrev());\n    setNextBtnEnabled(embla.canScrollNext());\n  }, [embla]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!embla) return;\n    onSelect();\n    embla.on('select', onSelect);\n    embla.on('pointerDown', stop);\n  }, [embla, onSelect, stop]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    play();\n  }, [play]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselStyles__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"embla__viewport\",\n      ref: viewportRef,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"embla__container\",\n        children: slides.map(function (index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"embla__slide\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"embla__slide__inner\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {\n                className: \"embla__slide__img\",\n                src: mediaByIndex(index),\n                width: true,\n                alt: \"\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 66,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 15\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_5__[\"PrevButton\"], {\n      onClick: scrollPrev,\n      enabled: prevBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_5__[\"NextButton\"], {\n      onClick: scrollNext,\n      enabled: nextBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EmblaCarousel, \"CnPYJdIQBJlgn4QrPVIqL0LRPIg=\", false, function () {\n  return [embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"], _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_6__[\"useRecursiveTimeout\"]];\n});\n\n_c = EmblaCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmblaCarousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"EmblaCarousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC9DYXJvdXNlbC5qcz9kNzYzIl0sIm5hbWVzIjpbIkFVVE9QTEFZX0lOVEVSVkFMIiwiRW1ibGFDYXJvdXNlbCIsInNsaWRlcyIsIm1lZGlhQnlJbmRleCIsInVzZUVtYmxhQ2Fyb3VzZWwiLCJsb29wIiwic2tpcFNuYXBzIiwidmlld3BvcnRSZWYiLCJlbWJsYSIsInVzZVN0YXRlIiwicHJldkJ0bkVuYWJsZWQiLCJzZXRQcmV2QnRuRW5hYmxlZCIsIm5leHRCdG5FbmFibGVkIiwic2V0TmV4dEJ0bkVuYWJsZWQiLCJhdXRvcGxheSIsInVzZUNhbGxiYWNrIiwiY2FuU2Nyb2xsTmV4dCIsInNjcm9sbE5leHQiLCJzY3JvbGxUbyIsInVzZVJlY3Vyc2l2ZVRpbWVvdXQiLCJwbGF5Iiwic3RvcCIsInNjcm9sbFByZXYiLCJvblNlbGVjdCIsImNhblNjcm9sbFByZXYiLCJ1c2VFZmZlY3QiLCJvbiIsIm1hcCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxJQUExQjs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLE1BQTJCLFFBQTNCQSxNQUEyQjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQUEsMEJBQ3JCQyw2RUFBZ0IsQ0FBQztBQUM1Q0MsUUFBSSxFQUFFLElBRHNDO0FBRTVDQyxhQUFTLEVBQUU7QUFGaUMsR0FBRCxDQURLO0FBQUE7QUFBQSxNQUMzQ0MsV0FEMkM7QUFBQSxNQUM5QkMsS0FEOEI7O0FBQUEsa0JBS05DLHNEQUFRLENBQUMsS0FBRCxDQUxGO0FBQUEsTUFLM0NDLGNBTDJDO0FBQUEsTUFLM0JDLGlCQUwyQjs7QUFBQSxtQkFNTkYsc0RBQVEsQ0FBQyxLQUFELENBTkY7QUFBQSxNQU0zQ0csY0FOMkM7QUFBQSxNQU0zQkMsaUJBTjJCOztBQVFsRCxNQUFNQyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNqQyxRQUFJLENBQUNQLEtBQUwsRUFBWTs7QUFDWixRQUFJQSxLQUFLLENBQUNRLGFBQU4sRUFBSixFQUEyQjtBQUN6QlIsV0FBSyxDQUFDUyxVQUFOO0FBQ0QsS0FGRCxNQUVPO0FBQ0xULFdBQUssQ0FBQ1UsUUFBTixDQUFlLENBQWY7QUFDRDtBQUNGLEdBUDJCLEVBT3pCLENBQUNWLEtBQUQsQ0FQeUIsQ0FBNUI7O0FBUmtELDZCQWlCM0JXLG9GQUFtQixDQUFDTCxRQUFELEVBQVdkLGlCQUFYLENBakJRO0FBQUEsTUFpQjFDb0IsSUFqQjBDLHdCQWlCMUNBLElBakIwQztBQUFBLE1BaUJwQ0MsSUFqQm9DLHdCQWlCcENBLElBakJvQzs7QUFtQmxELE1BQU1KLFVBQVUsR0FBR0YseURBQVcsQ0FBQyxZQUFNO0FBQ25DLFFBQUksQ0FBQ1AsS0FBTCxFQUFZO0FBQ1pBLFNBQUssQ0FBQ1MsVUFBTjtBQUNBSSxRQUFJO0FBQ0wsR0FKNkIsRUFJM0IsQ0FBQ2IsS0FBRCxFQUFRYSxJQUFSLENBSjJCLENBQTlCO0FBTUEsTUFBTUMsVUFBVSxHQUFHUCx5REFBVyxDQUFDLFlBQU07QUFDbkMsUUFBSSxDQUFDUCxLQUFMLEVBQVk7QUFDWkEsU0FBSyxDQUFDYyxVQUFOO0FBQ0FELFFBQUk7QUFDTCxHQUo2QixFQUkzQixDQUFDYixLQUFELEVBQVFhLElBQVIsQ0FKMkIsQ0FBOUI7QUFNQSxNQUFNRSxRQUFRLEdBQUdSLHlEQUFXLENBQUMsWUFBTTtBQUNqQyxRQUFJLENBQUNQLEtBQUwsRUFBWTtBQUNaRyxxQkFBaUIsQ0FBQ0gsS0FBSyxDQUFDZ0IsYUFBTixFQUFELENBQWpCO0FBQ0FYLHFCQUFpQixDQUFDTCxLQUFLLENBQUNRLGFBQU4sRUFBRCxDQUFqQjtBQUNELEdBSjJCLEVBSXpCLENBQUNSLEtBQUQsQ0FKeUIsQ0FBNUI7QUFNQWlCLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ2pCLEtBQUwsRUFBWTtBQUNaZSxZQUFRO0FBQ1JmLFNBQUssQ0FBQ2tCLEVBQU4sQ0FBUyxRQUFULEVBQW1CSCxRQUFuQjtBQUNBZixTQUFLLENBQUNrQixFQUFOLENBQVMsYUFBVCxFQUF3QkwsSUFBeEI7QUFDRCxHQUxRLEVBS04sQ0FBQ2IsS0FBRCxFQUFRZSxRQUFSLEVBQWtCRixJQUFsQixDQUxNLENBQVQ7QUFPQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2RMLFFBQUk7QUFDTCxHQUZRLEVBRU4sQ0FBQ0EsSUFBRCxDQUZNLENBQVQ7QUFJQSxzQkFDRSxxRUFBQyx1REFBRDtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQWlDLFNBQUcsRUFBRWIsV0FBdEM7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQSxrQkFDR0wsTUFBTSxDQUFDeUIsR0FBUCxDQUFXLFVBQUNDLEtBQUQ7QUFBQSw4QkFDVjtBQUFLLHFCQUFTLEVBQUMsY0FBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxxQkFBZjtBQUFBLHFDQUNFLHFFQUFDLGlEQUFEO0FBQ0UseUJBQVMsRUFBQyxtQkFEWjtBQUVFLG1CQUFHLEVBQUV6QixZQUFZLENBQUN5QixLQUFELENBRm5CO0FBR0UscUJBQUssTUFIUDtBQUlFLG1CQUFHLEVBQUM7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQW1DQSxLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURVO0FBQUEsU0FBWDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFpQkUscUVBQUMsMkRBQUQ7QUFBWSxhQUFPLEVBQUVOLFVBQXJCO0FBQWlDLGFBQU8sRUFBRVo7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCRixlQWtCRSxxRUFBQywyREFBRDtBQUFZLGFBQU8sRUFBRU8sVUFBckI7QUFBaUMsYUFBTyxFQUFFTDtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0JELENBdEVEOztHQUFNWCxhO1VBQ3lCRyxxRSxFQWdCTmUsNEU7OztLQWpCbkJsQixhO0FBd0VTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2Fyb3VzZWwvQ2Fyb3VzZWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VFbWJsYUNhcm91c2VsIH0gZnJvbSAnZW1ibGEtY2Fyb3VzZWwvcmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgUHJldkJ1dHRvbiwgTmV4dEJ1dHRvbiB9IGZyb20gJy4vQ2Fyb3VzZWxCdXR0b25zJztcbmltcG9ydCB7IHVzZVJlY3Vyc2l2ZVRpbWVvdXQgfSBmcm9tICcuLi8uLi9saWIvdXNlUmVjdXJzaXZlVGltZW91dCc7XG5pbXBvcnQgQ2Fyb3VzZWxTdHlsZXMgZnJvbSAnLi9DYXJvdXNlbFN0eWxlcyc7XG4vLyBpbXBvcnQgeyBtZWRpYUJ5SW5kZXggfSBmcm9tICcuL21lZGlhJztcblxuY29uc3QgQVVUT1BMQVlfSU5URVJWQUwgPSAzMDAwO1xuXG5jb25zdCBFbWJsYUNhcm91c2VsID0gKHsgc2xpZGVzLCBtZWRpYUJ5SW5kZXggfSkgPT4ge1xuICBjb25zdCBbdmlld3BvcnRSZWYsIGVtYmxhXSA9IHVzZUVtYmxhQ2Fyb3VzZWwoe1xuICAgIGxvb3A6IHRydWUsXG4gICAgc2tpcFNuYXBzOiBmYWxzZSxcbiAgfSk7XG4gIGNvbnN0IFtwcmV2QnRuRW5hYmxlZCwgc2V0UHJldkJ0bkVuYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmV4dEJ0bkVuYWJsZWQsIHNldE5leHRCdG5FbmFibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBhdXRvcGxheSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWVtYmxhKSByZXR1cm47XG4gICAgaWYgKGVtYmxhLmNhblNjcm9sbE5leHQoKSkge1xuICAgICAgZW1ibGEuc2Nyb2xsTmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWJsYS5zY3JvbGxUbygwKTtcbiAgICB9XG4gIH0sIFtlbWJsYV0pO1xuXG4gIGNvbnN0IHsgcGxheSwgc3RvcCB9ID0gdXNlUmVjdXJzaXZlVGltZW91dChhdXRvcGxheSwgQVVUT1BMQVlfSU5URVJWQUwpO1xuXG4gIGNvbnN0IHNjcm9sbE5leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFlbWJsYSkgcmV0dXJuO1xuICAgIGVtYmxhLnNjcm9sbE5leHQoKTtcbiAgICBzdG9wKCk7XG4gIH0sIFtlbWJsYSwgc3RvcF0pO1xuXG4gIGNvbnN0IHNjcm9sbFByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFlbWJsYSkgcmV0dXJuO1xuICAgIGVtYmxhLnNjcm9sbFByZXYoKTtcbiAgICBzdG9wKCk7XG4gIH0sIFtlbWJsYSwgc3RvcF0pO1xuXG4gIGNvbnN0IG9uU2VsZWN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBzZXRQcmV2QnRuRW5hYmxlZChlbWJsYS5jYW5TY3JvbGxQcmV2KCkpO1xuICAgIHNldE5leHRCdG5FbmFibGVkKGVtYmxhLmNhblNjcm9sbE5leHQoKSk7XG4gIH0sIFtlbWJsYV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFlbWJsYSkgcmV0dXJuO1xuICAgIG9uU2VsZWN0KCk7XG4gICAgZW1ibGEub24oJ3NlbGVjdCcsIG9uU2VsZWN0KTtcbiAgICBlbWJsYS5vbigncG9pbnRlckRvd24nLCBzdG9wKTtcbiAgfSwgW2VtYmxhLCBvblNlbGVjdCwgc3RvcF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcGxheSgpO1xuICB9LCBbcGxheV0pO1xuXG4gIHJldHVybiAoXG4gICAgPENhcm91c2VsU3R5bGVzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWJsYV9fdmlld3BvcnRcIiByZWY9e3ZpZXdwb3J0UmVmfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWJsYV9fY29udGFpbmVyXCI+XG4gICAgICAgICAge3NsaWRlcy5tYXAoKGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmxhX19zbGlkZVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmxhX19zbGlkZV9faW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVtYmxhX19zbGlkZV9faW1nXCJcbiAgICAgICAgICAgICAgICAgIHNyYz17bWVkaWFCeUluZGV4KGluZGV4KX1cbiAgICAgICAgICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8UHJldkJ1dHRvbiBvbkNsaWNrPXtzY3JvbGxQcmV2fSBlbmFibGVkPXtwcmV2QnRuRW5hYmxlZH0gLz5cbiAgICAgIDxOZXh0QnV0dG9uIG9uQ2xpY2s9e3Njcm9sbE5leHR9IGVuYWJsZWQ9e25leHRCdG5FbmFibGVkfSAvPlxuICAgIDwvQ2Fyb3VzZWxTdHlsZXM+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbWJsYUNhcm91c2VsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Carousel/Carousel.js\n");

/***/ })

})