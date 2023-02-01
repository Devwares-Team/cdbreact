import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";


interface Props{
  className?: string,
  direction?: string,
  iconLeft?: boolean,
  iconRight?: boolean,
  multiItem?: boolean,
  onClick?: any,
  tag?: any,
  testimonial?: boolean,
}

const Control = (props: Props) => {
  const {
    className,
    direction,
    iconLeft,
    iconRight,
    multiItem,
    onClick,
    tag: Tag,
    testimonial,
  } = props;

  let text;

  if (direction === "prev") {
    text = "Previous";
  } else if (direction === "next") {
    text = "Next";
  }

  let classes = classNames(`carousel-control-${direction}`, className);

  let caretClasses = classNames(`carousel-control-${direction}-icon`);

  if (testimonial) {
    const arrow = direction === "prev" ? "left" : "right";
    classes = classNames(
      `carousel-control-${direction}`,
      arrow,
      "carousel-control",
      className
    );
    caretClasses = classNames(`icon-${direction}`);
  }

  if (multiItem) {
    classes = classNames("btn-floating");
  }

  return (
    <ThemeProvider theme={theme}>
      <Tag
        data-test="carousel-control"
        className={classes}
        data-slide={direction}
        onClick={onClick}
      >
        {iconLeft ? (
          <i className="fab fa-chevron-left"></i>
        ) : iconRight ? (
          <i className="fab fa-chevron-right"></i>
        ) : (
          <div>
            <span className={caretClasses} aria-hidden="true" />
            <span className="sr-only">{text}</span>
          </div>
        )}
      </Tag>
    </ThemeProvider>
  );
};

Control.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.string,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  multiItem: PropTypes.bool,
  onClick: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  testimonial: PropTypes.bool,
};

Control.defaultProps = {
  tag: "a",
  iconRight: false,
  iconLeft: false,
  className: ''
};

export default Control;
export { Control as CDBControl };
