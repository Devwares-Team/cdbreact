import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../theme";

import { Link } from "react-scroll";

const SmoothScroll = (props) => {
  const { children, ...attributes } = props;
  let smoothScrollComp = (
    <ThemeProvider theme={theme}>
      <Link {...attributes}>
        {children}
      </Link>
    </ThemeProvider>
  );
  return smoothScrollComp;
};

SmoothScroll.defaultProps = {
  offset: -70,
  duration: 500,
  smooth: true,
  spy: true,
};

SmoothScroll.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  smooth: PropTypes.bool,
  spy: PropTypes.bool,
  offset: PropTypes.number,
  duration: PropTypes.number,
  activeClass: PropTypes.string,
};

export default SmoothScroll;

export { SmoothScroll as CDBSmoothScroll };
