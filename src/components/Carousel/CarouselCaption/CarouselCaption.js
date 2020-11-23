import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../../theme";

const CarouselCaption = (props) => {
  const { children, className, tag, ...attributes } = props;

  const classes = classNames("carousel-caption", className);

  return (
    <ThemeProvider theme={theme}>
      <div data-test="carousel-caption" as={tag} {...attributes} className={classes}>
        {children}
      </div>
    </ThemeProvider>
  );
};

CarouselCaption.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

CarouselCaption.defaultProps = {
  tag: "div",
};

export default CarouselCaption;
export { CarouselCaption as CDBCarouselCaption };
