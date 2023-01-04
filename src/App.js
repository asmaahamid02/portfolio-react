import { ChakraProvider } from '@chakra-ui/react';
import ContactMeSection from './components/ContactMeSection';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectSection from './components/ProjectsSection';

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <LandingSection />
        <ProjectSection />
        <ContactMeSection />
      </main>
    </ChakraProvider>
  );
}

export default App;
