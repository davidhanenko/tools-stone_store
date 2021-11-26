webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar/NavDropdown.js":
/*!******************************************!*\
  !*** ./components/navbar/NavDropdown.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _context_navState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/navState */ \"./context/navState.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n/* harmony import */ var _helpers_formatUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/formatUrl */ \"./helpers/formatUrl.js\");\n/* harmony import */ var _NavDropdownStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavDropdownStyles */ \"./components/navbar/NavDropdownStyles.js\");\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/navbar/NavDropdown.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar DropdownItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c = _s(function (_ref, ref) {\n  _s();\n\n  var href = _ref.href,\n      onClick = _ref.onClick,\n      dropDownItem = _ref.dropDownItem;\n\n  var _useNav = Object(_context_navState__WEBPACK_IMPORTED_MODULE_4__[\"useNav\"])(),\n      closeSideNav = _useNav.closeSideNav;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_7__[\"DropdownItemStyles\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: href,\n      onClick: function onClick() {\n        return closeSideNav();\n      },\n      ref: ref,\n      className: router.asPath.split('/')[1] == title ? 'active-link link-item' : 'link-item',\n      children: dropDownItem\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 7\n  }, _this);\n}, \"uczSei9GEi0EwTTMfUMwUDVDTUI=\", false, function () {\n  return [_context_navState__WEBPACK_IMPORTED_MODULE_4__[\"useNav\"]];\n}));\n_c2 = DropdownItem;\nvar NavDropdown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c3 = _s2(function NavDropdown(props, ref) {\n  var _props$items,\n      _this2 = this;\n\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      dropdownOpen = _useState[0],\n      setDropdownOpen = _useState[1];\n\n  var _useNav2 = Object(_context_navState__WEBPACK_IMPORTED_MODULE_4__[\"useNav\"])(),\n      navOpen = _useNav2.navOpen;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(),\n      width = _useWindowDimensions.width;\n\n  var showDropdown = function showDropdown() {\n    return setDropdownOpen(!dropdownOpen);\n  };\n\n  var handleMouseEnter = function handleMouseEnter() {\n    !navOpen && setDropdownOpen(true);\n  };\n\n  var handleMouseLeave = function handleMouseLeave() {\n    !navOpen && setDropdownOpen(false);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var isMounted = true;\n\n    if (width >= 850) {\n      setDropdownOpen(false);\n    }\n\n    return function () {\n      isMounted = false;\n    };\n  }, [width]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_7__[\"NavDropdownStyles\"], {\n    onMouseOver: handleMouseEnter,\n    onMouseLeave: handleMouseLeave,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"dropdown-btns-group\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: props.href,\n        ref: ref,\n        children: props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_7__[\"DropdownBtnStyles\"], {\n        type: \"button\",\n        onClick: showDropdown,\n        disabled: !navOpen || width > 850,\n        children: dropdownOpen && navOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdExpandLess\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 38\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdExpandMore\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 57\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this), dropdownOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_7__[\"DropdownMenuStyles\"], {\n      isDropdownOpen: dropdownOpen,\n      children: props === null || props === void 0 ? void 0 : (_props$items = props.items) === null || _props$items === void 0 ? void 0 : _props$items.map(function (item) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: {\n            pathname: \"/products/[items]\",\n            query: {\n              items: \"\".concat(Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_6__[\"formatUrlToRoute\"])(item.title))\n            }\n          },\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownItem, {\n            dropDownItem: item === null || item === void 0 ? void 0 : item.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 15\n          }, _this2)\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 13\n        }, _this2);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, this);\n}, \"plV0bTHcTVR4u9m8lBiRT8ewwow=\", false, function () {\n  return [_context_navState__WEBPACK_IMPORTED_MODULE_4__[\"useNav\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n}));\n_c4 = NavDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavDropdown);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"DropdownItem$React.forwardRef\");\n$RefreshReg$(_c2, \"DropdownItem\");\n$RefreshReg$(_c3, \"NavDropdown$React.forwardRef\");\n$RefreshReg$(_c4, \"NavDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2RHJvcGRvd24uanM/NzM2OCJdLCJuYW1lcyI6WyJEcm9wZG93bkl0ZW0iLCJSZWFjdCIsImZvcndhcmRSZWYiLCJyZWYiLCJocmVmIiwib25DbGljayIsImRyb3BEb3duSXRlbSIsInVzZU5hdiIsImNsb3NlU2lkZU5hdiIsInJvdXRlciIsImFzUGF0aCIsInNwbGl0IiwidGl0bGUiLCJOYXZEcm9wZG93biIsInByb3BzIiwidXNlU3RhdGUiLCJkcm9wZG93bk9wZW4iLCJzZXREcm9wZG93bk9wZW4iLCJuYXZPcGVuIiwidXNlV2luZG93RGltZW5zaW9ucyIsIndpZHRoIiwic2hvd0Ryb3Bkb3duIiwiaGFuZGxlTW91c2VFbnRlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJ1c2VFZmZlY3QiLCJpc01vdW50ZWQiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJwYXRobmFtZSIsInF1ZXJ5IiwiZm9ybWF0VXJsVG9Sb3V0ZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFPQSxJQUFNQSxZQUFZLGdCQUFHQyw0Q0FBSyxDQUFDQyxVQUFOLFNBQ25CLGdCQUFrQ0MsR0FBbEMsRUFBMEM7QUFBQTs7QUFBQSxNQUF2Q0MsSUFBdUMsUUFBdkNBLElBQXVDO0FBQUEsTUFBakNDLE9BQWlDLFFBQWpDQSxPQUFpQztBQUFBLE1BQXhCQyxZQUF3QixRQUF4QkEsWUFBd0I7O0FBQUEsZ0JBQ2ZDLGdFQUFNLEVBRFM7QUFBQSxNQUNoQ0MsWUFEZ0MsV0FDaENBLFlBRGdDOztBQUV4QyxzQkFDRSxxRUFBQyxxRUFBRDtBQUFBLDJCQUNFO0FBQ0UsVUFBSSxFQUFFSixJQURSO0FBRUUsYUFBTyxFQUFFO0FBQUEsZUFBTUksWUFBWSxFQUFsQjtBQUFBLE9BRlg7QUFHRSxTQUFHLEVBQUVMLEdBSFA7QUFJRSxlQUFTLEVBQ1BNLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCLENBQXpCLEtBQStCQyxLQUEvQixHQUNJLHVCQURKLEdBRUksV0FQUjtBQUFBLGdCQVVHTjtBQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQkQsQ0FuQmtCO0FBQUEsVUFFUUMsd0RBRlI7QUFBQSxHQUFyQjtNQUFNUCxZO0FBc0JOLElBQU1hLFdBQVcsZ0JBQUdaLDRDQUFLLENBQUNDLFVBQU4sV0FBaUIsU0FBU1csV0FBVCxDQUFxQkMsS0FBckIsRUFBNEJYLEdBQTVCLEVBQWlDO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSxrQkFDNUJZLHNEQUFRLENBQUMsS0FBRCxDQURvQjtBQUFBLE1BQzdEQyxZQUQ2RDtBQUFBLE1BQy9DQyxlQUQrQzs7QUFBQSxpQkFFaERWLGdFQUFNLEVBRjBDO0FBQUEsTUFFNURXLE9BRjRELFlBRTVEQSxPQUY0RDs7QUFBQSw2QkFHbERDLHFFQUFtQixFQUgrQjtBQUFBLE1BRzVEQyxLQUg0RCx3QkFHNURBLEtBSDREOztBQUtwRSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFdBQU1KLGVBQWUsQ0FBQyxDQUFDRCxZQUFGLENBQXJCO0FBQUEsR0FBckI7O0FBRUEsTUFBTU0sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLEtBQUNKLE9BQUQsSUFBWUQsZUFBZSxDQUFDLElBQUQsQ0FBM0I7QUFDRCxHQUZEOztBQUlBLE1BQU1NLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QixLQUFDTCxPQUFELElBQVlELGVBQWUsQ0FBQyxLQUFELENBQTNCO0FBQ0QsR0FGRDs7QUFJQU8seURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsU0FBUyxHQUFHLElBQWhCOztBQUNBLFFBQUlMLEtBQUssSUFBSSxHQUFiLEVBQWtCO0FBQ2hCSCxxQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNEOztBQUNELFdBQU8sWUFBTTtBQUNYUSxlQUFTLEdBQUcsS0FBWjtBQUNELEtBRkQ7QUFHRCxHQVJRLEVBUU4sQ0FBQ0wsS0FBRCxDQVJNLENBQVQ7QUFVQSxzQkFDRSxxRUFBQyxvRUFBRDtBQUNFLGVBQVcsRUFBRUUsZ0JBRGY7QUFFRSxnQkFBWSxFQUFFQyxnQkFGaEI7QUFBQSw0QkFJRTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBLDhCQUNFO0FBQUcsWUFBSSxFQUFFVCxLQUFLLENBQUNWLElBQWY7QUFBcUIsV0FBRyxFQUFFRCxHQUExQjtBQUFBLGtCQUNHVyxLQUFLLENBQUNGO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUUscUVBQUMsb0VBQUQ7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLGVBQU8sRUFBRVMsWUFGWDtBQUdFLGdCQUFRLEVBQUUsQ0FBQ0gsT0FBRCxJQUFZRSxLQUFLLEdBQUcsR0FIaEM7QUFBQSxrQkFLR0osWUFBWSxJQUFJRSxPQUFoQixnQkFBMEIscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBMUIsZ0JBQTZDLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLEVBaUJHRixZQUFZLGlCQUNYLHFFQUFDLHFFQUFEO0FBQW9CLG9CQUFjLEVBQUVBLFlBQXBDO0FBQUEsZ0JBQ0dGLEtBREgsYUFDR0EsS0FESCx1Q0FDR0EsS0FBSyxDQUFFWSxLQURWLGlEQUNHLGFBQWNDLEdBQWQsQ0FBa0IsVUFBQUMsSUFBSTtBQUFBLDRCQUNyQixxRUFBQyxnREFBRDtBQUNFLGNBQUksRUFBRTtBQUNKQyxvQkFBUSxxQkFESjtBQUVKQyxpQkFBSyxFQUFFO0FBQ0xKLG1CQUFLLFlBQUtLLDJFQUFnQixDQUFDSCxJQUFJLENBQUNoQixLQUFOLENBQXJCO0FBREE7QUFGSCxXQURSO0FBUUUsa0JBQVEsTUFSVjtBQUFBLGlDQVVFLHFFQUFDLFlBQUQ7QUFBYyx3QkFBWSxFQUFFZ0IsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVoQjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkYsV0FPT2dCLElBQUksQ0FBQ0ksRUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURxQjtBQUFBLE9BQXRCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNDRCxDQS9EbUI7QUFBQSxVQUVFekIsd0RBRkYsRUFHQVksNkRBSEE7QUFBQSxHQUFwQjtNQUFNTixXO0FBaUVTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbmF2YmFyL05hdkRyb3Bkb3duLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBNZEV4cGFuZE1vcmUsIE1kRXhwYW5kTGVzcyB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcblxuaW1wb3J0IHsgdXNlTmF2IH0gZnJvbSAnLi4vLi4vY29udGV4dC9uYXZTdGF0ZSc7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLi8uLi9saWIvd2luZG93RGltZW5zaW9ucyc7XG5pbXBvcnQgeyBmb3JtYXRVcmxUb1JvdXRlIH0gZnJvbSAnLi4vLi4vaGVscGVycy9mb3JtYXRVcmwnO1xuXG5pbXBvcnQge1xuICBEcm9wZG93bkJ0blN0eWxlcyxcbiAgRHJvcGRvd25JdGVtU3R5bGVzLFxuICBEcm9wZG93bk1lbnVTdHlsZXMsXG4gIE5hdkRyb3Bkb3duU3R5bGVzLFxufSBmcm9tICcuL05hdkRyb3Bkb3duU3R5bGVzJztcblxuY29uc3QgRHJvcGRvd25JdGVtID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKHsgaHJlZiwgb25DbGljaywgZHJvcERvd25JdGVtIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgY2xvc2VTaWRlTmF2IH0gPSB1c2VOYXYoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPERyb3Bkb3duSXRlbVN0eWxlcz5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsb3NlU2lkZU5hdigpfVxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICByb3V0ZXIuYXNQYXRoLnNwbGl0KCcvJylbMV0gPT0gdGl0bGVcbiAgICAgICAgICAgICAgPyAnYWN0aXZlLWxpbmsgbGluay1pdGVtJ1xuICAgICAgICAgICAgICA6ICdsaW5rLWl0ZW0nXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAge2Ryb3BEb3duSXRlbX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9Ecm9wZG93bkl0ZW1TdHlsZXM+XG4gICAgKTtcbiAgfVxuKTtcblxuY29uc3QgTmF2RHJvcGRvd24gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE5hdkRyb3Bkb3duKHByb3BzLCByZWYpIHtcbiAgY29uc3QgW2Ryb3Bkb3duT3Blbiwgc2V0RHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBuYXZPcGVuIH0gPSB1c2VOYXYoKTtcbiAgY29uc3QgeyB3aWR0aCB9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xuXG4gIGNvbnN0IHNob3dEcm9wZG93biA9ICgpID0+IHNldERyb3Bkb3duT3BlbighZHJvcGRvd25PcGVuKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xuICAgICFuYXZPcGVuICYmIHNldERyb3Bkb3duT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgICFuYXZPcGVuICYmIHNldERyb3Bkb3duT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaXNNb3VudGVkID0gdHJ1ZTtcbiAgICBpZiAod2lkdGggPj0gODUwKSB7XG4gICAgICBzZXREcm9wZG93bk9wZW4oZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNNb3VudGVkID0gZmFsc2U7XG4gICAgfTtcbiAgfSwgW3dpZHRoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2RHJvcGRvd25TdHlsZXNcbiAgICAgIG9uTW91c2VPdmVyPXtoYW5kbGVNb3VzZUVudGVyfVxuICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93bi1idG5zLWdyb3VwJz5cbiAgICAgICAgPGEgaHJlZj17cHJvcHMuaHJlZn0gcmVmPXtyZWZ9PlxuICAgICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgICAgPC9hPlxuICAgICAgICA8RHJvcGRvd25CdG5TdHlsZXNcbiAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgb25DbGljaz17c2hvd0Ryb3Bkb3dufVxuICAgICAgICAgIGRpc2FibGVkPXshbmF2T3BlbiB8fCB3aWR0aCA+IDg1MH1cbiAgICAgICAgPlxuICAgICAgICAgIHtkcm9wZG93bk9wZW4gJiYgbmF2T3BlbiA/IDxNZEV4cGFuZExlc3MgLz4gOiA8TWRFeHBhbmRNb3JlIC8+fVxuICAgICAgICA8L0Ryb3Bkb3duQnRuU3R5bGVzPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtkcm9wZG93bk9wZW4gJiYgKFxuICAgICAgICA8RHJvcGRvd25NZW51U3R5bGVzIGlzRHJvcGRvd25PcGVuPXtkcm9wZG93bk9wZW59PlxuICAgICAgICAgIHtwcm9wcz8uaXRlbXM/Lm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9e3tcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogYC9wcm9kdWN0cy9baXRlbXNdYCxcbiAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgaXRlbXM6IGAke2Zvcm1hdFVybFRvUm91dGUoaXRlbS50aXRsZSl9YCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZHJvcERvd25JdGVtPXtpdGVtPy50aXRsZX0gLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Ecm9wZG93bk1lbnVTdHlsZXM+XG4gICAgICApfVxuICAgIDwvTmF2RHJvcGRvd25TdHlsZXM+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2RHJvcGRvd247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar/NavDropdown.js\n");

/***/ })

})