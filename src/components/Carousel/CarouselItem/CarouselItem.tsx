import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import { CarouselContext } from "../Carousel";

interface Props {
  active: boolean,
  children: React.ReactNode,
  className: string,
  itemId: string | number,
  tag: any,
}

const CarouselItem = (props: Props) => {
  const {
    active,
    children,
    className,
    itemId,
    tag: Tag,
    ...attributes
  } = props;
  const [style, setStyle] = useState({})

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

  const makeVisible = () => {
    setStyle({
      left: "0",
    })
  };

  
  const { slide, activeItem } = useContext(CarouselContext) //if it doesn't work search for react.component.context in FC

 const _itemId = typeof itemId === "string" ? parseInt(itemId, 10) : itemId;

  const classes = classNames(
    "carousel-item",
    {
      "active carousel-slide-item": slide,
      active: !slide && _itemId === activeItem,
    },
    className
  );



  useEffect(() => {
    const slideIndex = activeItem - _itemId;

    if (slide) {
      if (slideIndex < 0) {
        moveForward()
      } else if (slideIndex > 0) {
        moveBackwards()
      } else {
        makeVisible();
      }
    } else {
      makeVisible();
    }
  }, [activeItem])

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


export default CarouselItem;
export { CarouselItem as CDBCarouselItem };
