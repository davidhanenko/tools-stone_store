webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Carousel/Slide.js":
/*!**************************************!*\
  !*** ./components/Carousel/Slide.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Silde; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Carousel/Slide.js\",\n    _s = $RefreshSig$();\n\n\n\n\nvar fadeInR = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"keyframes\"])([\"0%{transform:translate(50%);opacity:0;}100%{transform:translate(0%);opacity:1;}\"]);\nvar fadeInL = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"keyframes\"])([\"0%{opacity:0;transform:translate(-50%);}100%{transform:translate(0%);opacity:1;left:20%;}\"]);\n\nvar animationL = function animationL(props) {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], props.a && fadeInL);\n};\n\nvar animationR = function animationR(props) {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"\", \"\"], props.a && fadeInR);\n};\n\nvar SlideStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Slide__SlideStyles\",\n  componentId: \"sc-1y17cjl-0\"\n})([\"position:relative;height:100%;.image-1{display:inline-block;position:absolute;left:20%;top:10rem;\", \";max-width:300px;max-height:300px;@media (max-width:601px){max-width:40%;max-height:40%;}}.image-2{display:inline-block;position:absolute;right:20%;top:5em;max-width:300px;max-height:300px;@media (max-width:601px){max-width:40%;max-height:40%;}}\"], function (props) {\n  return props.a && \"transform: translate(-50%); transition: 1.3s\";\n});\n_c = SlideStyles;\nfunction Silde(_ref) {\n  _s();\n\n  var mediaByIndex = _ref.mediaByIndex,\n      index = _ref.index,\n      a = _ref.a;\n  // const [animation, setAnimation] = useState(true);\n  var navA = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])({\n    navA: true\n  });\n  console.log('render'); // useEffect(() => {\n  //   setAnimation(false);\n  //   // setTimeout(() => {\n  //   //   setAnimation(true);\n  //   // }, 1200);\n  // },[animation]);\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    a = a;\n  });\n  console.log(a);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SlideStyles, {\n    a: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      className: \"embla__slide__img\",\n      src: mediaByIndex(index)[0],\n      objectFit: \"cover\",\n      layout: \"fill\",\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"image-1\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        width: 300,\n        height: 300,\n        src: mediaByIndex(index)[1]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, this)\n    }, a + 1, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"image-2\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        width: 300,\n        height: 300,\n        src: mediaByIndex(index)[2]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, this)\n    }, a, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Silde, \"Xkcl3Bq1w+/c3TpaxDx6y0E1LfI=\");\n\n_c2 = Silde;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SlideStyles\");\n$RefreshReg$(_c2, \"Silde\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC9TbGlkZS5qcz8yYjMwIl0sIm5hbWVzIjpbImZhZGVJblIiLCJrZXlmcmFtZXMiLCJmYWRlSW5MIiwiYW5pbWF0aW9uTCIsInByb3BzIiwiY3NzIiwiYSIsImFuaW1hdGlvblIiLCJTbGlkZVN0eWxlcyIsInN0eWxlZCIsImRpdiIsIlNpbGRlIiwibWVkaWFCeUluZGV4IiwiaW5kZXgiLCJuYXZBIiwidXNlUmVmIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLG1FQUFILHFGQUFiO0FBVUEsSUFBTUMsT0FBTyxHQUFHRCxtRUFBSCwrRkFBYjs7QUFZQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxLQUFLO0FBQUEsU0FBSUMsNkRBQUosV0FDcEJELEtBQUssQ0FBQ0UsQ0FBTixJQUFXSixPQURTO0FBQUEsQ0FBeEI7O0FBR0EsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUgsS0FBSztBQUFBLFNBQUlDLDZEQUFKLFdBQ3BCRCxLQUFLLENBQUNFLENBQU4sSUFBV04sT0FEUztBQUFBLENBQXhCOztBQUlBLElBQU1RLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtV0FVWCxVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxDQUFOLGtEQUFKO0FBQUEsQ0FWTSxDQUFqQjtLQUFNRSxXO0FBbUNTLFNBQVNHLEtBQVQsT0FBMkM7QUFBQTs7QUFBQSxNQUExQkMsWUFBMEIsUUFBMUJBLFlBQTBCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQUEsTUFBTFAsQ0FBSyxRQUFMQSxDQUFLO0FBQ3hEO0FBRUEsTUFBTVEsSUFBSSxHQUFHQyxvREFBTSxDQUFDO0FBQ2xCRCxRQUFJLEVBQUU7QUFEWSxHQUFELENBQW5CO0FBSUFFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFQd0QsQ0FTeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVDQyx5REFBUyxDQUFDLFlBQU07QUFDZlosS0FBQyxHQUFHQSxDQUFKO0FBQ0EsR0FGUSxDQUFUO0FBSUhVLFNBQU8sQ0FBQ0MsR0FBUixDQUFZWCxDQUFaO0FBQ0Usc0JBQ0UscUVBQUMsV0FBRDtBQUFhLEtBQUMsTUFBZDtBQUFBLDRCQUNFLHFFQUFDLGlEQUFEO0FBQ0UsZUFBUyxFQUFDLG1CQURaO0FBRUUsU0FBRyxFQUFFTSxZQUFZLENBQUNDLEtBQUQsQ0FBWixDQUFvQixDQUFwQixDQUZQO0FBR0UsZUFBUyxFQUFDLE9BSFo7QUFJRSxZQUFNLEVBQUMsTUFKVDtBQUtFLFNBQUcsRUFBQztBQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVFFO0FBQWUsZUFBUyxFQUFDLFNBQXpCO0FBQUEsNkJBQ0UscUVBQUMsaURBQUQ7QUFBTyxhQUFLLEVBQUUsR0FBZDtBQUFtQixjQUFNLEVBQUUsR0FBM0I7QUFBZ0MsV0FBRyxFQUFFRCxZQUFZLENBQUNDLEtBQUQsQ0FBWixDQUFvQixDQUFwQjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsT0FBVVAsQ0FBQyxHQUFDLENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBV0U7QUFBYSxlQUFTLEVBQUMsU0FBdkI7QUFBQSw2QkFDRSxxRUFBQyxpREFBRDtBQUFPLGFBQUssRUFBRSxHQUFkO0FBQW1CLGNBQU0sRUFBRSxHQUEzQjtBQUFnQyxXQUFHLEVBQUVNLFlBQVksQ0FBQ0MsS0FBRCxDQUFaLENBQW9CLENBQXBCO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFVUCxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDs7R0F0Q3VCSyxLOztNQUFBQSxLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJvdXNlbC9TbGlkZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzLCBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmNvbnN0IGZhZGVJblIgPSBrZXlmcmFtZXNgXG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICBgO1xuY29uc3QgZmFkZUluTCA9IGtleWZyYW1lc2BcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGxlZnQ6IDIwJTtcbiAgICB9XG4gIGA7XG5cbmNvbnN0IGFuaW1hdGlvbkwgPSBwcm9wcyA9PiBjc3NgXG4gICR7cHJvcHMuYSAmJiBmYWRlSW5MfVxuYDtcbmNvbnN0IGFuaW1hdGlvblIgPSBwcm9wcyA9PiBjc3NgXG4gICR7cHJvcHMuYSAmJiBmYWRlSW5SfVxuYDtcblxuY29uc3QgU2xpZGVTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcblxuICAuaW1hZ2UtMSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyMCU7XG4gICAgdG9wOiAxMHJlbTtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuYSAmJiBgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7IHRyYW5zaXRpb246IDEuM3NgfTtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDFweCkge1xuICAgICAgbWF4LXdpZHRoOiA0MCU7XG4gICAgICBtYXgtaGVpZ2h0OiA0MCU7XG4gICAgfVxuICB9XG4gIC5pbWFnZS0yIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMCU7XG4gICAgdG9wOiA1ZW07XG4gICAgLyogJHtwcm9wcyA9PiBwcm9wcy5hICYmIGBhbmltYXRpb246IGZhZGVJblIgMS4zc2B9O1xuICAgICAqL1xuXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAxcHgpIHtcbiAgICAgIG1heC13aWR0aDogNDAlO1xuICAgICAgbWF4LWhlaWdodDogNDAlO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lsZGUoeyBtZWRpYUJ5SW5kZXgsIGluZGV4LCBhIH0pIHtcbiAgLy8gY29uc3QgW2FuaW1hdGlvbiwgc2V0QW5pbWF0aW9uXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IG5hdkEgPSB1c2VSZWYoe1xuICAgIG5hdkE6IHRydWUsXG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKCdyZW5kZXInKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHNldEFuaW1hdGlvbihmYWxzZSk7XG4gIC8vICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgLy8gICBzZXRBbmltYXRpb24odHJ1ZSk7XG4gIC8vICAgLy8gfSwgMTIwMCk7XG4gIC8vIH0sW2FuaW1hdGlvbl0pO1xuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGEgPSBhO1xuICAgfSk7XG5cbmNvbnNvbGUubG9nKGEpO1xuICByZXR1cm4gKFxuICAgIDxTbGlkZVN0eWxlcyBhPlxuICAgICAgPEltYWdlXG4gICAgICAgIGNsYXNzTmFtZT0nZW1ibGFfX3NsaWRlX19pbWcnXG4gICAgICAgIHNyYz17bWVkaWFCeUluZGV4KGluZGV4KVswXX1cbiAgICAgICAgb2JqZWN0Rml0PSdjb3ZlcidcbiAgICAgICAgbGF5b3V0PSdmaWxsJ1xuICAgICAgICBhbHQ9JydcbiAgICAgIC8+XG4gICAgICA8ZGl2IGtleT17YSsxfSBjbGFzc05hbWU9J2ltYWdlLTEnPlxuICAgICAgICA8SW1hZ2Ugd2lkdGg9ezMwMH0gaGVpZ2h0PXszMDB9IHNyYz17bWVkaWFCeUluZGV4KGluZGV4KVsxXX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBrZXk9e2F9IGNsYXNzTmFtZT0naW1hZ2UtMic+XG4gICAgICAgIDxJbWFnZSB3aWR0aD17MzAwfSBoZWlnaHQ9ezMwMH0gc3JjPXttZWRpYUJ5SW5kZXgoaW5kZXgpWzJdfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9TbGlkZVN0eWxlcz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel/Slide.js\n");

/***/ })

})