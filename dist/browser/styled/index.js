"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResizeableInputDiv = exports.IsTypingItem = exports.ChatIndicatorView = exports.ChatIndicatorListView = exports.IsTypingList = exports.EmojiItem = exports.EmojiBody = exports.EmojiTopbar = exports.EmojiWrapper = exports.EmojiButton = exports.ChatMessageInputButtonGroup = exports.ChatMessageInputView = exports.ChatMessageAuthor = exports.ChatMessageContent = exports.ChatMessageView = exports.ChatMessageListView = exports.ChatWindowView = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const ChatWindowView = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", ";\n"])), _ref => {
  var _theme$ChatWindow;

  let {
    theme
  } = _ref;
  return (_theme$ChatWindow = theme['ChatWindow']) !== null && _theme$ChatWindow !== void 0 ? _theme$ChatWindow : "";
});

exports.ChatWindowView = ChatWindowView;

const ChatMessageListView = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    ", ";\n"])), _ref2 => {
  var _theme$ChatMessageLis;

  let {
    theme
  } = _ref2;
  return (_theme$ChatMessageLis = theme['ChatMessageList']) !== null && _theme$ChatMessageLis !== void 0 ? _theme$ChatMessageLis : "";
});

exports.ChatMessageListView = ChatMessageListView;

const ChatMessageView = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    ", ";\n"])), _ref3 => {
  var _theme$ChatMessage$st;

  let {
    theme
  } = _ref3;
  return (_theme$ChatMessage$st = theme['ChatMessage']['style']) !== null && _theme$ChatMessage$st !== void 0 ? _theme$ChatMessage$st : "";
});

exports.ChatMessageView = ChatMessageView;

const ChatMessageContent = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    ", ";\n"])), _ref4 => {
  var _theme$ChatMessage$Co;

  let {
    theme
  } = _ref4;
  return (_theme$ChatMessage$Co = theme['ChatMessage']['Content']) !== null && _theme$ChatMessage$Co !== void 0 ? _theme$ChatMessage$Co : "";
});

exports.ChatMessageContent = ChatMessageContent;

const ChatMessageAuthor = _styledComponents.default.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    ", ";\n"])), _ref5 => {
  var _theme$ChatMessage$Au;

  let {
    theme
  } = _ref5;
  return (_theme$ChatMessage$Au = theme['ChatMessage']['Author']) !== null && _theme$ChatMessage$Au !== void 0 ? _theme$ChatMessage$Au : "";
});

exports.ChatMessageAuthor = ChatMessageAuthor;

const ChatMessageInputView = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    ", ";\n"])), _ref6 => {
  var _theme$ChatMessageInp;

  let {
    theme
  } = _ref6;
  return (_theme$ChatMessageInp = theme['ChatMessageInput']) !== null && _theme$ChatMessageInp !== void 0 ? _theme$ChatMessageInp : "";
});

exports.ChatMessageInputView = ChatMessageInputView;

const ChatMessageInputButtonGroup = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    ", ";\n"])), _ref7 => {
  var _theme$ChatMessageInp2;

  let {
    theme
  } = _ref7;
  return (_theme$ChatMessageInp2 = theme['ChatMessageInputButtonGroup']) !== null && _theme$ChatMessageInp2 !== void 0 ? _theme$ChatMessageInp2 : "";
});

exports.ChatMessageInputButtonGroup = ChatMessageInputButtonGroup;

const EmojiButton = _styledComponents.default.button(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    ", ";\n"])), _ref8 => {
  var _theme$EmojiButton;

  let {
    theme
  } = _ref8;
  return (_theme$EmojiButton = theme['EmojiButton']) !== null && _theme$EmojiButton !== void 0 ? _theme$EmojiButton : "";
});

exports.EmojiButton = EmojiButton;

const EmojiWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    ", ";\n"])), _ref9 => {
  var _theme$EmojiWrapper;

  let {
    theme
  } = _ref9;
  return (_theme$EmojiWrapper = theme['EmojiWrapper']) !== null && _theme$EmojiWrapper !== void 0 ? _theme$EmojiWrapper : "";
});

exports.EmojiWrapper = EmojiWrapper;

const EmojiTopbar = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    ", ";\n"])), _ref10 => {
  var _theme$EmojiTopbar;

  let {
    theme
  } = _ref10;
  return (_theme$EmojiTopbar = theme['EmojiTopbar']) !== null && _theme$EmojiTopbar !== void 0 ? _theme$EmojiTopbar : "";
});

exports.EmojiTopbar = EmojiTopbar;

const EmojiBody = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    ", ";\n"])), _ref11 => {
  var _theme$EmojiBody;

  let {
    theme
  } = _ref11;
  return (_theme$EmojiBody = theme['EmojiBody']) !== null && _theme$EmojiBody !== void 0 ? _theme$EmojiBody : "";
});

exports.EmojiBody = EmojiBody;

const EmojiItem = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    ", ";\n"])), _ref12 => {
  var _theme$EmojiItem;

  let {
    theme
  } = _ref12;
  return (_theme$EmojiItem = theme['EmojiItem']) !== null && _theme$EmojiItem !== void 0 ? _theme$EmojiItem : "";
});

exports.EmojiItem = EmojiItem;

const IsTypingList = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    ", ";\n"])), _ref13 => {
  var _theme$IsTypingList;

  let {
    theme
  } = _ref13;
  return (_theme$IsTypingList = theme['IsTypingList']) !== null && _theme$IsTypingList !== void 0 ? _theme$IsTypingList : "";
});

exports.IsTypingList = IsTypingList;

const ChatIndicatorListView = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    ", ";\n"])), _ref14 => {
  var _theme$ChatIndicatorL;

  let {
    theme
  } = _ref14;
  return (_theme$ChatIndicatorL = theme['ChatIndicatorList']) !== null && _theme$ChatIndicatorL !== void 0 ? _theme$ChatIndicatorL : "width: 200px; background: red;";
});

exports.ChatIndicatorListView = ChatIndicatorListView;

const ChatIndicatorView = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    ", ";\n"])), _ref15 => {
  var _theme$ChatIndicator;

  let {
    theme
  } = _ref15;
  return (_theme$ChatIndicator = theme['ChatIndicator']) !== null && _theme$ChatIndicator !== void 0 ? _theme$ChatIndicator : "width: 200px; background: red;";
});

exports.ChatIndicatorView = ChatIndicatorView;

const IsTypingItem = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    ", ";\n"])), _ref16 => {
  var _theme$IsTypingItem;

  let {
    theme
  } = _ref16;
  return (_theme$IsTypingItem = theme['IsTypingItem']) !== null && _theme$IsTypingItem !== void 0 ? _theme$IsTypingItem : "";
});

exports.IsTypingItem = IsTypingItem;

const ResizeableInputDiv = _styledComponents.default.div.attrs({
  contentEditable: true,
  className: "ws-chat__input"
})(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    ", ";\n\n    &:focus {\n        outline: none;\n    }\n\n    &[placeholder]:empty:before {\n        content: attr(placeholder);\n        color: #444;\n    }\n"])), _ref17 => {
  var _theme$ResizeableInpu;

  let {
    theme
  } = _ref17;
  return (_theme$ResizeableInpu = theme['ResizeableInput']) !== null && _theme$ResizeableInpu !== void 0 ? _theme$ResizeableInpu : "";
});

exports.ResizeableInputDiv = ResizeableInputDiv;