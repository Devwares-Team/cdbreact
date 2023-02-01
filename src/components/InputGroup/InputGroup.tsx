import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CDBInput from '../Input'
import { Component } from './InputGroup.style'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'

interface Props{
  append?: [React.ReactNode, string],
  appendClassNames?: string,
  ariaLabel?: string,
  background?: boolean,
  children?: React.ReactNode,
  className?: string,
  containerClassName?: string,
  containerId?: string,
  getValue?: Function,
  hint?: string,
  id?: string,
  inputs?: React.ReactNode,
  label?: string,
  labelClassName?: string,
  material?: boolean,
  onChange?: Function,
  onIconClick?: Function,
  prepend?: any,
  prependClassName?: string,
  size?: string,
  tag?: [string, Function],
  textClassName?: string,
  type?: any,
  value?: string,
  valueDefault?: string
  appendClassName?: any,
  icon?: any,
  as ?: any,
  notag?: any
  div?: any
}

const InputGroup = (props: Props) => {
  const {
    append,
    appendClassName,
    ariaLabel,
    as,
    notag,
    background,
    children,
    className,
    containerClassName,
    containerId,
    hint,
    icon,
    id,
    div,
    inputs,
    label,
    labelClassName,
    material,
    prepend,
    prependClassName,
    size,
    tag,
    textClassName,
    type,
    value,
    valueDefault,
    getValue,
    onChange,
    onIconClick,
    ...attributes
  } = props
  const containerClassNames = classNames(
    material && 'md-form',
    'input-group',

    size && `input-group-${size}`,
    containerClassName
  )

  const inputClassNames = classNames(
    className,
    background && 'input-background'
  )

  const prependClassNames = classNames('input-group-prepend', prependClassName)

  const appendClassNames = classNames('input-group-append', appendClassName)

  const textClassNames = classNames(
    'input-group-text',
    material && 'md-addon',
    textClassName
  )

  const handleChange = (event) => {
    event.persist()
    onChange && onChange(event)
    getValue && getValue(event.target.value)
  }

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        {label && (
          <label htmlFor={id} className={labelClassName}>
            {label}
          </label>
        )}
        <Component>
          <div
           
            data-test='input-group'
            {...attributes}
            className={containerClassNames}
            id={containerId}
          >
            {prepend && (
              <div className={prependClassNames}>
                {typeof prepend === 'string' ? (
                  <span className={textClassNames}>{prepend}</span>
                ) : (
                  prepend
                )}
              </div>
            )}
            {inputs || (
              <CDBInput
                // noTag
                type={type}
                className={inputClassNames}
                icon={icon}
                id={id}
                value={value}
                valueDefault={valueDefault}
                // hint={hint}
                aria-label={ariaLabel}
                onChange={handleChange}
                // onIconClick={onIconClick}
              />
            )}
            {append && (
              <div className={appendClassNames}>
                {typeof append === 'string' ? (
                  <span className={textClassNames}>{append}</span>
                ) : (
                  append
                )}
              </div>
            )}
            {children}
          </div>
        </Component>
      </React.Fragment>
    </ThemeProvider>
  )
}

InputGroup.propTypes = {
  append: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  appendClassNames: PropTypes.string,
  ariaLabel: PropTypes.string,
  background: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  containerId: PropTypes.string,
  getValue: PropTypes.func,
  hint: PropTypes.string,
  id: PropTypes.string,
  inputs: PropTypes.node,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  material: PropTypes.bool,
  onChange: PropTypes.func,
  onIconClick: PropTypes.func,
  prepend: PropTypes.any,
  prependClassName: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  textClassName: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  valueDefault: PropTypes.string
}

InputGroup.defaultProps = {
  tag: 'div',
  type: 'text'
}

export default InputGroup
export { InputGroup as CDBInputGroup }
