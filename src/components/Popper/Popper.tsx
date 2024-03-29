import React, { Fragment, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
 import Popper from 'popper.js'
import PropTypes from 'prop-types'
import { Tag } from './Popper.style'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'

interface Props {
  children: React.ReactNode,
  clickable: boolean,
  domElement: boolean,
  email: boolean,
  id: string,
  isVisible: boolean,
  material: boolean,
  modifiers: object,
  placement: string,
  popover: boolean,
  sm: boolean,
  style: any,
  tag: string,
}
const Popover = (props) => {
  const {
    children,
    className,
    clickable,
    domElement,
    email,
    id,
    isVisible,
    material,
    modifiers,
    placement,
    popover,
    sm,
    style,
    onChange,
    tag,
    ...attributes
  } = props;

  const [state, setState] = useState<any>({
    popperJS: null,
    visible: props.isVisible,
    showPopper: props.isVisible,
  });
  const [timer, setTimer] = useState<NodeJS.Timer>();

  const popoverWrapperRef = useRef<any>();
  const referenceElm = useRef<any>();

  useEffect(() => {
    const { showPopper } = state;
    const { isVisible, onChange } = props;
    setPopperJS();
    if (
      props.isVisible !== isVisible &&
      isVisible !== showPopper &&
      showPopper !== props.showPopper
    ) {
      setState({ ...state, showPopper: isVisible });
    }
    if (onChange && showPopper !== state.showPopper) {
      onChange(showPopper);
    }
    if (showPopper && state.showPopper !== showPopper) {
      createPopper();
    }
  }, [state]);

  useEffect(() => {
    const time = setInterval(() => setPopperJS(), 3);
    setTimer(time);
    document.addEventListener("click", handleClick);
  }, []);

  const setPopperJS = () => {
    const { showPopper, popperJS } = state;
    if (showPopper) {
      popperJS ? popperJS.scheduleUpdate() : createPopper();
      setTimeout(() => clearInterval(timer), 1000);
    }
  };

  const createPopper = () => {
    const { placement, modifiers } = props;

    if (referenceElm.current && popoverWrapperRef.current) {
      setState(prevState => ({
        ...prevState,
        popperJS: new Popper(
          referenceElm.current,
          popoverWrapperRef.current,
          {
            placement,
            ...modifiers,
          }
        ),
      }));
    }
  };

  useEffect(()=> {
    const {popperJS} = state;

    if (popperJS !== null) {
      setTimeout(() => {
        popperJS.scheduleUpdate();
      }, 10)
    }
  }, [])

  const doToggle = (toggler) => {
    setState({ ...state, showPopper: toggler && true });
    const { showPopper, visible } = state;
    if (showPopper) {
      setState({
        ...state,
        visible: typeof toggler !== "undefined" ? toggler : !visible,
      });
      createPopper();
      state.popperJS.scheduleUpdate();
    }
  };

  const handleClick = (e) => {
    const { target } = e;
    const { showPopper } = state;

    if (popoverWrapperRef.current && showPopper) {
      if (
        popoverWrapperRef.current.contains(target) ||
        referenceElm.current.contains(target) ||
        target === referenceElm.current
      ) {
        return;
      }
      doToggle(false);
    }
  };



  const { visible, showPopper } = state;
 const _Popper = children[1]
  const Wrapper = children[0];
  const classes = classNames(
    visible && "show",
    popover ? "popover" : !material && !email && "tooltip px-2",
    className
  );

  const popperClasses = classNames(
    (material || email) && "tooltip-inner",
    material && (sm ? "md-inner" : "md-inner-main"),
    email && (sm ? "md-inner" : "md-inner-email")
  );

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        {!domElement ? (
          <Wrapper.type
            {...Wrapper.props}
            onMouseEnter={() => !clickable && doToggle(true)}
            onMouseLeave={() =>
              !clickable &&
              !popover &&
              setTimeout(() => doToggle(false), 0)
            }
            onTouchStart={() => !clickable && doToggle(true)}
            onTouchEnd={() =>
              !clickable && !popover && doToggle(false)
            }
            onMouseDown={() => {
              clickable && doToggle(!showPopper);
              setTimeout(() => setPopperJS(), 100);
            }}
            onMouseUp={() => setTimeout(() => setPopperJS(), 0)}
            innerRef={(ref) => (referenceElm.current = ref)}
            data-popper={id}
          />
        ) : (
          <Wrapper.type
            {...Wrapper.props}
            onMouseEnter={() => !clickable && doToggle(true)}
            onMouseLeave={() =>
              !clickable &&
              !popover &&
              setTimeout(() => doToggle(false), 0)
            }
            onTouchStart={() => !clickable && doToggle(true)}
            onTouchEnd={() =>
              !clickable && !popover && doToggle(false)
            }
            onMouseDown={() => clickable && doToggle(!showPopper)}
            onMouseUp={() => setTimeout(() => setPopperJS(), 0)}
            ref={(ref) => (referenceElm.current = ref)}
            data-popper={id}
          />
        )}
        {showPopper && (
          <Tag
            ref={(ref) => (popoverWrapperRef.current = ref)}
            className={classes}
            data-popper={id}
            {...attributes}
            as={(tag as unknown) as undefined}
          >
            <_Popper.type
              className={classNames(
                popperClasses,
                _Popper.props.className
              )}
            >
              {_Popper.props.children}
            </_Popper.type>
            <span
              x-arrow=""
              className={classNames("popover_arrow")}
            ></span>
          </Tag>
        )}
      </Fragment>
    </ThemeProvider>
  );
};

Popover.propTypes = {
  children: PropTypes.node,
  clickable: PropTypes.bool,
  domElement: PropTypes.bool,
  email: PropTypes.bool,
  id: PropTypes.string,
  isVisible: PropTypes.bool,
  material: PropTypes.bool,
  modifiers: PropTypes.object,
  placement: PropTypes.string,
  popover: PropTypes.bool,
  sm: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
  tag: PropTypes.string,
};
Popover.defaultProps = {
  clickable: false,
  domElement: false,
  id: "popper",
  isVisible: false,
  placement: "top",
  popover: false,
  style: { display: "inline-block" },
  tag: "div",
};
export default Popover;
export { Popover as CDBPopper };
export { Popover as Tooltip };
export { Popover as CDBPopover };