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

/***/ "./pages/todo.tsx":
/*!************************!*\
  !*** ./pages/todo.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var _Users_daekim_practice_my_todo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_daekim_practice_my_todo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_daekim_practice_my_todo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Template */ \"./components/Template.tsx\");\n/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TodoList */ \"./components/TodoList.tsx\");\n/* harmony import */ var _components_TodoInsert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TodoInsert */ \"./components/TodoInsert.tsx\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _styles_Template_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Template.module.css */ \"./styles/Template.module.css\");\n/* harmony import */ var _styles_Template_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Template_module_css__WEBPACK_IMPORTED_MODULE_7__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar END__POINT = \"http://localhost:3000\";\nfunction Todos() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), insertToggle = ref[0], setInsertToggle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), todos = ref1[0], setTodos = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _asyncToGenerator(_Users_daekim_practice_my_todo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res;\n            return _Users_daekim_practice_my_todo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"\".concat(END__POINT, \"/api/todo\"));\n                    case 3:\n                        res = _ctx.sent;\n                        if (!(res.statusText !== \"OK\")) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        throw new Error(\"error\");\n                    case 6:\n                        setTodos(res.data);\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    9\n                ]\n            ]);\n        }))();\n    });\n    var onInsertToggle = function() {\n        setInsertToggle(function(prev) {\n            return !prev;\n        });\n    };\n    if (todos) {\n        var Todolist = todos.Todolist;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Template__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            todoLength: Todolist.length,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_TodoList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    Todolist: Todolist\n                }, void 0, false, {\n                    fileName: \"/Users/daekim/practice/my-todo/pages/todo.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Template_module_css__WEBPACK_IMPORTED_MODULE_7___default().addTodoButton),\n                    onClick: onInsertToggle,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdAddCircle, {}, void 0, false, {\n                        fileName: \"/Users/daekim/practice/my-todo/pages/todo.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/daekim/practice/my-todo/pages/todo.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                insertToggle && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_TodoInsert__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    onInsertToggle: onInsertToggle\n                }, void 0, false, {\n                    fileName: \"/Users/daekim/practice/my-todo/pages/todo.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 26\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/daekim/practice/my-todo/pages/todo.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this);\n    } else {\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/daekim/practice/my-todo/pages/todo.tsx\",\n            lineNumber: 47,\n            columnNumber: 5\n        }, this);\n    }\n};\n_s(Todos, \"uUlpCcwZLVHGNBTLBYXu2uDscHc=\");\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2RvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUVsQjtBQUNvQjtBQUNBO0FBQ0k7QUFLMUI7QUFDMkI7O0FBRW5ELElBQU1RLFVBQVUsR0FBRyx1QkFBdUI7QUFFM0IsU0FBU0MsS0FBSyxHQUFHOztJQUM5QixJQUF3Q1IsR0FBd0IsR0FBeEJBLCtDQUFRLENBQVUsS0FBSyxDQUFDLEVBaEJsRSxZQWdCcUIsR0FBcUJBLEdBQXdCLEdBQTdDLEVBaEJyQixlQWdCc0MsR0FBSUEsR0FBd0IsR0FBNUI7SUFDcEMsSUFBMEJBLElBQStCLEdBQS9CQSwrQ0FBUSxDQUFrQixJQUFJLENBQUMsRUFqQjNELEtBaUJjLEdBQWNBLElBQStCLEdBQTdDLEVBakJkLFFBaUJ3QixHQUFJQSxJQUErQixHQUFuQztJQUN0QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2IsK0tBQVk7Z0JBRUhjLEdBQUc7Ozs7OzsrQkFBU1osZ0RBQVMsQ0FBQyxFQUFDLENBQWEsTUFBUyxDQUFwQk0sVUFBVSxFQUFDLFdBQVMsQ0FBQyxDQUFDOzt3QkFBL0NNLEdBQUcsWUFBNEM7NEJBQ2pEQSxDQUFBQSxDQUFBQSxHQUFHLENBQUNFLFVBQVUsS0FBSyxJQUFJOzs7O3dCQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFFLE9BQUssQ0FBRSxDQUFDOzt3QkFDdERKLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDSSxJQUFJLENBQUMsQ0FBQzs7Ozs7O3dCQUVuQkMsT0FBTyxDQUFDQyxHQUFHLFNBQUcsQ0FBQzs7Ozs7Ozs7Ozs7U0FFbEIsSUFBRyxDQUFDO0tBQ04sQ0FBQyxDQUFDO0lBRUgsSUFBTUMsY0FBYyxHQUFHLFdBQU07UUFDM0JWLGVBQWUsQ0FBQyxTQUFDVyxJQUFJO21CQUFLLENBQUNBLElBQUk7U0FBQSxDQUFDLENBQUM7S0FDbEM7SUFFRCxJQUFJVixLQUFLLEVBQUU7UUFDVCxJQUFNLFFBQVUsR0FBS0EsS0FBSyxDQUFsQlcsUUFBUTtRQUNoQixxQkFDRSw4REFBQ3BCLDREQUFRO1lBQUNxQixVQUFVLEVBQUVELFFBQVEsQ0FBQ0UsTUFBTTs7OEJBQ25DLDhEQUFDckIsNERBQVE7b0JBQUNtQixRQUFRLEVBQUVBLFFBQVE7Ozs7O3dCQUFJOzhCQUNoQyw4REFBQ0csS0FBRztvQkFBQ0MsU0FBUyxFQUFFcEIsa0ZBQW9CO29CQUFFc0IsT0FBTyxFQUFFUixjQUFjOzhCQUMzRCw0RUFBQ2YsdURBQVc7Ozs7NEJBQUc7Ozs7O3dCQUNYO2dCQUNMSSxZQUFZLGtCQUFJLDhEQUFDTCw4REFBVTtvQkFBQ2dCLGNBQWMsRUFBRUEsY0FBYzs7Ozs7d0JBQUk7Ozs7OztnQkFDdEQsQ0FDWDtLQUNILE1BQU07c0JBQ0wsOERBQUNLLEtBQUc7c0JBQUMsWUFBVTs7Ozs7Z0JBQU0sQ0FBQztLQUN2QjtDQUNGO0dBakN1QmpCLEtBQUs7QUFBTEEsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90b2RvLnRzeD8yM2Q3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gJy4uL3R5cGVzL1RvZG9UeXBlcyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gJy4uL2NvbXBvbmVudHMvVGVtcGxhdGUnO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb0xpc3QnO1xuaW1wb3J0IFRvZG9JbnNlcnQgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2RvSW5zZXJ0JztcbmltcG9ydCB7XG4gIE1kQWRkQ2lyY2xlLFxuICBNZENoZWNrQ2lyY2xlLFxuICBNZENoZWNrQm94T3V0bGluZUJsYW5rLFxufSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9UZW1wbGF0ZS5tb2R1bGUuY3NzJztcblxuY29uc3QgRU5EX19QT0lOVCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvcygpIHtcbiAgY29uc3QgW2luc2VydFRvZ2dsZSwgc2V0SW5zZXJ0VG9nZ2xlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZTxUb2RvVHlwZSB8IG51bGw+KG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EX19QT0lOVH0vYXBpL3RvZG9gKTtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXNUZXh0ICE9PSAnT0snKSB0aHJvdyBuZXcgRXJyb3IoYGVycm9yYCk7XG4gICAgICAgIHNldFRvZG9zKHJlcy5kYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfSk7XG5cbiAgY29uc3Qgb25JbnNlcnRUb2dnbGUgPSAoKSA9PiB7XG4gICAgc2V0SW5zZXJ0VG9nZ2xlKChwcmV2KSA9PiAhcHJldik7XG4gIH07XG5cbiAgaWYgKHRvZG9zKSB7XG4gICAgY29uc3QgeyBUb2RvbGlzdCB9ID0gdG9kb3M7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUZW1wbGF0ZSB0b2RvTGVuZ3RoPXtUb2RvbGlzdC5sZW5ndGh9PlxuICAgICAgICA8VG9kb0xpc3QgVG9kb2xpc3Q9e1RvZG9saXN0fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZFRvZG9CdXR0b259IG9uQ2xpY2s9e29uSW5zZXJ0VG9nZ2xlfT5cbiAgICAgICAgICA8TWRBZGRDaXJjbGUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtpbnNlcnRUb2dnbGUgJiYgPFRvZG9JbnNlcnQgb25JbnNlcnRUb2dnbGU9e29uSW5zZXJ0VG9nZ2xlfSAvPn1cbiAgICAgIDwvVGVtcGxhdGU+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiVGVtcGxhdGUiLCJUb2RvTGlzdCIsIlRvZG9JbnNlcnQiLCJNZEFkZENpcmNsZSIsInN0eWxlcyIsIkVORF9fUE9JTlQiLCJUb2RvcyIsImluc2VydFRvZ2dsZSIsInNldEluc2VydFRvZ2dsZSIsInRvZG9zIiwic2V0VG9kb3MiLCJyZXMiLCJnZXQiLCJzdGF0dXNUZXh0IiwiRXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm9uSW5zZXJ0VG9nZ2xlIiwicHJldiIsIlRvZG9saXN0IiwidG9kb0xlbmd0aCIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImFkZFRvZG9CdXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/todo.tsx\n");

/***/ })

});