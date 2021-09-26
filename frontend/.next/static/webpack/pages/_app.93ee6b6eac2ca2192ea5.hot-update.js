webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar/Nav.js":
/*!**********************************!*\
  !*** ./components/navbar/Nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var _lib_navState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/navState */ \"./lib/navState.js\");\n/* harmony import */ var _NavDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavDropdown */ \"./components/navbar/NavDropdown.js\");\n/* harmony import */ var _NavStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavStyles */ \"./components/navbar/NavStyles.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Search */ \"./components/navbar/Search.js\");\n\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/navbar/Nav.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query PRODUCTS1 {\\n    products {\\n      id\\n      product_title\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\nvar PRODUCTS = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_templateObject());\nfunction Nav() {\n  _s();\n\n  var _this = this;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])(PRODUCTS),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  var _useNav = Object(_lib_navState__WEBPACK_IMPORTED_MODULE_7__[\"useNav\"])(),\n      navOpen = _useNav.navOpen,\n      toggleNav = _useNav.toggleNav,\n      closeSideNav = _useNav.closeSideNav,\n      navBtnClick = _useNav.navBtnClick,\n      setNavBtnClick = _useNav.setNavBtnClick;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(),\n      width = _useWindowDimensions.width;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (width >= 850) {\n      closeSideNav();\n    }\n  }, [width]);\n  var LinkBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {\n    var onClick = _ref.onClick,\n        href = _ref.href,\n        title = _ref.title;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n      href: href,\n      onClick: function onClick() {\n        return closeSideNav();\n      },\n      ref: ref,\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavStyles__WEBPACK_IMPORTED_MODULE_9__[\"NavStyles\"], {\n      open: navOpen,\n      btnClick: navBtnClick,\n      width: width,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"nav-links\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'home'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/test\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'about'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/products\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavDropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            title: \"products\",\n            products: data === null || data === void 0 ? void 0 : data.products\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/tools\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavDropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            title: \"tools\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/sinks\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavDropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            title: \"sinks\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/contacts\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'contact'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/gallery\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'gallery'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavStyles__WEBPACK_IMPORTED_MODULE_9__[\"NavButtonStyles\"], {\n        onClick: function onClick() {\n          return setNavBtnClick(true);\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(hamburger_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          hideOutline: false,\n          label: \"Show menu\",\n          toggled: navOpen,\n          toggle: toggleNav\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Search__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Nav, \"XAY/Tqy6zW3dEErCuA8TQYrvQzg=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"], _lib_navState__WEBPACK_IMPORTED_MODULE_7__[\"useNav\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_10__[\"default\"]];\n});\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2LmpzP2RlZjMiXSwibmFtZXMiOlsiUFJPRFVDVFMiLCJncWwiLCJOYXYiLCJ1c2VRdWVyeSIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VOYXYiLCJuYXZPcGVuIiwidG9nZ2xlTmF2IiwiY2xvc2VTaWRlTmF2IiwibmF2QnRuQ2xpY2siLCJzZXROYXZCdG5DbGljayIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInVzZUVmZmVjdCIsIkxpbmtCdG4iLCJSZWFjdCIsImZvcndhcmRSZWYiLCJyZWYiLCJvbkNsaWNrIiwiaHJlZiIsInRpdGxlIiwicHJvZHVjdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBR0MsMkRBQUgsbUJBQWQ7QUFTZSxTQUFTQyxHQUFULEdBQWU7QUFBQTs7QUFBQTs7QUFBQSxrQkFDS0MsK0RBQVEsQ0FBQ0gsUUFBRCxDQURiO0FBQUEsTUFDcEJJLElBRG9CLGFBQ3BCQSxJQURvQjtBQUFBLE1BQ2RDLEtBRGMsYUFDZEEsS0FEYztBQUFBLE1BQ1BDLE9BRE8sYUFDUEEsT0FETzs7QUFBQSxnQkFJMUJDLDREQUFNLEVBSm9CO0FBQUEsTUFHcEJDLE9BSG9CLFdBR3BCQSxPQUhvQjtBQUFBLE1BR1hDLFNBSFcsV0FHWEEsU0FIVztBQUFBLE1BR0FDLFlBSEEsV0FHQUEsWUFIQTtBQUFBLE1BR2NDLFdBSGQsV0FHY0EsV0FIZDtBQUFBLE1BRzJCQyxjQUgzQixXQUcyQkEsY0FIM0I7O0FBQUEsNkJBS1ZDLHNFQUFtQixFQUxUO0FBQUEsTUFLcEJDLEtBTG9CLHdCQUtwQkEsS0FMb0I7O0FBTzVCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJRCxLQUFLLElBQUksR0FBYixFQUFrQjtB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O0FBR0UsaUJBQU8sRUFBRUosT0FIWDtBQUlFLGdCQUFNLEVBQUVDO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFrQ0UscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxDRjtBQUFBLGtCQURGO0FBc0NEOztHQTNEdUJQLEc7VUFDV0MsdUQsRUFHL0JJLG9ELEVBQ2dCTSw4RDs7O0tBTElYLEciLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci9OYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gJ2hhbWJ1cmdlci1yZWFjdCc7XG5pbXBvcnQgeyB1c2VOYXYgfSBmcm9tICcuLi8uLi9saWIvbmF2U3RhdGUnO1xuXG5pbXBvcnQgTmF2RHJvcGRvd24gZnJvbSAnLi9OYXZEcm9wZG93bic7XG5pbXBvcnQgeyBOYXZTdHlsZXMsIE5hdkJ1dHRvblN0eWxlcyB9IGZyb20gJy4vTmF2U3R5bGVzJztcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gJy4uLy4uL2xpYi93aW5kb3dEaW1lbnNpb25zJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xuXG5jb25zdCBQUk9EVUNUUyA9IGdxbGBcbiAgcXVlcnkgUFJPRFVDVFMxIHtcbiAgICBwcm9kdWN0cyB7XG4gICAgICBpZFxuICAgICAgcHJvZHVjdF90aXRsZVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShQUk9EVUNUUyk7XG5cbiAgY29uc3QgeyBuYXZPcGVuLCB0b2dnbGVOYXYsIGNsb3NlU2lkZU5hdiwgbmF2QnRuQ2xpY2ssIHNldE5hdkJ0bkNsaWNrIH0gPVxuICAgIHVzZU5hdigpO1xuICBjb25zdCB7IHdpZHRoIH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2lkdGggPj0gODUwKSB7XG4gICAgICBjbG9zZVNpZGVOYXYoKTtcbiAgICB9XG4gIH0sIFt3aWR0aF0pO1xuXG4gIGNvbnN0IExpbmtCdG4gPSBSZWFjdC5mb3J3YXJkUmVmKCh7IG9uQ2xpY2ssIGhyZWYsIHRpdGxlIH0sIHJlZikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPXtocmVmfSBvbkNsaWNrPXsoKSA9PiBjbG9zZVNpZGVOYXYoKX0gcmVmPXtyZWZ9PlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfSk7XG4gXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZTdHlsZXMgb3Blbj17bmF2T3Blbn0gYnRuQ2xpY2s9e25hdkJ0bkNsaWNrfSB3aWR0aD17d2lkdGh9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2LWxpbmtzJz5cbiAgICAgICAgICA8TGluayBocmVmPScvJyBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxMaW5rQnRuIHRpdGxlPXsnaG9tZSd9IC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy90ZXN0JyBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxMaW5rQnRuIHRpdGxlPXsnYWJvdXQnfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvcHJvZHVjdHMnIHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPSdwcm9kdWN0cycgcHJvZHVjdHM9e2RhdGE/LnByb2R1Y3RzfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvdG9vbHMnIHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPSd0b29scycgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL3NpbmtzJyBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT0nc2lua3MnIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jb250YWN0cycgcGFzc0hyZWY+XG4gICAgICAgICAgICA8TGlua0J0biB0aXRsZT17J2NvbnRhY3QnfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvZ2FsbGVyeScgcGFzc0hyZWY+XG4gICAgICAgICAgICA8TGlua0J0biB0aXRsZT17J2dhbGxlcnknfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxOYXZCdXR0b25TdHlsZXMgb25DbGljaz17KCkgPT4gc2V0TmF2QnRuQ2xpY2sodHJ1ZSl9PlxuICAgICAgICAgIDxIYW1idXJnZXJcbiAgICAgICAgICAgIGhpZGVPdXRsaW5lPXtmYWxzZX1cbiAgICAgICAgICAgIGxhYmVsPSdTaG93IG1lbnUnXG4gICAgICAgICAgICB0b2dnbGVkPXtuYXZPcGVufVxuICAgICAgICAgICAgdG9nZ2xlPXt0b2dnbGVOYXZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9OYXZCdXR0b25TdHlsZXM+XG4gICAgICA8L05hdlN0eWxlcz5cbiAgICAgIDxTZWFyY2ggLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar/Nav.js\n");

/***/ })

})