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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var _Users_daekim_practice_my_todo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_daekim_practice_my_todo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_daekim_practice_my_todo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Template */ \"./components/Template.tsx\");\n/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TodoList */ \"./components/TodoList.tsx\");\n/* harmony import */ var _components_TodoInsert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TodoInsert */ \"./components/TodoInsert.tsx\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _styles_Template_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Template.module.css */ \"./styles/Template.module.css\");\n/* harmony import */ var _styles_Template_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Template_module_css__WEBPACK_IMPORTED_MODULE_7__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar nextId = 4;\nvar END__POINT = \"http://localhost:3000\";\nfunction Todos() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), insertToggle = ref[0], setInsertToggle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), todos1 = ref1[0], setTodos = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _asyncToGenerator(_Users_daekim_practice_my_todo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res;\n            return _Users_daekim_practice_my_todo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"\".concat(END__POINT, \"/api/todo\"));\n                    case 3:\n                        res = _ctx.sent;\n                        if (!(res.statusText !== \"OK\")) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        throw new Error(\"error\");\n                    case 6:\n                        setTodos(res.data);\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    9\n                ]\n            ]);\n        }))();\n    });\n    var onInsertToggle = function() {\n        setInsertToggle(function(prev) {\n            return !prev;\n        });\n    };\n    var onInsertTodo = function(text) {\n        if (text === \"\") {\n            return alert(\"\\uD560 \\uC77C\\uC744 \\uC785\\uB825\\uD558\\uC138\\uC694!\");\n        } else {\n            var todo = {\n                id: nextId,\n                text: text,\n                checked: false\n            };\n            todos1.Todolist = todos1.Todolist.concat(todo);\n            setTodos(function(todos) {\n                return todos;\n            });\n            nextId++;\n        }\n    };\n    var onCheckToggle = function(id) {\n        todos1.Todolist = todos1.Todolist.map(function(item) {\n            return item.id === id ? _objectSpread({}, item, {\n                checked: !item.checked\n            }) : item;\n        });\n        setTodos(function(todos) {\n            return todos;\n        });\n    };\n    if (todos1) {\n        var Todolist = todos1.Todolist;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Template__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            todoLength: Todolist.length,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_TodoList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    Todolist: Todolist,\n                    onCheckToggle: onCheckToggle\n                }, void 0, false, {\n                    fileName: \"/Users/daekim/practice/my-todo/pages/todo.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Template_module_css__WEBPACK_IMPORTED_MODULE_7___default().addTodoButton),\n                    onClick: onInsertToggle,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdAddCircle, {}, void 0, false, {\n                        fileName: \"/Users/daekim/practice/my-todo/pages/todo.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/daekim/practice/my-todo/pages/todo.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this),\n                insertToggle && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_TodoInsert__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    onInsertToggle: onInsertToggle,\n                    onInsertTodo: onInsertTodo\n                }, void 0, false, {\n                    fileName: \"/Users/daekim/practice/my-todo/pages/todo.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/daekim/practice/my-todo/pages/todo.tsx\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, this);\n    } else {\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/daekim/practice/my-todo/pages/todo.tsx\",\n            lineNumber: 76,\n            columnNumber: 5\n        }, this);\n    }\n};\n_s(Todos, \"uUlpCcwZLVHGNBTLBYXu2uDscHc=\");\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzlELDhEQUFDSyxLQUFHO29CQUFDQyxTQUFTLEVBQUUvQixrRkFBb0I7b0JBQUVpQyxPQUFPLEVBQUVsQixjQUFjOzhCQUMzRCw0RUFBQ2hCLHVEQUFXOzs7OzRCQUFHOzs7Ozt3QkFDWDtnQkFDTEssWUFBWSxrQkFDWCw4REFBQ04sOERBQVU7b0JBQ1RpQixjQUFjLEVBQUVBLGNBQWM7b0JBQzlCRSxZQUFZLEVBQUVBLFlBQVk7Ozs7O3dCQUMxQjs7Ozs7O2dCQUVLLENBQ1g7S0FDSCxNQUFNO3NCQUNMLDhEQUFDYSxLQUFHO3NCQUFDLFlBQVU7Ozs7O2dCQUFNLENBQUM7S0FDdkI7Q0FDRjtHQTVEdUIzQixLQUFLO0FBQUxBLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kby50c3g/MjNkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tICcuLi90eXBlcy9Ub2RvVHlwZXMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBUZW1wbGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL1RlbXBsYXRlJztcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1RvZG9MaXN0JztcbmltcG9ydCBUb2RvSW5zZXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb0luc2VydCc7XG5pbXBvcnQge1xuICBNZEFkZENpcmNsZSxcbiAgTWRDaGVja0NpcmNsZSxcbiAgTWRDaGVja0JveE91dGxpbmVCbGFuayxcbn0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvVGVtcGxhdGUubW9kdWxlLmNzcyc7XG5cbmxldCBuZXh0SWQgPSA0O1xuXG5jb25zdCBFTkRfX1BPSU5UID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9zKCkge1xuICBjb25zdCBbaW5zZXJ0VG9nZ2xlLCBzZXRJbnNlcnRUb2dnbGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlPFRvZG9UeXBlIHwgbnVsbD4obnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRfX1BPSU5UfS9hcGkvdG9kb2ApO1xuICAgICAgICBpZiAocmVzLnN0YXR1c1RleHQgIT09ICdPSycpIHRocm93IG5ldyBFcnJvcihgZXJyb3JgKTtcbiAgICAgICAgc2V0VG9kb3MocmVzLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICB9KTtcblxuICBjb25zdCBvbkluc2VydFRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRJbnNlcnRUb2dnbGUoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICBjb25zdCBvbkluc2VydFRvZG8gPSAodGV4dCkgPT4ge1xuICAgIGlmICh0ZXh0ID09PSAnJykge1xuICAgICAgcmV0dXJuIGFsZXJ0KCftlaAg7J287J2EIOyeheugpe2VmOyEuOyalCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9kbyA9IHtcbiAgICAgICAgaWQ6IG5leHRJZCxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICB9O1xuICAgICAgdG9kb3MuVG9kb2xpc3QgPSB0b2Rvcy5Ub2RvbGlzdC5jb25jYXQodG9kbyk7XG4gICAgICBzZXRUb2RvcygodG9kb3MpID0+IHRvZG9zKTtcbiAgICAgIG5leHRJZCsrO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbkNoZWNrVG9nZ2xlID0gKGlkKSA9PiB7XG4gICAgdG9kb3MuVG9kb2xpc3QgPSB0b2Rvcy5Ub2RvbGlzdC5tYXAoKGl0ZW0pID0+XG4gICAgICBpdGVtLmlkID09PSBpZCA/IHsgLi4uaXRlbSwgY2hlY2tlZDogIWl0ZW0uY2hlY2tlZCB9IDogaXRlbVxuICAgICk7XG4gICAgc2V0VG9kb3MoKHRvZG9zKSA9PiB0b2Rvcyk7XG4gIH07XG5cbiAgaWYgKHRvZG9zKSB7XG4gICAgY29uc3QgeyBUb2RvbGlzdCB9ID0gdG9kb3M7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUZW1wbGF0ZSB0b2RvTGVuZ3RoPXtUb2RvbGlzdC5sZW5ndGh9PlxuICAgICAgICA8VG9kb0xpc3QgVG9kb2xpc3Q9e1RvZG9saXN0fSBvbkNoZWNrVG9nZ2xlPXtvbkNoZWNrVG9nZ2xlfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZFRvZG9CdXR0b259IG9uQ2xpY2s9e29uSW5zZXJ0VG9nZ2xlfT5cbiAgICAgICAgICA8TWRBZGRDaXJjbGUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtpbnNlcnRUb2dnbGUgJiYgKFxuICAgICAgICAgIDxUb2RvSW5zZXJ0XG4gICAgICAgICAgICBvbkluc2VydFRvZ2dsZT17b25JbnNlcnRUb2dnbGV9XG4gICAgICAgICAgICBvbkluc2VydFRvZG89e29uSW5zZXJ0VG9kb31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9UZW1wbGF0ZT5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJUZW1wbGF0ZSIsIlRvZG9MaXN0IiwiVG9kb0luc2VydCIsIk1kQWRkQ2lyY2xlIiwic3R5bGVzIiwibmV4dElkIiwiRU5EX19QT0lOVCIsIlRvZG9zIiwiaW5zZXJ0VG9nZ2xlIiwic2V0SW5zZXJ0VG9nZ2xlIiwidG9kb3MiLCJzZXRUb2RvcyIsInJlcyIsImdldCIsInN0YXR1c1RleHQiLCJFcnJvciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib25JbnNlcnRUb2dnbGUiLCJwcmV2Iiwib25JbnNlcnRUb2RvIiwidGV4dCIsImFsZXJ0IiwidG9kbyIsImlkIiwiY2hlY2tlZCIsIlRvZG9saXN0IiwiY29uY2F0Iiwib25DaGVja1RvZ2dsZSIsIm1hcCIsIml0ZW0iLCJ0b2RvTGVuZ3RoIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWRkVG9kb0J1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/todo.tsx\n");

/***/ })

});