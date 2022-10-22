import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const Container = styled(Box)({
  height: '15%',
  width: '100%',
  backgroundColor: '#f691ff',
  display: 'flex',
  alignItems: 'center'
});

const TextContainer = styled(Box)({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const TitleIcon = styled(Avatar) ({
  margin: '2%'
})

interface ChatTitleProps {
  title: string;
  subTitle?: string;
  titleIcon?: string;
}

export const ChatTitle = ({ title, subTitle }: ChatTitleProps) => {
  return <Container>
    <TitleIcon src={'https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/online_support-512.png'}/>
    <TextContainer>
      <Typography variant={'h6'}>{title}</Typography>
      <Typography variant={'subtitle2'}>{subTitle}</Typography>
    </TextContainer>
  </Container>;
};
