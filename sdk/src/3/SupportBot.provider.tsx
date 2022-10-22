import { LocalizationOptions, LocalizationProvider } from './localization';
import { jssPreset, StylesProvider, ThemeProvider } from '@mui/styles';
import { useFinalTheme } from './themes/theme.hooks';
import { ThemeOptions } from './themes';
import React, { useEffect } from 'react';
import { useShadowDom } from './hooks/shadowDom.hook';
import ReactDOM from 'react-dom';
import { create } from 'jss';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';


interface SupportBotProps {
  themeOptions?: ThemeOptions;
  localizationOptions?: LocalizationOptions;
  children: JSX.Element;
}

export const SupportBotProvider = ({ themeOptions, localizationOptions, children }: SupportBotProps) => {
  const theme = useFinalTheme(themeOptions);
  const { shadowRootElem, emotionRootElem } = useShadowDom();

  const jss = create({
    ...jssPreset(),
    insertionPoint: shadowRootElem,
  });

  const cache = createCache({
    key: 'css',
    prepend: true,
    container: emotionRootElem,
  });

  useEffect(() => {
    if (emotionRootElem && shadowRootElem) {
      ReactDOM.render(
        <StylesProvider jss={jss}>
          <CacheProvider value={cache}>
            <LocalizationProvider localizationOverrides={localizationOptions}>
              <ThemeProvider theme={theme}>
                {children}
              </ThemeProvider>
            </LocalizationProvider>
          </CacheProvider>
        </StylesProvider>, shadowRootElem);
    }
  }, [shadowRootElem, emotionRootElem]);
  return null;
};
