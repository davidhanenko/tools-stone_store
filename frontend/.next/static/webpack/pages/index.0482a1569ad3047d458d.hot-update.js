webpackHotUpdate_N_E("pages/index",{

/***/ "./components/products/ProductsMainPage.js":
/*!*************************************************!*\
  !*** ./components/products/ProductsMainPage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductsMainPage; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _sliders_services_slider_ServicesSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sliders/services-slider/ServicesSlider */ \"./components/sliders/services-slider/ServicesSlider.js\");\n/* harmony import */ var _ProductsMainPageStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductsMainPageStyles */ \"./components/products/ProductsMainPageStyles.js\");\n\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/products/ProductsMainPage.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  query PRODUCTS {\\n    products {\\n      id\\n      title: product_title\\n      category: product_categories {\\n        single: single_products {\\n          image {\\n            url\\n          }\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar PRODUCTS = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_templateObject());\nfunction ProductsMainPage(_ref) {\n  _s();\n\n  var _data$products;\n\n  Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref);\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])(PRODUCTS),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  console.log(data);\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n    children: [\"Error: \", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 21\n  }, this);\n  var SLIDE_COUNT = data === null || data === void 0 ? void 0 : (_data$products = data.products) === null || _data$products === void 0 ? void 0 : _data$products.length;\n  var slides = Array.from(Array(SLIDE_COUNT).keys()); // func from Embla Carousel docs\n\n  var mediaByIndex = function mediaByIndex(index) {\n    return data === null || data === void 0 ? void 0 : data.products[index % (data === null || data === void 0 ? void 0 : data.products.length)];\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_ProductsMainPageStyles__WEBPACK_IMPORTED_MODULE_6__[\"ProductsMainPageStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n      children: \"Products\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_sliders_services_slider_ServicesSlider__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      slides: slides,\n      mediaByIndex: mediaByIndex\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ProductsMainPage, \"eE+cqeCo2lkI//dPlCsO1rICVGU=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"]];\n});\n\n_c = ProductsMainPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsMainPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0c01haW5QYWdlLmpzP2Y1NjIiXSwibmFtZXMiOlsiUFJPRFVDVFMiLCJncWwiLCJQcm9kdWN0c01haW5QYWdlIiwidXNlUXVlcnkiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJTTElERV9DT1VOVCIsInByb2R1Y3RzIiwibGVuZ3RoIiwic2xpZGVzIiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsIm1lZGlhQnlJbmRleCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBLElBQU1BLFFBQVEsR0FBR0MsMkRBQUgsbUJBQWQ7QUFnQmUsU0FBU0MsZ0JBQVQsT0FBOEI7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxrQkFDVkMsK0RBQVEsQ0FBQ0gsUUFBRCxDQURFO0FBQUEsTUFDbkNJLElBRG1DLGFBQ25DQSxJQURtQztBQUFBLE1BQzdCQyxLQUQ2QixhQUM3QkEsS0FENkI7QUFBQSxNQUN0QkMsT0FEc0IsYUFDdEJBLE9BRHNCOztBQUU3Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7QUFDRSxNQUFJRSxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlELEtBQUosRUFBVyxvQkFBTztBQUFBLDBCQUFXQSxLQUFLLENBQUNJLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBRVgsTUFBTUMsV0FBVyxHQUFHTixJQUFILGFBQUdBLElBQUgseUNBQUdBLElBQUksQ0FBRU8sUUFBVCxtREFBRyxlQUFnQkMsTUFBcEM7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXRCxLQUFLLENBQUNKLFdBQUQsQ0FBTCxDQUFtQk0sSUFBbkIsRUFBWCxDQUFmLENBUjJDLENBVTNDOztBQUNBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLEtBQUs7QUFBQSxXQUFJZCxJQUFKLGFBQUlBLElBQUosdUJBQUlBLElBQUksQ0FBRU8sUUFBTixDQUFlTyxLQUFLLElBQUdkLElBQUgsYUFBR0EsSUFBSCx1QkFBR0EsSUFBSSxDQUFFTyxRQUFOLENBQWVDLE1BQWxCLENBQXBCLENBQUo7QUFBQSxHQUExQjs7QUFFQSxzQkFDRSxxRUFBQyw4RUFBRDtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFHRSxxRUFBQywrRUFBRDtBQUFnQixZQUFNLEVBQUVDLE1BQXhCO0FBQWdDLGtCQUFZLEVBQUVJO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztHQXBCdUJmLGdCO1VBQ1dDLHVEOzs7S0FEWEQsZ0IiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RzTWFpblBhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5pbXBvcnQgU2VydmljZXNTbGlkZXIgZnJvbSAnLi4vc2xpZGVycy9zZXJ2aWNlcy1zbGlkZXIvU2VydmljZXNTbGlkZXInO1xuXG5pbXBvcnQgeyBQcm9kdWN0c01haW5QYWdlU3R5bGVzIH0gZnJvbSAnLi9Qcm9kdWN0c01haW5QYWdlU3R5bGVzJztcblxuY29uc3QgUFJPRFVDVFMgPSBncWxgXG4gIHF1ZXJ5IFBST0RVQ1RTIHtcbiAgICBwcm9kdWN0cyB7XG4gICAgICBpZFxuICAgICAgdGl0bGU6IHByb2R1Y3RfdGl0bGVcbiAgICAgIGNhdGVnb3J5OiBwcm9kdWN0X2NhdGVnb3JpZXMge1xuICAgICAgICBzaW5nbGU6IHNpbmdsZV9wcm9kdWN0cyB7XG4gICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgdXJsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0c01haW5QYWdlKHt9KSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFBST0RVQ1RTKTtcbmNvbnNvbGUubG9nKGRhdGEpO1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcblxuICBjb25zdCBTTElERV9DT1VOVCA9IGRhdGE/LnByb2R1Y3RzPy5sZW5ndGg7XG5cbiAgY29uc3Qgc2xpZGVzID0gQXJyYXkuZnJvbShBcnJheShTTElERV9DT1VOVCkua2V5cygpKTtcblxuICAvLyBmdW5jIGZyb20gRW1ibGEgQ2Fyb3VzZWwgZG9jc1xuICBjb25zdCBtZWRpYUJ5SW5kZXggPSBpbmRleCA9PiBkYXRhPy5wcm9kdWN0c1tpbmRleCAlIGRhdGE/LnByb2R1Y3RzLmxlbmd0aF07XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvZHVjdHNNYWluUGFnZVN0eWxlcz5cbiAgICAgIDxoMj5Qcm9kdWN0czwvaDI+XG5cbiAgICAgIDxTZXJ2aWNlc1NsaWRlciBzbGlkZXM9e3NsaWRlc30gbWVkaWFCeUluZGV4PXttZWRpYUJ5SW5kZXh9IC8+XG4gICAgPC9Qcm9kdWN0c01haW5QYWdlU3R5bGVzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/products/ProductsMainPage.js\n");

/***/ })

})