webpackHotUpdate_N_E("pages/products/[products]",{

/***/ "./components/items/items-page/ItemsSubCategory.js":
/*!*********************************************************!*\
  !*** ./components/items/items-page/ItemsSubCategory.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ItemsSubCategory; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ItemsSubCategoryStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ItemsSubCategoryStyles */ \"./components/items/items-page/ItemsSubCategoryStyles.js\");\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/items/items-page/ItemsSubCategory.js\";\n\n\n\nfunction ItemsSubCategory(_ref) {\n  var subCategory = _ref.subCategory,\n      title = _ref.title;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ItemsSubCategoryStyles__WEBPACK_IMPORTED_MODULE_3__[\"ItemsSubCategoryStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      className: \"category \",\n      children: subCategory.category_title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SubCategoryItemsList, {\n      subCategory: subCategory,\n      title: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n_c = ItemsSubCategory;\n\nfunction SubCategoryItemsList(_ref2) {\n  var subCategory = _ref2.subCategory,\n      title = _ref2.title;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: {\n      pathname: '/products/[products]/[product]',\n      query: {\n        products: \"\".concat(title),\n        product: \"\".concat(subCategory.category_title.toLowerCase().split(' ').join('-'))\n      }\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        className: \"sub-image\",\n        src: subCategory.single_item[0].image.url,\n        width: 300,\n        height: 300\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n\n_c2 = SubCategoryItemsList;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ItemsSubCategory\");\n$RefreshReg$(_c2, \"SubCategoryItemsList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtcy9pdGVtcy1wYWdlL0l0ZW1zU3ViQ2F0ZWdvcnkuanM/YmZhNCJdLCJuYW1lcyI6WyJJdGVtc1N1YkNhdGVnb3J5Iiwic3ViQ2F0ZWdvcnkiLCJ0aXRsZSIsImNhdGVnb3J5X3RpdGxlIiwiU3ViQ2F0ZWdvcnlJdGVtc0xpc3QiLCJwYXRobmFtZSIsInF1ZXJ5IiwicHJvZHVjdHMiLCJwcm9kdWN0IiwidG9Mb3dlckNhc2UiLCJzcGxpdCIsImpvaW4iLCJzaW5nbGVfaXRlbSIsImltYWdlIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUdlLFNBQVNBLGdCQUFULE9BQWtEO0FBQUEsTUFBdEJDLFdBQXNCLFFBQXRCQSxXQUFzQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUMvRCxzQkFDRSxxRUFBQyw4RUFBRDtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLFdBQWQ7QUFBQSxnQkFBMkJELFdBQVcsQ0FBQ0U7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsb0JBQUQ7QUFBc0IsaUJBQVcsRUFBRUYsV0FBbkM7QUFBZ0QsV0FBSyxFQUFFQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDtLQVB1QkYsZ0I7O0FBVXhCLFNBQVNJLG9CQUFULFFBQXNEO0FBQUEsTUFBdEJILFdBQXNCLFNBQXRCQSxXQUFzQjtBQUFBLE1BQVRDLEtBQVMsU0FBVEEsS0FBUztBQUNwRCxzQkFDRSxxRUFBQyxnREFBRDtBQUNFLFFBQUksRUFBRTtBQUNKRyxjQUFRLEVBQUUsZ0NBRE47QUFFSkMsV0FBSyxFQUFFO0FBQ0xDLGdCQUFRLFlBQUtMLEtBQUwsQ0FESDtBQUVMTSxlQUFPLFlBQUtQLFdBQVcsQ0FBQ0UsY0FBWixDQUNUTSxXQURTLEdBRVRDLEtBRlMsQ0FFSCxHQUZHLEVBR1RDLElBSFMsQ0FHSixHQUhJLENBQUw7QUFGRjtBQUZILEtBRFI7QUFBQSwyQkFZRTtBQUFBLDZCQUNFLHFFQUFDLGlEQUFEO0FBQ0UsaUJBQVMsRUFBQyxXQURaO0FBRUUsV0FBRyxFQUFFVixXQUFXLENBQUNXLFdBQVosQ0FBd0IsQ0FBeEIsRUFBMkJDLEtBQTNCLENBQWlDQyxHQUZ4QztBQUdFLGFBQUssRUFBRSxHQUhUO0FBSUUsY0FBTSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1QkQ7O01BeEJRVixvQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvaXRlbXMvaXRlbXMtcGFnZS9JdGVtc1N1YkNhdGVnb3J5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHsgSXRlbXNTdWJDYXRlZ29yeVN0eWxlcyB9IGZyb20gJy4vSXRlbXNTdWJDYXRlZ29yeVN0eWxlcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbXNTdWJDYXRlZ29yeSh7IHN1YkNhdGVnb3J5LCB0aXRsZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPEl0ZW1zU3ViQ2F0ZWdvcnlTdHlsZXM+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiY2F0ZWdvcnkgXCI+e3N1YkNhdGVnb3J5LmNhdGVnb3J5X3RpdGxlfTwvaDE+XG4gICAgICA8U3ViQ2F0ZWdvcnlJdGVtc0xpc3Qgc3ViQ2F0ZWdvcnk9e3N1YkNhdGVnb3J5fSB0aXRsZT17dGl0bGV9IC8+XG4gICAgPC9JdGVtc1N1YkNhdGVnb3J5U3R5bGVzPlxuICApO1xufVxuXG5cbmZ1bmN0aW9uIFN1YkNhdGVnb3J5SXRlbXNMaXN0KHsgc3ViQ2F0ZWdvcnksIHRpdGxlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgaHJlZj17e1xuICAgICAgICBwYXRobmFtZTogJy9wcm9kdWN0cy9bcHJvZHVjdHNdL1twcm9kdWN0XScsXG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgcHJvZHVjdHM6IGAke3RpdGxlfWAsXG4gICAgICAgICAgcHJvZHVjdDogYCR7c3ViQ2F0ZWdvcnkuY2F0ZWdvcnlfdGl0bGVcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgLmpvaW4oJy0nKX1gLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8YT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgY2xhc3NOYW1lPSdzdWItaW1hZ2UnXG4gICAgICAgICAgc3JjPXtzdWJDYXRlZ29yeS5zaW5nbGVfaXRlbVswXS5pbWFnZS51cmx9XG4gICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgLz5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICk7XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/items/items-page/ItemsSubCategory.js\n");

/***/ })

})