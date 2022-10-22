import {ThemeOptions as MuiThemeOptions} from '@mui/material';

interface ComponentsTheme {
  supportButton?: {
    backgroundColor?: string;
    icon?: {
      color?: string;
    };
  };
  chat?: {
    size?: {
      width?: string;
      height?: string;
    }
    header?: {
      primaryImage?: string;
      text?: {
        font?: string;
        size?: string;
        color?: string;
      }
      colors?: {
        backgroundColor?: string;
      }
    }
    body?: {
      backgroundColor?: string;
      messages?: {
        botMessage?: {
          avatarImage?: string;
          text?: {
            font?: string;
            size?: string;
            color?: string;
          }
        }
        humanMessage?: {
          text?: {
            font?: string;
            size?: string;
            color?: string;
          }
        }
      }
    }
  };
}

interface PaletteColorOptions {
  light?: string;
  main: string;
  dark?: string;
}

interface Palette {
  primary: PaletteColorOptions;
  secondary: PaletteColorOptions;
}

export interface ThemeOptions {
  palette?: Palette
  typography?: MuiThemeOptions['typography']
  components?: ComponentsTheme
}
