/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui'
import Discord from './Discord'


const SocialsSection = () => {
  return (
    <Flex py={['1','3']} className='terms-gradient' sx={{justifyContent: 'center', alignItems: 'center'}}>
        <Discord />
    </Flex>
  )
    
}

export default SocialsSection