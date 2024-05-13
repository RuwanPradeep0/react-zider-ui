import React, { useState, useRef, useEffect } from 'react';

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var InfiniteTypewriter = function InfiniteTypewriter(_ref) {
  var text = _ref.text,
    _ref$headerLevel = _ref.headerLevel,
    headerLevel = _ref$headerLevel === void 0 ? 'p' : _ref$headerLevel,
    _ref$gradientType = _ref.gradientType,
    gradientType = _ref$gradientType === void 0 ? 'linear' : _ref$gradientType,
    _ref$gradient = _ref.gradient,
    gradient = _ref$gradient === void 0 ? false : _ref$gradient,
    _ref$gradientColor = _ref.gradientColor1,
    gradientColor1 = _ref$gradientColor === void 0 ? '#ff0000' : _ref$gradientColor,
    _ref$gradientColor2 = _ref.gradientColor2,
    gradientColor2 = _ref$gradientColor2 === void 0 ? '#00ff00' : _ref$gradientColor2,
    _ref$gradientColor3 = _ref.gradientColor3,
    gradientColor3 = _ref$gradientColor3 === void 0 ? '#0000ff' : _ref$gradientColor3,
    _ref$gradientDirectio = _ref.gradientDirection,
    gradientDirection = _ref$gradientDirectio === void 0 ? 'to right' : _ref$gradientDirectio,
    _ref$cursor = _ref.cursor,
    cursor = _ref$cursor === void 0 ? '|' : _ref$cursor,
    _ref$typingDelay = _ref.typingDelay,
    typingDelay = _ref$typingDelay === void 0 ? 100 : _ref$typingDelay,
    _ref$eraseDelay = _ref.eraseDelay,
    eraseDelay = _ref$eraseDelay === void 0 ? 2000 : _ref$eraseDelay,
    _ref$loopDelay = _ref.loopDelay,
    loopDelay = _ref$loopDelay === void 0 ? 1000 : _ref$loopDelay,
    _ref$fontSize = _ref.fontSize,
    fontSize = _ref$fontSize === void 0 ? '3rem' : _ref$fontSize,
    _ref$fontStyle = _ref.fontStyle,
    fontStyle = _ref$fontStyle === void 0 ? 'normal' : _ref$fontStyle,
    onComplete = _ref.onComplete;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    displayText = _useState2[0],
    setDisplayText = _useState2[1];
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isTyping = _useState4[0],
    setIsTyping = _useState4[1];
  var textRef = useRef(null);
  var headerTag = "h".concat(headerLevel);
  useEffect(function () {
    var timeout;
    var typeText = function typeText() {
      if (isTyping) {
        setDisplayText(function (prevText) {
          return prevText + text.charAt(prevText.length);
        });
        timeout = setTimeout(typeText, typingDelay);
      } else {
        eraseText();
      }
    };
    var eraseText = function eraseText() {
      if (displayText) {
        timeout = setTimeout(function () {
          setDisplayText(function (prevText) {
            return prevText.slice(0, -1);
          });
          eraseText();
        }, typingDelay);
      } else {
        timeout = setTimeout(function () {
          setIsTyping(true);
          typeText();
        }, loopDelay);
      }
    };
    typeText();
    return function () {
      return clearTimeout(timeout);
    };
  }, [text, typingDelay, eraseDelay, loopDelay, isTyping]);
  useEffect(function () {
    if (displayText === text) {
      setIsTyping(false);
      if (onComplete) {
        onComplete();
      }
      setTimeout(function () {
        setIsTyping(true);
      }, eraseDelay);
    }
  }, [displayText, text, eraseDelay, onComplete]);
  var getGradientStyle = function getGradientStyle() {
    if (gradient) {
      var gradientValue = gradientType === 'linear' ? "linear-gradient(".concat(gradientDirection, ", ").concat(gradientColor1, ", ").concat(gradientColor2, ", ").concat(gradientColor3, ")") : "radial-gradient(".concat(gradientColor1, ", ").concat(gradientColor2, ", ").concat(gradientColor3, ")");
      return {
        background: gradientValue,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: fontSize,
        fontStyle: fontStyle
      };
    }
    return {
      fontSize: fontSize,
      fontStyle: fontStyle
    };
  };
  return /*#__PURE__*/React.createElement(headerTag, {
    ref: textRef,
    style: getGradientStyle()
  }, displayText + cursor);
};

export { InfiniteTypewriter as default };
