import styled, { keyframes, css } from "styled-components";

const rotator = keyframes`
 0% { transform: rotate(0deg) }
 100% { transform: rotate(360deg) }`;

const colors = keyframes`
 0% { stroke: #4285f4; }
 25%{stroke: #de3e35;} 50%{stroke: #f7c223} 75%{stroke: #1b9a59}
 100% {  stroke: #4285f4}`;

const dash = keyframes`
 0% { stroke-dashoffset: 187; }
  50%{stroke-dashoffset: 46.75;
transform: rotate(135deg)} 
 100% {   stroke-dashoffset: 187;
transform: rotate(450deg)}`;

export const Component = styled.svg<any>`
  stroke-width: 5;
  animation-name: ${rotator};
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
`;

interface Props {
  warning: boolean
  success: boolean
  secondary: boolean
  dark: boolean
  danger: boolean
  info: boolean
  multicolor: boolean
}

export const Circle = styled.circle<Props>`
  stroke: ${(props) =>
    props.warning
      ? "#FFE975"
      : props.success
      ? "#05944F"
      : props.secondary
      ? "#7356BF"
      : props.dark
      ? "#000000"
      : props.danger
      ? "#E11900"
      : props.info
      ? "#17A2B8"
      : "#276EF1"};

  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: ${(props) =>
    props.multicolor
      ? css`
          ${dash} 1.4s ease-in-out infinite, ${colors} 5.6s ease-in-out infinite
        `
      : css`
          ${dash} 1.4s ease-in-out infinite
        `};
`;
