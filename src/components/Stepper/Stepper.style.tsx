import styled, { css } from "styled-components";

interface Props {
direction: string
background: string
}

export const Component = styled.div<Props>`
  display: flex;
  position: relative;
  width: 100%;
  padding: 10px;
  ${(props) =>
    props.direction === "vertical" &&
    css`
      .step-row-2 {
        height: 100%;
        flex-direction: row;
        .step-content {
          display: flex;
          -ms-flex-align: center;
          flex-direction: column;
          align-items: center;
          height: 100%;
          justify-content: space-between !important;
        }
      }
    `}
  ${(props) =>
    props.direction === "horizontal" &&
    css`
      flex-direction: column;
      .step-row-2 {
        flex-direction: column;
        margin-top: 22px;
        overflow-x: hidden;
        .step-content {
          overflow: auto;
          min-width: 500px;
          justify-content: space-between !important;
          display: flex !important;
          width: 100%;
        }
        &-webkit-scrollbar {
          height: 8px;
        }
        &-webkit-scrollbar-thumb {
          background: #ccc;
        }
        &-webkit-scrollbar-track {
        }
      }
    `}

  .steps {
    display: table-cell;
    text-align: center;
    position: relative;
  }
`;
