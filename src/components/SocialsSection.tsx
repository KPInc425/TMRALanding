/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui'
import Discord from './Discord'


const SocialsSection = () => {
  return (
    <Flex py={['1','4']} sx={{backgroundColor: 'text', justifyContent: 'center', alignItems: 'center'}}>
        <Discord />
    </Flex>
  )
    
}

export default SocialsSection