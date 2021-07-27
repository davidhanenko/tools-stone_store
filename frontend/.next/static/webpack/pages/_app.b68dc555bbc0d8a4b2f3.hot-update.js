webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navbar/Search.js":
/*!*************************************!*\
  !*** ./components/Navbar/Search.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Search; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SearchStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchStyles */ \"./components/Navbar/SearchStyles.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/cjs/react.development */ \"./node_modules/react/cjs/react.development.js\");\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Navbar/Search.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Search(_ref) {\n  _s();\n\n  var offset = _ref.offset;\n\n  var _useState = useState(),\n      _useState2 = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      scroll = _useState2[0],\n      setSctoll = _useState2[1];\n\n  function handleScroll() {\n    console.log('scr');\n  }\n\n  Object(react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    window.addEventListener('scroll', handleScroll);\n    return function () {\n      return window.removeEventListener('scroll', handleScroll);\n    };\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_SearchStyles__WEBPACK_IMPORTED_MODULE_2__[\"SearchStyles\"], {\n    className: offset > 90 && offset < 190 ? 'search-scrolled' : '',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdSearch\"], {\n      className: \"search-icon\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n      type: \"text\",\n      placeholder: \"Search...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Search, \"3apMpysCthVZ3oLa8QRJ8jfenqw=\");\n\n_c = Search;\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvU2VhcmNoLmpzPzFhMjciXSwibmFtZXMiOlsiU2VhcmNoIiwib2Zmc2V0IiwidXNlU3RhdGUiLCJzY3JvbGwiLCJzZXRTY3RvbGwiLCJoYW5kbGVTY3JvbGwiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLE1BQVQsT0FBMEI7QUFBQTs7QUFBQSxNQUFUQyxNQUFTLFFBQVRBLE1BQVM7O0FBQUEsa0JBQ2JDLFFBQVEsRUFESztBQUFBO0FBQUEsTUFDbENDLE1BRGtDO0FBQUEsTUFDMUJDLFNBRDBCOztBQUd6QyxXQUFTQyxZQUFULEdBQXdCO0FBQ3JCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBQ0E7O0FBRUhDLCtFQUFTLENBQUMsWUFBTTtBQUNkQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDTCxZQUFsQztBQUNBLFdBQU87QUFBQSxhQUFNSSxNQUFNLENBQUNFLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDTixZQUFyQyxDQUFOO0FBQUEsS0FBUDtBQUNELEdBSFEsQ0FBVDtBQUtFLHNCQUNFLHFFQUFDLDBEQUFEO0FBQWMsYUFBUyxFQUFFSixNQUFNLEdBQUcsRUFBVCxJQUFlQSxNQUFNLEdBQUcsR0FBeEIsR0FBOEIsaUJBQTlCLEdBQWtELEVBQTNFO0FBQUEsNEJBQ0UscUVBQUMsdURBQUQ7QUFBVSxlQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBVyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztHQWxCdUJELE07O0tBQUFBLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci9TZWFyY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hTdHlsZXMgfSBmcm9tICcuL1NlYXJjaFN0eWxlcyc7XG5pbXBvcnQgeyBNZFNlYXJjaCB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKHtvZmZzZXR9KSB7XG5jb25zdCBbc2Nyb2xsLCBzZXRTY3RvbGxdID0gdXNlU3RhdGUoKVxuXG5mdW5jdGlvbiBoYW5kbGVTY3JvbGwoKSB7XG4gICBjb25zb2xlLmxvZygnc2NyJyk7XG4gIH1cblxudXNlRWZmZWN0KCgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbn0pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlYXJjaFN0eWxlcyBjbGFzc05hbWU9e29mZnNldCA+IDkwICYmIG9mZnNldCA8IDE5MCA/ICdzZWFyY2gtc2Nyb2xsZWQnIDogJyd9PlxuICAgICAgPE1kU2VhcmNoIGNsYXNzTmFtZT1cInNlYXJjaC1pY29uXCIgLz5cbiAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nU2VhcmNoLi4uJyAvPlxuICAgIDwvU2VhcmNoU3R5bGVzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar/Search.js\n");

/***/ })

})