import styled, { css } from "styled-components";

export const Component = styled.div`
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
