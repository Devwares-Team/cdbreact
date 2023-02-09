import styled from "styled-components";


interface Props {
  popperStyle? : any
}

export const Component = styled("div")<Props>`
  display: flex;
  flex-direction: column;
  min-height: 20px;
  min-width: 20px;
  background-color: #fff;
  border-radius: 0;
  color: #232323;
  padding: 0.3rem;
  ${(props) => props.popperStyle};
`;
