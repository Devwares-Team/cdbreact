import React, { useState, } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../../theme";

const CarouselItem = (props) =>{
  const [style, setStyle] = useState({})
  const [context, setContext] = useState({})
  
 const moveForward = () => {
    setStyle({
      position: "absolute",
      left: "100%",
    })
  };

  const moveBackwards = () => {
    setStyle({
      position: "absolute",
      left: "-100%",
    })
  };

 const  makeVisible = () => {
    setStyle({
      left: "0",
    })
  };


    let {
      active,
      children,
      className,
      itemId,
      tag: Tag,
      ...attributes
    } = props;

    setContext({ slide, activeItem }) 

    itemId = parseInt(itemId, 10);

    const classes = classNames(
      "carousel-item",
      {
        "active carousel-slide-item": slide,
        active: !slide && itemId === activeItem,
      },
      className
    );

    const slideIndex = activeItem - itemId;

    if (slide) {
      if (slideIndex < 0) {
        setStyle(moveForward);
      } else if (slideIndex > 0) {
        setStyle(moveBackwards);
      } else {
        setStyle(makeVisible);
      }
    } else {
      setStyle(makeVisible);
    }

    return (
      <ThemeProvider theme={theme}>
        <Tag
          data-test="carousel-item"
          {...attributes}
          className={classes}
          style={style}
        >
          {children}
        </Tag>
      </ThemeProvider>
    );
  
}

CarouselItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  itemId: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

CarouselItem.defaultProps = {
  tag: "div",
};

CarouselItem.contextTypes = {
  activeItem: PropTypes.any,
  length: PropTypes.any,
  slide: PropTypes.any,
};

export default CarouselItem;
export { CarouselItem as CDBCarouselItem };
