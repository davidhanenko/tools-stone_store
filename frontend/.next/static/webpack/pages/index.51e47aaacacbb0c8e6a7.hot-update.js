webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Carousel/Slide.js":
/*!**************************************!*\
  !*** ./components/Carousel/Slide.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Silde; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_img_pngegg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/pngegg.png */ \"./public/img/pngegg.png\");\n/* harmony import */ var _public_img_pngegg_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_pngegg_png__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Carousel/Slide.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar fadeInR = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"keyframes\"])([\"0%{transform:translate(150%);opacity:0;}100%{transform:translate(0%);opacity:1;}\"]);\nvar fadeInL = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"keyframes\"])([\"0%{transform:translate(-150%);opacity:0;}100%{transform:translate(0%);opacity:1;}\"]);\n\nvar animationL = function animationL(props) {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], props.a && fadeInL);\n};\n\nvar animationR = function animationR(props) {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], props.a && fadeInR);\n};\n\nvar SlideStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Slide__SlideStyles\",\n  componentId: \"sc-1y17cjl-0\"\n})([\"position:relative;height:100%;.main-images{display:inline-block;max-width:300px;max-height:300px;@media (max-width:601px){max-width:200px;max-height:200px;}@media (max-width:361px){max-width:150px;max-height:150px;}}.image-1{position:absolute;left:30%;top:8em;animation:\", \" 1s;}.image-2{position:absolute;right:30%;top:5em;animation:\", \" 1s;}\"], animationL, animationR);\n_c = SlideStyles;\nfunction Silde(_ref) {\n  _s();\n\n  var mediaByIndex = _ref.mediaByIndex,\n      index = _ref.index;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      animation = _useState[0],\n      setAnimation = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setAnimation(true);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SlideStyles, {\n    a: animation,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      className: \"embla__slide__img\",\n      src: mediaByIndex(index),\n      objectFit: \"cover\",\n      layout: \"fill\",\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"main-images\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        width: 300,\n        height: 300,\n        className: \"image-1\",\n        src: _public_img_pngegg_png__WEBPACK_IMPORTED_MODULE_4___default.a\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"main-images\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        width: 300,\n        height: 300,\n        className: \"image-2\",\n        src: _public_img_pngegg_png__WEBPACK_IMPORTED_MODULE_4___default.a\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Silde, \"/nMmqxcVdc1mLTlpdKENTaY9cTY=\");\n\n_c2 = Silde;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SlideStyles\");\n$RefreshReg$(_c2, \"Silde\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC9TbGlkZS5qcz8yYjMwIl0sIm5hbWVzIjpbImZhZGVJblIiLCJrZXlmcmFtZXMiLCJmYWRlSW5MIiwiYW5pbWF0aW9uTCIsInByb3BzIiwiY3NzIiwiYSIsImFuaW1hdGlvblIiLCJTbGlkZVN0eWxlcyIsInN0eWxlZCIsImRpdiIsIlNpbGRlIiwibWVkaWFCeUluZGV4IiwiaW5kZXgiLCJ1c2VTdGF0ZSIsImFuaW1hdGlvbiIsInNldEFuaW1hdGlvbiIsInVzZUVmZmVjdCIsImltYWdlMSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsT0FBTyxHQUFHQyxtRUFBSCxzRkFBYjtBQVVFLElBQU1DLE9BQU8sR0FBR0QsbUVBQUgsdUZBQWI7O0FBV0YsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRDtBQUFBLFNBQVdDLDZEQUFYLFdBQ2ZELEtBQUssQ0FBQ0UsQ0FBTixJQUFXSixPQURJO0FBQUEsQ0FBbkI7O0FBR0EsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0gsS0FBRDtBQUFBLFNBQVdDLDZEQUFYLFdBQ2ZELEtBQUssQ0FBQ0UsQ0FBTixJQUFXTixPQURJO0FBQUEsQ0FBbkI7O0FBSUEsSUFBTVEsV0FBVyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdXQXNCQVAsVUF0QkEsRUE0QkFJLFVBNUJBLENBQWpCO0tBQU1DLFc7QUFrQ1MsU0FBU0csS0FBVCxPQUFzQztBQUFBOztBQUFBLE1BQXRCQyxZQUFzQixRQUF0QkEsWUFBc0I7QUFBQSxNQUFSQyxLQUFRLFFBQVJBLEtBQVE7O0FBQUEsa0JBRW5CQyxzREFBUSxDQUFDLElBQUQsQ0FGVztBQUFBLE1BRTlDQyxTQUY4QztBQUFBLE1BRW5DQyxZQUZtQzs7QUFJbkRDLHlEQUFTLENBQUMsWUFBSztBQUNURCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNMLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRSxxRUFBQyxXQUFEO0FBQWEsS0FBQyxFQUFFRCxTQUFoQjtBQUFBLDRCQUNFLHFFQUFDLGlEQUFEO0FBQ0UsZUFBUyxFQUFDLG1CQURaO0FBRUUsU0FBRyxFQUFFSCxZQUFZLENBQUNDLEtBQUQsQ0FGbkI7QUFHRSxlQUFTLEVBQUMsT0FIWjtBQUlFLFlBQU0sRUFBQyxNQUpUO0FBS0UsU0FBRyxFQUFDO0FBTE47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBUUU7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDZCQUNFLHFFQUFDLGlEQUFEO0FBQ0UsYUFBSyxFQUFFLEdBRFQ7QUFFRSxjQUFNLEVBQUUsR0FGVjtBQUdFLGlCQUFTLEVBQUMsU0FIWjtBQUlFLFdBQUcsRUFBRUssNkRBQU1BO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixlQWdCRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsNkJBQ0UscUVBQUMsaURBQUQ7QUFDRSxhQUFLLEVBQUUsR0FEVDtBQUVFLGNBQU0sRUFBRSxHQUZWO0FBR0UsaUJBQVMsRUFBQyxTQUhaO0FBSUUsV0FBRyxFQUFFQSw2REFBTUE7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJCRDs7R0FuQ3VCUCxLOztNQUFBQSxLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJvdXNlbC9TbGlkZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcywgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGltYWdlMSBmcm9tICcuLi8uLi9wdWJsaWMvaW1nL3BuZ2VnZy5wbmcnXG5cblxuY29uc3QgZmFkZUluUiA9IGtleWZyYW1lc2BcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNTAlKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICBgO1xuICBjb25zdCBmYWRlSW5MID0ga2V5ZnJhbWVzYFxuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNTAlKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICBgO1xuXG5jb25zdCBhbmltYXRpb25MID0gKHByb3BzKSA9PiBjc3NgXG4gICR7cHJvcHMuYSAmJiBmYWRlSW5MfVxuYDtcbmNvbnN0IGFuaW1hdGlvblIgPSAocHJvcHMpID0+IGNzc2BcbiAgJHtwcm9wcy5hICYmIGZhZGVJblJ9XG5gO1xuXG5jb25zdCBTbGlkZVN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5tYWluLWltYWdlcyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMXB4KSB7XG4gICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjFweCkge1xuICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLmltYWdlLTEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzMCU7XG4gICAgdG9wOiA4ZW07XG4gICAgYW5pbWF0aW9uOiAke2FuaW1hdGlvbkx9IDFzO1xuICB9XG4gIC5pbWFnZS0yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDMwJTtcbiAgICB0b3A6IDVlbTtcbiAgICBhbmltYXRpb246ICR7YW5pbWF0aW9uUn0gMXM7XG4gIH1cblxuYDtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWxkZSh7bWVkaWFCeUluZGV4LCBpbmRleH0pIHsgXG5cbmNvbnN0IFthbmltYXRpb24sIHNldEFuaW1hdGlvbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiBcbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgICAgICBzZXRBbmltYXRpb24odHJ1ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxTbGlkZVN0eWxlcyBhPXthbmltYXRpb259PlxuICAgICAgPEltYWdlXG4gICAgICAgIGNsYXNzTmFtZT0nZW1ibGFfX3NsaWRlX19pbWcnXG4gICAgICAgIHNyYz17bWVkaWFCeUluZGV4KGluZGV4KX1cbiAgICAgICAgb2JqZWN0Rml0PSdjb3ZlcidcbiAgICAgICAgbGF5b3V0PSdmaWxsJ1xuICAgICAgICBhbHQ9JydcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1pbWFnZXMnPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgIGNsYXNzTmFtZT0naW1hZ2UtMSdcbiAgICAgICAgICBzcmM9e2ltYWdlMX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4taW1hZ2VzJz5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICBjbGFzc05hbWU9J2ltYWdlLTInXG4gICAgICAgICAgc3JjPXtpbWFnZTF9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1NsaWRlU3R5bGVzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Carousel/Slide.js\n");

/***/ })

})