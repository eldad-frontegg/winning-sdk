import React from 'react';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TextInput } from './TextInput.js';
import { MessageLeft, MessageRight } from './Message';
import Box from '@mui/material/Box';


const ChatContainer = styled(Paper)({
  width: '80vw',
  height: '80vh',
  maxWidth: '500px',
  maxHeight: '700px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
});

const MessageBody = styled(Paper)({
  width: 'calc( 100% - 20px )',
  margin: 10,
  overflowY: 'scroll',
  height: 'calc( 100% - 80px )',
});
const Container = styled(Box)({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Chat = ()=> {
  return (
    <Container>
      <ChatContainer zDepth={2}>
        <MessageBody>
          <MessageLeft
            message="あめんぼあかいなあいうえお"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName=""
            // avatarDisp={true}
          />
          <MessageLeft
            message="xxxxxhttps://yahoo.co.jp xxxxxxxxxあめんぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさいすせそ"
            timestamp="MM/DD 00:00"
            photoURL=""
            displayName="テスト"
            // avatarDisp={false}
          />
          <MessageRight
            message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
            // avatarDisp={true}
          />
          <MessageRight
            message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
            // avatarDisp={false}
          />
        </MessageBody>
        <TextInput/>
      </ChatContainer>
    </Container>
  );
}
