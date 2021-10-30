module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/products/[products]/[collection].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/items/items-page/SubCategoryCollection.js":
/*!**************************************************************!*\
  !*** ./components/items/items-page/SubCategoryCollection.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SubCategoryCollection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SubCategoryCollectionStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubCategoryCollectionStyles */ \"./components/items/items-page/SubCategoryCollectionStyles.js\");\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/components/items/items-page/SubCategoryCollection.js\";\n\nfunction SubCategoryCollection() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SubCategoryCollectionStyles__WEBPACK_IMPORTED_MODULE_1__[\"SubCategoryCollectionStyles\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Collection\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 3\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW1zLXBhZ2UvU3ViQ2F0ZWdvcnlDb2xsZWN0aW9uLmpzP2M0YmYiXSwibmFtZXMiOlsiU3ViQ2F0ZWdvcnlDb2xsZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxxQkFBVCxHQUFpQztBQUNoRCxzQkFDRSxxRUFBQyx3RkFBRDtBQUFBLDJCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUMiLCJmaWxlIjoiLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW1zLXBhZ2UvU3ViQ2F0ZWdvcnlDb2xsZWN0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ViQ2F0ZWdvcnlDb2xsZWN0aW9uU3R5bGVzIH0gZnJvbSAnLi9TdWJDYXRlZ29yeUNvbGxlY3Rpb25TdHlsZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJDYXRlZ29yeUNvbGxlY3Rpb24oKSB7XG5yZXR1cm4gKFxuICA8U3ViQ2F0ZWdvcnlDb2xsZWN0aW9uU3R5bGVzPlxuICAgIDxoMj5Db2xsZWN0aW9uPC9oMj5cbiAgPC9TdWJDYXRlZ29yeUNvbGxlY3Rpb25TdHlsZXM+XG4pXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/items/items-page/SubCategoryCollection.js\n");

/***/ }),

/***/ "./components/items/items-page/SubCategoryCollectionStyles.js":
/*!********************************************************************!*\
  !*** ./components/items/items-page/SubCategoryCollectionStyles.js ***!
  \********************************************************************/
/*! exports provided: SubCategoryCollectionStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SubCategoryCollectionStyles\", function() { return SubCategoryCollectionStyles; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SubCategoryCollectionStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"SubCategoryCollectionStyles\",\n  componentId: \"sc-5ezau3-0\"\n})([\"\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW1zLXBhZ2UvU3ViQ2F0ZWdvcnlDb2xsZWN0aW9uU3R5bGVzLmpzP2UxNTMiXSwibmFtZXMiOlsiU3ViQ2F0ZWdvcnlDb2xsZWN0aW9uU3R5bGVzIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsMkJBQTJCLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBakMiLCJmaWxlIjoiLi9jb21wb25lbnRzL2l0ZW1zL2l0ZW1zLXBhZ2UvU3ViQ2F0ZWdvcnlDb2xsZWN0aW9uU3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFN1YkNhdGVnb3J5Q29sbGVjdGlvblN0eWxlcyA9IHN0eWxlZC5kaXZgXG5cbmA7XG5leHBvcnQge1N1YkNhdGVnb3J5Q29sbGVjdGlvblN0eWxlc307Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/items/items-page/SubCategoryCollectionStyles.js\n");

/***/ }),

/***/ "./lib/formatUrl.js":
/*!**************************!*\
  !*** ./lib/formatUrl.js ***!
  \**************************/
/*! exports provided: formatUrlToDbName, formatUrlToRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatUrlToDbName\", function() { return formatUrlToDbName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatUrlToRoute\", function() { return formatUrlToRoute; });\nfunction formatUrlToDbName(str) {\n  return str.toLowerCase().split('_').join(' ');\n}\n\nfunction formatUrlToRoute(str) {\n  str = str.toLowerCase().split('%20').join('_');\n  return str.split(' ').join('_');\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZm9ybWF0VXJsLmpzP2RhMmEiXSwibmFtZXMiOlsiZm9ybWF0VXJsVG9EYk5hbWUiLCJzdHIiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0Iiwiam9pbiIsImZvcm1hdFVybFRvUm91dGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVNBLGlCQUFULENBQTJCQyxHQUEzQixFQUFnQztBQUM5QixTQUFPQSxHQUFHLENBQUNDLFdBQUosR0FBa0JDLEtBQWxCLENBQXdCLEdBQXhCLEVBQTZCQyxJQUE3QixDQUFrQyxHQUFsQyxDQUFQO0FBQ0Q7O0FBRUQsU0FBU0MsZ0JBQVQsQ0FBMEJKLEdBQTFCLEVBQStCO0FBQzdCQSxLQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsV0FBSixHQUFrQkMsS0FBbEIsQ0FBd0IsS0FBeEIsRUFBK0JDLElBQS9CLENBQW9DLEdBQXBDLENBQU47QUFDQSxTQUFPSCxHQUFHLENBQUNFLEtBQUosQ0FBVSxHQUFWLEVBQWVDLElBQWYsQ0FBb0IsR0FBcEIsQ0FBUDtBQUNEIiwiZmlsZSI6Ii4vbGliL2Zvcm1hdFVybC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGZvcm1hdFVybFRvRGJOYW1lKHN0cikge1xuICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkuc3BsaXQoJ18nKS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVybFRvUm91dGUoc3RyKSB7XG4gIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpLnNwbGl0KCclMjAnKS5qb2luKCdfJyk7XG4gIHJldHVybiBzdHIuc3BsaXQoJyAnKS5qb2luKCdfJyk7XG59XG5cbmV4cG9ydCB7IGZvcm1hdFVybFRvRGJOYW1lLCBmb3JtYXRVcmxUb1JvdXRlIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/formatUrl.js\n");

/***/ }),

/***/ "./pages/products/[products]/[collection].js":
/*!***************************************************!*\
  !*** ./pages/products/[products]/[collection].js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductsPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_items_items_page_SubCategoryCollection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/items/items-page/SubCategoryCollection */ \"./components/items/items-page/SubCategoryCollection.js\");\n/* harmony import */ var _lib_formatUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/formatUrl */ \"./lib/formatUrl.js\");\n\n\nvar _jsxFileName = \"/Volumes/Files/Work/A2Z/frontend/pages/products/[products]/[collection].js\";\n\n\n\n\nconst ITEM = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\n  query ITEM($item: String!) {\n    category: productCategories(where: { product_category: $item }) {\n      category_title: product_category\n      id\n      single_item: single_products {\n        item_title\n        price\n        description\n        image {\n          url\n        }\n      }\n    }\n  }\n`;\nfunction ProductsPage({\n  query\n}) {\n  const {\n    data,\n    error,\n    loading\n  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(ITEM, {\n    variables: {\n      item: Object(_lib_formatUrl__WEBPACK_IMPORTED_MODULE_4__[\"formatUrlToDbName\"])(query.collection)\n    }\n  });\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: [\"Error: \", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 21\n  }, this);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_items_items_page_SubCategoryCollection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      collection: query.collection\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0cy9bcHJvZHVjdHNdL1tjb2xsZWN0aW9uXS5qcz9iMDAyIl0sIm5hbWVzIjpbIklURU0iLCJncWwiLCJQcm9kdWN0c1BhZ2UiLCJxdWVyeSIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsIml0ZW0iLCJmb3JtYXRVcmxUb0RiTmFtZSIsImNvbGxlY3Rpb24iLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxJQUFJLEdBQUdDLGtEQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWZBO0FBaUJlLFNBQVNDLFlBQVQsQ0FBc0I7QUFBRUM7QUFBRixDQUF0QixFQUFpQztBQUM5QyxRQUFNO0FBQUVDLFFBQUY7QUFBUUMsU0FBUjtBQUFlQztBQUFmLE1BQTJCQywrREFBUSxDQUFDUCxJQUFELEVBQU87QUFDOUNRLGFBQVMsRUFBRTtBQUNUQyxVQUFJLEVBQUVDLHdFQUFpQixDQUFDUCxLQUFLLENBQUNRLFVBQVA7QUFEZDtBQURtQyxHQUFQLENBQXpDO0FBTUEsTUFBSUwsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDYixNQUFJRCxLQUFKLEVBQVcsb0JBQU87QUFBQSwwQkFBV0EsS0FBSyxDQUFDTyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUVYLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsMEZBQUQ7QUFBdUIsZ0JBQVUsRUFBRVQsS0FBSyxDQUFDUTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFLRCIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3RzL1twcm9kdWN0c10vW2NvbGxlY3Rpb25dLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBTdWJDYXRlZ29yeUNvbGxlY3Rpb24gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9pdGVtcy9pdGVtcy1wYWdlL1N1YkNhdGVnb3J5Q29sbGVjdGlvbic7XG5pbXBvcnQgeyBmb3JtYXRVcmxUb0RiTmFtZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9mb3JtYXRVcmwnO1xuXG5jb25zdCBJVEVNID0gZ3FsYFxuICBxdWVyeSBJVEVNKCRpdGVtOiBTdHJpbmchKSB7XG4gICAgY2F0ZWdvcnk6IHByb2R1Y3RDYXRlZ29yaWVzKHdoZXJlOiB7IHByb2R1Y3RfY2F0ZWdvcnk6ICRpdGVtIH0pIHtcbiAgICAgIGNhdGVnb3J5X3RpdGxlOiBwcm9kdWN0X2NhdGVnb3J5XG4gICAgICBpZFxuICAgICAgc2luZ2xlX2l0ZW06IHNpbmdsZV9wcm9kdWN0cyB7XG4gICAgICAgIGl0ZW1fdGl0bGVcbiAgICAgICAgcHJpY2VcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0c1BhZ2UoeyBxdWVyeSB9KSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KElURU0sIHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGl0ZW06IGZvcm1hdFVybFRvRGJOYW1lKHF1ZXJ5LmNvbGxlY3Rpb24pLFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTdWJDYXRlZ29yeUNvbGxlY3Rpb24gY29sbGVjdGlvbj17cXVlcnkuY29sbGVjdGlvbn0gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products/[products]/[collection].js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });