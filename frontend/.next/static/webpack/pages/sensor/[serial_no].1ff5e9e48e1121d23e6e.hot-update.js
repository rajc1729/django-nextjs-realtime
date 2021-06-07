webpackHotUpdate_N_E("pages/sensor/[serial_no]",{

/***/ "./service/common.ts":
/*!***************************!*\
  !*** ./service/common.ts ***!
  \***************************/
/*! exports provided: apiCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiCall\", function() { return apiCall; });\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/environment */ \"./config/environment.ts\");\n/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookie */ \"./service/cookie.ts\");\n\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar apiCall = /*#__PURE__*/function () {\n  var _ref2 = Object(_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n    var method, url, body, headers, url_, myHeaders, access_token, _iterator, _step, pair, requestOptions;\n\n    return _home_dasein_dev_explore_new_django_nextjs_realtime_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            method = _ref.method, url = _ref.url, body = _ref.body, headers = _ref.headers;\n            url_ = \"\".concat(_config_environment__WEBPACK_IMPORTED_MODULE_2__[\"apiBaseUrl\"].url).concat(url);\n            myHeaders = new Headers();\n            access_token = Object(_cookie__WEBPACK_IMPORTED_MODULE_3__[\"getCookie\"])(\"access_token\");\n            myHeaders.append(\"Authorization\", \"Bearer \" + access_token);\n            myHeaders.append(\"Content-Type\", \"application/json\");\n            _iterator = _createForOfIteratorHelper(body.entries());\n\n            try {\n              for (_iterator.s(); !(_step = _iterator.n()).done;) {\n                pair = _step.value;\n                console.log(pair[0] + \", \" + pair[1]);\n              }\n            } catch (err) {\n              _iterator.e(err);\n            } finally {\n              _iterator.f();\n            }\n\n            requestOptions = {\n              method: method,\n              headers: myHeaders,\n              body: body\n            };\n            return _context.abrupt(\"return\", fetch(url_, requestOptions).then(function (res) {\n              if (res.status === 200 || res.status === 201) {\n                return res.json();\n              } else {\n                throw res;\n              }\n            })[\"catch\"](function (error) {\n              if (error.status === 404) {\n                return \"404\";\n              } else if (error.status === 401) {\n                console.log(error);\n                return \"401\";\n              }\n\n              return \"500\";\n            }));\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function apiCall(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZS9jb21tb24udHM/NDBlNCJdLCJuYW1lcyI6WyJhcGlDYWxsIiwibWV0aG9kIiwidXJsIiwiYm9keSIsImhlYWRlcnMiLCJ1cmxfIiwiYXBpQmFzZVVybCIsIm15SGVhZGVycyIsIkhlYWRlcnMiLCJhY2Nlc3NfdG9rZW4iLCJnZXRDb29raWUiLCJhcHBlbmQiLCJlbnRyaWVzIiwicGFpciIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0T3B0aW9ucyIsImZldGNoIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImpzb24iLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTTyxJQUFNQSxPQUFPO0FBQUEsaVZBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxrQkFBVCxRQUFTQSxNQUFULEVBQWlCQyxHQUFqQixRQUFpQkEsR0FBakIsRUFBc0JDLElBQXRCLFFBQXNCQSxJQUF0QixFQUE0QkMsT0FBNUIsUUFBNEJBLE9BQTVCO0FBQ2ZDLGdCQURlLGFBQ0xDLDhEQUFVLENBQUNKLEdBRE4sU0FDWUEsR0FEWjtBQUVqQksscUJBRmlCLEdBRUwsSUFBSUMsT0FBSixFQUZLO0FBR2pCQyx3QkFIaUIsR0FHRkMseURBQVMsQ0FBQyxjQUFELENBSFA7QUFJckJILHFCQUFTLENBQUNJLE1BQVYsQ0FBaUIsZUFBakIsRUFBa0MsWUFBWUYsWUFBOUM7QUFDQUYscUJBQVMsQ0FBQ0ksTUFBVixDQUFpQixjQUFqQixFQUFpQyxrQkFBakM7QUFMcUIsbURBT0pSLElBQUksQ0FBQ1MsT0FBTCxFQVBJOztBQUFBO0FBT3JCLGtFQUFpQztBQUF4QkMsb0JBQXdCO0FBQy9CQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQyxDQUFELENBQUosR0FBVSxJQUFWLEdBQWlCQSxJQUFJLENBQUMsQ0FBRCxDQUFqQztBQUNEO0FBVG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBV2ZHLDBCQVhlLEdBV0U7QUFDckJmLG9CQUFNLEVBQUVBLE1BRGE7QUFFckJHLHFCQUFPLEVBQUVHLFNBRlk7QUFHckJKLGtCQUFJLEVBQUVBO0FBSGUsYUFYRjtBQUFBLDZDQWdCZGMsS0FBSyxDQUFDWixJQUFELEVBQU9XLGNBQVAsQ0FBTCxDQUNKRSxJQURJLENBQ0MsVUFBQ0MsR0FBRCxFQUFTO0FBQ2Isa0JBQUlBLEdBQUcsQ0FBQ0MsTUFBSixLQUFlLEdBQWYsSUFBc0JELEdBQUcsQ0FBQ0MsTUFBSixLQUFlLEdBQXpDLEVBQThDO0FBQzVDLHVCQUFPRCxHQUFHLENBQUNFLElBQUosRUFBUDtBQUNELGVBRkQsTUFFTztBQUNMLHNCQUFNRixHQUFOO0FBQ0Q7QUFDRixhQVBJLFdBUUUsVUFBQ0csS0FBRCxFQUFXO0FBQ2hCLGtCQUFJQSxLQUFLLENBQUNGLE1BQU4sS0FBaUIsR0FBckIsRUFBMEI7QUFDeEIsdUJBQU8sS0FBUDtBQUNELGVBRkQsTUFFTyxJQUFJRSxLQUFLLENBQUNGLE1BQU4sS0FBaUIsR0FBckIsRUFBMEI7QUFDL0JOLHVCQUFPLENBQUNDLEdBQVIsQ0FBWU8sS0FBWjtBQUNBLHVCQUFPLEtBQVA7QUFDRDs7QUFDRCxxQkFBTyxLQUFQO0FBQ0QsYUFoQkksQ0FoQmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUHRCLE9BQU87QUFBQTtBQUFBO0FBQUEsR0FBYiIsImZpbGUiOiIuL3NlcnZpY2UvY29tbW9uLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBpQmFzZVVybCB9IGZyb20gXCIuLi9jb25maWcvZW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gXCIuL2Nvb2tpZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIGFwaUNhbGxQcm9wcyB7XG4gIG1ldGhvZDogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgYm9keT86IGFueTtcbiAgaGVhZGVycz86IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IGFwaUNhbGwgPSBhc3luYyAoeyBtZXRob2QsIHVybCwgYm9keSwgaGVhZGVycyB9OiBhcGlDYWxsUHJvcHMpID0+IHtcbiAgY29uc3QgdXJsXyA9IGAke2FwaUJhc2VVcmwudXJsfSR7dXJsfWA7XG4gIGxldCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBsZXQgYWNjZXNzX3Rva2VuID0gZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpO1xuICBteUhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIGFjY2Vzc190b2tlbik7XG4gIG15SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gIGZvciAodmFyIHBhaXIgb2YgYm9keS5lbnRyaWVzKCkpIHtcbiAgICBjb25zb2xlLmxvZyhwYWlyWzBdICsgXCIsIFwiICsgcGFpclsxXSk7XG4gIH1cblxuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICBoZWFkZXJzOiBteUhlYWRlcnMsXG4gICAgYm9keTogYm9keSxcbiAgfTtcbiAgcmV0dXJuIGZldGNoKHVybF8sIHJlcXVlc3RPcHRpb25zKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDAgfHwgcmVzLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgcmVzO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiBcIjQwNFwiO1xuICAgICAgfSBlbHNlIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJldHVybiBcIjQwMVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwiNTAwXCI7XG4gICAgfSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./service/common.ts\n");

/***/ })

})