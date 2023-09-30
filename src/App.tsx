import { ThemeUIProvider } from 'theme-ui'
import { theme } from './themes/defaultTheme'
import './App.css'
import Hero from './components/Hero'
import Reinforcement from './components/Reinforcement'
import VideoGallery from './components/VideoGallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import { useState } from 'react'
import TermsAndConditions from './components/TermsAndConditions'
import SocialsSection from './components/SocialsSection'
import * as Toast from '@radix-ui/react-toast'

function App() {
  const [activeView, setActiveView] = useState(
    localStorage.getItem('activeView') || 'home'
  )

  return (
    <ThemeUIProvider theme={theme}>
      <Toast.Provider>
        <Header activeView={activeView} setActiveView={setActiveView} />
        { activeView == 'home' &&
          <>
            <Hero />
            <SocialsSection />
            <Reinforcement />
            <VideoGallery />
            <Contact />
          </>
        }
        { activeView == 'terms' &&
          <>
            <TermsAndConditions />
          </>
        }
        <Footer activeView={activeView} setActiveView={setActiveView}/>
        <Toast.Viewport style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999 }} />
      </Toast.Provider>
    </ThemeUIProvider>
  )
}

export default App
