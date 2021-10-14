webpackHotUpdate_N_E("pages/products/[products]",{

/***/ "./components/items/items-page/ItemsCategory.js":
/*!******************************************************!*\
  !*** ./components/items/items-page/ItemsCategory.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ItemsCategory; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _ItemsSubCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ItemsSubCategory */ \"./components/items/items-page/ItemsSubCategory.js\");\n/* harmony import */ var _ItemsCategoryStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ItemsCategoryStyles */ \"./components/items/items-page/ItemsCategoryStyles.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/items/items-page/ItemsCategory.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query ITEMS_CATEGORY($itemsCategory: String!) {\\n    products(where: { product_title: $itemsCategory }) {\\n      product_title\\n      category: product_categories {\\n        product_category\\n        id\\n        single: single_products(limit: 1) {\\n          image {\\n            url\\n          }\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar ITEMS_CATEGORY = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_templateObject());\nfunction ItemsCategory(_ref) {\n  _s();\n\n  var _this = this;\n\n  var itemsCategory = _ref.itemsCategory;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])(ITEMS_CATEGORY, {\n    variables: {\n      itemsCategory: itemsCategory\n    }\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: [\"Error: \", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 21\n  }, this);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_ItemsCategoryStyles__WEBPACK_IMPORTED_MODULE_5__[\"ItemsCategoryStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n      className: \"category-title\",\n      children: itemsCategory\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"category\",\n      children: data.products[0].category.map(function (subCategory) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_ItemsSubCategory__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          subCategory: subCategory\n        }, subCategory.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ItemsCategory, \"eE+cqeCo2lkI//dPlCsO1rICVGU=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"]];\n});\n\n_c = ItemsCategory;\n\nvar _c;\n\n$RefreshReg$(_c, \"ItemsCategory\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtcy9pdGVtcy1wYWdlL0l0ZW1zQ2F0ZWdvcnkuanM/MzljNCJdLCJuYW1lcyI6WyJJVEVNU19DQVRFR09SWSIsImdxbCIsIkl0ZW1zQ2F0ZWdvcnkiLCJpdGVtc0NhdGVnb3J5IiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwibWVzc2FnZSIsInByb2R1Y3RzIiwiY2F0ZWdvcnkiLCJtYXAiLCJzdWJDYXRlZ29yeSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLDJEQUFILG1CQUFwQjtBQWlCZSxTQUFTQyxhQUFULE9BQTBDO0FBQUE7O0FBQUE7O0FBQUEsTUFBakJDLGFBQWlCLFFBQWpCQSxhQUFpQjs7QUFBQSxrQkFDdEJDLCtEQUFRLENBQUNKLGNBQUQsRUFBaUI7QUFDeERLLGFBQVMsRUFBRTtBQUNURixtQkFBYSxFQUFiQTtBQURTO0FBRDZDLEdBQWpCLENBRGM7QUFBQSxNQUMvQ0csSUFEK0MsYUFDL0NBLElBRCtDO0FBQUEsTUFDekNDLEtBRHlDLGFBQ3pDQSxLQUR5QztBQUFBLE1BQ2xDQyxPQURrQyxhQUNsQ0EsT0FEa0M7O0FBT3ZELE1BQUlBLE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ2IsTUFBSUQsS0FBSixFQUFXLG9CQUFPO0FBQUEsMEJBQVdBLEtBQUssQ0FBQ0UsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFFWCxzQkFDRSxxRUFBQyx3RUFBRDtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLGdCQUFkO0FBQUEsZ0JBQWdDTjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUEsZ0JBQ0dHLElBQUksQ0FBQ0ksUUFBTCxDQUFjLENBQWQsRUFBaUJDLFFBQWpCLENBQTBCQyxHQUExQixDQUE4QixVQUFBQyxXQUFXO0FBQUEsNEJBQ3hDLHFFQUFDLHlEQUFEO0FBQXVDLHFCQUFXLEVBQUVBO0FBQXBELFdBQXVCQSxXQUFXLENBQUNDLEVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHdDO0FBQUEsT0FBekM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDs7R0FwQnVCWixhO1VBQ1dFLHVEOzs7S0FEWEYsYSIsImZpbGUiOiIuL2NvbXBvbmVudHMvaXRlbXMvaXRlbXMtcGFnZS9JdGVtc0NhdGVnb3J5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuaW1wb3J0IEl0ZW1zU3ViQ2F0ZWdvdHkgZnJvbSAnLi9JdGVtc1N1YkNhdGVnb3J5JztcbmltcG9ydCB7IEl0ZW1zQ2F0ZWdvcnlTdHlsZXMgfSBmcm9tICcuL0l0ZW1zQ2F0ZWdvcnlTdHlsZXMnO1xuXG5jb25zdCBJVEVNU19DQVRFR09SWSA9IGdxbGBcbiAgcXVlcnkgSVRFTVNfQ0FURUdPUlkoJGl0ZW1zQ2F0ZWdvcnk6IFN0cmluZyEpIHtcbiAgICBwcm9kdWN0cyh3aGVyZTogeyBwcm9kdWN0X3RpdGxlOiAkaXRlbXNDYXRlZ29yeSB9KSB7XG4gICAgICBwcm9kdWN0X3RpdGxlXG4gICAgICBjYXRlZ29yeTogcHJvZHVjdF9jYXRlZ29yaWVzIHtcbiAgICAgICAgcHJvZHVjdF9jYXRlZ29yeVxuICAgICAgICBpZFxuICAgICAgICBzaW5nbGU6IHNpbmdsZV9wcm9kdWN0cyhsaW1pdDogMSkge1xuICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgIHVybFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbXNDYXRlZ29yeSh7IGl0ZW1zQ2F0ZWdvcnkgfSkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShJVEVNU19DQVRFR09SWSwge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgaXRlbXNDYXRlZ29yeSxcbiAgICB9LFxuICB9KTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcblxuICByZXR1cm4gKFxuICAgIDxJdGVtc0NhdGVnb3J5U3R5bGVzPlxuICAgICAgPGgzIGNsYXNzTmFtZT0nY2F0ZWdvcnktdGl0bGUnPntpdGVtc0NhdGVnb3J5fTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnknPlxuICAgICAgICB7ZGF0YS5wcm9kdWN0c1swXS5jYXRlZ29yeS5tYXAoc3ViQ2F0ZWdvcnkgPT4gKFxuICAgICAgICAgIDxJdGVtc1N1YkNhdGVnb3R5IGtleT17c3ViQ2F0ZWdvcnkuaWR9IHN1YkNhdGVnb3J5PXtzdWJDYXRlZ29yeX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0l0ZW1zQ2F0ZWdvcnlTdHlsZXM+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/items/items-page/ItemsCategory.js\n");

/***/ })

})