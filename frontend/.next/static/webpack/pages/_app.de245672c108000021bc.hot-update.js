webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/NavDropdown.js":
/*!***********************************!*\
  !*** ./components/NavDropdown.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_navState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/navState */ \"./lib/navState.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/NavDropdown.js\",\n    _s = $RefreshSig$();\n\n/* eslint-disable jsx-a11y/click-events-have-key-events */\n// import { useQuery } from '@apollo/client';\n// import gql from 'graphql-tag';\n\n\n\n\n\nvar NavDropdownStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"NavDropdown__NavDropdownStyles\",\n  componentId: \"sc-1088b0g-0\"\n})([\"padding:0.2rem 1rem;text-transform:uppercase;color:grey;position:relative;display:flex;cursor:pointer;&:hover,&:focus{text-decoration:none;color:var(--black);transition:250ms;background:none;}@media (max-width:700px){padding-left:3rem;width:200px;border-bottom:1px solid var(--lightGrey);padding-bottom:1rem;}\"]);\n_c = NavDropdownStyles;\nvar DropdownBtnStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].button.withConfig({\n  displayName: \"NavDropdown__DropdownBtnStyles\",\n  componentId: \"sc-1088b0g-1\"\n})([\"padding:0;font-size:2em;outline:none;border:none;background:transparent;cursor:pointer;position:relative;@media (max-width:700px){display:inline-block;}svg{padding-bottom:0.3rem;color:grey;}\"]);\n_c2 = DropdownBtnStyles;\nvar DropdownMenuStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ul.withConfig({\n  displayName: \"NavDropdown__DropdownMenuStyles\",\n  componentId: \"sc-1088b0g-2\"\n})([\"background:var(--lightGrey);margin:0;li{font-size:1rem;padding-left:2rem;text-decoration:none;list-style:none;}\"]);\n_c3 = DropdownMenuStyles;\n\nfunction DropdownItem() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    children: \"1\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 10\n  }, this);\n}\n\n_c4 = DropdownItem;\nvar NavDropdown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(_c5 = _s(function NavDropdown(props, ref) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      dropdownOpen = _useState[0],\n      setDropdownOpen = _useState[1];\n\n  var _useNav = Object(_lib_navState__WEBPACK_IMPORTED_MODULE_5__[\"useNav\"])(),\n      navOpen = _useNav.navOpen;\n\n  var showDropdown = function showDropdown() {\n    return setDropdownOpen(!dropdownOpen);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(NavDropdownStyles, {\n      href: props.href,\n      ref: ref,\n      children: [props.title, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownBtnStyles, {\n        type: \"button\",\n        onClick: showDropdown,\n        disabled: !navOpen,\n        children: dropdownOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdExpandLess\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 27\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdExpandMore\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 46\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, this), navOpen && dropdownOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownMenuStyles, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownItem, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}, \"FeGxAD5c7VBVItUadFel+Aaa0kI=\", false, function () {\n  return [_lib_navState__WEBPACK_IMPORTED_MODULE_5__[\"useNav\"]];\n}));\n_c6 = NavDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavDropdown);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"NavDropdownStyles\");\n$RefreshReg$(_c2, \"DropdownBtnStyles\");\n$RefreshReg$(_c3, \"DropdownMenuStyles\");\n$RefreshReg$(_c4, \"DropdownItem\");\n$RefreshReg$(_c5, \"NavDropdown$React.forwardRef\");\n$RefreshReg$(_c6, \"NavDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZEcm9wZG93bi5qcz9kMTQzIl0sIm5hbWVzIjpbIk5hdkRyb3Bkb3duU3R5bGVzIiwic3R5bGVkIiwiZGl2IiwiRHJvcGRvd25CdG5TdHlsZXMiLCJidXR0b24iLCJEcm9wZG93bk1lbnVTdHlsZXMiLCJ1bCIsIkRyb3Bkb3duSXRlbSIsIk5hdkRyb3Bkb3duIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJ1c2VTdGF0ZSIsImRyb3Bkb3duT3BlbiIsInNldERyb3Bkb3duT3BlbiIsInVzZU5hdiIsIm5hdk9wZW4iLCJzaG93RHJvcGRvd24iLCJocmVmIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNlRBQXZCO0tBQU1GLGlCO0FBd0JOLElBQU1HLGlCQUFpQixHQUFHRix5REFBTSxDQUFDRyxNQUFWO0FBQUE7QUFBQTtBQUFBLHNNQUF2QjtNQUFNRCxpQjtBQW1CTixJQUFNRSxrQkFBa0IsR0FBR0oseURBQU0sQ0FBQ0ssRUFBVjtBQUFBO0FBQUE7QUFBQSx1SEFBeEI7TUFBTUQsa0I7O0FBV04sU0FBU0UsWUFBVCxHQUF3QjtBQUN0QixzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O01BRlFBLFk7QUFJVCxJQUFNQyxXQUFXLGdCQUFHQyw0Q0FBSyxDQUFDQyxVQUFOLFVBQWlCLFNBQVNGLFdBQVQsQ0FBcUJHLEtBQXJCLEVBQTRCQyxHQUE1QixFQUFpQztBQUFBOztBQUFBLGtCQUM1QkMsc0RBQVEsQ0FBQyxLQUFELENBRG9CO0FBQUEsTUFDN0RDLFlBRDZEO0FBQUEsTUFDL0NDLGVBRCtDOztBQUFBLGdCQUVoREMsNERBQU0sRUFGMEM7QUFBQSxNQUU1REMsT0FGNEQsV0FFNURBLE9BRjREOztBQUlwRSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFdBQU1ILGVBQWUsQ0FBQyxDQUFDRCxZQUFGLENBQXJCO0FBQUEsR0FBckI7O0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxpQkFBRDtBQUFtQixVQUFJLEVBQUVILEtBQUssQ0FBQ1EsSUFBL0I7QUFBcUMsU0FBRyxFQUFFUCxHQUExQztBQUFBLGlCQUNHRCxLQUFLLENBQUNTLEtBRFQsZUFFRSxxRUFBQyxpQkFBRDtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsZUFBTyxFQUFFRixZQUZYO0FBR0UsZ0JBQVEsRUFBRSxDQUFDRCxPQUhiO0FBQUEsa0JBS0dILFlBQVksZ0JBQUcscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBSCxnQkFBc0IscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFZR0csT0FBTyxJQUFJSCxZQUFYLGlCQUNDLHFFQUFDLGtCQUFEO0FBQUEsNkJBQ0UscUVBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJKO0FBQUEsa0JBREY7QUFvQkQsQ0ExQm1CO0FBQUEsVUFFRUUsb0RBRkY7QUFBQSxHQUFwQjtNQUFNUixXO0FBNEJTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2RHJvcGRvd24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG4vLyBpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50Jztcbi8vIGltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1kRXhwYW5kTW9yZSwgTWRFeHBhbmRMZXNzIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VOYXYgfSBmcm9tICcuLi9saWIvbmF2U3RhdGUnO1xuXG5jb25zdCBOYXZEcm9wZG93blN0eWxlcyA9IHN0eWxlZC5kaXZgXG5cbiAgICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiBncmV5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAgIHRyYW5zaXRpb246IDI1MG1zO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmV5KTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIH1cbiAgXG5gO1xuXG5jb25zdCBEcm9wZG93bkJ0blN0eWxlcyA9IHN0eWxlZC5idXR0b25gXG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogNXJlbTsgKi9cbiAgfVxuICBzdmcge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG4gICAgY29sb3I6IGdyZXk7XG4gIH1cbmA7XG5cbmNvbnN0IERyb3Bkb3duTWVudVN0eWxlcyA9IHN0eWxlZC51bGBcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRHcmV5KTtcbiAgbWFyZ2luOiAwO1xuICBsaSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuYDtcblxuZnVuY3Rpb24gRHJvcGRvd25JdGVtKCkge1xuICByZXR1cm4gPGxpPjE8L2xpPjtcbn1cblxuY29uc3QgTmF2RHJvcGRvd24gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE5hdkRyb3Bkb3duKHByb3BzLCByZWYpIHtcbiAgY29uc3QgW2Ryb3Bkb3duT3Blbiwgc2V0RHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBuYXZPcGVuIH0gPSB1c2VOYXYoKTtcblxuICBjb25zdCBzaG93RHJvcGRvd24gPSAoKSA9PiBzZXREcm9wZG93bk9wZW4oIWRyb3Bkb3duT3Blbik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdkRyb3Bkb3duU3R5bGVzIGhyZWY9e3Byb3BzLmhyZWZ9IHJlZj17cmVmfT5cbiAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgICA8RHJvcGRvd25CdG5TdHlsZXNcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXtzaG93RHJvcGRvd259XG4gICAgICAgICAgZGlzYWJsZWQ9eyFuYXZPcGVufVxuICAgICAgICA+XG4gICAgICAgICAge2Ryb3Bkb3duT3BlbiA/IDxNZEV4cGFuZExlc3MgLz4gOiA8TWRFeHBhbmRNb3JlIC8+fVxuICAgICAgICA8L0Ryb3Bkb3duQnRuU3R5bGVzPlxuICAgICAgPC9OYXZEcm9wZG93blN0eWxlcz5cblxuICAgICAge25hdk9wZW4gJiYgZHJvcGRvd25PcGVuICYmIChcbiAgICAgICAgPERyb3Bkb3duTWVudVN0eWxlcz5cbiAgICAgICAgICA8RHJvcGRvd25JdGVtIC8+XG4gICAgICAgIDwvRHJvcGRvd25NZW51U3R5bGVzPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZEcm9wZG93bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavDropdown.js\n");

/***/ })

})