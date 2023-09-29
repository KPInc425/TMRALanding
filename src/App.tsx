import { ThemeUIProvider } from 'theme-ui'
import { theme } from './themes/defaultTheme'
import './App.css'
import Hero from './components/Hero'
import Reinforcement from './components/Reinforcement'
import Discord from './components/Discord'
import VideoGallery from './components/VideoGallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import { useState } from 'react'
import TermsAndConditions from './components/TermsAndConditions'

function App() {
  const [activeView, setActiveView] = useState(
    localStorage.getItem('activeView') || 'home'
  )

  return (
    <ThemeUIProvider theme={theme}>
      <Header activeView={activeView} setActiveView={setActiveView} />
      { activeView == 'home' &&
        <>
          <Hero />
          <Discord />
          <Reinforcement />
          <VideoGallery />
          {/* <Contact /> */}
        </>
      }
      { activeView == 'terms' &&
        <>
          <TermsAndConditions />
        </>
      }
      <Footer activeView={activeView} setActiveView={setActiveView}/>
    </ThemeUIProvider>
  )
}

export default App
