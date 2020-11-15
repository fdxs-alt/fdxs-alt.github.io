import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      grey_1: string;
      grey_2: string;
      grey_3: string;
      grey_4: string;
      grey_5: string;
      white: string;
    };
  }
}
