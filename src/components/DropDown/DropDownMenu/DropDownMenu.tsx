import React, { CSSProperties, useContext, useEffect, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { createPopper } from "@popperjs/core";
import { Component } from "./DropDownMenu.style";
import { DropDownContext } from "../DropDownContext";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface Props {
  className?: string;
  colors?: string;
  onClose?: Function;
  onClosed?: Function;
  tag?: string;
  dropleft?: boolean;
  dropright?: boolean;
  dropup?: boolean;
  dropdown?: boolean;
  color?: any;
  children?: any;
  right?: any;
  placement?: any;
  top?: any;
}

const DropDownMenu = (props: Props) => {
  const {
    className,
    children,
    right,
    dropleft,
    dropright,
    dropup,
  } = props;
  const { isOpen, referenceElement, popperElement } = useContext<any>(DropDownContext);
  const [isOpenValue] = isOpen;
  const [referenceElm] = referenceElement;
  const [menuElement, setMenuElement] = popperElement;
  const popperRef = useRef<any>(null);
  const [popperStyle, setPopperStyle] = useState<CSSProperties>({
    position: "absolute",
    top: 0,
    left: 0,
  });
  const [popperAttributes, setPopperAttributes] = useState<Record<string, any>>({});

  const placement = useMemo(() => {
    const position = dropup ? "top" : dropright ? "right" : dropleft ? "left" : "bottom";
    const alignment = right ? "end" : "start";
    return `${position}-${alignment}`;
  }, [dropup, dropleft, dropright, right]);

  useEffect(() => {
    if (!isOpenValue || !referenceElm || !menuElement) {
      if (popperRef.current) {
        popperRef.current.destroy();
        popperRef.current = null;
      }
      return;
    }

    popperRef.current = createPopper(referenceElm, menuElement, {
      placement: placement as any,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 10],
          },
        },
        {
          name: "computeStyles",
          options: {
            adaptive: false,
            gpuAcceleration: false,
          },
        },
        {
          name: "applyStyles",
          enabled: false,
        },
        {
          name: "updateState",
          enabled: true,
          phase: "write",
          fn: ({ state }) => {
            setPopperStyle(state.styles.popper as CSSProperties);
            setPopperAttributes(state.attributes.popper || {});
          },
        },
      ],
    });
    popperRef.current.forceUpdate();

    return () => {
      if (popperRef.current) {
        popperRef.current.destroy();
        popperRef.current = null;
      }
    };
  }, [isOpenValue, menuElement, placement, referenceElm]);

  if (!isOpenValue) {
    return null;
  }

  const dropDownMenuClasses = classNames("dropdown-menu show", className);

  return (
    <ThemeProvider theme={theme}>
      <Component
        className={dropDownMenuClasses}
        ref={(node) => setMenuElement(node)}
        style={{
          ...popperStyle,
          padding: "1em",
          transformOrigin: "top center",
          transition: "opacity 120ms ease, transform 120ms ease",
          opacity: 1,
          zIndex: 1000,
        }}
        {...popperAttributes}
      >
        {children}
      </Component>
    </ThemeProvider>
  );
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
