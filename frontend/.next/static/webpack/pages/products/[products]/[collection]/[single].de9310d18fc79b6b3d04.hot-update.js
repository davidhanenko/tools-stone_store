webpackHotUpdate_N_E("pages/products/[products]/[collection]/[single]",{

/***/ "./pages/products/[products]/[collection]/[single].js":
/*!************************************************************!*\
  !*** ./pages/products/[products]/[collection]/[single].js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductsPage; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _helpers_formatUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/formatUrl */ \"./helpers/formatUrl.js\");\n/* harmony import */ var _components_items_items_page_SingleItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/items/items-page/SingleItem */ \"./components/items/items-page/SingleItem.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/pages/products/[products]/[collection]/[single].js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query ITEMS_COLLECTION($item: String!) {\\n    single_item: singleItems(where: { item_title: $item }) {\\n      id\\n      item_title\\n      price\\n      description\\n      image {\\n        url\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar ITEMS_COLLECTION = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_templateObject());\nfunction ProductsPage(_ref) {\n  _s();\n\n  var query = _ref.query;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])(ITEMS_COLLECTION, {\n    variables: {\n      item: Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_4__[\"formatUrlToDbName\"])(query.item)\n    }\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: [\"Error: \", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 21\n  }, this);\n  var singleItem = data.single_item[0];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_items_items_page_SingleItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    singleItem: singleItem\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 7\n  }, this);\n}\n\n_s(ProductsPage, \"eE+cqeCo2lkI//dPlCsO1rICVGU=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"]];\n});\n\n_c = ProductsPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvW3Byb2R1Y3RzXS9bY29sbGVjdGlvbl0vW3NpbmdsZV0uanM/MDRhNyJdLCJuYW1lcyI6WyJJVEVNU19DT0xMRUNUSU9OIiwiZ3FsIiwiUHJvZHVjdHNQYWdlIiwicXVlcnkiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsIml0ZW0iLCJmb3JtYXRVcmxUb0RiTmFtZSIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwic2luZ2xlSXRlbSIsInNpbmdsZV9pdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MsMkRBQUgsbUJBQXRCO0FBY2UsU0FBU0MsWUFBVCxPQUFpQztBQUFBOztBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFBQSxrQkFDYkMsK0RBQVEsQ0FBQ0osZ0JBQUQsRUFBbUI7QUFDMURLLGFBQVMsRUFBRTtBQUNUQyxVQUFJLEVBQUVDLDRFQUFpQixDQUFDSixLQUFLLENBQUNHLElBQVA7QUFEZDtBQUQrQyxHQUFuQixDQURLO0FBQUEsTUFDdENFLElBRHNDLGFBQ3RDQSxJQURzQztBQUFBLE1BQ2hDQyxLQURnQyxhQUNoQ0EsS0FEZ0M7QUFBQSxNQUN6QkMsT0FEeUIsYUFDekJBLE9BRHlCOztBQU85QyxNQUFJQSxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlELEtBQUosRUFBVyxvQkFBTztBQUFBLDBCQUFXQSxLQUFLLENBQUNFLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBRVgsTUFBTUMsVUFBVSxHQUFJSixJQUFJLENBQUNLLFdBQUwsQ0FBaUIsQ0FBakIsQ0FBcEI7QUFFQSxzQkFDSSxxRUFBQywrRUFBRDtBQUFZLGNBQVUsRUFBRUQ7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBR0Q7O0dBZnVCVixZO1VBQ1dFLHVEOzs7S0FEWEYsWSIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3RzL1twcm9kdWN0c10vW2NvbGxlY3Rpb25dL1tzaW5nbGVdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuaW1wb3J0IHsgZm9ybWF0VXJsVG9EYk5hbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2Zvcm1hdFVybCc7XG5pbXBvcnQgU2luZ2xlSXRlbSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW1zLXBhZ2UvU2luZ2xlSXRlbSc7XG5cbmNvbnN0IElURU1TX0NPTExFQ1RJT04gPSBncWxgXG4gIHF1ZXJ5IElURU1TX0NPTExFQ1RJT04oJGl0ZW06IFN0cmluZyEpIHtcbiAgICBzaW5nbGVfaXRlbTogc2luZ2xlSXRlbXMod2hlcmU6IHsgaXRlbV90aXRsZTogJGl0ZW0gfSkge1xuICAgICAgaWRcbiAgICAgIGl0ZW1fdGl0bGVcbiAgICAgIHByaWNlXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgaW1hZ2Uge1xuICAgICAgICB1cmxcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzUGFnZSh7IHF1ZXJ5IH0pIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoSVRFTVNfQ09MTEVDVElPTiwge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgaXRlbTogZm9ybWF0VXJsVG9EYk5hbWUocXVlcnkuaXRlbSksXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XG5cbiAgY29uc3Qgc2luZ2xlSXRlbSA9ICBkYXRhLnNpbmdsZV9pdGVtWzBdO1xuICBcbiAgcmV0dXJuIChcbiAgICAgIDxTaW5nbGVJdGVtIHNpbmdsZUl0ZW09e3NpbmdsZUl0ZW19IC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/[products]/[collection]/[single].js\n");

/***/ })

})