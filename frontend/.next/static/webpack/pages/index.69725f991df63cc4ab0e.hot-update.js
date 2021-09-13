webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Products/ProductCategories.js":
/*!**************************************************!*\
  !*** ./components/Products/ProductCategories.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductsCategories; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_img_img_2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/img/img_2.png */ \"./public/img/img_2.png\");\n/* harmony import */ var _public_img_img_2_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_img_2_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Products/ProductCategories.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  query PRODUCT_CATEGORY($start: Int = 0, $limit: Int = 1) {\\n    products {\\n      id\\n      category\\n      products_sub_categories {\\n      single_products(start: $start, limit: $limit) {\\n        id\\n        name\\n        image {\\n          url\\n        }\\n      }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar PRODUCT_CATEGORY = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_templateObject());\nfunction ProductsCategories(_ref) {\n  _s();\n\n  var _this = this;\n\n  Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref);\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])(PRODUCT_CATEGORY),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  console.log(data);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      children: \"Products\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), data === null || data === void 0 ? void 0 : data.products.map(function (c) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n          children: c.category\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          width: 300,\n          height: 300,\n          src: c === null || c === void 0 ? void 0 : c.single_products[0].image[0].url\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this)]\n      }, c.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this);\n    })]\n  }, void 0, true);\n}\n\n_s(ProductsCategories, \"eE+cqeCo2lkI//dPlCsO1rICVGU=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"]];\n});\n\n_c = ProductsCategories;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsCategories\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0Q2F0ZWdvcmllcy5qcz8yZTdlIl0sIm5hbWVzIjpbIlBST0RVQ1RfQ0FURUdPUlkiLCJncWwiLCJQcm9kdWN0c0NhdGVnb3JpZXMiLCJ1c2VRdWVyeSIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdHMiLCJtYXAiLCJjIiwiY2F0ZWdvcnkiLCJzaW5nbGVfcHJvZHVjdHMiLCJpbWFnZSIsInVybCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MsMkRBQUgsbUJBQXRCO0FBbUJlLFNBQVNDLGtCQUFULE9BQWdDO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1pDLCtEQUFRLENBQUNILGdCQUFELENBREk7QUFBQSxNQUNyQ0ksSUFEcUMsYUFDckNBLElBRHFDO0FBQUEsTUFDL0JDLEtBRCtCLGFBQy9CQSxLQUQrQjtBQUFBLE1BQ3hCQyxPQUR3QixhQUN4QkEsT0FEd0I7O0FBRzdDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHQSxJQUZILGFBRUdBLElBRkgsdUJBRUdBLElBQUksQ0FBRUssUUFBTixDQUFlQyxHQUFmLENBQW1CLFVBQUFDLENBQUM7QUFBQSwwQkFDbkI7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLQSxDQUFDLENBQUNDO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUdFLHFFQUFDLGlEQUFEO0FBQ0UsZUFBSyxFQUFFLEdBRFQ7QUFFRSxnQkFBTSxFQUFFLEdBRlY7QUFHRSxhQUFHLEVBQUVELENBQUYsYUFBRUEsQ0FBRix1QkFBRUEsQ0FBQyxDQUFFRSxlQUFILENBQW1CLENBQW5CLEVBQXNCQyxLQUF0QixDQUE0QixDQUE1QixFQUErQkM7QUFIdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBLFNBQVVKLENBQUMsQ0FBQ0ssRUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRG1CO0FBQUEsS0FBcEIsQ0FGSDtBQUFBLGtCQURGO0FBZ0JEOztHQXBCdUJkLGtCO1VBQ1dDLHVEOzs7S0FEWEQsa0IiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RDYXRlZ29yaWVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgaW1nIGZyb20gJy4uLy4uL3B1YmxpYy9pbWcvaW1nXzIucG5nJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBQUk9EVUNUX0NBVEVHT1JZID0gZ3FsYFxuICBxdWVyeSBQUk9EVUNUX0NBVEVHT1JZKCRzdGFydDogSW50ID0gMCwgJGxpbWl0OiBJbnQgPSAxKSB7XG4gICAgcHJvZHVjdHMge1xuICAgICAgaWRcbiAgICAgIGNhdGVnb3J5XG4gICAgICBwcm9kdWN0c19zdWJfY2F0ZWdvcmllcyB7XG4gICAgICBzaW5nbGVfcHJvZHVjdHMoc3RhcnQ6ICRzdGFydCwgbGltaXQ6ICRsaW1pdCkge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0c0NhdGVnb3JpZXMoe30pIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoUFJPRFVDVF9DQVRFR09SWSk7XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5Qcm9kdWN0czwvaDE+XG4gICAgICB7ZGF0YT8ucHJvZHVjdHMubWFwKGMgPT4gKFxuICAgICAgICA8ZGl2IGtleT17Yy5pZH0+XG4gICAgICAgICAgPGgyPntjLmNhdGVnb3J5fTwvaDI+XG5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgIHNyYz17Yz8uc2luZ2xlX3Byb2R1Y3RzWzBdLmltYWdlWzBdLnVybH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Products/ProductCategories.js\n");

/***/ })

})