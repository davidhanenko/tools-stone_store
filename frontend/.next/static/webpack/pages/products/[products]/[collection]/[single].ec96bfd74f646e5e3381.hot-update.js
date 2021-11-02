webpackHotUpdate_N_E("pages/products/[products]/[collection]/[single]",{

/***/ "./pages/products/[products]/[collection]/[single].js":
/*!************************************************************!*\
  !*** ./pages/products/[products]/[collection]/[single].js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductsPage; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _helpers_formatUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/formatUrl */ \"./helpers/formatUrl.js\");\n/* harmony import */ var _components_items_items_page_SingleItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/items/items-page/SingleItem */ \"./components/items/items-page/SingleItem.js\");\n\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/pages/products/[products]/[collection]/[single].js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query ITEMS_COLLECTION($item: String!) {\\n    single_item: singleItems(where: { item_title: $item }) {\\n      id\\n      price\\n      description\\n      image {\\n        url\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar ITEMS_COLLECTION = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_templateObject());\nfunction ProductsPage(_ref) {\n  _s();\n\n  var query = _ref.query;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])(ITEMS_COLLECTION, {\n    variables: {\n      item: Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_4__[\"formatUrlToDbName\"])(query.item)\n    }\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: [\"Error: \", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 21\n  }, this);\n  var singleItem = data.single_item[0];\n  console.log(singleItem);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n      children: singleItem.price\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n      children: singleItem.desc\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_items_items_page_SingleItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(ProductsPage, \"eE+cqeCo2lkI//dPlCsO1rICVGU=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"]];\n});\n\n_c = ProductsPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvW3Byb2R1Y3RzXS9bY29sbGVjdGlvbl0vW3NpbmdsZV0uanM/MDRhNyJdLCJuYW1lcyI6WyJJVEVNU19DT0xMRUNUSU9OIiwiZ3FsIiwiUHJvZHVjdHNQYWdlIiwicXVlcnkiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsIml0ZW0iLCJmb3JtYXRVcmxUb0RiTmFtZSIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwic2luZ2xlSXRlbSIsInNpbmdsZV9pdGVtIiwiY29uc29sZSIsImxvZyIsInByaWNlIiwiZGVzYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLGdCQUFnQixHQUFHQywyREFBSCxtQkFBdEI7QUFhZSxTQUFTQyxZQUFULE9BQWlDO0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGtCQUNiQywrREFBUSxDQUFDSixnQkFBRCxFQUFtQjtBQUMxREssYUFBUyxFQUFFO0FBQ1RDLFVBQUksRUFBRUMsNEVBQWlCLENBQUNKLEtBQUssQ0FBQ0csSUFBUDtBQURkO0FBRCtDLEdBQW5CLENBREs7QUFBQSxNQUN0Q0UsSUFEc0MsYUFDdENBLElBRHNDO0FBQUEsTUFDaENDLEtBRGdDLGFBQ2hDQSxLQURnQztBQUFBLE1BQ3pCQyxPQUR5QixhQUN6QkEsT0FEeUI7O0FBTzlDLE1BQUlBLE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ2IsTUFBSUQsS0FBSixFQUFXLG9CQUFPO0FBQUEsMEJBQVdBLEtBQUssQ0FBQ0UsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFFWCxNQUFNQyxVQUFVLEdBQUlKLElBQUksQ0FBQ0ssV0FBTCxDQUFpQixDQUFqQixDQUFwQjtBQUNGQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsVUFBWjtBQUNFLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0EsVUFBVSxDQUFDSTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGdCQUFLSixVQUFVLENBQUNLO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLHFFQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBLGtCQURGO0FBT0Q7O0dBbkJ1QmYsWTtVQUNXRSx1RDs7O0tBRFhGLFkiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9bcHJvZHVjdHNdL1tjb2xsZWN0aW9uXS9bc2luZ2xlXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmltcG9ydCB7IGZvcm1hdFVybFRvRGJOYW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9mb3JtYXRVcmwnO1xuaW1wb3J0IFNpbmdsZUl0ZW0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9pdGVtcy9pdGVtcy1wYWdlL1NpbmdsZUl0ZW0nO1xuXG5jb25zdCBJVEVNU19DT0xMRUNUSU9OID0gZ3FsYFxuICBxdWVyeSBJVEVNU19DT0xMRUNUSU9OKCRpdGVtOiBTdHJpbmchKSB7XG4gICAgc2luZ2xlX2l0ZW06IHNpbmdsZUl0ZW1zKHdoZXJlOiB7IGl0ZW1fdGl0bGU6ICRpdGVtIH0pIHtcbiAgICAgIGlkXG4gICAgICBwcmljZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIGltYWdlIHtcbiAgICAgICAgdXJsXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0c1BhZ2UoeyBxdWVyeSB9KSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KElURU1TX0NPTExFQ1RJT04sIHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGl0ZW06IGZvcm1hdFVybFRvRGJOYW1lKHF1ZXJ5Lml0ZW0pLFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xuXG4gIGNvbnN0IHNpbmdsZUl0ZW0gPSAgZGF0YS5zaW5nbGVfaXRlbVswXTtcbmNvbnNvbGUubG9nKHNpbmdsZUl0ZW0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+e3NpbmdsZUl0ZW0ucHJpY2V9PC9oMj5cbiAgICAgIDxoMj57c2luZ2xlSXRlbS5kZXNjfTwvaDI+XG4gICAgICA8U2luZ2xlSXRlbSAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/[products]/[collection]/[single].js\n");

/***/ })

})