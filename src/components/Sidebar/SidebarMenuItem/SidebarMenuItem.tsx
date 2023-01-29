import React, { forwardRef, useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { InnerMenuItem, InnerMenuLi } from './SidebarMenuItem.style'
import { SidebarContext } from '../Sidebar'
import CDBIcon from '../../Icon'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../theme'

interface Props {
  children: React.ReactNode
  className: string
  icon: string
  iconSize: string
  iconType: string
  iconClassName: string
  textFontSize: string
  active: boolean
  suffix: React.ReactNode
  firstChild: number
  popperArrow: number
}

const SidebarMenuItem = forwardRef<HTMLLIElement, Props>(
  (
    {
      children,
      className,
      icon,
      iconSize,
      iconType,
      iconClassName,
      textFontSize,
      active,
      suffix,
      firstChild,
      popperArrow,
      ...rest
    },
    ref
  ) => {
    const menuItemRef = ref ? ref : React.createRef<HTMLLIElement>()
    const { toggled } = useContext(SidebarContext)

    return (
      <ThemeProvider theme={theme}>
        <InnerMenuLi
          {...rest}
          ref={menuItemRef}
          className={classNames(className, { active }, { toggled })}
        >
          <InnerMenuItem
            className={classNames({ active }, { toggled })}
            tabIndex={0}
            fontSize={textFontSize}
            role='button'
            toggled={toggled}
          >
            {icon && (
              <CDBIcon
                icon={icon}
                size={iconSize}
                className={classNames(
                  iconClassName,
                  'side-icon',
                  iconType && `fa-${iconType}`
                )}
              />
            )}
            <span className='item-content'>{children}</span>
            {suffix ? <span className='suffix-wrapper'>{suffix}</span> : null}
          </InnerMenuItem>
        </InnerMenuLi>
      </ThemeProvider>
    )
  }
)

SidebarMenuItem.propTypes = {
  children: PropTypes.any, // PropTypes.node,
  className: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconSize: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  suffix: PropTypes.any, // PropTypes.node.isRequired,
  firstChild: PropTypes.number.isRequired,
  popperArrow: PropTypes.number.isRequired,
  textFontSize: PropTypes.string.isRequired
}

SidebarMenuItem.defaultProps = {
  iconSize: 'md'
}

export default SidebarMenuItem

export { SidebarMenuItem as CDBSidebarMenuItem }
