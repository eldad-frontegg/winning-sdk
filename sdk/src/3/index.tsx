import { SupportBotProvider } from './SupportBot.provider';
import { ThemeOptions } from './themes';
import { LocalizationOptions } from './localization';
import { HelpButton } from './components/HelpButton';
import React from 'react';

export * from './themes'
export * from './localization'

interface SupportBotProps {
  themeOptions?: ThemeOptions;
  localizationOptions?: LocalizationOptions
}

export const SupportBot = ({themeOptions, localizationOptions}: SupportBotProps) => {
  return <SupportBotProvider themeOptions={themeOptions} localizationOptions={localizationOptions}>
    <HelpButton/>
  </SupportBotProvider>
}





