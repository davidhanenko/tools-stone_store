webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/menu/MenuDropdown.js":
/*!*****************************************!*\
  !*** ./components/menu/MenuDropdown.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _context_menuState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/menuState */ \"./context/menuState.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n/* harmony import */ var _helpers_formatUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/formatUrl */ \"./helpers/formatUrl.js\");\n/* harmony import */ var _MenuDropdownStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MenuDropdownStyles */ \"./components/menu/MenuDropdownStyles.js\");\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/menu/MenuDropdown.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar DropdownItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c = _s(function (_ref, ref) {\n  _s();\n\n  var href = _ref.href,\n      onClick = _ref.onClick,\n      menuItem = _ref.menuItem;\n\n  var _useMenu = Object(_context_menuState__WEBPACK_IMPORTED_MODULE_5__[\"useMenu\"])(),\n      closeMenu = _useMenu.closeMenu;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MenuDropdownStyles__WEBPACK_IMPORTED_MODULE_8__[\"DropdownItemStyles\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: href,\n      onClick: function onClick() {\n        return closeMenu();\n      },\n      ref: ref,\n      children: menuItem\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n}, \"2BMieG6AqW5qFraSazBPzetTxPc=\", false, function () {\n  return [_context_menuState__WEBPACK_IMPORTED_MODULE_5__[\"useMenu\"]];\n}));\n_c2 = DropdownItem;\nvar MenuDropdown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c3 = _s2(function MenuDropdown(props, ref) {\n  var _props$categories,\n      _this2 = this;\n\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      dropdownOpen = _useState[0],\n      setDropdownOpen = _useState[1];\n\n  var _useMenu2 = Object(_context_menuState__WEBPACK_IMPORTED_MODULE_5__[\"useMenu\"])(),\n      isOpen = _useMenu2.isOpen;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(),\n      width = _useWindowDimensions.width;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var showDropdown = function showDropdown() {\n    return setDropdownOpen(!dropdownOpen);\n  };\n\n  var mouseEnter = function mouseEnter() {\n    setTimeout(function () {\n      !isOpen && setDropdownOpen(true);\n    }, 0);\n  };\n\n  var mouseLeave = function mouseLeave() {\n    setTimeout(function () {\n      !isOpen && setDropdownOpen(false);\n    }, 300);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var isMounted = true;\n\n    if (width >= 850) {\n      setDropdownOpen(false);\n    }\n\n    return function () {\n      isMounted = false;\n    };\n  }, [width]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MenuDropdownStyles__WEBPACK_IMPORTED_MODULE_8__[\"DropdownStyles\"], {\n    onMouseOver: mouseEnter,\n    onMouseLeave: mouseLeave,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"dropdown-btns-group\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: props.href,\n        ref: ref,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_7__[\"formatUrlToRoute\"])(router.asPath.split('/').slice(-1).join('')) === Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_7__[\"formatUrlToRoute\"])(props.item) ? 'active link-title' : 'link-title',\n          children: props.item\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MenuDropdownStyles__WEBPACK_IMPORTED_MODULE_8__[\"DropdownBtnStyles\"], {\n        type: \"button\",\n        onClick: showDropdown,\n        disabled: !isOpen || width > 850,\n        children: dropdownOpen && isOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_4__[\"MdExpandLess\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 37\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_4__[\"MdExpandMore\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 56\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this), dropdownOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MenuDropdownStyles__WEBPACK_IMPORTED_MODULE_8__[\"DropdownMenuStyles\"], {\n      children: props === null || props === void 0 ? void 0 : (_props$categories = props.categories) === null || _props$categories === void 0 ? void 0 : _props$categories.map(function (category) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: {\n            pathname: '/products/[products]/[collection]',\n            query: {\n              products: \"\".concat(Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_7__[\"formatUrlToRoute\"])(props.item)),\n              collection: \"\".concat(Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_7__[\"formatUrlToRoute\"])(category.category))\n            }\n          },\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownItem, {\n            menuItem: category === null || category === void 0 ? void 0 : category.category\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 15\n          }, _this2)\n        }, category.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 13\n        }, _this2);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 5\n  }, this);\n}, \"fYQU2jr9A3DnmHOXBc16dIgy6/U=\", false, function () {\n  return [_context_menuState__WEBPACK_IMPORTED_MODULE_5__[\"useMenu\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__[\"default\"], next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n}));\n_c4 = MenuDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuDropdown);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"DropdownItem$React.forwardRef\");\n$RefreshReg$(_c2, \"DropdownItem\");\n$RefreshReg$(_c3, \"MenuDropdown$React.forwardRef\");\n$RefreshReg$(_c4, \"MenuDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51L01lbnVEcm9wZG93bi5qcz9jZjNkIl0sIm5hbWVzIjpbIkRyb3Bkb3duSXRlbSIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInJlZiIsImhyZWYiLCJvbkNsaWNrIiwibWVudUl0ZW0iLCJ1c2VNZW51IiwiY2xvc2VNZW51IiwiTWVudURyb3Bkb3duIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImRyb3Bkb3duT3BlbiIsInNldERyb3Bkb3duT3BlbiIsImlzT3BlbiIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInJvdXRlciIsInVzZVJvdXRlciIsInNob3dEcm9wZG93biIsIm1vdXNlRW50ZXIiLCJzZXRUaW1lb3V0IiwibW91c2VMZWF2ZSIsInVzZUVmZmVjdCIsImlzTW91bnRlZCIsImZvcm1hdFVybFRvUm91dGUiLCJhc1BhdGgiLCJzcGxpdCIsInNsaWNlIiwiam9pbiIsIml0ZW0iLCJjYXRlZ29yaWVzIiwibWFwIiwiY2F0ZWdvcnkiLCJwYXRobmFtZSIsInF1ZXJ5IiwicHJvZHVjdHMiLCJjb2xsZWN0aW9uIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFPQSxJQUFNQSxZQUFZLGdCQUFHQyw0Q0FBSyxDQUFDQyxVQUFOLFNBQWlCLGdCQUE4QkMsR0FBOUIsRUFBc0M7QUFBQTs7QUFBQSxNQUFuQ0MsSUFBbUMsUUFBbkNBLElBQW1DO0FBQUEsTUFBN0JDLE9BQTZCLFFBQTdCQSxPQUE2QjtBQUFBLE1BQXBCQyxRQUFvQixRQUFwQkEsUUFBb0I7O0FBQUEsaUJBQ3BEQyxrRUFBTyxFQUQ2QztBQUFBLE1BQ2xFQyxTQURrRSxZQUNsRUEsU0FEa0U7O0FBRzFFLHNCQUNFLHFFQUFDLHNFQUFEO0FBQUEsMkJBQ0U7QUFBRyxVQUFJLEVBQUVKLElBQVQ7QUFBZSxhQUFPLEVBQUU7QUFBQSxlQUFN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QUNYLHFFQUFDLHNFQUFEO0FBQUEsZ0JBQ0dGLEtBREgsYUFDR0EsS0FESCw0Q0FDR0EsS0FBSyxDQUFFcUIsVUFEVixzREFDRyxrQkFBbUJDLEdBQW5CLENBQXVCLFVBQUFDLFFBQVE7QUFBQSw0QkFDOUIscUVBQUMsZ0RBQUQ7QUFDRSxjQUFJLEVBQUU7QUFDSkMsb0JBQVEsRUFBRSxtQ0FETjtBQUVKQyxpQkFBSyxFQUFFO0FBQ0xDLHNCQUFRLFlBQUtYLDJFQUFnQixDQUFDZixLQUFLLENBQUNvQixJQUFQLENBQXJCLENBREg7QUFFTE8sd0JBQVUsWUFBS1osMkVBQWdCLENBQUNRLFFBQVEsQ0FBQ0EsUUFBVixDQUFyQjtBQUZMO0FBRkgsV0FEUjtBQVNFLGtCQUFRLE1BVFY7QUFBQSxpQ0FXRSxxRUFBQyxZQUFEO0FBQWMsb0JBQVEsRUFBRUEsUUFBRixhQUFFQSxRQUFGLHVCQUFFQSxRQUFRLENBQUVBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRixXQVFPQSxRQUFRLENBQUNLLEVBUmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRDhCO0FBQUEsT0FBL0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkNELENBNUVvQjtBQUFBLFVBRUEvQiwwREFGQSxFQUdEUSw2REFIQyxFQUtKRyxxREFMSTtBQUFBLEdBQXJCO01BQU1ULFk7QUE4RVNBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tZW51L01lbnVEcm9wZG93bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IE1kRXhwYW5kTW9yZSwgTWRFeHBhbmRMZXNzIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuXG5pbXBvcnQgeyB1c2VNZW51IH0gZnJvbSAnLi4vLi4vY29udGV4dC9tZW51U3RhdGUnO1xuXG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLi8uLi9saWIvd2luZG93RGltZW5zaW9ucyc7XG5pbXBvcnQgeyBmb3JtYXRVcmxUb1JvdXRlIH0gZnJvbSAnLi4vLi4vaGVscGVycy9mb3JtYXRVcmwnO1xuXG5pbXBvcnQge1xuICBEcm9wZG93blN0eWxlcyxcbiAgRHJvcGRvd25CdG5TdHlsZXMsXG4gIERyb3Bkb3duSXRlbVN0eWxlcyxcbiAgRHJvcGRvd25NZW51U3R5bGVzLFxufSBmcm9tICcuL01lbnVEcm9wZG93blN0eWxlcyc7XG5cbmNvbnN0IERyb3Bkb3duSXRlbSA9IFJlYWN0LmZvcndhcmRSZWYoKHsgaHJlZiwgb25DbGljaywgbWVudUl0ZW0gfSwgcmVmKSA9PiB7XG4gIGNvbnN0IHsgY2xvc2VNZW51IH0gPSB1c2VNZW51KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8RHJvcGRvd25JdGVtU3R5bGVzPlxuICAgICAgPGEgaHJlZj17aHJlZn0gb25DbGljaz17KCkgPT4gY2xvc2VNZW51KCl9IHJlZj17cmVmfT5cbiAgICAgICAge21lbnVJdGVtfVxuICAgICAgPC9hPlxuICAgIDwvRHJvcGRvd25JdGVtU3R5bGVzPlxuICApO1xufSk7XG5cbmNvbnN0IE1lbnVEcm9wZG93biA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTWVudURyb3Bkb3duKHByb3BzLCByZWYpIHtcbiAgY29uc3QgW2Ryb3Bkb3duT3Blbiwgc2V0RHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBpc09wZW4gfSA9IHVzZU1lbnUoKTtcbiAgY29uc3QgeyB3aWR0aCB9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHNob3dEcm9wZG93biA9ICgpID0+IHNldERyb3Bkb3duT3BlbighZHJvcGRvd25PcGVuKTtcblxuICBjb25zdCBtb3VzZUVudGVyID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgIWlzT3BlbiAmJiBzZXREcm9wZG93bk9wZW4odHJ1ZSk7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgY29uc3QgbW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICFpc09wZW4gJiYgc2V0RHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgICB9LCAzMDApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGlzTW91bnRlZCA9IHRydWU7XG4gICAgaWYgKHdpZHRoID49IDg1MCkge1xuICAgICAgc2V0RHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlzTW91bnRlZCA9IGZhbHNlO1xuICAgIH07XG4gIH0sIFt3aWR0aF0pO1xuXG4gIHJldHVybiAoXG4gICAgPERyb3Bkb3duU3R5bGVzIG9uTW91c2VPdmVyPXttb3VzZUVudGVyfSBvbk1vdXNlTGVhdmU9e21vdXNlTGVhdmV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Ryb3Bkb3duLWJ0bnMtZ3JvdXAnPlxuICAgICAgICA8YSBocmVmPXtwcm9wcy5ocmVmfSByZWY9e3JlZn0+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIGZvcm1hdFVybFRvUm91dGUocm91dGVyLmFzUGF0aC5zcGxpdCgnLycpLnNsaWNlKC0xKS5qb2luKCcnKSkgPT09XG4gICAgICAgICAgICAgIGZvcm1hdFVybFRvUm91dGUocHJvcHMuaXRlbSlcbiAgICAgICAgICAgICAgICA/ICdhY3RpdmUgbGluay10aXRsZSdcbiAgICAgICAgICAgICAgICA6ICdsaW5rLXRpdGxlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcy5pdGVtfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8RHJvcGRvd25CdG5TdHlsZXNcbiAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgb25DbGljaz17c2hvd0Ryb3Bkb3dufVxuICAgICAgICAgIGRpc2FibGVkPXshaXNPcGVuIHx8IHdpZHRoID4gODUwfVxuICAgICAgICA+XG4gICAgICAgICAge2Ryb3Bkb3duT3BlbiAmJiBpc09wZW4gPyA8TWRFeHBhbmRMZXNzIC8+IDogPE1kRXhwYW5kTW9yZSAvPn1cbiAgICAgICAgPC9Ecm9wZG93bkJ0blN0eWxlcz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7ZHJvcGRvd25PcGVuICYmIChcbiAgICAgICAgPERyb3Bkb3duTWVudVN0eWxlcz5cbiAgICAgICAgICB7cHJvcHM/LmNhdGVnb3JpZXM/Lm1hcChjYXRlZ29yeSA9PiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJvZHVjdHMvW3Byb2R1Y3RzXS9bY29sbGVjdGlvbl0nLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICBwcm9kdWN0czogYCR7Zm9ybWF0VXJsVG9Sb3V0ZShwcm9wcy5pdGVtKX1gLFxuICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogYCR7Zm9ybWF0VXJsVG9Sb3V0ZShjYXRlZ29yeS5jYXRlZ29yeSl9YCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBrZXk9e2NhdGVnb3J5LmlkfVxuICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIG1lbnVJdGVtPXtjYXRlZ29yeT8uY2F0ZWdvcnl9IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvRHJvcGRvd25NZW51U3R5bGVzPlxuICAgICAgKX1cbiAgICA8L0Ryb3Bkb3duU3R5bGVzPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVEcm9wZG93bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/menu/MenuDropdown.js\n");

/***/ })

})