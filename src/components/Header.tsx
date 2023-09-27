import { Box, Link, Flex } from 'theme-ui'

type HeaderProps = {
  activeView: string
  setActiveView: (activeView: string) => void
}


const Header = ({activeView, setActiveView}: HeaderProps) => {

  const handleViewChange = (view: string) => {
    localStorage.setItem('activeView', view)
    setActiveView(view)
  }

  return (
    <Box className={(activeView == 'home' ? 'terms-gradient' : 'terms-gradient')}>
      <Flex py='3' sx={{justifyContent: 'center', alignContent: 'center', gap: ['2','4'], flexDirection: ['column', 'row'], textAlign: 'center'}}>
        <Link sx={{variant: 'links.default'}} onClick={() => handleViewChange('home')}>{activeView == 'home' ? '-' : ''}TMRA Home</Link>
        <Link sx={{variant: 'links.default'}} onClick={() => handleViewChange('terms')}>{activeView == 'terms' ? '-' : ''}Terms and Conditions</Link>
      </Flex>
    </Box>
  )
}

export default Header