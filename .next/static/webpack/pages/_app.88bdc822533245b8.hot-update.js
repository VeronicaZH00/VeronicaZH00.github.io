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

/***/ "./src/components/hooks/useThemeSwicher.js":
/*!*************************************************!*\
  !*** ./src/components/hooks/useThemeSwicher.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst useThemeSwicher = ()=>{\n    _s();\n    const preferDarkQuery = \"(prefer-color-scheme: dark)\";\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const mediaQuery = window.matchMedia(preferDarkQuery);\n        const userPref = window.localStorage.getItem(\"theme\");\n        const handleChange = ()=>{\n            if (userPref) {\n                let check = userPref === \"dark\" ? \"dark\" : \"light\";\n                setMode(check);\n                if (check === \"dark\") {\n                    document.documentElement.classList.add(\"dark\");\n                } else {\n                    document.documentElement.classList.remove(\"dark\");\n                }\n            } else {\n                let check = mediaQuery.matches ? \"dark\" : \"light\";\n                setMode(check);\n                window.localStorage.setItem(\"theme\", check);\n                if (check === \"dark\") {\n                    document.documentElement.classList.add(\"dark\");\n                } else {\n                    document.documentElement.classList.remove(\"dark\");\n                }\n            }\n        };\n        handleChange();\n        mediaQuery.addEventListener(\"change\", handleChange);\n        return ()=>mediaQuery.removeEventListener(\"change\", handleChange);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (mode === \"dark\") {\n            window.localStorage.setItem(\"theme\", \"dark\");\n            document.documentElement.classList.add(\"dark\");\n        } else {\n            window.localStorage.setItem(\"theme\", \"light\");\n            document.documentElement.classList.remove(\"dark\");\n        }\n    }, [\n        mode\n    ]);\n    return [\n        mode,\n        setMode\n    ];\n};\n_s(useThemeSwicher, \"ImorwBueLsHEOImKuw/vqku/JqU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useThemeSwicher);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob29rcy91c2VUaGVtZVN3aWNoZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNrRDtBQUVsRCxNQUFNRyxrQkFBa0IsSUFBTTs7SUFDMUIsTUFBTUMsa0JBQWtCO0lBQ3hCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUVqQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE1BQU1NLGFBQWFDLE9BQU9DLFVBQVUsQ0FBQ0w7UUFDckMsTUFBTU0sV0FBV0YsT0FBT0csWUFBWSxDQUFDQyxPQUFPLENBQUM7UUFFN0MsTUFBTUMsZUFBZSxJQUFNO1lBQ3ZCLElBQUdILFVBQVM7Z0JBQ1IsSUFBSUksUUFBUUosYUFBYSxTQUFTLFNBQVMsT0FBTztnQkFDbERKLFFBQVFRO2dCQUNSLElBQUdBLFVBQVEsUUFBTztvQkFDZEMsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztnQkFDM0MsT0FBSztvQkFDREgsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQztnQkFDOUMsQ0FBQztZQUNMLE9BQUs7Z0JBQ0QsSUFBSUwsUUFBUVAsV0FBV2EsT0FBTyxHQUFHLFNBQVMsT0FBTztnQkFDakRkLFFBQVFRO2dCQUNSTixPQUFPRyxZQUFZLENBQUNVLE9BQU8sQ0FDdkIsU0FDQVA7Z0JBR0osSUFBR0EsVUFBUSxRQUFPO29CQUNkQyxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO2dCQUMzQyxPQUFLO29CQUNESCxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO2dCQUM5QyxDQUFDO1lBQ0wsQ0FBQztRQUNMO1FBRUFOO1FBRUFOLFdBQVdlLGdCQUFnQixDQUFDLFVBQVVUO1FBQ3RDLE9BQU8sSUFBTU4sV0FBV2dCLG1CQUFtQixDQUFDLFVBQVVWO0lBQzFELEdBQUcsRUFBRTtJQUVMWixnREFBU0EsQ0FBQyxJQUFNO1FBQ1osSUFBR0ksU0FBUyxRQUFPO1lBQ2ZHLE9BQU9HLFlBQVksQ0FBQ1UsT0FBTyxDQUFDLFNBQVM7WUFDckNOLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7UUFDM0MsT0FBSztZQUNEVixPQUFPRyxZQUFZLENBQUNVLE9BQU8sQ0FBQyxTQUFTO1lBQ3JDTixTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO1FBQzlDLENBQUM7SUFFTCxHQUFHO1FBQUNkO0tBQUs7SUFFWCxPQUFPO1FBQUNBO1FBQU1DO0tBQVE7QUFDeEI7R0FuRE1IO0FBcUROLCtEQUFlQSxlQUFlQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvb2tzL3VzZVRoZW1lU3dpY2hlci5qcz8zMjFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0aW50X1VsdHJhX0NvbmRlbnNlZCB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgdXNlVGhlbWVTd2ljaGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHByZWZlckRhcmtRdWVyeSA9IFwiKHByZWZlci1jb2xvci1zY2hlbWU6IGRhcmspXCI7XG4gICAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKHByZWZlckRhcmtRdWVyeSk7XG4gICAgICAgIGNvbnN0IHVzZXJQcmVmID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIik7XG5cbiAgICAgICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYodXNlclByZWYpe1xuICAgICAgICAgICAgICAgIGxldCBjaGVjayA9IHVzZXJQcmVmID09PSBcImRhcmtcIiA/IFwiZGFya1wiIDogXCJsaWdodFwiO1xuICAgICAgICAgICAgICAgIHNldE1vZGUoY2hlY2spO1xuICAgICAgICAgICAgICAgIGlmKGNoZWNrPT09XCJkYXJrXCIpe1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtcIilcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrID0gbWVkaWFRdWVyeS5tYXRjaGVzID8gXCJkYXJrXCIgOiBcImxpZ2h0XCI7XG4gICAgICAgICAgICAgICAgc2V0TW9kZShjaGVjayk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgICAgICBcInRoZW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGlmKGNoZWNrPT09XCJkYXJrXCIpe1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtcIilcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaGFuZGxlQ2hhbmdlKCk7XG5cbiAgICAgICAgbWVkaWFRdWVyeS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZUNoYW5nZSlcbiAgICAgICAgcmV0dXJuICgpID0+IG1lZGlhUXVlcnkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVDaGFuZ2UpXG4gICAgfSwgW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihtb2RlID09PSBcImRhcmtcIil7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmtcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpXG4gICAgICAgIH1cblxuICAgIH0sIFttb2RlXSlcblxuICByZXR1cm4gW21vZGUsIHNldE1vZGVdXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVRoZW1lU3dpY2hlciJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlVGhlbWVTd2ljaGVyIiwicHJlZmVyRGFya1F1ZXJ5IiwibW9kZSIsInNldE1vZGUiLCJtZWRpYVF1ZXJ5Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsInVzZXJQcmVmIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZUNoYW5nZSIsImNoZWNrIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJtYXRjaGVzIiwic2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/hooks/useThemeSwicher.js\n"));

/***/ })

});