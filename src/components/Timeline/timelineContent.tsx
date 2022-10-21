import React, { useContext } from 'react'
import styled, { css } from 'styled-components'


const Component = styled.div`
  display: flex;
  ${({ direction }) =>
    direction === 'vertical' &&
    css`
      width: calc(100% - 150px);
    `}
  ${({ direction }) =>
    direction === 'horizontal' &&
    css`
      width: 100%;
    `}
    .content-container {
    width: 100%;
    padding: 15px 10px;
  }
  .content-transition {
    width: 100%;
  }
  .fade-in {
    animation: fadeIn 0.5s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      margin-top: -20px;
    }
    100% {
      opacity: 1;
      margin-top: 0px;
    }
  }
`
