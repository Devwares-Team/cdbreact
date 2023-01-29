import styled, { css } from "styled-components";


interface Props {
  zoom: boolean
  rounded: boolean
  hover: boolean
}

export const Component = styled.div<Props>`
  position: relative;
  overflow: hidden;
  cursor: default;
  ${(props) => {
    props.zoom
      ? css`
          img,
          video {
            transition: all 0.2s linear;
          }
          &:hover img,
          &:hover video {
            transform: scale(1.1);
          }
        `
      : css``;
  }}
  .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-attachment: fixed;
  }
  img,
  video {
    position: relative;
    display: block;
  }
  .video.video-intro {
    top: 50%;
    left: 50%;
    z-index: -100;
    width: auto;
    min-width: 100%;
    height: auto;
    min-height: 100%;
    transition: 1s opacity;
    transform: translateX(-50%) translateY(-50%);
  }
  border-radius: ${(props) => (props.rounded ? "0.25rem !important" : "0")};
  ${(props) =>
    props.hover
      ? css`
          .mask {
            opacity: 0;
            transition: all 0.4s ease-in-out;
            &:hover {
              opacity: 1;
            }
          }
        `
      : null}
`;
