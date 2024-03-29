import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";


interface Props{
  children?: React.ReactNode,
  className?: string,
  tag?: [Function, string],
  as?:any
 
}

const CarouselCaption = (props: Props) => {
  const { children, className, as, ...attributes } = props;

  const classes = classNames("carousel-caption", className);

  return (
    <ThemeProvider theme={theme}>
      <div data-test="carousel-caption"  {...attributes} className={classes}>
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
