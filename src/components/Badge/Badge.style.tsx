import styled from "styled-components";
import { colorStyle, variant, space } from "styled-system";


export const Component = styled.span<{
  flat: boolean,
  colors: "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light",
  borderType: string,
  size: string,
}>`
  display: flex;
  align-items: center;
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
        borderRadius: "0px",
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
        padding: "8.75px 15px",
        fontSize: "1rem",
      },
      medium: {
        padding: "6.25px 8.75px",
        fontSize: "0.85rem",
      },
      small: {
        padding: "4px 6px",
        fontSize: "0.625rem",
      },
    },
  })}
  .icon {
    ${variant({
      prop: "size",
      variants: {
        large: {
          fontSize: "1rem",
          marginRight: "12px",
        },
        medium: {
          fontSize: "0.85rem",
          marginRight: "10px",
        },
        small: {
          fontSize: "0.625rem !important",
          marginRight: "7.5px",
        },
      },
    })}
    i {
      ${space}
      ${variant({
        prop: "size",
        variants: {
          large: {
            fontSize: "1rem",
          },
          medium: {
            fontSize: "0.85rem",
          },
          small: {
            fontSize: "0.625rem !important",
          },
        },
      })}
    }
  }
`;
