import styled from "styled-components";
import { colorStyle } from "styled-system";

export const Component = styled.li<{
  colors: string
}>`
  ${colorStyle}
`;

export const LinkComponent = styled.a<{
  colors: string
}>`
  ${colorStyle}
`
