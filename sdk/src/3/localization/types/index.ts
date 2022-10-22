import { Resource } from 'i18next';
import { DeepPartial } from '../../../utils/types.utils';

interface TextTypes {
  chat: {
    header: {
      title: string,
      subTitle: string,
    }
    textInput: {
      placeHolder: string
    }
  }
}

export interface LocalizationType extends Resource{
  en: { translation: TextTypes }
}
export type LocalizationOptions = DeepPartial<LocalizationType>
