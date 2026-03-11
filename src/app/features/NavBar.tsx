import { useLanguage } from '../../shared/hooks/useLanguage'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { toggleLanguage, currentLang } = useLanguage()
  const { i18n } = useTranslation()

  // Obtienes todas las sections del idioma actual
  const bundle = i18n.getResourceBundle(currentLang, 'translation')
  const sections = bundle?.sections || []

  // Buscas por id
  const hero = sections.find((s: any) => s.id === 'hero')

  return (
    <nav>
      <span>{hero?.title}</span>
      <button onClick={toggleLanguage}>
        {currentLang === 'en' ? 'ES' : 'EN'}
      </button>
    </nav>
  )
}

export default Navbar