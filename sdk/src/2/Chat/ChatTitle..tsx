import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { ThemeOptions } from '../Themes';
import { useTheme } from '@mui/styles';
import { useMemo } from 'react';

const Container = styled(Box)(({$backgroundColor} : {$backgroundColor?: string}) => ({
  height: '15%',
  width: '100%',
  backgroundColor: $backgroundColor,
  display: 'flex',
  alignItems: 'center'
}));

const TextContainer = styled(Box)(({$textColor}: {$textColor?: string}) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  color: $textColor,
}));

const TitleIcon = styled(Avatar) ({
  margin: '2%'
})

interface ChatTitleProps {
  title: string;
  subTitle?: string;
  titleIcon?: string;
}

export const ChatTitle = ({ title, subTitle }: ChatTitleProps) => {
  const theme = useTheme<ThemeOptions>()

  const backgroundColor = useMemo(() =>
    theme.components?.chat?.header?.colors?.backgroundColor || theme.palette?.primary?.main
  , [theme])

  const textColor = useMemo(() =>
      theme.components?.chat?.header?.text?.color || theme.palette?.primary.light
    , [theme])

  return <Container $backgroundColor={backgroundColor}>
    <TitleIcon src={'https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/online_support-512.png'}/>
    <TextContainer $textColor={textColor}>
      <Typography variant={'h6'}>{title}</Typography>
      <Typography variant={'subtitle2'}>{subTitle}</Typography>
    </TextContainer>
  </Container>;
};
