import styled, { css } from "styled-components";
import { colorStyle, variant } from "styled-system";

export const Component = styled.div`
  box-shadow: ${(props) =>
    props.flat
      ? "none"
      : "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"};
  ${colorStyle}

  ${variant({
    prop: "size",
    variants: {
      xl: {
        padding: "30px",
        fontSize: "1.25rem",
      },
      large: {
        padding: "20px 30px",
        fontSize: "1.25rem",
      },
      medium: {
        padding: "10px 20px",
        fontSize: "1rem",
      },
      small: {
        padding: "5px 10px",
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
    props.outline === true
      ? css`
          background-color: transparent;
          color: ${(props) =>
            props.colors === "primary"
              ? "#276EF1"
              : props.colors === "secondary"
              ? "#7356BF"
              : props.colors === "success"
              ? "#05944F"
              : props.colors === "danger"
              ? "#E11900"
              : props.colors === "info"
              ? "#17A2B8"
              : props.colors === "warning"
              ? "#FFE975"
              : props.colors === "dark"
              ? "#000000"
              : null};
          border-width: 2px;
          &:hover {
            color: ${(props) =>
              props.colors === "primary"
                ? "#276EF1"
                : props.colors === "secondary"
                ? "#7356BF"
                : props.colors === "success"
                ? "#05944F"
                : props.colors === "danger"
                ? "#E11900"
                : props.colors === "info"
                ? "#17A2B8"
                : props.colors === "warning"
                ? "#FFE975"
                : props.colors === "dark"
                ? "#000000"
                : null};
            background-color: #fdfdfd;
          }
        `
      : css``};
`;
