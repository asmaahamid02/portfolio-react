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
  CircularProgress,
  Alert,
} from '@chakra-ui/react'
import FullScreenSection from './FullScreenSection'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useSubmit from '../hooks/useSubmit'
import { useAlertContext } from '../context/AlertContext'

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit()
  const { onOpen } = useAlertContext()
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      message: '',
    },
    onSubmit: (values) => {
      submit('', values)

      onOpen(response.type, response.message)
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('Required')
        .min(5, 'Must be at least 5 characters'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string()
        .required('Required')
        .min(25, 'Must be at least 25 characters'),
    }),
  })

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
          <form
            onSubmit={(e) => {
              formik.handleSubmit(e)
            }}
          >
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.errors.firstName && formik.touched.firstName}
              >
                <FormLabel htmlFor='firstName'>Name</FormLabel>
                <Input
                  id='firstName'
                  placeholder='First Name'
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.errors.email && formik.touched.email}
              >
                <FormLabel htmlFor='email'>Email Adress</FormLabel>
                <Input
                  id='email'
                  placeholder='Email'
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor='type'>Type of enquiry</FormLabel>
                <Select
                  color='grey'
                  id='type'
                  placeholder='Select option'
                  {...formik.getFieldProps('type')}
                >
                  <option value='hireMe'>Freelance project proposal</option>
                  <option value='openSource'>
                    Open source consultancy session
                  </option>
                  <option value='other'>Other</option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={formik.errors.message && formik.touched.message}
              >
                <FormLabel htmlFor='message'>Your message</FormLabel>
                <Textarea
                  id='message'
                  placeholder='Your message'
                  height={250}
                  {...formik.getFieldProps('message')}
                />
                <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
              </FormControl>
              {isLoading ? (
                <CircularProgress isIndeterminate color='purple' />
              ) : (
                <Button
                  type='submit'
                  colorScheme='gray'
                  color='purple'
                  width='full'
                >
                  Send
                </Button>
              )}
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  )
}

export default ContactMeSection
