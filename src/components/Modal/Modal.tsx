import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import FocusTrap from 'focus-trap-react'
import { returnAttributes } from '../utils'
import { Component as StyledComponent } from './Modal.style'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'

interface Props {
  animation: string
  autoFocus: boolean
  backdrop: boolean
  backdropClassName: string
  backdropTransitionTimeout: number
  cascading: boolean
  centered: boolean
  children: React.ReactNode
  className: string
  contentClassName: string
  disableBackdrop: boolean
  disableFocusTrap: boolean
  fade: boolean
  frame: boolean
  fullHeight: boolean
  hiddenModal: Function
  hideModal: Function
  id: string
  inline: boolean
  isOpen: boolean
  keyboard: boolean
  modalClassName: string
  modalStyle: string
  modalStylesWithoutBackdrop: object
  modalTransitionTimeout: number
  noClickableBodyWithoutBackdrop: boolean
  overflowScroll: boolean
  position: string
  role: string
  showModal: Function
  side: boolean
  size: string
  tabIndex: string
  toggle: Function
  wrapClassName: string
  wrapperStyles: object
  zIndex: [string, number]
  modalContent: any
}

const Modal = (props: Props) => {
  const {
    animation,
    backdrop,
    backdropClassName,
    backdropTransitionTimeout,
    cascading,
    centered,
    children,
    className,
    contentClassName,
    disableFocusTrap,
    fade,
    frame,
    fullHeight,
    id,
    inline,
    isOpen,
    keyboard,
    modalStyle,
    modalStylesWithoutBackdrop,
    modalTransitionTimeout,
    noClickableBodyWithoutBackdrop,
    overflowScroll,
    position,
    role,
    side,
    size,
    tabIndex,
    toggle,
    wrapClassName,
    wrapperStyles,
    zIndex,

    ...attributes
  } = props

  // const [state, setState] = useState({
  //   initialIsOpen: props.isOpen || false,
  // });
  const [isModalOpen, setModalOpen] = useState<boolean>(props.isOpen || false)
  const [overflowStatement, setOverflowStatement] = useState('')

  const modalContent = useRef<any>(null)

  const mounted = useRef<boolean>()

  useEffect(() => {
    // const setComponentOpen = (prevProps, prevState) => {
    //   const { isOpen, overflowScroll } = props;
    //   const overflowStatement = overflowScroll
    //     ? "overflow-hidden"
    //     : "overflow-hidden";

    //   if (prevState.initialIsOpen !== isOpen) {
    //     setState({ initialIsOpen: isOpen }, () => {
    //       if (isOpen) {
    //         document.body.classList.add(overflowStatement);
    //       } else {
    //         document.body.classList.remove(overflowStatement);
    //       }
    //     });
    //   }
    // }

    const setComponentOpen = () => {
      const { isOpen, overflowScroll } = props
      setOverflowStatement(
        overflowScroll ? 'overflow-hidden' : 'overflow-hidden'
      )

      if (isModalOpen !== isOpen) {
        setModalOpen(isOpen)
      }
    }

    // ComponentDidUpdate Logic
    if (!mounted.current) {
      mounted.current = true
    } else {
      setComponentOpen()
    }
  }, [isOpen])


  // Equivalent of callback after setState in Class Components
  useEffect(() => {
    if (isModalOpen === isOpen) {
      if (isModalOpen) {
        document.body.classList.add(overflowStatement)
      } else {
        document.body.classList.add(overflowStatement)
      }
    }
  }, [isModalOpen])

  const handleOnEntered = (type: string, node: HTMLElement) => {
    if (type === 'backdrop' && props.fade === false) {
      return
    }

    node.classList.add('show')
    props.autoFocus && node.focus()

    if (type === 'modal') {
      props.showModal && props.showModal()
    }
  }

  const handleOnExit = (type: string, node?: HTMLElement) => {
    if (type === 'backdrop' && props.fade === false) {
      return
    }

    node.classList.remove('show')

    if (type === 'modal') {
      props.hideModal && props.hideModal()
    }
  }

  const handleOnExited = () => {
    props.hiddenModal && props.hiddenModal()
  }

  const handleBackdropClick = (e: any) => {
    if (
      !props.backdrop ||
      (e.target.closest('[role="dialog"]') &&
        !e.target.classList.contains('modal'))
    ) {
      return
    }

    if (
      !(e.clientX > e.target.clientWidth || e.clientY > e.target.clientHeight)
    ) {
      if (!modalContent.current.contains(e.target)) {
        if (!props.disableBackdrop) {
          props.toggle()
        }
      }
    }
  }

  const handleEscape = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (props.keyboard && e.keyCode === 27) {
      e.preventDefault()
      props.toggle()
    }
  }

  const whichPosition = () => {
    if (position === 'bottom-right') {
      return { top: 'auto', bottom: 10, right: 10, left: 'auto' }
    } else if (position === 'bottom-left') {
      return { top: 'auto', bottom: 10, right: 'auto', left: 10 }
    } else if (position === 'top-right') {
      return { top: 10, bottom: 'auto', right: 10, left: 'auto' }
    } else if (position === 'top-left') {
      return { top: 10, bottom: 'auto', right: 'auto', left: 10 }
    } else if (position === 'right') {
      return { right: 0 }
    } else if (position === 'left') {
      return { left: 0 }
    } else if (position === 'bottom') {
      return { bottom: 0 }
    } else if (position === 'top') {
      return { top: 0 }
    } else if (position === 'center') {
      return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
    } else {
      return { top: 0, left: 0, bottom: 0, right: 0 }
    }
  }

  const timeout = fade ? modalTransitionTimeout : 0
  const backdropTimeout = fade ? backdropTransitionTimeout : 0

  const removeBackdropClass = {
    position: 'fixed',
    ...whichPosition(),
    ...modalStylesWithoutBackdrop
  }

  const removeBackdropConditions =
    !backdrop && isModalOpen && !noClickableBodyWithoutBackdrop

  const modalDialogClasses = classNames(
    {
      'cascading-modal': cascading,
      'modal-side': side,
      'modal-full-height': fullHeight,
      'modal-frame': frame,
      'modal-dialog-centered': centered,
      [`modal-${size}`]: size,
      [`modal-${position}`]: position,
      [`modal-notify white-text modal-${modalStyle}`]: modalStyle
    },
    'modal-dialog',
    className
  )
  const splitPosition = position.split('-')
  const wrapperClasses = classNames(
    {
      modal: !inline,
      fade,
      top: fade && !animation && !position,
      animation: fade && animation
    },
    fade && position && position && splitPosition.length > 1
      ? splitPosition[1]
      : splitPosition[0],
    wrapClassName
  )

  const backdropClasses = classNames(
    'modal-backdrop',
    fade ? 'fade' : 'show',
    backdropClassName
  )
  const contentClasses = classNames('modal-content', contentClassName)
  const modalAttributes = returnAttributes({
    style: {
      display: 'block',
      position: removeBackdropConditions && 'fixed',
      width: removeBackdropConditions && 0
    },
    id,
    tabIndex,
    role,
    'aria-hidden': 'true',
    ...attributes
  })
  const styles = removeBackdropConditions ? removeBackdropClass : {}

  const modal = (
    <StyledComponent
      data-test='modal'
      onKeyUp={handleEscape}
      className={wrapperClasses}
      style={wrapperStyles}
      {...modalAttributes}
    >
      <div style={styles} className={modalDialogClasses} role='document'>
        <div
          ref={(elem) => (props.modalContent = elem)}
          className={contentClasses}
        >
          {children}
        </div>
      </div>
    </StyledComponent>
  )

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        {backdrop && (
          <Transition
            timeout={backdropTimeout}
            in={isModalOpen}
            appear={isModalOpen}
            mountOnEnter
            unmountOnExit
            onEntered={(node: any) => handleOnEntered('backdrop', node)}
            onExit={(node?: any) => handleOnExit('backdrop', node)}
            onExited={handleOnExited}
          >
            <div className={backdropClasses} />
          </Transition>
        )}
        <Transition
          timeout={timeout}
          in={isModalOpen}
          appear={isModalOpen}
          mountOnEnter
          unmountOnExit
          onMouseDown={(e: any) => handleBackdropClick(e)}
          onEntered={(node: any) => handleOnEntered('modal', node)}
          onExit={(node?) => handleOnExit('modal', node)}
        >
          {!disableFocusTrap ? <FocusTrap>{modal}</FocusTrap> : modal}
        </Transition>
      </React.Fragment>
    </ThemeProvider>
  )
}

Modal.defaultProps = {
  autoFocus: true,
  backdrop: true,
  backdropTransitionTimeout: 150,
  disableBackdrop: false,
  disableFocusTrap: true,
  fade: true,
  isOpen: false,
  keyboard: true,
  modalTransitionTimeout: 300,
  overflowScroll: true,
  position: 'center',
  role: 'dialog',
  tabIndex: '-1',
  zIndex: 1050,
  noClickableBodyWithoutBackdrop: false
}

Modal.propTypes = {
  animation: PropTypes.string,
  autoFocus: PropTypes.bool,
  backdrop: PropTypes.bool,
  backdropClassName: PropTypes.string,
  backdropTransitionTimeout: PropTypes.number,
  cascading: PropTypes.bool,
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  disableBackdrop: PropTypes.bool,
  disableFocusTrap: PropTypes.bool,
  fade: PropTypes.bool,
  frame: PropTypes.bool,
  fullHeight: PropTypes.bool,
  hiddenModal: PropTypes.func,
  hideModal: PropTypes.func,
  id: PropTypes.string,
  inline: PropTypes.bool,
  isOpen: PropTypes.bool,
  keyboard: PropTypes.bool,
  modalClassName: PropTypes.string,
  modalStyle: PropTypes.string,
  modalStylesWithoutBackdrop: PropTypes.object,
  modalTransitionTimeout: PropTypes.number,
  noClickableBodyWithoutBackdrop: PropTypes.bool,
  overflowScroll: PropTypes.bool,
  position: PropTypes.string,
  role: PropTypes.string,
  showModal: PropTypes.func,
  side: PropTypes.bool,
  size: PropTypes.string,
  tabIndex: PropTypes.string,
  toggle: PropTypes.func,
  wrapClassName: PropTypes.string,
  wrapperStyles: PropTypes.object,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Modal
export { Modal as MDBModal }
