"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChatWindow;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _hooks = require("@hooks");

var _ChatProvider = require("./ChatProvider");

var _styled = require("@browser/styled");

var _ChatMessageList = _interopRequireDefault(require("@shared/ChatMessageList"));

var _IsTypingList = _interopRequireDefault(require("@shared/IsTypingList"));

var _ChatMessageInput = _interopRequireDefault(require("@shared/ChatMessageInput"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ChatWindow(_ref) {
  let {
    wrapper: Wrapper = _styled.ChatWindowView,
    messageByMe = _ref2 => {
      let {
        me,
        author
      } = _ref2;
      return me.displayName === author.displayName;
    },
    children = props => {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ChatMessageList.default, props), /*#__PURE__*/_react.default.createElement(_IsTypingList.default, props), /*#__PURE__*/_react.default.createElement(_ChatMessageInput.default, props));
    }
  } = _ref;
  const {
    config
  } = (0, _react.useContext)(_ChatProvider.ChatContext);
  const MESSAGES_PATH = config.root + "/messages";
  const SETTINGS_PATH = config.root + "/settings";
  const {
    messageList,
    send
  } = (0, _hooks.useMessageCollection)(MESSAGES_PATH);
  const [isTypingList, isTypingRef] = (0, _hooks.useFirebaseState)(SETTINGS_PATH + "/isTyping");

  function setIsTyping(isTyping) {
    isTypingRef.child(config.me.displayName).set(isTyping);
  }

  function onSend(message) {
    send({
      author: config.me,
      message,
      epoch: Date.now()
    });
  }

  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: config.theme
  }, /*#__PURE__*/_react.default.createElement(Wrapper, null, children({
    messageByMe,
    me: config.me,
    messageList,
    onSend,
    isTypingList,
    setIsTyping,
    Components: {
      ChatMessageList: _ChatMessageList.default,
      ChatMessageInput: _ChatMessageInput.default
    }
  })));
}