webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/menu/MenuDropdown.js":
/*!*****************************************!*\
  !*** ./components/menu/MenuDropdown.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _context_menuState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/menuState */ \"./context/menuState.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n/* harmony import */ var _helpers_formatUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/formatUrl */ \"./helpers/formatUrl.js\");\n/* harmony import */ var _MenuDropdownStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MenuDropdownStyles */ \"./components/menu/MenuDropdownStyles.js\");\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/menu/MenuDropdown.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar DropdownItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c = _s(function (_ref, ref) {\n  _s();\n\n  var href = _ref.href,\n      onClick = _ref.onClick,\n      item = _ref.item,\n      setDropdownOpen = _ref.setDropdownOpen;\n\n  var _useMenu = Object(_context_menuState__WEBPACK_IMPORTED_MODULE_5__[\"useMenu\"])(),\n      closeMenu = _useMenu.closeMenu;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MenuDropdownStyles__WEBPACK_IMPORTED_MODULE_8__[\"DropdownItemStyles\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: href,\n      onClick: function onClick() {\n        closeMenu();\n        setDropdownOpen(false);\n      },\n      ref: ref,\n      children: item\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 7\n  }, _this);\n}, \"2BMieG6AqW5qFraSazBPzetTxPc=\", false, function () {\n  return [_context_menuState__WEBPACK_IMPORTED_MODULE_5__[\"useMenu\"]];\n}));\n_c2 = DropdownItem;\nvar MenuDropdown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c3 = _s2(function MenuDropdown(props, ref) {\n  var _props$categories,\n      _this2 = this;\n\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      dropdownOpen = _useState[0],\n      setDropdownOpen = _useState[1];\n\n  var _useMenu2 = Object(_context_menuState__WEBPACK_IMPORTED_MODULE_5__[\"useMenu\"])(),\n      isOpen = _useMenu2.isOpen,\n      setOpen = _useMenu2.setOpen;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(),\n      width = _useWindowDimensions.width;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var showDropdown = function showDropdown() {\n    return setDropdownOpen(!dropdownOpen);\n  };\n\n  var handleMouseEnter = function handleMouseEnter() {\n    !isOpen && setDropdownOpen(true);\n  };\n\n  var handleMouseLeave = function handleMouseLeave() {\n    !isOpen && setDropdownOpen(false);\n  }; // close dropdown if width more than 850px\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var isMounted = true;\n\n    if (width >= 850) {\n      setDropdownOpen(false);\n    }\n\n    return function () {\n      isMounted = false;\n    };\n  }, [width]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MenuDropdownStyles__WEBPACK_IMPORTED_MODULE_8__[\"DropdownStyles\"], {\n    onMouseOver: handleMouseEnter,\n    onMouseLeave: handleMouseLeave,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"dropdown-btns-group\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: props.href,\n        ref: ref,\n        z: true,\n        children: props.dropDownMenuitem\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MenuDropdownStyles__WEBPACK_IMPORTED_MODULE_8__[\"DropdownBtnStyles\"], {\n        type: \"button\",\n        onClick: showDropdown,\n        disabled: !isOpen || width > 850,\n        children: dropdownOpen && isOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_4__[\"MdExpandLess\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 37\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_4__[\"MdExpandMore\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 56\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MenuDropdownStyles__WEBPACK_IMPORTED_MODULE_8__[\"DropdownMenuStyles\"], {\n      dropdownOpen: dropdownOpen,\n      children: props === null || props === void 0 ? void 0 : (_props$categories = props.categories) === null || _props$categories === void 0 ? void 0 : _props$categories.map(function (category) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: {\n            pathname: '/products/[items]/[collection]',\n            query: {\n              items: \"\".concat(Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_7__[\"formatUrlToRoute\"])(props.dropDownMenuitem)),\n              collection: \"\".concat(Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_7__[\"formatUrlToRoute\"])(category.category))\n            }\n          },\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownItem, {\n            item: category === null || category === void 0 ? void 0 : category.category,\n            setDropdownOpen: setDropdownOpen\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 13\n          }, _this2)\n        }, category.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, _this2);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, this);\n}, \"fqUa1ZhQROLFqUlt11fnXLBAhuc=\", false, function () {\n  return [_context_menuState__WEBPACK_IMPORTED_MODULE_5__[\"useMenu\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__[\"default\"], next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n}));\n_c4 = MenuDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuDropdown);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"DropdownItem$React.forwardRef\");\n$RefreshReg$(_c2, \"DropdownItem\");\n$RefreshReg$(_c3, \"MenuDropdown$React.forwardRef\");\n$RefreshReg$(_c4, \"MenuDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51L01lbnVEcm9wZG93bi5qcz9jZjNkIl0sIm5hbWVzIjpbIkRyb3Bkb3duSXRlbSIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInJlZiIsImhyZWYiLCJvbkNsaWNrIiwiaXRlbSIsInNldERyb3Bkb3duT3BlbiIsInVzZU1lbnUiLCJjbG9zZU1lbnUiLCJNZW51RHJvcGRvd24iLCJwcm9wcyIsInVzZVN0YXRlIiwiZHJvcGRvd25PcGVuIiwiaXNPcGVuIiwic2V0T3BlbiIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInJvdXRlciIsInVzZVJvdXRlciIsInNob3dEcm9wZG93biIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwidXNlRWZmZWN0IiwiaXNNb3VudGVkIiwiZHJvcERvd25NZW51aXRlbSIsImNhdGVnb3JpZXMiLCJtYXAiLCJjYXRlZ29yeSIsInBhdGhuYW1lIiwicXVlcnkiLCJpdGVtcyIsImZvcm1hdFVybFRvUm91dGUiLCJjb2xsZWN0aW9uIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFPQSxJQUFNQSxZQUFZLGdCQUFHQyw0Q0FBSyxDQUFDQyxVQUFOLFNBQ25CLGdCQUEyQ0MsR0FBM0MsRUFBbUQ7QUFBQTs7QUFBQSxNQUFoREMsSUFBZ0QsUUFBaERBLElBQWdEO0FBQUEsTUFBMUNDLE9BQTBDLFFBQTFDQSxPQUEwQztBQUFBLE1BQWpDQyxJQUFpQyxRQUFqQ0EsSUFBaUM7QUFBQSxNQUEzQkMsZUFBMkIsUUFBM0JBLGVBQTJCOztBQUFBLGlCQUMzQkMsa0VBQU8sRUFEb0I7QUFBQSxNQUN6Q0MsU0FEeUMsWUFDekNBLFNBRHlDOztBQUdqRCxzQkFDRSxxRUFBQyxzRUFBRDtBQUFBLDJCQUNFO0FBQ0UsVUFBSSxFQUFFTCxJQURSO0FBRUUsYUFBTyxF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ckIsS0FBSyxDQUFDYyxnQkFBUCxDQUFyQixDQURBO0FBRUxRLHdCQUFVLFlBQUtELDJFQUFnQixDQUFDSixRQUFRLENBQUNBLFFBQVYsQ0FBckI7QUFGTDtBQUZILFdBRFI7QUFTRSxrQkFBUSxNQVRWO0FBQUEsaUNBV0UscUVBQUMsWUFBRDtBQUNFLGdCQUFJLEVBQUVBLFFBQUYsYUFBRUEsUUFBRix1QkFBRUEsUUFBUSxDQUFFQSxRQURsQjtBQUVFLDJCQUFlLEVBQUVyQjtBQUZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEYsV0FRT3FCLFFBQVEsQ0FBQ00sRUFSaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEOEI7QUFBQSxPQUEvQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0Q0QsQ0ExRW9CO0FBQUEsVUFHUzFCLDBEQUhULEVBS0RRLDZEQUxDLEVBT0pHLHFEQVBJO0FBQUEsR0FBckI7TUFBTVQsWTtBQTRFU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lbnUvTWVudURyb3Bkb3duLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgTWRFeHBhbmRNb3JlLCBNZEV4cGFuZExlc3MgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5cbmltcG9ydCB7IHVzZU1lbnUgfSBmcm9tICcuLi8uLi9jb250ZXh0L21lbnVTdGF0ZSc7XG5cbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gJy4uLy4uL2xpYi93aW5kb3dEaW1lbnNpb25zJztcbmltcG9ydCB7IGZvcm1hdFVybFRvUm91dGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2Zvcm1hdFVybCc7XG5cbmltcG9ydCB7XG4gIERyb3Bkb3duU3R5bGVzLFxuICBEcm9wZG93bkJ0blN0eWxlcyxcbiAgRHJvcGRvd25JdGVtU3R5bGVzLFxuICBEcm9wZG93bk1lbnVTdHlsZXMsXG59IGZyb20gJy4vTWVudURyb3Bkb3duU3R5bGVzJztcblxuY29uc3QgRHJvcGRvd25JdGVtID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKHsgaHJlZiwgb25DbGljaywgaXRlbSwgc2V0RHJvcGRvd25PcGVuIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgY2xvc2VNZW51IH0gPSB1c2VNZW51KCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPERyb3Bkb3duSXRlbVN0eWxlcz5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGNsb3NlTWVudSgpO1xuICAgICAgICAgICAgc2V0RHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICA+XG4gICAgICAgICAge2l0ZW19XG4gICAgICAgIDwvYT5cbiAgICAgIDwvRHJvcGRvd25JdGVtU3R5bGVzPlxuICAgICk7XG4gIH1cbik7XG5cbmNvbnN0IE1lbnVEcm9wZG93biA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTWVudURyb3Bkb3duKHByb3BzLCByZWYpIHtcbiAgY29uc3QgW2Ryb3Bkb3duT3Blbiwgc2V0RHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB7IGlzT3Blbiwgc2V0T3BlbiB9ID0gdXNlTWVudSgpO1xuXG4gIGNvbnN0IHsgd2lkdGggfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBzaG93RHJvcGRvd24gPSAoKSA9PiBzZXREcm9wZG93bk9wZW4oIWRyb3Bkb3duT3Blbik7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICAhaXNPcGVuICYmIHNldERyb3Bkb3duT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgICFpc09wZW4gJiYgc2V0RHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgfTtcblxuICAvLyBjbG9zZSBkcm9wZG93biBpZiB3aWR0aCBtb3JlIHRoYW4gODUwcHhcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaXNNb3VudGVkID0gdHJ1ZTtcbiAgICBpZiAod2lkdGggPj0gODUwKSB7XG4gICAgICBzZXREcm9wZG93bk9wZW4oZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNNb3VudGVkID0gZmFsc2U7XG4gICAgfTtcbiAgfSwgW3dpZHRoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RHJvcGRvd25TdHlsZXNcbiAgICAgIG9uTW91c2VPdmVyPXtoYW5kbGVNb3VzZUVudGVyfVxuICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93bi1idG5zLWdyb3VwJz5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXtwcm9wcy5ocmVmfVxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIHpcbiAgICAgICAgPlxuICAgICAgICAgIHtwcm9wcy5kcm9wRG93bk1lbnVpdGVtfVxuICAgICAgICA8L2E+XG4gICAgICAgIDxEcm9wZG93bkJ0blN0eWxlc1xuICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICBvbkNsaWNrPXtzaG93RHJvcGRvd259XG4gICAgICAgICAgZGlzYWJsZWQ9eyFpc09wZW4gfHwgd2lkdGggPiA4NTB9XG4gICAgICAgID5cbiAgICAgICAgICB7ZHJvcGRvd25PcGVuICYmIGlzT3BlbiA/IDxNZEV4cGFuZExlc3MgLz4gOiA8TWRFeHBhbmRNb3JlIC8+fVxuICAgICAgICA8L0Ryb3Bkb3duQnRuU3R5bGVzPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxEcm9wZG93bk1lbnVTdHlsZXMgZHJvcGRvd25PcGVuPXtkcm9wZG93bk9wZW59PlxuICAgICAgICB7cHJvcHM/LmNhdGVnb3JpZXM/Lm1hcChjYXRlZ29yeSA9PiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9e3tcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJvZHVjdHMvW2l0ZW1zXS9bY29sbGVjdGlvbl0nLFxuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiBgJHtmb3JtYXRVcmxUb1JvdXRlKHByb3BzLmRyb3BEb3duTWVudWl0ZW0pfWAsXG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbjogYCR7Zm9ybWF0VXJsVG9Sb3V0ZShjYXRlZ29yeS5jYXRlZ29yeSl9YCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBrZXk9e2NhdGVnb3J5LmlkfVxuICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgIGl0ZW09e2NhdGVnb3J5Py5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgc2V0RHJvcGRvd25PcGVuPXtzZXREcm9wZG93bk9wZW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L0Ryb3Bkb3duTWVudVN0eWxlcz5cbiAgICA8L0Ryb3Bkb3duU3R5bGVzPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVEcm9wZG93bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/menu/MenuDropdown.js\n");

/***/ })

})