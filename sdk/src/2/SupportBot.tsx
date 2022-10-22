import { Box, styled, ThemeProvider } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { Chat } from './Chat';
import SupportButton from './SupportButton';
import { ThemeOptions } from './Themes/theme.type';
import { useFinalTheme } from './Themes/theme.hooks';

const Container = styled(Box)({
  position: 'fixed',
  inset: 'auto 1rem 1rem auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
});

interface SupportBotProps {
  themeOptions: ThemeOptions
}

export const SupportBot = ({ themeOptions }: SupportBotProps) => {
  const [showChat, setShowChat] = useState(false);
  const theme = useFinalTheme(themeOptions)
  const OnButtonClick = useCallback(() => {
    setShowChat((visible) => !visible);
  }, [setShowChat]);

  return <ThemeProvider theme={theme}>
    <Container>
      {showChat && <Chat/>}
      <SupportButton onClick={OnButtonClick}/>
    </Container>
  </ThemeProvider>;
};
