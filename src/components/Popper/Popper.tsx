import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import Popper from "popper.js";
import PropTypes from "prop-types";
import { Tag } from "./Popper.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../theme";

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
  
  const [state, setState] = useState({
    popperJS: null,
    visible: props.isVisible,
    showPopper: props.isVisible,
  });
  const [timer, setTimer] = useState();

  const popoverWrapperRef = useRef();
  const referenceElm = useRef();

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
    const { popperJS } = state;
    if (referenceElm.current && popoverWrapperRef.current) {
      setState({
        ...state,
        popperJS: new Popper(
          referenceElm.current,
          popoverWrapperRef.current,
          {
            placement,
            ...modifiers,
          },
          () =>
            setTimeout(() => {
              popperJS.scheduleUpdate();
            }, 10)
        ),
      });
    }
  };

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
  const Popper = children[1];
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
            as={tag}
          >
            <Popper.type
              className={classNames(
                popperClasses,
                Popper.props.className
              )}
            >
              {Popper.props.children}
            </Popper.type>
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