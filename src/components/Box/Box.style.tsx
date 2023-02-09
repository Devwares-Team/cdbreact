import styled from "styled-components";
import { space, color } from "styled-system";

interface Props {
  space: any
  color: any
}

export const Component = styled.div<Props>`
  ${space}
  ${color}
`;
