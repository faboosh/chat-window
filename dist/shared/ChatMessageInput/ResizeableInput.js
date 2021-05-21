"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ResizeableInput;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styled = require("../../browser/styled");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ResizeableInput(_ref) {
  let {
    value,
    onChange = () => null,
    onSubmit = () => null
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["value", "onChange", "onSubmit"]);

  const [shiftIsPressed, setShiftIsPressed] = (0, _react.useState)(false);
  const messageRef = (0, _react.useRef)(null);

  function handleInput(e) {
    onChange(e.target.innerText);
  }

  function setDOM(str) {
    if (messageRef !== null && messageRef !== void 0 && messageRef.current) messageRef.current.innerText = str;
  }

  function getDOM() {
    if (messageRef !== null && messageRef !== void 0 && messageRef.current) return messageRef.current.innerText;
  }

  function onKeyDown(e) {
    if (e.key === "Shift") setShiftIsPressed(true);

    if (e.key === "Enter" && !shiftIsPressed) {
      e.preventDefault();
      onSubmit(getDOM());
    }
  }

  function onKeyUp(e) {
    if (e.key === "Shift") setShiftIsPressed(false);
  }

  (0, _react.useEffect)(() => {
    if (messageRef.current) {
      console.log(value, getDOM());
      if (value !== getDOM()) setDOM(value);
    }
  }, [value]);
  return /*#__PURE__*/_react.default.createElement(_styled.ResizeableInputDiv, _extends({
    onInput: handleInput,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    ref: messageRef
  }, rest));
}