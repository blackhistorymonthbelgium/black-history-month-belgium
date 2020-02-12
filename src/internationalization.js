import locales from './locales';
import NL from './locales/nl.json';
import EN from './locales/en.json';
import FR from './locales/fr.json';
import moment from 'moment';

function getDefaultLanguage() {
  for (let key in locales) {
    if (locales[key].default)
      return key;
  }
  return 'en';
}
export const defaultLanguage = getDefaultLanguage();

let currentLanguage = defaultLanguage;
const languages = {
  nl: NL,
  en: EN,
  fr: FR
}

export function setCurrentLanguage(language) {
  currentLanguage = language;
  moment.locale(language);
}

export function getCurrentLanguage() {
  return currentLanguage;
}

export function T(key, params) {
  return languages[currentLanguage][key];
}
