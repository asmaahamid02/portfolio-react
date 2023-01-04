import FullScreenSection from './FullScreenSection'
import { VStack, Heading, Avatar } from '@chakra-ui/react'

const greeting = 'Hello, I am Asmaa Hamid'
const brief = 'I am a Junior Web Developer'
const avatar = 'https://i.pravatar.cc/150?img=8'

const LandingSection = () => {
  return (
    <FullScreenSection
      justifyContent='center'
      alignItems='center'
      backgroundColor='#2A4365'
      isDarkBackground
    >
      <Avatar size='2xl' src={avatar} />
      <Heading  as='h6' size='xs' mt={4}>
        {greeting}
      </Heading>
      <Heading as='h3' size='lg' mt={4}>
        {brief}
      </Heading>
    </FullScreenSection>
  )
}

export default LandingSection
