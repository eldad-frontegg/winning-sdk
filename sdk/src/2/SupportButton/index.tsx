import { ChatBubble } from '@mui/icons-material';
import React from 'react';
import { Box, styled } from '@mui/material';
import { useTheme } from '@mui/styles';
import { ThemeOptions } from '../Themes';

interface SupportButtonProps {
  onClick: () => void
}

const ButtonContainer = styled(Box)(({ theme }) => ({
  borderRadius: '3rem',
  width: '3rem',
  height: '3rem',
  alignItems: 'center',
  justifyContent: 'space-around',
  display: 'flex',
  margin: '0.5rem',
  background: theme.palette.primary.main,
  cursor: 'pointer',
}));

const SupportButton = ({onClick}: SupportButtonProps) => {
  const theme = useTheme<ThemeOptions>()
  return <ButtonContainer onClick={onClick}>
    <ChatBubble htmlColor={theme.components?.supportButton?.icon?.color || theme.palette?.secondary?.main}/>
  </ButtonContainer>
}

export default SupportButton
