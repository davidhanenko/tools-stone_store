webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sliders/services-slider/ServicesSlider.js":
/*!**************************************************************!*\
  !*** ./components/sliders/services-slider/ServicesSlider.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SliderButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SliderButtons */ \"./components/sliders/SliderButtons.js\");\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! embla-carousel/react */ \"./node_modules/embla-carousel/react.js\");\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ServiceSliderStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ServiceSliderStyles */ \"./components/sliders/services-slider/ServiceSliderStyles.js\");\n/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Slide */ \"./components/sliders/services-slider/Slide.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/sliders/services-slider/ServicesSlider.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar ServicesSlider = function ServicesSlider(_ref) {\n  _s();\n\n  var slides = _ref.slides,\n      mediaByIndex = _ref.mediaByIndex;\n\n  var _useEmblaCarousel = Object(embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__[\"useEmblaCarousel\"])({\n    slidesToScroll: 2,\n    skipSnaps: false,\n    align: 0,\n    loop: true\n  }),\n      _useEmblaCarousel2 = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useEmblaCarousel, 2),\n      viewportRef = _useEmblaCarousel2[0],\n      embla = _useEmblaCarousel2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      prevBtnEnabled = _useState[0],\n      setPrevBtnEnabled = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      nextBtnEnabled = _useState2[0],\n      setNextBtnEnabled = _useState2[1];\n\n  var scrollPrev = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    return embla && embla.scrollPrev();\n  }, [embla]);\n  var scrollNext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    return embla && embla.scrollNext();\n  }, [embla]);\n  var onSelect = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    setPrevBtnEnabled(embla.canScrollPrev());\n    setNextBtnEnabled(embla.canScrollNext());\n  }, [embla]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!embla) return;\n    embla.on('select', onSelect);\n    onSelect();\n  }, [embla, onSelect]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_ServiceSliderStyles__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"embla__viewport\",\n      ref: viewportRef,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"embla__container\",\n        children: slides.map(function (index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"embla__slide\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"embla__slide__inner\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Slide__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                mediaByIndex: mediaByIndex,\n                index: index\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 16\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 15\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_SliderButtons__WEBPACK_IMPORTED_MODULE_3__[\"PrevButton\"], {\n      onClick: scrollPrev,\n      enabled: prevBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_SliderButtons__WEBPACK_IMPORTED_MODULE_3__[\"NextButton\"], {\n      onClick: scrollNext,\n      enabled: nextBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ServicesSlider, \"a0curSqPBuduQX149x46dL4sAtk=\", false, function () {\n  return [embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__[\"useEmblaCarousel\"]];\n});\n\n_c = ServicesSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServicesSlider);\n\nvar _c;\n\n$RefreshReg$(_c, \"ServicesSlider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlkZXJzL3NlcnZpY2VzLXNsaWRlci9TZXJ2aWNlc1NsaWRlci5qcz84YTAyIl0sIm5hbWVzIjpbIlNlcnZpY2VzU2xpZGVyIiwic2xpZGVzIiwibWVkaWFCeUluZGV4IiwidXNlRW1ibGFDYXJvdXNlbCIsInNsaWRlc1RvU2Nyb2xsIiwic2tpcFNuYXBzIiwiYWxpZ24iLCJsb29wIiwidmlld3BvcnRSZWYiLCJlbWJsYSIsInVzZVN0YXRlIiwicHJldkJ0bkVuYWJsZWQiLCJzZXRQcmV2QnRuRW5hYmxlZCIsIm5leHRCdG5FbmFibGVkIiwic2V0TmV4dEJ0bkVuYWJsZWQiLCJzY3JvbGxQcmV2IiwidXNlQ2FsbGJhY2siLCJzY3JvbGxOZXh0Iiwib25TZWxlY3QiLCJjYW5TY3JvbGxQcmV2IiwiY2FuU2Nyb2xsTmV4dCIsInVzZUVmZmVjdCIsIm9uIiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBOEI7QUFBQTs7QUFBQSxNQUEzQkMsTUFBMkIsUUFBM0JBLE1BQTJCO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjs7QUFBQSwwQkFDdEJDLDZFQUFnQixDQUFDO0FBQzVDQyxrQkFBYyxFQUFFLENBRDRCO0FBRTVDQyxhQUFTLEVBQUUsS0FGaUM7QUFHNUNDLFNBQUssRUFBRSxDQUhxQztBQUk1Q0MsUUFBSSxFQUFFO0FBSnNDLEdBQUQsQ0FETTtBQUFBO0FBQUEsTUFDNUNDLFdBRDRDO0FBQUEsTUFDL0JDLEtBRCtCOztBQUFBLGtCQU9QQyxzREFBUSxDQUFDLEtBQUQsQ0FQRDtBQUFBLE1BTzVDQyxjQVA0QztBQUFBLE1BTzVCQyxpQkFQNEI7O0FBQUEsbUJBUVBGLHNEQUFRLENBQUMsS0FBRCxDQVJEO0FBQUEsTUFRNUNHLGNBUjRDO0FBQUEsTUFRNUJDLGlCQVI0Qjs7QUFVbkQsTUFBTUMsVUFBVSxHQUFHQyx5REFBVyxDQUFDO0FBQUEsV0FBTVAsS0FBSyxJQUFJQSxLQUFLLENBQUNNLFVBQU4sRUFBZjtBQUFBLEdBQUQsRUFBb0MsQ0FBQ04sS0FBRCxDQUFwQyxDQUE5QjtBQUNBLE1BQU1RLFVBQVUsR0FBR0QseURBQVcsQ0FBQztBQUFBLFdBQU1QLEtBQUssSUFBSUEsS0FBSyxDQUFDUSxVQUFOLEVBQWY7QUFBQSxHQUFELEVBQW9DLENBQUNSLEtBQUQsQ0FBcEMsQ0FBOUI7QUFDQSxNQUFNUyxRQUFRLEdBQUdGLHlEQUFXLENBQUMsWUFBTTtBQUNqQyxRQUFJLENBQUNQLEtBQUwsRUFBWTtBQUNaRyxxQkFBaUIsQ0FBQ0gsS0FBSyxDQUFDVSxhQUFOLEVBQUQsQ0FBakI7QUFDQUwscUJBQWlCLENBQUNMLEtBQUssQ0FBQ1csYUFBTixFQUFELENBQWpCO0FBQ0QsR0FKMkIsRUFJekIsQ0FBQ1gsS0FBRCxDQUp5QixDQUE1QjtBQU1BWSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNaLEtBQUwsRUFBWTtBQUNaQSxTQUFLLENBQUNhLEVBQU4sQ0FBUyxRQUFULEVBQW1CSixRQUFuQjtBQUNBQSxZQUFRO0FBQ1QsR0FKUSxFQUlOLENBQUNULEtBQUQsRUFBUVMsUUFBUixDQUpNLENBQVQ7QUFNQSxzQkFDRSxxRUFBQyw0REFBRDtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQWlDLFNBQUcsRUFBRVYsV0FBdEM7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQSxrQkFDR1AsTUFBTSxDQUFDc0IsR0FBUCxDQUFXLFVBQUFDLEtBQUs7QUFBQSw4QkFDZjtBQUFLLHFCQUFTLEVBQUMsY0FBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxxQkFBZjtBQUFBLHFDQUNDLHFFQUFDLDhDQUFEO0FBQU8sNEJBQVksRUFBRXRCLFlBQXJCO0FBQW1DLHFCQUFLLEVBQUVzQjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQW1DQSxLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURlO0FBQUEsU0FBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBWUUscUVBQUMseURBQUQ7QUFBWSxhQUFPLEVBQUVULFVBQXJCO0FBQWlDLGFBQU8sRUFBRUo7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGLGVBYUUscUVBQUMseURBQUQ7QUFBWSxhQUFPLEVBQUVNLFVBQXJCO0FBQWlDLGFBQU8sRUFBRUo7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUJELENBekNEOztHQUFNYixjO1VBQ3lCRyxxRTs7O0tBRHpCSCxjO0FBMkNTQSw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2xpZGVycy9zZXJ2aWNlcy1zbGlkZXIvU2VydmljZXNTbGlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcmV2QnV0dG9uLCBOZXh0QnV0dG9uIH0gZnJvbSAnLi4vU2xpZGVyQnV0dG9ucyc7XG5pbXBvcnQgeyB1c2VFbWJsYUNhcm91c2VsIH0gZnJvbSAnZW1ibGEtY2Fyb3VzZWwvcmVhY3QnO1xuaW1wb3J0IFNlcnZpY2VzU2xpZGVyU3R5bGVzIGZyb20gJy4vU2VydmljZVNsaWRlclN0eWxlcyc7XG5pbXBvcnQgU2xpZGUgZnJvbSAnLi9TbGlkZSc7XG5pbXBvcnQgeyBzdGFydCB9IGZyb20gJ25wcm9ncmVzcyc7XG5cblxuY29uc3QgU2VydmljZXNTbGlkZXIgPSAoeyBzbGlkZXMsIG1lZGlhQnlJbmRleCB9KSA9PiB7XG4gIGNvbnN0IFt2aWV3cG9ydFJlZiwgZW1ibGFdID0gdXNlRW1ibGFDYXJvdXNlbCh7XG4gICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgc2tpcFNuYXBzOiBmYWxzZSxcbiAgICBhbGlnbjogMCxcbiAgICBsb29wOiB0cnVlLFxuICB9KTtcbiAgY29uc3QgW3ByZXZCdG5FbmFibGVkLCBzZXRQcmV2QnRuRW5hYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtuZXh0QnRuRW5hYmxlZCwgc2V0TmV4dEJ0bkVuYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHNjcm9sbFByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiBlbWJsYSAmJiBlbWJsYS5zY3JvbGxQcmV2KCksIFtlbWJsYV0pO1xuICBjb25zdCBzY3JvbGxOZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4gZW1ibGEgJiYgZW1ibGEuc2Nyb2xsTmV4dCgpLCBbZW1ibGFdKTtcbiAgY29uc3Qgb25TZWxlY3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFlbWJsYSkgcmV0dXJuO1xuICAgIHNldFByZXZCdG5FbmFibGVkKGVtYmxhLmNhblNjcm9sbFByZXYoKSk7XG4gICAgc2V0TmV4dEJ0bkVuYWJsZWQoZW1ibGEuY2FuU2Nyb2xsTmV4dCgpKTtcbiAgfSwgW2VtYmxhXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWVtYmxhKSByZXR1cm47XG4gICAgZW1ibGEub24oJ3NlbGVjdCcsIG9uU2VsZWN0KTtcbiAgICBvblNlbGVjdCgpO1xuICB9LCBbZW1ibGEsIG9uU2VsZWN0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VydmljZXNTbGlkZXJTdHlsZXM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1ibGFfX3ZpZXdwb3J0JyByZWY9e3ZpZXdwb3J0UmVmfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VtYmxhX19jb250YWluZXInPlxuICAgICAgICAgIHtzbGlkZXMubWFwKGluZGV4ID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbWJsYV9fc2xpZGUnIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1ibGFfX3NsaWRlX19pbm5lcic+XG4gICAgICAgICAgICAgICA8U2xpZGUgbWVkaWFCeUluZGV4PXttZWRpYUJ5SW5kZXh9IGluZGV4PXtpbmRleH0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFByZXZCdXR0b24gb25DbGljaz17c2Nyb2xsUHJldn0gZW5hYmxlZD17cHJldkJ0bkVuYWJsZWR9IC8+XG4gICAgICA8TmV4dEJ1dHRvbiBvbkNsaWNrPXtzY3JvbGxOZXh0fSBlbmFibGVkPXtuZXh0QnRuRW5hYmxlZH0gLz5cbiAgICA8L1NlcnZpY2VzU2xpZGVyU3R5bGVzPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXNTbGlkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/sliders/services-slider/ServicesSlider.js\n");

/***/ })

})