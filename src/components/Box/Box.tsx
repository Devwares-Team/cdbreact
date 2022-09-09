import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./Box.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";


interface Props{
  alignContent ?: string,
  alignItems ?: string,
  alignSelf ?: string,
  bgColor ?: string,
  children ?: React.ReactNode,
  className ?: string,
  color ?: string,
  display ?: string,
  flex ?: string,
  justifyContent ?: string,
  m ?: [number, string],
  mb?: [number, string],
  ml?: [number, string],
  mr?: [number, string],
  mt?: [number, string],
  mx?: [number, string],
  my?: [number, string],
  p?: [number, string],
  pb?: [number, string],
  pl?: [number, string],
  pr?: [number, string],
  pt?: [number, string],
  px?: [number, string],
  py?: [number, string],
  tag: string,
  space ?: [number, string]

}

const Box = (props: Props) => {
  const {
    tag,
    className,
    children,
    display,
    justifyContent,
    flex,
    alignItems,
    alignContent,
    alignSelf,
    color,
    space,
    bgColor,
    m,
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    p,
    pt,
    pr,
    pb,
    pl,
    px,
    py,
    ...attributes
  } = props;

  const marginOrPadding = (props, suffix) => {
    if (props !== undefined) {
      return `${suffix}-${props}`;
    }
  };

  const classes = classNames(
    display && `d-${display}`,
    justifyContent && `justify-content-${justifyContent}`,
    flex && `flex-${flex}`,
    alignItems && `align-items-${alignItems}`,
    alignContent && `align-content-${alignContent}`,
    alignSelf && `align-self-${alignSelf}`,
    color && `${color}-text`,
    bgColor && `bg-${bgColor}`,
    marginOrPadding(m, "m"),
    marginOrPadding(mt, "mt"),
    marginOrPadding(mr, "mr"),
    marginOrPadding(mb, "mb"),
    marginOrPadding(ml, "ml"),
    marginOrPadding(mx, "mx"),
    marginOrPadding(my, "my"),
    marginOrPadding(p, "p"),
    marginOrPadding(pt, "pt"),
    marginOrPadding(pr, "pr"),
    marginOrPadding(pb, "pb"),
    marginOrPadding(pl, "pl"),
    marginOrPadding(px, "px"),
    marginOrPadding(py, "py"),
    className
  );
  const isEmptyClass = classes !== "" ? classes : null;

  return (
    <ThemeProvider theme={theme}>
      <Component
        as={tag}
        data-test="box"
        {...attributes}
        className={isEmptyClass}
        color={color}
        space={space}
      >
        {children}
      </Component>
    </ThemeProvider>
  );
};
Box.propTypes = {
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  alignSelf: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  display: PropTypes.string,
  flex: PropTypes.string,
  justifyContent: PropTypes.string,
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  my: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tag: PropTypes.string,
};

Box.defaultProps = {
  tag: "div",
};

export default Box;
export { Box as CDBBox };
