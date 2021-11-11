webpackHotUpdate_N_E("pages/products/[products]/[collection]",{

/***/ "./components/items/items-page/sub-category-collection/collection-item/CollectionItem.js":
/*!***********************************************************************************************!*\
  !*** ./components/items/items-page/sub-category-collection/collection-item/CollectionItem.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CollectionItem; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_formatUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../helpers/formatUrl */ \"./helpers/formatUrl.js\");\n/* harmony import */ var _CollectionItemStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CollectionItemStyles */ \"./components/items/items-page/sub-category-collection/collection-item/CollectionItemStyles.js\");\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/items/items-page/sub-category-collection/collection-item/CollectionItem.js\";\n\n\n\n\nfunction CollectionItem(_ref) {\n  var item = _ref.item,\n      items = _ref.items,\n      collection = _ref.collection;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_CollectionItemStyles__WEBPACK_IMPORTED_MODULE_4__[\"CollectionItemStyles\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: {\n        pathname: '/products/[item]/[collection]/[single]',\n        query: {\n          item: \"\".concat(product),\n          collection: \"\".concat(collection),\n          single: \"\".concat(Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_3__[\"formatUrlToRoute\"])(item.item_title))\n        }\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          src: item.image[0].url,\n          width: 200,\n          height: 200\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_CollectionItemStyles__WEBPACK_IMPORTED_MODULE_4__[\"CollectionItemTitleStyles\"], {\n          children: item.item_title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n_c = CollectionItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"CollectionItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtcy9pdGVtcy1wYWdlL3N1Yi1jYXRlZ29yeS1jb2xsZWN0aW9uL2NvbGxlY3Rpb24taXRlbS9Db2xsZWN0aW9uSXRlbS5qcz81ZGMyIl0sIm5hbWVzIjpbIkNvbGxlY3Rpb25JdGVtIiwiaXRlbSIsIml0ZW1zIiwiY29sbGVjdGlvbiIsInBhdGhuYW1lIiwicXVlcnkiLCJwcm9kdWN0Iiwic2luZ2xlIiwiZm9ybWF0VXJsVG9Sb3V0ZSIsIml0ZW1fdGl0bGUiLCJpbWFnZSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFZSxTQUFTQSxjQUFULE9BQXFEO0FBQUEsTUFBM0JDLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLE1BQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7QUFDbEUsc0JBQ0UscUVBQUMsMEVBQUQ7QUFBQSwyQkFDRSxxRUFBQyxnREFBRDtBQUNFLFVBQUksRUFBRTtBQUNKQyxnQkFBUSxFQUFFLHdDQUROO0FBRUpDLGFBQUssRUFBRTtBQUNMSixjQUFJLFlBQUtLLE9BQUwsQ0FEQztBQUVMSCxvQkFBVSxZQUFLQSxVQUFMLENBRkw7QUFHTEksZ0JBQU0sWUFBS0MsMkVBQWdCLENBQUNQLElBQUksQ0FBQ1EsVUFBTixDQUFyQjtBQUhEO0FBRkgsT0FEUjtBQUFBLDZCQVVFO0FBQUEsZ0NBQ0UscUVBQUMsaURBQUQ7QUFBTyxhQUFHLEVBQUVSLElBQUksQ0FBQ1MsS0FBTCxDQUFXLENBQVgsRUFBY0MsR0FBMUI7QUFBK0IsZUFBSyxFQUFFLEdBQXRDO0FBQTJDLGdCQUFNLEVBQUU7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLCtFQUFEO0FBQUEsb0JBQ0dWLElBQUksQ0FBQ1E7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQ7S0F0QnVCVCxjIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9pdGVtcy9pdGVtcy1wYWdlL3N1Yi1jYXRlZ29yeS1jb2xsZWN0aW9uL2NvbGxlY3Rpb24taXRlbS9Db2xsZWN0aW9uSXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IGZvcm1hdFVybFRvUm91dGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9oZWxwZXJzL2Zvcm1hdFVybCc7XG5cbmltcG9ydCB7IENvbGxlY3Rpb25JdGVtU3R5bGVzLCBDb2xsZWN0aW9uSXRlbVRpdGxlU3R5bGVzIH0gZnJvbSAnLi9Db2xsZWN0aW9uSXRlbVN0eWxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbGxlY3Rpb25JdGVtKHsgaXRlbSwgaXRlbXMsIGNvbGxlY3Rpb24gfSkge1xuICByZXR1cm4gKFxuICAgIDxDb2xsZWN0aW9uSXRlbVN0eWxlcz5cbiAgICAgIDxMaW5rXG4gICAgICAgIGhyZWY9e3tcbiAgICAgICAgICBwYXRobmFtZTogJy9wcm9kdWN0cy9baXRlbV0vW2NvbGxlY3Rpb25dL1tzaW5nbGVdJyxcbiAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgaXRlbTogYCR7cHJvZHVjdH1gLFxuICAgICAgICAgICAgY29sbGVjdGlvbjogYCR7Y29sbGVjdGlvbn1gLFxuICAgICAgICAgICAgc2luZ2xlOiBgJHtmb3JtYXRVcmxUb1JvdXRlKGl0ZW0uaXRlbV90aXRsZSl9YCxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8YT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmltYWdlWzBdLnVybH0gd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9IC8+XG4gICAgICAgICAgPENvbGxlY3Rpb25JdGVtVGl0bGVTdHlsZXM+XG4gICAgICAgICAgICB7aXRlbS5pdGVtX3RpdGxlfVxuICAgICAgICAgIDwvQ29sbGVjdGlvbkl0ZW1UaXRsZVN0eWxlcz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvQ29sbGVjdGlvbkl0ZW1TdHlsZXM+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/items/items-page/sub-category-collection/collection-item/CollectionItem.js\n");

/***/ })

})