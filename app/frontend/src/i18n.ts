import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './api/locales/en.json';
import translationFR from './api/locales/fr.json';
import translationES from './api/locales/es.json';
import translationDE from './api/locales/de.json';
import translationIT from './api/locales/it.json';
import translationPT from './api/locales/pt.json';
import translationRU from './api/locales/ru.json';
import translationZH from './api/locales/zh.json';
import translationJA from './api/locales/ja.json';
import translationKO from './api/locales/ko.json';

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  es: { translation: translationES },
  de: { translation: translationDE },
  it: { translation: translationIT },
  pt: { translation: translationPT },
  ru: { translation: translationRU },
  zh: { translation: translationZH },
  ja: { translation: translationJA },
  ko: { translation: translationKO },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
