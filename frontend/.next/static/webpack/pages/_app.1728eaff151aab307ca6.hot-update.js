webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navbar/Search.js":
/*!*************************************!*\
  !*** ./components/Navbar/Search.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Search; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/ */ \"./node_modules/react/index.js\");\n/* harmony import */ var react___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react___WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SearchStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchStyles */ \"./components/Navbar/SearchStyles.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _lib_useScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/useScroll */ \"./lib/useScroll.js\");\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Navbar/Search.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Search(_ref) {\n  _s();\n\n  var offset = _ref.offset;\n\n  var _useState = Object(react___WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isScroll = _useState[0],\n      setIsScroll = _useState[1];\n\n  var _useScroll = Object(_lib_useScroll__WEBPACK_IMPORTED_MODULE_4__[\"useScroll\"])(),\n      scrollRef = _useScroll.scrollRef;\n\n  var handleScrollPos = function handleScrollPos() {\n    if (window.pageYOffset > 100) {\n      window.pageYOffset !== scrollRef.current.scrollPos && setIsScroll(true);\n      setTimeout(function () {\n        setIsScroll(false);\n        scrollRef.current.scrollPos = window.pageYOffset;\n      }, 1000);\n    }\n\n    console.log(scrollRef.current.scrollPos, window.pageYOffset);\n  };\n\n  Object(react___WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener('scroll', handleScrollPos);\n    return function () {\n      return window.removeEventListener('scroll', handleScrollPos);\n    };\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SearchStyles__WEBPACK_IMPORTED_MODULE_2__[\"SearchStyles\"], {\n    scroll: isScroll,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdSearch\"], {\n      className: \"search-icon\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"text\",\n      placeholder: \"Search...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Search, \"ZqZmvV2sEUWcx5gi7GMpWW3g2hI=\", false, function () {\n  return [_lib_useScroll__WEBPACK_IMPORTED_MODULE_4__[\"useScroll\"]];\n});\n\n_c = Search;\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvU2VhcmNoLmpzPzFhMjciXSwibmFtZXMiOlsiU2VhcmNoIiwib2Zmc2V0IiwidXNlU3RhdGUiLCJpc1Njcm9sbCIsInNldElzU2Nyb2xsIiwidXNlU2Nyb2xsIiwic2Nyb2xsUmVmIiwiaGFuZGxlU2Nyb2xsUG9zIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjdXJyZW50Iiwic2Nyb2xsUG9zIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUE0QjtBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTs7QUFBQSxrQkFDVEMsdURBQVEsQ0FBQyxLQUFELENBREM7QUFBQSxNQUNsQ0MsUUFEa0M7QUFBQSxNQUN4QkMsV0FEd0I7O0FBQUEsbUJBRW5CQyxnRUFBUyxFQUZVO0FBQUEsTUFFakNDLFNBRmlDLGNBRWpDQSxTQUZpQzs7QUFJekMsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFFBQUlDLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixHQUF6QixFQUE4QjtBQUM1QkQsWUFBTSxDQUFDQyxXQUFQLEtBQXVCSCxTQUFTLENBQUNJLE9BQVYsQ0FBa0JDLFNBQXpDLElBQXNEUCxXQUFXLENBQUMsSUFBRCxDQUFqRTtBQUVBUSxnQkFBVSxDQUFDLFlBQU07QUFDZlIsbUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUUsaUJBQVMsQ0FBQ0ksT0FBVixDQUFrQkMsU0FBbEIsR0FBOEJILE1BQU0sQ0FBQ0MsV0FBckM7QUFDRCxPQUhTLEVBR1AsSUFITyxDQUFWO0FBSUQ7O0FBRURJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixTQUFTLENBQUNJLE9BQVYsQ0FBa0JDLFNBQTlCLEVBQXlDSCxNQUFNLENBQUNDLFdBQWhEO0FBQ0QsR0FYRDs7QUFhQU0sMERBQVMsQ0FBQyxZQUFNO0FBQ2RQLFVBQU0sQ0FBQ1EsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NULGVBQWxDO0FBQ0EsV0FBTztBQUFBLGFBQU1DLE1BQU0sQ0FBQ1MsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNWLGVBQXJDLENBQU47QUFBQSxLQUFQO0FBQ0QsR0FIUSxDQUFUO0FBS0Esc0JBQ0UscUVBQUMsMERBQUQ7QUFBYyxVQUFNLEVBQUVKLFFBQXRCO0FBQUEsNEJBQ0UscUVBQUMsdURBQUQ7QUFBVSxlQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBVyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztHQTVCdUJILE07VUFFQUssd0Q7OztLQUZBTCxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZiYXIvU2VhcmNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QvJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWFyY2hTdHlsZXMgfSBmcm9tICcuL1NlYXJjaFN0eWxlcyc7XG5pbXBvcnQgeyBNZFNlYXJjaCB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCB7IHVzZVNjcm9sbCB9IGZyb20gJy4uLy4uL2xpYi91c2VTY3JvbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goeyBvZmZzZXQgfSkge1xuICBjb25zdCBbaXNTY3JvbGwsIHNldElzU2Nyb2xsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBzY3JvbGxSZWYgfSA9IHVzZVNjcm9sbCgpO1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbFBvcyA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMTAwKSB7XG4gICAgICB3aW5kb3cucGFnZVlPZmZzZXQgIT09IHNjcm9sbFJlZi5jdXJyZW50LnNjcm9sbFBvcyAmJiBzZXRJc1Njcm9sbCh0cnVlKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldElzU2Nyb2xsKGZhbHNlKTtcbiAgICAgICAgc2Nyb2xsUmVmLmN1cnJlbnQuc2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coc2Nyb2xsUmVmLmN1cnJlbnQuc2Nyb2xsUG9zLCB3aW5kb3cucGFnZVlPZmZzZXQpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbFBvcyk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGxQb3MpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxTZWFyY2hTdHlsZXMgc2Nyb2xsPXtpc1Njcm9sbH0+XG4gICAgICA8TWRTZWFyY2ggY2xhc3NOYW1lPSdzZWFyY2gtaWNvbicgLz5cbiAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nU2VhcmNoLi4uJyAvPlxuICAgIDwvU2VhcmNoU3R5bGVzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar/Search.js\n");

/***/ })

})