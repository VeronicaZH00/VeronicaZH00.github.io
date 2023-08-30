"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles",{

/***/ "./src/pages/articles.js":
/*!*******************************!*\
  !*** ./src/pages/articles.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_images_articles_test_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/images/articles/test.jpg */ \"./public/images/articles/test.jpg\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst FramerImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion)((next_image__WEBPACK_IMPORTED_MODULE_4___default()));\n_c = FramerImage;\nconst MovingImg = (param)=>{\n    let { title , img , link  } = param;\n    _s();\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.useMotionValue)(0);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.useMotionValue)(0);\n    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    function handleMouse(event) {\n        imgRef.current.style.display = \"inline-block\";\n        x.set(event.pageX);\n        y.set(-10);\n    }\n    function handleMouseLeave(event) {\n        imgRef.current.style.display = \"none\";\n        x.set(0);\n        y.set(0);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n        href: link,\n        target: \"_blank\",\n        onMouseMove: handleMouse,\n        onMouseLeave: handleMouseLeave,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"capitalize text-xl font-semibold hover:underline\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/articles.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                style: {\n                    x: x,\n                    y: y\n                },\n                initial: {\n                    opacity: 0\n                },\n                whileInView: {\n                    opacity: 1,\n                    transition: {\n                        duration: 0.2\n                    }\n                },\n                ref: imgRef,\n                src: img,\n                alt: title,\n                className: \"z-10 w-96 h-auto hidden absolute rounded-lg\"\n            }, void 0, false, {\n                fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/articles.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/articles.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MovingImg, \"WZcY1P9IKPlGBwzo5Ljx/w8yISw=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_8__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_8__.useMotionValue\n    ];\n});\n_c1 = MovingImg;\nconst Article = (param)=>{\n    let { img , title , date , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.li, {\n        initial: {\n            y: 200\n        },\n        whileInView: {\n            y: 0,\n            transition: {\n                duration: 0.5,\n                ease: \"easeInOut\"\n            }\n        },\n        viewport: {\n            once: true\n        },\n        className: \"relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovingImg, {\n                title: title,\n                img: img,\n                link: link\n            }, void 0, false, {\n                fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/articles.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary pl-4 sm:self-start sm:pl-0 xs:text-sm\",\n                children: date\n            }, void 0, false, {\n                fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/articles.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/articles.js\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = Article;\nconst articles = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Veronica Chang | Articles Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/articles.js\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"ant description\"\n                    }, void 0, false, {\n                        fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/articles.js\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/articles.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Unveiling Thoughts, Sharing Stories\",\n                            className: \"mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl\"\n                        }, void 0, false, {\n                            fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/articles.js\",\n                            lineNumber: 66,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"lg:gap-8 md:grid-cols-1 md:gap-y-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Hello World!\",\n                                    date: \"Augest 28, 2023\",\n                                    img: _public_images_articles_test_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                    link: \"/\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/articles.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Hello World!\",\n                                    date: \"Augest 28, 2023\",\n                                    img: _public_images_articles_test_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                    link: \"/\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/articles.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 22\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Hello World!\",\n                                    date: \"Augest 28, 2023\",\n                                    img: _public_images_articles_test_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                    link: \"/\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/articles.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 22\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Hello World!\",\n                                    date: \"Augest 28, 2023\",\n                                    img: _public_images_articles_test_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                    link: \"/\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/articles.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 22\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Hello World!\",\n                                    date: \"Augest 28, 2023\",\n                                    img: _public_images_articles_test_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                    link: \"/\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/articles.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 22\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/articles.js\",\n                            lineNumber: 67,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/articles.js\",\n                    lineNumber: 65,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/veronica/code/VeronicaZH00.github.io/src/pages/articles.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (articles);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"FramerImage\");\n$RefreshReg$(_c1, \"MovingImg\");\n$RefreshReg$(_c2, \"Article\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNO29DQUNONkIsTUFBSztvQ0FDTDVCLEtBQUtOLHdFQUFVQTtvQ0FDZk8sTUFBSzs7Ozs7OzhDQUVSLDhEQUFDMEI7b0NBQ0U1QixPQUFNO29DQUNONkIsTUFBSztvQ0FDTDVCLEtBQUtOLHdFQUFVQTtvQ0FDZk8sTUFBSzs7Ozs7OzhDQUVSLDhEQUFDMEI7b0NBQ0U1QixPQUFNO29DQUNONkIsTUFBSztvQ0FDTDVCLEtBQUtOLHdFQUFVQTtvQ0FDZk8sTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE3QjtBQUVBLCtEQUFlaUMsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYXJ0aWNsZXMuanM/ZjVjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWF0ZWRUZXh0IGZyb20gJ0AvY29tcG9uZW50cy9BbmltYXRlZFRleHQnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBcnRpY2xlUGljIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL3Rlc3QuanBnXCJcbmltcG9ydCB7IHVzZU1vdGlvblZhbHVlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5cbmNvbnN0IEZyYW1lckltYWdlID0gbW90aW9uKEltYWdlKVxuXG5jb25zdCBNb3ZpbmdJbWcgPSAoe3RpdGxlLCBpbWcsIGxpbmt9KSA9PiB7XG4gICAgY29uc3QgeCA9IHVzZU1vdGlvblZhbHVlKDApO1xuICAgIGNvbnN0IHkgPSB1c2VNb3Rpb25WYWx1ZSgwKTtcbiAgICBjb25zdCBpbWdSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZShldmVudCl7XG4gICAgICAgIGltZ1JlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgeC5zZXQoZXZlbnQucGFnZVgpO1xuICAgICAgICB5LnNldCgtMTApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZUxlYXZlKGV2ZW50KXtcbiAgICAgICAgaW1nUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgeC5zZXQoMCk7XG4gICAgICAgIHkuc2V0KDApO1xuICAgIH1cblxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8TGluayBocmVmPXtsaW5rfSB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdXNlfSBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nY2FwaXRhbGl6ZSB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgaG92ZXI6dW5kZXJsaW5lJz5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPEZyYW1lckltYWdlIHN0eWxlPXt7eDp4LCB5Onl9fSBpbml0aWFsPXt7b3BhY2l0eTowfX0gd2hpbGVJblZpZXc9e3tvcGFjaXR5OjEsIHRyYW5zaXRpb246e2R1cmF0aW9uOjAuMn19fVxuICAgICAgICAgICAgcmVmPXtpbWdSZWZ9IHNyYz17aW1nfSBhbHQ9e3RpdGxlfSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nei0xMCB3LTk2IGgtYXV0byBoaWRkZW4gYWJzb2x1dGUgcm91bmRlZC1sZycgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgIClcbn1cblxuY29uc3QgQXJ0aWNsZSA9ICh7aW1nLCB0aXRsZSwgZGF0ZSwgbGlua30pID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxtb3Rpb24ubGkgXG4gICAgICAgIGluaXRpYWw9e3t5OjIwMH19IHdoaWxlSW5WaWV3PXt7eTowLCB0cmFuc2l0aW9uOntkdXJhdGlvbjowLjUsIGVhc2U6XCJlYXNlSW5PdXRcIn19fVxuICAgICAgICB2aWV3cG9ydD17e29uY2U6dHJ1ZX19XG4gICAgICAgIGNsYXNzTmFtZT0ncmVsYXRpdmUgdy1mdWxsIHAtNCBweS02IG15LTQgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlclxuICAgICAgICBqdXN0aWZ5LWJldHdlZW4gYmctbGlnaHQgdGV4dC1kYXJrIGZpcnN0Om10LTAgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItZGFya1xuICAgICAgICBib3JkZXItci00IGJvcmRlci1iLTQgZGFyazpib3JkZXItbGlnaHQgZGFyazpiZy1kYXJrIGRhcms6dGV4dC1saWdodCBzbTpmbGV4LWNvbCc+XG4gICAgICAgICAgICA8TW92aW5nSW1nIHRpdGxlPXt0aXRsZX0gaW1nPXtpbWd9IGxpbms9e2xpbmt9IC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtcHJpbWFyeSBwbC00IHNtOnNlbGYtc3RhcnQgc206cGwtMCB4czp0ZXh0LXNtJz57ZGF0ZX08L3NwYW4+XG4gICAgICAgIDwvbW90aW9uLmxpPlxuICAgIClcbn1cblxuY29uc3QgYXJ0aWNsZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+VmVyb25pY2EgQ2hhbmcgfCBBcnRpY2xlcyBQYWdlPC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdhbnQgZGVzY3JpcHRpb24nIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPSd3LWZ1bGwgbWItMTYgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIGRhcms6dGV4dC1saWdodCc+XG4gICAgICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT0ncHQtMTYnPlxuICAgICAgICAgICAgICAgIDxBbmltYXRlZFRleHQgdGV4dD0nVW52ZWlsaW5nIFRob3VnaHRzLCBTaGFyaW5nIFN0b3JpZXMnIGNsYXNzTmFtZT0nbWItMTYgbGc6IXRleHQtN3hsIHNtOm1iLTggc206IXRleHQtNnhsIHhzOiF0ZXh0LTR4bCcgLz5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdsZzpnYXAtOCBtZDpncmlkLWNvbHMtMSBtZDpnYXAteS0xNic+XG4gICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJIZWxsbyBXb3JsZCFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT1cIkF1Z2VzdCAyOCwgMjAyM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc9e0FydGljbGVQaWN9XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL1wiXG4gICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgPEFydGljbGUgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkhlbGxvIFdvcmxkIVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlPVwiQXVnZXN0IDI4LCAyMDIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZz17QXJ0aWNsZVBpY31cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCIvXCJcbiAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiSGVsbG8gV29ybGQhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9XCJBdWdlc3QgMjgsIDIwMjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nPXtBcnRpY2xlUGljfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGluaz1cIi9cIlxuICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJIZWxsbyBXb3JsZCFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT1cIkF1Z2VzdCAyOCwgMjAyM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc9e0FydGljbGVQaWN9XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL1wiXG4gICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgPEFydGljbGUgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkhlbGxvIFdvcmxkIVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlPVwiQXVnZXN0IDI4LCAyMDIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZz17QXJ0aWNsZVBpY31cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCIvXCJcbiAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcnRpY2xlcyJdLCJuYW1lcyI6WyJBbmltYXRlZFRleHQiLCJMYXlvdXQiLCJIZWFkIiwiSW1hZ2UiLCJMaW5rIiwiUmVhY3QiLCJ1c2VSZWYiLCJBcnRpY2xlUGljIiwidXNlTW90aW9uVmFsdWUiLCJtb3Rpb24iLCJGcmFtZXJJbWFnZSIsIk1vdmluZ0ltZyIsInRpdGxlIiwiaW1nIiwibGluayIsIngiLCJ5IiwiaW1nUmVmIiwiaGFuZGxlTW91c2UiLCJldmVudCIsImN1cnJlbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXQiLCJwYWdlWCIsImhhbmRsZU1vdXNlTGVhdmUiLCJocmVmIiwidGFyZ2V0Iiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlTGVhdmUiLCJoMiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5Iiwid2hpbGVJblZpZXciLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJyZWYiLCJzcmMiLCJhbHQiLCJBcnRpY2xlIiwiZGF0ZSIsImxpIiwiZWFzZSIsInZpZXdwb3J0Iiwib25jZSIsInNwYW4iLCJhcnRpY2xlcyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJ0ZXh0IiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/articles.js\n"));

/***/ })

});