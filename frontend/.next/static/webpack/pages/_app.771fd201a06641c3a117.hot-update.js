webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navbar/Nav.js":
/*!**********************************!*\
  !*** ./components/Navbar/Nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/cjs/react.development */ \"./node_modules/react/cjs/react.development.js\");\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cjs_react_development__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var _lib_navState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/navState */ \"./lib/navState.js\");\n/* harmony import */ var _NavDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavDropdown */ \"./components/Navbar/NavDropdown.js\");\n/* harmony import */ var _NavStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavStyles */ \"./components/Navbar/NavStyles.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Search */ \"./components/Navbar/Search.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Navbar/Nav.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Nav(_ref) {\n  _s();\n\n  var offset = _ref.offset;\n\n  var _useNav = Object(_lib_navState__WEBPACK_IMPORTED_MODULE_4__[\"useNav\"])(),\n      navOpen = _useNav.navOpen,\n      toggleNav = _useNav.toggleNav,\n      closeSideNav = _useNav.closeSideNav;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(),\n      width = _useWindowDimensions.width;\n\n  Object(react_cjs_react_development__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (width >= 850) {\n      closeSideNav();\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavStyles__WEBPACK_IMPORTED_MODULE_6__[\"NavStyles\"], {\n      open: navOpen,\n      width: width,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"nav-links\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/\",\n          children: \"Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/test\",\n          children: \"About\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/products\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            title: \"products\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/tools\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            title: \"tools\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/contacts\",\n          children: \"Contact\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/gallery\",\n          children: \"Gallery\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavStyles__WEBPACK_IMPORTED_MODULE_6__[\"NavButtonStyles\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(hamburger_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          hideOutline: false,\n          label: \"Show menu\",\n          toggled: navOpen,\n          toggle: toggleNav\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Search__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      offset: offset\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 8\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Nav, \"cPHCbwQVQ2CWrxeO65BJnaqiKRk=\", false, function () {\n  return [_lib_navState__WEBPACK_IMPORTED_MODULE_4__[\"useNav\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n});\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvTmF2LmpzPzUyYWUiXSwibmFtZXMiOlsiTmF2Iiwib2Zmc2V0IiwidXNlTmF2IiwibmF2T3BlbiIsInRvZ2dsZU5hdiIsImNsb3NlU2lkZU5hdiIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsR0FBVCxPQUF5QjtBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTs7QUFBQSxnQkFDT0MsNERBQU0sRUFEYjtBQUFBLE1BQzlCQyxPQUQ4QixXQUM5QkEsT0FEOEI7QUFBQSxNQUNyQkMsU0FEcUIsV0FDckJBLFNBRHFCO0FBQUEsTUFDVkMsWUFEVSxXQUNWQSxZQURVOztBQUFBLDZCQUVwQkMscUVBQW1CLEVBRkM7QUFBQSxNQUU5QkMsS0FGOEIsd0JBRTlCQSxLQUY4Qjs7QUFJdENDLCtFQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlELEtBQUssSUFBSSxHQUFiLEVBQWtCO0FBQ2hCRixrQkFBWTtBQUNiO0FBQ0YsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsb0RBQUQ7QUFBVyxVQUFJLEVBQUVGLE9BQWpCO0FBQTBCLFdBQUssRUFBRUksS0FBakM7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsV0FBWDtBQUF1QixrQkFBUSxNQUEvQjtBQUFBLGlDQUNFLHFFQUFDLG9EQUFEO0FBQWEsaUJBQUssRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQU1FLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFFBQVg7QUFBb0Isa0JBQVEsTUFBNUI7QUFBQSxpQ0FDRSxxRUFBQyxvREFBRDtBQUFhLGlCQUFLLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsZUFTRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGLGVBVUUscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQWFFLHFFQUFDLDBEQUFEO0FBQUEsK0JBQ0UscUVBQUMsdURBQUQ7QUFDRSxxQkFBVyxFQUFFLEtBRGY7QUFFRSxlQUFLLEVBQUMsV0FGUjtBQUdFLGlCQUFPLEVBQUVKLE9BSFg7QUFJRSxnQkFBTSxFQUFFQztBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUF1QkcscUVBQUMsK0NBQUQ7QUFBUSxZQUFNLEVBQUVIO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2Qkg7QUFBQSxrQkFERjtBQTJCRDs7R0FyQ3VCRCxHO1VBQ3VCRSxvRCxFQUMzQkksNkQ7OztLQUZJTixHIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZiYXIvTmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gJ2hhbWJ1cmdlci1yZWFjdCc7XG5pbXBvcnQgeyB1c2VOYXYgfSBmcm9tICcuLi8uLi9saWIvbmF2U3RhdGUnO1xuXG5pbXBvcnQgTmF2RHJvcGRvd24gZnJvbSAnLi9OYXZEcm9wZG93bic7XG5pbXBvcnQgeyBOYXZTdHlsZXMsIE5hdkJ1dHRvblN0eWxlcyB9IGZyb20gJy4vTmF2U3R5bGVzJztcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gJy4uLy4uL2xpYi93aW5kb3dEaW1lbnNpb25zJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoeyBvZmZzZXQgfSkge1xuICBjb25zdCB7IG5hdk9wZW4sIHRvZ2dsZU5hdiwgY2xvc2VTaWRlTmF2IH0gPSB1c2VOYXYoKTtcbiAgY29uc3QgeyB3aWR0aCB9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdpZHRoID49IDg1MCkge1xuICAgICAgY2xvc2VTaWRlTmF2KCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdlN0eWxlcyBvcGVuPXtuYXZPcGVufSB3aWR0aD17d2lkdGh9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2LWxpbmtzJz5cbiAgICAgICAgICA8TGluayBocmVmPScvJz5Ib21lPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy90ZXN0Jz5BYm91dDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvcHJvZHVjdHMnIHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPSdwcm9kdWN0cycgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL3Rvb2xzJyBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT0ndG9vbHMnIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jb250YWN0cyc+Q29udGFjdDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvZ2FsbGVyeSc+R2FsbGVyeTwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxOYXZCdXR0b25TdHlsZXM+XG4gICAgICAgICAgPEhhbWJ1cmdlclxuICAgICAgICAgICAgaGlkZU91dGxpbmU9e2ZhbHNlfVxuICAgICAgICAgICAgbGFiZWw9J1Nob3cgbWVudSdcbiAgICAgICAgICAgIHRvZ2dsZWQ9e25hdk9wZW59XG4gICAgICAgICAgICB0b2dnbGU9e3RvZ2dsZU5hdn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L05hdkJ1dHRvblN0eWxlcz5cbiAgICAgIDwvTmF2U3R5bGVzPlxuICAgICAgezxTZWFyY2ggb2Zmc2V0PXtvZmZzZXR9IC8+fVxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar/Nav.js\n");

/***/ })

})