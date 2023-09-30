/** @jsxImportSource theme-ui */
import { useRef, useState } from 'react'
import { Box, Flex, Text, Button } from "theme-ui";
import ContactForm from "./ContactForm";
import Toaster from './Toaster';

type ToasterHandle = {
  publish: () => void;
};

const Contact = () => {
  const [showForm, setShowForm] = useState(false)
  const successToasterRef = useRef<ToasterHandle>(null)
  const errorToasterRef = useRef<ToasterHandle>(null)
  const [toasterText, setToasterText] = useState('')

  const handleSuccessToaster = () => {
    successToasterRef.current?.publish()
  }
  const handleErrorToaster = () => {
    errorToasterRef.current?.publish()
  }

  return (
    <Box py={['4','6']}>
    <Box mx="auto" sx={{ width: "80vw" }}>
      { !showForm ? (
        <Flex sx={{ justifyContent: "center", alignItems: 'center', gap: "5", flexDirection: 'column' }}>
          <Text sx={{variant: 'text.subHeading', textAlign: 'center', fontSize: ['3','5']}}>Have a quest or a story to share? Send us a message and we'll get back to you soon.</Text>
          <Button sx={{variant: 'buttons.secondary', width: '200px'}} onClick={() => setShowForm(!showForm)}> Contact Us </Button>
        </Flex>
      ) : (
        <ContactForm showForm={showForm} setShowForm={setShowForm} setToasterText={setToasterText} handleSuccessToaster={handleSuccessToaster} handleErrorToaster={handleErrorToaster} />
      )}
      <Toaster ref={successToasterRef} bgColor={'rgb(90,106,79)'}>{toasterText}</Toaster>
      <Toaster ref={errorToasterRef} bgColor={'crimson'}>{toasterText}</Toaster>
    </Box>
  </Box>
  )
}

export default Contact