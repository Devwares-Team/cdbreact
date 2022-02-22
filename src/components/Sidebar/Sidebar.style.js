import styled from "styled-components";

export const SidebarContainer = styled.div`
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  height: 100%;
  width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ maxWidth }) => maxWidth};
  text-align: left;
  transition: width, left, right, 0.3s;
  position: relative;
  z-index: 1009;

  &.toggled {
    width: ${({ minWidth }) => minWidth};
    min-width: ${({ minWidth }) => minWidth};
  }
`;

export const SidebarInner = styled.div`
  height: 100%;
  position: relative;
  z-index: 101;
`;

export const SidebarLayout = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 101;
`;
