/** @jsxImportSource theme-ui */
import { Box, Input, Button, Label, Checkbox, Textarea, Flex } from 'theme-ui'

type ContactFormProps = {
  showForm: boolean
  setShowForm: (showForm: boolean) => void
}


const ContactForm = ({showForm, setShowForm}: ContactFormProps) => {
  return (
    <Box as="form" mx='auto' onSubmit={(e) => e.preventDefault()} sx={{width: ['100%', '50%']}}>
      <Label htmlFor="name">Name</Label>
      <Input name="name" id="name" mb={3} />
      <Label htmlFor="email">Email*</Label>
      <Input type="email" name="email" id="email" mb={3} required />
      <Label htmlFor="message">Message</Label>
      <Textarea name="message" id="message" rows={6} mb={3} />
      <Label htmlFor='attachment'>Attach Files</Label>
      <Input type="file" id="attachment" name="attachment" sx={{border: 'none'}} />
      <Box>
        <Label mb={3}>
          <Checkbox />
          Sign up for our email list for updates, promotinos, and more.
        </Label>
      </Box>
      <Flex sx={{flexDirection: ['column', 'row'], alignItems: 'center'}}>
        <Button sx={{variant: 'buttons.secondary', width: '200px'}} onClick={() => setShowForm(!showForm)}>Send Message</Button>
        <Button sx={{variant: 'buttons.basic', width: '200px'}} onClick={() => setShowForm(!showForm)}>Cancel</Button>
      </Flex>
    </Box>
  )
}

export default ContactForm