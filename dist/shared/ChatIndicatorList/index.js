"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChatIndicatorList;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styled = require("../../browser/styled");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _hooks = require("../../hooks");

var _index = _interopRequireDefault(require("./ChatIndicator/index"));

var _ChatProvider = require("../../shared/ChatProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ChatIndicatorList(_ref) {
  let {
    root = "",
    userInboxRoot = "user-inboxes",
    inboxRoot = "inboxes",
    theme = {},
    room = "",
    children,
    onChangeRoom = () => {}
  } = _ref;
  const {
    config
  } = (0, _react.useContext)(_ChatProvider.ChatContext);
  const [chatIndicatorList, chatIndicatorListRef] = (0, _hooks.useFirebaseState)(userInboxRoot);

  function handleChangeRoom(firebaseID) {
    onChangeRoom(getRoomPath(firebaseID));
  }

  function getRoomPath(firebaseID) {
    return inboxRoot + "/" + firebaseID;
  }

  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: config.theme
  }, /*#__PURE__*/_react.default.createElement(_styled.ChatIndicatorListView, null, children && children, chatIndicatorList && Object.entries(chatIndicatorList).map(_ref2 => {
    let [firebaseID, inbox] = _ref2;
    console.log(firebaseID);
    return /*#__PURE__*/_react.default.createElement(_index.default, {
      active: room === getRoomPath(firebaseID),
      key: firebaseID,
      inbox: firebaseID,
      onClick: () => handleChangeRoom(firebaseID)
    });
  })));
}