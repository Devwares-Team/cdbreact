import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import AccordionItem from "./AccordionItem";
import { Component } from "./Accordion.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";


interface Props {

  accordionClass ?: string,
  accordionHeaderClass ?: string,
  accordionBodyClass ?: string,
  hideIcon ?: boolean,
  tag ?: string,
  data ?: any,
}

const Accordion = (props: Props) => {
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




export default Accordion;

export { Accordion as CDBAccordion };
