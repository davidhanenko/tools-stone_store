webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar/NavDropdown.js":
/*!******************************************!*\
  !*** ./components/navbar/NavDropdown.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _NavDropdownStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavDropdownStyles */ \"./components/navbar/NavDropdownStyles.js\");\n/* harmony import */ var _lib_navState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/navState */ \"./lib/navState.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/navbar/NavDropdown.js\",\n    _s = $RefreshSig$();\n\n/* eslint-disable jsx-a11y/click-events-have-key-events */\n// import { useQuery } from '@apollo/client';\n// import gql from 'graphql-tag';\n\n\n\n\n\n\n\nfunction DropdownItem(_ref) {\n  var item = _ref.item;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_3__[\"DropdownItemStyles\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: item,\n      children: [item, \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}\n\n_c = DropdownItem;\nvar NavDropdown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c2 = _s(function NavDropdown(props, ref) {\n  var _props$products,\n      _this = this;\n\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      dropdownOpen = _useState[0],\n      setDropdownOpen = _useState[1];\n\n  var _useNav = Object(_lib_navState__WEBPACK_IMPORTED_MODULE_4__[\"useNav\"])(),\n      navOpen = _useNav.navOpen;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(),\n      width = _useWindowDimensions.width;\n\n  var showDropdown = function showDropdown() {\n    return setDropdownOpen(!dropdownOpen);\n  };\n\n  var mouseEnter = function mouseEnter() {\n    !navOpen && setDropdownOpen(true);\n  };\n\n  var mouseLeave = function mouseLeave() {\n    !navOpen && setDropdownOpen(false);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (width >= 850) {\n      setDropdownOpen(false);\n    }\n  }, [width]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_3__[\"NavDropdownStyles\"], {\n    onMouseOver: mouseEnter,\n    onMouseLeave: mouseLeave,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"dropdown-btns-group\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: props.href,\n        ref: ref,\n        children: props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_3__[\"DropdownBtnStyles\"], {\n        type: \"button\",\n        onClick: showDropdown,\n        disabled: !navOpen || width > 850,\n        children: dropdownOpen && navOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_2__[\"MdExpandLess\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 38\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_2__[\"MdExpandMore\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 57\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), dropdownOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_3__[\"DropdownMenuStyles\"], {\n      children: props === null || props === void 0 ? void 0 : (_props$products = props.products) === null || _props$products === void 0 ? void 0 : _props$products.map(function (product) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownItem, {\n          item: product.product_title.toLowerCase()\n        }, product.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, this);\n}, \"plV0bTHcTVR4u9m8lBiRT8ewwow=\", false, function () {\n  return [_lib_navState__WEBPACK_IMPORTED_MODULE_4__[\"useNav\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n}));\n_c3 = NavDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavDropdown);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"DropdownItem\");\n$RefreshReg$(_c2, \"NavDropdown$React.forwardRef\");\n$RefreshReg$(_c3, \"NavDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2RHJvcGRvd24uanM/NzM2OCJdLCJuYW1lcyI6WyJEcm9wZG93bkl0ZW0iLCJpdGVtIiwiTmF2RHJvcGRvd24iLCJSZWFjdCIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsInVzZVN0YXRlIiwiZHJvcGRvd25PcGVuIiwic2V0RHJvcGRvd25PcGVuIiwidXNlTmF2IiwibmF2T3BlbiIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInNob3dEcm9wZG93biIsIm1vdXNlRW50ZXIiLCJtb3VzZUxlYXZlIiwidXNlRWZmZWN0IiwiaHJlZiIsInRpdGxlIiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwicHJvZHVjdF90aXRsZSIsInRvTG93ZXJDYXNlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsT0FBZ0M7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDOUIsc0JBQ0UscUVBQUMscUVBQUQ7QUFBQSwyQkFDRTtBQUFHLFVBQUksRUFBRUEsSUFBVDtBQUFBLGlCQUFnQkEsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0tBTlFELFk7QUFRVCxJQUFNRSxXQUFXLGdCQUFHQyw0Q0FBSyxDQUFDQyxVQUFOLFVBQWlCLFNBQVNGLFdBQVQsQ0FBcUJHLEtBQXJCLEVBQTRCQyxHQUE1QixFQUFpQztBQUFBO0FBQUE7O0FBQUE7O0FBQUEsa0JBRTVCQyxzREFBUSxDQUFDLEtBQUQsQ0FGb0I7QUFBQSxNQUU3REMsWUFGNkQ7QUFBQSxNQUUvQ0MsZUFGK0M7O0FBQUEsZ0JBR2hEQyw0REFBTSxFQUgwQztBQUFBLE1BRzVEQyxPQUg0RCxXQUc1REEsT0FINEQ7O0FBQUEsNkJBSWxEQyxxRUFBbUIsRUFKK0I7QUFBQSxNQUk1REMsS0FKNEQsd0JBSTVEQSxLQUo0RDs7QUFNcEUsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxXQUFNTCxlQUFlLENBQUMsQ0FBQ0QsWUFBRixDQUFyQjtBQUFBLEdBQXJCOztBQUVBLE1BQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsS0FBQ0osT0FBRCxJQUFZRixlQUFlLENBQUMsSUFBRCxDQUEzQjtBQUNELEdBRkQ7O0FBSUEsTUFBTU8sVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixLQUFDTCxPQUFELElBQVlGLGVBQWUsQ0FBQyxLQUFELENBQTNCO0FBQ0QsR0FGRDs7QUFJQVEseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUosS0FBSyxJQUFJLEdBQWIsRUFBa0I7QUFDaEJKLHFCQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0ksS0FBRCxDQUpNLENBQVQ7QUFNQSxzQkFDRSxxRUFBQyxvRUFBRDtBQUFtQixlQUFXLEVBQUVFLFVBQWhDO0FBQTRDLGdCQUFZLEVBQUVDLFVBQTFEO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQSw4QkFDRTtBQUFHLFlBQUksRUFBRVgsS0FBSyxDQUFDYSxJQUFmO0FBQXFCLFdBQUcsRUFBRVosR0FBMUI7QUFBQSxrQkFDR0QsS0FBSyxDQUFDYztBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFLHFFQUFDLG9FQUFEO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxlQUFPLEVBQUVMLFlBRlg7QUFHRSxnQkFBUSxFQUFFLENBQUNILE9BQUQsSUFBWUUsS0FBSyxHQUFHLEdBSGhDO0FBQUEsa0JBS0dMLFlBQVksSUFBSUcsT0FBaEIsZ0JBQTBCLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQTFCLGdCQUE2QyxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTGhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQWNHSCxZQUFZLGlCQUNYLHFFQUFDLHFFQUFEO0FBQUEsZ0JBQ0dILEtBREgsYUFDR0EsS0FESCwwQ0FDR0EsS0FBSyxDQUFFZSxRQURWLG9EQUNHLGdCQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsT0FBRDtBQUFBLDRCQUNwQixxRUFBQyxZQUFEO0FBQStCLGNBQUksRUFBRUEsT0FBTyxDQUFDQyxhQUFSLENBQXNCQyxXQUF0QjtBQUFyQyxXQUFtQkYsT0FBTyxDQUFDRyxFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURvQjtBQUFBLE9BQXJCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JELENBOUNtQjtBQUFBLFVBR0VmLG9EQUhGLEVBSUFFLDZEQUpBO0FBQUEsR0FBcEI7TUFBTVYsVztBQWdEU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci9OYXZEcm9wZG93bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2NsaWNrLWV2ZW50cy1oYXZlLWtleS1ldmVudHMgKi9cbi8vIGltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuLy8gaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZEV4cGFuZE1vcmUsIE1kRXhwYW5kTGVzcyB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCB7XG4gIERyb3Bkb3duQnRuU3R5bGVzLFxuICBEcm9wZG93bkl0ZW1TdHlsZXMsXG4gIERyb3Bkb3duTWVudVN0eWxlcyxcbiAgTmF2RHJvcGRvd25TdHlsZXMsXG59IGZyb20gJy4vTmF2RHJvcGRvd25TdHlsZXMnO1xuaW1wb3J0IHsgdXNlTmF2IH0gZnJvbSAnLi4vLi4vbGliL25hdlN0YXRlJztcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gJy4uLy4uL2xpYi93aW5kb3dEaW1lbnNpb25zJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gRHJvcGRvd25JdGVtKHsgaXRlbSB9KSB7XG4gIHJldHVybiAoXG4gICAgPERyb3Bkb3duSXRlbVN0eWxlcz5cbiAgICAgIDxhIGhyZWY9e2l0ZW19PntpdGVtfSA8L2E+XG4gICAgPC9Ecm9wZG93bkl0ZW1TdHlsZXM+XG4gICk7XG59XG5cbmNvbnN0IE5hdkRyb3Bkb3duID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBOYXZEcm9wZG93bihwcm9wcywgcmVmKSB7XG5cbiAgY29uc3QgW2Ryb3Bkb3duT3Blbiwgc2V0RHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBuYXZPcGVuIH0gPSB1c2VOYXYoKTtcbiAgY29uc3QgeyB3aWR0aCB9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xuXG4gIGNvbnN0IHNob3dEcm9wZG93biA9ICgpID0+IHNldERyb3Bkb3duT3BlbighZHJvcGRvd25PcGVuKTtcblxuICBjb25zdCBtb3VzZUVudGVyID0gKCkgPT4ge1xuICAgICFuYXZPcGVuICYmIHNldERyb3Bkb3duT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBtb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgICFuYXZPcGVuICYmIHNldERyb3Bkb3duT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2lkdGggPj0gODUwKSB7XG4gICAgICBzZXREcm9wZG93bk9wZW4oZmFsc2UpO1xuICAgIH1cbiAgfSwgW3dpZHRoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2RHJvcGRvd25TdHlsZXMgb25Nb3VzZU92ZXI9e21vdXNlRW50ZXJ9IG9uTW91c2VMZWF2ZT17bW91c2VMZWF2ZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24tYnRucy1ncm91cCc+XG4gICAgICAgIDxhIGhyZWY9e3Byb3BzLmhyZWZ9IHJlZj17cmVmfT5cbiAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgIDwvYT5cbiAgICAgICAgPERyb3Bkb3duQnRuU3R5bGVzXG4gICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgIG9uQ2xpY2s9e3Nob3dEcm9wZG93bn1cbiAgICAgICAgICBkaXNhYmxlZD17IW5hdk9wZW4gfHwgd2lkdGggPiA4NTB9XG4gICAgICAgID5cbiAgICAgICAgICB7ZHJvcGRvd25PcGVuICYmIG5hdk9wZW4gPyA8TWRFeHBhbmRMZXNzIC8+IDogPE1kRXhwYW5kTW9yZSAvPn1cbiAgICAgICAgPC9Ecm9wZG93bkJ0blN0eWxlcz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7ZHJvcGRvd25PcGVuICYmIChcbiAgICAgICAgPERyb3Bkb3duTWVudVN0eWxlcz5cbiAgICAgICAgICB7cHJvcHM/LnByb2R1Y3RzPy5tYXAoKHByb2R1Y3QpPT4gKFxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBrZXk9e3Byb2R1Y3QuaWR9IGl0ZW09e3Byb2R1Y3QucHJvZHVjdF90aXRsZS50b0xvd2VyQ2FzZSgpfS8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvRHJvcGRvd25NZW51U3R5bGVzPlxuICAgICAgKX1cbiAgICA8L05hdkRyb3Bkb3duU3R5bGVzPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkRyb3Bkb3duO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar/NavDropdown.js\n");

/***/ })

})