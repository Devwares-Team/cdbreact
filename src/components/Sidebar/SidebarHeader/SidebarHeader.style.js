import styled from "styled-components";


export const HeaderContainer = styled.div`
  border-bottom: 1px solid hsla(0,0%,67.8%,.2);

  .head-div{
    padding: 24px 29px;
    font-weight: bold;
    font-size: 17px;
    letter-spacing: 1px;
    overflow: hidden;
    white-space: nowrap;
  
    .icon-suffix {
        margin: 0px 23px;
        cursor: pointer;
    }

     &.toggled {
      .head-text {
        display: none;
      }
      .icon-suffix {
        margin: 0px;
      }
    }
   
  }

`;