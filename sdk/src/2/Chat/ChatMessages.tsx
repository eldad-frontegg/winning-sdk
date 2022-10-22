import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { BotMessage, HumanMessage } from './Messages';

const MessagesContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
})


export const ChatMessages = () => {
  return <MessagesContainer>
    <BotMessage text={'How can I assist?'}/>
    <HumanMessage text={"How do I pay for the banana?"}/>
    <BotMessage text={'Click on Add to cart on the item you would like and then click on the cart icon at the top to submit your order'}/>
    <HumanMessage text={'Thanks!'}/>
    <BotMessage text={'Have an amazing day!'}/>
  </MessagesContainer>
}
