webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/NavDropdown.js":
/*!***********************************!*\
  !*** ./components/NavDropdown.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_navState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/navState */ \"./lib/navState.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/NavDropdown.js\",\n    _s = $RefreshSig$();\n\n/* eslint-disable jsx-a11y/click-events-have-key-events */\n// import { useQuery } from '@apollo/client';\n// import gql from 'graphql-tag';\n\n\n\n\n\nvar NavDropdownStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"NavDropdown__NavDropdownStyles\",\n  componentId: \"sc-1088b0g-0\"\n})([\"display:flex;align-items:center;\"]);\n_c = NavDropdownStyles;\nvar DropdownBtnStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].button.withConfig({\n  displayName: \"NavDropdown__DropdownBtnStyles\",\n  componentId: \"sc-1088b0g-1\"\n})([\"padding:0;outline:none;border:none;background:transparent;cursor:pointer;position:relative;@media (max-width:700px){position:relative;right:3rem;}svg{color:grey;font-size:2em;}\"]);\n_c2 = DropdownBtnStyles;\nvar DropdownMenuStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ul.withConfig({\n  displayName: \"NavDropdown__DropdownMenuStyles\",\n  componentId: \"sc-1088b0g-2\"\n})([\"background:var(--lightGrey);margin:0;li{font-size:1rem;padding-left:2rem;text-decoration:none;list-style:none;}\"]);\n_c3 = DropdownMenuStyles;\n\nfunction DropdownItem() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    children: \"1\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 10\n  }, this);\n}\n\n_c4 = DropdownItem;\nvar NavDropdown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(_c5 = _s(function NavDropdown(props, ref) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      dropdownOpen = _useState[0],\n      setDropdownOpen = _useState[1];\n\n  var _useNav = Object(_lib_navState__WEBPACK_IMPORTED_MODULE_5__[\"useNav\"])(),\n      navOpen = _useNav.navOpen;\n\n  var showDropdown = function showDropdown() {\n    return setDropdownOpen(!dropdownOpen);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(NavDropdownStyles, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: props.href,\n        ref: ref,\n        children: props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownBtnStyles, {\n        type: \"button\",\n        onClick: showDropdown,\n        disabled: !navOpen,\n        children: dropdownOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdExpandLess\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 27\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdExpandMore\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 46\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this), navOpen && dropdownOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownMenuStyles, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownItem, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}, \"FeGxAD5c7VBVItUadFel+Aaa0kI=\", false, function () {\n  return [_lib_navState__WEBPACK_IMPORTED_MODULE_5__[\"useNav\"]];\n}));\n_c6 = NavDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavDropdown);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"NavDropdownStyles\");\n$RefreshReg$(_c2, \"DropdownBtnStyles\");\n$RefreshReg$(_c3, \"DropdownMenuStyles\");\n$RefreshReg$(_c4, \"DropdownItem\");\n$RefreshReg$(_c5, \"NavDropdown$React.forwardRef\");\n$RefreshReg$(_c6, \"NavDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZEcm9wZG93bi5qcz9kMTQzIl0sIm5hbWVzIjpbIk5hdkRyb3Bkb3duU3R5bGVzIiwic3R5bGVkIiwiZGl2IiwiRHJvcGRvd25CdG5TdHlsZXMiLCJidXR0b24iLCJEcm9wZG93bk1lbnVTdHlsZXMiLCJ1bCIsIkRyb3Bkb3duSXRlbSIsIk5hdkRyb3Bkb3duIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJ1c2VTdGF0ZSIsImRyb3Bkb3duT3BlbiIsInNldERyb3Bkb3duT3BlbiIsInVzZU5hdiIsIm5hdk9wZW4iLCJzaG93RHJvcGRvd24iLCJocmVmIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0NBQXZCO0tBQU1GLGlCO0FBS04sSUFBTUcsaUJBQWlCLEdBQUdGLHlEQUFNLENBQUNHLE1BQVY7QUFBQTtBQUFBO0FBQUEsd0xBQXZCO01BQU1ELGlCO0FBaUJOLElBQU1FLGtCQUFrQixHQUFHSix5REFBTSxDQUFDSyxFQUFWO0FBQUE7QUFBQTtBQUFBLHVIQUF4QjtNQUFNRCxrQjs7QUFXTixTQUFTRSxZQUFULEdBQXdCO0FBQ3RCLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7TUFGUUEsWTtBQUlULElBQU1DLFdBQVcsZ0JBQUdDLDRDQUFLLENBQUNDLFVBQU4sVUFBaUIsU0FBU0YsV0FBVCxDQUFxQkcsS0FBckIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQUE7O0FBQUEsa0JBQzVCQyxzREFBUSxDQUFDLEtBQUQsQ0FEb0I7QUFBQSxNQUM3REMsWUFENkQ7QUFBQSxNQUMvQ0MsZUFEK0M7O0FBQUEsZ0JBRWhEQyw0REFBTSxFQUYwQztBQUFBLE1BRTVEQyxPQUY0RCxXQUU1REEsT0FGNEQ7O0FBSXBFLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsV0FBTUgsZUFBZSxDQUFDLENBQUNELFlBQUYsQ0FBckI7QUFBQSxHQUFyQjs7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGlCQUFEO0FBQUEsOEJBQ0U7QUFBRyxZQUFJLEVBQUVILEtBQUssQ0FBQ1EsSUFBZjtBQUFxQixXQUFHLEVBQUVQLEdBQTFCO0FBQUEsa0JBQ0dELEtBQUssQ0FBQ1M7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSxxRUFBQyxpQkFBRDtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsZUFBTyxFQUFFRixZQUZYO0FBR0UsZ0JBQVEsRUFBRSxDQUFDRCxPQUhiO0FBQUEsa0JBS0dILFlBQVksZ0JBQUcscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBSCxnQkFBc0IscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFhR0csT0FBTyxJQUFJSCxZQUFYLGlCQUNDLHFFQUFDLGtCQUFEO0FBQUEsNkJBQ0UscUVBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRKO0FBQUEsa0JBREY7QUFxQkQsQ0EzQm1CO0FBQUEsVUFFRUUsb0RBRkY7QUFBQSxHQUFwQjtNQUFNUixXO0FBNkJTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2RHJvcGRvd24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG4vLyBpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50Jztcbi8vIGltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1kRXhwYW5kTW9yZSwgTWRFeHBhbmRMZXNzIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VOYXYgfSBmcm9tICcuLi9saWIvbmF2U3RhdGUnO1xuXG5jb25zdCBOYXZEcm9wZG93blN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBEcm9wZG93bkJ0blN0eWxlcyA9IHN0eWxlZC5idXR0b25gXG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDNyZW07XG4gIH1cbiAgc3ZnIHtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfVxuYDtcblxuY29uc3QgRHJvcGRvd25NZW51U3R5bGVzID0gc3R5bGVkLnVsYFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodEdyZXkpO1xuICBtYXJnaW46IDA7XG4gIGxpIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG5gO1xuXG5mdW5jdGlvbiBEcm9wZG93bkl0ZW0oKSB7XG4gIHJldHVybiA8bGk+MTwvbGk+O1xufVxuXG5jb25zdCBOYXZEcm9wZG93biA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTmF2RHJvcGRvd24ocHJvcHMsIHJlZikge1xuICBjb25zdCBbZHJvcGRvd25PcGVuLCBzZXREcm9wZG93bk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IG5hdk9wZW4gfSA9IHVzZU5hdigpO1xuXG4gIGNvbnN0IHNob3dEcm9wZG93biA9ICgpID0+IHNldERyb3Bkb3duT3BlbighZHJvcGRvd25PcGVuKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2RHJvcGRvd25TdHlsZXM+XG4gICAgICAgIDxhIGhyZWY9e3Byb3BzLmhyZWZ9IHJlZj17cmVmfT5cbiAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgIDwvYT5cbiAgICAgICAgPERyb3Bkb3duQnRuU3R5bGVzXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17c2hvd0Ryb3Bkb3dufVxuICAgICAgICAgIGRpc2FibGVkPXshbmF2T3Blbn1cbiAgICAgICAgPlxuICAgICAgICAgIHtkcm9wZG93bk9wZW4gPyA8TWRFeHBhbmRMZXNzIC8+IDogPE1kRXhwYW5kTW9yZSAvPn1cbiAgICAgICAgPC9Ecm9wZG93bkJ0blN0eWxlcz5cbiAgICAgIDwvTmF2RHJvcGRvd25TdHlsZXM+XG4gICAgICB7bmF2T3BlbiAmJiBkcm9wZG93bk9wZW4gJiYgKFxuICAgICAgICA8RHJvcGRvd25NZW51U3R5bGVzPlxuICAgICAgICAgIDxEcm9wZG93bkl0ZW0gLz5cbiAgICAgICAgPC9Ecm9wZG93bk1lbnVTdHlsZXM+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkRyb3Bkb3duO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavDropdown.js\n");

/***/ })

})