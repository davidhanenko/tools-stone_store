webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Products/ProductsMainPage.js":
/*!*************************************************!*\
  !*** ./components/Products/ProductsMainPage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductsMainPage; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _lib_useScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/useScroll */ \"./lib/useScroll.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ProductsMainPageStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProductsMainPageStyles */ \"./components/Products/ProductsMainPageStyles.js\");\n\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Products/ProductsMainPage.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  query PRODUCTS {\\n    products {\\n      id\\n      product_title\\n      product_categories {\\n        single_products {\\n          title\\n          description\\n          price\\n          image {\\n            url\\n          }\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar PRODUCTS = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_templateObject());\n\nfunction ProductMainPage(_ref) {\n  var _product$product_cate, _product$product_cate2, _product$product_cate3;\n\n  var product = _ref.product;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_ProductsMainPageStyles__WEBPACK_IMPORTED_MODULE_8__[\"ProductMainPageStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n      children: product.product_title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex-item\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n        src: (_product$product_cate = product.product_categories[0]) === null || _product$product_cate === void 0 ? void 0 : (_product$product_cate2 = _product$product_cate.single_products[0]) === null || _product$product_cate2 === void 0 ? void 0 : (_product$product_cate3 = _product$product_cate2.image) === null || _product$product_cate3 === void 0 ? void 0 : _product$product_cate3.url,\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, this);\n}\n\n_c = ProductMainPage;\nfunction ProductsMainPage(_ref2) {\n  _s();\n\n  var _this = this;\n\n  Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2);\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])(PRODUCTS),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading; // console.log(data);\n  // horizontal scroll for products \n\n\n  var _useScroll = Object(_lib_useScroll__WEBPACK_IMPORTED_MODULE_5__[\"useScroll\"])(),\n      scrollRef = _useScroll.scrollRef;\n\n  var handleHorizontalScroll = function handleHorizontalScroll(direction) {\n    if (direction === 'right') {\n      scrollRef ? scrollRef.current.scrollRight -= 300 : null;\n    } else {\n      scrollRef ? scrollRef.current.scrollLeft -= 300 : null;\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_ProductsMainPageStyles__WEBPACK_IMPORTED_MODULE_8__[\"ProductsMainPageStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n      children: \"Products\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n      className: \"icon-arrow-left\",\n      onClick: function onClick() {\n        return handleHorizontalScroll('left');\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_6__[\"MdKeyboardArrowLeft\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"products_main-page\",\n      children: data === null || data === void 0 ? void 0 : data.products.map(function (product) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ProductMainPage, {\n          product: product\n        }, product.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n      className: \"icon-arrow-right\",\n      onClick: function onClick() {\n        return handleHorizontalScroll('right');\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_6__[\"MdKeyboardArrowRight\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ProductsMainPage, \"1F39JJWSTtY7tEtA9E+uqmTlD5A=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"], _lib_useScroll__WEBPACK_IMPORTED_MODULE_5__[\"useScroll\"]];\n});\n\n_c2 = ProductsMainPage;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ProductMainPage\");\n$RefreshReg$(_c2, \"ProductsMainPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0c01haW5QYWdlLmpzPzEwOWYiXSwibmFtZXMiOlsiUFJPRFVDVFMiLCJncWwiLCJQcm9kdWN0TWFpblBhZ2UiLCJwcm9kdWN0IiwicHJvZHVjdF90aXRsZSIsInByb2R1Y3RfY2F0ZWdvcmllcyIsInNpbmdsZV9wcm9kdWN0cyIsImltYWdlIiwidXJsIiwiUHJvZHVjdHNNYWluUGFnZSIsInVzZVF1ZXJ5IiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsInVzZVNjcm9sbCIsInNjcm9sbFJlZiIsImhhbmRsZUhvcml6b250YWxTY3JvbGwiLCJkaXJlY3Rpb24iLCJjdXJyZW50Iiwic2Nyb2xsUmlnaHQiLCJzY3JvbGxMZWZ0IiwicHJvZHVjdHMiLCJtYXAiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBS0EsSUFBTUEsUUFBUSxHQUFHQywyREFBSCxtQkFBZDs7QUFtQkEsU0FBU0MsZUFBVCxPQUFzQztBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUNwQyxzQkFDRSxxRUFBQyw2RUFBRDtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtBLE9BQU8sQ0FBQ0M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0U7QUFDRSxXQUFHLDJCQUFFRCxPQUFPLENBQUNFLGtCQUFSLENBQTJCLENBQTNCLENBQUYsb0ZBQUUsc0JBQStCQyxlQUEvQixDQUErQyxDQUEvQyxDQUFGLHFGQUFFLHVCQUFtREMsS0FBckQsMkRBQUUsdUJBQTBEQyxHQURqRTtBQUVFLFdBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDs7S0FaUU4sZTtBQWNNLFNBQVNPLGdCQUFULFFBQThCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1ZDLCtEQUFRLENBQUNWLFFBQUQsQ0FERTtBQUFBLE1BQ25DVyxJQURtQyxhQUNuQ0EsSUFEbUM7QUFBQSxNQUM3QkMsS0FENkIsYUFDN0JBLEtBRDZCO0FBQUEsTUFDdEJDLE9BRHNCLGFBQ3RCQSxPQURzQixFQUczQztBQUVGOzs7QUFMNkMsbUJBTXpCQyxnRUFBUyxFQU5nQjtBQUFBLE1BTXRDQyxTQU5zQyxjQU10Q0EsU0FOc0M7O0FBUTdDLE1BQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsU0FBRCxFQUFlO0FBQzVDLFFBQUdBLFNBQVMsS0FBSyxPQUFqQixFQUEwQjtBQUN4QkYsZUFBUyxHQUFHQSxTQUFTLENBQUNHLE9BQVYsQ0FBa0JDLFdBQWxCLElBQWlDLEdBQXBDLEdBQTBDLElBQW5EO0FBQ0QsS0FGRCxNQUVPO0FBQ0xKLGVBQVMsR0FBSUEsU0FBUyxDQUFDRyxPQUFWLENBQWtCRSxVQUFsQixJQUFnQyxHQUFwQyxHQUEyQyxJQUFwRDtBQUNEO0FBQ0YsR0FORDs7QUFRRSxzQkFDRSxxRUFBQyw4RUFBRDtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUNFLGVBQVMsRUFBQyxpQkFEWjtBQUVFLGFBQU8sRUFBRTtBQUFBLGVBQU1KLHNCQUFzQixDQUFDLE1BQUQsQ0FBNUI7QUFBQSxPQUZYO0FBQUEsNkJBSUUscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQVNFO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUEsZ0JBQ0dMLElBREgsYUFDR0EsSUFESCx1QkFDR0EsSUFBSSxDQUFFVSxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQW5CLE9BQU87QUFBQSw0QkFDekIscUVBQUMsZUFBRDtBQUFrQyxpQkFBTyxFQUFFQTtBQUEzQyxXQUFzQkEsT0FBTyxDQUFDb0IsRUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEeUI7QUFBQSxPQUExQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQWNFO0FBQ0UsZUFBUyxFQUFDLGtCQURaO0FBRUUsYUFBTyxFQUFFO0FBQUEsZUFBTVAsc0JBQXNCLENBQUMsT0FBRCxDQUE1QjtBQUFBLE9BRlg7QUFBQSw2QkFJRSxxRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUJEOztHQXZDdUJQLGdCO1VBQ1dDLHVELEVBS2ZJLHdEOzs7TUFOSUwsZ0IiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RzTWFpblBhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgdXNlU2Nyb2xsIH0gZnJvbSAnLi4vLi4vbGliL3VzZVNjcm9sbCc7XG5cbmltcG9ydCB7IE1kS2V5Ym9hcmRBcnJvd0xlZnQsIE1kS2V5Ym9hcmRBcnJvd1JpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmltcG9ydCB7XG4gIFByb2R1Y3RNYWluUGFnZVN0eWxlcyxcbiAgUHJvZHVjdHNNYWluUGFnZVN0eWxlcyxcbn0gZnJvbSAnLi9Qcm9kdWN0c01haW5QYWdlU3R5bGVzJztcblxuY29uc3QgUFJPRFVDVFMgPSBncWxgXG4gIHF1ZXJ5IFBST0RVQ1RTIHtcbiAgICBwcm9kdWN0cyB7XG4gICAgICBpZFxuICAgICAgcHJvZHVjdF90aXRsZVxuICAgICAgcHJvZHVjdF9jYXRlZ29yaWVzIHtcbiAgICAgICAgc2luZ2xlX3Byb2R1Y3RzIHtcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgcHJpY2VcbiAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICB1cmxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIFByb2R1Y3RNYWluUGFnZSh7IHByb2R1Y3QgfSkge1xuICByZXR1cm4gKFxuICAgIDxQcm9kdWN0TWFpblBhZ2VTdHlsZXM+XG4gICAgICA8aDM+e3Byb2R1Y3QucHJvZHVjdF90aXRsZX08L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtaXRlbSc+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e3Byb2R1Y3QucHJvZHVjdF9jYXRlZ29yaWVzWzBdPy5zaW5nbGVfcHJvZHVjdHNbMF0/LmltYWdlPy51cmx9XG4gICAgICAgICAgYWx0PScnXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Byb2R1Y3RNYWluUGFnZVN0eWxlcz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHNNYWluUGFnZSh7fSkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShQUk9EVUNUUyk7XG5cbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XG5cbi8vIGhvcml6b250YWwgc2Nyb2xsIGZvciBwcm9kdWN0cyBcbmNvbnN0IHtzY3JvbGxSZWZ9ID0gdXNlU2Nyb2xsKCk7XG5cbmNvbnN0IGhhbmRsZUhvcml6b250YWxTY3JvbGwgPSAoZGlyZWN0aW9uKSA9PiB7XG4gIGlmKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgIHNjcm9sbFJlZiA/IHNjcm9sbFJlZi5jdXJyZW50LnNjcm9sbFJpZ2h0IC09IDMwMCA6IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgc2Nyb2xsUmVmID8gKHNjcm9sbFJlZi5jdXJyZW50LnNjcm9sbExlZnQgLT0gMzAwKSA6IG51bGw7XG4gIH1cbn1cblxuICByZXR1cm4gKFxuICAgIDxQcm9kdWN0c01haW5QYWdlU3R5bGVzPlxuICAgICAgPGgyPlByb2R1Y3RzPC9oMj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPSdpY29uLWFycm93LWxlZnQnXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUhvcml6b250YWxTY3JvbGwoJ2xlZnQnKX1cbiAgICAgID5cbiAgICAgICAgPE1kS2V5Ym9hcmRBcnJvd0xlZnQgLz5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdHNfbWFpbi1wYWdlJz5cbiAgICAgICAge2RhdGE/LnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcbiAgICAgICAgICA8UHJvZHVjdE1haW5QYWdlIGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPSdpY29uLWFycm93LXJpZ2h0J1xuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVIb3Jpem9udGFsU2Nyb2xsKCdyaWdodCcpfVxuICAgICAgPlxuICAgICAgICA8TWRLZXlib2FyZEFycm93UmlnaHQgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvUHJvZHVjdHNNYWluUGFnZVN0eWxlcz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Products/ProductsMainPage.js\n");

/***/ })

})