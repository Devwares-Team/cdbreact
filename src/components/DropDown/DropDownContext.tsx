import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

export const DropDownContext = createContext<any>({
  isOpen: [false, () => {}],
  referenceElement: [null, () => {}],
  popperElement: [null, () => {}],
});

export const DropDownProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <DropDownContext.Provider
        value={{
          isOpen: [isOpen, setIsOpen],
          referenceElement: [referenceElement, setReferenceElement],
          popperElement: [popperElement, setPopperElement],
        }}
      >
        {props.children}
      </DropDownContext.Provider>
    </ThemeProvider>
  );
};
