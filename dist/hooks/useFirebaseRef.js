"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useFirebaseRef;

var _firebase = _interopRequireDefault(require("firebase"));

require("firebase/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useFirebaseRef(path) {
  return _firebase.default.database().ref(path);
}