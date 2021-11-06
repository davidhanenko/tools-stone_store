webpackHotUpdate_N_E("pages/products/[products]",{

/***/ "./components/items/items-page/items-category/ItemsCategory.js":
/*!*********************************************************************!*\
  !*** ./components/items/items-page/items-category/ItemsCategory.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ItemsCategory; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _items_sub_category_ItemsSubCategory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items-sub-category/ItemsSubCategory */ \"./components/items/items-page/items-sub-category/ItemsSubCategory.js\");\n/* harmony import */ var _ItemsCategoryStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ItemsCategoryStyles */ \"./components/items/items-page/items-category/ItemsCategoryStyles.js\");\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/items/items-page/items-category/ItemsCategory.js\";\n\n\n\nfunction ItemsCategory(_ref) {\n  var _this = this;\n\n  var items = _ref.items;\n  var productTitle = items === null || items === void 0 ? void 0 : items.product_title;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ItemsCategoryStyles__WEBPACK_IMPORTED_MODULE_3__[\"ItemsCategoryStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [productTitle.capitalize(), \" - A2Z\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ItemsCategoryStyles__WEBPACK_IMPORTED_MODULE_3__[\"CategoryTitleStyles\"], {\n      children: productTitle\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"category-container\",\n      children: items.category.map(function (subCategory) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_items_sub_category_ItemsSubCategory__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          subCategory: subCategory,\n          productTitle: productTitle\n        }, subCategory.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n_c = ItemsCategory;\n\nvar _c;\n\n$RefreshReg$(_c, \"ItemsCategory\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtcy9pdGVtcy1wYWdlL2l0ZW1zLWNhdGVnb3J5L0l0ZW1zQ2F0ZWdvcnkuanM/ZWMxZSJdLCJuYW1lcyI6WyJJdGVtc0NhdGVnb3J5IiwiaXRlbXMiLCJwcm9kdWN0VGl0bGUiLCJwcm9kdWN0X3RpdGxlIiwiY2FwaXRhbGl6ZSIsImNhdGVnb3J5IiwibWFwIiwic3ViQ2F0ZWdvcnkiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUtlLFNBQVNBLGFBQVQsT0FBa0M7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDL0MsTUFBTUMsWUFBWSxHQUFHRCxLQUFILGFBQUdBLEtBQUgsdUJBQUdBLEtBQUssQ0FBRUUsYUFBNUI7QUFFQSxzQkFDRSxxRUFBQyx3RUFBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQSxtQkFBUUQsWUFBWSxDQUFDRSxVQUFiLEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUscUVBQUMsd0VBQUQ7QUFBQSxnQkFBc0JGO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUEsZ0JBQ0dELEtBQUssQ0FBQ0ksUUFBTixDQUFlQyxHQUFmLENBQW1CLFVBQUFDLFdBQVc7QUFBQSw0QkFDN0IscUVBQUMsNEVBQUQ7QUFFRSxxQkFBVyxFQUFFQSxXQUZmO0FBR0Usc0JBQVksRUFBRUw7QUFIaEIsV0FDT0ssV0FBVyxDQUFDQyxFQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQ2QjtBQUFBLE9BQTlCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUJEO0tBcEJ1QlIsYSIsImZpbGUiOiIuL2NvbXBvbmVudHMvaXRlbXMvaXRlbXMtcGFnZS9pdGVtcy1jYXRlZ29yeS9JdGVtc0NhdGVnb3J5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IEl0ZW1zU3ViQ2F0ZWdvcnkgZnJvbSAnLi4vaXRlbXMtc3ViLWNhdGVnb3J5L0l0ZW1zU3ViQ2F0ZWdvcnknO1xuaW1wb3J0IHtcbiAgQ2F0ZWdvcnlUaXRsZVN0eWxlcyxcbiAgSXRlbXNDYXRlZ29yeVN0eWxlcyxcbn0gZnJvbSAnLi9JdGVtc0NhdGVnb3J5U3R5bGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbXNDYXRlZ29yeSh7IGl0ZW1zIH0pIHtcbiAgY29uc3QgcHJvZHVjdFRpdGxlID0gaXRlbXM/LnByb2R1Y3RfdGl0bGU7XG5cbiAgcmV0dXJuIChcbiAgICA8SXRlbXNDYXRlZ29yeVN0eWxlcz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3Byb2R1Y3RUaXRsZS5jYXBpdGFsaXplKCl9IC0gQTJaPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDYXRlZ29yeVRpdGxlU3R5bGVzPntwcm9kdWN0VGl0bGV9PC9DYXRlZ29yeVRpdGxlU3R5bGVzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3J5LWNvbnRhaW5lcic+XG4gICAgICAgIHtpdGVtcy5jYXRlZ29yeS5tYXAoc3ViQ2F0ZWdvcnkgPT4gKFxuICAgICAgICAgIDxJdGVtc1N1YkNhdGVnb3J5XG4gICAgICAgICAgICBrZXk9e3N1YkNhdGVnb3J5LmlkfVxuICAgICAgICAgICAgc3ViQ2F0ZWdvcnk9e3N1YkNhdGVnb3J5fVxuICAgICAgICAgICAgcHJvZHVjdFRpdGxlPXtwcm9kdWN0VGl0bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0l0ZW1zQ2F0ZWdvcnlTdHlsZXM+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/items/items-page/items-category/ItemsCategory.js\n");

/***/ })

})