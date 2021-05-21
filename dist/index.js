"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ChatWindow", {
  enumerable: true,
  get: function get() {
    return _ChatWindow.default;
  }
});
Object.defineProperty(exports, "ChatMessageList", {
  enumerable: true,
  get: function get() {
    return _ChatMessageList.default;
  }
});
Object.defineProperty(exports, "ChatProvider", {
  enumerable: true,
  get: function get() {
    return _ChatProvider.default;
  }
});
Object.defineProperty(exports, "ChatContext", {
  enumerable: true,
  get: function get() {
    return _ChatProvider.ChatContext;
  }
});
Object.defineProperty(exports, "EmojiPicker", {
  enumerable: true,
  get: function get() {
    return _EmojiPicker.default;
  }
});
Object.defineProperty(exports, "ChatMessageInput", {
  enumerable: true,
  get: function get() {
    return _ChatMessageInput.default;
  }
});
Object.defineProperty(exports, "ResizeableInput", {
  enumerable: true,
  get: function get() {
    return _ResizeableInput.default;
  }
});
Object.defineProperty(exports, "ChatIndicatorList", {
  enumerable: true,
  get: function get() {
    return _ChatIndicatorList.default;
  }
});
Object.defineProperty(exports, "ChatIndicator", {
  enumerable: true,
  get: function get() {
    return _ChatIndicator.default;
  }
});
Object.defineProperty(exports, "ChatMessage", {
  enumerable: true,
  get: function get() {
    return _ChatMessage.default;
  }
});
Object.defineProperty(exports, "useFirebaseState", {
  enumerable: true,
  get: function get() {
    return _hooks.useFirebaseState;
  }
});
Object.defineProperty(exports, "useMessageCollection", {
  enumerable: true,
  get: function get() {
    return _hooks.useMessageCollection;
  }
});
Object.defineProperty(exports, "useFirebaseRef", {
  enumerable: true,
  get: function get() {
    return _hooks.useFirebaseRef;
  }
});
exports.default = void 0;

var _ChatWindow = _interopRequireDefault(require("./shared/ChatWindow"));

var _ChatMessageList = _interopRequireDefault(require("./shared/ChatMessageList"));

var _ChatProvider = _interopRequireWildcard(require("./shared/ChatProvider"));

var _EmojiPicker = _interopRequireDefault(require("./shared/EmojiPicker"));

var _ChatMessageInput = _interopRequireDefault(require("./shared/ChatMessageInput"));

var _ResizeableInput = _interopRequireDefault(require("./shared/ChatMessageInput/ResizeableInput"));

var _ChatIndicatorList = _interopRequireDefault(require("./shared/ChatIndicatorList"));

var _ChatIndicator = _interopRequireDefault(require("./shared/ChatIndicatorList/ChatIndicator"));

var _ChatMessage = _interopRequireDefault(require("./shared/ChatMessage"));

var _hooks = require("./hooks");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _ChatWindow.default;
exports.default = _default;