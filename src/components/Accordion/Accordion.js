import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import AccordionItem from "./AccordionItem";
import { Component } from "./Accordion.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../theme";

const Accordion = (props) => {
  const {
    data,
    accordionClass,
    accordionHeaderClass,
    accordionBodyClass,
    hideIcon,
  } = props;
  const accordionClassName = classNames("wrapper", accordionClass);
  return (
    <ThemeProvider theme={theme}>
      <Component className={accordionClassName} hideIcon={hideIcon}>
        <ul className="accordion-list">
          {data.map((data, key) => {
            return (
              <li className="accordion-list__item" key={key}>
                <AccordionItem
                  {...data}
                  accordionHeaderClass={accordionHeaderClass}
                  accordionBodyClass={accordionBodyClass}
                />
              </li>
            );
          })}
        </ul>
      </Component>
    </ThemeProvider>
  );
};

AccordionItem.propTypes = {
  accordionClass: PropTypes.string,
  accordionHeaderClass: PropTypes.string,
  accordionBodyClass: PropTypes.string,
  hideIcon: PropTypes.bool,
  tag: PropTypes.string,
};
AccordionItem.defaultProps = {
  tag: "div",
};

export default Accordion;

export { Accordion as CDBAccordion };
