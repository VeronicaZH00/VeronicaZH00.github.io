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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst useThemeSwicher = ()=>{\n    _s();\n    const preferDarkQuery = \"(prefer-color-scheme: dark)\";\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const mediaQuery = window.matchMedia(preferDarkQuery);\n        const userPref = window.localStorage.getItem(\"theme\");\n        const handleChange = ()=>{\n            if (userPref) {\n                let check = userPref === \"dark\" ? \"dark\" : \"light\";\n                setMode(check);\n                if (check === \"dark\") {\n                    document.documentElement.classList.add(\"dark\");\n                } else {\n                    document.documentElement.classList.remove(\"dark\");\n                }\n            } else {\n                let check = mediaQuery.matches ? \"dark\" : \"light\";\n                setMode(check);\n                window.localStorage.setItem(\"theme\", check);\n                if (check === \"dark\") {\n                    document.documentElement.classList.add(\"dark\");\n                } else {\n                    document.documentElement.classList.remove(\"dark\");\n                }\n            }\n        };\n        handleChange();\n        mediaQuery.addEventListener(\"change\", handleChange);\n        return ()=>mediaQuery.removeEventListener(\"change\", handleChange);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (mode === \"dark\") {\n            window.localStorage.setItem(\"theme\", \"dark\");\n            document.documentElement.classList.add(\"dark\");\n        }\n        if (mode === \"light\") {\n            window.localStorage.setItem(\"theme\", \"light\");\n            document.documentElement.classList.remove(\"dark\");\n        }\n    }, [\n        mode\n    ]);\n    return [\n        mode,\n        setMode\n    ];\n};\n_s(useThemeSwicher, \"ImorwBueLsHEOImKuw/vqku/JqU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useThemeSwicher);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob29rcy91c2VUaGVtZVN3aWNoZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNrRDtBQUVsRCxNQUFNRyxrQkFBa0IsSUFBTTs7SUFDMUIsTUFBTUMsa0JBQWtCO0lBQ3hCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUVqQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE1BQU1NLGFBQWFDLE9BQU9DLFVBQVUsQ0FBQ0w7UUFDckMsTUFBTU0sV0FBV0YsT0FBT0csWUFBWSxDQUFDQyxPQUFPLENBQUM7UUFFN0MsTUFBTUMsZUFBZSxJQUFNO1lBQ3ZCLElBQUdILFVBQVM7Z0JBQ1IsSUFBSUksUUFBUUosYUFBYSxTQUFTLFNBQVMsT0FBTztnQkFDbERKLFFBQVFRO2dCQUNSLElBQUdBLFVBQVEsUUFBTztvQkFDZEMsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztnQkFDM0MsT0FBSztvQkFDREgsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQztnQkFDOUMsQ0FBQztZQUNMLE9BQUs7Z0JBQ0QsSUFBSUwsUUFBUVAsV0FBV2EsT0FBTyxHQUFHLFNBQVMsT0FBTztnQkFDakRkLFFBQVFRO2dCQUNSTixPQUFPRyxZQUFZLENBQUNVLE9BQU8sQ0FDdkIsU0FDQVA7Z0JBR0osSUFBR0EsVUFBUSxRQUFPO29CQUNkQyxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO2dCQUMzQyxPQUFLO29CQUNESCxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO2dCQUM5QyxDQUFDO1lBQ0wsQ0FBQztRQUNMO1FBRUFOO1FBRUFOLFdBQVdlLGdCQUFnQixDQUFDLFVBQVVUO1FBQ3RDLE9BQU8sSUFBTU4sV0FBV2dCLG1CQUFtQixDQUFDLFVBQVVWO0lBQzFELEdBQUcsRUFBRTtJQUVMWixnREFBU0EsQ0FBQyxJQUFNO1FBQ1osSUFBR0ksU0FBUyxRQUFPO1lBQ2ZHLE9BQU9HLFlBQVksQ0FBQ1UsT0FBTyxDQUFDLFNBQVM7WUFDckNOLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7UUFDM0MsQ0FBQztRQUFBLElBQUdiLFNBQVMsU0FBUTtZQUNqQkcsT0FBT0csWUFBWSxDQUFDVSxPQUFPLENBQUMsU0FBUztZQUNyQ04sU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQztRQUM5QyxDQUFDO0lBRUwsR0FBRztRQUFDZDtLQUFLO0lBRVgsT0FBTztRQUFDQTtRQUFNQztLQUFRO0FBQ3hCO0dBbkRNSDtBQXFETiwrREFBZUEsZUFBZUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob29rcy91c2VUaGVtZVN3aWNoZXIuanM/MzIxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGludF9VbHRyYV9Db25kZW5zZWQgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHVzZVRoZW1lU3dpY2hlciA9ICgpID0+IHtcbiAgICBjb25zdCBwcmVmZXJEYXJrUXVlcnkgPSBcIihwcmVmZXItY29sb3Itc2NoZW1lOiBkYXJrKVwiO1xuICAgIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYShwcmVmZXJEYXJrUXVlcnkpO1xuICAgICAgICBjb25zdCB1c2VyUHJlZiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpO1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmKHVzZXJQcmVmKXtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2sgPSB1c2VyUHJlZiA9PT0gXCJkYXJrXCIgPyBcImRhcmtcIiA6IFwibGlnaHRcIjtcbiAgICAgICAgICAgICAgICBzZXRNb2RlKGNoZWNrKTtcbiAgICAgICAgICAgICAgICBpZihjaGVjaz09PVwiZGFya1wiKXtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGxldCBjaGVjayA9IG1lZGlhUXVlcnkubWF0Y2hlcyA/IFwiZGFya1wiIDogXCJsaWdodFwiO1xuICAgICAgICAgICAgICAgIHNldE1vZGUoY2hlY2spO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgICAgICAgXCJ0aGVtZVwiLFxuICAgICAgICAgICAgICAgICAgICBjaGVja1xuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZihjaGVjaz09PVwiZGFya1wiKXtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGhhbmRsZUNoYW5nZSgpO1xuXG4gICAgICAgIG1lZGlhUXVlcnkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVDaGFuZ2UpXG4gICAgICAgIHJldHVybiAoKSA9PiBtZWRpYVF1ZXJ5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlQ2hhbmdlKVxuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYobW9kZSA9PT0gXCJkYXJrXCIpe1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpXG4gICAgICAgIH1pZihtb2RlID09PSBcImxpZ2h0XCIpe1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJsaWdodFwiKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKVxuICAgICAgICB9XG5cbiAgICB9LCBbbW9kZV0pXG5cbiAgcmV0dXJuIFttb2RlLCBzZXRNb2RlXVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VUaGVtZVN3aWNoZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVRoZW1lU3dpY2hlciIsInByZWZlckRhcmtRdWVyeSIsIm1vZGUiLCJzZXRNb2RlIiwibWVkaWFRdWVyeSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJ1c2VyUHJlZiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoYW5kbGVDaGFuZ2UiLCJjaGVjayIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwibWF0Y2hlcyIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/hooks/useThemeSwicher.js\n"));

/***/ })

});