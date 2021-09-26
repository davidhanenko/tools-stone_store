webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar/Nav.js":
/*!**********************************!*\
  !*** ./components/navbar/Nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var _lib_navState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/navState */ \"./lib/navState.js\");\n/* harmony import */ var _NavDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavDropdown */ \"./components/navbar/NavDropdown.js\");\n/* harmony import */ var _NavStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavStyles */ \"./components/navbar/NavStyles.js\");\n/* harmony import */ var _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/windowDimensions */ \"./lib/windowDimensions.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Search */ \"./components/navbar/Search.js\");\n\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/navbar/Nav.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query PRODUCTS1 {\\n    products {\\n      id\\n      product_title\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\nvar PRODUCTS = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_templateObject());\nfunction Nav() {\n  _s();\n\n  var _this = this;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])(PRODUCTS),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  var _useNav = Object(_lib_navState__WEBPACK_IMPORTED_MODULE_7__[\"useNav\"])(),\n      navOpen = _useNav.navOpen,\n      toggleNav = _useNav.toggleNav,\n      closeSideNav = _useNav.closeSideNav,\n      navBtnClick = _useNav.navBtnClick,\n      setNavBtnClick = _useNav.setNavBtnClick;\n\n  var _useWindowDimensions = Object(_lib_windowDimensions__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(),\n      width = _useWindowDimensions.width;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (width >= 850) {\n      closeSideNav();\n    }\n  }, [width]);\n  var LinkBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {\n    var onClick = _ref.onClick,\n        href = _ref.href,\n        title = _ref.title;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n      href: href,\n      onClick: function onClick() {\n        return closeSideNav();\n      },\n      ref: ref,\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavStyles__WEBPACK_IMPORTED_MODULE_9__[\"NavStyles\"], {\n      open: navOpen,\n      btnClick: navBtnClick,\n      width: width,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"nav-links\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'home'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/test\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'about'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/products\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavDropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            title: \"products\",\n            products: data\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/tools\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavDropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            title: \"tools\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/sinks\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavDropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            title: \"sinks\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/contacts\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'contact'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/gallery\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkBtn, {\n            title: 'gallery'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_NavStyles__WEBPACK_IMPORTED_MODULE_9__[\"NavButtonStyles\"], {\n        onClick: function onClick() {\n          return setNavBtnClick(true);\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(hamburger_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          hideOutline: false,\n          label: \"Show menu\",\n          toggled: navOpen,\n          toggle: toggleNav\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Search__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Nav, \"XAY/Tqy6zW3dEErCuA8TQYrvQzg=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"], _lib_navState__WEBPACK_IMPORTED_MODULE_7__[\"useNav\"], _lib_windowDimensions__WEBPACK_IMPORTED_MODULE_10__[\"default\"]];\n});\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2LmpzP2RlZjMiXSwibmFtZXMiOlsiUFJPRFVDVFMiLCJncWwiLCJOYXYiLCJ1c2VRdWVyeSIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VOYXYiLCJuYXZPcGVuIiwidG9nZ2xlTmF2IiwiY2xvc2VTaWRlTmF2IiwibmF2QnRuQ2xpY2siLCJzZXROYXZCdG5DbGljayIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInVzZUVmZmVjdCIsIkxpbmtCdG4iLCJSZWFjdCIsImZvcndhcmRSZWYiLCJyZWYiLCJvbkNsaWNrIiwiaHJlZiIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLDJEQUFILG1CQUFkO0FBU2UsU0FBU0MsR0FBVCxHQUFlO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0tDLCtEQUFRLENBQUNILFFBQUQsQ0FEYjtBQUFBLE1BQ3BCSSxJQURvQixhQUNwQkEsSUFEb0I7QUFBQSxNQUNkQyxLQURjLGFBQ2RBLEtBRGM7QUFBQSxNQUNQQyxPQURPLGFBQ1BBLE9BRE87O0FBQUEsZ0JBSTFCQyw0REFBTSxFQUpvQjtBQUFBLE1BR3BCQyxPQUhvQixXQUdwQkEsT0FIb0I7QUFBQSxNQUdYQyxTQUhXLFdBR1hBLFNBSFc7QUFBQSxNQUdBQyxZQUhBLFdBR0FBLFlBSEE7QUFBQSxNQUdjQyxXQUhkLFdBR2NBLFdBSGQ7QUFBQSxNQUcyQkMsY0FIM0IsV0FHMkJBLGNBSDNCOztBQUFBLDZCQUtWQyxzRUFBbUIsRUFMVDtBQUFBLE1BS3BCQyxLQUxvQix3QkFLcEJBLEtBTG9COztBQU81QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUQsS0FBSyxJQUFJLEdBQWIsRUFBa0I7QUFDaEJKLGtCQUFZ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QUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWtDRSxxRUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbENGO0FBQUEsa0JBREY7QUFzQ0Q7O0dBM0R1QlAsRztVQUNXQyx1RCxFQUcvQkksb0QsRUFDZ0JNLDhEOzs7S0FMSVgsRyIsImZpbGUiOiIuL2NvbXBvbmVudHMvbmF2YmFyL05hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIYW1idXJnZXIgZnJvbSAnaGFtYnVyZ2VyLXJlYWN0JztcbmltcG9ydCB7IHVzZU5hdiB9IGZyb20gJy4uLy4uL2xpYi9uYXZTdGF0ZSc7XG5cbmltcG9ydCBOYXZEcm9wZG93biBmcm9tICcuL05hdkRyb3Bkb3duJztcbmltcG9ydCB7IE5hdlN0eWxlcywgTmF2QnV0dG9uU3R5bGVzIH0gZnJvbSAnLi9OYXZTdHlsZXMnO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSAnLi4vLi4vbGliL3dpbmRvd0RpbWVuc2lvbnMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaCc7XG5cbmNvbnN0IFBST0RVQ1RTID0gZ3FsYFxuICBxdWVyeSBQUk9EVUNUUzEge1xuICAgIHByb2R1Y3RzIHtcbiAgICAgIGlkXG4gICAgICBwcm9kdWN0X3RpdGxlXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFBST0RVQ1RTKTtcblxuICBjb25zdCB7IG5hdk9wZW4sIHRvZ2dsZU5hdiwgY2xvc2VTaWRlTmF2LCBuYXZCdG5DbGljaywgc2V0TmF2QnRuQ2xpY2sgfSA9XG4gICAgdXNlTmF2KCk7XG4gIGNvbnN0IHsgd2lkdGggfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh3aWR0aCA+PSA4NTApIHtcbiAgICAgIGNsb3NlU2lkZU5hdigpO1xuICAgIH1cbiAgfSwgW3dpZHRoXSk7XG5cbiAgY29uc3QgTGlua0J0biA9IFJlYWN0LmZvcndhcmRSZWYoKHsgb25DbGljaywgaHJlZiwgdGl0bGUgfSwgcmVmKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGhyZWY9e2hyZWZ9IG9uQ2xpY2s9eygpID0+IGNsb3NlU2lkZU5hdigpfSByZWY9e3JlZn0+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9KTtcbiBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdlN0eWxlcyBvcGVuPXtuYXZPcGVufSBidG5DbGljaz17bmF2QnRuQ2xpY2t9IHdpZHRoPXt3aWR0aH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXYtbGlua3MnPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHBhc3NIcmVmPlxuICAgICAgICAgICAgPExpbmtCdG4gdGl0bGU9eydob21lJ30gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL3Rlc3QnIHBhc3NIcmVmPlxuICAgICAgICAgICAgPExpbmtCdG4gdGl0bGU9eydhYm91dCd9IC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wcm9kdWN0cycgcGFzc0hyZWY+XG4gICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9J3Byb2R1Y3RzJyBwcm9kdWN0cz17ZGF0YX0gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL3Rvb2xzJyBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT0ndG9vbHMnIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9zaW5rcycgcGFzc0hyZWY+XG4gICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9J3NpbmtzJyAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvY29udGFjdHMnIHBhc3NIcmVmPlxuICAgICAgICAgICAgPExpbmtCdG4gdGl0bGU9eydjb250YWN0J30gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL2dhbGxlcnknIHBhc3NIcmVmPlxuICAgICAgICAgICAgPExpbmtCdG4gdGl0bGU9eydnYWxsZXJ5J30gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TmF2QnV0dG9uU3R5bGVzIG9uQ2xpY2s9eygpID0+IHNldE5hdkJ0bkNsaWNrKHRydWUpfT5cbiAgICAgICAgICA8SGFtYnVyZ2VyXG4gICAgICAgICAgICBoaWRlT3V0bGluZT17ZmFsc2V9XG4gICAgICAgICAgICBsYWJlbD0nU2hvdyBtZW51J1xuICAgICAgICAgICAgdG9nZ2xlZD17bmF2T3Blbn1cbiAgICAgICAgICAgIHRvZ2dsZT17dG9nZ2xlTmF2fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTmF2QnV0dG9uU3R5bGVzPlxuICAgICAgPC9OYXZTdHlsZXM+XG4gICAgICA8U2VhcmNoIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar/Nav.js\n");

/***/ })

})