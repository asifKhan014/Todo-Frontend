"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/AddTask.tsx":
/*!************************************!*\
  !*** ./app/components/AddTask.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddTask; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _formkit_auto_animate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @formkit/auto-animate/react */ \"(app-pages-browser)/./node_modules/@formkit/auto-animate/react/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AddTask() {\n    _s();\n    const [parent] = (0,_formkit_auto_animate_react__WEBPACK_IMPORTED_MODULE_2__.useAutoAnimate)();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [inputText, setInputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [editMode, setEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [editedText, setEditedText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTask();\n        const intervalId = setInterval(fetchTask, 100); // Polling every 5 seconds\n        return ()=>clearInterval(intervalId); // Cleanup function\n    }, []);\n    const fetchTask = async ()=>{\n        try {\n            const res = await fetch(\"http://localhost:4000/api/tasks\");\n            if (!res.ok) {\n                throw new Error(\"Could not fetch tasks\");\n            }\n            const todo = await res.json();\n            setTodos(todo);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    // \n    const handleAddTask = async ()=>{\n        // e.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:4000/api/tasks\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    id: 31,\n                    text: inputText\n                })\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to add task\");\n            }\n            setInputText(\"\");\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const deleteTask = async (id)=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/api/tasks/\".concat(id), {\n                method: \"DELETE\"\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to add task\");\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const updateTask = (taskId, updatedValue)=>{\n        try {\n            const response = fetch(\"http://localhost:4000/api/tasks/\".concat(taskId), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    text: updatedValue\n                })\n            });\n            setEditMode(null);\n            setInputText(\"\");\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"ToDo List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PMLS\\\\Desktop\\\\TODO\\\\Frontend\\\\todo\\\\app\\\\components\\\\AddTask.tsx\",\n                lineNumber: 92,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"\",\n                        id: \"\",\n                        placeholder: \"Add a task\",\n                        onChange: (e)=>setInputText(e.target.value),\n                        value: inputText,\n                        className: \"border-gray-400 border rounded-l px-4 py-2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PMLS\\\\Desktop\\\\TODO\\\\Frontend\\\\todo\\\\app\\\\components\\\\AddTask.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-600 text-white px-4 py-2 rounded-r\",\n                        onClick: ()=>{\n                            if (inputText === \"\") {\n                                return;\n                            }\n                        },\n                        children: \"ADD\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PMLS\\\\Desktop\\\\TODO\\\\Frontend\\\\todo\\\\app\\\\components\\\\AddTask.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PMLS\\\\Desktop\\\\TODO\\\\Frontend\\\\todo\\\\app\\\\components\\\\AddTask.tsx\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    ref: parent,\n                    children: todos.map((todos)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex items-center justify-between border-b py-2\",\n                            children: editMode === todos[\"id\"] ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        onChange: (e)=>setEditedText(e.target.value),\n                                        value: editedText,\n                                        className: \"border-gray-400 border rounded-l px-4 py-2\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\PMLS\\\\Desktop\\\\TODO\\\\Frontend\\\\todo\\\\app\\\\components\\\\AddTask.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>updateTask(todos[\"id\"], editedText),\n                                        className: \"bg-green-500 text-white rounded-r px-4 py-2\",\n                                        children: \"Save\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\PMLS\\\\Desktop\\\\TODO\\\\Frontend\\\\todo\\\\app\\\\components\\\\AddTask.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: todos[\"text\"]\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\PMLS\\\\Desktop\\\\TODO\\\\Frontend\\\\todo\\\\app\\\\components\\\\AddTask.tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>(setEditMode(todos[\"id\"]), setEditedText(todos[\"text\"])),\n                                                className: \"text-blue-500 mr-2\",\n                                                children: \"Edit\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\PMLS\\\\Desktop\\\\TODO\\\\Frontend\\\\todo\\\\app\\\\components\\\\AddTask.tsx\",\n                                                lineNumber: 124,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>deleteTask(todos[\"id\"]),\n                                                className: \"text-red-500 \",\n                                                children: \"Delete\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\PMLS\\\\Desktop\\\\TODO\\\\Frontend\\\\todo\\\\app\\\\components\\\\AddTask.tsx\",\n                                                lineNumber: 130,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\PMLS\\\\Desktop\\\\TODO\\\\Frontend\\\\todo\\\\app\\\\components\\\\AddTask.tsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true)\n                        }, todos[\"id\"], false, {\n                            fileName: \"C:\\\\Users\\\\PMLS\\\\Desktop\\\\TODO\\\\Frontend\\\\todo\\\\app\\\\components\\\\AddTask.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 15\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PMLS\\\\Desktop\\\\TODO\\\\Frontend\\\\todo\\\\app\\\\components\\\\AddTask.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PMLS\\\\Desktop\\\\TODO\\\\Frontend\\\\todo\\\\app\\\\components\\\\AddTask.tsx\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PMLS\\\\Desktop\\\\TODO\\\\Frontend\\\\todo\\\\app\\\\components\\\\AddTask.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_s(AddTask, \"BtxpiMThD/xBfgdW1rwnuCMhAdo=\", false, function() {\n    return [\n        _formkit_auto_animate_react__WEBPACK_IMPORTED_MODULE_2__.useAutoAnimate\n    ];\n});\n_c = AddTask;\nvar _c;\n$RefreshReg$(_c, \"AddTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0FkZFRhc2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDbUQ7QUFDVTtBQUM5QyxTQUFTSTs7SUFHdEIsTUFBTSxDQUFDQyxPQUFPLEdBQUdGLDJFQUFjQTtJQUMvQixNQUFNLENBQUNHLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFnQjtJQUN4RCxNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUM7SUFHN0NELGdEQUFTQSxDQUFDO1FBQ1JhO1FBQ0EsTUFBTUMsYUFBYUMsWUFBWUYsV0FBVyxNQUFNLDBCQUEwQjtRQUMxRSxPQUFPLElBQU1HLGNBQWNGLGFBQWEsbUJBQW1CO0lBRTdELEdBQUUsRUFBRTtJQUVKLE1BQU1ELFlBQVk7UUFDaEIsSUFBRztZQUNELE1BQU1JLE1BQU0sTUFBTUMsTUFBTTtZQUN4QixJQUFHLENBQUNELElBQUlFLEVBQUUsRUFBQztnQkFDVCxNQUFNLElBQUlDLE1BQU07WUFDbEI7WUFDQSxNQUFNQyxPQUFPLE1BQU1KLElBQUlLLElBQUk7WUFDM0JoQixTQUFTZTtRQUVYLEVBQ0EsT0FBTUUsT0FBTTtZQUNWQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDRjtJQUdBLEdBQUc7SUFDSCxNQUFNRyxnQkFBZ0I7UUFDcEIsc0JBQXNCO1FBQ3RCLElBQUc7WUFDRCxNQUFNQyxXQUFXLE1BQU1ULE1BQU0sbUNBQW1DO2dCQUM5RFUsUUFBUTtnQkFDUkMsU0FBUTtvQkFDTixnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUNDLElBQUs7b0JBQUlDLE1BQU0zQjtnQkFBUztZQUNoRDtZQUNBLElBQUcsQ0FBQ29CLFNBQVNSLEVBQUUsRUFBQztnQkFDZCxNQUFNLElBQUlDLE1BQU07WUFDbEI7WUFDQVosYUFBYTtRQUdmLEVBQUMsT0FBTWUsT0FBTztZQUNaQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDRjtJQUdBLE1BQU1ZLGFBQWEsT0FBT0Y7UUFDeEIsSUFBRztZQUNELE1BQU1OLFdBQVcsTUFBTVQsTUFBTSxtQ0FBc0MsT0FBSGUsS0FBTTtnQkFDcEVMLFFBQVE7WUFDVjtZQUNBLElBQUcsQ0FBQ0QsU0FBU1IsRUFBRSxFQUFDO2dCQUNkLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtRQUVGLEVBQ0EsT0FBTUcsT0FBTztZQUNYQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDRjtJQUVBLE1BQU1hLGFBQWEsQ0FBQ0MsUUFBZUM7UUFDakMsSUFBRztZQUNELE1BQU1YLFdBQVdULE1BQU0sbUNBQTBDLE9BQVBtQixTQUFTO2dCQUNqRVQsUUFBUTtnQkFDUkMsU0FBUztvQkFBQyxnQkFBZTtnQkFBa0I7Z0JBQzNDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUNFLE1BQUtJO2dCQUFZO1lBQ3pDO1lBQ0E1QixZQUFZO1lBQ1pGLGFBQWE7UUFDZixFQUNBLE9BQU1lLE9BQU07WUFDVkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2dCOzswQkFDSSw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQTBCOzs7Ozs7MEJBQ3pDLDhEQUFDRjtnQkFBSUUsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFPQyxNQUFLO3dCQUFHWCxJQUFHO3dCQUM5QlksYUFBWTt3QkFDWkMsVUFBVSxDQUFDQyxJQUFLdkMsYUFBYXVDLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzt3QkFDM0NBLE9BQU8xQzt3QkFDUGtDLFdBQVU7Ozs7OztrQ0FFViw4REFBQ1M7d0JBQU9ULFdBQVU7d0JBQ2xCVSxTQUFTOzRCQUNQLElBQUc1QyxjQUFjLElBQUc7Z0NBQUM7NEJBQVE7d0JBQy9CO2tDQUFHOzs7Ozs7Ozs7Ozs7MEJBRVAsOERBQUNnQzswQkFDQyw0RUFBQ2E7b0JBQUdDLEtBQUtqRDs4QkFDTkMsTUFBTWlELEdBQUcsQ0FBQyxDQUFDakQsc0JBRVYsOERBQUNrRDs0QkFBcUJkLFdBQVU7c0NBQzdCaEMsYUFBYUosS0FBSyxDQUFDLEtBQUssaUJBQzNCOztrREFDRSw4REFBQ3FDO3dDQUNEQyxNQUFLO3dDQUNMRyxVQUFVLENBQUNDLElBQU1uQyxjQUFjbUMsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO3dDQUM3Q0EsT0FBT3RDO3dDQUNQOEIsV0FBVTs7Ozs7O2tEQUNWLDhEQUFDUzt3Q0FBT0MsU0FBUyxJQUFLZixXQUFXL0IsS0FBSyxDQUFDLEtBQUssRUFBRU07d0NBQWE4QixXQUFVO2tEQUE4Qzs7Ozs7Ozs2REFJckg7O2tEQUNBLDhEQUFDZTtrREFBTW5ELEtBQUssQ0FBQyxPQUFPOzs7Ozs7a0RBQ3BCLDhEQUFDa0M7d0NBQUlFLFdBQVU7OzBEQUNiLDhEQUFDUztnREFBT0MsU0FBUyxJQUNmekMsQ0FBQUEsWUFBWUwsS0FBSyxDQUFDLEtBQUssR0FDdkJPLGNBQWNQLEtBQUssQ0FBQyxPQUFPLENBQzNCO2dEQUVFb0MsV0FBVTswREFBc0I7Ozs7OzswREFDcEMsOERBQUNTO2dEQUFPQyxTQUFTLElBQU1oQixXQUFXOUIsS0FBSyxDQUFDLEtBQUs7Z0RBQUdvQyxXQUFVOzBEQUFpQjs7Ozs7Ozs7Ozs7Ozs7MkJBckJwRXBDLEtBQUssQ0FBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ2xDO0dBMUl3QkY7O1FBR0xELHVFQUFjQTs7O0tBSFRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0FkZFRhc2sudHN4P2Y0NmQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUF1dG9BbmltYXRlIH0gZnJvbSAnQGZvcm1raXQvYXV0by1hbmltYXRlL3JlYWN0JztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkVGFzayAoKXtcclxuXHJcblxyXG4gIGNvbnN0IFtwYXJlbnRdID0gdXNlQXV0b0FuaW1hdGUoKVxyXG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbnB1dFRleHQsIHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZWRpdE1vZGUsIHNldEVkaXRNb2RlXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtlZGl0ZWRUZXh0LCBzZXRFZGl0ZWRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgZmV0Y2hUYXNrKCk7XHJcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZmV0Y2hUYXNrLCAxMDApOyAvLyBQb2xsaW5nIGV2ZXJ5IDUgc2Vjb25kc1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7IC8vIENsZWFudXAgZnVuY3Rpb25cclxuICAgIFxyXG4gIH0sW10pO1xyXG5cclxuICBjb25zdCBmZXRjaFRhc2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS90YXNrc1wiKTtcclxuICAgICAgaWYoIXJlcy5vayl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmV0Y2ggdGFza3MnKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB0b2RvID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgc2V0VG9kb3ModG9kbyk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gXHJcbiAgY29uc3QgaGFuZGxlQWRkVGFzayA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdGFza3NcIiwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtpZDogIDMxLCB0ZXh0OiBpbnB1dFRleHR9KVxyXG4gICAgICB9KTtcclxuICAgICAgaWYoIXJlc3BvbnNlLm9rKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBhZGQgdGFzaycpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldElucHV0VGV4dCgnJyk7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIH1jYXRjaChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3QgZGVsZXRlVGFzayA9IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdGFza3MvJHtpZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICB9KTtcclxuICAgICAgaWYoIXJlc3BvbnNlLm9rKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBhZGQgdGFzaycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXBkYXRlVGFzayA9ICh0YXNrSWQ6bnVtYmVyLCB1cGRhdGVkVmFsdWUgOiBzdHJpbmcpID0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL3Rhc2tzLyR7dGFza0lkfWAse1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1wiQ29udGVudC10eXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJ9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt0ZXh0OnVwZGF0ZWRWYWx1ZX0pXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRFZGl0TW9kZShudWxsKTtcclxuICAgICAgc2V0SW5wdXRUZXh0KCcnKTtcclxuICAgIH1cclxuICAgIGNhdGNoKGVycm9yKXtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPlRvRG8gTGlzdDwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbWItNCc+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJcIiBpZD1cIlwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nQWRkIGEgdGFzaydcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IHNldElucHV0VGV4dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dFRleHR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYm9yZGVyLWdyYXktNDAwIGJvcmRlciByb3VuZGVkLWwgcHgtNCBweS0yJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1yJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKT0+IHtcclxuICAgICAgICAgICAgICBpZihpbnB1dFRleHQgPT09ICcnKXtyZXR1cm4gO31cclxuICAgICAgICAgICAgfX0+QUREPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDx1bCByZWY9e3BhcmVudH0+XHJcbiAgICAgICAgICAgIHt0b2Rvcy5tYXAoKHRvZG9zKSA9PihcclxuXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17dG9kb3NbJ2lkJ119IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iIHB5LTInPlxyXG4gICAgICAgICAgICAgICAge2VkaXRNb2RlID09PSB0b2Rvc1snaWQnXSA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RWRpdGVkVGV4dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZWRpdGVkVGV4dH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYm9yZGVyLWdyYXktNDAwIGJvcmRlciByb3VuZGVkLWwgcHgtNCBweS0yJy8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gdXBkYXRlVGFzayh0b2Rvc1snaWQnXSwgZWRpdGVkVGV4dCl9IGNsYXNzTmFtZT0nYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgcm91bmRlZC1yIHB4LTQgcHktMic+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt0b2Rvc1sndGV4dCddfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICBzZXRFZGl0TW9kZSh0b2Rvc1snaWQnXSksXHJcbiAgICAgICAgICAgICAgICAgIHNldEVkaXRlZFRleHQodG9kb3NbJ3RleHQnXVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfSBjbGFzc05hbWU9J3RleHQtYmx1ZS01MDAgbXItMicgPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlVGFzayh0b2Rvc1snaWQnXSl9IGNsYXNzTmFtZT0ndGV4dC1yZWQtNTAwICcgPkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBdXRvQW5pbWF0ZSIsIkFkZFRhc2siLCJwYXJlbnQiLCJ0b2RvcyIsInNldFRvZG9zIiwiaW5wdXRUZXh0Iiwic2V0SW5wdXRUZXh0IiwiZWRpdE1vZGUiLCJzZXRFZGl0TW9kZSIsImVkaXRlZFRleHQiLCJzZXRFZGl0ZWRUZXh0IiwiZmV0Y2hUYXNrIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInJlcyIsImZldGNoIiwib2siLCJFcnJvciIsInRvZG8iLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQWRkVGFzayIsInJlc3BvbnNlIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaWQiLCJ0ZXh0IiwiZGVsZXRlVGFzayIsInVwZGF0ZVRhc2siLCJ0YXNrSWQiLCJ1cGRhdGVkVmFsdWUiLCJkaXYiLCJoMiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayIsInVsIiwicmVmIiwibWFwIiwibGkiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/AddTask.tsx\n"));

/***/ })

});