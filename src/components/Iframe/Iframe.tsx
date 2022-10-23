import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Component } from "./Iframe.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";


interface Props {
  src: string,
  allowFullScreen: boolean,
  className: string,
  height: any,
  id: string,
  name: string,
  onLoad: Function,
  onMouseOut: Function,
  onMouseOver: Function,
  ratio: any,
  sandbox: string,
  iframe: any,
  styles: object,
  title: string,
  width: any,
  style: any,
  iframeAttributes: any
}

const Iframe = (props: Props) => {
  const [stateWidth, setStateWidth] = useState("");
  const [stateHeight, setStateHeight] = useState("");
  const [stateRatio, setRatio] = useState("");

  useEffect(() => {
    const { ratio } = props;
    let { width, height } = props;
    let ratioNumber = 9 / 16;

    if (ratio) {
      const newRatio = ratio.split("by")[0] / ratio.split("by")[1];
      if (typeof ratioNumber === "number") {
        ratioNumber = newRatio;
      }
    }

    if (width && height) {
      return;
    }
    if (width) {
      height = width * ratioNumber;
    } else if (height) {
      width = height * (1 / ratioNumber);
    }

    setStateHeight(height);
    setStateWidth(width);
    setRatio(ratio);
  }, [setStateHeight, setStateWidth, setRatio, props]);
  const {
    allowFullScreen,
    className,
    id,
    name,
    iframe,
    onMouseOver,
    onMouseOut,
    onLoad,
    sandbox,
    src,
    style,
    title = "",
    ratio,
    height,
    width,
    ...attributes
  } = props;

  const classes = classNames("embed-responsive-item", className);
  const wrapperClasses = classNames(
    !(height || width) && "embed-responsive",
    ratio ? `embed-responsive-${ratio}` : "embed-responsive-16by9"
  );

  let iframeAttributes = {
    src,
    id: id || false,
    frameBorder: "0",
    target: "_parent",
    ratio: stateRatio || "4by3",
    allowFullScreen: allowFullScreen || true,
    height: stateHeight || "100%",
    name: name || undefined,
    width: stateWidth || "100%",
    onLoad: onLoad || undefined,
    onMouseOver: onMouseOver || undefined,
    onMouseOut: onMouseOut || undefined,
    sandbox: sandbox || undefined,
    style: style || undefined,
  };
  const returnAttributes = (attributes) => {
    const newAttributesObject = Object.keys(attributes).reduce(
      (previousValue, currentElement) => {
        if (attributes[currentElement]) {
          previousValue[currentElement] = attributes[currentElement];
        }
        return previousValue;
      },
      {}
    );

    return newAttributesObject;
  };
  
  iframeAttributes = returnAttributes(iframeAttributes);

  return (
    <ThemeProvider theme={theme}>
      <Component data-test="iframe" className={wrapperClasses} {...attributes}>
        <iframe
          title={title}
          className={classes}
          ratio={ratio}
          {...iframeAttributes}
          {...props}
        />
      </Component>
    </ThemeProvider>
  );
};

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
  allowFullScreen: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  onLoad: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  ratio: PropTypes.string,
  sandbox: PropTypes.string,
  styles: PropTypes.object,
  title: PropTypes.string,
  width: PropTypes.number,
};

export default Iframe;
export { Iframe as CDBIframe };
