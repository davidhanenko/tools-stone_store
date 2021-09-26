webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar/NavDropdown.js":
/*!******************************************!*\
  !*** ./components/navbar/NavDropdown.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _NavDropdownStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavDropdownStyles */ \"./components/navbar/NavDropdownStyles.js\");\n/* harmony import */ var _lib_navState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/navState */ \"./lib/navState.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/navbar/NavDropdown.js\",\n    _s = $RefreshSig$();\n\n/* eslint-disable jsx-a11y/click-events-have-key-events */\n// import { useQuery } from '@apollo/client';\n// import gql from 'graphql-tag';\n\n\n\n\n\n\n\n\nfunction DropdownItem(_ref) {\n  var item = _ref.item;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_4__[\"DropdownItemStyles\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: item,\n      children: [item, \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n\n_c = DropdownItem;\nvar NavDropdown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c2 = _s(function NavDropdown(props, ref) {\n  var _props$products,\n      _this = this;\n\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      dropdownOpen = _useState[0],\n      setDropdownOpen = _useState[1];\n\n  var _useNav = Object(_lib_navState__WEBPACK_IMPORTED_MODULE_5__[\"useNav\"])(),\n      navOpen = _useNav.navOpen;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(),\n      width = _useWindowDimensions.width;\n\n  var showDropdown = function showDropdown() {\n    return setDropdownOpen(!dropdownOpen);\n  };\n\n  var mouseEnter = function mouseEnter() {\n    !navOpen && setDropdownOpen(true);\n  };\n\n  var mouseLeave = function mouseLeave() {\n    !navOpen && setDropdownOpen(false);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (width >= 850) {\n      setDropdownOpen(false);\n    }\n  }, [width]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_4__[\"NavDropdownStyles\"], {\n    onMouseOver: mouseEnter,\n    onMouseLeave: mouseLeave,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"dropdown-btns-group\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: props.href,\n        ref: ref,\n        children: props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_4__[\"DropdownBtnStyles\"], {\n        type: \"button\",\n        onClick: showDropdown,\n        disabled: !navOpen || width > 850,\n        children: dropdownOpen && navOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdExpandLess\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 38\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdExpandMore\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 57\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), dropdownOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_4__[\"DropdownMenuStyles\"], {\n      children: props === null || props === void 0 ? void 0 : (_props$products = props.products) === null || _props$products === void 0 ? void 0 : _props$products.map(function (product) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: product.product_title.toLowerCase(),\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownItem, {\n            item: product.product_title.toLowerCase()\n          }, product.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, this);\n}, \"plV0bTHcTVR4u9m8lBiRT8ewwow=\", false, function () {\n  return [_lib_navState__WEBPACK_IMPORTED_MODULE_5__[\"useNav\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__[\"default\"]];\n}));\n_c3 = NavDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavDropdown);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"DropdownItem\");\n$RefreshReg$(_c2, \"NavDropdown$React.forwardRef\");\n$RefreshReg$(_c3, \"NavDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2RHJvcGRvd24uanM/NzM2OCJdLCJuYW1lcyI6WyJEcm9wZG93bkl0ZW0iLCJpdGVtIiwiTmF2RHJvcGRvd24iLCJSZWFjdCIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsInVzZVN0YXRlIiwiZHJvcGRvd25PcGVuIiwic2V0RHJvcGRvd25PcGVuIiwidXNlTmF2IiwibmF2T3BlbiIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInNob3dEcm9wZG93biIsIm1vdXNlRW50ZXIiLCJtb3VzZUxlYXZlIiwidXNlRWZmZWN0IiwiaHJlZiIsInRpdGxlIiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwicHJvZHVjdF90aXRsZSIsInRvTG93ZXJDYXNlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULE9BQWdDO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQzlCLHNCQUNFLHFFQUFDLHFFQUFEO0FBQUEsMkJBQ0U7QUFBRyxVQUFJLEVBQUVBLElBQVQ7QUFBQSxpQkFBZ0JBLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztLQU5RRCxZO0FBUVQsSUFBTUUsV0FBVyxnQkFBR0MsNENBQUssQ0FBQ0MsVUFBTixVQUFpQixTQUFTRixXQUFULENBQXFCRyxLQUFyQixFQUE0QkMsR0FBNUIsRUFBaUM7QUFBQTtBQUFBOztBQUFBOztBQUFBLGtCQUU1QkMsc0RBQVEsQ0FBQyxLQUFELENBRm9CO0FBQUEsTUFFN0RDLFlBRjZEO0FBQUEsTUFFL0NDLGVBRitDOztBQUFBLGdCQUdoREMsNERBQU0sRUFIMEM7QUFBQSxNQUc1REMsT0FINEQsV0FHNURBLE9BSDREOztBQUFBLDZCQUlsREMscUVBQW1CLEVBSitCO0FBQUEsTUFJNURDLEtBSjRELHdCQUk1REEsS0FKNEQ7O0FBTXBFLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsV0FBTUwsZUFBZSxDQUFDLENBQUNELFlBQUYsQ0FBckI7QUFBQSxHQUFyQjs7QUFFQSxNQUFNTyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLEtBQUNKLE9BQUQsSUFBWUYsZUFBZSxDQUFDLElBQUQsQ0FBM0I7QUFDRCxHQUZEOztBQUlBLE1BQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsS0FBQ0wsT0FBRCxJQUFZRixlQUFlLENBQUMsS0FBRCxDQUEzQjtBQUNELEdBRkQ7O0FBSUFRLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlKLEtBQUssSUFBSSxHQUFiLEVBQWtCO0FBQ2hCSixxQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNJLEtBQUQsQ0FKTSxDQUFUO0FBTUEsc0JBQ0UscUVBQUMsb0VBQUQ7QUFBbUIsZUFBVyxFQUFFRSxVQUFoQztBQUE0QyxnQkFBWSxFQUFFQyxVQUExRDtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQUEsOEJBQ0U7QUFBRyxZQUFJLEVBQUVYLEtBQUssQ0FBQ2EsSUFBZjtBQUFxQixXQUFHLEVBQUVaLEdBQTFCO0FBQUEsa0JBQ0dELEtBQUssQ0FBQ2M7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSxxRUFBQyxvRUFBRDtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsZUFBTyxFQUFFTCxZQUZYO0FBR0UsZ0JBQVEsRUFBRSxDQUFDSCxPQUFELElBQVlFLEtBQUssR0FBRyxHQUhoQztBQUFBLGtCQUtHTCxZQUFZLElBQUlHLE9BQWhCLGdCQUEwQixxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUExQixnQkFBNkMscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFjR0gsWUFBWSxpQkFDWCxxRUFBQyxxRUFBRDtBQUFBLGdCQUNHSCxLQURILGFBQ0dBLEtBREgsMENBQ0dBLEtBQUssQ0FBRWUsUUFEVixvREFDRyxnQkFBaUJDLEdBQWpCLENBQXFCLFVBQUFDLE9BQU87QUFBQSw0QkFDM0IscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUVBLE9BQU8sQ0FBQ0MsYUFBUixDQUFzQkMsV0FBdEIsRUFBWjtBQUFpRCxrQkFBUSxNQUF6RDtBQUFBLGlDQUNFLHFFQUFDLFlBQUQ7QUFFRSxnQkFBSSxFQUFFRixPQUFPLENBQUNDLGFBQVIsQ0FBc0JDLFdBQXRCO0FBRlIsYUFDT0YsT0FBTyxDQUFDRyxFQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQyQjtBQUFBLE9BQTVCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkJELENBbkRtQjtBQUFBLFVBR0VmLG9EQUhGLEVBSUFFLDZEQUpBO0FBQUEsR0FBcEI7TUFBTVYsVztBQXFEU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci9OYXZEcm9wZG93bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2NsaWNrLWV2ZW50cy1oYXZlLWtleS1ldmVudHMgKi9cbi8vIGltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuLy8gaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgTWRFeHBhbmRNb3JlLCBNZEV4cGFuZExlc3MgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5pbXBvcnQge1xuICBEcm9wZG93bkJ0blN0eWxlcyxcbiAgRHJvcGRvd25JdGVtU3R5bGVzLFxuICBEcm9wZG93bk1lbnVTdHlsZXMsXG4gIE5hdkRyb3Bkb3duU3R5bGVzLFxufSBmcm9tICcuL05hdkRyb3Bkb3duU3R5bGVzJztcbmltcG9ydCB7IHVzZU5hdiB9IGZyb20gJy4uLy4uL2xpYi9uYXZTdGF0ZSc7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLi8uLi9saWIvd2luZG93RGltZW5zaW9ucyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIERyb3Bkb3duSXRlbSh7IGl0ZW0gfSkge1xuICByZXR1cm4gKFxuICAgIDxEcm9wZG93bkl0ZW1TdHlsZXM+XG4gICAgICA8YSBocmVmPXtpdGVtfT57aXRlbX0gPC9hPlxuICAgIDwvRHJvcGRvd25JdGVtU3R5bGVzPlxuICApO1xufVxuXG5jb25zdCBOYXZEcm9wZG93biA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTmF2RHJvcGRvd24ocHJvcHMsIHJlZikge1xuXG4gIGNvbnN0IFtkcm9wZG93bk9wZW4sIHNldERyb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgbmF2T3BlbiB9ID0gdXNlTmF2KCk7XG4gIGNvbnN0IHsgd2lkdGggfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcblxuICBjb25zdCBzaG93RHJvcGRvd24gPSAoKSA9PiBzZXREcm9wZG93bk9wZW4oIWRyb3Bkb3duT3Blbik7XG5cbiAgY29uc3QgbW91c2VFbnRlciA9ICgpID0+IHtcbiAgICAhbmF2T3BlbiAmJiBzZXREcm9wZG93bk9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgbW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICAhbmF2T3BlbiAmJiBzZXREcm9wZG93bk9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdpZHRoID49IDg1MCkge1xuICAgICAgc2V0RHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgICB9XG4gIH0sIFt3aWR0aF0pO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdkRyb3Bkb3duU3R5bGVzIG9uTW91c2VPdmVyPXttb3VzZUVudGVyfSBvbk1vdXNlTGVhdmU9e21vdXNlTGVhdmV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Ryb3Bkb3duLWJ0bnMtZ3JvdXAnPlxuICAgICAgICA8YSBocmVmPXtwcm9wcy5ocmVmfSByZWY9e3JlZn0+XG4gICAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgICA8L2E+XG4gICAgICAgIDxEcm9wZG93bkJ0blN0eWxlc1xuICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICBvbkNsaWNrPXtzaG93RHJvcGRvd259XG4gICAgICAgICAgZGlzYWJsZWQ9eyFuYXZPcGVuIHx8IHdpZHRoID4gODUwfVxuICAgICAgICA+XG4gICAgICAgICAge2Ryb3Bkb3duT3BlbiAmJiBuYXZPcGVuID8gPE1kRXhwYW5kTGVzcyAvPiA6IDxNZEV4cGFuZE1vcmUgLz59XG4gICAgICAgIDwvRHJvcGRvd25CdG5TdHlsZXM+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2Ryb3Bkb3duT3BlbiAmJiAoXG4gICAgICAgIDxEcm9wZG93bk1lbnVTdHlsZXM+XG4gICAgICAgICAge3Byb3BzPy5wcm9kdWN0cz8ubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvZHVjdC5wcm9kdWN0X3RpdGxlLnRvTG93ZXJDYXNlKCl9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgIGl0ZW09e3Byb2R1Y3QucHJvZHVjdF90aXRsZS50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0Ryb3Bkb3duTWVudVN0eWxlcz5cbiAgICAgICl9XG4gICAgPC9OYXZEcm9wZG93blN0eWxlcz5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZEcm9wZG93bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar/NavDropdown.js\n");

/***/ })

})