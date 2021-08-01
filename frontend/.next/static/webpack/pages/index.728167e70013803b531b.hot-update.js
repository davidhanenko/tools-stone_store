webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll-parallax */ \"./node_modules/react-scroll-parallax/cjs/index.js\");\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _public_img_bg_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/img/bg_3.jpg */ \"./public/img/bg_3.jpg\");\n/* harmony import */ var _public_img_bg_3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_bg_3_jpg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_img_bg_2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/img/bg_2.jpg */ \"./public/img/bg_2.jpg\");\n/* harmony import */ var _public_img_bg_2_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_bg_2_jpg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_img_img_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/img/img_1.png */ \"./public/img/img_1.png\");\n/* harmony import */ var _public_img_img_1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_img_1_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_img_img_2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/img/img_2.png */ \"./public/img/img_2.png\");\n/* harmony import */ var _public_img_img_2_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_img_2_png__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_img_img_3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/img/img_3.png */ \"./public/img/img_3.png\");\n/* harmony import */ var _public_img_img_3_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_img_img_3_png__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _Carousel_Carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Carousel/Carousel */ \"./components/Carousel/Carousel.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Main.js\";\n\n\n\n\n\n\n\n\n\n\n\nvar MainStyles = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div.withConfig({\n  displayName: \"Main__MainStyles\",\n  componentId: \"sc-11s99up-0\"\n})([\"\"]);\n_c = MainStyles;\nvar SLIDE_COUNT = 2;\nvar slides = Array.from(Array(SLIDE_COUNT).keys());\nfunction Main() {\n  var media = [{\n    bg: _public_img_bg_3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,\n    img1: _public_img_img_1_png__WEBPACK_IMPORTED_MODULE_7___default.a,\n    img2: _public_img_img_2_png__WEBPACK_IMPORTED_MODULE_8___default.a,\n    btn: 'see products',\n    text1: 'tools and '\n  }, {\n    bg: _public_img_bg_2_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,\n    img1: _public_img_img_2_png__WEBPACK_IMPORTED_MODULE_8___default.a,\n    img2: _public_img_img_3_png__WEBPACK_IMPORTED_MODULE_9___default.a,\n    btn: 'view more'\n  }]; // func from Embla Carousel docs\n\n  var mediaByIndex = function mediaByIndex(index) {\n    return media[index % media.length];\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MainStyles, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__[\"Parallax\"], {\n      y: [-80, 50],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        slides: slides,\n        mediaByIndex: mediaByIndex\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, this);\n}\n_c2 = Main;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MainStyles\");\n$RefreshReg$(_c2, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluLmpzPzg2NjAiXSwibmFtZXMiOlsiTWFpblN0eWxlcyIsInN0eWxlZCIsImRpdiIsIlNMSURFX0NPVU5UIiwic2xpZGVzIiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsIk1haW4iLCJtZWRpYSIsImJnIiwiYmdfMSIsImltZzEiLCJpbWdfMSIsImltZzIiLCJpbWdfMiIsImJ0biIsInRleHQxIiwiYmdfMiIsImltZ18zIiwibWVkaWFCeUluZGV4IiwiaW5kZXgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLDBEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBaEI7S0FBTUYsVTtBQUVOLElBQU1HLFdBQVcsR0FBRyxDQUFwQjtBQUVBLElBQU1DLE1BQU0sR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQ0YsV0FBRCxDQUFMLENBQW1CSSxJQUFuQixFQUFYLENBQWY7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQzdCLE1BQU1DLEtBQUssR0FBRyxDQUNaO0FBQUVDLE1BQUUsRUFBRUMsMkRBQU47QUFBWUMsUUFBSSxFQUFFQyw0REFBbEI7QUFBeUJDLFFBQUksRUFBRUMsNERBQS9CO0FBQXNDQyxPQUFHLEVBQUUsY0FBM0M7QUFBMkRDLFNBQUssRUFBRTtBQUFsRSxHQURZLEVBRVo7QUFBRVAsTUFBRSxFQUFFUSwyREFBTjtBQUFZTixRQUFJLEVBQUVHLDREQUFsQjtBQUF5QkQsUUFBSSxFQUFFSyw0REFBL0I7QUFBc0NILE9BQUcsRUFBRTtBQUEzQyxHQUZZLENBQWQsQ0FENkIsQ0FNN0I7O0FBQ0EsTUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSztBQUFBLFdBQUlaLEtBQUssQ0FBQ1ksS0FBSyxHQUFHWixLQUFLLENBQUNhLE1BQWYsQ0FBVDtBQUFBLEdBQTFCOztBQUVBLHNCQUNFLHFFQUFDLFVBQUQ7QUFBQSwyQkFDRSxxRUFBQyw4REFBRDtBQUFVLE9BQUMsRUFBRSxDQUFDLENBQUMsRUFBRixFQUFNLEVBQU4sQ0FBYjtBQUFBLDZCQUNFLHFFQUFDLDJEQUFEO0FBQWUsY0FBTSxFQUFFbEIsTUFBdkI7QUFBK0Isb0JBQVksRUFBRWdCO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0Q7TUF2QnVCWixJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBiZ18xIGZyb20gJy4uL3B1YmxpYy9pbWcvYmdfMy5qcGcnO1xuaW1wb3J0IGJnXzIgZnJvbSAnLi4vcHVibGljL2ltZy9iZ18yLmpwZyc7XG5pbXBvcnQgaW1nXzEgZnJvbSAnLi4vcHVibGljL2ltZy9pbWdfMS5wbmcnO1xuaW1wb3J0IGltZ18yIGZyb20gJy4uL3B1YmxpYy9pbWcvaW1nXzIucG5nJztcbmltcG9ydCBpbWdfMyBmcm9tICcuLi9wdWJsaWMvaW1nL2ltZ18zLnBuZyc7XG5pbXBvcnQgRW1ibGFDYXJvdXNlbCBmcm9tICcuL0Nhcm91c2VsL0Nhcm91c2VsJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBNYWluU3R5bGVzID0gc3R5bGVkLmRpdmBgO1xuXG5jb25zdCBTTElERV9DT1VOVCA9IDI7XG5cbmNvbnN0IHNsaWRlcyA9IEFycmF5LmZyb20oQXJyYXkoU0xJREVfQ09VTlQpLmtleXMoKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IG1lZGlhID0gW1xuICAgIHsgYmc6IGJnXzEsIGltZzE6IGltZ18xLCBpbWcyOiBpbWdfMiwgYnRuOiAnc2VlIHByb2R1Y3RzJywgdGV4dDE6ICd0b29scyBhbmQgJ30sXG4gICAgeyBiZzogYmdfMiwgaW1nMTogaW1nXzIsIGltZzI6IGltZ18zLCBidG46ICd2aWV3IG1vcmUnIH0sXG4gIF07XG5cbiAgLy8gZnVuYyBmcm9tIEVtYmxhIENhcm91c2VsIGRvY3NcbiAgY29uc3QgbWVkaWFCeUluZGV4ID0gaW5kZXggPT4gbWVkaWFbaW5kZXggJSBtZWRpYS5sZW5ndGhdO1xuXG4gIHJldHVybiAoXG4gICAgPE1haW5TdHlsZXM+XG4gICAgICA8UGFyYWxsYXggeT17Wy04MCwgNTBdfT5cbiAgICAgICAgPEVtYmxhQ2Fyb3VzZWwgc2xpZGVzPXtzbGlkZXN9IG1lZGlhQnlJbmRleD17bWVkaWFCeUluZGV4fSAvPlxuICAgICAgPC9QYXJhbGxheD5cbiAgICAgIHsvKiA8UGFyYWxsYXggeT17Wy0yMCwgMjBdfT5cbiAgICAgICBcbiAgICAgIDwvUGFyYWxsYXg+ICovfVxuXG4gICAgICB7LyogPFBhcmFsbGF4IHk9e1swLCAwXX0+XG4gICAgICAgIDxFbWJsYUNhcm91c2VsIHNsaWRlcz17c2xpZGVzfSBtZWRpYUJ5SW5kZXg9e21lZGlhQnlJbmRleH0gLz5cbiAgICAgIDwvUGFyYWxsYXg+ICovfVxuICAgIDwvTWFpblN0eWxlcz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Main.js\n");

/***/ })

})