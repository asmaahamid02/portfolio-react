import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Textarea,
  Button,
  Heading,
  VStack,
} from '@chakra-ui/react'
import FullScreenSection from './FullScreenSection'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ContactMeSection = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            type: '',
            message: '',
        },
        onSubmit: values => {
    
        },
        validationSchema: Yup.object({}),
    });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor='#512DA8'
      py={16}
      spacing={8}
    >
      <VStack w='1024px' p={32} alignItems='flex-start'>
        <Heading as='h1' id='contactme-section'>
          Contact Me
        </Heading>
        <Box p={6} rounded='md' w='100%'>
          <form>
            <VStack spacing={4}>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor='firstName'>Name</FormLabel>
                <Input
                  id='firstName'
                  placeholder='First Name'
                  name='firstName'
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor='email'>Email Adress</FormLabel>
                <Input id='email' placeholder='Email' name='email' />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor='type'>Type of enquiry</FormLabel>
                <Select color="grey" id='type' name='type' placeholder='Select option'>
                  <option value='hireMe'>Freelance project proposal</option>
                  <option value='openSource'>
                    Open source consultancy session
                  </option>
                  <option value='other'>Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor='message'>Your message</FormLabel>
                <Textarea
                  id='message'
                  name='message'
                  placeholder='Your message'
                  height={250}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <Button type='submit' colorScheme='gray' color="purple" width='full'>
                Send
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  )
}

export default ContactMeSection
