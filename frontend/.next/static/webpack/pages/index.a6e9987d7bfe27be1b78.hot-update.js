webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Products/ProductCategories.js":
/*!**************************************************!*\
  !*** ./components/Products/ProductCategories.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductsCategories; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_img_img_2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/img/img_2.png */ \"./public/img/img_2.png\");\n/* harmony import */ var _public_img_img_2_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_img_2_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Products/ProductCategories.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  query PRODUCT_CATEGORY {\\n    products {\\n      product_title\\n      product_categories {\\n        single_products {\\n          title\\n          description\\n          price \\n          image {\\n            url\\n          }\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar PRODUCT_CATEGORY = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_templateObject());\nfunction ProductsCategories(_ref) {\n  _s();\n\n  var _this = this;\n\n  Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref);\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])(PRODUCT_CATEGORY),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  console.log(data);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      children: \"Products\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), data === null || data === void 0 ? void 0 : data.products.map(function (c) {\n      var _c$product_categories, _c$product_categories2, _c$product_categories3, _c$product_categories4, _c$product_categories5, _c$product_categories6, _c$product_categories7, _c$product_categories8, _c$product_categories9;\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n          children: c.product_title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n          children: c === null || c === void 0 ? void 0 : (_c$product_categories = c.product_categories[1]) === null || _c$product_categories === void 0 ? void 0 : (_c$product_categories2 = _c$product_categories.single_products[0]) === null || _c$product_categories2 === void 0 ? void 0 : _c$product_categories2.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n          children: [\"$\", c === null || c === void 0 ? void 0 : (_c$product_categories3 = c.product_categories[1]) === null || _c$product_categories3 === void 0 ? void 0 : (_c$product_categories4 = _c$product_categories3.single_products[0]) === null || _c$product_categories4 === void 0 ? void 0 : _c$product_categories4.price]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n          src: c === null || c === void 0 ? void 0 : (_c$product_categories5 = c.product_categories[1]) === null || _c$product_categories5 === void 0 ? void 0 : (_c$product_categories6 = _c$product_categories5.single_products[0]) === null || _c$product_categories6 === void 0 ? void 0 : (_c$product_categories7 = _c$product_categories6.image) === null || _c$product_categories7 === void 0 ? void 0 : _c$product_categories7.url,\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n          children: c === null || c === void 0 ? void 0 : (_c$product_categories8 = c.product_categories[1]) === null || _c$product_categories8 === void 0 ? void 0 : (_c$product_categories9 = _c$product_categories8.single_products[0]) === null || _c$product_categories9 === void 0 ? void 0 : _c$product_categories9.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this)]\n      }, c.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this);\n    })]\n  }, void 0, true);\n}\n\n_s(ProductsCategories, \"eE+cqeCo2lkI//dPlCsO1rICVGU=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"]];\n});\n\n_c = ProductsCategories;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsCategories\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0Q2F0ZWdvcmllcy5qcz8yZTdlIl0sIm5hbWVzIjpbIlBST0RVQ1RfQ0FURUdPUlkiLCJncWwiLCJQcm9kdWN0c0NhdGVnb3JpZXMiLCJ1c2VRdWVyeSIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdHMiLCJtYXAiLCJjIiwicHJvZHVjdF90aXRsZSIsInByb2R1Y3RfY2F0ZWdvcmllcyIsInNpbmdsZV9wcm9kdWN0cyIsInRpdGxlIiwicHJpY2UiLCJpbWFnZSIsInVybCIsImRlc2NyaXB0aW9uIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGdCQUFnQixHQUFHQywyREFBSCxtQkFBdEI7QUFrQmUsU0FBU0Msa0JBQVQsT0FBZ0M7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxrQkFDWkMsK0RBQVEsQ0FBQ0gsZ0JBQUQsQ0FESTtBQUFBLE1BQ3JDSSxJQURxQyxhQUNyQ0EsSUFEcUM7QUFBQSxNQUMvQkMsS0FEK0IsYUFDL0JBLEtBRCtCO0FBQUEsTUFDeEJDLE9BRHdCLGFBQ3hCQSxPQUR3Qjs7QUFHN0NDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdBLElBRkgsYUFFR0EsSUFGSCx1QkFFR0EsSUFBSSxDQUFFSyxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQUMsQ0FBQztBQUFBOztBQUFBLDBCQUNuQjtBQUFBLGdDQUNFO0FBQUEsb0JBQUtBLENBQUMsQ0FBQ0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBR0U7QUFBQSxvQkFBS0QsQ0FBTCxhQUFLQSxDQUFMLGdEQUFLQSxDQUFDLENBQUVFLGtCQUFILENBQXNCLENBQXRCLENBQUwsb0ZBQUssc0JBQTBCQyxlQUExQixDQUEwQyxDQUExQyxDQUFMLDJEQUFLLHVCQUE4Q0M7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUlFO0FBQUEsMEJBQU1KLENBQU4sYUFBTUEsQ0FBTixpREFBTUEsQ0FBQyxDQUFFRSxrQkFBSCxDQUFzQixDQUF0QixDQUFOLHFGQUFNLHVCQUEwQkMsZUFBMUIsQ0FBMEMsQ0FBMUMsQ0FBTiwyREFBTSx1QkFBOENFLEtBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQUtFO0FBQ0UsYUFBRyxFQUFFTCxDQUFGLGFBQUVBLENBQUYsaURBQUVBLENBQUMsQ0FBRUUsa0JBQUgsQ0FBc0IsQ0FBdEIsQ0FBRixxRkFBRSx1QkFBMEJDLGVBQTFCLENBQTBDLENBQTFDLENBQUYscUZBQUUsdUJBQThDRyxLQUFoRCwyREFBRSx1QkFBcURDLEdBRDVEO0FBRUUsYUFBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQVNFO0FBQUEsb0JBQUtQLENBQUwsYUFBS0EsQ0FBTCxpREFBS0EsQ0FBQyxDQUFFRSxrQkFBSCxDQUFzQixDQUF0QixDQUFMLHFGQUFLLHVCQUEwQkMsZUFBMUIsQ0FBMEMsQ0FBMUMsQ0FBTCwyREFBSyx1QkFBOENLO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEY7QUFBQSxTQUFVUixDQUFDLENBQUNTLEVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURtQjtBQUFBLEtBQXBCLENBRkg7QUFBQSxrQkFERjtBQTBCRDs7R0EvQnVCbEIsa0I7VUFDV0MsdUQ7OztLQURYRCxrQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdENhdGVnb3JpZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBpbWcgZnJvbSAnLi4vLi4vcHVibGljL2ltZy9pbWdfMi5wbmcnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFBST0RVQ1RfQ0FURUdPUlkgPSBncWxgXG4gIHF1ZXJ5IFBST0RVQ1RfQ0FURUdPUlkge1xuICAgIHByb2R1Y3RzIHtcbiAgICAgIHByb2R1Y3RfdGl0bGVcbiAgICAgIHByb2R1Y3RfY2F0ZWdvcmllcyB7XG4gICAgICAgIHNpbmdsZV9wcm9kdWN0cyB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIHByaWNlIFxuICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgIHVybFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHNDYXRlZ29yaWVzKHt9KSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFBST0RVQ1RfQ0FURUdPUlkpO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5Qcm9kdWN0czwvaDE+XG4gICAgICB7ZGF0YT8ucHJvZHVjdHMubWFwKGMgPT4gKFxuICAgICAgICA8ZGl2IGtleT17Yy5pZH0+XG4gICAgICAgICAgPGgyPntjLnByb2R1Y3RfdGl0bGV9PC9oMj5cblxuICAgICAgICAgIDxoMz57Yz8ucHJvZHVjdF9jYXRlZ29yaWVzWzFdPy5zaW5nbGVfcHJvZHVjdHNbMF0/LnRpdGxlfTwvaDM+XG4gICAgICAgICAgPGgzPiR7Yz8ucHJvZHVjdF9jYXRlZ29yaWVzWzFdPy5zaW5nbGVfcHJvZHVjdHNbMF0/LnByaWNlfTwvaDM+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtjPy5wcm9kdWN0X2NhdGVnb3JpZXNbMV0/LnNpbmdsZV9wcm9kdWN0c1swXT8uaW1hZ2U/LnVybH1cbiAgICAgICAgICAgIGFsdD0nJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPGgzPntjPy5wcm9kdWN0X2NhdGVnb3JpZXNbMV0/LnNpbmdsZV9wcm9kdWN0c1swXT8uZGVzY3JpcHRpb259PC9oMz5cblxuICAgICAgICAgIHsvKiA8SW1hZ2VcbiAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgIGM/LnByb2R1Y3RzX3N1Yl9jYXRlZ29yaWVzWzFdPy5zaW5nbGVfcHJvZHVjdHNbMV0/LmltYWdlWzBdPy51cmxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Products/ProductCategories.js\n");

/***/ })

})