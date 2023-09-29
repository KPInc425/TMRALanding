/** @jsxImportSource theme-ui */
import { Box, Input, Button, Label, Checkbox, Textarea, Flex } from 'theme-ui'

type ContactFormProps = {
  showForm: boolean
  setShowForm: (showForm: boolean) => void
}


const ContactForm = ({showForm, setShowForm}: ContactFormProps) => {

  // const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
  //   e.preventDefault()
  //   console.log('submitted')
  //   console.log((e.target as HTMLFormElement).name.value)
  //   console.log((e.target as HTMLFormElement).email.value)
  //   console.log((e.target as HTMLFormElement).message.value)
  // }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // console.log('submitted')
    // console.log((e.target as HTMLFormElement).name.value)
    const subjectData = `${(e.target as HTMLFormElement).name.valueOf} - ${(e.target as HTMLFormElement).email.value}`
    // console.log((e.target as HTMLFormElement).email.value)
    const textData = (e.target as HTMLFormElement).message.value
    // console.log((e.target as HTMLFormElement).message.value)
    const htmlData = `
    <div style="padding: 24px; padding-right: 36px; border: 1px solid rgb(142, 142, 165); box-shadow: 1px 1px 1px rgb(142, 142, 165); font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; border-radius: 5px; justify-content: center; width: fit-content; max-width: 50%; margin: 0 auto; background-color: rgb(240, 240, 240);">
        <h3 style="border: 1px solid rgb(63, 63, 75); color:rgb(48, 48, 51); padding: 5px 10px; border-radius: 5px; box-shadow: 1px 1px 1px rgb(142, 142, 165); width: fit-content; margin-left: 12px;">Name</h3>
        <p style="margin-left: 24px; color:rgb(63, 63, 75);">${(e.target as HTMLFormElement).name.valueOf}</p>
        <h3 style="border: 1px solid rgb(63, 63, 75); color:rgb(48, 48, 51); padding: 5px 10px; border-radius: 5px; box-shadow: 1px 1px 1px rgb(142, 142, 165); width: fit-content; margin-left: 12px;">Email</h3>
        <p style="margin-left: 24px; color:rgb(63, 63, 75);">${(e.target as HTMLFormElement).email.valueOf}</p>
        <h4 style="border: 1px solid rgb(63, 63, 75); color:rgb(48, 48, 51); padding: 5px 10px; border-radius: 5px; box-shadow: 1px 1px 1px rgb(142, 142, 165); width: fit-content; margin-left: 12px;">Message</h4>
        <p style="margin-left: 24px; color:rgb(63, 63, 75);">${(e.target as HTMLFormElement).message.valueOf}</p></div>
    </div>
    `
    // console.log((e.target as HTMLFormElement).attachment.files[0])

    const emailData = {
      "subject": subjectData,
      "text": textData,
      "html": htmlData
    }

    console.log(emailData)

    const response = await fetch('http://localhost:3024/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    })

    console.log(response)

  }

  return (
    <form onSubmit={handleSubmit} sx={{width: ['100%', '50%'], marginX: 'auto'}}>
      <Label htmlFor="name">Name</Label>
      <Input name="name" id="name" mb={3} />
      <Label htmlFor="email">Email*</Label>
      <Input type="email" name="email" id="email" mb={3} required />
      <Label htmlFor="message">Message</Label>
      <Textarea name="message" id="message" rows={6} mb={3} />      
      <Box>
        <Label mb={3}>
          <Checkbox />
          Sign up for our email list for updates, promotinos, and more.
        </Label>
      </Box>
      <Flex sx={{flexDirection: ['column', 'row'], alignItems: 'center'}}>
        <Button 
          sx={{variant: 'buttons.secondary', width: '200px'}} 
          type='submit' 
        >
          Send Message</Button>
        <Button sx={{variant: 'buttons.basic', width: '200px'}} onClick={() => setShowForm(!showForm)}>Cancel</Button>
      </Flex>
    </form>
  )
}

export default ContactForm