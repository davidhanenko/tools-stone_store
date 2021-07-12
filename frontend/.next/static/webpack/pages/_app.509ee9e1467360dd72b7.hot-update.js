webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/NavDropdown.js":
/*!***********************************!*\
  !*** ./components/NavDropdown.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_navState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/navState */ \"./lib/navState.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/NavDropdown.js\",\n    _s = $RefreshSig$();\n\n/* eslint-disable jsx-a11y/click-events-have-key-events */\n// import { useQuery } from '@apollo/client';\n// import gql from 'graphql-tag';\n\n\n\n\n\nvar NavDropdownStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].a.withConfig({\n  displayName: \"NavDropdown__NavDropdownStyles\",\n  componentId: \"sc-1088b0g-0\"\n})([\"padding:0.2rem 1rem;text-transform:uppercase;color:grey;position:relative;display:flex;cursor:pointer;&:hover,&:focus{text-decoration:none;color:var(--black);transition:250ms;background:none;}@media (max-width:700px){padding-left:3rem;width:200px;border-bottom:1px solid var(--lightGrey);padding-bottom:1rem;}\"]);\n_c = NavDropdownStyles;\nvar DropdownBtnStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].button.withConfig({\n  displayName: \"NavDropdown__DropdownBtnStyles\",\n  componentId: \"sc-1088b0g-1\"\n})([\"padding:0;font-size:2em;display:inline-block;outline:none;border:none;background:transparent;cursor:pointer;@media (max-width:700px){position:fixed;right:5rem;}svg{padding-bottom:0.3rem;color:grey;}\"]);\n_c2 = DropdownBtnStyles;\nvar DropdownMenuStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ul.withConfig({\n  displayName: \"NavDropdown__DropdownMenuStyles\",\n  componentId: \"sc-1088b0g-2\"\n})([\"background:var(--lightGrey);margin:0;li{font-size:1rem;padding-left:2rem;text-decoration:none;list-style:none;}\"]);\n_c3 = DropdownMenuStyles;\n\nfunction DropdownItem() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    children: \"1\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 10\n  }, this);\n}\n\n_c4 = DropdownItem;\nvar NavDropdown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(_c5 = _s(function NavDropdown(props, ref) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      dropdownOpen = _useState[0],\n      setDropdownOpen = _useState[1];\n\n  var _useNav = Object(_lib_navState__WEBPACK_IMPORTED_MODULE_5__[\"useNav\"])(),\n      navOpen = _useNav.navOpen;\n\n  var showDropdown = function showDropdown() {\n    return setDropdownOpen(!dropdownOpen);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(NavDropdownStyles, {\n      href: props.href,\n      ref: ref,\n      children: \"Products\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownBtnStyles, {\n      type: \"button\",\n      onClick: showDropdown,\n      disabled: !navOpen,\n      children: dropdownOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdExpandLess\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 25\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdExpandMore\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 44\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this), navOpen && dropdownOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownMenuStyles, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownItem, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}, \"FeGxAD5c7VBVItUadFel+Aaa0kI=\", false, function () {\n  return [_lib_navState__WEBPACK_IMPORTED_MODULE_5__[\"useNav\"]];\n}));\n_c6 = NavDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavDropdown);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"NavDropdownStyles\");\n$RefreshReg$(_c2, \"DropdownBtnStyles\");\n$RefreshReg$(_c3, \"DropdownMenuStyles\");\n$RefreshReg$(_c4, \"DropdownItem\");\n$RefreshReg$(_c5, \"NavDropdown$React.forwardRef\");\n$RefreshReg$(_c6, \"NavDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZEcm9wZG93bi5qcz9kMTQzIl0sIm5hbWVzIjpbIk5hdkRyb3Bkb3duU3R5bGVzIiwic3R5bGVkIiwiYSIsIkRyb3Bkb3duQnRuU3R5bGVzIiwiYnV0dG9uIiwiRHJvcGRvd25NZW51U3R5bGVzIiwidWwiLCJEcm9wZG93bkl0ZW0iLCJOYXZEcm9wZG93biIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwidXNlU3RhdGUiLCJkcm9wZG93bk9wZW4iLCJzZXREcm9wZG93bk9wZW4iLCJ1c2VOYXYiLCJuYXZPcGVuIiwic2hvd0Ryb3Bkb3duIiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0MseURBQU0sQ0FBQ0MsQ0FBVjtBQUFBO0FBQUE7QUFBQSw2VEFBdkI7S0FBTUYsaUI7QUFzQk4sSUFBTUcsaUJBQWlCLEdBQUdGLHlEQUFNLENBQUNHLE1BQVY7QUFBQTtBQUFBO0FBQUEsOE1BQXZCO01BQU1ELGlCO0FBbUJOLElBQU1FLGtCQUFrQixHQUFHSix5REFBTSxDQUFDSyxFQUFWO0FBQUE7QUFBQTtBQUFBLHVIQUF4QjtNQUFNRCxrQjs7QUFXTixTQUFTRSxZQUFULEdBQXdCO0FBQ3RCLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7TUFGUUEsWTtBQUlULElBQU1DLFdBQVcsZ0JBQUdDLDRDQUFLLENBQUNDLFVBQU4sVUFBaUIsU0FBU0YsV0FBVCxDQUFxQkcsS0FBckIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQUE7O0FBQUEsa0JBQzVCQyxzREFBUSxDQUFDLEtBQUQsQ0FEb0I7QUFBQSxNQUM3REMsWUFENkQ7QUFBQSxNQUMvQ0MsZUFEK0M7O0FBQUEsZ0JBRWhEQyw0REFBTSxFQUYwQztBQUFBLE1BRTVEQyxPQUY0RCxXQUU1REEsT0FGNEQ7O0FBSXBFLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsV0FBTUgsZUFBZSxDQUFDLENBQUNELFlBQUYsQ0FBckI7QUFBQSxHQUFyQjs7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGlCQUFEO0FBQW1CLFVBQUksRUFBRUgsS0FBSyxDQUFDUSxJQUEvQjtBQUFxQyxTQUFHLEVBQUVQLEdBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSxxRUFBQyxpQkFBRDtBQUNFLFVBQUksRUFBQyxRQURQO0FBRUUsYUFBTyxFQUFFTSxZQUZYO0FBR0UsY0FBUSxFQUFFLENBQUNELE9BSGI7QUFBQSxnQkFLR0gsWUFBWSxnQkFBRyxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUgsZ0JBQXNCLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLEVBV0dHLE9BQU8sSUFBSUgsWUFBWCxpQkFDQyxxRUFBQyxrQkFBRDtBQUFBLDZCQUNFLHFFQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaSjtBQUFBLGtCQURGO0FBbUJELENBekJtQjtBQUFBLFVBRUVFLG9EQUZGO0FBQUEsR0FBcEI7TUFBTVIsVztBQTJCU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkRyb3Bkb3duLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cyAqL1xuLy8gaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG4vLyBpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZEV4cGFuZE1vcmUsIE1kRXhwYW5kTGVzcyB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlTmF2IH0gZnJvbSAnLi4vbGliL25hdlN0YXRlJztcblxuY29uc3QgTmF2RHJvcGRvd25TdHlsZXMgPSBzdHlsZWQuYWBcbiAgcGFkZGluZzogMC4ycmVtIDFyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiBncmV5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgdHJhbnNpdGlvbjogMjUwbXM7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodEdyZXkpO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB9XG5gO1xuXG5jb25zdCBEcm9wZG93bkJ0blN0eWxlcyA9IHN0eWxlZC5idXR0b25gXG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDVyZW07XG4gIH1cbiAgc3ZnIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xuICAgIGNvbG9yOiBncmV5O1xuICB9XG5gO1xuXG5jb25zdCBEcm9wZG93bk1lbnVTdHlsZXMgPSBzdHlsZWQudWxgXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0R3JleSk7XG4gIG1hcmdpbjogMDtcbiAgbGkge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIERyb3Bkb3duSXRlbSgpIHtcbiAgcmV0dXJuIDxsaT4xPC9saT47XG59XG5cbmNvbnN0IE5hdkRyb3Bkb3duID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBOYXZEcm9wZG93bihwcm9wcywgcmVmKSB7XG4gIGNvbnN0IFtkcm9wZG93bk9wZW4sIHNldERyb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgbmF2T3BlbiB9ID0gdXNlTmF2KCk7XG5cbiAgY29uc3Qgc2hvd0Ryb3Bkb3duID0gKCkgPT4gc2V0RHJvcGRvd25PcGVuKCFkcm9wZG93bk9wZW4pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZEcm9wZG93blN0eWxlcyBocmVmPXtwcm9wcy5ocmVmfSByZWY9e3JlZn0+XG4gICAgICAgIFByb2R1Y3RzXG4gICAgICA8L05hdkRyb3Bkb3duU3R5bGVzPlxuICAgICAgPERyb3Bkb3duQnRuU3R5bGVzXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXtzaG93RHJvcGRvd259XG4gICAgICAgIGRpc2FibGVkPXshbmF2T3Blbn1cbiAgICAgID5cbiAgICAgICAge2Ryb3Bkb3duT3BlbiA/IDxNZEV4cGFuZExlc3MgLz4gOiA8TWRFeHBhbmRNb3JlIC8+fVxuICAgICAgPC9Ecm9wZG93bkJ0blN0eWxlcz5cbiAgICAgIHtuYXZPcGVuICYmIGRyb3Bkb3duT3BlbiAmJiAoXG4gICAgICAgIDxEcm9wZG93bk1lbnVTdHlsZXM+XG4gICAgICAgICAgPERyb3Bkb3duSXRlbSAvPlxuICAgICAgICA8L0Ryb3Bkb3duTWVudVN0eWxlcz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2RHJvcGRvd247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NavDropdown.js\n");

/***/ })

})