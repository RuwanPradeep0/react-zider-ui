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
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _excluded = ["options", "isMulti", "isSearchable", "isClearable", "isDisabled", "isLoading", "isRtl", "closeMenuOnSelect", "components", "styles", "placeholder", "onChange"];
var MultiSelectDropdown = function MultiSelectDropdown(_ref) {
  var options = _ref.options,
    _ref$isMulti = _ref.isMulti,
    isMulti = _ref$isMulti === void 0 ? true : _ref$isMulti,
    _ref$isSearchable = _ref.isSearchable,
    isSearchable = _ref$isSearchable === void 0 ? true : _ref$isSearchable,
    _ref$isClearable = _ref.isClearable,
    isClearable = _ref$isClearable === void 0 ? true : _ref$isClearable;
    _ref.isDisabled;
    _ref.isLoading;
    _ref.isRtl;
    _ref.closeMenuOnSelect;
    _ref.components;
    var styles = _ref.styles;
    _ref.placeholder;
    var onChange = _ref.onChange,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    selectedOptions = _useState2[0],
    setSelectedOptions = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    searchTerm = _useState4[0],
    setSearchTerm = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isOpen = _useState6[0],
    setIsOpen = _useState6[1];
  var dropdownRef = useRef(null);
  useEffect(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  var handleChange = function handleChange(option) {
    var newSelectedOptions;
    if (isMulti) {
      newSelectedOptions = selectedOptions.includes(option) ? selectedOptions.filter(function (selectedOption) {
        return selectedOption !== option;
      }) : [].concat(_toConsumableArray(selectedOptions), [option]);
    } else {
      newSelectedOptions = [option];
    }
    setSelectedOptions(newSelectedOptions);
    if (onChange) {
      onChange(newSelectedOptions);
    }
  };
  var handleClear = function handleClear() {
    setSelectedOptions([]);
    if (onChange) {
      onChange([]);
    }
  };
  var handleSearch = function handleSearch(event) {
    setSearchTerm(event.target.value);
  };
  var filteredOptions = options.filter(function (option) {
    return option.label.toLowerCase().includes(searchTerm.toLowerCase());
  });
  var DropdownContainer = function DropdownContainer(_ref2) {
    var children = _ref2.children;
    return /*#__PURE__*/React.createElement("div", _extends({
      className: "dropdown-container",
      style: styles.container
    }, rest), children);
  };
  var DropdownOption = function DropdownOption(_ref3) {
    var option = _ref3.option,
      isSelected = _ref3.isSelected,
      _onClick = _ref3.onClick;
    return /*#__PURE__*/React.createElement("div", {
      className: "dropdown-option ".concat(isSelected ? 'selected' : ''),
      style: styles.option,
      onClick: function onClick() {
        return _onClick(option);
      }
    }, option.label);
  };
  var DropdownSearch = function DropdownSearch(_ref4) {
    var value = _ref4.value,
      onChange = _ref4.onChange;
    return /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: value,
      onChange: onChange,
      placeholder: "Search...",
      className: "dropdown-search",
      style: styles.search
    });
  };
  var DropdownClear = function DropdownClear(_ref5) {
    var onClick = _ref5.onClick;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onClick,
      className: "dropdown-clear",
      style: styles.clear
    }, "Clear");
  };
  var renderDropdownOptions = function renderDropdownOptions() {
    return /*#__PURE__*/React.createElement("div", {
      className: "dropdown-options",
      style: styles.options
    }, filteredOptions.map(function (option) {
      return /*#__PURE__*/React.createElement(DropdownOption, {
        key: option.value,
        option: option,
        isSelected: selectedOptions.includes(option),
        onClick: handleChange
      });
    }));
  };
  return /*#__PURE__*/React.createElement(DropdownContainer, null, /*#__PURE__*/React.createElement("div", {
    className: "dropdown-selected",
    style: styles.selected
  }, selectedOptions.map(function (option) {
    return /*#__PURE__*/React.createElement("span", {
      key: option.value,
      className: "selected-option",
      style: styles.selectedOption
    }, option.label);
  })), isSearchable && /*#__PURE__*/React.createElement(DropdownSearch, {
    value: searchTerm,
    onChange: handleSearch
  }), isClearable && selectedOptions.length > 0 && /*#__PURE__*/React.createElement(DropdownClear, {
    onClick: handleClear
  }), isOpen && renderDropdownOptions());
};

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

export { InfiniteTypewriter, MultiSelectDropdown };
