import React, { Fragment, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { createPopper } from "@popperjs/core";
import PropTypes from "prop-types";
import { Tag } from "./Popper.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

interface Props {
  children: React.ReactNode;
  className?: string;
  clickable?: boolean;
  domElement?: boolean;
  email?: boolean;
  id?: string;
  isVisible?: boolean;
  material?: boolean;
  modifiers?: object[] | object;
  placement?: string;
  popover?: boolean;
  sm?: boolean;
  style?: React.CSSProperties;
  tag?: string;
  onChange?: (isOpen: boolean) => void;
}

const callHandler = (handler, event) => {
  if (typeof handler === "function") {
    handler(event);
  }
};

const Popover = (props: Props) => {
  const {
    children,
    className,
    clickable = false,
    domElement = false,
    email,
    id = "popper",
    isVisible = false,
    material,
    modifiers,
    placement = "top",
    popover = false,
    sm,
    style,
    onChange,
    tag = "div",
    ...attributes
  } = props;

  const [showPopper, setShowPopper] = useState<boolean>(isVisible);
  const popoverWrapperRef = useRef<any>(null);
  const referenceElm = useRef<any>(null);
  const arrowElm = useRef<any>(null);
  const popperRef = useRef<any>(null);

  useEffect(() => {
    setShowPopper(Boolean(isVisible));
  }, [isVisible]);

  useEffect(() => {
    if (onChange) {
      onChange(showPopper);
    }
  }, [onChange, showPopper]);

  useEffect(() => {
    if (!showPopper || !referenceElm.current || !popoverWrapperRef.current) {
      if (popperRef.current) {
        popperRef.current.destroy();
        popperRef.current = null;
      }
      return;
    }

    const incomingModifiers = Array.isArray(modifiers) ? modifiers : [];
    popperRef.current = createPopper(referenceElm.current, popoverWrapperRef.current, {
      placement: placement as any,
      modifiers: [
        {
          name: "arrow",
          options: {
            element: arrowElm.current,
          },
        },
        {
          name: "offset",
          options: {
            offset: [0, 8],
          },
        },
        ...incomingModifiers,
      ],
    });

    popperRef.current.update();

    return () => {
      if (popperRef.current) {
        popperRef.current.destroy();
        popperRef.current = null;
      }
    };
  }, [modifiers, placement, showPopper]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!clickable || !showPopper || !popoverWrapperRef.current || !referenceElm.current) {
        return;
      }

      const target = event.target as Node;
      if (
        popoverWrapperRef.current.contains(target) ||
        referenceElm.current.contains(target)
      ) {
        return;
      }
      setShowPopper(false);
    };

    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [clickable, showPopper]);

  const doToggle = (nextValue?: boolean) => {
    setShowPopper((previous) => {
      const value = typeof nextValue === "boolean" ? nextValue : !previous;
      return value;
    });
  };

  const childArray = React.Children.toArray(children) as React.ReactElement[];
  const Wrapper = childArray[0];
  const PopperContent = childArray[1];

  if (!Wrapper || !PopperContent) {
    return null;
  }

  const classes = classNames(
    showPopper && "show",
    popover ? "popover" : !material && !email && "tooltip px-2",
    className
  );

  const popperClasses = classNames(
    (material || email) && "tooltip-inner",
    material && (sm ? "md-inner" : "md-inner-main"),
    email && (sm ? "md-inner" : "md-inner-email")
  );

  const triggerProps = {
    onMouseEnter: (event) => {
      callHandler(Wrapper.props.onMouseEnter, event);
      if (!clickable) {
        doToggle(true);
      }
    },
    onMouseLeave: (event) => {
      callHandler(Wrapper.props.onMouseLeave, event);
      if (!clickable && !popover) {
        doToggle(false);
      }
    },
    onTouchStart: (event) => {
      callHandler(Wrapper.props.onTouchStart, event);
      if (!clickable) {
        doToggle(true);
      }
    },
    onTouchEnd: (event) => {
      callHandler(Wrapper.props.onTouchEnd, event);
      if (!clickable && !popover) {
        doToggle(false);
      }
    },
    onMouseDown: (event) => {
      callHandler(Wrapper.props.onMouseDown, event);
      if (clickable) {
        doToggle();
      }
    },
    onMouseUp: (event) => {
      callHandler(Wrapper.props.onMouseUp, event);
      if (popperRef.current) {
        popperRef.current.update();
      }
    },
    "data-popper": id,
  };

  const setReferenceRef = (node) => {
    referenceElm.current = node;
    const wrapperRef = (Wrapper as any).ref;
    if (domElement && typeof wrapperRef === "function") {
      wrapperRef(node);
    }
  };

  const wrappedTrigger = React.cloneElement(Wrapper, {
    ...triggerProps,
    ...(domElement
      ? { ref: setReferenceRef }
      : { innerRef: setReferenceRef }),
  });

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        {wrappedTrigger}
        {showPopper && (
          <Tag
            ref={(ref) => {
              popoverWrapperRef.current = ref;
            }}
            className={classes}
            data-popper={id}
            style={style}
            {...attributes}
            as={(tag as unknown) as undefined}
          >
            <PopperContent.type
              {...PopperContent.props}
              className={classNames(popperClasses, PopperContent.props.className)}
            >
              {PopperContent.props.children}
            </PopperContent.type>
            <span
              data-popper-arrow
              ref={(node) => {
                arrowElm.current = node;
              }}
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
  modifiers: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  placement: PropTypes.string,
  popover: PropTypes.bool,
  sm: PropTypes.bool,
  style: PropTypes.object,
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
