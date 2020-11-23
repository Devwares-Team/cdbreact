import styled, { css } from "styled-components";
import { colorStyle } from "styled-system";
export const Component = styled.ul`
  padding: 15px;
  border: 0.75px solid #ccc;
  border-radius: 0;
  .page-link {
    ${colorStyle}
    ${(props) =>
      props.sm
        ? css`
            min-width: 30px;
            min-height: 30px;
          `
        : css`
            min-width: 50px;
            min-height: 50px;
          `}
    border-radius: ${(props) => (props.circle ? "50%" : "0")};
    border: 0.5px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .page-item {
    ${colorStyle}
    ${(props) =>
      props.sm
        ? css`
            min-width: 30px;
            min-height: 30px;
          `
        : css`
            min-width: 50px;
            min-height: 50px;
          `}
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 0.5px solid #ccc;
    border-radius: ${(props) => (props.circle ? "50%" : "0")};
    font-size: ${(props) =>
      props.size === "big"
        ? "1.25rem"
        : props.size === "small"
        ? "0.75rem"
        : "1rem"};
  }
`;
