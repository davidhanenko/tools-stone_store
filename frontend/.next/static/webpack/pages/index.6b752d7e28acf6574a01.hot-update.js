webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Carousel/Slide.js":
/*!**************************************!*\
  !*** ./components/Carousel/Slide.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Silde; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Main */ \"./components/Main.js\");\n/* harmony import */ var _public_img_pngegg_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/img/pngegg.png */ \"./public/img/pngegg.png\");\n/* harmony import */ var _public_img_pngegg_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_pngegg_png__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Carousel/Slide.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n // export const MAIN_PAGE_SLIDE_QUERY = gql`\n//   query MAIN_PAGE_SLIDE_QUERY($id: ID!) {\n//     mainPageSlide(id: $id) {\n//       image_1 {\n//         url\n//       }\n//       image_2 {\n//         url\n//       }\n//     }\n//   }\n// `;\n\nvar fadeInR = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"keyframes\"])([\"0%{transform:translate(150%);opacity:0;}100%{transform:translate(0%);opacity:1;}\"]);\nvar fadeInL = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"keyframes\"])([\"0%{transform:translate(-150%);opacity:0;}100%{transform:translate(0%);opacity:1;}\"]);\n\nvar animationL = function animationL(props) {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"css\"])([\"\", \"\"], props.a && fadeInL);\n};\n\nvar animationR = function animationR(props) {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"css\"])([\"\", \"\"], props.a && fadeInR);\n};\n\nvar SlideStyles = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Slide__SlideStyles\",\n  componentId: \"sc-1y17cjl-0\"\n})([\"position:relative;img{position:absolute;width:20rem;}.image-1{left:30%;top:8em;animation:\", \" 1s;}.image-2{right:30%;top:5em;animation:\", \" 1s;}\"], animationL, animationR);\n_c = SlideStyles;\nfunction Silde(_ref) {\n  _s();\n\n  var index = _ref.index;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      animation = _useState[0],\n      setAnimation = _useState[1]; // const { data, loading, error } = useQuery(MAIN_PAGE_SLIDE_QUERY, {\n  //   variables: {\n  //     id: index+1\n  //   }\n  // });\n  // if (loading) return <p>Loading...</p>;\n  // if (error) return <p>{error.message}</p>;\n  // const {mainPageSlide} = data\n\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // router.reload(window.location.pathname);\n    setTimeout(function () {});\n    router.reload();\n    setAnimation(true);\n  }, [index]); // console.log('render');\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SlideStyles, {\n    a: animation,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      className: \"image-1\",\n      src: _public_img_pngegg_png__WEBPACK_IMPORTED_MODULE_6___default.a\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      className: \"image-2\",\n      src: _public_img_pngegg_png__WEBPACK_IMPORTED_MODULE_6___default.a\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 97,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Silde, \"sVshEm65dSOqSdlfQeY09YeL1QQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c2 = Silde;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SlideStyles\");\n$RefreshReg$(_c2, \"Silde\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC9TbGlkZS5qcz8yYjMwIl0sIm5hbWVzIjpbImZhZGVJblIiLCJrZXlmcmFtZXMiLCJmYWRlSW5MIiwiYW5pbWF0aW9uTCIsInByb3BzIiwiY3NzIiwiYSIsImFuaW1hdGlvblIiLCJTbGlkZVN0eWxlcyIsInN0eWxlZCIsImRpdiIsIlNpbGRlIiwiaW5kZXgiLCJ1c2VTdGF0ZSIsImFuaW1hdGlvbiIsInNldEFuaW1hdGlvbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJyZWxvYWQiLCJpbWFnZTEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxtRUFBSCxzRkFBYjtBQVVFLElBQU1DLE9BQU8sR0FBR0QsbUVBQUgsdUZBQWI7O0FBV0YsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRDtBQUFBLFNBQVdDLDZEQUFYLFdBQ2ZELEtBQUssQ0FBQ0UsQ0FBTixJQUFXSixPQURJO0FBQUEsQ0FBbkI7O0FBR0EsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0gsS0FBRDtBQUFBLFNBQVdDLDZEQUFYLFdBQ2ZELEtBQUssQ0FBQ0UsQ0FBTixJQUFXTixPQURJO0FBQUEsQ0FBbkI7O0FBSUEsSUFBTVEsV0FBVyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlKQVVBUCxVQVZBLEVBZUFJLFVBZkEsQ0FBakI7S0FBTUMsVztBQW9CUyxTQUFTRyxLQUFULE9BQTBCO0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGtCQUVQQyxzREFBUSxDQUFDLEtBQUQsQ0FGRDtBQUFBLE1BRWxDQyxTQUZrQztBQUFBLE1BRXZCQyxZQUZ1QixpQkFJdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQUs7QUFDYjtBQUNBQyxjQUFVLENBQUMsWUFBSyxDQUFFLENBQVIsQ0FBVjtBQUNBSCxVQUFNLENBQUNJLE1BQVA7QUFDQUwsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxHQUxRLEVBS04sQ0FBQ0gsS0FBRCxDQUxNLENBQVQsQ0FmdUMsQ0FzQnZDOztBQUlBLHNCQUNFLHFFQUFDLFdBQUQ7QUFBYSxLQUFDLEVBQUVFLFNBQWhCO0FBQUEsNEJBR0U7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUF5QixTQUFHLEVBQUVPLDZEQUFNQTtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQXlCLFNBQUcsRUFBRUEsNkRBQU1BO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztHQWxDdUJWLEs7VUFhUE0scUQ7OztNQWJPTixLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJvdXNlbC9TbGlkZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcywgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IE1BSU5fUEFHRV9RVUVSWSB9IGZyb20gJy4uL01haW4nO1xuaW1wb3J0IGltYWdlMSBmcm9tICcuLi8uLi9wdWJsaWMvaW1nL3BuZ2VnZy5wbmcnXG5cblxuLy8gZXhwb3J0IGNvbnN0IE1BSU5fUEFHRV9TTElERV9RVUVSWSA9IGdxbGBcbi8vICAgcXVlcnkgTUFJTl9QQUdFX1NMSURFX1FVRVJZKCRpZDogSUQhKSB7XG4vLyAgICAgbWFpblBhZ2VTbGlkZShpZDogJGlkKSB7XG4vLyAgICAgICBpbWFnZV8xIHtcbi8vICAgICAgICAgdXJsXG4vLyAgICAgICB9XG4vLyAgICAgICBpbWFnZV8yIHtcbi8vICAgICAgICAgdXJsXG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyBgO1xuXG5jb25zdCBmYWRlSW5SID0ga2V5ZnJhbWVzYFxuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1MCUpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIGA7XG4gIGNvbnN0IGZhZGVJbkwgPSBrZXlmcmFtZXNgXG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1MCUpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIGA7XG5cbmNvbnN0IGFuaW1hdGlvbkwgPSAocHJvcHMpID0+IGNzc2BcbiAgJHtwcm9wcy5hICYmIGZhZGVJbkx9XG5gO1xuY29uc3QgYW5pbWF0aW9uUiA9IChwcm9wcykgPT4gY3NzYFxuICAke3Byb3BzLmEgJiYgZmFkZUluUn1cbmA7XG5cbmNvbnN0IFNsaWRlU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgfVxuICAuaW1hZ2UtMSB7XG4gICAgbGVmdDogMzAlO1xuICAgIHRvcDogOGVtO1xuICAgIGFuaW1hdGlvbjogJHthbmltYXRpb25MfSAxcztcbiAgfVxuICAuaW1hZ2UtMiB7XG4gICAgcmlnaHQ6IDMwJTtcbiAgICB0b3A6IDVlbTtcbiAgICBhbmltYXRpb246ICR7YW5pbWF0aW9uUn0gMXM7XG4gIH1cbmA7XG4gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbGRlKHsgaW5kZXggfSkge1xuXG5jb25zdCBbYW5pbWF0aW9uLCBzZXRBbmltYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KE1BSU5fUEFHRV9TTElERV9RVUVSWSwge1xuICAvLyAgIHZhcmlhYmxlczoge1xuICAvLyAgICAgaWQ6IGluZGV4KzFcbiAgLy8gICB9XG4gIC8vIH0pO1xuICAvLyBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAvLyBpZiAoZXJyb3IpIHJldHVybiA8cD57ZXJyb3IubWVzc2FnZX08L3A+O1xuXG4gIC8vIGNvbnN0IHttYWluUGFnZVNsaWRlfSA9IGRhdGFcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIC8vIHJvdXRlci5yZWxvYWQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICBzZXRUaW1lb3V0KCgpPT4ge30pXG4gICAgcm91dGVyLnJlbG9hZCgpO1xuICAgIHNldEFuaW1hdGlvbih0cnVlKTtcbiAgfSwgW2luZGV4XSk7XG4gIFxuICAvLyBjb25zb2xlLmxvZygncmVuZGVyJyk7XG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8U2xpZGVTdHlsZXMgYT17YW5pbWF0aW9ufT5cbiAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT0naW1hZ2UtMScgc3JjPXttYWluUGFnZVNsaWRlPy5pbWFnZV8xPy51cmx9IC8+XG4gICAgICA8aW1nIGNsYXNzTmFtZT0naW1hZ2UtMicgc3JjPXttYWluUGFnZVNsaWRlPy5pbWFnZV8yPy51cmx9IC8+ICAqL31cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWFnZS0xJyBzcmM9e2ltYWdlMX0gLz5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWFnZS0yJyBzcmM9e2ltYWdlMX0gLz4gXG4gICAgPC9TbGlkZVN0eWxlcz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel/Slide.js\n");

/***/ })

})