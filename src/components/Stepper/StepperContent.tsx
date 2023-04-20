import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { StepperContext } from './Stepper'

interface Props {
  direction?: string
}

const Component = styled.div<Props>`
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

const StepperContent = () => {
  const { content, direction, active } = useContext(StepperContext)
  return (
    <Component direction={direction}>
      {content.map((item, idx) => {
        if (active === item.id) {
          return <div key={idx} className='content-container fade-in'>{item.node}</div>
        }
      })}
    </Component>
  )
}

export default StepperContent
