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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var _Users_daekim_practice_my_todo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_daekim_practice_my_todo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_daekim_practice_my_todo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Template */ \"./components/Template.tsx\");\n/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TodoList */ \"./components/TodoList.tsx\");\n/* harmony import */ var _components_TodoInsert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TodoInsert */ \"./components/TodoInsert.tsx\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _styles_Template_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Template.module.css */ \"./styles/Template.module.css\");\n/* harmony import */ var _styles_Template_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Template_module_css__WEBPACK_IMPORTED_MODULE_7__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar nextId = 4;\nvar END__POINT = \"http://localhost:3000\";\nfunction Todos() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), insertToggle = ref[0], setInsertToggle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), todos1 = ref1[0], setTodos = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _asyncToGenerator(_Users_daekim_practice_my_todo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res;\n            return _Users_daekim_practice_my_todo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"\".concat(END__POINT, \"/api/todo\"));\n                    case 3:\n                        res = _ctx.sent;\n                        if (!(res.statusText !== \"OK\")) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        throw new Error(\"error\");\n                    case 6:\n                        setTodos(res.data);\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    9\n                ]\n            ]);\n        }))();\n    });\n    var onInsertToggle = function() {\n        setInsertToggle(function(prev) {\n            return !prev;\n        });\n    };\n    var onInsertTodo = function(text) {\n        if (text === \"\") {\n            return alert(\"\\uD560 \\uC77C\\uC744 \\uC785\\uB825\\uD558\\uC138\\uC694!\");\n        } else {\n            var todo = {\n                id: nextId,\n                text: text,\n                checked: false\n            };\n            todos1.Todolist = todos1.Todolist.concat(todo);\n            setTodos(function(todos) {\n                return todos;\n            });\n            nextId++;\n        }\n    };\n    var onCheckToggle = function(id) {\n        todos1.Todolist = todos1.Todolist.map(function(item) {\n            return item.id === id ? _objectSpread({}, item, {\n                checked: !item.checked\n            }) : item;\n        });\n        setTodos(function(todos) {\n            return todos;\n        });\n        console.log(todos1.Todolist[0].checked);\n    };\n    if (todos1) {\n        var Todolist = todos1.Todolist;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Template__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            todoLength: Todolist.length,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_TodoList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    Todolist: Todolist,\n                    onCheckToggle: onCheckToggle\n                }, void 0, false, {\n                    fileName: \"/Users/daekim/practice/my-todo/pages/todo.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Template_module_css__WEBPACK_IMPORTED_MODULE_7___default().addTodoButton),\n                    onClick: onInsertToggle,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdAddCircle, {}, void 0, false, {\n                        fileName: \"/Users/daekim/practice/my-todo/pages/todo.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/daekim/practice/my-todo/pages/todo.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this),\n                insertToggle && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_TodoInsert__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    onInsertToggle: onInsertToggle,\n                    onInsertTodo: onInsertTodo\n                }, void 0, false, {\n                    fileName: \"/Users/daekim/practice/my-todo/pages/todo.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/daekim/practice/my-todo/pages/todo.tsx\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, this);\n    } else {\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/daekim/practice/my-todo/pages/todo.tsx\",\n            lineNumber: 77,\n            columnNumber: 5\n        }, this);\n    }\n};\n_s(Todos, \"uUlpCcwZLVHGNBTLBYXu2uDscHc=\");\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs4QkFDbkMsOERBQUNoQyw0REFBUTtvQkFBQzBCLFFBQVEsRUFBRUEsUUFBUTtvQkFBRUUsYUFBYSxFQUFFQSxhQUFhOzs7Ozt3QkFBSTs4QkFDOUQsOERBQUNLLEtBQUc7b0JBQUNDLFNBQVMsRUFBRS9CLGtGQUFvQjtvQkFBRWlDLE9BQU8sRUFBRWxCLGNBQWM7OEJBQzNELDRFQUFDaEIsdURBQVc7Ozs7NEJBQUc7Ozs7O3dCQUNYO2dCQUNMSyxZQUFZLGtCQUNYLDhEQUFDTiw4REFBVTtvQkFDVGlCLGNBQWMsRUFBRUEsY0FBYztvQkFDOUJFLFlBQVksRUFBRUEsWUFBWTs7Ozs7d0JBQzFCOzs7Ozs7Z0JBRUssQ0FDWDtLQUNILE1BQU07c0JBQ0wsOERBQUNhLEtBQUc7c0JBQUMsWUFBVTs7Ozs7Z0JBQU0sQ0FBQztLQUN2QjtDQUNGO0dBN0R1QjNCLEtBQUs7QUFBTEEsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90b2RvLnRzeD8yM2Q3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gJy4uL3R5cGVzL1RvZG9UeXBlcyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gJy4uL2NvbXBvbmVudHMvVGVtcGxhdGUnO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb0xpc3QnO1xuaW1wb3J0IFRvZG9JbnNlcnQgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2RvSW5zZXJ0JztcbmltcG9ydCB7XG4gIE1kQWRkQ2lyY2xlLFxuICBNZENoZWNrQ2lyY2xlLFxuICBNZENoZWNrQm94T3V0bGluZUJsYW5rLFxufSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9UZW1wbGF0ZS5tb2R1bGUuY3NzJztcblxubGV0IG5leHRJZCA9IDQ7XG5cbmNvbnN0IEVORF9fUE9JTlQgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb3MoKSB7XG4gIGNvbnN0IFtpbnNlcnRUb2dnbGUsIHNldEluc2VydFRvZ2dsZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGU8VG9kb1R5cGUgfCBudWxsPihudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORF9fUE9JTlR9L2FwaS90b2RvYCk7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzVGV4dCAhPT0gJ09LJykgdGhyb3cgbmV3IEVycm9yKGBlcnJvcmApO1xuICAgICAgICBzZXRUb2RvcyhyZXMuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH0pKCk7XG4gIH0pO1xuXG4gIGNvbnN0IG9uSW5zZXJ0VG9nZ2xlID0gKCkgPT4ge1xuICAgIHNldEluc2VydFRvZ2dsZSgocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIGNvbnN0IG9uSW5zZXJ0VG9kbyA9ICh0ZXh0KSA9PiB7XG4gICAgaWYgKHRleHQgPT09ICcnKSB7XG4gICAgICByZXR1cm4gYWxlcnQoJ+2VoCDsnbzsnYQg7J6F66Cl7ZWY7IS47JqUIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b2RvID0ge1xuICAgICAgICBpZDogbmV4dElkLFxuICAgICAgICB0ZXh0LFxuICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgIH07XG4gICAgICB0b2Rvcy5Ub2RvbGlzdCA9IHRvZG9zLlRvZG9saXN0LmNvbmNhdCh0b2RvKTtcbiAgICAgIHNldFRvZG9zKCh0b2RvcykgPT4gdG9kb3MpO1xuICAgICAgbmV4dElkKys7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uQ2hlY2tUb2dnbGUgPSAoaWQpID0+IHtcbiAgICB0b2Rvcy5Ub2RvbGlzdCA9IHRvZG9zLlRvZG9saXN0Lm1hcCgoaXRlbSkgPT5cbiAgICAgIGl0ZW0uaWQgPT09IGlkID8geyAuLi5pdGVtLCBjaGVja2VkOiAhaXRlbS5jaGVja2VkIH0gOiBpdGVtXG4gICAgKTtcbiAgICBzZXRUb2RvcygodG9kb3MpID0+IHRvZG9zKTtcbiAgICBjb25zb2xlLmxvZyh0b2Rvcy5Ub2RvbGlzdFswXS5jaGVja2VkKTtcbiAgfTtcblxuICBpZiAodG9kb3MpIHtcbiAgICBjb25zdCB7IFRvZG9saXN0IH0gPSB0b2RvcztcbiAgICByZXR1cm4gKFxuICAgICAgPFRlbXBsYXRlIHRvZG9MZW5ndGg9e1RvZG9saXN0Lmxlbmd0aH0+XG4gICAgICAgIDxUb2RvTGlzdCBUb2RvbGlzdD17VG9kb2xpc3R9IG9uQ2hlY2tUb2dnbGU9e29uQ2hlY2tUb2dnbGV9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkVG9kb0J1dHRvbn0gb25DbGljaz17b25JbnNlcnRUb2dnbGV9PlxuICAgICAgICAgIDxNZEFkZENpcmNsZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2luc2VydFRvZ2dsZSAmJiAoXG4gICAgICAgICAgPFRvZG9JbnNlcnRcbiAgICAgICAgICAgIG9uSW5zZXJ0VG9nZ2xlPXtvbkluc2VydFRvZ2dsZX1cbiAgICAgICAgICAgIG9uSW5zZXJ0VG9kbz17b25JbnNlcnRUb2RvfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L1RlbXBsYXRlPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIlRlbXBsYXRlIiwiVG9kb0xpc3QiLCJUb2RvSW5zZXJ0IiwiTWRBZGRDaXJjbGUiLCJzdHlsZXMiLCJuZXh0SWQiLCJFTkRfX1BPSU5UIiwiVG9kb3MiLCJpbnNlcnRUb2dnbGUiLCJzZXRJbnNlcnRUb2dnbGUiLCJ0b2RvcyIsInNldFRvZG9zIiwicmVzIiwiZ2V0Iiwic3RhdHVzVGV4dCIsIkVycm9yIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvbkluc2VydFRvZ2dsZSIsInByZXYiLCJvbkluc2VydFRvZG8iLCJ0ZXh0IiwiYWxlcnQiLCJ0b2RvIiwiaWQiLCJjaGVja2VkIiwiVG9kb2xpc3QiLCJjb25jYXQiLCJvbkNoZWNrVG9nZ2xlIiwibWFwIiwiaXRlbSIsInRvZG9MZW5ndGgiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJhZGRUb2RvQnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/todo.tsx\n");

/***/ })

});