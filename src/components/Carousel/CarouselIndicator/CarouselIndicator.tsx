import React, { MouseEventHandler } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface Props {
  active: boolean,
  alt: string,
  children: React.ReactNode
  className: string,
  img: string,
  onClick: MouseEventHandler<HTMLElement>
}

const CarouselIndicator = (props: Props) => {
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
  onClick: PropTypes.func
};

CarouselIndicator.defaultProps = {
  alt: "Carousel thumbnail",
  className: "",
  img: "",
  onClick: (event: React.MouseEvent<HTMLInputElement>) => { },
  children: null
};

export default CarouselIndicator;
export { CarouselIndicator as CDBCarouselIndicator };
