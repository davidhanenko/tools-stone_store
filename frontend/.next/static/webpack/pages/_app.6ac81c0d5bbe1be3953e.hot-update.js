webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navbar/Nav.js":
/*!**********************************!*\
  !*** ./components/Navbar/Nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/cjs/react.development */ \"./node_modules/react/cjs/react.development.js\");\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cjs_react_development__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var _lib_navState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/navState */ \"./lib/navState.js\");\n/* harmony import */ var _NavDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavDropdown */ \"./components/Navbar/NavDropdown.js\");\n/* harmony import */ var _NavStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavStyles */ \"./components/Navbar/NavStyles.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Search */ \"./components/Navbar/Search.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Navbar/Nav.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Nav() {\n  _s();\n\n  var _useNav = Object(_lib_navState__WEBPACK_IMPORTED_MODULE_4__[\"useNav\"])(),\n      navOpen = _useNav.navOpen,\n      toggleNav = _useNav.toggleNav,\n      closeSideNav = _useNav.closeSideNav;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(),\n      width = _useWindowDimensions.width;\n\n  Object(react_cjs_react_development__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (width >= 850) {\n      closeSideNav();\n    }\n  }, [width]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavStyles__WEBPACK_IMPORTED_MODULE_6__[\"NavStyles\"], {\n      open: navOpen,\n      width: width,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"nav-links\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/\",\n          onClick: close,\n          children: \"Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/test\",\n          children: \"About\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/products\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            title: \"products\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/tools\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            title: \"tools\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/contacts\",\n          children: \"Contact\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/gallery\",\n          children: \"Gallery\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavStyles__WEBPACK_IMPORTED_MODULE_6__[\"NavButtonStyles\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(hamburger_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          hideOutline: false,\n          label: \"Show menu\",\n          toggled: navOpen,\n          toggle: toggleNav\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Search__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Nav, \"cPHCbwQVQ2CWrxeO65BJnaqiKRk=\", false, function () {\n  return [_lib_navState__WEBPACK_IMPORTED_MODULE_4__[\"useNav\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n});\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvTmF2LmpzPzUyYWUiXSwibmFtZXMiOlsiTmF2IiwidXNlTmF2IiwibmF2T3BlbiIsInRvZ2dsZU5hdiIsImNsb3NlU2lkZU5hdiIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInVzZUVmZmVjdCIsImNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFBQSxnQkFDaUJDLDREQUFNLEVBRHZCO0FBQUEsTUFDcEJDLE9BRG9CLFdBQ3BCQSxPQURvQjtBQUFBLE1BQ1hDLFNBRFcsV0FDWEEsU0FEVztBQUFBLE1BQ0FDLFlBREEsV0FDQUEsWUFEQTs7QUFBQSw2QkFFVkMscUVBQW1CLEVBRlQ7QUFBQSxNQUVwQkMsS0FGb0Isd0JBRXBCQSxLQUZvQjs7QUFJNUJDLCtFQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlELEtBQUssSUFBSSxHQUFiLEVBQWtCO0FBQ2hCRixrQkFBWTtBQUNiO0FBQ0YsR0FKUSxFQUlOLENBQUNFLEtBQUQsQ0FKTSxDQUFUO0FBTUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxvREFBRDtBQUFXLFVBQUksRUFBRUosT0FBakI7QUFBMEIsV0FBSyxFQUFFSSxLQUFqQztBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFlLGlCQUFPLEVBQUVFLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFdBQVg7QUFBdUIsa0JBQVEsTUFBL0I7QUFBQSxpQ0FDRSxxRUFBQyxvREFBRDtBQUFhLGlCQUFLLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFNRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxRQUFYO0FBQW9CLGtCQUFRLE1BQTVCO0FBQUEsaUNBQ0UscUVBQUMsb0RBQUQ7QUFBYSxpQkFBSyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLGVBU0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURixlQVVFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFhRSxxRUFBQywwREFBRDtBQUFBLCtCQUNFLHFFQUFDLHVEQUFEO0FBQ0UscUJBQVcsRUFBRSxLQURmO0FBRUUsZUFBSyxFQUFDLFdBRlI7QUFHRSxpQkFBTyxFQUFFTixPQUhYO0FBSUUsZ0JBQU0sRUFBRUM7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBdUJFLHFFQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkY7QUFBQSxrQkFERjtBQTJCRDs7R0FyQ3VCSCxHO1VBQ3VCQyxvRCxFQUMzQkksNkQ7OztLQUZJTCxHIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZiYXIvTmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gJ2hhbWJ1cmdlci1yZWFjdCc7XG5pbXBvcnQgeyB1c2VOYXYgfSBmcm9tICcuLi8uLi9saWIvbmF2U3RhdGUnO1xuXG5pbXBvcnQgTmF2RHJvcGRvd24gZnJvbSAnLi9OYXZEcm9wZG93bic7XG5pbXBvcnQgeyBOYXZTdHlsZXMsIE5hdkJ1dHRvblN0eWxlcyB9IGZyb20gJy4vTmF2U3R5bGVzJztcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gJy4uLy4uL2xpYi93aW5kb3dEaW1lbnNpb25zJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XG4gIGNvbnN0IHsgbmF2T3BlbiwgdG9nZ2xlTmF2LCBjbG9zZVNpZGVOYXYgfSA9IHVzZU5hdigpO1xuICBjb25zdCB7IHdpZHRoIH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2lkdGggPj0gODUwKSB7XG4gICAgICBjbG9zZVNpZGVOYXYoKTtcbiAgICB9XG4gIH0sIFt3aWR0aF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZTdHlsZXMgb3Blbj17bmF2T3Blbn0gd2lkdGg9e3dpZHRofT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdi1saW5rcyc+XG4gICAgICAgICAgPExpbmsgaHJlZj0nLycgb25DbGljaz17Y2xvc2V9PkhvbWU8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL3Rlc3QnPkFib3V0PC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wcm9kdWN0cycgcGFzc0hyZWY+XG4gICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9J3Byb2R1Y3RzJyAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvdG9vbHMnIHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPSd0b29scycgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL2NvbnRhY3RzJz5Db250YWN0PC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9nYWxsZXJ5Jz5HYWxsZXJ5PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE5hdkJ1dHRvblN0eWxlcz5cbiAgICAgICAgICA8SGFtYnVyZ2VyXG4gICAgICAgICAgICBoaWRlT3V0bGluZT17ZmFsc2V9XG4gICAgICAgICAgICBsYWJlbD0nU2hvdyBtZW51J1xuICAgICAgICAgICAgdG9nZ2xlZD17bmF2T3Blbn1cbiAgICAgICAgICAgIHRvZ2dsZT17dG9nZ2xlTmF2fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTmF2QnV0dG9uU3R5bGVzPlxuICAgICAgPC9OYXZTdHlsZXM+XG4gICAgICA8U2VhcmNoIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar/Nav.js\n");

/***/ })

})