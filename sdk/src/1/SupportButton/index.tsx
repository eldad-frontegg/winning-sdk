import { ChatBubble } from '@mui/icons-material';
import React from 'react';
import { Box, styled } from '@mui/material';

interface SupportButtonProps {
  onClick: () => void
}

const ButtonContainer = styled(Box)({
  borderRadius: '3rem',
  width: '3rem',
  height: '3rem',
  alignItems: 'center',
  justifyContent: 'space-around',
  display: 'flex',
  margin: '0.5rem',
  background: '#f691ff',
  cursor: 'pointer',
});

const SupportButton = ({onClick}: SupportButtonProps) => {
  return <ButtonContainer onClick={onClick}>
    <ChatBubble htmlColor={'black'}/>
  </ButtonContainer>
}

export default SupportButton
