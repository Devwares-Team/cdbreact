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
import { CDBIcon } from '../Icon/Icon'

interface Props {
  background?: boolean
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
  checked?: boolean
  label?: string,
  material?: boolean,
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
    checked,
    label,
    material,
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
      type === 'radio' && 'radio',
      material && "mb-0"
    )
    const labelClassNames = classNames(
      isNotEmpty || placeholder ? 'active' : false,
      disabled ? 'disabled' : false,
      labelClassName
    )

    const inputClassNames= classNames(
      material && "pt-0  border-top-0 border-end-0 border-start-0 ",
      inputClassName
    )

    return (
      <ThemeProvider theme={theme}>
               {
          !material && label && type !== 'checkbox' && type !== 'radio'&& 
          <label
          className={labelClassNames }
          htmlFor={id}
          id={id}
          aria-labelledby={id}
        > {label}</label>
        }
        <StyledComponent className={classes} fontSize={fontSize}>
          {icon && <span className='icon'>{
            typeof icon === 'string' ? <CDBIcon icon={icon}/> : icon
          }</span>}
          {type === 'textarea' ? (
            <StyledTextArea
             fontSize={fontSize}
              ref={inputRef as React.MutableRefObject<HTMLTextAreaElement>}
              onBlur={handleBlur}
              onChange={handleChange}
              onInput={handleInput}
              onFocus={handleFocus}
              // type={type}
              placeholder={placeholder}
              {...attributes}
              className={inputClassNames}
              id={id}
              value={innerValue}
              aria-disabled={disabled}
              rows={10}
            />
          ) : (
            <StyledInput
              fontSize={fontSize}
              ref={inputRef as React.MutableRefObject<HTMLInputElement>}
              onBlur={handleBlur}
              onChange={handleChange}
              onInput={handleInput}
              onFocus={handleFocus}
              checked={checked}
              {...attributes}
              className={inputClassNames}
              id={id}
              type={type}
              placeholder={placeholder}
              value={innerValue}
              aria-disabled={disabled}
              disabled={disabled}
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

        {
          material && label && type !== 'checkbox' && type !== 'radio'&& 
          <label
          className={labelClassNames }
          htmlFor={id}
          id={id}
          aria-labelledby={id}
        > {label}</label>
        }
      </ThemeProvider>
    )
  }
}

Input.propTypes = {
  icon: PropTypes.node,
  background: PropTypes.bool, // has background
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
  valueDefault: PropTypes.string,
  checked: PropTypes.bool
}

Input.defaultProps = {
  valueDefault: '',
  background: false,
  className: '',
  color: 'dark',
  disabled: false,
  focused: false,
  fontSize: 14,
  placeholder: '',
  id: Date.now().toString(),
  indeterminate: false,
  inputClassName: '',
  labelClassName: '',
  type: 'text',
  value: '',
  getValue: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onInput: () => {},
  size: '',
  icon: null,
}

export default Input
export { Input as CDBInput }
