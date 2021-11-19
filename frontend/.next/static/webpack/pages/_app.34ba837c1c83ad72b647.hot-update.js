webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar/NavDropdown.js":
/*!******************************************!*\
  !*** ./components/navbar/NavDropdown.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _context_navState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/navState */ \"./context/navState.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n/* harmony import */ var _helpers_formatUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/formatUrl */ \"./helpers/formatUrl.js\");\n/* harmony import */ var _NavDropdownStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavDropdownStyles */ \"./components/navbar/NavDropdownStyles.js\");\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/navbar/NavDropdown.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar DropdownItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c = _s(function (_ref, ref) {\n  _s();\n\n  var href = _ref.href,\n      onClick = _ref.onClick,\n      dropDownItem = _ref.dropDownItem;\n\n  var _useNav = Object(_context_navState__WEBPACK_IMPORTED_MODULE_4__[\"useNav\"])(),\n      closeSideNav = _useNav.closeSideNav;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_7__[\"DropdownItemStyles\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: href,\n      onClick: function onClick() {\n        return closeSideNav();\n      },\n      ref: ref,\n      children: dropDownItem\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 7\n  }, _this);\n}, \"uczSei9GEi0EwTTMfUMwUDVDTUI=\", false, function () {\n  return [_context_navState__WEBPACK_IMPORTED_MODULE_4__[\"useNav\"]];\n}));\n_c2 = DropdownItem;\nvar NavDropdown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c3 = _s2(function NavDropdown(props, ref) {\n  var _props$items,\n      _this2 = this;\n\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      dropdownOpen = _useState[0],\n      setDropdownOpen = _useState[1];\n\n  var _useNav2 = Object(_context_navState__WEBPACK_IMPORTED_MODULE_4__[\"useNav\"])(),\n      navOpen = _useNav2.navOpen;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(),\n      width = _useWindowDimensions.width;\n\n  var showDropdown = function showDropdown() {\n    return setDropdownOpen(!dropdownOpen);\n  };\n\n  var handleMouseEnter = function handleMouseEnter() {\n    !navOpen && setDropdownOpen(true);\n  };\n\n  var handleMouseLeave = function handleMouseLeave() {\n    !navOpen && setDropdownOpen(false);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var isMounted = true;\n\n    if (width >= 850) {\n      setDropdownOpen(false);\n    }\n\n    return function () {\n      isMounted = false;\n    };\n  }, [width]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_7__[\"NavDropdownStyles\"], {\n    onMouseOver: handleMouseEnter,\n    onMouseLeave: handleMouseLeave,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"dropdown-btns-group\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: props.href,\n        ref: ref,\n        children: props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_7__[\"DropdownBtnStyles\"], {\n        type: \"button\",\n        onClick: showDropdown,\n        disabled: !navOpen || width > 850,\n        children: dropdownOpen && navOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdExpandLess\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 38\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdExpandMore\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 57\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, this), dropdownOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_7__[\"DropdownMenuStyles\"], {\n      drop: true,\n      children: props === null || props === void 0 ? void 0 : (_props$items = props.items) === null || _props$items === void 0 ? void 0 : _props$items.map(function (item) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: {\n            pathname: \"/products/[items]\",\n            query: {\n              items: \"\".concat(Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_6__[\"formatUrlToRoute\"])(item.title))\n            }\n          },\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownItem, {\n            dropDownItem: item === null || item === void 0 ? void 0 : item.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 15\n          }, _this2)\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 13\n        }, _this2);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, this);\n}, \"plV0bTHcTVR4u9m8lBiRT8ewwow=\", false, function () {\n  return [_context_navState__WEBPACK_IMPORTED_MODULE_4__[\"useNav\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n}));\n_c4 = NavDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavDropdown);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"DropdownItem$React.forwardRef\");\n$RefreshReg$(_c2, \"DropdownItem\");\n$RefreshReg$(_c3, \"NavDropdown$React.forwardRef\");\n$RefreshReg$(_c4, \"NavDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2RHJvcGRvd24uanM/NzM2OCJdLCJuYW1lcyI6WyJEcm9wZG93bkl0ZW0iLCJSZWFjdCIsImZvcndhcmRSZWYiLCJyZWYiLCJocmVmIiwib25DbGljayIsImRyb3BEb3duSXRlbSIsInVzZU5hdiIsImNsb3NlU2lkZU5hdiIsIk5hdkRyb3Bkb3duIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImRyb3Bkb3duT3BlbiIsInNldERyb3Bkb3duT3BlbiIsIm5hdk9wZW4iLCJ1c2VXaW5kb3dEaW1lbnNpb25zIiwid2lkdGgiLCJzaG93RHJvcGRvd24iLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsInVzZUVmZmVjdCIsImlzTW91bnRlZCIsInRpdGxlIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwicGF0aG5hbWUiLCJxdWVyeSIsImZvcm1hdFVybFRvUm91dGUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBT0EsSUFBTUEsWUFBWSxnQkFBR0MsNENBQUssQ0FBQ0MsVUFBTixTQUNuQixnQkFBa0NDLEdBQWxDLEVBQTBDO0FBQUE7O0FBQUEsTUFBdkNDLElBQXVDLFFBQXZDQSxJQUF1QztBQUFBLE1BQWpDQyxPQUFpQyxRQUFqQ0EsT0FBaUM7QUFBQSxNQUF4QkMsWUFBd0IsUUFBeEJBLFlBQXdCOztBQUFBLGdCQUNmQyxnRUFBTSxFQURTO0FBQUEsTUFDaENDLFlBRGdDLFdBQ2hDQSxZQURnQzs7QUFFeEMsc0JBQ0UscUVBQUMscUVBQUQ7QUFBQSwyQkFDRTtBQUFHLFVBQUksRUFBRUosSUFBVDtBQUFlLGFBQU8sRUFBRTtBQUFBLGVBQU1JLFlBQVksRUFBbEI7QUFBQSxPQUF4QjtBQUE4QyxTQUFHLEVBQUVMLEdBQW5EO0FBQUEsZ0JBQ0dHO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURG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QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQ0QsQ0E1RG1CO0FBQUEsVUFFRXRCLHdEQUZGLEVBR0FRLDZEQUhBO0FBQUEsR0FBcEI7TUFBTU4sVztBQThEU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci9OYXZEcm9wZG93bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgTWRFeHBhbmRNb3JlLCBNZEV4cGFuZExlc3MgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5cbmltcG9ydCB7IHVzZU5hdiB9IGZyb20gJy4uLy4uL2NvbnRleHQvbmF2U3RhdGUnO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSAnLi4vLi4vbGliL3dpbmRvd0RpbWVuc2lvbnMnO1xuaW1wb3J0IHsgZm9ybWF0VXJsVG9Sb3V0ZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvZm9ybWF0VXJsJztcblxuaW1wb3J0IHtcbiAgRHJvcGRvd25CdG5TdHlsZXMsXG4gIERyb3Bkb3duSXRlbVN0eWxlcyxcbiAgRHJvcGRvd25NZW51U3R5bGVzLFxuICBOYXZEcm9wZG93blN0eWxlcyxcbn0gZnJvbSAnLi9OYXZEcm9wZG93blN0eWxlcyc7XG5cbmNvbnN0IERyb3Bkb3duSXRlbSA9IFJlYWN0LmZvcndhcmRSZWYoXG4gICh7IGhyZWYsIG9uQ2xpY2ssIGRyb3BEb3duSXRlbSB9LCByZWYpID0+IHtcbiAgICBjb25zdCB7IGNsb3NlU2lkZU5hdiB9ID0gdXNlTmF2KCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wZG93bkl0ZW1TdHlsZXM+XG4gICAgICAgIDxhIGhyZWY9e2hyZWZ9IG9uQ2xpY2s9eygpID0+IGNsb3NlU2lkZU5hdigpfSByZWY9e3JlZn0+XG4gICAgICAgICAge2Ryb3BEb3duSXRlbX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9Ecm9wZG93bkl0ZW1TdHlsZXM+XG4gICAgKTtcbiAgfVxuKTtcblxuY29uc3QgTmF2RHJvcGRvd24gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE5hdkRyb3Bkb3duKHByb3BzLCByZWYpIHtcbiAgY29uc3QgW2Ryb3Bkb3duT3Blbiwgc2V0RHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBuYXZPcGVuIH0gPSB1c2VOYXYoKTtcbiAgY29uc3QgeyB3aWR0aCB9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xuXG4gIGNvbnN0IHNob3dEcm9wZG93biA9ICgpID0+IHNldERyb3Bkb3duT3BlbighZHJvcGRvd25PcGVuKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xuICAgICFuYXZPcGVuICYmIHNldERyb3Bkb3duT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgICFuYXZPcGVuICYmIHNldERyb3Bkb3duT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaXNNb3VudGVkID0gdHJ1ZTtcbiAgICBpZiAod2lkdGggPj0gODUwKSB7XG4gICAgICBzZXREcm9wZG93bk9wZW4oZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNNb3VudGVkID0gZmFsc2U7XG4gICAgfTtcbiAgfSwgW3dpZHRoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2RHJvcGRvd25TdHlsZXMgb25Nb3VzZU92ZXI9e2hhbmRsZU1vdXNlRW50ZXJ9IG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24tYnRucy1ncm91cCc+XG4gICAgICAgIDxhIGhyZWY9e3Byb3BzLmhyZWZ9IHJlZj17cmVmfT5cbiAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgIDwvYT5cbiAgICAgICAgPERyb3Bkb3duQnRuU3R5bGVzXG4gICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgIG9uQ2xpY2s9e3Nob3dEcm9wZG93bn1cbiAgICAgICAgICBkaXNhYmxlZD17IW5hdk9wZW4gfHwgd2lkdGggPiA4NTB9XG4gICAgICAgID5cbiAgICAgICAgICB7ZHJvcGRvd25PcGVuICYmIG5hdk9wZW4gPyA8TWRFeHBhbmRMZXNzIC8+IDogPE1kRXhwYW5kTW9yZSAvPn1cbiAgICAgICAgPC9Ecm9wZG93bkJ0blN0eWxlcz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7ZHJvcGRvd25PcGVuICYmIChcbiAgICAgICAgPERyb3Bkb3duTWVudVN0eWxlcyBkcm9wPlxuICAgICAgICAgIHtwcm9wcz8uaXRlbXM/Lm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9e3tcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogYC9wcm9kdWN0cy9baXRlbXNdYCxcbiAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgaXRlbXM6IGAke2Zvcm1hdFVybFRvUm91dGUoaXRlbS50aXRsZSl9YCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZHJvcERvd25JdGVtPXtpdGVtPy50aXRsZX0gLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Ecm9wZG93bk1lbnVTdHlsZXM+XG4gICAgICApfVxuICAgIDwvTmF2RHJvcGRvd25TdHlsZXM+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2RHJvcGRvd247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar/NavDropdown.js\n");

/***/ })

})