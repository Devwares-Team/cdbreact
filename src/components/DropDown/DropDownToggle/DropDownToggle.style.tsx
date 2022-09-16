import styled, { css } from "styled-components";
import { colorStyle, space, variant } from "styled-system";

export const Component = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  ${colorStyle}
  ${space}
  :hover, :focus {
    outline: none;
    border: none; 
  }
  ${(props) =>
    props.circle === true
      ? css`
          border-radius: 30px;
        `
      : css`
          border-radius: 0px;
        `};
  ${variant({
    prop: "size",
    variants: {
      lg: {
        fontSize: "1.25rem",
        padding: "20px",
      },
      sm: {
        fontSize: "0.75rem",
        padding: "5px",
      },
    },
  })}
`;
export const Caret = styled.span`
  .pro-arrow-wrapper {
    position: relative;
    min-width: 10px;
    min-height: 10px;
    .pro-arrow {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: inline-block;
      border-style: solid;
      border-color: #fff;
      border-width: 0 2px 2px 0;
      padding: 2.5px;
      vertical-align: middle;
      transition: transform 0.3s;

      ${(props) =>
        props.dropup
          ? css`
              transform: rotate(-135deg);
            `
          : props.dropleft
          ? css`
              transform: rotate(135deg);
            `
          : props.dropright
          ? css`
              transform: rotate(-45deg);
            `
          : css`
              transform: rotate(45deg);
            `}
      ${(props) =>
        props.dropup
          ? css`
              margin-bottom: 0;
            `
          : props.dropleft
          ? css`
              margin-bottom: 0;
            `
          : props.dropright
          ? css`
              margin-bottom: 0;
            `
          : css`
              margin-bottom: 5px;
            `}
    }
  }
`;
