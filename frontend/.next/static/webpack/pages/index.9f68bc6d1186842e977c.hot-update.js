webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Products/ProductsMainPage.js":
/*!*************************************************!*\
  !*** ./components/Products/ProductsMainPage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductsMainPage; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ProductsMainPageStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProductsMainPageStyles */ \"./components/Products/ProductsMainPageStyles.js\");\n\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Products/ProductsMainPage.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  query PRODUCTS {\\n    products {\\n      id\\n      product_title\\n      product_categories {\\n        single_products {\\n          title\\n          description\\n          price\\n          image {\\n            url\\n          }\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar PRODUCTS = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_templateObject());\n\nfunction ProductMainPage(_ref) {\n  var _product$product_cate, _product$product_cate2, _product$product_cate3, _product$product_cate4, _product$product_cate5, _product$product_cate6;\n\n  var product = _ref.product;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_ProductsMainPageStyles__WEBPACK_IMPORTED_MODULE_8__[\"ProductMainPageStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n      children: product.product_title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex-item\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        src: (_product$product_cate = product.product_categories[0]) === null || _product$product_cate === void 0 ? void 0 : (_product$product_cate2 = _product$product_cate.single_products[0]) === null || _product$product_cate2 === void 0 ? void 0 : (_product$product_cate3 = _product$product_cate2.image) === null || _product$product_cate3 === void 0 ? void 0 : _product$product_cate3.url\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n        src: (_product$product_cate4 = product.product_categories[0]) === null || _product$product_cate4 === void 0 ? void 0 : (_product$product_cate5 = _product$product_cate4.single_products[0]) === null || _product$product_cate5 === void 0 ? void 0 : (_product$product_cate6 = _product$product_cate5.image) === null || _product$product_cate6 === void 0 ? void 0 : _product$product_cate6.url,\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, this);\n}\n\n_c = ProductMainPage;\nfunction ProductsMainPage(_ref2) {\n  _s();\n\n  var _this = this;\n\n  Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2);\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])(PRODUCTS),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading; // console.log(data);\n  // horizontal scroll for products\n\n\n  var scrollRef = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])();\n\n  var handleHorizontalScroll = function handleHorizontalScroll(direction) {\n    if (direction === 'left') {\n      scrollRef ? scrollRef.current.scrollLeft -= 300 : null;\n    } else {\n      scrollRef ? scrollRef.current.scrollLeft += 300 : null;\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_ProductsMainPageStyles__WEBPACK_IMPORTED_MODULE_8__[\"ProductsMainPageStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n      children: \"Products\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n      className: \"icon-arrow-left\",\n      onClick: function onClick() {\n        return handleHorizontalScroll('left');\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_6__[\"MdKeyboardArrowLeft\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"products_main-page\",\n      ref: scrollRef,\n      children: data === null || data === void 0 ? void 0 : data.products.map(function (product) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ProductMainPage, {\n          product: product\n        }, product.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n      className: \"icon-arrow-right\",\n      onClick: function onClick() {\n        return handleHorizontalScroll('right');\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_6__[\"MdKeyboardArrowRight\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ProductsMainPage, \"M/03cIiJ7u5BdN2pEWNGG/3N9vc=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"]];\n});\n\n_c2 = ProductsMainPage;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ProductMainPage\");\n$RefreshReg$(_c2, \"ProductsMainPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0c01haW5QYWdlLmpzPzEwOWYiXSwibmFtZXMiOlsiUFJPRFVDVFMiLCJncWwiLCJQcm9kdWN0TWFpblBhZ2UiLCJwcm9kdWN0IiwicHJvZHVjdF90aXRsZSIsInByb2R1Y3RfY2F0ZWdvcmllcyIsInNpbmdsZV9wcm9kdWN0cyIsImltYWdlIiwidXJsIiwiUHJvZHVjdHNNYWluUGFnZSIsInVzZVF1ZXJ5IiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsInNjcm9sbFJlZiIsInVzZVJlZiIsImhhbmRsZUhvcml6b250YWxTY3JvbGwiLCJkaXJlY3Rpb24iLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsInByb2R1Y3RzIiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFLQSxJQUFNQSxRQUFRLEdBQUdDLDJEQUFILG1CQUFkOztBQW1CQSxTQUFTQyxlQUFULE9BQXNDO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQ3BDLHNCQUNFLHFFQUFDLDZFQUFEO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0EsT0FBTyxDQUFDQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDRSxxRUFBQyxpREFBRDtBQUNFLFdBQUcsMkJBQUVELE9BQU8sQ0FBQ0Usa0JBQVIsQ0FBMkIsQ0FBM0IsQ0FBRixvRkFBRSxzQkFBK0JDLGVBQS9CLENBQStDLENBQS9DLENBQUYscUZBQUUsdUJBQW1EQyxLQUFyRCwyREFBRSx1QkFBMERDO0FBRGpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQ0UsV0FBRyw0QkFBRUwsT0FBTyxDQUFDRSxrQkFBUixDQUEyQixDQUEzQixDQUFGLHFGQUFFLHVCQUErQkMsZUFBL0IsQ0FBK0MsQ0FBL0MsQ0FBRixxRkFBRSx1QkFBbURDLEtBQXJELDJEQUFFLHVCQUEwREMsR0FEakU7QUFFRSxXQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDs7S0FmUU4sZTtBQWlCTSxTQUFTTyxnQkFBVCxRQUE4QjtBQUFBOztBQUFBOztBQUFBOztBQUFBLGtCQUNWQywrREFBUSxDQUFDVixRQUFELENBREU7QUFBQSxNQUNuQ1csSUFEbUMsYUFDbkNBLElBRG1DO0FBQUEsTUFDN0JDLEtBRDZCLGFBQzdCQSxLQUQ2QjtBQUFBLE1BQ3RCQyxPQURzQixhQUN0QkEsT0FEc0IsRUFHM0M7QUFFQTs7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxFQUF4Qjs7QUFHQSxNQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUFDLFNBQVMsRUFBSTtBQUMxQyxRQUFJQSxTQUFTLEtBQUssTUFBbEIsRUFBMEI7QUFDeEJILGVBQVMsR0FBSUEsU0FBUyxDQUFDSSxPQUFWLENBQWtCQyxVQUFsQixJQUFnQyxHQUFwQyxHQUEyQyxJQUFwRDtBQUNELEtBRkQsTUFFTztBQUNMTCxlQUFTLEdBQUlBLFNBQVMsQ0FBQ0ksT0FBVixDQUFrQkMsVUFBbEIsSUFBZ0MsR0FBcEMsR0FBMkMsSUFBcEQ7QUFDRDtBQUNGLEdBTkQ7O0FBUUEsc0JBQ0UscUVBQUMsOEVBQUQ7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFDRSxlQUFTLEVBQUMsaUJBRFo7QUFFRSxhQUFPLEVBQUU7QUFBQSxlQUFNSCxzQkFBc0IsQ0FBQyxNQUFELENBQTVCO0FBQUEsT0FGWDtBQUFBLDZCQUlFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFTRTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFvQyxTQUFHLEVBQUVGLFNBQXpDO0FBQUEsZ0JBQ0dILElBREgsYUFDR0EsSUFESCx1QkFDR0EsSUFBSSxDQUFFUyxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQWxCLE9BQU87QUFBQSw0QkFDekIscUVBQUMsZUFBRDtBQUFrQyxpQkFBTyxFQUFFQTtBQUEzQyxXQUFzQkEsT0FBTyxDQUFDbUIsRUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEeUI7QUFBQSxPQUExQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQWVFO0FBQ0UsZUFBUyxFQUFDLGtCQURaO0FBRUUsYUFBTyxFQUFFO0FBQUEsZUFBTU4sc0JBQXNCLENBQUMsT0FBRCxDQUE1QjtBQUFBLE9BRlg7QUFBQSw2QkFJRSxxRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JEOztHQXpDdUJQLGdCO1VBQ1dDLHVEOzs7TUFEWEQsZ0IiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RzTWFpblBhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE1kS2V5Ym9hcmRBcnJvd0xlZnQsIE1kS2V5Ym9hcmRBcnJvd1JpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmltcG9ydCB7XG4gIFByb2R1Y3RNYWluUGFnZVN0eWxlcyxcbiAgUHJvZHVjdHNNYWluUGFnZVN0eWxlcyxcbn0gZnJvbSAnLi9Qcm9kdWN0c01haW5QYWdlU3R5bGVzJztcblxuY29uc3QgUFJPRFVDVFMgPSBncWxgXG4gIHF1ZXJ5IFBST0RVQ1RTIHtcbiAgICBwcm9kdWN0cyB7XG4gICAgICBpZFxuICAgICAgcHJvZHVjdF90aXRsZVxuICAgICAgcHJvZHVjdF9jYXRlZ29yaWVzIHtcbiAgICAgICAgc2luZ2xlX3Byb2R1Y3RzIHtcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgcHJpY2VcbiAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICB1cmxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIFByb2R1Y3RNYWluUGFnZSh7IHByb2R1Y3QgfSkge1xuICByZXR1cm4gKFxuICAgIDxQcm9kdWN0TWFpblBhZ2VTdHlsZXM+XG4gICAgICA8aDM+e3Byb2R1Y3QucHJvZHVjdF90aXRsZX08L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtaXRlbSc+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17cHJvZHVjdC5wcm9kdWN0X2NhdGVnb3JpZXNbMF0/LnNpbmdsZV9wcm9kdWN0c1swXT8uaW1hZ2U/LnVybH1cbiAgICAgICAgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17cHJvZHVjdC5wcm9kdWN0X2NhdGVnb3JpZXNbMF0/LnNpbmdsZV9wcm9kdWN0c1swXT8uaW1hZ2U/LnVybH1cbiAgICAgICAgICBhbHQ9JydcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUHJvZHVjdE1haW5QYWdlU3R5bGVzPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0c01haW5QYWdlKHt9KSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFBST0RVQ1RTKTtcblxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAvLyBob3Jpem9udGFsIHNjcm9sbCBmb3IgcHJvZHVjdHNcbiAgY29uc3Qgc2Nyb2xsUmVmID0gdXNlUmVmKCk7XG5cblxuICBjb25zdCBoYW5kbGVIb3Jpem9udGFsU2Nyb2xsID0gZGlyZWN0aW9uID0+IHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIHNjcm9sbFJlZiA/IChzY3JvbGxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC09IDMwMCkgOiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JvbGxSZWYgPyAoc2Nyb2xsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCArPSAzMDApIDogbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvZHVjdHNNYWluUGFnZVN0eWxlcz5cbiAgICAgIDxoMj5Qcm9kdWN0czwvaDI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT0naWNvbi1hcnJvdy1sZWZ0J1xuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVIb3Jpem9udGFsU2Nyb2xsKCdsZWZ0Jyl9XG4gICAgICA+XG4gICAgICAgIDxNZEtleWJvYXJkQXJyb3dMZWZ0IC8+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3RzX21haW4tcGFnZScgcmVmPXtzY3JvbGxSZWZ9PlxuICAgICAgICB7ZGF0YT8ucHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICAgIDxQcm9kdWN0TWFpblBhZ2Uga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT0naWNvbi1hcnJvdy1yaWdodCdcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSG9yaXpvbnRhbFNjcm9sbCgncmlnaHQnKX1cbiAgICAgID5cbiAgICAgICAgPE1kS2V5Ym9hcmRBcnJvd1JpZ2h0IC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L1Byb2R1Y3RzTWFpblBhZ2VTdHlsZXM+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Products/ProductsMainPage.js\n");

/***/ })

})