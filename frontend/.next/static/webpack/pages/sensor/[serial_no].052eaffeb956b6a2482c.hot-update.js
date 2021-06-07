webpackHotUpdate_N_E("pages/sensor/[serial_no]",{

/***/ "./pages/sensor/[serial_no]/index.tsx":
/*!********************************************!*\
  !*** ./pages/sensor/[serial_no]/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/header */ \"./components/header.tsx\");\n/* harmony import */ var _service_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/common */ \"./service/common.ts\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/dasein/dev/explore_new/django-nextjs-realtime/frontend/pages/sensor/[serial_no]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Sensor = function Sensor() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var serial_no = router.query.serial_no;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      APIError = _useState2[0],\n      setAPIError = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      socketMessages = _useState3[0],\n      setSocketMessages = _useState3[1];\n\n  var webSocket = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n\n  var getSocketToken = /*#__PURE__*/function () {\n    var _ref = Object(_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(serial_no) {\n      var form_data, res;\n      return _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              form_data = new FormData();\n              form_data.append(\"serial_no\", serial_no);\n              _context.next = 4;\n              return Object(_service_common__WEBPACK_IMPORTED_MODULE_7__[\"apiCall\"])({\n                method: \"POST\",\n                url: \"/sensor/user_socket_token/\",\n                body: form_data\n              });\n\n            case 4:\n              res = _context.sent;\n\n              if (!(res == \"404\" || res == \"401\" || res == \"500\")) {\n                _context.next = 18;\n                break;\n              }\n\n              _context.t0 = res;\n              _context.next = _context.t0 === \"404\" ? 9 : _context.t0 === \"500\" ? 11 : _context.t0 === \"401\" ? 13 : 15;\n              break;\n\n            case 9:\n              setAPIError(404);\n              return _context.abrupt(\"break\", 16);\n\n            case 11:\n              setAPIError(500);\n              return _context.abrupt(\"break\", 16);\n\n            case 13:\n              setAPIError(401);\n              return _context.abrupt(\"break\", 16);\n\n            case 15:\n              return _context.abrupt(\"break\", 16);\n\n            case 16:\n              _context.next = 19;\n              break;\n\n            case 18:\n              setData(res);\n\n            case 19:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getSocketToken(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    if (!serial_no) {\n      return;\n    } else {\n      getSocketToken(serial_no);\n    }\n  }, [router]);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    if (!data) {\n      return;\n    }\n\n    webSocket.current = new WebSocket(\"ws://localhost:8000/liveHeartbeatV1?&token=\".concat(data.websocket_token));\n\n    webSocket.current.onmessage = function (message) {\n      var obj = JSON.parse(message.data);\n      setSocketMessages([].concat(Object(_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(socketMessages), [obj]));\n    };\n\n    return function () {\n      return webSocket.current.close();\n    };\n  }, [data]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        width: \"100%\",\n        height: \"100%\",\n        marginTop: \"60px\"\n      },\n      children: socketMessages && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: socketMessages\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 28\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Sensor, \"UKNEc9ZFf01aLM2wMLj9YQz7DTs=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Sensor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sensor);\n\nvar _c;\n\n$RefreshReg$(_c, \"Sensor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2Vuc29yL1tzZXJpYWxfbm9dL2luZGV4LnRzeD83YTEyIl0sIm5hbWVzIjpbIlNlbnNvciIsInJvdXRlciIsInVzZVJvdXRlciIsInNlcmlhbF9ubyIsInF1ZXJ5IiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsIkFQSUVycm9yIiwic2V0QVBJRXJyb3IiLCJzb2NrZXRNZXNzYWdlcyIsInNldFNvY2tldE1lc3NhZ2VzIiwid2ViU29ja2V0IiwidXNlUmVmIiwiZ2V0U29ja2V0VG9rZW4iLCJmb3JtX2RhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImFwaUNhbGwiLCJtZXRob2QiLCJ1cmwiLCJib2R5IiwicmVzIiwidXNlRWZmZWN0IiwiY3VycmVudCIsIldlYlNvY2tldCIsIndlYnNvY2tldF90b2tlbiIsIm9ubWVzc2FnZSIsIm1lc3NhZ2UiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJjbG9zZSIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQXFCLEdBQUcsU0FBeEJBLE1BQXdCLEdBQU07QUFBQTs7QUFDbEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURrQyxNQUUxQkMsU0FGMEIsR0FFWkYsTUFBTSxDQUFDRyxLQUZLLENBRTFCRCxTQUYwQjs7QUFBQSxrQkFJVkUsc0RBQVEsQ0FBQyxJQUFELENBSkU7QUFBQSxNQUkzQkMsSUFKMkI7QUFBQSxNQUlyQkMsT0FKcUI7O0FBQUEsbUJBS0ZGLHNEQUFRLENBQUMsSUFBRCxDQUxOO0FBQUEsTUFLM0JHLFFBTDJCO0FBQUEsTUFLakJDLFdBTGlCOztBQUFBLG1CQU1VSixzREFBUSxDQUFDLEVBQUQsQ0FObEI7QUFBQSxNQU0zQkssY0FOMkI7QUFBQSxNQU1YQyxpQkFOVzs7QUFPbEMsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBeEI7O0FBRUEsTUFBTUMsY0FBYztBQUFBLGtWQUFHLGlCQUFPWCxTQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQlksdUJBRGlCLEdBQ0wsSUFBSUMsUUFBSixFQURLO0FBRXJCRCx1QkFBUyxDQUFDRSxNQUFWLENBQWlCLFdBQWpCLEVBQThCZCxTQUE5QjtBQUZxQjtBQUFBLHFCQUlIZSwrREFBTyxDQUFDO0FBQ3hCQyxzQkFBTSxFQUFFLE1BRGdCO0FBRXhCQyxtQkFBRyxFQUFFLDRCQUZtQjtBQUd4QkMsb0JBQUksRUFBRU47QUFIa0IsZUFBRCxDQUpKOztBQUFBO0FBSWZPLGlCQUplOztBQUFBLG9CQVVqQkEsR0FBRyxJQUFJLEtBQVAsSUFBZ0JBLEdBQUcsSUFBSSxLQUF2QixJQUFnQ0EsR0FBRyxJQUFJLEtBVnRCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDRCQVlYQSxHQVpXO0FBQUEsOENBYVosS0FiWSx1QkFpQlosS0FqQlksd0JBcUJaLEtBckJZO0FBQUE7O0FBQUE7QUFjZmIseUJBQVcsQ0FBQyxHQUFELENBQVg7QUFkZTs7QUFBQTtBQWtCZkEseUJBQVcsQ0FBQyxHQUFELENBQVg7QUFsQmU7O0FBQUE7QUFzQmZBLHlCQUFXLENBQUMsR0FBRCxDQUFYO0FBdEJlOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBNkJuQkYscUJBQU8sQ0FBQ2UsR0FBRCxDQUFQOztBQTdCbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZFIsY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFpQ0FTLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ3BCLFNBQUwsRUFBZ0I7QUFDZDtBQUNELEtBRkQsTUFFTztBQUNMVyxvQkFBYyxDQUFDWCxTQUFELENBQWQ7QUFDRDtBQUNGLEdBTlEsRUFNTixDQUFDRixNQUFELENBTk0sQ0FBVDtBQVFBc0IseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDakIsSUFBTCxFQUFXO0FBQ1Q7QUFDRDs7QUFDRE0sYUFBUyxDQUFDWSxPQUFWLEdBQW9CLElBQUlDLFNBQUosc0RBQzRCbkIsSUFBSSxDQUFDb0IsZUFEakMsRUFBcEI7O0FBR0FkLGFBQVMsQ0FBQ1ksT0FBVixDQUFrQkcsU0FBbEIsR0FBOEIsVUFBQ0MsT0FBRCxFQUFhO0FBQ3pDLFVBQU1DLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILE9BQU8sQ0FBQ3RCLElBQW5CLENBQVo7QUFDQUssdUJBQWlCLGlMQUFLRCxjQUFMLElBQXFCbUIsR0FBckIsR0FBakI7QUFDRCxLQUhEOztBQUlBLFdBQU87QUFBQSxhQUFNakIsU0FBUyxDQUFDWSxPQUFWLENBQWtCUSxLQUFsQixFQUFOO0FBQUEsS0FBUDtBQUNELEdBWlEsRUFZTixDQUFDMUIsSUFBRCxDQVpNLENBQVQ7QUFjQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssV0FBSyxFQUFFO0FBQUUyQixhQUFLLEVBQUUsTUFBVDtBQUFpQkMsY0FBTSxFQUFFLE1BQXpCO0FBQWlDQyxpQkFBUyxFQUFFO0FBQTVDLE9BQVo7QUFBQSxnQkFDR3pCLGNBQWMsaUJBQUk7QUFBQSxrQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURGO0FBUUQsQ0F4RUQ7O0dBQU1WLE07VUFDV0UscUQ7OztLQURYRixNO0FBMEVTQSxxRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NlbnNvci9bc2VyaWFsX25vXS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCB7IGFwaUNhbGwgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZS9jb21tb25cIjtcblxuY29uc3QgU2Vuc29yOiBSZWFjdC5TRkM8e30+ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBzZXJpYWxfbm8gfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW0FQSUVycm9yLCBzZXRBUElFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3NvY2tldE1lc3NhZ2VzLCBzZXRTb2NrZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHdlYlNvY2tldCA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBnZXRTb2NrZXRUb2tlbiA9IGFzeW5jIChzZXJpYWxfbm8pID0+IHtcbiAgICBsZXQgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybV9kYXRhLmFwcGVuZChcInNlcmlhbF9ub1wiLCBzZXJpYWxfbm8pO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXBpQ2FsbCh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBcIi9zZW5zb3IvdXNlcl9zb2NrZXRfdG9rZW4vXCIsXG4gICAgICBib2R5OiBmb3JtX2RhdGEsXG4gICAgfSk7XG5cbiAgICBpZiAocmVzID09IFwiNDA0XCIgfHwgcmVzID09IFwiNDAxXCIgfHwgcmVzID09IFwiNTAwXCIpIHtcbiAgICAgIC8vIGlmIEFQSSBkb2VuJ3QgcmV0dXJuIDQwNCBvciA1MDAgdGhpcyB3aWxsIGJlIHJlbmRlcmVkXG4gICAgICBzd2l0Y2ggKHJlcykge1xuICAgICAgICBjYXNlIFwiNDA0XCI6XG4gICAgICAgICAgc2V0QVBJRXJyb3IoNDA0KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiNTAwXCI6XG4gICAgICAgICAgc2V0QVBJRXJyb3IoNTAwKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiNDAxXCI6XG4gICAgICAgICAgc2V0QVBJRXJyb3IoNDAxKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXREYXRhKHJlcyk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzZXJpYWxfbm8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0U29ja2V0VG9rZW4oc2VyaWFsX25vKTtcbiAgICB9XG4gIH0sIFtyb3V0ZXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3ZWJTb2NrZXQuY3VycmVudCA9IG5ldyBXZWJTb2NrZXQoXG4gICAgICBgd3M6Ly9sb2NhbGhvc3Q6ODAwMC9saXZlSGVhcnRiZWF0VjE/JnRva2VuPSR7ZGF0YS53ZWJzb2NrZXRfdG9rZW59YFxuICAgICk7XG4gICAgd2ViU29ja2V0LmN1cnJlbnQub25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICAgIGNvbnN0IG9iaiA9IEpTT04ucGFyc2UobWVzc2FnZS5kYXRhKTtcbiAgICAgIHNldFNvY2tldE1lc3NhZ2VzKFsuLi5zb2NrZXRNZXNzYWdlcywgb2JqXSk7XG4gICAgfTtcbiAgICByZXR1cm4gKCkgPT4gd2ViU29ja2V0LmN1cnJlbnQuY2xvc2UoKTtcbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgbWFyZ2luVG9wOiBcIjYwcHhcIiB9fT5cbiAgICAgICAge3NvY2tldE1lc3NhZ2VzICYmIDxoMT57c29ja2V0TWVzc2FnZXN9PC9oMT59XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbnNvcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sensor/[serial_no]/index.tsx\n");

/***/ })

})