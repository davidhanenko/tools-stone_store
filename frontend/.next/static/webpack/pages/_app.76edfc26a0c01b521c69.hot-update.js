webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navbar/Search.js":
/*!*************************************!*\
  !*** ./components/Navbar/Search.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Search; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SearchStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchStyles */ \"./components/Navbar/SearchStyles.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/cjs/react.development */ \"./node_modules/react/cjs/react.development.js\");\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Navbar/Search.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Search(_ref) {\n  _s();\n\n  var offset = _ref.offset;\n\n  var _useState = useState(false),\n      _useState2 = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      scroll = _useState2[0],\n      setSctoll = _useState2[1];\n\n  function handleScroll() {\n    setSctoll(true);\n  }\n\n  Object(react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    window.addEventListener('scroll', handleScroll);\n    return function () {\n      return window.removeEventListener('scroll', handleScroll);\n    };\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_SearchStyles__WEBPACK_IMPORTED_MODULE_2__[\"SearchStyles\"], {\n    className: offset > 90 && offset < 190 ? 'search-scrolled' : '',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdSearch\"], {\n      className: \"search-icon\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n      type: \"text\",\n      placeholder: \"Search...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Search, \"UDsTy9TzdqowL2A6KND4NBmY1eM=\");\n\n_c = Search;\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvU2VhcmNoLmpzPzFhMjciXSwibmFtZXMiOlsiU2VhcmNoIiwib2Zmc2V0IiwidXNlU3RhdGUiLCJzY3JvbGwiLCJzZXRTY3RvbGwiLCJoYW5kbGVTY3JvbGwiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUE0QjtBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTs7QUFBQSxrQkFDYkMsUUFBUSxDQUFDLEtBQUQsQ0FESztBQUFBO0FBQUEsTUFDbENDLE1BRGtDO0FBQUEsTUFDMUJDLFNBRDBCOztBQUd6QyxXQUFTQyxZQUFULEdBQXdCO0FBQ3RCRCxhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0Q7O0FBRURFLCtFQUFTLENBQUMsWUFBTTtBQUNkQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSCxZQUFsQztBQUNBLFdBQU87QUFBQSxhQUFNRSxNQUFNLENBQUNFLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDSixZQUFyQyxDQUFOO0FBQUEsS0FBUDtBQUNELEdBSFEsQ0FBVDtBQUtBLHNCQUNFLHFFQUFDLDBEQUFEO0FBQ0UsYUFBUyxFQUFFSixNQUFNLEdBQUcsRUFBVCxJQUFlQSxNQUFNLEdBQUcsR0FBeEIsR0FBOEIsaUJBQTlCLEdBQWtELEVBRC9EO0FBQUEsNEJBR0UscUVBQUMsdURBQUQ7QUFBVSxlQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBVyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztHQXBCdUJELE07O0tBQUFBLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci9TZWFyY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hTdHlsZXMgfSBmcm9tICcuL1NlYXJjaFN0eWxlcyc7XG5pbXBvcnQgeyBNZFNlYXJjaCB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCh7IG9mZnNldCB9KSB7XG4gIGNvbnN0IFtzY3JvbGwsIHNldFNjdG9sbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xuICAgIHNldFNjdG9sbCh0cnVlKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxTZWFyY2hTdHlsZXNcbiAgICAgIGNsYXNzTmFtZT17b2Zmc2V0ID4gOTAgJiYgb2Zmc2V0IDwgMTkwID8gJ3NlYXJjaC1zY3JvbGxlZCcgOiAnJ31cbiAgICA+XG4gICAgICA8TWRTZWFyY2ggY2xhc3NOYW1lPSdzZWFyY2gtaWNvbicgLz5cbiAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nU2VhcmNoLi4uJyAvPlxuICAgIDwvU2VhcmNoU3R5bGVzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar/Search.js\n");

/***/ })

})