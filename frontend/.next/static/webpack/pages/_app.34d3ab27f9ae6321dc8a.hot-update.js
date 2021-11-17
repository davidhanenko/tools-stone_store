webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/menu/MenuDropdown.js":
/*!*****************************************!*\
  !*** ./components/menu/MenuDropdown.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _context_menuState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/menuState */ \"./context/menuState.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n/* harmony import */ var _helpers_formatUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/formatUrl */ \"./helpers/formatUrl.js\");\n/* harmony import */ var _MenuDropdownStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MenuDropdownStyles */ \"./components/menu/MenuDropdownStyles.js\");\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/menu/MenuDropdown.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar DropdownItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c = _s(function (_ref, ref) {\n  _s();\n\n  var href = _ref.href,\n      onClick = _ref.onClick,\n      item = _ref.item,\n      setDropdownOpen = _ref.setDropdownOpen;\n\n  var _useMenu = Object(_context_menuState__WEBPACK_IMPORTED_MODULE_5__[\"useMenu\"])(),\n      closeMenu = _useMenu.closeMenu;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MenuDropdownStyles__WEBPACK_IMPORTED_MODULE_8__[\"DropdownItemStyles\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: href,\n      onClick: function onClick() {\n        closeMenu();\n        setDropdownOpen(false);\n      },\n      ref: ref,\n      children: item\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 7\n  }, _this);\n}, \"2BMieG6AqW5qFraSazBPzetTxPc=\", false, function () {\n  return [_context_menuState__WEBPACK_IMPORTED_MODULE_5__[\"useMenu\"]];\n}));\n_c2 = DropdownItem;\nvar MenuDropdown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c3 = _s2(function MenuDropdown(props, ref) {\n  var _props$categories,\n      _this2 = this;\n\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      dropdownOpen = _useState[0],\n      setDropdownOpen = _useState[1];\n\n  var _useMenu2 = Object(_context_menuState__WEBPACK_IMPORTED_MODULE_5__[\"useMenu\"])(),\n      isOpen = _useMenu2.isOpen,\n      setOpen = _useMenu2.setOpen;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(),\n      width = _useWindowDimensions.width;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var showDropdown = function showDropdown() {\n    return setDropdownOpen(!dropdownOpen);\n  };\n\n  var handleMouseEnter = function handleMouseEnter() {\n    !isOpen && setDropdownOpen(true);\n  };\n\n  var handleMouseLeave = function handleMouseLeave() {\n    !isOpen && setDropdownOpen(false);\n  }; // close dropdown if width more than 850px\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var isMounted = true;\n\n    if (width >= 850) {\n      setDropdownOpen(false);\n    }\n\n    return function () {\n      isMounted = false;\n    };\n  }, [width]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MenuDropdownStyles__WEBPACK_IMPORTED_MODULE_8__[\"DropdownStyles\"], {\n    onMouseOver: handleMouseEnter,\n    onMouseLeave: handleMouseLeave,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"dropdown-btns-group\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: props.href,\n        ref: ref,\n        className: Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_7__[\"formatUrlToRoute\"])(router.asPath.split('/')[2]) == Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_7__[\"formatUrlToRoute\"])(props.dropDownMenuitem) ? 'active link-title' : 'link-title',\n        children: props.dropDownMenuitem\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MenuDropdownStyles__WEBPACK_IMPORTED_MODULE_8__[\"DropdownBtnStyles\"], {\n        type: \"button\",\n        onClick: showDropdown,\n        disabled: !isOpen || width > 850,\n        children: dropdownOpen && isOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_4__[\"MdExpandLess\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 37\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_4__[\"MdExpandMore\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 56\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MenuDropdownStyles__WEBPACK_IMPORTED_MODULE_8__[\"DropdownMenuStyles\"], {\n      dropdownOpen: dropdownOpen,\n      children: props === null || props === void 0 ? void 0 : (_props$categories = props.categories) === null || _props$categories === void 0 ? void 0 : _props$categories.map(function (category) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: {\n            pathname: '/products/[items]/[collection]',\n            query: {\n              items: \"\".concat(Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_7__[\"formatUrlToRoute\"])(props.dropDownMenuitem)),\n              collection: \"\".concat(Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_7__[\"formatUrlToRoute\"])(category.category))\n            }\n          },\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownItem, {\n            item: category === null || category === void 0 ? void 0 : category.category,\n            setDropdownOpen: setDropdownOpen\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 13\n          }, _this2)\n        }, category.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, _this2);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, this);\n}, \"fqUa1ZhQROLFqUlt11fnXLBAhuc=\", false, function () {\n  return [_context_menuState__WEBPACK_IMPORTED_MODULE_5__[\"useMenu\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_6__[\"default\"], next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n}));\n_c4 = MenuDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuDropdown);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"DropdownItem$React.forwardRef\");\n$RefreshReg$(_c2, \"DropdownItem\");\n$RefreshReg$(_c3, \"MenuDropdown$React.forwardRef\");\n$RefreshReg$(_c4, \"MenuDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51L01lbnVEcm9wZG93bi5qcz9jZjNkIl0sIm5hbWVzIjpbIkRyb3Bkb3duSXRlbSIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInJlZiIsImhyZWYiLCJvbkNsaWNrIiwiaXRlbSIsInNldERyb3Bkb3duT3BlbiIsInVzZU1lbnUiLCJjbG9zZU1lbnUiLCJNZW51RHJvcGRvd24iLCJwcm9wcyIsInVzZVN0YXRlIiwiZHJvcGRvd25PcGVuIiwiaXNPcGVuIiwic2V0T3BlbiIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInJvdXRlciIsInVzZVJvdXRlciIsInNob3dEcm9wZG93biIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwidXNlRWZmZWN0IiwiaXNNb3VudGVkIiwiZm9ybWF0VXJsVG9Sb3V0ZSIsImFzUGF0aCIsInNwbGl0IiwiZHJvcERvd25NZW51aXRlbSIsImNhdGVnb3JpZXMiLCJtYXAiLCJjYXRlZ29yeSIsInBhdGhuYW1lIiwicXVlcnkiLCJpdGVtcyIsImNvbGxlY3Rpb24iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQU9BLElBQU1BLFlBQVksZ0JBQUdDLDRDQUFLLENBQUNDLFVBQU4sU0FDbkIsZ0JBQTJDQyxHQUEzQyxFQUFtRDtBQUFBOztBQUFBLE1BQWhEQyxJQUFnRCxRQUFoREEsSUFBZ0Q7QUFBQSxNQUExQ0MsT0FBMEMsUUFBMUNBLE9BQTBDO0FBQUEsTUFBakNDLElBQWlDLFFBQWpDQSxJQUFpQztBQUFBLE1BQTNCQyxlQUEyQixRQUEzQkEsZUFBMkI7O0FBQUEsaUJBQzNCQyxrRUFBTyxFQURvQjtBQUFBLE1BQ3pDQyxTQUR5QyxZQUN6Q0EsU0FEeUM7O0FBR2pELHNCQUNFLHFFQUFDLHNFQUFEO0FBQUEsMkJBQ0U7QUFDRSxVQUFJLEVBQUVM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S0FBSyxDQUFFa0IsVUFEVixzREFDRyxrQkFBbUJDLEdBQW5CLENBQXVCLFVBQUFDLFFBQVE7QUFBQSw0QkFDOUIscUVBQUMsZ0RBQUQ7QUFDRSxjQUFJLEVBQUU7QUFDSkMsb0JBQVEsRUFBRSxnQ0FETjtBQUVKQyxpQkFBSyxFQUFFO0FBQ0xDLG1CQUFLLFlBQUtULDJFQUFnQixDQUFDZCxLQUFLLENBQUNpQixnQkFBUCxDQUFyQixDQURBO0FBRUxPLHdCQUFVLFlBQUtWLDJFQUFnQixDQUFDTSxRQUFRLENBQUNBLFFBQVYsQ0FBckI7QUFGTDtBQUZILFdBRFI7QUFTRSxrQkFBUSxNQVRWO0FBQUEsaUNBV0UscUVBQUMsWUFBRDtBQUNFLGdCQUFJLEVBQUVBLFFBQUYsYUFBRUEsUUFBRix1QkFBRUEsUUFBUSxDQUFFQSxRQURsQjtBQUVFLDJCQUFlLEVBQUV4QjtBQUZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEYsV0FRT3dCLFFBQVEsQ0FBQ0ssRUFSaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEOEI7QUFBQSxPQUEvQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpREQsQ0EvRW9CO0FBQUEsVUFHUzVCLDBEQUhULEVBS0RRLDZEQUxDLEVBT0pHLHFEQVBJO0FBQUEsR0FBckI7TUFBTVQsWTtBQWlGU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lbnUvTWVudURyb3Bkb3duLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgTWRFeHBhbmRNb3JlLCBNZEV4cGFuZExlc3MgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5cbmltcG9ydCB7IHVzZU1lbnUgfSBmcm9tICcuLi8uLi9jb250ZXh0L21lbnVTdGF0ZSc7XG5cbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gJy4uLy4uL2xpYi93aW5kb3dEaW1lbnNpb25zJztcbmltcG9ydCB7IGZvcm1hdFVybFRvUm91dGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2Zvcm1hdFVybCc7XG5cbmltcG9ydCB7XG4gIERyb3Bkb3duU3R5bGVzLFxuICBEcm9wZG93bkJ0blN0eWxlcyxcbiAgRHJvcGRvd25JdGVtU3R5bGVzLFxuICBEcm9wZG93bk1lbnVTdHlsZXMsXG59IGZyb20gJy4vTWVudURyb3Bkb3duU3R5bGVzJztcblxuY29uc3QgRHJvcGRvd25JdGVtID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKHsgaHJlZiwgb25DbGljaywgaXRlbSwgc2V0RHJvcGRvd25PcGVuIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgY2xvc2VNZW51IH0gPSB1c2VNZW51KCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPERyb3Bkb3duSXRlbVN0eWxlcz5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGNsb3NlTWVudSgpO1xuICAgICAgICAgICAgc2V0RHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICA+XG4gICAgICAgICAge2l0ZW19XG4gICAgICAgIDwvYT5cbiAgICAgIDwvRHJvcGRvd25JdGVtU3R5bGVzPlxuICAgICk7XG4gIH1cbik7XG5cbmNvbnN0IE1lbnVEcm9wZG93biA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTWVudURyb3Bkb3duKHByb3BzLCByZWYpIHtcbiAgY29uc3QgW2Ryb3Bkb3duT3Blbiwgc2V0RHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB7IGlzT3Blbiwgc2V0T3BlbiB9ID0gdXNlTWVudSgpO1xuXG4gIGNvbnN0IHsgd2lkdGggfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBzaG93RHJvcGRvd24gPSAoKSA9PiBzZXREcm9wZG93bk9wZW4oIWRyb3Bkb3duT3Blbik7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICAhaXNPcGVuICYmIHNldERyb3Bkb3duT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgICFpc09wZW4gJiYgc2V0RHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgfTtcblxuICAvLyBjbG9zZSBkcm9wZG93biBpZiB3aWR0aCBtb3JlIHRoYW4gODUwcHhcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaXNNb3VudGVkID0gdHJ1ZTtcbiAgICBpZiAod2lkdGggPj0gODUwKSB7XG4gICAgICBzZXREcm9wZG93bk9wZW4oZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNNb3VudGVkID0gZmFsc2U7XG4gICAgfTtcbiAgfSwgW3dpZHRoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RHJvcGRvd25TdHlsZXNcbiAgICAgIG9uTW91c2VPdmVyPXtoYW5kbGVNb3VzZUVudGVyfVxuICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93bi1idG5zLWdyb3VwJz5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXtwcm9wcy5ocmVmfVxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBmb3JtYXRVcmxUb1JvdXRlKHJvdXRlci5hc1BhdGguc3BsaXQoJy8nKVsyXSkgPT1cbiAgICAgICAgICAgIGZvcm1hdFVybFRvUm91dGUocHJvcHMuZHJvcERvd25NZW51aXRlbSlcbiAgICAgICAgICAgICAgPyAnYWN0aXZlIGxpbmstdGl0bGUnXG4gICAgICAgICAgICAgIDogJ2xpbmstdGl0bGUnXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAge3Byb3BzLmRyb3BEb3duTWVudWl0ZW19XG4gICAgICAgIDwvYT5cbiAgICAgICAgPERyb3Bkb3duQnRuU3R5bGVzXG4gICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgIG9uQ2xpY2s9e3Nob3dEcm9wZG93bn1cbiAgICAgICAgICBkaXNhYmxlZD17IWlzT3BlbiB8fCB3aWR0aCA+IDg1MH1cbiAgICAgICAgPlxuICAgICAgICAgIHtkcm9wZG93bk9wZW4gJiYgaXNPcGVuID8gPE1kRXhwYW5kTGVzcyAvPiA6IDxNZEV4cGFuZE1vcmUgLz59XG4gICAgICAgIDwvRHJvcGRvd25CdG5TdHlsZXM+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPERyb3Bkb3duTWVudVN0eWxlcyBkcm9wZG93bk9wZW49e2Ryb3Bkb3duT3Blbn0+XG4gICAgICAgIHtwcm9wcz8uY2F0ZWdvcmllcz8ubWFwKGNhdGVnb3J5ID0+IChcbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgICBwYXRobmFtZTogJy9wcm9kdWN0cy9baXRlbXNdL1tjb2xsZWN0aW9uXScsXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IGAke2Zvcm1hdFVybFRvUm91dGUocHJvcHMuZHJvcERvd25NZW51aXRlbSl9YCxcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBgJHtmb3JtYXRVcmxUb1JvdXRlKGNhdGVnb3J5LmNhdGVnb3J5KX1gLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGtleT17Y2F0ZWdvcnkuaWR9XG4gICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgaXRlbT17Y2F0ZWdvcnk/LmNhdGVnb3J5fVxuICAgICAgICAgICAgICBzZXREcm9wZG93bk9wZW49e3NldERyb3Bkb3duT3Blbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvRHJvcGRvd25NZW51U3R5bGVzPlxuICAgIDwvRHJvcGRvd25TdHlsZXM+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudURyb3Bkb3duO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/menu/MenuDropdown.js\n");

/***/ })

})