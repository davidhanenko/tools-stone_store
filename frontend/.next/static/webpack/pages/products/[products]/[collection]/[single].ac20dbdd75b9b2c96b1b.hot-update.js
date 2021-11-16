webpackHotUpdate_N_E("pages/products/[products]/[collection]/[single]",{

/***/ "./components/items/items-page/single-item/SingleItem.js":
/*!***************************************************************!*\
  !*** ./components/items/items-page/single-item/SingleItem.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SingleItem; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_capitalizeStr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/capitalizeStr */ \"./helpers/capitalizeStr.js\");\n/* harmony import */ var _SingleItemStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SingleItemStyles */ \"./components/items/items-page/single-item/SingleItemStyles.js\");\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/items/items-page/single-item/SingleItem.js\";\n\n\n\n\nfunction SingleItem(_ref) {\n  var singleItem = _ref.singleItem;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SingleItemStyles__WEBPACK_IMPORTED_MODULE_4__[\"SingleItemStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [Object(_helpers_capitalizeStr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(singleItem.item_title), \" - A2Z\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"item-image-container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        src: singleItem.image[0].url,\n        width: 400,\n        height: 400,\n        layout: \"responsive\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"item-description-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n        className: \"single-item-title\",\n        children: singleItem.item_title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h6\", {\n        className: \"single-item-price\",\n        children: [\"$\", singleItem.price]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"single-item-description\",\n        children: singleItem.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n_c = SingleItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"SingleItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtcy9pdGVtcy1wYWdlL3NpbmdsZS1pdGVtL1NpbmdsZUl0ZW0uanM/MTk3NCJdLCJuYW1lcyI6WyJTaW5nbGVJdGVtIiwic2luZ2xlSXRlbSIsImNhcGl0YWxpemVTdHIiLCJpdGVtX3RpdGxlIiwiaW1hZ2UiLCJ1cmwiLCJwcmljZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVlLFNBQVNBLFVBQVQsT0FBb0M7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7QUFDakQsc0JBQ0UscUVBQUMsa0VBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUEsbUJBQVFDLHNFQUFhLENBQUNELFVBQVUsQ0FBQ0UsVUFBWixDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFBLDZCQUNFLHFFQUFDLGlEQUFEO0FBQ0UsV0FBRyxFQUFFRixVQUFVLENBQUNHLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0JDLEdBRDNCO0FBRUUsYUFBSyxFQUFFLEdBRlQ7QUFHRSxjQUFNLEVBQUUsR0FIVjtBQUlFLGNBQU0sRUFBQztBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFZRTtBQUFLLGVBQVMsRUFBQyw0QkFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxtQkFBZDtBQUFBLGtCQUFtQ0osVUFBVSxDQUFDRTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFJLGlCQUFTLEVBQUMsbUJBQWQ7QUFBQSx3QkFBb0NGLFVBQVUsQ0FBQ0ssS0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFHLGlCQUFTLEVBQUMseUJBQWI7QUFBQSxrQkFBd0NMLFVBQVUsQ0FBQ007QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JEO0tBckJ1QlAsVSIsImZpbGUiOiIuL2NvbXBvbmVudHMvaXRlbXMvaXRlbXMtcGFnZS9zaW5nbGUtaXRlbS9TaW5nbGVJdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IGNhcGl0YWxpemVTdHIgZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9jYXBpdGFsaXplU3RyJztcblxuaW1wb3J0IHsgU2luZ2xlSXRlbVN0eWxlcyB9IGZyb20gJy4vU2luZ2xlSXRlbVN0eWxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZUl0ZW0oeyBzaW5nbGVJdGVtIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8U2luZ2xlSXRlbVN0eWxlcz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2NhcGl0YWxpemVTdHIoc2luZ2xlSXRlbS5pdGVtX3RpdGxlKX0gLSBBMlo8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW0taW1hZ2UtY29udGFpbmVyJz5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtzaW5nbGVJdGVtLmltYWdlWzBdLnVybH1cbiAgICAgICAgICB3aWR0aD17NDAwfVxuICAgICAgICAgIGhlaWdodD17NDAwfVxuICAgICAgICAgIGxheW91dD0ncmVzcG9uc2l2ZSdcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW0tZGVzY3JpcHRpb24tY29udGFpbmVyJz5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT0nc2luZ2xlLWl0ZW0tdGl0bGUnPntzaW5nbGVJdGVtLml0ZW1fdGl0bGV9PC9oNT5cbiAgICAgICAgPGg2IGNsYXNzTmFtZT0nc2luZ2xlLWl0ZW0tcHJpY2UnPiR7c2luZ2xlSXRlbS5wcmljZX08L2g2PlxuICAgICAgICA8cCBjbGFzc05hbWU9J3NpbmdsZS1pdGVtLWRlc2NyaXB0aW9uJz57c2luZ2xlSXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L1NpbmdsZUl0ZW1TdHlsZXM+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/items/items-page/single-item/SingleItem.js\n");

/***/ })

})