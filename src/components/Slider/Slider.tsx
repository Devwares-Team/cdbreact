import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import RangeSlider from "react-bootstrap-range-slider";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

interface Props{
  value?: number | string,
  onAfterChange?: (ev: React.ChangeEvent<HTMLInputElement>, value: number) => void,
  min?: number,
  max?: number,
  step?: number,
  disabled?: boolean,
  size?: "sm" | "lg"
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light",
  inputProps?: object,
  tooltip?: "auto" | "on" | "off"
  tooltipPlacement?: "top" | "bottom",
  tooltipLabel?: (value: number) => string | React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  tooltipStyle?: object,
  tooltipProps?: object,
  className?: string,
  bsPrefix?: string
  setValue?: any 
}

const Slider = (props: Props) => {
  const { value, setValue, className, ...attributes } = props;
  const sliderClasses = classNames("slider", className);
  let sliderComponent = (
    <ThemeProvider theme={theme}>
      <RangeSlider
        value={value}
        onChange={(changeEvent) => setValue(changeEvent.target.value)}
        className={sliderClasses}
        {...attributes}
      />
    </ThemeProvider>
  );
  return sliderComponent;
};
Slider.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  onAfterChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg"]),
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
    "light",
  ]),
  inputProps: PropTypes.object,
  tooltip: PropTypes.oneOf(["auto", "on", "off"]),
  tooltipPlacement: PropTypes.oneOf(["top", "bottom"]),
  tooltipLabel: PropTypes.func,
  tooltipStyle: PropTypes.object,
  tooltipProps: PropTypes.object,
  className: PropTypes.string,
  bsPrefix: PropTypes.string
};
Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
};

export default Slider;
export { Slider as CDBSlider };
