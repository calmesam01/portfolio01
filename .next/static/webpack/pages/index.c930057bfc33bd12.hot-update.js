"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ContainerBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContainerBlock */ \"./components/ContainerBlock.js\");\n/* harmony import */ var _components_FavouriteProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FavouriteProjects */ \"./components/FavouriteProjects.js\");\n/* harmony import */ var _components_LatestCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LatestCode */ \"./components/LatestCode.js\");\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Hero */ \"./components/Hero.js\");\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { repositories  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContainerBlock__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"Sanyam Sareen - Developer, Writer, Creator\",\n        description: \"This is a template built specifically for my blog - Creating a developer portfolio that gets you a job.\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sanyamsareen/Documents/github/portfolio01/pages/index.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FavouriteProjects__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sanyamsareen/Documents/github/portfolio01/pages/index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LatestCode__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                repositories: repositories\n            }, void 0, false, {\n                fileName: \"/Users/sanyamsareen/Documents/github/portfolio01/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sanyamsareen/Documents/github/portfolio01/pages/index.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDa0I7QUFDVztBQUNNO0FBQ2Q7QUFDWjs7QUFJdkIsU0FBU00sS0FBSyxLQUFnQixFQUFFO1FBQWxCLEVBQUVDLGFBQVksRUFBRSxHQUFoQjtJQUMzQixxQkFDRSw4REFBQ0wsa0VBQWNBO1FBQ2JNLE9BQU07UUFDTkMsYUFBWTs7MEJBRVosOERBQUNKLHdEQUFJQTs7Ozs7MEJBQ0wsOERBQUNGLHFFQUFpQkE7Ozs7OzBCQUNsQiw4REFBQ0MsOERBQVVBO2dCQUFDRyxjQUFjQTs7Ozs7Ozs7Ozs7O0FBR2hDLENBQUM7S0FYdUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IENvbnRhaW5lckJsb2NrIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lckJsb2NrXCI7XG5pbXBvcnQgRmF2b3VyaXRlUHJvamVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmF2b3VyaXRlUHJvamVjdHNcIjtcbmltcG9ydCBMYXRlc3RDb2RlIGZyb20gXCIuLi9jb21wb25lbnRzL0xhdGVzdENvZGVcIjtcbmltcG9ydCBIZXJvIGZyb20gXCIuLi9jb21wb25lbnRzL0hlcm9cIjtcbmltcG9ydCBnZXRMYXRlc3RSZXBvcyBmcm9tIFwiQGxpYi9nZXRMYXRlc3RSZXBvc1wiO1xuaW1wb3J0IHVzZXJEYXRhIGZyb20gXCJAY29uc3RhbnRzL2RhdGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHJlcG9zaXRvcmllcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lckJsb2NrXG4gICAgICB0aXRsZT1cIlNhbnlhbSBTYXJlZW4gLSBEZXZlbG9wZXIsIFdyaXRlciwgQ3JlYXRvclwiXG4gICAgICBkZXNjcmlwdGlvbj1cIlRoaXMgaXMgYSB0ZW1wbGF0ZSBidWlsdCBzcGVjaWZpY2FsbHkgZm9yIG15IGJsb2cgLSBDcmVhdGluZyBhIGRldmVsb3BlciBwb3J0Zm9saW8gdGhhdCBnZXRzIHlvdSBhIGpvYi5cIlxuICAgID5cbiAgICAgIDxIZXJvIC8+XG4gICAgICA8RmF2b3VyaXRlUHJvamVjdHMgLz5cbiAgICAgIDxMYXRlc3RDb2RlIHJlcG9zaXRvcmllcz17cmVwb3NpdG9yaWVzfSAvPlxuICAgIDwvQ29udGFpbmVyQmxvY2s+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LkdJVEhVQl9BVVRIX1RPS0VOKTtcbiAgbGV0IHRva2VuID0gcHJvY2Vzcy5lbnYuR0lUSFVCX0FVVEhfVE9LRU47XG5cbiAgY29uc3QgcmVwb3NpdG9yaWVzID0gYXdhaXQgZ2V0TGF0ZXN0UmVwb3ModXNlckRhdGEsIHRva2VuKTtcbiAgLy8gY29uc29sZS5sb2coXCJSRVBPU0lUT1JJRVNcIiwgcmVwb3NpdG9yaWVzKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICByZXBvc2l0b3JpZXMsXG4gICAgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIkNvbnRhaW5lckJsb2NrIiwiRmF2b3VyaXRlUHJvamVjdHMiLCJMYXRlc3RDb2RlIiwiSGVybyIsIkhvbWUiLCJyZXBvc2l0b3JpZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});