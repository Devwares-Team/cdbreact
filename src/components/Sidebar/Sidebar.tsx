import React, {
  forwardRef,
  createContext,
  useState,
  useEffect,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { SidebarContainer, SidebarInner, SidebarLayout } from './Sidebar.style'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'

export type SidebarContextType = {
  toggled: boolean
  handleToggleSidebar: (val: boolean) => void,
  textColor: string,
  backgroundColor: string,
  breakpoint: number
}

export const SidebarContext = createContext<SidebarContextType>({
  toggled: false,
  handleToggleSidebar: () => {},
  textColor: '',
  backgroundColor: '',
  breakpoint: 0
})

interface Props {
  children?: React.ReactNode,
  className: string,
  textColor: string,
  backgroundColor: string,
  breakpoint: number,
  toggled: boolean,
  minWidth: string,
  maxWidth: string,
}

const Sidebar = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    className,
    minWidth,
    maxWidth,
    children,
    toggled,
    textColor,
    backgroundColor,
    breakpoint,
    ...rest
  } = props

  const handleToggleSidebar = (toggled: boolean) => {
    setSidebarState({ ...sidebarState, toggled: !toggled })
  }

  const [sidebarState, setSidebarState] = useState({
    toggled,
    handleToggleSidebar,
    textColor,
    backgroundColor,
    breakpoint
  })

  useEffect(() => {
    handleToggleSidebar(!toggled)
  }, [toggled])

  const sidebarRef = ref ? ref : React.createRef<HTMLDivElement>()

  return (
    <ThemeProvider theme={theme}>
      <SidebarContext.Provider value={sidebarState}>
        <SidebarContainer
          {...rest}
          ref={sidebarRef}
          className={classNames('pro-sidebar', className, {
            toggled: sidebarState.toggled
          })}
          textColor={textColor}
          backgroundColor={backgroundColor}
          minWidth={minWidth}
          maxWidth={maxWidth}
        >
          <SidebarInner>
            <SidebarLayout>{children}</SidebarLayout>
          </SidebarInner>
        </SidebarContainer>
      </SidebarContext.Provider>
    </ThemeProvider>
  )
})


Sidebar.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.any, // PropTypes.node.isRequired,
    textColor: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    breakpoint: PropTypes.number.isRequired,
    toggled: PropTypes.bool.isRequired
  }

Sidebar.defaultProps = {
  textColor: '#ffffff',
  backgroundColor: theme.colors.dark900,
  breakpoint: 720,
  toggled: false,
  minWidth: '80px',
  maxWidth: '270px',
  children: null
}


Sidebar.displayName = 'Sidebar'

export default Sidebar

export { Sidebar as CDBSidebar }
