import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface Props{
  children?: React.ReactNode,
  className?: string,
}

const CarouselIndicators = (props: Props) => {
  const { children, className, ...attributes } = props;

  const classes = classNames("carousel-indicators", className);

  return (
    <ThemeProvider theme={theme}>
      <ol data-test="carousel-indicators" {...attributes} className={classes}>
        {children}
      </ol>
    </ThemeProvider>
  );
};

CarouselIndicators.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CarouselIndicators.defaultProps = {
  className: "",
};

export default CarouselIndicators;
export { CarouselIndicators as CDBCarouselIndicators };
