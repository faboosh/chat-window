"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChatMessageList;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("./ChatMessage/index"));

var _styled = require("../browser/styled");

var _IsTypingList = _interopRequireDefault(require("./IsTypingList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ChatMessageList(_ref) {
  let {
    messageList,
    me,
    messageByMe,
    wrapper: View = _styled.ChatMessageListView,
    autoScroll = true,
    children = _ref2 => {
      let {
        messageList,
        Components: {
          ChatMessage
        }
      } = _ref2;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, messageList && messageList.map(message => /*#__PURE__*/_react.default.createElement(ChatMessage, message)));
    }
  } = _ref;
  const scrollRef = (0, _react.useRef)(null);
  const [lastMessageCount, setLastMessageCount] = (0, _react.useState)(0);
  (0, _react.useEffect)(() => {
    const messageListArr = messageList ? Object.entries(messageList) : [];

    if (autoScroll) {
      if (scrollRef && messageList && lastMessageCount < (messageListArr === null || messageListArr === void 0 ? void 0 : messageListArr.length)) {
        setLastMessageCount(messageListArr === null || messageListArr === void 0 ? void 0 : messageListArr.length);
        const lastMessage = messageListArr[messageListArr.length - 1][1];
        scrollRef.current.scrollIntoView();
      }
    }
  }, [scrollRef, messageList]);

  function isMessageByMe(message) {
    return messageByMe({
      me,
      author: message.author
    });
  }

  function mapMessageByMe(messageList) {
    return messageList ? Object.entries(messageList).map(_ref3 => {
      let [firebaseID, message] = _ref3;
      message.messageByMe = isMessageByMe(message);
      message.key = firebaseID;
      return message;
    }) : messageList;
  }

  return /*#__PURE__*/_react.default.createElement(View, null, children({
    messageList: mapMessageByMe(messageList),
    isMessageByMe,
    Components: {
      ChatMessage: _index.default
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    ref: scrollRef
  }));
}