webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Products/ProductsMainPage.js":
/*!*************************************************!*\
  !*** ./components/Products/ProductsMainPage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductsMainPage; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ProductsMainPageStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProductsMainPageStyles */ \"./components/Products/ProductsMainPageStyles.js\");\n\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Products/ProductsMainPage.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  query PRODUCTS {\\n    products {\\n      id\\n      product_title\\n      product_categories {\\n        single_products {\\n          title\\n          description\\n          price\\n          image {\\n            url\\n          }\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar PRODUCTS = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_templateObject());\n\nfunction ProductMainPage(_ref) {\n  var _product$product_cate, _product$product_cate2, _product$product_cate3;\n\n  var product = _ref.product;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_ProductsMainPageStyles__WEBPACK_IMPORTED_MODULE_8__[\"ProductMainPageStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n      children: product.product_title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex-item\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        className: \"product-image\",\n        src: (_product$product_cate = product.product_categories[0]) === null || _product$product_cate === void 0 ? void 0 : (_product$product_cate2 = _product$product_cate.single_products[0]) === null || _product$product_cate2 === void 0 ? void 0 : (_product$product_cate3 = _product$product_cate2.image) === null || _product$product_cate3 === void 0 ? void 0 : _product$product_cate3.url,\n        objectFit: \"contain\",\n        layout: \"fill\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, this);\n}\n\n_c = ProductMainPage;\nfunction ProductsMainPage(_ref2) {\n  _s();\n\n  var _this = this;\n\n  Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2);\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])(PRODUCTS),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading; // console.log(data);\n  // horizontal scroll for products\n\n\n  var scrollRef = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])();\n\n  var handleHorizontalScroll = function handleHorizontalScroll(direction) {\n    if (direction === 'left') {\n      scrollRef ? scrollRef.current.scrollLeft -= 300 : null;\n    } else {\n      scrollRef ? scrollRef.current.scrollLeft += 300 : null;\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_ProductsMainPageStyles__WEBPACK_IMPORTED_MODULE_8__[\"ProductsMainPageStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n      children: \"Products\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n      className: \"icon-arrow-left\",\n      onClick: function onClick() {\n        return handleHorizontalScroll('left');\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_6__[\"MdKeyboardArrowLeft\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"products_main-page\",\n      ref: scrollRef,\n      children: data === null || data === void 0 ? void 0 : data.products.map(function (product) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ProductMainPage, {\n          product: product\n        }, product.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n      className: \"icon-arrow-right\",\n      onClick: function onClick() {\n        return handleHorizontalScroll('right');\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_6__[\"MdKeyboardArrowRight\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ProductsMainPage, \"M/03cIiJ7u5BdN2pEWNGG/3N9vc=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"]];\n});\n\n_c2 = ProductsMainPage;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ProductMainPage\");\n$RefreshReg$(_c2, \"ProductsMainPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0c01haW5QYWdlLmpzPzEwOWYiXSwibmFtZXMiOlsiUFJPRFVDVFMiLCJncWwiLCJQcm9kdWN0TWFpblBhZ2UiLCJwcm9kdWN0IiwicHJvZHVjdF90aXRsZSIsInByb2R1Y3RfY2F0ZWdvcmllcyIsInNpbmdsZV9wcm9kdWN0cyIsImltYWdlIiwidXJsIiwiUHJvZHVjdHNNYWluUGFnZSIsInVzZVF1ZXJ5IiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsInNjcm9sbFJlZiIsInVzZVJlZiIsImhhbmRsZUhvcml6b250YWxTY3JvbGwiLCJkaXJlY3Rpb24iLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsInByb2R1Y3RzIiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFLQSxJQUFNQSxRQUFRLEdBQUdDLDJEQUFILG1CQUFkOztBQW1CQSxTQUFTQyxlQUFULE9BQXNDO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQ3BDLHNCQUNFLHFFQUFDLDZFQUFEO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0EsT0FBTyxDQUFDQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDRSxxRUFBQyxpREFBRDtBQUNFLGlCQUFTLEVBQUMsZUFEWjtBQUVFLFdBQUcsMkJBQUVELE9BQU8sQ0FBQ0Usa0JBQVIsQ0FBMkIsQ0FBM0IsQ0FBRixvRkFBRSxzQkFBK0JDLGVBQS9CLENBQStDLENBQS9DLENBQUYscUZBQUUsdUJBQW1EQyxLQUFyRCwyREFBRSx1QkFBMERDLEdBRmpFO0FBR0UsaUJBQVMsRUFBQyxTQUhaO0FBSUUsY0FBTSxFQUFDO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztLQWRRTixlO0FBZ0JNLFNBQVNPLGdCQUFULFFBQThCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1ZDLCtEQUFRLENBQUNWLFFBQUQsQ0FERTtBQUFBLE1BQ25DVyxJQURtQyxhQUNuQ0EsSUFEbUM7QUFBQSxNQUM3QkMsS0FENkIsYUFDN0JBLEtBRDZCO0FBQUEsTUFDdEJDLE9BRHNCLGFBQ3RCQSxPQURzQixFQUczQztBQUVBOzs7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLEVBQXhCOztBQUdBLE1BQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQUMsU0FBUyxFQUFJO0FBQzFDLFFBQUlBLFNBQVMsS0FBSyxNQUFsQixFQUEwQjtBQUN4QkgsZUFBUyxHQUFJQSxTQUFTLENBQUNJLE9BQVYsQ0FBa0JDLFVBQWxCLElBQWdDLEdBQXBDLEdBQTJDLElBQXBEO0FBQ0QsS0FGRCxNQUVPO0FBQ0xMLGVBQVMsR0FBSUEsU0FBUyxDQUFDSSxPQUFWLENBQWtCQyxVQUFsQixJQUFnQyxHQUFwQyxHQUEyQyxJQUFwRDtBQUNEO0FBQ0YsR0FORDs7QUFRQSxzQkFDRSxxRUFBQyw4RUFBRDtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUNFLGVBQVMsRUFBQyxpQkFEWjtBQUVFLGFBQU8sRUFBRTtBQUFBLGVBQU1ILHNCQUFzQixDQUFDLE1BQUQsQ0FBNUI7QUFBQSxPQUZYO0FBQUEsNkJBSUUscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQVNFO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQW9DLFNBQUcsRUFBRUYsU0FBekM7QUFBQSxnQkFDR0gsSUFESCxhQUNHQSxJQURILHVCQUNHQSxJQUFJLENBQUVTLFFBQU4sQ0FBZUMsR0FBZixDQUFtQixVQUFBbEIsT0FBTztBQUFBLDRCQUN6QixxRUFBQyxlQUFEO0FBQWtDLGlCQUFPLEVBQUVBO0FBQTNDLFdBQXNCQSxPQUFPLENBQUNtQixFQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUR5QjtBQUFBLE9BQTFCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBZUU7QUFDRSxlQUFTLEVBQUMsa0JBRFo7QUFFRSxhQUFPLEVBQUU7QUFBQSxlQUFNTixzQkFBc0IsQ0FBQyxPQUFELENBQTVCO0FBQUEsT0FGWDtBQUFBLDZCQUlFLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7O0dBekN1QlAsZ0I7VUFDV0MsdUQ7OztNQURYRCxnQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdHNNYWluUGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTWRLZXlib2FyZEFycm93TGVmdCwgTWRLZXlib2FyZEFycm93UmlnaHQgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5cbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHtcbiAgUHJvZHVjdE1haW5QYWdlU3R5bGVzLFxuICBQcm9kdWN0c01haW5QYWdlU3R5bGVzLFxufSBmcm9tICcuL1Byb2R1Y3RzTWFpblBhZ2VTdHlsZXMnO1xuXG5jb25zdCBQUk9EVUNUUyA9IGdxbGBcbiAgcXVlcnkgUFJPRFVDVFMge1xuICAgIHByb2R1Y3RzIHtcbiAgICAgIGlkXG4gICAgICBwcm9kdWN0X3RpdGxlXG4gICAgICBwcm9kdWN0X2NhdGVnb3JpZXMge1xuICAgICAgICBzaW5nbGVfcHJvZHVjdHMge1xuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICBwcmljZVxuICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgIHVybFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZnVuY3Rpb24gUHJvZHVjdE1haW5QYWdlKHsgcHJvZHVjdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPFByb2R1Y3RNYWluUGFnZVN0eWxlcz5cbiAgICAgIDxoMz57cHJvZHVjdC5wcm9kdWN0X3RpdGxlfTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1pdGVtJz5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgY2xhc3NOYW1lPSdwcm9kdWN0LWltYWdlJ1xuICAgICAgICAgIHNyYz17cHJvZHVjdC5wcm9kdWN0X2NhdGVnb3JpZXNbMF0/LnNpbmdsZV9wcm9kdWN0c1swXT8uaW1hZ2U/LnVybH1cbiAgICAgICAgICBvYmplY3RGaXQ9J2NvbnRhaW4nXG4gICAgICAgICAgbGF5b3V0PSdmaWxsJ1xuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Qcm9kdWN0TWFpblBhZ2VTdHlsZXM+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzTWFpblBhZ2Uoe30pIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoUFJPRFVDVFMpO1xuXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIC8vIGhvcml6b250YWwgc2Nyb2xsIGZvciBwcm9kdWN0c1xuICBjb25zdCBzY3JvbGxSZWYgPSB1c2VSZWYoKTtcblxuXG4gIGNvbnN0IGhhbmRsZUhvcml6b250YWxTY3JvbGwgPSBkaXJlY3Rpb24gPT4ge1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgc2Nyb2xsUmVmID8gKHNjcm9sbFJlZi5jdXJyZW50LnNjcm9sbExlZnQgLT0gMzAwKSA6IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcm9sbFJlZiA/IChzY3JvbGxSZWYuY3VycmVudC5zY3JvbGxMZWZ0ICs9IDMwMCkgOiBudWxsO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQcm9kdWN0c01haW5QYWdlU3R5bGVzPlxuICAgICAgPGgyPlByb2R1Y3RzPC9oMj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPSdpY29uLWFycm93LWxlZnQnXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUhvcml6b250YWxTY3JvbGwoJ2xlZnQnKX1cbiAgICAgID5cbiAgICAgICAgPE1kS2V5Ym9hcmRBcnJvd0xlZnQgLz5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdHNfbWFpbi1wYWdlJyByZWY9e3Njcm9sbFJlZn0+XG4gICAgICAgIHtkYXRhPy5wcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXG4gICAgICAgICAgPFByb2R1Y3RNYWluUGFnZSBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPSdpY29uLWFycm93LXJpZ2h0J1xuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVIb3Jpem9udGFsU2Nyb2xsKCdyaWdodCcpfVxuICAgICAgPlxuICAgICAgICA8TWRLZXlib2FyZEFycm93UmlnaHQgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvUHJvZHVjdHNNYWluUGFnZVN0eWxlcz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Products/ProductsMainPage.js\n");

/***/ })

})