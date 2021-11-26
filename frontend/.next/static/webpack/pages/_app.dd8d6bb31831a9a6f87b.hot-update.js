webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar/Nav.js":
/*!**********************************!*\
  !*** ./components/navbar/Nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var _context_navState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../context/navState */ \"./context/navState.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n/* harmony import */ var _NavDropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NavDropdown */ \"./components/navbar/NavDropdown.js\");\n/* harmony import */ var _NavStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NavStyles */ \"./components/navbar/NavStyles.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Search */ \"./components/navbar/Search.js\");\n/* harmony import */ var _helpers_formatUrl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../helpers/formatUrl */ \"./helpers/formatUrl.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/navbar/Nav.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  query PRODUCTS1 {\\n    services {\\n      service\\n      id\\n      items {\\n        id\\n        title\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar PRODUCTS = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_templateObject());\nfunction Nav() {\n  _s();\n\n  var _this = this,\n      _jsxDEV2;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"])(PRODUCTS),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n    children: [\"Error: \", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 21\n  }, this); // services to spread in nav\n\n  var services = data === null || data === void 0 ? void 0 : data.services;\n  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var _useNav = Object(_context_navState__WEBPACK_IMPORTED_MODULE_9__[\"useNav\"])(),\n      navOpen = _useNav.navOpen,\n      toggleNav = _useNav.toggleNav,\n      closeSideNav = _useNav.closeSideNav,\n      navBtnClick = _useNav.navBtnClick,\n      setNavBtnClick = _useNav.setNavBtnClick;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(),\n      width = _useWindowDimensions.width; // close toggled nav on click outside\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    //  click outside nav handler\n    var handleClickOutside = function handleClickOutside(event) {\n      if (navOpen && !navRef.current.contains(event.target)) {\n        closeSideNav();\n      }\n    }; //  click outside nav listener\n\n\n    document.addEventListener('mousedown', handleClickOutside); // cleanup the event listener\n\n    return function () {\n      document.removeEventListener('mousedown', handleClickOutside);\n    };\n  }, [navOpen]); // close nav when width more than 850px\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var isMounted = true;\n\n    if (width >= 850) {\n      closeSideNav();\n    }\n\n    return function () {\n      isMounted = false;\n    };\n  }, [width]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var LinkBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {\n    var href = _ref.href,\n        title = _ref.title;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n      href: href,\n      onClick: function onClick() {\n        return closeSideNav();\n      },\n      ref: ref,\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_NavStyles__WEBPACK_IMPORTED_MODULE_12__[\"NavStyles\"], {\n      open: navOpen,\n      btnClick: navBtnClick,\n      width: width,\n      ref: navRef,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"nav-links\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          href: \"/\",\n          passHref: true,\n          className: Object(_helpers_formatUrl__WEBPACK_IMPORTED_MODULE_14__[\"formatUrlToRoute\"])(router.asPath.split('/')[1]) == '' ? 'active-link link-item' : 'link-item',\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(LinkBtn, {\n            title: 'home'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, (_jsxDEV2 = {\n          href: \"/about\",\n          className: \"link-item\",\n          passHref: true\n        }, Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"className\", router.asPath.split('/')[1] == 'about' ? 'active-link link-item' : 'link-item'), Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"children\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(LinkBtn, {\n          title: 'about'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 13\n        }, this)), _jsxDEV2), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, this), services.map(function (service) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n            href: \"/\".concat(service.service),\n            passHref: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_NavDropdown__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n              title: service.service,\n              items: service.items\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 120,\n              columnNumber: 15\n            }, _this)\n          }, service.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 13\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          href: \"/gallery\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(LinkBtn, {\n            title: 'gallery'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 124,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          href: \"/contacts\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(LinkBtn, {\n            title: 'contacts'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_NavStyles__WEBPACK_IMPORTED_MODULE_12__[\"NavButtonStyles\"], {\n        onClick: function onClick() {\n          return setNavBtnClick(true);\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(hamburger_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          hideOutline: false,\n          label: \"Show menu\",\n          toggled: navOpen,\n          toggle: toggleNav\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Search__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Nav, \"Pi+pH4y6jxSPZYPouN3jsEWY/Qs=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"], _context_navState__WEBPACK_IMPORTED_MODULE_9__[\"useNav\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_10__[\"default\"], next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2LmpzP2RlZjMiXSwibmFtZXMiOlsiUFJPRFVDVFMiLCJncWwiLCJOYXYiLCJ1c2VRdWVyeSIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwic2VydmljZXMiLCJuYXZSZWYiLCJ1c2VSZWYiLCJ1c2VOYXYiLCJuYXZPcGVuIiwidG9nZ2xlTmF2IiwiY2xvc2VTaWRlTmF2IiwibmF2QnRuQ2xpY2siLCJzZXROYXZCdG5DbGljayIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInVzZUVmZmVjdCIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlzTW91bnRlZCIsInJvdXRlciIsInVzZVJvdXRlciIsIkxpbmtCdG4iLCJSZWFjdCIsImZvcndhcmRSZWYiLCJyZWYiLCJocmVmIiwidGl0bGUiLCJmb3JtYXRVcmxUb1JvdXRlIiwiYXNQYXRoIiwic3BsaXQiLCJtYXAiLCJzZXJ2aWNlIiwiaXRlbXMiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQywyREFBSCxtQkFBZDtBQWFlLFNBQVNDLEdBQVQsR0FBZTtBQUFBOztBQUFBO0FBQUE7O0FBQUEsa0JBQ0tDLCtEQUFRLENBQUNILFFBQUQsQ0FEYjtBQUFBLE1BQ3BCSSxJQURvQixhQUNwQkEsSUFEb0I7QUFBQSxNQUNkQyxLQURjLGFBQ2RBLEtBRGM7QUFBQSxNQUNQQyxPQURPLGFBQ1BBLE9BRE87O0FBRzVCLE1BQUlBLE9BQUosRUFBYSxvQkFBTztBQUFBO0FB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QUMsMkRBQUQ7QUFBaUIsZUFBTyxFQUFFO0FBQUEsaUJBQU0zQixjQUFjLENBQUMsSUFBRCxDQUFwQjtBQUFBLFNBQTFCO0FBQUEsK0JBQ0UscUVBQUMsdURBQUQ7QUFDRSxxQkFBVyxFQUFFLEtBRGY7QUFFRSxlQUFLLEVBQUMsV0FGUjtBQUdFLGlCQUFPLEVBQUVKLE9BSFg7QUFJRSxnQkFBTSxFQUFFQztBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBb0RFLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwREY7QUFBQSxrQkFERjtBQXdERDs7R0FqSHVCWCxHO1VBQ1dDLHVELEVBVy9CUSx3RCxFQUVnQk0sOEQsRUErQkhhLHFEOzs7S0E3Q081QixHIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uYXZiYXIvTmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gJ2hhbWJ1cmdlci1yZWFjdCc7XG5cbmltcG9ydCB7IHVzZU5hdiB9IGZyb20gJy4uLy4uL2NvbnRleHQvbmF2U3RhdGUnO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSAnLi4vLi4vbGliL3dpbmRvd0RpbWVuc2lvbnMnO1xuXG5pbXBvcnQgTmF2RHJvcGRvd24gZnJvbSAnLi9OYXZEcm9wZG93bic7XG5pbXBvcnQgeyBOYXZTdHlsZXMsIE5hdkJ1dHRvblN0eWxlcyB9IGZyb20gJy4vTmF2U3R5bGVzJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xuaW1wb3J0IHsgZm9ybWF0VXJsVG9Sb3V0ZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvZm9ybWF0VXJsJztcblxuY29uc3QgUFJPRFVDVFMgPSBncWxgXG4gIHF1ZXJ5IFBST0RVQ1RTMSB7XG4gICAgc2VydmljZXMge1xuICAgICAgc2VydmljZVxuICAgICAgaWRcbiAgICAgIGl0ZW1zIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGl0bGVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdigpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoUFJPRFVDVFMpO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xuXG4gIC8vIHNlcnZpY2VzIHRvIHNwcmVhZCBpbiBuYXZcbiAgY29uc3Qgc2VydmljZXMgPSBkYXRhPy5zZXJ2aWNlcztcblxuICBjb25zdCBuYXZSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCB7IG5hdk9wZW4sIHRvZ2dsZU5hdiwgY2xvc2VTaWRlTmF2LCBuYXZCdG5DbGljaywgc2V0TmF2QnRuQ2xpY2sgfSA9XG4gICAgdXNlTmF2KCk7XG5cbiAgY29uc3QgeyB3aWR0aCB9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xuXG4gIC8vIGNsb3NlIHRvZ2dsZWQgbmF2IG9uIGNsaWNrIG91dHNpZGVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgY2xpY2sgb3V0c2lkZSBuYXYgaGFuZGxlclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IGV2ZW50ID0+IHtcbiAgICAgIGlmIChuYXZPcGVuICYmICFuYXZSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIGNsb3NlU2lkZU5hdigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyAgY2xpY2sgb3V0c2lkZSBuYXYgbGlzdGVuZXJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xuXG4gICAgLy8gY2xlYW51cCB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9O1xuICB9LCBbbmF2T3Blbl0pO1xuXG4gIC8vIGNsb3NlIG5hdiB3aGVuIHdpZHRoIG1vcmUgdGhhbiA4NTBweFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlO1xuICAgIGlmICh3aWR0aCA+PSA4NTApIHtcbiAgICAgIGNsb3NlU2lkZU5hdigpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNNb3VudGVkID0gZmFsc2U7XG4gICAgfTtcbiAgfSwgW3dpZHRoXSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIFxuXG4gIGNvbnN0IExpbmtCdG4gPSBSZWFjdC5mb3J3YXJkUmVmKCh7IGhyZWYsIHRpdGxlIH0sIHJlZikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPXtocmVmfSBvbkNsaWNrPXsoKSA9PiBjbG9zZVNpZGVOYXYoKX0gcmVmPXtyZWZ9PlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfSk7XG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2U3R5bGVzXG4gICAgICAgIG9wZW49e25hdk9wZW59XG4gICAgICAgIGJ0bkNsaWNrPXtuYXZCdG5DbGlja31cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICByZWY9e25hdlJlZn1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdi1saW5rcyc+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9Jy8nXG4gICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgZm9ybWF0VXJsVG9Sb3V0ZShyb3V0ZXIuYXNQYXRoLnNwbGl0KCcvJylbMV0pID09ICcnXG4gICAgICAgICAgICAgICAgPyAnYWN0aXZlLWxpbmsgbGluay1pdGVtJ1xuICAgICAgICAgICAgICAgIDogJ2xpbmstaXRlbSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGlua0J0biB0aXRsZT17J2hvbWUnfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj0nL2Fib3V0J1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdsaW5rLWl0ZW0nXG4gICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgcm91dGVyLmFzUGF0aC5zcGxpdCgnLycpWzFdID09ICdhYm91dCdcbiAgICAgICAgICAgICAgICA/ICdhY3RpdmUtbGluayBsaW5rLWl0ZW0nXG4gICAgICAgICAgICAgICAgOiAnbGluay1pdGVtJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rQnRuIHRpdGxlPXsnYWJvdXQnfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB7c2VydmljZXMubWFwKHNlcnZpY2UgPT4gKFxuICAgICAgICAgICAgPExpbmsga2V5PXtzZXJ2aWNlLmlkfSBocmVmPXtgLyR7c2VydmljZS5zZXJ2aWNlfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9e3NlcnZpY2Uuc2VydmljZX0gaXRlbXM9e3NlcnZpY2UuaXRlbXN9IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPExpbmsgaHJlZj0nL2dhbGxlcnknIHBhc3NIcmVmPlxuICAgICAgICAgICAgPExpbmtCdG4gdGl0bGU9eydnYWxsZXJ5J30gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL2NvbnRhY3RzJyBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxMaW5rQnRuIHRpdGxlPXsnY29udGFjdHMnfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxOYXZCdXR0b25TdHlsZXMgb25DbGljaz17KCkgPT4gc2V0TmF2QnRuQ2xpY2sodHJ1ZSl9PlxuICAgICAgICAgIDxIYW1idXJnZXJcbiAgICAgICAgICAgIGhpZGVPdXRsaW5lPXtmYWxzZX1cbiAgICAgICAgICAgIGxhYmVsPSdTaG93IG1lbnUnXG4gICAgICAgICAgICB0b2dnbGVkPXtuYXZPcGVufVxuICAgICAgICAgICAgdG9nZ2xlPXt0b2dnbGVOYXZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9OYXZCdXR0b25TdHlsZXM+XG4gICAgICA8L05hdlN0eWxlcz5cbiAgICAgIDxTZWFyY2ggLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar/Nav.js\n");

/***/ })

})