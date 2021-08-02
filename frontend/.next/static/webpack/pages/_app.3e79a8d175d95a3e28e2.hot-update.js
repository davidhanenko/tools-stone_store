webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navbar/Nav.js":
/*!**********************************!*\
  !*** ./components/Navbar/Nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/cjs/react.development */ \"./node_modules/react/cjs/react.development.js\");\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cjs_react_development__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var _lib_navState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/navState */ \"./lib/navState.js\");\n/* harmony import */ var _NavDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavDropdown */ \"./components/Navbar/NavDropdown.js\");\n/* harmony import */ var _NavStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavStyles */ \"./components/Navbar/NavStyles.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Search */ \"./components/Navbar/Search.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Navbar/Nav.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Nav() {\n  _s();\n\n  var _useNav = Object(_lib_navState__WEBPACK_IMPORTED_MODULE_4__[\"useNav\"])(),\n      navOpen = _useNav.navOpen,\n      toggleNav = _useNav.toggleNav,\n      closeSideNav = _useNav.closeSideNav;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(),\n      width = _useWindowDimensions.width;\n\n  Object(react_cjs_react_development__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (width >= 850) {\n      closeSideNav();\n    }\n  }, [width]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavStyles__WEBPACK_IMPORTED_MODULE_6__[\"NavStyles\"], {\n      open: navOpen,\n      width: width,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"nav-links\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/\",\n          passHref: true,\n          onClick: function onClick() {\n            return closeSideNav;\n          },\n          children: \"Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/test\",\n          children: \"About\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/products\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            title: \"products\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/tools\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            title: \"tools\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/contacts\",\n          children: \"Contact\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/gallery\",\n          children: \"Gallery\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavStyles__WEBPACK_IMPORTED_MODULE_6__[\"NavButtonStyles\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(hamburger_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          hideOutline: false,\n          label: \"Show menu\",\n          toggled: navOpen,\n          toggle: toggleNav\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Search__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Nav, \"cPHCbwQVQ2CWrxeO65BJnaqiKRk=\", false, function () {\n  return [_lib_navState__WEBPACK_IMPORTED_MODULE_4__[\"useNav\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n});\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvTmF2LmpzPzUyYWUiXSwibmFtZXMiOlsiTmF2IiwidXNlTmF2IiwibmF2T3BlbiIsInRvZ2dsZU5hdiIsImNsb3NlU2lkZU5hdiIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQUEsZ0JBQ2lCQyw0REFBTSxFQUR2QjtBQUFBLE1BQ3BCQyxPQURvQixXQUNwQkEsT0FEb0I7QUFBQSxNQUNYQyxTQURXLFdBQ1hBLFNBRFc7QUFBQSxNQUNBQyxZQURBLFdBQ0FBLFlBREE7O0FBQUEsNkJBRVZDLHFFQUFtQixFQUZUO0FBQUEsTUFFcEJDLEtBRm9CLHdCQUVwQkEsS0FGb0I7O0FBSTVCQywrRUFBUyxDQUFDLFlBQU07QUFDZCxRQUFJRCxLQUFLLElBQUksR0FBYixFQUFrQjtBQUNoQkYsa0JBQVk7QUFDYjtBQUNGLEdBSlEsRUFJTixDQUFDRSxLQUFELENBSk0sQ0FBVDtBQU1BLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsb0RBQUQ7QUFBVyxVQUFJLEVBQUVKLE9BQWpCO0FBQTBCLFdBQUssRUFBRUksS0FBakM7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBZSxrQkFBUSxNQUF2QjtBQUF3QixpQkFBTyxFQUFFO0FBQUEsbUJBQU1GLFlBQU47QUFBQSxXQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFLRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxXQUFYO0FBQXVCLGtCQUFRLE1BQS9CO0FBQUEsaUNBQ0UscUVBQUMsb0RBQUQ7QUFBYSxpQkFBSyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLGVBUUUscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsUUFBWDtBQUFvQixrQkFBUSxNQUE1QjtBQUFBLGlDQUNFLHFFQUFDLG9EQUFEO0FBQWEsaUJBQUssRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRixlQVdFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEYsZUFZRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBZUUscUVBQUMsMERBQUQ7QUFBQSwrQkFDRSxxRUFBQyx1REFBRDtBQUNFLHFCQUFXLEVBQUUsS0FEZjtBQUVFLGVBQUssRUFBQyxXQUZSO0FBR0UsaUJBQU8sRUFBRUYsT0FIWDtBQUlFLGdCQUFNLEVBQUVDO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQXlCRSxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJGO0FBQUEsa0JBREY7QUE2QkQ7O0dBdkN1QkgsRztVQUN1QkMsb0QsRUFDM0JJLDZEOzs7S0FGSUwsRyIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2YmFyL05hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhhbWJ1cmdlciBmcm9tICdoYW1idXJnZXItcmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2IH0gZnJvbSAnLi4vLi4vbGliL25hdlN0YXRlJztcblxuaW1wb3J0IE5hdkRyb3Bkb3duIGZyb20gJy4vTmF2RHJvcGRvd24nO1xuaW1wb3J0IHsgTmF2U3R5bGVzLCBOYXZCdXR0b25TdHlsZXMgfSBmcm9tICcuL05hdlN0eWxlcyc7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLi8uLi9saWIvd2luZG93RGltZW5zaW9ucyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xuICBjb25zdCB7IG5hdk9wZW4sIHRvZ2dsZU5hdiwgY2xvc2VTaWRlTmF2IH0gPSB1c2VOYXYoKTtcbiAgY29uc3QgeyB3aWR0aCB9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdpZHRoID49IDg1MCkge1xuICAgICAgY2xvc2VTaWRlTmF2KCk7XG4gICAgfVxuICB9LCBbd2lkdGhdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2U3R5bGVzIG9wZW49e25hdk9wZW59IHdpZHRoPXt3aWR0aH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXYtbGlua3MnPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHBhc3NIcmVmIG9uQ2xpY2s9eygpID0+IGNsb3NlU2lkZU5hdn0+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy90ZXN0Jz5BYm91dDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvcHJvZHVjdHMnIHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPSdwcm9kdWN0cycgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL3Rvb2xzJyBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT0ndG9vbHMnIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jb250YWN0cyc+Q29udGFjdDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvZ2FsbGVyeSc+R2FsbGVyeTwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxOYXZCdXR0b25TdHlsZXM+XG4gICAgICAgICAgPEhhbWJ1cmdlclxuICAgICAgICAgICAgaGlkZU91dGxpbmU9e2ZhbHNlfVxuICAgICAgICAgICAgbGFiZWw9J1Nob3cgbWVudSdcbiAgICAgICAgICAgIHRvZ2dsZWQ9e25hdk9wZW59XG4gICAgICAgICAgICB0b2dnbGU9e3RvZ2dsZU5hdn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L05hdkJ1dHRvblN0eWxlcz5cbiAgICAgIDwvTmF2U3R5bGVzPlxuICAgICAgPFNlYXJjaCAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar/Nav.js\n");

/***/ })

})