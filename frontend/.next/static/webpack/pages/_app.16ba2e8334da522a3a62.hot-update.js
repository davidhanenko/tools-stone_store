webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navbar/Search.js":
/*!*************************************!*\
  !*** ./components/Navbar/Search.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Search; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SearchStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchStyles */ \"./components/Navbar/SearchStyles.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _lib_useScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/useScroll */ \"./lib/useScroll.js\");\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Navbar/Search.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Search(_ref) {\n  _s();\n\n  var offset = _ref.offset;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isScroll = _useState[0],\n      setIsScroll = _useState[1];\n\n  var _useScroll = Object(_lib_useScroll__WEBPACK_IMPORTED_MODULE_4__[\"useScroll\"])(),\n      scrollRef = _useScroll.scrollRef;\n\n  var handleScrollPos = function handleScrollPos() {\n    if (window.pageYOffset > 10 && window.pageYOffset < window.innerHeight) {\n      window.pageYOffset !== scrollRef.current.scrollPos & setIsScroll(true);\n      setTimeout(function () {\n        setIsScroll(false);\n        scrollRef.current.scrollPos = window.pageYOffset;\n      }, 300);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener('scroll', handleScrollPos);\n    return function () {\n      return window.removeEventListener('scroll', handleScrollPos);\n    };\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SearchStyles__WEBPACK_IMPORTED_MODULE_2__[\"SearchStyles\"], {\n    scroll: isScroll,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdSearch\"], {\n      className: \"search-icon\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"text\",\n      placeholder: \"Search...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Search, \"ZqZmvV2sEUWcx5gi7GMpWW3g2hI=\", false, function () {\n  return [_lib_useScroll__WEBPACK_IMPORTED_MODULE_4__[\"useScroll\"]];\n});\n\n_c = Search;\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvU2VhcmNoLmpzPzFhMjciXSwibmFtZXMiOlsiU2VhcmNoIiwib2Zmc2V0IiwidXNlU3RhdGUiLCJpc1Njcm9sbCIsInNldElzU2Nyb2xsIiwidXNlU2Nyb2xsIiwic2Nyb2xsUmVmIiwiaGFuZGxlU2Nyb2xsUG9zIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJpbm5lckhlaWdodCIsImN1cnJlbnQiLCJzY3JvbGxQb3MiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUFBLGtCQUNUQyxzREFBUSxDQUFDLEtBQUQsQ0FEQztBQUFBLE1BQ2xDQyxRQURrQztBQUFBLE1BQ3hCQyxXQUR3Qjs7QUFBQSxtQkFFbkJDLGdFQUFTLEVBRlU7QUFBQSxNQUVqQ0MsU0FGaUMsY0FFakNBLFNBRmlDOztBQUl6QyxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsUUFBSUMsTUFBTSxDQUFDQyxXQUFQLEdBQXFCLEVBQXJCLElBQTJCRCxNQUFNLENBQUNDLFdBQVAsR0FBcUJELE1BQU0sQ0FBQ0UsV0FBM0QsRUFBd0U7QUFFdEVGLFlBQU0sQ0FBQ0MsV0FBUCxLQUF1QkgsU0FBUyxDQUFDSyxPQUFWLENBQWtCQyxTQUF6QyxHQUF1RFIsV0FBVyxDQUFDLElBQUQsQ0FBbEU7QUFFQVMsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2ZULG1CQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FFLGlCQUFTLENBQUNLLE9BQVYsQ0FBa0JDLFNBQWxCLEdBQThCSixNQUFNLENBQUNDLFdBQXJDO0FBQ0QsT0FIUyxFQUdQLEdBSE8sQ0FBVjtBQUlEO0FBQ0YsR0FWRDs7QUFZQUsseURBQVMsQ0FBQyxZQUFNO0FBQ2ROLFVBQU0sQ0FBQ08sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NSLGVBQWxDO0FBQ0EsV0FBTztBQUFBLGFBQU1DLE1BQU0sQ0FBQ1EsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNULGVBQXJDLENBQU47QUFBQSxLQUFQO0FBQ0QsR0FIUSxDQUFUO0FBS0Esc0JBQ0UscUVBQUMsMERBQUQ7QUFBYyxVQUFNLEVBQUVKLFFBQXRCO0FBQUEsNEJBQ0UscUVBQUMsdURBQUQ7QUFBVSxlQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBVyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztHQTNCdUJILE07VUFFQUssd0Q7OztLQUZBTCxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZiYXIvU2VhcmNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlYXJjaFN0eWxlcyB9IGZyb20gJy4vU2VhcmNoU3R5bGVzJztcbmltcG9ydCB7IE1kU2VhcmNoIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHsgdXNlU2Nyb2xsIH0gZnJvbSAnLi4vLi4vbGliL3VzZVNjcm9sbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCh7IG9mZnNldCB9KSB7XG4gIGNvbnN0IFtpc1Njcm9sbCwgc2V0SXNTY3JvbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IHNjcm9sbFJlZiB9ID0gdXNlU2Nyb2xsKCk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsUG9zID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAxMCAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcblxuICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0ICE9PSBzY3JvbGxSZWYuY3VycmVudC5zY3JvbGxQb3MgJiAgIHNldElzU2Nyb2xsKHRydWUpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0SXNTY3JvbGwoZmFsc2UpO1xuICAgICAgICBzY3JvbGxSZWYuY3VycmVudC5zY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGxQb3MpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsUG9zKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VhcmNoU3R5bGVzIHNjcm9sbD17aXNTY3JvbGx9PlxuICAgICAgPE1kU2VhcmNoIGNsYXNzTmFtZT0nc2VhcmNoLWljb24nIC8+XG4gICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1NlYXJjaC4uLicgLz5cbiAgICA8L1NlYXJjaFN0eWxlcz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar/Search.js\n");

/***/ })

})