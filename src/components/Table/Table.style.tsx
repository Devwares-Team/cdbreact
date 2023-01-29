import styled, { css } from "styled-components";

interface Props {
  autoWidth: boolean
  scrollY: boolean
}

export const Component = styled.div<any>`
  table-layout: ${(props) => (props.autoWidth ? "auto" : null)};
  ${(props) =>
    props.scrollY
      ? css`
          display: block;
          max-height: 200px;
          overflow-y: auto;
          -ms-overflow-style: -ms-autohiding-scrollbar;
        `
      : null};
`;

export const Table = styled.table``;
