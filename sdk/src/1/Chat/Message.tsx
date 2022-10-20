import React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography  from "@mui/material/Typography";


const MessageRowRight = styled(Box)({
  display: "flex",
  justifyContent: "flex-end"
})

const MessageOrange = styled(Box)({
  position: "relative",
  marginRight: "20px",
  marginBottom: "10px",
  padding: "10px",
  backgroundColor: "#f8e896",
  width: "60%",
  //height: "50px",
  textAlign: "left",
  font: "400 .9em 'Open Sans', sans-serif",
  border: "1px solid #dfd087",
  borderRadius: "10px",
  "&:after": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "0",
    borderTop: "15px solid #f8e896",
    borderLeft: "15px solid transparent",
    borderRight: "15px solid transparent",
    top: "0",
    right: "-15px"
  },
  "&:before": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "0",
    borderTop: "17px solid #dfd087",
    borderLeft: "16px solid transparent",
    borderRight: "16px solid transparent",
    top: "-1px",
    right: "-17px"
  }
})

const MessageBlue = styled(Box)({
  position: "relative",
  marginLeft: "20px",
  marginBottom: "10px",
  padding: "10px",
  backgroundColor: "#A8DDFD",
  width: "60%",
  //height: "50px",
  textAlign: "left",
  font: "400 .9em 'Open Sans', sans-serif",
  border: "1px solid #97C6E3",
  borderRadius: "10px",
  "&:after": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "0",
    borderTop: "15px solid #A8DDFD",
    borderLeft: "15px solid transparent",
    borderRight: "15px solid transparent",
    top: "0",
    left: "-15px"
  },
  "&:before": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "0",
    borderTop: "17px solid #97C6E3",
    borderLeft: "16px solid transparent",
    borderRight: "16px solid transparent",
    top: "-1px",
    left: "-17px"
  }
})

const MessageContent = styled(Typography)({
  padding: 0,
  margin: 0
})

const MessageTimestampRight = styled(Box)({
  position: "absolute",
  fontSize: ".85em",
  fontWeight: "300",
  marginTop: "10px",
  bottom: "-3px",
  right: "5px"
})

const MessageRow = styled(Box)({
  display: "flex"
})

const DisplayNameBox = styled(Box)({
  marginLeft: "20px"
})

interface MessageProps {
  message?: string;
  timestamp?: string;
  photoURL?: string
  displayName?: string;
}

export const MessageLeft = (props : MessageProps) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  const photoURL = props.photoURL ? props.photoURL : "dummy.js";
  const displayName = props.displayName ? props.displayName : "名無しさん";
  return (
    <>
      <MessageRow>
        <Avatar
          alt={displayName}
          // className={classes.orange}
          src={photoURL}
        ></Avatar>
        <MessageTimestampRight>
          <DisplayNameBox>{displayName}</DisplayNameBox>
          <MessageBlue>
            <div>
              <MessageContent>{message}</MessageContent>
            </div>
            <MessageTimestampRight>{timestamp}</MessageTimestampRight>
          </MessageBlue>
        </MessageTimestampRight>
      </MessageRow>
    </>
  );
};

export const MessageRight = (props: MessageProps) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  return (
    <MessageRowRight>
      <MessageOrange>
        <MessageContent>{message}</MessageContent>
        <MessageTimestampRight>{timestamp}</MessageTimestampRight>
      </MessageOrange>
    </MessageRowRight>
  );
};
