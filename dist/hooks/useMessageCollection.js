"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useMessageCollection;

require("core-js/modules/web.dom-collections.iterator.js");

var _useFirebaseState = _interopRequireDefault(require("@hooks/useFirebaseState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useMessageCollection(path) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    returnMessageList: true
  };
  const [messageList, ref] = (0, _useFirebaseState.default)(path, {
    getData: options.returnMessageList
  });

  function send(message) {
    ref.push(message);
  }

  return {
    messageList,
    send
  };
}