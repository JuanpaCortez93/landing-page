import { useLanguage } from '../shared/hooks/useLanguage';
import sectionsData from '../shared/data/sections.json';
import AppRender from './render/AppRender';

import './App.css'
import Navbar from './features/Navbar/Navbar';

const App = () => {

  const { currentLang } = useLanguage()
  const pageSections = sectionsData[currentLang as 'en' | 'es'].sections

  return (
    <div>
      <Navbar />
      <div>
        {pageSections.map((section: any) => (
          <AppRender key={section.id} section={section}/>
        ))}
      </div>        
    </div>
  )
}

export default App
