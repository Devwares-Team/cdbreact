import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

interface Props{
  value?: number | string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
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
  const {
    value,
    min = 0,
    max = 100,
    step = 1,
    size,
    variant,
    inputProps,
    className,
    disabled,
    tooltip = "off",
    tooltipPlacement = "top",
    tooltipLabel,
    tooltipStyle,
    tooltipProps,
    onChange,
    onAfterChange,
    setValue,
    bsPrefix,
    ...attributes
  } = props;
  const [internalValue, setInternalValue] = React.useState<number>(Number(value ?? min));
  const sliderValue = value !== undefined ? Number(value) : internalValue;
  const sliderClasses = classNames("slider", className);

  React.useEffect(() => {
    if (value !== undefined) {
      setInternalValue(Number(value));
    }
  }, [value]);

  const onValueChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = Number(changeEvent.target.value);
    if (value === undefined) {
      setInternalValue(nextValue);
    }

    if (typeof setValue === "function") {
      setValue(nextValue);
    }

    if (onChange) {
      onChange(changeEvent);
    }
  };

  const onValueCommit = (
    event: React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>
  ) => {
    if (onAfterChange) {
      onAfterChange(
        (event as unknown) as React.ChangeEvent<HTMLInputElement>,
        Number(event.currentTarget.value)
      );
    }
  };

  const renderTooltip = tooltip !== "off";
  const displayTooltip = tooltipLabel ? tooltipLabel(sliderValue) : sliderValue;
  const tooltipStyles =
    tooltipPlacement === "bottom" ? { marginTop: "0.5rem" } : { marginBottom: "0.5rem" };

  const sliderComponent = (
    <ThemeProvider theme={theme}>
      <div>
        {renderTooltip && (
          <div
            style={{ ...tooltipStyles, ...tooltipStyle }}
            className={classNames("small text-muted", tooltipPlacement === "bottom" && "order-2")}
            {...tooltipProps}
          >
            {displayTooltip}
          </div>
        )}
        <input
          type="range"
          value={sliderValue}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onChange={onValueChange}
          onMouseUp={onValueCommit}
          onTouchEnd={onValueCommit}
          className={classNames(
            bsPrefix || "form-range",
            size && `form-range-${size}`,
            variant && `text-${variant}`,
            sliderClasses
          )}
          {...inputProps}
          {...attributes}
        />
      </div>
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
  tooltip: "off",
};

export default Slider;
export { Slider as CDBSlider };
