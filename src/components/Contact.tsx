/** @jsxImportSource theme-ui */
import { useState } from "react";
import { Box, Flex, Text, Button } from "theme-ui";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [showForm, setShowForm] = useState(false)
  return (
    <Box py={['4','6']}>
    <Box mx="auto" sx={{ width: "80vw" }}>
      { !showForm ? (
        <Flex sx={{ justifyContent: "center", alignItems: 'center', gap: "5", flexDirection: 'column' }}>
          <Text sx={{variant: 'text.subHeading', textAlign: 'center', fontSize: ['3','5']}}>Have a quest or a story to share? Send us a message and we'll get back to you soon.</Text>
          <Button sx={{variant: 'buttons.secondary', width: '200px'}} onClick={() => setShowForm(!showForm)}> Contact Us </Button>
        </Flex>
      ) : (
        <ContactForm showForm={showForm} setShowForm={setShowForm} />
      )}
    </Box>
  </Box>
  )
}

export default Contact