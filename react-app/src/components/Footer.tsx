import { SupportBot, ThemeOptions, LocalizationOptions } from 'winning-sdk';
import { Navbar } from 'react-bootstrap';

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#0d6efd'
    },
    secondary: {
      main: '#e5ecff'
    }
  },
  components: {
    supportButton: {
      icon: {
        color: '#ffffff'
      }
    },
    chat: {
      header: {
        text: {
          color: '#ffffff'
        }
      }
    }
  }
};

const localizationOptions: LocalizationOptions = {
  en: {
    translation: {
      chat: {
        header: {
          title: 'YouBuy support'
        },
        textInput: {
          placeHolder: 'cool cool cool'
        }
      },
    }
  }
}

export const Footer = () => {
  return <Navbar fixed={'bottom'}>
    <SupportBot themeOptions={themeOptions} localizationOptions={localizationOptions}/>
  </Navbar>
}
