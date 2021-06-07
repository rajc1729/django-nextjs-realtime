webpackHotUpdate_N_E("pages/sensor/[serial_no]",{

/***/ "./pages/sensor/[serial_no]/index.tsx":
/*!********************************************!*\
  !*** ./pages/sensor/[serial_no]/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/header */ \"./components/header.tsx\");\n/* harmony import */ var _service_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/common */ \"./service/common.ts\");\n/* harmony import */ var _styles_sensors_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../styles/sensors.module.scss */ \"./styles/sensors.module.scss\");\n/* harmony import */ var _styles_sensors_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_sensors_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\nvar _jsxFileName = \"/home/dasein/dev/explore_new/django-nextjs-realtime/frontend/pages/sensor/[serial_no]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Sensor = function Sensor() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var serial_no = router.query.serial_no;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      APIError = _useState2[0],\n      setAPIError = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      socketMessages = _useState3[0],\n      setSocketMessages = _useState3[1];\n\n  var webSocket = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n\n  var getSocketToken = /*#__PURE__*/function () {\n    var _ref = Object(_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(serial_no) {\n      var form_data, res;\n      return _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              form_data = new FormData();\n              form_data.append(\"serial_no\", serial_no);\n              _context.next = 4;\n              return Object(_service_common__WEBPACK_IMPORTED_MODULE_7__[\"apiCall\"])({\n                method: \"POST\",\n                url: \"/sensor/user_socket_token/\",\n                body: form_data\n              });\n\n            case 4:\n              res = _context.sent;\n\n              if (!(res == \"404\" || res == \"401\" || res == \"500\")) {\n                _context.next = 18;\n                break;\n              }\n\n              _context.t0 = res;\n              _context.next = _context.t0 === \"404\" ? 9 : _context.t0 === \"500\" ? 11 : _context.t0 === \"401\" ? 13 : 15;\n              break;\n\n            case 9:\n              setAPIError(404);\n              return _context.abrupt(\"break\", 16);\n\n            case 11:\n              setAPIError(500);\n              return _context.abrupt(\"break\", 16);\n\n            case 13:\n              setAPIError(401);\n              return _context.abrupt(\"break\", 16);\n\n            case 15:\n              return _context.abrupt(\"break\", 16);\n\n            case 16:\n              _context.next = 19;\n              break;\n\n            case 18:\n              setData(res);\n\n            case 19:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getSocketToken(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    if (!serial_no) {\n      return;\n    } else {\n      getSocketToken(serial_no);\n    }\n  }, [router]);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    if (!data) {\n      return;\n    }\n\n    webSocket.current = new WebSocket(\"ws://localhost:8000/liveHeartbeatV1?&token=\".concat(data.websocket_token));\n\n    webSocket.current.onmessage = function (message) {\n      var obj = JSON.parse(message.data);\n      console.log(obj);\n      setSocketMessages([].concat(Object(_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(socketMessages), [obj.data]));\n    };\n\n    return function () {\n      return webSocket.current.close();\n    };\n  }, [data]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_sensors_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.sensor_detail_container,\n      children: socketMessages.reverse().map(function (hearbeat) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_sensors_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.sensor_detail,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n            children: hearbeat.numberOfPerson\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 15\n          }, _this)\n        }, hearbeat.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Sensor, \"UKNEc9ZFf01aLM2wMLj9YQz7DTs=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Sensor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sensor);\n\nvar _c;\n\n$RefreshReg$(_c, \"Sensor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2Vuc29yL1tzZXJpYWxfbm9dL2luZGV4LnRzeD83YTEyIl0sIm5hbWVzIjpbIlNlbnNvciIsInJvdXRlciIsInVzZVJvdXRlciIsInNlcmlhbF9ubyIsInF1ZXJ5IiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsIkFQSUVycm9yIiwic2V0QVBJRXJyb3IiLCJzb2NrZXRNZXNzYWdlcyIsInNldFNvY2tldE1lc3NhZ2VzIiwid2ViU29ja2V0IiwidXNlUmVmIiwiZ2V0U29ja2V0VG9rZW4iLCJmb3JtX2RhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImFwaUNhbGwiLCJtZXRob2QiLCJ1cmwiLCJib2R5IiwicmVzIiwidXNlRWZmZWN0IiwiY3VycmVudCIsIldlYlNvY2tldCIsIndlYnNvY2tldF90b2tlbiIsIm9ubWVzc2FnZSIsIm1lc3NhZ2UiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJzdHlsZXMiLCJzZW5zb3JfZGV0YWlsX2NvbnRhaW5lciIsInJldmVyc2UiLCJtYXAiLCJoZWFyYmVhdCIsInNlbnNvcl9kZXRhaWwiLCJudW1iZXJPZlBlcnNvbiIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFxQixHQUFHLFNBQXhCQSxNQUF3QixHQUFNO0FBQUE7O0FBQ2xDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEa0MsTUFFMUJDLFNBRjBCLEdBRVpGLE1BQU0sQ0FBQ0csS0FGSyxDQUUxQkQsU0FGMEI7O0FBQUEsa0JBSVZFLHNEQUFRLENBQUMsSUFBRCxDQUpFO0FBQUEsTUFJM0JDLElBSjJCO0FBQUEsTUFJckJDLE9BSnFCOztBQUFBLG1CQUtGRixzREFBUSxDQUFDLElBQUQsQ0FMTjtBQUFBLE1BSzNCRyxRQUwyQjtBQUFBLE1BS2pCQyxXQUxpQjs7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Q0EvRUQ7O0dBQU0xQyxNO1VBQ1dFLHFEOzs7S0FEWEYsTTtBQWlGU0EscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zZW5zb3IvW3NlcmlhbF9ub10vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgeyBhcGlDYWxsIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2UvY29tbW9uXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvc2Vuc29ycy5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBTZW5zb3I6IFJlYWN0LlNGQzx7fT4gPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHNlcmlhbF9ubyB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbQVBJRXJyb3IsIHNldEFQSUVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc29ja2V0TWVzc2FnZXMsIHNldFNvY2tldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3Qgd2ViU29ja2V0ID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGdldFNvY2tldFRva2VuID0gYXN5bmMgKHNlcmlhbF9ubykgPT4ge1xuICAgIGxldCBmb3JtX2RhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtX2RhdGEuYXBwZW5kKFwic2VyaWFsX25vXCIsIHNlcmlhbF9ubyk7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBhcGlDYWxsKHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICB1cmw6IFwiL3NlbnNvci91c2VyX3NvY2tldF90b2tlbi9cIixcbiAgICAgIGJvZHk6IGZvcm1fZGF0YSxcbiAgICB9KTtcblxuICAgIGlmIChyZXMgPT0gXCI0MDRcIiB8fCByZXMgPT0gXCI0MDFcIiB8fCByZXMgPT0gXCI1MDBcIikge1xuICAgICAgLy8gaWYgQVBJIGRvZW4ndCByZXR1cm4gNDA0IG9yIDUwMCB0aGlzIHdpbGwgYmUgcmVuZGVyZWRcbiAgICAgIHN3aXRjaCAocmVzKSB7XG4gICAgICAgIGNhc2UgXCI0MDRcIjpcbiAgICAgICAgICBzZXRBUElFcnJvcig0MDQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCI1MDBcIjpcbiAgICAgICAgICBzZXRBUElFcnJvcig1MDApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCI0MDFcIjpcbiAgICAgICAgICBzZXRBUElFcnJvcig0MDEpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldERhdGEocmVzKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNlcmlhbF9ubykge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZXRTb2NrZXRUb2tlbihzZXJpYWxfbm8pO1xuICAgIH1cbiAgfSwgW3JvdXRlcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdlYlNvY2tldC5jdXJyZW50ID0gbmV3IFdlYlNvY2tldChcbiAgICAgIGB3czovL2xvY2FsaG9zdDo4MDAwL2xpdmVIZWFydGJlYXRWMT8mdG9rZW49JHtkYXRhLndlYnNvY2tldF90b2tlbn1gXG4gICAgKTtcbiAgICB3ZWJTb2NrZXQuY3VycmVudC5vbm1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZShtZXNzYWdlLmRhdGEpO1xuICAgICAgY29uc29sZS5sb2cob2JqKTtcbiAgICAgIHNldFNvY2tldE1lc3NhZ2VzKFsuLi5zb2NrZXRNZXNzYWdlcywgb2JqLmRhdGFdKTtcbiAgICB9O1xuICAgIHJldHVybiAoKSA9PiB3ZWJTb2NrZXQuY3VycmVudC5jbG9zZSgpO1xuICB9LCBbZGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2Vuc29yX2RldGFpbF9jb250YWluZXJ9PlxuICAgICAgICB7c29ja2V0TWVzc2FnZXMucmV2ZXJzZSgpLm1hcCgoaGVhcmJlYXQpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZW5zb3JfZGV0YWlsfSBrZXk9e2hlYXJiZWF0LmlkfT5cbiAgICAgICAgICAgICAgPGg0PntoZWFyYmVhdC5udW1iZXJPZlBlcnNvbn08L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbnNvcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sensor/[serial_no]/index.tsx\n");

/***/ })

})