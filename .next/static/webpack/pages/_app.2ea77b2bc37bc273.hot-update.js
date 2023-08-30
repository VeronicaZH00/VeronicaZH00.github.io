"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Logo.js":
/*!********************************!*\
  !*** ./src/components/Logo.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\n\nconst MotionLink = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion)((next_link__WEBPACK_IMPORTED_MODULE_1___default()));\n_c = MotionLink;\nconst Logo = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center mt-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionLink, {\n            href: \"/\",\n            className: \"w-16 h-16 bg-dark text-light flex items-center justify-center   rounded-full text-2x1 font-boldborder border-solid border-transparent dark:border-light   \",\n            whileHover: {\n                backgroundColor: [\n                    \"#121212\",\n                    \"rgba(131,58,180,1)\",\n                    \"rgba(253,29,29,1)\",\n                    \"rgba(252,176,69,1)\",\n                    \"rgba(131,58,180,1)\",\n                    \"#121212\"\n                ],\n                transition: {\n                    duration: 1,\n                    repeat: Infinity\n                }\n            },\n            children: \"VC\"\n        }, void 0, false, {\n            fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/Logo.js\",\n            lineNumber: 10,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/Logo.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Logo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logo);\nvar _c, _c1;\n$RefreshReg$(_c, \"MotionLink\");\n$RefreshReg$(_c1, \"Logo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2dvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QjtBQUNIO0FBQ1k7QUFFckMsTUFBTUcsYUFBYUQscURBQU1BLENBQUNGLGtEQUFJQTtLQUF4Qkc7QUFFTixNQUFNQyxPQUFPLElBQU07SUFDakIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNIO1lBQVdJLE1BQUs7WUFDakJELFdBQVU7WUFHVkUsWUFBWTtnQkFDRkMsaUJBQWlCO29CQUFDO29CQUFXO29CQUFxQjtvQkFBb0I7b0JBQXFCO29CQUFzQjtpQkFBVTtnQkFDM0hDLFlBQVc7b0JBQUNDLFVBQVM7b0JBQUdDLFFBQVFDO2dCQUFRO1lBQ2xEO3NCQUNDOzs7Ozs7Ozs7OztBQUdUO01BZE1UO0FBZ0JOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xvZ28uanM/YmQyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHttb3Rpb259IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5jb25zdCBNb3Rpb25MaW5rID0gbW90aW9uKExpbmspO1xyXG5cclxuY29uc3QgTG9nbyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTInPlxyXG4gICAgICAgIDxNb3Rpb25MaW5rIGhyZWY9XCIvXCJcclxuICAgICAgICBjbGFzc05hbWU9J3ctMTYgaC0xNiBiZy1kYXJrIHRleHQtbGlnaHQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcclxuICAgICAgICByb3VuZGVkLWZ1bGwgdGV4dC0yeDEgZm9udC1ib2xkYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItdHJhbnNwYXJlbnQgZGFyazpib3JkZXItbGlnaHRcclxuICAgICAgICAnXHJcbiAgICAgICAgd2hpbGVIb3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcIiMxMjEyMTJcIiwgXCJyZ2JhKDEzMSw1OCwxODAsMSlcIixcInJnYmEoMjUzLDI5LDI5LDEpXCIsXCJyZ2JhKDI1MiwxNzYsNjksMSlcIixcInJnYmEoMTMxLDU4LDE4MCwxKVwiLCBcIiMxMjEyMTJcIl0sXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246e2R1cmF0aW9uOjEsIHJlcGVhdDogSW5maW5pdHl9XHJcbiAgICAgICAgfX1cclxuICAgICAgICA+VkM8L01vdGlvbkxpbms+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ28iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwibW90aW9uIiwiTW90aW9uTGluayIsIkxvZ28iLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwid2hpbGVIb3ZlciIsImJhY2tncm91bmRDb2xvciIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInJlcGVhdCIsIkluZmluaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Logo.js\n"));

/***/ })

});