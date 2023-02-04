import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Component } from './Button.style'

interface Props {
  action?: boolean,
  active?: boolean,
  block?: boolean,
  children?: React.ReactNode,
  circle?: boolean,
  className?: string,
  color?: string,
  disabled?: boolean,
  download?: string,
  flat?: boolean,
  innerRef?: React.MutableRefObject<HTMLDivElement | undefined> ,
  onClick?: Function,
  role?: string,
  size?: string,
  social?: string,
  tag?: string,
  target?: string,
  type?: string,
  gradient?: boolean | string | any,
  outline?: boolean,
  rounded?: boolean | any,
  href?: string,
  style?: React.CSSProperties
}

const Button = (props: Props) => {
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
    style,
    ...attributes
  } = props

  const _ref = useRef<HTMLDivElement>()

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

  if (typeof innerRef === "string") {
    
  }

  return (
    <Component
      data-test='button'
      type={tag === 'button' && !type ? 'button' : type}
      as={(tag as unknown) as undefined}
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
      style={style}
    >
      {children}
    </Component>
  )
}

Button.defaultProps = {
  color: 'primary',
  tag: 'button',
  size: 'medium',
  circle: false,
  innerRef: undefined
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
  innerRef: PropTypes.any,
  onClick: PropTypes.func,
  role: PropTypes.string,
  size: PropTypes.string,
  social: PropTypes.string,
  tag: PropTypes.string,
  target: PropTypes.string,
  type: PropTypes.string,
  outline: PropTypes.bool
}

export default Button
export { Button as CDBBtn }
