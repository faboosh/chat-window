"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useFirebaseState", {
  enumerable: true,
  get: function get() {
    return _useFirebaseState.default;
  }
});
Object.defineProperty(exports, "useMessageCollection", {
  enumerable: true,
  get: function get() {
    return _useMessageCollection.default;
  }
});
Object.defineProperty(exports, "useFirebaseRef", {
  enumerable: true,
  get: function get() {
    return _useFirebaseRef.default;
  }
});

var _useFirebaseState = _interopRequireDefault(require("./useFirebaseState"));

var _useMessageCollection = _interopRequireDefault(require("./useMessageCollection"));

var _useFirebaseRef = _interopRequireDefault(require("./useFirebaseRef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const hooks = {
  useFirebaseState: _useFirebaseState.default,
  useMessageCollection: _useMessageCollection.default
}; // export default hooks