import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { TextInput } from './TextInput';
import { ChatMessages } from './ChatMessages';
import { ChatTitle } from './ChatTitle.';


const ChatContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  position: 'relative',
  backgroundColor: '#f9d3ff'
});


export const Chat = () => {
  return <ChatContainer>
    <ChatTitle title={'Support'} subTitle={'How can we assist?'}/>
    <ChatMessages/>
    <TextInput/>
  </ChatContainer>;
};
