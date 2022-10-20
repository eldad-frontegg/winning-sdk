import React from 'react'
import TextField from '@mui/material/TextField';
import {styled}  from "@mui/material/styles";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


const Input = styled(TextField)({
  width: '100%'
})

const Container = styled(Box)((theme) => ({
  display: "flex",
  justifyContent: "center",
  width: "95%",
  margin: `${theme.spacing(0)} auto`
}))


export const TextInput = () => {
  return (
    <>
      <Container>
        <Input
          id="standard-text"
          label="write text"
        />
        <Button variant="contained" color="primary">
          <SendIcon />
        </Button>
      </Container>
    </>
  )
}



