import styled, { css } from "styled-components";

interface Props {
  border: boolean
}

export const Component = styled.div<Props>`
  position: relative;
  background-color: #ffffff;
  ${(props) =>
    props.border
      ? css`
          border-top: 8px solid #e2e2e2;
          border-bottom: 8px solid #e2e2e2;
        `
      : css`
          border: 2px solid #e2e2e2;
        `}
`;
