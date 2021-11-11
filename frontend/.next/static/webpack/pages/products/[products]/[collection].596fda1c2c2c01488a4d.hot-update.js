webpackHotUpdate_N_E("pages/products/[products]/[collection]",{

/***/ "./components/items/items-page/sub-category-collection/SubCategoryCollection.js":
/*!**************************************************************************************!*\
  !*** ./components/items/items-page/sub-category-collection/SubCategoryCollection.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SubCategoryCollection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_capitalizeStr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../helpers/capitalizeStr */ \"./helpers/capitalizeStr.js\");\n/* harmony import */ var _collection_item_CollectionItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collection-item/CollectionItem */ \"./components/items/items-page/sub-category-collection/collection-item/CollectionItem.js\");\n/* harmony import */ var _SubCategoryCollectionStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubCategoryCollectionStyles */ \"./components/items/items-page/sub-category-collection/SubCategoryCollectionStyles.js\");\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/items/items-page/sub-category-collection/SubCategoryCollection.js\";\n\n\n\n\nfunction SubCategoryCollection(_ref) {\n  var _this = this;\n\n  var itemsCollection = _ref.itemsCollection,\n      item = _ref.item,\n      collection = _ref.collection;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SubCategoryCollectionStyles__WEBPACK_IMPORTED_MODULE_4__[\"SubCategoryCollectionStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [Object(_helpers_capitalizeStr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(itemsCollection.category), \" - A2Z\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SubCategoryCollectionStyles__WEBPACK_IMPORTED_MODULE_4__[\"CollectionTitleStyled\"], {\n      children: itemsCollection.category\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"collection-container\",\n      children: itemsCollection.single_items.map(function (item) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_collection_item_CollectionItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          item: item,\n          items: item,\n          collection: collection\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n_c = SubCategoryCollection;\n\nvar _c;\n\n$RefreshReg$(_c, \"SubCategoryCollection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtcy9pdGVtcy1wYWdlL3N1Yi1jYXRlZ29yeS1jb2xsZWN0aW9uL1N1YkNhdGVnb3J5Q29sbGVjdGlvbi5qcz9iMWZkIl0sIm5hbWVzIjpbIlN1YkNhdGVnb3J5Q29sbGVjdGlvbiIsIml0ZW1zQ29sbGVjdGlvbiIsIml0ZW0iLCJjb2xsZWN0aW9uIiwiY2FwaXRhbGl6ZVN0ciIsImNhdGVnb3J5Iiwic2luZ2xlX2l0ZW1zIiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFLZSxTQUFTQSxxQkFBVCxPQUlaO0FBQUE7O0FBQUEsTUFIREMsZUFHQyxRQUhEQSxlQUdDO0FBQUEsTUFGREMsSUFFQyxRQUZEQSxJQUVDO0FBQUEsTUFEREMsVUFDQyxRQUREQSxVQUNDO0FBQ0Qsc0JBQ0UscUVBQUMsd0ZBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUEsbUJBQVFDLHNFQUFhLENBQUNILGVBQWUsQ0FBQ0ksUUFBakIsQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUscUVBQUMsa0ZBQUQ7QUFBQSxnQkFBd0JKLGVBQWUsQ0FBQ0k7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFBSyxlQUFTLEVBQUMsc0JBQWY7QUFBQSxnQkFDR0osZUFBZSxDQUFDSyxZQUFoQixDQUE2QkMsR0FBN0IsQ0FBaUMsVUFBQUwsSUFBSTtBQUFBLDRCQUNwQyxxRUFBQyx1RUFBRDtBQUVFLGNBQUksRUFBRUEsSUFGUjtBQUdFLGVBQUssRUFBRUEsSUFIVDtBQUlFLG9CQUFVLEVBQUVDO0FBSmQsV0FDT0QsSUFBSSxDQUFDTSxFQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG9DO0FBQUEsT0FBckM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQ7S0F2QnVCUixxQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvaXRlbXMvaXRlbXMtcGFnZS9zdWItY2F0ZWdvcnktY29sbGVjdGlvbi9TdWJDYXRlZ29yeUNvbGxlY3Rpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgY2FwaXRhbGl6ZVN0ciBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2NhcGl0YWxpemVTdHInO1xuXG5pbXBvcnQgQ29sbGVjdGlvbkl0ZW0gZnJvbSAnLi9jb2xsZWN0aW9uLWl0ZW0vQ29sbGVjdGlvbkl0ZW0nO1xuaW1wb3J0IHtcbiAgQ29sbGVjdGlvblRpdGxlU3R5bGVkLFxuICBTdWJDYXRlZ29yeUNvbGxlY3Rpb25TdHlsZXMsXG59IGZyb20gJy4vU3ViQ2F0ZWdvcnlDb2xsZWN0aW9uU3R5bGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3ViQ2F0ZWdvcnlDb2xsZWN0aW9uKHtcbiAgaXRlbXNDb2xsZWN0aW9uLFxuICBpdGVtLFxuICBjb2xsZWN0aW9uLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxTdWJDYXRlZ29yeUNvbGxlY3Rpb25TdHlsZXM+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntjYXBpdGFsaXplU3RyKGl0ZW1zQ29sbGVjdGlvbi5jYXRlZ29yeSl9IC0gQTJaPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb2xsZWN0aW9uVGl0bGVTdHlsZWQ+e2l0ZW1zQ29sbGVjdGlvbi5jYXRlZ29yeX08L0NvbGxlY3Rpb25UaXRsZVN0eWxlZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2xsZWN0aW9uLWNvbnRhaW5lcic+XG4gICAgICAgIHtpdGVtc0NvbGxlY3Rpb24uc2luZ2xlX2l0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICA8Q29sbGVjdGlvbkl0ZW1cbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICBpdGVtcz17aXRlbX1cbiAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L1N1YkNhdGVnb3J5Q29sbGVjdGlvblN0eWxlcz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/items/items-page/sub-category-collection/SubCategoryCollection.js\n");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false

})