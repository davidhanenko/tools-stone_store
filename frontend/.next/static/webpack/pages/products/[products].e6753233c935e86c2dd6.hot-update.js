webpackHotUpdate_N_E("pages/products/[products]",{

/***/ "./components/items/items-page/Items.js":
/*!**********************************************!*\
  !*** ./components/items/items-page/Items.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Items; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_menu_ItemsMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/menu/ItemsMenu */ \"./components/shared/menu/ItemsMenu.js\");\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var _ItemsCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ItemsCategory */ \"./components/items/items-page/ItemsCategory.js\");\n/* harmony import */ var _ItemsStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ItemsStyles */ \"./components/items/items-page/ItemsStyles.js\");\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/items/items-page/Items.js\";\n\n\n\n\nfunction Items(_ref) {\n  var itemsCategory = _ref.itemsCategory,\n      products = _ref.products;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ItemsStyles__WEBPACK_IMPORTED_MODULE_4__[\"ItemsStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"menu-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: \"main-title\",\n        children: \"Products\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shared_menu_ItemsMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        products: products\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(hamburger_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      hideOutline: false,\n      label: \"Show menu\",\n      toggled: isOpen,\n      toggle: setOpen\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), itemsCategory && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ItemsCategory__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      itemsCategory: itemsCategory.split(' ').join('_')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n_c = Items;\n\nvar _c;\n\n$RefreshReg$(_c, \"Items\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtcy9pdGVtcy1wYWdlL0l0ZW1zLmpzP2M5MzciXSwibmFtZXMiOlsiSXRlbXMiLCJpdGVtc0NhdGVnb3J5IiwicHJvZHVjdHMiLCJpc09wZW4iLCJzZXRPcGVuIiwic3BsaXQiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULE9BQTRDO0FBQUEsTUFBM0JDLGFBQTJCLFFBQTNCQSxhQUEyQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUN6RCxzQkFDRSxxRUFBQyx3REFBRDtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLDhEQUFEO0FBQVcsZ0JBQVEsRUFBRUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UscUVBQUMsdURBQUQ7QUFDRSxpQkFBVyxFQUFFLEtBRGY7QUFFRSxXQUFLLEVBQUMsV0FGUjtBQUdFLGFBQU8sRUFBRUMsTUFIWDtBQUlFLFlBQU0sRUFBRUM7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsRUFXR0gsYUFBYSxpQkFDWixxRUFBQyxzREFBRDtBQUFlLG1CQUFhLEVBQUVBLGFBQWEsQ0FBQ0ksS0FBZCxDQUFvQixHQUFwQixFQUF5QkMsSUFBekIsQ0FBOEIsR0FBOUI7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUJEO0tBbEJ1Qk4sSyIsImZpbGUiOiIuL2NvbXBvbmVudHMvaXRlbXMvaXRlbXMtcGFnZS9JdGVtcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJdGVtc01lbnUgZnJvbSAnLi4vLi4vc2hhcmVkL21lbnUvSXRlbXNNZW51JztcbmltcG9ydCBIYW1idXJnZXIgZnJvbSAnaGFtYnVyZ2VyLXJlYWN0JztcbmltcG9ydCBJdGVtc0NhdGVnb3J5IGZyb20gJy4vSXRlbXNDYXRlZ29yeSc7XG5pbXBvcnQgeyBJdGVtc1N0eWxlcyB9IGZyb20gJy4vSXRlbXNTdHlsZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtcyh7IGl0ZW1zQ2F0ZWdvcnksIHByb2R1Y3RzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8SXRlbXNTdHlsZXM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVudS1jb250YWluZXInPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSdtYWluLXRpdGxlJz5Qcm9kdWN0czwvaDI+XG4gICAgICAgIDxJdGVtc01lbnUgcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8SGFtYnVyZ2VyXG4gICAgICAgIGhpZGVPdXRsaW5lPXtmYWxzZX1cbiAgICAgICAgbGFiZWw9J1Nob3cgbWVudSdcbiAgICAgICAgdG9nZ2xlZD17aXNPcGVufVxuICAgICAgICB0b2dnbGU9e3NldE9wZW59XG4gICAgICAvPlxuICAgICAge2l0ZW1zQ2F0ZWdvcnkgJiYgKFxuICAgICAgICA8SXRlbXNDYXRlZ29yeSBpdGVtc0NhdGVnb3J5PXtpdGVtc0NhdGVnb3J5LnNwbGl0KCcgJykuam9pbignXycpfSAvPlxuICAgICAgKX1cbiAgICA8L0l0ZW1zU3R5bGVzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/items/items-page/Items.js\n");

/***/ }),

/***/ "./components/shared/sliders/SliderButtons.js":
false,

/***/ "./components/shared/sliders/items-slider/ItemsSlide.js":
false,

/***/ "./components/shared/sliders/items-slider/ItemsSlideStyles.js":
false,

/***/ "./components/shared/sliders/items-slider/ItemsSlider.js":
false,

/***/ "./components/shared/sliders/items-slider/ItemsSliderStyles.js":
false,

/***/ "./lib/windowDimensions.js":
false,

/***/ "./node_modules/embla-carousel/react.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false

})