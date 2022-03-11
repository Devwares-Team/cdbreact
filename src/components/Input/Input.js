import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CDBIcon from '../Icon'
import { Component as StyledComponent } from './Input.style'
import { ThemeProvider } from 'styled-components'
import { theme } from './../../theme'

class Input extends React.Component {
  state = {
    innerValue: this.props.value || this.props.valueDefault,
    isFocused: false,
    isPristine: true
  }

  inputElementRef = React.createRef()

  componentDidMount() {
    const { inputRef, focused, indeterminate, selectInnerRef } = this.props

    inputRef && inputRef(this.inputElementRef.current)
    selectInnerRef && selectInnerRef(this.inputElementRef)

    if (focused === true) {
      this.setState({ isFocused: focused }, () => {
        this.setFocus()
      })
    }

    if (indeterminate) {
      this.inputElementRef.current.indeterminate = true
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== prevState.value) {
      return { innerValue: nextProps.value }
    }

    return null
  }

  onBlur = (event) => {
    event.stopPropagation()
    const { onBlur } = this.props
    this.setState({ isFocused: false })
    onBlur && onBlur(event)
  }

  onFocus = (event) => {
    event.stopPropagation()
    const { onFocus } = this.props
    this.setState({ isFocused: true })
    onFocus && onFocus(event)
  }

  onChange = (event) => {
    event.stopPropagation()
    const { type, onChange, getValue } = this.props
    const { value, checked } = event.target

    if (type !== 'checkbox' && type !== 'radio') {
      this.setState({
        innerValue: value,
        isPristine: false
      })
      getValue && getValue(value)
    } else {
      getValue && getValue(checked)
    }

    onChange && onChange(event)
  }

  onInput = (event) => {
    event.stopPropagation()
    const { type, onInput } = this.props
    if (type !== 'checkbox' && type !== 'radio') {
      this.setState({
        innerValue: event.target.value,
        isPristine: false
      })
    }

    onInput && onInput(event)
  }

  setFocus = () => {
    this.inputElementRef.current.focus()
  }

  render() {
    const {
      background,
      children,
      className,
      color,
      containerClass,
      dataTest,
      disabled,
      error,
      filled,
      focused,
      fontSize,
      gap,
      getValue,
      group,
      hint,
      height,
      icon,
      iconBrand,
      iconClass,
      iconLight,
      iconRegular,
      iconSize,
      id,
      indeterminate,
      inputRef,
      isControlled,
      selectInnerRef,
      noTag,
      material,
      label,
      labelClass,
      labelId,
      labelStyles,
      onIconClick,
      onIconMouseEnter,
      onIconMouseLeave,
      size,
      success,
      tag: Tag,
      type,
      validate,
      value,
      valueDefault,
      width,
      ...attributes
    } = this.props

    const { innerValue, isFocused } = this.state
    const isNotEmpty =
      (!!innerValue || !!hint || isFocused || innerValue === 0) &&
      type !== 'checkbox' &&
      type !== 'radio'
    let TagInput = ''
    let formControlClass = ''
    let formSizeClass = ''

    if (type === 'textarea') {
      formControlClass = material ? 'md-textarea form-control' : 'form-control'
      TagInput = 'textarea'
      formSizeClass = size ? `form-control-${size}` : false
    } else {
      formControlClass = 'form-control'
      TagInput = 'input'
      attributes.type = type
      formSizeClass = size ? `form-control-${size}` : false
    }

    if (type === 'checkbox' || type === 'radio') {
      formControlClass = null
      formSizeClass = null
    }

    const inputStyle = {
      height: height,
      width: width
    }

    attributes.disabled = disabled

    const classes = classNames(
      formControlClass,
      formSizeClass,
      background && 'bg',
      material && background && 'md-bg',
      validate ? 'validate' : false,
      filled ? 'filled-in' : false,
      gap ? 'with-gap' : false,
      type === 'checkbox' ? (gap ? false : 'form-check-input') : false,
      type === 'radio' ? 'form-check-input' : false,
      className
    )

    const containerClassFix = classNames(
      type === 'checkbox' || type === 'radio'
        ? typeof label === 'boolean' && label
          ? 'd-flex'
          : 'form-check'
        : 'cdb-form',

      group ? 'form-group' : false,
      size ? `form-${size}` : false,
      material ? false : 'md-outline',
      containerClass
    )

    const iconClassFix = classNames(
      isNotEmpty && isFocused ? 'active' : false,
      iconClass,
      'prefix'
    )

    const labelClassFix = classNames(
      (isNotEmpty && !isControlled) || hint ? 'active' : false,
      disabled ? 'disabled' : false,
      type === 'checkbox' ? 'form-check-label' : false,
      type === 'radio' ? 'form-check-label' : false,
      labelClass
    )
    console.log(innerValue, 'innerValue')

    const renderFunction = () => (
      <ThemeProvider theme={theme}>
        <Fragment>
          {icon && (
            <CDBIcon
              icon={icon}
              size={iconSize}
              brand={iconBrand}
              light={iconLight}
              regular={iconRegular}
              className={iconClassFix}
              onClick={onIconClick || this.setFocus}
              onMouseEnter={onIconMouseEnter}
              onMouseLeave={onIconMouseLeave}
            />
          )}
          <TagInput
            data-test={dataTest}
            {...attributes}
            className={classes}
            id={id}
            style={inputStyle}
            placeholder={hint}
            ref={this.inputElementRef}
            value={innerValue}
            onBlur={this.onBlur}
            onChange={this.onChange}
            onInput={this.onInput}
            onFocus={this.onFocus}
            aria-disabled={disabled}
          />
          {innerValue.length <= 0 && label && (
            <label
              className={labelClassFix}
              htmlFor={id}
              data-error={error}
              data-success={success}
              id={labelId}
              onClick={this.setFocus}
              style={labelStyles}
              aria-labelledby={labelId}
            >
              {label}
            </label>
          )}
          {children}
        </Fragment>
      </ThemeProvider>
    )

    return noTag ? (
      renderFunction()
    ) : (
      <StyledComponent
        className={containerClassFix}
        size={fontSize}
        color={color}
      >
        {renderFunction()}
      </StyledComponent>
    )
  }
}

Input.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  containerClass: PropTypes.string,
  color: PropTypes.string,
  dataTest: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  filled: PropTypes.bool,
  focused: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  fontSize: PropTypes.number,
  gap: PropTypes.bool,
  getValue: PropTypes.func,
  group: PropTypes.bool,
  hint: PropTypes.string,
  height: PropTypes.string,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconClass: PropTypes.string,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  id: PropTypes.string,
  indeterminate: PropTypes.bool,
  inputRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  isControlled: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.bool
  ]),
  labelClass: PropTypes.string,
  labelId: PropTypes.string,
  labelStyles: PropTypes.object,
  noTag: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onIconClick: PropTypes.func,
  onIconMouseEnter: PropTypes.func,
  onIconMouseLeave: PropTypes.func,
  onInput: PropTypes.func,
  material: PropTypes.bool,
  size: PropTypes.string,
  success: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
  validate: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool
  ]),
  valueDefault: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.string
}

Input.defaultProps = {
  className: '',
  containerClass: '',
  dataTest: 'input',
  disabled: false,
  error: '',
  filled: false,
  gap: false,
  group: false,
  hint: undefined,
  icon: '',
  iconBrand: false,
  focused: false,
  fontSize: 15,
  indeterminate: false,
  iconClass: '',
  iconLight: false,
  onIconMouseEnter: () => {},
  onIconMouseLeave: () => {},
  iconRegular: false,
  iconSize: undefined,
  id: undefined,
  isControlled: false,
  noTag: false,
  material: false,
  label: ' ',
  labelClass: '',
  labelId: '',
  size: 'lg',
  success: '',
  tag: 'div',
  type: 'text',
  validate: false,
  valueDefault: '',
  color: 'dark'
}

export default Input
export { Input as CDBInput }
