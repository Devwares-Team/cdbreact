import styled, { css } from "styled-components";
import tinycolor from "tinycolor2";
import { variant } from "styled-system";
import colors from "../../theme/colors";

export const Component = styled.div`
  box-shadow: ${(props) =>
    props.flat
      ? "none"
      : "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"};
  box-sizing: border-box;
  transition: all  0.3s;
  ${({ bg }) =>
    bg &&
    css`
      background: ${colors[`${bg}`]};
      color: ${tinycolor(colors[`${bg}`]).isDark() ? "#fff" : "#333"};
      &:hover {
        ${({ bg }) =>
          bg &&
          css`
            background: ${tinycolor(colors[`${bg}`]).darken(10)};
            transform: scale(1.02);
            color: ${tinycolor(colors[`${bg}`]).isDark() ? "#fff" : "#333"};
          `};
      }
    `}}

  ${variant({
    prop: "size",
    variants: {
      xl: {
        padding: "20px",
        fontSize: "1.25rem",
        width: "250px",
        height: "80px",
      },
      large: {
        padding: "20px",
        fontSize: "1.25rem",
      },
      medium: {
        padding: "10px",
        fontSize: "1rem",
        width: "140px",
      },
      small: {
        padding: "5px",
        fontSize: "0.75rem",
      },
    },
  })};

  ${(props) =>
    props.circle === true
      ? css`
          border-radius: 30px;
        `
      : css`
          border-radius: 0px;
        `};

  ${(props) =>
    props.outline === true &&
    css`
      background: transparent;
      ${({ bg }) =>
        bg &&
        css`
          border: 2px solid ${colors[`${bg}`]};
          color: #333;
        `};
      border-width: 2px;
      &:hover {
        ${({ bg }) =>
          bg &&
          css`
            border: 2px solid ${tinycolor(colors[`${bg}`]).darken(10)};
            border-width: 2.4px;
            transform: scale(1.02);
          `};
      }
    `};

`;
