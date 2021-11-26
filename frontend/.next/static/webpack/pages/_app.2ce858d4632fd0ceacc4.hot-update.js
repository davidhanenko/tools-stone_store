webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar/NavDropdown.js":
/*!******************************************!*\
  !*** ./components/navbar/NavDropdown.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _context_navState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/navState */ \"./context/navState.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n/* harmony import */ var _helpers_formatUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/formatUrl */ \"./helpers/formatUrl.js\");\n/* harmony import */ var _NavDropdownStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavDropdownStyles */ \"./components/navbar/NavDropdownStyles.js\");\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/navbar/NavDropdown.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar DropdownItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c = _s(function (_ref, ref) {\n  _s();\n\n  var href = _ref.href,\n      onClick = _ref.onClick,\n      dropDownItem = _ref.dropDownItem;\n\n  var _useNav = Object(_context_navState__WEBPACK_IMPORTED_MODULE_4__[\"useNav\"])(),\n      closeSideNav = _useNav.closeSideNav;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_7__[\"DropdownItemStyles\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: href,\n      onClick: function onClick() {\n        return closeSideNav();\n      },\n      ref: ref,\n      className: router.asPath.split('/')[1] == dropDownItem ? 'active-link link-item' : 'link-item',\n      children: dropDownItem\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 7\n  }, _this);\n}, \"uczSei9GEi0EwTTMfUMwUDVDTUI=\", false, function () {\n  return [_context_navState__WEBPACK_IMPORTED_MODULE_4__[\"useNav\"]];\n}));\n_c2 = DropdownItem;\nvar NavDropdown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c3 = _s2(function NavDropdown(props, ref) {\n  var _props$items,\n      _this2 = this;\n\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      dropdownOpen = _useState[0],\n      setDropdownOpen = _useState[1];\n\n  var _useNav2 = Object(_context_navState__WEBPACK_IMPORTED_MODULE_4__[\"useNav\"])(),\n      navOpen = _useNav2.navOpen;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(),\n      width = _useWindowDimensions.width;\n\n  var showDropdown = function showDropdown() {\n    return setDropdownOpen(!dropdownOpen);\n  };\n\n  var handleMouseEnter = function handleMouseEnter() {\n    !navOpen && setDropdownOpen(true);\n  };\n\n  var handleMouseLeave = function handleMouseLeave() {\n    !navOpen && setDropdownOpen(false);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var isMounted = true;\n\n    if (width >= 850) {\n      setDropdownOpen(false);\n    }\n\n    return function () {\n      isMounted = false;\n    };\n  }, [width]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_7__[\"NavDropdownStyles\"], {\n    onMouseOver: handleMouseEnter,\n    onMouseLeave: handleMouseLeave,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"dropdown-btns-group\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: props.href,\n        ref: ref,\n        children: props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_7__[\"DropdownBtnStyles\"], {\n        type: \"button\",\n        onClick: showDropdown,\n        disabled: !navOpen || width > 850,\n        children: dropdownOpen && navOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdExpandLess\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 38\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdExpandMore\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 57\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, this), dropdownOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_7__[\"DropdownMenuStyles\"], {\n      isDropdownOpen: dropdownOpen,\n      children: props === null || props === void 0 ? void 0 : (_props$items = props.items) === null || _props$items === void 0 ? void 0 : _props$items.map(function (item) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: {\n            pathname: \"/products/[items]\",\n            query: {\n              items: \"\".concat(Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_6__[\"formatUrlToRoute\"])(item.title))\n            }\n          },\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownItem, {\n            dropDownItem: item === null || item === void 0 ? void 0 : item.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 15\n          }, _this2)\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 13\n        }, _this2);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 5\n  }, this);\n}, \"plV0bTHcTVR4u9m8lBiRT8ewwow=\", false, function () {\n  return [_context_navState__WEBPACK_IMPORTED_MODULE_4__[\"useNav\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n}));\n_c4 = NavDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavDropdown);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"DropdownItem$React.forwardRef\");\n$RefreshReg$(_c2, \"DropdownItem\");\n$RefreshReg$(_c3, \"NavDropdown$React.forwardRef\");\n$RefreshReg$(_c4, \"NavDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2RHJvcGRvd24uanM/NzM2OCJdLCJuYW1lcyI6WyJEcm9wZG93bkl0ZW0iLCJSZWFjdCIsImZvcndhcmRSZWYiLCJyZWYiLCJocmVmIiwib25DbGljayIsImRyb3BEb3duSXRlbSIsInVzZU5hdiIsImNsb3NlU2lkZU5hdiIsInJvdXRlciIsImFzUGF0aCIsInNwbGl0IiwiTmF2RHJvcGRvd24iLCJwcm9wcyIsInVzZVN0YXRlIiwiZHJvcGRvd25PcGVuIiwic2V0RHJvcGRvd25PcGVuIiwibmF2T3BlbiIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInNob3dEcm9wZG93biIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwidXNlRWZmZWN0IiwiaXNNb3VudGVkIiwidGl0bGUiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJwYXRobmFtZSIsInF1ZXJ5IiwiZm9ybWF0VXJsVG9Sb3V0ZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFPQSxJQUFNQSxZQUFZLGdCQUFHQyw0Q0FBSyxDQUFDQyxVQUFOLFNBQ25CLGdCQUFrQ0MsR0FBbEMsRUFBMEM7QUFBQTs7QUFBQSxNQUF2Q0MsSUFBdUMsUUFBdkNBLElBQXVDO0FBQUEsTUFBakNDLE9BQWlDLFFBQWpDQSxPQUFpQztBQUFBLE1BQXhCQyxZQUF3QixRQUF4QkEsWUFBd0I7O0FBQUEsZ0JBQ2ZDLGdFQUFNLEVBRFM7QUFBQSxNQUNoQ0MsWUFEZ0MsV0FDaENBLFlBRGdDOztBQUV4QyxzQkFDRSxxRUFBQyxxRUFBRDtBQUFBLDJCQUNFO0FBQ0UsVUFBSSxFQUFFSixJQURSO0FBRUUsYUFBTyxFQUFFO0FBQUEsZUFBTUksWUFBWSxFQUFsQjtBQUFBLE9BRlg7QUFHRSxTQUFHLEVBQUVMLEdBSFA7QUFJRSxlQUFTLEVBQ1BNLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCLENBQXpCLEtBQStCTCxZQUEvQixHQUNJLHVCQURKLEdBRUksV0FQUjtBQUFBLGdCQVVHQTtBQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQkQsQ0FuQmtCO0FBQUEsVUFFUUMsd0RBRlI7QUFBQSxHQUFyQjtNQUFNUCxZO0FBc0JOLElBQU1ZLFdBQVcsZ0JBQUdYLDRDQUFLLENBQUNDLFVBQU4sV0FBaUIsU0FBU1UsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEJWLEdBQTVCLEVBQWlDO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSxrQkFDNUJXLHNEQUFRLENBQUMsS0FBRCxDQURvQjtBQUFBLE1BQzdEQyxZQUQ2RDtBQUFBLE1BQy9DQyxlQUQrQzs7QUFBQSxpQkFFaERULGdFQUFNLEVBRjBDO0FBQUEsTUFFNURVLE9BRjRELFlBRTVEQSxPQUY0RDs7QUFBQSw2QkFHbERDLHFFQUFtQixFQUgrQjtBQUFBLE1BRzVEQyxLQUg0RCx3QkFHNURBLEtBSDREOztBQUtwRSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFdBQU1KLGVBQWUsQ0FBQyxDQUFDRCxZQUFGLENBQXJCO0FBQUEsR0FBckI7O0FBRUEsTUFBTU0sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLEtBQUNKLE9BQUQsSUFBWUQsZUFBZSxDQUFDLElBQUQsQ0FBM0I7QUFDRCxHQUZEOztBQUlBLE1BQU1NLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QixLQUFDTCxPQUFELElBQVlELGVBQWUsQ0FBQyxLQUFELENBQTNCO0FBQ0QsR0FGRDs7QUFJQU8seURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsU0FBUyxHQUFHLElBQWhCOztBQUNBLFFBQUlMLEtBQUssSUFBSSxHQUFiLEVBQWtCO0FBQ2hCSCxxQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNEOztBQUNELFdBQU8sWUFBTTtBQUNYUSxlQUFTLEdBQUcsS0FBWjtBQUNELEtBRkQ7QUFHRCxHQVJRLEVBUU4sQ0FBQ0wsS0FBRCxDQVJNLENBQVQ7QUFVQSxzQkFDRSxxRUFBQyxvRUFBRDtBQUNFLGVBQVcsRUFBRUUsZ0JBRGY7QUFFRSxnQkFBWSxFQUFFQyxnQkFGaEI7QUFBQSw0QkFJRTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBLDhCQUNFO0FBQUcsWUFBSSxFQUFFVCxLQUFLLENBQUNULElBQWY7QUFBcUIsV0FBRyxFQUFFRCxHQUExQjtBQUFBLGtCQUNHVSxLQUFLLENBQUNZO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUUscUVBQUMsb0VBQUQ7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLGVBQU8sRUFBRUwsWUFGWDtBQUdFLGdCQUFRLEVBQUUsQ0FBQ0gsT0FBRCxJQUFZRSxLQUFLLEdBQUcsR0FIaEM7QUFBQSxrQkFLR0osWUFBWSxJQUFJRSxPQUFoQixnQkFBMEIscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBMUIsZ0JBQTZDLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLEVBaUJHRixZQUFZLGlCQUNYLHFFQUFDLHFFQUFEO0FBQW9CLG9CQUFjLEVBQUVBLFlBQXBDO0FBQUEsZ0JBQ0dGLEtBREgsYUFDR0EsS0FESCx1Q0FDR0EsS0FBSyxDQUFFYSxLQURWLGlEQUNHLGFBQWNDLEdBQWQsQ0FBa0IsVUFBQUMsSUFBSTtBQUFBLDRCQUNyQixxRUFBQyxnREFBRDtBQUNFLGNBQUksRUFBRTtBQUNKQyxvQkFBUSxxQkFESjtBQUVKQyxpQkFBSyxFQUFFO0FBQ0xKLG1CQUFLLFlBQUtLLDJFQUFnQixDQUFDSCxJQUFJLENBQUNILEtBQU4sQ0FBckI7QUFEQTtBQUZILFdBRFI7QUFRRSxrQkFBUSxNQVJWO0FBQUEsaUNBVUUscUVBQUMsWUFBRDtBQUFjLHdCQUFZLEVBQUVHLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFSDtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkYsV0FPT0csSUFBSSxDQUFDSSxFQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRHFCO0FBQUEsT0FBdEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0NELENBL0RtQjtBQUFBLFVBRUV6Qix3REFGRixFQUdBVyw2REFIQTtBQUFBLEdBQXBCO01BQU1OLFc7QUFpRVNBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uYXZiYXIvTmF2RHJvcGRvd24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBNZEV4cGFuZE1vcmUsIE1kRXhwYW5kTGVzcyB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcblxuaW1wb3J0IHsgdXNlTmF2IH0gZnJvbSAnLi4vLi4vY29udGV4dC9uYXZTdGF0ZSc7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLi8uLi9saWIvd2luZG93RGltZW5zaW9ucyc7XG5pbXBvcnQgeyBmb3JtYXRVcmxUb1JvdXRlIH0gZnJvbSAnLi4vLi4vaGVscGVycy9mb3JtYXRVcmwnO1xuXG5pbXBvcnQge1xuICBEcm9wZG93bkJ0blN0eWxlcyxcbiAgRHJvcGRvd25JdGVtU3R5bGVzLFxuICBEcm9wZG93bk1lbnVTdHlsZXMsXG4gIE5hdkRyb3Bkb3duU3R5bGVzLFxufSBmcm9tICcuL05hdkRyb3Bkb3duU3R5bGVzJztcblxuY29uc3QgRHJvcGRvd25JdGVtID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKHsgaHJlZiwgb25DbGljaywgZHJvcERvd25JdGVtIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgY2xvc2VTaWRlTmF2IH0gPSB1c2VOYXYoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPERyb3Bkb3duSXRlbVN0eWxlcz5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsb3NlU2lkZU5hdigpfVxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICByb3V0ZXIuYXNQYXRoLnNwbGl0KCcvJylbMV0gPT0gZHJvcERvd25JdGVtXG4gICAgICAgICAgICAgID8gJ2FjdGl2ZS1saW5rIGxpbmstaXRlbSdcbiAgICAgICAgICAgICAgOiAnbGluay1pdGVtJ1xuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtkcm9wRG93bkl0ZW19XG4gICAgICAgIDwvYT5cbiAgICAgIDwvRHJvcGRvd25JdGVtU3R5bGVzPlxuICAgICk7XG4gIH1cbik7XG5cbmNvbnN0IE5hdkRyb3Bkb3duID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBOYXZEcm9wZG93bihwcm9wcywgcmVmKSB7XG4gIGNvbnN0IFtkcm9wZG93bk9wZW4sIHNldERyb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgbmF2T3BlbiB9ID0gdXNlTmF2KCk7XG4gIGNvbnN0IHsgd2lkdGggfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcblxuICBjb25zdCBzaG93RHJvcGRvd24gPSAoKSA9PiBzZXREcm9wZG93bk9wZW4oIWRyb3Bkb3duT3Blbik7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICAhbmF2T3BlbiAmJiBzZXREcm9wZG93bk9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICAhbmF2T3BlbiAmJiBzZXREcm9wZG93bk9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGlzTW91bnRlZCA9IHRydWU7XG4gICAgaWYgKHdpZHRoID49IDg1MCkge1xuICAgICAgc2V0RHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlzTW91bnRlZCA9IGZhbHNlO1xuICAgIH07XG4gIH0sIFt3aWR0aF0pO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdkRyb3Bkb3duU3R5bGVzXG4gICAgICBvbk1vdXNlT3Zlcj17aGFuZGxlTW91c2VFbnRlcn1cbiAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24tYnRucy1ncm91cCc+XG4gICAgICAgIDxhIGhyZWY9e3Byb3BzLmhyZWZ9IHJlZj17cmVmfT5cbiAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgIDwvYT5cbiAgICAgICAgPERyb3Bkb3duQnRuU3R5bGVzXG4gICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgIG9uQ2xpY2s9e3Nob3dEcm9wZG93bn1cbiAgICAgICAgICBkaXNhYmxlZD17IW5hdk9wZW4gfHwgd2lkdGggPiA4NTB9XG4gICAgICAgID5cbiAgICAgICAgICB7ZHJvcGRvd25PcGVuICYmIG5hdk9wZW4gPyA8TWRFeHBhbmRMZXNzIC8+IDogPE1kRXhwYW5kTW9yZSAvPn1cbiAgICAgICAgPC9Ecm9wZG93bkJ0blN0eWxlcz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7ZHJvcGRvd25PcGVuICYmIChcbiAgICAgICAgPERyb3Bkb3duTWVudVN0eWxlcyBpc0Ryb3Bkb3duT3Blbj17ZHJvcGRvd25PcGVufT5cbiAgICAgICAgICB7cHJvcHM/Lml0ZW1zPy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvcHJvZHVjdHMvW2l0ZW1zXWAsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBgJHtmb3JtYXRVcmxUb1JvdXRlKGl0ZW0udGl0bGUpfWAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRyb3BEb3duSXRlbT17aXRlbT8udGl0bGV9IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvRHJvcGRvd25NZW51U3R5bGVzPlxuICAgICAgKX1cbiAgICA8L05hdkRyb3Bkb3duU3R5bGVzPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkRyb3Bkb3duO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar/NavDropdown.js\n");

/***/ })

})