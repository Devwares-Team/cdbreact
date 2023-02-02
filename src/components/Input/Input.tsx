import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
  Component as StyledComponent,
  StyledInput,
  StyledTextArea
} from './Input.style'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'

interface Props {
  background?: string
  className?: string
  color?: string
  disabled?: boolean
  focused?: boolean
  fontSize?: number
  getValue?: Function
  placeholder?: string
  id?: string
  indeterminate?: boolean
  inputClassName?: string
  labelClassName?: string
  onBlur?: Function
  onChange?: Function
  onFocus?: Function
  onInput?: Function
  size?: string
  type?: string
  value?: string
  valueDefault?: string
  icon?: React.ReactNode
}

const Input = (props: Props) => {
  const {
    background,
    className,
    color,
    disabled,
    focused,
    fontSize,
    getValue,
    placeholder,
    id,
    indeterminate,
    inputClassName,
    labelClassName,

    onBlur,
    onChange,
    onFocus,
    onInput,
    size,
    icon,
    type,
    value,
    valueDefault,
    ...attributes
  } = props

  {
    const [innerValue, setInnerValue] = useState(value || valueDefault)
    const [isFocused, setIsFocused] = useState(focused)
    const inputRef = useRef<HTMLElement>()

    useEffect(() => {
      isFocused && inputRef.current!.focus()
      if (indeterminate && inputRef.current instanceof HTMLInputElement)
        inputRef.current!.indeterminate = true
    }, [isFocused])

    const handleBlur = (event) => {
      event.stopPropagation()
      setIsFocused(false)
      onBlur && onBlur(event)
    }

    const handleFocus = (event) => {
      event.stopPropagation()
      setIsFocused(false)
      onFocus && onFocus(event)
    }

    const handleChange = (event) => {
      event.stopPropagation()
      const { value, checked } = event.target
      if (type !== 'checkbox' && type !== 'radio') {
        setInnerValue(value)
        getValue && getValue(value)
      } else {
        getValue && getValue(checked)
      }
      onChange && onChange(event)
    }

    const handleInput = (event) => {
      event.stopPropagation()
      if (type !== 'checkbox' && type !== 'radio') {
        setInnerValue(event.target.value)
      }
      onInput && onInput(event)
    }
    const isNotEmpty =
      (!!innerValue ||
        !!placeholder ||
        isFocused ||
        (typeof innerValue === 'number' && innerValue === 0)) &&
      type !== 'checkbox' &&
      type !== 'radio'
    const classes = classNames(
      'contrast-input',
      className,
      background && `bg`,
      color && `input-color-${color}`,
      size === 'lg' && 'size-lg',
      size === 'sm' && 'size-sm',
      type === 'checkbox' && 'checkbox',
      type === 'radio' && 'radio'
    )
    const labelClassNames = classNames(
      isNotEmpty || placeholder ? 'active' : false,
      disabled ? 'disabled' : false,
      labelClassName
    )

    return (
      <ThemeProvider theme={theme}>
        <StyledComponent className={classes} fontSize={fontSize}>
          {icon && <span className='icon'>{icon}</span>}
          {type === 'textarea' ? (
            <StyledTextArea
              // fontSize={fontSize}
              ref={inputRef as React.MutableRefObject<HTMLTextAreaElement>}
              onBlur={handleBlur}
              onChange={handleChange}
              onInput={handleInput}
              onFocus={handleFocus}
              // type={type}
              placeholder={placeholder}
              {...attributes}
              className={inputClassName}
              id={id}
              value={innerValue}
              aria-disabled={disabled}
              rows={10}
            />
          ) : (
            <StyledInput
              // fontSize={fontSize}
              ref={inputRef as React.MutableRefObject<HTMLInputElement>}
              onBlur={handleBlur}
              onChange={handleChange}
              onInput={handleInput}
              onFocus={handleFocus}
              {...attributes}
              className={inputClassName}
              id={id}
              type={type}
              placeholder={placeholder}
              value={innerValue}
              aria-disabled={disabled}
            />
          )}

          {(type === 'checkbox' || type === 'radio') && (
            <label
              className={labelClassNames}
              htmlFor={id}
              id={id}
              aria-labelledby={id}
            />
          )}
        </StyledComponent>
      </ThemeProvider>
    )
  }
}

Input.propTypes = {
  icon: PropTypes.node,
  background: PropTypes.string, // has background
  className: PropTypes.string, // string: classess of input-container
  color: PropTypes.string, // color value of input
  disabled: PropTypes.bool, // bool: disabled state of input
  focused: PropTypes.bool, // bool: initial focused state of input
  fontSize: PropTypes.number, // string: font-size of input placeholder and value
  getValue: PropTypes.func, // func():get input value
  placeholder: PropTypes.string,
  id: PropTypes.string,
  indeterminate: PropTypes.bool,
  inputClassName: PropTypes.string, // string: classname of input
  labelClassName: PropTypes.string, // string: classname of label
  onBlur: PropTypes.func, // func(): called when input is blurred
  onChange: PropTypes.func, // func(): called when input value changes
  onFocus: PropTypes.func, // func(): called when input is focused
  onInput: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.string, // string: input type
  value: PropTypes.string, // string: initial value of input
  valueDefault: PropTypes.string
}

Input.defaultProps = {
  valueDefault: '',
  background: PropTypes.string,
  className: '',
  color: 'dark',
  disabled: false,
  focused: false,
  fontSize: 14,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  indeterminate: PropTypes.bool,
  inputClassName: '',
  labelClassName: '',
  type: 'text',
  value: '',
  getValue: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onInput: () => {},
  size: '',
  icon: null
}

export default Input
export { Input as CDBInput }
