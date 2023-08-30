"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_images_profile_veronica_pic_2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/images/profile/veronica-pic-2.jpg */ \"./public/images/profile/veronica-pic-2.jpg\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst AnimatedNumbers = (param)=>{\n    let { value  } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    const motionValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useMotionValue)(0);\n    const springValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring)(motionValue, {\n        duration: 3000\n    });\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useInView)(ref, {\n        once: true\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (isInView) {\n            motionValue.set(value);\n        }\n    }, [\n        isInView,\n        value,\n        motionValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        springValue.on(\"change\", (latest)=>{\n            if (ref.current && latest.toFixed(0) <= value) {\n                ref.current.textContent = latest.toFixed(0);\n            }\n        });\n    }, [\n        springValue,\n        value\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        ref: ref\n    }, void 0, false, {\n        fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n        lineNumber: 30,\n        columnNumber: 12\n    }, undefined);\n};\n_s(AnimatedNumbers, \"b8aj1/ahv2yZpM7Evi2PhhKh64k=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useInView\n    ];\n});\n_c = AnimatedNumbers;\nconst about = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Veronica Chang | About Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"ant description\"\n                    }, void 0, false, {\n                        fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex col items-center justify-center dark:text-light\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"pt-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Crafting Careers, Living Dreams\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid w-full grid-cols-8 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 flex flex-col items-start justify-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"my-4 font-midium\",\n                                            children: \"Paragraph 1\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"my-4 font-midium\",\n                                            children: \"Paragraph 2\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"my-4 font-midium\",\n                                            children: \"Paragraph 3\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            src: _public_images_profile_veronica_pic_2_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                            alt: \"Veronica\",\n                                            className: \"w-full h-auto rounded-2xl\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-2 flex flex-col items-end justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 0\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        \"0\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl font-medium capitalize text-dark/75 dark:text-light/75\",\n                                                    children: \"Projects Completed\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 0\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                                                            lineNumber: 68,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        \"0\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl font-medium capitalize text-dark/75 dark:text-light/75\",\n                                                    children: \"Years of Experience\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/about.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\nvar _c;\n$RefreshReg$(_c, \"AnimatedNumbers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ1o7QUFDWjtBQUNFO0FBQ2tCO0FBQ3VCO0FBQ0g7QUFFcEUsTUFBTVcsa0JBQWtCLFNBQWE7UUFBWixFQUFDQyxNQUFLLEVBQUM7O0lBQ2hDLE1BQU1DLE1BQU1QLDZDQUFNQSxDQUFDLElBQUk7SUFFdkIsTUFBTVEsY0FBY0wsNkRBQWNBLENBQUM7SUFDbkMsTUFBTU0sY0FBY0wsd0RBQVNBLENBQUNJLGFBQWE7UUFBQ0UsVUFBVTtJQUFJO0lBQzFELE1BQU1DLFdBQVdULHdEQUFTQSxDQUFDSyxLQUFLO1FBQUNLLE1BQUssSUFBSTtJQUFBO0lBRTFDYixnREFBU0EsQ0FBQyxJQUFNO1FBQ1osSUFBR1ksVUFBUztZQUNSSCxZQUFZSyxHQUFHLENBQUNQO1FBQ3BCLENBQUM7SUFDTCxHQUFHO1FBQUNLO1FBQVVMO1FBQU9FO0tBQVk7SUFFakNULGdEQUFTQSxDQUFDLElBQU07UUFDWlUsWUFBWUssRUFBRSxDQUFDLFVBQVUsQ0FBQ0MsU0FBVztZQUNqQyxJQUFHUixJQUFJUyxPQUFPLElBQUlELE9BQU9FLE9BQU8sQ0FBQyxNQUFNWCxPQUFNO2dCQUN6Q0MsSUFBSVMsT0FBTyxDQUFDRSxXQUFXLEdBQUdILE9BQU9FLE9BQU8sQ0FBQztZQUM3QyxDQUFDO1FBQ0w7SUFDSixHQUFHO1FBQUNSO1FBQWFIO0tBQU07SUFFbkIscUJBQU8sOERBQUNhO1FBQUtaLEtBQUtBOzs7Ozs7QUFDdEI7R0F0Qk1GOztRQUdjRix5REFBY0E7UUFDZEMsb0RBQVNBO1FBQ1pGLG9EQUFTQTs7O0tBTHBCRztBQXdCTixNQUFNZSxRQUFRLElBQU07SUFDbEIscUJBQ0U7OzBCQUNJLDhEQUFDeEIsa0RBQUlBOztrQ0FDRCw4REFBQ3lCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRXZDLDhEQUFDQztnQkFBS0MsV0FBVTswQkFDZCw0RUFBQy9CLDBEQUFNQTtvQkFBQytCLFdBQVU7O3NDQUNsQiw4REFBQ2hDLGdFQUFZQTs0QkFBQ2lDLE1BQUs7NEJBQWtDRCxXQUFVOzs7Ozs7c0NBQy9ELDhEQUFDRTs0QkFBSUYsV0FBVTs7OENBQ1gsOERBQUNFO29DQUFJRixXQUFVOztzREFDWCw4REFBQ0c7NENBQUVILFdBQVU7c0RBQW1COzs7Ozs7c0RBR2hDLDhEQUFDRzs0Q0FBRUgsV0FBVTtzREFBbUI7Ozs7OztzREFHaEMsOERBQUNHOzRDQUFFSCxXQUFVO3NEQUFtQjs7Ozs7Ozs7Ozs7OzhDQUlwQyw4REFBQ0U7b0NBQUlGLFdBQVU7O3NEQUNYLDhEQUFDRTs0Q0FBSUYsV0FBVTs7Ozs7O3NEQUNYLDhEQUFDN0IsbURBQUtBOzRDQUFDaUMsS0FBSzdCLGlGQUFVQTs0Q0FBRThCLEtBQUk7NENBQVdMLFdBQVU7Ozs7Ozs7Ozs7Ozs4Q0FFekQsOERBQUNFO29DQUFJRixXQUFVOztzREFDWCw4REFBQ0U7NENBQUlGLFdBQVU7OzhEQUNYLDhEQUFDUDtvREFBS08sV0FBVTs7c0VBQ1osOERBQUNyQjs0REFBZ0JDLE9BQU87Ozs7Ozt3REFBSTs7Ozs7Ozs4REFFaEMsOERBQUMwQjtvREFBR04sV0FBVTs4REFBaUU7Ozs7Ozs7Ozs7OztzREFFbkYsOERBQUNFOzRDQUFJRixXQUFVOzs4REFDWCw4REFBQ1A7b0RBQUtPLFdBQVU7O3NFQUNaLDhEQUFDckI7NERBQWdCQyxPQUFPOzs7Ozs7d0RBQUk7Ozs7Ozs7OERBRWhDLDhEQUFDMEI7b0RBQUdOLFdBQVU7OERBQWlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU25HO0FBRUEsK0RBQWVOLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Fib3V0LmpzP2ZkNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGVkVGV4dCBmcm9tICdAL2NvbXBvbmVudHMvQW5pbWF0ZWRUZXh0J1xuaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBwcm9maWxlUGljIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3Byb2ZpbGUvdmVyb25pY2EtcGljLTIuanBnXCJcbmltcG9ydCB7IHVzZUluVmlldywgdXNlTW90aW9uVmFsdWUsIHVzZVNwcmluZyB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmNvbnN0IEFuaW1hdGVkTnVtYmVycyA9ICh7dmFsdWV9KSA9PiB7XG5jb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbmNvbnN0IG1vdGlvblZhbHVlID0gdXNlTW90aW9uVmFsdWUoMCk7XG5jb25zdCBzcHJpbmdWYWx1ZSA9IHVzZVNwcmluZyhtb3Rpb25WYWx1ZSwge2R1cmF0aW9uOiAzMDAwfSlcbmNvbnN0IGlzSW5WaWV3ID0gdXNlSW5WaWV3KHJlZiwge29uY2U6dHJ1ZX0pO1xuXG51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKGlzSW5WaWV3KXtcbiAgICAgICAgbW90aW9uVmFsdWUuc2V0KHZhbHVlKTtcbiAgICB9XG59LCBbaXNJblZpZXcsIHZhbHVlLCBtb3Rpb25WYWx1ZV0pXG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3ByaW5nVmFsdWUub24oXCJjaGFuZ2VcIiwgKGxhdGVzdCkgPT4ge1xuICAgICAgICBpZihyZWYuY3VycmVudCAmJiBsYXRlc3QudG9GaXhlZCgwKSA8PSB2YWx1ZSl7XG4gICAgICAgICAgICByZWYuY3VycmVudC50ZXh0Q29udGVudCA9IGxhdGVzdC50b0ZpeGVkKDApO1xuICAgICAgICB9XG4gICAgfSlcbn0sIFtzcHJpbmdWYWx1ZSwgdmFsdWVdKVxuXG4gICAgcmV0dXJuIDxzcGFuIHJlZj17cmVmfT48L3NwYW4+XG59XG5cbmNvbnN0IGFib3V0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPlZlcm9uaWNhIENoYW5nIHwgQWJvdXQgUGFnZTwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nYW50IGRlc2NyaXB0aW9uJyAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIGZsZXggY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBkYXJrOnRleHQtbGlnaHQnPlxuICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT0ncHQtMTInPlxuICAgICAgICA8QW5pbWF0ZWRUZXh0IHRleHQ9J0NyYWZ0aW5nIENhcmVlcnMsIExpdmluZyBEcmVhbXMnIGNsYXNzTmFtZT0nbWItMTYnLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgdy1mdWxsIGdyaWQtY29scy04IGdhcC0xNic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tMyBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktc3RhcnQnPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXktNCBmb250LW1pZGl1bSc+XG4gICAgICAgICAgICAgICAgICAgIFBhcmFncmFwaCAxXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXktNCBmb250LW1pZGl1bSc+XG4gICAgICAgICAgICAgICAgICAgIFBhcmFncmFwaCAyXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXktNCBmb250LW1pZGl1bSc+XG4gICAgICAgICAgICAgICAgICAgIFBhcmFncmFwaCAzXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tMyByZWxhdGl2ZSBoLW1heCByb3VuZGVkLTJ4bCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWRhcmsgYmctbGlnaHQgcC04Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTAgLXJpZ2h0LTMgLXotMTAgdy1bMTAyJV0gaC1bMTAzJV0gcm91bmRlZC1bMnJlbV0gYmctZGFyaycvPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9maWxlUGljfSBhbHQ9J1Zlcm9uaWNhJyBjbGFzc05hbWU9J3ctZnVsbCBoLWF1dG8gcm91bmRlZC0yeGwnLz4gIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHRleHQtN3hsIGZvbnQtYm9sZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWROdW1iZXJzIHZhbHVlPXswfS8+MFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQteGwgZm9udC1tZWRpdW0gY2FwaXRhbGl6ZSB0ZXh0LWRhcmsvNzUgZGFyazp0ZXh0LWxpZ2h0Lzc1Jz5Qcm9qZWN0cyBDb21wbGV0ZWQ8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHRleHQtN3hsIGZvbnQtYm9sZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWROdW1iZXJzIHZhbHVlPXswfS8+MFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQteGwgZm9udC1tZWRpdW0gY2FwaXRhbGl6ZSB0ZXh0LWRhcmsvNzUgZGFyazp0ZXh0LWxpZ2h0Lzc1Jz5ZZWFycyBvZiBFeHBlcmllbmNlPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhYm91dCJdLCJuYW1lcyI6WyJBbmltYXRlZFRleHQiLCJMYXlvdXQiLCJIZWFkIiwiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInByb2ZpbGVQaWMiLCJ1c2VJblZpZXciLCJ1c2VNb3Rpb25WYWx1ZSIsInVzZVNwcmluZyIsIkFuaW1hdGVkTnVtYmVycyIsInZhbHVlIiwicmVmIiwibW90aW9uVmFsdWUiLCJzcHJpbmdWYWx1ZSIsImR1cmF0aW9uIiwiaXNJblZpZXciLCJvbmNlIiwic2V0Iiwib24iLCJsYXRlc3QiLCJjdXJyZW50IiwidG9GaXhlZCIsInRleHRDb250ZW50Iiwic3BhbiIsImFib3V0IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJtYWluIiwiY2xhc3NOYW1lIiwidGV4dCIsImRpdiIsInAiLCJzcmMiLCJhbHQiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/about.js\n"));

/***/ })

});