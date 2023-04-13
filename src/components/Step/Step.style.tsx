import styled, { css } from "styled-components";

interface Props {
  tooltipBackground: string
  direction: string
  status: string
  size: number
  background: string
  active: any
  icon: any
}

export const Component = styled.div<Props>`
  display: flex;
  ${({ direction}) =>
    direction === "horizontal" &&
    css`
      flex-direction: column;
    `}
  ${({ direction }) =>
    direction === "vertical" &&
    css`
      min-width: 150px;
      max-width: 150px;
    `}
  .step-title {
    display: flex;
    align-items: center;
    margin-left: 5px;
    padding: 10px 0;
    ${({ status }) =>
      status === "prev" &&
      css`
        opacity: 1;
      `};
    ${({ status }) =>
      status === "active" &&
      css`
        opacity: 1;
      `};
    ${({ status }) =>
      status === "next" &&
      css`
        opacity: 0.6;
      `}
    .step-number {
      font-size: 30px;
      font-weight: 600;
    }
    .step-text {
      font-size: 14px;
      line-height: 18px;
      font-weight: 600;
      margin-left: 10px;
      text-align: start;
      max-width: 150px;
      word-wrap: break-word;
    }
  }
  .step-indicators {
    display: flex;
    width: fit-content;
    ${({ direction }) =>
      direction === "horizontal" &&
      css`
        flex-direction: row;
      `}
    ${({ direction }) =>
      direction === "vertical" &&
      css`
        flex-direction: column;
      `}
  }
  .default-node {
    cursor: pointer;
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    color: #000;
    font-size: 16px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    transition: width 0.3;
    align-items: center;
    * {
      position: relative;
    }
    ${({ status }) =>
      status === "prev" &&
      css`
        background-color: #333333;
        color: #fff;
        border: 2px solid #cccccc;
      `};
    ${({ status }) =>
      status === "active" &&
      css`
        background-color: #fff;
        border: 2px solid #333333;
        position: relative;
      `};
    ${({ status }) =>
      status === "next" &&
      css`
        color: #fff;
        background-color: #9f9d9d;
      `}
  }
  .__react_component_tooltip {
    background: ${(props) => props.tooltipBackground};
    font-size: 10px;
    * {
      font-size: inherit;
    }
    padding: 2px 5.5px;
    border-radius: 4px;
    &:before,
    &:after {
      display: none !important;
    }
  }
`;
