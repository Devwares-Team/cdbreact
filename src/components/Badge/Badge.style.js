import styled from "styled-components";
import { colorStyle, variant, space } from "styled-system";

export const Component = styled.span`
  ${space}
  ${colorStyle}
  font-weight:200;
  box-shadow: ${(props) =>
    props.flat
      ? null
      : "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"};

  ${variant({
    prop: "borderType",

    variants: {
      box: {
        borderRadius: 0,
      },
      pill: {
        borderRadius: "20px",
      },
    },
  })};
  ${variant({
    prop: "size",
    variants: {
      large: {
        padding: "10px 15px",
        fontSize: "1rem",
      },
      medium: {
        padding: "7.5px 8.75px",
        fontSize: "0.65rem",
      },
      small: {
        padding: "4.5px 6px",
        fontSize: "0.5rem",
      },
    },
  })}
`;
