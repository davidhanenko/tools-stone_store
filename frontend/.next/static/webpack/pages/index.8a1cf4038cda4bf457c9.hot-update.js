webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Carousel/Carousel.js":
/*!*****************************************!*\
  !*** ./components/Carousel/Carousel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! embla-carousel/react */ \"./node_modules/embla-carousel/react.js\");\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CarouselButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CarouselButtons */ \"./components/Carousel/CarouselButtons.js\");\n/* harmony import */ var _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/useRecursiveTimeout */ \"./lib/useRecursiveTimeout.js\");\n/* harmony import */ var _CarouselStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CarouselStyles */ \"./components/Carousel/CarouselStyles.js\");\n/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Slide */ \"./components/Carousel/Slide.js\");\n\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/Carousel/Carousel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar AUTOPLAY_INTERVAL = 4000;\n\nvar EmblaCarousel = function EmblaCarousel(_ref) {\n  _s();\n\n  var slides = _ref.slides,\n      mediaByIndex = _ref.mediaByIndex;\n\n  // animation state\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      animation = _useState[0],\n      setAnimation = _useState[1]; // key state for slides\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(Math.random()),\n      carouselRandomNumber = _useState2[0],\n      setCarouselRandomNumber = _useState2[1];\n\n  var _useEmblaCarousel = Object(embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"])({\n    loop: true,\n    skipSnaps: false,\n    speed: 8\n  }),\n      _useEmblaCarousel2 = Object(_Volumes_Files_Work_A2Z_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useEmblaCarousel, 2),\n      viewportRef = _useEmblaCarousel2[0],\n      embla = _useEmblaCarousel2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      prevBtnEnabled = _useState3[0],\n      setPrevBtnEnabled = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      nextBtnEnabled = _useState4[0],\n      setNextBtnEnabled = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      selectedIndex = _useState5[0],\n      setSelectedIndex = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      scrollSnaps = _useState6[0],\n      setScrollSnaps = _useState6[1];\n\n  var autoplay = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n\n    if (embla.canScrollNext()) {\n      embla.scrollNext(); // setCarouselRandomNumber(Math.random());\n\n      setAnimation(true);\n    } else {\n      embla.scrollTo(0); // setCarouselRandomNumber(Math.random());\n\n      setAnimation(true);\n    }\n  }, [embla]);\n\n  var _useRecursiveTimeout = Object(_lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_5__[\"useRecursiveTimeout\"])(autoplay, AUTOPLAY_INTERVAL),\n      play = _useRecursiveTimeout.play,\n      stop = _useRecursiveTimeout.stop;\n\n  var scrollNext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return; // setCarouselRandomNumber(Math.random());\n\n    embla.scrollNext();\n    stop();\n  }, [embla, stop]);\n  var scrollPrev = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return; // setCarouselRandomNumber(Math.random());\n\n    embla.scrollPrev();\n    stop();\n  }, [embla, stop]);\n  var scrollTo = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (index) {\n    // setCarouselRandomNumber(Math.random());\n    embla && embla.scrollTo(index), [embla];\n  });\n  var onSelect = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!embla) return;\n    setSelectedIndex(embla.selectedScrollSnap());\n    setPrevBtnEnabled(embla.canScrollPrev());\n    setNextBtnEnabled(embla.canScrollNext());\n  }, [embla, setSelectedIndex]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!embla) return;\n    onSelect();\n    setCarouselRandomNumber(Math.random());\n    setScrollSnaps(embla.scrollSnapList());\n    embla.on('select', onSelect);\n    embla.on('pointerDown', stop);\n  }, [embla, onSelect, setScrollSnaps, stop]); // useEffect(() => {\n  //   setCarouselRandomNumber(Math.random());\n  // }, [animation]);\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    play();\n  }, [play]);\n  console.log(carouselRandomNumber);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselStyles__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"embla__viewport\",\n      ref: viewportRef,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"embla__container\",\n        children: slides.map(function (index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"embla__slide\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"embla__slide__inner\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Slide__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                mediaByIndex: mediaByIndex,\n                index: index,\n                setAnimation: setAnimation,\n                a: animation\n              }, carouselRandomNumber, false, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 15\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_4__[\"PrevButton\"], {\n      onClick: scrollPrev,\n      enabled: prevBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_4__[\"NextButton\"], {\n      onClick: scrollNext,\n      enabled: nextBtnEnabled\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"embla__dots\",\n      children: scrollSnaps.map(function (_, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CarouselButtons__WEBPACK_IMPORTED_MODULE_4__[\"DotButton\"], {\n          selected: index === selectedIndex,\n          onClick: function onClick() {\n            return scrollTo(index);\n          }\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EmblaCarousel, \"kpQQn8dnJGGD01E2fWjx0JUxuJU=\", false, function () {\n  return [embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"useEmblaCarousel\"], _lib_useRecursiveTimeout__WEBPACK_IMPORTED_MODULE_5__[\"useRecursiveTimeout\"]];\n});\n\n_c = EmblaCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmblaCarousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"EmblaCarousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC9DYXJvdXNlbC5qcz9kNzYzIl0sIm5hbWVzIjpbIkFVVE9QTEFZX0lOVEVSVkFMIiwiRW1ibGFDYXJvdXNlbCIsInNsaWRlcyIsIm1lZGlhQnlJbmRleCIsInVzZVN0YXRlIiwiYW5pbWF0aW9uIiwic2V0QW5pbWF0aW9uIiwiTWF0aCIsInJhbmRvbSIsImNhcm91c2VsUmFuZG9tTnVtYmVyIiwic2V0Q2Fyb3VzZWxSYW5kb21OdW1iZXIiLCJ1c2VFbWJsYUNhcm91c2VsIiwibG9vcCIsInNraXBTbmFwcyIsInNwZWVkIiwidmlld3BvcnRSZWYiLCJlbWJsYSIsInByZXZCdG5FbmFibGVkIiwic2V0UHJldkJ0bkVuYWJsZWQiLCJuZXh0QnRuRW5hYmxlZCIsInNldE5leHRCdG5FbmFibGVkIiwic2VsZWN0ZWRJbmRleCIsInNldFNlbGVjdGVkSW5kZXgiLCJzY3JvbGxTbmFwcyIsInNldFNjcm9sbFNuYXBzIiwiYXV0b3BsYXkiLCJ1c2VDYWxsYmFjayIsImNhblNjcm9sbE5leHQiLCJzY3JvbGxOZXh0Iiwic2Nyb2xsVG8iLCJ1c2VSZWN1cnNpdmVUaW1lb3V0IiwicGxheSIsInN0b3AiLCJzY3JvbGxQcmV2IiwiaW5kZXgiLCJvblNlbGVjdCIsInNlbGVjdGVkU2Nyb2xsU25hcCIsImNhblNjcm9sbFByZXYiLCJ1c2VFZmZlY3QiLCJzY3JvbGxTbmFwTGlzdCIsIm9uIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIl8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxJQUExQjs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLE1BQTJCLFFBQTNCQSxNQUEyQjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQ2xEO0FBRGtELGtCQUVoQkMsc0RBQVEsQ0FBQyxLQUFELENBRlE7QUFBQSxNQUUzQ0MsU0FGMkM7QUFBQSxNQUVoQ0MsWUFGZ0MsaUJBR2xEOzs7QUFIa0QsbUJBSU1GLHNEQUFRLENBQzlERyxJQUFJLENBQUNDLE1BQUwsRUFEOEQsQ0FKZDtBQUFBLE1BSTNDQyxvQkFKMkM7QUFBQSxNQUlyQkMsdUJBSnFCOztBQUFBLDBCQVFyQkMsNkVBQWdCLENBQUM7QUFDNUNDLFFBQUksRUFBRSxJQURzQztBQUU1Q0MsYUFBUyxFQUFFLEtBRmlDO0FBRzVDQyxTQUFLLEVBQUU7QUFIcUMsR0FBRCxDQVJLO0FBQUE7QUFBQSxNQVEzQ0MsV0FSMkM7QUFBQSxNQVE5QkMsS0FSOEI7O0FBQUEsbUJBYU5aLHNEQUFRLENBQUMsS0FBRCxDQWJGO0FBQUEsTUFhM0NhLGNBYjJDO0FBQUEsTUFhM0JDLGlCQWIyQjs7QUFBQSxtQkFjTmQsc0RBQVEsQ0FBQyxLQUFELENBZEY7QUFBQSxNQWMzQ2UsY0FkMkM7QUFBQSxNQWMzQkMsaUJBZDJCOztBQUFBLG1CQWVSaEIsc0RBQVEsQ0FBQyxDQUFELENBZkE7QUFBQSxNQWUzQ2lCLGFBZjJDO0FBQUEsTUFlNUJDLGdCQWY0Qjs7QUFBQSxtQkFnQlpsQixzREFBUSxDQUFDLEVBQUQsQ0FoQkk7QUFBQSxNQWdCM0NtQixXQWhCMkM7QUFBQSxNQWdCOUJDLGNBaEI4Qjs7QUFrQmxELE1BQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ2pDLFFBQUksQ0FBQ1YsS0FBTCxFQUFZOztBQUNaLFFBQUlBLEtBQUssQ0FBQ1csYUFBTixFQUFKLEVBQTJCO0FBQ3pCWCxXQUFLLENBQUNZLFVBQU4sR0FEeUIsQ0FFekI7O0FBQ0F0QixrQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNELEtBSkQsTUFJTztBQUNMVSxXQUFLLENBQUNhLFFBQU4sQ0FBZSxDQUFmLEVBREssQ0FFTDs7QUFDQXZCLGtCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7QUFDRixHQVgyQixFQVd6QixDQUFDVSxLQUFELENBWHlCLENBQTVCOztBQWxCa0QsNkJBK0IzQmMsb0ZBQW1CLENBQUNMLFFBQUQsRUFBV3pCLGlCQUFYLENBL0JRO0FBQUEsTUErQjFDK0IsSUEvQjBDLHdCQStCMUNBLElBL0IwQztBQUFBLE1BK0JwQ0MsSUEvQm9DLHdCQStCcENBLElBL0JvQzs7QUFpQ2xELE1BQU1KLFVBQVUsR0FBR0YseURBQVcsQ0FBQyxZQUFNO0FBQ25DLFFBQUksQ0FBQ1YsS0FBTCxFQUFZLE9BRHVCLENBRW5DOztBQUNBQSxTQUFLLENBQUNZLFVBQU47QUFDQUksUUFBSTtBQUNMLEdBTDZCLEVBSzNCLENBQUNoQixLQUFELEVBQVFnQixJQUFSLENBTDJCLENBQTlCO0FBT0EsTUFBTUMsVUFBVSxHQUFHUCx5REFBVyxDQUFDLFlBQU07QUFDbkMsUUFBSSxDQUFDVixLQUFMLEVBQVksT0FEdUIsQ0FFbkM7O0FBQ0FBLFNBQUssQ0FBQ2lCLFVBQU47QUFDQUQsUUFBSTtBQUNMLEdBTDZCLEVBSzNCLENBQUNoQixLQUFELEVBQVFnQixJQUFSLENBTDJCLENBQTlCO0FBT0EsTUFBTUgsUUFBUSxHQUFHSCx5REFBVyxDQUFDLFVBQUFRLEtBQUssRUFBSTtBQUNwQztBQUNBbEIsU0FBSyxJQUFJQSxLQUFLLENBQUNhLFFBQU4sQ0FBZUssS0FBZixDQUFULEVBQWdDLENBQUNsQixLQUFELENBQWhDO0FBQ0QsR0FIMkIsQ0FBNUI7QUFLQSxNQUFNbUIsUUFBUSxHQUFHVCx5REFBVyxDQUFDLFlBQU07QUFDakMsUUFBSSxDQUFDVixLQUFMLEVBQVk7QUFDWk0sb0JBQWdCLENBQUNOLEtBQUssQ0FBQ29CLGtCQUFOLEVBQUQsQ0FBaEI7QUFDQWxCLHFCQUFpQixDQUFDRixLQUFLLENBQUNxQixhQUFOLEVBQUQsQ0FBakI7QUFDQWpCLHFCQUFpQixDQUFDSixLQUFLLENBQUNXLGFBQU4sRUFBRCxDQUFqQjtBQUNELEdBTDJCLEVBS3pCLENBQUNYLEtBQUQsRUFBUU0sZ0JBQVIsQ0FMeUIsQ0FBNUI7QUFPQWdCLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ3RCLEtBQUwsRUFBWTtBQUNabUIsWUFBUTtBQUNSekIsMkJBQXVCLENBQUNILElBQUksQ0FBQ0MsTUFBTCxFQUFELENBQXZCO0FBQ0FnQixrQkFBYyxDQUFDUixLQUFLLENBQUN1QixjQUFOLEVBQUQsQ0FBZDtBQUNBdkIsU0FBSyxDQUFDd0IsRUFBTixDQUFTLFFBQVQsRUFBbUJMLFFBQW5CO0FBQ0FuQixTQUFLLENBQUN3QixFQUFOLENBQVMsYUFBVCxFQUF3QlIsSUFBeEI7QUFDRCxHQVBRLEVBT04sQ0FBQ2hCLEtBQUQsRUFBUW1CLFFBQVIsRUFBa0JYLGNBQWxCLEVBQWtDUSxJQUFsQyxDQVBNLENBQVQsQ0EzRGtELENBb0VsRDtBQUNBO0FBQ0E7O0FBRUFNLHlEQUFTLENBQUMsWUFBTTtBQUNkUCxRQUFJO0FBQ0wsR0FGUSxFQUVOLENBQUNBLElBQUQsQ0FGTSxDQUFUO0FBSUFVLFNBQU8sQ0FBQ0MsR0FBUixDQUFZakMsb0JBQVo7QUFFQSxzQkFDRSxxRUFBQyx1REFBRDtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQWlDLFNBQUcsRUFBRU0sV0FBdEM7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQSxrQkFDR2IsTUFBTSxDQUFDeUMsR0FBUCxDQUFXLFVBQUFULEtBQUs7QUFBQSw4QkFDZjtBQUFLLHFCQUFTLEVBQUMsY0FBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxxQkFBZjtBQUFBLHFDQUNFLHFFQUFDLDhDQUFEO0FBRUUsNEJBQVksRUFBRS9CLFlBRmhCO0FBR0UscUJBQUssRUFBRStCLEtBSFQ7QUFJRSw0QkFBWSxFQUFFNUIsWUFKaEI7QUFLRSxpQkFBQyxFQUFFRDtBQUxMLGlCQUNPSSxvQkFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQW1DeUIsS0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZTtBQUFBLFNBQWhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWtCRSxxRUFBQywyREFBRDtBQUFZLGFBQU8sRUFBRUQsVUFBckI7QUFBaUMsYUFBTyxFQUFFaEI7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRixlQW1CRSxxRUFBQywyREFBRDtBQUFZLGFBQU8sRUFBRVcsVUFBckI7QUFBaUMsYUFBTyxFQUFFVDtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJGLGVBb0JFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSxnQkFDR0ksV0FBVyxDQUFDb0IsR0FBWixDQUFnQixVQUFDQyxDQUFELEVBQUlWLEtBQUo7QUFBQSw0QkFDZixxRUFBQywwREFBRDtBQUVFLGtCQUFRLEVBQUVBLEtBQUssS0FBS2IsYUFGdEI7QUFHRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1RLFFBQVEsQ0FBQ0ssS0FBRCxDQUFkO0FBQUE7QUFIWCxXQUNPQSxLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGU7QUFBQSxPQUFoQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQ0QsQ0E5R0Q7O0dBQU1qQyxhO1VBUXlCVSxxRSxFQXVCTm1CLDRFOzs7S0EvQm5CN0IsYTtBQWdIU0EsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsL0Nhcm91c2VsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRW1ibGFDYXJvdXNlbCB9IGZyb20gJ2VtYmxhLWNhcm91c2VsL3JlYWN0JztcbmltcG9ydCB7IERvdEJ1dHRvbiwgUHJldkJ1dHRvbiwgTmV4dEJ1dHRvbiB9IGZyb20gJy4vQ2Fyb3VzZWxCdXR0b25zJztcbmltcG9ydCB7IHVzZVJlY3Vyc2l2ZVRpbWVvdXQgfSBmcm9tICcuLi8uLi9saWIvdXNlUmVjdXJzaXZlVGltZW91dCc7XG5pbXBvcnQgQ2Fyb3VzZWxTdHlsZXMgZnJvbSAnLi9DYXJvdXNlbFN0eWxlcyc7XG5pbXBvcnQgU2xpZGUgZnJvbSAnLi9TbGlkZSc7XG5cbmNvbnN0IEFVVE9QTEFZX0lOVEVSVkFMID0gNDAwMDtcblxuY29uc3QgRW1ibGFDYXJvdXNlbCA9ICh7IHNsaWRlcywgbWVkaWFCeUluZGV4IH0pID0+IHtcbiAgLy8gYW5pbWF0aW9uIHN0YXRlXG4gIGNvbnN0IFthbmltYXRpb24sIHNldEFuaW1hdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGtleSBzdGF0ZSBmb3Igc2xpZGVzXG4gIGNvbnN0IFtjYXJvdXNlbFJhbmRvbU51bWJlciwgc2V0Q2Fyb3VzZWxSYW5kb21OdW1iZXJdID0gdXNlU3RhdGUoXG4gICAgTWF0aC5yYW5kb20oKVxuICApO1xuXG4gIGNvbnN0IFt2aWV3cG9ydFJlZiwgZW1ibGFdID0gdXNlRW1ibGFDYXJvdXNlbCh7XG4gICAgbG9vcDogdHJ1ZSxcbiAgICBza2lwU25hcHM6IGZhbHNlLFxuICAgIHNwZWVkOiA4LFxuICB9KTtcbiAgY29uc3QgW3ByZXZCdG5FbmFibGVkLCBzZXRQcmV2QnRuRW5hYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtuZXh0QnRuRW5hYmxlZCwgc2V0TmV4dEJ0bkVuYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Njcm9sbFNuYXBzLCBzZXRTY3JvbGxTbmFwc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgYXV0b3BsYXkgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFlbWJsYSkgcmV0dXJuO1xuICAgIGlmIChlbWJsYS5jYW5TY3JvbGxOZXh0KCkpIHtcbiAgICAgIGVtYmxhLnNjcm9sbE5leHQoKTtcbiAgICAgIC8vIHNldENhcm91c2VsUmFuZG9tTnVtYmVyKE1hdGgucmFuZG9tKCkpO1xuICAgICAgc2V0QW5pbWF0aW9uKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWJsYS5zY3JvbGxUbygwKTtcbiAgICAgIC8vIHNldENhcm91c2VsUmFuZG9tTnVtYmVyKE1hdGgucmFuZG9tKCkpO1xuICAgICAgc2V0QW5pbWF0aW9uKHRydWUpO1xuICAgIH1cbiAgfSwgW2VtYmxhXSk7XG5cbiAgY29uc3QgeyBwbGF5LCBzdG9wIH0gPSB1c2VSZWN1cnNpdmVUaW1lb3V0KGF1dG9wbGF5LCBBVVRPUExBWV9JTlRFUlZBTCk7XG5cbiAgY29uc3Qgc2Nyb2xsTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWVtYmxhKSByZXR1cm47XG4gICAgLy8gc2V0Q2Fyb3VzZWxSYW5kb21OdW1iZXIoTWF0aC5yYW5kb20oKSk7XG4gICAgZW1ibGEuc2Nyb2xsTmV4dCgpO1xuICAgIHN0b3AoKTtcbiAgfSwgW2VtYmxhLCBzdG9wXSk7XG5cbiAgY29uc3Qgc2Nyb2xsUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWVtYmxhKSByZXR1cm47XG4gICAgLy8gc2V0Q2Fyb3VzZWxSYW5kb21OdW1iZXIoTWF0aC5yYW5kb20oKSk7XG4gICAgZW1ibGEuc2Nyb2xsUHJldigpO1xuICAgIHN0b3AoKTtcbiAgfSwgW2VtYmxhLCBzdG9wXSk7XG5cbiAgY29uc3Qgc2Nyb2xsVG8gPSB1c2VDYWxsYmFjayhpbmRleCA9PiB7XG4gICAgLy8gc2V0Q2Fyb3VzZWxSYW5kb21OdW1iZXIoTWF0aC5yYW5kb20oKSk7XG4gICAgZW1ibGEgJiYgZW1ibGEuc2Nyb2xsVG8oaW5kZXgpLCBbZW1ibGFdO1xuICB9KTtcblxuICBjb25zdCBvblNlbGVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWVtYmxhKSByZXR1cm47XG4gICAgc2V0U2VsZWN0ZWRJbmRleChlbWJsYS5zZWxlY3RlZFNjcm9sbFNuYXAoKSk7XG4gICAgc2V0UHJldkJ0bkVuYWJsZWQoZW1ibGEuY2FuU2Nyb2xsUHJldigpKTtcbiAgICBzZXROZXh0QnRuRW5hYmxlZChlbWJsYS5jYW5TY3JvbGxOZXh0KCkpO1xuICB9LCBbZW1ibGEsIHNldFNlbGVjdGVkSW5kZXhdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZW1ibGEpIHJldHVybjtcbiAgICBvblNlbGVjdCgpO1xuICAgIHNldENhcm91c2VsUmFuZG9tTnVtYmVyKE1hdGgucmFuZG9tKCkpO1xuICAgIHNldFNjcm9sbFNuYXBzKGVtYmxhLnNjcm9sbFNuYXBMaXN0KCkpO1xuICAgIGVtYmxhLm9uKCdzZWxlY3QnLCBvblNlbGVjdCk7XG4gICAgZW1ibGEub24oJ3BvaW50ZXJEb3duJywgc3RvcCk7XG4gIH0sIFtlbWJsYSwgb25TZWxlY3QsIHNldFNjcm9sbFNuYXBzLCBzdG9wLF0pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgc2V0Q2Fyb3VzZWxSYW5kb21OdW1iZXIoTWF0aC5yYW5kb20oKSk7XG4gIC8vIH0sIFthbmltYXRpb25dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHBsYXkoKTtcbiAgfSwgW3BsYXldKTtcblxuICBjb25zb2xlLmxvZyhjYXJvdXNlbFJhbmRvbU51bWJlcik7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2Fyb3VzZWxTdHlsZXM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1ibGFfX3ZpZXdwb3J0JyByZWY9e3ZpZXdwb3J0UmVmfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VtYmxhX19jb250YWluZXInPlxuICAgICAgICAgIHtzbGlkZXMubWFwKGluZGV4ID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbWJsYV9fc2xpZGUnIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1ibGFfX3NsaWRlX19pbm5lcic+XG4gICAgICAgICAgICAgICAgPFNsaWRlXG4gICAgICAgICAgICAgICAgICBrZXk9e2Nhcm91c2VsUmFuZG9tTnVtYmVyfVxuICAgICAgICAgICAgICAgICAgbWVkaWFCeUluZGV4PXttZWRpYUJ5SW5kZXh9XG4gICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBzZXRBbmltYXRpb249e3NldEFuaW1hdGlvbn1cbiAgICAgICAgICAgICAgICAgIGE9e2FuaW1hdGlvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFByZXZCdXR0b24gb25DbGljaz17c2Nyb2xsUHJldn0gZW5hYmxlZD17cHJldkJ0bkVuYWJsZWR9IC8+XG4gICAgICA8TmV4dEJ1dHRvbiBvbkNsaWNrPXtzY3JvbGxOZXh0fSBlbmFibGVkPXtuZXh0QnRuRW5hYmxlZH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbWJsYV9fZG90cyc+XG4gICAgICAgIHtzY3JvbGxTbmFwcy5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPERvdEJ1dHRvblxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHNlbGVjdGVkPXtpbmRleCA9PT0gc2VsZWN0ZWRJbmRleH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvKGluZGV4KX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2Fyb3VzZWxTdHlsZXM+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbWJsYUNhcm91c2VsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Carousel/Carousel.js\n");

/***/ })

})