/** @jsxImportSource theme-ui */

import { Box, Link, Flex, Text } from 'theme-ui'

type FooterProps = {
  activeView: string
  setActiveView: (activeView: string) => void
}

const Footer = ({setActiveView}: FooterProps) => {

  const handleViewChange = (view: string) => {
    localStorage.setItem('activeView', view)
    setActiveView(view)
  }

  return (
    <Box sx={{        
      backgroundImage: 'linear-gradient(90deg, rgb(48, 48, 48) 0%, rgb(30, 31, 30) 50%, rgb(48, 48, 48) 100%);',
      // height: '20vh' 
      }}
    >
      <Flex mx='auto' py={[2, 4]} sx={{justifyContent: 'space-between', width: '90vw', flexDirection: ['column', 'row'], textAlign: ['center', 'start']}}>
        <Text sx={{variant: 'text.subHeading', color: 'background', fontSize: ['2', '2', '3']}}>Copyright © 2023 TMRA.ai, Robot Builders Inc. - All Rights Reserved.</Text>
        <Text py={[3, 0]} sx={{variant: 'text.subHeading', color: 'background', fontSize: ['2', '2', '3']}}>Powered by Science</Text>
      </Flex>
      <Flex py={['2','4']} sx={{justifyContent: 'center', gap: ['2','4'], flexDirection: ['column', 'row'], textAlign: 'center'}}>
          <Link sx={{variant: 'links.default'}} onClick={() => handleViewChange('home')}>TMRA Home</Link>
          <Link sx={{variant: 'links.default'}} onClick={() => handleViewChange('terms')}>Terms and Conditions</Link>
      </Flex>
    </Box>
  )
}

export default Footer