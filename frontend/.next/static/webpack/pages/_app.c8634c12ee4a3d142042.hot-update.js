webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar/Nav.js":
/*!**********************************!*\
  !*** ./components/navbar/Nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var _context_navState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/navState */ \"./context/navState.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n/* harmony import */ var _NavDropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavDropdown */ \"./components/navbar/NavDropdown.js\");\n/* harmony import */ var _NavStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NavStyles */ \"./components/navbar/NavStyles.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Search */ \"./components/navbar/Search.js\");\n/* harmony import */ var _helpers_formatUrl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../helpers/formatUrl */ \"./helpers/formatUrl.js\");\n\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/navbar/Nav.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query PRODUCTS1 {\\n    services {\\n      service\\n      id\\n      items {\\n        id\\n        title\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar PRODUCTS = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_templateObject());\nfunction Nav(_ref) {\n  _s();\n\n  var _this = this;\n\n  var pageProps = _ref.pageProps;\n  console.log(pageProps);\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(PRODUCTS),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: [\"Error: \", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 21\n  }, this); // services to spread in nav\n\n  var services = data === null || data === void 0 ? void 0 : data.services;\n  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n\n  var _useNav = Object(_context_navState__WEBPACK_IMPORTED_MODULE_8__[\"useNav\"])(),\n      navOpen = _useNav.navOpen,\n      toggleNav = _useNav.toggleNav,\n      closeSideNav = _useNav.closeSideNav,\n      navBtnClick = _useNav.navBtnClick,\n      setNavBtnClick = _useNav.setNavBtnClick;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(),\n      width = _useWindowDimensions.width; // close toggled nav on click outside\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    //  click outside nav handler\n    var handleClickOutside = function handleClickOutside(event) {\n      if (navOpen && !navRef.current.contains(event.target)) {\n        closeSideNav();\n      }\n    }; //  click outside nav listener\n\n\n    document.addEventListener('mousedown', handleClickOutside); // cleanup the event listener\n\n    return function () {\n      document.removeEventListener('mousedown', handleClickOutside);\n    };\n  }, [navOpen]); // close nav when width more than 850px\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var isMounted = true;\n\n    if (width >= 850) {\n      closeSideNav();\n    }\n\n    return function () {\n      isMounted = false;\n    };\n  }, [width]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var LinkBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref2, ref) {\n    var href = _ref2.href,\n        title = _ref2.title;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n      href: href,\n      onClick: function onClick() {\n        return closeSideNav();\n      },\n      ref: ref,\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavStyles__WEBPACK_IMPORTED_MODULE_11__[\"NavStyles\"], {\n      open: navOpen,\n      btnClick: navBtnClick,\n      width: width,\n      ref: navRef,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"nav-links\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          href: \"/\",\n          passHref: true,\n          className: Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_13__[\"formatUrlToRoute\"])(router.asPath.split('/')[1]) == '' ? 'active-link link-item' : 'link-item',\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'home'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          href: \"/about\",\n          className: \"link-item\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'about'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 11\n        }, this), services.map(function (service) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n            href: \"/\".concat(service.service),\n            passHref: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavDropdown__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n              title: service.service,\n              items: service.items\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 15\n            }, _this)\n          }, service.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 13\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          href: \"/gallery\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'gallery'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          href: \"/contacts\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'contacts'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavStyles__WEBPACK_IMPORTED_MODULE_11__[\"NavButtonStyles\"], {\n        onClick: function onClick() {\n          return setNavBtnClick(true);\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(hamburger_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          hideOutline: false,\n          label: \"Show menu\",\n          toggled: navOpen,\n          toggle: toggleNav\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Search__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Nav, \"Pi+pH4y6jxSPZYPouN3jsEWY/Qs=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"], _context_navState__WEBPACK_IMPORTED_MODULE_8__[\"useNav\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_9__[\"default\"], next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2LmpzP2RlZjMiXSwibmFtZXMiOlsiUFJPRFVDVFMiLCJncWwiLCJOYXYiLCJwYWdlUHJvcHMiLCJjb25zb2xlIiwibG9nIiwidXNlUXVlcnkiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwibWVzc2FnZSIsInNlcnZpY2VzIiwibmF2UmVmIiwidXNlUmVmIiwidXNlTmF2IiwibmF2T3BlbiIsInRvZ2dsZU5hdiIsImNsb3NlU2lkZU5hdiIsIm5hdkJ0bkNsaWNrIiwic2V0TmF2QnRuQ2xpY2siLCJ1c2VXaW5kb3dEaW1lbnNpb25zIiwid2lkdGgiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc01vdW50ZWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJMaW5rQnRuIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwicmVmIiwiaHJlZiIsInRpdGxlIiwiZm9ybWF0VXJsVG9Sb3V0ZSIsImFzUGF0aCIsInNwbGl0IiwibWFwIiwic2VydmljZSIsIml0ZW1zIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLDJEQUFILG1CQUFkO0FBYWUsU0FBU0MsR0FBVCxPQUEwQjtBQUFBOztBQUFBOztBQUFBLE1BQVpDLFNBQVksUUFBWkEsU0FBWTtBQUN2Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFNBQVo7O0FBRHVDLGtCQUVORywrREFBUSxDQUFDTixRQUFELENBRkY7QUFBQSxNQUUvQk8sSUFGK0IsYUFFL0JBLElBRitCO0FBQUEs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Y0FORixlQWlDRSxxRUFBQywyREFBRDtBQUFpQixlQUFPLEVBQUU7QUFBQSxpQkFBTTNCLGNBQWMsQ0FBQyxJQUFELENBQXBCO0FBQUEsU0FBMUI7QUFBQSwrQkFDRSxxRUFBQyx1REFBRDtBQUNFLHFCQUFXLEVBQUUsS0FEZjtBQUVFLGVBQUssRUFBQyxXQUZSO0FBR0UsaUJBQU8sRUFBRUosT0FIWDtBQUlFLGdCQUFNLEVBQUVDO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUEyQ0UscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNDRjtBQUFBLGtCQURGO0FBK0NEOztHQTVHdUJkLEc7VUFFV0ksdUQsRUFXL0JRLHdELEVBRWdCTSw2RCxFQWtDSmEscUQ7OztLQWpEUS9CLEciLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci9OYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIYW1idXJnZXIgZnJvbSAnaGFtYnVyZ2VyLXJlYWN0JztcblxuaW1wb3J0IHsgdXNlTmF2IH0gZnJvbSAnLi4vLi4vY29udGV4dC9uYXZTdGF0ZSc7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLi8uLi9saWIvd2luZG93RGltZW5zaW9ucyc7XG5cbmltcG9ydCBOYXZEcm9wZG93biBmcm9tICcuL05hdkRyb3Bkb3duJztcbmltcG9ydCB7IE5hdlN0eWxlcywgTmF2QnV0dG9uU3R5bGVzIH0gZnJvbSAnLi9OYXZTdHlsZXMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaCc7XG5pbXBvcnQgeyBmb3JtYXRVcmxUb1JvdXRlIH0gZnJvbSAnLi4vLi4vaGVscGVycy9mb3JtYXRVcmwnO1xuXG5jb25zdCBQUk9EVUNUUyA9IGdxbGBcbiAgcXVlcnkgUFJPRFVDVFMxIHtcbiAgICBzZXJ2aWNlcyB7XG4gICAgICBzZXJ2aWNlXG4gICAgICBpZFxuICAgICAgaXRlbXMge1xuICAgICAgICBpZFxuICAgICAgICB0aXRsZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KHtwYWdlUHJvcHN9KSB7XG4gIGNvbnNvbGUubG9nKHBhZ2VQcm9wcyk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFBST0RVQ1RTKTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcblxuICAvLyBzZXJ2aWNlcyB0byBzcHJlYWQgaW4gbmF2XG4gIGNvbnN0IHNlcnZpY2VzID0gZGF0YT8uc2VydmljZXM7XG5cbmNvbnN0IG5hdlJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHsgbmF2T3BlbiwgdG9nZ2xlTmF2LCBjbG9zZVNpZGVOYXYsIG5hdkJ0bkNsaWNrLCBzZXROYXZCdG5DbGljayB9ID1cbiAgICB1c2VOYXYoKTtcblxuICBjb25zdCB7IHdpZHRoIH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG5cbiAgLy8gY2xvc2UgdG9nZ2xlZCBuYXYgb24gY2xpY2sgb3V0c2lkZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICBjbGljayBvdXRzaWRlIG5hdiBoYW5kbGVyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gZXZlbnQgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBuYXZPcGVuICYmXG4gICAgICAgICFuYXZSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpXG4gICAgICApIHtcbiAgICAgICAgY2xvc2VTaWRlTmF2KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vICBjbGljayBvdXRzaWRlIG5hdiBsaXN0ZW5lclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG5cbiAgICAvLyBjbGVhbnVwIHRoZSBldmVudCBsaXN0ZW5lclxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH07XG4gIH0sIFtuYXZPcGVuXSk7XG5cbiAgLy8gY2xvc2UgbmF2IHdoZW4gd2lkdGggbW9yZSB0aGFuIDg1MHB4XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGlzTW91bnRlZCA9IHRydWU7XG4gICAgaWYgKHdpZHRoID49IDg1MCkge1xuICAgICAgY2xvc2VTaWRlTmF2KCk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpc01vdW50ZWQgPSBmYWxzZTtcbiAgICB9O1xuICB9LCBbd2lkdGhdKTtcblxuIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cbiAgY29uc3QgTGlua0J0biA9IFJlYWN0LmZvcndhcmRSZWYoKHsgaHJlZiwgdGl0bGUgfSwgcmVmKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGhyZWY9e2hyZWZ9IG9uQ2xpY2s9eygpID0+IGNsb3NlU2lkZU5hdigpfSByZWY9e3JlZn0+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9KTtcblxuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdlN0eWxlc1xuICAgICAgICBvcGVuPXtuYXZPcGVufVxuICAgICAgICBidG5DbGljaz17bmF2QnRuQ2xpY2t9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgcmVmPXtuYXZSZWZ9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXYtbGlua3MnPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBocmVmPScvJ1xuICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIGZvcm1hdFVybFRvUm91dGUocm91dGVyLmFzUGF0aC5zcGxpdCgnLycpWzFdKSA9PSAnJ1xuICAgICAgICAgICAgICAgID8gJ2FjdGl2ZS1saW5rIGxpbmstaXRlbSdcbiAgICAgICAgICAgICAgICA6ICdsaW5rLWl0ZW0nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmtCdG4gdGl0bGU9eydob21lJ30gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0JyBjbGFzc05hbWU9J2xpbmstaXRlbScgcGFzc0hyZWY+XG4gICAgICAgICAgICA8TGlua0J0biB0aXRsZT17J2Fib3V0J30gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAge3NlcnZpY2VzLm1hcChzZXJ2aWNlID0+IChcbiAgICAgICAgICAgIDxMaW5rIGtleT17c2VydmljZS5pZH0gaHJlZj17YC8ke3NlcnZpY2Uuc2VydmljZX1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPXtzZXJ2aWNlLnNlcnZpY2V9IGl0ZW1zPXtzZXJ2aWNlLml0ZW1zfSAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9nYWxsZXJ5JyBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxMaW5rQnRuIHRpdGxlPXsnZ2FsbGVyeSd9IC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jb250YWN0cycgcGFzc0hyZWY+XG4gICAgICAgICAgICA8TGlua0J0biB0aXRsZT17J2NvbnRhY3RzJ30gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TmF2QnV0dG9uU3R5bGVzIG9uQ2xpY2s9eygpID0+IHNldE5hdkJ0bkNsaWNrKHRydWUpfT5cbiAgICAgICAgICA8SGFtYnVyZ2VyXG4gICAgICAgICAgICBoaWRlT3V0bGluZT17ZmFsc2V9XG4gICAgICAgICAgICBsYWJlbD0nU2hvdyBtZW51J1xuICAgICAgICAgICAgdG9nZ2xlZD17bmF2T3Blbn1cbiAgICAgICAgICAgIHRvZ2dsZT17dG9nZ2xlTmF2fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTmF2QnV0dG9uU3R5bGVzPlxuICAgICAgPC9OYXZTdHlsZXM+XG4gICAgICA8U2VhcmNoIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar/Nav.js\n");

/***/ })

})