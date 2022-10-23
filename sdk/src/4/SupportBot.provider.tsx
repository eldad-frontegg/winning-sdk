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
  container?: HTMLElement;
  children: JSX.Element;
}

export const SupportBotProvider = ({ themeOptions, localizationOptions, children, container }: SupportBotProps) => {
  const theme = useFinalTheme(themeOptions);
  const { shadowRootElem, emotionRootElem } = useShadowDom(container);

  const cache = createCache({
    key: 'css',
    prepend: true,
    container: emotionRootElem,
  });

  useEffect(() => {
    if (emotionRootElem && shadowRootElem) {
      ReactDOM.render(
          <CacheProvider value={cache}>
            <LocalizationProvider localizationOverrides={localizationOptions}>
              <ThemeProvider theme={theme}>
                {children}
              </ThemeProvider>
            </LocalizationProvider>
          </CacheProvider>, shadowRootElem);
    }
  }, [shadowRootElem, emotionRootElem]);
  return null;
};
