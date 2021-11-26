webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar/NavDropdown.js":
/*!******************************************!*\
  !*** ./components/navbar/NavDropdown.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _context_navState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/navState */ \"./context/navState.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n/* harmony import */ var _helpers_formatUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/formatUrl */ \"./helpers/formatUrl.js\");\n/* harmony import */ var _NavDropdownStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavDropdownStyles */ \"./components/navbar/NavDropdownStyles.js\");\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/navbar/NavDropdown.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar DropdownItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c = _s(function (_ref, ref) {\n  _s();\n\n  var href = _ref.href,\n      onClick = _ref.onClick,\n      dropDownItem = _ref.dropDownItem;\n\n  var _useNav = Object(_context_navState__WEBPACK_IMPORTED_MODULE_5__[\"useNav\"])(),\n      closeSideNav = _useNav.closeSideNav;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_8__[\"DropdownItemStyles\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: href,\n      onClick: function onClick() {\n        return closeSideNav();\n      },\n      ref: ref,\n      className: router.asPath.split('/')[1] == dropDownItem ? 'active-link link-item' : 'link-item',\n      children: dropDownItem\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 7\n  }, _this);\n}, \"uczSei9GEi0EwTTMfUMwUDVDTUI=\", false, function () {\n  return [_context_navState__WEBPACK_IMPORTED_MODULE_5__[\"useNav\"]];\n}));\n_c2 = DropdownItem;\nvar NavDropdown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c3 = _s2(function NavDropdown(props, ref) {\n  var _props$items,\n      _this2 = this;\n\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      dropdownOpen = _useState[0],\n      setDropdownOpen = _useState[1];\n\n  var _useNav2 = Object(_context_navState__WEBPACK_IMPORTED_MODULE_5__[\"useNav\"])(),\n      navOpen = _useNav2.navOpen;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(),\n      width = _useWindowDimensions.width;\n\n  var showDropdown = function showDropdown() {\n    return setDropdownOpen(!dropdownOpen);\n  };\n\n  var handleMouseEnter = function handleMouseEnter() {\n    !navOpen && setDropdownOpen(true);\n  };\n\n  var handleMouseLeave = function handleMouseLeave() {\n    !navOpen && setDropdownOpen(false);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var isMounted = true;\n\n    if (width >= 850) {\n      setDropdownOpen(false);\n    }\n\n    return function () {\n      isMounted = false;\n    };\n  }, [width]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_8__[\"NavDropdownStyles\"], {\n    onMouseOver: handleMouseEnter,\n    onMouseLeave: handleMouseLeave,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"dropdown-btns-group\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: props.href,\n        ref: ref,\n        children: props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_8__[\"DropdownBtnStyles\"], {\n        type: \"button\",\n        onClick: showDropdown,\n        disabled: !navOpen || width > 850,\n        children: dropdownOpen && navOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_4__[\"MdExpandLess\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 38\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_4__[\"MdExpandMore\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 57\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this), dropdownOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_8__[\"DropdownMenuStyles\"], {\n      isDropdownOpen: dropdownOpen,\n      children: props === null || props === void 0 ? void 0 : (_props$items = props.items) === null || _props$items === void 0 ? void 0 : _props$items.map(function (item) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: {\n            pathname: \"/products/[items]\",\n            query: {\n              items: \"\".concat(Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_7__[\"formatUrlToRoute\"])(item.title))\n            }\n          },\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownItem, {\n            dropDownItem: item === null || item === void 0 ? void 0 : item.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 15\n          }, _this2)\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 13\n        }, _this2);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, this);\n}, \"plV0bTHcTVR4u9m8lBiRT8ewwow=\", false, function () {\n  return [_context_navState__WEBPACK_IMPORTED_MODULE_5__[\"useNav\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__[\"default\"]];\n}));\n_c4 = NavDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavDropdown);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"DropdownItem$React.forwardRef\");\n$RefreshReg$(_c2, \"DropdownItem\");\n$RefreshReg$(_c3, \"NavDropdown$React.forwardRef\");\n$RefreshReg$(_c4, \"NavDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2RHJvcGRvd24uanM/NzM2OCJdLCJuYW1lcyI6WyJEcm9wZG93bkl0ZW0iLCJSZWFjdCIsImZvcndhcmRSZWYiLCJyZWYiLCJocmVmIiwib25DbGljayIsImRyb3BEb3duSXRlbSIsInVzZU5hdiIsImNsb3NlU2lkZU5hdiIsInJvdXRlciIsImFzUGF0aCIsInNwbGl0IiwiTmF2RHJvcGRvd24iLCJwcm9wcyIsInVzZVN0YXRlIiwiZHJvcGRvd25PcGVuIiwic2V0RHJvcGRvd25PcGVuIiwibmF2T3BlbiIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInNob3dEcm9wZG93biIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwidXNlRWZmZWN0IiwiaXNNb3VudGVkIiwidGl0bGUiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJwYXRobmFtZSIsInF1ZXJ5IiwiZm9ybWF0VXJsVG9Sb3V0ZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBT0EsSUFBTUEsWUFBWSxnQkFBR0MsNENBQUssQ0FBQ0MsVUFBTixTQUNuQixnQkFBa0NDLEdBQWxDLEVBQTBDO0FBQUE7O0FBQUEsTUFBdkNDLElBQXVDLFFBQXZDQSxJQUF1QztBQUFBLE1BQWpDQyxPQUFpQyxRQUFqQ0EsT0FBaUM7QUFBQSxNQUF4QkMsWUFBd0IsUUFBeEJBLFlBQXdCOztBQUFBLGdCQUNmQyxnRUFBTSxFQURTO0FBQUEsTUFDaENDLFlBRGdDLFdBQ2hDQSxZQURnQzs7QUFFeEMsc0JBQ0UscUVBQUMscUVBQUQ7QUFBQSwyQkFDRTtBQUNFLFVBQUksRUFBRUosSUFEUjtBQUVFLGFBQU8sRUFBRTtBQUFBLGVBQU1JLFlBQVksRUFBbEI7QUFBQSxPQUZYO0FBR0UsU0FBRyxFQUFFTCxHQUhQO0FBSUUsZUFBUyxF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Yyx3QkFBWSxFQUFFRyxJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRUg7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGLFdBT09HLElBQUksQ0FBQ0ksRUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURxQjtBQUFBLE9BQXRCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNDRCxDQS9EbUI7QUFBQSxVQUVFekIsd0RBRkYsRUFHQVcsNkRBSEE7QUFBQSxHQUFwQjtNQUFNTixXO0FBaUVTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbmF2YmFyL05hdkRyb3Bkb3duLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgTWRFeHBhbmRNb3JlLCBNZEV4cGFuZExlc3MgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5cbmltcG9ydCB7IHVzZU5hdiB9IGZyb20gJy4uLy4uL2NvbnRleHQvbmF2U3RhdGUnO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSAnLi4vLi4vbGliL3dpbmRvd0RpbWVuc2lvbnMnO1xuaW1wb3J0IHsgZm9ybWF0VXJsVG9Sb3V0ZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvZm9ybWF0VXJsJztcblxuaW1wb3J0IHtcbiAgRHJvcGRvd25CdG5TdHlsZXMsXG4gIERyb3Bkb3duSXRlbVN0eWxlcyxcbiAgRHJvcGRvd25NZW51U3R5bGVzLFxuICBOYXZEcm9wZG93blN0eWxlcyxcbn0gZnJvbSAnLi9OYXZEcm9wZG93blN0eWxlcyc7XG5cbmNvbnN0IERyb3Bkb3duSXRlbSA9IFJlYWN0LmZvcndhcmRSZWYoXG4gICh7IGhyZWYsIG9uQ2xpY2ssIGRyb3BEb3duSXRlbSB9LCByZWYpID0+IHtcbiAgICBjb25zdCB7IGNsb3NlU2lkZU5hdiB9ID0gdXNlTmF2KCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wZG93bkl0ZW1TdHlsZXM+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbG9zZVNpZGVOYXYoKX1cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgcm91dGVyLmFzUGF0aC5zcGxpdCgnLycpWzFdID09IGRyb3BEb3duSXRlbVxuICAgICAgICAgICAgICA/ICdhY3RpdmUtbGluayBsaW5rLWl0ZW0nXG4gICAgICAgICAgICAgIDogJ2xpbmstaXRlbSdcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICB7ZHJvcERvd25JdGVtfVxuICAgICAgICA8L2E+XG4gICAgICA8L0Ryb3Bkb3duSXRlbVN0eWxlcz5cbiAgICApO1xuICB9XG4pO1xuXG5jb25zdCBOYXZEcm9wZG93biA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTmF2RHJvcGRvd24ocHJvcHMsIHJlZikge1xuICBjb25zdCBbZHJvcGRvd25PcGVuLCBzZXREcm9wZG93bk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IG5hdk9wZW4gfSA9IHVzZU5hdigpO1xuICBjb25zdCB7IHdpZHRoIH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG5cbiAgY29uc3Qgc2hvd0Ryb3Bkb3duID0gKCkgPT4gc2V0RHJvcGRvd25PcGVuKCFkcm9wZG93bk9wZW4pO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgIW5hdk9wZW4gJiYgc2V0RHJvcGRvd25PcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgIW5hdk9wZW4gJiYgc2V0RHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlO1xuICAgIGlmICh3aWR0aCA+PSA4NTApIHtcbiAgICAgIHNldERyb3Bkb3duT3BlbihmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpc01vdW50ZWQgPSBmYWxzZTtcbiAgICB9O1xuICB9LCBbd2lkdGhdKTtcblxuICByZXR1cm4gKFxuICAgIDxOYXZEcm9wZG93blN0eWxlc1xuICAgICAgb25Nb3VzZU92ZXI9e2hhbmRsZU1vdXNlRW50ZXJ9XG4gICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Ryb3Bkb3duLWJ0bnMtZ3JvdXAnPlxuICAgICAgICA8YSBocmVmPXtwcm9wcy5ocmVmfSByZWY9e3JlZn0+XG4gICAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgICA8L2E+XG4gICAgICAgIDxEcm9wZG93bkJ0blN0eWxlc1xuICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICBvbkNsaWNrPXtzaG93RHJvcGRvd259XG4gICAgICAgICAgZGlzYWJsZWQ9eyFuYXZPcGVuIHx8IHdpZHRoID4gODUwfVxuICAgICAgICA+XG4gICAgICAgICAge2Ryb3Bkb3duT3BlbiAmJiBuYXZPcGVuID8gPE1kRXhwYW5kTGVzcyAvPiA6IDxNZEV4cGFuZE1vcmUgLz59XG4gICAgICAgIDwvRHJvcGRvd25CdG5TdHlsZXM+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2Ryb3Bkb3duT3BlbiAmJiAoXG4gICAgICAgIDxEcm9wZG93bk1lbnVTdHlsZXMgaXNEcm9wZG93bk9wZW49e2Ryb3Bkb3duT3Blbn0+XG4gICAgICAgICAge3Byb3BzPy5pdGVtcz8ubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBgL3Byb2R1Y3RzL1tpdGVtc11gLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICBpdGVtczogYCR7Zm9ybWF0VXJsVG9Sb3V0ZShpdGVtLnRpdGxlKX1gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkcm9wRG93bkl0ZW09e2l0ZW0/LnRpdGxlfSAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0Ryb3Bkb3duTWVudVN0eWxlcz5cbiAgICAgICl9XG4gICAgPC9OYXZEcm9wZG93blN0eWxlcz5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZEcm9wZG93bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar/NavDropdown.js\n");

/***/ })

})