import React, { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { useI18n } from './init';
import { LocalizationOptions } from './types';

interface LocalizationProps {
  children: JSX.Element;
  localizationOverrides?: LocalizationOptions
}

export const LocalizationProvider = ({ children, localizationOverrides }: LocalizationProps) => {
  const [initialized, setInitialized] = useState(false);
  const i18n = useI18n({ overrides: localizationOverrides });
  useEffect(() => {
    i18n.init().then(() => setInitialized(true));
  }, [i18n, setInitialized]);
  return <I18nextProvider i18n={i18n}>
    {initialized && children}
  </I18nextProvider>;
};


export type {LocalizationOptions} from './types'
