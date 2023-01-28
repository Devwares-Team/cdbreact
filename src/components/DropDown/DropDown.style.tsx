import styled from "styled-components";
import { colorStyle } from "styled-system";

export const Component = styled.div<any>`
  ${colorStyle}
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`;
