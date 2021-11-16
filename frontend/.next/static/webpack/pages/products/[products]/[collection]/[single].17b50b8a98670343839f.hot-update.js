webpackHotUpdate_N_E("pages/products/[products]/[collection]/[single]",{

/***/ "./components/items/items-page/single-item/SingleItem.js":
/*!***************************************************************!*\
  !*** ./components/items/items-page/single-item/SingleItem.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SingleItem; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_capitalizeStr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/capitalizeStr */ \"./helpers/capitalizeStr.js\");\n/* harmony import */ var _SingleItemStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SingleItemStyles */ \"./components/items/items-page/single-item/SingleItemStyles.js\");\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/items/items-page/single-item/SingleItem.js\";\n\n\n\n\nfunction SingleItem(_ref) {\n  var singleItem = _ref.singleItem;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SingleItemStyles__WEBPACK_IMPORTED_MODULE_4__[\"SingleItemStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [Object(_helpers_capitalizeStr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(singleItem.item_title), \" - A2Z\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"item-image-container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        src: singleItem.image[0].url,\n        width: 400,\n        height: 400,\n        layout: \"responsive\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"item-description-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n        className: \"single-item-title\",\n        children: singleItem.item_title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h6\", {\n        children: [\"$\", singleItem.price]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n_c = SingleItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"SingleItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtcy9pdGVtcy1wYWdlL3NpbmdsZS1pdGVtL1NpbmdsZUl0ZW0uanM/MTk3NCJdLCJuYW1lcyI6WyJTaW5nbGVJdGVtIiwic2luZ2xlSXRlbSIsImNhcGl0YWxpemVTdHIiLCJpdGVtX3RpdGxlIiwiaW1hZ2UiLCJ1cmwiLCJwcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFZSxTQUFTQSxVQUFULE9BQW9DO0FBQUEsTUFBZEMsVUFBYyxRQUFkQSxVQUFjO0FBQ2pELHNCQUNFLHFFQUFDLGtFQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBLG1CQUFRQyxzRUFBYSxDQUFDRCxVQUFVLENBQUNFLFVBQVosQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBSyxlQUFTLEVBQUMsc0JBQWY7QUFBQSw2QkFDRSxxRUFBQyxpREFBRDtBQUNFLFdBQUcsRUFBRUYsVUFBVSxDQUFDRyxLQUFYLENBQWlCLENBQWpCLEVBQW9CQyxHQUQzQjtBQUVFLGFBQUssRUFBRSxHQUZUO0FBR0UsY0FBTSxFQUFFLEdBSFY7QUFJRSxjQUFNLEVBQUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBWUU7QUFBSyxlQUFTLEVBQUMsNEJBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsbUJBQWQ7QUFBQSxrQkFBbUNKLFVBQVUsQ0FBQ0U7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSx3QkFBTUYsVUFBVSxDQUFDSyxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDtLQXBCdUJOLFUiLCJmaWxlIjoiLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW1zLXBhZ2Uvc2luZ2xlLWl0ZW0vU2luZ2xlSXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCBjYXBpdGFsaXplU3RyIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvY2FwaXRhbGl6ZVN0cic7XG5cbmltcG9ydCB7IFNpbmdsZUl0ZW1TdHlsZXMgfSBmcm9tICcuL1NpbmdsZUl0ZW1TdHlsZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5nbGVJdGVtKHsgc2luZ2xlSXRlbSB9KSB7XG4gIHJldHVybiAoXG4gICAgPFNpbmdsZUl0ZW1TdHlsZXM+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntjYXBpdGFsaXplU3RyKHNpbmdsZUl0ZW0uaXRlbV90aXRsZSl9IC0gQTJaPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtLWltYWdlLWNvbnRhaW5lcic+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17c2luZ2xlSXRlbS5pbWFnZVswXS51cmx9XG4gICAgICAgICAgd2lkdGg9ezQwMH1cbiAgICAgICAgICBoZWlnaHQ9ezQwMH1cbiAgICAgICAgICBsYXlvdXQ9J3Jlc3BvbnNpdmUnXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lcic+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9J3NpbmdsZS1pdGVtLXRpdGxlJz57c2luZ2xlSXRlbS5pdGVtX3RpdGxlfTwvaDU+XG4gICAgICAgIDxoNj4ke3NpbmdsZUl0ZW0ucHJpY2V9PC9oNj5cbiAgICAgIDwvZGl2PlxuICAgIDwvU2luZ2xlSXRlbVN0eWxlcz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/items/items-page/single-item/SingleItem.js\n");

/***/ })

})