import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importation des fichiers de traduction
import translationEN from './locales/en.json';
import translationFR from './locales/fr.json';
import translationES from './locales/es.json';
import translationDE from './locales/de.json';
import translationIT from './locales/it.json';
import translationPT from './locales/pt.json';
import translationRU from './locales/ru.json';
import translationZH from './locales/zh.json';
import translationJA from './locales/ja.json';
import translationKO from './locales/ko.json';

// Configuration des ressources
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
  ko: { translation: translationKO }
};

i18n
  // Détecte la langue de l'utilisateur via le navigateur
  .use(LanguageDetector)
  // Passe l'instance i18n à react-i18next.
  .use(initReactI18next)
  // Initialise i18next
  .init({
    resources,
    fallbackLng: 'en', // Langue par défaut si la langue détectée n'est pas disponible
    debug: true, // Désactivez en production (false)

    interpolation: {
      escapeValue: false, // React s'occupe déjà de l'échappement (XSS)
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;