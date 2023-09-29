/** @jsxImportSource theme-ui */
import { Box, Link } from 'theme-ui'

const discordInvite = 'https://discord.gg/kFcJvbbt2d';

const Discord = () => {
  return (
    <Box py={['2','2']} my={['4']} sx={{backgroundColor: 'text'}}>
      <Box mx="auto" sx={{ width: "80vw", textAlign: "center" }}>
        <Link href={discordInvite} sx={{variant: 'links.default', fontSize: '5'}}>Join TMRA Discord</Link>
      </Box>
    </Box>
  )
    
}

export default Discord