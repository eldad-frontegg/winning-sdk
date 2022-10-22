import i18n, { i18n as I18n, Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { localizationDefaults } from './defaults';
import { useMemo } from 'react';
import { LocalizationOptions } from './types';
import deepmerge from 'deepmerge';

interface Options {
  overrides?:  LocalizationOptions
}

export const useI18n = ({ overrides }: Options= {}): I18n => {

  const resources: Resource = useMemo(() => deepmerge(localizationDefaults, overrides || {}), [overrides]);

  return useMemo(() => i18n.use(initReactI18next).createInstance({
    keySeparator: '.',
    resources,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    fallbackLng: 'en',
  }), []);


};
