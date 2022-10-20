import {Box, styled} from '@mui/material'
import {ChatBubble} from '@mui/icons-material'
import React from 'react'

const Container = styled(Box)({
  border: 'solid 1px black',
  borderRadius: '3.5rem',
  width: '3.5rem',
  height: '3.5rem'
})

export const HelpBubble = () => {
  return <Container>
    <ChatBubble/>
  </Container>
}
