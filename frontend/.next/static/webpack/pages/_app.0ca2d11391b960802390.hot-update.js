webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar/NavDropdown.js":
/*!******************************************!*\
  !*** ./components/navbar/NavDropdown.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _NavDropdownStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavDropdownStyles */ \"./components/navbar/NavDropdownStyles.js\");\n/* harmony import */ var _lib_navState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/navState */ \"./lib/navState.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/navbar/NavDropdown.js\",\n    _s = $RefreshSig$();\n\n/* eslint-disable jsx-a11y/click-events-have-key-events */\n// import { useQuery } from '@apollo/client';\n// import gql from 'graphql-tag';\n\n\n\n\n\n\n\n\nfunction DropdownItem(_ref) {\n  var item = _ref.item;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_4__[\"DropdownItemStyles\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: item,\n      children: [item, \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n\n_c = DropdownItem;\nvar NavDropdown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c2 = _s(function NavDropdown(props, ref) {\n  var _props$products,\n      _this = this;\n\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      dropdownOpen = _useState[0],\n      setDropdownOpen = _useState[1];\n\n  var _useNav = Object(_lib_navState__WEBPACK_IMPORTED_MODULE_5__[\"useNav\"])(),\n      navOpen = _useNav.navOpen;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(),\n      width = _useWindowDimensions.width;\n\n  var showDropdown = function showDropdown() {\n    return setDropdownOpen(!dropdownOpen);\n  };\n\n  var mouseEnter = function mouseEnter() {\n    !navOpen && setDropdownOpen(true);\n  };\n\n  var mouseLeave = function mouseLeave() {\n    !navOpen && setDropdownOpen(false);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (width >= 850) {\n      setDropdownOpen(false);\n    }\n  }, [width]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_4__[\"NavDropdownStyles\"], {\n    onMouseOver: mouseEnter,\n    onMouseLeave: mouseLeave,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"dropdown-btns-group\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: props.href,\n        ref: ref,\n        children: props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_4__[\"DropdownBtnStyles\"], {\n        type: \"button\",\n        onClick: showDropdown,\n        disabled: !navOpen || width > 850,\n        children: dropdownOpen && navOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdExpandLess\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 38\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdExpandMore\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 57\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), dropdownOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavDropdownStyles__WEBPACK_IMPORTED_MODULE_4__[\"DropdownMenuStyles\"], {\n      children: props === null || props === void 0 ? void 0 : (_props$products = props.products) === null || _props$products === void 0 ? void 0 : _props$products.map(function (product) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownItem, {\n          item: product.product_title.toLowerCase()\n        }, product.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, this);\n}, \"plV0bTHcTVR4u9m8lBiRT8ewwow=\", false, function () {\n  return [_lib_navState__WEBPACK_IMPORTED_MODULE_5__[\"useNav\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__[\"default\"]];\n}));\n_c3 = NavDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavDropdown);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"DropdownItem\");\n$RefreshReg$(_c2, \"NavDropdown$React.forwardRef\");\n$RefreshReg$(_c3, \"NavDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2RHJvcGRvd24uanM/NzM2OCJdLCJuYW1lcyI6WyJEcm9wZG93bkl0ZW0iLCJpdGVtIiwiTmF2RHJvcGRvd24iLCJSZWFjdCIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsInVzZVN0YXRlIiwiZHJvcGRvd25PcGVuIiwic2V0RHJvcGRvd25PcGVuIiwidXNlTmF2IiwibmF2T3BlbiIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInNob3dEcm9wZG93biIsIm1vdXNlRW50ZXIiLCJtb3VzZUxlYXZlIiwidXNlRWZmZWN0IiwiaHJlZiIsInRpdGxlIiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwicHJvZHVjdF90aXRsZSIsInRvTG93ZXJDYXNlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULE9BQWdDO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQzlCLHNCQUNFLHFFQUFDLHFFQUFEO0FBQUEsMkJBQ0U7QUFBRyxVQUFJLEVBQUVBLElBQVQ7QUFBQSxpQkFBZ0JBLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztLQU5RRCxZO0FBUVQsSUFBTUUsV0FBVyxnQkFBR0MsNENBQUssQ0FBQ0MsVUFBTixVQUFpQixTQUFTRixXQUFULENBQXFCRyxLQUFyQixFQUE0QkMsR0FBNUIsRUFBaUM7QUFBQTtBQUFBOztBQUFBOztBQUFBLGtCQUU1QkMsc0RBQVEsQ0FBQyxLQUFELENBRm9CO0FBQUEsTUFFN0RDLFlBRjZEO0FBQUEsTUFFL0NDLGVBRitDOztBQUFBLGdCQUdoREMsNERBQU0sRUFIMEM7QUFBQSxNQUc1REMsT0FINEQsV0FHNURBLE9BSDREOztBQUFBLDZCQUlsREMscUVBQW1CLEVBSitCO0FBQUEsTUFJNURDLEtBSjRELHdCQUk1REEsS0FKNEQ7O0FBTXBFLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsV0FBTUwsZUFBZSxDQUFDLENBQUNELFlBQUYsQ0FBckI7QUFBQSxHQUFyQjs7QUFFQSxNQUFNTyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLEtBQUNKLE9BQUQsSUFBWUYsZUFBZSxDQUFDLElBQUQsQ0FBM0I7QUFDRCxHQUZEOztBQUlBLE1BQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsS0FBQ0wsT0FBRCxJQUFZRixlQUFlLENBQUMsS0FBRCxDQUEzQjtBQUNELEdBRkQ7O0FBSUFRLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlKLEtBQUssSUFBSSxHQUFiLEVBQWtCO0FBQ2hCSixxQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNJLEtBQUQsQ0FKTSxDQUFUO0FBTUEsc0JBQ0UscUVBQUMsb0VBQUQ7QUFBbUIsZUFBVyxFQUFFRSxVQUFoQztBQUE0QyxnQkFBWSxFQUFFQyxVQUExRDtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQUEsOEJBQ0U7QUFBRyxZQUFJLEVBQUVYLEtBQUssQ0FBQ2EsSUFBZjtBQUFxQixXQUFHLEVBQUVaLEdBQTFCO0FBQUEsa0JBQ0dELEtBQUssQ0FBQ2M7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSxxRUFBQyxvRUFBRDtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsZUFBTyxFQUFFTCxZQUZYO0FBR0UsZ0JBQVEsRUFBRSxDQUFDSCxPQUFELElBQVlFLEtBQUssR0FBRyxHQUhoQztBQUFBLGtCQUtHTCxZQUFZLElBQUlHLE9BQWhCLGdCQUEwQixxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUExQixnQkFBNkMscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFjR0gsWUFBWSxpQkFDWCxxRUFBQyxxRUFBRDtBQUFBLGdCQUNHSCxLQURILGFBQ0dBLEtBREgsMENBQ0dBLEtBQUssQ0FBRWUsUUFEVixvREFDRyxnQkFBaUJDLEdBQWpCLENBQXFCLFVBQUNDLE9BQUQ7QUFBQSw0QkFFcEIscUVBQUMsWUFBRDtBQUErQixjQUFJLEVBQUVBLE9BQU8sQ0FBQ0MsYUFBUixDQUFzQkMsV0FBdEI7QUFBckMsV0FBbUJGLE9BQU8sQ0FBQ0csRUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGb0I7QUFBQSxPQUFyQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlCRCxDQS9DbUI7QUFBQSxVQUdFZixvREFIRixFQUlBRSw2REFKQTtBQUFBLEdBQXBCO01BQU1WLFc7QUFpRFNBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uYXZiYXIvTmF2RHJvcGRvd24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG4vLyBpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50Jztcbi8vIGltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IE1kRXhwYW5kTW9yZSwgTWRFeHBhbmRMZXNzIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHtcbiAgRHJvcGRvd25CdG5TdHlsZXMsXG4gIERyb3Bkb3duSXRlbVN0eWxlcyxcbiAgRHJvcGRvd25NZW51U3R5bGVzLFxuICBOYXZEcm9wZG93blN0eWxlcyxcbn0gZnJvbSAnLi9OYXZEcm9wZG93blN0eWxlcyc7XG5pbXBvcnQgeyB1c2VOYXYgfSBmcm9tICcuLi8uLi9saWIvbmF2U3RhdGUnO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSAnLi4vLi4vbGliL3dpbmRvd0RpbWVuc2lvbnMnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBEcm9wZG93bkl0ZW0oeyBpdGVtIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8RHJvcGRvd25JdGVtU3R5bGVzPlxuICAgICAgPGEgaHJlZj17aXRlbX0+e2l0ZW19IDwvYT5cbiAgICA8L0Ryb3Bkb3duSXRlbVN0eWxlcz5cbiAgKTtcbn1cblxuY29uc3QgTmF2RHJvcGRvd24gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE5hdkRyb3Bkb3duKHByb3BzLCByZWYpIHtcblxuICBjb25zdCBbZHJvcGRvd25PcGVuLCBzZXREcm9wZG93bk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IG5hdk9wZW4gfSA9IHVzZU5hdigpO1xuICBjb25zdCB7IHdpZHRoIH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG5cbiAgY29uc3Qgc2hvd0Ryb3Bkb3duID0gKCkgPT4gc2V0RHJvcGRvd25PcGVuKCFkcm9wZG93bk9wZW4pO1xuXG4gIGNvbnN0IG1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgIW5hdk9wZW4gJiYgc2V0RHJvcGRvd25PcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IG1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgIW5hdk9wZW4gJiYgc2V0RHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh3aWR0aCA+PSA4NTApIHtcbiAgICAgIHNldERyb3Bkb3duT3BlbihmYWxzZSk7XG4gICAgfVxuICB9LCBbd2lkdGhdKTtcblxuICByZXR1cm4gKFxuICAgIDxOYXZEcm9wZG93blN0eWxlcyBvbk1vdXNlT3Zlcj17bW91c2VFbnRlcn0gb25Nb3VzZUxlYXZlPXttb3VzZUxlYXZlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93bi1idG5zLWdyb3VwJz5cbiAgICAgICAgPGEgaHJlZj17cHJvcHMuaHJlZn0gcmVmPXtyZWZ9PlxuICAgICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgICAgPC9hPlxuICAgICAgICA8RHJvcGRvd25CdG5TdHlsZXNcbiAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgb25DbGljaz17c2hvd0Ryb3Bkb3dufVxuICAgICAgICAgIGRpc2FibGVkPXshbmF2T3BlbiB8fCB3aWR0aCA+IDg1MH1cbiAgICAgICAgPlxuICAgICAgICAgIHtkcm9wZG93bk9wZW4gJiYgbmF2T3BlbiA/IDxNZEV4cGFuZExlc3MgLz4gOiA8TWRFeHBhbmRNb3JlIC8+fVxuICAgICAgICA8L0Ryb3Bkb3duQnRuU3R5bGVzPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtkcm9wZG93bk9wZW4gJiYgKFxuICAgICAgICA8RHJvcGRvd25NZW51U3R5bGVzPlxuICAgICAgICAgIHtwcm9wcz8ucHJvZHVjdHM/Lm1hcCgocHJvZHVjdCk9PiAoXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0ga2V5PXtwcm9kdWN0LmlkfSBpdGVtPXtwcm9kdWN0LnByb2R1Y3RfdGl0bGUudG9Mb3dlckNhc2UoKX0vPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0Ryb3Bkb3duTWVudVN0eWxlcz5cbiAgICAgICl9XG4gICAgPC9OYXZEcm9wZG93blN0eWxlcz5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZEcm9wZG93bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar/NavDropdown.js\n");

/***/ })

})