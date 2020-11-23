import styled from "styled-components";


export const SidebarContainer = styled.div`

    background: ${(props) => props.backgroundColor};
    color: ${(props) => props.textColor};
    height: 100%;
    width: 270px;
    min-width: 270px;
    text-align: left;
    transition: width, left, right, 0.3s;
    position: relative;
    z-index: 1009;

   &.toggled{
    min-width: 80px;
    width: 80px;
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


