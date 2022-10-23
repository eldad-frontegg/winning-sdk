import React, { useMemo } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { TextInput } from './TextInput';
import { ChatMessages } from './ChatMessages';
import { ChatTitle } from './ChatTitle.';
import { ThemeOptions } from '../../themes';
import { useTheme } from '@mui/styles';


const ChatContainer = styled(Box)(({ $backgroundColor }: { $backgroundColor?: string }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  position: 'relative',
  backgroundColor: $backgroundColor,

}));


export const Chat = () => {
  const theme = useTheme<ThemeOptions>();

  const backgroundColor = useMemo(() =>
      theme.components?.chat?.body?.backgroundColor || theme.palette?.secondary?.main
    , [theme]);

  return <ChatContainer $backgroundColor={backgroundColor}>
    <ChatTitle/>
    <ChatMessages/>
    <TextInput/>
  </ChatContainer>;
};
