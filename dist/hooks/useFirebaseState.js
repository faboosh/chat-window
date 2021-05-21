"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useFirebaseState;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

var _useFirebaseRef = _interopRequireDefault(require("./useFirebaseRef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function useFirebaseState(path) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    returnRefOnly: false,
    getData: true,
    debug: true
  };
  const [value, setValue] = (0, _react.useState)(undefined);
  const [hasBound, setHasBound] = (0, _react.useState)(false);
  const ref = (0, _useFirebaseRef.default)(path);

  const updateFunc = snapshot => {
    logDebug("FIREBASE UPDATE: ", snapshot.val());
    setValue(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [snapshot.key]: snapshot.val()
    }));
  };

  const valueFunc = snapshot => {
    logDebug("FIREBASE VALUE: ", snapshot.val());
    setValue(snapshot.val());
  };

  const unbind = () => {
    logDebug('FIREBASE UNBOUND');
    return ref ? ref.off() : null;
  };

  const tryBindListeners = value => {
    if (value !== undefined) {
      if (typeof value === "object" && value !== null) {
        logDebug('USING ADD/CHANGE LISTENER');
        ref.limitToLast(1).on('child_added', updateFunc);
        ref.on('child_changed', updateFunc);
      } else {
        logDebug('USING VALUE LISTENER');
        ref.on('value', valueFunc);
      }
    }
  };

  (0, _react.useEffect)(() => {
    if (ref && !options.returnRefOnly && options.getData) {
      setHasBound(hasBound => {
        if (!hasBound) {
          ref.once('value', snapshot => {
            logDebug('FIREBASE GET INITIAL');
            valueFunc(snapshot);
            tryBindListeners(snapshot.val());
          });
        }

        return true;
      });
    }
  }, [ref]);
  (0, _react.useEffect)(() => unbind, []);

  function logDebug() {
    console.log(path, ...arguments);
  }

  return !options.returnRefOnly ? [value, ref] : [ref];
}