import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { BOT_IMAGE_URL } from '../../utils/bot.utils';

const MessageContainer = styled(Box)<{ $rtl?: boolean }>(({ $rtl }) => {
  return {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: $rtl ? 'row-reverse' : undefined,
  };
});

const BotImage = styled(Avatar)({
  margin: '2%',
});

const MessageText = styled(Typography)({
  padding: '2%',
});

interface MessageProps {
  text: string;
  rtl?: boolean;
  image?: string;
}

const Message = ({ text, rtl, image }: MessageProps) => {
  return <MessageContainer $rtl={rtl}>
    {image && <BotImage src={image}/>}
    <MessageText variant={'subtitle1'}>{text}</MessageText>
  </MessageContainer>;
};


type BotMessageProps = Omit<MessageProps, 'rtl'>

export const BotMessage = ({ text, image = BOT_IMAGE_URL }: BotMessageProps) => {
  return <Message text={text} image={image}/>;
};


type HumanMessageProps = Omit<BotMessageProps, 'image'>

export const HumanMessage = ({ text }: HumanMessageProps) => {
  return <Message text={text} rtl={true}/>;
};
