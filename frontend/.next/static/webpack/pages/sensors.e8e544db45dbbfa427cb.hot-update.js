webpackHotUpdate_N_E("pages/sensors",{

/***/ "./pages/sensors.tsx":
/*!***************************!*\
  !*** ./pages/sensors.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ \"./components/header.tsx\");\n/* harmony import */ var _components_SensorCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SensorCard */ \"./components/SensorCard.tsx\");\n/* harmony import */ var _styles_sensors_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/sensors.module.scss */ \"./styles/sensors.module.scss\");\n/* harmony import */ var _styles_sensors_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_sensors_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _service_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/common */ \"./service/common.ts\");\n/* harmony import */ var _service_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/cookie */ \"./service/cookie.ts\");\n\n\n\n\n\nvar _jsxFileName = \"/home/dasein/dev/explore_new/django-nextjs-realtime/frontend/pages/sensors.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Sensors = function Sensors() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  var is_admin = function is_admin() {\n    var access_token = Object(_service_cookie__WEBPACK_IMPORTED_MODULE_9__[\"getCookie\"])(\"access_token\");\n\n    if (access_token) {\n      router.push(\"/sensors\");\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    is_admin();\n  }, []);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      APIError = _useState2[0],\n      setAPIError = _useState2[1];\n\n  var getSensorDetils = /*#__PURE__*/function () {\n    var _ref = Object(_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var res;\n      return _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return Object(_service_common__WEBPACK_IMPORTED_MODULE_8__[\"apiCall\"])({\n                method: \"GET\",\n                url: \"/sensor/\"\n              });\n\n            case 2:\n              res = _context.sent;\n\n              if (!(res == \"404\" || res == \"401\" || res == \"500\")) {\n                _context.next = 16;\n                break;\n              }\n\n              _context.t0 = res;\n              _context.next = _context.t0 === \"404\" ? 7 : _context.t0 === \"500\" ? 9 : _context.t0 === \"401\" ? 11 : 13;\n              break;\n\n            case 7:\n              setAPIError(404);\n              return _context.abrupt(\"break\", 14);\n\n            case 9:\n              setAPIError(500);\n              return _context.abrupt(\"break\", 14);\n\n            case 11:\n              setAPIError(401);\n              return _context.abrupt(\"break\", 14);\n\n            case 13:\n              return _context.abrupt(\"break\", 14);\n\n            case 14:\n              _context.next = 17;\n              break;\n\n            case 16:\n              setData(res);\n\n            case 17:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getSensorDetils() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    getSensorDetils();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        width: \"100%\",\n        height: \"100%\",\n        marginTop: \"60px\"\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_sensors_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.countries_grid,\n        children: [data === null || data === void 0 ? void 0 : data.map(function (sensor) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SensorCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            sensor: sensor\n          }, sensor.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 20\n          }, _this);\n        }), (data === null || data === void 0 ? void 0 : data.length) === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"no sensor found\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Sensors, \"o2l1J4Ky5/QXCU4PKOSDKNmSUtc=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Sensors;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sensors);\n\nvar _c;\n\n$RefreshReg$(_c, \"Sensors\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2Vuc29ycy50c3g/ZTQ5OCJdLCJuYW1lcyI6WyJTZW5zb3JzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNfYWRtaW4iLCJhY2Nlc3NfdG9rZW4iLCJnZXRDb29raWUiLCJwdXNoIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsIkFQSUVycm9yIiwic2V0QVBJRXJyb3IiLCJnZXRTZW5zb3JEZXRpbHMiLCJhcGlDYWxsIiwibWV0aG9kIiwidXJsIiwicmVzIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJzdHlsZXMiLCJjb3VudHJpZXNfZ3JpZCIsIm1hcCIsInNlbnNvciIsImlkIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBc0IsR0FBRyxTQUF6QkEsT0FBeUIsR0FBTTtBQUFBOztBQUNuQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBTUMsWUFBWSxHQUFHQyxpRUFBUyxDQUFDLGNBQUQsQ0FBOUI7O0FBRUEsUUFBSUQsWUFBSixFQUFrQjtBQUNoQkgsWUFBTSxDQUFDSyxJQUFQLENBQVksVUFBWjtBQUNEO0FBQ0YsR0FORDs7QUFRQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RKLFlBQVE7QUFDVCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQVZtQyxrQkFjWEssc0RBQVEsQ0FBQyxFQUFELENBZEc7QUFBQSxNQWM1QkMsSUFkNEI7QUFBQSxNQWN0QkMsT0Fkc0I7O0FBQUEsbUJBZUhGLHNEQUFRLENBQUMsSUFBRCxDQWZMO0FBQUEsTUFlNUJHLFFBZjRCO0FBQUEsTUFlbEJDLFdBZmtCOztBQWlCbkMsTUFBTUMsZUFBZTtBQUFBLGtWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0pDLCtEQUFPLENBQUM7QUFDeEJDLHNCQUFNLEVBQUUsS0FEZ0I7QUFFeEJDLG1CQUFHLEVBQUU7QUFGbUIsZUFBRCxDQURIOztBQUFBO0FBQ2hCQyxpQkFEZ0I7O0FBQUEsb0JBTWxCQSxHQUFHLElBQUksS0FBUCxJQUFnQkEsR0FBRyxJQUFJLEtBQXZCLElBQWdDQSxHQUFHLElBQUksS0FOckI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNEJBUVpBLEdBUlk7QUFBQSw4Q0FTYixLQVRhLHVCQWFiLEtBYmEsdUJBaUJiLEtBakJhO0FBQUE7O0FBQUE7QUFVaEJMLHlCQUFXLENBQUMsR0FBRCxDQUFYO0FBVmdCOztBQUFBO0FBY2hCQSx5QkFBVyxDQUFDLEdBQUQsQ0FBWDtBQWRnQjs7QUFBQTtBQWtCaEJBLHlCQUFXLENBQUMsR0FBRCxDQUFYO0FBbEJnQjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQXlCcEJGLHFCQUFPLENBQUNPLEdBQUQsQ0FBUDs7QUF6Qm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWZKLGVBQWU7QUFBQTtBQUFBO0FBQUEsS0FBckI7O0FBNkJBTix5REFBUyxDQUFDLFlBQU07QUFDZE0sbUJBQWU7QUFDaEIsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxXQUFLLEVBQUU7QUFBRUssYUFBSyxFQUFFLE1BQVQ7QUFBaUJDLGNBQU0sRUFBRSxNQUF6QjtBQUFpQ0MsaUJBQVMsRUFBRTtBQUE1QyxPQUFaO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFQyxrRUFBTSxDQUFDQyxjQUF2QjtBQUFBLG1CQUNHYixJQURILGFBQ0dBLElBREgsdUJBQ0dBLElBQUksQ0FBRWMsR0FBTixDQUFVLFVBQUNDLE1BQUQsRUFBWTtBQUNyQiw4QkFBTyxxRUFBQyw4REFBRDtBQUE0QixrQkFBTSxFQUFFQTtBQUFwQyxhQUFpQkEsTUFBTSxDQUFDQyxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0QsU0FGQSxDQURILEVBSUcsQ0FBQWhCLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFaUIsTUFBTixNQUFpQixDQUFqQixpQkFDQztBQUFBLGlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFERjtBQWlCRCxDQW5FRDs7R0FBTTFCLE87VUFDV0UscUQ7OztLQURYRixPO0FBcUVTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NlbnNvcnMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgU2Vuc29yQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZW5zb3JDYXJkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc2Vuc29ycy5tb2R1bGUuc2Nzc1wiO1xuXG5pbXBvcnQgeyBhcGlDYWxsIH0gZnJvbSBcIi4uL3NlcnZpY2UvY29tbW9uXCI7XG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiLi4vc2VydmljZS9jb29raWVcIjtcblxuY29uc3QgU2Vuc29yczogUmVhY3QuU0ZDPHt9PiA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGlzX2FkbWluID0gKCkgPT4ge1xuICAgIGNvbnN0IGFjY2Vzc190b2tlbiA9IGdldENvb2tpZShcImFjY2Vzc190b2tlblwiKTtcblxuICAgIGlmIChhY2Nlc3NfdG9rZW4pIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL3NlbnNvcnNcIik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaXNfYWRtaW4oKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW0FQSUVycm9yLCBzZXRBUElFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBnZXRTZW5zb3JEZXRpbHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXBpQ2FsbCh7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICB1cmw6IFwiL3NlbnNvci9cIixcbiAgICB9KTtcblxuICAgIGlmIChyZXMgPT0gXCI0MDRcIiB8fCByZXMgPT0gXCI0MDFcIiB8fCByZXMgPT0gXCI1MDBcIikge1xuICAgICAgLy8gaWYgQVBJIGRvZW4ndCByZXR1cm4gNDA0IG9yIDUwMCB0aGlzIHdpbGwgYmUgcmVuZGVyZWRcbiAgICAgIHN3aXRjaCAocmVzKSB7XG4gICAgICAgIGNhc2UgXCI0MDRcIjpcbiAgICAgICAgICBzZXRBUElFcnJvcig0MDQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCI1MDBcIjpcbiAgICAgICAgICBzZXRBUElFcnJvcig1MDApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCI0MDFcIjpcbiAgICAgICAgICBzZXRBUElFcnJvcig0MDEpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldERhdGEocmVzKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRTZW5zb3JEZXRpbHMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiNjBweFwiIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50cmllc19ncmlkfT5cbiAgICAgICAgICB7ZGF0YT8ubWFwKChzZW5zb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8U2Vuc29yQ2FyZCBrZXk9e3NlbnNvci5pZH0gc2Vuc29yPXtzZW5zb3J9IC8+O1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIHtkYXRhPy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHA+bm8gc2Vuc29yIGZvdW5kPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbnNvcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/sensors.tsx\n");

/***/ })

})