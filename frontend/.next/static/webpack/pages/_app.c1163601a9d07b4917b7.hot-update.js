webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar/Nav.js":
/*!**********************************!*\
  !*** ./components/navbar/Nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var _context_navState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/navState */ \"./context/navState.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n/* harmony import */ var _NavDropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavDropdown */ \"./components/navbar/NavDropdown.js\");\n/* harmony import */ var _NavStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NavStyles */ \"./components/navbar/NavStyles.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Search */ \"./components/navbar/Search.js\");\n/* harmony import */ var _helpers_formatUrl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../helpers/formatUrl */ \"./helpers/formatUrl.js\");\n\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/navbar/Nav.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query PRODUCTS1 {\\n    services {\\n      service\\n      id\\n      items {\\n        id\\n        title\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar PRODUCTS = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_templateObject());\nfunction Nav() {\n  _s();\n\n  var _this = this;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(PRODUCTS),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: [\"Error: \", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 21\n  }, this); // services to spread in nav\n\n  var services = data === null || data === void 0 ? void 0 : data.services;\n  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n\n  var _useNav = Object(_context_navState__WEBPACK_IMPORTED_MODULE_8__[\"useNav\"])(),\n      navOpen = _useNav.navOpen,\n      toggleNav = _useNav.toggleNav,\n      closeSideNav = _useNav.closeSideNav,\n      navBtnClick = _useNav.navBtnClick,\n      setNavBtnClick = _useNav.setNavBtnClick;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(),\n      width = _useWindowDimensions.width; // close toggled nav on click outside\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    //  click outside nav handler\n    var handleClickOutside = function handleClickOutside(event) {\n      if (navOpen && !navRef.current.contains(event.target)) {\n        closeSideNav();\n      }\n    }; //  click outside nav listener\n\n\n    document.addEventListener('mousedown', handleClickOutside); // cleanup the event listener\n\n    return function () {\n      document.removeEventListener('mousedown', handleClickOutside);\n    };\n  }, [navOpen]); // close nav when width more than 850px\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var isMounted = true;\n\n    if (width >= 850) {\n      closeSideNav();\n    }\n\n    return function () {\n      isMounted = false;\n    };\n  }, [width]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var LinkBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {\n    var href = _ref.href,\n        title = _ref.title;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n      href: href,\n      onClick: function onClick() {\n        return closeSideNav();\n      },\n      ref: ref,\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavStyles__WEBPACK_IMPORTED_MODULE_11__[\"NavStyles\"], {\n      open: navOpen,\n      btnClick: navBtnClick,\n      width: width,\n      ref: navRef,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"nav-links\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          href: \"/\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'home',\n            className: Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_13__[\"formatUrlToRoute\"])(router.asPath.split('/')[2]) == undefined ? 'active-link' : ''\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          href: \"/about\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'about'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 11\n        }, this), services.map(function (service) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n            href: \"/\".concat(service.service),\n            passHref: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavDropdown__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n              title: service.service,\n              items: service.items\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 112,\n              columnNumber: 15\n            }, _this)\n          }, service.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 13\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          href: \"/gallery\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'gallery'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          href: \"/contacts\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'contacts'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavStyles__WEBPACK_IMPORTED_MODULE_11__[\"NavButtonStyles\"], {\n        onClick: function onClick() {\n          return setNavBtnClick(true);\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(hamburger_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          hideOutline: false,\n          label: \"Show menu\",\n          toggled: navOpen,\n          toggle: toggleNav\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Search__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Nav, \"Pi+pH4y6jxSPZYPouN3jsEWY/Qs=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"], _context_navState__WEBPACK_IMPORTED_MODULE_8__[\"useNav\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_9__[\"default\"], next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2LmpzP2RlZjMiXSwibmFtZXMiOlsiUFJPRFVDVFMiLCJncWwiLCJOYXYiLCJ1c2VRdWVyeSIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwic2VydmljZXMiLCJuYXZSZWYiLCJ1c2VSZWYiLCJ1c2VOYXYiLCJuYXZPcGVuIiwidG9nZ2xlTmF2IiwiY2xvc2VTaWRlTmF2IiwibmF2QnRuQ2xpY2siLCJzZXROYXZCdG5DbGljayIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInVzZUVmZmVjdCIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlzTW91bnRlZCIsInJvdXRlciIsInVzZVJvdXRlciIsIkxpbmtCdG4iLCJSZWFjdCIsImZvcndhcmRSZWYiLCJyZWYiLCJocmVmIiwidGl0bGUiLCJmb3JtYXRVcmxUb1JvdXRlIiwiYXNQYXRoIiwic3BsaXQiLCJ1bmRlZmluZWQiLCJtYXAiLCJzZXJ2aWNlIiwiaXRlbXMiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBR0MsMkRBQUgsbUJBQWQ7QUFhZSxTQUFTQyxHQUFULEdBQWU7QUFBQTs7QUFBQTs7QUFBQSxrQkFDS0MsK0RBQVEsQ0FBQ0gsUUFBRCxDQURiO0FBQUEsTUFDcEJJLElBRG9CLGFBQ3BCQSxJQURvQjtBQUFBLE1BQ2RDLEtBRGMsYUFDZEEsS0FEYztBQUFBLE1BQ1BDLE9BRE8sYUFDUEEsT0FETzs7QUFHNUIsTUFBSUEsT0FBSixFQUFhLG9CQUFPO0FB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VyxFQUFFLEtBRGY7QUFFRSxlQUFLLEVBQUMsV0FGUjtBQUdFLGlCQUFPLEVBQUVKLE9BSFg7QUFJRSxnQkFBTSxFQUFFQztBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBMENFLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQ0Y7QUFBQSxrQkFERjtBQThDRDs7R0F6R3VCWCxHO1VBQ1dDLHVELEVBVy9CUSx3RCxFQUVnQk0sNkQsRUFrQ0phLHFEOzs7S0FoRFE1QixHIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uYXZiYXIvTmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gJ2hhbWJ1cmdlci1yZWFjdCc7XG5cbmltcG9ydCB7IHVzZU5hdiB9IGZyb20gJy4uLy4uL2NvbnRleHQvbmF2U3RhdGUnO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSAnLi4vLi4vbGliL3dpbmRvd0RpbWVuc2lvbnMnO1xuXG5pbXBvcnQgTmF2RHJvcGRvd24gZnJvbSAnLi9OYXZEcm9wZG93bic7XG5pbXBvcnQgeyBOYXZTdHlsZXMsIE5hdkJ1dHRvblN0eWxlcyB9IGZyb20gJy4vTmF2U3R5bGVzJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xuaW1wb3J0IHsgZm9ybWF0VXJsVG9Sb3V0ZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvZm9ybWF0VXJsJztcblxuY29uc3QgUFJPRFVDVFMgPSBncWxgXG4gIHF1ZXJ5IFBST0RVQ1RTMSB7XG4gICAgc2VydmljZXMge1xuICAgICAgc2VydmljZVxuICAgICAgaWRcbiAgICAgIGl0ZW1zIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGl0bGVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdigpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoUFJPRFVDVFMpO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xuXG4gIC8vIHNlcnZpY2VzIHRvIHNwcmVhZCBpbiBuYXZcbiAgY29uc3Qgc2VydmljZXMgPSBkYXRhPy5zZXJ2aWNlcztcblxuY29uc3QgbmF2UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgeyBuYXZPcGVuLCB0b2dnbGVOYXYsIGNsb3NlU2lkZU5hdiwgbmF2QnRuQ2xpY2ssIHNldE5hdkJ0bkNsaWNrIH0gPVxuICAgIHVzZU5hdigpO1xuXG4gIGNvbnN0IHsgd2lkdGggfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcblxuICAvLyBjbG9zZSB0b2dnbGVkIG5hdiBvbiBjbGljayBvdXRzaWRlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gIGNsaWNrIG91dHNpZGUgbmF2IGhhbmRsZXJcbiAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSBldmVudCA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIG5hdk9wZW4gJiZcbiAgICAgICAgIW5hdlJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldClcbiAgICAgICkge1xuICAgICAgICBjbG9zZVNpZGVOYXYoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gIGNsaWNrIG91dHNpZGUgbmF2IGxpc3RlbmVyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcblxuICAgIC8vIGNsZWFudXAgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgfTtcbiAgfSwgW25hdk9wZW5dKTtcblxuICAvLyBjbG9zZSBuYXYgd2hlbiB3aWR0aCBtb3JlIHRoYW4gODUwcHhcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaXNNb3VudGVkID0gdHJ1ZTtcbiAgICBpZiAod2lkdGggPj0gODUwKSB7XG4gICAgICBjbG9zZVNpZGVOYXYoKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlzTW91bnRlZCA9IGZhbHNlO1xuICAgIH07XG4gIH0sIFt3aWR0aF0pO1xuXG4gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblxuICBjb25zdCBMaW5rQnRuID0gUmVhY3QuZm9yd2FyZFJlZigoeyBocmVmLCB0aXRsZSB9LCByZWYpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGEgaHJlZj17aHJlZn0gb25DbGljaz17KCkgPT4gY2xvc2VTaWRlTmF2KCl9IHJlZj17cmVmfT5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9hPlxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZTdHlsZXNcbiAgICAgICAgb3Blbj17bmF2T3Blbn1cbiAgICAgICAgYnRuQ2xpY2s9e25hdkJ0bkNsaWNrfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIHJlZj17bmF2UmVmfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2LWxpbmtzJz5cbiAgICAgICAgICA8TGluayBocmVmPScvJyBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxMaW5rQnRuXG4gICAgICAgICAgICAgIHRpdGxlPXsnaG9tZSd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgZm9ybWF0VXJsVG9Sb3V0ZShyb3V0ZXIuYXNQYXRoLnNwbGl0KCcvJylbMl0pID09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgPyAnYWN0aXZlLWxpbmsnXG4gICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCcgcGFzc0hyZWY+XG4gICAgICAgICAgICA8TGlua0J0biB0aXRsZT17J2Fib3V0J30gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAge3NlcnZpY2VzLm1hcChzZXJ2aWNlID0+IChcbiAgICAgICAgICAgIDxMaW5rIGtleT17c2VydmljZS5pZH0gaHJlZj17YC8ke3NlcnZpY2Uuc2VydmljZX1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPXtzZXJ2aWNlLnNlcnZpY2V9IGl0ZW1zPXtzZXJ2aWNlLml0ZW1zfSAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9nYWxsZXJ5JyBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxMaW5rQnRuIHRpdGxlPXsnZ2FsbGVyeSd9IC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jb250YWN0cycgcGFzc0hyZWY+XG4gICAgICAgICAgICA8TGlua0J0biB0aXRsZT17J2NvbnRhY3RzJ30gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TmF2QnV0dG9uU3R5bGVzIG9uQ2xpY2s9eygpID0+IHNldE5hdkJ0bkNsaWNrKHRydWUpfT5cbiAgICAgICAgICA8SGFtYnVyZ2VyXG4gICAgICAgICAgICBoaWRlT3V0bGluZT17ZmFsc2V9XG4gICAgICAgICAgICBsYWJlbD0nU2hvdyBtZW51J1xuICAgICAgICAgICAgdG9nZ2xlZD17bmF2T3Blbn1cbiAgICAgICAgICAgIHRvZ2dsZT17dG9nZ2xlTmF2fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTmF2QnV0dG9uU3R5bGVzPlxuICAgICAgPC9OYXZTdHlsZXM+XG4gICAgICA8U2VhcmNoIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar/Nav.js\n");

/***/ })

})