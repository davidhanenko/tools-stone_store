webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar/Nav.js":
/*!**********************************!*\
  !*** ./components/navbar/Nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var _context_navState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/navState */ \"./context/navState.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n/* harmony import */ var _NavDropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavDropdown */ \"./components/navbar/NavDropdown.js\");\n/* harmony import */ var _NavStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NavStyles */ \"./components/navbar/NavStyles.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Search */ \"./components/navbar/Search.js\");\n/* harmony import */ var _helpers_formatUrl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../helpers/formatUrl */ \"./helpers/formatUrl.js\");\n\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/navbar/Nav.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query PRODUCTS1 {\\n    services {\\n      service\\n      id\\n      items {\\n        id\\n        title\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar PRODUCTS = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_templateObject());\nfunction Nav() {\n  _s();\n\n  var _this = this;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(PRODUCTS),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: [\"Error: \", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 21\n  }, this); // services to spread in nav\n\n  var services = data === null || data === void 0 ? void 0 : data.services;\n  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n\n  var _useNav = Object(_context_navState__WEBPACK_IMPORTED_MODULE_8__[\"useNav\"])(),\n      navOpen = _useNav.navOpen,\n      toggleNav = _useNav.toggleNav,\n      closeSideNav = _useNav.closeSideNav,\n      navBtnClick = _useNav.navBtnClick,\n      setNavBtnClick = _useNav.setNavBtnClick;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(),\n      width = _useWindowDimensions.width; // close toggled nav on click outside\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    //  click outside nav handler\n    var handleClickOutside = function handleClickOutside(event) {\n      if (navOpen && !navRef.current.contains(event.target)) {\n        closeSideNav();\n      }\n    }; //  click outside nav listener\n\n\n    document.addEventListener('mousedown', handleClickOutside); // cleanup the event listener\n\n    return function () {\n      document.removeEventListener('mousedown', handleClickOutside);\n    };\n  }, [navOpen]); // close nav when width more than 850px\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var isMounted = true;\n\n    if (width >= 850) {\n      closeSideNav();\n    }\n\n    return function () {\n      isMounted = false;\n    };\n  }, [width]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var LinkBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {\n    var href = _ref.href,\n        title = _ref.title;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n      href: href,\n      onClick: function onClick() {\n        return closeSideNav();\n      },\n      ref: ref,\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, _this);\n  });\n  console.log(router.asPath.split('/')[1]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavStyles__WEBPACK_IMPORTED_MODULE_11__[\"NavStyles\"], {\n      open: navOpen,\n      btnClick: navBtnClick,\n      width: width,\n      ref: navRef,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"nav-links\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          href: \"/\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'home',\n            className: !router.asPath.split('/')[1] || Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_13__[\"formatUrlToRoute\"])(router.asPath.split('/')[1]) == 'undefined' ? 'active-link' : ''\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          href: \"/about\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'about'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 11\n        }, this), services.map(function (service) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n            href: \"/\".concat(service.service),\n            passHref: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavDropdown__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n              title: service.service,\n              items: service.items\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 114,\n              columnNumber: 15\n            }, _this)\n          }, service.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 13\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          href: \"/gallery\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'gallery'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 118,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          href: \"/contacts\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'contacts'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavStyles__WEBPACK_IMPORTED_MODULE_11__[\"NavButtonStyles\"], {\n        onClick: function onClick() {\n          return setNavBtnClick(true);\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(hamburger_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          hideOutline: false,\n          label: \"Show menu\",\n          toggled: navOpen,\n          toggle: toggleNav\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Search__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Nav, \"Pi+pH4y6jxSPZYPouN3jsEWY/Qs=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"], _context_navState__WEBPACK_IMPORTED_MODULE_8__[\"useNav\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_9__[\"default\"], next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2LmpzP2RlZjMiXSwibmFtZXMiOlsiUFJPRFVDVFMiLCJncWwiLCJOYXYiLCJ1c2VRdWVyeSIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwic2VydmljZXMiLCJuYXZSZWYiLCJ1c2VSZWYiLCJ1c2VOYXYiLCJuYXZPcGVuIiwidG9nZ2xlTmF2IiwiY2xvc2VTaWRlTmF2IiwibmF2QnRuQ2xpY2siLCJzZXROYXZCdG5DbGljayIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInVzZUVmZmVjdCIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlzTW91bnRlZCIsInJvdXRlciIsInVzZVJvdXRlciIsIkxpbmtCdG4iLCJSZWFjdCIsImZvcndhcmRSZWYiLCJyZWYiLCJocmVmIiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwiYXNQYXRoIiwic3BsaXQiLCJmb3JtYXRVcmxUb1JvdXRlIiwibWFwIiwic2VydmljZSIsIml0ZW1zIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLDJEQUFILG1CQUFkO0FBYWUsU0FBU0MsR0FBVCxHQUFlO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0tDLCtEQUFRLENBQUNILFFBQUQsQ0FEYjtBQUFBLE1BQ3BCSSxJQURvQixhQUNwQkEsSUFEb0I7QUFBQSxNQUNkQyxLQURjLGFBQ2RBLEtBRGM7QUFBQSxNQUNQQyxPQURPLGFBQ1BBLE9BRE87O0FBRzVCLE1BQUlBLE9BQUosRUFBYSxvQkFB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QTtBQUFBLGdCQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQWdDRSxxRUFBQywyREFBRDtBQUFpQixlQUFPLEVBQUU7QUFBQSxpQkFBTTdCLGNBQWMsQ0FBQyxJQUFELENBQXBCO0FBQUEsU0FBMUI7QUFBQSwrQkFDRSxxRUFBQyx1REFBRDtBQUNFLHFCQUFXLEVBQUUsS0FEZjtBQUVFLGVBQUssRUFBQyxXQUZSO0FBR0UsaUJBQU8sRUFBRUosT0FIWDtBQUlFLGdCQUFNLEVBQUVDO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUEwQ0UscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFDRjtBQUFBLGtCQURGO0FBOENEOztHQTNHdUJYLEc7VUFDV0MsdUQsRUFXL0JRLHdELEVBRWdCTSw2RCxFQWtDSmEscUQ7OztLQWhEUTVCLEciLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci9OYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIYW1idXJnZXIgZnJvbSAnaGFtYnVyZ2VyLXJlYWN0JztcblxuaW1wb3J0IHsgdXNlTmF2IH0gZnJvbSAnLi4vLi4vY29udGV4dC9uYXZTdGF0ZSc7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLi8uLi9saWIvd2luZG93RGltZW5zaW9ucyc7XG5cbmltcG9ydCBOYXZEcm9wZG93biBmcm9tICcuL05hdkRyb3Bkb3duJztcbmltcG9ydCB7IE5hdlN0eWxlcywgTmF2QnV0dG9uU3R5bGVzIH0gZnJvbSAnLi9OYXZTdHlsZXMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaCc7XG5pbXBvcnQgeyBmb3JtYXRVcmxUb1JvdXRlIH0gZnJvbSAnLi4vLi4vaGVscGVycy9mb3JtYXRVcmwnO1xuXG5jb25zdCBQUk9EVUNUUyA9IGdxbGBcbiAgcXVlcnkgUFJPRFVDVFMxIHtcbiAgICBzZXJ2aWNlcyB7XG4gICAgICBzZXJ2aWNlXG4gICAgICBpZFxuICAgICAgaXRlbXMge1xuICAgICAgICBpZFxuICAgICAgICB0aXRsZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShQUk9EVUNUUyk7XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XG5cbiAgLy8gc2VydmljZXMgdG8gc3ByZWFkIGluIG5hdlxuICBjb25zdCBzZXJ2aWNlcyA9IGRhdGE/LnNlcnZpY2VzO1xuXG5jb25zdCBuYXZSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCB7IG5hdk9wZW4sIHRvZ2dsZU5hdiwgY2xvc2VTaWRlTmF2LCBuYXZCdG5DbGljaywgc2V0TmF2QnRuQ2xpY2sgfSA9XG4gICAgdXNlTmF2KCk7XG5cbiAgY29uc3QgeyB3aWR0aCB9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xuXG4gIC8vIGNsb3NlIHRvZ2dsZWQgbmF2IG9uIGNsaWNrIG91dHNpZGVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgY2xpY2sgb3V0c2lkZSBuYXYgaGFuZGxlclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IGV2ZW50ID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgbmF2T3BlbiAmJlxuICAgICAgICAhbmF2UmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICAgKSB7XG4gICAgICAgIGNsb3NlU2lkZU5hdigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyAgY2xpY2sgb3V0c2lkZSBuYXYgbGlzdGVuZXJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xuXG4gICAgLy8gY2xlYW51cCB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9O1xuICB9LCBbbmF2T3Blbl0pO1xuXG4gIC8vIGNsb3NlIG5hdiB3aGVuIHdpZHRoIG1vcmUgdGhhbiA4NTBweFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlO1xuICAgIGlmICh3aWR0aCA+PSA4NTApIHtcbiAgICAgIGNsb3NlU2lkZU5hdigpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNNb3VudGVkID0gZmFsc2U7XG4gICAgfTtcbiAgfSwgW3dpZHRoXSk7XG5cbiBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXG4gIGNvbnN0IExpbmtCdG4gPSBSZWFjdC5mb3J3YXJkUmVmKCh7IGhyZWYsIHRpdGxlIH0sIHJlZikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPXtocmVmfSBvbkNsaWNrPXsoKSA9PiBjbG9zZVNpZGVOYXYoKX0gcmVmPXtyZWZ9PlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfSk7XG5cbmNvbnNvbGUubG9nKHJvdXRlci5hc1BhdGguc3BsaXQoJy8nKVsxXSk7XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2U3R5bGVzXG4gICAgICAgIG9wZW49e25hdk9wZW59XG4gICAgICAgIGJ0bkNsaWNrPXtuYXZCdG5DbGlja31cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICByZWY9e25hdlJlZn1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdi1saW5rcyc+XG4gICAgICAgICAgPExpbmsgaHJlZj0nLycgcGFzc0hyZWY+XG4gICAgICAgICAgICA8TGlua0J0blxuICAgICAgICAgICAgICB0aXRsZT17J2hvbWUnfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICFyb3V0ZXIuYXNQYXRoLnNwbGl0KCcvJylbMV0gfHwgZm9ybWF0VXJsVG9Sb3V0ZShyb3V0ZXIuYXNQYXRoLnNwbGl0KCcvJylbMV0pID09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/ICdhY3RpdmUtbGluaydcbiAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0JyBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxMaW5rQnRuIHRpdGxlPXsnYWJvdXQnfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB7c2VydmljZXMubWFwKHNlcnZpY2UgPT4gKFxuICAgICAgICAgICAgPExpbmsga2V5PXtzZXJ2aWNlLmlkfSBocmVmPXtgLyR7c2VydmljZS5zZXJ2aWNlfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9e3NlcnZpY2Uuc2VydmljZX0gaXRlbXM9e3NlcnZpY2UuaXRlbXN9IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPExpbmsgaHJlZj0nL2dhbGxlcnknIHBhc3NIcmVmPlxuICAgICAgICAgICAgPExpbmtCdG4gdGl0bGU9eydnYWxsZXJ5J30gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL2NvbnRhY3RzJyBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxMaW5rQnRuIHRpdGxlPXsnY29udGFjdHMnfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxOYXZCdXR0b25TdHlsZXMgb25DbGljaz17KCkgPT4gc2V0TmF2QnRuQ2xpY2sodHJ1ZSl9PlxuICAgICAgICAgIDxIYW1idXJnZXJcbiAgICAgICAgICAgIGhpZGVPdXRsaW5lPXtmYWxzZX1cbiAgICAgICAgICAgIGxhYmVsPSdTaG93IG1lbnUnXG4gICAgICAgICAgICB0b2dnbGVkPXtuYXZPcGVufVxuICAgICAgICAgICAgdG9nZ2xlPXt0b2dnbGVOYXZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9OYXZCdXR0b25TdHlsZXM+XG4gICAgICA8L05hdlN0eWxlcz5cbiAgICAgIDxTZWFyY2ggLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar/Nav.js\n");

/***/ })

})