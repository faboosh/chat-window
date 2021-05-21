"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChatMessage;

var _react = _interopRequireDefault(require("react"));

var _styled = require("../../browser/styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ChatMessage(_ref) {
  let {
    message,
    author,
    messageByMe
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_styled.ChatMessageView, {
    messageByMe: messageByMe
  }, author.displayName && !messageByMe && /*#__PURE__*/_react.default.createElement(_styled.ChatMessageAuthor, {
    messageByMe: messageByMe
  }, author.displayName), /*#__PURE__*/_react.default.createElement(_styled.ChatMessageContent, {
    messageByMe: messageByMe
  }, message));
}