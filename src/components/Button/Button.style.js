import styled, { css } from 'styled-components'
import { variant } from 'styled-system'
import colors from '../../theme/colors'
import tinycolor from 'tinycolor2'


export const Component = styled.div`
  box-shadow: ${(props) =>
    props.flat
      ? 'none'
      : '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)'};
  box-sizing: border-box;
  font-weight: 600;
  display:flex;
  justify-content:center;
  align-items:center;
  ${({ bg }) =>
    bg &&
    css`
      background: ${colors[`${bg}`]};
      color: #fff;
      &:hover {
        ${({ bg }) =>
          bg &&
          css`
            transform: scale(1.02);
            color: #fff;
          `};
    `}}

  ${variant({
    prop: 'size',
    variants: {
      xl: {
        padding: '12px 18.75px',
        fontSize: '1rem'
      },
      large: {
        padding: '8.75px 15px',
        fontSize: '1rem'
      },
      medium: {
        padding: '6px 12px',
        fontSize: '0.85rem'
      },
      small: {
        padding: '3px 6px',
        fontSize: '0.625rem'
      }
    }
  })};

  ${(props) =>
    props.circle === true
      ? css`
          border-radius: 30px;
        `
      : css`
          border-radius: 4px;
        `};

  ${(props) =>
    props.outline === true &&
    css`
      background: transparent;
      ${({ bg }) =>
        bg &&
        css`
          border: 2px solid ${colors[`${bg}`]};
          color: ${tinycolor(`${colors[`${bg}`]}`).darken(10)};
        `};
      border-width: 2px;
      &:hover {
        background: transparent;
        ${({ bg }) =>
          bg &&
          css`
            border: 2.4px solid ${colors[`${bg}`]};
            transform: scale(1.02);
            color: ${tinycolor(`${colors[`${bg}`]}`).darken(10)};
          `};
      }
    `};

`
