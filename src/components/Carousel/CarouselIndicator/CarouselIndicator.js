import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../../theme";

const CarouselIndicator = (props) => {
  const { active, alt, children, className, img, ...attributes } = props;

  const classes = classNames(active && "active", className);

  return (
    <ThemeProvider theme={theme}>
      <li data-test="carousel-indicator" {...attributes} className={classes}>
        {img && <img src={img} alt={alt} className="img-fluid" />}
        {children}
      </li>
    </ThemeProvider>
  );
};

CarouselIndicator.propTypes = {
  active: PropTypes.bool.isRequired,
  alt: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  img: PropTypes.string,
};

CarouselIndicator.defaultProps = {
  alt: "Carousel thumbnail",
  className: "",
  img: "",
};

export default CarouselIndicator;
export { CarouselIndicator as CDBCarouselIndicator };
