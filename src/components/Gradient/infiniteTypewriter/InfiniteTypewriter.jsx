import React, { useState, useEffect, useRef } from 'react';

const InfiniteTypewriter = ({
  text,
  headerLevel = 'p',
  gradientType = 'linear',
  gradient = false,
  gradientColor1 = '#ff0000',
  gradientColor2 = '#00ff00',
  gradientColor3 = '#0000ff',
  gradientDirection = 'to right',
  cursor = '|',
  typingDelay = 100,
  eraseDelay = 2000,
  loopDelay = 1000,
  fontSize = '3rem',
  fontStyle = 'normal',
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const textRef = useRef(null);
  const headerTag = `h${headerLevel}`;

  useEffect(() => {
    let timeout;

    const typeText = () => {
      if (isTyping) {
        setDisplayText((prevText) => prevText + text.charAt(prevText.length));
        timeout = setTimeout(typeText, typingDelay);
      } else {
        eraseText();
      }
    };

    const eraseText = () => {
      if (displayText) {
        timeout = setTimeout(() => {
          setDisplayText((prevText) => prevText.slice(0, -1));
          eraseText();
        }, typingDelay);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
          typeText();
        }, loopDelay);
      }
    };

    typeText();

    return () => clearTimeout(timeout);
  }, [text, typingDelay, eraseDelay, loopDelay, isTyping]);

  useEffect(() => {
    if (displayText === text) {
      setIsTyping(false);
      if (onComplete) {
        onComplete();
      }
      setTimeout(() => {
        setIsTyping(true);
      }, eraseDelay);
    }
  }, [displayText, text, eraseDelay, onComplete]);

  const getGradientStyle = () => {
    if (gradient) {
      const gradientValue =
        gradientType === 'linear'
          ? `linear-gradient(${gradientDirection}, ${gradientColor1}, ${gradientColor2}, ${gradientColor3})`
          : `radial-gradient(${gradientColor1}, ${gradientColor2}, ${gradientColor3})`;

      return {
        background: gradientValue,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize, 
        fontStyle, 
      };
    }
    return {
      fontSize,
      fontStyle, 
    };
  };

  return React.createElement(
    headerTag,
    { ref: textRef, style: getGradientStyle() },
    displayText + cursor
  );
};

export default InfiniteTypewriter;