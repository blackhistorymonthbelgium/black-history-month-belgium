import { defaultLanguage } from './locales';
import NL from './locales/nl.json';
import EN from './locales/en.json';
import FR from './locales/fr.json';

let currentLanguage = defaultLanguage;
const languages = {
  nl: NL,
  en: EN,
  fr: FR
}

export function setCurrentLanguage(language) {
  currentLanguage = language;
}

export function getCurrentLanguage() {
  return currentLanguage;
}

export function T(key, params) {
  return languages[currentLanguage][key];
}
