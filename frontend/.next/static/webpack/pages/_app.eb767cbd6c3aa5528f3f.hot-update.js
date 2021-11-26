webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar/Nav.js":
/*!**********************************!*\
  !*** ./components/navbar/Nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var _context_navState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/navState */ \"./context/navState.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n/* harmony import */ var _NavDropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavDropdown */ \"./components/navbar/NavDropdown.js\");\n/* harmony import */ var _NavStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NavStyles */ \"./components/navbar/NavStyles.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Search */ \"./components/navbar/Search.js\");\n/* harmony import */ var _helpers_formatUrl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../helpers/formatUrl */ \"./helpers/formatUrl.js\");\n\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/navbar/Nav.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query PRODUCTS1 {\\n    services {\\n      service\\n      id\\n      items {\\n        id\\n        title\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar PRODUCTS = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_templateObject());\nfunction Nav() {\n  _s();\n\n  var _this = this;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(PRODUCTS),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: [\"Error: \", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 21\n  }, this); // services to spread in nav\n\n  var services = data === null || data === void 0 ? void 0 : data.services;\n  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n\n  var _useNav = Object(_context_navState__WEBPACK_IMPORTED_MODULE_8__[\"useNav\"])(),\n      navOpen = _useNav.navOpen,\n      toggleNav = _useNav.toggleNav,\n      closeSideNav = _useNav.closeSideNav,\n      navBtnClick = _useNav.navBtnClick,\n      setNavBtnClick = _useNav.setNavBtnClick;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(),\n      width = _useWindowDimensions.width; // close toggled nav on click outside\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    //  click outside nav handler\n    var handleClickOutside = function handleClickOutside(event) {\n      if (navOpen && !navRef.current.contains(event.target)) {\n        closeSideNav();\n      }\n    }; //  click outside nav listener\n\n\n    document.addEventListener('mousedown', handleClickOutside); // cleanup the event listener\n\n    return function () {\n      document.removeEventListener('mousedown', handleClickOutside);\n    };\n  }, [navOpen]); // close nav when width more than 850px\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var isMounted = true;\n\n    if (width >= 850) {\n      closeSideNav();\n    }\n\n    return function () {\n      isMounted = false;\n    };\n  }, [width]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])(); // link button\n\n  var LinkBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {\n    var href = _ref.href,\n        title = _ref.title;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n      href: href,\n      onClick: function onClick() {\n        return closeSideNav();\n      },\n      ref: ref,\n      className: router.asPath.split('/')[1] == title ? 'active-link link-item' : 'link-item',\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavStyles__WEBPACK_IMPORTED_MODULE_11__[\"NavStyles\"], {\n      open: navOpen,\n      btnClick: navBtnClick,\n      width: width,\n      ref: navRef,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"nav-links\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          href: \"/\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'home'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          href: \"/about\",\n          className: \"link-item\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'about'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 11\n        }, this), services.map(function (service) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n            href: \"/\".concat(service.service),\n            passHref: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavDropdown__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n              title: service.service,\n              items: service.items\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 120,\n              columnNumber: 15\n            }, _this)\n          }, service.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 13\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          href: \"/gallery\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'gallery'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 125,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          href: \"/contacts\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'contacts'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 128,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavStyles__WEBPACK_IMPORTED_MODULE_11__[\"NavButtonStyles\"], {\n        onClick: function onClick() {\n          return setNavBtnClick(true);\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(hamburger_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          hideOutline: false,\n          label: \"Show menu\",\n          toggled: navOpen,\n          toggle: toggleNav\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Search__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Nav, \"Pi+pH4y6jxSPZYPouN3jsEWY/Qs=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"], _context_navState__WEBPACK_IMPORTED_MODULE_8__[\"useNav\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_9__[\"default\"], next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2LmpzP2RlZjMiXSwibmFtZXMiOlsiUFJPRFVDVFMiLCJncWwiLCJOYXYiLCJ1c2VRdWVyeSIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwic2VydmljZXMiLCJuYXZSZWYiLCJ1c2VSZWYiLCJ1c2VOYXYiLCJuYXZPcGVuIiwidG9nZ2xlTmF2IiwiY2xvc2VTaWRlTmF2IiwibmF2QnRuQ2xpY2siLCJzZXROYXZCdG5DbGljayIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInVzZUVmZmVjdCIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlzTW91bnRlZCIsInJvdXRlciIsInVzZVJvdXRlciIsIkxpbmtCdG4iLCJSZWFjdCIsImZvcndhcmRSZWYiLCJyZWYiLCJocmVmIiwidGl0bGUiLCJhc1BhdGgiLCJzcGxpdCIsIm1hcCIsInNlcnZpY2UiLCJpdGVtcyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQywyREFBSCxtQkFBZDtBQWFlLFNBQVNDLEdBQVQsR0FBZTtBQUFBOztBQUFBOztBQUFBLGtCQUNLQywrREFBUSxDQUFDSCxRQUFELENBRGI7QUFBQSxNQUNwQkksSUFEb0IsYUFDcEJBLElBRG9CO0FBQUEsTUFDZEMsS0FEYyxhQUNkQSxLQURjO0FBQUEsTUFDUEMsT0FETyxhQUNQQSxPQURPOztBQUc1QixNQUFJQSxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFB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QyxXQUZSO0FBR0UsaUJBQU8sRUFBRUosT0FIWDtBQUlFLGdCQUFNLEVBQUVDO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUE0Q0UscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVDRjtBQUFBLGtCQURGO0FBZ0REOztHQWxIdUJYLEc7VUFDV0MsdUQsRUFXL0JRLHdELEVBRWdCTSw2RCxFQStCSGEscUQ7OztLQTdDTzVCLEciLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci9OYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIYW1idXJnZXIgZnJvbSAnaGFtYnVyZ2VyLXJlYWN0JztcblxuaW1wb3J0IHsgdXNlTmF2IH0gZnJvbSAnLi4vLi4vY29udGV4dC9uYXZTdGF0ZSc7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLi8uLi9saWIvd2luZG93RGltZW5zaW9ucyc7XG5cbmltcG9ydCBOYXZEcm9wZG93biBmcm9tICcuL05hdkRyb3Bkb3duJztcbmltcG9ydCB7IE5hdlN0eWxlcywgTmF2QnV0dG9uU3R5bGVzIH0gZnJvbSAnLi9OYXZTdHlsZXMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaCc7XG5pbXBvcnQgeyBmb3JtYXRVcmxUb1JvdXRlIH0gZnJvbSAnLi4vLi4vaGVscGVycy9mb3JtYXRVcmwnO1xuXG5jb25zdCBQUk9EVUNUUyA9IGdxbGBcbiAgcXVlcnkgUFJPRFVDVFMxIHtcbiAgICBzZXJ2aWNlcyB7XG4gICAgICBzZXJ2aWNlXG4gICAgICBpZFxuICAgICAgaXRlbXMge1xuICAgICAgICBpZFxuICAgICAgICB0aXRsZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShQUk9EVUNUUyk7XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XG5cbiAgLy8gc2VydmljZXMgdG8gc3ByZWFkIGluIG5hdlxuICBjb25zdCBzZXJ2aWNlcyA9IGRhdGE/LnNlcnZpY2VzO1xuXG4gIGNvbnN0IG5hdlJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHsgbmF2T3BlbiwgdG9nZ2xlTmF2LCBjbG9zZVNpZGVOYXYsIG5hdkJ0bkNsaWNrLCBzZXROYXZCdG5DbGljayB9ID1cbiAgICB1c2VOYXYoKTtcblxuICBjb25zdCB7IHdpZHRoIH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG5cbiAgLy8gY2xvc2UgdG9nZ2xlZCBuYXYgb24gY2xpY2sgb3V0c2lkZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICBjbGljayBvdXRzaWRlIG5hdiBoYW5kbGVyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gZXZlbnQgPT4ge1xuICAgICAgaWYgKG5hdk9wZW4gJiYgIW5hdlJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgY2xvc2VTaWRlTmF2KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vICBjbGljayBvdXRzaWRlIG5hdiBsaXN0ZW5lclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG5cbiAgICAvLyBjbGVhbnVwIHRoZSBldmVudCBsaXN0ZW5lclxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH07XG4gIH0sIFtuYXZPcGVuXSk7XG5cbiAgLy8gY2xvc2UgbmF2IHdoZW4gd2lkdGggbW9yZSB0aGFuIDg1MHB4XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGlzTW91bnRlZCA9IHRydWU7XG4gICAgaWYgKHdpZHRoID49IDg1MCkge1xuICAgICAgY2xvc2VTaWRlTmF2KCk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpc01vdW50ZWQgPSBmYWxzZTtcbiAgICB9O1xuICB9LCBbd2lkdGhdKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuLy8gbGluayBidXR0b25cbiAgY29uc3QgTGlua0J0biA9IFJlYWN0LmZvcndhcmRSZWYoKHsgaHJlZiwgdGl0bGUgfSwgcmVmKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhXG4gICAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGNsb3NlU2lkZU5hdigpfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICByb3V0ZXIuYXNQYXRoLnNwbGl0KCcvJylbMV0gPT0gdGl0bGVcbiAgICAgICAgICAgID8gJ2FjdGl2ZS1saW5rIGxpbmstaXRlbSdcbiAgICAgICAgICAgIDogJ2xpbmstaXRlbSdcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfSk7XG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2U3R5bGVzXG4gICAgICAgIG9wZW49e25hdk9wZW59XG4gICAgICAgIGJ0bkNsaWNrPXtuYXZCdG5DbGlja31cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICByZWY9e25hdlJlZn1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdi1saW5rcyc+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9Jy8nXG4gICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rQnRuIHRpdGxlPXsnaG9tZSd9IC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBocmVmPScvYWJvdXQnXG4gICAgICAgICAgICBjbGFzc05hbWU9J2xpbmstaXRlbSdcbiAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmtCdG4gdGl0bGU9eydhYm91dCd9IC8+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAge3NlcnZpY2VzLm1hcChzZXJ2aWNlID0+IChcbiAgICAgICAgICAgIDxMaW5rIGtleT17c2VydmljZS5pZH0gaHJlZj17YC8ke3NlcnZpY2Uuc2VydmljZX1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPXtzZXJ2aWNlLnNlcnZpY2V9IGl0ZW1zPXtzZXJ2aWNlLml0ZW1zfSAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuXG4gICAgICAgICAgPExpbmsgaHJlZj0nL2dhbGxlcnknIHBhc3NIcmVmPlxuICAgICAgICAgICAgPExpbmtCdG4gdGl0bGU9eydnYWxsZXJ5J30gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL2NvbnRhY3RzJyBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxMaW5rQnRuIHRpdGxlPXsnY29udGFjdHMnfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxOYXZCdXR0b25TdHlsZXMgb25DbGljaz17KCkgPT4gc2V0TmF2QnRuQ2xpY2sodHJ1ZSl9PlxuICAgICAgICAgIDxIYW1idXJnZXJcbiAgICAgICAgICAgIGhpZGVPdXRsaW5lPXtmYWxzZX1cbiAgICAgICAgICAgIGxhYmVsPSdTaG93IG1lbnUnXG4gICAgICAgICAgICB0b2dnbGVkPXtuYXZPcGVufVxuICAgICAgICAgICAgdG9nZ2xlPXt0b2dnbGVOYXZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9OYXZCdXR0b25TdHlsZXM+XG4gICAgICA8L05hdlN0eWxlcz5cbiAgICAgIDxTZWFyY2ggLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar/Nav.js\n");

/***/ })

})