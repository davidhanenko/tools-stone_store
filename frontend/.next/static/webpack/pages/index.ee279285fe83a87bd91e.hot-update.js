webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Carousel/Slide.js":
/*!**************************************!*\
  !*** ./components/Carousel/Slide.js ***!
  \**************************************/
/*! exports provided: MAIN_PAGE_SLIDE_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAIN_PAGE_SLIDE_QUERY\", function() { return MAIN_PAGE_SLIDE_QUERY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Silde; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Main */ \"./components/Main.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Carousel/Slide.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query MAIN_PAGE_SLIDE_QUERY($id: ID!) {\\n    mainPageSlide(id: $id) {\\n      image_1 {\\n        url\\n      }\\n      image_2 {\\n        url\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar MAIN_PAGE_SLIDE_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"gql\"])(_templateObject());\nvar SlideStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Slide__SlideStyles\",\n  componentId: \"sc-1y17cjl-0\"\n})([\"position:relative;img{width:20rem;}.image-1{position:absolute;left:40%;top:50%;}.image-2{right:20%;top:50%;}\"]);\n_c = SlideStyles;\nfunction Silde(_ref) {\n  _s();\n\n  var _mainPageSlide$image_, _mainPageSlide$image_2;\n\n  var index = _ref.index;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(MAIN_PAGE_SLIDE_QUERY, {\n    variables: {\n      id: index + 1\n    }\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: error.message\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 21\n  }, this);\n  var mainPageSlide = data.mainPageSlide;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(SlideStyles, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n      className: \"image-1\",\n      src: mainPageSlide === null || mainPageSlide === void 0 ? void 0 : (_mainPageSlide$image_ = mainPageSlide.image_1) === null || _mainPageSlide$image_ === void 0 ? void 0 : _mainPageSlide$image_.url\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n      className: \"image-2\",\n      src: mainPageSlide === null || mainPageSlide === void 0 ? void 0 : (_mainPageSlide$image_2 = mainPageSlide.image_2) === null || _mainPageSlide$image_2 === void 0 ? void 0 : _mainPageSlide$image_2.url\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Silde, \"tP+6C5plfRwxqCbBj3cMUcL7Opk=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c2 = Silde;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SlideStyles\");\n$RefreshReg$(_c2, \"Silde\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC9TbGlkZS5qcz8yYjMwIl0sIm5hbWVzIjpbIk1BSU5fUEFHRV9TTElERV9RVUVSWSIsImdxbCIsIlNsaWRlU3R5bGVzIiwic3R5bGVkIiwiZGl2IiwiU2lsZGUiLCJpbmRleCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiaWQiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwibWVzc2FnZSIsIm1haW5QYWdlU2xpZGUiLCJpbWFnZV8xIiwidXJsIiwiaW1hZ2VfMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxxQkFBcUIsR0FBR0MsMERBQUgsbUJBQTNCO0FBYVAsSUFBTUMsV0FBVyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9IQUFqQjtLQUFNRixXO0FBa0JTLFNBQVNHLEtBQVQsT0FBMEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQUEsa0JBQ05DLCtEQUFRLENBQUNQLHFCQUFELEVBQXdCO0FBQy9EUSxhQUFTLEVBQUU7QUFDVEMsUUFBRSxFQUFFSCxLQUFLLEdBQUM7QUFERDtBQURvRCxHQUF4QixDQURGO0FBQUEsTUFDL0JJLElBRCtCLGFBQy9CQSxJQUQrQjtBQUFBLE1BQ3pCQyxPQUR5QixhQUN6QkEsT0FEeUI7QUFBQSxNQUNoQkMsS0FEZ0IsYUFDaEJBLEtBRGdCOztBQU92QyxNQUFJRCxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxvQkFBTztBQUFBLGNBQUlBLEtBQUssQ0FBQ0M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFSNEIsTUFVaENDLGFBVmdDLEdBVWZKLElBVmUsQ0FVaENJLGFBVmdDO0FBYXZDLHNCQUNFLHFFQUFDLFdBQUQ7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQXlCLFNBQUcsRUFBRUEsYUFBRixhQUFFQSxhQUFGLGdEQUFFQSxhQUFhLENBQUVDLE9BQWpCLDBEQUFFLHNCQUF3QkM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUF5QixTQUFHLEVBQUVGLGFBQUYsYUFBRUEsYUFBRixpREFBRUEsYUFBYSxDQUFFRyxPQUFqQiwyREFBRSx1QkFBd0JEO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztHQW5CdUJYLEs7VUFDV0UsdUQ7OztNQURYRixLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJvdXNlbC9TbGlkZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgTUFJTl9QQUdFX1FVRVJZIH0gZnJvbSAnLi4vTWFpbic7XG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5leHBvcnQgY29uc3QgTUFJTl9QQUdFX1NMSURFX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBNQUlOX1BBR0VfU0xJREVfUVVFUlkoJGlkOiBJRCEpIHtcbiAgICBtYWluUGFnZVNsaWRlKGlkOiAkaWQpIHtcbiAgICAgIGltYWdlXzEge1xuICAgICAgICB1cmxcbiAgICAgIH1cbiAgICAgIGltYWdlXzIge1xuICAgICAgICB1cmxcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFNsaWRlU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDIwcmVtO1xuICB9XG4gIC5pbWFnZS0xIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICBsZWZ0OiA0MCU7XG4gICAgdG9wOiA1MCU7XG4gIH1cbiAgLmltYWdlLTIge1xuICAgIHJpZ2h0OiAyMCU7XG4gICAgdG9wOiA1MCU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbGRlKHsgaW5kZXggfSkge1xuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShNQUlOX1BBR0VfU0xJREVfUVVFUlksIHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkOiBpbmRleCsxXG4gICAgfVxuICB9KTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD57ZXJyb3IubWVzc2FnZX08L3A+O1xuXG4gIGNvbnN0IHttYWluUGFnZVNsaWRlfSA9IGRhdGFcblxuXG4gIHJldHVybiAoXG4gICAgPFNsaWRlU3R5bGVzPlxuICAgICAgPGltZyBjbGFzc05hbWU9J2ltYWdlLTEnIHNyYz17bWFpblBhZ2VTbGlkZT8uaW1hZ2VfMT8udXJsfSAvPlxuICAgICAgPGltZyBjbGFzc05hbWU9J2ltYWdlLTInIHNyYz17bWFpblBhZ2VTbGlkZT8uaW1hZ2VfMj8udXJsfSAvPlxuICAgIDwvU2xpZGVTdHlsZXM+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Carousel/Slide.js\n");

/***/ })

})