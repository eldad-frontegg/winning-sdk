import { Box, styled } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { Chat } from './Chat';
import SupportButton from './SupportButton';


const Container = styled(Box)({
  position: 'fixed',
  inset: 'auto 1rem 1rem auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
});


export const HelpButton = () => {
  const [showChat, setShowChat] = useState(false);
  const OnButtonClick = useCallback(() => {
    setShowChat((visible) => !visible);
  }, [setShowChat]);

  return <Container>
    {showChat && <Chat/>}
    <SupportButton onClick={OnButtonClick}/>
  </Container>;
};
