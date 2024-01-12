import 'styled-components';
import lightTheme from '@themes/lightTheme';

declare module 'styled-components' {
  type ThemeType = typeof lightTheme;
  export interface DefaultTheme extends ThemeType {}
}
