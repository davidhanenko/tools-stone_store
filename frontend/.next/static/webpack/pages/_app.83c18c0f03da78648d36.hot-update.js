webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/menu/ItemsMenu.js":
/*!**************************************!*\
  !*** ./components/menu/ItemsMenu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ItemsMenu; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var _context_menuState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/menuState */ \"./context/menuState.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n/* harmony import */ var _MenuLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MenuLink */ \"./components/menu/MenuLink.js\");\n/* harmony import */ var _MenuTree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MenuTree */ \"./components/menu/MenuTree.js\");\n/* harmony import */ var _ItemsMenuStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ItemsMenuStyles */ \"./components/menu/ItemsMenuStyles.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/menu/ItemsMenu.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  query SERVICE_MENU_QUERY($service: String!) {\\n    services(where: { service: $service }) {\\n      items {\\n        id\\n        title\\n        items_categories {\\n          id\\n          category: category_title\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\nvar SERVICE_MENU_QUERY = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_templateObject());\nfunction ItemsMenu(_ref) {\n  _s();\n\n  var _data$services$,\n      _this = this;\n\n  Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref);\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  var service = router.asPath.split('/')[1];\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])(SERVICE_MENU_QUERY, {\n    variables: {\n      service: service\n    }\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  var _useMenu = Object(_context_menuState__WEBPACK_IMPORTED_MODULE_8__[\"useMenu\"])(),\n      isOpen = _useMenu.isOpen,\n      setOpen = _useMenu.setOpen,\n      btnClicked = _useMenu.btnClicked,\n      setBtnClicked = _useMenu.setBtnClicked,\n      closeMenu = _useMenu.closeMenu; // ref for side menu container\n\n\n  var sideMenuRef = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])();\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(),\n      width = _useWindowDimensions.width;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    //  click outside side menu handler\n    var handleClickOutside = function handleClickOutside(event) {\n      if (isOpen && sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {\n        setOpen(false);\n      }\n    }; //  click outside side menu listener\n\n\n    document.addEventListener('mousedown', handleClickOutside); // cleanup the event listener\n\n    return function () {\n      document.removeEventListener('mousedown', handleClickOutside);\n    };\n  }, [isOpen]); // close side menu if width is more than 850px\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    if (width >= 850) {\n      closeMenu();\n    }\n  }, [width]);\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n    children: [\"Error: \", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 21\n  }, this);\n  var menuItems = data === null || data === void 0 ? void 0 : (_data$services$ = data.services[0]) === null || _data$services$ === void 0 ? void 0 : _data$services$.items;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_ItemsMenuStyles__WEBPACK_IMPORTED_MODULE_12__[\"ItemsMenuStyles\"], {\n      menuOpen: isOpen,\n      btnClicked: btnClicked,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"menu-header\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          ref: sideMenuRef,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_ItemsMenuStyles__WEBPACK_IMPORTED_MODULE_12__[\"MenuButtonStyles\"], {\n            onClick: function onClick() {\n              return setBtnClicked(true);\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(hamburger_react__WEBPACK_IMPORTED_MODULE_7__[\"Slant\"], {\n              hideOutline: false,\n              label: \"Show menu\",\n              toggled: isOpen,\n              toggle: setOpen\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"side-menu-links\",\n            children: menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(function (menuItem) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_MenuLink__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                menuItem: menuItem,\n                onClick: function onClick() {\n                  setOpen(false);\n                }\n              }, menuItem.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 97,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"menu-links\",\n        children: menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(function (menuItem) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_MenuLink__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            menuItem: menuItem\n          }, menuItem.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_MenuTree__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(ItemsMenu, \"llKNsTcFY0ph59ua3LRBly7wH1Q=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"], _apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"], _context_menuState__WEBPACK_IMPORTED_MODULE_8__[\"useMenu\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_9__[\"default\"]];\n});\n\n_c = ItemsMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"ItemsMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51L0l0ZW1zTWVudS5qcz8yNzRlIl0sIm5hbWVzIjpbIlNFUlZJQ0VfTUVOVV9RVUVSWSIsImdxbCIsIkl0ZW1zTWVudSIsInJvdXRlciIsInVzZVJvdXRlciIsInNlcnZpY2UiLCJhc1BhdGgiLCJzcGxpdCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsInVzZU1lbnUiLCJpc09wZW4iLCJzZXRPcGVuIiwiYnRuQ2xpY2tlZCIsInNldEJ0bkNsaWNrZWQiLCJjbG9zZU1lbnUiLCJzaWRlTWVudVJlZiIsInVzZVJlZiIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInVzZUVmZmVjdCIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1lc3NhZ2UiLCJtZW51SXRlbXMiLCJzZXJ2aWNlcyIsIml0ZW1zIiwibWFwIiwibWVudUl0ZW0iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxrQkFBa0IsR0FBR0MsMkRBQUgsbUJBQXhCO0FBZWUsU0FBU0MsU0FBVCxPQUF1QjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQ3BDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0csTUFBUCxDQUFjQyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCLENBQXpCLENBQWhCOztBQUZvQyxrQkFJSEMsK0RBQVEsQ0FBQ1Isa0JBQUQsRUFBcUI7QUFDNURTLGFBQVMsRUFBRTtBQUNUSixhQUFPLEVBQUVBO0FB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QUFBQTtBQUFBLHVCQURzQjtBQUFBLGFBQXZCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUErQkU7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxrQkFDR0wsU0FESCxhQUNHQSxTQURILHVCQUNHQSxTQUFTLENBQUVHLEdBQVgsQ0FBZSxVQUFBQyxRQUFRO0FBQUEsOEJBQ3RCLHFFQUFDLGtEQUFEO0FBQVUsb0JBQVEsRUFBRUE7QUFBcEIsYUFBbUNBLFFBQVEsQ0FBQ0MsRUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEc0I7QUFBQSxTQUF2QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUF1Q0UscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZDRjtBQUFBLGtCQURGO0FBMkNEOztHQTdGdUJwQyxTO1VBQ1BFLHFELEVBR2tCSSx1RCxFQU1pQ0ssMEQsRUFLaERRLDZEOzs7S0FmSW5CLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lbnUvSXRlbXNNZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgU2xhbnQgYXMgSGFtYnVyZ2VyIH0gZnJvbSAnaGFtYnVyZ2VyLXJlYWN0JztcblxuaW1wb3J0IHsgdXNlTWVudSB9IGZyb20gJy4uLy4uL2NvbnRleHQvbWVudVN0YXRlJztcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gJy4uLy4uL2xpYi93aW5kb3dEaW1lbnNpb25zJztcblxuaW1wb3J0IE1lbnVMaW5rIGZyb20gJy4vTWVudUxpbmsnO1xuaW1wb3J0IE1lbnVUcmVlIGZyb20gJy4vTWVudVRyZWUnO1xuaW1wb3J0IHsgSXRlbXNNZW51U3R5bGVzLCBNZW51QnV0dG9uU3R5bGVzIH0gZnJvbSAnLi9JdGVtc01lbnVTdHlsZXMnO1xuXG5jb25zdCBTRVJWSUNFX01FTlVfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IFNFUlZJQ0VfTUVOVV9RVUVSWSgkc2VydmljZTogU3RyaW5nISkge1xuICAgIHNlcnZpY2VzKHdoZXJlOiB7IHNlcnZpY2U6ICRzZXJ2aWNlIH0pIHtcbiAgICAgIGl0ZW1zIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGl0bGVcbiAgICAgICAgaXRlbXNfY2F0ZWdvcmllcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlfdGl0bGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbXNNZW51KHt9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBzZXJ2aWNlID0gcm91dGVyLmFzUGF0aC5zcGxpdCgnLycpWzFdO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFNFUlZJQ0VfTUVOVV9RVUVSWSwge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2VydmljZTogc2VydmljZSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCB7IGlzT3Blbiwgc2V0T3BlbiwgYnRuQ2xpY2tlZCwgc2V0QnRuQ2xpY2tlZCwgY2xvc2VNZW51IH0gPSB1c2VNZW51KCk7XG5cbiAgLy8gcmVmIGZvciBzaWRlIG1lbnUgY29udGFpbmVyXG4gIGNvbnN0IHNpZGVNZW51UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgeyB3aWR0aCB9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gIGNsaWNrIG91dHNpZGUgc2lkZSBtZW51IGhhbmRsZXJcbiAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSBldmVudCA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGlzT3BlbiAmJlxuICAgICAgICBzaWRlTWVudVJlZi5jdXJyZW50ICYmXG4gICAgICAgICFzaWRlTWVudVJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldClcbiAgICAgICkge1xuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gIGNsaWNrIG91dHNpZGUgc2lkZSBtZW51IGxpc3RlbmVyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcblxuICAgIC8vIGNsZWFudXAgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgfTtcbiAgfSwgW2lzT3Blbl0pO1xuXG4gIC8vIGNsb3NlIHNpZGUgbWVudSBpZiB3aWR0aCBpcyBtb3JlIHRoYW4gODUwcHhcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2lkdGggPj0gODUwKSB7XG4gICAgICBjbG9zZU1lbnUoKTtcbiAgICB9XG4gIH0sIFt3aWR0aF0pO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xuXG4gIGNvbnN0IG1lbnVJdGVtcyA9IGRhdGE/LnNlcnZpY2VzWzBdPy5pdGVtcztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SXRlbXNNZW51U3R5bGVzIG1lbnVPcGVuPXtpc09wZW59IGJ0bkNsaWNrZWQ9e2J0bkNsaWNrZWR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVudS1oZWFkZXInPlxuXG4gICAgICAgICAgPGRpdiByZWY9e3NpZGVNZW51UmVmfT5cbiAgICAgICAgICAgIDxNZW51QnV0dG9uU3R5bGVzIG9uQ2xpY2s9eygpID0+IHNldEJ0bkNsaWNrZWQodHJ1ZSl9PlxuICAgICAgICAgICAgICA8SGFtYnVyZ2VyXG4gICAgICAgICAgICAgICAgaGlkZU91dGxpbmU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGxhYmVsPSdTaG93IG1lbnUnXG4gICAgICAgICAgICAgICAgdG9nZ2xlZD17aXNPcGVufVxuICAgICAgICAgICAgICAgIHRvZ2dsZT17c2V0T3Blbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTWVudUJ1dHRvblN0eWxlcz5cblxuICAgICAgICAgICAgey8qIHNpZGViYXIgbWVudSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlLW1lbnUtbGlua3MnPlxuICAgICAgICAgICAgICB7bWVudUl0ZW1zPy5tYXAobWVudUl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51TGlua1xuICAgICAgICAgICAgICAgICAgbWVudUl0ZW09e21lbnVJdGVtfVxuICAgICAgICAgICAgICAgICAga2V5PXttZW51SXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIG1lbnUgY29udGFpbmVyKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51LWxpbmtzJz5cbiAgICAgICAgICB7bWVudUl0ZW1zPy5tYXAobWVudUl0ZW0gPT4gKFxuICAgICAgICAgICAgPE1lbnVMaW5rIG1lbnVJdGVtPXttZW51SXRlbX0ga2V5PXttZW51SXRlbS5pZH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0l0ZW1zTWVudVN0eWxlcz5cblxuICAgICAgPE1lbnVUcmVlIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/menu/ItemsMenu.js\n");

/***/ })

})