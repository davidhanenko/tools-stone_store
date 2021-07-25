webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Carousel/Slide.js":
/*!**************************************!*\
  !*** ./components/Carousel/Slide.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Silde; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_img_pngegg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/pngegg.png */ \"./public/img/pngegg.png\");\n/* harmony import */ var _public_img_pngegg_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_pngegg_png__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Carousel/Slide.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar fadeInR = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"keyframes\"])([\"0%{transform:translate(150%);opacity:0;}100%{transform:translate(0%);opacity:1;}\"]);\nvar fadeInL = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"keyframes\"])([\"0%{transform:translate(-150%);opacity:0;}100%{transform:translate(0%);opacity:1;}\"]);\n\nvar animationL = function animationL(props) {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], props.a && fadeInL);\n};\n\nvar animationR = function animationR(props) {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], props.a && fadeInR);\n};\n\nvar SlideStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Slide__SlideStyles\",\n  componentId: \"sc-1y17cjl-0\"\n})([\"position:relative;height:100%;.main-images{max-width:300px;max-height:300px;@media (max-width:361px)}.image-1{left:30%;top:8em;animation:\", \" 1s;}.image-2{right:30%;top:5em;animation:\", \" 1s;}\"], animationL, animationR);\n_c = SlideStyles;\nfunction Silde(_ref) {\n  _s();\n\n  var mediaByIndex = _ref.mediaByIndex,\n      index = _ref.index;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      animation = _useState[0],\n      setAnimation = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setAnimation(true);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SlideStyles, {\n    a: animation,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      className: \"embla__slide__img\",\n      src: mediaByIndex(index),\n      objectFit: \"cover\",\n      layout: \"fill\",\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"main-images\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        width: 300,\n        height: 300,\n        layout: \"responsive\",\n        className: \"image-1\",\n        src: _public_img_pngegg_png__WEBPACK_IMPORTED_MODULE_4___default.a\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"main-images\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        width: 300,\n        height: 300,\n        layout: \"responsive\",\n        className: \"image-2\",\n        src: _public_img_pngegg_png__WEBPACK_IMPORTED_MODULE_4___default.a\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Silde, \"/nMmqxcVdc1mLTlpdKENTaY9cTY=\");\n\n_c2 = Silde;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SlideStyles\");\n$RefreshReg$(_c2, \"Silde\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC9TbGlkZS5qcz8yYjMwIl0sIm5hbWVzIjpbImZhZGVJblIiLCJrZXlmcmFtZXMiLCJmYWRlSW5MIiwiYW5pbWF0aW9uTCIsInByb3BzIiwiY3NzIiwiYSIsImFuaW1hdGlvblIiLCJTbGlkZVN0eWxlcyIsInN0eWxlZCIsImRpdiIsIlNpbGRlIiwibWVkaWFCeUluZGV4IiwiaW5kZXgiLCJ1c2VTdGF0ZSIsImFuaW1hdGlvbiIsInNldEFuaW1hdGlvbiIsInVzZUVmZmVjdCIsImltYWdlMSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsT0FBTyxHQUFHQyxtRUFBSCxzRkFBYjtBQVVFLElBQU1DLE9BQU8sR0FBR0QsbUVBQUgsdUZBQWI7O0FBV0YsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRDtBQUFBLFNBQVdDLDZEQUFYLFdBQ2ZELEtBQUssQ0FBQ0UsQ0FBTixJQUFXSixPQURJO0FBQUEsQ0FBbkI7O0FBR0EsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0gsS0FBRDtBQUFBLFNBQVdDLDZEQUFYLFdBQ2ZELEtBQUssQ0FBQ0UsQ0FBTixJQUFXTixPQURJO0FBQUEsQ0FBbkI7O0FBSUEsSUFBTVEsV0FBVyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlNQWFBUCxVQWJBLEVBbUJBSSxVQW5CQSxDQUFqQjtLQUFNQyxXO0FBd0JTLFNBQVNHLEtBQVQsT0FBc0M7QUFBQTs7QUFBQSxNQUF0QkMsWUFBc0IsUUFBdEJBLFlBQXNCO0FBQUEsTUFBUkMsS0FBUSxRQUFSQSxLQUFROztBQUFBLGtCQUVuQkMsc0RBQVEsQ0FBQyxJQUFELENBRlc7QUFBQSxNQUU5Q0MsU0FGOEM7QUFBQSxNQUVuQ0MsWUFGbUM7O0FBSW5EQyx5REFBUyxDQUFDLFlBQUs7QUFDVEQsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDTCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0UscUVBQUMsV0FBRDtBQUFhLEtBQUMsRUFBRUQsU0FBaEI7QUFBQSw0QkFDRSxxRUFBQyxpREFBRDtBQUNFLGVBQVMsRUFBQyxtQkFEWjtBQUVFLFNBQUcsRUFBRUgsWUFBWSxDQUFDQyxLQUFELENBRm5CO0FBR0UsZUFBUyxFQUFDLE9BSFo7QUFJRSxZQUFNLEVBQUMsTUFKVDtBQUtFLFNBQUcsRUFBQztBQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVFFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw2QkFDRSxxRUFBQyxpREFBRDtBQUNFLGFBQUssRUFBRSxHQURUO0FBRUUsY0FBTSxFQUFFLEdBRlY7QUFHRSxjQUFNLEVBQUMsWUFIVDtBQUlFLGlCQUFTLEVBQUMsU0FKWjtBQUtFLFdBQUcsRUFBRUssNkRBQU1BO0FBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixlQWlCRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsNkJBQ0UscUVBQUMsaURBQUQ7QUFDRSxhQUFLLEVBQUUsR0FEVDtBQUVFLGNBQU0sRUFBRSxHQUZWO0FBR0UsY0FBTSxFQUFDLFlBSFQ7QUFJRSxpQkFBUyxFQUFDLFNBSlo7QUFLRSxXQUFHLEVBQUVBLDZEQUFNQTtBQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkJEOztHQXJDdUJQLEs7O01BQUFBLEsiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsL1NsaWRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzLCBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgaW1hZ2UxIGZyb20gJy4uLy4uL3B1YmxpYy9pbWcvcG5nZWdnLnBuZydcblxuXG5jb25zdCBmYWRlSW5SID0ga2V5ZnJhbWVzYFxuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1MCUpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIGA7XG4gIGNvbnN0IGZhZGVJbkwgPSBrZXlmcmFtZXNgXG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1MCUpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIGA7XG5cbmNvbnN0IGFuaW1hdGlvbkwgPSAocHJvcHMpID0+IGNzc2BcbiAgJHtwcm9wcy5hICYmIGZhZGVJbkx9XG5gO1xuY29uc3QgYW5pbWF0aW9uUiA9IChwcm9wcykgPT4gY3NzYFxuICAke3Byb3BzLmEgJiYgZmFkZUluUn1cbmA7XG5cbmNvbnN0IFNsaWRlU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLm1haW4taW1hZ2VzIHtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjFweClcbiAgfVxuICAuaW1hZ2UtMSB7XG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xuICAgIGxlZnQ6IDMwJTtcbiAgICB0b3A6IDhlbTtcbiAgICBhbmltYXRpb246ICR7YW5pbWF0aW9uTH0gMXM7XG4gIH1cbiAgLmltYWdlLTIge1xuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgICByaWdodDogMzAlO1xuICAgIHRvcDogNWVtO1xuICAgIGFuaW1hdGlvbjogJHthbmltYXRpb25SfSAxcztcbiAgfVxuYDtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWxkZSh7bWVkaWFCeUluZGV4LCBpbmRleH0pIHsgXG5cbmNvbnN0IFthbmltYXRpb24sIHNldEFuaW1hdGlvbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiBcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgICAgICBzZXRBbmltYXRpb24odHJ1ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxTbGlkZVN0eWxlcyBhPXthbmltYXRpb259PlxuICAgICAgPEltYWdlXG4gICAgICAgIGNsYXNzTmFtZT0nZW1ibGFfX3NsaWRlX19pbWcnXG4gICAgICAgIHNyYz17bWVkaWFCeUluZGV4KGluZGV4KX1cbiAgICAgICAgb2JqZWN0Rml0PSdjb3ZlcidcbiAgICAgICAgbGF5b3V0PSdmaWxsJ1xuICAgICAgICBhbHQ9JydcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1pbWFnZXMnPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgIGxheW91dD0ncmVzcG9uc2l2ZSdcbiAgICAgICAgICBjbGFzc05hbWU9J2ltYWdlLTEnXG4gICAgICAgICAgc3JjPXtpbWFnZTF9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluLWltYWdlcyc+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgbGF5b3V0PSdyZXNwb25zaXZlJ1xuICAgICAgICAgIGNsYXNzTmFtZT0naW1hZ2UtMidcbiAgICAgICAgICBzcmM9e2ltYWdlMX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvU2xpZGVTdHlsZXM+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Carousel/Slide.js\n");

/***/ })

})