webpackHotUpdate_N_E("pages/sensor/[serial_no]",{

/***/ "./pages/sensor/[serial_no]/index.tsx":
/*!********************************************!*\
  !*** ./pages/sensor/[serial_no]/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/header */ \"./components/header.tsx\");\n/* harmony import */ var _service_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/common */ \"./service/common.ts\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/dasein/dev/explore_new/django-nextjs-realtime/frontend/pages/sensor/[serial_no]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Sensor = function Sensor() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var serial_no = router.query.serial_no;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      APIError = _useState2[0],\n      setAPIError = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      socketMessages = _useState3[0],\n      setSocketMessages = _useState3[1];\n\n  var webSocket = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n\n  var getSocketToken = /*#__PURE__*/function () {\n    var _ref = Object(_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(serial_no) {\n      var form_data, res;\n      return _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(\"------->\", serial_no);\n              form_data = new FormData();\n              form_data.append(\"serial_no\", serial_no);\n              _context.next = 5;\n              return Object(_service_common__WEBPACK_IMPORTED_MODULE_7__[\"apiCall\"])({\n                method: \"POST\",\n                url: \"/sensor/user_socket_token/\",\n                body: form_data\n              });\n\n            case 5:\n              res = _context.sent;\n\n              if (!(res == \"404\" || res == \"401\" || res == \"500\")) {\n                _context.next = 19;\n                break;\n              }\n\n              _context.t0 = res;\n              _context.next = _context.t0 === \"404\" ? 10 : _context.t0 === \"500\" ? 12 : _context.t0 === \"401\" ? 14 : 16;\n              break;\n\n            case 10:\n              setAPIError(404);\n              return _context.abrupt(\"break\", 17);\n\n            case 12:\n              setAPIError(500);\n              return _context.abrupt(\"break\", 17);\n\n            case 14:\n              setAPIError(401);\n              return _context.abrupt(\"break\", 17);\n\n            case 16:\n              return _context.abrupt(\"break\", 17);\n\n            case 17:\n              _context.next = 20;\n              break;\n\n            case 19:\n              setData(res);\n\n            case 20:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getSocketToken(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    if (!serial_no) {\n      return;\n    } else {\n      console.log(serial_no);\n      getSocketToken(serial_no);\n    }\n  }, [router]);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    if (!data) {\n      return;\n    }\n\n    webSocket.current = new WebSocket(\"ws://localhost:8000/liveHeartbeatV1?&token=\".concat(data.websocket_token));\n\n    webSocket.current.onmessage = function (message) {\n      var obj = JSON.parse(message.data);\n      setSocketMessages([].concat(Object(_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(socketMessages), [obj]));\n    };\n\n    return function () {\n      return webSocket.current.close();\n    };\n  }, [data]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        width: \"100%\",\n        height: \"100%\",\n        marginTop: \"60px\"\n      },\n      children: socketMessages && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"socketMessages.data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 28\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Sensor, \"UKNEc9ZFf01aLM2wMLj9YQz7DTs=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Sensor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sensor);\n\nvar _c;\n\n$RefreshReg$(_c, \"Sensor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2Vuc29yL1tzZXJpYWxfbm9dL2luZGV4LnRzeD83YTEyIl0sIm5hbWVzIjpbIlNlbnNvciIsInJvdXRlciIsInVzZVJvdXRlciIsInNlcmlhbF9ubyIsInF1ZXJ5IiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsIkFQSUVycm9yIiwic2V0QVBJRXJyb3IiLCJzb2NrZXRNZXNzYWdlcyIsInNldFNvY2tldE1lc3NhZ2VzIiwid2ViU29ja2V0IiwidXNlUmVmIiwiZ2V0U29ja2V0VG9rZW4iLCJjb25zb2xlIiwibG9nIiwiZm9ybV9kYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJhcGlDYWxsIiwibWV0aG9kIiwidXJsIiwiYm9keSIsInJlcyIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJXZWJTb2NrZXQiLCJ3ZWJzb2NrZXRfdG9rZW4iLCJvbm1lc3NhZ2UiLCJtZXNzYWdlIiwib2JqIiwiSlNPTiIsInBhcnNlIiwiY2xvc2UiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFxQixHQUFHLFNBQXhCQSxNQUF3QixHQUFNO0FBQUE7O0FBQ2xDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEa0MsTUFFMUJDLFNBRjBCLEdBRVpGLE1BQU0sQ0FBQ0csS0FGSyxDQUUxQkQsU0FGMEI7O0FBQUEsa0JBSVZFLHNEQUFRLENBQUMsSUFBRCxDQUpFO0FBQUEsTUFJM0JDLElBSjJCO0FBQUEsTUFJckJDLE9BSnFCOztBQUFBLG1CQUtGRixzREFBUSxDQUFDLElBQUQsQ0FMTjtBQUFBLE1BSzNCRyxRQUwyQjtBQUFBLE1BS2pCQyxXQUxpQjs7QUFBQSxtQkFNVUosc0RBQVEsQ0FBQyxFQUFELENBTmxCO0FBQUEsTUFNM0JLLGNBTjJCO0FBQUEsTUFNWEMsaUJBTlc7O0FBT2xDLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhCOztBQUVBLE1BQU1DLGNBQWM7QUFBQSxrVkFBRyxpQkFBT1gsU0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckJZLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCYixTQUF4QjtBQUNNYyx1QkFGZSxHQUVILElBQUlDLFFBQUosRUFGRztBQUdyQkQsdUJBQVMsQ0FBQ0UsTUFBVixDQUFpQixXQUFqQixFQUE4QmhCLFNBQTlCO0FBSHFCO0FBQUEscUJBS0hpQiwrREFBTyxDQUFDO0FBQ3hCQyxzQkFBTSxFQUFFLE1BRGdCO0FBRXhCQyxtQkFBRyxFQUFFLDRCQUZtQjtBQUd4QkMsb0JBQUksRUFBRU47QUFIa0IsZUFBRCxDQUxKOztBQUFBO0FBS2ZPLGlCQUxlOztBQUFBLG9CQVdqQkEsR0FBRyxJQUFJLEtBQVAsSUFBZ0JBLEdBQUcsSUFBSSxLQUF2QixJQUFnQ0EsR0FBRyxJQUFJLEtBWHRCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDRCQWFYQSxHQWJXO0FBQUEsOENBY1osS0FkWSx3QkFrQlosS0FsQlksd0JBc0JaLEtBdEJZO0FBQUE7O0FBQUE7QUFlZmYseUJBQVcsQ0FBQyxHQUFELENBQVg7QUFmZTs7QUFBQTtBQW1CZkEseUJBQVcsQ0FBQyxHQUFELENBQVg7QUFuQmU7O0FBQUE7QUF1QmZBLHlCQUFXLENBQUMsR0FBRCxDQUFYO0FBdkJlOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBOEJuQkYscUJBQU8sQ0FBQ2lCLEdBQUQsQ0FBUDs7QUE5Qm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWRWLGNBQWM7QUFBQTtBQUFBO0FBQUEsS0FBcEI7O0FBa0NBVyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUN0QixTQUFMLEVBQWdCO0FBQ2Q7QUFDRCxLQUZELE1BRU87QUFDTFksYUFBTyxDQUFDQyxHQUFSLENBQVliLFNBQVo7QUFDQVcsb0JBQWMsQ0FBQ1gsU0FBRCxDQUFkO0FBQ0Q7QUFDRixHQVBRLEVBT04sQ0FBQ0YsTUFBRCxDQVBNLENBQVQ7QUFTQXdCLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ25CLElBQUwsRUFBVztBQUNUO0FBQ0Q7O0FBQ0RNLGFBQVMsQ0FBQ2MsT0FBVixHQUFvQixJQUFJQyxTQUFKLHNEQUM0QnJCLElBQUksQ0FBQ3NCLGVBRGpDLEVBQXBCOztBQUdBaEIsYUFBUyxDQUFDYyxPQUFWLENBQWtCRyxTQUFsQixHQUE4QixVQUFDQyxPQUFELEVBQWE7QUFDekMsVUFBTUMsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsT0FBTyxDQUFDeEIsSUFBbkIsQ0FBWjtBQUNBSyx1QkFBaUIsaUxBQUtELGNBQUwsSUFBcUJxQixHQUFyQixHQUFqQjtBQUNELEtBSEQ7O0FBSUEsV0FBTztBQUFBLGFBQU1uQixTQUFTLENBQUNjLE9BQVYsQ0FBa0JRLEtBQWxCLEVBQU47QUFBQSxLQUFQO0FBQ0QsR0FaUSxFQVlOLENBQUM1QixJQUFELENBWk0sQ0FBVDtBQWNBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxXQUFLLEVBQUU7QUFBRTZCLGFBQUssRUFBRSxNQUFUO0FBQWlCQyxjQUFNLEVBQUUsTUFBekI7QUFBaUNDLGlCQUFTLEVBQUU7QUFBNUMsT0FBWjtBQUFBLGdCQUNHM0IsY0FBYyxpQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFERjtBQVFELENBMUVEOztHQUFNVixNO1VBQ1dFLHFEOzs7S0FEWEYsTTtBQTRFU0EscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zZW5zb3IvW3NlcmlhbF9ub10vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgeyBhcGlDYWxsIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2UvY29tbW9uXCI7XG5cbmNvbnN0IFNlbnNvcjogUmVhY3QuU0ZDPHt9PiA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgc2VyaWFsX25vIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtBUElFcnJvciwgc2V0QVBJRXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzb2NrZXRNZXNzYWdlcywgc2V0U29ja2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCB3ZWJTb2NrZXQgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgZ2V0U29ja2V0VG9rZW4gPSBhc3luYyAoc2VyaWFsX25vKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCItLS0tLS0tPlwiLCBzZXJpYWxfbm8pO1xuICAgIGNvbnN0IGZvcm1fZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1fZGF0YS5hcHBlbmQoXCJzZXJpYWxfbm9cIiwgc2VyaWFsX25vKTtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaUNhbGwoe1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIHVybDogXCIvc2Vuc29yL3VzZXJfc29ja2V0X3Rva2VuL1wiLFxuICAgICAgYm9keTogZm9ybV9kYXRhLFxuICAgIH0pO1xuXG4gICAgaWYgKHJlcyA9PSBcIjQwNFwiIHx8IHJlcyA9PSBcIjQwMVwiIHx8IHJlcyA9PSBcIjUwMFwiKSB7XG4gICAgICAvLyBpZiBBUEkgZG9lbid0IHJldHVybiA0MDQgb3IgNTAwIHRoaXMgd2lsbCBiZSByZW5kZXJlZFxuICAgICAgc3dpdGNoIChyZXMpIHtcbiAgICAgICAgY2FzZSBcIjQwNFwiOlxuICAgICAgICAgIHNldEFQSUVycm9yKDQwNCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIjUwMFwiOlxuICAgICAgICAgIHNldEFQSUVycm9yKDUwMCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIjQwMVwiOlxuICAgICAgICAgIHNldEFQSUVycm9yKDQwMSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RGF0YShyZXMpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2VyaWFsX25vKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKHNlcmlhbF9ubyk7XG4gICAgICBnZXRTb2NrZXRUb2tlbihzZXJpYWxfbm8pO1xuICAgIH1cbiAgfSwgW3JvdXRlcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdlYlNvY2tldC5jdXJyZW50ID0gbmV3IFdlYlNvY2tldChcbiAgICAgIGB3czovL2xvY2FsaG9zdDo4MDAwL2xpdmVIZWFydGJlYXRWMT8mdG9rZW49JHtkYXRhLndlYnNvY2tldF90b2tlbn1gXG4gICAgKTtcbiAgICB3ZWJTb2NrZXQuY3VycmVudC5vbm1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZShtZXNzYWdlLmRhdGEpO1xuICAgICAgc2V0U29ja2V0TWVzc2FnZXMoWy4uLnNvY2tldE1lc3NhZ2VzLCBvYmpdKTtcbiAgICB9O1xuICAgIHJldHVybiAoKSA9PiB3ZWJTb2NrZXQuY3VycmVudC5jbG9zZSgpO1xuICB9LCBbZGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiNjBweFwiIH19PlxuICAgICAgICB7c29ja2V0TWVzc2FnZXMgJiYgPGgxPnNvY2tldE1lc3NhZ2VzLmRhdGE8L2gxPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2Vuc29yO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sensor/[serial_no]/index.tsx\n");

/***/ })

})