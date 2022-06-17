/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var name = "mahmoud";
console.log(name);

var testClass = /*#__PURE__*/function () {
  function testClass() {
    _classCallCheck(this, testClass);
  }

  _createClass(testClass, [{
    key: "myMethod",
    value: function myMethod(test) {
      return test;
    }
  }]);

  return testClass;
}();

var newTestClass = new testClass();
console.log(newTestClass.myMethod("test111111111111111"));
var newTestClass2 = new testClass();
console.log(newTestClass.myMethod("test22222222222222222"));
/******/ })()
;
//# sourceMappingURL=bundle.js.map