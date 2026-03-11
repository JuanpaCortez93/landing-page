import { useTranslation } from 'react-i18next'
import { setLang } from '../cache/language.cache'

export const useLanguage = () => {
  const { t, i18n } = useTranslation()

  const currentLang = i18n.language

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLang)
    setLang(newLang)
  }

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    setLang(lang)
  }

  return {
    t,
    currentLang,
    toggleLanguage,
    changeLanguage,
    isEnglish: currentLang === 'en',
    isSpanish: currentLang === 'es'
  }
}