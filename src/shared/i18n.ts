import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getLang } from './cache/language.cache'
import sections from './data/sections.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: sections.en },
      es: { translation: sections.es }
    },
    lng: getLang(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n