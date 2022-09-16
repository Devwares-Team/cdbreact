import React, { useContext, useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Component } from "./DropDownMenu.style";
import { DropDownContext } from "../DropDownContext";
import { Transition } from "react-spring/renderprops";
import { Popper } from "react-popper";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";


interface Props{
  className: string,
  colors: string,
  onClose: Function,
  onClosed: Function,
  tag: string,
  dropleft: boolean,
  dropright: boolean,
  dropup: boolean,
  top : number,
  color : [string, number],
  children: React.ReactNode,
  right : any,
  dropdown: boolean,
  placement : any,
  

}

const Null = () => null;

const modifiers = [
  {
    name: "flip",
    enabled: false,
  },
  {
    name: "hide",
    enabled: false,
  },
];

const popperModifiers = [
  ...modifiers,
  {
    name: "arrow",
    options: {
      padding: 5,
    },
  },
  {
    name: "offset",
    options: {
      offset: [0, 14],
    },
  },
];

const animatedModifiers = [
  ...popperModifiers,
  {
    name: "computeStyles",
    options: {
      adaptive: false,
    },
  },

  {
    name: "computeStyles",
    options: {
      gpuAcceleration: false,
    },
  },
];

const DropDownMenu = (props: Props) => {
  const {
    className,
    tag,
    color,
    children,
    right,
    top,
    dropleft,
    dropright,
    dropdown,
    dropup,
    
    ...attrs
  } = props;
  const { isOpen } = useContext(DropDownContext);
  const [isOpenValue] = isOpen;

  useEffect(() => {
    const { dropup, dropleft, dropright } = props;
    const position1 = dropup
      ? "top"
      : dropright
      ? "right"
      : dropleft
      ? "left"
      : "bottom";

    const position2 = right ? "end" : "start";

    attrs.placement = `${position1}-${position2}`;
  });

  const dropDownMenuClasses = classNames("dropdown-menu", className);

  let dropDownMenuComponent = (
    <ThemeProvider theme={theme}>
      <Transition
        items={isOpenValue}
        from={{ opacity: 0, scale: 0.8, top: 0 }}
        enter={{ opacity: 1, scale: 1, top: 0 }}
        leave={{ opacity: 0, scale: 0.8, top: 0 }}
        config={{ mass: 1, tension: 500, friction: 0, duration: 200 }}
      >
        {(show) =>
          show
            ? ({ scale, opacity, top: topOffset }) => (
                <Popper placement={attrs.placement} modifiers={animatedModifiers}>
                  {({
                    ref,
                    style: { top, left, position },
                    placement,
                    arrowProps,
                  }) => (
                    <Component
                      className={dropDownMenuClasses}
                      ref={ref}
                      style={{
                        opacity,
                        top: 0,
                        left: 0,
                        position,
                        padding: "1em",
                        transform: `translate3d(${left}, ${
                          parseInt(top) + topOffset
                        }px, 0) scale(${scale})`,
                        transformOrigin: "top center",
                      }}
                      data-placement={placement}
                    >
                      {children}
                    </Component>
                  )}
                </Popper>
              )
            : Null
        }
      </Transition>
    </ThemeProvider>
  );

  return dropDownMenuComponent;
};

DropDownMenu.defaultProps = {
  colors: "primary",
  right: false,
  tag: "span",
  dropleft: false,
  dropright: false,
  dropup: false,
};

DropDownMenu.propTypes = {
  className: PropTypes.string,
  colors: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
  ]),
  onClose: PropTypes.func,
  onClosed: PropTypes.func,
  tag: PropTypes.string,
  dropleft: PropTypes.bool,
  dropright: PropTypes.bool,
  dropup: PropTypes.bool,
  dropdown: PropTypes.bool,
};

export default DropDownMenu;
export { DropDownMenu as CDBDropDownMenu };
