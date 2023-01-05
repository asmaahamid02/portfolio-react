import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({ title, description, imageSrc, gitHubRepoLink }) => {
  return (
    <VStack
      backgroundColor='white'
      color='black'
      borderRadius='lg'
      alignItems='flex-start'
      maxWidth='lg'
      maxHeight='lg'
      pb={4}
    >
      <Image src={imageSrc} alt={title} borderRadius='lg' />
      <Heading as='h3' size='md' pl={4}>
        {title}
      </Heading>
      <Text fontSize='sm' pl={4}>
        {description}
      </Text>
      <a href={gitHubRepoLink} target='_blank' rel='noreferrer'>
        <HStack>
          <Text fontSize='xs' pl={4} as="b">
            View on GitHub
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size='xs' />
        </HStack>
      </a>
    </VStack>
  )
}

export default Card
