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

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href , title , className =\"\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"\\n                    h-[1px] inline-black bg-dark\\n                    absolute left-0 -bottom-0.5\\n                    group-hover:w-full transition-[width] ease duration-300\\n                    \".concat(router.asPath === href ? \"w-full\" : \"w-0\", \"\\n                    \"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/NavBar.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/NavBar.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CustomLink;\nconst NavBar = ()=>{\n    _s1();\n    const [mode, setMode] = useThemeSwicher();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-32 py-8 font-medium flex items-center justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/\",\n                        title: \"Home\",\n                        className: \"mr-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/NavBar.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/about\",\n                        title: \"About\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/NavBar.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/projects\",\n                        title: \"Projects\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/NavBar.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/articles\",\n                        title: \"Articles\",\n                        className: \"ml-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/NavBar.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/NavBar.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex items-center justify-center flex-wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                        href: \"https://twitter.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mr-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.TwitterIcon, {}, void 0, false, {\n                            fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/NavBar.js\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/NavBar.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                        href: \"https://github.com/VeronicaZH00\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.GithubIcon, {}, void 0, false, {\n                            fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/NavBar.js\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/NavBar.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                        href: \"https://www.linkedin.com/in/veronica-chang-a3a990278/\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 ml-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.LinkedInIcon, {}, void 0, false, {\n                            fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/NavBar.js\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/NavBar.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setMode(mode === \"light\" ? \"dark\" : \"light\"),\n                        children: mode === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.SunIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/NavBar.js\",\n                            lineNumber: 66,\n                            columnNumber: 17\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.MoonIcon, {\n                            className: \"full-dark\"\n                        }, void 0, false, {\n                            fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/NavBar.js\",\n                            lineNumber: 67,\n                            columnNumber: 19\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/NavBar.js\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/NavBar.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/NavBar.js\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/NavBar.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/components/NavBar.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(NavBar, \"n9hms60Wq9KdapK0M7zSjAz6CjU=\", true);\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDSDtBQUNBO0FBQ2M7QUFDNEM7QUFDNUM7QUFFdkMsTUFBTVUsYUFBYSxTQUFpQztRQUFoQyxFQUFDQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsV0FBVSxHQUFFLEVBQUM7O0lBQzNDLE1BQU1DLFNBQVNYLHNEQUFTQTtJQUV4QixxQkFDSSw4REFBQ0gsa0RBQUlBO1FBQUNXLE1BQU1BO1FBQU1FLFdBQVcsR0FBYSxPQUFWQSxXQUFVOztZQUNyQ0Q7MEJBRUQsOERBQUNHO2dCQUNHRixXQUFXLHlNQUlxQyxPQUExQ0MsT0FBT0UsTUFBTSxLQUFLTCxPQUFPLFdBQVcsS0FBSyxFQUFDOzBCQUVuRDs7Ozs7Ozs7Ozs7O0FBS2I7R0FuQk1EOztRQUNhUCxrREFBU0E7OztLQUR0Qk87QUFxQk4sTUFBTU8sU0FBUyxJQUFNOztJQUNqQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0M7SUFFeEIscUJBQ0ksOERBQUNDO1FBQU9SLFdBQVk7OzBCQUNoQiw4REFBQ1M7O2tDQUNHLDhEQUFDWjt3QkFBV0MsTUFBSzt3QkFBSUMsT0FBTTt3QkFBT0MsV0FBVTs7Ozs7O2tDQUM1Qyw4REFBQ0g7d0JBQVdDLE1BQUs7d0JBQVNDLE9BQU07d0JBQVFDLFdBQVU7Ozs7OztrQ0FDbEQsOERBQUNIO3dCQUFXQyxNQUFLO3dCQUFZQyxPQUFNO3dCQUFXQyxXQUFVOzs7Ozs7a0NBQ3hELDhEQUFDSDt3QkFBV0MsTUFBSzt3QkFBWUMsT0FBTTt3QkFBV0MsV0FBVTs7Ozs7Ozs7Ozs7OzBCQUk1RCw4REFBQ1M7Z0JBQUlULFdBQVU7O2tDQUNYLDhEQUFDSixtREFBUTt3QkFBQ0UsTUFBSzt3QkFBc0JhLFFBQVE7d0JBQ3pDQyxZQUFZOzRCQUFFQyxHQUFHLENBQUM7d0JBQUM7d0JBQ25CQyxVQUFVOzRCQUFFQyxPQUFPO3dCQUFJO3dCQUN2QmYsV0FBVTtrQ0FFViw0RUFBQ1QsK0NBQVdBOzs7Ozs7Ozs7O2tDQUVoQiw4REFBQ0ssbURBQVE7d0JBQUNFLE1BQUs7d0JBQWtDYSxRQUFRO3dCQUNyREMsWUFBWTs0QkFBRUMsR0FBRyxDQUFDO3dCQUFFO3dCQUNwQkMsVUFBVTs0QkFBRUMsT0FBTzt3QkFBSTt3QkFDdkJmLFdBQVU7a0NBRVYsNEVBQUNSLDhDQUFVQTs7Ozs7Ozs7OztrQ0FFZiw4REFBQ0ksbURBQVE7d0JBQUNFLE1BQUs7d0JBQXdEYSxRQUFRO3dCQUMzRUMsWUFBWTs0QkFBRUMsR0FBRyxDQUFDO3dCQUFFO3dCQUNwQkMsVUFBVTs0QkFBRUMsT0FBTzt3QkFBSTt3QkFDdkJmLFdBQVU7a0NBRVYsNEVBQUNQLGdEQUFZQTs7Ozs7Ozs7OztrQ0FFakIsOERBQUN1Qjt3QkFBT0MsU0FBUyxJQUFNWCxRQUFRRCxTQUFTLFVBQVUsU0FBUyxPQUFPO2tDQUM5REEsU0FBUyx1QkFDYiw4REFBQ1gsMkNBQU9BOzRCQUFDTSxXQUFXOzs7OztzREFDbEIsOERBQUNMLDRDQUFRQTs0QkFBQ0ssV0FBVzs7Ozs7cUNBQWU7Ozs7Ozs7Ozs7OzswQkFHMUMsOERBQUNrQjtnQkFBSWxCLFdBQVU7MEJBQ1gsNEVBQUNYLDZDQUFJQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQjtJQTlDTWU7TUFBQUE7QUFnRE4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzPzZiZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb2dvIGZyb20gJy4vTG9nbydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IFR3aXR0ZXJJY29uLCBHaXRodWJJY29uLCBMaW5rZWRJbkljb24sIFN1bkljb24sIE1vb25JY29uIH0gZnJvbSAnLi9JY29ucyc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuY29uc3QgQ3VzdG9tTGluayA9ICh7aHJlZiwgdGl0bGUsIGNsYXNzTmFtZT1cIlwifSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8TGluayBocmVmPXtocmVmfSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gcmVsYXRpdmUgZ3JvdXBgfT5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG5cclxuICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICBoLVsxcHhdIGlubGluZS1ibGFjayBiZy1kYXJrXHJcbiAgICAgICAgICAgICAgICAgICAgYWJzb2x1dGUgbGVmdC0wIC1ib3R0b20tMC41XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAtaG92ZXI6dy1mdWxsIHRyYW5zaXRpb24tW3dpZHRoXSBlYXNlIGR1cmF0aW9uLTMwMFxyXG4gICAgICAgICAgICAgICAgICAgICR7cm91dGVyLmFzUGF0aCA9PT0gaHJlZiA/ICd3LWZ1bGwnIDogJ3ctMCd9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlVGhlbWVTd2ljaGVyKCk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWUgPSAndy1mdWxsIHB4LTMyIHB5LTggZm9udC1tZWRpdW0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvXCIgdGl0bGU9XCJIb21lXCIgY2xhc3NOYW1lPSdtci00Jy8+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL2Fib3V0XCIgdGl0bGU9XCJBYm91dFwiIGNsYXNzTmFtZT0nbXgtNCcgLz5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvcHJvamVjdHNcIiB0aXRsZT1cIlByb2plY3RzXCIgY2xhc3NOYW1lPSdteC00JyAvPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9hcnRpY2xlc1wiIHRpdGxlPVwiQXJ0aWNsZXNcIiBjbGFzc05hbWU9J21sLTQnIC8+XHJcblxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uYSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbVwiIHRhcmdldD17XCJfYmxhbmtcIn1cclxuICAgICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yfX1cclxuICAgICAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IG1yLTNcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUd2l0dGVySWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uYT5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uYSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1Zlcm9uaWNhWkgwMFwiIHRhcmdldD17XCJfYmxhbmtcIn1cclxuICAgICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBteC0zXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8R2l0aHViSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uYT5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uYSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3Zlcm9uaWNhLWNoYW5nLWEzYTk5MDI3OC9cIiB0YXJnZXQ9e1wiX2JsYW5rXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAtMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgbWwtM1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtlZEluSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uYT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0TW9kZShtb2RlID09PSBcImxpZ2h0XCIgPyBcImRhcmtcIiA6IFwibGlnaHRcIil9PntcclxuICAgICAgICAgICAgICAgICAgICBtb2RlID09PSBcImRhcmtcIiA/XHJcbiAgICAgICAgICAgICAgICA8U3VuSWNvbiBjbGFzc05hbWU9e1wiZmlsbC1kYXJrXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA6IDxNb29uSWNvbiBjbGFzc05hbWU9e1wiZnVsbC1kYXJrXCJ9IC8+fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSBsZWZ0LVs1MCVdIHRvcC0yIHRyYW5zbGF0ZS14LVstNTAlXSc+XHJcbiAgICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIkxvZ28iLCJ1c2VSb3V0ZXIiLCJUd2l0dGVySWNvbiIsIkdpdGh1Ykljb24iLCJMaW5rZWRJbkljb24iLCJTdW5JY29uIiwiTW9vbkljb24iLCJtb3Rpb24iLCJDdXN0b21MaW5rIiwiaHJlZiIsInRpdGxlIiwiY2xhc3NOYW1lIiwicm91dGVyIiwic3BhbiIsImFzUGF0aCIsIk5hdkJhciIsIm1vZGUiLCJzZXRNb2RlIiwidXNlVGhlbWVTd2ljaGVyIiwiaGVhZGVyIiwibmF2IiwiYSIsInRhcmdldCIsIndoaWxlSG92ZXIiLCJ5Iiwid2hpbGVUYXAiLCJzY2FsZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});