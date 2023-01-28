import 'styled-components';

interface BasePallete {
    color: string
    borderColor: string
    backgroundColor: string
}

interface ColorStylePallete extends BasePallete{
  "&:hover" : {
    color: string
    backgroundColor: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: any
    colorStyles: {
        primary : ColorStylePallete,
        secondary: ColorStylePallete, 
        light : ColorStylePallete,
        success: ColorStylePallete, 
        danger : ColorStylePallete,
        warning: ColorStylePallete, 
        dark : ColorStylePallete,
        white: ColorStylePallete, 
        info: ColorStylePallete
    }
    buttonStyle: {
        primary: BasePallete
        secondary: BasePallete
        success: BasePallete
        danger: BasePallete
        warning: BasePallete
    }
    lightStyle:{
        primary : BasePallete,
        secondary: BasePallete, 
        success: BasePallete, 
        danger : BasePallete,
        warning: BasePallete, 
        dark : BasePallete,
        white: BasePallete, 
    }
  }
}