import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Component } from './Button.style'

const Button = (props) => {
  let {
    action,
    active,
    block,
    children,
    circle,
    className,
    color,
    disabled,
    download,
    flat,
    gradient,
    innerRef,
    outline,
    role,
    rounded,
    size,
    social,
    tag,
    target,
    type,
    ...attributes
  } = props

  const buttonClasses = classNames(
    'Ripple-parent',
    {
      active,
      'btn-block': block,
      'btn-action': action,
      [`btn-${social}`]: social,
      disabled
    },
    className
  )

  if (attributes.href && tag === 'button') {
    tag = 'a'
  }

  return (
    <Component
      data-test='button'
      type={tag === 'button' && !type ? 'button' : type}
      as={tag}
      target={target}
      role={tag === 'a' && !role ? 'button' : role}
      className={buttonClasses}
      colors={color}
      ref={innerRef}
      size={size}
      flat={flat}
      {...attributes}
      download={download}
      circle={circle}
      disabled={disabled}
      outline={outline}
      bg={color}
    >
      {children}
    </Component>
  )
}

Button.defaultProps = {
  color: 'primary',
  tag: 'button',
  size: 'medium',
  circle: false
}

Button.propTypes = {
  action: PropTypes.bool,
  active: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.node,
  circle: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  download: PropTypes.string,
  flat: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  role: PropTypes.string,
  size: PropTypes.string,
  social: PropTypes.string,
  tag: PropTypes.string,
  target: PropTypes.string,
  type: PropTypes.string
}

export default Button
export { Button as CDBBtn }
