import colors from "./colors";
import { DefaultTheme } from "styled-components";

export const theme : DefaultTheme = {
  colors,
  colorStyles: {
    primary: {
      color: colors.white,
      borderColor: colors.primary,
      backgroundColor: colors.primary,
      "&:hover": {
        color: colors.white,
        backgroundColor: colors.primaryHover,
      },
    },
    secondary: {
      color: colors.white,
      borderColor: colors.secondary,
      backgroundColor: colors.secondary,
      "&:hover": {
        color: colors.white,
        backgroundColor: colors.secondaryHover,
      },
    },
    light: {
      color: colors.dark,
      borderColor: colors.light,
      backgroundColor: colors.light,
      "&:hover": {
        color: colors.dark,
        backgroundColor: colors.lightHover,
      },
    },
    success: {
      color: colors.white,
      borderColor: colors.success,
      backgroundColor: colors.success,
      "&:hover": {
        color: colors.white,
        backgroundColor: colors.successHover,
      },
    },
    danger: {
      color: colors.white,
      borderColor: colors.danger,
      backgroundColor: colors.danger,
      "&:hover": {
        color: colors.white,
        backgroundColor: colors.dangerHover,
      },
    },
    warning: {
      color: colors.dark,
      borderColor: colors.warning,
      backgroundColor: colors.warning,
      "&:hover": {
        color: colors.dark,
        backgroundColor: colors.warningHover,
      },
    },
    dark: {
      color: colors.white,
      borderColor: colors.dark,
      backgroundColor: colors.dark,
      "&:hover": {
        color: colors.white,
        backgroundColor: colors.darkHover,
      },
    },
    white: {
      color: colors.dark,
      borderColor: colors.white,
      backgroundColor: colors.white,
      "&:hover": {
        color: colors.dark,
        backgroundColor: colors.whiteHover,
      },
    },
    info: {
      color: colors.white,
      borderColor: colors.info,
      backgroundColor: colors.info,
      "&:hover": {
        color: colors.white,
        backgroundColor: colors.infoHover,
      },
    },
  },
  buttonStyle: {
    primary: {
      color: colors.white,
      borderColor: colors.primary,
      backgroundColor: colors.primary,
    },
    secondary: {
      color: colors.white,
      borderColor: colors.secondary,
      backgroundColor: colors.secondary,
    },
    success: {
      color: colors.white,
      borderColor: colors.success,
      backgroundColor: colors.success,
    },
    danger: {
      color: colors.white,
      borderColor: colors.danger,
      backgroundColor: colors.danger,
    },
    warning: {
      color: colors.dark,
      borderColor: colors.warning,
      backgroundColor: colors.warning,
    },
  },
  lightStyle: {
    primary: {
      color: colors.primary,
      borderColor: colors.primary,
      backgroundColor: "#E6E6FF",
    },
    secondary: {
      color: colors.secondary,
      borderColor: colors.secondary,
      backgroundColor: "#F0EDF8",
    },
    success: {
      color: colors.success,
      borderColor: colors.success,
      backgroundColor: "#E7FAE7",
    },
    danger: {
      color: colors.danger,
      borderColor: colors.danger,
      backgroundColor: "#FCE9E9",
    },
    warning: {
      color: colors.dark,
      borderColor: colors.warning,
      backgroundColor: "#FFFBE6",
    },
    dark: {
      color: colors.white,
      borderColor: colors.dark,
      backgroundColor: "#333333",
    },
    white: {
      color: colors.dark,
      borderColor: colors.dark,
      backgroundColor: "#F9F9F9",
    },
  },
};
