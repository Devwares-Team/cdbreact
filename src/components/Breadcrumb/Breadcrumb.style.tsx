import styled from "styled-components";
import { colorStyle } from "styled-system";

export const Component = styled.ol`
  ${colorStyle};
  font-weight: ${(props) =>
    props.bold ? "bold" : props.light ? "light" : null};
  border-radius: ${(props) => (props.circle ? "50%" : "0")};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "capitalize")};
`;
