import React, { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../theme";

export const DropDownContext = createContext();

export const DropDownProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <DropDownContext.Provider
        value={{
          isOpen: [isOpen, setIsOpen],
        }}
      >
        {props.children}
      </DropDownContext.Provider>
    </ThemeProvider>
  );
};
