webpackHotUpdate_N_E("pages/products/[products]",{

/***/ "./components/items/items-page/ItemsCategory.js":
/*!******************************************************!*\
  !*** ./components/items/items-page/ItemsCategory.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ItemsCategory; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _lib_formatUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/formatUrl */ \"./lib/formatUrl.js\");\n/* harmony import */ var _ItemsSubCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ItemsSubCategory */ \"./components/items/items-page/ItemsSubCategory.js\");\n/* harmony import */ var _ItemsCategoryStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ItemsCategoryStyles */ \"./components/items/items-page/ItemsCategoryStyles.js\");\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/items/items-page/ItemsCategory.js\";\n\n\n\n\n // const ITEMS_CATEGORY = gql`\n//   query ITEMS_CATEGORY($itemsCategory: String!) {\n//     products(where: { product_title: $itemsCategory }) {\n//       product_title\n//       category: product_categories {\n//         category_title: product_category\n//         id\n//         single_item: single_products(limit: 1) {\n//           item_title\n//           image {\n//             url\n//           }\n//         }\n//       }\n//     }\n//   }\n// `;\n\nfunction ItemsCategory(_ref) {\n  var _data,\n      _this = this;\n\n  var itemsCategory = _ref.itemsCategory,\n      products = _ref.products;\n  // const { data, error, loading } = useQuery(ITEMS_CATEGORY, {\n  //   variables: {\n  //     itemsCategory: formatUrlToDbName(itemsCategory),\n  //   },\n  // });\n  // if (loading) return <p>Loading...</p>;\n  // if (error) return <p>Error: {error.message}</p>;\n  var product = (_data = data) === null || _data === void 0 ? void 0 : _data.products[0];\n  var productTitle = product === null || product === void 0 ? void 0 : product.product_title;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ItemsCategoryStyles__WEBPACK_IMPORTED_MODULE_5__[\"ItemsCategoryStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      className: \"category-title\",\n      children: productTitle\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"category\",\n      children: product.category.map(function (subCategory) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ItemsSubCategory__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          subCategory: subCategory,\n          title: productTitle\n        }, subCategory.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this);\n}\n_c = ItemsCategory;\n\nvar _c;\n\n$RefreshReg$(_c, \"ItemsCategory\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtcy9pdGVtcy1wYWdlL0l0ZW1zQ2F0ZWdvcnkuanM/MzljNCJdLCJuYW1lcyI6WyJJdGVtc0NhdGVnb3J5IiwiaXRlbXNDYXRlZ29yeSIsInByb2R1Y3RzIiwicHJvZHVjdCIsImRhdGEiLCJwcm9kdWN0VGl0bGUiLCJwcm9kdWN0X3RpdGxlIiwiY2F0ZWdvcnkiLCJtYXAiLCJzdWJDYXRlZ29yeSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxhQUFULE9BQW9EO0FBQUE7QUFBQTs7QUFBQSxNQUEzQkMsYUFBMkIsUUFBM0JBLGFBQTJCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsTUFBTUMsT0FBTyxZQUFHQyxJQUFILDBDQUFHLE1BQU1GLFFBQU4sQ0FBZSxDQUFmLENBQWhCO0FBQ0EsTUFBTUcsWUFBWSxHQUFHRixPQUFILGFBQUdBLE9BQUgsdUJBQUdBLE9BQU8sQ0FBRUcsYUFBOUI7QUFFQSxzQkFDRSxxRUFBQyx3RUFBRDtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLGdCQUFkO0FBQUEsZ0JBQWdDRDtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUEsZ0JBQ0dGLE9BQU8sQ0FBQ0ksUUFBUixDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQUMsV0FBVztBQUFBLDRCQUMvQixxRUFBQyx5REFBRDtBQUVFLHFCQUFXLEVBQUVBLFdBRmY7QUFHRSxlQUFLLEVBQUVKO0FBSFQsV0FDT0ksV0FBVyxDQUFDQyxFQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQrQjtBQUFBLE9BQWhDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0Q7S0EzQnVCVixhIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9pdGVtcy9pdGVtcy1wYWdlL0l0ZW1zQ2F0ZWdvcnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgZm9ybWF0VXJsVG9EYk5hbWUgfSBmcm9tICcuLi8uLi8uLi9saWIvZm9ybWF0VXJsJztcblxuaW1wb3J0IEl0ZW1zU3ViQ2F0ZWdvcnkgZnJvbSAnLi9JdGVtc1N1YkNhdGVnb3J5JztcbmltcG9ydCB7IEl0ZW1zQ2F0ZWdvcnlTdHlsZXMgfSBmcm9tICcuL0l0ZW1zQ2F0ZWdvcnlTdHlsZXMnO1xuXG4vLyBjb25zdCBJVEVNU19DQVRFR09SWSA9IGdxbGBcbi8vICAgcXVlcnkgSVRFTVNfQ0FURUdPUlkoJGl0ZW1zQ2F0ZWdvcnk6IFN0cmluZyEpIHtcbi8vICAgICBwcm9kdWN0cyh3aGVyZTogeyBwcm9kdWN0X3RpdGxlOiAkaXRlbXNDYXRlZ29yeSB9KSB7XG4vLyAgICAgICBwcm9kdWN0X3RpdGxlXG4vLyAgICAgICBjYXRlZ29yeTogcHJvZHVjdF9jYXRlZ29yaWVzIHtcbi8vICAgICAgICAgY2F0ZWdvcnlfdGl0bGU6IHByb2R1Y3RfY2F0ZWdvcnlcbi8vICAgICAgICAgaWRcbi8vICAgICAgICAgc2luZ2xlX2l0ZW06IHNpbmdsZV9wcm9kdWN0cyhsaW1pdDogMSkge1xuLy8gICAgICAgICAgIGl0ZW1fdGl0bGVcbi8vICAgICAgICAgICBpbWFnZSB7XG4vLyAgICAgICAgICAgICB1cmxcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIGA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW1zQ2F0ZWdvcnkoeyBpdGVtc0NhdGVnb3J5LCBwcm9kdWN0cyB9KSB7XG4gIC8vIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KElURU1TX0NBVEVHT1JZLCB7XG4gIC8vICAgdmFyaWFibGVzOiB7XG4gIC8vICAgICBpdGVtc0NhdGVnb3J5OiBmb3JtYXRVcmxUb0RiTmFtZShpdGVtc0NhdGVnb3J5KSxcbiAgLy8gICB9LFxuICAvLyB9KTtcblxuICAvLyBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAvLyBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcblxuICBjb25zdCBwcm9kdWN0ID0gZGF0YT8ucHJvZHVjdHNbMF07XG4gIGNvbnN0IHByb2R1Y3RUaXRsZSA9IHByb2R1Y3Q/LnByb2R1Y3RfdGl0bGU7XG5cbiAgcmV0dXJuIChcbiAgICA8SXRlbXNDYXRlZ29yeVN0eWxlcz5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2NhdGVnb3J5LXRpdGxlJz57cHJvZHVjdFRpdGxlfTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnknPlxuICAgICAgICB7cHJvZHVjdC5jYXRlZ29yeS5tYXAoc3ViQ2F0ZWdvcnkgPT4gKFxuICAgICAgICAgIDxJdGVtc1N1YkNhdGVnb3J5XG4gICAgICAgICAgICBrZXk9e3N1YkNhdGVnb3J5LmlkfVxuICAgICAgICAgICAgc3ViQ2F0ZWdvcnk9e3N1YkNhdGVnb3J5fVxuICAgICAgICAgICAgdGl0bGU9e3Byb2R1Y3RUaXRsZX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvSXRlbXNDYXRlZ29yeVN0eWxlcz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/items/items-page/ItemsCategory.js\n");

/***/ })

})