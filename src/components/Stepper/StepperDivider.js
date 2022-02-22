import React, { useContext, useRef, useState, useEffect } from "react";
import { StepperContext } from "./Stepper";
import styled, { css } from "styled-components";
import tinycolor from "tinycolor2";

const Component = styled.div`
  display: flex;
  ${({ direction, size }) =>
    direction === "vertical" &&
    css`
      width: ${size}px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      span {
        margin: 2px 0;
        border-radius: 6px;
        transition: 0.4;
      }
      span:nth-child(1) {
        width: 6px;
        height: 6px;
      }
      span:nth-child(2) {
        width: 6px;
        height: 50px;
      }
    `}
  ${({ direction }) =>
    direction === "horizontal" &&
    css`
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      span {
        margin: 0 2px;
        border-radius: 6px;
        transition: 0.4;
      }
      span:nth-child(1) {
        width: 6px;
        height: 6px;
      }
      span:nth-child(2) {
        width: 50px;
        height: 6px;
      }
    `}
  ${({ status, background }) =>
    status === "prev" &&
    css`
      span:nth-child(1) {
        background-color: #666666;
      }
      span:nth-child(2) {
        background-color: #666666;
      }
    `};
  ${({ status }) =>
    status === "active" &&
    css`
      span:nth-child(1) {
        background-color: #666666;
      }
      span:nth-child(2) {
        background-color: #cccccc;
      }
    `};
  ${({ status }) =>
    status === "next" &&
    css`
      span:nth-child(1) {
        background-color: #cccccc;
      }
      span:nth-child(2) {
        background-color: #cccccc;
      }
    `}
`;

const StepperDivider = ({ status }) => {
  const containerRef = useRef();

  const { direction, mainColor, width, height, stepSize } =
    useContext(StepperContext);

  return (
    <Component
      direction={direction}
      mainColor={mainColor}
      background={mainColor}
      ref={containerRef}
      size={stepSize}
      status={status}
    >
      <span></span>
      <span></span>
    </Component>
  );
};

export default StepperDivider;
