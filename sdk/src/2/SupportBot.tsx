import { Box, styled, ThemeProvider } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { Chat } from './components/Chat';
import SupportButton from './components/SupportButton';
import { ThemeOptions } from './themes/theme.type';
import { useFinalTheme } from './themes/theme.hooks';
import { LocalizationProvider } from './localization';
import { DeepPartial } from '../utils/types.utils';
import { LocalizationOptions, LocalizationType } from './localization/types';

const Container = styled(Box)({
  position: 'fixed',
  inset: 'auto 1rem 1rem auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
});

interface SupportBotProps {
  themeOptions: ThemeOptions;
  localizationOptions: LocalizationOptions
}

export const SupportBot = ({ themeOptions, localizationOptions }: SupportBotProps) => {
  const [showChat, setShowChat] = useState(false);
  const theme = useFinalTheme(themeOptions);
  const OnButtonClick = useCallback(() => {
    setShowChat((visible) => !visible);
  }, [setShowChat]);

  return <LocalizationProvider localizationOverrides={localizationOptions}>
    <ThemeProvider theme={theme}>
      <Container>
        {showChat && <Chat/>}
        <SupportButton onClick={OnButtonClick}/>
      </Container>
    </ThemeProvider>
  </LocalizationProvider>;
};
