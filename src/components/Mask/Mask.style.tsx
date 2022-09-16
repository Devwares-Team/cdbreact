import styled from "styled-components";
import { variant, space, colorStyle } from "styled-system";

const patternGroup = {
  pattern1: "img/overlays/01.png",
  pattern2: "img/overlays/02.png",
  pattern3: "img/overlays/03.png",
  pattern4: "img/overlays/04.png",
  pattern5: "img/overlays/05.png",
  pattern6: "img/overlays/06.png",
  pattern7: "img/overlays/07.png",
  pattern8: "img/overlays/08.png",
  pattern9: "img/overlays/09.png",
};
const {
  pattern1,
  pattern2,
  pattern3,
  pattern4,
  pattern5,
  pattern6,
  pattern7,
  pattern8,
  pattern9,
} = patternGroup;
export const Component = styled("span")(
  space,
  colorStyle,
  {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100 %",
    height: "100 %",
    overflow: " hidden",
    backgroundAttachment: "fixed",
  },

  variant({
    prop: "pattern",

    variants: {
      pattern1: {
        backgroundImage: `url(${pattern1})`,
        backgroundAttachment: "fixed",
      },
      pattern2: {
        backgroundImage: `url(${pattern2})`,
        backgroundAttachment: "fixed",
      },
      pattern3: {
        backgroundImage: `url(${pattern3})`,
        backgroundAttachment: "fixed",
      },
      pattern4: {
        backgroundImage: `url(${pattern4})`,
        backgroundAttachment: "fixed",
      },
      pattern5: {
        backgroundImage: `url(${pattern5})`,
        backgroundAttachment: "fixed",
      },
      pattern6: {
        backgroundImage: `url(${pattern6})`,
        backgroundAttachment: "fixed",
      },
      pattern7: {
        backgroundImage: `url(${pattern7})`,
        backgroundAttachment: "fixed",
      },
      pattern8: {
        backgroundImage: `url(${pattern8})`,
        backgroundAttachment: "fixed",
      },
      pattern9: {
        backgroundImage: `url(${pattern9})`,
        backgroundAttachment: "fixed",
      },
    },
  }),
  variant({
    prop: "overlay",
    variants: {
      blueLight: {
        backgroundColor: "rgba(33,150,243,0.3)",
        color: "#222222",
      },
      redLight: {
        backgroundColor: "rgba(244,67,54,0.3);",
        color: "#222222",
      },
      pinkLight: {
        backgroundColor: "rgba(233,30,99,0.3",
        color: "#222222",
      },
      yellowLight: {
        backgroundColor: "rgba(255,235,59,0.3)",
        color: "#222222",
      },
      orangeLight: {
        backgroundColor: "rgba(255,152,0,0.3)",
        color: "#222222",
      },
      purpleLight: {
        backgroundColor: "rgba(156,39,176,0.3)",
        color: "#222222",
      },
      brownLight: {
        backgroundColor: "rgba(33,150,243,0.3)",
        color: "#222222",
      },
      tealLight: {
        backgroundColor: "rgba(0,150,136,0.3)",
        color: "#222222",
      },
      cyanLight: {
        backgroundColor: "rgba(0,188,212,0.3)",
        color: "#222222",
      },
      greenLight: {
        backgroundColor: "rgba(76,175,80,0.3);",
        color: "#222222",
      },
      indigoLight: {
        backgroundColor: "rgba(63,81,181,0.3)",
        color: "#222222",
      },
      darkLight: {
        backgroundColor: "rgba(0,0,0,0.3)",
        color: "white",
      },

      blueStrong: {
        backgroundColor: "rgba(33,150,243,0.7)",
        color: "white",
      },
      redStrong: {
        backgroundColor: "rgba(244,67,54,0.7);",
        color: "white",
      },
      pinkStrong: {
        backgroundColor: "rgba(233,30,99,0.7",
        color: "white",
      },
      yellowStrong: {
        backgroundColor: "rgba(255,235,59,0.7)",
        color: "white",
      },
      orangeStrong: {
        backgroundColor: "rgba(255,152,0,0.7)",
        color: "white",
      },
      purpleStrong: {
        backgroundColor: "rgba(156,39,176,0.7)",
        color: "white",
      },
      brownStrong: {
        backgroundColor: "rgba(153,102,51,0.7)",
        color: "white",
      },
      tealStrong: {
        backgroundColor: "rgba(0,150,136,0.7)",
        color: "white",
      },
      cyanStrong: {
        backgroundColor: "rgba(0,188,212,0.7)",
        color: "white",
      },
      greenStrong: {
        backgroundColor: "rgba(76,175,80,0.7);",
        color: "white",
      },
      indigoStrong: {
        backgroundColor: "rgba(63,81,181,0.7)",
        color: "white",
      },
      darkStrong: {
        backgroundColor: "rgba(0,0,0,0.7)",
        color: "white",
      },
    },
  })
);
