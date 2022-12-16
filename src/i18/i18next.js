import i18next from 'i18next';
import english from './en.json';
import portuguese from './pt.json';
import french from './fr.json';
import {initReactI18next} from 'react-i18next';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'pt',
  fallbackLng: 'pt',
  resources: {
    en: english,
    pt: portuguese,
    fr: french,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
