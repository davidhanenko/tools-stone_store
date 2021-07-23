webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/*! exports provided: MAIN_PAGE_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAIN_PAGE_QUERY\", function() { return MAIN_PAGE_QUERY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll-parallax */ \"./node_modules/react-scroll-parallax/cjs/index.js\");\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _Carousel_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Carousel/Carousel */ \"./components/Carousel/Carousel.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Main.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query MAIN_PAGE_QUERY {\\n    mainPageSlides {\\n      bg_image {\\n        url\\n      }\\n      image_1 {\\n        url\\n      }\\n      image_2 {\\n        url\\n      } \\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar SLIDE_COUNT = 2;\nvar MAIN_PAGE_QUERY = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_templateObject());\nvar slides = Array.from(Array(SLIDE_COUNT).keys());\nfunction Main() {\n  _s();\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(MAIN_PAGE_QUERY),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: error.message\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 21\n  }, this); // BG images for main page carousel\n\n  var media = data === null || data === void 0 ? void 0 : data.mainPageSlides.map(function (el) {\n    return el.bg_image.url;\n  }); // func from Embla Carousel docs\n\n  var mediaByIndex = function mediaByIndex(index) {\n    return media[index % media.length];\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__[\"Parallax\"], {\n      y: [100, 0],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        slides: slides,\n        mediaByIndex: mediaByIndex\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__[\"Parallax\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        slides: slides,\n        mediaByIndex: mediaByIndex\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Main, \"tP+6C5plfRwxqCbBj3cMUcL7Opk=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"]];\n});\n\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluLmpzPzg2NjAiXSwibmFtZXMiOlsiU0xJREVfQ09VTlQiLCJNQUlOX1BBR0VfUVVFUlkiLCJncWwiLCJzbGlkZXMiLCJBcnJheSIsImZyb20iLCJrZXlzIiwiTWFpbiIsInVzZVF1ZXJ5IiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJtZWRpYSIsIm1haW5QYWdlU2xpZGVzIiwibWFwIiwiZWwiLCJiZ19pbWFnZSIsInVybCIsIm1lZGlhQnlJbmRleCIsImluZGV4IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxDQUFwQjtBQUVPLElBQU1DLGVBQWUsR0FBR0MsMkRBQUgsbUJBQXJCO0FBZ0JQLElBQU1DLE1BQU0sR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQ0osV0FBRCxDQUFMLENBQW1CTSxJQUFuQixFQUFYLENBQWY7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0lDLCtEQUFRLENBQUNQLGVBQUQsQ0FEWjtBQUFBLE1BQ3JCUSxJQURxQixhQUNyQkEsSUFEcUI7QUFBQSxNQUNmQyxPQURlLGFBQ2ZBLE9BRGU7QUFBQSxNQUNOQyxLQURNLGFBQ05BLEtBRE07O0FBRTdCLE1BQUlELE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLG9CQUFPO0FBQUEsY0FBSUEsS0FBSyxDQUFDQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUCxDQUhrQixDQU03Qjs7QUFDQSxNQUFNQyxLQUFLLEdBQUdKLElBQUgsYUFBR0EsSUFBSCx1QkFBR0EsSUFBSSxDQUFFSyxjQUFOLENBQXFCQyxHQUFyQixDQUF5QixVQUFDQyxFQUFEO0FBQUEsV0FBT0EsRUFBRSxDQUFDQyxRQUFILENBQVlDLEdBQW5CO0FBQUEsR0FBekIsQ0FBZCxDQVA2QixDQVU3Qjs7QUFDQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFEO0FBQUEsV0FBV1AsS0FBSyxDQUFDTyxLQUFLLEdBQUdQLEtBQUssQ0FBQ1EsTUFBZixDQUFoQjtBQUFBLEdBQXJCOztBQUVBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsOERBQUQ7QUFBVSxPQUFDLEVBQUUsQ0FBQyxHQUFELEVBQU0sQ0FBTixDQUFiO0FBQUEsNkJBQ0UscUVBQUMsMERBQUQ7QUFBZSxjQUFNLEVBQUVsQixNQUF2QjtBQUErQixvQkFBWSxFQUFFZ0I7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLHFFQUFDLDhEQUFEO0FBQUEsNkJBQ0UscUVBQUMsMERBQUQ7QUFBZSxjQUFNLEVBQUVoQixNQUF2QjtBQUErQixvQkFBWSxFQUFFZ0I7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEOztHQXZCdUJaLEk7VUFDV0MsdUQ7OztLQURYRCxJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IEVtYmxhQ2Fyb3VzZWwgZnJvbSAnLi9DYXJvdXNlbC9DYXJvdXNlbCc7XG5cbmNvbnN0IFNMSURFX0NPVU5UID0gMjtcblxuZXhwb3J0IGNvbnN0IE1BSU5fUEFHRV9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgTUFJTl9QQUdFX1FVRVJZIHtcbiAgICBtYWluUGFnZVNsaWRlcyB7XG4gICAgICBiZ19pbWFnZSB7XG4gICAgICAgIHVybFxuICAgICAgfVxuICAgICAgaW1hZ2VfMSB7XG4gICAgICAgIHVybFxuICAgICAgfVxuICAgICAgaW1hZ2VfMiB7XG4gICAgICAgIHVybFxuICAgICAgfSBcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IHNsaWRlcyA9IEFycmF5LmZyb20oQXJyYXkoU0xJREVfQ09VTlQpLmtleXMoKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KE1BSU5fUEFHRV9RVUVSWSk7XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPntlcnJvci5tZXNzYWdlfTwvcD47XG5cblxuICAvLyBCRyBpbWFnZXMgZm9yIG1haW4gcGFnZSBjYXJvdXNlbFxuICBjb25zdCBtZWRpYSA9IGRhdGE/Lm1haW5QYWdlU2xpZGVzLm1hcCgoZWwpPT4gZWwuYmdfaW1hZ2UudXJsKTtcblxuXG4gIC8vIGZ1bmMgZnJvbSBFbWJsYSBDYXJvdXNlbCBkb2NzXG4gIGNvbnN0IG1lZGlhQnlJbmRleCA9IChpbmRleCkgPT4gbWVkaWFbaW5kZXggJSBtZWRpYS5sZW5ndGhdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxQYXJhbGxheCB5PXtbMTAwLCAwXX0+XG4gICAgICAgIDxFbWJsYUNhcm91c2VsIHNsaWRlcz17c2xpZGVzfSBtZWRpYUJ5SW5kZXg9e21lZGlhQnlJbmRleH0gLz5cbiAgICAgIDwvUGFyYWxsYXg+XG4gICAgICA8UGFyYWxsYXg+XG4gICAgICAgIDxFbWJsYUNhcm91c2VsIHNsaWRlcz17c2xpZGVzfSBtZWRpYUJ5SW5kZXg9e21lZGlhQnlJbmRleH0gLz5cbiAgICAgIDwvUGFyYWxsYXg+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Main.js\n");

/***/ })

})