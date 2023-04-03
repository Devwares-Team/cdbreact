import { Link } from "react-router-dom";
import styled from "styled-components";
import { colorStyle } from "styled-system";

export const Component = styled.li<{
  colors: string
}>`
  ${colorStyle}
`;

export const LinkComponent = styled(Link)<{
  colors: string
}>`
  ${colorStyle}
`