"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EmojiPicker;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styled = require("../../browser/styled");

var unicodeEmoji = _interopRequireWildcard(require("unicode-emoji"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const emojis = unicodeEmoji.getEmojisGroupedBy('category');
console.log(emojis);

function EmojiPicker(_ref) {
  let {
    onPick = () => {},
    symbol = '😳'
  } = _ref;
  const [open, setOpen] = (0, _react.useState)(false);
  const [category, setCategory] = (0, _react.useState)("person-people");
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styled.EmojiButton, {
    onClick: () => setOpen(!open)
  }, symbol), open && /*#__PURE__*/_react.default.createElement(_styled.EmojiWrapper, null, /*#__PURE__*/_react.default.createElement(_styled.EmojiTopbar, null, Object.entries(emojis).map(_ref2 => {
    let [category, items] = _ref2;
    return /*#__PURE__*/_react.default.createElement(_styled.EmojiItem, {
      onClick: () => setCategory(category)
    }, items[0].emoji);
  })), /*#__PURE__*/_react.default.createElement(_styled.EmojiBody, null, emojis[category].map(_ref3 => {
    let {
      emoji
    } = _ref3;
    return /*#__PURE__*/_react.default.createElement(_styled.EmojiItem, {
      onClick: () => onPick(emoji)
    }, emoji);
  }))));
}