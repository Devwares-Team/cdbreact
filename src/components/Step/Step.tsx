import React, { useContext } from "react";
import { StepperContext } from "../Stepper/Stepper";
import PropTypes from "prop-types";
import StepperDivider from "../Stepper/StepperDivider";
import ReactTooltip from "react-tooltip";
import classNames from "classnames";
import { Component } from "./Step.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { useEffect } from "react";

interface Props {
  name?: string,
  icon?: string,
  far?: boolean,
  fab?: boolean,
  fas?: boolean,
  id?: number,
  component?: React.ReactNode,
  children?: React.ReactNode,
  handleClick?: Function,
  active?: any
}

export const Step = (props: Props) => {
  let {
    name,
    icon,
    children,
    far,
    fab,
    fas,
    handleClick,
    active,
    id,
    component,
    ...attributes
  } = props

  const {
    mainColor,
    children: mainChildren,
    direction,
    stepSize,
    setActive,
    showTooltip,
    showTitle
  } = useContext<any>(StepperContext)
  const stepClasses = classNames('default-node', id === active && 'active')

  const status = id < active ? 'prev' : id === active ? 'active' : 'next'

  const iconPrefix = far ? 'far' : fas ? 'fas' : fab ? 'fab' : 'fa'

  const iconClass = classNames(iconPrefix, icon ? `fa-${icon}` : false)

  useEffect(() => {
    setActive(active)
  }, [active])

  let stepIcon = icon ? <i className={iconClass}></i> : null
  return (
    <ThemeProvider theme={theme}>
      <Component
        className='steps'
        key={name}
        icon={icon}
        {...attributes}
        tooltipBackground={mainColor}
        background={mainColor}
        active={active}
        status={status}
        direction={direction}
        size={stepSize}
      >
        {showTitle && (
          <div className='step-title'>
            <span className='step-number'>0{id}</span>
            <div className='step-text'>{name}</div>
          </div>
        )}
        <div
          className='step-indicators'
          data-for={`tip ${name}`}
          key={name}
          data-tip
        >
          <div className={stepClasses} onClick={() => handleClick()}>
            {icon ? stepIcon : `0${id}`}
          </div>
          {id < mainChildren.length && <StepperDivider status={status} />}
          {showTooltip && (
            <ReactTooltip id={`tip ${name}`} place='top' effect='solid'>
              {name}
            </ReactTooltip>
          )}
        </div>
      </Component>
    </ThemeProvider>
  )
}

Step.defaultProps = {
  component: <div>Hello</div>
}

Step.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  far: PropTypes.bool,
  fab: PropTypes.bool,
  fas: PropTypes.bool,
  id: PropTypes.number,
  component: PropTypes.node
}

export default Step

export { Step as CDBStep }
