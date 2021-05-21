"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChatIndicator;

var _react = _interopRequireDefault(require("react"));

var _hooks = _interopRequireDefault(require("../../../hooks"));

var _styled = require("../../../browser/styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ChatIndicator(_ref) {
  let {
    inbox,
    active,
    onClick = () => {}
  } = _ref;
  // const messageList = useMessageCollection()
  return /*#__PURE__*/_react.default.createElement(_styled.ChatIndicatorView, {
    onClick: onClick,
    active: active
  }, inbox);
}