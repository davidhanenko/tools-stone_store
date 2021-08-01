webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll-parallax */ \"./node_modules/react-scroll-parallax/cjs/index.js\");\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _public_img_bg_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/img/bg_3.jpg */ \"./public/img/bg_3.jpg\");\n/* harmony import */ var _public_img_bg_3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_img_bg_3_jpg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_img_bg_2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/img/bg_2.jpg */ \"./public/img/bg_2.jpg\");\n/* harmony import */ var _public_img_bg_2_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_img_bg_2_jpg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_img_img_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/img/img_1.png */ \"./public/img/img_1.png\");\n/* harmony import */ var _public_img_img_1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_img_1_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_img_img_2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/img/img_2.png */ \"./public/img/img_2.png\");\n/* harmony import */ var _public_img_img_2_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_img_2_png__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_img_img_3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/img/img_3.png */ \"./public/img/img_3.png\");\n/* harmony import */ var _public_img_img_3_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_img_img_3_png__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _Carousel_Carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Carousel/Carousel */ \"./components/Carousel/Carousel.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Main.js\";\n\n\n\n\n\n\n\n\n\n\n\nvar MainStyles = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div.withConfig({\n  displayName: \"Main__MainStyles\",\n  componentId: \"sc-11s99up-0\"\n})([\"\"]);\n_c = MainStyles;\nvar SLIDE_COUNT = 2;\nvar slides = Array.from(Array(SLIDE_COUNT).keys());\nfunction Main() {\n  var media = [{\n    bg_1: _public_img_bg_3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,\n    img_1: _public_img_img_1_png__WEBPACK_IMPORTED_MODULE_7___default.a,\n    img_2: _public_img_img_2_png__WEBPACK_IMPORTED_MODULE_8___default.a\n  }, {\n    bg_2: _public_img_bg_2_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,\n    img_2: _public_img_img_2_png__WEBPACK_IMPORTED_MODULE_8___default.a,\n    img_3: _public_img_img_3_png__WEBPACK_IMPORTED_MODULE_9___default.a\n  }]; // func from Embla Carousel docs\n\n  var mediaByIndex = function mediaByIndex(index) {\n    return media[index % media.length];\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MainStyles, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__[\"Parallax\"], {\n      y: [-80, 50],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        slides: slides,\n        mediaByIndex: mediaByIndex\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, this);\n}\n_c2 = Main;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MainStyles\");\n$RefreshReg$(_c2, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluLmpzPzg2NjAiXSwibmFtZXMiOlsiTWFpblN0eWxlcyIsInN0eWxlZCIsImRpdiIsIlNMSURFX0NPVU5UIiwic2xpZGVzIiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsIk1haW4iLCJtZWRpYSIsImJnXzEiLCJpbWdfMSIsImltZ18yIiwiYmdfMiIsImltZ18zIiwibWVkaWFCeUluZGV4IiwiaW5kZXgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLDBEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBaEI7S0FBTUYsVTtBQUVOLElBQU1HLFdBQVcsR0FBRyxDQUFwQjtBQUVBLElBQU1DLE1BQU0sR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQ0YsV0FBRCxDQUFMLENBQW1CSSxJQUFuQixFQUFYLENBQWY7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQzdCLE1BQU1DLEtBQUssR0FBRyxDQUNaO0FBQUVDLFFBQUksRUFBRUEsMkRBQVI7QUFBY0MsU0FBSyxFQUFFQSw0REFBckI7QUFBNEJDLFNBQUssRUFBRUEsNERBQUtBO0FBQXhDLEdBRFksRUFFWjtBQUFFQyxRQUFJLEVBQUVBLDJEQUFSO0FBQWNELFNBQUssRUFBRUEsNERBQXJCO0FBQTRCRSxTQUFLLEVBQUVBLDREQUFLQTtBQUF4QyxHQUZZLENBQWQsQ0FENkIsQ0FNN0I7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSztBQUFBLFdBQUlQLEtBQUssQ0FBQ08sS0FBSyxHQUFHUCxLQUFLLENBQUNRLE1BQWYsQ0FBVDtBQUFBLEdBQTFCOztBQUVBLHNCQUNFLHFFQUFDLFVBQUQ7QUFBQSwyQkFDRSxxRUFBQyw4REFBRDtBQUFVLE9BQUMsRUFBRSxDQUFDLENBQUMsRUFBRixFQUFNLEVBQU4sQ0FBYjtBQUFBLDZCQUNFLHFFQUFDLDJEQUFEO0FBQWUsY0FBTSxFQUFFYixNQUF2QjtBQUErQixvQkFBWSxFQUFFVztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEO01BdkJ1QlAsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1zY3JvbGwtcGFyYWxsYXgnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgYmdfMSBmcm9tICcuLi9wdWJsaWMvaW1nL2JnXzMuanBnJztcbmltcG9ydCBiZ18yIGZyb20gJy4uL3B1YmxpYy9pbWcvYmdfMi5qcGcnO1xuaW1wb3J0IGltZ18xIGZyb20gJy4uL3B1YmxpYy9pbWcvaW1nXzEucG5nJztcbmltcG9ydCBpbWdfMiBmcm9tICcuLi9wdWJsaWMvaW1nL2ltZ18yLnBuZyc7XG5pbXBvcnQgaW1nXzMgZnJvbSAnLi4vcHVibGljL2ltZy9pbWdfMy5wbmcnO1xuaW1wb3J0IEVtYmxhQ2Fyb3VzZWwgZnJvbSAnLi9DYXJvdXNlbC9DYXJvdXNlbCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgTWFpblN0eWxlcyA9IHN0eWxlZC5kaXZgYDtcblxuY29uc3QgU0xJREVfQ09VTlQgPSAyO1xuXG5jb25zdCBzbGlkZXMgPSBBcnJheS5mcm9tKEFycmF5KFNMSURFX0NPVU5UKS5rZXlzKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xuICBjb25zdCBtZWRpYSA9IFtcbiAgICB7IGJnXzE6IGJnXzEsIGltZ18xOiBpbWdfMSwgaW1nXzI6IGltZ18yIH0sXG4gICAgeyBiZ18yOiBiZ18yLCBpbWdfMjogaW1nXzIsIGltZ18zOiBpbWdfMyB9LFxuICBdO1xuXG4gIC8vIGZ1bmMgZnJvbSBFbWJsYSBDYXJvdXNlbCBkb2NzXG4gIGNvbnN0IG1lZGlhQnlJbmRleCA9IGluZGV4ID0+IG1lZGlhW2luZGV4ICUgbWVkaWEubGVuZ3RoXTtcblxuICByZXR1cm4gKFxuICAgIDxNYWluU3R5bGVzPlxuICAgICAgPFBhcmFsbGF4IHk9e1stODAsIDUwXX0+XG4gICAgICAgIDxFbWJsYUNhcm91c2VsIHNsaWRlcz17c2xpZGVzfSBtZWRpYUJ5SW5kZXg9e21lZGlhQnlJbmRleH0gLz5cbiAgICAgIDwvUGFyYWxsYXg+XG4gICAgICB7LyogPFBhcmFsbGF4IHk9e1stMjAsIDIwXX0+XG4gICAgICAgXG4gICAgICA8L1BhcmFsbGF4PiAqL31cblxuICAgICAgey8qIDxQYXJhbGxheCB5PXtbMCwgMF19PlxuICAgICAgICA8RW1ibGFDYXJvdXNlbCBzbGlkZXM9e3NsaWRlc30gbWVkaWFCeUluZGV4PXttZWRpYUJ5SW5kZXh9IC8+XG4gICAgICA8L1BhcmFsbGF4PiAqL31cbiAgICA8L01haW5TdHlsZXM+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Main.js\n");

/***/ })

})