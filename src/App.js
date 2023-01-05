import { ChakraProvider } from '@chakra-ui/react'
import ContactMeSection from './components/ContactMeSection'
import Header from './components/Header'
import LandingSection from './components/LandingSection'
import ProjectSection from './components/ProjectsSection'
import { AlertProvider } from './context/AlertContext'
import Alert from './components/Alert'

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectSection />
          <ContactMeSection />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  )
}

export default App
