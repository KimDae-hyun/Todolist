"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todo",{

/***/ "./components/TodoInsert.tsx":
/*!***********************************!*\
  !*** ./components/TodoInsert.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_TodoInsert_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/TodoInsert.module.css */ \"./styles/TodoInsert.module.css\");\n/* harmony import */ var _styles_TodoInsert_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoInsert_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar TodoInsert = function(param) {\n    var onInsertToggle = param.onInsertToggle, onInsertTodo = param.onInsertTodo;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), value = ref[0], setValue = ref[1];\n    var onChange = function(e) {\n        setValue(e.target.value);\n    };\n    var onSubmit = function(e) {\n        e.preventDefault();\n        onInsertTodo(value);\n        setValue(\"\");\n        onInsertToggle();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_TodoInsert_module_css__WEBPACK_IMPORTED_MODULE_2___default().background),\n                onClick: onInsertToggle\n            }, void 0, false, {\n                fileName: \"/Users/daekim/practice/my-todo/components/TodoInsert.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_styles_TodoInsert_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                onSubmit: onSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"please type\",\n                        value: value,\n                        onChange: onChange\n                    }, void 0, false, {\n                        fileName: \"/Users/daekim/practice/my-todo/components/TodoInsert.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdAddCircle, {}, void 0, false, {\n                            fileName: \"/Users/daekim/practice/my-todo/components/TodoInsert.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/daekim/practice/my-todo/components/TodoInsert.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/daekim/practice/my-todo/components/TodoInsert.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/daekim/practice/my-todo/components/TodoInsert.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(TodoInsert, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = TodoInsert;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoInsert);\nvar _c;\n$RefreshReg$(_c, \"TodoInsert\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZG9JbnNlcnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ2E7QUFLN0I7O0FBRXhCLElBQU1JLFVBQVUsR0FBRyxnQkFBc0M7UUFBbkNDLGNBQWMsU0FBZEEsY0FBYyxFQUFFQyxZQUFZLFNBQVpBLFlBQVk7O0lBQ2hELElBQTBCTCxHQUFvQixHQUFwQkEsK0NBQVEsQ0FBUyxFQUFFLENBQUMsRUFUaEQsS0FTYyxHQUFjQSxHQUFvQixHQUFsQyxFQVRkLFFBU3dCLEdBQUlBLEdBQW9CLEdBQXhCO0lBQ3RCLElBQU1RLFFBQVEsR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDdEJGLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFNLENBQUNKLEtBQUssQ0FBQyxDQUFDO0tBQzFCO0lBRUQsSUFBTUssUUFBUSxHQUFHLFNBQUNGLENBQUMsRUFBSztRQUN0QkEsQ0FBQyxDQUFDRyxjQUFjLEVBQUUsQ0FBQztRQUNuQlAsWUFBWSxDQUFDQyxLQUFLLENBQUMsQ0FBQztRQUNwQkMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2JILGNBQWMsRUFBRSxDQUFDO0tBQ2xCO0lBQ0QscUJBQ0UsOERBQUNTLEtBQUc7OzBCQUNGLDhEQUFDQSxLQUFHO2dCQUFDQyxTQUFTLEVBQUViLGlGQUFpQjtnQkFBRWUsT0FBTyxFQUFFWixjQUFjOzs7OztxQkFBUTswQkFDbEUsOERBQUNhLE1BQUk7Z0JBQUNILFNBQVMsRUFBRWIsMkVBQVc7Z0JBQUVVLFFBQVEsRUFBRUEsUUFBUTs7a0NBQzlDLDhEQUFDTyxPQUFLO3dCQUNKQyxXQUFXLEVBQUMsYUFBYTt3QkFDekJiLEtBQUssRUFBRUEsS0FBSzt3QkFDWkUsUUFBUSxFQUFFQSxRQUFROzs7Ozs2QkFDWDtrQ0FDVCw4REFBQ1ksUUFBTTt3QkFBQ0MsSUFBSSxFQUFDLFFBQVE7a0NBQ25CLDRFQUFDbkIsdURBQVc7Ozs7aUNBQUc7Ozs7OzZCQUNSOzs7Ozs7cUJBQ0o7Ozs7OzthQUNILENBQ047Q0FDSDtHQTNCS0MsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBNkJoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9kb0luc2VydC50c3g/ZDBjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ub2RvSW5zZXJ0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IHtcbiAgTWRBZGRDaXJjbGUsXG4gIE1kQ2hlY2tDaXJjbGUsXG4gIE1kQ2hlY2tCb3hPdXRsaW5lQmxhbmssXG59IGZyb20gJ3JlYWN0LWljb25zL21kJztcblxuY29uc3QgVG9kb0luc2VydCA9ICh7IG9uSW5zZXJ0VG9nZ2xlLCBvbkluc2VydFRvZG8gfSkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgb25JbnNlcnRUb2RvKHZhbHVlKTtcbiAgICBzZXRWYWx1ZSgnJyk7XG4gICAgb25JbnNlcnRUb2dnbGUoKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kfSBvbkNsaWNrPXtvbkluc2VydFRvZ2dsZX0+PC9kaXY+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj0ncGxlYXNlIHR5cGUnXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5cbiAgICAgICAgICA8TWRBZGRDaXJjbGUgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvSW5zZXJ0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJNZEFkZENpcmNsZSIsIlRvZG9JbnNlcnQiLCJvbkluc2VydFRvZ2dsZSIsIm9uSW5zZXJ0VG9kbyIsInZhbHVlIiwic2V0VmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwiYmFja2dyb3VuZCIsIm9uQ2xpY2siLCJmb3JtIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TodoInsert.tsx\n");

/***/ })

});