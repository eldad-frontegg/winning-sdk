import React from 'react'
import TextField from '@mui/material/TextField';
import {styled}  from "@mui/material/styles";
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';


const Input = styled(TextField)({
  width: '100%',
  height: '50%',
  backgroundColor: 'white'
})

const Container = styled(Box)({
  width: "100%",
  position:'relative'
})

export const TextInput = () => {
  const { t } = useTranslation()
  return (
    <>
      <Container>
        <Input inputProps={{ height: '50%'}}
          placeholder={t('chat.textInput.placeHolder')}
        />
      </Container>
    </>
  )
}



