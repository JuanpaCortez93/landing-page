const LANG_KEY = 'lang'

export const getLang = (): string => {
  return localStorage.getItem(LANG_KEY) || 'en'
}

export const setLang = (lang: string): void => {
  localStorage.setItem(LANG_KEY, lang)
}