webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Products/ProductsMainPage.js":
/*!*************************************************!*\
  !*** ./components/Products/ProductsMainPage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductsMainPage; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ProductsMainPageStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductsMainPageStyles */ \"./components/Products/ProductsMainPageStyles.js\");\n\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Products/ProductsMainPage.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  query PRODUCTS {\\n    products {\\n      id\\n      product_title\\n      product_categories {\\n        single_products {\\n          title\\n          description\\n          price\\n          image {\\n            url\\n          }\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar PRODUCTS = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_templateObject());\nvar IconStyles = {\n  width: '2em',\n  height: '2em'\n};\n\nfunction ProductMainPage(_ref) {\n  var _product$product_cate, _product$product_cate2, _product$product_cate3;\n\n  var product = _ref.product;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_ProductsMainPageStyles__WEBPACK_IMPORTED_MODULE_7__[\"ProductMainPageStyles\"], {\n    style: IconStyles,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n      children: product.product_title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex-item\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n        src: (_product$product_cate = product.product_categories[0]) === null || _product$product_cate === void 0 ? void 0 : (_product$product_cate2 = _product$product_cate.single_products[0]) === null || _product$product_cate2 === void 0 ? void 0 : (_product$product_cate3 = _product$product_cate2.image) === null || _product$product_cate3 === void 0 ? void 0 : _product$product_cate3.url,\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, this);\n}\n\n_c = ProductMainPage;\nfunction ProductsMainPage(_ref2) {\n  _s();\n\n  var _this = this;\n\n  Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2);\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])(PRODUCTS),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  console.log(data);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_ProductsMainPageStyles__WEBPACK_IMPORTED_MODULE_7__[\"ProductsMainPageStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n      children: \"Products\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_5__[\"MdKeyboardArrowLeft\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"products_main-page\",\n      children: data === null || data === void 0 ? void 0 : data.products.map(function (product) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ProductMainPage, {\n          product: product\n        }, product.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_5__[\"MdKeyboardArrowRight\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ProductsMainPage, \"eE+cqeCo2lkI//dPlCsO1rICVGU=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"]];\n});\n\n_c2 = ProductsMainPage;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ProductMainPage\");\n$RefreshReg$(_c2, \"ProductsMainPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0c01haW5QYWdlLmpzPzEwOWYiXSwibmFtZXMiOlsiUFJPRFVDVFMiLCJncWwiLCJJY29uU3R5bGVzIiwid2lkdGgiLCJoZWlnaHQiLCJQcm9kdWN0TWFpblBhZ2UiLCJwcm9kdWN0IiwicHJvZHVjdF90aXRsZSIsInByb2R1Y3RfY2F0ZWdvcmllcyIsInNpbmdsZV9wcm9kdWN0cyIsImltYWdlIiwidXJsIiwiUHJvZHVjdHNNYWluUGFnZSIsInVzZVF1ZXJ5IiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0cyIsIm1hcCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFLQSxJQUFNQSxRQUFRLEdBQUdDLDJEQUFILG1CQUFkO0FBbUJBLElBQU1DLFVBQVUsR0FBRztBQUNqQkMsT0FBSyxFQUFFLEtBRFU7QUFFakJDLFFBQU0sRUFBRTtBQUZTLENBQW5COztBQUtBLFNBQVNDLGVBQVQsT0FBc0M7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFDcEMsc0JBQ0UscUVBQUMsNkVBQUQ7QUFBdUIsU0FBSyxFQUFFSixVQUE5QjtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtJLE9BQU8sQ0FBQ0M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0U7QUFDRSxXQUFHLDJCQUFFRCxPQUFPLENBQUNFLGtCQUFSLENBQTJCLENBQTNCLENBQUYsb0ZBQUUsc0JBQStCQyxlQUEvQixDQUErQyxDQUEvQyxDQUFGLHFGQUFFLHVCQUFtREMsS0FBckQsMkRBQUUsdUJBQTBEQyxHQURqRTtBQUVFLFdBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDs7S0FaUU4sZTtBQWNNLFNBQVNPLGdCQUFULFFBQThCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1ZDLCtEQUFRLENBQUNiLFFBQUQsQ0FERTtBQUFBLE1BQ25DYyxJQURtQyxhQUNuQ0EsSUFEbUM7QUFBQSxNQUM3QkMsS0FENkIsYUFDN0JBLEtBRDZCO0FBQUEsTUFDdEJDLE9BRHNCLGFBQ3RCQSxPQURzQjs7QUFHM0NDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0FBRUEsc0JBQ0UscUVBQUMsOEVBQUQ7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSxnQkFDR0EsSUFESCxhQUNHQSxJQURILHVCQUNHQSxJQUFJLENBQUVLLFFBQU4sQ0FBZUMsR0FBZixDQUFtQixVQUFBZCxPQUFPO0FBQUEsNEJBQ3pCLHFFQUFDLGVBQUQ7QUFBa0MsaUJBQU8sRUFBRUE7QUFBM0MsV0FBc0JBLE9BQU8sQ0FBQ2UsRUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEeUI7QUFBQSxPQUExQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQVFFLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztHQWpCdUJULGdCO1VBQ1dDLHVEOzs7TUFEWEQsZ0IiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RzTWFpblBhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBNZEtleWJvYXJkQXJyb3dMZWZ0LCBNZEtleWJvYXJkQXJyb3dSaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcblxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5pbXBvcnQge1xuICBQcm9kdWN0TWFpblBhZ2VTdHlsZXMsXG4gIFByb2R1Y3RzTWFpblBhZ2VTdHlsZXMsXG59IGZyb20gJy4vUHJvZHVjdHNNYWluUGFnZVN0eWxlcyc7XG5cbmNvbnN0IFBST0RVQ1RTID0gZ3FsYFxuICBxdWVyeSBQUk9EVUNUUyB7XG4gICAgcHJvZHVjdHMge1xuICAgICAgaWRcbiAgICAgIHByb2R1Y3RfdGl0bGVcbiAgICAgIHByb2R1Y3RfY2F0ZWdvcmllcyB7XG4gICAgICAgIHNpbmdsZV9wcm9kdWN0cyB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIHByaWNlXG4gICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgdXJsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBJY29uU3R5bGVzID0ge1xuICB3aWR0aDogJzJlbScsXG4gIGhlaWdodDogJzJlbScsXG59O1xuXG5mdW5jdGlvbiBQcm9kdWN0TWFpblBhZ2UoeyBwcm9kdWN0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvZHVjdE1haW5QYWdlU3R5bGVzIHN0eWxlPXtJY29uU3R5bGVzfT5cbiAgICAgIDxoMz57cHJvZHVjdC5wcm9kdWN0X3RpdGxlfTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1pdGVtJz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17cHJvZHVjdC5wcm9kdWN0X2NhdGVnb3JpZXNbMF0/LnNpbmdsZV9wcm9kdWN0c1swXT8uaW1hZ2U/LnVybH1cbiAgICAgICAgICBhbHQ9JydcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUHJvZHVjdE1haW5QYWdlU3R5bGVzPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0c01haW5QYWdlKHt9KSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFBST0RVQ1RTKTtcblxuICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxQcm9kdWN0c01haW5QYWdlU3R5bGVzPlxuICAgICAgPGgyPlByb2R1Y3RzPC9oMj5cbiAgICAgIDxNZEtleWJvYXJkQXJyb3dMZWZ0IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdHNfbWFpbi1wYWdlJz5cbiAgICAgICAge2RhdGE/LnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcbiAgICAgICAgICA8UHJvZHVjdE1haW5QYWdlIGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNZEtleWJvYXJkQXJyb3dSaWdodCAvPlxuICAgIDwvUHJvZHVjdHNNYWluUGFnZVN0eWxlcz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Products/ProductsMainPage.js\n");

/***/ })

})