import FullScreenSection from './FullScreenSection'
import { Heading, Box } from '@chakra-ui/react'
import Card from './Card'

const projects = [
  {
    title: 'Touristy',
    description:
      'A Flutter App for travelers to find the best places to visit and share their experiences',
    getImageSrc: () => require('../assets/images/touristy.PNG'),
    gitHubRepoLink: 'https://github.com/asmaahamid02/touristy'
  },
  {
    title: 'E-Commerce',
    description:
      'A web app for an e-commerce store to sell their products online',
    getImageSrc: () => require('../assets/images/ecommerce.png'),
    gitHubRepoLink: 'https://github.com/asmaahamid02/e-comerce'
  },
  {
    title: 'Dating App',
    description: 'A web app for people to find their soulmates',
    getImageSrc: () => require('../assets/images/datingapp.png'),
    gitHubRepoLink: 'https://github.com/asmaahamid02/dating-website'
  },
  {
    title: 'E-Leaning App',
    description:
      'A web app for students and instructors to learn and track their courses',
    getImageSrc: () => require('../assets/images/elearning.png'),
    gitHubRepoLink: 'https://github.com/asmaahamid02/e-learning-system'
  },
]

const ProjectSection = () => {
  return (
    <FullScreenSection
      backgroundColor='#14532d'
      isDarkBackground
      p={8}
      alignItems='flex-start'
      spacing={8}
    >
      <Heading as='h1' id='projects-section'>
        Featured Projects
      </Heading>
      <Box display='grid' gridTemplateColumns="repeat(2,minmax(0,1fr))" gridGap={8}>
        {projects.map((project) => {
          return <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            gitHubRepoLink={project.gitHubRepoLink}
          />
        })}
      </Box>
    </FullScreenSection>
  )
}

export default ProjectSection
