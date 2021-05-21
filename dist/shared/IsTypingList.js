"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IsTypingList;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _styled = require("../browser/styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsTypingList(_ref) {
  let {
    list,
    me
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_styled.IsTypingList, null, list && Object.entries(list).filter(_ref2 => {
    let [displayName, isTyping] = _ref2;
    return Number(isTyping) + 3000 > Date.now() && displayName !== me.displayName;
  }).map(_ref3 => {
    let [displayName] = _ref3;
    return /*#__PURE__*/_react.default.createElement(_styled.IsTypingItem, null, displayName, " is typing...");
  }));
}