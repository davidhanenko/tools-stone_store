webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/NavDropdown.js":
/*!***********************************!*\
  !*** ./components/NavDropdown.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_navState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/navState */ \"./lib/navState.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/NavDropdown.js\",\n    _s = $RefreshSig$();\n\n/* eslint-disable jsx-a11y/click-events-have-key-events */\n// import { useQuery } from '@apollo/client';\n// import gql from 'graphql-tag';\n\n\n\n\n\nvar NavDropdownStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].a.withConfig({\n  displayName: \"NavDropdown__NavDropdownStyles\",\n  componentId: \"sc-1088b0g-0\"\n})([\"padding:0.2rem 1rem;text-transform:uppercase;color:grey;position:relative;display:flex;cursor:pointer;&:hover,&:focus{text-decoration:none;color:var(--black);transition:250ms;background:none;}@media (max-width:700px){padding-left:3rem;width:200px;border-bottom:1px solid var(--lightGrey);padding-bottom:1rem;}\"]);\n_c = NavDropdownStyles;\nvar DropdownBtnStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].button.withConfig({\n  displayName: \"NavDropdown__DropdownBtnStyles\",\n  componentId: \"sc-1088b0g-1\"\n})([\"padding:0;font-size:2em;display:inline-block;outline:none;border:none;background:transparent;cursor:pointer;@media (max-width:700px){display:inline-block;}svg{padding-bottom:0.3rem;color:grey;}\"]);\n_c2 = DropdownBtnStyles;\nvar DropdownMenuStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ul.withConfig({\n  displayName: \"NavDropdown__DropdownMenuStyles\",\n  componentId: \"sc-1088b0g-2\"\n})([\"background:var(--lightGrey);margin:0;li{font-size:1rem;padding-left:2rem;text-decoration:none;list-style:none;}\"]);\n_c3 = DropdownMenuStyles;\n\nfunction DropdownItem() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    children: \"1\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 10\n  }, this);\n}\n\n_c4 = DropdownItem;\nvar NavDropdown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(_c5 = _s(function NavDropdown(props, ref) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      dropdownOpen = _useState[0],\n      setDropdownOpen = _useState[1];\n\n  var _useNav = Object(_lib_navState__WEBPACK_IMPORTED_MODULE_5__[\"useNav\"])(),\n      navOpen = _useNav.navOpen;\n\n  var showDropdown = function showDropdown() {\n    return setDropdownOpen(!dropdownOpen);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(NavDropdownStyles, {\n      href: props.href,\n      ref: ref,\n      children: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownBtnStyles, {\n      type: \"button\",\n      onClick: showDropdown,\n      disabled: !navOpen,\n      children: dropdownOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdExpandLess\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 25\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdExpandMore\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 44\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, this), navOpen && dropdownOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownMenuStyles, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownItem, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}, \"FeGxAD5c7VBVItUadFel+Aaa0kI=\", false, function () {\n  return [_lib_navState__WEBPACK_IMPORTED_MODULE_5__[\"useNav\"]];\n}));\n_c6 = NavDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavDropdown);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"NavDropdownStyles\");\n$RefreshReg$(_c2, \"DropdownBtnStyles\");\n$RefreshReg$(_c3, \"DropdownMenuStyles\");\n$RefreshReg$(_c4, \"DropdownItem\");\n$RefreshReg$(_c5, \"NavDropdown$React.forwardRef\");\n$RefreshReg$(_c6, \"NavDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZEcm9wZG93bi5qcz9kMTQzIl0sIm5hbWVzIjpbIk5hdkRyb3Bkb3duU3R5bGVzIiwic3R5bGVkIiwiYSIsIkRyb3Bkb3duQnRuU3R5bGVzIiwiYnV0dG9uIiwiRHJvcGRvd25NZW51U3R5bGVzIiwidWwiLCJEcm9wZG93bkl0ZW0iLCJOYXZEcm9wZG93biIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwidXNlU3RhdGUiLCJkcm9wZG93bk9wZW4iLCJzZXREcm9wZG93bk9wZW4iLCJ1c2VOYXYiLCJuYXZPcGVuIiwic2hvd0Ryb3Bkb3duIiwiaHJlZiIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGlCQUFpQixHQUFHQyx5REFBTSxDQUFDQyxDQUFWO0FBQUE7QUFBQTtBQUFBLDZUQUF2QjtLQUFNRixpQjtBQXNCTixJQUFNRyxpQkFBaUIsR0FBR0YseURBQU0sQ0FBQ0csTUFBVjtBQUFBO0FBQUE7QUFBQSx5TUFBdkI7TUFBTUQsaUI7QUFxQk4sSUFBTUUsa0JBQWtCLEdBQUdKLHlEQUFNLENBQUNLLEVBQVY7QUFBQTtBQUFBO0FBQUEsdUhBQXhCO01BQU1ELGtCOztBQVdOLFNBQVNFLFlBQVQsR0FBd0I7QUFDdEIsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztNQUZRQSxZO0FBSVQsSUFBTUMsV0FBVyxnQkFBR0MsNENBQUssQ0FBQ0MsVUFBTixVQUFpQixTQUFTRixXQUFULENBQXFCRyxLQUFyQixFQUE0QkMsR0FBNUIsRUFBaUM7QUFBQTs7QUFBQSxrQkFDNUJDLHNEQUFRLENBQUMsS0FBRCxDQURvQjtBQUFBLE1BQzdEQyxZQUQ2RDtBQUFBLE1BQy9DQyxlQUQrQzs7QUFBQSxnQkFFaERDLDREQUFNLEVBRjBDO0FBQUEsTUFFNURDLE9BRjRELFdBRTVEQSxPQUY0RDs7QUFJcEUsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxXQUFNSCxlQUFlLENBQUMsQ0FBQ0QsWUFBRixDQUFyQjtBQUFBLEdBQXJCOztBQUVBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsaUJBQUQ7QUFBbUIsVUFBSSxFQUFFSCxLQUFLLENBQUNRLElBQS9CO0FBQXFDLFNBQUcsRUFBRVAsR0FBMUM7QUFBQSxnQkFDR0QsS0FBSyxDQUFDUztBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLHFFQUFDLGlCQUFEO0FBQ0UsVUFBSSxFQUFDLFFBRFA7QUFFRSxhQUFPLEVBQUVGLFlBRlg7QUFHRSxjQUFRLEVBQUUsQ0FBQ0QsT0FIYjtBQUFBLGdCQUtHSCxZQUFZLGdCQUFHLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBSCxnQkFBc0IscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsRUFZR0csT0FBTyxJQUFJSCxZQUFYLGlCQUNDLHFFQUFDLGtCQUFEO0FBQUEsNkJBQ0UscUVBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJKO0FBQUEsa0JBREY7QUFvQkQsQ0ExQm1CO0FBQUEsVUFFRUUsb0RBRkY7QUFBQSxHQUFwQjtNQUFNUixXO0FBNEJTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2RHJvcGRvd24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG4vLyBpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50Jztcbi8vIGltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1kRXhwYW5kTW9yZSwgTWRFeHBhbmRMZXNzIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VOYXYgfSBmcm9tICcuLi9saWIvbmF2U3RhdGUnO1xuXG5jb25zdCBOYXZEcm9wZG93blN0eWxlcyA9IHN0eWxlZC5hYFxuICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IGdyZXk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICB0cmFuc2l0aW9uOiAyNTBtcztcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JleSk7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIH1cbmA7XG5cbmNvbnN0IERyb3Bkb3duQnRuU3R5bGVzID0gc3R5bGVkLmJ1dHRvbmBcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogNXJlbTsgKi9cbiAgfVxuICBzdmcge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG4gICAgY29sb3I6IGdyZXk7XG4gIH1cbmA7XG5cbmNvbnN0IERyb3Bkb3duTWVudVN0eWxlcyA9IHN0eWxlZC51bGBcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRHcmV5KTtcbiAgbWFyZ2luOiAwO1xuICBsaSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuYDtcblxuZnVuY3Rpb24gRHJvcGRvd25JdGVtKCkge1xuICByZXR1cm4gPGxpPjE8L2xpPjtcbn1cblxuY29uc3QgTmF2RHJvcGRvd24gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE5hdkRyb3Bkb3duKHByb3BzLCByZWYpIHtcbiAgY29uc3QgW2Ryb3Bkb3duT3Blbiwgc2V0RHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBuYXZPcGVuIH0gPSB1c2VOYXYoKTtcblxuICBjb25zdCBzaG93RHJvcGRvd24gPSAoKSA9PiBzZXREcm9wZG93bk9wZW4oIWRyb3Bkb3duT3Blbik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdkRyb3Bkb3duU3R5bGVzIGhyZWY9e3Byb3BzLmhyZWZ9IHJlZj17cmVmfT5cbiAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgPC9OYXZEcm9wZG93blN0eWxlcz5cbiAgICAgIDxEcm9wZG93bkJ0blN0eWxlc1xuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17c2hvd0Ryb3Bkb3dufVxuICAgICAgICBkaXNhYmxlZD17IW5hdk9wZW59XG4gICAgICA+XG4gICAgICAgIHtkcm9wZG93bk9wZW4gPyA8TWRFeHBhbmRMZXNzIC8+IDogPE1kRXhwYW5kTW9yZSAvPn1cbiAgICAgIDwvRHJvcGRvd25CdG5TdHlsZXM+XG5cbiAgICAgIHtuYXZPcGVuICYmIGRyb3Bkb3duT3BlbiAmJiAoXG4gICAgICAgIDxEcm9wZG93bk1lbnVTdHlsZXM+XG4gICAgICAgICAgPERyb3Bkb3duSXRlbSAvPlxuICAgICAgICA8L0Ryb3Bkb3duTWVudVN0eWxlcz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2RHJvcGRvd247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NavDropdown.js\n");

/***/ })

})