import styled from "styled-components";
import { colorStyle } from "styled-system";

export const Component = styled.div`
  width: 100%;
  background: ${(props) =>
    props.colors === "primary"
      ? "#3e98c728"
      : props.colors === "secondary"
      ? "#7356BF28"
      : props.colors === "danger"
      ? "#E1190028"
      : props.colors === "warning"
      ? "#66512C28"
      : props.colors === "info"
      ? "#17A2B828"
      : props.colors === "success"
      ? "#05944F28"
      : "#00000028"};
  border-radius: 20px;
  .progress-bar {
    ${colorStyle}
    border-radius: 20px;
  }
`;
export const Container = styled.div`
  display: block;
  width: 100%;
  .progress-text {
    display: flex;
    width: 100%;
    justify-content: center;
    color: ${(props) =>
      props.colors === "primary"
        ? "#3e98c7"
        : props.colors === "secondary"
        ? "#7356BF"
        : props.colors === "danger"
        ? "#E11900"
        : props.colors === "warning"
        ? "#66512C"
        : props.colors === "info"
        ? "#17A2B8"
        : props.colors === "success"
        ? "#05944F"
        : "#000000"};
  }
`;
