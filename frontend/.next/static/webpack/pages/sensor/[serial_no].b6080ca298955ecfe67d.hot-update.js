webpackHotUpdate_N_E("pages/sensor/[serial_no]",{

/***/ "./pages/sensor/[serial_no]/index.tsx":
/*!********************************************!*\
  !*** ./pages/sensor/[serial_no]/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/header */ \"./components/header.tsx\");\n/* harmony import */ var _service_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/common */ \"./service/common.ts\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/dasein/dev/explore_new/django-nextjs-realtime/frontend/pages/sensor/[serial_no]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Sensor = function Sensor() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var serial_no = router.query.serial_no;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      APIError = _useState2[0],\n      setAPIError = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      socketMessages = _useState3[0],\n      setSocketMessages = _useState3[1];\n\n  var webSocket = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n\n  var getSocketToken = /*#__PURE__*/function () {\n    var _ref = Object(_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(serial_no) {\n      var form_data, res;\n      return _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              form_data = new FormData();\n              form_data.append(\"serial_no\", serial_no);\n              _context.next = 4;\n              return Object(_service_common__WEBPACK_IMPORTED_MODULE_7__[\"apiCall\"])({\n                method: \"POST\",\n                url: \"/sensor/user_socket_token/\",\n                body: form_data\n              });\n\n            case 4:\n              res = _context.sent;\n\n              if (!(res == \"404\" || res == \"401\" || res == \"500\")) {\n                _context.next = 18;\n                break;\n              }\n\n              _context.t0 = res;\n              _context.next = _context.t0 === \"404\" ? 9 : _context.t0 === \"500\" ? 11 : _context.t0 === \"401\" ? 13 : 15;\n              break;\n\n            case 9:\n              setAPIError(404);\n              return _context.abrupt(\"break\", 16);\n\n            case 11:\n              setAPIError(500);\n              return _context.abrupt(\"break\", 16);\n\n            case 13:\n              setAPIError(401);\n              return _context.abrupt(\"break\", 16);\n\n            case 15:\n              return _context.abrupt(\"break\", 16);\n\n            case 16:\n              _context.next = 19;\n              break;\n\n            case 18:\n              setData(res);\n\n            case 19:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getSocketToken(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    if (!serial_no) {\n      return;\n    } else {\n      getSocketToken(serial_no);\n    }\n  }, [router]);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    if (!data) {\n      return;\n    }\n\n    webSocket.current = new WebSocket(\"ws://localhost:8000/liveHeartbeatV1?&token=\".concat(data.websocket_token));\n\n    webSocket.current.onmessage = function (message) {\n      var obj = JSON.parse(message.data);\n      console.log(obj);\n      setSocketMessages([].concat(Object(_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(socketMessages), [obj.data]));\n    };\n\n    return function () {\n      return webSocket.current.close();\n    };\n  }, [data]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        width: \"100%\",\n        height: \"100%\",\n        marginTop: \"60px\"\n      },\n      children: socketMessages.reverse().map(function (hearbeat) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n            children: hearbeat.numberOfPerson\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 15\n          }, _this)\n        }, hearbeat.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Sensor, \"UKNEc9ZFf01aLM2wMLj9YQz7DTs=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Sensor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sensor);\n\nvar _c;\n\n$RefreshReg$(_c, \"Sensor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2Vuc29yL1tzZXJpYWxfbm9dL2luZGV4LnRzeD83YTEyIl0sIm5hbWVzIjpbIlNlbnNvciIsInJvdXRlciIsInVzZVJvdXRlciIsInNlcmlhbF9ubyIsInF1ZXJ5IiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsIkFQSUVycm9yIiwic2V0QVBJRXJyb3IiLCJzb2NrZXRNZXNzYWdlcyIsInNldFNvY2tldE1lc3NhZ2VzIiwid2ViU29ja2V0IiwidXNlUmVmIiwiZ2V0U29ja2V0VG9rZW4iLCJmb3JtX2RhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImFwaUNhbGwiLCJtZXRob2QiLCJ1cmwiLCJib2R5IiwicmVzIiwidXNlRWZmZWN0IiwiY3VycmVudCIsIldlYlNvY2tldCIsIndlYnNvY2tldF90b2tlbiIsIm9ubWVzc2FnZSIsIm1lc3NhZ2UiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblRvcCIsInJldmVyc2UiLCJtYXAiLCJoZWFyYmVhdCIsIm51bWJlck9mUGVyc29uIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBcUIsR0FBRyxTQUF4QkEsTUFBd0IsR0FBTTtBQUFBOztBQUNsQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRGtDLE1BRTFCQyxTQUYwQixHQUVaRixNQUFNLENBQUNHLEtBRkssQ0FFMUJELFNBRjBCOztBQUFBLGtCQUlWRSxzREFBUSxDQUFDLElBQUQsQ0FKRTtBQUFBLE1BSTNCQyxJQUoyQjtBQUFBLE1BSXJCQyxPQUpxQjs7QUFBQSxtQkFLRkYsc0RBQVEsQ0FBQyxJQUFELENBTE47QUFBQSxNQUszQkcsUUFMMkI7QUFBQSxNQUtqQkMsV0FMaUI7O0FBQUEsbUJBTVVKLHNEQUFRLENBQUMsRUFBRCxD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QyxNO1VBQ1dFLHFEOzs7S0FEWEYsTTtBQWlGU0EscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zZW5zb3IvW3NlcmlhbF9ub10vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgeyBhcGlDYWxsIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2UvY29tbW9uXCI7XG5cbmNvbnN0IFNlbnNvcjogUmVhY3QuU0ZDPHt9PiA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgc2VyaWFsX25vIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtBUElFcnJvciwgc2V0QVBJRXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzb2NrZXRNZXNzYWdlcywgc2V0U29ja2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCB3ZWJTb2NrZXQgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgZ2V0U29ja2V0VG9rZW4gPSBhc3luYyAoc2VyaWFsX25vKSA9PiB7XG4gICAgbGV0IGZvcm1fZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1fZGF0YS5hcHBlbmQoXCJzZXJpYWxfbm9cIiwgc2VyaWFsX25vKTtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaUNhbGwoe1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIHVybDogXCIvc2Vuc29yL3VzZXJfc29ja2V0X3Rva2VuL1wiLFxuICAgICAgYm9keTogZm9ybV9kYXRhLFxuICAgIH0pO1xuXG4gICAgaWYgKHJlcyA9PSBcIjQwNFwiIHx8IHJlcyA9PSBcIjQwMVwiIHx8IHJlcyA9PSBcIjUwMFwiKSB7XG4gICAgICAvLyBpZiBBUEkgZG9lbid0IHJldHVybiA0MDQgb3IgNTAwIHRoaXMgd2lsbCBiZSByZW5kZXJlZFxuICAgICAgc3dpdGNoIChyZXMpIHtcbiAgICAgICAgY2FzZSBcIjQwNFwiOlxuICAgICAgICAgIHNldEFQSUVycm9yKDQwNCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIjUwMFwiOlxuICAgICAgICAgIHNldEFQSUVycm9yKDUwMCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIjQwMVwiOlxuICAgICAgICAgIHNldEFQSUVycm9yKDQwMSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RGF0YShyZXMpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2VyaWFsX25vKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGdldFNvY2tldFRva2VuKHNlcmlhbF9ubyk7XG4gICAgfVxuICB9LCBbcm91dGVyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2ViU29ja2V0LmN1cnJlbnQgPSBuZXcgV2ViU29ja2V0KFxuICAgICAgYHdzOi8vbG9jYWxob3N0OjgwMDAvbGl2ZUhlYXJ0YmVhdFYxPyZ0b2tlbj0ke2RhdGEud2Vic29ja2V0X3Rva2VufWBcbiAgICApO1xuICAgIHdlYlNvY2tldC5jdXJyZW50Lm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhvYmopO1xuICAgICAgc2V0U29ja2V0TWVzc2FnZXMoWy4uLnNvY2tldE1lc3NhZ2VzLCBvYmouZGF0YV0pO1xuICAgIH07XG4gICAgcmV0dXJuICgpID0+IHdlYlNvY2tldC5jdXJyZW50LmNsb3NlKCk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG1hcmdpblRvcDogXCI2MHB4XCIgfX0+XG4gICAgICAgIHtzb2NrZXRNZXNzYWdlcy5yZXZlcnNlKCkubWFwKChoZWFyYmVhdCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aGVhcmJlYXQuaWR9PlxuICAgICAgICAgICAgICA8aDQ+e2hlYXJiZWF0Lm51bWJlck9mUGVyc29ufTwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2Vuc29yO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sensor/[serial_no]/index.tsx\n");

/***/ })

})