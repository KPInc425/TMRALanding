/** @jsxImportSource theme-ui */
import { Box, Button, Flex, Link, Text } from 'theme-ui'

import { DiscordLogoIcon } from '@radix-ui/react-icons';

const discordInvite = 'https://discord.gg/kFcJvbbt2d';

const Discord = () => {
  return (
    <Link href={discordInvite} target='_blank'>
      <Button px='3' py='2'>
        <Flex sx={{alignItems: 'center', gap: '2'}}>
          <DiscordLogoIcon sx={{width: '30px', height: '30px'}}/>
          <Text>Discord</Text>
        </Flex>
      </Button>
    </Link>
  )
}

export default Discord