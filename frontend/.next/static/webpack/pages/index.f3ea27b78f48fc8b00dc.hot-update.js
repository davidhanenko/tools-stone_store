webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Carousel/Slide.js":
/*!**************************************!*\
  !*** ./components/Carousel/Slide.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Silde; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SlideStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SlideStyles */ \"./components/Carousel/SlideStyles.js\");\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Carousel/Slide.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Silde(_ref) {\n  _s();\n\n  var _this = this;\n\n  var mediaByIndex = _ref.mediaByIndex,\n      index = _ref.index,\n      setAnimation = _ref.setAnimation,\n      animation = _ref.animation;\n  var Btn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (_ref2, ref) {\n    var onClick = _ref2.onClick,\n        href = _ref2.href,\n        title = _ref2.title;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: href,\n      ref: ref,\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, _this);\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var mounted = true;\n    mounted && setAnimation(false);\n    return function () {\n      return mounted = false;\n    };\n  }, [animation]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SlideStyles__WEBPACK_IMPORTED_MODULE_3__[\"SlideStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      className: \"embla__slide__img\",\n      src: mediaByIndex(index).bg,\n      objectFit: \"cover\",\n      layout: \"fill\",\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"image-1\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        width: 200,\n        height: 200,\n        src: mediaByIndex(index).img1\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"image-2\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        width: 200,\n        height: 200,\n        src: mediaByIndex(index).img2\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: mediaByIndex(index).link,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"slide-btn\",\n        type: \"button\",\n        children: mediaByIndex(index).btn\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"slide-header\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: mediaByIndex(index).text1\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n        children: mediaByIndex(index).text2\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Silde, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Silde;\n\nvar _c;\n\n$RefreshReg$(_c, \"Silde\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC9TbGlkZS5qcz8yYjMwIl0sIm5hbWVzIjpbIlNpbGRlIiwibWVkaWFCeUluZGV4IiwiaW5kZXgiLCJzZXRBbmltYXRpb24iLCJhbmltYXRpb24iLCJCdG4iLCJSZWFjdCIsImZvcndhcmRSZWYiLCJyZWYiLCJvbkNsaWNrIiwiaHJlZiIsInRpdGxlIiwidXNlRWZmZWN0IiwibW91bnRlZCIsImJnIiwiaW1nMSIsImltZzIiLCJsaW5rIiwiYnRuIiwidGV4dDEiLCJ0ZXh0MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULE9BS1o7QUFBQTs7QUFBQTs7QUFBQSxNQUpEQyxZQUlDLFFBSkRBLFlBSUM7QUFBQSxNQUhEQyxLQUdDLFFBSERBLEtBR0M7QUFBQSxNQUZEQyxZQUVDLFFBRkRBLFlBRUM7QUFBQSxNQUREQyxTQUNDLFFBRERBLFNBQ0M7QUFDRCxNQUFNQyxHQUFHLGdCQUFHQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCLGlCQUEyQkMsR0FBM0IsRUFBbUM7QUFBQSxRQUFoQ0MsT0FBZ0MsU0FBaENBLE9BQWdDO0FBQUEsUUFBdkJDLElBQXVCLFNBQXZCQSxJQUF1QjtBQUFBLFFBQWpCQyxLQUFpQixTQUFqQkEsS0FBaUI7QUFDOUQsd0JBQ0U7QUFBRyxVQUFJLEVBQUVELElBQVQ7QUFBZSxTQUFHLEVBQUVGLEdBQXBCO0FBQUEsZ0JBQ0dHO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBS0QsR0FOVyxDQUFaO0FBUUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLE9BQU8sR0FBRyxJQUFkO0FBQ0FBLFdBQU8sSUFBSVYsWUFBWSxDQUFDLEtBQUQsQ0FBdkI7QUFDQSxXQUFPO0FBQUEsYUFBT1UsT0FBTyxHQUFHLEtBQWpCO0FBQUEsS0FBUDtBQUNELEdBSlEsRUFJTixDQUFDVCxTQUFELENBSk0sQ0FBVDtBQU1BLHNCQUNFLHFFQUFDLHdEQUFEO0FBQUEsNEJBQ0UscUVBQUMsaURBQUQ7QUFDRSxlQUFTLEVBQUMsbUJBRFo7QUFFRSxTQUFHLEVBQUVILFlBQVksQ0FBQ0MsS0FBRCxDQUFaLENBQW9CWSxFQUYzQjtBQUdFLGVBQVMsRUFBQyxPQUhaO0FBSUUsWUFBTSxFQUFDLE1BSlQ7QUFLRSxTQUFHLEVBQUM7QUFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFRRTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQUEsNkJBQ0UscUVBQUMsaURBQUQ7QUFBTyxhQUFLLEVBQUUsR0FBZDtBQUFtQixjQUFNLEVBQUUsR0FBM0I7QUFBZ0MsV0FBRyxFQUFFYixZQUFZLENBQUNDLEtBQUQsQ0FBWixDQUFvQmE7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixlQVdFO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw2QkFDRSxxRUFBQyxpREFBRDtBQUFPLGFBQUssRUFBRSxHQUFkO0FBQW1CLGNBQU0sRUFBRSxHQUEzQjtBQUFnQyxXQUFHLEVBQUVkLFlBQVksQ0FBQ0MsS0FBRCxDQUFaLENBQW9CYztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLGVBY0U7QUFBRyxVQUFJLEVBQUVmLFlBQVksQ0FBQ0MsS0FBRCxDQUFaLENBQW9CZSxJQUE3QjtBQUFBLDZCQUNFO0FBQVEsaUJBQVMsRUFBQyxXQUFsQjtBQUE4QixZQUFJLEVBQUMsUUFBbkM7QUFBQSxrQkFDR2hCLFlBQVksQ0FBQ0MsS0FBRCxDQUFaLENBQW9CZ0I7QUFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRixlQW9CRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUEsOEJBQ0U7QUFBQSxrQkFBS2pCLFlBQVksQ0FBQ0MsS0FBRCxDQUFaLENBQW9CaUI7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFBS2xCLFlBQVksQ0FBQ0MsS0FBRCxDQUFaLENBQW9Ca0I7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJCRDs7R0EvQ3VCcEIsSzs7S0FBQUEsSyIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2Fyb3VzZWwvU2xpZGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IFNsaWRlU3R5bGVzIH0gZnJvbSAnLi9TbGlkZVN0eWxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbGRlKHtcbiAgbWVkaWFCeUluZGV4LFxuICBpbmRleCxcbiAgc2V0QW5pbWF0aW9uLFxuICBhbmltYXRpb24sXG59KSB7XG4gIGNvbnN0IEJ0biA9IFJlYWN0LmZvcndhcmRSZWYoKHsgb25DbGljaywgaHJlZiwgdGl0bGUgfSwgcmVmKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGhyZWY9e2hyZWZ9IHJlZj17cmVmfT5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9hPlxuICAgICk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG1vdW50ZWQgPSB0cnVlO1xuICAgIG1vdW50ZWQgJiYgc2V0QW5pbWF0aW9uKGZhbHNlKTtcbiAgICByZXR1cm4gKCkgPT4gKG1vdW50ZWQgPSBmYWxzZSk7XG4gIH0sIFthbmltYXRpb25dKTtcblxuICByZXR1cm4gKFxuICAgIDxTbGlkZVN0eWxlcyA+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgY2xhc3NOYW1lPSdlbWJsYV9fc2xpZGVfX2ltZydcbiAgICAgICAgc3JjPXttZWRpYUJ5SW5kZXgoaW5kZXgpLmJnfVxuICAgICAgICBvYmplY3RGaXQ9J2NvdmVyJ1xuICAgICAgICBsYXlvdXQ9J2ZpbGwnXG4gICAgICAgIGFsdD0nJ1xuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZS0xJz5cbiAgICAgICAgPEltYWdlIHdpZHRoPXsyMDB9IGhlaWdodD17MjAwfSBzcmM9e21lZGlhQnlJbmRleChpbmRleCkuaW1nMX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlLTInPlxuICAgICAgICA8SW1hZ2Ugd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9IHNyYz17bWVkaWFCeUluZGV4KGluZGV4KS5pbWcyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YSBocmVmPXttZWRpYUJ5SW5kZXgoaW5kZXgpLmxpbmt9PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nc2xpZGUtYnRuJyB0eXBlPSdidXR0b24nPlxuICAgICAgICAgIHttZWRpYUJ5SW5kZXgoaW5kZXgpLmJ0bn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2E+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGlkZS1oZWFkZXInPlxuICAgICAgICA8aDI+e21lZGlhQnlJbmRleChpbmRleCkudGV4dDF9PC9oMj5cbiAgICAgICAgPGg0PnttZWRpYUJ5SW5kZXgoaW5kZXgpLnRleHQyfTwvaDQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L1NsaWRlU3R5bGVzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Carousel/Slide.js\n");

/***/ })

})