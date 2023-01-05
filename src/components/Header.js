import { Box, HStack } from '@chakra-ui/react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'

const socials = [
  {
    icon: faEnvelope,
    url: 'asmaahamid002@gmail.com',
  },
  {
    icon: faGithub,
    url: 'https://github.com/asmaahamid02',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/asmaa-hamid-716676235/',
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com/users/20266569/asmaa-hamid',
  },
]

const Header = () => {
  const headerRef = useRef()
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  const handleClick = (anchor) => {
    const id = `${anchor}-section`
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const handleScroll = (e) => {
      //show/hide header on scroll
      const currentScrollPos = window.pageYOffset
      if (currentScrollPos >= prevScrollPos || currentScrollPos === 0) {
        headerRef.current.style.transform = 'translateY(0)'
      } else {
        headerRef.current.style.transform = 'translateY(-100%)'
      }
      setPrevScrollPos(currentScrollPos)      
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])
  return (
    <Box
      position='fixed'
      top={0}
      left={0}
      right={0}
      translateY={200}
      transitionProperty='transform'
      transitionDuration='0.3s'
      transitionTimingFunction='ease-in-out'
      backgroundColor='#18181b'
      ref={headerRef}
    >
      <Box color='white' maxWidth='1280px' margin='0 auto'>
        <HStack
          px={16}
          py={4}
          justifyContent='space-between'
          alignItems='center'
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            {/*add anchor to HStack */}

            <HStack spacing={8} >
              {socials.map((social, index) => {
                return (
                  <a key={index} href={social.url} target='_blank'>
                    <FontAwesomeIcon icon={social.icon} size='2x' />
                  </a>
                )
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <button onClick={() => handleClick('projects')}>Projects</button>
              <button onClick={() => handleClick('contactme')}>Contact Me</button>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  )
}

export default Header
