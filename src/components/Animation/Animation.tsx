import React, { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component, Container } from "./Animation.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

interface Props{
  className?: string,
  count?: number,
  delay?: string,
  duration?: string | number,
  infinite?: boolean,
  onAnimationEnd?: Function,
  onAnimationIteration?: Function,
  onAnimationStart?: Function,
  reveal?: boolean,
  style?: CSSProperties | any,
  tag ?: Function | string,
  type ?: string,
  children ? : React.ReactNode,
}

const Animation = (props: Props) => {
  const {
    tag,
    children,
    className,
    count = 1,
    delay,
    duration = 1,
    infinite,
    reveal = false,
    style,
    type,
    onAnimationStart,
    onAnimationIteration,
    onAnimationEnd,
    ...attributes
  } = props;

  const [isVisible, setIsVisible] = useState(!reveal);
  const [isRevealed, setIsRevealed] = useState(!reveal);
  const [iterationCount, setIterationCount] = useState(0);
  const elemRef = useRef<HTMLDivElement>(null);

  const getOffset = (elem: HTMLElement) => {
    const box = elem.getBoundingClientRect();
    const { body } = document;
    const docEl = document.documentElement;
    const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    const clientTop = docEl.clientTop || body.clientTop || 0;
    return Math.round(box.top + scrollTop - clientTop);
  };

  const updatePredicate = useCallback(() => {
    const currentRef = elemRef.current;
    if (!currentRef) {
      return;
    }

    const windowHeight = window.innerHeight;
    const scroll = window.scrollY;
    const docHeight = document.documentElement.offsetHeight;
    const topOffset = getOffset(currentRef);
    const bottomOffset = topOffset + currentRef.clientHeight;
    const isInView =
      (windowHeight + scroll - 100 > topOffset && scroll < topOffset) ||
      (windowHeight + scroll - 100 > bottomOffset && scroll < bottomOffset) ||
      (windowHeight + scroll === docHeight && topOffset + 100 > docHeight);

    if (isInView) {
      setIsVisible(true);
      setIsRevealed(true);
    } else if (!isRevealed) {
      setIsVisible(false);
    }
  }, [isRevealed]);

  useEffect(() => {
    setIsVisible(!reveal);
    setIsRevealed(!reveal);
  }, [reveal]);

  useEffect(() => {
    if (!reveal) {
      return;
    }

    window.addEventListener("scroll", updatePredicate, { passive: true });
    updatePredicate();

    return () => {
      window.removeEventListener("scroll", updatePredicate);
    };
  }, [reveal, updatePredicate]);

  const handleStart = () => {
    setIterationCount((prevValue) => prevValue + 1);
    if (onAnimationStart) {
      onAnimationStart();
    }
  };

  const handleIteration = () => {
    setIterationCount((prevValue) => prevValue + 1);
    if (onAnimationIteration) {
      onAnimationIteration();
    }
  };

  const handleEnd = () => {
    const nextCount = iterationCount + 1;
    setIterationCount(nextCount);
    if (onAnimationEnd && count === nextCount) {
      onAnimationEnd();
    }
  };

  const styleObject = {
    animationDuration: duration,
    animationDelay: delay,
    animationIterationCount: infinite ? "infinite" : count,
    visibility: isVisible ? "visible" : "hidden",
    animationName: type,
  };

  const hiddenStyles = {
    animationName: "none",
    visibility: "hidden",
  };

  const getAllStyles = Object.assign(styleObject, style);

  const classes = classNames(
    isVisible && "animated",
    type && type,
    infinite && "infinite",
    className
  );

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Component
          as={(tag as unknown) as undefined}
          data-test="animation"
          className={classes}
          onAnimationEnd={handleEnd}
          onAnimationIteration={handleIteration}
          onAnimationStart={handleStart}
          ref={elemRef}
          style={isVisible && isRevealed ? getAllStyles : hiddenStyles}
          {...attributes}
        >
          {children}
        </Component>
      </Container>
    </ThemeProvider>
  );
};

Animation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  count: PropTypes.number,
  delay: PropTypes.string,
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  infinite: PropTypes.bool,
  onAnimationEnd: PropTypes.func,
  onAnimationIteration: PropTypes.func,
  onAnimationStart: PropTypes.func,
  reveal: PropTypes.bool,
  style: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
};

Animation.defaultProps = {
  tag: "div",
  reveal: false,
  duration: 1,
  count: 1,
};

export default Animation;
export { Animation as CDBAnimation };
