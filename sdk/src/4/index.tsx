import { SupportBotProvider } from './SupportBot.provider';
import { ThemeOptions } from './themes';
import { LocalizationOptions } from './localization';
import { HelpButton } from './components/HelpButton';
import React from 'react';
import ReactDOM from 'react-dom';

export * from './themes'
export * from './localization'

interface SupportBotProps {
  themeOptions?: ThemeOptions;
  localizationOptions?: LocalizationOptions
  container?: HTMLElement
}

const SupportBot = ({themeOptions, localizationOptions, container}: SupportBotProps) => {
  return <SupportBotProvider themeOptions={themeOptions} localizationOptions={localizationOptions} container={container}>
    <HelpButton/>
  </SupportBotProvider>
}



const render = (element: HTMLElement, props: SupportBotProps) => {
  ReactDOM.render(<SupportBot {...props} container={element}/>, element)
}

export { SupportBot, render }



