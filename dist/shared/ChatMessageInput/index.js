"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChatMessageInput;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styled = require("../../browser/styled");

var _EmojiPicker = _interopRequireDefault(require("../EmojiPicker"));

var _ResizeableInput = _interopRequireDefault(require("./ResizeableInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ChatMessageInput(_ref) {
  let {
    onSend = () => {},
    sendBtnContent = "➤",
    setIsTyping = () => {},
    children
  } = _ref;
  const [message, setMessage] = (0, _react.useState)("");

  function sendMessage() {
    if (message) {
      onSend(message);
      setMessage("");
    }
  }

  function appendEmoji(emoji) {
    setMessage(message + emoji);
  }

  return /*#__PURE__*/_react.default.createElement(_styled.ChatMessageInputView, null, typeof children == "function" ? children({
    appendEmoji,
    sendMessage,
    sendBtnContent
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ResizeableInput.default, {
    placeholder: "Aa...",
    value: message,
    onChange: message => {
      setIsTyping(!!message ? Date.now() : false);
      setMessage(message);
    },
    onSubmit: () => {
      setIsTyping(false);
      sendMessage();
    }
  }), /*#__PURE__*/_react.default.createElement(_styled.ChatMessageInputButtonGroup, null, /*#__PURE__*/_react.default.createElement(_EmojiPicker.default, {
    symbol: "\uD83D\uDE33",
    onPick: appendEmoji
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ws-chat__submit-btn",
    onClick: sendMessage
  }, sendBtnContent))));
}