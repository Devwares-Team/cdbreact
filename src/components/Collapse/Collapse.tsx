import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  id?: string
  isOpen?: string | boolean
  navbar?: boolean
  onClosed?: Function
  onOpened?: Function
  style?: any
}

const SHOW = 'SHOW'
const SHOWN = 'SHOWN'
const HIDE = 'HIDE'
const HIDDEN = 'HIDDEN'

const DEFAULT_DELAYS = {
  show: 350,
  hide: 350
}

const Collapse = (props: Props) => {
  let transitionTag
  const [state, setState] = useState({
    id: props.id,
    collapse: HIDDEN,
    height: 0
  })

  const element = useRef<HTMLDivElement>(null)

  const compRef = useRef<boolean>(false)
  useEffect(() => {
    if (compRef.current === false) {
      //componentDidMount
      handleComponentDidMount()
      compRef.current = true
    } else {
      // component did update
      handleComponentDidUpdate()
    }

    return () => {
      clearTimeout(transitionTag)
    }
  }, [props.isOpen, state.collapse])

  useEffect(() => {
    if (state.collapse === SHOW) {
      setState((prevState) => ({
        ...prevState,
        height: getHeight()
      }))

      setTransitionTag(SHOWN, props.onOpened, 'show')
    } else if (state.collapse === HIDE) {
      setState((prevState) => ({
        ...prevState,
        collapse: HIDE,
        height: getHeight()
      }))
    }
  }, [state.collapse])

  function setTransitionTag(collapse, callback, delayType) {
    transitionTag = setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        collapse,
        height: 0
      }))
      callback()
    }, getDelay(delayType))
  }

  function getDelay(key) {
    const { delay } = props
    if (typeof delay === 'object') {
      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key]
    }
    return delay
  }

  function getHeight(): number {
    return element.current!.scrollHeight
  }

  function handleComponentDidMount() {
    const { isOpen } = props
    const { collapse, id } = state

    if ((isOpen === id || isOpen === true) && collapse === HIDDEN) {
      openCollapse()
    }
  }

  function handleComponentDidUpdate() {
    const { isOpen } = props
    const { collapse } = state

    const willOpen = typeof isOpen !== 'boolean' ? isOpen === state.id : isOpen

    if (willOpen && collapse === HIDDEN) {
      openCollapse()
    } else if (!willOpen && state.collapse === SHOWN) {
      closeCollapse()
    }
  }

  function openCollapse() {
    setState((prevState) => ({
      ...prevState,
      collapse: SHOW
    }))
  }

  function closeCollapse() {
    setState((prevState) => ({
      ...prevState,
      height: getHeight()
    }))
  }

  const {
    navbar,
    children,
    className,
    isOpen,
    delay,
    onOpened,
    onClosed,
    ...attributes
  } = props

  const { collapse, height } = state
  let collapseClass
  switch (collapse) {
    case SHOW:
      collapseClass = 'collapsing'
      break
    case SHOWN:
      collapseClass = 'collapse show'
      break
    case HIDE:
      collapseClass = 'collapsing'
      break
    case HIDDEN:
      collapseClass = 'collapse'
      break
    default:
      collapseClass = 'collapse'
  }

  const collapseClasses = classNames(
    collapseClass,
    navbar ? 'navbar-collapse' : false,
    className
  )

  const style = height === null ? null : { height }

  return (
    <ThemeProvider theme={theme}>
      <div
        data-test='collapse'
        {...attributes}
        style={{ ...attributes.style, ...style }}
        className={collapseClasses}
        ref={element}
      >
        {children}
      </div>
    </ThemeProvider>
  )
}

Collapse.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  delay: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({ hide: PropTypes.number, show: PropTypes.number })
  ]),
  id: PropTypes.string,
  isOpen: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  navbar: PropTypes.bool,
  onClosed: PropTypes.func,
  onOpened: PropTypes.func
}

Collapse.defaultProps = {
  isOpen: '',
  delay: DEFAULT_DELAYS,
  onOpened: () => {},
  onClosed: () => {}
}

export default Collapse
export { Collapse as CDBCollapse }
