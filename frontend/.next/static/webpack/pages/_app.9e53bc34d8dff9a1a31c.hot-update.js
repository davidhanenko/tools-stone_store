webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/menu/ItemsMenu.js":
/*!**************************************!*\
  !*** ./components/menu/ItemsMenu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ItemsMenu; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var _context_menuState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/menuState */ \"./context/menuState.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n/* harmony import */ var _MenuLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MenuLink */ \"./components/menu/MenuLink.js\");\n/* harmony import */ var _MenuTree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MenuTree */ \"./components/menu/MenuTree.js\");\n/* harmony import */ var _ItemsMenuStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ItemsMenuStyles */ \"./components/menu/ItemsMenuStyles.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/menu/ItemsMenu.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  query SERVICE_MENU_QUERY($service: String!) {\\n    services(where: { service: $service }) {\\n      items {\\n        id\\n        title\\n        items_categories {\\n          id\\n          category: category_title\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\nvar SERVICE_MENU_QUERY = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_templateObject());\nfunction ItemsMenu(_ref) {\n  _s();\n\n  var _data$services$,\n      _this = this;\n\n  Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref);\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  var service = router.asPath.split('/')[1];\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])(SERVICE_MENU_QUERY, {\n    variables: {\n      service: service\n    }\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  var _useMenu = Object(_context_menuState__WEBPACK_IMPORTED_MODULE_8__[\"useMenu\"])(),\n      isOpen = _useMenu.isOpen,\n      setOpen = _useMenu.setOpen,\n      btnClicked = _useMenu.btnClicked,\n      setBtnClicked = _useMenu.setBtnClicked,\n      closeMenu = _useMenu.closeMenu; // ref for side menu container\n\n\n  var sideMenuRef = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])();\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(),\n      width = _useWindowDimensions.width;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    //  click outside side menu handler\n    var handleClickOutside = function handleClickOutside(event) {\n      if (isOpen && sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {\n        setTimeout(function () {});\n      }\n    }; //  click outside side menu listener\n\n\n    document.addEventListener('mousedown', handleClickOutside); // cleanup the event listener\n\n    return function () {\n      document.removeEventListener('mousedown', handleClickOutside);\n    };\n  }, [isOpen]); // close side menu if width is more than 850px\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    if (width >= 850) {\n      closeMenu();\n    }\n  }, [width]);\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 77,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n    children: [\"Error: \", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 21\n  }, this);\n  var menuItems = data === null || data === void 0 ? void 0 : (_data$services$ = data.services[0]) === null || _data$services$ === void 0 ? void 0 : _data$services$.items;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_ItemsMenuStyles__WEBPACK_IMPORTED_MODULE_12__[\"ItemsMenuStyles\"], {\n      menuOpen: isOpen,\n      btnClicked: btnClicked,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"menu-header\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_ItemsMenuStyles__WEBPACK_IMPORTED_MODULE_12__[\"MenuButtonStyles\"], {\n          onClick: function onClick() {\n            return setBtnClicked(true);\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(hamburger_react__WEBPACK_IMPORTED_MODULE_7__[\"Slant\"], {\n            hideOutline: false,\n            label: \"Show menu\",\n            toggled: isOpen,\n            toggle: setOpen\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n          className: \"main-title\",\n          children: service\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"menu-links\",\n        children: menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(function (menuItem) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_MenuLink__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            menuItem: menuItem\n          }, menuItem.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"side-menu-links\",\n        ref: sideMenuRef,\n        children: menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(function (menuItem) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_MenuLink__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            menuItem: menuItem,\n            onClick: function onClick() {\n              setOpen(false);\n            }\n          }, menuItem.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_MenuTree__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(ItemsMenu, \"llKNsTcFY0ph59ua3LRBly7wH1Q=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"], _apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"], _context_menuState__WEBPACK_IMPORTED_MODULE_8__[\"useMenu\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_9__[\"default\"]];\n});\n\n_c = ItemsMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"ItemsMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51L0l0ZW1zTWVudS5qcz8yNzRlIl0sIm5hbWVzIjpbIlNFUlZJQ0VfTUVOVV9RVUVSWSIsImdxbCIsIkl0ZW1zTWVudSIsInJvdXRlciIsInVzZVJvdXRlciIsInNlcnZpY2UiLCJhc1BhdGgiLCJzcGxpdCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsInVzZU1lbnUiLCJpc09wZW4iLCJzZXRPcGVuIiwiYnRuQ2xpY2tlZCIsInNldEJ0bkNsaWNrZWQiLCJjbG9zZU1lbnUiLCJzaWRlTWVudVJlZiIsInVzZVJlZiIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInVzZUVmZmVjdCIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0Iiwic2V0VGltZW91dCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtZXNzYWdlIiwibWVudUl0ZW1zIiwic2VydmljZXMiLCJpdGVtcyIsIm1hcCIsIm1lbnVJdGVtIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLDJEQUFILG1CQUF4QjtBQWVlLFNBQVNDLFNBQVQsT0FBdUI7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUNwQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHRixNQUFNLENBQUNHLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQixHQUFwQixFQUF5QixDQUF6QixDQUFoQjs7QUFGb0Msa0JBSUhDLCtEQUFRLENBQUNSLGtCQUFELEVBQXFCO0FBQzVEUyxhQUFTLEVBQUU7QUFDVEos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YUFBbUNBLFFBQVEsQ0FBQ0MsRUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEc0I7QUFBQSxTQUF2QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRixlQXNCRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBaUMsV0FBRyxFQUFFcEIsV0FBdEM7QUFBQSxrQkFDR2UsU0FESCxhQUNHQSxTQURILHVCQUNHQSxTQUFTLENBQUVHLEdBQVgsQ0FBZSxVQUFBQyxRQUFRO0FBQUEsOEJBQ3RCLHFFQUFDLGtEQUFEO0FBQ0Usb0JBQVEsRUFBRUEsUUFEWjtBQUdFLG1CQUFPLEVBQUUsbUJBQU07QUFDYnZCLHFCQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0Q7QUFMSCxhQUVPdUIsUUFBUSxDQUFDQyxFQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURzQjtBQUFBLFNBQXZCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQW9DRSxxRUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcENGO0FBQUEsa0JBREY7QUF3Q0Q7O0dBN0Z1QnJDLFM7VUFDUEUscUQsRUFHa0JJLHVELEVBTWlDSywwRCxFQUtoRFEsNkQ7OztLQWZJbkIsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVudS9JdGVtc01lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBTbGFudCBhcyBIYW1idXJnZXIgfSBmcm9tICdoYW1idXJnZXItcmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VNZW51IH0gZnJvbSAnLi4vLi4vY29udGV4dC9tZW51U3RhdGUnO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSAnLi4vLi4vbGliL3dpbmRvd0RpbWVuc2lvbnMnO1xuXG5pbXBvcnQgTWVudUxpbmsgZnJvbSAnLi9NZW51TGluayc7XG5pbXBvcnQgTWVudVRyZWUgZnJvbSAnLi9NZW51VHJlZSc7XG5pbXBvcnQgeyBJdGVtc01lbnVTdHlsZXMsIE1lbnVCdXR0b25TdHlsZXMgfSBmcm9tICcuL0l0ZW1zTWVudVN0eWxlcyc7XG5cbmNvbnN0IFNFUlZJQ0VfTUVOVV9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgU0VSVklDRV9NRU5VX1FVRVJZKCRzZXJ2aWNlOiBTdHJpbmchKSB7XG4gICAgc2VydmljZXMod2hlcmU6IHsgc2VydmljZTogJHNlcnZpY2UgfSkge1xuICAgICAgaXRlbXMge1xuICAgICAgICBpZFxuICAgICAgICB0aXRsZVxuICAgICAgICBpdGVtc19jYXRlZ29yaWVzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeV90aXRsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtc01lbnUoe30pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHNlcnZpY2UgPSByb3V0ZXIuYXNQYXRoLnNwbGl0KCcvJylbMV07XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoU0VSVklDRV9NRU5VX1FVRVJZLCB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBzZXJ2aWNlOiBzZXJ2aWNlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHsgaXNPcGVuLCBzZXRPcGVuLCBidG5DbGlja2VkLCBzZXRCdG5DbGlja2VkLCBjbG9zZU1lbnUgfSA9IHVzZU1lbnUoKTtcblxuICAvLyByZWYgZm9yIHNpZGUgbWVudSBjb250YWluZXJcbiAgY29uc3Qgc2lkZU1lbnVSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCB7IHdpZHRoIH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgY2xpY2sgb3V0c2lkZSBzaWRlIG1lbnUgaGFuZGxlclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IGV2ZW50ID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgaXNPcGVuICYmXG4gICAgICAgIHNpZGVNZW51UmVmLmN1cnJlbnQgJiZcbiAgICAgICAgIXNpZGVNZW51UmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICAgKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG5cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vICBjbGljayBvdXRzaWRlIHNpZGUgbWVudSBsaXN0ZW5lclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG5cbiAgICAvLyBjbGVhbnVwIHRoZSBldmVudCBsaXN0ZW5lclxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH07XG4gIH0sIFtpc09wZW5dKTtcblxuICAvLyBjbG9zZSBzaWRlIG1lbnUgaWYgd2lkdGggaXMgbW9yZSB0aGFuIDg1MHB4XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdpZHRoID49IDg1MCkge1xuICAgICAgY2xvc2VNZW51KCk7XG4gICAgfVxuICB9LCBbd2lkdGhdKTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcblxuICBjb25zdCBtZW51SXRlbXMgPSBkYXRhPy5zZXJ2aWNlc1swXT8uaXRlbXM7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEl0ZW1zTWVudVN0eWxlcyBtZW51T3Blbj17aXNPcGVufSBidG5DbGlja2VkPXtidG5DbGlja2VkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnUtaGVhZGVyJz5cbiAgICAgICAgICA8TWVudUJ1dHRvblN0eWxlcyBvbkNsaWNrPXsoKSA9PiBzZXRCdG5DbGlja2VkKHRydWUpfT5cbiAgICAgICAgICAgIDxIYW1idXJnZXJcbiAgICAgICAgICAgICAgaGlkZU91dGxpbmU9e2ZhbHNlfVxuICAgICAgICAgICAgICBsYWJlbD0nU2hvdyBtZW51J1xuICAgICAgICAgICAgICB0b2dnbGVkPXtpc09wZW59XG4gICAgICAgICAgICAgIHRvZ2dsZT17c2V0T3Blbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9NZW51QnV0dG9uU3R5bGVzPlxuXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT0nbWFpbi10aXRsZSc+e3NlcnZpY2V9PC9oMz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIG1lbnUgY29udGFpbmVyKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51LWxpbmtzJz5cbiAgICAgICAgICB7bWVudUl0ZW1zPy5tYXAobWVudUl0ZW0gPT4gKFxuICAgICAgICAgICAgPE1lbnVMaW5rIG1lbnVJdGVtPXttZW51SXRlbX0ga2V5PXttZW51SXRlbS5pZH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIHNpZGViYXIgbWVudSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGUtbWVudS1saW5rcycgcmVmPXtzaWRlTWVudVJlZn0+XG4gICAgICAgICAge21lbnVJdGVtcz8ubWFwKG1lbnVJdGVtID0+IChcbiAgICAgICAgICAgIDxNZW51TGlua1xuICAgICAgICAgICAgICBtZW51SXRlbT17bWVudUl0ZW19XG4gICAgICAgICAgICAgIGtleT17bWVudUl0ZW0uaWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9JdGVtc01lbnVTdHlsZXM+XG5cbiAgICAgIDxNZW51VHJlZSAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/menu/ItemsMenu.js\n");

/***/ })

})