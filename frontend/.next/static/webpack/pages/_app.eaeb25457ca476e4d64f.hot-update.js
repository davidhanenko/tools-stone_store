webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/menu/MenuDropdown.js":
/*!*****************************************!*\
  !*** ./components/menu/MenuDropdown.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _context_menuState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/menuState */ \"./context/menuState.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n/* harmony import */ var _helpers_formatUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/formatUrl */ \"./helpers/formatUrl.js\");\n/* harmony import */ var _MenuDropdownStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MenuDropdownStyles */ \"./components/menu/MenuDropdownStyles.js\");\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/menu/MenuDropdown.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar DropdownItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c = _s(function (_ref, ref) {\n  _s();\n\n  var href = _ref.href,\n      onClick = _ref.onClick,\n      item = _ref.item;\n\n  var _useMenu = Object(_context_menuState__WEBPACK_IMPORTED_MODULE_5__[\"useMenu\"])(),\n      closeMenu = _useMenu.closeMenu;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MenuDropdownStyles__WEBPACK_IMPORTED_MODULE_8__[\"DropdownItemStyles\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: href,\n      onClick: function onClick() {\n        return closeMenu();\n      },\n      ref: ref,\n      children: item\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n}, \"2BMieG6AqW5qFraSazBPzetTxPc=\", false, function () {\n  return [_context_menuState__WEBPACK_IMPORTED_MODULE_5__[\"useMenu\"]];\n}));\n_c2 = DropdownItem;\nvar MenuDropdown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c3 = _s2(function MenuDropdown(props, ref) {\n  var _props$categories,\n      _this2 = this;\n\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      dropdownOpen = _useState[0],\n      setDropdownOpen = _useState[1];\n\n  var _useMenu2 = Object(_context_menuState__WEBPACK_IMPORTED_MODULE_5__[\"useMenu\"])(),\n      isOpen = _useMenu2.isOpen,\n      setOpen = _useMenu2.setOpen;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(),\n      width = _useWindowDimensions.width;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var showDropdown = function showDropdown() {\n    return setDropdownOpen(!dropdownOpen);\n  };\n\n  var mouseEnter = function mouseEnter() {\n    !isOpen && setDropdownOpen(true);\n  };\n\n  var mouseLeave = function mouseLeave() {\n    !isOpen && setDropdownOpen(false);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var isMounted = true;\n\n    if (width >= 850) {\n      setOpen(false);\n    }\n\n    return function () {\n      isMounted = false;\n    };\n  }, [width]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MenuDropdownStyles__WEBPACK_IMPORTED_MODULE_8__[\"DropdownStyles\"], {\n    onMouseOver: mouseEnter,\n    onMouseLeave: mouseLeave,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"dropdown-btns-group\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: props.href,\n        ref: ref,\n        className: Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_7__[\"formatUrlToRoute\"])(router.asPath.split('/')[2]) == Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_7__[\"formatUrlToRoute\"])(props.dropDownMenuitem) ? 'active link-title' : 'link-title',\n        children: props.dropDownMenuitem\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MenuDropdownStyles__WEBPACK_IMPORTED_MODULE_8__[\"DropdownBtnStyles\"], {\n        type: \"button\",\n        onClick: showDropdown,\n        disabled: !isOpen || width > 850,\n        children: dropdownOpen && isOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_4__[\"MdExpandLess\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 37\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_4__[\"MdExpandMore\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 56\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MenuDropdownStyles__WEBPACK_IMPORTED_MODULE_8__[\"DropdownMenuStyles\"], {\n      dropdownOpen: dropdownOpen,\n      children: props === null || props === void 0 ? void 0 : (_props$categories = props.categories) === null || _props$categories === void 0 ? void 0 : _props$categories.map(function (category) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: {\n            pathname: '/products/[items]/[collection]',\n            query: {\n              items: \"\".concat(Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_7__[\"formatUrlToRoute\"])(props.dropDownMenuitem)),\n              collection: \"\".concat(Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_7__[\"formatUrlToRoute\"])(category.category))\n            }\n          },\n          passHref: true,\n          onClick: setDropdownOpen(false),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownItem, {\n            item: category === null || category === void 0 ? void 0 : category.category\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, _this2)\n        }, category.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, _this2);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 5\n  }, this);\n}, \"fqUa1ZhQROLFqUlt11fnXLBAhuc=\", false, function () {\n  return [_context_menuState__WEBPACK_IMPORTED_MODULE_5__[\"useMenu\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__[\"default\"], next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n}));\n_c4 = MenuDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuDropdown);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"DropdownItem$React.forwardRef\");\n$RefreshReg$(_c2, \"DropdownItem\");\n$RefreshReg$(_c3, \"MenuDropdown$React.forwardRef\");\n$RefreshReg$(_c4, \"MenuDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51L01lbnVEcm9wZG93bi5qcz9jZjNkIl0sIm5hbWVzIjpbIkRyb3Bkb3duSXRlbSIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInJlZiIsImhyZWYiLCJvbkNsaWNrIiwiaXRlbSIsInVzZU1lbnUiLCJjbG9zZU1lbnUiLCJNZW51RHJvcGRvd24iLCJwcm9wcyIsInVzZVN0YXRlIiwiZHJvcGRvd25PcGVuIiwic2V0RHJvcGRvd25PcGVuIiwiaXNPcGVuIiwic2V0T3BlbiIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInJvdXRlciIsInVzZVJvdXRlciIsInNob3dEcm9wZG93biIsIm1vdXNlRW50ZXIiLCJtb3VzZUxlYXZlIiwidXNlRWZmZWN0IiwiaXNNb3VudGVkIiwiZm9ybWF0VXJsVG9Sb3V0ZSIsImFzUGF0aCIsInNwbGl0IiwiZHJvcERvd25NZW51aXRlbSIsImNhdGVnb3JpZXMiLCJtYXAiLCJjYXRlZ29yeSIsInBhdGhuYW1lIiwicXVlcnkiLCJpdGVtcyIsImNvbGxlY3Rpb24iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQU9BLElBQU1BLFlBQVksZ0JBQUdDLDRDQUFLLENBQUNDLFVBQU4sU0FBaUIsZ0JBQTBCQyxHQUExQixFQUFrQztBQUFBOztBQUFBLE1BQS9CQyxJQUErQixRQUEvQkEsSUFBK0I7QUFBQSxNQUF6QkMsT0FBeUIsUUFBekJBLE9BQXlCO0FBQUEsTUFBaEJDLElBQWdCLFFBQWhCQSxJQUFnQjs7QUFBQSxpQkFDaERDLGtFQUFPLEVBRHlDO0FBQUEsTUFDOURDLFNBRDhELFlBQzlEQSxTQUQ4RDs7QUFHdEUsc0JBQ0UscUVBQUMsc0VBQUQ7QUFBQSwyQkFDRTtBQUFHLFVBQUksRUFBRUosSUFBVDtBQUFlLGFBQU8sRUFBRTtBQUFBLGVBQU1JLFNBQVMsRUFBZjtB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O0FBQ0pDLG9CQUFRLEVBQUUsZ0NBRE47QUFFSkMsaUJBQUssRUFBRTtBQUNMQyxtQkFBSyxZQUFLVCwyRUFBZ0IsQ0FBQ2YsS0FBSyxDQUFDa0IsZ0JBQVAsQ0FBckIsQ0FEQTtBQUVMTyx3QkFBVSxZQUFLViwyRUFBZ0IsQ0FBQ00sUUFBUSxDQUFDQSxRQUFWLENBQXJCO0FBRkw7QUFGSCxXQURSO0FBU0Usa0JBQVEsTUFUVjtBQVVFLGlCQUFPLEVBQUVsQixlQUFlLENBQUMsS0FBRCxDQVYxQjtBQUFBLGlDQVlFLHFFQUFDLFlBQUQ7QUFBYyxnQkFBSSxFQUFFa0IsUUFBRixhQUFFQSxRQUFGLHVCQUFFQSxRQUFRLENBQUVBO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaRixXQVFPQSxRQUFRLENBQUNLLEVBUmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRDhCO0FBQUEsT0FBL0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNENELENBdkVvQjtBQUFBLFVBRVM3QiwwREFGVCxFQUdEUyw2REFIQyxFQUtKRyxxREFMSTtBQUFBLEdBQXJCO01BQU1WLFk7QUF5RVNBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tZW51L01lbnVEcm9wZG93bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IE1kRXhwYW5kTW9yZSwgTWRFeHBhbmRMZXNzIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuXG5pbXBvcnQgeyB1c2VNZW51IH0gZnJvbSAnLi4vLi4vY29udGV4dC9tZW51U3RhdGUnO1xuXG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLi8uLi9saWIvd2luZG93RGltZW5zaW9ucyc7XG5pbXBvcnQgeyBmb3JtYXRVcmxUb1JvdXRlIH0gZnJvbSAnLi4vLi4vaGVscGVycy9mb3JtYXRVcmwnO1xuXG5pbXBvcnQge1xuICBEcm9wZG93blN0eWxlcyxcbiAgRHJvcGRvd25CdG5TdHlsZXMsXG4gIERyb3Bkb3duSXRlbVN0eWxlcyxcbiAgRHJvcGRvd25NZW51U3R5bGVzLFxufSBmcm9tICcuL01lbnVEcm9wZG93blN0eWxlcyc7XG5cbmNvbnN0IERyb3Bkb3duSXRlbSA9IFJlYWN0LmZvcndhcmRSZWYoKHsgaHJlZiwgb25DbGljaywgaXRlbSB9LCByZWYpID0+IHtcbiAgY29uc3QgeyBjbG9zZU1lbnUgfSA9IHVzZU1lbnUoKTtcblxuICByZXR1cm4gKFxuICAgIDxEcm9wZG93bkl0ZW1TdHlsZXM+XG4gICAgICA8YSBocmVmPXtocmVmfSBvbkNsaWNrPXsoKSA9PiBjbG9zZU1lbnUoKX0gcmVmPXtyZWZ9PlxuICAgICAgICB7aXRlbX1cbiAgICAgIDwvYT5cbiAgICA8L0Ryb3Bkb3duSXRlbVN0eWxlcz5cbiAgKTtcbn0pO1xuXG5jb25zdCBNZW51RHJvcGRvd24gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE1lbnVEcm9wZG93bihwcm9wcywgcmVmKSB7XG4gIGNvbnN0IFtkcm9wZG93bk9wZW4sIHNldERyb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgaXNPcGVuLCBzZXRPcGVuIH0gPSB1c2VNZW51KCk7XG4gIGNvbnN0IHsgd2lkdGggfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBzaG93RHJvcGRvd24gPSAoKSA9PiBzZXREcm9wZG93bk9wZW4oIWRyb3Bkb3duT3Blbik7XG5cbiAgY29uc3QgbW91c2VFbnRlciA9ICgpID0+IHtcbiAgICAhaXNPcGVuICYmIHNldERyb3Bkb3duT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBtb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgICFpc09wZW4gJiYgc2V0RHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlO1xuICAgIGlmICh3aWR0aCA+PSA4NTApIHtcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNNb3VudGVkID0gZmFsc2U7XG4gICAgfTtcbiAgfSwgW3dpZHRoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RHJvcGRvd25TdHlsZXMgb25Nb3VzZU92ZXI9e21vdXNlRW50ZXJ9IG9uTW91c2VMZWF2ZT17bW91c2VMZWF2ZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24tYnRucy1ncm91cCc+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj17cHJvcHMuaHJlZn1cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgZm9ybWF0VXJsVG9Sb3V0ZShyb3V0ZXIuYXNQYXRoLnNwbGl0KCcvJylbMl0pID09XG4gICAgICAgICAgICBmb3JtYXRVcmxUb1JvdXRlKHByb3BzLmRyb3BEb3duTWVudWl0ZW0pXG4gICAgICAgICAgICAgID8gJ2FjdGl2ZSBsaW5rLXRpdGxlJ1xuICAgICAgICAgICAgICA6ICdsaW5rLXRpdGxlJ1xuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtwcm9wcy5kcm9wRG93bk1lbnVpdGVtfVxuICAgICAgICA8L2E+XG4gICAgICAgIDxEcm9wZG93bkJ0blN0eWxlc1xuICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICBvbkNsaWNrPXtzaG93RHJvcGRvd259XG4gICAgICAgICAgZGlzYWJsZWQ9eyFpc09wZW4gfHwgd2lkdGggPiA4NTB9XG4gICAgICAgID5cbiAgICAgICAgICB7ZHJvcGRvd25PcGVuICYmIGlzT3BlbiA/IDxNZEV4cGFuZExlc3MgLz4gOiA8TWRFeHBhbmRNb3JlIC8+fVxuICAgICAgICA8L0Ryb3Bkb3duQnRuU3R5bGVzPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxEcm9wZG93bk1lbnVTdHlsZXMgZHJvcGRvd25PcGVuPXtkcm9wZG93bk9wZW59PlxuICAgICAgICB7cHJvcHM/LmNhdGVnb3JpZXM/Lm1hcChjYXRlZ29yeSA9PiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9e3tcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJvZHVjdHMvW2l0ZW1zXS9bY29sbGVjdGlvbl0nLFxuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiBgJHtmb3JtYXRVcmxUb1JvdXRlKHByb3BzLmRyb3BEb3duTWVudWl0ZW0pfWAsXG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbjogYCR7Zm9ybWF0VXJsVG9Sb3V0ZShjYXRlZ29yeS5jYXRlZ29yeSl9YCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBrZXk9e2NhdGVnb3J5LmlkfVxuICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgIG9uQ2xpY2s9e3NldERyb3Bkb3duT3BlbihmYWxzZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBpdGVtPXtjYXRlZ29yeT8uY2F0ZWdvcnl9IC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvRHJvcGRvd25NZW51U3R5bGVzPlxuICAgIDwvRHJvcGRvd25TdHlsZXM+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudURyb3Bkb3duO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/menu/MenuDropdown.js\n");

/***/ })

})