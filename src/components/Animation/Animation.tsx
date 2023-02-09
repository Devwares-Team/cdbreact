import React, { useState, createRef, useCallback, CSSProperties } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
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
  elemRef ?: Function,
  countIterations ?: any, 
  children ? : React.ReactNode,
  clientHeight ?: number,
  currentRef ?: any, 
}

const Animation = (props: Props) => {
  const {
    tag,
    children,
    className,
    count,
    delay,
    duration,
    infinite,
    reveal,
    style,
    currentRef,
    clientHeight,
    type,
    countIterations,
    onAnimationStart,
    onAnimationIteration,
    onAnimationEnd,
    ...attributes
  } = props;
  const [state, setState] = useState({
    isVisible: false,
    revealed: false,
    countIterations: 0,
  });
  const elemRef = createRef<HTMLDivElement>();
  const handleStart = () => {
    setState({
      ...state,
      countIterations: countIterations + 1,
    });
    if (onAnimationStart) {
      onAnimationStart();
    }
  };

  const handleIteration = () => {
    if (onAnimationIteration) {
      setState({
        ...state,
        countIterations: countIterations + 1,
      });
      onAnimationIteration();
    }
  };

  const handleEnd = () => {
    setState({
      ...state,
      countIterations: countIterations + 1,
    });
    if (onAnimationEnd && count === countIterations) {
      onAnimationEnd();
    }
  };

  const getOffset = (elem) => {
    const box = elem.getBoundingClientRect();
    const { body } = document;
    const docEl = document.documentElement;
    const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    const clientTop = docEl.clientTop || body.clientTop || 0;
    const top = box.top + scrollTop - clientTop;
    return Math.round(top);
  };
  const updatePredicate = useCallback(() => {
    const windowHeight = window.innerHeight;
    const scroll = window.scrollY;
    const docHeight = document.documentElement.offsetHeight;
    const currentRef = elemRef.current!;
    if (
      (windowHeight + scroll - 100 > getOffset(currentRef) &&
        scroll < getOffset(currentRef)) ||
      (windowHeight + scroll - 100 >
        getOffset(currentRef) + currentRef.clientHeight &&
        scroll < getOffset(currentRef) + currentRef.clientHeight) ||
      (windowHeight + scroll === docHeight &&
        getOffset(currentRef) + 100 > docHeight)
    ) {
      setState({
        ...state,
        isVisible: true,
        revealed: true,
      });
    } else if (!state.revealed) {
      setState({
        ...state,
        isVisible: false,
        revealed: true,
      });
    }
  }, [state, elemRef]);

  useDeepCompareEffect(() => {
    setState({
      ...state,
      isVisible: !reveal,
      revealed: !reveal,
    });

    if (state.revealed) {
      window.addEventListener("scroll", updatePredicate);
      updatePredicate();
    }
    return () => {
      if (state.revealed) {
        window.removeEventListener("scroll", updatePredicate);
      }
    };
  }, [state, reveal]);
  const styleObject = {
    animationDuration: duration,
    animationDelay: delay,
    animationIterationCount: infinite ? false : count,
    visibility: state.isVisible ? "visible" : "hidden",
    animationName: type,
  };

  const hiddenStyles = {
    animationName: "none",
    visibility: "hidden",
  };

  const getAllStyles = Object.assign(styleObject, style);

  const classes = classNames(
    state.isVisible && "animated",
    type && type,
    infinite && "infinite",
    className
  );

  let animationComponent = (
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
        style={state.isVisible && state.revealed ? getAllStyles : hiddenStyles}
        {...attributes}
      >
        {children}
        </Component>
      </Container>
    </ThemeProvider>
  );
  return animationComponent;
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
  countIterations : PropTypes.number
};

Animation.defaultProps = {
  tag: "div",
  reveal: false,
  duration: 1,
  count: 1,
};

export default Animation;
export { Animation as CDBAnimation };
