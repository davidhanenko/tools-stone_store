webpackHotUpdate_N_E("pages/products/[products]",{

/***/ "./components/layouts/GlobalStyles.js":
false,

/***/ "./components/layouts/MainLayout.js":
false,

/***/ "./components/layouts/MenuLayout.js":
false,

/***/ "./components/layouts/partials/Header.js":
false,

/***/ "./components/layouts/partials/HeaderStyles.js":
false,

/***/ "./components/menu/ItemsMenu.js":
false,

/***/ "./components/menu/ItemsMenuStyles.js":
false,

/***/ "./components/menu/MenuLink.js":
false,

/***/ "./components/menu/MenuLinkStyles.js":
false,

/***/ "./components/navbar/Nav.js":
false,

/***/ "./components/navbar/NavDropdown.js":
false,

/***/ "./components/navbar/NavDropdownStyles.js":
false,

/***/ "./components/navbar/NavStyles.js":
false,

/***/ "./components/navbar/Search.js":
false,

/***/ "./components/navbar/SearchStyles.js":
false,

/***/ "./lib/menuState.js":
false,

/***/ "./lib/navState.js":
false,

/***/ "./lib/useScroll.js":
false,

/***/ "./lib/windowDimensions.js":
false,

/***/ "./node_modules/hamburger-react/dist-esm/Burger.js":
false,

/***/ "./node_modules/hamburger-react/dist-esm/Cross.js":
false,

/***/ "./node_modules/hamburger-react/dist-esm/Divide.js":
false,

/***/ "./node_modules/hamburger-react/dist-esm/Fade.js":
false,

/***/ "./node_modules/hamburger-react/dist-esm/Pivot.js":
false,

/***/ "./node_modules/hamburger-react/dist-esm/Rotate.js":
false,

/***/ "./node_modules/hamburger-react/dist-esm/Slant.js":
false,

/***/ "./node_modules/hamburger-react/dist-esm/Sling.js":
false,

/***/ "./node_modules/hamburger-react/dist-esm/Spin.js":
false,

/***/ "./node_modules/hamburger-react/dist-esm/Spiral.js":
false,

/***/ "./node_modules/hamburger-react/dist-esm/Squash.js":
false,

/***/ "./node_modules/hamburger-react/dist-esm/Squeeze.js":
false,

/***/ "./node_modules/hamburger-react/dist-esm/Tilt.js":
false,

/***/ "./node_modules/hamburger-react/dist-esm/Turn.js":
false,

/***/ "./node_modules/hamburger-react/dist-esm/Twirl.js":
false,

/***/ "./node_modules/hamburger-react/dist-esm/index.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react-icons/lib/esm/iconBase.js":
false,

/***/ "./node_modules/react-icons/lib/esm/iconContext.js":
false,

/***/ "./node_modules/react-icons/lib/esm/iconsManifest.js":
false,

/***/ "./node_modules/react-icons/lib/esm/index.js":
false,

/***/ "./node_modules/react-icons/md/index.esm.js":
false,

/***/ "./pages/products/[products]/index.js":
/*!********************************************!*\
  !*** ./pages/products/[products]/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductsCategoryPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_items_items_page_Items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/items/items-page/Items */ \"./components/items/items-page/Items.js\");\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/pages/products/[products]/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction ProductsCategoryPage(_ref) {\n  _s();\n\n  var query = _ref.query;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(ALL_PRODUCTS),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: [\"Error: \", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 21\n  }, this); // const products = data.products;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_items_items_page_Items__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    itemsCategory: query.products\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 10\n  }, this);\n}\n\n_s(ProductsCategoryPage, \"eE+cqeCo2lkI//dPlCsO1rICVGU=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"]];\n});\n\n_c = ProductsCategoryPage;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsCategoryPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvW3Byb2R1Y3RzXS9pbmRleC5qcz9mMGZlIl0sIm5hbWVzIjpbIlByb2R1Y3RzQ2F0ZWdvcnlQYWdlIiwicXVlcnkiLCJ1c2VRdWVyeSIsIkFMTF9QUk9EVUNUUyIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwicHJvZHVjdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUllLFNBQVNBLG9CQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGtCQUNyQkMsK0RBQVEsQ0FBQ0MsWUFBRCxDQURhO0FBQUEsTUFDOUNDLElBRDhDLGFBQzlDQSxJQUQ4QztBQUFBLE1BQ3hDQyxLQUR3QyxhQUN4Q0EsS0FEd0M7QUFBQSxNQUNqQ0MsT0FEaUMsYUFDakNBLE9BRGlDOztBQUd0RCxNQUFJQSxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlELEtBQUosRUFBVyxvQkFBTztBQUFBLDBCQUFXQSxLQUFLLENBQUNFLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQLENBSjJDLENBTXREOztBQUVBLHNCQUFPLHFFQUFDLDBFQUFEO0FBQU8saUJBQWEsRUFBRU4sS0FBSyxDQUFDTztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7R0FUdUJSLG9CO1VBQ1dFLHVEOzs7S0FEWEYsb0I7QUFTdkIiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9bcHJvZHVjdHNdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuaW1wb3J0IEl0ZW1zIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaXRlbXMvaXRlbXMtcGFnZS9JdGVtcyc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0c0NhdGVnb3J5UGFnZSh7IHF1ZXJ5IH0pIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoQUxMX1BST0RVQ1RTKTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcblxuICAvLyBjb25zdCBwcm9kdWN0cyA9IGRhdGEucHJvZHVjdHM7XG5cbiAgcmV0dXJuIDxJdGVtcyBpdGVtc0NhdGVnb3J5PXtxdWVyeS5wcm9kdWN0c30gLz47XG59O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/[products]/index.js\n");

/***/ })

})